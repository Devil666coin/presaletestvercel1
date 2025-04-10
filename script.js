
document.getElementById("connect-btn").onclick = () => {
    const menu = document.getElementById("wallet-options");
    menu.classList.toggle("hidden");
};

document.getElementById("metamask-btn").onclick = () => {
    window.open("https://metamask.app.link/dapp/devil666coin.github.io", "_blank");
};

document.getElementById("trustwallet-btn").onclick = () => {
    window.open("https://link.trustwallet.com/open_url?coin_id=60&url=https://devil666coin.github.io", "_blank");
};

document.getElementById("walletconnect-btn").onclick = () => {
    alert("WalletConnect support coming in next update.");
};
