import React from "react"

import "typeface-cookie"
import "./BuyMeACoffee.css"

const BuyMeACoffee = ({ bmcHandle }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={`https://www.buymeacoffee.com/${bmcHandle}`}
    className="bmc-button"
  >
    <img
      src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
      alt="Buy me a coffee"
    />
    <span style={{ marginLeft: `5px`, fontSize: `28px` }}>
      Buy me a coffee
    </span>
  </a>
)

export default BuyMeACoffee
