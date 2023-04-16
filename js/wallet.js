
import detectEthereumProvider from '@metamask/detect-provider';
async function fun() {
  
  
  console.log("Welcome to the javaTpoint.com");
  if (typeof window.ethereum === 'undefined') {
      alert('Please install Metamask to use this feature.');
      window.location.href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

      return;
    }
  
     // Prompt user to connect Metamask
     try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
      alert('Please connect to Metamask to use this feature.');
      return;
    }
  
    // Detect the current network
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  
    // Prompt user to switch to a specific network if not on it
    if (chainId !== '5') { // change to your desired network id
      alert('Please switch to the desired network to use this feature.');
      return;
    }
  
    // Metamask is connected and on the desired network, do your logic here
    // Example: get the user's address
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const address = accounts[0];
    console.log(`User address: ${address}`);
  }
  
  