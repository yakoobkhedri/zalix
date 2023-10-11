
// open sidebar

let openSidebar=document.getElementById('openSidebar');
let sidebar=document.getElementById('sidebar');
let overlay=document.getElementById('overlay');

openSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
})
overlay.addEventListener('click',function () {
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
})