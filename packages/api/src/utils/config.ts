import dotenv from "dotenv";
dotenv.config();

const CONFIG_KEYS = ["JWT_TOKEN", "JWT_ISSUER", "JWT_AUDIENCE", "WEB_URL"] as const;
type ConfigKey = (typeof CONFIG_KEYS)[number];

export const config: Record<ConfigKey, string> = Object.fromEntries(
  CONFIG_KEYS.map((key) => {
    const value = process.env[key];

    if (!value) {
      console.error(`Error: Config value '${key}' not set.`);
      process.exit(1);
    }

    return [key, value];
  })
) as Record<ConfigKey, string>;

export default config;
