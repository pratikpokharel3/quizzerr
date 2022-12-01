export const questions = [
  {
    question:
      "Which component is used to compile, debug and execute Java programs?",
    code: null,
    options: ["JRE", "JIT", "JDK", "JVM"],
    correct_answer: 2
  },
  {
    question: "Which of the following is not a feature in Java?",
    code: null,
    options: [
      "Multiple Inheritance",
      "Pointers",
      "Default Values",
      "All of the above"
    ],
    correct_answer: 3
  },
  {
    question: "What is the size of char data type?",
    code: null,
    options: ["1 byte", "2 bytes", "3 bytes", "4 bytes"],
    correct_answer: 1
  },
  {
    question: "Which of the following cannot be used for a variable name?",
    code: null,
    options: ["Keywords", "Identifiers", "Literals", "None of the above"],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 class Example {
    public static void main(String[] args) {        
        int g = 3;
        System.out.print(++g * 8);
    } 
 }
</pre>`,
    options: ["24", "32", "40", "None of the above"],
    correct_answer: 1
  },
  {
    question: "Which environment variable is used to set the Java path?",
    code: null,
    options: ["MAVEN", "JAVAPATH", "JAVA_PATH", "JAVA_HOME"],
    correct_answer: 3
  },
  {
    question: "What is Truncation in Java?",
    code: null,
    options: [
      "Floating-point value assigned to a floating type",
      "Floating-point value assigned to an integer type",
      "Integer value assigned to floating type",
      "None of the above"
    ],
    correct_answer: 1
  },
  {
    question: "Which exception is thrown when Java is out of memory?",
    code: null,
    options: [
      "MemoryError",
      "MemoryOutOfBoundsException",
      "OutOfMemoryError",
      "None of the above"
    ],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 class Example {
    public static void main(String[] args) { 
       String c = "Hello, I love Java.";
       boolean var = c.startsWith("hello");
       System.out.println(var);
    }
 }
</pre>`,
    options: ["true", "false", "-1", "0"],
    correct_answer: 1
  },
  {
    question: "Which of the following is a superclass of every class in Java?",
    code: null,
    options: [
      "ArrayList",
      "Abstract class",
      "Object class",
      "None of the above"
    ],
    correct_answer: 2
  },
  {
    question:
      "Which class provides system independent server side implementation?",
    code: null,
    options: ["Server", "ServerReader", "Socket", "ServerSocket"],
    correct_answer: 3
  },
  {
    question: "What of the following is true about protected constructor?",
    code: null,
    options: [
      "Protected constructor can be called directly",
      "Protected constructor can only be called using super()",
      "Protected constructor can be used outside package",
      "Protected constructor can be instantiated even if child is in a different package"
    ],
    correct_answer: 1
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 class Example {
    public static void main(String[] args) {
        int[] array = new int[10];
        for (int i = 0; i < 10; ++i) {
            array[i] = i;
            System.out.print(array[i] + " ");
            i++;
        } 
    }
 }
</pre>`,
    options: [
      "0 2 4 6 8",
      "1 3 5 7",
      "0 1 2 3 4 5 6 7 8 9",
      "None of the above"
    ],
    correct_answer: 0
  },
  {
    question:
      "Which of the following is used to perform some action when an object is to be destroyed?",
    code: null,
    options: ["finalize()", "destroy()", "delete()", "free()"],
    correct_answer: 0
  },
  {
    question:
      "Which of these keywords can be used to prevent method overriding?",
    code: null,
    options: ["static", "protected", "final", "None of the above"],
    correct_answer: 2
  },
  {
    question: "Which of these methods loads the specified dynamic library?",
    code: null,
    options: ["load()", "loadLib()", "loadLibrary()", "library()"],
    correct_answer: 0
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 import java.util.*;

 class Example {
    public static void main(String[] args) {
        LinkedList obj = new LinkedList();
        obj.add("A");
        obj.add("B");
        obj.add("C");
        obj.addFirst("D");
        System.out.println(obj);
    }
 }
</pre>`,
    options: ["[D, A, B, C]", "[A, B, C, D]", "[A, B, C]", "[D, B, C]"],
    correct_answer: 0
  },
  {
    question:
      "Which of these is an interface for control over serialization and deserialization?",
    code: null,
    options: [
      "Serializable",
      "Externalization",
      "Both A and B",
      "None of the above"
    ],
    correct_answer: 1
  },
  {
    question: "What is the default clone of HashSet?",
    code: null,
    options: [
      "Deep clone",
      "Shallow clone",
      "Hollow clone",
      "None of the above"
    ],
    correct_answer: 1
  },
  {
    question: "Which of these classes implements Set interface?",
    code: null,
    options: ["ArrayList", "LinkedList", "DynamicList", "HashSet"],
    correct_answer: 3
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 import java.util.*;

 class Example {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        t.setName("New Thread");
        System.out.println(t);        
    }
 }
</pre>`,
    options: [
      "Thread[5,main]",
      "Thread[New Thread,5]",
      "Thread[New Thread,5,main]",
      "Thread[main,5,main]"
    ],
    correct_answer: 2
  },
  {
    question: "What is the ouput of the following Java code?",
    code: `
<pre style="margin-bottom: 0; background-color: #f4f4f4; padding: 0.5rem 0">
 class Example {
    public static void main(String[] args) {
        int var1 = 5; 
        int var2 = 6;
        if ((var2 = 1) == var1)
            System.out.print(var2);
        else 
            System.out.print(++var2);
    } 
 }
</pre>`,
    options: ["1", "2", "3", "4"],
    correct_answer: 1
  },
  {
    question: "Which of the following is not pre-defined annotation in Java?",
    code: null,
    options: ["@Deprecated", "@SafeVarags", "@Overriden", "@FunctionInterface"],
    correct_answer: 2
  },

  {
    question:
      "Which of these methods can be used to determine the type of event?",
    code: null,
    options: [
      "getEventSource()",
      "getSource()",
      "getEvent()",
      "getEventObject()"
    ],
    correct_answer: 1
  },
  {
    question:
      "Which data structure is used in Java as Breadth First Traversal of a graph?",
    code: null,
    options: ["Stack", "Array", "Queue", "Tree"],
    correct_answer: 2
  }
];
