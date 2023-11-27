import { useState } from "react";
import Dashboard from "./Dashboard.jsx"; // Import your dashboard component
import ClientId from "./ClientId"; // Import your client component
import Payment from "./Payment"; // Import your payment component
import Invoice from "./Invoice"; // Import your invoice component
import Tracking from "./Tracking"; // Import your tracking component
import Notification from "./Notification"; // Import your notification component
import TodoList from "./TodoList"; // Import your Todo component
import Help from "./Help"; // Import your Help component
import Settings from "./Settings"; // Import your settings component
import Logout from "../Pages/Logout"; // Import your logout component
import paypro from "../../assets/logos/PayPro.svg";
import control from "../../assets/logos/control-logo.svg";
import invoice from "../../assets/logos/invoice-logo.svg"; 
import notification from "../../assets/logos/notification-logo.svg"; 
import payment from "../../assets/logos/payment-logo.svg"; 
import todo from "../../assets/logos/todo-logo.svg"; 
import tracking from "../../assets/logos/tracking-logo.svg"; 
import client from "../../assets/logos/client-profile-logo.svg";
import help from "../../assets/logos/help-logo.svg";
import dashboard from "../../assets/logos/dashboard-logo.svg"; 
import settings from "../../assets/logos/settings-logo.svg"; 
import logout from "../../assets/logos/logout-logo.svg";
import { IoSearchOutline, IoChatboxOutline, IoBellOutline, IoPersonOutline, IoArrowDown } from 'react-icons/io5';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex relative xl:-left-7 mx-0 w-full justify-between items-center rounded-lg p-4 bg-white">
      {/* Left Section */}
      <div className="flex items-center">
        <span className="text-lg font-semibold">Welcome back, Esther Victor</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <div className="flex items-center">
          <IoSearchOutline className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border-b border-gray-300 focus:outline-none ml-2"
          />
        </div>

        {/* Chat Icon */}
        <IoChatboxOutline className="text-gray-500" />

        {/* Bell Icon */}
        <FaRegBell className="text-gray-500" />

        {/* User Icon */}
        <div className="flex items-center">
          <FaRegUserCircle className="text-gray-500 " />
          <span className="ml-2 hidden lg:inline">Esther Victor</span>
          <IoIosArrowDown className="text-gray-500 ml-4" />
        </div>
      </div>
    </div>
  );
};


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const Menus = [
    { title: "Dashboard", logo: dashboard },
    { title: "ClientId", logo: client },
    { title: "Payment", logo: payment },
    { title: "Invoice", logo: invoice },
    { title: "Tracking", logo: tracking },
    { title: "Notification", logo: notification },
    { title: "To-Do List", logo: todo },
    { title: "Help Center", logo: help, gap: true },
    { title: "Setting", logo: settings },
    { title: "Logout", logo: logout },
  ];

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "Dashboard":
        return <Dashboard />;
      case "ClientId":
        return <ClientId />;
      case "Payment":
        return <Payment />;
      case "Invoice":
        return <Invoice />;
      case "Tracking":
        return <Tracking />;
      case "Notification":
        return <Notification />;
      case "To-Do List":
        return <TodoList />;
      case "Help Center":
        return <Help />;
      case "Setting":
        return <Settings />;
      case "Logout":
        return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-customGray lg lg:flex-row">
      <div
        className={`${
          open ? "w-44" : "w-16 "
        } bg-customBlue h-full p-5 pt-8 relative duration-300`}
      ><img
      src={control}
      alt="control button"
      className={`absolute cursor-pointer -right-3 top-20 w-5 ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)}
    />
    <div className="flex flex-col items-center gap-y-2">
      <img
        src={paypro}
        alt="paypro logo"
        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
      />
      <h1
        className={`text-white font-light text-xs duration-200 ${!open && "scale-0"}`}
      >
        Service Management Board
      </h1>
    </div>
    <div className="border-b border-gray-400 my-4"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-red"} hover:bg-opacity-10`}
              onClick={() => setSelectedMenuItem(Menu.title)}
            >
              <img
                src={Menu.logo}
                alt={Menu.title}
                className="origin-left duration-200"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`h-screen flex-1 flex flex-col lg:pl-7 ${open ? 'w-full lg:w-5/6' : 'w-full lg:w-11/12'}`}>
        <Navbar open={open} />
        <div className="flex-1 container">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;