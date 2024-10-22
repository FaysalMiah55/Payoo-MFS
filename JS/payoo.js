
// step-1: set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step-2: prevent default behavior
        event.preventDefault()
        // step-3: get the phone number and the pin number
        const phoneNumber = document.getElementById('phone-number').value
        const pinNumber = document.getElementById('pin-number').value
        console.log(phoneNumber, pinNumber);
        // step-4: validate phone and pin number
        if(phoneNumber==="016" && pinNumber==="123"){
            window.location.href = '/home.html'
        }
        else{
            alert("wrong phone number or pin number")
        }
    })