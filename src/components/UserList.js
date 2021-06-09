import { useEffect, useState } from "react";
import User from "./User"

function UserList() {
    const[userId, setUserId] =useState()
    const [results, setResults]=useState([])
    useEffect(() => {
        const baseUrl ="https://randomuser.me/api/?inc=email,gender,name,picture&results=10";
        let url = baseUrl;

        if(userId) {
            url = `${baseUrl}?userId=${userId}`; 
        }

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setResults(data.results);
        });
    }, [userId]); 

    function renderResults () {
        const userList= results.map((result) => (
            <User 
            key={.email}
            title={result.name.title}
            first={result.name.first}
            last={result.name.last} 
            gender={result.gender}  
            picture={result.picture.medium} />
        ));
        return userList;
    }
    
    function handleUserIdChange(event) {
        const inputElement = event.target;
        setUserId(inputElement.value);
    }
    return (
        <article className="ResultList">
            <input 
            placeholder="Type user id"
            name="name"
            onChange={handleUserIdChange}
            />
            <p> Results: {results.length} </p>
            {renderResults()}
        </article>
    );
}

export default UserList;
