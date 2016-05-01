$(document).ready(function() {
    $(".addition").click(function() {
        var add1= parseInt($("#num1").val());
        var add2= parseInt($("#num2").val());
        var sum = add1+add2;
        $(".answer").html("Your sum is"+" "+ sum);
    });
    $(".subtraction").click(function() {
        var sub1= parseInt($("#num1").val());         var sub2= parseInt($("#num2").val());
        var difference = sub1-sub2;
        $(".answer").html("Your difference is"+" "+ difference);
    });
    $(".multiplication").click(function() {
        var mul1= parseInt($("#num1").val());         var mul2= parseInt($("#num2").val());
        var product = mul1*mul2;
        $(".answer").html("Your product is"+" "+ product);
    });
    $(".division").click(function() {
        var div1= parseInt($("#num1").val());         var div2= parseInt($("#num2").val());
        var quotient = div1/div2;
        $(".answer").html("Your quotient is"+" "+ quotient);
    });
 });
   
