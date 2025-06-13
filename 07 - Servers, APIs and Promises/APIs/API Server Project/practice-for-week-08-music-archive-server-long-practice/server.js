const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case 'application/json':
          req.body = JSON.parse(reqBody);
          break;
        case 'application/x-www-form-urlencoded':
          req.body = reqBody
            .split('&')
            .map((keyValuePair) => keyValuePair.split('='))
            .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here
    // Get all the artists
    if (req.method === 'GET' && /^\/artists$/.test(req.url)) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const _artists = Object.values(artists);
      const body = JSON.stringify(_artists);
      return res.end(body);
    }

    // Get a specific artist's details based on artistId
    if (
      req.method === 'GET' &&
      req.url.startsWith('/artists/') &&
      req.url.split('/').length === 3
    ) {
      const parts = req.url.split('/');
      const artistId = parts[2];
      const artist = artists[artistId];
      const body = JSON.stringify(artist);
      return res.end(body);
    }

    // Add an artist
    if (req.method === 'POST' && /^\/artists$/.test(req.url)) {
      const { name } = req.body;
      const newArtist = {
        artistId: getNewArtistId(),
        name,
      };
      artists[newArtist.artistId] = newArtist;
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      const body = JSON.stringify(newArtist);

      return res.end(body);
    }

    // Edit a specified artist by artistId
    if (
      (req.method === 'PUT' || req.method === 'PATCH') &&
      req.url.startsWith('/artists/')
    ) {
      const parts = req.url.split('/');
      const artistId = parts[2];
      const { name } = req.body;
      const artist = artists[artistId];
      const editedArtist = { ...artist, name, updatedAt: new Date() };
      artists[artistId] = editedArtist;
      const body = JSON.stringify(editedArtist);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Delete a specified artist by artistId
    if (
      req.method === 'DELETE' &&
      req.url.startsWith('/artists/') &&
      req.url.split('/').length === 3
    ) {
      const parts = req.url.split('/');
      const artistId = parts[2];
      delete artists[artistId];
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const body = JSON.stringify({ message: 'Successfully deleted' });
      return res.end(body);
    }

    // Get all albums of a specific artist based on artistId
    if (
      req.method === 'GET' &&
      /\/artists\/\d+\/albums/.test(req.url) &&
      req.url.split('/').length === 4
    ) {
      const parts = req.url.split('/');
      const artistId = Number(parts[2]);
      const _albums = Object.values(albums);
      const artistAlbums = _albums.filter(
        (album) => album.artistId === artistId
      );
      const body = JSON.stringify(artistAlbums);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Get a specific album's details based on albumId
    if (
      req.method === 'GET' &&
      req.url.startsWith('/albums/') &&
      req.url.split('/').length === 3
    ) {
      const parts = req.url.split('/');
      const _albumId = Number(parts[2]);
      const _albums = Object.values(albums);
      const _album = _albums.find((album) => album.albumId === _albumId)[0];
      const body = JSON.stringify(_album);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Add an album to a specific artist based on artistId
    if (
      req.method === 'POST' &&
      /\/artists\/\d+\/albums/.test(req.url) &&
      req.url.split('/').length === 4
    ) {
      const parts = req.url.split('/');
      const _artistId = Number(parts[2]);
      const { name } = req.body;
      const newAlbum = {
        albumId: getNewAlbumId(),
        artistId: _artistId,
        name,
      };
      albums[newAlbum.albumId] = newAlbum;
      const body = JSON.stringify(newAlbum);
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Edit a specified album by albumId
    if (
      (req.method === 'PUT' || req.method === 'PATCH') &&
      /\/albums\/d+$/.test(req.url)
    ) {
      const parts = req.url.split('/');
      const _albumId = parts[2];
      const { name } = req.body;
      const _album = albums[_albumId];
      const editedAlbum = { ..._album, name, updatedAt: new Date() };

      albums[_albumId] = editedAlbum;
      const body = JSON.stringify(editedAlbum);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Delete a specified album by albumId
    if (req.method === 'DELETE' && /^\/albums\/d+$/.test(req.url)) {
      const parts = req.url.split('/');
      const _albumId = parts[2];
      delete albums[_albumId];
      const body = JSON.stringify({ message: 'Successfully deleted' });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Get all songs of a specific artist based on artistId
    if (req.method === 'GET' && /^\/artists\/\d+\/songs$/.test(req.url)) {
      const parts = req.url.split('/');
      const _artistId = parts[2];
      const _albums = Object.values(albums).filter(
        (album) => album.artistId === Number(_artistId)
      );
      const _albumsIds = _albums.map((album) => album.albumId);
      const _songs = Object.values(songs);
      let artistSongs = [];

      for (let id of _albumsIds) {
        let artistSongsPerAlbum = _songs.filter((song) => song.albumId === id);
        for (let song of artistSongsPerAlbum) {
          artistSongs.push(song);
        }
      }
      const body = JSON.stringify(artistSongs);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Get all songs of a specific album based on albumId
    if (req.method === 'GET' && /^\/albums\/\d+\/songs$/.test(req.url)) {
      const parts = req.url.split('/');
      const _albumId = parts[2];
      const _songs = Object.values(songs);
      const songsInAlbum = _songs.filter(
        (song) => song.albumId === Number(_albumId)
      );
      const body = JSON.stringify(songsInAlbum);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Get all songs of a specified trackNumber
    if (req.method === 'GET' && /^\/trackNumbers\/\d+\/songs$/.test(req.url)) {
      const parts = req.url.split('/');
      const _trackNumber = parts[2];
      const _songs = Object.values(songs);
      const filteredSongs = _songs.filter(
        (song) => song.trackNumber === Number(_trackNumber)
      );
      const body = JSON.stringify(filteredSongs);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Get a specific song's details based on songId
    if (req.method === 'GET' && /^\/songs\/\d+$/.test(req.url)) {
      const parts = req.url.split('/');
      const _songId = parts[2];
      const _song = Object.values(songs).filter(
        (song) => song.songId === _songId
      )[0];
      const body = JSON.stringify(_song);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(body);
    }

    // Add a song to a specific album based on albumId
    if (req.method === 'POST' && /^\/albums\/\d+\/songs$/.test(req.url)) {
      const parts = req.url.split('/');
      const _albumId = parts[2];
      const { name, lyrics, trackNumber } = req.body;
      const songId = getNewSongId();
      const newSong = {
        songId,
        name,
        lyrics,
        trackNumber,
        albumId: _albumId,
      };
      songs[songId] = newSong;
      const body = JSON.stringify(newSong);
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      return res.end(body);
    }

    // Edit a specified song by songId
    if (
      (req.method === 'PUT' || req.method === 'PATCH') &&
      /^\/songs\/\d+$/.test(req.url)
    ) {
      const parts = req.url.split('/');
      const _songId = parts[2];
      const _song = songs[_songId];
      const editedSong = { ..._song, ...req.body, updatedAt: new Date() };
      songs[_songId] = editedSong;
      const body = JSON.stringify(editedSong);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      return res.end(body);
    }

    // Delete a specified song by songId
    if (req.method === 'DELETE' && /^\/songs\/\d+$/.test(req.url)) {
      const parts = req.url.split('/');
      const _songId = parts[2];

      delete songs[_songId];

      const body = JSON.stringify({ message: 'Successfully deleted' });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(body);
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write('Endpoint not found');
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
