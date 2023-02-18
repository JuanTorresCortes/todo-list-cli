

let testSet = [ '1. ▶︎[incomplete]⛔️ ▶︎sdklj◀︎',
'2. ▶︎[incomplete]⛔️ ▶︎dsklfj◀︎',
'3. ▶︎[incomplete]⛔️ ▶︎sladkfjg◀︎'] 

for(const item of testSet){
    console.log(item);
}
console.log("=============================================")
let pretendPrompt =3
let num = testSet.at(pretendPrompt-1).slice(0,3)//1.
let stateCom = "▶︎Complete]✅ "
let item = testSet.at(pretendPrompt-1).slice(20);//▶︎▶︎sdklj◀︎

let newStr ='';
newStr += `${num}${stateCom}${item}`
testSet.splice(pretendPrompt-1,1,newStr)
console.log(testSet)
//console.log(newStr);

