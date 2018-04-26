import { exec, ExecOptions} from 'child_process';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const bash = promisify && promisify(exec) || BlueBird.promisify(exec);

export default async function (script: string, options?: ExecOptions) {
    let result = await bash(script, options);
    
    if (result.stderr)
        throw result.stderr;
    
    return result.hasOwnProperty('stdout') ? result.stdout.toString() : result; 
}