$(document).ready(function() {
    $('button').click(function() {
        let exp = $('#evaluateText').val();
        if (evalState === 'evaluated') {
            exp = '';
            $('#evaluateText').val(exp);
            evalState = 'new';
        }
        switch (this.id) {
            case 'btn0':
                $('#evaluateText').val(exp + '0');
                break;
            case 'btn1':
                $('#evaluateText').val(exp + '1');
                break;
            case 'btn2':
                $('#evaluateText').val(exp + '2');
                break;
            case 'btn3':
                $('#evaluateText').val(exp + '3');
                break;
            case 'btn4':
                $('#evaluateText').val(exp + '4');
                break;
            case 'btn5':
                $('#evaluateText').val(exp + '5');
                break;
            case 'btn6':
                $('#evaluateText').val(exp + '6');
                break;
            case 'btn7':
                $('#evaluateText').val(exp + '7');
                break;
            case 'btn8':
                $('#evaluateText').val(exp + '8');
                break;
            case 'btn9':
                $('#evaluateText').val(exp + '9');
                break;
            case 'btnLeftBracket':
                $('#evaluateText').val(exp + '(');
                break
            case 'btnRightBracket':
                $('#evaluateText').val(exp + ')');
                break;
            case 'btnClear':
                $('#evaluateText').val('');
                break;
            case 'btnDelete':
                $('#evaluateText').val(exp.substr(0, exp.length - 1));
                break;
            case 'btnSubtract':
                if (isOperatorValid(exp)) {
                    $('#evaluateText').val(exp + '-');
                }
                break;
            case 'btnAdd':
                if (isOperatorValid(exp)) {
                    $('#evaluateText').val(exp + '+');
                }
                break;
            case 'btnMultiply':
                if (isOperatorValid(exp)) {
                    $('#evaluateText').val(exp + '*');
                }
                break;
            case 'btnDivide':
                if (isOperatorValid(exp)) {
                    $('#evaluateText').val(exp + '/');
                }
                break;
            case 'btnDecimal':
                $('#evaluateText').val(exp + '.');
                break;
            case 'btnEvaluate':
                $('#evaluateText').val(eval(exp));
                evalState = 'evaluated';
                break;
        }
    });
    evalState = 'new';

    function isOperatorValid(exp) {
        let invalid = ['(','*','/','+','-'];
        if (invalid.includes(exp[exp.length-1]) || exp === '') {
            return false;
        }
        return true;
    }
});