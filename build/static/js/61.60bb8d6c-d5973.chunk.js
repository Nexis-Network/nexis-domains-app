'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [61],
  {
    46061: function(e, n, t) {
      t.d(n, {
        A: function() {
          return q
        }
      })
      var i,
        a,
        r,
        s,
        l = t(80296),
        o = t(57528),
        d = t(70030),
        c = t(65043),
        h = t(88250),
        g = t(31881),
        u = t(62038),
        f = t(74725),
        x = t(18080),
        m = t(2038),
        p = t(93482),
        y = t(96552),
        A = t(71087),
        j = t(37276),
        v = t(12757),
        w = t(43783),
        b = t(4950),
        k = t(21733),
        C = t(90208),
        P = t(17147),
        E = t(38180),
        B = t(82056),
        N = t(65671),
        S = t(18727),
        F = t(70346),
        Y = t(59898),
        _ = t(70579),
        H = (0, E.default)('div')(
          i || (i = (0, o.A)(['\n  position: relative;\n']))
        )
      function I(e) {
        var n = e.address,
          t = (0, c.createRef)(),
          i = (0, c.createRef)(),
          a = (0, c.useState)(!1),
          r = (0, l.A)(a, 2),
          s = r[0],
          o = r[1],
          d = (0, c.useState)(!1),
          h = (0, l.A)(d, 2),
          g = h[0],
          u = h[1],
          x = (0, f.B)().t
        ;(0, j.Wr)([t, i], function() {
          return o(!1)
        })
        var m = function() {
          u(!1)
        }
        return (0, _.jsxs)(H, {
          children: [
            (0, _.jsx)(B.F, {
              ref: i,
              onClick: function() {
                o(function(e) {
                  return !e
                })
              },
              children: x('expiryNotification.reminder')
            }),
            s &&
              (0, _.jsx)(N.A, {
                ref: t,
                children: (0, _.jsx)(
                  S.A,
                  {
                    onClick: function() {
                      u(!0), o(!1)
                    },
                    address: n,
                    children: x('c.email')
                  },
                  'email'
                )
              }),
            g &&
              (0, _.jsx)(F.A, {
                closeModal: m,
                children: (0, _.jsx)(Y.A, { address: n, onCancel: m })
              })
          ]
        })
      }
      var O = (0, d.A)('div', { target: 'elhgnhy0' })(
          'align-items:start;display:flex;flex-direction:column;grid-area:actions;justify-content:flex-start;> *{margin:10px 0 10px 0;}',
          m.Ay.small(
            a ||
              (a = (0, o.A)([
                '\n    align-items: center; \n    flex-direction: row;\n    > * { \n      margin: 0 0 0 20px;\n    }\n  '
              ]))
          ),
          ' ',
          m.Ay.large(
            r || (r = (0, o.A)(['\n    justify-content: flex-end;\n  ']))
          ),
          ''
        ),
        R = (0, d.A)('div', { target: 'elhgnhy1' })({
          name: '1v6bkkh',
          styles: 'grid-area:renew;display:flex;flex-direction:column;'
        }),
        D = (0, d.A)(k.Ay, { target: 'elhgnhy2' })({
          name: 'cn1f3p',
          styles: 'margin-right:20px;align-self:flex-start;'
        }),
        L = (0, d.A)(u.PY.div, { target: 'elhgnhy3' })({
          name: '1boyjcw',
          styles:
            'background:#f0f6fa;padding:20px;margin:20px;margin-left:0;display:flex;flex-direction:column;'
        }),
        U = (0, d.A)('div', { target: 'elhgnhy4' })({
          name: '4ggw95',
          styles:
            'display:flex;justify-content:flex-end;align-items:flex-start;'
        }),
        z = (0, d.A)(P.n, { target: 'elhgnhy5' })(''),
        G = u.PY.custom(z),
        M = (0, d.A)('div', { target: 'elhgnhy6' })({
          name: '1ows65d',
          styles: 'max-height:500px;overflow-y:scroll;'
        }),
        V = (0, d.A)('span', { target: 'elhgnhy7' })(
          'color:#f6412d;margin-right:auto;margin-bottom:1em;',
          m.Ay.small(s || (s = (0, o.A)(['\n    margin-bottom: 0em;\n  ']))),
          ''
        )
      function W(e) {
        return e.length > 0
      }
      function q(e) {
        var n = e.selectedNames,
          t = e.address,
          i = e.allNames,
          a = e.setCheckedBoxes,
          r = e.setSelectAll,
          s = e.refetch,
          o = e.data,
          d = e.getterString,
          m = e.checkedOtherOwner,
          k = (0, f.B)().t,
          P = (0, j.Yz)(),
          E = P.state,
          B = P.actions,
          N = E.editing,
          S = E.txHash,
          F = E.pending,
          Y = E.confirmed,
          H = B.startEditing,
          z = B.stopEditing,
          q = B.startPending,
          J = B.setConfirmed,
          K = (0, c.useState)(1),
          Q = (0, l.A)(K, 2),
          T = Q[0],
          X = Q[1],
          Z = (0, h.I)(y.Lv),
          $ = Z.data,
          ee = (void 0 === $ ? {} : $).getEthPrice,
          ne = Z.loading,
          te = (0, A.P0)(T),
          ie = n.map(function(e) {
            return e.split('.')[0]
          }),
          ae = (0, h.I)(y.u5, { variables: { labels: ie, duration: te } }),
          re = ae.data,
          se = (void 0 === re ? {} : re).getRentPrices,
          le = ae.loading,
          oe = (0, g.n)(p.aE, {
            onCompleted: function(e) {
              var n = Object.values(e)[0]
              q(n),
                se &&
                  n &&
                  ee &&
                  (0, v.H9)({
                    labels: ie,
                    transactionId: n,
                    type: 'renew',
                    price: new x.A(''.concat(se._hex))
                      .toEth()
                      .mul(ee)
                      .toFixed(2),
                    years: T
                  })
            }
          }),
          de = (0, l.A)(oe, 1)[0]
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(O, {
              children: N
                ? null
                : F && !Y
                ? (0, _.jsx)(b.A, {
                    txHash: S,
                    onConfirmed: function() {
                      J(),
                        (0, w._G)(s, 300, 'expiryDate', n[0], o, d),
                        a({}),
                        r(!1)
                    }
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      t && i.length > 0 ? (0, _.jsx)(I, { address: t }) : '',
                      (0, _.jsx)(D, {
                        onClick: function() {
                          ie.length > 0 && H()
                        },
                        type: ie.length > 0 ? 'primary' : 'disabled',
                        children: k('address.renew.button')
                      })
                    ]
                  })
            }),
            (0, _.jsx)(R, {
              children:
                N &&
                (0, _.jsx)(u.Ny, {
                  children: (0, _.jsxs)(L, {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: 'auto' },
                    exit: { opacity: 0, height: 0 },
                    children: [
                      (0, _.jsx)(G, {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: 'auto' },
                        exit: { opacity: 0, height: 0 },
                        labels: ie,
                        years: T,
                        loading: le,
                        price: se,
                        setYears: X,
                        duration: te,
                        ethUsdPriceLoading: ne,
                        ethUsdPrice: ee || 0
                      }),
                      (0, _.jsxs)(U, {
                        children: [
                          m &&
                            (0, _.jsxs)(V, {
                              children: ['*', k('singleName.expiry.cannotown')]
                            }),
                          (0, _.jsx)(C.Ay, {
                            stopEditing: z,
                            mutation: function() {
                              de({ variables: { labels: ie, duration: te } })
                            },
                            mutationButton: k('address.renew.confirmButton'),
                            confirm: !0,
                            isValid: W(n),
                            extraDataComponent: (0, _.jsxs)(M, {
                              children: [
                                k('address.renew.confirm.0'),
                                '\n',
                                (0, _.jsx)('ul', {
                                  children: n.map(function(e, n) {
                                    return (0, _.jsx)('li', { children: e }, n)
                                  })
                                }),
                                k('address.renew.confirm.1'),
                                k('address.renew.year', { count: T })
                              ]
                            })
                          })
                        ]
                      })
                    ]
                  })
                })
            })
          ]
        })
      }
    }
  }
])
//# sourceMappingURL=61.60bb8d6c-d5973.chunk.js.map
