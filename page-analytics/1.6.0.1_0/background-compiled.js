/**
 * 代码翻译：听歌
 * 电子邮件：505253293@163.com
 * 新浪微博：http://blog.sina.com.cn/tinggebar
 * 代码地址：https://chrome.google.com/webstore/detail/page-analytics-by-google/fnbdnhhicmebfgdgglcdacdapkcihcoh?hl=en
 * 文档地址：https://crxdoc-zh.appspot.com/apps/background_pages
 * @fileoverview Page Analytics（分析）Chrome扩展代码：后台网页。
 */

'use strict';
var b, g = g || {};
g.global = this;
g.isDef = function (a) {
    return void 0 !== a
};
g.exportPath_ = function (a, c, d) {
    a = a.split(".");
    d = d || g.global;
    a[0]in d || !d.execScript || d.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());)
        !a.length && g.isDef(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
};
g.define = function (a, c) {
    var d = c;
    g.exportPath_(a, d)
};
g.DEBUG = !0;
g.LOCALE = "en";
g.TRUSTED_SITE = !0;
g.STRICT_MODE_COMPATIBLE = !1;
g.provide = function (a) {
    g.exportPath_(a)
};
g.setTestOnly = function (a) {
    if (!g.DEBUG)
        throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
};
g.forwardDeclare = function () {
};
g.getObjectByName = function (a, c) {
    for (var d = a.split("."), e = c || g.global, f; f = d.shift();)
        if (g.isDefAndNotNull(e[f]))
            e = e[f];
        else
            return null;
    return e
};
g.globalize = function (a, c) {
    var d = c || g.global, e;
    for (e in a)
        d[e] = a[e]
};
g.addDependency = function (a, c, d) {
    if (g.DEPENDENCIES_ENABLED) {
        var e;
        a = a.replace(/\\/g, "/");
        for (var f = g.dependencies_, h = 0; e = c[h]; h++)
            f.nameToPath[e] = a, a in f.pathToNames || (f.pathToNames[a] = {}), f.pathToNames[a][e] = !0;
        for (e = 0; c = d[e]; e++)
            a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0
    }
};
g.useStrictRequires = !1;
g.ENABLE_DEBUG_LOADER = !0;
g.require = function () {
};
g.basePath = "";
g.nullFunction = function () {
};
g.identityFunction = function (a) {
    return a
};
g.abstractMethod = function () {
    throw Error("unimplemented abstract method");
};
g.addSingletonGetter = function (a) {
    a.getInstance = function () {
        if (a.instance_)
            return a.instance_;
        g.DEBUG && (g.instantiatedSingletons_[g.instantiatedSingletons_.length] = a);
        return a.instance_ = new a
    }
};
g.instantiatedSingletons_ = [];
g.DEPENDENCIES_ENABLED = !1;
g.DEPENDENCIES_ENABLED && (
    g.included_ = {},
    g.dependencies_ = {
        pathToNames: {},
        nameToPath: {},
        requires: {},
        visited: {},
        written: {}
    },
    g.inHtmlDocument_ = function () {
        var a = g.global.document;
        return"undefined" != typeof a && "write"in a
    },
    g.findBasePath_ = function () {
        if (g.global.CLOSURE_BASE_PATH)
            g.basePath = g.global.CLOSURE_BASE_PATH;
        else if (g.inHtmlDocument_())
            for (var a = g.global.document, a = a.getElementsByTagName("script"), c = a.length - 1; 0 <= c; --c) {
                var d = a[c].src,
                    e = d.lastIndexOf("?"),
                    e = -1 == e ? d.length : e;
                if ("base.js" == d.substr(e - 7, 7)) {
                    g.basePath = d.substr(0, e - 7);
                    break
                }
        }
    },
    g.importScript_ = function (a) {
        var c = g.global.CLOSURE_IMPORT_SCRIPT || g.writeScriptTag_;
        !g.dependencies_.written[a] && c(a) && (g.dependencies_.written[a] = !0)
    },
    g.writeScriptTag_ = function (a) {
        if (g.inHtmlDocument_()) {
            var c = g.global.document;
            if ("complete" == c.readyState) {
                if (c = /\bdeps.js$/.test(a))
                    return!1;
                throw Error('Cannot write "' + a + '" after document load');
            }
            c.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
            return!0
        }
        return!1
    },
    g.writeScripts_ = function () {
        function a(f) {
            if (!(f in e.written)) {
                if (!(f in e.visited) && (e.visited[f] = !0, f in e.requires))
                    for (var l in e.requires[f])
                        if (!g.isProvided_(l))
                            if (l in e.nameToPath)
                                a(e.nameToPath[l]);
                            else
                                throw Error("Undefined nameToPath for " + l);
                f in d || (d[f] = !0, c.push(f))
            }
        }

        var c = [],
            d = {},
            e = g.dependencies_,
            f;
        for (f in g.included_)
            e.written[f] || a(f);
        for (f = 0; f < c.length; f++)
            if (c[f])
                g.importScript_(g.basePath + c[f]);
            else
                throw Error("Undefined script input");
    },
    g.getPathFromDeps_ = function (a) {
        return a in g.dependencies_.nameToPath ? g.dependencies_.nameToPath[a] : null
    },
    g.findBasePath_(),
    g.global.CLOSURE_NO_DEPS || g.importScript_(g.basePath + "deps.js")
    );
g.typeOf = function (a) {
    var c = typeof a;
    if ("object" == c)
        if (a) {
            if (a instanceof Array)
                return"array";
            if (a instanceof Object)
                return c;
            var d = Object.prototype.toString.call(a);
            if ("[object Window]" == d)
                return"object";
            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return"array";
            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return"function"
        } else
            return"null";
    else if ("function" == c && "undefined" == typeof a.call)
        return"object";
    return c
};
g.isNull = function (a) {
    return null === a
};
g.isDefAndNotNull = function (a) {
    return null != a
};
g.isArray = function (a) {
    return"array" == g.typeOf(a)
};
g.isArrayLike = function (a) {
    var c = g.typeOf(a);
    return"array" == c || "object" == c && "number" == typeof a.length
};
g.isDateLike = function (a) {
    return g.isObject(a) && "function" == typeof a.getFullYear
};
g.isString = function (a) {
    return"string" == typeof a
};
g.isBoolean = function (a) {
    return"boolean" == typeof a
};
g.isNumber = function (a) {
    return"number" == typeof a
};
g.isFunction = function (a) {
    return"function" == g.typeOf(a)
};
g.isObject = function (a) {
    var c = typeof a;
    return"object" == c && null != a || "function" == c
};
g.getUid = function (a) {
    return a[g.UID_PROPERTY_] || (a[g.UID_PROPERTY_] = ++g.uidCounter_)
};
g.hasUid = function (a) {
    return!!a[g.UID_PROPERTY_]
};
g.removeUid = function (a) {
    "removeAttribute"in a && a.removeAttribute(g.UID_PROPERTY_);
    try {
        delete a[g.UID_PROPERTY_]
    } catch (c) {
    }
};
g.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.uidCounter_ = 0;
g.getHashCode = g.getUid;
g.removeHashCode = g.removeUid;
g.cloneObject = function (a) {
    var c = g.typeOf(a);
    if ("object" == c || "array" == c) {
        if (a.clone)return a.clone();
        var c = "array" == c ? [] : {}, d;
        for (d in a)c[d] = g.cloneObject(a[d]);
        return c
    }
    return a
};
g.bindNative_ = function (a, c, d) {
    return a.call.apply(a.bind, arguments)
};
g.bindJs_ = function (a, c, d) {
    if (!a)throw Error();
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
            var d = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(d, e);
            return a.apply(c, d)
        }
    }
    return function () {
        return a.apply(c, arguments)
    }
};
g.bind = function (a, c, d) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.bindNative_ : g.bind = g.bindJs_;
    return g.bind.apply(null, arguments)
};
g.partial = function (a, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
        var c = d.slice();
        c.push.apply(c, arguments);
        return a.apply(this, c)
    }
};
g.mixin = function (a, c) {
    for (var d in c)a[d] = c[d]
};
g.now = g.TRUSTED_SITE && Date.now || function () {
    return+new Date
};
g.globalEval = function (a) {
    if (g.global.execScript)
        g.global.execScript(a, "JavaScript");
    else if (g.global.eval)
        if (null == g.evalWorksForGlobals_ && (g.global.eval("var _et_ = 1;"), "undefined" != typeof g.global._et_ ? (delete g.global._et_, g.evalWorksForGlobals_ = !0) : g.evalWorksForGlobals_ = !1), g.evalWorksForGlobals_)
            g.global.eval(a);
        else {
            var c = g.global.document,
                d = c.createElement("script");
            d.type = "text/javascript";
            d.defer = !1;
            d.appendChild(c.createTextNode(a));
            c.body.appendChild(d);
            c.body.removeChild(d)
        }
    else
        throw Error("goog.globalEval not available");
};
g.evalWorksForGlobals_ = null;
g.getCssName = function (a, c) {
    var d = function (a) {
        return g.cssNameMapping_[a] || a
    }, e = function (a) {
        a = a.split("-");
        for (var c = [], e = 0; e < a.length; e++)c.push(d(a[e]));
        return c.join("-")
    }, e = g.cssNameMapping_ ? "BY_WHOLE" == g.cssNameMappingStyle_ ? d : e : function (a) {
        return a
    };
    return c ? a + "-" + e(c) : e(a)
};
g.setCssNameMapping = function (a, c) {
    g.cssNameMapping_ = a;
    g.cssNameMappingStyle_ = c
};
g.getMsg = function (a, c) {
    c && (a = a.replace(/\{\$([^}]+)}/g, function (a, e) {
        return e in c ? c[e] : a
    }));
    return a
};
g.getMsgWithFallback = function (a) {
    return a
};
g.exportSymbol = function (a, c, d) {
    g.exportPath_(a, c, d)
};
g.exportProperty = function (a, c, d) {
    a[c] = d
};
g.inherits = function (a, c) {
    function d() {
    }

    d.prototype = c.prototype;
    a.superClass_ = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.base = function (a, d, h) {
        var l = Array.prototype.slice.call(arguments, 2);
        return c.prototype[d].apply(a, l)
    }
};
g.base = function (a, c, d) {
    var e = arguments.callee.caller;
    if (g.STRICT_MODE_COMPATIBLE || g.DEBUG && !e)
        throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (e.superClass_)
        return e.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var f = Array.prototype.slice.call(arguments, 2), h = !1, l = a.constructor; l; l = l.superClass_ && l.superClass_.constructor)
        if (l.prototype[c] === e)
            h = !0;
        else if (h)
            return l.prototype[c].apply(a, f);
    if (a[c] === e)
        return a.constructor.prototype[c].apply(a, f);
    throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function (a) {
    a.call(g.global)
};
g.MODIFY_FUNCTION_PROTOTYPES = !0;
g.MODIFY_FUNCTION_PROTOTYPES && (Function.prototype.bind = Function.prototype.bind || function (a, c) {
    if (1 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 1);
        d.unshift(this, a);
        return g.bind.apply(null, d)
    }
    return g.bind(this, a)
}, Function.prototype.partial = function (a) {
    var c = Array.prototype.slice.call(arguments);
    c.unshift(this, null);
    return g.bind.apply(null, c)
}, Function.prototype.inherits = function (a) {
    g.inherits(this, a)
}, Function.prototype.mixin = function (a) {
    g.mixin(this.prototype, a)
});
g.defineClass = function (a, c) {
    var d = c.constructor, e = c.statics;
    d && d != Object.prototype.constructor || (d = function () {
        throw Error("cannot instantiate an interface (no constructor defined).");
    });
    d = g.defineClass.createSealingConstructor_(d, a);
    a && g.inherits(d, a);
    delete c.constructor;
    delete c.statics;
    g.defineClass.applyProperties_(d.prototype, c);
    null != e && (e instanceof Function ? e(d) : g.defineClass.applyProperties_(d, e));
    return d
};
g.defineClass.SEAL_CLASS_INSTANCES = g.DEBUG;
g.defineClass.createSealingConstructor_ = function (a, c) {
    if (g.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
        if (c && c.prototype && c.prototype[g.UNSEALABLE_CONSTRUCTOR_PROPERTY_])return a;
        var d = function () {
            var c = a.apply(this, arguments) || this;
            this.constructor === d && Object.seal(c);
            return c
        };
        return d
    }
    return a
};
g.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.defineClass.applyProperties_ = function (a, c) {
    for (var d in c)Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    for (var e = 0; e < g.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; e++)d = g.defineClass.OBJECT_PROTOTYPE_FIELDS_[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
};
g.tagUnsealableClass = function () {
};
g.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
g.debug = {};
g.debug.Error = function (a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, g.debug.Error); else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a))
};
g.inherits(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.dom = {};
g.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
};
g.string = {};
g.string.DETECT_DOUBLE_ESCAPING = !1;
g.string.Unicode = {NBSP: "\u00a0"};
g.string.startsWith = function (a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
g.string.endsWith = function (a, c) {
    var d = a.length - c.length;
    return 0 <= d && a.indexOf(c, d) == d
};
g.string.caseInsensitiveStartsWith = function (a, c) {
    return 0 == g.string.caseInsensitiveCompare(c, a.substr(0, c.length))
};
g.string.caseInsensitiveEndsWith = function (a, c) {
    return 0 == g.string.caseInsensitiveCompare(c, a.substr(a.length - c.length, c.length))
};
g.string.caseInsensitiveEquals = function (a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
g.string.subs = function (a, c) {
    for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;)e += d.shift() + f.shift();
    return e + d.join("%s")
};
g.string.collapseWhitespace = function (a) {
    return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
g.string.isEmpty = function (a) {
    return/^[\s\xa0]*$/.test(a)
};
g.string.isEmptySafe = function (a) {
    return g.string.isEmpty(g.string.makeSafe(a))
};
g.string.isBreakingWhitespace = function (a) {
    return!/[^\t\n\r ]/.test(a)
};
g.string.isAlpha = function (a) {
    return!/[^a-zA-Z]/.test(a)
};
g.string.isNumeric = function (a) {
    return!/[^0-9]/.test(a)
};
g.string.isAlphaNumeric = function (a) {
    return!/[^a-zA-Z0-9]/.test(a)
};
g.string.isSpace = function (a) {
    return" " == a
};
g.string.isUnicodeChar = function (a) {
    return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
g.string.stripNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)+/g, " ")
};
g.string.canonicalizeNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n")
};
g.string.normalizeWhitespace = function (a) {
    return a.replace(/\xa0|\s/g, " ")
};
g.string.normalizeSpaces = function (a) {
    return a.replace(/\xa0|[ \t]+/g, " ")
};
g.string.collapseBreakingSpaces = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
g.string.trim = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
g.string.trimLeft = function (a) {
    return a.replace(/^[\s\xa0]+/, "")
};
g.string.trimRight = function (a) {
    return a.replace(/[\s\xa0]+$/, "")
};
g.string.caseInsensitiveCompare = function (a, c) {
    var d = String(a).toLowerCase(), e = String(c).toLowerCase();
    return d < e ? -1 : d == e ? 0 : 1
};
g.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
g.string.numerateCompare = function (a, c) {
    if (a == c)return 0;
    if (!a)return-1;
    if (!c)return 1;
    for (var d = a.toLowerCase().match(g.string.numerateCompareRegExp_), e = c.toLowerCase().match(g.string.numerateCompareRegExp_), f = Math.min(d.length, e.length), h = 0; h < f; h++) {
        var l = d[h], m = e[h];
        if (l != m)return d = parseInt(l, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : l < m ? -1 : 1
    }
    return d.length != e.length ? d.length - e.length : a < c ? -1 : 1
};
g.string.urlEncode = function (a) {
    return encodeURIComponent(String(a))
};
g.string.urlDecode = function (a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
};
g.string.newLineToBr = function (a, c) {
    return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
};
g.string.htmlEscape = function (a, c) {
    if (c)
        a = a.replace(g.string.AMP_RE_, "&amp;").replace(g.string.LT_RE_, "&lt;").replace(g.string.GT_RE_, "&gt;").replace(g.string.QUOT_RE_, "&quot;").replace(g.string.SINGLE_QUOTE_RE_, "&#39;").replace(g.string.NULL_RE_, "&#0;"), g.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(g.string.E_RE_, "&#101;"));
    else {
        if (!g.string.ALL_RE_.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(g.string.AMP_RE_, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(g.string.LT_RE_, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(g.string.GT_RE_, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(g.string.QUOT_RE_, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(g.string.SINGLE_QUOTE_RE_, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(g.string.NULL_RE_, "&#0;"));
        g.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(g.string.E_RE_, "&#101;"))
    }
    return a
};
g.string.AMP_RE_ = /&/g;
g.string.LT_RE_ = /</g;
g.string.GT_RE_ = />/g;
g.string.QUOT_RE_ = /"/g;
g.string.SINGLE_QUOTE_RE_ = /'/g;
g.string.NULL_RE_ = /\x00/g;
g.string.E_RE_ = /e/g;
g.string.ALL_RE_ = g.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.string.unescapeEntities = function (a) {
    return g.string.contains(a, "&") ? "document"in g.global ? g.string.unescapeEntitiesUsingDom_(a) : g.string.unescapePureXmlEntities_(a) : a
};
g.string.unescapeEntitiesWithDocument = function (a, c) {
    return g.string.contains(a, "&") ? g.string.unescapeEntitiesUsingDom_(a, c) : a
};
g.string.unescapeEntitiesUsingDom_ = function (a, c) {
    var d = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'}, e;
    e = c ? c.createElement("div") : g.global.document.createElement("div");
    return a.replace(g.string.HTML_ENTITY_PATTERN_, function (a, c) {
        var l = d[a];
        if (l)return l;
        if ("#" == c.charAt(0)) {
            var m = Number("0" + c.substr(1));
            isNaN(m) || (l = String.fromCharCode(m))
        }
        l || (e.innerHTML = a + " ", l = e.firstChild.nodeValue.slice(0, -1));
        return d[a] = l
    })
};
g.string.unescapePureXmlEntities_ = function (a) {
    return a.replace(/&([^;]+);/g, function (a, d) {
        switch (d) {
            case "amp":
                return"&";
            case "lt":
                return"<";
            case "gt":
                return">";
            case "quot":
                return'"';
            default:
                if ("#" == d.charAt(0)) {
                    var e = Number("0" + d.substr(1));
                    if (!isNaN(e))return String.fromCharCode(e)
                }
                return a
        }
    })
};
g.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
g.string.whitespaceEscape = function (a, c) {
    return g.string.newLineToBr(a.replace(/  /g, " &#160;"), c)
};
g.string.preserveSpaces = function (a) {
    return a.replace(/(^|[\n ]) /g, "$1" + g.string.Unicode.NBSP)
};
g.string.stripQuotes = function (a, c) {
    for (var d = c.length, e = 0; e < d; e++) {
        var f = 1 == d ? c : c.charAt(e);
        if (a.charAt(0) == f && a.charAt(a.length - 1) == f)return a.substring(1, a.length - 1)
    }
    return a
};
g.string.truncate = function (a, c, d) {
    d && (a = g.string.unescapeEntities(a));
    a.length > c && (a = a.substring(0, c - 3) + "...");
    d && (a = g.string.htmlEscape(a));
    return a
};
g.string.truncateMiddle = function (a, c, d, e) {
    d && (a = g.string.unescapeEntities(a));
    if (e && a.length > c) {
        e > c && (e = c);
        var f = a.length - e;
        c -= e;
        a = a.substring(0, c) + "..." + a.substring(f)
    } else a.length > c && (f = Math.floor(c / 2), e = a.length - f, f += c % 2, a = a.substring(0, f) + "..." + a.substring(e));
    d && (a = g.string.htmlEscape(a));
    return a
};
g.string.specialEscapeChars_ = {"\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\"};
g.string.jsEscapeCache_ = {"'": "\\'"};
g.string.quote = function (a) {
    a = String(a);
    if (a.quote)return a.quote();
    for (var c = ['"'], d = 0; d < a.length; d++) {
        var e = a.charAt(d), f = e.charCodeAt(0);
        c[d + 1] = g.string.specialEscapeChars_[e] || (31 < f && 127 > f ? e : g.string.escapeChar(e))
    }
    c.push('"');
    return c.join("")
};
g.string.escapeString = function (a) {
    for (var c = [], d = 0; d < a.length; d++)
        c[d] = g.string.escapeChar(a.charAt(d));
    return c.join("")
};
g.string.escapeChar = function (a) {
    if (a in g.string.jsEscapeCache_)
        return g.string.jsEscapeCache_[a];
    if (a in g.string.specialEscapeChars_)
        return g.string.jsEscapeCache_[a] = g.string.specialEscapeChars_[a];
    var c = a,
        d = a.charCodeAt(0);
    if (31 < d && 127 > d)
        c = a; else {
        if (256 > d) {
            if (c = "\\x", 16 > d || 256 < d)
                c += "0"
        } else
            c = "\\u", 4096 > d && (c += "0");
        c += d.toString(16).toUpperCase()
    }
    return g.string.jsEscapeCache_[a] = c
};
g.string.toMap = function (a) {
    for (var c = {}, d = 0; d < a.length; d++)
        c[a.charAt(d)] = !0;
    return c
};
g.string.contains = function (a, c) {
    return-1 != a.indexOf(c)
};
g.string.caseInsensitiveContains = function (a, c) {
    return g.string.contains(a.toLowerCase(), c.toLowerCase())
};
g.string.countOf = function (a, c) {
    return a && c ? a.split(c).length - 1 : 0
};
g.string.removeAt = function (a, c, d) {
    var e = a;
    0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
    return e
};
g.string.remove = function (a, c) {
    var d = new RegExp(g.string.regExpEscape(c), "");
    return a.replace(d, "")
};
g.string.removeAll = function (a, c) {
    var d = new RegExp(g.string.regExpEscape(c), "g");
    return a.replace(d, "")
};
g.string.regExpEscape = function (a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
g.string.repeat = function (a, c) {
    return Array(c + 1).join(a)
};
g.string.padNumber = function (a, c, d) {
    a = g.isDef(d) ? a.toFixed(d) : String(a);
    d = a.indexOf(".");
    -1 == d && (d = a.length);
    return g.string.repeat("0", Math.max(0, c - d)) + a
};
g.string.makeSafe = function (a) {
    return null == a ? "" : String(a)
};
g.string.buildString = function (a) {
    return Array.prototype.join.call(arguments, "")
};
g.string.getRandomString = function () {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36)
};
g.string.compareVersions = function (a, c) {
    for (var d = 0, e = g.string.trim(String(a)).split("."), f = g.string.trim(String(c)).split("."), h = Math.max(e.length, f.length), l = 0; 0 == d && l < h; l++) {
        var m = e[l] || "", n = f[l] || "", p = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
        do {
            var r = p.exec(m) || ["", "", ""], s = q.exec(n) || ["", "", ""];
            if (0 == r[0].length && 0 == s[0].length)
                break;
            var d = 0 == r[1].length ? 0 : parseInt(r[1], 10), x = 0 == s[1].length ? 0 : parseInt(s[1], 10), d = g.string.compareElements_(d, x) || g.string.compareElements_(0 == r[2].length, 0 == s[2].length) || g.string.compareElements_(r[2], s[2])
        } while (0 == d)
    }
    return d
};
g.string.compareElements_ = function (a, c) {
    return a < c ? -1 : a > c ? 1 : 0
};
g.string.HASHCODE_MAX_ = 4294967296;
g.string.hashCode = function (a) {
    for (var c = 0, d = 0; d < a.length; ++d)
        c = 31 * c + a.charCodeAt(d), c %= g.string.HASHCODE_MAX_;
    return c
};
g.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
g.string.createUniqueString = function () {
    return"goog_" + g.string.uniqueStringCounter_++
};
g.string.toNumber = function (a) {
    var c = Number(a);
    return 0 == c && g.string.isEmpty(a) ? NaN : c
};
g.string.isLowerCamelCase = function (a) {
    return/^[a-z]+([A-Z][a-z]*)*$/.test(a)
};
g.string.isUpperCamelCase = function (a) {
    return/^([A-Z][a-z]*)+$/.test(a)
};
g.string.toCamelCase = function (a) {
    return String(a).replace(/\-([a-z])/g, function (a, d) {
        return d.toUpperCase()
    })
};
g.string.toSelectorCase = function (a) {
    return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
};
g.string.toTitleCase = function (a, c) {
    var d = g.isString(c) ? g.string.regExpEscape(c) : "\\s", d = d ? "|[" + d + "]+" : "", d = new RegExp("(^" + d + ")([a-z])", "g");
    return a.replace(d, function (a, c, d) {
        return c + d.toUpperCase()
    })
};
g.string.parseInt = function (a) {
    isFinite(a) && (a = String(a));
    return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
};
g.string.splitLimit = function (a, c, d) {
    a = a.split(c);
    for (var e = []; 0 < d && a.length;)e.push(a.shift()), d--;
    a.length && e.push(a.join(c));
    return e
};
g.asserts = {};
g.asserts.ENABLE_ASSERTS = g.DEBUG;
g.asserts.AssertionError = function (a, c) {
    c.unshift(a);
    g.debug.Error.call(this, g.string.subs.apply(null, c));
    c.shift()
};
g.inherits(g.asserts.AssertionError, g.debug.Error);
g.asserts.AssertionError.prototype.name = "AssertionError";
g.asserts.DEFAULT_ERROR_HANDLER = function (a) {
    throw a;
};
g.asserts.errorHandler_ = g.asserts.DEFAULT_ERROR_HANDLER;
g.asserts.doAssertFailure_ = function (a, c, d, e) {
    var f = "Assertion failed";
    if (d)var f = f + (": " + d), h = e; else a && (f += ": " + a, h = c);
    a = new g.asserts.AssertionError("" + f, h || []);
    g.asserts.errorHandler_(a)
};
g.asserts.setErrorHandler = function (a) {
    g.asserts.ENABLE_ASSERTS && (g.asserts.errorHandler_ = a)
};
g.asserts.assert = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !a && g.asserts.doAssertFailure_("", null, c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.fail = function (a, c) {
    g.asserts.ENABLE_ASSERTS && g.asserts.errorHandler_(new g.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
};
g.asserts.assertNumber = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isNumber(a) && g.asserts.doAssertFailure_("Expected number but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertString = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isString(a) && g.asserts.doAssertFailure_("Expected string but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertFunction = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isFunction(a) && g.asserts.doAssertFailure_("Expected function but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertObject = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isObject(a) && g.asserts.doAssertFailure_("Expected object but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertArray = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isArray(a) && g.asserts.doAssertFailure_("Expected array but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertBoolean = function (a, c, d) {
    g.asserts.ENABLE_ASSERTS && !g.isBoolean(a) && g.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertElement = function (a, c, d) {
    !g.asserts.ENABLE_ASSERTS || g.isObject(a) && a.nodeType == g.dom.NodeType.ELEMENT || g.asserts.doAssertFailure_("Expected Element but got %s: %s.", [g.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
g.asserts.assertInstanceof = function (a, c, d, e) {
    !g.asserts.ENABLE_ASSERTS || a instanceof c || g.asserts.doAssertFailure_("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
    return a
};
g.asserts.assertObjectPrototypeIsIntact = function () {
    for (var a in Object.prototype)g.asserts.fail(a + " should not be enumerable in Object.prototype.")
};
g.i18n = {};
g.i18n.DateTimeSymbols_en_ISO = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    AVAILABLEFORMATS: {Md: "M/d", MMMMd: "MMMM d", MMMd: "MMM d"},
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_af = {
    ERAS: ["v.C.", "n.C."],
    ERANAMES: ["voor Christus", "na Christus"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januarie Februarie Maart April Mei Junie Julie Augustus September Oktober November Desember".split(" "),
    STANDALONEMONTHS: "Januarie Februarie Maart April Mei Junie Julie Augustus September Oktober November Desember".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Aug Sep Okt Nov Des".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Aug Sep Okt Nov Des".split(" "),
    WEEKDAYS: "Sondag Maandag Dinsdag Woensdag Donderdag Vrydag Saterdag".split(" "),
    STANDALONEWEEKDAYS: "Sondag Maandag Dinsdag Woensdag Donderdag Vrydag Saterdag".split(" "),
    SHORTWEEKDAYS: "So Ma Di Wo Do Vr Sa".split(" "),
    STANDALONESHORTWEEKDAYS: "So Ma Di Wo Do Vr Sa".split(" "),
    NARROWWEEKDAYS: "SMDWDVS".split(""),
    STANDALONENARROWWEEKDAYS: "SMDWDVS".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"],
    AMPMS: ["vm.", "nm."],
    DATEFORMATS: ["EEEE dd MMMM y", "dd MMMM y", "dd MMM y", "y-MM-dd"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_am = {
    ERAS: ["\u12d3/\u12d3", "\u12d3/\u121d"],
    ERANAMES: ["\u12d3\u1218\u1270 \u12d3\u1208\u121d", "\u12d3\u1218\u1270 \u121d\u1215\u1228\u1275"],
    NARROWMONTHS: "\u1303\u134c\u121b\u12a4\u121c\u1301\u1301\u12a6\u1234\u12a6\u1296\u12f2".split(""),
    STANDALONENARROWMONTHS: "\u1303\u134c\u121b\u12a4\u121c\u1301\u1301\u12a6\u1234\u12a6\u1296\u12f2".split(""),
    MONTHS: "\u1303\u1295\u12e9\u12c8\u122a \u134c\u1265\u1229\u12c8\u122a \u121b\u122d\u127d \u12a4\u1355\u122a\u120d \u121c\u12ed \u1301\u1295 \u1301\u120b\u12ed \u12a6\u1308\u1235\u1275 \u1234\u1355\u1274\u121d\u1260\u122d \u12a6\u12ad\u1270\u12cd\u1260\u122d \u1296\u126c\u121d\u1260\u122d \u12f2\u1234\u121d\u1260\u122d".split(" "),
    STANDALONEMONTHS: "\u1303\u1295\u12e9\u12c8\u122a \u134c\u1265\u1229\u12c8\u122a \u121b\u122d\u127d \u12a4\u1355\u122a\u120d \u121c\u12ed \u1301\u1295 \u1301\u120b\u12ed \u12a6\u1308\u1235\u1275 \u1234\u1355\u1274\u121d\u1260\u122d \u12a6\u12ad\u1276\u1260\u122d \u1296\u126c\u121d\u1260\u122d \u12f2\u1234\u121d\u1260\u122d".split(" "),
    SHORTMONTHS: "\u1303\u1295\u12e9 \u134c\u1265\u1229 \u121b\u122d\u127d \u12a4\u1355\u122a \u121c\u12ed \u1301\u1295 \u1301\u120b\u12ed \u12a6\u1308\u1235 \u1234\u1355\u1274 \u12a6\u12ad\u1270 \u1296\u126c\u121d \u12f2\u1234\u121d".split(" "),
    STANDALONESHORTMONTHS: "\u1303\u1295\u12e9 \u134c\u1265\u1229 \u121b\u122d\u127d \u12a4\u1355\u122a \u121c\u12ed \u1301\u1295 \u1301\u120b\u12ed \u12a6\u1308\u1235 \u1234\u1355\u1274 \u12a6\u12ad\u1276 \u1296\u126c\u121d \u12f2\u1234\u121d".split(" "),
    WEEKDAYS: "\u12a5\u1211\u12f5 \u1230\u129e \u121b\u12ad\u1230\u129e \u1228\u1261\u12d5 \u1210\u1219\u1235 \u12d3\u122d\u1265 \u1245\u12f3\u121c".split(" "),
    STANDALONEWEEKDAYS: "\u12a5\u1211\u12f5 \u1230\u129e \u121b\u12ad\u1230\u129e \u1228\u1261\u12d5 \u1210\u1219\u1235 \u12d3\u122d\u1265 \u1245\u12f3\u121c".split(" "),
    SHORTWEEKDAYS: "\u12a5\u1211\u12f5 \u1230\u129e \u121b\u12ad\u1230 \u1228\u1261\u12d5 \u1210\u1219\u1235 \u12d3\u122d\u1265 \u1245\u12f3\u121c".split(" "),
    STANDALONESHORTWEEKDAYS: "\u12a5\u1211\u12f5 \u1230\u129e \u121b\u12ad\u1230 \u1228\u1261\u12d5 \u1210\u1219\u1235 \u12d3\u122d\u1265 \u1245\u12f3\u121c".split(" "),
    NARROWWEEKDAYS: "\u12a5\u1230\u121b\u1228\u1210\u12d3\u1245".split(""),
    STANDALONENARROWWEEKDAYS: "\u12a5\u1230\u121b\u1228\u1210\u12d3\u1245".split(""),
    SHORTQUARTERS: ["\u1229\u12651", "\u1229\u12652", "\u1229\u12653", "\u1229\u12654"],
    QUARTERS: ["1\u129b\u12cd \u1229\u1265", "\u1201\u1208\u1270\u129b\u12cd \u1229\u1265", "3\u129b\u12cd \u1229\u1265", "4\u129b\u12cd \u1229\u1265"],
    AMPMS: ["\u1325\u12cb\u1275", "\u12a8\u1230\u12d3\u1275"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ar = {
    ZERODIGIT: 1632,
    ERAS: ["\u0642.\u0645", "\u0645"],
    ERANAMES: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f", "\u0645\u064a\u0644\u0627\u062f\u064a"],
    NARROWMONTHS: "\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),
    STANDALONENARROWMONTHS: "\u064a\u0641\u0645\u0623\u0648\u0646\u0644\u063a\u0633\u0643\u0628\u062f".split(""),
    MONTHS: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
    STANDALONEMONTHS: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
    SHORTMONTHS: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
    STANDALONESHORTMONTHS: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
    WEEKDAYS: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
    STANDALONEWEEKDAYS: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
    SHORTWEEKDAYS: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0627\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
    NARROWWEEKDAYS: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
    STANDALONENARROWWEEKDAYS: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
    SHORTQUARTERS: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"],
    QUARTERS: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"],
    AMPMS: ["\u0635", "\u0645"],
    DATEFORMATS: ["EEEE\u060c d MMMM\u060c y", "d MMMM\u060c y", "dd\u200f/MM\u200f/y", "d\u200f/M\u200f/y"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 5,
    WEEKENDRANGE: [4, 5],
    FIRSTWEEKCUTOFFDAY: 4
};

g.i18n.DateTimeSymbols_az = {
    ERAS: ["e.\u0259.", "b.e."],
    ERANAMES: ["eram\u0131zdan \u0259vv\u0259l", "bizim eram\u0131z\u0131n"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "yanvar fevral mart aprel may iyun iyul avqust sentyabr oktyabr noyabr dekabr".split(" "),
    STANDALONEMONTHS: "Yanvar Fevral Mart Aprel May \u0130yun \u0130yul Avqust Sentyabr Oktyabr Noyabr Dekabr".split(" "),
    SHORTMONTHS: "yan fev mar apr may iyn iyl avq sen okt noy dek".split(" "),
    STANDALONESHORTMONTHS: "yan fev mar apr may iyn iyl avq sen okt noy dek".split(" "),
    WEEKDAYS: "bazar;bazar ert\u0259si;\u00e7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131;\u00e7\u0259r\u015f\u0259nb\u0259;c\u00fcm\u0259 ax\u015fam\u0131;c\u00fcm\u0259;\u015f\u0259nb\u0259".split(";"),
    STANDALONEWEEKDAYS: "bazar;bazar ert\u0259si;\u00e7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131;\u00e7\u0259r\u015f\u0259nb\u0259;c\u00fcm\u0259 ax\u015fam\u0131;c\u00fcm\u0259;\u015f\u0259nb\u0259".split(";"),
    SHORTWEEKDAYS: "B. B.E. \u00c7.A. \u00c7. C.A. C \u015e.".split(" "),
    STANDALONESHORTWEEKDAYS: "B. B.E. \u00c7.A. \u00c7. C.A. C \u015e.".split(" "),
    NARROWWEEKDAYS: "7123456".split(""),
    STANDALONENARROWWEEKDAYS: "7123456".split(""),
    SHORTQUARTERS: ["1-ci kv.", "2-ci kv.", "3-c\u00fc kv.", "4-c\u00fc kv."],
    QUARTERS: ["1-ci kvartal", "2-ci kvartal", "3-c\u00fc kvartal", "4-c\u00fc kvartal"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["d MMMM y, EEEE", "d MMMM y", "d MMM y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_bg = {
    ERAS: ["\u043f\u0440.\u0425\u0440.", "\u0441\u043b.\u0425\u0440."],
    ERANAMES: ["\u043f\u0440.\u0425\u0440.", "\u0441\u043b.\u0425\u0440."],
    NARROWMONTHS: "\u044f\u0444\u043c\u0430\u043c\u044e\u044e\u0430\u0441\u043e\u043d\u0434".split(""),
    STANDALONENARROWMONTHS: "\u044f\u0444\u043c\u0430\u043c\u044e\u044e\u0430\u0441\u043e\u043d\u0434".split(""),
    MONTHS: "\u044f\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
    STANDALONEMONTHS: "\u044f\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
    SHORTMONTHS: "\u044f\u043d. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),
    STANDALONESHORTMONTHS: "\u044f\u043d. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),
    WEEKDAYS: "\u043d\u0435\u0434\u0435\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u044f\u0434\u0430 \u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a \u043f\u0435\u0442\u044a\u043a \u0441\u044a\u0431\u043e\u0442\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u043d\u0435\u0434\u0435\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u044f\u0434\u0430 \u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a \u043f\u0435\u0442\u044a\u043a \u0441\u044a\u0431\u043e\u0442\u0430".split(" "),
    SHORTWEEKDAYS: "\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
    STANDALONESHORTWEEKDAYS: "\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
    NARROWWEEKDAYS: "\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),
    STANDALONENARROWWEEKDAYS: "\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),
    SHORTQUARTERS: ["1 \u0442\u0440\u0438\u043c.", "2 \u0442\u0440\u0438\u043c.", "3 \u0442\u0440\u0438\u043c.", "4 \u0442\u0440\u0438\u043c."],
    QUARTERS: ["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", "2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", "3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435", "4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435"],
    AMPMS: ["\u043f\u0440.\u043e\u0431.", "\u0441\u043b.\u043e\u0431."],
    DATEFORMATS: ["EEEE, d MMMM y '\u0433'.", "d MMMM y '\u0433'.", "d.MM.y '\u0433'.", "d.MM.yy"],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_bn = {
    ZERODIGIT: 2534,
    ERAS: ["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac", "\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],
    ERANAMES: ["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac", "\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],
    NARROWMONTHS: "\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),
    STANDALONENARROWMONTHS: "\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),
    MONTHS: "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
    STANDALONEMONTHS: "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
    SHORTMONTHS: "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
    STANDALONESHORTMONTHS: "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
    WEEKDAYS: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
    STANDALONEWEEKDAYS: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
    SHORTWEEKDAYS: "\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
    STANDALONESHORTWEEKDAYS: "\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
    NARROWWEEKDAYS: "\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),
    STANDALONENARROWWEEKDAYS: "\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),
    SHORTQUARTERS: ["\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e7", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e8", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09e9", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6 \u09ea"],
    QUARTERS: ["\u09aa\u09cd\u09b0\u09a5\u09ae \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", "\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", "\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6", "\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u099a\u09a4\u09c1\u09b0\u09cd\u09a5\u09be\u0982\u09b6"],
    AMPMS: ["am", "pm"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 4,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_br = {
    ERAS: ["BCE", "CE"],
    ERANAMES: ["BCE", "CE"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "Genver C\u02bchwevrer Meurzh Ebrel Mae Mezheven Gouere Eost Gwengolo Here Du Kerzu".split(" "),
    STANDALONEMONTHS: "Genver C\u02bchwevrer Meurzh Ebrel Mae Mezheven Gouere Eost Gwengolo Here Du Kerzu".split(" "),
    SHORTMONTHS: "Gen C\u02bchwe Meur Ebr Mae Mezh Goue Eost Gwen Here Du Ker".split(" "),
    STANDALONESHORTMONTHS: "Gen C\u02bchwe Meur Ebr Mae Mezh Goue Eost Gwen Here Du Ker".split(" "),
    WEEKDAYS: "Sul Lun Meurzh Merc\u02bcher Yaou Gwener Sadorn".split(" "),
    STANDALONEWEEKDAYS: "Sul Lun Meurzh Merc\u02bcher Yaou Gwener Sadorn".split(" "),
    SHORTWEEKDAYS: "sul lun meu. mer. yaou gwe. sad.".split(" "),
    STANDALONESHORTWEEKDAYS: "sul lun meu. mer. yaou gwe. sad.".split(" "),
    NARROWWEEKDAYS: "su lu mz mc ya gw sa".split(" "),
    STANDALONENARROWWEEKDAYS: "su lu mz mc ya gw sa".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ca = {
    ERAS: ["aC", "dC"],
    ERANAMES: ["abans de Crist", "despr\u00e9s de Crist"],
    NARROWMONTHS: "GN FB M\u00c7 AB MG JN JL AG ST OC NV DS".split(" "),
    STANDALONENARROWMONTHS: "GN FB M\u00c7 AB MG JN JL AG ST OC NV DS".split(" "),
    MONTHS: "gener febrer mar\u00e7 abril maig juny juliol agost setembre octubre novembre desembre".split(" "),
    STANDALONEMONTHS: "gener febrer mar\u00e7 abril maig juny juliol agost setembre octubre novembre desembre".split(" "),
    SHORTMONTHS: "gen. feb. mar\u00e7 abr. maig juny jul. ag. set. oct. nov. des.".split(" "),
    STANDALONESHORTMONTHS: "gen. feb. mar\u00e7 abr. maig juny jul. ag. set. oct. nov. des.".split(" "),
    WEEKDAYS: "diumenge dilluns dimarts dimecres dijous divendres dissabte".split(" "),
    STANDALONEWEEKDAYS: "diumenge dilluns dimarts dimecres dijous divendres dissabte".split(" "),
    SHORTWEEKDAYS: "dg. dl. dt. dc. dj. dv. ds.".split(" "),
    STANDALONESHORTWEEKDAYS: "dg. dl. dt. dc. dj. dv. ds.".split(" "),
    NARROWWEEKDAYS: "dg dl dt dc dj dv ds".split(" "),
    STANDALONENARROWWEEKDAYS: "dg dl dt dc dj dv ds".split(" "),
    SHORTQUARTERS: ["1T", "2T", "3T", "4T"],
    QUARTERS: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"],
    AMPMS: ["a. m.", "p. m."],
    DATEFORMATS: ["EEEE, d MMMM 'de' y", "d MMMM 'de' y", "dd/MM/y", "d/M/yy"],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_chr = {
    ERAS: ["\u13a4\u13d3\u13b7\u13b8", "\u13a4\u13b6\u13d0\u13c5"],
    ERANAMES: ["\u13cf \u13e5\u13cc \u13be\u13d5\u13b2\u13cd\u13ac\u13be", "\u13a0\u13a9\u13c3\u13ae\u13b5\u13d3\u13cd\u13d7\u13f1 \u13a0\u13d5\u13d8\u13f1\u13cd\u13ac \u13f1\u13b0\u13e9 \u13e7\u13d3\u13c2\u13b8\u13a2\u13cd\u13d7"],
    NARROWMONTHS: "\u13a4\u13a7\u13a0\u13a7\u13a0\u13d5\u13ab\u13a6\u13da\u13da\u13c5\u13a5".split(""),
    STANDALONENARROWMONTHS: "\u13a4\u13a7\u13a0\u13a7\u13a0\u13d5\u13ab\u13a6\u13da\u13da\u13c5\u13a5".split(""),
    MONTHS: "\u13a4\u13c3\u13b8\u13d4\u13c5 \u13a7\u13a6\u13b5 \u13a0\u13c5\u13f1 \u13a7\u13ec\u13c2 \u13a0\u13c2\u13cd\u13ac\u13d8 \u13d5\u13ad\u13b7\u13f1 \u13ab\u13f0\u13c9\u13c2 \u13a6\u13b6\u13c2 \u13da\u13b5\u13cd\u13d7 \u13da\u13c2\u13c5\u13d7 \u13c5\u13d3\u13d5\u13c6 \u13a5\u13cd\u13a9\u13f1".split(" "),
    STANDALONEMONTHS: "\u13a4\u13c3\u13b8\u13d4\u13c5 \u13a7\u13a6\u13b5 \u13a0\u13c5\u13f1 \u13a7\u13ec\u13c2 \u13a0\u13c2\u13cd\u13ac\u13d8 \u13d5\u13ad\u13b7\u13f1 \u13ab\u13f0\u13c9\u13c2 \u13a6\u13b6\u13c2 \u13da\u13b5\u13cd\u13d7 \u13da\u13c2\u13c5\u13d7 \u13c5\u13d3\u13d5\u13c6 \u13a5\u13cd\u13a9\u13f1".split(" "),
    SHORTMONTHS: "\u13a4\u13c3 \u13a7\u13a6 \u13a0\u13c5 \u13a7\u13ec \u13a0\u13c2 \u13d5\u13ad \u13ab\u13f0 \u13a6\u13b6 \u13da\u13b5 \u13da\u13c2 \u13c5\u13d3 \u13a5\u13cd".split(" "),
    STANDALONESHORTMONTHS: "\u13a4\u13c3 \u13a7\u13a6 \u13a0\u13c5 \u13a7\u13ec \u13a0\u13c2 \u13d5\u13ad \u13ab\u13f0 \u13a6\u13b6 \u13da\u13b5 \u13da\u13c2 \u13c5\u13d3 \u13a5\u13cd".split(" "),
    WEEKDAYS: "\u13a4\u13be\u13d9\u13d3\u13c6\u13cd\u13ac \u13a4\u13be\u13d9\u13d3\u13c9\u13c5\u13af \u13d4\u13b5\u13c1\u13a2\u13a6 \u13e6\u13a2\u13c1\u13a2\u13a6 \u13c5\u13a9\u13c1\u13a2\u13a6 \u13e7\u13be\u13a9\u13b6\u13cd\u13d7 \u13a4\u13be\u13d9\u13d3\u13c8\u13d5\u13be".split(" "),
    STANDALONEWEEKDAYS: "\u13a4\u13be\u13d9\u13d3\u13c6\u13cd\u13ac \u13a4\u13be\u13d9\u13d3\u13c9\u13c5\u13af \u13d4\u13b5\u13c1\u13a2\u13a6 \u13e6\u13a2\u13c1\u13a2\u13a6 \u13c5\u13a9\u13c1\u13a2\u13a6 \u13e7\u13be\u13a9\u13b6\u13cd\u13d7 \u13a4\u13be\u13d9\u13d3\u13c8\u13d5\u13be".split(" "),
    SHORTWEEKDAYS: "\u13c6\u13cd\u13ac \u13c9\u13c5\u13af \u13d4\u13b5\u13c1 \u13e6\u13a2\u13c1 \u13c5\u13a9\u13c1 \u13e7\u13be\u13a9 \u13c8\u13d5\u13be".split(" "),
    STANDALONESHORTWEEKDAYS: "\u13c6\u13cd\u13ac \u13c9\u13c5\u13af \u13d4\u13b5\u13c1 \u13e6\u13a2\u13c1 \u13c5\u13a9\u13c1 \u13e7\u13be\u13a9 \u13c8\u13d5\u13be".split(" "),
    NARROWWEEKDAYS: "\u13c6\u13c9\u13d4\u13e6\u13c5\u13e7\u13a4".split(""),
    STANDALONENARROWWEEKDAYS: "\u13c6\u13c9\u13d4\u13e6\u13c5\u13e7\u13a4".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    AMPMS: ["\u13cc\u13be\u13b4", "\u13d2\u13af\u13f1\u13a2\u13d7\u13e2"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_cs = {
    ERAS: ["p\u0159. n. l.", "n. l."],
    ERANAMES: ["p\u0159. n. l.", "n. l."],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "l\u00fabdk\u010d\u010dsz\u0159lp".split(""),
    MONTHS: "ledna \u00fanora b\u0159ezna dubna kv\u011btna \u010dervna \u010dervence srpna z\u00e1\u0159\u00ed \u0159\u00edjna listopadu prosince".split(" "),
    STANDALONEMONTHS: "leden \u00fanor b\u0159ezen duben kv\u011bten \u010derven \u010dervenec srpen z\u00e1\u0159\u00ed \u0159\u00edjen listopad prosinec".split(" "),
    SHORTMONTHS: "led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),
    STANDALONESHORTMONTHS: "led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),
    WEEKDAYS: "ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),
    STANDALONEWEEKDAYS: "ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),
    SHORTWEEKDAYS: "ne po \u00fat st \u010dt p\u00e1 so".split(" "),
    STANDALONESHORTWEEKDAYS: "ne po \u00fat st \u010dt p\u00e1 so".split(" "),
    NARROWWEEKDAYS: "NP\u00daS\u010cPS".split(""),
    STANDALONENARROWWEEKDAYS: "NP\u00daS\u010cPS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. \u010dtvrtlet\u00ed", "2. \u010dtvrtlet\u00ed", "3. \u010dtvrtlet\u00ed", "4. \u010dtvrtlet\u00ed"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "dd.MM.yy"],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_cy = {
    ERAS: ["CC", "OC"],
    ERANAMES: ["Cyn Crist", "Oed Crist"],
    NARROWMONTHS: "I Ch M E M M G A M H T Rh".split(" "),
    STANDALONENARROWMONTHS: "I Ch M E M M G A M H T Rh".split(" "),
    MONTHS: "Ionawr Chwefror Mawrth Ebrill Mai Mehefin Gorffennaf Awst Medi Hydref Tachwedd Rhagfyr".split(" "),
    STANDALONEMONTHS: "Ionawr Chwefror Mawrth Ebrill Mai Mehefin Gorffennaf Awst Medi Hydref Tachwedd Rhagfyr".split(" "),
    SHORTMONTHS: "Ion Chwef Mawrth Ebrill Mai Meh Gorff Awst Medi Hyd Tach Rhag".split(" "),
    STANDALONESHORTMONTHS: "Ion Chw Maw Ebr Mai Meh Gor Awst Medi Hyd Tach Rhag".split(" "),
    WEEKDAYS: "Dydd Sul;Dydd Llun;Dydd Mawrth;Dydd Mercher;Dydd Iau;Dydd Gwener;Dydd Sadwrn".split(";"),
    STANDALONEWEEKDAYS: "Dydd Sul;Dydd Llun;Dydd Mawrth;Dydd Mercher;Dydd Iau;Dydd Gwener;Dydd Sadwrn".split(";"),
    SHORTWEEKDAYS: "Sul Llun Maw Mer Iau Gwen Sad".split(" "),
    STANDALONESHORTWEEKDAYS: "Sul Llun Maw Mer Iau Gwe Sad".split(" "),
    NARROWWEEKDAYS: "S Ll M M I G S".split(" "),
    STANDALONENARROWWEEKDAYS: "S Ll M M I G S".split(" "),
    SHORTQUARTERS: ["Ch1", "Ch2", "Ch3", "Ch4"],
    QUARTERS: ["Chwarter 1af", "2il chwarter", "3ydd chwarter", "4ydd chwarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} 'am' {0}", "{1} 'am' {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_da = {
    ERAS: ["f.Kr.", "e.Kr."],
    ERANAMES: ["f.Kr.", "e.Kr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "januar februar marts april maj juni juli august september oktober november december".split(" "),
    STANDALONEMONTHS: "januar februar marts april maj juni juli august september oktober november december".split(" "),
    SHORTMONTHS: "jan. feb. mar. apr. maj jun. jul. aug. sep. okt. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),
    WEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    STANDALONEWEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    SHORTWEEKDAYS: "s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),
    STANDALONESHORTWEEKDAYS: "s\u00f8n man tir ons tor fre l\u00f8r".split(" "),
    NARROWWEEKDAYS: "SMTOTFL".split(""),
    STANDALONENARROWWEEKDAYS: "SMTOTFL".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE 'den' d. MMMM y", "d. MMM y", "dd/MM/y", "dd/MM/yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} 'kl.' {0}", "{1} 'kl.' {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_de = {
    ERAS: ["v. Chr.", "n. Chr."],
    ERANAMES: ["v. Chr.", "n. Chr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
    STANDALONEMONTHS: "Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
    SHORTMONTHS: "Jan. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
    WEEKDAYS: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
    STANDALONEWEEKDAYS: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
    SHORTWEEKDAYS: "So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),
    STANDALONESHORTWEEKDAYS: "So Mo Di Mi Do Fr Sa".split(" "),
    NARROWWEEKDAYS: "SMDMDFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMDMDFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
    AMPMS: ["vorm.", "nachm."],
    DATEFORMATS: ["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_de_AT = {
    ERAS: ["v. Chr.", "n. Chr."],
    ERANAMES: ["v. Chr.", "n. Chr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "J\u00e4nner Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
    STANDALONEMONTHS: "J\u00e4nner Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
    SHORTMONTHS: "J\u00e4n. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),
    STANDALONESHORTMONTHS: "J\u00e4n Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
    WEEKDAYS: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
    STANDALONEWEEKDAYS: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
    SHORTWEEKDAYS: "So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),
    STANDALONESHORTWEEKDAYS: "So Mo Di Mi Do Fr Sa".split(" "),
    NARROWWEEKDAYS: "SMDMDFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMDMDFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
    AMPMS: ["vorm.", "nachm."],
    DATEFORMATS: ["EEEE, dd. MMMM y", "dd. MMMM y", "dd.MM.y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_de_CH = g.i18n.DateTimeSymbols_de;
g.i18n.DateTimeSymbols_el = {
    ERAS: ["\u03c0.\u03a7.", "\u03bc.\u03a7."],
    ERANAMES: ["\u03c0.\u03a7.", "\u03bc.\u03a7."],
    NARROWMONTHS: "\u0399\u03a6\u039c\u0391\u039c\u0399\u0399\u0391\u03a3\u039f\u039d\u0394".split(""),
    STANDALONENARROWMONTHS: "\u0399\u03a6\u039c\u0391\u039c\u0399\u0399\u0391\u03a3\u039f\u039d\u0394".split(""),
    MONTHS: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5 \u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5 \u039c\u03b1\u0390\u03bf\u03c5 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5 \u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(" "),
    STANDALONEMONTHS: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2 \u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2 \u039c\u03ac\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2 \u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2 \u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2 \u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(" "),
    SHORTMONTHS: "\u0399\u03b1\u03bd \u03a6\u03b5\u03b2 \u039c\u03b1\u03c1 \u0391\u03c0\u03c1 \u039c\u03b1\u0390 \u0399\u03bf\u03c5\u03bd \u0399\u03bf\u03c5\u03bb \u0391\u03c5\u03b3 \u03a3\u03b5\u03c0 \u039f\u03ba\u03c4 \u039d\u03bf\u03b5 \u0394\u03b5\u03ba".split(" "),
    STANDALONESHORTMONTHS: "\u0399\u03b1\u03bd \u03a6\u03b5\u03b2 \u039c\u03ac\u03c1 \u0391\u03c0\u03c1 \u039c\u03ac\u03b9 \u0399\u03bf\u03cd\u03bd \u0399\u03bf\u03cd\u03bb \u0391\u03cd\u03b3 \u03a3\u03b5\u03c0 \u039f\u03ba\u03c4 \u039d\u03bf\u03ad \u0394\u03b5\u03ba".split(" "),
    WEEKDAYS: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1 \u03a4\u03c1\u03af\u03c4\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(" "),
    STANDALONEWEEKDAYS: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1 \u03a4\u03c1\u03af\u03c4\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(" "),
    SHORTWEEKDAYS: "\u039a\u03c5\u03c1 \u0394\u03b5\u03c5 \u03a4\u03c1\u03af \u03a4\u03b5\u03c4 \u03a0\u03ad\u03bc \u03a0\u03b1\u03c1 \u03a3\u03ac\u03b2".split(" "),
    STANDALONESHORTWEEKDAYS: "\u039a\u03c5\u03c1 \u0394\u03b5\u03c5 \u03a4\u03c1\u03af \u03a4\u03b5\u03c4 \u03a0\u03ad\u03bc \u03a0\u03b1\u03c1 \u03a3\u03ac\u03b2".split(" "),
    NARROWWEEKDAYS: "\u039a\u0394\u03a4\u03a4\u03a0\u03a0\u03a3".split(""),
    STANDALONENARROWWEEKDAYS: "\u039a\u0394\u03a4\u03a4\u03a0\u03a0\u03a3".split(""),
    SHORTQUARTERS: ["\u03a41", "\u03a42", "\u03a43", "\u03a44"],
    QUARTERS: ["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf", "4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"],
    AMPMS: ["\u03c0.\u03bc.", "\u03bc.\u03bc."],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} - {0}", "{1} - {0}", "{1} - {0}", "{1} - {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_en = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_en_AU = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/MM/y"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_en_GB = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["am", "pm"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_en_IE = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["a.m.", "p.m."],
    DATEFORMATS: ["EEEE d MMMM y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 2
};

g.i18n.DateTimeSymbols_en_IN = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "dd-MMM-y", "dd/MM/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_en_SG = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_en_US = g.i18n.DateTimeSymbols_en;

g.i18n.DateTimeSymbols_en_ZA = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["Before Christ", "Anno Domini"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "January February March April May June July August September October November December".split(" "),
    STANDALONEMONTHS: "January February March April May June July August September October November December".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    WEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    STANDALONEWEEKDAYS: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE dd MMMM y", "dd MMMM y", "dd MMM y", "y/MM/dd"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_es = {
    ERAS: ["a. C.", "d. C."],
    ERANAMES: ["antes de Cristo", "anno D\u00f3mini"],
    NARROWMONTHS: "EFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "EFMAMJJASOND".split(""),
    MONTHS: "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),
    STANDALONEMONTHS: "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(" "),
    SHORTMONTHS: "ene. feb. mar. abr. may. jun. jul. ago. sept. oct. nov. dic.".split(" "),
    STANDALONESHORTMONTHS: "Ene. Feb. Mar. Abr. May. Jun. Jul. Ago. Sept. Oct. Nov. Dic.".split(" "),
    WEEKDAYS: "domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),
    STANDALONEWEEKDAYS: "Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado".split(" "),
    SHORTWEEKDAYS: "dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),
    STANDALONESHORTWEEKDAYS: "Dom. Lun. Mar. Mi\u00e9. Jue. Vie. S\u00e1b.".split(" "),
    NARROWWEEKDAYS: "DLMXJVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMXJVS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1.er trimestre", "2.\u00ba trimestre", "3.er trimestre", "4.\u00ba trimestre"],
    AMPMS: ["a. m.", "p. m."],
    DATEFORMATS: ["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d/M/y", "d/M/yy"],
    TIMEFORMATS: ["H:mm:ss (zzzz)", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_es_419 = g.i18n.DateTimeSymbols_es;
g.i18n.DateTimeSymbols_es_ES = g.i18n.DateTimeSymbols_es;

g.i18n.DateTimeSymbols_et = {
    ERAS: ["e.m.a.", "m.a.j."],
    ERANAMES: ["enne meie aega", "meie aja j\u00e4rgi"],
    NARROWMONTHS: "JVMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JVMAMJJASOND".split(""),
    MONTHS: "jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),
    STANDALONEMONTHS: "jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),
    SHORTMONTHS: "jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),
    STANDALONESHORTMONTHS: "jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),
    WEEKDAYS: "p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),
    STANDALONEWEEKDAYS: "p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),
    SHORTWEEKDAYS: "PETKNRL".split(""),
    STANDALONESHORTWEEKDAYS: "PETKNRL".split(""),
    NARROWWEEKDAYS: "PETKNRL".split(""),
    STANDALONENARROWWEEKDAYS: "PETKNRL".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"],
    TIMEFORMATS: ["H:mm.ss zzzz", "H:mm.ss z", "H:mm.ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_eu = {
    ERAS: ["K.a.", "K.o."],
    ERANAMES: ["K.a.", "K.o."],
    NARROWMONTHS: "UOMAMEUAIUAA".split(""),
    STANDALONENARROWMONTHS: "UOMAMEUAIUAA".split(""),
    MONTHS: "urtarrilak otsailak martxoak apirilak maiatzak ekainak uztailak abuztuak irailak urriak azaroak abenduak".split(" "),
    STANDALONEMONTHS: "urtarrila otsaila martxoa apirila maiatza ekaina uztaila abuztua iraila urria azaroa abendua".split(" "),
    SHORTMONTHS: "urt. ots. mar. api. mai. eka. uzt. abu. ira. urr. aza. abe.".split(" "),
    STANDALONESHORTMONTHS: "urt. ots. mar. api. mai. eka. uzt. abu. ira. urr. aza. abe.".split(" "),
    WEEKDAYS: "igandea astelehena asteartea asteazkena osteguna ostirala larunbata".split(" "),
    STANDALONEWEEKDAYS: "igandea astelehena asteartea asteazkena osteguna ostirala larunbata".split(" "),
    SHORTWEEKDAYS: "ig. al. ar. az. og. or. lr.".split(" "),
    STANDALONESHORTWEEKDAYS: "ig. al. ar. az. og. or. lr.".split(" "),
    NARROWWEEKDAYS: "IAAAOOL".split(""),
    STANDALONENARROWWEEKDAYS: "IAAAOOL".split(""),
    SHORTQUARTERS: ["1Hh", "2Hh", "3Hh", "4Hh"],
    QUARTERS: ["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["y('e')'ko' MMMM d, EEEE", "y('e')'ko' MMMM d", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_fa = {
    ZERODIGIT: 1776,
    ERAS: ["\u0642.\u0645.", "\u0645."],
    ERANAMES: ["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f", "\u0645\u06cc\u0644\u0627\u062f\u06cc"],
    NARROWMONTHS: "\u0698\u0641\u0645\u0622\u0645\u0698\u0698\u0627\u0633\u0627\u0646\u062f".split(""),
    STANDALONENARROWMONTHS: "\u0698\u0641\u0645\u0622\u0645\u0698\u0698\u0627\u0633\u0627\u0646\u062f".split(""),
    MONTHS: "\u0698\u0627\u0646\u0648\u06cc\u0647\u0654 \u0641\u0648\u0631\u06cc\u0647\u0654 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647\u0654 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647\u0654 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
    STANDALONEMONTHS: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
    SHORTMONTHS: "\u0698\u0627\u0646\u0648\u06cc\u0647\u0654 \u0641\u0648\u0631\u06cc\u0647\u0654 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647\u0654 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647\u0654 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
    STANDALONESHORTMONTHS: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
    WEEKDAYS: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
    STANDALONEWEEKDAYS: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
    SHORTWEEKDAYS: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
    STANDALONESHORTWEEKDAYS: "\u06cc\u06a9\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
    NARROWWEEKDAYS: "\u06cc\u062f\u0633\u0686\u067e\u062c\u0634".split(""),
    STANDALONENARROWWEEKDAYS: "\u06cc\u062f\u0633\u0686\u067e\u062c\u0634".split(""),
    SHORTQUARTERS: ["\u0633\u200c\u0645\u06f1", "\u0633\u200c\u0645\u06f2", "\u0633\u200c\u0645\u06f3", "\u0633\u200c\u0645\u06f4"],
    QUARTERS: ["\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0627\u0648\u0644", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u062f\u0648\u0645", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0633\u0648\u0645", "\u0633\u0647\u200c\u0645\u0627\u0647\u0647\u0654 \u0686\u0647\u0627\u0631\u0645"],
    AMPMS: ["\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631", "\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "y/M/d"],
    TIMEFORMATS: ["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}\u060c \u0633\u0627\u0639\u062a {0}", "{1}\u060c \u0633\u0627\u0639\u062a {0}", "{1}\u060c\u200f {0}", "{1}\u060c\u200f {0}"],
    FIRSTDAYOFWEEK: 5,
    WEEKENDRANGE: [3, 4],
    FIRSTWEEKCUTOFFDAY: 4
};

g.i18n.DateTimeSymbols_fi = {
    ERAS: ["eKr.", "jKr."],
    ERANAMES: ["ennen Kristuksen syntym\u00e4\u00e4", "j\u00e4lkeen Kristuksen syntym\u00e4n"],
    NARROWMONTHS: "THMHTKHESLMJ".split(""),
    STANDALONENARROWMONTHS: "THMHTKHESLMJ".split(""),
    MONTHS: "tammikuuta helmikuuta maaliskuuta huhtikuuta toukokuuta kes\u00e4kuuta hein\u00e4kuuta elokuuta syyskuuta lokakuuta marraskuuta joulukuuta".split(" "),
    STANDALONEMONTHS: "tammikuu helmikuu maaliskuu huhtikuu toukokuu kes\u00e4kuu hein\u00e4kuu elokuu syyskuu lokakuu marraskuu joulukuu".split(" "),
    SHORTMONTHS: "tammikuuta helmikuuta maaliskuuta huhtikuuta toukokuuta kes\u00e4kuuta hein\u00e4kuuta elokuuta syyskuuta lokakuuta marraskuuta joulukuuta".split(" "),
    STANDALONESHORTMONTHS: "tammi helmi maalis huhti touko kes\u00e4 hein\u00e4 elo syys loka marras joulu".split(" "),
    WEEKDAYS: "sunnuntaina maanantaina tiistaina keskiviikkona torstaina perjantaina lauantaina".split(" "),
    STANDALONEWEEKDAYS: "sunnuntai maanantai tiistai keskiviikko torstai perjantai lauantai".split(" "),
    SHORTWEEKDAYS: "su ma ti ke to pe la".split(" "),
    STANDALONESHORTWEEKDAYS: "su ma ti ke to pe la".split(" "),
    NARROWWEEKDAYS: "SMTKTPL".split(""),
    STANDALONENARROWWEEKDAYS: "SMTKTPL".split(""),
    SHORTQUARTERS: ["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."],
    QUARTERS: ["1. nelj\u00e4nnes", "2. nelj\u00e4nnes", "3. nelj\u00e4nnes", "4. nelj\u00e4nnes"],
    AMPMS: ["ap.", "ip."],
    DATEFORMATS: ["cccc d. MMMM y", "d. MMMM y", "d.M.y", "d.M.y"],
    TIMEFORMATS: ["H.mm.ss zzzz", "H.mm.ss z", "H.mm.ss", "H.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_fil = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["BC", "AD"],
    NARROWMONTHS: "EPMAMHHASOND".split(""),
    STANDALONENARROWMONTHS: "EPMAMHHASOND".split(""),
    MONTHS: "Enero Pebrero Marso Abril Mayo Hunyo Hulyo Agosto Setyembre Oktubre Nobyembre Disyembre".split(" "),
    STANDALONEMONTHS: "Enero Pebrero Marso Abril Mayo Hunyo Hulyo Agosto Setyembre Oktubre Nobyembre Disyembre".split(" "),
    SHORTMONTHS: "Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis".split(" "),
    STANDALONESHORTMONTHS: "Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis".split(" "),
    WEEKDAYS: "Linggo Lunes Martes Miyerkules Huwebes Biyernes Sabado".split(" "),
    STANDALONEWEEKDAYS: "Linggo Lunes Martes Miyerkules Huwebes Biyernes Sabado".split(" "),
    SHORTWEEKDAYS: "Lin Lun Mar Miy Huw Biy Sab".split(" "),
    STANDALONESHORTWEEKDAYS: "Lin Lun Mar Miy Huw Biy Sab".split(" "),
    NARROWWEEKDAYS: "LLMMHBS".split(""),
    STANDALONENARROWWEEKDAYS: "LLMMHBS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'ng' {0}", "{1} 'ng' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_fr = {
    ERAS: ["av. J.-C.", "ap. J.-C."],
    ERANAMES: ["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
    STANDALONEMONTHS: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
    SHORTMONTHS: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
    STANDALONESHORTMONTHS: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
    WEEKDAYS: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
    STANDALONEWEEKDAYS: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
    SHORTWEEKDAYS: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
    STANDALONESHORTWEEKDAYS: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
    NARROWWEEKDAYS: "DLMMJVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMMJVS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_fr_CA = {
    ERAS: ["av. J.-C.", "ap. J.-C."],
    ERANAMES: ["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
    STANDALONEMONTHS: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
    SHORTMONTHS: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
    STANDALONESHORTMONTHS: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
    WEEKDAYS: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
    STANDALONEWEEKDAYS: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
    SHORTWEEKDAYS: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
    STANDALONESHORTWEEKDAYS: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
    NARROWWEEKDAYS: "DLMMJVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMMJVS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "y-MM-dd", "yy-MM-dd"],
    TIMEFORMATS: ["HH 'h' mm 'min' ss 's' zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_gl = {
    ERAS: ["a.C.", "d.C."],
    ERANAMES: ["antes de Cristo", "despois de Cristo"],
    NARROWMONTHS: "XFMAMXXASOND".split(""),
    STANDALONENARROWMONTHS: "XFMAMXXASOND".split(""),
    MONTHS: "xaneiro febreiro marzo abril maio xu\u00f1o xullo agosto setembro outubro novembro decembro".split(" "),
    STANDALONEMONTHS: "Xaneiro Febreiro Marzo Abril Maio Xu\u00f1o Xullo Agosto Setembro Outubro Novembro Decembro".split(" "),
    SHORTMONTHS: "xan feb mar abr mai xu\u00f1 xul ago set out nov dec".split(" "),
    STANDALONESHORTMONTHS: "Xan Feb Mar Abr Mai Xu\u00f1 Xul Ago Set Out Nov Dec".split(" "),
    WEEKDAYS: "domingo luns martes m\u00e9rcores xoves venres s\u00e1bado".split(" "),
    STANDALONEWEEKDAYS: "Domingo Luns Martes M\u00e9rcores Xoves Venres S\u00e1bado".split(" "),
    SHORTWEEKDAYS: "dom lun mar m\u00e9r xov ven s\u00e1b".split(" "),
    STANDALONESHORTWEEKDAYS: "Dom Lun Mar M\u00e9r Xov Ven S\u00e1b".split(" "),
    NARROWWEEKDAYS: "DLMMXVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMMXVS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1o trimestre", "2o trimestre", "3o trimestre", "4o trimestre"],
    AMPMS: ["a.m.", "p.m."],
    DATEFORMATS: ["EEEE dd MMMM y", "dd MMMM y", "d MMM, y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_gsw = {
    ERAS: ["v. Chr.", "n. Chr."],
    ERANAMES: ["v. Chr.", "n. Chr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januar Februar M\u00e4rz April Mai Juni Juli Auguscht Sept\u00e4mber Oktoober Nov\u00e4mber Dez\u00e4mber".split(" "),
    STANDALONEMONTHS: "Januar Februar M\u00e4rz April Mai Juni Juli Auguscht Sept\u00e4mber Oktoober Nov\u00e4mber Dez\u00e4mber".split(" "),
    SHORTMONTHS: "Jan Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb M\u00e4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
    WEEKDAYS: "Sunntig M\u00e4\u00e4ntig Ziischtig Mittwuch Dunschtig Friitig Samschtig".split(" "),
    STANDALONEWEEKDAYS: "Sunntig M\u00e4\u00e4ntig Ziischtig Mittwuch Dunschtig Friitig Samschtig".split(" "),
    SHORTWEEKDAYS: "Su. M\u00e4. Zi. Mi. Du. Fr. Sa.".split(" "),
    STANDALONESHORTWEEKDAYS: "Su. M\u00e4. Zi. Mi. Du. Fr. Sa.".split(" "),
    NARROWWEEKDAYS: "SMDMDFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMDMDFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
    AMPMS: ["vorm.", "nam."],
    DATEFORMATS: ["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_gu = {
    ERAS: ["\u0a88\u0ab8\u0ac1\u0aa8\u0abe \u0a9c\u0aa8\u0acd\u0aae \u0aaa\u0ab9\u0ac7\u0ab2\u0abe", "\u0a87\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"],
    ERANAMES: ["\u0a88\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8 \u0aaa\u0ac2\u0ab0\u0acd\u0ab5\u0ac7", "\u0a87\u0ab8\u0ab5\u0ac0\u0ab8\u0aa8"],
    NARROWMONTHS: "\u0a9c\u0abe \u0aab\u0ac7 \u0aae\u0abe \u0a8f \u0aae\u0ac7 \u0a9c\u0ac2 \u0a9c\u0ac1 \u0a91 \u0ab8 \u0a91 \u0aa8 \u0aa1\u0abf".split(" "),
    STANDALONENARROWMONTHS: "\u0a9c\u0abe \u0aab\u0ac7 \u0aae\u0abe \u0a8f \u0aae\u0ac7 \u0a9c\u0ac2 \u0a9c\u0ac1 \u0a91 \u0ab8 \u0a91 \u0aa8 \u0aa1\u0abf".split(" "),
    MONTHS: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0 \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0 \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2 \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe\u0a88 \u0a91\u0a97\u0ab8\u0acd\u0a9f \u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0a91\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0 \u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(" "),
    STANDALONEMONTHS: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0 \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0 \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2 \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe\u0a88 \u0a91\u0a97\u0ab8\u0acd\u0a9f \u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0a91\u0a95\u0acd\u0a9f\u0acb\u0aac\u0ab0 \u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(" "),
    SHORTMONTHS: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1 \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1 \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2 \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe\u0a88 \u0a91\u0a97\u0ab8\u0acd\u0a9f \u0ab8\u0aaa\u0acd\u0a9f\u0ac7 \u0a91\u0a95\u0acd\u0a9f\u0acb \u0aa8\u0ab5\u0ac7 \u0aa1\u0abf\u0ab8\u0ac7".split(" "),
    STANDALONESHORTMONTHS: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1 \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1 \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2 \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe\u0a88 \u0a91\u0a97 \u0ab8\u0aaa\u0acd\u0a9f\u0ac7 \u0a91\u0a95\u0acd\u0a9f\u0acb \u0aa8\u0ab5\u0ac7 \u0aa1\u0abf\u0ab8\u0ac7".split(" "),
    WEEKDAYS: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0 \u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0 \u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0 \u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0 \u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0 \u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0 \u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(" "),
    STANDALONEWEEKDAYS: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0 \u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0 \u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0 \u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0 \u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0 \u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0 \u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(" "),
    SHORTWEEKDAYS: "\u0ab0\u0ab5\u0abf \u0ab8\u0acb\u0aae \u0aae\u0a82\u0a97\u0ab3 \u0aac\u0ac1\u0aa7 \u0a97\u0ac1\u0ab0\u0ac1 \u0ab6\u0ac1\u0a95\u0acd\u0ab0 \u0ab6\u0aa8\u0abf".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0ab0\u0ab5\u0abf \u0ab8\u0acb\u0aae \u0aae\u0a82\u0a97\u0ab3 \u0aac\u0ac1\u0aa7 \u0a97\u0ac1\u0ab0\u0ac1 \u0ab6\u0ac1\u0a95\u0acd\u0ab0 \u0ab6\u0aa8\u0abf".split(" "),
    NARROWWEEKDAYS: "\u0ab0 \u0ab8\u0acb \u0aae\u0a82 \u0aac\u0ac1 \u0a97\u0ac1 \u0ab6\u0ac1 \u0ab6".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0ab0 \u0ab8\u0acb \u0aae\u0a82 \u0aac\u0ac1 \u0a97\u0ac1 \u0ab6\u0ac1 \u0ab6".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["\u0aaa\u0ab9\u0ac7\u0ab2\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8", "\u0aac\u0ac0\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8", "\u0aa4\u0acd\u0ab0\u0ac0\u0a9c\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8", "\u0a9a\u0acb\u0aa5\u0acb \u0aa4\u0acd\u0ab0\u0abf\u0aae\u0abe\u0ab8"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d-MM-yy"],
    TIMEFORMATS: ["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_haw = {
    ERAS: ["BCE", "CE"],
    ERANAMES: ["BCE", "CE"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "Ianuali Pepeluali Malaki \u02bbApelila Mei Iune Iulai \u02bbAukake Kepakemapa \u02bbOkakopa Nowemapa Kekemapa".split(" "),
    STANDALONEMONTHS: "Ianuali Pepeluali Malaki \u02bbApelila Mei Iune Iulai \u02bbAukake Kepakemapa \u02bbOkakopa Nowemapa Kekemapa".split(" "),
    SHORTMONTHS: "Ian. Pep. Mal. \u02bbAp. Mei Iun. Iul. \u02bbAu. Kep. \u02bbOk. Now. Kek.".split(" "),
    STANDALONESHORTMONTHS: "Ian. Pep. Mal. \u02bbAp. Mei Iun. Iul. \u02bbAu. Kep. \u02bbOk. Now. Kek.".split(" "),
    WEEKDAYS: "L\u0101pule Po\u02bbakahi Po\u02bbalua Po\u02bbakolu Po\u02bbah\u0101 Po\u02bbalima Po\u02bbaono".split(" "),
    STANDALONEWEEKDAYS: "L\u0101pule Po\u02bbakahi Po\u02bbalua Po\u02bbakolu Po\u02bbah\u0101 Po\u02bbalima Po\u02bbaono".split(" "),
    SHORTWEEKDAYS: "LP P1 P2 P3 P4 P5 P6".split(" "),
    STANDALONESHORTWEEKDAYS: "LP P1 P2 P3 P4 P5 P6".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_he = {
    ERAS: ["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1", "\u05dc\u05e1\u05d4\u05f4\u05e0"],
    ERANAMES: ["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4", "\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u05d9\u05e0\u05d5\u05d0\u05e8 \u05e4\u05d1\u05e8\u05d5\u05d0\u05e8 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05d9\u05dc \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05d5\u05e1\u05d8 \u05e1\u05e4\u05d8\u05de\u05d1\u05e8 \u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8 \u05e0\u05d5\u05d1\u05de\u05d1\u05e8 \u05d3\u05e6\u05de\u05d1\u05e8".split(" "),
    STANDALONEMONTHS: "\u05d9\u05e0\u05d5\u05d0\u05e8 \u05e4\u05d1\u05e8\u05d5\u05d0\u05e8 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05d9\u05dc \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05d5\u05e1\u05d8 \u05e1\u05e4\u05d8\u05de\u05d1\u05e8 \u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8 \u05e0\u05d5\u05d1\u05de\u05d1\u05e8 \u05d3\u05e6\u05de\u05d1\u05e8".split(" "),
    SHORTMONTHS: "\u05d9\u05e0\u05d5\u05f3 \u05e4\u05d1\u05e8\u05f3 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05f3 \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05f3 \u05e1\u05e4\u05d8\u05f3 \u05d0\u05d5\u05e7\u05f3 \u05e0\u05d5\u05d1\u05f3 \u05d3\u05e6\u05de\u05f3".split(" "),
    STANDALONESHORTMONTHS: "\u05d9\u05e0\u05d5\u05f3 \u05e4\u05d1\u05e8\u05f3 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05f3 \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05f3 \u05e1\u05e4\u05d8\u05f3 \u05d0\u05d5\u05e7\u05f3 \u05e0\u05d5\u05d1\u05f3 \u05d3\u05e6\u05de\u05f3".split(" "),
    WEEKDAYS: "\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df;\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9;\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9;\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(";"),
    STANDALONEWEEKDAYS: "\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df;\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9;\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9;\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(";"),
    SHORTWEEKDAYS: "\u05d9\u05d5\u05dd \u05d0\u05f3;\u05d9\u05d5\u05dd \u05d1\u05f3;\u05d9\u05d5\u05dd \u05d2\u05f3;\u05d9\u05d5\u05dd \u05d3\u05f3;\u05d9\u05d5\u05dd \u05d4\u05f3;\u05d9\u05d5\u05dd \u05d5\u05f3;\u05e9\u05d1\u05ea".split(";"),
    STANDALONESHORTWEEKDAYS: "\u05d9\u05d5\u05dd \u05d0\u05f3;\u05d9\u05d5\u05dd \u05d1\u05f3;\u05d9\u05d5\u05dd \u05d2\u05f3;\u05d9\u05d5\u05dd \u05d3\u05f3;\u05d9\u05d5\u05dd \u05d4\u05f3;\u05d9\u05d5\u05dd \u05d5\u05f3;\u05e9\u05d1\u05ea".split(";"),
    NARROWWEEKDAYS: "\u05d0\u05f3 \u05d1\u05f3 \u05d2\u05f3 \u05d3\u05f3 \u05d4\u05f3 \u05d5\u05f3 \u05e9\u05f3".split(" "),
    STANDALONENARROWWEEKDAYS: "\u05d0\u05f3 \u05d1\u05f3 \u05d2\u05f3 \u05d3\u05f3 \u05d4\u05f3 \u05d5\u05f3 \u05e9\u05f3".split(" "),
    SHORTQUARTERS: ["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"],
    QUARTERS: ["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"],
    AMPMS: ["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6", "\u05d0\u05d7\u05d4\u05f4\u05e6"],
    DATEFORMATS: ["EEEE, d \u05d1MMMM y", "d \u05d1MMMM y", "d \u05d1MMM y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} \u05d1\u05e9\u05e2\u05d4 {0}", "{1} \u05d1\u05e9\u05e2\u05d4 {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [4, 5],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_hi = {
    ERAS: ["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935", "\u0908\u0938\u094d\u0935\u0940"],
    ERANAMES: ["\u0908\u0938\u093e-\u092a\u0942\u0930\u094d\u0935", "\u0908\u0938\u094d\u0935\u0940"],
    NARROWMONTHS: "\u091c \u092b\u093c \u092e\u093e \u0905 \u092e \u091c\u0942 \u091c\u0941 \u0905 \u0938\u093f \u0905 \u0928 \u0926\u093f".split(" "),
    STANDALONENARROWMONTHS: "\u091c \u092b\u093c \u092e\u093e \u0905 \u092e \u091c\u0942 \u091c\u0941 \u0905 \u0938\u093f \u0905 \u0928 \u0926\u093f".split(" "),
    MONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u093c\u0930\u0935\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948\u0932 \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u0924 \u0938\u093f\u0924\u0902\u092c\u0930 \u0905\u0915\u094d\u091f\u0942\u092c\u0930 \u0928\u0935\u0902\u092c\u0930 \u0926\u093f\u0938\u0902\u092c\u0930".split(" "),
    STANDALONEMONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u093c\u0930\u0935\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948\u0932 \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u0924 \u0938\u093f\u0924\u0902\u092c\u0930 \u0905\u0915\u094d\u091f\u0942\u092c\u0930 \u0928\u0935\u0902\u092c\u0930 \u0926\u093f\u0938\u0902\u092c\u0930".split(" "),
    SHORTMONTHS: "\u091c\u0928 \u092b\u093c\u0930 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948 \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932\u093e \u0905\u0917 \u0938\u093f\u0924\u0902 \u0905\u0915\u094d\u091f\u0942 \u0928\u0935\u0902 \u0926\u093f\u0938\u0902".split(" "),
    STANDALONESHORTMONTHS: "\u091c\u0928 \u092b\u093c\u0930 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948 \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932\u093e \u0905\u0917 \u0938\u093f\u0924\u0902 \u0905\u0915\u094d\u091f\u0942 \u0928\u0935\u0902 \u0926\u093f\u0938\u0902".split(" "), WEEKDAYS: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0932\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
    STANDALONEWEEKDAYS: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0932\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
    SHORTWEEKDAYS: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0932 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0932 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    NARROWWEEKDAYS: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
    SHORTQUARTERS: ["\u0924\u093f1", "\u0924\u093f2", "\u0924\u093f3", "\u0924\u093f4"],
    QUARTERS: ["\u092a\u0939\u0932\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093f\u092e\u093e\u0939\u0940", "\u091a\u094c\u0925\u0940 \u0924\u093f\u092e\u093e\u0939\u0940"],
    AMPMS: ["am", "pm"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "dd-MM-y", "d-M-yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} \u0915\u094b {0}", "{1} \u0915\u094b {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_hr = {
    ERAS: ["pr. Kr.", "p. Kr."],
    ERANAMES: ["Prije Krista", "Poslije Krista"],
    NARROWMONTHS: "1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),
    STANDALONENARROWMONTHS: "1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),
    MONTHS: "sije\u010dnja velja\u010de o\u017eujka travnja svibnja lipnja srpnja kolovoza rujna listopada studenoga prosinca".split(" "),
    STANDALONEMONTHS: "sije\u010danj velja\u010da o\u017eujak travanj svibanj lipanj srpanj kolovoz rujan listopad studeni prosinac".split(" "),
    SHORTMONTHS: "sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),
    STANDALONESHORTMONTHS: "sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),
    WEEKDAYS: "nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
    STANDALONEWEEKDAYS: "nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
    SHORTWEEKDAYS: "ned pon uto sri \u010det pet sub".split(" "),
    STANDALONESHORTWEEKDAYS: "ned pon uto sri \u010det pet sub".split(" "),
    NARROWWEEKDAYS: "NPUS\u010cPS".split(""),
    STANDALONENARROWWEEKDAYS: "npus\u010dps".split(""),
    SHORTQUARTERS: ["1kv", "2kv", "3kv", "4kv"],
    QUARTERS: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "d.M.yy."],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} 'u' {0}", "{1} 'u' {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_hu = {
    ERAS: ["i. e.", "i. sz."],
    ERANAMES: ["id\u0151sz\u00e1m\u00edt\u00e1sunk el\u0151tt", "id\u0151sz\u00e1m\u00edt\u00e1sunk szerint"],
    NARROWMONTHS: "J F M \u00c1 M J J A Sz O N D".split(" "),
    STANDALONENARROWMONTHS: "J F M \u00c1 M J J A Sz O N D".split(" "),
    MONTHS: "janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(" "),
    STANDALONEMONTHS: "janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(" "),
    SHORTMONTHS: "jan. febr. m\u00e1rc. \u00e1pr. m\u00e1j. j\u00fan. j\u00fal. aug. szept. okt. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "jan. febr. m\u00e1rc. \u00e1pr. m\u00e1j. j\u00fan. j\u00fal. aug. szept. okt. nov. dec.".split(" "),
    WEEKDAYS: "vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(" "),
    STANDALONEWEEKDAYS: "vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(" "),
    SHORTWEEKDAYS: "V H K Sze Cs P Szo".split(" "),
    STANDALONESHORTWEEKDAYS: "V H K Sze Cs P Szo".split(" "),
    NARROWWEEKDAYS: "V H K Sz Cs P Sz".split(" "),
    STANDALONENARROWWEEKDAYS: "V H K Sz Cs P Sz".split(" "),
    SHORTQUARTERS: ["N1", "N2", "N3", "N4"],
    QUARTERS: ["I. negyed\u00e9v", "II. negyed\u00e9v", "III. negyed\u00e9v", "IV. negyed\u00e9v"],
    AMPMS: ["de.", "du."],
    DATEFORMATS: ["y. MMMM d., EEEE", "y. MMMM d.", "y. MMM d.", "y. MM. dd."],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_hy = {
    ERAS: ["\u0574.\u0569.\u0561.", "\u0574.\u0569."],
    ERANAMES: ["\u0574.\u0569.\u0561.", "\u0574.\u0569."],
    NARROWMONTHS: "\u0540\u0553\u0544\u0531\u0544\u0540\u0540\u0555\u054d\u0540\u0546\u0534".split(""),
    STANDALONENARROWMONTHS: "\u0540\u0553\u0544\u0531\u0544\u0540\u0540\u0555\u054d\u0540\u0546\u0534".split(""),
    MONTHS: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b \u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b \u0574\u0561\u0580\u057f\u056b \u0561\u057a\u0580\u056b\u056c\u056b \u0574\u0561\u0575\u056b\u057d\u056b \u0570\u0578\u0582\u0576\u056b\u057d\u056b \u0570\u0578\u0582\u056c\u056b\u057d\u056b \u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split(" "),
    STANDALONEMONTHS: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580 \u0583\u0565\u057f\u0580\u057e\u0561\u0580 \u0574\u0561\u0580\u057f \u0561\u057a\u0580\u056b\u056c \u0574\u0561\u0575\u056b\u057d \u0570\u0578\u0582\u0576\u056b\u057d \u0570\u0578\u0582\u056c\u056b\u057d \u0585\u0563\u0578\u057d\u057f\u0578\u057d \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580 \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580 \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580 \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split(" "),
    SHORTMONTHS: "\u0570\u0576\u057e \u0583\u057f\u057e \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u057a\u057f \u0570\u056f\u057f \u0576\u0575\u0574 \u0564\u056f\u057f".split(" "),
    STANDALONESHORTMONTHS: "\u0570\u0576\u057e \u0583\u057f\u057e \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u057a\u057f \u0570\u056f\u057f \u0576\u0575\u0574 \u0564\u056f\u057f".split(" "),
    WEEKDAYS: "\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),
    STANDALONEWEEKDAYS: "\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),
    SHORTWEEKDAYS: "\u056f\u056b\u0580 \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580 \u0577\u0562\u0569".split(" "),
    STANDALONESHORTWEEKDAYS: "\u056f\u056b\u0580 \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580 \u0577\u0562\u0569".split(" "),
    NARROWWEEKDAYS: "\u053f \u0535 \u0535 \u0549 \u0540 \u0548\u0582 \u0547".split(" "),
    STANDALONENARROWWEEKDAYS: "\u053f \u0535 \u0535 \u0549 \u0540 \u0548\u0582 \u0547".split(" "),
    SHORTQUARTERS: ["1-\u056b\u0576 \u0565\u057c\u0574\u057d.", "2-\u0580\u0564 \u0565\u057c\u0574\u057d.", "3-\u0580\u0564 \u0565\u057c\u0574\u057d.", "4-\u0580\u0564 \u0565\u057c\u0574\u057d."],
    QUARTERS: ["1-\u056b\u0576 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f", "2-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f", "3-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f", "4-\u0580\u0564 \u0565\u057c\u0561\u0574\u057d\u0575\u0561\u056f"],
    AMPMS: ["\u056f\u0565\u057d\u0585\u0580\u056b\u0581 \u0561\u057c\u0561\u057b", "\u056f\u0565\u057d\u0585\u0580\u056b\u0581 \u0570\u0565\u057f\u0578"],
    DATEFORMATS: ["y\u0569. MMMM d, EEEE", "dd MMMM, y\u0569.", "dd MMM, y \u0569.", "dd.MM.yy"],
    TIMEFORMATS: ["H:mm:ss, zzzz", "H:mm:ss, z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_id = {
    ERAS: ["SM", "M"],
    ERANAMES: ["SM", "M"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),
    STANDALONEMONTHS: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),
    WEEKDAYS: "Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
    STANDALONEWEEKDAYS: "Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
    SHORTWEEKDAYS: "Min Sen Sel Rab Kam Jum Sab".split(" "),
    STANDALONESHORTWEEKDAYS: "Min Sen Sel Rab Kam Jum Sab".split(" "),
    NARROWWEEKDAYS: "MSSRKJS".split(""),
    STANDALONENARROWWEEKDAYS: "MSSRKJS".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_in = {
    ERAS: ["SM", "M"],
    ERANAMES: ["SM", "M"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),
    STANDALONEMONTHS: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),
    SHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),
    WEEKDAYS: "Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
    STANDALONEWEEKDAYS: "Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
    SHORTWEEKDAYS: "Min Sen Sel Rab Kam Jum Sab".split(" "),
    STANDALONESHORTWEEKDAYS: "Min Sen Sel Rab Kam Jum Sab".split(" "),
    NARROWWEEKDAYS: "MSSRKJS".split(""),
    STANDALONENARROWWEEKDAYS: "MSSRKJS".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_is = {
    ERAS: ["f.Kr.", "e.Kr."],
    ERANAMES: ["fyrir Krist", "eftir Krist"],
    NARROWMONTHS: "JFMAMJJ\u00c1SOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJ\u00c1SOND".split(""),
    MONTHS: "jan\u00faar febr\u00faar mars apr\u00edl ma\u00ed j\u00fan\u00ed j\u00fal\u00ed \u00e1g\u00fast september okt\u00f3ber n\u00f3vember desember".split(" "),
    STANDALONEMONTHS: "jan\u00faar febr\u00faar mars apr\u00edl ma\u00ed j\u00fan\u00ed j\u00fal\u00ed \u00e1g\u00fast september okt\u00f3ber n\u00f3vember desember".split(" "),
    SHORTMONTHS: "jan. feb. mar. apr. ma\u00ed j\u00fan. j\u00fal. \u00e1g\u00fa. sep. okt. n\u00f3v. des.".split(" "),
    STANDALONESHORTMONTHS: "jan. feb. mar. apr. ma\u00ed j\u00fan. j\u00fal. \u00e1g\u00fa. sep. okt. n\u00f3v. des.".split(" "),
    WEEKDAYS: "sunnudagur m\u00e1nudagur \u00feri\u00f0judagur mi\u00f0vikudagur fimmtudagur f\u00f6studagur laugardagur".split(" "),
    STANDALONEWEEKDAYS: "sunnudagur m\u00e1nudagur \u00feri\u00f0judagur mi\u00f0vikudagur fimmtudagur f\u00f6studagur laugardagur".split(" "),
    SHORTWEEKDAYS: "sun. m\u00e1n. \u00feri. mi\u00f0. fim. f\u00f6s. lau.".split(" "),
    STANDALONESHORTWEEKDAYS: "sun. m\u00e1n. \u00feri. mi\u00f0. fim. f\u00f6s. lau.".split(" "),
    NARROWWEEKDAYS: "SM\u00deMFFL".split(""),
    STANDALONENARROWWEEKDAYS: "SM\u00deMFFL".split(""),
    SHORTQUARTERS: ["F1", "F2", "F3", "F4"],
    QUARTERS: ["1. fj\u00f3r\u00f0ungur", "2. fj\u00f3r\u00f0ungur", "3. fj\u00f3r\u00f0ungur", "4. fj\u00f3r\u00f0ungur"],
    AMPMS: ["f.h.", "e.h."],
    DATEFORMATS: ["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "d.M.y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} 'kl.' {0}", "{1} 'kl.' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_it = {
    ERAS: ["aC", "dC"],
    ERANAMES: ["a.C.", "d.C."],
    NARROWMONTHS: "GFMAMGLASOND".split(""),
    STANDALONENARROWMONTHS: "GFMAMGLASOND".split(""),
    MONTHS: "gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),
    STANDALONEMONTHS: "Gennaio Febbraio Marzo Aprile Maggio Giugno Luglio Agosto Settembre Ottobre Novembre Dicembre".split(" "),
    SHORTMONTHS: "gen feb mar apr mag giu lug ago set ott nov dic".split(" "),
    STANDALONESHORTMONTHS: "gen feb mar apr mag giu lug ago set ott nov dic".split(" "),
    WEEKDAYS: "domenica luned\u00ec marted\u00ec mercoled\u00ec gioved\u00ec venerd\u00ec sabato".split(" "),
    STANDALONEWEEKDAYS: "Domenica Luned\u00ec Marted\u00ec Mercoled\u00ec Gioved\u00ec Venerd\u00ec Sabato".split(" "),
    SHORTWEEKDAYS: "dom lun mar mer gio ven sab".split(" "),
    STANDALONESHORTWEEKDAYS: "dom lun mar mer gio ven sab".split(" "),
    NARROWWEEKDAYS: "DLMMGVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMMGVS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d MMMM y", "dd MMMM y", "dd/MMM/y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_iw = {
    ERAS: ["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e1", "\u05dc\u05e1\u05d4\u05f4\u05e0"],
    ERANAMES: ["\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e1\u05e4\u05d9\u05e8\u05d4", "\u05dc\u05e1\u05e4\u05d9\u05e8\u05d4"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u05d9\u05e0\u05d5\u05d0\u05e8 \u05e4\u05d1\u05e8\u05d5\u05d0\u05e8 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05d9\u05dc \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05d5\u05e1\u05d8 \u05e1\u05e4\u05d8\u05de\u05d1\u05e8 \u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8 \u05e0\u05d5\u05d1\u05de\u05d1\u05e8 \u05d3\u05e6\u05de\u05d1\u05e8".split(" "),
    STANDALONEMONTHS: "\u05d9\u05e0\u05d5\u05d0\u05e8 \u05e4\u05d1\u05e8\u05d5\u05d0\u05e8 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05d9\u05dc \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05d5\u05e1\u05d8 \u05e1\u05e4\u05d8\u05de\u05d1\u05e8 \u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8 \u05e0\u05d5\u05d1\u05de\u05d1\u05e8 \u05d3\u05e6\u05de\u05d1\u05e8".split(" "),
    SHORTMONTHS: "\u05d9\u05e0\u05d5\u05f3 \u05e4\u05d1\u05e8\u05f3 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05f3 \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05f3 \u05e1\u05e4\u05d8\u05f3 \u05d0\u05d5\u05e7\u05f3 \u05e0\u05d5\u05d1\u05f3 \u05d3\u05e6\u05de\u05f3".split(" "),
    STANDALONESHORTMONTHS: "\u05d9\u05e0\u05d5\u05f3 \u05e4\u05d1\u05e8\u05f3 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05f3 \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05f3 \u05e1\u05e4\u05d8\u05f3 \u05d0\u05d5\u05e7\u05f3 \u05e0\u05d5\u05d1\u05f3 \u05d3\u05e6\u05de\u05f3".split(" "),
    WEEKDAYS: "\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df;\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9;\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9;\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(";"),
    STANDALONEWEEKDAYS: "\u05d9\u05d5\u05dd \u05e8\u05d0\u05e9\u05d5\u05df;\u05d9\u05d5\u05dd \u05e9\u05e0\u05d9;\u05d9\u05d5\u05dd \u05e9\u05dc\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e8\u05d1\u05d9\u05e2\u05d9;\u05d9\u05d5\u05dd \u05d7\u05de\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d9\u05e9\u05d9;\u05d9\u05d5\u05dd \u05e9\u05d1\u05ea".split(";"),
    SHORTWEEKDAYS: "\u05d9\u05d5\u05dd \u05d0\u05f3;\u05d9\u05d5\u05dd \u05d1\u05f3;\u05d9\u05d5\u05dd \u05d2\u05f3;\u05d9\u05d5\u05dd \u05d3\u05f3;\u05d9\u05d5\u05dd \u05d4\u05f3;\u05d9\u05d5\u05dd \u05d5\u05f3;\u05e9\u05d1\u05ea".split(";"),
    STANDALONESHORTWEEKDAYS: "\u05d9\u05d5\u05dd \u05d0\u05f3;\u05d9\u05d5\u05dd \u05d1\u05f3;\u05d9\u05d5\u05dd \u05d2\u05f3;\u05d9\u05d5\u05dd \u05d3\u05f3;\u05d9\u05d5\u05dd \u05d4\u05f3;\u05d9\u05d5\u05dd \u05d5\u05f3;\u05e9\u05d1\u05ea".split(";"),
    NARROWWEEKDAYS: "\u05d0\u05f3 \u05d1\u05f3 \u05d2\u05f3 \u05d3\u05f3 \u05d4\u05f3 \u05d5\u05f3 \u05e9\u05f3".split(" "),
    STANDALONENARROWWEEKDAYS: "\u05d0\u05f3 \u05d1\u05f3 \u05d2\u05f3 \u05d3\u05f3 \u05d4\u05f3 \u05d5\u05f3 \u05e9\u05f3".split(" "),
    SHORTQUARTERS: ["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"],
    QUARTERS: ["\u05e8\u05d1\u05e2\u05d5\u05df 1", "\u05e8\u05d1\u05e2\u05d5\u05df 2", "\u05e8\u05d1\u05e2\u05d5\u05df 3", "\u05e8\u05d1\u05e2\u05d5\u05df 4"],
    AMPMS: ["\u05dc\u05e4\u05e0\u05d4\u05f4\u05e6", "\u05d0\u05d7\u05d4\u05f4\u05e6"],
    DATEFORMATS: ["EEEE, d \u05d1MMMM y", "d \u05d1MMMM y", "d \u05d1MMM y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} \u05d1\u05e9\u05e2\u05d4 {0}", "{1} \u05d1\u05e9\u05e2\u05d4 {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [4, 5],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ja = {
    ERAS: ["\u7d00\u5143\u524d", "\u897f\u66a6"],
    ERANAMES: ["\u7d00\u5143\u524d", "\u897f\u66a6"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONEMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    SHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONESHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    WEEKDAYS: "\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),
    STANDALONEWEEKDAYS: "\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),
    SHORTWEEKDAYS: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
    STANDALONESHORTWEEKDAYS: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
    NARROWWEEKDAYS: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
    STANDALONENARROWWEEKDAYS: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["\u7b2c1\u56db\u534a\u671f", "\u7b2c2\u56db\u534a\u671f", "\u7b2c3\u56db\u534a\u671f", "\u7b2c4\u56db\u534a\u671f"],
    AMPMS: ["\u5348\u524d", "\u5348\u5f8c"],
    DATEFORMATS: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y/MM/dd", "y/MM/dd"],
    TIMEFORMATS: ["H\u6642mm\u5206ss\u79d2 zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ka = {
    ERAS: ["\u10eb\u10d5. \u10ec.", "\u10d0\u10ee. \u10ec."],
    ERANAMES: ["\u10eb\u10d5\u10d4\u10da\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7", "\u10d0\u10ee\u10d0\u10da\u10d8 \u10ec\u10d4\u10da\u10d7\u10d0\u10e6\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8\u10d7"],
    NARROWMONTHS: "\u10d8\u10d7\u10db\u10d0\u10db\u10d8\u10d8\u10d0\u10e1\u10dd\u10dc\u10d3".split(""),
    STANDALONENARROWMONTHS: "\u10d8\u10d7\u10db\u10d0\u10db\u10d8\u10d8\u10d0\u10e1\u10dd\u10dc\u10d3".split(""),
    MONTHS: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8 \u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8 \u10db\u10d0\u10e0\u10e2\u10d8 \u10d0\u10de\u10e0\u10d8\u10da\u10d8 \u10db\u10d0\u10d8\u10e1\u10d8 \u10d8\u10d5\u10dc\u10d8\u10e1\u10d8 \u10d8\u10d5\u10da\u10d8\u10e1\u10d8 \u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd \u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8 \u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split(" "),
    STANDALONEMONTHS: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8 \u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8 \u10db\u10d0\u10e0\u10e2\u10d8 \u10d0\u10de\u10e0\u10d8\u10da\u10d8 \u10db\u10d0\u10d8\u10e1\u10d8 \u10d8\u10d5\u10dc\u10d8\u10e1\u10d8 \u10d8\u10d5\u10da\u10d8\u10e1\u10d8 \u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd \u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8 \u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split(" "),
    SHORTMONTHS: "\u10d8\u10d0\u10dc \u10d7\u10d4\u10d1 \u10db\u10d0\u10e0 \u10d0\u10de\u10e0 \u10db\u10d0\u10d8 \u10d8\u10d5\u10dc \u10d8\u10d5\u10da \u10d0\u10d2\u10d5 \u10e1\u10d4\u10e5 \u10dd\u10e5\u10e2 \u10dc\u10dd\u10d4 \u10d3\u10d4\u10d9".split(" "),
    STANDALONESHORTMONTHS: "\u10d8\u10d0\u10dc \u10d7\u10d4\u10d1 \u10db\u10d0\u10e0 \u10d0\u10de\u10e0 \u10db\u10d0\u10d8 \u10d8\u10d5\u10dc \u10d8\u10d5\u10da \u10d0\u10d2\u10d5 \u10e1\u10d4\u10e5 \u10dd\u10e5\u10e2 \u10dc\u10dd\u10d4 \u10d3\u10d4\u10d9".split(" "),
    WEEKDAYS: "\u10d9\u10d5\u10d8\u10e0\u10d0 \u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8 \u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split(" "),
    STANDALONEWEEKDAYS: "\u10d9\u10d5\u10d8\u10e0\u10d0 \u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8 \u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split(" "),
    SHORTWEEKDAYS: "\u10d9\u10d5\u10d8 \u10dd\u10e0\u10e8 \u10e1\u10d0\u10db \u10dd\u10d7\u10ee \u10ee\u10e3\u10d7 \u10de\u10d0\u10e0 \u10e8\u10d0\u10d1".split(" "),
    STANDALONESHORTWEEKDAYS: "\u10d9\u10d5\u10d8 \u10dd\u10e0\u10e8 \u10e1\u10d0\u10db \u10dd\u10d7\u10ee \u10ee\u10e3\u10d7 \u10de\u10d0\u10e0 \u10e8\u10d0\u10d1".split(" "),
    NARROWWEEKDAYS: "\u10d9\u10dd\u10e1\u10dd\u10ee\u10de\u10e8".split(""),
    STANDALONENARROWWEEKDAYS: "\u10d9\u10dd\u10e1\u10dd\u10ee\u10de\u10e8".split(""),
    SHORTQUARTERS: ["I \u10d9\u10d5.", "II \u10d9\u10d5.", "III \u10d9\u10d5.", "IV \u10d9\u10d5."],
    QUARTERS: ["I \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8", "II \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8", "III \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8", "IV \u10d9\u10d5\u10d0\u10e0\u10e2\u10d0\u10da\u10d8"],
    AMPMS: ["\u10d3\u10d8\u10da\u10d8\u10e1", "\u10e1\u10d0\u10e6\u10d0\u10db\u10dd\u10e1"],
    DATEFORMATS: ["EEEE, dd MMMM, y", "d MMMM, y", "d MMM, y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1}, {0}", "{1} {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_kk = {
    ERAS: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
    ERANAMES: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u049b\u0430\u04a3\u0442\u0430\u0440 \u0430\u049b\u043f\u0430\u043d \u043d\u0430\u0443\u0440\u044b\u0437 \u0441\u04d9\u0443\u0456\u0440 \u043c\u0430\u043c\u044b\u0440 \u043c\u0430\u0443\u0441\u044b\u043c \u0448\u0456\u043b\u0434\u0435 \u0442\u0430\u043c\u044b\u0437 \u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a \u049b\u0430\u0437\u0430\u043d \u049b\u0430\u0440\u0430\u0448\u0430 \u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split(" "),
    STANDALONEMONTHS: "\u049b\u0430\u04a3\u0442\u0430\u0440 \u0430\u049b\u043f\u0430\u043d \u043d\u0430\u0443\u0440\u044b\u0437 \u0441\u04d9\u0443\u0456\u0440 \u043c\u0430\u043c\u044b\u0440 \u043c\u0430\u0443\u0441\u044b\u043c \u0448\u0456\u043b\u0434\u0435 \u0442\u0430\u043c\u044b\u0437 \u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a \u049b\u0430\u0437\u0430\u043d \u049b\u0430\u0440\u0430\u0448\u0430 \u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split(" "),
    SHORTMONTHS: "\u049b\u0430\u04a3. \u0430\u049b\u043f. \u043d\u0430\u0443. \u0441\u04d9\u0443. \u043c\u0430\u043c. \u043c\u0430\u0443. \u0448\u0456\u043b. \u0442\u0430\u043c. \u049b\u044b\u0440. \u049b\u0430\u0437. \u049b\u0430\u0440. \u0436\u0435\u043b\u0442.".split(" "),
    STANDALONESHORTMONTHS: "\u049b\u0430\u04a3. \u0430\u049b\u043f. \u043d\u0430\u0443. \u0441\u04d9\u0443. \u043c\u0430\u043c. \u043c\u0430\u0443. \u0448\u0456\u043b. \u0442\u0430\u043c. \u049b\u044b\u0440. \u049b\u0430\u0437. \u049b\u0430\u0440. \u0436\u0435\u043b\u0442.".split(" "),
    WEEKDAYS: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456 \u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456 \u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0436\u04b1\u043c\u0430 \u0441\u0435\u043d\u0431\u0456".split(" "),
    STANDALONEWEEKDAYS: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456 \u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456 \u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0436\u04b1\u043c\u0430 \u0441\u0435\u043d\u0431\u0456".split(" "),
    SHORTWEEKDAYS: "\u0436\u0441. \u0434\u0441. \u0441\u0441. \u0441\u0440. \u0431\u0441. \u0436\u043c. \u0441\u0431.".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0436\u0441. \u0434\u0441. \u0441\u0441. \u0441\u0440. \u0431\u0441. \u0436\u043c. \u0441\u0431.".split(" "),
    NARROWWEEKDAYS: "\u0416\u0414\u0421\u0421\u0411\u0416\u0421".split(""),
    STANDALONENARROWWEEKDAYS: "\u0416\u0414\u0421\u0421\u0411\u0416\u0421".split(""),
    SHORTQUARTERS: ["1-\u0442\u043e\u049b\u0441\u0430\u043d", "2-\u0442\u043e\u049b\u0441\u0430\u043d", "3-\u0442\u043e\u049b\u0441\u0430\u043d", "4-\u0442\u043e\u049b\u0441\u0430\u043d"],
    QUARTERS: ["1-\u0456\u043d\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d", "2-\u0456\u043d\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d", "3-\u0456\u043d\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d", "4-\u0456\u043d\u0448\u0456 \u0442\u043e\u049b\u0441\u0430\u043d"],
    AMPMS: ["\u0442\u04af\u0441\u043a\u0435 \u0434\u0435\u0439\u0456\u043d", "\u0442\u04af\u0441\u0442\u0435\u043d \u043a\u0435\u0439\u0456\u043d"],
    DATEFORMATS: ["EEEE, d MMMM y '\u0436'.", "d MMMM y '\u0436'.", "dd.MM.y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_km = {
    ERAS: ["\u1798\u17bb\u1793 \u1782.\u179f.", "\u1782.\u179f."],
    ERANAMES: ["\u1798\u17bb\u1793\u200b\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787", "\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
    STANDALONEMONTHS: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
    SHORTMONTHS: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
    STANDALONESHORTMONTHS: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
    WEEKDAYS: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
    STANDALONEWEEKDAYS: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
    SHORTWEEKDAYS: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
    STANDALONESHORTWEEKDAYS: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
    NARROWWEEKDAYS: "1234567".split(""),
    STANDALONENARROWWEEKDAYS: "1234567".split(""),
    SHORTQUARTERS: ["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f \u17e1", "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f \u17e2", "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f \u17e3",
        "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f \u17e4"],
    QUARTERS: ["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 \u17e1", "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 \u17e2", "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 \u17e3", "\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 \u17e4"],
    AMPMS: ["\u1796\u17d2\u179a\u17b9\u1780", "\u179b\u17d2\u1784\u17b6\u1785"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/y"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_kn = {
    ERAS: ["\u0c95\u0ccd\u0cb0\u0cbf.\u0caa\u0cc2", "\u0c9c\u0cbe\u0cb9\u0cc0"],
    ERANAMES: ["\u0c88\u0cb8\u0caa\u0cc2\u0cb5\u0cef.", "\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0cb6\u0c95"],
    NARROWMONTHS: "\u0c9c \u0cab\u0cc6 \u0cae\u0cbe \u0c8f \u0cae\u0cc7 \u0c9c\u0cc2 \u0c9c\u0cc1 \u0c86 \u0cb8\u0cc6 \u0c85 \u0ca8 \u0ca1\u0cbf".split(" "),
    STANDALONENARROWMONTHS: "\u0c9c \u0cab\u0cc6 \u0cae\u0cbe \u0c8f \u0cae\u0cc7 \u0c9c\u0cc2 \u0c9c\u0cc1 \u0c86 \u0cb8\u0cc6 \u0c85 \u0ca8 \u0ca1\u0cbf".split(" "),
    MONTHS: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf \u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf \u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd \u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd \u0cae\u0cc7 \u0c9c\u0cc2\u0ca8\u0ccd \u0c9c\u0cc1\u0cb2\u0cc8 \u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd \u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd \u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(" "),
    STANDALONEMONTHS: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf \u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf \u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd \u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd \u0cae\u0cc7 \u0c9c\u0cc2\u0ca8\u0ccd \u0c9c\u0cc1\u0cb2\u0cc8 \u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd \u0cb8\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd \u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(" "),
    SHORTMONTHS: "\u0c9c\u0ca8. \u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cc1. \u0cae\u0cbe \u0c8f\u0caa\u0ccd\u0cb0\u0cbf. \u0cae\u0cc7 \u0c9c\u0cc2 \u0c9c\u0cc1. \u0c86\u0c97. \u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82. \u0c85\u0c95\u0ccd\u0c9f\u0ccb. \u0ca8\u0cb5\u0cc6\u0c82. \u0ca1\u0cbf\u0cb8\u0cc6\u0c82.".split(" "),
    STANDALONESHORTMONTHS: "\u0c9c\u0ca8. \u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cc1. \u0cae\u0cbe \u0c8f\u0caa\u0ccd\u0cb0\u0cbf. \u0cae\u0cc7 \u0c9c\u0cc2 \u0c9c\u0cc1. \u0c86\u0c97. \u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82. \u0c85\u0c95\u0ccd\u0c9f\u0ccb. \u0ca8\u0cb5\u0cc6\u0c82. \u0ca1\u0cbf\u0cb8\u0cc6\u0c82.".split(" "),
    WEEKDAYS: "\u0cb0\u0cb5\u0cbf\u0cb5\u0cbe\u0cb0 \u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0 \u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0 \u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0 \u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0 \u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0 \u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(" "),
    STANDALONEWEEKDAYS: "\u0cb0\u0cb5\u0cbf\u0cb5\u0cbe\u0cb0 \u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0 \u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0 \u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0 \u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0 \u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0 \u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(" "),
    SHORTWEEKDAYS: "\u0cb0. \u0cb8\u0ccb. \u0cae\u0c82. \u0cac\u0cc1. \u0c97\u0cc1. \u0cb6\u0cc1. \u0cb6\u0ca8\u0cbf.".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0cb0\u0cb5\u0cbf \u0cb8\u0ccb\u0cae \u0cae\u0c82\u0c97\u0cb3 \u0cac\u0cc1\u0ca7 \u0c97\u0cc1\u0cb0\u0cc1 \u0cb6\u0cc1\u0c95\u0ccd\u0cb0 \u0cb6\u0ca8\u0cbf".split(" "),
    NARROWWEEKDAYS: "\u0cb0 \u0cb8\u0ccb \u0cae\u0c82 \u0cac\u0cc1 \u0c97\u0cc1 \u0cb6\u0cc1 \u0cb6".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0cb0 \u0cb8\u0ccb \u0cae\u0c82 \u0cac\u0cc1 \u0c97\u0cc1 \u0cb6\u0cc1 \u0cb6".split(" "),
    SHORTQUARTERS: ["\u0ca4\u0ccd\u0cb0\u0cc8 1", "\u0ca4\u0ccd\u0cb0\u0cc8 2", "\u0ca4\u0ccd\u0cb0\u0cc8 3", "\u0ca4\u0ccd\u0cb0\u0cc8 4"],
    QUARTERS: ["1 \u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95", "2\u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95", "3 \u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95", "4 \u0ca8\u0cc7 \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["d MMMM y, EEEE", "d MMMM y", "d MMM y", "d-M-yy"],
    TIMEFORMATS: ["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ko = {
    ERAS: ["\uae30\uc6d0\uc804", "\uc11c\uae30"],
    ERANAMES: ["\uc11c\ub825\uae30\uc6d0\uc804", "\uc11c\ub825\uae30\uc6d0"],
    NARROWMONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    STANDALONENARROWMONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    MONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    STANDALONEMONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    SHORTMONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    STANDALONESHORTMONTHS: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
    WEEKDAYS: "\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
    STANDALONEWEEKDAYS: "\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
    SHORTWEEKDAYS: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
    STANDALONESHORTWEEKDAYS: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
    NARROWWEEKDAYS: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
    STANDALONENARROWWEEKDAYS: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
    SHORTQUARTERS: ["1\ubd84\uae30", "2\ubd84\uae30", "3\ubd84\uae30", "4\ubd84\uae30"],
    QUARTERS: ["\uc81c 1/4\ubd84\uae30", "\uc81c 2/4\ubd84\uae30", "\uc81c 3/4\ubd84\uae30", "\uc81c 4/4\ubd84\uae30"],
    AMPMS: ["\uc624\uc804", "\uc624\ud6c4"],
    DATEFORMATS: ["y\ub144 M\uc6d4 d\uc77c EEEE", "y\ub144 M\uc6d4 d\uc77c", "y. M. d.", "yy. M. d."],
    TIMEFORMATS: ["a h\uc2dc m\ubd84 s\ucd08 zzzz", "a h\uc2dc m\ubd84 s\ucd08 z", "a h:mm:ss", "a h:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ky = {
    ERAS: ["\u0431.\u0437. \u0447.", "\u0431.\u0437."],
    ERANAMES: ["\u0431.\u0437. \u0447\u0435\u0439\u0438\u043d", "\u0431.\u0437."],
    NARROWMONTHS: "\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),
    STANDALONENARROWMONTHS: "\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),
    MONTHS: "\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),
    STANDALONEMONTHS: "\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),
    SHORTMONTHS: "\u044f\u043d\u0432. \u0444\u0435\u0432. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u0439 \u0438\u044e\u043d. \u0438\u044e\u043b. \u0430\u0432\u0433. \u0441\u0435\u043d. \u043e\u043a\u0442. \u043d\u043e\u044f. \u0434\u0435\u043a.".split(" "),
    STANDALONESHORTMONTHS: "\u044f\u043d\u0432. \u0444\u0435\u0432. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u0439 \u0438\u044e\u043d. \u0438\u044e\u043b. \u0430\u0432\u0433. \u0441\u0435\u043d. \u043e\u043a\u0442. \u043d\u043e\u044f. \u0434\u0435\u043a.".split(" "),
    WEEKDAYS: "\u0416\u0435\u043a \u0414\u04af\u0439 \u0428\u0435\u0439 \u0428\u0430\u0440 \u0411\u0435\u0439 \u0416\u0443\u043c \u0418\u0448\u043c".split(" "),
    STANDALONEWEEKDAYS: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438 \u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af \u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438 \u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438 \u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438 \u0416\u0443\u043c\u0430 \u0418\u0448\u0435\u043c\u0431\u0438".split(" "),
    SHORTWEEKDAYS: "\u0416\u043a \u0414\u0448 \u0428\u0435 \u0428\u0430 \u0411\u0448 \u0416\u043c \u0418\u0448".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0416\u0435\u043a \u0414\u04af\u0439 \u0428\u0435\u0439 \u0428\u0430\u0440 \u0411\u0435\u0439 \u0416\u0443\u043c \u0418\u0448\u043c".split(" "),
    NARROWWEEKDAYS: "\u0416\u0414\u0428\u0428\u0411\u0416\u0418".split(""),
    STANDALONENARROWWEEKDAYS: "\u0416\u0414\u0428\u0428\u0411\u0416\u0418".split(""),
    SHORTQUARTERS: ["1-\u0447\u0435\u0439.", "2-\u0447\u0435\u0439.", "3-\u0447\u0435\u0439.", "4-\u0447\u0435\u0439."],
    QUARTERS: ["1-\u0447\u0435\u0439\u0440\u0435\u043a", "2-\u0447\u0435\u0439\u0440\u0435\u043a", "3-\u0447\u0435\u0439\u0440\u0435\u043a", "4-\u0447\u0435\u0439\u0440\u0435\u043a"],
    AMPMS: ["\u0442\u04af\u0448\u043a\u04e9 \u0447\u0435\u0439\u0438\u043d\u043a\u0438", "\u0442\u04af\u0448\u0442\u04e9\u043d \u043a\u0438\u0439\u0438\u043d\u043a\u0438"],
    DATEFORMATS: ["EEEE, d-MMMM, y-'\u0436'.", "d-MMMM, y-'\u0436'.", "dd.MM.y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ln = {
    ERAS: ["lib\u00f3so ya", "nsima ya Y"],
    ERANAMES: ["Yambo ya Y\u00e9zu Kr\u00eds", "Nsima ya Y\u00e9zu Kr\u00eds"],
    NARROWMONTHS: "yfmamyyas\u0254nd".split(""),
    STANDALONENARROWMONTHS: "yfmamyyas\u0254nd".split(""),
    MONTHS: "s\u00e1nz\u00e1 ya yambo;s\u00e1nz\u00e1 ya m\u00edbal\u00e9;s\u00e1nz\u00e1 ya m\u00eds\u00e1to;s\u00e1nz\u00e1 ya m\u00ednei;s\u00e1nz\u00e1 ya m\u00edt\u00e1no;s\u00e1nz\u00e1 ya mot\u00f3b\u00e1;s\u00e1nz\u00e1 ya nsambo;s\u00e1nz\u00e1 ya mwambe;s\u00e1nz\u00e1 ya libwa;s\u00e1nz\u00e1 ya z\u00f3mi;s\u00e1nz\u00e1 ya z\u00f3mi na m\u0254\u030ck\u0254\u0301;s\u00e1nz\u00e1 ya z\u00f3mi na m\u00edbal\u00e9".split(";"),
    STANDALONEMONTHS: "s\u00e1nz\u00e1 ya yambo;s\u00e1nz\u00e1 ya m\u00edbal\u00e9;s\u00e1nz\u00e1 ya m\u00eds\u00e1to;s\u00e1nz\u00e1 ya m\u00ednei;s\u00e1nz\u00e1 ya m\u00edt\u00e1no;s\u00e1nz\u00e1 ya mot\u00f3b\u00e1;s\u00e1nz\u00e1 ya nsambo;s\u00e1nz\u00e1 ya mwambe;s\u00e1nz\u00e1 ya libwa;s\u00e1nz\u00e1 ya z\u00f3mi;s\u00e1nz\u00e1 ya z\u00f3mi na m\u0254\u030ck\u0254\u0301;s\u00e1nz\u00e1 ya z\u00f3mi na m\u00edbal\u00e9".split(";"),
    SHORTMONTHS: "yan fbl msi apl mai yun yul agt stb \u0254tb nvb dsb".split(" "),
    STANDALONESHORTMONTHS: "yan fbl msi apl mai yun yul agt stb \u0254tb nvb dsb".split(" "),
    WEEKDAYS: "eyenga;mok\u0254l\u0254 mwa yambo;mok\u0254l\u0254 mwa m\u00edbal\u00e9;mok\u0254l\u0254 mwa m\u00eds\u00e1to;mok\u0254l\u0254 ya m\u00edn\u00e9i;mok\u0254l\u0254 ya m\u00edt\u00e1no;mp\u0254\u0301s\u0254".split(";"),
    STANDALONEWEEKDAYS: "eyenga;mok\u0254l\u0254 mwa yambo;mok\u0254l\u0254 mwa m\u00edbal\u00e9;mok\u0254l\u0254 mwa m\u00eds\u00e1to;mok\u0254l\u0254 ya m\u00edn\u00e9i;mok\u0254l\u0254 ya m\u00edt\u00e1no;mp\u0254\u0301s\u0254".split(";"),
    SHORTWEEKDAYS: "eye ybo mbl mst min mtn mps".split(" "),
    STANDALONESHORTWEEKDAYS: "eye ybo mbl mst min mtn mps".split(" "),
    NARROWWEEKDAYS: "eymmmmp".split(""),
    STANDALONENARROWWEEKDAYS: "eymmmmp".split(""),
    SHORTQUARTERS: ["SM1", "SM2", "SM3", "SM4"],
    QUARTERS: ["s\u00e1nz\u00e1 m\u00eds\u00e1to ya yambo", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00edbal\u00e9", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00eds\u00e1to", "s\u00e1nz\u00e1 m\u00eds\u00e1to ya m\u00ednei"],
    AMPMS: ["nt\u0254\u0301ng\u0254\u0301", "mp\u00f3kwa"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_lo = {
    ERAS: ["\u0e81\u0ec8\u0ead\u0e99 \u0e84.\u0eaa.", "\u0e84.\u0eaa."],
    ERANAMES: ["\u0e81\u0ec8\u0ead\u0e99 \u0e84.\u0eaa.", "\u0e84.\u0eaa."],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(" "),
    STANDALONEMONTHS: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(" "),
    SHORTMONTHS: "\u0ea1.\u0e81. \u0e81.\u0e9e. \u0ea1.\u0e99. \u0ea1.\u0eaa. \u0e9e.\u0e9e. \u0ea1\u0eb4.\u0e96. \u0e81.\u0ea5. \u0eaa.\u0eab. \u0e81.\u0e8d. \u0e95.\u0ea5. \u0e9e.\u0e88. \u0e97.\u0ea7.".split(" "),
    STANDALONESHORTMONTHS: "\u0ea1.\u0e81. \u0e81.\u0e9e. \u0ea1.\u0e99. \u0ea1.\u0eaa. \u0e9e.\u0e9e. \u0ea1\u0eb4.\u0e96. \u0e81.\u0ea5. \u0eaa.\u0eab. \u0e81.\u0e8d. \u0e95.\u0ea5. \u0e9e.\u0e88. \u0e97.\u0ea7.".split(" "),
    WEEKDAYS: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
    STANDALONEWEEKDAYS: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
    SHORTWEEKDAYS: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0ea7\u0eb1\u0e99\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0ea7\u0eb1\u0e99\u0e88\u0eb1\u0e99 \u0ea7\u0eb1\u0e99\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0ea7\u0eb1\u0e99\u0e9e\u0eb8\u0e94 \u0ea7\u0eb1\u0e99\u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0ea7\u0eb1\u0e99\u0eaa\u0eb8\u0e81 \u0ea7\u0eb1\u0e99\u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
    NARROWWEEKDAYS: "1234567".split(""),
    STANDALONENARROWWEEKDAYS: "\u0e97 \u0e88 \u0e84 \u200b\u0e9e\u0eb8 \u0e9e \u200b\u0eaa\u0eb8 \u0eaa".split(" "),
    SHORTQUARTERS: ["\u0e95\u0ea11", "\u0e95\u0ea12", "\u0e95\u0ea13", "\u0e95\u0ea14"],
    QUARTERS: ["\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 1", "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 2", "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 3", "\u0ec4\u0e95\u0ea3\u0ea1\u0eb2\u0e94 4"],
    AMPMS: ["\u0e81\u0ec8\u0ead\u0e99\u0e97\u0ec8\u0ebd\u0e87", "\u0eab\u0ebc\u0eb1\u0e87\u0e97\u0ec8\u0ebd\u0e87"],
    DATEFORMATS: ["EEEE \u0e97\u0eb5 d MMMM G y", "d MMMM y", "d MMM y", "d/M/y"],
    TIMEFORMATS: ["H \u0ec2\u0ea1\u0e87 m \u0e99\u0eb2\u0e97\u0eb5 ss \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5 zzzz", "H \u0ec2\u0ea1\u0e87 m \u0e99\u0eb2\u0e97\u0eb5 ss \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5 z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_lt = {
    ERAS: ["pr. Kr.", "po Kr."],
    ERANAMES: ["prie\u0161 Krist\u0173", "po Kristaus"],
    NARROWMONTHS: "SVKBGBLRRSLG".split(""),
    STANDALONENARROWMONTHS: "SVKBGBLRRSLG".split(""),
    MONTHS: "sausis vasaris kovas balandis gegu\u017e\u0117 bir\u017eelis liepa rugpj\u016btis rugs\u0117jis spalis lapkritis gruodis".split(" "),
    STANDALONEMONTHS: "sausis vasaris kovas balandis gegu\u017e\u0117 bir\u017eelis liepa rugpj\u016btis rugs\u0117jis spalis lapkritis gruodis".split(" "),
    SHORTMONTHS: "saus. vas. kov. bal. geg. bir\u017e. liep. rugp. rugs. spal. lapkr. gruod.".split(" "),
    STANDALONESHORTMONTHS: "saus. vas. kov. bal. geg. bir\u017e. liep. rugp. rugs. spal. lapkr. gruod.".split(" "),
    WEEKDAYS: "sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),
    STANDALONEWEEKDAYS: "sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),
    SHORTWEEKDAYS: "sk pr an tr kt pn \u0161t".split(" "),
    STANDALONESHORTWEEKDAYS: "sk pr an tr kt pn \u0161t".split(" "),
    NARROWWEEKDAYS: "SPATKP\u0160".split(""),
    STANDALONENARROWWEEKDAYS: "SPATKP\u0160".split(""),
    SHORTQUARTERS: ["I k.", "II k.", "III k.", "IV k."],
    QUARTERS: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"],
    AMPMS: ["prie\u0161piet", "popiet"],
    DATEFORMATS: ["y 'm'. MMMM d 'd'., EEEE", "y 'm'. MMMM d 'd'.", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_lv = {
    ERAS: ["p.m.\u0113.", "m.\u0113."],
    ERANAMES: ["pirms m\u016bsu \u0113ras", "m\u016bsu \u0113r\u0101"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "janv\u0101ris febru\u0101ris marts apr\u012blis maijs j\u016bnijs j\u016blijs augusts septembris oktobris novembris decembris".split(" "),
    STANDALONEMONTHS: "Janv\u0101ris Febru\u0101ris Marts Apr\u012blis Maijs J\u016bnijs J\u016blijs Augusts Septembris Oktobris Novembris Decembris".split(" "),
    SHORTMONTHS: "janv. febr. marts apr. maijs j\u016bn. j\u016bl. aug. sept. okt. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "Janv. Febr. Marts Apr. Maijs J\u016bn. J\u016bl. Aug. Sept. Okt. Nov. Dec.".split(" "),
    WEEKDAYS: "sv\u0113tdiena pirmdiena otrdiena tre\u0161diena ceturtdiena piektdiena sestdiena".split(" "),
    STANDALONEWEEKDAYS: "Sv\u0113tdiena Pirmdiena Otrdiena Tre\u0161diena Ceturtdiena Piektdiena Sestdiena".split(" "),
    SHORTWEEKDAYS: "Sv Pr Ot Tr Ce Pk Se".split(" "),
    STANDALONESHORTWEEKDAYS: "Sv Pr Ot Tr Ce Pk Se".split(" "),
    NARROWWEEKDAYS: "SPOTCPS".split(""),
    STANDALONENARROWWEEKDAYS: "SPOTCPS".split(""),
    SHORTQUARTERS: ["C1", "C2", "C3", "C4"],
    QUARTERS: ["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"],
    AMPMS: ["priek\u0161pusdien\u0101", "p\u0113cpusdien\u0101"],
    DATEFORMATS: ["EEEE, y. 'gada' d. MMMM", "y. 'gada' d. MMMM", "y. 'gada' d. MMM", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_mk = {
    ERAS: ["\u043f\u0440.\u043d.\u0435.", "\u043d.\u0435."],
    ERANAMES: ["\u043f\u0440.\u043d.\u0435.", "\u043d.\u0435."],
    NARROWMONTHS: "\u0458\u0444\u043c\u0430\u043c\u0458\u0458\u0430\u0441\u043e\u043d\u0434".split(""),
    STANDALONENARROWMONTHS: "\u0458\u0444\u043c\u0430\u043c\u0458\u0458\u0430\u0441\u043e\u043d\u0434".split(""),
    MONTHS: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d\u0438 \u0458\u0443\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
    STANDALONEMONTHS: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d\u0438 \u0458\u0443\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
    SHORTMONTHS: "\u0458\u0430\u043d. \u0444\u0435\u0432. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u0458 \u0458\u0443\u043d. \u0458\u0443\u043b. \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),
    STANDALONESHORTMONTHS: "\u0458\u0430\u043d. \u0444\u0435\u0432. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u0458 \u0458\u0443\u043d. \u0458\u0443\u043b. \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),
    WEEKDAYS: "\u043d\u0435\u0434\u0435\u043b\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a \u043f\u0435\u0442\u043e\u043a \u0441\u0430\u0431\u043e\u0442\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u043d\u0435\u0434\u0435\u043b\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a \u043f\u0435\u0442\u043e\u043a \u0441\u0430\u0431\u043e\u0442\u0430".split(" "), SHORTWEEKDAYS: "\u043d\u0435\u0434. \u043f\u043e\u043d. \u0432\u0442. \u0441\u0440\u0435. \u0447\u0435\u0442. \u043f\u0435\u0442. \u0441\u0430\u0431.".split(" "),
    STANDALONESHORTWEEKDAYS: "\u043d\u0435\u0434. \u043f\u043e\u043d. \u0432\u0442. \u0441\u0440\u0435. \u0447\u0435\u0442. \u043f\u0435\u0442. \u0441\u0430\u0431.".split(" "),
    NARROWWEEKDAYS: "\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),
    STANDALONENARROWWEEKDAYS: "\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["\u043f\u0440\u0432\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0432\u0442\u043e\u0440\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0442\u0440\u0435\u0442\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0447\u0435\u0442\u0432\u0440\u0442\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435"],
    AMPMS: ["\u043f\u0440\u0435\u0442\u043f\u043b\u0430\u0434\u043d\u0435", "\u043f\u043e\u043f\u043b\u0430\u0434\u043d\u0435"],
    DATEFORMATS: ["EEEE, dd MMMM y '\u0433'.", "dd MMMM y '\u0433'.", "dd.M.y", "dd.M.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ml = {
    ERAS: ["\u0d15\u0d4d\u0d30\u0d3f.\u0d2e\u0d42", "\u0d0e\u0d21\u0d3f"],
    ERANAMES: ["\u0d15\u0d4d\u0d30\u0d3f\u0d38\u0d4d\u0d24\u0d41\u0d35\u0d3f\u0d28\u0d41\u0d4d \u0d2e\u0d41\u0d2e\u0d4d\u0d2a\u0d4d\u200c", "\u0d15\u0d4d\u0d30\u0d3f\u0d38\u0d4d\u0d24\u0d41\u0d35\u0d3f\u0d28\u0d4d \u0d2a\u0d3f\u0d7b\u0d2a\u0d4d"],
    NARROWMONTHS: "\u0d1c \u0d2b\u0d46 \u0d2e\u0d3e \u0d0f \u0d2e\u0d47 \u0d1c\u0d42 \u0d1c\u0d42 \u0d13 \u0d38\u0d46 \u0d12 \u0d28 \u0d21\u0d3f".split(" "),
    STANDALONENARROWMONTHS: "\u0d1c \u0d2b\u0d46 \u0d2e\u0d3e \u0d0f \u0d2e\u0d47 \u0d1c\u0d42 \u0d1c\u0d42 \u0d13 \u0d38\u0d46 \u0d12 \u0d28 \u0d21\u0d3f".split(" "),
    MONTHS: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f \u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d \u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48 \u0d06\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c \u0d12\u0d15\u0d4d\u200c\u0d1f\u0d4b\u0d2c\u0d7c \u0d28\u0d35\u0d02\u0d2c\u0d7c \u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split(" "),
    STANDALONEMONTHS: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f \u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d \u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48 \u0d06\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c \u0d12\u0d15\u0d4d\u200c\u0d1f\u0d4b\u0d2c\u0d7c \u0d28\u0d35\u0d02\u0d2c\u0d7c \u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split(" "),
    SHORTMONTHS: "\u0d1c\u0d28\u0d41 \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41 \u0d2e\u0d3e\u0d7c \u0d0f\u0d2a\u0d4d\u0d30\u0d3f \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48 \u0d13\u0d17 \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02 \u0d12\u0d15\u0d4d\u0d1f\u0d4b \u0d28\u0d35\u0d02 \u0d21\u0d3f\u0d38\u0d02".split(" "),
    STANDALONESHORTMONTHS: "\u0d1c\u0d28\u0d41 \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41 \u0d2e\u0d3e\u0d7c \u0d0f\u0d2a\u0d4d\u0d30\u0d3f \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48 \u0d13\u0d17 \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02 \u0d12\u0d15\u0d4d\u0d1f\u0d4b \u0d28\u0d35\u0d02 \u0d21\u0d3f\u0d38\u0d02".split(" "),
    WEEKDAYS: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a \u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a".split(" "),
    STANDALONEWEEKDAYS: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a \u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u200c\u0d1a".split(" "),
    SHORTWEEKDAYS: "\u0d1e\u0d3e\u0d2f\u0d7c \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e \u0d1a\u0d4a\u0d35\u0d4d\u0d35 \u0d2c\u0d41\u0d27\u0d7b \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02 \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f \u0d36\u0d28\u0d3f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0d1e\u0d3e\u0d2f\u0d7c \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e \u0d1a\u0d4a\u0d35\u0d4d\u0d35 \u0d2c\u0d41\u0d27\u0d7b \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02 \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f \u0d36\u0d28\u0d3f".split(" "),
    NARROWWEEKDAYS: "\u0d1e\u0d3e \u0d24\u0d3f \u0d1a\u0d4a \u0d2c\u0d41 \u0d35\u0d4d\u0d2f\u0d3e \u0d35\u0d46 \u0d36".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0d1e\u0d3e \u0d24\u0d3f \u0d1a\u0d4a \u0d2c\u0d41 \u0d35\u0d4d\u0d2f\u0d3e \u0d35\u0d46 \u0d36".split(" "),
    SHORTQUARTERS: ["\u0d12\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d30\u0d23\u0d4d\u0d1f\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d2e\u0d42\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d28\u0d3e\u0d32\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02"],
    QUARTERS: ["\u0d12\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d30\u0d23\u0d4d\u0d1f\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d2e\u0d42\u0d28\u0d4d\u0d28\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02", "\u0d28\u0d3e\u0d32\u0d3e\u0d02 \u0d2a\u0d3e\u0d26\u0d02"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["y, MMMM d, EEEE", "y, MMMM d", "y, MMM d", "dd/MM/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_mn = {
    ERAS: ["\u041c\u042d\u04e8", "\u041c\u042d"],
    ERANAMES: ["\u043c\u0430\u043d\u0430\u0439 \u044d\u0440\u0438\u043d\u0438\u0439 \u04e9\u043c\u043d\u04e9\u0445", "\u043c\u0430\u043d\u0430\u0439 \u044d\u0440\u0438\u043d\u0438\u0439"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(";"),
    STANDALONEMONTHS: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(";"),
    SHORTMONTHS: "1-\u0440 \u0441\u0430\u0440;2-\u0440 \u0441\u0430\u0440;3-\u0440 \u0441\u0430\u0440;4-\u0440 \u0441\u0430\u0440;5-\u0440 \u0441\u0430\u0440;6-\u0440 \u0441\u0430\u0440;7-\u0440 \u0441\u0430\u0440;8-\u0440 \u0441\u0430\u0440;9-\u0440 \u0441\u0430\u0440;10-\u0440 \u0441\u0430\u0440;11-\u0440 \u0441\u0430\u0440;12-\u0440 \u0441\u0430\u0440".split(";"),
    STANDALONESHORTMONTHS: "1-\u0440 \u0441\u0430\u0440;2-\u0440 \u0441\u0430\u0440;3-\u0440 \u0441\u0430\u0440;4-\u0440 \u0441\u0430\u0440;5-\u0440 \u0441\u0430\u0440;6-\u0440 \u0441\u0430\u0440;7-\u0440 \u0441\u0430\u0440;8-\u0440 \u0441\u0430\u0440;9-\u0440 \u0441\u0430\u0440;10-\u0440 \u0441\u0430\u0440;11-\u0440 \u0441\u0430\u0440;12-\u0440 \u0441\u0430\u0440".split(";"),
    WEEKDAYS: "\u043d\u044f\u043c \u0434\u0430\u0432\u0430\u0430 \u043c\u044f\u0433\u043c\u0430\u0440 \u043b\u0445\u0430\u0433\u0432\u0430 \u043f\u04af\u0440\u044d\u0432 \u0431\u0430\u0430\u0441\u0430\u043d \u0431\u044f\u043c\u0431\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u043d\u044f\u043c \u0434\u0430\u0432\u0430\u0430 \u043c\u044f\u0433\u043c\u0430\u0440 \u043b\u0445\u0430\u0433\u0432\u0430 \u043f\u04af\u0440\u044d\u0432 \u0431\u0430\u0430\u0441\u0430\u043d \u0431\u044f\u043c\u0431\u0430".split(" "),
    SHORTWEEKDAYS: "\u041d\u044f \u0414\u0430 \u041c\u044f \u041b\u0445 \u041f\u04af \u0411\u0430 \u0411\u044f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u041d\u044f \u0414\u0430 \u041c\u044f \u041b\u0445 \u041f\u04af \u0411\u0430 \u0411\u044f".split(" "),
    NARROWWEEKDAYS: "1234567".split(""),
    STANDALONENARROWWEEKDAYS: "1234567".split(""),
    SHORTQUARTERS: ["\u04231", "\u04232", "\u04233", "\u04234"],
    QUARTERS: ["1-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b", "2-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b", "3-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b", "4-\u0440 \u0443\u043b\u0438\u0440\u0430\u043b"],
    AMPMS: ["\u04ae\u04e8", "\u04ae\u0425"],
    DATEFORMATS: ["EEEE, y '\u043e\u043d\u044b' MMMM '\u0441\u0430\u0440\u044b\u043d' dd", "y '\u043e\u043d\u044b' MMMM '\u0441\u0430\u0440\u044b\u043d' d", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_mr = {
    ZERODIGIT: 2406,
    ERAS: ["\u0908\u0938\u093e\u092a\u0942\u0930\u094d\u0935", "\u0938\u0928"],
    ERANAMES: ["\u0908\u0938\u0935\u0940\u0938\u0928\u092a\u0942\u0930\u094d\u0935", "\u0908\u0938\u0935\u0940\u0938\u0928"],
    NARROWMONTHS: "\u091c\u093e \u092b\u0947 \u092e\u093e \u090f \u092e\u0947 \u091c\u0942 \u091c\u0941 \u0911 \u0938 \u0911 \u0928\u094b \u0921\u093f".split(" "),
    STANDALONENARROWMONTHS: "\u091c\u093e \u092b\u0947 \u092e\u093e \u090f \u092e\u0947 \u091c\u0942 \u091c\u0941 \u0911 \u0938 \u0911 \u0928\u094b \u0921\u093f".split(" "),
    MONTHS: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917\u0938\u094d\u091f \u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930 \u0911\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930 \u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(" "),
    STANDALONEMONTHS: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917\u0938\u094d\u091f \u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930 \u0911\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930 \u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(" "),
    SHORTMONTHS: "\u091c\u093e\u0928\u0947 \u092b\u0947\u092c\u094d\u0930\u0941 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917 \u0938\u092a\u094d\u091f\u0947\u0902 \u0911\u0915\u094d\u091f\u094b \u0928\u094b\u0935\u094d\u0939\u0947\u0902 \u0921\u093f\u0938\u0947\u0902".split(" "),
    STANDALONESHORTMONTHS: "\u091c\u093e\u0928\u0947 \u092b\u0947\u092c\u094d\u0930\u0941 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917 \u0938\u092a\u094d\u091f\u0947\u0902 \u0911\u0915\u094d\u091f\u094b \u0928\u094b\u0935\u094d\u0939\u0947\u0902 \u0921\u093f\u0938\u0947\u0902".split(" "),
    WEEKDAYS: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0933\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
    STANDALONEWEEKDAYS: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0933\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0941\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
    SHORTWEEKDAYS: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0933 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0933 \u092c\u0941\u0927 \u0917\u0941\u0930\u0941 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    NARROWWEEKDAYS: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
    SHORTQUARTERS: ["\u0924\u093f1", "\u0924\u093f2", "\u0924\u093f3", "\u0924\u093f4"],
    QUARTERS: ["\u092a\u094d\u0930\u0925\u092e \u0924\u093f\u092e\u093e\u0939\u0940", "\u0926\u094d\u0935\u093f\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940", "\u0924\u0943\u0924\u0940\u092f \u0924\u093f\u092e\u093e\u0939\u0940", "\u091a\u0924\u0941\u0930\u094d\u0925 \u0924\u093f\u092e\u093e\u0939\u0940"],
    AMPMS: ["[AM]", "[PM]"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} '\u0930\u094b\u091c\u0940' {0}", "{1} '\u0930\u094b\u091c\u0940' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_ms = {
    ERAS: ["S.M.", "TM"],
    ERANAMES: ["S.M.", "TM"],
    NARROWMONTHS: "JFMAMJJOSOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJOSOND".split(""),
    MONTHS: "Januari Februari Mac April Mei Jun Julai Ogos September Oktober November Disember".split(" "),
    STANDALONEMONTHS: "Januari Februari Mac April Mei Jun Julai Ogos September Oktober November Disember".split(" "),
    SHORTMONTHS: "Jan Feb Mac Apr Mei Jun Jul Ogo Sep Okt Nov Dis".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mac Apr Mei Jun Jul Ogo Sep Okt Nov Dis".split(" "),
    WEEKDAYS: "Ahad Isnin Selasa Rabu Khamis Jumaat Sabtu".split(" "),
    STANDALONEWEEKDAYS: "Ahad Isnin Selasa Rabu Khamis Jumaat Sabtu".split(" "),
    SHORTWEEKDAYS: "Ahd Isn Sel Rab Kha Jum Sab".split(" "),
    STANDALONESHORTWEEKDAYS: "Ahd Isn Sel Rab Kha Jum Sab".split(" "),
    NARROWWEEKDAYS: "AISRKJS".split(""),
    STANDALONENARROWWEEKDAYS: "AISRKJS".split(""),
    SHORTQUARTERS: ["S1", "S2", "S3", "S4"],
    QUARTERS: ["Suku pertama", "Suku Ke-2", "Suku Ke-3", "Suku Ke-4"],
    AMPMS: ["PG", "PTG"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/MM/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_mt = {
    ERAS: ["QK", "WK"],
    ERANAMES: ["Qabel Kristu", "Wara Kristu"],
    NARROWMONTHS: "JFMAM\u0120LASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAM\u0120LASOND".split(""),
    MONTHS: "Jannar Frar Marzu April Mejju \u0120unju Lulju Awwissu Settembru Ottubru Novembru Di\u010bembru".split(" "),
    STANDALONEMONTHS: "Jannar Frar Marzu April Mejju \u0120unju Lulju Awwissu Settembru Ottubru Novembru Di\u010bembru".split(" "),
    SHORTMONTHS: "Jan Fra Mar Apr Mej \u0120un Lul Aww Set Ott Nov Di\u010b".split(" "),
    STANDALONESHORTMONTHS: "Jan Fra Mar Apr Mej \u0120un Lul Aww Set Ott Nov Di\u010b".split(" "),
    WEEKDAYS: "Il-\u0126add It-Tnejn It-Tlieta L-Erbg\u0127a Il-\u0126amis Il-\u0120img\u0127a Is-Sibt".split(" "),
    STANDALONEWEEKDAYS: "Il-\u0126add It-Tnejn It-Tlieta L-Erbg\u0127a Il-\u0126amis Il-\u0120img\u0127a Is-Sibt".split(" "),
    SHORTWEEKDAYS: "\u0126ad Tne Tli Erb \u0126am \u0120im Sib".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0126ad Tne Tli Erb \u0126am \u0120im Sib".split(" "),
    NARROWWEEKDAYS: "\u0126TTE\u0126\u0120S".split(""),
    STANDALONENARROWWEEKDAYS: "\u0126TTE\u0126\u0120S".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["K1", "K2", "K3", "K4"],
    AMPMS: ["QN", "WN"],
    DATEFORMATS: ["EEEE, d 'ta'\u2019 MMMM y", "d 'ta'\u2019 MMMM y", "dd MMM y", "dd/MM/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_my = {
    ZERODIGIT: 4160,
    ERAS: ["\u1018\u102e\u1005\u102e", "\u1021\u1031\u1012\u102e"],
    ERANAMES: ["\u1001\u101b\u1005\u103a\u1010\u1031\u102c\u103a \u1019\u1015\u1031\u102b\u103a\u1019\u102e\u1000\u102c\u101c", "\u1001\u101b\u1005\u103a\u1010\u1031\u102c\u103a \u1015\u1031\u102b\u103a\u1011\u103d\u1014\u103a\u1038\u1015\u103c\u102e\u1038\u1000\u102c\u101c"],
    NARROWMONTHS: "\u1007\u1016\u1019\u1027\u1019\u1007\u1007\u1029\u1005\u1021\u1014\u1012".split(""),
    STANDALONENARROWMONTHS: "\u1007\u1016\u1019\u1027\u1019\u1007\u1007\u1029\u1005\u1021\u1014\u1012".split(""),
    MONTHS: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
    STANDALONEMONTHS: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
    SHORTMONTHS: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
    STANDALONESHORTMONTHS: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u1029\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
    WEEKDAYS: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
    STANDALONEWEEKDAYS: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
    SHORTWEEKDAYS: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
    STANDALONESHORTWEEKDAYS: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
    NARROWWEEKDAYS: "\u1010\u1010\u1021\u1017\u1000\u101e\u1005".split(""),
    STANDALONENARROWWEEKDAYS: "\u1010\u1010\u1021\u1017\u1000\u101e\u1005".split(""),
    SHORTQUARTERS: ["\u1015\u1011\u1019 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1012\u102f\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1010\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1005\u1010\u102f\u1010\u1039\u1011 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a"],
    QUARTERS: ["\u1015\u1011\u1019 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1012\u102f\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1010\u1010\u102d\u101a \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a", "\u1005\u1010\u102f\u1010\u1039\u1011 \u101e\u102f\u1036\u1038\u101c\u1015\u1010\u103a"],
    AMPMS: ["\u1014\u1036\u1014\u1000\u103a", "\u100a\u1014\u1031"],
    DATEFORMATS: ["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yy/MM/dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1}\u1019\u103e\u102c {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_nb = {
    ERAS: ["f.Kr.", "e.Kr."],
    ERANAMES: ["f.Kr.", "e.Kr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
    STANDALONEMONTHS: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
    SHORTMONTHS: "jan. feb. mar. apr. mai jun. jul. aug. sep. okt. nov. des.".split(" "),
    STANDALONESHORTMONTHS: "jan feb mar apr mai jun jul aug sep okt nov des".split(" "),
    WEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    STANDALONEWEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    SHORTWEEKDAYS: "s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),
    STANDALONESHORTWEEKDAYS: "s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),
    NARROWWEEKDAYS: "SMTOTFL".split(""),
    STANDALONENARROWWEEKDAYS: "SMTOTFL".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
    AMPMS: ["a.m.", "p.m."],
    DATEFORMATS: ["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} 'kl.' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_ne = {
    ZERODIGIT: 2406,
    ERAS: ["\u0908\u0938\u093e \u092a\u0942\u0930\u094d\u0935", "\u0938\u0928\u094d"],
    ERANAMES: ["\u0908\u0938\u093e \u092a\u0942\u0930\u094d\u0935", "\u0938\u0928\u094d"],
    NARROWMONTHS: "\u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0967\u0966 \u0967\u0967 \u0967\u0968".split(" "),
    STANDALONENARROWMONTHS: "\u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0967\u0966 \u0967\u0967 \u0967\u0968".split(" "),
    MONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
    STANDALONEMONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
    SHORTMONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
    STANDALONESHORTMONTHS: "\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
    WEEKDAYS: "\u0906\u0907\u0924\u092c\u093e\u0930 \u0938\u094b\u092e\u092c\u093e\u0930 \u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930 \u092c\u0941\u0927\u092c\u093e\u0930 \u092c\u093f\u0939\u0940\u092c\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930 \u0936\u0928\u093f\u092c\u093e\u0930".split(" "),
    STANDALONEWEEKDAYS: "\u0906\u0907\u0924\u092c\u093e\u0930 \u0938\u094b\u092e\u092c\u093e\u0930 \u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930 \u092c\u0941\u0927\u092c\u093e\u0930 \u092c\u093f\u0939\u0940\u092c\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930 \u0936\u0928\u093f\u092c\u093e\u0930".split(" "), SHORTWEEKDAYS: "\u0906\u0907\u0924 \u0938\u094b\u092e \u092e\u0919\u094d\u0917\u0932 \u092c\u0941\u0927 \u092c\u093f\u0939\u0940 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0906\u0907\u0924 \u0938\u094b\u092e \u092e\u0919\u094d\u0917\u0932 \u092c\u0941\u0927 \u092c\u093f\u0939\u0940 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
    NARROWWEEKDAYS: "\u0906 \u0938\u094b \u092e \u092c\u0941 \u092c\u093f \u0936\u0941 \u0936".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0906 \u0938\u094b \u092e \u092c\u0941 \u092c\u093f \u0936\u0941 \u0936".split(" "),
    SHORTQUARTERS: ["\u092a\u0939\u093f\u0932\u094b \u0938\u0924\u094d\u0930", "\u0926\u094b\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930", "\u0924\u0947\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930", "\u091a\u094c\u0925\u094b \u0938\u0924\u094d\u0930"],
    QUARTERS: ["\u092a\u0939\u093f\u0932\u094b \u0938\u0924\u094d\u0930", "\u0926\u094b\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930", "\u0924\u0947\u0938\u094d\u0930\u094b \u0938\u0924\u094d\u0930", "\u091a\u094c\u0925\u094b \u0938\u0924\u094d\u0930"],
    AMPMS: ["\u092a\u0942\u0930\u094d\u0935 \u092e\u0927\u094d\u092f\u093e\u0928\u094d\u0939", "\u0909\u0924\u094d\u0924\u0930 \u092e\u0927\u094d\u092f\u093e\u0928\u094d\u0939"],
    DATEFORMATS: ["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_nl = {
    ERAS: ["v.Chr.", "n.Chr."],
    ERANAMES: ["Voor Christus", "na Christus"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "januari februari maart april mei juni juli augustus september oktober november december".split(" "),
    STANDALONEMONTHS: "januari februari maart april mei juni juli augustus september oktober november december".split(" "),
    SHORTMONTHS: "jan. feb. mrt. apr. mei jun. jul. aug. sep. okt. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),
    WEEKDAYS: "zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),
    STANDALONEWEEKDAYS: "zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),
    SHORTWEEKDAYS: "zo ma di wo do vr za".split(" "),
    STANDALONESHORTWEEKDAYS: "zo ma di wo do vr za".split(" "),
    NARROWWEEKDAYS: "ZMDWDVZ".split(""),
    STANDALONENARROWWEEKDAYS: "ZMDWDVZ".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_no = {
    ERAS: ["f.Kr.", "e.Kr."],
    ERANAMES: ["f.Kr.", "e.Kr."],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
    STANDALONEMONTHS: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
    SHORTMONTHS: "jan. feb. mar. apr. mai jun. jul. aug. sep. okt. nov. des.".split(" "),
    STANDALONESHORTMONTHS: "jan feb mar apr mai jun jul aug sep okt nov des".split(" "),
    WEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    STANDALONEWEEKDAYS: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
    SHORTWEEKDAYS: "s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),
    STANDALONESHORTWEEKDAYS: "s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),
    NARROWWEEKDAYS: "SMTOTFL".split(""),
    STANDALONENARROWWEEKDAYS: "SMTOTFL".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
    AMPMS: ["a.m.", "p.m."],
    DATEFORMATS: ["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} 'kl.' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_no_NO = g.i18n.DateTimeSymbols_no;

g.i18n.DateTimeSymbols_or = {
    ERAS: ["BCE", "CE"],
    ERANAMES: ["BCE", "CE"],
    NARROWMONTHS: "\u0b1c\u0b3e \u0b2b\u0b47 \u0b2e\u0b3e \u0b05 \u0b2e\u0b47 \u0b1c\u0b41 \u0b1c\u0b41 \u0b05 \u0b38\u0b47 \u0b05 \u0b28 \u0b21\u0b3f".split(" "),
    STANDALONENARROWMONTHS: "\u0b1c\u0b3e \u0b2b\u0b47 \u0b2e\u0b3e \u0b05 \u0b2e\u0b47 \u0b1c\u0b41 \u0b1c\u0b41 \u0b05 \u0b38\u0b47 \u0b05 \u0b28 \u0b21\u0b3f".split(" "),
    MONTHS: "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40 \u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40 \u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a \u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32 \u0b2e\u0b47 \u0b1c\u0b41\u0b28 \u0b1c\u0b41\u0b32\u0b3e\u0b07 \u0b05\u0b17\u0b37\u0b4d\u0b1f \u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30 \u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(" "),
    STANDALONEMONTHS: "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40 \u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40 \u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a \u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32 \u0b2e\u0b47 \u0b1c\u0b41\u0b28 \u0b1c\u0b41\u0b32\u0b3e\u0b07 \u0b05\u0b17\u0b37\u0b4d\u0b1f \u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30 \u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(" "),
    SHORTMONTHS: "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40 \u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40 \u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a \u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32 \u0b2e\u0b47 \u0b1c\u0b41\u0b28 \u0b1c\u0b41\u0b32\u0b3e\u0b07 \u0b05\u0b17\u0b37\u0b4d\u0b1f \u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30 \u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(" "),
    STANDALONESHORTMONTHS: "\u0b1c\u0b3e\u0b28\u0b41\u0b06\u0b30\u0b40 \u0b2b\u0b47\u0b2c\u0b4d\u0b30\u0b41\u0b5f\u0b3e\u0b30\u0b40 \u0b2e\u0b3e\u0b30\u0b4d\u0b1a\u0b4d\u0b1a \u0b05\u0b2a\u0b4d\u0b30\u0b47\u0b32 \u0b2e\u0b47 \u0b1c\u0b41\u0b28 \u0b1c\u0b41\u0b32\u0b3e\u0b07 \u0b05\u0b17\u0b37\u0b4d\u0b1f \u0b38\u0b47\u0b2a\u0b4d\u0b1f\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b05\u0b15\u0b4d\u0b1f\u0b4b\u0b2c\u0b30 \u0b28\u0b2d\u0b47\u0b2e\u0b4d\u0b2c\u0b30 \u0b21\u0b3f\u0b38\u0b47\u0b2e\u0b4d\u0b2c\u0b30".split(" "),
    WEEKDAYS: "\u0b30\u0b2c\u0b3f\u0b2c\u0b3e\u0b30 \u0b38\u0b4b\u0b2e\u0b2c\u0b3e\u0b30 \u0b2e\u0b19\u0b4d\u0b17\u0b33\u0b2c\u0b3e\u0b30 \u0b2c\u0b41\u0b27\u0b2c\u0b3e\u0b30 \u0b17\u0b41\u0b30\u0b41\u0b2c\u0b3e\u0b30 \u0b36\u0b41\u0b15\u0b4d\u0b30\u0b2c\u0b3e\u0b30 \u0b36\u0b28\u0b3f\u0b2c\u0b3e\u0b30".split(" "),
    STANDALONEWEEKDAYS: "\u0b30\u0b2c\u0b3f\u0b2c\u0b3e\u0b30 \u0b38\u0b4b\u0b2e\u0b2c\u0b3e\u0b30 \u0b2e\u0b19\u0b4d\u0b17\u0b33\u0b2c\u0b3e\u0b30 \u0b2c\u0b41\u0b27\u0b2c\u0b3e\u0b30 \u0b17\u0b41\u0b30\u0b41\u0b2c\u0b3e\u0b30 \u0b36\u0b41\u0b15\u0b4d\u0b30\u0b2c\u0b3e\u0b30 \u0b36\u0b28\u0b3f\u0b2c\u0b3e\u0b30".split(" "),
    SHORTWEEKDAYS: "\u0b30\u0b2c\u0b3f \u0b38\u0b4b\u0b2e \u0b2e\u0b19\u0b4d\u0b17\u0b33 \u0b2c\u0b41\u0b27 \u0b17\u0b41\u0b30\u0b41 \u0b36\u0b41\u0b15\u0b4d\u0b30 \u0b36\u0b28\u0b3f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0b30\u0b2c\u0b3f \u0b38\u0b4b\u0b2e \u0b2e\u0b19\u0b4d\u0b17\u0b33 \u0b2c\u0b41\u0b27 \u0b17\u0b41\u0b30\u0b41 \u0b36\u0b41\u0b15\u0b4d\u0b30 \u0b36\u0b28\u0b3f".split(" "), NARROWWEEKDAYS: "\u0b30 \u0b38\u0b4b \u0b2e \u0b2c\u0b41 \u0b17\u0b41 \u0b36\u0b41 \u0b36".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0b30 \u0b38\u0b4b \u0b2e \u0b2c\u0b41 \u0b17\u0b41 \u0b36\u0b41 \u0b36".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    AMPMS: ["am", "pm"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d-M-yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_pa = {
    ERAS: ["\u0a08. \u0a2a\u0a42.", "\u0a38\u0a70\u0a28"],
    ERANAMES: ["\u0a08. \u0a2a\u0a42.", "\u0a38\u0a70\u0a28"],
    NARROWMONTHS: "\u0a1c \u0a2b\u0a3c \u0a2e\u0a3e \u0a05 \u0a2e \u0a1c\u0a42 \u0a1c\u0a41 \u0a05 \u0a38 \u0a05 \u0a28 \u0a26".split(" "),
    STANDALONENARROWMONTHS: "\u0a1c \u0a2b\u0a3c \u0a2e\u0a3e \u0a05 \u0a2e \u0a1c\u0a42 \u0a1c\u0a41 \u0a05 \u0a38 \u0a05 \u0a28 \u0a26".split(" "),
    MONTHS: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
    STANDALONEMONTHS: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
    SHORTMONTHS: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
    STANDALONESHORTMONTHS: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
    WEEKDAYS: "\u0a10\u0a24\u0a35\u0a3e\u0a30 \u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30 \u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30 \u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30 \u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a28\u0a40\u0a35\u0a3e\u0a30".split(" "),
    STANDALONEWEEKDAYS: "\u0a10\u0a24\u0a35\u0a3e\u0a30 \u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30 \u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30 \u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30 \u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a28\u0a40\u0a35\u0a3e\u0a30".split(" "),
    SHORTWEEKDAYS: "\u0a10\u0a24. \u0a38\u0a4b\u0a2e. \u0a2e\u0a70\u0a17\u0a32. \u0a2c\u0a41\u0a27. \u0a35\u0a40\u0a30. \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30. \u0a38\u0a3c\u0a28\u0a40.".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0a10\u0a24. \u0a38\u0a4b\u0a2e. \u0a2e\u0a70\u0a17\u0a32. \u0a2c\u0a41\u0a27. \u0a35\u0a40\u0a30. \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30. \u0a38\u0a3c\u0a28\u0a40.".split(" "),
    NARROWWEEKDAYS: "\u0a10 \u0a38\u0a4b \u0a2e\u0a70 \u0a2c\u0a41\u0a71 \u0a35\u0a40 \u0a38\u0a3c\u0a41\u0a71 \u0a38\u0a3c".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0a10 \u0a38\u0a4b \u0a2e\u0a70 \u0a2c\u0a41\u0a71 \u0a35\u0a40 \u0a38\u0a3c\u0a41\u0a71 \u0a38\u0a3c".split(" "),
    SHORTQUARTERS: ["\u0a2a\u0a0a\u0a06", "\u0a05\u0a71\u0a27\u0a3e", "\u0a2a\u0a4c\u0a23\u0a3e", "\u0a2a\u0a42\u0a30\u0a3e"],
    QUARTERS: ["\u0a2a\u0a0a\u0a06", "\u0a05\u0a71\u0a27\u0a3e", "\u0a2a\u0a4c\u0a23\u0a3e", "\u0a2a\u0a42\u0a30\u0a3e"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_pl = {
    ERAS: ["p.n.e.", "n.e."],
    ERANAMES: ["p.n.e.", "n.e."],
    NARROWMONTHS: "slmkmclswplg".split(""),
    STANDALONENARROWMONTHS: "slmkmclswplg".split(""),
    MONTHS: "stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" "),
    STANDALONEMONTHS: "stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),
    SHORTMONTHS: "sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
    STANDALONESHORTMONTHS: "sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
    WEEKDAYS: "niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),
    STANDALONEWEEKDAYS: "niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),
    SHORTWEEKDAYS: "niedz. pon. wt. \u015br. czw. pt. sob.".split(" "),
    STANDALONESHORTWEEKDAYS: "niedz. pon. wt. \u015br. czw. pt. sob.".split(" "),
    NARROWWEEKDAYS: "NPW\u015aCPS".split(""),
    STANDALONENARROWWEEKDAYS: "NPW\u015aCPS".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["I kwarta\u0142", "II kwarta\u0142", "III kwarta\u0142", "IV kwarta\u0142"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_pt = {
    ERAS: ["a.C.", "d.C."],
    ERANAMES: ["Antes de Cristo", "Ano do Senhor"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),
    STANDALONEMONTHS: "janeiro fevereiro mar\u00e7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),
    SHORTMONTHS: "jan fev mar abr mai jun jul ago set out nov dez".split(" "),
    STANDALONESHORTMONTHS: "jan fev mar abr mai jun jul ago set out nov dez".split(" "),
    WEEKDAYS: "domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
    STANDALONEWEEKDAYS: "domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
    SHORTWEEKDAYS: "dom seg ter qua qui sex s\u00e1b".split(" "),
    STANDALONESHORTWEEKDAYS: "dom seg ter qua qui sex s\u00e1b".split(" "),
    NARROWWEEKDAYS: "DSTQQSS".split(""),
    STANDALONENARROWWEEKDAYS: "DSTQQSS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_pt_BR = g.i18n.DateTimeSymbols_pt;

g.i18n.DateTimeSymbols_pt_PT = {
    ERAS: ["a.C.", "d.C."],
    ERANAMES: ["Antes de Cristo", "Ano do Senhor"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
    STANDALONEMONTHS: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
    SHORTMONTHS: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
    STANDALONESHORTMONTHS: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
    WEEKDAYS: "domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
    STANDALONEWEEKDAYS: "domingo segunda-feira ter\u00e7a-feira quarta-feira quinta-feira sexta-feira s\u00e1bado".split(" "),
    SHORTWEEKDAYS: "dom seg ter qua qui sex s\u00e1b".split(" "),
    STANDALONESHORTWEEKDAYS: "dom seg ter qua qui sex s\u00e1b".split(" "),
    NARROWWEEKDAYS: "DSTQQSS".split(""),
    STANDALONENARROWWEEKDAYS: "DSTQQSS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["1.\u00ba trimestre", "2.\u00ba trimestre", "3.\u00ba trimestre", "4.\u00ba trimestre"],
    AMPMS: ["da manh\u00e3", "da tarde"],
    DATEFORMATS: ["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} '\u00e0s' {0}", "{1} '\u00e0s' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_ro = {
    ERAS: ["\u00ee.Hr.", "d.Hr."],
    ERANAMES: ["\u00eenainte de Hristos", "dup\u0103 Hristos"],
    NARROWMONTHS: "IFMAMIIASOND".split(""),
    STANDALONENARROWMONTHS: "IFMAMIIASOND".split(""),
    MONTHS: "ianuarie februarie martie aprilie mai iunie iulie august septembrie octombrie noiembrie decembrie".split(" "),
    STANDALONEMONTHS: "ianuarie februarie martie aprilie mai iunie iulie august septembrie octombrie noiembrie decembrie".split(" "),
    SHORTMONTHS: "ian. feb. mar. apr. mai iun. iul. aug. sept. oct. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "ian. feb. mar. apr. mai iun. iul. aug. sept. oct. nov. dec.".split(" "),
    WEEKDAYS: "duminic\u0103 luni mar\u021bi miercuri joi vineri s\u00e2mb\u0103t\u0103".split(" "),
    STANDALONEWEEKDAYS: "duminic\u0103 luni mar\u021bi miercuri joi vineri s\u00e2mb\u0103t\u0103".split(" "),
    SHORTWEEKDAYS: "Dum Lun Mar Mie Joi Vin S\u00e2m".split(" "),
    STANDALONESHORTWEEKDAYS: "Dum Lun Mar Mie Joi Vin S\u00e2m".split(" "),
    NARROWWEEKDAYS: "DLMMJVS".split(""),
    STANDALONENARROWWEEKDAYS: "DLMMJVS".split(""),
    SHORTQUARTERS: ["trim. I", "trim. II", "trim. III", "trim. IV"],
    QUARTERS: ["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"],
    AMPMS: ["a.m.", "p.m."], DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ru = {
    ERAS: ["\u0434\u043e \u043d. \u044d.", "\u043d. \u044d."],
    ERANAMES: ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."],
    NARROWMONTHS: "\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),
    STANDALONENARROWMONTHS: "\u042f\u0424\u041c\u0410\u041c\u0418\u0418\u0410\u0421\u041e\u041d\u0414".split(""),
    MONTHS: "\u044f\u043d\u0432\u0430\u0440\u044f \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043c\u0430\u0440\u0442\u0430 \u0430\u043f\u0440\u0435\u043b\u044f \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043d\u043e\u044f\u0431\u0440\u044f \u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(" "),
    STANDALONEMONTHS: "\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),
    SHORTMONTHS: "\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442\u0430 \u0430\u043f\u0440. \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),
    STANDALONESHORTMONTHS: "\u042f\u043d\u0432. \u0424\u0435\u0432\u0440. \u041c\u0430\u0440\u0442 \u0410\u043f\u0440. \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433. \u0421\u0435\u043d\u0442. \u041e\u043a\u0442. \u041d\u043e\u044f\u0431. \u0414\u0435\u043a.".split(" "),
    WEEKDAYS: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
    SHORTWEEKDAYS: "\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),
    NARROWWEEKDAYS: "\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0412\u041f\u0412\u0421\u0427\u041f\u0421".split(""),
    SHORTQUARTERS: ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."],
    QUARTERS: ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y '\u0433'.", "d MMMM y '\u0433'.", "d MMM y '\u0433'.", "dd.MM.yy"],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_si = {
    ERAS: ["\u0d9a\u0dca\u200d\u0dbb\u0dd2.\u0db4\u0dd6.", "\u0d9a\u0dca\u200d\u0dbb\u0dd2.\u0dc0."],
    ERANAMES: ["\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dc3\u0dca\u0dad\u0dd4 \u0db4\u0dd6\u0dbb\u0dca\u200d\u0dc0", "\u0d9a\u0dca\u200d\u0dbb\u0dd2\u0dc3\u0dca\u0dad\u0dd4 \u0dc0\u0dbb\u0dca\u200d\u0dc2"],
    NARROWMONTHS: "\u0da2 \u0db4\u0dd9 \u0db8\u0dcf \u0d85 \u0db8\u0dd0 \u0da2\u0dd6 \u0da2\u0dd6 \u0d85 \u0dc3\u0dd0 \u0d94 \u0db1\u0dd9 \u0daf\u0dd9".split(" "),
    STANDALONENARROWMONTHS: "\u0da2 \u0db4\u0dd9 \u0db8\u0dcf \u0d85 \u0db8\u0dd0 \u0da2\u0dd6 \u0da2\u0dd6 \u0d85 \u0dc3\u0dd0 \u0d94 \u0db1\u0dd9 \u0daf\u0dd9".split(" "),
    MONTHS: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2 \u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2 \u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4 \u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4 \u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca \u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split(" "),
    STANDALONEMONTHS: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2 \u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2 \u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4 \u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4 \u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca \u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split(" "),
    SHORTMONTHS: "\u0da2\u0db1 \u0db4\u0dd9\u0db6 \u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4 \u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd \u0dc3\u0dd0\u0db4\u0dca \u0d94\u0d9a\u0dca \u0db1\u0ddc\u0dc0\u0dd0 \u0daf\u0dd9\u0dc3\u0dd0".split(" "),
    STANDALONESHORTMONTHS: "\u0da2\u0db1 \u0db4\u0dd9\u0db6 \u0db8\u0dcf\u0dbb\u0dca \u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd \u0dc3\u0dd0\u0db4\u0dca \u0d94\u0d9a\u0dca \u0db1\u0ddc\u0dc0\u0dd0 \u0daf\u0dd9\u0dc3\u0dd0".split(" "),
    WEEKDAYS: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf \u0dc3\u0db3\u0dd4\u0daf\u0dcf \u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf \u0db6\u0daf\u0dcf\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf \u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf \u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split(" "),
    STANDALONEWEEKDAYS: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf \u0dc3\u0db3\u0dd4\u0daf\u0dcf \u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf \u0db6\u0daf\u0dcf\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf \u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf \u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split(" "),
    SHORTWEEKDAYS: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf \u0dc3\u0db3\u0dd4\u0daf\u0dcf \u0d85\u0d9f\u0dc4 \u0db6\u0daf\u0dcf\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca \u0dc3\u0dd2\u0d9a\u0dd4 \u0dc3\u0dd9\u0db1".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf \u0dc3\u0db3\u0dd4\u0daf\u0dcf \u0d85\u0d9f\u0dc4 \u0db6\u0daf\u0dcf\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca \u0dc3\u0dd2\u0d9a\u0dd4 \u0dc3\u0dd9\u0db1".split(" "),
    NARROWWEEKDAYS: "\u0d89 \u0dc3 \u0d85 \u0db6 \u0db6\u0dca\u200d\u0dbb \u0dc3\u0dd2 \u0dc3\u0dd9".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0d89 \u0dc3 \u0d85 \u0db6 \u0db6\u0dca\u200d\u0dbb \u0dc3\u0dd2 \u0dc3\u0dd9".split(" "),
    SHORTQUARTERS: ["\u0d9a\u0dcf\u0dbb\u0dca:1", "\u0d9a\u0dcf\u0dbb\u0dca:2", "\u0d9a\u0dcf\u0dbb\u0dca:3", "\u0d9a\u0dcf\u0dbb\u0dca:4"],
    QUARTERS: ["1 \u0dc0\u0db1 \u0d9a\u0dcf\u0dbb\u0dca\u0dad\u0dd4\u0dc0", "2 \u0dc0\u0db1 \u0d9a\u0dcf\u0dbb\u0dca\u0dad\u0dd4\u0dc0", "3 \u0dc0\u0db1 \u0d9a\u0dcf\u0dbb\u0dca\u0dad\u0dd4\u0dc0", "4 \u0dc0\u0db1 \u0d9a\u0dcf\u0dbb\u0dca\u0dad\u0dd4\u0dc0"], AMPMS: ["\u0db4\u0dd9.\u0dc0.", "\u0db4.\u0dc0."],
    DATEFORMATS: ["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"],
    TIMEFORMATS: ["a h.mm.ss zzzz", "a h.mm.ss z", "a h.mm.ss", "a h.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_sk = {
    ERAS: ["pred n.l.", "n.l."],
    ERANAMES: ["pred n.l.", "n.l."],
    NARROWMONTHS: "jfmamjjasond".split(""),
    STANDALONENARROWMONTHS: "jfmamjjasond".split(""),
    MONTHS: "janu\u00e1ra febru\u00e1ra marca apr\u00edla m\u00e1ja j\u00fana j\u00fala augusta septembra okt\u00f3bra novembra decembra".split(" "),
    STANDALONEMONTHS: "janu\u00e1r febru\u00e1r marec apr\u00edl m\u00e1j j\u00fan j\u00fal august september okt\u00f3ber november december".split(" "),
    SHORTMONTHS: "jan feb mar apr m\u00e1j j\u00fan j\u00fal aug sep okt nov dec".split(" "),
    STANDALONESHORTMONTHS: "jan feb mar apr m\u00e1j j\u00fan j\u00fal aug sep okt nov dec".split(" "),
    WEEKDAYS: "nede\u013ea pondelok utorok streda \u0161tvrtok piatok sobota".split(" "),
    STANDALONEWEEKDAYS: "nede\u013ea pondelok utorok streda \u0161tvrtok piatok sobota".split(" "),
    SHORTWEEKDAYS: "ne po ut st \u0161t pi so".split(" "),
    STANDALONESHORTWEEKDAYS: "ne po ut st \u0161t pi so".split(" "),
    NARROWWEEKDAYS: "NPUS\u0160PS".split(""),
    STANDALONENARROWWEEKDAYS: "NPUS\u0160PS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. \u0161tvr\u0165rok", "2. \u0161tvr\u0165rok", "3. \u0161tvr\u0165rok", "4. \u0161tvr\u0165rok"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d. MMMM y", "d. MMMM y", "d.M.y", "d.M.y"],
    TIMEFORMATS: ["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_sl = {
    ERAS: ["pr. n. \u0161t.", "po Kr."],
    ERANAMES: ["pred na\u0161im \u0161tetjem", "na\u0161e \u0161tetje"],
    NARROWMONTHS: "jfmamjjasond".split(""),
    STANDALONENARROWMONTHS: "jfmamjjasond".split(""),
    MONTHS: "januar februar marec april maj junij julij avgust september oktober november december".split(" "),
    STANDALONEMONTHS: "januar februar marec april maj junij julij avgust september oktober november december".split(" "),
    SHORTMONTHS: "jan. feb. mar. apr. maj jun. jul. avg. sep. okt. nov. dec.".split(" "),
    STANDALONESHORTMONTHS: "jan feb mar apr maj jun jul avg sep okt nov dec".split(" "),
    WEEKDAYS: "nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),
    STANDALONEWEEKDAYS: "nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),
    SHORTWEEKDAYS: "ned. pon. tor. sre. \u010det. pet. sob.".split(" "),
    STANDALONESHORTWEEKDAYS: "ned pon tor sre \u010det pet sob".split(" "),
    NARROWWEEKDAYS: "npts\u010dps".split(""),
    STANDALONENARROWWEEKDAYS: "npts\u010dps".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["1. \u010detrtletje", "2. \u010detrtletje", "3. \u010detrtletje", "4. \u010detrtletje"],
    AMPMS: ["dop.", "pop."],
    DATEFORMATS: ["EEEE, dd. MMMM y", "dd. MMMM y", "d. MMM y", "d. MM. yy"],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_sq = {
    ERAS: ["p.e.r.", "e.r."],
    ERANAMES: ["para er\u00ebs s\u00eb re", "er\u00ebs s\u00eb re"],
    NARROWMONTHS: "JSMPMQKGSTND".split(""),
    STANDALONENARROWMONTHS: "JSMPMQKGSTND".split(""),
    MONTHS: "janar shkurt mars prill maj qershor korrik gusht shtator tetor n\u00ebntor dhjetor".split(" "),
    STANDALONEMONTHS: "janar shkurt mars prill maj qershor korrik gusht shtator tetor n\u00ebntor dhjetor".split(" "),
    SHORTMONTHS: "Jan Shk Mar Pri Maj Qer Kor Gsh Sht Tet N\u00ebn Dhj".split(" "),
    STANDALONESHORTMONTHS: "Jan Shk Mar Pri Maj Qer Kor Gsh Sht Tet N\u00ebn Dhj".split(" "),
    WEEKDAYS: "e diel;e h\u00ebn\u00eb;e mart\u00eb;e m\u00ebrkur\u00eb;e enjte;e premte;e shtun\u00eb".split(";"),
    STANDALONEWEEKDAYS: "e diel;e h\u00ebn\u00eb;e mart\u00eb;e m\u00ebrkur\u00eb;e enjte;e premte;e shtun\u00eb".split(";"),
    SHORTWEEKDAYS: "Die H\u00ebn Mar M\u00ebr Enj Pre Sht".split(" "),
    STANDALONESHORTWEEKDAYS: "Die H\u00ebn Mar M\u00ebr Enj Pre Sht".split(" "),
    NARROWWEEKDAYS: "DHMMEPS".split(""),
    STANDALONENARROWWEEKDAYS: "DHMMEPS".split(""),
    SHORTQUARTERS: ["T1", "T2", "T3", "T4"],
    QUARTERS: ["tremujori i par\u00eb", "tremujori i dyt\u00eb", "tremujori i tret\u00eb", "tremujori i kat\u00ebrt"],
    AMPMS: ["paradite", "pasdite"],
    DATEFORMATS: ["EEEE, dd MMMM y", "dd MMMM y", "dd/MM/y", "dd/MM/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} 'n\u00eb' {0}", "{1} 'n\u00eb' {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_sr = {
    ERAS: ["\u043f. \u043d. \u0435.", "\u043d. \u0435."],
    ERANAMES: ["\u041f\u0440\u0435 \u043d\u043e\u0432\u0435 \u0435\u0440\u0435", "\u041d\u043e\u0432\u0435 \u0435\u0440\u0435"],
    NARROWMONTHS: "\u0458\u0444\u043c\u0430\u043c\u0458\u0458\u0430\u0441\u043e\u043d\u0434".split(""),
    STANDALONENARROWMONTHS: "\u0458\u0444\u043c\u0430\u043c\u0458\u0458\u0430\u0441\u043e\u043d\u0434".split(""),
    MONTHS: "\u0458\u0430\u043d\u0443\u0430\u0440 \u0444\u0435\u0431\u0440\u0443\u0430\u0440 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440 \u043e\u043a\u0442\u043e\u0431\u0430\u0440 \u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440 \u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(" "),
    STANDALONEMONTHS: "\u0458\u0430\u043d\u0443\u0430\u0440 \u0444\u0435\u0431\u0440\u0443\u0430\u0440 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440 \u043e\u043a\u0442\u043e\u0431\u0430\u0440 \u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440 \u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(" "),
    SHORTMONTHS: "\u0458\u0430\u043d \u0444\u0435\u0431 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433 \u0441\u0435\u043f \u043e\u043a\u0442 \u043d\u043e\u0432 \u0434\u0435\u0446".split(" "),
    STANDALONESHORTMONTHS: "\u0458\u0430\u043d \u0444\u0435\u0431 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433 \u0441\u0435\u043f \u043e\u043a\u0442 \u043d\u043e\u0432 \u0434\u0435\u0446".split(" "),
    WEEKDAYS: "\u043d\u0435\u0434\u0435\u0459\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a \u0443\u0442\u043e\u0440\u0430\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a \u043f\u0435\u0442\u0430\u043a \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u043d\u0435\u0434\u0435\u0459\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a \u0443\u0442\u043e\u0440\u0430\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a \u043f\u0435\u0442\u0430\u043a \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
    SHORTWEEKDAYS: "\u043d\u0435\u0434 \u043f\u043e\u043d \u0443\u0442\u043e \u0441\u0440\u0435 \u0447\u0435\u0442 \u043f\u0435\u0442 \u0441\u0443\u0431".split(" "),
    STANDALONESHORTWEEKDAYS: "\u043d\u0435\u0434 \u043f\u043e\u043d \u0443\u0442\u043e \u0441\u0440\u0435 \u0447\u0435\u0442 \u043f\u0435\u0442 \u0441\u0443\u0431".split(" "),
    NARROWWEEKDAYS: "\u043d\u043f\u0443\u0441\u0447\u043f\u0441".split(""),
    STANDALONENARROWWEEKDAYS: "\u043d\u043f\u0443\u0441\u0447\u043f\u0441".split(""),
    SHORTQUARTERS: ["\u041a1", "\u041a2", "\u041a3", "\u041a4"],
    QUARTERS: ["\u041f\u0440\u0432\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0414\u0440\u0443\u0433\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0422\u0440\u0435\u045b\u0435 \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e \u0442\u0440\u043e\u043c\u0435\u0441\u0435\u0447\u0458\u0435"],
    AMPMS: ["\u043f\u0440\u0435 \u043f\u043e\u0434\u043d\u0435", "\u043f\u043e\u043f\u043e\u0434\u043d\u0435"],
    DATEFORMATS: ["EEEE, dd. MMMM y.", "dd. MMMM y.", "dd.MM.y.", "d.M.yy."],
    TIMEFORMATS: ["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_sv = {
    ERAS: ["f.Kr.", "e.Kr."],
    ERANAMES: ["f\u00f6re Kristus", "efter Kristus"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "januari februari mars april maj juni juli augusti september oktober november december".split(" "),
    STANDALONEMONTHS: "Januari Februari Mars April Maj Juni Juli Augusti September Oktober November December".split(" "),
    SHORTMONTHS: "jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mar Apr Maj Jun Jul Aug Sep Okt Nov Dec".split(" "),
    WEEKDAYS: "s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),
    STANDALONEWEEKDAYS: "S\u00f6ndag M\u00e5ndag Tisdag Onsdag Torsdag Fredag L\u00f6rdag".split(" "),
    SHORTWEEKDAYS: "s\u00f6n m\u00e5n tis ons tors fre l\u00f6r".split(" "),
    STANDALONESHORTWEEKDAYS: "S\u00f6n M\u00e5n Tis Ons Tor Fre L\u00f6r".split(" "),
    NARROWWEEKDAYS: "SMTOTFL".split(""),
    STANDALONENARROWWEEKDAYS: "SMTOTFL".split(""),
    SHORTQUARTERS: ["K1", "K2", "K3", "K4"],
    QUARTERS: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"],
    AMPMS: ["fm", "em"],
    DATEFORMATS: ["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"],
    TIMEFORMATS: ["'kl'. HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 3
};

g.i18n.DateTimeSymbols_sw = {
    ERAS: ["KK", "BK"],
    ERANAMES: ["Kabla ya Kristo", "Baada ya Kristo"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januari Februari Machi Aprili Mei Juni Julai Agosti Septemba Oktoba Novemba Desemba".split(" "),
    STANDALONEMONTHS: "Januari Februari Machi Aprili Mei Juni Julai Agosti Septemba Oktoba Novemba Desemba".split(" "),
    SHORTMONTHS: "Jan Feb Mac Apr Mei Jun Jul Ago Sep Okt Nov Des".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mac Apr Mei Jun Jul Ago Sep Okt Nov Des".split(" "),
    WEEKDAYS: "Jumapili Jumatatu Jumanne Jumatano Alhamisi Ijumaa Jumamosi".split(" "),
    STANDALONEWEEKDAYS: "Jumapili Jumatatu Jumanne Jumatano Alhamisi Ijumaa Jumamosi".split(" "),
    SHORTWEEKDAYS: "Jumapili Jumatatu Jumanne Jumatano Alhamisi Ijumaa Jumamosi".split(" "),
    STANDALONESHORTWEEKDAYS: "Jumapili Jumatatu Jumanne Jumatano Alhamisi Ijumaa Jumamosi".split(" "),
    NARROWWEEKDAYS: "2345AI1".split(""),
    STANDALONENARROWWEEKDAYS: "2345AI1".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Robo 1", "Robo 2", "Robo 3", "Robo 4"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ta = {
    ERAS: ["\u0b95\u0bbf.\u0bae\u0bc1.", "\u0b95\u0bbf.\u0baa\u0bbf."],
    ERANAMES: ["\u0b95\u0bbf\u0bb1\u0bbf\u0bb8\u0bcd\u0ba4\u0bc1\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd", "\u0b85\u0ba9\u0bcb \u0b9f\u0bcb\u0bae\u0bbf\u0ba9\u0bbf"],
    NARROWMONTHS: "\u0b9c \u0baa\u0bbf \u0bae\u0bbe \u0b8f \u0bae\u0bc7 \u0b9c\u0bc2 \u0b9c\u0bc2 \u0b86 \u0b9a\u0bc6 \u0b85 \u0ba8 \u0b9f\u0bbf".split(" "),
    STANDALONENARROWMONTHS: "\u0b9c \u0baa\u0bbf \u0bae\u0bbe \u0b8f \u0bae\u0bc7 \u0b9c\u0bc2 \u0b9c\u0bc2 \u0b86 \u0b9a\u0bc6 \u0b85 \u0ba8 \u0b9f\u0bbf".split(" "),
    MONTHS: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf \u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf \u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd \u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd \u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd \u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(" "),
    STANDALONEMONTHS: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf \u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf \u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd \u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bc1 \u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd \u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(" "),
    SHORTMONTHS: "\u0b9c\u0ba9. \u0baa\u0bbf\u0baa\u0bcd. \u0bae\u0bbe\u0bb0\u0bcd. \u0b8f\u0baa\u0bcd. \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95. \u0b9a\u0bc6\u0baa\u0bcd. \u0b85\u0b95\u0bcd. \u0ba8\u0bb5. \u0b9f\u0bbf\u0b9a.".split(" "),
    STANDALONESHORTMONTHS: "\u0b9c\u0ba9. \u0baa\u0bbf\u0baa\u0bcd. \u0bae\u0bbe\u0bb0\u0bcd. \u0b8f\u0baa\u0bcd. \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95. \u0b9a\u0bc6\u0baa\u0bcd. \u0b85\u0b95\u0bcd. \u0ba8\u0bb5. \u0b9f\u0bbf\u0b9a.".split(" "),
    WEEKDAYS: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1 \u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd \u0baa\u0bc1\u0ba4\u0ba9\u0bcd \u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd \u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf \u0b9a\u0ba9\u0bbf".split(" "),
    STANDALONEWEEKDAYS: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1 \u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd \u0baa\u0bc1\u0ba4\u0ba9\u0bcd \u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd \u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf \u0b9a\u0ba9\u0bbf".split(" "),
    SHORTWEEKDAYS: "\u0b9e\u0bbe \u0ba4\u0bbf \u0b9a\u0bc6 \u0baa\u0bc1 \u0bb5\u0bbf \u0bb5\u0bc6 \u0b9a".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0b9e\u0bbe \u0ba4\u0bbf \u0b9a\u0bc6 \u0baa\u0bc1 \u0bb5\u0bbf \u0bb5\u0bc6 \u0b9a".split(" "),
    NARROWWEEKDAYS: "\u0b9e\u0bbe \u0ba4\u0bbf \u0b9a\u0bc6 \u0baa\u0bc1 \u0bb5\u0bbf \u0bb5\u0bc6 \u0b9a".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0b9e\u0bbe \u0ba4\u0bbf \u0b9a\u0bc6 \u0baa\u0bc1 \u0bb5\u0bbf \u0bb5\u0bc6 \u0b9a".split(" "),
    SHORTQUARTERS: ["\u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc11", "\u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc12", "\u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc13", "\u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc14"],
    QUARTERS: ["\u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "\u0b87\u0bb0\u0ba3\u0bcd\u0b9f\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "\u0bae\u0bc2\u0ba9\u0bcd\u0bb1\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1", "\u0ba8\u0bbe\u0ba9\u0bcd\u0b95\u0bbe\u0bae\u0bcd \u0b95\u0bbe\u0bb2\u0bbe\u0ba3\u0bcd\u0b9f\u0bc1"],
    AMPMS: ["\u0bae\u0bc1\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd", "\u0baa\u0bbf\u0bb1\u0bcd\u0baa\u0b95\u0bb2\u0bcd"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d-M-yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_te = {
    ERAS: ["\u0c15\u0c4d\u0c30\u0c40\u0c2a\u0c42", "\u0c15\u0c4d\u0c30\u0c40\u0c36"],
    ERANAMES: ["\u0c08\u0c38\u0c3e\u0c2a\u0c42\u0c30\u0c4d\u0c35.", "\u0c38\u0c28\u0c4d."],
    NARROWMONTHS: "\u0c1c \u0c2b\u0c3f \u0c2e\u0c3e \u0c0f \u0c2e\u0c47 \u0c1c\u0c42 \u0c1c\u0c41 \u0c06 \u0c38\u0c46 \u0c05 \u0c28 \u0c21\u0c3f".split(" "),
    STANDALONENARROWMONTHS: "\u0c1c \u0c2b\u0c3f \u0c2e\u0c3e \u0c0f \u0c2e\u0c47 \u0c1c\u0c42 \u0c1c\u0c41 \u0c06 \u0c38\u0c46 \u0c05 \u0c28 \u0c21\u0c3f".split(" "),
    MONTHS: "\u0c1c\u0c28\u0c35\u0c30\u0c3f \u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0e\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c41\u0c32\u0c48 \u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41 \u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d \u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d \u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d \u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(" "),
    STANDALONEMONTHS: "\u0c1c\u0c28\u0c35\u0c30\u0c3f \u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0e\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c42\u0c32\u0c48 \u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41 \u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d \u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d \u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d \u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(" "),
    SHORTMONTHS: "\u0c1c\u0c28 \u0c2b\u0c3f\u0c2c\u0c4d\u0c30 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0f\u0c2a\u0c4d\u0c30\u0c3f \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c41\u0c32\u0c48 \u0c06\u0c17 \u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02 \u0c05\u0c15\u0c4d\u0c1f\u0c4b \u0c28\u0c35\u0c02 \u0c21\u0c3f\u0c38\u0c46\u0c02".split(" "),
    STANDALONESHORTMONTHS: "\u0c1c\u0c28 \u0c2b\u0c3f\u0c2c\u0c4d\u0c30 \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0f\u0c2a\u0c4d\u0c30\u0c3f \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c41\u0c32\u0c48 \u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41 \u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02 \u0c05\u0c15\u0c4d\u0c1f\u0c4b \u0c28\u0c35\u0c02 \u0c21\u0c3f\u0c38\u0c46\u0c02".split(" "),
    WEEKDAYS: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02 \u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02 \u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02 \u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02 \u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(" "),
    STANDALONEWEEKDAYS: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02 \u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02 \u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02 \u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02 \u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(" "),
    SHORTWEEKDAYS: "\u0c06\u0c26\u0c3f \u0c38\u0c4b\u0c2e \u0c2e\u0c02\u0c17\u0c33 \u0c2c\u0c41\u0c27 \u0c17\u0c41\u0c30\u0c41 \u0c36\u0c41\u0c15\u0c4d\u0c30 \u0c36\u0c28\u0c3f".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0c06\u0c26\u0c3f \u0c38\u0c4b\u0c2e \u0c2e\u0c02\u0c17\u0c33 \u0c2c\u0c41\u0c27 \u0c17\u0c41\u0c30\u0c41 \u0c36\u0c41\u0c15\u0c4d\u0c30 \u0c36\u0c28\u0c3f".split(" "),
    NARROWWEEKDAYS: "\u0c06 \u0c38\u0c4b \u0c2e \u0c2c\u0c41 \u0c17\u0c41 \u0c36\u0c41 \u0c36".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0c06 \u0c38\u0c4b \u0c2e \u0c2c\u0c41 \u0c17\u0c41 \u0c36\u0c41 \u0c36".split(" "),
    SHORTQUARTERS: ["\u0c24\u0c4d\u0c30\u0c481", "\u0c24\u0c4d\u0c30\u0c482", "\u0c24\u0c4d\u0c30\u0c483", "\u0c24\u0c4d\u0c30\u0c484"],
    QUARTERS: ["1\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c02", "2\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c02", "3\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c02", "4\u0c35 \u0c24\u0c4d\u0c30\u0c48\u0c2e\u0c3e\u0c38\u0c02"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["d MMMM y EEEE", "d MMMM y", "d MMM y", "dd-MM-yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [6, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_th = {
    ERAS: ["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19 \u0e04.\u0e28.", "\u0e04.\u0e28."],
    ERANAMES: ["\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a", "\u0e04\u0e23\u0e34\u0e2a\u0e15\u0e4c\u0e28\u0e31\u0e01\u0e23\u0e32\u0e0a"],
    NARROWMONTHS: "\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
    STANDALONENARROWMONTHS: "\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
    MONTHS: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e40\u0e21\u0e29\u0e32\u0e22\u0e19 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 \u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e15\u0e38\u0e25\u0e32\u0e04\u0e21 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(" "),
    STANDALONEMONTHS: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e40\u0e21\u0e29\u0e32\u0e22\u0e19 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 \u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e15\u0e38\u0e25\u0e32\u0e04\u0e21 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(" "),
    SHORTMONTHS: "\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
    STANDALONESHORTMONTHS: "\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
    WEEKDAYS: "\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "),
    STANDALONEWEEKDAYS: "\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "), SHORTWEEKDAYS: "\u0e2d\u0e32. \u0e08. \u0e2d. \u0e1e. \u0e1e\u0e24. \u0e28. \u0e2a.".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0e2d\u0e32. \u0e08. \u0e2d. \u0e1e. \u0e1e\u0e24. \u0e28. \u0e2a.".split(" "),
    NARROWWEEKDAYS: "\u0e2d\u0e32 \u0e08 \u0e2d \u0e1e \u0e1e\u0e24 \u0e28 \u0e2a".split(" "),
    STANDALONENARROWWEEKDAYS: "\u0e2d\u0e32 \u0e08 \u0e2d \u0e1e \u0e1e\u0e24 \u0e28 \u0e2a".split(" "),
    SHORTQUARTERS: ["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 1", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 2", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 3", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 4"],
    QUARTERS: ["\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 1", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 2", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 3", "\u0e44\u0e15\u0e23\u0e21\u0e32\u0e2a 4"],
    AMPMS: ["\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07", "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"],
    DATEFORMATS: ["EEEE\u0e17\u0e35\u0e48 d MMMM G y", "d MMMM y", "d MMM y", "d/M/yy"],
    TIMEFORMATS: ["H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 mm \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 zzzz", "H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 mm \u0e19\u0e32\u0e17\u0e35 ss \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_tl = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["BC", "AD"],
    NARROWMONTHS: "EPMAMHHASOND".split(""),
    STANDALONENARROWMONTHS: "EPMAMHHASOND".split(""),
    MONTHS: "Enero Pebrero Marso Abril Mayo Hunyo Hulyo Agosto Setyembre Oktubre Nobyembre Disyembre".split(" "),
    STANDALONEMONTHS: "Enero Pebrero Marso Abril Mayo Hunyo Hulyo Agosto Setyembre Oktubre Nobyembre Disyembre".split(" "),
    SHORTMONTHS: "Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis".split(" "),
    STANDALONESHORTMONTHS: "Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis".split(" "),
    WEEKDAYS: "Linggo Lunes Martes Miyerkules Huwebes Biyernes Sabado".split(" "),
    STANDALONEWEEKDAYS: "Linggo Lunes Martes Miyerkules Huwebes Biyernes Sabado".split(" "),
    SHORTWEEKDAYS: "Lin Lun Mar Miy Huw Biy Sab".split(" "),
    STANDALONESHORTWEEKDAYS: "Lin Lun Mar Miy Huw Biy Sab".split(" "),
    NARROWWEEKDAYS: "LLMMHBS".split(""),
    STANDALONENARROWWEEKDAYS: "LLMMHBS".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} 'ng' {0}", "{1} 'ng' {0}", "{1}, {0}", "{1}, {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_tr = {
    ERAS: ["M\u00d6", "MS"],
    ERANAMES: ["Milattan \u00d6nce", "Milattan Sonra"],
    NARROWMONTHS: "O\u015eMNMHTAEEKA".split(""),
    STANDALONENARROWMONTHS: "O\u015eMNMHTAEEKA".split(""),
    MONTHS: "Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),
    STANDALONEMONTHS: "Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),
    SHORTMONTHS: "Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),
    STANDALONESHORTMONTHS: "Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),
    WEEKDAYS: "Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),
    STANDALONEWEEKDAYS: "Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),
    SHORTWEEKDAYS: "Paz Pzt Sal \u00c7ar Per Cum Cmt".split(" "),
    STANDALONESHORTWEEKDAYS: "Paz Pzt Sal \u00c7ar Per Cum Cmt".split(" "),
    NARROWWEEKDAYS: "PPS\u00c7PCC".split(""),
    STANDALONENARROWWEEKDAYS: "PPS\u00c7PCC".split(""),
    SHORTQUARTERS: ["\u00c71", "\u00c72", "\u00c73", "\u00c74"],
    QUARTERS: ["1. \u00e7eyrek", "2. \u00e7eyrek", "3. \u00e7eyrek", "4. \u00e7eyrek"],
    AMPMS: ["\u00d6\u00d6", "\u00d6S"],
    DATEFORMATS: ["d MMMM y EEEE", "d MMMM y", "d MMM y", "d MM y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_uk = {
    ERAS: ["\u0434\u043e \u043d.\u0435.", "\u043d.\u0435."],
    ERANAMES: ["\u0434\u043e \u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438", "\u043d\u0430\u0448\u043e\u0457 \u0435\u0440\u0438"],
    NARROWMONTHS: "\u0421\u041b\u0411\u041a\u0422\u0427\u041b\u0421\u0412\u0416\u041b\u0413".split(""),
    STANDALONENARROWMONTHS: "\u0421\u041b\u0411\u041a\u0422\u0427\u041b\u0421\u0412\u0416\u041b\u0413".split(""),
    MONTHS: "\u0441\u0456\u0447\u043d\u044f \u043b\u044e\u0442\u043e\u0433\u043e \u0431\u0435\u0440\u0435\u0437\u043d\u044f \u043a\u0432\u0456\u0442\u043d\u044f \u0442\u0440\u0430\u0432\u043d\u044f \u0447\u0435\u0440\u0432\u043d\u044f \u043b\u0438\u043f\u043d\u044f \u0441\u0435\u0440\u043f\u043d\u044f \u0432\u0435\u0440\u0435\u0441\u043d\u044f \u0436\u043e\u0432\u0442\u043d\u044f \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430 \u0433\u0440\u0443\u0434\u043d\u044f".split(" "),
    STANDALONEMONTHS: "\u0421\u0456\u0447\u0435\u043d\u044c \u041b\u044e\u0442\u0438\u0439 \u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u041a\u0432\u0456\u0442\u0435\u043d\u044c \u0422\u0440\u0430\u0432\u0435\u043d\u044c \u0427\u0435\u0440\u0432\u0435\u043d\u044c \u041b\u0438\u043f\u0435\u043d\u044c \u0421\u0435\u0440\u043f\u0435\u043d\u044c \u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0416\u043e\u0432\u0442\u0435\u043d\u044c \u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0413\u0440\u0443\u0434\u0435\u043d\u044c".split(" "),
    SHORTMONTHS: "\u0441\u0456\u0447. \u043b\u044e\u0442. \u0431\u0435\u0440. \u043a\u0432\u0456\u0442. \u0442\u0440\u0430\u0432. \u0447\u0435\u0440\u0432. \u043b\u0438\u043f. \u0441\u0435\u0440\u043f. \u0432\u0435\u0440. \u0436\u043e\u0432\u0442. \u043b\u0438\u0441\u0442. \u0433\u0440\u0443\u0434.".split(" "),
    STANDALONESHORTMONTHS: "\u0421\u0456\u0447 \u041b\u044e\u0442 \u0411\u0435\u0440 \u041a\u0432\u0456 \u0422\u0440\u0430 \u0427\u0435\u0440 \u041b\u0438\u043f \u0421\u0435\u0440 \u0412\u0435\u0440 \u0416\u043e\u0432 \u041b\u0438\u0441 \u0413\u0440\u0443".split(" "),
    WEEKDAYS: "\u043d\u0435\u0434\u0456\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0441\u0435\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440 \u043f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
    STANDALONEWEEKDAYS: "\u041d\u0435\u0434\u0456\u043b\u044f \u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0421\u0435\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440 \u041f\u02bc\u044f\u0442\u043d\u0438\u0446\u044f \u0421\u0443\u0431\u043e\u0442\u0430".split(" "),
    SHORTWEEKDAYS: "\u041d\u0434 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),
    STANDALONESHORTWEEKDAYS: "\u041d\u0434 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),
    NARROWWEEKDAYS: "\u041d\u041f\u0412\u0421\u0427\u041f\u0421".split(""),
    STANDALONENARROWWEEKDAYS: "\u041d\u041f\u0412\u0421\u0427\u041f\u0421".split(""),
    SHORTQUARTERS: ["I \u043a\u0432.", "II \u043a\u0432.", "III \u043a\u0432.", "IV \u043a\u0432."],
    QUARTERS: ["I \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "II \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "III \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "IV \u043a\u0432\u0430\u0440\u0442\u0430\u043b"],
    AMPMS: ["\u0434\u043f", "\u043f\u043f"],
    DATEFORMATS: ["EEEE, d MMMM y '\u0440'.", "d MMMM y '\u0440'.", "d MMM y", "dd.MM.yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_ur = {
    ERAS: ["\u0642 \u0645", "\u0639\u06cc\u0633\u0648\u06cc \u0633\u0646"],
    ERANAMES: ["\u0642\u0628\u0644 \u0645\u0633\u06cc\u062d", "\u0639\u06cc\u0633\u0648\u06cc \u0633\u0646"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "\u062c\u0646\u0648\u0631\u06cc \u0641\u0631\u0648\u0631\u06cc \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u06cc\u0644 \u0645\u0626\u06cc \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0626\u06cc \u0627\u06af\u0633\u062a \u0633\u062a\u0645\u0628\u0631 \u0627\u06a9\u062a\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u062f\u0633\u0645\u0628\u0631".split(" "),
    STANDALONEMONTHS: "\u062c\u0646\u0648\u0631\u06cc \u0641\u0631\u0648\u0631\u06cc \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u06cc\u0644 \u0645\u0626\u06cc \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0626\u06cc \u0627\u06af\u0633\u062a \u0633\u062a\u0645\u0628\u0631 \u0627\u06a9\u062a\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u062f\u0633\u0645\u0628\u0631".split(" "),
    SHORTMONTHS: "\u062c\u0646\u0648\u0631\u06cc \u0641\u0631\u0648\u0631\u06cc \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u06cc\u0644 \u0645\u0626\u06cc \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0626\u06cc \u0627\u06af\u0633\u062a \u0633\u062a\u0645\u0628\u0631 \u0627\u06a9\u062a\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u062f\u0633\u0645\u0628\u0631".split(" "),
    STANDALONESHORTMONTHS: "\u062c\u0646\u0648\u0631\u06cc \u0641\u0631\u0648\u0631\u06cc \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u06cc\u0644 \u0645\u0626\u06cc \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0626\u06cc \u0627\u06af\u0633\u062a \u0633\u062a\u0645\u0628\u0631 \u0627\u06a9\u062a\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u062f\u0633\u0645\u0628\u0631".split(" "),
    WEEKDAYS: "\u0627\u062a\u0648\u0627\u0631 \u0633\u0648\u0645\u0648\u0627\u0631 \u0645\u0646\u06af\u0644 \u0628\u062f\u06be \u062c\u0645\u0639\u0631\u0627\u062a \u062c\u0645\u0639\u06c1 \u06c1\u0641\u062a\u06c1".split(" "),
    STANDALONEWEEKDAYS: "\u0627\u062a\u0648\u0627\u0631 \u0633\u0648\u0645\u0648\u0627\u0631 \u0645\u0646\u06af\u0644 \u0628\u062f\u06be \u062c\u0645\u0639\u0631\u0627\u062a \u062c\u0645\u0639\u06c1 \u06c1\u0641\u062a\u06c1".split(" "),
    SHORTWEEKDAYS: "\u0627\u062a\u0648\u0627\u0631 \u0633\u0648\u0645\u0648\u0627\u0631 \u0645\u0646\u06af\u0644 \u0628\u062f\u06be \u062c\u0645\u0639\u0631\u0627\u062a \u062c\u0645\u0639\u06c1 \u06c1\u0641\u062a\u06c1".split(" "),
    STANDALONESHORTWEEKDAYS: "\u0627\u062a\u0648\u0627\u0631 \u0633\u0648\u0645\u0648\u0627\u0631 \u0645\u0646\u06af\u0644 \u0628\u062f\u06be \u062c\u0645\u0639\u0631\u0627\u062a \u062c\u0645\u0639\u06c1 \u06c1\u0641\u062a\u06c1".split(" "),
    NARROWWEEKDAYS: "SMTWTFS".split(""),
    STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
    SHORTQUARTERS: ["\u067e\u06c1\u0644\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062f\u0648\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062a\u06cc\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u0686\u0648\u062a\u0647\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc"],
    QUARTERS: ["\u067e\u06c1\u0644\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062f\u0648\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u062a\u06cc\u0633\u0631\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc", "\u0686\u0648\u062a\u0647\u06cc \u0633\u06c1 \u0645\u0627\u06c1\u06cc"],
    AMPMS: ["\u0642\u0628\u0644 \u062f\u0648\u067e\u06c1\u0631", "\u0628\u0639\u062f \u062f\u0648\u067e\u06c1\u0631"],
    DATEFORMATS: ["EEEE\u060c d MMMM\u060c y", "d MMMM\u060c y", "d MMM\u060c y", "d/M/yy"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_uz = {
    ERAS: ["M.A.", "E"],
    ERANAMES: ["M.A.", "E"],
    NARROWMONTHS: "YFMAMIIASOND".split(""),
    STANDALONENARROWMONTHS: "YFMAMIIASOND".split(""),
    MONTHS: "Yanvar Fevral Mart Aprel May Iyun Iyul Avgust Sentyabr Oktyabr Noyabr Dekabr".split(" "),
    STANDALONEMONTHS: "Yanvar Fevral Mart Aprel May Iyun Iyul Avgust Sentyabr Oktyabr Noyabr Dekabr".split(" "),
    SHORTMONTHS: "Yanv Fev Mar Apr May Iyun Iyul Avg Sen Okt Noya Dek".split(" "),
    STANDALONESHORTMONTHS: "Yanv Fev Mar Apr May Iyun Iyul Avg Sen Okt Noya Dek".split(" "),
    WEEKDAYS: "yakshanba dushanba seshanba chorshanba payshanba juma shanba".split(" "),
    STANDALONEWEEKDAYS: "yakshanba dushanba seshanba chorshanba payshanba juma shanba".split(" "),
    SHORTWEEKDAYS: "Yaksh Dush Sesh Chor Pay Jum Shan".split(" "),
    STANDALONESHORTWEEKDAYS: "Yaksh Dush Sesh Chor Pay Jum Shan".split(" "),
    NARROWWEEKDAYS: "YDSCPJS".split(""),
    STANDALONENARROWWEEKDAYS: "YDSCPJS".split(""),
    SHORTQUARTERS: ["1-ch", "2-ch", "3-ch", "4-ch"],
    QUARTERS: ["1-chorak", "2-chorak", "3-chorak", "4-chorak"],
    AMPMS: ["AM", "PM"],
    DATEFORMATS: ["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yy/MM/dd"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_vi = {
    ERAS: ["tr. CN", "sau CN"],
    ERANAMES: ["tr. CN", "sau CN"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),
    STANDALONEMONTHS: "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),
    SHORTMONTHS: "thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(";"),
    STANDALONESHORTMONTHS: "Thg 1;Thg 2;Thg 3;Thg 4;Thg 5;Thg 6;Thg 7;Thg 8;Thg 9;Thg 10;Thg 11;Thg 12".split(";"),
    WEEKDAYS: "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
    STANDALONEWEEKDAYS: "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
    SHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    STANDALONESHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    NARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    STANDALONENARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Qu\u00fd 1", "Qu\u00fd 2", "Qu\u00fd 3", "Qu\u00fd 4"],
    AMPMS: ["SA", "CH"],
    DATEFORMATS: ["EEEE, 'ng\u00e0y' dd MMMM 'n\u0103m' y", "'Ng\u00e0y' dd 'th\u00e1ng' MM 'n\u0103m' y", "dd-MM-y", "dd/MM/y"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: ["{0} {1}", "{0} {1}", "{0} {1}", "{0} {1}"],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6
};

g.i18n.DateTimeSymbols_zh = {
    ERAS: ["\u516c\u5143\u524d", "\u516c\u5143"],
    ERANAMES: ["\u516c\u5143\u524d", "\u516c\u5143"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
    STANDALONEMONTHS: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
    SHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONESHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    WEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    STANDALONEWEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    SHORTWEEKDAYS: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
    STANDALONESHORTWEEKDAYS: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
    NARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    STANDALONENARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    SHORTQUARTERS: ["1\u5b63\u5ea6", "2\u5b63\u5ea6", "3\u5b63\u5ea6", "4\u5b63\u5ea6"],
    QUARTERS: ["\u7b2c\u4e00\u5b63\u5ea6", "\u7b2c\u4e8c\u5b63\u5ea6", "\u7b2c\u4e09\u5b63\u5ea6", "\u7b2c\u56db\u5b63\u5ea6"],
    AMPMS: ["\u4e0a\u5348", "\u4e0b\u5348"],
    DATEFORMATS: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y\u5e74M\u6708d\u65e5", "yy/M/d"],
    TIMEFORMATS: ["zzzzah:mm:ss", "zah:mm:ss", "ah:mm:ss", "ah:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_zh_CN = g.i18n.DateTimeSymbols_zh;

g.i18n.DateTimeSymbols_zh_HK = {
    ERAS: ["\u897f\u5143\u524d", "\u897f\u5143"],
    ERANAMES: ["\u897f\u5143\u524d", "\u897f\u5143"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONEMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    SHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONESHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    WEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    STANDALONEWEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    SHORTWEEKDAYS: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
    STANDALONESHORTWEEKDAYS: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
    NARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    STANDALONENARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    SHORTQUARTERS: ["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"],
    QUARTERS: ["\u7b2c1\u5b63", "\u7b2c2\u5b63", "\u7b2c3\u5b63", "\u7b2c4\u5b63"],
    AMPMS: ["\u4e0a\u5348", "\u4e0b\u5348"],
    DATEFORMATS: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y\u5e74M\u6708d\u65e5", "d/M/yy"],
    TIMEFORMATS: ["ah:mm:ss [zzzz]", "ah:mm:ss [z]", "ah:mm:ss", "ah:mm"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1}{0}", "{1}{0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_zh_TW = {
    ERAS: ["\u897f\u5143\u524d", "\u897f\u5143"],
    ERANAMES: ["\u897f\u5143\u524d", "\u897f\u5143"],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONEMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    SHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    STANDALONESHORTMONTHS: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
    WEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    STANDALONEWEEKDAYS: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
    SHORTWEEKDAYS: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
    STANDALONESHORTWEEKDAYS: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
    NARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    STANDALONENARROWWEEKDAYS: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
    SHORTQUARTERS: ["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"],
    QUARTERS: ["\u7b2c1\u5b63", "\u7b2c2\u5b63", "\u7b2c3\u5b63", "\u7b2c4\u5b63"],
    AMPMS: ["\u4e0a\u5348", "\u4e0b\u5348"],
    DATEFORMATS: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "y\u5e74M\u6708d\u65e5", "y/M/d"],
    TIMEFORMATS: ["zzzzah\u6642mm\u5206ss\u79d2", "zah\u6642mm\u5206ss\u79d2", "ah:mm:ss", "ah:mm"],
    DATETIMEFORMATS: ["{1}{0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols_zu = {
    ERAS: ["BC", "AD"],
    ERANAMES: ["BC", "AD"],
    NARROWMONTHS: "JFMAMJJASOND".split(""),
    STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
    MONTHS: "Januwari Februwari Mashi Apreli Meyi Juni Julayi Agasti Septhemba Okthoba Novemba Disemba".split(" "),
    STANDALONEMONTHS: "uJanuwari uFebruwari uMashi u-Apreli uMeyi uJuni uJulayi uAgasti uSepthemba u-Okthoba uNovemba uDisemba".split(" "),
    SHORTMONTHS: "Jan Feb Mas Apr Mey Jun Jul Aga Sep Okt Nov Dis".split(" "),
    STANDALONESHORTMONTHS: "Jan Feb Mas Apr Mey Jun Jul Aga Sep Okt Nov Dis".split(" "),
    WEEKDAYS: "Sonto Msombuluko Lwesibili Lwesithathu Lwesine Lwesihlanu Mgqibelo".split(" "),
    STANDALONEWEEKDAYS: "Sonto Msombuluko Lwesibili Lwesithathu Lwesine Lwesihlanu Mgqibelo".split(" "),
    SHORTWEEKDAYS: "Son Mso Bil Tha Sin Hla Mgq".split(" "),
    STANDALONESHORTWEEKDAYS: "Son Mso Bil Tha Sin Hla Mgq".split(" "),
    NARROWWEEKDAYS: "SMTTSHM".split(""),
    STANDALONENARROWWEEKDAYS: "SMBTSHM".split(""),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["ikota engu-1", "ikota engu-2", "ikota engu-3", "ikota engu-4"],
    AMPMS: ["Ekuseni", "Ntambama"],
    DATEFORMATS: ["EEEE dd MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"],
    TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    DATETIMEFORMATS: ["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"],
    FIRSTDAYOFWEEK: 6,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 5
};

g.i18n.DateTimeSymbols = "af" == g.LOCALE ? g.i18n.DateTimeSymbols_af : "am" == g.LOCALE ? g.i18n.DateTimeSymbols_am : "ar" == g.LOCALE ? g.i18n.DateTimeSymbols_ar : "az" == g.LOCALE ? g.i18n.DateTimeSymbols_az : "bg" == g.LOCALE ? g.i18n.DateTimeSymbols_bg : "bn" == g.LOCALE ? g.i18n.DateTimeSymbols_bn : "br" == g.LOCALE ? g.i18n.DateTimeSymbols_br : "ca" == g.LOCALE ? g.i18n.DateTimeSymbols_ca : "chr" == g.LOCALE ? g.i18n.DateTimeSymbols_chr : "cs" == g.LOCALE ? g.i18n.DateTimeSymbols_cs : "cy" == g.LOCALE ? g.i18n.DateTimeSymbols_cy : "da" == g.LOCALE ? g.i18n.DateTimeSymbols_da :
        "de" == g.LOCALE ? g.i18n.DateTimeSymbols_de : "de_AT" == g.LOCALE || "de-AT" == g.LOCALE ? g.i18n.DateTimeSymbols_de_AT : "de_CH" == g.LOCALE || "de-CH" == g.LOCALE ? g.i18n.DateTimeSymbols_de : "el" == g.LOCALE ? g.i18n.DateTimeSymbols_el : "en" == g.LOCALE ? g.i18n.DateTimeSymbols_en : "en_AU" == g.LOCALE || "en-AU" == g.LOCALE ? g.i18n.DateTimeSymbols_en_AU : "en_GB" == g.LOCALE || "en-GB" == g.LOCALE ? g.i18n.DateTimeSymbols_en_GB : "en_IE" == g.LOCALE || "en-IE" == g.LOCALE ? g.i18n.DateTimeSymbols_en_IE : "en_IN" == g.LOCALE || "en-IN" == g.LOCALE ? g.i18n.DateTimeSymbols_en_IN :
        "en_SG" == g.LOCALE || "en-SG" == g.LOCALE ? g.i18n.DateTimeSymbols_en_SG : "en_US" == g.LOCALE || "en-US" == g.LOCALE ? g.i18n.DateTimeSymbols_en : "en_ZA" == g.LOCALE || "en-ZA" == g.LOCALE ? g.i18n.DateTimeSymbols_en_ZA : "es" == g.LOCALE ? g.i18n.DateTimeSymbols_es : "es_419" == g.LOCALE || "es-419" == g.LOCALE ? g.i18n.DateTimeSymbols_es : "es_ES" == g.LOCALE || "es-ES" == g.LOCALE ? g.i18n.DateTimeSymbols_es : "et" == g.LOCALE ? g.i18n.DateTimeSymbols_et : "eu" == g.LOCALE ? g.i18n.DateTimeSymbols_eu : "fa" == g.LOCALE ? g.i18n.DateTimeSymbols_fa : "fi" == g.LOCALE ?
    g.i18n.DateTimeSymbols_fi : "fil" == g.LOCALE ? g.i18n.DateTimeSymbols_fil : "fr" == g.LOCALE ? g.i18n.DateTimeSymbols_fr : "fr_CA" == g.LOCALE || "fr-CA" == g.LOCALE ? g.i18n.DateTimeSymbols_fr_CA : "gl" == g.LOCALE ? g.i18n.DateTimeSymbols_gl : "gsw" == g.LOCALE ? g.i18n.DateTimeSymbols_gsw : "gu" == g.LOCALE ? g.i18n.DateTimeSymbols_gu : "haw" == g.LOCALE ? g.i18n.DateTimeSymbols_haw : "he" == g.LOCALE ? g.i18n.DateTimeSymbols_he : "hi" == g.LOCALE ? g.i18n.DateTimeSymbols_hi : "hr" == g.LOCALE ? g.i18n.DateTimeSymbols_hr : "hu" == g.LOCALE ? g.i18n.DateTimeSymbols_hu :
        "hy" == g.LOCALE ? g.i18n.DateTimeSymbols_hy : "id" == g.LOCALE ? g.i18n.DateTimeSymbols_id : "in" == g.LOCALE ? g.i18n.DateTimeSymbols_in : "is" == g.LOCALE ? g.i18n.DateTimeSymbols_is : "it" == g.LOCALE ? g.i18n.DateTimeSymbols_it : "iw" == g.LOCALE ? g.i18n.DateTimeSymbols_iw : "ja" == g.LOCALE ? g.i18n.DateTimeSymbols_ja : "ka" == g.LOCALE ? g.i18n.DateTimeSymbols_ka : "kk" == g.LOCALE ? g.i18n.DateTimeSymbols_kk : "km" == g.LOCALE ? g.i18n.DateTimeSymbols_km : "kn" == g.LOCALE ? g.i18n.DateTimeSymbols_kn : "ko" == g.LOCALE ? g.i18n.DateTimeSymbols_ko : "ky" == g.LOCALE ?
    g.i18n.DateTimeSymbols_ky : "ln" == g.LOCALE ? g.i18n.DateTimeSymbols_ln : "lo" == g.LOCALE ? g.i18n.DateTimeSymbols_lo : "lt" == g.LOCALE ? g.i18n.DateTimeSymbols_lt : "lv" == g.LOCALE ? g.i18n.DateTimeSymbols_lv : "mk" == g.LOCALE ? g.i18n.DateTimeSymbols_mk : "ml" == g.LOCALE ? g.i18n.DateTimeSymbols_ml : "mn" == g.LOCALE ? g.i18n.DateTimeSymbols_mn : "mr" == g.LOCALE ? g.i18n.DateTimeSymbols_mr : "ms" == g.LOCALE ? g.i18n.DateTimeSymbols_ms : "mt" == g.LOCALE ? g.i18n.DateTimeSymbols_mt : "my" == g.LOCALE ? g.i18n.DateTimeSymbols_my : "nb" == g.LOCALE ? g.i18n.DateTimeSymbols_nb :
        "ne" == g.LOCALE ? g.i18n.DateTimeSymbols_ne : "nl" == g.LOCALE ? g.i18n.DateTimeSymbols_nl : "no" == g.LOCALE ? g.i18n.DateTimeSymbols_no : "no_NO" == g.LOCALE || "no-NO" == g.LOCALE ? g.i18n.DateTimeSymbols_no : "or" == g.LOCALE ? g.i18n.DateTimeSymbols_or : "pa" == g.LOCALE ? g.i18n.DateTimeSymbols_pa : "pl" == g.LOCALE ? g.i18n.DateTimeSymbols_pl : "pt" == g.LOCALE ? g.i18n.DateTimeSymbols_pt : "pt_BR" == g.LOCALE || "pt-BR" == g.LOCALE ? g.i18n.DateTimeSymbols_pt : "pt_PT" == g.LOCALE || "pt-PT" == g.LOCALE ? g.i18n.DateTimeSymbols_pt_PT : "ro" == g.LOCALE ? g.i18n.DateTimeSymbols_ro :
        "ru" == g.LOCALE ? g.i18n.DateTimeSymbols_ru : "si" == g.LOCALE ? g.i18n.DateTimeSymbols_si : "sk" == g.LOCALE ? g.i18n.DateTimeSymbols_sk : "sl" == g.LOCALE ? g.i18n.DateTimeSymbols_sl : "sq" == g.LOCALE ? g.i18n.DateTimeSymbols_sq : "sr" == g.LOCALE ? g.i18n.DateTimeSymbols_sr : "sv" == g.LOCALE ? g.i18n.DateTimeSymbols_sv : "sw" == g.LOCALE ? g.i18n.DateTimeSymbols_sw : "ta" == g.LOCALE ? g.i18n.DateTimeSymbols_ta : "te" == g.LOCALE ? g.i18n.DateTimeSymbols_te : "th" == g.LOCALE ? g.i18n.DateTimeSymbols_th : "tl" == g.LOCALE ? g.i18n.DateTimeSymbols_tl : "tr" == g.LOCALE ?
    g.i18n.DateTimeSymbols_tr : "uk" == g.LOCALE ? g.i18n.DateTimeSymbols_uk : "ur" == g.LOCALE ? g.i18n.DateTimeSymbols_ur : "uz" == g.LOCALE ? g.i18n.DateTimeSymbols_uz : "vi" == g.LOCALE ? g.i18n.DateTimeSymbols_vi : "zh" == g.LOCALE ? g.i18n.DateTimeSymbols_zh : "zh_CN" == g.LOCALE || "zh-CN" == g.LOCALE ? g.i18n.DateTimeSymbols_zh : "zh_HK" == g.LOCALE || "zh-HK" == g.LOCALE ? g.i18n.DateTimeSymbols_zh_HK : "zh_TW" == g.LOCALE || "zh-TW" == g.LOCALE ? g.i18n.DateTimeSymbols_zh_TW : "zu" == g.LOCALE ? g.i18n.DateTimeSymbols_zu : g.i18n.DateTimeSymbols_en;

g.date = {};
g.date.weekDay = {MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6};
g.date.month = {JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11};
g.date.formatMonthAndYear = function (a, c) {
    var d = a + (" " + c);
    return d
};
g.date.splitDateStringRegex_ = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/;
g.date.splitTimeStringRegex_ = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/;
g.date.splitTimezoneStringRegex_ = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
g.date.splitDurationRegex_ = /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/;
g.date.MS_PER_DAY = 864E5;
g.date.isLeapYear = function (a) {
    return 0 == a % 4 && (0 != a % 100 || 0 == a % 400)
};
g.date.isLongIsoYear = function (a) {
    var c = 5 * a + 12 - 4 * (Math.floor(a / 100) - Math.floor(a / 400)),
        c = c + (Math.floor((a - 100) / 400) - Math.floor((a - 102) / 400)),
        c = c + (Math.floor((a - 200) / 400) - Math.floor((a - 199) / 400));
    return 5 > c % 28
};
g.date.getNumberOfDaysInMonth = function (a, c) {
    switch (c) {
        case g.date.month.FEB:
            return g.date.isLeapYear(a) ? 29 : 28;
        case g.date.month.JUN:
        case g.date.month.SEP:
        case g.date.month.NOV:
        case g.date.month.APR:
            return 30
    }
    return 31
};
g.date.isSameDay = function (a, c) {
    var d = c || new Date(g.now());
    return a.getDate() == d.getDate() && g.date.isSameMonth(a, d)
};
g.date.isSameMonth = function (a, c) {
    var d = c || new Date(g.now());
    return a.getMonth() == d.getMonth() && g.date.isSameYear(a, d)
};
g.date.isSameYear = function (a, c) {
    var d = c || new Date(g.now());
    return a.getFullYear() == d.getFullYear()
};
g.date.getWeekNumber = function (a, c, d, e, f) {
    a = new Date(a, c, d);
    e = e || g.date.weekDay.THU;
    f = f || g.date.weekDay.MON;
    c = (a.getDay() + 6) % 7;
    c = (c - f + 7) % 7;
    f = (e - f + 7) % 7;
    a = a.valueOf() + (f - c) * g.date.MS_PER_DAY;
    f = (new Date((new Date(a)).getFullYear(), 0, 1)).valueOf();
    return Math.floor(Math.round((a - f) / g.date.MS_PER_DAY) / 7) + 1
};
g.date.min = function (a, c) {
    return a < c ? a : c
};
g.date.max = function (a, c) {
    return a > c ? a : c
};
g.date.fromIsoString = function (a) {
    var c = new g.date.DateTime(2E3);
    return g.date.setIso8601DateTime(c, a) ? c : null
};
g.date.setIso8601DateTime = function (a, c) {
    c = g.string.trim(c);
    var d = -1 == c.indexOf("T") ? " " : "T", d = c.split(d);
    return g.date.setIso8601DateOnly_(a, d[0]) && (2 > d.length || g.date.setIso8601TimeOnly_(a, d[1]))
};
g.date.setIso8601DateOnly_ = function (a, c) {
    var d = c.match(g.date.splitDateStringRegex_);
    if (!d)return!1;
    var e = Number(d[1]), f = Number(d[2]), h = Number(d[3]), l = Number(d[4]), m = Number(d[5]), d = Number(d[6]) || 1;
    a.setFullYear(e);
    l ? (a.setDate(1), a.setMonth(0), e = l - 1, a.add(new g.date.Interval(g.date.Interval.DAYS, e))) : m ? g.date.setDateFromIso8601Week_(a, m, d) : (f && (a.setDate(1), a.setMonth(f - 1)), h && a.setDate(h));
    return!0
};
g.date.setDateFromIso8601Week_ = function (a, c, d) {
    a.setMonth(0);
    a.setDate(1);
    var e = a.getDay(), e = e || 7, e = 4 >= e ? 1 - e : 8 - e;
    c = Number(d) + 7 * (Number(c) - 1);
    c = e + c - 1;
    c = new g.date.Interval(g.date.Interval.DAYS, c);
    a.add(c)
};
g.date.setIso8601TimeOnly_ = function (a, c) {
    var d = c.match(g.date.splitTimezoneStringRegex_), e = 0;
    d && ("Z" != d[0] && (e = 60 * d[2] + Number(d[3]), e *= "-" == d[1] ? 1 : -1), e -= a.getTimezoneOffset(), c = c.substr(0, c.length - d[0].length));
    d = c.match(g.date.splitTimeStringRegex_);
    if (!d)return!1;
    a.setHours(Number(d[1]));
    a.setMinutes(Number(d[2]) || 0);
    a.setSeconds(Number(d[3]) || 0);
    a.setMilliseconds(d[4] ? 1E3 * d[4] : 0);
    0 != e && a.setTime(a.getTime() + 6E4 * e);
    return!0
};
g.date.Interval = function (a, c, d, e, f, h) {
    g.isString(a) ? (this.years = a == g.date.Interval.YEARS ? c : 0, this.months = a == g.date.Interval.MONTHS ? c : 0, this.days = a == g.date.Interval.DAYS ? c : 0, this.hours = a == g.date.Interval.HOURS ? c : 0, this.minutes = a == g.date.Interval.MINUTES ? c : 0, this.seconds = a == g.date.Interval.SECONDS ? c : 0) : (this.years = a || 0, this.months = c || 0, this.days = d || 0, this.hours = e || 0, this.minutes = f || 0, this.seconds = h || 0)
};
g.date.Interval.fromIsoString = function (a) {
    a = a.match(g.date.splitDurationRegex_);
    if (!a)
        return null;
    var c = !(a[6] || a[7] || a[8]),
        d = c && !(a[2] || a[3] || a[4]);
    if (d || c && a[5])
        return null;
    var c = a[1],
        d = parseInt(a[2], 10) || 0,
        e = parseInt(a[3], 10) || 0,
        f = parseInt(a[4], 10) || 0,
        h = parseInt(a[6], 10) || 0,
        l = parseInt(a[7], 10) || 0;
    a = parseFloat(a[8]) || 0;
    return c ? new g.date.Interval(-d, -e, -f, -h, -l, -a) : new g.date.Interval(d, e, f, h, l, a)
};
g.date.Interval.prototype.toIsoString = function (a) {
    var c = Math.min(this.years, this.months, this.days, this.hours, this.minutes, this.seconds),
        d = Math.max(this.years, this.months, this.days, this.hours, this.minutes, this.seconds);
    if (0 > c && 0 < d)
        return null;
    if (!a && 0 == c && 0 == d)
        return"PT0S";
    d = [];
    0 > c && d.push("-");
    d.push("P");
    (this.years || a) && d.push(Math.abs(this.years) + "Y");
    (this.months || a) && d.push(Math.abs(this.months) + "M");
    (this.days || a) && d.push(Math.abs(this.days) + "D");
    if (this.hours || this.minutes || this.seconds || a)d.push("T"),
        (this.hours || a) && d.push(Math.abs(this.hours) + "H"), (this.minutes || a) && d.push(Math.abs(this.minutes) + "M"), (this.seconds || a) && d.push(Math.abs(this.seconds) + "S");
    return d.join("")
};
g.date.Interval.prototype.equals = function (a) {
    return a.years == this.years && a.months == this.months && a.days == this.days && a.hours == this.hours && a.minutes == this.minutes && a.seconds == this.seconds
};
g.date.Interval.prototype.clone = function () {
    return new g.date.Interval(this.years, this.months, this.days, this.hours, this.minutes, this.seconds)
};
g.date.Interval.YEARS = "y";
g.date.Interval.MONTHS = "m";
g.date.Interval.DAYS = "d";
g.date.Interval.HOURS = "h";
g.date.Interval.MINUTES = "n";
g.date.Interval.SECONDS = "s";
g.date.Interval.prototype.add = function (a) {
    this.years += a.years;
    this.months += a.months;
    this.days += a.days;
    this.hours += a.hours;
    this.minutes += a.minutes;
    this.seconds += a.seconds
};
g.date.Date = function (a, c, d) {
    g.isNumber(a) ? (this.date = this.buildDate_(a, c || 0, d || 1), this.maybeFixDst_(d || 1)) : g.isObject(a) ? (this.date = this.buildDate_(a.getFullYear(), a.getMonth(), a.getDate()), this.maybeFixDst_(a.getDate())) : (this.date = new Date(g.now()), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0))
};
b = g.date.Date.prototype;
b.buildDate_ = function (a, c, d) {
    c = new Date(a, c, d);
    0 <= a && 100 > a && c.setFullYear(c.getFullYear() - 1900);
    return c
};
b.firstDayOfWeek_ = g.i18n.DateTimeSymbols.FIRSTDAYOFWEEK;
b.firstWeekCutOffDay_ = g.i18n.DateTimeSymbols.FIRSTWEEKCUTOFFDAY;
b.clone = function () {
    var a = new g.date.Date(this.date);
    a.firstDayOfWeek_ = this.firstDayOfWeek_;
    a.firstWeekCutOffDay_ = this.firstWeekCutOffDay_;
    return a
};
b.getFullYear = function () {
    return this.date.getFullYear()
};
b.getYear = function () {
    return this.getFullYear()
};
b.getMonth = function () {
    return this.date.getMonth()
};
b.getDate = function () {
    return this.date.getDate()
};
b.getTime = function () {
    return this.date.getTime()
};
b.getDay = function () {
    return this.date.getDay()
};
b.getIsoWeekday = function () {
    return(this.getDay() + 6) % 7
};
b.getUTCFullYear = function () {
    return this.date.getUTCFullYear()
};
b.getUTCMonth = function () {
    return this.date.getUTCMonth()
};
b.getUTCDate = function () {
    return this.date.getUTCDate()
};
b.getUTCDay = function () {
    return this.date.getDay()
};
b.getUTCHours = function () {
    return this.date.getUTCHours()
};
b.getUTCMinutes = function () {
    return this.date.getUTCMinutes()
};
b.getFirstDayOfWeek = function () {
    return this.firstDayOfWeek_
};
b.getFirstWeekCutOffDay = function () {
    return this.firstWeekCutOffDay_
};
b.getNumberOfDaysInMonth = function () {
    return g.date.getNumberOfDaysInMonth(this.getFullYear(), this.getMonth())
};
b.getWeekNumber = function () {
    return g.date.getWeekNumber(this.getFullYear(), this.getMonth(), this.getDate(), this.firstWeekCutOffDay_, this.firstDayOfWeek_)
};
b.getTimezoneOffset = function () {
    return this.date.getTimezoneOffset()
};
b.getTimezoneOffsetString = function () {
    var a;
    a = this.getTimezoneOffset();
    if (0 == a)a = "Z"; else {
        var c = Math.abs(a) / 60, d = Math.floor(c), c = 60 * (c - d);
        a = (0 < a ? "-" : "+") + g.string.padNumber(d, 2) + ":" + g.string.padNumber(c, 2)
    }
    return a
};
b.set = function (a) {
    this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
b.setFullYear = function (a) {
    this.date.setFullYear(a)
};
b.setYear = function (a) {
    this.setFullYear(a)
};
b.setMonth = function (a) {
    this.date.setMonth(a)
};
b.setDate = function (a) {
    this.date.setDate(a)
};
b.setTime = function (a) {
    this.date.setTime(a)
};
b.setUTCFullYear = function (a) {
    this.date.setUTCFullYear(a)
};
b.setUTCMonth = function (a) {
    this.date.setUTCMonth(a)
};
b.setUTCDate = function (a) {
    this.date.setUTCDate(a)
};
b.setFirstDayOfWeek = function (a) {
    this.firstDayOfWeek_ = a
};
b.setFirstWeekCutOffDay = function (a) {
    this.firstWeekCutOffDay_ = a
};
b.add = function (a) {
    if (a.years || a.months) {
        var c = this.getMonth() + a.months + 12 * a.years, d = this.getYear() + Math.floor(c / 12), c = c % 12;
        0 > c && (c += 12);
        var e = g.date.getNumberOfDaysInMonth(d, c), e = Math.min(e, this.getDate());
        this.setDate(1);
        this.setFullYear(d);
        this.setMonth(c);
        this.setDate(e)
    }
    a.days && (c = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(c.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), this.maybeFixDst_(a.getDate()))
};
b.toIsoString = function (a, c) {
    var d = [this.getFullYear(), g.string.padNumber(this.getMonth() + 1, 2), g.string.padNumber(this.getDate(), 2)];
    return d.join(a ? "-" : "") + (c ? this.getTimezoneOffsetString() : "")
};
b.equals = function (a) {
    return!(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
};
b.toString = function () {
    return this.toIsoString()
};
b.maybeFixDst_ = function (a) {
    this.getDate() != a && (a = this.getDate() < a ? 1 : -1, this.date.setUTCHours(this.date.getUTCHours() + a))
};
b.valueOf = function () {
    return this.date.valueOf()
};
g.date.Date.compare = function (a, c) {
    return a.getTime() - c.getTime()
};
g.date.DateTime = function (a, c, d, e, f, h, l) {
    this.date = g.isNumber(a) ? new Date(a, c || 0, d || 1, e || 0, f || 0, h || 0, l || 0) : new Date(a ? a.getTime() : g.now())
};
g.inherits(g.date.DateTime, g.date.Date);
g.date.DateTime.fromTimestamp = function (a) {
    var c = new g.date.DateTime;
    c.setTime(a);
    return c
};
g.date.DateTime.fromRfc822String = function (a) {
    a = new Date(a);
    return isNaN(a.getTime()) ? null : new g.date.DateTime(a)
};
b = g.date.DateTime.prototype;
b.getHours = function () {
    return this.date.getHours()
};
b.getMinutes = function () {
    return this.date.getMinutes()
};
b.getSeconds = function () {
    return this.date.getSeconds()
};
b.getMilliseconds = function () {
    return this.date.getMilliseconds()
};
b.getUTCDay = function () {
    return this.date.getUTCDay()
};
b.getUTCHours = function () {
    return this.date.getUTCHours()
};
b.getUTCMinutes = function () {
    return this.date.getUTCMinutes()
};
b.getUTCSeconds = function () {
    return this.date.getUTCSeconds()
};
b.getUTCMilliseconds = function () {
    return this.date.getUTCMilliseconds()
};
b.setHours = function (a) {
    this.date.setHours(a)
};
b.setMinutes = function (a) {
    this.date.setMinutes(a)
};
b.setSeconds = function (a) {
    this.date.setSeconds(a)
};
b.setMilliseconds = function (a) {
    this.date.setMilliseconds(a)
};
b.setUTCHours = function (a) {
    this.date.setUTCHours(a)
};
b.setUTCMinutes = function (a) {
    this.date.setUTCMinutes(a)
};
b.setUTCSeconds = function (a) {
    this.date.setUTCSeconds(a)
};
b.setUTCMilliseconds = function (a) {
    this.date.setUTCMilliseconds(a)
};
b.add = function (a) {
    g.date.Date.prototype.add.call(this, a);
    a.hours && this.setHours(this.date.getHours() + a.hours);
    a.minutes && this.setMinutes(this.date.getMinutes() + a.minutes);
    a.seconds && this.setSeconds(this.date.getSeconds() + a.seconds)
};
b.toIsoString = function (a, c) {
    var d = g.date.Date.prototype.toIsoString.call(this, a);
    return a ? d + " " + g.string.padNumber(this.getHours(), 2) + ":" + g.string.padNumber(this.getMinutes(), 2) + ":" + g.string.padNumber(this.getSeconds(), 2) + (c ? this.getTimezoneOffsetString() : "") : d + "T" + g.string.padNumber(this.getHours(), 2) + g.string.padNumber(this.getMinutes(), 2) + g.string.padNumber(this.getSeconds(), 2) + (c ? this.getTimezoneOffsetString() : "")
};
b.equals = function (a) {
    return this.getTime() == a.getTime()
};
b.toString = function () {
    return this.toIsoString()
};
b.clone = function () {
    var a = new g.date.DateTime(this.date);
    a.setFirstDayOfWeek(this.getFirstDayOfWeek());
    a.setFirstWeekCutOffDay(this.getFirstWeekCutOffDay());
    return a
};
g.array = {};
g.NATIVE_ARRAY_PROTOTYPES = g.TRUSTED_SITE;
g.array.ASSUME_NATIVE_FUNCTIONS = !1;
g.array.peek = function (a) {
    return a[a.length - 1]
};
g.array.last = g.array.peek;
g.array.ARRAY_PROTOTYPE_ = Array.prototype;
g.array.indexOf = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.indexOf) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.indexOf.call(a, c, d)
} : function (a, c, d) {
    d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
    if (g.isString(a))return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
    for (; d < a.length; d++)if (d in a && a[d] === c)return d;
    return-1
};
g.array.lastIndexOf = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    d = null == d ? a.length - 1 : d;
    return g.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, c, d)
} : function (a, c, d) {
    d = null == d ? a.length - 1 : d;
    0 > d && (d = Math.max(0, a.length + d));
    if (g.isString(a))return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
    for (; 0 <= d; d--)if (d in a && a[d] === c)return d;
    return-1
};
g.array.forEach = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.forEach) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    g.array.ARRAY_PROTOTYPE_.forEach.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0; h < e; h++)h in f && c.call(d, f[h], h, a)
};
g.array.forEachRight = function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; --e)e in f && c.call(d, f[e], e, a)
};
g.array.filter = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.filter) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.filter.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, f = [], h = 0, l = g.isString(a) ? a.split("") : a, m = 0; m < e; m++)if (m in l) {
        var n = l[m];
        c.call(d, n, m, a) && (f[h++] = n)
    }
    return f
};
g.array.map = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.map) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.map.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, l = 0; l < e; l++)l in h && (f[l] = c.call(d, h[l], l, a));
    return f
};
g.array.reduce = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.reduce) ? function (a, c, d, e) {
    g.asserts.assert(null != a.length);
    e && (c = g.bind(c, e));
    return g.array.ARRAY_PROTOTYPE_.reduce.call(a, c, d)
} : function (a, c, d, e) {
    var f = d;
    g.array.forEach(a, function (d, l) {
        f = c.call(e, f, d, l, a)
    });
    return f
};
g.array.reduceRight = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.reduceRight) ? function (a, c, d, e) {
    g.asserts.assert(null != a.length);
    e && (c = g.bind(c, e));
    return g.array.ARRAY_PROTOTYPE_.reduceRight.call(a, c, d)
} : function (a, c, d, e) {
    var f = d;
    g.array.forEachRight(a, function (d, l) {
        f = c.call(e, f, d, l, a)
    });
    return f
};
g.array.some = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.some) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.some.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in f && c.call(d, f[h], h, a))return!0;
    return!1
};
g.array.every = g.NATIVE_ARRAY_PROTOTYPES && (g.array.ASSUME_NATIVE_FUNCTIONS || g.array.ARRAY_PROTOTYPE_.every) ? function (a, c, d) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.every.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in f && !c.call(d, f[h], h, a))return!1;
    return!0
};
g.array.count = function (a, c, d) {
    var e = 0;
    g.array.forEach(a, function (a, h, l) {
        c.call(d, a, h, l) && ++e
    }, d);
    return e
};
g.array.find = function (a, c, d) {
    c = g.array.findIndex(a, c, d);
    return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c]
};
g.array.findIndex = function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in f && c.call(d, f[h], h, a))return h;
    return-1
};
g.array.findRight = function (a, c, d) {
    c = g.array.findIndexRight(a, c, d);
    return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c]
};
g.array.findIndexRight = function (a, c, d) {
    for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; e--)if (e in f && c.call(d, f[e], e, a))return e;
    return-1
};
g.array.contains = function (a, c) {
    return 0 <= g.array.indexOf(a, c)
};
g.array.isEmpty = function (a) {
    return 0 == a.length
};
g.array.clear = function (a) {
    if (!g.isArray(a))for (var c = a.length - 1; 0 <= c; c--)delete a[c];
    a.length = 0
};
g.array.insert = function (a, c) {
    g.array.contains(a, c) || a.push(c)
};
g.array.insertAt = function (a, c, d) {
    g.array.splice(a, d, 0, c)
};
g.array.insertArrayAt = function (a, c, d) {
    g.partial(g.array.splice, a, d, 0).apply(null, c)
};
g.array.insertBefore = function (a, c, d) {
    var e;
    2 == arguments.length || 0 > (e = g.array.indexOf(a, d)) ? a.push(c) : g.array.insertAt(a, c, e)
};
g.array.remove = function (a, c) {
    var d = g.array.indexOf(a, c), e;
    (e = 0 <= d) && g.array.removeAt(a, d);
    return e
};
g.array.removeAt = function (a, c) {
    g.asserts.assert(null != a.length);
    return 1 == g.array.ARRAY_PROTOTYPE_.splice.call(a, c, 1).length
};
g.array.removeIf = function (a, c, d) {
    c = g.array.findIndex(a, c, d);
    return 0 <= c ? (g.array.removeAt(a, c), !0) : !1
};
g.array.concat = function (a) {
    return g.array.ARRAY_PROTOTYPE_.concat.apply(g.array.ARRAY_PROTOTYPE_, arguments)
};
g.array.join = function (a) {
    return g.array.ARRAY_PROTOTYPE_.concat.apply(g.array.ARRAY_PROTOTYPE_, arguments)
};
g.array.toArray = function (a) {
    var c = a.length;
    if (0 < c) {
        for (var d = Array(c), e = 0; e < c; e++)d[e] = a[e];
        return d
    }
    return[]
};
g.array.clone = g.array.toArray;
g.array.extend = function (a, c) {
    for (var d = 1; d < arguments.length; d++) {
        var e = arguments[d], f;
        if (g.isArray(e) || (f = g.isArrayLike(e)) && Object.prototype.hasOwnProperty.call(e, "callee"))a.push.apply(a, e); else if (f)for (var h = a.length, l = e.length, m = 0; m < l; m++)a[h + m] = e[m]; else a.push(e)
    }
};
g.array.splice = function (a, c, d, e) {
    g.asserts.assert(null != a.length);
    return g.array.ARRAY_PROTOTYPE_.splice.apply(a, g.array.slice(arguments, 1))
};
g.array.slice = function (a, c, d) {
    g.asserts.assert(null != a.length);
    return 2 >= arguments.length ? g.array.ARRAY_PROTOTYPE_.slice.call(a, c) : g.array.ARRAY_PROTOTYPE_.slice.call(a, c, d)
};
g.array.removeDuplicates = function (a, c, d) {
    c = c || a;
    var e = function () {
        return g.isObject(l) ? "o" + g.getUid(l) : (typeof l).charAt(0) + l
    };
    d = d || e;
    for (var e = {}, f = 0, h = 0; h < a.length;) {
        var l = a[h++], m = d(l);
        Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = l)
    }
    c.length = f
};
g.array.binarySearch = function (a, c, d) {
    return g.array.binarySearch_(a, d || g.array.defaultCompare, !1, c)
};
g.array.binarySelect = function (a, c, d) {
    return g.array.binarySearch_(a, c, !0, void 0, d)
};
g.array.binarySearch_ = function (a, c, d, e, f) {
    for (var h = 0, l = a.length, m; h < l;) {
        var n = h + l >> 1, p;
        p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
        0 < p ? h = n + 1 : (l = n, m = !p)
    }
    return m ? h : ~h
};
g.array.sort = function (a, c) {
    a.sort(c || g.array.defaultCompare)
};
g.array.stableSort = function (a, c) {
    function d(a, c) {
        return f(a.value, c.value) || a.index - c.index
    }

    for (var e = 0; e < a.length; e++)a[e] = {index: e, value: a[e]};
    var f = c || g.array.defaultCompare;
    g.array.sort(a, d);
    for (e = 0; e < a.length; e++)a[e] = a[e].value
};
g.array.sortObjectsByKey = function (a, c, d) {
    var e = d || g.array.defaultCompare;
    g.array.sort(a, function (a, d) {
        return e(a[c], d[c])
    })
};
g.array.isSorted = function (a, c, d) {
    c = c || g.array.defaultCompare;
    for (var e = 1; e < a.length; e++) {
        var f = c(a[e - 1], a[e]);
        if (0 < f || 0 == f && d)return!1
    }
    return!0
};
g.array.equals = function (a, c, d) {
    if (!g.isArrayLike(a) || !g.isArrayLike(c) || a.length != c.length)return!1;
    var e = a.length;
    d = d || g.array.defaultCompareEquality;
    for (var f = 0; f < e; f++)if (!d(a[f], c[f]))return!1;
    return!0
};
g.array.compare3 = function (a, c, d) {
    d = d || g.array.defaultCompare;
    for (var e = Math.min(a.length, c.length), f = 0; f < e; f++) {
        var h = d(a[f], c[f]);
        if (0 != h)return h
    }
    return g.array.defaultCompare(a.length, c.length)
};
g.array.defaultCompare = function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0
};
g.array.defaultCompareEquality = function (a, c) {
    return a === c
};
g.array.binaryInsert = function (a, c, d) {
    d = g.array.binarySearch(a, c, d);
    return 0 > d ? (g.array.insertAt(a, c, -(d + 1)), !0) : !1
};
g.array.binaryRemove = function (a, c, d) {
    c = g.array.binarySearch(a, c, d);
    return 0 <= c ? g.array.removeAt(a, c) : !1
};
g.array.bucket = function (a, c, d) {
    for (var e = {}, f = 0; f < a.length; f++) {
        var h = a[f], l = c.call(d, h, f, a);
        g.isDef(l) && (l = e[l] || (e[l] = []), l.push(h))
    }
    return e
};
g.array.toObject = function (a, c, d) {
    var e = {};
    g.array.forEach(a, function (f, h) {
        e[c.call(d, f, h, a)] = f
    });
    return e
};
g.array.range = function (a, c, d) {
    var e = [], f = 0, h = a;
    d = d || 1;
    void 0 !== c && (f = a, h = c);
    if (0 > d * (h - f))return[];
    if (0 < d)for (a = f; a < h; a += d)e.push(a); else for (a = f; a > h; a += d)e.push(a);
    return e
};
g.array.repeat = function (a, c) {
    for (var d = [], e = 0; e < c; e++)d[e] = a;
    return d
};
g.array.flatten = function (a) {
    for (var c = [], d = 0; d < arguments.length; d++) {
        var e = arguments[d];
        g.isArray(e) ? c.push.apply(c, g.array.flatten.apply(null, e)) : c.push(e)
    }
    return c
};
g.array.rotate = function (a, c) {
    g.asserts.assert(null != a.length);
    a.length && (c %= a.length, 0 < c ? g.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -c)));
    return a
};
g.array.moveItem = function (a, c, d) {
    g.asserts.assert(0 <= c && c < a.length);
    g.asserts.assert(0 <= d && d < a.length);
    c = g.array.ARRAY_PROTOTYPE_.splice.call(a, c, 1);
    g.array.ARRAY_PROTOTYPE_.splice.call(a, d, 0, c[0])
};
g.array.zip = function (a) {
    if (!arguments.length)return[];
    for (var c = [], d = 0; ; d++) {
        for (var e = [], f = 0; f < arguments.length; f++) {
            var h = arguments[f];
            if (d >= h.length)
                return c;
            e.push(h[d])
        }
        c.push(e)
    }
};
g.array.shuffle = function (a, c) {
    for (var d = c || Math.random, e = a.length - 1; 0 < e; e--) {
        var f = Math.floor(d() * (e + 1)),
            h = a[e];
        a[e] = a[f];
        a[f] = h
    }
};
g.functions = {};
g.functions.constant = function (a) {
    return function () {
        return a
    }
};
g.functions.FALSE = g.functions.constant(!1);
g.functions.TRUE = g.functions.constant(!0);
g.functions.NULL = g.functions.constant(null);
g.functions.identity = function (a) {
    return a
};
g.functions.error = function (a) {
    return function () {
        throw Error(a);
    }
};
g.functions.fail = function (a) {
    return function () {
        throw a;
    }
};
g.functions.lock = function (a, c) {
    c = c || 0;
    return function () {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, c))
    }
};
g.functions.nth = function (a) {
    return function () {
        return arguments[a]
    }
};
g.functions.withReturnValue = function (a, c) {
    return g.functions.sequence(a, g.functions.constant(c))
};
g.functions.compose = function (a, c) {
    var d = arguments, e = d.length;
    return function () {
        var a;
        e && (a = d[e - 1].apply(this, arguments));
        for (var c = e - 2; 0 <= c; c--)a = d[c].call(this, a);
        return a
    }
};
g.functions.sequence = function (a) {
    var c = arguments, d = c.length;
    return function () {
        for (var a, f = 0; f < d; f++)a = c[f].apply(this, arguments);
        return a
    }
};
g.functions.and = function (a) {
    var c = arguments, d = c.length;
    return function () {
        for (var a = 0; a < d; a++)if (!c[a].apply(this, arguments))return!1;
        return!0
    }
};
g.functions.or = function (a) {
    var c = arguments, d = c.length;
    return function () {
        for (var a = 0; a < d; a++)if (c[a].apply(this, arguments))return!0;
        return!1
    }
};
g.functions.not = function (a) {
    return function () {
        return!a.apply(this, arguments)
    }
};
g.functions.create = function (a, c) {
    var d = function () {
    };
    d.prototype = a.prototype;
    d = new d;
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d
};
g.functions.CACHE_RETURN_VALUE = !0;
g.functions.cacheReturnValue = function (a) {
    var c = !1, d;
    return function () {
        if (!g.functions.CACHE_RETURN_VALUE)return a();
        c || (d = a(), c = !0);
        return d
    }
};
g.math = {};
g.math.randomInt = function (a) {
    return Math.floor(Math.random() * a)
};
g.math.uniformRandom = function (a, c) {
    return a + Math.random() * (c - a)
};
g.math.clamp = function (a, c, d) {
    return Math.min(Math.max(a, c), d)
};
g.math.modulo = function (a, c) {
    var d = a % c;
    return 0 > d * c ? d + c : d
};
g.math.lerp = function (a, c, d) {
    return a + d * (c - a)
};
g.math.nearlyEquals = function (a, c, d) {
    return Math.abs(a - c) <= (d || 1E-6)
};
g.math.standardAngle = function (a) {
    return g.math.modulo(a, 360)
};
g.math.standardAngleInRadians = function (a) {
    return g.math.modulo(a, 2 * Math.PI)
};
g.math.toRadians = function (a) {
    return a * Math.PI / 180
};
g.math.toDegrees = function (a) {
    return 180 * a / Math.PI
};
g.math.angleDx = function (a, c) {
    return c * Math.cos(g.math.toRadians(a))
};
g.math.angleDy = function (a, c) {
    return c * Math.sin(g.math.toRadians(a))
};
g.math.angle = function (a, c, d, e) {
    return g.math.standardAngle(g.math.toDegrees(Math.atan2(e - c, d - a)))
};
g.math.angleDifference = function (a, c) {
    var d = g.math.standardAngle(c) - g.math.standardAngle(a);
    180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
    return d
};
g.math.sign = function (a) {
    return 0 == a ? 0 : 0 > a ? -1 : 1
};
g.math.longestCommonSubsequence = function (a, c, d, e) {
    d = d || function (a, c) {
        return a == c
    };
    e = e || function (c) {
        return a[c]
    };
    for (var f = a.length, h = c.length, l = [], m = 0; m < f + 1; m++)
        l[m] = [], l[m][0] = 0;
    for (var n = 0; n < h + 1; n++)
        l[0][n] = 0;
    for (m = 1; m <= f; m++)
        for (n = 1; n <= h; n++)
            d(a[m - 1], c[n - 1]) ? l[m][n] = l[m - 1][n - 1] + 1 : l[m][n] = Math.max(l[m - 1][n], l[m][n - 1]);
    for (var p = [], m = f, n = h; 0 < m && 0 < n;)
        d(a[m - 1], c[n - 1]) ? (p.unshift(e(m - 1, n - 1)), m--, n--) : l[m - 1][n] > l[m][n - 1] ? m-- : n--;
    return p
};
g.math.sum = function (a) {
    return g.array.reduce(arguments, function (a, d) {
        return a + d
    }, 0)
};
g.math.average = function (a) {
    return g.math.sum.apply(null, arguments) / arguments.length
};
g.math.sampleVariance = function (a) {
    var c = arguments.length;
    if (2 > c)return 0;
    var d = g.math.average.apply(null, arguments);
    return c = g.math.sum.apply(null, g.array.map(arguments, function (a) {
        return Math.pow(a - d, 2)
    })) / (c - 1)
};
g.math.standardDeviation = function (a) {
    return Math.sqrt(g.math.sampleVariance.apply(null, arguments))
};
g.math.isInt = function (a) {
    return isFinite(a) && 0 == a % 1
};
g.math.isFiniteNumber = function (a) {
    return isFinite(a) && !isNaN(a)
};
g.math.log10Floor = function (a) {
    if (0 < a) {
        var c = Math.round(Math.log(a) * Math.LOG10E);
        return c - (parseFloat("1e" + c) > a)
    }
    return 0 == a ? -Infinity : NaN
};
g.math.safeFloor = function (a, c) {
    g.asserts.assert(!g.isDef(c) || 0 < c);
    return Math.floor(a + (c || 2E-15))
};
g.math.safeCeil = function (a, c) {
    g.asserts.assert(!g.isDef(c) || 0 < c);
    return Math.ceil(a - (c || 2E-15))
};
g.iter = {};
g.iter.StopIteration = "StopIteration"in g.global ? g.global.StopIteration : Error("StopIteration");
g.iter.Iterator = function () {
};
g.iter.Iterator.prototype.next = function () {
    throw g.iter.StopIteration;
};
g.iter.Iterator.prototype.__iterator__ = function () {
    return this
};
g.iter.toIterator = function (a) {
    if (a instanceof g.iter.Iterator)
        return a;
    if ("function" == typeof a.__iterator__)
        return a.__iterator__(!1);
    if (g.isArrayLike(a)) {
        var c = 0,
            d = new g.iter.Iterator;
        d.next = function () {
            for (; ;) {
                if (c >= a.length)
                    throw g.iter.StopIteration;
                if (c in a)
                    return a[c++];
                c++
            }
        };
        return d
    }
    throw Error("Not implemented");
};
g.iter.forEach = function (a, c, d) {
    if (g.isArrayLike(a))try {
        g.array.forEach(a, c, d)
    } catch (e) {
        if (e !== g.iter.StopIteration)
            throw e;
    } else {
        a = g.iter.toIterator(a);
        try {
            for (; ;)
                c.call(d, a.next(), void 0, a)
        } catch (f) {
            if (f !== g.iter.StopIteration)
                throw f;
        }
    }
};
g.iter.filter = function (a, c, d) {
    var e = g.iter.toIterator(a);
    a = new g.iter.Iterator;
    a.next = function () {
        for (; ;) {
            var a = e.next();
            if (c.call(d, a, void 0, e))return a
        }
    };
    return a
};
g.iter.filterFalse = function (a, c, d) {
    return g.iter.filter(a, g.functions.not(c), d)
};
g.iter.range = function (a, c, d) {
    var e = 0, f = a, h = d || 1;
    1 < arguments.length && (e = a, f = c);
    if (0 == h)throw Error("Range step argument must not be zero");
    var l = new g.iter.Iterator;
    l.next = function () {
        if (0 < h && e >= f || 0 > h && e <= f)throw g.iter.StopIteration;
        var a = e;
        e += h;
        return a
    };
    return l
};
g.iter.join = function (a, c) {
    return g.iter.toArray(a).join(c)
};
g.iter.map = function (a, c, d) {
    var e = g.iter.toIterator(a);
    a = new g.iter.Iterator;
    a.next = function () {
        var a = e.next();
        return c.call(d, a, void 0, e)
    };
    return a
};
g.iter.reduce = function (a, c, d, e) {
    var f = d;
    g.iter.forEach(a, function (a) {
        f = c.call(e, f, a)
    });
    return f
};
g.iter.some = function (a, c, d) {
    a = g.iter.toIterator(a);
    try {
        for (; ;)if (c.call(d, a.next(), void 0, a))return!0
    } catch (e) {
        if (e !== g.iter.StopIteration)throw e;
    }
    return!1
};
g.iter.every = function (a, c, d) {
    a = g.iter.toIterator(a);
    try {
        for (; ;)if (!c.call(d, a.next(), void 0, a))return!1
    } catch (e) {
        if (e !== g.iter.StopIteration)throw e;
    }
    return!0
};
g.iter.chain = function (a) {
    var c = g.iter.toIterator(arguments), d = new g.iter.Iterator, e = null;
    d.next = function () {
        for (; ;) {
            if (null == e) {
                var a = c.next();
                e = g.iter.toIterator(a)
            }
            try {
                return e.next()
            } catch (d) {
                if (d !== g.iter.StopIteration)throw d;
                e = null
            }
        }
    };
    return d
};
g.iter.chainFromIterable = function (a) {
    return g.iter.chain.apply(void 0, a)
};
g.iter.dropWhile = function (a, c, d) {
    var e = g.iter.toIterator(a);
    a = new g.iter.Iterator;
    var f = !0;
    a.next = function () {
        for (; ;) {
            var a = e.next();
            if (!f || !c.call(d, a, void 0, e))return f = !1, a
        }
    };
    return a
};
g.iter.takeWhile = function (a, c, d) {
    var e = g.iter.toIterator(a);
    a = new g.iter.Iterator;
    var f = !0;
    a.next = function () {
        for (; ;)if (f) {
            var a = e.next();
            if (c.call(d, a, void 0, e))return a;
            f = !1
        } else throw g.iter.StopIteration;
    };
    return a
};
g.iter.toArray = function (a) {
    if (g.isArrayLike(a))return g.array.toArray(a);
    a = g.iter.toIterator(a);
    var c = [];
    g.iter.forEach(a, function (a) {
        c.push(a)
    });
    return c
};
g.iter.equals = function (a, c) {
    var d = {}, d = g.iter.zipLongest(d, a, c);
    return g.iter.every(d, function (a) {
        return a[0] == a[1]
    })
};
g.iter.nextOrValue = function (a, c) {
    try {
        return g.iter.toIterator(a).next()
    } catch (d) {
        if (d != g.iter.StopIteration)throw d;
        return c
    }
};
g.iter.product = function (a) {
    var c = g.array.some(arguments, function (a) {
        return!a.length
    });
    if (c || !arguments.length)return new g.iter.Iterator;
    var c = new g.iter.Iterator, d = arguments, e = g.array.repeat(0, d.length);
    c.next = function () {
        if (e) {
            for (var a = g.array.map(e, function (a, c) {
                return d[c][a]
            }), c = e.length - 1; 0 <= c; c--) {
                g.asserts.assert(e);
                if (e[c] < d[c].length - 1) {
                    e[c]++;
                    break
                }
                if (0 == c) {
                    e = null;
                    break
                }
                e[c] = 0
            }
            return a
        }
        throw g.iter.StopIteration;
    };
    return c
};
g.iter.cycle = function (a) {
    var c = g.iter.toIterator(a), d = [], e = 0;
    a = new g.iter.Iterator;
    var f = !1;
    a.next = function () {
        var a = null;
        if (!f)try {
            return a = c.next(), d.push(a), a
        } catch (l) {
            if (l != g.iter.StopIteration || g.array.isEmpty(d))throw l;
            f = !0
        }
        a = d[e];
        e = (e + 1) % d.length;
        return a
    };
    return a
};
g.iter.count = function (a, c) {
    var d = a || 0, e = g.isDef(c) ? c : 1, f = new g.iter.Iterator;
    f.next = function () {
        var a = d;
        d += e;
        return a
    };
    return f
};
g.iter.repeat = function (a) {
    var c = new g.iter.Iterator;
    c.next = g.functions.constant(a);
    return c
};
g.iter.accumulate = function (a) {
    var c = g.iter.toIterator(a), d = 0;
    a = new g.iter.Iterator;
    a.next = function () {
        return d += c.next()
    };
    return a
};
g.iter.zip = function (a) {
    var c = arguments, d = new g.iter.Iterator;
    if (0 < c.length) {
        var e = g.array.map(c, g.iter.toIterator);
        d.next = function () {
            var a = g.array.map(e, function (a) {
                return a.next()
            });
            return a
        }
    }
    return d
};
g.iter.zipLongest = function (a, c) {
    var d = g.array.slice(arguments, 1), e = new g.iter.Iterator;
    if (0 < d.length) {
        var f = g.array.map(d, g.iter.toIterator);
        e.next = function () {
            var c = !1, d = g.array.map(f, function (d) {
                var e;
                try {
                    e = d.next(), c = !0
                } catch (f) {
                    if (f !== g.iter.StopIteration)throw f;
                    e = a
                }
                return e
            });
            if (!c)throw g.iter.StopIteration;
            return d
        }
    }
    return e
};
g.iter.compress = function (a, c) {
    var d = g.iter.toIterator(c);
    return g.iter.filter(a, function () {
        return!!d.next()
    })
};
g.iter.GroupByIterator_ = function (a, c) {
    this.iterator = g.iter.toIterator(a);
    this.keyFunc = c || g.functions.identity
};
g.inherits(g.iter.GroupByIterator_, g.iter.Iterator);
g.iter.GroupByIterator_.prototype.next = function () {
    for (; this.currentKey == this.targetKey;)this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
    this.targetKey = this.currentKey;
    return[this.currentKey, this.groupItems_(this.targetKey)]
};
g.iter.GroupByIterator_.prototype.groupItems_ = function (a) {
    for (var c = []; this.currentKey == a;) {
        c.push(this.currentValue);
        try {
            this.currentValue = this.iterator.next()
        } catch (d) {
            if (d !== g.iter.StopIteration)throw d;
            break
        }
        this.currentKey = this.keyFunc(this.currentValue)
    }
    return c
};
g.iter.groupBy = function (a, c) {
    return new g.iter.GroupByIterator_(a, c)
};
g.iter.starMap = function (a, c, d) {
    var e = g.iter.toIterator(a);
    a = new g.iter.Iterator;
    a.next = function () {
        var a = g.iter.toArray(e.next());
        return c.apply(d, g.array.concat(a, void 0, e))
    };
    return a
};
g.iter.tee = function (a, c) {
    var d = g.iter.toIterator(a), e = g.isNumber(c) ? c : 2, f = g.array.map(g.array.range(e), function () {
        return[]
    }), h = function () {
        var a = d.next();
        g.array.forEach(f, function (c) {
            c.push(a)
        })
    }, e = function (a) {
        var c = new g.iter.Iterator;
        c.next = function () {
            g.array.isEmpty(a) && h();
            g.asserts.assert(!g.array.isEmpty(a));
            return a.shift()
        };
        return c
    };
    return g.array.map(f, e)
};
g.iter.enumerate = function (a, c) {
    return g.iter.zip(g.iter.count(c), a)
};
g.iter.limit = function (a, c) {
    g.asserts.assert(g.math.isInt(c) && 0 <= c);
    var d = g.iter.toIterator(a), e = new g.iter.Iterator, f = c;
    e.next = function () {
        if (0 < f--)return d.next();
        throw g.iter.StopIteration;
    };
    return e
};
g.iter.consume = function (a, c) {
    g.asserts.assert(g.math.isInt(c) && 0 <= c);
    for (var d = g.iter.toIterator(a); 0 < c--;)g.iter.nextOrValue(d, null);
    return d
};
g.iter.slice = function (a, c, d) {
    g.asserts.assert(g.math.isInt(c) && 0 <= c);
    a = g.iter.consume(a, c);
    g.isNumber(d) && (g.asserts.assert(g.math.isInt(d) && d >= c), a = g.iter.limit(a, d - c));
    return a
};
g.iter.hasDuplicates_ = function (a) {
    var c = [];
    g.array.removeDuplicates(a, c);
    return a.length != c.length
};
g.iter.permutations = function (a, c) {
    var d = g.iter.toArray(a), e = g.isNumber(c) ? c : d.length, d = g.array.repeat(d, e), d = g.iter.product.apply(void 0, d);
    return g.iter.filter(d, function (a) {
        return!g.iter.hasDuplicates_(a)
    })
};
g.iter.combinations = function (a, c) {
    function d(a) {
        return e[a]
    }

    var e = g.iter.toArray(a), f = g.iter.range(e.length), f = g.iter.permutations(f, c), h = g.iter.filter(f, function (a) {
        return g.array.isSorted(a)
    }), f = new g.iter.Iterator;
    f.next = function () {
        return g.array.map(h.next(), d)
    };
    return f
};
g.iter.combinationsWithReplacement = function (a, c) {
    function d(a) {
        return e[a]
    }

    var e = g.iter.toArray(a), f = g.array.range(e.length), f = g.array.repeat(f, c), f = g.iter.product.apply(void 0, f), h = g.iter.filter(f, function (a) {
        return g.array.isSorted(a)
    }), f = new g.iter.Iterator;
    f.next = function () {
        return g.array.map(h.next(), d)
    };
    return f
};
g.date.DateRange = function (a, c) {
    this.startDate_ = a;
    this.endDate_ = c
};
g.date.DateRange.MINIMUM_DATE = new g.date.Date(0, 0, 1);
g.date.DateRange.MAXIMUM_DATE = new g.date.Date(9999, 11, 31);
g.date.DateRange.prototype.getStartDate = function () {
    return this.startDate_
};
g.date.DateRange.prototype.getEndDate = function () {
    return this.endDate_
};
g.date.DateRange.prototype.contains = function (a) {
    return a.valueOf() >= this.startDate_.valueOf() && a.valueOf() <= this.endDate_.valueOf()
};
g.date.DateRange.prototype.iterator = function () {
    return new g.date.DateRange.Iterator(this)
};
g.date.DateRange.equals = function (a, c) {
    return a === c ? !0 : null == a || null == c ? !1 : a.startDate_.equals(c.startDate_) && a.endDate_.equals(c.endDate_)
};
g.date.DateRange.offsetInDays_ = function (a, c) {
    var d = a.clone();
    d.add(new g.date.Interval(g.date.Interval.DAYS, c));
    return d
};
g.date.DateRange.currentOrLastMonday_ = function (a) {
    a = a.clone();
    a.add(new g.date.Interval(g.date.Interval.DAYS, -a.getIsoWeekday()));
    return a
};
g.date.DateRange.offsetInMonths_ = function (a, c) {
    var d = a.clone();
    d.setDate(1);
    d.add(new g.date.Interval(g.date.Interval.MONTHS, c));
    return d
};
g.date.DateRange.yesterday = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    a = g.date.DateRange.offsetInDays_(a, -1);
    return new g.date.DateRange(a, a)
};
g.date.DateRange.today = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    return new g.date.DateRange(a, a)
};
g.date.DateRange.last7Days = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    var c = g.date.DateRange.offsetInDays_(a, -1);
    return new g.date.DateRange(g.date.DateRange.offsetInDays_(a, -7), c)
};
g.date.DateRange.thisMonth = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    return new g.date.DateRange(g.date.DateRange.offsetInMonths_(a, 0), g.date.DateRange.offsetInDays_(g.date.DateRange.offsetInMonths_(a, 1), -1))
};
g.date.DateRange.lastMonth = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    return new g.date.DateRange(g.date.DateRange.offsetInMonths_(a, -1), g.date.DateRange.offsetInDays_(g.date.DateRange.offsetInMonths_(a, 0), -1))
};
g.date.DateRange.thisWeek = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    var c = a.getIsoWeekday(), d = a.getFirstDayOfWeek(), c = c >= d ? c - d : c + (7 - d);
    a = g.date.DateRange.offsetInDays_(a, -c);
    c = g.date.DateRange.offsetInDays_(a, 6);
    return new g.date.DateRange(a, c)
};
g.date.DateRange.lastWeek = function (a) {
    var c = g.date.DateRange.thisWeek(a);
    a = g.date.DateRange.offsetInDays_(c.getStartDate(), -7);
    c = g.date.DateRange.offsetInDays_(c.getEndDate(), -7);
    return new g.date.DateRange(a, c)
};
g.date.DateRange.lastBusinessWeek = function (a) {
    a = g.date.DateRange.cloneOrCreate_(a);
    a = g.date.DateRange.offsetInDays_(a, -7 - a.getIsoWeekday());
    var c = g.date.DateRange.offsetInDays_(a, 4);
    return new g.date.DateRange(a, c)
};
g.date.DateRange.allTime = function () {
    return new g.date.DateRange(g.date.DateRange.MINIMUM_DATE, g.date.DateRange.MAXIMUM_DATE)
};
g.date.DateRange.StandardDateRangeKeys = {YESTERDAY: "yesterday", TODAY: "today", LAST_7_DAYS: "last7days", THIS_MONTH: "thismonth", LAST_MONTH: "lastmonth", THIS_WEEK: "thisweek", LAST_WEEK: "lastweek", LAST_BUSINESS_WEEK: "lastbusinessweek", ALL_TIME: "alltime"};
g.date.DateRange.standardDateRange = function (a, c) {
    switch (a) {
        case g.date.DateRange.StandardDateRangeKeys.YESTERDAY:
            return g.date.DateRange.yesterday(c);
        case g.date.DateRange.StandardDateRangeKeys.TODAY:
            return g.date.DateRange.today(c);
        case g.date.DateRange.StandardDateRangeKeys.LAST_7_DAYS:
            return g.date.DateRange.last7Days(c);
        case g.date.DateRange.StandardDateRangeKeys.THIS_MONTH:
            return g.date.DateRange.thisMonth(c);
        case g.date.DateRange.StandardDateRangeKeys.LAST_MONTH:
            return g.date.DateRange.lastMonth(c);
        case g.date.DateRange.StandardDateRangeKeys.THIS_WEEK:
            return g.date.DateRange.thisWeek(c);
        case g.date.DateRange.StandardDateRangeKeys.LAST_WEEK:
            return g.date.DateRange.lastWeek(c);
        case g.date.DateRange.StandardDateRangeKeys.LAST_BUSINESS_WEEK:
            return g.date.DateRange.lastBusinessWeek(c);
        case g.date.DateRange.StandardDateRangeKeys.ALL_TIME:
            return g.date.DateRange.allTime(c);
        default:
            throw Error("no such date range key: " + a);
    }
};
g.date.DateRange.cloneOrCreate_ = function (a) {
    return a ? a.clone() : new g.date.Date
};
g.date.DateRange.Iterator = function (a) {
    this.nextDate_ = a.getStartDate().clone();
    this.endDate_ = Number(a.getEndDate().toIsoString())
};
g.inherits(g.date.DateRange.Iterator, g.iter.Iterator);
g.date.DateRange.Iterator.prototype.next = function () {
    if (Number(this.nextDate_.toIsoString()) > this.endDate_)throw g.iter.StopIteration;
    var a = this.nextDate_.clone();
    this.nextDate_.add(new g.date.Interval(g.date.Interval.DAYS, 1));
    return a
};
var k = {
    DateRange: {}
};
k.DateRange.DateOptions = {
    LAST_7_DAYS: "last7days",
    LAST_30_DAYS: "last30days"
};
k.DateRange.numberOfDays = function (a, c) {
    var d = a.getTime(),
        e = c.getTime(),
        d = (e - d) / 864E5;
    return Math.max(0, Math.round(d))
};
k.DateRange.offsetInDays_ = function (a, c) {
    var d = a.clone();
    d.add(new g.date.Interval(g.date.Interval.DAYS, c));
    return d
};
k.DateRange.lastNdays = function (a, c, d) {
    c = c || 1;
    d = d || new g.date.Date;
    a = k.DateRange.offsetInDays_(d, -a);
    c = k.DateRange.offsetInDays_(d, -c);
    return a = new g.date.DateRange(a, c)
};
k.DateRange.getDateIntervalString = function (a) {
    var c = k.DateRange.numberOfDays(a.getStartDate(), a.getEndDate());
    return a = 0 == c ? g.date.DateRange.equals(a, g.date.DateRange.standardDateRange(g.date.DateRange.StandardDateRangeKeys.TODAY)) ? "today" : g.date.DateRange.equals(a, g.date.DateRange.standardDateRange(g.date.DateRange.StandardDateRangeKeys.YESTERDAY)) ? "yesterday" : "same day" : 1 == c ? "1 day" : 8 > c ? c + " days" : 62 > c ? Math.ceil(c / 7) + " weeks" : 560 > c ? Math.ceil(c / 31) + " months" : Math.ceil(c / 365) + " years"
};
k.DateRange.toArray = function (a) {
    return a ? [a.getStartDate().toIsoString(), a.getEndDate().toIsoString()] : null
};
k.DateRange.fromArray = function (a) {
    if (!a)return null;
    var c = k.DateRange.createDate(a[0]);
    a = k.DateRange.createDate(a[1]);
    return new g.date.DateRange(c, a)
};
k.DateRange.createDate = function (a) {
    a = String(a);
    return 8 != a.length ? null : new g.date.Date(parseInt(a.substring(0, 4), 10), parseInt(a.substring(4, 6), 10) - 1, parseInt(a.substring(6, 8), 10))
};

k.GAEvent = {};
k.MessageType = {
    INIT_FULL_VIEW: "INIT_FULL_VIEW",
    INIT_COMPACT_VIEW: "INIT_COMPACT_VIEW",
    REAL_TIME: "REAL_TIME",
    TIME_RANGE: "TIME_RANGE",
    SITE_OVERLAY: "SITE_OVERLAY",
    COMPARISON: "COMPARISON",
    GET_POPUP_SETTINGS: "GET_POPUP_SETTINGS",
    UPDATE_POPUP_SETTINGS: "UPDATE_POPUP_SETTINGS",
    UPDATE_TAB_SETTINGS: "UPDATE_TAB_SETTINGS",
    UPDATE_DATA: "UPDATE_DATA",
    CHANGE_POSITION: "CHANGE_POSITION",
    EXIT: "EXIT",
    GA_EVENT: "GA_EVENT"
};
k.PositionType = {
    TOP: 0,
    BOTTOM: 1,
    NONE: 2
};
k.PositionType.toString = function (a) {
    return a == k.PositionType.TOP ? "Top" : a == k.PositionType.BOTTOM ? "Bottom" : "None"
};
k.DataType = {
    RESTART: "RESTART",
    ALL: "ALL",
    PAGE_DATA: "PAGE_DATA",
    SITE_OVERLAY: "SITE_OVERLAY"
};
k.GAEvent.Category = {
    USER_ACTIONS: "User Actions"
};
k.GAEvent.Action = {
    CHANGE_PROPERTY: "Change property",
    CHANGE_VIEW: "Change view",
    VIEW_IN_GA: "View data in GA",
    SEND_FEEDBACK: "Send Feedback",
    SHOW_BUBBLES: "Show Bubbles",
    SHOW_COLORS: "Show Colors",
    CHANGE_POSITION: "Change position",
    EXIT: "Exit"
};
k.MetricType = {
    INTEGER: "INTEGER",
    FLOAT: "FLOAT",
    PERCENT: "PERCENT",
    TIME: "TIME"
};
k.Metric = function (a, c, d, e) {
    this.id = a;
    this.name = d || "";
    this.dataType = e || k.MetricType.INTEGER;
    this.smallerValueDesirable = c
};
k.Metric.loadMetrics = function () {
    var a = gapi.client.analytics.metadata.columns.list({reportType: "ga", fields: "items(attributes(type, dataType, uiName), id)"});
    a.execute(function (a) {
        if (a && !a.error) {
            a = a.items;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if ("METRIC" == e.attributes.type)for (var f = 0; f < k.Metric.SCORECARD_METRICS.length; f++) {
                    var h = k.Metric.SCORECARD_METRICS[f];
                    h.id == e.id && (h.name = e.attributes.uiName, h.dataType = e.attributes.dataType)
                }
            }
        }
    })
};
k.Metric.PAGE_VIEW = new k.Metric("ga:pageviews", !1);
k.Metric.UNIQUE_PAGE_VIEW = new k.Metric("ga:uniquePageviews", !1);
k.Metric.AVG_TIME_ON_PAGE = new k.Metric("ga:avgTimeOnPage", !1);
k.Metric.AVG_PAGE_LOAD_TIME = new k.Metric("ga:avgPageLoadTime", !0);
k.Metric.BOUNCE_RATE = new k.Metric("ga:visitBounceRate", !0);
k.Metric.EXIT_RATE = new k.Metric("ga:exitRate", !0);
k.Metric.REAL_TIME = new k.Metric("ga:activeVisitors", !1, "Real-Time", k.MetricType.INTEGER);
k.Metric.SCORECARD_METRICS = [k.Metric.PAGE_VIEW, k.Metric.UNIQUE_PAGE_VIEW, k.Metric.AVG_TIME_ON_PAGE, k.Metric.BOUNCE_RATE, k.Metric.EXIT_RATE];
g.string.StringBuffer = function (a, c) {
    null != a && this.append.apply(this, arguments)
};
b = g.string.StringBuffer.prototype;
b.buffer_ = "";
b.set = function (a) {
    this.buffer_ = "" + a
};
b.append = function (a, c, d) {
    this.buffer_ += a;
    if (null != c)for (var e = 1; e < arguments.length; e++)this.buffer_ += arguments[e];
    return this
};
b.clear = function () {
    this.buffer_ = ""
};
b.getLength = function () {
    return this.buffer_.length
};
b.toString = function () {
    return this.buffer_
};
g.object = {};
g.object.forEach = function (a, c, d) {
    for (var e in a)c.call(d, a[e], e, a)
};
g.object.filter = function (a, c, d) {
    var e = {}, f;
    for (f in a)c.call(d, a[f], f, a) && (e[f] = a[f]);
    return e
};
g.object.map = function (a, c, d) {
    var e = {}, f;
    for (f in a)e[f] = c.call(d, a[f], f, a);
    return e
};
g.object.some = function (a, c, d) {
    for (var e in a)if (c.call(d, a[e], e, a))return!0;
    return!1
};
g.object.every = function (a, c, d) {
    for (var e in a)if (!c.call(d, a[e], e, a))return!1;
    return!0
};
g.object.getCount = function (a) {
    var c = 0, d;
    for (d in a)c++;
    return c
};
g.object.getAnyKey = function (a) {
    for (var c in a)
        return c
};
g.object.getAnyValue = function (a) {
    for (var c in a)
        return a[c]
};
g.object.contains = function (a, c) {
    return g.object.containsValue(a, c)
};
g.object.getValues = function (a) {
    var c = [], d = 0, e;
    for (e in a)c[d++] = a[e];
    return c
};
g.object.getKeys = function (a) {
    var c = [], d = 0, e;
    for (e in a)c[d++] = e;
    return c
};
g.object.getValueByKeys = function (a, c) {
    for (var d = g.isArrayLike(c), e = d ? c : arguments, d = d ? 0 : 1; d < e.length && (a = a[e[d]], g.isDef(a)); d++);
    return a
};
g.object.containsKey = function (a, c) {
    return c in a
};
g.object.containsValue = function (a, c) {
    for (var d in a)if (a[d] == c)
        return!0;
    return!1
};
g.object.findKey = function (a, c, d) {
    for (var e in a)
        if (c.call(d, a[e], e, a))
            return e
};
g.object.findValue = function (a, c, d) {
    return(c = g.object.findKey(a, c, d)) && a[c]
};
g.object.isEmpty = function (a) {
    for (var c in a)
        return!1;
    return!0
};
g.object.clear = function (a) {
    for (var c in a)
        delete a[c]
};
g.object.remove = function (a, c) {
    var d;
    (d = c in a) && delete a[c];
    return d
};
g.object.add = function (a, c, d) {
    if (c in a)
        throw Error('The object already contains the key "' + c + '"');
    g.object.set(a, c, d)
};
g.object.get = function (a, c, d) {
    return c in a ? a[c] : d
};
g.object.set = function (a, c, d) {
    a[c] = d
};
g.object.setIfUndefined = function (a, c, d) {
    return c in a ? a[c] : a[c] = d
};
g.object.equals = function (a, c) {
    if (!g.array.equals(g.object.getKeys(a), g.object.getKeys(c)))
        return!1;
    for (var d in a)
        if (a[d] !== c[d])
            return!1;
    return!0
};
g.object.clone = function (a) {
    var c = {},
        d;
    for (d in a)
        c[d] = a[d];
    return c
};
g.object.unsafeClone = function (a) {
    var c = g.typeOf(a);
    if ("object" == c || "array" == c) {
        if (a.clone)
            return a.clone();
        var c = "array" == c ? [] : {}, d;
        for (d in a)
            c[d] = g.object.unsafeClone(a[d]);
        return c
    }
    return a
};
g.object.transpose = function (a) {
    var c = {},
        d;
    for (d in a)
        c[a[d]] = d;
    return c
};
g.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function (a, c) {
    for (var d, e, f = 1; f < arguments.length; f++) {
        e = arguments[f];
        for (d in e)
            a[d] = e[d];
        for (var h = 0; h < g.object.PROTOTYPE_FIELDS_.length; h++)
            d = g.object.PROTOTYPE_FIELDS_[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
    }
};
g.object.create = function (a) {
    var c = arguments.length;
    if (1 == c && g.isArray(arguments[0]))
        return g.object.create.apply(null, arguments[0]);
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = {}, e = 0; e < c; e += 2)
        d[arguments[e]] = arguments[e + 1];
    return d
};
g.object.createSet = function (a) {
    var c = arguments.length;
    if (1 == c && g.isArray(arguments[0]))
        return g.object.createSet.apply(null, arguments[0]);
    for (var d = {}, e = 0; e < c; e++)
        d[arguments[e]] = !0;
    return d
};
g.object.createImmutableView = function (a) {
    var c = a;
    Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
    return c
};
g.object.isImmutableView = function (a) {
    return!!Object.isFrozen && Object.isFrozen(a)
};

g.structs = {};
g.structs.Map = function (a, c) {
    this.map_ = {};
    this.keys_ = [];
    this.version_ = this.count_ = 0;
    var d = arguments.length;
    if (1 < d) {
        if (d % 2)
            throw Error("Uneven number of arguments");
        for (var e = 0; e < d; e += 2)
            this.set(arguments[e], arguments[e + 1])
    } else
        a && this.addAll(a)
};
b = g.structs.Map.prototype;
b.getCount = function () {
    return this.count_
};
b.getValues = function () {
    this.cleanupKeysArray_();
    for (var a = [], c = 0; c < this.keys_.length; c++) {
        var d = this.keys_[c];
        a.push(this.map_[d])
    }
    return a
};
b.getKeys = function () {
    this.cleanupKeysArray_();
    return this.keys_.concat()
};
b.containsKey = function (a) {
    return g.structs.Map.hasKey_(this.map_, a)
};
b.containsValue = function (a) {
    for (var c = 0; c < this.keys_.length; c++) {
        var d = this.keys_[c];
        if (g.structs.Map.hasKey_(this.map_, d) && this.map_[d] == a)
            return!0
    }
    return!1
};
b.equals = function (a, c) {
    if (this === a)
        return!0;
    if (this.count_ != a.getCount())
        return!1;
    var d = c || g.structs.Map.defaultEquals;
    this.cleanupKeysArray_();
    for (var e, f = 0; e = this.keys_[f]; f++)
        if (!d(this.get(e), a.get(e)))return!1;
    return!0
};
g.structs.Map.defaultEquals = function (a, c) {
    return a === c
};
b = g.structs.Map.prototype;
b.isEmpty = function () {
    return 0 == this.count_
};
b.clear = function () {
    this.map_ = {};
    this.version_ = this.count_ = this.keys_.length = 0
};
b.remove = function (a) {
    return g.structs.Map.hasKey_(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1
};
b.cleanupKeysArray_ = function () {
    if (this.count_ != this.keys_.length) {
        for (var a = 0, c = 0; a < this.keys_.length;) {
            var d = this.keys_[a];
            g.structs.Map.hasKey_(this.map_, d) && (this.keys_[c++] = d);
            a++
        }
        this.keys_.length = c
    }
    if (this.count_ != this.keys_.length) {
        for (var e = {}, c = a = 0; a < this.keys_.length;)d = this.keys_[a], g.structs.Map.hasKey_(e, d) || (this.keys_[c++] = d, e[d] = 1), a++;
        this.keys_.length = c
    }
};
b.get = function (a, c) {
    return g.structs.Map.hasKey_(this.map_, a) ? this.map_[a] : c
};
b.set = function (a, c) {
    g.structs.Map.hasKey_(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
    this.map_[a] = c
};
b.addAll = function (a) {
    var c;
    a instanceof g.structs.Map ? (c = a.getKeys(), a = a.getValues()) : (c = g.object.getKeys(a), a = g.object.getValues(a));
    for (var d = 0; d < c.length; d++)this.set(c[d], a[d])
};
b.forEach = function (a, c) {
    for (var d = this.getKeys(), e = 0; e < d.length; e++) {
        var f = d[e], h = this.get(f);
        a.call(c, h, f, this)
    }
};
b.clone = function () {
    return new g.structs.Map(this)
};
b.transpose = function () {
    for (var a = new g.structs.Map, c = 0; c < this.keys_.length; c++) {
        var d = this.keys_[c], e = this.map_[d];
        a.set(e, d)
    }
    return a
};
b.toObject = function () {
    this.cleanupKeysArray_();
    for (var a = {}, c = 0; c < this.keys_.length; c++) {
        var d = this.keys_[c];
        a[d] = this.map_[d]
    }
    return a
};
b.getKeyIterator = function () {
    return this.__iterator__(!0)
};
b.__iterator__ = function (a) {
    this.cleanupKeysArray_();
    var c = 0, d = this.keys_, e = this.map_, f = this.version_, h = this, l = new g.iter.Iterator;
    l.next = function () {
        for (; ;) {
            if (f != h.version_)throw Error("The map has changed since the iterator was created");
            if (c >= d.length)throw g.iter.StopIteration;
            var l = d[c++];
            return a ? l : e[l]
        }
    };
    return l
};

g.structs.Map.hasKey_ = function (a, c) {
    return Object.prototype.hasOwnProperty.call(a, c)
};
g.structs.getCount = function (a) {
    return"function" == typeof a.getCount ? a.getCount() : g.isArrayLike(a) || g.isString(a) ? a.length : g.object.getCount(a)
};
g.structs.getValues = function (a) {
    if ("function" == typeof a.getValues)return a.getValues();
    if (g.isString(a))return a.split("");
    if (g.isArrayLike(a)) {
        for (var c = [], d = a.length, e = 0; e < d; e++)c.push(a[e]);
        return c
    }
    return g.object.getValues(a)
};
g.structs.getKeys = function (a) {
    if ("function" == typeof a.getKeys)return a.getKeys();
    if ("function" != typeof a.getValues) {
        if (g.isArrayLike(a) || g.isString(a)) {
            var c = [];
            a = a.length;
            for (var d = 0; d < a; d++)c.push(d);
            return c
        }
        return g.object.getKeys(a)
    }
};
g.structs.contains = function (a, c) {
    return"function" == typeof a.contains ? a.contains(c) : "function" == typeof a.containsValue ? a.containsValue(c) : g.isArrayLike(a) || g.isString(a) ? g.array.contains(a, c) : g.object.containsValue(a, c)
};
g.structs.isEmpty = function (a) {
    return"function" == typeof a.isEmpty ? a.isEmpty() : g.isArrayLike(a) || g.isString(a) ? g.array.isEmpty(a) : g.object.isEmpty(a)
};
g.structs.clear = function (a) {
    "function" == typeof a.clear ? a.clear() : g.isArrayLike(a) ? g.array.clear(a) : g.object.clear(a)
};
g.structs.forEach = function (a, c, d) {
    if ("function" == typeof a.forEach)a.forEach(c, d); else if (g.isArrayLike(a) || g.isString(a))g.array.forEach(a, c, d); else for (var e = g.structs.getKeys(a), f = g.structs.getValues(a), h = f.length, l = 0; l < h; l++)c.call(d, f[l], e && e[l], a)
};
g.structs.filter = function (a, c, d) {
    if ("function" == typeof a.filter)return a.filter(c, d);
    if (g.isArrayLike(a) || g.isString(a))return g.array.filter(a, c, d);
    var e, f = g.structs.getKeys(a), h = g.structs.getValues(a), l = h.length;
    if (f) {
        e = {};
        for (var m = 0; m < l; m++)
            c.call(d, h[m], f[m], a) && (e[f[m]] = h[m])
    } else for (e = [], m = 0; m < l; m++)c.call(d, h[m], void 0, a) && e.push(h[m]);
    return e
};
g.structs.map = function (a, c, d) {
    if ("function" == typeof a.map)return a.map(c, d);
    if (g.isArrayLike(a) || g.isString(a))return g.array.map(a, c, d);
    var e, f = g.structs.getKeys(a), h = g.structs.getValues(a), l = h.length;
    if (f) {
        e = {};
        for (var m = 0; m < l; m++)e[f[m]] = c.call(d, h[m], f[m], a)
    } else for (e = [], m = 0; m < l; m++)e[m] = c.call(d, h[m], void 0, a);
    return e
};
g.structs.some = function (a, c, d) {
    if ("function" == typeof a.some)return a.some(c, d);
    if (g.isArrayLike(a) || g.isString(a))return g.array.some(a, c, d);
    for (var e = g.structs.getKeys(a), f = g.structs.getValues(a), h = f.length, l = 0; l < h; l++)if (c.call(d, f[l], e && e[l], a))return!0;
    return!1
};
g.structs.every = function (a, c, d) {
    if ("function" == typeof a.every)return a.every(c, d);
    if (g.isArrayLike(a) || g.isString(a))return g.array.every(a, c, d);
    for (var e = g.structs.getKeys(a), f = g.structs.getValues(a), h = f.length, l = 0; l < h; l++)if (!c.call(d, f[l], e && e[l], a))return!1;
    return!0
};


g.labs = {};
g.labs.userAgent = {};
g.labs.userAgent.util = {};
g.labs.userAgent.util.getNativeUserAgentString_ = function () {
    var a = g.labs.userAgent.util.getNavigator_();
    return a && (a = a.userAgent) ? a : ""
};
g.labs.userAgent.util.getNavigator_ = function () {
    return g.global.navigator
};
g.labs.userAgent.util.userAgent_ = g.labs.userAgent.util.getNativeUserAgentString_();
g.labs.userAgent.util.setUserAgent = function (a) {
    g.labs.userAgent.util.userAgent_ = a || g.labs.userAgent.util.getNativeUserAgentString_()
};
g.labs.userAgent.util.getUserAgent = function () {
    return g.labs.userAgent.util.userAgent_
};
g.labs.userAgent.util.matchUserAgent = function (a) {
    var c = g.labs.userAgent.util.getUserAgent();
    return g.string.contains(c, a)
};
g.labs.userAgent.util.matchUserAgentIgnoreCase = function (a) {
    var c = g.labs.userAgent.util.getUserAgent();
    return g.string.caseInsensitiveContains(c, a)
};
g.labs.userAgent.util.extractVersionTuples = function (a) {
    for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(a);)d.push([e[1], e[2], e[3] || void 0]);
    return d
};
g.labs.userAgent.browser = {};
g.labs.userAgent.browser.matchOpera_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Opera") || g.labs.userAgent.util.matchUserAgent("OPR")
};
g.labs.userAgent.browser.matchIE_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Trident") || g.labs.userAgent.util.matchUserAgent("MSIE")
};
g.labs.userAgent.browser.matchFirefox_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Firefox")
};
g.labs.userAgent.browser.matchSafari_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Safari") && !g.labs.userAgent.util.matchUserAgent("Chrome") && !g.labs.userAgent.util.matchUserAgent("CriOS") && !g.labs.userAgent.util.matchUserAgent("Android")
};
g.labs.userAgent.browser.matchChrome_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Chrome") || g.labs.userAgent.util.matchUserAgent("CriOS")
};
g.labs.userAgent.browser.matchAndroidBrowser_ = function () {
    return g.labs.userAgent.util.matchUserAgent("Android") && !g.labs.userAgent.util.matchUserAgent("Chrome") && !g.labs.userAgent.util.matchUserAgent("CriOS")
};
g.labs.userAgent.browser.isOpera = g.labs.userAgent.browser.matchOpera_;
g.labs.userAgent.browser.isIE = g.labs.userAgent.browser.matchIE_;
g.labs.userAgent.browser.isFirefox = g.labs.userAgent.browser.matchFirefox_;
g.labs.userAgent.browser.isSafari = g.labs.userAgent.browser.matchSafari_;
g.labs.userAgent.browser.isChrome = g.labs.userAgent.browser.matchChrome_;
g.labs.userAgent.browser.isAndroidBrowser = g.labs.userAgent.browser.matchAndroidBrowser_;
g.labs.userAgent.browser.isSilk = function () {
    return g.labs.userAgent.util.matchUserAgent("Silk")
};
g.labs.userAgent.browser.getVersion = function () {
    var a = g.labs.userAgent.util.getUserAgent();
    if (g.labs.userAgent.browser.isIE())return g.labs.userAgent.browser.getIEVersion_(a);
    if (g.labs.userAgent.browser.isOpera())return g.labs.userAgent.browser.getOperaVersion_(a);
    a = g.labs.userAgent.util.extractVersionTuples(a);
    return g.labs.userAgent.browser.getVersionFromTuples_(a)
};
g.labs.userAgent.browser.isVersionOrHigher = function (a) {
    return 0 <= g.string.compareVersions(g.labs.userAgent.browser.getVersion(), a)
};
g.labs.userAgent.browser.getIEVersion_ = function (a) {
    var c = /rv: *([\d\.]*)/.exec(a);
    if (c && c[1])return c[1];
    var c = "", d = /MSIE +([\d\.]+)/.exec(a);
    if (d && d[1])if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1])if (a && a[1])switch (a[1]) {
        case "4.0":
            c = "8.0";
            break;
        case "5.0":
            c = "9.0";
            break;
        case "6.0":
            c = "10.0";
            break;
        case "7.0":
            c = "11.0"
    } else c = "7.0"; else c = d[1];
    return c
};
g.labs.userAgent.browser.getOperaVersion_ = function (a) {
    a = g.labs.userAgent.util.extractVersionTuples(a);
    var c = g.array.peek(a);
    return"OPR" == c[0] && c[1] ? c[1] : g.labs.userAgent.browser.getVersionFromTuples_(a)
};
g.labs.userAgent.browser.getVersionFromTuples_ = function (a) {
    g.asserts.assert(2 < a.length, "Couldn't extract version tuple from user agent string");
    return a[2] && a[2][1] ? a[2][1] : ""
};
g.labs.userAgent.engine = {};
g.labs.userAgent.engine.isPresto = function () {
    return g.labs.userAgent.util.matchUserAgent("Presto")
};
g.labs.userAgent.engine.isTrident = function () {
    return g.labs.userAgent.util.matchUserAgent("Trident") || g.labs.userAgent.util.matchUserAgent("MSIE")
};
g.labs.userAgent.engine.isWebKit = function () {
    return g.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")
};
g.labs.userAgent.engine.isGecko = function () {
    return g.labs.userAgent.util.matchUserAgent("Gecko") && !g.labs.userAgent.engine.isWebKit() && !g.labs.userAgent.engine.isTrident()
};
g.labs.userAgent.engine.getVersion = function () {
    var a = g.labs.userAgent.util.getUserAgent();
    if (a) {
        var a = g.labs.userAgent.util.extractVersionTuples(a), c = a[1];
        if (c)return"Gecko" == c[0] ? g.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : c[1];
        var a = a[0], d;
        if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d)))return d[1]
    }
    return""
};
g.labs.userAgent.engine.isVersionOrHigher = function (a) {
    return 0 <= g.string.compareVersions(g.labs.userAgent.engine.getVersion(), a)
};
g.labs.userAgent.engine.getVersionForKey_ = function (a, c) {
    var d = g.array.find(a, function (a) {
        return c == a[0]
    });
    return d && d[1] || ""
};
g.userAgent = {};
g.userAgent.ASSUME_IE = !1;
g.userAgent.ASSUME_GECKO = !1;
g.userAgent.ASSUME_WEBKIT = !1;
g.userAgent.ASSUME_MOBILE_WEBKIT = !1;
g.userAgent.ASSUME_OPERA = !1;
g.userAgent.ASSUME_ANY_VERSION = !1;
g.userAgent.BROWSER_KNOWN_ = g.userAgent.ASSUME_IE || g.userAgent.ASSUME_GECKO || g.userAgent.ASSUME_MOBILE_WEBKIT || g.userAgent.ASSUME_WEBKIT || g.userAgent.ASSUME_OPERA;
g.userAgent.getUserAgentString = function () {
    return g.labs.userAgent.util.getUserAgent()
};
g.userAgent.getNavigator = function () {
    return g.global.navigator || null
};
g.userAgent.OPERA = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_OPERA : g.labs.userAgent.browser.isOpera();
g.userAgent.IE = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_IE : g.labs.userAgent.browser.isIE();
g.userAgent.GECKO = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_GECKO : g.labs.userAgent.engine.isGecko();
g.userAgent.WEBKIT = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_WEBKIT || g.userAgent.ASSUME_MOBILE_WEBKIT : g.labs.userAgent.engine.isWebKit();
g.userAgent.isMobile_ = function () {
    return g.userAgent.WEBKIT && g.labs.userAgent.util.matchUserAgent("Mobile")
};
g.userAgent.MOBILE = g.userAgent.ASSUME_MOBILE_WEBKIT || g.userAgent.isMobile_();
g.userAgent.SAFARI = g.userAgent.WEBKIT;
g.userAgent.determinePlatform_ = function () {
    var a = g.userAgent.getNavigator();
    return a && a.platform || ""
};
g.userAgent.PLATFORM = g.userAgent.determinePlatform_();
g.userAgent.ASSUME_MAC = !1;
g.userAgent.ASSUME_WINDOWS = !1;
g.userAgent.ASSUME_LINUX = !1;
g.userAgent.ASSUME_X11 = !1;
g.userAgent.ASSUME_ANDROID = !1;
g.userAgent.ASSUME_IPHONE = !1;
g.userAgent.ASSUME_IPAD = !1;
g.userAgent.PLATFORM_KNOWN_ = g.userAgent.ASSUME_MAC || g.userAgent.ASSUME_WINDOWS || g.userAgent.ASSUME_LINUX || g.userAgent.ASSUME_X11 || g.userAgent.ASSUME_ANDROID || g.userAgent.ASSUME_IPHONE || g.userAgent.ASSUME_IPAD;
g.userAgent.initPlatform_ = function () {
    g.userAgent.detectedMac_ = g.string.contains(g.userAgent.PLATFORM, "Mac");
    g.userAgent.detectedWindows_ = g.string.contains(g.userAgent.PLATFORM, "Win");
    g.userAgent.detectedLinux_ = g.string.contains(g.userAgent.PLATFORM, "Linux");
    g.userAgent.detectedX11_ = !!g.userAgent.getNavigator() && g.string.contains(g.userAgent.getNavigator().appVersion || "", "X11");
    var a = g.userAgent.getUserAgentString();
    g.userAgent.detectedAndroid_ = !!a && g.string.contains(a, "Android");
    g.userAgent.detectedIPhone_ =
        !!a && g.string.contains(a, "iPhone");
    g.userAgent.detectedIPad_ = !!a && g.string.contains(a, "iPad")
};
g.userAgent.PLATFORM_KNOWN_ || g.userAgent.initPlatform_();
g.userAgent.MAC = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_MAC : g.userAgent.detectedMac_;
g.userAgent.WINDOWS = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_WINDOWS : g.userAgent.detectedWindows_;
g.userAgent.LINUX = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_LINUX : g.userAgent.detectedLinux_;
g.userAgent.X11 = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_X11 : g.userAgent.detectedX11_;
g.userAgent.ANDROID = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_ANDROID : g.userAgent.detectedAndroid_;
g.userAgent.IPHONE = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_IPHONE : g.userAgent.detectedIPhone_;
g.userAgent.IPAD = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_IPAD : g.userAgent.detectedIPad_;
g.userAgent.determineVersion_ = function () {
    var a = "", c;
    if (g.userAgent.OPERA && g.global.opera)return a = g.global.opera.version, g.isFunction(a) ? a() : a;
    g.userAgent.GECKO ? c = /rv\:([^\);]+)(\)|;)/ : g.userAgent.IE ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : g.userAgent.WEBKIT && (c = /WebKit\/(\S+)/);
    c && (a = (a = c.exec(g.userAgent.getUserAgentString())) ? a[1] : "");
    return g.userAgent.IE && (c = g.userAgent.getDocumentMode_(), c > parseFloat(a)) ? String(c) : a
};
g.userAgent.getDocumentMode_ = function () {
    var a = g.global.document;
    return a ? a.documentMode : void 0
};
g.userAgent.VERSION = g.userAgent.determineVersion_();
g.userAgent.compare = function (a, c) {
    return g.string.compareVersions(a, c)
};
g.userAgent.isVersionOrHigherCache_ = {};
g.userAgent.isVersionOrHigher = function (a) {
    return g.userAgent.ASSUME_ANY_VERSION || g.userAgent.isVersionOrHigherCache_[a] || (g.userAgent.isVersionOrHigherCache_[a] = 0 <= g.string.compareVersions(g.userAgent.VERSION, a))
};
g.userAgent.isVersion = g.userAgent.isVersionOrHigher;
g.userAgent.isDocumentModeOrHigher = function (a) {
    return g.userAgent.IE && g.userAgent.DOCUMENT_MODE >= a
};
g.userAgent.isDocumentMode = g.userAgent.isDocumentModeOrHigher;
var t;
var u = g.global.document;
if (u && g.userAgent.IE) {
    var v = g.userAgent.getDocumentMode_();
    t = v || ("CSS1Compat" == u.compatMode ? parseInt(g.userAgent.VERSION, 10) : 5)
} else t = void 0;
g.userAgent.DOCUMENT_MODE = t;

g.uri = {};
g.uri.utils = {};
g.uri.utils.CharCode_ = {AMPERSAND: 38, EQUAL: 61, HASH: 35, QUESTION: 63};
g.uri.utils.buildFromEncodedParts = function (a, c, d, e, f, h, l) {
    var m = "";
    a && (m += a + ":");
    d && (m += "//", c && (m += c + "@"), m += d, e && (m += ":" + e));
    f && (m += f);
    h && (m += "?" + h);
    l && (m += "#" + l);
    return m
};
g.uri.utils.splitRe_ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
g.uri.utils.ComponentIndex = {SCHEME: 1, USER_INFO: 2, DOMAIN: 3, PORT: 4, PATH: 5, QUERY_DATA: 6, FRAGMENT: 7};
g.uri.utils.split = function (a) {
    g.uri.utils.phishingProtection_();
    return a.match(g.uri.utils.splitRe_)
};
g.uri.utils.needsPhishingProtection_ = g.userAgent.WEBKIT;
g.uri.utils.phishingProtection_ = function () {
    if (g.uri.utils.needsPhishingProtection_) {
        g.uri.utils.needsPhishingProtection_ = !1;
        var a = g.global.location;
        if (a) {
            var c = a.href;
            if (c && (c = g.uri.utils.getDomain(c)) && c != a.hostname)throw g.uri.utils.needsPhishingProtection_ = !0, Error();
        }
    }
};
g.uri.utils.decodeIfPossible_ = function (a, c) {
    return a ? c ? decodeURI(a) : decodeURIComponent(a) : a
};
g.uri.utils.getComponentByIndex_ = function (a, c) {
    return g.uri.utils.split(c)[a] || null
};
g.uri.utils.getScheme = function (a) {
    return g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.SCHEME, a)
};
g.uri.utils.getEffectiveScheme = function (a) {
    a = g.uri.utils.getScheme(a);
    !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
    return a ? a.toLowerCase() : ""
};
g.uri.utils.getUserInfoEncoded = function (a) {
    return g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.USER_INFO, a)
};
g.uri.utils.getUserInfo = function (a) {
    return g.uri.utils.decodeIfPossible_(g.uri.utils.getUserInfoEncoded(a))
};
g.uri.utils.getDomainEncoded = function (a) {
    return g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.DOMAIN, a)
};
g.uri.utils.getDomain = function (a) {
    return g.uri.utils.decodeIfPossible_(g.uri.utils.getDomainEncoded(a), !0)
};
g.uri.utils.getPort = function (a) {
    return Number(g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.PORT, a)) || null
};
g.uri.utils.getPathEncoded = function (a) {
    return g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.PATH, a)
};
g.uri.utils.getPath = function (a) {
    return g.uri.utils.decodeIfPossible_(g.uri.utils.getPathEncoded(a), !0)
};
g.uri.utils.getQueryData = function (a) {
    return g.uri.utils.getComponentByIndex_(g.uri.utils.ComponentIndex.QUERY_DATA, a)
};
g.uri.utils.getFragmentEncoded = function (a) {
    var c = a.indexOf("#");
    return 0 > c ? null : a.substr(c + 1)
};
g.uri.utils.setFragmentEncoded = function (a, c) {
    return g.uri.utils.removeFragment(a) + (c ? "#" + c : "")
};
g.uri.utils.getFragment = function (a) {
    return g.uri.utils.decodeIfPossible_(g.uri.utils.getFragmentEncoded(a))
};
g.uri.utils.getHost = function (a) {
    a = g.uri.utils.split(a);
    return g.uri.utils.buildFromEncodedParts(a[g.uri.utils.ComponentIndex.SCHEME], a[g.uri.utils.ComponentIndex.USER_INFO], a[g.uri.utils.ComponentIndex.DOMAIN], a[g.uri.utils.ComponentIndex.PORT])
};
g.uri.utils.getPathAndAfter = function (a) {
    a = g.uri.utils.split(a);
    return g.uri.utils.buildFromEncodedParts(null, null, null, null, a[g.uri.utils.ComponentIndex.PATH], a[g.uri.utils.ComponentIndex.QUERY_DATA], a[g.uri.utils.ComponentIndex.FRAGMENT])
};
g.uri.utils.removeFragment = function (a) {
    var c = a.indexOf("#");
    return 0 > c ? a : a.substr(0, c)
};
g.uri.utils.haveSameDomain = function (a, c) {
    var d = g.uri.utils.split(a), e = g.uri.utils.split(c);
    return d[g.uri.utils.ComponentIndex.DOMAIN] == e[g.uri.utils.ComponentIndex.DOMAIN] && d[g.uri.utils.ComponentIndex.SCHEME] == e[g.uri.utils.ComponentIndex.SCHEME] && d[g.uri.utils.ComponentIndex.PORT] == e[g.uri.utils.ComponentIndex.PORT]
};
g.uri.utils.assertNoFragmentsOrQueries_ = function (a) {
    if (g.DEBUG && (0 <= a.indexOf("#") || 0 <= a.indexOf("?")))throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
};
g.uri.utils.appendQueryData_ = function (a) {
    if (a[1]) {
        var c = a[0], d = c.indexOf("#");
        0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
        d = c.indexOf("?");
        0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0)
    }
    return a.join("")
};
g.uri.utils.appendKeyValuePairs_ = function (a, c, d) {
    if (g.isArray(c)) {
        g.asserts.assertArray(c);
        for (var e = 0; e < c.length; e++)g.uri.utils.appendKeyValuePairs_(a, String(c[e]), d)
    } else null != c && d.push("&", a, "" === c ? "" : "=", g.string.urlEncode(c))
};
g.uri.utils.buildQueryDataBuffer_ = function (a, c, d) {
    g.asserts.assert(0 == Math.max(c.length - (d || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
    for (d = d || 0; d < c.length; d += 2)g.uri.utils.appendKeyValuePairs_(c[d], c[d + 1], a);
    return a
};
g.uri.utils.buildQueryData = function (a, c) {
    var d = g.uri.utils.buildQueryDataBuffer_([], a, c);
    d[0] = "";
    return d.join("")
};
g.uri.utils.buildQueryDataBufferFromMap_ = function (a, c) {
    for (var d in c)g.uri.utils.appendKeyValuePairs_(d, c[d], a);
    return a
};
g.uri.utils.buildQueryDataFromMap = function (a) {
    a = g.uri.utils.buildQueryDataBufferFromMap_([], a);
    a[0] = "";
    return a.join("")
};
g.uri.utils.appendParams = function (a, c) {
    return g.uri.utils.appendQueryData_(2 == arguments.length ? g.uri.utils.buildQueryDataBuffer_([a], arguments[1], 0) : g.uri.utils.buildQueryDataBuffer_([a], arguments, 1))
};
g.uri.utils.appendParamsFromMap = function (a, c) {
    return g.uri.utils.appendQueryData_(g.uri.utils.buildQueryDataBufferFromMap_([a], c))
};
g.uri.utils.appendParam = function (a, c, d) {
    a = [a, "&", c];
    g.isDefAndNotNull(d) && a.push("=", g.string.urlEncode(d));
    return g.uri.utils.appendQueryData_(a)
};
g.uri.utils.findParam_ = function (a, c, d, e) {
    for (var f = d.length; 0 <= (c = a.indexOf(d, c)) && c < e;) {
        var h = a.charCodeAt(c - 1);
        if (h == g.uri.utils.CharCode_.AMPERSAND || h == g.uri.utils.CharCode_.QUESTION)if (h = a.charCodeAt(c + f), !h || h == g.uri.utils.CharCode_.EQUAL || h == g.uri.utils.CharCode_.AMPERSAND || h == g.uri.utils.CharCode_.HASH)return c;
        c += f + 1
    }
    return-1
};
g.uri.utils.hashOrEndRe_ = /#|$/;
g.uri.utils.hasParam = function (a, c) {
    return 0 <= g.uri.utils.findParam_(a, 0, c, a.search(g.uri.utils.hashOrEndRe_))
};
g.uri.utils.getParamValue = function (a, c) {
    var d = a.search(g.uri.utils.hashOrEndRe_), e = g.uri.utils.findParam_(a, 0, c, d);
    if (0 > e)return null;
    var f = a.indexOf("&", e);
    if (0 > f || f > d)f = d;
    e += c.length + 1;
    return g.string.urlDecode(a.substr(e, f - e))
};
g.uri.utils.getParamValues = function (a, c) {
    for (var d = a.search(g.uri.utils.hashOrEndRe_), e = 0, f, h = []; 0 <= (f = g.uri.utils.findParam_(a, e, c, d));) {
        e = a.indexOf("&", f);
        if (0 > e || e > d)e = d;
        f += c.length + 1;
        h.push(g.string.urlDecode(a.substr(f, e - f)))
    }
    return h
};
g.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
g.uri.utils.removeParam = function (a, c) {
    for (var d = a.search(g.uri.utils.hashOrEndRe_), e = 0, f, h = []; 0 <= (f = g.uri.utils.findParam_(a, e, c, d));)h.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
    h.push(a.substr(e));
    return h.join("").replace(g.uri.utils.trailingQueryPunctuationRe_, "$1")
};
g.uri.utils.setParam = function (a, c, d) {
    return g.uri.utils.appendParam(g.uri.utils.removeParam(a, c), c, d)
};
g.uri.utils.appendPath = function (a, c) {
    g.uri.utils.assertNoFragmentsOrQueries_(a);
    g.string.endsWith(a, "/") && (a = a.substr(0, a.length - 1));
    g.string.startsWith(c, "/") && (c = c.substr(1));
    return g.string.buildString(a, "/", c)
};
g.uri.utils.setPath = function (a, c) {
    g.string.startsWith(c, "/") || (c = "/" + c);
    var d = g.uri.utils.split(a);
    return g.uri.utils.buildFromEncodedParts(d[g.uri.utils.ComponentIndex.SCHEME], d[g.uri.utils.ComponentIndex.USER_INFO], d[g.uri.utils.ComponentIndex.DOMAIN], d[g.uri.utils.ComponentIndex.PORT], c, d[g.uri.utils.ComponentIndex.QUERY_DATA], d[g.uri.utils.ComponentIndex.FRAGMENT])
};
g.uri.utils.StandardQueryParam = {RANDOM: "zx"};
g.uri.utils.makeUnique = function (a) {
    return g.uri.utils.setParam(a, g.uri.utils.StandardQueryParam.RANDOM, g.string.getRandomString())
};
g.Uri = function (a, c) {
    var d;
    a instanceof g.Uri ? (this.ignoreCase_ = g.isDef(c) ? c : a.getIgnoreCase(), this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (d = g.uri.utils.split(String(a))) ? (this.ignoreCase_ = !!c, this.setScheme(d[g.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(d[g.uri.utils.ComponentIndex.USER_INFO] || "", !0),
        this.setDomain(d[g.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(d[g.uri.utils.ComponentIndex.PORT]), this.setPath(d[g.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData(d[g.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(d[g.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : (this.ignoreCase_ = !!c, this.queryData_ = new g.Uri.QueryData(null, null, this.ignoreCase_))
};
g.Uri.preserveParameterTypesCompatibilityFlag = !1;
g.Uri.RANDOM_PARAM = g.uri.utils.StandardQueryParam.RANDOM;
b = g.Uri.prototype;
b.scheme_ = "";
b.userInfo_ = "";
b.domain_ = "";
b.port_ = null;
b.path_ = "";
b.fragment_ = "";
b.isReadOnly_ = !1;
b.ignoreCase_ = !1;
b.toString = function () {
    var a = [], c = this.getScheme();
    c && a.push(g.Uri.encodeSpecialChars_(c, g.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
    if (c = this.getDomain()) {
        a.push("//");
        var d = this.getUserInfo();
        d && a.push(g.Uri.encodeSpecialChars_(d, g.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@");
        a.push(g.Uri.removeDoubleEncoding_(g.string.urlEncode(c)));
        c = this.getPort();
        null != c && a.push(":", String(c))
    }
    if (c = this.getPath())this.hasDomain() && "/" != c.charAt(0) && a.push("/"), a.push(g.Uri.encodeSpecialChars_(c, "/" == c.charAt(0) ?
        g.Uri.reDisallowedInAbsolutePath_ : g.Uri.reDisallowedInRelativePath_, !0));
    (c = this.getEncodedQuery()) && a.push("?", c);
    (c = this.getFragment()) && a.push("#", g.Uri.encodeSpecialChars_(c, g.Uri.reDisallowedInFragment_));
    return a.join("")
};
b.resolve = function (a) {
    var c = this.clone(), d = a.hasScheme();
    d ? c.setScheme(a.getScheme()) : d = a.hasUserInfo();
    d ? c.setUserInfo(a.getUserInfo()) : d = a.hasDomain();
    d ? c.setDomain(a.getDomain()) : d = a.hasPort();
    var e = a.getPath();
    if (d)c.setPort(a.getPort()); else if (d = a.hasPath()) {
        if ("/" != e.charAt(0))if (this.hasDomain() && !this.hasPath())e = "/" + e; else {
            var f = c.getPath().lastIndexOf("/");
            -1 != f && (e = c.getPath().substr(0, f + 1) + e)
        }
        e = g.Uri.removeDotSegments(e)
    }
    d ? c.setPath(e) : d = a.hasQuery();
    d ? c.setQueryData(a.getDecodedQuery()) :
        d = a.hasFragment();
    d && c.setFragment(a.getFragment());
    return c
};
b.clone = function () {
    return new g.Uri(this)
};
b.getScheme = function () {
    return this.scheme_
};
b.setScheme = function (a, c) {
    this.enforceReadOnly();
    if (this.scheme_ = c ? g.Uri.decodeOrEmpty_(a, !0) : a)this.scheme_ = this.scheme_.replace(/:$/, "");
    return this
};
b.hasScheme = function () {
    return!!this.scheme_
};
b.getUserInfo = function () {
    return this.userInfo_
};
b.setUserInfo = function (a, c) {
    this.enforceReadOnly();
    this.userInfo_ = c ? g.Uri.decodeOrEmpty_(a) : a;
    return this
};
b.hasUserInfo = function () {
    return!!this.userInfo_
};
b.getDomain = function () {
    return this.domain_
};
b.setDomain = function (a, c) {
    this.enforceReadOnly();
    this.domain_ = c ? g.Uri.decodeOrEmpty_(a, !0) : a;
    return this
};
b.hasDomain = function () {
    return!!this.domain_
};
b.getPort = function () {
    return this.port_
};
b.setPort = function (a) {
    this.enforceReadOnly();
    if (a) {
        a = Number(a);
        if (isNaN(a) || 0 > a)throw Error("Bad port number " + a);
        this.port_ = a
    } else this.port_ = null;
    return this
};
b.hasPort = function () {
    return null != this.port_
};
b.getPath = function () {
    return this.path_
};
b.hasPath = function () {
    return!!this.path_
};
b.setPath = function (a, c) {
    this.enforceReadOnly();
    this.path_ = c ? g.Uri.decodeOrEmpty_(a, !0) : a;
    return this
};
b.hasQuery = function () {
    return"" !== this.queryData_.toString()
};
b.setQueryData = function (a, c) {
    this.enforceReadOnly();
    a instanceof g.Uri.QueryData ? (this.queryData_ = a, this.queryData_.setIgnoreCase(this.ignoreCase_)) : (c || (a = g.Uri.encodeSpecialChars_(a, g.Uri.reDisallowedInQuery_)), this.queryData_ = new g.Uri.QueryData(a, null, this.ignoreCase_));
    return this
};
b.getEncodedQuery = function () {
    return this.queryData_.toString()
};
b.getDecodedQuery = function () {
    return this.queryData_.toDecodedString()
};
b.getQueryData = function () {
    return this.queryData_
};
b.setParameterValue = function (a, c) {
    this.enforceReadOnly();
    this.queryData_.set(a, c);
    return this
};
b.getFragment = function () {
    return this.fragment_
};
b.setFragment = function (a, c) {
    this.enforceReadOnly();
    this.fragment_ = c ? g.Uri.decodeOrEmpty_(a) : a;
    return this
};
b.hasFragment = function () {
    return!!this.fragment_
};
b.makeUnique = function () {
    this.enforceReadOnly();
    this.setParameterValue(g.Uri.RANDOM_PARAM, g.string.getRandomString());
    return this
};
b.enforceReadOnly = function () {
    if (this.isReadOnly_)throw Error("Tried to modify a read-only Uri");
};
b.setIgnoreCase = function (a) {
    this.ignoreCase_ = a;
    this.queryData_ && this.queryData_.setIgnoreCase(a);
    return this
};
b.getIgnoreCase = function () {
    return this.ignoreCase_
};
g.Uri.parse = function (a, c) {
    return a instanceof g.Uri ? a.clone() : new g.Uri(a, c)
};
g.Uri.create = function (a, c, d, e, f, h, l, m) {
    m = new g.Uri(null, m);
    a && m.setScheme(a);
    c && m.setUserInfo(c);
    d && m.setDomain(d);
    e && m.setPort(e);
    f && m.setPath(f);
    h && m.setQueryData(h);
    l && m.setFragment(l);
    return m
};
g.Uri.resolve = function (a, c) {
    a instanceof g.Uri || (a = g.Uri.parse(a));
    c instanceof g.Uri || (c = g.Uri.parse(c));
    return a.resolve(c)
};
g.Uri.removeDotSegments = function (a) {
    if (".." == a || "." == a)return"";
    if (g.string.contains(a, "./") || g.string.contains(a, "/.")) {
        var c = g.string.startsWith(a, "/");
        a = a.split("/");
        for (var d = [], e = 0; e < a.length;) {
            var f = a[e++];
            "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0)
        }
        return d.join("/")
    }
    return a
};
g.Uri.decodeOrEmpty_ = function (a, c) {
    return a ? c ? decodeURI(a) : decodeURIComponent(a) : ""
};
g.Uri.encodeSpecialChars_ = function (a, c, d) {
    return g.isString(a) ? (a = encodeURI(a).replace(c, g.Uri.encodeChar_), d && (a = g.Uri.removeDoubleEncoding_(a)), a) : null
};
g.Uri.encodeChar_ = function (a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
};
g.Uri.removeDoubleEncoding_ = function (a) {
    return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")
};
g.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
g.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
g.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
g.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
g.Uri.reDisallowedInFragment_ = /#/g;
g.Uri.haveSameDomain = function (a, c) {
    var d = g.uri.utils.split(a), e = g.uri.utils.split(c);
    return d[g.uri.utils.ComponentIndex.DOMAIN] == e[g.uri.utils.ComponentIndex.DOMAIN] && d[g.uri.utils.ComponentIndex.PORT] == e[g.uri.utils.ComponentIndex.PORT]
};
g.Uri.QueryData = function (a, c, d) {
    this.encodedQuery_ = a || null;
    this.ignoreCase_ = !!d
};
g.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function () {
    if (!this.keyMap_ && (this.keyMap_ = new g.structs.Map, this.count_ = 0, this.encodedQuery_))for (var a = this.encodedQuery_.split("&"), c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null, f = null;
        0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
        e = g.string.urlDecode(e);
        e = this.getKeyName_(e);
        this.add(e, f ? g.string.urlDecode(f) : "")
    }
};
g.Uri.QueryData.createFromMap = function (a, c, d) {
    c = g.structs.getKeys(a);
    if ("undefined" == typeof c)throw Error("Keys are undefined");
    d = new g.Uri.QueryData(null, null, d);
    a = g.structs.getValues(a);
    for (var e = 0; e < c.length; e++) {
        var f = c[e], h = a[e];
        g.isArray(h) ? d.setValues(f, h) : d.add(f, h)
    }
    return d
};
g.Uri.QueryData.createFromKeysValues = function (a, c, d, e) {
    if (a.length != c.length)throw Error("Mismatched lengths for keys/values");
    d = new g.Uri.QueryData(null, null, e);
    for (e = 0; e < a.length; e++)d.add(a[e], c[e]);
    return d
};
b = g.Uri.QueryData.prototype;
b.keyMap_ = null;
b.count_ = null;
b.getCount = function () {
    this.ensureKeyMapInitialized_();
    return this.count_
};
b.add = function (a, c) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    a = this.getKeyName_(a);
    var d = this.keyMap_.get(a);
    d || this.keyMap_.set(a, d = []);
    d.push(c);
    this.count_++;
    return this
};
b.remove = function (a) {
    this.ensureKeyMapInitialized_();
    a = this.getKeyName_(a);
    return this.keyMap_.containsKey(a) ? (this.invalidateCache_(), this.count_ -= this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1
};
b.clear = function () {
    this.invalidateCache_();
    this.keyMap_ = null;
    this.count_ = 0
};
b.isEmpty = function () {
    this.ensureKeyMapInitialized_();
    return 0 == this.count_
};
b.containsKey = function (a) {
    this.ensureKeyMapInitialized_();
    a = this.getKeyName_(a);
    return this.keyMap_.containsKey(a)
};
b.containsValue = function (a) {
    var c = this.getValues();
    return g.array.contains(c, a)
};
b.getKeys = function () {
    this.ensureKeyMapInitialized_();
    for (var a = this.keyMap_.getValues(), c = this.keyMap_.getKeys(), d = [], e = 0; e < c.length; e++)for (var f = a[e], h = 0; h < f.length; h++)d.push(c[e]);
    return d
};
b.getValues = function (a) {
    this.ensureKeyMapInitialized_();
    var c = [];
    if (g.isString(a))this.containsKey(a) && (c = g.array.concat(c, this.keyMap_.get(this.getKeyName_(a)))); else {
        a = this.keyMap_.getValues();
        for (var d = 0; d < a.length; d++)c = g.array.concat(c, a[d])
    }
    return c
};
b.set = function (a, c) {
    this.ensureKeyMapInitialized_();
    this.invalidateCache_();
    a = this.getKeyName_(a);
    this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
    this.keyMap_.set(a, [c]);
    this.count_++;
    return this
};
b.get = function (a, c) {
    var d = a ? this.getValues(a) : [];
    return g.Uri.preserveParameterTypesCompatibilityFlag ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c
};
b.setValues = function (a, c) {
    this.remove(a);
    0 < c.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_(a), g.array.clone(c)), this.count_ += c.length)
};
b.toString = function () {
    if (this.encodedQuery_)return this.encodedQuery_;
    if (!this.keyMap_)return"";
    for (var a = [], c = this.keyMap_.getKeys(), d = 0; d < c.length; d++)for (var e = c[d], f = g.string.urlEncode(e), e = this.getValues(e), h = 0; h < e.length; h++) {
        var l = f;
        "" !== e[h] && (l += "=" + g.string.urlEncode(e[h]));
        a.push(l)
    }
    return this.encodedQuery_ = a.join("&")
};
b.toDecodedString = function () {
    return g.Uri.decodeOrEmpty_(this.toString())
};
b.invalidateCache_ = function () {
    this.encodedQuery_ = null
};
b.clone = function () {
    var a = new g.Uri.QueryData;
    a.encodedQuery_ = this.encodedQuery_;
    this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
    return a
};
b.getKeyName_ = function (a) {
    a = String(a);
    this.ignoreCase_ && (a = a.toLowerCase());
    return a
};
b.setIgnoreCase = function (a) {
    var c = a && !this.ignoreCase_;
    c && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), this.keyMap_.forEach(function (a, c) {
        var f = c.toLowerCase();
        c != f && (this.remove(c), this.setValues(f, a))
    }, this));
    this.ignoreCase_ = a
};
b.extend = function (a) {
    for (var c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        g.structs.forEach(d, function (a, c) {
            this.add(c, a)
        }, this)
    }
};


k.UrlRewriteResolver = function (a, c) {
    this.view_ = a;
    this.filters_ = c || [];
    this.resolvedUrls_ = new g.structs.Map;
    this.excludedParams_ = "__utma __utmb __utmc __utmk __utmv __utmx __utmz _ga dclid gclid utm_campaign utm_content utm_expid utm_id utm_medium utm_nooverride utm_referrer utm_source utm_term".split(" ");
    a.excludeQueryParameters && (this.excludedParams_ = this.excludedParams_.concat(a.excludeQueryParameters.split(/[\s,]+/)));
    a.stripSiteSearchQueryParameters && (this.excludedParams_ = this.excludedParams_.concat(a.siteSearchQueryParameters.split(/[\s,]+/)));
    a.stripSiteSearchCategoryParameters && (this.excludedParams_ = this.excludedParams_.concat(a.siteSearchCategoryParameters.split(/[\s,]+/)))
};
g.exportSymbol("gaext.UrlRewriteResolver", k.UrlRewriteResolver);
k.UrlRewriteResolver.Field_ = {PAGE_REQUEST_URI: "PAGE_REQUEST_URI", PAGE_HOSTNAME: "PAGE_HOSTNAME", CUSTOM_FIELD_1: "CUSTOM_FIELD_1", CUSTOM_FIELD_2: "CUSTOM_FIELD_2"};
k.UrlRewriteResolver.MAX_SUBEXPRESSIONS_ = 5;
k.UrlRewriteResolver.prototype.resolveUrl = function (a) {
    var c = this.resolvedUrls_.get(a);
    if (c)return this.hostname_ = new g.string.StringBuffer(c[0]), c[1];
    c = this.rewriteUrlInternal_(a);
    this.resolvedUrls_.set(a, [this.getHostname(), c]);
    return c
};
k.UrlRewriteResolver.prototype.getHostname = function () {
    return this.hostname_.toString()
};
k.UrlRewriteResolver.prototype.getField_ = function (a) {
    switch (a) {
        case k.UrlRewriteResolver.Field_.PAGE_REQUEST_URI:
            return this.filteredUrl_;
        case k.UrlRewriteResolver.Field_.PAGE_HOSTNAME:
            return this.hostname_;
        case k.UrlRewriteResolver.Field_.CUSTOM_FIELD_1:
            return this.customFieldA_;
        case k.UrlRewriteResolver.Field_.CUSTOM_FIELD_2:
            return this.customFieldB_;
        default:
            return null
    }
};
k.UrlRewriteResolver.prototype.resetUrlFields_ = function (a, c) {
    var d = (new g.Uri(a)).getDomain();
    this.hostname_ = new g.string.StringBuffer(d);
    this.filteredUrl_ = new g.string.StringBuffer(c);
    this.customFieldA_ = new g.string.StringBuffer;
    this.customFieldB_ = new g.string.StringBuffer
};
k.UrlRewriteResolver.translateReplacement_ = function (a) {
    if (!a)return"";
    a = a.replace(/\$/g, "$$$$");
    a = a.split(/\\\\/);
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        a[c] = d.replace(/\\(\d)/g, "$$$1")
    }
    return a = a.join("\\")
};
k.UrlRewriteResolver.prototype.rewriteUrlInternal_ = function (a) {
    this.resetUrlFields_(a, this.sanitizePath_(a));
    var c;
    for (a = 0; a < this.filters_.length; a++)switch (c = this.filters_[a], c.type) {
        case "LOWERCASE":
            c = c.lowercaseDetails;
            (c = this.getField_(c.field)) && c.set(c.toString().toLowerCase());
            break;
        case "UPPERCASE":
            c = c.uppercaseDetails;
            (c = this.getField_(c.field)) && c.set(c.toString().toUpperCase());
            break;
        case "SEARCH_AND_REPLACE":
            var d = c.searchAndReplaceDetails;
            c = this.getField_(d.field);
            var e = d.searchString,
                f = d.replaceString, d = d.caseSensitive, d = "g" + (d ? "" : "i");
            c && c.set(c.toString().replace(new RegExp(e, d), k.UrlRewriteResolver.translateReplacement_(f)));
            break;
        case "ADVANCED":
            this.applyAdvancedFilter_(c)
    }
    return this.filteredUrl_.toString()
};
k.UrlRewriteResolver.prototype.applyAdvancedFilter_ = function (a) {
    if (this.validateAdvancedFilter_(a)) {
        var c = a.advancedDetails;
        a = this.getField_(c.outputToField);
        var d = this.getField_(c.fieldA), e = this.getField_(c.fieldB);
        if ((d = (new RegExp(c.extractA, c.caseSensitive ? "" : "i")).exec(d)) || !c.fieldARequired)if ((e = (new RegExp(c.extractB, c.caseSensitive ? "" : "i")).exec(e)) || !c.fieldBRequired) {
            var c = c.outputConstructor, f = !1;
            a.clear();
            for (var h = 0; h < c.length; h++) {
                var l = c.charAt(h), m = c.charAt(h + 1), n = +c.charAt(h + 2);
                !f && "$" == l && h < c.length - 2 && ("A" == m || "B" == m) && 0 <= n && n < k.UrlRewriteResolver.MAX_SUBEXPRESSIONS_ ? ((l = "A" == m ? d : e) && l[n] && a.append(l[n]), h += 2) : "\\" != l || f ? (f = !1, a.append(l)) : f = !0
            }
        }
    }
};
k.UrlRewriteResolver.prototype.validateAdvancedFilter_ = function (a) {
    a = a.advancedDetails;
    var c = this.getField_(a.outputToField);
    if (null === c || 0 == c.getLength() && !a.overrideOutputField)return!1;
    c = this.getField_(a.fieldA);
    if (a.fieldARequired && (null === c || !a.extractA))return!1;
    c = this.getField_(a.fieldB);
    return!a.fieldBRequired || null !== c && a.extractB ? !0 : !1
};
k.UrlRewriteResolver.stripSchemeAndHostname_ = function (a) {
    var c = a.indexOf("://");
    -1 < c && (a = a.substr(c + 3), c = a.indexOf("/"), a = -1 < c ? a.substr(c) : "/");
    return a
};
k.UrlRewriteResolver.prototype.sanitizePath_ = function (a) {
    a = k.UrlRewriteResolver.stripSchemeAndHostname_(a);
    var c = a.indexOf("#");
    -1 < c && (a = a.slice(0, c));
    c = a.split("?");
    a = 0 === c.length ? "/" : 0 === c[0].length ? "/" : c[0];
    "/" == a.charAt(a.length - 1) && this.view_.defaultPage && (a += this.view_.defaultPage);
    if (1 < c.length && 0 < c[1].length)for (var c = c[1].split(/[&;]/), d = "?", e = 0; e < c.length; e++) {
        var f = c[e], h = f.split("=");
        0 < h.length && 0 < h[0].length && -1 == this.excludedParams_.indexOf(h[0]) && (a = a + d + f, d = "&")
    }
    return a
};


/*------------------------------- Auth Start --------------------------------------------*/
k.Auth = function (a, c) {
    this.onConnect_ = a;
    this.onDisconnect_ = c;
    this.gapiLoaded_ = this.authenticated_ = !1
};
k.Auth.API_KEY_ = "AIzaSyCfXzqgE1Yo6RM3MkWniQ-o2cVW2PU9Wpc";
k.Auth.APISID_ = "APISID";
k.Auth.SAPISID_ = "SAPISID";
k.Auth.OVERRIDE_SID_ = "__OVERRIDE_SID";
k.Auth.OVERRIDE_APISID_ = "__APISID";
k.Auth.OVERRIDE_SAPISID_ = "__SAPISID";
k.Auth.GAPI_USE_FP_ = "googleapis.config/auth/useFirstPartyAuth";
k.Auth.GAPI_ROOT_ = "googleapis.config/root";
k.Auth.GAPI_ROOT_FP_ = "googleapis.config/root-1p";
k.Auth.prototype.connect = function () {
    this.overrideCookies_();
    this.loadGapi_();
    this.installListener_()
};
k.Auth.prototype.loadGapi_ = function () {
    var a = this;
    gapi.client.load("analytics", "v3", function () {
        k.Auth.setUpGapi_();
        a.gapiLoaded_ = !0;
        if (a.authenticated_)
            a.onConnect_()
    })
};
k.Auth.setUpGapi_ = function () {
    gapi.config.update(k.Auth.GAPI_USE_FP_, !0);
    gapi.client.setApiKey(k.Auth.API_KEY_)
};
b = k.Auth.prototype;
b.getCookieCallback_ = function (a) {
    a && (a.name == k.Auth.APISID_ ? window[k.Auth.OVERRIDE_APISID_] = a.value : a.name == k.Auth.SAPISID_ && (window[k.Auth.OVERRIDE_SAPISID_] = a.value));
    window[k.Auth.OVERRIDE_SID_] = !!window[k.Auth.OVERRIDE_SAPISID_] || !!window[k.Auth.OVERRIDE_APISID_];
    a = this.authenticated_;
    this.authenticated_ = !!window[k.Auth.OVERRIDE_SID_];
    !a && this.authenticated_ && this.gapiLoaded_ && window.setTimeout(this.onConnect_, 0);
    if (a && !this.authenticated_)
        this.onDisconnect_()
};
b.overrideCookies_ = function () {
    window[k.Auth.OVERRIDE_APISID_] = null;
    window[k.Auth.OVERRIDE_SAPISID_] = null;
    var a = this;
    chrome.cookies.get({url: "http://www.google.com", name: k.Auth.APISID_}, function (c) {
        a.getCookieCallback_(c)
    });
    chrome.cookies.get({url: "https://www.google.com", name: k.Auth.SAPISID_}, function (c) {
        a.getCookieCallback_(c)
    })
};
b.onCookieChanged_ = function (a) {
    0 <= a.cookie.domain.indexOf("google.") && a.cookie.name == k.Auth.SAPISID_ && this.overrideCookies_()
};
b.installListener_ = function () {
    chrome.cookies.onChanged.addListener(g.bind(this.onCookieChanged_, this))
};
b.isAuthenticated = function () {
    return this.authenticated_
};
/*------------------------------- Auth End --------------------------------------------*/


g.debug.entryPointRegistry = {};
g.debug.EntryPointMonitor = function () {
};
g.debug.entryPointRegistry.refList_ = [];
g.debug.entryPointRegistry.monitors_ = [];
g.debug.entryPointRegistry.monitorsMayExist_ = !1;
g.debug.entryPointRegistry.register = function (a) {
    g.debug.entryPointRegistry.refList_[g.debug.entryPointRegistry.refList_.length] = a;
    if (g.debug.entryPointRegistry.monitorsMayExist_)for (var c = g.debug.entryPointRegistry.monitors_, d = 0; d < c.length; d++)a(g.bind(c[d].wrap, c[d]))
};
g.debug.entryPointRegistry.monitorAll = function (a) {
    g.debug.entryPointRegistry.monitorsMayExist_ = !0;
    for (var c = g.bind(a.wrap, a), d = 0; d < g.debug.entryPointRegistry.refList_.length; d++)g.debug.entryPointRegistry.refList_[d](c);
    g.debug.entryPointRegistry.monitors_.push(a)
};
g.debug.entryPointRegistry.unmonitorAllIfPossible = function (a) {
    var c = g.debug.entryPointRegistry.monitors_;
    g.asserts.assert(a == c[c.length - 1], "Only the most recent monitor can be unwrapped.");
    a = g.bind(a.unwrap, a);
    for (var d = 0; d < g.debug.entryPointRegistry.refList_.length; d++)g.debug.entryPointRegistry.refList_[d](a);
    c.length--
};
g.async = {};
g.async.throwException = function (a) {
    g.global.setTimeout(function () {
        throw a;
    }, 0)
};
g.async.nextTick = function (a, c) {
    var d = a;
    c && (d = g.bind(a, c));
    d = g.async.nextTick.wrapCallback_(d);
    !g.isFunction(g.global.setImmediate) || g.global.Window && g.global.Window.prototype.setImmediate == g.global.setImmediate ? (g.async.nextTick.setImmediate_ || (g.async.nextTick.setImmediate_ = g.async.nextTick.getSetImmediateEmulator_()), g.async.nextTick.setImmediate_(d)) : g.global.setImmediate(d)
};
g.async.nextTick.getSetImmediateEmulator_ = function () {
    var a = g.global.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function () {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var c = a.contentWindow, a = c.document;
        a.open();
        a.write("");
        a.close();
        var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, a = g.bind(function (a) {
            if (a.origin ==
                e || a.data == d)this.port1.onmessage()
        }, this);
        c.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {postMessage: function () {
            c.postMessage(d, e)
        }}
    });
    if ("undefined" !== typeof a && !g.labs.userAgent.browser.isIE()) {
        var c = new a, d = {}, e = d;
        c.port1.onmessage = function () {
            d = d.next;
            var a = d.cb;
            d.cb = null;
            a()
        };
        return function (a) {
            e.next = {cb: a};
            e = e.next;
            c.port2.postMessage(0)
        }
    }
    return"undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function (a) {
        var c = document.createElement("script");
        c.onreadystatechange = function () {
            c.onreadystatechange = null;
            c.parentNode.removeChild(c);
            c = null;
            a();
            a = null
        };
        document.documentElement.appendChild(c)
    } : function (a) {
        g.global.setTimeout(a, 0)
    }
};
g.async.nextTick.wrapCallback_ = g.functions.identity;
g.debug.entryPointRegistry.register(function (a) {
    g.async.nextTick.wrapCallback_ = a
});
g.testing = {};
g.testing.watchers = {};
g.testing.watchers.resetWatchers_ = [];
g.testing.watchers.signalClockReset = function () {
    for (var a = g.testing.watchers.resetWatchers_, c = 0; c < a.length; c++)g.testing.watchers.resetWatchers_[c]()
};
g.testing.watchers.watchClockReset = function (a) {
    g.testing.watchers.resetWatchers_.push(a)
};
g.async.run = function (a, c) {
    g.async.run.schedule_ || g.async.run.initializeRunner_();
    g.async.run.workQueueScheduled_ || (g.async.run.schedule_(), g.async.run.workQueueScheduled_ = !0);
    g.async.run.workQueue_.push(new g.async.run.WorkItem_(a, c))
};
g.async.run.initializeRunner_ = function () {
    if (g.global.Promise && g.global.Promise.resolve) {
        var a = g.global.Promise.resolve();
        g.async.run.schedule_ = function () {
            a.then(g.async.run.processWorkQueue)
        }
    } else g.async.run.schedule_ = function () {
        g.async.nextTick(g.async.run.processWorkQueue)
    }
};
g.async.run.forceNextTick = function () {
    g.async.run.schedule_ = function () {
        g.async.nextTick(g.async.run.processWorkQueue)
    }
};
g.async.run.workQueueScheduled_ = !1;
g.async.run.workQueue_ = [];
g.DEBUG && (g.async.run.resetQueue_ = function () {
    g.async.run.workQueueScheduled_ = !1;
    g.async.run.workQueue_ = []
}, g.testing.watchers.watchClockReset(g.async.run.resetQueue_));
g.async.run.processWorkQueue = function () {
    for (; g.async.run.workQueue_.length;) {
        var a = g.async.run.workQueue_;
        g.async.run.workQueue_ = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            try {
                d.fn.call(d.scope)
            } catch (e) {
                g.async.throwException(e)
            }
        }
    }
    g.async.run.workQueueScheduled_ = !1
};
g.async.run.WorkItem_ = function (a, c) {
    this.fn = a;
    this.scope = c
};
g.promise = {};
g.promise.Resolver = function () {
};
g.Thenable = function () {
};
g.Thenable.prototype.then = function () {
};
g.Thenable.IMPLEMENTED_BY_PROP = "$goog_Thenable";
g.Thenable.addImplementation = function (a) {
    g.exportProperty(a.prototype, "then", a.prototype.then);
    a.prototype[g.Thenable.IMPLEMENTED_BY_PROP] = !0
};
g.Thenable.isImplementedBy = function (a) {
    if (!a)return!1;
    try {
        return!!a[g.Thenable.IMPLEMENTED_BY_PROP]
    } catch (c) {
        return!1
    }
};
g.Promise = function (a, c) {
    this.state_ = g.Promise.State_.PENDING;
    this.result_ = void 0;
    this.callbackEntries_ = this.parent_ = null;
    this.executing_ = !1;
    0 < g.Promise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 == g.Promise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);
    g.Promise.LONG_STACK_TRACES && (this.stack_ = [], this.addStackTrace_(Error("created")), this.currentStep_ = 0);
    try {
        var d = this;
        a.call(c, function (a) {
            d.resolve_(g.Promise.State_.FULFILLED, a)
        }, function (a) {
            d.resolve_(g.Promise.State_.REJECTED,
                a)
        })
    } catch (e) {
        this.resolve_(g.Promise.State_.REJECTED, e)
    }
};
g.Promise.LONG_STACK_TRACES = !1;
g.Promise.UNHANDLED_REJECTION_DELAY = 0;
g.Promise.State_ = {PENDING: 0, BLOCKED: 1, FULFILLED: 2, REJECTED: 3};
g.Promise.resolve = function (a) {
    return new g.Promise(function (c) {
        c(a)
    })
};
g.Promise.reject = function (a) {
    return new g.Promise(function (c, d) {
        d(a)
    })
};
g.Promise.race = function (a) {
    return new g.Promise(function (c, d) {
        a.length || c(void 0);
        for (var e = 0, f; f = a[e]; e++)f.then(c, d)
    })
};
g.Promise.all = function (a) {
    return new g.Promise(function (c, d) {
        var e = a.length, f = [];
        if (e)for (var h = function (a, d) {
            e--;
            f[a] = d;
            0 == e && c(f)
        }, l = function (a) {
            d(a)
        }, m = 0, n; n = a[m]; m++)n.then(g.partial(h, m), l); else c(f)
    })
};
g.Promise.firstFulfilled = function (a) {
    return new g.Promise(function (c, d) {
        var e = a.length, f = [];
        if (e)for (var h = function (a) {
            c(a)
        }, l = function (a, c) {
            e--;
            f[a] = c;
            0 == e && d(f)
        }, m = 0, n; n = a[m]; m++)n.then(h, g.partial(l, m)); else c(void 0)
    })
};
g.Promise.withResolver = function () {
    var a, c, d = new g.Promise(function (d, f) {
        a = d;
        c = f
    });
    return new g.Promise.Resolver_(d, a, c)
};
g.Promise.prototype.then = function (a, c, d) {
    null != a && g.asserts.assertFunction(a, "opt_onFulfilled should be a function.");
    null != c && g.asserts.assertFunction(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    g.Promise.LONG_STACK_TRACES && this.addStackTrace_(Error("then"));
    return this.addChildPromise_(g.isFunction(a) ? a : null, g.isFunction(c) ? c : null, d)
};
g.Thenable.addImplementation(g.Promise);
b = g.Promise.prototype;
b.cancel = function (a) {
    this.state_ == g.Promise.State_.PENDING && g.async.run(function () {
        var c = new g.Promise.CancellationError(a);
        this.cancelInternal_(c)
    }, this)
};
b.cancelInternal_ = function (a) {
    this.state_ == g.Promise.State_.PENDING && (this.parent_ ? this.parent_.cancelChild_(this, a) : this.resolve_(g.Promise.State_.REJECTED, a))
};
b.cancelChild_ = function (a, c) {
    if (this.callbackEntries_) {
        for (var d = 0, e = -1, f = 0, h; h = this.callbackEntries_[f]; f++)if (h = h.child)if (d++, h == a && (e = f), 0 <= e && 1 < d)break;
        0 <= e && (this.state_ == g.Promise.State_.PENDING && 1 == d ? this.cancelInternal_(c) : (d = this.callbackEntries_.splice(e, 1)[0], this.executeCallback_(d, g.Promise.State_.REJECTED, c)))
    }
};
b.addCallbackEntry_ = function (a) {
    this.callbackEntries_ && this.callbackEntries_.length || this.state_ != g.Promise.State_.FULFILLED && this.state_ != g.Promise.State_.REJECTED || this.scheduleCallbacks_();
    this.callbackEntries_ || (this.callbackEntries_ = []);
    this.callbackEntries_.push(a)
};
b.addChildPromise_ = function (a, c, d) {
    var e = {child: null, onFulfilled: null, onRejected: null};
    e.child = new g.Promise(function (f, h) {
        e.onFulfilled = a ? function (c) {
            try {
                var e = a.call(d, c);
                f(e)
            } catch (n) {
                h(n)
            }
        } : f;
        e.onRejected = c ? function (a) {
            try {
                var e = c.call(d, a);
                !g.isDef(e) && a instanceof g.Promise.CancellationError ? h(a) : f(e)
            } catch (n) {
                h(n)
            }
        } : h
    });
    e.child.parent_ = this;
    this.addCallbackEntry_(e);
    return e.child
};
b.unblockAndFulfill_ = function (a) {
    g.asserts.assert(this.state_ == g.Promise.State_.BLOCKED);
    this.state_ = g.Promise.State_.PENDING;
    this.resolve_(g.Promise.State_.FULFILLED, a)
};
b.unblockAndReject_ = function (a) {
    g.asserts.assert(this.state_ == g.Promise.State_.BLOCKED);
    this.state_ = g.Promise.State_.PENDING;
    this.resolve_(g.Promise.State_.REJECTED, a)
};
b.resolve_ = function (a, c) {
    if (this.state_ == g.Promise.State_.PENDING) {
        if (this == c)a = g.Promise.State_.REJECTED, c = new TypeError("Promise cannot resolve to itself"); else {
            if (g.Thenable.isImplementedBy(c)) {
                this.state_ = g.Promise.State_.BLOCKED;
                c.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
                return
            }
            if (g.isObject(c))try {
                var d = c.then;
                if (g.isFunction(d)) {
                    this.tryThen_(c, d);
                    return
                }
            } catch (e) {
                a = g.Promise.State_.REJECTED, c = e
            }
        }
        this.result_ = c;
        this.state_ = a;
        this.scheduleCallbacks_();
        a != g.Promise.State_.REJECTED ||
            c instanceof g.Promise.CancellationError || g.Promise.addUnhandledRejection_(this, c)
    }
};
b.tryThen_ = function (a, c) {
    this.state_ = g.Promise.State_.BLOCKED;
    var d = this, e = !1, f = function (a) {
        e || (e = !0, d.unblockAndFulfill_(a))
    }, h = function (a) {
        e || (e = !0, d.unblockAndReject_(a))
    };
    try {
        c.call(a, f, h)
    } catch (l) {
        h(l)
    }
};
b.scheduleCallbacks_ = function () {
    this.executing_ || (this.executing_ = !0, g.async.run(this.executeCallbacks_, this))
};
b.executeCallbacks_ = function () {
    for (; this.callbackEntries_ && this.callbackEntries_.length;) {
        var a = this.callbackEntries_;
        this.callbackEntries_ = [];
        for (var c = 0; c < a.length; c++)g.Promise.LONG_STACK_TRACES && this.currentStep_++, this.executeCallback_(a[c], this.state_, this.result_)
    }
    this.executing_ = !1
};
b.executeCallback_ = function (a, c, d) {
    if (c == g.Promise.State_.FULFILLED)a.onFulfilled(d); else this.removeUnhandledRejection_(), a.onRejected(d)
};
b.addStackTrace_ = function (a) {
    if (g.Promise.LONG_STACK_TRACES && g.isString(a.stack)) {
        var c = a.stack.split("\n", 4)[3];
        a = a.message;
        a += Array(11 - a.length).join(" ");
        this.stack_.push(a + c)
    }
};
b.appendLongStack_ = function (a) {
    if (g.Promise.LONG_STACK_TRACES && a && g.isString(a.stack) && this.stack_.length) {
        for (var c = ["Promise trace:"], d = this; d; d = d.parent_) {
            for (var e = this.currentStep_; 0 <= e; e--)c.push(d.stack_[e]);
            c.push("Value: [" + (d.state_ == g.Promise.State_.REJECTED ? "REJECTED" : "FULFILLED") + "] <" + String(d.result_) + ">")
        }
        a.stack += "\n\n" + c.join("\n")
    }
};
b.removeUnhandledRejection_ = function () {
    if (0 < g.Promise.UNHANDLED_REJECTION_DELAY)for (var a = this; a && a.unhandledRejectionId_; a = a.parent_)g.global.clearTimeout(a.unhandledRejectionId_), a.unhandledRejectionId_ = 0; else if (0 == g.Promise.UNHANDLED_REJECTION_DELAY)for (a = this; a && a.hadUnhandledRejection_; a = a.parent_)a.hadUnhandledRejection_ = !1
};
g.Promise.addUnhandledRejection_ = function (a, c) {
    0 < g.Promise.UNHANDLED_REJECTION_DELAY ? a.unhandledRejectionId_ = g.global.setTimeout(function () {
        a.appendLongStack_(c);
        g.Promise.handleRejection_.call(null, c)
    }, g.Promise.UNHANDLED_REJECTION_DELAY) : 0 == g.Promise.UNHANDLED_REJECTION_DELAY && (a.hadUnhandledRejection_ = !0, g.async.run(function () {
        a.hadUnhandledRejection_ && (a.appendLongStack_(c), g.Promise.handleRejection_.call(null, c))
    }))
};
g.Promise.handleRejection_ = g.async.throwException;
g.Promise.setUnhandledRejectionHandler = function (a) {
    g.Promise.handleRejection_ = a
};
g.Promise.CancellationError = function (a) {
    g.debug.Error.call(this, a)
};
g.inherits(g.Promise.CancellationError, g.debug.Error);
g.Promise.CancellationError.prototype.name = "cancel";
g.Promise.Resolver_ = function (a, c, d) {
    this.promise = a;
    this.resolve = c;
    this.reject = d
};
k.TabSettings = function (a) {
    this.siteId_ = a;
    this.selectedSegments_ = [];
    this.dateOption_ = k.DateRange.DateOptions.LAST_30_DAYS;
    this.hasComparison_ = !1;
    this.compareDateRange_ = this.primaryDateRange_ = null;
    this.showBubbles_ = !0;
    this.showColors_ = !1;
    this.fullMode_ = !0;
    this.position_ = k.PositionType.TOP;
    this.minimumPercent_ = .001
};
b = k.TabSettings.prototype;
b.getAccounts = function () {
    return this.accounts_
};
b.setAccounts = function (a) {
    this.accounts_ = a
};
b.getShowPageData = function () {
    return this.position_ != k.PositionType.NONE
};
b.setPosition = function (a) {
    a >= k.PositionType.TOP && a <= k.PositionType.NONE && (this.position_ = a)
};
b.getPosition = function () {
    return this.position_
};
b.setWebsiteSettings = function (a) {
    a && ("showBubbles"in a && this.showBubbles(a.showBubbles), "fullMode"in a && this.setFullMode(a.fullMode), "position"in a && this.setPosition(a.position))
};
b.getWebsiteSettings = function () {
    return{viewId: this.getSelectedView().id, showBubbles: this.getShowBubbles(), fullMode: this.isFullMode(), position: this.getPosition()}
};
b.getSiteId = function () {
    return this.siteId_
};
b.setPath = function (a) {
    this.path_ = this.urlRewriteResolver_.resolveUrl(a)
};
b.getPath = function () {
    return this.path_
};
b.setSelectedView = function (a, c, d) {
    this.selectedView_ = a;
    this.filters_ = c;
    this.selectedView_ && (this.urlRewriteResolver_ = new k.UrlRewriteResolver(this.selectedView_, this.filters_), this.setPath(d))
};
b.getSelectedView = function () {
    return this.selectedView_
};
b.getFilters = function () {
    return this.filters_
};
b.setSelectedSegments = function (a) {
    this.selectedSegments_ = a
};
b.getSelectedSegments = function () {
    return this.selectedSegments_
};
b.setDateOption = function (a) {
    this.dateOption_ = a
};
b.getDateOption = function () {
    return this.dateOption_
};
b.setHasComparison = function (a) {
    this.hasComparison_ = a
};
b.getHasComparison = function () {
    return this.hasComparison_
};
b.setPrimaryDateRange = function (a) {
    this.primaryDateRange_ = a
};
b.getPrimaryDateRange = function () {
    var a = this.dateOption_;
    return(a = a ? this.dateOption_ == k.DateRange.DateOptions.LAST_7_DAYS ? k.DateRange.lastNdays(7) : k.DateRange.lastNdays(30) : this.primaryDateRange_) || k.DateRange.lastNdays(30)
};
b.setCompareDateRange = function (a) {
    this.compareDateRange_ = a
};
b.getCompareDateRange = function () {
    var a = this.dateOption_, c = null;
    a ? this.hasComparison_ && (c = this.dateOption_ == k.DateRange.DateOptions.LAST_7_DAYS ? k.DateRange.lastNdays(14, 8) : k.DateRange.lastNdays(60, 31)) : c = this.compareDateRange_;
    return c
};
b.getShowBubbles = function () {
    return this.showBubbles_
};
b.showBubbles = function (a) {
    this.showBubbles_ = a
};
b.getShowColors = function () {
    return this.showColors_
};
b.showColors = function (a) {
    this.showColors_ = a
};
b.isFullMode = function () {
    return this.fullMode_
};
b.setFullMode = function (a) {
    this.fullMode_ = a
};
b.getMinimumPercent = function () {
    return this.minimumPercent_
};
b.setMinimumPercent = function (a) {
    this.minimumPercent_ = a
};
k.BgUtils = {};
k.BgUtils.getSiteId = function (a) {
    a = new g.Uri(a);
    a = a.getDomain();
    return a = a.replace(/^www\./, "")
};
k.BgUtils.findViewInAccounts = function (a, c) {
    for (var d = 0; d < a.length; d++)for (var e = a[d].wprops, f = 0; f < e.length; f++)for (var h = e[f].views, l = 0; h && l < h.length; l++) {
        var m = h[l];
        if (m.id == c)return m
    }
    return null
};
g.structs.Collection = function () {
};
g.structs.Set = function (a) {
    this.map_ = new g.structs.Map;
    a && this.addAll(a)
};
g.structs.Set.getKey_ = function (a) {
    var c = typeof a;
    return"object" == c && a || "function" == c ? "o" + g.getUid(a) : c.substr(0, 1) + a
};
b = g.structs.Set.prototype;
b.getCount = function () {
    return this.map_.getCount()
};
b.add = function (a) {
    this.map_.set(g.structs.Set.getKey_(a), a)
};
b.addAll = function (a) {
    a = g.structs.getValues(a);
    for (var c = a.length, d = 0; d < c; d++)this.add(a[d])
};
b.removeAll = function (a) {
    a = g.structs.getValues(a);
    for (var c = a.length, d = 0; d < c; d++)this.remove(a[d])
};
b.remove = function (a) {
    return this.map_.remove(g.structs.Set.getKey_(a))
};
b.clear = function () {
    this.map_.clear()
};
b.isEmpty = function () {
    return this.map_.isEmpty()
};
b.contains = function (a) {
    return this.map_.containsKey(g.structs.Set.getKey_(a))
};
b.getValues = function () {
    return this.map_.getValues()
};
b.clone = function () {
    return new g.structs.Set(this)
};
b.equals = function (a) {
    return this.getCount() == g.structs.getCount(a) && this.isSubsetOf(a)
};
b.isSubsetOf = function (a) {
    var c = g.structs.getCount(a);
    if (this.getCount() > c)return!1;
    !(a instanceof g.structs.Set) && 5 < c && (a = new g.structs.Set(a));
    return g.structs.every(this, function (c) {
        return g.structs.contains(a, c)
    })
};
b.__iterator__ = function () {
    return this.map_.__iterator__(!1)
};
g.debug.LOGGING_ENABLED = g.DEBUG;
g.debug.catchErrors = function (a, c, d) {
    d = d || g.global;
    var e = d.onerror, f = !!c;
    g.userAgent.WEBKIT && !g.userAgent.isVersionOrHigher("535.3") && (f = !f);
    d.onerror = function (c, d, m, n, p) {
        e && e(c, d, m, n, p);
        a({message: c, fileName: d, line: m, col: n, error: p});
        return f
    }
};
g.debug.expose = function (a, c) {
    if ("undefined" == typeof a)return"undefined";
    if (null == a)return"NULL";
    var d = [], e;
    for (e in a)if (c || !g.isFunction(a[e])) {
        var f = e + " = ";
        try {
            f += a[e]
        } catch (h) {
            f += "*** " + h + " ***"
        }
        d.push(f)
    }
    return d.join("\n")
};
g.debug.deepExpose = function (a, c) {
    var d = [], e = function (a, h, l) {
        var m = h + "  ";
        l = new g.structs.Set(l);
        try {
            if (g.isDef(a))if (g.isNull(a))d.push("NULL"); else if (g.isString(a))d.push('"' + a.replace(/\n/g, "\n" + h) + '"'); else if (g.isFunction(a))d.push(String(a).replace(/\n/g, "\n" + h)); else if (g.isObject(a))if (l.contains(a))d.push("*** reference loop detected ***"); else {
                l.add(a);
                d.push("{");
                for (var n in a)if (c || !g.isFunction(a[n]))d.push("\n"), d.push(m), d.push(n + " = "), e(a[n], m, l);
                d.push("\n" + h + "}")
            } else d.push(a);
            else d.push("undefined")
        } catch (p) {
            d.push("*** " + p + " ***")
        }
    };
    e(a, "", new g.structs.Set);
    return d.join("")
};
g.debug.exposeArray = function (a) {
    for (var c = [], d = 0; d < a.length; d++)g.isArray(a[d]) ? c.push(g.debug.exposeArray(a[d])) : c.push(a[d]);
    return"[ " + c.join(", ") + " ]"
};
g.debug.exposeException = function (a, c) {
    try {
        var d = g.debug.normalizeErrorObject(a), e = "Message: " + g.string.htmlEscape(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + g.string.htmlEscape(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + g.string.htmlEscape(g.debug.getStacktrace(c) + "-> ");
        return e
    } catch (f) {
        return"Exception trying to expose exception! You win, we lose. " + f
    }
};
g.debug.normalizeErrorObject = function (a) {
    var c = g.getObjectByName("window.location.href");
    if (g.isString(a))
        return{
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: c,
            stack: "Not available"
        };
    var d, e, f = !1;
    try {
        d = a.lineNumber || a.line || "Not available"
    } catch (h) {
        d = "Not available", f = !0
    }
    try {
        e = a.fileName || a.filename || a.sourceURL || g.global.$googDebugFname || c
    } catch (l) {
        e = "Not available", f = !0
    }
    return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message: a.message || "Not available", name: a.name ||
        "UnknownError", lineNumber: d, fileName: e, stack: a.stack || "Not available"}
};
g.debug.enhanceError = function (a, c) {
    var d;
    "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, g.debug.enhanceError)) : d = a;
    d.stack || (d.stack = g.debug.getStacktrace(g.debug.enhanceError));
    if (c) {
        for (var e = 0; d["message" + e];)++e;
        d["message" + e] = String(c)
    }
    return d
};
g.debug.getStacktraceSimple = function (a) {
    if (g.STRICT_MODE_COMPATIBLE) {
        var c = g.debug.getNativeStackTrace_(g.debug.getStacktraceSimple);
        if (c)return c
    }
    for (var c = [], d = arguments.callee.caller, e = 0; d && (!a || e < a);) {
        c.push(g.debug.getFunctionName(d));
        c.push("()\n");
        try {
            d = d.caller
        } catch (f) {
            c.push("[exception trying to get caller]\n");
            break
        }
        e++;
        if (e >= g.debug.MAX_STACK_DEPTH) {
            c.push("[...long stack...]");
            break
        }
    }
    a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
    return c.join("")
};
g.debug.MAX_STACK_DEPTH = 50;
g.debug.getNativeStackTrace_ = function (a) {
    var c = Error();
    if (Error.captureStackTrace)return Error.captureStackTrace(c, a), String(c.stack);
    try {
        throw c;
    } catch (d) {
        c = d
    }
    return(a = c.stack) ? String(a) : null
};
g.debug.getStacktrace = function (a) {
    var c;
    g.STRICT_MODE_COMPATIBLE && (c = a || g.debug.getStacktrace, c = g.debug.getNativeStackTrace_(c));
    c || (c = g.debug.getStacktraceHelper_(a || arguments.callee.caller, []));
    return c
};
g.debug.getStacktraceHelper_ = function (a, c) {
    var d = [];
    if (g.array.contains(c, a))d.push("[...circular reference...]"); else if (a && c.length < g.debug.MAX_STACK_DEPTH) {
        d.push(g.debug.getFunctionName(a) + "(");
        for (var e = a.arguments, f = 0; e && f < e.length; f++) {
            0 < f && d.push(", ");
            var h;
            h = e[f];
            switch (typeof h) {
                case "object":
                    h = h ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    h = String(h);
                    break;
                case "boolean":
                    h = h ? "true" : "false";
                    break;
                case "function":
                    h = (h = g.debug.getFunctionName(h)) ? h : "[fn]";
                    break;
                default:
                    h = typeof h
            }
            40 <
            h.length && (h = h.substr(0, 40) + "...");
            d.push(h)
        }
        c.push(a);
        d.push(")\n");
        try {
            d.push(g.debug.getStacktraceHelper_(a.caller, c))
        } catch (l) {
            d.push("[exception trying to get caller]\n")
        }
    } else a ? d.push("[...long stack...]") : d.push("[end]");
    return d.join("")
};
g.debug.setFunctionResolver = function (a) {
    g.debug.fnNameResolver_ = a
};
g.debug.getFunctionName = function (a) {
    if (g.debug.fnNameCache_[a])return g.debug.fnNameCache_[a];
    if (g.debug.fnNameResolver_) {
        var c = g.debug.fnNameResolver_(a);
        if (c)return g.debug.fnNameCache_[a] = c
    }
    a = String(a);
    g.debug.fnNameCache_[a] || ((c = /function ([^\(]+)/.exec(a)) ? (c = c[1], g.debug.fnNameCache_[a] = c) : g.debug.fnNameCache_[a] = "[Anonymous]");
    return g.debug.fnNameCache_[a]
};
g.debug.makeWhitespaceVisible = function (a) {
    return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
};
g.debug.fnNameCache_ = {};
g.debug.LogRecord = function (a, c, d, e, f) {
    this.reset(a, c, d, e, f)
};
g.debug.LogRecord.prototype.exception_ = null;
g.debug.LogRecord.prototype.exceptionText_ = null;
g.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = !0;
g.debug.LogRecord.nextSequenceNumber_ = 0;
b = g.debug.LogRecord.prototype;
b.reset = function (a, c, d, e, f) {
    g.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS && ("number" == typeof f || g.debug.LogRecord.nextSequenceNumber_++);
    e || g.now();
    this.level_ = a;
    this.msg_ = c;
    delete this.exception_;
    delete this.exceptionText_
};
b.setException = function (a) {
    this.exception_ = a
};
b.setExceptionText = function (a) {
    this.exceptionText_ = a
};
b.setLevel = function (a) {
    this.level_ = a
};
b.getMessage = function () {
    return this.msg_
};
g.debug.LogBuffer = function () {
    g.asserts.assert(g.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
    this.clear()
};
g.debug.LogBuffer.getInstance = function () {
    g.debug.LogBuffer.instance_ || (g.debug.LogBuffer.instance_ = new g.debug.LogBuffer);
    return g.debug.LogBuffer.instance_
};
g.debug.LogBuffer.CAPACITY = 0;
g.debug.LogBuffer.prototype.addRecord = function (a, c, d) {
    var e = (this.curIndex_ + 1) % g.debug.LogBuffer.CAPACITY;
    this.curIndex_ = e;
    if (this.isFull_)return e = this.buffer_[e], e.reset(a, c, d), e;
    this.isFull_ = e == g.debug.LogBuffer.CAPACITY - 1;
    return this.buffer_[e] = new g.debug.LogRecord(a, c, d)
};
g.debug.LogBuffer.isBufferingEnabled = function () {
    return 0 < g.debug.LogBuffer.CAPACITY
};
g.debug.LogBuffer.prototype.clear = function () {
    this.buffer_ = Array(g.debug.LogBuffer.CAPACITY);
    this.curIndex_ = -1;
    this.isFull_ = !1
};
g.debug.Logger = function (a) {
    this.name_ = a;
    this.handlers_ = this.children_ = this.level_ = this.parent_ = null
};
g.debug.Logger.ROOT_LOGGER_NAME = "";
g.debug.Logger.ENABLE_HIERARCHY = !0;
g.debug.Logger.ENABLE_HIERARCHY || (g.debug.Logger.rootHandlers_ = []);
g.debug.Logger.Level = function (a, c) {
    this.name = a;
    this.value = c
};
g.debug.Logger.Level.prototype.toString = function () {
    return this.name
};
g.debug.Logger.Level.OFF = new g.debug.Logger.Level("OFF", Infinity);
g.debug.Logger.Level.SHOUT = new g.debug.Logger.Level("SHOUT", 1200);
g.debug.Logger.Level.SEVERE = new g.debug.Logger.Level("SEVERE", 1E3);
g.debug.Logger.Level.WARNING = new g.debug.Logger.Level("WARNING", 900);
g.debug.Logger.Level.INFO = new g.debug.Logger.Level("INFO", 800);
g.debug.Logger.Level.CONFIG = new g.debug.Logger.Level("CONFIG", 700);
g.debug.Logger.Level.FINE = new g.debug.Logger.Level("FINE", 500);
g.debug.Logger.Level.FINER = new g.debug.Logger.Level("FINER", 400);
g.debug.Logger.Level.FINEST = new g.debug.Logger.Level("FINEST", 300);
g.debug.Logger.Level.ALL = new g.debug.Logger.Level("ALL", 0);
g.debug.Logger.Level.PREDEFINED_LEVELS = [
    g.debug.Logger.Level.OFF,
    g.debug.Logger.Level.SHOUT,
    g.debug.Logger.Level.SEVERE,
    g.debug.Logger.Level.WARNING,
    g.debug.Logger.Level.INFO,
    g.debug.Logger.Level.CONFIG,
    g.debug.Logger.Level.FINE,
    g.debug.Logger.Level.FINER,
    g.debug.Logger.Level.FINEST,
    g.debug.Logger.Level.ALL
];
g.debug.Logger.Level.predefinedLevelsCache_ = null;
g.debug.Logger.Level.createPredefinedLevelsCache_ = function () {
    g.debug.Logger.Level.predefinedLevelsCache_ = {};
    for (var a = 0, c; c = g.debug.Logger.Level.PREDEFINED_LEVELS[a]; a++)
        g.debug.Logger.Level.predefinedLevelsCache_[c.value] = c, g.debug.Logger.Level.predefinedLevelsCache_[c.name] = c
};
g.debug.Logger.Level.getPredefinedLevel = function (a) {
    g.debug.Logger.Level.predefinedLevelsCache_ || g.debug.Logger.Level.createPredefinedLevelsCache_();
    return g.debug.Logger.Level.predefinedLevelsCache_[a] || null
};
g.debug.Logger.Level.getPredefinedLevelByValue = function (a) {
    g.debug.Logger.Level.predefinedLevelsCache_ || g.debug.Logger.Level.createPredefinedLevelsCache_();
    if (a in g.debug.Logger.Level.predefinedLevelsCache_)
        return g.debug.Logger.Level.predefinedLevelsCache_[a];
    for (var c = 0; c < g.debug.Logger.Level.PREDEFINED_LEVELS.length; ++c) {
        var d = g.debug.Logger.Level.PREDEFINED_LEVELS[c];
        if (d.value <= a)return d
    }
    return null
};
g.debug.Logger.getLogger = function (a) {
    return g.debug.LogManager.getLogger(a)
};
g.debug.Logger.logToProfilers = function (a) {
    g.global.console && (g.global.console.timeStamp ? g.global.console.timeStamp(a) : g.global.console.markTimeline && g.global.console.markTimeline(a));
    g.global.msWriteProfilerMark && g.global.msWriteProfilerMark(a)
};
b = g.debug.Logger.prototype;
b.getName = function () {
    return this.name_
};
b.addHandler = function (a) {
    g.debug.LOGGING_ENABLED && (g.debug.Logger.ENABLE_HIERARCHY ? (this.handlers_ || (this.handlers_ = []), this.handlers_.push(a)) : (g.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), g.debug.Logger.rootHandlers_.push(a)))
};
b.removeHandler = function (a) {
    if (g.debug.LOGGING_ENABLED) {
        var c = g.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : g.debug.Logger.rootHandlers_;
        return!!c && g.array.remove(c, a)
    }
    return!1
};
b.getParent = function () {
    return this.parent_
};
b.getChildren = function () {
    this.children_ || (this.children_ = {});
    return this.children_
};
b.setLevel = function (a) {
    g.debug.LOGGING_ENABLED && (g.debug.Logger.ENABLE_HIERARCHY ? this.level_ = a : (g.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), g.debug.Logger.rootLevel_ = a))
};
b.getEffectiveLevel = function () {
    if (!g.debug.LOGGING_ENABLED)return g.debug.Logger.Level.OFF;
    if (!g.debug.Logger.ENABLE_HIERARCHY)return g.debug.Logger.rootLevel_;
    if (this.level_)return this.level_;
    if (this.parent_)return this.parent_.getEffectiveLevel();
    g.asserts.fail("Root logger has no level set.");
    return null
};
b.isLoggable = function (a) {
    return g.debug.LOGGING_ENABLED && a.value >= this.getEffectiveLevel().value
};
b.log = function (a, c, d) {
    g.debug.LOGGING_ENABLED && this.isLoggable(a) && (g.isFunction(c) && (c = c()), this.doLogRecord_(this.getLogRecord(a, c, d, g.debug.Logger.prototype.log)))
};
b.getLogRecord = function (a, c, d, e) {
    a = g.debug.LogBuffer.isBufferingEnabled() ? g.debug.LogBuffer.getInstance().addRecord(a, c, this.name_) : new g.debug.LogRecord(a, String(c), this.name_);
    d && (a.setException(d), a.setExceptionText(g.debug.exposeException(d, e || g.debug.Logger.prototype.getLogRecord)));
    return a
};
b.severe = function (a, c) {
    g.debug.LOGGING_ENABLED && this.log(g.debug.Logger.Level.SEVERE, a, c)
};
b.warning = function (a, c) {
    g.debug.LOGGING_ENABLED && this.log(g.debug.Logger.Level.WARNING, a, c)
};
b.info = function (a, c) {
    g.debug.LOGGING_ENABLED && this.log(g.debug.Logger.Level.INFO, a, c)
};
b.config = function (a, c) {
    g.debug.LOGGING_ENABLED && this.log(g.debug.Logger.Level.CONFIG, a, c)
};
b.fine = function (a, c) {
    g.debug.LOGGING_ENABLED && this.log(g.debug.Logger.Level.FINE, a, c)
};
b.doLogRecord_ = function (a) {
    g.debug.Logger.logToProfilers("log:" + a.getMessage());
    if (g.debug.Logger.ENABLE_HIERARCHY)for (var c = this; c;)c.callPublish_(a), c = c.getParent(); else for (var c = 0, d; d = g.debug.Logger.rootHandlers_[c++];)d(a)
};
b.callPublish_ = function (a) {
    if (this.handlers_)for (var c = 0, d; d = this.handlers_[c]; c++)d(a)
};
b.setParent_ = function (a) {
    this.parent_ = a
};
b.addChild_ = function (a, c) {
    this.getChildren()[a] = c
};
g.debug.LogManager = {};
g.debug.LogManager.loggers_ = {};
g.debug.LogManager.rootLogger_ = null;
g.debug.LogManager.initialize = function () {
    g.debug.LogManager.rootLogger_ || (g.debug.LogManager.rootLogger_ = new g.debug.Logger(g.debug.Logger.ROOT_LOGGER_NAME), g.debug.LogManager.loggers_[g.debug.Logger.ROOT_LOGGER_NAME] = g.debug.LogManager.rootLogger_, g.debug.LogManager.rootLogger_.setLevel(g.debug.Logger.Level.CONFIG))
};
g.debug.LogManager.getLoggers = function () {
    return g.debug.LogManager.loggers_
};
g.debug.LogManager.getRoot = function () {
    g.debug.LogManager.initialize();
    return g.debug.LogManager.rootLogger_
};
g.debug.LogManager.getLogger = function (a) {
    g.debug.LogManager.initialize();
    var c = g.debug.LogManager.loggers_[a];
    return c || g.debug.LogManager.createLogger_(a)
};
g.debug.LogManager.createFunctionForCatchErrors = function (a) {
    return function (c) {
        var d = a || g.debug.LogManager.getRoot();
        d.severe("Error: " + c.message + " (" + c.fileName + " @ Line: " + c.line + ")")
    }
};
g.debug.LogManager.createLogger_ = function (a) {
    var c = new g.debug.Logger(a);
    if (g.debug.Logger.ENABLE_HIERARCHY) {
        var d = a.lastIndexOf("."), e = a.substr(0, d), d = a.substr(d + 1), e = g.debug.LogManager.getLogger(e);
        e.addChild_(d, c);
        c.setParent_(e)
    }
    return g.debug.LogManager.loggers_[a] = c
};
g.log = {};
g.log.ENABLED = g.debug.LOGGING_ENABLED;
g.log.ROOT_LOGGER_NAME = g.debug.Logger.ROOT_LOGGER_NAME;
g.log.Logger = g.debug.Logger;
g.log.Level = g.debug.Logger.Level;
g.log.LogRecord = g.debug.LogRecord;
g.log.getLogger = function (a, c) {
    if (g.log.ENABLED) {
        var d = g.debug.LogManager.getLogger(a);
        c && d && d.setLevel(c);
        return d
    }
    return null
};
g.log.addHandler = function (a, c) {
    g.log.ENABLED && a && a.addHandler(c)
};
g.log.removeHandler = function (a, c) {
    return g.log.ENABLED && a ? a.removeHandler(c) : !1
};
g.log.log = function (a, c, d, e) {
    g.log.ENABLED && a && a.log(c, d, e)
};
g.log.error = function (a, c, d) {
    g.log.ENABLED && a && a.severe(c, d)
};
g.log.warning = function (a, c, d) {
    g.log.ENABLED && a && a.warning(c, d)
};
g.log.info = function (a, c, d) {
    g.log.ENABLED && a && a.info(c, d)
};
g.log.fine = function (a, c, d) {
    g.log.ENABLED && a && a.fine(c, d)
};
k.GaRequestInterceptor = function () {
    this.tabData_ = {}
};
k.GaRequestInterceptor.FILTER_ = {
    urls: [
        "*://*.google-analytics.com/__utm.gif*",
        "*://*.google-analytics.com/collect*",
        "*://stats.g.doubleclick.net/__utm.gif*"
    ],
    types: [
        "main_frame",
        "sub_frame",
        "script",
        "image",
        "object"
    ]
};
b = k.GaRequestInterceptor.prototype;
b.init = function () {
    chrome.webRequest.onBeforeRequest.addListener(g.bind(this.handleRequest_, this), k.GaRequestInterceptor.FILTER_);
    chrome.tabs.onRemoved.addListener(g.bind(this.handleTabRemoved_, this));
    chrome.webNavigation.onBeforeNavigate.addListener(g.bind(this.handleNavigation_, this))
};
b.getDataForTab = function (a) {
    return this.tabData_[a] || null
};
b.handleRequest_ = function (a) {
    var c = a.tabId;
    if (!(0 > c)) {
        a = a.url;
        var d;
        g.uri.utils.hasParam(a, "utmac") ? d = g.uri.utils.getParamValue(a, "utmac") : g.uri.utils.hasParam(a, "tid") && (d = g.uri.utils.getParamValue(a, "tid"));
        d ? this.registerTrackingId_(c, d) : g.log.warning(this.logger_, "No tracking ID found in Analytics request: " + a)
    }
};
b.registerTrackingId_ = function (a, c) {
    this.tabData_[a] || (this.tabData_[a] = []);
    this.tabData_[a].push(c)
};
b.handleTabRemoved_ = function (a) {
    this.removeTabData_(a)
};
b.handleNavigation_ = function (a) {
    0 === a.frameId && this.removeTabData_(a.tabId)
};
b.removeTabData_ = function (a) {
    delete this.tabData_[a]
};
g.disposable = {};
g.disposable.IDisposable = function () {
};
g.Disposable = function () {
    g.Disposable.MONITORING_MODE != g.Disposable.MonitoringMode.OFF && (g.Disposable.instances_[g.getUid(this)] = this)
};
g.Disposable.MonitoringMode = {OFF: 0, PERMANENT: 1, INTERACTIVE: 2};
g.Disposable.MONITORING_MODE = 0;
g.Disposable.INCLUDE_STACK_ON_CREATION = !0;
g.Disposable.instances_ = {};
g.Disposable.getUndisposedObjects = function () {
    var a = [], c;
    for (c in g.Disposable.instances_)g.Disposable.instances_.hasOwnProperty(c) && a.push(g.Disposable.instances_[Number(c)]);
    return a
};
g.Disposable.clearUndisposedObjects = function () {
    g.Disposable.instances_ = {}
};
g.Disposable.prototype.disposed_ = !1;
g.Disposable.prototype.isDisposed = function () {
    return this.disposed_
};
g.Disposable.prototype.dispose = function () {
    if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), g.Disposable.MONITORING_MODE != g.Disposable.MonitoringMode.OFF)) {
        var a = g.getUid(this);
        if (g.Disposable.MONITORING_MODE == g.Disposable.MonitoringMode.PERMANENT && !g.Disposable.instances_.hasOwnProperty(a))throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
        delete g.Disposable.instances_[a]
    }
};
g.Disposable.prototype.disposeInternal = function () {
    if (this.onDisposeCallbacks_)for (; this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()
};
g.Disposable.isDisposed = function (a) {
    return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1
};
g.dispose = function (a) {
    a && "function" == typeof a.dispose && a.dispose()
};
g.disposeAll = function (a) {
    for (var c = 0, d = arguments.length; c < d; ++c) {
        var e = arguments[c];
        g.isArrayLike(e) ? g.disposeAll.apply(null, e) : g.dispose(e)
    }
};
g.events = {};
g.events.EventId = function (a) {
    this.id = a
};
g.events.EventId.prototype.toString = function () {
    return this.id
};
g.events.Event = function (a, c) {
    this.type = a instanceof g.events.EventId ? String(a) : a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.propagationStopped_ = !1;
    this.returnValue_ = !0
};
g.events.Event.prototype.disposeInternal = function () {
};
g.events.Event.prototype.dispose = function () {
};
g.events.Event.prototype.stopPropagation = function () {
    this.propagationStopped_ = !0
};
g.events.Event.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.returnValue_ = !1
};
g.events.Event.stopPropagation = function (a) {
    a.stopPropagation()
};
g.events.Event.preventDefault = function (a) {
    a.preventDefault()
};
g.reflect = {};
g.reflect.object = function (a, c) {
    return c
};
g.reflect.sinkValue = function (a) {
    g.reflect.sinkValue[" "](a);
    return a
};
g.reflect.sinkValue[" "] = g.nullFunction;
g.reflect.canAccessProperty = function (a, c) {
    try {
        return g.reflect.sinkValue(a[c]), !0
    } catch (d) {
    }
    return!1
};
g.events.BrowserFeature = {
    HAS_W3C_BUTTON: !g.userAgent.IE || g.userAgent.isDocumentModeOrHigher(9),
    HAS_W3C_EVENT_SUPPORT: !g.userAgent.IE || g.userAgent.isDocumentModeOrHigher(9),
    SET_KEY_CODE_TO_PREVENT_DEFAULT: g.userAgent.IE && !g.userAgent.isVersionOrHigher("9"),
    HAS_NAVIGATOR_ONLINE_PROPERTY: !g.userAgent.WEBKIT || g.userAgent.isVersionOrHigher("528"),
    HAS_HTML5_NETWORK_EVENT_SUPPORT: g.userAgent.GECKO && g.userAgent.isVersionOrHigher("1.9b") || g.userAgent.IE && g.userAgent.isVersionOrHigher("8") || g.userAgent.OPERA && g.userAgent.isVersionOrHigher("9.5") || g.userAgent.WEBKIT && g.userAgent.isVersionOrHigher("528"),
    HTML5_NETWORK_EVENTS_FIRE_ON_BODY: g.userAgent.GECKO && !g.userAgent.isVersionOrHigher("8") || g.userAgent.IE && !g.userAgent.isVersionOrHigher("9"),
    TOUCH_ENABLED: "ontouchstart"in g.global || !!(g.global.document && document.documentElement && "ontouchstart"in document.documentElement) || !(!g.global.navigator || !g.global.navigator.msMaxTouchPoints)
};
g.events.getVendorPrefixedName_ = function (a) {
    return g.userAgent.WEBKIT ? "webkit" + a : g.userAgent.OPERA ? "o" + a.toLowerCase() : a.toLowerCase()
};
g.events.EventType = {
    CLICK: "click",
    RIGHTCLICK: "rightclick",
    DBLCLICK: "dblclick",
    MOUSEDOWN: "mousedown",
    MOUSEUP: "mouseup",
    MOUSEOVER: "mouseover",
    MOUSEOUT: "mouseout",
    MOUSEMOVE: "mousemove",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    SELECTSTART: "selectstart",
    KEYPRESS: "keypress",
    KEYDOWN: "keydown",
    KEYUP: "keyup",
    BLUR: "blur",
    FOCUS: "focus",
    DEACTIVATE: "deactivate",
    FOCUSIN: g.userAgent.IE ? "focusin" : "DOMFocusIn",
    FOCUSOUT: g.userAgent.IE ? "focusout" : "DOMFocusOut",
    CHANGE: "change",
    SELECT: "select",
    SUBMIT: "submit",
    INPUT: "input",
    PROPERTYCHANGE: "propertychange",
    DRAGSTART: "dragstart",
    DRAG: "drag",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DRAGLEAVE: "dragleave",
    DROP: "drop",
    DRAGEND: "dragend",
    TOUCHSTART: "touchstart",
    TOUCHMOVE: "touchmove",
    TOUCHEND: "touchend",
    TOUCHCANCEL: "touchcancel",
    BEFOREUNLOAD: "beforeunload",
    CONSOLEMESSAGE: "consolemessage",
    CONTEXTMENU: "contextmenu",
    DOMCONTENTLOADED: "DOMContentLoaded",
    ERROR: "error",
    HELP: "help",
    LOAD: "load",
    LOSECAPTURE: "losecapture",
    ORIENTATIONCHANGE: "orientationchange",
    READYSTATECHANGE: "readystatechange",
    RESIZE: "resize",
    SCROLL: "scroll",
    UNLOAD: "unload",
    HASHCHANGE: "hashchange",
    PAGEHIDE: "pagehide",
    PAGESHOW: "pageshow",
    POPSTATE: "popstate",
    COPY: "copy",
    PASTE: "paste",
    CUT: "cut",
    BEFORECOPY: "beforecopy",
    BEFORECUT: "beforecut",
    BEFOREPASTE: "beforepaste",
    ONLINE: "online",
    OFFLINE: "offline",
    MESSAGE: "message",
    CONNECT: "connect",
    ANIMATIONSTART: g.events.getVendorPrefixedName_("AnimationStart"),
    ANIMATIONEND: g.events.getVendorPrefixedName_("AnimationEnd"),
    ANIMATIONITERATION: g.events.getVendorPrefixedName_("AnimationIteration"),
    TRANSITIONEND: g.events.getVendorPrefixedName_("TransitionEnd"),
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTERCANCEL: "pointercancel",
    POINTERMOVE: "pointermove",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    GOTPOINTERCAPTURE: "gotpointercapture",
    LOSTPOINTERCAPTURE: "lostpointercapture",
    MSGESTURECHANGE: "MSGestureChange",
    MSGESTUREEND: "MSGestureEnd",
    MSGESTUREHOLD: "MSGestureHold",
    MSGESTURESTART: "MSGestureStart",
    MSGESTURETAP: "MSGestureTap",
    MSGOTPOINTERCAPTURE: "MSGotPointerCapture",
    MSINERTIASTART: "MSInertiaStart",
    MSLOSTPOINTERCAPTURE: "MSLostPointerCapture",
    MSPOINTERCANCEL: "MSPointerCancel",
    MSPOINTERDOWN: "MSPointerDown",
    MSPOINTERENTER: "MSPointerEnter",
    MSPOINTERHOVER: "MSPointerHover",
    MSPOINTERLEAVE: "MSPointerLeave",
    MSPOINTERMOVE: "MSPointerMove",
    MSPOINTEROUT: "MSPointerOut",
    MSPOINTEROVER: "MSPointerOver",
    MSPOINTERUP: "MSPointerUp",
    TEXTINPUT: "textinput",
    COMPOSITIONSTART: "compositionstart",
    COMPOSITIONUPDATE: "compositionupdate",
    COMPOSITIONEND: "compositionend",
    EXIT: "exit",
    LOADABORT: "loadabort",
    LOADCOMMIT: "loadcommit",
    LOADREDIRECT: "loadredirect",
    LOADSTART: "loadstart",
    LOADSTOP: "loadstop",
    RESPONSIVE: "responsive",
    SIZECHANGED: "sizechanged",
    UNRESPONSIVE: "unresponsive",
    VISIBILITYCHANGE: "visibilitychange",
    STORAGE: "storage",
    DOMSUBTREEMODIFIED: "DOMSubtreeModified",
    DOMNODEINSERTED: "DOMNodeInserted",
    DOMNODEREMOVED: "DOMNodeRemoved",
    DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument",
    DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument",
    DOMATTRMODIFIED: "DOMAttrModified",
    DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified"
};
g.events.BrowserEvent = function (a, c) {
    g.events.Event.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.event_ = this.state = null;
    a && this.init(a, c)
};
g.inherits(g.events.BrowserEvent, g.events.Event);
g.events.BrowserEvent.MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
g.events.BrowserEvent.IEButtonMap = [1, 4, 2];
g.events.BrowserEvent.prototype.init = function (a, c) {
    var d = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = c;
    var e = a.relatedTarget;
    e ? g.userAgent.GECKO && (g.reflect.canAccessProperty(e, "nodeName") || (e = null)) : d == g.events.EventType.MOUSEOVER ? e = a.fromElement : d == g.events.EventType.MOUSEOUT && (e = a.toElement);
    this.relatedTarget = e;
    this.offsetX = g.userAgent.WEBKIT || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = g.userAgent.WEBKIT || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !==
        a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented && this.preventDefault()
};
g.events.BrowserEvent.prototype.stopPropagation = function () {
    g.events.BrowserEvent.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
g.events.BrowserEvent.prototype.preventDefault = function () {
    g.events.BrowserEvent.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, g.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (c) {
    }
};
g.events.BrowserEvent.prototype.disposeInternal = function () {
};
g.events.Listenable = function () {
};
g.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1E6 * Math.random() | 0);
g.events.Listenable.addImplementation = function (a) {
    a.prototype[g.events.Listenable.IMPLEMENTED_BY_PROP] = !0
};
g.events.Listenable.isImplementedBy = function (a) {
    return!(!a || !a[g.events.Listenable.IMPLEMENTED_BY_PROP])
};
g.events.ListenableKey = function () {
};
g.events.ListenableKey.counter_ = 0;
g.events.ListenableKey.reserveKey = function () {
    return++g.events.ListenableKey.counter_
};
g.events.Listener = function (a, c, d, e, f, h) {
    this.listener = a;
    this.proxy = c;
    this.src = d;
    this.type = e;
    this.capture = !!f;
    this.handler = h;
    this.key = g.events.ListenableKey.reserveKey();
    this.removed = this.callOnce = !1
};
g.events.Listener.ENABLE_MONITORING = !1;
g.events.Listener.prototype.markAsRemoved = function () {
    this.removed = !0;
    this.handler = this.src = this.proxy = this.listener = null
};
g.events.ListenerMap = function (a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0
};
b = g.events.ListenerMap.prototype;
b.getTypeCount = function () {
    return this.typeCount_
};
b.add = function (a, c, d, e, f) {
    var h = a.toString();
    a = this.listeners[h];
    a || (a = this.listeners[h] = [], this.typeCount_++);
    var l = g.events.ListenerMap.findListenerIndex_(a, c, e, f);
    -1 < l ? (c = a[l], d || (c.callOnce = !1)) : (c = new g.events.Listener(c, null, this.src, h, !!e, f), c.callOnce = d, a.push(c));
    return c
};
b.remove = function (a, c, d, e) {
    a = a.toString();
    if (!(a in this.listeners))
        return!1;
    var f = this.listeners[a];
    c = g.events.ListenerMap.findListenerIndex_(f, c, d, e);
    return-1 < c ? (d = f[c], d.markAsRemoved(), g.array.removeAt(f, c), 0 == f.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
};
b.removeByKey = function (a) {
    var c = a.type;
    if (!(c in this.listeners))return!1;
    var d = g.array.remove(this.listeners[c], a);
    d && (a.markAsRemoved(), 0 == this.listeners[c].length && (delete this.listeners[c], this.typeCount_--));
    return d
};
b.removeAll = function (a) {
    a = a && a.toString();
    var c = 0, d;
    for (d in this.listeners)if (!a || d == a) {
        for (var e = this.listeners[d], f = 0; f < e.length; f++)
            ++c, e[f].markAsRemoved();
        delete this.listeners[d];
        this.typeCount_--
    }
    return c
};
b.getListeners = function (a, c) {
    var d = this.listeners[a.toString()], e = [];
    if (d)for (var f = 0; f < d.length; ++f) {
        var h = d[f];
        h.capture == c && e.push(h)
    }
    return e
};
b.getListener = function (a, c, d, e) {
    a = this.listeners[a.toString()];
    var f = -1;
    a && (f = g.events.ListenerMap.findListenerIndex_(a, c, d, e));
    return-1 < f ? a[f] : null
};
b.hasListener = function (a, c) {
    var d = g.isDef(a), e = d ? a.toString() : "", f = g.isDef(c);
    return g.object.some(this.listeners, function (a) {
        for (var l = 0; l < a.length; ++l)
            if (!(d && a[l].type != e || f && a[l].capture != c))
                return!0;
        return!1
    })
};
g.events.ListenerMap.findListenerIndex_ = function (a, c, d, e) {
    for (var f = 0; f < a.length; ++f) {
        var h = a[f];
        if (!h.removed && h.listener == c && h.capture == !!d && h.handler == e)
            return f
    }
    return-1
};
g.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1E6 * Math.random() | 0);
g.events.onString_ = "on";
g.events.onStringMap_ = {};
g.events.CaptureSimulationMode = {
    OFF_AND_FAIL: 0,
    OFF_AND_SILENT: 1,
    ON: 2
};
g.events.CAPTURE_SIMULATION_MODE = 2;
g.events.listenerCountEstimate_ = 0;
g.events.listen = function (a, c, d, e, f) {
    if (g.isArray(c)) {
        for (var h = 0; h < c.length; h++)
            g.events.listen(a, c[h], d, e, f);
        return null
    }
    d = g.events.wrapListener(d);
    return g.events.Listenable.isImplementedBy(a) ? a.listen(c, d, e, f) : g.events.listen_(a, c, d, !1, e, f)
};
g.events.listen_ = function (a, c, d, e, f, h) {
    if (!c)
        throw Error("Invalid event type");
    var l = !!f;
    if (l && !g.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        if (g.events.CAPTURE_SIMULATION_MODE == g.events.CaptureSimulationMode.OFF_AND_FAIL)
            return g.asserts.fail("Can not register capture listener in IE8-."), null;
        if (g.events.CAPTURE_SIMULATION_MODE == g.events.CaptureSimulationMode.OFF_AND_SILENT)
            return null
    }
    var m = g.events.getListenerMap_(a);
    m || (a[g.events.LISTENER_MAP_PROP_] = m = new g.events.ListenerMap(a));
    d = m.add(c, d, e, f, h);
    if (d.proxy)
        return d;
    e = g.events.getProxy();
    d.proxy = e;
    e.src = a;
    e.listener = d;
    a.addEventListener ? a.addEventListener(c.toString(), e, l) : a.attachEvent(g.events.getOnString_(c.toString()), e);
    g.events.listenerCountEstimate_++;
    return d
};
g.events.getProxy = function () {
    var a = g.events.handleBrowserEvent_,
        c = g.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function (d) {
            return a.call(c.src, c.listener, d)
        } : function (d) {
            d = a.call(c.src, c.listener, d);
            if (!d)return d
        };
    return c
};
g.events.listenOnce = function (a, c, d, e, f) {
    if (g.isArray(c)) {
        for (var h = 0; h < c.length; h++)
            g.events.listenOnce(a, c[h], d, e, f);
        return null
    }
    d = g.events.wrapListener(d);
    return g.events.Listenable.isImplementedBy(a) ? a.listenOnce(c, d, e, f) : g.events.listen_(a, c, d, !0, e, f)
};
g.events.listenWithWrapper = function (a, c, d, e, f) {
    c.listen(a, d, e, f)
};
g.events.unlisten = function (a, c, d, e, f) {
    if (g.isArray(c)) {
        for (var h = 0; h < c.length; h++)
            g.events.unlisten(a, c[h], d, e, f);
        return null
    }
    d = g.events.wrapListener(d);
    if (g.events.Listenable.isImplementedBy(a))
        return a.unlisten(c, d, e, f);
    if (!a)
        return!1;
    e = !!e;
    if (a = g.events.getListenerMap_(a))
        if (c = a.getListener(c, d, e, f))
            return g.events.unlistenByKey(c);
    return!1
};
g.events.unlistenByKey = function (a) {
    if (g.isNumber(a) || !a || a.removed)
        return!1;
    var c = a.src;
    if (g.events.Listenable.isImplementedBy(c))
        return c.unlistenByKey(a);
    var d = a.type,
        e = a.proxy;
    c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent && c.detachEvent(g.events.getOnString_(d), e);
    g.events.listenerCountEstimate_--;
    (d = g.events.getListenerMap_(c)) ? (d.removeByKey(a), 0 == d.getTypeCount() && (d.src = null, c[g.events.LISTENER_MAP_PROP_] = null)) : a.markAsRemoved();
    return!0
};
g.events.unlistenWithWrapper = function (a, c, d, e, f) {
    c.unlisten(a, d, e, f)
};
g.events.removeAll = function (a, c) {
    if (!a)
        return 0;
    if (g.events.Listenable.isImplementedBy(a))
        return a.removeAllListeners(c);
    var d = g.events.getListenerMap_(a);
    if (!d)return 0;
    var e = 0, f = c && c.toString(), h;
    for (h in d.listeners)
        if (!f || h == f)
            for (var l = d.listeners[h].concat(), m = 0; m < l.length; ++m)
                g.events.unlistenByKey(l[m]) && ++e;
    return e
};
g.events.removeAllNativeListeners = function () {
    return g.events.listenerCountEstimate_ = 0
};
g.events.getListeners = function (a, c, d) {
    return g.events.Listenable.isImplementedBy(a) ? a.getListeners(c, d) : a ? (a = g.events.getListenerMap_(a)) ? a.getListeners(c, d) : [] : []
};
g.events.getListener = function (a, c, d, e, f) {
    d = g.events.wrapListener(d);
    e = !!e;
    return g.events.Listenable.isImplementedBy(a) ? a.getListener(c, d, e, f) : a ? (a = g.events.getListenerMap_(a)) ? a.getListener(c, d, e, f) : null : null
};
g.events.hasListener = function (a, c, d) {
    if (g.events.Listenable.isImplementedBy(a))
        return a.hasListener(c, d);
    a = g.events.getListenerMap_(a);
    return!!a && a.hasListener(c, d)
};
g.events.expose = function (a) {
    var c = [], d;
    for (d in a)
        a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
    return c.join("\n")
};
g.events.getOnString_ = function (a) {
    return a in g.events.onStringMap_ ? g.events.onStringMap_[a] : g.events.onStringMap_[a] = g.events.onString_ + a
};
g.events.fireListeners = function (a, c, d, e) {
    return g.events.Listenable.isImplementedBy(a) ? a.fireListeners(c, d, e) : g.events.fireListeners_(a, c, d, e)
};
g.events.fireListeners_ = function (a, c, d, e) {
    var f = 1;
    if (a = g.events.getListenerMap_(a))
        if (c = a.listeners[c.toString()])
            for (c = c.concat(), a = 0; a < c.length; a++) {
                var h = c[a];
                h && h.capture == d && !h.removed && (f &= !1 !== g.events.fireListener(h, e))
            }
    return Boolean(f)
};
g.events.fireListener = function (a, c) {
    var d = a.listener,
        e = a.handler || a.src;
    a.callOnce && g.events.unlistenByKey(a);
    return d.call(e, c)
};
g.events.getTotalListenerCount = function () {
    return g.events.listenerCountEstimate_
};
g.events.dispatchEvent = function (a, c) {
    g.asserts.assert(g.events.Listenable.isImplementedBy(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
    return a.dispatchEvent(c)
};
g.events.protectBrowserEventEntryPoint = function (a) {
    g.events.handleBrowserEvent_ = a.protectEntryPoint(g.events.handleBrowserEvent_)
};
g.events.handleBrowserEvent_ = function (a, c) {
    if (a.removed)
        return!0;
    if (!g.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        var d = c || g.getObjectByName("window.event"),
            e = new g.events.BrowserEvent(d, this),
            f = !0;
        if (g.events.CAPTURE_SIMULATION_MODE == g.events.CaptureSimulationMode.ON) {
            if (!g.events.isMarkedIeEvent_(d)) {
                g.events.markIeEvent_(d);
                for (var d = [], h = e.currentTarget; h; h = h.parentNode)
                    d.push(h);
                for (var h = a.type, l = d.length - 1; !e.propagationStopped_ && 0 <= l; l--)
                    e.currentTarget = d[l],
                    f &= g.events.fireListeners_(d[l], h, !0, e);
                for (l = 0; !e.propagationStopped_ && l < d.length; l++)
                    e.currentTarget = d[l],
                    f &= g.events.fireListeners_(d[l], h, !1, e)
            }
        } else f = g.events.fireListener(a, e);
        return f
    }
    return g.events.fireListener(a, new g.events.BrowserEvent(c, this))
};
g.events.markIeEvent_ = function (a) {
    var c = !1;
    if (0 == a.keyCode)try {
        a.keyCode = -1;
        return
    } catch (d) {
        c = !0
    }
    if (c || void 0 == a.returnValue)
        a.returnValue = !0
};
g.events.isMarkedIeEvent_ = function (a) {
    return 0 > a.keyCode || void 0 != a.returnValue
};
g.events.uniqueIdCounter_ = 0;
g.events.getUniqueId = function (a) {
    return a + "_" + g.events.uniqueIdCounter_++
};
g.events.getListenerMap_ = function (a) {
    a = a[g.events.LISTENER_MAP_PROP_];
    return a instanceof g.events.ListenerMap ? a : null
};
g.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
g.events.wrapListener = function (a) {
    g.asserts.assert(a, "Listener can not be null.");
    if (g.isFunction(a))
        return a;
    g.asserts.assert(a.handleEvent, "An object listener must have handleEvent method.");
    a[g.events.LISTENER_WRAPPER_PROP_] || (a[g.events.LISTENER_WRAPPER_PROP_] = function (c) {
        return a.handleEvent(c)
    });
    return a[g.events.LISTENER_WRAPPER_PROP_]
};
g.debug.entryPointRegistry.register(function (a) {
    g.events.handleBrowserEvent_ = a(g.events.handleBrowserEvent_)
});
g.events.EventTarget = function () {
    g.Disposable.call(this);
    this.eventTargetListeners_ = new g.events.ListenerMap(this);
    this.actualEventTarget_ = this;
    this.parentEventTarget_ = null
};
g.inherits(g.events.EventTarget, g.Disposable);
g.events.Listenable.addImplementation(g.events.EventTarget);
g.events.EventTarget.MAX_ANCESTORS_ = 1E3;
b = g.events.EventTarget.prototype;
b.getParentEventTarget = function () {
    return this.parentEventTarget_
};
b.addEventListener = function (a, c, d, e) {
    g.events.listen(this, a, c, d, e)
};
b.removeEventListener = function (a, c, d, e) {
    g.events.unlisten(this, a, c, d, e)
};
b.dispatchEvent = function (a) {
    this.assertInitialized_();
    var c, d = this.getParentEventTarget();
    if (d) {
        c = [];
        for (var e = 1; d; d = d.getParentEventTarget())
            c.push(d), g.asserts.assert(++e < g.events.EventTarget.MAX_ANCESTORS_, "infinite loop")
    }
    return g.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, a, c)
};
b.disposeInternal = function () {
    g.events.EventTarget.superClass_.disposeInternal.call(this);
    this.removeAllListeners();
    this.parentEventTarget_ = null
};
b.listen = function (a, c, d, e) {
    this.assertInitialized_();
    return this.eventTargetListeners_.add(String(a), c, !1, d, e)
};
b.listenOnce = function (a, c, d, e) {
    return this.eventTargetListeners_.add(String(a), c, !0, d, e)
};
b.unlisten = function (a, c, d, e) {
    return this.eventTargetListeners_.remove(String(a), c, d, e)
};
b.unlistenByKey = function (a) {
    return this.eventTargetListeners_.removeByKey(a)
};
b.removeAllListeners = function (a) {
    return this.eventTargetListeners_ ? this.eventTargetListeners_.removeAll(a) : 0
};
b.fireListeners = function (a, c, d) {
    a = this.eventTargetListeners_.listeners[String(a)];
    if (!a)return!0;
    a = a.concat();
    for (var e = !0, f = 0; f < a.length; ++f) {
        var h = a[f];
        if (h && !h.removed && h.capture == c) {
            var l = h.listener, m = h.handler || h.src;
            h.callOnce && this.unlistenByKey(h);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.returnValue_
};
b.getListeners = function (a, c) {
    return this.eventTargetListeners_.getListeners(String(a), c)
};
b.getListener = function (a, c, d, e) {
    return this.eventTargetListeners_.getListener(String(a), c, d, e)
};
b.hasListener = function (a, c) {
    var d = g.isDef(a) ? String(a) : void 0;
    return this.eventTargetListeners_.hasListener(d, c)
};
b.assertInitialized_ = function () {
    g.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
g.events.EventTarget.dispatchEventInternal_ = function (a, c, d) {
    var e = c.type || c;
    if (g.isString(c))c = new g.events.Event(c, a); else if (c instanceof g.events.Event)c.target = c.target || a; else {
        var f = c;
        c = new g.events.Event(e, a);
        g.object.extend(c, f)
    }
    var f = !0, h;
    if (d)for (var l = d.length - 1; !c.propagationStopped_ && 0 <= l; l--)h = c.currentTarget = d[l], f = h.fireListeners(e, !0, c) && f;
    c.propagationStopped_ || (h = c.currentTarget = a, f = h.fireListeners(e, !0, c) && f, c.propagationStopped_ || (f = h.fireListeners(e, !1, c) && f));
    if (d)for (l = 0; !c.propagationStopped_ &&
        l < d.length; l++)h = c.currentTarget = d[l], f = h.fireListeners(e, !1, c) && f;
    return f
};
g.json = {};
g.json.USE_NATIVE_JSON = !1;
g.json.isValid = function (a) {
    if (/^\s*$/.test(a))return!1;
    var c = /\\["\\\/bfnrtu]/g, d = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, e = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, f = /^[\],:{}\s\u2028\u2029]*$/;
    return f.test(a.replace(c, "@").replace(d, "]").replace(e, ""))
};
g.json.parse = g.json.USE_NATIVE_JSON ? g.global.JSON.parse : function (a) {
    a = String(a);
    if (g.json.isValid(a))try {
        return eval("(" + a + ")")
    } catch (c) {
    }
    throw Error("Invalid JSON string: " + a);
};
g.json.unsafeParse = g.json.USE_NATIVE_JSON ? g.global.JSON.parse : function (a) {
    return eval("(" + a + ")")
};
g.json.serialize = g.json.USE_NATIVE_JSON ? g.global.JSON.stringify : function (a, c) {
    return(new g.json.Serializer(c)).serialize(a)
};
g.json.Serializer = function (a) {
    this.replacer_ = a
};
g.json.Serializer.prototype.serialize = function (a) {
    var c = [];
    this.serializeInternal(a, c);
    return c.join("")
};
g.json.Serializer.prototype.serializeInternal = function (a, c) {
    switch (typeof a) {
        case "string":
            this.serializeString_(a, c);
            break;
        case "number":
            this.serializeNumber_(a, c);
            break;
        case "boolean":
            c.push(a);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == a) {
                c.push("null");
                break
            }
            if (g.isArray(a)) {
                this.serializeArray(a, c);
                break
            }
            this.serializeObject_(a, c);
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof a);
    }
};
g.json.Serializer.charToJsonCharCache_ = {'"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b"};
g.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
g.json.Serializer.prototype.serializeString_ = function (a, c) {
    c.push('"', a.replace(g.json.Serializer.charsToReplace_, function (a) {
        if (a in g.json.Serializer.charToJsonCharCache_)return g.json.Serializer.charToJsonCharCache_[a];
        var c = a.charCodeAt(0), f = "\\u";
        16 > c ? f += "000" : 256 > c ? f += "00" : 4096 > c && (f += "0");
        return g.json.Serializer.charToJsonCharCache_[a] = f + c.toString(16)
    }), '"')
};
g.json.Serializer.prototype.serializeNumber_ = function (a, c) {
    c.push(isFinite(a) && !isNaN(a) ? a : "null")
};
g.json.Serializer.prototype.serializeArray = function (a, c) {
    var d = a.length;
    c.push("[");
    for (var e = "", f = 0; f < d; f++)c.push(e), e = a[f], this.serializeInternal(this.replacer_ ? this.replacer_.call(a, String(f), e) : e, c), e = ",";
    c.push("]")
};
g.json.Serializer.prototype.serializeObject_ = function (a, c) {
    c.push("{");
    var d = "", e;
    for (e in a)if (Object.prototype.hasOwnProperty.call(a, e)) {
        var f = a[e];
        "function" != typeof f && (c.push(d), this.serializeString_(e, c), c.push(":"), this.serializeInternal(this.replacer_ ? this.replacer_.call(a, e, f) : f, c), d = ",")
    }
    c.push("}")
};
g.Timer = function (a, c) {
    g.events.EventTarget.call(this);
    this.interval_ = a || 1;
    this.timerObject_ = c || g.Timer.defaultTimerObject;
    this.boundTick_ = g.bind(this.tick_, this);
    this.last_ = g.now()
};
g.inherits(g.Timer, g.events.EventTarget);
g.Timer.MAX_TIMEOUT_ = 2147483647;
g.Timer.prototype.enabled = !1;
g.Timer.defaultTimerObject = g.global;
g.Timer.intervalScale = .8;
b = g.Timer.prototype;
b.timer_ = null;
b.setInterval = function (a) {
    this.interval_ = a;
    this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
};
b.tick_ = function () {
    if (this.enabled) {
        var a = g.now() - this.last_;
        0 < a && a < this.interval_ * g.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = g.now()))
    }
};
b.dispatchTick = function () {
    this.dispatchEvent(g.Timer.TICK)
};
b.start = function () {
    this.enabled = !0;
    this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = g.now())
};
b.stop = function () {
    this.enabled = !1;
    this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
};
b.disposeInternal = function () {
    g.Timer.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.timerObject_
};
g.Timer.TICK = "tick";
g.Timer.callOnce = function (a, c, d) {
    if (g.isFunction(a))d && (a = g.bind(a, d)); else if (a && "function" == typeof a.handleEvent)a = g.bind(a.handleEvent, a); else throw Error("Invalid listener argument");
    return c > g.Timer.MAX_TIMEOUT_ ? -1 : g.Timer.defaultTimerObject.setTimeout(a, c || 0)
};
g.Timer.clear = function (a) {
    g.Timer.defaultTimerObject.clearTimeout(a)
};
g.net = {};
g.net.ErrorCode = {NO_ERROR: 0, ACCESS_DENIED: 1, FILE_NOT_FOUND: 2, FF_SILENT_ERROR: 3, CUSTOM_ERROR: 4, EXCEPTION: 5, HTTP_ERROR: 6, ABORT: 7, TIMEOUT: 8, OFFLINE: 9};
g.net.ErrorCode.getDebugMessage = function (a) {
    switch (a) {
        case g.net.ErrorCode.NO_ERROR:
            return"No Error";
        case g.net.ErrorCode.ACCESS_DENIED:
            return"Access denied to content document";
        case g.net.ErrorCode.FILE_NOT_FOUND:
            return"File not found";
        case g.net.ErrorCode.FF_SILENT_ERROR:
            return"Firefox silently errored";
        case g.net.ErrorCode.CUSTOM_ERROR:
            return"Application custom error";
        case g.net.ErrorCode.EXCEPTION:
            return"An exception occurred";
        case g.net.ErrorCode.HTTP_ERROR:
            return"Http response at 400 or 500 level";
        case g.net.ErrorCode.ABORT:
            return"Request was aborted";
        case g.net.ErrorCode.TIMEOUT:
            return"Request timed out";
        case g.net.ErrorCode.OFFLINE:
            return"The resource is not available offline";
        default:
            return"Unrecognized error code"
    }
};
g.net.EventType = {
    COMPLETE: "complete",
    SUCCESS: "success",
    ERROR: "error",
    ABORT: "abort",
    READY: "ready",
    READY_STATE_CHANGE: "readystatechange",
    TIMEOUT: "timeout",
    INCREMENTAL_DATA: "incrementaldata",
    PROGRESS: "progress"
};
g.net.HttpStatus = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    REQUEST_ENTITY_TOO_LARGE: 413,
    REQUEST_URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    REQUEST_RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    QUIRK_IE_NO_CONTENT: 1223
};
g.net.HttpStatus.isSuccess = function (a) {
    switch (a) {
        case g.net.HttpStatus.OK:
        case g.net.HttpStatus.CREATED:
        case g.net.HttpStatus.ACCEPTED:
        case g.net.HttpStatus.NO_CONTENT:
        case g.net.HttpStatus.PARTIAL_CONTENT:
        case g.net.HttpStatus.NOT_MODIFIED:
        case g.net.HttpStatus.QUIRK_IE_NO_CONTENT:
            return!0;
        default:
            return!1
    }
};
g.net.XhrLike = function () {
};
b = g.net.XhrLike.prototype;
b.open = function () {
};
b.send = function () {
};
b.abort = function () {
};
b.setRequestHeader = function () {
};
b.getResponseHeader = function () {
};
b.getAllResponseHeaders = function () {
};
g.net.XmlHttpFactory = function () {
};
g.net.XmlHttpFactory.prototype.cachedOptions_ = null;
g.net.XmlHttpFactory.prototype.getOptions = function () {
    return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions())
};
g.net.WrapperXmlHttpFactory = function (a, c) {
    this.xhrFactory_ = a;
    this.optionsFactory_ = c
};
g.inherits(g.net.WrapperXmlHttpFactory, g.net.XmlHttpFactory);
g.net.WrapperXmlHttpFactory.prototype.createInstance = function () {
    return this.xhrFactory_()
};
g.net.WrapperXmlHttpFactory.prototype.getOptions = function () {
    return this.optionsFactory_()
};
g.net.XmlHttp = function () {
    return g.net.XmlHttp.factory_.createInstance()
};
g.net.XmlHttp.ASSUME_NATIVE_XHR = !1;
g.net.XmlHttpDefines = {};
g.net.XmlHttpDefines.ASSUME_NATIVE_XHR = !1;
g.net.XmlHttp.getOptions = function () {
    return g.net.XmlHttp.factory_.getOptions()
};
g.net.XmlHttp.OptionType = {
    USE_NULL_FUNCTION: 0,
    LOCAL_REQUEST_ERROR: 1
};
g.net.XmlHttp.ReadyState = {
    UNINITIALIZED: 0,
    LOADING: 1,
    LOADED: 2,
    INTERACTIVE: 3,
    COMPLETE: 4
};
g.net.XmlHttp.setFactory = function (a, c) {
    g.net.XmlHttp.setGlobalFactory(new g.net.WrapperXmlHttpFactory(g.asserts.assert(a), g.asserts.assert(c)))
};
g.net.XmlHttp.setGlobalFactory = function (a) {
    g.net.XmlHttp.factory_ = a
};
g.net.DefaultXmlHttpFactory = function () {
};
g.inherits(g.net.DefaultXmlHttpFactory, g.net.XmlHttpFactory);
g.net.DefaultXmlHttpFactory.prototype.createInstance = function () {
    var a = this.getProgId_();
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};
g.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function () {
    var a = this.getProgId_(), c = {};
    a && (c[g.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, c[g.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
    return c
};
g.net.DefaultXmlHttpFactory.prototype.getProgId_ = function () {
    if (g.net.XmlHttp.ASSUME_NATIVE_XHR || g.net.XmlHttpDefines.ASSUME_NATIVE_XHR)return"";
    if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < a.length; c++) {
            var d = a[c];
            try {
                return new ActiveXObject(d), this.ieProgId_ = d
            } catch (e) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return this.ieProgId_
};
g.net.XmlHttp.setGlobalFactory(new g.net.DefaultXmlHttpFactory);
g.net.XhrIo = function (a) {
    g.events.EventTarget.call(this);
    this.headers = new g.structs.Map;
    this.xmlHttpFactory_ = a || null;
    this.active_ = !1;
    this.xhrOptions_ = this.xhr_ = null;
    this.lastError_ = this.lastMethod_ = this.lastUri_ = "";
    this.inAbort_ = this.inOpen_ = this.inSend_ = this.errorDispatched_ = !1;
    this.timeoutInterval_ = 0;
    this.timeoutId_ = null;
    this.responseType_ = g.net.XhrIo.ResponseType.DEFAULT;
    this.useXhr2Timeout_ = this.withCredentials_ = !1
};
g.inherits(g.net.XhrIo, g.events.EventTarget);
g.net.XhrIo.ResponseType = {DEFAULT: "", TEXT: "text", DOCUMENT: "document", BLOB: "blob", ARRAY_BUFFER: "arraybuffer"};
g.net.XhrIo.prototype.logger_ = g.log.getLogger("goog.net.XhrIo");
g.net.XhrIo.CONTENT_TYPE_HEADER = "Content-Type";
g.net.XhrIo.HTTP_SCHEME_PATTERN = /^https?$/i;
g.net.XhrIo.METHODS_WITH_FORM_DATA = ["POST", "PUT"];
g.net.XhrIo.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset=utf-8";
g.net.XhrIo.XHR2_TIMEOUT_ = "timeout";
g.net.XhrIo.XHR2_ON_TIMEOUT_ = "ontimeout";
g.net.XhrIo.sendInstances_ = [];
g.net.XhrIo.send = function (a, c, d, e, f, h, l) {
    var m = new g.net.XhrIo;
    g.net.XhrIo.sendInstances_.push(m);
    c && m.listen(g.net.EventType.COMPLETE, c);
    m.listenOnce(g.net.EventType.READY, m.cleanupSend_);
    h && m.setTimeoutInterval(h);
    l && m.setWithCredentials(l);
    m.send(a, d, e, f);
    return m
};
g.net.XhrIo.cleanup = function () {
    for (var a = g.net.XhrIo.sendInstances_; a.length;)a.pop().dispose()
};
g.net.XhrIo.protectEntryPoints = function (a) {
    g.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a.protectEntryPoint(g.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
};
g.net.XhrIo.prototype.cleanupSend_ = function () {
    this.dispose();
    g.array.remove(g.net.XhrIo.sendInstances_, this)
};
g.net.XhrIo.prototype.setTimeoutInterval = function (a) {
    this.timeoutInterval_ = Math.max(0, a)
};
g.net.XhrIo.prototype.setWithCredentials = function (a) {
    this.withCredentials_ = a
};
g.net.XhrIo.prototype.send = function (a, c, d, e) {
    if (this.xhr_)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.lastUri_ + "; newUri=" + a);
    c = c ? c.toUpperCase() : "GET";
    this.lastUri_ = a;
    this.lastError_ = "";
    this.lastMethod_ = c;
    this.errorDispatched_ = !1;
    this.active_ = !0;
    this.xhr_ = this.createXhr();
    this.xhrOptions_ = this.xmlHttpFactory_ ? this.xmlHttpFactory_.getOptions() : g.net.XmlHttp.getOptions();
    this.xhr_.onreadystatechange = g.bind(this.onReadyStateChange_, this);
    try {
        g.log.fine(this.logger_, this.formatMsg_("Opening Xhr")),
            this.inOpen_ = !0, this.xhr_.open(c, String(a), !0), this.inOpen_ = !1
    } catch (f) {
        g.log.fine(this.logger_, this.formatMsg_("Error opening Xhr: " + f.message));
        this.error_(g.net.ErrorCode.EXCEPTION, f);
        return
    }
    a = d || "";
    var h = this.headers.clone();
    e && g.structs.forEach(e, function (a, c) {
        h.set(c, a)
    });
    e = g.array.find(h.getKeys(), g.net.XhrIo.isContentTypeHeader_);
    d = g.global.FormData && a instanceof g.global.FormData;
    !g.array.contains(g.net.XhrIo.METHODS_WITH_FORM_DATA, c) || e || d || h.set(g.net.XhrIo.CONTENT_TYPE_HEADER, g.net.XhrIo.FORM_CONTENT_TYPE);
    h.forEach(function (a, c) {
        this.xhr_.setRequestHeader(c, a)
    }, this);
    this.responseType_ && (this.xhr_.responseType = this.responseType_);
    g.object.containsKey(this.xhr_, "withCredentials") && (this.xhr_.withCredentials = this.withCredentials_);
    try {
        this.cleanUpTimeoutTimer_(), 0 < this.timeoutInterval_ && (this.useXhr2Timeout_ = g.net.XhrIo.shouldUseXhr2Timeout_(this.xhr_), g.log.fine(this.logger_, this.formatMsg_("Will abort after " + this.timeoutInterval_ + "ms if incomplete, xhr2 " + this.useXhr2Timeout_)), this.useXhr2Timeout_ ?
            (this.xhr_[g.net.XhrIo.XHR2_TIMEOUT_] = this.timeoutInterval_, this.xhr_[g.net.XhrIo.XHR2_ON_TIMEOUT_] = g.bind(this.timeout_, this)) : this.timeoutId_ = g.Timer.callOnce(this.timeout_, this.timeoutInterval_, this)), g.log.fine(this.logger_, this.formatMsg_("Sending request")), this.inSend_ = !0, this.xhr_.send(a), this.inSend_ = !1
    } catch (l) {
        g.log.fine(this.logger_, this.formatMsg_("Send error: " + l.message)), this.error_(g.net.ErrorCode.EXCEPTION, l)
    }
};
g.net.XhrIo.shouldUseXhr2Timeout_ = function (a) {
    return g.userAgent.IE && g.userAgent.isVersionOrHigher(9) && g.isNumber(a[g.net.XhrIo.XHR2_TIMEOUT_]) && g.isDef(a[g.net.XhrIo.XHR2_ON_TIMEOUT_])
};
g.net.XhrIo.isContentTypeHeader_ = function (a) {
    return g.string.caseInsensitiveEquals(g.net.XhrIo.CONTENT_TYPE_HEADER, a)
};
b = g.net.XhrIo.prototype;
b.createXhr = function () {
    return this.xmlHttpFactory_ ? this.xmlHttpFactory_.createInstance() : g.net.XmlHttp()
};
b.timeout_ = function () {
    "undefined" != typeof g && this.xhr_ && (this.lastError_ = "Timed out after " + this.timeoutInterval_ + "ms, aborting", g.log.fine(this.logger_, this.formatMsg_(this.lastError_)), this.dispatchEvent(g.net.EventType.TIMEOUT), this.abort(g.net.ErrorCode.TIMEOUT))
};
b.error_ = function (a, c) {
    this.active_ = !1;
    this.xhr_ && (this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1);
    this.lastError_ = c;
    this.dispatchErrors_();
    this.cleanUpXhr_()
};
b.dispatchErrors_ = function () {
    this.errorDispatched_ || (this.errorDispatched_ = !0, this.dispatchEvent(g.net.EventType.COMPLETE), this.dispatchEvent(g.net.EventType.ERROR))
};
b.abort = function () {
    this.xhr_ && this.active_ && (g.log.fine(this.logger_, this.formatMsg_("Aborting")), this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1, this.dispatchEvent(g.net.EventType.COMPLETE), this.dispatchEvent(g.net.EventType.ABORT), this.cleanUpXhr_())
};
b.disposeInternal = function () {
    this.xhr_ && (this.active_ && (this.active_ = !1, this.inAbort_ = !0, this.xhr_.abort(), this.inAbort_ = !1), this.cleanUpXhr_(!0));
    g.net.XhrIo.superClass_.disposeInternal.call(this)
};
b.onReadyStateChange_ = function () {
    if (!this.isDisposed())if (this.inOpen_ || this.inSend_ || this.inAbort_)this.onReadyStateChangeHelper_(); else this.onReadyStateChangeEntryPoint_()
};
b.onReadyStateChangeEntryPoint_ = function () {
    this.onReadyStateChangeHelper_()
};
b.onReadyStateChangeHelper_ = function () {
    if (this.active_ && "undefined" != typeof g)
        if (this.xhrOptions_[g.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] && this.getReadyState() == g.net.XmlHttp.ReadyState.COMPLETE && 2 == this.getStatus())
            g.log.fine(this.logger_, this.formatMsg_("Local request error detected and ignored"));
        else if (this.inSend_ && this.getReadyState() == g.net.XmlHttp.ReadyState.COMPLETE)
            g.Timer.callOnce(this.onReadyStateChange_, 0, this);
        else if (this.dispatchEvent(g.net.EventType.READY_STATE_CHANGE), this.isComplete()) {
            g.log.fine(this.logger_, this.formatMsg_("Request complete"));
            this.active_ = !1;
            try {
                this.isSuccess() ? (this.dispatchEvent(g.net.EventType.COMPLETE), this.dispatchEvent(g.net.EventType.SUCCESS)) : (this.lastError_ = this.getStatusText() + " [" + this.getStatus() + "]", this.dispatchErrors_())
            } finally {
                this.cleanUpXhr_()
            }
        }
};
b.cleanUpXhr_ = function (a) {
    if (this.xhr_) {
        this.cleanUpTimeoutTimer_();
        var c = this.xhr_, d = this.xhrOptions_[g.net.XmlHttp.OptionType.USE_NULL_FUNCTION] ? g.nullFunction : null;
        this.xhrOptions_ = this.xhr_ = null;
        a || this.dispatchEvent(g.net.EventType.READY);
        try {
            c.onreadystatechange = d
        } catch (e) {
            g.log.error(this.logger_, "Problem encountered resetting onreadystatechange: " + e.message)
        }
    }
};
b.cleanUpTimeoutTimer_ = function () {
    this.xhr_ && this.useXhr2Timeout_ && (this.xhr_[g.net.XhrIo.XHR2_ON_TIMEOUT_] = null);
    g.isNumber(this.timeoutId_) && (g.Timer.clear(this.timeoutId_), this.timeoutId_ = null)
};
b.isComplete = function () {
    return this.getReadyState() == g.net.XmlHttp.ReadyState.COMPLETE
};
b.isSuccess = function () {
    var a = this.getStatus();
    return g.net.HttpStatus.isSuccess(a) || 0 === a && !this.isLastUriEffectiveSchemeHttp_()
};
b.isLastUriEffectiveSchemeHttp_ = function () {
    var a = g.uri.utils.getEffectiveScheme(String(this.lastUri_));
    return g.net.XhrIo.HTTP_SCHEME_PATTERN.test(a)
};
b.getReadyState = function () {
    return this.xhr_ ? this.xhr_.readyState : g.net.XmlHttp.ReadyState.UNINITIALIZED
};
b.getStatus = function () {
    try {
        return this.getReadyState() > g.net.XmlHttp.ReadyState.LOADED ? this.xhr_.status : -1
    } catch (a) {
        return-1
    }
};
b.getStatusText = function () {
    try {
        return this.getReadyState() > g.net.XmlHttp.ReadyState.LOADED ? this.xhr_.statusText : ""
    } catch (a) {
        return g.log.fine(this.logger_, "Can not get status: " + a.message), ""
    }
};
b.getResponseHeader = function (a) {
    return this.xhr_ && this.isComplete() ? this.xhr_.getResponseHeader(a) : void 0
};
b.getAllResponseHeaders = function () {
    return this.xhr_ && this.isComplete() ? this.xhr_.getAllResponseHeaders() : ""
};
b.formatMsg_ = function (a) {
    return a + " [" + this.lastMethod_ + " " + this.lastUri_ + " " + this.getStatus() + "]"
};
g.debug.entryPointRegistry.register(function (a) {
    g.net.XhrIo.prototype.onReadyStateChangeEntryPoint_ = a(g.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)
});

/*------------------------------- GAClient Start --------------------------------------------*/
k.GAClient = function () {
    this.loadClientId_()
};
g.addSingletonGetter(k.GAClient);
k.GAClient.prototype.loadClientId_ = function () {
    var a = this;
    chrome.storage.sync.get("ga-clientId", function (c) {
        c && c["ga-clientId"] ? a.clientId_ = c["ga-clientId"] : (a.clientId_ = 1E9 * Math.random() >>> 0, chrome.storage.sync.set({"ga-clientId": a.clientId_}));
        c = chrome.runtime.getManifest();
        a.trackingUrl_ = "https://ssl.google-analytics.com/collect?v=1&tid=UA-38676921-17&cd=Home&an=" + encodeURI(c.name) + "&av=" + encodeURI(c.version) + "&cid=" + a.clientId_
    })
};
k.GAClient.prototype.getClientId = function () {
    return this.clientId_
};
k.GAClient.prototype.sendAppView = function (a) {
    if (this.trackingUrl_) {
        var c = this.trackingUrl_ + "&t=appview";
        "fullMode"in a && (c += "&cd1=" + (a.fullMode ? "Full" : "Compact"));
        "showBubbles"in a && (c += "&cd2=" + (a.showBubbles ? "On" : "Off"));
        "numberOfSegments"in a && (c += "&cd4=" + a.numberOfSegments);
        "dateInterval"in a && (c += "&cd5=" + a.dateInterval);
        "dateComparisonMode"in a && (c += "&cd6=" + (a.dateComparisonMode ? "On" : "Off"));
        "position"in a && (c += "&cd7=" + a.position);
        g.net.XhrIo.send(c)
    }
};
k.GAClient.prototype.sendEvent = function (a, c, d) {
    this.trackingUrl_ && (a = this.trackingUrl_ + "&t=event&ec=" + a + "&ea=" + c, d && (a += "&el=" + encodeURI(d)), g.net.XhrIo.send(a))
};
/*------------------------------- GAClient End --------------------------------------------*/


k.ApiQuery = function (a, c) {
    this.method_ = a;
    this.parameters_ = c;
    this.failedNumber_ = 0;
    this.maxRetryAttempts_ = 3
};
k.ApiQuery.REPEAT_DELAY_ = 1E3;
k.ApiQuery.DEFAULT_SEGMENT_ID = "-1";
k.ApiQuery.prototype.setMaxRetryAttempts = function (a) {
    this.maxRetryAttempts_ = a
};
k.ApiQuery.prototype.executeQuery = function (a, c) {
    var d = this.method_(this.parameters_);
    d.execute(g.bind(this.handleQuery_, this, a, c))
};
k.ApiQuery.prototype.handleQuery_ = function (a, c, d) {
    d.error ? (this.failedNumber_++, this.failedNumber_ <= this.maxRetryAttempts_ ? (d = k.ApiQuery.REPEAT_DELAY_ * this.failedNumber_, window.setTimeout(g.bind(this.executeQuery, this, a, c), d)) : 0 !== this.maxRetryAttempts_ && c && c(d.message)) : a(d)
};


k.RealTimeQuery = function (a, c) {
    this.viewId_ = a;
    this.pagePath_ = c
};
k.RealTimeQuery.prototype.execute = function (a) {
    var c = {ids: "ga:" + this.viewId_, metrics: k.Metric.REAL_TIME.id, quotaUser: k.GAClient.getInstance().getClientId()}, d = gapi.client.analytics.data.realtime.get, c = new k.ApiQuery(d, c);
    c.setMaxRetryAttempts(0);
    c.executeQuery(g.bind(this.queryHanlder_, this, a))
};
k.RealTimeQuery.prototype.queryHanlder_ = function (a, c) {
    if (0 !== c.totalResults) {
        var d = parseFloat(c.rows[0][0]);
        a(d)
    }
};


k.MetricQuery = function (a, c, d, e) {
    this.viewId = a;
    this.segmentId = c;
    this.pagePath = e;
    this.dateRange = d;
    this.results = {metrics: {siteValues: [], values: [], trends: []}};
    this.responses = 0
};
k.MetricQuery.METRICS_IDS_ = k.Metric.SCORECARD_METRICS.map(function (a) {
    return a.id
}).join(", ");
b = k.MetricQuery.prototype;
b.execute = function (a) {
    this.callback = a;
    this.querySiteData_();
    this.queryTrends(k.QueryType.CURRENT_TRENDS, this.dateRange)
};
b.querySiteData_ = function () {
    var a = {ids: "ga:" + this.viewId, metrics: k.MetricQuery.METRICS_IDS_, "start-date": this.dateRange.getStartDate().toIsoString(!0), "end-date": this.dateRange.getEndDate().toIsoString(!0), quotaUser: k.GAClient.getInstance().getClientId()};
    this.setSegment(a);
    a = new k.ApiQuery(gapi.client.analytics.data.ga.get, a);
    a.executeQuery(g.bind(this.resultsHandler, this, k.QueryType.SITE_DATA))
};
b.queryTrends = function (a, c) {
    var d = {ids: "ga:" + this.viewId, dimensions: "ga:nthDay", metrics: k.MetricQuery.METRICS_IDS_, "start-date": c.getStartDate().toIsoString(!0), "end-date": c.getEndDate().toIsoString(!0), filters: "ga:pagePath==" + this.pagePath, quotaUser: k.GAClient.getInstance().getClientId()};
    this.setSegment(d);
    d = new k.ApiQuery(gapi.client.analytics.data.ga.get, d);
    d.executeQuery(g.bind(this.resultsHandler, this, a))
};
b.setSegment = function (a) {
    this.segmentId !== k.ApiQuery.DEFAULT_SEGMENT_ID && (a.segment = "gaid::" + this.segmentId)
};
b.resultsHandler = function (a, c) {
    switch (a) {
        case k.QueryType.SITE_DATA:
            this.handleSiteData_(c);
            break;
        case k.QueryType.CURRENT_TRENDS:
            var d = this.results.metrics;
            this.handleTrends(c, d.values, d.trends)
    }
    this.responses++;
    2 == this.responses && this.callback(this.results)
};
b.handleSiteData_ = function (a) {
    0 !== a.totalResults && (this.results.metrics.siteValues = a.rows[0]);
    a.containsSampledData && (this.results.sampledData = {sampleSize: a.sampleSize, sampleSpace: a.sampleSpace})
};
b.handleTrends = function (a, c, d) {
    for (var e = a.query.metrics, f = 0; f < e.length; f++) {
        for (var h = e[f], l = [], m = 0; m < a.rows.length; m++) {
            var n = a.rows[m];
            l.push(n[f + 1])
        }
        c.push(a.totalsForAllResults[h]);
        d.push(l)
    }
    a.containsSampledData && (this.results.sampledData = {sampleSize: a.sampleSize, sampleSpace: a.sampleSpace})
};

k.QueryType = {
    SITE_DATA: "SITE_DATA",
    CURRENT_TRENDS: "CURRENT_TRENDS",
    PREVIOUS_TRENDS: "PREVIOUS_TRENDS"
};

k.ComparisonQuery = function (a, c, d, e, f) {
    k.MetricQuery.call(this, a, c, d, f);
    this.previousDateRange_ = e;
    this.results = {metrics: {current: {values: [], trends: []}, previous: {values: [], trends: []}}}
};
g.inherits(k.ComparisonQuery, k.MetricQuery);
k.ComparisonQuery.prototype.execute = function (a) {
    this.callback = a;
    this.queryTrends(k.QueryType.CURRENT_TRENDS, this.dateRange);
    this.queryTrends(k.QueryType.PREVIOUS_TRENDS, this.previousDateRange_)
};
k.ComparisonQuery.prototype.resultsHandler = function (a, c) {
    switch (a) {
        case k.QueryType.PREVIOUS_TRENDS:
            var d = this.results.metrics.previous;
            this.handleTrends(c, d.values, d.trends);
            break;
        case k.QueryType.CURRENT_TRENDS:
            d = this.results.metrics.current, this.handleTrends(c, d.values, d.trends)
    }
    this.responses++;
    2 == this.responses && this.callback(this.results)
};

k.RealTimeController = function () {
    this.tabId_ = this.queryCounter_ = this.timer_ = 0
};
k.RealTimeController.REFRESH_TIMEOUT_MS = 3E4;
k.RealTimeController.MAX_QUERY_NUMBER = 100;
b = k.RealTimeController.prototype;
b.start = function (a, c) {
    this.timer_ && this.stop(this.tabId_);
    this.tabId_ = a;
    var d = c.getSelectedView().id, e = c.getPath();
    this.makeQuery_(d, e);
    this.timer_ = window.setInterval(g.bind(this.onTimer_, this, d, e), k.RealTimeController.REFRESH_TIMEOUT_MS)
};
b.stop = function (a) {
    this.timer_ && this.tabId_ == a && (window.clearInterval(this.timer_), this.queryCounter_ = 0)
};
b.onTimer_ = function (a, c) {
    this.queryCounter_ < k.RealTimeController.MAX_QUERY_NUMBER ? this.makeQuery_(a, c) : this.stop(this.tabId_)
};
b.makeQuery_ = function (a, c) {
    this.queryCounter_++;
    var d = new k.RealTimeQuery(a, c);
    d.execute(g.bind(this.sendRealTimeMsg_, this))
};
b.sendRealTimeMsg_ = function (a) {
    a = {type: k.MessageType.REAL_TIME, realTime: a};
    chrome.tabs.sendMessage(this.tabId_, a)
};


g.i18n.TimeZone = function () {
};
g.i18n.TimeZone.MILLISECONDS_PER_HOUR_ = 36E5;
g.i18n.TimeZone.NameType = {STD_SHORT_NAME: 0, STD_LONG_NAME: 1, DLT_SHORT_NAME: 2, DLT_LONG_NAME: 3};
g.i18n.TimeZone.createTimeZone = function (a) {
    if ("number" == typeof a)return g.i18n.TimeZone.createSimpleTimeZone_(a);
    var c = new g.i18n.TimeZone;
    c.timeZoneId_ = a.id;
    c.standardOffset_ = -a.std_offset;
    c.tzNames_ = a.names;
    c.transitions_ = a.transitions;
    return c
};
g.i18n.TimeZone.createSimpleTimeZone_ = function (a) {
    var c = new g.i18n.TimeZone;
    c.standardOffset_ = a;
    c.timeZoneId_ = g.i18n.TimeZone.composePosixTimeZoneID_(a);
    a = g.i18n.TimeZone.composeUTCString_(a);
    c.tzNames_ = [a, a];
    c.transitions_ = [];
    return c
};
g.i18n.TimeZone.composeGMTString_ = function (a) {
    var c = ["GMT"];
    c.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    c.push(g.string.padNumber(Math.floor(a / 60) % 100, 2), ":", g.string.padNumber(a % 60, 2));
    return c.join("")
};
g.i18n.TimeZone.composePosixTimeZoneID_ = function (a) {
    if (0 == a)return"Etc/GMT";
    var c = ["Etc/GMT", 0 > a ? "-" : "+"];
    a = Math.abs(a);
    c.push(Math.floor(a / 60) % 100);
    a %= 60;
    0 != a && c.push(":", g.string.padNumber(a, 2));
    return c.join("")
};
g.i18n.TimeZone.composeUTCString_ = function (a) {
    if (0 == a)return"UTC";
    var c = ["UTC", 0 > a ? "+" : "-"];
    a = Math.abs(a);
    c.push(Math.floor(a / 60) % 100);
    a %= 60;
    0 != a && c.push(":", a);
    return c.join("")
};
b = g.i18n.TimeZone.prototype;
b.getDaylightAdjustment = function (a) {
    a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes());
    a /= g.i18n.TimeZone.MILLISECONDS_PER_HOUR_;
    for (var c = 0; c < this.transitions_.length && a >= this.transitions_[c];)c += 2;
    return 0 == c ? 0 : this.transitions_[c - 1]
};
b.getGMTString = function (a) {
    return g.i18n.TimeZone.composeGMTString_(this.getOffset(a))
};
b.getLongName = function (a) {
    return this.tzNames_[this.isDaylightTime(a) ? g.i18n.TimeZone.NameType.DLT_LONG_NAME : g.i18n.TimeZone.NameType.STD_LONG_NAME]
};
b.getOffset = function (a) {
    return this.standardOffset_ - this.getDaylightAdjustment(a)
};
b.getRFCTimeZoneString = function (a) {
    a = -this.getOffset(a);
    var c = [0 > a ? "-" : "+"];
    a = Math.abs(a);
    c.push(g.string.padNumber(Math.floor(a / 60) % 100, 2), g.string.padNumber(a % 60, 2));
    return c.join("")
};
b.getShortName = function (a) {
    return this.tzNames_[this.isDaylightTime(a) ? g.i18n.TimeZone.NameType.DLT_SHORT_NAME : g.i18n.TimeZone.NameType.STD_SHORT_NAME]
};
b.getTimeZoneId = function () {
    return this.timeZoneId_
};
b.isDaylightTime = function (a) {
    return 0 < this.getDaylightAdjustment(a)
};
g.i18n.DateTimeFormat = function (a, c) {
    g.asserts.assert(g.isDef(a), "Pattern must be defined");
    g.asserts.assert(g.isDef(c) || g.isDef(g.i18n.DateTimeSymbols), "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
    this.patternParts_ = [];
    this.dateTimeSymbols_ = c || g.i18n.DateTimeSymbols;
    "number" == typeof a ? this.applyStandardPattern_(a) : this.applyPattern_(a)
};
g.i18n.DateTimeFormat.Format = {FULL_DATE: 0, LONG_DATE: 1, MEDIUM_DATE: 2, SHORT_DATE: 3, FULL_TIME: 4, LONG_TIME: 5, MEDIUM_TIME: 6, SHORT_TIME: 7, FULL_DATETIME: 8, LONG_DATETIME: 9, MEDIUM_DATETIME: 10, SHORT_DATETIME: 11};
g.i18n.DateTimeFormat.TOKENS_ = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvwzZ]+/];
g.i18n.DateTimeFormat.PartTypes_ = {QUOTED_STRING: 0, FIELD: 1, LITERAL: 2};
g.i18n.DateTimeFormat.prototype.applyPattern_ = function (a) {
    for (; a;)for (var c = 0; c < g.i18n.DateTimeFormat.TOKENS_.length; ++c) {
        var d = a.match(g.i18n.DateTimeFormat.TOKENS_[c]);
        if (d) {
            d = d[0];
            a = a.substring(d.length);
            c == g.i18n.DateTimeFormat.PartTypes_.QUOTED_STRING && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
            this.patternParts_.push({text: d, type: c});
            break
        }
    }
};
g.i18n.DateTimeFormat.prototype.format = function (a, c) {
    if (!a)throw Error("The date to format must be non-null.");
    var d = c ? 6E4 * (a.getTimezoneOffset() - c.getOffset(a)) : 0, e = d ? new Date(a.getTime() + d) : a, f = e;
    c && e.getTimezoneOffset() != a.getTimezoneOffset() && (d += 0 < d ? -g.date.MS_PER_DAY : g.date.MS_PER_DAY, f = new Date(a.getTime() + d));
    for (var d = [], h = 0; h < this.patternParts_.length; ++h) {
        var l = this.patternParts_[h].text;
        g.i18n.DateTimeFormat.PartTypes_.FIELD == this.patternParts_[h].type ? d.push(this.formatField_(l, a, e, f,
            c)) : d.push(l)
    }
    return d.join("")
};
g.i18n.DateTimeFormat.prototype.applyStandardPattern_ = function (a) {
    var c;
    if (4 > a)c = this.dateTimeSymbols_.DATEFORMATS[a]; else if (8 > a)c = this.dateTimeSymbols_.TIMEFORMATS[a - 4]; else if (12 > a)c = this.dateTimeSymbols_.DATETIMEFORMATS[a - 8], c = c.replace("{1}", this.dateTimeSymbols_.DATEFORMATS[a - 8]), c = c.replace("{0}", this.dateTimeSymbols_.TIMEFORMATS[a - 8]); else {
        this.applyStandardPattern_(g.i18n.DateTimeFormat.Format.MEDIUM_DATETIME);
        return
    }
    this.applyPattern_(c)
};
g.i18n.DateTimeFormat.prototype.localizeNumbers_ = function (a) {
    return g.i18n.DateTimeFormat.localizeNumbers(a, this.dateTimeSymbols_)
};
g.i18n.DateTimeFormat.localizeNumbers = function (a, c) {
    a = String(a);
    var d = c || g.i18n.DateTimeSymbols;
    if (void 0 === d.ZERODIGIT)return a;
    for (var e = [], f = 0; f < a.length; f++) {
        var h = a.charCodeAt(f);
        e.push(48 <= h && 57 >= h ? String.fromCharCode(d.ZERODIGIT + h - 48) : a.charAt(f))
    }
    return e.join("")
};
g.i18n.DateTimeFormat.prototype.formatEra_ = function (a, c) {
    var d = 0 < c.getFullYear() ? 1 : 0;
    return 4 <= a ? this.dateTimeSymbols_.ERANAMES[d] : this.dateTimeSymbols_.ERAS[d]
};
g.i18n.DateTimeFormat.prototype.formatYear_ = function (a, c) {
    var d = c.getFullYear();
    0 > d && (d = -d);
    2 == a && (d %= 100);
    return this.localizeNumbers_(g.string.padNumber(d, a))
};
g.i18n.DateTimeFormat.prototype.formatMonth_ = function (a, c) {
    var d = c.getMonth();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.NARROWMONTHS[d];
        case 4:
            return this.dateTimeSymbols_.MONTHS[d];
        case 3:
            return this.dateTimeSymbols_.SHORTMONTHS[d];
        default:
            return this.localizeNumbers_(g.string.padNumber(d + 1, a))
    }
};
g.i18n.DateTimeFormat.validateDateHasTime_ = function (a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
};
b = g.i18n.DateTimeFormat.prototype;
b.format24Hours_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getHours() || 24, a))
};
b.formatFractionalSeconds_ = function (a, c) {
    var d = c.getTime() % 1E3 / 1E3;
    return this.localizeNumbers_(d.toFixed(Math.min(3, a)).substr(2) + (3 < a ? g.string.padNumber(0, a - 3) : ""))
};
b.formatDayOfWeek_ = function (a, c) {
    var d = c.getDay();
    return 4 <= a ? this.dateTimeSymbols_.WEEKDAYS[d] : this.dateTimeSymbols_.SHORTWEEKDAYS[d]
};
b.formatAmPm_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    var d = c.getHours();
    return this.dateTimeSymbols_.AMPMS[12 <= d && 24 > d ? 1 : 0]
};
b.format1To12Hours_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getHours() % 12 || 12, a))
};
b.format0To11Hours_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getHours() % 12, a))
};
b.format0To23Hours_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getHours(), a))
};
b.formatStandaloneDay_ = function (a, c) {
    var d = c.getDay();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.STANDALONENARROWWEEKDAYS[d];
        case 4:
            return this.dateTimeSymbols_.STANDALONEWEEKDAYS[d];
        case 3:
            return this.dateTimeSymbols_.STANDALONESHORTWEEKDAYS[d];
        default:
            return this.localizeNumbers_(g.string.padNumber(d, 1))
    }
};
b.formatStandaloneMonth_ = function (a, c) {
    var d = c.getMonth();
    switch (a) {
        case 5:
            return this.dateTimeSymbols_.STANDALONENARROWMONTHS[d];
        case 4:
            return this.dateTimeSymbols_.STANDALONEMONTHS[d];
        case 3:
            return this.dateTimeSymbols_.STANDALONESHORTMONTHS[d];
        default:
            return this.localizeNumbers_(g.string.padNumber(d + 1, a))
    }
};
b.formatQuarter_ = function (a, c) {
    var d = Math.floor(c.getMonth() / 3);
    return 4 > a ? this.dateTimeSymbols_.SHORTQUARTERS[d] : this.dateTimeSymbols_.QUARTERS[d]
};
b.formatDate_ = function (a, c) {
    return this.localizeNumbers_(g.string.padNumber(c.getDate(), a))
};
b.formatMinutes_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getMinutes(), a))
};
b.formatSeconds_ = function (a, c) {
    g.i18n.DateTimeFormat.validateDateHasTime_(c);
    return this.localizeNumbers_(g.string.padNumber(c.getSeconds(), a))
};
b.formatWeekOfYear_ = function (a, c) {
    var d = g.date.getWeekNumber(c.getFullYear(), c.getMonth(), c.getDate(), this.dateTimeSymbols_.FIRSTWEEKCUTOFFDAY, this.dateTimeSymbols_.FIRSTDAYOFWEEK);
    return this.localizeNumbers_(g.string.padNumber(d, a))
};
b.formatTimeZoneRFC_ = function (a, c, d) {
    d = d || g.i18n.TimeZone.createTimeZone(c.getTimezoneOffset());
    return 4 > a ? d.getRFCTimeZoneString(c) : this.localizeNumbers_(d.getGMTString(c))
};
b.formatTimeZone_ = function (a, c, d) {
    d = d || g.i18n.TimeZone.createTimeZone(c.getTimezoneOffset());
    return 4 > a ? d.getShortName(c) : d.getLongName(c)
};
b.formatTimeZoneId_ = function (a, c) {
    c = c || g.i18n.TimeZone.createTimeZone(a.getTimezoneOffset());
    return c.getTimeZoneId()
};
b.formatField_ = function (a, c, d, e, f) {
    var h = a.length;
    switch (a.charAt(0)) {
        case "G":
            return this.formatEra_(h, d);
        case "y":
            return this.formatYear_(h, d);
        case "M":
            return this.formatMonth_(h, d);
        case "k":
            return this.format24Hours_(h, e);
        case "S":
            return this.formatFractionalSeconds_(h, e);
        case "E":
            return this.formatDayOfWeek_(h, d);
        case "a":
            return this.formatAmPm_(h, e);
        case "h":
            return this.format1To12Hours_(h, e);
        case "K":
            return this.format0To11Hours_(h, e);
        case "H":
            return this.format0To23Hours_(h, e);
        case "c":
            return this.formatStandaloneDay_(h,
                d);
        case "L":
            return this.formatStandaloneMonth_(h, d);
        case "Q":
            return this.formatQuarter_(h, d);
        case "d":
            return this.formatDate_(h, d);
        case "m":
            return this.formatMinutes_(h, e);
        case "s":
            return this.formatSeconds_(h, e);
        case "v":
            return this.formatTimeZoneId_(c, f);
        case "w":
            return this.formatWeekOfYear_(h, e);
        case "z":
            return this.formatTimeZone_(h, c, f);
        case "Z":
            return this.formatTimeZoneRFC_(h, c, f);
        default:
            return""
    }
};
g.i18n.DateTimePatterns_af = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_am = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE\u1363 MMM d y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ar = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/\u200fM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM\u060c y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE\u060c d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE\u060c d MMM\u060c y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_az = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "d MMM, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "d MMM y, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_bg = {YEAR_FULL: "y '\u0433'.", YEAR_FULL_WITH_ERA: "y '\u0433'. G", YEAR_MONTH_ABBR: "MM.y '\u0433'.", YEAR_MONTH_FULL: "MMMM y '\u0433'.", MONTH_DAY_ABBR: "d.MM", MONTH_DAY_FULL: "d MMMM", MONTH_DAY_SHORT: "d.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d.MM.y '\u0433'.", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d.MM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d.MM.y '\u0433'.", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_bn = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_br = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "MM-dd", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ca = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL 'de' y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_chr = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_cs = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d. M.", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d. M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. M. y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. M.", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. M. y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_cy = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_da = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. MMM y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_de = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_de_AT = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_de_CH = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_el = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_AU = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd/MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_GB = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd/MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_IE = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_IN = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd/MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_SG = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd/MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_US = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_en_ZA = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "dd MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "MM/dd", MONTH_DAY_MEDIUM: "dd MMMM", MONTH_DAY_YEAR_MEDIUM: "dd MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE dd MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, dd MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_es = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM 'de' y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d 'de' MMM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d 'de' MMM 'de' y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d 'de' MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d 'de' MMMM 'de' y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_es_419 = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM 'de' y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d 'de' MMM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d 'de' MMM 'de' y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d 'de' MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d 'de' MMMM 'de' y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_es_ES = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM 'de' y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d 'de' MMM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d 'de' MMM 'de' y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d 'de' MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d 'de' MMMM 'de' y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_et = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_eu = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y('e')'ko' MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_fa = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d LLL", MONTH_DAY_FULL: "dd LLLL", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "d LLLL", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d LLL", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_fi = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "ccc d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_fil = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_fr = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_fr_CA = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "M-d", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_gl = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_gsw = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_gu = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_haw = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_he = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d \u05d1MMM", MONTH_DAY_FULL: "dd \u05d1MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d \u05d1MMMM", MONTH_DAY_YEAR_MEDIUM: "d \u05d1MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d \u05d1MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d \u05d1MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_hi = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_hr = {YEAR_FULL: "y.", YEAR_FULL_WITH_ERA: "y. G", YEAR_MONTH_ABBR: "LLL y.", YEAR_MONTH_FULL: "LLLL y.", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d. M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y.", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y.", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_hu = {YEAR_FULL: "y.", YEAR_FULL_WITH_ERA: "G y.", YEAR_MONTH_ABBR: "y. MMM", YEAR_MONTH_FULL: "y. MMMM", MONTH_DAY_ABBR: "MMM d.", MONTH_DAY_FULL: "MMMM dd.", MONTH_DAY_SHORT: "M. d.", MONTH_DAY_MEDIUM: "MMMM d.", MONTH_DAY_YEAR_MEDIUM: "y. MMM d.", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d., EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y. MMM d., EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_hy = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y\u0569.", YEAR_MONTH_ABBR: "y\u0569. LLL", YEAR_MONTH_FULL: "y\u0569. LLLL", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y\u0569.", WEEKDAY_MONTH_DAY_MEDIUM: "d MMM, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\u0569. MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_id = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_in = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_is = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_it = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_iw = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d \u05d1MMM", MONTH_DAY_FULL: "dd \u05d1MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d \u05d1MMMM", MONTH_DAY_YEAR_MEDIUM: "d \u05d1MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d \u05d1MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d \u05d1MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ja = {YEAR_FULL: "y\u5e74", YEAR_FULL_WITH_ERA: "Gy\u5e74", YEAR_MONTH_ABBR: "y\u5e74M\u6708", YEAR_MONTH_FULL: "y\u5e74M\u6708", MONTH_DAY_ABBR: "M\u6708d\u65e5", MONTH_DAY_FULL: "M\u6708dd\u65e5", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "M\u6708d\u65e5", MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5", WEEKDAY_MONTH_DAY_MEDIUM: "M\u6708d\u65e5(EEE)", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5(EEE)", DAY_ABBR: "d\u65e5"};
g.i18n.DateTimePatterns_ka = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM, y", YEAR_MONTH_FULL: "MMMM, y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d.M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_kk = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd-MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_km = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y \u1793\u17c3 G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_kn = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d, MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "d MMM, y EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ko = {YEAR_FULL: "y\ub144", YEAR_FULL_WITH_ERA: "G y\ub144", YEAR_MONTH_ABBR: "y\ub144 MMM", YEAR_MONTH_FULL: "y\ub144 MMMM", MONTH_DAY_ABBR: "MMM d\uc77c", MONTH_DAY_FULL: "MMMM dd\uc77c", MONTH_DAY_SHORT: "M. d.", MONTH_DAY_MEDIUM: "MMMM d\uc77c", MONTH_DAY_YEAR_MEDIUM: "y\ub144 MMM d\uc77c", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d\uc77c (EEE)", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\ub144 MMM d\uc77c (EEE)", DAY_ABBR: "d\uc77c"};
g.i18n.DateTimePatterns_ky = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y-'\u0436'.", YEAR_MONTH_ABBR: "y-'\u0436'. MMM", YEAR_MONTH_FULL: "y-'\u0436'. MMMM", MONTH_DAY_ABBR: "d-MMM", MONTH_DAY_FULL: "dd-MMMM", MONTH_DAY_SHORT: "dd-MM", MONTH_DAY_MEDIUM: "d-MMMM", MONTH_DAY_YEAR_MEDIUM: "y-'\u0436'. d-MMM", WEEKDAY_MONTH_DAY_MEDIUM: "d-MMM, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y-'\u0436'. d-MMM, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ln = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_lo = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_lt = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "MM-d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "dd"};
g.i18n.DateTimePatterns_lv = {YEAR_FULL: "y. 'g'.", YEAR_FULL_WITH_ERA: "G y. 'g'.", YEAR_MONTH_ABBR: "y. 'g'. MMM", YEAR_MONTH_FULL: "y. 'g'. MMMM", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "dd.MM.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "y. 'g'. d. MMM", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, y. 'g'. d. MMM", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_mk = {YEAR_FULL: "y '\u0433'.", YEAR_FULL_WITH_ERA: "y '\u0433'. G", YEAR_MONTH_ABBR: "MMM y '\u0433'.", YEAR_MONTH_FULL: "MMMM y '\u0433'.", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d.M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y '\u0433'.", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y '\u0433'.", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ml = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_mn = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M-d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "EEE MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, y MMM d", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_mo = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_mr = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d, MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ms = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_mt = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "MM-dd", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_my = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, y MMM d", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_nb = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. MMM y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_ne = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "MM-dd", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_nl = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_no = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. MMM y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_no_NO = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d. MMM y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_or = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_pa = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_pl = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_pt = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM 'de' y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d 'de' MMM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d 'de' MMM 'de' y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d 'de' MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d 'de' MMM 'de' y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_pt_BR = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM 'de' y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d 'de' MMM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d 'de' MMM 'de' y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d 'de' MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d 'de' MMM 'de' y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_pt_PT = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MM/y", YEAR_MONTH_FULL: "MMMM 'de' y", MONTH_DAY_ABBR: "d/MM", MONTH_DAY_FULL: "dd 'de' MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d 'de' MMMM", MONTH_DAY_YEAR_MEDIUM: "d/MM/y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d/MM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d/MM/y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ro = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ru = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y '\u0433'.", WEEKDAY_MONTH_DAY_MEDIUM: "ccc, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sh = {YEAR_FULL: "y.", YEAR_FULL_WITH_ERA: "y. G", YEAR_MONTH_ABBR: "MMM y.", YEAR_MONTH_FULL: "MMMM y.", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y.", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y.", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_si = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M-d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sk = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d. MMM.", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d.M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d.M.y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM.", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d."};
g.i18n.DateTimePatterns_sl = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d. M.", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sq = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sr = {YEAR_FULL: "y.", YEAR_FULL_WITH_ERA: "y. G", YEAR_MONTH_ABBR: "MMM y.", YEAR_MONTH_FULL: "MMMM y.", MONTH_DAY_ABBR: "d. MMM", MONTH_DAY_FULL: "dd. MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d. MMMM", MONTH_DAY_YEAR_MEDIUM: "d. MMM y.", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d. MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d. MMM y.", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sv = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_sw = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d-M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ta = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_te = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d, MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d, MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_th = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_tl = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_tr = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd/MM", MONTH_DAY_MEDIUM: "dd MMMM", MONTH_DAY_YEAR_MEDIUM: "dd MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "d MMMM EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "d MMM y EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_uk = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "LLL y", YEAR_MONTH_FULL: "LLLL y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd.MM", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, d MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_ur = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "d MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "d MMMM", MONTH_DAY_YEAR_MEDIUM: "d MMM\u060c y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE\u060c d MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE\u060c d MMM\u060c y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_uz = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "G y", YEAR_MONTH_ABBR: "y MMM", YEAR_MONTH_FULL: "y MMMM", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "MM-dd", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "y MMM d", WEEKDAY_MONTH_DAY_MEDIUM: "MMM d, EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y MMM d, EEE", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_vi = {YEAR_FULL: "'N\u0103m' y", YEAR_FULL_WITH_ERA: "'N\u0103m' y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "dd MMM", MONTH_DAY_FULL: "dd MMMM", MONTH_DAY_SHORT: "dd-M", MONTH_DAY_MEDIUM: "dd MMMM", MONTH_DAY_YEAR_MEDIUM: "dd MMM, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, dd MMM", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, dd MMM y", DAY_ABBR: "d"};
g.i18n.DateTimePatterns_zh = {YEAR_FULL: "y\u5e74", YEAR_FULL_WITH_ERA: "Gy\u5e74", YEAR_MONTH_ABBR: "y\u5e74M\u6708", YEAR_MONTH_FULL: "y\u5e74M\u6708", MONTH_DAY_ABBR: "M\u6708d\u65e5", MONTH_DAY_FULL: "M\u6708dd\u65e5", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "M\u6708d\u65e5", MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5", WEEKDAY_MONTH_DAY_MEDIUM: "M\u6708d\u65e5EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5EEE", DAY_ABBR: "d\u65e5"};
g.i18n.DateTimePatterns_zh_CN = {YEAR_FULL: "y\u5e74", YEAR_FULL_WITH_ERA: "Gy\u5e74", YEAR_MONTH_ABBR: "y\u5e74M\u6708", YEAR_MONTH_FULL: "y\u5e74M\u6708", MONTH_DAY_ABBR: "M\u6708d\u65e5", MONTH_DAY_FULL: "M\u6708dd\u65e5", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "M\u6708d\u65e5", MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5", WEEKDAY_MONTH_DAY_MEDIUM: "M\u6708d\u65e5EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5EEE", DAY_ABBR: "d\u65e5"};
g.i18n.DateTimePatterns_zh_HK = {YEAR_FULL: "y\u5e74", YEAR_FULL_WITH_ERA: "G y \u5e74", YEAR_MONTH_ABBR: "y \u5e74 M \u6708", YEAR_MONTH_FULL: "y \u5e74 M \u6708", MONTH_DAY_ABBR: "M\u6708d\u65e5", MONTH_DAY_FULL: "M\u6708dd\u65e5", MONTH_DAY_SHORT: "d/M", MONTH_DAY_MEDIUM: "M\u6708d\u65e5", MONTH_DAY_YEAR_MEDIUM: "y \u5e74 M \u6708 d \u65e5", WEEKDAY_MONTH_DAY_MEDIUM: "M\u6708d\u65e5 (EEE)", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y \u5e74 M \u6708 d \u65e5 (EEE)", DAY_ABBR: "d\u65e5"};
g.i18n.DateTimePatterns_zh_TW = {YEAR_FULL: "y\u5e74", YEAR_FULL_WITH_ERA: "G y \u5e74", YEAR_MONTH_ABBR: "y\u5e74M\u6708", YEAR_MONTH_FULL: "y\u5e74M\u6708", MONTH_DAY_ABBR: "M\u6708d\u65e5", MONTH_DAY_FULL: "M\u6708dd\u65e5", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "M\u6708d\u65e5", MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5", WEEKDAY_MONTH_DAY_MEDIUM: "M\u6708d\u65e5EEE", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "y\u5e74M\u6708d\u65e5EEE", DAY_ABBR: "d\u65e5"};
g.i18n.DateTimePatterns_zu = {YEAR_FULL: "y", YEAR_FULL_WITH_ERA: "y G", YEAR_MONTH_ABBR: "MMM y", YEAR_MONTH_FULL: "MMMM y", MONTH_DAY_ABBR: "MMM d", MONTH_DAY_FULL: "MMMM dd", MONTH_DAY_SHORT: "M/d", MONTH_DAY_MEDIUM: "MMMM d", MONTH_DAY_YEAR_MEDIUM: "MMM d, y", WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d", WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y", DAY_ABBR: "d"};

g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en;
"af" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_af);
"am" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_am);
"ar" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ar);
"az" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_az);
"bg" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_bg);
"bn" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_bn);
"br" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_br);
"ca" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ca);
"chr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_chr);
"cs" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_cs);
"cy" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_cy);
"da" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_da);
"de" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_de);
if ("de_AT" == g.LOCALE || "de-AT" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_de_AT;
if ("de_CH" == g.LOCALE || "de-CH" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_de_CH;
"el" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_el);
"en" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en);
if ("en_AU" == g.LOCALE || "en-AU" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_AU;
if ("en_GB" == g.LOCALE || "en-GB" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_GB;
if ("en_IE" == g.LOCALE || "en-IE" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_IE;
if ("en_IN" == g.LOCALE || "en-IN" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_IN;
if ("en_SG" == g.LOCALE || "en-SG" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_SG;
if ("en_US" == g.LOCALE || "en-US" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_US;
if ("en_ZA" == g.LOCALE || "en-ZA" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_en_ZA;
"es" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_es);
if ("es_419" == g.LOCALE || "es-419" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_es_419;
if ("es_ES" == g.LOCALE || "es-ES" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_es_ES;
"et" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_et);
"eu" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_eu);
"fa" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_fa);
"fi" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_fi);
"fil" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_fil);
"fr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_fr);
if ("fr_CA" == g.LOCALE || "fr-CA" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_fr_CA;
"gl" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_gl);
"gsw" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_gsw);
"gu" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_gu);
"haw" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_haw);
"he" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_he);
"hi" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_hi);
"hr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_hr);
"hu" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_hu);
"hy" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_hy);
"id" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_id);
"in" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_in);
"is" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_is);
"it" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_it);
"iw" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_iw);
"ja" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ja);
"ka" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ka);
"kk" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_kk);
"km" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_km);
"kn" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_kn);
"ko" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ko);
"ky" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ky);
"ln" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ln);
"lo" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_lo);
"lt" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_lt);
"lv" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_lv);
"mk" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_mk);
"ml" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ml);
"mn" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_mn);
"mo" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_mo);
"mr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_mr);
"ms" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ms);
"mt" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_mt);
"my" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_my);
"nb" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_nb);
"ne" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ne);
"nl" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_nl);
"no" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_no);
if ("no_NO" == g.LOCALE || "no-NO" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_no_NO;
"or" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_or);
"pa" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_pa);
"pl" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_pl);
"pt" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_pt);
if ("pt_BR" == g.LOCALE || "pt-BR" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_pt_BR;
if ("pt_PT" == g.LOCALE || "pt-PT" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_pt_PT;
"ro" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ro);
"ru" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ru);
"sh" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sh);
"si" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_si);
"sk" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sk);
"sl" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sl);
"sq" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sq);
"sr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sr);
"sv" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sv);
"sw" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_sw);
"ta" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ta);
"te" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_te);
"th" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_th);
"tl" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_tl);
"tr" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_tr);
"uk" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_uk);
"ur" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_ur);
"uz" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_uz);
"vi" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_vi);
"zh" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_zh);
if ("zh_CN" == g.LOCALE || "zh-CN" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_zh_CN;
if ("zh_HK" == g.LOCALE || "zh-HK" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_zh_HK;
if ("zh_TW" == g.LOCALE || "zh-TW" == g.LOCALE)g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_zh_TW;
"zu" == g.LOCALE && (g.i18n.DateTimePatterns = g.i18n.DateTimePatterns_zu);


k.SiteOverlayQuery = function (a, c, d, e) {
    this.viewId_ = a;
    this.segmentId_ = c;
    this.dateRange_ = d;
    this.pagePath_ = e
};
k.SiteOverlayQuery.prototype.execute = function (a, c) {
    var d = {ids: "ga:" + this.viewId_, dimensions: "ga:nextPagePath", metrics: "ga:pageviews", sort: "-ga:pageviews", filters: "ga:previousPagePath==" + this.pagePath_, "start-date": this.dateRange_.getStartDate().toIsoString(!0), "end-date": this.dateRange_.getEndDate().toIsoString(!0), quotaUser: k.GAClient.getInstance().getClientId()};
    this.segmentId_ !== k.ApiQuery.DEFAULT_SEGMENT_ID && (d.segment = "gaid::" + this.segmentId_);
    d = new k.ApiQuery(gapi.client.analytics.data.ga.get,
        d);
    d.executeQuery(g.bind(this.resultsHandler_, this, a), c)
};
k.SiteOverlayQuery.prototype.resultsHandler_ = function (a, c) {
    a(c)
};

k.LinkIdQuery = function (a, c, d, e) {
    this.viewId_ = a;
    this.segmentId_ = c;
    this.dateRange_ = d;
    this.pagePath_ = e
};
k.LinkIdQuery.HIDDEN_ID_PREFIX_ = "link__inpage_";
k.LinkIdQuery.prototype.execute = function (a, c) {
    var d = {
        ids: "ga:" + this.viewId_,
        dimensions: "ga:nextPagePath, ga:previousPageLinkId",
        metrics: "ga:pageviews",
        sort: "-ga:pageviews",
        filters: "ga:previousPagePath==" + this.pagePath_ + ";ga:previousPageLinkId!~^" + k.LinkIdQuery.HIDDEN_ID_PREFIX_,
        segment: "gaid::" + this.segmentId_,
        "start-date": this.dateRange_.getStartDate().toIsoString(!0),
        "end-date": this.dateRange_.getEndDate().toIsoString(!0),
        quotaUser: k.GAClient.getInstance().getClientId()},
        d = new k.ApiQuery(gapi.client.analytics.data.ga.get, d);
    d.executeQuery(g.bind(this.resultsHandler_, this, a), c)
};
k.LinkIdQuery.prototype.resultsHandler_ = function (a, c) {
    a(c)
};

k.SiteOverlayAction = function () {
};
k.SiteOverlayAction.prototype.setSettings = function (a) {
    this.settings_ = a
};
k.SiteOverlayAction.prototype.queryData = function (a) {
    var c = this,
        d = this.settings_.getSelectedSegments()[0],
        e = this.settings_.getSelectedView(),
        f = e.id,
        h = this.settings_.getPath(),
        l = this.settings_.getPrimaryDateRange(),
        m = this.settings_.getCompareDateRange(),
        n = [];
    n.push(new g.Promise(function (a, c) {
        var e = new k.SiteOverlayQuery(f, d.id, l, h);
        e.execute(a, c)
    }));
    m && n.push(new g.Promise(function (a, c) {
        var e = new k.SiteOverlayQuery(f, d.id, m, h);
        e.execute(a, c)
    }));
    n.push(new g.Promise(function (a, c) {
        var e = new k.LinkIdQuery(f,
            d.id, l, h);
        e.execute(a, c)
    }));
    m && n.push(new g.Promise(function (a, c) {
        var e = new k.LinkIdQuery(f, d.id, m, h);
        e.execute(a, c)
    }));
    g.Promise.all(n).then(function (f) {
        var h;
        m ? (h = [f[0], f[1]], f = [f[2], f[3]]) : (h = [f[0]], f = [f[1]]);
        h = c.generateViews_(h);
        c.generateLinkIds_(h, f);
        h = {
            type: k.MessageType.SITE_OVERLAY,
            data: {
                view: e,
                filters: c.settings_.getFilters(),
                segment: d,
                minimumPercent: c.settings_.getMinimumPercent(),
                showBubbles: c.settings_.getShowBubbles(),
                showColors: c.settings_.getShowColors(),
                inPageData: h
            }
        };
        a(h)
    })
};
k.SiteOverlayAction.prototype.generateViews_ = function (a) {
    for (var c = {Metrics: [{Name: "Clicks", ShortName: "Clicks"}], Views: {}, ViewNames: []}, d = 0; d < a.length; d++) {
        var e = a[d],
            f = this.generateViewName_(e.query),
            e = this.generateView_(f, e);
        c.ViewNames.push(f);
        c.Views[f] = e
    }
    return c
};
k.SiteOverlayAction.prototype.generateViewName_ = function (a) {
    var c = new g.i18n.DateTimeFormat(g.i18n.DateTimePatterns.MONTH_DAY_YEAR_MEDIUM),
        d = k.SiteOverlayAction.convertDate_(a["start-date"]),
        d = c.format(d);
    a = k.SiteOverlayAction.convertDate_(a["end-date"]);
    return d += " - " + c.format(a)
};
k.SiteOverlayAction.convertDate_ = function (a) {
    var c = a.split("-");
    a = parseInt(c[0], 10);
    var d = parseInt(c[1], 10) - 1,
        c = parseInt(c[2], 10);
    return new g.date.Date(a, d, c)
};
k.SiteOverlayAction.prototype.generateView_ = function (a, c) {
    var d = {
        DisplayNames: [a],
        Links: {},
        Totals: []
    };
    if (0 < c.totalResults) {
        var e = c.totalsForAllResults[k.Metric.PAGE_VIEW.id];
        d.Totals.push(e);
        for (var e = d.Links, f = 0; f < c.rows.length; f++) {
            var h = c.rows[f], l = h[0], h = h[1];
            e[l] = {Values: [h]}
        }
    }
    return d
};
k.SiteOverlayAction.prototype.generateLinkIds_ = function (a, c) {
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e && 0 !== e.totalResults)
            for (var f = this.generateViewName_(e.query), f = a.Views[f], h = 0; h < e.rows.length; h++) {
            var l = e.rows[h], m = l[0], n = l[1], l = l[2];
            if (m = f.Links[m]) {
                var p = m.Ids;
                p || (p = {});
                p[n] = [l];
                m.Ids = p
            }
        }
    }
};

/*------------------------------- Background Start --------------------------------------------*/
k.Background = function (a, c) {
    this.auth_ = new k.Auth(g.bind(this.initialize_, this), g.bind(this.stopExtension_, this));
    this.config_ = a;
    this.realTimeController_ = new k.RealTimeController;
    this.tabs_ = new g.structs.Map;
    this.gaClient_ = c;
    this.gaRequestInterceptor_ = new k.GaRequestInterceptor
};
b = k.Background.prototype;
b.setManagement = function (a) {
    this.management_ = a
};
b.initListeners = function () {
    var a = this;
    chrome.tabs.onRemoved.addListener(function (c) {
        var d = a.tabs_.get(c);
        d && a.cleanTab_(c)
    });
    chrome.tabs.onReplaced.addListener(function (c) {
        a.isConnected_() && chrome.tabs.get(c, function (c) {
            a.findWebProperties_(c)
        })
    });
    chrome.tabs.onUpdated.addListener(g.bind(this.onTabsUpdated_, this));
    chrome.runtime.onMessage.addListener(g.bind(this.onMessage, this));
    this.gaRequestInterceptor_.init()
};
b.onTabsUpdated_ = function (a, c, d) {
    this.isConnected_() && "complete" == c.status && this.findWebProperties_(d)
};
b.onMessage = function (a, c, d) {
    c = c.tab;
    switch (a.type) {
        case k.MessageType.GET_POPUP_SETTINGS:
            return k.Background.getCurrentTab_(g.bind(this.getPopupSettings_, this, d)), !0;
        case k.MessageType.UPDATE_POPUP_SETTINGS:
            k.Background.getCurrentTab_(g.bind(this.onUpdatePopupSettings_, this, a.position));
            break;
        case k.MessageType.UPDATE_TAB_SETTINGS:
            if (c)return this.onUpdateTabSettings_(c, a, d);
            break;
        case k.MessageType.UPDATE_DATA:
            this.onUpdateData_(c.id, a.data);
            break;
        case k.MessageType.EXIT:
            k.Background.getCurrentTab_(g.bind(this.onExit_,
                this));
            break;
        case k.MessageType.GA_EVENT:
            this.sendGAEvent_(a.category, a.action, a.label)
    }
    return!1
};
b.getPopupSettings_ = function (a, c) {
    var d = this.getTabSettings(c.id), e = {connected: this.isConnected_()};
    d && (e.position = d.getPosition());
    a(e)
};
b.onUpdatePopupSettings_ = function (a, c) {
    var d = this.getTabSettings(c.id), e = d.getPosition();
    g.isDefAndNotNull(a) && a != e && (d.setPosition(a), this.config_.saveWebsiteSettings(d), a == k.PositionType.NONE ? this.sendExitMessage_(c) : e === k.PositionType.NONE ? k.Background.getCurrentTab_(g.bind(this.findWebProperties_, this)) : this.changePosition_(a, c))
};
b.sendGAHit_ = function (a) {
    var c = a.getPrimaryDateRange(), d = a.getPosition();
    this.gaClient_.sendAppView({fullMode: a.isFullMode(), showBubbles: a.getShowBubbles(), numberOfSegments: a.getSelectedSegments().length, dateInterval: k.DateRange.getDateIntervalString(c), dateComparisonMode: !!a.getCompareDateRange(), position: k.PositionType.toString(d)})
};
b.sendGAEvent_ = function (a, c, d) {
    this.gaClient_.sendEvent(a, c, d)
};
b.onUpdateTabSettings_ = function (a, c, d) {
    var e = a.id, f = a.url, h = this.getTabSettings(e);
    if (a = c.model)"dateOption"in a && h.setDateOption(a.dateOption), "hasComparison"in a && h.setHasComparison(a.hasComparison), "primaryDates"in a && (e = a.primaryDates, e = k.DateRange.fromArray(e), h.setPrimaryDateRange(e)), "compareDates"in a && (a = a.compareDates, a = k.DateRange.fromArray(a), h.setCompareDateRange(a));
    "segments"in c && h.setSelectedSegments(c.segments);
    "showBubbles"in c && (h.showBubbles(c.showBubbles), this.sendGAEvent_(k.GAEvent.Category.USER_ACTIONS,
        k.GAEvent.Action.SHOW_BUBBLES));
    "showColors"in c && (h.showColors(c.showColors), this.sendGAEvent_(k.GAEvent.Category.USER_ACTIONS, k.GAEvent.Action.SHOW_COLORS));
    "minimumPercent"in c && h.setMinimumPercent(c.minimumPercent);
    "fullMode"in c && h.setFullMode(c.fullMode);
    if ("view"in c) {
        var l = c.view, m = this;
        this.management_.getViewFilters(l.accountId, l.webPropertyId, l.id).then(function (a) {
            h.setSelectedView(l, a, f);
            m.config_.saveWebsiteSettings(h);
            d(h.getPath());
            m.sendGAHit_(h)
        });
        return!0
    }
    this.config_.saveWebsiteSettings(h);
    d(null);
    this.sendGAHit_(h);
    return!1
};
b.onUpdateData_ = function (a, c) {
    switch (c) {
        case k.DataType.RESTART:
            this.realTimeController_.stop(a);
            this.initContentScript_(a);
            break;
        case k.DataType.ALL:
            this.getAnalyticsData_(a);
            break;
        case k.DataType.PAGE_DATA:
            this.getPageData_(a);
            break;
        case k.DataType.SITE_OVERLAY:
            this.getSiteOverlayData_(a)
    }
};
b.onExit_ = function (a) {
    var c = this.getTabSettings(a.id);
    c.setPosition(k.PositionType.NONE);
    this.config_.saveWebsiteSettings(c);
    this.sendExitMessage_(a)
};
k.Background.getCurrentTab_ = function (a) {
    chrome.tabs.query({currentWindow: !0, active: !0}, function (c) {
        c && 0 < c.length && a(c[0])
    })
};
b = k.Background.prototype;
b.sendExitMessage_ = function (a) {
    this.realTimeController_.stop(a.id);
    chrome.tabs.sendMessage(a.id, {type: k.MessageType.EXIT});
    this.sendGAEvent_(k.GAEvent.Category.USER_ACTIONS, k.GAEvent.Action.EXIT)
};
b.stopExtension_ = function () {
    var a = this, c = this.tabs_.getKeyIterator();
    g.iter.forEach(c, function (c) {
        a.realTimeController_.stop(c);
        chrome.tabs.sendMessage(c, {type: k.MessageType.EXIT})
    });
    this.tabs_.clear()
};
b.changePosition_ = function (a, c) {
    chrome.tabs.sendMessage(c.id, {type: k.MessageType.CHANGE_POSITION, position: a});
    this.sendGAHit_(this.getTabSettings(c.id));
    this.sendGAEvent_(k.GAEvent.Category.USER_ACTIONS, k.GAEvent.Action.CHANGE_POSITION, k.PositionType.toString(a))
};
b.isConnected_ = function () {
    return this.auth_.isAuthenticated()
};
b.connect = function () {
    this.auth_.connect()
};
b.initialize_ = function () {
    this.isConnected_() && (this.config_.loadConfig(), this.management_.loadManagementInfo(), k.Metric.loadMetrics())
};
b.findWebProperties_ = function (a) {
    var c = a.id, d = a.url, e = [], f = this.gaRequestInterceptor_.getDataForTab(c);
    f && (e = this.management_.getWebPropertiesByIds(f));
    0 === e.length && (e = this.management_.getWebPropertiesByUrl(d));
    if (d = e && 0 < e.length) {
        var h = this;
        this.createTabSettings_(a, e, function (a) {
            a.getShowPageData() && h.initContentScript_(c)
        })
    } else(a = this.getTabSettings(c)) && this.cleanTab_(c)
};
b.createTabSettings_ = function (a, c, d) {
    var e = a.id, f = a.url, h = this, l = k.BgUtils.getSiteId(f), m = this.tabs_.get(e);
    m && m.getSiteId() === l || (m = new k.TabSettings(l));
    var n = this.createAccountMap_(c);
    a = this.createGetViewsPromises_(c);
    var p;
    g.Promise.all(a).then(function (a) {
        h.setWebPropertyViews_(n, a);
        a = n.getValues();
        m.setAccounts(a);
        var d = h.config_.getWebsiteSettings(l), e = d && d.viewId, f = c[0];
        p = h.getSelectedView_(a, e, f);
        m.setWebsiteSettings(d);
        a = h.management_.getSegments()[0];
        m.setSelectedSegments([a]);
        return h.management_.getViewFilters(p.accountId,
            p.webPropertyId, p.id)
    }).then(function (a) {
        m.setSelectedView(p, a, f);
        h.tabs_.set(e, m);
        d(m)
    })
};
b.createAccountMap_ = function (a) {
    for (var c = new g.structs.Map, d = 0; d < a.length; d++) {
        var e = a[d], f = e.accountId, h = c.get(f);
        h || (h = g.object.clone(this.management_.getAccount(f)), h.wprops = []);
        h.wprops.push(e);
        c.set(f, h)
    }
    return c
};
b.createGetViewsPromises_ = function (a) {
    for (var c = [], d = 0; d < a.length; d++) {
        var e = a[d], f = e.accountId, e = this.management_.getViews(f, e.id);
        c.push(e)
    }
    return c
};
b.setWebPropertyViews_ = function (a, c) {
    for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e && 0 < e.length)for (var f = e[0].accountId, h = e[0].webPropertyId, f = a.get(f).wprops, l = 0; l < f.length; l++) {
            var m = f[l];
            m.id == h && (m.views = e)
        }
    }
};
b.getSelectedView_ = function (a, c, d) {
    var e = null;
    c && (e = k.BgUtils.findViewInAccounts(a, c));
    e || (c = d.defaultProfileId) && (e = k.BgUtils.findViewInAccounts(a, c));
    e || (e = a[0].wprops[0].views[0]);
    return e
};
b.initContentScript_ = function (a) {
    var c = this.tabs_.get(a);
    c.isFullMode() ? this.initFullPanel_(a, c) : this.initCompactPanel_(a, c);
    this.getAnalyticsData_(a);
    this.sendGAHit_(c)
};
b.cleanTab_ = function (a) {
    this.realTimeController_.stop(a);
    this.tabs_.remove(a)
};
b.getTabSettings = function (a) {
    return this.tabs_.get(a)
};
g.exportSymbol("gaext.Background.prototype.getTabSettings", k.Background.prototype.getTabSettings);
b = k.Background.prototype;
b.initFullPanel_ = function (a, c) {
    var d = c.getDateOption(), e = c.getHasComparison(), f = null, h = null;
    d || (f = c.getPrimaryDateRange(), h = c.getCompareDateRange());
    d = {type: k.MessageType.INIT_FULL_VIEW, data: {accounts: c.getAccounts(), view: c.getSelectedView(), pagePath: c.getPath(), selectedSegments: c.getSelectedSegments(), dateOption: d, hasComparison: e, primaryDates: k.DateRange.toArray(f), compareDates: k.DateRange.toArray(h), allSegments: this.management_.getSegments(), metrics: k.Metric.SCORECARD_METRICS, position: c.getPosition(),
        showBubbles: c.getShowBubbles(), showColors: c.getShowColors(), minPercent: c.getMinimumPercent()}};
    chrome.tabs.sendMessage(a, d)
};
b.initCompactPanel_ = function (a, c) {
    var d = c.getDateOption(), e = c.getHasComparison(), f = null, h = null;
    d || (f = c.getPrimaryDateRange(), h = c.getCompareDateRange());
    d = {type: k.MessageType.INIT_COMPACT_VIEW, data: {view: c.getSelectedView(), pagePath: c.getPath(), dateOption: d, hasComparison: e, primaryDates: k.DateRange.toArray(f), compareDates: k.DateRange.toArray(h), selectedSegments: c.getSelectedSegments(), position: c.getPosition()}};
    chrome.tabs.sendMessage(a, d)
};
b.getAnalyticsData_ = function (a) {
    var c = this.getTabSettings(a);
    this.realTimeController_.start(a, c);
    c.isFullMode() && this.getPageData_(a);
    c.isFullMode() && c.getShowBubbles() && this.getSiteOverlayData_(a)
};
b.getSiteOverlayData_ = function (a) {
    var c = this.getTabSettings(a), d = new k.SiteOverlayAction;
    d.setSettings(c);
    d.queryData(function (c) {
        chrome.tabs.sendMessage(a, c)
    })
};
b.getPageData_ = function (a) {
    for (var c = this.getTabSettings(a), d = c.getSelectedSegments(), e = c.getPath(), f = c.getPrimaryDateRange(), h = c.getCompareDateRange(), l = 0; l < d.length; l++) {
        var m = d[l].id, n;
        h ? (n = new k.ComparisonQuery(c.getSelectedView().id, m, f, h, e), n.execute(g.bind(this.handleComparison_, this, a, m))) : (n = new k.MetricQuery(c.getSelectedView().id, m, f, e), n.execute(g.bind(this.handlePageData_, this, a, m)))
    }
};
b.handlePageData_ = function (a, c, d) {
    c = {type: k.MessageType.TIME_RANGE, segmentId: c, data: d};
    chrome.tabs.sendMessage(a, c)
};
b.handleComparison_ = function (a, c, d) {
    c = {type: k.MessageType.COMPARISON, segmentId: c, data: d};
    chrome.tabs.sendMessage(a, c)
};
/*------------------------------- Background End --------------------------------------------*/


/*------------------------------- websiteSettings Start --------------------------------------------*/
k.Config = function () {
    this.websiteSettings_ = new g.structs.Map
};
k.Config.prototype.loadConfig = function () {
    var a = this;
    chrome.storage.sync.get("websiteSettings", function (c) {
        c && (c = c.websiteSettings) && (a.websiteSettings_ = new g.structs.Map(c))
    })
};
k.Config.prototype.saveWebsiteSettings = function (a) {
    a && (this.websiteSettings_.set(a.getSiteId(), a.getWebsiteSettings()), chrome.storage.sync.set({websiteSettings: this.websiteSettings_.toObject()}))
};
k.Config.prototype.getWebsiteSettings = function (a) {
    return this.websiteSettings_.get(a)
};
/*------------------------------- websiteSettings End --------------------------------------------*/


/*------------------------------- Management Start --------------------------------------------*/
k.Management = function () {
    this.accounts_ = new g.structs.Map;
    this.webPropertiesById_ = new g.structs.Map;
    this.webPropertiesByUrl_ = new g.structs.Map;
    this.segments_ = [];
    this.cache_ = {
        accountFilters: {},
        webPropertyViews: {},
        viewFilters: {}
    }
};
k.Management.GOOGLE_DOMAIN_ = /^http(s)?:\/\/(www\.)?google\.com(\/)?$/;
k.Management.ACCOUNT_FIELDS_ = "items(id,name)";
k.Management.WEB_PROPERTY_FIELDS_ = "items(accountId,defaultProfileId,id,internalWebPropertyId,name,profileCount,websiteUrl)";
k.Management.SEGMENT_FIELDS_ = "items(id,name)";
k.Management.VIEWS_FIELDS_ = "items(accountId,defaultPage,excludeQueryParameters,id,internalWebPropertyId,name,webPropertyId)";
b = k.Management.prototype;
b.loadManagementInfo = function () {
    gapi.client.analytics.management.accounts.list({fields: k.Management.ACCOUNT_FIELDS_}).execute(g.bind(this.handleAccounts_, this));
    gapi.client.analytics.management.webproperties.list({accountId: "~all", fields: k.Management.WEB_PROPERTY_FIELDS_}).execute(g.bind(this.handleWebProperties_, this));
    gapi.client.analytics.management.segments.list({fields: k.Management.SEGMENT_FIELDS_}).execute(g.bind(this.handleSegments_, this))
};
b.handleAccounts_ = function (a) {
    if (a && !a.error && a.items.length) {
        a = a.items;
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.accounts_.set(d.id, d)
        }
    }
};
b.handleWebProperties_ = function (a) {
    if (a && !a.error && a.items.length) {
        a = a.items;
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (0 < d.profileCount) {
                this.webPropertiesById_.set(d.id, d);
                var e = d.websiteUrl, f = !k.Management.GOOGLE_DOMAIN_.test(e);
                e && f && this.addWebPropertyByUrl_(d)
            }
        }
    }
};
b.addWebPropertyByUrl_ = function (a) {
    var c = new g.Uri(a.websiteUrl), d = this.webPropertiesByUrl_.get(c);
    d || (d = []);
    d.push(a);
    this.webPropertiesByUrl_.set(c, d)
};
b.getWebPropertiesByIds = function (a) {
    return this.webPropertiesById_.getValues().filter(function (c) {
        return-1 != a.indexOf(c.id)
    })
};
b.getWebPropertiesByUrl = function (a) {
    a = new g.Uri(a);
    for (var c = [], d = this.webPropertiesByUrl_.getKeys(), e = 0; e < d.length; e++) {
        var f = !1, h = d[e], l = a.getDomain(), m = g.string.regExpEscape(h.getDomain()), m = new RegExp("^(\\w+\\.)*" + m + "$", "i");
        l.match(m) && (l = a.getPath(), m = g.string.regExpEscape(h.getPath()), 0 < m.length ? (m = new RegExp("^" + m + "(/.*)?$", "i"), l.match(m) && (f = !0)) : f = !0);
        f && (c = c.concat(this.webPropertiesByUrl_.get(h)))
    }
    return c
};
b.handleSegments_ = function (a) {
    a && !a.code && a.items && a.items.length && (this.segments_ = a.items)
};
b.getAccount = function (a) {
    return this.accounts_.get(a)
};
b.getViews = function (a, c) {
    var d = this;
    return new g.Promise(function (e, f) {
        a && c || f(null);
        var h = d.cache_.webPropertyViews[c];
        h ? e(h) : gapi.client.analytics.management.profiles.list({accountId: a, webPropertyId: c, fields: k.Management.VIEWS_FIELDS_}).execute(function (a) {
            var h = a.items;
            a && h && 0 < h.length ? (g.array.sort(h, function (a, c) {
                return g.string.caseInsensitiveCompare(a.name, c.name)
            }), d.cache_.webPropertyViews[c] = h, e(h)) : a.error ? f(Error(a.message)) : f(null)
        })
    })
};
b.getViewFilters = function (a, c, d) {
    var e = this, f;
    return this.getViewFilterIds_(a, c, d).then(function (c) {
        f = c;
        return e.getAccountFilters_(a)
    }).then(function (a) {
        for (var c = [], d = 0; d < f.length; d++)for (var e = f[d], p = 0; p < a.length; p++) {
            var q = a[p];
            q.id == e && c.push(q)
        }
        return c
    })
};
b.getViewFilterIds_ = function (a, c, d) {
    var e = this;
    return new g.Promise(function (f, h) {
        a && c && d || h(null);
        var l = e.cache_.viewFilters[d];
        l ? f(l) : gapi.client.analytics.management.profileFilterLinks.list({accountId: a, webPropertyId: c, profileId: d, fields: "items(filterRef(id))"}).execute(function (a) {
            if (a.error)
                h(Error(a.message));
            else {
                var c = [];
                if (a && a.items)
                    for (var l = 0; l < a.items.length; l++) {
                        var q = a.items[l];
                        c.push(q.filterRef.id)
                    }
                e.cache_.viewFilters[d] = c;
                f(c)
            }
        })
    })
};
b.getAccountFilters_ = function (a) {
    var c = this;
    return new g.Promise(function (d, e) {
        a || e(null);
        var f = c.cache_.accountFilters[a];
        f ? d(f) : gapi.client.analytics.management.filters.list({accountId: a}).execute(function (f) {
            if (f.error)e(Error(f.message)); else {
                var l = [];
                f && f.items && 0 < f.items.length && (l = f.items);
                c.cache_.accountFilters[a] = l;
                d(l)
            }
        })
    })
};
b.getSegments = function () {
    return this.segments_
};
/*------------------------------- Management End --------------------------------------------*/

//GA客户端回调方法
var w = function () {
    var a = new k.Config,
        c = k.GAClient.getInstance(),
        a = new k.Background(a, c);
    a.setManagement(new k.Management);
    a.connect();
    a.initListeners()
};
g.exportSymbol("gaextOnGapiClientLoadCallback", w);

//异步加载google+ 登录API ,并回调GA客户端回调方法 gaextOnGapiClientLoadCallback
var y = document.createElement("script"),
    z = document.getElementsByTagName("script")[0];
y.type = "text/javascript";
y.async = !0;
//y.src = "https://apis.google.com/js/client:plusone.js?onload=gaextOnGapiClientLoadCallback";
y.src = "./js/client:plusone.js?onload=gaextOnGapiClientLoadCallback";
z.parentNode.insertBefore(y, z);
