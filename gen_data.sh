# building
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"A"}'
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"B"}'
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"C"}'

# unit
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 1, "name": "A101", "status": "available"}'
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 2, "name": "B101", "status": "occupied"}'
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 3, "name": "C101", "status": "maintenance"}'

# resident
curl -X POST http://localhost:1337/api/resident -H "Content-Type: application/json" -d '{"unitId": 1, "name":"Minh", "phoneNumber":"1234567890"}'