const navSlide = () => {
    const sideBar = document.querySelector('.sidenav');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click',() => {
        sideBar.classList.toggle('sidenav-active');
    });

}
navSlide();

const menuArrive = () => {
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const cross = document.querySelector('.cross');
    const menuActive = document.querySelector('.menuactive');

    menuButton.addEventListener('click', () => {
        menu.classList.add('menuactive');
    });
    cross.addEventListener('click', () => {
        menu.classList.remove('menuactive');
    });
}
menuArrive();

