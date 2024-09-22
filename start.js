function buttonClick(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3');
    alert("コピーしました！")
}


function buttonClick2(){
    var text = document.getElementById('text').value;
    var text2 = text.split(/\n|\s/);       //改行(問題ごと)
    var q_number = text2.length;
    var q_number2 = q_number/2        //問題の個数
    alert("個数"+q_number2)

    var q = ["tentative"];

    let i_2 =0;
    do{i_2 +=1;
        get_q = 2*i_2-2
        var get_q_number = Number(get_q);
        q[q.length] = text2[get_q_number];
    }while(i_2<q_number2)
    
    var a = ["tentative"];

    let i_3 =0;
    do{i_3 +=1;
        get_a = 2*i_3-1
        a[a.length] = text2[get_a];
        alert(a)
    }while(i_3<q_number2)

    alert("問題"+q)
    alert("答え"+a)

    var random_pcs = Array.from(Array(q_number2).keys());
    alert(random_pcs)
    var random = shuffle()
}