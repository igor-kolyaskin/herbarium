import { Component } from "react";

class CardList extends Component {

    render() {
        const { filteredUsers } = this.props
        console.log('render from CardList')
        return (
            <>{filteredUsers.map(({ name, id }) => <div key={id}><h1>{name}</h1></div>)}</>
        )
    }

}

export default CardList