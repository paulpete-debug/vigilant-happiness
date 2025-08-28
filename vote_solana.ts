import { Connection, Keypair, Transaction } from "@solana/web3.js";
import { Program, AnchorProvider } from "@project-serum/anchor";
import * as dotenv from "dotenv";
dotenv.config();

const connection = new Connection("https://api.mainnet-beta.solana.com");
const wallet = Keypair.fromSecretKey(
  Uint8Array.from(Buffer.from(process.env.SOLANA_PRIVATE_KEY!, "hex"))
);
const provider = new AnchorProvider(connection, wallet, {});

async function castVote(proposalId: number, vaa: Uint8Array) {
  const program = new Program(/* Your IDL */, "YOUR_PROGRAM_ID", provider);
  const tx = new Transaction().add(
    await program.methods.castVote(proposalId, vaa).accounts({
      voting: new PublicKey("YOUR_VOTING_ACCOUNT"),
      authority: wallet.publicKey,
    }).instruction()
  );
  const txId = await connection.sendTransaction(tx, [wallet]);
  console.log(`Voted on Solana. TX: ${txId}`);
}

castVote(1, new Uint8Array(32)).catch(console.error);
