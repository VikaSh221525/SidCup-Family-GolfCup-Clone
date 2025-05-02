
gsap.to("#page1", {
    y:20
})

gsap.to(".header",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: ".header",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to(".header_content", {
    y: -9, // Adjust padding dynamically
    duration: 0.5,
    scrollTrigger: {
        trigger: ".header",
        scroll: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

let cursr =  document.getElementById("cursor");
let curBlur = document.getElementById("cursor_blur");

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left: dets.x+27,
        top: dets.y-12,
        duration: 0.3, // smoothness
        ease: "power2.out" 
    });

    gsap.to("#cursor_blur", {
        left: dets.x - 200,
        top: dets.y - 200,
        duration: 0.6,
        ease: "power2.out"
    });
})

var links = document.querySelectorAll(".nav_links")
links.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursr.style.scale = 2;
        cursr.style.backgroundColor = "transparent"
        cursr.style.border = "1px solid white"
    })
    elem.addEventListener("mouseleave", function(){
        cursr.style.scale = 1;
        cursr.style.backgroundColor = "#99c917"
        cursr.style.border = "none"
    })
    
})

gsap.from(".about_us img, .about-us-content",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".about_us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
        
    }
})

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3
        
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#BackHeading",{
    y:50,
    scrollTrigger:{
        trigger: "#BackHeading",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
})

var links = document.querySelectorAll(".elem")
links.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursr.style.scale = 3;
        cursr.style.backgroundColor = "transparent"
        cursr.style.border = "1px solid white"
    })
    elem.addEventListener("mouseleave", function(){
        cursr.style.scale = 1;
        cursr.style.backgroundColor = "#99c917"
        cursr.style.border = "none"
    })
    
})