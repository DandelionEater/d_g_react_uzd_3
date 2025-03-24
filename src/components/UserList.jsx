import React, { useMemo } from "react";
import UserCard from "./UserCard";

const UserList = ({ users, searchTerm, searchField }) => {
  const filteredUsers = useMemo(() => {
    if (!Array.isArray(users) || users.length === 0) return [];

    return users.filter((user) => {
      let fieldValue = "";
      
      if (searchField === "fullName") {
        fieldValue = `${user.firstName} ${user.lastName}`.toLowerCase();
      } else {
        fieldValue = user[searchField]?.toLowerCase() || "";
      }

      return fieldValue.includes(searchTerm.toLowerCase());
    });
  }, [users, searchTerm, searchField]);

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
