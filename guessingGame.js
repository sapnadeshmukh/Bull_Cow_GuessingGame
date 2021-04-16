// function to get list of secretnumbers
function listOfNumber(){
    const list1=new Set();
    var i=1;
    while (true){
        if (i>0){
            n=Math.floor((Math.random() * 9) + 1)
            list1.add(n)
        }
        if ((list1.size) == 5){
            break;
        }
        
    }
    return(list1);
}
secretNumlist=listOfNumber();
// console.log(secretNumlist);
var NewList=(Array.from(secretNumlist));
// console.log(NewList)



// To get position 
function findindex(a){
   
        const indexofNum = NewList.indexOf(a)
        return(indexofNum);

}
// To campare to arrays
function compareArrays(arr1,arr2){
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)
    if (result){
        return("Congratulation ","You are the winner!!!!!")
    }else{
        return("Opps You are the looser!!!!");

        
    }
}

function main(){
    var readlinesync = require("readline-sync");
    var name = readlinesync.question("Enter Player Name:----");
    var namofplayer=(name.toUpperCase());
    console.log("WELCOME,",namofplayer,"TO THIS GUESSING GAME!!!!!!!!!!!")
    // console.log("Our number list is:----",NewList)
    var list2=[];
    var list3=[];
    var i=0;
    var chances=10;
    while(i<10){
        sync = require("readline-sync");
        var Number = parseInt(readlinesync.question("Enter Number:----"))
        var Position = parseInt(readlinesync.question("Enter Position:----"))
        if(!(NewList.includes(Number))){
            console.log("Number not exists")

        }
        else if ( NewList.includes(Number) ){
            var indexofnum=findindex(Number)
            if (NewList.includes(Number) && Position==indexofnum){
                console.log("Bull")
                list2.splice(indexofnum, 0, Number);
                if (list2.length==5){
                    break;
                }
            
            }
        }if (NewList.includes(Number) && Position !=indexofnum){
            console.log("Cow");
            list3.push(Number)
            console.log("These are correct numbers you can reuse it",list3);
        }
            
        
        i=i+1;
        chances=chances-1;
        console.log("Chances:----",chances)
    } 
    console.log("orignal:----",NewList);
    console.log("user guess:---",list2) ;
    console.log("correct number but wrong position;---",list3);
    console.log(compareArrays(list2,NewList));

  
}
main();

// To ask player to play again or not..
while (true){
    var readlinesync = require("readline-sync");
    sync = require("readline-sync");
    var playagain= readlinesync.question("Do you want to play again? :--");
    if (playagain=="Yes"){
        main()
    }else{
        console.log("You have quit the game!!")
        break;

    }


}







