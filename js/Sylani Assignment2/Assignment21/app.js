
//1.Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

// var firstname=prompt("Enter first Name");
// var lastname=prompt("Enter last Name");

// document.write(firstname+" "+lastname)


// 2.Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var favoritePhone=prompt("Enter the Fravorite mobile Phone");
// document.write("My Fravorite Phone is: "+favoritePhone +" Length of string "+favoritePhone.length);



//3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


// var letter="Pakistan"

// var a=letter.indexOf("n");
// document.write("String of Pakistani and Index of'n':"+a);

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var letter="Hello World"

// var a=letter.lastIndexOf("l");
// document.write("Hello World last index of "+a);


//5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word="Pakistan";

// var a=word.charAt(3);
// document.write("String: "+word+" Character at index 3 " + a);

//6. Repeat Q1 using string concat() method.
// var firstname=prompt("Enter the first name");
// var lastname=prompt("Enter the last name");

// var res=firstname.concat(" "+lastname);
// document.write("Your name is "+res)

// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var city="Hyderabad";
// var res=city.replace("Hydera","Islama");
// console.log(res);


// 8.Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// const message='Ali and Sami are best friends. They play cricket and football together';

// const regex= /and/gi
// var a=message.replace(regex,'&');
// document.write(a);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var number=472;
// var str=number.toString();
// document.write(str)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var upperCase=prompt("Enter Any Word and Sentence");
// var ch=upperCase.toUpperCase();
// document.write(ch)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var title=prompt("Enter Any Word and Sentence");
// var ch=title.charAt(0).toUpperCase() + title.slice(1);
// document.write(ch)


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num=35.36;
// var b=num.toString()
// var a=b.replace('.','');
// console.log(a);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var specialChara=['@' , '!' , ',' ,'.'];
// var a=specialChara.specialChara(0)
// console.log(a);




// for (var i=0;i<specialChara.length;i++){
//     var a=specialChara[i].charCodeAt();
//     console.log(a);
    
// }








// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



// var list=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Enter list item")
// for(var i=0;i<list.length;i++){
    
//     if(list[i]===search){
//        console.log("list available "+list[i]);
       
//     }
//     else{
//         console.log("List item not available");
        
//     }
// }

//  var search=prompt("Enter list item")
//  var list=["hamza","ali","ahmed"];
// var a=list.includes(search)
// console.log(a);


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document


// function printAlphabets(option){
	
// 	//set the default value of i & j to print A to Z
// 	var i = 65;
// 	var j = 91;
 
// 	//if the option is small set the value of i,j to print a to z
// 	if(option == 'small'){
// 		i = 97;
// 		j = 123; 
// 	}
 
// 	//loop through the values from i to j
// 	for(k = i; k < j; k++){
// 		//convert the char code to string (Alphabets)
// 		var str =String.fromCharCode(k);
// 		//print the result in console
//                 console.log(str);
// 	}
 
// }
// var a=printAlphabets('small');
// console.log(a);

// console.log(String.fromCharCode(65));



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.



// var university="University of Karachi";
// var a=university.split("");
// for(i=0;i<a.length;i++)
// console.log(a[i]);





// var m = "Hello World";  
// var k = m.split(' ');  // I have used space, you can use any thing.
// for(i=0;i<k.length;i++)  
//    console.log(k[i]);

// 17. Write a program to display the last character of a user
// input.

// var a="Pakistan"
// var b=a.slice(-1);
// console.log(b);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.






















































































































































































