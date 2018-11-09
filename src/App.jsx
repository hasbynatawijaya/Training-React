import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withAlert } from "react-alert";
import { Layout } from "antd";
import Nav from "./test/nav/nav";
import inputdata from "./test/content/data/input/inputdata";
import home from "./test/content/home";
import data from "./test/content/data/view/data";
import 'antd/dist/antd.css';
import './App.css'

const { Content, Header } = Layout;

class App extends Component {
  componentDidMount() {
    return this.props.alert.show("Welcome :)");
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <Layout className="layout">
              <Header>
                <div
                  className="logo"
                />
                <Nav />
              </Header>
              <Content style={{ padding: "0 50px" }}>
                <Switch>
                  <Route path="/view" component={data} />
                  <Route path="/input" component={inputdata} />
                  <Route path="/edit/:id" component={inputdata}/>
                </Switch>
              </Content>
            </Layout>
          )}
        />
      </div>
    );
  }
}

export default withAlert(App);
