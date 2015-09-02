
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
                
	    var carDefCheck=[];

	    var facRelCheck="";
	    var resultado ="<div id='resultados' name='resultados'> ";

        //Caso de que no sea un array(sólo exista un radiobutton), el opcion.length 
        //no existirá y se le trata de manera individual
        //para saber si está marcado o no
        if (!(caracteristicasDefinitorias.length)) { 
        //El que este seleccionado devuelve su valor 
            if (caracteristicasDefinitorias.checked) { 
                carDefCheck.push(caracteristicasDefinitorias.value);
            } 
        } 
        //En caso de que haya varios radiobuttons procedemos a recorrerlos
        else{
            for (i=0;i<caracteristicasDefinitorias.length;++i){
                if (caracteristicasDefinitorias[i].checked){
                    carDefCheck.push(caracteristicasDefinitorias[i].value);
                }
            }
        }                    


        //Caso de que no sea un array(sólo exista un radiobutton), el opcion.length 
        //no existirá y se le trata de manera individual
        //para saber si está marcado o no
        if (!(factorRelacional.length)) { 
        //El que este seleccionado devuelve su valor 
            if (factorRelacional.checked) { 
                facRelCheck = factorRelacional.value;
            } 
        } 
        //En caso de que haya varios radiobuttons procedemos a recorrerlos
        else{
            for (i=0;i<factorRelacional.length;++i){
                if (factorRelacional[i].checked){
                    facRelCheck=factorRelacional[i].value;
                }
            }
        }


            		
        if  (carDefCheck.length >2 ){
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
        else if (caracteristicasDefinitorias.length<3 && carDefCheck.length == caracteristicasDefinitorias.length) {

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
            alert("Ups, selecciona mas de 2 caracteristicas definitorias y 1 factor de riesgo o relacional.");
        }

	}