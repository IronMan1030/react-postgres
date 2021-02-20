import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MySelect from "../../components/Select/MySelect";
import DatePicker from "../../components/DatetimePicker/Datepicker";
import MyTable from "../../components/Table/MyTable";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const tableHeader = [
    {
      id: 1,
      title: "Client",
    },
    {
      id: 2,
      title: "Details",
    },
    {
      id: 3,
      title: "Order",
    },
    {
      id: 4,
      title: "Proceed By",
    },
    {
      id: 5,
      title: "Date",
    },
    {
      id: 6,
      title: "Subtotal",
    },
    {
      id: 7,
      title: "Covered",
    },
    {
      id: 8,
      title: "Total",
    },
  ];
  const [tableBody, setTableBody] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        let response = await axios.get("http://localhost:5000/api/v1/orders/get");
        setTableBody(response.data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="dashboard-section">
      <SearchBar />
      <div className="ml-5 mr-5 mt-5">
        <h3>Transaction Logs</h3>
        <div className="row">
          <div className="col-lg-3">
            <MySelect placeholder="Provider" />
          </div>
          <div className="col-lg-3">
            <MySelect placeholder="User" />
          </div>
          <div className="col-lg-3">
            <DatePicker label="Start Date" />
          </div>
          <div className="col-lg-3">
            <DatePicker label="End Date" />
          </div>
        </div>
        <button type="button" className="btn-submit mt-5">
          Generate
        </button>
        <div className="table-section mt-4">
          <h4 className="mb-5">Recent orders</h4>
          <div className="export-block mb-3">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <Link to="/">
              <h6>Export</h6>
            </Link>
          </div>
          <MyTable tableHeader={tableHeader} tableBody={tableBody} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
