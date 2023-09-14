import React from "react";

interface User {
    id: number;
    name: string;
    username: string;

}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();
    return <div>
        <h1>users</h1>
        <ul>
            {users.map((user: User) => {
                    return <li key={user.id}>{user.name}</li>
                }
            )}
        </ul>
    </div>;
}
export default UsersPage;