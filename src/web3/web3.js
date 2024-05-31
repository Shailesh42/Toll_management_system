import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:7545'); // Replace with your provider URL
const web3 = new Web3(provider);

export const loadContract = async (contractAddress) => {
  const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "adminCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "employeeCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "customerCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "activeUserCount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blockedUserCount",
          "type": "uint256"
        }
      ],
      "name": "AllUserCounts",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "name": "BalanceAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ChallanAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "vehicleNo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "challanPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        }
      ],
      "name": "ChallanAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "PaymentAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "vehicleNo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "startingPoint",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "endingPoint",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalDistance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "highwayNo",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tollamount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "ispaid",
          "type": "bool"
        }
      ],
      "name": "TollAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "UserBlocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "viewerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "userName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "userEmail",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "enum UserManager.UserRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "UserDetailsViewed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum UserManager.UserRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "UserLogin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "enum UserManager.UserRole",
          "name": "oldRole",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "enum UserManager.UserRole",
          "name": "newRole",
          "type": "uint8"
        }
      ],
      "name": "UserRoleChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "password",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "enum UserManager.UserRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "UserSignUp",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "UserUnblocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "registrationNumber",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "make",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "model",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "color",
          "type": "string"
        }
      ],
      "name": "VehicleAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "reg_no",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "vehicletype",
          "type": "string"
        }
      ],
      "name": "VehicleAdded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "activecount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "admincount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "blockedcount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "categoryToRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "challandetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "vehicleNo",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "challanPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isPaid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "customercount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "employeecount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tolldetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "vehicleNo",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "Time",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "startingPoint",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "endingPoint",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalDistance",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "highwayNo",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "payamount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "password",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        },
        {
          "internalType": "enum UserManager.UserRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "vehicledetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "vehicleType",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "ownerAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "signUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_password",
          "type": "string"
        },
        {
          "internalType": "enum UserManager.UserRole",
          "name": "_role",
          "type": "uint8"
        }
      ],
      "name": "login",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        },
        {
          "internalType": "enum UserManager.UserRole",
          "name": "_newRole",
          "type": "uint8"
        }
      ],
      "name": "changeUserRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "blockUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "unblockUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "usercount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "reg_no",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "vehicletype",
          "type": "string"
        }
      ],
      "name": "addvehicle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "reg_no",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "startingPoint",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "endingPoint",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "totalDistance",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "highwayNo",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        }
      ],
      "name": "addToll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "reg_no",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "challanPrice",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "issuedby",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "ispaid",
          "type": "bool"
        }
      ],
      "name": "addChallan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllUserAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getChallanIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getTollIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getvehicleIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTollByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "vehicleNo",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "Time",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "startingPoint",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "endingPoint",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "totalDistance",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "highwayNo",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "issuedby",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "payamount",
              "type": "uint256"
            }
          ],
          "internalType": "struct UserManager.Toll",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getChallanByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "vehicleNo",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "time",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "challanPrice",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "issuedby",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isPaid",
              "type": "bool"
            }
          ],
          "internalType": "struct UserManager.Challan",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "viewUserDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "enum UserManager.UserRole",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; // Replace with your contract ABI
  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
};

export { web3 };