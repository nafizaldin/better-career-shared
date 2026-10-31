"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sanitize/index.ts
var sanitize_exports = {};
__export(sanitize_exports, {
  sanitize: () => sanitize
});
module.exports = __toCommonJS(sanitize_exports);
var import_sanitize_html = __toESM(require("sanitize-html"));
var sanitize = (html, options) => {
  const allowedTags = options?.allowedTags ?? [];
  return (0, import_sanitize_html.default)(html, {
    ...options,
    allowedTags: [
      ...allowedTags,
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "b",
      "bdi",
      "bdo",
      "blockquote",
      "br",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "dd",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "figcaption",
      "figure",
      "footer",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "i",
      "img",
      "kbd",
      "li",
      "main",
      "main",
      "mark",
      "nav",
      "ol",
      "p",
      "pre",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "section",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "u",
      "ul",
      "var",
      "wbr"
    ],
    allowedAttributes: {
      ...options?.allowedAttributes,
      "*": ["class", "style"],
      a: ["href", "target"],
      img: ["src", "alt"]
    },
    allowedStyles: {
      ...options?.allowedStyles,
      "*": { "text-align": [/^left$/, /^right$/, /^center$/, /^justify$/] }
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sanitize
});
//# sourceMappingURL=index.js.map