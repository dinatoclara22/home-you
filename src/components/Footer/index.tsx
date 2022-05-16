import logo from '../../assets/home.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer} data-aos="fade-up">

      <div className={styles.footer__logo}>
        <img src={logo} alt="Logo" />
      </div>
    
      <div className={styles.footer__links}>
        <h3>Produtos</h3>
        <ul>
          <li> <a href="#">Mobilia</a> </li>
          <li> <a href="#">Segurança</a> </li>
          <li> <a href="#">Design Interior</a> </li>
        </ul>
      </div>

      <div className={styles.footer__links}>
        <h3>Mais Informações</h3>
        <ul>
          <li> <a href="#">Contrato</a> </li>
          <li> <a href="#">Sobre nós</a> </li>
          <li> <a href="#">Termos e Condições</a> </li>
        </ul>
      </div>

      <div className={styles.footer__links}>
        <h3>Redes Sociais</h3>
        <ul>
          <li> <a href="#">Pinterest</a> </li>
          <li> <a href="#">Facebook</a> </li>
          <li> <a href="#">Instagram</a> </li>
        </ul>
      </div>

    </footer>
  );
}
