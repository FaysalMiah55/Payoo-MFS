document.getElementById("btn-cash-out")
    .addEventListener('click', function(event){
        event.preventDefault()
        console.log("cash clicked");

        const cashOutValue = document.getElementById("input-cash-out").value
        const cashOutNumber = parseFloat(cashOutValue)
        const cashPin = document.getElementById("input-cash-out-pin").value
        console.log(cashOutValue, cashPin);

        if(cashPin === '123'){
            // cash out
            const balance = document.getElementById("account-balance").innerText
            const balanceNumber = parseFloat(balance)
            
            const newBalance = balanceNumber - cashOutNumber
            console.log(newBalance);
            document.getElementById("account-balance").innerText = newBalance
        }
        else{
            alert("wrong pin! try again")
        }
})