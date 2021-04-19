import { USER_LOGIN,TASK_ARRAY,DELETE_TASk } from "../action/Task";


const initialState = {
  cartproducts: [],
  message:'',
  token:'',
  taskarray:[],
  deleteTask:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
        {
         
            return{
                token:action.token,
            };
        } 
        case TASK_ARRAY:
            {
              console.log(action.taskarray_data)
                return{
                    taskarray:action.taskarray_data,
                };
            } 

            case DELETE_TASk:
              {
                  return{
                    deleteTask:action.deleteTask,
                  };
              } 
        
      



    
  }

  return state;
};
