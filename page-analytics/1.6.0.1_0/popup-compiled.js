/**
 * 代码翻译：听歌
 * 电子邮件：505253293@163.com
 * 新浪微博：http://blog.sina.com.cn/tinggebar
 * 代码地址：https://chrome.google.com/webstore/detail/page-analytics-by-google/fnbdnhhicmebfgdgglcdacdapkcihcoh?hl=en
 * 文档地址：
 * @fileoverview Page Analytics（分析）Chrome扩展代码：弹出内容的网页。
 */


'use strict';
var b, f = f || {};
f.global = this;
f.isDef = function (a) {
    return void 0 !== a
};
f.exportPath_ = function (a, c, d) {
    a = a.split(".");
    d = d || f.global;
    a[0]in d || !d.execScript || d.execScript("var " + a[0]);
    for (var e; a.length && (e = a.shift());)!a.length && f.isDef(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
};
f.define = function (a, c) {
    var d = c;
    f.exportPath_(a, d)
};
f.DEBUG = !0;
f.LOCALE = "en";
f.TRUSTED_SITE = !0;
f.STRICT_MODE_COMPATIBLE = !1;
f.provide = function (a) {
    f.exportPath_(a)
};
f.setTestOnly = function (a) {
    if (!f.DEBUG)throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
};
f.forwardDeclare = function () {
};
f.getObjectByName = function (a, c) {
    for (var d = a.split("."), e = c || f.global, g; g = d.shift();)if (f.isDefAndNotNull(e[g]))e = e[g]; else return null;
    return e
};
f.globalize = function (a, c) {
    var d = c || f.global, e;
    for (e in a)d[e] = a[e]
};
f.addDependency = function (a, c, d) {
    if (f.DEPENDENCIES_ENABLED) {
        var e;
        a = a.replace(/\\/g, "/");
        for (var g = f.dependencies_, h = 0; e = c[h]; h++)g.nameToPath[e] = a, a in g.pathToNames || (g.pathToNames[a] = {}), g.pathToNames[a][e] = !0;
        for (e = 0; c = d[e]; e++)a in g.requires || (g.requires[a] = {}), g.requires[a][c] = !0
    }
};
f.useStrictRequires = !1;
f.ENABLE_DEBUG_LOADER = !0;
f.require = function () {
};
f.basePath = "";
f.nullFunction = function () {
};
f.identityFunction = function (a) {
    return a
};
f.abstractMethod = function () {
    throw Error("unimplemented abstract method");
};
f.addSingletonGetter = function (a) {
    a.getInstance = function () {
        if (a.instance_)return a.instance_;
        f.DEBUG && (f.instantiatedSingletons_[f.instantiatedSingletons_.length] = a);
        return a.instance_ = new a
    }
};
f.instantiatedSingletons_ = [];
f.DEPENDENCIES_ENABLED = !1;
f.DEPENDENCIES_ENABLED && (f.included_ = {}, f.dependencies_ = {pathToNames: {}, nameToPath: {}, requires: {}, visited: {}, written: {}}, f.inHtmlDocument_ = function () {
    var a = f.global.document;
    return"undefined" != typeof a && "write"in a
}, f.findBasePath_ = function () {
    if (f.global.CLOSURE_BASE_PATH)f.basePath = f.global.CLOSURE_BASE_PATH; else if (f.inHtmlDocument_())for (var a = f.global.document, a = a.getElementsByTagName("script"), c = a.length - 1; 0 <= c; --c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e -
            7, 7)) {
            f.basePath = d.substr(0, e - 7);
            break
        }
    }
}, f.importScript_ = function (a) {
    var c = f.global.CLOSURE_IMPORT_SCRIPT || f.writeScriptTag_;
    !f.dependencies_.written[a] && c(a) && (f.dependencies_.written[a] = !0)
}, f.writeScriptTag_ = function (a) {
    if (f.inHtmlDocument_()) {
        var c = f.global.document;
        if ("complete" == c.readyState) {
            if (c = /\bdeps.js$/.test(a))return!1;
            throw Error('Cannot write "' + a + '" after document load');
        }
        c.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
        return!0
    }
    return!1
}, f.writeScripts_ = function () {
    function a(g) {
        if (!(g in
            e.written)) {
            if (!(g in e.visited) && (e.visited[g] = !0, g in e.requires))for (var l in e.requires[g])if (!f.isProvided_(l))if (l in e.nameToPath)a(e.nameToPath[l]); else throw Error("Undefined nameToPath for " + l);
            g in d || (d[g] = !0, c.push(g))
        }
    }

    var c = [], d = {}, e = f.dependencies_, g;
    for (g in f.included_)e.written[g] || a(g);
    for (g = 0; g < c.length; g++)if (c[g])f.importScript_(f.basePath + c[g]); else throw Error("Undefined script input");
}, f.getPathFromDeps_ = function (a) {
    return a in f.dependencies_.nameToPath ? f.dependencies_.nameToPath[a] :
        null
}, f.findBasePath_(), f.global.CLOSURE_NO_DEPS || f.importScript_(f.basePath + "deps.js"));
f.typeOf = function (a) {
    var c = typeof a;
    if ("object" == c)if (a) {
        if (a instanceof Array)return"array";
        if (a instanceof Object)return c;
        var d = Object.prototype.toString.call(a);
        if ("[object Window]" == d)return"object";
        if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
        if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
    } else return"null";
    else if ("function" == c && "undefined" == typeof a.call)return"object";
    return c
};
f.isNull = function (a) {
    return null === a
};
f.isDefAndNotNull = function (a) {
    return null != a
};
f.isArray = function (a) {
    return"array" == f.typeOf(a)
};
f.isArrayLike = function (a) {
    var c = f.typeOf(a);
    return"array" == c || "object" == c && "number" == typeof a.length
};
f.isDateLike = function (a) {
    return f.isObject(a) && "function" == typeof a.getFullYear
};
f.isString = function (a) {
    return"string" == typeof a
};
f.isBoolean = function (a) {
    return"boolean" == typeof a
};
f.isNumber = function (a) {
    return"number" == typeof a
};
f.isFunction = function (a) {
    return"function" == f.typeOf(a)
};
f.isObject = function (a) {
    var c = typeof a;
    return"object" == c && null != a || "function" == c
};
f.getUid = function (a) {
    return a[f.UID_PROPERTY_] || (a[f.UID_PROPERTY_] = ++f.uidCounter_)
};
f.hasUid = function (a) {
    return!!a[f.UID_PROPERTY_]
};
f.removeUid = function (a) {
    "removeAttribute"in a && a.removeAttribute(f.UID_PROPERTY_);
    try {
        delete a[f.UID_PROPERTY_]
    } catch (c) {
    }
};
f.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
f.uidCounter_ = 0;
f.getHashCode = f.getUid;
f.removeHashCode = f.removeUid;
f.cloneObject = function (a) {
    var c = f.typeOf(a);
    if ("object" == c || "array" == c) {
        if (a.clone)return a.clone();
        var c = "array" == c ? [] : {}, d;
        for (d in a)c[d] = f.cloneObject(a[d]);
        return c
    }
    return a
};
f.bindNative_ = function (a, c, d) {
    return a.call.apply(a.bind, arguments)
};
f.bindJs_ = function (a, c, d) {
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
f.bind = function (a, c, d) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? f.bind = f.bindNative_ : f.bind = f.bindJs_;
    return f.bind.apply(null, arguments)
};
f.partial = function (a, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
        var c = d.slice();
        c.push.apply(c, arguments);
        return a.apply(this, c)
    }
};
f.mixin = function (a, c) {
    for (var d in c)a[d] = c[d]
};
f.now = f.TRUSTED_SITE && Date.now || function () {
    return+new Date
};
f.globalEval = function (a) {
    if (f.global.execScript)f.global.execScript(a, "JavaScript"); else if (f.global.eval)if (null == f.evalWorksForGlobals_ && (f.global.eval("var _et_ = 1;"), "undefined" != typeof f.global._et_ ? (delete f.global._et_, f.evalWorksForGlobals_ = !0) : f.evalWorksForGlobals_ = !1), f.evalWorksForGlobals_)f.global.eval(a); else {
        var c = f.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d)
    } else throw Error("goog.globalEval not available");
};
f.evalWorksForGlobals_ = null;
f.getCssName = function (a, c) {
    var d = function (a) {
        return f.cssNameMapping_[a] || a
    }, e = function (a) {
        a = a.split("-");
        for (var c = [], e = 0; e < a.length; e++)c.push(d(a[e]));
        return c.join("-")
    }, e = f.cssNameMapping_ ? "BY_WHOLE" == f.cssNameMappingStyle_ ? d : e : function (a) {
        return a
    };
    return c ? a + "-" + e(c) : e(a)
};
f.setCssNameMapping = function (a, c) {
    f.cssNameMapping_ = a;
    f.cssNameMappingStyle_ = c
};
f.getMsg = function (a, c) {
    c && (a = a.replace(/\{\$([^}]+)}/g, function (a, e) {
        return e in c ? c[e] : a
    }));
    return a
};
f.getMsgWithFallback = function (a) {
    return a
};
f.exportSymbol = function (a, c, d) {
    f.exportPath_(a, c, d)
};
f.exportProperty = function (a, c, d) {
    a[c] = d
};
f.inherits = function (a, c) {
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
f.base = function (a, c, d) {
    var e = arguments.callee.caller;
    if (f.STRICT_MODE_COMPATIBLE || f.DEBUG && !e)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if (e.superClass_)return e.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var g = Array.prototype.slice.call(arguments, 2), h = !1, l = a.constructor; l; l = l.superClass_ && l.superClass_.constructor)if (l.prototype[c] === e)h = !0; else if (h)return l.prototype[c].apply(a,
        g);
    if (a[c] === e)return a.constructor.prototype[c].apply(a, g);
    throw Error("goog.base called from a method of one name to a method of a different name");
};
f.scope = function (a) {
    a.call(f.global)
};
f.MODIFY_FUNCTION_PROTOTYPES = !0;
f.MODIFY_FUNCTION_PROTOTYPES && (Function.prototype.bind = Function.prototype.bind || function (a, c) {
    if (1 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 1);
        d.unshift(this, a);
        return f.bind.apply(null, d)
    }
    return f.bind(this, a)
}, Function.prototype.partial = function (a) {
    var c = Array.prototype.slice.call(arguments);
    c.unshift(this, null);
    return f.bind.apply(null, c)
}, Function.prototype.inherits = function (a) {
    f.inherits(this, a)
}, Function.prototype.mixin = function (a) {
    f.mixin(this.prototype, a)
});
f.defineClass = function (a, c) {
    var d = c.constructor, e = c.statics;
    d && d != Object.prototype.constructor || (d = function () {
        throw Error("cannot instantiate an interface (no constructor defined).");
    });
    d = f.defineClass.createSealingConstructor_(d, a);
    a && f.inherits(d, a);
    delete c.constructor;
    delete c.statics;
    f.defineClass.applyProperties_(d.prototype, c);
    null != e && (e instanceof Function ? e(d) : f.defineClass.applyProperties_(d, e));
    return d
};
f.defineClass.SEAL_CLASS_INSTANCES = f.DEBUG;
f.defineClass.createSealingConstructor_ = function (a, c) {
    if (f.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
        if (c && c.prototype && c.prototype[f.UNSEALABLE_CONSTRUCTOR_PROPERTY_])return a;
        var d = function () {
            var c = a.apply(this, arguments) || this;
            this.constructor === d && Object.seal(c);
            return c
        };
        return d
    }
    return a
};
f.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
f.defineClass.applyProperties_ = function (a, c) {
    for (var d in c)Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    for (var e = 0; e < f.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; e++)d = f.defineClass.OBJECT_PROTOTYPE_FIELDS_[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
};
f.tagUnsealableClass = function () {
};
f.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
var k = {};
k.GAEvent = {};
k.MessageType = {INIT_FULL_VIEW: "INIT_FULL_VIEW", INIT_COMPACT_VIEW: "INIT_COMPACT_VIEW", REAL_TIME: "REAL_TIME", TIME_RANGE: "TIME_RANGE", SITE_OVERLAY: "SITE_OVERLAY", COMPARISON: "COMPARISON", GET_POPUP_SETTINGS: "GET_POPUP_SETTINGS", UPDATE_POPUP_SETTINGS: "UPDATE_POPUP_SETTINGS", UPDATE_TAB_SETTINGS: "UPDATE_TAB_SETTINGS", UPDATE_DATA: "UPDATE_DATA", CHANGE_POSITION: "CHANGE_POSITION", EXIT: "EXIT", GA_EVENT: "GA_EVENT"};
k.PositionType = {TOP: 0, BOTTOM: 1, NONE: 2};
k.PositionType.toString = function (a) {
    return a == k.PositionType.TOP ? "Top" : a == k.PositionType.BOTTOM ? "Bottom" : "None"
};
k.DataType = {RESTART: "RESTART", ALL: "ALL", PAGE_DATA: "PAGE_DATA", SITE_OVERLAY: "SITE_OVERLAY"};
k.GAEvent.Category = {USER_ACTIONS: "User Actions"};
k.GAEvent.Action = {CHANGE_PROPERTY: "Change property", CHANGE_VIEW: "Change view", VIEW_IN_GA: "View data in GA", SEND_FEEDBACK: "Send Feedback", SHOW_BUBBLES: "Show Bubbles", SHOW_COLORS: "Show Colors", CHANGE_POSITION: "Change position", EXIT: "Exit"};
f.debug = {};
f.debug.Error = function (a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, f.debug.Error); else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a))
};
f.inherits(f.debug.Error, Error);
f.debug.Error.prototype.name = "CustomError";
f.dom = {};
f.dom.NodeType = {ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12};
f.string = {};
f.string.DETECT_DOUBLE_ESCAPING = !1;
f.string.Unicode = {NBSP: "\u00a0"};
f.string.startsWith = function (a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
f.string.endsWith = function (a, c) {
    var d = a.length - c.length;
    return 0 <= d && a.indexOf(c, d) == d
};
f.string.caseInsensitiveStartsWith = function (a, c) {
    return 0 == f.string.caseInsensitiveCompare(c, a.substr(0, c.length))
};
f.string.caseInsensitiveEndsWith = function (a, c) {
    return 0 == f.string.caseInsensitiveCompare(c, a.substr(a.length - c.length, c.length))
};
f.string.caseInsensitiveEquals = function (a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
f.string.subs = function (a, c) {
    for (var d = a.split("%s"), e = "", g = Array.prototype.slice.call(arguments, 1); g.length && 1 < d.length;)e += d.shift() + g.shift();
    return e + d.join("%s")
};
f.string.collapseWhitespace = function (a) {
    return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
f.string.isEmpty = function (a) {
    return/^[\s\xa0]*$/.test(a)
};
f.string.isEmptySafe = function (a) {
    return f.string.isEmpty(f.string.makeSafe(a))
};
f.string.isBreakingWhitespace = function (a) {
    return!/[^\t\n\r ]/.test(a)
};
f.string.isAlpha = function (a) {
    return!/[^a-zA-Z]/.test(a)
};
f.string.isNumeric = function (a) {
    return!/[^0-9]/.test(a)
};
f.string.isAlphaNumeric = function (a) {
    return!/[^a-zA-Z0-9]/.test(a)
};
f.string.isSpace = function (a) {
    return" " == a
};
f.string.isUnicodeChar = function (a) {
    return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
};
f.string.stripNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)+/g, " ")
};
f.string.canonicalizeNewlines = function (a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n")
};
f.string.normalizeWhitespace = function (a) {
    return a.replace(/\xa0|\s/g, " ")
};
f.string.normalizeSpaces = function (a) {
    return a.replace(/\xa0|[ \t]+/g, " ")
};
f.string.collapseBreakingSpaces = function (a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
f.string.trim = function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
f.string.trimLeft = function (a) {
    return a.replace(/^[\s\xa0]+/, "")
};
f.string.trimRight = function (a) {
    return a.replace(/[\s\xa0]+$/, "")
};
f.string.caseInsensitiveCompare = function (a, c) {
    var d = String(a).toLowerCase(), e = String(c).toLowerCase();
    return d < e ? -1 : d == e ? 0 : 1
};
f.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
f.string.numerateCompare = function (a, c) {
    if (a == c)return 0;
    if (!a)return-1;
    if (!c)return 1;
    for (var d = a.toLowerCase().match(f.string.numerateCompareRegExp_), e = c.toLowerCase().match(f.string.numerateCompareRegExp_), g = Math.min(d.length, e.length), h = 0; h < g; h++) {
        var l = d[h], p = e[h];
        if (l != p)return d = parseInt(l, 10), !isNaN(d) && (e = parseInt(p, 10), !isNaN(e) && d - e) ? d - e : l < p ? -1 : 1
    }
    return d.length != e.length ? d.length - e.length : a < c ? -1 : 1
};
f.string.urlEncode = function (a) {
    return encodeURIComponent(String(a))
};
f.string.urlDecode = function (a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
};
f.string.newLineToBr = function (a, c) {
    return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
};
f.string.htmlEscape = function (a, c) {
    if (c)a = a.replace(f.string.AMP_RE_, "&amp;").replace(f.string.LT_RE_, "&lt;").replace(f.string.GT_RE_, "&gt;").replace(f.string.QUOT_RE_, "&quot;").replace(f.string.SINGLE_QUOTE_RE_, "&#39;").replace(f.string.NULL_RE_, "&#0;"), f.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(f.string.E_RE_, "&#101;")); else {
        if (!f.string.ALL_RE_.test(a))return a;
        -1 != a.indexOf("&") && (a = a.replace(f.string.AMP_RE_, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(f.string.LT_RE_, "&lt;"));
        -1 != a.indexOf(">") &&
        (a = a.replace(f.string.GT_RE_, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(f.string.QUOT_RE_, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(f.string.SINGLE_QUOTE_RE_, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(f.string.NULL_RE_, "&#0;"));
        f.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(f.string.E_RE_, "&#101;"))
    }
    return a
};
f.string.AMP_RE_ = /&/g;
f.string.LT_RE_ = /</g;
f.string.GT_RE_ = />/g;
f.string.QUOT_RE_ = /"/g;
f.string.SINGLE_QUOTE_RE_ = /'/g;
f.string.NULL_RE_ = /\x00/g;
f.string.E_RE_ = /e/g;
f.string.ALL_RE_ = f.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
f.string.unescapeEntities = function (a) {
    return f.string.contains(a, "&") ? "document"in f.global ? f.string.unescapeEntitiesUsingDom_(a) : f.string.unescapePureXmlEntities_(a) : a
};
f.string.unescapeEntitiesWithDocument = function (a, c) {
    return f.string.contains(a, "&") ? f.string.unescapeEntitiesUsingDom_(a, c) : a
};
f.string.unescapeEntitiesUsingDom_ = function (a, c) {
    var d = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'}, e;
    e = c ? c.createElement("div") : f.global.document.createElement("div");
    return a.replace(f.string.HTML_ENTITY_PATTERN_, function (a, c) {
        var l = d[a];
        if (l)return l;
        if ("#" == c.charAt(0)) {
            var p = Number("0" + c.substr(1));
            isNaN(p) || (l = String.fromCharCode(p))
        }
        l || (e.innerHTML = a + " ", l = e.firstChild.nodeValue.slice(0, -1));
        return d[a] = l
    })
};
f.string.unescapePureXmlEntities_ = function (a) {
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
f.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
f.string.whitespaceEscape = function (a, c) {
    return f.string.newLineToBr(a.replace(/  /g, " &#160;"), c)
};
f.string.preserveSpaces = function (a) {
    return a.replace(/(^|[\n ]) /g, "$1" + f.string.Unicode.NBSP)
};
f.string.stripQuotes = function (a, c) {
    for (var d = c.length, e = 0; e < d; e++) {
        var g = 1 == d ? c : c.charAt(e);
        if (a.charAt(0) == g && a.charAt(a.length - 1) == g)return a.substring(1, a.length - 1)
    }
    return a
};
f.string.truncate = function (a, c, d) {
    d && (a = f.string.unescapeEntities(a));
    a.length > c && (a = a.substring(0, c - 3) + "...");
    d && (a = f.string.htmlEscape(a));
    return a
};
f.string.truncateMiddle = function (a, c, d, e) {
    d && (a = f.string.unescapeEntities(a));
    if (e && a.length > c) {
        e > c && (e = c);
        var g = a.length - e;
        c -= e;
        a = a.substring(0, c) + "..." + a.substring(g)
    } else a.length > c && (g = Math.floor(c / 2), e = a.length - g, g += c % 2, a = a.substring(0, g) + "..." + a.substring(e));
    d && (a = f.string.htmlEscape(a));
    return a
};
f.string.specialEscapeChars_ = {"\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\"};
f.string.jsEscapeCache_ = {"'": "\\'"};
f.string.quote = function (a) {
    a = String(a);
    if (a.quote)return a.quote();
    for (var c = ['"'], d = 0; d < a.length; d++) {
        var e = a.charAt(d), g = e.charCodeAt(0);
        c[d + 1] = f.string.specialEscapeChars_[e] || (31 < g && 127 > g ? e : f.string.escapeChar(e))
    }
    c.push('"');
    return c.join("")
};
f.string.escapeString = function (a) {
    for (var c = [], d = 0; d < a.length; d++)c[d] = f.string.escapeChar(a.charAt(d));
    return c.join("")
};
f.string.escapeChar = function (a) {
    if (a in f.string.jsEscapeCache_)return f.string.jsEscapeCache_[a];
    if (a in f.string.specialEscapeChars_)return f.string.jsEscapeCache_[a] = f.string.specialEscapeChars_[a];
    var c = a, d = a.charCodeAt(0);
    if (31 < d && 127 > d)c = a; else {
        if (256 > d) {
            if (c = "\\x", 16 > d || 256 < d)c += "0"
        } else c = "\\u", 4096 > d && (c += "0");
        c += d.toString(16).toUpperCase()
    }
    return f.string.jsEscapeCache_[a] = c
};
f.string.toMap = function (a) {
    for (var c = {}, d = 0; d < a.length; d++)c[a.charAt(d)] = !0;
    return c
};
f.string.contains = function (a, c) {
    return-1 != a.indexOf(c)
};
f.string.caseInsensitiveContains = function (a, c) {
    return f.string.contains(a.toLowerCase(), c.toLowerCase())
};
f.string.countOf = function (a, c) {
    return a && c ? a.split(c).length - 1 : 0
};
f.string.removeAt = function (a, c, d) {
    var e = a;
    0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
    return e
};
f.string.remove = function (a, c) {
    var d = new RegExp(f.string.regExpEscape(c), "");
    return a.replace(d, "")
};
f.string.removeAll = function (a, c) {
    var d = new RegExp(f.string.regExpEscape(c), "g");
    return a.replace(d, "")
};
f.string.regExpEscape = function (a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
f.string.repeat = function (a, c) {
    return Array(c + 1).join(a)
};
f.string.padNumber = function (a, c, d) {
    a = f.isDef(d) ? a.toFixed(d) : String(a);
    d = a.indexOf(".");
    -1 == d && (d = a.length);
    return f.string.repeat("0", Math.max(0, c - d)) + a
};
f.string.makeSafe = function (a) {
    return null == a ? "" : String(a)
};
f.string.buildString = function (a) {
    return Array.prototype.join.call(arguments, "")
};
f.string.getRandomString = function () {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ f.now()).toString(36)
};
f.string.compareVersions = function (a, c) {
    for (var d = 0, e = f.string.trim(String(a)).split("."), g = f.string.trim(String(c)).split("."), h = Math.max(e.length, g.length), l = 0; 0 == d && l < h; l++) {
        var p = e[l] || "", q = g[l] || "", s = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
        do {
            var u = s.exec(p) || ["", "", ""], v = t.exec(q) || ["", "", ""];
            if (0 == u[0].length && 0 == v[0].length)break;
            var d = 0 == u[1].length ? 0 : parseInt(u[1], 10), z = 0 == v[1].length ? 0 : parseInt(v[1], 10), d = f.string.compareElements_(d, z) || f.string.compareElements_(0 == u[2].length, 0 == v[2].length) || f.string.compareElements_(u[2],
                v[2])
        } while (0 == d)
    }
    return d
};
f.string.compareElements_ = function (a, c) {
    return a < c ? -1 : a > c ? 1 : 0
};
f.string.HASHCODE_MAX_ = 4294967296;
f.string.hashCode = function (a) {
    for (var c = 0, d = 0; d < a.length; ++d)c = 31 * c + a.charCodeAt(d), c %= f.string.HASHCODE_MAX_;
    return c
};
f.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
f.string.createUniqueString = function () {
    return"goog_" + f.string.uniqueStringCounter_++
};
f.string.toNumber = function (a) {
    var c = Number(a);
    return 0 == c && f.string.isEmpty(a) ? NaN : c
};
f.string.isLowerCamelCase = function (a) {
    return/^[a-z]+([A-Z][a-z]*)*$/.test(a)
};
f.string.isUpperCamelCase = function (a) {
    return/^([A-Z][a-z]*)+$/.test(a)
};
f.string.toCamelCase = function (a) {
    return String(a).replace(/\-([a-z])/g, function (a, d) {
        return d.toUpperCase()
    })
};
f.string.toSelectorCase = function (a) {
    return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
};
f.string.toTitleCase = function (a, c) {
    var d = f.isString(c) ? f.string.regExpEscape(c) : "\\s", d = d ? "|[" + d + "]+" : "", d = new RegExp("(^" + d + ")([a-z])", "g");
    return a.replace(d, function (a, c, d) {
        return c + d.toUpperCase()
    })
};
f.string.parseInt = function (a) {
    isFinite(a) && (a = String(a));
    return f.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
};
f.string.splitLimit = function (a, c, d) {
    a = a.split(c);
    for (var e = []; 0 < d && a.length;)e.push(a.shift()), d--;
    a.length && e.push(a.join(c));
    return e
};
f.asserts = {};
f.asserts.ENABLE_ASSERTS = f.DEBUG;
f.asserts.AssertionError = function (a, c) {
    c.unshift(a);
    f.debug.Error.call(this, f.string.subs.apply(null, c));
    c.shift()
};
f.inherits(f.asserts.AssertionError, f.debug.Error);
f.asserts.AssertionError.prototype.name = "AssertionError";
f.asserts.DEFAULT_ERROR_HANDLER = function (a) {
    throw a;
};
f.asserts.errorHandler_ = f.asserts.DEFAULT_ERROR_HANDLER;
f.asserts.doAssertFailure_ = function (a, c, d, e) {
    var g = "Assertion failed";
    if (d)var g = g + (": " + d), h = e; else a && (g += ": " + a, h = c);
    a = new f.asserts.AssertionError("" + g, h || []);
    f.asserts.errorHandler_(a)
};
f.asserts.setErrorHandler = function (a) {
    f.asserts.ENABLE_ASSERTS && (f.asserts.errorHandler_ = a)
};
f.asserts.assert = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !a && f.asserts.doAssertFailure_("", null, c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.fail = function (a, c) {
    f.asserts.ENABLE_ASSERTS && f.asserts.errorHandler_(new f.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
};
f.asserts.assertNumber = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isNumber(a) && f.asserts.doAssertFailure_("Expected number but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertString = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isString(a) && f.asserts.doAssertFailure_("Expected string but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertFunction = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isFunction(a) && f.asserts.doAssertFailure_("Expected function but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertObject = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isObject(a) && f.asserts.doAssertFailure_("Expected object but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertArray = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isArray(a) && f.asserts.doAssertFailure_("Expected array but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertBoolean = function (a, c, d) {
    f.asserts.ENABLE_ASSERTS && !f.isBoolean(a) && f.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertElement = function (a, c, d) {
    !f.asserts.ENABLE_ASSERTS || f.isObject(a) && a.nodeType == f.dom.NodeType.ELEMENT || f.asserts.doAssertFailure_("Expected Element but got %s: %s.", [f.typeOf(a), a], c, Array.prototype.slice.call(arguments, 2));
    return a
};
f.asserts.assertInstanceof = function (a, c, d, e) {
    !f.asserts.ENABLE_ASSERTS || a instanceof c || f.asserts.doAssertFailure_("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
    return a
};
f.asserts.assertObjectPrototypeIsIntact = function () {
    for (var a in Object.prototype)f.asserts.fail(a + " should not be enumerable in Object.prototype.")
};
f.array = {};
f.NATIVE_ARRAY_PROTOTYPES = f.TRUSTED_SITE;
f.array.ASSUME_NATIVE_FUNCTIONS = !1;
f.array.peek = function (a) {
    return a[a.length - 1]
};
f.array.last = f.array.peek;
f.array.ARRAY_PROTOTYPE_ = Array.prototype;
f.array.indexOf = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.indexOf) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.indexOf.call(a, c, d)
} : function (a, c, d) {
    d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
    if (f.isString(a))return f.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
    for (; d < a.length; d++)if (d in a && a[d] === c)return d;
    return-1
};
f.array.lastIndexOf = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    d = null == d ? a.length - 1 : d;
    return f.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, c, d)
} : function (a, c, d) {
    d = null == d ? a.length - 1 : d;
    0 > d && (d = Math.max(0, a.length + d));
    if (f.isString(a))return f.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
    for (; 0 <= d; d--)if (d in a && a[d] === c)return d;
    return-1
};
f.array.forEach = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.forEach) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    f.array.ARRAY_PROTOTYPE_.forEach.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0; h < e; h++)h in g && c.call(d, g[h], h, a)
};
f.array.forEachRight = function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; --e)e in g && c.call(d, g[e], e, a)
};
f.array.filter = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.filter) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.filter.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, g = [], h = 0, l = f.isString(a) ? a.split("") : a, p = 0; p < e; p++)if (p in l) {
        var q = l[p];
        c.call(d, q, p, a) && (g[h++] = q)
    }
    return g
};
f.array.map = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.map) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.map.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, g = Array(e), h = f.isString(a) ? a.split("") : a, l = 0; l < e; l++)l in h && (g[l] = c.call(d, h[l], l, a));
    return g
};
f.array.reduce = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.reduce) ? function (a, c, d, e) {
    f.asserts.assert(null != a.length);
    e && (c = f.bind(c, e));
    return f.array.ARRAY_PROTOTYPE_.reduce.call(a, c, d)
} : function (a, c, d, e) {
    var g = d;
    f.array.forEach(a, function (d, l) {
        g = c.call(e, g, d, l, a)
    });
    return g
};
f.array.reduceRight = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.reduceRight) ? function (a, c, d, e) {
    f.asserts.assert(null != a.length);
    e && (c = f.bind(c, e));
    return f.array.ARRAY_PROTOTYPE_.reduceRight.call(a, c, d)
} : function (a, c, d, e) {
    var g = d;
    f.array.forEachRight(a, function (d, l) {
        g = c.call(e, g, d, l, a)
    });
    return g
};
f.array.some = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.some) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.some.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in g && c.call(d, g[h], h, a))return!0;
    return!1
};
f.array.every = f.NATIVE_ARRAY_PROTOTYPES && (f.array.ASSUME_NATIVE_FUNCTIONS || f.array.ARRAY_PROTOTYPE_.every) ? function (a, c, d) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.every.call(a, c, d)
} : function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in g && !c.call(d, g[h], h, a))return!1;
    return!0
};
f.array.count = function (a, c, d) {
    var e = 0;
    f.array.forEach(a, function (a, h, l) {
        c.call(d, a, h, l) && ++e
    }, d);
    return e
};
f.array.find = function (a, c, d) {
    c = f.array.findIndex(a, c, d);
    return 0 > c ? null : f.isString(a) ? a.charAt(c) : a[c]
};
f.array.findIndex = function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, h = 0; h < e; h++)if (h in g && c.call(d, g[h], h, a))return h;
    return-1
};
f.array.findRight = function (a, c, d) {
    c = f.array.findIndexRight(a, c, d);
    return 0 > c ? null : f.isString(a) ? a.charAt(c) : a[c]
};
f.array.findIndexRight = function (a, c, d) {
    for (var e = a.length, g = f.isString(a) ? a.split("") : a, e = e - 1; 0 <= e; e--)if (e in g && c.call(d, g[e], e, a))return e;
    return-1
};
f.array.contains = function (a, c) {
    return 0 <= f.array.indexOf(a, c)
};
f.array.isEmpty = function (a) {
    return 0 == a.length
};
f.array.clear = function (a) {
    if (!f.isArray(a))for (var c = a.length - 1; 0 <= c; c--)delete a[c];
    a.length = 0
};
f.array.insert = function (a, c) {
    f.array.contains(a, c) || a.push(c)
};
f.array.insertAt = function (a, c, d) {
    f.array.splice(a, d, 0, c)
};
f.array.insertArrayAt = function (a, c, d) {
    f.partial(f.array.splice, a, d, 0).apply(null, c)
};
f.array.insertBefore = function (a, c, d) {
    var e;
    2 == arguments.length || 0 > (e = f.array.indexOf(a, d)) ? a.push(c) : f.array.insertAt(a, c, e)
};
f.array.remove = function (a, c) {
    var d = f.array.indexOf(a, c), e;
    (e = 0 <= d) && f.array.removeAt(a, d);
    return e
};
f.array.removeAt = function (a, c) {
    f.asserts.assert(null != a.length);
    return 1 == f.array.ARRAY_PROTOTYPE_.splice.call(a, c, 1).length
};
f.array.removeIf = function (a, c, d) {
    c = f.array.findIndex(a, c, d);
    return 0 <= c ? (f.array.removeAt(a, c), !0) : !1
};
f.array.concat = function (a) {
    return f.array.ARRAY_PROTOTYPE_.concat.apply(f.array.ARRAY_PROTOTYPE_, arguments)
};
f.array.join = function (a) {
    return f.array.ARRAY_PROTOTYPE_.concat.apply(f.array.ARRAY_PROTOTYPE_, arguments)
};
f.array.toArray = function (a) {
    var c = a.length;
    if (0 < c) {
        for (var d = Array(c), e = 0; e < c; e++)d[e] = a[e];
        return d
    }
    return[]
};
f.array.clone = f.array.toArray;
f.array.extend = function (a, c) {
    for (var d = 1; d < arguments.length; d++) {
        var e = arguments[d], g;
        if (f.isArray(e) || (g = f.isArrayLike(e)) && Object.prototype.hasOwnProperty.call(e, "callee"))a.push.apply(a, e); else if (g)for (var h = a.length, l = e.length, p = 0; p < l; p++)a[h + p] = e[p]; else a.push(e)
    }
};
f.array.splice = function (a, c, d, e) {
    f.asserts.assert(null != a.length);
    return f.array.ARRAY_PROTOTYPE_.splice.apply(a, f.array.slice(arguments, 1))
};
f.array.slice = function (a, c, d) {
    f.asserts.assert(null != a.length);
    return 2 >= arguments.length ? f.array.ARRAY_PROTOTYPE_.slice.call(a, c) : f.array.ARRAY_PROTOTYPE_.slice.call(a, c, d)
};
f.array.removeDuplicates = function (a, c, d) {
    c = c || a;
    var e = function () {
        return f.isObject(l) ? "o" + f.getUid(l) : (typeof l).charAt(0) + l
    };
    d = d || e;
    for (var e = {}, g = 0, h = 0; h < a.length;) {
        var l = a[h++], p = d(l);
        Object.prototype.hasOwnProperty.call(e, p) || (e[p] = !0, c[g++] = l)
    }
    c.length = g
};
f.array.binarySearch = function (a, c, d) {
    return f.array.binarySearch_(a, d || f.array.defaultCompare, !1, c)
};
f.array.binarySelect = function (a, c, d) {
    return f.array.binarySearch_(a, c, !0, void 0, d)
};
f.array.binarySearch_ = function (a, c, d, e, g) {
    for (var h = 0, l = a.length, p; h < l;) {
        var q = h + l >> 1, s;
        s = d ? c.call(g, a[q], q, a) : c(e, a[q]);
        0 < s ? h = q + 1 : (l = q, p = !s)
    }
    return p ? h : ~h
};
f.array.sort = function (a, c) {
    a.sort(c || f.array.defaultCompare)
};
f.array.stableSort = function (a, c) {
    function d(a, c) {
        return g(a.value, c.value) || a.index - c.index
    }

    for (var e = 0; e < a.length; e++)a[e] = {index: e, value: a[e]};
    var g = c || f.array.defaultCompare;
    f.array.sort(a, d);
    for (e = 0; e < a.length; e++)a[e] = a[e].value
};
f.array.sortObjectsByKey = function (a, c, d) {
    var e = d || f.array.defaultCompare;
    f.array.sort(a, function (a, d) {
        return e(a[c], d[c])
    })
};
f.array.isSorted = function (a, c, d) {
    c = c || f.array.defaultCompare;
    for (var e = 1; e < a.length; e++) {
        var g = c(a[e - 1], a[e]);
        if (0 < g || 0 == g && d)return!1
    }
    return!0
};
f.array.equals = function (a, c, d) {
    if (!f.isArrayLike(a) || !f.isArrayLike(c) || a.length != c.length)return!1;
    var e = a.length;
    d = d || f.array.defaultCompareEquality;
    for (var g = 0; g < e; g++)if (!d(a[g], c[g]))return!1;
    return!0
};
f.array.compare3 = function (a, c, d) {
    d = d || f.array.defaultCompare;
    for (var e = Math.min(a.length, c.length), g = 0; g < e; g++) {
        var h = d(a[g], c[g]);
        if (0 != h)return h
    }
    return f.array.defaultCompare(a.length, c.length)
};
f.array.defaultCompare = function (a, c) {
    return a > c ? 1 : a < c ? -1 : 0
};
f.array.defaultCompareEquality = function (a, c) {
    return a === c
};
f.array.binaryInsert = function (a, c, d) {
    d = f.array.binarySearch(a, c, d);
    return 0 > d ? (f.array.insertAt(a, c, -(d + 1)), !0) : !1
};
f.array.binaryRemove = function (a, c, d) {
    c = f.array.binarySearch(a, c, d);
    return 0 <= c ? f.array.removeAt(a, c) : !1
};
f.array.bucket = function (a, c, d) {
    for (var e = {}, g = 0; g < a.length; g++) {
        var h = a[g], l = c.call(d, h, g, a);
        f.isDef(l) && (l = e[l] || (e[l] = []), l.push(h))
    }
    return e
};
f.array.toObject = function (a, c, d) {
    var e = {};
    f.array.forEach(a, function (g, h) {
        e[c.call(d, g, h, a)] = g
    });
    return e
};
f.array.range = function (a, c, d) {
    var e = [], g = 0, h = a;
    d = d || 1;
    void 0 !== c && (g = a, h = c);
    if (0 > d * (h - g))return[];
    if (0 < d)for (a = g; a < h; a += d)e.push(a); else for (a = g; a > h; a += d)e.push(a);
    return e
};
f.array.repeat = function (a, c) {
    for (var d = [], e = 0; e < c; e++)d[e] = a;
    return d
};
f.array.flatten = function (a) {
    for (var c = [], d = 0; d < arguments.length; d++) {
        var e = arguments[d];
        f.isArray(e) ? c.push.apply(c, f.array.flatten.apply(null, e)) : c.push(e)
    }
    return c
};
f.array.rotate = function (a, c) {
    f.asserts.assert(null != a.length);
    a.length && (c %= a.length, 0 < c ? f.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-c, c)) : 0 > c && f.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -c)));
    return a
};
f.array.moveItem = function (a, c, d) {
    f.asserts.assert(0 <= c && c < a.length);
    f.asserts.assert(0 <= d && d < a.length);
    c = f.array.ARRAY_PROTOTYPE_.splice.call(a, c, 1);
    f.array.ARRAY_PROTOTYPE_.splice.call(a, d, 0, c[0])
};
f.array.zip = function (a) {
    if (!arguments.length)return[];
    for (var c = [], d = 0; ; d++) {
        for (var e = [], g = 0; g < arguments.length; g++) {
            var h = arguments[g];
            if (d >= h.length)return c;
            e.push(h[d])
        }
        c.push(e)
    }
};
f.array.shuffle = function (a, c) {
    for (var d = c || Math.random, e = a.length - 1; 0 < e; e--) {
        var g = Math.floor(d() * (e + 1)), h = a[e];
        a[e] = a[g];
        a[g] = h
    }
};
f.math = {};
f.math.randomInt = function (a) {
    return Math.floor(Math.random() * a)
};
f.math.uniformRandom = function (a, c) {
    return a + Math.random() * (c - a)
};
f.math.clamp = function (a, c, d) {
    return Math.min(Math.max(a, c), d)
};
f.math.modulo = function (a, c) {
    var d = a % c;
    return 0 > d * c ? d + c : d
};
f.math.lerp = function (a, c, d) {
    return a + d * (c - a)
};
f.math.nearlyEquals = function (a, c, d) {
    return Math.abs(a - c) <= (d || 1E-6)
};
f.math.standardAngle = function (a) {
    return f.math.modulo(a, 360)
};
f.math.standardAngleInRadians = function (a) {
    return f.math.modulo(a, 2 * Math.PI)
};
f.math.toRadians = function (a) {
    return a * Math.PI / 180
};
f.math.toDegrees = function (a) {
    return 180 * a / Math.PI
};
f.math.angleDx = function (a, c) {
    return c * Math.cos(f.math.toRadians(a))
};
f.math.angleDy = function (a, c) {
    return c * Math.sin(f.math.toRadians(a))
};
f.math.angle = function (a, c, d, e) {
    return f.math.standardAngle(f.math.toDegrees(Math.atan2(e - c, d - a)))
};
f.math.angleDifference = function (a, c) {
    var d = f.math.standardAngle(c) - f.math.standardAngle(a);
    180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
    return d
};
f.math.sign = function (a) {
    return 0 == a ? 0 : 0 > a ? -1 : 1
};
f.math.longestCommonSubsequence = function (a, c, d, e) {
    d = d || function (a, c) {
        return a == c
    };
    e = e || function (c) {
        return a[c]
    };
    for (var g = a.length, h = c.length, l = [], p = 0; p < g + 1; p++)l[p] = [], l[p][0] = 0;
    for (var q = 0; q < h + 1; q++)l[0][q] = 0;
    for (p = 1; p <= g; p++)for (q = 1; q <= h; q++)d(a[p - 1], c[q - 1]) ? l[p][q] = l[p - 1][q - 1] + 1 : l[p][q] = Math.max(l[p - 1][q], l[p][q - 1]);
    for (var s = [], p = g, q = h; 0 < p && 0 < q;)d(a[p - 1], c[q - 1]) ? (s.unshift(e(p - 1, q - 1)), p--, q--) : l[p - 1][q] > l[p][q - 1] ? p-- : q--;
    return s
};
f.math.sum = function (a) {
    return f.array.reduce(arguments, function (a, d) {
        return a + d
    }, 0)
};
f.math.average = function (a) {
    return f.math.sum.apply(null, arguments) / arguments.length
};
f.math.sampleVariance = function (a) {
    var c = arguments.length;
    if (2 > c)return 0;
    var d = f.math.average.apply(null, arguments);
    return c = f.math.sum.apply(null, f.array.map(arguments, function (a) {
        return Math.pow(a - d, 2)
    })) / (c - 1)
};
f.math.standardDeviation = function (a) {
    return Math.sqrt(f.math.sampleVariance.apply(null, arguments))
};
f.math.isInt = function (a) {
    return isFinite(a) && 0 == a % 1
};
f.math.isFiniteNumber = function (a) {
    return isFinite(a) && !isNaN(a)
};
f.math.log10Floor = function (a) {
    if (0 < a) {
        var c = Math.round(Math.log(a) * Math.LOG10E);
        return c - (parseFloat("1e" + c) > a)
    }
    return 0 == a ? -Infinity : NaN
};
f.math.safeFloor = function (a, c) {
    f.asserts.assert(!f.isDef(c) || 0 < c);
    return Math.floor(a + (c || 2E-15))
};
f.math.safeCeil = function (a, c) {
    f.asserts.assert(!f.isDef(c) || 0 < c);
    return Math.ceil(a - (c || 2E-15))
};
f.math.Coordinate = function (a, c) {
    this.x = f.isDef(a) ? a : 0;
    this.y = f.isDef(c) ? c : 0
};
f.math.Coordinate.prototype.clone = function () {
    return new f.math.Coordinate(this.x, this.y)
};
f.DEBUG && (f.math.Coordinate.prototype.toString = function () {
    return"(" + this.x + ", " + this.y + ")"
});
f.math.Coordinate.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
f.math.Coordinate.distance = function (a, c) {
    var d = a.x - c.x, e = a.y - c.y;
    return Math.sqrt(d * d + e * e)
};
f.math.Coordinate.magnitude = function (a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
f.math.Coordinate.azimuth = function (a) {
    return f.math.angle(0, 0, a.x, a.y)
};
f.math.Coordinate.squaredDistance = function (a, c) {
    var d = a.x - c.x, e = a.y - c.y;
    return d * d + e * e
};
f.math.Coordinate.difference = function (a, c) {
    return new f.math.Coordinate(a.x - c.x, a.y - c.y)
};
f.math.Coordinate.sum = function (a, c) {
    return new f.math.Coordinate(a.x + c.x, a.y + c.y)
};
b = f.math.Coordinate.prototype;
b.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
b.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
b.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
b.translate = function (a, c) {
    a instanceof f.math.Coordinate ? (this.x += a.x, this.y += a.y) : (this.x += a, f.isNumber(c) && (this.y += c));
    return this
};
b.scale = function (a, c) {
    var d = f.isNumber(c) ? c : a;
    this.x *= a;
    this.y *= d;
    return this
};
f.math.Size = function (a, c) {
    this.width = a;
    this.height = c
};
f.math.Size.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
f.math.Size.prototype.clone = function () {
    return new f.math.Size(this.width, this.height)
};
f.DEBUG && (f.math.Size.prototype.toString = function () {
    return"(" + this.width + " x " + this.height + ")"
});
b = f.math.Size.prototype;
b.area = function () {
    return this.width * this.height
};
b.isEmpty = function () {
    return!this.area()
};
b.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
b.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
b.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
b.scale = function (a, c) {
    var d = f.isNumber(c) ? c : a;
    this.width *= a;
    this.height *= d;
    return this
};
f.object = {};
f.object.forEach = function (a, c, d) {
    for (var e in a)c.call(d, a[e], e, a)
};
f.object.filter = function (a, c, d) {
    var e = {}, g;
    for (g in a)c.call(d, a[g], g, a) && (e[g] = a[g]);
    return e
};
f.object.map = function (a, c, d) {
    var e = {}, g;
    for (g in a)e[g] = c.call(d, a[g], g, a);
    return e
};
f.object.some = function (a, c, d) {
    for (var e in a)if (c.call(d, a[e], e, a))return!0;
    return!1
};
f.object.every = function (a, c, d) {
    for (var e in a)if (!c.call(d, a[e], e, a))return!1;
    return!0
};
f.object.getCount = function (a) {
    var c = 0, d;
    for (d in a)c++;
    return c
};
f.object.getAnyKey = function (a) {
    for (var c in a)return c
};
f.object.getAnyValue = function (a) {
    for (var c in a)return a[c]
};
f.object.contains = function (a, c) {
    return f.object.containsValue(a, c)
};
f.object.getValues = function (a) {
    var c = [], d = 0, e;
    for (e in a)c[d++] = a[e];
    return c
};
f.object.getKeys = function (a) {
    var c = [], d = 0, e;
    for (e in a)c[d++] = e;
    return c
};
f.object.getValueByKeys = function (a, c) {
    for (var d = f.isArrayLike(c), e = d ? c : arguments, d = d ? 0 : 1; d < e.length && (a = a[e[d]], f.isDef(a)); d++);
    return a
};
f.object.containsKey = function (a, c) {
    return c in a
};
f.object.containsValue = function (a, c) {
    for (var d in a)if (a[d] == c)return!0;
    return!1
};
f.object.findKey = function (a, c, d) {
    for (var e in a)if (c.call(d, a[e], e, a))return e
};
f.object.findValue = function (a, c, d) {
    return(c = f.object.findKey(a, c, d)) && a[c]
};
f.object.isEmpty = function (a) {
    for (var c in a)return!1;
    return!0
};
f.object.clear = function (a) {
    for (var c in a)delete a[c]
};
f.object.remove = function (a, c) {
    var d;
    (d = c in a) && delete a[c];
    return d
};
f.object.add = function (a, c, d) {
    if (c in a)throw Error('The object already contains the key "' + c + '"');
    f.object.set(a, c, d)
};
f.object.get = function (a, c, d) {
    return c in a ? a[c] : d
};
f.object.set = function (a, c, d) {
    a[c] = d
};
f.object.setIfUndefined = function (a, c, d) {
    return c in a ? a[c] : a[c] = d
};
f.object.equals = function (a, c) {
    if (!f.array.equals(f.object.getKeys(a), f.object.getKeys(c)))return!1;
    for (var d in a)if (a[d] !== c[d])return!1;
    return!0
};
f.object.clone = function (a) {
    var c = {}, d;
    for (d in a)c[d] = a[d];
    return c
};
f.object.unsafeClone = function (a) {
    var c = f.typeOf(a);
    if ("object" == c || "array" == c) {
        if (a.clone)return a.clone();
        var c = "array" == c ? [] : {}, d;
        for (d in a)c[d] = f.object.unsafeClone(a[d]);
        return c
    }
    return a
};
f.object.transpose = function (a) {
    var c = {}, d;
    for (d in a)c[a[d]] = d;
    return c
};
f.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
f.object.extend = function (a, c) {
    for (var d, e, g = 1; g < arguments.length; g++) {
        e = arguments[g];
        for (d in e)a[d] = e[d];
        for (var h = 0; h < f.object.PROTOTYPE_FIELDS_.length; h++)d = f.object.PROTOTYPE_FIELDS_[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
    }
};
f.object.create = function (a) {
    var c = arguments.length;
    if (1 == c && f.isArray(arguments[0]))return f.object.create.apply(null, arguments[0]);
    if (c % 2)throw Error("Uneven number of arguments");
    for (var d = {}, e = 0; e < c; e += 2)d[arguments[e]] = arguments[e + 1];
    return d
};
f.object.createSet = function (a) {
    var c = arguments.length;
    if (1 == c && f.isArray(arguments[0]))return f.object.createSet.apply(null, arguments[0]);
    for (var d = {}, e = 0; e < c; e++)d[arguments[e]] = !0;
    return d
};
f.object.createImmutableView = function (a) {
    var c = a;
    Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
    return c
};
f.object.isImmutableView = function (a) {
    return!!Object.isFrozen && Object.isFrozen(a)
};
f.labs = {};
f.labs.userAgent = {};
f.labs.userAgent.util = {};
f.labs.userAgent.util.getNativeUserAgentString_ = function () {
    var a = f.labs.userAgent.util.getNavigator_();
    return a && (a = a.userAgent) ? a : ""
};
f.labs.userAgent.util.getNavigator_ = function () {
    return f.global.navigator
};
f.labs.userAgent.util.userAgent_ = f.labs.userAgent.util.getNativeUserAgentString_();
f.labs.userAgent.util.setUserAgent = function (a) {
    f.labs.userAgent.util.userAgent_ = a || f.labs.userAgent.util.getNativeUserAgentString_()
};
f.labs.userAgent.util.getUserAgent = function () {
    return f.labs.userAgent.util.userAgent_
};
f.labs.userAgent.util.matchUserAgent = function (a) {
    var c = f.labs.userAgent.util.getUserAgent();
    return f.string.contains(c, a)
};
f.labs.userAgent.util.matchUserAgentIgnoreCase = function (a) {
    var c = f.labs.userAgent.util.getUserAgent();
    return f.string.caseInsensitiveContains(c, a)
};
f.labs.userAgent.util.extractVersionTuples = function (a) {
    for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(a);)d.push([e[1], e[2], e[3] || void 0]);
    return d
};
f.labs.userAgent.browser = {};
f.labs.userAgent.browser.matchOpera_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Opera") || f.labs.userAgent.util.matchUserAgent("OPR")
};
f.labs.userAgent.browser.matchIE_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Trident") || f.labs.userAgent.util.matchUserAgent("MSIE")
};
f.labs.userAgent.browser.matchFirefox_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Firefox")
};
f.labs.userAgent.browser.matchSafari_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Safari") && !f.labs.userAgent.util.matchUserAgent("Chrome") && !f.labs.userAgent.util.matchUserAgent("CriOS") && !f.labs.userAgent.util.matchUserAgent("Android")
};
f.labs.userAgent.browser.matchChrome_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Chrome") || f.labs.userAgent.util.matchUserAgent("CriOS")
};
f.labs.userAgent.browser.matchAndroidBrowser_ = function () {
    return f.labs.userAgent.util.matchUserAgent("Android") && !f.labs.userAgent.util.matchUserAgent("Chrome") && !f.labs.userAgent.util.matchUserAgent("CriOS")
};
f.labs.userAgent.browser.isOpera = f.labs.userAgent.browser.matchOpera_;
f.labs.userAgent.browser.isIE = f.labs.userAgent.browser.matchIE_;
f.labs.userAgent.browser.isFirefox = f.labs.userAgent.browser.matchFirefox_;
f.labs.userAgent.browser.isSafari = f.labs.userAgent.browser.matchSafari_;
f.labs.userAgent.browser.isChrome = f.labs.userAgent.browser.matchChrome_;
f.labs.userAgent.browser.isAndroidBrowser = f.labs.userAgent.browser.matchAndroidBrowser_;
f.labs.userAgent.browser.isSilk = function () {
    return f.labs.userAgent.util.matchUserAgent("Silk")
};
f.labs.userAgent.browser.getVersion = function () {
    var a = f.labs.userAgent.util.getUserAgent();
    if (f.labs.userAgent.browser.isIE())return f.labs.userAgent.browser.getIEVersion_(a);
    if (f.labs.userAgent.browser.isOpera())return f.labs.userAgent.browser.getOperaVersion_(a);
    a = f.labs.userAgent.util.extractVersionTuples(a);
    return f.labs.userAgent.browser.getVersionFromTuples_(a)
};
f.labs.userAgent.browser.isVersionOrHigher = function (a) {
    return 0 <= f.string.compareVersions(f.labs.userAgent.browser.getVersion(), a)
};
f.labs.userAgent.browser.getIEVersion_ = function (a) {
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
f.labs.userAgent.browser.getOperaVersion_ = function (a) {
    a = f.labs.userAgent.util.extractVersionTuples(a);
    var c = f.array.peek(a);
    return"OPR" == c[0] && c[1] ? c[1] : f.labs.userAgent.browser.getVersionFromTuples_(a)
};
f.labs.userAgent.browser.getVersionFromTuples_ = function (a) {
    f.asserts.assert(2 < a.length, "Couldn't extract version tuple from user agent string");
    return a[2] && a[2][1] ? a[2][1] : ""
};
f.labs.userAgent.engine = {};
f.labs.userAgent.engine.isPresto = function () {
    return f.labs.userAgent.util.matchUserAgent("Presto")
};
f.labs.userAgent.engine.isTrident = function () {
    return f.labs.userAgent.util.matchUserAgent("Trident") || f.labs.userAgent.util.matchUserAgent("MSIE")
};
f.labs.userAgent.engine.isWebKit = function () {
    return f.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")
};
f.labs.userAgent.engine.isGecko = function () {
    return f.labs.userAgent.util.matchUserAgent("Gecko") && !f.labs.userAgent.engine.isWebKit() && !f.labs.userAgent.engine.isTrident()
};
f.labs.userAgent.engine.getVersion = function () {
    var a = f.labs.userAgent.util.getUserAgent();
    if (a) {
        var a = f.labs.userAgent.util.extractVersionTuples(a), c = a[1];
        if (c)return"Gecko" == c[0] ? f.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : c[1];
        var a = a[0], d;
        if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d)))return d[1]
    }
    return""
};
f.labs.userAgent.engine.isVersionOrHigher = function (a) {
    return 0 <= f.string.compareVersions(f.labs.userAgent.engine.getVersion(), a)
};
f.labs.userAgent.engine.getVersionForKey_ = function (a, c) {
    var d = f.array.find(a, function (a) {
        return c == a[0]
    });
    return d && d[1] || ""
};
f.userAgent = {};
f.userAgent.ASSUME_IE = !1;
f.userAgent.ASSUME_GECKO = !1;
f.userAgent.ASSUME_WEBKIT = !1;
f.userAgent.ASSUME_MOBILE_WEBKIT = !1;
f.userAgent.ASSUME_OPERA = !1;
f.userAgent.ASSUME_ANY_VERSION = !1;
f.userAgent.BROWSER_KNOWN_ = f.userAgent.ASSUME_IE || f.userAgent.ASSUME_GECKO || f.userAgent.ASSUME_MOBILE_WEBKIT || f.userAgent.ASSUME_WEBKIT || f.userAgent.ASSUME_OPERA;
f.userAgent.getUserAgentString = function () {
    return f.labs.userAgent.util.getUserAgent()
};
f.userAgent.getNavigator = function () {
    return f.global.navigator || null
};
f.userAgent.OPERA = f.userAgent.BROWSER_KNOWN_ ? f.userAgent.ASSUME_OPERA : f.labs.userAgent.browser.isOpera();
f.userAgent.IE = f.userAgent.BROWSER_KNOWN_ ? f.userAgent.ASSUME_IE : f.labs.userAgent.browser.isIE();
f.userAgent.GECKO = f.userAgent.BROWSER_KNOWN_ ? f.userAgent.ASSUME_GECKO : f.labs.userAgent.engine.isGecko();
f.userAgent.WEBKIT = f.userAgent.BROWSER_KNOWN_ ? f.userAgent.ASSUME_WEBKIT || f.userAgent.ASSUME_MOBILE_WEBKIT : f.labs.userAgent.engine.isWebKit();
f.userAgent.isMobile_ = function () {
    return f.userAgent.WEBKIT && f.labs.userAgent.util.matchUserAgent("Mobile")
};
f.userAgent.MOBILE = f.userAgent.ASSUME_MOBILE_WEBKIT || f.userAgent.isMobile_();
f.userAgent.SAFARI = f.userAgent.WEBKIT;
f.userAgent.determinePlatform_ = function () {
    var a = f.userAgent.getNavigator();
    return a && a.platform || ""
};
f.userAgent.PLATFORM = f.userAgent.determinePlatform_();
f.userAgent.ASSUME_MAC = !1;
f.userAgent.ASSUME_WINDOWS = !1;
f.userAgent.ASSUME_LINUX = !1;
f.userAgent.ASSUME_X11 = !1;
f.userAgent.ASSUME_ANDROID = !1;
f.userAgent.ASSUME_IPHONE = !1;
f.userAgent.ASSUME_IPAD = !1;
f.userAgent.PLATFORM_KNOWN_ = f.userAgent.ASSUME_MAC || f.userAgent.ASSUME_WINDOWS || f.userAgent.ASSUME_LINUX || f.userAgent.ASSUME_X11 || f.userAgent.ASSUME_ANDROID || f.userAgent.ASSUME_IPHONE || f.userAgent.ASSUME_IPAD;
f.userAgent.initPlatform_ = function () {
    f.userAgent.detectedMac_ = f.string.contains(f.userAgent.PLATFORM, "Mac");
    f.userAgent.detectedWindows_ = f.string.contains(f.userAgent.PLATFORM, "Win");
    f.userAgent.detectedLinux_ = f.string.contains(f.userAgent.PLATFORM, "Linux");
    f.userAgent.detectedX11_ = !!f.userAgent.getNavigator() && f.string.contains(f.userAgent.getNavigator().appVersion || "", "X11");
    var a = f.userAgent.getUserAgentString();
    f.userAgent.detectedAndroid_ = !!a && f.string.contains(a, "Android");
    f.userAgent.detectedIPhone_ =
        !!a && f.string.contains(a, "iPhone");
    f.userAgent.detectedIPad_ = !!a && f.string.contains(a, "iPad")
};
f.userAgent.PLATFORM_KNOWN_ || f.userAgent.initPlatform_();
f.userAgent.MAC = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_MAC : f.userAgent.detectedMac_;
f.userAgent.WINDOWS = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_WINDOWS : f.userAgent.detectedWindows_;
f.userAgent.LINUX = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_LINUX : f.userAgent.detectedLinux_;
f.userAgent.X11 = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_X11 : f.userAgent.detectedX11_;
f.userAgent.ANDROID = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_ANDROID : f.userAgent.detectedAndroid_;
f.userAgent.IPHONE = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_IPHONE : f.userAgent.detectedIPhone_;
f.userAgent.IPAD = f.userAgent.PLATFORM_KNOWN_ ? f.userAgent.ASSUME_IPAD : f.userAgent.detectedIPad_;
f.userAgent.determineVersion_ = function () {
    var a = "", c;
    if (f.userAgent.OPERA && f.global.opera)return a = f.global.opera.version, f.isFunction(a) ? a() : a;
    f.userAgent.GECKO ? c = /rv\:([^\);]+)(\)|;)/ : f.userAgent.IE ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : f.userAgent.WEBKIT && (c = /WebKit\/(\S+)/);
    c && (a = (a = c.exec(f.userAgent.getUserAgentString())) ? a[1] : "");
    return f.userAgent.IE && (c = f.userAgent.getDocumentMode_(), c > parseFloat(a)) ? String(c) : a
};
f.userAgent.getDocumentMode_ = function () {
    var a = f.global.document;
    return a ? a.documentMode : void 0
};
f.userAgent.VERSION = f.userAgent.determineVersion_();
f.userAgent.compare = function (a, c) {
    return f.string.compareVersions(a, c)
};
f.userAgent.isVersionOrHigherCache_ = {};
f.userAgent.isVersionOrHigher = function (a) {
    return f.userAgent.ASSUME_ANY_VERSION || f.userAgent.isVersionOrHigherCache_[a] || (f.userAgent.isVersionOrHigherCache_[a] = 0 <= f.string.compareVersions(f.userAgent.VERSION, a))
};
f.userAgent.isVersion = f.userAgent.isVersionOrHigher;
f.userAgent.isDocumentModeOrHigher = function (a) {
    return f.userAgent.IE && f.userAgent.DOCUMENT_MODE >= a
};
f.userAgent.isDocumentMode = f.userAgent.isDocumentModeOrHigher;
var m;
var n = f.global.document;
if (n && f.userAgent.IE) {
    var r = f.userAgent.getDocumentMode_();
    m = r || ("CSS1Compat" == n.compatMode ? parseInt(f.userAgent.VERSION, 10) : 5)
} else m = void 0;
f.userAgent.DOCUMENT_MODE = m;
f.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !f.userAgent.IE || f.userAgent.isDocumentModeOrHigher(9), CAN_USE_CHILDREN_ATTRIBUTE: !f.userAgent.GECKO && !f.userAgent.IE || f.userAgent.IE && f.userAgent.isDocumentModeOrHigher(9) || f.userAgent.GECKO && f.userAgent.isVersionOrHigher("1.9.1"), CAN_USE_INNER_TEXT: f.userAgent.IE && !f.userAgent.isVersionOrHigher("9"), CAN_USE_PARENT_ELEMENT_PROPERTY: f.userAgent.IE || f.userAgent.OPERA || f.userAgent.WEBKIT, INNER_HTML_NEEDS_SCOPED_ELEMENT: f.userAgent.IE, LEGACY_IE_RANGES: f.userAgent.IE && !f.userAgent.isDocumentModeOrHigher(9)};
f.dom.TagName = {A: "A", ABBR: "ABBR", ACRONYM: "ACRONYM", ADDRESS: "ADDRESS", APPLET: "APPLET", AREA: "AREA", ARTICLE: "ARTICLE", ASIDE: "ASIDE", AUDIO: "AUDIO", B: "B", BASE: "BASE", BASEFONT: "BASEFONT", BDI: "BDI", BDO: "BDO", BIG: "BIG", BLOCKQUOTE: "BLOCKQUOTE", BODY: "BODY", BR: "BR", BUTTON: "BUTTON", CANVAS: "CANVAS", CAPTION: "CAPTION", CENTER: "CENTER", CITE: "CITE", CODE: "CODE", COL: "COL", COLGROUP: "COLGROUP", COMMAND: "COMMAND", DATA: "DATA", DATALIST: "DATALIST", DD: "DD", DEL: "DEL", DETAILS: "DETAILS", DFN: "DFN", DIALOG: "DIALOG", DIR: "DIR", DIV: "DIV",
    DL: "DL", DT: "DT", EM: "EM", EMBED: "EMBED", FIELDSET: "FIELDSET", FIGCAPTION: "FIGCAPTION", FIGURE: "FIGURE", FONT: "FONT", FOOTER: "FOOTER", FORM: "FORM", FRAME: "FRAME", FRAMESET: "FRAMESET", H1: "H1", H2: "H2", H3: "H3", H4: "H4", H5: "H5", H6: "H6", HEAD: "HEAD", HEADER: "HEADER", HGROUP: "HGROUP", HR: "HR", HTML: "HTML", I: "I", IFRAME: "IFRAME", IMG: "IMG", INPUT: "INPUT", INS: "INS", ISINDEX: "ISINDEX", KBD: "KBD", KEYGEN: "KEYGEN", LABEL: "LABEL", LEGEND: "LEGEND", LI: "LI", LINK: "LINK", MAP: "MAP", MARK: "MARK", MATH: "MATH", MENU: "MENU", META: "META", METER: "METER",
    NAV: "NAV", NOFRAMES: "NOFRAMES", NOSCRIPT: "NOSCRIPT", OBJECT: "OBJECT", OL: "OL", OPTGROUP: "OPTGROUP", OPTION: "OPTION", OUTPUT: "OUTPUT", P: "P", PARAM: "PARAM", PRE: "PRE", PROGRESS: "PROGRESS", Q: "Q", RP: "RP", RT: "RT", RUBY: "RUBY", S: "S", SAMP: "SAMP", SCRIPT: "SCRIPT", SECTION: "SECTION", SELECT: "SELECT", SMALL: "SMALL", SOURCE: "SOURCE", SPAN: "SPAN", STRIKE: "STRIKE", STRONG: "STRONG", STYLE: "STYLE", SUB: "SUB", SUMMARY: "SUMMARY", SUP: "SUP", SVG: "SVG", TABLE: "TABLE", TBODY: "TBODY", TD: "TD", TEXTAREA: "TEXTAREA", TFOOT: "TFOOT", TH: "TH", THEAD: "THEAD",
    TIME: "TIME", TITLE: "TITLE", TR: "TR", TRACK: "TRACK", TT: "TT", U: "U", UL: "UL", VAR: "VAR", VIDEO: "VIDEO", WBR: "WBR"};
f.dom.ASSUME_QUIRKS_MODE = !1;
f.dom.ASSUME_STANDARDS_MODE = !1;
f.dom.COMPAT_MODE_KNOWN_ = f.dom.ASSUME_QUIRKS_MODE || f.dom.ASSUME_STANDARDS_MODE;
f.dom.getDomHelper = function (a) {
    return a ? new f.dom.DomHelper(f.dom.getOwnerDocument(a)) : f.dom.defaultDomHelper_ || (f.dom.defaultDomHelper_ = new f.dom.DomHelper)
};
f.dom.getDocument = function () {
    return document
};
f.dom.getElement = function (a) {
    return f.dom.getElementHelper_(document, a)
};
f.dom.getElementHelper_ = function (a, c) {
    return f.isString(c) ? a.getElementById(c) : c
};
f.dom.getRequiredElement = function (a) {
    return f.dom.getRequiredElementHelper_(document, a)
};
f.dom.getRequiredElementHelper_ = function (a, c) {
    f.asserts.assertString(c);
    var d = f.dom.getElementHelper_(a, c);
    return d = f.asserts.assertElement(d, "No element found with id: " + c)
};
f.dom.$ = f.dom.getElement;
f.dom.getElementsByTagNameAndClass = function (a, c, d) {
    return f.dom.getElementsByTagNameAndClass_(document, a, c, d)
};
f.dom.getElementsByClass = function (a, c) {
    var d = c || document;
    return f.dom.canUseQuerySelector_(d) ? d.querySelectorAll("." + a) : f.dom.getElementsByTagNameAndClass_(document, "*", a, c)
};
f.dom.getElementByClass = function (a, c) {
    var d = c || document, e = null;
    return(e = f.dom.canUseQuerySelector_(d) ? d.querySelector("." + a) : f.dom.getElementsByTagNameAndClass_(document, "*", a, c)[0]) || null
};
f.dom.getRequiredElementByClass = function (a, c) {
    var d = f.dom.getElementByClass(a, c);
    return f.asserts.assert(d, "No element found with className: " + a)
};
f.dom.canUseQuerySelector_ = function (a) {
    return!(!a.querySelectorAll || !a.querySelector)
};
f.dom.getElementsByTagNameAndClass_ = function (a, c, d, e) {
    a = e || a;
    c = c && "*" != c ? c.toUpperCase() : "";
    if (f.dom.canUseQuerySelector_(a) && (c || d))return d = c + (d ? "." + d : ""), a.querySelectorAll(d);
    if (d && a.getElementsByClassName) {
        a = a.getElementsByClassName(d);
        if (c) {
            e = {};
            for (var g = 0, h = 0, l; l = a[h]; h++)c == l.nodeName && (e[g++] = l);
            e.length = g;
            return e
        }
        return a
    }
    a = a.getElementsByTagName(c || "*");
    if (d) {
        e = {};
        for (h = g = 0; l = a[h]; h++)c = l.className, "function" == typeof c.split && f.array.contains(c.split(/\s+/), d) && (e[g++] = l);
        e.length = g;
        return e
    }
    return a
};
f.dom.$$ = f.dom.getElementsByTagNameAndClass;
f.dom.setProperties = function (a, c) {
    f.object.forEach(c, function (c, e) {
        "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : e in f.dom.DIRECT_ATTRIBUTE_MAP_ ? a.setAttribute(f.dom.DIRECT_ATTRIBUTE_MAP_[e], c) : f.string.startsWith(e, "aria-") || f.string.startsWith(e, "data-") ? a.setAttribute(e, c) : a[e] = c
    })
};
f.dom.DIRECT_ATTRIBUTE_MAP_ = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"};
f.dom.getViewportSize = function (a) {
    return f.dom.getViewportSize_(a || window)
};
f.dom.getViewportSize_ = function (a) {
    a = a.document;
    a = f.dom.isCss1CompatMode_(a) ? a.documentElement : a.body;
    return new f.math.Size(a.clientWidth, a.clientHeight)
};
f.dom.getDocumentHeight = function () {
    return f.dom.getDocumentHeight_(window)
};
f.dom.getDocumentHeight_ = function (a) {
    var c = a.document, d = 0;
    if (c) {
        var d = c.body, e = c.documentElement;
        if (!e || !d)return 0;
        a = f.dom.getViewportSize_(a).height;
        if (f.dom.isCss1CompatMode_(c) && e.scrollHeight)d = e.scrollHeight != a ? e.scrollHeight : e.offsetHeight; else {
            var c = e.scrollHeight, g = e.offsetHeight;
            e.clientHeight != g && (c = d.scrollHeight, g = d.offsetHeight);
            d = c > a ? c > g ? c : g : c < g ? c : g
        }
    }
    return d
};
f.dom.getPageScroll = function (a) {
    a = a || f.global || window;
    return f.dom.getDomHelper(a.document).getDocumentScroll()
};
f.dom.getDocumentScroll = function () {
    return f.dom.getDocumentScroll_(document)
};
f.dom.getDocumentScroll_ = function (a) {
    var c = f.dom.getDocumentScrollElement_(a);
    a = f.dom.getWindow_(a);
    return f.userAgent.IE && f.userAgent.isVersionOrHigher("10") && a.pageYOffset != c.scrollTop ? new f.math.Coordinate(c.scrollLeft, c.scrollTop) : new f.math.Coordinate(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop)
};
f.dom.getDocumentScrollElement = function () {
    return f.dom.getDocumentScrollElement_(document)
};
f.dom.getDocumentScrollElement_ = function (a) {
    return!f.userAgent.WEBKIT && f.dom.isCss1CompatMode_(a) ? a.documentElement : a.body || a.documentElement
};
f.dom.getWindow = function (a) {
    return a ? f.dom.getWindow_(a) : window
};
f.dom.getWindow_ = function (a) {
    return a.parentWindow || a.defaultView
};
f.dom.createDom = function (a, c, d) {
    return f.dom.createDom_(document, arguments)
};
f.dom.createDom_ = function (a, c) {
    var d = c[0], e = c[1];
    if (!f.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && e && (e.name || e.type)) {
        d = ["<", d];
        e.name && d.push(' name="', f.string.htmlEscape(e.name), '"');
        if (e.type) {
            d.push(' type="', f.string.htmlEscape(e.type), '"');
            var g = {};
            f.object.extend(g, e);
            delete g.type;
            e = g
        }
        d.push(">");
        d = d.join("")
    }
    d = a.createElement(d);
    e && (f.isString(e) ? d.className = e : f.isArray(e) ? d.className = e.join(" ") : f.dom.setProperties(d, e));
    2 < c.length && f.dom.append_(a, d, c, 2);
    return d
};
f.dom.append_ = function (a, c, d, e) {
    function g(d) {
        d && c.appendChild(f.isString(d) ? a.createTextNode(d) : d)
    }

    for (; e < d.length; e++) {
        var h = d[e];
        f.isArrayLike(h) && !f.dom.isNodeLike(h) ? f.array.forEach(f.dom.isNodeList(h) ? f.array.toArray(h) : h, g) : g(h)
    }
};
f.dom.$dom = f.dom.createDom;
f.dom.createElement = function (a) {
    return document.createElement(a)
};
f.dom.createTextNode = function (a) {
    return document.createTextNode(String(a))
};
f.dom.createTable = function (a, c, d) {
    return f.dom.createTable_(document, a, c, !!d)
};
f.dom.createTable_ = function (a, c, d, e) {
    for (var g = ["<tr>"], h = 0; h < d; h++)g.push(e ? "<td>&nbsp;</td>" : "<td></td>");
    g.push("</tr>");
    g = g.join("");
    d = ["<table>"];
    for (h = 0; h < c; h++)d.push(g);
    d.push("</table>");
    a = a.createElement(f.dom.TagName.DIV);
    a.innerHTML = d.join("");
    return a.removeChild(a.firstChild)
};
f.dom.htmlToDocumentFragment = function (a) {
    return f.dom.htmlToDocumentFragment_(document, a)
};
f.dom.htmlToDocumentFragment_ = function (a, c) {
    var d = a.createElement("div");
    f.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT ? (d.innerHTML = "<br>" + c, d.removeChild(d.firstChild)) : d.innerHTML = c;
    if (1 == d.childNodes.length)return d.removeChild(d.firstChild);
    for (var e = a.createDocumentFragment(); d.firstChild;)e.appendChild(d.firstChild);
    return e
};
f.dom.isCss1CompatMode = function () {
    return f.dom.isCss1CompatMode_(document)
};
f.dom.isCss1CompatMode_ = function (a) {
    return f.dom.COMPAT_MODE_KNOWN_ ? f.dom.ASSUME_STANDARDS_MODE : "CSS1Compat" == a.compatMode
};
f.dom.canHaveChildren = function (a) {
    if (a.nodeType != f.dom.NodeType.ELEMENT)return!1;
    switch (a.tagName) {
        case f.dom.TagName.APPLET:
        case f.dom.TagName.AREA:
        case f.dom.TagName.BASE:
        case f.dom.TagName.BR:
        case f.dom.TagName.COL:
        case f.dom.TagName.COMMAND:
        case f.dom.TagName.EMBED:
        case f.dom.TagName.FRAME:
        case f.dom.TagName.HR:
        case f.dom.TagName.IMG:
        case f.dom.TagName.INPUT:
        case f.dom.TagName.IFRAME:
        case f.dom.TagName.ISINDEX:
        case f.dom.TagName.KEYGEN:
        case f.dom.TagName.LINK:
        case f.dom.TagName.NOFRAMES:
        case f.dom.TagName.NOSCRIPT:
        case f.dom.TagName.META:
        case f.dom.TagName.OBJECT:
        case f.dom.TagName.PARAM:
        case f.dom.TagName.SCRIPT:
        case f.dom.TagName.SOURCE:
        case f.dom.TagName.STYLE:
        case f.dom.TagName.TRACK:
        case f.dom.TagName.WBR:
            return!1
    }
    return!0
};
f.dom.appendChild = function (a, c) {
    a.appendChild(c)
};
f.dom.append = function (a, c) {
    f.dom.append_(f.dom.getOwnerDocument(a), a, arguments, 1)
};
f.dom.removeChildren = function (a) {
    for (var c; c = a.firstChild;)a.removeChild(c)
};
f.dom.insertSiblingBefore = function (a, c) {
    c.parentNode && c.parentNode.insertBefore(a, c)
};
f.dom.insertSiblingAfter = function (a, c) {
    c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)
};
f.dom.insertChildAt = function (a, c, d) {
    a.insertBefore(c, a.childNodes[d] || null)
};
f.dom.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
f.dom.replaceNode = function (a, c) {
    var d = c.parentNode;
    d && d.replaceChild(a, c)
};
f.dom.flattenElement = function (a) {
    var c, d = a.parentNode;
    if (d && d.nodeType != f.dom.NodeType.DOCUMENT_FRAGMENT) {
        if (a.removeNode)return a.removeNode(!1);
        for (; c = a.firstChild;)d.insertBefore(c, a);
        return f.dom.removeNode(a)
    }
};
f.dom.getChildren = function (a) {
    return f.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && void 0 != a.children ? a.children : f.array.filter(a.childNodes, function (a) {
        return a.nodeType == f.dom.NodeType.ELEMENT
    })
};
f.dom.getFirstElementChild = function (a) {
    return void 0 != a.firstElementChild ? a.firstElementChild : f.dom.getNextElementNode_(a.firstChild, !0)
};
f.dom.getLastElementChild = function (a) {
    return void 0 != a.lastElementChild ? a.lastElementChild : f.dom.getNextElementNode_(a.lastChild, !1)
};
f.dom.getNextElementSibling = function (a) {
    return void 0 != a.nextElementSibling ? a.nextElementSibling : f.dom.getNextElementNode_(a.nextSibling, !0)
};
f.dom.getPreviousElementSibling = function (a) {
    return void 0 != a.previousElementSibling ? a.previousElementSibling : f.dom.getNextElementNode_(a.previousSibling, !1)
};
f.dom.getNextElementNode_ = function (a, c) {
    for (; a && a.nodeType != f.dom.NodeType.ELEMENT;)a = c ? a.nextSibling : a.previousSibling;
    return a
};
f.dom.getNextNode = function (a) {
    if (!a)return null;
    if (a.firstChild)return a.firstChild;
    for (; a && !a.nextSibling;)a = a.parentNode;
    return a ? a.nextSibling : null
};
f.dom.getPreviousNode = function (a) {
    if (!a)return null;
    if (!a.previousSibling)return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild;)a = a.lastChild;
    return a
};
f.dom.isNodeLike = function (a) {
    return f.isObject(a) && 0 < a.nodeType
};
f.dom.isElement = function (a) {
    return f.isObject(a) && a.nodeType == f.dom.NodeType.ELEMENT
};
f.dom.isWindow = function (a) {
    return f.isObject(a) && a.window == a
};
f.dom.getParentElement = function (a) {
    var c;
    if (f.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY && (c = f.userAgent.IE && f.userAgent.isVersionOrHigher("9") && !f.userAgent.isVersionOrHigher("10"), !(c && f.global.SVGElement && a instanceof f.global.SVGElement) && (c = a.parentElement)))return c;
    c = a.parentNode;
    return f.dom.isElement(c) ? c : null
};
f.dom.contains = function (a, c) {
    if (a.contains && c.nodeType == f.dom.NodeType.ELEMENT)return a == c || a.contains(c);
    if ("undefined" != typeof a.compareDocumentPosition)return a == c || Boolean(a.compareDocumentPosition(c) & 16);
    for (; c && a != c;)c = c.parentNode;
    return c == a
};
f.dom.compareNodeOrder = function (a, c) {
    if (a == c)return 0;
    if (a.compareDocumentPosition)return a.compareDocumentPosition(c) & 2 ? 1 : -1;
    if (f.userAgent.IE && !f.userAgent.isDocumentModeOrHigher(9)) {
        if (a.nodeType == f.dom.NodeType.DOCUMENT)return-1;
        if (c.nodeType == f.dom.NodeType.DOCUMENT)return 1
    }
    if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
        var d = a.nodeType == f.dom.NodeType.ELEMENT, e = c.nodeType == f.dom.NodeType.ELEMENT;
        if (d && e)return a.sourceIndex - c.sourceIndex;
        var g = a.parentNode, h = c.parentNode;
        return g == h ? f.dom.compareSiblingOrder_(a, c) : !d && f.dom.contains(g, c) ? -1 * f.dom.compareParentsDescendantNodeIe_(a, c) : !e && f.dom.contains(h, a) ? f.dom.compareParentsDescendantNodeIe_(c, a) : (d ? a.sourceIndex : g.sourceIndex) - (e ? c.sourceIndex : h.sourceIndex)
    }
    e = f.dom.getOwnerDocument(a);
    d = e.createRange();
    d.selectNode(a);
    d.collapse(!0);
    e = e.createRange();
    e.selectNode(c);
    e.collapse(!0);
    return d.compareBoundaryPoints(f.global.Range.START_TO_END, e)
};
f.dom.compareParentsDescendantNodeIe_ = function (a, c) {
    var d = a.parentNode;
    if (d == c)return-1;
    for (var e = c; e.parentNode != d;)e = e.parentNode;
    return f.dom.compareSiblingOrder_(e, a)
};
f.dom.compareSiblingOrder_ = function (a, c) {
    for (var d = c; d = d.previousSibling;)if (d == a)return-1;
    return 1
};
f.dom.findCommonAncestor = function (a) {
    var c, d = arguments.length;
    if (!d)return null;
    if (1 == d)return arguments[0];
    var e = [], g = Infinity;
    for (c = 0; c < d; c++) {
        for (var h = [], l = arguments[c]; l;)h.unshift(l), l = l.parentNode;
        e.push(h);
        g = Math.min(g, h.length)
    }
    h = null;
    for (c = 0; c < g; c++) {
        for (var l = e[0][c], p = 1; p < d; p++)if (l != e[p][c])return h;
        h = l
    }
    return h
};
f.dom.getOwnerDocument = function (a) {
    f.asserts.assert(a, "Node cannot be null or undefined.");
    return a.nodeType == f.dom.NodeType.DOCUMENT ? a : a.ownerDocument || a.document
};
f.dom.getFrameContentDocument = function (a) {
    return a = a.contentDocument || a.contentWindow.document
};
f.dom.getFrameContentWindow = function (a) {
    return a.contentWindow || f.dom.getWindow(f.dom.getFrameContentDocument(a))
};
f.dom.setTextContent = function (a, c) {
    f.asserts.assert(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent"in a)a.textContent = c; else if (a.nodeType == f.dom.NodeType.TEXT)a.data = c; else if (a.firstChild && a.firstChild.nodeType == f.dom.NodeType.TEXT) {
        for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
        a.firstChild.data = c
    } else {
        f.dom.removeChildren(a);
        var d = f.dom.getOwnerDocument(a);
        a.appendChild(d.createTextNode(String(c)))
    }
};
f.dom.getOuterHtml = function (a) {
    if ("outerHTML"in a)return a.outerHTML;
    var c = f.dom.getOwnerDocument(a), c = c.createElement("div");
    c.appendChild(a.cloneNode(!0));
    return c.innerHTML
};
f.dom.findNode = function (a, c) {
    var d = [], e = f.dom.findNodes_(a, c, d, !0);
    return e ? d[0] : void 0
};
f.dom.findNodes = function (a, c) {
    var d = [];
    f.dom.findNodes_(a, c, d, !1);
    return d
};
f.dom.findNodes_ = function (a, c, d, e) {
    if (null != a)for (a = a.firstChild; a;) {
        if (c(a) && (d.push(a), e) || f.dom.findNodes_(a, c, d, e))return!0;
        a = a.nextSibling
    }
    return!1
};
f.dom.TAGS_TO_IGNORE_ = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1};
f.dom.PREDEFINED_TAG_VALUES_ = {IMG: " ", BR: "\n"};
f.dom.isFocusableTabIndex = function (a) {
    return f.dom.hasSpecifiedTabIndex_(a) && f.dom.isTabIndexFocusable_(a)
};
f.dom.setFocusableTabIndex = function (a, c) {
    c ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
};
f.dom.isFocusable = function (a) {
    var c;
    return(c = f.dom.nativelySupportsFocus_(a) ? !a.disabled && (!f.dom.hasSpecifiedTabIndex_(a) || f.dom.isTabIndexFocusable_(a)) : f.dom.isFocusableTabIndex(a)) && f.userAgent.IE ? f.dom.hasNonZeroBoundingRect_(a) : c
};
f.dom.hasSpecifiedTabIndex_ = function (a) {
    a = a.getAttributeNode("tabindex");
    return f.isDefAndNotNull(a) && a.specified
};
f.dom.isTabIndexFocusable_ = function (a) {
    a = a.tabIndex;
    return f.isNumber(a) && 0 <= a && 32768 > a
};
f.dom.nativelySupportsFocus_ = function (a) {
    return a.tagName == f.dom.TagName.A || a.tagName == f.dom.TagName.INPUT || a.tagName == f.dom.TagName.TEXTAREA || a.tagName == f.dom.TagName.SELECT || a.tagName == f.dom.TagName.BUTTON
};
f.dom.hasNonZeroBoundingRect_ = function (a) {
    a = f.isFunction(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height: a.offsetHeight, width: a.offsetWidth};
    return f.isDefAndNotNull(a) && 0 < a.height && 0 < a.width
};
f.dom.getTextContent = function (a) {
    if (f.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText"in a)a = f.string.canonicalizeNewlines(a.innerText); else {
        var c = [];
        f.dom.getTextContent_(a, c, !0);
        a = c.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    f.dom.BrowserFeature.CAN_USE_INNER_TEXT || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
};
f.dom.getRawTextContent = function (a) {
    var c = [];
    f.dom.getTextContent_(a, c, !1);
    return c.join("")
};
f.dom.getTextContent_ = function (a, c, d) {
    if (!(a.nodeName in f.dom.TAGS_TO_IGNORE_))if (a.nodeType == f.dom.NodeType.TEXT)d ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else if (a.nodeName in f.dom.PREDEFINED_TAG_VALUES_)c.push(f.dom.PREDEFINED_TAG_VALUES_[a.nodeName]); else for (a = a.firstChild; a;)f.dom.getTextContent_(a, c, d), a = a.nextSibling
};
f.dom.getNodeTextLength = function (a) {
    return f.dom.getTextContent(a).length
};
f.dom.getNodeTextOffset = function (a, c) {
    for (var d = c || f.dom.getOwnerDocument(a).body, e = []; a && a != d;) {
        for (var g = a; g = g.previousSibling;)e.unshift(f.dom.getTextContent(g));
        a = a.parentNode
    }
    return f.string.trimLeft(e.join("")).replace(/ +/g, " ").length
};
f.dom.getNodeAtOffset = function (a, c, d) {
    a = [a];
    for (var e = 0, g = null; 0 < a.length && e < c;)if (g = a.pop(), !(g.nodeName in f.dom.TAGS_TO_IGNORE_))if (g.nodeType == f.dom.NodeType.TEXT)var h = g.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "), e = e + h.length; else if (g.nodeName in f.dom.PREDEFINED_TAG_VALUES_)e += f.dom.PREDEFINED_TAG_VALUES_[g.nodeName].length; else for (h = g.childNodes.length - 1; 0 <= h; h--)a.push(g.childNodes[h]);
    f.isObject(d) && (d.remainder = g ? g.nodeValue.length + c - e - 1 : 0, d.node = g);
    return g
};
f.dom.isNodeList = function (a) {
    if (a && "number" == typeof a.length) {
        if (f.isObject(a))return"function" == typeof a.item || "string" == typeof a.item;
        if (f.isFunction(a))return"function" == typeof a.item
    }
    return!1
};
f.dom.getAncestorByTagNameAndClass = function (a, c, d) {
    if (!c && !d)return null;
    var e = c ? c.toUpperCase() : null;
    return f.dom.getAncestor(a, function (a) {
        return(!e || a.nodeName == e) && (!d || f.isString(a.className) && f.array.contains(a.className.split(/\s+/), d))
    }, !0)
};
f.dom.getAncestorByClass = function (a, c) {
    return f.dom.getAncestorByTagNameAndClass(a, null, c)
};
f.dom.getAncestor = function (a, c, d, e) {
    d || (a = a.parentNode);
    d = null == e;
    for (var g = 0; a && (d || g <= e);) {
        if (c(a))return a;
        a = a.parentNode;
        g++
    }
    return null
};
f.dom.getActiveElement = function (a) {
    try {
        return a && a.activeElement
    } catch (c) {
    }
    return null
};
f.dom.getPixelRatio = function () {
    var a = f.dom.getWindow(), c = f.userAgent.GECKO && f.userAgent.MOBILE;
    return f.isDef(a.devicePixelRatio) && !c ? a.devicePixelRatio : a.matchMedia ? f.dom.matchesPixelRatio_(.75) || f.dom.matchesPixelRatio_(1.5) || f.dom.matchesPixelRatio_(2) || f.dom.matchesPixelRatio_(3) || 1 : 1
};
f.dom.matchesPixelRatio_ = function (a) {
    var c = f.dom.getWindow(), d = "(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)";
    return c.matchMedia(d).matches ? a : 0
};
f.dom.DomHelper = function (a) {
    this.document_ = a || f.global.document || document
};
b = f.dom.DomHelper.prototype;
b.getDomHelper = f.dom.getDomHelper;
b.getDocument = function () {
    return this.document_
};
b.getElement = function (a) {
    return f.dom.getElementHelper_(this.document_, a)
};
b.getRequiredElement = function (a) {
    return f.dom.getRequiredElementHelper_(this.document_, a)
};
b.$ = f.dom.DomHelper.prototype.getElement;
b.getElementsByTagNameAndClass = function (a, c, d) {
    return f.dom.getElementsByTagNameAndClass_(this.document_, a, c, d)
};
b.getElementsByClass = function (a, c) {
    var d = c || this.document_;
    return f.dom.getElementsByClass(a, d)
};
b.getElementByClass = function (a, c) {
    var d = c || this.document_;
    return f.dom.getElementByClass(a, d)
};
b.getRequiredElementByClass = function (a, c) {
    var d = c || this.document_;
    return f.dom.getRequiredElementByClass(a, d)
};
b.$$ = f.dom.DomHelper.prototype.getElementsByTagNameAndClass;
b.setProperties = f.dom.setProperties;
b.getViewportSize = function (a) {
    return f.dom.getViewportSize(a || this.getWindow())
};
b.getDocumentHeight = function () {
    return f.dom.getDocumentHeight_(this.getWindow())
};
b.createDom = function (a, c, d) {
    return f.dom.createDom_(this.document_, arguments)
};
b.$dom = f.dom.DomHelper.prototype.createDom;
b.createElement = function (a) {
    return this.document_.createElement(a)
};
b.createTextNode = function (a) {
    return this.document_.createTextNode(String(a))
};
b.createTable = function (a, c, d) {
    return f.dom.createTable_(this.document_, a, c, !!d)
};
b.htmlToDocumentFragment = function (a) {
    return f.dom.htmlToDocumentFragment_(this.document_, a)
};
b.isCss1CompatMode = function () {
    return f.dom.isCss1CompatMode_(this.document_)
};
b.getWindow = function () {
    return f.dom.getWindow_(this.document_)
};
b.getDocumentScrollElement = function () {
    return f.dom.getDocumentScrollElement_(this.document_)
};
b.getDocumentScroll = function () {
    return f.dom.getDocumentScroll_(this.document_)
};
b.getActiveElement = function (a) {
    return f.dom.getActiveElement(a || this.document_)
};
b.appendChild = f.dom.appendChild;
b.append = f.dom.append;
b.canHaveChildren = f.dom.canHaveChildren;
b.removeChildren = f.dom.removeChildren;
b.insertSiblingBefore = f.dom.insertSiblingBefore;
b.insertSiblingAfter = f.dom.insertSiblingAfter;
b.insertChildAt = f.dom.insertChildAt;
b.removeNode = f.dom.removeNode;
b.replaceNode = f.dom.replaceNode;
b.flattenElement = f.dom.flattenElement;
b.getChildren = f.dom.getChildren;
b.getFirstElementChild = f.dom.getFirstElementChild;
b.getLastElementChild = f.dom.getLastElementChild;
b.getNextElementSibling = f.dom.getNextElementSibling;
b.getPreviousElementSibling = f.dom.getPreviousElementSibling;
b.getNextNode = f.dom.getNextNode;
b.getPreviousNode = f.dom.getPreviousNode;
b.isNodeLike = f.dom.isNodeLike;
b.isElement = f.dom.isElement;
b.isWindow = f.dom.isWindow;
b.getParentElement = f.dom.getParentElement;
b.contains = f.dom.contains;
b.compareNodeOrder = f.dom.compareNodeOrder;
b.findCommonAncestor = f.dom.findCommonAncestor;
b.getOwnerDocument = f.dom.getOwnerDocument;
b.getFrameContentDocument = f.dom.getFrameContentDocument;
b.getFrameContentWindow = f.dom.getFrameContentWindow;
b.setTextContent = f.dom.setTextContent;
b.getOuterHtml = f.dom.getOuterHtml;
b.findNode = f.dom.findNode;
b.findNodes = f.dom.findNodes;
b.isFocusableTabIndex = f.dom.isFocusableTabIndex;
b.setFocusableTabIndex = f.dom.setFocusableTabIndex;
b.isFocusable = f.dom.isFocusable;
b.getTextContent = f.dom.getTextContent;
b.getNodeTextLength = f.dom.getNodeTextLength;
b.getNodeTextOffset = f.dom.getNodeTextOffset;
b.getNodeAtOffset = f.dom.getNodeAtOffset;
b.isNodeList = f.dom.isNodeList;
b.getAncestorByTagNameAndClass = f.dom.getAncestorByTagNameAndClass;
b.getAncestorByClass = f.dom.getAncestorByClass;
b.getAncestor = f.dom.getAncestor;
f.debug.entryPointRegistry = {};
f.debug.EntryPointMonitor = function () {
};
f.debug.entryPointRegistry.refList_ = [];
f.debug.entryPointRegistry.monitors_ = [];
f.debug.entryPointRegistry.monitorsMayExist_ = !1;
f.debug.entryPointRegistry.register = function (a) {
    f.debug.entryPointRegistry.refList_[f.debug.entryPointRegistry.refList_.length] = a;
    if (f.debug.entryPointRegistry.monitorsMayExist_)for (var c = f.debug.entryPointRegistry.monitors_, d = 0; d < c.length; d++)a(f.bind(c[d].wrap, c[d]))
};
f.debug.entryPointRegistry.monitorAll = function (a) {
    f.debug.entryPointRegistry.monitorsMayExist_ = !0;
    for (var c = f.bind(a.wrap, a), d = 0; d < f.debug.entryPointRegistry.refList_.length; d++)f.debug.entryPointRegistry.refList_[d](c);
    f.debug.entryPointRegistry.monitors_.push(a)
};
f.debug.entryPointRegistry.unmonitorAllIfPossible = function (a) {
    var c = f.debug.entryPointRegistry.monitors_;
    f.asserts.assert(a == c[c.length - 1], "Only the most recent monitor can be unwrapped.");
    a = f.bind(a.unwrap, a);
    for (var d = 0; d < f.debug.entryPointRegistry.refList_.length; d++)f.debug.entryPointRegistry.refList_[d](a);
    c.length--
};
f.reflect = {};
f.reflect.object = function (a, c) {
    return c
};
f.reflect.sinkValue = function (a) {
    f.reflect.sinkValue[" "](a);
    return a
};
f.reflect.sinkValue[" "] = f.nullFunction;
f.reflect.canAccessProperty = function (a, c) {
    try {
        return f.reflect.sinkValue(a[c]), !0
    } catch (d) {
    }
    return!1
};
f.events = {};
f.events.BrowserFeature = {HAS_W3C_BUTTON: !f.userAgent.IE || f.userAgent.isDocumentModeOrHigher(9), HAS_W3C_EVENT_SUPPORT: !f.userAgent.IE || f.userAgent.isDocumentModeOrHigher(9), SET_KEY_CODE_TO_PREVENT_DEFAULT: f.userAgent.IE && !f.userAgent.isVersionOrHigher("9"), HAS_NAVIGATOR_ONLINE_PROPERTY: !f.userAgent.WEBKIT || f.userAgent.isVersionOrHigher("528"), HAS_HTML5_NETWORK_EVENT_SUPPORT: f.userAgent.GECKO && f.userAgent.isVersionOrHigher("1.9b") || f.userAgent.IE && f.userAgent.isVersionOrHigher("8") || f.userAgent.OPERA && f.userAgent.isVersionOrHigher("9.5") ||
    f.userAgent.WEBKIT && f.userAgent.isVersionOrHigher("528"), HTML5_NETWORK_EVENTS_FIRE_ON_BODY: f.userAgent.GECKO && !f.userAgent.isVersionOrHigher("8") || f.userAgent.IE && !f.userAgent.isVersionOrHigher("9"), TOUCH_ENABLED: "ontouchstart"in f.global || !!(f.global.document && document.documentElement && "ontouchstart"in document.documentElement) || !(!f.global.navigator || !f.global.navigator.msMaxTouchPoints)};
f.disposable = {};
f.disposable.IDisposable = function () {
};
f.Disposable = function () {
    f.Disposable.MONITORING_MODE != f.Disposable.MonitoringMode.OFF && (f.Disposable.instances_[f.getUid(this)] = this)
};
f.Disposable.MonitoringMode = {OFF: 0, PERMANENT: 1, INTERACTIVE: 2};
f.Disposable.MONITORING_MODE = 0;
f.Disposable.INCLUDE_STACK_ON_CREATION = !0;
f.Disposable.instances_ = {};
f.Disposable.getUndisposedObjects = function () {
    var a = [], c;
    for (c in f.Disposable.instances_)f.Disposable.instances_.hasOwnProperty(c) && a.push(f.Disposable.instances_[Number(c)]);
    return a
};
f.Disposable.clearUndisposedObjects = function () {
    f.Disposable.instances_ = {}
};
b = f.Disposable.prototype;
b.disposed_ = !1;
b.isDisposed = function () {
    return this.disposed_
};
b.dispose = function () {
    if (!this.disposed_ && (this.disposed_ = !0, this.disposeInternal(), f.Disposable.MONITORING_MODE != f.Disposable.MonitoringMode.OFF)) {
        var a = f.getUid(this);
        if (f.Disposable.MONITORING_MODE == f.Disposable.MonitoringMode.PERMANENT && !f.Disposable.instances_.hasOwnProperty(a))throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
        delete f.Disposable.instances_[a]
    }
};
b.registerDisposable = function (a) {
    this.addOnDisposeCallback(f.partial(f.dispose, a))
};
b.addOnDisposeCallback = function (a, c) {
    this.onDisposeCallbacks_ || (this.onDisposeCallbacks_ = []);
    this.onDisposeCallbacks_.push(f.isDef(c) ? f.bind(a, c) : a)
};
b.disposeInternal = function () {
    if (this.onDisposeCallbacks_)for (; this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()
};
f.Disposable.isDisposed = function (a) {
    return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1
};
f.dispose = function (a) {
    a && "function" == typeof a.dispose && a.dispose()
};
f.disposeAll = function (a) {
    for (var c = 0, d = arguments.length; c < d; ++c) {
        var e = arguments[c];
        f.isArrayLike(e) ? f.disposeAll.apply(null, e) : f.dispose(e)
    }
};
f.events.EventId = function (a) {
    this.id = a
};
f.events.EventId.prototype.toString = function () {
    return this.id
};
f.events.Event = function (a, c) {
    this.type = a instanceof f.events.EventId ? String(a) : a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.propagationStopped_ = !1;
    this.returnValue_ = !0
};
f.events.Event.prototype.disposeInternal = function () {
};
f.events.Event.prototype.dispose = function () {
};
f.events.Event.prototype.stopPropagation = function () {
    this.propagationStopped_ = !0
};
f.events.Event.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.returnValue_ = !1
};
f.events.Event.stopPropagation = function (a) {
    a.stopPropagation()
};
f.events.Event.preventDefault = function (a) {
    a.preventDefault()
};
f.events.getVendorPrefixedName_ = function (a) {
    return f.userAgent.WEBKIT ? "webkit" + a : f.userAgent.OPERA ? "o" + a.toLowerCase() : a.toLowerCase()
};
f.events.EventType = {CLICK: "click", RIGHTCLICK: "rightclick", DBLCLICK: "dblclick", MOUSEDOWN: "mousedown", MOUSEUP: "mouseup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEMOVE: "mousemove", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", SELECTSTART: "selectstart", KEYPRESS: "keypress", KEYDOWN: "keydown", KEYUP: "keyup", BLUR: "blur", FOCUS: "focus", DEACTIVATE: "deactivate", FOCUSIN: f.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT: f.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE: "change", SELECT: "select", SUBMIT: "submit",
    INPUT: "input", PROPERTYCHANGE: "propertychange", DRAGSTART: "dragstart", DRAG: "drag", DRAGENTER: "dragenter", DRAGOVER: "dragover", DRAGLEAVE: "dragleave", DROP: "drop", DRAGEND: "dragend", TOUCHSTART: "touchstart", TOUCHMOVE: "touchmove", TOUCHEND: "touchend", TOUCHCANCEL: "touchcancel", BEFOREUNLOAD: "beforeunload", CONSOLEMESSAGE: "consolemessage", CONTEXTMENU: "contextmenu", DOMCONTENTLOADED: "DOMContentLoaded", ERROR: "error", HELP: "help", LOAD: "load", LOSECAPTURE: "losecapture", ORIENTATIONCHANGE: "orientationchange", READYSTATECHANGE: "readystatechange",
    RESIZE: "resize", SCROLL: "scroll", UNLOAD: "unload", HASHCHANGE: "hashchange", PAGEHIDE: "pagehide", PAGESHOW: "pageshow", POPSTATE: "popstate", COPY: "copy", PASTE: "paste", CUT: "cut", BEFORECOPY: "beforecopy", BEFORECUT: "beforecut", BEFOREPASTE: "beforepaste", ONLINE: "online", OFFLINE: "offline", MESSAGE: "message", CONNECT: "connect", ANIMATIONSTART: f.events.getVendorPrefixedName_("AnimationStart"), ANIMATIONEND: f.events.getVendorPrefixedName_("AnimationEnd"), ANIMATIONITERATION: f.events.getVendorPrefixedName_("AnimationIteration"),
    TRANSITIONEND: f.events.getVendorPrefixedName_("TransitionEnd"), POINTERDOWN: "pointerdown", POINTERUP: "pointerup", POINTERCANCEL: "pointercancel", POINTERMOVE: "pointermove", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", MSGESTURECHANGE: "MSGestureChange", MSGESTUREEND: "MSGestureEnd", MSGESTUREHOLD: "MSGestureHold", MSGESTURESTART: "MSGestureStart", MSGESTURETAP: "MSGestureTap",
    MSGOTPOINTERCAPTURE: "MSGotPointerCapture", MSINERTIASTART: "MSInertiaStart", MSLOSTPOINTERCAPTURE: "MSLostPointerCapture", MSPOINTERCANCEL: "MSPointerCancel", MSPOINTERDOWN: "MSPointerDown", MSPOINTERENTER: "MSPointerEnter", MSPOINTERHOVER: "MSPointerHover", MSPOINTERLEAVE: "MSPointerLeave", MSPOINTERMOVE: "MSPointerMove", MSPOINTEROUT: "MSPointerOut", MSPOINTEROVER: "MSPointerOver", MSPOINTERUP: "MSPointerUp", TEXTINPUT: "textinput", COMPOSITIONSTART: "compositionstart", COMPOSITIONUPDATE: "compositionupdate", COMPOSITIONEND: "compositionend",
    EXIT: "exit", LOADABORT: "loadabort", LOADCOMMIT: "loadcommit", LOADREDIRECT: "loadredirect", LOADSTART: "loadstart", LOADSTOP: "loadstop", RESPONSIVE: "responsive", SIZECHANGED: "sizechanged", UNRESPONSIVE: "unresponsive", VISIBILITYCHANGE: "visibilitychange", STORAGE: "storage", DOMSUBTREEMODIFIED: "DOMSubtreeModified", DOMNODEINSERTED: "DOMNodeInserted", DOMNODEREMOVED: "DOMNodeRemoved", DOMNODEREMOVEDFROMDOCUMENT: "DOMNodeRemovedFromDocument", DOMNODEINSERTEDINTODOCUMENT: "DOMNodeInsertedIntoDocument", DOMATTRMODIFIED: "DOMAttrModified",
    DOMCHARACTERDATAMODIFIED: "DOMCharacterDataModified"};
f.events.BrowserEvent = function (a, c) {
    f.events.Event.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.platformModifierKey = !1;
    this.event_ = null;
    a && this.init(a, c)
};
f.inherits(f.events.BrowserEvent, f.events.Event);
f.events.BrowserEvent.MouseButton = {LEFT: 0, MIDDLE: 1, RIGHT: 2};
f.events.BrowserEvent.IEButtonMap = [1, 4, 2];
b = f.events.BrowserEvent.prototype;
b.init = function (a, c) {
    var d = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = c;
    var e = a.relatedTarget;
    e ? f.userAgent.GECKO && (f.reflect.canAccessProperty(e, "nodeName") || (e = null)) : d == f.events.EventType.MOUSEOVER ? e = a.fromElement : d == f.events.EventType.MOUSEOUT && (e = a.toElement);
    this.relatedTarget = e;
    this.offsetX = f.userAgent.WEBKIT || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = f.userAgent.WEBKIT || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
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
    this.platformModifierKey = f.userAgent.MAC ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.event_ = a;
    a.defaultPrevented && this.preventDefault()
};
b.isButton = function (a) {
    return f.events.BrowserFeature.HAS_W3C_BUTTON ? this.event_.button == a : "click" == this.type ? a == f.events.BrowserEvent.MouseButton.LEFT : !!(this.event_.button & f.events.BrowserEvent.IEButtonMap[a])
};
b.isMouseActionButton = function () {
    return this.isButton(f.events.BrowserEvent.MouseButton.LEFT) && !(f.userAgent.WEBKIT && f.userAgent.MAC && this.ctrlKey)
};
b.stopPropagation = function () {
    f.events.BrowserEvent.superClass_.stopPropagation.call(this);
    this.event_.stopPropagation ? this.event_.stopPropagation() : this.event_.cancelBubble = !0
};
b.preventDefault = function () {
    f.events.BrowserEvent.superClass_.preventDefault.call(this);
    var a = this.event_;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, f.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (c) {
    }
};
b.getBrowserEvent = function () {
    return this.event_
};
b.disposeInternal = function () {
};
f.events.Listenable = function () {
};
f.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (1E6 * Math.random() | 0);
f.events.Listenable.addImplementation = function (a) {
    a.prototype[f.events.Listenable.IMPLEMENTED_BY_PROP] = !0
};
f.events.Listenable.isImplementedBy = function (a) {
    return!(!a || !a[f.events.Listenable.IMPLEMENTED_BY_PROP])
};
f.events.ListenableKey = function () {
};
f.events.ListenableKey.counter_ = 0;
f.events.ListenableKey.reserveKey = function () {
    return++f.events.ListenableKey.counter_
};
f.events.Listener = function (a, c, d, e, g, h) {
    this.listener = a;
    this.proxy = c;
    this.src = d;
    this.type = e;
    this.capture = !!g;
    this.handler = h;
    this.key = f.events.ListenableKey.reserveKey();
    this.removed = this.callOnce = !1
};
f.events.Listener.ENABLE_MONITORING = !1;
f.events.Listener.prototype.markAsRemoved = function () {
    this.removed = !0;
    this.handler = this.src = this.proxy = this.listener = null
};
f.events.ListenerMap = function (a) {
    this.src = a;
    this.listeners = {};
    this.typeCount_ = 0
};
b = f.events.ListenerMap.prototype;
b.getTypeCount = function () {
    return this.typeCount_
};
b.add = function (a, c, d, e, g) {
    var h = a.toString();
    a = this.listeners[h];
    a || (a = this.listeners[h] = [], this.typeCount_++);
    var l = f.events.ListenerMap.findListenerIndex_(a, c, e, g);
    -1 < l ? (c = a[l], d || (c.callOnce = !1)) : (c = new f.events.Listener(c, null, this.src, h, !!e, g), c.callOnce = d, a.push(c));
    return c
};
b.remove = function (a, c, d, e) {
    a = a.toString();
    if (!(a in this.listeners))return!1;
    var g = this.listeners[a];
    c = f.events.ListenerMap.findListenerIndex_(g, c, d, e);
    return-1 < c ? (d = g[c], d.markAsRemoved(), f.array.removeAt(g, c), 0 == g.length && (delete this.listeners[a], this.typeCount_--), !0) : !1
};
b.removeByKey = function (a) {
    var c = a.type;
    if (!(c in this.listeners))return!1;
    var d = f.array.remove(this.listeners[c], a);
    d && (a.markAsRemoved(), 0 == this.listeners[c].length && (delete this.listeners[c], this.typeCount_--));
    return d
};
b.removeAll = function (a) {
    a = a && a.toString();
    var c = 0, d;
    for (d in this.listeners)if (!a || d == a) {
        for (var e = this.listeners[d], g = 0; g < e.length; g++)++c, e[g].markAsRemoved();
        delete this.listeners[d];
        this.typeCount_--
    }
    return c
};
b.getListeners = function (a, c) {
    var d = this.listeners[a.toString()], e = [];
    if (d)for (var g = 0; g < d.length; ++g) {
        var h = d[g];
        h.capture == c && e.push(h)
    }
    return e
};
b.getListener = function (a, c, d, e) {
    a = this.listeners[a.toString()];
    var g = -1;
    a && (g = f.events.ListenerMap.findListenerIndex_(a, c, d, e));
    return-1 < g ? a[g] : null
};
b.hasListener = function (a, c) {
    var d = f.isDef(a), e = d ? a.toString() : "", g = f.isDef(c);
    return f.object.some(this.listeners, function (a) {
        for (var l = 0; l < a.length; ++l)if (!(d && a[l].type != e || g && a[l].capture != c))return!0;
        return!1
    })
};
f.events.ListenerMap.findListenerIndex_ = function (a, c, d, e) {
    for (var g = 0; g < a.length; ++g) {
        var h = a[g];
        if (!h.removed && h.listener == c && h.capture == !!d && h.handler == e)return g
    }
    return-1
};
f.events.LISTENER_MAP_PROP_ = "closure_lm_" + (1E6 * Math.random() | 0);
f.events.onString_ = "on";
f.events.onStringMap_ = {};
f.events.CaptureSimulationMode = {OFF_AND_FAIL: 0, OFF_AND_SILENT: 1, ON: 2};
f.events.CAPTURE_SIMULATION_MODE = 2;
f.events.listenerCountEstimate_ = 0;
f.events.listen = function (a, c, d, e, g) {
    if (f.isArray(c)) {
        for (var h = 0; h < c.length; h++)f.events.listen(a, c[h], d, e, g);
        return null
    }
    d = f.events.wrapListener(d);
    return f.events.Listenable.isImplementedBy(a) ? a.listen(c, d, e, g) : f.events.listen_(a, c, d, !1, e, g)
};
f.events.listen_ = function (a, c, d, e, g, h) {
    if (!c)throw Error("Invalid event type");
    var l = !!g;
    if (l && !f.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        if (f.events.CAPTURE_SIMULATION_MODE == f.events.CaptureSimulationMode.OFF_AND_FAIL)return f.asserts.fail("Can not register capture listener in IE8-."), null;
        if (f.events.CAPTURE_SIMULATION_MODE == f.events.CaptureSimulationMode.OFF_AND_SILENT)return null
    }
    var p = f.events.getListenerMap_(a);
    p || (a[f.events.LISTENER_MAP_PROP_] = p = new f.events.ListenerMap(a));
    d = p.add(c,
        d, e, g, h);
    if (d.proxy)return d;
    e = f.events.getProxy();
    d.proxy = e;
    e.src = a;
    e.listener = d;
    a.addEventListener ? a.addEventListener(c.toString(), e, l) : a.attachEvent(f.events.getOnString_(c.toString()), e);
    f.events.listenerCountEstimate_++;
    return d
};
f.events.getProxy = function () {
    var a = f.events.handleBrowserEvent_, c = f.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ? function (d) {
        return a.call(c.src, c.listener, d)
    } : function (d) {
        d = a.call(c.src, c.listener, d);
        if (!d)return d
    };
    return c
};
f.events.listenOnce = function (a, c, d, e, g) {
    if (f.isArray(c)) {
        for (var h = 0; h < c.length; h++)f.events.listenOnce(a, c[h], d, e, g);
        return null
    }
    d = f.events.wrapListener(d);
    return f.events.Listenable.isImplementedBy(a) ? a.listenOnce(c, d, e, g) : f.events.listen_(a, c, d, !0, e, g)
};
f.events.listenWithWrapper = function (a, c, d, e, g) {
    c.listen(a, d, e, g)
};
f.events.unlisten = function (a, c, d, e, g) {
    if (f.isArray(c)) {
        for (var h = 0; h < c.length; h++)f.events.unlisten(a, c[h], d, e, g);
        return null
    }
    d = f.events.wrapListener(d);
    if (f.events.Listenable.isImplementedBy(a))return a.unlisten(c, d, e, g);
    if (!a)return!1;
    e = !!e;
    if (a = f.events.getListenerMap_(a))if (c = a.getListener(c, d, e, g))return f.events.unlistenByKey(c);
    return!1
};
f.events.unlistenByKey = function (a) {
    if (f.isNumber(a) || !a || a.removed)return!1;
    var c = a.src;
    if (f.events.Listenable.isImplementedBy(c))return c.unlistenByKey(a);
    var d = a.type, e = a.proxy;
    c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent && c.detachEvent(f.events.getOnString_(d), e);
    f.events.listenerCountEstimate_--;
    (d = f.events.getListenerMap_(c)) ? (d.removeByKey(a), 0 == d.getTypeCount() && (d.src = null, c[f.events.LISTENER_MAP_PROP_] = null)) : a.markAsRemoved();
    return!0
};
f.events.unlistenWithWrapper = function (a, c, d, e, g) {
    c.unlisten(a, d, e, g)
};
f.events.removeAll = function (a, c) {
    if (!a)return 0;
    if (f.events.Listenable.isImplementedBy(a))return a.removeAllListeners(c);
    var d = f.events.getListenerMap_(a);
    if (!d)return 0;
    var e = 0, g = c && c.toString(), h;
    for (h in d.listeners)if (!g || h == g)for (var l = d.listeners[h].concat(), p = 0; p < l.length; ++p)f.events.unlistenByKey(l[p]) && ++e;
    return e
};
f.events.removeAllNativeListeners = function () {
    return f.events.listenerCountEstimate_ = 0
};
f.events.getListeners = function (a, c, d) {
    return f.events.Listenable.isImplementedBy(a) ? a.getListeners(c, d) : a ? (a = f.events.getListenerMap_(a)) ? a.getListeners(c, d) : [] : []
};
f.events.getListener = function (a, c, d, e, g) {
    d = f.events.wrapListener(d);
    e = !!e;
    return f.events.Listenable.isImplementedBy(a) ? a.getListener(c, d, e, g) : a ? (a = f.events.getListenerMap_(a)) ? a.getListener(c, d, e, g) : null : null
};
f.events.hasListener = function (a, c, d) {
    if (f.events.Listenable.isImplementedBy(a))return a.hasListener(c, d);
    a = f.events.getListenerMap_(a);
    return!!a && a.hasListener(c, d)
};
f.events.expose = function (a) {
    var c = [], d;
    for (d in a)a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
    return c.join("\n")
};
f.events.getOnString_ = function (a) {
    return a in f.events.onStringMap_ ? f.events.onStringMap_[a] : f.events.onStringMap_[a] = f.events.onString_ + a
};
f.events.fireListeners = function (a, c, d, e) {
    return f.events.Listenable.isImplementedBy(a) ? a.fireListeners(c, d, e) : f.events.fireListeners_(a, c, d, e)
};
f.events.fireListeners_ = function (a, c, d, e) {
    var g = 1;
    if (a = f.events.getListenerMap_(a))if (c = a.listeners[c.toString()])for (c = c.concat(), a = 0; a < c.length; a++) {
        var h = c[a];
        h && h.capture == d && !h.removed && (g &= !1 !== f.events.fireListener(h, e))
    }
    return Boolean(g)
};
f.events.fireListener = function (a, c) {
    var d = a.listener, e = a.handler || a.src;
    a.callOnce && f.events.unlistenByKey(a);
    return d.call(e, c)
};
f.events.getTotalListenerCount = function () {
    return f.events.listenerCountEstimate_
};
f.events.dispatchEvent = function (a, c) {
    f.asserts.assert(f.events.Listenable.isImplementedBy(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
    return a.dispatchEvent(c)
};
f.events.protectBrowserEventEntryPoint = function (a) {
    f.events.handleBrowserEvent_ = a.protectEntryPoint(f.events.handleBrowserEvent_)
};
f.events.handleBrowserEvent_ = function (a, c) {
    if (a.removed)return!0;
    if (!f.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT) {
        var d = c || f.getObjectByName("window.event"), e = new f.events.BrowserEvent(d, this), g = !0;
        if (f.events.CAPTURE_SIMULATION_MODE == f.events.CaptureSimulationMode.ON) {
            if (!f.events.isMarkedIeEvent_(d)) {
                f.events.markIeEvent_(d);
                for (var d = [], h = e.currentTarget; h; h = h.parentNode)d.push(h);
                for (var h = a.type, l = d.length - 1; !e.propagationStopped_ && 0 <= l; l--)e.currentTarget = d[l], g &= f.events.fireListeners_(d[l],
                    h, !0, e);
                for (l = 0; !e.propagationStopped_ && l < d.length; l++)e.currentTarget = d[l], g &= f.events.fireListeners_(d[l], h, !1, e)
            }
        } else g = f.events.fireListener(a, e);
        return g
    }
    return f.events.fireListener(a, new f.events.BrowserEvent(c, this))
};
f.events.markIeEvent_ = function (a) {
    var c = !1;
    if (0 == a.keyCode)try {
        a.keyCode = -1;
        return
    } catch (d) {
        c = !0
    }
    if (c || void 0 == a.returnValue)a.returnValue = !0
};
f.events.isMarkedIeEvent_ = function (a) {
    return 0 > a.keyCode || void 0 != a.returnValue
};
f.events.uniqueIdCounter_ = 0;
f.events.getUniqueId = function (a) {
    return a + "_" + f.events.uniqueIdCounter_++
};
f.events.getListenerMap_ = function (a) {
    a = a[f.events.LISTENER_MAP_PROP_];
    return a instanceof f.events.ListenerMap ? a : null
};
f.events.LISTENER_WRAPPER_PROP_ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
f.events.wrapListener = function (a) {
    f.asserts.assert(a, "Listener can not be null.");
    if (f.isFunction(a))return a;
    f.asserts.assert(a.handleEvent, "An object listener must have handleEvent method.");
    a[f.events.LISTENER_WRAPPER_PROP_] || (a[f.events.LISTENER_WRAPPER_PROP_] = function (c) {
        return a.handleEvent(c)
    });
    return a[f.events.LISTENER_WRAPPER_PROP_]
};
f.debug.entryPointRegistry.register(function (a) {
    f.events.handleBrowserEvent_ = a(f.events.handleBrowserEvent_)
});
f.events.EventHandler = function (a) {
    f.Disposable.call(this);
    this.handler_ = a;
    this.keys_ = {}
};
f.inherits(f.events.EventHandler, f.Disposable);
f.events.EventHandler.typeArray_ = [];
b = f.events.EventHandler.prototype;
b.listen = function (a, c, d, e) {
    return this.listen_(a, c, d, e)
};
b.listen_ = function (a, c, d, e, g) {
    f.isArray(c) || (c && (f.events.EventHandler.typeArray_[0] = c.toString()), c = f.events.EventHandler.typeArray_);
    for (var h = 0; h < c.length; h++) {
        var l = f.events.listen(a, c[h], d || this.handleEvent, e || !1, g || this.handler_ || this);
        if (!l)break;
        var p = l.key;
        this.keys_[p] = l
    }
    return this
};
b.listenOnce = function (a, c, d, e) {
    return this.listenOnce_(a, c, d, e)
};
b.listenOnce_ = function (a, c, d, e, g) {
    if (f.isArray(c))for (var h = 0; h < c.length; h++)this.listenOnce_(a, c[h], d, e, g); else {
        a = f.events.listenOnce(a, c, d || this.handleEvent, e, g || this.handler_ || this);
        if (!a)return this;
        c = a.key;
        this.keys_[c] = a
    }
    return this
};
b.listenWithWrapper = function (a, c, d, e) {
    return this.listenWithWrapper_(a, c, d, e)
};
b.listenWithWrapper_ = function (a, c, d, e, g) {
    c.listen(a, d, e, g || this.handler_ || this, this);
    return this
};
b.unlisten = function (a, c, d, e, g) {
    if (f.isArray(c))for (var h = 0; h < c.length; h++)this.unlisten(a, c[h], d, e, g); else if (a = f.events.getListener(a, c, d || this.handleEvent, e, g || this.handler_ || this))f.events.unlistenByKey(a), delete this.keys_[a.key];
    return this
};
b.unlistenWithWrapper = function (a, c, d, e, g) {
    c.unlisten(a, d, e, g || this.handler_ || this, this);
    return this
};
b.removeAll = function () {
    f.object.forEach(this.keys_, f.events.unlistenByKey);
    this.keys_ = {}
};
b.disposeInternal = function () {
    f.events.EventHandler.superClass_.disposeInternal.call(this);
    this.removeAll()
};
b.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
f.events.EventTarget = function () {
    f.Disposable.call(this);
    this.eventTargetListeners_ = new f.events.ListenerMap(this);
    this.actualEventTarget_ = this;
    this.parentEventTarget_ = null
};
f.inherits(f.events.EventTarget, f.Disposable);
f.events.Listenable.addImplementation(f.events.EventTarget);
f.events.EventTarget.MAX_ANCESTORS_ = 1E3;
b = f.events.EventTarget.prototype;
b.getParentEventTarget = function () {
    return this.parentEventTarget_
};
b.setParentEventTarget = function (a) {
    this.parentEventTarget_ = a
};
b.addEventListener = function (a, c, d, e) {
    f.events.listen(this, a, c, d, e)
};
b.removeEventListener = function (a, c, d, e) {
    f.events.unlisten(this, a, c, d, e)
};
b.dispatchEvent = function (a) {
    this.assertInitialized_();
    var c, d = this.getParentEventTarget();
    if (d) {
        c = [];
        for (var e = 1; d; d = d.getParentEventTarget())c.push(d), f.asserts.assert(++e < f.events.EventTarget.MAX_ANCESTORS_, "infinite loop")
    }
    return f.events.EventTarget.dispatchEventInternal_(this.actualEventTarget_, a, c)
};
b.disposeInternal = function () {
    f.events.EventTarget.superClass_.disposeInternal.call(this);
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
    for (var e = !0, g = 0; g < a.length; ++g) {
        var h = a[g];
        if (h && !h.removed && h.capture == c) {
            var l = h.listener, p = h.handler || h.src;
            h.callOnce && this.unlistenByKey(h);
            e = !1 !== l.call(p, d) && e
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
    var d = f.isDef(a) ? String(a) : void 0;
    return this.eventTargetListeners_.hasListener(d, c)
};
b.assertInitialized_ = function () {
    f.asserts.assert(this.eventTargetListeners_, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
f.events.EventTarget.dispatchEventInternal_ = function (a, c, d) {
    var e = c.type || c;
    if (f.isString(c))c = new f.events.Event(c, a); else if (c instanceof f.events.Event)c.target = c.target || a; else {
        var g = c;
        c = new f.events.Event(e, a);
        f.object.extend(c, g)
    }
    var g = !0, h;
    if (d)for (var l = d.length - 1; !c.propagationStopped_ && 0 <= l; l--)h = c.currentTarget = d[l], g = h.fireListeners(e, !0, c) && g;
    c.propagationStopped_ || (h = c.currentTarget = a, g = h.fireListeners(e, !0, c) && g, c.propagationStopped_ || (g = h.fireListeners(e, !1, c) && g));
    if (d)for (l = 0; !c.propagationStopped_ &&
        l < d.length; l++)h = c.currentTarget = d[l], g = h.fireListeners(e, !1, c) && g;
    return g
};
f.dom.vendor = {};
f.dom.vendor.getVendorJsPrefix = function () {
    return f.userAgent.WEBKIT ? "Webkit" : f.userAgent.GECKO ? "Moz" : f.userAgent.IE ? "ms" : f.userAgent.OPERA ? "O" : null
};
f.dom.vendor.getVendorPrefix = function () {
    return f.userAgent.WEBKIT ? "-webkit" : f.userAgent.GECKO ? "-moz" : f.userAgent.IE ? "-ms" : f.userAgent.OPERA ? "-o" : null
};
f.dom.vendor.getPrefixedPropertyName = function (a, c) {
    if (c && a in c)return a;
    var d = f.dom.vendor.getVendorJsPrefix();
    return d ? (d = d.toLowerCase(), d += f.string.toTitleCase(a), !f.isDef(c) || d in c ? d : null) : null
};
f.dom.vendor.getPrefixedEventType = function (a) {
    var c = f.dom.vendor.getVendorJsPrefix() || "";
    return(c + a).toLowerCase()
};
f.math.Box = function (a, c, d, e) {
    this.top = a;
    this.right = c;
    this.bottom = d;
    this.left = e
};
f.math.Box.boundingBox = function (a) {
    for (var c = new f.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), d = 1; d < arguments.length; d++) {
        var e = arguments[d];
        c.top = Math.min(c.top, e.y);
        c.right = Math.max(c.right, e.x);
        c.bottom = Math.max(c.bottom, e.y);
        c.left = Math.min(c.left, e.x)
    }
    return c
};
f.math.Box.prototype.getWidth = function () {
    return this.right - this.left
};
f.math.Box.prototype.clone = function () {
    return new f.math.Box(this.top, this.right, this.bottom, this.left)
};
f.DEBUG && (f.math.Box.prototype.toString = function () {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
});
f.math.Box.prototype.contains = function (a) {
    return f.math.Box.contains(this, a)
};
f.math.Box.prototype.expand = function (a, c, d, e) {
    f.isObject(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += c, this.bottom += d, this.left -= e);
    return this
};
f.math.Box.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.top == c.top && a.right == c.right && a.bottom == c.bottom && a.left == c.left : !1
};
f.math.Box.contains = function (a, c) {
    return a && c ? c instanceof f.math.Box ? c.left >= a.left && c.right <= a.right && c.top >= a.top && c.bottom <= a.bottom : c.x >= a.left && c.x <= a.right && c.y >= a.top && c.y <= a.bottom : !1
};
f.math.Box.relativePositionX = function (a, c) {
    return c.x < a.left ? c.x - a.left : c.x > a.right ? c.x - a.right : 0
};
f.math.Box.relativePositionY = function (a, c) {
    return c.y < a.top ? c.y - a.top : c.y > a.bottom ? c.y - a.bottom : 0
};
f.math.Box.distance = function (a, c) {
    var d = f.math.Box.relativePositionX(a, c), e = f.math.Box.relativePositionY(a, c);
    return Math.sqrt(d * d + e * e)
};
f.math.Box.intersects = function (a, c) {
    return a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom
};
f.math.Box.intersectsWithPadding = function (a, c, d) {
    return a.left <= c.right + d && c.left <= a.right + d && a.top <= c.bottom + d && c.top <= a.bottom + d
};
b = f.math.Box.prototype;
b.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
b.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
b.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
b.translate = function (a, c) {
    a instanceof f.math.Coordinate ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, f.isNumber(c) && (this.top += c, this.bottom += c));
    return this
};
b.scale = function (a, c) {
    var d = f.isNumber(c) ? c : a;
    this.left *= a;
    this.right *= a;
    this.top *= d;
    this.bottom *= d;
    return this
};
f.math.Rect = function (a, c, d, e) {
    this.left = a;
    this.top = c;
    this.width = d;
    this.height = e
};
f.math.Rect.prototype.clone = function () {
    return new f.math.Rect(this.left, this.top, this.width, this.height)
};
f.math.Rect.prototype.toBox = function () {
    var a = this.left + this.width, c = this.top + this.height;
    return new f.math.Box(this.top, a, c, this.left)
};
f.math.Rect.createFromBox = function (a) {
    return new f.math.Rect(a.left, a.top, a.right - a.left, a.bottom - a.top)
};
f.DEBUG && (f.math.Rect.prototype.toString = function () {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
});
f.math.Rect.equals = function (a, c) {
    return a == c ? !0 : a && c ? a.left == c.left && a.width == c.width && a.top == c.top && a.height == c.height : !1
};
f.math.Rect.prototype.intersection = function (a) {
    var c = Math.max(this.left, a.left), d = Math.min(this.left + this.width, a.left + a.width);
    if (c <= d) {
        var e = Math.max(this.top, a.top);
        a = Math.min(this.top + this.height, a.top + a.height);
        if (e <= a)return this.left = c, this.top = e, this.width = d - c, this.height = a - e, !0
    }
    return!1
};
f.math.Rect.intersection = function (a, c) {
    var d = Math.max(a.left, c.left), e = Math.min(a.left + a.width, c.left + c.width);
    if (d <= e) {
        var g = Math.max(a.top, c.top), h = Math.min(a.top + a.height, c.top + c.height);
        if (g <= h)return new f.math.Rect(d, g, e - d, h - g)
    }
    return null
};
f.math.Rect.intersects = function (a, c) {
    return a.left <= c.left + c.width && c.left <= a.left + a.width && a.top <= c.top + c.height && c.top <= a.top + a.height
};
f.math.Rect.prototype.intersects = function (a) {
    return f.math.Rect.intersects(this, a)
};
f.math.Rect.difference = function (a, c) {
    var d = f.math.Rect.intersection(a, c);
    if (!d || !d.height || !d.width)return[a.clone()];
    var d = [], e = a.top, g = a.height, h = a.left + a.width, l = a.top + a.height, p = c.left + c.width, q = c.top + c.height;
    c.top > a.top && (d.push(new f.math.Rect(a.left, a.top, a.width, c.top - a.top)), e = c.top, g -= c.top - a.top);
    q < l && (d.push(new f.math.Rect(a.left, q, a.width, l - q)), g = q - e);
    c.left > a.left && d.push(new f.math.Rect(a.left, e, c.left - a.left, g));
    p < h && d.push(new f.math.Rect(p, e, h - p, g));
    return d
};
f.math.Rect.prototype.difference = function (a) {
    return f.math.Rect.difference(this, a)
};
f.math.Rect.prototype.boundingRect = function (a) {
    var c = Math.max(this.left + this.width, a.left + a.width), d = Math.max(this.top + this.height, a.top + a.height);
    this.left = Math.min(this.left, a.left);
    this.top = Math.min(this.top, a.top);
    this.width = c - this.left;
    this.height = d - this.top
};
f.math.Rect.boundingRect = function (a, c) {
    if (!a || !c)return null;
    var d = a.clone();
    d.boundingRect(c);
    return d
};
b = f.math.Rect.prototype;
b.contains = function (a) {
    return a instanceof f.math.Rect ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
b.squaredDistance = function (a) {
    var c = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
    a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
    return c * c + a * a
};
b.distance = function (a) {
    return Math.sqrt(this.squaredDistance(a))
};
b.getSize = function () {
    return new f.math.Size(this.width, this.height)
};
b.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
b.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
b.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
b.translate = function (a, c) {
    a instanceof f.math.Coordinate ? (this.left += a.x, this.top += a.y) : (this.left += a, f.isNumber(c) && (this.top += c));
    return this
};
b.scale = function (a, c) {
    var d = f.isNumber(c) ? c : a;
    this.left *= a;
    this.width *= a;
    this.top *= d;
    this.height *= d;
    return this
};
f.style = {};
f.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS = !1;
f.style.setStyle = function (a, c, d) {
    f.isString(c) ? f.style.setStyle_(a, d, c) : f.object.forEach(c, f.partial(f.style.setStyle_, a))
};
f.style.setStyle_ = function (a, c, d) {
    (d = f.style.getVendorJsStyleName_(a, d)) && (a.style[d] = c)
};
f.style.getVendorJsStyleName_ = function (a, c) {
    var d = f.string.toCamelCase(c);
    if (void 0 === a.style[d]) {
        var e = f.dom.vendor.getVendorJsPrefix() + f.string.toTitleCase(d);
        if (void 0 !== a.style[e])return e
    }
    return d
};
f.style.getVendorStyleName_ = function (a, c) {
    var d = f.string.toCamelCase(c);
    return void 0 === a.style[d] && (d = f.dom.vendor.getVendorJsPrefix() + f.string.toTitleCase(d), void 0 !== a.style[d]) ? f.dom.vendor.getVendorPrefix() + "-" + c : c
};
f.style.getStyle = function (a, c) {
    var d = a.style[f.string.toCamelCase(c)];
    return"undefined" !== typeof d ? d : a.style[f.style.getVendorJsStyleName_(a, c)] || ""
};
f.style.getComputedStyle = function (a, c) {
    var d = f.dom.getOwnerDocument(a);
    return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
};
f.style.getCascadedStyle = function (a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
f.style.getStyle_ = function (a, c) {
    return f.style.getComputedStyle(a, c) || f.style.getCascadedStyle(a, c) || a.style && a.style[c]
};
f.style.getComputedBoxSizing = function (a) {
    return f.style.getStyle_(a, "boxSizing") || f.style.getStyle_(a, "MozBoxSizing") || f.style.getStyle_(a, "WebkitBoxSizing") || null
};
f.style.getComputedPosition = function (a) {
    return f.style.getStyle_(a, "position")
};
f.style.getBackgroundColor = function (a) {
    return f.style.getStyle_(a, "backgroundColor")
};
f.style.getComputedOverflowX = function (a) {
    return f.style.getStyle_(a, "overflowX")
};
f.style.getComputedOverflowY = function (a) {
    return f.style.getStyle_(a, "overflowY")
};
f.style.getComputedZIndex = function (a) {
    return f.style.getStyle_(a, "zIndex")
};
f.style.getComputedTextAlign = function (a) {
    return f.style.getStyle_(a, "textAlign")
};
f.style.getComputedCursor = function (a) {
    return f.style.getStyle_(a, "cursor")
};
f.style.getComputedTransform = function (a) {
    var c = f.style.getVendorStyleName_(a, "transform");
    return f.style.getStyle_(a, c) || f.style.getStyle_(a, "transform")
};
f.style.setPosition = function (a, c, d) {
    var e, g = f.userAgent.GECKO && (f.userAgent.MAC || f.userAgent.X11) && f.userAgent.isVersionOrHigher("1.9");
    c instanceof f.math.Coordinate ? (e = c.x, c = c.y) : (e = c, c = d);
    a.style.left = f.style.getPixelStyleValue_(e, g);
    a.style.top = f.style.getPixelStyleValue_(c, g)
};
f.style.getPosition = function (a) {
    return new f.math.Coordinate(a.offsetLeft, a.offsetTop)
};
f.style.getClientViewportElement = function (a) {
    a = a ? f.dom.getOwnerDocument(a) : f.dom.getDocument();
    return!f.userAgent.IE || f.userAgent.isDocumentModeOrHigher(9) || f.dom.getDomHelper(a).isCss1CompatMode() ? a.documentElement : a.body
};
f.style.getViewportPageOffset = function (a) {
    var c = a.body, d = a.documentElement;
    a = c.scrollLeft || d.scrollLeft;
    c = c.scrollTop || d.scrollTop;
    return new f.math.Coordinate(a, c)
};
f.style.getBoundingClientRect_ = function (a) {
    var c;
    try {
        c = a.getBoundingClientRect()
    } catch (d) {
        return{left: 0, top: 0, right: 0, bottom: 0}
    }
    f.userAgent.IE && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
    return c
};
f.style.getOffsetParent = function (a) {
    if (f.userAgent.IE && !f.userAgent.isDocumentModeOrHigher(8))return a.offsetParent;
    var c = f.dom.getOwnerDocument(a), d = f.style.getStyle_(a, "position"), e = "fixed" == d || "absolute" == d;
    for (a = a.parentNode; a && a != c; a = a.parentNode)if (d = f.style.getStyle_(a, "position"), e = e && "static" == d && a != c.documentElement && a != c.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == d || "absolute" == d || "relative" == d))return a;
    return null
};
f.style.getVisibleRectForElement = function (a) {
    for (var c = new f.math.Box(0, Infinity, Infinity, 0), d = f.dom.getDomHelper(a), e = d.getDocument().body, g = d.getDocument().documentElement, h = d.getDocumentScrollElement(); a = f.style.getOffsetParent(a);)if (!(f.userAgent.IE && 0 == a.clientWidth || f.userAgent.WEBKIT && 0 == a.clientHeight && a == e) && a != e && a != g && "visible" != f.style.getStyle_(a, "overflow")) {
        var l = f.style.getPageOffset(a), p = f.style.getClientLeftTop(a);
        l.x += p.x;
        l.y += p.y;
        c.top = Math.max(c.top, l.y);
        c.right = Math.min(c.right,
                l.x + a.clientWidth);
        c.bottom = Math.min(c.bottom, l.y + a.clientHeight);
        c.left = Math.max(c.left, l.x)
    }
    e = h.scrollLeft;
    h = h.scrollTop;
    c.left = Math.max(c.left, e);
    c.top = Math.max(c.top, h);
    d = d.getViewportSize();
    c.right = Math.min(c.right, e + d.width);
    c.bottom = Math.min(c.bottom, h + d.height);
    return 0 <= c.top && 0 <= c.left && c.bottom > c.top && c.right > c.left ? c : null
};
f.style.getContainerOffsetToScrollInto = function (a, c, d) {
    var e = f.style.getPageOffset(a), g = f.style.getPageOffset(c), h = f.style.getBorderBox(c), l = e.x - g.x - h.left, e = e.y - g.y - h.top, g = c.clientWidth - a.offsetWidth;
    a = c.clientHeight - a.offsetHeight;
    h = c.scrollLeft;
    c = c.scrollTop;
    d ? (h += l - g / 2, c += e - a / 2) : (h += Math.min(l, Math.max(l - g, 0)), c += Math.min(e, Math.max(e - a, 0)));
    return new f.math.Coordinate(h, c)
};
f.style.scrollIntoContainerView = function (a, c, d) {
    a = f.style.getContainerOffsetToScrollInto(a, c, d);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
f.style.getClientLeftTop = function (a) {
    if (f.userAgent.GECKO && !f.userAgent.isVersionOrHigher("1.9")) {
        var c = parseFloat(f.style.getComputedStyle(a, "borderLeftWidth"));
        if (f.style.isRightToLeft(a))var d = a.offsetWidth - a.clientWidth - c - parseFloat(f.style.getComputedStyle(a, "borderRightWidth")), c = c + d;
        return new f.math.Coordinate(c, parseFloat(f.style.getComputedStyle(a, "borderTopWidth")))
    }
    return new f.math.Coordinate(a.clientLeft, a.clientTop)
};
f.style.getPageOffset = function (a) {
    var c, d = f.dom.getOwnerDocument(a), e = f.style.getStyle_(a, "position");
    f.asserts.assertObject(a, "Parameter is required");
    var g = !f.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS && f.userAgent.GECKO && d.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), h = new f.math.Coordinate(0, 0), l = f.style.getClientViewportElement(d);
    if (a == l)return h;
    if (f.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS || a.getBoundingClientRect)c = f.style.getBoundingClientRect_(a),
        a = f.dom.getDomHelper(d).getDocumentScroll(), h.x = c.left + a.x, h.y = c.top + a.y; else if (d.getBoxObjectFor && !g)c = d.getBoxObjectFor(a), a = d.getBoxObjectFor(l), h.x = c.screenX - a.screenX, h.y = c.screenY - a.screenY; else {
        c = a;
        do {
            h.x += c.offsetLeft;
            h.y += c.offsetTop;
            c != a && (h.x += c.clientLeft || 0, h.y += c.clientTop || 0);
            if (f.userAgent.WEBKIT && "fixed" == f.style.getComputedPosition(c)) {
                h.x += d.body.scrollLeft;
                h.y += d.body.scrollTop;
                break
            }
            c = c.offsetParent
        } while (c && c != a);
        if (f.userAgent.OPERA || f.userAgent.WEBKIT && "absolute" == e)h.y -=
            d.body.offsetTop;
        for (c = a; (c = f.style.getOffsetParent(c)) && c != d.body && c != l;)h.x -= c.scrollLeft, f.userAgent.OPERA && "TR" == c.tagName || (h.y -= c.scrollTop)
    }
    return h
};
f.style.getPageOffsetLeft = function (a) {
    return f.style.getPageOffset(a).x
};
f.style.getPageOffsetTop = function (a) {
    return f.style.getPageOffset(a).y
};
f.style.getFramedPageOffset = function (a, c) {
    var d = new f.math.Coordinate(0, 0), e = f.dom.getWindow(f.dom.getOwnerDocument(a)), g = a;
    do {
        var h = e == c ? f.style.getPageOffset(g) : f.style.getClientPositionForElement_(f.asserts.assert(g));
        d.x += h.x;
        d.y += h.y
    } while (e && e != c && (g = e.frameElement) && (e = e.parent));
    return d
};
f.style.translateRectForAnotherFrame = function (a, c, d) {
    if (c.getDocument() != d.getDocument()) {
        var e = c.getDocument().body;
        d = f.style.getFramedPageOffset(e, d.getWindow());
        d = f.math.Coordinate.difference(d, f.style.getPageOffset(e));
        !f.userAgent.IE || f.userAgent.isDocumentModeOrHigher(9) || c.isCss1CompatMode() || (d = f.math.Coordinate.difference(d, c.getDocumentScroll()));
        a.left += d.x;
        a.top += d.y
    }
};
f.style.getRelativePosition = function (a, c) {
    var d = f.style.getClientPosition(a), e = f.style.getClientPosition(c);
    return new f.math.Coordinate(d.x - e.x, d.y - e.y)
};
f.style.getClientPositionForElement_ = function (a) {
    var c;
    if (f.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS || a.getBoundingClientRect)c = f.style.getBoundingClientRect_(a), c = new f.math.Coordinate(c.left, c.top); else {
        c = f.dom.getDomHelper(a).getDocumentScroll();
        var d = f.style.getPageOffset(a);
        c = new f.math.Coordinate(d.x - c.x, d.y - c.y)
    }
    return f.userAgent.GECKO && !f.userAgent.isVersionOrHigher(12) ? f.math.Coordinate.sum(c, f.style.getCssTranslation(a)) : c
};
f.style.getClientPosition = function (a) {
    f.asserts.assert(a);
    if (a.nodeType == f.dom.NodeType.ELEMENT)return f.style.getClientPositionForElement_(a);
    var c = f.isFunction(a.getBrowserEvent), d = a, e = a;
    a.targetTouches && a.targetTouches.length ? e = a.targetTouches[0] : c && d.getBrowserEvent().targetTouches && d.getBrowserEvent().targetTouches.length && (e = d.getBrowserEvent().targetTouches[0]);
    return new f.math.Coordinate(e.clientX, e.clientY)
};
f.style.setPageOffset = function (a, c, d) {
    var e = f.style.getPageOffset(a);
    c instanceof f.math.Coordinate && (d = c.y, c = c.x);
    c -= e.x;
    d -= e.y;
    f.style.setPosition(a, a.offsetLeft + c, a.offsetTop + d)
};
f.style.setSize = function (a, c, d) {
    if (c instanceof f.math.Size)d = c.height, c = c.width; else if (void 0 == d)throw Error("missing height argument");
    f.style.setWidth(a, c);
    f.style.setHeight(a, d)
};
f.style.getPixelStyleValue_ = function (a, c) {
    "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
    return a
};
f.style.setHeight = function (a, c) {
    a.style.height = f.style.getPixelStyleValue_(c, !0)
};
f.style.setWidth = function (a, c) {
    a.style.width = f.style.getPixelStyleValue_(c, !0)
};
f.style.getSize = function (a) {
    return f.style.evaluateWithTemporaryDisplay_(f.style.getSizeWithDisplay_, a)
};
f.style.evaluateWithTemporaryDisplay_ = function (a, c) {
    if ("none" != f.style.getStyle_(c, "display"))return a(c);
    var d = c.style, e = d.display, g = d.visibility, h = d.position;
    d.visibility = "hidden";
    d.position = "absolute";
    d.display = "inline";
    var l = a(c);
    d.display = e;
    d.position = h;
    d.visibility = g;
    return l
};
f.style.getSizeWithDisplay_ = function (a) {
    var c = a.offsetWidth, d = a.offsetHeight, e = f.userAgent.WEBKIT && !c && !d;
    return f.isDef(c) && !e || !a.getBoundingClientRect ? new f.math.Size(c, d) : (a = f.style.getBoundingClientRect_(a), new f.math.Size(a.right - a.left, a.bottom - a.top))
};
f.style.getTransformedSize = function (a) {
    if (!a.getBoundingClientRect)return null;
    a = f.style.evaluateWithTemporaryDisplay_(f.style.getBoundingClientRect_, a);
    return new f.math.Size(a.right - a.left, a.bottom - a.top)
};
f.style.getBounds = function (a) {
    var c = f.style.getPageOffset(a);
    a = f.style.getSize(a);
    return new f.math.Rect(c.x, c.y, a.width, a.height)
};
f.style.toCamelCase = function (a) {
    return f.string.toCamelCase(String(a))
};
f.style.toSelectorCase = function (a) {
    return f.string.toSelectorCase(a)
};
f.style.getOpacity = function (a) {
    var c = a.style;
    a = "";
    "opacity"in c ? a = c.opacity : "MozOpacity"in c ? a = c.MozOpacity : "filter"in c && (c = c.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = String(c[1] / 100));
    return"" == a ? a : Number(a)
};
f.style.setOpacity = function (a, c) {
    var d = a.style;
    "opacity"in d ? d.opacity = c : "MozOpacity"in d ? d.MozOpacity = c : "filter"in d && (d.filter = "" === c ? "" : "alpha(opacity=" + 100 * c + ")")
};
f.style.setTransparentBackgroundImage = function (a, c) {
    var d = a.style;
    f.userAgent.IE && !f.userAgent.isVersionOrHigher("8") ? d.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + c + '", sizingMethod="crop")' : (d.backgroundImage = "url(" + c + ")", d.backgroundPosition = "top left", d.backgroundRepeat = "no-repeat")
};
f.style.clearTransparentBackgroundImage = function (a) {
    a = a.style;
    "filter"in a ? a.filter = "" : a.backgroundImage = "none"
};
f.style.showElement = function (a, c) {
    f.style.setElementShown(a, c)
};
f.style.setElementShown = function (a, c) {
    a.style.display = c ? "" : "none"
};
f.style.isElementShown = function (a) {
    return"none" != a.style.display
};
f.style.installStyles = function (a, c) {
    var d = f.dom.getDomHelper(c), e = null, g = d.getDocument();
    f.userAgent.IE && g.createStyleSheet ? (e = g.createStyleSheet(), f.style.setStyles(e, a)) : (g = d.getElementsByTagNameAndClass("head")[0], g || (e = d.getElementsByTagNameAndClass("body")[0], g = d.createDom("head"), e.parentNode.insertBefore(g, e)), e = d.createDom("style"), f.style.setStyles(e, a), d.appendChild(g, e));
    return e
};
f.style.uninstallStyles = function (a) {
    a = a.ownerNode || a.owningElement || a;
    f.dom.removeNode(a)
};
f.style.setStyles = function (a, c) {
    f.userAgent.IE && f.isDef(a.cssText) ? a.cssText = c : a.innerHTML = c
};
f.style.setPreWrap = function (a) {
    a = a.style;
    f.userAgent.IE && !f.userAgent.isVersionOrHigher("8") ? (a.whiteSpace = "pre", a.wordWrap = "break-word") : a.whiteSpace = f.userAgent.GECKO ? "-moz-pre-wrap" : "pre-wrap"
};
f.style.setInlineBlock = function (a) {
    a = a.style;
    a.position = "relative";
    f.userAgent.IE && !f.userAgent.isVersionOrHigher("8") ? (a.zoom = "1", a.display = "inline") : a.display = f.userAgent.GECKO ? f.userAgent.isVersionOrHigher("1.9a") ? "inline-block" : "-moz-inline-box" : "inline-block"
};
f.style.isRightToLeft = function (a) {
    return"rtl" == f.style.getStyle_(a, "direction")
};
f.style.unselectableStyle_ = f.userAgent.GECKO ? "MozUserSelect" : f.userAgent.WEBKIT ? "WebkitUserSelect" : null;
f.style.isUnselectable = function (a) {
    return f.style.unselectableStyle_ ? "none" == a.style[f.style.unselectableStyle_].toLowerCase() : f.userAgent.IE || f.userAgent.OPERA ? "on" == a.getAttribute("unselectable") : !1
};
f.style.setUnselectable = function (a, c, d) {
    d = d ? null : a.getElementsByTagName("*");
    var e = f.style.unselectableStyle_;
    if (e) {
        if (c = c ? "none" : "", a.style[e] = c, d) {
            a = 0;
            for (var g; g = d[a]; a++)g.style[e] = c
        }
    } else if (f.userAgent.IE || f.userAgent.OPERA)if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)for (a = 0; g = d[a]; a++)g.setAttribute("unselectable", c)
};
f.style.getBorderBoxSize = function (a) {
    return new f.math.Size(a.offsetWidth, a.offsetHeight)
};
f.style.setBorderBoxSize = function (a, c) {
    var d = f.dom.getOwnerDocument(a), e = f.dom.getDomHelper(d).isCss1CompatMode();
    if (!f.userAgent.IE || f.userAgent.isVersionOrHigher("10") || e && f.userAgent.isVersionOrHigher("8"))f.style.setBoxSizingSize_(a, c, "border-box"); else if (d = a.style, e) {
        var e = f.style.getPaddingBox(a), g = f.style.getBorderBox(a);
        d.pixelWidth = c.width - g.left - e.left - e.right - g.right;
        d.pixelHeight = c.height - g.top - e.top - e.bottom - g.bottom
    } else d.pixelWidth = c.width, d.pixelHeight = c.height
};
f.style.getContentBoxSize = function (a) {
    var c = f.dom.getOwnerDocument(a), d = f.userAgent.IE && a.currentStyle;
    if (d && f.dom.getDomHelper(c).isCss1CompatMode() && "auto" != d.width && "auto" != d.height && !d.boxSizing)return c = f.style.getIePixelValue_(a, d.width, "width", "pixelWidth"), a = f.style.getIePixelValue_(a, d.height, "height", "pixelHeight"), new f.math.Size(c, a);
    d = f.style.getBorderBoxSize(a);
    c = f.style.getPaddingBox(a);
    a = f.style.getBorderBox(a);
    return new f.math.Size(d.width - a.left - c.left - c.right - a.right, d.height -
        a.top - c.top - c.bottom - a.bottom)
};
f.style.setContentBoxSize = function (a, c) {
    var d = f.dom.getOwnerDocument(a), e = f.dom.getDomHelper(d).isCss1CompatMode();
    if (!f.userAgent.IE || f.userAgent.isVersionOrHigher("10") || e && f.userAgent.isVersionOrHigher("8"))f.style.setBoxSizingSize_(a, c, "content-box"); else if (d = a.style, e)d.pixelWidth = c.width, d.pixelHeight = c.height; else {
        var e = f.style.getPaddingBox(a), g = f.style.getBorderBox(a);
        d.pixelWidth = c.width + g.left + e.left + e.right + g.right;
        d.pixelHeight = c.height + g.top + e.top + e.bottom + g.bottom
    }
};
f.style.setBoxSizingSize_ = function (a, c, d) {
    a = a.style;
    f.userAgent.GECKO ? a.MozBoxSizing = d : f.userAgent.WEBKIT ? a.WebkitBoxSizing = d : a.boxSizing = d;
    a.width = Math.max(c.width, 0) + "px";
    a.height = Math.max(c.height, 0) + "px"
};
f.style.getIePixelValue_ = function (a, c, d, e) {
    if (/^\d+px?$/.test(c))return parseInt(c, 10);
    var g = a.style[d], h = a.runtimeStyle[d];
    a.runtimeStyle[d] = a.currentStyle[d];
    a.style[d] = c;
    c = a.style[e];
    a.style[d] = g;
    a.runtimeStyle[d] = h;
    return c
};
f.style.getIePixelDistance_ = function (a, c) {
    var d = f.style.getCascadedStyle(a, c);
    return d ? f.style.getIePixelValue_(a, d, "left", "pixelLeft") : 0
};
f.style.getBox_ = function (a, c) {
    if (f.userAgent.IE) {
        var d = f.style.getIePixelDistance_(a, c + "Left"), e = f.style.getIePixelDistance_(a, c + "Right"), g = f.style.getIePixelDistance_(a, c + "Top"), h = f.style.getIePixelDistance_(a, c + "Bottom");
        return new f.math.Box(g, e, h, d)
    }
    d = f.style.getComputedStyle(a, c + "Left");
    e = f.style.getComputedStyle(a, c + "Right");
    g = f.style.getComputedStyle(a, c + "Top");
    h = f.style.getComputedStyle(a, c + "Bottom");
    return new f.math.Box(parseFloat(g), parseFloat(e), parseFloat(h), parseFloat(d))
};
f.style.getPaddingBox = function (a) {
    return f.style.getBox_(a, "padding")
};
f.style.getMarginBox = function (a) {
    return f.style.getBox_(a, "margin")
};
f.style.ieBorderWidthKeywords_ = {thin: 2, medium: 4, thick: 6};
f.style.getIePixelBorder_ = function (a, c) {
    if ("none" == f.style.getCascadedStyle(a, c + "Style"))return 0;
    var d = f.style.getCascadedStyle(a, c + "Width");
    return d in f.style.ieBorderWidthKeywords_ ? f.style.ieBorderWidthKeywords_[d] : f.style.getIePixelValue_(a, d, "left", "pixelLeft")
};
f.style.getBorderBox = function (a) {
    if (f.userAgent.IE && !f.userAgent.isDocumentModeOrHigher(9)) {
        var c = f.style.getIePixelBorder_(a, "borderLeft"), d = f.style.getIePixelBorder_(a, "borderRight"), e = f.style.getIePixelBorder_(a, "borderTop");
        a = f.style.getIePixelBorder_(a, "borderBottom");
        return new f.math.Box(e, d, a, c)
    }
    c = f.style.getComputedStyle(a, "borderLeftWidth");
    d = f.style.getComputedStyle(a, "borderRightWidth");
    e = f.style.getComputedStyle(a, "borderTopWidth");
    a = f.style.getComputedStyle(a, "borderBottomWidth");
    return new f.math.Box(parseFloat(e),
        parseFloat(d), parseFloat(a), parseFloat(c))
};
f.style.getFontFamily = function (a) {
    var c = f.dom.getOwnerDocument(a), d = "";
    if (c.body.createTextRange && f.dom.contains(c, a)) {
        c = c.body.createTextRange();
        c.moveToElementText(a);
        try {
            d = c.queryCommandValue("FontName")
        } catch (e) {
            d = ""
        }
    }
    d || (d = f.style.getStyle_(a, "fontFamily"));
    a = d.split(",");
    1 < a.length && (d = a[0]);
    return f.string.stripQuotes(d, "\"'")
};
f.style.lengthUnitRegex_ = /[^\d]+$/;
f.style.getLengthUnits = function (a) {
    return(a = a.match(f.style.lengthUnitRegex_)) && a[0] || null
};
f.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {cm: 1, "in": 1, mm: 1, pc: 1, pt: 1};
f.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {em: 1, ex: 1};
f.style.getFontSize = function (a) {
    var c = f.style.getStyle_(a, "fontSize"), d = f.style.getLengthUnits(c);
    if (c && "px" == d)return parseInt(c, 10);
    if (f.userAgent.IE) {
        if (d in f.style.ABSOLUTE_CSS_LENGTH_UNITS_)return f.style.getIePixelValue_(a, c, "left", "pixelLeft");
        if (a.parentNode && a.parentNode.nodeType == f.dom.NodeType.ELEMENT && d in f.style.CONVERTIBLE_RELATIVE_CSS_UNITS_)return a = a.parentNode, d = f.style.getStyle_(a, "fontSize"), f.style.getIePixelValue_(a, c == d ? "1em" : c, "left", "pixelLeft")
    }
    d = f.dom.createDom("span",
        {style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    f.dom.appendChild(a, d);
    c = d.offsetHeight;
    f.dom.removeNode(d);
    return c
};
f.style.parseStyleAttribute = function (a) {
    var c = {};
    f.array.forEach(a.split(/\s*;\s*/), function (a) {
        a = a.split(/\s*:\s*/);
        2 == a.length && (c[f.string.toCamelCase(a[0].toLowerCase())] = a[1])
    });
    return c
};
f.style.toStyleAttribute = function (a) {
    var c = [];
    f.object.forEach(a, function (a, e) {
        c.push(f.string.toSelectorCase(e), ":", a, ";")
    });
    return c.join("")
};
f.style.setFloat = function (a, c) {
    a.style[f.userAgent.IE ? "styleFloat" : "cssFloat"] = c
};
f.style.getFloat = function (a) {
    return a.style[f.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
};
f.style.getScrollbarWidth = function (a) {
    var c = f.dom.createElement("div");
    a && (c.className = a);
    c.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
    a = f.dom.createElement("div");
    f.style.setSize(a, "200px", "200px");
    c.appendChild(a);
    f.dom.appendChild(f.dom.getDocument().body, c);
    a = c.offsetWidth - c.clientWidth;
    f.dom.removeNode(c);
    return a
};
f.style.MATRIX_TRANSLATION_REGEX_ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
f.style.getCssTranslation = function (a) {
    a = f.style.getComputedTransform(a);
    return a ? (a = a.match(f.style.MATRIX_TRANSLATION_REGEX_)) ? new f.math.Coordinate(parseFloat(a[1]), parseFloat(a[2])) : new f.math.Coordinate(0, 0) : new f.math.Coordinate(0, 0)
};
f.ui = {};
f.ui.IdGenerator = function () {
};
f.addSingletonGetter(f.ui.IdGenerator);
f.ui.IdGenerator.prototype.nextId_ = 0;
f.ui.IdGenerator.prototype.getNextUniqueId = function () {
    return":" + (this.nextId_++).toString(36)
};
f.ui.Component = function (a) {
    f.events.EventTarget.call(this);
    this.dom_ = a || f.dom.getDomHelper();
    this.rightToLeft_ = f.ui.Component.defaultRightToLeft_;
    this.id_ = null;
    this.inDocument_ = !1;
    this.element_ = null;
    this.googUiComponentHandler_ = void 0;
    this.childIndex_ = this.children_ = this.parent_ = null;
    this.wasDecorated_ = !1
};
f.inherits(f.ui.Component, f.events.EventTarget);
f.ui.Component.ALLOW_DETACHED_DECORATION = !1;
f.ui.Component.prototype.idGenerator_ = f.ui.IdGenerator.getInstance();
f.ui.Component.DEFAULT_BIDI_DIR = 0;
f.ui.Component.defaultRightToLeft_ = 1 == f.ui.Component.DEFAULT_BIDI_DIR ? !1 : -1 == f.ui.Component.DEFAULT_BIDI_DIR ? !0 : null;
f.ui.Component.EventType = {BEFORE_SHOW: "beforeshow", SHOW: "show", HIDE: "hide", DISABLE: "disable", ENABLE: "enable", HIGHLIGHT: "highlight", UNHIGHLIGHT: "unhighlight", ACTIVATE: "activate", DEACTIVATE: "deactivate", SELECT: "select", UNSELECT: "unselect", CHECK: "check", UNCHECK: "uncheck", FOCUS: "focus", BLUR: "blur", OPEN: "open", CLOSE: "close", ENTER: "enter", LEAVE: "leave", ACTION: "action", CHANGE: "change"};
f.ui.Component.Error = {NOT_SUPPORTED: "Method not supported", DECORATE_INVALID: "Invalid element to decorate", ALREADY_RENDERED: "Component already rendered", PARENT_UNABLE_TO_BE_SET: "Unable to set parent component", CHILD_INDEX_OUT_OF_BOUNDS: "Child component index out of bounds", NOT_OUR_CHILD: "Child is not in parent component", NOT_IN_DOCUMENT: "Operation not supported while component is not in document", STATE_INVALID: "Invalid component state"};
f.ui.Component.State = {ALL: 255, DISABLED: 1, HOVER: 2, ACTIVE: 4, SELECTED: 8, CHECKED: 16, FOCUSED: 32, OPENED: 64};
f.ui.Component.getStateTransitionEvent = function (a, c) {
    switch (a) {
        case f.ui.Component.State.DISABLED:
            return c ? f.ui.Component.EventType.DISABLE : f.ui.Component.EventType.ENABLE;
        case f.ui.Component.State.HOVER:
            return c ? f.ui.Component.EventType.HIGHLIGHT : f.ui.Component.EventType.UNHIGHLIGHT;
        case f.ui.Component.State.ACTIVE:
            return c ? f.ui.Component.EventType.ACTIVATE : f.ui.Component.EventType.DEACTIVATE;
        case f.ui.Component.State.SELECTED:
            return c ? f.ui.Component.EventType.SELECT : f.ui.Component.EventType.UNSELECT;
        case f.ui.Component.State.CHECKED:
            return c ? f.ui.Component.EventType.CHECK : f.ui.Component.EventType.UNCHECK;
        case f.ui.Component.State.FOCUSED:
            return c ? f.ui.Component.EventType.FOCUS : f.ui.Component.EventType.BLUR;
        case f.ui.Component.State.OPENED:
            return c ? f.ui.Component.EventType.OPEN : f.ui.Component.EventType.CLOSE
    }
    throw Error(f.ui.Component.Error.STATE_INVALID);
};
f.ui.Component.setDefaultRightToLeft = function (a) {
    f.ui.Component.defaultRightToLeft_ = a
};
b = f.ui.Component.prototype;
b.getId = function () {
    return this.id_ || (this.id_ = this.idGenerator_.getNextUniqueId())
};
b.setId = function (a) {
    this.parent_ && this.parent_.childIndex_ && (f.object.remove(this.parent_.childIndex_, this.id_), f.object.add(this.parent_.childIndex_, a, this));
    this.id_ = a
};
b.getElement = function () {
    return this.element_
};
b.setElementInternal = function (a) {
    this.element_ = a
};
b.getElementsByClass = function (a) {
    return this.element_ ? this.dom_.getElementsByClass(a, this.element_) : []
};
b.getElementByClass = function (a) {
    return this.element_ ? this.dom_.getElementByClass(a, this.element_) : null
};
b.getRequiredElementByClass = function (a) {
    var c = this.getElementByClass(a);
    f.asserts.assert(c, "Expected element in component with class: %s", a);
    return c
};
b.getHandler = function () {
    this.googUiComponentHandler_ || (this.googUiComponentHandler_ = new f.events.EventHandler(this));
    return this.googUiComponentHandler_
};
b.setParent = function (a) {
    if (this == a)throw Error(f.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    if (a && this.parent_ && this.id_ && this.parent_.getChild(this.id_) && this.parent_ != a)throw Error(f.ui.Component.Error.PARENT_UNABLE_TO_BE_SET);
    this.parent_ = a;
    f.ui.Component.superClass_.setParentEventTarget.call(this, a)
};
b.getParent = function () {
    return this.parent_
};
b.setParentEventTarget = function (a) {
    if (this.parent_ && this.parent_ != a)throw Error(f.ui.Component.Error.NOT_SUPPORTED);
    f.ui.Component.superClass_.setParentEventTarget.call(this, a)
};
b.getDomHelper = function () {
    return this.dom_
};
b.isInDocument = function () {
    return this.inDocument_
};
b.createDom = function () {
    this.element_ = this.dom_.createElement("div")
};
b.render = function (a) {
    this.render_(a)
};
b.render_ = function (a, c) {
    if (this.inDocument_)throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    this.element_ || this.createDom();
    a ? a.insertBefore(this.element_, c || null) : this.dom_.getDocument().body.appendChild(this.element_);
    this.parent_ && !this.parent_.isInDocument() || this.enterDocument()
};
b.decorate = function (a) {
    if (this.inDocument_)throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    if (a && this.canDecorate(a)) {
        this.wasDecorated_ = !0;
        var c = f.dom.getOwnerDocument(a);
        this.dom_ && this.dom_.getDocument() == c || (this.dom_ = f.dom.getDomHelper(a));
        this.decorateInternal(a);
        f.ui.Component.ALLOW_DETACHED_DECORATION && !f.dom.contains(c, a) || this.enterDocument()
    } else throw Error(f.ui.Component.Error.DECORATE_INVALID);
};
b.canDecorate = function () {
    return!0
};
b.decorateInternal = function (a) {
    this.element_ = a
};
b.enterDocument = function () {
    this.inDocument_ = !0;
    this.forEachChild(function (a) {
        !a.isInDocument() && a.getElement() && a.enterDocument()
    })
};
b.exitDocument = function () {
    this.forEachChild(function (a) {
        a.isInDocument() && a.exitDocument()
    });
    this.googUiComponentHandler_ && this.googUiComponentHandler_.removeAll();
    this.inDocument_ = !1
};
b.disposeInternal = function () {
    this.inDocument_ && this.exitDocument();
    this.googUiComponentHandler_ && (this.googUiComponentHandler_.dispose(), delete this.googUiComponentHandler_);
    this.forEachChild(function (a) {
        a.dispose()
    });
    !this.wasDecorated_ && this.element_ && f.dom.removeNode(this.element_);
    this.parent_ = this.element_ = this.childIndex_ = this.children_ = null;
    f.ui.Component.superClass_.disposeInternal.call(this)
};
b.addChild = function (a, c) {
    this.addChildAt(a, this.getChildCount(), c)
};
b.addChildAt = function (a, c, d) {
    f.asserts.assert(!!a, "Provided element must not be null.");
    if (a.inDocument_ && (d || !this.inDocument_))throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    if (0 > c || c > this.getChildCount())throw Error(f.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
    this.childIndex_ && this.children_ || (this.childIndex_ = {}, this.children_ = []);
    a.getParent() == this ? (f.object.set(this.childIndex_, a.getId(), a), f.array.remove(this.children_, a)) : f.object.add(this.childIndex_, a.getId(), a);
    a.setParent(this);
    f.array.insertAt(this.children_, a, c);
    a.inDocument_ && this.inDocument_ && a.getParent() == this ? (d = this.getContentElement(), d.insertBefore(a.getElement(), d.childNodes[c] || null)) : d ? (this.element_ || this.createDom(), c = this.getChildAt(c + 1), a.render_(this.getContentElement(), c ? c.element_ : null)) : this.inDocument_ && !a.inDocument_ && a.element_ && a.element_.parentNode && a.element_.parentNode.nodeType == f.dom.NodeType.ELEMENT && a.enterDocument()
};
b.getContentElement = function () {
    return this.element_
};
b.isRightToLeft = function () {
    null == this.rightToLeft_ && (this.rightToLeft_ = f.style.isRightToLeft(this.inDocument_ ? this.element_ : this.dom_.getDocument().body));
    return this.rightToLeft_
};
b.setRightToLeft = function (a) {
    if (this.inDocument_)throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    this.rightToLeft_ = a
};
b.hasChildren = function () {
    return!!this.children_ && 0 != this.children_.length
};
b.getChildCount = function () {
    return this.children_ ? this.children_.length : 0
};
b.getChild = function (a) {
    return this.childIndex_ && a ? f.object.get(this.childIndex_, a) || null : null
};
b.getChildAt = function (a) {
    return this.children_ ? this.children_[a] || null : null
};
b.forEachChild = function (a, c) {
    this.children_ && f.array.forEach(this.children_, a, c)
};
b.indexOfChild = function (a) {
    return this.children_ && a ? f.array.indexOf(this.children_, a) : -1
};
b.removeChild = function (a, c) {
    if (a) {
        var d = f.isString(a) ? a : a.getId();
        a = this.getChild(d);
        d && a && (f.object.remove(this.childIndex_, d), f.array.remove(this.children_, a), c && (a.exitDocument(), a.element_ && f.dom.removeNode(a.element_)), a.setParent(null))
    }
    if (!a)throw Error(f.ui.Component.Error.NOT_OUR_CHILD);
    return a
};
b.removeChildAt = function (a, c) {
    return this.removeChild(this.getChildAt(a), c)
};
b.removeChildren = function (a) {
    for (var c = []; this.hasChildren();)c.push(this.removeChildAt(0, a));
    return c
};
f.dom.classlist = {};
f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = !1;
f.dom.classlist.get = function (a) {
    if (f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList)return a.classList;
    a = a.className;
    return f.isString(a) && a.match(/\S+/g) || []
};
f.dom.classlist.set = function (a, c) {
    a.className = c
};
f.dom.classlist.contains = function (a, c) {
    return f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList.contains(c) : f.array.contains(f.dom.classlist.get(a), c)
};
f.dom.classlist.add = function (a, c) {
    f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList.add(c) : f.dom.classlist.contains(a, c) || (a.className += 0 < a.className.length ? " " + c : c)
};
f.dom.classlist.addAll = function (a, c) {
    if (f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList)f.array.forEach(c, function (c) {
        f.dom.classlist.add(a, c)
    }); else {
        var d = {};
        f.array.forEach(f.dom.classlist.get(a), function (a) {
            d[a] = !0
        });
        f.array.forEach(c, function (a) {
            d[a] = !0
        });
        a.className = "";
        for (var e in d)a.className += 0 < a.className.length ? " " + e : e
    }
};
f.dom.classlist.remove = function (a, c) {
    f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? a.classList.remove(c) : f.dom.classlist.contains(a, c) && (a.className = f.array.filter(f.dom.classlist.get(a), function (a) {
        return a != c
    }).join(" "))
};
f.dom.classlist.removeAll = function (a, c) {
    f.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || a.classList ? f.array.forEach(c, function (c) {
        f.dom.classlist.remove(a, c)
    }) : a.className = f.array.filter(f.dom.classlist.get(a), function (a) {
        return!f.array.contains(c, a)
    }).join(" ")
};
f.dom.classlist.enable = function (a, c, d) {
    d ? f.dom.classlist.add(a, c) : f.dom.classlist.remove(a, c)
};
f.dom.classlist.enableAll = function (a, c, d) {
    d = d ? f.dom.classlist.addAll : f.dom.classlist.removeAll;
    d(a, c)
};
f.dom.classlist.swap = function (a, c, d) {
    return f.dom.classlist.contains(a, c) ? (f.dom.classlist.remove(a, c), f.dom.classlist.add(a, d), !0) : !1
};
f.dom.classlist.toggle = function (a, c) {
    var d = !f.dom.classlist.contains(a, c);
    f.dom.classlist.enable(a, c, d);
    return d
};
f.dom.classlist.addRemove = function (a, c, d) {
    f.dom.classlist.remove(a, c);
    f.dom.classlist.add(a, d)
};
f.dom.tags = {};
f.dom.tags.VOID_TAGS_ = f.object.createSet("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
f.dom.tags.isVoidTag = function (a) {
    return!0 === f.dom.tags.VOID_TAGS_[a]
};
f.i18n = {};
f.i18n.bidi = {};
f.i18n.bidi.FORCE_RTL = !1;
f.i18n.bidi.IS_RTL = f.i18n.bidi.FORCE_RTL || ("ar" == f.LOCALE.substring(0, 2).toLowerCase() || "fa" == f.LOCALE.substring(0, 2).toLowerCase() || "he" == f.LOCALE.substring(0, 2).toLowerCase() || "iw" == f.LOCALE.substring(0, 2).toLowerCase() || "ps" == f.LOCALE.substring(0, 2).toLowerCase() || "sd" == f.LOCALE.substring(0, 2).toLowerCase() || "ug" == f.LOCALE.substring(0, 2).toLowerCase() || "ur" == f.LOCALE.substring(0, 2).toLowerCase() || "yi" == f.LOCALE.substring(0, 2).toLowerCase()) && (2 == f.LOCALE.length || "-" == f.LOCALE.substring(2, 3) || "_" ==
    f.LOCALE.substring(2, 3)) || 3 <= f.LOCALE.length && "ckb" == f.LOCALE.substring(0, 3).toLowerCase() && (3 == f.LOCALE.length || "-" == f.LOCALE.substring(3, 4) || "_" == f.LOCALE.substring(3, 4));
f.i18n.bidi.Format = {LRE: "\u202a", RLE: "\u202b", PDF: "\u202c", LRM: "\u200e", RLM: "\u200f"};
f.i18n.bidi.Dir = {LTR: 1, RTL: -1, NEUTRAL: 0, UNKNOWN: 0};
f.i18n.bidi.RIGHT = "right";
f.i18n.bidi.LEFT = "left";
f.i18n.bidi.I18N_RIGHT = f.i18n.bidi.IS_RTL ? f.i18n.bidi.LEFT : f.i18n.bidi.RIGHT;
f.i18n.bidi.I18N_LEFT = f.i18n.bidi.IS_RTL ? f.i18n.bidi.RIGHT : f.i18n.bidi.LEFT;
f.i18n.bidi.toDir = function (a, c) {
    return"number" == typeof a ? 0 < a ? f.i18n.bidi.Dir.LTR : 0 > a ? f.i18n.bidi.Dir.RTL : c ? null : f.i18n.bidi.Dir.NEUTRAL : null == a ? null : a ? f.i18n.bidi.Dir.RTL : f.i18n.bidi.Dir.LTR
};
f.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
f.i18n.bidi.rtlChars_ = "\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
f.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
f.i18n.bidi.stripHtmlIfNeeded_ = function (a, c) {
    return c ? a.replace(f.i18n.bidi.htmlSkipReg_, "") : a
};
f.i18n.bidi.rtlCharReg_ = new RegExp("[" + f.i18n.bidi.rtlChars_ + "]");
f.i18n.bidi.ltrCharReg_ = new RegExp("[" + f.i18n.bidi.ltrChars_ + "]");
f.i18n.bidi.hasAnyRtl = function (a, c) {
    return f.i18n.bidi.rtlCharReg_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.hasRtlChar = f.i18n.bidi.hasAnyRtl;
f.i18n.bidi.hasAnyLtr = function (a, c) {
    return f.i18n.bidi.ltrCharReg_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.ltrRe_ = new RegExp("^[" + f.i18n.bidi.ltrChars_ + "]");
f.i18n.bidi.rtlRe_ = new RegExp("^[" + f.i18n.bidi.rtlChars_ + "]");
f.i18n.bidi.isRtlChar = function (a) {
    return f.i18n.bidi.rtlRe_.test(a)
};
f.i18n.bidi.isLtrChar = function (a) {
    return f.i18n.bidi.ltrRe_.test(a)
};
f.i18n.bidi.isNeutralChar = function (a) {
    return!f.i18n.bidi.isLtrChar(a) && !f.i18n.bidi.isRtlChar(a)
};
f.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + f.i18n.bidi.rtlChars_ + "]*[" + f.i18n.bidi.ltrChars_ + "]");
f.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + f.i18n.bidi.ltrChars_ + "]*[" + f.i18n.bidi.rtlChars_ + "]");
f.i18n.bidi.startsWithRtl = function (a, c) {
    return f.i18n.bidi.rtlDirCheckRe_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.isRtlText = f.i18n.bidi.startsWithRtl;
f.i18n.bidi.startsWithLtr = function (a, c) {
    return f.i18n.bidi.ltrDirCheckRe_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.isLtrText = f.i18n.bidi.startsWithLtr;
f.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
f.i18n.bidi.isNeutralText = function (a, c) {
    a = f.i18n.bidi.stripHtmlIfNeeded_(a, c);
    return f.i18n.bidi.isRequiredLtrRe_.test(a) || !f.i18n.bidi.hasAnyLtr(a) && !f.i18n.bidi.hasAnyRtl(a)
};
f.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + f.i18n.bidi.ltrChars_ + "][^" + f.i18n.bidi.rtlChars_ + "]*$");
f.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + f.i18n.bidi.rtlChars_ + "][^" + f.i18n.bidi.ltrChars_ + "]*$");
f.i18n.bidi.endsWithLtr = function (a, c) {
    return f.i18n.bidi.ltrExitDirCheckRe_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.isLtrExitText = f.i18n.bidi.endsWithLtr;
f.i18n.bidi.endsWithRtl = function (a, c) {
    return f.i18n.bidi.rtlExitDirCheckRe_.test(f.i18n.bidi.stripHtmlIfNeeded_(a, c))
};
f.i18n.bidi.isRtlExitText = f.i18n.bidi.endsWithRtl;
f.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
f.i18n.bidi.isRtlLanguage = function (a) {
    return f.i18n.bidi.rtlLocalesRe_.test(a)
};
f.i18n.bidi.bracketGuardHtmlRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
f.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
f.i18n.bidi.guardBracketInHtml = function (a, c) {
    var d = void 0 === c ? f.i18n.bidi.hasAnyRtl(a) : c;
    return d ? a.replace(f.i18n.bidi.bracketGuardHtmlRe_, "<span dir=rtl>$&</span>") : a.replace(f.i18n.bidi.bracketGuardHtmlRe_, "<span dir=ltr>$&</span>")
};
f.i18n.bidi.guardBracketInText = function (a, c) {
    var d = void 0 === c ? f.i18n.bidi.hasAnyRtl(a) : c, d = d ? f.i18n.bidi.Format.RLM : f.i18n.bidi.Format.LRM;
    return a.replace(f.i18n.bidi.bracketGuardTextRe_, d + "$&" + d)
};
f.i18n.bidi.enforceRtlInHtml = function (a) {
    return"<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>"
};
f.i18n.bidi.enforceRtlInText = function (a) {
    return f.i18n.bidi.Format.RLE + a + f.i18n.bidi.Format.PDF
};
f.i18n.bidi.enforceLtrInHtml = function (a) {
    return"<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>"
};
f.i18n.bidi.enforceLtrInText = function (a) {
    return f.i18n.bidi.Format.LRE + a + f.i18n.bidi.Format.PDF
};
f.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
f.i18n.bidi.leftRe_ = /left/gi;
f.i18n.bidi.rightRe_ = /right/gi;
f.i18n.bidi.tempRe_ = /%%%%/g;
f.i18n.bidi.mirrorCSS = function (a) {
    return a.replace(f.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(f.i18n.bidi.leftRe_, "%%%%").replace(f.i18n.bidi.rightRe_, f.i18n.bidi.LEFT).replace(f.i18n.bidi.tempRe_, f.i18n.bidi.RIGHT)
};
f.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
f.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
f.i18n.bidi.normalizeHebrewQuote = function (a) {
    return a.replace(f.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(f.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3")
};
f.i18n.bidi.wordSeparatorRe_ = /\s+/;
f.i18n.bidi.hasNumeralsRe_ = /\d/;
f.i18n.bidi.rtlDetectionThreshold_ = .4;
f.i18n.bidi.estimateDirection = function (a, c) {
    for (var d = 0, e = 0, g = !1, h = f.i18n.bidi.stripHtmlIfNeeded_(a, c).split(f.i18n.bidi.wordSeparatorRe_), l = 0; l < h.length; l++) {
        var p = h[l];
        f.i18n.bidi.startsWithRtl(p) ? (d++, e++) : f.i18n.bidi.isRequiredLtrRe_.test(p) ? g = !0 : f.i18n.bidi.hasAnyLtr(p) ? e++ : f.i18n.bidi.hasNumeralsRe_.test(p) && (g = !0)
    }
    return 0 == e ? g ? f.i18n.bidi.Dir.LTR : f.i18n.bidi.Dir.NEUTRAL : d / e > f.i18n.bidi.rtlDetectionThreshold_ ? f.i18n.bidi.Dir.RTL : f.i18n.bidi.Dir.LTR
};
f.i18n.bidi.detectRtlDirectionality = function (a, c) {
    return f.i18n.bidi.estimateDirection(a, c) == f.i18n.bidi.Dir.RTL
};
f.i18n.bidi.setElementDirAndAlign = function (a, c) {
    a && (c = f.i18n.bidi.toDir(c)) && (a.style.textAlign = c == f.i18n.bidi.Dir.RTL ? f.i18n.bidi.RIGHT : f.i18n.bidi.LEFT, a.dir = c == f.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
};
f.i18n.bidi.DirectionalString = function () {
};
f.string.TypedString = function () {
};
f.string.Const = function () {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = "";
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = f.string.Const.TYPE_MARKER_
};
f.string.Const.prototype.implementsGoogStringTypedString = !0;
f.string.Const.prototype.getTypedStringValue = function () {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
};
f.string.Const.prototype.toString = function () {
    return"Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
};
f.string.Const.unwrap = function (a) {
    if (a instanceof f.string.Const && a.constructor === f.string.Const && a.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === f.string.Const.TYPE_MARKER_)return a.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    f.asserts.fail("expected object of type Const, got '" + a + "'");
    return"type_error:Const"
};
f.string.Const.from = function (a) {
    return f.string.Const.create__googStringSecurityPrivate_(a)
};
f.string.Const.TYPE_MARKER_ = {};
f.string.Const.create__googStringSecurityPrivate_ = function (a) {
    var c = new f.string.Const;
    c.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a;
    return c
};
f.html = {};
f.html.SafeStyle = function () {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
    this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
};
f.html.SafeStyle.prototype.implementsGoogStringTypedString = !0;
f.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.SafeStyle.fromConstant = function (a) {
    a = f.string.Const.unwrap(a);
    if (0 === a.length)return f.html.SafeStyle.EMPTY;
    f.html.SafeStyle.checkStyle_(a);
    f.asserts.assert(f.string.endsWith(a, ";"), "Last character of style string is not ';': " + a);
    f.asserts.assert(f.string.contains(a, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a);
    return f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a)
};
f.html.SafeStyle.checkStyle_ = function (a) {
    f.asserts.assert(!/[<>]/.test(a), "Forbidden characters in style string: " + a)
};
f.html.SafeStyle.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
};
f.DEBUG && (f.html.SafeStyle.prototype.toString = function () {
    return"SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
});
f.html.SafeStyle.unwrap = function (a) {
    if (a instanceof f.html.SafeStyle && a.constructor === f.html.SafeStyle && a.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    f.asserts.fail("expected object of type SafeStyle, got '" + a + "'");
    return"type_error:SafeStyle"
};
f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (a) {
    var c = new f.html.SafeStyle;
    c.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a;
    return c
};
f.html.SafeStyle.EMPTY = f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
f.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
f.html.SafeStyle.create = function (a) {
    var c = "", d;
    for (d in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(d))throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
        var e = a[d];
        null != e && (e instanceof f.string.Const ? (e = f.string.Const.unwrap(e), f.asserts.assert(!/[{;}]/.test(e), "Value does not allow [{;}].")) : f.html.SafeStyle.VALUE_RE_.test(e) || (f.asserts.fail("String value allows only [-.%_!# a-zA-Z0-9], got: " + e), e = f.html.SafeStyle.INNOCUOUS_STRING), c += d + ":" + e + ";")
    }
    if (!c)return f.html.SafeStyle.EMPTY;
    f.html.SafeStyle.checkStyle_(c);
    return f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(c)
};
f.html.SafeStyle.VALUE_RE_ = /^[-.%_!# a-zA-Z0-9]+$/;
f.html.SafeStyle.concat = function (a) {
    var c = "", d = function (a) {
        f.isArray(a) ? f.array.forEach(a, d) : c += f.html.SafeStyle.unwrap(a)
    };
    f.array.forEach(arguments, d);
    return c ? f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(c) : f.html.SafeStyle.EMPTY
};
f.html.SafeUrl = function () {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
};
f.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
f.html.SafeUrl.prototype.implementsGoogStringTypedString = !0;
f.html.SafeUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
};
f.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
f.html.SafeUrl.prototype.getDirection = function () {
    return f.i18n.bidi.Dir.LTR
};
f.DEBUG && (f.html.SafeUrl.prototype.toString = function () {
    return"SafeUrl{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
});
f.html.SafeUrl.unwrap = function (a) {
    if (a instanceof f.html.SafeUrl && a.constructor === f.html.SafeUrl && a.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    f.asserts.fail("expected object of type SafeUrl, got '" + a + "'");
    return"type_error:SafeUrl"
};
f.html.SafeUrl.fromConstant = function (a) {
    return f.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(f.string.Const.unwrap(a))
};
f.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/i;
f.html.SafeUrl.sanitize = function (a) {
    if (a instanceof f.html.SafeUrl)return a;
    a = a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
    a = f.html.SAFE_URL_PATTERN_.test(a) ? f.html.SafeUrl.normalize_(a) : f.html.SafeUrl.INNOCUOUS_STRING;
    return f.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)
};
f.html.SafeUrl.normalize_ = function (a) {
    try {
        var c = encodeURI(a)
    } catch (d) {
        return f.html.SafeUrl.INNOCUOUS_STRING
    }
    return c.replace(f.html.SafeUrl.NORMALIZE_MATCHER_, function (a) {
        return f.html.SafeUrl.NORMALIZE_REPLACER_MAP_[a]
    })
};
f.html.SafeUrl.NORMALIZE_MATCHER_ = /[()']|%5B|%5D|%25/g;
f.html.SafeUrl.NORMALIZE_REPLACER_MAP_ = {"'": "%27", "(": "%28", ")": "%29", "%5B": "[", "%5D": "]", "%25": "%"};
f.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (a) {
    var c = new f.html.SafeUrl;
    c.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
    return c
};
f.html.SafeHtml = function () {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    this.dir_ = null
};
f.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0;
f.html.SafeHtml.prototype.getDirection = function () {
    return this.dir_
};
f.html.SafeHtml.prototype.implementsGoogStringTypedString = !0;
f.html.SafeHtml.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_
};
f.DEBUG && (f.html.SafeHtml.prototype.toString = function () {
    return"SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
});
f.html.SafeHtml.unwrap = function (a) {
    if (a instanceof f.html.SafeHtml && a.constructor === f.html.SafeHtml && a.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    f.asserts.fail("expected object of type SafeHtml, got '" + a + "'");
    return"type_error:SafeHtml"
};
f.html.SafeHtml.htmlEscape = function (a) {
    if (a instanceof f.html.SafeHtml)return a;
    var c = null;
    a.implementsGoogI18nBidiDirectionalString && (c = a.getDirection());
    a = a.implementsGoogStringTypedString ? a.getTypedStringValue() : String(a);
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(f.string.htmlEscape(a), c)
};
f.html.SafeHtml.htmlEscapePreservingNewlines = function (a) {
    if (a instanceof f.html.SafeHtml)return a;
    a = f.html.SafeHtml.htmlEscape(a);
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(f.string.newLineToBr(f.html.SafeHtml.unwrap(a)), a.getDirection())
};
f.html.SafeHtml.from = f.html.SafeHtml.htmlEscape;
f.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
f.html.SafeHtml.URL_ATTRIBUTES_ = f.object.createSet("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
f.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = f.object.createSet("link", "script", "style");
f.html.SafeHtml.create = function (a, c, d) {
    if (!f.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a))throw Error("Invalid tag name <" + a + ">.");
    if (a.toLowerCase()in f.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var e = null, g = "<" + a;
    if (c)for (var h in c) {
        if (!f.html.SafeHtml.VALID_NAMES_IN_TAG_.test(h))throw Error('Invalid attribute name "' + h + '".');
        var l = c[h];
        if (null != l) {
            if (l instanceof f.string.Const)l = f.string.Const.unwrap(l); else if ("style" == h.toLowerCase())l = f.html.SafeHtml.getStyleValue_(l);
            else {
                if (/^on/i.test(h))throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + l + '" given.');
                if (l instanceof f.html.SafeUrl)l = f.html.SafeUrl.unwrap(l); else if (h.toLowerCase()in f.html.SafeHtml.URL_ATTRIBUTES_)throw Error('Attribute "' + h + '" requires goog.string.Const or goog.html.SafeUrl value, "' + l + '" given.');
            }
            f.asserts.assert(f.isString(l) || f.isNumber(l), "String or number value expected, got " + typeof l + " with value: " + l);
            g += " " + h + '="' + f.string.htmlEscape(String(l)) + '"'
        }
    }
    f.isDef(d) ? f.isArray(d) ||
        (d = [d]) : d = [];
    f.dom.tags.isVoidTag(a.toLowerCase()) ? (f.asserts.assert(!d.length, "Void tag <" + a + "> does not allow content."), g += ">") : (e = f.html.SafeHtml.concat(d), g += ">" + f.html.SafeHtml.unwrap(e) + "</" + a + ">", e = e.getDirection());
    (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? f.i18n.bidi.Dir.NEUTRAL : null);
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(g, e)
};
f.html.SafeHtml.getStyleValue_ = function (a) {
    if (!f.isObject(a))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
    a instanceof f.html.SafeStyle || (a = f.html.SafeStyle.create(a));
    return f.html.SafeStyle.unwrap(a)
};
f.html.SafeHtml.createWithDir = function (a, c, d, e) {
    c = f.html.SafeHtml.create(c, d, e);
    c.dir_ = a;
    return c
};
f.html.SafeHtml.concat = function (a) {
    var c = f.i18n.bidi.Dir.NEUTRAL, d = "", e = function (a) {
        f.isArray(a) ? f.array.forEach(a, e) : (a = f.html.SafeHtml.htmlEscape(a), d += f.html.SafeHtml.unwrap(a), a = a.getDirection(), c == f.i18n.bidi.Dir.NEUTRAL ? c = a : a != f.i18n.bidi.Dir.NEUTRAL && c != a && (c = null))
    };
    f.array.forEach(arguments, e);
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d, c)
};
f.html.SafeHtml.concatWithDir = function (a, c) {
    var d = f.html.SafeHtml.concat(f.array.slice(arguments, 1));
    d.dir_ = a;
    return d
};
f.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (a, c) {
    var d = new f.html.SafeHtml;
    d.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = a;
    d.dir_ = c;
    return d
};
f.html.SafeHtml.EMPTY = f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", f.i18n.bidi.Dir.NEUTRAL);
f.html.SafeScript = function () {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
    this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
};
f.html.SafeScript.prototype.implementsGoogStringTypedString = !0;
f.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.SafeScript.fromConstant = function (a) {
    a = f.string.Const.unwrap(a);
    return 0 === a.length ? f.html.SafeScript.EMPTY : f.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a)
};
f.html.SafeScript.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_
};
f.DEBUG && (f.html.SafeScript.prototype.toString = function () {
    return"SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
});
f.html.SafeScript.unwrap = function (a) {
    if (a instanceof f.html.SafeScript && a.constructor === f.html.SafeScript && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeScriptWrappedValue_;
    f.asserts.fail("expected object of type SafeScript, got '" + a + "'");
    return"type_error:SafeScript"
};
f.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (a) {
    var c = new f.html.SafeScript;
    c.privateDoNotAccessOrElseSafeScriptWrappedValue_ = a;
    return c
};
f.html.SafeScript.EMPTY = f.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
f.html.SafeStyleSheet = function () {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
    this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
};
f.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0;
f.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.SafeStyleSheet.fromConstant = function (a) {
    a = f.string.Const.unwrap(a);
    if (0 === a.length)return f.html.SafeStyleSheet.EMPTY;
    f.asserts.assert(!f.string.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
    return f.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a)
};
f.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
};
f.DEBUG && (f.html.SafeStyleSheet.prototype.toString = function () {
    return"SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
});
f.html.SafeStyleSheet.unwrap = function (a) {
    if (a instanceof f.html.SafeStyleSheet && a.constructor === f.html.SafeStyleSheet && a.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    f.asserts.fail("expected object of type SafeStyleSheet, got '" + a + "'");
    return"type_error:SafeStyleSheet"
};
f.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (a) {
    var c = new f.html.SafeStyleSheet;
    c.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a;
    return c
};
f.html.SafeStyleSheet.EMPTY = f.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
f.html.TrustedResourceUrl = function () {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
    this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = f.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
};
f.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0;
f.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
};
f.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0;
f.html.TrustedResourceUrl.prototype.getDirection = function () {
    return f.i18n.bidi.Dir.LTR
};
f.DEBUG && (f.html.TrustedResourceUrl.prototype.toString = function () {
    return"TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
});
f.html.TrustedResourceUrl.unwrap = function (a) {
    if (a instanceof f.html.TrustedResourceUrl && a.constructor === f.html.TrustedResourceUrl && a.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === f.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)return a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
    f.asserts.fail("expected object of type TrustedResourceUrl, got '" + a + "'");
    return"type_error:TrustedResourceUrl"
};
f.html.TrustedResourceUrl.fromConstant = function (a) {
    return f.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(f.string.Const.unwrap(a))
};
f.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
f.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (a) {
    var c = new f.html.TrustedResourceUrl;
    c.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a;
    return c
};
f.html.uncheckedconversions = {};
f.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (a, c, d) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(!f.string.isEmpty(f.string.Const.unwrap(a)), "must provide non-empty justification");
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c, d || null)
};
f.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (a, c) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(0 < f.string.trim(f.string.Const.unwrap(a)).length, "must provide non-empty justification");
    return f.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(c)
};
f.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (a, c) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(!f.string.isEmpty(f.string.Const.unwrap(a)), "must provide non-empty justification");
    return f.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(c)
};
f.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (a, c) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(!f.string.isEmpty(f.string.Const.unwrap(a)), "must provide non-empty justification");
    return f.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(c)
};
f.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (a, c) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(!f.string.isEmpty(f.string.Const.unwrap(a)), "must provide non-empty justification");
    return f.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(c)
};
f.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (a, c) {
    f.asserts.assertString(f.string.Const.unwrap(a), "must provide justification");
    f.asserts.assert(!f.string.isEmpty(f.string.Const.unwrap(a)), "must provide non-empty justification");
    return f.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c)
};
f.soy = {};
f.soy.data = {};
f.soy.data.SanitizedContentKind = {HTML: f.DEBUG ? {sanitizedContentKindHtml: !0} : {}, JS: f.DEBUG ? {sanitizedContentJsChars: !0} : {}, JS_STR_CHARS: f.DEBUG ? {sanitizedContentJsStrChars: !0} : {}, URI: f.DEBUG ? {sanitizedContentUri: !0} : {}, ATTRIBUTES: f.DEBUG ? {sanitizedContentHtmlAttribute: !0} : {}, CSS: f.DEBUG ? {sanitizedContentCss: !0} : {}, TEXT: f.DEBUG ? {sanitizedContentKindText: !0} : {}};
f.soy.data.SanitizedContent = function () {
    throw Error("Do not instantiate directly");
};
f.soy.data.SanitizedContent.prototype.contentDir = null;
f.soy.data.SanitizedContent.prototype.getContent = function () {
    return this.content
};
f.soy.data.SanitizedContent.prototype.toString = function () {
    return this.content
};
f.soy.REQUIRE_STRICT_AUTOESCAPE = !1;
f.soy.renderElement = function (a, c, d, e) {
    f.asserts.assert(c, "Soy template may not be null.");
    a.innerHTML = f.soy.ensureTemplateOutputHtml_(c(d || f.soy.defaultTemplateData_, void 0, e))
};
f.soy.renderAsFragment = function (a, c, d, e) {
    f.asserts.assert(a, "Soy template may not be null.");
    e = e || f.dom.getDomHelper();
    a = f.soy.ensureTemplateOutputHtml_(a(c || f.soy.defaultTemplateData_, void 0, d));
    f.soy.assertFirstTagValid_(a);
    return e.htmlToDocumentFragment(a)
};
f.soy.renderAsElement = function (a, c, d, e) {
    f.asserts.assert(a, "Soy template may not be null.");
    e = e || f.dom.getDomHelper();
    e = e.createElement(f.dom.TagName.DIV);
    a = f.soy.ensureTemplateOutputHtml_(a(c || f.soy.defaultTemplateData_, void 0, d));
    f.soy.assertFirstTagValid_(a);
    e.innerHTML = a;
    return 1 == e.childNodes.length && (a = e.firstChild, a.nodeType == f.dom.NodeType.ELEMENT) ? a : e
};
f.soy.ensureTemplateOutputHtml_ = function (a) {
    if (!f.soy.REQUIRE_STRICT_AUTOESCAPE && !f.isObject(a))return String(a);
    if (a instanceof f.soy.data.SanitizedContent) {
        var c = f.soy.data.SanitizedContentKind;
        if (a.contentKind === c.HTML)return f.asserts.assertString(a.getContent());
        if (a.contentKind === c.TEXT)return f.string.htmlEscape(a.getContent())
    }
    f.asserts.fail("Soy template output is unsafe for use as HTML: " + a);
    return"zSoyz"
};
f.soy.assertFirstTagValid_ = function (a) {
    if (f.asserts.ENABLE_ASSERTS) {
        var c = a.match(f.soy.INVALID_TAG_TO_RENDER_);
        f.asserts.assert(!c, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", c && c[0], a)
    }
};
f.soy.INVALID_TAG_TO_RENDER_ = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i;
f.soy.defaultTemplateData_ = {};
f.events.KeyCodes = {WIN_KEY_FF_LINUX: 0, MAC_ENTER: 3, BACKSPACE: 8, TAB: 9, NUM_CENTER: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, PAUSE: 19, CAPS_LOCK: 20, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, PRINT_SCREEN: 44, INSERT: 45, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, FF_SEMICOLON: 59, FF_EQUALS: 61, FF_DASH: 173, QUESTION_MARK: 63, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85,
    V: 86, W: 87, X: 88, Y: 89, Z: 90, META: 91, WIN_KEY_RIGHT: 92, CONTEXT_MENU: 93, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NUMLOCK: 144, SCROLL_LOCK: 145, FIRST_MEDIA_KEY: 166, LAST_MEDIA_KEY: 183, SEMICOLON: 186, DASH: 189, EQUALS: 187, COMMA: 188, PERIOD: 190, SLASH: 191, APOSTROPHE: 192,
    TILDE: 192, SINGLE_QUOTE: 222, OPEN_SQUARE_BRACKET: 219, BACKSLASH: 220, CLOSE_SQUARE_BRACKET: 221, WIN_KEY: 224, MAC_FF_META: 224, MAC_WK_CMD_LEFT: 91, MAC_WK_CMD_RIGHT: 93, WIN_IME: 229, PHANTOM: 255};
f.events.KeyCodes.isTextModifyingKeyEvent = function (a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || a.keyCode >= f.events.KeyCodes.F1 && a.keyCode <= f.events.KeyCodes.F12)return!1;
    switch (a.keyCode) {
        case f.events.KeyCodes.ALT:
        case f.events.KeyCodes.CAPS_LOCK:
        case f.events.KeyCodes.CONTEXT_MENU:
        case f.events.KeyCodes.CTRL:
        case f.events.KeyCodes.DOWN:
        case f.events.KeyCodes.END:
        case f.events.KeyCodes.ESC:
        case f.events.KeyCodes.HOME:
        case f.events.KeyCodes.INSERT:
        case f.events.KeyCodes.LEFT:
        case f.events.KeyCodes.MAC_FF_META:
        case f.events.KeyCodes.META:
        case f.events.KeyCodes.NUMLOCK:
        case f.events.KeyCodes.NUM_CENTER:
        case f.events.KeyCodes.PAGE_DOWN:
        case f.events.KeyCodes.PAGE_UP:
        case f.events.KeyCodes.PAUSE:
        case f.events.KeyCodes.PHANTOM:
        case f.events.KeyCodes.PRINT_SCREEN:
        case f.events.KeyCodes.RIGHT:
        case f.events.KeyCodes.SCROLL_LOCK:
        case f.events.KeyCodes.SHIFT:
        case f.events.KeyCodes.UP:
        case f.events.KeyCodes.WIN_KEY:
        case f.events.KeyCodes.WIN_KEY_RIGHT:
            return!1;
        case f.events.KeyCodes.WIN_KEY_FF_LINUX:
            return!f.userAgent.GECKO;
        default:
            return a.keyCode < f.events.KeyCodes.FIRST_MEDIA_KEY || a.keyCode > f.events.KeyCodes.LAST_MEDIA_KEY
    }
};
f.events.KeyCodes.firesKeyPressEvent = function (a, c, d, e, g) {
    if (!(f.userAgent.IE || f.userAgent.WEBKIT && f.userAgent.isVersionOrHigher("525")))return!0;
    if (f.userAgent.MAC && g)return f.events.KeyCodes.isCharacterKey(a);
    if (g && !e)return!1;
    f.isNumber(c) && (c = f.events.KeyCodes.normalizeKeyCode(c));
    if (!d && (c == f.events.KeyCodes.CTRL || c == f.events.KeyCodes.ALT || f.userAgent.MAC && c == f.events.KeyCodes.META))return!1;
    if (f.userAgent.WEBKIT && e && d)switch (a) {
        case f.events.KeyCodes.BACKSLASH:
        case f.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case f.events.KeyCodes.CLOSE_SQUARE_BRACKET:
        case f.events.KeyCodes.TILDE:
        case f.events.KeyCodes.SEMICOLON:
        case f.events.KeyCodes.DASH:
        case f.events.KeyCodes.EQUALS:
        case f.events.KeyCodes.COMMA:
        case f.events.KeyCodes.PERIOD:
        case f.events.KeyCodes.SLASH:
        case f.events.KeyCodes.APOSTROPHE:
        case f.events.KeyCodes.SINGLE_QUOTE:
            return!1
    }
    if (f.userAgent.IE &&
        e && c == a)return!1;
    switch (a) {
        case f.events.KeyCodes.ENTER:
            return!0;
        case f.events.KeyCodes.ESC:
            return!f.userAgent.WEBKIT
    }
    return f.events.KeyCodes.isCharacterKey(a)
};
f.events.KeyCodes.isCharacterKey = function (a) {
    if (a >= f.events.KeyCodes.ZERO && a <= f.events.KeyCodes.NINE || a >= f.events.KeyCodes.NUM_ZERO && a <= f.events.KeyCodes.NUM_MULTIPLY || a >= f.events.KeyCodes.A && a <= f.events.KeyCodes.Z || f.userAgent.WEBKIT && 0 == a)return!0;
    switch (a) {
        case f.events.KeyCodes.SPACE:
        case f.events.KeyCodes.QUESTION_MARK:
        case f.events.KeyCodes.NUM_PLUS:
        case f.events.KeyCodes.NUM_MINUS:
        case f.events.KeyCodes.NUM_PERIOD:
        case f.events.KeyCodes.NUM_DIVISION:
        case f.events.KeyCodes.SEMICOLON:
        case f.events.KeyCodes.FF_SEMICOLON:
        case f.events.KeyCodes.DASH:
        case f.events.KeyCodes.EQUALS:
        case f.events.KeyCodes.FF_EQUALS:
        case f.events.KeyCodes.COMMA:
        case f.events.KeyCodes.PERIOD:
        case f.events.KeyCodes.SLASH:
        case f.events.KeyCodes.APOSTROPHE:
        case f.events.KeyCodes.SINGLE_QUOTE:
        case f.events.KeyCodes.OPEN_SQUARE_BRACKET:
        case f.events.KeyCodes.BACKSLASH:
        case f.events.KeyCodes.CLOSE_SQUARE_BRACKET:
            return!0;
        default:
            return!1
    }
};
f.events.KeyCodes.normalizeKeyCode = function (a) {
    return f.userAgent.GECKO ? f.events.KeyCodes.normalizeGeckoKeyCode(a) : f.userAgent.MAC && f.userAgent.WEBKIT ? f.events.KeyCodes.normalizeMacWebKitKeyCode(a) : a
};
f.events.KeyCodes.normalizeGeckoKeyCode = function (a) {
    switch (a) {
        case f.events.KeyCodes.FF_EQUALS:
            return f.events.KeyCodes.EQUALS;
        case f.events.KeyCodes.FF_SEMICOLON:
            return f.events.KeyCodes.SEMICOLON;
        case f.events.KeyCodes.FF_DASH:
            return f.events.KeyCodes.DASH;
        case f.events.KeyCodes.MAC_FF_META:
            return f.events.KeyCodes.META;
        case f.events.KeyCodes.WIN_KEY_FF_LINUX:
            return f.events.KeyCodes.WIN_KEY;
        default:
            return a
    }
};
f.events.KeyCodes.normalizeMacWebKitKeyCode = function (a) {
    switch (a) {
        case f.events.KeyCodes.MAC_WK_CMD_RIGHT:
            return f.events.KeyCodes.META;
        default:
            return a
    }
};
f.events.KeyHandler = function (a, c) {
    f.events.EventTarget.call(this);
    a && this.attach(a, c)
};
f.inherits(f.events.KeyHandler, f.events.EventTarget);
b = f.events.KeyHandler.prototype;
b.element_ = null;
b.keyPressKey_ = null;
b.keyDownKey_ = null;
b.keyUpKey_ = null;
b.lastKey_ = -1;
b.keyCode_ = -1;
b.altKey_ = !1;
f.events.KeyHandler.EventType = {KEY: "key"};
f.events.KeyHandler.safariKey_ = {3: f.events.KeyCodes.ENTER, 12: f.events.KeyCodes.NUMLOCK, 63232: f.events.KeyCodes.UP, 63233: f.events.KeyCodes.DOWN, 63234: f.events.KeyCodes.LEFT, 63235: f.events.KeyCodes.RIGHT, 63236: f.events.KeyCodes.F1, 63237: f.events.KeyCodes.F2, 63238: f.events.KeyCodes.F3, 63239: f.events.KeyCodes.F4, 63240: f.events.KeyCodes.F5, 63241: f.events.KeyCodes.F6, 63242: f.events.KeyCodes.F7, 63243: f.events.KeyCodes.F8, 63244: f.events.KeyCodes.F9, 63245: f.events.KeyCodes.F10, 63246: f.events.KeyCodes.F11,
    63247: f.events.KeyCodes.F12, 63248: f.events.KeyCodes.PRINT_SCREEN, 63272: f.events.KeyCodes.DELETE, 63273: f.events.KeyCodes.HOME, 63275: f.events.KeyCodes.END, 63276: f.events.KeyCodes.PAGE_UP, 63277: f.events.KeyCodes.PAGE_DOWN, 63289: f.events.KeyCodes.NUMLOCK, 63302: f.events.KeyCodes.INSERT};
f.events.KeyHandler.keyIdentifier_ = {Up: f.events.KeyCodes.UP, Down: f.events.KeyCodes.DOWN, Left: f.events.KeyCodes.LEFT, Right: f.events.KeyCodes.RIGHT, Enter: f.events.KeyCodes.ENTER, F1: f.events.KeyCodes.F1, F2: f.events.KeyCodes.F2, F3: f.events.KeyCodes.F3, F4: f.events.KeyCodes.F4, F5: f.events.KeyCodes.F5, F6: f.events.KeyCodes.F6, F7: f.events.KeyCodes.F7, F8: f.events.KeyCodes.F8, F9: f.events.KeyCodes.F9, F10: f.events.KeyCodes.F10, F11: f.events.KeyCodes.F11, F12: f.events.KeyCodes.F12, "U+007F": f.events.KeyCodes.DELETE,
    Home: f.events.KeyCodes.HOME, End: f.events.KeyCodes.END, PageUp: f.events.KeyCodes.PAGE_UP, PageDown: f.events.KeyCodes.PAGE_DOWN, Insert: f.events.KeyCodes.INSERT};
f.events.KeyHandler.USES_KEYDOWN_ = f.userAgent.IE || f.userAgent.WEBKIT && f.userAgent.isVersionOrHigher("525");
f.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ = f.userAgent.MAC && f.userAgent.GECKO;
b = f.events.KeyHandler.prototype;
b.handleKeyDown_ = function (a) {
    f.userAgent.WEBKIT && (this.lastKey_ == f.events.KeyCodes.CTRL && !a.ctrlKey || this.lastKey_ == f.events.KeyCodes.ALT && !a.altKey || f.userAgent.MAC && this.lastKey_ == f.events.KeyCodes.META && !a.metaKey) && (this.keyCode_ = this.lastKey_ = -1);
    -1 == this.lastKey_ && (a.ctrlKey && a.keyCode != f.events.KeyCodes.CTRL ? this.lastKey_ = f.events.KeyCodes.CTRL : a.altKey && a.keyCode != f.events.KeyCodes.ALT ? this.lastKey_ = f.events.KeyCodes.ALT : a.metaKey && a.keyCode != f.events.KeyCodes.META && (this.lastKey_ = f.events.KeyCodes.META));
    f.events.KeyHandler.USES_KEYDOWN_ && !f.events.KeyCodes.firesKeyPressEvent(a.keyCode, this.lastKey_, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.keyCode_ = f.events.KeyCodes.normalizeKeyCode(a.keyCode), f.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ && (this.altKey_ = a.altKey))
};
b.resetState = function () {
    this.keyCode_ = this.lastKey_ = -1
};
b.handleKeyup_ = function (a) {
    this.resetState();
    this.altKey_ = a.altKey
};
b.handleEvent = function (a) {
    var c = a.getBrowserEvent(), d, e, g = c.altKey;
    f.userAgent.IE && a.type == f.events.EventType.KEYPRESS ? (d = this.keyCode_, e = d != f.events.KeyCodes.ENTER && d != f.events.KeyCodes.ESC ? c.keyCode : 0) : f.userAgent.WEBKIT && a.type == f.events.EventType.KEYPRESS ? (d = this.keyCode_, e = 0 <= c.charCode && 63232 > c.charCode && f.events.KeyCodes.isCharacterKey(d) ? c.charCode : 0) : f.userAgent.OPERA ? (d = this.keyCode_, e = f.events.KeyCodes.isCharacterKey(d) ? c.keyCode : 0) : (d = c.keyCode || this.keyCode_, e = c.charCode || 0, f.events.KeyHandler.SAVE_ALT_FOR_KEYPRESS_ &&
        (g = this.altKey_), f.userAgent.MAC && e == f.events.KeyCodes.QUESTION_MARK && d == f.events.KeyCodes.WIN_KEY && (d = f.events.KeyCodes.SLASH));
    var h = d = f.events.KeyCodes.normalizeKeyCode(d), l = c.keyIdentifier;
    d ? 63232 <= d && d in f.events.KeyHandler.safariKey_ ? h = f.events.KeyHandler.safariKey_[d] : 25 == d && a.shiftKey && (h = 9) : l && l in f.events.KeyHandler.keyIdentifier_ && (h = f.events.KeyHandler.keyIdentifier_[l]);
    a = h == this.lastKey_;
    this.lastKey_ = h;
    c = new f.events.KeyEvent(h, e, a, c);
    c.altKey = g;
    this.dispatchEvent(c)
};
b.getElement = function () {
    return this.element_
};
b.attach = function (a, c) {
    this.keyUpKey_ && this.detach();
    this.element_ = a;
    this.keyPressKey_ = f.events.listen(this.element_, f.events.EventType.KEYPRESS, this, c);
    this.keyDownKey_ = f.events.listen(this.element_, f.events.EventType.KEYDOWN, this.handleKeyDown_, c, this);
    this.keyUpKey_ = f.events.listen(this.element_, f.events.EventType.KEYUP, this.handleKeyup_, c, this)
};
b.detach = function () {
    this.keyPressKey_ && (f.events.unlistenByKey(this.keyPressKey_), f.events.unlistenByKey(this.keyDownKey_), f.events.unlistenByKey(this.keyUpKey_), this.keyUpKey_ = this.keyDownKey_ = this.keyPressKey_ = null);
    this.element_ = null;
    this.keyCode_ = this.lastKey_ = -1
};
b.disposeInternal = function () {
    f.events.KeyHandler.superClass_.disposeInternal.call(this);
    this.detach()
};
f.events.KeyEvent = function (a, c, d, e) {
    f.events.BrowserEvent.call(this, e);
    this.type = f.events.KeyHandler.EventType.KEY;
    this.keyCode = a;
    this.charCode = c;
    this.repeat = d
};
f.inherits(f.events.KeyEvent, f.events.BrowserEvent);
f.a11y = {};
f.a11y.aria = {};
f.a11y.aria.State = {ACTIVEDESCENDANT: "activedescendant", ATOMIC: "atomic", AUTOCOMPLETE: "autocomplete", BUSY: "busy", CHECKED: "checked", CONTROLS: "controls", DESCRIBEDBY: "describedby", DISABLED: "disabled", DROPEFFECT: "dropeffect", EXPANDED: "expanded", FLOWTO: "flowto", GRABBED: "grabbed", HASPOPUP: "haspopup", HIDDEN: "hidden", INVALID: "invalid", LABEL: "label", LABELLEDBY: "labelledby", LEVEL: "level", LIVE: "live", MULTILINE: "multiline", MULTISELECTABLE: "multiselectable", ORIENTATION: "orientation", OWNS: "owns", POSINSET: "posinset",
    PRESSED: "pressed", READONLY: "readonly", RELEVANT: "relevant", REQUIRED: "required", SELECTED: "selected", SETSIZE: "setsize", SORT: "sort", VALUEMAX: "valuemax", VALUEMIN: "valuemin", VALUENOW: "valuenow", VALUETEXT: "valuetext"};
f.a11y.aria.AutoCompleteValues = {INLINE: "inline", LIST: "list", BOTH: "both", NONE: "none"};
f.a11y.aria.DropEffectValues = {COPY: "copy", MOVE: "move", LINK: "link", EXECUTE: "execute", POPUP: "popup", NONE: "none"};
f.a11y.aria.LivePriority = {OFF: "off", POLITE: "polite", ASSERTIVE: "assertive"};
f.a11y.aria.OrientationValues = {VERTICAL: "vertical", HORIZONTAL: "horizontal"};
f.a11y.aria.RelevantValues = {ADDITIONS: "additions", REMOVALS: "removals", TEXT: "text", ALL: "all"};
f.a11y.aria.SortValues = {ASCENDING: "ascending", DESCENDING: "descending", NONE: "none", OTHER: "other"};
f.a11y.aria.CheckedValues = {TRUE: "true", FALSE: "false", MIXED: "mixed", UNDEFINED: "undefined"};
f.a11y.aria.ExpandedValues = {TRUE: "true", FALSE: "false", UNDEFINED: "undefined"};
f.a11y.aria.GrabbedValues = {TRUE: "true", FALSE: "false", UNDEFINED: "undefined"};
f.a11y.aria.InvalidValues = {FALSE: "false", TRUE: "true", GRAMMAR: "grammar", SPELLING: "spelling"};
f.a11y.aria.PressedValues = {TRUE: "true", FALSE: "false", MIXED: "mixed", UNDEFINED: "undefined"};
f.a11y.aria.SelectedValues = {TRUE: "true", FALSE: "false", UNDEFINED: "undefined"};
f.a11y.aria.datatables = {};
f.a11y.aria.datatables.getDefaultValuesMap = function () {
    f.a11y.aria.DefaultStateValueMap_ || (f.a11y.aria.DefaultStateValueMap_ = f.object.create(f.a11y.aria.State.ATOMIC, !1, f.a11y.aria.State.AUTOCOMPLETE, "none", f.a11y.aria.State.DROPEFFECT, "none", f.a11y.aria.State.HASPOPUP, !1, f.a11y.aria.State.LIVE, "off", f.a11y.aria.State.MULTILINE, !1, f.a11y.aria.State.MULTISELECTABLE, !1, f.a11y.aria.State.ORIENTATION, "vertical", f.a11y.aria.State.READONLY, !1, f.a11y.aria.State.RELEVANT, "additions text", f.a11y.aria.State.REQUIRED,
        !1, f.a11y.aria.State.SORT, "none", f.a11y.aria.State.BUSY, !1, f.a11y.aria.State.DISABLED, !1, f.a11y.aria.State.HIDDEN, !1, f.a11y.aria.State.INVALID, "false"));
    return f.a11y.aria.DefaultStateValueMap_
};
f.a11y.aria.Role = {ALERT: "alert", ALERTDIALOG: "alertdialog", APPLICATION: "application", ARTICLE: "article", BANNER: "banner", BUTTON: "button", CHECKBOX: "checkbox", COLUMNHEADER: "columnheader", COMBOBOX: "combobox", COMPLEMENTARY: "complementary", CONTENTINFO: "contentinfo", DEFINITION: "definition", DIALOG: "dialog", DIRECTORY: "directory", DOCUMENT: "document", FORM: "form", GRID: "grid", GRIDCELL: "gridcell", GROUP: "group", HEADING: "heading", IMG: "img", LINK: "link", LIST: "list", LISTBOX: "listbox", LISTITEM: "listitem", LOG: "log", MAIN: "main",
    MARQUEE: "marquee", MATH: "math", MENU: "menu", MENUBAR: "menubar", MENU_ITEM: "menuitem", MENU_ITEM_CHECKBOX: "menuitemcheckbox", MENU_ITEM_RADIO: "menuitemradio", NAVIGATION: "navigation", NOTE: "note", OPTION: "option", PRESENTATION: "presentation", PROGRESSBAR: "progressbar", RADIO: "radio", RADIOGROUP: "radiogroup", REGION: "region", ROW: "row", ROWGROUP: "rowgroup", ROWHEADER: "rowheader", SCROLLBAR: "scrollbar", SEARCH: "search", SEPARATOR: "separator", SLIDER: "slider", SPINBUTTON: "spinbutton", STATUS: "status", TAB: "tab", TAB_LIST: "tablist",
    TAB_PANEL: "tabpanel", TEXTBOX: "textbox", TIMER: "timer", TOOLBAR: "toolbar", TOOLTIP: "tooltip", TREE: "tree", TREEGRID: "treegrid", TREEITEM: "treeitem"};
f.a11y.aria.ARIA_PREFIX_ = "aria-";
f.a11y.aria.ROLE_ATTRIBUTE_ = "role";
f.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = [f.dom.TagName.A, f.dom.TagName.AREA, f.dom.TagName.BUTTON, f.dom.TagName.HEAD, f.dom.TagName.INPUT, f.dom.TagName.LINK, f.dom.TagName.MENU, f.dom.TagName.META, f.dom.TagName.OPTGROUP, f.dom.TagName.OPTION, f.dom.TagName.PROGRESS, f.dom.TagName.STYLE, f.dom.TagName.SELECT, f.dom.TagName.SOURCE, f.dom.TagName.TEXTAREA, f.dom.TagName.TITLE, f.dom.TagName.TRACK];
f.a11y.aria.setRole = function (a, c) {
    c ? (f.asserts.ENABLE_ASSERTS && f.asserts.assert(f.object.containsValue(f.a11y.aria.Role, c), "No such ARIA role " + c), a.setAttribute(f.a11y.aria.ROLE_ATTRIBUTE_, c)) : f.a11y.aria.removeRole(a)
};
f.a11y.aria.getRole = function (a) {
    return(a = a.getAttribute(f.a11y.aria.ROLE_ATTRIBUTE_)) || null
};
f.a11y.aria.removeRole = function (a) {
    a.removeAttribute(f.a11y.aria.ROLE_ATTRIBUTE_)
};
f.a11y.aria.setState = function (a, c, d) {
    f.isArray(d) && (d = d.join(" "));
    var e = f.a11y.aria.getAriaAttributeName_(c);
    "" === d || void 0 == d ? (d = f.a11y.aria.datatables.getDefaultValuesMap(), c in d ? a.setAttribute(e, d[c]) : a.removeAttribute(e)) : a.setAttribute(e, d)
};
f.a11y.aria.removeState = function (a, c) {
    a.removeAttribute(f.a11y.aria.getAriaAttributeName_(c))
};
f.a11y.aria.getState = function (a, c) {
    var d = a.getAttribute(f.a11y.aria.getAriaAttributeName_(c)), e = null == d || void 0 == d;
    return e ? "" : String(d)
};
f.a11y.aria.getActiveDescendant = function (a) {
    var c = f.a11y.aria.getState(a, f.a11y.aria.State.ACTIVEDESCENDANT);
    return f.dom.getOwnerDocument(a).getElementById(c)
};
f.a11y.aria.setActiveDescendant = function (a, c) {
    var d = "";
    c && (d = c.id, f.asserts.assert(d, "The active element should have an id."));
    f.a11y.aria.setState(a, f.a11y.aria.State.ACTIVEDESCENDANT, d)
};
f.a11y.aria.getLabel = function (a) {
    return f.a11y.aria.getState(a, f.a11y.aria.State.LABEL)
};
f.a11y.aria.setLabel = function (a, c) {
    f.a11y.aria.setState(a, f.a11y.aria.State.LABEL, c)
};
f.a11y.aria.assertRoleIsSetInternalUtil = function (a, c) {
    if (!f.array.contains(f.a11y.aria.TAGS_WITH_ASSUMED_ROLES_, a.tagName)) {
        var d = f.a11y.aria.getRole(a);
        f.asserts.assert(null != d, "The element ARIA role cannot be null.");
        f.asserts.assert(f.array.contains(c, d), 'Non existing or incorrect role set for element.The role set is "' + d + '". The role should be any of "' + c + '". Check the ARIA specification for more details http://www.w3.org/TR/wai-aria/roles.')
    }
};
f.a11y.aria.getStateBoolean = function (a, c) {
    var d = a.getAttribute(f.a11y.aria.getAriaAttributeName_(c));
    f.asserts.assert(f.isBoolean(d) || null == d || "true" == d || "false" == d);
    return null == d ? d : f.isBoolean(d) ? d : "true" == d
};
f.a11y.aria.getStateNumber = function (a, c) {
    var d = a.getAttribute(f.a11y.aria.getAriaAttributeName_(c));
    f.asserts.assert((null == d || !isNaN(Number(d))) && !f.isBoolean(d));
    return null == d ? null : Number(d)
};
f.a11y.aria.getStateString = function (a, c) {
    var d = a.getAttribute(f.a11y.aria.getAriaAttributeName_(c));
    f.asserts.assert((null == d || f.isString(d)) && isNaN(Number(d)) && "true" != d && "false" != d);
    return null == d ? null : d
};
f.a11y.aria.getStringArrayStateInternalUtil = function (a, c) {
    var d = a.getAttribute(f.a11y.aria.getAriaAttributeName_(c));
    return f.a11y.aria.splitStringOnWhitespace_(d)
};
f.a11y.aria.splitStringOnWhitespace_ = function (a) {
    return a ? a.split(/\s+/) : []
};
f.a11y.aria.getAriaAttributeName_ = function (a) {
    f.asserts.ENABLE_ASSERTS && (f.asserts.assert(a, "ARIA attribute cannot be empty."), f.asserts.assert(f.object.containsValue(f.a11y.aria.State, a), "No such ARIA attribute " + a));
    return f.a11y.aria.ARIA_PREFIX_ + a
};
f.ui.ButtonSide = {NONE: 0, START: 1, END: 2, BOTH: 3};
f.ui.ControlRenderer = function () {
};
f.addSingletonGetter(f.ui.ControlRenderer);
f.tagUnsealableClass(f.ui.ControlRenderer);
f.ui.ControlRenderer.getCustomRenderer = function (a, c) {
    var d = new a;
    d.getCssClass = function () {
        return c
    };
    return d
};
f.ui.ControlRenderer.CSS_CLASS = "goog-control";
f.ui.ControlRenderer.IE6_CLASS_COMBINATIONS = [];
f.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_ = f.object.create(f.a11y.aria.Role.BUTTON, f.a11y.aria.State.PRESSED, f.a11y.aria.Role.CHECKBOX, f.a11y.aria.State.CHECKED, f.a11y.aria.Role.MENU_ITEM, f.a11y.aria.State.SELECTED, f.a11y.aria.Role.MENU_ITEM_CHECKBOX, f.a11y.aria.State.CHECKED, f.a11y.aria.Role.MENU_ITEM_RADIO, f.a11y.aria.State.CHECKED, f.a11y.aria.Role.RADIO, f.a11y.aria.State.CHECKED, f.a11y.aria.Role.TAB, f.a11y.aria.State.SELECTED, f.a11y.aria.Role.TREEITEM, f.a11y.aria.State.SELECTED);
b = f.ui.ControlRenderer.prototype;
b.getAriaRole = function () {
};
b.createDom = function (a) {
    var c = a.getDomHelper().createDom("div", this.getClassNames(a).join(" "), a.getContent());
    this.setAriaStates(a, c);
    return c
};
b.getContentElement = function (a) {
    return a
};
b.enableClassName = function (a, c, d) {
    if (a = a.getElement ? a.getElement() : a) {
        var e = [c];
        f.userAgent.IE && !f.userAgent.isVersionOrHigher("7") && (e = this.getAppliedCombinedClassNames_(f.dom.classlist.get(a), c), e.push(c));
        f.dom.classlist.enableAll(a, e, d)
    }
};
b.enableExtraClassName = function (a, c, d) {
    this.enableClassName(a, c, d)
};
b.canDecorate = function () {
    return!0
};
b.decorate = function (a, c) {
    c.id && a.setId(c.id);
    var d = this.getContentElement(c);
    d && d.firstChild ? a.setContentInternal(d.firstChild.nextSibling ? f.array.clone(d.childNodes) : d.firstChild) : a.setContentInternal(null);
    var e = 0, g = this.getCssClass(), h = this.getStructuralCssClass(), l = !1, p = !1, q = !1, s = f.array.toArray(f.dom.classlist.get(c));
    f.array.forEach(s, function (a) {
        l || a != g ? p || a != h ? e |= this.getStateFromClass(a) : p = !0 : (l = !0, h == g && (p = !0));
        this.getStateFromClass(a) == f.ui.Component.State.DISABLED && f.dom.isFocusableTabIndex(d) &&
        f.dom.setFocusableTabIndex(d, !1)
    }, this);
    a.setStateInternal(e);
    l || (s.push(g), h == g && (p = !0));
    p || s.push(h);
    var t = a.getExtraClassNames();
    t && s.push.apply(s, t);
    if (f.userAgent.IE && !f.userAgent.isVersionOrHigher("7")) {
        var u = this.getAppliedCombinedClassNames_(s);
        0 < u.length && (s.push.apply(s, u), q = !0)
    }
    l && p && !t && !q || f.dom.classlist.set(c, s.join(" "));
    this.setAriaStates(a, c);
    return c
};
b.initializeDom = function (a) {
    a.isRightToLeft() && this.setRightToLeft(a.getElement(), !0);
    a.isEnabled() && this.setFocusable(a, a.isVisible())
};
b.setAriaRole = function (a, c) {
    var d = c || this.getAriaRole();
    if (d) {
        f.asserts.assert(a, "The element passed as a first parameter cannot be null.");
        var e = f.a11y.aria.getRole(a);
        d != e && f.a11y.aria.setRole(a, d)
    }
};
b.setAriaStates = function (a, c) {
    f.asserts.assert(a);
    f.asserts.assert(c);
    a.isVisible() || f.a11y.aria.setState(c, f.a11y.aria.State.HIDDEN, !a.isVisible());
    a.isEnabled() || this.updateAriaState(c, f.ui.Component.State.DISABLED, !a.isEnabled());
    a.isSupportedState(f.ui.Component.State.SELECTED) && this.updateAriaState(c, f.ui.Component.State.SELECTED, a.isSelected());
    a.isSupportedState(f.ui.Component.State.CHECKED) && this.updateAriaState(c, f.ui.Component.State.CHECKED, a.isChecked());
    a.isSupportedState(f.ui.Component.State.OPENED) &&
    this.updateAriaState(c, f.ui.Component.State.OPENED, a.isOpen())
};
b.setAllowTextSelection = function (a, c) {
    f.style.setUnselectable(a, !c, !f.userAgent.IE && !f.userAgent.OPERA)
};
b.setRightToLeft = function (a, c) {
    this.enableClassName(a, this.getStructuralCssClass() + "-rtl", c)
};
b.isFocusable = function (a) {
    var c;
    return a.isSupportedState(f.ui.Component.State.FOCUSED) && (c = a.getKeyEventTarget()) ? f.dom.isFocusableTabIndex(c) : !1
};
b.setFocusable = function (a, c) {
    var d;
    if (a.isSupportedState(f.ui.Component.State.FOCUSED) && (d = a.getKeyEventTarget())) {
        if (!c && a.isFocused()) {
            try {
                d.blur()
            } catch (e) {
            }
            a.isFocused() && a.handleBlur(null)
        }
        f.dom.isFocusableTabIndex(d) != c && f.dom.setFocusableTabIndex(d, c)
    }
};
b.setVisible = function (a, c) {
    f.style.setElementShown(a, c);
    a && f.a11y.aria.setState(a, f.a11y.aria.State.HIDDEN, !c)
};
b.setState = function (a, c, d) {
    var e = a.getElement();
    if (e) {
        var g = this.getClassForState(c);
        g && this.enableClassName(a, g, d);
        this.updateAriaState(e, c, d)
    }
};
b.updateAriaState = function (a, c, d) {
    f.ui.ControlRenderer.ARIA_ATTRIBUTE_MAP_ || (f.ui.ControlRenderer.ARIA_ATTRIBUTE_MAP_ = f.object.create(f.ui.Component.State.DISABLED, f.a11y.aria.State.DISABLED, f.ui.Component.State.SELECTED, f.a11y.aria.State.SELECTED, f.ui.Component.State.CHECKED, f.a11y.aria.State.CHECKED, f.ui.Component.State.OPENED, f.a11y.aria.State.EXPANDED));
    f.asserts.assert(a, "The element passed as a first parameter cannot be null.");
    (c = f.ui.ControlRenderer.getAriaStateForAriaRole_(a, f.ui.ControlRenderer.ARIA_ATTRIBUTE_MAP_[c])) &&
    f.a11y.aria.setState(a, c, d)
};
f.ui.ControlRenderer.getAriaStateForAriaRole_ = function (a, c) {
    var d = f.a11y.aria.getRole(a);
    if (!d)return c;
    d = f.ui.ControlRenderer.TOGGLE_ARIA_STATE_MAP_[d] || c;
    return f.ui.ControlRenderer.isAriaState_(c) ? d : c
};
f.ui.ControlRenderer.isAriaState_ = function (a) {
    return a == f.a11y.aria.State.CHECKED || a == f.a11y.aria.State.SELECTED
};
b = f.ui.ControlRenderer.prototype;
b.getKeyEventTarget = function (a) {
    return a.getElement()
};
b.getCssClass = function () {
    return f.ui.ControlRenderer.CSS_CLASS
};
b.getIe6ClassCombinations = function () {
    return[]
};
b.getStructuralCssClass = function () {
    return this.getCssClass()
};
b.getClassNames = function (a) {
    var c = this.getCssClass(), d = [c], e = this.getStructuralCssClass();
    e != c && d.push(e);
    c = this.getClassNamesForState(a.getState());
    d.push.apply(d, c);
    (a = a.getExtraClassNames()) && d.push.apply(d, a);
    f.userAgent.IE && !f.userAgent.isVersionOrHigher("7") && d.push.apply(d, this.getAppliedCombinedClassNames_(d));
    return d
};
b.getAppliedCombinedClassNames_ = function (a, c) {
    var d = [];
    c && (a = a.concat([c]));
    f.array.forEach(this.getIe6ClassCombinations(), function (e) {
        !f.array.every(e, f.partial(f.array.contains, a)) || c && !f.array.contains(e, c) || d.push(e.join("_"))
    });
    return d
};
b.getClassNamesForState = function (a) {
    for (var c = []; a;) {
        var d = a & -a;
        c.push(this.getClassForState(d));
        a &= ~d
    }
    return c
};
b.getClassForState = function (a) {
    this.classByState_ || this.createClassByStateMap_();
    return this.classByState_[a]
};
b.getStateFromClass = function (a) {
    this.stateByClass_ || this.createStateByClassMap_();
    a = parseInt(this.stateByClass_[a], 10);
    return isNaN(a) ? 0 : a
};
b.createClassByStateMap_ = function () {
    var a = this.getStructuralCssClass(), c = !f.string.contains(f.string.normalizeWhitespace(a), " ");
    f.asserts.assert(c, "ControlRenderer has an invalid css class: '" + a + "'");
    this.classByState_ = f.object.create(f.ui.Component.State.DISABLED, a + "-disabled", f.ui.Component.State.HOVER, a + "-hover", f.ui.Component.State.ACTIVE, a + "-active", f.ui.Component.State.SELECTED, a + "-selected", f.ui.Component.State.CHECKED, a + "-checked", f.ui.Component.State.FOCUSED, a + "-focused", f.ui.Component.State.OPENED,
            a + "-open")
};
b.createStateByClassMap_ = function () {
    this.classByState_ || this.createClassByStateMap_();
    this.stateByClass_ = f.object.transpose(this.classByState_)
};
f.ui.ButtonRenderer = function () {
};
f.inherits(f.ui.ButtonRenderer, f.ui.ControlRenderer);
f.addSingletonGetter(f.ui.ButtonRenderer);
f.ui.ButtonRenderer.CSS_CLASS = "goog-button";
b = f.ui.ButtonRenderer.prototype;
b.getAriaRole = function () {
    return f.a11y.aria.Role.BUTTON
};
b.updateAriaState = function (a, c, d) {
    switch (c) {
        case f.ui.Component.State.SELECTED:
        case f.ui.Component.State.CHECKED:
            f.asserts.assert(a, "The button DOM element cannot be null.");
            f.a11y.aria.setState(a, f.a11y.aria.State.PRESSED, d);
            break;
        default:
        case f.ui.Component.State.OPENED:
        case f.ui.Component.State.DISABLED:
            f.ui.ButtonRenderer.superClass_.updateAriaState.call(this, a, c, d)
    }
};
b.createDom = function (a) {
    var c = f.ui.ButtonRenderer.superClass_.createDom.call(this, a);
    this.setTooltip(c, a.getTooltip());
    var d = a.getValue();
    d && this.setValue(c, d);
    a.isSupportedState(f.ui.Component.State.CHECKED) && this.updateAriaState(c, f.ui.Component.State.CHECKED, a.isChecked());
    return c
};
b.decorate = function (a, c) {
    c = f.ui.ButtonRenderer.superClass_.decorate.call(this, a, c);
    a.setValueInternal(this.getValue(c));
    a.setTooltipInternal(this.getTooltip(c));
    a.isSupportedState(f.ui.Component.State.CHECKED) && this.updateAriaState(c, f.ui.Component.State.CHECKED, a.isChecked());
    return c
};
b.getValue = f.nullFunction;
b.setValue = f.nullFunction;
b.getTooltip = function (a) {
    return a.title
};
b.setTooltip = function (a, c) {
    a && (c ? a.title = c : a.removeAttribute("title"))
};
b.setCollapsed = function (a, c) {
    var d = a.isRightToLeft(), e = this.getStructuralCssClass() + "-collapse-left", g = this.getStructuralCssClass() + "-collapse-right";
    a.enableClassName(d ? g : e, !!(c & f.ui.ButtonSide.START));
    a.enableClassName(d ? e : g, !!(c & f.ui.ButtonSide.END))
};
b.getCssClass = function () {
    return f.ui.ButtonRenderer.CSS_CLASS
};
f.ui.registry = {};
f.ui.registry.getDefaultRenderer = function (a) {
    for (var c; a;) {
        c = f.getUid(a);
        if (c = f.ui.registry.defaultRenderers_[c])break;
        a = a.superClass_ ? a.superClass_.constructor : null
    }
    return c ? f.isFunction(c.getInstance) ? c.getInstance() : new c : null
};
f.ui.registry.setDefaultRenderer = function (a, c) {
    if (!f.isFunction(a))throw Error("Invalid component class " + a);
    if (!f.isFunction(c))throw Error("Invalid renderer class " + c);
    var d = f.getUid(a);
    f.ui.registry.defaultRenderers_[d] = c
};
f.ui.registry.getDecoratorByClassName = function (a) {
    return a in f.ui.registry.decoratorFunctions_ ? f.ui.registry.decoratorFunctions_[a]() : null
};
f.ui.registry.setDecoratorByClassName = function (a, c) {
    if (!a)throw Error("Invalid class name " + a);
    if (!f.isFunction(c))throw Error("Invalid decorator function " + c);
    f.ui.registry.decoratorFunctions_[a] = c
};
f.ui.registry.getDecorator = function (a) {
    f.asserts.assert(a);
    for (var c = f.dom.classlist.get(a), d = 0, e = c.length; d < e; d++)if (a = f.ui.registry.getDecoratorByClassName(c[d]))return a;
    return null
};
f.ui.registry.reset = function () {
    f.ui.registry.defaultRenderers_ = {};
    f.ui.registry.decoratorFunctions_ = {}
};
f.ui.registry.defaultRenderers_ = {};
f.ui.registry.decoratorFunctions_ = {};
f.ui.decorate = function (a) {
    var c = f.ui.registry.getDecorator(a);
    c && c.decorate(a);
    return c
};
f.ui.Control = function (a, c, d) {
    f.ui.Component.call(this, d);
    this.renderer_ = c || f.ui.registry.getDefaultRenderer(this.constructor);
    this.setContentInternal(f.isDef(a) ? a : null)
};
f.inherits(f.ui.Control, f.ui.Component);
f.tagUnsealableClass(f.ui.Control);
f.ui.Control.registerDecorator = f.ui.registry.setDecoratorByClassName;
f.ui.Control.getDecorator = f.ui.registry.getDecorator;
f.ui.Control.decorate = f.ui.decorate;
b = f.ui.Control.prototype;
b.content_ = null;
b.state_ = 0;
b.supportedStates_ = f.ui.Component.State.DISABLED | f.ui.Component.State.HOVER | f.ui.Component.State.ACTIVE | f.ui.Component.State.FOCUSED;
b.autoStates_ = f.ui.Component.State.ALL;
b.statesWithTransitionEvents_ = 0;
b.visible_ = !0;
b.extraClassNames_ = null;
b.handleMouseEvents_ = !0;
b.allowTextSelection_ = !1;
b.preferredAriaRole_ = null;
b.isHandleMouseEvents = function () {
    return this.handleMouseEvents_
};
b.setHandleMouseEvents = function (a) {
    this.isInDocument() && a != this.handleMouseEvents_ && this.enableMouseEventHandling_(a);
    this.handleMouseEvents_ = a
};
b.getKeyEventTarget = function () {
    return this.renderer_.getKeyEventTarget(this)
};
b.getKeyHandler = function () {
    return this.keyHandler_ || (this.keyHandler_ = new f.events.KeyHandler)
};
b.getRenderer = function () {
    return this.renderer_
};
b.getExtraClassNames = function () {
    return this.extraClassNames_
};
b.addClassName = function (a) {
    a && (this.extraClassNames_ ? f.array.contains(this.extraClassNames_, a) || this.extraClassNames_.push(a) : this.extraClassNames_ = [a], this.renderer_.enableExtraClassName(this, a, !0))
};
b.removeClassName = function (a) {
    a && this.extraClassNames_ && f.array.remove(this.extraClassNames_, a) && (0 == this.extraClassNames_.length && (this.extraClassNames_ = null), this.renderer_.enableExtraClassName(this, a, !1))
};
b.enableClassName = function (a, c) {
    c ? this.addClassName(a) : this.removeClassName(a)
};
b.createDom = function () {
    var a = this.renderer_.createDom(this);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.isVisible() || this.renderer_.setVisible(a, !1)
};
b.getPreferredAriaRole = function () {
    return this.preferredAriaRole_
};
b.getContentElement = function () {
    return this.renderer_.getContentElement(this.getElement())
};
b.canDecorate = function (a) {
    return this.renderer_.canDecorate(a)
};
b.decorateInternal = function (a) {
    a = this.renderer_.decorate(this, a);
    this.setElementInternal(a);
    this.renderer_.setAriaRole(a, this.getPreferredAriaRole());
    this.isAllowTextSelection() || this.renderer_.setAllowTextSelection(a, !1);
    this.visible_ = "none" != a.style.display
};
b.enterDocument = function () {
    f.ui.Control.superClass_.enterDocument.call(this);
    this.renderer_.initializeDom(this);
    if (this.supportedStates_ & ~f.ui.Component.State.DISABLED && (this.isHandleMouseEvents() && this.enableMouseEventHandling_(!0), this.isSupportedState(f.ui.Component.State.FOCUSED))) {
        var a = this.getKeyEventTarget();
        if (a) {
            var c = this.getKeyHandler();
            c.attach(a);
            this.getHandler().listen(c, f.events.KeyHandler.EventType.KEY, this.handleKeyEvent).listen(a, f.events.EventType.FOCUS, this.handleFocus).listen(a,
                f.events.EventType.BLUR, this.handleBlur)
        }
    }
};
b.enableMouseEventHandling_ = function (a) {
    var c = this.getHandler(), d = this.getElement();
    a ? (c.listen(d, f.events.EventType.MOUSEOVER, this.handleMouseOver).listen(d, f.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(d, f.events.EventType.MOUSEUP, this.handleMouseUp).listen(d, f.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != f.nullFunction && c.listen(d, f.events.EventType.CONTEXTMENU, this.handleContextMenu), f.userAgent.IE && c.listen(d, f.events.EventType.DBLCLICK, this.handleDblClick)) :
        (c.unlisten(d, f.events.EventType.MOUSEOVER, this.handleMouseOver).unlisten(d, f.events.EventType.MOUSEDOWN, this.handleMouseDown).unlisten(d, f.events.EventType.MOUSEUP, this.handleMouseUp).unlisten(d, f.events.EventType.MOUSEOUT, this.handleMouseOut), this.handleContextMenu != f.nullFunction && c.unlisten(d, f.events.EventType.CONTEXTMENU, this.handleContextMenu), f.userAgent.IE && c.unlisten(d, f.events.EventType.DBLCLICK, this.handleDblClick))
};
b.exitDocument = function () {
    f.ui.Control.superClass_.exitDocument.call(this);
    this.keyHandler_ && this.keyHandler_.detach();
    this.isVisible() && this.isEnabled() && this.renderer_.setFocusable(this, !1)
};
b.disposeInternal = function () {
    f.ui.Control.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), delete this.keyHandler_);
    delete this.renderer_;
    this.extraClassNames_ = this.content_ = null
};
b.getContent = function () {
    return this.content_
};
b.setContentInternal = function (a) {
    this.content_ = a
};
b.getCaption = function () {
    var a = this.getContent();
    if (!a)return"";
    a = f.isString(a) ? a : f.isArray(a) ? f.array.map(a, f.dom.getRawTextContent).join("") : f.dom.getTextContent(a);
    return f.string.collapseBreakingSpaces(a)
};
b.setRightToLeft = function (a) {
    f.ui.Control.superClass_.setRightToLeft.call(this, a);
    var c = this.getElement();
    c && this.renderer_.setRightToLeft(c, a)
};
b.isAllowTextSelection = function () {
    return this.allowTextSelection_
};
b.setAllowTextSelection = function (a) {
    this.allowTextSelection_ = a;
    var c = this.getElement();
    c && this.renderer_.setAllowTextSelection(c, a)
};
b.isVisible = function () {
    return this.visible_
};
b.setVisible = function (a, c) {
    if (c || this.visible_ != a && this.dispatchEvent(a ? f.ui.Component.EventType.SHOW : f.ui.Component.EventType.HIDE)) {
        var d = this.getElement();
        d && this.renderer_.setVisible(d, a);
        this.isEnabled() && this.renderer_.setFocusable(this, a);
        this.visible_ = a;
        return!0
    }
    return!1
};
b.isEnabled = function () {
    return!this.hasState(f.ui.Component.State.DISABLED)
};
b.isParentDisabled_ = function () {
    var a = this.getParent();
    return!!a && "function" == typeof a.isEnabled && !a.isEnabled()
};
b.setEnabled = function (a) {
    !this.isParentDisabled_() && this.isTransitionAllowed(f.ui.Component.State.DISABLED, !a) && (a || (this.setActive(!1), this.setHighlighted(!1)), this.isVisible() && this.renderer_.setFocusable(this, a), this.setState(f.ui.Component.State.DISABLED, !a, !0))
};
b.setHighlighted = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.HOVER, a) && this.setState(f.ui.Component.State.HOVER, a)
};
b.isActive = function () {
    return this.hasState(f.ui.Component.State.ACTIVE)
};
b.setActive = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.ACTIVE, a) && this.setState(f.ui.Component.State.ACTIVE, a)
};
b.isSelected = function () {
    return this.hasState(f.ui.Component.State.SELECTED)
};
b.setSelected = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.SELECTED, a) && this.setState(f.ui.Component.State.SELECTED, a)
};
b.isChecked = function () {
    return this.hasState(f.ui.Component.State.CHECKED)
};
b.setChecked = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.CHECKED, a) && this.setState(f.ui.Component.State.CHECKED, a)
};
b.isFocused = function () {
    return this.hasState(f.ui.Component.State.FOCUSED)
};
b.setFocused = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.FOCUSED, a) && this.setState(f.ui.Component.State.FOCUSED, a)
};
b.isOpen = function () {
    return this.hasState(f.ui.Component.State.OPENED)
};
b.setOpen = function (a) {
    this.isTransitionAllowed(f.ui.Component.State.OPENED, a) && this.setState(f.ui.Component.State.OPENED, a)
};
b.getState = function () {
    return this.state_
};
b.hasState = function (a) {
    return!!(this.state_ & a)
};
b.setState = function (a, c, d) {
    d || a != f.ui.Component.State.DISABLED ? this.isSupportedState(a) && c != this.hasState(a) && (this.renderer_.setState(this, a, c), this.state_ = c ? this.state_ | a : this.state_ & ~a) : this.setEnabled(!c)
};
b.setStateInternal = function (a) {
    this.state_ = a
};
b.isSupportedState = function (a) {
    return!!(this.supportedStates_ & a)
};
b.setSupportedState = function (a, c) {
    if (this.isInDocument() && this.hasState(a) && !c)throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    !c && this.hasState(a) && this.setState(a, !1);
    this.supportedStates_ = c ? this.supportedStates_ | a : this.supportedStates_ & ~a
};
b.isAutoState = function (a) {
    return!!(this.autoStates_ & a) && this.isSupportedState(a)
};
b.setAutoStates = function (a, c) {
    this.autoStates_ = c ? this.autoStates_ | a : this.autoStates_ & ~a
};
b.setDispatchTransitionEvents = function (a, c) {
    this.statesWithTransitionEvents_ = c ? this.statesWithTransitionEvents_ | a : this.statesWithTransitionEvents_ & ~a
};
b.isTransitionAllowed = function (a, c) {
    return this.isSupportedState(a) && this.hasState(a) != c && (!(this.statesWithTransitionEvents_ & a) || this.dispatchEvent(f.ui.Component.getStateTransitionEvent(a, c))) && !this.isDisposed()
};
b.handleMouseOver = function (a) {
    !f.ui.Control.isMouseEventWithinElement_(a, this.getElement()) && this.dispatchEvent(f.ui.Component.EventType.ENTER) && this.isEnabled() && this.isAutoState(f.ui.Component.State.HOVER) && this.setHighlighted(!0)
};
b.handleMouseOut = function (a) {
    !f.ui.Control.isMouseEventWithinElement_(a, this.getElement()) && this.dispatchEvent(f.ui.Component.EventType.LEAVE) && (this.isAutoState(f.ui.Component.State.ACTIVE) && this.setActive(!1), this.isAutoState(f.ui.Component.State.HOVER) && this.setHighlighted(!1))
};
b.handleContextMenu = f.nullFunction;
f.ui.Control.isMouseEventWithinElement_ = function (a, c) {
    return!!a.relatedTarget && f.dom.contains(c, a.relatedTarget)
};
b = f.ui.Control.prototype;
b.handleMouseDown = function (a) {
    this.isEnabled() && (this.isAutoState(f.ui.Component.State.HOVER) && this.setHighlighted(!0), a.isMouseActionButton() && (this.isAutoState(f.ui.Component.State.ACTIVE) && this.setActive(!0), this.renderer_.isFocusable(this) && this.getKeyEventTarget().focus()));
    !this.isAllowTextSelection() && a.isMouseActionButton() && a.preventDefault()
};
b.handleMouseUp = function (a) {
    this.isEnabled() && (this.isAutoState(f.ui.Component.State.HOVER) && this.setHighlighted(!0), this.isActive() && this.performActionInternal(a) && this.isAutoState(f.ui.Component.State.ACTIVE) && this.setActive(!1))
};
b.handleDblClick = function (a) {
    this.isEnabled() && this.performActionInternal(a)
};
b.performActionInternal = function (a) {
    this.isAutoState(f.ui.Component.State.CHECKED) && this.setChecked(!this.isChecked());
    this.isAutoState(f.ui.Component.State.SELECTED) && this.setSelected(!0);
    this.isAutoState(f.ui.Component.State.OPENED) && this.setOpen(!this.isOpen());
    var c = new f.events.Event(f.ui.Component.EventType.ACTION, this);
    a && (c.altKey = a.altKey, c.ctrlKey = a.ctrlKey, c.metaKey = a.metaKey, c.shiftKey = a.shiftKey, c.platformModifierKey = a.platformModifierKey);
    return this.dispatchEvent(c)
};
b.handleFocus = function () {
    this.isAutoState(f.ui.Component.State.FOCUSED) && this.setFocused(!0)
};
b.handleBlur = function () {
    this.isAutoState(f.ui.Component.State.ACTIVE) && this.setActive(!1);
    this.isAutoState(f.ui.Component.State.FOCUSED) && this.setFocused(!1)
};
b.handleKeyEvent = function (a) {
    return this.isVisible() && this.isEnabled() && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
b.handleKeyEventInternal = function (a) {
    return a.keyCode == f.events.KeyCodes.ENTER && this.performActionInternal(a)
};
f.ui.registry.setDefaultRenderer(f.ui.Control, f.ui.ControlRenderer);
f.ui.registry.setDecoratorByClassName(f.ui.ControlRenderer.CSS_CLASS, function () {
    return new f.ui.Control(null)
});
f.ui.NativeButtonRenderer = function () {
};
f.inherits(f.ui.NativeButtonRenderer, f.ui.ButtonRenderer);
f.addSingletonGetter(f.ui.NativeButtonRenderer);
b = f.ui.NativeButtonRenderer.prototype;
b.getAriaRole = function () {
};
b.createDom = function (a) {
    this.setUpNativeButton_(a);
    return a.getDomHelper().createDom("button", {"class": this.getClassNames(a).join(" "), disabled: !a.isEnabled(), title: a.getTooltip() || "", value: a.getValue() || ""}, a.getCaption() || "")
};
b.canDecorate = function (a) {
    return"BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
b.decorate = function (a, c) {
    this.setUpNativeButton_(a);
    if (c.disabled) {
        var d = f.asserts.assertString(this.getClassForState(f.ui.Component.State.DISABLED));
        f.dom.classlist.add(c, d)
    }
    return f.ui.NativeButtonRenderer.superClass_.decorate.call(this, a, c)
};
b.initializeDom = function (a) {
    a.getHandler().listen(a.getElement(), f.events.EventType.CLICK, a.performActionInternal)
};
b.setAllowTextSelection = f.nullFunction;
b.setRightToLeft = f.nullFunction;
b.isFocusable = function (a) {
    return a.isEnabled()
};
b.setFocusable = f.nullFunction;
b.setState = function (a, c, d) {
    f.ui.NativeButtonRenderer.superClass_.setState.call(this, a, c, d);
    (a = a.getElement()) && c == f.ui.Component.State.DISABLED && (a.disabled = d)
};
b.getValue = function (a) {
    return a.value
};
b.setValue = function (a, c) {
    a && (a.value = c)
};
b.updateAriaState = f.nullFunction;
b.setUpNativeButton_ = function (a) {
    a.setHandleMouseEvents(!1);
    a.setAutoStates(f.ui.Component.State.ALL, !1);
    a.setSupportedState(f.ui.Component.State.FOCUSED, !1)
};
f.ui.Button = function (a, c, d) {
    f.ui.Control.call(this, a, c || f.ui.NativeButtonRenderer.getInstance(), d)
};
f.inherits(f.ui.Button, f.ui.Control);
f.tagUnsealableClass(f.ui.Button);
f.ui.Button.Side = f.ui.ButtonSide;
b = f.ui.Button.prototype;
b.getValue = function () {
    return this.value_
};
b.setValue = function (a) {
    this.value_ = a;
    var c = this.getRenderer();
    c.setValue(this.getElement(), a)
};
b.setValueInternal = function (a) {
    this.value_ = a
};
b.getTooltip = function () {
    return this.tooltip_
};
b.setTooltip = function (a) {
    this.tooltip_ = a;
    this.getRenderer().setTooltip(this.getElement(), a)
};
b.setTooltipInternal = function (a) {
    this.tooltip_ = a
};
b.setCollapsed = function (a) {
    this.getRenderer().setCollapsed(this, a)
};
b.disposeInternal = function () {
    f.ui.Button.superClass_.disposeInternal.call(this);
    delete this.value_;
    delete this.tooltip_
};
b.enterDocument = function () {
    f.ui.Button.superClass_.enterDocument.call(this);
    if (this.isSupportedState(f.ui.Component.State.FOCUSED)) {
        var a = this.getKeyEventTarget();
        a && this.getHandler().listen(a, f.events.EventType.KEYUP, this.handleKeyEventInternal)
    }
};
b.handleKeyEventInternal = function (a) {
    return a.keyCode == f.events.KeyCodes.ENTER && a.type == f.events.KeyHandler.EventType.KEY || a.keyCode == f.events.KeyCodes.SPACE && a.type == f.events.EventType.KEYUP ? this.performActionInternal(a) : a.keyCode == f.events.KeyCodes.SPACE
};
f.ui.registry.setDecoratorByClassName(f.ui.ButtonRenderer.CSS_CLASS, function () {
    return new f.ui.Button(null)
});
f.Timer = function (a, c) {
    f.events.EventTarget.call(this);
    this.interval_ = a || 1;
    this.timerObject_ = c || f.Timer.defaultTimerObject;
    this.boundTick_ = f.bind(this.tick_, this);
    this.last_ = f.now()
};
f.inherits(f.Timer, f.events.EventTarget);
f.Timer.MAX_TIMEOUT_ = 2147483647;
f.Timer.prototype.enabled = !1;
f.Timer.defaultTimerObject = f.global;
f.Timer.intervalScale = .8;
b = f.Timer.prototype;
b.timer_ = null;
b.setInterval = function (a) {
    this.interval_ = a;
    this.timer_ && this.enabled ? (this.stop(), this.start()) : this.timer_ && this.stop()
};
b.tick_ = function () {
    if (this.enabled) {
        var a = f.now() - this.last_;
        0 < a && a < this.interval_ * f.Timer.intervalScale ? this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_ - a) : (this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null), this.dispatchTick(), this.enabled && (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = f.now()))
    }
};
b.dispatchTick = function () {
    this.dispatchEvent(f.Timer.TICK)
};
b.start = function () {
    this.enabled = !0;
    this.timer_ || (this.timer_ = this.timerObject_.setTimeout(this.boundTick_, this.interval_), this.last_ = f.now())
};
b.stop = function () {
    this.enabled = !1;
    this.timer_ && (this.timerObject_.clearTimeout(this.timer_), this.timer_ = null)
};
b.disposeInternal = function () {
    f.Timer.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.timerObject_
};
f.Timer.TICK = "tick";
f.Timer.callOnce = function (a, c, d) {
    if (f.isFunction(a))d && (a = f.bind(a, d)); else if (a && "function" == typeof a.handleEvent)a = f.bind(a.handleEvent, a); else throw Error("Invalid listener argument");
    return c > f.Timer.MAX_TIMEOUT_ ? -1 : f.Timer.defaultTimerObject.setTimeout(a, c || 0)
};
f.Timer.clear = function (a) {
    f.Timer.defaultTimerObject.clearTimeout(a)
};
f.async = {};
f.async.Delay = function (a, c, d) {
    f.Disposable.call(this);
    this.listener_ = a;
    this.interval_ = c || 0;
    this.handler_ = d;
    this.callback_ = f.bind(this.doAction_, this)
};
f.inherits(f.async.Delay, f.Disposable);
f.Delay = f.async.Delay;
b = f.async.Delay.prototype;
b.id_ = 0;
b.disposeInternal = function () {
    f.async.Delay.superClass_.disposeInternal.call(this);
    this.stop();
    delete this.listener_;
    delete this.handler_
};
b.start = function (a) {
    this.stop();
    this.id_ = f.Timer.callOnce(this.callback_, f.isDef(a) ? a : this.interval_)
};
b.stop = function () {
    this.isActive() && f.Timer.clear(this.id_);
    this.id_ = 0
};
b.isActive = function () {
    return 0 != this.id_
};
b.doAction_ = function () {
    this.id_ = 0;
    this.listener_ && this.listener_.call(this.handler_)
};
f.dom.safe = {};
f.dom.safe.setInnerHtml = function (a, c) {
    a.innerHTML = f.html.SafeHtml.unwrap(c)
};
f.dom.safe.setOuterHtml = function (a, c) {
    a.outerHTML = f.html.SafeHtml.unwrap(c)
};
f.dom.safe.documentWrite = function (a, c) {
    a.write(f.html.SafeHtml.unwrap(c))
};
f.dom.safe.setAnchorHref = function (a, c) {
    var d;
    d = c instanceof f.html.SafeUrl ? c : f.html.SafeUrl.sanitize(c);
    a.href = f.html.SafeUrl.unwrap(d)
};
f.dom.safe.setLocationHref = function (a, c) {
    var d;
    d = c instanceof f.html.SafeUrl ? c : f.html.SafeUrl.sanitize(c);
    a.href = f.html.SafeUrl.unwrap(d)
};
f.html.legacyconversions = {};
f.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS = !0;
f.html.legacyconversions.safeHtmlFromString = function (a) {
    f.html.legacyconversions.throwIfConversionDisallowed_();
    return f.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(a, null)
};
f.html.legacyconversions.trustedResourceUrlFromString = function (a) {
    f.html.legacyconversions.throwIfConversionDisallowed_();
    return f.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a)
};
f.html.legacyconversions.safeUrlFromString = function (a) {
    f.html.legacyconversions.throwIfConversionDisallowed_();
    return f.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a)
};
f.html.legacyconversions.reportCallback_ = f.nullFunction;
f.html.legacyconversions.setReportCallback = function (a) {
    f.html.legacyconversions.reportCallback_ = a
};
f.html.legacyconversions.throwIfConversionDisallowed_ = function () {
    if (!f.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS)throw Error("Error: Legacy conversion from string to goog.html types is disabled");
    f.html.legacyconversions.reportCallback_()
};
f.html.utils = {};
f.html.utils.stripHtmlTags = function (a) {
    return f.string.unescapeEntities(f.string.trim(a.replace(f.html.utils.HTML_TAG_REGEX_, function (a, d) {
        return f.html.utils.INLINE_HTML_TAG_REGEX_.test(d) ? "" : " "
    }).replace(/[\t\n ]+/g, " ")))
};
f.html.utils.INLINE_HTML_TAG_REGEX_ = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i;
f.html.utils.HTML_TAG_REGEX_ = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
f.style.bidi = {};
f.style.bidi.getScrollLeft = function (a) {
    var c = f.style.isRightToLeft(a);
    return c && f.userAgent.GECKO ? -a.scrollLeft : !c || f.userAgent.IE && f.userAgent.isVersionOrHigher("8") || (c = f.style.getComputedOverflowX(a), "visible" == c) ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft
};
f.style.bidi.getOffsetStart = function (a) {
    var c = a.offsetLeft, d = a.offsetParent;
    d || "fixed" != f.style.getComputedPosition(a) || (d = f.dom.getOwnerDocument(a).documentElement);
    if (!d)return c;
    if (f.userAgent.GECKO)var e = f.style.getBorderBox(d), c = c + e.left; else f.userAgent.isDocumentModeOrHigher(8) && !f.userAgent.isDocumentModeOrHigher(9) && (e = f.style.getBorderBox(d), c -= e.left);
    return f.style.isRightToLeft(d) ? (a = c + a.offsetWidth, d.clientWidth - a) : c
};
f.style.bidi.setScrollOffset = function (a, c) {
    c = Math.max(c, 0);
    f.style.isRightToLeft(a) ? f.userAgent.GECKO ? a.scrollLeft = -c : f.userAgent.IE && f.userAgent.isVersionOrHigher("8") ? a.scrollLeft = c : a.scrollLeft = a.scrollWidth - c - a.clientWidth : a.scrollLeft = c
};
f.style.bidi.setPosition = function (a, c, d, e) {
    f.isNull(d) || (a.style.top = d + "px");
    e ? (a.style.right = c + "px", a.style.left = "") : (a.style.left = c + "px", a.style.right = "")
};
f.positioning = {};
f.positioning.Corner = {TOP_LEFT: 0, TOP_RIGHT: 2, BOTTOM_LEFT: 1, BOTTOM_RIGHT: 3, TOP_START: 4, TOP_END: 6, BOTTOM_START: 5, BOTTOM_END: 7};
f.positioning.CornerBit = {BOTTOM: 1, RIGHT: 2, FLIP_RTL: 4};
f.positioning.Overflow = {IGNORE: 0, ADJUST_X: 1, FAIL_X: 2, ADJUST_Y: 4, FAIL_Y: 8, RESIZE_WIDTH: 16, RESIZE_HEIGHT: 32, ADJUST_X_EXCEPT_OFFSCREEN: 65, ADJUST_Y_EXCEPT_OFFSCREEN: 132};
f.positioning.OverflowStatus = {NONE: 0, ADJUSTED_X: 1, ADJUSTED_Y: 2, WIDTH_ADJUSTED: 4, HEIGHT_ADJUSTED: 8, FAILED_LEFT: 16, FAILED_RIGHT: 32, FAILED_TOP: 64, FAILED_BOTTOM: 128, FAILED_OUTSIDE_VIEWPORT: 256};
f.positioning.OverflowStatus.FAILED = f.positioning.OverflowStatus.FAILED_LEFT | f.positioning.OverflowStatus.FAILED_RIGHT | f.positioning.OverflowStatus.FAILED_TOP | f.positioning.OverflowStatus.FAILED_BOTTOM | f.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT;
f.positioning.OverflowStatus.FAILED_HORIZONTAL = f.positioning.OverflowStatus.FAILED_LEFT | f.positioning.OverflowStatus.FAILED_RIGHT;
f.positioning.OverflowStatus.FAILED_VERTICAL = f.positioning.OverflowStatus.FAILED_TOP | f.positioning.OverflowStatus.FAILED_BOTTOM;
f.positioning.positionAtAnchor = function (a, c, d, e, g, h, l, p, q) {
    f.asserts.assert(d);
    var s = f.positioning.getOffsetParentPageOffset(d), t = f.positioning.getVisiblePart_(a);
    f.style.translateRectForAnotherFrame(t, f.dom.getDomHelper(a), f.dom.getDomHelper(d));
    a = f.positioning.getEffectiveCorner(a, c);
    t = new f.math.Coordinate(a & f.positioning.CornerBit.RIGHT ? t.left + t.width : t.left, a & f.positioning.CornerBit.BOTTOM ? t.top + t.height : t.top);
    t = f.math.Coordinate.difference(t, s);
    g && (t.x += (a & f.positioning.CornerBit.RIGHT ? -1 :
        1) * g.x, t.y += (a & f.positioning.CornerBit.BOTTOM ? -1 : 1) * g.y);
    var u;
    if (l)if (q)u = q; else if (u = f.style.getVisibleRectForElement(d))u.top -= s.y, u.right -= s.x, u.bottom -= s.y, u.left -= s.x;
    return f.positioning.positionAtCoordinate(t, d, e, h, u, l, p)
};
f.positioning.getOffsetParentPageOffset = function (a) {
    var c;
    if (a = a.offsetParent) {
        var d = a.tagName == f.dom.TagName.HTML || a.tagName == f.dom.TagName.BODY;
        d && "static" == f.style.getComputedPosition(a) || (c = f.style.getPageOffset(a), d || (c = f.math.Coordinate.difference(c, new f.math.Coordinate(f.style.bidi.getScrollLeft(a), a.scrollTop))))
    }
    return c || new f.math.Coordinate
};
f.positioning.getVisiblePart_ = function (a) {
    var c = f.style.getBounds(a);
    (a = f.style.getVisibleRectForElement(a)) && c.intersection(f.math.Rect.createFromBox(a));
    return c
};
f.positioning.positionAtCoordinate = function (a, c, d, e, g, h, l) {
    a = a.clone();
    var p = f.positioning.OverflowStatus.NONE;
    d = f.positioning.getEffectiveCorner(c, d);
    var q = f.style.getSize(c);
    l = l ? l.clone() : q.clone();
    if (e || d != f.positioning.Corner.TOP_LEFT)d & f.positioning.CornerBit.RIGHT ? a.x -= l.width + (e ? e.right : 0) : e && (a.x += e.left), d & f.positioning.CornerBit.BOTTOM ? a.y -= l.height + (e ? e.bottom : 0) : e && (a.y += e.top);
    if (h && (p = g ? f.positioning.adjustForViewport_(a, l, g, h) : f.positioning.OverflowStatus.FAILED_OUTSIDE_VIEWPORT, p &
        f.positioning.OverflowStatus.FAILED))return p;
    f.style.setPosition(c, a);
    f.math.Size.equals(q, l) || f.style.setBorderBoxSize(c, l);
    return p
};
f.positioning.adjustForViewport_ = function (a, c, d, e) {
    var g = f.positioning.OverflowStatus.NONE, h = f.positioning.Overflow.ADJUST_X_EXCEPT_OFFSCREEN, l = f.positioning.Overflow.ADJUST_Y_EXCEPT_OFFSCREEN;
    (e & h) == h && (a.x < d.left || a.x >= d.right) && (e &= ~f.positioning.Overflow.ADJUST_X);
    (e & l) == l && (a.y < d.top || a.y >= d.bottom) && (e &= ~f.positioning.Overflow.ADJUST_Y);
    a.x < d.left && e & f.positioning.Overflow.ADJUST_X && (a.x = d.left, g |= f.positioning.OverflowStatus.ADJUSTED_X);
    a.x < d.left && a.x + c.width > d.right && e & f.positioning.Overflow.RESIZE_WIDTH &&
    (c.width = Math.max(c.width - (a.x + c.width - d.right), 0), g |= f.positioning.OverflowStatus.WIDTH_ADJUSTED);
    a.x + c.width > d.right && e & f.positioning.Overflow.ADJUST_X && (a.x = Math.max(d.right - c.width, d.left), g |= f.positioning.OverflowStatus.ADJUSTED_X);
    e & f.positioning.Overflow.FAIL_X && (g = g | (a.x < d.left ? f.positioning.OverflowStatus.FAILED_LEFT : 0) | (a.x + c.width > d.right ? f.positioning.OverflowStatus.FAILED_RIGHT : 0));
    a.y < d.top && e & f.positioning.Overflow.ADJUST_Y && (a.y = d.top, g |= f.positioning.OverflowStatus.ADJUSTED_Y);
    a.y <=
    d.top && a.y + c.height < d.bottom && e & f.positioning.Overflow.RESIZE_HEIGHT && (c.height = Math.max(c.height - (d.top - a.y), 0), a.y = d.top, g |= f.positioning.OverflowStatus.HEIGHT_ADJUSTED);
    a.y >= d.top && a.y + c.height > d.bottom && e & f.positioning.Overflow.RESIZE_HEIGHT && (c.height = Math.max(c.height - (a.y + c.height - d.bottom), 0), g |= f.positioning.OverflowStatus.HEIGHT_ADJUSTED);
    a.y + c.height > d.bottom && e & f.positioning.Overflow.ADJUST_Y && (a.y = Math.max(d.bottom - c.height, d.top), g |= f.positioning.OverflowStatus.ADJUSTED_Y);
    e & f.positioning.Overflow.FAIL_Y &&
    (g = g | (a.y < d.top ? f.positioning.OverflowStatus.FAILED_TOP : 0) | (a.y + c.height > d.bottom ? f.positioning.OverflowStatus.FAILED_BOTTOM : 0));
    return g
};
f.positioning.getEffectiveCorner = function (a, c) {
    return(c & f.positioning.CornerBit.FLIP_RTL && f.style.isRightToLeft(a) ? c ^ f.positioning.CornerBit.RIGHT : c) & ~f.positioning.CornerBit.FLIP_RTL
};
f.positioning.flipCornerHorizontal = function (a) {
    return a ^ f.positioning.CornerBit.RIGHT
};
f.positioning.flipCornerVertical = function (a) {
    return a ^ f.positioning.CornerBit.BOTTOM
};
f.positioning.flipCorner = function (a) {
    return a ^ f.positioning.CornerBit.BOTTOM ^ f.positioning.CornerBit.RIGHT
};
var w = {ArrowAlignment: {LEFT_OR_TOP: 0, RIGHT_OR_BOTTOM: 1, CENTER: 2}};
f.positioning.AbstractPosition = function () {
};
f.positioning.AbstractPosition.prototype.reposition = function () {
};
w.PopupPosition = {LEFT: 0, BOTTOM: 1, TOP: 2, RIGHT: 3};
w.PopupPosition.FLIP_POSITION_ = 3;
w.PopupPosition.flip = function (a) {
    return a ^ w.PopupPosition.FLIP_POSITION_
};
w.ArrowPosition = function (a, c) {
    this.className_ = a;
    this.disableSubpixels_ = !!c;
    this.arrowClassMap_ = f.object.create(w.PopupPosition.LEFT, this.className_ + "-arrowright", w.PopupPosition.BOTTOM, this.className_ + "-arrowup", w.PopupPosition.TOP, this.className_ + "-arrowdown", w.PopupPosition.RIGHT, this.className_ + "-arrowleft")
};
f.inherits(w.ArrowPosition, f.positioning.AbstractPosition);
w.ArrowPosition.FLIP_ALIGNMENT_ = 1;
w.ArrowPosition.MIN_ARROW_OFFSET_ = 15;
b = w.ArrowPosition.prototype;
b.isAutoReposition_ = !1;
b.arrowAlignment_ = w.ArrowAlignment.CENTER;
b.arrowOffset_ = 20;
b.boxPosition_ = w.PopupPosition.RIGHT;
b.viewport_ = null;
b.offsetFromAnchor_ = -5;
b.setAnchorElement = function (a) {
    this.anchorElement_ = a
};
b.setPosition = function (a, c, d, e) {
    f.isDefAndNotNull(a) && (this.boxPosition_ = a);
    f.isDefAndNotNull(c) && (this.arrowAlignment_ = c);
    f.isNumber(d) && (this.arrowOffset_ = Math.max(d, w.ArrowPosition.MIN_ARROW_OFFSET_));
    f.isNumber(e) && (this.offsetFromAnchor_ = e)
};
b.setElements = function (a, c) {
    this.boxElement_ = a;
    this.arrowElement_ = c
};
b.reposition = function (a, c, d) {
    f.asserts.assert(this.arrowElement_, "Must call setElements first.");
    a = this.boxPosition_;
    c = this.getEffectiveAlignment_(this.boxPosition_, this.arrowAlignment_);
    var e = this.getEffectiveArrowOffset_();
    this.reposition_(a, c, e, d)
};
b.getEffectiveArrowOffset_ = function () {
    return this.arrowAlignment_ == w.ArrowAlignment.CENTER ? w.ArrowPosition.isLeftOrRight_(this.boxPosition_) ? this.boxElement_.offsetHeight / 2 : this.boxElement_.offsetWidth / 2 : this.arrowOffset_
};
b.getEffectiveAlignment_ = function (a, c) {
    c == w.ArrowAlignment.CENTER && (c = w.ArrowAlignment.LEFT_OR_TOP);
    return!w.ArrowPosition.isLeftOrRight_(a) && f.i18n.bidi.IS_RTL ? c ^ w.ArrowPosition.FLIP_ALIGNMENT_ : c
};
b.setAutoReposition = function (a) {
    this.isAutoReposition_ = a
};
b.reposition_ = function (a, c, d, e, g) {
    if (this.anchorElement_) {
        var h = w.ArrowPosition.getCorner_(a, c), l = w.ArrowPosition.getCenteringOffset_(this.anchorElement_, a, d, h, this.boxElement_, this.viewport_), l = w.ArrowPosition.isLeftOrRight_(a) ? new f.math.Coordinate(this.offsetFromAnchor_, l) : new f.math.Coordinate(l, this.offsetFromAnchor_), p = w.ArrowPosition.isLeftOrRight_(a) ? f.positioning.Overflow.ADJUST_Y | f.positioning.Overflow.FAIL_X : f.positioning.Overflow.ADJUST_X | f.positioning.Overflow.FAIL_Y, q = w.PopupPosition.flip(a);
        w.ArrowPosition.isLeftOrRight_(a) && (f.i18n.bidi.IS_RTL && "ltr" == this.anchorElement_.dir || !f.i18n.bidi.IS_RTL && "rtl" == this.anchorElement_.dir) && (q = a);
        h = f.positioning.positionAtAnchor(this.anchorElement_, w.ArrowPosition.getCorner_(q, c), this.boxElement_, h, l, e, this.isAutoReposition_ ? p : f.positioning.Overflow.IGNORE, void 0, this.viewport_);
        if (!g && h & f.positioning.OverflowStatus.FAILED) {
            this.reposition_(w.PopupPosition.flip(a), c, d, e, !0);
            return
        }
        !this.disableSubpixels_ || h & f.positioning.OverflowStatus.FAILED ||
        (e = parseFloat(this.boxElement_.style.left), g = parseFloat(this.boxElement_.style.top), f.asserts.assert(!isNaN(e) && !isNaN(g), "Could not parse position."), f.math.isInt(e) && f.math.isInt(g) || f.style.setPosition(this.boxElement_, Math.round(e), Math.round(g)))
    }
    this.positionArrow_(a, c, d)
};
b.positionArrow_ = function (a, c, d) {
    var e = this.arrowElement_;
    f.object.forEach(this.arrowClassMap_, function (a) {
        f.dom.classlist.enable(e, a, !1)
    }, this);
    f.dom.classlist.add(e, this.arrowClassMap_[a]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    this.anchorElement_ ? (d = f.style.getRelativePosition(this.anchorElement_, this.boxElement_), c = w.ArrowPosition.getAnchorPointOffsetFromAnchorTopLeft_(this.anchorElement_, a), w.ArrowPosition.isLeftOrRight_(a) ? (a = w.ArrowPosition.clamp_(d.y + c.y, w.ArrowPosition.MIN_ARROW_OFFSET_,
            this.boxElement_.offsetHeight - w.ArrowPosition.MIN_ARROW_OFFSET_), e.style.top = a + "px") : (a = w.ArrowPosition.clamp_(d.x + c.x, w.ArrowPosition.MIN_ARROW_OFFSET_, this.boxElement_.offsetWidth - w.ArrowPosition.MIN_ARROW_OFFSET_), e.style.left = a + "px")) : (a = c == w.ArrowAlignment.LEFT_OR_TOP ? w.ArrowPosition.isLeftOrRight_(a) ? "top" : "left" : w.ArrowPosition.isLeftOrRight_(a) ? "bottom" : "right", e.style[a] = d + "px")
};
w.ArrowPosition.clamp_ = function (a, c, d) {
    return c > d ? c : f.math.clamp(a, c, d)
};
w.ArrowPosition.getCorner_ = function (a, c) {
    switch (a) {
        case w.PopupPosition.TOP:
            return c == w.ArrowAlignment.LEFT_OR_TOP ? f.positioning.Corner.BOTTOM_LEFT : f.positioning.Corner.BOTTOM_RIGHT;
        case w.PopupPosition.BOTTOM:
            return c == w.ArrowAlignment.LEFT_OR_TOP ? f.positioning.Corner.TOP_LEFT : f.positioning.Corner.TOP_RIGHT;
        case w.PopupPosition.LEFT:
            return c == w.ArrowAlignment.LEFT_OR_TOP ? f.positioning.Corner.TOP_END : f.positioning.Corner.BOTTOM_END;
        default:
            return c == w.ArrowAlignment.LEFT_OR_TOP ? f.positioning.Corner.TOP_START :
                f.positioning.Corner.BOTTOM_START
    }
};
w.ArrowPosition.getCenteringOffset_ = function (a, c, d, e, g, h) {
    var l = f.style.getSize(a), l = w.ArrowPosition.isLeftOrRight_(c) ? l.height / 2 : l.width / 2;
    d = l - d;
    return w.ArrowPosition.normalizeCenteringOffset_(d, a, c, e, g, h)
};
w.ArrowPosition.normalizeCenteringOffset_ = function (a, c, d, e, g, h) {
    e = f.positioning.getEffectiveCorner(c, e);
    if (h)h = h.clone(), g && (g = f.positioning.getOffsetParentPageOffset(g), h.left += g.x, h.right += g.x, h.top += g.y, h.bottom += g.y); else if (h = f.style.getVisibleRectForElement(c), !h)return a;
    c = f.style.getBounds(c).toBox();
    w.ArrowPosition.isLeftOrRight_(d) ? c.top < h.top && !(e & f.positioning.CornerBit.BOTTOM) ? a -= h.top - c.top : c.bottom > h.bottom && e & f.positioning.CornerBit.BOTTOM && (a -= c.bottom - h.bottom) : c.left < h.left && !(e &
        f.positioning.CornerBit.RIGHT) ? a -= h.left - c.left : c.right > h.right && e & f.positioning.CornerBit.RIGHT && (a -= c.right - h.right);
    return a
};
w.ArrowPosition.getAnchorPointOffsetFromAnchorTopLeft_ = function (a, c) {
    var d = 0, e = 0, g = f.style.getSize(a);
    switch (c) {
        case w.PopupPosition.TOP:
            d = g.width / 2;
            break;
        case w.PopupPosition.BOTTOM:
            d = g.width / 2;
            e = g.height;
            break;
        case w.PopupPosition.LEFT:
            e = g.height / 2;
            break;
        case w.PopupPosition.RIGHT:
            d = g.width, e = g.height / 2
    }
    return new f.math.Coordinate(d, e)
};
w.ArrowPosition.isLeftOrRight_ = function (a) {
    return a == w.PopupPosition.LEFT || a == w.PopupPosition.RIGHT
};
w.AbstractTooltipRenderer = function (a) {
    f.Disposable.call(this);
    this.dom = a || f.dom.getDomHelper()
};
f.inherits(w.AbstractTooltipRenderer, f.Disposable);
w.AbstractTooltipRenderer.prototype.initAriaState = function () {
    f.a11y.aria.setRole(this.getElement(), this.getAriaRole());
    f.a11y.aria.setState(this.getElement(), f.a11y.aria.State.LIVE, f.a11y.aria.LivePriority.POLITE)
};
w.AbstractTooltipRenderer.prototype.getAriaRole = function () {
    return f.a11y.aria.Role.TOOLTIP
};
w.TooltipRenderer = function (a) {
    w.AbstractTooltipRenderer.call(this, a);
    this.contentEl_ = this.dom.createDom("div", this.getClassName() + "-contentId");
    this.arrowEl_ = this.dom.createDom("div", this.getClassName() + "-arrow", this.dom.createDom("div", this.getClassName() + "-arrowimplbefore"), this.dom.createDom("div", this.getClassName() + "-arrowimplafter"));
    this.tooltipEl_ = this.dom.createDom("div", {"class": this.getClassName(), role: "tooltip"}, this.contentEl_, this.arrowEl_);
    this.initAriaState()
};
f.inherits(w.TooltipRenderer, w.AbstractTooltipRenderer);
b = w.TooltipRenderer.prototype;
b.getClassName = function () {
    return"jfk-tooltip"
};
b.getElement = function () {
    return this.tooltipEl_
};
b.getContentElement = function () {
    return this.contentEl_
};
b.getArrowElement = function () {
    return this.arrowEl_
};
b.disposeInternal = function () {
    this.tooltipEl_ && f.dom.removeNode(this.tooltipEl_)
};
w.SilentTooltipRenderer = function (a) {
    w.TooltipRenderer.call(this, a)
};
f.inherits(w.SilentTooltipRenderer, w.TooltipRenderer);
w.SilentTooltipRenderer.prototype.initAriaState = function () {
    f.a11y.aria.setRole(this.getElement(), this.getAriaRole())
};
w.tooltipManager = {};
w.tooltipManager.install = function (a) {
    a = a || f.dom.getDomHelper();
    var c = f.getUid(a.getDocument());
    w.tooltipManager.instances_[c] || (w.tooltipManager.instances_[c] = new w.TooltipManager_(a))
};
w.tooltipManager.uninstall = function (a) {
    a = a || f.dom.getDomHelper();
    a = f.getUid(a.getDocument());
    w.tooltipManager.instances_[a] && (w.tooltipManager.instances_[a].dispose(), delete w.tooltipManager.instances_[a])
};
w.tooltipManager.setTooltipText = function (a, c, d) {
    w.tooltipManager.setTooltipHelper_(a, c, !1, d)
};
w.tooltipManager.setTooltipHtml = function (a, c, d) {
    w.tooltipManager.setTooltipHelper_(a, c, !0, d)
};
w.tooltipManager.setTooltipSafeHtml = function (a, c, d) {
    w.tooltipManager.setTooltipHelper_(a, c, !0, d)
};
w.tooltipManager.setTooltipFromTitle = function (a) {
    var c = a.getAttribute("title");
    c && w.tooltipManager.setTooltipHelper_(a, c, !1)
};
w.tooltipManager.setTooltipHelper_ = function (a, c, d, e) {
    e || (e = c instanceof f.html.SafeHtml ? f.html.SafeHtml.unwrap(c) : c, d && (e = f.html.utils.stripHtmlTags(e)));
    a.removeAttribute("title");
    a.removeAttribute(w.tooltipManager.TOOLTIP_CONTAINED_ATTR_);
    a.removeAttribute(w.tooltipManager.TOOLTIP_ATTR_);
    a.removeAttribute(w.tooltipManager.TOOLTIP_HTML_ATTR_);
    c ? (c instanceof f.html.SafeHtml ? a.jfkTooltipHtmlInternal = c : (a.setAttribute(d ? w.tooltipManager.TOOLTIP_HTML_ATTR_ : w.tooltipManager.TOOLTIP_ATTR_, c), a.jfkTooltipHtmlInternal =
        null), a.setAttribute("aria-label", e)) : (a.jfkTooltipHtmlInternal = null, a.removeAttribute("aria-label"));
    w.tooltipManager.install(f.dom.getDomHelper(a))
};
w.tooltipManager.setTooltipDelay = function (a, c) {
    a.setAttribute(w.tooltipManager.TOOLTIP_DELAY_ATTR, c)
};
w.tooltipManager.setTooltipPosition = function (a, c, d) {
    a.setAttribute(w.tooltipManager.TOOLTIP_ALIGNMENT_ATTR, w.TooltipManager_.computeAlignmentAttr_(c, d))
};
w.tooltipManager.setTooltipOffset = function (a, c) {
    a.setAttribute(w.tooltipManager.TOOLTIP_OFFSET_ATTR, c)
};
w.tooltipManager.setTooltipTrigger = function (a, c) {
    c == w.tooltipManager.TriggerType.ALL ? a.removeAttribute(w.tooltipManager.TOOLTIP_TRIGGER_ATTR) : a.setAttribute(w.tooltipManager.TOOLTIP_TRIGGER_ATTR, c)
};
w.tooltipManager.setTooltipClass = function (a, c) {
    f.string.isEmptySafe(c) || a.setAttribute(w.tooltipManager.TOOLTIP_CLASS_ATTR_, c)
};
w.tooltipManager.setTooltipSuspended = function (a, c) {
    c ? a.setAttribute(w.tooltipManager.TOOLTIP_SUSPENDED_ATTR_, "true") : a.removeAttribute(w.tooltipManager.TOOLTIP_SUSPENDED_ATTR_)
};
w.tooltipManager.setTooltipOnlyOnOverflow = function (a, c) {
    c ? a.setAttribute(w.tooltipManager.TOOLTIP_ONLY_ON_OVERFLOW_ATTR_, "true") : a.removeAttribute(w.tooltipManager.TOOLTIP_ONLY_ON_OVERFLOW_ATTR_)
};
w.tooltipManager.hide = function (a) {
    a = a || f.dom.getDomHelper();
    a = f.getUid(a.getDocument());
    w.tooltipManager.instances_[a] && w.tooltipManager.instances_[a].hideTooltip()
};
w.tooltipManager.TOOLTIP_ELEMENT_CLASS_ = "jfk-tooltip-data";
w.tooltipManager.TOOLTIP_CONTAINED_ATTR_ = "data-tooltip-contained";
w.tooltipManager.TOOLTIP_ATTR_ = "data-tooltip";
w.tooltipManager.TOOLTIP_HTML_ATTR_ = "data-tooltip-html";
w.tooltipManager.TOOLTIP_SUSPENDED_ATTR_ = "data-tooltip-suspended";
w.tooltipManager.TOOLTIP_ONLY_ON_OVERFLOW_ATTR_ = "data-tooltip-only-on-overflow";
w.tooltipManager.TOOLTIP_CLASS_ATTR_ = "data-tooltip-class";
w.tooltipManager.TOOLTIP_ALIGNMENT_ATTR = "data-tooltip-align";
w.tooltipManager.TOOLTIP_OFFSET_ATTR = "data-tooltip-offset";
w.tooltipManager.TOOLTIP_DELAY_ATTR = "data-tooltip-delay";
w.tooltipManager.TOOLTIP_TRIGGER_ATTR = "data-tooltip-trigger";
w.tooltipManager.TriggerType = {ALL: "all", MOUSE: "mouse"};
w.tooltipManager.SHOW_DELAY_MS = 300;
w.tooltipManager.HIDE_DELAY_MS = 50;
w.tooltipManager.TOOLTIP_OFFSET_PX = -1;
w.tooltipManager.instances_ = {};
w.TooltipManager_ = function (a) {
    f.events.EventHandler.call(this);
    this.domHelper_ = a;
    this.delay_ = new f.async.Delay(this.throttledHover_, 0, this);
    this.registerDisposable(this.delay_);
    a = a.getDocument();
    this.listen(a, [f.events.EventType.MOUSEOUT, f.events.EventType.MOUSEDOWN, f.events.EventType.CLICK, f.events.EventType.BLUR, f.events.EventType.FOCUSOUT, f.events.EventType.KEYDOWN], this.clearActiveElement_, !0);
    this.listen(a, [f.events.EventType.MOUSEOVER, f.events.EventType.FOCUS, f.events.EventType.FOCUSIN], this.setActiveElement_,
        !0)
};
f.inherits(w.TooltipManager_, f.events.EventHandler);
w.TooltipManager_.HIDE_TOOLTIP_CLASS_NAME_ = "jfk-tooltip-hide";
b = w.TooltipManager_.prototype;
b.disposeInternal = function () {
    this.clearSecondaryTimer_();
    w.TooltipManager_.superClass_.disposeInternal.call(this)
};
b.trackEventTrigger_ = function (a) {
    switch (a.type) {
        case f.events.EventType.MOUSEDOWN:
        case f.events.EventType.MOUSEOVER:
        case f.events.EventType.MOUSEOUT:
        case f.events.EventType.CLICK:
            this.isKeyboardEvent_ = !1;
            break;
        case f.events.EventType.KEYDOWN:
            this.isKeyboardEvent_ = !0
    }
};
b.setActiveElement_ = function (a) {
    this.trackEventTrigger_(a);
    var c = a.target;
    a = a.type == f.events.EventType.FOCUS || a.type == f.events.EventType.FOCUSIN;
    var d = this.tooltip_ && f.dom.contains(this.tooltip_.getContentElement(), c);
    this.isKeyboardEvent_ || !a || d ? (this.isFocusEvent_ = a, this.activeEl_ = c) : this.activeEl_ = null;
    this.resetTimer_()
};
b.clearActiveElement_ = function (a) {
    this.trackEventTrigger_(a);
    var c = a.target;
    a = a.type == f.events.EventType.MOUSEDOWN || a.type == f.events.EventType.CLICK;
    c = this.tooltip_ && f.dom.contains(this.tooltip_.getContentElement(), c);
    a && c || (this.activeEl_ = null, this.resetTimer_())
};
b.resetTimer_ = function () {
    this.clearSecondaryTimer_();
    var a = this.hoverEl_ ? w.tooltipManager.HIDE_DELAY_MS : w.tooltipManager.SHOW_DELAY_MS;
    this.delay_.start(a)
};
b.clearSecondaryTimer_ = function () {
    this.secondaryTimerId_ && (f.Timer.clear(this.secondaryTimerId_), this.secondaryTimerId_ = 0, this.hoverEl_ = null)
};
w.TooltipManager_.getTooltipHtml_ = function (a) {
    if (a.jfkTooltipHtmlInternal)return a.jfkTooltipHtmlInternal;
    var c = a.getAttribute(w.tooltipManager.TOOLTIP_HTML_ATTR_);
    return c ? f.html.legacyconversions.safeHtmlFromString(c) : f.html.SafeHtml.htmlEscapePreservingNewlines(a.getAttribute(w.tooltipManager.TOOLTIP_ATTR_))
};
w.TooltipManager_.prototype.throttledHover_ = function () {
    if (!this.activeEl_)this.hideTooltip(); else if (!(this.hoverEl_ && this.tooltip_ && f.dom.contains(this.tooltip_.getElement(), this.activeEl_))) {
        var a = f.dom.getAncestor(this.activeEl_, function (a) {
                return a.getAttribute && (a.getAttribute(w.tooltipManager.TOOLTIP_CONTAINED_ATTR_) || a.getAttribute(w.tooltipManager.TOOLTIP_ATTR_) || a.jfkTooltipHtmlInternal || a.getAttribute(w.tooltipManager.TOOLTIP_HTML_ATTR_)) && !a.getAttribute(w.tooltipManager.TOOLTIP_SUSPENDED_ATTR_)
            },
            !0), c = !1;
        this.hoverEl_ && this.hoverEl_ != a && (this.hideTooltip(), c = !0);
        if (!this.hoverEl_ && a && (this.hoverEl_ = a, this.shouldShowTooltip_(a))) {
            var d = f.html.SafeHtml.EMPTY;
            if (a.getAttribute(w.tooltipManager.TOOLTIP_CONTAINED_ATTR_))for (var e = f.dom.getElementsByClass(w.tooltipManager.TOOLTIP_ELEMENT_CLASS_, a), g = 0; g < e.length; g++) {
                if (e[g].parentNode == a) {
                    d = e[g].cloneNode(!0);
                    break
                }
            } else d = w.TooltipManager_.getTooltipHtml_(a);
            var e = a.getAttribute(w.tooltipManager.TOOLTIP_ALIGNMENT_ATTR), g = a.getAttribute(w.tooltipManager.TOOLTIP_CLASS_ATTR_),
                h = a.getAttribute(w.tooltipManager.TOOLTIP_OFFSET_ATTR), h = f.string.isEmptySafe(h) ? w.tooltipManager.TOOLTIP_OFFSET_PX : Number(h);
            if (!c && (a = a.getAttribute(w.tooltipManager.TOOLTIP_DELAY_ATTR), a = Math.max(0, a - w.tooltipManager.SHOW_DELAY_MS))) {
                this.secondaryTimerId_ = f.Timer.callOnce(f.partial(this.showTooltipImpl_, this.hoverEl_, d, e, h, g), a, this);
                return
            }
            this.showTooltipImpl_(this.hoverEl_, d, e, h, g)
        }
    }
};
w.TooltipManager_.prototype.shouldShowTooltip_ = function (a) {
    return a.getAttribute(w.tooltipManager.TOOLTIP_ONLY_ON_OVERFLOW_ATTR_) && a.offsetWidth >= a.scrollWidth && a.offsetHeight >= a.scrollHeight || this.isFocusEvent_ && (a = w.tooltipManager.TriggerType.MOUSE != a.getAttribute(w.tooltipManager.TOOLTIP_TRIGGER_ATTR), !a) ? !1 : !0
};
w.TooltipManager_.computeAlignmentAttr_ = function (a, c) {
    var d = "";
    switch (a) {
        case w.PopupPosition.LEFT:
            d += "l";
            break;
        case w.PopupPosition.TOP:
            d += "t";
            break;
        case w.PopupPosition.RIGHT:
            d += "r";
            break;
        default:
            d += "b"
    }
    d += ",";
    switch (c) {
        case w.ArrowAlignment.LEFT_OR_TOP:
            d += "l";
            break;
        case w.ArrowAlignment.RIGHT_OR_BOTTOM:
            d += "r";
            break;
        default:
            d += "c"
    }
    return d
};
w.TooltipManager_.parsePosition_ = function (a) {
    if (a)switch (a = a.toLowerCase().split(","), a[0]) {
        case "l":
            return w.PopupPosition.LEFT;
        case "t":
            return w.PopupPosition.TOP;
        case "r":
            return w.PopupPosition.RIGHT
    }
    return w.PopupPosition.BOTTOM
};
w.TooltipManager_.parseArrowAlignment_ = function (a) {
    if (a)switch (a = a.toLowerCase().split(","), a[1]) {
        case "l":
            return w.ArrowAlignment.LEFT_OR_TOP;
        case "r":
            return w.ArrowAlignment.RIGHT_OR_BOTTOM
    }
    return w.ArrowAlignment.CENTER
};
w.TooltipManager_.prototype.showTooltipImpl_ = function (a, c, d, e, g) {
    this.secondaryTimerId_ = 0;
    this.tooltip_ || (this.tooltip_ = new w.SilentTooltipRenderer(this.domHelper_), this.hideTooltipImpl_(), f.dom.appendChild(this.domHelper_.getDocument().body, this.tooltip_.getElement()), this.registerDisposable(this.tooltip_), this.tooltipPos_ = new w.ArrowPosition(this.tooltip_.getClassName(), !0), this.tooltipPos_.setAutoReposition(!0), this.tooltipPos_.setElements(this.tooltip_.getElement(), this.tooltip_.getArrowElement()));
    var h = w.TooltipManager_.parseArrowAlignment_(d);
    d = w.TooltipManager_.parsePosition_(d);
    this.tooltipPos_.setPosition(d, h, void 0, e);
    f.dom.classlist.remove(this.tooltip_.getElement(), w.TooltipManager_.HIDE_TOOLTIP_CLASS_NAME_);
    this.tooltipClass_ != g && (this.tooltipClass_ && !f.string.isEmptySafe(this.tooltipClass_) && f.dom.classlist.remove(this.tooltip_.getElement(), this.tooltipClass_), f.string.isEmptySafe(g) || f.dom.classlist.add(this.tooltip_.getElement(), g), this.tooltipClass_ = g);
    f.style.setPosition(this.tooltip_.getElement(),
        0, 0);
    if (c instanceof f.html.SafeHtml)f.dom.safe.setInnerHtml(this.tooltip_.getContentElement(), c); else for (f.dom.removeChildren(this.tooltip_.getContentElement()); e = c.firstChild;)this.tooltip_.getContentElement().appendChild(e);
    this.tooltipPos_.setAnchorElement(a);
    this.tooltipPos_.reposition(null, f.positioning.Corner.TOP_LEFT)
};
w.TooltipManager_.prototype.hideTooltipImpl_ = function () {
    this.tooltip_ && f.dom.classlist.add(this.tooltip_.getElement(), w.TooltipManager_.HIDE_TOOLTIP_CLASS_NAME_)
};
w.TooltipManager_.prototype.hideTooltip = function () {
    this.hideTooltipImpl_();
    this.hoverEl_ = null
};
f.structs = {};
f.structs.InversionMap = function (a, c, d) {
    this.rangeArray = null;
    if (a.length != c.length)return null;
    this.storeInversion_(a, d);
    this.values = c
};
f.structs.InversionMap.prototype.storeInversion_ = function (a, c) {
    this.rangeArray = a;
    for (var d = 1; d < a.length; d++)null == a[d] ? a[d] = a[d - 1] + 1 : c && (a[d] += a[d - 1])
};
f.structs.InversionMap.prototype.at = function (a) {
    a = this.getLeast(a);
    return 0 > a ? null : this.values[a]
};
f.structs.InversionMap.prototype.getLeast = function (a) {
    for (var c = this.rangeArray, d = 0, e = c.length; 8 < e - d;) {
        var g = e + d >> 1;
        c[g] <= a ? d = g : e = g
    }
    for (; d < e && !(a < c[d]); ++d);
    return d - 1
};
f.i18n.GraphemeBreak = {};
f.i18n.GraphemeBreak.property = {ANY: 0, CONTROL: 1, EXTEND: 2, PREPEND: 3, SPACING_MARK: 4, INDIC_CONSONANT: 5, VIRAMA: 6, L: 7, V: 8, T: 9, LV: 10, LVT: 11, CR: 12, LF: 13, REGIONAL_INDICATOR: 14};
f.i18n.GraphemeBreak.inversions_ = null;
f.i18n.GraphemeBreak.applyLegacyBreakRules_ = function (a, c) {
    var d = f.i18n.GraphemeBreak.property;
    return a == d.CR && c == d.LF ? !1 : a == d.CONTROL || a == d.CR || a == d.LF || c == d.CONTROL || c == d.CR || c == d.LF ? !0 : a == d.L && (c == d.L || c == d.V || c == d.LV || c == d.LVT) || !(a != d.LV && a != d.V || c != d.V && c != d.T) || (a == d.LVT || a == d.T) && c == d.T || c == d.EXTEND || c == d.VIRAMA || a == d.VIRAMA && c == d.INDIC_CONSONANT ? !1 : !0
};
f.i18n.GraphemeBreak.getBreakProp_ = function (a) {
    if (44032 <= a && 55203 >= a) {
        var c = f.i18n.GraphemeBreak.property;
        return 16 == a % 28 ? c.LV : c.LVT
    }
    f.i18n.GraphemeBreak.inversions_ || (f.i18n.GraphemeBreak.inversions_ = new f.structs.InversionMap([0, 10, 1, 2, 1, 18, 95, 33, 13, 1, 594, 112, 275, 7, 263, 45, 1, 1, 1, 2, 1, 2, 1, 1, 56, 5, 11, 11, 48, 21, 16, 1, 101, 7, 1, 1, 6, 2, 2, 1, 4, 33, 1, 1, 1, 30, 27, 91, 11, 58, 9, 34, 4, 1, 9, 1, 3, 1, 5, 43, 3, 136, 31, 1, 17, 37, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 8, 2, 2, 21, 8, 1, 2, 17, 39, 1, 1, 1, 2, 6, 6, 1, 9, 5, 4, 2, 2, 12, 2, 15, 2, 1, 17, 39, 2, 3, 12, 4, 8, 6, 17, 2, 3,
        14, 1, 17, 39, 1, 1, 3, 8, 4, 1, 20, 2, 29, 1, 2, 17, 39, 1, 1, 2, 1, 6, 6, 9, 6, 4, 2, 2, 13, 1, 16, 1, 18, 41, 1, 1, 1, 12, 1, 9, 1, 41, 3, 17, 37, 4, 3, 5, 7, 8, 3, 2, 8, 2, 30, 2, 17, 39, 1, 1, 1, 1, 2, 1, 3, 1, 5, 1, 8, 9, 1, 3, 2, 30, 2, 17, 38, 3, 1, 2, 5, 7, 1, 9, 1, 10, 2, 30, 2, 22, 48, 5, 1, 2, 6, 7, 19, 2, 13, 46, 2, 1, 1, 1, 6, 1, 12, 8, 50, 46, 2, 1, 1, 1, 9, 11, 6, 14, 2, 58, 2, 27, 1, 1, 1, 1, 1, 4, 2, 49, 14, 1, 4, 1, 1, 2, 5, 48, 9, 1, 57, 33, 12, 4, 1, 6, 1, 2, 2, 2, 1, 16, 2, 4, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 1, 1, 2, 6, 1, 1, 14, 1, 98, 96, 72, 88, 349, 3, 931, 15, 2, 1, 14, 15, 2, 1, 14, 15, 2, 15, 15, 14, 35, 17, 2, 1, 7, 8, 1, 2, 9, 1, 1, 9, 1, 45, 3, 155, 1, 87, 31, 3, 4, 2, 9,
        1, 6, 3, 20, 19, 29, 44, 9, 3, 2, 1, 69, 23, 2, 3, 4, 45, 6, 2, 1, 1, 1, 8, 1, 1, 1, 2, 8, 6, 13, 128, 4, 1, 14, 33, 1, 1, 5, 1, 1, 5, 1, 1, 1, 7, 31, 9, 12, 2, 1, 7, 23, 1, 4, 2, 2, 2, 2, 2, 11, 3, 2, 36, 2, 1, 1, 2, 3, 1, 1, 3, 2, 12, 36, 8, 8, 2, 2, 21, 3, 128, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 203, 64, 523, 1, 2, 2, 24, 7, 49, 16, 96, 33, 3070, 3, 141, 1, 96, 32, 554, 6, 105, 2, 30164, 4, 1, 10, 33, 1, 80, 2, 272, 1, 3, 1, 4, 1, 23, 2, 2, 1, 24, 30, 4, 4, 3, 8, 1, 1, 13, 2, 16, 34, 16, 1, 27, 18, 24, 24, 4, 8, 2, 23, 11, 1, 1, 12, 32, 3, 1, 5, 3, 3, 36, 1, 2, 4, 2, 1, 3, 1, 69, 35, 6, 2, 2, 2, 2, 12, 1, 8, 1, 1, 18, 16, 1, 3, 6, 1, 5, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 32, 9, 1, 2, 2, 5, 1, 1, 201, 14, 2,
        1, 1, 9, 8, 2, 1, 2, 1, 2, 1, 1, 1, 18, 11184, 27, 49, 1028, 1024, 6942, 1, 737, 16, 16, 7, 216, 1, 158, 2, 89, 3, 513, 1, 2051, 15, 40, 7, 1, 1472, 1, 1, 1, 53, 14, 1, 57, 2, 1, 45, 3, 4, 2, 1, 1, 2, 1, 66, 3, 36, 5, 1, 6, 2, 75, 2, 1, 48, 3, 9, 1, 1, 1258, 1, 1, 1, 2, 6, 1, 1, 22681, 62, 4, 25042, 1, 1, 3, 3, 1, 5, 8, 8, 2, 7, 30, 4, 148, 3, 8097, 26, 790017, 255], [1, 13, 1, 12, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 4, 0, 5, 2, 4, 2, 0, 4, 2, 4, 6, 4, 0, 2, 5, 0, 2, 0, 5, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 0, 2, 5, 0, 2, 0, 5, 0, 2, 4, 0, 5, 2, 4, 2, 6, 2, 5, 0, 2, 0, 2,
        4, 0, 5, 2, 0, 4, 2, 4, 6, 0, 2, 0, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 2, 5, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 2, 4, 6, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 2, 0, 4, 2, 4, 2, 4, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 4, 6, 0, 2, 0, 2, 0, 4, 0, 5, 6, 2, 4, 2, 4, 2, 4, 0, 5, 0, 2, 0, 4, 2, 6, 0, 2, 0, 5, 0, 2, 0, 4, 2, 0, 2, 0, 5, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 5, 2, 4, 2, 6, 0, 2, 0, 2, 0, 2, 0, 5, 0, 2, 4, 2, 0, 6, 4, 2, 5, 0, 5, 0, 4, 2, 5, 2, 5, 0, 5, 0, 5, 2, 5, 2, 0, 4, 2, 0, 2, 5, 0, 2, 0, 7, 8, 9, 0, 2, 0, 5, 2, 6, 0, 5, 2, 6, 0, 5, 2, 0, 5, 2, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 2, 0, 2, 0, 2, 0, 2, 0, 5, 2, 4, 2, 4, 2, 4, 2, 0, 5, 0, 5, 0, 4, 0, 4, 0, 5, 2, 4, 0, 5, 0, 5, 4, 2, 4, 2, 6, 0, 2, 0, 2, 4, 2, 0, 2, 4, 0, 5,
        2, 4, 2, 4, 2, 4, 2, 4, 6, 5, 0, 2, 0, 2, 4, 0, 5, 4, 2, 4, 2, 6, 4, 5, 0, 5, 0, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 0, 5, 4, 2, 4, 2, 0, 5, 0, 2, 0, 2, 4, 2, 0, 2, 0, 4, 2, 0, 2, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 6, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 6, 5, 2, 5, 4, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 4, 0, 5, 4, 6, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 6, 0, 7, 2, 4, 0, 5, 0, 5, 2, 4, 2, 4, 2, 4, 6, 0, 5, 2, 4, 2, 4, 2, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 4, 2, 4, 0, 4, 6, 0, 5, 0, 5, 0, 5, 0, 4, 2, 4, 2, 4, 0, 4, 6, 0, 11, 8, 9, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 6, 0, 4, 2, 4, 0, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 2, 0, 1, 0, 2, 0, 2, 4, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 0, 2, 4, 2,
        4, 2, 6, 2, 0, 4, 2, 0, 2, 4, 2, 0, 4, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 14, 0, 1, 2], !0));
    return f.i18n.GraphemeBreak.inversions_.at(a)
};
f.i18n.GraphemeBreak.hasGraphemeBreak = function (a, c, d) {
    a = f.i18n.GraphemeBreak.getBreakProp_(a);
    c = f.i18n.GraphemeBreak.getBreakProp_(c);
    var e = f.i18n.GraphemeBreak.property;
    return f.i18n.GraphemeBreak.applyLegacyBreakRules_(a, c) && !(d && (a == e.PREPEND || c == e.SPACING_MARK))
};
f.format = {};
f.format.fileSize = function (a, c) {
    return f.format.numBytesToString(a, c, !1)
};
f.format.isConvertableScaledNumber = function (a) {
    return f.format.SCALED_NUMERIC_RE_.test(a)
};
f.format.stringToNumericValue = function (a) {
    return f.string.endsWith(a, "B") ? f.format.stringToNumericValue_(a, f.format.NUMERIC_SCALES_BINARY_) : f.format.stringToNumericValue_(a, f.format.NUMERIC_SCALES_SI_)
};
f.format.stringToNumBytes = function (a) {
    return f.format.stringToNumericValue_(a, f.format.NUMERIC_SCALES_BINARY_)
};
f.format.numericValueToString = function (a, c) {
    return f.format.numericValueToString_(a, f.format.NUMERIC_SCALES_SI_, c)
};
f.format.numBytesToString = function (a, c, d, e) {
    var g = "";
    if (!f.isDef(d) || d)g = "B";
    return f.format.numericValueToString_(a, f.format.NUMERIC_SCALES_BINARY_, c, g, e)
};
f.format.stringToNumericValue_ = function (a, c) {
    var d = a.match(f.format.SCALED_NUMERIC_RE_);
    return d ? d = d[1] * c[d[2]] : NaN
};
f.format.numericValueToString_ = function (a, c, d, e, g) {
    var h = f.format.NUMERIC_SCALE_PREFIXES_, l = a, p = "", q = "", s = 1;
    0 > a && (a = -a);
    for (var t = 0; t < h.length; t++) {
        var u = h[t], s = c[u];
        if (a >= s || 1 >= s && a > .1 * s) {
            p = u;
            break
        }
    }
    p ? (e && (p += e), g && (q = " ")) : s = 1;
    a = Math.pow(10, f.isDef(d) ? d : 2);
    return Math.round(l / s * a) / a + q + p
};
f.format.SCALED_NUMERIC_RE_ = /^([-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/;
f.format.NUMERIC_SCALE_PREFIXES_ = "P T G M K  m u n".split(" ");
f.format.NUMERIC_SCALES_SI_ = {"": 1, n: 1E-9, u: 1E-6, m: .001, k: 1E3, K: 1E3, M: 1E6, G: 1E9, T: 1E12, P: 1E15};
f.format.NUMERIC_SCALES_BINARY_ = {"": 1, n: Math.pow(1024, -3), u: Math.pow(1024, -2), m: 1 / 1024, k: 1024, K: 1024, M: Math.pow(1024, 2), G: Math.pow(1024, 3), T: Math.pow(1024, 4), P: Math.pow(1024, 5)};
f.format.FIRST_GRAPHEME_EXTEND_ = 768;
f.format.isTreatedAsBreakingSpace_ = function (a) {
    return a <= f.format.WbrToken_.SPACE || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
};
f.format.isInvisibleFormattingCharacter_ = function (a) {
    return 8204 <= a && 8207 >= a || 8234 <= a && 8238 >= a
};
f.format.insertWordBreaksGeneric_ = function (a, c, d) {
    d = d || 10;
    if (d > a.length)return a;
    for (var e = [], g = 0, h = 0, l = 0, p = 0, q = 0; q < a.length; q++) {
        var s = p, p = a.charCodeAt(q), s = p >= f.format.FIRST_GRAPHEME_EXTEND_ && !c(s, p, !0);
        g >= d && !f.format.isTreatedAsBreakingSpace_(p) && !s && (e.push(a.substring(l, q), f.format.WORD_BREAK_HTML), l = q, g = 0);
        h ? p == f.format.WbrToken_.GT && h == f.format.WbrToken_.LT ? h = 0 : p == f.format.WbrToken_.SEMI_COLON && h == f.format.WbrToken_.AMP && (h = 0, g++) : p == f.format.WbrToken_.LT || p == f.format.WbrToken_.AMP ? h = p : f.format.isTreatedAsBreakingSpace_(p) ?
            g = 0 : f.format.isInvisibleFormattingCharacter_(p) || g++
    }
    e.push(a.substr(l));
    return e.join("")
};
f.format.insertWordBreaks = function (a, c) {
    return f.format.insertWordBreaksGeneric_(a, f.i18n.GraphemeBreak.hasGraphemeBreak, c)
};
f.format.conservativelyHasGraphemeBreak_ = function (a, c) {
    return 1024 <= c && 1315 > c
};
f.format.insertWordBreaksBasic = function (a, c) {
    return f.format.insertWordBreaksGeneric_(a, f.format.conservativelyHasGraphemeBreak_, c)
};
f.format.IS_IE8_OR_ABOVE_ = f.userAgent.IE && f.userAgent.isVersionOrHigher(8);
f.format.WORD_BREAK_HTML = f.userAgent.WEBKIT ? "<wbr></wbr>" : f.userAgent.OPERA ? "&shy;" : f.format.IS_IE8_OR_ABOVE_ ? "&#8203;" : "<wbr>";
f.format.WbrToken_ = {LT: 60, GT: 62, AMP: 38, SEMI_COLON: 59, SPACE: 32};
f.i18n.BidiFormatter = function (a, c) {
    this.contextDir_ = f.i18n.bidi.toDir(a, !0);
    this.alwaysSpan_ = !!c
};
b = f.i18n.BidiFormatter.prototype;
b.getContextDir = function () {
    return this.contextDir_
};
b.estimateDirection = f.i18n.bidi.estimateDirection;
b.areDirectionalitiesOpposite_ = function (a, c) {
    return 0 > a * c
};
b.dirResetIfNeeded_ = function (a, c, d, e) {
    return e && (this.areDirectionalitiesOpposite_(c, this.contextDir_) || this.contextDir_ == f.i18n.bidi.Dir.LTR && f.i18n.bidi.endsWithRtl(a, d) || this.contextDir_ == f.i18n.bidi.Dir.RTL && f.i18n.bidi.endsWithLtr(a, d)) ? this.contextDir_ == f.i18n.bidi.Dir.LTR ? f.i18n.bidi.Format.LRM : f.i18n.bidi.Format.RLM : ""
};
b.knownDirAttr = function (a) {
    return a != this.contextDir_ ? a == f.i18n.bidi.Dir.RTL ? 'dir="rtl"' : a == f.i18n.bidi.Dir.LTR ? 'dir="ltr"' : "" : ""
};
b.spanWrapSafeHtmlWithKnownDir = function (a, c, d) {
    null == a && (a = this.estimateDirection(f.html.SafeHtml.unwrap(c), !0));
    return this.spanWrapWithKnownDir_(a, c, d)
};
b.spanWrapWithKnownDir_ = function (a, c, d) {
    d = d || void 0 == d;
    var e;
    e = a != f.i18n.bidi.Dir.NEUTRAL && a != this.contextDir_;
    if (this.alwaysSpan_ || e) {
        var g;
        e && (g = a == f.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
        e = f.html.SafeHtml.create("span", {dir: g}, c)
    } else e = c;
    c = f.html.SafeHtml.unwrap(c);
    return e = f.html.SafeHtml.concatWithDir(f.i18n.bidi.Dir.NEUTRAL, e, this.dirResetIfNeeded_(c, a, !0, d))
};
b.unicodeWrapWithKnownDir = function (a, c, d, e) {
    null == a && (a = this.estimateDirection(c, d));
    return this.unicodeWrapWithKnownDir_(a, c, d, e)
};
b.unicodeWrapWithKnownDir_ = function (a, c, d, e) {
    e = e || void 0 == e;
    var g = [];
    a != f.i18n.bidi.Dir.NEUTRAL && a != this.contextDir_ ? (g.push(a == f.i18n.bidi.Dir.RTL ? f.i18n.bidi.Format.RLE : f.i18n.bidi.Format.LRE), g.push(c), g.push(f.i18n.bidi.Format.PDF)) : g.push(c);
    g.push(this.dirResetIfNeeded_(c, a, d, e));
    return g.join("")
};
b.markAfterKnownDir = function (a, c, d) {
    null == a && (a = this.estimateDirection(c, d));
    return this.dirResetIfNeeded_(c, a, d, !0)
};
f.string.StringBuffer = function (a, c) {
    null != a && this.append.apply(this, arguments)
};
b = f.string.StringBuffer.prototype;
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
b.toString = function () {
    return this.buffer_
};
var x = {esc: {}}, y = {VERY_UNSAFE: {}};
x.StringBuilder = f.string.StringBuffer;
y.SanitizedContentKind = f.soy.data.SanitizedContentKind;
y.isContentKind = function (a, c) {
    return null != a && a.contentKind === c
};
y.getContentDir = function (a) {
    if (null != a)switch (a.contentDir) {
        case f.i18n.bidi.Dir.LTR:
            return f.i18n.bidi.Dir.LTR;
        case f.i18n.bidi.Dir.RTL:
            return f.i18n.bidi.Dir.RTL;
        case f.i18n.bidi.Dir.NEUTRAL:
            return f.i18n.bidi.Dir.NEUTRAL
    }
    return null
};
y.SanitizedHtml = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedHtml, f.soy.data.SanitizedContent);
y.SanitizedHtml.prototype.contentKind = y.SanitizedContentKind.HTML;
y.SanitizedHtml.from = function (a) {
    return null != a && a.contentKind === y.SanitizedContentKind.HTML ? (f.asserts.assert(a.constructor === y.SanitizedHtml), a) : a instanceof f.html.SafeHtml ? y.VERY_UNSAFE.ordainSanitizedHtml(f.html.SafeHtml.unwrap(a), a.getDirection()) : y.VERY_UNSAFE.ordainSanitizedHtml(x.esc.$$escapeHtmlHelper(String(a)), y.getContentDir(a))
};
y.SanitizedJs = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedJs, f.soy.data.SanitizedContent);
y.SanitizedJs.prototype.contentKind = y.SanitizedContentKind.JS;
y.SanitizedJs.prototype.contentDir = f.i18n.bidi.Dir.LTR;
y.SanitizedJsStrChars = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedJsStrChars, f.soy.data.SanitizedContent);
y.SanitizedJsStrChars.prototype.contentKind = y.SanitizedContentKind.JS_STR_CHARS;
y.SanitizedUri = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedUri, f.soy.data.SanitizedContent);
y.SanitizedUri.prototype.contentKind = y.SanitizedContentKind.URI;
y.SanitizedUri.prototype.contentDir = f.i18n.bidi.Dir.LTR;
y.SanitizedHtmlAttribute = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedHtmlAttribute, f.soy.data.SanitizedContent);
y.SanitizedHtmlAttribute.prototype.contentKind = y.SanitizedContentKind.ATTRIBUTES;
y.SanitizedHtmlAttribute.prototype.contentDir = f.i18n.bidi.Dir.LTR;
y.SanitizedCss = function () {
    f.soy.data.SanitizedContent.call(this)
};
f.inherits(y.SanitizedCss, f.soy.data.SanitizedContent);
y.SanitizedCss.prototype.contentKind = y.SanitizedContentKind.CSS;
y.SanitizedCss.prototype.contentDir = f.i18n.bidi.Dir.LTR;
y.UnsanitizedText = function (a, c) {
    this.content = String(a);
    this.contentDir = null != c ? c : null
};
f.inherits(y.UnsanitizedText, f.soy.data.SanitizedContent);
y.UnsanitizedText.prototype.contentKind = y.SanitizedContentKind.TEXT;
y.$$EMPTY_STRING_ = {VALUE: ""};
y.$$makeSanitizedContentFactory_ = function (a) {
    function c(a) {
        this.content = a
    }

    function d(a, d) {
        var h = new c(String(a));
        void 0 !== d && (h.contentDir = d);
        return h
    }

    c.prototype = a.prototype;
    return d
};
y.$$makeSanitizedContentFactoryWithDefaultDirOnly_ = function (a) {
    function c(a) {
        this.content = a
    }

    function d(a) {
        return a = new c(String(a))
    }

    c.prototype = a.prototype;
    return d
};
y.markUnsanitizedText = function (a, c) {
    return new y.UnsanitizedText(a, c)
};
y.VERY_UNSAFE.ordainSanitizedHtml = y.$$makeSanitizedContentFactory_(y.SanitizedHtml);
y.VERY_UNSAFE.ordainSanitizedJs = y.$$makeSanitizedContentFactoryWithDefaultDirOnly_(y.SanitizedJs);
y.VERY_UNSAFE.ordainSanitizedJsStrChars = y.$$makeSanitizedContentFactory_(y.SanitizedJsStrChars);
y.VERY_UNSAFE.ordainSanitizedUri = y.$$makeSanitizedContentFactoryWithDefaultDirOnly_(y.SanitizedUri);
y.VERY_UNSAFE.ordainSanitizedHtmlAttribute = y.$$makeSanitizedContentFactoryWithDefaultDirOnly_(y.SanitizedHtmlAttribute);
y.VERY_UNSAFE.ordainSanitizedCss = y.$$makeSanitizedContentFactoryWithDefaultDirOnly_(y.SanitizedCss);
x.renderElement = f.soy.renderElement;
x.renderAsFragment = function (a, c, d, e) {
    return f.soy.renderAsFragment(a, c, e, new f.dom.DomHelper(d))
};
x.renderAsElement = function (a, c, d, e) {
    return f.soy.renderAsElement(a, c, e, new f.dom.DomHelper(d))
};
x.$$IS_LOCALE_RTL = f.i18n.bidi.IS_RTL;
x.$$augmentMap = function (a, c) {
    function d() {
    }

    d.prototype = a;
    var e = new d, g;
    for (g in c)e[g] = c[g];
    return e
};
x.$$checkMapKey = function (a) {
    if ("string" != typeof a)throw Error("Map literal's key expression must evaluate to string (encountered type \"" + typeof a + '").');
    return a
};
x.$$getMapKeys = function (a) {
    var c = [], d;
    for (d in a)c.push(d);
    return c
};
x.$$getDelTemplateId = function (a) {
    return a
};
x.$$DELEGATE_REGISTRY_PRIORITIES_ = {};
x.$$DELEGATE_REGISTRY_FUNCTIONS_ = {};
x.$$registerDelegateFn = function (a, c, d, e) {
    var g = "key_" + a + ":" + c, h = x.$$DELEGATE_REGISTRY_PRIORITIES_[g];
    if (void 0 === h || d > h)x.$$DELEGATE_REGISTRY_PRIORITIES_[g] = d, x.$$DELEGATE_REGISTRY_FUNCTIONS_[g] = e; else if (d == h)throw Error('Encountered two active delegates with the same priority ("' + a + ":" + c + '").');
};
x.$$getDelegateFn = function (a, c, d) {
    var e = x.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":" + c];
    e || "" == c || (e = x.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":"]);
    if (e)return e;
    if (d)return x.$$EMPTY_TEMPLATE_FN_;
    throw Error('Found no active impl for delegate call to "' + a + ":" + c + '" (and not allowemptydefault="true").');
};
x.$$EMPTY_TEMPLATE_FN_ = function () {
    return""
};
y.$$makeSanitizedContentFactoryForInternalBlocks_ = function (a) {
    function c(a) {
        this.content = a
    }

    function d(a, d) {
        var h = String(a);
        if (!h)return y.$$EMPTY_STRING_.VALUE;
        h = new c(h);
        void 0 !== d && (h.contentDir = d);
        return h
    }

    c.prototype = a.prototype;
    return d
};
y.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_ = function (a) {
    function c(a) {
        this.content = a
    }

    function d(a) {
        a = String(a);
        return a ? a = new c(a) : y.$$EMPTY_STRING_.VALUE
    }

    c.prototype = a.prototype;
    return d
};
y.$$markUnsanitizedTextForInternalBlocks = function (a, c) {
    var d = String(a);
    return d ? new y.UnsanitizedText(d, c) : y.$$EMPTY_STRING_.VALUE
};
y.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks = y.$$makeSanitizedContentFactoryForInternalBlocks_(y.SanitizedHtml);
y.VERY_UNSAFE.$$ordainSanitizedJsForInternalBlocks = y.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(y.SanitizedJs);
y.VERY_UNSAFE.$$ordainSanitizedUriForInternalBlocks = y.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(y.SanitizedUri);
y.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks = y.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(y.SanitizedHtmlAttribute);
y.VERY_UNSAFE.$$ordainSanitizedCssForInternalBlocks = y.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(y.SanitizedCss);
x.$$escapeHtml = function (a) {
    return y.SanitizedHtml.from(a)
};
x.$$cleanHtml = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? (f.asserts.assert(a.constructor === y.SanitizedHtml), a) : y.VERY_UNSAFE.ordainSanitizedHtml(x.$$stripHtmlTags(a, x.esc.$$SAFE_TAG_WHITELIST_), y.getContentDir(a))
};
x.$$escapeHtmlRcdata = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? (f.asserts.assert(a.constructor === y.SanitizedHtml), x.esc.$$normalizeHtmlHelper(a.getContent())) : x.esc.$$escapeHtmlHelper(a)
};
x.$$HTML5_VOID_ELEMENTS_ = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/;
x.$$stripHtmlTags = function (a, c) {
    if (!c)return String(a).replace(x.esc.$$HTML_TAG_REGEX_, "").replace(x.esc.$$LT_REGEX_, "&lt;");
    var d = String(a).replace(/\[/g, "&#91;"), e = [], d = d.replace(x.esc.$$HTML_TAG_REGEX_, function (a, d) {
        if (d && (d = d.toLowerCase(), c.hasOwnProperty(d) && c[d])) {
            var g = "/" === a.charAt(1) ? "</" : "<", q = e.length;
            e[q] = g + d + ">";
            return"[" + q + "]"
        }
        return""
    }), d = x.esc.$$normalizeHtmlHelper(d), g = x.$$balanceTags_(e), d = d.replace(/\[(\d+)\]/g, function (a, c) {
        return e[c]
    });
    return d + g
};
x.$$balanceTags_ = function (a) {
    for (var c = [], d = 0, e = a.length; d < e; ++d) {
        var g = a[d];
        if ("/" === g.charAt(1)) {
            for (var h = c.length - 1; 0 <= h && c[h] != g;)h--;
            0 > h ? a[d] = "" : (a[d] = c.slice(h).reverse().join(""), c.length = h)
        } else x.$$HTML5_VOID_ELEMENTS_.test(g) || c.push("</" + g.substring(1))
    }
    return c.reverse().join("")
};
x.$$escapeHtmlAttribute = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? (f.asserts.assert(a.constructor === y.SanitizedHtml), x.esc.$$normalizeHtmlHelper(x.$$stripHtmlTags(a.getContent()))) : x.esc.$$escapeHtmlHelper(a)
};
x.$$escapeHtmlAttributeNospace = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? (f.asserts.assert(a.constructor === y.SanitizedHtml), x.esc.$$normalizeHtmlNospaceHelper(x.$$stripHtmlTags(a.getContent()))) : x.esc.$$escapeHtmlNospaceHelper(a)
};
x.$$filterHtmlAttributes = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.ATTRIBUTES) ? (f.asserts.assert(a.constructor === y.SanitizedHtmlAttribute), a.getContent().replace(/([^"'\s])$/, "$1 ")) : x.esc.$$filterHtmlAttributesHelper(a)
};
x.$$filterHtmlElementName = function (a) {
    return x.esc.$$filterHtmlElementNameHelper(a)
};
x.$$escapeJs = function (a) {
    return x.$$escapeJsString(a)
};
x.$$escapeJsString = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.JS_STR_CHARS) ? (f.asserts.assert(a.constructor === y.SanitizedJsStrChars), a.getContent()) : x.esc.$$escapeJsStringHelper(a)
};
x.$$escapeJsValue = function (a) {
    if (null == a)return" null ";
    if (y.isContentKind(a, y.SanitizedContentKind.JS))return f.asserts.assert(a.constructor === y.SanitizedJs), a.getContent();
    switch (typeof a) {
        case "boolean":
        case "number":
            return" " + a + " ";
        default:
            return"'" + x.esc.$$escapeJsStringHelper(String(a)) + "'"
    }
};
x.$$escapeJsRegex = function (a) {
    return x.esc.$$escapeJsRegexHelper(a)
};
x.$$problematicUriMarks_ = /['()]/g;
x.$$pctEncode_ = function (a) {
    return"%" + a.charCodeAt(0).toString(16)
};
x.$$escapeUri = function (a) {
    if (y.isContentKind(a, y.SanitizedContentKind.URI))return f.asserts.assert(a.constructor === y.SanitizedUri), x.$$normalizeUri(a);
    if (a instanceof f.html.SafeUrl)return x.$$normalizeUri(f.html.SafeUrl.unwrap(a));
    a = x.esc.$$escapeUriHelper(a);
    x.$$problematicUriMarks_.lastIndex = 0;
    return x.$$problematicUriMarks_.test(a) ? a.replace(x.$$problematicUriMarks_, x.$$pctEncode_) : a
};
x.$$normalizeUri = function (a) {
    return x.esc.$$normalizeUriHelper(a)
};
x.$$filterNormalizeUri = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.URI) ? (f.asserts.assert(a.constructor === y.SanitizedUri), x.$$normalizeUri(a)) : a instanceof f.html.SafeUrl ? x.$$normalizeUri(f.html.SafeUrl.unwrap(a)) : x.esc.$$filterNormalizeUriHelper(a)
};
x.$$filterImageDataUri = function (a) {
    return y.VERY_UNSAFE.ordainSanitizedUri(x.esc.$$filterImageDataUriHelper(a))
};
x.$$escapeCssString = function (a) {
    return x.esc.$$escapeCssStringHelper(a)
};
x.$$filterCssValue = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.CSS) ? (f.asserts.assert(a.constructor === y.SanitizedCss), a.getContent()) : null == a ? "" : a instanceof f.html.SafeStyle ? f.html.SafeStyle.unwrap(a) : x.esc.$$filterCssValueHelper(a)
};
x.$$filterNoAutoescape = function (a) {
    return y.isContentKind(a, y.SanitizedContentKind.TEXT) ? (f.asserts.fail("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [a.getContent()]), "zSoyz") : a
};
x.$$changeNewlineToBr = function (a) {
    var c = f.string.newLineToBr(String(a), !1);
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? y.VERY_UNSAFE.ordainSanitizedHtml(c, y.getContentDir(a)) : c
};
x.$$insertWordBreaks = function (a, c) {
    var d = f.format.insertWordBreaks(String(a), c);
    return y.isContentKind(a, y.SanitizedContentKind.HTML) ? y.VERY_UNSAFE.ordainSanitizedHtml(d, y.getContentDir(a)) : d
};
x.$$truncate = function (a, c, d) {
    a = String(a);
    if (a.length <= c)return a;
    d && (3 < c ? c -= 3 : d = !1);
    x.$$isHighSurrogate_(a.charAt(c - 1)) && x.$$isLowSurrogate_(a.charAt(c)) && (c -= 1);
    a = a.substring(0, c);
    d && (a += "...");
    return a
};
x.$$isHighSurrogate_ = function (a) {
    return 55296 <= a && 56319 >= a
};
x.$$isLowSurrogate_ = function (a) {
    return 56320 <= a && 57343 >= a
};
x.$$bidiFormatterCache_ = {};
x.$$getBidiFormatterInstance_ = function (a) {
    return x.$$bidiFormatterCache_[a] || (x.$$bidiFormatterCache_[a] = new f.i18n.BidiFormatter(a))
};
x.$$bidiTextDir = function (a, c) {
    var d = y.getContentDir(a);
    if (null != d)return d;
    d = c || y.isContentKind(a, y.SanitizedContentKind.HTML);
    return f.i18n.bidi.estimateDirection(a + "", d)
};
x.$$bidiDirAttr = function (a, c, d) {
    a = x.$$getBidiFormatterInstance_(a);
    var e = y.getContentDir(c);
    null == e && (d = d || y.isContentKind(c, y.SanitizedContentKind.HTML), e = f.i18n.bidi.estimateDirection(c + "", d));
    return y.VERY_UNSAFE.ordainSanitizedHtmlAttribute(a.knownDirAttr(e))
};
x.$$bidiMarkAfter = function (a, c, d) {
    a = x.$$getBidiFormatterInstance_(a);
    d = d || y.isContentKind(c, y.SanitizedContentKind.HTML);
    return a.markAfterKnownDir(y.getContentDir(c), c + "", d)
};
x.$$bidiSpanWrap = function (a, c) {
    var d = x.$$getBidiFormatterInstance_(a), e = f.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(f.string.Const.from("Soy |bidiSpanWrap is applied on an autoescaped text."), String(c)), d = d.spanWrapSafeHtmlWithKnownDir(y.getContentDir(c), e);
    return f.html.SafeHtml.unwrap(d)
};
x.$$bidiUnicodeWrap = function (a, c) {
    var d = x.$$getBidiFormatterInstance_(a), e = y.isContentKind(c, y.SanitizedContentKind.HTML), g = d.unicodeWrapWithKnownDir(y.getContentDir(c), c + "", e), d = d.getContextDir();
    return y.isContentKind(c, y.SanitizedContentKind.TEXT) ? new y.UnsanitizedText(g, d) : e ? y.VERY_UNSAFE.ordainSanitizedHtml(g, d) : y.isContentKind(c, y.SanitizedContentKind.JS_STR_CHARS) ? y.VERY_UNSAFE.ordainSanitizedJsStrChars(g, d) : g
};
x.esc.$$escapeHtmlHelper = function (a) {
    return f.string.htmlEscape(String(a))
};
x.esc.$$escapeUriHelper = function (a) {
    return f.string.urlEncode(String(a))
};
x.esc.$$ESCAPE_MAP_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = {"\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;"};
x.esc.$$REPLACER_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = function (a) {
    return x.esc.$$ESCAPE_MAP_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]
};
x.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = {"\x00": "\\x00", "\b": "\\x08", "\t": "\\t", "\n": "\\n", "\x0B": "\\x0b", "\f": "\\f", "\r": "\\r", '"': "\\x22", $: "\\x24", "&": "\\x26", "'": "\\x27", "(": "\\x28", ")": "\\x29", "*": "\\x2a", "+": "\\x2b", ",": "\\x2c", "-": "\\x2d", ".": "\\x2e", "/": "\\/", ":": "\\x3a", "<": "\\x3c", "=": "\\x3d", ">": "\\x3e", "?": "\\x3f", "[": "\\x5b", "\\": "\\\\", "]": "\\x5d", "^": "\\x5e", "{": "\\x7b", "|": "\\x7c", "}": "\\x7d", "\u0085": "\\x85", "\u2028": "\\u2028", "\u2029": "\\u2029"};
x.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = function (a) {
    return x.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]
};
x.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_ = {"\x00": "\\0 ", "\b": "\\8 ", "\t": "\\9 ", "\n": "\\a ", "\x0B": "\\b ", "\f": "\\c ", "\r": "\\d ", '"': "\\22 ", "&": "\\26 ", "'": "\\27 ", "(": "\\28 ", ")": "\\29 ", "*": "\\2a ", "/": "\\2f ", ":": "\\3a ", ";": "\\3b ", "<": "\\3c ", "=": "\\3d ", ">": "\\3e ", "@": "\\40 ", "\\": "\\5c ", "{": "\\7b ", "}": "\\7d ", "\u0085": "\\85 ", "\u00a0": "\\a0 ", "\u2028": "\\2028 ", "\u2029": "\\2029 "};
x.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_ = function (a) {
    return x.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]
};
x.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = {"\x00": "%00", "\u0001": "%01", "\u0002": "%02", "\u0003": "%03", "\u0004": "%04", "\u0005": "%05", "\u0006": "%06", "\u0007": "%07", "\b": "%08", "\t": "%09", "\n": "%0A", "\x0B": "%0B", "\f": "%0C", "\r": "%0D", "\u000e": "%0E", "\u000f": "%0F", "\u0010": "%10", "\u0011": "%11", "\u0012": "%12", "\u0013": "%13", "\u0014": "%14", "\u0015": "%15", "\u0016": "%16", "\u0017": "%17", "\u0018": "%18", "\u0019": "%19", "\u001a": "%1A", "\u001b": "%1B", "\u001c": "%1C", "\u001d": "%1D", "\u001e": "%1E",
    "\u001f": "%1F", " ": "%20", '"': "%22", "'": "%27", "(": "%28", ")": "%29", "<": "%3C", ">": "%3E", "\\": "%5C", "{": "%7B", "}": "%7D", "\u007f": "%7F", "\u0085": "%C2%85", "\u00a0": "%C2%A0", "\u2028": "%E2%80%A8", "\u2029": "%E2%80%A9", "\uff01": "%EF%BC%81", "\uff03": "%EF%BC%83", "\uff04": "%EF%BC%84", "\uff06": "%EF%BC%86", "\uff07": "%EF%BC%87", "\uff08": "%EF%BC%88", "\uff09": "%EF%BC%89", "\uff0a": "%EF%BC%8A", "\uff0b": "%EF%BC%8B", "\uff0c": "%EF%BC%8C", "\uff0f": "%EF%BC%8F", "\uff1a": "%EF%BC%9A", "\uff1b": "%EF%BC%9B", "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F", "\uff20": "%EF%BC%A0", "\uff3b": "%EF%BC%BB", "\uff3d": "%EF%BC%BD"};
x.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = function (a) {
    return x.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]
};
x.esc.$$MATCHER_FOR_NORMALIZE_HTML_ = /[\x00\x22\x27\x3c\x3e]/g;
x.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
x.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
x.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_ = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;
x.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_ = /[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;
x.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_ = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
x.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
x.esc.$$FILTER_FOR_FILTER_CSS_VALUE_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
x.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_ = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
x.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_ = /^data:image\/(?:bmp|gif|jpe?g|png|tiff|webp);base64,[a-z0-9+\/]+=*$/i;
x.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_ = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;
x.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_ = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;
x.esc.$$normalizeHtmlHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_NORMALIZE_HTML_, x.esc.$$REPLACER_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
x.esc.$$escapeHtmlNospaceHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_, x.esc.$$REPLACER_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
x.esc.$$normalizeHtmlNospaceHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_, x.esc.$$REPLACER_FOR_NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
x.esc.$$escapeJsStringHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_, x.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
x.esc.$$escapeJsRegexHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_, x.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
x.esc.$$escapeCssStringHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_, x.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
};
x.esc.$$filterCssValueHelper = function (a) {
    a = String(a);
    return x.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(a) ? a : (f.asserts.fail("Bad value `%s` for |filterCssValue", [a]), "zSoyz")
};
x.esc.$$normalizeUriHelper = function (a) {
    a = String(a);
    return a.replace(x.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, x.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
};
x.esc.$$filterNormalizeUriHelper = function (a) {
    a = String(a);
    return x.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(a) ? a.replace(x.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, x.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_) : (f.asserts.fail("Bad value `%s` for |filterNormalizeUri", [a]), "#zSoyz")
};
x.esc.$$filterImageDataUriHelper = function (a) {
    a = String(a);
    return x.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_.test(a) ? a : (f.asserts.fail("Bad value `%s` for |filterImageDataUri", [a]), "data:image/gif;base64,zSoyz")
};
x.esc.$$filterHtmlAttributesHelper = function (a) {
    a = String(a);
    return x.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_.test(a) ? a : (f.asserts.fail("Bad value `%s` for |filterHtmlAttributes", [a]), "zSoyz")
};
x.esc.$$filterHtmlElementNameHelper = function (a) {
    a = String(a);
    return x.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(a) ? a : (f.asserts.fail("Bad value `%s` for |filterHtmlElementName", [a]), "zSoyz")
};
x.esc.$$HTML_TAG_REGEX_ = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
x.esc.$$LT_REGEX_ = /</g;
x.esc.$$SAFE_TAG_WHITELIST_ = {b: 1, br: 1, em: 1, i: 1, s: 1, sub: 1, sup: 1, u: 1};
w.templates = {};
w.templates.button = {};
w.templates.button.strict = function (a, c, d) {
    a = a || {};
    return y.VERY_UNSAFE.ordainSanitizedHtml('<div role="button"' + (a.id ? ' id="' + x.$$escapeHtmlAttribute(a.id) + '"' : "") + ' class="' + x.$$escapeHtmlAttribute(w.templates.button.classes_(a, null, d)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.tabindex ? x.$$escapeHtmlAttribute(a.tabindex) : "0") + '"') + (a.title ? " " + (a.usingKennedyTooltip ? "data-tooltip" : "title") + '="' + x.$$escapeHtmlAttribute(a.title) + '"' : "") + (a.value ? ' value="' + x.$$escapeHtmlAttribute(a.value) +
        '"' : "") + (a.attributes ? " " + x.$$filterHtmlAttributes(a.attributes) : "") + ">" + x.$$escapeHtml(null != a.content ? a.content : "") + "</div>")
};
f.DEBUG && (w.templates.button.strict.soyTemplateName = "jfk.templates.button.strict");
w.templates.button.main = function (a, c, d) {
    a = a || {};
    return"" + w.templates.button.strict(x.$$augmentMap(a, {attributes: y.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks("" + (a.attributesHtml ? x.$$filterNoAutoescape(a.attributesHtml) : "") + (a.action ? ' action="' + x.$$escapeHtmlAttribute(x.$$filterNormalizeUri(a.action)) + '"' : "")), content: y.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (a.contentHtml ? x.$$filterNoAutoescape(a.contentHtml) : ""))}), null, d)
};
f.DEBUG && (w.templates.button.main.soyTemplateName = "jfk.templates.button.main");
w.templates.button.classes_ = function (a) {
    a = a || {};
    var c = "goog-inline-block jfk-button ";
    switch (a.style) {
        case 0:
            c += "jfk-button-standard";
            break;
        case 2:
            c += "jfk-button-action";
            break;
        case 3:
            c += "jfk-button-primary";
            break;
        case 1:
            c += "jfk-button-default";
            break;
        case 4:
            c += "jfk-button-flat";
            break;
        case 5:
            c += "jfk-button-mini";
            break;
        case 6:
            c += "jfk-button-contrast";
            break;
        default:
            c += "jfk-button-standard"
    }
    c += (1 == a.width ? " jfk-button-narrow" : "") + (a.checked ? " jfk-button-checked" : "") + (a.classes ? " " + a.classes : "") + (a.disabled ?
        " jfk-button-disabled" : "");
    return y.markUnsanitizedText(c)
};
f.DEBUG && (w.templates.button.classes_.soyTemplateName = "jfk.templates.button.classes_");
w.templates.button.search = function (a, c, d) {
    a = a || {};
    return y.VERY_UNSAFE.ordainSanitizedHtml(w.templates.button.strict({style: 2, content: y.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + w.templates.button.searchIcon_(null, null, d)), classes: a.classes, tabindex: a.tabindex}, null, d))
};
f.DEBUG && (w.templates.button.search.soyTemplateName = "jfk.templates.button.search");
w.templates.button.searchIcon_ = function () {
    return y.VERY_UNSAFE.ordainSanitizedHtml('<img src="//ssl.gstatic.com/ui/v1/button/search-white.png" style="width: 21px; height: 21px;" class="jfk-button-img">')
};
f.DEBUG && (w.templates.button.searchIcon_.soyTemplateName = "jfk.templates.button.searchIcon_");
var A = {jfk: {}};
A.jfk.ButtonStyle = {};
A.jfk.ButtonStyle.Style = {STANDARD: 0, DEFAULT: 1, ACTION: 2, PRIMARY: 3, FLAT: 4, MINI: 5, CONTRAST: 6};
A.jfk.ButtonStyle.Width = {NORMAL: 0, NARROW: 1};
w.Button = function (a, c, d, e) {
    f.ui.Button.call(this, a, w.ButtonRenderer_.getInstance(), c);
    this.style_ = d || w.Button.Style.STANDARD;
    this.width_ = e || w.Button.Width.NORMAL;
    this.usingKennedyTooltip_ = !1
};
f.inherits(w.Button, f.ui.Button);
w.Button.CSS_NAME = "jfk-button";
b = w.Button.prototype;
b.getStyle = function () {
    return this.style_
};
b.getWidth = function () {
    return this.width_
};
b.isUsingKennedyTooltip = function () {
    return this.usingKennedyTooltip_
};
b.setStyle = function (a) {
    this.style_ != a && (this.style_ = a, this.maybeUpdateElement_())
};
b.setWidth = function (a) {
    this.width_ != a && (this.width_ = a, this.maybeUpdateElement_())
};
b.setUsingKennedyTooltip = function (a) {
    this.usingKennedyTooltip_ = a
};
b.setTooltip = function (a) {
    this.setTooltipInternal(a);
    var c = this.getElement();
    c && a && (this.usingKennedyTooltip_ ? w.tooltipManager.setTooltipText(c, a) : c.title = a)
};
b.setEnabled = function (a) {
    this.isEnabled() != a && (w.Button.superClass_.setEnabled.call(this, a), this.maybeUpdateElement_())
};
b.setFocused = function (a) {
    w.Button.superClass_.setFocused.call(this, a);
    this.setNoFocusOutline_(!1)
};
b.handleMouseDown = function (a) {
    w.Button.superClass_.handleMouseDown.call(this, a);
    this.isEnabled() && this.setNoFocusOutline_(!0)
};
b.handleMouseUp = function (a) {
    w.Button.superClass_.handleMouseUp.call(this, a);
    this.isEnabled() && this.setNoFocusOutline_(!0)
};
b.setNoFocusOutline_ = function (a) {
    this.getElement() && f.dom.classlist.enable(this.getElement(), w.Button.CSS_NAME + "-clear-outline", a)
};
b.maybeUpdateElement_ = function () {
    this.getElement() && this.getRenderer().updateButtonStyles(this)
};
w.Button.Style = A.jfk.ButtonStyle.Style;
w.Button.Width = A.jfk.ButtonStyle.Width;
w.Button.createDefaultButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.DEFAULT)
};
w.Button.createActionButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.ACTION)
};
w.Button.createPrimaryButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.PRIMARY)
};
w.Button.createFlatButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.FLAT)
};
w.Button.createContrastButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.CONTRAST)
};
w.Button.createSearchButton = function (a) {
    return w.Button.createActionButton(w.Button.createIconContent(w.Button.SEARCH_BUTTON_SRC_), a)
};
w.Button.createToggleButton = function (a, c) {
    var d = new w.Button(a, c);
    d.setSupportedState(f.ui.Component.State.CHECKED, !0);
    return d
};
w.Button.createMiniButton = function (a, c) {
    return new w.Button(a, c, w.Button.Style.MINI)
};
w.Button.SEARCH_BUTTON_SRC_ = "//ssl.gstatic.com/ui/v1/button/search-white.png";
w.Button.createIconContent = function (a, c) {
    if (f.isString(a)) {
        var d = a;
        a = f.dom.createDom("img");
        a.src = d;
        f.style.setSize(a, 21, 21)
    }
    f.dom.classlist.add(a, "jfk-button-img");
    d = [];
    d.push(a);
    if (c) {
        var e = f.dom.createDom("span", "jfk-button-label", c);
        d.push(e)
    }
    return d
};
w.ButtonRenderer_ = function () {
    this.standardButtonClass_ = this.getCssClass() + "-standard";
    this.actionButtonClass_ = this.getCssClass() + "-action";
    this.primaryButtonClass_ = this.getCssClass() + "-primary";
    this.defaultButtonClass_ = this.getCssClass() + "-default";
    this.flatButtonClass_ = this.getCssClass() + "-flat";
    this.narrowButtonClass_ = this.getCssClass() + "-narrow";
    this.miniButtonClass_ = this.getCssClass() + "-mini";
    this.contrastButtonClass_ = this.getCssClass() + "-contrast"
};
f.inherits(w.ButtonRenderer_, f.ui.ButtonRenderer);
f.addSingletonGetter(w.ButtonRenderer_);
w.ButtonRenderer_.prototype.updateButton_ = function (a, c, d) {
    a && d.setStyle(a);
    c && d.setWidth(c)
};
w.ButtonRenderer_.prototype.getCssClass = function () {
    return w.Button.CSS_NAME
};
w.ButtonRenderer_.prototype.createDom = function (a) {
    f.asserts.assertInstanceof(a, w.Button, "Button is expected to be instance of jfk.Button");
    var c = a.getDomHelper(), d = f.soy.renderAsElement(w.templates.button.strict, {disabled: !a.isEnabled(), checked: a.isChecked(), style: a.getStyle(), title: a.getTooltip(), usingKennedyTooltip: a.isUsingKennedyTooltip(), value: a.getValue(), width: a.getWidth()}, void 0, c);
    c.append(d, a.getContent());
    this.decorate(a, d);
    return d
};
w.ButtonRenderer_.prototype.decorate = function (a, c) {
    w.ButtonRenderer_.superClass_.decorate.call(this, a, c);
    this.classNamesToButtonUpdater_ || (this.classNamesToButtonUpdater_ = f.object.create(this.standardButtonClass_, f.partial(this.updateButton_, w.Button.Style.STANDARD, null), this.actionButtonClass_, f.partial(this.updateButton_, w.Button.Style.ACTION, null), this.primaryButtonClass_, f.partial(this.updateButton_, w.Button.Style.PRIMARY, null), this.defaultButtonClass_, f.partial(this.updateButton_, w.Button.Style.DEFAULT,
        null), this.flatButtonClass_, f.partial(this.updateButton_, w.Button.Style.FLAT, null), this.miniButtonClass_, f.partial(this.updateButton_, w.Button.Style.MINI, null), this.contrastButtonClass_, f.partial(this.updateButton_, w.Button.Style.CONTRAST, null), this.narrowButtonClass_, f.partial(this.updateButton_, null, w.Button.Width.NARROW)));
    for (var d = f.dom.classlist.get(c), e = 0; e < d.length; ++e) {
        var g = this.classNamesToButtonUpdater_[d[e]];
        g && g(a)
    }
    if (d = c.getAttribute("data-tooltip"))a.setTooltipInternal(d), a.setUsingKennedyTooltip(!0);
    return c
};
w.ButtonRenderer_.VALUE_ATTRIBUTE_ = "value";
w.ButtonRenderer_.prototype.getValue = function (a) {
    return a.getAttribute(w.ButtonRenderer_.VALUE_ATTRIBUTE_) || ""
};
w.ButtonRenderer_.prototype.setValue = function (a, c) {
    a && a.setAttribute(w.ButtonRenderer_.VALUE_ATTRIBUTE_, c)
};
w.ButtonRenderer_.prototype.setState = function (a, c, d) {
    w.ButtonRenderer_.superClass_.setState.call(this, a, c, d);
    if (c == f.ui.Component.State.FOCUSED)try {
        var e = a.getElement();
        d ? e.focus() : e.blur()
    } catch (g) {
    }
};
w.ButtonRenderer_.prototype.updateButtonStyles = function (a) {
    function c(a, c) {
        (a ? d : e).push(c)
    }

    f.asserts.assert(a.getElement(), "Button element must already exist when updating style.");
    var d = [], e = [], g = a.getStyle();
    c(g == w.Button.Style.STANDARD, this.standardButtonClass_);
    c(g == w.Button.Style.ACTION, this.actionButtonClass_);
    c(g == w.Button.Style.PRIMARY, this.primaryButtonClass_);
    c(g == w.Button.Style.FLAT, this.flatButtonClass_);
    c(g == w.Button.Style.MINI, this.miniButtonClass_);
    c(g == w.Button.Style.DEFAULT, this.defaultButtonClass_);
    c(g == w.Button.Style.CONTRAST, this.contrastButtonClass_);
    c(a.getWidth() == w.Button.Width.NARROW, this.narrowButtonClass_);
    c(!a.isEnabled(), this.getCssClass() + "-disabled");
    f.dom.classlist.removeAll(a.getElement(), e);
    f.dom.classlist.addAll(a.getElement(), d)
};
k.soy = {};
k.soy.Popup = {};
k.soy.Popup.renderMain = function (a) {
    return'<div class="header"><div class="header-text">Page Analytics by Google</div></div><div class="content"><div class="popup-connected"><div class="connected-icon"></div>Connected to Google Analytics</div><div class="popup-controls">' + (a.showControls ? '<label class="popup-controls-label">Data panel</label>' : "You don't see data for 1 of the following reasons:<ul><li>Logged into multiple Google accounts or the wrong Google account: Try logging out for all of your Google accounts and logging back into your main analytics account<li>We couldn't find any Google Analytics tags on the page<li>You don't have access to the analytics data for this page</ul>") + "</div></div>" +
        k.soy.Popup.footer(null)
};
f.DEBUG && (k.soy.Popup.renderMain.soyTemplateName = "gaext.soy.Popup.renderMain");
k.soy.Popup.renderSignIn = function () {
    return'<div class="header"><div class="header-text">Page Analytics by Google</div></div><div class="content"><div class="popup-connected"><div class="not-connected-icon"></div>Connect to your Google Analytics account.</div><div class="sign-in-button"></div></div>' + k.soy.Popup.footer(null)
};
f.DEBUG && (k.soy.Popup.renderSignIn.soyTemplateName = "gaext.soy.Popup.renderSignIn");
k.soy.Popup.footer = function () {
    return'<div class=\'footer\'><div class="popup-logo"></div><div class="feedback"><a href="https://plus.google.com/communities/109213383987078350729" target="_blank">Send Feedback</a></div></div>'
};
f.DEBUG && (k.soy.Popup.footer.soyTemplateName = "gaext.soy.Popup.footer");
f.ui.ContainerRenderer = function (a) {
    this.ariaRole_ = a
};
f.addSingletonGetter(f.ui.ContainerRenderer);
f.ui.ContainerRenderer.getCustomRenderer = function (a, c) {
    var d = new a;
    d.getCssClass = function () {
        return c
    };
    return d
};
f.ui.ContainerRenderer.CSS_CLASS = "goog-container";
b = f.ui.ContainerRenderer.prototype;
b.getAriaRole = function () {
    return this.ariaRole_
};
b.enableTabIndex = function (a, c) {
    a && (a.tabIndex = c ? 0 : -1)
};
b.createDom = function (a) {
    return a.getDomHelper().createDom("div", this.getClassNames(a).join(" "))
};
b.getContentElement = function (a) {
    return a
};
b.canDecorate = function (a) {
    return"DIV" == a.tagName
};
b.decorate = function (a, c) {
    c.id && a.setId(c.id);
    var d = this.getCssClass(), e = !1, g = f.dom.classlist.get(c);
    g && f.array.forEach(g, function (c) {
        c == d ? e = !0 : c && this.setStateFromClassName(a, c, d)
    }, this);
    e || f.dom.classlist.add(c, d);
    this.decorateChildren(a, this.getContentElement(c));
    return c
};
b.setStateFromClassName = function (a, c, d) {
    c == d + "-disabled" ? a.setEnabled(!1) : c == d + "-horizontal" ? a.setOrientation(f.ui.Container.Orientation.HORIZONTAL) : c == d + "-vertical" && a.setOrientation(f.ui.Container.Orientation.VERTICAL)
};
b.decorateChildren = function (a, c, d) {
    if (c) {
        d = d || c.firstChild;
        for (var e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (d.nodeType == f.dom.NodeType.ELEMENT) {
                var g = this.getDecoratorForChild(d);
                g && (g.setElementInternal(d), a.isEnabled() || g.setEnabled(!1), a.addChild(g), g.decorate(d))
            } else d.nodeValue && "" != f.string.trim(d.nodeValue) || c.removeChild(d);
            d = e
        }
    }
};
b.getDecoratorForChild = function (a) {
    return f.ui.registry.getDecorator(a)
};
b.initializeDom = function (a) {
    a = a.getElement();
    f.asserts.assert(a, "The container DOM element cannot be null.");
    f.style.setUnselectable(a, !0, f.userAgent.GECKO);
    f.userAgent.IE && (a.hideFocus = !0);
    var c = this.getAriaRole();
    c && f.a11y.aria.setRole(a, c)
};
b.getKeyEventTarget = function (a) {
    return a.getElement()
};
b.getCssClass = function () {
    return f.ui.ContainerRenderer.CSS_CLASS
};
b.getClassNames = function (a) {
    var c = this.getCssClass(), d = a.getOrientation() == f.ui.Container.Orientation.HORIZONTAL, d = [c, d ? c + "-horizontal" : c + "-vertical"];
    a.isEnabled() || d.push(c + "-disabled");
    return d
};
b.getDefaultOrientation = function () {
    return f.ui.Container.Orientation.VERTICAL
};
f.ui.Container = function (a, c, d) {
    f.ui.Component.call(this, d);
    this.renderer_ = c || f.ui.ContainerRenderer.getInstance();
    this.orientation_ = a || this.renderer_.getDefaultOrientation()
};
f.inherits(f.ui.Container, f.ui.Component);
f.tagUnsealableClass(f.ui.Container);
f.ui.Container.EventType = {AFTER_SHOW: "aftershow", AFTER_HIDE: "afterhide"};
f.ui.Container.Orientation = {HORIZONTAL: "horizontal", VERTICAL: "vertical"};
b = f.ui.Container.prototype;
b.keyEventTarget_ = null;
b.keyHandler_ = null;
b.renderer_ = null;
b.orientation_ = null;
b.visible_ = !0;
b.enabled_ = !0;
b.focusable_ = !0;
b.highlightedIndex_ = -1;
b.openItem_ = null;
b.mouseButtonPressed_ = !1;
b.allowFocusableChildren_ = !1;
b.openFollowsHighlight_ = !0;
b.childElementIdMap_ = null;
b.getKeyEventTarget = function () {
    return this.keyEventTarget_ || this.renderer_.getKeyEventTarget(this)
};
b.getKeyHandler = function () {
    return this.keyHandler_ || (this.keyHandler_ = new f.events.KeyHandler(this.getKeyEventTarget()))
};
b.getRenderer = function () {
    return this.renderer_
};
b.createDom = function () {
    this.setElementInternal(this.renderer_.createDom(this))
};
b.getContentElement = function () {
    return this.renderer_.getContentElement(this.getElement())
};
b.canDecorate = function (a) {
    return this.renderer_.canDecorate(a)
};
b.decorateInternal = function (a) {
    this.setElementInternal(this.renderer_.decorate(this, a));
    "none" == a.style.display && (this.visible_ = !1)
};
b.enterDocument = function () {
    f.ui.Container.superClass_.enterDocument.call(this);
    this.forEachChild(function (a) {
        a.isInDocument() && this.registerChildId_(a)
    }, this);
    var a = this.getElement();
    this.renderer_.initializeDom(this);
    this.setVisible(this.visible_, !0);
    this.getHandler().listen(this, f.ui.Component.EventType.ENTER, this.handleEnterItem).listen(this, f.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem).listen(this, f.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem).listen(this, f.ui.Component.EventType.OPEN,
        this.handleOpenItem).listen(this, f.ui.Component.EventType.CLOSE, this.handleCloseItem).listen(a, f.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(f.dom.getOwnerDocument(a), f.events.EventType.MOUSEUP, this.handleDocumentMouseUp).listen(a, [f.events.EventType.MOUSEDOWN, f.events.EventType.MOUSEUP, f.events.EventType.MOUSEOVER, f.events.EventType.MOUSEOUT, f.events.EventType.CONTEXTMENU], this.handleChildMouseEvents);
    this.isFocusable() && this.enableFocusHandling_(!0)
};
b.enableFocusHandling_ = function (a) {
    var c = this.getHandler(), d = this.getKeyEventTarget();
    a ? c.listen(d, f.events.EventType.FOCUS, this.handleFocus).listen(d, f.events.EventType.BLUR, this.handleBlur).listen(this.getKeyHandler(), f.events.KeyHandler.EventType.KEY, this.handleKeyEvent) : c.unlisten(d, f.events.EventType.FOCUS, this.handleFocus).unlisten(d, f.events.EventType.BLUR, this.handleBlur).unlisten(this.getKeyHandler(), f.events.KeyHandler.EventType.KEY, this.handleKeyEvent)
};
b.exitDocument = function () {
    this.setHighlightedIndex(-1);
    this.openItem_ && this.openItem_.setOpen(!1);
    this.mouseButtonPressed_ = !1;
    f.ui.Container.superClass_.exitDocument.call(this)
};
b.disposeInternal = function () {
    f.ui.Container.superClass_.disposeInternal.call(this);
    this.keyHandler_ && (this.keyHandler_.dispose(), this.keyHandler_ = null);
    this.renderer_ = this.openItem_ = this.childElementIdMap_ = this.keyEventTarget_ = null
};
b.handleEnterItem = function () {
    return!0
};
b.handleHighlightItem = function (a) {
    var c = this.indexOfChild(a.target);
    if (-1 < c && c != this.highlightedIndex_) {
        var d = this.getHighlighted();
        d && d.setHighlighted(!1);
        this.highlightedIndex_ = c;
        d = this.getHighlighted();
        this.isMouseButtonPressed() && d.setActive(!0);
        this.openFollowsHighlight_ && this.openItem_ && d != this.openItem_ && (d.isSupportedState(f.ui.Component.State.OPENED) ? d.setOpen(!0) : this.openItem_.setOpen(!1))
    }
    c = this.getElement();
    f.asserts.assert(c, "The DOM element for the container cannot be null.");
    null !=
    a.target.getElement() && f.a11y.aria.setState(c, f.a11y.aria.State.ACTIVEDESCENDANT, a.target.getElement().id)
};
b.handleUnHighlightItem = function (a) {
    a.target == this.getHighlighted() && (this.highlightedIndex_ = -1);
    a = this.getElement();
    f.asserts.assert(a, "The DOM element for the container cannot be null.");
    f.a11y.aria.removeState(a, f.a11y.aria.State.ACTIVEDESCENDANT)
};
b.handleOpenItem = function (a) {
    (a = a.target) && a != this.openItem_ && a.getParent() == this && (this.openItem_ && this.openItem_.setOpen(!1), this.openItem_ = a)
};
b.handleCloseItem = function (a) {
    a.target == this.openItem_ && (this.openItem_ = null)
};
b.handleMouseDown = function (a) {
    this.enabled_ && this.setMouseButtonPressed(!0);
    var c = this.getKeyEventTarget();
    c && f.dom.isFocusableTabIndex(c) ? c.focus() : a.preventDefault()
};
b.handleDocumentMouseUp = function () {
    this.setMouseButtonPressed(!1)
};
b.handleChildMouseEvents = function (a) {
    var c = this.getOwnerControl(a.target);
    if (c)switch (a.type) {
        case f.events.EventType.MOUSEDOWN:
            c.handleMouseDown(a);
            break;
        case f.events.EventType.MOUSEUP:
            c.handleMouseUp(a);
            break;
        case f.events.EventType.MOUSEOVER:
            c.handleMouseOver(a);
            break;
        case f.events.EventType.MOUSEOUT:
            c.handleMouseOut(a);
            break;
        case f.events.EventType.CONTEXTMENU:
            c.handleContextMenu(a)
    }
};
b.getOwnerControl = function (a) {
    if (this.childElementIdMap_)for (var c = this.getElement(); a && a !== c;) {
        var d = a.id;
        if (d in this.childElementIdMap_)return this.childElementIdMap_[d];
        a = a.parentNode
    }
    return null
};
b.handleFocus = function () {
};
b.handleBlur = function () {
    this.setHighlightedIndex(-1);
    this.setMouseButtonPressed(!1);
    this.openItem_ && this.openItem_.setOpen(!1)
};
b.handleKeyEvent = function (a) {
    return this.isEnabled() && this.isVisible() && (0 != this.getChildCount() || this.keyEventTarget_) && this.handleKeyEventInternal(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
b.handleKeyEventInternal = function (a) {
    var c = this.getHighlighted();
    if (c && "function" == typeof c.handleKeyEvent && c.handleKeyEvent(a) || this.openItem_ && this.openItem_ != c && "function" == typeof this.openItem_.handleKeyEvent && this.openItem_.handleKeyEvent(a))return!0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)return!1;
    switch (a.keyCode) {
        case f.events.KeyCodes.ESC:
            if (this.isFocusable())this.getKeyEventTarget().blur(); else return!1;
            break;
        case f.events.KeyCodes.HOME:
            this.highlightFirst();
            break;
        case f.events.KeyCodes.END:
            this.highlightLast();
            break;
        case f.events.KeyCodes.UP:
            if (this.orientation_ == f.ui.Container.Orientation.VERTICAL)this.highlightPrevious(); else return!1;
            break;
        case f.events.KeyCodes.LEFT:
            if (this.orientation_ == f.ui.Container.Orientation.HORIZONTAL)this.isRightToLeft() ? this.highlightNext() : this.highlightPrevious(); else return!1;
            break;
        case f.events.KeyCodes.DOWN:
            if (this.orientation_ == f.ui.Container.Orientation.VERTICAL)this.highlightNext(); else return!1;
            break;
        case f.events.KeyCodes.RIGHT:
            if (this.orientation_ == f.ui.Container.Orientation.HORIZONTAL)this.isRightToLeft() ?
                this.highlightPrevious() : this.highlightNext(); else return!1;
            break;
        default:
            return!1
    }
    return!0
};
b.registerChildId_ = function (a) {
    var c = a.getElement(), c = c.id || (c.id = a.getId());
    this.childElementIdMap_ || (this.childElementIdMap_ = {});
    this.childElementIdMap_[c] = a
};
b.addChild = function (a, c) {
    f.asserts.assertInstanceof(a, f.ui.Control, "The child of a container must be a control");
    f.ui.Container.superClass_.addChild.call(this, a, c)
};
b.addChildAt = function (a, c, d) {
    a.setDispatchTransitionEvents(f.ui.Component.State.HOVER, !0);
    a.setDispatchTransitionEvents(f.ui.Component.State.OPENED, !0);
    !this.isFocusable() && this.isFocusableChildrenAllowed() || a.setSupportedState(f.ui.Component.State.FOCUSED, !1);
    a.setHandleMouseEvents(!1);
    f.ui.Container.superClass_.addChildAt.call(this, a, c, d);
    a.isInDocument() && this.isInDocument() && this.registerChildId_(a);
    c <= this.highlightedIndex_ && this.highlightedIndex_++
};
b.removeChild = function (a, c) {
    if (a = f.isString(a) ? this.getChild(a) : a) {
        var d = this.indexOfChild(a);
        -1 != d && (d == this.highlightedIndex_ ? (a.setHighlighted(!1), this.highlightedIndex_ = -1) : d < this.highlightedIndex_ && this.highlightedIndex_--);
        (d = a.getElement()) && d.id && this.childElementIdMap_ && f.object.remove(this.childElementIdMap_, d.id)
    }
    a = f.ui.Container.superClass_.removeChild.call(this, a, c);
    a.setHandleMouseEvents(!0);
    return a
};
b.getOrientation = function () {
    return this.orientation_
};
b.setOrientation = function (a) {
    if (this.getElement())throw Error(f.ui.Component.Error.ALREADY_RENDERED);
    this.orientation_ = a
};
b.isVisible = function () {
    return this.visible_
};
b.setVisible = function (a, c) {
    if (c || this.visible_ != a && this.dispatchEvent(a ? f.ui.Component.EventType.SHOW : f.ui.Component.EventType.HIDE)) {
        this.visible_ = a;
        var d = this.getElement();
        d && (f.style.setElementShown(d, a), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), this.enabled_ && this.visible_), c || this.dispatchEvent(this.visible_ ? f.ui.Container.EventType.AFTER_SHOW : f.ui.Container.EventType.AFTER_HIDE));
        return!0
    }
    return!1
};
b.isEnabled = function () {
    return this.enabled_
};
b.setEnabled = function (a) {
    this.enabled_ != a && this.dispatchEvent(a ? f.ui.Component.EventType.ENABLE : f.ui.Component.EventType.DISABLE) && (a ? (this.enabled_ = !0, this.forEachChild(function (a) {
        a.wasDisabled ? delete a.wasDisabled : a.setEnabled(!0)
    })) : (this.forEachChild(function (a) {
        a.isEnabled() ? a.setEnabled(!1) : a.wasDisabled = !0
    }), this.enabled_ = !1, this.setMouseButtonPressed(!1)), this.isFocusable() && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a && this.visible_))
};
b.isFocusable = function () {
    return this.focusable_
};
b.setFocusable = function (a) {
    a != this.focusable_ && this.isInDocument() && this.enableFocusHandling_(a);
    this.focusable_ = a;
    this.enabled_ && this.visible_ && this.renderer_.enableTabIndex(this.getKeyEventTarget(), a)
};
b.isFocusableChildrenAllowed = function () {
    return this.allowFocusableChildren_
};
b.setHighlightedIndex = function (a) {
    (a = this.getChildAt(a)) ? a.setHighlighted(!0) : -1 < this.highlightedIndex_ && this.getHighlighted().setHighlighted(!1)
};
b.setHighlighted = function (a) {
    this.setHighlightedIndex(this.indexOfChild(a))
};
b.getHighlighted = function () {
    return this.getChildAt(this.highlightedIndex_)
};
b.highlightFirst = function () {
    this.highlightHelper(function (a, c) {
        return(a + 1) % c
    }, this.getChildCount() - 1)
};
b.highlightLast = function () {
    this.highlightHelper(function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
};
b.highlightNext = function () {
    this.highlightHelper(function (a, c) {
        return(a + 1) % c
    }, this.highlightedIndex_)
};
b.highlightPrevious = function () {
    this.highlightHelper(function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, this.highlightedIndex_)
};
b.highlightHelper = function (a, c) {
    for (var d = 0 > c ? this.indexOfChild(this.openItem_) : c, e = this.getChildCount(), d = a.call(this, d, e), g = 0; g <= e;) {
        var h = this.getChildAt(d);
        if (h && this.canHighlightItem(h))return this.setHighlightedIndexFromKeyEvent(d), !0;
        g++;
        d = a.call(this, d, e)
    }
    return!1
};
b.canHighlightItem = function (a) {
    return a.isVisible() && a.isEnabled() && a.isSupportedState(f.ui.Component.State.HOVER)
};
b.setHighlightedIndexFromKeyEvent = function (a) {
    this.setHighlightedIndex(a)
};
b.isMouseButtonPressed = function () {
    return this.mouseButtonPressed_
};
b.setMouseButtonPressed = function (a) {
    this.mouseButtonPressed_ = a
};
f.ui.SelectionModel = function (a) {
    f.events.EventTarget.call(this);
    this.items_ = [];
    this.addItems(a)
};
f.inherits(f.ui.SelectionModel, f.events.EventTarget);
f.tagUnsealableClass(f.ui.SelectionModel);
b = f.ui.SelectionModel.prototype;
b.selectedItem_ = null;
b.selectionHandler_ = null;
b.setSelectionHandler = function (a) {
    this.selectionHandler_ = a
};
b.getItemCount = function () {
    return this.items_.length
};
b.indexOfItem = function (a) {
    return a ? f.array.indexOf(this.items_, a) : -1
};
b.getFirst = function () {
    return this.items_[0]
};
b.getItemAt = function (a) {
    return this.items_[a] || null
};
b.addItems = function (a) {
    a && (f.array.forEach(a, function (a) {
        this.selectItem_(a, !1)
    }, this), f.array.extend(this.items_, a))
};
b.addItem = function (a) {
    this.addItemAt(a, this.getItemCount())
};
b.addItemAt = function (a, c) {
    a && (this.selectItem_(a, !1), f.array.insertAt(this.items_, a, c))
};
b.removeItem = function (a) {
    a && f.array.remove(this.items_, a) && a == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent(f.events.EventType.SELECT))
};
b.setSelectedItem = function (a) {
    a != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = a, this.selectItem_(a, !0));
    this.dispatchEvent(f.events.EventType.SELECT)
};
b.getSelectedIndex = function () {
    return this.indexOfItem(this.selectedItem_)
};
b.setSelectedIndex = function (a) {
    this.setSelectedItem(this.getItemAt(a))
};
b.clear = function () {
    f.array.clear(this.items_);
    this.selectedItem_ = null
};
b.disposeInternal = function () {
    f.ui.SelectionModel.superClass_.disposeInternal.call(this);
    delete this.items_;
    this.selectedItem_ = null
};
b.selectItem_ = function (a, c) {
    a && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_(a, c) : "function" == typeof a.setSelected && a.setSelected(c))
};
k.ToggleButton = function (a, c) {
    f.asserts.assert(1 <= a.length, "The button bar should have at least 1 button");
    f.ui.Container.call(this, f.ui.Container.Orientation.HORIZONTAL, k.ToggleButtonRenderer_.getInstance(), c);
    this.selectionModel_ = new f.ui.SelectionModel;
    this.selectionModel_.setSelectionHandler(function (a, c) {
        a && (a.setChecked(c), c ? a.setStyle(w.Button.Style.ACTION) : a.setStyle(w.Button.Style.STANDARD))
    });
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        this.addButton_(e);
        0 === d ? e.setCollapsed(f.ui.ButtonSide.END) :
                d == a.length - 1 ? e.setCollapsed(f.ui.ButtonSide.START) : e.setCollapsed(f.ui.ButtonSide.BOTH)
    }
    d = this.selectionModel_.getFirst();
    f.asserts.assert(d, "First button cannot be null");
    this.selectionModel_.setSelectedItem(d)
};
f.inherits(k.ToggleButton, f.ui.Container);
b = k.ToggleButton.prototype;
b.enterDocument = function () {
    k.ToggleButton.superClass_.enterDocument.call(this);
    this.getHandler().listen(this.selectionModel_, f.events.EventType.SELECT, f.partial(this.dispatchEvent, f.events.EventType.CHANGE))
};
b.addButton_ = function (a) {
    f.asserts.assert(null !== a);
    a.setSupportedState(f.ui.Component.State.CHECKED, !0);
    a.setAutoStates(f.ui.Component.State.CHECKED, !1);
    this.selectionModel_.addItem(a);
    this.getHandler().listen(a, f.ui.Component.EventType.ACTION, this.handleAction_);
    this.addChild(a, !0)
};
b.getSelectedIndex = function () {
    return this.selectionModel_.getSelectedIndex()
};
b.setSelectedIndex = function (a) {
    this.selectionModel_.setSelectedIndex(a)
};
b.setSelectedButton = function (a) {
    this.selectionModel_.setSelectedItem(a)
};
b.disposeInternal = function () {
    f.dispose(this.selectionModel_);
    k.ToggleButton.superClass_.disposeInternal.call(this)
};
b.handleAction_ = function (a) {
    this.setSelectedButton(a.target)
};
k.ToggleButtonRenderer_ = function () {
    f.ui.ContainerRenderer.call(this)
};
f.inherits(k.ToggleButtonRenderer_, f.ui.ContainerRenderer);
f.addSingletonGetter(k.ToggleButtonRenderer_);
k.ToggleButtonRenderer_.CSS_CLASS = "gaext-toggle-button";
k.ToggleButtonRenderer_.prototype.getCssClass = function () {
    return k.ToggleButtonRenderer_.CSS_CLASS
};
k.Popup = function () {
};
b = k.Popup.prototype;
b.initUI = function () {
    chrome.runtime.sendMessage({type: k.MessageType.GET_POPUP_SETTINGS}, f.bind(this.updatePage_, this))
};
b.updatePage_ = function (a) {
    a.connected ? this.showSettings_(a) : this.showSignIn_()
};
b.showSignIn_ = function () {
    document.body.innerHTML = k.soy.Popup.renderSignIn();
    var a = w.Button.createActionButton("Sign In");
    a.render(f.dom.getElementByClass("sign-in-button"));
    f.events.listen(a, f.ui.Component.EventType.ACTION, k.Popup.openSignInWindow_)
};
b.updateSettings_ = function () {
    chrome.runtime.sendMessage({type: k.MessageType.UPDATE_POPUP_SETTINGS, position: this.positionButton_.getSelectedIndex()})
};
b.showSettings_ = function (a) {
    var c = "position"in a;
    document.body.innerHTML = k.soy.Popup.renderMain({showControls: c});
    c && (a = a.position, this.positionButton_ = new k.ToggleButton([new w.Button("Top"), new w.Button("Bottom"), new w.Button("None")]), this.positionButton_.render(f.dom.getElementByClass("popup-controls")), this.positionButton_.setSelectedIndex(a), f.events.listen(this.positionButton_, f.ui.Component.EventType.CHANGE, f.bind(this.updateSettings_, this)));
    a = f.dom.getElementByClass("feedback");
    f.events.listen(a,
        f.events.EventType.CLICK, k.Popup.sendFeedbackGAEvent_)
};
k.Popup.sendFeedbackGAEvent_ = function () {
    chrome.runtime.sendMessage({type: k.MessageType.GA_EVENT, category: k.GAEvent.Category.USER_ACTIONS, action: k.GAEvent.Action.SEND_FEEDBACK, label: "Popup"})
};
k.Popup.openSignInWindow_ = function () {
    window.open("http://www.google.com/accounts/ServiceLogin?service=analytics&continue=https%3A%2F%2Fwww.google.com%2Fanalytics%2Fweb")
};
window.onload = function () {
    var a = new k.Popup;
    a.initUI()
};
