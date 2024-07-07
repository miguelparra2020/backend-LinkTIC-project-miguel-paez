"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para parsear JSON
app.use(express_1.default.json());
// Ruta principal
app.get('/', (_req, res) => {
    res.send('¡Hola Mundo!');
});
// Ruta principal
app.get('/ping', (_req, res) => {
    res.send('Pong!');
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
