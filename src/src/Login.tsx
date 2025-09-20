import Footer from "./Footer";
import Navbar from "./Navbar";
import './css/SignUp.css'

function SignUp() {
    return (
        <> 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}}>
                <Navbar />
                <div className="sign-up-form">
                    <div className="sign-up-field">
                        <label>Username</label>
                        <input className="sign-up-field-input"></input>
                    </div>
                    <div className="sign-up-field">
                        <label>Password</label>
                        <input></input>
                    </div>
                    <div className="sign-up-field">
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;