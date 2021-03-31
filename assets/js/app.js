// from structure.js
const data = new Structure ;

// access all elements
const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-btn');

searchField.addEventListener('keyup', () => {
    const searchValue = searchField.value;
    if(searchValue !== ''){
        data.getUser(searchValue)
        .then(userInfo=>{
            data.displayUser(userInfo)
            console.log(userInfo)
            // from structure class
            data.getFollowers(userInfo.followers_url)
            .then(userFollowers => {
                data.displayFollowers(userFollowers)
            })
        });
    }else{
        data.clearUser();
    }

})

