import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card p-3 mb-2">
      <h5>{user.firstName} {user.lastName}</h5>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  );
};

export default React.memo(UserCard);