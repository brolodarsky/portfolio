import { NEXUS_TELEMETRY, NexusTelemetryConfig } from "@/data/nexusTelemetry";

/**
 * Parses semantic version and extracts major.minor short version.
 * e.g., "2.9.0" -> "2.9", "3.0.1" -> "3.0"
 */
function toShortVersion(version: string): string {
  const parts = version.split(".");
  if (parts.length >= 2) {
    return `${parts[0]}.${parts[1]}`;
  }
  return version;
}

/**
 * Fetches the latest Nexus version from GitHub CHANGELOG.md
 * with ISR caching (revalidates every hour). Falls back to static configuration.
 */
export async function getNexusTelemetry(): Promise<NexusTelemetryConfig> {
  try {
    const changelogUrl =
      "https://raw.githubusercontent.com/brolodarsky/Nexus/master/CHANGELOG.md";

    const res = await fetch(changelogUrl, {
      next: { revalidate: 3600 }, // Check for new releases hourly
      headers: {
        "User-Agent": "NexusPortfolio/1.0",
      },
    });

    if (!res.ok) {
      return NEXUS_TELEMETRY;
    }

    const text = await res.text();
    // Match the first '## [x.y.z]' version header
    const match = text.match(/##\s+\[(\d+\.\d+(?:\.\d+)?)\]/);

    if (match && match[1]) {
      const liveVersion = match[1];
      return {
        ...NEXUS_TELEMETRY,
        version: liveVersion,
        shortVersion: toShortVersion(liveVersion),
      };
    }
  } catch {
    // Graceful fallback if offline, rate limited, or during build without network
  }

  return NEXUS_TELEMETRY;
}
