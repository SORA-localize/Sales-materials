'use client'
import { assets } from "@/assets/assets"
import { useEffect, useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import Loading from "@/components/Loading"
import T from "@/components/T"
import { useT } from "@/lib/LanguageContext"

export default function CreateStore() {

    const t = useT()
    const [alreadySubmitted, setAlreadySubmitted] = useState(false)
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")

    const [storeInfo, setStoreInfo] = useState({
        name: "", username: "", description: "",
        email: "", contact: "", address: "", image: ""
    })

    const onChangeHandler = (e) => {
        setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value })
    }

    const fetchSellerStatus = async () => {
        setLoading(false)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        fetchSellerStatus()
    }, [])

    return !loading ? (
        <>
            {!alreadySubmitted ? (
                <div className="mx-6 min-h-[70vh] my-16">
                    <form onSubmit={e => toast.promise(onSubmitHandler(e), { loading: "Submitting data..." })} className="max-w-7xl mx-auto flex flex-col items-start gap-3 text-slate-500">
                        <div>
                            <h1 className="text-3xl">
                                <T k="create_store_title" /> <span className="text-slate-800 font-medium"><T k="create_store_title_bold" /></span>
                            </h1>
                            <p className="max-w-lg"><T k="create_store_desc" /></p>
                        </div>

                        <label className="mt-10 cursor-pointer">
                            <T k="create_store_logo" />
                            <Image src={storeInfo.image ? URL.createObjectURL(storeInfo.image) : assets.upload_area} className="rounded-lg mt-2 h-16 w-auto" alt="" width={150} height={100} />
                            <input type="file" accept="image/*" onChange={(e) => setStoreInfo({ ...storeInfo, image: e.target.files[0] })} hidden />
                        </label>

                        <p><T k="create_store_username" /></p>
                        <input name="username" onChange={onChangeHandler} value={storeInfo.username} type="text" placeholder={t('create_store_username_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded" />

                        <p><T k="create_store_name" /></p>
                        <input name="name" onChange={onChangeHandler} value={storeInfo.name} type="text" placeholder={t('create_store_name_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded" />

                        <p><T k="create_store_desc_label" /></p>
                        <textarea name="description" onChange={onChangeHandler} value={storeInfo.description} rows={5} placeholder={t('create_store_desc_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded resize-none" />

                        <p><T k="create_store_email" /></p>
                        <input name="email" onChange={onChangeHandler} value={storeInfo.email} type="email" placeholder={t('create_store_email_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded" />

                        <p><T k="create_store_contact" /></p>
                        <input name="contact" onChange={onChangeHandler} value={storeInfo.contact} type="text" placeholder={t('create_store_contact_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded" />

                        <p><T k="create_store_address" /></p>
                        <textarea name="address" onChange={onChangeHandler} value={storeInfo.address} rows={5} placeholder={t('create_store_address_ph')} className="border border-slate-300 outline-slate-400 w-full max-w-lg p-2 rounded resize-none" />

                        <button className="bg-slate-800 text-white px-12 py-2 rounded mt-10 mb-40 active:scale-95 hover:bg-slate-900 transition">
                            <T k="create_store_submit_btn" />
                        </button>
                    </form>
                </div>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <p className="sm:text-2xl lg:text-3xl mx-5 font-semibold text-slate-500 text-center max-w-2xl">{message}</p>
                    {status === "approved" && (
                        <p className="mt-5 text-slate-400">
                            <T k="create_store_redirect" vars={{ sec: 5 }} />
                        </p>
                    )}
                </div>
            )}
        </>
    ) : (<Loading />)
}
