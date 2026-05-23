# property-management-system

```
npm init
npm install express
node index.js
```

```
npm install better-sqlite3

curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"A"}'
```

```
npm run dev
curl -X GET localhost:1337/api/building

curl -X PATCH http://localhost:1337/api/building/1 -H "Content-Type: application/json" -d '{"name":"B"}'

curl -X DELETE http://localhost:1337/api/building/1
```

```
npm install
```

## Unit API

```
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"A"}'
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 1, "status": "available"}'

curl -X PATCH http://localhost:1337/api/unit/1 -H "Content-Type: application/json" -d '{"buildingId": 1, "status": "occupied"}'

curl -X DELETE http://localhost:1337/api/unit/1
```

## SQLite3 commands

```
sqlite3 database.db
.tables
.schema rooms
SELECT * FROM rooms;
.quit
```
