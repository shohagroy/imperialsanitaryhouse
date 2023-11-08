import AdminHeader from "@/components/admin/AdminHeader";
import SideBar from "@/components/admin/SideBar";
import { Layout } from "antd";

const { Content } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <SideBar />

      <Content
        style={{
          minHeight: "100vh",
          color: "black",
        }}
      >
        <AdminHeader role={"admin"} name={"Shohag Roy"} />

        <div
          style={{
            padding: "10px",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
