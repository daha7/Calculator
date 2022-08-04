let a = ''; // Первая переменная    
let b = ''; // Вторая переменная 
let sign = ''; // Знак действия
let finish = false; 

const number = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

//для экрана 

const out = document.querySelector( '.calc-screen p' );

function clear () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
} 

document.querySelector('.cpad').onclick = clear; 

document.querySelector( '.btn').onclick = (event) => {
    // нажата не кнопка 
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка С 
    if(event.target.classList.contains('cpad')) return;

    out.textContent = '';
    // Получаю нажатую кнопку 
    const key = event.target.textContent; 

    //Если нажата кнопка 0-9 или . 
    if(number.includes(key)) {
        if(b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a!== '' && b!== '' && finish) {
            b += key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
    }

        //Если нажата кнопка + - * / 
        if(number.includes(key)) {
            sign = key;
            out.textContent = sign;
            return;
        }

        //нажата = 
        if (key === '=') {
            if (b === '') b = a; 
            switch (sign) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case '-':
                    a = a - b;
                    break;
                case 'X':
                    a = a * b;
                    break;
                case '/':
                    if (b === '0') {
                        out.textContent = 'Пошел нахуй преступник';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            finish = true; 
            out.textContent = a; 
        }
}