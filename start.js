function buttonClick3(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3');
    alert("コピーしました！(3)")
}

function buttonClick10(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3\nq4 a4\nq5 a5\nq6 a6\nq7 a7\nq8 a8\nq9 a9\nq10 a10');
    alert("コピーしました！(10)")
}

function buttonClick2525(){
    window.location.href = 'second.html';
}

function buttonClick2(){
    var text = document.getElementById('text').value;
    var text2 = text.split(/\n|\s/);       //改行(問題ごと)
    var q_number = text2.length;
    var q_number2 = q_number/2        //問題の個数
    //alert("個数:   "+q_number2)

    window.location.href = 'second Q.html';

    alert("tes2")
    var q = ["tentative"];

    let i_2 =0;
    do{i_2 +=1;
        get_q = 2*i_2-2
        q[q.length] = text2[get_q];
    }while(i_2<q_number2)
    
    q.shift();
    
    var a = ["tentative"];

    let i_3 =0;
    do{i_3 +=1;
        get_a = 2*i_3-1
        a[a.length] = text2[get_a];
    }while(i_3<q_number2)

    a.shift();

    //alert("問題:   "+q)
    //alert("答え:   "+a)

    var random_pcs = Array.from(Array(q_number2).keys());
    var random_pcs2 = random_pcs;
    var random = ["tentative"];

    var ii = 0
    do{ii +=1;
        var aaa = random_pcs2.length;
        var aa = Math.floor(Math.random()*aaa);
        var number = random_pcs2[aa];
        random[random.length] = number;
        random_pcs2.splice(aa,1);
    }while(ii<q_number2)
    random.shift();
    alert("乱数数列最終結果:   "+random)

    var Qi = 0
    do{Qi +=1;
        document.getElementById('Q_number').innerHTML = "<p>第${Qi}問</p>";        
    }while(Qi<q_number2)
}