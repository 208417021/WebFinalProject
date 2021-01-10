function switchPic(picture){
    document.querySelector('.picture').src = picture;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.nav-menu');
    var menuActive = document.querySelector('.active');
    var navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    menuToggle.innerHTML = '<i class="fas fa-times fa-2x"></i>';
    menuActive.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
}