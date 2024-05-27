import Web3 from 'web3';
// import Auth from './backend/build/contracts/Auth.json'; // Replace with your contract ABI

const getWeb3 = async () => {
//   if (window.ethereum) {
//     try {
//       const web3Instance = new Web3(window.ethereum);
//       const accounts = await window.ethereum.enable();
//       return { web3: web3Instance, account: accounts[0] };
//     } catch (error) {
//       console.error('Error connecting to wallet:', error);
//       return null;
//     }
//   } else {
//     console.error('Non-Ethereum browser detected. Please install MetaMask!');
//     return null;
//   }
 };

const loadContract = async (web3) => {
  // if (web3) {
  //   const networkId = await web3.eth.net.getId();
  //   const deployedAddress = Auth.networks[networkId].address;
  //   const contractInstance = new web3.eth.Contract(Auth.abi, deployedAddress);
  //   return contractInstance;
  // } else {
  //   console.error('Web3 instance not found');
  //   return null;
  // }
};


export { getWeb3, loadContract };
