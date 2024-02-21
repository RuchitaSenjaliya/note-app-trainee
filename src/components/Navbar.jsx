/* eslint-disable react/prop-types */

import { BsMoonStarsFill } from "react-icons/bs";

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav
      style={{ backgroundColor: `${mode === "light" && "#dcdcdc"}` }}
      className={`navbar ${mode === "dark" && "bg-dark"}`}
      data-bs-theme="dark">
      <div className="container">
        <a
          className={`navbar-brand ${
            mode === "light" ? "text-black" : "text-white"
          }`}
          href="#">
          Notes
        </a>
        <div
          className={`mode-icon ${
            mode === "light" ? "text-black" : "text-white"
          }`}
          onClick={toggleMode}>
          <BsMoonStarsFill />
        </div>
      </div>
    </nav>
  );
}
