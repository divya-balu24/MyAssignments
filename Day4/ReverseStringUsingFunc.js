function reverseStr(word){
    console.log("String before reverse is :"+word)
    let charabc = word.split("")    
    console.log(charabc)
    let def = ""
    for(i=word.length-1;i>=0;i--){
        def = def.concat(charabc[i])        
    }
    
    console.log("String after reverse is :"+def)
    if(word==def){
      console.log("It is a palindrome")
    }
    else{
        console.log("It is not a palindrome")
    }
}
reverseStr("madam")
reverseStr("computer")
reverseStr("level")
