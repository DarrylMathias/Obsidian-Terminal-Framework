import open, {openApp, apps} from 'open';
import dotenv from 'dotenv'
dotenv.config()

export default async function launchCode(){
    await openApp(process.env.VSCODE_LOCATION);
}