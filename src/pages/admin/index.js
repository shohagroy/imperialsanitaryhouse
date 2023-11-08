import React from "react";
import { Button, Result } from "antd";
import AdminLayout from "@/layouts/AdminLayouts";

const AdminDashboard = () => {
  return (
    <>
      <main>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </main>
    </>
  );
};

AdminDashboard.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminDashboard;
