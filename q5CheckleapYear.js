function checkLeap(year){
    return year%400===0 ? (true) : (year%100===0 ? false: (year%4===0 ? true :false));
}
 const checkLeaps= year=>{
    return year%400===0 ? (true) : (year%100===0 ? false: (year%4===0 ? true :false));
 };
console.log(checkLeap(2001));
console.log(checkLeaps(2000));


module.exports= {checkLeap,checkLeaps};