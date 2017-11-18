import { expect } from 'chai';
import bash from '../..';

describe('vamtiger-bash should', function () {
    it('execute a bash command', async function () {
        const listDirectoryContents = `ls ${__dirname}`;
        const result = await bash(listDirectoryContents);
        const directoryContents = result
            .split('\n')
            .map(entry => entry.trim())
            .filter(entry => entry);
        const expected = [
            'index.js',
            'index.d.ts',
            'index.js.map'
        ];

        expect(directoryContents).to.be.ok;
        expect(expected).to.be.ok;

        expect(directoryContents.length).to.equal(3);

        expect(directoryContents.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.true;
    })
})