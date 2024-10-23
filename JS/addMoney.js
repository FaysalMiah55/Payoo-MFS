// add money to the account
/*
step-1: add event handler and prevent page reload after form submit
step-2: get money to be added to the account balance and also get pin number
step-3: verify the pin number (not the right way)
step-4: get the current balance
step-5: add addMoneyInput with balance
step-6: update the balance in the UI/DOM
*/

// step-1
document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault();

        // step-2
        // get money provided
        const addMoneyInput = document.getElementById("input-add-money").value
        console.log(addMoneyInput);
        // get pin provide
        const pinNumberInput = document.getElementById('input-pin-number').value
        console.log(addMoneyInput, pinNumberInput);

        // step-3
        if(pinNumberInput === "123"){
            console.log("adding money to the account");

            // step-4
            const balance = document.getElementById("account-balance").innerText
            console.log(balance);

            // step-5
            const addMoneyNumber = parseFloat(addMoneyInput)
            const balanceNumber = parseFloat(balance)
            const newBalance = addMoneyNumber + balanceNumber
            console.log(newBalance);

            // step-6
            document.getElementById("account-balance").innerText = newBalance
        }
        else{
            alert('Failed to add money! please try again')
        }
    })


