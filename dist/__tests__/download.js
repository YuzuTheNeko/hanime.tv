"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const speaker_1 = __importDefault(require("speaker"));
(0, __1.download)(1315)
    .then(stream => {
    stream.pipe(new speaker_1.default({
        channels: 2,
        bitDepth: 16,
        sampleRate: 48_000
    }));
});
//# sourceMappingURL=download.js.map