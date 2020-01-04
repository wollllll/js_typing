'use strict';

{
    const start = document.getElementById("start");
    const words = [
        'hello',
        'blue',
        'sky',
    ];
    let i = 0;
    let j = 0;
    shuffle(words);

    start.addEventListener("click", e => {
        start.textContent = words[i];
        inputKey();
    });

    //words配列の中身をシャッフル
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }

        return arr;
    }

    //入力した文字の正誤判定
    function inputKey() {
        window.addEventListener("keydown", e => {
            let word = words[i];
            if (e.key == word[j]) {
                let placeholder = '';
                for (let count = 1; count <= j + 1; count++) {
                    placeholder += "_";
                }
                start.textContent = placeholder + word.slice(j + 1);
                j++;
                if (j == word.length) {
                    i++;
                    j = 0;
                    start.textContent = words[i];
                    inputKey();
                }
            } else {
                console.log('miss');
            }
        });
    }
}
