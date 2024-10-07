function textMarque(){
    window.addEventListener("wheel", (dets) => {
        console.log(dets);
        if (dets.deltaY > 0) { // While scrolling down
          gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 3,
            ease: "none",
            repeat: -1,
          });
          gsap.to(".marque img",{
              rotate:180,
          })
        }
        else{ // While scrolling up
          gsap.to(".marque", {
              transform: "translateX(0%)",
              duration: 3,
              ease: "none",
              repeat: -1,
            });
            gsap.to(".marque img",{
              rotate:0,
          })
        }
      });
}

textMarque();