		
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}
		var isOpen = false;
		var view = document.querySelector("#view");
		view.addEventListener("click", function(){
			if(isOpen == false){
				document.querySelector("#detail").style.display = "block";
				view.innerHTML = "상세설명 닫기";
				isOpen = true;
			}
			else {
				document.querySelector("#detail").style.display = "none";
				view.innerHTML = "상세설명 보기";
				isOpen = false;

			}
		});

		