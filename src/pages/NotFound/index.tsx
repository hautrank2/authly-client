import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title={t("pages.notFound.title")}
      subTitle={t("pages.notFound.subtitle")}
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          {t("pages.notFound.back")}
        </Button>
      }
    />
  );
}

export default NotFoundPage;
