import styles from './Header.module.scss';

function Header() {
    return(
        <header className={styles.header}>
          <div>
            <h1>MODA MASCULINA</h1>
            <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
          </div>
    
          <img className={styles.logo} src='/logo.svg' alt='Logo' />  
      </header>       
        
    )
}

export default Header;