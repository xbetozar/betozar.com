class Greeting {
  static sayHello(): string {
    return 'Hi!';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML += `<p class="text-3xl text-gray-400">${Greeting.sayHello()}</p>`;
});
