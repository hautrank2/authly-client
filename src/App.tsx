import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import viVN from "antd/locale/vi_VN";
import "dayjs/locale/vi";
import "dayjs/locale/en";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import type { SupportedLng } from "./i18n/resources";
import { router } from "./router";
import { themeConfig } from "./theme";
import "./App.css";

const antdLocales = { en: enUS, vi: viVN };

function App() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en") as SupportedLng;

  return (
    <ConfigProvider locale={antdLocales[current]} theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
