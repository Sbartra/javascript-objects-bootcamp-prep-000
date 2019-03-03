var playlist = {
  "name": "maddona",
  "track": "Isla Bonita"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
