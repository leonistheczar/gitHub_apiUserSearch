// API data variables parsing
const userImg = document.getElementById('user-avatar');
const profileLink = document.getElementById('userLink');
const profileName  = document.getElementById('userName');
const followers  = document.getElementById('userFollowers');
const following  = document.getElementById('userFollowing');
const publicRepositories  = document.getElementById('userRepos');
const login  = document.getElementById('loginName');

class UI{
    displayProfileData(userData){
        userImg.src = `${userData.profileData.avatar_url}`;
        profileLink.href = `${userData.profileData.html_url}`;
        login.textContent = `${userData.profileData.login}`;
        followers.textContent = `${userData.profileData.followers}`;
        following.textContent = `${userData.profileData.following}`;
        publicRepositories.textContent = `${userData.profileData.public_repos}`;
        profileName.textContent = `${userData.profileData.name}`;

    }
    addClass(){
        profileName.className = 'green-bg';
        login.className = 'blue-bg';
        followers.className = 'blue-bg'
        following.className = 'green-bg';
        publicRepositories.className = 'blue-bg';
    }
}
export default UI;