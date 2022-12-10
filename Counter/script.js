let inc = document.querySelector("#increament");
let dec = document.querySelector("#dec");
let res = document.querySelector("#reset");
let text = document.querySelector("#ip");

let add = function()
{
    let val = text.value;
    if(val=="")val=0;
    val = parseInt(val,10);
    
    if(isNaN(val))
    {
        text.value="";
        return;
    }
    val += 1;
    text.value=val;
}

let sub = function()
{
    let val = text.value;
    if(val=="")val=0;
    val = parseInt(val,10);
    if(isNaN(val))
    {
        text.value="";
        return;
    }
    val -= 1;
    text.value=val;
}

let zero = function()
{
    
        text.value=0;
}
inc.addEventListener('click',add);
dec.addEventListener('click',sub);
res.addEventListener('click',zero);