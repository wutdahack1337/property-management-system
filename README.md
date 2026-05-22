# property-management-system

```
npm init
npm install express
node index.js
```

```
node install better-sqlite3

curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"Minh"}'
```

```
npm run dev
curl -X GET localhost:1337/api/building

curl -X PATCH http://localhost:1337/api/building/1 -H "Content-Type: application/json" -d '{"name":"Minh"}'

curl -X DELETE http://localhost:1337/api/building/1
```