import { keys } from "./key.js";

class GitHub{
    constructor(){
        this.clientId = keys.clientId;
        this.clientSecret = keys.clientSecret;
    }
    async getUsers(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&$client_secret=${this.clientSecret}`);
        const profileData = await profileResponse.json();

        return{
            profileData
        }
    }
    async getUserRepos(user){
        const reposResponse  = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientId}&$client_secret=${this.clientSecret}`);
        const reposData = await reposResponse.json();

        return{
            reposData
        }
    }
}
export default GitHub;