let oper;
let value_one;
let value_two;

function number(num) {
    let display_num = document.getElementById('num');
    display_num.value+=num;
    console.log(num);
}

function operator(ope) {
    let display_num = document.getElementById('num');
    value_one = display_num.value;
    oper = ope;
    display_num.value = '';
    console.log(value_one,ope)
}

function equal() {
    let display_num = document.getElementById('num');
    value_two = display_num.value;
    console.log(oper);
    console.log(value_one);
    value_one = parseInt(value_one);
    value_two = parseInt(value_two);
    switch (oper) {
    case '+':
      display_num.value = value_one + value_two;
      break;
    case '-':
      display_num.value = value_one - value_two;
      break;
    case '*':
      display_num.value = value_one * value_two;
      break;
    case '/':
      display_num.value = value_one / value_two;
      break;
    default:
      console.log("Invalid operator");
      return NaN;
    }
};

