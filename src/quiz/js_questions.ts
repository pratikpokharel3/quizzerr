export const questions = [
  {
    question:
      "Which one of the following is not a valid comment in JavaScript?",
    code: null,
    options: [
      "/* Hello World */",
      "// Hello World",
      "<!-- Hello World -->",
      "None of the above"
    ],
    correct_answer: 2
  },
  {
    question: "How many primitive data types are supported by JavaScript?",
    code: null,
    options: ["6", "7", "8", "9"],
    correct_answer: 1
  },
  {
    question:
      "A JavaScript function can return a value. If it doesn't, then its result is?",
    code: null,
    options: ["undefined", "null", "void", "-1"],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
    <pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  (function() {
    console.log(1); 
    setTimeout(function(){ console.log(2) }, 1000); 
    setTimeout(function(){ console.log(3) }, 0); 
    console.log(4);
  })();
</pre>`,
    options: ["1 3 4 2", "1 4 3 2", "1 3 2 4", "No output"],
    correct_answer: 1
  },
  {
    question:
      "Symbols are used to create hidden property of an object in Javascript?",
    code: null,
    options: ["TRUE", "FALSE", "Iterables are used", "Sets are used"],
    correct_answer: 0
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    code: null,
    options: [
      "JSON.parse()",
      "JSON.stringy()",
      "JSON.convert()",
      "JSON.serialize()"
    ],
    correct_answer: 1
  },
  {
    question: "What does currying mean in Javascript?",
    code: null,
    options: [
      "Technique where an object wraps another object and intercepts operations",
      "Technique to import only part of the code using modules",
      "Advanced technique of working with functions",
      "None of the above"
    ],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  const nums = [1, 2, 3, 4, 5];
  console.log(nums.slice(2, 4));
</pre>`,
    options: ["3", "3 4 5", "3 4", "Throws an error"],
    correct_answer: 2
  },
  {
    question: "Which one of the following is not a Map function in Javascript?",
    code: null,
    options: [
      "map.clear()",
      "map.entries()",
      "map.values()",
      "None of the above"
    ],
    correct_answer: 3
  },
  {
    question: "Which function is used to stop interval timer in Javascript?",
    code: null,
    options: ["clearTimer()", "endInterval()", "endTimer()", "clearInterval()"],
    correct_answer: 3
  },
  {
    question:
      "To get current timestamp, which date function is used in JavaScript?",
    code: null,
    options: [
      "Date.timestamp()",
      "Date.now()",
      "Date.current()",
      "Date.today()"
    ],
    correct_answer: 1
  },
  {
    question: "In JavaScript, the object referenced by a prototype is?",
    code: null,
    options: ["Is another object", "Is null", "Is a prototype", "Both A and B"],
    correct_answer: 3
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  if (typeof(NAN) === 'number') {
    console.log('YES');
  } else {
    console.log('NO');
  }
  console.log('END');
</pre>`,
    options: [
      "YES END",
      "NO END",
      "YES",
      "typeof() is not a JavaScript keyword"
    ],
    correct_answer: 0
  },
  {
    question: "How do you install a library/package in a JavaScript project?",
    code: null,
    options: ["Via npm", "Via pnpm", "Via yarn", "All of the above"],
    correct_answer: 3
  },
  {
    question:
      "Which of the following statement is true regarding JavaScript and TypeScript?",
    code: null,
    options: [
      "All JS codes are valid TS codes",
      "All TS codes are valid JS codes",
      "JS and TS are two different things",
      "None of the above"
    ],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  (function(a){
    return (function(){
      console.log(a);
      a = 6;
    })()
  })(21);
</pre>`,
    options: ["6", "21", "No output", "Throws an error"],
    correct_answer: 1
  },
  {
    question:
      "The maximum size that browser allow to store data in local storage is?",
    code: null,
    options: ["1 MB", "2 MB", "5 MB", "10 MB"],
    correct_answer: 2
  },
  {
    question:
      "If a variable is declared but not initialized, what wil be its current value?",
    code: null,
    options: ["null", "void", "undefined", "Throws an error"],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  const numbers = [33, 2, 8];
  numbers.sort();
  console.log(numbers[1]);
</pre>`,
    options: ["33", "2", "8", "1"],
    correct_answer: 0
  },
  {
    question: "What is the use of <noscript> tag in JavaScript?",
    code: null,
    options: [
      "To display message in non JS-browser",
      "To tell JS interpreter not to compile part of code",
      "<noscript> is not valid tag",
      "None of the above"
    ],
    correct_answer: 0
  },
  {
    question: "How can you detect the client's browser name?",
    code: null,
    options: [
      "client.navName",
      "browser.name",
      "navigator.appName",
      "navigator.browser"
    ],
    correct_answer: 2
  },
  {
    question: "What is the use of Array.prototype.fill() method in JavaScript?",
    code: null,
    options: [
      "Sets value to null for every index of an array",
      "Sets value to 0 for every index of an array",
      "Sets value to -1 for every index of an array",
      "None of the above"
    ],
    correct_answer: 1
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    code: null,
    options: ["label", "default", "try", "catch"],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following JavaScript code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  const obj = {
    1: 1,
    2: 2,
    3: 3
  };
  console.log(Object.keys(obj) == Object.values(obj));
</pre>`,
    options: ["TRUE", "FALSE", "No output", "None of the above"],
    correct_answer: 1
  },
  {
    question:
      "Whic one of the following is not a valid DOM method in JavaScript?",
    code: null,
    options: [
      "getElementById()",
      "querySelector()",
      "querySelectorAll()",
      "None of the above"
    ],
    correct_answer: 3
  }
];
