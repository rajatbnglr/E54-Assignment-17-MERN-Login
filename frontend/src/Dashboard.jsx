function Dashboard({ email, onLogout }) {
    return (
        <div className="dashboard-container">
            <div className="dashboard-box">
                <h1>Welcome, you are logged in!</h1>

                <p>
                    Logged in as: <strong>{email}</strong>
                </p>

                <button onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Dashboard;