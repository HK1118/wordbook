function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
}

loadExternalScript('https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js');

function setTextArea(setText) {
    document.getElementById('input_text').value += setText + ' ';
}

function fileRead(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const contents = e.target.result;
            setTextArea(contents);
        };
        reader.readAsText(file);
    } else {
        alert('ファイルが読み込めません');
    }
}

function start() {
    var input_text_normal = document.getElementById('input_text').value;
    localStorage.setItem('input_text_normal', input_text_normal);

    const input_texts = document.getElementById('input_text').value.split(/\n|\s/).filter(element => element !== "");

    if (input_texts.length % 2 !== 0 || input_texts.length === 0) { // 要素が奇数個又は0個の場合リターン
        alert('入力が正しくありません');
        return;
    }

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
}

function questionPageGenerate() {
    const count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
    const question_numbers = JSON.parse(localStorage.getItem('question_numbers'));
    const question_number_text = document.getElementById('Q_number');
    question_number_text.textContent = `第${count + 1}問`;
    const random_key = question_numbers[count] * 2;
    const input_texts = JSON.parse(localStorage.getItem('input_texts'));
    const question_text = document.getElementById('Q');
    question_text.textContent = input_texts[random_key];
    localStorage.setItem('now_Question', input_texts[random_key]);
}

function pageChange() {
    window.location.replace('A.html');
    var YourA = document.getElementById('your_A').value;
    //alert("あなたの回答:   "+YourA)
    localStorage.setItem('yourA', YourA);

}

// ページ遷移の回数をカウントする関数
function countQPageVisits() {
    // ローカルストレージからカウントを取得
    var count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;

    count += 1;

    // ローカルストレージにカウントを保存
    localStorage.setItem('QPageVisitCount', count);
}

// Q.htmlに遷移する関数
function AA() {
    countQPageVisits(); // ページ遷移の回数をカウント

    check();
}

function page_A() {
    let random_numbers = JSON.parse(localStorage.getItem('question_numbers'));
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;

    document.getElementById('A_number').textContent = `第${count +1}問`;
    var random3 = random_numbers[count];
    var AA = JSON.parse(localStorage.getItem('input_texts'));
    var random4 = random3 * 2 + 1;
    document.getElementById('A').textContent = `正しい答え:　　${AA[random4]}`;

    let yourA = localStorage.getItem('yourA');
    document.getElementById('yourA').textContent = `あなたの回答:　${yourA}`;

    var correct = AA[random4];
    var correct_miss = document.getElementById('correct_miss');
    var correct_count = parseInt(localStorage.getItem('correct_count')) || 0;
    var miss_count = parseInt(localStorage.getItem('miss_count')) || 0;
    if (yourA == correct) {
        correct_miss.textContent = "正解！！！";
        correct_count += 1;
        localStorage.setItem('correct_count', correct_count);

        var correct_yourA = JSON.parse(localStorage.getItem('correct_yourA')) || [];
        correct_yourA.push(yourA);
        localStorage.setItem('correct_yourA', JSON.stringify(correct_yourA));

        var correct_Answer = JSON.parse(localStorage.getItem('correct_Answer')) || [];
        correct_Answer.push(AA[random4]);
        localStorage.setItem('correct_yourA', JSON.stringify(correct_Answer));


        var correct_Question = JSON.parse(localStorage.getItem('correct_Question')) || [];
        correct_Question.push();
        localStorage.setItem('correct_Question', JSON.stringify(correct_Question));
    } else {
        correct_miss.textContent = "不正解...";
        miss_count += 1;
        localStorage.setItem('miss_count', miss_count);

        var miss_yourA = JSON.parse(localStorage.getItem('miss_yourA')) || [];
        miss_yourA.push(yourA);
        localStorage.setItem('miss_yourA', JSON.stringify(miss_yourA));

        var miss_Answer = JSON.parse(localStorage.getItem('miss_Answer')) || [];
        miss_Answer.push(AA[random4]);
        localStorage.setItem('miss_Answer', JSON.stringify(miss_Answer));

        var miss_Question = JSON.parse(localStorage.getItem('miss_Question')) || [];
        miss_Question.push();
        localStorage.setItem('miss_Question', JSON.stringify(miss_Question));
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

function softwareKeyboard(id, input_key) {
    const element = document.getElementById(id);
    if (input_key === 'backspace') {
        element.value = element.value.slice(0, -1);
    } else if (input_key === 'clear') {
        element.value = '';
    } else {
        element.value += input_key;
    }
}

function changeSoftwareKeyboard(change_from_id, change_to_id) {
    document.getElementById(change_from_id).classList.add('hidden');
    document.getElementById(change_to_id).classList.remove('hidden');
}

function save() {
    const input_texts = JSON.parse(localStorage.getItem('input_texts'));
    let blob = new Blob([input_texts.join(' ')], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'Question.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function retry(){
    var Question = localStorage.getItem('input_text_normal');
    navigator.clipboard.writeText(Question);わ
    window.location.href='index.html';
}