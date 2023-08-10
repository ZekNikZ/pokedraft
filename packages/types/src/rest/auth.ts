import t from "io-ts";

export const DiscordLoginRequestValidator = t.type(
  {
    discordId: t.string,
  },
  "DiscordLoginRequest"
);
export type DiscordLoginRequest = t.TypeOf<typeof DiscordLoginRequestValidator>;
