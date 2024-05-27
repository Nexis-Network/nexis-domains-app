'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [352],
  {
    43226: function(e, n, t) {
      t.d(n, {
        A: function() {
          return E
        }
      })
      var i = t(80296),
        a = t(57528),
        r = t(70030),
        o = (t(65043), t(31881)),
        c = t(57985),
        s = t(45458),
        d = t(96893),
        u = (t(95688), t(39024), t(16331), t(14729), t(8129), t(70579)),
        l = (0, r.A)('svg', { target: 'ega1tsj0' })(
          'vertical-align:middle;path{fill:',
          function(e) {
            return e.active ? '#C7D3E3' : 'none'
          },
          ';stroke:',
          function(e) {
            return e.active ? '#C7D3E3' : 'E7E7E7'
          },
          ';transition:0.2s ease-in;}&:hover{path{fill:#c7d3e3;stroke:#c7d3e3;}}'
        ),
        v = function(e) {
          var n = e.active,
            t = e.className
          return (0, u.jsx)(l, {
            width: '25',
            height: '24',
            className: t,
            active: n,
            children: (0, u.jsx)('path', {
              d:
                'M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z',
              stroke: '#E7E7E7',
              strokeWidth: '2',
              fill: 'none',
              fillRule: 'evenodd'
            })
          })
        }
      var f,
        m,
        p,
        h,
        x = (0, r.A)('svg', { target: 'eyzzej0' })({
          name: '1gb2iyt',
          styles:
            'vertical-align:middle;path{fill:#c7d3e3;stroke:#c7d3e3;transition:0.2s ease-out;}&:hover{path{fill:none;stroke:#e7e7e7;}}'
        }),
        g = function(e) {
          var n = e.active,
            t = e.className
          return (0, u.jsx)(x, {
            width: '25',
            height: '24',
            active: n,
            className: t,
            children: (0, u.jsx)('path', {
              d:
                'M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z',
              stroke: '#E7E7E7',
              strokeWidth: '2',
              fill: 'none',
              fillRule: 'evenodd'
            })
          })
        }
      var w = (0, r.A)(g, { target: 'epvce7y0' })({
          name: '1p3qk0r',
          styles: '&:hover{cursor:pointer;}'
        }),
        y = (0, r.A)(v, { target: 'epvce7y1' })({
          name: '1p3qk0r',
          styles: '&:hover{cursor:pointer;}'
        }),
        A = (0, c.J1)(
          f ||
            (f = (0, a.A)([
              '\n  mutation AddFavouriteMutation($domain: Domain) {\n    addFavourite(domain: $domain) @client\n  }\n'
            ]))
        ),
        j = (0, c.J1)(
          m ||
            (m = (0, a.A)([
              '\n  mutation AddSubDomainFavourite($domain: Domain) {\n    addSubDomainFavourite(domain: $domain) @client\n  }\n'
            ]))
        ),
        b = (0, c.J1)(
          p ||
            (p = (0, a.A)([
              '\n  mutation DeleteFavouriteMutation($domain: Domain) {\n    deleteFavourite(domain: $domain) @client\n  }\n'
            ]))
        ),
        D = (0, c.J1)(
          h ||
            (h = (0, a.A)([
              '\n  mutation DeleteSubDomainFavourite($domain: Domain) {\n    deleteSubDomainFavourite(domain: $domain) @client\n  }\n'
            ]))
        ),
        k = (0, r.A)('div', { target: 'epvce7y2' })({
          name: '1g360fb',
          styles: 'padding:5px;'
        }),
        E = function(e) {
          var n = e.domain,
            t = e.isFavourite,
            a = e.isSubDomain,
            r = (0, o.n)(t ? D : j, {
              variables: { domain: { name: n.name } }
            }),
            c = (0, i.A)(r, 1)[0],
            l = (0, o.n)(t ? b : A, {
              variables: { domain: { name: n.name } }
            }),
            v = (0, i.A)(l, 1)[0]
          return a
            ? (0, u.jsx)(k, {
                'data-testid': 'add-favorite',
                onClick: function(e) {
                  e.preventDefault(),
                    t
                      ? (function(e) {
                          var n = (0, d.Ii)().filter(function(n) {
                            return n.name !== e.name
                          })
                          window.localStorage.setItem(
                            'ensSubDomainFavourites',
                            JSON.stringify(n)
                          )
                        })(n)
                      : (function(e) {
                          var n = [].concat((0, s.A)((0, d.Ii)()), [e])
                          window.localStorage.setItem(
                            'ensSubDomainFavourites',
                            JSON.stringify(n)
                          ),
                            (0, d.Ii)(n)
                        })(n),
                    c()
                },
                children: t ? (0, u.jsx)(w, {}) : (0, u.jsx)(y, {})
              })
            : (0, u.jsx)(k, {
                'data-testid': 'add-favorite',
                onClick: function(e) {
                  e.preventDefault(),
                    t
                      ? (function(e) {
                          var n = (0, d.Ei)().filter(function(n) {
                            return n.name !== e.name
                          })
                          window.localStorage.setItem(
                            'ensFavourites',
                            JSON.stringify(n)
                          ),
                            (0, d.Ei)(n)
                        })(n)
                      : (function(e) {
                          var n = [].concat((0, s.A)((0, d.Ei)()), [e])
                          window.localStorage.setItem(
                            'ensFavourites',
                            JSON.stringify(n)
                          ),
                            (0, d.Ei)(n)
                        })(n),
                    v()
                },
                children: t ? (0, u.jsx)(w, {}) : (0, u.jsx)(y, {})
              })
        }
    },
    33982: function(e, n, t) {
      var i = t(70030),
        a = (t(65043), t(74725)),
        r = t(71087),
        o = t(70579),
        c = (0, i.A)('p', { target: 'erk1q1g0' })(
          'font-size:18px;font-weight:100;color:',
          function(e) {
            return e.isExpiredSoon ? 'red' : '#adbbcd'
          },
          ';'
        )
      n.A = function(e) {
        var n,
          t,
          i,
          s,
          d,
          u,
          l,
          v = e.expiryDate,
          f = (e.domain, e.name),
          m = (0, a.B)().t,
          p = new Date()
        return v
          ? ((n = (0, r.fo)(v)),
            (t = p > new Date(parseInt(1e3 * v))),
            (i = new Date(1e3 * (parseInt(v) + r.vp))),
            (u = new Date(1e3 * (parseInt(v) + r.vp + r.cY))),
            t
              ? ((s = !(d = p < i) && p < u),
                d
                  ? (l = ''
                      .concat(m('singleName.expiry.gracePeriodEnds'), ' ')
                      .concat((0, r.Yq)(i)))
                  : s && (l = m('singleName.expiry.isUnderPremiumSale')))
              : (l = ''
                  .concat(m('c.expires'), ' ')
                  .concat((0, r.Yq)(parseInt(1e3 * v)))),
            (0, o.jsx)(c, {
              'data-testid': 'expiry-date-'.concat(f),
              isExpiredSoon: n,
              children: l
            }))
          : (0, o.jsx)('span', { children: '\xa0' })
      }
    },
    38945: function(e, n, t) {
      t.d(n, {
        A: function() {
          return m
        }
      })
      var i = t(80296),
        a = t(70030),
        r = t(65043),
        o = t(70579),
        c = function(e) {
          return e.active ? '#5284FF' : '#B0BECF'
        },
        s = (0, a.A)('div', { target: 'e1qon68v0' })(
          'display:flex;justify-content:center;align-items:center;height:23px;width:23px;border-radius:5px;border:2px solid ',
          c,
          ';'
        ),
        d = (0, a.A)('div', { target: 'e1qon68v1' })(
          'display:flex;justify-content:center;align-items:center;height:20px;width:20px;border-radius:3px;box-shadow:0 0 0 2px ',
          c,
          ',-5px -5px 0 0 white,-5px -5px 0 2px ',
          c,
          ';'
        ),
        u = (0, a.A)('svg', { target: 'e1qon68v2' })(
          'margin-top:2px;path{fill:',
          c,
          ';opacity:',
          function(e) {
            return e.active || e.hover ? '1' : '0'
          },
          ';}'
        ),
        l = function(e) {
          var n = e.active,
            t = e.className,
            i = e.hover
          return (0, o.jsx)(s, {
            className: t,
            active: n,
            children: (0, o.jsx)(u, {
              width: '11',
              height: '8',
              xmlns: 'http://www.w3.org/2000/svg',
              active: n,
              hover: i,
              children: (0, o.jsx)('path', {
                d: 'M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z',
                fillRule: 'evenodd'
              })
            })
          })
        },
        v = function(e) {
          var n = e.active,
            t = e.className,
            i = e.hover
          return (0, o.jsx)(d, {
            className: t,
            active: n,
            children: (0, o.jsx)(u, {
              width: '11',
              height: '8',
              xmlns: 'http://www.w3.org/2000/svg',
              active: n,
              hover: i,
              children: (0, o.jsx)('path', {
                d: 'M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z',
                fillRule: 'evenodd'
              })
            })
          })
        }
      var f = (0, a.A)('div', { target: 'ejg6m870' })({
        name: '1kdw2nx',
        styles:
          'align-self:center;input{display:none;}label{font-size:22px;font-weight:200;color:#5f5f5f;text-transform:capitalize;display:flex;justify-content:flex-start;align-items:center;&:hover{cursor:pointer;}}'
      })
      var m = function(e) {
        var n = e.className,
          t = e.onClick,
          a = e.checked,
          c = e.name,
          s = e.children,
          d = e.testid,
          u = e.type,
          m = void 0 === u ? 'normal' : u,
          p = (0, r.useState)(!1),
          h = (0, i.A)(p, 2),
          x = h[0],
          g = h[1]
        return (0, o.jsxs)(f, {
          'data-testid': d,
          className: n,
          onClick: t,
          children: [
            (0, o.jsxs)('label', {
              htmlFor: c,
              onMouseOver: function() {
                return g(!0)
              },
              onMouseOut: function() {
                return g(!1)
              },
              children: [
                'double' === m
                  ? (0, o.jsx)(v, { active: !!a, hover: x })
                  : (0, o.jsx)(l, { active: !!a, hover: x }),
                (0, o.jsx)('span', { children: s })
              ]
            }),
            (0, o.jsx)('input', {
              type: 'checkbox',
              name: c,
              checked: a,
              readOnly: !0
            })
          ]
        })
      }
    },
    61766: function(e, n, t) {
      t.d(n, {
        F: function() {
          return c
        }
      })
      var i,
        a = t(57528),
        r = t(88250),
        o = (0, t(57985).J1)(
          i ||
            (i = (0, a.A)([
              '\n  query getAccounts @client {\n    accounts\n  }\n'
            ]))
        )
      function c() {
        var e = (0, r.I)(o).data.accounts
        return e ? e[0] : '0x0000000000000000000000000000000000000000'
      }
    },
    75969: function(e, n, t) {
      t.d(n, {
        H2: function() {
          return s
        },
        HR: function() {
          return u
        },
        h: function() {
          return d
        }
      })
      var i,
        a,
        r = t(57528),
        o = t(70030),
        c = t(2038)
      var s = (0, o.A)('h2', { target: 'e5hqhaa0' })(
          'font-size:18px;font-weight:200;color:#adbbcd;',
          c.Ay.medium(i || (i = (0, r.A)(['\n    font-size: 22px;\n  ']))),
          ''
        ),
        d = (0, o.A)('h2', { target: 'e5hqhaa1' })(
          'font-size:18px;font-weight:100;padding:0;margin:0;',
          c.Ay.medium(a || (a = (0, r.A)(['\n    font-size: 28px;\n  ']))),
          ''
        ),
        u = (0, o.A)('hr', { target: 'e5hqhaa2' })({
          name: 's0gyhi',
          styles:
            'border:0;border-top:1px dashed #d3d3d3;background-color:#fff;margin-bottom:30px;margin-top:0;'
        })
    },
    71087: function(e, n, t) {
      t.d(n, {
        P0: function() {
          return u
        },
        Yq: function() {
          return c
        },
        cY: function() {
          return o
        },
        fo: function() {
          return s
        },
        iy: function() {
          return d
        },
        vp: function() {
          return r
        }
      })
      var i = t(86178),
        a = t.n(i),
        r = 7776e3,
        o = 2419200
      function c(e, n) {
        var t = a()(e).format('YYYY.MM.DD')
        return n || (t = t + ' at ' + a()(e).format('HH:mm (UTCZ)')), t
      }
      function s(e) {
        if (!e) return e
        var n = new Date().getTime()
        return (new Date(1e3 * e).getTime() - n) / 864e5 < 30
      }
      var d = 31556952
      function u(e) {
        return parseInt(parseFloat(e) * d)
      }
    }
  }
])
//# sourceMappingURL=352.2315e630-d5973.chunk.js.map
