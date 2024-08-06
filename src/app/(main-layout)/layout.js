import { ConfigProvider } from "antd";

export default function MainLayout({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {

        },
      }}
    >
      <body>{children}</body>
    </ConfigProvider>
  );
}
