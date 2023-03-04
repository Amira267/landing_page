
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const menuLIST = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Functions
 * 
*/
//create list item inside unorder list
// Scroll to specific section on link click

function createVarItem(){
    for (let sec of sections){
        let varItem = document.createElement('li');
        varItem.innerHTML = `<a class= 'menu__link' href = "#${sec.getAttribute('id')}"> ${sec.getAttribute('data-nav')} </a> ` ;
        menuLIST.appendChild(varItem);

    }
}
// build the nav
createVarItem();
// Add class 'active' to section when near top of viewport (condition) by getBoundingClientRect() method

// Set sections as active


document.addEventListener('scroll', function() {
    let nearestsectopn;
    let activetab; 
    let absclosed;
    document.querySelectorAll('section').forEach(function(actClass){
        const secPosition = actClass.getBoundingClientRect();
        let tab = document.querySelectorAll("a[href='#"+actClass.id+"']")
        if(tab.length > 0) 
            tab=tab[0];
        else 
            tab= null;
        
        actClass.classList.remove("your-active-class");
        tab.classList.remove("selected__tab");
        
        if(!absclosed){
            absclosed=Math.abs(secPosition.top);
            nearestsectopn=actClass;
            activetab=tab;

        }else{
            if(Math.abs(secPosition.top) < absclosed ){
                absclosed=Math.abs(secPosition.top);
                nearestsectopn=actClass;
                activetab=tab;        
            }
        }
        
    });
    nearestsectopn.classList.add("your-active-class");
    activetab.classList.add("selected__tab");
});


// Scroll to anchor ID using scrollBehavior smooth

let links = document.querySelectorAll("a");

links.forEach((link) =>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let cId = e.target.getAttribute('href');
        //.attributes.href.value;
        let sectionT = document.querySelector(cId);
        sectionT.scrollIntoView({
            behavior : 'smooth',
            block : 'center'
        });

    });
});


//can make behavior smooth by style
//document.querySelector('html').style.scrollBehavior = "smooth";

//////

/**
 * End Functions
 **/


