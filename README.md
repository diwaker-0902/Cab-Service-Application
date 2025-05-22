# Cab-Service-Application
Backend of a microservices-based Cab Service Application using RabbitMQ for inter-service communication and dedicated services for users, captains, rides, and gateway.

🧱 Microservices Architecture
Service	 -  Description	                                                       -  Port
User     -	Manages user registration, login, and JWT	                          3001
Captain	  -       Handles captain onboarding & authentication	                            3002
Ride	          - Manages ride requests and matching logic	                                3003
Gateway         -	Entry point; routes requests to services                               	3000

Each service has its own MongoDB database and communicates asynchronously using RabbitMQ.


🚀 Features
✅ User and Captain Authentication with JWT
✅ Role-based routing via API Gateway
✅ Ride request and acceptance flow
✅ Event-driven communication via RabbitMQ
✅ Scalable microservice setup


📡 Message Queue (RabbitMQ)
Used for communication between ride, user, and captain services.
Example: When a user requests a ride, a message is published to a ride-requested queue. Captains can subscribe and accept the ride.
