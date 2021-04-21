export const USER_LOGIN = "USER_LOGIN";
export const TASK_ARRAY = "TASK_ARRAY";
export const DELETE_TASk = "DELETE_TASk";
export const ASSINGED_USER_NAME = "ASSINGED_USER_NAME";

export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

export const userlogin = () => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "spicebluetest2@gmail.com",
        password: "12345678",
      }),
    };
    fetch("https://stage.api.sloovi.com/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "USER_LOGIN", token: data.results.token });
      });
    return true;
  };
};

export const getUser = (tokens_id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + tokens_id,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://stage.api.sloovi.com/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results.first);
        console.log(tokens_id);
        dispatch({
          type: "ASSINGED_USER_NAME",
          assingned_name: data.results.first,
        });
      
      });
    return true;
  };
};

export const GetTaskAction = (tokens_id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + tokens_id,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "TASK_ARRAY", taskarray_data: data.results });
      });
    return true;
  };
};

export const AddTaskAction = (form_Data1, tokens_id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokens_id,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: form_Data1,
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS_MESSAGE", message: "ADD_SUCCESS" });
      });
    return true;
  };
};

export const EditTaskAction = (form_Data2, tokens_id1, id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + tokens_id1,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: form_Data2,
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
        id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS_MESSAGE", message: "EDIT_SUCCESS" });
      });
    return true;
  };
};

export const DeleteTaskAction = (deletetoken, tokens_id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + deletetoken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
        tokens_id,
      requestOptions
    )
      .then((response) => response.json())

      .then((data) => {
        dispatch({ type: "SUCCESS_MESSAGE", message: "DELETE_SUCCESS" });
      });
    return true;
  };
};

export const GetTaskSingleAction = (token, id) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(
      "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/" +
        id,
      requestOptions
    )
      .then((response) => response.json())

      .then((data) => {
        dispatch({ type: "SUCCESS_MESSAGE", message: "SINGLE_TAKS_SUCCESS" });
      });
    return true;
  };
};
