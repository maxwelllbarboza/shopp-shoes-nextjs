import styles from './Footer.module.scss';

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles['left-container']}>
               
                <div className={styles['container-address']}>
                    <strong>Endereço:</strong>
                    <span>Rua Cubos, 10</span>
                    <span>Jardim Academy</span>
                    <span>Salvador - Bahia - CEP 41820-021</span>
                </div>
               
                <div className={styles['container-social']}>
                    <img src= "/facebook-logo.svg" alt="Facebook"/>
                    <img src= "/instagram-logo.svg" alt="Intagram"/>
                </div>            
            </div>

            <div className={styles['vertical-line']}/>

            <div className={styles['right-container']}>
                <img src="/logo.svg" alt='Logo'/>

            </div>
        </footer>
        
        
    )
}

export default Footer;