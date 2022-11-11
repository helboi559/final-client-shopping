import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit,} from '@mui/icons-material';
import { deleteProduct } from '../../../../actions/products';
import { useValue } from '../../../../context/ContextProvider';



const ProductActions = ({ params, rowId, setRowId }) => {
  const { _id, image, title, description, category, price} = params.row;
  const {
    dispatch,
    state: { currentUser, }
  } = useValue();

  // update route 
  const handleEdit = () => {
    // clearDrive(dispatch)
    // dispatch({ type: 'UPDATE_ROUTE', payload: { origin, destination } });
    // dispatch({
    //   type: 'UPDATE_DETAILS',
    //   payload: { date, parking, tolls },
    // });
    
    // dispatch({ type: 'UPDATE_UPDATED_DRIVE', payload: { _id, uid } });
    // dispatch({ type: 'UPDATE_SECTION', payload: 2 });
  };
  // console.log(params.row)
  return (
    <Box>
      <Tooltip title="Edit this drive">
        <IconButton onClick={handleEdit} >
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton
          onClick={() => deleteProduct(params.row,currentUser,dispatch)}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProductActions