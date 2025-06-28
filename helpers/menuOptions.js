import chalk from 'chalk'
export default async function menuOptions() {
    console.log(chalk.yellow("\nCommands Available:\n"));

    console.log(chalk.white("> weather ") + chalk.gray("→  Check current weather"));
    console.log(chalk.white("> mail    ") + chalk.gray("→  Open Gmail"));
    console.log(chalk.white("> search  ") + chalk.gray("→  Launch daily websites"));
    console.log(chalk.white("> code    ") + chalk.gray("→  Launch VS Code"));
    console.log(chalk.white("> nova    ") + chalk.green("→  Launch pre-sentient AI assistant (friendly • safe)"));
    console.log(chalk.white("> clara   ") + chalk.red("→  Engage tactical AI interface (unstable • classified)"));
    console.log(chalk.white("> system  ") + chalk.gray("→  Show system info"));
    console.log(chalk.white("> help    ") + chalk.gray("→  List all commands"));
    console.log(chalk.white("> exit    ") + chalk.gray("→  Close OBSIDIAN-OS"));

    console.log(chalk.white("\nWaiting for your directive, Commander..."));
}