var txt = (
'string word1 = "Hello";\nstring word2 = "world";\nConsole.WriteLine(word1 + " " + word2);\nConsole.ReadLine();\n//This will make two strings then put them together in a write line producing "Hello world"');
var i =0;
var speed = 100;


function codeWriter(){
    if(i<txt.length)
    {
        var newText = document.createTextNode(txt[i]),
            p1 = document.getElementById("demo");
        p1.appendChild(newText);
        i++;
        setTimeout(codeWriter,speed);


        // document.getElementById("demo").innerHTML += txt.charAt(i);
        // i++;
        // setTimeout(codeWriter, speed);
    }
    else
    {
        i=0;
    }
}