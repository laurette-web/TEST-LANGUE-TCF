    

      var second=0;
      function displaysecond(){
        second+=1;
        document.getElementById("seconddisplay");
      }
      setInterval(displaysecond,1000);
      function redirectpage(){
        if( second < 7){
          window.location.href=" inscrire.html"
        }
        else if (second > 7){
          window.location.href=" inscrire2.html"
        }
      }
      
    
