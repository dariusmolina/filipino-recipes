import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Signup.css"; // We'll create this CSS file for styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signed up successfully!");
      }
      // Redirect to recipe submission page or homepage
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Signup;
