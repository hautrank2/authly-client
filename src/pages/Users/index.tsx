import { useTranslation } from "react-i18next";
import PageContainer from "@/components/PageContainer";

function UsersPage() {
  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("pages.users.title")}
      subtitle={t("pages.users.subtitle")}
    ></PageContainer>
  );
}

export default UsersPage;
