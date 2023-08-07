function populate(country1 , states1)
{
    var country = document.getElementById(country1);
    var states = document.getElementById(states1);
    states.innerHTML = " ";
    if(country.value === 'selectcountry')
    {
        state_arr = [];
        return;
    }

if (country.value == 'India') {
    var state_arr = ['ranchi' , 'delhi' , 'banglore'];
} 
else if (country.value == 'Uk') {
    var state_arr = ['England' , 'Scotland' , 'Wales'];
}
else if (country.value == 'Japan'){
    var state_arr = ['Chubu' , 'Tohoku' , 'Kanto'];
}

 for(let select_state of state_arr)
 {
    let newoption = document.createElement("option");
    newoption.innerText =select_state ;
    states.appendChild(newoption);
 }
}