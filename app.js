const prompt = require("prompt-sync")({ sigint: true });

let todoList = [];

function createListItem() {
  let addItem = prompt("What is this to-do item called? ▶︎");
  if (addItem.length === 0) {
    myApp();
  } else if (addItem.length > 0) {
    let stateNotCom = "[incomplete]⛔️ ▶︎";
    let itemId = todoList.length + 1;
    todoList.push(`${itemId}. ▶︎${stateNotCom}${addItem}◀︎`);
    myApp();
  }
}

function completeItem() {
  let mark = Number(prompt("Which to-do item would you like to mark complete? ▶︎"));
  if (isNaN(mark)) {
    myApp();
  } else if (mark > todoList.length) {
    myApp();
  } else if (mark === 0) {
    myApp();
  } else if (!isNaN(mark)) {

    
    let num = todoList.at(mark-1).slice(0,3)//1.
    let stateCom = "▶︎[Complete]  ✅ "
    let item = todoList.at(mark-1).slice(20);//▶︎▶︎sdklj◀︎
    let newStr ='';
    newStr += `${num}${stateCom}${item}`
    todoList.splice(mark-1,1,newStr)
    
    myApp();
  }
}

function exit(){
    let exitInput = prompt("are you sure you want to EXIT application?\n[Y] for Yes\n[N] for NO\n  ▶︎");
    let input = exitInput.toLowerCase();
      if (input !== "y") {
       myApp();
      } else if(input === "y"){
        return console.log("Thankyou for using my list app GOOD BYE!!!!!!");
      }
}

function myApp() {
  console.log("Welcome to the To-Do List Manager Application!\n");
  console.log("==============================================\n");

  if (todoList.length === 0) {
    console.log("Your to-do list is empty.\n");
  } else {
    console.log(`You have ${todoList.length} to-do item(s).`);
    console.log("==============================================\n");
    //console.log(todoList)
    for (const items of todoList) {
      console.log(items);
    }
    console.log("==============================================\n");
  }

  let headerPrompt = " ~ Select an action ~\n";
  console.log(headerPrompt);

  console.log(
    "[1] Create a to-do item\n[2] Complete a to-do item\n[3] Exit Application:"
  );

  let userChoice = Number(prompt("▶︎"));

  switch (userChoice) {
    case 1:
      createListItem();
      break;
    case 2:
      completeItem();
      break;
    case 3:
      exit();
      break;
    default:
      myApp();
      break;
  }
}

myApp();
