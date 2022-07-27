import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="logininLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                      <button className="loginButton">Log In</button>
                      <span className="loginForget">Forget Password</span>
                 <button className="loginRegisterButton">
                    Create a new Account
                 </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
