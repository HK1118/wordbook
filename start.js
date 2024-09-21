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

    
    let i_2 =0;
    do{i_2 +=1;
        get_q = 2*i_2-2
        var q = text2[get_q];
    }while(i_2<q_number2)
    
    let i_3 =0;
    do{i_3 +=1;
        get_a = 2*i_3-1
        var a = text2[get_a]
    }while(i_3<q_number2)

    alert("問題"+q)
    alert("答え"+a)

    var ii =0;
    do{ii +=1;
        alert(ii)
        var n = q_number2+1;
        var random = Math.floor(Math.random()*n)+0;
        if(random.indexOf(random2) != -1){
            var random2 = rand
        } else{
            var random2
        }
        alert("乱数"+random)
    }while(ii<q_number2)
}