// var obj = new Calculator();
// var x = obj.add(10, 20);
// alert(x);
var calcFun =(function(){
    
    // var obj = new Calculator();
    // var x = obj.add(calcValue1, calcValue2);
    // alert(x);
    //var calcMethod= 
    // alert(input1);
    // alert(input2);
    // console.log(input1);
});

$(".oprators .plsq").on("click", function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

$("#cacBtn").on("click", function(){
    var operationType = $(".oprators button.active").val();
    if(operationType==1){       
        var input1=document.getElementById("input1").value;
        var input2=document.getElementById("input2").value;
        var calcValue1=parseInt(input1);
        var calcValue2=parseInt(input2);
        var obj = new Calculator();
        var x = obj.add(calcValue1, calcValue2);
        $(".result").text(x);
    } else if(operationType==2){
        var input1=document.getElementById("input1").value;
        var input2=document.getElementById("input2").value;
        var calcValue1=parseInt(input1);
        var calcValue2=parseInt(input2);
        var obj = new Calculator();
        var x = obj.substruct(calcValue1, calcValue2);
        $(".result").text(x);
    }else if(operationType==3){
        var input1=document.getElementById("input1").value;
        var input2=document.getElementById("input2").value;
        var calcValue1=parseInt(input1);
        var calcValue2=parseInt(input2);
        var obj = new Calculator();
        var x = obj.multiply(calcValue1, calcValue2);
        $(".result").text(x);
    }else if(operationType==4){
        var input1=document.getElementById("input1").value;
        var input2=document.getElementById("input2").value;
        var calcValue1=parseInt(input1);
        var calcValue2=parseInt(input2);
        var obj = new Calculator();
        var x = obj.division(calcValue1, calcValue2);
        $(".result").text(x);
    }
    
});




