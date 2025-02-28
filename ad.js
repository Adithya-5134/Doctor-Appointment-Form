const form=document.getElementById("form2");
const submit=document.getElementById('suu');
const username=document.getElementById("name1");
const email=document.getElementById("email1");
const password=document.getElementById("password1");

form.addEventListener('submit',function(event){
    event.preventDefault();
   
    if(checkname() && checkemail() && checkpassword()){
        form.submit()
        return true;
    }
    else{
        // alert('Please fill in all requirements fields.')
        return false;
    }
    
});

function checkname(){
    const usernameValue=username.value.trim();
    

    
    // -----name---
    if(usernameValue==''){
        setError(username,'Username Cannot Be Empty');
        return false;
    
    }
    else if(usernameValue=='adithya'){
        setSuccess(username)
        return true;
    }

    else{
        setError(username,'Enter the authorized username');
        return false;
    }
}


function checkemail(){
        
    const emailValue=email.value.trim();
    
    if(emailValue==''){
        setError(email,'Email Cannot Be Empty')
        return false;
       ;
    }
    else if(emailValue=='ecadithya12@gmail.com'){
        setSuccess(email);
        return true;
    }
    else{
        setError(email,'Enter the authorized email');
        return false;
    }


   }

   function checkpassword(){
        
    const passwordValue=password.value.trim();
    
    if(passwordValue==''){
        setError(password,'Password Cannot Be Empty')
        return false;
       ;
    }
    else if(passwordValue=='12345'){
        setSuccess(password);
        return true;
    }
    else{
        setError(password,'Enter the authorized password');
        return false;
    }


   }

   function setError(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-content error';
    small.innerText=message;
    
    

}

function setSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-content success';
    
    
}