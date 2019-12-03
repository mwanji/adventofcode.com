const DAY_2_INPUT = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0';

const DAY_2_PART_2_ANSWER = 19690720;

nouns: for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const intCode = getInitialIntCode(DAY_2_INPUT, noun, verb);
    const output = interpretIntCode(intCode);
    if (output[0] === DAY_2_PART_2_ANSWER) {
      console.log(`FOUND: noun = ${noun}; verb = ${verb}; answer = ${noun * 100 + verb}`);
      break nouns;
    }
  }
}

function getInitialIntCode(input, noun, verb) {
  const output = input.split(',').map(n => parseInt(n));
  output[1] = noun;
  output[2] = verb;

  return output;
} 

function interpretIntCode(intCode) {
  for (let i = 0; i < intCode.length; i += 4) {
    const opCode = intCode[i];
    if (opCode === 99) {
      return intCode;
    }
    if (opCode !== 1 && opCode !== 2) {
      return [-1];
    }
    const operand1 = intCode[intCode[i + 1]];
    const operand2 = intCode[intCode[i + 2]];
    const storageLocation = intCode[i + 3];

    if (opCode === 1) {
      intCode[storageLocation] = operand1 + operand2;
    } else if (opCode === 2) {
      intCode[storageLocation] = operand1 * operand2;
    }
  }
}
