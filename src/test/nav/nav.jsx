import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import 'antd/dist/antd.css';
import '../../App.css'

class Nav extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(this.state);
    console.log(event);
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        // style={{
        //   lineHeight: "40px",
        //   float: "center",
        //   alignContent: "middle",
        //   verticalAlign: "middle",
        // }}\
        className="menu"
      >
          <Menu.Item key="1">
            <Link to="/view">View Data</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/input">Input Data</Link>
          </Menu.Item>
      </Menu>
    );
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(Nav);
