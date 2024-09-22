function buttonClic111(){
    var pcs = document.getElementById('pcs').value;
    alert ("pcs: "+pcs)
    var true_pcs = Number(pcs);
    alert ("true_pcs: "+true_pcs)
    var nunmber =Array.from(Array(true_pcs).keys())
    alert (nunmber)


    var i = [10,11,12,13,14]
    alert(i[2])
    nunmber[nunmber.length] = i[2];
    alert(nunmber)
}