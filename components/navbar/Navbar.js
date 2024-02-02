export default function Navbar(arr = ['home', 'about', 'contacts']) {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  //atributos
  ul.id = 'options_nav';

  arr.forEach((li) => {
    const liTag = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = li.toUpperCase();
    a.href = `#${li}`;
    liTag.appendChild(a);
    ul.appendChild(liTag);
  });
  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}
