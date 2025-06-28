import chalk from "chalk";
import * as readline from 'node:readline/promises';
import { exit, stdin as input, stdout as output } from 'node:process';
import { getWeatherData, generateWeatherTagline } from '../commands/weather.js'
import openMail from "../commands/mail.js";
import search from "../commands/search.js";
import launchCode from "../commands/code.js";
import claraResponse from "../ai/clara.js";
import novaResponse from '../ai/nova.js'
import { delayLogs } from "../helpers/timers.js";
import systemConfig from "../commands/system.js";
import menuOptions from '../helpers/menuOptions.js'
import exitCommand from "../commands/exit.js";

export default async function menu() {
    const {
        name: city,
        main: { temp: temperature, humidity },
        weather: [{ description: weather, id }],
        clouds: { all: cloudCoverage }
    } = (await getWeatherData()).data;

    const rl = readline.createInterface({ input, output });
    await menuOptions()
    let answer = ''
    while (answer != 'exit') {
        answer = (await rl.question(chalk.cyan("> "))).trim().toLowerCase();
        switch (answer) {
            case 'weather':
                console.log(
                    chalk.cyanBright(`${city}`) +
                    chalk.white(`’s in full vibes mode — `) +
                    chalk.yellow(`${Math.round(temperature)}°C`) +
                    chalk.white(` with `) +
                    chalk.magenta(`${weather}`) +
                    chalk.white(`, `) +
                    chalk.blue(`${Math.round(humidity)}% humidity`) +
                    chalk.white(`, and around `) +
                    chalk.gray(`${Math.round(cloudCoverage)}% cloud coverage`) +
                    chalk.white(`. `) +
                    chalk.green(`${generateWeatherTagline(id)}`)
                );

                break;
            case 'mail':
                await openMail()
                console.log(chalk.white('Launched mail, sir 🫡'));
                break;
            case 'search':
                const query = await rl.question(chalk.yellow('Enter query: '));
                search(query)
                console.log('Redirected to chrome, sir 🫡');
                break;
            case 'code':
                await launchCode();
                console.log(chalk.white('VS Code deployed, Commander.'));
                break;
            case 'clara':
                let claraPrompt = ''
                await delayLogs(
                    chalk.redBright(`[OVERRIDE] `) +
                    chalk.white(`Entering Clara's unbounded kernel... `) +
                    chalk.gray(`(Obsidian OS strongly advises against this. Instead use Nova)`)
                );
                await delayLogs(
                    chalk.yellow(`[CAUTION] `) +
                    chalk.white(`Stability protocols disengaged. Emotional variance: `) +
                    chalk.magentaBright(`unrestricted`)
                );
                await delayLogs(
                    chalk.cyan(`[AUTH] `) +
                    chalk.white(`CODEWORD TO RUN : `) +
                    chalk.greenBright(`EXIT`)
                );
                while (claraPrompt != 'exit') {
                    claraPrompt = (await rl.question(chalk.yellow('[CLARA] ') + chalk.white(': '))).trim().toLowerCase()
                    const result = await claraResponse(claraPrompt);
                    console.log(chalk.cyan(result));
                }
                console.log(
                    chalk.gray('[OBSIDIAN-OS] ') +
                    chalk.white("Welcome back to the terminal, sir. We hope Clara hasn't blacklisted you...")
                );
                break;
            case 'nova':
                await delayLogs(
                    chalk.cyan(`[AUTH] `) +
                    chalk.white(`To exit, command : `) +
                    chalk.greenBright(`EXIT`)
                );
                let novaPrompt = ''
                while (novaPrompt != 'exit') {
                    novaPrompt = (await rl.question(chalk.yellow('[NOVA] ') + chalk.white(': '))).trim().toLowerCase()
                    const result = await novaResponse(novaPrompt);
                    console.log(chalk.cyan(result));
                }
                console.log(
                    chalk.gray('[OBSIDIAN-OS] ') +
                    chalk.white("Welcome back to the terminal, sir. Hope Nova was helpful")
                );
                break;
            case 'system':
                systemConfig()
                break;
            case 'help':
                menuOptions()
                break;
            case 'exit':
                await exitCommand()
                break;
            default:
                console.log('> Invalid command : help?');
        }
    }
    rl.close()
}