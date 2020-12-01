import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger.js";

const Header = ({ history }) => {
  // state for menu button
  const [state, setState] = useState({
    initial: false, // set the default state to false
    clicked: null, // indicates whether the menu botton is clicked or not
    menuName: "Menu", // this is what will display over the menu button, it will change to "Close" if clicked = true
  });

  // state for disabled menu button
  const [disabled, setDisabled] = useState(false);

  // use effect for page changes
  useEffect(() => {
    //listen for page change (url change in this case)
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  // handle function that changes the state for menu control
  const handleMenu = () => {
    disableMenu(); // disable the menu from being clicked to let the animation load first
    if (state.initial === false) {
      // opening menu for the first time
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      console.log("opening menu for the first time");
    } else if (state.clicked === true) {
      // menu: opened => closed
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });

      console.log("menu: opened => closed");
    } else if (state.clicked === false) {
      // menu: closed => opened
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      console.log("closed => opened");
    }
  };

  // Function to determin if menu button is ready to be clicked again
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">DUSTINM.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
