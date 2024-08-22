// Make a person exercise//
var Person = function(firstAndLast) {
    var array = firstAndLast.split(" ");

   this.getFirstName = function(){
    return array[0];
   };

   this.getLastName = function(){
    return array[1];
   };

   this.getFullName = function(){
    return array[0] + " " + array[1];
   };

   this.setFirstName = function(first){
    array[0] = first;
   };

   this.setLastName = function(last){
    array[1] = last;
   };

   this.setFullName = function(firstAndLast){
    var arraySplit = firstAndLast.split(" ");
    this.setFirstName(arraySplit[0]);
    this.setLastName(arraySplit[1]);
   };

};

var yusef = new Person('Yusef Carr');
yusef.setFullName('Dylan Cruise');
yusef.getFullName();



//Search and Replace exercise//

function myReplace(str, before, after) {

    if(before.charAt(0)===before(0).toUpperCase()){
        str = str.replace(before,after.charAt(0).toUpperCase(0) +after.slice(1));
    } else {
     
    str= str.replace(before,after);
    }
     return str;
}

myReplace("He is sleeping on the couch", "Sleeping", "sitting");


//Pig Latin exercise//

function translate(str) {
  var letters = str.split('');
  var vowelRegex =/[aeiou]/;
    
  if(vowelRegex.test(letters[0])){
    return letters.join('') + "way";
  }

  while(true){
    if(vowelRegex.test(letters[0])){
        letters.push(lettrs.splice(0,1));
    } else {
        break;
    }
  }

  str= letters.join('') + "ay";
  
    return str;
}

translate("consonant");