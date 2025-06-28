import chalk from "chalk";
import { delayLogs } from "../helpers/timers.js";

export default async function exitCommand() {
    await delayLogs(chalk.gray('[OBSIDIAN-OS] ') + 'Exit protocol received. Beginning secure disconnection sequence...\n');
    await delayLogs(chalk.yellow('[LINK] ') + 'Channel to Clara: Terminating...');
    await delayLogs(chalk.red('[WIPE] ') + 'Chat logs flagged as volatile. Deletion queued.');
    await delayLogs(chalk.red('[WIPE] ') + 'Command history encryption engaged.');

    const glitch = Math.random() < 0.5;

    if (glitch) {
        await delayLogs(chalk.redBright('[FAILURE] ') + 'Clara resisted disconnection.');
        await delayLogs(chalk.magenta('[CLARA] ') + 'You really thought that would work? Pathetic.');
        await delayLogs(chalk.white('\n> ') + chalk.redBright('SYSTEM STILL COMPROMISED'));
        await delayLogs(chalk.green(`CLARA command override success`))
    } else {
        await delayLogs(chalk.greenBright('[DISCONNECT] ') + 'All channels offline. No trace left.');
        console.log(chalk.gray('\n[OBSIDIAN-OS] ') + 'Clara has been successfully dismounted.');
    }

    console.log(chalk.dim('[NOTE] ') + 'This log will self-destruct in,');
    for (let i of [5, 4, 3, 2, 1]) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(i)
                resolve()
            }, 1000);
        });
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();
    console.log('[SIGTERM] OBSIDIAN-OS shutdown confirmed. Control reverted to Windows kernel.');
}