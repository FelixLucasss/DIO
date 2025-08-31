
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/FelixLucasss/DIO/refs/heads/main/Santander-2025-FrontEnd/Projetos/Portfolio2/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
