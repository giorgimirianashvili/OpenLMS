"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model0Module = void 0;
const common_1 = require("@nestjs/common");
const model0_service_1 = require("./model0.service");
const model0_controller_1 = require("./model0.controller");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
let Model0Module = class Model0Module {
};
exports.Model0Module = Model0Module;
exports.Model0Module = Model0Module = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.register({
                secret: 'your-secret',
            }),
        ],
        controllers: [model0_controller_1.Model0Controller],
        providers: [model0_service_1.Model0Service, prisma_service_1.PrismaService],
    })
], Model0Module);
//# sourceMappingURL=model0.module.js.map