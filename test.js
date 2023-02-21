

// let testSet = [ '1. ▶︎[incomplete]⛔️ ▶︎sdklj◀︎',
// '2. ▶︎[incomplete]⛔️ ▶︎dsklfj◀︎',
// '3. ▶︎[incomplete]⛔️ ▶︎sladkfjg◀︎'] 

// for(const item of testSet){
//     console.log(item);
// }
// console.log("=============================================")
// let pretendPrompt =3
// let num = testSet.at(pretendPrompt-1).slice(0,3)//1.
// let stateCom = "▶︎Complete]✅ "
// let item = testSet.at(pretendPrompt-1).slice(20);//▶︎▶︎sdklj◀︎

// let newStr ='';
// newStr += `${num}${stateCom}${item}`
// testSet.splice(pretendPrompt-1,1,newStr)
// console.log(testSet)
// //console.log(newStr);

//function deleteItem(){

const todoList = ['1juan','2neftaliy','3torres','4cortes'];

    function meaow(){
    let itemToDelete = 2;
    let newList = [];
    if(isNaN(itemToDelete)){
      myApp();
    }else if(itemToDelete > todoList.length){
      myApp();
    }else if(itemToDelete === 0){
      myApp();
    }else if(!isNaN(itemToDelete)){

      let index = itemToDelete-1
      //console.log(index);

      let itemDel = todoList.splice(index, 1);
      //console.log(itemDel);

      //console.log(todoList);
      newList.push(todoList)
    }
    return console.log(newList);
}
meaow();  
    
    
