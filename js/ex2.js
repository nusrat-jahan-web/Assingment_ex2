function divisionNumber (c) {
    var result =(9* c / 5) + 32
    return result;
    
    
}
var devsionResult = divisionNumber (38);
console.log(devsionResult);

document.getElementById("fahr_1").innerHTML=devsionResult;

// 2
function divisionNumber (c) {
    var result =(9* c / 5) + 32
    return result;
   
}

var devsionResult = divisionNumber (24);
console.log(devsionResult);

document.getElementById("fahr_2").innerHTML=devsionResult;



// 3
function divisionNumber (c) {
    var result =(9* c / 5) + 32
    return result;
    
    
}
var devsionResult = divisionNumber (-1);
console.log(devsionResult);

document.getElementById("fahr_3").innerHTML=devsionResult;



// 2) The array below is the classification of students in a contest. It is ordered from lowest to highest grades.

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 

classification.shift();
console.log(classification); 


var classification =["Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
classification.shift();
console.log(classification); 

var classification =["Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
classification.shift();
console.log(classification); 

document.getElementById("best_students").innerHTML=classification




// 3) Consider the object below:


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
            

// a)
console.log(course.title);
document.getElementById("course_title").innerHTML=course.title


// b)
console.log(course ['categories'][0]);
document.getElementById("main_category").innerHTML=course ['categories'][0];


// c) Create a method to calculate the percentage of 5 stars reviews rounded with no decimal places and show the result below:

function number (num1,num2,num3,num4,num5){
    var sum=num1+num2+num3+num4+num5;
    console.log(sum);
}

number(420,80,33,20,4);

var average=(420/557)*100;
console.log(average);

var roundNumber = Math.round(75.40394973070018);
console.log(roundNumber);

var name ="75";
name +="%";
console.log(name);

document.getElementById("reviews_5_stars").innerHTML=name;


// 4) See the shopping list below:
// .)
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("chocolate");
console.log(shoppingList);


// .)
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);




