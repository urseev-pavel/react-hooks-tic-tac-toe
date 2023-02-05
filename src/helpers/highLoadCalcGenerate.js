export default function highLoadCalcGenerate(calculationFinishMessage) {
  let num;
  const steps = 42000;
  for (let i = 0; i < steps; i += 1) {
    num = Math.random() * i;
    console.log('!!! HIGH LOAD CALCULATION !!! WAIT:', steps - i);
  }
  console.log(calculationFinishMessage);
  return num;
}
