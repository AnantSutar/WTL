function validatealphanum(){
	alert("ss");
	var a = document.myform.firstname.value;
	var b = document.myform.lastname.value;
	if(a.match(/\d+/g)!=null & b.match(/\d+/g)!=null){
		alert("Name should not contain a number");
	}
	}
