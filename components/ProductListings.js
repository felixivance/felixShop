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
   console.log(products.length)
        
    return (
        <div className="container mx-auto pt-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6">
                {
                    products.map((product, index)=>(
                        <ProductComponent key={index} product={product} />
                    ))
                }
            </div>
          
        </div>
    )
}

export default ProductListings
