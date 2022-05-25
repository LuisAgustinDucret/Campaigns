"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_luisa_OneDrive_Escritorio_Agustin_SolidityLearn_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_luisa_OneDrive_Escritorio_Agustin_SolidityLearn_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_luisa_OneDrive_Escritorio_Agustin_SolidityLearn_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContributeForm = function(param) {\n    var address = param.address;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), contribution = ref[0], setContribution = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loadingButton = ref1[0], setLoadingButton = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), errMessage = ref2[0], setErrorMesage = ref2[1];\n    var contributionChangeHandler = function(event) {\n        setContribution(event.target.value);\n    };\n    var submitHandler = function() {\n        var _ref = _asyncToGenerator(C_Users_luisa_OneDrive_Escritorio_Agustin_SolidityLearn_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var campaignSearch, accounts;\n            return C_Users_luisa_OneDrive_Escritorio_Agustin_SolidityLearn_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setLoadingButton(true);\n                        setErrorMesage(\"\");\n                        campaignSearch = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(address);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                    case 7:\n                        accounts = _ctx.sent;\n                        _ctx.next = 10;\n                        return campaignSearch.methods.contribute().send({\n                            from: accounts[0],\n                            value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(contribution, \"ether\")\n                        });\n                    case 10:\n                        router.replace(\"/campaigns/\".concat(address));\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        setErrorMesage(_ctx.t0.message);\n                    case 16:\n                        setContribution(\"\");\n                        setLoadingButton(false);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    13\n                ]\n            ]);\n        }));\n        return function submitHandler(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n            onSubmit: submitHandler,\n            error: errMessage != \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"Minimum Contribution\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                            label: \"ether\",\n                            labelPosition: \"right\",\n                            placeholder: \"Minimum\",\n                            value: contribution,\n                            onChange: contributionChangeHandler\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                    error: true,\n                    header: \"oops, error!\",\n                    content: errMessage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    primary: true,\n                    loading: loadingButton,\n                    type: \"submit\",\n                    children: \"Contribute!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luisa\\\\OneDrive\\\\Escritorio\\\\Agustin\\\\SolidityLearn\\\\kickstart\\\\components\\\\ContributeForm.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContributeForm, \"gLGDcHt5gxbgTvVdPsGkHAmSFVo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEQ7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0csQ0FDWjtDQUNIO0dBdERLdkMsY0FBYzs7UUFDSFYsa0RBQVM7OztBQURwQlUsS0FBQUEsY0FBYztBQXdEcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzP2UwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZUZvcm0gPSAoe2FkZHJlc3N9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2NvbnRyaWJ1dGlvbiwgc2V0Q29udHJpYnV0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nQnV0dG9uLCBzZXRMb2FkaW5nQnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyTWVzc2FnZSwgc2V0RXJyb3JNZXNhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGNvbnRyaWJ1dGlvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENvbnRyaWJ1dGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0TG9hZGluZ0J1dHRvbih0cnVlKTtcclxuICAgIHNldEVycm9yTWVzYWdlKFwiXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW1wYWlnblNlYXJjaCA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ25TZWFyY2gubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkoY29udHJpYnV0aW9uLCBcImV0aGVyXCIpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKGAvY2FtcGFpZ25zLyR7YWRkcmVzc31gKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvck1lc2FnZShlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29udHJpYnV0aW9uKFwiXCIpO1xyXG4gICAgc2V0TG9hZGluZ0J1dHRvbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfSBlcnJvcj17ZXJyTWVzc2FnZSAhPSBcIlwifT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWluaW11bVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb250cmlidXRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250cmlidXRpb25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwib29wcywgZXJyb3IhXCIgY29udGVudD17ZXJyTWVzc2FnZX0gLz5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17bG9hZGluZ0J1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgQ29udHJpYnV0ZSFcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJyb3V0ZXIiLCJjb250cmlidXRpb24iLCJzZXRDb250cmlidXRpb24iLCJsb2FkaW5nQnV0dG9uIiwic2V0TG9hZGluZ0J1dHRvbiIsImVyck1lc3NhZ2UiLCJzZXRFcnJvck1lc2FnZSIsImNvbnRyaWJ1dGlvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3VibWl0SGFuZGxlciIsImNhbXBhaWduU2VhcmNoIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlIiwiZXJyIiwibWVzc2FnZSIsIm9uU3VibWl0IiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSIsImxvYWRpbmciLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});