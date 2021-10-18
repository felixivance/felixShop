import { useSelector } from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";
function ProductComponent({product}) {

    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];
    console.log("hapa");
    console.log(products)
    const { id, title, image, price, category, description , rating} = product;

    const router = useRouter();

    return (
        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        onClick={()=>router.push(`viewProduct?id=${id}`)}>
            {/* image */}
            <div className="relative pb-48 overflow-hidden">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover"/>
            </div>
            <div className="p-4">
                    <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                    <h2 class="mt-2 mb-2  font-bold">{title}</h2>
                    <p class="text-sm">{description}</p>
                    <div class="mt-3 flex items-center">
                        <span class="text-sm font-semibold">$</span>&nbsp;<span class="font-bold text-xl">{price}</span>&nbsp;<span class="text-sm font-semibold">€</span>
                    </div>
            </div>

            <div class="p-4 border-t text-xs text-gray-700">
                <span class="flex items-center mb-1">
                    <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> Rating {rating.rate}
                </span>
                <span class="flex items-center">
                    <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> {category}
                </span>        
            </div>
                                

        </div>
    )
}

export default ProductComponent
