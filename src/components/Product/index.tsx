import styles from './Product.module.scss';

function Product() {
    return(
        <div className={styles.container}>
            <img 
                src='https://cdnv2.moovin.com.br/milshoes/imagens/produtos/det/sapatenis-kildare-sapato-masculino-couro-original--88eeaf3552f75069111efb26e6be0c9e.jpg'
                alt='Product'
            />
            <span>Nome do Produto</span>

            <div className='price'>
                <span>R$ 100,00</span>
                <h2>R$ 80,00</h2>
            </div>

            <div className="installments">
                <h4>4x R$ 20,00</h4>
                <span>Sem juros</span>
            </div>
        </div>
        
    )
}

export default Product;