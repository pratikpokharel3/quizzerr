export const questions = [
  {
    question: "Which of the following is used to declare a constant in PHP?",
    code: null,
    options: ["const", "#pragma", "define", "All of the above"],
    correct_answer: 2
  },
  {
    question:
      "Which of the following method is used to generate unique id in PHP?",
    code: null,
    options: ["uniqueid()", "uuid()", "id()", "None of the above"],
    correct_answer: 0
  },

  {
    question: "Which of the following function is used to redirect PHP pages?",
    code: null,
    options: ["redirect()", "header()", "change()", "relocate()"],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    $x = 10;
    $y = 20;

    if ($x > $y && 1||1)
        print "YES";
    else
        print "NO";
  ?&gt;
</pre>`,
    options: ["YES", "NO", "Throws an error", "None of the above"],
    correct_answer: 0
  },
  {
    question:
      "Which of the following is not a pre-defined variable in PHP?",
    code: null,
    options: ["$get", "$file", "$request", "$connect"],
    correct_answer: 3
  },
  {
    question: "Which function display the information about PHP?",
    code: null,
    options: ["sysinfo()", "phpinfo()", "info()", "about()"],
    correct_answer: 1
  },
  {
    question: "PHP recognizes constructors by the name of?",
    code: null,
    options: [
      "function _construct()",
      "function __construct()",
      "__construct()",
      "None of the above"
    ],
    correct_answer: 1
  },
  {
    question: "What does PDO stands for in PHP?",
    code: null,
    options: [
      "PHP Data Orientation",
      "PHP Database Orientation",
      "PHP Data Object",
      "PHP Database Object"
    ],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    $fruits = array("apple", "orange", array ("pear", "mango"),"banana");
    echo(count($fruits, 1));
  ?&gt;
</pre>`,
    options: ["3", "4", "5", "6"],
    correct_answer: 3
  },
  {
    question: "What version of PHP introduced the concept of OOP?",
    code: null,
    options: ["PHP 5", "PHP 5.3", "PHP 6", "PHP 7"],
    correct_answer: 0
  },
  {
    question:
      "Which method is the correct way to open a file in read mode in PHP?",
    code: null,
    options: [
      "fread($file_dir, 'r');",
      "fread($file_dir, 'r+');",
      "fopen($file_dir, 'r');",
      "fopen($file_dir, 'r+');"
    ],
    correct_answer: 2
  },
  {
    question: "Which of the following function is used to find files in PHP?",
    code: null,
    options: ["glob()", "file_search()", "get_file()", "open_file()"],
    correct_answer: 0
  },
  {
    question:
      "Which of the following function can be used to test the type of any variable in PHP?",
    code: null,
    options: ["checktype()", "gettype()", "checkvar()", "None of the above"],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    $cities = array("Kathmandu", "Biratnagar", "Pokhara", "Dharan");
    echo (array_search("Pokhara", $cities));
  ?&gt;
</pre>`,
    options: ["True", "False", "1", "2"],
    correct_answer: 3
  },
  {
    question:
      "Which of the following function is used to compress a string in PHP?",
    code: null,
    options: ["compress()", "zip_compress()", "zip()", "gzcompress()"],
    correct_answer: 3
  },
  {
    question:
      "Which PHP function converts an English text datetime into a Unix timestamp?",
    code: null,
    options: ["str_to_time()", "strtodate()", "strtotime()", "str_to_date()"],
    correct_answer: 2
  },
  {
    question: "What is the difference between echo and print?",
    code: null,
    options: [
      "Print can take multiple parameters where as echo cannot",
      "Echo can take multiple parameters where as print cannot",
      "Both behave the same",
      "Print is a function where as echo is not"
    ],
    correct_answer: 1
  },
  {
    question:
      "Assuming date as 14/09/2022, what will be the ouput of the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    echo "Today is ".date("F d, Y");
  ?&gt;
</pre>`,
    options: [
      "Today is September 14, 2022",
      "Today is Sept 14, 2022",
      "Today is 09 14, 2022",
      "None of the above"
    ],
    correct_answer: 0
  },
  {
    question:
      "Which one of the following function reads a directory into an array in PHP?",
    code: null,
    options: ["scandir()", "readdir()", "scan_dir()", "read_dir()"],
    correct_answer: 0
  },
  {
    question:
      "Which function is used to remove all HTML tags from a string passed to a form?",
    code: null,
    options: ["remove_tags()", "strip_tags()", "strip()", "remove()"],
    correct_answer: 1
  },
  {
    question:
      "If there is no error, then what will be the error() method return in PHP?",
    code: null,
    options: ["TRUE", "FALSE", "Empty String", "None of the above"],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    $text = 'World';
    echo 'Hello $text';
    echo "Hello $text";
  ?&gt;
</pre>`,
    options: [
      "Hello $textHello World",
      "Hello WorldHello $text",
      "Hello $textHello $text",
      "None of the above"
    ],
    correct_answer: 0
  },
  {
    question: "Which type of function call is used in the following PHP code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  &lt;?php
    function calc($price, $tax = 10)	{
        $total = $price + $tax;
    }
    $pricetag = 15;
    $taxtag = 3;
    calc($pricetag, $taxtag);
  ?&gt;
</pre>`,
    options: [
      "Call by value",
      "Call by reference",
      "Default Argument Value",
      "Both A and C"
    ],
    correct_answer: 3
  },
  {
    question: "Which of the below symbol is a newline character in PHP?",
    code: null,
    options: ["\\r", "\\n", "n/", "r/"],
    correct_answer: 1
  },
  {
    question: "Which of the following is a framework based on PHP?",
    code: null,
    options: ["Symfony", "CodeIgniter", "Laravel", "All of the above"],
    correct_answer: 3
  }
];
