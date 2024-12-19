import Alpine from 'alpinejs'

declare global {
  interface Window {
    Alpine: object,
  }
}

window.Alpine = Alpine

Alpine.start()

class Greeting {
  static sayHello(): string {
    return 'Hi!'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML += `<p class="text-3xl text-gray-400">${Greeting.sayHello()}</p>`
})
