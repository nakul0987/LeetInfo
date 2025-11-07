document.addEventListener('DOMContentLoaded',()=>{

    const inputArea=document.querySelector('#inputBox');
    const searchButton=document.querySelector('.searchBtn');
    const eSolved=document.querySelector('.easySolved');
    const mSolved=document.querySelector('.mediumSolved');
    const hSolved=document.querySelector('.hardSolved');


    searchButton.addEventListener('click',()=>{
        let username=inputArea.value;
        const leetCodeUrl=`https://leetcode-stats-api.herokuapp.com/${username}`;
        // console.log(username);

        async function getInfo() {
            const res=await fetch(leetCodeUrl);
            const data=await res.json();
            console.log(data);

            eSolved.innerHTML=data.easySolved;
            mSolved.innerHTML=data.mediumSolved;
            hSolved.innerHTML=data.hardSolved;

        }

        if(username===""){
            alert("Invalid Username");
        }
        else{
            getInfo();
        }



    });


});
