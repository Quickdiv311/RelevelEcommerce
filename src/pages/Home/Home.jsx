import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';
import Product from '../../components/Home/Product/ProductCard';
import { useState,useEffect } from 'react';

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((res) => setProducts(res));  
    }, []);


    return(
      <div>
         <Header/>
         <div className="row">
           {
              products.map((product,i) => (
                <div className="col-12   col-md-3">
                <Product key={product.id} item={product} index={i}/>
                </div>
              ))
           }   
        </div>
        <Footer/>
    </div>
    );
  }

export default Home;