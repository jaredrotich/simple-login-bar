import { useState } from "react";
import "../styles/LoginBar.css";

export default function LoginBar() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("false");
    const [error, setError] = useState("");
    

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setError("");
        console.log("Logging in with", { email, password });
        setEmail("");
        setPassword("");
    };

    return (
        <div className="login-container">
          <h2>Welcome Back 👋</h2>

          <form onSubmit={handleLogin}>
             <input
             type="email"
             className="login-input"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />

             <div className="password-wrapper">
                <input 
                type={showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span 
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
                >
                    {showPassword ? "Hide" : "Show"}
                </span>
             </div>

             {error && <p className="error-text">{error}</p>}

              <button type="submit" className="login-button">
                Log In
                </button>
          </form>
        </div>
    );

}