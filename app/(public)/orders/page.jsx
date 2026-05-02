'use client'
import PageTitle from "@/components/PageTitle"
import { useEffect, useState } from "react";
import OrderItem from "@/components/OrderItem";
import { orderDummyData } from "@/assets/assets";
import T from "@/components/T";

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(orderDummyData)
    }, []);

    return (
        <div className="min-h-[70vh] mx-6">
            {orders.length > 0 ? (
                <div className="my-20 max-w-7xl mx-auto">
                    <PageTitle
                        heading={<T k="orders_title" />}
                        text={<T k="orders_showing" vars={{ count: orders.length }} />}
                        linkText={<T k="orders_go_home" />}
                    />

                    <table className="w-full max-w-5xl text-slate-500 table-auto border-separate border-spacing-y-12 border-spacing-x-4">
                        <thead>
                            <tr className="max-sm:text-sm text-slate-600 max-md:hidden">
                                <th className="text-left"><T k="orders_product_col" /></th>
                                <th className="text-center"><T k="orders_total_col" /></th>
                                <th className="text-left"><T k="orders_address_col" /></th>
                                <th className="text-left"><T k="orders_status_col" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <OrderItem order={order} key={order.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="min-h-[80vh] mx-6 flex items-center justify-center text-slate-400">
                    <h1 className="text-2xl sm:text-4xl font-semibold"><T k="orders_empty" /></h1>
                </div>
            )}
        </div>
    )
}
