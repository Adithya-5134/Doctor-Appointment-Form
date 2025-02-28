const form=document.getElementById("form1");
const username=document.getElementById("name1");
const number=document.getElementById("num1");
const dateob=document.getElementById("dob1");
const street=document.getElementById("street1");
const city=document.getElementById("city1");
const state=document.getElementById("state1");
const zipcode=document.getElementById("zipcode1");
const email=document.getElementById("email1");
const treatment=document.getElementById("services1");
const apt=document.getElementById("dt");
const submit=document.getElementById('suuu')





form.addEventListener('submit',function(event){
    event.preventDefault();
   
    if(checkname() && checknumber() && checkdob() && checkstreet() && checkcity() && checkstate() && checkpin() && checkemail() && checktreatment() && checkappointment()){
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
    else  {
        setSuccess(username)
        return true;
       ;
        
        
    }
}
    function checknumber(){
        
        const numberValue=number.value.trim();
       
        if(numberValue==''){
            setError(number,'Number Cannot Be Empty');
            return false;
            
        }
        else if(numberValue.length>10){
            setError(number,'Number should not contain more than 10numbers');
            return false;
        }
        else if(numberValue.length<10){
            setError(number,'Number should not contain less than 10numbers');
            return false;
        }
        else{
            setSuccess(number);
            return true
           ;
        }
    }

    // -----number----
   

    // ---dob----
       function checkdob(){
        
        const dateobValue=dateob.value.trim();
        
        if(dateobValue==''){
            setError(dateob,'Date Cannot Be Empty')
            return false;
           ;
        }
        else{
            setSuccess(dateob);
            return true;
        }
       }
    
      function checkstreet(){
        
        const streetValue=street.value.trim();
       
        if(streetValue==''){
            setError(street,'Street Address Cannot Be Empty')
            return false;
           ;
        }
        else{
            setSuccess(street);
            return true;
            

        }
      }
    // ---street---
    
    // ---city---
      function checkcity(){
       
        const cityValue=city.value.trim();
       
        if(cityValue==''){
            setError(city,'City Cannot Be Empty');
            return false;
        }
        else{
            setSuccess(city);
            return true;
        }
      }
      
      function checkstate(){
       
        const stateValue=state.value.trim();
        
        if(stateValue==''){
            setError(state,'State Cannot Be Empty');
            return false;
        }
        else{
            setSuccess(state)
            return true;
        }
      }
    // ---state---
    
    // ---pincode---

    function checkpin(){ 
        
        const zipcodeValue=zipcode.value.trim();
        

        if(zipcodeValue==''){
            setError(zipcode,'Pincode Cannot Be Empty');
            return false;
        }
        else{
            setSuccess(zipcode);
            return true;
        }
    }
    
    // ----email---
    function checkemail(){
       
        const emailValue=email.value.trim();
       
        if(emailValue==''){
            setError(email,'Email Cannot Be Empty');
            return false;
        }
        else if(!isEmail(emailValue)){
            setError(error,'Not a valid Email')
            return false;
        }
        else{
            setSuccess(email);
            return true;
        }
    }
   
    // ----treatment---
     function checktreatment(){
       
        const treatmentValue=treatment.value.trim();
        
        if(treatmentValue=='default'){
            setError(treatment,' Please Select a Treatment');
            return false;
        }
        else{
            setSuccess(treatment)
            return true;
        }
     }
    

    // ---Appointment---
    function checkappointment(){
        
        const aptValue=apt.value.trim();
        if(aptValue==''){
            setError(apt,'Appointment Time Cannot Be Empty');
            return false;
        }
        else{
            setSuccess(apt)
            return true;
        }
    
    }
    
    // else if(usernameValue!=='' && numberValue!=='' && dateobValue!=='' && streetValue!=='' && cityValue!=='' &&stateValue!=='' && zipcodeValue!=='' && emailValue!=='' && treatmentValue!=='default' && aptValue!=='' ){
    //     setSuccess();
    //     return true;


    // }


    // else{
    //     return true;
    // }








function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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