;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [662],
  {
    30724: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(29511).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ComposedStore = void 0)
      var s = (function(e) {
        function t(e) {
          var r
          return (
            n(this, t),
            ((r = o(this, t, [{}]))._children = e || {}),
            Object.keys(r._children).forEach(function(e) {
              var t = r._children[e]
              r._addChild(e, t)
            }),
            r
          )
        }
        return (
          a(t, e),
          i(t, [
            {
              key: '_addChild',
              value: function(e, t) {
                var r = this,
                  n = function(t) {
                    var n = r.getState()
                    ;(n[e] = t), r.putState(n)
                  }
                t.subscribe(n), n(t.getState())
              }
            }
          ])
        )
      })(r(67023).ObservableStore)
      t.ComposedStore = s
    },
    8708: function(e, t, r) {
      'use strict'
      var n = r(41132).default,
        i = r(17383).default,
        o = r(34579).default,
        a = r(18336).default,
        s = r(29511).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.MergedStore = void 0)
      var u = (function(e) {
        function t() {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : []
          return (
            i(this, t),
            ((e = a(this, t, [{}]))._children = r),
            r.forEach(function(t) {
              return e._addChild(t)
            }),
            e._updateWholeState(),
            e
          )
        }
        return (
          s(t, e),
          o(t, [
            {
              key: '_addChild',
              value: function(e) {
                var t = this
                e.subscribe(function() {
                  return t._updateWholeState()
                })
              }
            },
            {
              key: '_updateWholeState',
              value: function() {
                var e = this._children.map(function(e) {
                    return e.getState()
                  }),
                  t = Object.assign.apply(Object, [{}].concat(n(e)))
                this.putState(t)
              }
            }
          ])
        )
      })(r(67023).ObservableStore)
      t.MergedStore = u
    },
    67023: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(29511).default,
        s =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e }
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ObservableStore = void 0)
      var u = (function(e) {
        function t(e) {
          var r
          return n(this, t), ((r = o(this, t))._state = e || {}), r
        }
        return (
          a(t, e),
          i(t, [
            {
              key: 'getState',
              value: function() {
                return this._getState()
              }
            },
            {
              key: 'putState',
              value: function(e) {
                this._putState(e), this.emit('update', e)
              }
            },
            {
              key: 'updateState',
              value: function(e) {
                if (e && 'object' === typeof e) {
                  var t = this.getState()
                  this.putState(Object.assign(Object.assign({}, t), e))
                } else this.putState(e)
              }
            },
            {
              key: 'subscribe',
              value: function(e) {
                this.on('update', e)
              }
            },
            {
              key: 'unsubscribe',
              value: function(e) {
                this.removeListener('update', e)
              }
            },
            {
              key: '_getState',
              value: function() {
                return this._state
              }
            },
            {
              key: '_putState',
              value: function(e) {
                this._state = e
              }
            }
          ])
        )
      })(s(r(14293)).default)
      t.ObservableStore = u
    },
    61485: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(32395).default,
        s = r(63072).default,
        u = r(29511).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.storeAsStream = void 0)
      var c = (function(e) {
        function t(e) {
          var r
          return (
            n(this, t),
            (r = o(this, t, [{ objectMode: !0 }])).resume(),
            (r.handler = function(e) {
              return r.push(e)
            }),
            (r.obsStore = e),
            r.obsStore.subscribe(r.handler),
            r
          )
        }
        return (
          u(t, e),
          i(t, [
            {
              key: 'pipe',
              value: function(e, r) {
                var n = a(s(t.prototype), 'pipe', this).call(this, e, r)
                return e.write(this.obsStore.getState()), n
              }
            },
            {
              key: '_write',
              value: function(e, t, r) {
                this.obsStore.putState(e), r()
              }
            },
            { key: '_read', value: function(e) {} },
            {
              key: '_destroy',
              value: function(e, r) {
                this.obsStore.unsubscribe(this.handler),
                  a(s(t.prototype), '_destroy', this).call(this, e, r)
              }
            }
          ])
        )
      })(r(74520).Duplex)
      t.storeAsStream = function(e) {
        return new c(e)
      }
    },
    25013: function(e, t, r) {
      'use strict'
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function(e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                      return t[r]
                    }
                  })
              }
            : function(e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r])
              }),
        i =
          (this && this.__exportStar) ||
          function(e, t) {
            for (var r in e)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r)
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        i(r(61485), t),
        i(r(30724), t),
        i(r(8708), t),
        i(r(67023), t),
        i(r(47649), t)
    },
    47649: function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.storeTransformStream = void 0)
      var n = r(16560)
      t.storeTransformStream = function(e) {
        return n.obj(function(t, r, n) {
          try {
            return void n(null, e(t))
          } catch (i) {
            return void n(i)
          }
        })
      }
    },
    14293: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(29511).default
      function s(e, t, r) {
        try {
          Reflect.apply(e, t, r)
        } catch (n) {
          setTimeout(function() {
            throw n
          })
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var u = (function(e) {
        function t() {
          return n(this, t), o(this, t, arguments)
        }
        return (
          a(t, e),
          i(t, [
            {
              key: 'emit',
              value: function(e) {
                var t = 'error' === e,
                  r = this._events
                if (void 0 !== r) t = t && void 0 === r.error
                else if (!t) return !1
                for (
                  var n = arguments.length,
                    i = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  i[o - 1] = arguments[o]
                if (t) {
                  var a
                  if ((i.length > 0 && (a = i[0]), a instanceof Error)) throw a
                  var u = new Error(
                    'Unhandled error.'.concat(
                      a ? ' ('.concat(a.message, ')') : ''
                    )
                  )
                  throw ((u.context = a), u)
                }
                var c = r[e]
                if (void 0 === c) return !1
                if ('function' === typeof c) s(c, this, i)
                else
                  for (
                    var d = c.length,
                      l = (function(e) {
                        for (
                          var t = e.length, r = new Array(t), n = 0;
                          n < t;
                          n += 1
                        )
                          r[n] = e[n]
                        return r
                      })(c),
                      f = 0;
                    f < d;
                    f += 1
                  )
                    s(l[f], this, i)
                return !0
              }
            }
          ])
        )
      })(r(27284).EventEmitter)
      t.default = u
    },
    46933: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(29511).default,
        s = r(61837).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.EthereumProviderError = t.EthereumRpcError = void 0)
      var u = r(95376),
        c = (function(e) {
          function t(e, r, i) {
            var a
            if ((n(this, t), !Number.isInteger(e)))
              throw new Error('"code" must be an integer.')
            if (!r || 'string' !== typeof r)
              throw new Error('"message" must be a nonempty string.')
            return (
              ((a = o(this, t, [r])).code = e), void 0 !== i && (a.data = i), a
            )
          }
          return (
            a(t, e),
            i(t, [
              {
                key: 'serialize',
                value: function() {
                  var e = { code: this.code, message: this.message }
                  return (
                    void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
                  )
                }
              },
              {
                key: 'toString',
                value: function() {
                  return u.default(this.serialize(), l, 2)
                }
              }
            ])
          )
        })(s(Error))
      t.EthereumRpcError = c
      var d = (function(e) {
        function t(e, r, i) {
          if (
            (n(this, t),
            !(function(e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999
            })(e))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            )
          return o(this, t, [e, r, i])
        }
        return a(t, e), i(t)
      })(c)
      function l(e, t) {
        if ('[Circular]' !== t) return t
      }
      t.EthereumProviderError = d
    },
    54475: function(e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.errorValues = t.errorCodes = void 0),
        (t.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901
          }
        }),
        (t.errorValues = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.'
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.'
          },
          '-32602': {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).'
          },
          '-32603': {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.'
          },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': {
            standard: 'EIP-1474',
            message: 'Request limit exceeded.'
          },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message:
              'The requested account and/or method has not been authorized by the user.'
          },
          4200: {
            standard: 'EIP-1193',
            message:
              'The requested method is not supported by this Ethereum provider.'
          },
          4900: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.'
          },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.'
          }
        })
    },
    97214: function(e, t, r) {
      'use strict'
      var n = r(85715).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ethErrors = void 0)
      var i = r(46933),
        o = r(36820),
        a = r(54475)
      function s(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1]
        return new i.EthereumRpcError(e, s || o.getMessageFromCode(e), u)
      }
      function u(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1]
        return new i.EthereumProviderError(e, s || o.getMessageFromCode(e), u)
      }
      function c(e) {
        if (e) {
          if ('string' === typeof e) return [e]
          if ('object' === typeof e && !Array.isArray(e)) {
            var t = e.message,
              r = e.data
            if (t && 'string' !== typeof t)
              throw new Error('Must specify string message.')
            return [t || void 0, r]
          }
        }
        return []
      }
      t.ethErrors = {
        rpc: {
          parse: function(e) {
            return s(a.errorCodes.rpc.parse, e)
          },
          invalidRequest: function(e) {
            return s(a.errorCodes.rpc.invalidRequest, e)
          },
          invalidParams: function(e) {
            return s(a.errorCodes.rpc.invalidParams, e)
          },
          methodNotFound: function(e) {
            return s(a.errorCodes.rpc.methodNotFound, e)
          },
          internal: function(e) {
            return s(a.errorCodes.rpc.internal, e)
          },
          server: function(e) {
            if (!e || 'object' !== typeof e || Array.isArray(e))
              throw new Error(
                'Ethereum RPC Server errors must provide single object argument.'
              )
            var t = e.code
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              )
            return s(t, e)
          },
          invalidInput: function(e) {
            return s(a.errorCodes.rpc.invalidInput, e)
          },
          resourceNotFound: function(e) {
            return s(a.errorCodes.rpc.resourceNotFound, e)
          },
          resourceUnavailable: function(e) {
            return s(a.errorCodes.rpc.resourceUnavailable, e)
          },
          transactionRejected: function(e) {
            return s(a.errorCodes.rpc.transactionRejected, e)
          },
          methodNotSupported: function(e) {
            return s(a.errorCodes.rpc.methodNotSupported, e)
          },
          limitExceeded: function(e) {
            return s(a.errorCodes.rpc.limitExceeded, e)
          }
        },
        provider: {
          userRejectedRequest: function(e) {
            return u(a.errorCodes.provider.userRejectedRequest, e)
          },
          unauthorized: function(e) {
            return u(a.errorCodes.provider.unauthorized, e)
          },
          unsupportedMethod: function(e) {
            return u(a.errorCodes.provider.unsupportedMethod, e)
          },
          disconnected: function(e) {
            return u(a.errorCodes.provider.disconnected, e)
          },
          chainDisconnected: function(e) {
            return u(a.errorCodes.provider.chainDisconnected, e)
          },
          custom: function(e) {
            if (!e || 'object' !== typeof e || Array.isArray(e))
              throw new Error(
                'Ethereum Provider custom errors must provide single object argument.'
              )
            var t = e.code,
              r = e.message,
              n = e.data
            if (!r || 'string' !== typeof r)
              throw new Error('"message" must be a nonempty string')
            return new i.EthereumProviderError(t, r, n)
          }
        }
      }
    },
    80441: function(e, t, r) {
      'use strict'
      t.P5 = void 0
      var n = r(46933)
      var i = r(36820)
      Object.defineProperty(t, 'P5', {
        enumerable: !0,
        get: function() {
          return i.serializeError
        }
      })
      var o = r(97214)
      var a = r(54475)
    },
    36820: function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0)
      var n = r(54475),
        i = r(46933),
        o = n.errorCodes.rpc.internal,
        a = 'Unspecified error message. This is a bug, please report it.',
        s = { code: o, message: u(o) }
      function u(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a
        if (Number.isInteger(e)) {
          var i = e.toString()
          if (f(n.errorValues, i)) return n.errorValues[i].message
          if (d(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return r
      }
      function c(e) {
        if (!Number.isInteger(e)) return !1
        var t = e.toString()
        return !!n.errorValues[t] || !!d(e)
      }
      function d(e) {
        return e >= -32099 && e <= -32e3
      }
      function l(e) {
        return e && 'object' === typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e
      }
      function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      ;(t.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'),
        (t.getMessageFromCode = u),
        (t.isValidCode = c),
        (t.serializeError = function(e) {
          var t,
            r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = n.fallbackError,
            a = void 0 === o ? s : o,
            d = n.shouldIncludeStack,
            h = void 0 !== d && d
          if (!a || !Number.isInteger(a.code) || 'string' !== typeof a.message)
            throw new Error(
              'Must provide fallback error with integer number code and string message.'
            )
          if (e instanceof i.EthereumRpcError) return e.serialize()
          var p = {}
          if (
            e &&
            'object' === typeof e &&
            !Array.isArray(e) &&
            f(e, 'code') &&
            c(e.code)
          ) {
            var v = e
            ;(p.code = v.code),
              v.message && 'string' === typeof v.message
                ? ((p.message = v.message), f(v, 'data') && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: l(e) }))
          } else {
            p.code = a.code
            var g = null === (t = e) || void 0 === t ? void 0 : t.message
            ;(p.message = g && 'string' === typeof g ? g : a.message),
              (p.data = { originalError: l(e) })
          }
          var y = null === (r = e) || void 0 === r ? void 0 : r.stack
          return h && e && y && 'string' === typeof y && (p.stack = y), p
        })
    },
    41281: function(e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          BUTTON_POSITION: function() {
            return ke
          },
          LOGIN_PROVIDER: function() {
            return be
          },
          PAYMENT_PROVIDER: function() {
            return Ae
          },
          SUPPORTED_PAYMENT_NETWORK: function() {
            return Se
          },
          TORUS_BUILD_ENV: function() {
            return Ee
          },
          TorusInpageProvider: function() {
            return Xe
          },
          WALLET_OPENLOGIN_VERIFIER_MAP: function() {
            return _e
          },
          WALLET_VERIFIERS: function() {
            return we
          },
          default: function() {
            return ft
          }
        })
      var n = r(24765),
        i = r(23029),
        o = r(92901),
        a = r(39874),
        s = r(90991),
        u = r(53954),
        c = r(85501),
        d = r(90675),
        l = r(10467),
        f = r(64467),
        h = r(80045),
        p = r(16819),
        v = r.n(p),
        g = r(88318),
        y = r.n(g)
      function m(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(r), !0).forEach(function(t) {
                ;(0, f.A)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var w = y().getLogger('http-helpers')
      w.setLevel(g.levels.INFO)
      var _ = 'torus-default',
        A = '',
        S = null,
        E = [],
        k = []
      function C(e) {
        _ = e
      }
      function O(e, t) {
        return R.apply(this, arguments)
      }
      function R() {
        return (R = (0, l.A)(
          (0, d.A)().mark(function e(t, r) {
            var n, i, o, a
            return (0, d.A)().wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    n = null
                    try {
                      n = new URL(t)
                    } catch (s) {}
                    if (
                      !S ||
                      !n ||
                      (!E.includes(n.origin) && !k.includes(n.pathname))
                    ) {
                      e.next = 11
                      break
                    }
                    return (
                      (i = S.startTransaction({ name: t })),
                      (o = i.startChild({ op: 'http' })),
                      (e.next = 7),
                      fetch(t, r)
                    )
                  case 7:
                    return (
                      (a = e.sent),
                      o.finish(),
                      i.finish(),
                      e.abrupt('return', a)
                    )
                  case 11:
                    return e.abrupt('return', fetch(t, r))
                  case 12:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function P() {
        var e = {}
        return _ && (e['x-api-key'] = _), A && (e['x-embed-host'] = A), e
      }
      function T(e) {
        w.info('Response: '.concat(e.status, ' ').concat(e.statusText)),
          w.info('Url: '.concat(e.url))
      }
      var x = (function() {
          var e = (0, l.A)(
            (0, d.A)().mark(function e(t) {
              var r,
                n,
                i,
                o,
                a = arguments
              return (0, d.A)().wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                        (n = { mode: 'cors', headers: {} }),
                        (a.length > 2 && void 0 !== a[2] ? a[2] : {})
                          .useAPIKey && (n.headers = b(b({}, n.headers), P())),
                        (i = v()(n, r, { method: 'GET' })),
                        (e.next = 7),
                        O(t, i)
                      )
                    case 7:
                      if (!(o = e.sent).ok) {
                        e.next = 10
                        break
                      }
                      return e.abrupt('return', o.json())
                    case 10:
                      throw (T(o), o)
                    case 12:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function(t) {
            return e.apply(this, arguments)
          }
        })(),
        M = r(80296),
        I = r(63662)
      var D = r(52176)
      function j(e) {
        var t = 'function' === typeof Map ? new Map() : void 0
        return (
          (j = function(e) {
            if (
              null === e ||
              !(function(e) {
                try {
                  return (
                    -1 !== Function.toString.call(e).indexOf('[native code]')
                  )
                } catch (t) {
                  return 'function' === typeof e
                }
              })(e)
            )
              return e
            if ('function' !== typeof e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e)
              t.set(e, r)
            }
            function r() {
              return (function(e, t, r) {
                if ((0, D.A)()) return Reflect.construct.apply(null, arguments)
                var n = [null]
                n.push.apply(n, t)
                var i = new (e.bind.apply(e, n))()
                return r && (0, I.A)(i, r.prototype), i
              })(e, arguments, (0, u.A)(this).constructor)
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              (0, I.A)(r, e)
            )
          }),
          j(e)
        )
      }
      var N = r(73350),
        L = r(15838),
        U = r.n(L)
      r(97488), r(85831), r(26382).Buffer
      var B = r(27284),
        W = r(95376),
        q = r.n(W),
        V = r(80441),
        F = r(62820),
        K = r.n(F),
        H = r(24164),
        G = r.n(H),
        z = r(20502),
        Y = r.n(z)
      function J() {}
      var X = 'ACK',
        Z = (function(e) {
          function t(e) {
            var r
            ;(0, i.A)(this, t)
            var n = e.name,
              o = e.target,
              s = e.targetWindow,
              u = void 0 === s ? window : s,
              c = e.targetOrigin,
              d = void 0 === c ? '*' : c
            if (
              ((r = (0, a.A)(this, t, [{ objectMode: !0 }])),
              (0, f.A)(r, '_init', void 0),
              (0, f.A)(r, '_haveSyn', void 0),
              (0, f.A)(r, '_name', void 0),
              (0, f.A)(r, '_target', void 0),
              (0, f.A)(r, '_targetWindow', void 0),
              (0, f.A)(r, '_targetOrigin', void 0),
              (0, f.A)(r, '_onMessage', void 0),
              (0, f.A)(r, '_synIntervalId', void 0),
              !n || !o)
            )
              throw new Error('Invalid input.')
            return (
              (r._init = !1),
              (r._haveSyn = !1),
              (r._name = n),
              (r._target = o),
              (r._targetWindow = u),
              (r._targetOrigin = d),
              (r._onMessage = r.onMessage.bind(r)),
              (r._synIntervalId = null),
              window.addEventListener('message', r._onMessage, !1),
              r._handShake(),
              r
            )
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: '_break',
                value: function() {
                  this.cork(),
                    this._write('BRK', null, J),
                    (this._haveSyn = !1),
                    (this._init = !1)
                }
              },
              {
                key: '_handShake',
                value: function() {
                  this._write('SYN', null, J), this.cork()
                }
              },
              {
                key: '_onData',
                value: function(e) {
                  if (this._init)
                    if ('BRK' === e) this._break()
                    else
                      try {
                        this.push(e)
                      } catch (t) {
                        this.emit('error', t)
                      }
                  else
                    'SYN' === e
                      ? ((this._haveSyn = !0), this._write(X, null, J))
                      : e === X &&
                        ((this._init = !0),
                        this._haveSyn || this._write(X, null, J),
                        this.uncork())
                }
              },
              {
                key: '_postMessage',
                value: function(e) {
                  var t = this._targetOrigin
                  this._targetWindow.postMessage(
                    { target: this._target, data: e },
                    t
                  )
                }
              },
              {
                key: 'onMessage',
                value: function(e) {
                  var t = e.data
                  ;('*' !== this._targetOrigin &&
                    e.origin !== this._targetOrigin) ||
                    e.source !== this._targetWindow ||
                    'object' !== typeof t ||
                    t.target !== this._name ||
                    !t.data ||
                    this._onData(t.data)
                }
              },
              { key: '_read', value: function() {} },
              {
                key: '_write',
                value: function(e, t, r) {
                  this._postMessage(e), r()
                }
              },
              {
                key: '_destroy',
                value: function() {
                  window.removeEventListener('message', this._onMessage, !1)
                }
              }
            ])
          )
        })(N.Duplex)
      function $(e, t, r) {
        try {
          Reflect.apply(e, t, r)
        } catch (n) {
          setTimeout(function() {
            throw n
          })
        }
      }
      var Q = (function(e) {
          function t() {
            return (0, i.A)(this, t), (0, a.A)(this, t, arguments)
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: 'emit',
                value: function(e) {
                  var t = 'error' === e,
                    r = this._events
                  if (void 0 !== r) t = t && void 0 === r.error
                  else if (!t) return !1
                  for (
                    var n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    i[o - 1] = arguments[o]
                  if (t) {
                    var a
                    if ((i.length > 0 && (a = i[0]), a instanceof Error))
                      throw a
                    var s = new Error(
                      'Unhandled error.'.concat(
                        a ? ' ('.concat(a.message, ')') : ''
                      )
                    )
                    throw ((s.context = a), s)
                  }
                  var u = r[e]
                  if (void 0 === u) return !1
                  if ('function' === typeof u) $(u, this, i)
                  else
                    for (
                      var c = u.length,
                        d = (function(e) {
                          for (
                            var t = e.length, r = new Array(t), n = 0;
                            n < t;
                            n += 1
                          )
                            r[n] = e[n]
                          return r
                        })(u),
                        l = 0;
                      l < c;
                      l += 1
                    )
                      $(d[l], this, i)
                  return !0
                }
              }
            ])
          )
        })(B.EventEmitter),
        ee = (function(e) {
          function t(e) {
            var r
            ;(0, i.A)(this, t)
            var n = e.code,
              o = e.message,
              s = e.data
            if (!Number.isInteger(n)) throw new Error('code must be an integer')
            if (!o || 'string' !== typeof o)
              throw new Error('message must be string')
            return (
              (r = (0, a.A)(this, t, [o])),
              (0, f.A)(r, 'code', void 0),
              (0, f.A)(r, 'data', void 0),
              (r.code = n),
              void 0 !== s && (r.data = s),
              r
            )
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: 'toString',
                value: function() {
                  return q()({
                    code: this.code,
                    message: this.message,
                    data: this.data,
                    stack: this.stack
                  })
                }
              }
            ])
          )
        })(j(Error))
      function te() {
        var e = {}
        var t = new Q()
        var r = new N.Duplex({
          objectMode: !0,
          read: function() {
            return !1
          },
          write: function(r, n, i) {
            var o
            try {
              !r.id
                ? (function(e) {
                    t.emit('notification', e)
                  })(r)
                : (function(t) {
                    var r = e[t.id]
                    if (!r)
                      throw new Error(
                        'StreamMiddleware - Unknown response id "'.concat(
                          t.id,
                          '"'
                        )
                      )
                    delete e[t.id], Object.assign(r.res, t), setTimeout(r.end)
                  })(r)
            } catch (a) {
              o = a
            }
            i(o)
          }
        })
        return {
          events: t,
          middleware: function(t, n, i, o) {
            r.push(t), (e[t.id] = { req: t, res: n, next: i, end: o })
          },
          stream: r
        }
      }
      function re() {
        return function(e, t, r, n) {
          var i = e.id,
            o = U()(32).toString('hex')
          ;(e.id = o),
            (t.id = o),
            r(function(r) {
              ;(e.id = i), (t.id = i), r()
            })
        }
      }
      function ne(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(r), !0).forEach(function(t) {
                ;(0, f.A)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ne(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var oe = (function(e) {
        function t() {
          var e
          return (
            (0, i.A)(this, t),
            (e = (0, a.A)(this, t)),
            (0, f.A)(e, '_middleware', void 0),
            (e._middleware = []),
            e
          )
        }
        return (
          (0, c.A)(t, e),
          (0, o.A)(
            t,
            [
              {
                key: 'push',
                value: function(e) {
                  this._middleware.push(e)
                }
              },
              {
                key: 'handle',
                value: function(e, t) {
                  if (t && 'function' !== typeof t)
                    throw new Error(
                      '"callback" must be a function if provided.'
                    )
                  return Array.isArray(e)
                    ? t
                      ? this._handleBatch(e, t)
                      : this._handleBatch(e)
                    : t
                    ? this._handle(e, t)
                    : this._promiseHandle(e)
                }
              },
              {
                key: 'asMiddleware',
                value: function() {
                  var e = this
                  return (function() {
                    var r = (0, l.A)(
                      (0, d.A)().mark(function r(n, i, o, a) {
                        var s, u, c, f, h
                        return (0, d.A)().wrap(
                          function(r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (r.prev = 0),
                                    (r.next = 3),
                                    t._runAllMiddleware(n, i, e._middleware)
                                  )
                                case 3:
                                  if (
                                    ((s = r.sent),
                                    (u = (0, M.A)(s, 3)),
                                    (c = u[0]),
                                    (f = u[1]),
                                    (h = u[2]),
                                    !f)
                                  ) {
                                    r.next = 12
                                    break
                                  }
                                  return (r.next = 11), t._runReturnHandlers(h)
                                case 11:
                                  return r.abrupt('return', a(c))
                                case 12:
                                  return r.abrupt(
                                    'return',
                                    o(
                                      (function() {
                                        var e = (0, l.A)(
                                          (0, d.A)().mark(function e(r) {
                                            return (0, d.A)().wrap(
                                              function(e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.prev = 0),
                                                        (e.next = 3),
                                                        t._runReturnHandlers(h)
                                                      )
                                                    case 3:
                                                      e.next = 8
                                                      break
                                                    case 5:
                                                      return (
                                                        (e.prev = 5),
                                                        (e.t0 = e.catch(0)),
                                                        e.abrupt(
                                                          'return',
                                                          r(e.t0)
                                                        )
                                                      )
                                                    case 8:
                                                      return e.abrupt(
                                                        'return',
                                                        r()
                                                      )
                                                    case 9:
                                                    case 'end':
                                                      return e.stop()
                                                  }
                                              },
                                              e,
                                              null,
                                              [[0, 5]]
                                            )
                                          })
                                        )
                                        return function(t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  )
                                case 15:
                                  return (
                                    (r.prev = 15),
                                    (r.t0 = r.catch(0)),
                                    r.abrupt('return', a(r.t0))
                                  )
                                case 18:
                                case 'end':
                                  return r.stop()
                              }
                          },
                          r,
                          null,
                          [[0, 15]]
                        )
                      })
                    )
                    return function(e, t, n, i) {
                      return r.apply(this, arguments)
                    }
                  })()
                }
              },
              {
                key: '_handleBatch',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(t, r) {
                      var n
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  Promise.all(
                                    t.map(this._promiseHandle.bind(this))
                                  )
                                )
                              case 3:
                                if (((n = e.sent), !r)) {
                                  e.next = 6
                                  break
                                }
                                return e.abrupt('return', r(null, n))
                              case 6:
                                return e.abrupt('return', n)
                              case 9:
                                if (((e.prev = 9), (e.t0 = e.catch(0)), !r)) {
                                  e.next = 13
                                  break
                                }
                                return e.abrupt('return', r(e.t0))
                              case 13:
                                throw e.t0
                              case 14:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[0, 9]]
                      )
                    })
                  )
                  return function(t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: '_promiseHandle',
                value: function(e) {
                  var t = this
                  return new Promise(function(r) {
                    t._handle(e, function(e, t) {
                      r(t)
                    })
                  })
                }
              },
              {
                key: '_handle',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(t, r) {
                      var n, i, o, a, s
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  t &&
                                  !Array.isArray(t) &&
                                  'object' === typeof t
                                ) {
                                  e.next = 3
                                  break
                                }
                                return (
                                  (n = new ee({
                                    code: -32603,
                                    message: 'request must be plain object'
                                  })),
                                  e.abrupt(
                                    'return',
                                    r(n, {
                                      id: void 0,
                                      jsonrpc: '2.0',
                                      error: n
                                    })
                                  )
                                )
                              case 3:
                                if ('string' === typeof t.method) {
                                  e.next = 6
                                  break
                                }
                                return (
                                  (i = new ee({
                                    code: -32603,
                                    message: 'method must be string'
                                  })),
                                  e.abrupt(
                                    'return',
                                    r(i, { id: t.id, jsonrpc: '2.0', error: i })
                                  )
                                )
                              case 6:
                                return (
                                  (o = ie({}, t)),
                                  (a = { id: o.id, jsonrpc: o.jsonrpc }),
                                  (s = null),
                                  (e.prev = 9),
                                  (e.next = 12),
                                  this._processRequest(o, a)
                                )
                              case 12:
                                e.next = 17
                                break
                              case 14:
                                ;(e.prev = 14), (e.t0 = e.catch(9)), (s = e.t0)
                              case 17:
                                return (
                                  s &&
                                    (delete a.result,
                                    a.error || (a.error = (0, V.P5)(s))),
                                  e.abrupt('return', r(s, a))
                                )
                              case 19:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[9, 14]]
                      )
                    })
                  )
                  return function(t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: '_processRequest',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(r, n) {
                      var i, o, a, s, u
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  t._runAllMiddleware(r, n, this._middleware)
                                )
                              case 2:
                                return (
                                  (i = e.sent),
                                  (o = (0, M.A)(i, 3)),
                                  (a = o[0]),
                                  (s = o[1]),
                                  (u = o[2]),
                                  t._checkForCompletion(r, n, s),
                                  (e.next = 10),
                                  t._runReturnHandlers(u)
                                )
                              case 10:
                                if (!a) {
                                  e.next = 12
                                  break
                                }
                                throw a
                              case 12:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function(t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              }
            ],
            [
              {
                key: '_runAllMiddleware',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(r, i, o) {
                      var a, s, u, c, l, f, h, p
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(a = []),
                                  (s = null),
                                  (u = !1),
                                  (c = (0, n.A)(o)),
                                  (e.prev = 4),
                                  c.s()
                              case 6:
                                if ((l = c.n()).done) {
                                  e.next = 18
                                  break
                                }
                                return (
                                  (f = l.value),
                                  (e.next = 10),
                                  t._runMiddleware(r, i, f, a)
                                )
                              case 10:
                                if (
                                  ((h = e.sent),
                                  (p = (0, M.A)(h, 2)),
                                  (s = p[0]),
                                  !(u = p[1]))
                                ) {
                                  e.next = 16
                                  break
                                }
                                return e.abrupt('break', 18)
                              case 16:
                                e.next = 6
                                break
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20), (e.t0 = e.catch(4)), c.e(e.t0)
                              case 23:
                                return (e.prev = 23), c.f(), e.finish(23)
                              case 26:
                                return e.abrupt('return', [s, u, a.reverse()])
                              case 27:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[4, 20, 23, 26]]
                      )
                    })
                  )
                  return function(t, r, n) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: '_runMiddleware',
                value: function(e, t, r, n) {
                  return new Promise(function(i) {
                    var o = function(e) {
                      var r = e || t.error
                      r && (t.error = (0, V.P5)(r)), i([r, !0])
                    }
                    try {
                      r(
                        e,
                        t,
                        function(e) {
                          t.error
                            ? o(t.error)
                            : (e &&
                                ('function' !== typeof e &&
                                  o(
                                    new ee({
                                      code: -32603,
                                      message:
                                        "JRPCEngine: 'next' return handlers must be functions"
                                    })
                                  ),
                                n.push(e)),
                              i([null, !1]))
                        },
                        o
                      )
                    } catch (a) {
                      o(a)
                    }
                  })
                }
              },
              {
                key: '_runReturnHandlers',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(t) {
                      var r, i, o
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(r = (0, n.A)(t)),
                                  (e.prev = 1),
                                  (o = (0, d.A)().mark(function e() {
                                    var t
                                    return (0, d.A)().wrap(function(e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t = i.value),
                                              (e.next = 3),
                                              new Promise(function(e, r) {
                                                t(function(t) {
                                                  return t ? r(t) : e()
                                                })
                                              })
                                            )
                                          case 3:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })),
                                  r.s()
                              case 4:
                                if ((i = r.n()).done) {
                                  e.next = 8
                                  break
                                }
                                return e.delegateYield(o(), 't0', 6)
                              case 6:
                                e.next = 4
                                break
                              case 8:
                                e.next = 13
                                break
                              case 10:
                                ;(e.prev = 10), (e.t1 = e.catch(1)), r.e(e.t1)
                              case 13:
                                return (e.prev = 13), r.f(), e.finish(13)
                              case 16:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[1, 10, 13, 16]]
                      )
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: '_checkForCompletion',
                value: function(e, t, r) {
                  if (!('result' in t) && !('error' in t))
                    throw new ee({
                      code: -32603,
                      message: 'Response has no error or result for request'
                    })
                  if (!r)
                    throw new ee({
                      code: -32603,
                      message: 'Nothing ended request'
                    })
                }
              }
            ]
          )
        )
      })(Q)
      var ae = (function(e) {
        function t(e) {
          var r
          ;(0, i.A)(this, t)
          var n = e.parent,
            o = e.name
          return (
            (r = (0, a.A)(this, t, [{ objectMode: !0 }])),
            (0, f.A)(r, '_parent', void 0),
            (0, f.A)(r, '_name', void 0),
            (r._parent = n),
            (r._name = o),
            r
          )
        }
        return (
          (0, c.A)(t, e),
          (0, o.A)(t, [
            { key: '_read', value: function() {} },
            {
              key: '_write',
              value: function(e, t, r) {
                this._parent.push({ name: this._name, data: e }), r()
              }
            }
          ])
        )
      })(N.Duplex)
      function se(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? se(Object(r), !0).forEach(function(t) {
                ;(0, f.A)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ce = Symbol('IGNORE_SUBSTREAM'),
        de = (function(e) {
          function t() {
            var e
            ;(0, i.A)(this, t)
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            return (
              (e = (0, a.A)(this, t, [ue(ue({}, r), {}, { objectMode: !0 })])),
              (0, f.A)(e, '_substreams', void 0),
              (0, f.A)(e, 'getStream', void 0),
              (e._substreams = {}),
              e
            )
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: 'createStream',
                value: function(e) {
                  if (!e)
                    throw new Error('ObjectMultiplex - name must not be empty')
                  if (this._substreams[e])
                    throw new Error(
                      'ObjectMultiplex - Substream for name "'.concat(
                        e,
                        '" already exists'
                      )
                    )
                  var t = new ae({ parent: this, name: e })
                  return (
                    (this._substreams[e] = t),
                    (function(e, t) {
                      var r = G()(t)
                      K()(e, { readable: !1 }, r), K()(e, { writable: !1 }, r)
                    })(this, function(e) {
                      return t.destroy(e || void 0)
                    }),
                    t
                  )
                }
              },
              {
                key: 'ignoreStream',
                value: function(e) {
                  if (!e)
                    throw new Error('ObjectMultiplex - name must not be empty')
                  if (this._substreams[e])
                    throw new Error(
                      'ObjectMultiplex - Substream for name "'.concat(
                        e,
                        '" already exists'
                      )
                    )
                  this._substreams[e] = ce
                }
              },
              { key: '_read', value: function() {} },
              {
                key: '_write',
                value: function(e, t, r) {
                  var n = e.name,
                    i = e.data
                  if (!n)
                    return (
                      window.console.warn(
                        'ObjectMultiplex - malformed chunk without name "'.concat(
                          e,
                          '"'
                        )
                      ),
                      r()
                    )
                  var o = this._substreams[n]
                  return o
                    ? (o !== ce && o.push(i), r())
                    : (window.console.warn(
                        'ObjectMultiplex - orphaned data for stream "'.concat(
                          n,
                          '"'
                        )
                      ),
                      r())
                }
              }
            ])
          )
        })(N.Duplex)
      var le = r(25013),
        fe = r(15005),
        he = r(122),
        pe = r.n(he),
        ve = r(42435),
        ge = r(36059),
        ye = r.n(ge),
        me = r(26382).Buffer,
        be = {
          GOOGLE: 'google',
          FACEBOOK: 'facebook',
          TWITCH: 'twitch',
          REDDIT: 'reddit',
          DISCORD: 'discord'
        },
        we = {
          GOOGLE: 'google',
          FACEBOOK: 'facebook',
          TWITCH: 'twitch',
          REDDIT: 'reddit',
          DISCORD: 'discord',
          EMAIL_PASSWORDLESS: 'torus-auth0-email-passwordless'
        },
        _e = (0, f.A)(
          (0, f.A)(
            (0, f.A)(
              (0, f.A)(
                (0, f.A)(
                  (0, f.A)({}, we.GOOGLE, 'tkey-google'),
                  we.FACEBOOK,
                  'tkey-facebook'
                ),
                we.TWITCH,
                'tkey-twitch'
              ),
              we.REDDIT,
              'tkey-reddit'
            ),
            we.DISCORD,
            'tkey-discord'
          ),
          we.EMAIL_PASSWORDLESS,
          'tkey-auth0-email-passwordless'
        ),
        Ae = {
          MOONPAY: 'moonpay',
          WYRE: 'wyre',
          RAMPNETWORK: 'rampnetwork',
          XANPOOL: 'xanpool',
          MERCURYO: 'mercuryo',
          TRANSAK: 'transak',
          BANXA: 'banxa'
        },
        Se = {
          MAINNET: 'mainnet',
          MATIC: 'matic',
          BSC_MAINNET: 'bsc_mainnet',
          AVALANCHE_MAINNET: 'avalanche_mainnet',
          XDAI: 'xdai'
        },
        Ee = {
          PRODUCTION: 'production',
          DEVELOPMENT: 'development',
          BINANCE: 'binance',
          TESTING: 'testing',
          LRC: 'lrc',
          BETA: 'beta',
          BNB: 'bnb',
          POLYGON: 'polygon'
        },
        ke = {
          BOTTOM_LEFT: 'bottom-left',
          TOP_LEFT: 'top-left',
          BOTTOM_RIGHT: 'bottom-right',
          TOP_RIGHT: 'top-right'
        },
        Ce = (0, f.A)(
          (0, f.A)(
            (0, f.A)(
              (0, f.A)(
                (0, f.A)(
                  (0, f.A)(
                    (0, f.A)({}, Ae.MOONPAY, [
                      'AUD',
                      'BGN',
                      'BRL',
                      'CAD',
                      'CHF',
                      'CNY',
                      'COP',
                      'CZK',
                      'DKK',
                      'DOP',
                      'EGP',
                      'EUR',
                      'GBP',
                      'HKD',
                      'HRK',
                      'IDR',
                      'ILS',
                      'JPY',
                      'JOD',
                      'KES',
                      'KRW',
                      'KWD',
                      'LKR',
                      'MAD',
                      'MXN',
                      'MYR',
                      'NGN',
                      'NOK',
                      'NZD',
                      'OMR',
                      'PEN',
                      'PKR',
                      'PLN',
                      'RON',
                      'RUB',
                      'SEK',
                      'SGD',
                      'THB',
                      'TRY',
                      'TWD',
                      'USD',
                      'VND',
                      'ZAR'
                    ]),
                    Ae.WYRE,
                    [
                      'USD',
                      'EUR',
                      'GBP',
                      'AUD',
                      'CAD',
                      'NZD',
                      'ARS',
                      'BRL',
                      'CHF',
                      'CLP',
                      'COP',
                      'CZK',
                      'DKK',
                      'HKD',
                      'ILS',
                      'INR',
                      'ISK',
                      'JPY',
                      'KRW',
                      'MXN',
                      'MYR',
                      'NOK',
                      'PHP',
                      'PLN',
                      'SEK',
                      'THB',
                      'VND',
                      'ZAR'
                    ]
                  ),
                  Ae.RAMPNETWORK,
                  ['USD', 'EUR', 'GBP']
                ),
                Ae.XANPOOL,
                [
                  'SGD',
                  'HKD',
                  'THB',
                  'PHP',
                  'INR',
                  'IDR',
                  'MYR',
                  'AUD',
                  'NZD',
                  'KRW'
                ]
              ),
              Ae.MERCURYO,
              [
                'EUR',
                'USD',
                'GBP',
                'TRY',
                'JPY',
                'BRL',
                'NGN',
                'VND',
                'MXN',
                'KRW'
              ]
            ),
            Ae.TRANSAK,
            [
              'ARS',
              'AUD',
              'BBD',
              'BGN',
              'BMD',
              'BRL',
              'CAD',
              'CHF',
              'CLP',
              'CRC',
              'CZK',
              'DKK',
              'DOP',
              'EUR',
              'FJD',
              'FKP',
              'GBP',
              'GIP',
              'HRK',
              'HUF',
              'IDR',
              'ILS',
              'ISK',
              'JMD',
              'JPY',
              'KES',
              'KRW',
              'MDL',
              'MXN',
              'MYR',
              'NOK',
              'NZD',
              'PEN',
              'PHP',
              'PLN',
              'PYG',
              'RON',
              'SEK',
              'SGD',
              'THB',
              'TRY',
              'TZS',
              'USD',
              'ZAR'
            ]
          ),
          Ae.BANXA,
          ['EUR', 'GBP', 'USD']
        ),
        Oe = new Set([
          'ETH',
          'USDT',
          'USDC',
          'TUSD',
          'EOSDT',
          'USD',
          'DAI',
          'GUSD',
          'DKKT',
          'PAX',
          'ILS',
          'RUB',
          'BYN',
          'EUR',
          'GBP',
          'JPY',
          'KRW',
          'PLN',
          'MXN',
          'AUD',
          'BRL',
          'CAD',
          'CHF',
          'KPW',
          'LAK',
          'LBP',
          'LKR',
          'XOF',
          'CNHT',
          'DOGE',
          'UAH',
          'TRY',
          'HKD',
          'XJP',
          'SGD',
          'USC',
          'NZD',
          'NGN',
          'RUR',
          'COP',
          'GHS',
          'EGP',
          'IDR',
          'BHD',
          'CRC',
          'PEN',
          'AED',
          'DOP',
          'PKR',
          'HUF',
          'VND',
          'XAR',
          'LTC',
          'RON',
          'OMR',
          'MYR',
          'DKK',
          'UGX',
          'ZMW',
          'SAR',
          'SEK',
          'GEL',
          'RWF',
          'IRR',
          'TZS',
          'CNY',
          'VEF',
          'BDT',
          'HRK',
          'CLP',
          'THB',
          'XAF',
          'ARS',
          'UYU',
          'SZL',
          'KZT',
          'NOK',
          'KES',
          'PAB',
          'INR',
          'CZK',
          'MAD',
          'TWD',
          'PHP',
          'ZAR',
          'BOB',
          'CDF',
          'DASH',
          'VES',
          'ISK',
          'MWK',
          'BAM',
          'TTD',
          'XRP',
          'JOD',
          'RSD',
          'HNL',
          'BGN',
          'GTQ',
          'BWP',
          'XMR',
          'MMK',
          'QAR',
          'AOA',
          'KWD',
          'MUR',
          'WUSD',
          'WEUR',
          'WAVES',
          'WTRY',
          'LRD',
          'LSL',
          'LYD',
          'AWG',
          'MDL',
          'BTO',
          'EURS',
          'CHFT',
          'MKD',
          'MNT',
          'MOP',
          'MRO',
          'MVR',
          'VOLLAR',
          'CKUSD',
          'KHR',
          'VUV',
          'BITCNY',
          'QC',
          'BBD',
          'NAD',
          'NPR',
          'PGK',
          'PYG',
          'BIF',
          'BMD',
          'BND',
          'XLM',
          'BNB',
          'SCR',
          'BAT',
          'CRO',
          'HT',
          'KCS',
          'LEO',
          'LINK',
          'MKR',
          'NPXS',
          'OMG',
          'REP',
          'ZB',
          'ZIL',
          'ZRX',
          'BCH',
          'BZD',
          'CUP',
          'CVE',
          'DJF',
          'DZD',
          'ERN',
          'ETB',
          'FJD',
          'FKP',
          'BUSD',
          'ANCT',
          'ALL',
          'AMD',
          'ANG',
          'CNYX',
          'IQD',
          'UZS',
          'TND',
          'GGP',
          'XAU',
          'KGS',
          'GIP',
          'JMD',
          'ZEC',
          'USDP',
          'BSV',
          'EMC2',
          'SNT',
          'GTO',
          'POWR',
          'EUSD',
          'EURT',
          'BCY',
          'BTS',
          'ATM',
          'BLOCKPAY',
          'ARDR',
          'AMP',
          'B2X',
          'BITGOLD',
          'BITEUR',
          'ATB',
          'BITUSD',
          'AGRS',
          'DFXT',
          'HIKEN',
          'BIX',
          'KNC',
          'EOS',
          'COB',
          'COSS',
          'BMH',
          'NANO',
          'BDG',
          'BNT',
          'XVG',
          'LKK1Y',
          'LKK',
          'USDK',
          'EURN',
          'NZDT',
          'JSE',
          'GMD',
          'GNF',
          'GYD',
          'YER',
          'XPF',
          'HTG',
          'SLL',
          'SOS',
          'WST',
          'SVC',
          'SYP',
          'NEO',
          'KMF',
          'JUMP',
          'AYA',
          'BLAST',
          'WGR',
          'BCN',
          'BTG',
          'URALS',
          'INN',
          'USDQ',
          'CNH',
          'HUSD',
          'BKRW',
          'NZDX',
          'EURX',
          'CADX',
          'USDEX',
          'JPYX',
          'AUDX',
          'VNDC',
          'EON',
          'GBPX',
          'CHFX',
          'USDJ',
          'IDRT',
          'USDS',
          'USDN',
          'BIDR',
          'IDK',
          'BSD',
          'BTN',
          'KYD',
          'NIO',
          'SBD',
          'SDG',
          'SHP',
          'TOP',
          'XCD',
          'XCHF',
          'CNYT',
          'GYEN',
          'ZUSD',
          'GOLD',
          'TRX',
          'TRYB',
          'PLATC',
          'STRAX',
          'UST',
          'GLM',
          'VAI',
          'BRZ',
          'DDRST',
          'XAUT',
          'MIM'
        ])
      function Re(e) {
        return Ce[e].filter(function(e) {
          return Oe.has(e)
        })
      }
      var Pe = (0, f.A)(
          (0, f.A)(
            (0, f.A)(
              (0, f.A)(
                (0, f.A)(
                  (0, f.A)(
                    (0, f.A)({}, Ae.MOONPAY, {
                      line1: 'Credit/ Debit Card/ Apple Pay',
                      line2: '4.5% or 5 USD',
                      line3: '2,000\u20ac/day, 10,000\u20ac/mo',
                      supportPage: 'https://help.moonpay.io/en/',
                      minOrderValue: 24.99,
                      maxOrderValue: 5e4,
                      validCurrencies: Re(Ae.MOONPAY),
                      validCryptoCurrenciesByChain: (0, f.A)(
                        (0, f.A)(
                          (0, f.A)(
                            (0, f.A)({}, Se.MAINNET, [
                              { value: 'aave', display: 'AAVE' },
                              { value: 'bat', display: 'BAT' },
                              { value: 'dai', display: 'DAI' },
                              { value: 'eth', display: 'ETH' },
                              { value: 'mkr', display: 'MKR' },
                              { value: 'matic', display: 'MATIC' },
                              { value: 'usdt', display: 'USDT' },
                              { value: 'usdc', display: 'USDC' }
                            ]),
                            Se.MATIC,
                            [
                              { value: 'eth_polygon', display: 'ETH' },
                              { value: 'matic_polygon', display: 'MATIC' },
                              { value: 'usdc_polygon', display: 'USDC' }
                            ]
                          ),
                          Se.BSC_MAINNET,
                          [
                            { value: 'bnb_bsc', display: 'BNB' },
                            { value: 'busd_bsc', display: 'BUSD' }
                          ]
                        ),
                        Se.AVALANCHE_MAINNET,
                        [{ value: 'avax_cchain', display: 'AVAX' }]
                      ),
                      includeFees: !0,
                      api: !0,
                      enforceMax: !1
                    }),
                    Ae.WYRE,
                    {
                      line1: 'Apple Pay/ Debit/ Credit Card',
                      line2: '4.9% + 30\xa2 or 5 USD',
                      line3: '$250/day',
                      supportPage: 'https://support.sendwyre.com/en/',
                      minOrderValue: 5,
                      maxOrderValue: 500,
                      validCurrencies: Re(Ae.WYRE),
                      validCryptoCurrenciesByChain: (0, f.A)(
                        (0, f.A)(
                          (0, f.A)({}, Se.MAINNET, [
                            { value: 'AAVE', display: 'AAVE' },
                            { value: 'BAT', display: 'BAT' },
                            { value: 'BUSD', display: 'BUSD' },
                            { value: 'DAI', display: 'DAI' },
                            { value: 'ETH', display: 'ETH' },
                            { value: 'MKR', display: 'MKR' },
                            { value: 'UNI', display: 'UNI' },
                            { value: 'USDC', display: 'USDC' },
                            { value: 'USDT', display: 'USDT' }
                          ]),
                          Se.MATIC,
                          [{ value: 'MUSDC', display: 'USDC' }]
                        ),
                        Se.AVALANCHE_MAINNET,
                        [{ value: 'AVAXC', display: 'AVAXC' }]
                      ),
                      includeFees: !1,
                      api: !0,
                      enforceMax: !1
                    }
                  ),
                  Ae.RAMPNETWORK,
                  {
                    line1: 'Debit Card/ <br>Apple Pay/ Bank transfer',
                    line2: '0.49% - 2.9%',
                    line3: '5,000\u20ac/purchase, 20,000\u20ac/mo',
                    supportPage: 'https://instant.ramp.network/',
                    minOrderValue: 50,
                    maxOrderValue: 2e4,
                    validCurrencies: Re(Ae.RAMPNETWORK),
                    validCryptoCurrenciesByChain: (0, f.A)(
                      (0, f.A)(
                        (0, f.A)({}, Se.MAINNET, [
                          { value: 'ETH', display: 'ETH' },
                          { value: 'DAI', display: 'DAI' },
                          { value: 'USDC', display: 'USDC' },
                          { value: 'USDT', display: 'USDT' }
                        ]),
                        Se.MATIC,
                        [
                          { value: 'MATIC_DAI', display: 'DAI' },
                          { value: 'MATIC_MATIC', display: 'MATIC' },
                          { value: 'MATIC_USDC', display: 'USDC' }
                        ]
                      ),
                      Se.AVALANCHE_MAINNET,
                      [{ value: 'AVAX', display: 'AVAX' }]
                    ),
                    includeFees: !0,
                    api: !0,
                    receiveHint: 'walletTopUp.receiveHintRamp',
                    enforceMax: !1
                  }
                ),
                Ae.XANPOOL,
                {
                  line1:
                    'PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow',
                  line2: '2.5% buying, 3% selling',
                  line3: '$2,500 / day',
                  supportPage: 'mailto:support@xanpool.com',
                  minOrderValue: 100,
                  maxOrderValue: 2500,
                  validCurrencies: Re(Ae.XANPOOL),
                  validCryptoCurrenciesByChain: (0, f.A)({}, Se.MAINNET, [
                    { value: 'ETH', display: 'ETH' },
                    { value: 'USDT', display: 'USDT' }
                  ]),
                  includeFees: !0,
                  api: !0,
                  sell: !0,
                  enforceMax: !1
                }
              ),
              Ae.MERCURYO,
              {
                line1: 'Credit/ Debit Card/ Apple Pay',
                line2: '3.95% or 4 USD',
                line3: '10,000\u20ac/day, 25,000\u20ac/mo',
                supportPage: 'mailto:support@mercuryo.io',
                minOrderValue: 30,
                maxOrderValue: 5e3,
                validCurrencies: Re(Ae.MERCURYO),
                validCryptoCurrenciesByChain: (0, f.A)(
                  (0, f.A)({}, Se.MAINNET, [
                    { value: 'ETH', display: 'ETH' },
                    { value: 'BAT', display: 'BAT' },
                    { value: 'USDT', display: 'USDT' },
                    { value: 'DAI', display: 'DAI' }
                  ]),
                  Se.BSC_MAINNET,
                  [
                    { value: 'BNB', display: 'BNB' },
                    { value: 'BUSD', display: 'BUSD' },
                    { value: '1INCH', display: '1INCH' }
                  ]
                ),
                includeFees: !0,
                api: !0,
                enforceMax: !1
              }
            ),
            Ae.TRANSAK,
            {
              line1:
                'Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy',
              line2: '0.99% - 5.5% or 5 USD',
              line3: '$5,000/day, $28,000/mo',
              supportPage: 'https://support.transak.com/hc/en-US',
              minOrderValue: 30,
              maxOrderValue: 500,
              validCurrencies: Re(Ae.TRANSAK),
              validCryptoCurrenciesByChain: (0, f.A)(
                (0, f.A)(
                  (0, f.A)(
                    (0, f.A)({}, Se.MAINNET, [
                      { value: 'AAVE', display: 'AAVE' },
                      { value: 'DAI', display: 'DAI' },
                      { value: 'ETH', display: 'ETH' },
                      { value: 'USDC', display: 'USDC' },
                      { value: 'USDT', display: 'USDT' }
                    ]),
                    Se.MATIC,
                    [
                      { value: 'AAVE', display: 'AAVE' },
                      { value: 'DAI', display: 'DAI' },
                      { value: 'MATIC', display: 'MATIC' },
                      { value: 'USDC', display: 'USDC' },
                      { value: 'USDT', display: 'USDT' },
                      { value: 'WETH', display: 'WETH' }
                    ]
                  ),
                  Se.BSC_MAINNET,
                  [
                    { value: 'BNB', display: 'BNB' },
                    { value: 'BUSD', display: 'BUSD' }
                  ]
                ),
                Se.AVALANCHE_MAINNET,
                [{ value: 'AVAX', display: 'AVAX' }]
              ),
              includeFees: !0,
              enforceMax: !0
            }
          ),
          Ae.BANXA,
          {
            line1: 'Debit Card/ <br>Apple Pay/ Bank transfer',
            line2: '0.49% - 2.9%',
            line3: '5,000\u20ac/purchase, 20,000\u20ac/mo',
            supportPage: 'https://support.banxa.com',
            minOrderValue: 20,
            maxOrderValue: 15e3,
            validCurrencies: Re(Ae.BANXA),
            validCryptoCurrenciesByChain: (0, f.A)(
              (0, f.A)({}, Se.MAINNET, [
                { value: 'ETH', display: 'ETH' },
                { value: 'USDT', display: 'USDT' },
                { value: 'BUSD', display: 'BUSD' },
                { value: 'LINK', display: 'LINK' },
                { value: 'USDC', display: 'USDC' },
                { value: 'CHZ', display: 'CHZ' },
                { value: 'BAT', display: 'BAT' },
                { value: 'MANA', display: 'MANA' },
                { value: 'AAVE', display: 'AAVE' },
                { value: 'COMP', display: 'COMP' },
                { value: 'ENJ', display: 'ENJ' }
              ]),
              Se.MATIC,
              [{ value: 'MATIC', display: 'MATIC' }]
            ),
            includeFees: !0,
            enforceMax: !0
          }
        ),
        Te = {
          supportedVerifierList: Object.values(we),
          paymentProviders: Pe,
          api: 'https://api.tor.us',
          translations: {
            en: {
              embed: {
                continue: 'Continue',
                actionRequired: 'Authorization required',
                pendingAction:
                  'Click continue to proceed with your request in a popup',
                cookiesRequired: 'Cookies Required',
                enableCookies:
                  'Please enable cookies in your browser preferences to access Torus',
                clickHere: 'More Info'
              }
            },
            de: {
              embed: {
                continue: 'Fortsetzen',
                actionRequired: 'Autorisierung erforderlich',
                pendingAction:
                  'Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren',
                cookiesRequired: 'Cookies ben\xf6tigt',
                enableCookies:
                  'Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen',
                clickHere: 'Mehr Info'
              }
            },
            ja: {
              embed: {
                continue: '\u7d99\u7d9a\u3059\u308b',
                actionRequired: '\u8a8d\u8a3c\u304c\u5fc5\u8981\u3067\u3059',
                pendingAction:
                  '\u7d9a\u884c\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u7d9a\u884c\u3057\u307e\u3059',
                cookiesRequired: '\u5fc5\u8981\u306a\u30af\u30c3\u30ad\u30fc',
                enableCookies:
                  'Torus\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u8a2d\u5b9a\u3067Cookie\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                clickHere: '\u8a73\u3057\u304f\u306f'
              }
            },
            ko: {
              embed: {
                continue: '\uacc4\uc18d\ud558\ub2e4',
                actionRequired: '\uc2b9\uc778 \ud544\uc694',
                pendingAction:
                  '\ud31d\uc5c5\uc5d0\uc11c \uc694\uccad\uc744 \uc9c4\ud589\ud558\ub824\uba74 \uacc4\uc18d\uc744 \ud074\ub9ad\ud558\uc2ed\uc2dc\uc624.',
                cookiesRequired: '\ucfe0\ud0a4 \ud544\uc694',
                enableCookies:
                  '\ube0c\ub77c\uc6b0\uc800 \ud658\uacbd \uc124\uc815\uc5d0\uc11c \ucfe0\ud0a4\ub97c \ud65c\uc131\ud654\ud558\uc5ec Torus\uc5d0 \uc561\uc138\uc2a4\ud558\uc2ed\uc2dc\uc624.',
                clickHere: '\ub354 \ub9ce\uc740 \uc815\ubcf4'
              }
            },
            zh: {
              embed: {
                continue: '\u7ee7\u7eed',
                actionRequired: '\u9700\u8981\u6388\u6743',
                pendingAction:
                  '\u5355\u51fb\u7ee7\u7eed\u4ee5\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u7ee7\u7eed\u60a8\u7684\u8bf7\u6c42',
                cookiesRequired: '\u5fc5\u586bCookie',
                enableCookies:
                  '\u8bf7\u5728\u60a8\u7684\u6d4f\u89c8\u5668\u9996\u9009\u9879\u4e2d\u542f\u7528cookie\u4ee5\u8bbf\u95eeTorus\u3002',
                clickHere: '\u66f4\u591a\u4fe1\u606f'
              }
            }
          },
          prodTorusUrl: '',
          localStorageKeyPrefix: 'torus-'
        },
        xe = function(e) {
          return new Promise(function(t, r) {
            null != window.document.body
              ? Promise.resolve(e())
                  .then(t)
                  .catch(r)
              : window.document.addEventListener(
                  'DOMContentLoaded',
                  function() {
                    Promise.resolve(e())
                      .then(t)
                      .catch(r)
                  }
                )
          })
        },
        Me = function(e) {
          var t = window.document.createElement('template'),
            r = e.trim()
          return (t.innerHTML = r), t.content.firstChild
        },
        Ie = function(e, t, r) {
          for (
            var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), o = 3;
            o < n;
            o++
          )
            i[o - 3] = arguments[o]
          e.addEventListener(t, function n() {
            r.apply(void 0, i), e.removeEventListener(t, n)
          })
        },
        De = function(e, t, r) {
          e.on(t, function n(i) {
            r(i), e.removeListener(t, n)
          })
        }
      function je() {
        return Ne.apply(this, arguments)
      }
      function Ne() {
        return (Ne = (0, l.A)(
          (0, d.A)().mark(function e() {
            return (0, d.A)().wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      new Promise(function(e) {
                        'loading' !== document.readyState
                          ? e()
                          : Ie(document, 'DOMContentLoaded', e)
                      })
                    )
                  case 1:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      var Le = y().getLogger('torus-embed'),
        Ue = {
          errors: {
            disconnected: function() {
              return 'Torus: Lost connection to Torus.'
            },
            permanentlyDisconnected: function() {
              return 'Torus: Disconnected from iframe. Page reload required.'
            },
            sendSiteMetadata: function() {
              return 'Torus: Failed to send site metadata. This is an internal error, please report this bug.'
            },
            unsupportedSync: function(e) {
              return 'Torus: The Torus Ethereum provider does not support synchronous methods like '.concat(
                e,
                ' without a callback parameter.'
              )
            },
            invalidDuplexStream: function() {
              return 'Must provide a Node.js-style duplex stream.'
            },
            invalidOptions: function(e, t) {
              return 'Invalid options. Received: { maxEventListeners: '
                .concat(e, ', shouldSendMetadata: ')
                .concat(t, ' }')
            },
            invalidRequestArgs: function() {
              return 'Expected a single, non-array, object argument.'
            },
            invalidRequestMethod: function() {
              return "'args.method' must be a non-empty string."
            },
            invalidRequestParams: function() {
              return "'args.params' must be an object or array if provided."
            },
            invalidLoggerObject: function() {
              return "'args.logger' must be an object if provided."
            },
            invalidLoggerMethod: function(e) {
              return "'args.logger' must include required method '".concat(
                e,
                "'."
              )
            }
          },
          info: {
            connected: function(e) {
              return 'Torus: Connected to chain with ID "'.concat(e, '".')
            }
          },
          warnings: {
            enableDeprecation:
              'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
            sendDeprecation:
              'Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
            events: {
              close:
                'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              data:
                'Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
              networkChanged:
                'Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              notification:
                'Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193'
            },
            publicConfigStore:
              'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
          }
        },
        Be = Te.paymentProviders
      function We(e, t, r) {
        var n = 'MetaMask: Lost connection to "'.concat(e, '".')
        null !== t && void 0 !== t && t.stack && (n += '\n'.concat(t.stack)),
          Le.warn(n),
          r && r.listenerCount('error') > 0 && r.emit('error', n)
      }
      var qe = function() {
          return Math.random()
            .toString(36)
            .slice(2)
        },
        Ve = (function() {
          var e = (0, l.A)(
            (0, d.A)().mark(function e(t, r) {
              var n, i, o, a, s
              return (0, d.A)().wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = '1.41.3'),
                          (a = r.version || o),
                          (e.prev = 2),
                          ('binance' !== t && 'production' !== t) || r.version)
                        ) {
                          e.next = 13
                          break
                        }
                        if (Te.prodTorusUrl) {
                          e.next = 10
                          break
                        }
                        return (
                          (e.next = 7),
                          x(
                            ''
                              .concat(
                                Te.api,
                                '/latestversion?name=@toruslabs/torus-embed&version='
                              )
                              .concat(o),
                            {},
                            { useAPIKey: !0 }
                          )
                        )
                      case 7:
                        ;(s = e.sent), (e.next = 11)
                        break
                      case 10:
                        s = { data: Te.prodTorusUrl }
                      case 11:
                        ;(a = s.data), (Te.prodTorusUrl = s.data)
                      case 13:
                        e.next = 18
                        break
                      case 15:
                        ;(e.prev = 15),
                          (e.t0 = e.catch(2)),
                          Le.error(e.t0, 'unable to fetch latest version')
                      case 18:
                        Le.info('version used: ', a),
                          (e.t1 = t),
                          (e.next =
                            'binance' === e.t1
                              ? 22
                              : 'testing' === e.t1
                              ? 25
                              : 'bnb' === e.t1
                              ? 28
                              : 'polygon' === e.t1
                              ? 31
                              : 'lrc' === e.t1
                              ? 34
                              : 'beta' === e.t1
                              ? 37
                              : 'development' === e.t1
                              ? 40
                              : 43)
                        break
                      case 22:
                        return (
                          (n = 'https://binance.tor.us/v'.concat(a)),
                          (i = 'info'),
                          e.abrupt('break', 46)
                        )
                      case 25:
                        return (
                          (n = 'https://testing.tor.us'),
                          (i = 'debug'),
                          e.abrupt('break', 46)
                        )
                      case 28:
                        return (
                          (n = 'https://bnb.tor.us'),
                          (i = 'error'),
                          e.abrupt('break', 46)
                        )
                      case 31:
                        return (
                          (n = 'https://polygon.tor.us'),
                          (i = 'error'),
                          e.abrupt('break', 46)
                        )
                      case 34:
                        return (
                          (n = 'https://lrc.tor.us'),
                          (i = 'debug'),
                          e.abrupt('break', 46)
                        )
                      case 37:
                        return (
                          (n = 'https://beta.tor.us'),
                          (i = 'debug'),
                          e.abrupt('break', 46)
                        )
                      case 40:
                        return (
                          (n = 'http://localhost:4050'),
                          (i = 'debug'),
                          e.abrupt('break', 46)
                        )
                      case 43:
                        return (
                          (n = 'https://app.tor.us/v'.concat(a)),
                          (i = 'error'),
                          e.abrupt('break', 46)
                        )
                      case 46:
                        return e.abrupt('return', { torusUrl: n, logLevel: i })
                      case 47:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 15]]
              )
            })
          )
          return function(t, r) {
            return e.apply(this, arguments)
          }
        })(),
        Fe = function() {
          var e = window.navigator.language || 'en-US',
            t = e.split('-')
          return (e = Object.prototype.hasOwnProperty.call(
            Te.translations,
            t[0]
          )
            ? t[0]
            : 'en')
        },
        Ke = ['eth_subscription'],
        He = function() {},
        Ge =
          'directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375',
        ze =
          'directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450'
      function Ye(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      Q.defaultMaxListeners = 100
      var Je = function(e, t) {
          var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          return function(n, i) {
            return n || i.error
              ? t(n || i.error)
              : !r || Array.isArray(i)
              ? e(i)
              : e(i.result)
          }
        },
        Xe = (function(e) {
          function t(e) {
            var r
            ;(0, i.A)(this, t)
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = n.maxEventListeners,
              s = void 0 === o ? 100 : o,
              u = n.shouldSendMetadata,
              c = void 0 === u || u,
              d = n.jsonRpcStreamName,
              l = void 0 === d ? 'provider' : d
            if (
              ((r = (0, a.A)(this, t)),
              (0, f.A)(r, 'chainId', void 0),
              (0, f.A)(r, 'selectedAddress', void 0),
              (0, f.A)(r, '_rpcEngine', void 0),
              (0, f.A)(r, 'networkVersion', void 0),
              (0, f.A)(r, 'shouldSendMetadata', void 0),
              (0, f.A)(r, 'isTorus', void 0),
              (0, f.A)(r, '_publicConfigStore', void 0),
              (0, f.A)(r, 'tryPreopenHandle', void 0),
              (0, f.A)(r, 'enable', void 0),
              (0, f.A)(r, '_state', void 0),
              (0, f.A)(r, '_jsonRpcConnection', void 0),
              (0, f.A)(r, '_sentWarnings', {
                enable: !1,
                experimentalMethods: !1,
                send: !1,
                publicConfigStore: !1,
                events: {
                  close: !1,
                  data: !1,
                  networkChanged: !1,
                  notification: !1
                }
              }),
              !(0, ve.duplex)(e))
            )
              throw new Error(Ue.errors.invalidDuplexStream())
            ;(r.isTorus = !0),
              r.setMaxListeners(s),
              (r._state = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? Ye(Object(r), !0).forEach(function(t) {
                        ;(0, f.A)(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : Ye(Object(r)).forEach(function(t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        )
                      })
                }
                return e
              })({}, t._defaultState)),
              (r.selectedAddress = null),
              (r.networkVersion = null),
              (r.chainId = null),
              (r.shouldSendMetadata = c),
              (r._handleAccountsChanged = r._handleAccountsChanged.bind(r)),
              (r._handleChainChanged = r._handleChainChanged.bind(r)),
              (r._handleUnlockStateChanged = r._handleUnlockStateChanged.bind(
                r
              )),
              (r._handleConnect = r._handleConnect.bind(r)),
              (r._handleDisconnect = r._handleDisconnect.bind(r)),
              (r._handleStreamDisconnect = r._handleStreamDisconnect.bind(r)),
              (r._sendSync = r._sendSync.bind(r)),
              (r._rpcRequest = r._rpcRequest.bind(r)),
              (r._warnOfDeprecation = r._warnOfDeprecation.bind(r)),
              (r._initializeState = r._initializeState.bind(r)),
              (r.request = r.request.bind(r)),
              (r.send = r.send.bind(r)),
              (r.sendAsync = r.sendAsync.bind(r))
            var h = new de()
            Y()(e, h, e, r._handleStreamDisconnect.bind(r, 'MetaMask')),
              (r._publicConfigStore = new le.ObservableStore({
                storageKey: 'Metamask-Config'
              })),
              Y()(
                h.createStream('publicConfig'),
                (0, le.storeAsStream)(r._publicConfigStore),
                We.bind(r, 'MetaMask PublicConfigStore')
              ),
              h.ignoreStream('phishing'),
              r.on('connect', function() {
                r._state.isConnected = !0
              })
            var p = te()
            Y()(
              p.stream,
              h.createStream(l),
              p.stream,
              r._handleStreamDisconnect.bind(r, 'MetaMask RpcProvider')
            )
            var v = new oe()
            return (
              v.push(re()),
              v.push(function(e, t, r) {
                ;('string' === typeof e.method && e.method) ||
                  (t.error = fe.Ls.rpc.invalidRequest({
                    message: "The request 'method' must be a non-empty string.",
                    data: e
                  })),
                  r(function(e) {
                    var r = t.error
                    return r
                      ? (Le.error(
                          'MetaMask - RPC Error: '.concat(r.message),
                          r
                        ),
                        e())
                      : e()
                  })
              }),
              v.push(p.middleware),
              (r._rpcEngine = v),
              p.events.on('notification', function(e) {
                var t = e.method,
                  n = e.params
                'wallet_accountsChanged' === t
                  ? r._handleAccountsChanged(n)
                  : 'wallet_unlockStateChanged' === t
                  ? r._handleUnlockStateChanged(n)
                  : 'wallet_chainChanged' === t
                  ? r._handleChainChanged(n)
                  : Ke.includes(e.method) &&
                    (r.emit('data', e),
                    r.emit('notification', n.result),
                    r.emit('message', { type: t, data: n }))
              }),
              r
            )
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: 'publicConfigStore',
                get: function() {
                  return (
                    this._sentWarnings.publicConfigStore ||
                      (Le.warn(Ue.warnings.publicConfigStore),
                      (this._sentWarnings.publicConfigStore = !0)),
                    this._publicConfigStore
                  )
                }
              },
              {
                key: 'isConnected',
                value: function() {
                  return this._state.isConnected
                }
              },
              {
                key: 'request',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e(t) {
                      var r,
                        n,
                        i = this
                      return (0, d.A)().wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                t &&
                                'object' === typeof t &&
                                !Array.isArray(t)
                              ) {
                                e.next = 2
                                break
                              }
                              throw fe.Ls.rpc.invalidRequest({
                                message: Ue.errors.invalidRequestArgs(),
                                data: t
                              })
                            case 2:
                              if (
                                ((r = t.method),
                                (n = t.params),
                                'string' === typeof r && 0 !== r.length)
                              ) {
                                e.next = 5
                                break
                              }
                              throw fe.Ls.rpc.invalidRequest({
                                message: Ue.errors.invalidRequestMethod(),
                                data: t
                              })
                            case 5:
                              if (
                                void 0 === n ||
                                Array.isArray(n) ||
                                ('object' === typeof n && null !== n)
                              ) {
                                e.next = 7
                                break
                              }
                              throw fe.Ls.rpc.invalidRequest({
                                message: Ue.errors.invalidRequestParams(),
                                data: t
                              })
                            case 7:
                              return e.abrupt(
                                'return',
                                new Promise(function(e, t) {
                                  i._rpcRequest(
                                    { method: r, params: n },
                                    Je(e, t)
                                  )
                                })
                              )
                            case 8:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'sendAsync',
                value: function(e, t) {
                  this._rpcRequest(e, t)
                }
              },
              {
                key: 'addListener',
                value: function(e, r) {
                  return (
                    this._warnOfDeprecation(e),
                    (0, s.A)((0, u.A)(t.prototype), 'addListener', this).call(
                      this,
                      e,
                      r
                    )
                  )
                }
              },
              {
                key: 'on',
                value: function(e, r) {
                  return (
                    this._warnOfDeprecation(e),
                    (0, s.A)((0, u.A)(t.prototype), 'on', this).call(this, e, r)
                  )
                }
              },
              {
                key: 'once',
                value: function(e, r) {
                  return (
                    this._warnOfDeprecation(e),
                    (0, s.A)((0, u.A)(t.prototype), 'once', this).call(
                      this,
                      e,
                      r
                    )
                  )
                }
              },
              {
                key: 'prependListener',
                value: function(e, r) {
                  return (
                    this._warnOfDeprecation(e),
                    (0, s.A)(
                      (0, u.A)(t.prototype),
                      'prependListener',
                      this
                    ).call(this, e, r)
                  )
                }
              },
              {
                key: 'prependOnceListener',
                value: function(e, r) {
                  return (
                    this._warnOfDeprecation(e),
                    (0, s.A)(
                      (0, u.A)(t.prototype),
                      'prependOnceListener',
                      this
                    ).call(this, e, r)
                  )
                }
              },
              {
                key: '_initializeState',
                value: (function() {
                  var e = (0, l.A)(
                    (0, d.A)().mark(function e() {
                      var t, r, n, i, o
                      return (0, d.A)().wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.request({
                                    method: 'wallet_getProviderState'
                                  })
                                )
                              case 3:
                                ;(t = e.sent),
                                  (r = t.accounts),
                                  (n = t.chainId),
                                  (i = t.isUnlocked),
                                  (o = t.networkVersion),
                                  this.emit('connect', { chainId: n }),
                                  this._handleChainChanged({
                                    chainId: n,
                                    networkVersion: o
                                  }),
                                  this._handleUnlockStateChanged({
                                    accounts: r,
                                    isUnlocked: i
                                  }),
                                  this._handleAccountsChanged(r),
                                  (e.next = 17)
                                break
                              case 14:
                                ;(e.prev = 14),
                                  (e.t0 = e.catch(0)),
                                  Le.error(
                                    'MetaMask: Failed to get initial state. Please report this bug.',
                                    e.t0
                                  )
                              case 17:
                                return (
                                  (e.prev = 17),
                                  Le.info('initialized state'),
                                  (this._state.initialized = !0),
                                  this.emit('_initialized'),
                                  e.finish(17)
                                )
                              case 22:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[0, 14, 17, 22]]
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: '_rpcRequest',
                value: function(e, t) {
                  var r = this,
                    n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = t,
                    o = e
                  if (!Array.isArray(o))
                    if (
                      (o.jsonrpc || (o.jsonrpc = '2.0'),
                      'eth_accounts' === o.method ||
                        'eth_requestAccounts' === o.method)
                    )
                      i = function(e, i) {
                        r._handleAccountsChanged(
                          i.result || [],
                          'eth_accounts' === o.method,
                          n
                        ),
                          t(e, i)
                      }
                    else if ('wallet_getProviderState' === o.method)
                      return void this._rpcEngine.handle(e, i)
                  this.tryPreopenHandle(o, i)
                }
              },
              {
                key: 'send',
                value: function(e, t) {
                  var r = this
                  return (
                    this._sentWarnings.send ||
                      (Le.warn(Ue.warnings.sendDeprecation),
                      (this._sentWarnings.send = !0)),
                    'string' !== typeof e || (t && !Array.isArray(t))
                      ? e && 'object' === typeof e && 'function' === typeof t
                        ? this._rpcRequest(e, t)
                        : this._sendSync(e)
                      : new Promise(function(n, i) {
                          try {
                            r._rpcRequest(
                              { method: e, params: t },
                              Je(n, i, !1)
                            )
                          } catch (o) {
                            i(o)
                          }
                        })
                  )
                }
              },
              {
                key: '_sendSync',
                value: function(e) {
                  var t
                  switch (e.method) {
                    case 'eth_accounts':
                      t = this.selectedAddress ? [this.selectedAddress] : []
                      break
                    case 'eth_coinbase':
                      t = this.selectedAddress || null
                      break
                    case 'eth_uninstallFilter':
                      this._rpcRequest(e, He), (t = !0)
                      break
                    case 'net_version':
                      t = this.networkVersion || null
                      break
                    default:
                      throw new Error(Ue.errors.unsupportedSync(e.method))
                  }
                  return { id: e.id, jsonrpc: e.jsonrpc, result: t }
                }
              },
              {
                key: '_handleConnect',
                value: function(e) {
                  this._state.isConnected ||
                    ((this._state.isConnected = !0),
                    this.emit('connect', { chainId: e }),
                    Le.debug(Ue.info.connected(e)))
                }
              },
              {
                key: '_handleDisconnect',
                value: function(e, t) {
                  var r
                  ;(this._state.isConnected ||
                    (!this._state.isPermanentlyDisconnected && !e)) &&
                    ((this._state.isConnected = !1),
                    e
                      ? ((r = new fe.no(1013, t || Ue.errors.disconnected())),
                        Le.debug(r))
                      : ((r = new fe.no(
                          1011,
                          t || Ue.errors.permanentlyDisconnected()
                        )),
                        Le.error(r),
                        (this.chainId = null),
                        (this._state.accounts = null),
                        (this.selectedAddress = null),
                        (this._state.isUnlocked = !1),
                        (this._state.isPermanentlyDisconnected = !0)),
                    this.emit('disconnect', r))
                }
              },
              {
                key: '_handleStreamDisconnect',
                value: function(e, t) {
                  We(e, t, this),
                    this._handleDisconnect(!1, t ? t.message : void 0)
                }
              },
              {
                key: '_handleAccountsChanged',
                value: function(e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = e
                  Array.isArray(i) ||
                    (Le.error(
                      'MetaMask: Received non-array accounts parameter. Please report this bug.',
                      i
                    ),
                    (i = []))
                  var o,
                    a = (0, n.A)(e)
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      if ('string' !== typeof o.value) {
                        Le.error(
                          'MetaMask: Received non-string account. Please report this bug.',
                          e
                        ),
                          (i = [])
                        break
                      }
                    }
                  } catch (s) {
                    a.e(s)
                  } finally {
                    a.f()
                  }
                  pe()(this._state.accounts, i) ||
                    (t &&
                      Array.isArray(this._state.accounts) &&
                      this._state.accounts.length > 0 &&
                      !r &&
                      Le.error(
                        'MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.',
                        i
                      ),
                    (this._state.accounts = i),
                    this.emit('accountsChanged', i)),
                    this.selectedAddress !== i[0] &&
                      (this.selectedAddress = i[0] || null)
                }
              },
              {
                key: '_handleChainChanged',
                value: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.chainId,
                    r = e.networkVersion
                  t && r
                    ? 'loading' === r
                      ? this._handleDisconnect(!0)
                      : (this._handleConnect(t),
                        t !== this.chainId &&
                          ((this.chainId = t),
                          this._state.initialized &&
                            this.emit('chainChanged', this.chainId)))
                    : Le.error(
                        'MetaMask: Received invalid network parameters. Please report this bug.',
                        { chainId: t, networkVersion: r }
                      )
                }
              },
              {
                key: '_handleUnlockStateChanged',
                value: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.accounts,
                    r = e.isUnlocked
                  'boolean' === typeof r
                    ? r !== this._state.isUnlocked &&
                      ((this._state.isUnlocked = r),
                      this._handleAccountsChanged(t || []))
                    : Le.error(
                        'MetaMask: Received invalid isUnlocked parameter. Please report this bug.',
                        { isUnlocked: r }
                      )
                }
              },
              {
                key: '_warnOfDeprecation',
                value: function(e) {
                  !1 === this._sentWarnings.events[e] &&
                    (Le.warn(Ue.warnings.events[e]),
                    (this._sentWarnings.events[e] = !0))
                }
              }
            ])
          )
        })(Q)
      ;(0, f.A)(Xe, '_defaultState', {
        accounts: null,
        isConnected: !1,
        isUnlocked: !1,
        initialized: !1,
        isPermanentlyDisconnected: !1,
        hasEmittedConnection: !1
      })
      var Ze = function(e, t) {
          var r = {}
          return (
            e.algorithms.forEach(function(e) {
              r[e] = ye()(e)
                .update(t, 'utf8')
                .digest('base64')
            }),
            r
          )
        },
        $e = function(e, t) {
          var r = (function(e) {
              return {
                algorithms: e.algorithms || ['sha256'],
                delimiter: e.delimiter || ' ',
                full: e.full || !1
              }
            })(e),
            n = { hashes: Ze(r, t), integrity: void 0 }
          return (
            (n.integrity = (function(e, t) {
              var r = ''
              return (
                r +
                Object.keys(t.hashes)
                  .map(function(e) {
                    return ''.concat(e, '-').concat(t.hashes[e])
                  })
                  .join(e.delimiter)
              )
            })(r, n)),
            r.full ? n : n.integrity
          )
        },
        Qe = (function(e) {
          function t(e) {
            var r
            ;(0, i.A)(this, t)
            var n = e.url,
              o = e.target,
              s = e.features
            return (
              (r = (0, a.A)(this, t)),
              (0, f.A)(r, 'url', void 0),
              (0, f.A)(r, 'target', void 0),
              (0, f.A)(r, 'features', void 0),
              (0, f.A)(r, 'window', void 0),
              (0, f.A)(r, 'windowTimer', void 0),
              (0, f.A)(r, 'iClosedWindow', void 0),
              (r.url = n),
              (r.target = o || '_blank'),
              (r.features =
                s ||
                (function() {
                  var e =
                      void 0 !== window.screenLeft
                        ? window.screenLeft
                        : window.screenX,
                    t =
                      void 0 !== window.screenTop
                        ? window.screenTop
                        : window.screenY,
                    r = window.innerWidth
                      ? window.innerWidth
                      : document.documentElement.clientWidth
                      ? document.documentElement.clientWidth
                      : window.screen.width,
                    n = window.innerHeight
                      ? window.innerHeight
                      : document.documentElement.clientHeight
                      ? document.documentElement.clientHeight
                      : window.screen.height,
                    i = Math.abs((r - 1200) / 2 / 1 + e),
                    o = Math.abs((n - 700) / 2 / 1 + t)
                  return 'titlebar=0,toolbar=0,status=0,location=0,menubar=0,height='
                    .concat(700, ',width=')
                    .concat(1200, ',top=')
                    .concat(o, ',left=')
                    .concat(i)
                })()),
              (r.window = void 0),
              (r.windowTimer = void 0),
              (r.iClosedWindow = !1),
              r._setupTimer(),
              r
            )
          }
          return (
            (0, c.A)(t, e),
            (0, o.A)(t, [
              {
                key: '_setupTimer',
                value: function() {
                  var e = this
                  this.windowTimer = Number(
                    setInterval(function() {
                      e.window &&
                        e.window.closed &&
                        (clearInterval(e.windowTimer),
                        e.iClosedWindow || e.emit('close'),
                        (e.iClosedWindow = !1),
                        (e.window = void 0)),
                        void 0 === e.window && clearInterval(e.windowTimer)
                    }, 500)
                  )
                }
              },
              {
                key: 'open',
                value: function() {
                  var e
                  ;(this.window = window.open(
                    this.url.href,
                    this.target,
                    this.features
                  )),
                    null !== (e = this.window) &&
                      void 0 !== e &&
                      e.focus &&
                      this.window.focus()
                }
              },
              {
                key: 'close',
                value: function() {
                  ;(this.iClosedWindow = !0), this.window && this.window.close()
                }
              },
              {
                key: 'redirect',
                value: function(e) {
                  e
                    ? window.location.replace(this.url.href)
                    : (window.location.href = this.url.href)
                }
              }
            ])
          )
        })(B.EventEmitter)
      function et(e) {
        return new Promise(function(t, r) {
          try {
            var n = document.createElement('img')
            ;(n.onload = function() {
              return t(!0)
            }),
              (n.onerror = function() {
                return t(!1)
              }),
              (n.src = e)
          } catch (i) {
            r(i)
          }
        })
      }
      var tt = function(e) {
        var t = e.document,
          r = t.querySelector('head > meta[property="og:site_name"]')
        if (r) return r.content
        var n = t.querySelector('head > meta[name="title"]')
        return n
          ? n.content
          : t.title && t.title.length > 0
          ? t.title
          : e.location.hostname
      }
      function rt(e) {
        return nt.apply(this, arguments)
      }
      function nt() {
        return (nt = (0, l.A)(
          (0, d.A)().mark(function e(t) {
            var r, n
            return (0, d.A)().wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = t.document),
                      (n = r.querySelector('head > link[rel="shortcut icon"]')),
                      (e.t0 = n),
                      !e.t0)
                    ) {
                      e.next = 7
                      break
                    }
                    return (e.next = 6), et(n.href)
                  case 6:
                    e.t0 = e.sent
                  case 7:
                    if (!e.t0) {
                      e.next = 9
                      break
                    }
                    return e.abrupt('return', n.href)
                  case 9:
                    if (
                      ((n = Array.from(
                        r.querySelectorAll('head > link[rel="icon"]')
                      ).find(function(e) {
                        return Boolean(e.href)
                      })),
                      (e.t1 = n),
                      !e.t1)
                    ) {
                      e.next = 15
                      break
                    }
                    return (e.next = 14), et(n.href)
                  case 14:
                    e.t1 = e.sent
                  case 15:
                    if (!e.t1) {
                      e.next = 17
                      break
                    }
                    return e.abrupt('return', n.href)
                  case 17:
                    return e.abrupt('return', null)
                  case 18:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      var it = (function() {
        var e = (0, l.A)(
          (0, d.A)().mark(function e() {
            return (0, d.A)().wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.t0 = tt(window)), (e.next = 3), rt(window)
                  case 3:
                    return (
                      (e.t1 = e.sent),
                      e.abrupt('return', { name: e.t0, icon: e.t1 })
                    )
                  case 5:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )
        return function() {
          return e.apply(this, arguments)
        }
      })()
      function ot() {
        return (ot = (0, l.A)(
          (0, d.A)().mark(function e(t) {
            var r
            return (0, d.A)().wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), it()
                    case 3:
                      ;(r = e.sent),
                        t.handle(
                          {
                            jsonrpc: '2.0',
                            id: qe(),
                            method: 'wallet_sendDomainMetadata',
                            params: r
                          },
                          He
                        ),
                        (e.next = 10)
                      break
                    case 7:
                      ;(e.prev = 7),
                        (e.t0 = e.catch(0)),
                        Le.error({
                          message: Ue.errors.sendSiteMetadata(),
                          originalError: e.t0
                        })
                    case 10:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 7]]
            )
          })
        )).apply(this, arguments)
      }
      var at = ['host', 'chainId', 'networkName']
      function st(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? st(Object(r), !0).forEach(function(t) {
                ;(0, f.A)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : st(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ct = (0, f.A)(
          (0, f.A)(
            (0, f.A)(
              (0, f.A)((0, f.A)({}, be.GOOGLE, !0), be.FACEBOOK, !0),
              be.REDDIT,
              !0
            ),
            be.TWITCH,
            !0
          ),
          be.DISCORD,
          !0
        ),
        dt =
          'sha384-QwEWmiPwBSE0zoVFrfYw+zFNBRwBhOo6NucsqlJnGOqpUEVaRo1UOMrAKDykq2WP',
        lt = [
          'eth_sendTransaction',
          'eth_signTypedData',
          'eth_signTypedData_v3',
          'eth_signTypedData_v4',
          'personal_sign',
          'eth_getEncryptionPublicKey',
          'eth_decrypt',
          'wallet_addEthereumChain',
          'wallet_switchEthereumChain'
        ]
      !(function() {
        var e = (0, l.A)(
          (0, d.A)().mark(function e() {
            var t, r, n
            return (0, d.A)().wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), 'undefined' !== typeof document)) {
                        e.next = 3
                        break
                      }
                      return e.abrupt('return')
                    case 3:
                      return (
                        (t = document.createElement('link')),
                        (e.next = 6),
                        Ve('production', { check: !1, hash: dt, version: '' })
                      )
                    case 6:
                      ;(r = e.sent),
                        (n = r.torusUrl),
                        (t.href = ''.concat(n, '/popup')),
                        (t.crossOrigin = 'anonymous'),
                        (t.type = 'text/html'),
                        (t.rel = 'prefetch'),
                        t.relList &&
                          t.relList.supports &&
                          t.relList.supports('prefetch') &&
                          document.head.appendChild(t),
                        (e.next = 18)
                      break
                    case 15:
                      ;(e.prev = 15), (e.t0 = e.catch(0)), Le.warn(e.t0)
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 15]]
            )
          })
        )
        return function() {
          return e.apply(this, arguments)
        }
      })()()
      var ft = (function() {
        return (0, o.A)(
          function e() {
            ;(0, i.A)(this, e)
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = t.buttonPosition,
              n = void 0 === r ? ke.BOTTOM_LEFT : r,
              o = t.buttonSize,
              a = void 0 === o ? 56 : o,
              s = t.modalZIndex,
              u = void 0 === s ? 99999 : s,
              c = t.apiKey,
              d = void 0 === c ? 'torus-default' : c
            ;(0, f.A)(this, 'buttonPosition', ke.BOTTOM_LEFT),
              (0, f.A)(this, 'buttonSize', void 0),
              (0, f.A)(this, 'torusUrl', void 0),
              (0, f.A)(this, 'torusIframe', void 0),
              (0, f.A)(this, 'styleLink', void 0),
              (0, f.A)(this, 'isLoggedIn', void 0),
              (0, f.A)(this, 'isInitialized', void 0),
              (0, f.A)(this, 'torusWidgetVisibility', void 0),
              (0, f.A)(this, 'torusAlert', void 0),
              (0, f.A)(this, 'apiKey', void 0),
              (0, f.A)(this, 'modalZIndex', void 0),
              (0, f.A)(this, 'alertZIndex', void 0),
              (0, f.A)(this, 'torusAlertContainer', void 0),
              (0, f.A)(this, 'isIframeFullScreen', void 0),
              (0, f.A)(this, 'whiteLabel', void 0),
              (0, f.A)(this, 'requestedVerifier', void 0),
              (0, f.A)(this, 'currentVerifier', void 0),
              (0, f.A)(this, 'embedTranslations', void 0),
              (0, f.A)(this, 'ethereum', void 0),
              (0, f.A)(this, 'provider', void 0),
              (0, f.A)(this, 'communicationMux', void 0),
              (0, f.A)(this, 'isLoginCallback', void 0),
              (0, f.A)(this, 'paymentProviders', Te.paymentProviders),
              (0, f.A)(this, 'loginHint', ''),
              (0, f.A)(this, 'useWalletConnect', void 0),
              (0, f.A)(this, 'isCustomLogin', !1),
              (this.buttonPosition = n),
              (this.buttonSize = a),
              (this.torusUrl = ''),
              (this.isLoggedIn = !1),
              (this.isInitialized = !1),
              (this.torusWidgetVisibility = !0),
              (this.requestedVerifier = ''),
              (this.currentVerifier = ''),
              (this.apiKey = d),
              C(d),
              (this.modalZIndex = u),
              (this.alertZIndex = u + 1e3),
              (this.isIframeFullScreen = !1)
          },
          [
            {
              key: 'init',
              value: (function() {
                var e = (0, l.A)(
                  (0, d.A)().mark(function e() {
                    var t,
                      r,
                      n,
                      i,
                      o,
                      a,
                      s,
                      u,
                      c,
                      f,
                      h,
                      p,
                      g,
                      y,
                      m,
                      b,
                      w,
                      _,
                      A,
                      S,
                      E,
                      k,
                      C,
                      O,
                      R,
                      P,
                      T,
                      x,
                      M,
                      I,
                      D,
                      j,
                      N,
                      L,
                      U,
                      B,
                      W,
                      q,
                      V,
                      F = this,
                      K = arguments
                    return (0, d.A)().wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = (t =
                                  K.length > 0 && void 0 !== K[0] ? K[0] : {})
                                  .buildEnv),
                                (n = void 0 === r ? Ee.PRODUCTION : r),
                                (i = t.enableLogging),
                                (o = void 0 !== i && i),
                                (a = t.enabledVerifiers),
                                (s = void 0 === a ? ct : a),
                                (u = t.network),
                                (c =
                                  void 0 === u
                                    ? {
                                        host: 'mainnet',
                                        chainId: null,
                                        networkName: '',
                                        blockExplorer: '',
                                        ticker: '',
                                        tickerName: ''
                                      }
                                    : u),
                                (f = t.loginConfig),
                                (h = void 0 === f ? {} : f),
                                (p = t.showTorusButton),
                                (g = void 0 === p || p),
                                (y = t.integrity),
                                (m =
                                  void 0 === y
                                    ? { check: !1, hash: dt, version: '' }
                                    : y),
                                (b = t.whiteLabel),
                                (w = t.skipTKey),
                                (_ = void 0 !== w && w),
                                (A = t.useWalletConnect),
                                (S = void 0 !== A && A),
                                (E = t.mfaLevel),
                                (k = void 0 === E ? 'default' : E),
                                !this.isInitialized)
                              ) {
                                e.next = 3
                                break
                              }
                              throw new Error('Already initialized')
                            case 3:
                              return (e.next = 5), Ve(n, m)
                            case 5:
                              if (
                                ((C = e.sent),
                                (O = C.torusUrl),
                                (R = C.logLevel),
                                Le.info(O, 'url loaded'),
                                (this.torusUrl = O),
                                (this.whiteLabel = b),
                                (this.useWalletConnect = S),
                                (this.isCustomLogin =
                                  !!(h && Object.keys(h).length > 0) ||
                                  !!(b && Object.keys(b).length > 0)),
                                Le.setDefaultLevel(R),
                                o ? Le.enableAll() : Le.disableAll(),
                                (this.torusWidgetVisibility = g),
                                (P = new URL(O)).pathname.endsWith('/')
                                  ? (P.pathname += 'popup')
                                  : (P.pathname += '/popup'),
                                (P.hash = '#isCustomLogin='.concat(
                                  this.isCustomLogin
                                )),
                                (this.torusIframe = Me(
                                  '<iframe\n        id="torusIframe"\n        allow='
                                    .concat(
                                      S ? 'camera' : '',
                                      '\n        class="torusIframe"\n        src="'
                                    )
                                    .concat(
                                      P.href,
                                      '"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%; color-scheme: none;\n        height: 100%; border: none; border-radius: 0; z-index: '
                                    )
                                    .concat(
                                      this.modalZIndex,
                                      '"\n      ></iframe>'
                                    )
                                )),
                                (this.torusAlertContainer = Me(
                                  '<div id="torusAlertContainer"></div>'
                                )),
                                (this.torusAlertContainer.style.display =
                                  'none'),
                                this.torusAlertContainer.style.setProperty(
                                  'z-index',
                                  this.alertZIndex.toString()
                                ),
                                (T = window.document.createElement(
                                  'link'
                                )).setAttribute('rel', 'stylesheet'),
                                T.setAttribute('type', 'text/css'),
                                T.setAttribute(
                                  'href',
                                  ''.concat(O, '/css/widget.css')
                                ),
                                (this.styleLink = T),
                                (x = this.whiteLabel || {}),
                                (M = x.defaultLanguage),
                                (I = void 0 === M ? Fe() : M),
                                (D = x.customTranslations),
                                (j = void 0 === D ? {} : D),
                                (N = v()(Te.translations, j)),
                                (L = N[I] || Te.translations[Fe()]),
                                (this.embedTranslations = L.embed),
                                (U = (function() {
                                  var e = (0, l.A)(
                                    (0, d.A)().mark(function e() {
                                      return (0, d.A)().wrap(function(e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (e.next = 2), je()
                                            case 2:
                                              return e.abrupt(
                                                'return',
                                                new Promise(function(e, t) {
                                                  ;(F.torusIframe.onload = (0,
                                                  l.A)(
                                                    (0, d.A)().mark(
                                                      function r() {
                                                        var n
                                                        return (0, d.A)().wrap(
                                                          function(r) {
                                                            for (;;)
                                                              switch (
                                                                (r.prev =
                                                                  r.next)
                                                              ) {
                                                                case 0:
                                                                  F._setupWeb3(),
                                                                    (n = F.communicationMux.getStream(
                                                                      'init_stream'
                                                                    )).on(
                                                                      'data',
                                                                      function(
                                                                        r
                                                                      ) {
                                                                        var n =
                                                                            r.name,
                                                                          i =
                                                                            r.data,
                                                                          o =
                                                                            r.error
                                                                        'init_complete' ===
                                                                          n &&
                                                                        i.success
                                                                          ? ((F.isInitialized = !0),
                                                                            F._displayIframe(
                                                                              F.isIframeFullScreen
                                                                            ),
                                                                            e(
                                                                              void 0
                                                                            ))
                                                                          : o &&
                                                                            t(
                                                                              new Error(
                                                                                o
                                                                              )
                                                                            )
                                                                      }
                                                                    ),
                                                                    n.write({
                                                                      name:
                                                                        'init_stream',
                                                                      data: {
                                                                        enabledVerifiers: s,
                                                                        loginConfig: h,
                                                                        whiteLabel:
                                                                          F.whiteLabel,
                                                                        buttonPosition:
                                                                          F.buttonPosition,
                                                                        buttonSize:
                                                                          F.buttonSize,
                                                                        torusWidgetVisibility:
                                                                          F.torusWidgetVisibility,
                                                                        apiKey:
                                                                          F.apiKey,
                                                                        skipTKey: _,
                                                                        network: c,
                                                                        mfaLevel: k
                                                                      }
                                                                    })
                                                                case 4:
                                                                case 'end':
                                                                  return r.stop()
                                                              }
                                                          },
                                                          r
                                                        )
                                                      }
                                                    )
                                                  )),
                                                    window.document.head.appendChild(
                                                      F.styleLink
                                                    ),
                                                    window.document.body.appendChild(
                                                      F.torusIframe
                                                    ),
                                                    window.document.body.appendChild(
                                                      F.torusAlertContainer
                                                    )
                                                })
                                              )
                                            case 3:
                                            case 'end':
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                  return function() {
                                    return e.apply(this, arguments)
                                  }
                                })()),
                                'production' !== n || !m.check)
                              ) {
                                e.next = 54
                                break
                              }
                              return (
                                (B = ''.concat(O, '/popup')),
                                (e.next = 37),
                                fetch(B, { cache: 'reload' })
                              )
                            case 37:
                              if (
                                'max-age=3600' ===
                                (W = e.sent).headers.get('Cache-Control')
                              ) {
                                e.next = 40
                                break
                              }
                              throw new Error(
                                'Unexpected Cache-Control headers, got '.concat(
                                  W.headers.get('Cache-Control')
                                )
                              )
                            case 40:
                              return (e.next = 42), W.text()
                            case 42:
                              if (
                                ((q = e.sent),
                                (V = $e({ algorithms: ['sha384'] }, q)),
                                Le.info(V, 'integrity'),
                                V !== m.hash)
                              ) {
                                e.next = 50
                                break
                              }
                              return (e.next = 48), U()
                            case 48:
                              e.next = 52
                              break
                            case 50:
                              throw (this.clearInit(),
                              new Error('Integrity check failed'))
                            case 52:
                              e.next = 56
                              break
                            case 54:
                              return (e.next = 56), U()
                            case 56:
                              return e.abrupt('return', void 0)
                            case 57:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this
                    )
                  })
                )
                return function() {
                  return e.apply(this, arguments)
                }
              })()
            },
            {
              key: 'login',
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.verifier,
                  r = void 0 === t ? '' : t,
                  n = e.login_hint,
                  i = void 0 === n ? '' : n
                if (!this.isInitialized) throw new Error('Call init() first')
                return (
                  (this.requestedVerifier = r),
                  (this.loginHint = i),
                  this.ethereum.enable()
                )
              }
            },
            {
              key: 'logout',
              value: function() {
                var e = this
                return new Promise(function(t, r) {
                  if (e.isLoggedIn) {
                    e.communicationMux
                      .getStream('logout')
                      .write({ name: 'logOut' })
                    var n = e.communicationMux.getStream('status')
                    De(n, 'data', function(n) {
                      n.loggedIn
                        ? r(new Error('Some Error Occured'))
                        : ((e.isLoggedIn = !1),
                          (e.currentVerifier = ''),
                          (e.requestedVerifier = ''),
                          t())
                    })
                  } else r(new Error('User has not logged in yet'))
                })
              }
            },
            {
              key: 'cleanUp',
              value: (function() {
                var e = (0, l.A)(
                  (0, d.A)().mark(function e() {
                    return (0, d.A)().wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.isLoggedIn) {
                                e.next = 3
                                break
                              }
                              return (e.next = 3), this.logout()
                            case 3:
                              this.clearInit()
                            case 4:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this
                    )
                  })
                )
                return function() {
                  return e.apply(this, arguments)
                }
              })()
            },
            {
              key: 'clearInit',
              value: function() {
                function e(e) {
                  return e instanceof Element || e instanceof HTMLDocument
                }
                e(this.styleLink) &&
                  window.document.body.contains(this.styleLink) &&
                  (this.styleLink.remove(), (this.styleLink = void 0)),
                  e(this.torusIframe) &&
                    window.document.body.contains(this.torusIframe) &&
                    (this.torusIframe.remove(), (this.torusIframe = void 0)),
                  e(this.torusAlertContainer) &&
                    window.document.body.contains(this.torusAlertContainer) &&
                    ((this.torusAlert = void 0),
                    this.torusAlertContainer.remove(),
                    (this.torusAlertContainer = void 0)),
                  (this.isInitialized = !1)
              }
            },
            {
              key: 'hideTorusButton',
              value: function() {
                ;(this.torusWidgetVisibility = !1),
                  this._sendWidgetVisibilityStatus(!1),
                  this._displayIframe()
              }
            },
            {
              key: 'showTorusButton',
              value: function() {
                ;(this.torusWidgetVisibility = !0),
                  this._sendWidgetVisibilityStatus(!0),
                  this._displayIframe()
              }
            },
            {
              key: 'setProvider',
              value: function(e) {
                var t = this,
                  r = e.host,
                  n = void 0 === r ? 'mainnet' : r,
                  i = e.chainId,
                  o = void 0 === i ? null : i,
                  a = e.networkName,
                  s = void 0 === a ? '' : a,
                  u = (0, h.A)(e, at)
                return new Promise(function(e, r) {
                  var i = t.communicationMux.getStream('provider_change')
                  De(i, 'data', function(t) {
                    var n = t.data,
                      i = n.err,
                      o = n.success
                    Le.info(t),
                      i ? r(i) : o ? e() : r(new Error('some error occured'))
                  })
                  var a = qe()
                  t._handleWindow(a, { target: '_blank', features: Ge }),
                    i.write({
                      name: 'show_provider_change',
                      data: {
                        network: ut({ host: n, chainId: o, networkName: s }, u),
                        preopenInstanceId: a,
                        override: !1
                      }
                    })
                })
              }
            },
            {
              key: 'showWallet',
              value: function(e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.communicationMux.getStream('show_wallet'),
                  i = e ? '/'.concat(e) : ''
                n.write({ name: 'show_wallet', data: { path: i } })
                De(n, 'data', function(e) {
                  if ('show_wallet_instance' === e.name) {
                    var n = e.data.instanceId,
                      o = new URL(''.concat(t.torusUrl, '/wallet').concat(i))
                    o.searchParams.append('integrity', 'true'),
                      o.searchParams.append('instanceId', n),
                      Object.keys(r).forEach(function(e) {
                        o.searchParams.append(e, r[e])
                      }),
                      (o.hash = '#isCustomLogin='.concat(t.isCustomLogin)),
                      new Qe({
                        url: o,
                        features:
                          'directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315'
                      }).open()
                  }
                })
              }
            },
            {
              key: 'getPublicAddress',
              value: (function() {
                var e = (0, l.A)(
                  (0, d.A)().mark(function e(t) {
                    var r, n, i, o, a, s, u
                    return (0, d.A)().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = t.verifier),
                              (n = t.verifierId),
                              (i = t.isExtended),
                              (o = void 0 !== i && i),
                              Te.supportedVerifierList.includes(r) && _e[r])
                            ) {
                              e.next = 3
                              break
                            }
                            throw new Error('Unsupported verifier')
                          case 3:
                            return (
                              (a = r),
                              (s = _e[r]),
                              (u = new URL(
                                'https://api.tor.us/lookup/torus'
                              )).searchParams.append('verifier', s),
                              u.searchParams.append('verifierId', n),
                              u.searchParams.append('walletVerifier', a),
                              u.searchParams.append('network', 'mainnet'),
                              u.searchParams.append('isExtended', o.toString()),
                              e.abrupt(
                                'return',
                                x(
                                  u.href,
                                  {
                                    headers: {
                                      'Content-Type':
                                        'application/json; charset=utf-8'
                                    }
                                  },
                                  { useAPIKey: !0 }
                                )
                              )
                            )
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()
            },
            {
              key: 'getUserInfo',
              value: function(e) {
                var t = this
                return new Promise(function(r, n) {
                  if (t.isLoggedIn) {
                    var i = t.communicationMux.getStream('user_info_access')
                    i.write({ name: 'user_info_access_request' })
                    De(i, 'data', function(i) {
                      var o = i.name,
                        a = i.data,
                        s = a.approved,
                        u = a.payload,
                        c = a.rejected,
                        d = a.newRequest
                      if ('user_info_access_response' === o)
                        if (s) r(u)
                        else if (c) n(new Error('User rejected the request'))
                        else if (d) {
                          var l = t.communicationMux.getStream('user_info')
                          De(l, 'data', function(e) {
                            'user_info_response' === e.name &&
                              (e.data.approved
                                ? r(e.data.payload)
                                : n(new Error('User rejected the request')))
                          })
                          var f = qe()
                          t._handleWindow(f, {
                            target: '_blank',
                            features: Ge
                          }),
                            l.write({
                              name: 'user_info_request',
                              data: { message: e, preopenInstanceId: f }
                            })
                        }
                    })
                  } else n(new Error('User has not logged in yet'))
                })
              }
            },
            {
              key: 'initiateTopup',
              value: function(e, t) {
                var r = this
                return new Promise(function(n, i) {
                  if (r.isInitialized) {
                    var o = (function(e, t) {
                        var r = {}
                        if (!e) return { errors: r, isValid: !0 }
                        if (e && !Be[e])
                          return (
                            (r.provider = 'Invalid Provider'),
                            { errors: r, isValid: 0 === Object.keys(r).length }
                          )
                        var n = Be[e],
                          i = t || {}
                        if (i.fiatValue) {
                          var o = +parseFloat(i.fiatValue.toString()) || 0
                          o < n.minOrderValue &&
                            (r.fiatValue =
                              'Requested amount is lower than supported'),
                            o > n.maxOrderValue &&
                              n.enforceMax &&
                              (r.fiatValue =
                                'Requested amount is higher than supported')
                        }
                        if (
                          (i.selectedCurrency &&
                            !n.validCurrencies.includes(i.selectedCurrency) &&
                            (r.selectedCurrency = 'Unsupported currency'),
                          i.selectedCryptoCurrency)
                        ) {
                          var a = Object.values(n.validCryptoCurrenciesByChain)
                              .flat()
                              .map(function(e) {
                                return e.value
                              }),
                            s =
                              e === Ae.MOONPAY
                                ? i.selectedCryptoCurrency.toLowerCase()
                                : i.selectedCryptoCurrency
                          a &&
                            !a.includes(s) &&
                            (r.selectedCryptoCurrency =
                              'Unsupported cryptoCurrency')
                        }
                        return {
                          errors: r,
                          isValid: 0 === Object.keys(r).length
                        }
                      })(e, t),
                      a = o.errors
                    if (!o.isValid) return void i(new Error(JSON.stringify(a)))
                    var s = r.communicationMux.getStream('topup')
                    De(s, 'data', function(e) {
                      'topup_response' === e.name &&
                        (e.data.success
                          ? n(e.data.success)
                          : i(new Error(e.data.error)))
                    })
                    var u = qe()
                    r._handleWindow(u),
                      s.write({
                        name: 'topup_request',
                        data: { provider: e, params: t, preopenInstanceId: u }
                      })
                  } else i(new Error('Torus is not initialized yet'))
                })
              }
            },
            {
              key: 'loginWithPrivateKey',
              value: (function() {
                var e = (0, l.A)(
                  (0, d.A)().mark(function e(t) {
                    var r,
                      n,
                      i = this
                    return (0, d.A)().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.privateKey),
                              (n = t.userInfo),
                              e.abrupt(
                                'return',
                                new Promise(function(e, t) {
                                  if (i.isInitialized) {
                                    if (32 !== me.from(r, 'hex').length)
                                      return void t(
                                        new Error(
                                          'Invalid private key, Please provide a 32 byte valid secp25k1 private key'
                                        )
                                      )
                                    var o = i.communicationMux.getStream(
                                      'login_with_private_key'
                                    )
                                    De(o, 'data', function(r) {
                                      'login_with_private_key_response' ===
                                        r.name &&
                                        (r.data.success
                                          ? e(r.data.success)
                                          : t(new Error(r.data.error)))
                                    }),
                                      o.write({
                                        name: 'login_with_private_key_request',
                                        data: { privateKey: r, userInfo: n }
                                      })
                                  } else t(new Error('Torus is not initialized yet'))
                                })
                              )
                            )
                          case 2:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()
            },
            {
              key: 'showWalletConnectScanner',
              value: (function() {
                var e = (0, l.A)(
                  (0, d.A)().mark(function e() {
                    var t = this
                    return (0, d.A)().wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.useWalletConnect) {
                                e.next = 2
                                break
                              }
                              throw new Error(
                                'Set `useWalletConnect` as true in init function options to use wallet connect scanner'
                              )
                            case 2:
                              return e.abrupt(
                                'return',
                                new Promise(function(e, r) {
                                  if (t.isLoggedIn) {
                                    var n = t.communicationMux.getStream(
                                      'wallet_connect_stream'
                                    )
                                    De(n, 'data', function(n) {
                                      'wallet_connect_stream_res' === n.name &&
                                        (n.data.success
                                          ? e(n.data.success)
                                          : r(new Error(n.data.error)),
                                        t._displayIframe())
                                    }),
                                      n.write({
                                        name: 'wallet_connect_stream_req'
                                      }),
                                      t._displayIframe(!0)
                                  } else r(new Error('User has not logged in yet'))
                                })
                              )
                            case 3:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      this
                    )
                  })
                )
                return function() {
                  return e.apply(this, arguments)
                }
              })()
            },
            {
              key: '_handleWindow',
              value: function(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = t.url,
                  n = t.target,
                  i = t.features
                if (e) {
                  var o = this.communicationMux.getStream('window'),
                    a = new URL(
                      r ||
                        ''
                          .concat(this.torusUrl, '/redirect?preopenInstanceId=')
                          .concat(e)
                    )
                  a.hash
                    ? (a.hash += '&isCustomLogin='.concat(this.isCustomLogin))
                    : (a.hash = '#isCustomLogin='.concat(this.isCustomLogin))
                  var s = new Qe({ url: a, target: n, features: i })
                  if ((s.open(), !s.window))
                    return void this._createPopupBlockAlert(e, a.href)
                  o.write({
                    name: 'opened_window',
                    data: { preopenInstanceId: e }
                  })
                  var u = function t(r) {
                    var n = r.preopenInstanceId,
                      i = r.close
                    n === e && i && (s.close(), o.removeListener('data', t))
                  }
                  o.on('data', u),
                    s.once('close', function() {
                      o.write({ data: { preopenInstanceId: e, closed: !0 } }),
                        o.removeListener('data', u)
                    })
                }
              }
            },
            {
              key: '_setEmbedWhiteLabel',
              value: function(e) {
                var t = (this.whiteLabel || {}).theme
                if (t) {
                  var r = t.isDark,
                    n = void 0 !== r && r,
                    i = t.colors,
                    o = void 0 === i ? {} : i
                  n && e.classList.add('torus-dark'),
                    o.torusBrand1 &&
                      e.style.setProperty('--torus-brand-1', o.torusBrand1),
                    o.torusGray2 &&
                      e.style.setProperty('--torus-gray-2', o.torusGray2)
                }
              }
            },
            {
              key: '_getLogoUrl',
              value: function() {
                var e,
                  t,
                  r,
                  n = ''.concat(this.torusUrl, '/images/torus_icon-blue.svg')
                null !== (e = this.whiteLabel) &&
                void 0 !== e &&
                null !== (e = e.theme) &&
                void 0 !== e &&
                e.isDark
                  ? (n =
                      (null === (t = this.whiteLabel) || void 0 === t
                        ? void 0
                        : t.logoLight) || n)
                  : (n =
                      (null === (r = this.whiteLabel) || void 0 === r
                        ? void 0
                        : r.logoDark) || n)
                return n
              }
            },
            {
              key: '_sendWidgetVisibilityStatus',
              value: function(e) {
                this.communicationMux
                  .getStream('torus-widget-visibility')
                  .write({ data: e })
              }
            },
            {
              key: '_displayIframe',
              value: function() {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = {},
                  r = this.buttonSize + 14
                if (e)
                  (t.display = 'block'),
                    (t.width = '100%'),
                    (t.height = '100%'),
                    (t.top = '0px'),
                    (t.right = '0px'),
                    (t.left = '0px'),
                    (t.bottom = '0px')
                else
                  switch (
                    ((t.display = this.torusWidgetVisibility
                      ? 'block'
                      : 'none'),
                    (t.height = ''.concat(r, 'px')),
                    (t.width = ''.concat(r, 'px')),
                    this.buttonPosition)
                  ) {
                    case ke.TOP_LEFT:
                      ;(t.top = '0px'),
                        (t.left = '0px'),
                        (t.right = 'auto'),
                        (t.bottom = 'auto')
                      break
                    case ke.TOP_RIGHT:
                      ;(t.top = '0px'),
                        (t.right = '0px'),
                        (t.left = 'auto'),
                        (t.bottom = 'auto')
                      break
                    case ke.BOTTOM_RIGHT:
                      ;(t.bottom = '0px'),
                        (t.right = '0px'),
                        (t.top = 'auto'),
                        (t.left = 'auto')
                      break
                    case ke.BOTTOM_LEFT:
                    default:
                      ;(t.bottom = '0px'),
                        (t.left = '0px'),
                        (t.top = 'auto'),
                        (t.right = 'auto')
                  }
                Object.assign(this.torusIframe.style, t),
                  (this.isIframeFullScreen = e)
              }
            },
            {
              key: '_setupWeb3',
              value: function() {
                var e = this
                Le.info('setupWeb3 running')
                var t = new Z({
                    name: 'embed_metamask',
                    target: 'iframe_metamask',
                    targetWindow: this.torusIframe.contentWindow,
                    targetOrigin: new URL(this.torusUrl).origin
                  }),
                  r = new Z({
                    name: 'embed_comm',
                    target: 'iframe_comm',
                    targetWindow: this.torusIframe.contentWindow,
                    targetOrigin: new URL(this.torusUrl).origin
                  }),
                  n = new Xe(t),
                  i = function(e) {
                    var t = n[e]
                    n[e] = function(e) {
                      if (e && 'eth_requestAccounts' === e) return n.enable()
                      for (
                        var r = arguments.length,
                          i = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        i[o - 1] = arguments[o]
                      return t.apply(this, [e].concat(i))
                    }
                  }
                i('send'),
                  i('sendAsync'),
                  (n.enable = function() {
                    return new Promise(function(t, r) {
                      n.sendAsync(
                        {
                          jsonrpc: '2.0',
                          id: qe(),
                          method: 'eth_requestAccounts',
                          params: []
                        },
                        function(n, i) {
                          var o = (i || {}).result
                          if (n)
                            setTimeout(function() {
                              r(n)
                            }, 50)
                          else if (Array.isArray(o) && o.length > 0) {
                            var a = function() {
                              if (
                                '' !== e.requestedVerifier &&
                                e.currentVerifier !== e.requestedVerifier
                              ) {
                                var n = e.requestedVerifier
                                e.logout()
                                  .then(function(i) {
                                    ;(e.requestedVerifier = n),
                                      e._showLoginPopup(!0, t, r)
                                  })
                                  .catch(function(e) {
                                    return r(e)
                                  })
                              } else t(o)
                            }
                            e.isLoggedIn ? a() : (e.isLoginCallback = a)
                          } else e._showLoginPopup(!0, t, r)
                        }
                      )
                    })
                  }),
                  (n.tryPreopenHandle = function(t, r) {
                    var i = t
                    if (!Array.isArray(i) && lt.includes(i.method)) {
                      var o = qe()
                      e._handleWindow(o, { target: '_blank', features: ze }),
                        (i.preopenInstanceId = o)
                    }
                    n._rpcEngine.handle(i, r)
                  })
                var o = new Proxy(n, {
                  deleteProperty: function() {
                    return !0
                  }
                })
                this.ethereum = o
                var a = (function(e) {
                  var t = new de()
                  return (
                    (t.getStream = function(e) {
                      return this._substreams[e]
                        ? this._substreams[e]
                        : this.createStream(e)
                    }),
                    Y()(e, t, e, function(e) {
                      e && window.console.error(e)
                    }),
                    t
                  )
                })(r)
                ;(this.communicationMux = a),
                  a.getStream('window').on('data', function(t) {
                    'create_window' === t.name &&
                      e._createPopupBlockAlert(
                        t.data.preopenInstanceId,
                        t.data.url
                      )
                  }),
                  a.getStream('widget').on('data', function(t) {
                    var r = t.data
                    e._displayIframe(r)
                  }),
                  a.getStream('status').on('data', function(t) {
                    t.loggedIn
                      ? ((e.isLoggedIn = t.loggedIn),
                        (e.currentVerifier = t.verifier))
                      : e._displayIframe(),
                      e.isLoginCallback &&
                        (e.isLoginCallback(), delete e.isLoginCallback)
                  }),
                  (this.provider = o),
                  this.provider.shouldSendMetadata &&
                    (function(e) {
                      ot.apply(this, arguments)
                    })(this.provider._rpcEngine),
                  n._initializeState(),
                  Le.debug('Torus - injected provider')
              }
            },
            {
              key: '_showLoginPopup',
              value: function(e, t, r) {
                var n = this,
                  i = function(e) {
                    var i = e.err,
                      o = e.selectedAddress
                    i ? (Le.error(i), r && r(i)) : t && t([o]),
                      n.isIframeFullScreen && n._displayIframe()
                  },
                  o = this.communicationMux.getStream('oauth')
                if (this.requestedVerifier) {
                  De(o, 'data', i)
                  var a = qe()
                  this._handleWindow(a),
                    o.write({
                      name: 'oauth',
                      data: {
                        calledFromEmbed: e,
                        verifier: this.requestedVerifier,
                        preopenInstanceId: a,
                        login_hint: this.loginHint
                      }
                    })
                } else
                  this._displayIframe(!0),
                    De(o, 'data', i),
                    o.write({
                      name: 'oauth_modal',
                      data: { calledFromEmbed: e }
                    })
              }
            },
            {
              key: '_createPopupBlockAlert',
              value: function(e, t) {
                var r = this,
                  n = this._getLogoUrl(),
                  i = Me(
                    '<div id="torusAlert" class="torus-alert--v2">' +
                      '<div id="torusAlert__logo"><img src="'.concat(
                        n,
                        '" /></div>'
                      ) +
                      '<div>' +
                      '<h1 id="torusAlert__title">'.concat(
                        this.embedTranslations.actionRequired,
                        '</h1>'
                      ) +
                      '<p id="torusAlert__desc">'.concat(
                        this.embedTranslations.pendingAction,
                        '</p>'
                      ) +
                      '</div></div>'
                  ),
                  o = Me(
                    '<div><a id="torusAlert__btn">'.concat(
                      this.embedTranslations.continue,
                      '</a></div>'
                    )
                  ),
                  a = Me('<div id="torusAlert__btn-container"></div>')
                a.appendChild(o), i.appendChild(a)
                this._setEmbedWhiteLabel(i)
                xe(function() {
                  ;(r.torusAlertContainer.style.display = 'block'),
                    r.torusAlertContainer.appendChild(i)
                }),
                  xe(function() {
                    o.addEventListener('click', function() {
                      r._handleWindow(e, {
                        url: t,
                        target: '_blank',
                        features: ze
                      }),
                        i.remove(),
                        0 === r.torusAlertContainer.children.length &&
                          (r.torusAlertContainer.style.display = 'none')
                    })
                  })
              }
            }
          ]
        )
      })()
    },
    23601: function(e, t, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        a = r(29511).default,
        s = r(61837).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.EthereumProviderError = t.EthereumRpcError = void 0)
      var u = r(95376),
        c = (function(e) {
          function t(e, r, i) {
            var a
            if ((n(this, t), !Number.isInteger(e)))
              throw new Error('"code" must be an integer.')
            if (!r || 'string' !== typeof r)
              throw new Error('"message" must be a nonempty string.')
            return (
              ((a = o(this, t, [r])).code = e), void 0 !== i && (a.data = i), a
            )
          }
          return (
            a(t, e),
            i(t, [
              {
                key: 'serialize',
                value: function() {
                  var e = { code: this.code, message: this.message }
                  return (
                    void 0 !== this.data && (e.data = this.data),
                    this.stack && (e.stack = this.stack),
                    e
                  )
                }
              },
              {
                key: 'toString',
                value: function() {
                  return u.default(this.serialize(), l, 2)
                }
              }
            ])
          )
        })(s(Error))
      t.EthereumRpcError = c
      var d = (function(e) {
        function t(e, r, i) {
          if (
            (n(this, t),
            !(function(e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999
            })(e))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            )
          return o(this, t, [e, r, i])
        }
        return a(t, e), i(t)
      })(c)
      function l(e, t) {
        if ('[Circular]' !== t) return t
      }
      t.EthereumProviderError = d
    },
    17095: function(e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.errorValues = t.errorCodes = void 0),
        (t.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901
          }
        }),
        (t.errorValues = {
          '-32700': {
            standard: 'JSON RPC 2.0',
            message:
              'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
          },
          '-32600': {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.'
          },
          '-32601': {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.'
          },
          '-32602': {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).'
          },
          '-32603': {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.'
          },
          '-32000': { standard: 'EIP-1474', message: 'Invalid input.' },
          '-32001': { standard: 'EIP-1474', message: 'Resource not found.' },
          '-32002': { standard: 'EIP-1474', message: 'Resource unavailable.' },
          '-32003': { standard: 'EIP-1474', message: 'Transaction rejected.' },
          '-32004': { standard: 'EIP-1474', message: 'Method not supported.' },
          '-32005': {
            standard: 'EIP-1474',
            message: 'Request limit exceeded.'
          },
          4001: { standard: 'EIP-1193', message: 'User rejected the request.' },
          4100: {
            standard: 'EIP-1193',
            message:
              'The requested account and/or method has not been authorized by the user.'
          },
          4200: {
            standard: 'EIP-1193',
            message:
              'The requested method is not supported by this Ethereum provider.'
          },
          4900: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.'
          },
          4901: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.'
          }
        })
    },
    96018: function(e, t, r) {
      'use strict'
      var n = r(85715).default
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ethErrors = void 0)
      var i = r(23601),
        o = r(78824),
        a = r(17095)
      function s(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1]
        return new i.EthereumRpcError(e, s || o.getMessageFromCode(e), u)
      }
      function u(e, t) {
        var r = c(t),
          a = n(r, 2),
          s = a[0],
          u = a[1]
        return new i.EthereumProviderError(e, s || o.getMessageFromCode(e), u)
      }
      function c(e) {
        if (e) {
          if ('string' === typeof e) return [e]
          if ('object' === typeof e && !Array.isArray(e)) {
            var t = e.message,
              r = e.data
            if (t && 'string' !== typeof t)
              throw new Error('Must specify string message.')
            return [t || void 0, r]
          }
        }
        return []
      }
      t.ethErrors = {
        rpc: {
          parse: function(e) {
            return s(a.errorCodes.rpc.parse, e)
          },
          invalidRequest: function(e) {
            return s(a.errorCodes.rpc.invalidRequest, e)
          },
          invalidParams: function(e) {
            return s(a.errorCodes.rpc.invalidParams, e)
          },
          methodNotFound: function(e) {
            return s(a.errorCodes.rpc.methodNotFound, e)
          },
          internal: function(e) {
            return s(a.errorCodes.rpc.internal, e)
          },
          server: function(e) {
            if (!e || 'object' !== typeof e || Array.isArray(e))
              throw new Error(
                'Ethereum RPC Server errors must provide single object argument.'
              )
            var t = e.code
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              )
            return s(t, e)
          },
          invalidInput: function(e) {
            return s(a.errorCodes.rpc.invalidInput, e)
          },
          resourceNotFound: function(e) {
            return s(a.errorCodes.rpc.resourceNotFound, e)
          },
          resourceUnavailable: function(e) {
            return s(a.errorCodes.rpc.resourceUnavailable, e)
          },
          transactionRejected: function(e) {
            return s(a.errorCodes.rpc.transactionRejected, e)
          },
          methodNotSupported: function(e) {
            return s(a.errorCodes.rpc.methodNotSupported, e)
          },
          limitExceeded: function(e) {
            return s(a.errorCodes.rpc.limitExceeded, e)
          }
        },
        provider: {
          userRejectedRequest: function(e) {
            return u(a.errorCodes.provider.userRejectedRequest, e)
          },
          unauthorized: function(e) {
            return u(a.errorCodes.provider.unauthorized, e)
          },
          unsupportedMethod: function(e) {
            return u(a.errorCodes.provider.unsupportedMethod, e)
          },
          disconnected: function(e) {
            return u(a.errorCodes.provider.disconnected, e)
          },
          chainDisconnected: function(e) {
            return u(a.errorCodes.provider.chainDisconnected, e)
          },
          custom: function(e) {
            if (!e || 'object' !== typeof e || Array.isArray(e))
              throw new Error(
                'Ethereum Provider custom errors must provide single object argument.'
              )
            var t = e.code,
              r = e.message,
              n = e.data
            if (!r || 'string' !== typeof r)
              throw new Error('"message" must be a nonempty string')
            return new i.EthereumProviderError(t, r, n)
          }
        }
      }
    },
    15005: function(e, t, r) {
      'use strict'
      t.no = t.Ls = void 0
      var n = r(23601)
      Object.defineProperty(t, 'no', {
        enumerable: !0,
        get: function() {
          return n.EthereumRpcError
        }
      })
      var i = r(78824)
      var o = r(96018)
      Object.defineProperty(t, 'Ls', {
        enumerable: !0,
        get: function() {
          return o.ethErrors
        }
      })
      var a = r(17095)
    },
    78824: function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0)
      var n = r(17095),
        i = r(23601),
        o = n.errorCodes.rpc.internal,
        a = 'Unspecified error message. This is a bug, please report it.',
        s = { code: o, message: u(o) }
      function u(e) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a
        if (Number.isInteger(e)) {
          var i = e.toString()
          if (f(n.errorValues, i)) return n.errorValues[i].message
          if (d(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return r
      }
      function c(e) {
        if (!Number.isInteger(e)) return !1
        var t = e.toString()
        return !!n.errorValues[t] || !!d(e)
      }
      function d(e) {
        return e >= -32099 && e <= -32e3
      }
      function l(e) {
        return e && 'object' === typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e
      }
      function f(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      ;(t.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'),
        (t.getMessageFromCode = u),
        (t.isValidCode = c),
        (t.serializeError = function(e) {
          var t,
            r,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = n.fallbackError,
            a = void 0 === o ? s : o,
            d = n.shouldIncludeStack,
            h = void 0 !== d && d
          if (!a || !Number.isInteger(a.code) || 'string' !== typeof a.message)
            throw new Error(
              'Must provide fallback error with integer number code and string message.'
            )
          if (e instanceof i.EthereumRpcError) return e.serialize()
          var p = {}
          if (
            e &&
            'object' === typeof e &&
            !Array.isArray(e) &&
            f(e, 'code') &&
            c(e.code)
          ) {
            var v = e
            ;(p.code = v.code),
              v.message && 'string' === typeof v.message
                ? ((p.message = v.message), f(v, 'data') && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: l(e) }))
          } else {
            p.code = a.code
            var g = null === (t = e) || void 0 === t ? void 0 : t.message
            ;(p.message = g && 'string' === typeof g ? g : a.message),
              (p.data = { originalError: l(e) })
          }
          var y = null === (r = e) || void 0 === r ? void 0 : r.stack
          return h && e && y && 'string' === typeof y && (p.stack = y), p
        })
    },
    53409: function(e, t, r) {
      'use strict'
      var n = r(26382).Buffer
      var i = r(67552)
      function o(e, t) {
        return (
          void 0 === t && (t = 'utf8'),
          n.isBuffer(e)
            ? s(e.toString('base64'))
            : s(n.from(e, t).toString('base64'))
        )
      }
      function a(e) {
        return (
          (e = e.toString()),
          i
            .default(e)
            .replace(/\-/g, '+')
            .replace(/_/g, '/')
        )
      }
      function s(e) {
        return e
          .replace(/=/g, '')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
      }
      var u = o
      ;(u.encode = o),
        (u.decode = function(e, t) {
          return (
            void 0 === t && (t = 'utf8'), n.from(a(e), 'base64').toString(t)
          )
        }),
        (u.toBase64 = a),
        (u.fromBase64 = s),
        (u.toBuffer = function(e) {
          return n.from(a(e), 'base64')
        }),
        (t.default = u)
    },
    67552: function(e, t, r) {
      'use strict'
      var n = r(26382).Buffer
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.length,
            r = t % 4
          if (!r) return e
          var i = t,
            o = 4 - r,
            a = t + o,
            s = n.alloc(a)
          for (s.write(e); o--; ) s.write('=', i++)
          return s.toString()
        })
    },
    97488: function(e, t, r) {
      ;(e.exports = r(53409).default), (e.exports.default = e.exports)
    },
    23525: function(e, t, r) {
      function n(e) {
        return Object.prototype.toString.call(e)
      }
      ;(t.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : '[object Array]' === n(e)
      }),
        (t.isBoolean = function(e) {
          return 'boolean' === typeof e
        }),
        (t.isNull = function(e) {
          return null === e
        }),
        (t.isNullOrUndefined = function(e) {
          return null == e
        }),
        (t.isNumber = function(e) {
          return 'number' === typeof e
        }),
        (t.isString = function(e) {
          return 'string' === typeof e
        }),
        (t.isSymbol = function(e) {
          return 'symbol' === typeof e
        }),
        (t.isUndefined = function(e) {
          return void 0 === e
        }),
        (t.isRegExp = function(e) {
          return '[object RegExp]' === n(e)
        }),
        (t.isObject = function(e) {
          return 'object' === typeof e && null !== e
        }),
        (t.isDate = function(e) {
          return '[object Date]' === n(e)
        }),
        (t.isError = function(e) {
          return '[object Error]' === n(e) || e instanceof Error
        }),
        (t.isFunction = function(e) {
          return 'function' === typeof e
        }),
        (t.isPrimitive = function(e) {
          return (
            null === e ||
            'boolean' === typeof e ||
            'number' === typeof e ||
            'string' === typeof e ||
            'symbol' === typeof e ||
            'undefined' === typeof e
          )
        }),
        (t.isBuffer = r(26382).Buffer.isBuffer)
    },
    62820: function(e, t, r) {
      var n = r(62285),
        i = r(24164),
        o = function() {}
      e.exports = function e(t, r, a) {
        if ('function' === typeof r) return e(t, null, r)
        r || (r = {}), (a = i(a || o))
        var s = t._writableState,
          u = t._readableState,
          c = r.readable || (!1 !== r.readable && t.readable),
          d = r.writable || (!1 !== r.writable && t.writable),
          l = !1,
          f = function() {
            t.writable || h()
          },
          h = function() {
            ;(d = !1), c || a.call(t)
          },
          p = function() {
            ;(c = !1), d || a.call(t)
          },
          v = function(e) {
            a.call(t, e ? new Error('exited with error code: ' + e) : null)
          },
          g = function(e) {
            a.call(t, e)
          },
          y = function() {
            n.nextTick(m)
          },
          m = function() {
            if (!l)
              return (!c || (u && u.ended && !u.destroyed)) &&
                (!d || (s && s.ended && !s.destroyed))
                ? void 0
                : a.call(t, new Error('premature close'))
          },
          b = function() {
            t.req.on('finish', h)
          }
        return (
          !(function(e) {
            return e.setHeader && 'function' === typeof e.abort
          })(t)
            ? d && !s && (t.on('end', f), t.on('close', f))
            : (t.on('complete', h),
              t.on('abort', y),
              t.req ? b() : t.on('request', b)),
          (function(e) {
            return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
          })(t) && t.on('exit', v),
          t.on('end', p),
          t.on('finish', h),
          !1 !== r.error && t.on('error', g),
          t.on('close', y),
          function() {
            ;(l = !0),
              t.removeListener('complete', h),
              t.removeListener('abort', y),
              t.removeListener('request', b),
              t.req && t.req.removeListener('finish', h),
              t.removeListener('end', f),
              t.removeListener('close', f),
              t.removeListener('finish', h),
              t.removeListener('exit', v),
              t.removeListener('end', p),
              t.removeListener('error', g),
              t.removeListener('close', y)
          }
        )
      }
    },
    122: function(e) {
      'use strict'
      e.exports = function e(t, r) {
        if (t === r) return !0
        if (t && r && 'object' == typeof t && 'object' == typeof r) {
          if (t.constructor !== r.constructor) return !1
          var n, i, o
          if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1
            for (i = n; 0 !== i--; ) if (!e(t[i], r[i])) return !1
            return !0
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf()
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString()
          if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length)
            return !1
          for (i = n; 0 !== i--; )
            if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1
          for (i = n; 0 !== i--; ) {
            var a = o[i]
            if (!e(t[a], r[a])) return !1
          }
          return !0
        }
        return t !== t && r !== r
      }
    },
    95376: function(e) {
      ;(e.exports = a), (a.default = a), (a.stable = d), (a.stableStringify = d)
      var t = '[...]',
        r = '[Circular]',
        n = [],
        i = []
      function o() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER
        }
      }
      function a(e, t, r, a) {
        var s
        'undefined' === typeof a && (a = o()), u(e, '', 0, [], void 0, 0, a)
        try {
          s =
            0 === i.length
              ? JSON.stringify(e, t, r)
              : JSON.stringify(e, f(t), r)
        } catch (d) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]'
          )
        } finally {
          for (; 0 !== n.length; ) {
            var c = n.pop()
            4 === c.length
              ? Object.defineProperty(c[0], c[1], c[3])
              : (c[0][c[1]] = c[2])
          }
        }
        return s
      }
      function s(e, t, r, o) {
        var a = Object.getOwnPropertyDescriptor(o, r)
        void 0 !== a.get
          ? a.configurable
            ? (Object.defineProperty(o, r, { value: e }), n.push([o, r, t, a]))
            : i.push([t, r, e])
          : ((o[r] = e), n.push([o, r, t]))
      }
      function u(e, n, i, o, a, c, d) {
        var l
        if (((c += 1), 'object' === typeof e && null !== e)) {
          for (l = 0; l < o.length; l++)
            if (o[l] === e) return void s(r, e, n, a)
          if ('undefined' !== typeof d.depthLimit && c > d.depthLimit)
            return void s(t, e, n, a)
          if ('undefined' !== typeof d.edgesLimit && i + 1 > d.edgesLimit)
            return void s(t, e, n, a)
          if ((o.push(e), Array.isArray(e)))
            for (l = 0; l < e.length; l++) u(e[l], l, l, o, e, c, d)
          else {
            var f = Object.keys(e)
            for (l = 0; l < f.length; l++) {
              var h = f[l]
              u(e[h], h, l, o, e, c, d)
            }
          }
          o.pop()
        }
      }
      function c(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
      }
      function d(e, t, r, a) {
        'undefined' === typeof a && (a = o())
        var s,
          u = l(e, '', 0, [], void 0, 0, a) || e
        try {
          s =
            0 === i.length
              ? JSON.stringify(u, t, r)
              : JSON.stringify(u, f(t), r)
        } catch (d) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]'
          )
        } finally {
          for (; 0 !== n.length; ) {
            var c = n.pop()
            4 === c.length
              ? Object.defineProperty(c[0], c[1], c[3])
              : (c[0][c[1]] = c[2])
          }
        }
        return s
      }
      function l(e, i, o, a, u, d, f) {
        var h
        if (((d += 1), 'object' === typeof e && null !== e)) {
          for (h = 0; h < a.length; h++)
            if (a[h] === e) return void s(r, e, i, u)
          try {
            if ('function' === typeof e.toJSON) return
          } catch (y) {
            return
          }
          if ('undefined' !== typeof f.depthLimit && d > f.depthLimit)
            return void s(t, e, i, u)
          if ('undefined' !== typeof f.edgesLimit && o + 1 > f.edgesLimit)
            return void s(t, e, i, u)
          if ((a.push(e), Array.isArray(e)))
            for (h = 0; h < e.length; h++) l(e[h], h, h, a, e, d, f)
          else {
            var p = {},
              v = Object.keys(e).sort(c)
            for (h = 0; h < v.length; h++) {
              var g = v[h]
              l(e[g], g, h, a, e, d, f), (p[g] = e[g])
            }
            if ('undefined' === typeof u) return p
            n.push([u, i, e]), (u[i] = p)
          }
          a.pop()
        }
      }
      function f(e) {
        return (
          (e =
            'undefined' !== typeof e
              ? e
              : function(e, t) {
                  return t
                }),
          function(t, r) {
            if (i.length > 0)
              for (var n = 0; n < i.length; n++) {
                var o = i[n]
                if (o[1] === t && o[0] === r) {
                  ;(r = o[2]), i.splice(n, 1)
                  break
                }
              }
            return e.call(this, t, r)
          }
        )
      }
    },
    42435: function(e) {
      'use strict'
      var t = function(e) {
        return (
          null !== e && 'object' === typeof e && 'function' === typeof e.pipe
        )
      }
      ;(t.writable = function(e) {
        return (
          t(e) &&
          !1 !== e.writable &&
          'function' === typeof e._write &&
          'object' === typeof e._writableState
        )
      }),
        (t.readable = function(e) {
          return (
            t(e) &&
            !1 !== e.readable &&
            'function' === typeof e._read &&
            'object' === typeof e._readableState
          )
        }),
        (t.duplex = function(e) {
          return t.writable(e) && t.readable(e)
        }),
        (t.transform = function(e) {
          return t.duplex(e) && 'function' === typeof e._transform
        }),
        (e.exports = t)
    },
    16819: function(e, t, r) {
      e = r.nmd(e)
      var n = '__lodash_hash_undefined__',
        i = 9007199254740991,
        o = '[object Arguments]',
        a = '[object AsyncFunction]',
        s = '[object Function]',
        u = '[object GeneratorFunction]',
        c = '[object Null]',
        d = '[object Object]',
        l = '[object Proxy]',
        f = '[object Undefined]',
        h = /^\[object .+?Constructor\]$/,
        p = /^(?:0|[1-9]\d*)$/,
        v = {}
      ;(v['[object Float32Array]'] = v['[object Float64Array]'] = v[
        '[object Int8Array]'
      ] = v['[object Int16Array]'] = v['[object Int32Array]'] = v[
        '[object Uint8Array]'
      ] = v['[object Uint8ClampedArray]'] = v['[object Uint16Array]'] = v[
        '[object Uint32Array]'
      ] = !0),
        (v[o] = v['[object Array]'] = v['[object ArrayBuffer]'] = v[
          '[object Boolean]'
        ] = v['[object DataView]'] = v['[object Date]'] = v[
          '[object Error]'
        ] = v[s] = v['[object Map]'] = v['[object Number]'] = v[d] = v[
          '[object RegExp]'
        ] = v['[object Set]'] = v['[object String]'] = v[
          '[object WeakMap]'
        ] = !1)
      var g = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        y = 'object' == typeof self && self && self.Object === Object && self,
        m = g || y || Function('return this')(),
        b = t && !t.nodeType && t,
        w = b && e && !e.nodeType && e,
        _ = w && w.exports === b,
        A = _ && g.process,
        S = (function() {
          try {
            var e = w && w.require && w.require('util').types
            return e || (A && A.binding && A.binding('util'))
          } catch (t) {}
        })(),
        E = S && S.isTypedArray
      var k,
        C,
        O = Array.prototype,
        R = Function.prototype,
        P = Object.prototype,
        T = m['__core-js_shared__'],
        x = R.toString,
        M = P.hasOwnProperty,
        I = (function() {
          var e = /[^.]+$/.exec((T && T.keys && T.keys.IE_PROTO) || '')
          return e ? 'Symbol(src)_1.' + e : ''
        })(),
        D = P.toString,
        j = x.call(Object),
        N = RegExp(
          '^' +
            x
              .call(M)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        L = _ ? m.Buffer : void 0,
        U = m.Symbol,
        B = m.Uint8Array,
        W = L ? L.allocUnsafe : void 0,
        q = ((k = Object.getPrototypeOf),
        (C = Object),
        function(e) {
          return k(C(e))
        }),
        V = Object.create,
        F = P.propertyIsEnumerable,
        K = O.splice,
        H = U ? U.toStringTag : void 0,
        G = (function() {
          try {
            var e = me(Object, 'defineProperty')
            return e({}, '', {}), e
          } catch (t) {}
        })(),
        z = L ? L.isBuffer : void 0,
        Y = Math.max,
        J = Date.now,
        X = me(m, 'Map'),
        Z = me(Object, 'create'),
        $ = (function() {
          function e() {}
          return function(t) {
            if (!Te(t)) return {}
            if (V) return V(t)
            e.prototype = t
            var r = new e()
            return (e.prototype = void 0), r
          }
        })()
      function Q(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function ee(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function te(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function re(e) {
        var t = (this.__data__ = new ee(e))
        this.size = t.size
      }
      function ne(e, t) {
        var r = ke(e),
          n = !r && Ee(e),
          i = !r && !n && Oe(e),
          o = !r && !n && !i && Me(e),
          a = r || n || i || o,
          s = a
            ? (function(e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
                return n
              })(e.length, String)
            : [],
          u = s.length
        for (var c in e)
          (!t && !M.call(e, c)) ||
            (a &&
              ('length' == c ||
                (i && ('offset' == c || 'parent' == c)) ||
                (o &&
                  ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
                be(c, u))) ||
            s.push(c)
        return s
      }
      function ie(e, t, r) {
        ;((void 0 !== r && !Se(e[t], r)) || (void 0 === r && !(t in e))) &&
          se(e, t, r)
      }
      function oe(e, t, r) {
        var n = e[t]
        ;(M.call(e, t) && Se(n, r) && (void 0 !== r || t in e)) || se(e, t, r)
      }
      function ae(e, t) {
        for (var r = e.length; r--; ) if (Se(e[r][0], t)) return r
        return -1
      }
      function se(e, t, r) {
        '__proto__' == t && G
          ? G(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
            })
          : (e[t] = r)
      }
      ;(Q.prototype.clear = function() {
        ;(this.__data__ = Z ? Z(null) : {}), (this.size = 0)
      }),
        (Q.prototype.delete = function(e) {
          var t = this.has(e) && delete this.__data__[e]
          return (this.size -= t ? 1 : 0), t
        }),
        (Q.prototype.get = function(e) {
          var t = this.__data__
          if (Z) {
            var r = t[e]
            return r === n ? void 0 : r
          }
          return M.call(t, e) ? t[e] : void 0
        }),
        (Q.prototype.has = function(e) {
          var t = this.__data__
          return Z ? void 0 !== t[e] : M.call(t, e)
        }),
        (Q.prototype.set = function(e, t) {
          var r = this.__data__
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = Z && void 0 === t ? n : t),
            this
          )
        }),
        (ee.prototype.clear = function() {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (ee.prototype.delete = function(e) {
          var t = this.__data__,
            r = ae(t, e)
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : K.call(t, r, 1), --this.size, !0)
          )
        }),
        (ee.prototype.get = function(e) {
          var t = this.__data__,
            r = ae(t, e)
          return r < 0 ? void 0 : t[r][1]
        }),
        (ee.prototype.has = function(e) {
          return ae(this.__data__, e) > -1
        }),
        (ee.prototype.set = function(e, t) {
          var r = this.__data__,
            n = ae(r, e)
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
        }),
        (te.prototype.clear = function() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new Q(),
              map: new (X || ee)(),
              string: new Q()
            })
        }),
        (te.prototype.delete = function(e) {
          var t = ye(this, e).delete(e)
          return (this.size -= t ? 1 : 0), t
        }),
        (te.prototype.get = function(e) {
          return ye(this, e).get(e)
        }),
        (te.prototype.has = function(e) {
          return ye(this, e).has(e)
        }),
        (te.prototype.set = function(e, t) {
          var r = ye(this, e),
            n = r.size
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
        }),
        (re.prototype.clear = function() {
          ;(this.__data__ = new ee()), (this.size = 0)
        }),
        (re.prototype.delete = function(e) {
          var t = this.__data__,
            r = t.delete(e)
          return (this.size = t.size), r
        }),
        (re.prototype.get = function(e) {
          return this.__data__.get(e)
        }),
        (re.prototype.has = function(e) {
          return this.__data__.has(e)
        }),
        (re.prototype.set = function(e, t) {
          var r = this.__data__
          if (r instanceof ee) {
            var n = r.__data__
            if (!X || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this
            r = this.__data__ = new te(n)
          }
          return r.set(e, t), (this.size = r.size), this
        })
      var ue,
        ce = function(e, t, r) {
          for (var n = -1, i = Object(e), o = r(e), a = o.length; a--; ) {
            var s = o[ue ? a : ++n]
            if (!1 === t(i[s], s, i)) break
          }
          return e
        }
      function de(e) {
        return null == e
          ? void 0 === e
            ? f
            : c
          : H && H in Object(e)
          ? (function(e) {
              var t = M.call(e, H),
                r = e[H]
              try {
                e[H] = void 0
                var n = !0
              } catch (o) {}
              var i = D.call(e)
              n && (t ? (e[H] = r) : delete e[H])
              return i
            })(e)
          : (function(e) {
              return D.call(e)
            })(e)
      }
      function le(e) {
        return xe(e) && de(e) == o
      }
      function fe(e) {
        return (
          !(
            !Te(e) ||
            (function(e) {
              return !!I && I in e
            })(e)
          ) &&
          (Re(e) ? N : h).test(
            (function(e) {
              if (null != e) {
                try {
                  return x.call(e)
                } catch (t) {}
                try {
                  return e + ''
                } catch (t) {}
              }
              return ''
            })(e)
          )
        )
      }
      function he(e) {
        if (!Te(e))
          return (function(e) {
            var t = []
            if (null != e) for (var r in Object(e)) t.push(r)
            return t
          })(e)
        var t = we(e),
          r = []
        for (var n in e)
          ('constructor' != n || (!t && M.call(e, n))) && r.push(n)
        return r
      }
      function pe(e, t, r, n, i) {
        e !== t &&
          ce(
            t,
            function(o, a) {
              if ((i || (i = new re()), Te(o)))
                !(function(e, t, r, n, i, o, a) {
                  var s = _e(e, r),
                    u = _e(t, r),
                    c = a.get(u)
                  if (c) return void ie(e, r, c)
                  var l = o ? o(s, u, r + '', e, t, a) : void 0,
                    f = void 0 === l
                  if (f) {
                    var h = ke(u),
                      p = !h && Oe(u),
                      v = !h && !p && Me(u)
                    ;(l = u),
                      h || p || v
                        ? ke(s)
                          ? (l = s)
                          : xe((g = s)) && Ce(g)
                          ? (l = (function(e, t) {
                              var r = -1,
                                n = e.length
                              t || (t = Array(n))
                              for (; ++r < n; ) t[r] = e[r]
                              return t
                            })(s))
                          : p
                          ? ((f = !1),
                            (l = (function(e, t) {
                              if (t) return e.slice()
                              var r = e.length,
                                n = W ? W(r) : new e.constructor(r)
                              return e.copy(n), n
                            })(u, !0)))
                          : v
                          ? ((f = !1),
                            (l = (function(e, t) {
                              var r = t
                                ? (function(e) {
                                    var t = new e.constructor(e.byteLength)
                                    return new B(t).set(new B(e)), t
                                  })(e.buffer)
                                : e.buffer
                              return new e.constructor(
                                r,
                                e.byteOffset,
                                e.length
                              )
                            })(u, !0)))
                          : (l = [])
                        : (function(e) {
                            if (!xe(e) || de(e) != d) return !1
                            var t = q(e)
                            if (null === t) return !0
                            var r = M.call(t, 'constructor') && t.constructor
                            return (
                              'function' == typeof r &&
                              r instanceof r &&
                              x.call(r) == j
                            )
                          })(u) || Ee(u)
                        ? ((l = s),
                          Ee(s)
                            ? (l = (function(e) {
                                return (function(e, t, r, n) {
                                  var i = !r
                                  r || (r = {})
                                  var o = -1,
                                    a = t.length
                                  for (; ++o < a; ) {
                                    var s = t[o],
                                      u = n ? n(r[s], e[s], s, r, e) : void 0
                                    void 0 === u && (u = e[s]),
                                      i ? se(r, s, u) : oe(r, s, u)
                                  }
                                  return r
                                })(e, Ie(e))
                              })(s))
                            : (Te(s) && !Re(s)) ||
                              (l = (function(e) {
                                return 'function' != typeof e.constructor ||
                                  we(e)
                                  ? {}
                                  : $(q(e))
                              })(u)))
                        : (f = !1)
                  }
                  var g
                  f && (a.set(u, l), i(l, u, n, o, a), a.delete(u))
                  ie(e, r, l)
                })(e, t, a, r, pe, n, i)
              else {
                var s = n ? n(_e(e, a), o, a + '', e, t, i) : void 0
                void 0 === s && (s = o), ie(e, a, s)
              }
            },
            Ie
          )
      }
      function ve(e, t) {
        return Ae(
          (function(e, t, r) {
            return (
              (t = Y(void 0 === t ? e.length - 1 : t, 0)),
              function() {
                for (
                  var n = arguments,
                    i = -1,
                    o = Y(n.length - t, 0),
                    a = Array(o);
                  ++i < o;

                )
                  a[i] = n[t + i]
                i = -1
                for (var s = Array(t + 1); ++i < t; ) s[i] = n[i]
                return (
                  (s[t] = r(a)),
                  (function(e, t, r) {
                    switch (r.length) {
                      case 0:
                        return e.call(t)
                      case 1:
                        return e.call(t, r[0])
                      case 2:
                        return e.call(t, r[0], r[1])
                      case 3:
                        return e.call(t, r[0], r[1], r[2])
                    }
                    return e.apply(t, r)
                  })(e, this, s)
                )
              }
            )
          })(e, t, Ne),
          e + ''
        )
      }
      var ge = G
        ? function(e, t) {
            return G(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: ((r = t),
              function() {
                return r
              }),
              writable: !0
            })
            var r
          }
        : Ne
      function ye(e, t) {
        var r = e.__data__
        return (function(e) {
          var t = typeof e
          return 'string' == t ||
            'number' == t ||
            'symbol' == t ||
            'boolean' == t
            ? '__proto__' !== e
            : null === e
        })(t)
          ? r['string' == typeof t ? 'string' : 'hash']
          : r.map
      }
      function me(e, t) {
        var r = (function(e, t) {
          return null == e ? void 0 : e[t]
        })(e, t)
        return fe(r) ? r : void 0
      }
      function be(e, t) {
        var r = typeof e
        return (
          !!(t = null == t ? i : t) &&
          ('number' == r || ('symbol' != r && p.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        )
      }
      function we(e) {
        var t = e && e.constructor
        return e === (('function' == typeof t && t.prototype) || P)
      }
      function _e(e, t) {
        if (
          ('constructor' !== t || 'function' !== typeof e[t]) &&
          '__proto__' != t
        )
          return e[t]
      }
      var Ae = (function(e) {
        var t = 0,
          r = 0
        return function() {
          var n = J(),
            i = 16 - (n - r)
          if (((r = n), i > 0)) {
            if (++t >= 800) return arguments[0]
          } else t = 0
          return e.apply(void 0, arguments)
        }
      })(ge)
      function Se(e, t) {
        return e === t || (e !== e && t !== t)
      }
      var Ee = le(
          (function() {
            return arguments
          })()
        )
          ? le
          : function(e) {
              return xe(e) && M.call(e, 'callee') && !F.call(e, 'callee')
            },
        ke = Array.isArray
      function Ce(e) {
        return null != e && Pe(e.length) && !Re(e)
      }
      var Oe =
        z ||
        function() {
          return !1
        }
      function Re(e) {
        if (!Te(e)) return !1
        var t = de(e)
        return t == s || t == u || t == a || t == l
      }
      function Pe(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= i
      }
      function Te(e) {
        var t = typeof e
        return null != e && ('object' == t || 'function' == t)
      }
      function xe(e) {
        return null != e && 'object' == typeof e
      }
      var Me = E
        ? (function(e) {
            return function(t) {
              return e(t)
            }
          })(E)
        : function(e) {
            return xe(e) && Pe(e.length) && !!v[de(e)]
          }
      function Ie(e) {
        return Ce(e) ? ne(e, !0) : he(e)
      }
      var De,
        je = ((De = function(e, t, r) {
          pe(e, t, r)
        }),
        ve(function(e, t) {
          var r = -1,
            n = t.length,
            i = n > 1 ? t[n - 1] : void 0,
            o = n > 2 ? t[2] : void 0
          for (
            i = De.length > 3 && 'function' == typeof i ? (n--, i) : void 0,
              o &&
                (function(e, t, r) {
                  if (!Te(r)) return !1
                  var n = typeof t
                  return (
                    !!('number' == n
                      ? Ce(r) && be(t, r.length)
                      : 'string' == n && (t in r)) && Se(r[t], e)
                  )
                })(t[0], t[1], o) &&
                ((i = n < 3 ? void 0 : i), (n = 1)),
              e = Object(e);
            ++r < n;

          ) {
            var a = t[r]
            a && De(e, a, r, i)
          }
          return e
        }))
      function Ne(e) {
        return e
      }
      e.exports = je
    },
    88318: function(e, t, r) {
      var n, i
      !(function(o, a) {
        'use strict'
        ;(n = function() {
          var e = function() {},
            t = 'undefined',
            r =
              typeof window !== t &&
              typeof window.navigator !== t &&
              /Trident\/|MSIE /.test(window.navigator.userAgent),
            n = ['trace', 'debug', 'info', 'warn', 'error'],
            i = {},
            o = null
          function a(e, t) {
            var r = e[t]
            if ('function' === typeof r.bind) return r.bind(e)
            try {
              return Function.prototype.bind.call(r, e)
            } catch (n) {
              return function() {
                return Function.prototype.apply.apply(r, [e, arguments])
              }
            }
          }
          function s() {
            console.log &&
              (console.log.apply
                ? console.log.apply(console, arguments)
                : Function.prototype.apply.apply(console.log, [
                    console,
                    arguments
                  ])),
              console.trace && console.trace()
          }
          function u(n) {
            return (
              'debug' === n && (n = 'log'),
              typeof console !== t &&
                ('trace' === n && r
                  ? s
                  : void 0 !== console[n]
                  ? a(console, n)
                  : void 0 !== console.log
                  ? a(console, 'log')
                  : e)
            )
          }
          function c() {
            for (var r = this.getLevel(), i = 0; i < n.length; i++) {
              var o = n[i]
              this[o] = i < r ? e : this.methodFactory(o, r, this.name)
            }
            if (
              ((this.log = this.debug),
              typeof console === t && r < this.levels.SILENT)
            )
              return 'No console available for logging'
          }
          function d(e) {
            return function() {
              typeof console !== t &&
                (c.call(this), this[e].apply(this, arguments))
            }
          }
          function l(e, t, r) {
            return u(e) || d.apply(this, arguments)
          }
          function f(e, r) {
            var a,
              s,
              u,
              d = this,
              f = 'loglevel'
            function h(e) {
              var r = (n[e] || 'silent').toUpperCase()
              if (typeof window !== t && f) {
                try {
                  return void (window.localStorage[f] = r)
                } catch (i) {}
                try {
                  window.document.cookie = encodeURIComponent(f) + '=' + r + ';'
                } catch (i) {}
              }
            }
            function p() {
              var e
              if (typeof window !== t && f) {
                try {
                  e = window.localStorage[f]
                } catch (o) {}
                if (typeof e === t)
                  try {
                    var r = window.document.cookie,
                      n = encodeURIComponent(f),
                      i = r.indexOf(n + '=')
                    ;-1 !== i &&
                      (e = /^([^;]+)/.exec(r.slice(i + n.length + 1))[1])
                  } catch (o) {}
                return void 0 === d.levels[e] && (e = void 0), e
              }
            }
            function v() {
              if (typeof window !== t && f) {
                try {
                  window.localStorage.removeItem(f)
                } catch (e) {}
                try {
                  window.document.cookie =
                    encodeURIComponent(f) +
                    '=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
                } catch (e) {}
              }
            }
            function g(e) {
              var t = e
              if (
                ('string' === typeof t &&
                  void 0 !== d.levels[t.toUpperCase()] &&
                  (t = d.levels[t.toUpperCase()]),
                'number' === typeof t && t >= 0 && t <= d.levels.SILENT)
              )
                return t
              throw new TypeError(
                'log.setLevel() called with invalid level: ' + e
              )
            }
            'string' === typeof e
              ? (f += ':' + e)
              : 'symbol' === typeof e && (f = void 0),
              (d.name = e),
              (d.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
              }),
              (d.methodFactory = r || l),
              (d.getLevel = function() {
                return null != u ? u : null != s ? s : a
              }),
              (d.setLevel = function(e, t) {
                return (u = g(e)), !1 !== t && h(u), c.call(d)
              }),
              (d.setDefaultLevel = function(e) {
                ;(s = g(e)), p() || d.setLevel(e, !1)
              }),
              (d.resetLevel = function() {
                ;(u = null), v(), c.call(d)
              }),
              (d.enableAll = function(e) {
                d.setLevel(d.levels.TRACE, e)
              }),
              (d.disableAll = function(e) {
                d.setLevel(d.levels.SILENT, e)
              }),
              (d.rebuild = function() {
                if ((o !== d && (a = g(o.getLevel())), c.call(d), o === d))
                  for (var e in i) i[e].rebuild()
              }),
              (a = g(o ? o.getLevel() : 'WARN'))
            var y = p()
            null != y && (u = g(y)), c.call(d)
          }
          ;(o = new f()).getLogger = function(e) {
            if (('symbol' !== typeof e && 'string' !== typeof e) || '' === e)
              throw new TypeError(
                'You must supply a name when creating a logger.'
              )
            var t = i[e]
            return t || (t = i[e] = new f(e, o.methodFactory)), t
          }
          var h = typeof window !== t ? window.log : void 0
          return (
            (o.noConflict = function() {
              return (
                typeof window !== t && window.log === o && (window.log = h), o
              )
            }),
            (o.getLoggers = function() {
              return i
            }),
            (o.default = o),
            o
          )
        }),
          void 0 === (i = 'function' === typeof n ? n.call(t, r, t, e) : n) ||
            (e.exports = i)
      })()
    },
    24164: function(e, t, r) {
      var n = r(97652)
      function i(e) {
        var t = function t() {
          return t.called
            ? t.value
            : ((t.called = !0), (t.value = e.apply(this, arguments)))
        }
        return (t.called = !1), t
      }
      function o(e) {
        var t = function t() {
            if (t.called) throw new Error(t.onceError)
            return (t.called = !0), (t.value = e.apply(this, arguments))
          },
          r = e.name || 'Function wrapped with `once`'
        return (
          (t.onceError = r + " shouldn't be called more than once"),
          (t.called = !1),
          t
        )
      }
      ;(e.exports = n(i)),
        (e.exports.strict = n(o)),
        (i.proto = i(function() {
          Object.defineProperty(Function.prototype, 'once', {
            value: function() {
              return i(this)
            },
            configurable: !0
          }),
            Object.defineProperty(Function.prototype, 'onceStrict', {
              value: function() {
                return o(this)
              },
              configurable: !0
            })
        }))
    },
    66600: function(e, t, r) {
      'use strict'
      var n = r(62285)
      'undefined' === typeof n ||
      !n.version ||
      0 === n.version.indexOf('v0.') ||
      (0 === n.version.indexOf('v1.') && 0 !== n.version.indexOf('v1.8.'))
        ? (e.exports = {
            nextTick: function(e, t, r, i) {
              if ('function' !== typeof e)
                throw new TypeError('"callback" argument must be a function')
              var o,
                a,
                s = arguments.length
              switch (s) {
                case 0:
                case 1:
                  return n.nextTick(e)
                case 2:
                  return n.nextTick(function() {
                    e.call(null, t)
                  })
                case 3:
                  return n.nextTick(function() {
                    e.call(null, t, r)
                  })
                case 4:
                  return n.nextTick(function() {
                    e.call(null, t, r, i)
                  })
                default:
                  for (o = new Array(s - 1), a = 0; a < o.length; )
                    o[a++] = arguments[a]
                  return n.nextTick(function() {
                    e.apply(null, o)
                  })
              }
            }
          })
        : (e.exports = n)
    },
    20502: function(e, t, r) {
      var n = r(62285),
        i = r(24164),
        o = r(62820),
        a = r(62376),
        s = function() {},
        u = /^v?\.0/.test(n.version),
        c = function(e) {
          return 'function' === typeof e
        },
        d = function(e, t, r, n) {
          n = i(n)
          var d = !1
          e.on('close', function() {
            d = !0
          }),
            o(e, { readable: t, writable: r }, function(e) {
              if (e) return n(e)
              ;(d = !0), n()
            })
          var l = !1
          return function(t) {
            if (!d && !l)
              return (
                (l = !0),
                (function(e) {
                  return (
                    !!u &&
                    !!a &&
                    (e instanceof (a.ReadStream || s) ||
                      e instanceof (a.WriteStream || s)) &&
                    c(e.close)
                  )
                })(e)
                  ? e.close(s)
                  : (function(e) {
                      return e.setHeader && c(e.abort)
                    })(e)
                  ? e.abort()
                  : c(e.destroy)
                  ? e.destroy()
                  : void n(t || new Error('stream was destroyed'))
              )
          }
        },
        l = function(e) {
          e()
        },
        f = function(e, t) {
          return e.pipe(t)
        }
      e.exports = function() {
        var e,
          t = Array.prototype.slice.call(arguments),
          r = (c(t[t.length - 1] || s) && t.pop()) || s
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new Error('pump requires two streams per minimum')
        var n = t.map(function(i, o) {
          var a = o < t.length - 1
          return d(i, a, o > 0, function(t) {
            e || (e = t), t && n.forEach(l), a || (n.forEach(l), r(e))
          })
        })
        return t.reduce(f)
      }
    },
    44934: function(e) {
      var t = {}.toString
      e.exports =
        Array.isArray ||
        function(e) {
          return '[object Array]' == t.call(e)
        }
    },
    49226: function(e, t, r) {
      'use strict'
      var n = r(66600),
        i =
          Object.keys ||
          function(e) {
            var t = []
            for (var r in e) t.push(r)
            return t
          }
      e.exports = l
      var o = Object.create(r(23525))
      o.inherits = r(56329)
      var a = r(45432),
        s = r(96360)
      o.inherits(l, a)
      for (var u = i(s.prototype), c = 0; c < u.length; c++) {
        var d = u[c]
        l.prototype[d] || (l.prototype[d] = s.prototype[d])
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e)
        a.call(this, e),
          s.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', f)
      }
      function f() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(h, this)
      }
      function h(e) {
        e.end()
      }
      Object.defineProperty(l.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark
        }
      }),
        Object.defineProperty(l.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              (this._readableState.destroyed && this._writableState.destroyed)
            )
          },
          set: function(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e))
          }
        }),
        (l.prototype._destroy = function(e, t) {
          this.push(null), this.end(), n.nextTick(t, e)
        })
    },
    40140: function(e, t, r) {
      'use strict'
      e.exports = o
      var n = r(16854),
        i = Object.create(r(23525))
      function o(e) {
        if (!(this instanceof o)) return new o(e)
        n.call(this, e)
      }
      ;(i.inherits = r(56329)),
        i.inherits(o, n),
        (o.prototype._transform = function(e, t, r) {
          r(null, e)
        })
    },
    45432: function(e, t, r) {
      'use strict'
      var n = r(62285),
        i = r(66600)
      e.exports = b
      var o,
        a = r(44934)
      b.ReadableState = m
      r(27284).EventEmitter
      var s = function(e, t) {
          return e.listeners(t).length
        },
        u = r(53317),
        c = r(80961).Buffer,
        d =
          ('undefined' !== typeof r.g
            ? r.g
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof self
            ? self
            : {}
          ).Uint8Array || function() {}
      var l = Object.create(r(23525))
      l.inherits = r(56329)
      var f = r(27869),
        h = void 0
      h = f && f.debuglog ? f.debuglog('stream') : function() {}
      var p,
        v = r(92954),
        g = r(79668)
      l.inherits(b, u)
      var y = ['error', 'close', 'destroy', 'pause', 'resume']
      function m(e, t) {
        e = e || {}
        var n = t instanceof (o = o || r(49226))
        ;(this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.readableObjectMode)
        var i = e.highWaterMark,
          a = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new v()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (p || (p = r(92681).I),
            (this.decoder = new p(e.encoding)),
            (this.encoding = e.encoding))
      }
      function b(e) {
        if (((o = o || r(49226)), !(this instanceof b))) return new b(e)
        ;(this._readableState = new m(e, this)),
          (this.readable = !0),
          e &&
            ('function' === typeof e.read && (this._read = e.read),
            'function' === typeof e.destroy && (this._destroy = e.destroy)),
          u.call(this)
      }
      function w(e, t, r, n, i) {
        var o,
          a = e._readableState
        null === t
          ? ((a.reading = !1),
            (function(e, t) {
              if (t.ended) return
              if (t.decoder) {
                var r = t.decoder.end()
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length))
              }
              ;(t.ended = !0), E(e)
            })(e, a))
          : (i ||
              (o = (function(e, t) {
                var r
                ;(n = t),
                  c.isBuffer(n) ||
                    n instanceof d ||
                    'string' === typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new TypeError('Invalid non-string/buffer chunk'))
                var n
                return r
              })(a, t)),
            o
              ? e.emit('error', o)
              : a.objectMode || (t && t.length > 0)
              ? ('string' === typeof t ||
                  a.objectMode ||
                  Object.getPrototypeOf(t) === c.prototype ||
                  (t = (function(e) {
                    return c.from(e)
                  })(t)),
                n
                  ? a.endEmitted
                    ? e.emit(
                        'error',
                        new Error('stream.unshift() after end event')
                      )
                    : _(e, a, t, !0)
                  : a.ended
                  ? e.emit('error', new Error('stream.push() after EOF'))
                  : ((a.reading = !1),
                    a.decoder && !r
                      ? ((t = a.decoder.write(t)),
                        a.objectMode || 0 !== t.length
                          ? _(e, a, t, !1)
                          : C(e, a))
                      : _(e, a, t, !1)))
              : n || (a.reading = !1))
        return (function(e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          )
        })(a)
      }
      function _(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit('data', r), e.read(0))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && E(e)),
          C(e, t)
      }
      Object.defineProperty(b.prototype, 'destroyed', {
        get: function() {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(e) {
          this._readableState && (this._readableState.destroyed = e)
        }
      }),
        (b.prototype.destroy = g.destroy),
        (b.prototype._undestroy = g.undestroy),
        (b.prototype._destroy = function(e, t) {
          this.push(null), t(e)
        }),
        (b.prototype.push = function(e, t) {
          var r,
            n = this._readableState
          return (
            n.objectMode
              ? (r = !0)
              : 'string' === typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = c.from(e, t)), (t = '')),
                (r = !0)),
            w(this, e, t, !1, r)
          )
        }),
        (b.prototype.unshift = function(e) {
          return w(this, e, null, !0, !1)
        }),
        (b.prototype.isPaused = function() {
          return !1 === this._readableState.flowing
        }),
        (b.prototype.setEncoding = function(e) {
          return (
            p || (p = r(92681).I),
            (this._readableState.decoder = new p(e)),
            (this._readableState.encoding = e),
            this
          )
        })
      var A = 8388608
      function S(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e !== e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function(e) {
                return (
                  e >= A
                    ? (e = A)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                )
              })(e)),
            e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0))
      }
      function E(e) {
        var t = e._readableState
        ;(t.needReadable = !1),
          t.emittedReadable ||
            (h('emitReadable', t.flowing),
            (t.emittedReadable = !0),
            t.sync ? i.nextTick(k, e) : k(e))
      }
      function k(e) {
        h('emit readable'), e.emit('readable'), T(e)
      }
      function C(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(O, e, t))
      }
      function O(e, t) {
        for (
          var r = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (h('maybeReadMore read 0'), e.read(0), r !== t.length);

        )
          r = t.length
        t.readingMore = !1
      }
      function R(e) {
        h('readable nexttick read 0'), e.read(0)
      }
      function P(e, t) {
        t.reading || (h('resume read 0'), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit('resume'),
          T(e),
          t.flowing && !t.reading && e.read(0)
      }
      function T(e) {
        var t = e._readableState
        for (h('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function x(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join('')
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = (function(e, t, r) {
                  var n
                  e < t.head.data.length
                    ? ((n = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (n =
                        e === t.head.data.length
                          ? t.shift()
                          : r
                          ? (function(e, t) {
                              var r = t.head,
                                n = 1,
                                i = r.data
                              e -= i.length
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  a = e > o.length ? o.length : e
                                if (
                                  (a === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, e)),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++n,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = o.slice(a)))
                                  break
                                }
                                ++n
                              }
                              return (t.length -= n), i
                            })(e, t)
                          : (function(e, t) {
                              var r = c.allocUnsafe(e),
                                n = t.head,
                                i = 1
                              n.data.copy(r), (e -= n.data.length)
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  a = e > o.length ? o.length : e
                                if (
                                  (o.copy(r, r.length - e, 0, a),
                                  0 === (e -= a))
                                ) {
                                  a === o.length
                                    ? (++i,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(a)))
                                  break
                                }
                                ++i
                              }
                              return (t.length -= i), r
                            })(e, t))
                  return n
                })(e, t.buffer, t.decoder)),
            r)
        var r
      }
      function M(e) {
        var t = e._readableState
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream')
        t.endEmitted || ((t.ended = !0), i.nextTick(I, t, e))
      }
      function I(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit('end'))
      }
      function D(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
        return -1
      }
      ;(b.prototype.read = function(e) {
        h('read', e), (e = parseInt(e, 10))
        var t = this._readableState,
          r = e
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            h('read: emitReadable', t.length, t.ended),
            0 === t.length && t.ended ? M(this) : E(this),
            null
          )
        if (0 === (e = S(e, t)) && t.ended)
          return 0 === t.length && M(this), null
        var n,
          i = t.needReadable
        return (
          h('need readable', i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            h('length less than watermark', (i = !0)),
          t.ended || t.reading
            ? h('reading or ended', (i = !1))
            : i &&
              (h('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = S(r, t))),
          null === (n = e > 0 ? x(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), r !== e && t.ended && M(this)),
          null !== n && this.emit('data', n),
          n
        )
      }),
        (b.prototype._read = function(e) {
          this.emit('error', new Error('_read() is not implemented'))
        }),
        (b.prototype.pipe = function(e, t) {
          var r = this,
            o = this._readableState
          switch (o.pipesCount) {
            case 0:
              o.pipes = e
              break
            case 1:
              o.pipes = [o.pipes, e]
              break
            default:
              o.pipes.push(e)
          }
          ;(o.pipesCount += 1), h('pipe count=%d opts=%j', o.pipesCount, t)
          var u =
            (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? d : b
          function c(t, n) {
            h('onunpipe'),
              t === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                h('cleanup'),
                e.removeListener('close', y),
                e.removeListener('finish', m),
                e.removeListener('drain', l),
                e.removeListener('error', g),
                e.removeListener('unpipe', c),
                r.removeListener('end', d),
                r.removeListener('end', b),
                r.removeListener('data', v),
                (f = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  l())
          }
          function d() {
            h('onend'), e.end()
          }
          o.endEmitted ? i.nextTick(u) : r.once('end', u), e.on('unpipe', c)
          var l = (function(e) {
            return function() {
              var t = e._readableState
              h('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, 'data') && ((t.flowing = !0), T(e))
            }
          })(r)
          e.on('drain', l)
          var f = !1
          var p = !1
          function v(t) {
            h('ondata'),
              (p = !1),
              !1 !== e.write(t) ||
                p ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== D(o.pipes, e))) &&
                  !f &&
                  (h('false write response, pause', o.awaitDrain),
                  o.awaitDrain++,
                  (p = !0)),
                r.pause())
          }
          function g(t) {
            h('onerror', t),
              b(),
              e.removeListener('error', g),
              0 === s(e, 'error') && e.emit('error', t)
          }
          function y() {
            e.removeListener('finish', m), b()
          }
          function m() {
            h('onfinish'), e.removeListener('close', y), b()
          }
          function b() {
            h('unpipe'), r.unpipe(e)
          }
          return (
            r.on('data', v),
            (function(e, t, r) {
              if ('function' === typeof e.prependListener)
                return e.prependListener(t, r)
              e._events && e._events[t]
                ? a(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r)
            })(e, 'error', g),
            e.once('close', y),
            e.once('finish', m),
            e.emit('pipe', r),
            o.flowing || (h('pipe resume'), r.resume()),
            e
          )
        }),
        (b.prototype.unpipe = function(e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 }
          if (0 === t.pipesCount) return this
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, r)),
              this
            )
          if (!e) {
            var n = t.pipes,
              i = t.pipesCount
            ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
            for (var o = 0; o < i; o++)
              n[o].emit('unpipe', this, { hasUnpiped: !1 })
            return this
          }
          var a = D(t.pipes, e)
          return (
            -1 === a ||
              (t.pipes.splice(a, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, r)),
            this
          )
        }),
        (b.prototype.on = function(e, t) {
          var r = u.prototype.on.call(this, e, t)
          if ('data' === e) !1 !== this._readableState.flowing && this.resume()
          else if ('readable' === e) {
            var n = this._readableState
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && E(this) : i.nextTick(R, this))
          }
          return r
        }),
        (b.prototype.addListener = b.prototype.on),
        (b.prototype.resume = function() {
          var e = this._readableState
          return (
            e.flowing ||
              (h('resume'),
              (e.flowing = !0),
              (function(e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(P, e, t))
              })(this, e)),
            this
          )
        }),
        (b.prototype.pause = function() {
          return (
            h('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (h('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            this
          )
        }),
        (b.prototype.wrap = function(e) {
          var t = this,
            r = this._readableState,
            n = !1
          for (var i in (e.on('end', function() {
            if ((h('wrapped end'), r.decoder && !r.ended)) {
              var e = r.decoder.end()
              e && e.length && t.push(e)
            }
            t.push(null)
          }),
          e.on('data', function(i) {
            ;(h('wrapped data'),
            r.decoder && (i = r.decoder.write(i)),
            !r.objectMode || (null !== i && void 0 !== i)) &&
              ((r.objectMode || (i && i.length)) &&
                (t.push(i) || ((n = !0), e.pause())))
          }),
          e))
            void 0 === this[i] &&
              'function' === typeof e[i] &&
              (this[i] = (function(t) {
                return function() {
                  return e[t].apply(e, arguments)
                }
              })(i))
          for (var o = 0; o < y.length; o++)
            e.on(y[o], this.emit.bind(this, y[o]))
          return (
            (this._read = function(t) {
              h('wrapped _read', t), n && ((n = !1), e.resume())
            }),
            this
          )
        }),
        Object.defineProperty(b.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark
          }
        }),
        (b._fromList = x)
    },
    16854: function(e, t, r) {
      'use strict'
      e.exports = a
      var n = r(49226),
        i = Object.create(r(23525))
      function o(e, t) {
        var r = this._transformState
        r.transforming = !1
        var n = r.writecb
        if (!n)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          )
        ;(r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e)
        var i = this._readableState
        ;(i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark)
      }
      function a(e) {
        if (!(this instanceof a)) return new a(e)
        n.call(this, e),
          (this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' === typeof e.transform &&
              (this._transform = e.transform),
            'function' === typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', s)
      }
      function s() {
        var e = this
        'function' === typeof this._flush
          ? this._flush(function(t, r) {
              u(e, t, r)
            })
          : u(this, null, null)
      }
      function u(e, t, r) {
        if (t) return e.emit('error', t)
        if ((null != r && e.push(r), e._writableState.length))
          throw new Error('Calling transform done when ws.length != 0')
        if (e._transformState.transforming)
          throw new Error('Calling transform done when still transforming')
        return e.push(null)
      }
      ;(i.inherits = r(56329)),
        i.inherits(a, n),
        (a.prototype.push = function(e, t) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, e, t)
          )
        }),
        (a.prototype._transform = function(e, t, r) {
          throw new Error('_transform() is not implemented')
        }),
        (a.prototype._write = function(e, t, r) {
          var n = this._transformState
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState
            ;(n.needTransform ||
              i.needReadable ||
              i.length < i.highWaterMark) &&
              this._read(i.highWaterMark)
          }
        }),
        (a.prototype._read = function(e) {
          var t = this._transformState
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0)
        }),
        (a.prototype._destroy = function(e, t) {
          var r = this
          n.prototype._destroy.call(this, e, function(e) {
            t(e), r.emit('close')
          })
        })
    },
    96360: function(e, t, r) {
      'use strict'
      var n = r(62285),
        i = r(66600)
      function o(e) {
        var t = this
        ;(this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(e, t, r) {
              var n = e.entry
              e.entry = null
              for (; n; ) {
                var i = n.callback
                t.pendingcb--, i(r), (n = n.next)
              }
              t.corkedRequestsFree.next = e
            })(t, e)
          })
      }
      e.exports = y
      var a,
        s =
          !n.browser && ['v0.10', 'v0.9.'].indexOf(n.version.slice(0, 5)) > -1
            ? setImmediate
            : i.nextTick
      y.WritableState = g
      var u = Object.create(r(23525))
      u.inherits = r(56329)
      var c = { deprecate: r(82390) },
        d = r(53317),
        l = r(80961).Buffer,
        f =
          ('undefined' !== typeof r.g
            ? r.g
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof self
            ? self
            : {}
          ).Uint8Array || function() {}
      var h,
        p = r(79668)
      function v() {}
      function g(e, t) {
        ;(a = a || r(49226)), (e = e || {})
        var n = t instanceof a
        ;(this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.writableObjectMode)
        var u = e.highWaterMark,
          c = e.writableHighWaterMark,
          d = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = u || 0 === u ? u : n && (c || 0 === c) ? c : d),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1)
        var l = !1 === e.decodeStrings
        ;(this.decodeStrings = !l),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(e) {
            !(function(e, t) {
              var r = e._writableState,
                n = r.sync,
                o = r.writecb
              if (
                ((function(e) {
                  ;(e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0)
                })(r),
                t)
              )
                !(function(e, t, r, n, o) {
                  --t.pendingcb,
                    r
                      ? (i.nextTick(o, n),
                        i.nextTick(S, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', n))
                      : (o(n),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', n),
                        S(e, t))
                })(e, r, n, t, o)
              else {
                var a = _(r)
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  w(e, r),
                  n ? s(b, e, r, a, o) : b(e, r, a, o)
              }
            })(t, e)
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this))
      }
      function y(e) {
        if (((a = a || r(49226)), !h.call(y, this) && !(this instanceof a)))
          return new y(e)
        ;(this._writableState = new g(e, this)),
          (this.writable = !0),
          e &&
            ('function' === typeof e.write && (this._write = e.write),
            'function' === typeof e.writev && (this._writev = e.writev),
            'function' === typeof e.destroy && (this._destroy = e.destroy),
            'function' === typeof e.final && (this._final = e.final)),
          d.call(this)
      }
      function m(e, t, r, n, i, o, a) {
        ;(t.writelen = n),
          (t.writecb = a),
          (t.writing = !0),
          (t.sync = !0),
          r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1)
      }
      function b(e, t, r, n) {
        r ||
          (function(e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit('drain'))
          })(e, t),
          t.pendingcb--,
          n(),
          S(e, t)
      }
      function w(e, t) {
        t.bufferProcessing = !0
        var r = t.bufferedRequest
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            i = new Array(n),
            a = t.corkedRequestsFree
          a.entry = r
          for (var s = 0, u = !0; r; )
            (i[s] = r), r.isBuf || (u = !1), (r = r.next), (s += 1)
          ;(i.allBuffers = u),
            m(e, t, !0, t.length, i, '', a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new o(t)),
            (t.bufferedRequestCount = 0)
        } else {
          for (; r; ) {
            var c = r.chunk,
              d = r.encoding,
              l = r.callback
            if (
              (m(e, t, !1, t.objectMode ? 1 : c.length, c, d, l),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break
          }
          null === r && (t.lastBufferedRequest = null)
        }
        ;(t.bufferedRequest = r), (t.bufferProcessing = !1)
      }
      function _(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        )
      }
      function A(e, t) {
        e._final(function(r) {
          t.pendingcb--,
            r && e.emit('error', r),
            (t.prefinished = !0),
            e.emit('prefinish'),
            S(e, t)
        })
      }
      function S(e, t) {
        var r = _(t)
        return (
          r &&
            (!(function(e, t) {
              t.prefinished ||
                t.finalCalled ||
                ('function' === typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), i.nextTick(A, e, t))
                  : ((t.prefinished = !0), e.emit('prefinish')))
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
          r
        )
      }
      u.inherits(y, d),
        (g.prototype.getBuffer = function() {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next)
          return t
        }),
        (function() {
          try {
            Object.defineProperty(g.prototype, 'buffer', {
              get: c.deprecate(
                function() {
                  return this.getBuffer()
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003'
              )
            })
          } catch (e) {}
        })(),
        'function' === typeof Symbol &&
        Symbol.hasInstance &&
        'function' === typeof Function.prototype[Symbol.hasInstance]
          ? ((h = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(y, Symbol.hasInstance, {
              value: function(e) {
                return (
                  !!h.call(this, e) ||
                  (this === y && (e && e._writableState instanceof g))
                )
              }
            }))
          : (h = function(e) {
              return e instanceof this
            }),
        (y.prototype.pipe = function() {
          this.emit('error', new Error('Cannot pipe, not readable'))
        }),
        (y.prototype.write = function(e, t, r) {
          var n,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((n = e), l.isBuffer(n) || n instanceof f)
          return (
            s &&
              !l.isBuffer(e) &&
              (e = (function(e) {
                return l.from(e)
              })(e)),
            'function' === typeof t && ((r = t), (t = null)),
            s ? (t = 'buffer') : t || (t = o.defaultEncoding),
            'function' !== typeof r && (r = v),
            o.ended
              ? (function(e, t) {
                  var r = new Error('write after end')
                  e.emit('error', r), i.nextTick(t, r)
                })(this, r)
              : (s ||
                  (function(e, t, r, n) {
                    var o = !0,
                      a = !1
                    return (
                      null === r
                        ? (a = new TypeError(
                            'May not write null values to stream'
                          ))
                        : 'string' === typeof r ||
                          void 0 === r ||
                          t.objectMode ||
                          (a = new TypeError(
                            'Invalid non-string/buffer chunk'
                          )),
                      a && (e.emit('error', a), i.nextTick(n, a), (o = !1)),
                      o
                    )
                  })(this, o, e, r)) &&
                (o.pendingcb++,
                (a = (function(e, t, r, n, i, o) {
                  if (!r) {
                    var a = (function(e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        'string' !== typeof t ||
                        (t = l.from(t, r))
                      return t
                    })(t, n, i)
                    n !== a && ((r = !0), (i = 'buffer'), (n = a))
                  }
                  var s = t.objectMode ? 1 : n.length
                  t.length += s
                  var u = t.length < t.highWaterMark
                  u || (t.needDrain = !0)
                  if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest
                    ;(t.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null
                    }),
                      c
                        ? (c.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1)
                  } else m(e, t, !1, s, n, i, o)
                  return u
                })(this, o, s, e, t, r))),
            a
          )
        }),
        (y.prototype.cork = function() {
          this._writableState.corked++
        }),
        (y.prototype.uncork = function() {
          var e = this._writableState
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              w(this, e))
        }),
        (y.prototype.setDefaultEncoding = function(e) {
          if (
            ('string' === typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw'
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new TypeError('Unknown encoding: ' + e)
          return (this._writableState.defaultEncoding = e), this
        }),
        Object.defineProperty(y.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark
          }
        }),
        (y.prototype._write = function(e, t, r) {
          r(new Error('_write() is not implemented'))
        }),
        (y.prototype._writev = null),
        (y.prototype.end = function(e, t, r) {
          var n = this._writableState
          'function' === typeof e
            ? ((r = e), (e = null), (t = null))
            : 'function' === typeof t && ((r = t), (t = null)),
            null !== e && void 0 !== e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function(e, t, r) {
                ;(t.ending = !0),
                  S(e, t),
                  r && (t.finished ? i.nextTick(r) : e.once('finish', r))
                ;(t.ended = !0), (e.writable = !1)
              })(this, n, r)
        }),
        Object.defineProperty(y.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            )
          },
          set: function(e) {
            this._writableState && (this._writableState.destroyed = e)
          }
        }),
        (y.prototype.destroy = p.destroy),
        (y.prototype._undestroy = p.undestroy),
        (y.prototype._destroy = function(e, t) {
          this.end(), t(e)
        })
    },
    92954: function(e, t, r) {
      'use strict'
      var n = r(80961).Buffer,
        i = r(565)
      ;(e.exports = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        return (
          (e.prototype.push = function(e) {
            var t = { data: e, next: null }
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length
          }),
          (e.prototype.unshift = function(e) {
            var t = { data: e, next: this.head }
            0 === this.length && (this.tail = t), (this.head = t), ++this.length
          }),
          (e.prototype.shift = function() {
            if (0 !== this.length) {
              var e = this.head.data
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              )
            }
          }),
          (e.prototype.clear = function() {
            ;(this.head = this.tail = null), (this.length = 0)
          }),
          (e.prototype.join = function(e) {
            if (0 === this.length) return ''
            for (var t = this.head, r = '' + t.data; (t = t.next); )
              r += e + t.data
            return r
          }),
          (e.prototype.concat = function(e) {
            if (0 === this.length) return n.alloc(0)
            for (
              var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0;
              a;

            )
              (t = a.data),
                (r = o),
                (i = s),
                t.copy(r, i),
                (s += a.data.length),
                (a = a.next)
            return o
          }),
          e
        )
      })()),
        i &&
          i.inspect &&
          i.inspect.custom &&
          (e.exports.prototype[i.inspect.custom] = function() {
            var e = i.inspect({ length: this.length })
            return this.constructor.name + ' ' + e
          })
    },
    79668: function(e, t, r) {
      'use strict'
      var n = r(66600)
      function i(e, t) {
        e.emit('error', t)
      }
      e.exports = {
        destroy: function(e, t) {
          var r = this,
            o = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed
          return o || a
            ? (t
                ? t(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(i, this, e))
                    : n.nextTick(i, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function(e) {
                !t && e
                  ? r._writableState
                    ? r._writableState.errorEmitted ||
                      ((r._writableState.errorEmitted = !0),
                      n.nextTick(i, r, e))
                    : n.nextTick(i, r, e)
                  : t && t(e)
              }),
              this)
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1))
        }
      }
    },
    53317: function(e, t, r) {
      e.exports = r(27284).EventEmitter
    },
    20203: function(e, t, r) {
      ;((t = e.exports = r(45432)).Stream = t),
        (t.Readable = t),
        (t.Writable = r(96360)),
        (t.Duplex = r(49226)),
        (t.Transform = r(16854)),
        (t.PassThrough = r(40140))
    },
    80961: function(e, t, r) {
      var n = r(26382),
        i = n.Buffer
      function o(e, t) {
        for (var r in e) t[r] = e[r]
      }
      function a(e, t, r) {
        return i(e, t, r)
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = a)),
        o(i, a),
        (a.from = function(e, t, r) {
          if ('number' === typeof e)
            throw new TypeError('Argument must not be a number')
          return i(e, t, r)
        }),
        (a.alloc = function(e, t, r) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number')
          var n = i(e)
          return (
            void 0 !== t
              ? 'string' === typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          )
        }),
        (a.allocUnsafe = function(e) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number')
          return i(e)
        }),
        (a.allocUnsafeSlow = function(e) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number')
          return n.SlowBuffer(e)
        })
    },
    92681: function(e, t, r) {
      'use strict'
      var n = r(80961).Buffer,
        i =
          n.isEncoding ||
          function(e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0
              default:
                return !1
            }
          }
      function o(e) {
        var t
        switch (
          ((this.encoding = (function(e) {
            var t = (function(e) {
              if (!e) return 'utf8'
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e
                  default:
                    if (t) return
                    ;(e = ('' + e).toLowerCase()), (t = !0)
                }
            })(e)
            if ('string' !== typeof t && (n.isEncoding === i || !i(e)))
              throw new Error('Unknown encoding: ' + e)
            return t || e
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = u), (this.end = c), (t = 4)
            break
          case 'utf8':
            ;(this.fillLast = s), (t = 4)
            break
          case 'base64':
            ;(this.text = d), (this.end = l), (t = 3)
            break
          default:
            return (this.write = f), void (this.end = h)
        }
        ;(this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t))
      }
      function a(e) {
        return e <= 127
          ? 0
          : e >> 5 === 6
          ? 2
          : e >> 4 === 14
          ? 3
          : e >> 3 === 30
          ? 4
          : e >> 6 === 2
          ? -1
          : -2
      }
      function s(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function(e, t, r) {
            if (128 !== (192 & t[0])) return (e.lastNeed = 0), '\ufffd'
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 !== (192 & t[1])) return (e.lastNeed = 1), '\ufffd'
              if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                return (e.lastNeed = 2), '\ufffd'
            }
          })(this, e)
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
      }
      function u(e, t) {
        if ((e.length - t) % 2 === 0) {
          var r = e.toString('utf16le', t)
          if (r) {
            var n = r.charCodeAt(r.length - 1)
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              )
          }
          return r
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        )
      }
      function c(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed
          return t + this.lastChar.toString('utf16le', 0, r)
        }
        return t
      }
      function d(e, t) {
        var r = (e.length - t) % 3
        return 0 === r
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - r))
      }
      function l(e) {
        var t = e && e.length ? this.write(e) : ''
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t
      }
      function f(e) {
        return e.toString(this.encoding)
      }
      function h(e) {
        return e && e.length ? this.write(e) : ''
      }
      ;(t.I = o),
        (o.prototype.write = function(e) {
          if (0 === e.length) return ''
          var t, r
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return ''
            ;(r = this.lastNeed), (this.lastNeed = 0)
          } else r = 0
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || ''
        }),
        (o.prototype.end = function(e) {
          var t = e && e.length ? this.write(e) : ''
          return this.lastNeed ? t + '\ufffd' : t
        }),
        (o.prototype.text = function(e, t) {
          var r = (function(e, t, r) {
            var n = t.length - 1
            if (n < r) return 0
            var i = a(t[n])
            if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i
            if (--n < r || -2 === i) return 0
            if (((i = a(t[n])), i >= 0)) return i > 0 && (e.lastNeed = i - 2), i
            if (--n < r || -2 === i) return 0
            if (((i = a(t[n])), i >= 0))
              return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i
            return 0
          })(this, e, t)
          if (!this.lastNeed) return e.toString('utf8', t)
          this.lastTotal = r
          var n = e.length - (r - this.lastNeed)
          return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n)
        }),
        (o.prototype.fillLast = function(e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length)
        })
    },
    16560: function(e, t, r) {
      var n = r(62285),
        i = r(20203).Transform,
        o = r(86494).inherits,
        a = r(60049)
      function s(e) {
        i.call(this, e), (this._destroyed = !1)
      }
      function u(e, t, r) {
        r(null, e)
      }
      function c(e) {
        return function(t, r, n) {
          return (
            'function' == typeof t && ((n = r), (r = t), (t = {})),
            'function' != typeof r && (r = u),
            'function' != typeof n && (n = null),
            e(t, r, n)
          )
        }
      }
      o(s, i),
        (s.prototype.destroy = function(e) {
          if (!this._destroyed) {
            this._destroyed = !0
            var t = this
            n.nextTick(function() {
              e && t.emit('error', e), t.emit('close')
            })
          }
        }),
        (e.exports = c(function(e, t, r) {
          var n = new s(e)
          return (n._transform = t), r && (n._flush = r), n
        })),
        (e.exports.ctor = c(function(e, t, r) {
          function n(t) {
            if (!(this instanceof n)) return new n(t)
            ;(this.options = a(e, t)), s.call(this, this.options)
          }
          return (
            o(n, s),
            (n.prototype._transform = t),
            r && (n.prototype._flush = r),
            n
          )
        })),
        (e.exports.obj = c(function(e, t, r) {
          var n = new s(a({ objectMode: !0, highWaterMark: 16 }, e))
          return (n._transform = t), r && (n._flush = r), n
        }))
    },
    97652: function(e) {
      e.exports = function e(t, r) {
        if (t && r) return e(t)(r)
        if ('function' !== typeof t)
          throw new TypeError('need wrapper function')
        return (
          Object.keys(t).forEach(function(e) {
            n[e] = t[e]
          }),
          n
        )
        function n() {
          for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
            e[r] = arguments[r]
          var n = t.apply(this, e),
            i = e[e.length - 1]
          return (
            'function' === typeof n &&
              n !== i &&
              Object.keys(i).forEach(function(e) {
                n[e] = i[e]
              }),
            n
          )
        }
      }
    },
    60049: function(e) {
      e.exports = function() {
        for (var e = {}, r = 0; r < arguments.length; r++) {
          var n = arguments[r]
          for (var i in n) t.call(n, i) && (e[i] = n[i])
        }
        return e
      }
      var t = Object.prototype.hasOwnProperty
    },
    32395: function(e, t, r) {
      var n = r(39552)
      function i() {
        return (
          'undefined' !== typeof Reflect && Reflect.get
            ? ((e.exports = i = Reflect.get.bind()),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports))
            : ((e.exports = i = function(e, t, r) {
                var i = n(e, t)
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t)
                  return o.get
                    ? o.get.call(arguments.length < 3 ? e : r)
                    : o.value
                }
              }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports)),
          i.apply(this, arguments)
        )
      }
      ;(e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    39552: function(e, t, r) {
      var n = r(63072)
      ;(e.exports = function(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));

        );
        return e
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    }
  }
])
//# sourceMappingURL=662.52fbddae-d5973.chunk.js.map
