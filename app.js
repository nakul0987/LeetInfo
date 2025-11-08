document.addEventListener('DOMContentLoaded',()=>{

    const inputArea=document.querySelector('#inputBox');
    const searchButton=document.querySelector('.searchBtn');

    const rankRate=document.querySelector('.rankRate');

    const totalSolved=document.querySelector('.totalSolved');
    const totalQues=document.querySelector('.totalQues');

    const eSolved=document.querySelector('.easySolved');
    const totalE=document.querySelector('.totalEasy');

    const mSolved=document.querySelector('.mediumSolved');
    const totalM=document.querySelector('.totalMedium');

    const hSolved=document.querySelector('.hardSolved');
    const totalH=document.querySelector('.totalHard');


    async function getInfo() {
            let username=inputArea.value;

            const leetCodeUrl=`https://leetcode-stats-api.vercel.app/${username}`;
            const res=await fetch(leetCodeUrl);
            const data=await res.json();
            console.log(data);

            rankRate.innerHTML=data.ranking;

            totalSolved.innerHTML=data.totalSolved;
            totalQues.innerHTML=data.totalQuestions;

            eSolved.innerHTML=data.easySolved;
            totalE.innerHTML=data.totalEasy;

            mSolved.innerHTML=data.mediumSolved;
            totalM.innerHTML=data.totalMedium;


            hSolved.innerHTML=data.hardSolved;
            totalH.innerHTML=data.totalHard;

    }


    searchButton.addEventListener('click',()=>{
        // const leetCodeUrl=`https://leetcode-stats-api.vercel.app/${username}`;
        // console.log(username);

        // async function getInfo() {

        //     const res=await fetch(leetCodeUrl);
        //     const data=await res.json();
        //     console.log(data);

        //     rankRate.innerHTML=data.ranking;

        //     totalSolved.innerHTML=data.totalSolved;
        //     totalQues.innerHTML=data.totalQuestions;

        //     eSolved.innerHTML=data.easySolved;
        //     totalE.innerHTML=data.totalEasy;

        //     mSolved.innerHTML=data.mediumSolved;
        //     totalM.innerHTML=data.totalMedium;


        //     hSolved.innerHTML=data.hardSolved;
        //     totalH.innerHTML=data.totalHard;

        // }

        if(inputArea.value.trim()===''){
            alert('Fill the username');
        }
        else{
            getInfo();
        }

    });

});
