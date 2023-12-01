import React from "react";
import "./index.scss";
import CurrentTrack from "../CurrentTrack";
import PlayerControl from "../PlayerControl";
import Volume from "../Volume";
export default function Footer() {
  return (
    <div className="footer">
      <CurrentTrack />
      <PlayerControl />
      <Volume />
    </div>
  );
}
