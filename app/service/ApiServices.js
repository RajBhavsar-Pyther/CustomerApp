import {Constants} from '../App_Constants/Constants'
/***************************** API URL **************************/
const apiUrl = "http://example.com/"
/******************************************************************/

export const ApiServices = {
  callServicePostWithBodyData : async(URL, apiBody, callBackFunction) => {
    fetch(apiUrl+URL, {
      method: "POST",
      headers: {
        
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body:JSON.stringify(apiBody)
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {  
        callBackFunction(responseData, responseData.isError);
      })
      .catch(error => {
        console.log("URL:" + apiUrl+URL + ":1222222244444444:", error);
        
        if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
          callBackFunction(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT, true);
        } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
          callBackFunction(Constants.NO_INTERNET, true);
        } else if (typeof error == String(undefined) ) {
          callBackFunction("", true);
        } else {
          callBackFunction(error, true);
        }
      });
  },
  callServicePutWithBodyData : async(URL, apiBody, callBackFunction) => {
    fetch(apiUrl+URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body:JSON.stringify(apiBody)
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {  
        callBackFunction(responseData, responseData.isError);
      })
      .catch(error => {
        console.log("URL:" + apiUrl+URL + ":1222222244444444:", error);
        
        if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
          callBackFunction(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT, true);
        } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
          callBackFunction(Constants.NO_INTERNET, true);
        } else if (typeof error == String(undefined) ) {
          callBackFunction("", true);
        } else {
          callBackFunction(error, true);
        }
      });
  },
  callServiceGet : async (URL, callBackFunction) => {
    await fetch(apiUrl+URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {  
        callBackFunction(responseData, responseData.isError);
      })
      .catch(error => {
        console.log("URL:" + apiUrl+URL + ":1222222244444444:", error);
        
        if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
          callBackFunction(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT, true);
        } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
          callBackFunction(Constants.NO_INTERNET, true);
        } else if (typeof error == String(undefined) ) {
          callBackFunction("", true);
        } else {
          callBackFunction(error, true);
        }
      });
  },
  callServicePostWithFormData : async(URL, apiBody, callBackFunction) => {
    fetch(apiUrl+URL, {
      method: "POST",
      headers: {
     
        "Content-Type": "multipart/form-data",
        "Authorization": token,
       
      },
      body:apiBody
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {  
        callBackFunction(responseData, responseData.isError);
      })
      .catch(error => {
        console.log("URL:" + apiUrl+URL + ":1222222244444444:", error);
        
        if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
          callBackFunction(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT, true);
        } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
          callBackFunction(Constants.NO_INTERNET, true);
        } else if (typeof error == String(undefined) ) {
          callBackFunction("", true);
        } else {
          callBackFunction(error, true);
        }
      });
  },
  callServicePutWithFormData : async(URL, apiBody, callBackFunction) => {
    fetch(apiUrl+URL, {
      method: "PUT",
      headers: {
     
        "Content-Type": "multipart/form-data",
        "Authorization": token,
       
      },
      body:apiBody
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {  
        callBackFunction(responseData, responseData.isError);
      })
      .catch(error => {
        console.log("URL:" + apiUrl+URL + ":1222222244444444:", error);
        
        if (error.message == Constants.ERROR_COMETCHAT_LOGOUT) {
          callBackFunction(Constants.ERROR_MESSAGE_COMETCHAT_LOGOUT, true);
        } else if (error.message == Constants.ERROR_NETWORK_REQUEST_FAILED) {
          callBackFunction(Constants.NO_INTERNET, true);
        } else if (typeof error == String(undefined) ) {
          callBackFunction("", true);
        } else {
          callBackFunction(error, true);
        }
      });
  }

  
}

