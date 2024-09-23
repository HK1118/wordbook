//function buttonClick111(){
    alert("こんにちは")
    var pcs = document.getElementById('pcs').value;
    alert ("pcs: "+pcs)
    var true_pcs = Number(pcs);
    alert ("true_pcs: "+true_pcs)
    var number =Array.from(Array(true_pcs).keys())
    alert (number)


    var i = [10,11,12,13,14]
    alert(i[2])
    number[number.length] = i[2];
    alert(number)
//}