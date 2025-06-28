import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export async function getWeatherData(){
    try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Boisar&appid=${process.env.WEATHER_MAP_API_KEY}&units=metric`)
        return data;
    } catch (error) {
        console.log("Error (weather):", error.response?.data || error.message);
        return null;
    }
}

export function generateWeatherTagline(code) {
        code = Number(code);
        if (code >= 200 && code < 300) return "Stay indoors and keep your phone charged.";
        if (code >= 300 && code < 400) return "Grab a light jacket or umbrella, just in case.";
        if (code >= 500 && code < 600) return "Carry an umbrella and watch your step.";
        if (code >= 600 && code < 700) return "Dress warm and walk carefully — it’s slippery.";
        if (code >= 700 && code < 800) return "Low visibility — go slow and stay safe.";
        if (code === 800) return "Sun’s out, vibes on. Don't forget sunscreen.";
        if (code > 800 && code < 900) return "A perfect day for something cozy — maybe tea, maybe tunes.";
        return "Check outside and stay weather-smart today.";
    }