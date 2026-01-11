const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

function redirect(res, url) {
  res.statusCode = 302;
  res.setHeader("Location", url);
  return res.end();
}

const server = http.createServer((req, res) => {
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      const availableRooms = world.availableRoomsToString();
      const newPlayerPage = fs
        .readFileSync("./views/new-player.html", "utf8")
        .replace(/#{availableRooms}/g, availableRooms);
      const resBody = newPlayerPage;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(resBody);
      return res.end();
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      const { name, roomId } = req.body;
      const room = world.rooms[roomId];
      player = new Player(name, room);

      return redirect(res, `/rooms/${roomId}`);
    }

    // All route handlers after phase 2 should require a player
    if (!player) {
      return redirect(res, "/");
    }

    // Phase 3: GET /rooms/:roomId
    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      const urlParts = req.url.split("/");
      const roomId = Number(urlParts[urlParts.length - 1]);

      if (roomId !== player.currentRoom.id) {
        return redirect(res, `/rooms/${player.currentRoom.id}`);
      }

      const room = world.rooms[roomId];
      const roomPage = fs
        .readFileSync("./views/room.html", "utf8")
        .replace(/#{roomName}/g, room.name)
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{roomItems}/g, room.itemsToString())
        .replace(/#{exits}/g, room.exitsToString());

      const resBody = roomPage;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(resBody);
      return res.end();
    }

    // Phase 4: GET /rooms/:roomId/:direction

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
