import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'
import T from '@/components/T'

const SPEC_KEYS = {
  "Free Shipping":         { title: 'spec_free_shipping',      desc: 'spec_free_shipping_desc' },
  "7 Days easy Return":    { title: 'spec_return',             desc: 'spec_return_desc' },
  "24/7 Customer Support": { title: 'spec_support',            desc: 'spec_support_desc' },
}

const OurSpecs = () => {
    return (
        <div className='px-6 my-20 max-w-6xl mx-auto'>
            <Title
                visibleButton={false}
                title={<T k="section_our_specs" />}
                description={<T k="our_specs_desc" />}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26'>
                {ourSpecsData.map((spec, index) => {
                    const keys = SPEC_KEYS[spec.title]
                    return (
                        <div
                            className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group'
                            style={{ backgroundColor: spec.accent + 10, borderColor: spec.accent + 30 }}
                            key={index}
                        >
                            <h3 className='text-slate-800 font-medium'>
                                {keys ? <T k={keys.title} /> : spec.title}
                            </h3>
                            <p className='text-sm text-slate-600 mt-3'>
                                {keys ? <T k={keys.desc} /> : spec.description}
                            </p>
                            <div
                                className='absolute -top-5 text-white size-10 flex items-center justify-center rounded-md group-hover:scale-105 transition'
                                style={{ backgroundColor: spec.accent }}
                            >
                                <spec.icon size={20} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurSpecs
