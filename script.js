
let connectedWallet = '';
document.getElementById("connectButton").addEventListener("click", () => {
  document.getElementById("walletOptions").style.display = "block";
});

document.getElementById("metaBtn").addEventListener("click", () => {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      connectedWallet = accounts[0];
      document.getElementById("walletAddress").innerText = "Connected: " + connectedWallet;
    });
  } else {
    alert("Please install MetaMask.");
  }
});

// Placeholder functions for Trust Wallet and WalletConnect
document.getElementById("trustBtn").addEventListener("click", () => {
  alert("Trust Wallet deep link connection on mobile to be configured.");
});
document.getElementById("walletconnectBtn").addEventListener("click", () => {
  alert("WalletConnect support coming in next update.");
});

document.getElementById("buyButton").addEventListener("click", () => {
  const bnb = parseFloat(document.getElementById("bnbAmount").value);
  if (bnb >= 0.1 && bnb <= 2) {
    alert("Simulated buy for " + bnb + " BNB. Token calculation shown here.");
  } else {
    alert("Amount must be between 0.1 and 2 BNB.");
  }
});
