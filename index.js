import { accessSync, readFile, readFileSync, writeFileSync } from 'fs';

import readline from 'readline';

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/dataStorage.json`;

const askQuestion1 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                console.log('Please fill the first name');
                reject('Please fill the first name');
                return;
            } else {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const decodedObject = JSON.parse(jsonObject);
                decodedObject.firstName = firstName;
                writeFileSync(filePath, JSON.stringify(decodedObject));
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
            } else {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const decodedObject = JSON.parse(jsonObject);
                decodedObject.lastName = lastName;
                writeFileSync(filePath, JSON.stringify(decodedObject));
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
            } else {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const decodedObject = JSON.parse(jsonObject);
                decodedObject.email = email;
                writeFileSync(filePath, JSON.stringify(decodedObject));
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
                reject('Please write your age with numbers.');
                return;
            } else if (ageAsNumber < 0) {
                reject('You can not have an age less than 0');
                return;
            } else {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const decodedObject = JSON.parse(jsonObject);
                decodedObject.age = ageAsNumber;
                writeFileSync(filePath, JSON.stringify(decodedObject));
            }

            fulfil(age);
        })
    });
}

const askQuestion5 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your address: ', (address) => {
            if (address === '') {
                reject('Please fill the address');
                return;
            } else {
                accessSync(filePath);
                const jsonObject = readFileSync(filePath, 'utf8');
                const decodedObject = JSON.parse(jsonObject);
                decodedObject.address = address;
                writeFileSync(filePath, JSON.stringify(decodedObject));
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

    console.log(`Your data is: first name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age}, address: ${address}.`)

} catch (err) {
    console.error(`Something went wrong: ${err}`);
}


rl.close();