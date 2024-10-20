function buttonClick3(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3');
    //alert("コピーしました！(3)")
}

function buttonClick10(){
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3\nq4 a4\nq5 a5\nq6 a6\nq7 a7\nq8 a8\nq9 a9\nq10 a10');
    //alert("コピーしました！(10)")
}

function copy_word(){
    navigator.clipboard.writeText('1+1= 2 2+2= 4 3+3= 6 4+4= 8 5+5= 10 6+6= 12 7+7= 14 8+8= 16 9+9= 18 10+10= 20');
    //alert("コピーしました！(足し算")
}

function buttonClick2525(){
    window.location.replace('Q.html');
}

function buttonClick2(){
    var text = document.getElementById('text').value;
    localStorage.setItem('text', text);
    var text2 = text.split(/\n|\s/);       //改行(問題ごと)
    var q_number = text2.length;
    var q_number2 = q_number/2        //問題の個数
    //alert("個数:   "+q_number2)

    window.location.href = 'Q.html';

    //alert("tes2")
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
    //alert("乱数数列最終結果:   "+random)

}
function to_Q_cha(){
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
        function AAA(){
            
            var aaaa = document.getElementById('Q_number');
            var count2 = count + 1;
            aaaa.textContent = `第${count2}問`;
        }
        AAA();
        function Q(){
            var Q1 = document.getElementById('Q');
            var QQ = localStorage.getItem('text');
            var QQQ = QQ.split(/\n|\s/);
            get_Q = 2*count
            Q1.textContent = `${QQQ[get_Q]}`;
            //alert(QQQ[get_Q]);
        }
        Q();
        

}
            
function AA(){
    window.location.replace('Q.html');
}
        

function page_change(){
    window.location.replace('A.html');
    var YourA = document.getElementById('your_A').value;
    //alert("あなたの回答:   "+YourA)
    localStorage.setItem('yourA', YourA);

}

// ページ遷移の回数をカウントする関数
function countQPageVisits() {
    // ローカルストレージからカウントを取得
    let count = localStorage.getItem('QPageVisitCount');
    
    // カウントが存在しない場合は初期化
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }
    
    // カウントをインクリメント
    count += 1;
    
    // ローカルストレージにカウントを保存
    localStorage.setItem('QPageVisitCount', count);
}

// Q.htmlに遷移する関数
function AA(){
    countQPageVisits(); // ページ遷移の回数をカウント
    window.location.replace('Q.html');
}

// ページ遷移の回数を取得する関数
function getQPageVisitCount() {
    let count = localStorage.getItem('QPageVisitCount');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }
    return count;
}

function count_reset(){
    localStorage.setItem('QPageVisitCount', 0);
}

function page_A(){
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
        function AAA(){
            
            var aaaa = document.getElementById('A_number');
            var count2 = count + 1;
            aaaa.textContent = `第${count2}問`;
        }
        AAA();
        function A(){
            var A1 = document.getElementById('A');
            var AA = localStorage.getItem('text');
            var AAA = AA.split(/\n|\s/);
            var get_A = 2*count + 1;
            A1.textContent = `正しい答え:　　${AAA[get_A]}`;
            //alert(AAA[get_A]);
        }
        A();
        function YourA(){
            let yourA = localStorage.getItem('yourA');
            var A = document.getElementById('yourA');
            A.textContent = `あなたの回答:　${yourA}`;
        }
        YourA();
}