import { expect } from 'chai';
import bash from '../..';

describe('vamtiger-bash should', function () {
    it('execute a bash command as a promise', async function () {
        let result: string;
        let directoryContents: string[];

        const listDirectoryContents = `ls ${__dirname}`;
        const expected = [
            'index.js',
            'index.d.ts',
            'index.js.map'
        ];
        const test = bash(listDirectoryContents)
            .then(bashResult => result = result)
            .then(result => result.split('\n'))
            .then(result => result.map(entry => entry.trim()))
            .then(result => result.filter(entry => entry))
            .then(currentResult => directoryContents = currentResult)
            .then(() => expect(directoryContents).to.be.ok)
            .then(() => expect(directoryContents.length).to.equal(3))
            .then(() => expect(directoryContents.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.true);

        return test;
    })
})