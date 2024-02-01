var tl = gsap.timeline({scrollTrigger:{
    trigger:".second",
    start: "0% 99%",
    end: "70% 50%",
    scrub:true,
    // markers:true,gg
}});

tl.to(".fanta",{
    width:"30%",
    top:'130%',
    left:"2%",
},"one");

tl.to(".cut-orange",{
    width:"15%",
    top:'115%',
    left:"5%",
},"one");

tl.to(".orange",{
    width:"20%",
    top:'-100%',
    left:"100%",
},"one");

tl.to(".leaf-2",{
    top:"100%",
    left:"-100%"
},"one")

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".third",
    start:"0% 99%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}});

tl2.to(".fanta",{
    width:"40%",
    top:"227%",
    left:"30%",
},"two");

tl2.to(".cut-orange",{
    width:"25%",
    top:"210%",
    left:"37.5%"
},"two");