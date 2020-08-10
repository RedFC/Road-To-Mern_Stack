const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function ShowError(input,message){
    const FormParent = input.parentElement;
    FormParent.className = 'form-control error';
    const messageArea = document.querySelector('small');
    messageArea.innerText = message;
}

function ShowSuccess(input) {

    const FormParent = input.parentElement;
    FormParent.className = 'form-control success';   

}

// Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach((input) => {
        if ( input.value === '' ) {
            ShowError(input,'Required Field');
            checkLength(5,15,username);
        } else {
            showSuccess(input);
        }
    });
}

function checkLength(min,max,input) {
    
    if(input.value.length < min){
        ShowError(input,`Min length should be ${min}`);
    }
    else if(input.value.length > max){
        ShowError(input,`Max length should be ${max}`);
    }else{
        ShowSuccess(input);
    }

}


form.addEventListener('submit',function (e) {
    
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    
});

