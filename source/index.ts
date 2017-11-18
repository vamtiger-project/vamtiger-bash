import {exec} from 'child_process';
import * as BlueBird from 'bluebird';

export default BlueBird.promisify<string, string>(exec);