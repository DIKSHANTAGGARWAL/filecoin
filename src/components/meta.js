import React, { useState } from "react";

function Apps() {

    const [walletAdress, setwalletAdress] = useState("")

    async function requestAccount() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                })
                setwalletAdress(accounts[0])
            } catch (error) {
                console.error("Error....");
            }
        } else {
            alert("Metamask is not there")
        }
    }

    async function connectWallet(){
        if(typeof window.etherium!=='undefined'){
            await requestAccount;

            // const provider=new ethers.providers.Web3Provider(window.etherium);
        }
    }
    return (
        <div>
            <button className="appButton" onClick={requestAccount}>Connect to metamask</button>
            <button className="appButton" onClick={connectWallet}>Connect to wallet</button>
            <h3>Your wallet adress is:{walletAdress}</h3>
        </div>
    )

}

export default Apps