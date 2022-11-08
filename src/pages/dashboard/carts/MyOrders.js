import React, { useEffect } from 'react'

const MyOrders = ({setSelectedLink,Link}) => {
    useEffect(() => {
        setSelectedLink(Link)
    }, [])
    return (
    <div>MyOrders</div>
  )
}

export default MyOrders