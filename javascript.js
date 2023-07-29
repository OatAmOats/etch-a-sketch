const container = document.querySelector(".container");


let slider = document.getElementById("myRange");
slider.setAttribute('value', '16')

const container_size = 760; 
let side_length = 16;

grid_clear = function(){
    container.textContent= '';
}
change_color = function(){
    box.classList.toggle('.empty');
    box.classList.toggle('.filled');
}
grid_create = function(val){
    

    let side_length = val;
    for(let i = 1; i <= side_length; i++){
        for(let i = 1; i <= side_length; i++){
            let div = document.createElement("div");
            
            div.classList.add('box_white');
            div.style.height = `${(container_size/side_length)-2}px`;
            div.style.width = `${(container_size/side_length)-2}px`;
            
            container.appendChild(div);

            
        }
    }
    boxes = container.childNodes;
    console.log(boxes);

    boxes.forEach(box =>
        box.addEventListener('click', function(e){
            box.classList.toggle('box_black');
            box.classList.toggle('box_white');
            console.log('hmmm');
        }))
    
}

slider.addEventListener('input', function(){
    let val = slider.value;
    grid_clear();
    grid_create(val);
})


grid_create(16);







