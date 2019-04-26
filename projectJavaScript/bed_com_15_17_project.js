function submitMessage() {
    var x = document.forms["myForm"]["searchText"].value;
    if (x == "") {
      alert("please type what you want to search");
      return false;
    }
    else{
      alert("searching....please wait!!")
      return true;
    }
  }
  
  function signup()
  {
  var username=document.getElementById("usernameId").value;
  var  email = document.getElementById('emailId').value;
  var pnumber = document.getElementById('phoneNumber').value;
  var nationality =document.getElementById('nationalityId').value;
  var date = new Date(document.getElementById('Date').value);


  //storing item by item

  localStorage.setItem('Username',username);
  localStorage.setItem('Email',email);
  localStorage.setItem('Phone number',pnumber);
  localStorage.setItem('nationality',nationality);
  localStorage.setItem('Date',date);
  if (username === localStorage.getItem('Username')&& date === localStorage.getItem('Date')) {

      document.getElementById("converted_url").innerHTML=" You are already a member";
      form.reset();
    }
    else{
      var name = localStorage.getItem('Username');
      var p = localStorage.getItem('nationality');
      var DoB= localStorage.getItem('Date');

             
     document.getElementById("statusId").innerHTML= "Dear ,"+name +" you have succesfully signed up our item "; 

     form.reset(); 
    
    }


}
