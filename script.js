
let connectedWallet = null;
const hardCap = 50;
const softCap = 10;

document.getElementById("connectBtn").onclick = () => {
  const dropdown = document.getElementById("walletOptions");
  dropdown.classList.toggle("hidden");
};

function updateProgress(bnbAmount) {
  const percent = Math.min((bnbAmount / hardCap) * 100, 100);
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("presaleInfo").innerText = `Presale Progress: ${bnbAmount} BNB / ${hardCap} BNB (Soft cap: ${softCap} BNB)`;
}

function connectMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      connectedWallet = accounts[0];
      document.getElementById("walletAddress").innerText = `Connected: ${connectedWallet}`;
    });
  } else {
    alert("Please install MetaMask or open in MetaMask browser.");
  }
}

function connectTrustWallet() {
  window.open('https://link.trustwallet.com/open_url?coin_id=60&url=' + encodeURIComponent(window.location.href), '_blank');
}

function connectWalletConnect() {
  const provider = new WalletConnectProvider.default({
    rpc: { 56: "https://bsc-dataseed.binance.org/" },
    chainId: 56
  });
  provider.enable().then(() => {
    const web3 = new Web3(provider);
    web3.eth.getAccounts().then(accounts => {
      connectedWallet = accounts[0];
      document.getElementById("walletAddress").innerText = `Connected: ${connectedWallet}`;
    });
  });
}

// Simulazione progresso presale per anteprima
let demoBNB = 0;
setInterval(() => {
  if (demoBNB < hardCap) {
    demoBNB += 0.2;
    updateProgress(demoBNB.toFixed(1));
  }
}, 3000);

// Countdown
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 6);
targetDate.setHours(targetDate.getHours() + 6);
targetDate.setMinutes(targetDate.getMinutes() + 6);

setInterval(() => {
  const now = new Date();
  const distance = targetDate - now;
  if (distance < 0) return;
  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');
  document.getElementById("countdown").innerText = `${days} : ${hours} : ${minutes} : ${seconds}`;
}, 1000);
