var container = document.getElementById("container")
var ChooseFile = document.getElementById("file")

function getLike(ele) {

    if (ele.classList.contains("like-btn")) {
        ele.childNodes[1].src = './assets/heart.png'
        ele.classList.remove("like-btn")
        ele.classList.add("liked")
        likeCount.textContent++;

    }
    else {
        ele.childNodes[1].src = './assets/emptyheart.png'
        ele.classList.remove("liked")
        ele.classList.add("like-btn")
        likeCount.textContent--;
    }
}



//CREATE POST LOGIC

ChooseFile.addEventListener("change", newPost)

function newPost(e) {
    console.log("yes")
    var uploadedImg = ""
    var link = ""
    const reader = new FileReader()

    reader.addEventListener("load", () => {
        uploadedImg = reader.result
        link = `url(${uploadedImg})`
        //console.log(link)
    })
    reader.readAsDataURL(this.files[0])
    var postEl = `<div class="post" >
    <div class="post-header">
<img class="post-dp" src="./assets/ig dp1.jpg" >
<span class="username"><h4>saachi_dev</h4></span>
<i class="fa-solid fa-ellipsis-vertical three-dot"></i>
</div>
<div class="post-img-div">
<img class="post-image" src=" ${link} " >
</div>
<div class="post-footer">
<button class="like-btn" onclick="getLike(this)"> <img class="like-img" src="./assets/emptyheart.png" ></button>
<button class="comment-btn"><img src="./assets/comment.png" ></button>
<button class="share-btn"><img src="./assets/share.png"></button>
<button class="save-btn"><img src="./assets/save.png"></button>
</div>
<h5> <span class="like-count">125</span> likes</h5>
</div>`
console.log("yes2")
container.innerHTML = container.innerHTML + postEl
document.getElementById("form").reset()
}

