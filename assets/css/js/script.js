$(document).ready(function() {
 $('#button').click(function(){
   if ((parseInt($('#firstScore').val(),10)>20) || (parseInt($('#firstScore').val(),10)<0)){
     alert('Tu as du te tromper à la première note');
   }
   else {
     var firstScore = parseInt($('#firstScore').val(),10);
   }
   if ((parseInt($('#secondScore').val(),10)>20) || (parseInt($('#secondScore').val(),10)<0)){
     alert('Tu as du te tromper à la deuxième note');
   }
   else {
     var secondScore = parseInt($('#secondScore').val(),10);
   }
   if ((parseInt($('#thirdScore').val(),10)>20) || (parseInt($('#thirdScore').val(),10)<0)){
     alert('Tu as du te tromper à la troisième note');
   }
   else {
     var thirdScore = parseInt($('#thirdScore').val(),10);
   }
   if ((parseInt($('#fourthScore').val(),10)>20) || (parseInt($('#fourthScore').val(),10)<0)){
     alert('Tu as du te tromper à la quatrième note');
   }
   else {
     var fourthScore = parseInt($('#fourthScore').val(),10);
   }
   if ((parseInt($('#lastScore').val(),10)>20) || (parseInt($('#lastScore').val(),10)<0)){
     alert('Tu as du te tromper à la dernière note');
   }
   else {
     var lastScore = parseInt($('#lastScore').val(),10);
   }
   var result = (firstScore + secondScore + thirdScore + fourthScore + lastScore)/5;
   if ((result>=0) && (result<10)){
     alert(result + ' /20 : C\'est quand même pas terrible!');
   }
   else if ((result>=10) && (result<13)) {
     alert(result + ' /20 : Au moins c\'est au-dessus de la moyenne');
   }
   else if ((result>=13) && (result<16)) {
     alert(result + ' /20 : Tu pourrais faire mieux quand même');
   }
   else if ((result>=16) && (result<20)) {
     alert(result + ' /20 : Ouai c\'est pas mal');
   }
   else if (result==20) {
     alert(result + ' /20 : A mon avis, tu mens');
   }
   else {
     alert('A mon avis tu t\'es trompé quelque part');
 });
});
