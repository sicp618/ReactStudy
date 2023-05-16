import { useState } from "react";

function Header({ title }) {
    return <h1>{title ? `cool ${title}` : `Default Title`}</h1>;
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);
    function handleLike() {
        setLikes(likes + 1);
    }

    const names = ["John", "Paul", "George", "Ringo"];
    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button onClick={handleLike}>Like ({likes})</button>
        </div>
    );
}
