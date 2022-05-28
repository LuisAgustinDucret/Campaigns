import React, { useState } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import web3 from "../../../ethereum/web3";
import Campaign from '../../../ethereum/campaign';
import Router from '../../../routes';
import { Link } from "../../../routes";


const RequestNew = ({ address }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);
  const [errMessage, setErrorMesage] = useState("");

  const setDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const setRecipientHandler = (event) => {
    setRecipient(event.target.value);
  };

  const setValueHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoadingButton(true);
    setErrorMesage("");
    console.log(address);
    const campaignSearch = Campaign(address);

    //createRequest(string description, uint value, address recipient)
    try {
      const accounts = await web3.eth.getAccounts();
      await campaignSearch.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0],
        });
      Router.pushRoute("/");
    } catch (err) {
      setErrorMesage(err.message);
    }

    setLoadingButton(false);
  };

  return (
    <Layout>
        
      <h3>Create Request.</h3>
      <Form onSubmit={submitHandler} error={errMessage != ""}>
        <Form.Field>
          <label>Description</label>
          <Input value={description} onChange={setDescriptionHandler} />
        </Form.Field>
        <Form.Field>
          <label>Value in ether</label>
          <Input value={value} onChange={setValueHandler} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input value={recipient} onChange={setRecipientHandler} />
        </Form.Field>
      <Message error header="oops, error!" content={errMessage} />
      <Button primary loading={loadingButton} type="submit">
        Create!
      </Button>
      <Link route={`/campaigns/${address}/requests`}>
            <a >
                Return
            </a>
        </Link>
      </Form>
    </Layout>
  );
};

RequestNew.getInitialProps = async (props) => {
  const address = props.query.address;
  return { address };
};

export default RequestNew;
