
        /* 
        JavaScript Project
        Author : Dipta Saha
        Email : diptasaha.lpu.cse@gmail.com
        Github : https://github.com/diptasahacse
        Website : https://diptasaha.com/
        */
         
//






        //
         function setValue(){
             //backround
             document.getElementById("makeBox").style.backgroundColor = 'rgb(74, 234, 1)';
             


            //Height And Width
           document.getElementById("heightWidthValue").innerText = document.getElementById("heightWidthRangeCounter").value;

            

           //  document.getElementById("makeBox").style.height = document.getElementById("heightWidthRangeCounter").value+"px";
           //  document.getElementById("makeBox").style.width = document.getElementById("heightWidthRangeCounter").value+"px";



           // Width Value
           document.getElementById("widthValue").innerText = document.getElementById("widthRangeCounter").value;
           document.getElementById("makeBox").style.width = document.getElementById("widthRangeCounter").value+"px";
           
           // Height Value
           document.getElementById("hightValue").innerText = document.getElementById("heightRangeCounter").value;
           document.getElementById("makeBox").style.height = document.getElementById("heightRangeCounter").value+"px";
           
           // Border Value
           document.getElementById("borderValue").innerText = document.getElementById("borderRangeCounter").value;
           document.getElementById("makeBox").style.border = document.getElementById("borderRangeCounter").value+"px solid";


           // Border Radius
           document.getElementById("borderRadiusValue").innerText = document.getElementById("borderRadiusRangeCounter").value;
           document.getElementById("makeBox").style.borderRadius = document.getElementById("borderRadiusRangeCounter").value+"px";



           //Box Shadow color
           document.getElementById('boxShadowColorName').innerText = document.getElementById('boxShadowColorValue').value;

           //Box Shadow x
           document.getElementById('xAxisValue').innerText = document.getElementById('xAxisCounter').value;

           //Box Shadow y
           document.getElementById('yAxisValue').innerText = document.getElementById('yAxisCounter').value;


           //Box Shadow spread
           document.getElementById('shadowSpreadValue').innerText = document.getElementById('shadowSpreadCounter').value;

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
            updateCss();
        }
            if(parameter === 'heightwidth'){
                
                document.getElementById("heightRangeCounter").value = document.getElementById("heightWidthRangeCounter").value;
                document.getElementById("widthRangeCounter").value = document.getElementById("heightWidthRangeCounter").value;
                updateCss();

            }
           if(parameter === 'height'){
            
               document.getElementById("hightValue").innerText = document.getElementById("heightRangeCounter").value;
               document.getElementById("makeBox").style.height = document.getElementById("heightRangeCounter").value+"px";
               updateCss();
           }
           if(parameter === 'width'){
            
               document.getElementById("widthValue").innerText = document.getElementById("widthRangeCounter").value;

               document.getElementById("makeBox").style.width = document.getElementById("widthRangeCounter").value+"px";
               updateCss();
               

           }
           if(parameter === 'border'){
            
               document.getElementById("borderValue").innerText = document.getElementById("borderRangeCounter").value;

               document.getElementById("makeBox").style.border = document.getElementById("borderRangeCounter").value+"px solid";
               updateCss();

           }


           if(parameter === 'border radius'){
            
               document.getElementById("borderRadiusValue").innerText = document.getElementById("borderRadiusRangeCounter").value;

               document.getElementById("makeBox").style.borderRadius = document.getElementById("borderRadiusRangeCounter").value+"px";
               updateCss();

           }
           if(parameter === 'boxShadowColor'){
            document.getElementById('boxShadowColorName').innerText = document.getElementById('boxShadowColorValue').value;
            applyBoxShadow();
           }
           if(parameter === 'xAxis'){
            document.getElementById('xAxisValue').innerText = document.getElementById('xAxisCounter').value;
            applyBoxShadow();
           }
           if(parameter === 'yAxis'){
            document.getElementById('yAxisValue').innerText = document.getElementById('yAxisCounter').value;
            applyBoxShadow();
           }
           if(parameter === 'shadowSpread'){
            document.getElementById('shadowSpreadValue').innerText = document.getElementById('shadowSpreadCounter').value;
            applyBoxShadow();
           }

       }
       setValue();
       applyBoxShadow();
       updateCss();
         
       function updateCss(){
        var boxStyle = document.getElementsByClassName('makeBox')[0].getAttribute('style');
        var seperateStyle = boxStyle.split(';')
        seperateStyle.pop(seperateStyle.length-1);
        var inrHtml = '';
        for (let i = 0; i < seperateStyle.length; i++) {
            if(i == seperateStyle.length-1){
                inrHtml+=seperateStyle[i]+';';

            }else{
                inrHtml+=seperateStyle[i]+';<br> ';
            }
        }
        document.getElementById('cssSec').innerHTML = "<pre>{<br>  "+inrHtml+"<br>}</pre>";

    }
    function applyBoxShadow(){
        var xAxis, yAxis, spread, color;
        color = document.getElementById('boxShadowColorValue').value;
        xAxis = document.getElementById('xAxisCounter').value;
        yAxis = document.getElementById('yAxisCounter').value;
        spread = document.getElementById('shadowSpreadCounter').value;
        document.getElementById("makeBox").style.boxShadow = color+' '+xAxis+'px '+yAxis+'px '+spread+'px';
        updateCss();
        

    }
 


       





       
       