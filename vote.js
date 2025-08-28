require('dotenv').config();
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.skalenodes.com/v1/elated-tan-skat");
const wallet = new ethers.Wallet(process.env.SKALE_PRIVATE_KEY, provider);

async function vote(proposalId) {
  const daoAddress = "0xYOUR_DAO_CONTRACT";
  const daoABI = [/* Your ABI */];
  const dao = new ethers.Contract(daoAddress, daoABI, wallet);
  const tx = await dao.vote(proposalId);
  await tx.wait();
  console.log(`Voted on proposal ${proposalId}. TX: ${tx.hash}`);
}

vote(1).catch(console.error);
