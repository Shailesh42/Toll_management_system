import React, { useState } from 'react';
import './UserManagement.css'; // Import your CSS file

const UserManagement = ({ users, updateUserRole, blockUser, activateUser }) => {
  const [selectedUser, setSelectedUser] = useState(''); // User address for actions
  const [newRole, setNewRole] = useState(''); // New role for change role action

  const handleChangeUserRole = async (event) => {
    event.preventDefault();

    if (!selectedUser || !newRole) {
      alert('Please select a user and enter a new role.');
      return;
    }

    try {
      await updateUserRole(selectedUser, newRole);
      setSelectedUser('');
      setNewRole('');
      alert('User role successfully changed.');
    } catch (error) {
      console.error('Error changing user role:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleManageUser = async (user, action) => {
    if (!user) {
      alert('Please select a user to ' + action.toLowerCase());
      return;
    }

    try {
      if (action === 'Block') {
        await blockUser(user);
      } else if (action === 'Activate') {
        await activateUser(user);
      } else {
        console.error('Invalid action:', action);
        return;
      }
      setSelectedUser('');
      alert('User successfully ' + action.toLowerCase() + 'ed.');
    } catch (error) {
      console.error('Error ' + action.toLowerCase() + 'ing user:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="change-role">
        <h3>Change User Role</h3>
        <form onSubmit={handleChangeUserRole}>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">-- Select User --</option>
            {users?.map((user) => (
              <option key={user.address} value={user.address}>
                {user.address}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="New Role"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          <button type="submit">Change Role</button>
        </form>
      </div>
      <div className="account-actions">
        <h3>Account Actions</h3>
        <ul>
          {users?.length > 0 ? (
            users.map((user) => (
              <li key={user.address}>
                <span>{user.address}</span>
                <button
                  onClick={() => handleManageUser(user.address, 'Block')}
                  disabled={selectedUser === user.address} // Disable if selected
                >
                  Block
                </button>
                <button
                  onClick={() => handleManageUser(user.address, 'Activate')}
                  disabled={selectedUser === user.address} // Disable if selected
                >
                  Activate
                </button>
              </li>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
