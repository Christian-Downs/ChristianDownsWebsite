var txt = (
'string word1 = "Hello";\nstring word2 = "world";\nConsole.WriteLine(word1 + " " + word2);\nConsole.ReadLine();\n//This will make two strings then put them together in a write line producing "Hello world"');
var i =0;
var speed = 63;
var reset = true;

function textSetter(lang){
    document.getElementById('demo').innerHTML='';
    switch (lang)
    {
        case "C#":
            txt = ('string word1 = "Hello";\nstring word2 = "world";\nConsole.WriteLine(word1 + " " + word2);\nConsole.ReadLine();\n//This will make two strings then put them together in a write line producing "Hello world"');
            break;
        case "html":
            txt = 'test';
            break;
        default:
            break;
        
    }

    codeWriter();
}

function codeWriter(){

    if(i<txt.length)
    {
        var newText = document.createTextNode(txt[i]),
            p1 = document.getElementById("demo");
        if (reset) {
            document.getElementById("demo").innerHTML='';
            reset=false;
        }
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
        reset=true;
    }
}