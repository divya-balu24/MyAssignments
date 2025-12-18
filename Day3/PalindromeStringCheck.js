let val = "hello"
let chars = val.split("")
let revst = ""
let strlen = val.length
console.log(val.length)
for(let i=strlen-1;i>=0;i--){
    revst = revst + chars[i]
}
console.log(revst)
let boolean
if (revst==val){
    boolean = true
}
else{
    boolean = false
}
switch(boolean){
    case true:
        console.log("Yeah! Its a palindrome")
        break;
    
    case false:
        console.log("Ohho ! Not a palindrome")
        break;
    default:
        console.log("None")
        break;
}
