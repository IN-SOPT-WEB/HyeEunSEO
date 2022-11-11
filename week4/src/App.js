import axios from "axios";

import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        getGithubProfile();
    }, []);

    return <div>App</div>;
}

async function getGithubProfile() {
    const response = await axios.get("https://api.github.com/users/henization");
    console.log("data", response);
}
