import type { ThemeConfig } from "antd";

// Font stack — Inter (loaded in index.html) with system fallbacks.
export const fontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ' +
  '"Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif';

export const themeConfig: ThemeConfig = {
  // Generate CSS variables so styles stay stable across re-renders.
  cssVar: { prefix: "authly" },
  token: {
    colorPrimary: "#1677ff",
    fontFamily,
    fontSize: 14,
    borderRadius: 8,
  },
};

export default themeConfig;
