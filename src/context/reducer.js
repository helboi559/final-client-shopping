const reducer = (state,action) => {
    switch(action.type) {
        case "OPEN_LOGIN":
            return {...state, openLogin:true}
        case "CLOSE_LOGIN":
            return {...state, openLogin:false}
        case 'UPDATE_USER':
            localStorage.setItem('currentUser',JSON.stringify(action.payload))
            return { ...state, currentUser: action.payload };
        case 'START_LOADING':
            return { ...state, loading:true };
        case 'END_LOADING':
            return { ...state, loading:false };
        case 'UPDATE_ALERT':
            return { ...state, alert: action.payload };
        case 'UPDATE_PROFILE':
            return { ...state, profile: action.payload };
        case 'UPDATE_SECTION':
            return { ...state, section: action.payload };
        case 'UPDATE_PRODUCTS':
            return { ...state, products: action.payload };
        case 'UPDATE_PRODUCT':
            return { ...state, product: action.payload };
        case 'UPDATE_USERS':
            return { ...state, users: action.payload };
        case 'UPDATE_CART':
            return { ...state, cart: action.payload };
        case 'ADD_TO_CART':
            // if cart doesnt contain the product, add it and set quantity to 1
            if (!state.cart.find((item) => item._id === action.payload._id)) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
            // if the cart already contains the product, increase the quantity by 1
            if (state.cart.find((item) => item._id === action.payload._id)) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
        
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            //if cart contains the prodcut and quantity is greater than 1, decrease the quantity by 1
            if (
                state.cart.find((item) => item._id === action.payload._id) &&
                action.payload.quantity > 1
            ) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                };
            }

            //if cart contains the product and quantity is 1, remove the product from the cart
            if (state.cart.find((item) => item._id === action.payload._id)) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item._id !== action.payload._id)
                };
            }
            return { ...state, cart: [...state.cart, action.payload] };
        case 'UPDATE_ORDERS':
            return { ...state, orders: action.payload };
        default:
            throw new Error('No action matched!')
    }
}

export default reducer