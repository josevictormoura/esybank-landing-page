const nav = document.querySelector('nav')
const btnShowMenuMobile = document.querySelector('#menu-mobile')

function toggleMenuMobile() {
  const isOpen = btnShowMenuMobile.getAttribute('data-open') === 'open';
  if (isOpen) {
    nav.classList.remove('active')
    btnShowMenuMobile.src = 'images/icon-hamburger.svg'
    btnShowMenuMobile.removeAttribute('data-open')
    btnShowMenuMobile.ariaExpanded = false
    return
  }

  nav.classList.add('active')

  btnShowMenuMobile.src = 'images/icon-close.svg'
  btnShowMenuMobile.setAttribute('data-open', 'open')
  btnShowMenuMobile.ariaExpanded = true
}

function closeNav({target}) {
  if (target.tagName === 'A') {
    toggleMenuMobile()
  }
}

nav.addEventListener('click', closeNav)
btnShowMenuMobile.addEventListener('click', toggleMenuMobile)