        let computerchoice = "";
        let computerscore = 0;
        let humanscore = 0;
        function getcomputerchoice (){
            let i = Math.random();
            if (i<=0.3333){
                computerchoice = "rock";
            }
            else if (i>0.3333 && i<=0.6666){
                computerchoice = "paper";
            }
            else {
                computerchoice ="scissors";
            }
        }
       function playround (Hmchoice,Comchoice){
        if(Hmchoice==="rock" && Comchoice=== "scissors" || Hmchoice==="paper" && Comchoice=== "rock"  || Hmchoice==="scissors" && Comchoice=== "paper"){
            displayScreen.innerHTML =Hmchoice+" beats "+Comchoice;
            humanscore++;
        }
        else if(Hmchoice===Comchoice){
            displayScreen.innerHTML ="tie!!";
        }
        else if(Comchoice==="rock" && Hmchoice=== "scissors" || Comchoice==="paper" && Hmchoice=== "rock"  || Comchoice==="scissors" && Hmchoice=== "paper"){
            displayScreen.innerHTML =Comchoice+" beats "+Hmchoice;
            computerscore++;
        }
       }
       const btns = document.querySelectorAll(".btn");
       
       btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let humanchoice = e.target.innerText;
            getcomputerchoice();
            theGame(humanchoice,computerchoice);
            hmScore.innerText ="HumanScore:"+humanscore;
            comScore.innerText="ComputerScore:"+computerscore;

        })})
        const displayScreen= document.querySelector(".display");
        const hmScore = document.querySelector(".hmscore");
        const comScore = document.querySelector(".comscore");
        hmScore.innerText = "HumanScore:"+0;
        comScore.innerText = "ComputerScore:"+0;
        function theGame(Hmchoice,Comchoice){
            playround(Hmchoice,Comchoice);
            if (computerscore==5){
            displayScreen.innerHTML="computer won";
            computerscore=0;
            humanscore=0;
           }
            else if (humanscore==5){
            displayScreen.innerHTML="human won";
            computerscore=0;
            humanscore=0;
           }
    }
        

