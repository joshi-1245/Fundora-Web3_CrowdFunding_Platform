# Web3 Decentralized Crowdfunding Platform

A final-year project implementing a Web3-based decentralized crowdfunding platform using Ethereum smart contracts and a React frontend.

## Project Overview

This repository contains a full-stack blockchain crowdfunding application:

- `client/` — React + Vite frontend for campaign creation, browsing, donation, and profile views.
- `web3/` — Solidity smart contract and Hardhat deployment code for the crowdfunding backend.

The project is based on the research titled **"Web3 Based Decentralized Crowdfunding Platform Using Blockchain Technology"** and aims to remove centralized intermediaries, improve transparency, and automate donation handling with smart contracts.

## Key Features

- Create crowdfunding campaigns with title, description, target amount, deadline, and image.
- Browse all live campaigns on the home page.
- View campaign details, funding progress, and donor list.
- Donate ETH directly to a campaign using MetaMask.
- View campaigns created by the connected wallet on the Profile page.

## Project Architecture
<img width="1021" height="609" alt="PHOTO-2026-06-25-09-41-42" src="https://github.com/user-attachments/assets/3c6cbfe9-3810-44b2-8465-adde4d0734c3" />


## Technical Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Ethers.js

### Smart Contract Backend

- Solidity `^0.8.9`
- Hardhat
- Ethereum Sepolia testnet support
- Ethers.js contract interaction

## Repository Structure

- `client/`
  - `src/` — React application source code.
  - `src/context/index.jsx` — wallet connection and contract interaction logic.
  - `src/constants/contractABI.js` — crowdfunding contract ABI.
  - `src/pages/` — home, campaign creation, campaign details, and profile pages.

- `web3/`
  - `contracts/CrowdFunding.sol` — main crowdfunding smart contract.
  - `scripts/deploy.js` — deployment script.
  - `hardhat.config.js` — Hardhat configuration.

- PDF artifacts at repository root:
  - `BT26COREB004_ProjectReport.pdf`
  - `BT26COREB004_SubmissionProof.pdf`
  - `Final Year Research Paper.pdf`
  - `PLAG FILE.pdf`

## Authors

- Subhakar Vadlamani (RA2211003030073)
- Ayush Shukla (RA2211003030089)
- Pankaj Joshi (RA2211003030094)
- Aditya Rastogi (RA2211003030101)

Under the guidance of Dr. Abhilasha Singh.

## Setup and Run

### 1. Smart Contract Deployment

1. Navigate to the `web3/` folder:

   ```bash
   cd web3
   ```

2. Create a `.env` file with these variables:

   ```env
   SEPOLIA_RPC_URL=<your_sepolia_rpc_url>
   PRIVATE_KEY=<your_wallet_private_key>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Deploy the contract to Sepolia:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

> If you prefer a local development chain, use `npx hardhat node` and deploy to `--network localhost`.

### 2. Frontend

1. Navigate to the `client/` folder:

   ```bash
   cd ../client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

4. Open the local Vite URL shown in the terminal.

### 3. Connect Wallet

- Use MetaMask and connect to the Ethereum network the contract is deployed on.
- The frontend currently uses a hardcoded contract address in `client/src/context/index.jsx`.
- Update `CONTRACT_ADDRESS` there if you deploy a new contract.

## Important Notes

- The current smart contract stores campaign data on-chain and transfers donations directly to the campaign owner.
- The frontend expects the contract ABI in `client/src/constants/contractABI.js`.
- The project demonstrates the prototype architecture for decentralized crowdfunding research.

## Research Artifacts

The included PDF files capture the academic output and submission evidence for this project:

- `BT26COREB004_ProjectReport.pdf` — full project report.
- `BT26COREB004_SubmissionProof.pdf` — submission confirmation/proof.
- `Final Year Research Paper.pdf` — research paper detailing motivation, design, and related work.
- `PLAG FILE.pdf` — plagiarism/integrity report.
  
## Project Screenshot
<img width="1002" height="508" alt="f5071cba-8ffd-4cc7-aa72-36e020116d0f" src="https://github.com/user-attachments/assets/e83a2081-62db-452e-b2b7-5f28dc3065b6" />

## License

This project is licensed under the MIT License. See the accompanying `LICENSE` file for details.
