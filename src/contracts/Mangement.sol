// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
import "./UserManager.sol";

contract Management  is UserManager  {
      struct Vehicle { 
        string vehicleType;
        address ownerAddress;
        string color;
        bool insuranceStatus;
    }

    struct Toll {
        string vehicleNo;
        uint256 Time;
        string startingPoint;
        string endingPoint;
        uint256 totalDistance;
        string highwayNo;
        address issuedby;
    }

    struct Challan {
        string vehicleNo;
        uint256 challanPrice;
        string reason;
        address issuedby;
    }

    string[] vehicletypes;
    Toll[] tolldetail;
    Challan[] challan;
    uint tollcount;
    uint challancount;

    mapping(string => uint) vehicletype;
    mapping(string => Vehicle) vehicledetails;
  
    event ChallanIssued(string vehicleNo, uint256 challanPrice, string reason, address indexed issuedby);
    event TollAdded(string vehicleNo, string startingPoint, string endingPoint, uint256 totalDistance, string highwayNo, address indexed issuedby);
    

    function addvehicle(string memory reg_no, address owner, string memory vehicle, string memory colour, bool reg_status) external onlyAdmin {
        vehicledetails[reg_no].ownerAddress = owner;
        vehicledetails[reg_no].vehicleType = vehicle;
        vehicledetails[reg_no].color = colour;
        vehicledetails[reg_no].insuranceStatus = reg_status;
        users[owner].vehicleids.push(reg_no);
    }
    
    function addChallan(string memory _vehicleNo, uint256 _challanPrice, string memory _reason) external onlyAdminOrEmployee {
        Challan memory newChallan = Challan(_vehicleNo, _challanPrice, _reason, msg.sender);
        challan.push(newChallan);
        emit ChallanIssued(_vehicleNo, _challanPrice, _reason, msg.sender);
        User storage owner = users[vehicledetails[_vehicleNo].ownerAddress];
        owner.challanids.push(challancount);
        challancount++;
    }

             
   
    function getAllTolls() external view onlyAdmin returns (Toll[] memory) {
    return tolldetail;
    }

    function getAllChallans() external view onlyAdmin returns (Challan[] memory) { 
    return challan;
    }


   function getTollDetails(uint256[] memory indices) external view returns (Toll[] memory) {
    uint256 length = indices.length;
    Toll[] memory tollDetails = new Toll[](length);

    for (uint256 i = 0; i < length; i++) {
        require(indices[i] < tolldetail.length, "Index out of bounds");
        tollDetails[i] = tolldetail[indices[i]];
    }

    return tollDetails;
   }

    function getChallanDetails(uint256[] memory indices) external view returns (Challan[] memory) {
    uint256 length = indices.length;
    Challan[] memory challanDetails = new Challan[](length);

    for (uint256 i = 0; i < length; i++) {
        require(indices[i] < challan.length, "Index out of bounds");
        challanDetails[i] = challan[indices[i]];
    }

    return challanDetails;
    }
    function getVehicleDetails(string[] memory vehicleIds) external view returns (Vehicle[] memory) {
    uint256 length = vehicleIds.length;
    Vehicle[] memory vehicleDetails = new Vehicle[](length);

    for (uint256 i = 0; i < length; i++) {
        require(vehicledetails[vehicleIds[i]].ownerAddress != address(0), "Vehicle does not exist");
        vehicleDetails[i] = vehicledetails[vehicleIds[i]];
    }

    return vehicleDetails;
}

}