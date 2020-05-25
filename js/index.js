let leftMenu  = document.querySelector('.left-menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (event) => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click',(event) =>{
    if(!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});


leftMenu.addEventListener('click',(event) => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if(dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});

<<<<<<< HEAD
// homework
=======

// test
>>>>>>> second

mouseOverListener = (e) =>{
    const img = e.target.parentElement.querySelector('.tv-card__img');
    const oldimg = img.attributes['src'].value
    img.setAttribute('src',img.attributes['data-backdrop'].value);
    img.setAttribute('data-backdrop',oldimg);
}

cards = document.getElementsByClassName('tv-card');
for(card of cards){
    card.addEventListener('mouseover',mouseOverListener);
    card.addEventListener('mouseout',mouseOverListener);
}