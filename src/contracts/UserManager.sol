// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract UserManager {
    struct User {
        string name;
        string email;
        string password;
        bool isActive;
        UserRole role;
        string mobileNumber;
        string homeAddress;
        uint[] tollids;
        string[] vehicleids;
        uint[] challanids ;
    }

    enum UserRole { Admin, Employee, Customer }
    
    mapping(address => User) public users;
    address[] public adminAddresses;
    address[] public employeeAddresses;
    address[] public customerAddresses;
    address[] public activeAddresses;
    address[] public blockedAddresses;
   
     using ArrayUtils for address[];

   modifier onlyAdminOrEmployee() {
        require(users[msg.sender].role == UserRole.Admin || users[msg.sender].role == UserRole.Employee , "Only admin or employee can call this function");
        _;
    }
    
    modifier onlyUser() {
        require(users[msg.sender].isActive, "User is Blocked");
        _;
    }
    
    modifier onlyAdmin() {
        require(users[msg.sender].role == UserRole.Admin, "Only admin can call this function");
        _;
    }
    event UserSignUp(address indexed userAddress, string name, string email,string password,bool isActive, UserRole role);
    event UserLogin( address indexed userAddress,string name, UserRole role);
    event UserRoleChanged(address indexed userAddress, UserRole oldRole, UserRole newRole);
    event UserBlocked(address indexed userAddress);
    event UserUnblocked(address indexed userAddress);
    event UserDetailsViewed(string viewerName, string userName, string userEmail, bool isActive, UserRole role);
    event AllUserCounts(uint256 adminCount, uint256 employeeCount, uint256 customerCount, uint256 activeUserCount, uint256 blockedUserCount);
    event TollIDAdded(address indexed userAddress, string tollName, string tollID);
    event VehicleAdded(address indexed userAddress, string registrationNumber, string make, string model, string color);
    event ChallanAdded(address indexed userAddress, string description, uint256 amount);
    
    constructor() {
        address userAddress = msg.sender;
        users[userAddress].name = "shailesh";
        users[userAddress].email ="shai@gmail.com";
        users[userAddress].password = "1234";
        users[userAddress].isActive = true;
        users[userAddress].role = UserRole.Admin;
        adminAddresses.push(userAddress);
        activeAddresses.push(userAddress);
        emit UserSignUp(userAddress,"shailesh","shai@gmail.com","1234",true, UserRole.Admin);
    }

    function signUp(string memory _name, string memory _email, string memory _password) external {
        require(!(bytes(users[msg.sender].name).length > 0), "User is already signed up");
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].password = _password;
        users[msg.sender].isActive = true;
        users[msg.sender].role = UserRole.Customer;
        customerAddresses.push(msg.sender);
        activeAddresses.push(msg.sender); 
        emit UserSignUp(msg.sender, _name, _email,_password,true, UserRole.Customer);
    }
     
    function login( string memory _password, UserRole _role) external returns (bool) {
        require(bytes(users[msg.sender].name).length > 0 , "User is not registered yet.");
        require(users[msg.sender].isActive, "User is blocked"); 
        if (keccak256(bytes(users[msg.sender].password)) != keccak256(bytes(_password))) {
            return false; // Invalid password
        }
        if (users[msg.sender].role != _role) {
            return false; // Invalid role
        }
        emit UserLogin(msg.sender,users[msg.sender].name, _role);
        return true; // All checks passed, login successful
    }

    function changeUserRole(address _userAddress, UserRole _newRole) external onlyAdminOrEmployee {
        UserRole oldRole = users[_userAddress].role;
        users[_userAddress].role = _newRole;
        if (oldRole == UserRole.Admin) {
            adminAddresses.removeAddress(_userAddress);
        } else if (oldRole == UserRole.Employee) {
            employeeAddresses.removeAddress(_userAddress);
        } else if (oldRole == UserRole.Customer) {
            customerAddresses.removeAddress(_userAddress);
        }
        if (_newRole == UserRole.Admin) {
            adminAddresses.push(_userAddress);
        } else if (_newRole == UserRole.Employee) {
            employeeAddresses.push(_userAddress);
        } else if (_newRole == UserRole.Customer) {
            customerAddresses.push(_userAddress);
        }
        emit UserRoleChanged(_userAddress, oldRole, _newRole);
     }

    // Function to block a user
    function blockUser(address _userAddress) external onlyAdminOrEmployee {
        require(users[_userAddress].isActive, "User is already blocked");
        users[_userAddress].isActive = false;
        activeAddresses.removeAddress(_userAddress);
        blockedAddresses.push(_userAddress);
        emit UserBlocked(_userAddress);
     }

    function unblockUser(address _userAddress) external onlyAdminOrEmployee {
        require(!users[_userAddress].isActive, "User is already active");
        users[_userAddress].isActive = true;
        blockedAddresses.removeAddress(_userAddress);
        activeAddresses.push(_userAddress);
        emit UserUnblocked(_userAddress);
   }

    function saveUserDetails(string memory _mobileNumber, string memory _homeAddress) external onlyUser {
        users[msg.sender].mobileNumber = _mobileNumber;
        users[msg.sender].homeAddress = _homeAddress;
    }
    function getUserDetails() external view onlyUser returns (string memory, string memory, bool, UserRole,uint ,uint,uint) {
        return (users[msg.sender].name, users[msg.sender].email, users[msg.sender].isActive, users[msg.sender].role, users[msg.sender].tollids.length,users[msg.sender].vehicleids.length,users[msg.sender].challanids.length );
    }

    function viewUserDetails(address _userAddress) external onlyAdminOrEmployee view returns (string memory, string memory, bool, UserRole,uint,uint,uint) {
        return (users[_userAddress].name, users[_userAddress].email, users[_userAddress].isActive, users[_userAddress].role, users[_userAddress].tollids.length,users[_userAddress].vehicleids.length,users[_userAddress].challanids.length);
    } 
    
    function usercount() external onlyAdmin view returns (uint ,uint ,uint , uint ,uint ){
       return  (adminAddresses.length, employeeAddresses.length , customerAddresses.length ,activeAddresses.length, blockedAddresses.length );
    } 
    
    function personalcount() public view returns(uint ,uint , uint ){
        return (users[msg.sender].tollids.length, users[msg.sender].vehicleids.length, users[msg.sender].challanids.length );
    }
     
    function tolldetails() public view returns(uint[] memory ){
      return (users[msg.sender].tollids);
    }
    function challandetails() public view returns(uint[] memory){
      return (users[msg.sender].challanids);
    }
    function vehiclesdetails() public view returns(string[] memory ){
        return(users[msg.sender].vehicleids);
    } 
}
library ArrayUtils {
    function removeAddress(address[] storage array, address element) internal {
        for (uint256 i = 0; i < array.length; i++) {
            if (array[i] == element) {
                array[i] = array[array.length - 1];
                array.pop();
                break;
            }
        }
    }
}

// Solidity extension to get the length of a mapping

