import React, { useEffect } from 'react'
import { fetchOrders } from '../../../actions/carts'
import { useValue } from '../../../context/ContextProvider'


const MyOrders = ({setSelectedLink,Link}) => {
  const {state:{ordersAdmin,currentUser},dispatch} = useValue()
  useEffect(() => {
        setSelectedLink(Link)
        if (ordersAdmin.length === 0) {
          fetchOrders(currentUser,dispatch)
        }
    }, [])
    console.log("ordersAdmin",ordersAdmin)
    return (
    <div>WIP</div>
  )
}

export default MyOrders