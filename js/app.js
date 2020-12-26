//change the toggle icon when clicking

let burger = document.querySelector('i.fa-bars');
let close = document.querySelector('i.fa-times');

changeIcon = () =>{
    burger.classList.toggle('d-none')
    close.classList.toggle('d-none')

}

//Show more function in the Footer
let links = document.getElementsByClassName('footer__links')
let plus = document.getElementsByClassName('fa-plus')
let minus = document.getElementsByClassName('fa-minus')
plus.addEventListener("click", showMore())

showMore = () =>{
    links.style.display = block;
    plus.classList.remove('d-block');
    plus.classList.add('d-none')
    minus.classList.add('d-block')
    minus.classList.remove('d-none')

}
