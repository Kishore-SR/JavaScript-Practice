let itemList = document.querySelector(".list");
let i=1;
let alert = document.querySelector('.alert-msg');

//Function to reset the list to item 1
function resetList(){
    alert.innerHTML="";
    itemList.innerHTML="";
    i=1;
}

function addItem() {
  let newItem = document.createElement("li");
  {
    if(i<=10){
    newItem.innerHTML = `Item ${i++}`;
    console.log(i);
    itemList.appendChild(newItem);
    }
    else{
        alert.innerHTML="<b>You can only add 10 Items</b> <br>";

        let resetBtn = document.createElement("button");
        resetBtn.innerHTML="RESET";
        resetBtn.onclick= resetList;

        alert.appendChild(resetBtn);
    }
  }
}
