$(document).ready(function(){


		$("#action").click(function(){

			var numberligne = $("#axeX").val();
			var numbercol = $("#axeY").val();
			
			var jeu = " "

			for (var i = 0; i < numberligne; i++) {
				jeu = "<tr>"
				for (var j = 0; j < numbercol; j++) {
    				jeu = jeu + "<td id = '"+[i]+[j]+"'>a</td>"
    			}
	    	   	
	    	   	jeu = jeu + "</tr>"

			$("table").append(jeu);

			}
			
		});

		$("#defoncage").click(function(){

			
			var fourmi ="<p>#</p>"
			var fourminumber = $("#pondeuse").val();
			var fourmialeatoire = Math.floor(Math.random()* 30 );

			for (var i = 0; i < fourminumber; i++) {

				$("#fourmialeatoire").append(fourmi)
			console.log(fourmialeatoire);
				
			}

		});



























});