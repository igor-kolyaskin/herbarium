import { User } from '../../App'
import './card.styles.css'

type CardProps = {
    user: User
}

const Card = ({ user: { name, id, email } }: CardProps) => {

    return (
        <div className="card-container">
            <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card