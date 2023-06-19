import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
  let string = "";
  
  for (let i = 1; i <= size; i++) {
    // Printing spaces
    for (let j = 0; j < size - i; j++) {
      string += " ";
    }
    
    // Printing asterisks
    for (let k = 0; k < 2 * i - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    
    string += "\n";
  }
  
  for (let i = size - 1; i >= 1; i--) {
    // Printing spaces
    for (let j = 0; j < size - i; j++) {
      string += " ";
    }
    
    // Printing asterisks
    for (let k = 0; k < 2 * i - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    
    string += "\n";
  }
  
  console.log(string);
  rl.close();
});
