import { Button, Card, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

import PageContainer from "@/components/PageContainer";

function ProfilePage() {
  const { t } = useTranslation();

  return (
    <PageContainer
      title={t("pages.profile.title")}
      subtitle={t("pages.profile.subtitle")}
    >
      <Card style={{ maxWidth: 520 }}>
        <Form
          layout="vertical"
          initialValues={{ name: "Nguyen Van A", email: "a@authly.dev" }}
          onFinish={(values) => console.log("save profile", values)}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              {t("actions.save")}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
}

export default ProfilePage;
