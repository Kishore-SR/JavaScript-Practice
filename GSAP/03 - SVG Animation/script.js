var path = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector('#string');

string.addEventListener('mousemove',(dets)=>{
    console.log(dets);
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path",{
        attr:{d:path,
            stroke:"yellow"
        },
        duration:0.2,
        ease:"power3.out",
    })
})

// Move back to final path as soon as mouse leaves the string container 
string.addEventListener('mouseleave',(dets)=>{
    console.log(dets);
    path = `M 10 100 Q 500 100 990 100`;
    gsap.to("svg path",{
        attr:{d:path,
            stroke:"white"
        },
        duration:1.3,
        ease:"elastic.out(1,0.2"
    })
})