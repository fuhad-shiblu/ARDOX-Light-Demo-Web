let fuhadShiblu_botFormButton = document.querySelector('.fuhadShiblu_botFormButton');
let fuhadShiblu_botFormPassInput   = document.querySelector('.fuhadShiblu_botFormPassInput');
let fuhadShiblu_botFormNameInput   = document.querySelector('.fuhadShiblu_botFormNameInput');

fuhadShiblu_botFormButton.addEventListener('click' , (e)=>{
     e.preventDefault()
     if(fuhadShiblu_botFormNameInput.value == ''){
          alert('Please Enter Your Registered Username')
     }if(fuhadShiblu_botFormPassInput.value == ''){
          alert('Please Enter Your Registered Password')
     }else{
          alert('Login Successfull')
     }
})