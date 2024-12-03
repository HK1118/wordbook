

function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
}

loadExternalScript('https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js');

function addText(elementId, text) {
    document.getElementById(elementId).value += text;
}

function fileRead(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const contents = e.target.result;
            addText('input_text', contents);
        };
        reader.readAsText(file);
    } else {
        alert('ファイルが読み込めません');
    }
}

function start() {
    alert('start');
    const inputTextArray = document.getElementById('input_text').value.split(/\n|\s/).filter(element => element !== "");
    if (inputTextArray.length % 2 !== 0 || inputTextArray.length === 0) { // 要素が奇数個又は0個の場合リターン
        alert('入力が正しくありません');
        return;
    }
    initializeQuestion(inputTextArray);
}

function select() {
    alert('こんにちは');
    var select = document.getElementById('select');
    var selectValue = select.options[selectValue.selectedIndex].value;
    alert(selectValue);
}

function initializeQuestion(textArray) {
    const questionCount = textArray.length / 2;    // 問題の個数
    const questionIndexArray = Array.from(Array(questionCount).keys());
    for (let i = questionIndexArray.length - 1; i > 0; i--) { // questionIndexArrayをシャッフル
        let j = Math.floor(Math.random() * (i + 1));
        [questionIndexArray[i], questionIndexArray[j]] = [questionIndexArray[j], questionIndexArray[i]];
    }
    localStorage.setItem('inputTextArray', JSON.stringify(textArray));
    localStorage.setItem('questionCount', questionCount);
    localStorage.setItem('questionIndexArray', JSON.stringify(questionIndexArray));
    window.location.href = 'Q.html';
}

function questionPageGenerate() {
    const count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
    const question_numbers = JSON.parse(localStorage.getItem('questionIndexArray'));
    const question_number_text = document.getElementById('Q_number');
    question_number_text.textContent = `第${count + 1}問`;
    const random_key = question_numbers[count] * 2;
    const inputTextArray = JSON.parse(localStorage.getItem('inputTextArray'));
    const questionElement = document.getElementById('Q');
    questionElement.textContent = inputTextArray[random_key];
    localStorage.setItem('now_Question', inputTextArray[random_key]);
}

function pageChange() {
    window.location.replace('A.html');
    var YourA = document.getElementById('your_A').value;
    localStorage.setItem('yourA', YourA);
}

function judgmentNextPage() {
    var visitCount = parseInt(localStorage.getItem('QPageVisitCount')) || 0;
    visitCount += 1;
    localStorage.setItem('QPageVisitCount', visitCount);

    let questionCount = parseInt(localStorage.getItem('questionCount')) || 0;
    if (visitCount > questionCount - 1) {
        window.location.replace('fin.html');
    } else {
        window.location.replace('Q.html');
    }
}

function answerPageGenerate() {
    let random_numbers = JSON.parse(localStorage.getItem('questionIndexArray'));
    let count = parseInt(localStorage.getItem('QPageVisitCount')) || 0;

    document.getElementById('A_number').textContent = `第${count + 1}問`;
    var random3 = random_numbers[count];
    var AA = JSON.parse(localStorage.getItem('inputTextArray'));
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

function finalPageGenerate() {
    let correct_count = parseInt(localStorage.getItem('correct_count')) || 0;
    let miss_count = parseInt(localStorage.getItem('miss_count')) || 0;
    var correct = document.getElementById('correct');
    var miss = document.getElementById('miss');
    correct.textContent = `正解数:   ${correct_count}`;
    miss.textContent = `不正解数:   ${miss_count}`;
}

function softwareKeyboard(textAreaId, keyboardInput) {
    const element = document.getElementById(textAreaId);
    if (keyboardInput === 'backspace') {
        element.value = element.value.slice(0, -1);
    } else if (keyboardInput === 'clear') {
        element.value = '';
    } else {
        element.value += keyboardInput;
    }
}

function changeSoftwareKeyboard(currentKeyboardId, newKeyboardId) {
    document.getElementById(currentKeyboardId).classList.add('hidden');
    document.getElementById(newKeyboardId).classList.remove('hidden');
}

function saveToFile() {
    const inputTextArray = JSON.parse(localStorage.getItem('inputTextArray'));
    let blob = new Blob([inputTextArray.join(' ') + ' '], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'Question.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function retry() {
    const inputTextArray = JSON.parse(localStorage.getItem('inputTextArray'));
    localStorage.clear();
    initializeQuestion(inputTextArray);
}