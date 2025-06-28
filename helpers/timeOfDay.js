export default function timeOfDay(){
    const hour = new Date().getHours()
    if(hour >= 0 && hour < 5 || hour >= 19 && hour <= 23)
        return "🌘  Evening mode active. Dimmed distractions. You know the drill."
    else if(hour >= 5 && hour < 12)
        return "🌤️  Good morning, Commander. System's running smooth — a good day to build something great."
    else if(hour >= 12 && hour < 19)
        return "🔄  Mid-day update: all systems stable. Stay hydrated, stay focused."
    else
    return "🧠  System’s ready whenever you are. No rush. No pressure. Just precision."

}