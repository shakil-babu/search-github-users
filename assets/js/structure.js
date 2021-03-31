class Structure{
    constructor(){
        this.client_id = 'fc10e189b91832a58125' ;
        this.client_secret = '997840791d0d5c4dce53074c9c38d0b9564fdcbd' ;
        this.showUserInfo = document.getElementById('showUserInfo');
        this.userDetails = document.getElementById("user-details");
        this.followers = document.getElementById('followers-details');
    }

    // getUser method
   async getUser(user){
       const dv = 'shakil-babu'
        const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const res = await fetch(url);
        const userProfile = await res.json()

        return (
            userProfile
        )
    }

    // displayData
    displayUser (data){
        this.showUserInfo.innerHTML =`
        <div class="user-head-info-grid">
        <div class="head-info-box">
            <a href=""><i class='bx bx-repost'></i></a>
            <h3>${data.public_repos}</h3>
            <p>Repository</p>
        </div>
        <div class="head-info-box">
            <a href=""><i class='bx bx-bullseye'></i></a>
            <h3>${data.following}</h3>
            <p>Followers</p>
        </div>
        <div class="head-info-box">
            <a href=""><i class='bx bx-meteor'></i></a>
            <h3>${data.following}</h3>
            <p>Following</p>
        </div>
        <div class="head-info-box">
            <a href=""><i class='bx bx-envelope-open'></i></a>
            <h3>${data.public_gists}</h3>
            <p>Gist</p>
        </div>
    </div>
        `

        this.userDetails.innerHTML =`
        <div class="user-personal-details">
        <p style='text-align:left'>USER INFO:</p>
        <div class="avatar-info">
        <div class="img"><img src="${data.avatar_url}" alt=""></div>
        <div class='follow-user'>
            <div class='names'>
                <h4>Login Name: ${data.login}</h4>
                <h4>Nick Name: ${data.name}</h4>
            </div>
            <a target='_blank' href='https://github.com/${data.login}'>Follow</a>
        </div>

        <p>Bio: ${data.bio}</p>
       <h4 style='color: #9da5ab;text-align:left; margin-top:10px ;'><span><i style='font-size:20px; color:orange; ' class='bx bx-target-lock' ></i></span> Location: ${data.location}</h4>
   </div>
        </div>
        `
    }


    // getFollowers
    async getFollowers(url){
        const res = await fetch(url);
        const followers = await res.json();
        return{
            followers
        }
    }


    // display followers
    displayFollowers(follower){

        follower.followers.map(item => {
            this.followers.innerHTML += `
            <div class='followers-info-here'>
                <img src='${item.avatar_url}'/>
                <div className="follower-info">
                 <h4>${item.login}</h4>
                 <p>${item.html_url}</p>
                </div>
            </div>

        `
        })
    }

        // clear user
        clearUser(){
            this.showUserInfo.innerHTML = '';
            this.userDetails.innerHTML = '';
            this.followers.innerHTML =''
        }


}
