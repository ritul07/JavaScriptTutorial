//	object method
var person = {
	firstName:"Ritul",
	lastName:"Kumar",
	age:21,
	fullName:function(){return this.firstName + " " + this.lastName}
	//	"this" refers to the "owner" of the function.
};
console.log(person)
console.log(person.fullName());	//	accessing object method: objectName.methodName()


//	strings typeof
var x = "John";
var y = new String("John");
console.log("typeof var x = 'John';	->	" + typeof(x))	// typeof x will return string
console.log("typeof var y = new String('John');	->	" + typeof(y))	// typeof y will return object
//	but we shouldn't use string as objects bcoz, it slows down execution speed and complicates the code


var x1 = new String("John");             
var y1 = new String("John");
console.log( (x1 == y1) ) 	//	is false because x and y are different objects i.e Objects can't be compared


//	STRING METHODS
var txt = "Please locate where 'locate' occurs!";
console.log("length = " + txt.length);
console.log("indexOf('locate') is = " + txt.indexOf("locate"));//returns the index of the first occurrence 
console.log("lastIndexOf('locate') = " + txt.lastIndexOf('locate'));//returns the index of the last occurrence
//	Both methods accept a second parameter as the starting position for the search1


var str = "Apple, Banana, Kiwi"
console.log(str.slice(9,13));	//	extracts a part of a string and returns the extracted part in a new string.
console.log(str.slice(-12, -6));//	If a parameter is negative, the position is counted from the end of the string.
								//	If you omit the second parameter, the method will slice out the rest of the string, 
								//	if the param is -ve, it'll count from the end
var str1 = "Hello";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ", text2));

var str = "       Hello World!        ";
console.log(str.trim());

var str = "HELLO WORLD";
console.log(str.charAt(0)); //	returns the character at a specified index (position) in a string
console.log(str.charCodeAt(0));	//	returns the unicode of the character at a specified index in a string
console.log(str[0]);	//	ECMAScript 5 (2009) allows property access [ ] on strings

var txt = "a,b,c,d,e";
console.log(txt.split(","));	//	split on commas
console.log(txt.split());	//	If the separator is omitted, the returned array will contain the whole string in index [0]
console.log(txt.split(""));	//	If the separator is "", the returned array will be an array of single characters,
							// including everything like, commas also.
//	txt.split(" ");          // Split on spaces
//	txt.split("|");          // Split on pipe


//	NUMBER METHODS
var x = "100";
var y = "10";
console.log(x / y);       // z will be 10	//	JS will try to convert strings to numbers in all numeric operations


//	OPERATORS
