import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Container, Form, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";

const ContributeForm = ({address}) => {
  const router = useRouter();
  const [contribution, setContribution] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);
  const [errMessage, setErrorMesage] = useState("");

  const contributionChangeHandler = (event) => {
    setContribution(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoadingButton(true);
    setErrorMesage("");
    
    const campaignSearch = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaignSearch.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, "ether"),
      });

      router.replace(`/campaigns/${address}`);
    } catch (err) {
      setErrorMesage(err.message);
    }

    setContribution("");
    setLoadingButton(false);
  };

  return (
    <Container>
      <Form onSubmit={submitHandler} error={errMessage != ""}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="ether"
            labelPosition="right"
            placeholder="Minimum"
            value={contribution}
            onChange={contributionChangeHandler}
          />
        </Form.Field>
        <Message error header="oops, error!" content={errMessage} />
        <Button primary loading={loadingButton} type="submit">
          Contribute!
        </Button>
      </Form>
    </Container>
  );
};

export default ContributeForm;
