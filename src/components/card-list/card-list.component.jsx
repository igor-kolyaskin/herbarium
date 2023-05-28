import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ filteredUsers }) => (
    <div className="card-list">
        {filteredUsers.map(user => <Card user={user} key={user.id} />)}
    </div >
)

export default CardList