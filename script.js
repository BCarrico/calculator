 

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')
const display = document.querySelector('.calculatorDisplay')

// when user choices first number, an operator, and second number perform calculation based off of what operator was chosen//

const calculate = (n1, operator, n2) => {
    let result = ""
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide'){
        if (n1 === '0' || n2 === '0'){
            console.log("No divide by 0")
            alert("You cannot divide by 0 silly!")
        } else {
        result = parseFloat(n1) / parseFloat(n2)}
    }

    return result;
}


//if keys *calculatorKeys* is clicked, do something//
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

// !action meaning, number key pressed. If the display shows 0, or the previous key was an operator, or if the previous key was calculate, show number key pressed.
// else -> push an additional number next to what is displayed. Last, change previousKeyType to number for storage

        if (!action){
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'){
                display.textContent = keyContent;
                console.log(keyContent + "pressed")
            } else {
                display.textContent = displayedNum + keyContent;
                console.log(keyContent + "pressed")
        }
        calculator.dataset.previousKeyType = 'number'
        }

// if the action key pressed was decimal, and the display does NOT show a '.' already, then push a '.' next to the displayed number. 
// else -> if the previous key was an operator or calculate change display content to "0."
//last change the previous key type to decimal

        if (action === 'decimal'){
            if (!displayedNum.includes('.')){
                display.textContent = displayedNum + "."
                } else if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
                 display.textContent = '0.'
        } calculator.dataset.previousKeyType = 'decimal'
        }

//if the action key pressed is calculate. First need to store values and which operator was pressed.
//if there is a first value, then calculate will run if calculate was pushed. Second value has to be saved for concurrent calculations

        if (action === 'calculate'){
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            let secondValue = displayedNum;
            console.log('calculate key')
            

            if (firstValue){
                if (previousKeyType === 'calculate'){
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.previousKeyType = 'calculate'
            calculator.dataset.modValue = secondValue
        }
//if operator is pushed, save the first value, operator and displayedNum *second value*.


        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'){
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }
            
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.operator = action;
            console.log('operator key!');
            /*key.classList.add('is-depressed');*/
            ;
        } 
//Need to clear ALL information if AC is pushed.       
        if (action === 'clear') {
            if (key.textContent === 'AC'){
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else {
            key.textContent = 'AC'
            }
            display.textContent = 0
            console.log('clear key!')
            calculator.dataset.previousKeyType = 'clear'
        }
        
        if (action !== 'clear'){
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
        }
        
        if (action === 'backspace') {
            console.log('backspace key!')
            if (displayedNum !== '0'){
            display.textContent = (displayedNum.slice(0,-1))
            }
            calculator.dataset.previousKeyType = 'backspace'
        }
    }
    }
)

