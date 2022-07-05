async function connect() {
  if (typeof window.ethereum !== "undefined") {
    // console.log("I see a metamask!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("connectButton").innerHTML = "Connected";
    console.log("Wallet connected!");
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install metamask!";
    //   console.log("No metamask!");
  }
}
