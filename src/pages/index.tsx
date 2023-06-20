import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/Home.module.scss';

export default function Home() {  
 
  return ( 
    <div>
      <Header></Header>
      <div className= {styles['container-main']} >

      </div>

      <Footer/>
    </div>     
      
  )
}

