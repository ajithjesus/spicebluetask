import {
  USER_LOGIN,
  TASK_ARRAY,
  DELETE_TASk,
  ASSINGED_USER_NAME,
  SUCCESS_MESSAGE
} from "../action/Task";

const initialState = {
  cartproducts: [],
  message: "",
  token: "",
  taskarray: [],
  deleteTask: "",
  assigned_user_name: "",
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case SUCCESS_MESSAGE: {
      return {
        ...state,
        message: action.message,
      };
    }



    case TASK_ARRAY: {
      return {
        ...state,
        taskarray: action.taskarray_data,
      };
    }
    case ASSINGED_USER_NAME: {
      return {
        assigned_user_name: action.assingned_name,
      };
    }

    case DELETE_TASk: {
      return {
        deleteTask: action.deleteTask,
      };
    }
  }

  return state;
};
