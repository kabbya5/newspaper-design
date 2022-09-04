$(document).ready(function(){
    $(".toggle-bar").click(function(){
        console.log("hello")
        $('.side-bar').toggleClass('mobile-menu');
    });

    // headline change and slider 
    const headlines = $('.headline');
    
    let i = 1;
    setInterval(()=>{
    },1000)
    setInterval(()=>{
        i++;
        const headline = $('.headline.change');
        headline.removeClass('change');

        if(i > headlines.length){
            headlines.first().addClass("change");
            i=1;
        }else{
            headline.next().addClass("change");
        }
    },3000)
    $('.prev').click(function(){
        headline.removeClass('change');
        headline.prev().addClass("change"); 
    });
    $('.next').click(function(){
        headline.removeClass('change');
        headline.next().addClass("change");   
    });
})