const cardElements = document.querySelectorAll('.card');

cardElements.forEach(container => {
  // Get the variables we're going to use
const icon = container.querySelector('.icon-conf'),
	iconNormal = container.querySelector('.regular-icon')
	iconOutline = container.querySelector('.outline');

  // Create our animation
const card = gsap.timeline({
	reversed: true, 
	paused: true, 
	defaults: {duration: 0.3}
});
  
card
	.to(icon, {rotation: 360, backgroundColor: '#ffffff'}, 0)
	.to(iconNormal, {backgroundColor: '#ffffff'}, 0)
	.to(iconOutline, {fill: '#000909'}, "<")

// Control the animation using event listeners
container.addEventListener("mouseenter", () => card.play());
container.addEventListener("mouseleave", () => card.reverse());
});



var menuToggle = document.getElementById("menuToggle")
var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();



var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});




var colors = ["white"];

//initially colorize each box and position in a row
gsap.set(".box", {
  backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 225
});


gsap.to(".box", {
  duration: 9,
  ease: "none",
  x: "+=880", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 880) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});


//toggle overflow
const overflow = document.querySelector("#overflow");
overflow.addEventListener("change", applyOverflow);

function applyOverflow() {
  if(overflow.checked) {
    gsap.set(".wrapper", {overflow: "visible"});
  } else {
    gsap.set(".wrapper", {overflow: "hidden"});
  }
}




  



