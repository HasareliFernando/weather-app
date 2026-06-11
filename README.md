# Weather App

A React + TypeScript weather application that retrieves weather information from OpenWeather API and displays it in a responsive user interface.

## Tech Stack

* React
* TypeScript
* Vite
* OpenWeather API
* Docker

## Prerequisites

Before running the application, make sure you have:

* Node.js 18+
* Docker Desktop
* OpenWeather API Key

## Environment Setup

Create a `.env` file in the project root directory:

```env
VITE_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Replace `YOUR_OPENWEATHER_API_KEY` with your OpenWeather API key.

Example:

```env
VITE_API_KEY=1234567890abcdef1234567890abcdef
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Build the Application

```bash
npm run build
```

## Run with Docker

### Build Docker Image

```bash
docker build -t weather-app .
```

### Run Docker Container

```bash
docker run -p 3000:3000 weather-app
```

Open:

```text
http://localhost:3000
```

### Stop the Container

Press:

```text
CTRL + C
```

Or stop it from another terminal:

```bash
docker ps
docker stop <container_id>
```

## Project Structure

```text
src/
├── components/
├── data/
│   └── cities.json
├── services/
│   └── weatherApi.ts
├── utils/
│   └── cityParser.ts
├── types/
└── App.tsx
```

## Notes

