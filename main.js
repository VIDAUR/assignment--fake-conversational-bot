

var text1 = document.querySelector(".text1")
var text2 = document.querySelector(".text2")
var text3 = document.querySelector(".text3")
var enterName = document.querySelector(".enterName")
var input = document.querySelector(".myInput")
var lastMessage = document.querySelector(".last-message")



setTimeout(function(){
  text1.style.display="block";
}, 1000 )

setTimeout(function(){
  text2.style.display="block";
}, 2000 )

setTimeout(function(){
  text3.style.display="block";
}, 3000 )

setTimeout(function(){
  enterName.style.display="block";
}, 4000 )


setTimeout(function(){
  input.style.display="block";
 
  	input.addEventListener('keyup',function(event){
	event.preventDefault();
    
	    if (event.keyCode === 13){
	  		
			var	length = input.value.length;

		    if( length < 2){
		      alert("Name must be at least 2 characters")
		      
		      } else{

			      	setTimeout(function(){
			      		if(length < 6){
					      	document.querySelector(".lengthName").textContent = "this is a short name"
					      	document.querySelector(".lengthName").style.display="block"

					    }else {
					      	document.querySelector(".lengthName").textContent = "this is a long name"
					      	document.querySelector(".lengthName").style.display="block"
					    }

			      	}, 500)
				    
			     
					setTimeout(function(){
						 lastMessage.style.display="block"
				    lastMessage.textContent = "Nice to meet you " + input.value;

					},800)      
		    	}
	  	}   	

	})

},4000)