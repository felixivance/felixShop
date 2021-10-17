import { useSelector } from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";
function ProductComponent({product}) {

    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];
    console.log("hapa");
    console.log(products)
    const { id, title, image, price, category} = product;

    const router = useRouter();

    return (
        <div className="flex flex-col p-2 border justify-between shadow-md hover:scale-100"
        onClick={()=>router.push(`viewProduct?id=${id}`)}>
            {/* image */}
            <div className="border-b pb-2">
              <img src={image} alt={title} className="object-cover"/>
            </div>
            <div className="pt-5">
                {title}
            </div>

            <div className="font-mono">
                $ {price}
            </div>

            <div>
               Category: {category}
            </div>

        </div>
    )
}

export default ProductComponent
