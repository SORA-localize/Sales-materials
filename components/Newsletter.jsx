'use client'
import React from 'react'
import Title from './Title'
import T from '@/components/T'
import { useT } from '@/lib/LanguageContext'

const Newsletter = () => {
    const t = useT()
    return (
        <div className='flex flex-col items-center mx-4 my-36'>
            <Title
                title={<T k="newsletter_title" />}
                description={<T k="newsletter_desc" />}
                visibleButton={false}
            />
            <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
                <input
                    className='flex-1 pl-5 outline-none'
                    type="text"
                    placeholder={t('newsletter_placeholder')}
                />
                <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition'>
                    <T k="newsletter_button" />
                </button>
            </div>
        </div>
    )
}

export default Newsletter
