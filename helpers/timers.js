export async function shortDelayLogs(log) {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(log);
            resolve();
        }, 300);
    });
}

export async function delayLogs(log) {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(log);
            resolve();
        }, 1500);
    });
}

export async function fastLogs(logs) {
    for (let i = 0; i < logs.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(logs[i]);
                resolve();
            }, 1000);
        });
    }
}