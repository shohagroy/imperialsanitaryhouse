import React, { useEffect, useState } from "react";
// import qs from "qs";
import { Card, Table } from "antd";

const TableUi = ({ columns }) => {
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {};

  return (
    <Card
      style={{
        margin: "1rem 0rem",
      }}
    >
      <Table
        columns={columns}
        bordered
        // rowKey={(record) => record.login.uuid}
        dataSource={[]}
        pagination={tableParams.pagination}
        pageSize={10}
        loading={loading}
        onChange={handleTableChange}
      />
    </Card>
  );
};
export default TableUi;
