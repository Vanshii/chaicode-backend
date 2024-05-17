const express = require('express');

require('dotenv').config()

const app = express();

const port = 3000;

const githubdata = {
    
        "login": "Vanshii",
        "id": 121932717,
        "node_id": "U_kgDOB0SLrQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/121932717?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Vanshii",
        "html_url": "https://github.com/Vanshii",
        "followers_url": "https://api.github.com/users/Vanshii/followers",
        "following_url": "https://api.github.com/users/Vanshii/following{/other_user}",
        "gists_url": "https://api.github.com/users/Vanshii/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Vanshii/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Vanshii/subscriptions",
        "organizations_url": "https://api.github.com/users/Vanshii/orgs",
        "repos_url": "https://api.github.com/users/Vanshii/repos",
        "events_url": "https://api.github.com/users/Vanshii/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Vanshii/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Vanshika",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Studying in Vellore institute of technology as a hosteller",
        "twitter_username": null,
        "public_repos": 8,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2023-01-04T08:37:23Z",
        "updated_at": "2024-05-17T09:17:56Z"
      }


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/github', (req, res) => {  
    res.json(githubdata);   });

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});
