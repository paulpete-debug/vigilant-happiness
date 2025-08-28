const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.skalenodes.com/v1/elated-tan-skat");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const daoAddress = "0xYOUR_DAO_CONTRACT";
const daoABI = [/* Paste ABI */];

async function vote(proposalId) {
  const dao = new ethers.Contract(daoAddress, daoABI, wallet);
  const tx = await dao.vote(proposalId);
  await tx.wait();
  console.log(`Voted. TX: ${tx.hash}`);
}

vote(1).catch(console.error);
