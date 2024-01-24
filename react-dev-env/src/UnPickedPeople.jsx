export function UnPickedPeople(props) {
    const people = props.people
    const person = people[3]
    return (
        <>
            <div className="person" data-id={person.id}>
                <div className="person-name-container">
                    <p className="person-name">{person.name}</p>
                </div>
                <img className="person-avi" src={person.picture} alt={person.name} />
            </div>
        </>
    )
}