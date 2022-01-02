const people = x => x > 1 ? `${x} people` : `${x} person`;
function moneyStyles (value) {
    value = (Math.ceil(value * 100) /100).toFixed(2);
    return `€ ${value}`
}


function update () {
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent/100);
    let totalWithTip = bill + tipValue;
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;
    //console.log({tipValue, split});

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById('tipValue').innerHTML = moneyStyles(tipValue);
    document.getElementById("billEach").innerHTML = moneyStyles(newBillEach);
    document.getElementById("tipEach").innerHTML = moneyStyles(tipEach);
    document.getElementById("totalWithTip").innerHTML = moneyStyles(totalWithTip);
    document.getElementById("splitValue").innerHTML = people(split);

}

let container = document.getElementById('container');
container.addEventListener('input', update);