import { Card, Col, Row, Statistic } from "antd";
import { useTranslation } from "react-i18next";

import PageContainer from "@/components/PageContainer";

function DashboardPage() {
  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("pages.dashboard.title")}
      subtitle={t("pages.dashboard.subtitle")}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title={t("nav.users")} value={1280} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title="Active sessions" value={93} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title="Sign-ins today" value={342} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
}

export default DashboardPage;
