import {app} from './index.mjs';

const person = {
    name: 'Rick',
    lastName: 'Sanchez',
    age: 37,
    status:'Alive'
}

describe('Validate person name', () => {
    test('Test name', () => {
        expect(person.name).toEqual('Rick')
    });
    
});

describe('Server response', () => {
    test('Test server status response', () => {

    })
    
})

