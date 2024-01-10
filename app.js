function showAnswer(id) {
    var answer_id = "main__topic__answer" + id;
    var button_id = "main__topic__question__button" + id;
    var answer = document.getElementById(answer_id);
    var button = document.getElementById(button_id);
    if(answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.src = "./assets/images/icon-plus.svg";
    }
    else {
        answer.classList.toggle('show');
        button.src = "./assets/images/icon-minus.svg";
    }
}