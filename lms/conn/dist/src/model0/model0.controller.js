'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Model0Controller = void 0;
const common_1 = require('@nestjs/common');
const model0_service_1 = require('./model0.service');
const client_1 = require('@prisma/client');
let Model0Controller = class Model0Controller {
  constructor(model0Service) {
    this.model0Service = model0Service;
  }
  create(createModel0Dto) {
    return this.model0Service.create(createModel0Dto);
  }
  findAll() {
    return this.model0Service.findAll();
  }
  findOne(name) {
    return this.model0Service.findOne(name);
  }
  update(email, updateModel0Dto) {
    return this.model0Service.update(email, updateModel0Dto);
  }
  remove(id) {
    return this.model0Service.remove(+id);
  }
};
exports.Model0Controller = Model0Controller;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', void 0),
  ],
  Model0Controller.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  Model0Controller.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  Model0Controller.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, Object]),
    __metadata('design:returntype', void 0),
  ],
  Model0Controller.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  Model0Controller.prototype,
  'remove',
  null,
);
exports.Model0Controller = Model0Controller = __decorate(
  [
    (0, common_1.Controller)('model0'),
    __metadata('design:paramtypes', [model0_service_1.Model0Service]),
  ],
  Model0Controller,
);
//# sourceMappingURL=model0.controller.js.map
