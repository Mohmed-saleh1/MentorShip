"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const app = (0, express_1.default)();
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Database connection
(0, dbConfig_1.default)();
// Mount the routes at a specific path
app.use('/api/users', authRoutes_1.default);
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
