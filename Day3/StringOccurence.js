let sentc = "you How are you"
let word = "you"
let strarr = sentc.split(" ")
let count =0
console.log(strarr)
for(let i=0;i<=sentc.length;i++){
    let find = strarr[i]
    if(find==word){
        count++    
    }
}
console.log("The word has occurend "+count+" times" )
