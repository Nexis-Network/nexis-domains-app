'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [347],
  {
    91347: function(r, e, t) {
      t.d(e, {
        A: function() {
          return z
        }
      })
      var o = t(23029),
        n = t(92901),
        s = t(39874),
        i = t(85501),
        c = t(70030),
        a = t(65043),
        u = t(75969),
        h = t(70579),
        p = (function(r) {
          function e() {
            return (0, o.A)(this, e), (0, s.A)(this, e, arguments)
          }
          return (
            (0, i.A)(e, r),
            (0, n.A)(e, [
              {
                key: 'render',
                value: function() {
                  return (0, h.jsx)(l, {
                    width: '19',
                    height: '17',
                    className: this.props.className,
                    children: (0, h.jsx)('path', {
                      d:
                        'M8.746 5.03c.47-.115.96.114 1.156.554.059.153.098.307.098.479-.02.478-.059.976-.098 1.454-.04.746-.098 1.512-.137 2.258-.02.249-.02.268-.02.517A.732.732 0 0 1 9 11c-.411 0-.725-.287-.744-.689-.06-1.167-.137-2.143-.196-3.31L8 6.062c-.019-.479.275-.9.746-1.034M9.01 14A1.01 1.01 0 0 1 8 13c0-.549.455-1 1.01-1 .554 0 1.01.451.99 1.02.02.529-.456.98-.99.98m-6.161 3h13.293c2.188 0 3.563-2.361 2.48-4.209L11.954 1.417c-1.083-1.89-3.834-1.89-4.917 0L.369 12.79C-.693 14.66.661 17 2.85 17',
                      fill: '#DC2E2E',
                      fillRule: 'evenodd'
                    })
                  })
                }
              }
            ])
          )
        })(a.Component),
        l = (0, c.A)('svg', { target: 'e1k54r6m0' })(''),
        d = p,
        f = t(89739),
        g = t(65288)
      var x = (0, c.A)(f.h, { target: 'e13izuop0' })({
          name: '1kfsg25',
          styles: 'path{fill:#2b2b2b;}'
        }),
        A = (function(r) {
          function e() {
            var r
            ;(0, o.A)(this, e)
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
              n[i] = arguments[i]
            return (
              ((r = (0, s.A)(this, e, [].concat(n))).state = { show: !1 }),
              (r.toggleError = function() {
                r.setState(function(r) {
                  return { show: !r.show }
                })
              }),
              r
            )
          }
          return (
            (0, i.A)(e, r),
            (0, n.A)(e, [
              {
                key: 'render',
                value: function() {
                  var r = this.props,
                    e = r.error,
                    t = r.searchTerm,
                    o = r.t,
                    n = {
                      domainMalformed: {
                        short: function(r) {
                          return o('searchErrors.domainMalformed.short', {
                            searchTerm: r
                          })
                        },
                        long: function(r) {
                          return o('searchErrors.domainMalformed.long')
                        }
                      },
                      unsupported: {
                        short: function(r) {
                          var e = r
                            .split('.')
                            .splice(-1, 1)[0]
                            .toUpperCase()
                          return o('searchErrors.unsupported.short', { tld: e })
                        },
                        long: function(r) {
                          return o('searchErrors.unsupported.long')
                        }
                      },
                      tooShort: {
                        short: function(r) {
                          return (0, h.jsxs)(a.Fragment, {
                            children: [
                              (0, h.jsx)('strong', {
                                children: o('searchErrors.tooShort.short1')
                              }),
                              o('searchErrors.tooShort.short2')
                            ]
                          })
                        },
                        long: function(r) {
                          o('searchErrors.tooShort.long')
                        }
                      }
                    }
                  return (0, h.jsxs)(b, {
                    children: [
                      (0, h.jsxs)(w, {
                        onClick: this.toggleError,
                        show: this.state.show,
                        children: [
                          (0, h.jsx)(j, { children: n[e].short(t) }),
                          (0, h.jsx)(x, {})
                        ]
                      }),
                      (0, h.jsx)(k, {
                        show: this.state.show,
                        children: n[e].long(t)
                      })
                    ]
                  })
                }
              }
            ])
          )
        })(a.Component),
        m = (function(r) {
          function e() {
            return (0, o.A)(this, e), (0, s.A)(this, e, arguments)
          }
          return (
            (0, i.A)(e, r),
            (0, n.A)(e, [
              {
                key: 'render',
                value: function() {
                  var r = this.props,
                    e = r.errors,
                    t = r.searchTerm,
                    o = r.t
                  return (0, h.jsxs)(v, {
                    children: [
                      (0, h.jsxs)(E, {
                        children: [o('c.warning'), (0, h.jsx)(y, {})]
                      }),
                      e.map(function(r, e) {
                        return (0,
                        h.jsx)(A, { t: o, error: r, searchTerm: t }, e)
                      })
                    ]
                  })
                }
              }
            ])
          )
        })(a.Component),
        v = (0, c.A)('div', { target: 'e13izuop1' })(''),
        b = (0, c.A)('div', { target: 'e13izuop2' })(''),
        w = (0, c.A)('div', { target: 'e13izuop3' })(
          'background:#fff1f1;padding:25px 30px;border-radius:',
          function(r) {
            return r.show ? '6px 6px 0 0 ' : '6px'
          },
          ';border:1px solid #dc2e2e;color:#dc2e2e;font-size:18px;display:flex;justify-content:space-between;align-items:center;&:hover{cursor:pointer;}'
        ),
        j = (0, c.A)('div', { target: 'e13izuop4' })(''),
        k = (0, c.A)('div', { target: 'e13izuop5' })(
          'display:',
          function(r) {
            return r.show ? 'block' : 'none'
          },
          ';background:#fff1f1;padding:25px 30px;border-radius:0 0 6px 6px;border:1px solid #dc2e2e;border-top:none;color:black;font-size:18px;'
        ),
        E = (0, c.A)(u.H2, { target: 'e13izuop6' })({
          name: '19fvqnf',
          styles: 'color:#dc2e2e;'
        }),
        y = (0, c.A)(d, { target: 'e13izuop7' })({
          name: 'o5uqvq',
          styles: 'margin-left:5px;'
        }),
        z = (0, g.C)()(m)
    }
  }
])
//# sourceMappingURL=347.2cf14268-d5973.chunk.js.map
