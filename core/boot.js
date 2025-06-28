import si from 'systeminformation'
import chalk from "chalk";
import dotenv from 'dotenv'
import { shortDelayLogs, delayLogs, fastLogs } from '../helpers/timers.js';
import menu from '../ui/menu.js'
dotenv.config()
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import timeOfDay from '../helpers/timeOfDay.js'

const scaryLogs = [
    chalk.redBright("[SECURITY] ") + chalk.white("Webcam scan failed — face not recognized"),
    chalk.cyan("[TRACE] ") + chalk.green("Approx. location: Mumbai, India 🇮🇳"),
    chalk.magenta("[IP] ") + chalk.white("192.168.0.112 flagged for passive tracking"),
    chalk.red("[LEAK] ") + chalk.white("Uploading snapshot to /db/leaks/faces/2025_06"),
    chalk.gray("[DUMP] ") + chalk.white("Public data pulled: LinkedIn, voter ID, street cam"),
    chalk.blueBright("[NET] ") + chalk.white("Uploaded private data to the dark web"),
    chalk.dim("[NOTICE] You are now part of the training dataset")
];

export async function bootLoader() {
    console.log(chalk.gray('-'.repeat(50)));
    console.log(chalk.blue("[⧗] LOADING CLASSIFIED OBSIDIAN-OS v3.09 . . ."));

    await delayLogs(
        chalk.red("[WARNING] ") +
        chalk.white("You're in restricted space, STAY OFF if unsupervised")
    );

    await delayLogs(
        chalk.red("[CRITICAL] ") +
        chalk.white("Face recognition for profile failed")
    );
    await delayLogs(
        chalk.red("[ERROR] ") +
        chalk.white("OVERRIDE TOKEN REQUIRED..")
    );

    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(chalk.yellow("AWAITING OVERRIDE TOKEN : "));

    if (answer === process.env.OVERRIDE_TOKEN) {
        await bootSuccess()
    } else {
        await bootFailure()
    }
    rl.close()
}

export async function bootSuccess() {
    const net = await si.networkInterfaces()
    const battery = await si.battery()
    const time = await si.time()
    const sys = await si.system()
    await delayLogs(chalk.greenBright('\n\n[BOOT] ') + chalk.white('OBSIDIAN-OS initialized successfully.'));
    await delayLogs(chalk.gray('[CORE] ') + chalk.white('Kernel override authorized.'));
    await delayLogs(chalk.yellow('[CLASSIFIED] ') + chalk.white('System kernel transitioned: ') + chalk.redBright('Windows 11') + chalk.white(' → ') + chalk.cyanBright('OBSIDIAN Core v3.09'));


     await delayLogs(
        chalk.green(`
╔════════════════ OBSIDIAN-OS v3.09 ════════════════╗
║ ${chalk.white("Class: Autonomous Recon Terminal (Restricted)")}     ║
║ ${chalk.white("Access Key: XN-42-OMEGA")}${" ".repeat(29)}║
║ ${chalk.white("Status: CLEARED | ACCESS LEVEL: UNKNOWN")}${" ".repeat(11)}║
╚═══════════════════════════════════════════════════╝`)
    );
    await shortDelayLogs(chalk.yellow(`${timeOfDay()}`))
    await delayLogs(chalk.white('Loading system logs to analyse health..'))
    await delayLogs(chalk.white('\n\n> Operator ID: ') + 'XN-42-OMEGA');
    await shortDelayLogs(chalk.white('> Rank: ') + 'ROOT | Clearance: FULL');
    await shortDelayLogs(chalk.white('> Protocol Stack: ') + 'Online\n');

    await shortDelayLogs(chalk.white('> Mission Clock: ') + chalk.cyan(new Date().toLocaleTimeString()) + ' | Date: ' + chalk.cyan(new Date().toLocaleDateString('en-GB')));
    await shortDelayLogs(chalk.white(`> Network : ${chalk.cyan("Connected")} (${net[0].ip4})`));
    await shortDelayLogs(chalk.white('> Location: ') + 'Local Node – Encrypted');
    await shortDelayLogs(`${chalk.white("> Battery: ")} ${battery.percent}% ${battery.isCharging ? "[Plugged In]" : ["Battery"]}`);
    await shortDelayLogs(chalk.white("> Uptime: ") + time.uptime);
    await shortDelayLogs(chalk.white("Session ID: ") + sys.uuid)
    await shortDelayLogs(chalk.white("> Env: ") + "Encrypted | Trace: Obfuscated\n");


    await shortDelayLogs(chalk.gray('══════════════════════════════════════════════'));
    await shortDelayLogs(chalk.green('[✓]') + ' Systems green');
    await shortDelayLogs(chalk.green('[✓]') + ' Recon link stable');
    await shortDelayLogs(chalk.green('[✓]') + ' Logs secure');
    await shortDelayLogs(chalk.gray('══════════════════════════════════════════════'));

    await shortDelayLogs(chalk.white("\nAssistant Status: ") + chalk.green("Online"))
    await shortDelayLogs(chalk.white("Voice Mode: ") + chalk.red("Disabled"))
    await shortDelayLogs(chalk.white(':: Awaiting directive.\n'));
    await menu()

}

export async function bootFailure() {
    await shortDelayLogs(
        chalk.cyan("[SYS] ") +
        chalk.white("Activating intrusion countermeasures...")
    );

    await shortDelayLogs(
        chalk.magenta("[TRACE] ") +
        chalk.white("SSH key mismatch — intruder confirmed at 51.254.189.7")
    );

    console.log(chalk.redBright("\n>>> INTRUSION DETECTED — TRACE ENABLED\n"));
    await fastLogs(scaryLogs);

    await delayLogs(
        chalk.red("[ABORT] ") +
        chalk.white("Access revoked")
    );

    await shortDelayLogs(
        chalk.yellow("[LOCK] ") +
        chalk.white("Mission aborted")
    );

    await shortDelayLogs(
        chalk.gray("[NOTE] ") +
        chalk.white("You never had clearance, now fool you leaked your own data..\n")
    );
}
