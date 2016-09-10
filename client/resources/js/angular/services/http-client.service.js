"use strict";
class EndPoint {
    static get login() { return '/api/authentication/login'; }
    static get logout() { return '/api/authentication/logout'; }
    static get singup() { return '/api/authentication/singup'; }
    static get language() { return '/api/language'; }
    static get role() { return '/api/role'; }
    static get account() { return '/api/account'; }
}
exports.EndPoint = EndPoint;
//# sourceMappingURL=http-client.service.js.map