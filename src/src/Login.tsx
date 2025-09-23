import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './css/SignUp.css'
import axios from "axios";

function SignUp() {
    const [LoginInfo, SetLoginInfo] = useState({
        username: "",
        password: ""
    });

    const handleLoginFormSubmitted = e => {
        const url = "http://localhost:8080/api/v1/user/auth";
        axios.post(url, LoginInfo, {headers:
            {'Content-Type': 'application/json'}
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
        })
        e.preventDefault();
    }

    const handleUsernameChanged = e => {
        SetLoginInfo(prev => ({
            ...prev,
            username: e.target.value
        }));
    };

    const handlePasswordChanged = e => {
        SetLoginInfo((prev) => ({
            ...prev,
            password: e.target.value 
        }));
    }

    return (
        <> 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}}>
                <Navbar />
                <form>
                    <div className="sign-up-form">
                        <div className="sign-up-field">
                            <label>Username</label>
                            <input name="username" onChange={handleUsernameChanged}></input>
                        </div>
                        <div className="sign-up-field">
                            <label>Password</label>
                            <input onChange={handlePasswordChanged}></input>
                        </div>
                        <div className="sign-up-field">
                            <button onClick={handleLoginFormSubmitted}>Login</button>
                        </div>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    )
}

export default SignUp;