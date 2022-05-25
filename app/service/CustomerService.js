let  customers = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "First Item",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Vivek",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Rama",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    }
  ];

  export const getCustomers = () =>{
      return customers;
  }
  
  export const addCustomer = (customer) =>{
    customers.push(customer);
}
export const delCustomer = ({id}) =>{
    customers = customers.filter((item)=>(item.id !== id))
}  

export const getCustomerById = (id) =>{
  let temp = customers.filter((item)=>(item.id == id));
  return temp[0];
}
export const updateCustomer = (customer) =>{
    let temp = customers.filter((item)=>(item.id === customer.id))
    if(temp.length > 0){
        temp[0].name = customer.name;
        temp[0].email = customer.email;
        temp[0].phone = customer.phone;
        temp[0].address = customer.address;
    }
}  