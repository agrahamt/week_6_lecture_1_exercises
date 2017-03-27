// 1. In your own words, explain how object literals are used to store related information and why that is useful.
// Object literals are the attribute/value pairs that you literally declare for an object.  The attribute value pairs are contained in curly braces, separated by a colon and there is a comma between each pair.  Each a/v pair details a specific characteristic of the particular object, which can then be compared with other objects that share the same (or some of the same) attributes.

// 2. Write a short program in which you create two objects whose properties describe fictional characters. Output both objects to the console.
var donQuixote = {fullName: 'Don Quixote', age: 47, noble: true, mentalState: 'unhinged'}
var sanchoPanza = {fullName: 'Sancho Panza', age: 32, noble: false, mentalState: 'loyal'}
console.log(donQuixote)
console.log(sanchoPanza)

// 3. Write a small program that does the following:
// Create an object using object literal syntax with at least five properties. For example, your object might represent a person and include properties for name, age, number of children, etc.
// Isn't that what I just did? Anyway...
var theTerminator = {firstName: 'Arnold', firstOf20Questions: 'mineral', age: -30, human: false, jobTitle: 'Terminator', goal: 'kill John Connor', countryOfOrigin: 'Austria'}
// Output the object directly to the console.
console.log(theTerminator)

// Write a string that describes the object using the properties you created. For example, "Dan is a 35 year old father of 2 kids." Be sure to access the properties using the dot property accessor.
console.log(theTerminator.firstName + ' is a ' + theTerminator.age + '-year-old ' + theTerminator.jobTitle + ' from ' + theTerminator.countryOfOrigin + ' of ' + theTerminator.firstOf20Questions + ' composition whose stated purpose is to ' + theTerminator.goal + '.')

// Change the value of one of the properties using dot notation.
theTerminator.goal = 'protect John Connor'

// Add a new property to the object using dot notation.
theTerminator.lastName = 'Schwarzenegger'
// Output the object directly to the console.
console.log(theTerminator)

// Write a new string that describes the object using all of the object's properties. Be sure to include the property you just created.
console.log('Hi, my name is ' + theTerminator.firstName + ' ' + theTerminator.lastName + '. I am a ' + theTerminator.age +'-year-old ' + theTerminator.countryOfOrigin + 'n ' + theTerminator.jobTitle + ' who enjoys ' + theTerminator.firstOf20Questions + ' oil backrubs, long walks at sunset and wants to' + theTerminator.goal + '. Any rumors that I am a murderous killing machine are absolutely ' + theTerminator.human + '.')
