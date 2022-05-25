var apiEndPoint = "https://nodeapi.pyther.com/customer";
export var getCustomers = async () =>{
    // fetch is promise
    return fetch(apiEndPoint, {
    			method: 'get',
	    			headers: {
	    			'Content-Type': 'application/json;charset=utf-8'
	  				}
  			  })
          	.then(response => response.json())
          	.then(response => {
                return response;
            }).catch(function(error) {
              console.log(error);
          });
}

export const addCustomer = async (customer) =>{
    return fetch(apiEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}

export const  updateCustomer = async (customer) =>{
    return fetch(apiEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}

export const getCustomerById = async (id) =>{
    return fetch(apiEndPoint + "/"+id, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}

export const deleteCustomer = async (id) =>{
      return fetch(apiEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify({id})
        })
      .then(response => response.json())
      .then(response => {
        return response;
    }).catch(function(error) {
      console.log(error);
    });
}
