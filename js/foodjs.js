//toggle 
const menutoggle = document.querySelector('.toggle');
const nevigation = document.querySelector('.nevigation');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    nevigation.classList.toggle('active')
}

const slides = document.querySelectorAll('.slides');
const preview = document.querySelector('.preview');
const next = document.querySelector('.next');

i = 0;

function Activeslide(n)
{
    for(slider of slides)
    slider.classList.remove('active');
    slides[n].classList.add('active');
}

// function for next button
next.addEventListener('click',function(){
    if(i == slides.length - 1){
        i = 0;
            Activeslide(i);
    }
    else
    {
        i++;
        Activeslide(i);
    }
})

// function for previre button
preview.addEventListener('click',function(){
    if(i == 0){
        i = slides.length - 1;
            Activeslide(i);
    }
    else
    {
        i--; 
        Activeslide(i);
    }
})
