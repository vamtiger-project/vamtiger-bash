/// <reference types="node" />
import { ExecOptions } from 'child_process';
export default function (script: string, options?: ExecOptions): Promise<string | {
    stdout: string | Buffer;
    stderr: string | Buffer;
}>;
