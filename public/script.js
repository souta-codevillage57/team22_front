$(()=>{
    var width=window.innerWidth
    var height=window.innerHeight
    $(".App").css("margin-left",width/2-height*0.295)
    $(".plus").css("right",width/2-height*0.295+20)
    $(".chakra-input").css("width",height*0.58)
    // $(".Article").css({"width":height*0.59*0.95,"padding-left":height*0.59*0.025,"padding-right":height*0.59*0.025})
})