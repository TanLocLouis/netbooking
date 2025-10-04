import Navbar from "./Navbar";
import './css/SignUp.css'
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [SignUpInfo, SetSignUpInfo] = useState({
        username: "",
        email: "",
        password: "",
        seat_number: ""
    });

    const handleLoginFormSubmitted = e => {
        console.log(SignUpInfo);
        axios.post("http://localhost:8080/api/v1/user/auth/signup", SignUpInfo)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        e.preventDefault();
    }

    const handleUsernameChange = e => {
        SetSignUpInfo(prev => ({
            ...prev,
            username: e.target.value
        }));
    }

    const handleEmailChange = e => {
        SetSignUpInfo(prev => ({
            ...prev,
            email: e.target.value
        }));
    }

    const handlePasswordChange = e => {
        SetSignUpInfo(prev => ({
            ...prev,
            password: e.target.value
        }));
    }

    const handleSeatnumberChange = e => {
        SetSignUpInfo(prev => ({
            ...prev,
            seat_number: e.target.value
        }));
    }

    return (
        <> 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}}>
                <Navbar />
                <form onSubmit={handleLoginFormSubmitted}>
                    <div className="sign-up-form">
                        <div className="sign-up-field">
                            <label>Username</label>
                            <input onChange={handleUsernameChange}  className="sign-up-field-input" required></input>
                        </div>
                        <div className="sign-up-field">
                            <label>Email</label>
                            <input onChange={handleEmailChange}  className="sign-up-field-input" required></input>
                        </div>
                        <div className="sign-up-field">
                            <label>Password</label>
                            <input onChange={handlePasswordChange}  className="sign-up-field-input" required></input>
                        </div>
                        <div className="sign-up-field">
                            <label>Seat Number</label>
                            <input onChange={handleSeatnumberChange}  className="sign-up-field-input" required></input>
                        </div>
                        <div className="sign-up-field">
                            <button>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;