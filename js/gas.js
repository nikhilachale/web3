//gas cutting  function 

if (provider) {
    startApp(provider);
  } else {
    console.log('Please install MetaMask!');
  }
  
  async function startApp(provider) {
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
  
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 1000000;
    const from = await ethereum.request({ method: 'eth_accounts' });
    const contractAddress = '0x456...'; // Your smart contract's address
    const value = 0; // The amount of ETH to send with the transaction (optional)
  
    // Call the smart contract function that requires gas
    const contractInstance = new web3.eth.Contract(abi, contractAddress);
    const tx0 = contractInstance.methods.uploadFile().send({from, value, gasPrice, gasLimit});
    const tx1 = contractInstance.methods.downloadFile().send({from, value, gasPrice, gasLimit});
    const tx2 = contractInstance.methods.getFileOwner().send({from, value, gasPrice, gasLimit});
  
    // Sign and send the transaction using MetaMask
    const signedTx0 = await ethereum.request({ method: 'eth_sendTransaction', params: [tx0] });
    const signedTx1 = await ethereum.request({ method: 'eth_sendTransaction', params: [tx1] });
    const signedTx2 = await ethereum.request({ method: 'eth_sendTransaction', params: [tx2] });
  
    // Show the transaction receipt
    console.log(signedTx0);
    console.log(signedTx1);
    console.log(signedTx2);
  }