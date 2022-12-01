export const questions = [
  {
    question: "Which of the following is not a data type in Python?",
    code: null,
    options: ["int", "float", "real", "complex"],
    correct_answer: 2
  },
  {
    question:
      "Which of the following operator is not allowed in string operation in Python?",
    code: null,
    options: ["-", "+", "*", "=="],
    correct_answer: 0
  },
  {
    question: "A class is an instance of which of the following in Python?",
    code: null,
    options: ["ParentClass", "MetaClass", "SuperClass", "None of the above"],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  def func1():
    n = 10
    def func2():
        nonlocal n
        print(n)
    func2()
  func1()
</pre>`,
    options: ["10", "No output", "UnboundLocalError", "IndentationError"],
    correct_answer: 0
  },
  {
    question:
      "Which following function cannot be used with lambda functions in Python?",
    code: null,
    options: ["map()", "filter()", "remove()", "reduce()"],
    correct_answer: 2
  },
  {
    question: "Which of the following is a feature of tuple in Python?",
    code: null,
    options: [
      "Ordered, no duplicate value, and immutability",
      "Ordered, duplicate value, and immutability",
      "Ordered, duplicate value, and non-immutability",
      "Ordered, no duplicate value, and non-immutability"
    ],
    correct_answer: 1
  },
  {
    question:
      "Which of the following can be used as keys for dictionaries in Python?",
    code: null,
    options: ["Lists", "Tuples", "Sets", "Dictionaires"],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  l = [1, 0, 2, 0, 'hello', '', []]
  print(list(filter(bool, l)))
</pre>`,
    options: [
      "[1, 2, 'hello']",
      "[1, 0, 2, 'hello',\", []]'",
      "[1, 0, 2, 0, 'hello',\", []]",
      "Throws an error"
    ],
    correct_answer: 0
  },
  {
    question: "Which of the following is a built-in function in Python?",
    code: null,
    options: ["factorial()", "print()", "sqrt()", "seed()"],
    correct_answer: 1
  },
  {
    question: "Which of the following is not a keyword in Python?",
    code: null,
    options: ["pass", "assert", "nonlocal", "eval"],
    correct_answer: 3
  },
  {
    question: "Which does pickling mean in Python?",
    code: null,
    options: [
      "Conversion of a Python object hierarchy into byte stream",
      "Conversion of a byte stream into Python object hierarchy",
      "Conversion of a datatable into a list",
      "Conversion of a list into a datatable"
    ],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  def addItem(listParam):
    listParam += [1]
  mylist = [1, 2, 3, 4]
  addItem(mylist)
  print(len(mylist))
</pre>`,
    options: ["1", "5", "6", "8"],
    correct_answer: 1
  },
  {
    question:
      "Suppose B is a subclass of A, so to invoke the __init__ method in A from B, what is the line of code that is valid in Python?",
    code: null,
    options: [
      "A.__init__(self)",
      "B.__init__(self)",
      "A.__init__(B)",
      "B.__init__(A)"
    ],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  def foo():
    try:
        return 1
    finally:
        return 2
  k = foo()
  print(k)
</pre>`,
    options: ["1", "3", "4", "2"],
    correct_answer: 3
  },
  {
    question:
      "Program code making use of a given module is called what in Python?",
    code: null,
    options: ["Docstring", "Interface", "Client", "Modularity"],
    correct_answer: 2
  },
  {
    question: "Which of the following is not a valid namespace in Python?",
    code: null,
    options: [
      "Global namespace",
      "Public namespace",
      "Built-in namespace",
      "Local namespace"
    ],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  test = {1:'A', 2:'B', 3:'C'}
  del test[1]
  test[1] = 'D'
  del test[2]
  print(len(test))
</pre>`,
    options: ["0", "1", "2", "Error: As 1:'A' is already deleted"],
    correct_answer: 2
  },
  {
    question:
      "Which of the following function will not result in an error when no arguments are passed to it in Python?",
    code: null,
    options: ["min()", "divmod()", "all()", "float()"],
    correct_answer: 3
  },
  {
    question: "Which of the following is valid statemet in Python?",
    code: null,
    options: ["_a = 1", "__a = 1", "__str__ = 1", "All of the above"],
    correct_answer: 3
  },
  {
    question: "Which of these is not a core data type in Python?",
    code: null,
    options: ["Lists", "Class", "Dictionary", "Tuples"],
    correct_answer: 1
  },
  {
    question: "To add a new element to a list, which method is used in Python?",
    code: null,
    options: ["append()", "add()", "set()", "insert()"],
    correct_answer: 0
  },
  {
    question:
      "What is the correct syntax to output the type of a variable or object in Python?",
    code: null,
    options: [
      "print(typeof x))",
      "print(typeOf(x))",
      "print(typeof(x))",
      "None of the above"
    ],
    correct_answer: 2
  },
  {
    question:
      "Which of the following is not true about lamba function in Python?",
    code: null,
    options: [
      "It can any number of arguments",
      "It can have multiple expression statements",
      "It is a small anonymous function",
      "It can be used inside another function"
    ],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following Python code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
  value = min(max(False,-3,-4), 2,7)
  print(value)
</pre>`,
    options: ["-4", "-3", "TRUE", "FALSE"],
    correct_answer: 3
  },
  {
    question:
      "Which following module should be imported to delete a file in Python?",
    code: null,
    options: ["os", "system", "file", "None of the above"],
    correct_answer: 0
  }
];
