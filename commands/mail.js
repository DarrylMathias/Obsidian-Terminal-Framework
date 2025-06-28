import open from "open";
export default async function openMail(){
    await open('https://mail.google.com/mail/u/0/#inbox');
}