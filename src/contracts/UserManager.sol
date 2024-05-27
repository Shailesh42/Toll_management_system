// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract UserManager {
    struct User {
        string name;
        string email;
        uint balance ;
        string password;
        bool isActive;
        UserRole role;
        string mobileNumber;
        string homeAddress;
        uint256[] challanIds; // Array to efficiently track associated challan IDs
        uint256[] tollIds; 
        uint256[] paymentIds; 
    }
    
    struct Toll {
        string vehicleNo;
        uint256 Time;
        string startingPoint;
        string endingPoint;
        uint256 totalDistance;
        string highwayNo;
        address issuedby;
        uint payamount ;
        bool isPaid ;
    }

    struct Vehicle { 
        string vehicleType;
        address ownerAddress;
    }

    struct Challan {
        string vehicleNo;
        uint time ; 
        uint256 challanPrice;
        string reason;
        address issuedby;
        bool isPaid ;
    }
   
    struct Payment {
        uint amount ;
        uint time ;
    }
    
    Toll[] public tolldetails ;
    Challan[] public challandetails ;
    Payment[] public paymentdetails ;
     
    enum UserRole { Admin, Employee, Customer }
    
    mapping(address => User) public users;
    mapping(string  => Vehicle) public vehicledetails ;
    mapping(string => uint256) public categoryToRate;
    address[] public userAddresses;
    
    uint public admincount ;
    uint public employeecount ;
    uint public customercount ;
    uint public activecount ;
    uint public blockedcount ;
    

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
    event UserSignUp(address indexed userAddress, string name, string email,uint balance ,string password,bool isActive, UserRole role);
    event UserLogin( address indexed userAddress,string name, UserRole role);
    event UserRoleChanged(address indexed userAddress, UserRole oldRole, UserRole newRole);
    event UserBlocked(address indexed userAddress);
    event UserUnblocked(address indexed userAddress);
    event UserDetailsViewed(string viewerName, string userName, string userEmail, bool isActive, UserRole role);
    event AllUserCounts(uint256 adminCount, uint256 employeeCount, uint256 customerCount, uint256 activeUserCount, uint256 blockedUserCount);
    event VehicleAdded(address indexed userAddress, string registrationNumber, string make, string model, string color);
    event ChallanAdded(address indexed userAddress, string description, uint256 amount);
    event BalanceAdded(address indexed userAddresses, uint balance) ;
    event TollAdded(string vehicleNo, string startingPoint, string endingPoint, uint256 totalDistance, string highwayNo, address indexed issuedby,uint tollamount, bool ispaid);
    event PaymentAdded(uint256 amount, uint256 timestamp);
    event ChallanAdded(string vehicleNo, uint256 timestamp, uint256 challanPrice, string reason, address issuedby);


    constructor() {

        categoryToRate["Motorcycles and Scooters"] = 1;
        categoryToRate["Passenger Vehicles"] = 2;
        categoryToRate["Light Trucks and Pickups"] = 3;
        categoryToRate["Buses"] = 4;
        categoryToRate["Commercial Trucks"] = 5;
        categoryToRate["RVs and Motorhomes"] = 4;
        categoryToRate["Trailers and Caravans"] = 3;
        categoryToRate["Construction and heavy Vehicles"] = 6 ;
        categoryToRate["Emergency Vehicles"] = 0;
        categoryToRate["Specialty Vehicles"] = 5;

        address userAddress = msg.sender;
        users[userAddress].name = "shailesh";
        users[userAddress].email ="shai@gmail.com";
        users[userAddress].balance = 10000 ;
        users[userAddress].password = "1234";
        users[userAddress].isActive = true;
        users[userAddress].role = UserRole.Admin;
        admincount++ ;
         activecount++;
         userAddresses.push(userAddress);
        emit UserSignUp(userAddress,"shailesh","shai@gmail.com",10000 ,"1234",true, UserRole.Admin);
    }

    function signUp(string memory _name, string memory _email, string memory _password) external {
        require(!(bytes(users[msg.sender].name).length > 0), "User is already signed up");
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].password = _password;
        users[msg.sender].isActive = true;
        users[msg.sender].role = UserRole.Customer;
        users[msg.sender].balance = 10000;
        customercount++ ;
         activecount++;
         userAddresses.push(msg.sender);
        emit UserSignUp(msg.sender, _name, _email,10000,_password,true, UserRole.Customer);
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
            admincount--;
        } else if (oldRole == UserRole.Employee) {
            employeecount-- ;
        } else if (oldRole == UserRole.Customer) {
            customercount-- ;
        }
        if (_newRole == UserRole.Admin) {
            admincount++ ;
        } else if (_newRole == UserRole.Employee) {
            employeecount++;
        } else if (_newRole == UserRole.Customer) {
            customercount++ ;
        }
        emit UserRoleChanged(_userAddress, oldRole, _newRole);
     }
    
    function addBalance(address _userAddress , uint balance) external onlyAdmin {
        users[_userAddress].balance += balance ;
        emit BalanceAdded(_userAddress, balance);

    }
     // Function to block a user
    function blockUser(address _userAddress) external onlyAdminOrEmployee {
        require(users[_userAddress].isActive, "User is already blocked");
        users[_userAddress].isActive = false;
        activecount--;
        blockedcount++ ;
        emit UserBlocked(_userAddress);
     }

    function unblockUser(address _userAddress) external onlyAdminOrEmployee {
        require(!users[_userAddress].isActive, "User is already active");
        users[_userAddress].isActive = true;
        activecount++ ;
        blockedcount--;  
        emit UserUnblocked(_userAddress);
   }

    function saveUserDetails(string memory _mobileNumber, string memory _homeAddress) external onlyUser {
        users[msg.sender].mobileNumber = _mobileNumber ;
        users[msg.sender].homeAddress = _homeAddress ;
    }

    function viewUserDetails(address _userAddress) public view returns (string memory, string memory, bool, UserRole ) {
        return (users[_userAddress].name, users[_userAddress].email, users[_userAddress].isActive, users[_userAddress].role);
    } 
    
    function usercount() external onlyAdmin view returns (uint ,uint ,uint , uint ,uint,uint ){
       return  (activecount+blockedcount,admincount,employeecount,customercount,activecount, blockedcount );
    }         

    
    
    function addvehicle(address _owner, string memory reg_no,  string memory vehicletype ) external onlyAdmin {
        vehicledetails[reg_no].ownerAddress  = _owner;
        vehicledetails[reg_no].vehicleType = vehicletype ;
    }
    
    function getAllUserAddresses() public view returns (address[] memory) {
        return userAddresses;
    }
    
     function getChallanIds(address userAddress) public view returns (uint256[] memory) {
        return users[userAddress].challanIds;
    }

    function getTollIds(address userAddress) public view returns (uint256[] memory) {
        return users[userAddress].tollIds;
    }

    function getPaymentIds(address userAddress) public view returns (uint256[] memory) {
        return users[userAddress].paymentIds;
    }
     function addToll(string memory reg_no,string memory startingPoint, string memory endingPoint, uint256 totalDistance,string memory highwayNo, address  issuedby) external onlyAdminOrEmployee {
        address owner= vehicledetails[reg_no].ownerAddress;
        require(owner != address(0), "Invalid vehicle registration number"); // Check if vehicle exists
        string memory cat = vehicledetails[reg_no].vehicleType ;/* logic to get category based on vehicle details (replace with implementation) */ // Implement logic to retrieve category
        uint256 tollRate = categoryToRate[cat];
        uint256 tollAmount = tollRate * totalDistance;

        // Create a new Toll object
        Toll memory newToll = Toll(reg_no, block.timestamp, startingPoint, endingPoint, totalDistance, highwayNo, issuedby, tollAmount,false);

        uint256 tollIndex = tolldetails.length;// Add the toll to the tolls array
        tolldetails.push(newToll);
        
        User storage user = users[owner]; // Get a reference to the user's storage slot
        user.tollIds.push(tollIndex);

        emit TollAdded(reg_no, startingPoint, endingPoint, totalDistance, highwayNo, issuedby, tollAmount,false);  
    }
    
    function addPayment(uint256 amount ) public {
        require( users[msg.sender].balance  >= amount  , "Payment amount cannot be zero");
        users[msg.sender].balance -= amount ;
        uint index = paymentdetails.length ;
        users[msg.sender].paymentIds.push(index) ;
        paymentdetails.push(Payment(amount, block.timestamp)) ;    

        emit PaymentAdded(amount,block.timestamp);
    }

    function confirmpaid_toll(uint index ) public returns (bool){
        tolldetails[index].isPaid = true ;
        return true; 
    }

    function confirmpaid_challan(uint index ) public returns (bool){
        challandetails[index].isPaid = true ;
        return true; 
    }
     
    function addChallan(string memory reg_no, uint256 timestamp, uint256 challanPrice, string memory reason, address issuedby,bool ispaid) public {
        require(challanPrice > 0, "Challan price cannot be zero"); // Validate challan price
        
        address owner = vehicledetails[reg_no].ownerAddress;
        require(owner != address(0), "Invalid vehicle registration number");
        User storage user = users[owner];
        uint index = paymentdetails.length ;

        user.paymentIds.push(index) ;
        // Create a new Challan object
        Challan memory newChallan = Challan(reg_no, timestamp, challanPrice, reason, issuedby,ispaid);
     
        // Add the challan to the challans array
        challandetails.push(newChallan);
        emit ChallanAdded(reg_no, timestamp, challanPrice, reason, issuedby);
    }
    
     function getTollByIndex(uint256 index) public view returns (Toll memory) {
        require(index >= 0 && index < tolldetails.length, "Invalid toll index");
        return tolldetails[index];
    }

    function getChallanByIndex(uint256 index) public view returns (Challan memory) {
        require(index >= 0 && index < challandetails.length, "Invalid challan index");
        return challandetails[index];
    }

    function getPaymentByIndex(uint256 index) public view returns (Payment memory) {
        require(index >= 0 && index < paymentdetails.length, "Invalid payment index");
        return paymentdetails[index];
    }


}

