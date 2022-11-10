import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import UseTitle from "../Hooks/UseTitle";

const Login = () => {
    UseTitle("Login");
    const [error, setError] = useState(null);

    const { signIn, googleSignin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        // sign In
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                return fetch(`${process.env.REACT_APP_server_url}/jwt`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: user.email }),
                });
            })
            .then((res) => {
                return res.json();
            })
            .then((token) => console.log(token))
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };
    // GOOGLE Submit
    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                const user = result.user;
                return fetch(`${process.env.REACT_APP_server_url}/jwt`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: user.email }),
                });
            })
            .then((res) => {
                return res.json();
            })
            .then((token) => {
                console.log(token);
                localStorage.setItem("token", token.token);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        
    );
};

export default Login;
