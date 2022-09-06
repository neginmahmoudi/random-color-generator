import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: argv[3] ? argv[3] : 'random',
  hue: argv[2] ? argv[2] : 'random',
});

const theme = chalk.hex(color);

const box = `
##############################
##############################
##############################
######                   #####
######     ${color}       #####
######                   #####
##############################
##############################
##############################
`;

console.log(theme(box));
