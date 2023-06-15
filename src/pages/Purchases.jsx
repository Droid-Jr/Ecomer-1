import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import getConfigHttp from "../helpers/getConfigHttp";
import '../styles/purchases.css'



const Purchases = () => {
    const [Purchases, setPurchases] = useState({})

    const [Show, setShow] = useState(false)

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfigHttp() )
        .then(res => {
          setPurchases(res.data)
        
        })
        .catch(err => console.log(err))
      }, [])



    return (
        <div className="purchases">
            <h5>Productos Comprados</h5>
            <main className="purchases_main">
                <div className="purchases_detalle">
                <h2>Compras</h2>
                <button onClick={() => setShow(!Show)}>Ver Detalles</button>

                </div >
               
                    {
                        Show && <div className="contenido" data-aos="fade-left"
                        data-aos-duration="1200">
                        {
                            Purchases?.map(produ =>
                                <article className="purchases_card"  key={produ?.id}  >
                                    <div className="hed"  >
                                        <img  src={produ.product.images?.[0].url} />
                                    </div>
                                    
                                    <div className="hed-2">
                                        <p>{produ?.product.title}</p>
                                    <h3 >{produ.quantity}</h3>
                                    <p>${produ?.product.price}</p>
                                    </div>
                                    
                                   
                                </article>
                                
                                )
                        }
                        </div> 
                    }
                
            </main>
            
        </div>
    );
};

export default Purchases;