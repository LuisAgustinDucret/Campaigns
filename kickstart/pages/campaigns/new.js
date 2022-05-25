import React, { useState } from "react";
import { Button, Container, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const CampaignNew = (props) => {
  const [minimumContribution, setminimumContribution] = useState("");
  const [errMessage, setErrorMesage] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);


  const minimunContributionChangeHandler = (event) => {
    setminimumContribution(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoadingButton(true);
    setErrorMesage("");

    const accounts = await web3.eth.getAccounts();

    try {
      await factory.methods
      .createCampaign(minimumContribution).send({
        from: accounts[0],
      });

      Router.pushRoute('/');
    } catch (err) {
      setErrorMesage(err.message);
    }

    setminimumContribution("");
    setLoadingButton(false);
  };

  return (
    <Layout>
      <h1>Create Campaign</h1>
      <Container>
        <Form onSubmit={submitHandler} error={errMessage != ''}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              placeholder="Minimum"
              value={minimumContribution}
              onChange={minimunContributionChangeHandler}
            />
          </Form.Field>
          <Message
            error
            header= "oops, error!"
            content= {errMessage}
          />
          <Button loading={loadingButton} type="submit">Create!</Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default CampaignNew;
