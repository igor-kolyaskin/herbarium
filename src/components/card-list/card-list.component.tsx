import { User } from "../../App"
import Card from "../card/card.component"
import './card-list.styles.css'

type CardListProps = {
    filteredUsers: User[]
}

const CardList = ({ filteredUsers }: CardListProps) => (
    <div className="card-list">
        {filteredUsers.map(user => <Card user={user} key={user.id} />)}
    </div >
)

export default CardList