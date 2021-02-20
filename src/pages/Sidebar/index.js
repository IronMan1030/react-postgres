import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends, faHistory, faCube, faThLarge } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

import { DASHBOARD, DASHBOARD1, DASHBOARD2, DASHBOARD3, DASHBOARD4 } from "../../settings/constants";

function Sidebar() {
  const sidebarMenus = [
    {
      name: "Dashboard0",
      path: DASHBOARD,
      exact: true,
      icon: faHome,
    },
    {
      name: "Dashboard1",
      path: DASHBOARD1,
      exact: true,
      icon: faCube,
    },
    {
      name: "Dashboard2",
      path: DASHBOARD2,
      exact: true,
      icon: faUserFriends,
    },
    {
      name: "Dashboard3",
      path: DASHBOARD3,
      exact: true,
      icon: faHistory,
    },
    {
      name: "Dashboard4",
      path: DASHBOARD4,
      exact: true,
      icon: faThLarge,
    },
  ];
  const onMenuItemClick = () => {};
  return (
    <div className="sidebar-wrapper container">
      <div className="d-flex justify-content-center pt-4">
        <Image src="/logo.png" width={43} height={43} />
      </div>
      <div className="vertical-center">
        <div className="menu-wrapper">
          {sidebarMenus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              exact={menu.exact}
              activeStyle={{
                color: "#000",
                backgroundColor: "#f7f7f7",
                borderRadius: "8px",
              }}
              onClick={onMenuItemClick}
            >
              {menu.icon ? <FontAwesomeIcon icon={menu.icon} /> : ""}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="user-status">
        <Image src="/images/user-status.png" width={43} height={43} />
      </div>
    </div>
  );
}

export default Sidebar;
