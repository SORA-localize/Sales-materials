'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import T from '@/components/T'

const BestSelling = () => {

    const displayQuantity = 8
    const products = useSelector(state => state.product.list)
    const shown = Math.min(displayQuantity, products.length)

    return (
        <div className='px-6 my-30 max-w-6xl mx-auto'>
            <Title
                title={<T k="section_best_selling" />}
                description={<T k="section_showing_n_of_m" vars={{ shown, total: products.length }} />}
                href='/shop'
            />
            <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12'>
                {products.slice().sort((a, b) => b.rating.length - a.rating.length).slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling
