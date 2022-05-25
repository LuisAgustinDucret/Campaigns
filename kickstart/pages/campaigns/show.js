import React from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import ContributeForm from "../../components/ContributeForm";
import Layout from "../../components/Layout";
import campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

const CampaignShow = (props) => {
  const renderCards = () => {
    const {
      balance,
      manager,
      minimumContribution,
      requestCount,
      approversCount,
    } = props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager is who create the campaign and can make requests",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum contribution (wei).",
        description: "This is the minimun contributtion to become approver.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.toWei(balance, "ether"),
        meta: "Campaign Balance (ether).",
        description: "This is the balance acumulated for this project.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: requestCount,
        meta: "Pending Requests.",
        description: "This is the number of pending request to approve.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: approversCount,
        meta: "Approvers Count.",
        description: "This is the number approvers to this project.",
        style: { overflowWrap: "break-word" },
      },
    ];
    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <h3>Campaign show</h3>
      <Grid>
        <Grid.Column width={11}>
          <Grid.Row>{renderCards()}</Grid.Row>
        </Grid.Column>
        <Grid.Column width={5}>
          <Grid.Row>
            <ContributeForm address={props.address} campaign={props.campaign} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Link route={`/campaigns/${props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
            </Link>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

CampaignShow.getInitialProps = async (props) => {
  const campaignSearch = campaign(props.query.address);

  const summary = await campaignSearch.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
