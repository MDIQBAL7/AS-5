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

// call functionality start 
let getCallIcon = document.getElementsByClassName('call-icon');
for(let i = 0; i < getCallIcon.length; i++){
    getCallIcon[i].addEventListener('click', function(){
        let parents = getCallIcon[i].parentNode.parentNode;
        let getChild1 = parents.children[1];
        let getChild2 = getChild1.children[1].innerText;
        let getChild3 = getChild1.children[2].innerText;
        // get coin tag 
        let coin =  document.getElementById('coin');
        let coinToNum = parseInt(coin.innerText);
       if(coinToNum < 20){
            alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে");
            return;
        }else{
            alert(`${getChild2} ${getChild3}`);  
            coin.innerText = coinToNum - 20;
        }
            
            // the code was execute when alert done 
        const callInfo = {
            title : getChild2,
            number : getChild3,
            date : new Date().toLocaleTimeString()
        };
        
       
          
        // create an element 
        let historyContainer = document.getElementById('history-container'); 
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="history-items flex items-center justify-between">
                <div>
                   <h1 class="font-bold">${callInfo.title}</h1>
                <p class="text-gray-500">${callInfo.number}</p>
                </div>
                <p class="text-sm">${callInfo.date}</p>
            </div>
        `;
        historyContainer.appendChild(div);
    })
} 
// call functionality end
