import React from "react";
import { Form, Input } from "antd";

type CustomInputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

export const CustomInput = ({
  name,
  placeholder,
  type = "text",
}: CustomInputProps) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[{ required: true, message: "Обязательное поле" }]}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
