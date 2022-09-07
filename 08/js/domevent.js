    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover",changePic,false);
    pic.addEventListener("mouseout",originPic,false);
    /*document.addEventListener('click',function() {
      alert("안녕하세요")
    });
    */
   document.addEventListener("click",hello,false);
    
		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }
    function hello() {
      alert("안녕하세요")
    }