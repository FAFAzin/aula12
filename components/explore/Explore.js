import Card from '../cars-explore/card.js';
const arr = [
  { city: 'Antelope Canyon', country: 'United States', img: 'card-image' },
  { city: 'Antelope Canyon', country: 'United States', img: 'card-image' },
  { city: 'Antelope Canyon', country: 'United States', img: 'card-image' },
];

export default function Explore(
  title = 'Title',
  text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam reiciendis officia a, similique ut repellat repellendus labore laboriosam porro.',
  textSpan = 'See more'
) {
  //elementos
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const sectionCards = document.createElement('section');
  const span = document.createElement('span');
  const card = Card(arr);

  //atributos
  section.id = 'explore';
  h2.id = 'title-explore';
  p.id = 'text-explore';
  sectionCards.id = 'cards-explore';
  span.id = 'see-more';

  //valores
  h2.innerText = title;
  p.innerText = text;
  span.innerHTML = `${textSpan} <i class="fa-solid fa-arrow-right arrow"></i>`;

  //append
  /*   sectionCards.appendChild(card); */
  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(card);
  section.appendChild(span);

  return section;
}
