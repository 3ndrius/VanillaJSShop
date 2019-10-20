// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"products.json":[function(require,module,exports) {
module.exports = {
  "items": [{
    "sys": {
      "id": "1"
    },
    "fields": {
      "title": "Berlin",
      "price": 109.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "2"
    },
    "fields": {
      "title": "Madrid",
      "price": 122.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "3"
    },
    "fields": {
      "title": "Buenos Aires",
      "price": 1230.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "4"
    },
    "fields": {
      "title": "Sydney",
      "price": 22.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "5"
    },
    "fields": {
      "title": "Pekin",
      "price": 88.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "6"
    },
    "fields": {
      "title": "Moscow",
      "price": 320.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "7"
    },
    "fields": {
      "title": "Budapest",
      "price": 450.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }, {
    "sys": {
      "id": "8"
    },
    "fields": {
      "title": "London",
      "price": 330.99,
      "image": {
        "fields": {
          "file": {
            "url": "/egipt.8a5a444c.jpg"
          }
        }
      }
    }
  }]
};
},{}],"index.ts":[function(require,module,exports) {
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var cartMenuWrapper = document.querySelector('.shop-cart');
var cartMenuBtn = document.querySelector('.cart-button');
var cartMenu = document.querySelector('.shop-cart__container');
var closeBtn = document.querySelector('.close');
var productsDom = document.querySelector('.products__container');
var headerTotal = document.querySelector('.header-count');
var totalPrice = document.querySelector('.total-price');
var menuCartList = document.querySelector('.shop-cart__list');
var clearCartBtn = document.querySelector('.btn--total');
cartMenuBtn.addEventListener('click', function () {
  cartMenuWrapper.style.display = 'flex';
  cartMenu.style.transform = "translateX(0%)";
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener('click', function () {
  cartMenuWrapper.style.display = 'none';
  cartMenu.style.transform = "translateX(101%)";
  document.body.style.overflowY = "scroll";
});
var cart = [];

var Products =
/** @class */
function () {
  function Products() {}

  Products.prototype.getProducts = function () {
    return __awaiter(this, void 0, void 0, function () {
      var result, data, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , require('./products.json')];

          case 1:
            result = _a.sent();
            data = result.items;
            data = data.map(function (item) {
              var _a = item.fields,
                  title = _a.title,
                  price = _a.price;
              var id = item.sys.id;
              var image = item.fields.image.fields.file.url;
              return {
                title: title,
                price: price,
                id: id,
                image: image
              };
            });
            return [2
            /*return*/
            , data];

          case 2:
            err_1 = _a.sent();
            console.log(err_1);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return Products;
}();

var UI =
/** @class */
function () {
  function UI() {}

  UI.prototype.showProducts = function (data) {
    var resultItem = " ";
    data.forEach(function (item) {
      resultItem += "\n        <article class=\"products__item\">\n            <div class=\"products__image\">\n                <img src=" + item.image + " alt=\"products-image\">\n                <button class=\"buy-btn\" data-id=" + item.id + "> Add to cart</button>\n            </div>\n            <div class=\"products__title\">\n                <h2>" + item.title + "</h2>\n            </div>\n            <div class=\"products__price\">\n                " + item.price + "\n            </div>\n        </article>\n        ";
    });
    productsDom.innerHTML = resultItem;
  };

  UI.prototype.getButtons = function () {
    var _this = this;

    var buttonsBuy = __spreadArrays(document.querySelectorAll(".buy-btn"));

    buttonsBuy.forEach(function (button) {
      var id = button.dataset.id;
      var inCart = cart.find(function (item) {
        return item.id === id;
      });

      if (inCart) {
        button.innerHTML = " In cart";
        button.disabled = true;
      }

      button.addEventListener('click', function (e) {
        e.target.disabled = true;
        e.target.innerHTML = " In cart";
        console.log(e.target);

        var cartItem = __assign(__assign({}, Storage.getFromStorage(id)), {
          amount: 1
        });

        cart = __spreadArrays(cart, [cartItem]);
        Storage.saveCart(cart);

        _this.setCartTotal(cart);

        _this.addToCart(cartItem);
      });
    });
  };

  UI.prototype.setCartTotal = function (cart) {
    var tempTotal = 0;
    var itemsTotal = 0;
    cart.map(function (item) {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    totalPrice.innerText = parseFloat(tempTotal.toFixed(2));
    headerTotal.innerText = itemsTotal;
  };

  UI.prototype.addToCart = function (item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = "\n        <img src=" + item.image + " alt=\"small-img\">\n        <div class=\"wrap\">\n            <h4>" + item.title + "</h4>\n            <h5>$" + item.price + "</h5>\n            <p>remove</p>\n        </div>\n        <div class=\"count\">\n            <i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i>\n            <p>" + item.amount + "</p>\n            <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n        </div>\n        ";
    menuCartList.appendChild(listItem);
  };

  UI.prototype.setupApp = function () {
    cart = Storage.getCart();
    this.setCartTotal(cart);
    this.populateCart(cart);
  };

  UI.prototype.populateCart = function (cart) {
    var _this = this;

    cart.forEach(function (item) {
      return _this.addToCart(item);
    });
  };

  UI.prototype.cartLogic = function () {
    var _this = this;

    clearCartBtn.addEventListener('click', function () {
      _this.clearCart();
    });
  };

  UI.prototype.clearCart = function () {
    var _this = this;

    var cartIds = cart.map(function (item) {
      return item.id;
    });
    cartIds.forEach(function (id) {
      return _this.removeItem(id);
    });

    while (menuCartList.children.length > 0) {
      menuCartList.removeChild(menuCartList.children[0]);
    }
  };

  UI.prototype.removeItem = function (id) {
    cart = cart.filter(function (item) {
      return item.id !== id;
    });
    this.setCartTotal(cart);
    Storage.saveCart(cart);
    var btn = this.getSingleBtn(id);
    btn.disabled = false;
    btn.innerHTML = " Add to cart";
  };

  UI.prototype.getSingleBtn = function (id) {
    return __spreadArrays(document.querySelectorAll(".buy-btn")).find(function (button) {
      return button.dataset.id === id;
    });
  };

  return UI;
}();

var Storage =
/** @class */
function () {
  function Storage() {}

  Storage.saveToStorage = function (data) {
    localStorage.setItem("products", JSON.stringify(data));
  };

  Storage.getFromStorage = function (id) {
    var product = JSON.parse(localStorage.getItem("products"));
    return product.find(function (item) {
      return item.id === id;
    });
  };

  Storage.saveCart = function (cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("save");
  };

  Storage.getCart = function () {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  };

  Storage.clearCart = function () {};

  return Storage;
}();

document.addEventListener('DOMContentLoaded', function () {
  var products = new Products();
  var layout = new UI();
  layout.setupApp();
  products.getProducts().then(function (product) {
    layout.showProducts(product);
    Storage.saveToStorage(product);
  }).then(function () {
    layout.getButtons();
  });
  layout.cartLogic();
});
},{"./products.json":"products.json"}],"C:/Users/andrz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50968" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/andrz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/VanillaJSShop.77de5100.map