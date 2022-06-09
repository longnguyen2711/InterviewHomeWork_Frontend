import { usersAction } from "../../../redux/actions/AccountAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Table, Input } from "antd";

export default function ListAccount(props) {
  const { listAccount } = useSelector(
    (state) => state.AccountReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction())
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object, index) => {
        return <span KEY={index}>{text}</span>;
      },
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "User Name",
      dataIndex: "username",
      sorter: (a, b) => {
        let usernameA = a.username.toLowerCase().trim();
        let usernameB = b.username.toLowerCase().trim();
        if (usernameA > usernameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "16.5%",
    },

    {
      title: "City",
      dataIndex: "address",
      render: (text, object, index) => {
        return <span key={index}>{object.address.city}</span>
      },
      width: "8.5%",
    },
    {
      title: "Detail",
      dataIndex: "id",
      render: (text, object, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              to={`/admin/listaccount/detailaccount/${text}`}
              className="ml-4 text-primary"
              title="See detail"
            >
              <i className="text-primary fa fa-eye"></i>
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  const data = listAccount;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div id="listAccount">
      <h2 className="mb-5">List Accounts</h2>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
