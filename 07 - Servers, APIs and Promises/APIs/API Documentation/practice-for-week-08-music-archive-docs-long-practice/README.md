# Long Practice: API Docs for a Music Archive

In this practice, you will document the request and response components for
API endpoints of a music archive server.

## Set up

Clone the practice from the [starter].

To set up the server that you will test your endpoints on, run `npm install`
inside of the **server** folder. Please do not to look at the contents of the
**server** folder until you finish this project.

To start the server, run `npm start` inside of the **server** folder. This will
allow you to make requests to [http://localhost:5000] using any client (browser
and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`).

## Resources

Below is a list of all the resources for this music archive server.

- artists:
  - artistId: unique identifier
  - name
- albums:
  - albumId: unique identifier
  - name
  - artistId: of the artist that released the album
- songs:
  - songId: unique identifier
  - name
  - lyrics
  - trackNumber: the order of the song in its album
  - albumId: of the album that the song was released with

## Documentation

The music archive server receives JSON request bodies and returns JSON response
bodies.

Below is a list of operations on the music archive server that you can perform.
For each operation, document what the components of the request should be and
what you should expect from the response. Document all the important components
of the request and the response. You can use a Google doc, VSCode for editing
a text/markdown file, or whatever text editor you want for creating the
API routes documentation for this music archive server.

Here's how to approach creating the documentation for the music archive server
operations:

1. Make a prediction based off of your knowledge of HTTP request and response
   components and API routes to determine what the request and response
   components of the given operation should be.
2. Formulate the request using Postman and submit the request to see what the
   response is. The music archive server can be accessed at
   [http://localhost:5000].
3. If the request or response is not what you predicted it to be, then update
   your documentation.

If you don't see the response you want, or if you see an error status code, then
the components of the request are wrong. Try playing around with the request
components to get closer to the response you expect.

If you get stuck, make sure to ask for help!

The request and response components to get all the artists are filled out for
you as an example.

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the artists
  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

Test this in Postman or by using `fetch` in the browser.

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: appĺication/json
- Body: information about single artist
  ```json
  {
    "name": "Red Hot Chili Peppers",
    "artistId": 1,
    "albums": [
      {
        "name": "Stadium Arcadium",
        "albumId": 1,
        "artistId": 1
      }
    ]
  }
  ```

### Add an artist

Request components:

- Method: POST
- URL: /artists
- Headers:
  - Content-Type: application/json
- Body: information about new artist
  ```json
  {
    "name": "Santana"
  }
  ```

Response components:

- Status code: 201
- Headers:
  - Content-Type: application/json
- Body: information about newly created artist
  ```json
  {
    "name": "Santana",
    "artistId": 2
  }
  ```

### Edit a specified artist by artistId

Request components:

- Method: PUT/PATCH
- URL: /artists/:artistId
- Headers:
  - Content-Type: application/json
- Body: artist information to change
  ```json
  {
    "name": "The Offspring"
  }
  ```

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: updated artist information
  ```json
  {
    "name": "The Offspring",
    "artistId": 2
  }
  ```

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artist/:artistId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: successful delete message
  ```json
  {
    "message": "Sucessfully deleted"
  }
  ```

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: list of artist's album
  ```json
  [
    {
      "name": "Stadium Arcadium",
      "albumId": 1,
      "artistId": 1
    }
  ]
  ```

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: information about an album
  ```json
  {
    "name": "Stadium Arcadium",
    "albumId": 1,
    "artistId": 1,
    "artist": {
      "name": "Red Hot Chili Peppers",
      "artistId": 1
    },
    "songs": [
      {
        "name": "Dani California",
        "lyrics": "...",
        "trackNumber": 1,
        "songId": 1,
        "createdAt": "2025-06-12T16:12:50.000Z",
        "updatedAt": "2025-06-12T16:12:50.000Z",
        "albumId": 1
      }
    ]
  }
  ```

### Add an album to a specific artist based on artistId

Request components:

- Method: POST
- URL: /artists/:artistId/albums
- Headers:
  - Content-Type: application/json
- Body: new album information
  ```json
  {
    "name": "Americana"
  }
  ```

Response components:

- Status code: 201
- Headers:
  - Content-Type: application/json
- Body: information about newly created album
  ```json
  {
    "name": "Americana",
    "albumId": 2,
    "artistId": 1
  }
  ```

### Edit a specified album by albumId

Request components:

- Method: PUT/PATCH
- URL: /albums/:albumId
- Headers:
  - Content-Type: application/json
- Body: information to change
  ```json
  {
    "name": "Ixnay for the hombre"
  }
  ```

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: updated album info
  ```json
  {
    "name": "Ixnay for the hombre",
    "albumId": 3,
    "artistId": 2,
    "updatedAt": "2025-06-12T16:24:36.244Z"
  }
  ```

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: successful message
  ```json
  {
    "message": "Sucessfully deleted"
  }
  ```

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/songs
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: list of songs
  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body:list of album's songs
  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get all songs of a specified trackNumber

**Note: This one is meant to be a little more challenging, but should still
follow a similar pattern to those above.**

Can you see a pattern between this endpoint and the two previous endpoints?

Hint: Think of how you solved getting all songs by a specific artist and by a
specific album. What is resource that you wanted to get back for those
endpoints? What information was that resource constrained by for each of those
endpoints? Now think about getting all songs by a specific `trackNumber`.
What is the resource you want to get? What information is the resource
constrained by for this endpoint?

Request components:

- Method: GET
- URL: /trackNumbers/:trackNumber/songs
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: track information
  ```json
  [
    {
      "name": "Dani California",
      "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
      "trackNumber": 1,
      "songId": 1,
      "albumId": 1
    }
  ]
  ```

### Get a specific song's details based on songId

Request components:

- Method: GET
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: song information
  ```json
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1,
    "album": {
      "name": "Stadium Arcadium",
      "albumId": 1,
      "artistId": 1
    },
    "artist": {
      "name": "Red Hot Chili Peppers",
      "artistId": 1
    }
  }
  ```

### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: /albums/:albumsId/songs
- Headers:
  - Content-Type: application/json
- Body: new song info
  ```json
  {
    "name": "Stadium Arcadium",
    "lyrics": "Bells around St. Petersburg when I saw you\\nI hope I get what you deserve\\nAnd this is where I find—\\nSmoke surrounds your perfect face and I'm falling\\nPushing a broom out into space\\nAnd this where I find a way\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAlone inside my forest room and it's storming\\nI never thought I'd be in bloom, but this is where I start\\n(Derelict days, and the stereo plays for the all night crowd that it cannot phase)\\nAnd I'm calling\\n(Tedious weeds that the media breeds, but the animal gets what the animal needs)\\nAnd I'm sorry\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAnd this is where I find\\n\\nRays of dust that wrap around your citizen\\nKind enough to disavow, and this is where I stand\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell I'm forming and I'm warming (Warming to you)\\nTo you",
    "trackNumber": 4
  }
  ```

Response components:

- Status code: 201
- Headers:
  - Content-Type: application/json
- Body: new added song details
  ```json
  {
    "name": "Stadium Arcadium",
    "lyrics": "Bells around St. Petersburg when I saw you\\nI hope I get what you deserve\\nAnd this is where I find—\\nSmoke surrounds your perfect face and I'm falling\\nPushing a broom out into space\\nAnd this where I find a way\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAlone inside my forest room and it's storming\\nI never thought I'd be in bloom, but this is where I start\\n(Derelict days, and the stereo plays for the all night crowd that it cannot phase)\\nAnd I'm calling\\n(Tedious weeds that the media breeds, but the animal gets what the animal needs)\\nAnd I'm sorry\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAnd this is where I find\\n\\nRays of dust that wrap around your citizen\\nKind enough to disavow, and this is where I stand\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell I'm forming and I'm warming (Warming to you)\\nTo you",
    "trackNumber": 4,
    "songId": 2,
    "albumId": 1
  }
  ```

### Edit a specified song by songId

Request components:

- Method: PUT/PATCH
- URL: /songs/:songId
- Headers:
  - Content-Type: application/json
- Body: song information to modify
  ```json
  {
    "name": "Stadium Arcadium",
    "lyrics": "Bells around St. Petersburg when I saw you\\nI hope I get what you deserve\\nAnd this is where I find—\\nSmoke surrounds your perfect face and I'm falling\\nPushing a broom out into space\\nAnd this where I find a way\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAlone inside my forest room and it's storming\\nI never thought I'd be in bloom, but this is where I start\\n(Derelict days, and the stereo plays for the all night crowd that it cannot phase)\\nAnd I'm calling\\n(Tedious weeds that the media breeds, but the animal gets what the animal needs)\\nAnd I'm sorry\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAnd this is where I find\\n\\nRays of dust that wrap around your citizen\\nKind enough to disavow, and this is where I stand\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell I'm forming and I'm warming (Warming to you)\\nTo you.",
    "trackNumber": 4
  }
  ```

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: modified song
  ```json
  {
    "name": "Stadium Arcadium",
    "lyrics": "Bells around St. Petersburg when I saw you\\nI hope I get what you deserve\\nAnd this is where I find—\\nSmoke surrounds your perfect face and I'm falling\\nPushing a broom out into space\\nAnd this where I find a way\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAlone inside my forest room and it's storming\\nI never thought I'd be in bloom, but this is where I start\\n(Derelict days, and the stereo plays for the all night crowd that it cannot phase)\\nAnd I'm calling\\n(Tedious weeds that the media breeds, but the animal gets what the animal needs)\\nAnd I'm sorry\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking now\\n\\nAnd this is where I find\\n\\nRays of dust that wrap around your citizen\\nKind enough to disavow, and this is where I stand\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell, I'm forming and I'm warming (Warming to you)\\nPushing myself and, no, I don't mind asking\\n\\nThe Stadium Arcadium\\nA mirror to the moon (Mirror to the moon)\\nWell, I'm forming and I'm warming (Warming to you)\\nState of the art until the clouds come crashing\\nStranger things have happened\\nBoth before and after noon (Before and after noon)\\nWell I'm forming and I'm warming (Warming to you)\\nTo you.",
    "trackNumber": 4,
    "songId": 2,
    "albumId": 1,
    "updatedAt": "2025-06-12T18:08:29.476Z"
  }
  ```

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: successful message
  ```json
  {
    "message": "Sucessfully deleted"
  }
  ```

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy/practice-for-week-08-music-archive-docs-long-practice

```

```
