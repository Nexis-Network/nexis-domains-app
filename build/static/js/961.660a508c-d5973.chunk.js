/*! For license information please see 961.660a508c-d5973.chunk.js.LICENSE.txt */
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [961],
  {
    51774: function(t, e, r) {
      'use strict'
      var n = r(50883).default,
        i = r(4633).default,
        o = r(29293).default,
        s = r(17383).default,
        a = r(34579).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var u = (function() {
        return a(
          function t() {
            s(this, t)
            var e =
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).endpoint || 'https://ens.buidlhub.com'
            this.endpoint = e
          },
          [
            {
              key: 'addSubscription',
              value: (function() {
                var t = o(
                  i().mark(function t() {
                    var e,
                      r,
                      n,
                      o,
                      s = arguments
                    return i().wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e =
                                  s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                                this._validatePropsExist(e, [
                                  'emailAddress',
                                  'publicAddress'
                                ]),
                                (r = e.publicAddress),
                                (n = e.emailAddress),
                                (o = e.language),
                                t.abrupt(
                                  'return',
                                  this._post('/register', {
                                    walletAddress: r,
                                    email: n,
                                    language: o
                                  })
                                )
                              )
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this
                    )
                  })
                )
                return function() {
                  return t.apply(this, arguments)
                }
              })()
            },
            {
              key: 'getSubscription',
              value: (function() {
                var t = o(
                  i().mark(function t() {
                    var e,
                      r,
                      n,
                      o = arguments
                    return i().wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e =
                                  o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                                this._validatePropsExist(e, ['publicAddress']),
                                (r = e.publicAddress),
                                (n = e.language),
                                t.abrupt(
                                  'return',
                                  this._post('/lookupRegistration', {
                                    walletAddress: r,
                                    language: n
                                  })
                                )
                              )
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this
                    )
                  })
                )
                return function() {
                  return t.apply(this, arguments)
                }
              })()
            },
            {
              key: '_validatePropsExist',
              value: function(t, e) {
                var r,
                  i = n(e)
                try {
                  for (i.s(); !(r = i.n()).done; ) {
                    var o = r.value
                    if (!t[o]) throw new Error(''.concat(o, ' is required'))
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
              }
            },
            {
              key: '_post',
              value: (function() {
                var t = o(
                  i().mark(function t(e, r) {
                    var n, o, s, a, u, f
                    return i().wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (s = this.endpoint + e),
                                (a = {
                                  method: 'POST',
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type':
                                      'application/json;charset=UTF-8',
                                    'x-referrer':
                                      null === (n = window) ||
                                      void 0 === n ||
                                      null === (o = n.location) ||
                                      void 0 === o
                                        ? void 0
                                        : o.hostname
                                  },
                                  body: JSON.stringify(r)
                                }),
                                (t.next = 4),
                                this._fetchWithRetry(s, a)
                              )
                            case 4:
                              if (((u = t.sent), !(f = u.json()).error)) {
                                t.next = 8
                                break
                              }
                              throw new Error(f.error)
                            case 8:
                              return t.abrupt('return', f)
                            case 9:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this
                    )
                  })
                )
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              })()
            },
            {
              key: '_fetchWithRetry',
              value: (function() {
                var t = o(
                  i().mark(function t(e, r) {
                    var n,
                      o,
                      s,
                      a = arguments
                    return i().wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              ;(n = a.length > 2 && void 0 !== a[2] ? a[2] : 3),
                                (o = null),
                                (s = 0)
                            case 3:
                              if (!(s < n)) {
                                t.next = 18
                                break
                              }
                              return (t.prev = 4), (t.next = 7), fetch(e, r)
                            case 7:
                              return t.abrupt('return', t.sent)
                            case 10:
                              ;(t.prev = 10), (t.t0 = t.catch(4)), (o = t.t0)
                            case 13:
                              return (
                                (t.next = 15),
                                new Promise(function(t) {
                                  return setTimeout(t, 250)
                                })
                              )
                            case 15:
                              s++, (t.next = 3)
                              break
                            case 18:
                              throw o
                            case 19:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[4, 10]]
                    )
                  })
                )
                return function(e, r) {
                  return t.apply(this, arguments)
                }
              })()
            }
          ]
        )
      })()
      e.default = u
    },
    31971: function(t, e, r) {
      'use strict'
      var n = r(4633).default,
        i = r(29293).default,
        o = r(17383).default,
        s = r(34579).default,
        a = r(18336).default,
        u = r(29511).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var f = r(73904),
        h = p(r(65043)),
        l = p(r(38180)),
        c = p(r(51774)),
        d = p(r(9098))
      function p(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function v(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? v(Object(r), !0).forEach(function(e) {
                g(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                )
              })
        }
        return t
      }
      function g(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        )
      }
      var w = {
          cancel: 'Cancel',
          close: 'Close',
          error: 'Error',
          loading: 'Registering subscription',
          placeholder: 'Enter Email address',
          registerSuccess:
            'Please check confirmation email to complete subscription.',
          registerFailure: 'Sorry, unable to setup subscription.',
          invalidEmailAddress: 'Invalid email address',
          submit: 'Submit'
        },
        y = {
          actionsContainer:
            '\n        display: flex;\n        justify-content: flex-end;\n    ',
          emailInput:
            '\n        width: 100%; \n        margin: 1em 0;\n        padding: 1px 2px 1px 10px;\n    '
        },
        b = (function(t) {
          function e(t) {
            var r
            o(this, e), ((r = a(this, e, [t])).buidlhub = new c.default())
            var n = t.emailAddress || '',
              i = t.translation || {}
            return (
              (r.translation = m(m({}, w), i)),
              (r.state = {
                loading: !1,
                statusMessage: null,
                hasSubmitted: !1,
                subscription: {},
                emailAddress: n
              }),
              (r.components = r.buildStyledComponents(t)),
              (r.getClient = r.getClient.bind(r)),
              (r.handleCancel = r.handleCancel.bind(r)),
              (r.handleEmailInputChange = r.handleEmailInputChange.bind(r)),
              (r.handleFormSubmit = r.handleFormSubmit.bind(r)),
              (r.validateForm = r.validateForm.bind(r)),
              r
            )
          }
          return (
            u(e, t),
            s(e, [
              {
                key: 'buildStyledComponent',
                value: function(t, e, r) {
                  var n = t[''.concat(e, 'Component')],
                    i = n || r,
                    o = n ? null : t[''.concat(e, 'Style')] || y[e]
                  return (
                    o &&
                      (console.log('styling '.concat(e, '...')),
                      (i = (0, l.default)(i)(o))),
                    i
                  )
                }
              },
              {
                key: 'buildStyledComponents',
                value: function(t) {
                  var e = this.buildStyledComponent(
                      t,
                      'actionsContainer',
                      'div'
                    ),
                    r = this.buildStyledComponent(t, 'cancel', 'button'),
                    n = this.buildStyledComponent(t, 'emailInput', 'input'),
                    i = this.buildStyledComponent(t, 'form', 'form'),
                    o = this.buildStyledComponent(t, 'label', 'label'),
                    s = this.buildStyledComponent(t, 'messageContainer', 'div'),
                    a = this.buildStyledComponent(t, 'submit', 'submit')
                  return {
                    ActionsContainer: e,
                    Cancel: r,
                    EmailInput: n,
                    Form: i,
                    Label: o,
                    Loading: this.props.loadingComponent || d.default,
                    MessageContainer: s,
                    Submit: a
                  }
                }
              },
              {
                key: 'getClient',
                value: (function() {
                  var t = i(
                    n().mark(function t() {
                      return n().wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  Promise.resolve(this.buidlhub)
                                )
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )
                  return function() {
                    return t.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'handleCancel',
                value: (function() {
                  var t = i(
                    n().mark(function t(e) {
                      return n().wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this.props.onCancel && this.props.onCancel(e)
                              case 1:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this
                      )
                    })
                  )
                  return function(e) {
                    return t.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'handleFormSubmit',
                value: (function() {
                  var t = i(
                    n().mark(function t(e) {
                      var r, i, o, s, a, u, f, h
                      return n().wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ((e.preventDefault(), this.validateForm())) {
                                  t.next = 3
                                  break
                                }
                                return t.abrupt('return')
                              case 3:
                                return (
                                  this.setState({
                                    loading: !0,
                                    hasSubmitted: !0,
                                    error: null,
                                    statusMessage: this.translation.loading
                                  }),
                                  (t.next = 6),
                                  this.getClient()
                                )
                              case 6:
                                return (
                                  (r = t.sent),
                                  (i = this.props),
                                  (o = i.publicAddress),
                                  (s = i.language),
                                  (a = this.state.emailAddress),
                                  (t.prev = 9),
                                  (t.next = 12),
                                  r.addSubscription({
                                    publicAddress: o,
                                    emailAddress: a,
                                    language: s
                                  })
                                )
                              case 12:
                                ;(u = t.sent),
                                  (f = u.status),
                                  (h = f
                                    ? this.translation.registerSuccess
                                    : this.translation.registerFailure),
                                  this.setState({
                                    loading: !1,
                                    statusMessage: h
                                  }),
                                  (t.next = 21)
                                break
                              case 18:
                                ;(t.prev = 18),
                                  (t.t0 = t.catch(9)),
                                  this.handleError(t.t0)
                              case 21:
                              case 'end':
                                return t.stop()
                            }
                        },
                        t,
                        this,
                        [[9, 18]]
                      )
                    })
                  )
                  return function(e) {
                    return t.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'validateForm',
                value: function() {
                  this.emailInputElem
                  var t =
                    'function' === typeof this.emailInputElem.checkValidity
                      ? this.emailInputElem.checkValidity()
                      : /\S+@\S+\.\S+/.test(this.emailInputElem.value)
                  return (
                    t ||
                      this.setState({
                        hasSubmitted: !0,
                        loading: !1,
                        statusMessage: this.translation.invalidEmailAddress
                      }),
                    t
                  )
                }
              },
              {
                key: 'handleError',
                value: function(t) {
                  this.setState({
                    loading: !1,
                    statusMessage: this.translation.error + ': ' + t.message
                  })
                }
              },
              {
                key: 'handleEmailInputChange',
                value: function(t) {
                  this.setState({ emailAddress: t.target.value })
                }
              },
              {
                key: 'render',
                value: function() {
                  var t = this.components,
                    e = t.Cancel,
                    r = t.Form,
                    n = t.Loading,
                    i = t.MessageContainer,
                    o = t.ActionsContainer,
                    s = t.Submit,
                    a = null,
                    u = null
                  return (
                    this.state.hasSubmitted ||
                      ((a = this._renderFormBody()),
                      (u = (0, f.jsx)(
                        h.default.Fragment,
                        null,
                        (0, f.jsx)(
                          e,
                          { type: 'button', onClick: this.handleCancel },
                          this.translation.cancel
                        ),
                        (0, f.jsx)(
                          s,
                          { type: 'submit' },
                          this.translation.submit
                        )
                      ))),
                    (0, f.jsx)(
                      r,
                      { onSubmit: this.handleFormSubmit },
                      a,
                      this.state.statusMessage &&
                        (0, f.jsx)(
                          i,
                          null,
                          this.state.loading && (0, f.jsx)(n, null),
                          (0, f.jsx)(
                            'span',
                            { className: 'status' },
                            this.state.statusMessage
                          )
                        ),
                      (0, f.jsx)(o, null, u)
                    )
                  )
                }
              },
              {
                key: '_renderFormBody',
                value: function() {
                  var t = this,
                    e = this.props.publicAddress,
                    r = this.props.className || 'buildhub-input-email',
                    n = this.props.label || 'Email Address',
                    i = this.props.name || 'buidlhub-input-email',
                    o = this.components,
                    s = o.EmailInput,
                    a = o.Label
                  return (0, f.jsx)(
                    h.default.Fragment,
                    null,
                    (0, f.jsx)(a, { address: e, name: i }, n),
                    (0, f.jsx)(s, {
                      id: i,
                      name: i,
                      placeholder: this.translation.placeholder,
                      type: 'email',
                      required: !0,
                      value: this.state.emailAddress,
                      className: r,
                      onChange: this.handleEmailInputChange,
                      ref: function(e) {
                        return (t.emailInputElem = e)
                      }
                    })
                  )
                }
              }
            ])
          )
        })(h.default.Component)
      e.default = b
    },
    9098: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        s = r(29511).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = void 0)
      var a = h(r(65043)),
        u = r(73904),
        f = h(r(38180))
      function h(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function l() {
        var t = (function(t, e) {
          e || (e = t.slice(0))
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        })([
          '\n        width: 40px;\n        height: 40px;\n        background-color: #333;\n        margin: 10px;\n        animation: sk-rotateplane 1.2s infinite ease-in-out;\n        @keyframes sk-rotateplane {\n          0% { \n            transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n          } 50% { \n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n          } 100% { \n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n        }\n        '
        ])
        return (
          (l = function() {
            return t
          }),
          t
        )
      }
      var c = (function(t) {
        function e() {
          return n(this, e), o(this, e, arguments)
        }
        return (
          s(e, t),
          i(e, [
            {
              key: 'render',
              value: function() {
                var t = (0, f.default)('div')(l())
                return (0, u.jsx)(
                  'div',
                  null,
                  (0, u.jsx)(t, null),
                  this.props.message
                )
              }
            }
          ])
        )
      })(a.default.PureComponent)
      e.default = c
    },
    51960: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, 'Cx', {
        enumerable: !0,
        get: function() {
          return i.default
        }
      })
      var n = o(r(51774)),
        i = o(r(31971))
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
    },
    38180: function(t, e, r) {
      'use strict'
      r.r(e)
      var n = r(70030).A.bind()
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan'
      ].forEach(function(t) {
        n[t] = n(t)
      }),
        (e.default = n)
    },
    85576: function(t, e) {
      'use strict'
      function r(t) {
        if (Array.isArray(t)) {
          for (var e = [], n = 0, i = 0; i < t.length; i++) {
            var s = r(t[i])
            e.push(s), (n += s.length)
          }
          return c.apply(void 0, [o(n, 192)].concat(e))
        }
        var a = m(t)
        return 1 === a.length && a[0] < 128 ? a : c(o(a.length, 128), a)
      }
      function n(t, e, r) {
        if (r > t.length)
          throw new Error(
            'invalid RLP (safeSlice): end slice of Uint8Array out-of-bounds'
          )
        return t.slice(e, r)
      }
      function i(t) {
        if (0 === t[0]) throw new Error('invalid RLP: extra zeros')
        return h(f(t))
      }
      function o(t, e) {
        if (t < 56) return Uint8Array.from([t + e])
        var r = p(t),
          n = p(e + 55 + r.length / 2)
        return Uint8Array.from(l(n + r))
      }
      function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        if ('undefined' === typeof t || null === t || 0 === t.length)
          return Uint8Array.from([])
        var r = a(m(t))
        if (e) return r
        if (0 !== r.remainder.length)
          throw new Error('invalid RLP: remainder must be zero')
        return r.data
      }
      function a(t) {
        var e,
          r,
          o,
          s,
          u,
          f = [],
          h = t[0]
        if (h <= 127) return { data: t.slice(0, 1), remainder: t.slice(1) }
        if (h <= 183) {
          if (
            ((e = h - 127),
            (o = 128 === h ? Uint8Array.from([]) : n(t, 1, e)),
            2 === e && o[0] < 128)
          )
            throw new Error(
              'invalid RLP encoding: invalid prefix, single byte < 0x80 are not prefixed'
            )
          return { data: o, remainder: t.slice(e) }
        }
        if (h <= 191) {
          if (((r = h - 182), t.length - 1 < r))
            throw new Error('invalid RLP: not enough bytes for string length')
          if ((e = i(n(t, 1, r))) <= 55)
            throw new Error(
              'invalid RLP: expected string length to be greater than 55'
            )
          return { data: (o = n(t, r, e + r)), remainder: t.slice(e + r) }
        }
        if (h <= 247) {
          for (s = n(t, 1, (e = h - 191)); s.length; )
            (u = a(s)), f.push(u.data), (s = u.remainder)
          return { data: f, remainder: t.slice(e) }
        }
        if ((e = i(n(t, 1, (r = h - 246)))) < 56)
          throw new Error('invalid RLP: encoded list too short')
        var l = r + e
        if (l > t.length)
          throw new Error('invalid RLP: total length is larger than the data')
        for (s = n(t, r, l); s.length; )
          (u = a(s)), f.push(u.data), (s = u.remainder)
        return { data: f, remainder: t.slice(l) }
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RLP = e.utils = e.decode = e.encode = void 0),
        (e.encode = r),
        (e.decode = s)
      var u = Array.from({ length: 256 }, function(t, e) {
        return e.toString(16).padStart(2, '0')
      })
      function f(t) {
        for (var e = '', r = 0; r < t.length; r++) e += u[t[r]]
        return e
      }
      function h(t) {
        var e = Number.parseInt(t, 16)
        if (Number.isNaN(e)) throw new Error('Invalid byte sequence')
        return e
      }
      function l(t) {
        if ('string' !== typeof t)
          throw new TypeError('hexToBytes: expected string, got ' + typeof t)
        if (t.length % 2)
          throw new Error('hexToBytes: received invalid unpadded hex')
        for (var e = new Uint8Array(t.length / 2), r = 0; r < e.length; r++) {
          var n = 2 * r
          e[r] = h(t.slice(n, n + 2))
        }
        return e
      }
      function c() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r]
        if (1 === e.length) return e[0]
        for (
          var n = e.reduce(function(t, e) {
              return t + e.length
            }, 0),
            i = new Uint8Array(n),
            o = 0,
            s = 0;
          o < e.length;
          o++
        ) {
          var a = e[o]
          i.set(a, s), (s += a.length)
        }
        return i
      }
      function d(t) {
        return new TextEncoder().encode(t)
      }
      function p(t) {
        if (t < 0)
          throw new Error('Invalid integer as argument, must be unsigned!')
        var e = t.toString(16)
        return e.length % 2 ? '0'.concat(e) : e
      }
      function v(t) {
        return t.length >= 2 && '0' === t[0] && 'x' === t[1]
      }
      function m(t) {
        if (t instanceof Uint8Array) return t
        if ('string' === typeof t)
          return v(t)
            ? l(
                (e = 'string' !== typeof (r = t) ? r : v(r) ? r.slice(2) : r)
                  .length % 2
                  ? '0'.concat(e)
                  : e
              )
            : d(t)
        var e, r
        if ('number' === typeof t || 'bigint' === typeof t)
          return t ? l(p(t)) : Uint8Array.from([])
        if (null === t || void 0 === t) return Uint8Array.from([])
        throw new Error('toBytes: received unsupported type ' + typeof t)
      }
      ;(e.utils = {
        bytesToHex: f,
        concatBytes: c,
        hexToBytes: l,
        utf8ToBytes: d
      }),
        (e.RLP = { encode: r, decode: s })
    },
    98379: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(85715).default,
        o = r(17383).default,
        s = r(34579).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.accountBodyToRLP = e.accountBodyToSlim = e.accountBodyFromSlim = e.isZeroAddress = e.zeroAddress = e.importPublic = e.privateToAddress = e.privateToPublic = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isValidAddress = e.Account = void 0)
      var a = r(85576),
        u = r(87913),
        f = r(94167),
        h = r(52038),
        l = r(35971),
        c = r(10565),
        d = r(25613),
        p = r(69223),
        v = BigInt(0),
        m = (function() {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : v,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : v,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : c.KECCAK256_RLP,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : c.KECCAK256_NULL
            o(this, t),
              (this.nonce = e),
              (this.balance = r),
              (this.storageRoot = n),
              (this.codeHash = i),
              this._validate()
          }
          return s(
            t,
            [
              {
                key: '_validate',
                value: function() {
                  if (this.nonce < v)
                    throw new Error('nonce must be greater than zero')
                  if (this.balance < v)
                    throw new Error('balance must be greater than zero')
                  if (32 !== this.storageRoot.length)
                    throw new Error('storageRoot must have a length of 32')
                  if (32 !== this.codeHash.length)
                    throw new Error('codeHash must have a length of 32')
                }
              },
              {
                key: 'raw',
                value: function() {
                  return [
                    (0, l.bigIntToUnpaddedBuffer)(this.nonce),
                    (0, l.bigIntToUnpaddedBuffer)(this.balance),
                    this.storageRoot,
                    this.codeHash
                  ]
                }
              },
              {
                key: 'serialize',
                value: function() {
                  return n.from(a.RLP.encode((0, l.bufArrToArr)(this.raw())))
                }
              },
              {
                key: 'isContract',
                value: function() {
                  return !this.codeHash.equals(c.KECCAK256_NULL)
                }
              },
              {
                key: 'isEmpty',
                value: function() {
                  return (
                    this.balance === v &&
                    this.nonce === v &&
                    this.codeHash.equals(c.KECCAK256_NULL)
                  )
                }
              }
            ],
            [
              {
                key: 'fromAccountData',
                value: function(e) {
                  var r = e.nonce,
                    n = e.balance,
                    i = e.storageRoot,
                    o = e.codeHash
                  return new t(
                    void 0 !== r
                      ? (0, l.bufferToBigInt)((0, l.toBuffer)(r))
                      : void 0,
                    void 0 !== n
                      ? (0, l.bufferToBigInt)((0, l.toBuffer)(n))
                      : void 0,
                    void 0 !== i ? (0, l.toBuffer)(i) : void 0,
                    void 0 !== o ? (0, l.toBuffer)(o) : void 0
                  )
                }
              },
              {
                key: 'fromRlpSerializedAccount',
                value: function(t) {
                  var e = (0, l.arrToBufArr)(a.RLP.decode(Uint8Array.from(t)))
                  if (!Array.isArray(e))
                    throw new Error(
                      'Invalid serialized account input. Must be array'
                    )
                  return this.fromValuesArray(e)
                }
              },
              {
                key: 'fromValuesArray',
                value: function(e) {
                  var r = i(e, 4),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3]
                  return new t(
                    (0, l.bufferToBigInt)(n),
                    (0, l.bufferToBigInt)(o),
                    s,
                    a
                  )
                }
              }
            ]
          )
        })()
      e.Account = m
      e.isValidAddress = function(t) {
        try {
          ;(0, d.assertIsString)(t)
        } catch (e) {
          return !1
        }
        return /^0x[0-9a-fA-F]{40}$/.test(t)
      }
      e.toChecksumAddress = function(t, e) {
        ;(0, d.assertIsHexString)(t)
        var r = (0, p.stripHexPrefix)(t).toLowerCase(),
          i = ''
        void 0 !== e &&
          (i = (0, l.bufferToBigInt)((0, l.toBuffer)(e)).toString() + '0x')
        for (
          var o = n.from(i + r, 'utf8'),
            s = (0, h.bytesToHex)((0, u.keccak256)(o)),
            a = '0x',
            f = 0;
          f < r.length;
          f++
        )
          parseInt(s[f], 16) >= 8 ? (a += r[f].toUpperCase()) : (a += r[f])
        return a
      }
      e.isValidChecksumAddress = function(t, r) {
        return (0, e.isValidAddress)(t) && (0, e.toChecksumAddress)(t, r) === t
      }
      e.generateAddress = function(t, e) {
        return (
          (0, d.assertIsBuffer)(t),
          (0, d.assertIsBuffer)(e),
          (0, l.bufferToBigInt)(e) === BigInt(0)
            ? n
                .from(
                  (0, u.keccak256)(a.RLP.encode((0, l.bufArrToArr)([t, null])))
                )
                .slice(-20)
            : n
                .from(
                  (0, u.keccak256)(a.RLP.encode((0, l.bufArrToArr)([t, e])))
                )
                .slice(-20)
        )
      }
      e.generateAddress2 = function(t, e, r) {
        if (
          ((0, d.assertIsBuffer)(t),
          (0, d.assertIsBuffer)(e),
          (0, d.assertIsBuffer)(r),
          20 !== t.length)
        )
          throw new Error('Expected from to be of length 20')
        if (32 !== e.length) throw new Error('Expected salt to be of length 32')
        var i = (0, u.keccak256)(
          n.concat([n.from('ff', 'hex'), t, e, (0, u.keccak256)(r)])
        )
        return (0, l.toBuffer)(i).slice(-20)
      }
      e.isValidPrivate = function(t) {
        return f.secp256k1.utils.isValidPrivateKey(t)
      }
      e.isValidPublic = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        if (((0, d.assertIsBuffer)(t), 64 === t.length))
          try {
            return (
              f.secp256k1.ProjectivePoint.fromHex(n.concat([n.from([4]), t])),
              !0
            )
          } catch (r) {
            return !1
          }
        if (!e) return !1
        try {
          return f.secp256k1.ProjectivePoint.fromHex(t), !0
        } catch (r) {
          return !1
        }
      }
      ;(e.pubToAddress = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        if (
          ((0, d.assertIsBuffer)(t),
          e &&
            64 !== t.length &&
            (t = n.from(
              f.secp256k1.ProjectivePoint.fromHex(t)
                .toRawBytes(!1)
                .slice(1)
            )),
          64 !== t.length)
        )
          throw new Error('Expected pubKey to be of length 64')
        return n.from((0, u.keccak256)(t)).slice(-20)
      }),
        (e.publicToAddress = e.pubToAddress)
      e.privateToPublic = function(t) {
        return (
          (0, d.assertIsBuffer)(t),
          n.from(
            f.secp256k1.ProjectivePoint.fromPrivateKey(t)
              .toRawBytes(!1)
              .slice(1)
          )
        )
      }
      e.privateToAddress = function(t) {
        return (0, e.publicToAddress)((0, e.privateToPublic)(t))
      }
      e.importPublic = function(t) {
        return (
          (0, d.assertIsBuffer)(t),
          64 !== t.length &&
            (t = n.from(
              f.secp256k1.ProjectivePoint.fromHex(t)
                .toRawBytes(!1)
                .slice(1)
            )),
          t
        )
      }
      e.zeroAddress = function() {
        var t = (0, l.zeros)(20)
        return (0, l.bufferToHex)(t)
      }
      function g(t) {
        var e = i(t, 4),
          r = e[0],
          n = e[1],
          o = e[2],
          s = e[3]
        return [
          r,
          n,
          0 === (0, l.arrToBufArr)(o).length ? c.KECCAK256_RLP : o,
          0 === (0, l.arrToBufArr)(s).length ? c.KECCAK256_NULL : s
        ]
      }
      ;(e.isZeroAddress = function(t) {
        try {
          ;(0, d.assertIsString)(t)
        } catch (r) {
          return !1
        }
        return (0, e.zeroAddress)() === t
      }),
        (e.accountBodyFromSlim = g)
      var w = new Uint8Array(0)
      ;(e.accountBodyToSlim = function(t) {
        var e = i(t, 4),
          r = e[0],
          n = e[1],
          o = e[2],
          s = e[3]
        return [
          r,
          n,
          (0, l.arrToBufArr)(o).equals(c.KECCAK256_RLP) ? w : o,
          (0, l.arrToBufArr)(s).equals(c.KECCAK256_NULL) ? w : s
        ]
      }),
        (e.accountBodyToRLP = function(t) {
          var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              ? g(t)
              : t
          return (0, l.arrToBufArr)(a.RLP.encode(e))
        })
    },
    80440: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(17383).default,
        o = r(34579).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Address = void 0)
      var s = r(98379),
        a = r(35971),
        u = (function() {
          function t(e) {
            if ((i(this, t), 20 !== e.length))
              throw new Error('Invalid address length')
            this.buf = e
          }
          return o(
            t,
            [
              {
                key: 'equals',
                value: function(t) {
                  return this.buf.equals(t.buf)
                }
              },
              {
                key: 'isZero',
                value: function() {
                  return this.equals(t.zero())
                }
              },
              {
                key: 'isPrecompileOrSystemAddress',
                value: function() {
                  var t = (0, a.bufferToBigInt)(this.buf),
                    e = BigInt(0),
                    r = BigInt('0xffff')
                  return t >= e && t <= r
                }
              },
              {
                key: 'toString',
                value: function() {
                  return '0x' + this.buf.toString('hex')
                }
              },
              {
                key: 'toBuffer',
                value: function() {
                  return n.from(this.buf)
                }
              }
            ],
            [
              {
                key: 'zero',
                value: function() {
                  return new t((0, a.zeros)(20))
                }
              },
              {
                key: 'fromString',
                value: function(e) {
                  if (!(0, s.isValidAddress)(e))
                    throw new Error('Invalid address')
                  return new t((0, a.toBuffer)(e))
                }
              },
              {
                key: 'fromPublicKey',
                value: function(e) {
                  if (!n.isBuffer(e))
                    throw new Error('Public key should be Buffer')
                  return new t((0, s.pubToAddress)(e))
                }
              },
              {
                key: 'fromPrivateKey',
                value: function(e) {
                  if (!n.isBuffer(e))
                    throw new Error('Private key should be Buffer')
                  return new t((0, s.privateToAddress)(e))
                }
              },
              {
                key: 'generate',
                value: function(e, r) {
                  if ('bigint' !== typeof r)
                    throw new Error('Expected nonce to be a bigint')
                  return new t(
                    (0, s.generateAddress)(e.buf, (0, a.bigIntToBuffer)(r))
                  )
                }
              },
              {
                key: 'generate2',
                value: function(e, r, i) {
                  if (!n.isBuffer(r))
                    throw new Error('Expected salt to be a Buffer')
                  if (!n.isBuffer(i))
                    throw new Error('Expected initCode to be a Buffer')
                  return new t((0, s.generateAddress2)(e.buf, r, i))
                }
              }
            ]
          )
        })()
      e.Address = u
    },
    19526: function(t, e, r) {
      'use strict'
      var n = r(4633).default,
        i = r(17383).default,
        o = r(34579).default,
        s = r(18336).default,
        a = r(32395).default,
        u = r(63072).default,
        f = r(29511).default,
        h = r(29293).default,
        l = r(82881).default
      function c() {
        return (c = h(
          n().mark(function t(e, r, i) {
            var o, s, a, u, f, h, c
            return n().wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      ;(s = !1),
                        (a = !1),
                        (t.prev = 2),
                        (f = n().mark(function t() {
                          var r
                          return n().wrap(
                            function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((r = c.value),
                                      (t.prev = 1),
                                      !(r.length < 2))
                                    ) {
                                      t.next = 6
                                      break
                                    }
                                    r.call(e, i), (t.next = 8)
                                    break
                                  case 6:
                                    return (
                                      (t.next = 8),
                                      new Promise(function(t, n) {
                                        r.call(e, i, function(e) {
                                          e ? n(e) : t()
                                        })
                                      })
                                    )
                                  case 8:
                                    t.next = 13
                                    break
                                  case 10:
                                    ;(t.prev = 10),
                                      (t.t0 = t.catch(1)),
                                      (o = t.t0)
                                  case 13:
                                  case 'end':
                                    return t.stop()
                                }
                            },
                            t,
                            null,
                            [[1, 10]]
                          )
                        })),
                        (h = l(r))
                    case 5:
                      return (t.next = 7), h.next()
                    case 7:
                      if (!(s = !(c = t.sent).done)) {
                        t.next = 12
                        break
                      }
                      return t.delegateYield(f(), 't0', 9)
                    case 9:
                      ;(s = !1), (t.next = 5)
                      break
                    case 12:
                      t.next = 18
                      break
                    case 14:
                      ;(t.prev = 14), (t.t1 = t.catch(2)), (a = !0), (u = t.t1)
                    case 18:
                      if (
                        ((t.prev = 18), (t.prev = 19), !s || null == h.return)
                      ) {
                        t.next = 23
                        break
                      }
                      return (t.next = 23), h.return()
                    case 23:
                      if (((t.prev = 23), !a)) {
                        t.next = 26
                        break
                      }
                      throw u
                    case 26:
                      return t.finish(23)
                    case 27:
                      return t.finish(18)
                    case 28:
                      if (!o) {
                        t.next = 30
                        break
                      }
                      throw o
                    case 30:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              null,
              [[2, 14, 18, 28], [19, , 23, 27]]
            )
          })
        )).apply(this, arguments)
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AsyncEventEmitter = void 0)
      var d = (function(t) {
        function e() {
          return i(this, e), s(this, e, arguments)
        }
        return (
          f(e, t),
          o(e, [
            {
              key: 'emit',
              value: function(t) {
                for (
                  var e,
                    r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i]
                var o = n[0],
                  s = n[1],
                  a = this,
                  u = null !== (e = a._events[t]) && void 0 !== e ? e : []
                return (
                  void 0 === s &&
                    'function' === typeof o &&
                    ((s = o), (o = void 0)),
                  ('newListener' !== t && 'removeListener' !== t) ||
                    ((o = { event: o, fn: s }), (s = void 0)),
                  (function(t, e, r) {
                    return c.apply(this, arguments)
                  })(a, (u = Array.isArray(u) ? u : [u]).slice(), o)
                    .then(s)
                    .catch(s),
                  a.listenerCount(t) > 0
                )
              }
            },
            {
              key: 'once',
              value: function(t, e) {
                var r,
                  n = this
                if ('function' !== typeof e)
                  throw new TypeError('listener must be a function')
                return (
                  (r =
                    e.length >= 2
                      ? function(i, o) {
                          n.removeListener(t, r), e(i, o)
                        }
                      : function(i) {
                          n.removeListener(t, r), e(i, r)
                        }),
                  n.on(t, r),
                  n
                )
              }
            },
            {
              key: 'first',
              value: function(t, e) {
                var r,
                  n = null !== (r = this._events[t]) && void 0 !== r ? r : []
                if ('function' !== typeof e)
                  throw new TypeError('listener must be a function')
                return (
                  Array.isArray(n) || (this._events[t] = n = [n]),
                  n.unshift(e),
                  this
                )
              }
            },
            {
              key: 'before',
              value: function(t, e, r) {
                return this.beforeOrAfter(t, e, r)
              }
            },
            {
              key: 'after',
              value: function(t, e, r) {
                return this.beforeOrAfter(t, e, r, 'after')
              }
            },
            {
              key: 'beforeOrAfter',
              value: function(t, e, r, n) {
                var i,
                  o,
                  s,
                  a = null !== (i = this._events[t]) && void 0 !== i ? i : [],
                  u = 'after' === n ? 1 : 0
                if ('function' !== typeof r)
                  throw new TypeError('listener must be a function')
                if ('function' !== typeof e)
                  throw new TypeError('target must be a function')
                for (
                  Array.isArray(a) || (this._events[t] = a = [a]),
                    s = a.length,
                    o = a.length;
                  o--;

                )
                  if (a[o] === e) {
                    s = o + u
                    break
                  }
                return a.splice(s, 0, r), this
              }
            },
            {
              key: 'on',
              value: function(t, r) {
                return a(u(e.prototype), 'on', this).call(this, t, r)
              }
            },
            {
              key: 'addListener',
              value: function(t, r) {
                return a(u(e.prototype), 'addListener', this).call(this, t, r)
              }
            },
            {
              key: 'prependListener',
              value: function(t, r) {
                return a(u(e.prototype), 'prependListener', this).call(
                  this,
                  t,
                  r
                )
              }
            },
            {
              key: 'prependOnceListener',
              value: function(t, r) {
                return a(u(e.prototype), 'prependOnceListener', this).call(
                  this,
                  t,
                  r
                )
              }
            },
            {
              key: 'removeAllListeners',
              value: function(t) {
                return a(u(e.prototype), 'removeAllListeners', this).call(
                  this,
                  t
                )
              }
            },
            {
              key: 'removeListener',
              value: function(t, r) {
                return a(u(e.prototype), 'removeListener', this).call(
                  this,
                  t,
                  r
                )
              }
            },
            {
              key: 'eventNames',
              value: function() {
                return a(u(e.prototype), 'eventNames', this).call(this)
              }
            },
            {
              key: 'listeners',
              value: function(t) {
                return a(u(e.prototype), 'listeners', this).call(this, t)
              }
            },
            {
              key: 'listenerCount',
              value: function(t) {
                return a(u(e.prototype), 'listenerCount', this).call(this, t)
              }
            },
            {
              key: 'getMaxListeners',
              value: function() {
                return a(u(e.prototype), 'getMaxListeners', this).call(this)
              }
            },
            {
              key: 'setMaxListeners',
              value: function(t) {
                return a(u(e.prototype), 'setMaxListeners', this).call(this, t)
              }
            }
          ])
        )
      })(r(27284).EventEmitter)
      e.AsyncEventEmitter = d
    },
    35971: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(85715).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.intToUnpaddedBuffer = e.bigIntToUnpaddedBuffer = e.bigIntToHex = e.bufArrToArr = e.arrToBufArr = e.validateNoLeadingZeroes = e.baToJSON = e.toUtf8 = e.short = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToInt = e.bigIntToBuffer = e.bufferToBigInt = e.bufferToHex = e.toBuffer = e.unpadHexString = e.unpadArray = e.unpadBuffer = e.setLengthRight = e.setLengthLeft = e.zeros = e.intToBuffer = e.intToHex = void 0)
      var o = r(25613),
        s = r(69223)
      e.intToHex = function(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error('Received an invalid integer type: '.concat(t))
        return '0x'.concat(t.toString(16))
      }
      e.intToBuffer = function(t) {
        var r = (0, e.intToHex)(t)
        return n.from((0, s.padToEven)(r.slice(2)), 'hex')
      }
      e.zeros = function(t) {
        return n.allocUnsafe(t).fill(0)
      }
      var a = function(t, r, n) {
        var i = (0, e.zeros)(r)
        return n
          ? t.length < r
            ? (t.copy(i), i)
            : t.slice(0, r)
          : t.length < r
          ? (t.copy(i, r - t.length), i)
          : t.slice(-r)
      }
      e.setLengthLeft = function(t, e) {
        return (0, o.assertIsBuffer)(t), a(t, e, !1)
      }
      e.setLengthRight = function(t, e) {
        return (0, o.assertIsBuffer)(t), a(t, e, !0)
      }
      var u = function(t) {
        for (var e = t[0]; t.length > 0 && '0' === e.toString(); )
          e = (t = t.slice(1))[0]
        return t
      }
      e.unpadBuffer = function(t) {
        return (0, o.assertIsBuffer)(t), u(t)
      }
      e.unpadArray = function(t) {
        return (0, o.assertIsArray)(t), u(t)
      }
      e.unpadHexString = function(t) {
        return (
          (0, o.assertIsHexString)(t),
          (t = (0, s.stripHexPrefix)(t)),
          '0x' + u(t)
        )
      }
      e.toBuffer = function(t) {
        if (null === t || void 0 === t) return n.allocUnsafe(0)
        if (n.isBuffer(t)) return n.from(t)
        if (Array.isArray(t) || t instanceof Uint8Array) return n.from(t)
        if ('string' === typeof t) {
          if (!(0, s.isHexString)(t))
            throw new Error(
              'Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: '.concat(
                t
              )
            )
          return n.from((0, s.padToEven)((0, s.stripHexPrefix)(t)), 'hex')
        }
        if ('number' === typeof t) return (0, e.intToBuffer)(t)
        if ('bigint' === typeof t) {
          if (t < BigInt(0))
            throw new Error(
              'Cannot convert negative bigint to buffer. Given: '.concat(t)
            )
          var r = t.toString(16)
          return r.length % 2 && (r = '0' + r), n.from(r, 'hex')
        }
        if (t.toArray) return n.from(t.toArray())
        if (t.toBuffer) return n.from(t.toBuffer())
        throw new Error('invalid type')
      }
      function f(t) {
        var r = (0, e.bufferToHex)(t)
        return '0x' === r ? BigInt(0) : BigInt(r)
      }
      function h(t) {
        return (0, e.toBuffer)('0x' + t.toString(16))
      }
      ;(e.bufferToHex = function(t) {
        return '0x' + (t = (0, e.toBuffer)(t)).toString('hex')
      }),
        (e.bufferToBigInt = f),
        (e.bigIntToBuffer = h)
      e.bufferToInt = function(t) {
        var e = Number(f(t))
        if (!Number.isSafeInteger(e)) throw new Error('Number exceeds 53 bits')
        return e
      }
      e.fromSigned = function(t) {
        return BigInt.asIntN(256, f(t))
      }
      e.toUnsigned = function(t) {
        return h(BigInt.asUintN(256, t))
      }
      ;(e.addHexPrefix = function(t) {
        return 'string' !== typeof t || (0, s.isHexPrefixed)(t) ? t : '0x' + t
      }),
        (e.short = function(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 50,
            r = n.isBuffer(t) ? t.toString('hex') : t
          return r.length <= e ? r : r.slice(0, e) + '\u2026'
        })
      e.toUtf8 = function(t) {
        if ((t = (0, s.stripHexPrefix)(t)).length % 2 !== 0)
          throw new Error(
            'Invalid non-even hex string input for toUtf8() provided'
          )
        return n.from(t.replace(/^(00)+|(00)+$/g, ''), 'hex').toString('utf8')
      }
      e.baToJSON = function(t) {
        if (n.isBuffer(t)) return '0x'.concat(t.toString('hex'))
        if (t instanceof Array) {
          for (var r = [], i = 0; i < t.length; i++)
            r.push((0, e.baToJSON)(t[i]))
          return r
        }
      }
      ;(e.validateNoLeadingZeroes = function(t) {
        for (var e = 0, r = Object.entries(t); e < r.length; e++) {
          var n = i(r[e], 2),
            o = n[0],
            s = n[1]
          if (void 0 !== s && s.length > 0 && 0 === s[0])
            throw new Error(
              ''
                .concat(o, ' cannot have leading zeroes, received: ')
                .concat(s.toString('hex'))
            )
        }
      }),
        (e.arrToBufArr = function t(e) {
          return Array.isArray(e)
            ? e.map(function(e) {
                return t(e)
              })
            : n.from(e)
        }),
        (e.bufArrToArr = function t(e) {
          return Array.isArray(e)
            ? e.map(function(e) {
                return t(e)
              })
            : Uint8Array.from(null !== e && void 0 !== e ? e : [])
        })
      ;(e.bigIntToHex = function(t) {
        return '0x' + t.toString(16)
      }),
        (e.bigIntToUnpaddedBuffer = function(t) {
          return (0, e.unpadBuffer)(h(t))
        }),
        (e.intToUnpaddedBuffer = function(t) {
          return (0, e.unpadBuffer)((0, e.intToBuffer)(t))
        })
    },
    10565: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MAX_WITHDRAWALS_PER_PAYLOAD = e.RLP_EMPTY_STRING = e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.SECP256K1_ORDER_DIV_2 = e.SECP256K1_ORDER = e.MAX_INTEGER_BIGINT = e.MAX_INTEGER = e.MAX_UINT64 = void 0)
      var n = r(26382),
        i = r(94167)
      ;(e.MAX_UINT64 = BigInt('0xffffffffffffffff')),
        (e.MAX_INTEGER = BigInt(
          '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
        )),
        (e.MAX_INTEGER_BIGINT = BigInt(
          '115792089237316195423570985008687907853269984665640564039457584007913129639935'
        )),
        (e.SECP256K1_ORDER = i.secp256k1.CURVE.n),
        (e.SECP256K1_ORDER_DIV_2 = i.secp256k1.CURVE.n / BigInt(2)),
        (e.TWO_POW256 = BigInt(
          '0x10000000000000000000000000000000000000000000000000000000000000000'
        )),
        (e.KECCAK256_NULL_S =
          'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'),
        (e.KECCAK256_NULL = n.Buffer.from(e.KECCAK256_NULL_S, 'hex')),
        (e.KECCAK256_RLP_ARRAY_S =
          '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347'),
        (e.KECCAK256_RLP_ARRAY = n.Buffer.from(e.KECCAK256_RLP_ARRAY_S, 'hex')),
        (e.KECCAK256_RLP_S =
          '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'),
        (e.KECCAK256_RLP = n.Buffer.from(e.KECCAK256_RLP_S, 'hex')),
        (e.RLP_EMPTY_STRING = n.Buffer.from([128])),
        (e.MAX_WITHDRAWALS_PER_PAYLOAD = 16)
    },
    19519: function(t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.compactBytesToNibbles = e.bytesToNibbles = e.nibblesToCompactBytes = e.nibblesToBytes = e.hasTerminator = void 0)
      e.hasTerminator = function(t) {
        return t.length > 0 && 16 === t[t.length - 1]
      }
      e.nibblesToBytes = function(t, e) {
        for (var r = 0, n = 0; n < t.length; r += 1, n += 2)
          e[r] = (t[n] << 4) | t[n + 1]
      }
      e.nibblesToCompactBytes = function(t) {
        var r = 0
        ;(0, e.hasTerminator)(t) && ((r = 1), (t = t.subarray(0, t.length - 1)))
        var n = new Uint8Array(t.length / 2 + 1)
        return (
          (n[0] = r << 5),
          1 === (1 & t.length) &&
            ((n[0] |= 16), (n[0] |= t[0]), (t = t.subarray(1))),
          (0, e.nibblesToBytes)(t, n.subarray(1)),
          n
        )
      }
      e.bytesToNibbles = function(t) {
        for (
          var e = 2 * t.length + 1, r = new Uint8Array(e), n = 0;
          n < t.length;
          n++
        ) {
          var i = t[n]
          ;(r[2 * n] = i / 16), (r[2 * n + 1] = i % 16)
        }
        return (r[e - 1] = 16), r
      }
      e.compactBytesToNibbles = function(t) {
        if (0 === t.length) return t
        var r = (0, e.bytesToNibbles)(t)
        r[0] < 2 && (r = r.subarray(0, r.length - 1))
        var n = 2 - (1 & r[0])
        return r.subarray(n)
      }
    },
    25613: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.assertIsString = e.assertIsArray = e.assertIsBuffer = e.assertIsHexString = void 0)
      var i = r(69223)
      e.assertIsHexString = function(t) {
        if (!(0, i.isHexString)(t)) {
          var e = 'This method only supports 0x-prefixed hex strings but input was: '.concat(
            t
          )
          throw new Error(e)
        }
      }
      e.assertIsBuffer = function(t) {
        if (!n.isBuffer(t)) {
          var e = 'This method only supports Buffer but input was: '.concat(t)
          throw new Error(e)
        }
      }
      e.assertIsArray = function(t) {
        if (!Array.isArray(t)) {
          var e = 'This method only supports number arrays but input was: '.concat(
            t
          )
          throw new Error(e)
        }
      }
      e.assertIsString = function(t) {
        if ('string' !== typeof t) {
          var e = 'This method only supports strings but input was: '.concat(t)
          throw new Error(e)
        }
      }
    },
    63440: function(t, e, r) {
      'use strict'
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, r, n) {
                void 0 === n && (n = r)
                var i = Object.getOwnPropertyDescriptor(e, r)
                ;(i &&
                  !('get' in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function() {
                      return e[r]
                    }
                  }),
                  Object.defineProperty(t, n, i)
              }
            : function(t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r])
              }),
        i =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var r in t)
              'default' === r ||
                Object.prototype.hasOwnProperty.call(e, r) ||
                n(e, t, r)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.toAscii = e.stripHexPrefix = e.padToEven = e.isHexString = e.isHexPrefixed = e.getKeys = e.getBinarySize = e.fromUtf8 = e.fromAscii = e.arrayContainsArray = void 0),
        i(r(10565), e),
        i(r(47075), e),
        i(r(98379), e),
        i(r(80440), e),
        i(r(10533), e),
        i(r(37886), e),
        i(r(35971), e),
        i(r(30517), e),
        i(r(19519), e),
        i(r(19526), e)
      var o = r(69223)
      Object.defineProperty(e, 'arrayContainsArray', {
        enumerable: !0,
        get: function() {
          return o.arrayContainsArray
        }
      }),
        Object.defineProperty(e, 'fromAscii', {
          enumerable: !0,
          get: function() {
            return o.fromAscii
          }
        }),
        Object.defineProperty(e, 'fromUtf8', {
          enumerable: !0,
          get: function() {
            return o.fromUtf8
          }
        }),
        Object.defineProperty(e, 'getBinarySize', {
          enumerable: !0,
          get: function() {
            return o.getBinarySize
          }
        }),
        Object.defineProperty(e, 'getKeys', {
          enumerable: !0,
          get: function() {
            return o.getKeys
          }
        }),
        Object.defineProperty(e, 'isHexPrefixed', {
          enumerable: !0,
          get: function() {
            return o.isHexPrefixed
          }
        }),
        Object.defineProperty(e, 'isHexString', {
          enumerable: !0,
          get: function() {
            return o.isHexString
          }
        }),
        Object.defineProperty(e, 'padToEven', {
          enumerable: !0,
          get: function() {
            return o.padToEven
          }
        }),
        Object.defineProperty(e, 'stripHexPrefix', {
          enumerable: !0,
          get: function() {
            return o.stripHexPrefix
          }
        }),
        Object.defineProperty(e, 'toAscii', {
          enumerable: !0,
          get: function() {
            return o.toAscii
          }
        }),
        i(r(49013), e),
        i(r(84083), e)
    },
    69223: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer
      function i(t) {
        if ('string' !== typeof t)
          throw new Error(
            "[isHexPrefixed] input must be type 'string', received type ".concat(
              typeof t
            )
          )
        return '0' === t[0] && 'x' === t[1]
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isHexString = e.getKeys = e.fromAscii = e.fromUtf8 = e.toAscii = e.arrayContainsArray = e.getBinarySize = e.padToEven = e.stripHexPrefix = e.isHexPrefixed = void 0),
        (e.isHexPrefixed = i)
      function o(t) {
        var e = t
        if ('string' !== typeof e)
          throw new Error(
            "[padToEven] value must be type 'string', received ".concat(
              typeof e
            )
          )
        return e.length % 2 && (e = '0'.concat(e)), e
      }
      ;(e.stripHexPrefix = function(t) {
        if ('string' !== typeof t)
          throw new Error(
            "[stripHexPrefix] input must be type 'string', received ".concat(
              typeof t
            )
          )
        return i(t) ? t.slice(2) : t
      }),
        (e.padToEven = o),
        (e.getBinarySize = function(t) {
          if ('string' !== typeof t)
            throw new Error(
              "[getBinarySize] method requires input type 'string', received ".concat(
                typeof t
              )
            )
          return n.byteLength(t, 'utf8')
        }),
        (e.arrayContainsArray = function(t, e, r) {
          if (!0 !== Array.isArray(t))
            throw new Error(
              "[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(
                typeof t,
                "'"
              )
            )
          if (!0 !== Array.isArray(e))
            throw new Error(
              "[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(
                typeof e,
                "'"
              )
            )
          return e[!0 === r ? 'some' : 'every'](function(e) {
            return t.indexOf(e) >= 0
          })
        }),
        (e.toAscii = function(t) {
          var e = '',
            r = 0,
            n = t.length
          for ('0x' === t.substring(0, 2) && (r = 2); r < n; r += 2) {
            var i = parseInt(t.substr(r, 2), 16)
            e += String.fromCharCode(i)
          }
          return e
        }),
        (e.fromUtf8 = function(t) {
          var e = n.from(t, 'utf8')
          return '0x'.concat(o(e.toString('hex')).replace(/^0+|0+$/g, ''))
        }),
        (e.fromAscii = function(t) {
          for (var e = '', r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16)
            e += n.length < 2 ? '0'.concat(n) : n
          }
          return '0x'.concat(e)
        }),
        (e.getKeys = function(t, e, r) {
          if (!Array.isArray(t))
            throw new Error(
              "[getKeys] method expects input 'params' to be an array, got ".concat(
                typeof t
              )
            )
          if ('string' !== typeof e)
            throw new Error(
              "[getKeys] method expects input 'key' to be type 'string', got ".concat(
                typeof t
              )
            )
          for (var n = [], i = 0; i < t.length; i++) {
            var o = t[i][e]
            if (!0 !== r || o) {
              if ('string' !== typeof o)
                throw new Error(
                  "invalid abi - expected type 'string', received ".concat(
                    typeof o
                  )
                )
            } else o = ''
            n.push(o)
          }
          return n
        }),
        (e.isHexString = function(t, e) {
          return (
            !('string' !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
            !('undefined' !== typeof e && e > 0 && t.length !== 2 + 2 * e)
          )
        })
    },
    49013: function(t, e, r) {
      'use strict'
      var n = r(4633).default,
        i = r(29293).default,
        o = r(17383).default,
        s = r(34579).default
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Lock = void 0)
      var a = (function() {
        return s(
          function t() {
            o(this, t), (this.permits = 1), (this.promiseResolverQueue = [])
          },
          [
            {
              key: 'acquire',
              value: (function() {
                var t = i(
                  n().mark(function t() {
                    var e = this
                    return n().wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!(this.permits > 0)) {
                                t.next = 3
                                break
                              }
                              return (
                                (this.permits -= 1),
                                t.abrupt('return', Promise.resolve(!0))
                              )
                            case 3:
                              return t.abrupt(
                                'return',
                                new Promise(function(t) {
                                  return e.promiseResolverQueue.push(t)
                                })
                              )
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this
                    )
                  })
                )
                return function() {
                  return t.apply(this, arguments)
                }
              })()
            },
            {
              key: 'release',
              value: function() {
                if (
                  ((this.permits += 1),
                  this.permits > 1 && this.promiseResolverQueue.length > 0)
                )
                  console.warn(
                    'Lock.permits should never be > 0 when there is someone waiting.'
                  )
                else if (
                  1 === this.permits &&
                  this.promiseResolverQueue.length > 0
                ) {
                  this.permits -= 1
                  var t = this.promiseResolverQueue.shift()
                  t && t(!0)
                }
              }
            }
          ]
        )
      })()
      e.Lock = a
    },
    84083: function(t, e, r) {
      'use strict'
      var n = r(4633).default,
        i = r(29293).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getProvider = e.fetchFromProvider = void 0)
      var o = r(63334),
        s = (function() {
          var t = i(
            n().mark(function t(e, r) {
              var i
              return n().wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        (0, o.default)(e, {
                          headers: { 'content-type': 'application/json' },
                          type: 'json',
                          data: {
                            method: r.method,
                            params: r.params,
                            jsonrpc: '2.0',
                            id: 1
                          }
                        })
                      )
                    case 2:
                      return (i = t.sent), t.abrupt('return', i.result)
                    case 4:
                    case 'end':
                      return t.stop()
                  }
              }, t)
            })
          )
          return function(e, r) {
            return t.apply(this, arguments)
          }
        })()
      e.fetchFromProvider = s
      e.getProvider = function(t) {
        var e
        if ('string' === typeof t) return t
        if (
          void 0 !==
          (null === t ||
          void 0 === t ||
          null === (e = t.connection) ||
          void 0 === e
            ? void 0
            : e.url)
        )
          return t.connection.url
        throw new Error('Must provide valid provider URL or Web3Provider')
      }
    },
    37886: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.hashPersonalMessage = e.isValidSignature = e.fromRpcSig = e.toCompactSig = e.toRpcSig = e.ecrecover = e.ecsign = void 0)
      var i = r(87913),
        o = r(94167),
        s = r(35971),
        a = r(10565),
        u = r(25613)
      function f(t, e) {
        return t === BigInt(0) || t === BigInt(1)
          ? t
          : void 0 === e
          ? t - BigInt(27)
          : t - (e * BigInt(2) + BigInt(35))
      }
      function h(t) {
        return t === BigInt(0) || t === BigInt(1)
      }
      e.ecsign = function(t, e, r) {
        var i = o.secp256k1.sign(t, e),
          s = i.toCompactRawBytes()
        return {
          r: n.from(s.slice(0, 32)),
          s: n.from(s.slice(32, 64)),
          v:
            void 0 === r
              ? BigInt(i.recovery + 27)
              : BigInt(i.recovery + 35) + BigInt(r) * BigInt(2)
        }
      }
      e.ecrecover = function(t, e, r, i, a) {
        var u = n.concat(
            [(0, s.setLengthLeft)(r, 32), (0, s.setLengthLeft)(i, 32)],
            64
          ),
          l = f(e, a)
        if (!h(l)) throw new Error('Invalid signature v value')
        var c = o.secp256k1.Signature.fromCompact(u)
          .addRecoveryBit(Number(l))
          .recoverPublicKey(t)
        return n.from(c.toRawBytes(!1).slice(1))
      }
      e.toRpcSig = function(t, e, r, i) {
        if (!h(f(t, i))) throw new Error('Invalid signature v value')
        return (0, s.bufferToHex)(
          n.concat([
            (0, s.setLengthLeft)(e, 32),
            (0, s.setLengthLeft)(r, 32),
            (0, s.toBuffer)(t)
          ])
        )
      }
      e.toCompactSig = function(t, e, r, i) {
        if (!h(f(t, i))) throw new Error('Invalid signature v value')
        var o = r
        return (
          ((t > BigInt(28) && t % BigInt(2) === BigInt(1)) ||
            t === BigInt(1) ||
            t === BigInt(28)) &&
            ((o = n.from(r))[0] |= 128),
          (0, s.bufferToHex)(
            n.concat([(0, s.setLengthLeft)(e, 32), (0, s.setLengthLeft)(o, 32)])
          )
        )
      }
      e.fromRpcSig = function(t) {
        var e,
          r,
          n,
          i = (0, s.toBuffer)(t)
        if (i.length >= 65)
          (e = i.slice(0, 32)),
            (r = i.slice(32, 64)),
            (n = (0, s.bufferToBigInt)(i.slice(64)))
        else {
          if (64 !== i.length) throw new Error('Invalid signature length')
          ;(e = i.slice(0, 32)),
            (r = i.slice(32, 64)),
            (n = BigInt((0, s.bufferToInt)(i.slice(32, 33)) >> 7)),
            (r[0] &= 127)
        }
        return n < 27 && (n += BigInt(27)), { v: n, r: e, s: r }
      }
      e.isValidSignature = function(t, e, r) {
        var n =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = arguments.length > 4 ? arguments[4] : void 0
        if (32 !== e.length || 32 !== r.length) return !1
        if (!h(f(t, i))) return !1
        var o = (0, s.bufferToBigInt)(e),
          u = (0, s.bufferToBigInt)(r)
        return (
          !(
            o === BigInt(0) ||
            o >= a.SECP256K1_ORDER ||
            u === BigInt(0) ||
            u >= a.SECP256K1_ORDER
          ) && !(n && u >= a.SECP256K1_ORDER_DIV_2)
        )
      }
      e.hashPersonalMessage = function(t) {
        ;(0, u.assertIsBuffer)(t)
        var e = n.from(
          '\x19Ethereum Signed Message:\n'.concat(t.length),
          'utf-8'
        )
        return n.from((0, i.keccak256)(n.concat([e, t])))
      }
    },
    30517: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.toType = e.TypeOutput = void 0)
      var n,
        i = r(35971),
        o = r(69223)
      !(function(t) {
        ;(t[(t.Number = 0)] = 'Number'),
          (t[(t.BigInt = 1)] = 'BigInt'),
          (t[(t.Buffer = 2)] = 'Buffer'),
          (t[(t.PrefixedHexString = 3)] = 'PrefixedHexString')
      })((n = e.TypeOutput || (e.TypeOutput = {}))),
        (e.toType = function(t, e) {
          if (null === t) return null
          if (void 0 !== t) {
            if ('string' === typeof t && !(0, o.isHexString)(t))
              throw new Error(
                'A string must be provided with a 0x-prefix, given: '.concat(t)
              )
            if ('number' === typeof t && !Number.isSafeInteger(t))
              throw new Error(
                'The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)'
              )
            var r = (0, i.toBuffer)(t)
            switch (e) {
              case n.Buffer:
                return r
              case n.BigInt:
                return (0, i.bufferToBigInt)(r)
              case n.Number:
                var s = (0, i.bufferToBigInt)(r)
                if (s > BigInt(Number.MAX_SAFE_INTEGER))
                  throw new Error(
                    'The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)'
                  )
                return Number(s)
              case n.PrefixedHexString:
                return (0, i.bufferToHex)(r)
              default:
                throw new Error('unknown outputType')
            }
          }
        })
    },
    47075: function(t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.GWEI_TO_WEI = void 0),
        (e.GWEI_TO_WEI = BigInt(1e9))
    },
    10533: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(85715).default,
        o = r(17383).default,
        s = r(34579).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Withdrawal = void 0)
      var a = r(80440),
        u = r(35971),
        f = r(30517),
        h = (function() {
          function t(e, r, n, i) {
            o(this, t),
              (this.index = e),
              (this.validatorIndex = r),
              (this.address = n),
              (this.amount = i)
          }
          return s(
            t,
            [
              {
                key: 'raw',
                value: function() {
                  return t.toBufferArray(this)
                }
              },
              {
                key: 'toValue',
                value: function() {
                  return {
                    index: this.index,
                    validatorIndex: this.validatorIndex,
                    address: this.address.buf,
                    amount: this.amount
                  }
                }
              },
              {
                key: 'toJSON',
                value: function() {
                  return {
                    index: (0, u.bigIntToHex)(this.index),
                    validatorIndex: (0, u.bigIntToHex)(this.validatorIndex),
                    address: '0x' + this.address.buf.toString('hex'),
                    amount: (0, u.bigIntToHex)(this.amount)
                  }
                }
              }
            ],
            [
              {
                key: 'fromWithdrawalData',
                value: function(e) {
                  var r = e.index,
                    n = e.validatorIndex,
                    i = e.address,
                    o = e.amount
                  return new t(
                    (0, f.toType)(r, f.TypeOutput.BigInt),
                    (0, f.toType)(n, f.TypeOutput.BigInt),
                    new a.Address((0, f.toType)(i, f.TypeOutput.Buffer)),
                    (0, f.toType)(o, f.TypeOutput.BigInt)
                  )
                }
              },
              {
                key: 'fromValuesArray',
                value: function(e) {
                  if (4 !== e.length)
                    throw Error(
                      'Invalid withdrawalArray length expected=4 actual='.concat(
                        e.length
                      )
                    )
                  var r = i(e, 4),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3]
                  return t.fromWithdrawalData({
                    index: n,
                    validatorIndex: o,
                    address: s,
                    amount: a
                  })
                }
              },
              {
                key: 'toBufferArray',
                value: function(t) {
                  var e = t.index,
                    r = t.validatorIndex,
                    i = t.address,
                    o = t.amount
                  return [
                    (0, f.toType)(e, f.TypeOutput.BigInt) === BigInt(0)
                      ? n.alloc(0)
                      : (0, f.toType)(e, f.TypeOutput.Buffer),
                    (0, f.toType)(r, f.TypeOutput.BigInt) === BigInt(0)
                      ? n.alloc(0)
                      : (0, f.toType)(r, f.TypeOutput.Buffer),
                    i instanceof a.Address
                      ? i.buf
                      : (0, f.toType)(i, f.TypeOutput.Buffer),
                    (0, f.toType)(o, f.TypeOutput.BigInt) === BigInt(0)
                      ? n.alloc(0)
                      : (0, f.toType)(o, f.TypeOutput.Buffer)
                  ]
                }
              }
            ]
          )
        })()
      e.Withdrawal = h
    },
    87913: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.keccak512 = e.keccak384 = e.keccak256 = e.keccak224 = void 0)
      var n = r(67138),
        i = r(52038)
      ;(e.keccak224 = (0, i.wrapHash)(n.keccak_224)),
        (e.keccak256 = (function() {
          var t = (0, i.wrapHash)(n.keccak_256)
          return (t.create = n.keccak_256.create), t
        })()),
        (e.keccak384 = (0, i.wrapHash)(n.keccak_384)),
        (e.keccak512 = (0, i.wrapHash)(n.keccak_512))
    },
    94167: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.secp256k1 = void 0)
      var n = r(31509)
      Object.defineProperty(e, 'secp256k1', {
        enumerable: !0,
        get: function() {
          return n.secp256k1
        }
      })
    },
    52038: function(t, e, r) {
      'use strict'
      t = r.nmd(t)
      var n =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t }
        }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.crypto = e.wrapHash = e.equalsBytes = e.hexToBytes = e.bytesToUtf8 = e.utf8ToBytes = e.createView = e.concatBytes = e.toHex = e.bytesToHex = e.assertBytes = e.assertBool = void 0)
      var i = n(r(87250)),
        o = r(30684),
        s = i.default.bool
      e.assertBool = s
      var a = i.default.bytes
      e.assertBytes = a
      var u = r(30684)
      Object.defineProperty(e, 'bytesToHex', {
        enumerable: !0,
        get: function() {
          return u.bytesToHex
        }
      }),
        Object.defineProperty(e, 'toHex', {
          enumerable: !0,
          get: function() {
            return u.bytesToHex
          }
        }),
        Object.defineProperty(e, 'concatBytes', {
          enumerable: !0,
          get: function() {
            return u.concatBytes
          }
        }),
        Object.defineProperty(e, 'createView', {
          enumerable: !0,
          get: function() {
            return u.createView
          }
        }),
        Object.defineProperty(e, 'utf8ToBytes', {
          enumerable: !0,
          get: function() {
            return u.utf8ToBytes
          }
        }),
        (e.bytesToUtf8 = function(t) {
          if (!(t instanceof Uint8Array))
            throw new TypeError(
              'bytesToUtf8 expected Uint8Array, got '.concat(typeof t)
            )
          return new TextDecoder().decode(t)
        }),
        (e.hexToBytes = function(t) {
          var e = t.startsWith('0x') ? t.substring(2) : t
          return (0, o.hexToBytes)(e)
        }),
        (e.equalsBytes = function(t, e) {
          if (t.length !== e.length) return !1
          for (var r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1
          return !0
        }),
        (e.wrapHash = function(t) {
          return function(e) {
            return i.default.bytes(e), t(e)
          }
        }),
        (e.crypto = (function() {
          var e =
              'object' === typeof globalThis && 'crypto' in globalThis
                ? globalThis.crypto
                : void 0,
            r = 'function' === typeof t.require && t.require.bind(t)
          return { node: r && !e ? r('crypto') : void 0, web: e }
        })())
    },
    889: function(t, e, r) {
      'use strict'
      var n = r(12897).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createCurve = e.getHash = void 0)
      var i = r(81858),
        o = r(30684),
        s = r(7520)
      function a(t) {
        return {
          hash: t,
          hmac: function(e) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
              s < r;
              s++
            )
              n[s - 1] = arguments[s]
            return (0, i.hmac)(t, e, o.concatBytes.apply(void 0, n))
          },
          randomBytes: o.randomBytes
        }
      }
      ;(e.getHash = a),
        (e.createCurve = function(t, e) {
          var r = function(e) {
            return (0, s.weierstrass)(n(n({}, t), a(e)))
          }
          return Object.freeze(n(n({}, r(e)), {}, { create: r }))
        })
    },
    94275: function(t, e, r) {
      'use strict'
      var n = r(12897).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.validateBasic = e.wNAF = void 0)
      var i = r(84874),
        o = r(52305),
        s = BigInt(0),
        a = BigInt(1)
      ;(e.wNAF = function(t, e) {
        var r = function(t, e) {
            var r = e.negate()
            return t ? r : e
          },
          n = function(t) {
            return {
              windows: Math.ceil(e / t) + 1,
              windowSize: Math.pow(2, t - 1)
            }
          }
        return {
          constTimeNegate: r,
          unsafeLadder: function(e, r) {
            for (var n = t.ZERO, i = e; r > s; )
              r & a && (n = n.add(i)), (i = i.double()), (r >>= a)
            return n
          },
          precomputeWindow: function(t, e) {
            for (
              var r = n(e),
                i = r.windows,
                o = r.windowSize,
                s = [],
                a = t,
                u = a,
                f = 0;
              f < i;
              f++
            ) {
              ;(u = a), s.push(u)
              for (var h = 1; h < o; h++) (u = u.add(a)), s.push(u)
              a = u.double()
            }
            return s
          },
          wNAF: function(e, i, o) {
            for (
              var s = n(e),
                u = s.windows,
                f = s.windowSize,
                h = t.ZERO,
                l = t.BASE,
                c = BigInt(Math.pow(2, e) - 1),
                d = Math.pow(2, e),
                p = BigInt(e),
                v = 0;
              v < u;
              v++
            ) {
              var m = v * f,
                g = Number(o & c)
              ;(o >>= p), g > f && ((g -= d), (o += a))
              var w = m,
                y = m + Math.abs(g) - 1,
                b = v % 2 !== 0,
                _ = g < 0
              0 === g ? (l = l.add(r(b, i[w]))) : (h = h.add(r(_, i[y])))
            }
            return { p: h, f: l }
          },
          wNAFCached: function(t, e, r, n) {
            var i = t._WINDOW_SIZE || 1,
              o = e.get(t)
            return (
              o ||
                ((o = this.precomputeWindow(t, i)), 1 !== i && e.set(t, n(o))),
              this.wNAF(i, o, r)
            )
          }
        }
      }),
        (e.validateBasic = function(t) {
          return (
            (0, i.validateField)(t.Fp),
            (0, o.validateObject)(
              t,
              { n: 'bigint', h: 'bigint', Gx: 'field', Gy: 'field' },
              { nBitLength: 'isSafeInteger', nByteLength: 'isSafeInteger' }
            ),
            Object.freeze(
              n(n(n({}, (0, i.nLength)(t.n, t.nBitLength)), t), {
                p: t.Fp.ORDER
              })
            )
          )
        })
    },
    68280: function(t, e, r) {
      'use strict'
      var n = r(12897).default,
        i = r(85715).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.createHasher = e.isogenyMap = e.hash_to_field = e.expand_message_xof = e.expand_message_xmd = void 0)
      var o = r(84874),
        s = r(52305)
      var a = s.bytesToNumberBE
      function u(t, e) {
        if (t < 0 || t >= 1 << (8 * e))
          throw new Error(
            'bad I2OSP call: value='.concat(t, ' length=').concat(e)
          )
        for (var r = Array.from({ length: e }).fill(0), n = e - 1; n >= 0; n--)
          (r[n] = 255 & t), (t >>>= 8)
        return new Uint8Array(r)
      }
      function f(t, e) {
        for (var r = new Uint8Array(t.length), n = 0; n < t.length; n++)
          r[n] = t[n] ^ e[n]
        return r
      }
      function h(t) {
        if (!(0, s.isBytes)(t)) throw new Error('Uint8Array expected')
      }
      function l(t) {
        if (!Number.isSafeInteger(t)) throw new Error('number expected')
      }
      function c(t, e, r, n) {
        h(t),
          h(e),
          l(r),
          e.length > 255 &&
            (e = n(
              (0, s.concatBytes)((0, s.utf8ToBytes)('H2C-OVERSIZE-DST-'), e)
            ))
        var i = n.outputLen,
          o = n.blockLen,
          a = Math.ceil(r / i)
        if (a > 255) throw new Error('Invalid xmd length')
        var c = (0, s.concatBytes)(e, u(e.length, 1)),
          d = u(0, o),
          p = u(r, 2),
          v = new Array(a),
          m = n((0, s.concatBytes)(d, t, p, u(0, 1), c))
        v[0] = n((0, s.concatBytes)(m, u(1, 1), c))
        for (var g = 1; g <= a; g++) {
          var w = [f(m, v[g - 1]), u(g + 1, 1), c]
          v[g] = n(s.concatBytes.apply(void 0, w))
        }
        return s.concatBytes.apply(void 0, v).slice(0, r)
      }
      function d(t, e, r, n, i) {
        if ((h(t), h(e), l(r), e.length > 255)) {
          var o = Math.ceil((2 * n) / 8)
          e = i
            .create({ dkLen: o })
            .update((0, s.utf8ToBytes)('H2C-OVERSIZE-DST-'))
            .update(e)
            .digest()
        }
        if (r > 65535 || e.length > 255)
          throw new Error('expand_message_xof: invalid lenInBytes')
        return i
          .create({ dkLen: r })
          .update(t)
          .update(u(r, 2))
          .update(e)
          .update(u(e.length, 1))
          .digest()
      }
      function p(t, e, r) {
        ;(0, s.validateObject)(r, {
          DST: 'stringOrUint8Array',
          p: 'bigint',
          m: 'isSafeInteger',
          k: 'isSafeInteger',
          hash: 'hash'
        })
        var n = r.p,
          i = r.k,
          u = r.m,
          f = r.hash,
          p = r.expand,
          v = r.DST
        h(t), l(e)
        var m,
          g = (function(t) {
            if ((0, s.isBytes)(t)) return t
            if ('string' === typeof t) return (0, s.utf8ToBytes)(t)
            throw new Error('DST must be Uint8Array or string')
          })(v),
          w = n.toString(2).length,
          y = Math.ceil((w + i) / 8),
          b = e * u * y
        if ('xmd' === p) m = c(t, g, b, f)
        else if ('xof' === p) m = d(t, g, b, i, f)
        else {
          if ('_internal_pass' !== p)
            throw new Error('expand must be "xmd" or "xof"')
          m = t
        }
        for (var _ = new Array(e), x = 0; x < e; x++) {
          for (var E = new Array(u), k = 0; k < u; k++) {
            var B = y * (k + x * u),
              A = m.subarray(B, B + y)
            E[k] = (0, o.mod)(a(A), n)
          }
          _[x] = E
        }
        return _
      }
      ;(e.expand_message_xmd = c),
        (e.expand_message_xof = d),
        (e.hash_to_field = p),
        (e.isogenyMap = function(t, e) {
          var r = e.map(function(t) {
            return Array.from(t).reverse()
          })
          return function(e, n) {
            var o = r.map(function(r) {
                return r.reduce(function(r, n) {
                  return t.add(t.mul(r, e), n)
                })
              }),
              s = i(o, 4),
              a = s[0],
              u = s[1],
              f = s[2],
              h = s[3]
            return (
              (e = t.div(a, u)), (n = t.mul(n, t.div(f, h))), { x: e, y: n }
            )
          }
        }),
        (e.createHasher = function(t, e, r) {
          if ('function' !== typeof e)
            throw new Error('mapToCurve() must be defined')
          return {
            hashToCurve: function(i, o) {
              var s = p(i, 2, n(n({}, r), {}, { DST: r.DST }, o)),
                a = t.fromAffine(e(s[0])),
                u = t.fromAffine(e(s[1])),
                f = a.add(u).clearCofactor()
              return f.assertValidity(), f
            },
            encodeToCurve: function(i, o) {
              var s = p(i, 1, n(n({}, r), {}, { DST: r.encodeDST }, o)),
                a = t.fromAffine(e(s[0])).clearCofactor()
              return a.assertValidity(), a
            }
          }
        })
    },
    84874: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.mapHashToField = e.getMinHashLength = e.getFieldBytesLength = e.hashToPrivateScalar = e.FpSqrtEven = e.FpSqrtOdd = e.Field = e.nLength = e.FpIsSquare = e.FpDiv = e.FpInvertBatch = e.FpPow = e.validateField = e.isNegativeLE = e.FpSqrt = e.tonelliShanks = e.invert = e.pow2 = e.pow = e.mod = void 0)
      var n = r(52305),
        i = BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        u = BigInt(4),
        f = BigInt(5),
        h = BigInt(8)
      BigInt(9), BigInt(16)
      function l(t, e) {
        var r = t % e
        return r >= i ? r : e + r
      }
      function c(t, e, r) {
        if (r <= i || e < i) throw new Error('Expected power/modulo > 0')
        if (r === o) return i
        for (var n = o; e > i; )
          e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o)
        return n
      }
      function d(t, e) {
        if (t === i || e <= i)
          throw new Error(
            'invert: expected positive integers, got n='
              .concat(t, ' mod=')
              .concat(e)
          )
        for (var r = l(t, e), n = e, s = i, a = o, u = o, f = i; r !== i; ) {
          var h = n / r,
            c = n % r,
            d = s - u * h,
            p = a - f * h
          ;(n = r), (r = c), (s = u), (a = f), (u = d), (f = p)
        }
        if (n !== o) throw new Error('invert: does not exist')
        return l(s, e)
      }
      function p(t) {
        var e,
          r,
          n,
          a = (t - o) / s
        for (e = t - o, r = 0; e % s === i; e /= s, r++);
        for (n = s; n < t && c(n, a, t) !== t - o; n++);
        if (1 === r) {
          var f = (t + o) / u
          return function(t, e) {
            var r = t.pow(e, f)
            if (!t.eql(t.sqr(r), e)) throw new Error('Cannot find square root')
            return r
          }
        }
        var h = (e + o) / s
        return function(t, i) {
          if (t.pow(i, a) === t.neg(t.ONE))
            throw new Error('Cannot find square root')
          for (
            var s = r,
              u = t.pow(t.mul(t.ONE, n), e),
              f = t.pow(i, h),
              l = t.pow(i, e);
            !t.eql(l, t.ONE);

          ) {
            if (t.eql(l, t.ZERO)) return t.ZERO
            for (var c = 1, d = t.sqr(l); c < s && !t.eql(d, t.ONE); c++)
              d = t.sqr(d)
            var p = t.pow(u, o << BigInt(s - c - 1))
            ;(u = t.sqr(p)), (f = t.mul(f, p)), (l = t.mul(l, u)), (s = c)
          }
          return f
        }
      }
      function v(t) {
        if (t % u === a) {
          var e = (t + o) / u
          return function(t, r) {
            var n = t.pow(r, e)
            if (!t.eql(t.sqr(n), r)) throw new Error('Cannot find square root')
            return n
          }
        }
        if (t % h === f) {
          var r = (t - f) / h
          return function(t, e) {
            var n = t.mul(e, s),
              i = t.pow(n, r),
              o = t.mul(e, i),
              a = t.mul(t.mul(o, s), i),
              u = t.mul(o, t.sub(a, t.ONE))
            if (!t.eql(t.sqr(u), e)) throw new Error('Cannot find square root')
            return u
          }
        }
        return p(t)
      }
      ;(e.mod = l),
        (e.pow = c),
        (e.pow2 = function(t, e, r) {
          for (var n = t; e-- > i; ) (n *= n), (n %= r)
          return n
        }),
        (e.invert = d),
        (e.tonelliShanks = p),
        (e.FpSqrt = v)
      e.isNegativeLE = function(t, e) {
        return (l(t, e) & o) === o
      }
      var m = [
        'create',
        'isValid',
        'is0',
        'neg',
        'inv',
        'sqrt',
        'sqr',
        'eql',
        'add',
        'sub',
        'mul',
        'pow',
        'div',
        'addN',
        'subN',
        'mulN',
        'sqrN'
      ]
      function g(t, e, r) {
        if (r < i) throw new Error('Expected power > 0')
        if (r === i) return t.ONE
        if (r === o) return e
        for (var n = t.ONE, s = e; r > i; )
          r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o)
        return n
      }
      function w(t, e) {
        var r = new Array(e.length),
          n = e.reduce(function(e, n, i) {
            return t.is0(n) ? e : ((r[i] = e), t.mul(e, n))
          }, t.ONE),
          i = t.inv(n)
        return (
          e.reduceRight(function(e, n, i) {
            return t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n))
          }, i),
          r
        )
      }
      function y(t, e) {
        var r = void 0 !== e ? e : t.toString(2).length
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) }
      }
      function b(t) {
        if ('bigint' !== typeof t) throw new Error('field order must be bigint')
        var e = t.toString(2).length
        return Math.ceil(e / 8)
      }
      function _(t) {
        var e = b(t)
        return e + Math.ceil(e / 2)
      }
      ;(e.validateField = function(t) {
        var e = m.reduce(
          function(t, e) {
            return (t[e] = 'function'), t
          },
          {
            ORDER: 'bigint',
            MASK: 'bigint',
            BYTES: 'isSafeInteger',
            BITS: 'isSafeInteger'
          }
        )
        return (0, n.validateObject)(t, e)
      }),
        (e.FpPow = g),
        (e.FpInvertBatch = w),
        (e.FpDiv = function(t, e, r) {
          return t.mul(e, 'bigint' === typeof r ? d(r, t.ORDER) : t.inv(r))
        }),
        (e.FpIsSquare = function(t) {
          var e = (t.ORDER - o) / s
          return function(r) {
            var n = t.pow(r, e)
            return t.eql(n, t.ZERO) || t.eql(n, t.ONE)
          }
        }),
        (e.nLength = y),
        (e.Field = function(t, e) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          if (t <= i)
            throw new Error('Expected Field ORDER > 0, got '.concat(t))
          var a = y(t, e),
            u = a.nBitLength,
            f = a.nByteLength
          if (f > 2048)
            throw new Error('Field lengths over 2048 bytes are not supported')
          var h = v(t),
            c = Object.freeze({
              ORDER: t,
              BITS: u,
              BYTES: f,
              MASK: (0, n.bitMask)(u),
              ZERO: i,
              ONE: o,
              create: function(e) {
                return l(e, t)
              },
              isValid: function(e) {
                if ('bigint' !== typeof e)
                  throw new Error(
                    'Invalid field element: expected bigint, got '.concat(
                      typeof e
                    )
                  )
                return i <= e && e < t
              },
              is0: function(t) {
                return t === i
              },
              isOdd: function(t) {
                return (t & o) === o
              },
              neg: function(e) {
                return l(-e, t)
              },
              eql: function(t, e) {
                return t === e
              },
              sqr: function(e) {
                return l(e * e, t)
              },
              add: function(e, r) {
                return l(e + r, t)
              },
              sub: function(e, r) {
                return l(e - r, t)
              },
              mul: function(e, r) {
                return l(e * r, t)
              },
              pow: function(t, e) {
                return g(c, t, e)
              },
              div: function(e, r) {
                return l(e * d(r, t), t)
              },
              sqrN: function(t) {
                return t * t
              },
              addN: function(t, e) {
                return t + e
              },
              subN: function(t, e) {
                return t - e
              },
              mulN: function(t, e) {
                return t * e
              },
              inv: function(e) {
                return d(e, t)
              },
              sqrt:
                s.sqrt ||
                function(t) {
                  return h(c, t)
                },
              invertBatch: function(t) {
                return w(c, t)
              },
              cmov: function(t, e, r) {
                return r ? e : t
              },
              toBytes: function(t) {
                return r
                  ? (0, n.numberToBytesLE)(t, f)
                  : (0, n.numberToBytesBE)(t, f)
              },
              fromBytes: function(t) {
                if (t.length !== f)
                  throw new Error(
                    'Fp.fromBytes: expected '
                      .concat(f, ', got ')
                      .concat(t.length)
                  )
                return r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t)
              }
            })
          return Object.freeze(c)
        }),
        (e.FpSqrtOdd = function(t, e) {
          if (!t.isOdd) throw new Error("Field doesn't have isOdd")
          var r = t.sqrt(e)
          return t.isOdd(r) ? r : t.neg(r)
        }),
        (e.FpSqrtEven = function(t, e) {
          if (!t.isOdd) throw new Error("Field doesn't have isOdd")
          var r = t.sqrt(e)
          return t.isOdd(r) ? t.neg(r) : r
        }),
        (e.hashToPrivateScalar = function(t, e) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = (t = (0, n.ensureBytes)('privateHash', t)).length,
            s = y(e).nByteLength + 8
          if (s < 24 || i < s || i > 1024)
            throw new Error(
              'hashToPrivateScalar: expected '
                .concat(s, '-1024 bytes of input, got ')
                .concat(i)
            )
          return (
            l(
              r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t),
              e - o
            ) + o
          )
        }),
        (e.getFieldBytesLength = b),
        (e.getMinHashLength = _),
        (e.mapHashToField = function(t, e) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = t.length,
            s = b(e),
            a = _(e)
          if (i < 16 || i < a || i > 1024)
            throw new Error(
              'expected '.concat(a, '-1024 bytes of input, got ').concat(i)
            )
          var u =
            l(
              r ? (0, n.bytesToNumberBE)(t) : (0, n.bytesToNumberLE)(t),
              e - o
            ) + o
          return r ? (0, n.numberToBytesLE)(u, s) : (0, n.numberToBytesBE)(u, s)
        })
    },
    52305: function(t, e, r) {
      'use strict'
      var n = r(85715).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.validateObject = e.createHmacDrbg = e.bitMask = e.bitSet = e.bitGet = e.bitLen = e.utf8ToBytes = e.equalBytes = e.concatBytes = e.ensureBytes = e.numberToVarBytesBE = e.numberToBytesLE = e.numberToBytesBE = e.bytesToNumberLE = e.bytesToNumberBE = e.hexToBytes = e.hexToNumber = e.numberToHexUnpadded = e.bytesToHex = e.isBytes = void 0)
      var i = BigInt(0),
        o = BigInt(1),
        s = BigInt(2)
      function a(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            'object' === typeof t &&
            'Uint8Array' === t.constructor.name)
        )
      }
      e.isBytes = a
      var u = Array.from({ length: 256 }, function(t, e) {
        return e.toString(16).padStart(2, '0')
      })
      function f(t) {
        if (!a(t)) throw new Error('Uint8Array expected')
        for (var e = '', r = 0; r < t.length; r++) e += u[t[r]]
        return e
      }
      function h(t) {
        var e = t.toString(16)
        return 1 & e.length ? '0'.concat(e) : e
      }
      function l(t) {
        if ('string' !== typeof t)
          throw new Error('hex string expected, got ' + typeof t)
        return BigInt('' === t ? '0' : '0x'.concat(t))
      }
      ;(e.bytesToHex = f), (e.numberToHexUnpadded = h), (e.hexToNumber = l)
      var c = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 }
      function d(t) {
        return t >= c._0 && t <= c._9
          ? t - c._0
          : t >= c._A && t <= c._F
          ? t - (c._A - 10)
          : t >= c._a && t <= c._f
          ? t - (c._a - 10)
          : void 0
      }
      function p(t) {
        if ('string' !== typeof t)
          throw new Error('hex string expected, got ' + typeof t)
        var e = t.length,
          r = e / 2
        if (e % 2)
          throw new Error(
            'padded hex string expected, got unpadded hex of length ' + e
          )
        for (var n = new Uint8Array(r), i = 0, o = 0; i < r; i++, o += 2) {
          var s = d(t.charCodeAt(o)),
            a = d(t.charCodeAt(o + 1))
          if (void 0 === s || void 0 === a) {
            var u = t[o] + t[o + 1]
            throw new Error(
              'hex string expected, got non-hex character "' +
                u +
                '" at index ' +
                o
            )
          }
          n[i] = 16 * s + a
        }
        return n
      }
      function v(t, e) {
        return p(t.toString(16).padStart(2 * e, '0'))
      }
      function m() {
        for (var t = 0, e = 0; e < arguments.length; e++) {
          var r = e < 0 || arguments.length <= e ? void 0 : arguments[e]
          if (!a(r)) throw new Error('Uint8Array expected')
          t += r.length
        }
        for (
          var n = new Uint8Array(t), i = 0, o = 0;
          o < arguments.length;
          o++
        ) {
          var s = o < 0 || arguments.length <= o ? void 0 : arguments[o]
          n.set(s, i), (i += s.length)
        }
        return n
      }
      ;(e.hexToBytes = p),
        (e.bytesToNumberBE = function(t) {
          return l(f(t))
        }),
        (e.bytesToNumberLE = function(t) {
          if (!a(t)) throw new Error('Uint8Array expected')
          return l(f(Uint8Array.from(t).reverse()))
        }),
        (e.numberToBytesBE = v),
        (e.numberToBytesLE = function(t, e) {
          return v(t, e).reverse()
        }),
        (e.numberToVarBytesBE = function(t) {
          return p(h(t))
        }),
        (e.ensureBytes = function(t, e, r) {
          var n
          if ('string' === typeof e)
            try {
              n = p(e)
            } catch (o) {
              throw new Error(
                ''
                  .concat(t, ' must be valid hex string, got "')
                  .concat(e, '". Cause: ')
                  .concat(o)
              )
            }
          else {
            if (!a(e))
              throw new Error(''.concat(t, ' must be hex string or Uint8Array'))
            n = Uint8Array.from(e)
          }
          var i = n.length
          if ('number' === typeof r && i !== r)
            throw new Error(
              ''
                .concat(t, ' expected ')
                .concat(r, ' bytes, got ')
                .concat(i)
            )
          return n
        }),
        (e.concatBytes = m),
        (e.equalBytes = function(t, e) {
          if (t.length !== e.length) return !1
          for (var r = 0, n = 0; n < t.length; n++) r |= t[n] ^ e[n]
          return 0 === r
        }),
        (e.utf8ToBytes = function(t) {
          if ('string' !== typeof t)
            throw new Error(
              'utf8ToBytes expected string, got '.concat(typeof t)
            )
          return new Uint8Array(new TextEncoder().encode(t))
        }),
        (e.bitLen = function(t) {
          var e
          for (e = 0; t > i; t >>= o, e += 1);
          return e
        }),
        (e.bitGet = function(t, e) {
          return (t >> BigInt(e)) & o
        })
      e.bitSet = function(t, e, r) {
        return t | ((r ? o : i) << BigInt(e))
      }
      e.bitMask = function(t) {
        return (s << BigInt(t - 1)) - o
      }
      var g = function(t) {
          return new Uint8Array(t)
        },
        w = function(t) {
          return Uint8Array.from(t)
        }
      e.createHmacDrbg = function(t, e, r) {
        if ('number' !== typeof t || t < 2)
          throw new Error('hashLen must be a number')
        if ('number' !== typeof e || e < 2)
          throw new Error('qByteLen must be a number')
        if ('function' !== typeof r)
          throw new Error('hmacFn must be a function')
        var n = g(t),
          i = g(t),
          o = 0,
          s = function() {
            n.fill(1), i.fill(0), (o = 0)
          },
          a = function() {
            for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
              e[o] = arguments[o]
            return r.apply(void 0, [i, n].concat(e))
          },
          u = function() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g()
            ;(i = a(w([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(w([1]), t)), (n = a()))
          },
          f = function() {
            if (o++ >= 1e3) throw new Error('drbg: tried 1000 values')
            for (var t = 0, r = []; t < e; ) {
              var i = (n = a()).slice()
              r.push(i), (t += n.length)
            }
            return m.apply(void 0, r)
          }
        return function(t, e) {
          s(), u(t)
          for (var r = void 0; !(r = e(f())); ) u()
          return s(), r
        }
      }
      var y = {
        bigint: function(t) {
          return 'bigint' === typeof t
        },
        function: function(t) {
          return 'function' === typeof t
        },
        boolean: function(t) {
          return 'boolean' === typeof t
        },
        string: function(t) {
          return 'string' === typeof t
        },
        stringOrUint8Array: function(t) {
          return 'string' === typeof t || a(t)
        },
        isSafeInteger: function(t) {
          return Number.isSafeInteger(t)
        },
        array: function(t) {
          return Array.isArray(t)
        },
        field: function(t, e) {
          return e.Fp.isValid(t)
        },
        hash: function(t) {
          return 'function' === typeof t && Number.isSafeInteger(t.outputLen)
        }
      }
      e.validateObject = function(t, e) {
        for (
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = function(e, r, n) {
              var i = y[r]
              if ('function' !== typeof i)
                throw new Error(
                  'Invalid validator "'.concat(r, '", expected function')
                )
              var o = t[e]
              if ((!n || void 0 !== o) && !i(o, t))
                throw new Error(
                  'Invalid param '
                    .concat(String(e), '=')
                    .concat(o, ' (')
                    .concat(typeof o, '), expected ')
                    .concat(r)
                )
            },
            o = 0,
            s = Object.entries(e);
          o < s.length;
          o++
        ) {
          var a = n(s[o], 2)
          i(a[0], a[1], !1)
        }
        for (var u = 0, f = Object.entries(r); u < f.length; u++) {
          var h = n(f[u], 2)
          i(h[0], h[1], !0)
        }
        return t
      }
    },
    7520: function(t, e, r) {
      'use strict'
      var n = r(34579).default,
        i = r(17383).default,
        o = r(18336).default,
        s = r(29511).default,
        a = r(61837).default,
        u = r(12897).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.mapToCurveSimpleSWU = e.SWUFpSqrtRatio = e.weierstrass = e.weierstrassPoints = e.DER = void 0)
      var f = r(84874),
        h = r(52305),
        l = r(52305),
        c = r(94275)
      var d = h.bytesToNumberBE,
        p = h.hexToBytes
      e.DER = {
        Err: (function(t) {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ''
            return i(this, e), o(this, e, [t])
          }
          return s(e, t), n(e)
        })(a(Error)),
        _parseInt: function(t) {
          var r = e.DER.Err
          if (t.length < 2 || 2 !== t[0])
            throw new r('Invalid signature integer tag')
          var n = t[1],
            i = t.subarray(2, n + 2)
          if (!n || i.length !== n)
            throw new r('Invalid signature integer: wrong length')
          if (128 & i[0]) throw new r('Invalid signature integer: negative')
          if (0 === i[0] && !(128 & i[1]))
            throw new r('Invalid signature integer: unnecessary leading zero')
          return { d: d(i), l: t.subarray(n + 2) }
        },
        toSig: function(t) {
          var r = e.DER.Err,
            n = 'string' === typeof t ? p(t) : t
          if (!h.isBytes(n)) throw new Error('ui8a expected')
          var i = n.length
          if (i < 2 || 48 != n[0]) throw new r('Invalid signature tag')
          if (n[1] !== i - 2) throw new r('Invalid signature: incorrect length')
          var o = e.DER._parseInt(n.subarray(2)),
            s = o.d,
            a = o.l,
            u = e.DER._parseInt(a),
            f = u.d
          if (u.l.length)
            throw new r('Invalid signature: left bytes after parsing')
          return { r: s, s: f }
        },
        hexFromSig: function(t) {
          var e = function(t) {
              return 8 & Number.parseInt(t[0], 16) ? '00' + t : t
            },
            r = function(t) {
              var e = t.toString(16)
              return 1 & e.length ? '0'.concat(e) : e
            },
            n = e(r(t.s)),
            i = e(r(t.r)),
            o = n.length / 2,
            s = i.length / 2,
            a = r(o),
            u = r(s)
          return '30'
            .concat(r(s + o + 4), '02')
            .concat(u)
            .concat(i, '02')
            .concat(a)
            .concat(n)
        }
      }
      var v = BigInt(0),
        m = BigInt(1),
        g = BigInt(2),
        w = BigInt(3),
        y = BigInt(4)
      function b(t) {
        var e = (function(t) {
            var e = (0, c.validateBasic)(t)
            h.validateObject(
              e,
              { a: 'field', b: 'field' },
              {
                allowedPrivateKeyLengths: 'array',
                wrapPrivateKey: 'boolean',
                isTorsionFree: 'function',
                clearCofactor: 'function',
                allowInfinityPoint: 'boolean',
                fromBytes: 'function',
                toBytes: 'function'
              }
            )
            var r = e.endo,
              n = e.Fp,
              i = e.a
            if (r) {
              if (!n.eql(i, n.ZERO))
                throw new Error(
                  'Endomorphism can only be defined for Koblitz curves that have a=0'
                )
              if (
                'object' !== typeof r ||
                'bigint' !== typeof r.beta ||
                'function' !== typeof r.splitScalar
              )
                throw new Error(
                  'Expected endomorphism with beta: bigint and splitScalar: function'
                )
            }
            return Object.freeze(u({}, e))
          })(t),
          r = e.Fp,
          o =
            e.toBytes ||
            function(t, e, n) {
              var i = e.toAffine()
              return h.concatBytes(
                Uint8Array.from([4]),
                r.toBytes(i.x),
                r.toBytes(i.y)
              )
            },
          s =
            e.fromBytes ||
            function(t) {
              var e = t.subarray(1)
              return {
                x: r.fromBytes(e.subarray(0, r.BYTES)),
                y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
              }
            }
        function a(t) {
          var n = e.a,
            i = e.b,
            o = r.sqr(t),
            s = r.mul(o, t)
          return r.add(r.add(s, r.mul(t, n)), i)
        }
        if (!r.eql(r.sqr(e.Gy), a(e.Gx)))
          throw new Error('bad generator point: equation left != right')
        function d(t) {
          return 'bigint' === typeof t && v < t && t < e.n
        }
        function p(t) {
          if (!d(t))
            throw new Error('Expected valid bigint: 0 < bigint < curve.n')
        }
        function g(t) {
          var r,
            n = e.allowedPrivateKeyLengths,
            i = e.nByteLength,
            o = e.wrapPrivateKey,
            s = e.n
          if (n && 'bigint' !== typeof t) {
            if (
              (h.isBytes(t) && (t = h.bytesToHex(t)),
              'string' !== typeof t || !n.includes(t.length))
            )
              throw new Error('Invalid key')
            t = t.padStart(2 * i, '0')
          }
          try {
            r =
              'bigint' === typeof t
                ? t
                : h.bytesToNumberBE((0, l.ensureBytes)('private key', t, i))
          } catch (a) {
            throw new Error(
              'private key must be '
                .concat(i, ' bytes, hex or bigint, not ')
                .concat(typeof t)
            )
          }
          return o && (r = f.mod(r, s)), p(r), r
        }
        var y = new Map()
        function b(t) {
          if (!(t instanceof _)) throw new Error('ProjectivePoint expected')
        }
        var _ = (function() {
          function t(e, n, o) {
            if (
              (i(this, t),
              (this.px = e),
              (this.py = n),
              (this.pz = o),
              null == e || !r.isValid(e))
            )
              throw new Error('x required')
            if (null == n || !r.isValid(n)) throw new Error('y required')
            if (null == o || !r.isValid(o)) throw new Error('z required')
          }
          return n(
            t,
            [
              {
                key: 'x',
                get: function() {
                  return this.toAffine().x
                }
              },
              {
                key: 'y',
                get: function() {
                  return this.toAffine().y
                }
              },
              {
                key: '_setWindowSize',
                value: function(t) {
                  ;(this._WINDOW_SIZE = t), y.delete(this)
                }
              },
              {
                key: 'assertValidity',
                value: function() {
                  if (this.is0()) {
                    if (e.allowInfinityPoint && !r.is0(this.py)) return
                    throw new Error('bad point: ZERO')
                  }
                  var t = this.toAffine(),
                    n = t.x,
                    i = t.y
                  if (!r.isValid(n) || !r.isValid(i))
                    throw new Error('bad point: x or y not FE')
                  var o = r.sqr(i),
                    s = a(n)
                  if (!r.eql(o, s))
                    throw new Error('bad point: equation left != right')
                  if (!this.isTorsionFree())
                    throw new Error('bad point: not in prime-order subgroup')
                }
              },
              {
                key: 'hasEvenY',
                value: function() {
                  var t = this.toAffine().y
                  if (r.isOdd) return !r.isOdd(t)
                  throw new Error("Field doesn't support isOdd")
                }
              },
              {
                key: 'equals',
                value: function(t) {
                  b(t)
                  var e = this.px,
                    n = this.py,
                    i = this.pz,
                    o = t.px,
                    s = t.py,
                    a = t.pz,
                    u = r.eql(r.mul(e, a), r.mul(o, i)),
                    f = r.eql(r.mul(n, a), r.mul(s, i))
                  return u && f
                }
              },
              {
                key: 'negate',
                value: function() {
                  return new t(this.px, r.neg(this.py), this.pz)
                }
              },
              {
                key: 'double',
                value: function() {
                  var n = e.a,
                    i = e.b,
                    o = r.mul(i, w),
                    s = this.px,
                    a = this.py,
                    u = this.pz,
                    f = r.ZERO,
                    h = r.ZERO,
                    l = r.ZERO,
                    c = r.mul(s, s),
                    d = r.mul(a, a),
                    p = r.mul(u, u),
                    v = r.mul(s, a)
                  return (
                    (v = r.add(v, v)),
                    (l = r.mul(s, u)),
                    (l = r.add(l, l)),
                    (f = r.mul(n, l)),
                    (h = r.mul(o, p)),
                    (h = r.add(f, h)),
                    (f = r.sub(d, h)),
                    (h = r.add(d, h)),
                    (h = r.mul(f, h)),
                    (f = r.mul(v, f)),
                    (l = r.mul(o, l)),
                    (p = r.mul(n, p)),
                    (v = r.sub(c, p)),
                    (v = r.mul(n, v)),
                    (v = r.add(v, l)),
                    (l = r.add(c, c)),
                    (c = r.add(l, c)),
                    (c = r.add(c, p)),
                    (c = r.mul(c, v)),
                    (h = r.add(h, c)),
                    (p = r.mul(a, u)),
                    (p = r.add(p, p)),
                    (c = r.mul(p, v)),
                    (f = r.sub(f, c)),
                    (l = r.mul(p, d)),
                    (l = r.add(l, l)),
                    new t(f, h, (l = r.add(l, l)))
                  )
                }
              },
              {
                key: 'add',
                value: function(n) {
                  b(n)
                  var i = this.px,
                    o = this.py,
                    s = this.pz,
                    a = n.px,
                    u = n.py,
                    f = n.pz,
                    h = r.ZERO,
                    l = r.ZERO,
                    c = r.ZERO,
                    d = e.a,
                    p = r.mul(e.b, w),
                    v = r.mul(i, a),
                    m = r.mul(o, u),
                    g = r.mul(s, f),
                    y = r.add(i, o),
                    _ = r.add(a, u)
                  ;(y = r.mul(y, _)),
                    (_ = r.add(v, m)),
                    (y = r.sub(y, _)),
                    (_ = r.add(i, s))
                  var x = r.add(a, f)
                  return (
                    (_ = r.mul(_, x)),
                    (x = r.add(v, g)),
                    (_ = r.sub(_, x)),
                    (x = r.add(o, s)),
                    (h = r.add(u, f)),
                    (x = r.mul(x, h)),
                    (h = r.add(m, g)),
                    (x = r.sub(x, h)),
                    (c = r.mul(d, _)),
                    (h = r.mul(p, g)),
                    (c = r.add(h, c)),
                    (h = r.sub(m, c)),
                    (c = r.add(m, c)),
                    (l = r.mul(h, c)),
                    (m = r.add(v, v)),
                    (m = r.add(m, v)),
                    (g = r.mul(d, g)),
                    (_ = r.mul(p, _)),
                    (m = r.add(m, g)),
                    (g = r.sub(v, g)),
                    (g = r.mul(d, g)),
                    (_ = r.add(_, g)),
                    (v = r.mul(m, _)),
                    (l = r.add(l, v)),
                    (v = r.mul(x, _)),
                    (h = r.mul(y, h)),
                    (h = r.sub(h, v)),
                    (v = r.mul(y, m)),
                    (c = r.mul(x, c)),
                    new t(h, l, (c = r.add(c, v)))
                  )
                }
              },
              {
                key: 'subtract',
                value: function(t) {
                  return this.add(t.negate())
                }
              },
              {
                key: 'is0',
                value: function() {
                  return this.equals(t.ZERO)
                }
              },
              {
                key: 'wNAF',
                value: function(e) {
                  return E.wNAFCached(this, y, e, function(e) {
                    var n = r.invertBatch(
                      e.map(function(t) {
                        return t.pz
                      })
                    )
                    return e
                      .map(function(t, e) {
                        return t.toAffine(n[e])
                      })
                      .map(t.fromAffine)
                  })
                }
              },
              {
                key: 'multiplyUnsafe',
                value: function(n) {
                  var i = t.ZERO
                  if (n === v) return i
                  if ((p(n), n === m)) return this
                  var o = e.endo
                  if (!o) return E.unsafeLadder(this, n)
                  for (
                    var s = o.splitScalar(n),
                      a = s.k1neg,
                      u = s.k1,
                      f = s.k2neg,
                      h = s.k2,
                      l = i,
                      c = i,
                      d = this;
                    u > v || h > v;

                  )
                    u & m && (l = l.add(d)),
                      h & m && (c = c.add(d)),
                      (d = d.double()),
                      (u >>= m),
                      (h >>= m)
                  return (
                    a && (l = l.negate()),
                    f && (c = c.negate()),
                    (c = new t(r.mul(c.px, o.beta), c.py, c.pz)),
                    l.add(c)
                  )
                }
              },
              {
                key: 'multiply',
                value: function(n) {
                  p(n)
                  var i,
                    o,
                    s = n,
                    a = e.endo
                  if (a) {
                    var u = a.splitScalar(s),
                      f = u.k1neg,
                      h = u.k1,
                      l = u.k2neg,
                      c = u.k2,
                      d = this.wNAF(h),
                      v = d.p,
                      m = d.f,
                      g = this.wNAF(c),
                      w = g.p,
                      y = g.f
                    ;(v = E.constTimeNegate(f, v)),
                      (w = E.constTimeNegate(l, w)),
                      (w = new t(r.mul(w.px, a.beta), w.py, w.pz)),
                      (i = v.add(w)),
                      (o = m.add(y))
                  } else {
                    var b = this.wNAF(s)
                    ;(i = b.p), (o = b.f)
                  }
                  return t.normalizeZ([i, o])[0]
                }
              },
              {
                key: 'multiplyAndAddUnsafe',
                value: function(e, r, n) {
                  var i = t.BASE,
                    o = function(t, e) {
                      return e !== v && e !== m && t.equals(i)
                        ? t.multiply(e)
                        : t.multiplyUnsafe(e)
                    },
                    s = o(this, r).add(o(e, n))
                  return s.is0() ? void 0 : s
                }
              },
              {
                key: 'toAffine',
                value: function(t) {
                  var e = this.px,
                    n = this.py,
                    i = this.pz,
                    o = this.is0()
                  null == t && (t = o ? r.ONE : r.inv(i))
                  var s = r.mul(e, t),
                    a = r.mul(n, t),
                    u = r.mul(i, t)
                  if (o) return { x: r.ZERO, y: r.ZERO }
                  if (!r.eql(u, r.ONE)) throw new Error('invZ was invalid')
                  return { x: s, y: a }
                }
              },
              {
                key: 'isTorsionFree',
                value: function() {
                  var r = e.h,
                    n = e.isTorsionFree
                  if (r === m) return !0
                  if (n) return n(t, this)
                  throw new Error(
                    'isTorsionFree() has not been declared for the elliptic curve'
                  )
                }
              },
              {
                key: 'clearCofactor',
                value: function() {
                  var r = e.h,
                    n = e.clearCofactor
                  return r === m
                    ? this
                    : n
                    ? n(t, this)
                    : this.multiplyUnsafe(e.h)
                }
              },
              {
                key: 'toRawBytes',
                value: function() {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0]
                  return this.assertValidity(), o(t, this, e)
                }
              },
              {
                key: 'toHex',
                value: function() {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0]
                  return h.bytesToHex(this.toRawBytes(t))
                }
              }
            ],
            [
              {
                key: 'fromAffine',
                value: function(e) {
                  var n = e || {},
                    i = n.x,
                    o = n.y
                  if (!e || !r.isValid(i) || !r.isValid(o))
                    throw new Error('invalid affine point')
                  if (e instanceof t)
                    throw new Error('projective point not allowed')
                  var s = function(t) {
                    return r.eql(t, r.ZERO)
                  }
                  return s(i) && s(o) ? t.ZERO : new t(i, o, r.ONE)
                }
              },
              {
                key: 'normalizeZ',
                value: function(e) {
                  var n = r.invertBatch(
                    e.map(function(t) {
                      return t.pz
                    })
                  )
                  return e
                    .map(function(t, e) {
                      return t.toAffine(n[e])
                    })
                    .map(t.fromAffine)
                }
              },
              {
                key: 'fromHex',
                value: function(e) {
                  var r = t.fromAffine(s((0, l.ensureBytes)('pointHex', e)))
                  return r.assertValidity(), r
                }
              },
              {
                key: 'fromPrivateKey',
                value: function(e) {
                  return t.BASE.multiply(g(e))
                }
              }
            ]
          )
        })()
        ;(_.BASE = new _(e.Gx, e.Gy, r.ONE)),
          (_.ZERO = new _(r.ZERO, r.ONE, r.ZERO))
        var x = e.nBitLength,
          E = (0, c.wNAF)(_, e.endo ? Math.ceil(x / 2) : x)
        return {
          CURVE: e,
          ProjectivePoint: _,
          normPrivateKeyToScalar: g,
          weierstrassEquation: a,
          isWithinCurveOrder: d
        }
      }
      function _(t, e) {
        for (var r = t.ORDER, n = v, i = r - m; i % g === v; i /= g) n += m
        var o = n,
          s = g << (o - m - m),
          a = s * g,
          u = (r - m) / a,
          f = (u - m) / g,
          h = a - m,
          l = s,
          c = t.pow(e, u),
          d = t.pow(e, (u + m) / g),
          p = function(e, r) {
            var n = c,
              i = t.pow(r, h),
              s = t.sqr(i)
            s = t.mul(s, r)
            var a = t.mul(e, s)
            ;(a = t.pow(a, f)),
              (a = t.mul(a, i)),
              (i = t.mul(a, r)),
              (s = t.mul(a, e))
            var u = t.mul(s, i)
            a = t.pow(u, l)
            var p = t.eql(a, t.ONE)
            ;(i = t.mul(s, d)),
              (a = t.mul(u, n)),
              (s = t.cmov(i, s, p)),
              (u = t.cmov(a, u, p))
            for (var v = o; v > m; v--) {
              var w = v - g
              w = g << (w - m)
              var y = t.pow(u, w),
                b = t.eql(y, t.ONE)
              ;(i = t.mul(s, n)),
                (n = t.mul(n, n)),
                (y = t.mul(u, n)),
                (s = t.cmov(i, s, b)),
                (u = t.cmov(y, u, b))
            }
            return { isValid: p, value: s }
          }
        if (t.ORDER % y === w) {
          var b = (t.ORDER - w) / y,
            _ = t.sqrt(t.neg(e))
          p = function(e, r) {
            var n = t.sqr(r),
              i = t.mul(e, r)
            n = t.mul(n, i)
            var o = t.pow(n, b)
            o = t.mul(o, i)
            var s = t.mul(o, _),
              a = t.mul(t.sqr(o), r),
              u = t.eql(a, e)
            return { isValid: u, value: t.cmov(s, o, u) }
          }
        }
        return p
      }
      ;(e.weierstrassPoints = b),
        (e.weierstrass = function(t) {
          var r = (function(t) {
              var e = (0, c.validateBasic)(t)
              return (
                h.validateObject(
                  e,
                  { hash: 'hash', hmac: 'function', randomBytes: 'function' },
                  {
                    bits2int: 'function',
                    bits2int_modN: 'function',
                    lowS: 'boolean'
                  }
                ),
                Object.freeze(u({ lowS: !0 }, e))
              )
            })(t),
            o = r.Fp,
            s = r.n,
            a = o.BYTES + 1,
            d = 2 * o.BYTES + 1
          function p(t) {
            return f.mod(t, s)
          }
          function g(t) {
            return f.invert(t, s)
          }
          var w = b(
              u(
                u({}, r),
                {},
                {
                  toBytes: function(t, e, r) {
                    var n = e.toAffine(),
                      i = o.toBytes(n.x),
                      s = h.concatBytes
                    return r
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), i)
                      : s(Uint8Array.from([4]), i, o.toBytes(n.y))
                  },
                  fromBytes: function(t) {
                    var e = t.length,
                      r = t[0],
                      n = t.subarray(1)
                    if (e !== a || (2 !== r && 3 !== r)) {
                      if (e === d && 4 === r)
                        return {
                          x: o.fromBytes(n.subarray(0, o.BYTES)),
                          y: o.fromBytes(n.subarray(o.BYTES, 2 * o.BYTES))
                        }
                      throw new Error(
                        'Point of length '
                          .concat(e, ' was invalid. Expected ')
                          .concat(a, ' compressed bytes or ')
                          .concat(d, ' uncompressed bytes')
                      )
                    }
                    var i = h.bytesToNumberBE(n)
                    if (!(v < (s = i) && s < o.ORDER))
                      throw new Error('Point is not on curve')
                    var s,
                      u = x(i),
                      f = o.sqrt(u)
                    return (
                      (1 === (1 & r)) !== ((f & m) === m) && (f = o.neg(f)),
                      { x: i, y: f }
                    )
                  }
                }
              )
            ),
            y = w.ProjectivePoint,
            _ = w.normPrivateKeyToScalar,
            x = w.weierstrassEquation,
            E = w.isWithinCurveOrder,
            k = function(t) {
              return h.bytesToHex(h.numberToBytesBE(t, r.nByteLength))
            }
          function B(t) {
            return t > s >> m
          }
          var A = function(t, e, r) {
              return h.bytesToNumberBE(t.slice(e, r))
            },
            M = (function() {
              function t(e, r, n) {
                i(this, t),
                  (this.r = e),
                  (this.s = r),
                  (this.recovery = n),
                  this.assertValidity()
              }
              return n(
                t,
                [
                  {
                    key: 'assertValidity',
                    value: function() {
                      if (!E(this.r))
                        throw new Error('r must be 0 < r < CURVE.n')
                      if (!E(this.s))
                        throw new Error('s must be 0 < s < CURVE.n')
                    }
                  },
                  {
                    key: 'addRecoveryBit',
                    value: function(e) {
                      return new t(this.r, this.s, e)
                    }
                  },
                  {
                    key: 'recoverPublicKey',
                    value: function(t) {
                      var e = this.r,
                        n = this.s,
                        i = this.recovery,
                        s = O((0, l.ensureBytes)('msgHash', t))
                      if (null == i || ![0, 1, 2, 3].includes(i))
                        throw new Error('recovery id invalid')
                      var a = 2 === i || 3 === i ? e + r.n : e
                      if (a >= o.ORDER)
                        throw new Error('recovery id 2 or 3 invalid')
                      var u = 0 === (1 & i) ? '02' : '03',
                        f = y.fromHex(u + k(a)),
                        h = g(a),
                        c = p(-s * h),
                        d = p(n * h),
                        v = y.BASE.multiplyAndAddUnsafe(f, c, d)
                      if (!v) throw new Error('point at infinify')
                      return v.assertValidity(), v
                    }
                  },
                  {
                    key: 'hasHighS',
                    value: function() {
                      return B(this.s)
                    }
                  },
                  {
                    key: 'normalizeS',
                    value: function() {
                      return this.hasHighS()
                        ? new t(this.r, p(-this.s), this.recovery)
                        : this
                    }
                  },
                  {
                    key: 'toDERRawBytes',
                    value: function() {
                      return h.hexToBytes(this.toDERHex())
                    }
                  },
                  {
                    key: 'toDERHex',
                    value: function() {
                      return e.DER.hexFromSig({ r: this.r, s: this.s })
                    }
                  },
                  {
                    key: 'toCompactRawBytes',
                    value: function() {
                      return h.hexToBytes(this.toCompactHex())
                    }
                  },
                  {
                    key: 'toCompactHex',
                    value: function() {
                      return k(this.r) + k(this.s)
                    }
                  }
                ],
                [
                  {
                    key: 'fromCompact',
                    value: function(e) {
                      var n = r.nByteLength
                      return (
                        (e = (0, l.ensureBytes)('compactSignature', e, 2 * n)),
                        new t(A(e, 0, n), A(e, n, 2 * n))
                      )
                    }
                  },
                  {
                    key: 'fromDER',
                    value: function(r) {
                      var n = e.DER.toSig((0, l.ensureBytes)('DER', r))
                      return new t(n.r, n.s)
                    }
                  }
                ]
              )
            })(),
            S = {
              isValidPrivateKey: function(t) {
                try {
                  return _(t), !0
                } catch (e) {
                  return !1
                }
              },
              normPrivateKeyToScalar: _,
              randomPrivateKey: function() {
                var t = f.getMinHashLength(r.n)
                return f.mapHashToField(r.randomBytes(t), r.n)
              },
              precompute: function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 8,
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : y.BASE
                return e._setWindowSize(t), e.multiply(BigInt(3)), e
              }
            }
          function T(t) {
            var e = h.isBytes(t),
              r = 'string' === typeof t,
              n = (e || r) && t.length
            return e
              ? n === a || n === d
              : r
              ? n === 2 * a || n === 2 * d
              : t instanceof y
          }
          var I =
              r.bits2int ||
              function(t) {
                var e = h.bytesToNumberBE(t),
                  n = 8 * t.length - r.nBitLength
                return n > 0 ? e >> BigInt(n) : e
              },
            O =
              r.bits2int_modN ||
              function(t) {
                return p(I(t))
              },
            N = h.bitMask(r.nBitLength)
          function L(t) {
            if ('bigint' !== typeof t) throw new Error('bigint expected')
            if (!(v <= t && t < N))
              throw new Error('bigint expected < 2^'.concat(r.nBitLength))
            return h.numberToBytesBE(t, r.nByteLength)
          }
          function R(t, e) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P
            if (
              ['recovered', 'canonical'].some(function(t) {
                return t in n
              })
            )
              throw new Error('sign() legacy options not supported')
            var i = r.hash,
              s = r.randomBytes,
              a = n.lowS,
              u = n.prehash,
              f = n.extraEntropy
            null == a && (a = !0),
              (t = (0, l.ensureBytes)('msgHash', t)),
              u && (t = (0, l.ensureBytes)('prehashed msgHash', i(t)))
            var c = O(t),
              d = _(e),
              w = [L(d), L(c)]
            if (null != f) {
              var b = !0 === f ? s(o.BYTES) : f
              w.push((0, l.ensureBytes)('extraEntropy', b))
            }
            var x = h.concatBytes.apply(h, w),
              k = c
            return {
              seed: x,
              k2sig: function(t) {
                var e = I(t)
                if (E(e)) {
                  var r = g(e),
                    n = y.BASE.multiply(e).toAffine(),
                    i = p(n.x)
                  if (i !== v) {
                    var o = p(r * p(k + i * d))
                    if (o !== v) {
                      var s = (n.x === i ? 0 : 2) | Number(n.y & m),
                        u = o
                      return (
                        a &&
                          B(o) &&
                          ((u = (function(t) {
                            return B(t) ? p(-t) : t
                          })(o)),
                          (s ^= 1)),
                        new M(i, u, s)
                      )
                    }
                  }
                }
              }
            }
          }
          var P = { lowS: r.lowS, prehash: !1 },
            C = { lowS: r.lowS, prehash: !1 }
          return (
            y.BASE._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function(t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1]
                return y.fromPrivateKey(t).toRawBytes(e)
              },
              getSharedSecret: function(t, e) {
                var r =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
                if (T(t)) throw new Error('first arg must be private key')
                if (!T(e)) throw new Error('second arg must be public key')
                return y
                  .fromHex(e)
                  .multiply(_(t))
                  .toRawBytes(r)
              },
              sign: function(t, e) {
                var n = R(
                    t,
                    e,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : P
                  ),
                  i = n.seed,
                  o = n.k2sig,
                  s = r
                return h.createHmacDrbg(
                  s.hash.outputLen,
                  s.nByteLength,
                  s.hmac
                )(i, o)
              },
              verify: function(t, n, i) {
                var o,
                  s =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : C,
                  a = t
                if (
                  ((n = (0, l.ensureBytes)('msgHash', n)),
                  (i = (0, l.ensureBytes)('publicKey', i)),
                  'strict' in s)
                )
                  throw new Error('options.strict was renamed to lowS')
                var u,
                  f = s.lowS,
                  c = s.prehash,
                  d = void 0
                try {
                  if ('string' === typeof a || h.isBytes(a))
                    try {
                      d = M.fromDER(a)
                    } catch (S) {
                      if (!(S instanceof e.DER.Err)) throw S
                      d = M.fromCompact(a)
                    }
                  else {
                    if (
                      'object' !== typeof a ||
                      'bigint' !== typeof a.r ||
                      'bigint' !== typeof a.s
                    )
                      throw new Error('PARSE')
                    var v = a.r,
                      m = a.s
                    d = new M(v, m)
                  }
                  u = y.fromHex(i)
                } catch (T) {
                  if ('PARSE' === T.message)
                    throw new Error(
                      'signature must be Signature instance, Uint8Array or hex string'
                    )
                  return !1
                }
                if (f && d.hasHighS()) return !1
                c && (n = r.hash(n))
                var w = d,
                  b = w.r,
                  _ = w.s,
                  x = O(n),
                  E = g(_),
                  k = p(x * E),
                  B = p(b * E),
                  A =
                    null === (o = y.BASE.multiplyAndAddUnsafe(u, k, B)) ||
                    void 0 === o
                      ? void 0
                      : o.toAffine()
                return !!A && p(A.x) === b
              },
              ProjectivePoint: y,
              Signature: M,
              utils: S
            }
          )
        }),
        (e.SWUFpSqrtRatio = _),
        (e.mapToCurveSimpleSWU = function(t, e) {
          if (
            (f.validateField(t),
            !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z))
          )
            throw new Error('mapToCurveSimpleSWU: invalid opts')
          var r = _(t, e.Z)
          if (!t.isOdd) throw new Error('Fp.isOdd is not implemented!')
          return function(n) {
            var i, o, s, a, u, f, h, l
            ;(i = t.sqr(n)),
              (i = t.mul(i, e.Z)),
              (o = t.sqr(i)),
              (o = t.add(o, i)),
              (s = t.add(o, t.ONE)),
              (s = t.mul(s, e.B)),
              (a = t.cmov(e.Z, t.neg(o), !t.eql(o, t.ZERO))),
              (a = t.mul(a, e.A)),
              (o = t.sqr(s)),
              (f = t.sqr(a)),
              (u = t.mul(f, e.A)),
              (o = t.add(o, u)),
              (o = t.mul(o, s)),
              (f = t.mul(f, a)),
              (u = t.mul(f, e.B)),
              (o = t.add(o, u)),
              (h = t.mul(i, s))
            var c = r(o, f),
              d = c.isValid,
              p = c.value
            ;(l = t.mul(i, n)),
              (l = t.mul(l, p)),
              (h = t.cmov(h, s, d)),
              (l = t.cmov(l, p, d))
            var v = t.isOdd(n) === t.isOdd(l)
            return (l = t.cmov(t.neg(l), l, v)), { x: (h = t.div(h, a)), y: l }
          }
        })
    },
    31509: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0)
      var n = r(51678),
        i = r(30684),
        o = r(84874),
        s = r(7520),
        a = r(52305),
        u = r(68280),
        f = r(889),
        h = BigInt(
          '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f'
        ),
        l = BigInt(
          '0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141'
        ),
        c = BigInt(1),
        d = BigInt(2),
        p = function(t, e) {
          return (t + e / d) / e
        }
      function v(t) {
        var e = h,
          r = BigInt(3),
          n = BigInt(6),
          i = BigInt(11),
          s = BigInt(22),
          a = BigInt(23),
          u = BigInt(44),
          f = BigInt(88),
          l = (t * t * t) % e,
          c = (l * l * t) % e,
          p = ((0, o.pow2)(c, r, e) * c) % e,
          v = ((0, o.pow2)(p, r, e) * c) % e,
          g = ((0, o.pow2)(v, d, e) * l) % e,
          w = ((0, o.pow2)(g, i, e) * g) % e,
          y = ((0, o.pow2)(w, s, e) * w) % e,
          b = ((0, o.pow2)(y, u, e) * y) % e,
          _ = ((0, o.pow2)(b, f, e) * b) % e,
          x = ((0, o.pow2)(_, u, e) * y) % e,
          E = ((0, o.pow2)(x, r, e) * c) % e,
          k = ((0, o.pow2)(E, a, e) * w) % e,
          B = ((0, o.pow2)(k, n, e) * l) % e,
          A = (0, o.pow2)(B, d, e)
        if (!m.eql(m.sqr(A), t)) throw new Error('Cannot find square root')
        return A
      }
      var m = (0, o.Field)(h, void 0, void 0, { sqrt: v })
      e.secp256k1 = (0, f.createCurve)(
        {
          a: BigInt(0),
          b: BigInt(7),
          Fp: m,
          n: l,
          Gx: BigInt(
            '55066263022277343669578718895168534326250603453777594175500187360389116729240'
          ),
          Gy: BigInt(
            '32670510020758816978083085130507043184471273380659243275938904335757337482424'
          ),
          h: BigInt(1),
          lowS: !0,
          endo: {
            beta: BigInt(
              '0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'
            ),
            splitScalar: function(t) {
              var e = l,
                r = BigInt('0x3086d221a7d46bcde86c90e49284eb15'),
                n = -c * BigInt('0xe4437ed6010e88286f547fa90abfe4c3'),
                i = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8'),
                s = r,
                a = BigInt('0x100000000000000000000000000000000'),
                u = p(s * t, e),
                f = p(-n * t, e),
                h = (0, o.mod)(t - u * r - f * i, e),
                d = (0, o.mod)(-u * n - f * s, e),
                v = h > a,
                m = d > a
              if ((v && (h = e - h), m && (d = e - d), h > a || d > a))
                throw new Error('splitScalar: Endomorphism failed, k=' + t)
              return { k1neg: v, k1: h, k2neg: m, k2: d }
            }
          }
        },
        n.sha256
      )
      var g = BigInt(0),
        w = function(t) {
          return 'bigint' === typeof t && g < t && t < h
        },
        y = function(t) {
          return 'bigint' === typeof t && g < t && t < l
        },
        b = {}
      function _(t) {
        var e = b[t]
        if (void 0 === e) {
          var r = (0, n.sha256)(
            Uint8Array.from(t, function(t) {
              return t.charCodeAt(0)
            })
          )
          ;(e = (0, a.concatBytes)(r, r)), (b[t] = e)
        }
        for (
          var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1;
          s < i;
          s++
        )
          o[s - 1] = arguments[s]
        return (0, n.sha256)(a.concatBytes.apply(void 0, [e].concat(o)))
      }
      var x = function(t) {
          return t.toRawBytes(!0).slice(1)
        },
        E = function(t) {
          return (0, a.numberToBytesBE)(t, 32)
        },
        k = function(t) {
          return (0, o.mod)(t, h)
        },
        B = function(t) {
          return (0, o.mod)(t, l)
        },
        A = e.secp256k1.ProjectivePoint,
        M = function(t, e, r) {
          return A.BASE.multiplyAndAddUnsafe(t, e, r)
        }
      function S(t) {
        var r = e.secp256k1.utils.normPrivateKeyToScalar(t),
          n = A.fromPrivateKey(r)
        return { scalar: n.hasEvenY() ? r : B(-r), bytes: x(n) }
      }
      function T(t) {
        if (!w(t)) throw new Error('bad x: need 0 < x < p')
        var e = k(t * t),
          r = v(k(e * t + BigInt(7)))
        r % d !== g && (r = k(-r))
        var n = new A(t, r, c)
        return n.assertValidity(), n
      }
      function I() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r]
        return B(
          (0, a.bytesToNumberBE)(
            _.apply(void 0, ['BIP0340/challenge'].concat(e))
          )
        )
      }
      function O(t) {
        return S(t).bytes
      }
      function N(t, e) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : (0, i.randomBytes)(32),
          n = (0, a.ensureBytes)('message', t),
          o = S(e),
          s = o.bytes,
          u = o.scalar,
          f = (0, a.ensureBytes)('auxRand', r, 32),
          h = E(u ^ (0, a.bytesToNumberBE)(_('BIP0340/aux', f))),
          l = _('BIP0340/nonce', h, s, n),
          c = B((0, a.bytesToNumberBE)(l))
        if (c === g) throw new Error('sign failed: k is zero')
        var d = S(c),
          p = d.bytes,
          v = d.scalar,
          m = I(p, s, n),
          w = new Uint8Array(64)
        if ((w.set(p, 0), w.set(E(B(v + m * u)), 32), !L(w, n, s)))
          throw new Error('sign: Invalid signature produced')
        return w
      }
      function L(t, e, r) {
        var n = (0, a.ensureBytes)('signature', t, 64),
          i = (0, a.ensureBytes)('message', e),
          o = (0, a.ensureBytes)('publicKey', r, 32)
        try {
          var s = T((0, a.bytesToNumberBE)(o)),
            u = (0, a.bytesToNumberBE)(n.subarray(0, 32))
          if (!w(u)) return !1
          var f = (0, a.bytesToNumberBE)(n.subarray(32, 64))
          if (!y(f)) return !1
          var h = I(E(u), x(s), i),
            l = M(s, f, B(-h))
          return !(!l || !l.hasEvenY() || l.toAffine().x !== u)
        } catch (c) {
          return !1
        }
      }
      e.schnorr = {
        getPublicKey: O,
        sign: N,
        verify: L,
        utils: {
          randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
          lift_x: T,
          pointToBytes: x,
          numberToBytesBE: a.numberToBytesBE,
          bytesToNumberBE: a.bytesToNumberBE,
          taggedHash: _,
          mod: o.mod
        }
      }
      var R = (function() {
          return (0, u.isogenyMap)(
            m,
            [
              [
                '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
                '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
                '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
                '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c'
              ],
              [
                '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
                '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
                '0x0000000000000000000000000000000000000000000000000000000000000001'
              ],
              [
                '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
                '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
                '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
                '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84'
              ],
              [
                '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
                '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
                '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
                '0x0000000000000000000000000000000000000000000000000000000000000001'
              ]
            ].map(function(t) {
              return t.map(function(t) {
                return BigInt(t)
              })
            })
          )
        })(),
        P = (function() {
          return (0, s.mapToCurveSimpleSWU)(m, {
            A: BigInt(
              '0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'
            ),
            B: BigInt('1771'),
            Z: m.create(BigInt('-11'))
          })
        })(),
        C = (function() {
          return (0, u.createHasher)(
            e.secp256k1.ProjectivePoint,
            function(t) {
              var e = P(m.create(t[0])),
                r = e.x,
                n = e.y
              return R(r, n)
            },
            {
              DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
              encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
              p: m.ORDER,
              m: 1,
              k: 128,
              expand: 'xmd',
              hash: n.sha256
            }
          )
        })()
      ;(e.hashToCurve = C.hashToCurve), (e.encodeToCurve = C.encodeToCurve)
    },
    87250: function(t, e) {
      'use strict'
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error('Wrong positive integer: '.concat(t))
      }
      function n(t) {
        if ('boolean' !== typeof t)
          throw new Error('Expected boolean, not '.concat(t))
      }
      function i(t) {
        if (
          !(
            (e = t) instanceof Uint8Array ||
            (null != e &&
              'object' === typeof e &&
              'Uint8Array' === e.constructor.name)
          )
        )
          throw new Error('Expected Uint8Array')
        for (
          var e, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          n[i - 1] = arguments[i]
        if (n.length > 0 && !n.includes(t.length))
          throw new Error(
            'Expected Uint8Array of length '
              .concat(n, ', not of length=')
              .concat(t.length)
          )
      }
      function o(t) {
        if ('function' !== typeof t || 'function' !== typeof t.create)
          throw new Error('Hash should be wrapped by utils.wrapConstructor')
        r(t.outputLen), r(t.blockLen)
      }
      function s(t) {
        var e =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        if (t.destroyed) throw new Error('Hash instance has been destroyed')
        if (e && t.finished)
          throw new Error('Hash#digest() has already been called')
      }
      function a(t, e) {
        i(t)
        var r = e.outputLen
        if (t.length < r)
          throw new Error(
            'digestInto() expects output buffer of length at least '.concat(r)
          )
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0),
        (e.number = r),
        (e.bool = n),
        (e.bytes = i),
        (e.hash = o),
        (e.exists = s),
        (e.output = a)
      var u = { number: r, bool: n, bytes: i, hash: o, exists: s, output: a }
      e.default = u
    },
    90540: function(t, e, r) {
      'use strict'
      var n = r(41132).default,
        i = r(17383).default,
        o = r(34579).default,
        s = r(18336).default,
        a = r(29511).default
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.SHA2 = void 0)
      var u = r(87250),
        f = r(30684)
      var h = (function(t) {
        function e(t, r, n, o) {
          var a
          return (
            i(this, e),
            ((a = s(this, e)).blockLen = t),
            (a.outputLen = r),
            (a.padOffset = n),
            (a.isLE = o),
            (a.finished = !1),
            (a.length = 0),
            (a.pos = 0),
            (a.destroyed = !1),
            (a.buffer = new Uint8Array(t)),
            (a.view = (0, f.createView)(a.buffer)),
            a
          )
        }
        return (
          a(e, t),
          o(e, [
            {
              key: 'update',
              value: function(t) {
                ;(0, u.exists)(this)
                for (
                  var e = this.view,
                    r = this.buffer,
                    n = this.blockLen,
                    i = (t = (0, f.toBytes)(t)).length,
                    o = 0;
                  o < i;

                ) {
                  var s = Math.min(n - this.pos, i - o)
                  if (s !== n)
                    r.set(t.subarray(o, o + s), this.pos),
                      (this.pos += s),
                      (o += s),
                      this.pos === n && (this.process(e, 0), (this.pos = 0))
                  else
                    for (var a = (0, f.createView)(t); n <= i - o; o += n)
                      this.process(a, o)
                }
                return (this.length += t.length), this.roundClean(), this
              }
            },
            {
              key: 'digestInto',
              value: function(t) {
                ;(0, u.exists)(this),
                  (0, u.output)(t, this),
                  (this.finished = !0)
                var e = this.buffer,
                  r = this.view,
                  n = this.blockLen,
                  i = this.isLE,
                  o = this.pos
                ;(e[o++] = 128),
                  this.buffer.subarray(o).fill(0),
                  this.padOffset > n - o && (this.process(r, 0), (o = 0))
                for (var s = o; s < n; s++) e[s] = 0
                !(function(t, e, r, n) {
                  if ('function' === typeof t.setBigUint64)
                    return t.setBigUint64(e, r, n)
                  var i = BigInt(32),
                    o = BigInt(4294967295),
                    s = Number((r >> i) & o),
                    a = Number(r & o),
                    u = n ? 4 : 0,
                    f = n ? 0 : 4
                  t.setUint32(e + u, s, n), t.setUint32(e + f, a, n)
                })(r, n - 8, BigInt(8 * this.length), i),
                  this.process(r, 0)
                var a = (0, f.createView)(t),
                  h = this.outputLen
                if (h % 4)
                  throw new Error('_sha2: outputLen should be aligned to 32bit')
                var l = h / 4,
                  c = this.get()
                if (l > c.length)
                  throw new Error('_sha2: outputLen bigger than state')
                for (var d = 0; d < l; d++) a.setUint32(4 * d, c[d], i)
              }
            },
            {
              key: 'digest',
              value: function() {
                var t = this.buffer,
                  e = this.outputLen
                this.digestInto(t)
                var r = t.slice(0, e)
                return this.destroy(), r
              }
            },
            {
              key: '_cloneInto',
              value: function(t) {
                var e
                t || (t = new this.constructor()),
                  (e = t).set.apply(e, n(this.get()))
                var r = this.blockLen,
                  i = this.buffer,
                  o = this.length,
                  s = this.finished,
                  a = this.destroyed,
                  u = this.pos
                return (
                  (t.length = o),
                  (t.pos = u),
                  (t.finished = s),
                  (t.destroyed = a),
                  o % r && t.buffer.set(i),
                  t
                )
              }
            }
          ])
        )
      })(f.Hash)
      e.SHA2 = h
    },
    87459: function(t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.add5L = e.add5H = e.add4H = e.add4L = e.add3H = e.add3L = e.add = e.rotlBL = e.rotlBH = e.rotlSL = e.rotlSH = e.rotr32L = e.rotr32H = e.rotrBL = e.rotrBH = e.rotrSL = e.rotrSH = e.shrSL = e.shrSH = e.toBig = e.split = e.fromBig = void 0)
      var r = BigInt(Math.pow(2, 32) - 1),
        n = BigInt(32)
      function i(t) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          ? { h: Number(t & r), l: Number((t >> n) & r) }
          : { h: 0 | Number((t >> n) & r), l: 0 | Number(t & r) }
      }
      function o(t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = new Uint32Array(t.length),
            n = new Uint32Array(t.length),
            o = 0;
          o < t.length;
          o++
        ) {
          var s = i(t[o], e),
            a = [s.h, s.l]
          ;(r[o] = a[0]), (n[o] = a[1])
        }
        return [r, n]
      }
      ;(e.fromBig = i), (e.split = o)
      var s = function(t, e) {
        return (BigInt(t >>> 0) << n) | BigInt(e >>> 0)
      }
      e.toBig = s
      var a = function(t, e, r) {
        return t >>> r
      }
      e.shrSH = a
      var u = function(t, e, r) {
        return (t << (32 - r)) | (e >>> r)
      }
      e.shrSL = u
      var f = function(t, e, r) {
        return (t >>> r) | (e << (32 - r))
      }
      e.rotrSH = f
      var h = function(t, e, r) {
        return (t << (32 - r)) | (e >>> r)
      }
      e.rotrSL = h
      var l = function(t, e, r) {
        return (t << (64 - r)) | (e >>> (r - 32))
      }
      e.rotrBH = l
      var c = function(t, e, r) {
        return (t >>> (r - 32)) | (e << (64 - r))
      }
      e.rotrBL = c
      var d = function(t, e) {
        return e
      }
      e.rotr32H = d
      var p = function(t, e) {
        return t
      }
      e.rotr32L = p
      var v = function(t, e, r) {
        return (t << r) | (e >>> (32 - r))
      }
      e.rotlSH = v
      var m = function(t, e, r) {
        return (e << r) | (t >>> (32 - r))
      }
      e.rotlSL = m
      var g = function(t, e, r) {
        return (e << (r - 32)) | (t >>> (64 - r))
      }
      e.rotlBH = g
      var w = function(t, e, r) {
        return (t << (r - 32)) | (e >>> (64 - r))
      }
      function y(t, e, r, n) {
        var i = (e >>> 0) + (n >>> 0)
        return { h: (t + r + ((i / Math.pow(2, 32)) | 0)) | 0, l: 0 | i }
      }
      ;(e.rotlBL = w), (e.add = y)
      var b = function(t, e, r) {
        return (t >>> 0) + (e >>> 0) + (r >>> 0)
      }
      e.add3L = b
      var _ = function(t, e, r, n) {
        return (e + r + n + ((t / Math.pow(2, 32)) | 0)) | 0
      }
      e.add3H = _
      var x = function(t, e, r, n) {
        return (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0)
      }
      e.add4L = x
      var E = function(t, e, r, n, i) {
        return (e + r + n + i + ((t / Math.pow(2, 32)) | 0)) | 0
      }
      e.add4H = E
      var k = function(t, e, r, n, i) {
        return (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0)
      }
      e.add5L = k
      var B = function(t, e, r, n, i, o) {
        return (e + r + n + i + o + ((t / Math.pow(2, 32)) | 0)) | 0
      }
      e.add5H = B
      var A = {
        fromBig: i,
        split: o,
        toBig: s,
        shrSH: a,
        shrSL: u,
        rotrSH: f,
        rotrSL: h,
        rotrBH: l,
        rotrBL: c,
        rotr32H: d,
        rotr32L: p,
        rotlSH: v,
        rotlSL: m,
        rotlBH: g,
        rotlBL: w,
        add: y,
        add3L: b,
        add3H: _,
        add4L: x,
        add4H: E,
        add5H: B,
        add5L: k
      }
      e.default = A
    },
    57932: function(t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.crypto = void 0),
        (e.crypto =
          'object' === typeof globalThis && 'crypto' in globalThis
            ? globalThis.crypto
            : void 0)
    },
    81858: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        s = r(29511).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.hmac = e.HMAC = void 0)
      var a = r(87250),
        u = r(30684),
        f = (function(t) {
          function e(t, r) {
            var i
            n(this, e),
              ((i = o(this, e)).finished = !1),
              (i.destroyed = !1),
              (0, a.hash)(t)
            var s = (0, u.toBytes)(r)
            if (((i.iHash = t.create()), 'function' !== typeof i.iHash.update))
              throw new Error(
                'Expected instance of class which extends utils.Hash'
              )
            ;(i.blockLen = i.iHash.blockLen), (i.outputLen = i.iHash.outputLen)
            var f = i.blockLen,
              h = new Uint8Array(f)
            h.set(
              s.length > f
                ? t
                    .create()
                    .update(s)
                    .digest()
                : s
            )
            for (var l = 0; l < h.length; l++) h[l] ^= 54
            i.iHash.update(h), (i.oHash = t.create())
            for (var c = 0; c < h.length; c++) h[c] ^= 106
            return i.oHash.update(h), h.fill(0), i
          }
          return (
            s(e, t),
            i(e, [
              {
                key: 'update',
                value: function(t) {
                  return (0, a.exists)(this), this.iHash.update(t), this
                }
              },
              {
                key: 'digestInto',
                value: function(t) {
                  ;(0, a.exists)(this),
                    (0, a.bytes)(t, this.outputLen),
                    (this.finished = !0),
                    this.iHash.digestInto(t),
                    this.oHash.update(t),
                    this.oHash.digestInto(t),
                    this.destroy()
                }
              },
              {
                key: 'digest',
                value: function() {
                  var t = new Uint8Array(this.oHash.outputLen)
                  return this.digestInto(t), t
                }
              },
              {
                key: '_cloneInto',
                value: function(t) {
                  t || (t = Object.create(Object.getPrototypeOf(this), {}))
                  var e = this.oHash,
                    r = this.iHash,
                    n = this.finished,
                    i = this.destroyed,
                    o = this.blockLen,
                    s = this.outputLen
                  return (
                    (t.finished = n),
                    (t.destroyed = i),
                    (t.blockLen = o),
                    (t.outputLen = s),
                    (t.oHash = e._cloneInto(t.oHash)),
                    (t.iHash = r._cloneInto(t.iHash)),
                    t
                  )
                }
              },
              {
                key: 'destroy',
                value: function() {
                  ;(this.destroyed = !0),
                    this.oHash.destroy(),
                    this.iHash.destroy()
                }
              }
            ])
          )
        })(u.Hash)
      e.HMAC = f
      ;(e.hmac = function(t, e, r) {
        return new f(t, e).update(r).digest()
      }),
        (e.hmac.create = function(t, e) {
          return new f(t, e)
        })
    },
    51678: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        s = r(29511).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.sha224 = e.sha256 = void 0)
      var a = r(90540),
        u = r(30684),
        f = function(t, e, r) {
          return (t & e) ^ (t & r) ^ (e & r)
        },
        h = new Uint32Array([
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ]),
        l = new Uint32Array([
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ]),
        c = new Uint32Array(64),
        d = (function(t) {
          function e() {
            var t
            return (
              n(this, e),
              ((t = o(this, e, [64, 32, 8, !1])).A = 0 | l[0]),
              (t.B = 0 | l[1]),
              (t.C = 0 | l[2]),
              (t.D = 0 | l[3]),
              (t.E = 0 | l[4]),
              (t.F = 0 | l[5]),
              (t.G = 0 | l[6]),
              (t.H = 0 | l[7]),
              t
            )
          }
          return (
            s(e, t),
            i(e, [
              {
                key: 'get',
                value: function() {
                  return [
                    this.A,
                    this.B,
                    this.C,
                    this.D,
                    this.E,
                    this.F,
                    this.G,
                    this.H
                  ]
                }
              },
              {
                key: 'set',
                value: function(t, e, r, n, i, o, s, a) {
                  ;(this.A = 0 | t),
                    (this.B = 0 | e),
                    (this.C = 0 | r),
                    (this.D = 0 | n),
                    (this.E = 0 | i),
                    (this.F = 0 | o),
                    (this.G = 0 | s),
                    (this.H = 0 | a)
                }
              },
              {
                key: 'process',
                value: function(t, e) {
                  for (var r = 0; r < 16; r++, e += 4) c[r] = t.getUint32(e, !1)
                  for (var n = 16; n < 64; n++) {
                    var i = c[n - 15],
                      o = c[n - 2],
                      s = (0, u.rotr)(i, 7) ^ (0, u.rotr)(i, 18) ^ (i >>> 3),
                      a = (0, u.rotr)(o, 17) ^ (0, u.rotr)(o, 19) ^ (o >>> 10)
                    c[n] = (a + c[n - 7] + s + c[n - 16]) | 0
                  }
                  for (
                    var l,
                      d = this.A,
                      p = this.B,
                      v = this.C,
                      m = this.D,
                      g = this.E,
                      w = this.F,
                      y = this.G,
                      b = this.H,
                      _ = 0;
                    _ < 64;
                    _++
                  ) {
                    var x =
                        (b +
                          ((0, u.rotr)(g, 6) ^
                            (0, u.rotr)(g, 11) ^
                            (0, u.rotr)(g, 25)) +
                          (((l = g) & w) ^ (~l & y)) +
                          h[_] +
                          c[_]) |
                        0,
                      E =
                        (((0, u.rotr)(d, 2) ^
                          (0, u.rotr)(d, 13) ^
                          (0, u.rotr)(d, 22)) +
                          f(d, p, v)) |
                        0
                    ;(b = y),
                      (y = w),
                      (w = g),
                      (g = (m + x) | 0),
                      (m = v),
                      (v = p),
                      (p = d),
                      (d = (x + E) | 0)
                  }
                  ;(d = (d + this.A) | 0),
                    (p = (p + this.B) | 0),
                    (v = (v + this.C) | 0),
                    (m = (m + this.D) | 0),
                    (g = (g + this.E) | 0),
                    (w = (w + this.F) | 0),
                    (y = (y + this.G) | 0),
                    (b = (b + this.H) | 0),
                    this.set(d, p, v, m, g, w, y, b)
                }
              },
              {
                key: 'roundClean',
                value: function() {
                  c.fill(0)
                }
              },
              {
                key: 'destroy',
                value: function() {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
              }
            ])
          )
        })(a.SHA2),
        p = (function(t) {
          function e() {
            var t
            return (
              n(this, e),
              ((t = o(this, e)).A = -1056596264),
              (t.B = 914150663),
              (t.C = 812702999),
              (t.D = -150054599),
              (t.E = -4191439),
              (t.F = 1750603025),
              (t.G = 1694076839),
              (t.H = -1090891868),
              (t.outputLen = 28),
              t
            )
          }
          return s(e, t), i(e)
        })(d)
      ;(e.sha256 = (0, u.wrapConstructor)(function() {
        return new d()
      })),
        (e.sha224 = (0, u.wrapConstructor)(function() {
          return new p()
        }))
    },
    67138: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(18336).default,
        s = r(29511).default,
        a = r(85715).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.shake256 = e.shake128 = e.keccak_512 = e.keccak_384 = e.keccak_256 = e.keccak_224 = e.sha3_512 = e.sha3_384 = e.sha3_256 = e.sha3_224 = e.Keccak = e.keccakP = void 0)
      for (
        var u = r(87250),
          f = r(87459),
          h = r(30684),
          l = [],
          c = [],
          d = [],
          p = BigInt(0),
          v = BigInt(1),
          m = BigInt(2),
          g = BigInt(7),
          w = BigInt(256),
          y = BigInt(113),
          b = 0,
          _ = v,
          x = 1,
          E = 0;
        b < 24;
        b++
      ) {
        var k = [E, (2 * x + 3 * E) % 5]
        ;(x = k[0]),
          (E = k[1]),
          l.push(2 * (5 * E + x)),
          c.push((((b + 1) * (b + 2)) / 2) % 64)
        for (var B = p, A = 0; A < 7; A++)
          (_ = ((_ << v) ^ ((_ >> g) * y)) % w) & m &&
            (B ^= v << ((v << BigInt(A)) - v))
        d.push(B)
      }
      var M = a((0, f.split)(d, !0), 2),
        S = M[0],
        T = M[1],
        I = function(t, e, r) {
          return r > 32 ? (0, f.rotlBH)(t, e, r) : (0, f.rotlSH)(t, e, r)
        },
        O = function(t, e, r) {
          return r > 32 ? (0, f.rotlBL)(t, e, r) : (0, f.rotlSL)(t, e, r)
        }
      function N(t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 24,
            r = new Uint32Array(10),
            n = 24 - e;
          n < 24;
          n++
        ) {
          for (var i = 0; i < 10; i++)
            r[i] = t[i] ^ t[i + 10] ^ t[i + 20] ^ t[i + 30] ^ t[i + 40]
          for (var o = 0; o < 10; o += 2)
            for (
              var s = (o + 8) % 10,
                a = (o + 2) % 10,
                u = r[a],
                f = r[a + 1],
                h = I(u, f, 1) ^ r[s],
                d = O(u, f, 1) ^ r[s + 1],
                p = 0;
              p < 50;
              p += 10
            )
              (t[o + p] ^= h), (t[o + p + 1] ^= d)
          for (var v = t[2], m = t[3], g = 0; g < 24; g++) {
            var w = c[g],
              y = I(v, m, w),
              b = O(v, m, w),
              _ = l[g]
            ;(v = t[_]), (m = t[_ + 1]), (t[_] = y), (t[_ + 1] = b)
          }
          for (var x = 0; x < 50; x += 10) {
            for (var E = 0; E < 10; E++) r[E] = t[x + E]
            for (var k = 0; k < 10; k++)
              t[x + k] ^= ~r[(k + 2) % 10] & r[(k + 4) % 10]
          }
          ;(t[0] ^= S[n]), (t[1] ^= T[n])
        }
        r.fill(0)
      }
      e.keccakP = N
      var L = (function(t) {
        function e(t, r, i) {
          var s,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            f =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 24
          if (
            (n(this, e),
            ((s = o(this, e)).blockLen = t),
            (s.suffix = r),
            (s.outputLen = i),
            (s.enableXOF = a),
            (s.rounds = f),
            (s.pos = 0),
            (s.posOut = 0),
            (s.finished = !1),
            (s.destroyed = !1),
            (0, u.number)(i),
            0 >= s.blockLen || s.blockLen >= 200)
          )
            throw new Error('Sha3 supports only keccak-f1600 function')
          return (
            (s.state = new Uint8Array(200)),
            (s.state32 = (0, h.u32)(s.state)),
            s
          )
        }
        return (
          s(e, t),
          i(e, [
            {
              key: 'keccak',
              value: function() {
                N(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0)
              }
            },
            {
              key: 'update',
              value: function(t) {
                ;(0, u.exists)(this)
                for (
                  var e = this.blockLen,
                    r = this.state,
                    n = (t = (0, h.toBytes)(t)).length,
                    i = 0;
                  i < n;

                ) {
                  for (var o = Math.min(e - this.pos, n - i), s = 0; s < o; s++)
                    r[this.pos++] ^= t[i++]
                  this.pos === e && this.keccak()
                }
                return this
              }
            },
            {
              key: 'finish',
              value: function() {
                if (!this.finished) {
                  this.finished = !0
                  var t = this.state,
                    e = this.suffix,
                    r = this.pos,
                    n = this.blockLen
                  ;(t[r] ^= e),
                    0 !== (128 & e) && r === n - 1 && this.keccak(),
                    (t[n - 1] ^= 128),
                    this.keccak()
                }
              }
            },
            {
              key: 'writeInto',
              value: function(t) {
                ;(0, u.exists)(this, !1), (0, u.bytes)(t), this.finish()
                for (
                  var e = this.state, r = this.blockLen, n = 0, i = t.length;
                  n < i;

                ) {
                  this.posOut >= r && this.keccak()
                  var o = Math.min(r - this.posOut, i - n)
                  t.set(e.subarray(this.posOut, this.posOut + o), n),
                    (this.posOut += o),
                    (n += o)
                }
                return t
              }
            },
            {
              key: 'xofInto',
              value: function(t) {
                if (!this.enableXOF)
                  throw new Error('XOF is not possible for this instance')
                return this.writeInto(t)
              }
            },
            {
              key: 'xof',
              value: function(t) {
                return (0, u.number)(t), this.xofInto(new Uint8Array(t))
              }
            },
            {
              key: 'digestInto',
              value: function(t) {
                if (((0, u.output)(t, this), this.finished))
                  throw new Error('digest() was already called')
                return this.writeInto(t), this.destroy(), t
              }
            },
            {
              key: 'digest',
              value: function() {
                return this.digestInto(new Uint8Array(this.outputLen))
              }
            },
            {
              key: 'destroy',
              value: function() {
                ;(this.destroyed = !0), this.state.fill(0)
              }
            },
            {
              key: '_cloneInto',
              value: function(t) {
                var r = this.blockLen,
                  n = this.suffix,
                  i = this.outputLen,
                  o = this.rounds,
                  s = this.enableXOF
                return (
                  t || (t = new e(r, n, i, s, o)),
                  t.state32.set(this.state32),
                  (t.pos = this.pos),
                  (t.posOut = this.posOut),
                  (t.finished = this.finished),
                  (t.rounds = o),
                  (t.suffix = n),
                  (t.outputLen = i),
                  (t.enableXOF = s),
                  (t.destroyed = this.destroyed),
                  t
                )
              }
            }
          ])
        )
      })(h.Hash)
      e.Keccak = L
      var R = function(t, e, r) {
        return (0, h.wrapConstructor)(function() {
          return new L(e, t, r)
        })
      }
      ;(e.sha3_224 = R(6, 144, 28)),
        (e.sha3_256 = R(6, 136, 32)),
        (e.sha3_384 = R(6, 104, 48)),
        (e.sha3_512 = R(6, 72, 64)),
        (e.keccak_224 = R(1, 144, 28)),
        (e.keccak_256 = R(1, 136, 32)),
        (e.keccak_384 = R(1, 104, 48)),
        (e.keccak_512 = R(1, 72, 64))
      var P = function(t, e, r) {
        return (0, h.wrapXOFConstructorWithOpts)(function() {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return new L(e, t, void 0 === n.dkLen ? r : n.dkLen, !0)
        })
      }
      ;(e.shake128 = P(31, 168, 16)), (e.shake256 = P(31, 136, 32))
    },
    30684: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(4633).default,
        s = r(29293).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0)
      var a = r(57932)
      e.u8 = function(t) {
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
      }
      function u(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            'object' === typeof t &&
            'Uint8Array' === t.constructor.name)
        )
      }
      e.u32 = function(t) {
        return new Uint32Array(
          t.buffer,
          t.byteOffset,
          Math.floor(t.byteLength / 4)
        )
      }
      e.createView = function(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength)
      }
      if (
        ((e.rotr = function(t, e) {
          return (t << (32 - e)) | (t >>> e)
        }),
        (e.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !e.isLE)
      )
        throw new Error('Non little-endian hardware is not supported')
      var f = Array.from({ length: 256 }, function(t, e) {
        return e.toString(16).padStart(2, '0')
      })
      e.bytesToHex = function(t) {
        if (!u(t)) throw new Error('Uint8Array expected')
        for (var e = '', r = 0; r < t.length; r++) e += f[t[r]]
        return e
      }
      var h = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 }
      function l(t) {
        return t >= h._0 && t <= h._9
          ? t - h._0
          : t >= h._A && t <= h._F
          ? t - (h._A - 10)
          : t >= h._a && t <= h._f
          ? t - (h._a - 10)
          : void 0
      }
      e.hexToBytes = function(t) {
        if ('string' !== typeof t)
          throw new Error('hex string expected, got ' + typeof t)
        var e = t.length,
          r = e / 2
        if (e % 2)
          throw new Error(
            'padded hex string expected, got unpadded hex of length ' + e
          )
        for (var n = new Uint8Array(r), i = 0, o = 0; i < r; i++, o += 2) {
          var s = l(t.charCodeAt(o)),
            a = l(t.charCodeAt(o + 1))
          if (void 0 === s || void 0 === a) {
            var u = t[o] + t[o + 1]
            throw new Error(
              'hex string expected, got non-hex character "' +
                u +
                '" at index ' +
                o
            )
          }
          n[i] = 16 * s + a
        }
        return n
      }
      var c = (function() {
        var t = s(
          o().mark(function t() {
            return o().wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )
        return function() {
          return t.apply(this, arguments)
        }
      })()
      function d() {
        return (d = s(
          o().mark(function t(r, n, i) {
            var s, a, u
            return o().wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    ;(s = Date.now()), (a = 0)
                  case 2:
                    if (!(a < r)) {
                      t.next = 13
                      break
                    }
                    if ((i(a), !((u = Date.now() - s) >= 0 && u < n))) {
                      t.next = 7
                      break
                    }
                    return t.abrupt('continue', 10)
                  case 7:
                    return (t.next = 9), (0, e.nextTick)()
                  case 9:
                    s += u
                  case 10:
                    a++, (t.next = 2)
                    break
                  case 13:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function p(t) {
        if ('string' !== typeof t)
          throw new Error('utf8ToBytes expected string, got '.concat(typeof t))
        return new Uint8Array(new TextEncoder().encode(t))
      }
      function v(t) {
        if (('string' === typeof t && (t = p(t)), !u(t)))
          throw new Error('expected Uint8Array, got '.concat(typeof t))
        return t
      }
      ;(e.nextTick = c),
        (e.asyncLoop = function(t, e, r) {
          return d.apply(this, arguments)
        }),
        (e.utf8ToBytes = p),
        (e.toBytes = v),
        (e.concatBytes = function() {
          for (var t = 0, e = 0; e < arguments.length; e++) {
            var r = e < 0 || arguments.length <= e ? void 0 : arguments[e]
            if (!u(r)) throw new Error('Uint8Array expected')
            t += r.length
          }
          for (
            var n = new Uint8Array(t), i = 0, o = 0;
            i < arguments.length;
            i++
          ) {
            var s = i < 0 || arguments.length <= i ? void 0 : arguments[i]
            n.set(s, o), (o += s.length)
          }
          return n
        })
      var m = (function() {
        return i(
          function t() {
            n(this, t)
          },
          [
            {
              key: 'clone',
              value: function() {
                return this._cloneInto()
              }
            }
          ]
        )
      })()
      e.Hash = m
      var g = {}.toString
      ;(e.checkOpts = function(t, e) {
        if (void 0 !== e && '[object Object]' !== g.call(e))
          throw new Error('Options should be object or undefined')
        return Object.assign(t, e)
      }),
        (e.wrapConstructor = function(t) {
          var e = function(e) {
              return t()
                .update(v(e))
                .digest()
            },
            r = t()
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = function() {
              return t()
            }),
            e
          )
        }),
        (e.wrapConstructorWithOpts = function(t) {
          var e = function(e, r) {
              return t(r)
                .update(v(e))
                .digest()
            },
            r = t({})
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = function(e) {
              return t(e)
            }),
            e
          )
        }),
        (e.wrapXOFConstructorWithOpts = function(t) {
          var e = function(e, r) {
              return t(r)
                .update(v(e))
                .digest()
            },
            r = t({})
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = function(e) {
              return t(e)
            }),
            e
          )
        }),
        (e.randomBytes = function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32
          if (a.crypto && 'function' === typeof a.crypto.getRandomValues)
            return a.crypto.getRandomValues(new Uint8Array(t))
          throw new Error('crypto.getRandomValues must be defined')
        })
    },
    68323: function(t, e, r) {
      !(function(t, e) {
        'use strict'
        function n(t, e) {
          if (!t) throw new Error(e || 'Assertion failed')
        }
        function i(t, e) {
          t.super_ = e
          var r = function() {}
          ;(r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t)
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t
          ;(this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' !== e && 'be' !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'))
        }
        var s
        'object' === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26)
        try {
          s =
            'undefined' !== typeof window &&
            'undefined' !== typeof window.Buffer
              ? window.Buffer
              : r(45256).Buffer
        } catch (S) {}
        function a(t, e) {
          var r = t.charCodeAt(e)
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, 'Invalid character in ' + t)
        }
        function u(t, e, r) {
          var n = a(t, r)
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n
        }
        function f(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var f = t.charCodeAt(u) - 48
            ;(o *= i),
              (s = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f),
              n(f >= 0 && s < i, 'Invalid character'),
              (o += s)
          }
          return o
        }
        function h(t, e) {
          ;(t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red)
        }
        if (
          ((o.isBN = function(t) {
            return (
              t instanceof o ||
              (null !== t &&
                'object' === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            )
          }),
          (o.max = function(t, e) {
            return t.cmp(e) > 0 ? t : e
          }),
          (o.min = function(t, e) {
            return t.cmp(e) < 0 ? t : e
          }),
          (o.prototype._init = function(t, e, r) {
            if ('number' === typeof t) return this._initNumber(t, e, r)
            if ('object' === typeof t) return this._initArray(t, e, r)
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
            var i = 0
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)))
          }),
          (o.prototype._initNumber = function(t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r)
          }),
          (o.prototype._initArray = function(t, e, r) {
            if ((n('number' === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this
            ;(this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length))
            for (var i = 0; i < this.length; i++) this.words[i] = 0
            var o,
              s,
              a = 0
            if ('be' === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            else if ('le' === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            return this._strip()
          }),
          (o.prototype._parseHex = function(t, e, r) {
            ;(this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length))
            for (var n = 0; n < this.length; n++) this.words[n] = 0
            var i,
              o = 0,
              s = 0
            if ('be' === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            this._strip()
          }),
          (o.prototype._parseBase = function(t, e, r) {
            ;(this.words = [0]), (this.length = 1)
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++
            n--, (i = (i / e) | 0)
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                h = r;
              h < a;
              h += n
            )
              (u = f(t, h, h + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            if (0 !== s) {
              var l = 1
              for (u = f(t, h, t.length, e), h = 0; h < s; h++) l *= e
              this.imuln(l),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            }
            this._strip()
          }),
          (o.prototype.copy = function(t) {
            t.words = new Array(this.length)
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
            ;(t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red)
          }),
          (o.prototype._move = function(t) {
            h(t, this)
          }),
          (o.prototype.clone = function() {
            var t = new o(null)
            return this.copy(t), t
          }),
          (o.prototype._expand = function(t) {
            for (; this.length < t; ) this.words[this.length++] = 0
            return this
          }),
          (o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--
            return this._normSign()
          }),
          (o.prototype._normSign = function() {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            )
          }),
          'undefined' !== typeof Symbol && 'function' === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = l
          } catch (S) {
            o.prototype.inspect = l
          }
        else o.prototype.inspect = l
        function l() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
        }
        var c = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
          ],
          d = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          p = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ]
        ;(o.prototype.toString = function(t, e) {
          var r
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = ''
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16)
              ;(o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? c[6 - u.length] + u + r
                    : u + r)
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var f = d[t],
              h = p[t]
            r = ''
            var l = this.clone()
            for (l.negative = 0; !l.isZero(); ) {
              var v = l.modrn(h).toString(t)
              r = (l = l.idivn(h)).isZero() ? v + r : c[f - v.length] + v + r
            }
            for (this.isZero() && (r = '0' + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          n(!1, 'Base should be between 2 and 36')
        }),
          (o.prototype.toNumber = function() {
            var t = this.words[0]
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            )
          }),
          (o.prototype.toJSON = function() {
            return this.toString(16, 2)
          }),
          s &&
            (o.prototype.toBuffer = function(t, e) {
              return this.toArrayLike(s, t, e)
            }),
          (o.prototype.toArray = function(t, e) {
            return this.toArrayLike(Array, t, e)
          })
        function v(t, e, r) {
          r.negative = e.negative ^ t.negative
          var n = (t.length + e.length) | 0
          ;(r.length = n), (n = (n - 1) | 0)
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0
          r.words[0] = a
          for (var f = 1; f < n; f++) {
            for (
              var h = u >>> 26,
                l = 67108863 & u,
                c = Math.min(f, e.length - 1),
                d = Math.max(0, f - t.length + 1);
              d <= c;
              d++
            ) {
              var p = (f - d) | 0
              ;(h +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + l) /
                  67108864) |
                0),
                (l = 67108863 & s)
            }
            ;(r.words[f] = 0 | l), (u = 0 | h)
          }
          return 0 !== u ? (r.words[f] = 0 | u) : r.length--, r._strip()
        }
        ;(o.prototype.toArrayLike = function(t, e, r) {
          this._strip()
          var i = this.byteLength(),
            o = r || Math.max(1, i)
          n(i <= o, 'byte array longer than desired length'),
            n(o > 0, 'Requested array length <= 0')
          var s = (function(t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
          })(t, o)
          return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s
        }),
          (o.prototype._toArrayLikeLE = function(t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n
              ;(t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0
          }),
          (o.prototype._toArrayLikeBE = function(t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n
              ;(t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0
          }),
          Math.clz32
            ? (o.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
              })
            : (o.prototype._countBits = function(t) {
                var e = t,
                  r = 0
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                )
              }),
          (o.prototype._zeroBits = function(t) {
            if (0 === t) return 26
            var e = t,
              r = 0
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            )
          }),
          (o.prototype.bitLength = function() {
            var t = this.words[this.length - 1],
              e = this._countBits(t)
            return 26 * (this.length - 1) + e
          }),
          (o.prototype.zeroBits = function() {
            if (this.isZero()) return 0
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e])
              if (((t += r), 26 !== r)) break
            }
            return t
          }),
          (o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
          }),
          (o.prototype.toTwos = function(t) {
            return 0 !== this.negative
              ? this.abs()
                  .inotn(t)
                  .iaddn(1)
              : this.clone()
          }),
          (o.prototype.fromTwos = function(t) {
            return this.testn(t - 1)
              ? this.notn(t)
                  .iaddn(1)
                  .ineg()
              : this.clone()
          }),
          (o.prototype.isNeg = function() {
            return 0 !== this.negative
          }),
          (o.prototype.neg = function() {
            return this.clone().ineg()
          }),
          (o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
          }),
          (o.prototype.iuor = function(t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e]
            return this._strip()
          }),
          (o.prototype.ior = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t)
          }),
          (o.prototype.or = function(t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this)
          }),
          (o.prototype.uor = function(t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this)
          }),
          (o.prototype.iuand = function(t) {
            var e
            e = this.length > t.length ? t : this
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.iand = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t)
          }),
          (o.prototype.and = function(t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this)
          }),
          (o.prototype.uand = function(t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this)
          }),
          (o.prototype.iuxor = function(t) {
            var e, r
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this))
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n]
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.ixor = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t)
          }),
          (o.prototype.xor = function(t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this)
          }),
          (o.prototype.uxor = function(t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this)
          }),
          (o.prototype.inotn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = 0 | Math.ceil(t / 26),
              r = t % 26
            this._expand(e), r > 0 && e--
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i]
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            )
          }),
          (o.prototype.notn = function(t) {
            return this.clone().inotn(t)
          }),
          (o.prototype.setn = function(t, e) {
            n('number' === typeof t && t >= 0)
            var r = (t / 26) | 0,
              i = t % 26
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            )
          }),
          (o.prototype.iadd = function(t) {
            var e, r, n
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              )
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              )
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this))
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o]
            return this
          }),
          (o.prototype.add = function(t) {
            var e
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this)
          }),
          (o.prototype.isub = function(t) {
            if (0 !== t.negative) {
              t.negative = 0
              var e = this.iadd(t)
              return (t.negative = 1), e._normSign()
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              )
            var r,
              n,
              i = this.cmp(t)
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              )
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s]
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            )
          }),
          (o.prototype.sub = function(t) {
            return this.clone().isub(t)
          })
        var m = function(t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            f = 0,
            h = 0 | s[0],
            l = 8191 & h,
            c = h >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            v = d >>> 13,
            m = 0 | s[2],
            g = 8191 & m,
            w = m >>> 13,
            y = 0 | s[3],
            b = 8191 & y,
            _ = y >>> 13,
            x = 0 | s[4],
            E = 8191 & x,
            k = x >>> 13,
            B = 0 | s[5],
            A = 8191 & B,
            M = B >>> 13,
            S = 0 | s[6],
            T = 8191 & S,
            I = S >>> 13,
            O = 0 | s[7],
            N = 8191 & O,
            L = O >>> 13,
            R = 0 | s[8],
            P = 8191 & R,
            C = R >>> 13,
            H = 0 | s[9],
            U = 8191 & H,
            F = H >>> 13,
            D = 0 | a[0],
            Z = 8191 & D,
            z = D >>> 13,
            j = 0 | a[1],
            q = 8191 & j,
            K = j >>> 13,
            W = 0 | a[2],
            V = 8191 & W,
            G = W >>> 13,
            Y = 0 | a[3],
            X = 8191 & Y,
            $ = Y >>> 13,
            J = 0 | a[4],
            Q = 8191 & J,
            tt = J >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ft = at >>> 13,
            ht = 0 | a[8],
            lt = 8191 & ht,
            ct = ht >>> 13,
            dt = 0 | a[9],
            pt = 8191 & dt,
            vt = dt >>> 13
          ;(r.negative = t.negative ^ e.negative), (r.length = 19)
          var mt =
            (((f + (n = Math.imul(l, Z))) | 0) +
              ((8191 & (i = ((i = Math.imul(l, z)) + Math.imul(c, Z)) | 0)) <<
                13)) |
            0
          ;(f = ((((o = Math.imul(c, z)) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (n = Math.imul(p, Z)),
            (i = ((i = Math.imul(p, z)) + Math.imul(v, Z)) | 0),
            (o = Math.imul(v, z))
          var gt =
            (((f + (n = (n + Math.imul(l, q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, K)) | 0) + Math.imul(c, q)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, K)) | 0) + (i >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (n = Math.imul(g, Z)),
            (i = ((i = Math.imul(g, z)) + Math.imul(w, Z)) | 0),
            (o = Math.imul(w, z)),
            (n = (n + Math.imul(p, q)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(v, q)) | 0),
            (o = (o + Math.imul(v, K)) | 0)
          var wt =
            (((f + (n = (n + Math.imul(l, V)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, G)) | 0) + Math.imul(c, V)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, G)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(b, Z)),
            (i = ((i = Math.imul(b, z)) + Math.imul(_, Z)) | 0),
            (o = Math.imul(_, z)),
            (n = (n + Math.imul(g, q)) | 0),
            (i = ((i = (i + Math.imul(g, K)) | 0) + Math.imul(w, q)) | 0),
            (o = (o + Math.imul(w, K)) | 0),
            (n = (n + Math.imul(p, V)) | 0),
            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(v, V)) | 0),
            (o = (o + Math.imul(v, G)) | 0)
          var yt =
            (((f + (n = (n + Math.imul(l, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, $)) | 0) + Math.imul(c, X)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, $)) | 0) + (i >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (n = Math.imul(E, Z)),
            (i = ((i = Math.imul(E, z)) + Math.imul(k, Z)) | 0),
            (o = Math.imul(k, z)),
            (n = (n + Math.imul(b, q)) | 0),
            (i = ((i = (i + Math.imul(b, K)) | 0) + Math.imul(_, q)) | 0),
            (o = (o + Math.imul(_, K)) | 0),
            (n = (n + Math.imul(g, V)) | 0),
            (i = ((i = (i + Math.imul(g, G)) | 0) + Math.imul(w, V)) | 0),
            (o = (o + Math.imul(w, G)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(v, X)) | 0),
            (o = (o + Math.imul(v, $)) | 0)
          var bt =
            (((f + (n = (n + Math.imul(l, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, tt)) | 0) + Math.imul(c, Q)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, tt)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(A, Z)),
            (i = ((i = Math.imul(A, z)) + Math.imul(M, Z)) | 0),
            (o = Math.imul(M, z)),
            (n = (n + Math.imul(E, q)) | 0),
            (i = ((i = (i + Math.imul(E, K)) | 0) + Math.imul(k, q)) | 0),
            (o = (o + Math.imul(k, K)) | 0),
            (n = (n + Math.imul(b, V)) | 0),
            (i = ((i = (i + Math.imul(b, G)) | 0) + Math.imul(_, V)) | 0),
            (o = (o + Math.imul(_, G)) | 0),
            (n = (n + Math.imul(g, X)) | 0),
            (i = ((i = (i + Math.imul(g, $)) | 0) + Math.imul(w, X)) | 0),
            (o = (o + Math.imul(w, $)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(v, Q)) | 0),
            (o = (o + Math.imul(v, tt)) | 0)
          var _t =
            (((f + (n = (n + Math.imul(l, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, nt)) | 0) + Math.imul(c, rt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, nt)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(T, Z)),
            (i = ((i = Math.imul(T, z)) + Math.imul(I, Z)) | 0),
            (o = Math.imul(I, z)),
            (n = (n + Math.imul(A, q)) | 0),
            (i = ((i = (i + Math.imul(A, K)) | 0) + Math.imul(M, q)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(E, V)) | 0),
            (i = ((i = (i + Math.imul(E, G)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, G)) | 0),
            (n = (n + Math.imul(b, X)) | 0),
            (i = ((i = (i + Math.imul(b, $)) | 0) + Math.imul(_, X)) | 0),
            (o = (o + Math.imul(_, $)) | 0),
            (n = (n + Math.imul(g, Q)) | 0),
            (i = ((i = (i + Math.imul(g, tt)) | 0) + Math.imul(w, Q)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (n = (n + Math.imul(p, rt)) | 0),
            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(v, rt)) | 0),
            (o = (o + Math.imul(v, nt)) | 0)
          var xt =
            (((f + (n = (n + Math.imul(l, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, st)) | 0) + Math.imul(c, ot)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, st)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (n = Math.imul(N, Z)),
            (i = ((i = Math.imul(N, z)) + Math.imul(L, Z)) | 0),
            (o = Math.imul(L, z)),
            (n = (n + Math.imul(T, q)) | 0),
            (i = ((i = (i + Math.imul(T, K)) | 0) + Math.imul(I, q)) | 0),
            (o = (o + Math.imul(I, K)) | 0),
            (n = (n + Math.imul(A, V)) | 0),
            (i = ((i = (i + Math.imul(A, G)) | 0) + Math.imul(M, V)) | 0),
            (o = (o + Math.imul(M, G)) | 0),
            (n = (n + Math.imul(E, X)) | 0),
            (i = ((i = (i + Math.imul(E, $)) | 0) + Math.imul(k, X)) | 0),
            (o = (o + Math.imul(k, $)) | 0),
            (n = (n + Math.imul(b, Q)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(g, rt)) | 0),
            (i = ((i = (i + Math.imul(g, nt)) | 0) + Math.imul(w, rt)) | 0),
            (o = (o + Math.imul(w, nt)) | 0),
            (n = (n + Math.imul(p, ot)) | 0),
            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(v, ot)) | 0),
            (o = (o + Math.imul(v, st)) | 0)
          var Et =
            (((f + (n = (n + Math.imul(l, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, ft)) | 0) + Math.imul(c, ut)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, ft)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(P, Z)),
            (i = ((i = Math.imul(P, z)) + Math.imul(C, Z)) | 0),
            (o = Math.imul(C, z)),
            (n = (n + Math.imul(N, q)) | 0),
            (i = ((i = (i + Math.imul(N, K)) | 0) + Math.imul(L, q)) | 0),
            (o = (o + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(T, V)) | 0),
            (i = ((i = (i + Math.imul(T, G)) | 0) + Math.imul(I, V)) | 0),
            (o = (o + Math.imul(I, G)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, $)) | 0) + Math.imul(M, X)) | 0),
            (o = (o + Math.imul(M, $)) | 0),
            (n = (n + Math.imul(E, Q)) | 0),
            (i = ((i = (i + Math.imul(E, tt)) | 0) + Math.imul(k, Q)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(b, rt)) | 0),
            (i = ((i = (i + Math.imul(b, nt)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, nt)) | 0),
            (n = (n + Math.imul(g, ot)) | 0),
            (i = ((i = (i + Math.imul(g, st)) | 0) + Math.imul(w, ot)) | 0),
            (o = (o + Math.imul(w, st)) | 0),
            (n = (n + Math.imul(p, ut)) | 0),
            (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(v, ut)) | 0),
            (o = (o + Math.imul(v, ft)) | 0)
          var kt =
            (((f + (n = (n + Math.imul(l, lt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, ct)) | 0) + Math.imul(c, lt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, ct)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(U, Z)),
            (i = ((i = Math.imul(U, z)) + Math.imul(F, Z)) | 0),
            (o = Math.imul(F, z)),
            (n = (n + Math.imul(P, q)) | 0),
            (i = ((i = (i + Math.imul(P, K)) | 0) + Math.imul(C, q)) | 0),
            (o = (o + Math.imul(C, K)) | 0),
            (n = (n + Math.imul(N, V)) | 0),
            (i = ((i = (i + Math.imul(N, G)) | 0) + Math.imul(L, V)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (n = (n + Math.imul(T, X)) | 0),
            (i = ((i = (i + Math.imul(T, $)) | 0) + Math.imul(I, X)) | 0),
            (o = (o + Math.imul(I, $)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(E, rt)) | 0),
            (i = ((i = (i + Math.imul(E, nt)) | 0) + Math.imul(k, rt)) | 0),
            (o = (o + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(b, ot)) | 0),
            (i = ((i = (i + Math.imul(b, st)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, st)) | 0),
            (n = (n + Math.imul(g, ut)) | 0),
            (i = ((i = (i + Math.imul(g, ft)) | 0) + Math.imul(w, ut)) | 0),
            (o = (o + Math.imul(w, ft)) | 0),
            (n = (n + Math.imul(p, lt)) | 0),
            (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(v, lt)) | 0),
            (o = (o + Math.imul(v, ct)) | 0)
          var Bt =
            (((f + (n = (n + Math.imul(l, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(l, vt)) | 0) + Math.imul(c, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(c, vt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(U, q)),
            (i = ((i = Math.imul(U, K)) + Math.imul(F, q)) | 0),
            (o = Math.imul(F, K)),
            (n = (n + Math.imul(P, V)) | 0),
            (i = ((i = (i + Math.imul(P, G)) | 0) + Math.imul(C, V)) | 0),
            (o = (o + Math.imul(C, G)) | 0),
            (n = (n + Math.imul(N, X)) | 0),
            (i = ((i = (i + Math.imul(N, $)) | 0) + Math.imul(L, X)) | 0),
            (o = (o + Math.imul(L, $)) | 0),
            (n = (n + Math.imul(T, Q)) | 0),
            (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(I, Q)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(M, rt)) | 0),
            (o = (o + Math.imul(M, nt)) | 0),
            (n = (n + Math.imul(E, ot)) | 0),
            (i = ((i = (i + Math.imul(E, st)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, st)) | 0),
            (n = (n + Math.imul(b, ut)) | 0),
            (i = ((i = (i + Math.imul(b, ft)) | 0) + Math.imul(_, ut)) | 0),
            (o = (o + Math.imul(_, ft)) | 0),
            (n = (n + Math.imul(g, lt)) | 0),
            (i = ((i = (i + Math.imul(g, ct)) | 0) + Math.imul(w, lt)) | 0),
            (o = (o + Math.imul(w, ct)) | 0)
          var At =
            (((f + (n = (n + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, vt)) | 0) + Math.imul(v, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(v, vt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(U, V)),
            (i = ((i = Math.imul(U, G)) + Math.imul(F, V)) | 0),
            (o = Math.imul(F, G)),
            (n = (n + Math.imul(P, X)) | 0),
            (i = ((i = (i + Math.imul(P, $)) | 0) + Math.imul(C, X)) | 0),
            (o = (o + Math.imul(C, $)) | 0),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(T, rt)) | 0),
            (i = ((i = (i + Math.imul(T, nt)) | 0) + Math.imul(I, rt)) | 0),
            (o = (o + Math.imul(I, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(M, ot)) | 0),
            (o = (o + Math.imul(M, st)) | 0),
            (n = (n + Math.imul(E, ut)) | 0),
            (i = ((i = (i + Math.imul(E, ft)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, ft)) | 0),
            (n = (n + Math.imul(b, lt)) | 0),
            (i = ((i = (i + Math.imul(b, ct)) | 0) + Math.imul(_, lt)) | 0),
            (o = (o + Math.imul(_, ct)) | 0)
          var Mt =
            (((f + (n = (n + Math.imul(g, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(g, vt)) | 0) + Math.imul(w, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(w, vt)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(U, X)),
            (i = ((i = Math.imul(U, $)) + Math.imul(F, X)) | 0),
            (o = Math.imul(F, $)),
            (n = (n + Math.imul(P, Q)) | 0),
            (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(C, Q)) | 0),
            (o = (o + Math.imul(C, tt)) | 0),
            (n = (n + Math.imul(N, rt)) | 0),
            (i = ((i = (i + Math.imul(N, nt)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, nt)) | 0),
            (n = (n + Math.imul(T, ot)) | 0),
            (i = ((i = (i + Math.imul(T, st)) | 0) + Math.imul(I, ot)) | 0),
            (o = (o + Math.imul(I, st)) | 0),
            (n = (n + Math.imul(A, ut)) | 0),
            (i = ((i = (i + Math.imul(A, ft)) | 0) + Math.imul(M, ut)) | 0),
            (o = (o + Math.imul(M, ft)) | 0),
            (n = (n + Math.imul(E, lt)) | 0),
            (i = ((i = (i + Math.imul(E, ct)) | 0) + Math.imul(k, lt)) | 0),
            (o = (o + Math.imul(k, ct)) | 0)
          var St =
            (((f + (n = (n + Math.imul(b, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, vt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(_, vt)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(U, Q)),
            (i = ((i = Math.imul(U, tt)) + Math.imul(F, Q)) | 0),
            (o = Math.imul(F, tt)),
            (n = (n + Math.imul(P, rt)) | 0),
            (i = ((i = (i + Math.imul(P, nt)) | 0) + Math.imul(C, rt)) | 0),
            (o = (o + Math.imul(C, nt)) | 0),
            (n = (n + Math.imul(N, ot)) | 0),
            (i = ((i = (i + Math.imul(N, st)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, st)) | 0),
            (n = (n + Math.imul(T, ut)) | 0),
            (i = ((i = (i + Math.imul(T, ft)) | 0) + Math.imul(I, ut)) | 0),
            (o = (o + Math.imul(I, ft)) | 0),
            (n = (n + Math.imul(A, lt)) | 0),
            (i = ((i = (i + Math.imul(A, ct)) | 0) + Math.imul(M, lt)) | 0),
            (o = (o + Math.imul(M, ct)) | 0)
          var Tt =
            (((f + (n = (n + Math.imul(E, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(E, vt)) | 0) + Math.imul(k, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(k, vt)) | 0) + (i >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (n = Math.imul(U, rt)),
            (i = ((i = Math.imul(U, nt)) + Math.imul(F, rt)) | 0),
            (o = Math.imul(F, nt)),
            (n = (n + Math.imul(P, ot)) | 0),
            (i = ((i = (i + Math.imul(P, st)) | 0) + Math.imul(C, ot)) | 0),
            (o = (o + Math.imul(C, st)) | 0),
            (n = (n + Math.imul(N, ut)) | 0),
            (i = ((i = (i + Math.imul(N, ft)) | 0) + Math.imul(L, ut)) | 0),
            (o = (o + Math.imul(L, ft)) | 0),
            (n = (n + Math.imul(T, lt)) | 0),
            (i = ((i = (i + Math.imul(T, ct)) | 0) + Math.imul(I, lt)) | 0),
            (o = (o + Math.imul(I, ct)) | 0)
          var It =
            (((f + (n = (n + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, vt)) | 0) + Math.imul(M, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(M, vt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(U, ot)),
            (i = ((i = Math.imul(U, st)) + Math.imul(F, ot)) | 0),
            (o = Math.imul(F, st)),
            (n = (n + Math.imul(P, ut)) | 0),
            (i = ((i = (i + Math.imul(P, ft)) | 0) + Math.imul(C, ut)) | 0),
            (o = (o + Math.imul(C, ft)) | 0),
            (n = (n + Math.imul(N, lt)) | 0),
            (i = ((i = (i + Math.imul(N, ct)) | 0) + Math.imul(L, lt)) | 0),
            (o = (o + Math.imul(L, ct)) | 0)
          var Ot =
            (((f + (n = (n + Math.imul(T, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(T, vt)) | 0) + Math.imul(I, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(I, vt)) | 0) + (i >>> 13)) | 0) +
              (Ot >>> 26)) |
            0),
            (Ot &= 67108863),
            (n = Math.imul(U, ut)),
            (i = ((i = Math.imul(U, ft)) + Math.imul(F, ut)) | 0),
            (o = Math.imul(F, ft)),
            (n = (n + Math.imul(P, lt)) | 0),
            (i = ((i = (i + Math.imul(P, ct)) | 0) + Math.imul(C, lt)) | 0),
            (o = (o + Math.imul(C, ct)) | 0)
          var Nt =
            (((f + (n = (n + Math.imul(N, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, vt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(L, vt)) | 0) + (i >>> 13)) | 0) +
              (Nt >>> 26)) |
            0),
            (Nt &= 67108863),
            (n = Math.imul(U, lt)),
            (i = ((i = Math.imul(U, ct)) + Math.imul(F, lt)) | 0),
            (o = Math.imul(F, ct))
          var Lt =
            (((f + (n = (n + Math.imul(P, pt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, vt)) | 0) + Math.imul(C, pt)) | 0)) <<
                13)) |
            0
          ;(f =
            ((((o = (o + Math.imul(C, vt)) | 0) + (i >>> 13)) | 0) +
              (Lt >>> 26)) |
            0),
            (Lt &= 67108863)
          var Rt =
            (((f + (n = Math.imul(U, pt))) | 0) +
              ((8191 & (i = ((i = Math.imul(U, vt)) + Math.imul(F, pt)) | 0)) <<
                13)) |
            0
          return (
            (f =
              ((((o = Math.imul(F, vt)) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (u[0] = mt),
            (u[1] = gt),
            (u[2] = wt),
            (u[3] = yt),
            (u[4] = bt),
            (u[5] = _t),
            (u[6] = xt),
            (u[7] = Et),
            (u[8] = kt),
            (u[9] = Bt),
            (u[10] = At),
            (u[11] = Mt),
            (u[12] = St),
            (u[13] = Tt),
            (u[14] = It),
            (u[15] = Ot),
            (u[16] = Nt),
            (u[17] = Lt),
            (u[18] = Rt),
            0 !== f && ((u[19] = f), r.length++),
            r
          )
        }
        function g(t, e, r) {
          ;(r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length)
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i
            i = 0
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                f = Math.max(0, o - t.length + 1);
              f <= u;
              f++
            ) {
              var h = o - f,
                l = (0 | t.words[h]) * (0 | e.words[f]),
                c = 67108863 & l
              ;(a = 67108863 & (c = (c + a) | 0)),
                (i +=
                  (s =
                    ((s = (s + ((l / 67108864) | 0)) | 0) + (c >>> 26)) | 0) >>>
                  26),
                (s &= 67108863)
            }
            ;(r.words[o] = a), (n = s), (s = i)
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip()
        }
        function w(t, e, r) {
          return g(t, e, r)
        }
        function y(t, e) {
          ;(this.x = t), (this.y = e)
        }
        Math.imul || (m = v),
          (o.prototype.mulTo = function(t, e) {
            var r = this.length + t.length
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : r < 63
              ? v(this, t, e)
              : r < 1024
              ? g(this, t, e)
              : w(this, t, e)
          }),
          (y.prototype.makeRBT = function(t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t)
            return e
          }),
          (y.prototype.revBin = function(t, e, r) {
            if (0 === t || t === r - 1) return t
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1)
            return n
          }),
          (y.prototype.permute = function(t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
          }),
          (y.prototype.transform = function(t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i)
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  f = Math.sin((2 * Math.PI) / a),
                  h = 0;
                h < i;
                h += a
              )
                for (var l = u, c = f, d = 0; d < s; d++) {
                  var p = r[h + d],
                    v = n[h + d],
                    m = r[h + d + s],
                    g = n[h + d + s],
                    w = l * m - c * g
                  ;(g = l * g + c * m),
                    (m = w),
                    (r[h + d] = p + m),
                    (n[h + d] = v + g),
                    (r[h + d + s] = p - m),
                    (n[h + d + s] = v - g),
                    d !== a &&
                      ((w = u * l - f * c), (c = u * c + f * l), (l = w))
                }
          }),
          (y.prototype.guessLen13b = function(t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0
            for (r = (r / 2) | 0; r; r >>>= 1) i++
            return 1 << (i + 1 + n)
          }),
          (y.prototype.conjugate = function(t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n]
                ;(t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i)
              }
          }),
          (y.prototype.normalize13b = function(t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r
              ;(t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0)
            }
            return t
          }),
          (y.prototype.convert13b = function(t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13)
            for (s = 2 * e; s < i; ++s) r[s] = 0
            n(0 === o), n(0 === (-8192 & o))
          }),
          (y.prototype.stub = function(t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
            return e
          }),
          (y.prototype.mulp = function(t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              f = new Array(n),
              h = new Array(n),
              l = new Array(n),
              c = r.words
            ;(c.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, f, n),
              this.transform(s, o, a, u, n, i),
              this.transform(f, o, h, l, n, i)
            for (var d = 0; d < n; d++) {
              var p = a[d] * h[d] - u[d] * l[d]
              ;(u[d] = a[d] * l[d] + u[d] * h[d]), (a[d] = p)
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, c, o, n, i),
              this.conjugate(c, o, n),
              this.normalize13b(c, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            )
          }),
          (o.prototype.mul = function(t) {
            var e = new o(null)
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            )
          }),
          (o.prototype.mulf = function(t) {
            var e = new o(null)
            return (e.words = new Array(this.length + t.length)), w(this, t, e)
          }),
          (o.prototype.imul = function(t) {
            return this.clone().mulTo(t, this)
          }),
          (o.prototype.imuln = function(t) {
            var e = t < 0
            e && (t = -t), n('number' === typeof t), n(t < 67108864)
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r)
              ;(r >>= 26),
                (r += (o / 67108864) | 0),
                (r += s >>> 26),
                (this.words[i] = 67108863 & s)
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            )
          }),
          (o.prototype.muln = function(t) {
            return this.clone().imuln(t)
          }),
          (o.prototype.sqr = function() {
            return this.mul(this)
          }),
          (o.prototype.isqr = function() {
            return this.imul(this.clone())
          }),
          (o.prototype.pow = function(t) {
            var e = (function(t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26
                e[r] = (t.words[n] >>> i) & 1
              }
              return e
            })(t)
            if (0 === e.length) return new o(1)
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i))
            return r
          }),
          (o.prototype.iushln = function(t) {
            n('number' === typeof t && t >= 0)
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r)
            if (0 !== r) {
              var s = 0
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r
                ;(this.words[e] = u | s), (s = a >>> (26 - r))
              }
              s && ((this.words[e] = s), this.length++)
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e]
              for (e = 0; e < i; e++) this.words[e] = 0
              this.length += i
            }
            return this._strip()
          }),
          (o.prototype.ishln = function(t) {
            return n(0 === this.negative), this.iushln(t)
          }),
          (o.prototype.iushrn = function(t, e, r) {
            var i
            n('number' === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0)
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var f = 0; f < s; f++) u.words[f] = this.words[f]
              u.length = s
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, f = 0; f < this.length; f++)
                this.words[f] = this.words[f + s]
            else (this.words[0] = 0), (this.length = 1)
            var h = 0
            for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
              var l = 0 | this.words[f]
              ;(this.words[f] = (h << (26 - o)) | (l >>> o)), (h = l & a)
            }
            return (
              u && 0 !== h && (u.words[u.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            )
          }),
          (o.prototype.ishrn = function(t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r)
          }),
          (o.prototype.shln = function(t) {
            return this.clone().ishln(t)
          }),
          (o.prototype.ushln = function(t) {
            return this.clone().iushln(t)
          }),
          (o.prototype.shrn = function(t) {
            return this.clone().ishrn(t)
          }),
          (o.prototype.ushrn = function(t) {
            return this.clone().iushrn(t)
          }),
          (o.prototype.testn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            return !(this.length <= r) && !!(this.words[r] & i)
          }),
          (o.prototype.imaskn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26
            if (
              (n(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= r)
            )
              return this
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e)
              this.words[this.length - 1] &= i
            }
            return this._strip()
          }),
          (o.prototype.maskn = function(t) {
            return this.clone().imaskn(t)
          }),
          (o.prototype.iaddn = function(t) {
            return (
              n('number' === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            )
          }),
          (o.prototype._iaddn = function(t) {
            this.words[0] += t
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++
            return (this.length = Math.max(this.length, e + 1)), this
          }),
          (o.prototype.isubn = function(t) {
            if ((n('number' === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t)
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              )
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1)
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1)
            return this._strip()
          }),
          (o.prototype.addn = function(t) {
            return this.clone().iaddn(t)
          }),
          (o.prototype.subn = function(t) {
            return this.clone().isubn(t)
          }),
          (o.prototype.iabs = function() {
            return (this.negative = 0), this
          }),
          (o.prototype.abs = function() {
            return this.clone().iabs()
          }),
          (o.prototype._ishlnsubmul = function(t, e, r) {
            var i,
              o,
              s = t.length + r
            this._expand(s)
            var a = 0
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a
              var u = (0 | t.words[i]) * e
              ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o)
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o)
            if (0 === a) return this._strip()
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o)
            return (this.negative = 1), this._strip()
          }),
          (o.prototype._wordDiv = function(t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1]
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
            var a,
              u = n.length - i.length
            if ('mod' !== e) {
              ;((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length))
              for (var f = 0; f < a.length; f++) a.words[f] = 0
            }
            var h = n.clone()._ishlnsubmul(i, 1, u)
            0 === h.negative && ((n = h), a && (a.words[u] = 1))
            for (var l = u - 1; l >= 0; l--) {
              var c =
                67108864 * (0 | n.words[i.length + l]) +
                (0 | n.words[i.length + l - 1])
              for (
                c = Math.min((c / s) | 0, 67108863), n._ishlnsubmul(i, c, l);
                0 !== n.negative;

              )
                c--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, l),
                  n.isZero() || (n.negative ^= 1)
              a && (a.words[l] = c)
            }
            return (
              a && a._strip(),
              n._strip(),
              'div' !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            )
          }),
          (o.prototype.divmod = function(t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  'mod' !== e && (i = a.div.neg()),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  'mod' !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? 'div' === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : 'mod' === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0]))
                    }
                : this._wordDiv(t, e)
            )
            var i, s, a
          }),
          (o.prototype.div = function(t) {
            return this.divmod(t, 'div', !1).div
          }),
          (o.prototype.mod = function(t) {
            return this.divmod(t, 'mod', !1).mod
          }),
          (o.prototype.umod = function(t) {
            return this.divmod(t, 'mod', !0).mod
          }),
          (o.prototype.divRound = function(t) {
            var e = this.divmod(t)
            if (e.mod.isZero()) return e.div
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n)
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1)
          }),
          (o.prototype.modrn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t
            return e ? -i : i
          }),
          (o.prototype.modn = function(t) {
            return this.modrn(t)
          }),
          (o.prototype.idivn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r
              ;(this.words[i] = (o / t) | 0), (r = o % t)
            }
            return this._strip(), e ? this.ineg() : this
          }),
          (o.prototype.divn = function(t) {
            return this.clone().idivn(t)
          }),
          (o.prototype.egcd = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), f = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++f
            for (var h = r.clone(), l = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, d = 1;
                0 === (e.words[0] & d) && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)),
                    i.iushrn(1),
                    s.iushrn(1)
              for (
                var p = 0, v = 1;
                0 === (r.words[0] & v) && p < 26;
                ++p, v <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(l)),
                    a.iushrn(1),
                    u.iushrn(1)
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s))
            }
            return { a: a, b: u, gcd: r.iushln(f) }
          }),
          (o.prototype._invmp = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var f = 0, h = 1;
                0 === (e.words[0] & h) && f < 26;
                ++f, h <<= 1
              );
              if (f > 0)
                for (e.iushrn(f); f-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
              for (
                var l = 0, c = 1;
                0 === (r.words[0] & c) && l < 26;
                ++l, c <<= 1
              );
              if (l > 0)
                for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
          }),
          (o.prototype.gcd = function(t) {
            if (this.isZero()) return t.abs()
            if (t.isZero()) return this.abs()
            var e = this.clone(),
              r = t.clone()
            ;(e.negative = 0), (r.negative = 0)
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1)
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1)
              for (; r.isEven(); ) r.iushrn(1)
              var i = e.cmp(r)
              if (i < 0) {
                var o = e
                ;(e = r), (r = o)
              } else if (0 === i || 0 === r.cmpn(1)) break
              e.isub(r)
            }
            return r.iushln(n)
          }),
          (o.prototype.invm = function(t) {
            return this.egcd(t).a.umod(t)
          }),
          (o.prototype.isEven = function() {
            return 0 === (1 & this.words[0])
          }),
          (o.prototype.isOdd = function() {
            return 1 === (1 & this.words[0])
          }),
          (o.prototype.andln = function(t) {
            return this.words[0] & t
          }),
          (o.prototype.bincn = function(t) {
            n('number' === typeof t)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s]
              ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this
          }),
          (o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
          }),
          (o.prototype.cmpn = function(t) {
            var e,
              r = t < 0
            if (0 !== this.negative && !r) return -1
            if (0 === this.negative && r) return 1
            if ((this._strip(), this.length > 1)) e = 1
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big')
              var i = 0 | this.words[0]
              e = i === t ? 0 : i < t ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.cmp = function(t) {
            if (0 !== this.negative && 0 === t.negative) return -1
            if (0 === this.negative && 0 !== t.negative) return 1
            var e = this.ucmp(t)
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.ucmp = function(t) {
            if (this.length > t.length) return 1
            if (this.length < t.length) return -1
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r]
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1)
                break
              }
            }
            return e
          }),
          (o.prototype.gtn = function(t) {
            return 1 === this.cmpn(t)
          }),
          (o.prototype.gt = function(t) {
            return 1 === this.cmp(t)
          }),
          (o.prototype.gten = function(t) {
            return this.cmpn(t) >= 0
          }),
          (o.prototype.gte = function(t) {
            return this.cmp(t) >= 0
          }),
          (o.prototype.ltn = function(t) {
            return -1 === this.cmpn(t)
          }),
          (o.prototype.lt = function(t) {
            return -1 === this.cmp(t)
          }),
          (o.prototype.lten = function(t) {
            return this.cmpn(t) <= 0
          }),
          (o.prototype.lte = function(t) {
            return this.cmp(t) <= 0
          }),
          (o.prototype.eqn = function(t) {
            return 0 === this.cmpn(t)
          }),
          (o.prototype.eq = function(t) {
            return 0 === this.cmp(t)
          }),
          (o.red = function(t) {
            return new A(t)
          }),
          (o.prototype.toRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            )
          }),
          (o.prototype.fromRed = function() {
            return (
              n(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            )
          }),
          (o.prototype._forceRed = function(t) {
            return (this.red = t), this
          }),
          (o.prototype.forceRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              this._forceRed(t)
            )
          }),
          (o.prototype.redAdd = function(t) {
            return (
              n(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            )
          }),
          (o.prototype.redIAdd = function(t) {
            return (
              n(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            )
          }),
          (o.prototype.redSub = function(t) {
            return (
              n(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            )
          }),
          (o.prototype.redISub = function(t) {
            return (
              n(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            )
          }),
          (o.prototype.redShl = function(t) {
            return (
              n(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            )
          }),
          (o.prototype.redMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            )
          }),
          (o.prototype.redIMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            )
          }),
          (o.prototype.redSqr = function() {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            )
          }),
          (o.prototype.redISqr = function() {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            )
          }),
          (o.prototype.redSqrt = function() {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            )
          }),
          (o.prototype.redInvm = function() {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            )
          }),
          (o.prototype.redNeg = function() {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            )
          }),
          (o.prototype.redPow = function(t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            )
          })
        var b = { k256: null, p224: null, p192: null, p25519: null }
        function _(t, e) {
          ;(this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp())
        }
        function x() {
          _.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          )
        }
        function E() {
          _.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          )
        }
        function k() {
          _.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          )
        }
        function B() {
          _.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          )
        }
        function A(t) {
          if ('string' === typeof t) {
            var e = o._prime(t)
            ;(this.m = e.p), (this.prime = e)
          } else
            n(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null)
        }
        function M(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv
              .mul(this.r)
              .isubn(1)
              .div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv))
        }
        ;(_.prototype._tmp = function() {
          var t = new o(null)
          return (t.words = new Array(Math.ceil(this.n / 13))), t
        }),
          (_.prototype.ireduce = function(t) {
            var e,
              r = t
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
            } while (e > this.n)
            var n = e < this.n ? -1 : r.ucmp(this.p)
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            )
          }),
          (_.prototype.split = function(t, e) {
            t.iushrn(this.n, 0, e)
          }),
          (_.prototype.imulK = function(t) {
            return t.imul(this.k)
          }),
          i(x, _),
          (x.prototype.split = function(t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i]
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1)
            var o = t.words[9]
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i]
              ;(t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s)
            }
            ;(o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
          }),
          (x.prototype.imulK = function(t) {
            ;(t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2)
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r]
              ;(e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0))
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            )
          }),
          i(E, _),
          i(k, _),
          i(B, _),
          (B.prototype.imulK = function(t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n
              ;(n >>>= 26), (t.words[r] = i), (e = n)
            }
            return 0 !== e && (t.words[t.length++] = e), t
          }),
          (o._prime = function(t) {
            if (b[t]) return b[t]
            var e
            if ('k256' === t) e = new x()
            else if ('p224' === t) e = new E()
            else if ('p192' === t) e = new k()
            else {
              if ('p25519' !== t) throw new Error('Unknown prime ' + t)
              e = new B()
            }
            return (b[t] = e), e
          }),
          (A.prototype._verify1 = function(t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers')
          }),
          (A.prototype._verify2 = function(t, e) {
            n(0 === (t.negative | e.negative), 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers')
          }),
          (A.prototype.imod = function(t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (h(t, t.umod(this.m)._forceRed(this)), t)
          }),
          (A.prototype.neg = function(t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
          }),
          (A.prototype.add = function(t, e) {
            this._verify2(t, e)
            var r = t.add(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
          }),
          (A.prototype.iadd = function(t, e) {
            this._verify2(t, e)
            var r = t.iadd(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
          }),
          (A.prototype.sub = function(t, e) {
            this._verify2(t, e)
            var r = t.sub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
          }),
          (A.prototype.isub = function(t, e) {
            this._verify2(t, e)
            var r = t.isub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r
          }),
          (A.prototype.shl = function(t, e) {
            return this._verify1(t), this.imod(t.ushln(e))
          }),
          (A.prototype.imul = function(t, e) {
            return this._verify2(t, e), this.imod(t.imul(e))
          }),
          (A.prototype.mul = function(t, e) {
            return this._verify2(t, e), this.imod(t.mul(e))
          }),
          (A.prototype.isqr = function(t) {
            return this.imul(t, t.clone())
          }),
          (A.prototype.sqr = function(t) {
            return this.mul(t, t)
          }),
          (A.prototype.sqrt = function(t) {
            if (t.isZero()) return t.clone()
            var e = this.m.andln(3)
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2)
              return this.pow(t, r)
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1)
            n(!i.isZero())
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              f = this.m.subn(1).iushrn(1),
              h = this.m.bitLength()
            for (
              h = new o(2 * h * h).toRed(this);
              0 !== this.pow(h, f).cmp(u);

            )
              h.redIAdd(u)
            for (
              var l = this.pow(h, i),
                c = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var v = d, m = 0; 0 !== v.cmp(a); m++) v = v.redSqr()
              n(m < p)
              var g = this.pow(l, new o(1).iushln(p - m - 1))
              ;(c = c.redMul(g)), (l = g.redSqr()), (d = d.redMul(l)), (p = m)
            }
            return c
          }),
          (A.prototype.invm = function(t) {
            var e = t._invmp(this.m)
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e)
          }),
          (A.prototype.pow = function(t, e) {
            if (e.isZero()) return new o(1).toRed(this)
            if (0 === e.cmpn(1)) return t.clone()
            var r = new Array(16)
            ;(r[0] = new o(1).toRed(this)), (r[1] = t)
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var f = e.words[n], h = u - 1; h >= 0; h--) {
                var l = (f >> h) & 1
                i !== r[0] && (i = this.sqr(i)),
                  0 !== l || 0 !== s
                    ? ((s <<= 1),
                      (s |= l),
                      (4 === ++a || (0 === n && 0 === h)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0)
              }
              u = 26
            }
            return i
          }),
          (A.prototype.convertTo = function(t) {
            var e = t.umod(this.m)
            return e === t ? e.clone() : e
          }),
          (A.prototype.convertFrom = function(t) {
            var e = t.clone()
            return (e.red = null), e
          }),
          (o.mont = function(t) {
            return new M(t)
          }),
          i(M, A),
          (M.prototype.convertTo = function(t) {
            return this.imod(t.ushln(this.shift))
          }),
          (M.prototype.convertFrom = function(t) {
            var e = this.imod(t.mul(this.rinv))
            return (e.red = null), e
          }),
          (M.prototype.imul = function(t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            )
          }),
          (M.prototype.mul = function(t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            )
          }),
          (M.prototype.invm = function(t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
          })
      })((t = r.nmd(t)), this)
    },
    56836: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.keccak512 = e.keccak384 = e.keccak256 = e.keccak224 = void 0)
      var n = r(67138),
        i = r(73785)
      ;(e.keccak224 = (0, i.wrapHash)(n.keccak_224)),
        (e.keccak256 = (function() {
          var t = (0, i.wrapHash)(n.keccak_256)
          return (t.create = n.keccak_256.create), t
        })()),
        (e.keccak384 = (0, i.wrapHash)(n.keccak_384)),
        (e.keccak512 = (0, i.wrapHash)(n.keccak_512))
    },
    73785: function(t, e, r) {
      'use strict'
      t = r.nmd(t)
      var n =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t }
        }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.crypto = e.wrapHash = e.equalsBytes = e.hexToBytes = e.bytesToUtf8 = e.utf8ToBytes = e.createView = e.concatBytes = e.toHex = e.bytesToHex = e.assertBytes = e.assertBool = void 0)
      var i = n(r(87250)),
        o = r(30684),
        s = i.default.bool
      e.assertBool = s
      var a = i.default.bytes
      e.assertBytes = a
      var u = r(30684)
      Object.defineProperty(e, 'bytesToHex', {
        enumerable: !0,
        get: function() {
          return u.bytesToHex
        }
      }),
        Object.defineProperty(e, 'toHex', {
          enumerable: !0,
          get: function() {
            return u.bytesToHex
          }
        }),
        Object.defineProperty(e, 'concatBytes', {
          enumerable: !0,
          get: function() {
            return u.concatBytes
          }
        }),
        Object.defineProperty(e, 'createView', {
          enumerable: !0,
          get: function() {
            return u.createView
          }
        }),
        Object.defineProperty(e, 'utf8ToBytes', {
          enumerable: !0,
          get: function() {
            return u.utf8ToBytes
          }
        }),
        (e.bytesToUtf8 = function(t) {
          if (!(t instanceof Uint8Array))
            throw new TypeError(
              'bytesToUtf8 expected Uint8Array, got '.concat(typeof t)
            )
          return new TextDecoder().decode(t)
        }),
        (e.hexToBytes = function(t) {
          var e = t.startsWith('0x') ? t.substring(2) : t
          return (0, o.hexToBytes)(e)
        }),
        (e.equalsBytes = function(t, e) {
          if (t.length !== e.length) return !1
          for (var r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1
          return !0
        }),
        (e.wrapHash = function(t) {
          return function(e) {
            return i.default.bytes(e), t(e)
          }
        }),
        (e.crypto = (function() {
          var e =
              'object' === typeof globalThis && 'crypto' in globalThis
                ? globalThis.crypto
                : void 0,
            r = 'function' === typeof t.require && t.require.bind(t)
          return { node: r && !e ? r('crypto') : void 0, web: e }
        })())
    },
    12901: function(t, e, r) {
      var n = r(93797),
        i = r(99648),
        o = r(32883),
        s = r(15838),
        a = r(68323),
        u = function t(e, r) {
          var n = []
          return (
            r.forEach(function(r) {
              if ('object' === typeof r.components) {
                if ('tuple' !== r.type.substring(0, 5))
                  throw new Error(
                    'components found but type is not tuple; report on GitHub'
                  )
                var i = '',
                  o = r.type.indexOf('[')
                o >= 0 && (i = r.type.substring(o))
                var s = t(e, r.components)
                Array.isArray(s) && e
                  ? n.push('tuple(' + s.join(',') + ')' + i)
                  : e
                  ? n.push('(' + s + ')')
                  : n.push('(' + s.join(',') + ')' + i)
              } else n.push(r.type)
            }),
            n
          )
        },
        f = function(t) {
          if (!i.isHexStrict(t))
            throw new Error('The parameter must be a valid HEX string.')
          var e = '',
            r = 0,
            n = t.length
          for ('0x' === t.substring(0, 2) && (r = 2); r < n; r += 2) {
            var o = parseInt(t.slice(r, r + 2), 16)
            e += String.fromCharCode(o)
          }
          return e
        },
        h = function(t) {
          if (!t) return '0x00'
          for (var e = '', r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16)
            e += n.length < 2 ? '0' + n : n
          }
          return '0x' + e
        },
        l = function(t) {
          if (((t = t ? t.toLowerCase() : 'ether'), !n.unitMap[t]))
            throw new Error(
              'This unit "' +
                t +
                '" doesn\'t exist, please use the one of the following units' +
                JSON.stringify(n.unitMap, null, 2)
            )
          return t
        }
      t.exports = {
        _fireError: function(t, e, r, n, i) {
          return (
            !t ||
              'object' !== typeof t ||
              t instanceof Error ||
              !t.data ||
              (((t.data && 'object' === typeof t.data) ||
                Array.isArray(t.data)) &&
                (t.data = JSON.stringify(t.data, null, 2)),
              (t = t.message + '\n' + t.data)),
            'string' === typeof t && (t = new Error(t)),
            'function' === typeof n && n(t, i),
            'function' === typeof r &&
              (((e &&
                'function' === typeof e.listeners &&
                e.listeners('error').length) ||
                'function' === typeof n) &&
                e.catch(function() {}),
              setTimeout(function() {
                r(t)
              }, 1)),
            e &&
              'function' === typeof e.emit &&
              setTimeout(function() {
                e.emit('error', t, i), e.removeAllListeners()
              }, 1),
            e
          )
        },
        _jsonInterfaceMethodToString: function(t) {
          return t &&
            'object' === typeof t &&
            t.name &&
            -1 !== t.name.indexOf('(')
            ? t.name
            : t.name + '(' + u(!1, t.inputs).join(',') + ')'
        },
        _flattenTypes: u,
        randomHex: function(t) {
          return '0x' + s(t).toString('hex')
        },
        BN: i.BN,
        isBN: i.isBN,
        isBigNumber: i.isBigNumber,
        isHex: i.isHex,
        isHexStrict: i.isHexStrict,
        sha3: i.sha3,
        sha3Raw: i.sha3Raw,
        keccak256: i.sha3,
        soliditySha3: o.soliditySha3,
        soliditySha3Raw: o.soliditySha3Raw,
        encodePacked: o.encodePacked,
        isAddress: i.isAddress,
        checkAddressChecksum: i.checkAddressChecksum,
        toChecksumAddress: function(t) {
          if ('undefined' === typeof t) return ''
          if (!/^(0x)?[0-9a-f]{40}$/i.test(t))
            throw new Error(
              'Given address "' + t + '" is not a valid Ethereum address.'
            )
          t = t.toLowerCase().replace(/^0x/i, '')
          for (
            var e = i.sha3(t).replace(/^0x/i, ''), r = '0x', n = 0;
            n < t.length;
            n++
          )
            parseInt(e[n], 16) > 7 ? (r += t[n].toUpperCase()) : (r += t[n])
          return r
        },
        toHex: i.toHex,
        toBN: i.toBN,
        bytesToHex: i.bytesToHex,
        hexToBytes: i.hexToBytes,
        hexToNumberString: i.hexToNumberString,
        hexToNumber: i.hexToNumber,
        toDecimal: i.hexToNumber,
        numberToHex: i.numberToHex,
        fromDecimal: i.numberToHex,
        hexToUtf8: i.hexToUtf8,
        hexToString: i.hexToUtf8,
        toUtf8: i.hexToUtf8,
        stripHexPrefix: i.stripHexPrefix,
        utf8ToHex: i.utf8ToHex,
        stringToHex: i.utf8ToHex,
        fromUtf8: i.utf8ToHex,
        hexToAscii: f,
        toAscii: f,
        asciiToHex: h,
        fromAscii: h,
        unitMap: n.unitMap,
        toWei: function(t, e) {
          if (((e = l(e)), !i.isBN(t) && 'string' !== typeof t))
            throw new Error(
              'Please pass numbers as strings or BN objects to avoid precision errors.'
            )
          return i.isBN(t) ? n.toWei(t, e) : n.toWei(t, e).toString(10)
        },
        fromWei: function(t, e) {
          if (((e = l(e)), !i.isBN(t) && 'string' !== typeof t))
            throw new Error(
              'Please pass numbers as strings or BN objects to avoid precision errors.'
            )
          return i.isBN(t) ? n.fromWei(t, e) : n.fromWei(t, e).toString(10)
        },
        padLeft: i.leftPad,
        leftPad: i.leftPad,
        padRight: i.rightPad,
        rightPad: i.rightPad,
        toTwosComplement: i.toTwosComplement,
        isBloom: i.isBloom,
        isUserEthereumAddressInBloom: i.isUserEthereumAddressInBloom,
        isContractAddressInBloom: i.isContractAddressInBloom,
        isTopic: i.isTopic,
        isTopicInBloom: i.isTopicInBloom,
        isInBloom: i.isInBloom,
        compareBlockNumbers: function(t, e) {
          if (t === e) return 0
          if (
            ('genesis' !== t && 'earliest' !== t && 0 !== t) ||
            ('genesis' !== e && 'earliest' !== e && 0 !== e)
          ) {
            if ('genesis' === t || 'earliest' === t || 0 === t) return -1
            if ('genesis' === e || 'earliest' === e || 0 === e) return 1
            if ('latest' === t || 'finalized' === t)
              return 'pending' === e ? -1 : 1
            if ('latest' === e || 'finalized' === e)
              return 'pending' === t ? 1 : -1
            if ('pending' === t) return 1
            if ('pending' === e) return -1
            if ('safe' === t || 'safe' === e) return
            var r = new a(t),
              n = new a(e)
            return r.lt(n) ? -1 : r.eq(n) ? 0 : 1
          }
          return 0
        },
        toNumber: i.toNumber
      }
    },
    32883: function(t, e, r) {
      var n = r(68323),
        i = r(99648),
        o = function(t) {
          var e = typeof t
          if ('string' === e)
            return i.isHexStrict(t)
              ? new n(t.replace(/0x/i, ''), 16)
              : new n(t, 10)
          if ('number' === e) return new n(t)
          if (i.isBigNumber(t)) return new n(t.toString(10))
          if (i.isBN(t)) return t
          throw new Error(t + ' is not a number')
        },
        s = function(t, e, r) {
          var s, a, u
          if (
            'bytes' ===
            (t = (u = t).startsWith('int[')
              ? 'int256' + u.slice(3)
              : 'int' === u
              ? 'int256'
              : u.startsWith('uint[')
              ? 'uint256' + u.slice(4)
              : 'uint' === u
              ? 'uint256'
              : u.startsWith('fixed[')
              ? 'fixed128x128' + u.slice(5)
              : 'fixed' === u
              ? 'fixed128x128'
              : u.startsWith('ufixed[')
              ? 'ufixed128x128' + u.slice(6)
              : 'ufixed' === u
              ? 'ufixed128x128'
              : u)
          ) {
            if (e.replace(/^0x/i, '').length % 2 !== 0)
              throw new Error('Invalid bytes characters ' + e.length)
            return e
          }
          if ('string' === t) return i.utf8ToHex(e)
          if ('bool' === t) return e ? '01' : '00'
          if (t.startsWith('address')) {
            if (((s = r ? 64 : 40), !i.isAddress(e)))
              throw new Error(
                e + ' is not a valid address, or the checksum is invalid.'
              )
            return i.leftPad(e.toLowerCase(), s)
          }
          if (
            ((s = (function(t) {
              var e = /^\D+(\d+).*$/.exec(t)
              return e ? parseInt(e[1], 10) : null
            })(t)),
            t.startsWith('bytes'))
          ) {
            if (!s) throw new Error('bytes[] not yet supported in solidity')
            if (
              (r && (s = 32),
              s < 1 || s > 32 || s < e.replace(/^0x/i, '').length / 2)
            )
              throw new Error('Invalid bytes' + s + ' for ' + e)
            return i.rightPad(e, 2 * s)
          }
          if (t.startsWith('uint')) {
            if (s % 8 || s < 8 || s > 256)
              throw new Error('Invalid uint' + s + ' size')
            if ((a = o(e)).bitLength() > s)
              throw new Error(
                'Supplied uint exceeds width: ' + s + ' vs ' + a.bitLength()
              )
            if (a.lt(new n(0)))
              throw new Error('Supplied uint ' + a.toString() + ' is negative')
            return s ? i.leftPad(a.toString('hex'), (s / 8) * 2) : a
          }
          if (t.startsWith('int')) {
            if (s % 8 || s < 8 || s > 256)
              throw new Error('Invalid int' + s + ' size')
            if ((a = o(e)).bitLength() > s)
              throw new Error(
                'Supplied int exceeds width: ' + s + ' vs ' + a.bitLength()
              )
            return a.lt(new n(0))
              ? a.toTwos(s).toString('hex')
              : s
              ? i.leftPad(a.toString('hex'), (s / 8) * 2)
              : a
          }
          throw new Error('Unsupported or invalid type: ' + t)
        },
        a = function(t) {
          if (Array.isArray(t))
            throw new Error('Autodetection of array types is not supported.')
          var e,
            r,
            o = ''
          if (
            (t &&
            'object' === typeof t &&
            (t.hasOwnProperty('v') ||
              t.hasOwnProperty('t') ||
              t.hasOwnProperty('value') ||
              t.hasOwnProperty('type'))
              ? ((e = t.hasOwnProperty('t') ? t.t : t.type),
                (o = t.hasOwnProperty('v') ? t.v : t.value))
              : ((e = i.toHex(t, !0)),
                (o = i.toHex(t)),
                e.startsWith('int') || e.startsWith('uint') || (e = 'bytes')),
            (!e.startsWith('int') && !e.startsWith('uint')) ||
              'string' !== typeof o ||
              /^(-)?0x/i.test(o) ||
              (o = new n(o)),
            Array.isArray(o))
          ) {
            if (
              ((r = (function(t) {
                var e = /^\D+\d*\[(\d+)\]$/.exec(t)
                return e ? parseInt(e[1], 10) : null
              })(e)),
              r && o.length !== r)
            )
              throw new Error(
                e + ' is not matching the given array ' + JSON.stringify(o)
              )
            r = o.length
          }
          return Array.isArray(o)
            ? o
                .map(function(t) {
                  return s(e, t, r)
                    .toString('hex')
                    .replace('0x', '')
                })
                .join('')
            : s(e, o, r)
                .toString('hex')
                .replace('0x', '')
        }
      t.exports = {
        soliditySha3: function() {
          var t = Array.prototype.slice.call(arguments).map(a)
          return i.sha3('0x' + t.join(''))
        },
        soliditySha3Raw: function() {
          return i.sha3Raw(
            '0x' +
              Array.prototype.slice
                .call(arguments)
                .map(a)
                .join('')
          )
        },
        encodePacked: function() {
          return (
            '0x' +
            Array.prototype.slice
              .call(arguments)
              .map(a)
              .join('')
              .toLowerCase()
          )
        }
      }
    },
    99648: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(85715).default,
        o = r(68323),
        s = r(56377),
        a = r(46516),
        u = r(63440),
        f = r(50282),
        h = r(56836).keccak256,
        l = function(t) {
          return o.isBN(t)
        },
        c = function(t) {
          return t && t.constructor && 'BigNumber' === t.constructor.name
        },
        d = function(t) {
          try {
            return s.apply(null, arguments)
          } catch (e) {
            throw new Error(e + ' Given value: "' + t + '"')
          }
        },
        p = function(t) {
          return (
            !!/^(0x)?[0-9a-f]{40}$/i.test(t) &&
            (!(
              !/^(0x|0X)?[0-9a-f]{40}$/.test(t) &&
              !/^(0x|0X)?[0-9A-F]{40}$/.test(t)
            ) ||
              v(t))
          )
        },
        v = function(t) {
          t = t.replace(/^0x/i, '')
          for (
            var e = E(t.toLowerCase()).replace(/^0x/i, ''), r = 0;
            r < 40;
            r++
          )
            if (
              (parseInt(e[r], 16) > 7 && t[r].toUpperCase() !== t[r]) ||
              (parseInt(e[r], 16) <= 7 && t[r].toLowerCase() !== t[r])
            )
              return !1
          return !0
        },
        m = function(t) {
          var e = ''
          t = (t = (t = (t = (t = a.encode(t)).replace(/^(?:\u0000)*/, ''))
            .split('')
            .reverse()
            .join('')).replace(/^(?:\u0000)*/, ''))
            .split('')
            .reverse()
            .join('')
          for (var r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r).toString(16)
            e += n.length < 2 ? '0' + n : n
          }
          return '0x' + e
        },
        g = function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if (!t) return t
          if ('string' === typeof t && !b(t))
            throw new Error(
              'Given value "' + t + '" is not a valid hex string.'
            )
          var r = d(t)
          return e &&
            (r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER)
            ? BigInt(r)
            : r.toNumber()
        },
        w = function(t) {
          if (null === t || void 0 === t) return t
          if (!isFinite(t) && !b(t))
            throw new Error('Given input "' + t + '" is not a number.')
          var e = d(t),
            r = e.toString(16)
          return e.lt(new o(0)) ? '-0x' + r.slice(1) : '0x' + r
        },
        y = function(t, e) {
          if (p(t))
            return e ? 'address' : '0x' + t.toLowerCase().replace(/^0x/i, '')
          if ('boolean' === typeof t) return e ? 'bool' : t ? '0x01' : '0x00'
          if (n.isBuffer(t)) return '0x' + t.toString('hex')
          if ('object' === typeof t && t && !c(t) && !l(t))
            return e ? 'string' : m(JSON.stringify(t))
          if ('string' === typeof t) {
            if (0 === t.indexOf('-0x') || 0 === t.indexOf('-0X'))
              return e ? 'int256' : w(t)
            if (0 === t.indexOf('0x') || 0 === t.indexOf('0X'))
              return e ? 'bytes' : t
            if (!isFinite(t)) return e ? 'string' : m(t)
          }
          return e ? (t < 0 ? 'int256' : 'uint256') : w(t)
        },
        b = function(t) {
          return (
            ('string' === typeof t || 'number' === typeof t) &&
            /^(-)?0x[0-9a-f]*$/i.test(t)
          )
        },
        _ = function(t) {
          return (
            ('string' === typeof t || 'number' === typeof t) &&
            /^(-0x|0x)?[0-9a-f]*$/i.test(t)
          )
        },
        x =
          '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
        E = function(t) {
          l(t) && (t = t.toString()),
            b(t) && /^0x/i.test(t.toString())
              ? (t = u.toBuffer(t))
              : 'string' === typeof t && (t = n.from(t, 'utf-8'))
          var e = u.bufferToHex(h(t))
          return e === x ? null : e
        }
      E._Hash = h
      var k = function(t) {
        if ('string' == typeof t && t.includes('0x')) {
          var e = t.toLocaleLowerCase().startsWith('-')
              ? ['-', t.slice(3)]
              : ['', t.slice(2)],
            r = i(e, 2),
            n = r[0],
            s = r[1]
          return new o(n + s, 16)
        }
        return new o(t)
      }
      Object.setPrototypeOf(k, o),
        Object.setPrototypeOf(k.prototype, o.prototype),
        (t.exports = {
          BN: k,
          isBN: l,
          isBigNumber: c,
          toBN: d,
          isAddress: p,
          isBloom: function(t) {
            return f.isBloom(t)
          },
          isUserEthereumAddressInBloom: function(t, e) {
            return f.isUserEthereumAddressInBloom(t, e)
          },
          isContractAddressInBloom: function(t, e) {
            return f.isContractAddressInBloom(t, e)
          },
          isTopic: function(t) {
            return f.isTopic(t)
          },
          isTopicInBloom: function(t, e) {
            return f.isTopicInBloom(t, e)
          },
          isInBloom: function(t, e) {
            return f.isInBloom(t, e)
          },
          checkAddressChecksum: v,
          utf8ToHex: m,
          hexToUtf8: function(t) {
            if (!b(t))
              throw new Error(
                'The parameter "' + t + '" must be a valid HEX string.'
              )
            for (
              var e = '',
                r = 0,
                n = (t = (t = (t = (t = (t = t.replace(/^0x/i, '')).replace(
                  /^(?:00)*/,
                  ''
                ))
                  .split('')
                  .reverse()
                  .join('')).replace(/^(?:00)*/, ''))
                  .split('')
                  .reverse()
                  .join('')).length,
                i = 0;
              i < n;
              i += 2
            )
              (r = parseInt(t.slice(i, i + 2), 16)),
                (e += String.fromCharCode(r))
            return a.decode(e)
          },
          hexToNumber: g,
          hexToNumberString: function(t) {
            if (!t) return t
            if ('string' === typeof t && !b(t))
              throw new Error(
                'Given value "' + t + '" is not a valid hex string.'
              )
            return d(t).toString(10)
          },
          numberToHex: w,
          toHex: y,
          hexToBytes: function(t) {
            if (((t = t.toString(16)), !b(t)))
              throw new Error(
                'Given value "' + t + '" is not a valid hex string.'
              )
            t = t.replace(/^0x/i, '')
            for (var e = [], r = 0; r < t.length; r += 2)
              e.push(parseInt(t.slice(r, r + 2), 16))
            return e
          },
          bytesToHex: function(t) {
            for (var e = [], r = 0; r < t.length; r++)
              e.push((t[r] >>> 4).toString(16)),
                e.push((15 & t[r]).toString(16))
            return '0x' + e.join('')
          },
          isHex: _,
          isHexStrict: b,
          stripHexPrefix: function(t) {
            return 0 !== t && _(t) ? t.replace(/^(-)?0x/i, '$1') : t
          },
          leftPad: function(t, e, r) {
            var n = /^0x/i.test(t) || 'number' === typeof t,
              i =
                e - (t = t.toString(16).replace(/^0x/i, '')).length + 1 >= 0
                  ? e - t.length + 1
                  : 0
            return (n ? '0x' : '') + new Array(i).join(r || '0') + t
          },
          rightPad: function(t, e, r) {
            var n = /^0x/i.test(t) || 'number' === typeof t,
              i =
                e - (t = t.toString(16).replace(/^0x/i, '')).length + 1 >= 0
                  ? e - t.length + 1
                  : 0
            return (n ? '0x' : '') + t + new Array(i).join(r || '0')
          },
          toTwosComplement: function(t) {
            return (
              '0x' +
              d(t)
                .toTwos(256)
                .toString(16, 64)
            )
          },
          sha3: E,
          sha3Raw: function(t) {
            return null === (t = E(t)) ? x : t
          },
          toNumber: function(t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            return 'number' === typeof t ? t : g(y(t), e)
          }
        })
    },
    18080: function(t, e, r) {
      'use strict'
      r.d(e, {
        A: function() {
          return Wt
        }
      })
      var n,
        i,
        o = r(23029),
        s = r(92901),
        a = 9e15,
        u = 1e9,
        f = '0123456789abcdef',
        h =
          '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
        l =
          '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
        c = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -a,
          maxE: a,
          crypto: !1
        },
        d = !0,
        p = '[DecimalError] ',
        v = p + 'Invalid argument: ',
        m = p + 'Precision limit exceeded',
        g = p + 'crypto unavailable',
        w = '[object Decimal]',
        y = Math.floor,
        b = Math.pow,
        _ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        x = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        k = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        B = 1e7,
        A = 7,
        M = h.length - 1,
        S = l.length - 1,
        T = { toStringTag: w }
      function I(t) {
        var e,
          r,
          n,
          i = t.length - 1,
          o = '',
          s = t[0]
        if (i > 0) {
          for (o += s, e = 1; e < i; e++)
            (n = t[e] + ''), (r = A - n.length) && (o += Z(r)), (o += n)
          ;(s = t[e]), (r = A - (n = s + '').length) && (o += Z(r))
        } else if (0 === s) return '0'
        for (; s % 10 === 0; ) s /= 10
        return o + s
      }
      function O(t, e, r) {
        if (t !== ~~t || t < e || t > r) throw Error(v + t)
      }
      function N(t, e, r, n) {
        var i, o, s, a
        for (o = t[0]; o >= 10; o /= 10) --e
        return (
          --e < 0
            ? ((e += A), (i = 0))
            : ((i = Math.ceil((e + 1) / A)), (e %= A)),
          (o = b(10, A - e)),
          (a = t[i] % o | 0),
          null == n
            ? e < 3
              ? (0 == e ? (a = (a / 100) | 0) : 1 == e && (a = (a / 10) | 0),
                (s =
                  (r < 4 && 99999 == a) ||
                  (r > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (s =
                  (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
                    ((t[i + 1] / o / 100) | 0) == b(10, e - 2) - 1) ||
                  ((a == o / 2 || 0 == a) && 0 == ((t[i + 1] / o / 100) | 0)))
            : e < 4
            ? (0 == e
                ? (a = (a / 1e3) | 0)
                : 1 == e
                ? (a = (a / 100) | 0)
                : 2 == e && (a = (a / 10) | 0),
              (s = ((n || r < 4) && 9999 == a) || (!n && r > 3 && 4999 == a)))
            : (s =
                (((n || r < 4) && a + 1 == o) ||
                  (!n && r > 3 && a + 1 == o / 2)) &&
                ((t[i + 1] / o / 1e3) | 0) == b(10, e - 3) - 1),
          s
        )
      }
      function L(t, e, r) {
        for (var n, i, o = [0], s = 0, a = t.length; s < a; ) {
          for (i = o.length; i--; ) o[i] *= e
          for (o[0] += f.indexOf(t.charAt(s++)), n = 0; n < o.length; n++)
            o[n] > r - 1 &&
              (void 0 === o[n + 1] && (o[n + 1] = 0),
              (o[n + 1] += (o[n] / r) | 0),
              (o[n] %= r))
        }
        return o.reverse()
      }
      ;(T.absoluteValue = T.abs = function() {
        var t = new this.constructor(this)
        return t.s < 0 && (t.s = 1), P(t)
      }),
        (T.ceil = function() {
          return P(new this.constructor(this), this.e + 1, 2)
        }),
        (T.clampedTo = T.clamp = function(t, e) {
          var r = this,
            n = r.constructor
          if (((t = new n(t)), (e = new n(e)), !t.s || !e.s)) return new n(NaN)
          if (t.gt(e)) throw Error(v + e)
          return r.cmp(t) < 0 ? t : r.cmp(e) > 0 ? e : new n(r)
        }),
        (T.comparedTo = T.cmp = function(t) {
          var e,
            r,
            n,
            i,
            o = this,
            s = o.d,
            a = (t = new o.constructor(t)).d,
            u = o.s,
            f = t.s
          if (!s || !a)
            return u && f
              ? u !== f
                ? u
                : s === a
                ? 0
                : !s ^ (u < 0)
                ? 1
                : -1
              : NaN
          if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -f : 0
          if (u !== f) return u
          if (o.e !== t.e) return (o.e > t.e) ^ (u < 0) ? 1 : -1
          for (e = 0, r = (n = s.length) < (i = a.length) ? n : i; e < r; ++e)
            if (s[e] !== a[e]) return (s[e] > a[e]) ^ (u < 0) ? 1 : -1
          return n === i ? 0 : (n > i) ^ (u < 0) ? 1 : -1
        }),
        (T.cosine = T.cos = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return r.d
            ? r.d[0]
              ? ((t = n.precision),
                (e = n.rounding),
                (n.precision = t + Math.max(r.e, r.sd()) + A),
                (n.rounding = 1),
                (r = (function(t, e) {
                  var r, n, i
                  if (e.isZero()) return e
                  ;(n = e.d.length),
                    n < 32
                      ? (i = (1 / $(4, (r = Math.ceil(n / 3)))).toString())
                      : ((r = 16), (i = '2.3283064365386962890625e-10'))
                  ;(t.precision += r), (e = X(t, 1, e.times(i), new t(1)))
                  for (var o = r; o--; ) {
                    var s = e.times(e)
                    e = s
                      .times(s)
                      .minus(s)
                      .times(8)
                      .plus(1)
                  }
                  return (t.precision -= r), e
                })(n, J(n, r))),
                (n.precision = t),
                (n.rounding = e),
                P(2 == i || 3 == i ? r.neg() : r, t, e, !0))
              : new n(1)
            : new n(NaN)
        }),
        (T.cubeRoot = T.cbrt = function() {
          var t,
            e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            h = this,
            l = h.constructor
          if (!h.isFinite() || h.isZero()) return new l(h)
          for (
            d = !1,
              (o = h.s * b(h.s * h, 1 / 3)) && Math.abs(o) != 1 / 0
                ? (n = new l(o.toString()))
                : ((r = I(h.d)),
                  (o = ((t = h.e) - r.length + 1) % 3) &&
                    (r += 1 == o || -2 == o ? '0' : '00'),
                  (o = b(r, 1 / 3)),
                  (t = y((t + 1) / 3) - (t % 3 == (t < 0 ? -1 : 2))),
                  ((n = new l(
                    (r =
                      o == 1 / 0
                        ? '5e' + t
                        : (r = o.toExponential()).slice(0, r.indexOf('e') + 1) +
                          t)
                  )).s = h.s)),
              s = (t = l.precision) + 3;
            ;

          )
            if (
              ((f = (u = (a = n).times(a).times(a)).plus(h)),
              (n = R(f.plus(h).times(a), f.plus(u), s + 2, 1)),
              I(a.d).slice(0, s) === (r = I(n.d)).slice(0, s))
            ) {
              if ('9999' != (r = r.slice(s - 3, s + 1)) && (i || '4999' != r)) {
                ;(+r && (+r.slice(1) || '5' != r.charAt(0))) ||
                  (P(n, t + 1, 1),
                  (e = !n
                    .times(n)
                    .times(n)
                    .eq(h)))
                break
              }
              if (
                !i &&
                (P(a, t + 1, 0),
                a
                  .times(a)
                  .times(a)
                  .eq(h))
              ) {
                n = a
                break
              }
              ;(s += 4), (i = 1)
            }
          return (d = !0), P(n, t, l.rounding, e)
        }),
        (T.decimalPlaces = T.dp = function() {
          var t,
            e = this.d,
            r = NaN
          if (e) {
            if (((r = ((t = e.length - 1) - y(this.e / A)) * A), (t = e[t])))
              for (; t % 10 == 0; t /= 10) r--
            r < 0 && (r = 0)
          }
          return r
        }),
        (T.dividedBy = T.div = function(t) {
          return R(this, new this.constructor(t))
        }),
        (T.dividedToIntegerBy = T.divToInt = function(t) {
          var e = this.constructor
          return P(R(this, new e(t), 0, 1, 1), e.precision, e.rounding)
        }),
        (T.equals = T.eq = function(t) {
          return 0 === this.cmp(t)
        }),
        (T.floor = function() {
          return P(new this.constructor(this), this.e + 1, 3)
        }),
        (T.greaterThan = T.gt = function(t) {
          return this.cmp(t) > 0
        }),
        (T.greaterThanOrEqualTo = T.gte = function(t) {
          var e = this.cmp(t)
          return 1 == e || 0 === e
        }),
        (T.hyperbolicCosine = T.cosh = function() {
          var t,
            e,
            r,
            n,
            i,
            o = this,
            s = o.constructor,
            a = new s(1)
          if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN)
          if (o.isZero()) return a
          ;(r = s.precision),
            (n = s.rounding),
            (s.precision = r + Math.max(o.e, o.sd()) + 4),
            (s.rounding = 1),
            (i = o.d.length) < 32
              ? (e = (1 / $(4, (t = Math.ceil(i / 3)))).toString())
              : ((t = 16), (e = '2.3283064365386962890625e-10')),
            (o = X(s, 1, o.times(e), new s(1), !0))
          for (var u, f = t, h = new s(8); f--; )
            (u = o.times(o)), (o = a.minus(u.times(h.minus(u.times(h)))))
          return P(o, (s.precision = r), (s.rounding = n), !0)
        }),
        (T.hyperbolicSine = T.sinh = function() {
          var t,
            e,
            r,
            n,
            i = this,
            o = i.constructor
          if (!i.isFinite() || i.isZero()) return new o(i)
          if (
            ((e = o.precision),
            (r = o.rounding),
            (o.precision = e + Math.max(i.e, i.sd()) + 4),
            (o.rounding = 1),
            (n = i.d.length) < 3)
          )
            i = X(o, 2, i, i, !0)
          else {
            ;(t = (t = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | t),
              (i = X(o, 2, (i = i.times(1 / $(5, t))), i, !0))
            for (var s, a = new o(5), u = new o(16), f = new o(20); t--; )
              (s = i.times(i)),
                (i = i.times(a.plus(s.times(u.times(s).plus(f)))))
          }
          return (o.precision = e), (o.rounding = r), P(i, e, r, !0)
        }),
        (T.hyperbolicTangent = T.tanh = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return r.isFinite()
            ? r.isZero()
              ? new n(r)
              : ((t = n.precision),
                (e = n.rounding),
                (n.precision = t + 7),
                (n.rounding = 1),
                R(r.sinh(), r.cosh(), (n.precision = t), (n.rounding = e)))
            : new n(r.s)
        }),
        (T.inverseCosine = T.acos = function() {
          var t,
            e = this,
            r = e.constructor,
            n = e.abs().cmp(1),
            i = r.precision,
            o = r.rounding
          return -1 !== n
            ? 0 === n
              ? e.isNeg()
                ? F(r, i, o)
                : new r(0)
              : new r(NaN)
            : e.isZero()
            ? F(r, i + 4, o).times(0.5)
            : ((r.precision = i + 6),
              (r.rounding = 1),
              (e = e.asin()),
              (t = F(r, i + 4, o).times(0.5)),
              (r.precision = i),
              (r.rounding = o),
              t.minus(e))
        }),
        (T.inverseHyperbolicCosine = T.acosh = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return r.lte(1)
            ? new n(r.eq(1) ? 0 : NaN)
            : r.isFinite()
            ? ((t = n.precision),
              (e = n.rounding),
              (n.precision = t + Math.max(Math.abs(r.e), r.sd()) + 4),
              (n.rounding = 1),
              (d = !1),
              (r = r
                .times(r)
                .minus(1)
                .sqrt()
                .plus(r)),
              (d = !0),
              (n.precision = t),
              (n.rounding = e),
              r.ln())
            : new n(r)
        }),
        (T.inverseHyperbolicSine = T.asinh = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return !r.isFinite() || r.isZero()
            ? new n(r)
            : ((t = n.precision),
              (e = n.rounding),
              (n.precision = t + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
              (n.rounding = 1),
              (d = !1),
              (r = r
                .times(r)
                .plus(1)
                .sqrt()
                .plus(r)),
              (d = !0),
              (n.precision = t),
              (n.rounding = e),
              r.ln())
        }),
        (T.inverseHyperbolicTangent = T.atanh = function() {
          var t,
            e,
            r,
            n,
            i = this,
            o = i.constructor
          return i.isFinite()
            ? i.e >= 0
              ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
              : ((t = o.precision),
                (e = o.rounding),
                (n = i.sd()),
                Math.max(n, t) < 2 * -i.e - 1
                  ? P(new o(i), t, e, !0)
                  : ((o.precision = r = n - i.e),
                    (i = R(i.plus(1), new o(1).minus(i), r + t, 1)),
                    (o.precision = t + 4),
                    (o.rounding = 1),
                    (i = i.ln()),
                    (o.precision = t),
                    (o.rounding = e),
                    i.times(0.5)))
            : new o(NaN)
        }),
        (T.inverseSine = T.asin = function() {
          var t,
            e,
            r,
            n,
            i = this,
            o = i.constructor
          return i.isZero()
            ? new o(i)
            : ((e = i.abs().cmp(1)),
              (r = o.precision),
              (n = o.rounding),
              -1 !== e
                ? 0 === e
                  ? (((t = F(o, r + 4, n).times(0.5)).s = i.s), t)
                  : new o(NaN)
                : ((o.precision = r + 6),
                  (o.rounding = 1),
                  (i = i
                    .div(
                      new o(1)
                        .minus(i.times(i))
                        .sqrt()
                        .plus(1)
                    )
                    .atan()),
                  (o.precision = r),
                  (o.rounding = n),
                  i.times(2)))
        }),
        (T.inverseTangent = T.atan = function() {
          var t,
            e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f = this,
            h = f.constructor,
            l = h.precision,
            c = h.rounding
          if (f.isFinite()) {
            if (f.isZero()) return new h(f)
            if (f.abs().eq(1) && l + 4 <= S)
              return ((s = F(h, l + 4, c).times(0.25)).s = f.s), s
          } else {
            if (!f.s) return new h(NaN)
            if (l + 4 <= S) return ((s = F(h, l + 4, c).times(0.5)).s = f.s), s
          }
          for (
            h.precision = a = l + 10,
              h.rounding = 1,
              t = r = Math.min(28, (a / A + 2) | 0);
            t;
            --t
          )
            f = f.div(
              f
                .times(f)
                .plus(1)
                .sqrt()
                .plus(1)
            )
          for (
            d = !1,
              e = Math.ceil(a / A),
              n = 1,
              u = f.times(f),
              s = new h(f),
              i = f;
            -1 !== t;

          )
            if (
              ((i = i.times(u)),
              (o = s.minus(i.div((n += 2)))),
              (i = i.times(u)),
              void 0 !== (s = o.plus(i.div((n += 2)))).d[e])
            )
              for (t = e; s.d[t] === o.d[t] && t--; );
          return (
            r && (s = s.times(2 << (r - 1))),
            (d = !0),
            P(s, (h.precision = l), (h.rounding = c), !0)
          )
        }),
        (T.isFinite = function() {
          return !!this.d
        }),
        (T.isInteger = T.isInt = function() {
          return !!this.d && y(this.e / A) > this.d.length - 2
        }),
        (T.isNaN = function() {
          return !this.s
        }),
        (T.isNegative = T.isNeg = function() {
          return this.s < 0
        }),
        (T.isPositive = T.isPos = function() {
          return this.s > 0
        }),
        (T.isZero = function() {
          return !!this.d && 0 === this.d[0]
        }),
        (T.lessThan = T.lt = function(t) {
          return this.cmp(t) < 0
        }),
        (T.lessThanOrEqualTo = T.lte = function(t) {
          return this.cmp(t) < 1
        }),
        (T.logarithm = T.log = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f = this,
            h = f.constructor,
            l = h.precision,
            c = h.rounding
          if (null == t) (t = new h(10)), (e = !0)
          else {
            if (((r = (t = new h(t)).d), t.s < 0 || !r || !r[0] || t.eq(1)))
              return new h(NaN)
            e = t.eq(10)
          }
          if (((r = f.d), f.s < 0 || !r || !r[0] || f.eq(1)))
            return new h(r && !r[0] ? -1 / 0 : 1 != f.s ? NaN : r ? 0 : 1 / 0)
          if (e)
            if (r.length > 1) o = !0
            else {
              for (i = r[0]; i % 10 === 0; ) i /= 10
              o = 1 !== i
            }
          if (
            ((d = !1),
            (s = W(f, (a = l + 5))),
            (n = e ? U(h, a + 10) : W(t, a)),
            N((u = R(s, n, a, 1)).d, (i = l), c))
          )
            do {
              if (
                ((s = W(f, (a += 10))),
                (n = e ? U(h, a + 10) : W(t, a)),
                (u = R(s, n, a, 1)),
                !o)
              ) {
                ;+I(u.d).slice(i + 1, i + 15) + 1 == 1e14 &&
                  (u = P(u, l + 1, 0))
                break
              }
            } while (N(u.d, (i += 10), c))
          return (d = !0), P(u, l, c)
        }),
        (T.minus = T.sub = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            h,
            l,
            c,
            p = this,
            v = p.constructor
          if (((t = new v(t)), !p.d || !t.d))
            return (
              p.s && t.s
                ? p.d
                  ? (t.s = -t.s)
                  : (t = new v(t.d || p.s !== t.s ? p : NaN))
                : (t = new v(NaN)),
              t
            )
          if (p.s != t.s) return (t.s = -t.s), p.plus(t)
          if (
            ((f = p.d),
            (c = t.d),
            (a = v.precision),
            (u = v.rounding),
            !f[0] || !c[0])
          ) {
            if (c[0]) t.s = -t.s
            else {
              if (!f[0]) return new v(3 === u ? -0 : 0)
              t = new v(p)
            }
            return d ? P(t, a, u) : t
          }
          if (
            ((r = y(t.e / A)), (h = y(p.e / A)), (f = f.slice()), (o = h - r))
          ) {
            for (
              (l = o < 0)
                ? ((e = f), (o = -o), (s = c.length))
                : ((e = c), (r = h), (s = f.length)),
                o > (n = Math.max(Math.ceil(a / A), s) + 2) &&
                  ((o = n), (e.length = 1)),
                e.reverse(),
                n = o;
              n--;

            )
              e.push(0)
            e.reverse()
          } else {
            for (
              (l = (n = f.length) < (s = c.length)) && (s = n), n = 0;
              n < s;
              n++
            )
              if (f[n] != c[n]) {
                l = f[n] < c[n]
                break
              }
            o = 0
          }
          for (
            l && ((e = f), (f = c), (c = e), (t.s = -t.s)),
              s = f.length,
              n = c.length - s;
            n > 0;
            --n
          )
            f[s++] = 0
          for (n = c.length; n > o; ) {
            if (f[--n] < c[n]) {
              for (i = n; i && 0 === f[--i]; ) f[i] = B - 1
              --f[i], (f[n] += B)
            }
            f[n] -= c[n]
          }
          for (; 0 === f[--s]; ) f.pop()
          for (; 0 === f[0]; f.shift()) --r
          return f[0]
            ? ((t.d = f), (t.e = H(f, r)), d ? P(t, a, u) : t)
            : new v(3 === u ? -0 : 0)
        }),
        (T.modulo = T.mod = function(t) {
          var e,
            r = this,
            n = r.constructor
          return (
            (t = new n(t)),
            !r.d || !t.s || (t.d && !t.d[0])
              ? new n(NaN)
              : !t.d || (r.d && !r.d[0])
              ? P(new n(r), n.precision, n.rounding)
              : ((d = !1),
                9 == n.modulo
                  ? ((e = R(r, t.abs(), 0, 3, 1)).s *= t.s)
                  : (e = R(r, t, 0, n.modulo, 1)),
                (e = e.times(t)),
                (d = !0),
                r.minus(e))
          )
        }),
        (T.naturalExponential = T.exp = function() {
          return K(this)
        }),
        (T.naturalLogarithm = T.ln = function() {
          return W(this)
        }),
        (T.negated = T.neg = function() {
          var t = new this.constructor(this)
          return (t.s = -t.s), P(t)
        }),
        (T.plus = T.add = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            h,
            l = this,
            c = l.constructor
          if (((t = new c(t)), !l.d || !t.d))
            return (
              l.s && t.s
                ? l.d || (t = new c(t.d || l.s === t.s ? l : NaN))
                : (t = new c(NaN)),
              t
            )
          if (l.s != t.s) return (t.s = -t.s), l.minus(t)
          if (
            ((f = l.d),
            (h = t.d),
            (a = c.precision),
            (u = c.rounding),
            !f[0] || !h[0])
          )
            return h[0] || (t = new c(l)), d ? P(t, a, u) : t
          if (
            ((o = y(l.e / A)), (n = y(t.e / A)), (f = f.slice()), (i = o - n))
          ) {
            for (
              i < 0
                ? ((r = f), (i = -i), (s = h.length))
                : ((r = h), (n = o), (s = f.length)),
                i > (s = (o = Math.ceil(a / A)) > s ? o + 1 : s + 1) &&
                  ((i = s), (r.length = 1)),
                r.reverse();
              i--;

            )
              r.push(0)
            r.reverse()
          }
          for (
            (s = f.length) - (i = h.length) < 0 &&
              ((i = s), (r = h), (h = f), (f = r)),
              e = 0;
            i;

          )
            (e = ((f[--i] = f[i] + h[i] + e) / B) | 0), (f[i] %= B)
          for (e && (f.unshift(e), ++n), s = f.length; 0 == f[--s]; ) f.pop()
          return (t.d = f), (t.e = H(f, n)), d ? P(t, a, u) : t
        }),
        (T.precision = T.sd = function(t) {
          var e,
            r = this
          if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t)
            throw Error(v + t)
          return (
            r.d ? ((e = D(r.d)), t && r.e + 1 > e && (e = r.e + 1)) : (e = NaN),
            e
          )
        }),
        (T.round = function() {
          var t = this,
            e = t.constructor
          return P(new e(t), t.e + 1, e.rounding)
        }),
        (T.sine = T.sin = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return r.isFinite()
            ? r.isZero()
              ? new n(r)
              : ((t = n.precision),
                (e = n.rounding),
                (n.precision = t + Math.max(r.e, r.sd()) + A),
                (n.rounding = 1),
                (r = (function(t, e) {
                  var r,
                    n = e.d.length
                  if (n < 3) return e.isZero() ? e : X(t, 2, e, e)
                  ;(r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                    (e = e.times(1 / $(5, r))),
                    (e = X(t, 2, e, e))
                  for (var i, o = new t(5), s = new t(16), a = new t(20); r--; )
                    (i = e.times(e)),
                      (e = e.times(o.plus(i.times(s.times(i).minus(a)))))
                  return e
                })(n, J(n, r))),
                (n.precision = t),
                (n.rounding = e),
                P(i > 2 ? r.neg() : r, t, e, !0))
            : new n(NaN)
        }),
        (T.squareRoot = T.sqrt = function() {
          var t,
            e,
            r,
            n,
            i,
            o,
            s = this,
            a = s.d,
            u = s.e,
            f = s.s,
            h = s.constructor
          if (1 !== f || !a || !a[0])
            return new h(!f || (f < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0)
          for (
            d = !1,
              0 == (f = Math.sqrt(+s)) || f == 1 / 0
                ? (((e = I(a)).length + u) % 2 == 0 && (e += '0'),
                  (f = Math.sqrt(e)),
                  (u = y((u + 1) / 2) - (u < 0 || u % 2)),
                  (n = new h(
                    (e =
                      f == 1 / 0
                        ? '5e' + u
                        : (e = f.toExponential()).slice(0, e.indexOf('e') + 1) +
                          u)
                  )))
                : (n = new h(f.toString())),
              r = (u = h.precision) + 3;
            ;

          )
            if (
              ((n = (o = n).plus(R(s, o, r + 2, 1)).times(0.5)),
              I(o.d).slice(0, r) === (e = I(n.d)).slice(0, r))
            ) {
              if ('9999' != (e = e.slice(r - 3, r + 1)) && (i || '4999' != e)) {
                ;(+e && (+e.slice(1) || '5' != e.charAt(0))) ||
                  (P(n, u + 1, 1), (t = !n.times(n).eq(s)))
                break
              }
              if (!i && (P(o, u + 1, 0), o.times(o).eq(s))) {
                n = o
                break
              }
              ;(r += 4), (i = 1)
            }
          return (d = !0), P(n, u, h.rounding, t)
        }),
        (T.tangent = T.tan = function() {
          var t,
            e,
            r = this,
            n = r.constructor
          return r.isFinite()
            ? r.isZero()
              ? new n(r)
              : ((t = n.precision),
                (e = n.rounding),
                (n.precision = t + 10),
                (n.rounding = 1),
                ((r = r.sin()).s = 1),
                (r = R(r, new n(1).minus(r.times(r)).sqrt(), t + 10, 0)),
                (n.precision = t),
                (n.rounding = e),
                P(2 == i || 4 == i ? r.neg() : r, t, e, !0))
            : new n(NaN)
        }),
        (T.times = T.mul = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            h = this,
            l = h.constructor,
            c = h.d,
            p = (t = new l(t)).d
          if (((t.s *= h.s), !c || !c[0] || !p || !p[0]))
            return new l(
              !t.s || (c && !c[0] && !p) || (p && !p[0] && !c)
                ? NaN
                : c && p
                ? 0 * t.s
                : t.s / 0
            )
          for (
            r = y(h.e / A) + y(t.e / A),
              (u = c.length) < (f = p.length) &&
                ((o = c), (c = p), (p = o), (s = u), (u = f), (f = s)),
              o = [],
              n = s = u + f;
            n--;

          )
            o.push(0)
          for (n = f; --n >= 0; ) {
            for (e = 0, i = u + n; i > n; )
              (a = o[i] + p[n] * c[i - n - 1] + e),
                (o[i--] = a % B | 0),
                (e = (a / B) | 0)
            o[i] = (o[i] + e) % B | 0
          }
          for (; !o[--s]; ) o.pop()
          return (
            e ? ++r : o.shift(),
            (t.d = o),
            (t.e = H(o, r)),
            d ? P(t, l.precision, l.rounding) : t
          )
        }),
        (T.toBinary = function(t, e) {
          return Q(this, 2, t, e)
        }),
        (T.toDecimalPlaces = T.toDP = function(t, e) {
          var r = this,
            n = r.constructor
          return (
            (r = new n(r)),
            void 0 === t
              ? r
              : (O(t, 0, u),
                void 0 === e ? (e = n.rounding) : O(e, 0, 8),
                P(r, t + r.e + 1, e))
          )
        }),
        (T.toExponential = function(t, e) {
          var r,
            n = this,
            i = n.constructor
          return (
            void 0 === t
              ? (r = C(n, !0))
              : (O(t, 0, u),
                void 0 === e ? (e = i.rounding) : O(e, 0, 8),
                (r = C((n = P(new i(n), t + 1, e)), !0, t + 1))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          )
        }),
        (T.toFixed = function(t, e) {
          var r,
            n,
            i = this,
            o = i.constructor
          return (
            void 0 === t
              ? (r = C(i))
              : (O(t, 0, u),
                void 0 === e ? (e = o.rounding) : O(e, 0, 8),
                (r = C((n = P(new o(i), t + i.e + 1, e)), !1, t + n.e + 1))),
            i.isNeg() && !i.isZero() ? '-' + r : r
          )
        }),
        (T.toFraction = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            h,
            l,
            c,
            p = this,
            m = p.d,
            g = p.constructor
          if (!m) return new g(p)
          if (
            ((f = r = new g(1)),
            (n = u = new g(0)),
            (s = (o = (e = new g(n)).e = D(m) - p.e - 1) % A),
            (e.d[0] = b(10, s < 0 ? A + s : s)),
            null == t)
          )
            t = o > 0 ? e : f
          else {
            if (!(a = new g(t)).isInt() || a.lt(f)) throw Error(v + a)
            t = a.gt(e) ? (o > 0 ? e : f) : a
          }
          for (
            d = !1,
              a = new g(I(m)),
              h = g.precision,
              g.precision = o = m.length * A * 2;
            (l = R(a, e, 0, 1, 1)), 1 != (i = r.plus(l.times(n))).cmp(t);

          )
            (r = n),
              (n = i),
              (i = f),
              (f = u.plus(l.times(i))),
              (u = i),
              (i = e),
              (e = a.minus(l.times(i))),
              (a = i)
          return (
            (i = R(t.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(f))),
            (r = r.plus(i.times(n))),
            (u.s = f.s = p.s),
            (c =
              R(f, n, o, 1)
                .minus(p)
                .abs()
                .cmp(
                  R(u, r, o, 1)
                    .minus(p)
                    .abs()
                ) < 1
                ? [f, n]
                : [u, r]),
            (g.precision = h),
            (d = !0),
            c
          )
        }),
        (T.toHexadecimal = T.toHex = function(t, e) {
          return Q(this, 16, t, e)
        }),
        (T.toNearest = function(t, e) {
          var r = this,
            n = r.constructor
          if (((r = new n(r)), null == t)) {
            if (!r.d) return r
            ;(t = new n(1)), (e = n.rounding)
          } else {
            if (
              ((t = new n(t)),
              void 0 === e ? (e = n.rounding) : O(e, 0, 8),
              !r.d)
            )
              return t.s ? r : t
            if (!t.d) return t.s && (t.s = r.s), t
          }
          return (
            t.d[0]
              ? ((d = !1), (r = R(r, t, 0, e, 1).times(t)), (d = !0), P(r))
              : ((t.s = r.s), (r = t)),
            r
          )
        }),
        (T.toNumber = function() {
          return +this
        }),
        (T.toOctal = function(t, e) {
          return Q(this, 8, t, e)
        }),
        (T.toPower = T.pow = function(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a = this,
            u = a.constructor,
            f = +(t = new u(t))
          if (!a.d || !t.d || !a.d[0] || !t.d[0]) return new u(b(+a, f))
          if ((a = new u(a)).eq(1)) return a
          if (((n = u.precision), (o = u.rounding), t.eq(1))) return P(a, n, o)
          if (
            (e = y(t.e / A)) >= t.d.length - 1 &&
            (r = f < 0 ? -f : f) <= 9007199254740991
          )
            return (i = z(u, a, r, n)), t.s < 0 ? new u(1).div(i) : P(i, n, o)
          if ((s = a.s) < 0) {
            if (e < t.d.length - 1) return new u(NaN)
            if (
              (0 == (1 & t.d[e]) && (s = 1),
              0 == a.e && 1 == a.d[0] && 1 == a.d.length)
            )
              return (a.s = s), a
          }
          return (e =
            0 != (r = b(+a, f)) && isFinite(r)
              ? new u(r + '').e
              : y(f * (Math.log('0.' + I(a.d)) / Math.LN10 + a.e + 1))) >
            u.maxE + 1 || e < u.minE - 1
            ? new u(e > 0 ? s / 0 : 0)
            : ((d = !1),
              (u.rounding = a.s = 1),
              (r = Math.min(12, (e + '').length)),
              (i = K(t.times(W(a, n + r)), n)).d &&
                N((i = P(i, n + 5, 1)).d, n, o) &&
                ((e = n + 10),
                +I((i = P(K(t.times(W(a, e + r)), e), e + 5, 1)).d).slice(
                  n + 1,
                  n + 15
                ) +
                  1 ==
                  1e14 && (i = P(i, n + 1, 0))),
              (i.s = s),
              (d = !0),
              (u.rounding = o),
              P(i, n, o))
        }),
        (T.toPrecision = function(t, e) {
          var r,
            n = this,
            i = n.constructor
          return (
            void 0 === t
              ? (r = C(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (O(t, 1, u),
                void 0 === e ? (e = i.rounding) : O(e, 0, 8),
                (r = C(
                  (n = P(new i(n), t, e)),
                  t <= n.e || n.e <= i.toExpNeg,
                  t
                ))),
            n.isNeg() && !n.isZero() ? '-' + r : r
          )
        }),
        (T.toSignificantDigits = T.toSD = function(t, e) {
          var r = this.constructor
          return (
            void 0 === t
              ? ((t = r.precision), (e = r.rounding))
              : (O(t, 1, u), void 0 === e ? (e = r.rounding) : O(e, 0, 8)),
            P(new r(this), t, e)
          )
        }),
        (T.toString = function() {
          var t = this,
            e = t.constructor,
            r = C(t, t.e <= e.toExpNeg || t.e >= e.toExpPos)
          return t.isNeg() && !t.isZero() ? '-' + r : r
        }),
        (T.truncated = T.trunc = function() {
          return P(new this.constructor(this), this.e + 1, 1)
        }),
        (T.valueOf = T.toJSON = function() {
          var t = this,
            e = t.constructor,
            r = C(t, t.e <= e.toExpNeg || t.e >= e.toExpPos)
          return t.isNeg() ? '-' + r : r
        })
      var R = (function() {
        function t(t, e, r) {
          var n,
            i = 0,
            o = t.length
          for (t = t.slice(); o--; )
            (n = t[o] * e + i), (t[o] = n % r | 0), (i = (n / r) | 0)
          return i && t.unshift(i), t
        }
        function e(t, e, r, n) {
          var i, o
          if (r != n) o = r > n ? 1 : -1
          else
            for (i = o = 0; i < r; i++)
              if (t[i] != e[i]) {
                o = t[i] > e[i] ? 1 : -1
                break
              }
          return o
        }
        function r(t, e, r, n) {
          for (var i = 0; r--; )
            (t[r] -= i), (i = t[r] < e[r] ? 1 : 0), (t[r] = i * n + t[r] - e[r])
          for (; !t[0] && t.length > 1; ) t.shift()
        }
        return function(i, o, s, a, u, f) {
          var h,
            l,
            c,
            d,
            p,
            v,
            m,
            g,
            w,
            b,
            _,
            x,
            E,
            k,
            M,
            S,
            T,
            I,
            O,
            N,
            L = i.constructor,
            R = i.s == o.s ? 1 : -1,
            C = i.d,
            H = o.d
          if (!C || !C[0] || !H || !H[0])
            return new L(
              i.s && o.s && (C ? !H || C[0] != H[0] : H)
                ? (C && 0 == C[0]) || !H
                  ? 0 * R
                  : R / 0
                : NaN
            )
          for (
            f
              ? ((p = 1), (l = i.e - o.e))
              : ((f = B), (p = A), (l = y(i.e / p) - y(o.e / p))),
              O = H.length,
              T = C.length,
              b = (w = new L(R)).d = [],
              c = 0;
            H[c] == (C[c] || 0);
            c++
          );
          if (
            (H[c] > (C[c] || 0) && l--,
            null == s
              ? ((k = s = L.precision), (a = L.rounding))
              : (k = u ? s + (i.e - o.e) + 1 : s),
            k < 0)
          )
            b.push(1), (v = !0)
          else {
            if (((k = (k / p + 2) | 0), (c = 0), 1 == O)) {
              for (d = 0, H = H[0], k++; (c < T || d) && k--; c++)
                (M = d * f + (C[c] || 0)), (b[c] = (M / H) | 0), (d = M % H | 0)
              v = d || c < T
            } else {
              for (
                (d = (f / (H[0] + 1)) | 0) > 1 &&
                  ((H = t(H, d, f)),
                  (C = t(C, d, f)),
                  (O = H.length),
                  (T = C.length)),
                  S = O,
                  x = (_ = C.slice(0, O)).length;
                x < O;

              )
                _[x++] = 0
              ;(N = H.slice()).unshift(0), (I = H[0]), H[1] >= f / 2 && ++I
              do {
                ;(d = 0),
                  (h = e(H, _, O, x)) < 0
                    ? ((E = _[0]),
                      O != x && (E = E * f + (_[1] || 0)),
                      (d = (E / I) | 0) > 1
                        ? (d >= f && (d = f - 1),
                          1 ==
                            (h = e(
                              (m = t(H, d, f)),
                              _,
                              (g = m.length),
                              (x = _.length)
                            )) && (d--, r(m, O < g ? N : H, g, f)))
                        : (0 == d && (h = d = 1), (m = H.slice())),
                      (g = m.length) < x && m.unshift(0),
                      r(_, m, x, f),
                      -1 == h &&
                        (h = e(H, _, O, (x = _.length))) < 1 &&
                        (d++, r(_, O < x ? N : H, x, f)),
                      (x = _.length))
                    : 0 === h && (d++, (_ = [0])),
                  (b[c++] = d),
                  h && _[0] ? (_[x++] = C[S] || 0) : ((_ = [C[S]]), (x = 1))
              } while ((S++ < T || void 0 !== _[0]) && k--)
              v = void 0 !== _[0]
            }
            b[0] || b.shift()
          }
          if (1 == p) (w.e = l), (n = v)
          else {
            for (c = 1, d = b[0]; d >= 10; d /= 10) c++
            ;(w.e = c + l * p - 1), P(w, u ? s + w.e + 1 : s, a, v)
          }
          return w
        }
      })()
      function P(t, e, r, n) {
        var i,
          o,
          s,
          a,
          u,
          f,
          h,
          l,
          c,
          p = t.constructor
        t: if (null != e) {
          if (!(l = t.d)) return t
          for (i = 1, a = l[0]; a >= 10; a /= 10) i++
          if ((o = e - i) < 0)
            (o += A),
              (s = e),
              (u = ((h = l[(c = 0)]) / b(10, i - s - 1)) % 10 | 0)
          else if ((c = Math.ceil((o + 1) / A)) >= (a = l.length)) {
            if (!n) break t
            for (; a++ <= c; ) l.push(0)
            ;(h = u = 0), (i = 1), (s = (o %= A) - A + 1)
          } else {
            for (h = a = l[c], i = 1; a >= 10; a /= 10) i++
            u = (s = (o %= A) - A + i) < 0 ? 0 : (h / b(10, i - s - 1)) % 10 | 0
          }
          if (
            ((n =
              n ||
              e < 0 ||
              void 0 !== l[c + 1] ||
              (s < 0 ? h : h % b(10, i - s - 1))),
            (f =
              r < 4
                ? (u || n) && (0 == r || r == (t.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (o > 0 ? (s > 0 ? h / b(10, i - s) : 0) : l[c - 1]) %
                          10 &
                          1) ||
                      r == (t.s < 0 ? 8 : 7)))),
            e < 1 || !l[0])
          )
            return (
              (l.length = 0),
              f
                ? ((e -= t.e + 1),
                  (l[0] = b(10, (A - (e % A)) % A)),
                  (t.e = -e || 0))
                : (l[0] = t.e = 0),
              t
            )
          if (
            (0 == o
              ? ((l.length = c), (a = 1), c--)
              : ((l.length = c + 1),
                (a = b(10, A - o)),
                (l[c] = s > 0 ? ((h / b(10, i - s)) % b(10, s) | 0) * a : 0)),
            f)
          )
            for (;;) {
              if (0 == c) {
                for (o = 1, s = l[0]; s >= 10; s /= 10) o++
                for (s = l[0] += a, a = 1; s >= 10; s /= 10) a++
                o != a && (t.e++, l[0] == B && (l[0] = 1))
                break
              }
              if (((l[c] += a), l[c] != B)) break
              ;(l[c--] = 0), (a = 1)
            }
          for (o = l.length; 0 === l[--o]; ) l.pop()
        }
        return (
          d &&
            (t.e > p.maxE
              ? ((t.d = null), (t.e = NaN))
              : t.e < p.minE && ((t.e = 0), (t.d = [0]))),
          t
        )
      }
      function C(t, e, r) {
        if (!t.isFinite()) return V(t)
        var n,
          i = t.e,
          o = I(t.d),
          s = o.length
        return (
          e
            ? (r && (n = r - s) > 0
                ? (o = o.charAt(0) + '.' + o.slice(1) + Z(n))
                : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
              (o = o + (t.e < 0 ? 'e' : 'e+') + t.e))
            : i < 0
            ? ((o = '0.' + Z(-i - 1) + o), r && (n = r - s) > 0 && (o += Z(n)))
            : i >= s
            ? ((o += Z(i + 1 - s)),
              r && (n = r - i - 1) > 0 && (o = o + '.' + Z(n)))
            : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
              r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += Z(n)))),
          o
        )
      }
      function H(t, e) {
        var r = t[0]
        for (e *= A; r >= 10; r /= 10) e++
        return e
      }
      function U(t, e, r) {
        if (e > M) throw ((d = !0), r && (t.precision = r), Error(m))
        return P(new t(h), e, 1, !0)
      }
      function F(t, e, r) {
        if (e > S) throw Error(m)
        return P(new t(l), e, r, !0)
      }
      function D(t) {
        var e = t.length - 1,
          r = e * A + 1
        if ((e = t[e])) {
          for (; e % 10 == 0; e /= 10) r--
          for (e = t[0]; e >= 10; e /= 10) r++
        }
        return r
      }
      function Z(t) {
        for (var e = ''; t--; ) e += '0'
        return e
      }
      function z(t, e, r, n) {
        var i,
          o = new t(1),
          s = Math.ceil(n / A + 4)
        for (d = !1; ; ) {
          if (
            (r % 2 && tt((o = o.times(e)).d, s) && (i = !0),
            0 === (r = y(r / 2)))
          ) {
            ;(r = o.d.length - 1), i && 0 === o.d[r] && ++o.d[r]
            break
          }
          tt((e = e.times(e)).d, s)
        }
        return (d = !0), o
      }
      function j(t) {
        return 1 & t.d[t.d.length - 1]
      }
      function q(t, e, r) {
        for (var n, i = new t(e[0]), o = 0; ++o < e.length; ) {
          if (!(n = new t(e[o])).s) {
            i = n
            break
          }
          i[r](n) && (i = n)
        }
        return i
      }
      function K(t, e) {
        var r,
          n,
          i,
          o,
          s,
          a,
          u,
          f = 0,
          h = 0,
          l = 0,
          c = t.constructor,
          p = c.rounding,
          v = c.precision
        if (!t.d || !t.d[0] || t.e > 17)
          return new c(
            t.d
              ? t.d[0]
                ? t.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : t.s
              ? t.s < 0
                ? 0
                : t
              : NaN
          )
        for (
          null == e ? ((d = !1), (u = v)) : (u = e), a = new c(0.03125);
          t.e > -2;

        )
          (t = t.times(a)), (l += 5)
        for (
          u += n = ((Math.log(b(2, l)) / Math.LN10) * 2 + 5) | 0,
            r = o = s = new c(1),
            c.precision = u;
          ;

        ) {
          if (
            ((o = P(o.times(t), u, 1)),
            (r = r.times(++h)),
            I((a = s.plus(R(o, r, u, 1))).d).slice(0, u) === I(s.d).slice(0, u))
          ) {
            for (i = l; i--; ) s = P(s.times(s), u, 1)
            if (null != e) return (c.precision = v), s
            if (!(f < 3 && N(s.d, u - n, p, f)))
              return P(s, (c.precision = v), p, (d = !0))
            ;(c.precision = u += 10), (r = o = a = new c(1)), (h = 0), f++
          }
          s = a
        }
      }
      function W(t, e) {
        var r,
          n,
          i,
          o,
          s,
          a,
          u,
          f,
          h,
          l,
          c,
          p = 1,
          v = t,
          m = v.d,
          g = v.constructor,
          w = g.rounding,
          y = g.precision
        if (v.s < 0 || !m || !m[0] || (!v.e && 1 == m[0] && 1 == m.length))
          return new g(m && !m[0] ? -1 / 0 : 1 != v.s ? NaN : m ? 0 : v)
        if (
          (null == e ? ((d = !1), (h = y)) : (h = e),
          (g.precision = h += 10),
          (n = (r = I(m)).charAt(0)),
          !(Math.abs((o = v.e)) < 15e14))
        )
          return (
            (f = U(g, h + 2, y).times(o + '')),
            (v = W(new g(n + '.' + r.slice(1)), h - 10).plus(f)),
            (g.precision = y),
            null == e ? P(v, y, w, (d = !0)) : v
          )
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = I((v = v.times(t)).d)).charAt(0)), p++
        for (
          o = v.e,
            n > 1
              ? ((v = new g('0.' + r)), o++)
              : (v = new g(n + '.' + r.slice(1))),
            l = v,
            u = s = v = R(v.minus(1), v.plus(1), h, 1),
            c = P(v.times(v), h, 1),
            i = 3;
          ;

        ) {
          if (
            ((s = P(s.times(c), h, 1)),
            I((f = u.plus(R(s, new g(i), h, 1))).d).slice(0, h) ===
              I(u.d).slice(0, h))
          ) {
            if (
              ((u = u.times(2)),
              0 !== o && (u = u.plus(U(g, h + 2, y).times(o + ''))),
              (u = R(u, new g(p), h, 1)),
              null != e)
            )
              return (g.precision = y), u
            if (!N(u.d, h - 10, w, a))
              return P(u, (g.precision = y), w, (d = !0))
            ;(g.precision = h += 10),
              (f = s = v = R(l.minus(1), l.plus(1), h, 1)),
              (c = P(v.times(v), h, 1)),
              (i = a = 1)
          }
          ;(u = f), (i += 2)
        }
      }
      function V(t) {
        return String((t.s * t.s) / 0)
      }
      function G(t, e) {
        var r, n, i
        for (
          (r = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
            (n = e.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +e.slice(n + 1)),
                (e = e.substring(0, n)))
              : r < 0 && (r = e.length),
            n = 0;
          48 === e.charCodeAt(n);
          n++
        );
        for (i = e.length; 48 === e.charCodeAt(i - 1); --i);
        if ((e = e.slice(n, i))) {
          if (
            ((i -= n),
            (t.e = r = r - n - 1),
            (t.d = []),
            (n = (r + 1) % A),
            r < 0 && (n += A),
            n < i)
          ) {
            for (n && t.d.push(+e.slice(0, n)), i -= A; n < i; )
              t.d.push(+e.slice(n, (n += A)))
            ;(e = e.slice(n)), (n = A - e.length)
          } else n -= i
          for (; n--; ) e += '0'
          t.d.push(+e),
            d &&
              (t.e > t.constructor.maxE
                ? ((t.d = null), (t.e = NaN))
                : t.e < t.constructor.minE && ((t.e = 0), (t.d = [0])))
        } else (t.e = 0), (t.d = [0])
        return t
      }
      function Y(t, e) {
        var r, n, i, o, s, a, u, f, h
        if (e.indexOf('_') > -1) {
          if (((e = e.replace(/(\d)_(?=\d)/g, '$1')), k.test(e))) return G(t, e)
        } else if ('Infinity' === e || 'NaN' === e)
          return +e || (t.s = NaN), (t.e = NaN), (t.d = null), t
        if (x.test(e)) (r = 16), (e = e.toLowerCase())
        else if (_.test(e)) r = 2
        else {
          if (!E.test(e)) throw Error(v + e)
          r = 8
        }
        for (
          (o = e.search(/p/i)) > 0
            ? ((u = +e.slice(o + 1)), (e = e.substring(2, o)))
            : (e = e.slice(2)),
            s = (o = e.indexOf('.')) >= 0,
            n = t.constructor,
            s &&
              ((o = (a = (e = e.replace('.', '')).length) - o),
              (i = z(n, new n(r), o, 2 * o))),
            o = h = (f = L(e, r, B)).length - 1;
          0 === f[o];
          --o
        )
          f.pop()
        return o < 0
          ? new n(0 * t.s)
          : ((t.e = H(f, h)),
            (t.d = f),
            (d = !1),
            s && (t = R(t, i, 4 * a)),
            u && (t = t.times(Math.abs(u) < 54 ? b(2, u) : Zt.pow(2, u))),
            (d = !0),
            t)
      }
      function X(t, e, r, n, i) {
        var o,
          s,
          a,
          u,
          f = t.precision,
          h = Math.ceil(f / A)
        for (d = !1, u = r.times(r), a = new t(n); ; ) {
          if (
            ((s = R(a.times(u), new t(e++ * e++), f, 1)),
            (a = i ? n.plus(s) : n.minus(s)),
            (n = R(s.times(u), new t(e++ * e++), f, 1)),
            void 0 !== (s = a.plus(n)).d[h])
          ) {
            for (o = h; s.d[o] === a.d[o] && o--; );
            if (-1 == o) break
          }
          ;(o = a), (a = n), (n = s), (s = o)
        }
        return (d = !0), (s.d.length = h + 1), s
      }
      function $(t, e) {
        for (var r = t; --e; ) r *= t
        return r
      }
      function J(t, e) {
        var r,
          n = e.s < 0,
          o = F(t, t.precision, 1),
          s = o.times(0.5)
        if ((e = e.abs()).lte(s)) return (i = n ? 4 : 1), e
        if ((r = e.divToInt(o)).isZero()) i = n ? 3 : 2
        else {
          if ((e = e.minus(r.times(o))).lte(s))
            return (i = j(r) ? (n ? 2 : 3) : n ? 4 : 1), e
          i = j(r) ? (n ? 1 : 4) : n ? 3 : 2
        }
        return e.minus(o).abs()
      }
      function Q(t, e, r, i) {
        var o,
          s,
          a,
          h,
          l,
          c,
          d,
          p,
          v,
          m = t.constructor,
          g = void 0 !== r
        if (
          (g
            ? (O(r, 1, u), void 0 === i ? (i = m.rounding) : O(i, 0, 8))
            : ((r = m.precision), (i = m.rounding)),
          t.isFinite())
        ) {
          for (
            g
              ? ((o = 2), 16 == e ? (r = 4 * r - 3) : 8 == e && (r = 3 * r - 2))
              : (o = e),
              (a = (d = C(t)).indexOf('.')) >= 0 &&
                ((d = d.replace('.', '')),
                ((v = new m(1)).e = d.length - a),
                (v.d = L(C(v), 10, o)),
                (v.e = v.d.length)),
              s = l = (p = L(d, 10, o)).length;
            0 == p[--l];

          )
            p.pop()
          if (p[0]) {
            if (
              (a < 0
                ? s--
                : (((t = new m(t)).d = p),
                  (t.e = s),
                  (p = (t = R(t, v, r, i, 0, o)).d),
                  (s = t.e),
                  (c = n)),
              (a = p[r]),
              (h = o / 2),
              (c = c || void 0 !== p[r + 1]),
              (c =
                i < 4
                  ? (void 0 !== a || c) && (0 === i || i === (t.s < 0 ? 3 : 2))
                  : a > h ||
                    (a === h &&
                      (4 === i ||
                        c ||
                        (6 === i && 1 & p[r - 1]) ||
                        i === (t.s < 0 ? 8 : 7)))),
              (p.length = r),
              c)
            )
              for (; ++p[--r] > o - 1; ) (p[r] = 0), r || (++s, p.unshift(1))
            for (l = p.length; !p[l - 1]; --l);
            for (a = 0, d = ''; a < l; a++) d += f.charAt(p[a])
            if (g) {
              if (l > 1)
                if (16 == e || 8 == e) {
                  for (a = 16 == e ? 4 : 3, --l; l % a; l++) d += '0'
                  for (l = (p = L(d, o, e)).length; !p[l - 1]; --l);
                  for (a = 1, d = '1.'; a < l; a++) d += f.charAt(p[a])
                } else d = d.charAt(0) + '.' + d.slice(1)
              d = d + (s < 0 ? 'p' : 'p+') + s
            } else if (s < 0) {
              for (; ++s; ) d = '0' + d
              d = '0.' + d
            } else if (++s > l) for (s -= l; s--; ) d += '0'
            else s < l && (d = d.slice(0, s) + '.' + d.slice(s))
          } else d = g ? '0p+0' : '0'
          d = (16 == e ? '0x' : 2 == e ? '0b' : 8 == e ? '0o' : '') + d
        } else d = V(t)
        return t.s < 0 ? '-' + d : d
      }
      function tt(t, e) {
        if (t.length > e) return (t.length = e), !0
      }
      function et(t) {
        return new this(t).abs()
      }
      function rt(t) {
        return new this(t).acos()
      }
      function nt(t) {
        return new this(t).acosh()
      }
      function it(t, e) {
        return new this(t).plus(e)
      }
      function ot(t) {
        return new this(t).asin()
      }
      function st(t) {
        return new this(t).asinh()
      }
      function at(t) {
        return new this(t).atan()
      }
      function ut(t) {
        return new this(t).atanh()
      }
      function ft(t, e) {
        ;(t = new this(t)), (e = new this(e))
        var r,
          n = this.precision,
          i = this.rounding,
          o = n + 4
        return (
          t.s && e.s
            ? t.d || e.d
              ? !e.d || t.isZero()
                ? ((r = e.s < 0 ? F(this, n, i) : new this(0)).s = t.s)
                : !t.d || e.isZero()
                ? ((r = F(this, o, 1).times(0.5)).s = t.s)
                : e.s < 0
                ? ((this.precision = o),
                  (this.rounding = 1),
                  (r = this.atan(R(t, e, o, 1))),
                  (e = F(this, o, 1)),
                  (this.precision = n),
                  (this.rounding = i),
                  (r = t.s < 0 ? r.minus(e) : r.plus(e)))
                : (r = this.atan(R(t, e, o, 1)))
              : ((r = F(this, o, 1).times(e.s > 0 ? 0.25 : 0.75)).s = t.s)
            : (r = new this(NaN)),
          r
        )
      }
      function ht(t) {
        return new this(t).cbrt()
      }
      function lt(t) {
        return P((t = new this(t)), t.e + 1, 2)
      }
      function ct(t, e, r) {
        return new this(t).clamp(e, r)
      }
      function dt(t) {
        if (!t || 'object' !== typeof t) throw Error(p + 'Object expected')
        var e,
          r,
          n,
          i = !0 === t.defaults,
          o = [
            'precision',
            1,
            u,
            'rounding',
            0,
            8,
            'toExpNeg',
            -a,
            0,
            'toExpPos',
            0,
            a,
            'maxE',
            0,
            a,
            'minE',
            -a,
            0,
            'modulo',
            0,
            9
          ]
        for (e = 0; e < o.length; e += 3)
          if (((r = o[e]), i && (this[r] = c[r]), void 0 !== (n = t[r]))) {
            if (!(y(n) === n && n >= o[e + 1] && n <= o[e + 2]))
              throw Error(v + r + ': ' + n)
            this[r] = n
          }
        if (((r = 'crypto'), i && (this[r] = c[r]), void 0 !== (n = t[r]))) {
          if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
            throw Error(v + r + ': ' + n)
          if (n) {
            if (
              'undefined' == typeof crypto ||
              !crypto ||
              (!crypto.getRandomValues && !crypto.randomBytes)
            )
              throw Error(g)
            this[r] = !0
          } else this[r] = !1
        }
        return this
      }
      function pt(t) {
        return new this(t).cos()
      }
      function vt(t) {
        return new this(t).cosh()
      }
      function mt(t, e) {
        return new this(t).div(e)
      }
      function gt(t) {
        return new this(t).exp()
      }
      function wt(t) {
        return P((t = new this(t)), t.e + 1, 3)
      }
      function yt() {
        var t,
          e,
          r = new this(0)
        for (d = !1, t = 0; t < arguments.length; )
          if ((e = new this(arguments[t++])).d) r.d && (r = r.plus(e.times(e)))
          else {
            if (e.s) return (d = !0), new this(1 / 0)
            r = e
          }
        return (d = !0), r.sqrt()
      }
      function bt(t) {
        return t instanceof Zt || (t && t.toStringTag === w) || !1
      }
      function _t(t) {
        return new this(t).ln()
      }
      function xt(t, e) {
        return new this(t).log(e)
      }
      function Et(t) {
        return new this(t).log(2)
      }
      function kt(t) {
        return new this(t).log(10)
      }
      function Bt() {
        return q(this, arguments, 'lt')
      }
      function At() {
        return q(this, arguments, 'gt')
      }
      function Mt(t, e) {
        return new this(t).mod(e)
      }
      function St(t, e) {
        return new this(t).mul(e)
      }
      function Tt(t, e) {
        return new this(t).pow(e)
      }
      function It(t) {
        var e,
          r,
          n,
          i,
          o = 0,
          s = new this(1),
          a = []
        if (
          (void 0 === t ? (t = this.precision) : O(t, 1, u),
          (n = Math.ceil(t / A)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (e = crypto.getRandomValues(new Uint32Array(n)); o < n; )
              (i = e[o]) >= 429e7
                ? (e[o] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[o++] = i % 1e7)
          else {
            if (!crypto.randomBytes) throw Error(g)
            for (e = crypto.randomBytes((n *= 4)); o < n; )
              (i =
                e[o] +
                (e[o + 1] << 8) +
                (e[o + 2] << 16) +
                ((127 & e[o + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(e, o)
                : (a.push(i % 1e7), (o += 4))
            o = n / 4
          }
        else for (; o < n; ) a[o++] = (1e7 * Math.random()) | 0
        for (
          n = a[--o],
            t %= A,
            n && t && ((i = b(10, A - t)), (a[o] = ((n / i) | 0) * i));
          0 === a[o];
          o--
        )
          a.pop()
        if (o < 0) (r = 0), (a = [0])
        else {
          for (r = -1; 0 === a[0]; r -= A) a.shift()
          for (n = 1, i = a[0]; i >= 10; i /= 10) n++
          n < A && (r -= A - n)
        }
        return (s.e = r), (s.d = a), s
      }
      function Ot(t) {
        return P((t = new this(t)), t.e + 1, this.rounding)
      }
      function Nt(t) {
        return (t = new this(t)).d ? (t.d[0] ? t.s : 0 * t.s) : t.s || NaN
      }
      function Lt(t) {
        return new this(t).sin()
      }
      function Rt(t) {
        return new this(t).sinh()
      }
      function Pt(t) {
        return new this(t).sqrt()
      }
      function Ct(t, e) {
        return new this(t).sub(e)
      }
      function Ht() {
        var t = 0,
          e = arguments,
          r = new this(e[t])
        for (d = !1; r.s && ++t < e.length; ) r = r.plus(e[t])
        return (d = !0), P(r, this.precision, this.rounding)
      }
      function Ut(t) {
        return new this(t).tan()
      }
      function Ft(t) {
        return new this(t).tanh()
      }
      function Dt(t) {
        return P((t = new this(t)), t.e + 1, 1)
      }
      ;(T[Symbol.for('nodejs.util.inspect.custom')] = T.toString),
        (T[Symbol.toStringTag] = 'Decimal')
      var Zt = (T.constructor = (function t(e) {
        var r, n, i
        function o(t) {
          var e,
            r,
            n,
            i = this
          if (!(i instanceof o)) return new o(t)
          if (((i.constructor = o), bt(t)))
            return (
              (i.s = t.s),
              void (d
                ? !t.d || t.e > o.maxE
                  ? ((i.e = NaN), (i.d = null))
                  : t.e < o.minE
                  ? ((i.e = 0), (i.d = [0]))
                  : ((i.e = t.e), (i.d = t.d.slice()))
                : ((i.e = t.e), (i.d = t.d ? t.d.slice() : t.d)))
            )
          if ('number' === (n = typeof t)) {
            if (0 === t)
              return (i.s = 1 / t < 0 ? -1 : 1), (i.e = 0), void (i.d = [0])
            if (
              (t < 0 ? ((t = -t), (i.s = -1)) : (i.s = 1), t === ~~t && t < 1e7)
            ) {
              for (e = 0, r = t; r >= 10; r /= 10) e++
              return void (d
                ? e > o.maxE
                  ? ((i.e = NaN), (i.d = null))
                  : e < o.minE
                  ? ((i.e = 0), (i.d = [0]))
                  : ((i.e = e), (i.d = [t]))
                : ((i.e = e), (i.d = [t])))
            }
            return 0 * t !== 0
              ? (t || (i.s = NaN), (i.e = NaN), void (i.d = null))
              : G(i, t.toString())
          }
          if ('string' !== n) throw Error(v + t)
          return (
            45 === (r = t.charCodeAt(0))
              ? ((t = t.slice(1)), (i.s = -1))
              : (43 === r && (t = t.slice(1)), (i.s = 1)),
            k.test(t) ? G(i, t) : Y(i, t)
          )
        }
        if (
          ((o.prototype = T),
          (o.ROUND_UP = 0),
          (o.ROUND_DOWN = 1),
          (o.ROUND_CEIL = 2),
          (o.ROUND_FLOOR = 3),
          (o.ROUND_HALF_UP = 4),
          (o.ROUND_HALF_DOWN = 5),
          (o.ROUND_HALF_EVEN = 6),
          (o.ROUND_HALF_CEIL = 7),
          (o.ROUND_HALF_FLOOR = 8),
          (o.EUCLID = 9),
          (o.config = o.set = dt),
          (o.clone = t),
          (o.isDecimal = bt),
          (o.abs = et),
          (o.acos = rt),
          (o.acosh = nt),
          (o.add = it),
          (o.asin = ot),
          (o.asinh = st),
          (o.atan = at),
          (o.atanh = ut),
          (o.atan2 = ft),
          (o.cbrt = ht),
          (o.ceil = lt),
          (o.clamp = ct),
          (o.cos = pt),
          (o.cosh = vt),
          (o.div = mt),
          (o.exp = gt),
          (o.floor = wt),
          (o.hypot = yt),
          (o.ln = _t),
          (o.log = xt),
          (o.log10 = kt),
          (o.log2 = Et),
          (o.max = Bt),
          (o.min = At),
          (o.mod = Mt),
          (o.mul = St),
          (o.pow = Tt),
          (o.random = It),
          (o.round = Ot),
          (o.sign = Nt),
          (o.sin = Lt),
          (o.sinh = Rt),
          (o.sqrt = Pt),
          (o.sub = Ct),
          (o.sum = Ht),
          (o.tan = Ut),
          (o.tanh = Ft),
          (o.trunc = Dt),
          void 0 === e && (e = {}),
          e && !0 !== e.defaults)
        )
          for (
            i = [
              'precision',
              'rounding',
              'toExpNeg',
              'toExpPos',
              'maxE',
              'minE',
              'modulo',
              'crypto'
            ],
              r = 0;
            r < i.length;

          )
            e.hasOwnProperty((n = i[r++])) || (e[n] = this[n])
        return o.config(e), o
      })(c))
      ;(h = new Zt(h)), (l = new Zt(l))
      var zt = r(12901),
        jt = Zt.clone({ defaults: !0, toExpPos: 33 }),
        qt = function(t) {
          return (0, zt.isBN)(t) ? new jt(t.toString(10)) : new jt(t)
        },
        Kt = function(t, e) {
          return e._n ? e.to(t._unit)._n : qt(e)
        },
        Wt = (function() {
          function t(e) {
            var r = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'wei'
            ;(0, o.A)(this, t),
              e instanceof t
                ? ((this._n = qt(e._n)), (this._unit = e._unit))
                : ((this._n = qt(e)), (this._unit = n)),
              ['mul', 'sub', 'div', 'add'].forEach(function(e) {
                r[e] = function(n) {
                  return new t(r._n[e].call(r._n, Kt(r, n)), r._unit)
                }
              }),
              ['gt', 'gte', 'lt', 'lte', 'eq'].forEach(function(t) {
                r[t] = function(e) {
                  return r._n[t].call(r._n, Kt(r, e))
                }
              })
          }
          return (0, s.A)(t, [
            {
              key: 'isWei',
              get: function() {
                return 'wei' === this._unit
              }
            },
            {
              key: 'isGwei',
              get: function() {
                return 'gwei' === this._unit
              }
            },
            {
              key: 'isEth',
              get: function() {
                return 'eth' === this._unit
              }
            },
            {
              key: 'unit',
              get: function() {
                return this._unit
              }
            },
            {
              key: 'scaleDown',
              value: function(t) {
                return this.mul(qt(10).pow(qt(t)))
              }
            },
            {
              key: 'scaleUp',
              value: function(t) {
                return this.div(qt(10).pow(qt(t)))
              }
            },
            {
              key: 'toWei',
              value: function() {
                if (this.isWei) return new t(this)
                if (this.isGwei) {
                  var e = this.scaleDown(9)
                  return (e._unit = 'wei'), e
                }
                if (this.isEth) {
                  var r = this.scaleDown(18)
                  return (r._unit = 'wei'), r
                }
                throw new Error('Unit of measurement uncertain')
              }
            },
            {
              key: 'toGwei',
              value: function() {
                if (this.isWei) {
                  var e = this.scaleUp(9)
                  return (e._unit = 'gwei'), e
                }
                if (this.isGwei) return new t(this)
                if (this.isEth) {
                  var r = this.scaleDown(9)
                  return (r._unit = 'gwei'), r
                }
                throw new Error('Unit of measurement uncertain')
              }
            },
            {
              key: 'toEth',
              value: function() {
                if (this.isWei) {
                  var e = this.scaleUp(18)
                  return (e._unit = 'eth'), e
                }
                if (this.isGwei) {
                  var r = this.scaleUp(9)
                  return (r._unit = 'eth'), r
                }
                if (this.isEth) return new t(this)
                throw new Error('Unit of measurement uncertain')
              }
            },
            {
              key: 'to',
              value: function(t) {
                switch (t) {
                  case 'wei':
                    return this.toWei()
                  case 'gwei':
                    return this.toGwei()
                  case 'eth':
                    return this.toEth()
                  default:
                    throw new Error('Unrecognized unit: '.concat(t))
                }
              }
            },
            {
              key: 'toString',
              value: function(t) {
                switch (t) {
                  case 2:
                    var e = this._n.toBinary()
                    return (e = e.substr(e.indexOf('b') + 1))
                  case 16:
                    return this._n.toHexadecimal()
                  default:
                    return this._n.toString()
                }
              }
            },
            {
              key: 'toFixed',
              value: function(t) {
                return this._n.toFixed(t)
              }
            },
            {
              key: 'toNumber',
              value: function() {
                return this._n.toNumber()
              }
            },
            {
              key: 'toWeiBN',
              value: function() {
                return (0, zt.toBN)(
                  new t(this.toString(), this._unit).toWei().toString()
                )
              }
            }
          ])
        })()
    },
    50149: function(t) {
      t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
          i[r] = e(t[r], r, t)
        return i
      }
    },
    52969: function(t, e, r) {
      var n = r(35324),
        i = r(70914)
      t.exports = function(t, e) {
        for (var r = 0, o = (e = n(e, t)).length; null != t && r < o; )
          t = t[i(e[r++])]
        return r && r == o ? t : void 0
      }
    },
    38541: function(t, e, r) {
      var n = r(9812),
        i = r(50149),
        o = r(54052),
        s = r(19841),
        a = n ? n.prototype : void 0,
        u = a ? a.toString : void 0
      t.exports = function t(e) {
        if ('string' == typeof e) return e
        if (o(e)) return i(e, t) + ''
        if (s(e)) return u ? u.call(e) : ''
        var r = e + ''
        return '0' == r && 1 / e == -1 / 0 ? '-0' : r
      }
    },
    35324: function(t, e, r) {
      var n = r(54052),
        i = r(62597),
        o = r(14079),
        s = r(41069)
      t.exports = function(t, e) {
        return n(t) ? t : i(t, e) ? [t] : o(s(t))
      }
    },
    62597: function(t, e, r) {
      var n = r(54052),
        i = r(19841),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/
      t.exports = function(t, e) {
        if (n(t)) return !1
        var r = typeof t
        return (
          !(
            'number' != r &&
            'symbol' != r &&
            'boolean' != r &&
            null != t &&
            !i(t)
          ) ||
          (s.test(t) || !o.test(t) || (null != e && t in Object(e)))
        )
      }
    },
    88259: function(t, e, r) {
      var n = r(15797)
      t.exports = function(t) {
        var e = n(t, function(t) {
            return 500 === r.size && r.clear(), t
          }),
          r = e.cache
        return e
      }
    },
    14079: function(t, e, r) {
      var n = r(88259),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        s = n(function(t) {
          var e = []
          return (
            46 === t.charCodeAt(0) && e.push(''),
            t.replace(i, function(t, r, n, i) {
              e.push(n ? i.replace(o, '$1') : r || t)
            }),
            e
          )
        })
      t.exports = s
    },
    70914: function(t, e, r) {
      var n = r(19841)
      t.exports = function(t) {
        if ('string' == typeof t || n(t)) return t
        var e = t + ''
        return '0' == e && 1 / t == -1 / 0 ? '-0' : e
      }
    },
    33097: function(t, e, r) {
      var n = r(52969)
      t.exports = function(t, e, r) {
        var i = null == t ? void 0 : n(t, e)
        return void 0 === i ? r : i
      }
    },
    19841: function(t, e, r) {
      var n = r(16913),
        i = r(22761)
      t.exports = function(t) {
        return 'symbol' == typeof t || (i(t) && '[object Symbol]' == n(t))
      }
    },
    74065: function(t) {
      t.exports = function(t) {
        var e = null == t ? 0 : t.length
        return e ? t[e - 1] : void 0
      }
    },
    15797: function(t, e, r) {
      var n = r(64816)
      function i(t, e) {
        if ('function' != typeof t || (null != e && 'function' != typeof e))
          throw new TypeError('Expected a function')
        var r = function r() {
          var n = arguments,
            i = e ? e.apply(this, n) : n[0],
            o = r.cache
          if (o.has(i)) return o.get(i)
          var s = t.apply(this, n)
          return (r.cache = o.set(i, s) || o), s
        }
        return (r.cache = new (i.Cache || n)()), r
      }
      ;(i.Cache = n), (t.exports = i)
    },
    41069: function(t, e, r) {
      var n = r(38541)
      t.exports = function(t) {
        return null == t ? '' : n(t)
      }
    },
    63334: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(62285),
        o = r(4633).default,
        s = r(29293).default,
        a = r(12897).default,
        u = r(34579).default,
        f = r(17383).default,
        h = r(18336).default,
        l = r(29511).default,
        c = r(61837).default,
        d = r(82881).default
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.InvalidStatusCodeError = e.InvalidCertError = void 0)
      var p = Object.freeze({
          redirect: !0,
          expectStatusCode: 200,
          headers: {},
          full: !1,
          keepAlive: !0,
          cors: !1,
          referrer: !1,
          sslAllowSelfSigned: !1,
          _redirectCount: 0
        }),
        v = (function(t) {
          function e(t, r) {
            var n
            return f(this, e), ((n = h(this, e, [t])).fingerprint256 = r), n
          }
          return l(e, t), u(e)
        })(c(Error))
      e.InvalidCertError = v
      var m = (function(t) {
        function e(t) {
          var r
          return (
            f(this, e),
            ((r = h(this, e, [
              'Request Failed. Status Code: '.concat(t)
            ])).statusCode = t),
            r
          )
        }
        return l(e, t), u(e)
      })(c(Error))
      function g(t, e) {
        if (!e || 'text' === e || 'json' === e)
          try {
            var r = new TextDecoder('utf8', { fatal: !0 }).decode(t)
            if ('text' === e) return r
            try {
              return JSON.parse(r)
            } catch (n) {
              if ('json' === e) throw n
              return r
            }
          } catch (n) {
            if ('text' === e || 'json' === e) throw n
          }
        return t
      }
      e.InvalidStatusCodeError = m
      var w = {}
      function y(t, e) {
        var i = a(a({}, p), e),
          u = r(20105),
          f = r(95936),
          h = r(50869),
          l = r(86494).promisify,
          c = r(74080).resolve,
          b = !!/^https/.test(t),
          _ = {
            method: i.method || 'GET',
            headers: { 'Accept-Encoding': 'gzip, deflate, br' }
          },
          x = function(t) {
            return t.replace(/:| /g, '').toLowerCase()
          }
        if (i.keepAlive) {
          var E,
            k = [
              b,
              b &&
                (null === (E = i.sslPinnedCertificates) || void 0 === E
                  ? void 0
                  : E.map(function(t) {
                      return x(t)
                    }).sort())
            ].join()
          _.agent =
            w[k] ||
            (w[k] = new (b ? f : u).Agent({
              keepAlive: !0,
              keepAliveMsecs: 3e4,
              maxFreeSockets: 1024,
              maxCachedSessions: 1024
            }))
        }
        'json' === i.type && (_.headers['Content-Type'] = 'application/json'),
          i.data &&
            (i.method || (_.method = 'POST'),
            (_.body = 'json' === i.type ? JSON.stringify(i.data) : i.data)),
          (_.headers = a(a({}, _.headers), i.headers)),
          i.sslAllowSelfSigned && (_.rejectUnauthorized = !1)
        var B = (function() {
          var e = s(
            o().mark(function e(r) {
              var s, a, u, f, p, v, w, b, _, x, E
              return o().wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((s = r.statusCode),
                          !(
                            i.redirect &&
                            300 <= s &&
                            s < 400 &&
                            r.headers.location
                          ))
                        ) {
                          e.next = 8
                          break
                        }
                        if (10 != i._redirectCount) {
                          e.next = 4
                          break
                        }
                        throw new Error('Request failed. Too much redirects.')
                      case 4:
                        return (
                          (i._redirectCount += 1),
                          (e.next = 7),
                          y(c(t, r.headers.location), i)
                        )
                      case 7:
                        return e.abrupt('return', e.sent)
                      case 8:
                        if (!i.expectStatusCode || s === i.expectStatusCode) {
                          e.next = 11
                          break
                        }
                        throw (r.resume(), new m(s))
                      case 11:
                        ;(a = []), (u = !1), (f = !1), (e.prev = 14), (v = d(r))
                      case 16:
                        return (e.next = 18), v.next()
                      case 18:
                        if (!(u = !(w = e.sent).done)) {
                          e.next = 24
                          break
                        }
                        ;(b = w.value), a.push(b)
                      case 21:
                        ;(u = !1), (e.next = 16)
                        break
                      case 24:
                        e.next = 30
                        break
                      case 26:
                        ;(e.prev = 26),
                          (e.t0 = e.catch(14)),
                          (f = !0),
                          (p = e.t0)
                      case 30:
                        if (
                          ((e.prev = 30), (e.prev = 31), !u || null == v.return)
                        ) {
                          e.next = 35
                          break
                        }
                        return (e.next = 35), v.return()
                      case 35:
                        if (((e.prev = 35), !f)) {
                          e.next = 38
                          break
                        }
                        throw p
                      case 38:
                        return e.finish(35)
                      case 39:
                        return e.finish(30)
                      case 40:
                        if (
                          ((_ = n.concat(a)),
                          'br' !== (x = r.headers['content-encoding']))
                        ) {
                          e.next = 46
                          break
                        }
                        return (e.next = 45), l(h.brotliDecompress)(_)
                      case 45:
                        _ = e.sent
                      case 46:
                        if ('gzip' !== x && 'deflate' !== x) {
                          e.next = 50
                          break
                        }
                        return (e.next = 49), l(h.unzip)(_)
                      case 49:
                        _ = e.sent
                      case 50:
                        if (((E = g(_, i.type)), !i.full)) {
                          e.next = 53
                          break
                        }
                        return e.abrupt('return', {
                          headers: r.headers,
                          status: s,
                          body: E
                        })
                      case 53:
                        return e.abrupt('return', E)
                      case 54:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[14, 26, 30, 40], [31, , 35, 39]]
              )
            })
          )
          return function(t) {
            return e.apply(this, arguments)
          }
        })()
        return new Promise(function(e, r) {
          var n,
            h = (function() {
              var e = s(
                o().mark(function e(n) {
                  return o().wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !n ||
                              'DEPTH_ZERO_SELF_SIGNED_CERT' !== n.code
                            ) {
                              e.next = 9
                              break
                            }
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              y(
                                t,
                                a(
                                  a({}, i),
                                  {},
                                  {
                                    sslAllowSelfSigned: !0,
                                    sslPinnedCertificates: []
                                  }
                                )
                              )
                            )
                          case 4:
                            e.next = 9
                            break
                          case 6:
                            ;(e.prev = 6),
                              (e.t0 = e.catch(1)),
                              e.t0 &&
                                e.t0.fingerprint256 &&
                                (n = new v(
                                  'Self-signed SSL certificate: '.concat(
                                    e.t0.fingerprint256
                                  ),
                                  e.t0.fingerprint256
                                ))
                          case 9:
                            r(n)
                          case 10:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 6]]
                  )
                })
              )
              return function(t) {
                return e.apply(this, arguments)
              }
            })(),
            l = (b ? f : u).request(t, _, function(t) {
              t.on('error', h),
                s(
                  o().mark(function n() {
                    return o().wrap(
                      function(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.prev = 0), (n.t0 = e), (n.next = 4), B(t)
                              )
                            case 4:
                              ;(n.t1 = n.sent), (0, n.t0)(n.t1), (n.next = 11)
                              break
                            case 8:
                              ;(n.prev = 8), (n.t2 = n.catch(0)), r(n.t2)
                            case 11:
                            case 'end':
                              return n.stop()
                          }
                      },
                      n,
                      null,
                      [[0, 8]]
                    )
                  })
                )()
            })
          l.on('error', h)
          var c =
              null === (n = i.sslPinnedCertificates) || void 0 === n
                ? void 0
                : n.map(function(t) {
                    return x(t)
                  }),
            d = function(t) {
              var e,
                r = x(
                  (null === (e = t.getPeerCertificate()) || void 0 === e
                    ? void 0
                    : e.fingerprint256) || ''
                )
              if ((r || !t.isSessionReused()) && !c.includes(r))
                return (
                  l.emit(
                    'error',
                    new v(
                      'Invalid SSL certificate: '
                        .concat(r, ' Expected: ')
                        .concat(c),
                      r
                    )
                  ),
                  l.abort()
                )
            }
          i.sslPinnedCertificates &&
            l.on('socket', function(t) {
              t
                .listeners('secureConnect')
                .map(function(t) {
                  return (t.name || '').replace('bound ', '')
                })
                .includes('mfetchSecureConnect') ||
                t.on('secureConnect', d.bind(null, t))
            }),
            i.keepAlive && l.setNoDelay(!0),
            _.body && l.write(_.body),
            l.end()
        })
      }
      var b = new Set(
          ['Accept', 'Accept-Language', 'Content-Language', 'Content-Type'].map(
            function(t) {
              return t.toLowerCase()
            }
          )
        ),
        _ = new Set(
          [
            'Accept-Charset',
            'Accept-Encoding',
            'Access-Control-Request-Headers',
            'Access-Control-Request-Method',
            'Connection',
            'Content-Length',
            'Cookie',
            'Cookie2',
            'Date',
            'DNT',
            'Expect',
            'Host',
            'Keep-Alive',
            'Origin',
            'Referer',
            'TE',
            'Trailer',
            'Transfer-Encoding',
            'Upgrade',
            'Via'
          ].map(function(t) {
            return t.toLowerCase()
          })
        )
      function x(t, e) {
        return E.apply(this, arguments)
      }
      function E() {
        return (E = s(
          o().mark(function t(e, r) {
            var n, i, s, u, f, h, l, c, d
            return o().wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    for (f in ((n = a(a({}, p), r)),
                    (i = new Headers()),
                    'json' === n.type &&
                      i.set('Content-Type', 'application/json'),
                    (s = new URL(e)).username &&
                      ((u = btoa(
                        ''.concat(s.username, ':').concat(s.password)
                      )),
                      i.set('Authorization', 'Basic '.concat(u)),
                      (s.username = ''),
                      (s.password = '')),
                    (e = '' + s),
                    n.headers))
                      (h = f.toLowerCase()),
                        (b.has(h) || (n.cors && !_.has(h))) &&
                          i.set(f, n.headers[f])
                    return (
                      (l = {
                        headers: i,
                        redirect: n.redirect ? 'follow' : 'manual'
                      }),
                      n.referrer || (l.referrerPolicy = 'no-referrer'),
                      n.cors && (l.mode = 'cors'),
                      n.data &&
                        (n.method || (l.method = 'POST'),
                        (l.body =
                          'json' === n.type ? JSON.stringify(n.data) : n.data)),
                      (t.next = 13),
                      fetch(e, l)
                    )
                  case 13:
                    if (
                      ((c = t.sent),
                      !n.expectStatusCode || c.status === n.expectStatusCode)
                    ) {
                      t.next = 16
                      break
                    }
                    throw new m(c.status)
                  case 16:
                    return (
                      (t.t0 = g),
                      (t.t1 = Uint8Array),
                      (t.next = 20),
                      c.arrayBuffer()
                    )
                  case 20:
                    if (
                      ((t.t2 = t.sent),
                      (t.t3 = new t.t1(t.t2)),
                      (t.t4 = n.type),
                      (d = (0, t.t0)(t.t3, t.t4)),
                      !n.full)
                    ) {
                      t.next = 26
                      break
                    }
                    return t.abrupt('return', {
                      headers: Object.fromEntries(c.headers.entries()),
                      status: c.status,
                      body: d
                    })
                  case 26:
                    return t.abrupt('return', d)
                  case 27:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      var k = !!(
        'object' == typeof i &&
        i.versions &&
        i.versions.node &&
        i.versions.v8
      )
      e.default = function(t, e) {
        return (k ? y : x)(t, e)
      }
    },
    25886: function(t, e) {
      'use strict'
      var r =
        'undefined' !== typeof Uint8Array &&
        'undefined' !== typeof Uint16Array &&
        'undefined' !== typeof Int32Array
      function n(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ;(e.assign = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
          var r = e.shift()
          if (r) {
            if ('object' !== typeof r)
              throw new TypeError(r + 'must be non-object')
            for (var i in r) n(r, i) && (t[i] = r[i])
          }
        }
        return t
      }),
        (e.shrinkBuf = function(t, e) {
          return t.length === e
            ? t
            : t.subarray
            ? t.subarray(0, e)
            : ((t.length = e), t)
        })
      var i = {
          arraySet: function(t, e, r, n, i) {
            if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i)
            else for (var o = 0; o < n; o++) t[i + o] = e[r + o]
          },
          flattenChunks: function(t) {
            var e, r, n, i, o, s
            for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length
            for (s = new Uint8Array(n), i = 0, e = 0, r = t.length; e < r; e++)
              (o = t[e]), s.set(o, i), (i += o.length)
            return s
          }
        },
        o = {
          arraySet: function(t, e, r, n, i) {
            for (var o = 0; o < n; o++) t[i + o] = e[r + o]
          },
          flattenChunks: function(t) {
            return [].concat.apply([], t)
          }
        }
      ;(e.setTyped = function(t) {
        t
          ? ((e.Buf8 = Uint8Array),
            (e.Buf16 = Uint16Array),
            (e.Buf32 = Int32Array),
            e.assign(e, i))
          : ((e.Buf8 = Array),
            (e.Buf16 = Array),
            (e.Buf32 = Array),
            e.assign(e, o))
      }),
        e.setTyped(r)
    },
    88374: function(t) {
      'use strict'
      t.exports = function(t, e, r, n) {
        for (var i = 65535 & t, o = (t >>> 16) & 65535, s = 0; 0 !== r; ) {
          r -= s = r > 2e3 ? 2e3 : r
          do {
            o = (o + (i = (i + e[n++]) | 0)) | 0
          } while (--s)
          ;(i %= 65521), (o %= 65521)
        }
        return i | (o << 16)
      }
    },
    44266: function(t) {
      'use strict'
      t.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      }
    },
    15592: function(t) {
      'use strict'
      var e = (function() {
        for (var t, e = [], r = 0; r < 256; r++) {
          t = r
          for (var n = 0; n < 8; n++)
            t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1
          e[r] = t
        }
        return e
      })()
      t.exports = function(t, r, n, i) {
        var o = e,
          s = i + n
        t ^= -1
        for (var a = i; a < s; a++) t = (t >>> 8) ^ o[255 & (t ^ r[a])]
        return ~t
      }
    },
    89140: function(t, e, r) {
      'use strict'
      var n,
        i = r(25886),
        o = r(73422),
        s = r(88374),
        a = r(15592),
        u = r(88135),
        f = 0,
        h = 4,
        l = 0,
        c = -2,
        d = -1,
        p = 4,
        v = 2,
        m = 8,
        g = 9,
        w = 286,
        y = 30,
        b = 19,
        _ = 2 * w + 1,
        x = 15,
        E = 3,
        k = 258,
        B = k + E + 1,
        A = 42,
        M = 103,
        S = 113,
        T = 666,
        I = 1,
        O = 2,
        N = 3,
        L = 4
      function R(t, e) {
        return (t.msg = u[e]), e
      }
      function P(t) {
        return (t << 1) - (t > 4 ? 9 : 0)
      }
      function C(t) {
        for (var e = t.length; --e >= 0; ) t[e] = 0
      }
      function H(t) {
        var e = t.state,
          r = e.pending
        r > t.avail_out && (r = t.avail_out),
          0 !== r &&
            (i.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
            (t.next_out += r),
            (e.pending_out += r),
            (t.total_out += r),
            (t.avail_out -= r),
            (e.pending -= r),
            0 === e.pending && (e.pending_out = 0))
      }
      function U(t, e) {
        o._tr_flush_block(
          t,
          t.block_start >= 0 ? t.block_start : -1,
          t.strstart - t.block_start,
          e
        ),
          (t.block_start = t.strstart),
          H(t.strm)
      }
      function F(t, e) {
        t.pending_buf[t.pending++] = e
      }
      function D(t, e) {
        ;(t.pending_buf[t.pending++] = (e >>> 8) & 255),
          (t.pending_buf[t.pending++] = 255 & e)
      }
      function Z(t, e, r, n) {
        var o = t.avail_in
        return (
          o > n && (o = n),
          0 === o
            ? 0
            : ((t.avail_in -= o),
              i.arraySet(e, t.input, t.next_in, o, r),
              1 === t.state.wrap
                ? (t.adler = s(t.adler, e, o, r))
                : 2 === t.state.wrap && (t.adler = a(t.adler, e, o, r)),
              (t.next_in += o),
              (t.total_in += o),
              o)
        )
      }
      function z(t, e) {
        var r,
          n,
          i = t.max_chain_length,
          o = t.strstart,
          s = t.prev_length,
          a = t.nice_match,
          u = t.strstart > t.w_size - B ? t.strstart - (t.w_size - B) : 0,
          f = t.window,
          h = t.w_mask,
          l = t.prev,
          c = t.strstart + k,
          d = f[o + s - 1],
          p = f[o + s]
        t.prev_length >= t.good_match && (i >>= 2),
          a > t.lookahead && (a = t.lookahead)
        do {
          if (
            f[(r = e) + s] === p &&
            f[r + s - 1] === d &&
            f[r] === f[o] &&
            f[++r] === f[o + 1]
          ) {
            ;(o += 2), r++
            do {} while (
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              f[++o] === f[++r] &&
              o < c
            )
            if (((n = k - (c - o)), (o = c - k), n > s)) {
              if (((t.match_start = e), (s = n), n >= a)) break
              ;(d = f[o + s - 1]), (p = f[o + s])
            }
          }
        } while ((e = l[e & h]) > u && 0 !== --i)
        return s <= t.lookahead ? s : t.lookahead
      }
      function j(t) {
        var e,
          r,
          n,
          o,
          s,
          a = t.w_size
        do {
          if (
            ((o = t.window_size - t.lookahead - t.strstart),
            t.strstart >= a + (a - B))
          ) {
            i.arraySet(t.window, t.window, a, a, 0),
              (t.match_start -= a),
              (t.strstart -= a),
              (t.block_start -= a),
              (e = r = t.hash_size)
            do {
              ;(n = t.head[--e]), (t.head[e] = n >= a ? n - a : 0)
            } while (--r)
            e = r = a
            do {
              ;(n = t.prev[--e]), (t.prev[e] = n >= a ? n - a : 0)
            } while (--r)
            o += a
          }
          if (0 === t.strm.avail_in) break
          if (
            ((r = Z(t.strm, t.window, t.strstart + t.lookahead, o)),
            (t.lookahead += r),
            t.lookahead + t.insert >= E)
          )
            for (
              s = t.strstart - t.insert,
                t.ins_h = t.window[s],
                t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[s + 1]) & t.hash_mask;
              t.insert &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[s + E - 1]) &
                t.hash_mask),
              (t.prev[s & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = s),
              s++,
              t.insert--,
              !(t.lookahead + t.insert < E));

            );
        } while (t.lookahead < B && 0 !== t.strm.avail_in)
      }
      function q(t, e) {
        for (var r, n; ; ) {
          if (t.lookahead < B) {
            if ((j(t), t.lookahead < B && e === f)) return I
            if (0 === t.lookahead) break
          }
          if (
            ((r = 0),
            t.lookahead >= E &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + E - 1]) &
                t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            0 !== r &&
              t.strstart - r <= t.w_size - B &&
              (t.match_length = z(t, r)),
            t.match_length >= E)
          )
            if (
              ((n = o._tr_tally(
                t,
                t.strstart - t.match_start,
                t.match_length - E
              )),
              (t.lookahead -= t.match_length),
              t.match_length <= t.max_lazy_match && t.lookahead >= E)
            ) {
              t.match_length--
              do {
                t.strstart++,
                  (t.ins_h =
                    ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + E - 1]) &
                    t.hash_mask),
                  (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart)
              } while (0 !== --t.match_length)
              t.strstart++
            } else
              (t.strstart += t.match_length),
                (t.match_length = 0),
                (t.ins_h = t.window[t.strstart]),
                (t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
                  t.hash_mask)
          else
            (n = o._tr_tally(t, 0, t.window[t.strstart])),
              t.lookahead--,
              t.strstart++
          if (n && (U(t, !1), 0 === t.strm.avail_out)) return I
        }
        return (
          (t.insert = t.strstart < E - 1 ? t.strstart : E - 1),
          e === h
            ? (U(t, !0), 0 === t.strm.avail_out ? N : L)
            : t.last_lit && (U(t, !1), 0 === t.strm.avail_out)
            ? I
            : O
        )
      }
      function K(t, e) {
        for (var r, n, i; ; ) {
          if (t.lookahead < B) {
            if ((j(t), t.lookahead < B && e === f)) return I
            if (0 === t.lookahead) break
          }
          if (
            ((r = 0),
            t.lookahead >= E &&
              ((t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + E - 1]) &
                t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart)),
            (t.prev_length = t.match_length),
            (t.prev_match = t.match_start),
            (t.match_length = E - 1),
            0 !== r &&
              t.prev_length < t.max_lazy_match &&
              t.strstart - r <= t.w_size - B &&
              ((t.match_length = z(t, r)),
              t.match_length <= 5 &&
                (1 === t.strategy ||
                  (t.match_length === E &&
                    t.strstart - t.match_start > 4096)) &&
                (t.match_length = E - 1)),
            t.prev_length >= E && t.match_length <= t.prev_length)
          ) {
            ;(i = t.strstart + t.lookahead - E),
              (n = o._tr_tally(
                t,
                t.strstart - 1 - t.prev_match,
                t.prev_length - E
              )),
              (t.lookahead -= t.prev_length - 1),
              (t.prev_length -= 2)
            do {
              ++t.strstart <= i &&
                ((t.ins_h =
                  ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + E - 1]) &
                  t.hash_mask),
                (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart))
            } while (0 !== --t.prev_length)
            if (
              ((t.match_available = 0),
              (t.match_length = E - 1),
              t.strstart++,
              n && (U(t, !1), 0 === t.strm.avail_out))
            )
              return I
          } else if (t.match_available) {
            if (
              ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])) && U(t, !1),
              t.strstart++,
              t.lookahead--,
              0 === t.strm.avail_out)
            )
              return I
          } else (t.match_available = 1), t.strstart++, t.lookahead--
        }
        return (
          t.match_available &&
            ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])),
            (t.match_available = 0)),
          (t.insert = t.strstart < E - 1 ? t.strstart : E - 1),
          e === h
            ? (U(t, !0), 0 === t.strm.avail_out ? N : L)
            : t.last_lit && (U(t, !1), 0 === t.strm.avail_out)
            ? I
            : O
        )
      }
      function W(t, e, r, n, i) {
        ;(this.good_length = t),
          (this.max_lazy = e),
          (this.nice_length = r),
          (this.max_chain = n),
          (this.func = i)
      }
      function V() {
        ;(this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = m),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new i.Buf16(2 * _)),
          (this.dyn_dtree = new i.Buf16(2 * (2 * y + 1))),
          (this.bl_tree = new i.Buf16(2 * (2 * b + 1))),
          C(this.dyn_ltree),
          C(this.dyn_dtree),
          C(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new i.Buf16(x + 1)),
          (this.heap = new i.Buf16(2 * w + 1)),
          C(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new i.Buf16(2 * w + 1)),
          C(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0)
      }
      function G(t) {
        var e
        return t && t.state
          ? ((t.total_in = t.total_out = 0),
            (t.data_type = v),
            ((e = t.state).pending = 0),
            (e.pending_out = 0),
            e.wrap < 0 && (e.wrap = -e.wrap),
            (e.status = e.wrap ? A : S),
            (t.adler = 2 === e.wrap ? 0 : 1),
            (e.last_flush = f),
            o._tr_init(e),
            l)
          : R(t, c)
      }
      function Y(t) {
        var e,
          r = G(t)
        return (
          r === l &&
            (((e = t.state).window_size = 2 * e.w_size),
            C(e.head),
            (e.max_lazy_match = n[e.level].max_lazy),
            (e.good_match = n[e.level].good_length),
            (e.nice_match = n[e.level].nice_length),
            (e.max_chain_length = n[e.level].max_chain),
            (e.strstart = 0),
            (e.block_start = 0),
            (e.lookahead = 0),
            (e.insert = 0),
            (e.match_length = e.prev_length = E - 1),
            (e.match_available = 0),
            (e.ins_h = 0)),
          r
        )
      }
      function X(t, e, r, n, o, s) {
        if (!t) return c
        var a = 1
        if (
          (e === d && (e = 6),
          n < 0 ? ((a = 0), (n = -n)) : n > 15 && ((a = 2), (n -= 16)),
          o < 1 ||
            o > g ||
            r !== m ||
            n < 8 ||
            n > 15 ||
            e < 0 ||
            e > 9 ||
            s < 0 ||
            s > p)
        )
          return R(t, c)
        8 === n && (n = 9)
        var u = new V()
        return (
          (t.state = u),
          (u.strm = t),
          (u.wrap = a),
          (u.gzhead = null),
          (u.w_bits = n),
          (u.w_size = 1 << u.w_bits),
          (u.w_mask = u.w_size - 1),
          (u.hash_bits = o + 7),
          (u.hash_size = 1 << u.hash_bits),
          (u.hash_mask = u.hash_size - 1),
          (u.hash_shift = ~~((u.hash_bits + E - 1) / E)),
          (u.window = new i.Buf8(2 * u.w_size)),
          (u.head = new i.Buf16(u.hash_size)),
          (u.prev = new i.Buf16(u.w_size)),
          (u.lit_bufsize = 1 << (o + 6)),
          (u.pending_buf_size = 4 * u.lit_bufsize),
          (u.pending_buf = new i.Buf8(u.pending_buf_size)),
          (u.d_buf = 1 * u.lit_bufsize),
          (u.l_buf = 3 * u.lit_bufsize),
          (u.level = e),
          (u.strategy = s),
          (u.method = r),
          Y(t)
        )
      }
      ;(n = [
        new W(0, 0, 0, 0, function(t, e) {
          var r = 65535
          for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
            if (t.lookahead <= 1) {
              if ((j(t), 0 === t.lookahead && e === f)) return I
              if (0 === t.lookahead) break
            }
            ;(t.strstart += t.lookahead), (t.lookahead = 0)
            var n = t.block_start + r
            if (
              (0 === t.strstart || t.strstart >= n) &&
              ((t.lookahead = t.strstart - n),
              (t.strstart = n),
              U(t, !1),
              0 === t.strm.avail_out)
            )
              return I
            if (
              t.strstart - t.block_start >= t.w_size - B &&
              (U(t, !1), 0 === t.strm.avail_out)
            )
              return I
          }
          return (
            (t.insert = 0),
            e === h
              ? (U(t, !0), 0 === t.strm.avail_out ? N : L)
              : (t.strstart > t.block_start && (U(t, !1), t.strm.avail_out), I)
          )
        }),
        new W(4, 4, 8, 4, q),
        new W(4, 5, 16, 8, q),
        new W(4, 6, 32, 32, q),
        new W(4, 4, 16, 16, K),
        new W(8, 16, 32, 32, K),
        new W(8, 16, 128, 128, K),
        new W(8, 32, 128, 256, K),
        new W(32, 128, 258, 1024, K),
        new W(32, 258, 258, 4096, K)
      ]),
        (e.deflateInit = function(t, e) {
          return X(t, e, m, 15, 8, 0)
        }),
        (e.deflateInit2 = X),
        (e.deflateReset = Y),
        (e.deflateResetKeep = G),
        (e.deflateSetHeader = function(t, e) {
          return t && t.state
            ? 2 !== t.state.wrap
              ? c
              : ((t.state.gzhead = e), l)
            : c
        }),
        (e.deflate = function(t, e) {
          var r, i, s, u
          if (!t || !t.state || e > 5 || e < 0) return t ? R(t, c) : c
          if (
            ((i = t.state),
            !t.output ||
              (!t.input && 0 !== t.avail_in) ||
              (i.status === T && e !== h))
          )
            return R(t, 0 === t.avail_out ? -5 : c)
          if (
            ((i.strm = t),
            (r = i.last_flush),
            (i.last_flush = e),
            i.status === A)
          )
            if (2 === i.wrap)
              (t.adler = 0),
                F(i, 31),
                F(i, 139),
                F(i, 8),
                i.gzhead
                  ? (F(
                      i,
                      (i.gzhead.text ? 1 : 0) +
                        (i.gzhead.hcrc ? 2 : 0) +
                        (i.gzhead.extra ? 4 : 0) +
                        (i.gzhead.name ? 8 : 0) +
                        (i.gzhead.comment ? 16 : 0)
                    ),
                    F(i, 255 & i.gzhead.time),
                    F(i, (i.gzhead.time >> 8) & 255),
                    F(i, (i.gzhead.time >> 16) & 255),
                    F(i, (i.gzhead.time >> 24) & 255),
                    F(
                      i,
                      9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                    ),
                    F(i, 255 & i.gzhead.os),
                    i.gzhead.extra &&
                      i.gzhead.extra.length &&
                      (F(i, 255 & i.gzhead.extra.length),
                      F(i, (i.gzhead.extra.length >> 8) & 255)),
                    i.gzhead.hcrc &&
                      (t.adler = a(t.adler, i.pending_buf, i.pending, 0)),
                    (i.gzindex = 0),
                    (i.status = 69))
                  : (F(i, 0),
                    F(i, 0),
                    F(i, 0),
                    F(i, 0),
                    F(i, 0),
                    F(
                      i,
                      9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                    ),
                    F(i, 3),
                    (i.status = S))
            else {
              var d = (m + ((i.w_bits - 8) << 4)) << 8
              ;(d |=
                (i.strategy >= 2 || i.level < 2
                  ? 0
                  : i.level < 6
                  ? 1
                  : 6 === i.level
                  ? 2
                  : 3) << 6),
                0 !== i.strstart && (d |= 32),
                (d += 31 - (d % 31)),
                (i.status = S),
                D(i, d),
                0 !== i.strstart &&
                  (D(i, t.adler >>> 16), D(i, 65535 & t.adler)),
                (t.adler = 1)
            }
          if (69 === i.status)
            if (i.gzhead.extra) {
              for (
                s = i.pending;
                i.gzindex < (65535 & i.gzhead.extra.length) &&
                (i.pending !== i.pending_buf_size ||
                  (i.gzhead.hcrc &&
                    i.pending > s &&
                    (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                  H(t),
                  (s = i.pending),
                  i.pending !== i.pending_buf_size));

              )
                F(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++
              i.gzhead.hcrc &&
                i.pending > s &&
                (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                i.gzindex === i.gzhead.extra.length &&
                  ((i.gzindex = 0), (i.status = 73))
            } else i.status = 73
          if (73 === i.status)
            if (i.gzhead.name) {
              s = i.pending
              do {
                if (
                  i.pending === i.pending_buf_size &&
                  (i.gzhead.hcrc &&
                    i.pending > s &&
                    (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                  H(t),
                  (s = i.pending),
                  i.pending === i.pending_buf_size)
                ) {
                  u = 1
                  break
                }
                ;(u =
                  i.gzindex < i.gzhead.name.length
                    ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                    : 0),
                  F(i, u)
              } while (0 !== u)
              i.gzhead.hcrc &&
                i.pending > s &&
                (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                0 === u && ((i.gzindex = 0), (i.status = 91))
            } else i.status = 91
          if (91 === i.status)
            if (i.gzhead.comment) {
              s = i.pending
              do {
                if (
                  i.pending === i.pending_buf_size &&
                  (i.gzhead.hcrc &&
                    i.pending > s &&
                    (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                  H(t),
                  (s = i.pending),
                  i.pending === i.pending_buf_size)
                ) {
                  u = 1
                  break
                }
                ;(u =
                  i.gzindex < i.gzhead.comment.length
                    ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                    : 0),
                  F(i, u)
              } while (0 !== u)
              i.gzhead.hcrc &&
                i.pending > s &&
                (t.adler = a(t.adler, i.pending_buf, i.pending - s, s)),
                0 === u && (i.status = M)
            } else i.status = M
          if (
            (i.status === M &&
              (i.gzhead.hcrc
                ? (i.pending + 2 > i.pending_buf_size && H(t),
                  i.pending + 2 <= i.pending_buf_size &&
                    (F(i, 255 & t.adler),
                    F(i, (t.adler >> 8) & 255),
                    (t.adler = 0),
                    (i.status = S)))
                : (i.status = S)),
            0 !== i.pending)
          ) {
            if ((H(t), 0 === t.avail_out)) return (i.last_flush = -1), l
          } else if (0 === t.avail_in && P(e) <= P(r) && e !== h)
            return R(t, -5)
          if (i.status === T && 0 !== t.avail_in) return R(t, -5)
          if (
            0 !== t.avail_in ||
            0 !== i.lookahead ||
            (e !== f && i.status !== T)
          ) {
            var p =
              2 === i.strategy
                ? (function(t, e) {
                    for (var r; ; ) {
                      if (0 === t.lookahead && (j(t), 0 === t.lookahead)) {
                        if (e === f) return I
                        break
                      }
                      if (
                        ((t.match_length = 0),
                        (r = o._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++,
                        r && (U(t, !1), 0 === t.strm.avail_out))
                      )
                        return I
                    }
                    return (
                      (t.insert = 0),
                      e === h
                        ? (U(t, !0), 0 === t.strm.avail_out ? N : L)
                        : t.last_lit && (U(t, !1), 0 === t.strm.avail_out)
                        ? I
                        : O
                    )
                  })(i, e)
                : 3 === i.strategy
                ? (function(t, e) {
                    for (var r, n, i, s, a = t.window; ; ) {
                      if (t.lookahead <= k) {
                        if ((j(t), t.lookahead <= k && e === f)) return I
                        if (0 === t.lookahead) break
                      }
                      if (
                        ((t.match_length = 0),
                        t.lookahead >= E &&
                          t.strstart > 0 &&
                          (n = a[(i = t.strstart - 1)]) === a[++i] &&
                          n === a[++i] &&
                          n === a[++i])
                      ) {
                        s = t.strstart + k
                        do {} while (
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          n === a[++i] &&
                          i < s
                        )
                        ;(t.match_length = k - (s - i)),
                          t.match_length > t.lookahead &&
                            (t.match_length = t.lookahead)
                      }
                      if (
                        (t.match_length >= E
                          ? ((r = o._tr_tally(t, 1, t.match_length - E)),
                            (t.lookahead -= t.match_length),
                            (t.strstart += t.match_length),
                            (t.match_length = 0))
                          : ((r = o._tr_tally(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++),
                        r && (U(t, !1), 0 === t.strm.avail_out))
                      )
                        return I
                    }
                    return (
                      (t.insert = 0),
                      e === h
                        ? (U(t, !0), 0 === t.strm.avail_out ? N : L)
                        : t.last_lit && (U(t, !1), 0 === t.strm.avail_out)
                        ? I
                        : O
                    )
                  })(i, e)
                : n[i.level].func(i, e)
            if (((p !== N && p !== L) || (i.status = T), p === I || p === N))
              return 0 === t.avail_out && (i.last_flush = -1), l
            if (
              p === O &&
              (1 === e
                ? o._tr_align(i)
                : 5 !== e &&
                  (o._tr_stored_block(i, 0, 0, !1),
                  3 === e &&
                    (C(i.head),
                    0 === i.lookahead &&
                      ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
              H(t),
              0 === t.avail_out)
            )
              return (i.last_flush = -1), l
          }
          return e !== h
            ? l
            : i.wrap <= 0
            ? 1
            : (2 === i.wrap
                ? (F(i, 255 & t.adler),
                  F(i, (t.adler >> 8) & 255),
                  F(i, (t.adler >> 16) & 255),
                  F(i, (t.adler >> 24) & 255),
                  F(i, 255 & t.total_in),
                  F(i, (t.total_in >> 8) & 255),
                  F(i, (t.total_in >> 16) & 255),
                  F(i, (t.total_in >> 24) & 255))
                : (D(i, t.adler >>> 16), D(i, 65535 & t.adler)),
              H(t),
              i.wrap > 0 && (i.wrap = -i.wrap),
              0 !== i.pending ? l : 1)
        }),
        (e.deflateEnd = function(t) {
          var e
          return t && t.state
            ? (e = t.state.status) !== A &&
              69 !== e &&
              73 !== e &&
              91 !== e &&
              e !== M &&
              e !== S &&
              e !== T
              ? R(t, c)
              : ((t.state = null), e === S ? R(t, -3) : l)
            : c
        }),
        (e.deflateSetDictionary = function(t, e) {
          var r,
            n,
            o,
            a,
            u,
            f,
            h,
            d,
            p = e.length
          if (!t || !t.state) return c
          if (
            2 === (a = (r = t.state).wrap) ||
            (1 === a && r.status !== A) ||
            r.lookahead
          )
            return c
          for (
            1 === a && (t.adler = s(t.adler, e, p, 0)),
              r.wrap = 0,
              p >= r.w_size &&
                (0 === a &&
                  (C(r.head),
                  (r.strstart = 0),
                  (r.block_start = 0),
                  (r.insert = 0)),
                (d = new i.Buf8(r.w_size)),
                i.arraySet(d, e, p - r.w_size, r.w_size, 0),
                (e = d),
                (p = r.w_size)),
              u = t.avail_in,
              f = t.next_in,
              h = t.input,
              t.avail_in = p,
              t.next_in = 0,
              t.input = e,
              j(r);
            r.lookahead >= E;

          ) {
            ;(n = r.strstart), (o = r.lookahead - (E - 1))
            do {
              ;(r.ins_h =
                ((r.ins_h << r.hash_shift) ^ r.window[n + E - 1]) &
                r.hash_mask),
                (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                (r.head[r.ins_h] = n),
                n++
            } while (--o)
            ;(r.strstart = n), (r.lookahead = E - 1), j(r)
          }
          return (
            (r.strstart += r.lookahead),
            (r.block_start = r.strstart),
            (r.insert = r.lookahead),
            (r.lookahead = 0),
            (r.match_length = r.prev_length = E - 1),
            (r.match_available = 0),
            (t.next_in = f),
            (t.input = h),
            (t.avail_in = u),
            (r.wrap = a),
            l
          )
        }),
        (e.deflateInfo = 'pako deflate (from Nodeca project)')
    },
    9946: function(t) {
      'use strict'
      t.exports = function(t, e) {
        var r,
          n,
          i,
          o,
          s,
          a,
          u,
          f,
          h,
          l,
          c,
          d,
          p,
          v,
          m,
          g,
          w,
          y,
          b,
          _,
          x,
          E,
          k,
          B,
          A
        ;(r = t.state),
          (n = t.next_in),
          (B = t.input),
          (i = n + (t.avail_in - 5)),
          (o = t.next_out),
          (A = t.output),
          (s = o - (e - t.avail_out)),
          (a = o + (t.avail_out - 257)),
          (u = r.dmax),
          (f = r.wsize),
          (h = r.whave),
          (l = r.wnext),
          (c = r.window),
          (d = r.hold),
          (p = r.bits),
          (v = r.lencode),
          (m = r.distcode),
          (g = (1 << r.lenbits) - 1),
          (w = (1 << r.distbits) - 1)
        t: do {
          p < 15 &&
            ((d += B[n++] << p), (p += 8), (d += B[n++] << p), (p += 8)),
            (y = v[d & g])
          e: for (;;) {
            if (((d >>>= b = y >>> 24), (p -= b), 0 === (b = (y >>> 16) & 255)))
              A[o++] = 65535 & y
            else {
              if (!(16 & b)) {
                if (0 === (64 & b)) {
                  y = v[(65535 & y) + (d & ((1 << b) - 1))]
                  continue e
                }
                if (32 & b) {
                  r.mode = 12
                  break t
                }
                ;(t.msg = 'invalid literal/length code'), (r.mode = 30)
                break t
              }
              ;(_ = 65535 & y),
                (b &= 15) &&
                  (p < b && ((d += B[n++] << p), (p += 8)),
                  (_ += d & ((1 << b) - 1)),
                  (d >>>= b),
                  (p -= b)),
                p < 15 &&
                  ((d += B[n++] << p), (p += 8), (d += B[n++] << p), (p += 8)),
                (y = m[d & w])
              r: for (;;) {
                if (
                  ((d >>>= b = y >>> 24),
                  (p -= b),
                  !(16 & (b = (y >>> 16) & 255)))
                ) {
                  if (0 === (64 & b)) {
                    y = m[(65535 & y) + (d & ((1 << b) - 1))]
                    continue r
                  }
                  ;(t.msg = 'invalid distance code'), (r.mode = 30)
                  break t
                }
                if (
                  ((x = 65535 & y),
                  p < (b &= 15) &&
                    ((d += B[n++] << p),
                    (p += 8) < b && ((d += B[n++] << p), (p += 8))),
                  (x += d & ((1 << b) - 1)) > u)
                ) {
                  ;(t.msg = 'invalid distance too far back'), (r.mode = 30)
                  break t
                }
                if (((d >>>= b), (p -= b), x > (b = o - s))) {
                  if ((b = x - b) > h && r.sane) {
                    ;(t.msg = 'invalid distance too far back'), (r.mode = 30)
                    break t
                  }
                  if (((E = 0), (k = c), 0 === l)) {
                    if (((E += f - b), b < _)) {
                      _ -= b
                      do {
                        A[o++] = c[E++]
                      } while (--b)
                      ;(E = o - x), (k = A)
                    }
                  } else if (l < b) {
                    if (((E += f + l - b), (b -= l) < _)) {
                      _ -= b
                      do {
                        A[o++] = c[E++]
                      } while (--b)
                      if (((E = 0), l < _)) {
                        _ -= b = l
                        do {
                          A[o++] = c[E++]
                        } while (--b)
                        ;(E = o - x), (k = A)
                      }
                    }
                  } else if (((E += l - b), b < _)) {
                    _ -= b
                    do {
                      A[o++] = c[E++]
                    } while (--b)
                    ;(E = o - x), (k = A)
                  }
                  for (; _ > 2; )
                    (A[o++] = k[E++]),
                      (A[o++] = k[E++]),
                      (A[o++] = k[E++]),
                      (_ -= 3)
                  _ && ((A[o++] = k[E++]), _ > 1 && (A[o++] = k[E++]))
                } else {
                  E = o - x
                  do {
                    ;(A[o++] = A[E++]),
                      (A[o++] = A[E++]),
                      (A[o++] = A[E++]),
                      (_ -= 3)
                  } while (_ > 2)
                  _ && ((A[o++] = A[E++]), _ > 1 && (A[o++] = A[E++]))
                }
                break
              }
            }
            break
          }
        } while (n < i && o < a)
        ;(n -= _ = p >> 3),
          (d &= (1 << (p -= _ << 3)) - 1),
          (t.next_in = n),
          (t.next_out = o),
          (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
          (t.avail_out = o < a ? a - o + 257 : 257 - (o - a)),
          (r.hold = d),
          (r.bits = p)
      }
    },
    5960: function(t, e, r) {
      'use strict'
      var n = r(25886),
        i = r(88374),
        o = r(15592),
        s = r(9946),
        a = r(55415),
        u = 1,
        f = 2,
        h = 0,
        l = -2,
        c = 1,
        d = 12,
        p = 30,
        v = 852,
        m = 592
      function g(t) {
        return (
          ((t >>> 24) & 255) +
          ((t >>> 8) & 65280) +
          ((65280 & t) << 8) +
          ((255 & t) << 24)
        )
      }
      function w() {
        ;(this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new n.Buf16(320)),
          (this.work = new n.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0)
      }
      function y(t) {
        var e
        return t && t.state
          ? ((e = t.state),
            (t.total_in = t.total_out = e.total = 0),
            (t.msg = ''),
            e.wrap && (t.adler = 1 & e.wrap),
            (e.mode = c),
            (e.last = 0),
            (e.havedict = 0),
            (e.dmax = 32768),
            (e.head = null),
            (e.hold = 0),
            (e.bits = 0),
            (e.lencode = e.lendyn = new n.Buf32(v)),
            (e.distcode = e.distdyn = new n.Buf32(m)),
            (e.sane = 1),
            (e.back = -1),
            h)
          : l
      }
      function b(t) {
        var e
        return t && t.state
          ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), y(t))
          : l
      }
      function _(t, e) {
        var r, n
        return t && t.state
          ? ((n = t.state),
            e < 0
              ? ((r = 0), (e = -e))
              : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
            e && (e < 8 || e > 15)
              ? l
              : (null !== n.window && n.wbits !== e && (n.window = null),
                (n.wrap = r),
                (n.wbits = e),
                b(t)))
          : l
      }
      function x(t, e) {
        var r, n
        return t
          ? ((n = new w()),
            (t.state = n),
            (n.window = null),
            (r = _(t, e)) !== h && (t.state = null),
            r)
          : l
      }
      var E,
        k,
        B = !0
      function A(t) {
        if (B) {
          var e
          for (E = new n.Buf32(512), k = new n.Buf32(32), e = 0; e < 144; )
            t.lens[e++] = 8
          for (; e < 256; ) t.lens[e++] = 9
          for (; e < 280; ) t.lens[e++] = 7
          for (; e < 288; ) t.lens[e++] = 8
          for (a(u, t.lens, 0, 288, E, 0, t.work, { bits: 9 }), e = 0; e < 32; )
            t.lens[e++] = 5
          a(f, t.lens, 0, 32, k, 0, t.work, { bits: 5 }), (B = !1)
        }
        ;(t.lencode = E), (t.lenbits = 9), (t.distcode = k), (t.distbits = 5)
      }
      function M(t, e, r, i) {
        var o,
          s = t.state
        return (
          null === s.window &&
            ((s.wsize = 1 << s.wbits),
            (s.wnext = 0),
            (s.whave = 0),
            (s.window = new n.Buf8(s.wsize))),
          i >= s.wsize
            ? (n.arraySet(s.window, e, r - s.wsize, s.wsize, 0),
              (s.wnext = 0),
              (s.whave = s.wsize))
            : ((o = s.wsize - s.wnext) > i && (o = i),
              n.arraySet(s.window, e, r - i, o, s.wnext),
              (i -= o)
                ? (n.arraySet(s.window, e, r - i, i, 0),
                  (s.wnext = i),
                  (s.whave = s.wsize))
                : ((s.wnext += o),
                  s.wnext === s.wsize && (s.wnext = 0),
                  s.whave < s.wsize && (s.whave += o))),
          0
        )
      }
      ;(e.inflateReset = b),
        (e.inflateReset2 = _),
        (e.inflateResetKeep = y),
        (e.inflateInit = function(t) {
          return x(t, 15)
        }),
        (e.inflateInit2 = x),
        (e.inflate = function(t, e) {
          var r,
            v,
            m,
            w,
            y,
            b,
            _,
            x,
            E,
            k,
            B,
            S,
            T,
            I,
            O,
            N,
            L,
            R,
            P,
            C,
            H,
            U,
            F,
            D,
            Z = 0,
            z = new n.Buf8(4),
            j = [
              16,
              17,
              18,
              0,
              8,
              7,
              9,
              6,
              10,
              5,
              11,
              4,
              12,
              3,
              13,
              2,
              14,
              1,
              15
            ]
          if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
            return l
          ;(r = t.state).mode === d && (r.mode = 13),
            (y = t.next_out),
            (m = t.output),
            (_ = t.avail_out),
            (w = t.next_in),
            (v = t.input),
            (b = t.avail_in),
            (x = r.hold),
            (E = r.bits),
            (k = b),
            (B = _),
            (U = h)
          t: for (;;)
            switch (r.mode) {
              case c:
                if (0 === r.wrap) {
                  r.mode = 13
                  break
                }
                for (; E < 16; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if (2 & r.wrap && 35615 === x) {
                  ;(r.check = 0),
                    (z[0] = 255 & x),
                    (z[1] = (x >>> 8) & 255),
                    (r.check = o(r.check, z, 2, 0)),
                    (x = 0),
                    (E = 0),
                    (r.mode = 2)
                  break
                }
                if (
                  ((r.flags = 0),
                  r.head && (r.head.done = !1),
                  !(1 & r.wrap) || (((255 & x) << 8) + (x >> 8)) % 31)
                ) {
                  ;(t.msg = 'incorrect header check'), (r.mode = p)
                  break
                }
                if (8 !== (15 & x)) {
                  ;(t.msg = 'unknown compression method'), (r.mode = p)
                  break
                }
                if (((E -= 4), (H = 8 + (15 & (x >>>= 4))), 0 === r.wbits))
                  r.wbits = H
                else if (H > r.wbits) {
                  ;(t.msg = 'invalid window size'), (r.mode = p)
                  break
                }
                ;(r.dmax = 1 << H),
                  (t.adler = r.check = 1),
                  (r.mode = 512 & x ? 10 : d),
                  (x = 0),
                  (E = 0)
                break
              case 2:
                for (; E < 16; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if (((r.flags = x), 8 !== (255 & r.flags))) {
                  ;(t.msg = 'unknown compression method'), (r.mode = p)
                  break
                }
                if (57344 & r.flags) {
                  ;(t.msg = 'unknown header flags set'), (r.mode = p)
                  break
                }
                r.head && (r.head.text = (x >> 8) & 1),
                  512 & r.flags &&
                    ((z[0] = 255 & x),
                    (z[1] = (x >>> 8) & 255),
                    (r.check = o(r.check, z, 2, 0))),
                  (x = 0),
                  (E = 0),
                  (r.mode = 3)
              case 3:
                for (; E < 32; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                r.head && (r.head.time = x),
                  512 & r.flags &&
                    ((z[0] = 255 & x),
                    (z[1] = (x >>> 8) & 255),
                    (z[2] = (x >>> 16) & 255),
                    (z[3] = (x >>> 24) & 255),
                    (r.check = o(r.check, z, 4, 0))),
                  (x = 0),
                  (E = 0),
                  (r.mode = 4)
              case 4:
                for (; E < 16; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                r.head && ((r.head.xflags = 255 & x), (r.head.os = x >> 8)),
                  512 & r.flags &&
                    ((z[0] = 255 & x),
                    (z[1] = (x >>> 8) & 255),
                    (r.check = o(r.check, z, 2, 0))),
                  (x = 0),
                  (E = 0),
                  (r.mode = 5)
              case 5:
                if (1024 & r.flags) {
                  for (; E < 16; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(r.length = x),
                    r.head && (r.head.extra_len = x),
                    512 & r.flags &&
                      ((z[0] = 255 & x),
                      (z[1] = (x >>> 8) & 255),
                      (r.check = o(r.check, z, 2, 0))),
                    (x = 0),
                    (E = 0)
                } else r.head && (r.head.extra = null)
                r.mode = 6
              case 6:
                if (
                  1024 & r.flags &&
                  ((S = r.length) > b && (S = b),
                  S &&
                    (r.head &&
                      ((H = r.head.extra_len - r.length),
                      r.head.extra ||
                        (r.head.extra = new Array(r.head.extra_len)),
                      n.arraySet(r.head.extra, v, w, S, H)),
                    512 & r.flags && (r.check = o(r.check, v, S, w)),
                    (b -= S),
                    (w += S),
                    (r.length -= S)),
                  r.length)
                )
                  break t
                ;(r.length = 0), (r.mode = 7)
              case 7:
                if (2048 & r.flags) {
                  if (0 === b) break t
                  S = 0
                  do {
                    ;(H = v[w + S++]),
                      r.head &&
                        H &&
                        r.length < 65536 &&
                        (r.head.name += String.fromCharCode(H))
                  } while (H && S < b)
                  if (
                    (512 & r.flags && (r.check = o(r.check, v, S, w)),
                    (b -= S),
                    (w += S),
                    H)
                  )
                    break t
                } else r.head && (r.head.name = null)
                ;(r.length = 0), (r.mode = 8)
              case 8:
                if (4096 & r.flags) {
                  if (0 === b) break t
                  S = 0
                  do {
                    ;(H = v[w + S++]),
                      r.head &&
                        H &&
                        r.length < 65536 &&
                        (r.head.comment += String.fromCharCode(H))
                  } while (H && S < b)
                  if (
                    (512 & r.flags && (r.check = o(r.check, v, S, w)),
                    (b -= S),
                    (w += S),
                    H)
                  )
                    break t
                } else r.head && (r.head.comment = null)
                r.mode = 9
              case 9:
                if (512 & r.flags) {
                  for (; E < 16; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  if (x !== (65535 & r.check)) {
                    ;(t.msg = 'header crc mismatch'), (r.mode = p)
                    break
                  }
                  ;(x = 0), (E = 0)
                }
                r.head &&
                  ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                  (t.adler = r.check = 0),
                  (r.mode = d)
                break
              case 10:
                for (; E < 32; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                ;(t.adler = r.check = g(x)), (x = 0), (E = 0), (r.mode = 11)
              case 11:
                if (0 === r.havedict)
                  return (
                    (t.next_out = y),
                    (t.avail_out = _),
                    (t.next_in = w),
                    (t.avail_in = b),
                    (r.hold = x),
                    (r.bits = E),
                    2
                  )
                ;(t.adler = r.check = 1), (r.mode = d)
              case d:
                if (5 === e || 6 === e) break t
              case 13:
                if (r.last) {
                  ;(x >>>= 7 & E), (E -= 7 & E), (r.mode = 27)
                  break
                }
                for (; E < 3; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                switch (((r.last = 1 & x), (E -= 1), 3 & (x >>>= 1))) {
                  case 0:
                    r.mode = 14
                    break
                  case 1:
                    if ((A(r), (r.mode = 20), 6 === e)) {
                      ;(x >>>= 2), (E -= 2)
                      break t
                    }
                    break
                  case 2:
                    r.mode = 17
                    break
                  case 3:
                    ;(t.msg = 'invalid block type'), (r.mode = p)
                }
                ;(x >>>= 2), (E -= 2)
                break
              case 14:
                for (x >>>= 7 & E, E -= 7 & E; E < 32; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if ((65535 & x) !== ((x >>> 16) ^ 65535)) {
                  ;(t.msg = 'invalid stored block lengths'), (r.mode = p)
                  break
                }
                if (
                  ((r.length = 65535 & x),
                  (x = 0),
                  (E = 0),
                  (r.mode = 15),
                  6 === e)
                )
                  break t
              case 15:
                r.mode = 16
              case 16:
                if ((S = r.length)) {
                  if ((S > b && (S = b), S > _ && (S = _), 0 === S)) break t
                  n.arraySet(m, v, w, S, y),
                    (b -= S),
                    (w += S),
                    (_ -= S),
                    (y += S),
                    (r.length -= S)
                  break
                }
                r.mode = d
                break
              case 17:
                for (; E < 14; ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if (
                  ((r.nlen = 257 + (31 & x)),
                  (x >>>= 5),
                  (E -= 5),
                  (r.ndist = 1 + (31 & x)),
                  (x >>>= 5),
                  (E -= 5),
                  (r.ncode = 4 + (15 & x)),
                  (x >>>= 4),
                  (E -= 4),
                  r.nlen > 286 || r.ndist > 30)
                ) {
                  ;(t.msg = 'too many length or distance symbols'), (r.mode = p)
                  break
                }
                ;(r.have = 0), (r.mode = 18)
              case 18:
                for (; r.have < r.ncode; ) {
                  for (; E < 3; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(r.lens[j[r.have++]] = 7 & x), (x >>>= 3), (E -= 3)
                }
                for (; r.have < 19; ) r.lens[j[r.have++]] = 0
                if (
                  ((r.lencode = r.lendyn),
                  (r.lenbits = 7),
                  (F = { bits: r.lenbits }),
                  (U = a(0, r.lens, 0, 19, r.lencode, 0, r.work, F)),
                  (r.lenbits = F.bits),
                  U)
                ) {
                  ;(t.msg = 'invalid code lengths set'), (r.mode = p)
                  break
                }
                ;(r.have = 0), (r.mode = 19)
              case 19:
                for (; r.have < r.nlen + r.ndist; ) {
                  for (
                    ;
                    (N =
                      ((Z = r.lencode[x & ((1 << r.lenbits) - 1)]) >>> 16) &
                      255),
                      (L = 65535 & Z),
                      !((O = Z >>> 24) <= E);

                  ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  if (L < 16) (x >>>= O), (E -= O), (r.lens[r.have++] = L)
                  else {
                    if (16 === L) {
                      for (D = O + 2; E < D; ) {
                        if (0 === b) break t
                        b--, (x += v[w++] << E), (E += 8)
                      }
                      if (((x >>>= O), (E -= O), 0 === r.have)) {
                        ;(t.msg = 'invalid bit length repeat'), (r.mode = p)
                        break
                      }
                      ;(H = r.lens[r.have - 1]),
                        (S = 3 + (3 & x)),
                        (x >>>= 2),
                        (E -= 2)
                    } else if (17 === L) {
                      for (D = O + 3; E < D; ) {
                        if (0 === b) break t
                        b--, (x += v[w++] << E), (E += 8)
                      }
                      ;(E -= O),
                        (H = 0),
                        (S = 3 + (7 & (x >>>= O))),
                        (x >>>= 3),
                        (E -= 3)
                    } else {
                      for (D = O + 7; E < D; ) {
                        if (0 === b) break t
                        b--, (x += v[w++] << E), (E += 8)
                      }
                      ;(E -= O),
                        (H = 0),
                        (S = 11 + (127 & (x >>>= O))),
                        (x >>>= 7),
                        (E -= 7)
                    }
                    if (r.have + S > r.nlen + r.ndist) {
                      ;(t.msg = 'invalid bit length repeat'), (r.mode = p)
                      break
                    }
                    for (; S--; ) r.lens[r.have++] = H
                  }
                }
                if (r.mode === p) break
                if (0 === r.lens[256]) {
                  ;(t.msg = 'invalid code -- missing end-of-block'),
                    (r.mode = p)
                  break
                }
                if (
                  ((r.lenbits = 9),
                  (F = { bits: r.lenbits }),
                  (U = a(u, r.lens, 0, r.nlen, r.lencode, 0, r.work, F)),
                  (r.lenbits = F.bits),
                  U)
                ) {
                  ;(t.msg = 'invalid literal/lengths set'), (r.mode = p)
                  break
                }
                if (
                  ((r.distbits = 6),
                  (r.distcode = r.distdyn),
                  (F = { bits: r.distbits }),
                  (U = a(f, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, F)),
                  (r.distbits = F.bits),
                  U)
                ) {
                  ;(t.msg = 'invalid distances set'), (r.mode = p)
                  break
                }
                if (((r.mode = 20), 6 === e)) break t
              case 20:
                r.mode = 21
              case 21:
                if (b >= 6 && _ >= 258) {
                  ;(t.next_out = y),
                    (t.avail_out = _),
                    (t.next_in = w),
                    (t.avail_in = b),
                    (r.hold = x),
                    (r.bits = E),
                    s(t, B),
                    (y = t.next_out),
                    (m = t.output),
                    (_ = t.avail_out),
                    (w = t.next_in),
                    (v = t.input),
                    (b = t.avail_in),
                    (x = r.hold),
                    (E = r.bits),
                    r.mode === d && (r.back = -1)
                  break
                }
                for (
                  r.back = 0;
                  (N =
                    ((Z = r.lencode[x & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (L = 65535 & Z),
                    !((O = Z >>> 24) <= E);

                ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if (N && 0 === (240 & N)) {
                  for (
                    R = O, P = N, C = L;
                    (N =
                      ((Z =
                        r.lencode[C + ((x & ((1 << (R + P)) - 1)) >> R)]) >>>
                        16) &
                      255),
                      (L = 65535 & Z),
                      !(R + (O = Z >>> 24) <= E);

                  ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(x >>>= R), (E -= R), (r.back += R)
                }
                if (
                  ((x >>>= O), (E -= O), (r.back += O), (r.length = L), 0 === N)
                ) {
                  r.mode = 26
                  break
                }
                if (32 & N) {
                  ;(r.back = -1), (r.mode = d)
                  break
                }
                if (64 & N) {
                  ;(t.msg = 'invalid literal/length code'), (r.mode = p)
                  break
                }
                ;(r.extra = 15 & N), (r.mode = 22)
              case 22:
                if (r.extra) {
                  for (D = r.extra; E < D; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(r.length += x & ((1 << r.extra) - 1)),
                    (x >>>= r.extra),
                    (E -= r.extra),
                    (r.back += r.extra)
                }
                ;(r.was = r.length), (r.mode = 23)
              case 23:
                for (
                  ;
                  (N =
                    ((Z = r.distcode[x & ((1 << r.distbits) - 1)]) >>> 16) &
                    255),
                    (L = 65535 & Z),
                    !((O = Z >>> 24) <= E);

                ) {
                  if (0 === b) break t
                  b--, (x += v[w++] << E), (E += 8)
                }
                if (0 === (240 & N)) {
                  for (
                    R = O, P = N, C = L;
                    (N =
                      ((Z =
                        r.distcode[C + ((x & ((1 << (R + P)) - 1)) >> R)]) >>>
                        16) &
                      255),
                      (L = 65535 & Z),
                      !(R + (O = Z >>> 24) <= E);

                  ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(x >>>= R), (E -= R), (r.back += R)
                }
                if (((x >>>= O), (E -= O), (r.back += O), 64 & N)) {
                  ;(t.msg = 'invalid distance code'), (r.mode = p)
                  break
                }
                ;(r.offset = L), (r.extra = 15 & N), (r.mode = 24)
              case 24:
                if (r.extra) {
                  for (D = r.extra; E < D; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  ;(r.offset += x & ((1 << r.extra) - 1)),
                    (x >>>= r.extra),
                    (E -= r.extra),
                    (r.back += r.extra)
                }
                if (r.offset > r.dmax) {
                  ;(t.msg = 'invalid distance too far back'), (r.mode = p)
                  break
                }
                r.mode = 25
              case 25:
                if (0 === _) break t
                if (((S = B - _), r.offset > S)) {
                  if ((S = r.offset - S) > r.whave && r.sane) {
                    ;(t.msg = 'invalid distance too far back'), (r.mode = p)
                    break
                  }
                  S > r.wnext
                    ? ((S -= r.wnext), (T = r.wsize - S))
                    : (T = r.wnext - S),
                    S > r.length && (S = r.length),
                    (I = r.window)
                } else (I = m), (T = y - r.offset), (S = r.length)
                S > _ && (S = _), (_ -= S), (r.length -= S)
                do {
                  m[y++] = I[T++]
                } while (--S)
                0 === r.length && (r.mode = 21)
                break
              case 26:
                if (0 === _) break t
                ;(m[y++] = r.length), _--, (r.mode = 21)
                break
              case 27:
                if (r.wrap) {
                  for (; E < 32; ) {
                    if (0 === b) break t
                    b--, (x |= v[w++] << E), (E += 8)
                  }
                  if (
                    ((B -= _),
                    (t.total_out += B),
                    (r.total += B),
                    B &&
                      (t.adler = r.check = r.flags
                        ? o(r.check, m, B, y - B)
                        : i(r.check, m, B, y - B)),
                    (B = _),
                    (r.flags ? x : g(x)) !== r.check)
                  ) {
                    ;(t.msg = 'incorrect data check'), (r.mode = p)
                    break
                  }
                  ;(x = 0), (E = 0)
                }
                r.mode = 28
              case 28:
                if (r.wrap && r.flags) {
                  for (; E < 32; ) {
                    if (0 === b) break t
                    b--, (x += v[w++] << E), (E += 8)
                  }
                  if (x !== (4294967295 & r.total)) {
                    ;(t.msg = 'incorrect length check'), (r.mode = p)
                    break
                  }
                  ;(x = 0), (E = 0)
                }
                r.mode = 29
              case 29:
                U = 1
                break t
              case p:
                U = -3
                break t
              case 31:
                return -4
              default:
                return l
            }
          return (
            (t.next_out = y),
            (t.avail_out = _),
            (t.next_in = w),
            (t.avail_in = b),
            (r.hold = x),
            (r.bits = E),
            (r.wsize ||
              (B !== t.avail_out && r.mode < p && (r.mode < 27 || 4 !== e))) &&
            M(t, t.output, t.next_out, B - t.avail_out)
              ? ((r.mode = 31), -4)
              : ((k -= t.avail_in),
                (B -= t.avail_out),
                (t.total_in += k),
                (t.total_out += B),
                (r.total += B),
                r.wrap &&
                  B &&
                  (t.adler = r.check = r.flags
                    ? o(r.check, m, B, t.next_out - B)
                    : i(r.check, m, B, t.next_out - B)),
                (t.data_type =
                  r.bits +
                  (r.last ? 64 : 0) +
                  (r.mode === d ? 128 : 0) +
                  (20 === r.mode || 15 === r.mode ? 256 : 0)),
                ((0 === k && 0 === B) || 4 === e) && U === h && (U = -5),
                U)
          )
        }),
        (e.inflateEnd = function(t) {
          if (!t || !t.state) return l
          var e = t.state
          return e.window && (e.window = null), (t.state = null), h
        }),
        (e.inflateGetHeader = function(t, e) {
          var r
          return t && t.state
            ? 0 === (2 & (r = t.state).wrap)
              ? l
              : ((r.head = e), (e.done = !1), h)
            : l
        }),
        (e.inflateSetDictionary = function(t, e) {
          var r,
            n = e.length
          return t && t.state
            ? 0 !== (r = t.state).wrap && 11 !== r.mode
              ? l
              : 11 === r.mode && i(1, e, n, 0) !== r.check
              ? -3
              : M(t, e, n, n)
              ? ((r.mode = 31), -4)
              : ((r.havedict = 1), h)
            : l
        }),
        (e.inflateInfo = 'pako inflate (from Nodeca project)')
    },
    55415: function(t, e, r) {
      'use strict'
      var n = r(25886),
        i = 15,
        o = [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          0,
          0
        ],
        s = [
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          19,
          19,
          19,
          19,
          20,
          20,
          20,
          20,
          21,
          21,
          21,
          21,
          16,
          72,
          78
        ],
        a = [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577,
          0,
          0
        ],
        u = [
          16,
          16,
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          64,
          64
        ]
      t.exports = function(t, e, r, f, h, l, c, d) {
        var p,
          v,
          m,
          g,
          w,
          y,
          b,
          _,
          x,
          E = d.bits,
          k = 0,
          B = 0,
          A = 0,
          M = 0,
          S = 0,
          T = 0,
          I = 0,
          O = 0,
          N = 0,
          L = 0,
          R = null,
          P = 0,
          C = new n.Buf16(16),
          H = new n.Buf16(16),
          U = null,
          F = 0
        for (k = 0; k <= i; k++) C[k] = 0
        for (B = 0; B < f; B++) C[e[r + B]]++
        for (S = E, M = i; M >= 1 && 0 === C[M]; M--);
        if ((S > M && (S = M), 0 === M))
          return (h[l++] = 20971520), (h[l++] = 20971520), (d.bits = 1), 0
        for (A = 1; A < M && 0 === C[A]; A++);
        for (S < A && (S = A), O = 1, k = 1; k <= i; k++)
          if (((O <<= 1), (O -= C[k]) < 0)) return -1
        if (O > 0 && (0 === t || 1 !== M)) return -1
        for (H[1] = 0, k = 1; k < i; k++) H[k + 1] = H[k] + C[k]
        for (B = 0; B < f; B++) 0 !== e[r + B] && (c[H[e[r + B]]++] = B)
        if (
          (0 === t
            ? ((R = U = c), (y = 19))
            : 1 === t
            ? ((R = o), (P -= 257), (U = s), (F -= 257), (y = 256))
            : ((R = a), (U = u), (y = -1)),
          (L = 0),
          (B = 0),
          (k = A),
          (w = l),
          (T = S),
          (I = 0),
          (m = -1),
          (g = (N = 1 << S) - 1),
          (1 === t && N > 852) || (2 === t && N > 592))
        )
          return 1
        for (;;) {
          ;(b = k - I),
            c[B] < y
              ? ((_ = 0), (x = c[B]))
              : c[B] > y
              ? ((_ = U[F + c[B]]), (x = R[P + c[B]]))
              : ((_ = 96), (x = 0)),
            (p = 1 << (k - I)),
            (A = v = 1 << T)
          do {
            h[w + (L >> I) + (v -= p)] = (b << 24) | (_ << 16) | x
          } while (0 !== v)
          for (p = 1 << (k - 1); L & p; ) p >>= 1
          if (
            (0 !== p ? ((L &= p - 1), (L += p)) : (L = 0), B++, 0 === --C[k])
          ) {
            if (k === M) break
            k = e[r + c[B]]
          }
          if (k > S && (L & g) !== m) {
            for (
              0 === I && (I = S), w += A, O = 1 << (T = k - I);
              T + I < M && !((O -= C[T + I]) <= 0);

            )
              T++, (O <<= 1)
            if (((N += 1 << T), (1 === t && N > 852) || (2 === t && N > 592)))
              return 1
            h[(m = L & g)] = (S << 24) | (T << 16) | (w - l)
          }
        }
        return (
          0 !== L && (h[w + L] = ((k - I) << 24) | (64 << 16)), (d.bits = S), 0
        )
      }
    },
    88135: function(t) {
      'use strict'
      t.exports = {
        2: 'need dictionary',
        1: 'stream end',
        0: '',
        '-1': 'file error',
        '-2': 'stream error',
        '-3': 'data error',
        '-4': 'insufficient memory',
        '-5': 'buffer error',
        '-6': 'incompatible version'
      }
    },
    73422: function(t, e, r) {
      'use strict'
      var n = r(25886),
        i = 0,
        o = 1
      function s(t) {
        for (var e = t.length; --e >= 0; ) t[e] = 0
      }
      var a = 0,
        u = 29,
        f = 256,
        h = f + 1 + u,
        l = 30,
        c = 19,
        d = 2 * h + 1,
        p = 15,
        v = 16,
        m = 7,
        g = 256,
        w = 16,
        y = 17,
        b = 18,
        _ = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          0
        ],
        x = [
          0,
          0,
          0,
          0,
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          10,
          11,
          11,
          12,
          12,
          13,
          13
        ],
        E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        B = new Array(2 * (h + 2))
      s(B)
      var A = new Array(2 * l)
      s(A)
      var M = new Array(512)
      s(M)
      var S = new Array(256)
      s(S)
      var T = new Array(u)
      s(T)
      var I,
        O,
        N,
        L = new Array(l)
      function R(t, e, r, n, i) {
        ;(this.static_tree = t),
          (this.extra_bits = e),
          (this.extra_base = r),
          (this.elems = n),
          (this.max_length = i),
          (this.has_stree = t && t.length)
      }
      function P(t, e) {
        ;(this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e)
      }
      function C(t) {
        return t < 256 ? M[t] : M[256 + (t >>> 7)]
      }
      function H(t, e) {
        ;(t.pending_buf[t.pending++] = 255 & e),
          (t.pending_buf[t.pending++] = (e >>> 8) & 255)
      }
      function U(t, e, r) {
        t.bi_valid > v - r
          ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
            H(t, t.bi_buf),
            (t.bi_buf = e >> (v - t.bi_valid)),
            (t.bi_valid += r - v))
          : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r))
      }
      function F(t, e, r) {
        U(t, r[2 * e], r[2 * e + 1])
      }
      function D(t, e) {
        var r = 0
        do {
          ;(r |= 1 & t), (t >>>= 1), (r <<= 1)
        } while (--e > 0)
        return r >>> 1
      }
      function Z(t, e, r) {
        var n,
          i,
          o = new Array(p + 1),
          s = 0
        for (n = 1; n <= p; n++) o[n] = s = (s + r[n - 1]) << 1
        for (i = 0; i <= e; i++) {
          var a = t[2 * i + 1]
          0 !== a && (t[2 * i] = D(o[a]++, a))
        }
      }
      function z(t) {
        var e
        for (e = 0; e < h; e++) t.dyn_ltree[2 * e] = 0
        for (e = 0; e < l; e++) t.dyn_dtree[2 * e] = 0
        for (e = 0; e < c; e++) t.bl_tree[2 * e] = 0
        ;(t.dyn_ltree[2 * g] = 1),
          (t.opt_len = t.static_len = 0),
          (t.last_lit = t.matches = 0)
      }
      function j(t) {
        t.bi_valid > 8
          ? H(t, t.bi_buf)
          : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
          (t.bi_buf = 0),
          (t.bi_valid = 0)
      }
      function q(t, e, r, n) {
        var i = 2 * e,
          o = 2 * r
        return t[i] < t[o] || (t[i] === t[o] && n[e] <= n[r])
      }
      function K(t, e, r) {
        for (
          var n = t.heap[r], i = r << 1;
          i <= t.heap_len &&
          (i < t.heap_len && q(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
          !q(e, n, t.heap[i], t.depth));

        )
          (t.heap[r] = t.heap[i]), (r = i), (i <<= 1)
        t.heap[r] = n
      }
      function W(t, e, r) {
        var n,
          i,
          o,
          s,
          a = 0
        if (0 !== t.last_lit)
          do {
            ;(n =
              (t.pending_buf[t.d_buf + 2 * a] << 8) |
              t.pending_buf[t.d_buf + 2 * a + 1]),
              (i = t.pending_buf[t.l_buf + a]),
              a++,
              0 === n
                ? F(t, i, e)
                : (F(t, (o = S[i]) + f + 1, e),
                  0 !== (s = _[o]) && U(t, (i -= T[o]), s),
                  F(t, (o = C(--n)), r),
                  0 !== (s = x[o]) && U(t, (n -= L[o]), s))
          } while (a < t.last_lit)
        F(t, g, e)
      }
      function V(t, e) {
        var r,
          n,
          i,
          o = e.dyn_tree,
          s = e.stat_desc.static_tree,
          a = e.stat_desc.has_stree,
          u = e.stat_desc.elems,
          f = -1
        for (t.heap_len = 0, t.heap_max = d, r = 0; r < u; r++)
          0 !== o[2 * r]
            ? ((t.heap[++t.heap_len] = f = r), (t.depth[r] = 0))
            : (o[2 * r + 1] = 0)
        for (; t.heap_len < 2; )
          (o[2 * (i = t.heap[++t.heap_len] = f < 2 ? ++f : 0)] = 1),
            (t.depth[i] = 0),
            t.opt_len--,
            a && (t.static_len -= s[2 * i + 1])
        for (e.max_code = f, r = t.heap_len >> 1; r >= 1; r--) K(t, o, r)
        i = u
        do {
          ;(r = t.heap[1]),
            (t.heap[1] = t.heap[t.heap_len--]),
            K(t, o, 1),
            (n = t.heap[1]),
            (t.heap[--t.heap_max] = r),
            (t.heap[--t.heap_max] = n),
            (o[2 * i] = o[2 * r] + o[2 * n]),
            (t.depth[i] =
              (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1),
            (o[2 * r + 1] = o[2 * n + 1] = i),
            (t.heap[1] = i++),
            K(t, o, 1)
        } while (t.heap_len >= 2)
        ;(t.heap[--t.heap_max] = t.heap[1]),
          (function(t, e) {
            var r,
              n,
              i,
              o,
              s,
              a,
              u = e.dyn_tree,
              f = e.max_code,
              h = e.stat_desc.static_tree,
              l = e.stat_desc.has_stree,
              c = e.stat_desc.extra_bits,
              v = e.stat_desc.extra_base,
              m = e.stat_desc.max_length,
              g = 0
            for (o = 0; o <= p; o++) t.bl_count[o] = 0
            for (
              u[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1;
              r < d;
              r++
            )
              (o = u[2 * u[2 * (n = t.heap[r]) + 1] + 1] + 1) > m &&
                ((o = m), g++),
                (u[2 * n + 1] = o),
                n > f ||
                  (t.bl_count[o]++,
                  (s = 0),
                  n >= v && (s = c[n - v]),
                  (a = u[2 * n]),
                  (t.opt_len += a * (o + s)),
                  l && (t.static_len += a * (h[2 * n + 1] + s)))
            if (0 !== g) {
              do {
                for (o = m - 1; 0 === t.bl_count[o]; ) o--
                t.bl_count[o]--,
                  (t.bl_count[o + 1] += 2),
                  t.bl_count[m]--,
                  (g -= 2)
              } while (g > 0)
              for (o = m; 0 !== o; o--)
                for (n = t.bl_count[o]; 0 !== n; )
                  (i = t.heap[--r]) > f ||
                    (u[2 * i + 1] !== o &&
                      ((t.opt_len += (o - u[2 * i + 1]) * u[2 * i]),
                      (u[2 * i + 1] = o)),
                    n--)
            }
          })(t, e),
          Z(o, f, t.bl_count)
      }
      function G(t, e, r) {
        var n,
          i,
          o = -1,
          s = e[1],
          a = 0,
          u = 7,
          f = 4
        for (
          0 === s && ((u = 138), (f = 3)), e[2 * (r + 1) + 1] = 65535, n = 0;
          n <= r;
          n++
        )
          (i = s),
            (s = e[2 * (n + 1) + 1]),
            (++a < u && i === s) ||
              (a < f
                ? (t.bl_tree[2 * i] += a)
                : 0 !== i
                ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * w]++)
                : a <= 10
                ? t.bl_tree[2 * y]++
                : t.bl_tree[2 * b]++,
              (a = 0),
              (o = i),
              0 === s
                ? ((u = 138), (f = 3))
                : i === s
                ? ((u = 6), (f = 3))
                : ((u = 7), (f = 4)))
      }
      function Y(t, e, r) {
        var n,
          i,
          o = -1,
          s = e[1],
          a = 0,
          u = 7,
          f = 4
        for (0 === s && ((u = 138), (f = 3)), n = 0; n <= r; n++)
          if (((i = s), (s = e[2 * (n + 1) + 1]), !(++a < u && i === s))) {
            if (a < f)
              do {
                F(t, i, t.bl_tree)
              } while (0 !== --a)
            else
              0 !== i
                ? (i !== o && (F(t, i, t.bl_tree), a--),
                  F(t, w, t.bl_tree),
                  U(t, a - 3, 2))
                : a <= 10
                ? (F(t, y, t.bl_tree), U(t, a - 3, 3))
                : (F(t, b, t.bl_tree), U(t, a - 11, 7))
            ;(a = 0),
              (o = i),
              0 === s
                ? ((u = 138), (f = 3))
                : i === s
                ? ((u = 6), (f = 3))
                : ((u = 7), (f = 4))
          }
      }
      s(L)
      var X = !1
      function $(t, e, r, i) {
        U(t, (a << 1) + (i ? 1 : 0), 3),
          (function(t, e, r, i) {
            j(t),
              i && (H(t, r), H(t, ~r)),
              n.arraySet(t.pending_buf, t.window, e, r, t.pending),
              (t.pending += r)
          })(t, e, r, !0)
      }
      ;(e._tr_init = function(t) {
        X ||
          (!(function() {
            var t,
              e,
              r,
              n,
              i,
              o = new Array(p + 1)
            for (r = 0, n = 0; n < u - 1; n++)
              for (T[n] = r, t = 0; t < 1 << _[n]; t++) S[r++] = n
            for (S[r - 1] = n, i = 0, n = 0; n < 16; n++)
              for (L[n] = i, t = 0; t < 1 << x[n]; t++) M[i++] = n
            for (i >>= 7; n < l; n++)
              for (L[n] = i << 7, t = 0; t < 1 << (x[n] - 7); t++)
                M[256 + i++] = n
            for (e = 0; e <= p; e++) o[e] = 0
            for (t = 0; t <= 143; ) (B[2 * t + 1] = 8), t++, o[8]++
            for (; t <= 255; ) (B[2 * t + 1] = 9), t++, o[9]++
            for (; t <= 279; ) (B[2 * t + 1] = 7), t++, o[7]++
            for (; t <= 287; ) (B[2 * t + 1] = 8), t++, o[8]++
            for (Z(B, h + 1, o), t = 0; t < l; t++)
              (A[2 * t + 1] = 5), (A[2 * t] = D(t, 5))
            ;(I = new R(B, _, f + 1, h, p)),
              (O = new R(A, x, 0, l, p)),
              (N = new R(new Array(0), E, 0, c, m))
          })(),
          (X = !0)),
          (t.l_desc = new P(t.dyn_ltree, I)),
          (t.d_desc = new P(t.dyn_dtree, O)),
          (t.bl_desc = new P(t.bl_tree, N)),
          (t.bi_buf = 0),
          (t.bi_valid = 0),
          z(t)
      }),
        (e._tr_stored_block = $),
        (e._tr_flush_block = function(t, e, r, n) {
          var s,
            a,
            u = 0
          t.level > 0
            ? (2 === t.strm.data_type &&
                (t.strm.data_type = (function(t) {
                  var e,
                    r = 4093624447
                  for (e = 0; e <= 31; e++, r >>>= 1)
                    if (1 & r && 0 !== t.dyn_ltree[2 * e]) return i
                  if (
                    0 !== t.dyn_ltree[18] ||
                    0 !== t.dyn_ltree[20] ||
                    0 !== t.dyn_ltree[26]
                  )
                    return o
                  for (e = 32; e < f; e++)
                    if (0 !== t.dyn_ltree[2 * e]) return o
                  return i
                })(t)),
              V(t, t.l_desc),
              V(t, t.d_desc),
              (u = (function(t) {
                var e
                for (
                  G(t, t.dyn_ltree, t.l_desc.max_code),
                    G(t, t.dyn_dtree, t.d_desc.max_code),
                    V(t, t.bl_desc),
                    e = c - 1;
                  e >= 3 && 0 === t.bl_tree[2 * k[e] + 1];
                  e--
                );
                return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e
              })(t)),
              (s = (t.opt_len + 3 + 7) >>> 3),
              (a = (t.static_len + 3 + 7) >>> 3) <= s && (s = a))
            : (s = a = r + 5),
            r + 4 <= s && -1 !== e
              ? $(t, e, r, n)
              : 4 === t.strategy || a === s
              ? (U(t, 2 + (n ? 1 : 0), 3), W(t, B, A))
              : (U(t, 4 + (n ? 1 : 0), 3),
                (function(t, e, r, n) {
                  var i
                  for (
                    U(t, e - 257, 5), U(t, r - 1, 5), U(t, n - 4, 4), i = 0;
                    i < n;
                    i++
                  )
                    U(t, t.bl_tree[2 * k[i] + 1], 3)
                  Y(t, t.dyn_ltree, e - 1), Y(t, t.dyn_dtree, r - 1)
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, u + 1),
                W(t, t.dyn_ltree, t.dyn_dtree)),
            z(t),
            n && j(t)
        }),
        (e._tr_tally = function(t, e, r) {
          return (
            (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
            (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
            (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
            t.last_lit++,
            0 === e
              ? t.dyn_ltree[2 * r]++
              : (t.matches++,
                e--,
                t.dyn_ltree[2 * (S[r] + f + 1)]++,
                t.dyn_dtree[2 * C(e)]++),
            t.last_lit === t.lit_bufsize - 1
          )
        }),
        (e._tr_align = function(t) {
          U(t, 2, 3),
            F(t, g, B),
            (function(t) {
              16 === t.bi_valid
                ? (H(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                : t.bi_valid >= 8 &&
                  ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                  (t.bi_buf >>= 8),
                  (t.bi_valid -= 8))
            })(t)
        })
    },
    301: function(t) {
      'use strict'
      t.exports = function() {
        ;(this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ''),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0)
      }
    },
    65247: function(t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SHARE_SITES = void 0)
      e.SHARE_SITES = {
        GOOGLE: 'Google',
        ICAL: 'iCal',
        OUTLOOK: 'Outlook',
        YAHOO: 'Yahoo'
      }
    },
    46809: function(t, e, r) {
      'use strict'
      e.Ay = function(t, e) {
        var r, n
        return (
          (n = r = (function(r) {
            function n() {
              var t, e, r
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, n)
              for (
                var i = arguments.length, o = new Array(i), s = 0;
                s < i;
                s++
              )
                o[s] = arguments[s]
              return l(
                r,
                ((e = r = l(this, (t = c(n)).call.apply(t, [this].concat(o)))),
                v(p(p(r)), 'state', { dropdownOpen: !1 }),
                v(p(p(r)), 'handleCalendarButtonClick', function(t) {
                  var e = r.props.filename
                  t.preventDefault()
                  var n = t.currentTarget.getAttribute('href')
                  if (n.startsWith('BEGIN')) {
                    var i = new Blob([n], {
                      type: 'text/calendar;charset=utf-8'
                    })
                    if ((0, a.isInternetExplorer)())
                      window.navigator.msSaveOrOpenBlob(i, ''.concat(e, '.ics'))
                    else {
                      var o = document.createElement('a')
                      ;(o.href = window.URL.createObjectURL(i)),
                        o.setAttribute('download', ''.concat(e, '.ics')),
                        document.body.appendChild(o),
                        o.click(),
                        document.body.removeChild(o)
                    }
                  } else window.open(n, '_blank')
                }),
                v(p(p(r)), 'handleDropdownToggle', function(t) {
                  t.preventDefault(),
                    r.setState(function(t) {
                      return { dropdownOpen: !t.dropdownOpen }
                    })
                }),
                e)
              )
            }
            return (
              (function(t, e) {
                if ('function' !== typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                ;(t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 }
                })),
                  e && d(t, e)
              })(n, r),
              (function(t, e, r) {
                e && h(t.prototype, e)
                r && h(t, r)
              })(n, [
                {
                  key: 'render',
                  value: function() {
                    var r = this,
                      n = this.props,
                      o = n.buttonProps,
                      s = n.buttonText,
                      u = n.className,
                      h = n.dropdownProps,
                      l = n.event,
                      c = n.items,
                      d = n.linkProps
                    return i.default.createElement(
                      'div',
                      { className: u },
                      i.default.createElement(
                        t,
                        f({}, o, { onClick: this.handleDropdownToggle }),
                        s
                      ),
                      this.state.dropdownOpen &&
                        i.default.createElement(
                          e,
                          f({}, h, {
                            isOpen: this.state.dropdownOpen,
                            onRequestClose: this.handleDropdownToggle
                          }),
                          c.map(function(t) {
                            return i.default.createElement(
                              'a',
                              f({}, d, {
                                key: t,
                                onClick: r.handleCalendarButtonClick,
                                href: (0, a.buildShareUrl)(l, t)
                              }),
                              t
                            )
                          })
                        )
                    )
                  }
                }
              ]),
              n
            )
          })(i.Component)),
          v(r, 'propTypes', {
            buttonProps: o.default.shape(),
            buttonText: o.default.node,
            className: o.default.string,
            dropdownProps: o.default.shape(),
            event: o.default.shape({
              description: o.default.string,
              duration: o.default.oneOfType([
                o.default.number,
                o.default.string
              ]).isRequired,
              endDatetime: o.default.string.isRequired,
              location: o.default.string,
              startDatetime: o.default.string.isRequired,
              title: o.default.string
            }).isRequired,
            filename: o.default.string,
            items: o.default.arrayOf(
              o.default.oneOf(
                Object.keys(s.SHARE_SITES).map(function(t) {
                  return s.SHARE_SITES[t]
                })
              )
            ),
            linkProps: o.default.shape()
          }),
          v(r, 'defaultProps', {
            buttonProps: {},
            buttonText: 'Add to Calendar',
            className: null,
            dropdownProps: {},
            filename: 'download',
            items: Object.keys(s.SHARE_SITES).map(function(t) {
              return s.SHARE_SITES[t]
            }),
            linkProps: {}
          }),
          n
        )
      }
      var n,
        i = (function(t) {
          if (t && t.__esModule) return t
          var e = {}
          if (null != t)
            for (var r in t)
              if (Object.prototype.hasOwnProperty.call(t, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, r)
                    : {}
                n.get || n.set ? Object.defineProperty(e, r, n) : (e[r] = t[r])
              }
          return (e.default = t), e
        })(r(65043)),
        o = (n = r(65173)) && n.__esModule ? n : { default: n },
        s = r(65247),
        a = r(9428)
      function u(t) {
        return (
          (u =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          u(t)
        )
      }
      function f() {
        return (
          (f =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          f.apply(this, arguments)
        )
      }
      function h(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      function l(t, e) {
        return !e || ('object' !== u(e) && 'function' !== typeof e) ? p(t) : e
      }
      function c(t) {
        return (
          (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          c(t)
        )
      }
      function d(t, e) {
        return (
          (d =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t
            }),
          d(t, e)
        )
      }
      function p(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }
      function v(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = r),
          t
        )
      }
    },
    9428: function(t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.buildShareUrl = e.escapeICSDescription = e.isInternetExplorer = e.isMobile = e.formatDuration = e.formatDate = void 0)
      var n = r(65247),
        i = function(t) {
          return t && t.replace('+00:00', 'Z')
        }
      e.formatDate = i
      var o = function(t) {
        if ('string' === typeof t) return t
        var e = t.toString().split('.')
        return (
          e.length < 2 && e.push('00'),
          e
            .map(function(t) {
              return 2 === t.length ? t : '0'.concat(t)
            })
            .join('')
        )
      }
      e.formatDuration = o
      var s = function() {
        return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
          window.navigator.userAgent || window.navigator.vendor || window.opera
        )
      }
      e.isMobile = s
      e.isInternetExplorer = function() {
        return (
          /MSIE/.test(window.navigator.userAgent) ||
          /Trident/.test(window.navigator.userAgent)
        )
      }
      var a = function(t) {
        return t.replace(/(\r?\n|<br ?\/?>)/g, '\\n')
      }
      e.escapeICSDescription = a
      var u = function(t) {
        var e = t.description,
          r = void 0 === e ? '' : e,
          n = (t.ctz, t.endDatetime),
          i = t.location,
          o = void 0 === i ? '' : i,
          u = t.startDatetime,
          f = t.timezone,
          h = void 0 === f ? '' : f,
          l = t.title,
          c = void 0 === l ? '' : l,
          d = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'URL:'.concat(document.URL),
            'METHOD:PUBLISH',
            '' === h
              ? 'DTSTART:'.concat(u)
              : 'DTSTART;TZID='.concat(h, ':').concat(u),
            '' === h
              ? 'DTEND:'.concat(n)
              : 'DTEND;TZID='.concat(h, ':').concat(n),
            'SUMMARY:'.concat(c),
            'DESCRIPTION:'.concat(a(r)),
            'LOCATION:'.concat(o),
            'END:VEVENT',
            'END:VCALENDAR'
          ].join('\n')
        return s() ? encodeURI('data:text/calendar;charset=utf8,'.concat(d)) : d
      }
      e.buildShareUrl = function(t, e) {
        var r = t.description,
          s = void 0 === r ? '' : r,
          a = t.duration,
          f = t.endDatetime,
          h = t.location,
          l = void 0 === h ? '' : h,
          c = t.startDatetime,
          d = t.timezone,
          p = void 0 === d ? '' : d,
          v = t.title,
          m = void 0 === v ? '' : v,
          g = e !== n.SHARE_SITES.ICAL && e !== n.SHARE_SITES.OUTLOOK,
          w = {
            description: g ? encodeURIComponent(s) : s,
            duration: o(a),
            endDatetime: i(f),
            location: g ? encodeURIComponent(l) : l,
            startDatetime: i(c),
            timezone: p,
            title: g ? encodeURIComponent(m) : m
          }
        switch (e) {
          case n.SHARE_SITES.GOOGLE:
            return (function(t) {
              var e = t.description,
                r = t.endDatetime,
                n = t.location,
                i = t.startDatetime,
                o = t.timezone,
                s = t.title
              return 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates='
                .concat(i, '/')
                .concat(r)
                .concat(o && '&ctz='.concat(o), '&location=')
                .concat(n, '&text=')
                .concat(s, '&details=')
                .concat(e)
            })(w)
          case n.SHARE_SITES.YAHOO:
            return (function(t) {
              var e = t.description,
                r = t.duration,
                n = t.location,
                i = t.startDatetime,
                o = t.title
              return 'https://calendar.yahoo.com/?v=60&view=d&type=20&title='
                .concat(o, '&st=')
                .concat(i, '&dur=')
                .concat(r, '&desc=')
                .concat(e, '&in_loc=')
                .concat(n)
            })(w)
          default:
            return u(w)
        }
      }
    },
    2208: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = r(62285),
        o = r(2539),
        s = r(301),
        a = r(89140),
        u = r(5960),
        f = r(44266)
      for (var h in f) e[h] = f[h]
      ;(e.NONE = 0),
        (e.DEFLATE = 1),
        (e.INFLATE = 2),
        (e.GZIP = 3),
        (e.GUNZIP = 4),
        (e.DEFLATERAW = 5),
        (e.INFLATERAW = 6),
        (e.UNZIP = 7)
      function l(t) {
        if ('number' !== typeof t || t < e.DEFLATE || t > e.UNZIP)
          throw new TypeError('Bad argument')
        ;(this.dictionary = null),
          (this.err = 0),
          (this.flush = 0),
          (this.init_done = !1),
          (this.level = 0),
          (this.memLevel = 0),
          (this.mode = t),
          (this.strategy = 0),
          (this.windowBits = 0),
          (this.write_in_progress = !1),
          (this.pending_close = !1),
          (this.gzip_id_bytes_read = 0)
      }
      ;(l.prototype.close = function() {
        this.write_in_progress
          ? (this.pending_close = !0)
          : ((this.pending_close = !1),
            o(this.init_done, 'close before init'),
            o(this.mode <= e.UNZIP),
            this.mode === e.DEFLATE ||
            this.mode === e.GZIP ||
            this.mode === e.DEFLATERAW
              ? a.deflateEnd(this.strm)
              : (this.mode !== e.INFLATE &&
                  this.mode !== e.GUNZIP &&
                  this.mode !== e.INFLATERAW &&
                  this.mode !== e.UNZIP) ||
                u.inflateEnd(this.strm),
            (this.mode = e.NONE),
            (this.dictionary = null))
      }),
        (l.prototype.write = function(t, e, r, n, i, o, s) {
          return this._write(!0, t, e, r, n, i, o, s)
        }),
        (l.prototype.writeSync = function(t, e, r, n, i, o, s) {
          return this._write(!1, t, e, r, n, i, o, s)
        }),
        (l.prototype._write = function(t, r, s, a, u, f, h, l) {
          if (
            (o.equal(arguments.length, 8),
            o(this.init_done, 'write before init'),
            o(this.mode !== e.NONE, 'already finalized'),
            o.equal(!1, this.write_in_progress, 'write already in progress'),
            o.equal(!1, this.pending_close, 'close is pending'),
            (this.write_in_progress = !0),
            o.equal(!1, void 0 === r, 'must provide flush value'),
            (this.write_in_progress = !0),
            r !== e.Z_NO_FLUSH &&
              r !== e.Z_PARTIAL_FLUSH &&
              r !== e.Z_SYNC_FLUSH &&
              r !== e.Z_FULL_FLUSH &&
              r !== e.Z_FINISH &&
              r !== e.Z_BLOCK)
          )
            throw new Error('Invalid flush value')
          if (
            (null == s && ((s = n.alloc(0)), (u = 0), (a = 0)),
            (this.strm.avail_in = u),
            (this.strm.input = s),
            (this.strm.next_in = a),
            (this.strm.avail_out = l),
            (this.strm.output = f),
            (this.strm.next_out = h),
            (this.flush = r),
            !t)
          )
            return (
              this._process(), this._checkError() ? this._afterSync() : void 0
            )
          var c = this
          return (
            i.nextTick(function() {
              c._process(), c._after()
            }),
            this
          )
        }),
        (l.prototype._afterSync = function() {
          var t = this.strm.avail_out,
            e = this.strm.avail_in
          return (this.write_in_progress = !1), [e, t]
        }),
        (l.prototype._process = function() {
          var t = null
          switch (this.mode) {
            case e.DEFLATE:
            case e.GZIP:
            case e.DEFLATERAW:
              this.err = a.deflate(this.strm, this.flush)
              break
            case e.UNZIP:
              switch (
                (this.strm.avail_in > 0 && (t = this.strm.next_in),
                this.gzip_id_bytes_read)
              ) {
                case 0:
                  if (null === t) break
                  if (31 !== this.strm.input[t]) {
                    this.mode = e.INFLATE
                    break
                  }
                  if (
                    ((this.gzip_id_bytes_read = 1),
                    t++,
                    1 === this.strm.avail_in)
                  )
                    break
                case 1:
                  if (null === t) break
                  139 === this.strm.input[t]
                    ? ((this.gzip_id_bytes_read = 2), (this.mode = e.GUNZIP))
                    : (this.mode = e.INFLATE)
                  break
                default:
                  throw new Error(
                    'invalid number of gzip magic number bytes read'
                  )
              }
            case e.INFLATE:
            case e.GUNZIP:
            case e.INFLATERAW:
              for (
                this.err = u.inflate(this.strm, this.flush),
                  this.err === e.Z_NEED_DICT &&
                    this.dictionary &&
                    ((this.err = u.inflateSetDictionary(
                      this.strm,
                      this.dictionary
                    )),
                    this.err === e.Z_OK
                      ? (this.err = u.inflate(this.strm, this.flush))
                      : this.err === e.Z_DATA_ERROR &&
                        (this.err = e.Z_NEED_DICT));
                this.strm.avail_in > 0 &&
                this.mode === e.GUNZIP &&
                this.err === e.Z_STREAM_END &&
                0 !== this.strm.next_in[0];

              )
                this.reset(), (this.err = u.inflate(this.strm, this.flush))
              break
            default:
              throw new Error('Unknown mode ' + this.mode)
          }
        }),
        (l.prototype._checkError = function() {
          switch (this.err) {
            case e.Z_OK:
            case e.Z_BUF_ERROR:
              if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH)
                return this._error('unexpected end of file'), !1
              break
            case e.Z_STREAM_END:
              break
            case e.Z_NEED_DICT:
              return (
                null == this.dictionary
                  ? this._error('Missing dictionary')
                  : this._error('Bad dictionary'),
                !1
              )
            default:
              return this._error('Zlib error'), !1
          }
          return !0
        }),
        (l.prototype._after = function() {
          if (this._checkError()) {
            var t = this.strm.avail_out,
              e = this.strm.avail_in
            ;(this.write_in_progress = !1),
              this.callback(e, t),
              this.pending_close && this.close()
          }
        }),
        (l.prototype._error = function(t) {
          this.strm.msg && (t = this.strm.msg),
            this.onerror(t, this.err),
            (this.write_in_progress = !1),
            this.pending_close && this.close()
        }),
        (l.prototype.init = function(t, r, n, i, s) {
          o(
            4 === arguments.length || 5 === arguments.length,
            'init(windowBits, level, memLevel, strategy, [dictionary])'
          ),
            o(t >= 8 && t <= 15, 'invalid windowBits'),
            o(r >= -1 && r <= 9, 'invalid compression level'),
            o(n >= 1 && n <= 9, 'invalid memlevel'),
            o(
              i === e.Z_FILTERED ||
                i === e.Z_HUFFMAN_ONLY ||
                i === e.Z_RLE ||
                i === e.Z_FIXED ||
                i === e.Z_DEFAULT_STRATEGY,
              'invalid strategy'
            ),
            this._init(r, t, n, i, s),
            this._setDictionary()
        }),
        (l.prototype.params = function() {
          throw new Error('deflateParams Not supported')
        }),
        (l.prototype.reset = function() {
          this._reset(), this._setDictionary()
        }),
        (l.prototype._init = function(t, r, n, i, o) {
          switch (
            ((this.level = t),
            (this.windowBits = r),
            (this.memLevel = n),
            (this.strategy = i),
            (this.flush = e.Z_NO_FLUSH),
            (this.err = e.Z_OK),
            (this.mode !== e.GZIP && this.mode !== e.GUNZIP) ||
              (this.windowBits += 16),
            this.mode === e.UNZIP && (this.windowBits += 32),
            (this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW) ||
              (this.windowBits = -1 * this.windowBits),
            (this.strm = new s()),
            this.mode)
          ) {
            case e.DEFLATE:
            case e.GZIP:
            case e.DEFLATERAW:
              this.err = a.deflateInit2(
                this.strm,
                this.level,
                e.Z_DEFLATED,
                this.windowBits,
                this.memLevel,
                this.strategy
              )
              break
            case e.INFLATE:
            case e.GUNZIP:
            case e.INFLATERAW:
            case e.UNZIP:
              this.err = u.inflateInit2(this.strm, this.windowBits)
              break
            default:
              throw new Error('Unknown mode ' + this.mode)
          }
          this.err !== e.Z_OK && this._error('Init error'),
            (this.dictionary = o),
            (this.write_in_progress = !1),
            (this.init_done = !0)
        }),
        (l.prototype._setDictionary = function() {
          if (null != this.dictionary) {
            switch (((this.err = e.Z_OK), this.mode)) {
              case e.DEFLATE:
              case e.DEFLATERAW:
                this.err = a.deflateSetDictionary(this.strm, this.dictionary)
            }
            this.err !== e.Z_OK && this._error('Failed to set dictionary')
          }
        }),
        (l.prototype._reset = function() {
          switch (((this.err = e.Z_OK), this.mode)) {
            case e.DEFLATE:
            case e.DEFLATERAW:
            case e.GZIP:
              this.err = a.deflateReset(this.strm)
              break
            case e.INFLATE:
            case e.INFLATERAW:
            case e.GUNZIP:
              this.err = u.inflateReset(this.strm)
          }
          this.err !== e.Z_OK && this._error('Failed to reset stream')
        }),
        (e.Zlib = l)
    },
    50869: function(t, e, r) {
      'use strict'
      var n = r(62285),
        i = r(26382).Buffer,
        o = r(74520).Transform,
        s = r(2208),
        a = r(86494),
        u = r(2539).ok,
        f = r(26382).kMaxLength,
        h =
          'Cannot create final Buffer. It would be larger than 0x' +
          f.toString(16) +
          ' bytes'
      ;(s.Z_MIN_WINDOWBITS = 8),
        (s.Z_MAX_WINDOWBITS = 15),
        (s.Z_DEFAULT_WINDOWBITS = 15),
        (s.Z_MIN_CHUNK = 64),
        (s.Z_MAX_CHUNK = 1 / 0),
        (s.Z_DEFAULT_CHUNK = 16384),
        (s.Z_MIN_MEMLEVEL = 1),
        (s.Z_MAX_MEMLEVEL = 9),
        (s.Z_DEFAULT_MEMLEVEL = 8),
        (s.Z_MIN_LEVEL = -1),
        (s.Z_MAX_LEVEL = 9),
        (s.Z_DEFAULT_LEVEL = s.Z_DEFAULT_COMPRESSION)
      for (var l = Object.keys(s), c = 0; c < l.length; c++) {
        var d = l[c]
        d.match(/^Z/) &&
          Object.defineProperty(e, d, {
            enumerable: !0,
            value: s[d],
            writable: !1
          })
      }
      for (
        var p = {
            Z_OK: s.Z_OK,
            Z_STREAM_END: s.Z_STREAM_END,
            Z_NEED_DICT: s.Z_NEED_DICT,
            Z_ERRNO: s.Z_ERRNO,
            Z_STREAM_ERROR: s.Z_STREAM_ERROR,
            Z_DATA_ERROR: s.Z_DATA_ERROR,
            Z_MEM_ERROR: s.Z_MEM_ERROR,
            Z_BUF_ERROR: s.Z_BUF_ERROR,
            Z_VERSION_ERROR: s.Z_VERSION_ERROR
          },
          v = Object.keys(p),
          m = 0;
        m < v.length;
        m++
      ) {
        var g = v[m]
        p[p[g]] = g
      }
      function w(t, e, r) {
        var n = [],
          o = 0
        function s() {
          for (var e; null !== (e = t.read()); ) n.push(e), (o += e.length)
          t.once('readable', s)
        }
        function a() {
          var e,
            s = null
          o >= f ? (s = new RangeError(h)) : (e = i.concat(n, o)),
            (n = []),
            t.close(),
            r(s, e)
        }
        t.on('error', function(e) {
          t.removeListener('end', a), t.removeListener('readable', s), r(e)
        }),
          t.on('end', a),
          t.end(e),
          s()
      }
      function y(t, e) {
        if (('string' === typeof e && (e = i.from(e)), !i.isBuffer(e)))
          throw new TypeError('Not a string or buffer')
        var r = t._finishFlushFlag
        return t._processChunk(e, r)
      }
      function b(t) {
        if (!(this instanceof b)) return new b(t)
        S.call(this, t, s.DEFLATE)
      }
      function _(t) {
        if (!(this instanceof _)) return new _(t)
        S.call(this, t, s.INFLATE)
      }
      function x(t) {
        if (!(this instanceof x)) return new x(t)
        S.call(this, t, s.GZIP)
      }
      function E(t) {
        if (!(this instanceof E)) return new E(t)
        S.call(this, t, s.GUNZIP)
      }
      function k(t) {
        if (!(this instanceof k)) return new k(t)
        S.call(this, t, s.DEFLATERAW)
      }
      function B(t) {
        if (!(this instanceof B)) return new B(t)
        S.call(this, t, s.INFLATERAW)
      }
      function A(t) {
        if (!(this instanceof A)) return new A(t)
        S.call(this, t, s.UNZIP)
      }
      function M(t) {
        return (
          t === s.Z_NO_FLUSH ||
          t === s.Z_PARTIAL_FLUSH ||
          t === s.Z_SYNC_FLUSH ||
          t === s.Z_FULL_FLUSH ||
          t === s.Z_FINISH ||
          t === s.Z_BLOCK
        )
      }
      function S(t, r) {
        var n = this
        if (
          ((this._opts = t = t || {}),
          (this._chunkSize = t.chunkSize || e.Z_DEFAULT_CHUNK),
          o.call(this, t),
          t.flush && !M(t.flush))
        )
          throw new Error('Invalid flush flag: ' + t.flush)
        if (t.finishFlush && !M(t.finishFlush))
          throw new Error('Invalid flush flag: ' + t.finishFlush)
        if (
          ((this._flushFlag = t.flush || s.Z_NO_FLUSH),
          (this._finishFlushFlag =
            'undefined' !== typeof t.finishFlush ? t.finishFlush : s.Z_FINISH),
          t.chunkSize &&
            (t.chunkSize < e.Z_MIN_CHUNK || t.chunkSize > e.Z_MAX_CHUNK))
        )
          throw new Error('Invalid chunk size: ' + t.chunkSize)
        if (
          t.windowBits &&
          (t.windowBits < e.Z_MIN_WINDOWBITS ||
            t.windowBits > e.Z_MAX_WINDOWBITS)
        )
          throw new Error('Invalid windowBits: ' + t.windowBits)
        if (t.level && (t.level < e.Z_MIN_LEVEL || t.level > e.Z_MAX_LEVEL))
          throw new Error('Invalid compression level: ' + t.level)
        if (
          t.memLevel &&
          (t.memLevel < e.Z_MIN_MEMLEVEL || t.memLevel > e.Z_MAX_MEMLEVEL)
        )
          throw new Error('Invalid memLevel: ' + t.memLevel)
        if (
          t.strategy &&
          t.strategy != e.Z_FILTERED &&
          t.strategy != e.Z_HUFFMAN_ONLY &&
          t.strategy != e.Z_RLE &&
          t.strategy != e.Z_FIXED &&
          t.strategy != e.Z_DEFAULT_STRATEGY
        )
          throw new Error('Invalid strategy: ' + t.strategy)
        if (t.dictionary && !i.isBuffer(t.dictionary))
          throw new Error('Invalid dictionary: it should be a Buffer instance')
        this._handle = new s.Zlib(r)
        var a = this
        ;(this._hadError = !1),
          (this._handle.onerror = function(t, r) {
            T(a), (a._hadError = !0)
            var n = new Error(t)
            ;(n.errno = r), (n.code = e.codes[r]), a.emit('error', n)
          })
        var u = e.Z_DEFAULT_COMPRESSION
        'number' === typeof t.level && (u = t.level)
        var f = e.Z_DEFAULT_STRATEGY
        'number' === typeof t.strategy && (f = t.strategy),
          this._handle.init(
            t.windowBits || e.Z_DEFAULT_WINDOWBITS,
            u,
            t.memLevel || e.Z_DEFAULT_MEMLEVEL,
            f,
            t.dictionary
          ),
          (this._buffer = i.allocUnsafe(this._chunkSize)),
          (this._offset = 0),
          (this._level = u),
          (this._strategy = f),
          this.once('end', this.close),
          Object.defineProperty(this, '_closed', {
            get: function() {
              return !n._handle
            },
            configurable: !0,
            enumerable: !0
          })
      }
      function T(t, e) {
        e && n.nextTick(e), t._handle && (t._handle.close(), (t._handle = null))
      }
      function I(t) {
        t.emit('close')
      }
      Object.defineProperty(e, 'codes', {
        enumerable: !0,
        value: Object.freeze(p),
        writable: !1
      }),
        (e.Deflate = b),
        (e.Inflate = _),
        (e.Gzip = x),
        (e.Gunzip = E),
        (e.DeflateRaw = k),
        (e.InflateRaw = B),
        (e.Unzip = A),
        (e.createDeflate = function(t) {
          return new b(t)
        }),
        (e.createInflate = function(t) {
          return new _(t)
        }),
        (e.createDeflateRaw = function(t) {
          return new k(t)
        }),
        (e.createInflateRaw = function(t) {
          return new B(t)
        }),
        (e.createGzip = function(t) {
          return new x(t)
        }),
        (e.createGunzip = function(t) {
          return new E(t)
        }),
        (e.createUnzip = function(t) {
          return new A(t)
        }),
        (e.deflate = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new b(e), t, r)
          )
        }),
        (e.deflateSync = function(t, e) {
          return y(new b(e), t)
        }),
        (e.gzip = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new x(e), t, r)
          )
        }),
        (e.gzipSync = function(t, e) {
          return y(new x(e), t)
        }),
        (e.deflateRaw = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new k(e), t, r)
          )
        }),
        (e.deflateRawSync = function(t, e) {
          return y(new k(e), t)
        }),
        (e.unzip = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new A(e), t, r)
          )
        }),
        (e.unzipSync = function(t, e) {
          return y(new A(e), t)
        }),
        (e.inflate = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new _(e), t, r)
          )
        }),
        (e.inflateSync = function(t, e) {
          return y(new _(e), t)
        }),
        (e.gunzip = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new E(e), t, r)
          )
        }),
        (e.gunzipSync = function(t, e) {
          return y(new E(e), t)
        }),
        (e.inflateRaw = function(t, e, r) {
          return (
            'function' === typeof e && ((r = e), (e = {})), w(new B(e), t, r)
          )
        }),
        (e.inflateRawSync = function(t, e) {
          return y(new B(e), t)
        }),
        a.inherits(S, o),
        (S.prototype.params = function(t, r, i) {
          if (t < e.Z_MIN_LEVEL || t > e.Z_MAX_LEVEL)
            throw new RangeError('Invalid compression level: ' + t)
          if (
            r != e.Z_FILTERED &&
            r != e.Z_HUFFMAN_ONLY &&
            r != e.Z_RLE &&
            r != e.Z_FIXED &&
            r != e.Z_DEFAULT_STRATEGY
          )
            throw new TypeError('Invalid strategy: ' + r)
          if (this._level !== t || this._strategy !== r) {
            var o = this
            this.flush(s.Z_SYNC_FLUSH, function() {
              u(o._handle, 'zlib binding closed'),
                o._handle.params(t, r),
                o._hadError || ((o._level = t), (o._strategy = r), i && i())
            })
          } else n.nextTick(i)
        }),
        (S.prototype.reset = function() {
          return u(this._handle, 'zlib binding closed'), this._handle.reset()
        }),
        (S.prototype._flush = function(t) {
          this._transform(i.alloc(0), '', t)
        }),
        (S.prototype.flush = function(t, e) {
          var r = this,
            o = this._writableState
          ;('function' === typeof t || (void 0 === t && !e)) &&
            ((e = t), (t = s.Z_FULL_FLUSH)),
            o.ended
              ? e && n.nextTick(e)
              : o.ending
              ? e && this.once('end', e)
              : o.needDrain
              ? e &&
                this.once('drain', function() {
                  return r.flush(t, e)
                })
              : ((this._flushFlag = t), this.write(i.alloc(0), '', e))
        }),
        (S.prototype.close = function(t) {
          T(this, t), n.nextTick(I, this)
        }),
        (S.prototype._transform = function(t, e, r) {
          var n,
            o = this._writableState,
            a = (o.ending || o.ended) && (!t || o.length === t.length)
          return null === t || i.isBuffer(t)
            ? this._handle
              ? (a
                  ? (n = this._finishFlushFlag)
                  : ((n = this._flushFlag),
                    t.length >= o.length &&
                      (this._flushFlag = this._opts.flush || s.Z_NO_FLUSH)),
                void this._processChunk(t, n, r))
              : r(new Error('zlib binding closed'))
            : r(new Error('invalid input'))
        }),
        (S.prototype._processChunk = function(t, e, r) {
          var n = t && t.length,
            o = this._chunkSize - this._offset,
            s = 0,
            a = this,
            l = 'function' === typeof r
          if (!l) {
            var c,
              d = [],
              p = 0
            this.on('error', function(t) {
              c = t
            }),
              u(this._handle, 'zlib binding closed')
            do {
              var v = this._handle.writeSync(
                e,
                t,
                s,
                n,
                this._buffer,
                this._offset,
                o
              )
            } while (!this._hadError && w(v[0], v[1]))
            if (this._hadError) throw c
            if (p >= f) throw (T(this), new RangeError(h))
            var m = i.concat(d, p)
            return T(this), m
          }
          u(this._handle, 'zlib binding closed')
          var g = this._handle.write(e, t, s, n, this._buffer, this._offset, o)
          function w(f, h) {
            if (
              (this && ((this.buffer = null), (this.callback = null)),
              !a._hadError)
            ) {
              var c = o - h
              if ((u(c >= 0, 'have should not go down'), c > 0)) {
                var v = a._buffer.slice(a._offset, a._offset + c)
                ;(a._offset += c), l ? a.push(v) : (d.push(v), (p += v.length))
              }
              if (
                ((0 === h || a._offset >= a._chunkSize) &&
                  ((o = a._chunkSize),
                  (a._offset = 0),
                  (a._buffer = i.allocUnsafe(a._chunkSize))),
                0 === h)
              ) {
                if (((s += n - f), (n = f), !l)) return !0
                var m = a._handle.write(
                  e,
                  t,
                  s,
                  n,
                  a._buffer,
                  a._offset,
                  a._chunkSize
                )
                return (m.callback = w), void (m.buffer = t)
              }
              if (!l) return !1
              r()
            }
          }
          ;(g.buffer = t), (g.callback = w)
        }),
        a.inherits(b, S),
        a.inherits(_, S),
        a.inherits(x, S),
        a.inherits(E, S),
        a.inherits(k, S),
        a.inherits(B, S),
        a.inherits(A, S)
    },
    82881: function(t) {
      function e(t) {
        function r(t) {
          if (Object(t) !== t)
            return Promise.reject(new TypeError(t + ' is not an object.'))
          var e = t.done
          return Promise.resolve(t.value).then(function(t) {
            return { value: t, done: e }
          })
        }
        return (
          (e = function(t) {
            ;(this.s = t), (this.n = t.next)
          }),
          (e.prototype = {
            s: null,
            n: null,
            next: function() {
              return r(this.n.apply(this.s, arguments))
            },
            return: function(t) {
              var e = this.s.return
              return void 0 === e
                ? Promise.resolve({ value: t, done: !0 })
                : r(e.apply(this.s, arguments))
            },
            throw: function(t) {
              var e = this.s.return
              return void 0 === e
                ? Promise.reject(t)
                : r(e.apply(this.s, arguments))
            }
          }),
          new e(t)
        )
      }
      ;(t.exports = function(t) {
        var r,
          n,
          i,
          o = 2
        for (
          'undefined' != typeof Symbol &&
          ((n = Symbol.asyncIterator), (i = Symbol.iterator));
          o--;

        ) {
          if (n && null != (r = t[n])) return r.call(t)
          if (i && null != (r = t[i])) return new e(r.call(t))
          ;(n = '@@asyncIterator'), (i = '@@iterator')
        }
        throw new TypeError('Object is not async iterable')
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports)
    }
  }
])
//# sourceMappingURL=961.660a508c-d5973.chunk.js.map
