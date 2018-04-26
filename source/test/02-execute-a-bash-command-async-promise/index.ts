import { expect } from 'chai';
import bash from '../..';

describe('vamtiger-bash should', function () {
    it('execute a bash command as a promise', async function () {
        let result: string;

        const listDirectoryContents = `ls ${__dirname}`;
        const expected = [
            'index.js',
            'index.d.ts',
            'index.js.map'
        ];
        const bashResult = await bash(listDirectoryContents) as string;
        const directoryContents = bashResult && bashResult
            .split('\n')
            .map(entry => entry.trim())
            .filter(entry => entry);
        
        expect(directoryContents).to.be.ok;
        expect(directoryContents.length).to.equal(3);
        expect(Array.isArray(directoryContents) && directoryContents.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.true;
    })
})