import enCommon from "./locales/en/common.json";
import viCommon from "./locales/vi/common.json";

export const defaultNS = "common";

export const resources = {
  en: { common: enCommon },
  vi: { common: viCommon },
} as const;

export const supportedLngs = ["en", "vi"] as const;
export type SupportedLng = (typeof supportedLngs)[number];
