const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const btns = document.querySelectorAll(".btns");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const clearAll = document.querySelector(".clear-all");

btns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        let content = btn.getAttribute("data-number");
        result2.textContent +=content;
    })
})

clearAll.addEventListener("click", ()=>{
    result1.textContent = '';
    result2.textContent = '';
})

clear.addEventListener("click", ()=>{
    let string = result2.textContent;
    let array = string.split('');
    array.pop();
    result2.textContent = array.join(''); 
})

equal.addEventListener("click", ()=>{
    let exp = result2.textContent;
    result2.textContent = eval(exp);
    result1.textContent = eval(exp);
})