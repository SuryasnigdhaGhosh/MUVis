const arrows= document.querySelectorAll(".arrow");
const movieLists= document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber=movieLists[i].querySelectorAll("img").length;
    let clickcounter=0;
    arrow.addEventListener("click",()=>{
        clickcounter++;
        if (itemNumber>=(4+clickcounter)) {
        movieLists[i].style.transform = `translateX(${
            (movieLists[i].computedStyleMap().get("transform")[0].x.value-300)}px)`}
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickcounter=0;
        }
    })
})

const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.sidebar,.sidebar-items,.navbar-container,.menu-list,.menu-list-item.active,.movie-list-title,.arrow,.toggle,.dropbtn,#search-button,#search,.featured-content");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("darkmode")
    })
    ball.classList.toggle("darkmode")
})
