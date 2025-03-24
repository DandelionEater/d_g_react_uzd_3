import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import { useData } from "../context/DataManager";

const UserSearch = () => {
  const { users, loading } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("firstName");

  return (
    <div className="container mt-4">
      <h1 className="mb-4">User Search</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        searchField={searchField} 
        setSearchField={setSearchField} 
      />
      {loading ? <p>Loading...</p> : <UserList users={users} searchTerm={searchTerm} searchField={searchField} />}
    </div>
  );
};

export default UserSearch;
