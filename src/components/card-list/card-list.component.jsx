import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

class CardList extends Component {

    render() {
        const { filteredUsers } = this.props
        console.log('render from CardList')
        return (
            <div className="card-list">
                {filteredUsers.map(user => <Card user={user}  key={user.id}/>)}
            </div >
        )
    }
}

export default CardList