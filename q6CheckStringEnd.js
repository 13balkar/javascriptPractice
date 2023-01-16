function checkStringEnd(string){
  let length=string.length;
  return length<6 ? (string+" does not end with Script") : (string.substring(length-6)==="Script" ? (string+" ends with Script"):(string+" does not end with Script"));
}
const checkStringEnding= string=>{
  let length=string.length;
  return length<6 ? (string+" does not end with Script") : (string.substring(length-6)==="Script" ? (string+" ends with Script"):(string+" does not end with Script"));
}

console.log(checkStringEnd("javaScript"));
console.log(checkStringEnding("jssripht"));



module.exports={checkStringEnd,checkStringEnding};