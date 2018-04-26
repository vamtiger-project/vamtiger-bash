import { exec, ExecOptions} from 'child_process';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const bash = promisify && promisify(exec) || BlueBird.promisify(exec);

export default async function (script: string, options?: ExecOptions) {
    let result = await bash(script, options);
    let resultString;
    
    if (result.stderr)
        throw result.stderr;
    if (typeof result !== 'string' && result.stdout)
        resultString = result.stdout.toString()
    
    return resultString || result;
}