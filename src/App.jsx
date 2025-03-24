import React from "react";
import { DataProvider } from "./context/DataManager";
import UserSearch from "./pages/UserSearch";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <DataProvider>
      <UserSearch />
    </DataProvider>
  );
};

export default App;
