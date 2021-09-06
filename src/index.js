import Swordsman from './Characters/Swordsman';

const Andy = new Swordsman('Andy');
for (const prop in Andy) {
  if ({}.hasOwnProperty.call(Andy, prop)) {
    const text = `${prop} is ${Andy[prop]}`;
    const p = document.createElement('p');
    p.innerText = text;
    document.body.append(p);
    console.log(text);
  }
}
