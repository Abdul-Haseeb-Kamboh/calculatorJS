const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

const writeToLog = (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  let logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
};

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDiscription = `${operator} ${resultBeforeCalc} ${calcNumber}`;
  outputResult(currentResult, calcDiscription);
};

const getUserNumberInput = () => {
  return parseInt(userInput.value);
};

const Add = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;

  writeToLog("Add", initialResult, enteredNumber, currentResult);
  createAndWriteOutput("+", initialResult, enteredNumber);
  outputResult(currentResult, calcDescription);
};

const Subtract = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult -= enteredNumber;

  writeToLog("Subtract", initialResult, enteredNumber, currentResult);
  createAndWriteOutput("-", initialResult, enteredNumber);
  outputResult(currentResult, calcDescription);
};

const Multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult *= enteredNumber;

  writeToLog("Multiply", initialResult, enteredNumber, currentResult);
  createAndWriteOutput("*", initialResult, enteredNumber);
  outputResult(currentResult, calcDescription);
};

const Divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult /= enteredNumber;

  writeToLog("Divide", initialResult, enteredNumber, currentResult);
  createAndWriteOutput("/", initialResult, enteredNumber);
  outputResult(currentResult, calcDescription);
};

addBtn.addEventListener("click", Add);
subtractBtn.addEventListener("click", Subtract);
multiplyBtn.addEventListener("click", Multiply);
divideBtn.addEventListener("click", Divide);
