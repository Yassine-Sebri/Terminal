var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 65,
  autoStart: true,
  cursor: '█',
  strings: ['']
});

typewriter  
  .typeString('Hi! <br>')
  .pauseFor(300)
  .typeString(' I\'m Yassine,')
  .pauseFor(100)
  .typeString(' a developer and a hacker.<br/>')
  .pauseFor(300)
  .typeString('I love tinkering with different technologies and exploring their inner workings.<br/>')
  .pauseFor(300)
  .typeString('My interests include CTF challenges and competitive programming.<br/>')
  .pauseFor(300)
  .typeString('Feel free to check my work.<br/>')
  
