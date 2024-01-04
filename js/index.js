document.addEventListener('DOMContentLoaded', function () {
  const lobbyContainer = document.getElementById('state-lobby')
  const playingContainer = document.getElementById('state-playing')

  document.addEventListener('state', (event) => {
    const state = event.detail.state

    localStorage.setItem('state', state)

    lobbyContainer.classList.add('disabled')
    playingContainer.classList.add('disabled')

    switch (state) {
      case 'lobby':
        lobbyContainer.classList.remove('disabled')
        break
      case 'playing':
        playingContainer.classList.remove('disabled')
        break
      default:
        break
    }
  })
})

setTimeout(() => {
  document.dispatchEvent(new CustomEvent(
    'state',
    {
      detail: { state: 'lobby' },
      bubbles: true
    }
  ))
}, 100)
