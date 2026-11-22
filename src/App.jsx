import { useState } from "react";
import Login from "./Login.jsx";
import Home from "./Home.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return <Home />;
}
