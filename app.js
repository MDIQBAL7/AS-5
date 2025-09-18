// hard icon functionality start 

let getIcons = document.getElementsByClassName('hard-icon');

for(let i = 0; i < getIcons.length; i++){
    getIcons[i].addEventListener('click', function(){
       let heart =  document.getElementById('heart');
       let toNum = parseInt(heart.innerText);
       heart.innerText = toNum + 1;
  

    })
}
// hard icon functionality end