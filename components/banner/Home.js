export default function Home(
  titulo = 'Bem vindo',
  subtitulo = 'Um pouco sobre nós'
) {
  const section = document.createElement('section');
  const h1 = document.createElement('h1');
  const h3 = document.createElement('h3');
  section.id = 'home';
  h1.id = 'banner-title';
  h3.id = 'banner-subtitle';
  h1.innerText = titulo;
  h3.innerText = subtitulo;

  section.appendChild(h1);
  section.appendChild(h3);
  return section;
}
