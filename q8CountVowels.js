
function countVowel(string){
    let count=0;
    [...string].forEach(character=>{
        switch(character){
            case 'a':
                count+=1;
                break;
            case 'e':
                count+=1;
                break;
            case 'i':
                count+=1;
                break;
            case 'o':
                count+=1;
                break;
            case 'u':
                count+=1;
        }
    });
    return string+" consists of "+count+" characters";
}
 const count= string=>{
    let count=0;
    [...string].forEach(character=>{
        switch(character){
            case 'a':
                count+=1;
                break;
            case 'e':
                count+=1;
                break;
            case 'i':
                count+=1;
                break;
            case 'o':
                count+=1;
                break;
            case 'u':
                count+=1;
        }
    });
    return string+" consists of "+count+" characters";
 }
console.log(countVowel("codeacademy"));
console.log(count("codeacademy"));
