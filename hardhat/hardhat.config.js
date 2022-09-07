require("@nomiclabs/hardhat-waffle");

// inititialize 'dotenv' with the `.config()` function
require('dotenv').config({ path: ".env" });

// Environment variables should now be available at process.env
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

// show an error if environment variales are missing
if (!PRIVATE_KEY) {
  console.error("Missing PRIVATE_KEY environment variable");

}
if (!RPC_URL) {
  console.error("Missing RPC_URL environment variable");
}

// Add the Alfajores network to the configuration
module.exports = {
  solidity: "0.8.4",
  networks: {
    alfajores: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    }
  }
}