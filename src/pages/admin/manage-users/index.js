import React from "react";
import AdminBreadCrumb from "@/components/admin/AdminBreadCrumb";
import AdminLayout from "@/layouts/AdminLayouts";
import { Button, Card, Col, Input, Row, Select } from "antd";
import Head from "next/head";
import Link from "next/link";
import TableUi from "@/components/admin/Table";

const { Search } = Input;

const ManageUsers = () => {
  const breadCrumbItems = [
    {
      label: <Link href={"/admin"}>Admin</Link>,
      link: "/admin",
    },
    {
      label: "Manage Users",
      link: "/admin/manage-users",
    },
  ];

  const onSearch = (e) => {
    console.log("search");
  };

  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const tableColumns = [
    {
      title: "Avatar",
      dataIndex: "Avatar",
      width: "10%",
    },
    {
      title: "Username",
      dataIndex: "Username",
      width: "15%",
    },
    {
      title: "Full Name",
      dataIndex: "Name",
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: "25%",
    },

    {
      title: "Role",
      dataIndex: "Role",
      width: "10%",
    },

    {
      title: "Email",
      dataIndex: "email",
      width: "30%",
    },

    {
      title: "Created At",
      dataIndex: "CreatedAt",
      width: "20%",
    },
  ];

  return (
    <>
      <Head>
        <title>Admin | Manage Users</title>
      </Head>
      <main
        style={{
          maxWidth: "1240px",
          margin: "auto",
        }}
      >
        {/* <AdminBreadCrumb items={breadCrumbItems} /> */}

        <section>
          {/* page tittle  */}
          <div>
            <h3 className="lg:py-4 text-xl font-semibold p-2 ">Customers</h3>
          </div>

          <Card>
            <Row gutter={16}>
              <Col span={8}>
                <Search
                  placeholder="input search text"
                  enterButton="Search"
                  onSearch={onSearch}
                  size="large"
                  loading={false}
                />
              </Col>

              <Col span={8}>
                <Select
                  size="large"
                  labelInValue
                  defaultValue={{ value: "admin", label: "Admin (100)" }}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "admin",
                      label: "Admin (100)",
                    },
                    {
                      value: "super_admin",
                      label: "Super Admin (101)",
                    },
                  ]}
                />
              </Col>

              <Col span={8}>
                <Link href={"/admin"}>
                  <Button
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    type="primary"
                  >
                    + Add New User
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Table Component  */}
        <TableUi columns={tableColumns} />
      </main>
    </>
  );
};

ManageUsers.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ManageUsers;
