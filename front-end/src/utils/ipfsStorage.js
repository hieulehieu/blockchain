import { Web3Storage } from "web3.storage";

const web3storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjhmZjE0ZjVmLTkzOTUtNDhkMi04N2YwLTAwOTI3NDEyZTRjMyIsIm9yZ0lkIjoiMzY3NjI3IiwidXNlcklkIjoiMzc3ODI3IiwidHlwZUlkIjoiZDE5ZGY3MDctN2I4Yy00YmIxLTk4ZjUtYzhiYzA2ODY0MzkwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDIyMDkwMDYsImV4cCI6NDg1Nzk2OTAwNn0.CP3FgPKap3sfvzxadNbfyW5HasEpX1Zpmi1DizhGqUA";

export const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

function GetAccessToken() {
  return web3storage_key;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const saveContent = async (file) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([file]);
  console.log("Stored files with cid:", cid);
  return cid;
};
