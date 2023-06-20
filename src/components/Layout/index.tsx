import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.scss';

interface IProps {
    children: JSX.Element
}

function Layout({ children }:IProps) {
    return(
       <main className={styles.container}>
            <Header/>
            <div>{children}</div>
            <Footer/>
       </main>
        
    )
}

export default Layout;