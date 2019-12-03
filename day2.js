const DAY_2_INPUT = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0';

const intCode = get1202ProgramAlarmState(DAY_2_INPUT);
const output = interpretIntCode(intCode);
console.log('DAY 2: Position 0 = ' + output[0]);

function get1202ProgramAlarmState(input) {
  const output = input.split(',').map(n => parseInt(n));
  output[1] = 12;
  output[2] = 2;

  return output;
} 

function interpretIntCode(intCode) {
  for (let i = 0; i < intCode.length; i += 4) {
    const opCode = intCode[i];
    if (opCode === 99) {
      return intCode;
    }
    if (opCode !== 1 && opCode !== 2) {
      throw new Error(`Unknown opcode: ${opCode} at location ${i}`);
    }
    const operand1 = intCode[intCode[i + 1]];
    const operand2 = intCode[intCode[i + 2]];
    const storageLocation = intCode[i + 3];
    console.log(`${i}: opCode=${opCode}, ${intCode[i + 1]} = ${operand1}, ${intCode[i + 2]} = ${operand1}, storageLocation=${storageLocation}`);

    if (opCode === 1) {
      intCode[storageLocation] = operand1 + operand2;
    } else if (opCode === 2) {
      intCode[storageLocation] = operand1 * operand2;
    }
  }
}
