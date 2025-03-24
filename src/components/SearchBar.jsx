import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className="btn btn-secondary mt-2" onClick={() => setSearchTerm("")}>Clear</button>
      )}
    </div>
  );
};

export default React.memo(SearchBar);