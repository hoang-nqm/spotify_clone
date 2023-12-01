import React from "react";
import "./index.scss";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../utils/StateProvider";
export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  console.log(navBackground);
  return (
    <div
      className={navBackground ? "navBar bgBlue" : "navBar bgGreen"}
      navBackground={navBackground}
    >
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or products" />
      </div>
      <div className="avatar">
        <a href="">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
}
