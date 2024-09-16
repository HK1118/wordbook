function buttonClick2(){
    var text = document.getElementById('text').value;
    alert(text)
    console.log("出力テスト１");
    var text2 = text.split(/\n/);       //改行(問題ごと)で分割
    alert(text2)
    console.log("出力テスト2");
    alert(text2.length)
    console.log(text2.length);
    var q_number = text2.length;        //問題の個数
    alert("個数"+q_number)

    var q_a = text2.split(/\s/);
    alert(q_a) 

    let i = 0;
    do{
        i += 1;
        alert(i)
        alert(text2)
        console.log(i);
        var q_a = text2.split(/\s/);    //空白で分割
        alert(q_a)
    } while(i<q_number)
    
    alert(q)
    alert(a)
}