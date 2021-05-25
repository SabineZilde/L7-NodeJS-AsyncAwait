import { accessSync, readFileSync, writeFileSync } from 'fs';

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const askQuestion1 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                console.log('Please fill the first name');
                reject('Please fill the first name');
                return;
            }

            fulfil(firstName);
        })
    });
}

const askQuestion2 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill the last name');
                return;
            } 

            fulfil(lastName);
        })
    });
}

const askQuestion3 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill the email');
                return;
            }

            fulfil(email);
        })
    });
}
const askQuestion4 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your age: ', (age) => {
            const ageAsNumber = parseFloat(age);
            if (age === '') {
                reject('Please fill the age');
                return;
            } else if (isNaN(ageAsNumber)) {
                reject('Please write your age with numbers');
                return;
            } else if (ageAsNumber < 0) {
                reject('You cannot have an age less than 0');
                return;
            } 

            fulfil(ageAsNumber);
        })
    });
}

const askQuestion5 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your address: ', (address) => {
            if (address === '') {
                reject('Please fill the address');
                return;
            } 

            fulfil(address);
        })
    });
}

try {
    const firstName = await askQuestion1(); // await because these are async function
    const lastName = await askQuestion2();
    const email = await askQuestion3();
    const age = await askQuestion4();
    const address = await askQuestion5();

    const person = {
        firstName, // same thing as firstName: firstName,
        lastName,
        email,
        age,
        address
    }

    const filePath = `${process.cwd()}/dataStorage.json`;
    accessSync(filePath);
    writeFileSync(filePath, JSON.stringify(person));

    console.log(`Your data is: first name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age}, address: ${address}.`)

} catch (err) {
    console.error(`Something went wrong: ${err}`);
}


rl.close();