import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faChartPie,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function FourthPage() {
  const [activeTab, setActiveTab] = useState("Analytics");

  const navItems = [
    { icon: faHome, label: "Home" },
    { icon: faMagnifyingGlass, label: "Search" },
    { icon: faChartPie, label: "Analytics" },
    { icon: faClock, label: "History" },
    { icon: faUser, label: "Profile" },
  ];

  return (
    <>
    <div className="h-full w-full flex items-center justify-center">
    <div className="items-center justify-center bg-[#e0e7ff]">
      <div className="perspective-1000">
        <div className="rotate-x-25  md:w-[60vw] h-[15vh] bg-black text-white rounded-3xl flex items-center justify-around px-6">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </div>
      </div>
        <div className="perspective-1000">
          <div className="rotate-x-25  md:w-[60vw] h-[15vh] bg-white text-black rounded-3xl flex items-center justify-around px-6">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activeTab === item.label}
                onClick={() => setActiveTab(item.label)}
              />
            ))}
          </div>
      </div>
      </div>
      </div>
      </>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 focus:outline-none ${
        active ? "text-violet-400" : "text-gray-400"
      }`}
    >
      <div
        className={`text-2xl ${
          active ? "bg-violet-800 text-white" : ""
        } p-2 rounded-full`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className={`text-sm ${active ? "font-semibold" : ""}`}>
        {label}
      </span>
    </button>
  );
}
