let obj2 ={
    name : "Amit"
    };
    
    let user = Object.assign({},obj2); // or -- let user = (...obj);
    user.name = "Singh";
	{
	console.log("object is :",obj2);
	console.log("user is :",user);
    }

    export {obj2};

