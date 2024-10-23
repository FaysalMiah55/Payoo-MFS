// show the cash out form
document.getElementById("btn-display-cash-out")
    .addEventListener('click', function(){
        // show the cash out 
        document.getElementById("cash-out").classList.remove("hidden")
        // hide the add money 
        document.getElementById("add-money").classList.add("hidden")
    })

// show the add money form and hide the cash out form
document.getElementById("btn-display-add-money")
    .addEventListener('click', function(){
        console.log("add money clicked");
        // show the add money
        document.getElementById("add-money").classList.remove("hidden")
        // hide the cash out f
        document.getElementById("cash-out").classList.add("hidden")
})