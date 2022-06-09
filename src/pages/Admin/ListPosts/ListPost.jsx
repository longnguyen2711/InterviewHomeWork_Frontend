import { postsAction, usersAction } from "../../../redux/actions/AccountAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, Fragment, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

import "./ListPosts.scss";

export default function ListPosts(props) {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const { listPosts } = useSelector((state) => state.AccountReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction());
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          type={dataIndex === "id" ? "number" : "text"}
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText({
      searchText: selectedKeys[0],
    });
    setSearchedColumn({
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText({ searchText: "" });
  };

  const { Search } = Input;

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
      value: (text, object, index) => {
        return <span key={index}>{text}</span>;
      },
      sorter: (a, b) => a.userId - b.userId,
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Post ID",
      dataIndex: "id",
      key: "id",
      value: (text, object, index) => {
        return <span key={index}>{text}</span>;
      },
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("id"),
      width: "12.5%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => {
        let titleA = a.title.toLowerCase().trim();
        let titleB = b.title.toLowerCase().trim();
        if (titleA > titleB) {
          return 1;
        }
        return -1;
      },
      ...getColumnSearchProps("title"),
      sortDirections: ["descend", "ascend"],
      width: "22.5%",
    },
    {
      title: "Content",
      dataIndex: "body",
      key: "body",
      width: "45%",
    },
    {
      title: "Detail",
      dataIndex: "id",
      key: "id",
      render: (text, object, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              to={`/admin/listposts/detailpost/${object.userId}/${object.id}`}
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

  const data = listPosts;

  const onSearch = (value) => {
    dispatch(postsAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div id="listAccount">
      <h2 className="mb-5">List Posts</h2>
      <Search
        className="mb-3"
        placeholder="Enter post id"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
