import React from "react";
import "./MyTable.css";
import { Link } from "react-router-dom";

function MyTable({ tableHeader, tableBody }) {
  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            {tableHeader &&
              tableHeader.map((header) => {
                return (
                  <th scope="col" key={header.id}>
                    {header.title}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {tableBody &&
            tableBody.map((body) => {
              return (
                <tr key={body.id}>
                  <td>
                    <div className="user-block">
                      <img src={body.profile_img} alt="user-pic" />
                      <span>{body.user_name}</span>
                      <span>{body.user_code}</span>
                    </div>
                  </td>
                  <td>
                    <div className="detail-block">
                      <span>{body.sex}</span>
                      <span> | {body.age}</span>
                      <p>{body.phone}</p>
                    </div>
                  </td>
                  <td>
                    <div className="order-block">
                      <span>{body.order_items} items</span>
                      <Link to="/">View Details</Link>
                    </div>
                  </td>
                  <td>
                    <div className="order-block">
                      <span>{body.seller_name}</span>
                      <Link to="/">{body.seller_email}</Link>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center" style={{ height: "50px" }}>
                      <span>{body.date}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center" style={{ height: "50px" }}>
                      <span>{currencyFormat(body.sub_total)}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center" style={{ height: "50px" }}>
                      <span>{currencyFormat(body.covered)}</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center" style={{ height: "50px" }}>
                      <span>{currencyFormat(parseInt(body.sub_total) + parseInt(body.covered))}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default MyTable;
