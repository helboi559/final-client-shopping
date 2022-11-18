import {
    useContext,
    createContext,
    useReducer,
    useEffect
} from 'react'
import reducer from './reducer'


const initialState = {
    openLogin:false,
    currentUser:null,
    loading:false,
    alert:{open:false,severity:'info',message:''},
    profile:{open:false, file:null , photoURL:''},
    details:{title:"",description:"",price:"",category:"",image:"",rating:{rate:0,count:0}},
    section:0,
    products:[],
    product:null,
    cart:[],
    orders:[],
    users:[],
    ordersAdmin:[],
    
}

const Context = createContext(initialState)

export const useValue = () => {
    return useContext(Context)
}
const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=> {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
      if(currentUser) {
        dispatch({type:'UPDATE_USER',payload:currentUser})
      }
    },[])
  return (
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider