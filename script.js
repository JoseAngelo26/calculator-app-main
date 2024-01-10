document.addEventListener('DOMContentLoaded', function() {
    let currentInput = '';
    let currentOperator = '';
    let prevInput = '';
    
    const screen = document.querySelector('.screen');
    const keys = document.querySelectorAll('.key');
  
    keys.forEach(key => {
      key.addEventListener('click', handleClick);
    });
  
    function handleClick() {
      const keyValue = this.innerText;
      
      if (isNumber(keyValue)) {
        handleNumber(keyValue);
      } else if (isOperator(keyValue)) {
        handleOperator(keyValue);
      } else if (keyValue === '=') {
        handleEqual();
      } else if (keyValue === 'C') {
        clearCalculator();
      } else {
        // Handle other keys (e.g., decimal point)
        // You can add more specific handling based on your requirements
        console.log(`Clicked ${keyValue}`);
      }
  
      updateScreen();
    }
  
    function isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  
    function isOperator(value) {
      return ['+', '-', '*', '/'].includes(value);
    }
  
    function handleNumber(number) {
      currentInput += number;
    }
  
    function handleOperator(operator) {
      if (currentOperator !== '') {
        handleEqual();
      }
      currentOperator = operator;
      prevInput = currentInput;
      currentInput = '';
    }
  
    function handleEqual() {
      if (currentOperator !== '' && prevInput !== '' && currentInput !== '') {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
        switch (currentOperator) {
          case '+':
            currentInput = (num1 + num2).toString();
            break;
          case '-':
            currentInput = (num1 - num2).toString();
            break;
          case '*':
            currentInput = (num1 * num2).toString();
            break;
          case '/':
            currentInput = (num1 / num2).toString();
            break;
          default:
            break;
        }
        currentOperator = '';
        prevInput = '';
      }
    }
  
    function clearCalculator() {
      currentInput = '';
      currentOperator = '';
      prevInput = '';
    }
  
    function updateScreen() {
      screen.innerText = currentInput || '0';
    }
  });
  