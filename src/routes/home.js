import React from "react";
import Login from "./login";
import { useSelector } from "react-redux";

function Home() {
    const user = useSelector((state) => state.user.value);
    return (
        <div>
            <h1>Profile Page</h1>
            <p> Name : {user.name}</p>
            <p> Age : {user.age}</p>
            <p> Email : {user.email}</p>
            <Login />
        </div>
    );
}

export default Home;
