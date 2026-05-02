'use client'
import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import T from "@/components/T";

export default function Product() {

    const { productId } = useParams();
    const [product, setProduct] = useState();
    const products = useSelector(state => state.product.list);

    const fetchProduct = async () => {
        const product = products.find((product) => product.id === productId);
        setProduct(product);
    }

    useEffect(() => {
        if (products.length > 0) fetchProduct()
        scrollTo(0, 0)
    }, [productId, products]);

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb */}
                <div className="text-gray-600 text-sm mt-8 mb-5">
                    <T k="breadcrumb_home" /> / <T k="breadcrumb_products" /> / {product?.category}
                </div>

                {product && <ProductDetails product={product} />}
                {product && <ProductDescription product={product} />}
            </div>
        </div>
    );
}
