import { Connection, Keypair, Transaction } from "@solana/web3.js";
import { Program, AnchorProvider } from "@project-serum/anchor";

const connection = new Connection("https://api.mainnet-beta.solana.com");
const wallet = Keypair.fromSecretKey(Uint8Array.from(Buffer.from(process.env.PRIVATE_KEY, "hex")));
const provider = new AnchorProvider(connection, wallet, {});
const program = new Program(/* YOUR_IDL */, "YOUR_PROGRAM_ID", provider);

async function castVote(proposalId: number, vaa: Uint8Array) {
  const tx = new Transaction().add(
    await program.methods.castVote(proposalId, vaa).accounts({
      voting: new PublicKey("YOUR_VOTING_ACCOUNT"),
      authority: wallet.publicKey,
    }).instruction()
  );
  const txId = await connection.sendTransaction(tx, [wallet]);
  console.log(`Voted. TX: ${txId}`);
}

castVote(1, new Uint8Array(32)).catch(console.error);
