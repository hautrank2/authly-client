import type { ReactNode } from "react";
import { Space, Typography } from "antd";

type PageContainerProps = {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
  children?: ReactNode;
};

function PageContainer({ title, subtitle, extra, children }: PageContainerProps) {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <Typography.Title level={3} style={{ marginBottom: 4 }}>
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Text type="secondary">{subtitle}</Typography.Text>
          )}
        </div>
        {extra}
      </div>
      {children}
    </Space>
  );
}

export default PageContainer;
