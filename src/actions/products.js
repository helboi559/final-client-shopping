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

export const editProduct = async (product,dispatch) => {
}

export const deleteProduct = async (product,currentUser,dispatch) => {
  dispatch({type:"START_LOADING"})
  const result = await fetchData(
    {url:`${url}/${product._id}`,
    method:'DELETE',
    token: currentUser.token
    },
    dispatch
  );
  if (result) {
    dispatch({type:"UPDATE_ALERT",payload:{open:true,severity:'success',message:'Product deleted successfully'}})
    console.log('deleteProduct',result)
    dispatch({ type:'DELETE_PRODUCT', payload: result._id });
    //notify user of success registration
  }
  dispatch({type:"END_LOADING"})
}


export const createProduct = async (product,currentUser,dispatch) => {
  dispatch({type:"START_LOADING"})
  const result = await fetchData(
    {url:`${url}/create-product`,
    body:product,
    token: currentUser.token
    },
    dispatch
  );
  if (result) {
    dispatch({type:"UPDATE_ALERT",payload:{open:true,severity:'success',message:'Product added successfully'}})
    //notify user of success registration
  }
  dispatch({type:"END_LOADING"})
}

export const clearDetails = async (dispatch) => {
  dispatch({ type: "CLEAR_DETAILS" });
}
