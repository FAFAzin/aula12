import CardNotice from '../cards-notices/Cards-notices.js';

const arr = [
  {
    date: '02/02/2024',
    title: 'Artificial intelligence',
    description:
      'Another milestone in the technological era, AI has arrived impressing...',
    image: 'card-image-notice',
  },
  {
    date: '02/02/2024',
    title: 'Cybersecurity',
    description: 'The world of cybersecurity remains very busy...',
    image: 'card-image-notice',
  },
];

export default function Journal(title, description) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const cards = CardNotice(arr);

  //Atributos
  section.id = 'journal';
  h2.id = 'title-journal';
  p.id = 'text-journal';
  span.id = 'all-posts';

  //valores
  h2.innerText = title;
  p.innerText = description;
  span.innerHTML = 'All Posts <i class="fa-solid fa-arrow-right arrow"></i>';

  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(cards);
  section.appendChild(span);

  return section;
}
