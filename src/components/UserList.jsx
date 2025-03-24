import React, { useMemo } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, searchTerm }) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;