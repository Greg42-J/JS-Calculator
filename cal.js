// To Check the value on the input screen
function getValue(inputValue) {
    document.getElementById("a1").value += inputValue;
}

// Calculating the Final Result
function calculate() {
    try {
        document.getElementById("a1").value = eval(document.getElementById("a1").value);
    } catch (error) {
        document.getElementById("a1").value = "syntax_error";
    }
}
//all clear
function clr() {
    document.getElementById("a1").value = '';
}

//Deleting element from last
function del() {
    let del = document.getElementById("a1").value;
    document.getElementById("a1").value = del.slice(0, -1);
}

// Equal To Mapping
document.getElementById("a1").addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        calculate();
    }
});

function checkAlphabet(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 40 || charCode > 57)) 
            {
                evt.preventDefault();
                return false;
            }
        return true;
}
