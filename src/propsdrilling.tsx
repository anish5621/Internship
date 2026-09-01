
function App() {
    const username = "Anish";

    return <Home username={username} />;
}

function Home({ username }: { username: string }) {
    return <Profile username={username} />;
}

function Profile({ username }: { username: string }) {
    return <Data username={username} />;
}

function Data({ username }: { username: string }) {
    return <h1>Nepal {username}</h1>;
}
export default App;