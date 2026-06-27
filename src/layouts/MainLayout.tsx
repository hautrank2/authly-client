import { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import LanguageSwitcher from "@/components/LanguageSwitcher";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps["items"] = [
    { key: "/", icon: <AppstoreOutlined />, label: t("nav.dashboard") },
    { key: "/users", icon: <TeamOutlined />, label: t("nav.users") },
    { key: "/profile", icon: <UserOutlined />, label: t("nav.profile") },
    { key: "/settings", icon: <SettingOutlined />, label: t("nav.settings") },
  ];

  // Highlight the deepest route that matches the current path.
  const selectedKey =
    items
      .map((item) => item!.key as string)
      .filter((key) => key === "/" ? location.pathname === "/" : location.pathname.startsWith(key))
      .sort((a, b) => b.length - a.length)[0] ?? "/";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
        style={{ borderInlineEnd: "1px solid rgba(5, 5, 5, 0.06)" }}
      >
        <div
          style={{
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
          }}
        >
          <Typography.Title level={4} style={{ margin: 0 }} ellipsis>
            {collapsed ? "A" : t("appName")}
          </Typography.Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 16,
            background: "#fff",
            paddingInline: 24,
            borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
          }}
        >
          <LanguageSwitcher />
        </Header>

        <Content style={{ margin: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
