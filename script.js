
let connectedAddress = "";
const hardCap = 50;
const softCap = 10;
let totalBNB = 0;

document.getElementById("connectWallet").onclick = () => {
  document.getElementById("walletMenu").classList.toggle("hidden");
};

function connectMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      connectedAddress = accounts[0];
      document.getElementById("walletAddress").innerText = "Connected: " + connectedAddress;
    });
  } else {
    alert("Please install MetaMask");
  }
}

function connectTrustWallet() {
  window.open('https://link.trustwallet.com/open_url?coin_id=60&url=' + encodeURIComponent(window.location.href), '_blank');
}

function connectWalletConnect() {
  const provider = new WalletConnectProvider.default({
    rpc: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
    chainId: 97
  });
  provider.enable().then(() => {
    const web3 = new Web3(provider);
    web3.eth.getAccounts().then(accounts => {
      connectedAddress = accounts[0];
      document.getElementById("walletAddress").innerText = "Connected: " + connectedAddress;
    });
  });
}

function buyTokens() {
  const amount = parseFloat(document.getElementById("bnbAmount").value);
  if (isNaN(amount) || amount < 0.1 || amount > 2) {
    alert("Amount must be between 0.1 and 2 BNB");
    return;
  }
  const tokens = amount * 4000000;
  document.getElementById("tokenOutput").innerText = "You will receive: " + tokens.toLocaleString() + " $666 tokens";
  totalBNB += amount;
  updateProgress();
}

function updateProgress() {
  const percent = Math.min((totalBNB / hardCap) * 100, 100);
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText = `Presale Progress: ${totalBNB.toFixed(2)} BNB / ${hardCap} BNB (Soft cap: ${softCap} BNB)`;
}

// Countdown
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 6);
targetDate.setHours(targetDate.getHours() + 6);
targetDate.setMinutes(targetDate.getMinutes() + 6);
setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return;
  const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  document.getElementById("countdown").innerText = `${d}:${h}:${m}:${s}`;
}, 1000);
