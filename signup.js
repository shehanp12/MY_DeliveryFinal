//signup form

const signupForm =document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
e.preventDefault();


//get user infor

const email= signupForm['orangeForm-email'].value;
const password=signupForm['orangeForm-pass'].value;

auth.createUserWithEmailAndPassword(email,password).then(cred=>{
    console.log(cred.user);
    swal("Good job!", "You signup our page!", "success")
  signupForm.reset();
  
  
}); 

});






const loginForm =document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const email=loginForm['defaultForm-email'].value;
    const password=loginForm['defaultForm-pass'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>{
      console.log(cred.user);
      loginForm.reset();
      swal("Good job!", "You logged in !", "success")     
    
   
    })

})



const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
           console.log('user signed out');
           swal("Good job!", "You logged out !", "success")    
    });
});







