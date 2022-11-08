import fetchData from "./utils/fetchData";

const url = process.env.REACT_APP_SERVER_URL + "/carts";

export const purchaseCart = async (order, currentUser, dispatch) => {
    dispatch({type:"START_LOADING"})
    const result = await fetchData(
        {url:url+"/purchase-cart",body:order,token:currentUser.token},dispatch);
        // console.log("token",currentUser)
        if (result) {
            dispatch({type:"UPDATE_ALERT",payload:{open:true,severity:"success",message:"Purchase Successful"}})
            dispatch({type:"UPDATE_SECTION",payload:2})
            dispatch({type:"UPDATE_CART",payload:[]})
            
        }
    dispatch({type:"END_LOADING"})

};

export const fetchMyOrders = async (currentUser, dispatch) => {
    const result = await fetchData(
        {url:url+"/my-orders",method:'GET',token:currentUser?.token},dispatch)
    if (result) {
        dispatch({type:"UPDATE_ORDERS",payload:result})
        
    }


}