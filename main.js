 name_of_the_student_array = [];
 function submit(){
    var display_student_array =[];
for (var j = 1; j <= 4; j++)
 {
    var name = document.getElementById("name_of_the_student_"+j).value;
    console.log(name);
    name_of_the_student_array.push(name);
 }
 console.log(name_of_the_student_array);
 var length = name_of_the_student_array.length;
 console.log(length);
 for (k = 0; k < length; k++)
  {
    display_student_array.push("<h4>NAME:"+name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array);
  }
   console.log(display_student_array);
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;
   var r = display_student_array.join(" ");
   console.log(r);
   document.getElementById("display_name_without_commas").innerHTML=r;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
 }

 function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display = [];
    var length = name_of_the_student_array.length;
 console.log(length);
 for (k = 0; k < length; k++)
  {
    display.push("<h4>NAME:"+name_of_the_student_array[k]+"</h4>");
    console.log(display);
  }
   console.log(display);
   var r = display.join(" ");
   console.log(r);
   document.getElementById("display_name_without_commas").innerHTML=r;
 }