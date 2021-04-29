import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * @type {React.FC} - Navigation Component
 * @returns {JSX.Element}
 */
export default function NavigationBar() {
  return (
    <header className="flex-col w-64 p-4 flex-shrink-0">
      <div className="font-bold text-xl mb-10 text-teal-600">🧪 Lab</div>
      <ul className="leading-7">
        <NavItem title="Data Fetching" path="/data-loading" strokeWidth={2.5} />
        <NavItem title="Line Chart" path="/line-chart" strokeWidth={2.5} />
        <NavItem title="Realtime Chart" path="/full" strokeWidth={2.5} />
      </ul>
    </header>
  );
}

/**
 * NavItem
 * 
 * @typedef {Object} NavItemProps
 * @property {string} title
 * @property {string} path
 * @property {number=} strokeWidth
 * @property {*=} icon
 */

const BarChartIcon = (
  <>
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </>
);
const LineChartIcon = (
  <>
    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
    <path d="M15 7h6v6" />
  </>
);
const LogDataIcon = (
  <>
    <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
  </>
);

/**
 *
 * @param {NavItemProps} props
 * @returns {JSX.Element}
 */
const NavItem = (props) => {
  const location = useLocation();
  const currentPath = location.pathname === props.path;
  return (
    <li
      className={[
        "flex items-center text-gray-600 hover:text-blue-800",
        currentPath && " font-semibold text-gray-600",
      ]
        .filter(Boolean)
        .join()}
    >
      <Link to={props.path}>
        {props.icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth ?? 3}
            strokeLinejoin="miter"
            strokeLinecap="butt"
            width="16"
            height="16"
            className="inline mr-2 text-gray-900"
          >
            {props.icon}
          </svg>
        )}
        {props.title}
      </Link>
    </li>
  );
};
