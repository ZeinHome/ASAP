$(".see-more").nextUntil(".see-less").wrapAll("<div class='see-more-content'></div>");
        $(".see-less").hide();
        var count= 1
        /*
        $(".see-more-content").each(function(){
            var count= count+1;
            $(this).data("count",count);
            console.log(count);
        });
        */
        
        $(".see-more-content").slideUp(0);
        
        
        
        $(".see-more").click(function(){
            
            $(".see-more-content").slideToggle();
            $(".see-more").hide();
            $(".see-less").show();
            
        });
        $(".see-less").click(function(){
            $(".see-more-content").slideToggle();
            $(".see-less").hide();
            $(".see-more").show();
        });