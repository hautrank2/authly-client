import { Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageContainer from "@/components/PageContainer";

function SettingsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("pages.settings.title")}
      subtitle={t("pages.settings.subtitle")}
    >
      <Card style={{ maxWidth: 520 }}>
        <Space
          style={{ width: "100%", justifyContent: "space-between" }}
          align="center"
        >
          <Typography.Text>{t("language")}</Typography.Text>
          <LanguageSwitcher />
        </Space>
      </Card>
    </PageContainer>
  );
}

export default SettingsPage;
