import React from "react";
import "./index.scss";
import CurrentTrack from "../CurrentTrack";
import PlayerControl from "../PlayerControl";
export default function Footer() {
  return (
    <div className="footer">
      <CurrentTrack />
      <PlayerControl />
    </div>
  );
}
