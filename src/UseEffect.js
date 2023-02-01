import { useEffect, useState } from "react";

const App = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
            );
            const responseJSON = await response.json();

            setItems(responseJSON);
        };

        fetchResourceTypes();
    }, [resourceType])

    useEffect(() => {
        console.log("componentDidMount");

        return () => {
            console.log("componentWillUnmount");
        }
    }, [])

    const changeResourceType = () => {
        setResourceType(resourceType);
    };

    return (
        <div>
            <h1>{resourceType}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>

            {items.map((item) => (
                <p>{item.id}</p>
            ))}
        </div>
    );
}

export default App;
