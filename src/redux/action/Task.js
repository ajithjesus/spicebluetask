export const USER_LOGIN="USER_LOGIN";
export const TASK_ARRAY="TASK_ARRAY";
export const DELETE_TASk="DELETE_TASk";




export const userlogin=()=>
{
    return async (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email : 'spicebluetest2@gmail.com',password : '12345678' })
        };
        fetch('https://stage.api.sloovi.com/login', requestOptions)
            .then(response => response.json())
            .then(data =>
              {
                dispatch({ type: "USER_LOGIN", token:data.results.token});
               
              }
            )
            return true       
                
    }
       
}

export const getUser=(tokens_id)=>
{
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
      .then((data) =>
      {
      console.log("&&&&&&&&&");
      console.log(JSON.stringify(data));
      console.log("&&&&&&&&&");


      }
     );
     return true;
  };
  
}

export const GetTaskAction=(tokens_id)=>
{
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
          dispatch({ type: "TASK_ARRAY", taskarray_data:data.results});
        
        });
        return true;
  
}

}


export const TaskDeleteAction=(tokens_id,id)=>
{
    return (dispatch) => {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + tokens_id,
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
          {
         dispatch({ type: "DELETE_TASk", deleteTask: "DeleteSucess"});

         
            
            
          }
        });
      
    }
    
}








