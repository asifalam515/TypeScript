"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish
    const age = 11;
    // (age >= 18)?console.log("YOu are ready to go"):console.log("you are not ready");;
    // nullish coalescing operator:
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const isPaid = undefined;
    const confirmOrder = isPaid !== null && isPaid !== void 0 ? isPaid : "Please Pay";
    const user = {
        name: "asibul alam",
        address: {
            city: "kushtia",
            road: "ks",
            presentAddress: "kushtia",
        }
    };
    const pernamentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.pernamentAddress) !== null && _b !== void 0 ? _b : "No pernament  address found";
    console.log({ pernamentAddress });
}
