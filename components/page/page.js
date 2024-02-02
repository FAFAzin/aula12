import Navbar from '../navbar/Navbar.js';
import Home from '../banner/Home.js';
import Explore from '../explore/Explore.js';
import Journal from '../journal/Journal.js';
import Footer from '../footer/Footer.js';

const arrNav = ['home', 'explore', 'journal'];

export default function Page() {
  const navBar = Navbar(arrNav);
  const home = Home('The technology is here', 'The binary world');
  const footer = Footer('Created by Josafá');
  const explore = Explore('Explore the Technology');
  const journal = Journal(
    'The journal',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus minima dignissimos ratione corporis adipisci natus perferendis laborum facere. '
  );
  return {
    navBar,
    home,
    explore,
    journal,
    footer,
  };
}
