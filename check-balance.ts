import { Connection , LAMPORTS_PER_SOL , PublicKey} from "@solana/web3.js";
import { performReverseLookup , getDomainKey} from "@bonfida/spl-name-service";

const connection = new Connection("https://api.mainnet-beta.solana.com","confirmed");

const domainName = "toly.sol";
const getPublicKey = await getDomainKey(domainName);

console.log(getPublicKey.pubkey.toString());

console.log(`the domain name is ${domainName} and the public key is ${getPublicKey}` )

// const getBalanceInLamports = await 