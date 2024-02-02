export default function CardNotice(arr) {
  const section = document.createElement('section');
  section.id = 'background-card-notice';

  arr.forEach((card) => {
    const backgroundCard = document.createElement('section');
    const image = document.createElement('img');
    const h2 = document.createElement('h2');
    const pData = document.createElement('p');
    const p = document.createElement('p');

    //atributos
    backgroundCard.classList.add('card_notice');
    h2.classList.add('title_card_notice');
    pData.classList.add('data_card_notice');
    p.classList.add('description_card_notice');
    image.classList.add('image_card_notice');

    //valores
    image.src = `./public/img/${card.image}.svg`;
    h2.innerText = card.title;
    pData.innerText = formatDate(card.date);
    p.innerText = card.description;

    //append
    backgroundCard.appendChild(image);
    backgroundCard.appendChild(pData);
    backgroundCard.appendChild(h2);
    backgroundCard.appendChild(p);
    section.appendChild(backgroundCard);
  });

  return section;
}

function formatDate(date) {
  const newDate = new Date(date);

  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  let monthDate;

  console.log(newDate);
  console.log(day);

  switch (month) {
    case 1:
      monthDate = 'Janeiro';
      break;
    case 2:
      monthDate = 'Fevereiro';
      break;
    case 3:
      monthDate = 'Março';
      break;
    case 4:
      monthDate = 'Abril';
      break;
    case 5:
      monthDate = 'Maio';
      break;
    case 6:
      monthDate = 'Junho';
      break;
    case 7:
      monthDate = 'Julho';
      break;
    case 8:
      monthDate = 'Agosto';
      break;
    case 9:
      monthDate = 'Setembro';
      break;
    case 10:
      monthDate = 'Outubro';
      break;
    case 11:
      monthDate = 'Novembro';
      break;
    case 12:
      monthDate = 'Dezembro';
      break;
  }

  return `${monthDate} ${day}, ${year} `;
}
