$(document).ready(function() {
    setHeight();
    changeFontSize();
    let result;
    let expression;
    let evaluated = true;
    $('button').click(function() {
        let exp = $('#expression').text();
        if (exp === '0') {
            exp = '';
        }
        switch (this.id) {
            case 'btn0':
                $('#expression').text(exp + '0');
                break;
            case 'btn1':
                $('#expression').text(exp + '1');
                break;
            case 'btn2':
                $('#expression').text(exp + '2');
                break;
            case 'btn3':
                $('#expression').text(exp + '3');
                break;
            case 'btn4':
                $('#expression').text(exp + '4');
                break;
            case 'btn5':
                $('#expression').text(exp + '5');
                break;
            case 'btn6':
                $('#expression').text(exp + '6');
                break;
            case 'btn7':
                $('#expression').text(exp + '7');
                break;
            case 'btn8':
                $('#expression').text(exp + '8');
                break;
            case 'btn9':
                $('#expression').text(exp + '9');
                break;
            case 'btnLeftBracket':
                if (isBracketValid('(',exp)) {
                    $('#expression').text(exp + '(');
                    openBrackets = true;
                }
                break
            case 'btnRightBracket':
                if (isBracketValid(')',exp)) {
                    $('#expression').text(exp + ')');
                    openBrackets = false;
                }
                break;
            case 'btnClear':
                $('#result').text(result);
                $('#expression').text('0');
                break;
            case 'btnDelete':
                if ($('#expression').text() !== '0') {
                    $('#expression').text(exp.substr(0, exp.length - 1));
                }
                break;
            case 'btnSubtract':
                if (isOperatorValid(exp)) {
                    $('#expression').text(exp + '-');
                }
                break;
            case 'btnAdd':
                if (isOperatorValid(exp)) {
                    $('#expression').text(exp + '+');
                }
                break;
            case 'btnMultiply':
                if (isOperatorValid(exp)) {
                    $('#expression').text(exp + '*');
                }
                break;
            case 'btnDivide':
                if (isOperatorValid(exp)) {
                    $('#expression').text(exp + '/');
                }
                break;
            case 'btnDecimal':
                $('#expression').text(exp + '.');
                break;
            case 'btnEvaluate':
                try {
                    $('#result').text(exp + ' =');
                    $('#expression').text(eval(exp));
                } catch(e) {
                    $('#expression').text('ERROR');
                }
                break;
        }
    });
    openBrackets = false;
});

function isOperatorValid(exp) {
    let invalid = ['(','*','/','+','-'];
    if (invalid.includes(exp[exp.length-1]) || exp === '') {
        return false;
    }
    return true;
}

function isBracketValid(bracket,exp) {
    let invalid = [];
    if (bracket === '(') {
        invalid = ['0','1','2','3','4','5','6','7','8','9','.'];
    } else {
        if (openBrackets === false) {
            return false;
        }
        invalid = ['(','*','/','+','-'];
    }
    if (invalid.includes(exp[exp.length-1])) {
        return false;
    }
    return true;
}

function changeFontSize() {
    $('#expression').css('font-size', $('#expressionDiv').height() * 0.8);
    $('#result').css('font-size', $('#resultDiv').height() * 0.8);
    $('button').css('font-size', $('button').height() * 0.8);
}

function setHeight() {
    let resultHeight = $('#resultDiv').height();
    let expressionHeight = $('#expressionDiv').height();
    $('#resultDiv').height(resultHeight);
    $('#expressionDiv').height(expressionHeight);
}