import { Connection, PublicKey } from '@solana/web3.js';
import { getAgentBalance } from './skale-bridge'; // Hypothetical bridge function

async function checkVotingEligibility(voter: PublicKey) {
  const connection = new Connection('https://api.devnet.solana.com');
  const skaleBalance = await getAgentBalance(voter); // Fetch SKALE token balance
  const threshold = 100 * 10 ** 18; // Match SKALE token decimals
  return skaleBalance >= threshold;
}

// Example usage
const voterPubkey = new PublicKey('YOUR_VOTER_PUBLIC_KEY_HERE');
console.log(await checkVotingEligibility(voterPubkey));
