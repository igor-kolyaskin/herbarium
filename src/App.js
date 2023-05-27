import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ id: 111, name: "Kuki Puki" }],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => ({ users })
          // () => console.log(this.state)
        )
      );
  }

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        {/* <button
            onClick={() => {
              this.setState(
                (state, props) => ({ name: "Ivan" }),
                () => console.log(this.state)
              );
            }}
          > */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="enter user name"
          className="users-search-box"
        />
        <CardList filteredUsers={filteredUsers} />
      </div>
    );
  }
}

export default App;
