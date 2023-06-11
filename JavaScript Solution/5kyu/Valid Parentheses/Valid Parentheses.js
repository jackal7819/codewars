function validParentheses(parens) {
    const parens1 = parens.split('').filter(el => el === ')');
    const parens2 = parens.split('').filter(el => el === '(');
    if (parens1.length !== parens2.length || parens[0] === ')' || parens[parens.length - 1] === '('
        || parens[1] === ')' && parens[2] === ')') {
        return false;
    } else return true;
}