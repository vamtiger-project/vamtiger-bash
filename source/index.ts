import { exec, ExecOptions} from 'child_process';
import * as BlueBird from 'bluebird';

export type VamtigerBash = (script: string, options?: ExecOptions) => BlueBird<string>;

export default BlueBird.promisify(exec) as VamtigerBash;