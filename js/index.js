$("#showAll").click(function(){
  $(".online").show();
  $(".offline").show();
  $(".notuser").show();
});
$("#showOnline").click(function(){
  $(".online").show();
  $(".offline").hide();
  $(".notuser").hide();
});
$("#showOffline").click(function(){
  $(".online").hide();
  $(".offline").show();
  $(".notuser").hide();
});
$("#showNotUser").click(function(){
  $(".online").hide();
  $(".offline").hide();
  $(".notuser").show();
});

var items = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
for(var x = 0 ; x < items.length; x++ ){
  (function(x){
//console.log(x + ' value of x and term is ' + term);
 $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+items[x], function(data) {
   
   if(data.stream === null){
       $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+items[x], function(data)   {
           if(data.mature !== null){
          //   console.log(term + ' currently in offline');
              $(".row").append('<div class =\"block offline\"> <div id =\"icon\"> <img id=\"logo\" src =\"'+ data.logo + '\"></div> <div id =\"name\">' + data.display_name + '</div> <div id =\"description\"> <a href=\"' +data.url + '\" target=\"_blank\" \"> Offline </a> </div></div>');
             /*
             console.log("offline");
             console.log(data.logo);
             console.log(data.display_name);
             console.log(data.url);
             */
           }
           else{
            // console.log(term + ' currently does not exist');
             $(".row").append('<div class =\"block notuser\"> <div id =\"icon\"> </div> <div id =\"name\"></div> <div id =\"description\">' + items[x]+ ': User does not exist </div></div>');
             
             /*
             console.log("user does not exist");
             */
           }
       });
   }
   else{
    // console.log(items[x] + ' currently in returns fine');
         $(".row").append('<div class =\"block online\"> <div id =\"icon\"> <img id=\"logo\" src =\"'+ data.stream.channel.logo + '\"></div> <div id =\"name\">' + data.stream.channel.display_name + '</div> <div id =\"description\"> <a href=\"' +data.stream.channel.url + '\" target=\"_blank\" data-toggle=\"tooltip\" title=\"' +data.stream.channel.status + '\">'+(data.stream.channel.status).substr(0,50) + '...</div></div>');
       /*
       console.log(data);
       console.log(data.stream.channel.display_name);
       console.log(data.stream.channel.status);
       console.log(data.stream.channel.logo);
       console.log(data.stream.channel.url);
       */
       }
 });
})(x); 
}