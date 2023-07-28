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
