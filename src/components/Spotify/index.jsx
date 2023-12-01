import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import Sidebar from "../Sidebar";
import Navbar from "../NavBar";
import Body from "../Body";
import Footer from "../Footer";
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../../utils/Constants";
export default function Spotify() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackgound] = useState(false);
  const [headerBackground, setHeaderBackgound] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackgound(true)
      : setNavBackgound(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackgound(true)
      : setHeaderBackgound(false);
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userID: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [token, dispatch]);
  return (
    <div className="spotify">
      <div className="spotify__body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="body__contents">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </div>
  );
}
