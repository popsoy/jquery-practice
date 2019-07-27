$(document).ready(function(){

  
    $("#div1").fadeIn(1500);
    $("#div2").fadeIn(3000);
    $("#div3").fadeIn(6000);
    $(".cimage").hover(
        function(){$(this).animate({width: "100%", height:"70%"}, 300);},
        function(){$(this).animate({width: "100%", height:"60%"}, 1000);}
    );

    setInterval(function(){
        $(".bbox1")
        .delay(500)
        .animate({width: "300px"})
        .animate({height: "300px"})
        .animate({marginLeft: "400px"})
        .animate({borderWidth: "10px"})
        .animate({opacity: 0.5})
        .delay(500)
        .animate({opacity: 1})
        .animate({borderWidth: "5px"})
        .animate({height: "100px"})
        .animate({width: "100px"})
        .animate({marginLeft: "950px"})
        .delay(500)
        .animate({opacity: 1})
        .animate({borderWidth: "10px"})
        .animate({height: "300px"})
        .animate({width: "300px"})
        .delay(500)
        .animate({marginLeft: "400px"})
        .animate({opacity: 0.5})
        .animate({borderWidth: "10px"})
        .animate({height: "100px"})
        .animate({width: "100px"})
        .animate({marginLeft: "0px"});
    },500);

  
   
   
    
    



 
    $("#btn1").click(()=>{
      $("p").toggle();
    });

    $("#flip").click(()=>{
        $("#panel").slideToggle("slow");
      });

    $("#btn2").click(()=>{
        $("#formfade").fadeToggle("slow");
    });

    $("#btn3").click(()=>{
        var testString = [ "<pre>Test line 1\n", "line 2\n", "line 3</pre>" ]; 
        $("ol").append(testString.join(''));
    });

    $(".input1").focus(function(){
        $(this).addClass("bg-danger");
    });
    $(".input1").blur(function(){
        $(this).removeClass("bg-danger");
    });


  });


 