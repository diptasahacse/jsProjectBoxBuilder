
         function setValue(){
             


            //Height And Width
           document.getElementById("heightWidthValue").innerText = document.getElementById("heightWidthRangeCounter").value;

            

           //  document.getElementById("makeBox").style.height = document.getElementById("heightWidthRangeCounter").value+"px";
           //  document.getElementById("makeBox").style.width = document.getElementById("heightWidthRangeCounter").value+"px";



           // Width Value
           document.getElementById("widthValue").innerText = document.getElementById("widthRangeCounter").value;
           document.getElementById("makeBox").style.height = document.getElementById("widthRangeCounter").value+"px";
           
           // Height Value
           document.getElementById("hightValue").innerText = document.getElementById("heightRangeCounter").value;
           document.getElementById("makeBox").style.height = document.getElementById("heightRangeCounter").value+"px";
           
           // Border Value
           document.getElementById("borderValue").innerText = document.getElementById("borderRangeCounter").value;
           document.getElementById("makeBox").style.border = document.getElementById("borderRangeCounter").value+"px solid";


           // Border Radius
           document.getElementById("borderRadiusValue").innerText = document.getElementById("borderRadiusRangeCounter").value;
           document.getElementById("makeBox").style.borderRadius = document.getElementById("borderRadiusRangeCounter").value+"px";

       };
       function change(parameter){
        if(parameter === 'heightWidth'){
            document.getElementById("heightWidthValue").innerText = document.getElementById("heightWidthRangeCounter").value;
            //height
            document.getElementById("hightValue").innerText = document.getElementById("heightWidthRangeCounter").value;
            document.getElementById("makeBox").style.height = document.getElementById("heightWidthRangeCounter").value+"px";
            //width
            document.getElementById("widthValue").innerText = document.getElementById("heightWidthRangeCounter").value;
            document.getElementById("makeBox").style.width = document.getElementById("heightWidthRangeCounter").value+"px";

            //call 
            change('heightwidth');
        }
            if(parameter === 'heightwidth'){
                document.getElementById("heightRangeCounter").value = document.getElementById("heightWidthRangeCounter").value;
                document.getElementById("widthRangeCounter").value = document.getElementById("heightWidthRangeCounter").value;
                

            }
           if(parameter === 'height'){
               document.getElementById("hightValue").innerText = document.getElementById("heightRangeCounter").value;
               document.getElementById("makeBox").style.height = document.getElementById("heightRangeCounter").value+"px";
           }
           if(parameter === 'width'){
               document.getElementById("widthValue").innerText = document.getElementById("widthRangeCounter").value;

               document.getElementById("makeBox").style.width = document.getElementById("widthRangeCounter").value+"px";
               

           }
           if(parameter === 'border'){
               document.getElementById("borderValue").innerText = document.getElementById("borderRangeCounter").value;

               document.getElementById("makeBox").style.border = document.getElementById("borderRangeCounter").value+"px solid";

           }


           if(parameter === 'border radius'){
               document.getElementById("borderRadiusValue").innerText = document.getElementById("borderRadiusRangeCounter").value;

               document.getElementById("makeBox").style.borderRadius = document.getElementById("borderRadiusRangeCounter").value+"px";

           }

       }
       setValue();

      





       
       