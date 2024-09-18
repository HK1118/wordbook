function buttonClick(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3');
    alert("コピーしました！")
    alert("q1 a1\nq2 a2\nq3 a3")
}


function buttonClick2(){
    var text = document.getElementById('text').value;
    var text2 = text.split(/\n|\s/);       //改行(問題ごと)
    var q_number = text2.length;
    var q_number2 = q_number/2
    alert(q_number2)        //問題の個数
    alert("個数"+q_number2)

    
    let i_2 =0;
    do{i_2 +=1;
        alert(i_2)
        get_q = 2*i_2-2
        alert("結果"+get_q)
        var q = text2[get_q];
        alert(q)
    }while(i_2<q_number2)
    
    let i_3 =0;
    do{i_3 +=1;
        alert(i_3)
        get_a = 2*i_3-1
        alert("計算結果"+get_a)
        var a = text2[get_a]
        alert(a)
    }while(i_3<q_number2)

    var ii =0;
    do{ii +=1;
        alert(ii)
        var ramdom = 
        alert(ramdom)
    }while(ii<q_number2)
}