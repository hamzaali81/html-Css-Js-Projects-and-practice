const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input,message){
    console.log(input);
    const small = document.querySelector('small');
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = "form-control error";
    small.innerText = message
    
}
function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
  

function checkField(inputArr){
    console.log('inputArr',inputArr);

    let isRequired = false;
    inputArr.forEach((el,i)=>{
        console.log(el);
        if(el.value===''){
            console.log(inputArr);
            errorForm(inputArr,'Required field is missing')
            isRequired = true;

    }
    else{
        sucessForm(el);
        el.value = '';

    }
    }) 
    console.log(checkValue);
}

function checkLength(input,min,max){
console.log(input);
  if(input.value.length < min){
      showError(input)
  }
  else if(input.value.length > max){
       showError(input)
  }
  else {
      showSucess(input)
    //   if(input.value.length === ){

    //   }
  }
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())){
        showSucess(input)
    }
    else{
        showError(input,'email is not valid')
    }
}

function lengthMatch(p1,p2){
      console.log(p1.value,p2.value);
      if(p1.value !== p2.value){
          showError(p2,'Password not match')
      
        }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!checkField[username,email,password,password2]){
        validateEmail(email)
        checkLength(username,3,15);
        checkLength(password,6,25);
        lengthMatch(password,password2)
    }

})