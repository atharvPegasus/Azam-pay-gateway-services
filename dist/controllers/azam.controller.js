"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = exports.CheckoutController = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const checkout_1 = require("../api-specs/checkout");
const token_1 = require("../api-specs/token");
let CheckoutController = class CheckoutController {
    constructor() { }
    async checkoutComponentFunction(request) {
        const { body } = request;
        let response = {};
        (body === null || body === void 0 ? void 0 : body.isSuccess) ?
            response = {
                success: true,
                responseCode: 200,
                message: 'This is a successfull transaction',
                data: {
                    ReferenceID: 'REFERENCE_ID'
                }
            } :
            response = {
                success: false,
                responseCode: 500,
                message: 'Internal server error',
                data: {}
            };
        return response;
    }
};
tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CheckoutController.prototype, "checkoutComponentFunction", null);
CheckoutController = tslib_1.__decorate([
    rest_1.api(checkout_1.checkoutApiDef),
    tslib_1.__metadata("design:paramtypes", [])
], CheckoutController);
exports.CheckoutController = CheckoutController;
let TokenController = class TokenController {
    constructor() { }
    async tokenComponentFunction(request) {
        const { body } = request;
        let response = {};
        (body === null || body === void 0 ? void 0 : body.isSuccess) ?
            response = {
                success: true,
                responseCode: 200,
                message: 'Token successfully generated',
                data: {
                    Authorization: 'ENCRYPTED_TOKEN'
                }
            } :
            response = {
                success: false,
                responseCode: 500,
                message: 'Internal server error',
                data: {}
            };
        return response;
    }
};
tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TokenController.prototype, "tokenComponentFunction", null);
TokenController = tslib_1.__decorate([
    rest_1.api(token_1.tokenDef),
    tslib_1.__metadata("design:paramtypes", [])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=azam.controller.js.map