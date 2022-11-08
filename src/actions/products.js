import fetchData from './utils/fetchData';


//product ACTIONS

const url = process.env.REACT_APP_SERVER_URL + '/products';

export const fetchProducts = async(dispatch) => {
    // console.log(currentUser)
    // dispatch({type:"START_LOADING"})
    
    const result = await fetchData(
      {
        url: url + '/all-products',
        method:'GET',
      },
      dispatch
    );
    if (result) {
    
    console.log("productsGet",result)
    dispatch({ type:'UPDATE_PRODUCTS', payload: result });
    //notify user of success registration
  }
    // dispatch({type:"END_LOADING"})
}
