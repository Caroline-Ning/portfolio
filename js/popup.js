let popup = document.querySelector('.full-screen');
let menu=document.querySelector('.menuB')

function showPopup(){
  popup.classList.remove('hidden');
  menu.classList.add('hidden')
}

function closePopup(){
  popup.classList.add('hidden');
  menu.classList.remove('hidden')
}

