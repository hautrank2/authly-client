import { Segmented } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import type { SupportedLng } from "@/i18n/resources";
import { supportedLngs } from "@/i18n/resources";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? "en") as SupportedLng;

  const changeLanguage = (lng: SupportedLng) => {
    i18n.changeLanguage(lng);
    dayjs.locale(lng);
  };

  return (
    <Segmented<SupportedLng>
      value={current}
      onChange={changeLanguage}
      options={supportedLngs.map((lng) => ({
        label: lng.toUpperCase(),
        value: lng,
      }))}
    />
  );
}

export default LanguageSwitcher;
