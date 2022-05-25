import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";

const RequestNew = () => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");

  const setDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const setRecipientHandler = (event) => {
    setRecipient(event.target.value);
  };

  const setValueHandler = (event) => {
    setValue(event.target.value);
  };


  return (
    <Layout>
        <h3>Create Request.</h3>
      <Form>
        <Form.Field>
          <label>Description</label>
          <Input 
          value={description}
          onChange={setDescriptionHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Value in ether</label>
          <Input 
          value={value}
          onChange={setValueHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
          value={recipient}
          onChange={setRecipientHandler} />
        </Form.Field>
      </Form>
      <Button primary >Create!</Button>
    </Layout>
  );
};

export default RequestNew;
