import { useState, useEffect, ChangeEvent } from "react"
import CardList from "./components/card-list/card-list.component"
import "./App.css"
import SearchBox from "./components/search-box/search-box.component"
import { getData } from "./utils/data.utils"

export type User = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setUsers(users));
    const fetchUsers = async () => {
      // const users = await getData<Array<User>>("https://jsonplaceholder.typicode.com/users")
      const users = await getData<User[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(users)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField)
    )
    setFilteredUsers(newFilteredUsers)
  }, [users, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

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
  )
}

export default App
