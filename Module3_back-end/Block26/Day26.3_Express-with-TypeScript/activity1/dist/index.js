"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', user_route_1.default);
const PORT = 3000;
app.listen(PORT, () => console.log(PORT));
app.use(error_middleware_1.default);
