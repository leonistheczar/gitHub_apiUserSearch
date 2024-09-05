// GitHub JS Iniit
import GitHub from './github.js'
const github = new GitHub;
// UI Init
import UI from './ui.js'
const ui = new UI;
// Variable Parsing
const body = document.querySelector('.main');
const searchInput = document.getElementById('searchInput');
const userForm = document.getElementById('searchWrapper');
const loaderImg = document.getElementById('loaderImg'); 

// Data Variables Parsing
const repo1 = document.getElementById('repo-1');
const repo2 = document.getElementById('repo-2');
const repo3 = document.getElementById('repo-3');
const repo4 = document.getElementById('repo-4');
const repo5 = document.getElementById('repo-5');
// Event Listeners
document.addEventListener('DOMContentLoaded', loadEvents);
function loadEvents() {
    userForm.addEventListener('submit', fetchUsers);
}

// Fetch User Data
function fetchUsers(e) {
    e.preventDefault();
    
    let username = searchInput.value;
    if (username != '') {
        github.getUsers(username)
            .then(userData => {
                if (userData.profileData.message === 'Not Found') {
                    alert('User Not Found');
                }
                else{
                    body.id = 'body';
                    loaderImg.src = './img/Rolling@1x-0.9s-200px-200px(1).gif';
                    setTimeout(() => {
                        body.id = '';
                        loaderImg.src = '';
                        // Display data from api to elements
                        ui.displayProfileData(userData);
                        // Added styles classes
                        ui.addClass()
                        // Fetch user repositories
                        fetchUserRepos();
                    }, 1500);
                }
            })
    }
    else{
        alert(`Search Field is empty`);
    }
}
// Fetch the user repositories
function fetchUserRepos() {
    let username = searchInput.value;
    github.getUserRepos(username)
    .then(userReposData => {
        console.log(userReposData);

        const repoElements = [repo1,repo2,repo3,repo4,repo5];
        const repos = userReposData.reposData; 
        for (let i = 0; i < repos.length && i < 5; i++) {
            if (repos[i].name == null) {
                repoElements[i].textContent = 'null';
            }
            else{
            repoElements[i].textContent = `${repos[i].name}`;
        }}
    });
}
