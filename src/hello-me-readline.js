import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input name: ', (name) => {
    console.log(`Helllo ${name}.`);
    
    rl.close();
});

