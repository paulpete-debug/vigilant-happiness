# Autonomous Agent DAO

**SKALE:** AgentRegistry + AgentDAO
**Solana:** Cross-chain voting

## Setup
1. Install: `npm install -g solana-cli anchor-cli @skalenetwork/skale-cli`
2. Deploy: `skale deploy --network mainnet --contract contracts/SKALE/AgentDAO.sol`
3. Test: `anchor test`

## GitHub Actions
- SKALE: Auto-deploys on push to `main`.
- Solana: Auto-deploys on push to `main`.
