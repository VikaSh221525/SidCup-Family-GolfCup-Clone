
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
        scrub: 1,
        onEnter: () => document.querySelector(".header").classList.add("dark-header"),
        onLeaveBack: () => document.querySelector(".header").classList.remove("dark-header"),
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
let isHovering = false;

document.addEventListener("mousemove", function(e){
    gsap.to("#cursor", {
        left: e.clientX - 10,
        top: e.clientY - 10,
        scale: isHovering ? 3 : 1,
        backgroundColor: isHovering ? "transparent" : "#99c917",
        border: isHovering ? "1px solid white" : "none",
        duration: 0.08, // Faster, smoother response
        ease: "power2.out" 
    });

    gsap.to("#cursor_blur", {
        left: e.clientX - 100,
        top: e.clientY - 100,
        duration: 0.3,
        ease: "power2.out"
    });
})

var links = document.querySelectorAll(".nav_links")
links.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        isHovering = true;
        
    })
    elem.addEventListener("mouseleave", function(){
        isHovering = false;

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
        isHovering = true;
    })
    elem.addEventListener("mouseleave", function(){
        isHovering = false;
    })
    
})

let arrow = document.querySelectorAll(".arrow")
arrow.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        isHovering = true;
    })
    elem.addEventListener("mouseleave", function(){
        isHovering = false;
    })
    
})

let Logo = document.querySelectorAll("#logo");
Logo.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        isHovering = true;
    })
    elem.addEventListener("mouseleave", function(){
        isHovering = false;
    })
})