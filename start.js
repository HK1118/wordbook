function buttonClick(){
    let number = document.getElementById('number').value;
    alert(number)
    window.location.href = "second.html";
}

function buttonClick2(){
    var text = document.getElementById('text').value;
    alert(text)
    var next_text = text.split('//');
    alert(next_text)
    var q_or_a = next_text.split('/');
    alert(q_or_a)
}

