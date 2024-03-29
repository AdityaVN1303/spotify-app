export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "https://spotify-app-eosin-pi.vercel.app/"

const clientId = "beeae12f468c49cdab3e0b4c54add10f"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private"
]


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;