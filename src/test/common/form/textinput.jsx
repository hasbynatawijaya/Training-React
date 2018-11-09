import React from "react";
import { Form, Input } from "antd";

const FormItem = Form.Item;

const textinput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div>
      <FormItem error={touched && !!error} width={width}>
        <Input {...input} placeholder={placeholder} />
      </FormItem>
    </div>
  );
};

export default textinput;
