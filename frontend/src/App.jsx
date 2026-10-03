import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogin = (userEmail) => {
        setEmail(userEmail);
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setEmail("");
        setLoggedIn(false);
    };

    return (
        <>
            {loggedIn ? (
                <Dashboard
                    email={email}
                    onLogout={handleLogout}
                />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );
}

export default App;