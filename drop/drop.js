const img = document.querySelector(".img");
const boxs = document.querySelectorAll(".box");

//Event Listener
img.addEventListener("dragstart", startDrag);
img.addEventListener("dragend", endDrag);

for(const box of boxs){
    box.addEventListener("dragover", overDrag);
    box.addEventListener("dragenter", enterDrag);
    box.addEventListener("dragleave", leaveDrag);
    box.addEventListener("drop", dragDrop);

}

function startDrag(){
    this.classList.add("hold");
    setTimeout(() =>(this.className = "invisible"), 0);
}

function endDrag(){
    this.className = "img";
}

function overDrag(e){
    e.preventDefault();
}

function enterDrag(e){
    e.preventDefault();
    this.classList.add("hovered");
}

function leaveDrag(){
    this.className = "box";
}

function dragDrop(){
    this.className = "box";
    this.append(img);
}
