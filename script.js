const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')
const display = document.querySelector('.calculatorDisplay')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            console.log('number key')
        } else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            console.log('operator key!');
            /*key.classList.add('is-depressed');*/
            ;
        } else if (
            action === 'decimal' 
        ) {
            console.log('decimal key!')
        } else if (
            action === 'clear'
        ) {
            console.log('clear key!')
        } else if (
            action === 'backspace'
        ) {
            console.log('backspace key!')
        } else if (
            action === 'calculate'
        ) {
            console.log('calculate key')
        } else {
            console.log('error!!')
        }
         
    }

    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action){
            if (displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
                
            } else {
                display.textContent = displayedNum + keyContent;
        }}

        if (action === 'decimal'){
            display.textContent = displayedNum + "."
        }

        if (action === 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
        }
    }

    
})

const calculate = (n1, operator, n2) => {
    let result = ""
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide'){
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result;
}


