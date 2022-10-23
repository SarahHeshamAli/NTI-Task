



// var month =prompt("enter month number")


// switch (month) {
//     case "1" : console.log ("january") 
//     break
//     case "2" : console.log ("Feburary")
//     break
//     case "3" : console.log ("March")
//     break
//     case "4" :console.log ("April")
//     break
//     case "5" : console.log ("May")
//     break
//     case "" :

//     case null

//     default : console.log ("enter a valid month")
// }

function looping(startNum , endNum , contNum ,breakNum){
console.log(contNum)

    // startNum=prompt("enter start num")
    // endNum=prompt("enter end num")
    // contNum=prompt("enter cont num")
    // breakNum=prompt("enter break num")
    if (startNum==undefined || endNum== undefined || contNum==undefined || breakNum==undefined ) {
      
       console.log("enter a valid number")
            
       }

    
     else{

        for ( var n =startNum ; n<=endNum ; n++  ) {
    
               if (n==contNum) continue
                 else if (n==breakNum) break
                 else console.log (n)
        }
            
     } 
    



}

looping(1 , 10 , 5 , 8)
    looping(1 , 10)
    

