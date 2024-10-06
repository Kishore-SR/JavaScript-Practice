let cursorEle = document.querySelector(".cursor");
let body = document.querySelector(".main");
let img = document.querySelector(".myImg");

// To Move the cursor image with the 'mouse pointer'
body.addEventListener("mousemove", function (details) {
  gsap.to(cursorEle, {
    x: details.x,
    y: details.y,
    duration: 0.2,
  });
});

// Change the 'mouse pointer' img when hovered on Image 
img.addEventListener("mouseenter", () => {
  gsap.to(".cursor img", {
    duration: 0.1,
    width:40,
    backgroundColor:"white",
    borderRadius:"60%",
    attr:{
        src:"https://getdrawings.com/free-icon/see-more-icon-70.png",
    }
  });
});

// Return back to default image 
img.addEventListener("mouseleave", () => {
  gsap.to(".cursor img", {
    scale: 1,
    duration: 0.1,
    width:20,
    backgroundColor: "transparent",
    borderRadius:0,
    attr:{
        src:"https://static.vecteezy.com/system/resources/thumbnails/020/522/257/small_2x/fire-emoji-icon-free-png.png"
    }
  });
});