// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
app.get('/artists', (req, res) => {
  const response = getAllArtists();
  res.send(response);
});

app.post('/artists', (req, res) => {
  const response = addArtist(req.body);

  res.status(201);
  res.send(response);
});

app.get('/artists/latest', (req, res) => {
  const response = getLatestArtist();
  res.send(response);
});

app.get('/artists/latest/albums', (req, res) => {
  const response = getAlbumsForLatestArtist();
  res.send(response);
});

app.get('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  const response = getArtistByArtistId(artistId);
  res.send(response);
});

app.put('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  const data = req.body;
  const response = editArtistByArtistId(artistId, data);
  res.send(response);
});

app.patch('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  const data = req.body;
  const response = editArtistByArtistId(artistId, data);
  res.send(response);
});

app.delete('/artists/:artistId', (req, res) => {
  const { artistId } = req.params;
  deleteArtistByArtistId(artistId);
  res.send({ message: 'Successfully deleted' });
});

app.get('/artists/:artistId/albums', (req, res) => {
  const { artistId } = req.params;
  const response = getAlbumsByArtistId(artistId);
  res.send(response);
});

app.get('/albums/:albumId', (req, res) => {
  const { albumId } = req.params;
  const response = getAlbumByAlbumId(albumId);
  res.send(response);
});

app.post('/artists/:artistId/albums', (req, res) => {
  const { artistId } = req.params;
  const data = req.body;
  const response = addAlbumByArtistId(artistId, data);
  res.status(201);
  res.send(response);
});

app.put('/albums/:albumId', (req, res) => {
  const { albumId } = req.params;
  const data = req.body;
  const response = editAlbumByAlbumId(albumId, data);
  res.send(response);
});

app.patch('/albums/:albumId', (req, res) => {
  const { albumId } = req.params;
  const data = req.body;
  const response = editAlbumByAlbumId(albumId, data);
  res.send(response);
});

app.delete('/albums/:albumId', (req, res) => {
  const { albumId } = req.params;

  deleteAlbumByAlbumId(albumId);

  res.send({ message: 'Successfully deleted' });
});

app.get('/albums?', (req, res) => {
  const { startsWith } = req.query;
  const response = getFilteredAlbums(startsWith);
  res.send(response);
});

app.get('/artists/:artistId/songs', (req, res) => {
  const { artistId } = req.params;
  const response = getSongsByArtistId(artistId);
  res.send(response);
});

app.get('/albums/:albumId/songs', (req, res) => {
  const { albumId } = req.params;
  const response = getSongsByAlbumId(albumId);
  res.send(response);
});

app.post('/albums/:albumId/songs', (req, res) => {
  const { albumId } = req.params;
  const data = req.body;
  const response = addSongByAlbumId(albumId, data);
  res.status(201);
  res.send(response);
});

app.get('/songs/:songId', (req, res) => {
  const { songId } = req.params;
  const response = getSongBySongId(songId);
  res.send(response);
});

app.put('/songs/:songId', (req, res) => {
  const { songId } = req.params;
  const data = req.body;
  const response = editSongBySongId(songId, data);
  res.send(response);
});

app.patch('/songs/:songId', (req, res) => {
  const { songId } = req.params;
  const data = req.body;
  const response = editSongBySongId(songId, data);
  res.send(response);
});

app.delete('/songs/:songId', (req, res) => {
  const { songId } = req.params;
  deleteSongBySongId(songId);
  res.send({ message: 'Successfully deleted' });
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
