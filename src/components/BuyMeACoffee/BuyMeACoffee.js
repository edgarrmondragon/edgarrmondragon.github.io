import React from "react"
import PropTypes from 'prop-types'

import "typeface-cookie"
import "./BuyMeACoffee.css"

const BuyMeACoffee = ({ bmcHandle, buttonColor, textColor }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={`https://www.buymeacoffee.com/${bmcHandle}`}
    className="bmc-button"
    style={{
      color: `${textColor}`,
      backgroundColor: `${buttonColor}`,
    }}
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

BuyMeACoffee.defaultProps = {
  buttonColor: '#5f7fff',
  textColor: '#fff',
}

BuyMeACoffee.propTypes = {
  bmcHandle: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default BuyMeACoffee
