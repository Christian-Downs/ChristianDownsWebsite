var txt = (
'string word1 = "Hello";\nstring word2 = "world";\nConsole.WriteLine(word1 + " " + word2);\nConsole.ReadLine();\n//This will make two strings then put them together in a write line producing "Hello world"');
var i =0;
var speed = 12;
var reset = true;

function textSetter(lang){
    document.getElementById('demo').innerHTML='';
    var goingToWriter=true;
    switch (lang)
    {
        case "C#":
            goingToWriter=false;
            document.getElementById('demo').innerHTML = (
            'using System;\n'+
            'using System.Collections;\n'+
            'using System.Collections.Generic;\n'+
            'using System.Linq;\n'+
            'using System.Text;\n'+
            'using System.Threading.Tasks;\n'+
'\n'+
            'namespace PhonebookAssignment {\n'+
            '    class Program {\n'+
            '        static void Main(string[] args) {\n'+
            '            Dictionary < double, Person > phoneBook = new Dictionary<double, Person>();\n'+
            '            do {\n'+
            '                //I have to use / for it to work with the html writing\n'+
            '                Console.Write("Please enter a number from the selection below:/n" +\n'+
            '                    "1)Add new Number/n" +\n'+
            '                    "2)Search by First Name/n" +\n'+
            '                    "3)Search by Last Name/n" +\n'+
            '                    "4)Search by City/n" +\n'+
            '                    "5)Delete by First Name/n" +\n'+
            '                    "6)Sort the list by contact'+"'s" +'first name/n" +\n'+
            '                    "7)Exit/n");\n'+
'\n'+
            '                Person andrew = new Person();\n'+
            '                try {\n'+
            '                    switch (Convert.ToInt32(Console.ReadLine())) {\n'+
            '                        case 1:\n'+
            '                            {\n'+
            '                                Console.WriteLine("Enter Phone Number then information to add a person");\n'+
            '                                do {\n'+
            '                                    try {\n'+
            '                                        double phoneNumber = Convert.ToDouble(Console.ReadLine());\n'+
'\n'+
            '                                        phoneBook.Add(phoneNumber, MakePerson(phoneNumber));\n'+
            '                                        Console.WriteLine("Added");\n'+
            '                                    }\n'+
            '                                    catch { Console.WriteLine("Something went wrong please try agian"); }\n'+
'\n'+
            '                                    Console.WriteLine("Please enter another phone number or stop to stop");\n'+
            '                                } while (Console.ReadLine() != "stop");\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 2:\n'+
            '                            {\n'+
            '                                Console.Write("Who would you like to find: ");\n'+
            '                                string nameToFind = Console.ReadLine();\n'+
            '                                foreach(Person person in phoneBook.Values)\n'+
            '                                {\n'+
            '                                    if (person.firstName.Equals(nameToFind)) {\n'+
            '                                        DisplayPerson(person);\n'+
            '                                    }\n'+
'\n'+
            '                                }\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 3:\n'+
            '                            {\n'+
            '                                Console.Write("Who would you like to find: ");\n'+
            '                                string lastNameToFind = Console.ReadLine();\n'+
            '                                foreach(Person person in phoneBook.Values)\n'+
            '                                {\n'+
            '                                    if (person.lastName.Equals(lastNameToFind)) {\n'+
            '                                        DisplayPerson(person);\n'+
            '                                    }\n'+
            '                                }\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 4:\n'+
            '                            {\n'+
            '                                Console.Write("Which City do you want to search for: ");\n'+
            '                                string cityToFind = Console.ReadLine();\n'+
            '                                foreach(Person person in phoneBook.Values)\n'+
            '                                {\n'+
            '                                    if (person.address.city.Equals(cityToFind)) {\n'+
            '                                        DisplayPerson(person);\n'+
            '                                    }\n'+
            '                                }\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 5:\n'+
            '                            {\n'+
            '                                Console.Write("Who would you like to delete: ");\n'+
            '                                string nameToFind = Console.ReadLine();\n'+
            '                                Dictionary < double, Person > tempHastable = phoneBook;\n'+
            '                                foreach(Person person in phoneBook.Values)\n'+
            '                                {\n'+
            '                                    if (person.firstName.Equals(nameToFind)) {\n'+
            '                                        tempHastable.Remove(person.phoneNumber);\n'+
            '                                    }\n'+
'\n'+
            '                                }\n'+
            '                                phoneBook = tempHastable;\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 6:\n'+
            '                            {\n'+
            '                                var orderedPhoneBookByFirstName = phoneBook.OrderBy(b => b.Value.firstName).Select(b => b.Value);\n'+
            '                                foreach(Person person in orderedPhoneBookByFirstName)\n'+
            '                                {\n'+
            '                                    DisplayPerson(person);\n'+
            '                                }\n'+
            '                                Console.WriteLine();\n'+
            '                                break;\n'+
            '                            }\n'+
            '                        case 7:\n'+
            '                            Environment.Exit(0);\n'+
            '                            break;\n'+
            '                        default:\n'+
            '                            Console.WriteLine("Invalid input. please try again./n");\n'+
            '                            break;\n'+
            '                    }\n'+
            '                }\n'+
            '                catch { Console.WriteLine("Something went wrong please try again."); }\n'+
            '            } while (true);\n'+
'\n'+
'\n'+
            '        }\n'+
'\n'+
            '        public static Person MakePerson(double phoneNumber) {\n'+
            '            Person person = new Person();\n'+
            '            person.phoneNumber = phoneNumber;\n'+
            '            Console.Write("First Name: ");\n'+
            '            person.firstName = Console.ReadLine();\n'+
            '            Console.Write("Last Name: ");\n'+
            '            person.lastName = Console.ReadLine();\n'+
            '            Console.WriteLine("Address:");\n'+
            '            Console.Write("Street: ");\n'+
            '            person.address.street = Console.ReadLine();\n'+
            '            Console.Write("City: ");\n'+
            '            person.address.city = Console.ReadLine();\n'+
            '            Console.Write("Zip Code: ");\n'+
            '            person.address.zipCode = Console.ReadLine();\n'+
'\n'+
'\n'+
            '            return person;\n'+
            '        }\n'+
'\n'+
            '        public static void DisplayPerson(Person person) {\n'+
            '            Console.WriteLine("Phone Number: " + person.phoneNumber);\n'+
            '            Console.WriteLine("First Name: " + person.firstName);\n'+
            '            Console.WriteLine("Last Name: " + person.lastName);\n'+
            '            Console.WriteLine("Address:");\n'+
            '            Console.WriteLine("Street: " + person.address.street);\n'+
            '            Console.WriteLine("City: " + person.address.city);\n'+
            '            Console.WriteLine("Zip Code: " + person.address.zipCode);\n'+
            '        }\n'+
            '    }\n'+
'\n'+
            '    class Person {\n'+
            '        public Address address = new Address();\n'+
            '        public string firstName, lastName;\n'+
            '        public double phoneNumber;\n'+
            '    }\n'+
'\n'+
            '    class Address {\n'+
            '        public string street;\n'+
            '        public string city;\n'+
            '        public string zipCode;\n'+
            '    }\n'+
            '}\n'+
'\n'+
            '    \n'
            );
            break;
        case "CSS":
            
            txt = ('<!DOCTYPE html>\n' +
                '<html>\n' +
                '    <head>\n'+
                '     <style>\n'+
                '     p.test {\n'+
                '         text-align: center;\n'+
                '         font-size: xxx-large;\n'+
                '         font-family: cursive;\n'+
                '         background-color: darksalmon;\n'+
                '     }\n'+
                '     </style>\n'+
                '   <head>\n' +
                '   <div>\n' +
                '     <p class= "test">\n' +
                '      Hello World!\n' +
                '     <p>\n' +
                '   </div>\n' +
                '</html>');
            break;
        case "Html":
            txt = ('<!DOCTYPE html>\n'+
            '<html>\n' +
            '   <div>\n' +
            '     <p>\n' +
            '      Hello World!\n' +
            '     <p>\n' +
            '   </div>\n' +
            '</html>');
            break;
        case "JavaScript":
            txt = ('function codeWriter(){\n'+
                   '    if(i<txt.length)\n'+
                   '    {\n'+
                   '        var newText = document.createTextNode(txt[i]),\n'+
                   '            p1 = document.getElementById("demo");\n'+
                   '        if (reset) {\n'+
                   '            document.getElementById("demo").innerHTML='+"'';\n"+
                   '            reset=false;\n'+
                   '        }\n'+
                   '        p1.appendChild(newText);\n'+
                   '        i++;\n'+
                   '        setTimeout(codeWriter,speed);\n'+
                   '    }\n'+
                   '    else\n'+
                   '    {\n'+
                   '        i=0;\n'+
                   '        reset=true;\n'+
                   '    }\n'+
                   '}');
            break;
        case "SQL":
            txt = 
            ('Create Database Dragons;\n'+
            "   create table DragonType(\n"+
            "   Dragon_ID int,\n"+
            "   DragonName varchar(25),\n"+
            "   DragonAdress varchar(25),\n"+
            "   DragonPhoneNumber numeric(10, 3)\n"+
            ");\n\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(1, 'Timmy', 'dragon Island', 372460.000)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(2, 'Shaun', 'dragon Island', 372460.001)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(3, 'Tim', 'dragon Island', 372460.002)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(4, 'Roger', 'dragon Island', 372460.003)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(5, 'Fun', 'dragon Island', 372460.004)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(6, 'Peaches', 'dragon Island', 372460.005)\n\n"+
            "insert into DragonType(Dragon_ID, DragonName, DragonAdress, DragonPhoneNumber)\n"+
            "values(6, 'Peaches', 'dragon Island', 372460.005)\n\n\n"+
            "Select DragonName, DragonAdress, DragonPhoneNumber, Dragon_ID from DragonType\n"+
            "select * frOm DragonType\n"+
            "select 10 + 20;\n"+
            "Select DragonName as [Dragon Name], DragonAdress, DragonPhoneNumber, Dragon_ID from\n"+
            "DragonType\n"+
            "select distinct Dragon_ID from DragonType;\n"+
            "select * frOm DragonType\n"+
            "select * from DragonType\n"+
            "order by DragonName desc;\n");
            break;
        case "Ruby":
            txt='Ruby';
            break;
        default:
            txt = 'something is wrong';
            break;
    }
    if(goingToWriter)
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