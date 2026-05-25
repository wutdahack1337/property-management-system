# building
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"A"}'
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"B"}'
curl -X POST http://localhost:1337/api/building -H "Content-Type: application/json" -d '{"name":"C"}'

# unit
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 1, "name": "A101", "status": "available"}'
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 2, "name": "B101", "status": "occupied"}'
curl -X POST http://localhost:1337/api/unit -H "Content-Type: application/json" -d '{"buildingId": 3, "name": "C101", "status": "maintenance"}'

# login as admin (seeded in database.js)
TOKEN=$(curl -s -X POST http://localhost:1337/api/auth/login -H "Content-Type: application/json" -d '{"username":"admin", "password":"admin"}' | grep -o '"accessToken":"[^"]*"' | cut -d'"' -f4)

# resident
curl -X POST http://localhost:1337/api/resident -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"unitId": 1, "name":"Minh", "phoneNumber":"1234567890"}'
curl -X POST http://localhost:1337/api/resident -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"unitId": 1, "name":"Khang", "phoneNumber":"1234567890"}'
curl -X POST http://localhost:1337/api/resident -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"unitId": 2, "name":"Hai", "phoneNumber":"1111111111"}'
curl -X POST http://localhost:1337/api/resident -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"unitId": 3, "name":"Lu", "phoneNumber":"2222222222"}'

# account
curl -X POST http://localhost:1337/api/account -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"residentId": 1, "username":"minh", "password":"minhphong1"}'
curl -X POST http://localhost:1337/api/account -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"residentId": 2, "username":"khang", "password":"khangphong1"}'
curl -X POST http://localhost:1337/api/account -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"residentId": 3, "username":"hai", "password":"haiphong2"}'
curl -X POST http://localhost:1337/api/account -H "Content-Type: application/json" -H "Authorization: Bearer $TOKEN" -d '{"residentId": 4, "username":"lu", "password":"luphong3"}'