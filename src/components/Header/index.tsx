import styles from './Header.module.scss';
import logo from '../../assets/home.svg';
import { CgSearch } from 'react-icons/cg';
import { BsPersonFill } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img
          src={logo}
          alt="Logo HomeYou"
          className={styles.header__logoContainer__logo}
        />
        <h2>HOMEYOU</h2>
      </div>

      <div className={styles.header__menuHamburguer}>
        <GiHamburgerMenu color="#272727" size={25} />
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li>
            <a href="#principal">Inicio</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#orcamento">Contato</a>
          </li>
        </ul>

        <ul className={styles.header__nav__icons}>
          <CgSearch color="#272727" size={20} />
          <BsPersonFill color="#272727" size={20} />
          <BiHeart color="#272727" size={20} />
        </ul>
      </nav>
    </header>
  );
}
