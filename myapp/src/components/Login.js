//import { Studentdata } from "../data/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [Credential, setCredentails] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlelogin = () => {
    if (Credential.username === "thilan" && Credential.password === "1234") {
      setCredentails({ name: "", password: "", error: "" });
      navigate("/dashboard");
    } else {
      setCredentails({ error: "Please check your username and password !" });
    }
  };

  return (
    <>
      <div>
        <p>{Credential.error}</p>
        <h3>Name:</h3>
        <input type="text" name="username" onChange={handlechange} />
        <h3>Password:</h3>
        <input type="password" name="password" onChange={handlechange} />
        <button onClick={handlelogin}>Login</button>
      </div>
    </>
  );
}
