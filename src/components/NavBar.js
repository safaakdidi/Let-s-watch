import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from "prop-types";

//styling the component using the hook makeStyles
const useStyles = makeStyles(() => ({
  search: {
    backgroundColor: "transparent",
    border: "2px solid #222254b",
    borderRadius: "50px",
    color: "white",
    fontFamily: "inherit",
    fontSize: "1.2rem",
    padding: "0.5rem 1.5rem",
    "&:focus": {
      outline: 0,
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
}));
const NavBar = ({ value, setSearchValue }) => {
  const styles = useStyles();
  return (
    //update the value of searchValue every time we make a change
    <AppBar position="static" color="transparent">
      <Toolbar className={styles.toolbar}>
        <h3>Let's Watch</h3>
        <input
          className={styles.search}
          type="search"
          placeholder="Search..."
          value={value}
          onChange={(event) => setSearchValue(event.target.value)}
        ></input>
      </Toolbar>
    </AppBar>
  );
};
//PropTypes
Component.propTypes = {
  value: PropTypes.string,
  setSearchValue: PropTypes.function,
};
export default NavBar;
