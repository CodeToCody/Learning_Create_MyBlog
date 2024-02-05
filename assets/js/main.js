// Grab elements
// in js , the type of the vars just call const (char int float...)
// selecElment(selector){} -> just think like that.Unlike c or else,
//                            js don't define the type of parameters before runtime

const selectElement = selector => {
    // document.querySelector("xxx") while return the first choosed element who has the class "xxx"
    // NOTICE: The thing be returned is an ELEMENT or null
    // https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error('Something went wrong,make sure that ${selector} exists or is typed correctly.');
    
};

// Nav styles on scroll
// DOM's elements can have more than 1 class,but the name should seperated by space,
//                                           so it's necessary to avoid using space when initial a class
const scrollHeader = () => {
    // DOM -> Document Object Model
    // selectElement is a self-defined function (just above) 
    
    const headerElement = selectElement('#header');
    // scrollY is the value of distance from top to now's position
    if(this.scrollY >= 15){
        // add a class to the specified element
        // the class will have related css file to modify the appearence
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

// addEventListener is a function will be called when the event is triggered
// 'scroll' is a specific event (in js,event generally is represented by a string)
// when 'scroll' event is triggered,call scrollHeader()
window.addEventListener('scroll',scrollHeader);

// open and close the menu
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () =>{
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click",toggleMenu);


// Open/Close search form popup
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");


formOpenBtn.addEventListener('click',() => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click',() => searchFormContainer.classList.remove('activated'));
window.addEventListener('keyup',event =>{
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});



// -- Close the seach form popup on ESC keypress


// switch between the theme
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
// fix the problem that if you refresh the window,
//                                  the theme will back to origin
// https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/getItem
// getItem will return string or null
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    // once the element have such class,the style will be triggered
    bodyElement.classList.add("light-theme");
}


themeToggleBtn.addEventListener('click',()=>{
    bodyElement.classList.toggle('light-theme');
    // this will help us to remember the theme (key will be stored locally)
    // 
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme','themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});