import React, { useContext, createContext, useState } from "react";
import { ethers } from "ethers";
import { contractABI } from "../constants/contractABI";

const StateContext = createContext();

const CONTRACT_ADDRESS = "0x0884a37650021bCA2e8FA548E98d5AB18FD5F881";

export const StateContextProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState(null);

  const connect = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      const contractInstance = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI,
        signer
      );

      setAddress(userAddress);
      setContract(contractInstance);
    } catch (error) {
      console.log("Wallet connection failed", error);
    }
  };

  const publishCampaign = async (form) => {
    try {
      const tx = await contract.createCampaign(
        address,
        form.title,
        form.description,
        ethers.parseEther(form.target),
        new Date(form.deadline).getTime(),
        form.image
      );

      await tx.wait();
      console.log("Campaign created successfully");
    } catch (error) {
      console.log("Campaign creation failed", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.getCampaigns();

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.formatEther(campaign.target.toString()),
      deadline: Number(campaign.deadline),
      amountCollected: ethers.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const tx = await contract.donateToCampaign(pId, {
      value: ethers.parseEther(amount),
    });

    await tx.wait();
  };

  const getDonations = async (pId) => {
    const donations = await contract.getDonators(pId);

    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);