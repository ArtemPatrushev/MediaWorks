import styles from '../../styles/NavMenu.module.scss';
import Link from 'next/link'

const NavMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        <Link href='/Users/UsersContainer'>
          <a className={styles.navMenu__item}>
            Пользователи
          </a>
        </Link>
        <Link href='/Posts'>
          <a className={styles.navMenu__item}>
            Посты
          </a>
        </Link>
      </div>
    </div>
  )
};

export default NavMenu;
