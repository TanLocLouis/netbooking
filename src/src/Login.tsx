import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './css/SignUp.css'
import axios from "axios";
import { redirect } from "react-router";

function SignUp() {
    const [LoginInfo, SetLoginInfo] = useState({
        email: "",
        password: ""
    });

    const getUserByID = async (id) => {
        const url = `http://localhost:8080/api/v1/user/${id}`;
        const res = await axios.get(url, {headers:
            {'Content-Type': 'application/json'}
        });
        return res.data;
    }

    const handleLoginFormSubmitted = e => {
        const url = "http://localhost:8080/api/v1/user/auth/login";
        axios.post(url, LoginInfo, {headers:
            {'Content-Type': 'application/json'}
        }).then(res => {
            if (res.data == "") {
                document.getElementById("error-label").style.display = "block";
            } else {
                localStorage.setItem('user', JSON.stringify(res.data));
                window.location.href = "/";
            }
        }).catch(err => {
        })
        e.preventDefault();
    }

    const handleEmailChanged = e => {
        SetLoginInfo(prev => ({
            ...prev,
            email: e.target.value
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
                            <label>Email</label>
                            <input name="email" onChange={handleEmailChanged}></input>
                        </div>
                        <div className="sign-up-field">
                            <label>Password</label>
                            <input onChange={handlePasswordChanged}></input>
                        </div>
                        <div className="sign-up-field">
                            <button onClick={handleLoginFormSubmitted}>Login</button>
                        </div>
                        <h4 style={{margin: '0', color: 'red', display: 'none'}} id="error-label">
                            wrong email or password
                        </h4>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    )
}

export default SignUp;