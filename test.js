function buttonClick111(){
    //alert("こんにちは")
    var pcs = document.getElementById('pcs').value;
    //alert ("pcs: "+pcs)
    var true_pcs = Number(pcs);
    //alert ("true_pcs: "+true_pcs)
    var number =Array.from(Array(true_pcs).keys())
    //alert (number)


    var i = [10,11,12,13,14]
    //alert(i[2])
    number[number.length] = i[2];
    alert("test(1)")
    document.getElementById('Q_number') = "第${Qi}問";
    alert("test(2)")
}

function test(){
    alert("ページ遷移します！");
    window.location.href='test2.html';
    alert("test (in same function)");
}
function test(){
    var elm = document.getElementById('change_text');

    elm.textContent = 'test change';
}
function second_page(){
    alert("test (in new function)");
    let change_text = document.getElementById('change_text').textContent;
    document.getElementById('change_text').textContent
}