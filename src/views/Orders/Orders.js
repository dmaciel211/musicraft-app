import React, {useState, useEffect} from 'react'
import OrderForm from '../../components/OrderForm/OrderForm'
import {db} from "../../firebase"




const Orders = () => {
    const[products, setProducts] = useState([])

    const addOrder = async (order) => {
        await db.collection("ordenes").doc().set(order)
    };
    return (
        <div>
            <OrderForm addOrder = {addOrder} />
        </div>
    )
}

export default Orders
