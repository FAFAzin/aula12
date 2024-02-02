export default function Footer(descricao) {
  const footer = document.createElement('footer');
  const p = document.createElement('p');

  p.id = 'text-footer';

  p.innerHTML = descricao;
  footer.appendChild(p);
  return footer;
}
