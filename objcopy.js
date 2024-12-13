import {obj2 } from './shallowcopy.js';
import {obj3 } from './deepcopy.js';

let obj1 ={
    name : "Amit"
    };
    
    let user = obj1; //location get copied can call copy through reference
    user.name = "Singh";
    {   
    console.log(obj1);
    }

// solution is : {name: 'Singh'}


	
// let x = "10";
// let y = x;

// y = "12";

// console.log(x); 

//solution: 10