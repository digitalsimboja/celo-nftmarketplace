const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  // Deploy the contract
  const celoNFTContract = await CeloNFTFactory.deploy()
  await celoNFTContract.deployed();

  // Print the deployed CeloNFT contract address
  console.log("CeloNFT contract address: ", celoNFTContract.address);

  // Load the marketplace contract artifacts
  const NFTMarketplaceFactory = await ethers.getContractFactory("NFTMarketplace");

  // deploy the contract
  const NFTMarketplaceContract = await NFTMarketplaceFactory.deploy();
  await NFTMarketplaceContract.deployed()

  // Print the NFTMarketplaceContract address
  console.log("NFTMarketplaceContract deployed to: ", NFTMarketplaceContract.address);


}

// call the `main()`
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });