const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')
const display = document.querySelector('.calculatorDisplay')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
            console.log('number key')
        } else if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
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
})

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action){
            if (displayedNum === '0'){
                display.textContent = keyContent;
            }
        }
    
        if (!action){
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
    }
})


