const signupForm =document.querySelector('#modal-signup');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
    db.collection('cafes').add({
      

      
        fname: signupForm.fname.value,
      
        address:signupForm.address.value,
      /*   address2:signupForm.address2.value,
        */
       district:signupForm.district.value,
       zip:signupForm.zip.value,
       checkbox:signupForm.checkbox.value,
       paymentMethod:signupForm.paymentMethod.value,
       nameoncard:signupForm.nameoncard.value,
       creditcardnum:signupForm.creditcardnum.value,
       expire:signupForm.expire.value,
       cv:signupForm.cvv.value,
       email:signupForm.email.value


       
    });

    signupForm.fname.value = '';
    signupForm.address.value='';
    signupForm.district.value='';
    signupForm.zip.value='';
    signupForm.checkbox.value='';
    signupForm.paymentMethod.value=''
    signupForm.creditcardnum.value='';
    signupForm.expire.value='';
    signupForm.cvv.value='';
    signupForm.email.value='';
    





   /*  signupForm.address2.value='' */
   
 
   
});