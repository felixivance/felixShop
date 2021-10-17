import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setProducts } from '../src/redux/actions/productActions';

function ProductListings() {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();


    const fetchProducts = async () =>{
        console.log("i am running")
        const res = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err", err);
        })

        dispatch(setProducts(res.data));

        console.log(res.data)
    }

    useEffect(() => {
        products.length ==0 ? fetchProducts(): ''
        return () => {
           
        }
    }, [])

   console.log("prodycst")
   console.log(products)
        
    return (
        <div className="grid grid-cols-2 sm:grid-col-4 gap-2 p-3">
            {
                products.map((product, index)=>(
                     <ProductComponent key={index} product={product} />
                ))
            }
          
        </div>
    )
}

export default ProductListings
