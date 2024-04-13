import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/user";

function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ name: "John", age: 25, email: "hello" }));
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                logout
            </button>
        </div>
    );
}

export default Login;
