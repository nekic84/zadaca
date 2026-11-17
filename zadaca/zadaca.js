var names = ['John', 'Jane', 'Bob',, 'Mike'];

for ( let i = 0; i < names.length; i++)
{
    if (names[i] == undefined) i++;
    console.log(names[i]);
}

names.push("Marko");
console.log(" ");

for ( let i = 0; i < names.length; i++)
{
    console.log(names[i]);
    if(names[i] == "Jane") break;
}

