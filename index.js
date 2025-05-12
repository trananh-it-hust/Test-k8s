const http = require("http");
const os = require("os");

const hostname = "0.0.0.0"; // Listen on all network interfaces
const port = 3000;
const version = "2.0.0"; // Define your app version

// Function to get the server's IP address
function getServerIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "127.0.0.1"; // Fallback to localhost
}

// Function to generate random log messages every 10 seconds
function setupRandomLogger() {
  const logMessages = [
    "Server health check: OK",
    "Memory usage normal",
    "Processing incoming requests",
    "Database connection stable",
    "Cache hit rate: 85%",
    "Background tasks running",
    "API endpoints responding normally",
    "Service dependencies available",
    "Traffic levels within normal parameters",
    "System resources optimal",
  ];

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * logMessages.length);
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${logMessages[randomIndex]}`);
  }, 10000); // Run every 10 seconds
}

const server = http.createServer((req, res) => {
  const serverIP = getServerIP();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    `1234\nServer IP: ${serverIP}\nVersion: ${version}\nHostname: ${hostname}\nUpdated: ${new Date().toISOString()}\n`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  setupRandomLogger(); // Start the random logging
});
