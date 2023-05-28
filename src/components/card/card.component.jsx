import './card.styles.css'

const Card = ({ user: { name, id, email } }) => {

    return (
        <div className="card-container">
            <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card