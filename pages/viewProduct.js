import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { selectedProduct, removeSelectedProduct } from "../src/redux/actions/productActions";

function viewProduct() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { id } = router.query;

    const product = useSelector((state)=>state.product);
    
    const {image, title, price, category, description } = product
    const fetchProductDetail = async()=>{
        console.log("running")
        const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch(err=>
            console.log(err)
        )
        console.log(resp);
        
        dispatch(selectedProduct(resp.data))
    }

    useEffect(() => {
       if(id && id!=='') fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [id])

    console.log("prod is ")
    console.log(product)

    return (
        <div>
          <Header/>
          {
              (Object.keys(product).length ===0 ? (
                  <div>...loading</div>
              ):
              <div className="grid grid-col-1">
                    <div className="">
                        <img src={image} alt="" />
                        <p>{title}</p>
                        <p>{category}</p>
                    </div>
                </div>

              )
          }
          
        </div>
    )
}

export default viewProduct
