window.addEventListener('orientationchange', function () {
    location.reload();
});

$(document).ready(function() {
    setHeight();
    changeFontSize();
    let result = 0;
    let evaluated = true;
    let openBrackets = 0;
    $('button').click(function() {
        if (evaluated) {
            switch (this.className) {
                case 'btnClear':
                    $('#expression').text('0');
                    $('#result').text('Ans = ' + result);
                    break;
                case 'btnOperator':
                    $('#expression').text($('#expression').text() + $(this).text());
                    $('#result').text('Ans = ' + result);
                    evaluated = false;
                    break;
                case 'btnNumber':
                    $('#result').text('Ans = ' + result);
                    $('#expression').text($(this).text());
                    evaluated = false;
                    break;
                case 'btnBracket':
                    if ($(this).is('#btnLeftBracket')) {
                        openBrackets++;
                    } else {
                        if (openBrackets < 1) {
                            break;
                        } else {
                            openBrackets--;
                        }
                    }
                    $('#expression').text($(this).text());
                    $('#result').text('Ans = ' + result);
                    evaluated = false;
                    break;
                case 'btnEval':
                    $('#result').text($('#expression').text() + ' =');
                    $('#expression').text(eval($('#expression').text()));
                    break;
            }
        } else {
            switch (this.className) {
                case 'btnClear':
                    if ($(this).is('#btnClear')) {
                        $('#expression').text('0');
                        $('#result').text('Ans = ' + result);
                        evaluated = true;
                    } else {
                        $('#expression').text($('#expression').text().substring(0, $('#expression').text().length - 1));
                    }
                    break;
                case 'btnOperator':
                    $('#expression').text($('#expression').text() + $(this).text());
                    break;
                case 'btnNumber':
                    $('#expression').text($('#expression').text() + $(this).text());
                    break;
                case 'btnBracket':
                    if (!isBracketValid(this.id)) {
                        break;
                    }
                    if ($(this).is('#btnLeftBracket')) {
                        openBrackets++;
                    } else {
                        if (openBrackets < 1) {
                            break;
                        } else {
                            openBrackets--;
                        }
                    }
                    $('#expression').text($('#expression').text() + $(this).text());
                    $('#result').text('Ans = ' + result);
                    evaluated = false;
                    break;
                case 'btnEval':
                    try {
                        result = eval($('#expression').text());
                    } catch {
                        result = 'ERROR';
                    }
                    $('#result').text($('#expression').text() + ' =');
                    $('#expression').text(result);
                    evaluated = true;
                    break;
            }
        }
    });
});

function isBracketValid(btn) {
    let valid;
    if (btn === 'btnLeftBracket') {
        valid = ['+','-','*','/','('];
    } else {
        valid = ['0','1','2','3','4','5','6','7','8','9',')'];
    }
    if (valid.includes($('#expression').text()[$('#expression').text().length - 1])) {
        return true;
    }
    return false;
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