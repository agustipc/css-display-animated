document.addEventListener('click', (event) => {
  if (event.target.matches('.item')) {
    event.target.classList.add('hidden')
  }
})