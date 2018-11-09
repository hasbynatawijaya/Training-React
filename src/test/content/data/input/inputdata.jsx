import React, { Component } from "react";
import { Form, Row, Col, Button } from "antd";
import { connect } from "react-redux";
import cuid from "cuid";
import { createData, updateData } from "../dataActions";
import { reduxForm, Field } from "redux-form";
import textinput from "../../../common/form/textinput";
// import {
//   composeValidators,
//   combineValidators,
//   isRequired,
//   hasLengthGreaterThan
// } from "revalidate";

const mapState = (state, ownProps) => {
  const dataId = ownProps.match.params.id;
  
  let data = {};

  if (dataId && state.data.length > 0) {
    data = state.data.filter(data => data.id === dataId)[0];
  }

  return {
    initialValues: data
  };
};

const actions = {
  createData,
  updateData
};

class inputData extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateData(values);
      this.props.history.goBack();
    } else {
      const newData = {
        ...values,
        id: cuid()
      };
      this.props.createData(newData);
      this.props.history.push("/view");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="name"
                type="text"
                component={textinput}
                placeholder="Input Name"
              />
              <Field
                name="job"
                type="text"
                component={textinput}
                placeholder="Input Job"
              />
              <Button
                type="primary"
                htmlType="submit"
                disabled={invalid || submitting || pristine}
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="primary">
                Cancel
              </Button>
            </Form>
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
)(reduxForm({ form: "inputData", enableReinitialize: true })(inputData));
