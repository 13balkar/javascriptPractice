
function countVowel(string){
  let count=0;
  [...string].forEach(character=>{
    switch(character){
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
    }
  });
  return string+" consists of "+count+" characters";
}
 const countVowels= string=>{
    let count=0;
  [...string].forEach(character=>{
    switch(character){
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
      case 'a':{
        count+=1;
        break;
      }
    }
  });
  return string+" consists of "+count+" characters";
 }
console.log(countVowel("codeacademy"));
console.log(count("codeacademy"));


module.exports={countVowel,countVowels};