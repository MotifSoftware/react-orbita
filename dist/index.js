'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var crossFetch = _interopDefault(require('cross-fetch'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var OrbitaContext = React.createContext({
    endpoint: '',
});
var OrbitaProvider = /** @class */ (function (_super) {
    __extends(OrbitaProvider, _super);
    function OrbitaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrbitaProvider.prototype.render = function () {
        var _a = this.props, endpoint = _a.endpoint, children = _a.children;
        return (React__default.createElement(OrbitaContext.Provider, { value: { endpoint: endpoint } }, children));
    };
    return OrbitaProvider;
}(React.Component));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Chat_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(crossFetch);
var Chat = /** @class */ (function () {
    function Chat(settings) {
        this._settings = settings;
    }
    Chat.prototype.send = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var isVersion1, requestBody, fetchResponse, responseJSON, orbitaPayload, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        isVersion1 = this.settings.orbitaNodeVersion && this.settings.orbitaNodeVersion === 1;
                        requestBody = isVersion1 ?
                            {
                                query: request.message,
                                sessionId: request.sessionId,
                                audio: request.audio,
                                customData: request.customData
                            } : {
                            text: request.message,
                            sessionId: request.sessionId,
                            audio: request.audio,
                            customData: request.customData
                        };
                        return [4 /*yield*/, cross_fetch_1.default(this.settings.endpoint, {
                                method: "POST",
                                body: JSON.stringify(requestBody),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })];
                    case 1:
                        fetchResponse = _a.sent();
                        return [4 /*yield*/, fetchResponse.json()];
                    case 2:
                        responseJSON = _a.sent();
                        if ((isVersion1 && !responseJSON.data) || (!isVersion1 && !responseJSON.orbitaPayload.payload)) {
                            return [2 /*return*/, {
                                    text: "I'm sorry, I did not understand.",
                                    reprompt: "Can you say that again?",
                                    type: "failure"
                                }];
                        }
                        else {
                            orbitaPayload = isVersion1 ? responseJSON.data.orbitaPayload.payload : responseJSON.orbitaPayload.payload;
                            response = request.audio && !isVersion1 ?
                                {
                                    voice: orbitaPayload.multiagent.voice,
                                    chat: orbitaPayload.multiagent.chat,
                                    screen: orbitaPayload.multiagent.screen,
                                    buttons: orbitaPayload.multiagent.buttons,
                                    audio: responseJSON.sayTextAudio,
                                    directives: orbitaPayload.directive,
                                    rawPayload: orbitaPayload,
                                    type: "success"
                                } : {
                                voice: orbitaPayload.multiagent.voice,
                                chat: orbitaPayload.multiagent.chat,
                                screen: orbitaPayload.multiagent.screen,
                                buttons: orbitaPayload.multiagent.buttons,
                                directives: orbitaPayload.directive,
                                rawPayload: orbitaPayload,
                                type: "success"
                            };
                            return [2 /*return*/, response];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, {
                                text: "I'm sorry, I couldn't process your request. Please try again in a moment.",
                                reprompt: "Can you please try again?",
                                type: "failure"
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Chat.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: true,
        configurable: true
    });
    return Chat;
}());
exports.default = Chat;
});

unwrapExports(Chat_1);

var APIClient_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Chat_1$$1 = __importDefault(Chat_1);
var APIClient = /** @class */ (function () {
    function APIClient(settings) {
        this._settings = settings;
        this._chat = new Chat_1$$1.default(settings.chat);
    }
    Object.defineProperty(APIClient.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIClient.prototype, "Chat", {
        get: function () {
            return this._chat;
        },
        enumerable: true,
        configurable: true
    });
    return APIClient;
}());
exports.default = APIClient;
});

unwrapExports(APIClient_1);

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.APIClient = APIClient_1.default;
});

unwrapExports(dist);
var dist_1 = dist.APIClient;

var OrbitaTextInput = /** @class */ (function (_super) {
    __extends(OrbitaTextInput, _super);
    function OrbitaTextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            text: _this.props.defaultValue || "",
        };
        _this.sendMessage = function (message) { return __awaiter(_this, void 0, void 0, function () {
            var settings, _a, customData, sessionId, onResults, onError, onSend, endpoint, client, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        settings = this.context;
                        _a = this.props, customData = _a.customData, sessionId = _a.sessionId, onResults = _a.onResults, onError = _a.onError, onSend = _a.onSend;
                        if (!settings) return [3 /*break*/, 2];
                        endpoint = settings.endpoint;
                        client = new dist_1({
                            chat: {
                                endpoint: endpoint,
                                orbitaNodeVersion: 2,
                            },
                        });
                        if (onSend)
                            onSend(message);
                        this.setState({ text: "" });
                        return [4 /*yield*/, client.Chat.send({
                                message: message,
                                sessionId: sessionId,
                                audio: true,
                                customData: customData,
                            })];
                    case 1:
                        response = _b.sent();
                        if (response.type === "success") {
                            if (onResults) {
                                onResults({
                                    text: response.chat.chatText,
                                    buttons: response.buttons,
                                    directives: response.directives
                                }, message);
                            }
                        }
                        else {
                            if (onError) {
                                onError("Request failed", message);
                            }
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.handleChange = function (e) {
            _this.setState({ text: e.target.value });
        };
        _this.handleKeyDown = function (e) {
            if (e.key === "Enter") {
                _this.sendMessage(_this.state.text);
            }
        };
        return _this;
    }
    OrbitaTextInput.prototype.render = function () {
        var text = this.state.text;
        return (React__default.createElement("input", { type: "text", className: this.props.className, value: text, onChange: this.handleChange, onKeyDown: this.handleKeyDown }));
    };
    OrbitaTextInput.contextType = OrbitaContext;
    return OrbitaTextInput;
}(React.Component));

exports.OrbitaProvider = OrbitaProvider;
exports.OrbitaTextInput = OrbitaTextInput;
//# sourceMappingURL=index.js.map
