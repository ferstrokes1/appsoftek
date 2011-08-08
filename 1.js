(function($){
    var ListView = Backbone.View.extend({
    el: $('body'),
    tweet: $('#tweet_box'),
    follow: $('#follow_box'),
    
        events: {
            'click button#add': 'addItem',
            'click button#tweetadd': 'add_tweet',
            'click button#followadd': 'add_follow'
        },
    
        initialize: function(){
        _.bindAll(this, 'render', 'addItem', 'add_tweet', 'add_follow');
            this.counter = 0;
            this.counter2 = 0;
            this.render();
        },
        
        render: function(){
            $(this.el).append("<h5>TweetBox - Safe the actual Tweets and followers in a boxes -</h5>")
            $(this.el).append("<input type='radio' name='grupo1' value='tweet' checked> Last Tweet <input type='radio' name='grupo1' value='follow' > Followers <br>");
            $(this.el).append("Write a Nickname User: <input type='text' id='input_rules' />")
            $(this.el).append("<button id='add'>Search</button>");
             $(this.el).append("<ul></ul>");
            },
            
            
            addItem: function(){
                var busqueda = $('#input_rules').val();
                //Codigo de prueba
                //  $(this.el).append("<h5><img id='img_prueba+"+ busqueda +"' src='\" + json.profile_image_url + \"' /><input disabled id='para_guardar' value=' \" + json.screen_name + \" ' /> </h5>\"; salida += \"<small>\" + json.description + \"</small><p>\" + json.status.text + \"</p> <button id='tweetadd'>Add in my TweetBox :) </button> ");
             $(this.el).append("<script type='text/javascript' src='http://twitter.com/javascripts/blogger.js'></script>");
            if($('input:radio[name=grupo1]:checked').val() == "tweet"){
                 $(this.el).append("<script type='text/javascript' src='http://api.twitter.com/1/users/show.json?screen_name="+busqueda+"&amp;alt=json-in-script&amp;callback=leerTwitter'></script>");
                 $(this.el).append("<script type='text/javascript'> function leerTwitter(json) { var salida =\"\";  salida += \"<h5><img class='img_tw' id='imagen_tw' src='\" + json.profile_image_url + \"' /><input disabled id='para_guardar' class='txt_tw' value=' \" + json.screen_name + \" ' /> </h5>\"; salida += \"<small id='desc_guardar' class='dsc_tw'>\" + json.description + \"</small><p class='sts_tw' id='status_guardar'>\" + json.status.text + \"</p> <button id='tweetadd' style='float:left; padding:0 30%;'>Add in my TweetBox :) </button> \"; document.getElementById(\"twitter_update_list\").innerHTML = salida; }; </script>"); 
            }else{
                $(this.el).append("<script type='text/javascript' src='http://api.twitter.com/1/users/show.json?screen_name="+busqueda+"&amp;alt=json-in-script&amp;callback=leerTwitter'></script>");
                $(this.el).append("<script type='text/javascript'> function leerTwitter(json) { var salida ='';   salida += '<div class=\"follow_class\" id=\"followers\" > ' + json.followers_count + ' Followers </div> <button id=\"followadd\" style=\"text-align:center; width:100%;\"> Add in my FollowBox :) </button> ';  document.getElementById('twitter_update_list').innerHTML = salida; }; </script>"); 
            }
           
            },
            
            add_tweet: function(){
                 this.counter++;
                  $("<div class=\"caja\" id='micaja"+ this.counter +"'></div>").appendTo('#tweet_box');
                 $('#imagen_tw').appendTo("#micaja"+ this.counter);
                 $('#para_guardar').appendTo("#micaja"+ this.counter);
                 $('#desc_guardar').appendTo("#micaja"+ this.counter);
                 $('#status_guardar').appendTo("#micaja"+ this.counter);
              },
              
            add_follow: function(){
                 this.counter2++;
                 $('#followadd').appendTo("nada");
                  $("<div class=\"caja\" id='micaja1"+ this.counter2 +"'></div>").appendTo('#follow_box');
                 $('#followers').appendTo("#micaja1"+ this.counter2);
              }
        });
    var listView = new ListView();
}
)(jQuery);