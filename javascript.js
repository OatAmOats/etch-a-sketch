const container = document.querySelector(".container");

let slider_num = 16;
let slider = document.getElementById("myRange");
slider.setAttribute('value', '16')


const container_size = 760; 
var side_length = 16;

let mode = "black";

let butBlack = document.querySelector('.bla');
let butRandom = document.querySelector('.ran');
let butEraser = document.querySelector('.era');

butBlack.addEventListener('click', function(){
    mode = "black";
})

butRandom.addEventListener('click', function(){
    mode = "random";
})

butEraser.addEventListener('click', function(){
    mode = "eraser";
})

grid_clear = function(){
    container.textContent= '';
}
change_color = function(){
    box.classList.toggle('.empty');
    box.classList.toggle('.filled');
}

color_random = function(box){
    let r = Math.random()*256;
    let g = Math.random()*256;
    let b = Math.random()*256;
    
    let col = `rgb(${r},${g},${b})`;
    box.setAttribute('style', `background-color: ${col}; `);
    box.style.height = `${(container_size/side_length)-2}px`;
    box.style.width = `${(container_size/side_length)-2}px`
}

color_black = function(box){
    box.setAttribute('style', `background-color: black; `);
    box.style.height = `${(container_size/side_length)-2}px`;
    box.style.width = `${(container_size/side_length)-2}px`
}


// color_darken = function(box){
//     box.setAttribute('style', `background-color: ${col}; `);
//     box.style.height = `${(container_size/side_length)-2}px`;
//     box.style.width = `${(container_size/side_length)-2}px`
// }

eraser = function(box){
    box.setAttribute('style', `background-color: white; `);
    box.style.height = `${(container_size/side_length)-2}px`;
    box.style.width = `${(container_size/side_length)-2}px`

}

slider_set = function(value){
    sli = document.querySelector('.slida');
    sli.textContent = (`${value} X ${value}`);
}
grid_create = function(val){
    

    side_length = val;
    for(let i = 1; i <= side_length; i++){
        for(let i = 1; i <= side_length; i++){
            let div = document.createElement("div");
            
            // div.classList.add('box_white');
            div.style.height = `${(container_size/side_length)-2}px`;
            div.style.width = `${(container_size/side_length)-2}px`;
            
            container.appendChild(div);

            
        }
    }
    boxes = container.childNodes;

    boxes.forEach(box =>
        box.addEventListener('mouseenter', function(e){
            // box.classList.toggle('box_black');
            // box.classList.toggle('box_white');
            console.log('hmmm');
            if(mode=='black'){
                color_black(box);
            }
            else if(mode=='random'){
                color_random(box);
            }
            else if(mode == 'eraser'){
                eraser(box);
            }
            
        }))
    
}


slider.addEventListener('input', function(){
    let val = slider.value;
    grid_clear();
    grid_create(val);
    slider_set(val);
})


grid_create(16);







