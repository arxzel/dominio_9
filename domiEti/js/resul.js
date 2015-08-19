
 			function diagnostico(){
            
        		caracteristicasDefinitorias=document.form1.carDef;
        		
        		factorRelacional=document.form1.facRel;

        		/*var definicion = document.getElementById("definicion").innerHTML;
        		var dominio =document.getElementById("dominio").innerHTML;
        		var clase=document.getElementById("clase").innerHTML;
        		var etiqueta=document.getElementById("etiqueta").innerHTML;*/

        		var definicion = $("#definicion").text();
        		var dominio =$("#dominio").text();
        		var clase =$("#clase").text();
        		var etiqueta =$("#etiqueta").text();
                var titulo =$('#caractRiesgo').text();
                
        		var carDefCheck = [];
        		var facRelCheck = "";
        		var resultado ="<div id='resultados' name='resultados'> ";
       		 	
                
            		for (i=0;i<caracteristicasDefinitorias.length;++i)
            		{
                    	if (caracteristicasDefinitorias[i].checked)
                    	{
                            carDefCheck.push(caracteristicasDefinitorias[i].value);
                    	}
            		}

            		for (i=0;i<factorRelacional.length;++i)
            		{
                    	if (factorRelacional[i].checked)
                    	{
                            facRelCheck=factorRelacional[i].value;
                    	}
            		}

                    if (carDefCheck.length >2) {

            		      resultado+="<h3><p class='bgreen'> "+etiqueta+" </p> "+" <p class='bred'> R.C </p> "+"<p class='breen'> "+facRelCheck+" </p></h3><br>";

            		      resultado+="<br><h4>"+
            			     "<p class='bgray'>"+dominio+"</p>"+
            			     "<p class='bblue'>"+definicion+"</p>"+
            			     "<p class='borange'>"+clase+"</p></h4><br>"+
                                "<h3 class='bred'>"+titulo+"</h3>";

                            resultado+="<ul>"

            		      for(i=0; i<carDefCheck.length;i++){
               		       resultado +="<li><p class='bgreen'>"+carDefCheck[i]+"</p></li>";
            		      }
                            resultado+="</ul>"

                            resultado+='<a href="javascript:history.go(-1)" data-role="button">Regresar</a>'

            		      resultado+=" </div> ";

            	       $("#resultados").replaceWith(resultado);
           
            	       window.location.href="#ejemplo";
                }
                else{
                    alert("Ups, selecciona mas de 2 caracteristicas definitorias o factores de riesgo.");
                }
    		}