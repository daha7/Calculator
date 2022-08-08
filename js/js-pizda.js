function insert(num) {
    document.form.textView.value =
    document.form.textView.value + num; 
}

function clean() {
    document.form.textView.value = "";
} 

function equal() {
    let pisos = document.form.textView.value;
    if(pisos) {
        document.form.textView.value = eval(pisos);
    }
}

function smile() {
    document.form.textView.value = 'Ну и зачем?';
}

function nosmile() {
    document.form.textView.value = 'Не грусти, хуйца сосни';
}

