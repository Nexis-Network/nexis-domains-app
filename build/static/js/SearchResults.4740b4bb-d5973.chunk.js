;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [331],
  {
    39050: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function() {
            return E
          }
        })
      var r,
        a = n(90675),
        i = n(10467),
        o = n(80296),
        c = n(57528),
        s = n(65043),
        l = n(88250),
        u = n(57985),
        p = n(76499),
        f = n(47246),
        d = n(75969),
        m = n(58670),
        h = n(96552),
        v = n(70579),
        y = function(e) {
          var t = e.singleName,
            n = e.searchTerm,
            r = (0, l.I)(h.a0, { name: n }),
            a = r.data.favourites,
            i = r.loading
          return (0, v.jsx)(m.A, {
            loading: i,
            domain: t,
            isFavourite:
              t &&
              a &&
              a.filter(function(e) {
                return e.name === t.name
              }).length > 0
          })
        },
        g = function(e) {
          var t = e.searchTerm,
            n = (0, l.I)(h.ij, { variables: { name: t } }),
            r = n.data,
            a = n.loading,
            i = n.error
          if (a || !r) return null
          if (i) return console.error(i), null
          var o = r.singleName
          return (0, v.jsx)(y, { singleName: o, searchTerm: t })
        },
        b = n(77113),
        O = n(91347),
        j = n(66947),
        x = (n(55363),
        (0, u.J1)(
          r ||
            (r = (0, c.A)([
              '\n  query getResultsContainer {\n    isENSReady @client\n  }\n'
            ]))
        )),
        E = function(e) {
          e.searchDomain
          var t = e.match,
            n = (0, l.I)(x).data.isENSReady,
            r = t.params.searchTerm,
            c = (0, j.W6)(),
            u = r.toLowerCase()
          c && u !== r && c.push('/search/'.concat(u))
          var m = (function(e, t) {
              var n = (0, s.useState)([]),
                r = (0, o.A)(n, 2),
                c = r[0],
                l = r[1],
                u = (0, s.useState)(null),
                f = (0, o.A)(u, 2),
                d = f[0],
                m = f[1]
              return (
                (0, s.useEffect)(
                  function() {
                    var n = (function() {
                      var t = (0, i.A)(
                        (0, a.A)().mark(function t() {
                          var n, r, i
                          return (0, a.A)().wrap(function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    l([]),
                                    (r =
                                      1 === e.split('.').length
                                        ? e + '.nzt'
                                        : e),
                                    (t.next = 4),
                                    (0, b.uZ)(r)
                                  )
                                case 4:
                                  ;(i = t.sent),
                                    [
                                      'unsupported',
                                      'invalid',
                                      'short'
                                    ].includes(i) || ((n = (0, b.yS)(r)), m(n)),
                                    (document.title = 'ENS Search: '.concat(r)),
                                    'unsupported' === i
                                      ? l(['unsupported'])
                                      : 'short' === i
                                      ? l(['tooShort'])
                                      : ('invalid' !== i && (0, p.t)(r)) ||
                                        l(['domainMalformed'])
                                case 8:
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
                    t && n()
                  },
                  [e, t]
                ),
                { errors: c, parsed: d }
              )
            })(r, n),
            h = m.errors,
            y = m.parsed
          return n
            ? 'tooShort' === h[0]
              ? (0, v.jsx)(v.Fragment, {
                  children: (0, v.jsx)(O.A, { errors: h, searchTerm: r })
                })
              : h.length > 0
              ? (0, v.jsx)(O.A, { errors: h, searchTerm: r })
              : y
              ? (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(d.H2, {
                      children: (0, v.jsx)(f.x, {
                        i18nKey: 'singleName.search.title',
                        children: 'Names'
                      })
                    }),
                    (0, v.jsx)(g, { searchTerm: y })
                  ]
                })
              : ''
            : (0, v.jsx)('div', { children: 'Loading' })
        }
    },
    47246: function(e, t, n) {
      'use strict'
      n.d(t, {
        x: function() {
          return P
        }
      })
      var r = n(80045),
        a = n(82284),
        i = n(64467),
        o = n(65043),
        c = n(11844),
        s = n.n(c),
        l = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
      function u(e) {
        var t = {
            type: 'tag',
            name: '',
            voidElement: !1,
            attrs: {},
            children: []
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/)
        if (
          n &&
          ((t.name = n[1]),
          (s()[n[1]] || '/' === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith('!--'))
        ) {
          var r = e.indexOf('--\x3e')
          return { type: 'comment', comment: -1 !== r ? e.slice(4, r) : '' }
        }
        for (var a = new RegExp(l), i = null; null !== (i = a.exec(e)); )
          if (i[0].trim())
            if (i[1]) {
              var o = i[1].trim(),
                c = [o, '']
              o.indexOf('=') > -1 && (c = o.split('=')),
                (t.attrs[c[0]] = c[1]),
                a.lastIndex--
            } else
              i[2] &&
                (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1))
        return t
      }
      var p = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        f = /^\s*$/,
        d = Object.create(null)
      function m(e, t) {
        switch (t.type) {
          case 'text':
            return e + t.content
          case 'tag':
            return (
              (e +=
                '<' +
                t.name +
                (t.attrs
                  ? (function(e) {
                      var t = []
                      for (var n in e) t.push(n + '="' + e[n] + '"')
                      return t.length ? ' ' + t.join(' ') : ''
                    })(t.attrs)
                  : '') +
                (t.voidElement ? '/>' : '>')),
              t.voidElement
                ? e
                : e + t.children.reduce(m, '') + '</' + t.name + '>'
            )
          case 'comment':
            return e + '\x3c!--' + t.comment + '--\x3e'
        }
      }
      var h = {
          parse: function(e, t) {
            t || (t = {}), t.components || (t.components = d)
            var n,
              r = [],
              a = [],
              i = -1,
              o = !1
            if (0 !== e.indexOf('<')) {
              var c = e.indexOf('<')
              r.push({
                type: 'text',
                content: -1 === c ? e : e.substring(0, c)
              })
            }
            return (
              e.replace(p, function(c, s) {
                if (o) {
                  if (c !== '</' + n.name + '>') return
                  o = !1
                }
                var l,
                  p = '/' !== c.charAt(1),
                  d = c.startsWith('\x3c!--'),
                  m = s + c.length,
                  h = e.charAt(m)
                if (d) {
                  var v = u(c)
                  return i < 0
                    ? (r.push(v), r)
                    : ((l = a[i]).children.push(v), r)
                }
                if (
                  (p &&
                    (i++,
                    'tag' === (n = u(c)).type &&
                      t.components[n.name] &&
                      ((n.type = 'component'), (o = !0)),
                    n.voidElement ||
                      o ||
                      !h ||
                      '<' === h ||
                      n.children.push({
                        type: 'text',
                        content: e.slice(m, e.indexOf('<', m))
                      }),
                    0 === i && r.push(n),
                    (l = a[i - 1]) && l.children.push(n),
                    (a[i] = n)),
                  (!p || n.voidElement) &&
                    (i > -1 &&
                      (n.voidElement || n.name === c.slice(2, -1)) &&
                      (i--, (n = -1 === i ? r : a[i])),
                    !o && '<' !== h && h))
                ) {
                  l = -1 === i ? r : a[i].children
                  var y = e.indexOf('<', m),
                    g = e.slice(m, -1 === y ? void 0 : y)
                  f.test(g) && (g = ' '),
                    ((y > -1 && i + l.length >= 0) || ' ' !== g) &&
                      l.push({ type: 'text', content: g })
                }
              }),
              r
            )
          },
          stringify: function(e) {
            return e.reduce(function(e, t) {
              return e + m('', t)
            }, '')
          }
        },
        v = h,
        y = n(75),
        g = n(7534),
        b = ['format'],
        O = [
          'children',
          'count',
          'parent',
          'i18nKey',
          'context',
          'tOptions',
          'values',
          'defaults',
          'components',
          'ns',
          'i18n',
          't',
          'shouldUnescape'
        ]
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function(t) {
                ;(0, i.A)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function E(e, t) {
        if (!e) return !1
        var n = e.props ? e.props.children : e.children
        return t ? n.length > 0 : !!n
      }
      function w(e) {
        return e ? (e.props ? e.props.children : e.children) : []
      }
      function A(e) {
        return Array.isArray(e) ? e : [e]
      }
      function k(e, t) {
        if (!e) return ''
        var n = '',
          i = A(e),
          c =
            t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor
              ? t.transKeepBasicHtmlNodesFor
              : []
        return (
          i.forEach(function(e, i) {
            if ('string' === typeof e) n += ''.concat(e)
            else if ((0, o.isValidElement)(e)) {
              var s = Object.keys(e.props).length,
                l = c.indexOf(e.type) > -1,
                u = e.props.children
              if (!u && l && 0 === s) n += '<'.concat(e.type, '/>')
              else if (u || (l && 0 === s))
                if (e.props.i18nIsDynamicList)
                  n += '<'.concat(i, '></').concat(i, '>')
                else if (l && 1 === s && 'string' === typeof u)
                  n += '<'
                    .concat(e.type, '>')
                    .concat(u, '</')
                    .concat(e.type, '>')
                else {
                  var p = k(u, t)
                  n += '<'
                    .concat(i, '>')
                    .concat(p, '</')
                    .concat(i, '>')
                }
              else n += '<'.concat(i, '></').concat(i, '>')
            } else if (null === e)
              (0, g.R8)(
                'Trans: the passed in value is invalid - seems you passed in a null child.'
              )
            else if ('object' === (0, a.A)(e)) {
              var f = e.format,
                d = (0, r.A)(e, b),
                m = Object.keys(d)
              if (1 === m.length) {
                var h = f ? ''.concat(m[0], ', ').concat(f) : m[0]
                n += '{{'.concat(h, '}}')
              } else
                (0, g.R8)(
                  'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
                  e
                )
            } else
              (0, g.R8)(
                'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
                e
              )
          }),
          n
        )
      }
      function N(e, t, n, r, i, c) {
        if ('' === t) return []
        var s = r.transKeepBasicHtmlNodesFor || [],
          l = t && new RegExp(s.join('|')).test(t)
        if (!e && !l) return [t]
        var u = {}
        !(function e(t) {
          A(t).forEach(function(t) {
            'string' !== typeof t &&
              (E(t)
                ? e(w(t))
                : 'object' !== (0, a.A)(t) ||
                  (0, o.isValidElement)(t) ||
                  Object.assign(u, t))
          })
        })(e)
        var p = v.parse('<0>'.concat(t, '</0>')),
          f = x(x({}, u), i)
        function d(e, t, n) {
          var r = w(e),
            a = h(r, t.children, n)
          return (function(e) {
            return (
              '[object Array]' === Object.prototype.toString.call(e) &&
              e.every(function(e) {
                return (0, o.isValidElement)(e)
              })
            )
          })(r) && 0 === a.length
            ? r
            : a
        }
        function m(e, t, n, r, a) {
          e.dummy && (e.children = t),
            n.push(
              (0, o.cloneElement)(
                e,
                x(x({}, e.props), {}, { key: r }),
                a ? void 0 : t
              )
            )
        }
        function h(t, i, u) {
          var p = A(t)
          return A(i).reduce(function(t, i, v) {
            var y =
              i.children &&
              i.children[0] &&
              i.children[0].content &&
              n.services.interpolator.interpolate(
                i.children[0].content,
                f,
                n.language
              )
            if ('tag' === i.type) {
              var g = p[parseInt(i.name, 10)]
              !g && 1 === u.length && u[0][i.name] && (g = u[0][i.name]),
                g || (g = {})
              var b =
                  0 !== Object.keys(i.attrs).length
                    ? (function(e, t) {
                        var n = x({}, t)
                        return (n.props = Object.assign(e.props, t.props)), n
                      })({ props: i.attrs }, g)
                    : g,
                O = (0, o.isValidElement)(b),
                j = O && E(i, !0) && !i.voidElement,
                w = l && 'object' === (0, a.A)(b) && b.dummy && !O,
                A =
                  'object' === (0, a.A)(e) &&
                  null !== e &&
                  Object.hasOwnProperty.call(e, i.name)
              if ('string' === typeof b) {
                var k = n.services.interpolator.interpolate(b, f, n.language)
                t.push(k)
              } else if (E(b) || j) {
                m(b, d(b, i, u), t, v)
              } else if (w) {
                var N = h(p, i.children, u)
                t.push(
                  (0, o.cloneElement)(b, x(x({}, b.props), {}, { key: v }), N)
                )
              } else if (Number.isNaN(parseFloat(i.name))) {
                if (A) m(b, d(b, i, u), t, v, i.voidElement)
                else if (r.transSupportBasicHtmlNodes && s.indexOf(i.name) > -1)
                  if (i.voidElement)
                    t.push(
                      (0, o.createElement)(i.name, {
                        key: ''.concat(i.name, '-').concat(v)
                      })
                    )
                  else {
                    var P = h(p, i.children, u)
                    t.push(
                      (0, o.createElement)(
                        i.name,
                        { key: ''.concat(i.name, '-').concat(v) },
                        P
                      )
                    )
                  }
                else if (i.voidElement) t.push('<'.concat(i.name, ' />'))
                else {
                  var R = h(p, i.children, u)
                  t.push(
                    '<'
                      .concat(i.name, '>')
                      .concat(R, '</')
                      .concat(i.name, '>')
                  )
                }
              } else if ('object' !== (0, a.A)(b) || O)
                1 === i.children.length && y
                  ? t.push(
                      (0, o.cloneElement)(
                        b,
                        x(x({}, b.props), {}, { key: v }),
                        y
                      )
                    )
                  : t.push(
                      (0, o.cloneElement)(b, x(x({}, b.props), {}, { key: v }))
                    )
              else {
                var S = i.children[0] ? y : null
                S && t.push(S)
              }
            } else if ('text' === i.type) {
              var T = r.transWrapTextNodes,
                D = c
                  ? r.unescape(
                      n.services.interpolator.interpolate(
                        i.content,
                        f,
                        n.language
                      )
                    )
                  : n.services.interpolator.interpolate(
                      i.content,
                      f,
                      n.language
                    )
              T
                ? t.push(
                    (0, o.createElement)(
                      T,
                      { key: ''.concat(i.name, '-').concat(v) },
                      D
                    )
                  )
                : t.push(D)
            }
            return t
          }, [])
        }
        return w(h([{ dummy: !0, children: e || [] }], p, A(e || []))[0])
      }
      function P(e) {
        var t = e.children,
          n = e.count,
          a = e.parent,
          i = e.i18nKey,
          c = e.context,
          s = e.tOptions,
          l = void 0 === s ? {} : s,
          u = e.values,
          p = e.defaults,
          f = e.components,
          d = e.ns,
          m = e.i18n,
          h = e.t,
          v = e.shouldUnescape,
          b = (0, r.A)(e, O),
          j = (0, o.useContext)(y.gJ) || {},
          E = j.i18n,
          w = j.defaultNS,
          A = m || E || (0, y.TO)()
        if (!A)
          return (
            (0, g.mc)(
              'You will need to pass in an i18next instance by using i18nextReactModule'
            ),
            t
          )
        var P =
          h ||
          A.t.bind(A) ||
          function(e) {
            return e
          }
        c && (l.context = c)
        var R = x(x({}, (0, y.rV)()), A.options && A.options.react),
          S = d || P.ns || w || (A.options && A.options.defaultNS)
        S = 'string' === typeof S ? [S] : S || ['translation']
        var T = p || k(t, R) || R.transEmptyNodeValue || i,
          D = R.hashTransKey,
          C = i || (D ? D(T) : T),
          F = u
            ? l.interpolation
            : {
                interpolation: x(
                  x({}, l.interpolation),
                  {},
                  { prefix: '#$?', suffix: '?$#' }
                )
              },
          I = x(
            x(x(x({}, l), {}, { count: n }, u), F),
            {},
            { defaultValue: T, ns: S }
          ),
          K = N(f || t, C ? P(C, I) : T, A, R, I, v),
          V = void 0 !== a ? a : R.defaultTransParent
        return V ? (0, o.createElement)(V, b, K) : K
      }
    },
    65288: function(e, t, n) {
      'use strict'
      n.d(t, {
        C: function() {
          return f
        }
      })
      var r = n(64467),
        a = n(80296),
        i = n(80045),
        o = n(65043),
        c = n(74725),
        s = n(7534),
        l = ['forwardedRef']
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function(t) {
                ;(0, r.A)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function f(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return function(n) {
          function r(r) {
            var s = r.forwardedRef,
              u = (0, i.A)(r, l),
              f = (0, c.B)(e, p(p({}, u), {}, { keyPrefix: t.keyPrefix })),
              d = (0, a.A)(f, 3),
              m = d[0],
              h = d[1],
              v = d[2],
              y = p(p({}, u), {}, { t: m, i18n: h, tReady: v })
            return (
              t.withRef && s
                ? (y.ref = s)
                : !t.withRef && s && (y.forwardedRef = s),
              (0, o.createElement)(n, y)
            )
          }
          ;(r.displayName = 'withI18nextTranslation('.concat(
            (0, s.Mn)(n),
            ')'
          )),
            (r.WrappedComponent = n)
          return t.withRef
            ? (0, o.forwardRef)(function(e, t) {
                return (0,
                o.createElement)(r, Object.assign({}, e, { forwardedRef: t }))
              })
            : r
        }
      }
    },
    11844: function(e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    }
  }
])
//# sourceMappingURL=SearchResults.4740b4bb-d5973.chunk.js.map
