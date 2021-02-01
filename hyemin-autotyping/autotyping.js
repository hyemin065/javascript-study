//텍스트
//시간초
//입력 삭제


let words = document.querySelector(".words");
let wordsData = words.getAttribute("data-word");
let wait = words.getAttribute("wait");
let fullTxt = "";
let index = 0;
let isDeleting = false; //압력중

function init(){
    
    const wordArray = JSON.parse(wordsData); 
    const current = index % wordArray.length;

    if(isDeleting){
        fullTxt = wordArray[current].substring(0,fullTxt.length - 1);
    }else{
        fullTxt = wordArray[current].substring(0,fullTxt.length + 1);
    }
    
    words.innerHTML = `<span> ${fullTxt}</span>`;

     if(fullTxt === wordArray[current] && !isDeleting){
        isDeleting = true;  
     }else if(fullTxt === "" && isDeleting){
         isDeleting = false;
         index++
     }
     
    
    setTimeout(init, 300);

}


document.addEventListener("DOMContentLoaded", init);

