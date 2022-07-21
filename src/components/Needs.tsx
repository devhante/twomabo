import React from "react";
import Need from "./Need";
import "./Needs.css";

export default function Needs() {
  return (
    <div className="Needs">
      <div className="needs-title">Needs:</div>
      <Need src="/items/element-fire3.png" count={250} />
      <Need src="/items/element-fire4.png" count={250} />
      <Need src="/items/ether-fire1.png" count={250} />
      <Need src="/items/ether-fire2.png" count={250} />
      <Need src="/items/ether-fire3.png" count={250} />
    </div>
  );
}
