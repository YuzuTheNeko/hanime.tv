"use strict";
const app = require("express")();
app.use(require("express").static("./docs"));
app.listen(3000, () => console.log("Ready"));
//# sourceMappingURL=api.js.map