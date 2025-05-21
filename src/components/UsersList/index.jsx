import React, { useState } from "react";

const UsersList = ({ users }) => {
  const [sortedUsers, setSortedUsers] = useState(
    users.sort((a, b) => a.name.localeCompare(b.name))
  );

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const newUsers = [...sortedUsers];
      newUsers.splice(index, 1);
      setSortedUsers(newUsers);
    }
  };

  return (
    <div>
      <h2 className="text-black text-3xl mb-3">Users List</h2>
      <div>
        {sortedUsers.map((user, index) => (
          <div key={`${user.name}-${user.age}`} className="mb-2 flex">
            <span className="block mr-2 min-w-10 flex-[200px]">
              {user.name}
            </span>
            <button
              className="bg-red-500 text-white rounded-2xl px-2 font-semibold cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {sortedUsers.length == 0 && (
        <div className="text-black text-2xl">NO USERS</div>
      )}
    </div>
  );
};

export default UsersList;
