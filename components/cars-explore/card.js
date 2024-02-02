export default function Card(arr) {
  const section = document.createElement('section');
  section.id = 'section-cards';
  arr.forEach((card) => {
    //elementos
    const backgroundCard = document.createElement('section');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');

    //atributos
    backgroundCard.classList.add('card-explore');
    h2.classList.add('title-card-explore');
    h3.classList.add('subtitle-card-explore');
    backgroundCard.style.backgroundImage = `url(./public/img/${card.img}.svg)`;

    //valores
    h2.innerText = card.city;
    h3.innerText = card.country;

    //append
    backgroundCard.appendChild(h2);
    backgroundCard.appendChild(h3);
    section.appendChild(backgroundCard);
  });

  return section;
}
