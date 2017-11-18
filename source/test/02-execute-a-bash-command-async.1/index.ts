import { expect } from 'chai';
import bash from '../..';

describe('vamtiger-bash should', function () {
    it('execute a bash command as a promise', async function () {
        const listDirectoryContents = `ls ${__dirname}`;
        const expected = [
            'index.js',
            'index.d.ts',
            'index.js.map'
        ];
        const test = bash(listDirectoryContents)
            .then(result => result.split('\n'))
            .then(result => result.map(entry => entry.trim()))
            .then(result => result.filter(entry => entry))
            .tap(directoryContents => expect(directoryContents).to.be.ok)
            .tap(directoryContents => expect(directoryContents.length).to.equal(3))
            .tap(directoryContents => expect(directoryContents.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.true);

        return test;
    })
})