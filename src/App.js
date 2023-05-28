import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField)
    );
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">My users</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="enter user name"
        className="users-search-box"
      />
      <CardList filteredUsers={filteredUsers} />
    </div>
  );
};

export default App;
