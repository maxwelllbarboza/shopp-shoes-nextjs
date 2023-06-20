import Layout from '@/components/Layout';
import Product from '@/components/Product';
import styles from '@/styles/Home.module.scss';

export default function Home() {  
 
  return (
    <Layout>
      <div className={styles["container-shoes"]}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </Layout>           
  )
}

