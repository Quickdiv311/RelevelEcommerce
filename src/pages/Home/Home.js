import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';
import Product from '../../components/Home/Product/product';
import { useState } from 'react';

function Home(){

    const [products, setProducts] = useState([]);

    fetch("product.json")
    .then((res) => res.json())
    .then((res) => setProducts(res));

    return(
      <div>
         <Header/>
         <div>
         <h1>{products && products.length}</h1>
        <Product/>
        </div>
        <Footer/>
    </div>
    );
  }

export default Home;