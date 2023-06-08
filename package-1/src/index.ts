import fs from 'fs';
import path from 'path';
import { makeUpperCase } from 'package-0';

const upperCaseStr = makeUpperCase('i should be upper case');
console.log(upperCaseStr);

const cwd = process.env['BUILD_WORKING_DIRECTORY'] || process.cwd();
const outputFilePath = path.normalize(`${cwd}/uppercase.txt`);

fs.writeFileSync(outputFilePath, upperCaseStr, 'utf8');
console.log(`Wrote file ${outputFilePath}`);