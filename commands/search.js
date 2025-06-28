import open from "open";
export default async function search(query){
    const encodedQuery = encodeURIComponent(query);
    const googleURL = `https://www.google.com/search?q=${encodedQuery}`;
    await open(googleURL)
}