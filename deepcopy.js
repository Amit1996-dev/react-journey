//below code is for deep-copy
let obj3 ={
    name : 'Amit',
    address:{
    city:'kolkata',
    state:'W-Bengal'
    }
};
    
let user =JSON.parse(JSON.stringify(obj3)); //converted the object to sring by doing stringify and 
// then converted the string to obj by JSON.parse

user.address.city = "Howrah";
{
console.log("object is ",obj3);
console.log("user is ",user);
}

export {obj3};