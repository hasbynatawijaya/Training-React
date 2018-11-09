import React, { Component } from "react";
import Table from "../../table/table";
import "antd/dist/antd.css";
import "../../../../App.css";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { deleteData } from "../dataActions";

const mapState = state => ({
  data: state.data
});

const actions = {
  deleteData
};

class data extends Component {
  handleDeleteData = dataId => () => {
    this.props.deleteData(dataId);
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={18}>
            {" "}
            <Table
              tableData={data}
              deleteData={this.handleDeleteData}
            />
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(data);
