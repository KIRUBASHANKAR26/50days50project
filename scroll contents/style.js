const boxes = document.querySelectorAll(".box");


window.addEventListener('scroll', checkBoxes);

//checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);

    boxes.forEach((box,idx) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop , "index:", idx );
        if(boxTop < triggerBottom) {
            console.log("if:", boxTop);
            box.classList.add('show');
        }
        else{
            console.log("else:", boxTop);
            box.classList.remove('show');
        }
    })
}