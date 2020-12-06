/* turn the search bar to white color */

let searchBar = document.querySelector('.search')

const search = () =>{
    searchBar.value = "";
    searchBar.style.background = "white";
    searchBar.style.color = "black";
    searchBar.style.fontWeight = "300";
}


/*return to normal when click outside*/

document.addEventListener('click', (event)=>{
    let isClickInside = searchBar.contains(event.target);
    
    if (!isClickInside){
        searchBar.value = "Search Github";
        searchBar.style.background = "#24292e";
        searchBar.style.color = "white";
        searchBar.style.fontWeight = "270";
    }
});

/*side nav*/
let burger = document.querySelector('.burger')
let menu = document.querySelector('.left__items')
let others = document.querySelector('.right__items')
let close = document.querySelector('.close__btn')

burger.addEventListener('click', ()=>{
    menu.classList.add('sideNav-active')
    others.classList.add('sideNav-active')
})

close.addEventListener('click', ()=>{
    menu.classList.remove('sideNav-active')
    others.classList.remove('sideNav-active')
})