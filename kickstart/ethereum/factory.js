import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8Dab23FE330D6793AEb42C37aFD7De4ddf9aCa54"
);

export default instance;
