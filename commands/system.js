import chalk from 'chalk';
import si from 'systeminformation'

const cpu = await si.cpu();
const mem = await si.mem();
const battery = await si.battery();
const time = await si.time();
const network = (await si.networkInterfaces())[0];
const system = await si.system()

export default function systemConfig() {
    console.log(chalk.greenBright('\n[SYSTEM STATUS] ') + chalk.white('Core Diagnostics Uplinked\n'));
    console.log(chalk.white('> Device Name: ') + chalk.cyanBright(`${system.model}`));
    console.log(chalk.white('> OS Kernel: ') + chalk.cyanBright('OBSIDIAN v3.09 (Over Windows 11)'));
    console.log(chalk.white('> Uptime: ') + chalk.cyan(`${time.uptime} seconds`));
    console.log(chalk.white('> Battery: ') + chalk.cyan(`${battery.percent}%`) + (battery.isCharging ? chalk.gray(' [Charging]') : chalk.gray(' [Discharging]')));
    console.log(chalk.white('> CPU: ') + chalk.cyan(`${cpu.manufacturer} ${cpu.brand}`));
    console.log(chalk.white('> RAM: ') + chalk.cyan(`${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`));
    console.log(chalk.white('> Network: ') + chalk.cyan(`${network.ip4}`) + chalk.gray(` (${network.type}, ${network.iface})`));
    console.log(chalk.white('> Status: ') + chalk.yellowBright('Monitored\n'));
}