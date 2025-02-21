import React from "react";
import UserList from "./components/userList";

function App() {
  return (
    <div className="App">
      <h1>React User Management</h1>
      <UserList />  
    </div>
  );
}

// here is where we are caling the component userList

export default App;