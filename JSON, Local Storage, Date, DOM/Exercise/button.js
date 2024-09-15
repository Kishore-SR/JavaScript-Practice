let btn = document.querySelector('.btns');
let click= parseInt(localStorage.getItem('click')) || 1;

function updateBtn(){
    btn.innerHTML=`<b>MAGIC BUTTON</b> (Click: ${click})`
    
    if(click % 2 === 0){
        btn.style.backgroundColor='rgb(30, 226, 56)';
    }
    else{
        btn.style.backgroundColor='yellow';
    }
    
    click++;
    localStorage.setItem('click',click);

}
// localStorage.clear();

updateBtn();