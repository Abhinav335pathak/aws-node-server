
const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home page
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>AWS Node Server</title>

            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    background: #f4f7fb;
                    color: #1f2937;
                }

                nav {
                    background: #111827;
                    color: white;
                    padding: 18px 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                nav h2 {
                    color: #60a5fa;
                }

                nav span {
                    color: #d1d5db;
                }

                .hero {
                    min-height: 500px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 40px 20px;
                    background: linear-gradient(
                        135deg,
                        #dbeafe,
                        #eff6ff
                    );
                }

                .hero-content {
                    max-width: 800px;
                }

                .hero h1 {
                    font-size: 52px;
                    margin-bottom: 20px;
                    color: #111827;
                }

                .hero h1 span {
                    color: #2563eb;
                }

                .hero p {
                    font-size: 19px;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 30px;
                }

                .button {
                    display: inline-block;
                    padding: 14px 28px;
                    background: #2563eb;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: bold;
                }

                .button:hover {
                    background: #1d4ed8;
                }

                .features {
                    padding: 60px 8%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                }

                .card {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                }

                .card h3 {
                    margin-bottom: 12px;
                    color: #2563eb;
                }

                .card p {
                    color: #6b7280;
                    line-height: 1.6;
                }

                .status {
                    padding: 50px 20px;
                    text-align: center;
                    background: #111827;
                    color: white;
                }

                .status h2 {
                    margin-bottom: 15px;
                }

                .online {
                    color: #4ade80;
                    font-weight: bold;
                }

                footer {
                    text-align: center;
                    padding: 20px;
                    background: #030712;
                    color: #9ca3af;
                }

                @media (max-width: 768px) {
                    .hero h1 {
                        font-size: 38px;
                    }

                    .features {
                        grid-template-columns: 1fr;
                    }

                    nav {
                        padding: 18px 5%;
                    }
                }
            </style>
        </head>

        <body>

            <nav>
                <h2>AWS Node Server</h2>
                <span>EC2 Deployment</span>
            </nav>

            <section class="hero">
                <div class="hero-content">
                    <h1>
                        My Node.js Server is
                        <span>Live!</span>
                    </h1>

                    <p>
                        This application is running on an AWS EC2 instance
                        using Node.js and Express. This page is being served
                        directly from my cloud server.
                    </p>

                    <a href="#features" class="button">
                        Explore Server
                    </a>
                </div>
            </section>

            <section class="features" id="features">

                <div class="card">
                    <h3>☁️ AWS EC2</h3>
                    <p>
                        The application is deployed on a virtual server
                        running inside an AWS VPC.
                    </p>
                </div>

                <div class="card">
                    <h3>⚡ Node.js</h3>
                    <p>
                        Express.js handles HTTP requests and serves this
                        web application on port 3000.
                    </p>
                </div>

                <div class="card">
                    <h3>🚀 Deployment</h3>
                    <p>
                        The project can be updated through GitHub and
                        eventually automated using CI/CD.
                    </p>
                </div>

            </section>

            <section class="status">
                <h2>Server Status</h2>

                <p>
                    Status:
                    <span class="online">● ONLINE</span>
                </p>

                <p>
                    Server Time:
                    ${new Date().toLocaleString()}
                </p>
            </section>

            <footer>
                AWS Node.js Deployment Project
            </footer>

        </body>
        </html>
    `);
});

// Health-check endpoint
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        server: "AWS EC2",
        service: "Node.js + Express",
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
