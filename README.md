# Kafka Express App

![Node.js](https://img.shields.io/badge/Node.js-v18.x-brightgreen)
![Docker](https://img.shields.io/badge/Docker-19.03.0-blue)
![Kafka](https://img.shields.io/badge/Kafka-2.8.0-blue)
![License MIT](https://img.shields.io/badge/License-MIT-yellow)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Clustering](#clustering)
- [Kafka Consumer](#kafka-consumer)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Kafka Express App is a scalable Node.js application built with Express.js, Docker, and Apache Kafka. 

It allows you to send messages to a Kafka topic through a RESTful API. The application is containerized using Docker and orchestrated with Docker Compose, ensuring ease of deployment and scalability. 

Additionally, the app utilizes Node.js clustering to leverage multi-core CPU architectures, enhancing performance and reliability.

## Features

- **Express.js**: Fast and minimalist web framework for Node.js.
- **Apache Kafka**: Distributed streaming platform for building real-time data pipelines.
- **Docker & Docker Compose**: Containerization and orchestration for easy setup and deployment.
- **Clustering**: Utilizes Node.js's clustering to run multiple worker processes for improved performance.
- **Modular Architecture**: Organized using Controllers and Services for maintainability.
- **Graceful Shutdown**: Ensures proper disconnection from Kafka and cleanup of resources.
- **Health Checks**: Endpoint to verify the application's health status.

## Technologies Used

- **Node.js** (v18.x)
- **Express.js**
- **KafkaJS**
- **Docker** (v19.03.0+)
- **Docker Compose** (v1.27.0+)
- **PM2** (Optional for advanced process management)
- **Zookeeper** (via Bitnami Docker image)
- **Kafka** (via Bitnami Docker image)

## Project Structure

    kafka-express-app/
    ├── controllers/
    │   └── messageController.js
    ├── services/
    │   └── kafkaService.js
    ├── routes/
    │   └── messageRoutes.js
    ├── index.js
    ├── app.js
    ├── package.json
    ├── Dockerfile
    └── docker-compose.yml

# Contact
- Gustavo Nakahara
- gustavo.nakahara
- [Github - https://github.com/nakaharag](https://github.com/nakaharag)
- [Linkedin - https://linkedin.com/in/gustavonakahara](https://linkedin.com/in/gustavonakahara)
