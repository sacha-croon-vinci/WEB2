interface Personne {
    name: string;
    age: number;
}

function Main() {
const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;

    const people: Personne[] = [
        { name: name1, age: age1 },
        { name: name2, age: age2 },
        { name: name3, age: age3 },
    ];

    return (
        <div>
            {people.map((person) => (
                <div>
                    <h2>{person.name}</h2>
                    <p>Age: {person.age}</p>
                </div>
            ))}
        </div>
    )};

    export default Main;