const menu = document.querySelector('nav');

function activeScroll () {

        menu.classList.toggle('scroll', scrollY > 100)
}

window.addEventListener('scroll', activeScroll);

class MobileNavBar{
    constructor(mobileMenu, navList){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.activeClass = 'active'

        this.handleClick = this.handleClick.blind(this)
    }

    handleClick () {
        this.navList.classList.toggle(this.activeClass)
    }

    addClickEvent () {
        this.mobileMenu.addEventListener('click', this.handleClick)
    }

    init () {
        if (this.mobileMenu) this.addClickEvent();
        return this;
    }
}

const MobileNavBar = new MobileNavBar (
    '.mobile-menu',
    '.nav-list'
)

MobileNavBar.init();