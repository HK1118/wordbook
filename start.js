function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
}

loadExternalScript('https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js');


function buttonClick3() {
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3');
    //alert("コピーしました！(3)")
}

function buttonClick10() {
    navigator.clipboard.writeText('q1 a1\nq2 a2\nq3 a3\nq4 a4\nq5 a5\nq6 a6\nq7 a7\nq8 a8\nq9 a9\nq10 a10');
    //alert("コピーしました！(10)")
}
function Japanese_English() {
    navigator.clipboard.writeText('英語 English 日本語 Japanese 犬 dog 猫 cat')
}

function copy_word() {
    navigator.clipboard.writeText('1+1= 2 2+2= 4 3+3= 6 4+4= 8 5+5= 10 6+6= 12 7+7= 14 8+8= 16 9+9= 18 10+10= 20');
    //alert("コピーしました！(足し算")
    party.confetti(runButton, {
        count: party.variation.range(20, 40),
    });
}

function buttonClick2525() {
    window.location.replace('Q.html');
}

function fileRead(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload =function(e){
            const contents = e.target.result;
            document.getElementById('input_text').value = contents;
        };
        reader.readAsText(file);
    } else{
        alert('ファイルが読み込めません');
    }
}

function start() {
    const input_texts = document.getElementById('input_text').value.split(/\n|\s/).filter(element => element !== ""); // 入力されたテキストを取得し、改行で分割、空の要素を削除
    if (input_texts.length % 2 !== 0) { // 要素が奇数個の場合リターン
        alert('問題と答えの数が一致していません');
        return;
    }

    localStorage.setItem('input_texts_save', JSON.stringify(document.getElementById('input_text').value)); // 配列はJSON形式でローカルストレージに保存
    // 配列はJSON形式でローカルストレージに保存
    // 取り出す時はJSON.parse()で取り出す
    localStorage.setItem('input_texts', JSON.stringify(input_texts));
    const question_count = input_texts.length / 2;    // 問題の個数
    localStorage.setItem('question_count', question_count);

    window.location.href = 'Q.html';

    const question_numbers = Array.from(Array(question_count).keys());
    for (let i = question_numbers.length - 1; i > 0; i--) { // question_numbersをシャッフル
        let j = Math.floor(Math.random() * (i + 1));
        [question_numbers[i], question_numbers[j]] = [question_numbers[j], question_numbers[i]];
    }
    localStorage.setItem('question_numbers', JSON.stringify(question_numbers));
    localStorage.setItem('correct_count', null);
    localStorage.setItem('miss_count', null);

}

function page_generate() {
    const count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
    const question_numbers = JSON.parse(localStorage.getItem('question_numbers'));
    const question_number_text = document.getElementById('Q_number');
    question_number_text.textContent = `第${count + 1}問`;
    const random_key = question_numbers[count] * 2;
    const input_texts = JSON.parse(localStorage.getItem('input_texts'));
    const question_text = document.getElementById('Q');
    question_text.textContent = input_texts[random_key];
}

function page_change() {
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
        count = parseInt(count);
    }

    // カウントをインクリメント
    count += 1;

    // ローカジにカウントを保存
    localStorage.setItem('QPageVisitCount', count);
}

// Q.htmlに遷移する関数
function AA() {
    countQPageVisits(); // ページ遷移の回数をカウント

    check();
}

// // ページ遷移の回数を取得する関数
// function getQPageVisitCount() {
//     let count = localStorage.getItem('QPageVisitCount');
//     if (count === null) {
//         count = 0;
//     } else {
//         count = parseInt(count, 10);
//     }
//     return count;
// }

function local_storage_clear() {
    localStorage.clear();
}



function page_A() {
    let random = JSON.parse(localStorage.getItem('question_numbers'));
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;

    var aaaa = document.getElementById('A_number');
    var count2 = count + 1;
    aaaa.textContent = `第${count2}問`;
    var random3 = random[count];
    var A1 = document.getElementById('A');
    var AA = JSON.parse(localStorage.getItem('input_texts'));
    var random4 = random3 * 2 + 1;
    A1.textContent = `正しい答え:　　${AA[random4]}`;
    localStorage.setItem('correct', AA[random4]);

    let yourA = localStorage.getItem('yourA');
    var A = document.getElementById('yourA');
    A.textContent = `あなたの回答:　${yourA}`;
    localStorage.setItem('yourA', yourA);

    var correct = localStorage.getItem('correct');
    var correct_miss = document.getElementById('correct_miss');
    var correct_count = parseInt(localStorage.getItem('correct_count')) || 0;
    var miss_count = parseInt(localStorage.getItem('miss_count')) || 0;

    if (yourA == correct) {
        correct_miss.textContent = "正解！！！";
        correct_count += 1;
        localStorage.setItem('correct_count', correct_count);
    } else {
        correct_miss.textContent = "不正解...";
        miss_count += 1;
        localStorage.setItem('miss_count', miss_count);
    }

}

//ぺーーーーじ遷移ーーーー！！最終！！！！！！
function check() {
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
    let q_number = parseInt(localStorage.getItem('question_count')) || 0;

    if (count > q_number - 1) {
        window.location.replace('fin.html');
    } else {
        window.location.replace('Q.html');
    }
}

function fin() {
    let correct_count = parseInt(localStorage.getItem('correct_count')) || 0;
    let miss_count = parseInt(localStorage.getItem('miss_count')) || 0;
    var correct = document.getElementById('correct');
    var miss = document.getElementById('miss');
    correct.textContent = `正解数:   ${correct_count}`;
    miss.textContent = `不正解数:   ${miss_count}`;
}

function pressKey(key) {
    const your_A = document.getElementById('your_A');
    your_A.value += key;
}
function pressKey_s(key) {
    const text = document.getElementById('input_text');
    text.value += key;
}
function pressKey_s_delete() {
    let text = document.getElementById('input_text');
    text.value = text.value.slice(0, -1);
}
function pressKey_delete() {
    let your_A = document.getElementById('your_A');
    your_A.value = your_A.value.slice(0, -1);
}
function pressKey_s_clear() {
    let text = document.getElementById('input_text');
    text.value = "";
}
function pressKey_clear() {
    let your_A = document.getElementById('your_A');
    your_A.value = "";
}

function pressKey_s_shift() {
    document.getElementById('keypad_s_alpha').classList.add('hidden');
    document.getElementById('keypad_s_ALPHA').classList.remove('hidden');

}
function pressKey_s_SHIFT() {
    document.getElementById('keypad_s_ALPHA').classList.add('hidden');
    document.getElementById('keypad_s_alpha').classList.remove('hidden');
}

function save() {
    let input_texts = JSON.parse(localStorage.getItem('input_texts_save'));
    //let input_texts = JSON.parse(localStorage.getItem('input_texts'));
    alert(input_texts);
    let blob = new Blob([input_texts], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'Question.text';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}