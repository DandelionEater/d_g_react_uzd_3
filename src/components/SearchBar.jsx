import React, { useCallback } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, searchField, setSearchField, defaultSearchField = "firstName" }) => {
  const handleSearchChange = useCallback((e) => setSearchTerm(e.target.value), [setSearchTerm]);
  const handleFieldChange = useCallback((e) => setSearchField(e.target.value), [setSearchField]);
  const clearSearch = useCallback(() => setSearchTerm(""), [setSearchTerm]);

  return (
    <div className="mb-3 d-flex align-items-center">
      <select className="form-select me-2" value={searchField} onChange={handleFieldChange}>
        <option value="fullName">Full Name</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="email">Email</option>
        <option value="city">City</option>
      </select>
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder={`Search by ${searchField || defaultSearchField}...`}
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        {searchTerm && <button className="btn btn-outline-secondary" onClick={clearSearch}>✖</button>}
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
