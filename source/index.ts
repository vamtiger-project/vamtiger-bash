import { exec, ExecOptions} from 'child_process';
import { promisify } from 'util';

const bash = promisify(exec);

export default async function (script: string, options?: ExecOptions) {
    const result = await bash(script, options);
    
    if (result.stderr)
        throw result.stderr;
    
    return result.stdout.toString();
}