import Header from '../../components/shared/header/header';
import Footer from '../../components/shared/footer/footer';
import Product from '../../components/Home/Product/product';
import { useState,useEffect } from 'react';

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("product.json")
      .then((res) => res.json())
      .then((res) => setProducts(res));  
    }, []);


    return(
      <div>
         <Header/>
         <div className="row">
           {
              products.map((product,i) => {
                <div className="col-3">
                <Product item={product} index={i}/>
                </div>
              })
           }   
        </div>
        <Footer/>
    </div>
    );
  }

export default Home;