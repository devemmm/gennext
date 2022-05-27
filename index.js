function populate(se1,se2){
  var se1=document.getElementById(se1);
  var se2=document.getElementById(se2);

  se2.innerHTML="";

  if(se1.value == "kigali")
  {
    var optionArray =['gasabo|Gasabo','kicukiro|Kicukiro','nyarugenge|Nyarugenge'];
  }
   else if(se1.value == "northern"){
    var optionArray =['musanze|Musanza','rurindo|Rurindo','burera|Burera','gakenke|Gakenke','gicumbi|Gicumbi'];
  }
  else if(se1.value == "southern"){
    var optionArray =['gisagara|Gisagara','huye|Huye','kamonyi|Kamonyi','muhanga|Muhanga','nyamagabe|Nyamagabe'];
  }
  else if(se1.value =="eastern"){
    var optionArray=['gatsibo|Gatsibo','kayonza|Kayonza','kirehe|Kirehe','ngoma|Ngoma','nyagatare|Nyagatare','rwamagana|Rwamagana'];
  }
  else if(se1.value == "western"){
    var optionArray=['karongi|Karongi','nyabihu|Nyabihu','nyamasheke|Nyamasheke','rubavu|Rubavu','rusizi|Rusizi','rustiro|Rutsiro'];
  }

  for (var option in optionArray ){
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option"); 
    
    newoption.value = pair[0];
    newoption.innerHTML=pair[1];
    se2.options.add(newoption);

  }
}