/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/cartRouter.js":
/*!**********************************!*\
  !*** ./src/server/cartRouter.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nrouter.get('/', (req, res) => {\n  fs.readFile('./src/server/db/userCart.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.send(data);\n    }\n  });\n});\nrouter.post('/', (req, res) => {\n  fs.readFile('./src/server/db/userCart.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      const userCart = JSON.parse(data);\n      const add = (userCart, req) => {\n        userCart.contents.push(req.body);\n        return JSON.stringify(userCart, null, 4);\n      };\n      fs.writeFile('./src/server/db/userCart.json', add(userCart, req), err => {\n        if (err) {\n          res.send('{\"result\": 0}');\n        } else {\n          res.send('{\"result\": 1}');\n        }\n      });\n    }\n  });\n});\nrouter.put('/:id', (req, res) => {\n  fs.readFile('./src/server/db/userCart.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      const userCart = JSON.parse(data);\n      const change = (userCart, req) => {\n        this.find = userCart.contents.find(el => el.id_product === +req.params.id);\n        this.find.quantity += req.body.quantity;\n        return JSON.stringify(userCart, null, 4);\n      };\n      fs.writeFile('./src/server/db/userCart.json', change(userCart, req), err => {\n        if (err) {\n          res.send('{\"result\": 0}');\n        } else {\n          res.send(`{\"result\": 1, \"quantity\": ${this.find.quantity}}`);\n        }\n      });\n    }\n    ;\n  });\n});\nrouter.delete('/:id', (req, res) => {\n  fs.readFile('./src/server/db/userCart.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      const userCart = JSON.parse(data);\n      const del = (userCart, req) => {\n        let cartItem = userCart.contents.find(data => data.id_product === req.body.id_product);\n        userCart.contents.splice(userCart.contents.indexOf(cartItem), 1);\n        return JSON.stringify(userCart, null, 4);\n      };\n      fs.writeFile('./src/server/db/userCart.json', del(userCart, req), err => {\n        if (err) {\n          res.send('{\"result\": 0}');\n        } else {\n          res.send('{\"result\": 1}');\n        }\n      });\n    }\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://js_education_ii/./src/server/cartRouter.js?");

/***/ }),

/***/ "./src/server/getImage.js":
/*!********************************!*\
  !*** ./src/server/getImage.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst images = express.Router();\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nimages.get('/:id', (req, res) => {\n  fs.readFile(`./src/images/${req.params.id}`, (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.statusCode = 200;\n      res.setHeader(\"Content-Type\", \"image/jpeg\");\n      res.end(data);\n    }\n  });\n});\nmodule.exports = images;\n\n//# sourceURL=webpack://js_education_ii/./src/server/getImage.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst router = __webpack_require__(/*! ./cartRouter */ \"./src/server/cartRouter.js\");\nconst images = __webpack_require__(/*! ./getImage */ \"./src/server/getImage.js\");\napp.use(express.json());\napp.use('/', express.static('./dist/'));\napp.use('/api/cart', router);\napp.use('/images', images);\napp.get('/api/products', (req, res) => {\n  fs.readFile('./src/server/db/products.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.send(JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.send(data);\n    }\n  });\n});\nconst moment = __webpack_require__(/*! moment */ \"moment\");\nlastData = () => console.log(`Время на сервере: ${moment().format('dddd DD.MM.YY H:mm')} port ${port}`);\nsetInterval(lastData, 300000);\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`Listening ${port} port`);\n  lastData();\n});\n\n//# sourceURL=webpack://js_education_ii/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;