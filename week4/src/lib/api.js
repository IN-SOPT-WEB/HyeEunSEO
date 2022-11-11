import axios from "axios";

export default async function getGithubProfile(username) {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response;
}
