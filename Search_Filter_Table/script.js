const arr=[{name:'Satish',age:25,State:'Maharastra'},
           {name:'Summit',age:26,State:'Karnatak'},
           {name:'Rakesh',age:24,State:'Bengal'}]

function showDetails(arrDetails)
{
    let tableBody=document.getElementById('stuDetails');
        tableBody.innerHTML='';     //is used to clear the content of a table body element.
    
    arrDetails.forEach((ele)=>{
        let tr=document.createElement('tr');
        
       // console.log(tableBody);
        for(const [key,value] of Object.entries(ele))
        {
            td=document.createElement('td');
            td.innerText=value;
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
      //  debugger;
    })
    
};
showDetails(arr);

const searchFun= () => {
    let filterDetails=document.getElementById("myInput").value.toUpperCase();
    if(!filterDetails)
    {
        showDetails(arr);
        return;
    }
    const cloneARR=[];
    arr.forEach((ele)=>{
        for(const [key,value] of Object.entries(ele))                    // Object.entries(ele) to get an array of the object's [key, value] pairs,
        {                                                                // and then we loop through the array using a for...of loop 
            //debugger;
            if(value.toString().toUpperCase().includes(filterDetails))
            {
                cloneARR.push(ele);
                break;
            }
        }
    })
    showDetails(cloneARR);
}



























// // undefined
// let firstName;
// console.log(typeof firstName);

// // Null 
// let myVariable = null;
// console.log(typeof myVariable);  // bug in js

// //BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 12n;

// console.log(myNumber + sameMyNumber);

// Booleans and comparison operator

// let a = 4 ;
// let b = 4 ;
// let c = "4" ;
// console.log(a>=b);

// console.log(a==c);
// console.log(a===c);


// If else statement

// Truthy Values :  abc, 1 , -1, " " (having space in quote)
// Falsy Values :  0, false, null, undefined, ""
// let age = -1;
// if(age)
// {
//     console.log("Trueee");
// }
// else
// {
//     console.log("Falseee");
// }

// do while loop 
let i=10;
do{
    i++;
    console.log("print print")
}while(i<=9)















