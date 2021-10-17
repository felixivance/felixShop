import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';


function singleProduct() {

    const router = useRouter();
    const dispatch = useDispatch();

    const { id } = router.query
    
    const fetchProductDetail = async()=>{
        const resp = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(err=>
            console.log(err)
        )

        dispatch()
    }

    useEffect(() => {
        fetchProductDetail();
        return () => {
            
        }
    }, [])
    return (
        <div>
           {id} 
        </div>
    )
}

export default singleProduct
