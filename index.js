// QUERY SELECTORS

var likeBtn = document.querySelector(".like-btn");
var createPost = document.querySelector(".create-post")
var postFooter = document.querySelector(".post-footer")
let likeCount = document.querySelector(".like-count")
var ChooseFile = document.querySelector(".choose-file")
var container = document.querySelector(".container")
// EVENT LISTENERS

likeBtn.addEventListener("click", getLike)

//FUNCTIONS


//LIKE LOGIC
function getLike(e) {
    var img = document.querySelector(".like-img")
    if (likeBtn.classList.contains("like-btn")) {
        img.src = './assets/heart.png'
        likeBtn.classList.remove("like-btn")
        likeBtn.classList.add("liked")
        likeCount.textContent++;

    }
    else {
        img.src = './assets/emptyheart.png'
        likeBtn.classList.remove("liked")
        likeBtn.classList.add("like-btn")
        likeCount.textContent--;
    }
}



//CREATE POST LOGIC
var uploadedImg = ""
var link=""

ChooseFile.addEventListener("change", function() {
    const reader = new FileReader()
    
    reader.addEventListener("load", () => {
        uploadedImg = reader.result
        link=`url(${uploadedImg})`
        console.log(link)
    })
    reader.readAsDataURL(this.files[0])
    var postEl=`<div class="post">
    <div class="post-header">
<img class="post-dp" src="./assets/ig dp1.jpg" >
<span class="username"><h4>saachi_dev</h4></span>
<i class="fa-solid fa-ellipsis-vertical three-dot"></i>
</div>
<div class="post-img-div">
<img class="post-image" src=" ${link} " >
</div>
<div class="post-footer">
<button class="like-btn"> <img class="like-img" src="./assets/emptyheart.png" ></button>
<button class="comment-btn"><img src="./assets/comment.png" ></button>
<button class="share-btn"><img src="./assets/share.png"></button>
<button class="save-btn"><img src="./assets/save.png"></button>
</div>
<h5> <span class="like-count">125</span> likes</h5>
</div>`
container.innerHTML=container.innerHTML+postEl


})






