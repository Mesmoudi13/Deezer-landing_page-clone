//change the toggle icon when clicking

let burger = document.querySelector('i.fa-bars');
let close = document.querySelector('i.fa-times');

changeIcon = () =>{
    burger.classList.toggle('d-none')
    close.classList.toggle('d-none')

}

//Show more in the Footer

let links = document.getElementsByClassName('footer__links')
let plus = document.getElementsByClassName("fa-plus")
let minus = document.getElementsByClassName("fa-minus")


showMore = (e,n,i) => {
    do {
        links[i].classList.remove("d-none");
        links[i].classList.add("d-block");
        i++;
    }
    while (links[i].classList.contains("not"));
    links[i].classList.remove("d-none");
    links[i].classList.add("d-block");
    e.classList.add("d-none");
    e.classList.remove("d-block");
    n.classList.remove("d-none");
    n.classList.add("d-block");
}

//Show less in the footer

showLess = (e,n,i) =>{
    do {
        links[i].classList.remove("d-block");
        links[i].classList.add("d-none");
        i++;
    }
    while (links[i].classList.contains("not"));
    links[i].classList.remove("d-block");
    links[i].classList.add("d-none");
    e.classList.add("d-block");
    e.classList.remove("d-none");
    n.classList.remove("d-block");
    n.classList.add("d-none");
}






