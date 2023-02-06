// QUERY SELECTORS

var likeBtn= document.querySelector(".like-btn");
var createPost = document.querySelector(".create-post")
var postFooter = document.querySelector(".post-footer")
let likeCount = document.querySelector("like-count")
// EVENT LISTENERS

likeBtn.addEventListener("click", getLike)

//FUNCTIONS

function getLike(e)
{
    var img=document.querySelector(".like-img")
if (likeBtn.classList.contains("like-btn")){
    img.src='./assets/heart.png'
    likeBtn.classList.remove("like-btn")
    likeBtn.classList.add("liked")
   likeCount.textContent++;
    
    
    
}
else{
    img.src='./assets/emptyheart.png'
    likeBtn.classList.remove("liked")
    likeBtn.classList.add("like-btn")
    likeCount.textContent--;
}


}