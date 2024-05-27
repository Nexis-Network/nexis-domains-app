;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [630],
  {
    64017: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function() {
            return $d
          }
        })
      var r = {}
      n.r(r),
        n.d(r, {
          yF: function() {
            return is
          },
          pS: function() {
            return rs
          }
        })
      var i = n(80296),
        a = n(57528),
        s = n(65043),
        o = n(88250),
        l = n(57985),
        d = n(77113),
        c = n(37276),
        u = n(96552),
        m = n(60349),
        p = n(91347),
        g = n(90675),
        f = n(10467),
        x = n(70030),
        h = n(74725),
        v = n(2038),
        y = n(22990),
        b = n(75969),
        A = n(3982),
        j = n(43226),
        w = n(70579),
        E = function(e, t) {
          return (
            (null === e || void 0 === e
              ? void 0
              : e.filter(function(e) {
                  return t === e.name
                }).length) > 0
          )
        },
        O = function(e) {
          var t = e.domain,
            n = t.name,
            r = null === n || void 0 === n ? void 0 : n.split('.'),
            i = (0, o.I)(
              (function(e) {
                return (null === e || void 0 === e ? void 0 : e.length) < 3
                  ? u.a0
                  : u.v0
              })(r)
            ),
            a = i.data,
            s =
              (null === r || void 0 === r ? void 0 : r.length) < 3
                ? null === a || void 0 === a
                  ? void 0
                  : a.favourites
                : null === a || void 0 === a
                ? void 0
                : a.subDomainFavourites
          return (0, w.jsx)(j.A, {
            domain: t,
            isSubDomain: (null === r || void 0 === r ? void 0 : r.length) > 2,
            isFavourite: E(s, n)
          })
        },
        k = n(66947),
        R = n(89379),
        C = n(86178),
        S = n.n(C),
        T = n(61766),
        I = n(45458),
        N = function(e) {
          var t = (function(e, t) {
            return (function t(n, r) {
              return e[r].on.NEXT === r
                ? [].concat((0, I.A)(n), [r])
                : t([].concat((0, I.A)(n), [r]), e[r].on.NEXT)
            })([], t)
          })(e.states, e.initialState)
          return {
            registerReducer: function(t, n) {
              return e.states[t].on[n] || t
            },
            hasReachedState: function(e, n) {
              var r = t.findIndex(function(t) {
                return t === e
              })
              return (
                t.findIndex(function(e) {
                  return e === n
                }) >= r
              )
            }
          }
        },
        D = {
          initialState: 'PRICE_DECISION',
          states: {
            PRICE_DECISION: {
              on: { NEXT: 'COMMIT_SENT', PREVIOUS: 'PRICE_DECISION' }
            },
            COMMIT_SENT: {
              on: { NEXT: 'COMMIT_CONFIRMED', PREVIOUS: 'PRICE_DECISION' }
            },
            COMMIT_CONFIRMED: {
              on: { NEXT: 'AWAITING_REGISTER', PREVIOUS: 'COMMIT_SENT' }
            },
            AWAITING_REGISTER: {
              on: { NEXT: 'REVEAL_SENT', PREVIOUS: 'COMMIT_CONFIRMED' }
            },
            REVEAL_SENT: {
              on: { NEXT: 'REVEAL_CONFIRMED', PREVIOUS: 'AWAITING_REGISTER' }
            },
            REVEAL_CONFIRMED: {
              on: { NEXT: 'REVEAL_CONFIRMED', PREVIOUS: 'REVEAL_SENT' }
            }
          }
        },
        M = N(D),
        P = M.registerReducer,
        _ = M.hasReachedState,
        F = n(71087)
      var B,
        z = (0, x.A)('div', { target: 'eacr2ez0' })(
          'color:',
          function(e) {
            return 100 === e.progress ? '#42E068' : '#dfdfdf'
          },
          ';font-size:34px;font-weight:300;position:relative;width:60px;height:60px;span{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}'
        ),
        L = (0, x.A)('svg', { target: 'eacr2ez1' })(
          'stroke:#ccc;circle{stroke-dasharray:',
          180,
          ';stroke-dashoffset:0;}circle.progress{stroke-dasharray:',
          180,
          ';stroke-dashoffset:',
          function(e) {
            return 1.8 * (e.progress - 100)
          },
          ';}'
        ),
        q = (0, x.A)('div', { target: 'eacr2ez2' })({
          name: 'tag0iu',
          styles:
            'margin-left:8px;h3{margin-top:2px;font-size:14px;font-weight:600;margin-bottom:5px;}p{font-size:14px;font-weight:400;margin-top:0;}'
        }),
        U = (0, x.A)('div', { target: 'eacr2ez3' })({
          name: 'k008qs',
          styles: 'display:flex;'
        }),
        H = function(e) {
          var t = e.number,
            n = e.text,
            r = e.title,
            i = e.progress,
            a = void 0 === i ? 100 : i
          return (0, w.jsxs)(U, {
            children: [
              (0, w.jsxs)(z, {
                progress: a,
                children: [
                  (0, w.jsxs)(L, {
                    height: '60',
                    width: '60',
                    progress: a,
                    children: [
                      (0, w.jsx)('circle', {
                        cx: '30',
                        cy: '30',
                        r: '28',
                        stroke: '#dfdfdf',
                        strokeWidth: '2',
                        fill: 'none',
                        transform: 'rotate(-90, 30, 30)'
                      }),
                      (0, w.jsx)('circle', {
                        cx: '30',
                        cy: '30',
                        r: '28',
                        strokeWidth: '2',
                        stroke: '#42E068',
                        fill: 'none',
                        className: 'progress',
                        transform: 'rotate(-90, 30, 30)'
                      })
                    ]
                  }),
                  (0, w.jsx)('span', { children: t })
                ]
              }),
              (0, w.jsxs)(q, {
                children: [
                  (0, w.jsx)('h3', { children: r }),
                  (0, w.jsx)('p', { children: n })
                ]
              })
            ]
          })
        },
        V = n(21733),
        Y = ['title', 'titleId']
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          W.apply(this, arguments)
        )
      }
      function X(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function K(e, t) {
        var n = e.title,
          r = e.titleId,
          i = X(e, Y)
        return s.createElement(
          'svg',
          W(
            {
              width: 9,
              height: 11,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          B ||
            (B = s.createElement('path', {
              d:
                'M3.1875 9.6h2.625c0 .7732-.5876 1.4-1.3125 1.4s-1.3125-.6268-1.3125-1.4zm.4688-8.2866C2.2005 1.7128 1.125 3.1218 1.125 4.7998v2.3998c0 .2212-.1684.4004-.3746.4004C.336 7.6 0 7.959 0 8.4v.6006C0 9.1108.0834 9.2.188 9.2h8.624c.1038 0 .188-.0906.188-.1994V8.4c0-.4418-.3375-.8-.7504-.8-.2068 0-.3746-.1778-.3746-.4004V4.7998c0-1.6774-1.0753-3.0868-2.5313-3.4864V.9002C5.3438.4018 4.966 0 4.5 0c-.465 0-.8438.403-.8438.9002v.4132z',
              fill: '#5284FF',
              fillRule: 'evenodd'
            }))
        )
      }
      var G,
        $ = s.forwardRef(K),
        J = (n.p, ['title', 'titleId'])
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Z.apply(this, arguments)
        )
      }
      function Q(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function ee(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Q(e, J)
        return s.createElement(
          'svg',
          Z(
            {
              width: 11,
              height: 11,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          G ||
            (G = s.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              s.createElement('circle', {
                fill: '#D2D2D2',
                cx: 5.5,
                cy: 5.5,
                r: 5.5
              }),
              s.createElement('path', {
                d:
                  'M5.123 6.196l2.1196-2.1195a.5897.5897 0 0 1 .8339 0l.1386.1386a.5897.5897 0 0 1 0 .8339L5.6903 7.5738a.588.588 0 0 1-.4263.1726.5898.5898 0 0 1-.6389-.1192L3.143 6.1959a.5897.5897 0 0 1-.0146-.8338l.1361-.141a.5897.5897 0 0 1 .8338-.0145l1.0247.9895z',
                fill: '#FFF'
              })
            ))
        )
      }
      var te,
        ne,
        re = s.forwardRef(ee)
      n.p, n(78970)
      function ie() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'Hi there'
        if (!('Notification' in window)) return !1
        ae() && new Notification(e)
      }
      function ae() {
        return 'granted' === Notification.permission
      }
      function se() {
        'denied' !== Notification.permission &&
          Notification.requestPermission().then(function(e) {
            'granted' === e &&
              ie('We will send you a notification when your name is ready')
          })
      }
      var oe = (0, x.A)('section', { target: 'e198kf3f0' })(
          'display:grid;grid-template-columns:1fr;grid-row-gap:30px;',
          v.Ay.large(
            te ||
              (te = (0, a.A)([
                '\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 30px;\n    grid-template-rows: 1fr;\n  '
              ]))
          ),
          ''
        ),
        le = (0, x.A)('div', { target: 'e198kf3f1' })(
          'display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;h2{font-family:Overpass;font-weight:300;font-size:18px;color:#2b2b2b;letter-spacing:0;margin:0;margin-bottom:5px;',
          v.Ay.medium(
            ne ||
              (ne = (0, a.A)([
                '\n      font-size: 24px;\n      color: #2B2B2B;\n      letter-spacing: 0;\n    '
              ]))
          ),
          '}p{margin:0;font-weight:400;font-family:Overpass;font-size:14px;color:#adbbcd;letter-spacing:0;}'
        ),
        de = (0, x.A)(V.Ay, { target: 'e198kf3f2' })({
          name: '6su6fj',
          styles: 'flex-shrink:0;'
        }),
        ce = (0, x.A)('div', { target: 'e198kf3f3' })({
          name: '1nx6jcw',
          styles: 'color:hsla(0,0%,82%,1);'
        }),
        ue = (0, x.A)('div', { target: 'e198kf3f4' })({
          name: 'm24ee3',
          styles:
            'display:flex;justify-content:flex-end;align-items:center;margin-bottom:10px;padding:20px;border:none;border-radius:20px;background-color:#528ffe;color:white;text-decoration:none;'
        }),
        me = function(e) {
          var t = e.step,
            n = e.waitPercentComplete,
            r = (e.waitTime, e.dispatch),
            i = (0, h.B)().t,
            a = {
              PRICE_DECISION: i('register.titles.0'),
              COMMIT_SENT: i('register.titles.1'),
              COMMIT_CONFIRMED: i('register.titles.1'),
              AWAITING_REGISTER: i('register.titles.1'),
              REVEAL_SENT: i('register.titles.1'),
              REVEAL_CONFIRMED: i('register.titles.2')
            }
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsxs)(le, {
                children: [
                  (0, w.jsxs)('div', {
                    children: [
                      (0, w.jsx)('h2', { children: a[t] }),
                      (0, w.jsx)('p', { children: i('register.favourite') })
                    ]
                  }),
                  ae()
                    ? (0, w.jsxs)(ce, {
                        children: [
                          (0, w.jsx)(re, { style: { marginRight: 5 } }),
                          i('register.notify')
                        ]
                      })
                    : (0, w.jsxs)(de, {
                        type: 'hollow-primary',
                        onClick: se,
                        children: [
                          (0, w.jsx)($, { style: { marginRight: 5 } }),
                          i('register.notify')
                        ]
                      })
                ]
              }),
              (0, w.jsxs)(oe, {
                children: [
                  (0, w.jsx)(H, {
                    number: 1,
                    progress:
                      'PRICE_DECISION' === t
                        ? 0
                        : 'COMMIT_SENT' === t
                        ? 50
                        : 100,
                    title: i('register.step1.title'),
                    text:
                      i('register.step1.text') + ' ' + i('register.step1.text2')
                  }),
                  (0, w.jsx)(H, {
                    number: 2,
                    progress:
                      'PRICE_DECISION' === t || 'COMMIT_SENT' === t
                        ? 0
                        : 'COMMIT_CONFIRMED' === t
                        ? n
                        : 100,
                    title: i('register.step2.title'),
                    text: i('register.step2.text')
                  }),
                  (0, w.jsx)(H, {
                    number: 3,
                    progress:
                      'REVEAL_CONFIRMED' === t
                        ? 100
                        : 'REVEAL_SENT' === t
                        ? 50
                        : 0,
                    title: i('register.step3.title'),
                    text: i('register.step3.text')
                  })
                ]
              }),
              100 == n && 'COMMIT_CONFIRMED' === t
                ? (0, w.jsx)(ue, {
                    onClick: function() {
                      return r('NEXT')
                    },
                    children: 'Continue to next step'
                  })
                : (0, w.jsx)(w.Fragment, {})
            ]
          })
        },
        pe = n(424),
        ge = n(23643),
        fe = n(22612),
        xe = n(18080),
        he = n(12757),
        ve = n(93482),
        ye = n(4950),
        be = n(82056),
        Ae = n(18727),
        je = n(70346),
        we = n(59898)
      var Ee,
        Oe = function(e) {
          var t = e.startDatetime,
            n = (e.type, e.name),
            r = e.registrant,
            a = e.noMargin,
            o = (0, s.useState)(!1),
            l = (0, i.A)(o, 2),
            d = l[0],
            c = l[1],
            u = (0, h.B)().t,
            m = t.clone().add(2, 'hours'),
            p = S()
              .duration(m.diff(t))
              .asHours(),
            g = {
              title: u('reminder.renewal.title', { name: n }),
              description: u('reminder.renewal.description'),
              location: u('reminder.everywhere'),
              startDatetime: t.format('YYYYMMDDTHHmmss'),
              endDatetime: m.format('YYYYMMDDTHHmmss'),
              duration: p
            },
            f = function() {
              c(!1)
            },
            x = [
              (0, w.jsx)(
                Ae.A,
                {
                  domainName: n,
                  address: r,
                  onClick: function() {
                    c(!0)
                  },
                  children: u('c.email')
                },
                'email'
              )
            ]
          return (0, w.jsxs)(w.Fragment, {
            children: [
              d &&
                (0, w.jsx)(je.A, {
                  closeModal: f,
                  children: (0, w.jsx)(we.A, { address: r, onCancel: f })
                }),
              (0, w.jsx)(be.A, { event: g, dropDownLinks: x, noMargin: a })
            ]
          })
        },
        ke = ['title', 'titleId']
      function Re() {
        return (
          (Re = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Re.apply(this, arguments)
        )
      }
      function Ce(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function Se(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Ce(e, ke)
        return s.createElement(
          'svg',
          Re(
            {
              width: 12,
              height: 12,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          Ee ||
            (Ee = s.createElement(
              'g',
              { fill: '#FFF', fillRule: 'evenodd' },
              s.createElement('path', {
                d:
                  'M.8222 8.1247l.0065.0065-.768 2.6925c-.236.8263.236 1.318 1.082 1.082l2.6787-.7818.0054.0054 5.8701-5.87-3.0045-3.0047L.8222 8.1247zM11.6168 1.677L10.2791.3395c-.4524-.4525-1.2-.4525-1.6721 0L7.4857 1.4607l3.0098 3.0098 1.1213-1.1213c.4722-.4721.4722-1.2197 0-1.6721'
              })
            ))
        )
      }
      var Te,
        Ie = s.forwardRef(Se),
        Ne = (n.p, n(65602)),
        De = n(28760),
        Me = n(93685)
      var Pe = (0, x.A)('div', { target: 'eh2r9yz0' })({
          name: 'pori7h',
          styles: 'display:flex;justify-content:flex-end;align-items:center;'
        }),
        _e = (0, x.A)(Ie, { target: 'eh2r9yz1' })({
          name: '1sylyko',
          styles: 'margin-right:5px;'
        }),
        Fe = (0, x.A)('span', { target: 'eh2r9yz2' })({
          name: 'vayuoy',
          styles: 'color:#ffa600;margin-right:10px;'
        }),
        Be = (0, x.A)(Ne.h, { target: 'eh2r9yz3' })({
          name: '13y7hp',
          styles: 'margin-right:5px;height:12px;width:12px;'
        }),
        ze = (0, x.A)(pe.N_, { target: 'eh2r9yz4' })({
          name: '8mg22s',
          styles: 'margin-right:20px;'
        })
      function Le(e) {
        var t = e.step,
          n = e.incrementStep,
          r = e.secret,
          i = e.duration,
          s = e.label,
          o = e.hasSufficientBalance,
          l = e.txHash,
          d = e.setTxHash,
          c = e.setCommitmentTimerRunning,
          u = e.commitmentTimerRunning,
          m = e.isAboveMinDuration,
          p = e.refetch,
          x = e.refetchIsMigrated,
          h = e.isNameWrapped,
          v = e.isReadOnly,
          y = e.price,
          b = e.years,
          A = e.premium,
          j = e.history,
          E = e.t,
          O = e.ethUsdPrice,
          k = e.account
        return {
          PRICE_DECISION: (0, w.jsx)(fe.s, {
            mutation: ve.cJ,
            variables: { label: s, secret: r, commitmentTimerRunning: u },
            onCompleted: function(e) {
              var t = Object.values(e)[0]
              d(t), c(!0), n()
            },
            children: function(e) {
              return !m || h || v
                ? h
                  ? (0, w.jsx)(V.Ay, {
                      'data-testid': 'request-register-button',
                      type: 'disabled',
                      children: E('register.buttons.request')
                    })
                  : (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsxs)(Fe, {
                          children: [
                            (0, w.jsx)(Be, {}),
                            E('register.buttons.connect')
                          ]
                        }),
                        (0, w.jsx)(Me.A, {
                          onClick: De.a,
                          colour: '#F5A623',
                          buttonText: E('c.connect')
                        })
                      ]
                    })
                : o
                ? (0, w.jsx)(V.Ay, {
                    'data-testid': 'request-register-button',
                    onClick: e,
                    children: E('register.buttons.request')
                  })
                : (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsxs)(Fe, {
                        children: [
                          (0, w.jsx)(Be, {}),
                          E('register.buttons.insufficient')
                        ]
                      }),
                      (0, w.jsx)(V.Ay, {
                        'data-testid': 'request-register-button',
                        type: 'disabled',
                        children: E('register.buttons.request')
                      })
                    ]
                  })
            }
          }),
          COMMIT_SENT: (0, w.jsx)(ye.A, { txHash: l }),
          COMMIT_CONFIRMED: (0, w.jsx)(V.Ay, {
            'data-testid': 'disabled-register-button',
            type: 'disabled',
            children: E('register.buttons.register')
          }),
          AWAITING_REGISTER: (0, w.jsx)(fe.s, {
            mutation: ve.eY,
            variables: { label: s, duration: i, secret: r },
            onCompleted: function(e) {
              var t = Object.values(e)[0]
              d(t), n()
            },
            children: function(e) {
              return (0, w.jsx)(w.Fragment, {
                children: o
                  ? (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsxs)(Fe, {
                          children: [
                            (0, w.jsx)(Be, {}),
                            E('register.buttons.warning')
                          ]
                        }),
                        (0, w.jsx)(V.Ay, {
                          'data-testid': 'register-button',
                          onClick: e,
                          children: E('register.buttons.register')
                        })
                      ]
                    })
                  : (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsxs)(Fe, {
                          children: [
                            (0, w.jsx)(Be, {}),
                            E('register.buttons.insufficient')
                          ]
                        }),
                        (0, w.jsx)(V.Ay, {
                          'data-testid': 'register-button',
                          type: 'disabled',
                          children: E('register.buttons.register')
                        })
                      ]
                    })
              })
            }
          }),
          REVEAL_SENT: (0, w.jsx)(ye.A, {
            txHash: l,
            onConfirmed: (0, f.A)(
              (0, g.A)().mark(function e() {
                return (0, g.A)().wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        O &&
                          (0, he.H9)({
                            transactionId: l,
                            labels: [s],
                            type: 'register',
                            price: new xe.A(''.concat(y._hex))
                              .toEth()
                              .mul(O)
                              .toFixed(2),
                            years: b,
                            premium: A
                          }),
                          n()
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
          }),
          REVEAL_CONFIRMED: (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(Oe, {
                css: (0, ge.AH)(
                  Te ||
                    (Te = (0, a.A)([
                      '\n            margin-right: 20px;\n          '
                    ]))
                ),
                name: ''.concat(s, '.eth'),
                startDatetime: S()()
                  .utc()
                  .local()
                  .add(i, 'seconds')
                  .subtract(30, 'days')
              }),
              (0, w.jsx)(ze, {
                onClick: (0, f.A)(
                  (0, g.A)().mark(function e() {
                    return (0, g.A)().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Promise.all([p(), x()])
                          case 2:
                            j.push('/name/'.concat(s, '.eth'))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                ),
                'data-testid': 'manage-name-button',
                children: E('register.buttons.manage')
              }),
              (0, w.jsxs)(V.Ay, {
                onClick: (0, f.A)(
                  (0, g.A)().mark(function e() {
                    return (0, g.A)().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Promise.all([x()])
                          case 2:
                            j.push('/address/'.concat(k))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                ),
                children: [
                  (0, w.jsx)(_e, {}),
                  E('register.buttons.setreverserecord')
                ]
              })
            ]
          })
        }[t]
      }
      var qe,
        Ue = function(e) {
          var t = e.step,
            n = e.incrementStep,
            r = e.secret,
            a = e.duration,
            o = e.label,
            l = e.hasSufficientBalance,
            d = e.setTimerRunning,
            c = e.setCommitmentTimerRunning,
            u = e.commitmentTimerRunning,
            m = e.setBlockCreatedAt,
            p = e.isAboveMinDuration,
            g = e.refetch,
            f = e.refetchIsMigrated,
            x = e.isReadOnly,
            v = e.isNameWrapped,
            y = e.price,
            b = e.years,
            A = e.premium,
            j = e.ethUsdPrice,
            E = (0, h.B)().t,
            O = (0, k.W6)(),
            R = (0, T.F)(),
            C = (0, s.useState)(void 0),
            S = (0, i.A)(C, 2),
            I = S[0],
            N = S[1]
          return (
            (0, s.useEffect)(
              function() {
                return function() {
                  'REVEAL_CONFIRMED' === t && g()
                }
              },
              [t]
            ),
            (0, w.jsx)(Pe, {
              children: Le({
                step: t,
                incrementStep: n,
                secret: r,
                duration: a,
                label: o,
                hasSufficientBalance: l,
                txHash: I,
                setTxHash: N,
                setTimerRunning: d,
                setBlockCreatedAt: m,
                setCommitmentTimerRunning: c,
                commitmentTimerRunning: u,
                isAboveMinDuration: p,
                refetch: g,
                refetchIsMigrated: f,
                isNameWrapped: v,
                isReadOnly: x,
                price: y,
                years: b,
                premium: A,
                history: O,
                t: E,
                ethUsdPrice: j,
                account: R
              })
            })
          )
        },
        He = n(27662),
        Ve = ['title', 'titleId']
      function Ye() {
        return (
          (Ye = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Ye.apply(this, arguments)
        )
      }
      function We(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function Xe(e, t) {
        var n = e.title,
          r = e.titleId,
          i = We(e, Ve)
        return s.createElement(
          'svg',
          Ye(
            {
              width: 11,
              height: 11,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          qe ||
            (qe = s.createElement(
              'g',
              {
                transform: 'translate(0 -1)',
                fill: 'none',
                fillRule: 'evenodd'
              },
              s.createElement('circle', {
                fill: 'hsla(0,0%,82%,1)',
                cx: 5.5,
                cy: 6.5,
                r: 5.5
              }),
              s.createElement(
                'text',
                {
                  fontFamily: 'Overpass-Bold, Overpass',
                  fontSize: 10,
                  fontWeight: 'bold',
                  letterSpacing: 0.3125,
                  fill: '#FFF'
                },
                s.createElement('tspan', { x: 3, y: 10 }, '?')
              )
            ))
        )
      }
      var Ke,
        Ge = s.forwardRef(Xe),
        $e = (n.p, ['title', 'titleId'])
      function Je() {
        return (
          (Je = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Je.apply(this, arguments)
        )
      }
      function Ze(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function Qe(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Ze(e, $e)
        return s.createElement(
          'svg',
          Je(
            {
              width: 11,
              height: 11,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          Ke ||
            (Ke = s.createElement(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              s.createElement('circle', {
                fill: '#42E068',
                cx: 5.5,
                cy: 5.5,
                r: 5.5
              }),
              s.createElement('path', {
                d:
                  'M5.123 6.196l2.1196-2.1195a.5897.5897 0 0 1 .8339 0l.1386.1386a.5897.5897 0 0 1 0 .8339L5.6903 7.5738a.588.588 0 0 1-.4263.1726.5898.5898 0 0 1-.6389-.1192L3.143 6.1959a.5897.5897 0 0 1-.0146-.8338l.1361-.141a.5897.5897 0 0 1 .8338-.0145l1.0247.9895z',
                fill: '#FFF'
              })
            ))
        )
      }
      var et = s.forwardRef(Qe)
      n.p
      var tt = (0, x.A)('div', { target: 'e34hp130' })({
          name: '10ib5jr',
          styles: 'margin-bottom:40px;'
        }),
        nt = {
          PRICE_DECISION: 0,
          COMMIT_SENT: 12.5,
          COMMIT_CONFIRMED: 25,
          AWAITING_REGISTER: 75,
          REVEAL_SENT: 85,
          REVEAL_CONFIRMED: 100
        },
        rt = (0, x.A)('div', { target: 'e34hp131' })(
          'height:20px;width:100%;border-radius:10px;margin-bottom:20px;background:',
          function(e) {
            var t = e.percentDone
            return (
              t &&
              '\n        linear-gradient(to right, #AFFF8C 0%, #42E068 '
                .concat(t, '%, transparent ')
                .concat(t, '%),')
            )
          },
          ' rgba(66,224,104,0.1);'
        ),
        it = (0, x.A)('div', { target: 'e34hp132' })({
          name: '1fcsmgl',
          styles: 'display:flex;margin-bottom:20px;'
        }),
        at = (0, x.A)('section', { target: 'e34hp133' })(
          'flex:',
          function(e) {
            return e.large ? '2' : '1'
          },
          ';display:flex;justify-content:center;border:1px dotted #ccc;border-right:none;border-top:none;position:relative;&:last-of-type{border-right:1px dotted #ccc;}'
        ),
        st = (0, x.A)('div', { target: 'e34hp134' })(
          'display:flex;align-items:center;background:white;padding:3px 15px;font-family:Overpass;font-weight:bold;font-size:14px;letter-spacing:1px;margin-bottom:-16px;transition:0.2s;color:',
          function(e) {
            return e.completed ? 'hsla(134, 72%, 57%, 1)' : 'hsla(0,0%,82%,1)'
          },
          ';&:hover{color:',
          function(e) {
            return e.completed
              ? 'hsla(134, 72%, 57%, 1)'
              : 'hsla(227, 58%, 41%, 1)'
          },
          ';circle{fill:hsla(227,58%,41%,1);}}'
        ),
        ot = (0, x.A)(Ge, { target: 'e34hp135' })({
          name: '12tgc6y',
          styles: 'margin-left:5px;margin-bottom:2px;transition:0.2s;'
        }),
        lt = (0, x.A)(et, { target: 'e34hp136' })({
          name: '68roia',
          styles: 'margin-left:5px;margin-bottom:2px;'
        })
      function dt(e) {
        var t = e.children,
          n = e.completed,
          r = e.text,
          i = e.large,
          a = e.icon,
          s = e.onMouseOver,
          o = e.onMouseLeave
        return (0, w.jsx)(at, {
          large: i,
          children: (0, w.jsxs)(st, {
            completed: n,
            onMouseOver: s,
            onMouseLeave: o,
            children: [t, r, ' ', a]
          })
        })
      }
      var ct = function(e) {
        var t = e.step,
          n = e.waitPercentComplete
        if ('PRICE_DECISION' === t) return null
        var r = n / (100 / (nt.AWAITING_REGISTER - nt.COMMIT_CONFIRMED)) + 25
        return (0, w.jsxs)(tt, {
          children: [
            (0, w.jsx)(rt, {
              percentDone: 'COMMIT_CONFIRMED' !== t ? nt[t] : r
            }),
            (0, w.jsxs)(it, {
              children: [
                (0, w.jsx)(He.A, {
                  text:
                    '<p>The first transaction is being mined on the blockchain. This should take 15-30 seconds.</p>',
                  position: 'top',
                  border: !0,
                  offset: { left: -30, top: 10 },
                  children: function(e) {
                    var n = e.tooltipElement,
                      r = e.showTooltip,
                      i = e.hideTooltip,
                      a = _('COMMIT_CONFIRMED', t)
                    return (0, w.jsxs)(dt, {
                      text: 'Step 1',
                      completed: a,
                      icon: a ? (0, w.jsx)(lt, {}) : (0, w.jsx)(ot, {}),
                      onMouseOver: function() {
                        r()
                      },
                      onMouseLeave: function() {
                        i()
                      },
                      children: ['\xa0', n]
                    })
                  }
                }),
                (0, w.jsx)(He.A, {
                  text:
                    '<p>Once this step is complete, the \u2018register\u2019 button will activate. Sign up for browser notifications to remind you when the wait is up.  </p>',
                  position: 'top',
                  border: !0,
                  offset: { left: -30, top: 10 },
                  children: function(e) {
                    var n = e.tooltipElement,
                      r = e.showTooltip,
                      i = e.hideTooltip,
                      a = _('AWAITING_REGISTER', t)
                    return (0, w.jsxs)(dt, {
                      large: !0,
                      text: 'Step 2',
                      completed: a,
                      icon: a ? (0, w.jsx)(lt, {}) : (0, w.jsx)(ot, {}),
                      onMouseOver: function() {
                        r()
                      },
                      onMouseLeave: function() {
                        i()
                      },
                      children: ['\xa0', n]
                    })
                  }
                }),
                (0, w.jsx)(He.A, {
                  text:
                    '<p>Click \u2018register\u2019 to launch the second transaction and complete the registration. </p>',
                  position: 'top',
                  border: !0,
                  offset: { left: -30, top: 10 },
                  children: function(e) {
                    var n = e.tooltipElement,
                      r = e.showTooltip,
                      i = e.hideTooltip,
                      a = _('REVEAL_CONFIRMED', t)
                    return (0, w.jsxs)(dt, {
                      completed: a,
                      text: 'Step 3',
                      icon: _('REVEAL_CONFIRMED', t)
                        ? (0, w.jsx)(lt, {})
                        : (0, w.jsx)(ot, {}),
                      onMouseOver: function() {
                        r()
                      },
                      onMouseLeave: function() {
                        i()
                      },
                      children: ['\xa0', n]
                    })
                  }
                })
              ]
            })
          ]
        })
      }
      var ut = (0, x.A)('div', { target: 'e1ic7b0z0' })({
          name: '1ytfatq',
          styles: 'padding:30px 40px;'
        }),
        mt = (0, x.A)('div', { target: 'e1ic7b0z1' })({
          name: '1qv42d6',
          styles:
            'background:#f0f6fa;color:#2b2b2b;font-size:20px;padding:20px;font-weight:300;'
        })
      function pt(e) {
        e.domain
        var t = (0, h.B)().t
        return (0, w.jsx)(ut, {
          children: (0, w.jsx)(mt, {
            children: t('singleName.messages.alreadyregistered')
          })
        })
      }
      var gt = n(17147),
        ft = n(76518),
        xt = n.n(ft),
        ht = n(44309)
      var vt = (0, x.A)('div', { target: 'e1ric6it0' })({
          name: '1lfzuwt',
          styles:
            'background-color:white;color:#d8d8d8;padding:1em;#myChart{cursor:pointer;}'
        }),
        yt = (0, x.A)('div', { target: 'e1ric6it1' })({
          name: 'g5bgmf',
          styles: 'display:flex;justify-content:space-between;span{margin:1em;}'
        }),
        bt = (0, x.A)('canvas', { target: 'e1ric6it2' })({
          name: '1tqkeyg',
          styles: 'background-color:#e9eef6;'
        }),
        At = (0, x.A)('span', { target: 'e1ric6it3' })({
          name: '1pu1kae',
          styles: 'font-weight:bold;font-size:large;'
        })
      function jt(e) {
        var t,
          n,
          r = e.startDate,
          a = e.currentDate,
          o = e.targetDate,
          l = e.endDate,
          d = e.now,
          c = e.ethUsdPrice,
          u = e.handleTooltip,
          m = e.oracle,
          p = e.premiumOnlyPrice,
          g = e.price,
          f = (0, ht.A)({ price: g, premium: p, ethUsdPrice: c }),
          x = m.getDaysRemaining(d),
          v = m.getHoursRemaining(d),
          y = m.totalDays,
          b = s.createRef(),
          A = [],
          j = [],
          E = [],
          O = [],
          k = [],
          R = (0, h.B)().t,
          C = (0, s.useState)(!1),
          S = (0, i.A)(C, 2),
          T = S[0],
          I = S[1]
        x > 7
          ? ((t = d), (n = x))
          : x > 1
          ? ((t = l.clone().subtract(7, 'day')), (n = 7))
          : ((t = l.clone().subtract(24, 'hour')), (n = 24))
        for (
          var N = m.getAmountByDateRange(r, t), D = t.clone();
          l.diff(D) > 0;
          D = D.add(1, 'hour')
        ) {
          var M = m.getAmountByDateRange(r, D),
            P = D.format('YYYY-MM-DD:HH:00')
          j.push(P),
            A.push(M),
            a.diff(D) >= 0 || a.format('YYYY-MM-DD:HH:00') === P
              ? E.push(M)
              : E.push(null),
            a.format('YYYY-MM-DD:HH:00') === P ||
            r.format('YYYY-MM-DD:HH:00') === P ||
            o.format('YYYY-MM-DD:HH:00') === P ||
            o === P
              ? O.push(3)
              : O.push(null),
            o === P ? k.push(2e3) : k.push(null)
        }
        return (
          (0, s.useEffect)(function() {
            var e = b.current.getContext('2d')
            xt().defaults.global.tooltips.yAlign = 'bottom'
            var t = new (xt())(e, {
              type: 'line',
              data: {
                labels: j,
                datasets: [
                  {
                    label: 'Passed',
                    borderWidth: 3,
                    data: E,
                    borderColor: '#2C46A6',
                    backgroundColor: '#2C46A6',
                    pointRadius: O,
                    fill: !1
                  },
                  {
                    label: 'Estimate',
                    borderWidth: 2,
                    data: A,
                    borderColor: '#D8D8D8',
                    pointBackgroundColor: '#2C46A6',
                    pointBorderColor: '#2C46A6',
                    fill: !1,
                    pointRadius: O
                  }
                ]
              },
              options: {
                events: ['click'],
                animation: { duration: 0 },
                tooltips: {
                  enabled: !0,
                  mode: 'nearest',
                  intersect: !1,
                  titleAlign: 'center',
                  multiKeyBackground: '#2C46A6',
                  callbacks: {
                    label: function(e, t) {
                      u(e)
                      var n = 'Premium: $'.concat(e.yLabel.toFixed(2))
                      if (1 === e.datasetIndex) return n
                    }
                  }
                },
                responsive: !0,
                aspectRatio: 5,
                legend: { display: !1 },
                scales: {
                  xAxes: [
                    {
                      afterFit: function(e) {
                        e.height = 0
                      },
                      ticks: {
                        maxTicksLimit: n,
                        callback: function() {
                          return ''
                        }
                      },
                      gridLines: {
                        zeroLineColor: '#e9eef6',
                        zeroLineWidth: 3,
                        color: 'white',
                        lineWidth: 3,
                        offsetGridLines: !1,
                        drawBorder: !1
                      }
                    }
                  ],
                  yAxes: [
                    {
                      ticks: { display: !1, max: 1.5 * N },
                      gridLines: { display: !1, drawBorder: !1 }
                    }
                  ]
                },
                layout: { padding: { bottom: 5, top: 5 } }
              }
            })
            I(t)
          }, []),
          T &&
            ((T.data.datasets[0].pointRadius = O),
            (T.data.datasets[1].pointRadius = O),
            T.update()),
          (0, w.jsxs)(vt, {
            children: [
              (0, w.jsxs)(yt, {
                children: [
                  (0, w.jsxs)(At, {
                    children: [
                      R('linegraph.title', { premiumInEth: f.premium }),
                      ' ',
                      'NZT($',
                      f.premiumInUsd,
                      ')'
                    ]
                  }),
                  (0, w.jsx)('span', {
                    children:
                      x > 1
                        ? R('linegraph.daysRemaining', {
                            daysRemaining: x,
                            totalDays: y
                          })
                        : ''.concat(v, ' hours remaining')
                  })
                ]
              }),
              (0, w.jsx)(bt, { id: 'myChart', ref: b }),
              (0, w.jsxs)(yt, {
                children: [
                  (0, w.jsxs)('span', { children: ['$', parseInt(N), ' '] }),
                  (0, w.jsx)('span', { children: '$0' })
                ]
              })
            ]
          })
        )
      }
      var wt = n(6180),
        Et = n(84131)
      var Ot,
        kt,
        Rt,
        Ct,
        St,
        Tt,
        It,
        Nt = function(e) {
          var t = e.startDatetime,
            n = e.name,
            r = e.noMargin,
            i = e.invalid,
            a = (0, h.B)().t,
            s = t.clone().add(2, 'hours'),
            o = S()
              .duration(s.diff(t))
              .asHours(),
            l = {
              title: a('reminder.release.title', { name: n }),
              description: a('reminder.release.description', { name: n }),
              location: a('reminder.everywhere'),
              startDatetime: t.format('YYYYMMDDTHHmmss'),
              endDatetime: s.format('YYYYMMDDTHHmmss'),
              duration: o
            }
          return (0, w.jsx)(be.A, { event: l, noMargin: r, invalid: i })
        }
      var Dt = (0, x.A)('div', { target: 'enmae6q0' })(
          'display:grid;grid-template-columns:1fr;margin-bottom:20px;margin-top:20px;',
          v.Ay.medium(
            Ot ||
              (Ot = (0, a.A)([
                '\n    grid-template-columns:\n      minmax(min-content, 200px) minmax(min-content, min-content)\n      minmax(200px, 1fr) minmax(200px, min-content);\n  '
              ]))
          ),
          ''
        ),
        Mt = (0, x.A)(wt.h, { target: 'enmae6q1' })(
          'display:none;',
          v.Ay.medium(
            kt ||
              (kt = (0, a.A)([
                '\n    display: block;\n    margin-top: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n  '
              ]))
          ),
          ''
        ),
        Pt = (0, x.A)('div', { target: 'enmae6q2' })(
          v.Ay.medium(Rt || (Rt = (0, a.A)(['\n    max-width: 220px;\n  ']))),
          ''
        ),
        _t = (0, x.A)('div', { target: 'enmae6q3' })(
          'width:100%;',
          v.Ay.medium(Ct || (Ct = (0, a.A)(['\n    width: auto\n  ']))),
          ''
        ),
        Ft = (0, x.A)('div', { target: 'enmae6q4' })(
          'margin-top:1em;',
          v.Ay.medium(
            St ||
              (St = (0, a.A)([
                '\n    margin: auto;\n    max-width: 220px;\n  '
              ]))
          ),
          ''
        ),
        Bt = (0, x.A)('div', { target: 'enmae6q5' })(
          'font-family:Overpass;font-weight:100;font-size:22px;color:',
          function(e) {
            return e.invalid ? 'red' : '#2b2b2b'
          },
          ';border-bottom:1px solid #dbdbdb;',
          v.Ay.small(Tt || (Tt = (0, a.A)(['\n    font-size: 28px;\n  ']))),
          ''
        ),
        zt = (0, x.A)('div', { target: 'enmae6q6' })({
          name: 'pxau33',
          styles:
            'font-family:Overpass;font-weight:300;font-size:14px;color:#adbbcd;margin-top:10px;'
        }),
        Lt = (0, x.A)(Et.A, { target: 'enmae6q7' })({
          name: '1qkns59',
          styles: 'display:inline-block;width:8em;margin-bottom:0em;'
        })
      var qt = function(e) {
          var t = e.name,
            n = e.invalid,
            r = e.className,
            i = e.reference,
            s = e.handlePremium,
            o = e.targetPremium,
            l = e.targetDate,
            d = (0, h.B)().t
          return (0, w.jsxs)(Dt, {
            className: r,
            ref: i,
            children: [
              (0, w.jsxs)(Pt, {
                children: [
                  (0, w.jsx)(Lt, {
                    invalid: n,
                    wide: !1,
                    placeholder: '$0',
                    value: o,
                    onChange: function(e) {
                      s(e.target)
                    }
                  }),
                  (0, w.jsx)(zt, { children: d('register.premium.title') })
                ]
              }),
              (0, w.jsx)(Mt, {}),
              (0, w.jsxs)(_t, {
                children: [
                  (0, w.jsx)(Bt, {
                    invalid: n,
                    children: n
                      ? d('register.premium.invalid')
                      : ''.concat((0, F.Yq)(l))
                  }),
                  (0, w.jsx)(zt, {
                    children: d('register.premium.dateDescription')
                  })
                ]
              }),
              (0, w.jsx)(Ft, {
                children: (0, w.jsx)(Nt, {
                  css: (0, ge.AH)(
                    It ||
                      (It = (0, a.A)([
                        '\n            margin-right: 20px;\n          '
                      ]))
                  ),
                  name: t,
                  startDatetime: l.utc().local(),
                  invalid: n
                })
              })
            ]
          })
        },
        Ut = n(67985)
      var Ht,
        Vt = function(e) {
          return window.localStorage.getItem('progress')
            ? JSON.parse(window.localStorage.getItem('progress'))[e]
            : null
        },
        Yt = function(e, t) {
          var n,
            r = {}
          ;(n = window.localStorage.getItem('progress')) && (r = JSON.parse(n)),
            (r[e] = (0, R.A)((0, R.A)({}, r[e]), t)),
            window.localStorage.setItem('progress', JSON.stringify(r))
        },
        Wt = function(e) {
          var t,
            n = {}
          ;(t = window.localStorage.getItem('progress')) && (n = JSON.parse(t)),
            delete n[e],
            window.localStorage.setItem('progress', JSON.stringify(n))
        },
        Xt = function(e) {
          var t,
            n,
            r = e.checkCommitment,
            i = e.domain,
            a = e.networkId,
            s = e.states,
            o = e.step,
            l = e.dispatch,
            d = e.secret,
            c = e.setSecret,
            u = e.years,
            m = e.setYears,
            p = e.timerRunning,
            g = e.setTimerRunning,
            f = e.waitUntil,
            x = e.setWaitUntil,
            h = e.secondsPassed,
            v = e.setSecondsPassed,
            y = e.commitmentExpirationDate,
            b = e.setCommitmentExpirationDate,
            A = e.now,
            j = Object.keys(s).indexOf(o),
            w = ''.concat(a, '-').concat(i.label)
          switch (
            ((t = Vt(w)),
            d ||
              (t && t.secret
                ? c(t.secret)
                : c('0x' + Ut.randomBytes(32).toString('hex'))),
            u || (t && t.years ? m(t.years) : m(1)),
            f || (t && t.waitUntil && x(t.waitUntil)),
            h || (t && t.secondsPassed && v(t.secondsPassed)),
            y ||
              (t &&
                t.commitmentExpirationDate &&
                b(t.commitmentExpirationDate)),
            (n = Object.keys(s).indexOf(t && t.step) - j > 0),
            t &&
              A &&
              (t.commitmentExpirationDate &&
              S()(t.commitmentExpirationDate).isSameOrBefore(A)
                ? Wt(w)
                : n && l('NEXT')),
            o)
          ) {
            case 'PRICE_DECISION':
              if (t)
                if (t.secret && t.years)
                  new Date(1e3 * r) > 0
                    ? (l('NEXT'), l('NEXT'))
                    : Yt(w, { step: o, secret: d, years: u })
                else Yt(w, { step: o, secret: d, years: u })
              else Yt(w, { step: o, secret: d })
              break
            case 'COMMIT_CONFIRMED':
              Yt(w, {
                step: o,
                secret: d,
                waitUntil: f,
                secondsPassed: h,
                commitmentExpirationDate: y
              }),
                p || g(!0)
              break
            case 'AWAITING_REGISTER':
              p && g(!1)
          }
          return d
        },
        Kt = (0, l.J1)(
          Ht ||
            (Ht = (0, a.A)([
              '\n  query web3 @client {\n    accounts\n    networkId\n    network\n    isReadOnly\n    isSafeApp\n  }\n'
            ]))
        ),
        Gt = function() {
          var e = (0, o.I)(Kt),
            t = e.data,
            n = e.loading,
            r = e.error,
            i = e.refetch
          if (!t)
            return {
              accounts: void 0,
              network: void 0,
              networkId: void 0,
              loading: n,
              error: r
            }
          var a = t.accounts,
            s = t.network,
            l = t.networkId,
            d = t.isReadOnly
          return {
            accounts: d ? [] : a,
            network: s,
            networkId: l,
            loading: n,
            refetch: i,
            error: r,
            isReadOnly: d,
            isSafeApp: t.isSafeApp
          }
        },
        $t = n(23029),
        Jt = n(92901),
        Zt = 3600,
        Qt = (function() {
          return (0, Jt.A)(
            function e(t, n) {
              ;(0, $t.A)(this, e),
                (this.algorithm = n),
                'exponential' === n
                  ? ((this.startingPremiumInUsd = 1e8),
                    (this.totalDays = 21),
                    (this.lastValue =
                      this.startingPremiumInUsd *
                      Math.pow(0.5, this.totalDays)))
                  : ((this.startingPremiumInUsd = 1e5), (this.totalDays = 28)),
                (this.releasedDate = t.clone().add(90, 'days')),
                (this.zeroPremiumDate = this.releasedDate
                  .clone()
                  .add(this.totalDays, 'days')),
                (this.diff = this.zeroPremiumDate.diff(this.releasedDate)),
                (this.rate = this.startingPremiumInUsd / this.diff),
                (this.diffInHour = this.zeroPremiumDate.diff(
                  this.releasedDate,
                  'hour'
                )),
                (this.hourlyRate = this.startingPremiumInUsd / this.diffInHour)
            },
            [
              {
                key: 'getDaysPast',
                value: function(e) {
                  return parseInt(e.diff(this.releasedDate) / 86400 / 1e3)
                }
              },
              {
                key: 'getHoursPast',
                value: function(e) {
                  return parseInt(e.diff(this.releasedDate) / Zt / 1e3)
                }
              },
              {
                key: 'getDaysRemaining',
                value: function(e) {
                  return this.totalDays - this.getDaysPast(e)
                }
              },
              {
                key: 'getHoursRemaining',
                value: function(e) {
                  return 24 * this.totalDays - this.getHoursPast(e)
                }
              },
              {
                key: 'getTargetDateByAmount',
                value: function(e) {
                  var t,
                    n = parseFloat(e)
                  return 'exponential' === this.algorithm
                    ? ((t =
                        e < this.lastValue
                          ? this.totalDays
                          : Math.log(
                              (n + this.lastValue) / this.startingPremiumInUsd
                            ) / Math.log(0.5)),
                      this.releasedDate.clone().add(24 * t * 60, 'minutes'))
                    : this.zeroPremiumDate
                        .clone()
                        .subtract(n / this.rate / 1e3, 'second')
                }
              },
              {
                key: 'getTargetAmountByDaysPast',
                value: function(e) {
                  if ('exponential' === this.algorithm) {
                    var t = this.startingPremiumInUsd * Math.pow(0.5, e)
                    return t >= this.lastValue ? t - this.lastValue : 0
                  }
                  return (this.totalDays - e) * (24 * this.hourlyRate)
                }
              },
              {
                key: 'getAmountByDateRange',
                value: function(e, t) {
                  var n = t.diff(e) / Zt / 1e3 / 24
                  return this.getTargetAmountByDaysPast(n)
                }
              }
            ]
          )
        })()
      var en,
        tn,
        nn = (0, x.A)('div', { target: 'eo8b4f50' })({
          name: '19lgokg',
          styles: 'padding:20px 40px;'
        }),
        rn = (0, x.A)('div', { target: 'eo8b4f51' })({
          name: '18o4zck',
          styles:
            'background-color:#fef6e9;color:black;padding:1em;margin-bottom:1em;'
        }),
        an = (0, x.A)('div', { target: 'eo8b4f52' })({
          name: 'm24ee3',
          styles:
            'display:flex;justify-content:flex-end;align-items:center;margin-bottom:10px;padding:20px;border:none;border-radius:20px;background-color:#528ffe;color:white;text-decoration:none;'
        }),
        sn = function(e) {
          var t,
            n,
            r,
            a,
            l = e.domain,
            d = e.waitTime,
            m = e.refetch,
            p = e.refetchIsMigrated,
            g = e.isReadOnly,
            f = e.isNameWrapped,
            x = e.registrationOpen,
            v = (0, h.B)().t,
            y = (0, s.useState)(!1),
            b = (0, i.A)(y, 2),
            A = b[0],
            j = b[1],
            E = Gt().networkId,
            O = (0, s.useReducer)(P, D.initialState),
            k = (0, i.A)(O, 2),
            R = k[0],
            C = k[1],
            I = function() {
              return C('NEXT')
            },
            N = (0, s.useState)(!1),
            M = (0, i.A)(N, 2),
            _ = M[0],
            B = M[1],
            z = (0, s.useState)(0),
            L = (0, i.A)(z, 2),
            q = L[0],
            U = L[1],
            H = (0, s.useState)(!1),
            V = (0, i.A)(H, 2),
            Y = V[0],
            W = V[1],
            X = (0, s.useState)(!1),
            K = (0, i.A)(X, 2),
            G = K[0],
            $ = K[1],
            J = (0, s.useState)(null),
            Z = (0, i.A)(J, 2),
            Q = Z[0],
            ee = Z[1],
            te = (0, s.useState)(null),
            ne = (0, i.A)(te, 2),
            re = ne[0],
            ae = ne[1],
            se = (0, s.useState)(!1),
            oe = (0, i.A)(se, 2),
            le = oe[0],
            de = oe[1],
            ce = (0, s.useState)(!1),
            ue = (0, i.A)(ce, 2),
            pe = ue[0],
            ge = ue[1],
            fe = (0, s.useState)(!1),
            xe = (0, i.A)(fe, 2),
            he = xe[0],
            ve = xe[1],
            ye = (0, o.I)(u.Lv),
            be = ye.data,
            Ae = (void 0 === be ? {} : be).getEthPrice,
            je = ye.loading,
            we = (0, o.I)(u.Dj).data,
            Ee = (void 0 === we ? {} : we).getPriceCurve,
            Oe = (0, c.YW)(),
            ke = Oe.loading,
            Re = Oe.price,
            Ce = (0, c.lA)().block,
            Se = (0, s.useState)(!1),
            Te = (0, i.A)(Se, 2),
            Ie = Te[0],
            Ne = Te[1],
            De = (0, o.I)(u.vJ, {
              variables: { waitUntil: re },
              fetchPolicy: 'no-cache'
            }).data,
            Me = (void 0 === De ? {} : De).waitBlockTimestamp,
            Pe = (0, T.F)(),
            _e = (0, o.I)(u.KO, {
              variables: { address: Pe },
              fetchPolicy: 'no-cache'
            }).data,
            Fe = (void 0 === _e ? {} : _e).getBalance,
            Be = (0, o.I)(u.QW, { fetchPolicy: 'no-cache' }).data,
            ze = (void 0 === Be ? {} : Be).getMaximumCommitmentAge
          Ce && (t = S()(1e3 * Ce.timestamp)),
            !he && ze && Q && ve(S()(Q).add(ze, 'second'))
          var Le = (0, o.I)(u.jD, {
              variables: {
                label: l.label,
                secret: A,
                commitmentTimerRunning: G
              },
              fetchPolicy: 'no-cache'
            }).data,
            qe = (void 0 === Le ? {} : Le).checkCommitment,
            He = void 0 !== qe && qe
          Xt({
            checkCommitment: He,
            domain: l,
            networkId: E,
            states: D.states,
            dispatch: C,
            step: R,
            secret: A,
            setSecret: j,
            years: _,
            setYears: B,
            timerRunning: Y,
            setTimerRunning: W,
            waitUntil: re,
            setWaitUntil: ae,
            secondsPassed: q,
            setSecondsPassed: U,
            commitmentExpirationDate: he,
            setCommitmentExpirationDate: ve,
            now: t
          }),
            (0, c.$$)(
              function() {
                Q && !re && ae(Q + 1e3 * d),
                  q < d
                    ? U(function(e) {
                        return e + 1
                      })
                    : (Me &&
                        Y &&
                        (I(),
                        ie(
                          ''
                            .concat(l.name, ' ')
                            .concat(v('register.notifications.ready'))
                        )),
                      W(!1))
              },
              Y ? 1e3 : null
            ),
            (0, c.$$)(
              function() {
                He > 0 ? (I(), W(!0), $(!1)) : $(new Date())
              },
              G ? 1e3 : null
            )
          var Ve,
            Ye,
            We,
            Xe = parseFloat(_),
            Ke = (0, F.P0)(_),
            Ge = (0, o.I)(u.JQ, {
              variables: {
                duration: Ke,
                label: l.label,
                commitmentTimerRunning: G,
                block: null === Ce || void 0 === Ce ? void 0 : Ce.number
              },
              skip: !(Ce && Ce.number),
              fetchPolicy: 'no-cache'
            }),
            $e = Ge.data,
            Je = (void 0 === $e ? {} : $e).getRentPriceAndPremium,
            Ze = Ge.loading
          Je && ((Ve = Je.price), (Ye = Je.premium)),
            !Q && He > 0 && ee(1e3 * He),
            Fe && Ve && (We = Fe.gt(Ve)),
            Q && !re && ae(Q + 1e3 * d)
          var Qe = Xe > 2419200 / F.iy,
            et = (q / d) * 100,
            tt = S()(l.expiryTime),
            nt = new Qt(tt, Ee),
            rt = nt.releasedDate,
            it = nt.zeroPremiumDate,
            at = nt.startingPremiumInUsd
          if (!x) return (0, w.jsx)(pt, { domain: l })
          if (je || ke) return (0, w.jsx)(w.Fragment, {})
          le || (de(it), ge(nt.getTargetAmountByDaysPast(nt.getDaysPast(it)))),
            Ce &&
              ((n = t.isBetween(rt, it)),
              (r = nt.getTargetAmountByDaysPast(nt.getDaysPast(t))),
              (a = t.isBetween(rt, it)))
          return (0, w.jsxs)(nn, {
            children: [
              'PRICE_DECISION' === R &&
                (0, w.jsx)(gt.A, {
                  name: l.label,
                  duration: Ke,
                  years: _,
                  setYears: B,
                  ethUsdPriceLoading: je,
                  ethUsdPremiumPrice: r,
                  ethUsdPrice: Ae,
                  gasPrice: Re,
                  loading: Ze,
                  price: Ve,
                  premiumOnlyPrice: Ye,
                  underPremium: a,
                  displayGas: !0
                }),
              n
                ? (0, w.jsxs)(rn, {
                    children: [
                      (0, w.jsx)('h2', {
                        children: v('register.premiumWarning.title')
                      }),
                      (0, w.jsx)('p', {
                        children: v(
                          'exponential' === Ee
                            ? 'register.premiumWarning.exponentialWarningDescripiton'
                            : 'register.premiumWarning.description'
                        )
                      }),
                      (0, w.jsx)(jt, {
                        startDate: rt,
                        currentDate: t,
                        targetDate: le,
                        endDate: it,
                        targetPremium: pe,
                        ethUsdPrice: Ae,
                        handleTooltip: function(e) {
                          var t = e.yLabel
                          pe !== t &&
                            (de(nt.getTargetDateByAmount(t)), ge(t.toFixed(2)))
                        },
                        underPremium: a,
                        oracle: nt,
                        price: Ve,
                        now: t,
                        premiumOnlyPrice: Ye
                      }),
                      (0, w.jsx)(qt, {
                        handlePremium: function(e) {
                          var t = e.value.replace('$', '')
                          !isNaN(t) && parseInt(t || 0) <= at
                            ? (pe !== t &&
                                (de(nt.getTargetDateByAmount(t)), ge(t)),
                              Ne(!1))
                            : Ne(!0)
                        },
                        targetPremium: pe,
                        name: l.name,
                        invalid: Ie,
                        targetDate: le
                      })
                    ]
                  })
                : '',
              (0, w.jsx)(me, {
                step: R,
                waitTime: d,
                waitPercentComplete: et,
                dispatch: C
              }),
              (0, w.jsx)(ct, { step: R, waitPercentComplete: et }),
              'COMMIT_SENT' == R
                ? (0, w.jsx)(an, {
                    onClick: function() {
                      return C('NEXT')
                    },
                    style: { cursor: 'pointer' },
                    children:
                      '"Confirmed Transaction but Still showing Tx Pending? Click Me \ud83d\ude0a"'
                  })
                : '',
              (0, w.jsx)(Ue, {
                hasSufficientBalance: We,
                waitTime: d,
                incrementStep: I,
                decrementStep: function() {
                  return C('PREVIOUS')
                },
                secret: A,
                step: R,
                label: l.label,
                duration: Ke,
                secondsPassed: q,
                timerRunning: Y,
                setTimerRunning: W,
                setCommitmentTimerRunning: $,
                commitmentTimerRunning: G,
                setBlockCreatedAt: ee,
                refetch: m,
                refetchIsMigrated: p,
                isAboveMinDuration: Qe,
                isReadOnly: g,
                isNameWrapped: f,
                price: Ve,
                years: _,
                premium: r,
                ethUsdPrice: !je && Ae
              })
            ]
          })
        },
        on = function(e) {
          var t = (0, o.I)(u._w),
            n = t.data,
            r = t.loading,
            i = t.error
          if (r) return (0, w.jsx)(m.A, { withWrap: !0, large: !0 })
          i && console.log(i)
          var a = n.getMinimumCommitmentAge
          return (0, w.jsx)(sn, (0, R.A)({ waitTime: a }, e))
        },
        ln = n(80045),
        dn = n(93171),
        cn = n(31881),
        un = n(90208)
      var mn = (0, x.A)('section', { target: 'e1uay9570' })({
          name: '46b038',
          styles: 'margin-top:30px;'
        }),
        pn = (0, x.A)('div', { target: 'e1uay9571' })(
          'display:flex;flex-direction:column;margin-bottom:20px;',
          v.Ay.small(
            en ||
              (en = (0, a.A)([
                '\n    margin-bottom: 0;\n    flex-direction: row;\n  '
              ]))
          ),
          ''
        ),
        gn = (0, x.A)(Et.A, { target: 'e1uay9572' })(
          'width:100%;margin-right:20px;margin-bottom:20px;',
          v.Ay.small(tn || (tn = (0, a.A)(['\n    margin-bottom: 0;\n  ']))),
          ''
        )
      var fn = function(e) {
          var t = e.domain,
            n = e.refetch,
            r = (0, c.Yz)(),
            a = r.state,
            s = r.actions,
            o = (0, h.B)().t,
            l = a.editing,
            u = a.newValue,
            m = a.txHash,
            p = a.pending,
            g = a.confirmed,
            f = s.startEditing,
            x = s.stopEditing,
            v = s.updateValue,
            y = s.startPending,
            b = s.setConfirmed,
            A = u.length > 0 && (0, d.b3)(u),
            j = !A && u.length > 0,
            E = (0, cn.n)(ve.Yv, {
              onCompleted: function(e) {
                e && (y(Object.values(e)[0]), v(''))
              }
            }),
            O = (0, i.A)(E, 1)[0]
          return (0, w.jsx)(mn, {
            children: (0, w.jsxs)(w.Fragment, {
              children: [
                l
                  ? null
                  : p && !g
                  ? (0, w.jsx)(ye.A, {
                      txHash: m,
                      onConfirmed: function() {
                        b(), n()
                      }
                    })
                  : (0, w.jsxs)(V.Ay, {
                      onClick: f,
                      'data-testid': 'addsubdomain',
                      children: ['+ ', o('singleName.subdomains.add')]
                    }),
                l &&
                  (0, w.jsxs)(pn, {
                    children: [
                      (0, w.jsx)(gn, {
                        value: u,
                        onChange: function(e) {
                          return v(e.target.value)
                        },
                        valid: A,
                        invalid: j,
                        placeholder: 'Type in a label for your subdomain',
                        large: !0
                      }),
                      A
                        ? (0, w.jsx)(un.Ay, {
                            stopEditing: x,
                            isValid: A,
                            mutation: function() {
                              O({
                                variables: {
                                  name: ''.concat(u, '.').concat(t.name)
                                }
                              }).then(function() {
                                n()
                              })
                            }
                          })
                        : (0, w.jsx)(un.Ay, { stopEditing: x, disabled: !0 })
                    ]
                  })
              ]
            })
          })
        },
        xn = n(23920),
        hn = n(39024),
        vn = n(56152),
        yn = [
          'domain',
          'isOwner',
          'loadingIsParentMigrated',
          'isParentMigratedToNewRegistry',
          'isMigratedToNewRegistry',
          'loadingIsMigrated',
          'readOnly'
        ]
      var bn = (0, x.A)('div', { target: 'e13xwi7f0' })({
          name: 'eiu6m8',
          styles: 'padding-bottom:30px;padding-left:40px;padding-right:40px;'
        }),
        An = (0, x.A)(b.H2, { target: 'e13xwi7f1' })({
          name: '10cw8yj',
          styles: 'padding:20px 0 50px;text-align:center;color:#ccd4da;'
        })
      function jn(e) {
        var t = e.domain,
          n = e.canAddSubdomain
        return (0, w.jsx)(dn.X, {
          query: u.zA,
          variables: { name: t.name },
          children: function(e) {
            var r = e.loading,
              i = e.error,
              a = e.data,
              s = e.refetch,
              o =
                a &&
                a.getSubDomains &&
                a.getSubDomains.subDomains &&
                a.getSubDomains.subDomains.filter(function(e) {
                  return 0 !== parseInt(e.owner, 16)
                }),
              l = o && 0 === o.length
            return (
              i && console.log('error getting subdomains', i),
              r
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(wn, {
                        domain: t,
                        refetch: s,
                        canAddSubdomain: n
                      }),
                      (0, w.jsx)(m.A, { withWrap: !0, large: !0 })
                    ]
                  })
                : l
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(wn, {
                        domain: t,
                        refetch: s,
                        canAddSubdomain: n
                      }),
                      (0, w.jsx)(An, {
                        children: 'No subdomains have been added.'
                      })
                    ]
                  })
                : (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(wn, {
                        domain: t,
                        refetch: s,
                        canAddSubdomain: n
                      }),
                      o &&
                        o.map(function(e) {
                          return (0,
                          w.jsx)(xn.A, { name: e.name, owner: e.owner, labelhash: e.labelHash, canDeleteSubdomain: n, refetch: s })
                        })
                    ]
                  })
            )
          }
        })
      }
      function wn(e) {
        var t = e.domain,
          n = e.refetch
        return e.canAddSubdomain
          ? (0, w.jsx)(fn, { domain: t, refetch: n })
          : null
      }
      var En,
        On = function(e) {
          var t = e.domain,
            n = e.isOwner,
            r = e.loadingIsParentMigrated,
            i = e.isParentMigratedToNewRegistry,
            a = e.isMigratedToNewRegistry,
            s = e.loadingIsMigrated,
            l = e.readOnly,
            d = void 0 !== l && l,
            c = (0, ln.A)(e, yn),
            p = (0, h.B)().t,
            g = (0, o.I)(u.pp, { variables: { name: t.name } }).data,
            f = (void 0 === g ? {} : g).wildcardResolverDomain,
            x = !d && n && !r && !s && i && a
          return (0, w.jsx)(
            bn,
            (0, R.A)(
              (0, R.A)({}, c),
              {},
              {
                children:
                  0 !== parseInt(t.owner, 16)
                    ? (0, w.jsx)(dn.X, {
                        query: u.hT,
                        variables: { id: (0, hn.getNamehash)(t.name) },
                        children: function(e) {
                          var r = e.loading,
                            i = e.error,
                            a = e.data,
                            s = e.refetch,
                            o =
                              a &&
                              a.domain &&
                              a.domain.subdomains &&
                              a.domain.subdomains.filter(function(e) {
                                return 0 !== parseInt(e.owner.id, 16)
                              })
                          return !i && a && a.domain
                            ? r
                              ? (0, w.jsx)(w.Fragment, {
                                  children: (0, w.jsx)(m.A, {
                                    withWrap: !0,
                                    large: !0
                                  })
                                })
                              : f
                              ? (0, w.jsx)(An, {
                                  children: p('singleName.subdomains.wildcard')
                                })
                              : o && 0 === o.length
                              ? (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)(wn, {
                                      domain: t,
                                      refetch: s,
                                      canAddSubdomain: x
                                    }),
                                    (0, w.jsx)(An, {
                                      children: p(
                                        'singleName.subdomains.nosubdomains'
                                      )
                                    })
                                  ]
                                })
                              : null === a.domain
                              ? (0, w.jsx)(jn, {
                                  domain: t,
                                  isOwner: n,
                                  canAddSubdomain: x
                                })
                              : (0, w.jsxs)(w.Fragment, {
                                  children: [
                                    (0, w.jsx)(wn, {
                                      domain: t,
                                      refetch: s,
                                      canAddSubdomain: x
                                    }),
                                    o.map(function(e) {
                                      var n, r
                                      return (
                                        (r =
                                          '[root]' === t.name
                                            ? ''
                                            : '.'.concat(t.name)),
                                        (n =
                                          null !== e.labelName
                                            ? ''.concat(e.labelName).concat(r)
                                            : ''
                                                .concat((0, vn.pE)(e.labelhash))
                                                .concat(r)),
                                        (0, w.jsx)(xn.A, {
                                          showBlockies: !0,
                                          name: n,
                                          isMigrated: e.isMigrated,
                                          owner: e.owner.id,
                                          labelhash: e.labelHash,
                                          isSubdomain: !0,
                                          canDeleteSubdomain: x,
                                          refetch: s
                                        })
                                      )
                                    })
                                  ]
                                })
                            : (console.error(
                                'Unable to get subdomains from subgraph, falling back to web3 ',
                                i
                              ),
                              (0, w.jsx)(jn, {
                                domain: t,
                                isOwner: n,
                                canAddSubdomain: x
                              }))
                        }
                      })
                    : (0, w.jsx)(An, {
                        children: p(
                          f
                            ? 'singleName.subdomains.wildcard'
                            : 'singleName.subdomains.nosubdomains'
                        )
                      })
              }
            )
          )
        },
        kn = [
          {
            state: 'ENABLE_DNSSEC',
            title: 'Problem fetching data from DNS',
            displayError: !0
          },
          {
            state: 'ENABLE_DNSSEC',
            title: 'DNS entry does not exist.',
            displayError: !0
          },
          { state: 'ENABLE_DNSSEC', title: 'Please enable DNSSEC' },
          {
            state: 'ADD_TEXT',
            title: 'Please add text record into _ens.name.tld'
          },
          {
            state: 'ADD_TEXT',
            title: 'DNS Record is invalid',
            displayError: !0
          },
          {
            state: 'SUBMIT_PROOF',
            title: 'Ready to register',
            explainer:
              "*Click 'refresh' if you make changes to the domain in the DNS Registrar."
          },
          {
            state: 'SUBMIT_PROOF',
            title: 'DNS is out of sync',
            explainer:
              "The Controller and DNS Owner are out of sync. Click 'sync' to make the DNS Owner the Controller. Click 'refresh' if you make changes to the domain in the DNS Registrar.",
            outOfSync: !0
          },
          {
            state: 'SUBMIT_PROOF',
            title: 'Registry is out of date',
            explainer:
              "Click 'sync' to make the DNS Owner the Controller. Click 'refresh' if you make changes to the domain in the DNS Registrar.",
            outOfSync: !0
          },
          {
            state: 'ADD_TEXT',
            title: 'DNS Record does not exist',
            displayError: !0
          }
        ],
        Rn = n(47246),
        Cn = n(38180),
        Sn = ['title', 'titleId']
      function Tn() {
        return (
          (Tn = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Tn.apply(this, arguments)
        )
      }
      function In(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function Nn(e, t) {
        var n = e.title,
          r = e.titleId,
          i = In(e, Sn)
        return s.createElement(
          'svg',
          Tn(
            {
              width: '25px',
              height: '20px',
              viewBox: '0 0 25 20',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          En ||
            (En = s.createElement(
              'g',
              {
                id: 'Symbols',
                stroke: 'none',
                strokeWidth: 1,
                fill: 'none',
                fillRule: 'evenodd'
              },
              s.createElement(
                'g',
                { id: 'Registrar-Icon' },
                s.createElement(
                  'g',
                  null,
                  s.createElement('rect', {
                    id: 'Rectangle-2',
                    fill: '#4B84FF',
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 20,
                    rx: 3
                  }),
                  s.createElement('path', {
                    d:
                      'M20,15.8125 C20,15.928875 20.0525,16.04 20.1465,16.1218125 L22.1465,17.8718125 C22.244,17.957125 22.372,18 22.5,18 C22.628,18 22.756,17.957125 22.8535,17.8718125 L24.8535,16.1218125 C24.9475,16.04 25,15.928875 25,15.8125 L25,4 L20,4 L20,15.8125 Z',
                    id: 'Fill-4',
                    fill: '#4B84FF'
                  }),
                  s.createElement('path', {
                    d:
                      'M22,0 L23,0 C24.1045695,-2.02906125e-16 25,0.8954305 25,2 L25,3 L20,3 L20,2 C20,0.8954305 20.8954305,2.02906125e-16 22,0 Z',
                    id: 'Rectangle-6',
                    fill: '#4B84FF'
                  }),
                  s.createElement('rect', {
                    id: 'Rectangle-3',
                    fill: '#FFFFFF',
                    transform:
                      'translate(6.000000, 5.000000) scale(1, -1) translate(-6.000000, -5.000000) ',
                    x: 2,
                    y: 4,
                    width: 8,
                    height: 2,
                    rx: 1
                  }),
                  s.createElement('rect', {
                    id: 'Rectangle-3-Copy',
                    fill: '#FFFFFF',
                    transform:
                      'translate(6.000000, 9.000000) scale(1, -1) translate(-6.000000, -9.000000) ',
                    x: 2,
                    y: 8,
                    width: 8,
                    height: 2,
                    rx: 1
                  })
                )
              )
            ))
        )
      }
      var Dn,
        Mn = s.forwardRef(Nn),
        Pn = (n.p, n(45168))
      var _n = (0, x.A)('div', { target: 'e1t0x4r30' })({
          name: 'wvx5d0',
          styles: 'background:#f0f6fa;padding:20px 40px;margin-bottom:40px;'
        }),
        Fn = (0, x.A)('header', { target: 'e1t0x4r31' })({
          name: '1pv6511',
          styles:
            'display:flex;position:relative;align-items:center;&:hover{cursor:pointer;}'
        }),
        Bn = (0, x.A)(Pn.A, { target: 'e1t0x4r32' })(
          'position:absolute;right:0;top:50%;transform:translateY(-50%) ',
          function(e) {
            return e.rotated ? 'rotate(0)' : 'rotate(-90deg)'
          },
          ';'
        ),
        zn = (0, x.A)('h2', { target: 'e1t0x4r33' })({
          name: '1bux7f4',
          styles: 'margin:0;margin-left:10px;font-size:20px;font-weight:300;'
        }),
        Ln = (0, x.A)('div', { target: 'e1t0x4r34' })(
          'display:',
          function(e) {
            return e.open ? 'flex' : 'none'
          },
          ';flex-direction:column;',
          v.Ay.large(Dn || (Dn = (0, a.A)(['\n    flex-direction: row;\n  ']))),
          ''
        ),
        qn = (0, x.A)('section', { target: 'e1t0x4r35' })({
          name: 'jq9e8o',
          styles:
            'margin-right:40px;&:last-child{margin-right:0;}h3{font-size:18px;font-weight:300;}p{font-size:14px;font-weight:300;}'
        })
      var Un = function(e) {
        var t = e.initialState,
          n = void 0 !== t && t,
          r = (0, h.B)().t,
          a = (0, s.useState)(n),
          o = (0, i.A)(a, 2),
          l = o[0],
          d = o[1],
          c = (0, s.useState)(n),
          u = (0, i.A)(c, 2),
          m = u[0],
          p = u[1]
        return (
          m !== n && (p(n), d(n)),
          (0, w.jsxs)(_n, {
            children: [
              (0, w.jsxs)(Fn, {
                onClick: function() {
                  return d(!l)
                },
                children: [
                  (0, w.jsx)(Mn, {}),
                  (0, w.jsx)(zn, { children: r('singleName.learnmore.title') }),
                  (0, w.jsx)(Bn, { rotated: l ? 1 : 0 })
                ]
              }),
              (0, w.jsxs)(Ln, {
                open: l,
                children: [
                  (0, w.jsxs)(qn, {
                    children: [
                      (0, w.jsx)('h3', {
                        children: r('singleName.learnmore.step1.title')
                      }),
                      (0, w.jsx)('p', {
                        children: r('singleName.learnmore.step1.text')
                      })
                    ]
                  }),
                  (0, w.jsxs)(qn, {
                    children: [
                      (0, w.jsx)('h3', {
                        children: r('singleName.learnmore.step2.title')
                      }),
                      (0, w.jsx)('p', {
                        children: r('singleName.learnmore.step2.text')
                      })
                    ]
                  }),
                  (0, w.jsxs)(qn, {
                    children: [
                      (0, w.jsx)('h3', {
                        children: r('singleName.learnmore.step3.title')
                      }),
                      (0, w.jsx)('p', {
                        children: r('singleName.learnmore.step3.text')
                      })
                    ]
                  })
                ]
              }),
              ' '
            ]
          })
        )
      }
      var Hn,
        Vn,
        Yn,
        Wn,
        Xn,
        Kn,
        Gn,
        $n = (0, x.A)('div', { target: 'e1qt7kvb0' })({
          name: '1y5545',
          styles:
            'display:flex;justify-content:space-between;align-items:center;font-size:18px;color:#2b2b2b;padding:20px 35px;background:hsla(37,91%,55%,0.1);margin-bottom:20px;'
        }),
        Jn = (0, x.A)('div', { target: 'e1qt7kvb1' })({
          name: '171h33i',
          styles: 'width:calc(100% - 120px);padding-right:20px;'
        }),
        Zn = (0, x.A)('p', { target: 'e1qt7kvb2' })({
          name: '1bhkadk',
          styles: 'font-size:14px;color:#2b2b2b;font-weight:500;'
        }),
        Qn = (0, x.A)(V.St, { target: 'e1qt7kvb3' })({
          name: '1nxjwa5',
          styles: 'flex:2 1 auto;'
        })
      function er(e) {
        var t,
          n = e.domain,
          r = e.account,
          a = e.dnssecmode,
          s = e.refetchIsMigrated,
          l = e.isParentMigratedToNewRegistry,
          d = e.loadingIsParentMigrated,
          m = e.readOnly,
          p = void 0 !== m && m,
          g = (0, h.B)().t,
          f = (0, c.Yz)(),
          x = f.state,
          v = f.actions,
          y = x.txHash,
          b = x.pending,
          A = x.confirmed,
          j = v.startPending,
          E = v.setConfirmed,
          O = (0, o.I)(u.HP, { variables: { address: n.owner } }),
          k = O.data,
          R = (void 0 === k ? {} : k).isContractController,
          C = (O.loading,
          (0, cn.n)(ve.gz, {
            variables: { name: n.name, address: n.owner },
            onCompleted: function(e) {
              j(Object.values(e)[0])
            }
          })),
          S = (0, i.A)(C, 1)[0]
        t = !R && (!p && !d && l && r === n.parentOwner)
        var T = g('registrymigration.messages.controller'),
          I = (0, w.jsx)(Rn.x, {
            i18nKey: 'registrymigration.messages.default',
            values: { parent: n.parent }
          }),
          N = (0, w.jsx)(Rn.x, {
            i18nKey: 'registrymigration.messages.parentmigrate',
            values: { parent: n.parent }
          }),
          D = g('registrymigration.messages.dnssec')
        return (0, w.jsxs)($n, {
          children: [
            (0, w.jsxs)(Jn, {
              children: [
                R ? T : l ? (a ? D : I) : N,
                'nzt' !== n.parent &&
                  !a &&
                  (0, w.jsx)(Zn, {
                    children: g('registrymigration.donotaccept')
                  })
              ]
            }),
            b && !A && y
              ? (0, w.jsx)(ye.A, {
                  txHash: y,
                  onConfirmed: function() {
                    E(), s()
                  }
                })
              : (0, w.jsx)(Qn, {
                  'data-testid': 'registry-migrate-button-'.concat(
                    t ? 'enabled' : 'disabled'
                  ),
                  onClick: t ? S : function() {},
                  type: t ? 'hollow-primary' : 'hollow-primary-disabled',
                  href: '#',
                  children: g('c.migrate')
                })
          ]
        })
      }
      var tr = (0, x.A)('div', { target: 'ej4i8zc0' })(
          'display:flex;justify-content:flex-start;flex-direction:column;margin-bottom:20px;',
          v.Ay.small(
            Hn ||
              (Hn = (0, a.A)([
                '\n    align-items: center;\n    margin-bottom: 20px;\n  '
              ]))
          ),
          ' ',
          function(e) {
            return e.uneditable
              ? v.Ay.small(
                  Vn || (Vn = (0, a.A)(['\n    flex-direction: row;\n  ']))
                )
              : v.Ay.small(Yn || (Yn = (0, a.A)(['flex-direction: row;'])))
          },
          ''
        ),
        nr = (0, x.A)('div', { target: 'ej4i8zc1' })(
          'color:',
          function(e) {
            return e.greyed ? '#CCD4DA' : '2b2b2b'
          },
          ';font-size:14px;letter-spacing:0px;font-weight:600;text-transform:uppercase;flex-shrink:0;display:flex;margin-bottom:20px;',
          v.Ay.small(
            Wn ||
              (Wn = (0, a.A)([
                '\n    align-items: center;\n    margin-bottom: 0;\n    font-size: 16px;\n    max-width: 220px;\n    min-width: 180px;\n  '
              ]))
          ),
          ''
        ),
        rr = (0, x.A)('div', { target: 'ej4i8zc2' })(
          'font-size:14px;font-weight:100;font-family:Overpass Mono;white-space:nowrap;overflow:hidden;display:inline-flex;text-overflow:ellipsis;',
          v.Ay.small(
            Xn ||
              (Xn = (0, a.A)([
                '\n    font-size: 18px;\n    align-items: center;\n  '
              ]))
          ),
          ' ',
          function(e) {
            return (
              e.editing &&
              e.editable &&
              v.Ay.small(
                Kn || (Kn = (0, a.A)(['\n      padding-right: 5px;\n    ']))
              )
            )
          },
          ' a{display:flex;overflow:hidden;}'
        ),
        ir = (0, x.A)('div', { target: 'ej4i8zc3' })(
          'display:flex;justify-content:flex-start;position:relative;flex-direction:column;width:100%;',
          function(e) {
            return e.editing && 'margin-bottom: 30px'
          },
          ';transition:0.3s;',
          v.Ay.small(
            Gn ||
              (Gn = (0, a.A)([
                '\n    flex-direction: row;\n    align-items: center;\n  '
              ]))
          ),
          ''
        ),
        ar = n(12516),
        sr = n(64467),
        or = n(62038),
        lr = n(43783),
        dr = n(23139),
        cr = n(29489),
        ur = n(73525)
      var mr,
        pr = (0, x.A)(pe.N_, { target: 'e1la3kvw0' })({
          name: '93uuk2',
          styles:
            'display:inline-block;align-items:center;text-overflow:ellipsis;font-family:Overpass Mono;'
        }),
        gr = function(e) {
          var t = e.children,
            n = e.address,
            r = e.className,
            i = e.ariaLabel
          return (0, w.jsx)(pr, {
            to: '/address/'.concat(n),
            className: r,
            'aria-label': i,
            children: t
          })
        },
        fr = ['title', 'titleId']
      function xr() {
        return (
          (xr = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          xr.apply(this, arguments)
        )
      }
      function hr(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              i = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]))
        }
        return i
      }
      function vr(e, t) {
        var n = e.title,
          r = e.titleId,
          i = hr(e, fr)
        return s.createElement(
          'svg',
          xr(
            {
              width: 17,
              height: 17,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': r
            },
            i
          ),
          n ? s.createElement('title', { id: r }, n) : null,
          mr ||
            (mr = s.createElement(
              'g',
              { fill: '#ADBBCD', fillRule: 'evenodd' },
              s.createElement('path', {
                d:
                  'M1.165 11.51l.009.01-1.088 3.814c-.334 1.17.334 1.867 1.533 1.532l3.795-1.107.007.007 8.316-8.315-4.256-4.257-8.316 8.316zM16.457 2.376L14.562.48c-.64-.641-1.7-.641-2.369 0l-1.588 1.588 4.264 4.264 1.588-1.588c.669-.67.669-1.728 0-2.37'
              })
            ))
        )
      }
      var yr = s.forwardRef(vr),
        br = (n.p,
        (0, x.A)(yr, { target: 'etri3e90' })(
          function(e) {
            return e.disabled && '\n     g {\n       fill: #ADBBCD;\n     }\n  '
          },
          ' &:hover{g{transition:0.2s;fill:#5384fe;}cursor:pointer;}',
          function(e) {
            return (
              e.disabled &&
              '\n    &:hover {\n      cursor: default;\n      g {\n        fill: #ADBBCD;\n      }\n    }\n  '
            )
          },
          ''
        )),
        Ar = n(82318),
        jr = n(25738),
        wr = n(61476)
      var Er = (0, x.A)('span', { target: 'eb6iuf10' })({
          name: '1uy5cri',
          styles: 'margin:0 5px;position:relative;&:hover{cursor:pointer;}'
        }),
        Or = (0, x.A)('span', { target: 'eb6iuf11' })({
          name: '6xix1i',
          styles: 'font-size:16px;'
        })
      var kr,
        Rr,
        Cr,
        Sr,
        Tr,
        Ir = function(e) {
          var t = e.value,
            n = e.iconColour,
            r = (0, s.useState)(!1),
            a = (0, i.A)(r, 2),
            o = a[0],
            l = a[1]
          return (0, w.jsx)(Er, {
            children: o
              ? (0, w.jsx)(Or, { children: 'Copied' })
              : (0, w.jsx)(wr.CopyToClipboard, {
                  text: t,
                  onCopy: function() {
                    l(!0),
                      setTimeout(function() {
                        return l(!1)
                      }, 1e3)
                  },
                  children: (0, w.jsx)('svg', {
                    width: '13',
                    height: '16',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: (0, w.jsxs)('g', {
                      fill: n || '#5384FE',
                      fillRule: 'nonzero',
                      children: [
                        (0, w.jsx)('path', {
                          d:
                            'M11.937 16H.968C.444 16 0 15.56 0 15.004V.882C0 .392.381 0 .857 0h6.778c.38 0 .682.31.682.702a.687.687 0 01-.682.702h-6.27V14.63h10.27V5.176c0-.392.302-.703.682-.703.381 0 .683.31.683.703v9.746c-.016.588-.492 1.078-1.063 1.078z'
                        }),
                        (0, w.jsx)('path', {
                          d:
                            'M7.926 6a.864.864 0 01-.64-.259C7.101 5.551 7 5.275 7 4.947V.907h.724H7c0-.155 0-.638.454-.845.169-.07.505-.156.875.207l4.376 4.212c.27.259.37.621.236.95-.118.327-.438.534-.825.534L7.926 6zm.504-3.625v2.14l2.222-.017L8.43 2.375z'
                        })
                      ]
                    })
                  })
                })
          })
        }
      var Nr = (0, x.A)(jr.A, { target: 'em9ajyt0' })({
          name: '1r2f04i',
          styles: 'margin-bottom:10px;'
        }),
        Dr = (0, x.A)(gr, { target: 'em9ajyt1' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;'
        }),
        Mr = (0, x.A)('span', { target: 'em9ajyt2' })({
          name: '1uaoyub',
          styles:
            'display:block;align-items:center;overflow:hidden;text-overflow:ellipsis;'
        }),
        Pr = (0, x.A)(Ar.A, { target: 'em9ajyt3' })({
          name: '6su6fj',
          styles: 'flex-shrink:0;'
        }),
        _r = (0, x.A)(V.Ay, { target: 'em9ajyt4' })({
          name: '1s16w59',
          styles: 'width:130px;'
        }),
        Fr = (0, x.A)('span', { target: 'em9ajyt5' })(
          'color:#f6412d;margin-right:auto;margin-bottom:1em;',
          v.Ay.small(kr || (kr = (0, a.A)(['\n    margin-bottom: 0em;\n  ']))),
          ''
        ),
        Br = (0, x.A)(tr, { target: 'em9ajyt6' })(
          'flex-direction:column;min-height:30px;background:',
          function(e) {
            var t = e.editing
            return 'warning' === e.backgroundStyle
              ? 'transparent'
              : t
              ? '#F0F6FA'
              : 'transparent'
          },
          ';padding:',
          function(e) {
            return e.editing ? '20px' : '0'
          },
          ';',
          function(e) {
            return e.editing ? 'margin-bottom: 20px;' : ''
          },
          ' transition:0.3s;',
          function(e) {
            return (
              e.editing &&
              v.Ay.small(Rr || (Rr = (0, a.A)([' flex-direction: column;'])))
            )
          },
          ';'
        ),
        zr = (0, x.A)(rr, { target: 'em9ajyt7' })(
          function(e) {
            return (
              e.expiryDate &&
              '\n      overflow: inherit;\n      display: flex;\n       align-items: flex-start;\n      flex-direction: column;\n  '
            )
          },
          ' ',
          function(e) {
            return (
              e.expiryDate &&
              v.Ay.medium(
                Cr ||
                  (Cr = (0, a.A)([
                    '\n      margin-top: -16px;\n      align-items: center;\n      flex-direction: row;\n  '
                  ]))
              )
            )
          },
          ''
        ),
        Lr = (0, x.A)('span', { target: 'em9ajyt8' })({
          name: 'lvyu5j',
          styles: 'margin-right:10px;'
        }),
        qr = (0, x.A)(or.PY.div, { target: 'em9ajyt9' })({
          name: '8atqhb',
          styles: 'width:100%;'
        }),
        Ur = (0, x.A)(Et.A, { target: 'em9ajyt10' })({
          name: 'uewl2b',
          styles: 'margin-bottom:20px;'
        }),
        Hr = (0, x.A)(or.PY.div, { target: 'em9ajyt11' })(
          'margin-left:0;margin-top:20px;',
          v.Ay.small(
            Sr ||
              (Sr = (0, a.A)([
                '\n     margin-left: auto;\n  align-self: center;\n  margin-top: -10px;\n  '
              ]))
          ),
          ''
        ),
        Vr = (0, x.A)(ye.A, { target: 'em9ajyt12' })({
          name: 'r4f1vu',
          styles:
            'position:absolute;right:10px;top:50%;transform:translate(0,-65%);'
        }),
        Yr = (0, x.A)('a', { target: 'em9ajyt13' })({
          name: '1sdy15s',
          styles: 'display:flex;padding-right:20px;&:hover{cursor:pointer;}'
        }),
        Wr = (0, x.A)(gt.A, { target: 'em9ajyt14' })(''),
        Xr = (0, x.A)('div', { target: 'em9ajyt15' })({
          name: '1m9e5lb',
          styles:
            'display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;'
        }),
        Kr = (0, x.A)('span', { target: 'em9ajyt16' })({
          name: 'smvb43',
          styles: 'color:#f6412d;margin-left:3em;margin-right:auto;'
        }),
        Gr = (0, x.A)('div', { target: 'em9ajyt17' })({
          name: '4uld8v',
          styles:
            'color:#f5a524;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;font-weight:bold;& > svg{width:11px;height:11px;}'
        }),
        $r = or.PY.custom(un.Ay)
      function Jr(e) {
        var t = e.keyName,
          n = e.t,
          r = e.isExpiredRegistrant
        switch (t) {
          case 'Resolver':
          case 'Controller':
            return n('singleName.tooltips.detailsItem.'.concat(t))
          case 'registrant':
            return n(
              r
                ? 'singleName.tooltips.detailsItem.'.concat(t, 'Expired')
                : 'singleName.tooltips.detailsItem.'.concat(t)
            )
          default:
            return 'You can only make changes if you are the controller and are logged into your wallet'
        }
      }
      function Zr(e, t, n) {
        var r = n.newValue,
          i = n.presetValue,
          a = n.updateValue,
          s = n.isValid,
          o = n.isInvalid,
          l = n.name,
          d = n.ethUsdPriceLoading,
          c = n.ethUsdPrice,
          u = n.years,
          m = n.setYears,
          p = n.duration,
          g = n.expirationDate,
          f = n.rentPriceLoading,
          x = n.rentPrice,
          h = n.placeholder
        if ('Expiration Date' === e)
          return (0, w.jsx)(Wr, {
            name: l.split('.')[0],
            duration: p,
            years: u,
            setYears: function(e) {
              m(e), a((0, F.Yq)(g))
            },
            ethUsdPriceLoading: d,
            ethUsdPrice: c,
            expirationDate: g,
            loading: f,
            price: x
          })
        var v = (0, cr.Bt)(),
          y = window.ethereum || window.web3
        if ('address' === t && 'Resolver' !== e) {
          var b = {
            presetValue: i || '',
            provider: y,
            onResolve: function(e) {
              var t = e.address
              a(t || '')
            },
            ensAddress: v
          }
          return (0, w.jsx)(Nr, (0, R.A)({}, b))
        }
        return (0, w.jsx)(Ur, {
          value: r,
          onChange: function(e) {
            return a(e.target.value.trim())
          },
          valid: s,
          invalid: o,
          placeholder: 'Resolver' === e ? h : '',
          large: !0
        })
      }
      var Qr = function(e) {
        e.isExpired
        var t,
          n,
          r = e.showLabel,
          l = void 0 === r || r,
          m = e.editButtonType,
          p = void 0 === m ? 'primary' : m,
          g = e.backgroundStyle,
          f = void 0 === g ? 'blue' : g,
          x = e.keyName,
          v = e.value,
          y = e.type,
          b = e.mutation,
          A = e.mutationButton,
          j = e.editButton,
          E = e.domain,
          O = e.variableName,
          k = e.refetch,
          R = (e.confirm, e.copyToClipboard),
          C = e.needsToBeMigrated,
          I = (0, h.B)().t,
          N = (0, c.Yz)(),
          D = N.state,
          M = N.actions,
          P = (0, s.useState)(''),
          _ = (0, i.A)(P, 2),
          B = _[0],
          z = (_[1], D.editing),
          L = D.newValue,
          q = D.txHash,
          U = D.pending,
          H = D.confirmed,
          V = M.startEditing,
          Y = M.stopEditing,
          W = M.updateValue,
          X = M.startPending,
          K = M.setConfirmed,
          G = (0, s.useState)(1),
          $ = (0, i.A)(G, 2),
          J = $[0],
          Z = $[1]
        'Expiration Date' === x &&
          ((t = (0, F.P0)(J)), (n = new Date(new Date(v).getTime() + 1e3 * t)))
        var Q = (0, o.I)(u.Lv, { skip: 'Expiration Date' !== x }),
          ee = Q.data,
          te = void 0 === ee ? {} : ee,
          ne = Q.loading,
          re = null === te || void 0 === te ? void 0 : te.getEthPrice,
          ie = (0, o.I)(u.PB, {
            variables: { duration: t, label: E.label },
            skip: 'Expiration Date' !== x
          }),
          ae = ie.data,
          se = (void 0 === ae ? {} : ae).getRentPrice,
          oe = ie.loading,
          le = 'Resolver' === x && d._W.isAddress(L) && L !== d.wI,
          de = (0, o.I)(u.HP, { variables: { address: L }, skip: !le }).data,
          ce = (void 0 === de ? {} : de).isContractController,
          ue = (function(e, t, n) {
            switch (e) {
              case 'Expiration Date':
                return !0
              case 'Resolver':
                return !!n
              default:
                return d._W.isAddress(t) && t !== d.wI
            }
          })(x, L, ce),
          me = !ue && L.length > 0,
          pe = (0, T.F)(),
          fe = (0, d.$X)(E, pe),
          ye = !E.available && E.registrant === pe,
          be = ['Resolver'].includes(x),
          Ae = I('singleName.resolver.placeholder'),
          je = (0, cn.n)(b, {
            onCompleted: function(e) {
              var t = Object.values(e)[0]
              X(t),
                'Expiration Date' === x &&
                  (0, he.H9)({
                    labels: [E.label],
                    transactionId: t,
                    type: 'renew',
                    price: new xe.A(''.concat(se._hex))
                      .toEth()
                      .mul(re)
                      .toFixed(2),
                    years: J
                  })
            }
          }),
          we = (0, i.A)(je, 1)[0],
          Ee = (0, cn.n)(
            (function(e, t) {
              switch (e) {
                case 'Controller':
                  return t ? ve.Ov : ve.$M
                case 'Resolver':
                  return ve.S5
                default:
                  return ve.Ov
              }
            })(x, fe),
            {
              variables: { name: E.name, address: d.wI },
              onCompleted: function(e) {
                X(Object.values(e)[0])
              }
            }
          ),
          ke = (0, i.A)(Ee, 1)[0],
          Re = (0, o.I)(u.So, { fetchPolicy: 'network-only' }),
          Ce = Re.data,
          Se = Re.loading
        return (0, w.jsxs)(Br, {
          editing: z,
          backgroundStyle: f,
          children: [
            (0, w.jsxs)(ir, {
              editing: z,
              children: [
                l &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(nr, { children: I('c.'.concat(x)) }),
                      (0, w.jsxs)(zr, {
                        editing: z,
                        editable: !0,
                        'data-testid': 'details-value-'.concat(x.toLowerCase()),
                        expiryDate: 'date' === y,
                        children: [
                          'address' === y
                            ? (0, w.jsxs)(Dr, {
                                address: v,
                                ariaLabel: I('c.'.concat(x)),
                                children: [
                                  (0, w.jsx)(ur.M, {
                                    address: v,
                                    imageSize: 24
                                  }),
                                  'Resolver' === x &&
                                  'oldcontent' === E.contentType
                                    ? (0, w.jsx)(He.A, {
                                        text:
                                          '<p>This resolver is outdated and does not support the new content hash.<br/>Click the "Set" button to update  to the latest public resolver.</p>',
                                        position: 'top',
                                        border: !0,
                                        children: function(e) {
                                          var t = e.tooltipElement,
                                            n = e.showTooltip,
                                            r = e.hideTooltip
                                          return (0, w.jsxs)(w.Fragment, {
                                            children: [
                                              (0, w.jsx)(Pr, {
                                                onMouseOver: function() {
                                                  n()
                                                },
                                                onMouseLeave: function() {
                                                  r()
                                                }
                                              }),
                                              t
                                            ]
                                          })
                                        }
                                      })
                                    : null,
                                  (0, w.jsx)(Mr, { children: v })
                                ]
                              })
                            : 'date' === y
                            ? (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsx)(Lr, {
                                    tabIndex: 0,
                                    'aria-label': ''
                                      .concat(I('c.'.concat(x)))
                                      .concat((0, F.Yq)(v)),
                                    children: (0, F.Yq)(v)
                                  }),
                                  (0, w.jsx)(Oe, {
                                    css: (0, ge.AH)(
                                      Tr ||
                                        (Tr = (0, a.A)([
                                          '\n                      margin-right: 20px;\n                    '
                                        ]))
                                    ),
                                    name: E.name,
                                    owner: E.owner,
                                    registrant: E.registrant,
                                    startDatetime: S()(v)
                                      .utc()
                                      .local()
                                      .subtract(30, 'days')
                                  })
                                ]
                              })
                            : v,
                          R && (0, w.jsx)(Ir, { value: v })
                        ]
                      })
                    ]
                  }),
                z
                  ? null
                  : U && !H
                  ? (0, w.jsx)(Vr, {
                      txHash: q,
                      onConfirmed: function() {
                        'registrant' === x
                          ? (0, lr.AD)({
                              refetch: k,
                              interval: 300,
                              keyToCompare: 'registrant',
                              prevData: { singleName: E },
                              getterString: 'singleName'
                            })
                          : k(),
                          K()
                      }
                    })
                  : (0, w.jsx)(Hr, {
                      initial: { opacity: 0, x: 0 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 0 },
                      children: j
                        ? (0, w.jsx)(_r, {
                            type: p,
                            onClick: V,
                            'data-testid': 'edit-'.concat(x.toLowerCase()),
                            children: j
                          })
                        : (0, w.jsx)(br, {
                            onClick: V,
                            'data-testid': 'edit-'.concat(x.toLowerCase())
                          })
                    }),
                z && be && ('Controller' === x || 'Resolver' === x)
                  ? (0, w.jsx)(Hr, {
                      children: (0, w.jsx)(dr.A, {
                        'data-testid': 'delete-'.concat(y.toLowerCase()),
                        onClick: function(e) {
                          e.preventDefault(), ke()
                        }
                      })
                    })
                  : ''
              ]
            }),
            (0, w.jsx)(or.Ny, {
              children:
                z &&
                (0, w.jsxs)(or.PY.div, {
                  initial: { height: 0, width: 0, opacity: 0 },
                  animate: { height: 'auto', width: '100%', opacity: 1 },
                  exit: { height: 0, width: 0, opacity: 0 },
                  transition: { ease: 'easeOut', duration: 0.3 },
                  children: [
                    'Resolver' === x &&
                      !C &&
                      (0, w.jsxs)(Gr, {
                        children: [
                          (0, w.jsx)(Ne.h, {}),
                          (0, w.jsx)('p', {
                            style: { color: '#F5A524' },
                            children: I('singleName.resolver.info')
                          })
                        ]
                      }),
                    (0, w.jsx)(qr, {
                      initial: { scale: 0, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { scale: 0, opacity: 0 },
                      transition: { ease: 'easeOut', duration: 0.3 },
                      children: Zr(x, y, {
                        newValue: L,
                        updateValue: W,
                        presetValue: B,
                        isValid: ue,
                        isInvalid: me,
                        years: J,
                        name: E.name,
                        setYears: Z,
                        ethUsdPrice: re,
                        ethUsdPriceLoading: ne,
                        duration: t,
                        expirationDate: n,
                        rentPriceLoading: oe,
                        rentPrice: se,
                        placeholder: Ae
                      })
                    }),
                    (0, w.jsxs)(Xr, {
                      children: [
                        'Expiration Date' !== x || ye
                          ? ''
                          : (0, w.jsxs)(Fr, {
                              children: ['*', I('singleName.expiry.cannotown')]
                            }),
                        'Resolver' === x &&
                          (0, w.jsxs)(w.Fragment, {
                            children: [
                              le &&
                                !ce &&
                                (0, w.jsx)(Kr, {
                                  'data-testid': 'resolver-address-warning',
                                  children: I(
                                    'singleName.resolver.resolverAddressWarning'
                                  )
                                }),
                              !Se &&
                                (0, w.jsx)(Yr, {
                                  onClick: function(e) {
                                    e.preventDefault(),
                                      W(Ce.publicResolver.address)
                                  },
                                  children: I(
                                    'singleName.resolver.publicResolver'
                                  )
                                })
                            ]
                          }),
                        (0, w.jsx)($r, {
                          stopEditing: Y,
                          mutation: function() {
                            var e = (function(e, t) {
                              var n = t.domain,
                                r = t.variableName,
                                i = t.newValue,
                                a = t.duration
                              return 'Expiration Date' === e
                                ? { label: n.name.split('.')[0], duration: a }
                                : (0, sr.A)({ name: n.name }, r || 'address', i)
                            })(x, {
                              domain: E,
                              variableName: O,
                              newValue: L,
                              duration: t
                            })
                            we({ variables: e })
                          },
                          value: 'Expiration Date' === x ? (0, F.Yq)(v) : v,
                          newValue: 'Expiration Date' === x ? (0, F.Yq)(n) : L,
                          mutationButton: A,
                          confirm: !0,
                          isValid: ue
                        })
                      ]
                    })
                  ]
                })
            })
          ]
        })
      }
      function ei(e) {
        var t = e.editButton,
          n = e.value,
          r = e.keyName,
          a = e.type,
          s = e.deedOwner,
          o = e.isDeedOwner,
          l = e.domain,
          d = e.isExpiredRegistrant,
          c = e.copyToClipboard,
          u = (0, h.B)().t
        if (0 === parseInt(n, 16)) {
          var m = (function(e) {
              var t = e.keyName,
                n = e.parent,
                r = e.deedOwner,
                a = e.isDeedOwner,
                s = e.t,
                o = (function(e, t) {
                  switch (e) {
                    case 'Resolver':
                      return [t('singleName.messages.noresolver'), 'message']
                    case 'Controller':
                    case 'registrant':
                      return [t('singleName.messages.noowner'), 'message']
                    default:
                      return ['No 0x message set', 'message']
                  }
                })(t, s),
                l = (0, i.A)(o, 2),
                d = l[0],
                c = l[1]
              return (
                'Owner' === t &&
                  'nzt' === n &&
                  0 !== parseInt(r, 16) &&
                  ((d = s('singleName.messages.noresolver')),
                  a && (d += s('singleName.messages.notfinalise'))),
                [d, c]
              )
            })({
              keyName: r,
              parent: l.parent,
              deedOwner: s,
              isDeedOwner: o,
              t: u
            }),
            p = (0, i.A)(m, 2)
          ;(n = p[0]), (a = p[1])
        }
        return (0, w.jsx)(Br, {
          children: (0, w.jsxs)(ir, {
            children: [
              (0, w.jsx)(nr, { children: u('c.'.concat(r)) }),
              (0, w.jsxs)(zr, {
                'data-testid': 'details-value-'.concat(r.toLowerCase()),
                children: [
                  'address' === a
                    ? (0, w.jsxs)(Dr, {
                        address: n,
                        ariaLabel: u('c.'.concat(r)),
                        children: [
                          (0, w.jsx)(ur.M, { address: n, imageSize: 24 }),
                          n
                        ]
                      })
                    : 'date' === a
                    ? (0, F.Yq)(n)
                    : n,
                  c && (0, w.jsx)(Ir, { value: n })
                ]
              }),
              (0, w.jsx)(Hr, {
                children: t
                  ? (0, w.jsx)(He.A, {
                      text: Jr({ keyName: r, t: u, isExpiredRegistrant: d }),
                      position: 'top',
                      border: !0,
                      warning: !0,
                      offset: { left: -30, top: 10 },
                      children: function(e) {
                        var n = e.tooltipElement,
                          i = e.showTooltip,
                          a = e.hideTooltip
                        return (0, w.jsxs)(_r, {
                          onMouseOver: function() {
                            i()
                          },
                          onMouseLeave: function() {
                            a()
                          },
                          'data-testid': 'edit-'.concat(r.toLowerCase()),
                          type: 'disabled',
                          children: [t, n]
                        })
                      }
                    })
                  : (0, w.jsx)(br, {
                      'data-testid': 'edit-'.concat(r.toLowerCase()),
                      disabled: !0
                    })
              })
            ]
          })
        })
      }
      var ti = function(e) {
        return e.canEdit
          ? (0, w.jsx)(Qr, (0, R.A)({}, e))
          : (0, w.jsx)(ei, (0, R.A)({}, e))
      }
      var ni = (0, x.A)('span', { target: 'e1dzsw9j0' })({
          name: '105ef1v',
          styles:
            'color:white;background:#c7d3e3;border-radius:6px;border:1px solid #ededed;padding:0 2px;'
        }),
        ri = function() {
          return (0, w.jsx)(ni, { children: 'You' })
        }
      var ii = (0, x.A)(V.Ay, { target: 'e1pkge6c0' })({
          name: '1s16w59',
          styles: 'width:130px;'
        }),
        ai = (0, x.A)('div', { target: 'e1pkge6c1' })({
          name: '12efcmn',
          styles: 'position:absolute;'
        })
      var si = function(e) {
          var t = e.name,
            n = e.parentOwner,
            r = e.refetch,
            i = e.actionText
          console.log('SubmitProof', {
            name: t,
            parentOwner: n,
            refetch: r,
            actionText: i
          })
          var a = (0, c.Yz)(),
            s = a.state,
            o = a.actions,
            l = s.txHash,
            d = s.pending,
            u = s.confirmed,
            m = o.startPending
          return (0, w.jsx)(ai, {
            children:
              d && !u && l
                ? (0, w.jsx)(ye.A, {
                    txHash: l,
                    onConfirmed: function() {
                      r()
                    }
                  })
                : (0, w.jsx)(fe.s, {
                    mutation: ve.gl,
                    onCompleted: function(e) {
                      m(Object.values(e)[0])
                    },
                    children: function(e) {
                      return (0, w.jsx)(ii, {
                        onClick: function() {
                          e({ variables: { name: t, parentOwner: n } })
                        },
                        type: 'primary',
                        children: i
                      })
                    }
                  })
          })
        },
        oi = n(19853),
        li = n.n(oi),
        di = n(99558),
        ci = n.n(di),
        ui = n(19933),
        mi = n(19846),
        pi = n(30450),
        gi = n.n(pi),
        fi = n(10293)
      var xi = (0, x.A)(Et.A, { target: 'e1bykrvu0' })({
          name: '8atqhb',
          styles: 'width:100%;'
        }),
        hi = function(e) {
          var t = e.updateValue,
            n = e.isValid,
            r = e.isInvalid,
            i = e.dataType,
            a = e.contentType,
            s = e.placeholder,
            o = e.newValue
          return (0, w.jsx)(xi, {
            warning: 'content' === i && 'oldcontent' === a,
            valid: n,
            invalid: r,
            placeholder: s || (0, y.G_)(i, a),
            onChange: function(e) {
              t((0, y.Up)(a, e.target.value))
            },
            value: o
          })
        },
        vi = n(39874),
        yi = n(85501),
        bi = n(94794),
        Ai = n(97228)
      var ji,
        wi,
        Ei,
        Oi,
        ki,
        Ri = (0, x.A)('div', { target: 'er5bi6i0' })({
          name: '1hskriy',
          styles: 'width:250px;'
        }),
        Ci = {
          control: function(e) {
            return (0, R.A)(
              (0, R.A)({}, e),
              {},
              {
                backgroundColor: 'white',
                textTransform: 'lowercase',
                fontWeight: '700',
                fontSize: '12px',
                color: '#2B2B2B',
                letterSpacing: '0.5px'
              }
            )
          },
          option: function(e, t) {
            t.data
            var n = t.isDisabled,
              r = (t.isFocused, t.isSelected)
            return (0, R.A)(
              (0, R.A)({}, e),
              {},
              {
                backgroundColor: 'white',
                textTransform: 'lowercase',
                fontWeight: r ? 700 : 500,
                fontSize: '12px',
                letterSpacing: '0.5px',
                color: n ? '#ccc' : r ? 'black' : '#666',
                cursor: n ? 'not-allowed' : 'default'
              }
            )
          },
          input: function(e) {
            return (0, R.A)({}, e)
          },
          placeholder: function(e) {
            return (0, R.A)({}, e)
          },
          singleValue: function(e, t) {
            t.data
            return (0, R.A)({}, e)
          }
        },
        Si = (function(e) {
          function t() {
            return (0, $t.A)(this, t), (0, vi.A)(this, t, arguments)
          }
          return (
            (0, yi.A)(t, e),
            (0, Jt.A)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.selectedOption,
                    n = e.handleChange,
                    r = e.className,
                    i = e.addNewKey ? Ai.Ay : bi.Ay
                  return (0, w.jsx)(Ri, {
                    className: r,
                    children: (0, w.jsx)(
                      i,
                      (0, R.A)(
                        (0, R.A)(
                          { isHidden: !1, value: t, onChange: n },
                          this.props
                        ),
                        {},
                        {
                          styles: Ci,
                          theme: function(e) {
                            return (0, R.A)(
                              (0, R.A)({}, e),
                              {},
                              {
                                borderRadius: 10,
                                colors: (0, R.A)(
                                  (0, R.A)({}, e.colors),
                                  {},
                                  {
                                    text: 'orangered',
                                    primary25: 'blue',
                                    primary: '#cccccc'
                                  }
                                )
                              }
                            )
                          }
                        }
                      )
                    )
                  })
                }
              }
            ])
          )
        })(s.Component),
        Ti = Si
      var Ii = (0, x.A)('span', { target: 'ej3zq3e1' })(
          'font-family:Overpass;font-weight:bold;font-size:14px;color:#5284ff;letter-spacing:0.58px;text-align:center;&:hover{cursor:pointer;}',
          function(e) {
            return (
              e.pending &&
              '\n    color: #cccccc;\n    pointer-events: none;\n    \n    &:hover {\n      cursor: initial;\n    }\n  '
            )
          },
          ''
        ),
        Ni = (0, x.A)(Ti, { target: 'ej3zq3e2' })(
          'margin-right:20px;flex-direction:row;margin-bottom:10px;width:100%;',
          v.Ay.small(
            ji ||
              (ji = (0, a.A)([
                '\n    margin-bottom: 0px;\n    max-width: 150px;\n  '
              ]))
          ),
          ''
        ),
        Di = (0, x.A)('h3', { target: 'ej3zq3e3' })({
          name: 'h6kmv5',
          styles:
            'font-family:Overpass;font-weight:700;font-size:12px;color:#adbbcd;letter-spacing:0.5px;text-transform:uppercase;margin:0;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;'
        }),
        Mi = (0, x.A)('div', { target: 'ej3zq3e4' })({
          name: 'g62ntm',
          styles: 'background:#f0f6fa;'
        }),
        Pi = (0, x.A)('form', { target: 'ej3zq3e5' })({
          name: '1ruxp1v',
          styles: 'padding:20px;'
        }),
        _i = (0, x.A)('div', { target: 'ej3zq3e6' })(
          'display:flex;justify-content:space-between;margin-bottom:20px;flex-direction:column;',
          v.Ay.small(wi || (wi = (0, a.A)(['\n    flex-direction: row;\n  ']))),
          ''
        ),
        Fi = (v.Ay.medium(
          Ei ||
            (Ei = (0, a.A)([
              '\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  '
            ]))
        ),
        v.Ay.medium(
          Oi ||
            (Oi = (0, a.A)(['\n    width: 200px;\n    margin-right: 0px;\n  ']))
        ),
        v.Ay.small(
          ki ||
            (ki = (0, a.A)([
              '\n    margin-left: 20px;\n    margin-bottom: 20px;\n    max-width: 150px;\n  '
            ]))
        ),
        (0, x.A)('div', { target: 'ej3zq3e10' })({
          name: '1bvc4cc',
          styles: 'display:flex;justify-content:flex-end;'
        })),
        Bi = fi
          .slice()
          .sort()
          .map(function(e) {
            return { label: e, value: e }
          }),
        zi = ui.A.slice()
          .sort()
          .map(function(e) {
            return { label: e, value: e }
          }),
        Li = function(e, t, n) {
          e(null), t(null), n(null)
        },
        qi = (0, d.ZZ)(
          (function() {
            var e = (0, f.A)(
              (0, g.A)().mark(function e(t, n, r, i, a) {
                return (0, g.A)().wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return', !1)
                      case 2:
                        return (
                          a(!0),
                          (e.next = 5),
                          (0, y.eV)({
                            key: null === t || void 0 === t ? void 0 : t.value,
                            value: n,
                            contractFn:
                              null === r || void 0 === r
                                ? void 0
                                : r.contractFn,
                            addr: i.addr
                          })
                        )
                      case 5:
                        return e.abrupt('return', e.sent)
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function(t, n, r, i, a) {
              return e.apply(this, arguments)
            }
          })(),
          500
        ),
        Ui = function(e, t, n, r, i, a) {
          var o = (0, s.useRef)()
          ;(o.current = t),
            (0, s.useEffect)(
              function() {
                t &&
                  new Promise(
                    (0, f.A)(
                      (0, g.A)().mark(function s() {
                        var l
                        return (0, g.A)().wrap(function(s) {
                          for (;;)
                            switch ((s.prev = s.next)) {
                              case 0:
                                return (s.next = 2), qi(e, t, n, r, i)
                              case 2:
                                ;(l = s.sent), t === o.current && (a(l), i(!1))
                              case 4:
                              case 'end':
                                return s.stop()
                            }
                        }, s)
                      })
                    )
                  )
              },
              [t]
            )
        }
      function Hi(e) {
        var t = e.domain,
          n = e.emptyRecords,
          r = e.editing,
          a = e.startEditing,
          o = e.stopEditing,
          l = e.updateRecord,
          d = e.pending,
          u = (0, h.B)().t,
          m = (0, c.Yz)(),
          p = m.state,
          g = m.actions,
          f = p.newValue,
          x = g.updateValue,
          v = (0, s.useState)(null),
          b = (0, i.A)(v, 2),
          A = b[0],
          j = b[1],
          E = (0, s.useState)(null),
          O = (0, i.A)(E, 2),
          k = O[0],
          R = O[1],
          C = (0, s.useState)(!1),
          S = (0, i.A)(C, 2),
          T = S[0],
          I = S[1],
          N = (0, s.useState)(!1),
          D = (0, i.A)(N, 2),
          M = D[0],
          P = D[1]
        A && A.value && A.value, t.contentType, k && k.value
        return (
          Ui(k, f, A, t, P, I),
          (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsxs)(Di, {
                children: [
                  u('singleName.record.title'),
                  r
                    ? (0, w.jsx)(Ii, {
                        onClick: o,
                        pending: d,
                        children: 'Close Add/Edit Record'
                      })
                    : (0, w.jsx)(Ii, {
                        onClick: a,
                        pending: d,
                        children: 'Add/Edit Record'
                      })
                ]
              }),
              r &&
                (0, w.jsxs)(Pi, {
                  onSubmit: function(e) {
                    e.preventDefault()
                  },
                  children: [
                    (0, w.jsxs)(_i, {
                      children: [
                        (0, w.jsx)(Ni, {
                          selectedOption: A,
                          handleChange: function(e) {
                            'setContenthash' === e.contractFn
                              ? R('content')
                              : R(null),
                              j(e)
                          },
                          placeholder: 'Add record',
                          options: n
                        }),
                        'coins' ===
                          (null === A || void 0 === A ? void 0 : A.value) &&
                          (0, w.jsx)(Ni, {
                            selectedRecord: k,
                            handleChange: R,
                            placeholder: 'Coin',
                            options: zi
                          }),
                        'textRecords' ===
                          (null === A || void 0 === A ? void 0 : A.value) &&
                          (0, w.jsx)(Ni, {
                            selectedRecord: k,
                            handleChange: R,
                            placeholder: 'Key',
                            options: Bi,
                            addNewKey: !0
                          }),
                        (null === A || void 0 === A ? void 0 : A.value) &&
                          (0, w.jsx)(hi, {
                            newValue: f || '',
                            dataType: A ? A.value : null,
                            contentType:
                              null === k || void 0 === k ? void 0 : k.label,
                            updateValue: x,
                            isValid: T && !M,
                            isInvalid: !T && !M,
                            placeholder: (0, y.G_)(
                              A.contractFn,
                              null === k || void 0 === k ? void 0 : k.label
                            )
                          })
                      ]
                    }),
                    (0, w.jsx)(Fi, {
                      children: (0, w.jsx)(V.Ay, {
                        'data-testid': 'save-record',
                        type: T ? 'primary' : 'disabled',
                        disabled: !T && !M,
                        onClick: function() {
                          l({
                            key:
                              (null === k || void 0 === k ? void 0 : k.value) ||
                              'CONTENT',
                            value: f,
                            contractFn:
                              null === A || void 0 === A ? void 0 : A.contractFn
                          }),
                            Li(j, R, x),
                            I(!1),
                            P(!1)
                        },
                        children: 'Save'
                      })
                    })
                  ]
                })
            ]
          })
        )
      }
      var Vi = function(e) {
        var t = e.canEdit,
          n = (0, h.B)().t
        return t
          ? (0, w.jsx)(Mi, { children: (0, w.jsx)(Hi, (0, R.A)({}, e)) })
          : (0, w.jsx)(Mi, {
              children: (0, w.jsx)(Di, {
                children: n('singleName.record.title')
              })
            })
      }
      var Yi,
        Wi = (0, x.A)('div', { target: 'exgwpqe0' })({
          name: '1c2jqxj',
          styles:
            'display:block;align-items:center;a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;.external-link{margin-left:5px;transition:0.1s;opacity:0;}&:hover{.external-link{opacity:1;}}}'
        }),
        Xi = (0, x.A)('div', { target: 'exgwpqe1' })({
          name: '1h2ruwl',
          styles: 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
        }),
        Ki = (0, x.A)('div', { target: 'exgwpqe2' })({
          name: '1s6m2d8',
          styles:
            'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#ccc;'
        }),
        Gi = (0, x.A)('div', { target: 'exgwpqe3' })({
          name: '15k7fiz',
          styles:
            'display:inline-flex;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
        }),
        $i = (0, x.A)('img', { target: 'exgwpqe4' })({
          name: '1sqapvb',
          styles: 'width:180px;margin:1em 0;'
        }),
        Ji = (0, x.A)('span', { target: 'exgwpqe5' })({
          name: '1iafl4k',
          styles:
            'background:rgb(66,224,104);color:white;border-radius:5px;padding:0 5px;margin-right:5px;'
        }),
        Zi = function(e) {
          var t,
            n = e.textKey,
            r = e.value,
            i = e.name,
            a = Gt().network
          switch (n) {
            case 'nzt.ens.delegate':
            case 'url':
              t = ''.concat(r)
              break
            case 'com.twitter':
              t = 'twitter.com/'.concat(r)
              break
            case 'com.github':
              t = 'github.com/'.concat(r)
          }
          ;(t = (0, d.c5)(t)), 'email' === n && (t = 'mailto:'.concat(r))
          var s = (0, c.rz)(n, i, a, r),
            o = s.is_owner,
            l = s.host_meta,
            u = s.image,
            m = (0, d.N)(r)
          return t && !m
            ? (0, w.jsxs)(Wi, {
                children: [
                  (0, w.jsxs)('a', {
                    target: '_blank',
                    href: t,
                    rel: 'noopener noreferrer',
                    'aria-label': n,
                    children: [
                      r,
                      (0, w.jsx)('img', {
                        src: ar.A,
                        className: 'external-link',
                        alt: 'external-link-svg'
                      })
                    ]
                  }),
                  (0, w.jsx)(Ir, { value: r })
                ]
              })
            : u && !m
            ? (0, w.jsxs)('div', {
                children: [
                  (0, w.jsxs)(Wi, {
                    children: [
                      o && (0, w.jsx)(Ji, { children: 'Owner' }),
                      (0, w.jsxs)('a', {
                        target: '_blank',
                        href:
                          null === l || void 0 === l ? void 0 : l.reference_url,
                        rel: 'noopener noreferrer',
                        'aria-label': n,
                        children: [
                          r,
                          (0, w.jsx)('img', {
                            src: ar.A,
                            className: 'external-link',
                            alt: 'external-link-svg'
                          })
                        ]
                      }),
                      (0, w.jsx)(Ir, { value: r })
                    ]
                  }),
                  (0, w.jsx)($i, { src: u, alt: 'avatar' })
                ]
              })
            : (0, w.jsx)(Gi, {
                children: m
                  ? (0, w.jsx)(Ki, { children: 'Not set' })
                  : (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(Xi, {
                          'data-testid': 'unlinked-value-'.concat(n),
                          tabIndex: 0,
                          'aria-label': n,
                          children: r
                        }),
                        (0, w.jsx)(Ir, { value: r })
                      ]
                    })
              })
        }
      var Qi, ea, ta
      v.Ay.small(
        Yi ||
          (Yi = (0, a.A)([
            '\n    margin-left: 20px;\n    max-width: 175px;\n  '
          ]))
      ),
        n(96802),
        n.p
      var na, ra, ia
      v.Ay.small(
        Qi ||
          (Qi = (0, a.A)([
            '\n    text-align: center;\n    margin-top: 10px;\n  '
          ]))
      ),
        v.Ay.small(
          ea ||
            (ea = (0, a.A)([
              '\n    font-size: 20px;\n    margin-bottom: 12px;\n  '
            ]))
        ),
        v.Ay.small(
          ta ||
            (ta = (0, a.A)([
              '\n    font-size: 20px;\n    margin-bottom: 8px;\n  '
            ]))
        )
      v.Ay.large(na || (na = (0, a.A)(['\n    width: 400px;\n  ']))),
        v.Ay.small(ra || (ra = (0, a.A)(['\n    padding: 4px;\n  ']))),
        v.Ay.small(ia || (ia = (0, a.A)(['\n    font-size: 18px;\n  '])))
      n.p
      var aa,
        sa,
        oa,
        la,
        da,
        ca,
        ua,
        ma,
        pa,
        ga = (0, x.A)('a', { target: 'e1jlbbtp0' })({
          name: '3wnzc5',
          styles:
            'display:inline-block;align-items:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;svg{margin-left:10px;transition:0.1s;opacity:0;}&:hover{svg{opacity:1;}}'
        }),
        fa = function(e) {
          var t = e.value,
            n = e.contentType
          e.domain
          if ('oldcontent' === n || !t)
            return (0, w.jsx)('div', { children: t })
          var r,
            i,
            a = (0, hn.getProtocolType)(t),
            s = null === a || void 0 === a ? void 0 : a.protocolType,
            o = null === a || void 0 === a ? void 0 : a.decoded
          return (
            'ipfs' === s
              ? ((r = 'https://dweb.link/ipfs/'.concat(o)),
                (i = 'ipfs://'.concat(o)))
              : 'ipns' === s
              ? ((r = 'https://dweb.link/ipns/'.concat(o)),
                (i = 'ipns://'.concat(o)))
              : 'bzz' === s
              ? ((r = 'https://gateway.ethswarm.org/bzz/'.concat(o)),
                (i = 'bzz://'.concat(o)))
              : 'onion' === s || 'onion3' === s
              ? ((r = 'http://'.concat(o, '.onion')),
                (i = 'onion://'.concat(o)))
              : 'sia' === s
              ? ((r = 'https://siasky.net/'.concat(o)),
                (i = 'sia://'.concat(o)))
              : 'arweave' === s
              ? ((r = 'https://arweave.net/'.concat(o)),
                (i = 'arweave://'.concat(o)))
              : console.warn('Unsupported protocol '.concat(s)),
            (0, w.jsxs)(ga, {
              target: '_blank',
              href: r,
              'aria-label': n,
              children: [i, (0, w.jsx)(ar.h, {})]
            })
          )
        }
      var xa = (0, x.A)(tr, { target: 'e1c9c6p31' })(
          function(e) {
            return !e.hasRecord && 'display: none;'
          },
          ' ',
          function(e) {
            return e.noBorder ? '' : 'border-top: 1px dashed #d3d3d3;'
          },
          ' display:block;padding:20px;flex-direction:column;',
          v.Ay.small(
            aa || (aa = (0, a.A)(['\n    align-items: flex-start;\n  ']))
          ),
          ' background:',
          function(e) {
            e.editing
            return 'white'
          },
          ';',
          v.Ay.medium(
            sa ||
              (sa = (0, a.A)([
                '\n    display: flex;\n    flex-direction: column;\n  '
              ]))
          ),
          ''
        ),
        ha = (0, x.A)('div', { target: 'e1c9c6p32' })(
          'display:grid;width:100%;justify-content:flex-start;align-items:center;position:relative;',
          v.Ay.medium(oa || (oa = (0, a.A)(['\n    display: flex;\n  ']))),
          ''
        ),
        va = (0, x.A)(nr, { target: 'e1c9c6p33' })(
          'font-size:12px;margin-bottom:0;max-width:100%;margin-right:10px;',
          v.Ay.medium(
            la ||
              (la = (0, a.A)([
                '\n    width: 200px;\n    margin-right: 0px;\n  '
              ]))
          ),
          ''
        ),
        ya = (0, x.A)('div', { target: 'e1c9c6p34' })(
          'font-family:Overpass Mono;font-weight:500;font-size:14px;color:#adbbcd;letter-spacing:0;',
          v.Ay.small(
            da ||
              (da = (0, a.A)([
                '\n    font-size: 16px;\n    max-width: 220px;\n    min-width: 180px;\n  '
              ]))
          ),
          ''
        ),
        ba = (0, x.A)(rr, { target: 'e1c9c6p35' })(
          'font-size:14px;font-family:Overpass Mono;margin-top:1em;',
          v.Ay.small(ca || (ca = (0, a.A)(['\n      margin-top: 0;\n  ']))),
          ''
        )
      v.Ay.medium(
        ua ||
          (ua = (0, a.A)([
            '\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  '
          ]))
      ),
        v.Ay.small(ma || (ma = (0, a.A)(['\n    margin-left: auto;\n  ']))),
        v.Ay.small(
          pa ||
            (pa = (0, a.A)([
              '\n    margin-top: 0;\n    margin-left: auto;\n  '
            ]))
        )
      var Aa,
        ja,
        wa,
        Ea,
        Oa,
        ka,
        Ra,
        Ca = (0, x.A)(Et.A, { target: 'e13huqhw0' })(
          'width:100%;',
          function(e) {
            return e.hasBeenUpdated
              ? '\n    input {\n      border: #5284FF solid 1px;\n    }\n    \n  '
              : ''
          },
          ''
        ),
        Sa = function(e) {
          var t = e.onChange,
            n = e.value,
            r = e.isValid,
            i = e.isInvalid,
            a = e.dataType,
            s = e.contentType,
            o = e.placeholder,
            l = e.hasBeenUpdated,
            c = e.testId
          return (0, w.jsx)(Ca, {
            hasBeenUpdated: l,
            warning: 'content' === a && 'oldcontent' === s,
            valid: r && l,
            value: n == d.wI ? '' : n,
            invalid: i,
            placeholder: o,
            onChange: t,
            testId: c
          })
        }
      var Ta = (0, x.A)(dr.A, { target: 'erohma40' })({
          name: '1l2t2o1',
          styles: 'align-self:center;margin-left:10px;margin-right:10px;'
        }),
        Ia = (0, x.A)(xa, { target: 'erohma41' })(
          'display:flex;flex-direction:column;border-radius:5px;width:100%;padding 0;',
          v.Ay.medium(
            Aa || (Aa = (0, a.A)(['\n    flex-direction: row;\n  ']))
          ),
          ' ',
          function(e) {
            return (
              e.editing &&
              v.Ay.medium(
                ja || (ja = (0, a.A)(['\n    flex-direction: column;\n  ']))
              )
            )
          },
          ''
        ),
        Na = (0, x.A)('div', { target: 'erohma42' })(
          function(e) {
            return e.noRecords ? 'display: none' : 'display:flex'
          },
          ';flex-direction:column;padding:20px;',
          v.Ay.xLarge(
            wa ||
              (wa = (0, a.A)([
                '\n    flex-direction: row;\n    align-items: flex-start;\n  '
              ]))
          ),
          ''
        ),
        Da = (0, x.A)('div', { target: 'erohma43' })(
          'display:flex;flex-direction:column;width:100%;',
          v.Ay.xLarge(
            Ea || (Ea = (0, a.A)(['\n    width: calc(100% - 200px);\n  ']))
          ),
          ';'
        ),
        Ma = (0, x.A)(va, { target: 'erohma44' })(
          'margin-bottom:20px;',
          v.Ay.small(Oa || (Oa = (0, a.A)(['\n    margin-bottom: 20px;\n  ']))),
          ''
        ),
        Pa = (0, x.A)('div', { target: 'erohma45' })(
          'display:flex;flex-direction:column;',
          v.Ay.medium(
            ka ||
              (ka = (0, a.A)([
                '\n    flex-direction: row;\n    margin-bottom: 20px;\n  '
              ]))
          ),
          ''
        ),
        _a = (0, x.A)(ha, { target: 'erohma46' })(
          'display:grid;width:100%;grid-template-columns:1fr;align-items:flex-start;overflow:hidden;',
          function(e) {
            return e.hasBeenUpdated ? 'border: solid 1px red;' : ''
          },
          ' ',
          v.Ay.small(
            Ra ||
              (Ra = (0, a.A)(['\n    grid-template-columns: 150px 1fr;\n  ']))
          ),
          ''
        ),
        Fa = (0, x.A)('span', { target: 'erohma47' })({
          name: 'tokvmb',
          styles: 'color:red;'
        }),
        Ba = function(e, t) {
          return !!e.find(function(e) {
            return e.key === t
          })
        },
        za = function(e) {
          var t = e.editing,
            n = e.domain,
            r = e.validator,
            i = e.changedRecords,
            a = e.updateRecord,
            s = e.record,
            o = e.placeholder,
            l = e.validating,
            c = s.key,
            u = s.value,
            m = r(s),
            p = l(s)
          return (0, w.jsx)(Ia, {
            editing: t,
            hasRecord: !0,
            noBorder: !0,
            children: t
              ? (0, w.jsxs)(_a, {
                  editing: t,
                  children: [
                    (0, w.jsx)(ya, { children: c }),
                    (0, w.jsx)(Sa, {
                      testId: ''.concat(c, '-record-input'),
                      hasBeenUpdated: Ba(i, c),
                      type: 'text',
                      isInvalid: !m && !p,
                      onChange: function(e) {
                        a(
                          (0, R.A)(
                            (0, R.A)({}, s),
                            {},
                            { value: (0, y.Up)(c, e.target.value) }
                          )
                        )
                      },
                      value: u === d.wI ? '' : u,
                      isValid: m && !p,
                      placeholder: o
                    }),
                    (0, w.jsx)(Ta, {
                      'data-testid': ''.concat(c, '-record-delete'),
                      onClick: function() {
                        a((0, R.A)((0, R.A)({}, s), {}, { value: '' }))
                      }
                    })
                  ]
                })
              : (0, w.jsxs)(_a, {
                  children: [
                    (0, w.jsx)(ya, { children: c }),
                    (0, w.jsx)(Zi, {
                      textKey: c,
                      value: u,
                      name: null === n || void 0 === n ? void 0 : n.name
                    })
                  ]
                })
          })
        }
      function La(e) {
        var t = e.validator,
          n = e.setHasRecord,
          r = e.hasRecord,
          i = e.canEdit,
          a = e.editing,
          o = e.setUpdatedRecords,
          l = e.recordType,
          d = e.changedRecords,
          c = e.updateRecord,
          u = e.record,
          m = e.domain,
          p = e.validating,
          g = u.key,
          f = u.value
        return (
          (0, s.useEffect)(
            function() {
              f && 0 !== parseInt(f, 16) && !r && n(!0)
            },
            [f, r, n]
          ),
          i
            ? (0, w.jsx)(
                za,
                (0, R.A)(
                  (0, R.A)({}, e),
                  {},
                  {
                    validator: t,
                    validating: p,
                    editing: a,
                    setUpdatedRecords: o,
                    changedRecords: d,
                    recordType: l,
                    domain: m,
                    updateRecord: c,
                    record: u
                  }
                )
              )
            : (0, w.jsx)(qa, {
                textKey: g,
                value: null === u || void 0 === u ? void 0 : u.value,
                domain: m
              })
        )
      }
      function qa(e) {
        var t = e.textKey,
          n = e.value,
          r = e.remove,
          i = e.domain
        return (0, w.jsxs)(Pa, {
          children: [
            (0, w.jsx)(ya, { children: t }),
            r
              ? (0, w.jsx)(Fa, { children: 'Delete Record' })
              : (0, w.jsx)(Zi, {
                  textKey: t,
                  value: n,
                  name: null === i || void 0 === i ? void 0 : i.name
                })
          ]
        })
      }
      function Ua(e) {
        var t = e.editing,
          n = e.canEdit,
          r = e.records,
          a = e.validator,
          o = e.title,
          l = e.setUpdatedRecords,
          d = e.changedRecords,
          c = e.recordType,
          u = e.updateRecord,
          m = e.domain,
          p = e.validating,
          g = (0, s.useState)(!1),
          f = (0, i.A)(g, 2),
          x = f[0],
          h = f[1]
        return (0, w.jsxs)(Na, {
          hasRecord: x,
          children: [
            (0, w.jsx)(Ma, { children: o }),
            (0, w.jsx)(Da, {
              children:
                null === r || void 0 === r
                  ? void 0
                  : r.map(function(e) {
                      return (0,
                      w.jsx)(La, { editing: t, dataValue: e.value, validator: a, validating: p, setHasRecord: h, hasRecord: x, canEdit: n, setUpdatedRecords: l, changedRecords: d, recordType: c, domain: m, updateRecord: u, record: e }, e.key)
                    })
            })
          ]
        })
      }
      function Ha(e) {
        return e.loading ? null : (0, w.jsx)(Ua, (0, R.A)({}, e))
      }
      n(65324),
        (0, Cn.default)(Ma)(
          Va || (Va = (0, a.A)(['\n  ', '\n'])),
          v.Ay.small(Ya || (Ya = (0, a.A)(['\n    margin-bottom: 0;\n  '])))
        )
      var Va,
        Ya,
        Wa,
        Xa,
        Ka,
        Ga,
        $a = (0, Cn.default)(Da)(Wa || (Wa = (0, a.A)(['']))),
        Ja = (0, Cn.default)(Na)(
          Xa || (Xa = (0, a.A)(['\n  padding: 0;\n  margin-bottom: 20px;\n']))
        )
      ;(0, Cn.default)('div')(
        Ka || (Ka = (0, a.A)(['\n  display: flex;\n  margin-bottom: 20px;\n']))
      ),
        (0, Cn.default)('span')(Ga || (Ga = (0, a.A)(['\n  color: red;\n'])))
      function Za(e) {
        var t = e.changedRecords
        return (0, w.jsx)('div', {
          children: (0, w.jsx)(Ja, {
            children: (0, w.jsx)($a, {
              children: t.map(function(e) {
                return '' === e.value
                  ? (0, w.jsx)(qa, {
                      textKey: e.key,
                      value: e.value,
                      remove: !0
                    })
                  : (0, w.jsx)(qa, { textKey: e.key, value: e.value })
              })
            })
          })
        })
      }
      var Qa,
        es = 'link'
      function ts(e) {
        return 'https://nzt.'
          .concat(es, '/names/')
          .concat(e, '.')
          .concat(es)
      }
      function ns() {
        return ['names.nexis.network', 'ens.nzt', 'ens.nzt.link'].includes(
          window.location.host
        )
      }
      function rs(e) {
        if (!ns()) return Promise.resolve({ status: null })
        var t = ts(e)
        fetch(t, {
          mnztod: 'PUT',
          mode: 'cors',
          headers: {
            Origin: '*',
            'Content-Type': 'text/plain',
            'Access-Control-Request-Mnztod': 'PUT'
          }
        }).catch(function(e) {
          console.log(e)
        })
      }
      function is(e) {
        return ns() ? fetch(ts(e)) : Promise.resolve({ status: null })
      }
      var as,
        ss,
        os,
        ls,
        ds,
        cs,
        us,
        ms,
        ps,
        gs = (0, x.A)('span', { target: 'e16oolg60' })({
          name: '1dy9kne',
          styles: 'margin-right:1em;color:#f5a623;'
        }),
        fs = (0, x.A)('div', { target: 'e16oolg61' })(
          'margin-left:0;',
          v.Ay.small(Qa || (Qa = (0, a.A)(['\n    margin-left: auto;\n  ']))),
          ';'
        )
      function xs(e) {
        var t = e.domain,
          n = e.value
        if (1 !== Gt().networkId) return ''
        var a = (0, s.useState)(!1),
          o = (0, i.A)(a, 2),
          l = o[0],
          u = o[1],
          m = (0, s.useState)(!1),
          p = (0, i.A)(m, 2),
          g = p[0],
          f = p[1],
          x = (0, h.B)().t
        return (
          (0, c.$$)(
            function() {
              is(t.name)
                .then(function(e) {
                  200 === e.status && (u(!1), f(!1))
                })
                .catch(function(e) {
                  console.log('checkCertificate error', { e: e })
                })
            },
            g ? 3e3 : null
          ),
          (0, s.useEffect)(
            function() {
              ;(0, r.isEthSubdomain)(t.parent) &&
                'contenthash' === t.contentType &&
                t.content !== d.wI &&
                ((null !== n && void 0 !== n && n.includes('ipfs')) ||
                  (null !== n && void 0 !== n && n.includes('ipns'))) &&
                is(t.name).then(function(e) {
                  var t = e.status
                  u(404 === t)
                })
            },
            [t, n]
          ),
          l
            ? g
              ? (0, w.jsx)(fs, {
                  children: (0, w.jsx)(ye.A, {
                    children: x('singleName.messages.pending')
                  })
                })
              : (0, w.jsxs)(fs, {
                  children: [
                    (0, w.jsx)(gs, {
                      children: x('certificate.warning', { name: t.name })
                    }),
                    (0, w.jsx)(V.Ay, {
                      onClick: function() {
                        rs(t.name), f(!0)
                      },
                      children: x('certificate.button')
                    })
                  ]
                })
            : ''
        )
      }
      var hs = (0, x.A)(tr, { target: 'e1j4db1j0' })(
          function(e) {
            return !e.hasRecord && 'display: none;'
          },
          ' ',
          function(e) {
            return e.noBorder ? '' : 'border-top: 1px dashed #d3d3d3;'
          },
          ' display:block;padding:20px;flex-direction:column;',
          v.Ay.small(
            as || (as = (0, a.A)(['\n    align-items: flex-start;\n  ']))
          ),
          ' border-bottom:1px dashed #d3d3d3;',
          v.Ay.medium(
            ss ||
              (ss = (0, a.A)([
                '\n    display: flex;\n    flex-direction: column;\n  '
              ]))
          ),
          ''
        ),
        vs = (0, x.A)('div', { target: 'e1j4db1j1' })(
          'display:grid;width:100%;justify-content:flex-start;align-items:center;position:relative;',
          v.Ay.medium(os || (os = (0, a.A)(['\n    display: flex;\n  ']))),
          ' ',
          function(e) {
            return e.editing && 'margin-bottom: 30px'
          },
          ';'
        ),
        ys = (0, x.A)(nr, { target: 'e1j4db1j2' })(
          'font-size:12px;margin-bottom:0;max-width:100%;margin-right:10px;align-self:flex-start;',
          v.Ay.medium(
            ls ||
              (ls = (0, a.A)([
                '\n    width: 180px;\n    margin-right: 0px;\n  '
              ]))
          ),
          ' ',
          v.Ay.large(
            ds ||
              (ds = (0, a.A)([
                '\n    width: 200px;\n    margin-right: 0px;\n  '
              ]))
          ),
          ''
        ),
        bs = (v.Ay.small(
          cs ||
            (cs = (0, a.A)([
              '\n    font-size: 16px;\n    max-width: 220px;\n    min-width: 180px;\n  '
            ]))
        ),
        (0, x.A)(rr, { target: 'e1j4db1j4' })(
          'font-size:14px;margin-top:1em;',
          v.Ay.small(us || (us = (0, a.A)(['\n      margin-top: 0;\n  ']))),
          ''
        )),
        As = (v.Ay.medium(
          ms ||
            (ms = (0, a.A)([
              '\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  '
            ]))
        ),
        (0, x.A)('div', { target: 'e1j4db1j6' })({
          name: '8atqhb',
          styles: 'width:100%;'
        })),
        js = (0, x.A)('div', { target: 'e1j4db1j7' })(
          'margin-left:0;',
          v.Ay.small(ps || (ps = (0, a.A)(['\n    margin-left: auto;\n  ']))),
          ';'
        ),
        ws = (0, x.A)(dr.A, { target: 'e1j4db1j8' })({
          name: 'ubqhym',
          styles:
            'align-self:flex-start;margin-top:10px;margin-left:10px;margin-right:10px;'
        }),
        Es = (0, x.A)('div', { target: 'e1j4db1j10' })({
          name: '1s6m2d8',
          styles:
            'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#ccc;'
        }),
        Os = (0, x.A)('a', { target: 'e1j4db1j11' })({
          name: '3wnzc5',
          styles:
            'display:inline-block;align-items:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;svg{margin-left:10px;transition:0.1s;opacity:0;}&:hover{svg{opacity:1;}}'
        }),
        ks = function(e, t) {
          return !!e.find(function(e) {
            return e.key === t
          })
        },
        Rs = function(e) {
          var t = e.domain,
            n = e.keyName,
            r = e.type,
            i = e.records,
            a = e.changedRecords,
            s = e.editing,
            o = e.updateRecord,
            l = e.validator,
            c = (0, h.B)().t,
            u = t.contentType,
            m = i[0],
            p = null === m || void 0 === m ? void 0 : m.value,
            g = l(m),
            f = '' !== p && !g
          return (0, w.jsx)(w.Fragment, {
            children: (0, w.jsx)(hs, {
              editing: s,
              hasRecord: !0,
              children: (0, w.jsxs)(vs, {
                editing: s,
                children: [
                  (0, w.jsx)(ys, { children: c('c.Content') }),
                  !s &&
                    (0, w.jsx)(bs, {
                      editableSmall: !0,
                      children:
                        '' === p ||
                        p === d.wI ||
                        void 0 === p ||
                        'undefined' === p
                          ? (0, w.jsx)(Es, { children: 'Not set' })
                          : (0, w.jsx)(Cs, {
                              value: p,
                              contentType: u,
                              domain: t
                            })
                    }),
                  s &&
                    (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(As, {
                          children: (0, w.jsx)(Sa, {
                            testId: 'content-record-input'.concat(
                              f ? '-invalid' : ''
                            ),
                            onChange: function(e) {
                              o(
                                (0, R.A)(
                                  (0, R.A)({}, m),
                                  {},
                                  { value: e.target.value.trim() }
                                )
                              )
                            },
                            hasBeenUpdated: ks(a, n),
                            value: p,
                            dataType: r,
                            contentType: t.contentType,
                            isValid: g,
                            isInvalid: f
                          })
                        }),
                        (0, w.jsx)(js, {
                          children: (0, w.jsx)(ws, {
                            'data-testid': 'delete-'.concat(r.toLowerCase()),
                            onClick: function(e) {
                              e.preventDefault(),
                                o(
                                  (0, R.A)((0, R.A)({}, m), {}, { value: d.wI })
                                )
                            }
                          })
                        })
                      ]
                    }),
                  !s && (0, w.jsx)(xs, { domain: t, value: p })
                ]
              })
            })
          })
        }
      function Cs(e) {
        var t = e.value,
          n = e.contentType,
          r = e.domain,
          i = Gt().networkId,
          a =
            !!r.name.match('.nzt$') &&
            1 === i &&
            (null === t || void 0 === t ? void 0 : t.match(/^ip/))
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsxs)('div', {
              children: [
                (0, w.jsx)(fa, { value: t, contentType: n, domain: r }),
                a &&
                  (0, w.jsx)('div', {
                    children: (0, w.jsxs)(Os, {
                      target: '_blank',
                      rel: 'noopener',
                      href: 'https://'.concat(r.name, '.link'),
                      children: [
                        '(',
                        'https://'.concat(r.name, '.link'),
                        ')',
                        (0, w.jsx)(ar.h, {})
                      ]
                    })
                  })
              ]
            }),
            (0, w.jsxs)('div', {
              children: [
                (0, w.jsx)(Ir, { value: t }),
                (0, w.jsx)('div', {
                  children: a && (0, w.jsx)(w.Fragment, { children: '\xa0' })
                })
              ]
            })
          ]
        })
      }
      function Ss(e) {
        var t = e.domain,
          n = (e.account, e.records),
          r = (null === n || void 0 === n ? void 0 : n.length) && n[0],
          i = t.contentType
        return 'error' === i
          ? ''
          : (0, w.jsx)(hs, {
              children: (0, w.jsx)(vs, {
                children: (0, w.jsx)(bs, {
                  children:
                    r && '' !== r
                      ? (0, w.jsx)(Cs, {
                          value: null === r || void 0 === r ? void 0 : r.value,
                          contentType: i,
                          domain: t
                        })
                      : (0, w.jsx)(Es, { children: 'Not set' })
                })
              })
            })
      }
      var Ts,
        Is = function(e) {
          return e.canEdit
            ? (0, w.jsx)(Rs, (0, R.A)({}, e))
            : (0, w.jsx)(Ss, (0, R.A)({}, e))
        }
      var Ns = (0, x.A)('div', { target: 'evxhp930' })(
          'border-radius:6px;border:1px solid #ededed;box-shadow:inset 0 0 10px 0 rgba(235,235,235,0.5);display:',
          function(e) {
            return e.shouldShowRecords ? 'block' : 'none'
          },
          ';margin-bottom:20px;'
        ),
        Ds = (0, x.A)('div', { target: 'evxhp931' })({
          name: '1s3rq3u',
          styles:
            'padding:20px;font-size:14px;color:#adbbcd;background:hsla(37,91%,55%,0.1);'
        }),
        Ms = (0, x.A)(un.Ay, { target: 'evxhp932' })(''),
        Ps = (0, x.A)('div', { target: 'evxhp933' })({
          name: '1fsol5z',
          styles:
            'p{font-weight:300;font-size:14px;}padding:20px;background:#f0f6fa;display:flex;justify-content:space-between;'
        }),
        _s = [
          {
            label: 'Addresses',
            value: 'coins',
            contractFn: 'setAddr(bytes32,uint256,bytes)'
          },
          { label: 'Content', value: 'content', contractFn: 'setContenthash' },
          { label: 'Text', value: 'textRecords', contractFn: 'setText' }
        ],
        Fs = ['ETH'].concat((0, I.A)(ui.A.slice(0, 3)))
      function Bs(e) {
        return 0 === parseInt(e, 16) || ('0x' === e || !e)
      }
      var zs = function(e) {
          var t = (0, o.I)(u.UM, {
              variables: { id: (0, hn.getNamehash)(e.name) }
            }).data,
            n = t && t.domain && t.domain.resolver,
            r =
              n &&
              n.coinTypes &&
              n.coinTypes
                .map(function(e) {
                  return mi.formatsByCoinType[e] && mi.formatsByCoinType[e].name
                })
                .filter(function(e) {
                  return e
                }),
            i = (0, o.I)(u.oz, {
              variables: { name: e.name, keys: gi()(r, Fs) },
              fetchPolicy: 'network-only'
            }),
            a = i.loading,
            s = i.data,
            l = (0, o.I)(u.IU, {
              variables: { name: e.name, keys: gi()(n && n.texts, fi) },
              fetchPolicy: 'network-only'
            }),
            d = l.loading
          return {
            dataAddresses: s,
            dataTextRecords: l.data,
            recordsLoading: a || d
          }
        },
        Ls = function(e, t) {
          var n = t.filter(function(t) {
              return !e.find(function(e) {
                return t === e.key
              })
            }),
            r = e.map(function(e) {
              return e.value === hn.emptyAddress
                ? (0, R.A)((0, R.A)({}, e), {}, { value: '' })
                : e
            })
          return [].concat(
            (0, I.A)(r),
            (0, I.A)(
              n.map(function(e) {
                return { key: e, value: '' }
              })
            )
          )
        },
        qs = function(e, t, n) {
          var r = (function(e, t) {
              var n =
                e && e.getTextRecords ? Ls(e.getTextRecords, fi) : Ls([], fi)
              return null === n || void 0 === n
                ? void 0
                : n.map(function(e) {
                    return (0, R.A)({ addr: t.addr, contractFn: 'setText' }, e)
                  })
            })(n, e),
            i = (function(e) {
              var t = e && e.getAddresses ? Ls(e.getAddresses, Fs) : Ls([], Fs)
              return null === t || void 0 === t
                ? void 0
                : t.map(function(e) {
                    return (0,
                    R.A)({ contractFn: 'setAddr(bytes32,uint256,bytes)' }, e)
                  })
            })(t),
            a = (function(e) {
              return {
                contractFn: 'setContenthash',
                key: 'CONTENT',
                value: ((t = e.content),
                (null === t || void 0 === t
                  ? void 0
                  : t.startsWith('undefined')) || 0 === parseInt(t, 16)
                  ? ''
                  : e.content)
              }
              var t
            })(e)
          return [].concat((0, I.A)(r), (0, I.A)(i), [a])
        },
        Us = function(e) {
          return e
            .filter(function(e) {
              return 'setAddr(bytes32,uint256,bytes)' === e.contractFn
            })
            .sort(function(e) {
              return 'NZT' === e.key ? -1 : 1
            })
        },
        Hs = function(e) {
          var t = e.filter(function(e) {
            return 'setContenthash' === e.contractFn
          })[0]
          return t
            ? [{ key: t.key, value: t.value, contractFn: t.contractFn }]
            : []
        },
        Vs = function(e) {
          return e.filter(function(e) {
            return 'setText' === e.contractFn
          })
        },
        Ys = function(e) {
          return function(t) {
            e(function(e) {
              return null === e || void 0 === e
                ? void 0
                : e.reduce(function(e, n) {
                    return n.key === t.key
                      ? [].concat((0, I.A)(e), [t])
                      : [].concat((0, I.A)(e), [n])
                  }, [])
            })
          }
        },
        Ws = function(e) {
          return function(t) {
            e(function(e) {
              return [].concat((0, I.A)(e), [t])
            })
          }
        },
        Xs = function(e, t, n) {
          return function(r) {
            !(function(e, t) {
              return !!t.find(function(t) {
                return t.key === e.key
              })
            })(r, n)
              ? t(r)
              : e(r)
          }
        },
        Ks = function(e, t) {
          return e.length === t.length
        },
        Gs = function(e) {
          return function(t) {
            return e.some(function(e) {
              return e.key === t.key && e.val === t.val
            })
          }
        },
        $s = function(e) {
          return function(t) {
            return e.some(function(e) {
              return e.key === t.key && e.val === t.val
            })
          }
        },
        Js = (function() {
          var e = (0, f.A)(
            (0, g.A)().mark(function e(t, n) {
              return (0, g.A)().wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        Promise.all(t.map(n)).then(function(e) {
                          return t.map(function(t, n) {
                            return { valid: e[n], record: t }
                          })
                        })
                      )
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function(t, n) {
            return e.apply(this, arguments)
          }
        })(),
        Zs = function(e, t, n, r) {
          ;(0, s.useEffect)(
            function() {
              r(qs(e, t, n))
            },
            [e, t, n]
          )
        },
        Qs = function(e, t, n) {
          var r = (0, d.ZC)(t)
          ;(0, s.useEffect)(
            function() {
              ;(e && r === t) || n(t)
            },
            [e, t, r]
          )
        },
        eo = (0, d.ZZ)(function(e, t, n, r, i, a) {
          return (
            e(
              (function(e, t) {
                return ci()(t, e, li())
              })(t, n)
            ),
            r([].concat((0, I.A)(a), (0, I.A)(i))),
            Js(i, y.eV)
          )
        }, 500),
        to = function(e, t, n, r, i, a, o, l) {
          var c = (0, d.ZC)(i),
            u = (0, s.useRef)(),
            m = (0, s.useRef)(),
            p = (0, s.useRef)()
          ;(u.current = i),
            (m.current = o),
            (p.current = l),
            (0, s.useEffect)(
              function() {
                if (!e) {
                  var s = i.filter(function(e) {
                    return !c.includes(e)
                  })
                  eo(t, r, i, a, s, p.current).then(function(e) {
                    var t = e.filter(function(e) {
                        return u.current.includes(e.record)
                      }),
                      i = m.current.filter(function(e) {
                        return !t.some(function(t) {
                          return t.record.key === e.key
                        })
                      }),
                      o = t
                        .filter(function(e) {
                          return (
                            e.valid ||
                            (e.record.key.match(/_LEGACY/) &&
                              e.record.value ===
                                r.find(function(t) {
                                  return t.key === e.record.key
                                }).value)
                          )
                        })
                        .map(function(e) {
                          return e.record
                        })
                    n([].concat((0, I.A)(i), (0, I.A)(o))),
                      a(
                        p.current.filter(function(e) {
                          return !s.includes(e)
                        })
                      )
                  })
                }
              },
              [i, e, r]
            )
        },
        no = (0, l.J1)(
          Ts ||
            (Ts = (0, a.A)([
              '\n  query recordsQuery @client {\n    accounts\n    isReadOnly\n  }\n'
            ]))
        ),
        ro = function(e, t, n, r) {
          ;(0, s.useEffect)(
            function() {
              n(t), r()
            },
            [e]
          )
        }
      function io(e) {
        var t = e.domain,
          n = e.isOwner,
          a = e.hasResolver,
          l = e.isOldPublicResolver,
          d = e.isDeprecatedResolver,
          u = e.needsToBeMigrated,
          m = e.readOnly,
          p = void 0 !== m && m,
          g = (0, h.B)().t,
          f = (0, o.I)(no).data,
          x = f.accounts,
          v = f.isReadOnly,
          y = (0, cn.n)(ve.vA, {
            onCompleted: function(e) {
              Y(Object.values(e)[0])
            }
          }),
          b = (0, i.A)(y, 1)[0],
          A = (0, s.useState)([]),
          j = (0, i.A)(A, 2),
          E = j[0],
          O = j[1],
          k = (0, s.useState)([]),
          R = (0, i.A)(k, 2),
          C = R[0],
          S = R[1],
          T = (0, s.useState)([]),
          I = (0, i.A)(T, 2),
          N = I[0],
          D = I[1],
          M = (0, s.useState)([]),
          P = (0, i.A)(M, 2),
          _ = P[0],
          F = P[1],
          B = (0, c.Yz)(),
          z = B.actions,
          L = B.state,
          q = L.pending,
          U = L.confirmed,
          H = L.editing,
          V = L.txHash,
          Y = z.startPending,
          W = z.setConfirmed,
          X = z.startEditing,
          K = z.stopEditing,
          G = z.resetPending,
          $ = zs(t),
          J = $.dataAddresses,
          Z = $.dataTextRecords,
          Q = $.recordsLoading,
          ee = (0, s.useState)([]),
          te = (0, i.A)(ee, 2),
          ne = te[0],
          re = te[1]
        Zs(t, J, Z, re),
          Qs(Q, ne, O),
          to(Q, S, D, ne, E, F, N, _),
          ro(null === x || void 0 === x ? void 0 : x[0], ne, O, K)
        var ie = (function(e, t, n) {
          return !(e || !n) || !(!e || !t)
        })(
          n,
          a,
          (function(e) {
            return !Bs(e.addr) || !Bs(e.content) || void 0
          })(t)
        )
        if (!ie) return null
        var ae = !l && !d && n && !v
        return (0, w.jsxs)(Ns, {
          shouldShowRecords: ie,
          needsToBeMigrated: u,
          children: [
            !ae && n
              ? (0, w.jsx)(Ds, { children: g('singleName.record.cantEdit') })
              : (0, w.jsx)(Vi, {
                  canEdit: ae && !p,
                  emptyRecords: _s,
                  updateRecord: Xs(Ys(O), Ws(O), E),
                  pending: q,
                  domain: t,
                  editing: H,
                  startEditing: X,
                  stopEditing: K,
                  initialRecords: ne,
                  updatedRecords: E,
                  setUpdatedRecords: O
                }),
            (0, w.jsx)(Ha, {
              canEdit: ae,
              editing: H,
              records: Us(E),
              title: g('c.addresses'),
              updateRecord: Ys(O),
              changedRecords: C,
              validator: Gs(N),
              validating: $s(_)
            }),
            (0, w.jsx)(Is, {
              canEdit: ae,
              editing: H,
              domain: t,
              keyName: 'CONTENT',
              type: 'content',
              records: Hs(E),
              changedRecords: C,
              updatedRecords: E,
              updateRecord: Ys(O),
              validator: Gs(N)
            }),
            (0, w.jsx)(Ha, {
              canEdit: ae,
              editing: H,
              domain: t,
              records: Vs(E),
              title: g('c.textrecord'),
              updateRecord: Ys(O),
              changedRecords: C,
              validator: Gs(N),
              validating: $s(_)
            }),
            q &&
              !U &&
              V &&
              (0, w.jsx)(Ps, {
                pending: q,
                children: (0, w.jsx)(ye.A, {
                  txHash: V,
                  onConfirmed: function() {
                    W(),
                      G(),
                      re(E),
                      (0, r.isEthSubdomain)(t.parent) && rs(t.name)
                  }
                })
              }),
            H &&
              !V &&
              (0, w.jsxs)(Ps, {
                children: [
                  (0, w.jsx)('p', {
                    children:
                      'Add, delete, or edit one or multiple records. Confirm in one transaction.'
                  }),
                  (0, w.jsx)(Ms, {
                    mutation: function() {
                      b({ variables: { name: t.name, records: C } })
                    },
                    mutationButton: 'Confirm',
                    stopEditing: function() {
                      O(ne), K()
                    },
                    disabled: !1,
                    confirm: !0,
                    extraDataComponent: (0, w.jsx)(Za, { changedRecords: C }),
                    isValid: !!C.length && Ks(E, N) && !_.length
                  })
                ]
              })
          ]
        })
      }
      var ao = (0, x.A)('div', { target: 'e1qhalfw0' })({
          name: 'x249lx',
          styles:
            'border-radius:6px;border:1px solid #ededed;box-shadow:inset 0 0 10px 0 rgba(235,235,235,0.5);padding-bottom:10px;display:block;margin-bottom:20px;'
        }),
        so = (0, x.A)('div', { target: 'e1qhalfw1' })({
          name: 'g62ntm',
          styles: 'background:#f0f6fa;'
        }),
        oo = (0, x.A)('h3', { target: 'e1qhalfw2' })({
          name: 'h6kmv5',
          styles:
            'font-family:Overpass;font-weight:700;font-size:12px;color:#adbbcd;letter-spacing:0.5px;text-transform:uppercase;margin:0;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;'
        })
      function lo(e) {
        return {
          title: 'Title',
          maker: 'Maker',
          type: 'Type of Object',
          subject: 'Subject',
          period: 'Period',
          dimensions: 'Measurements',
          materials: 'Materials & Techniques',
          markings: 'Inscriptions & Markings',
          features: 'Features',
          reference: 'Reference'
        }[e]
      }
      function co(e) {
        var t = e.value,
          n = e.label
        return t
          ? (0, w.jsx)(xa, {
              children: (0, w.jsxs)(ha, {
                children: [
                  (0, w.jsx)(va, { children: n }),
                  (0, w.jsx)(ba, {
                    children: (0, w.jsx)('div', { children: t })
                  })
                ]
              })
            })
          : null
      }
      function uo(e) {
        var t,
          n = e.domain,
          r = e.query
        return null !== (t = n.name) && void 0 !== t && t.match(/\.art$/)
          ? (0, w.jsx)(dn.X, {
              query: r,
              variables: { name: n.name, key: 'artrecords' },
              children: function(e) {
                var t = e.loading,
                  n = e.data
                if (t) return (0, w.jsx)(m.A, { center: !0 })
                var r = n.getText
                if (!r) return null
                var i = (function(e) {
                  var t = {}
                  try {
                    t = JSON.parse(e)
                  } catch (n) {}
                  return Object.keys(t).reduce(function(e, n) {
                    return e.concat({ label: lo(n), value: t[n] })
                  }, [])
                })(r)
                return (function(e) {
                  return (
                    !e.length ||
                    0 ===
                      e.filter(function(e) {
                        return e.value
                      }).length
                  )
                })(i)
                  ? null
                  : (0, w.jsxs)(ao, {
                      children: [
                        (0, w.jsx)(so, {
                          children: (0, w.jsx)(oo, { children: 'Art records' })
                        }),
                        i.map(function(e, t) {
                          return (0,
                          w.jsx)(co, { value: e.value, label: e.label }, t)
                        })
                      ]
                    })
              }
            })
          : null
      }
      var mo,
        po = n(97950)
      var go = (0, x.A)('div', { target: 'eoq7jyb0' })({
          name: '5nfc2',
          styles:
            'position:fixed;height:100%;width:100%;background:rgba(0,0,0,0.5);color:#2b2b2b;z-index:100000000;left:0;top:0;display:flex;justify-content:center;align-items:center;'
        }),
        fo = (0, x.A)('div', { target: 'eoq7jyb1' })(
          'background:white;padding:15px 20px;width:90%;',
          v.Ay.medium(mo || (mo = (0, a.A)(['\n    width: 50%\n  ']))),
          ''
        ),
        xo = (0, x.A)('h2', { target: 'eoq7jyb2' })({
          name: 't725ul',
          styles: 'color:red;font-weight:300;font-size:22px;margin-top:0;'
        }),
        ho = (0, x.A)('pre', { target: 'eoq7jyb3' })({
          name: 'xs9fqv',
          styles: 'white-space:normal;'
        }),
        vo = (0, w.jsx)('svg', {
          width: '25',
          height: '22',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, w.jsx)('path', {
            d:
              'M12.165 6.51c.658-.16 1.344.16 1.618.77a1.8 1.8 0 01.137.664 49.926 49.926 0 01-.137 2.02c-.055 1.036-.137 2.099-.192 3.135-.027.345-.027.372-.027.717a1.021 1.021 0 01-1.042.984c-.576 0-1.015-.399-1.042-.957-.082-1.62-.192-2.976-.274-4.597l-.083-1.302a1.41 1.41 0 011.042-1.434m.357 12.222c-.768 0-1.399-.611-1.399-1.355s.631-1.355 1.399-1.355c.767 0 1.398.61 1.37 1.381.028.718-.63 1.329-1.37 1.329M3.749 22H21.24c2.879 0 4.688-3.056 3.263-5.447l-8.774-14.72c-1.425-2.444-5.044-2.444-6.47 0L.486 16.553C-.912 18.971.87 22 3.749 22',
            fill: '#DC2E2E',
            fillRule: 'evenodd'
          })
        }),
        yo = (0, x.A)('div', { target: 'eoq7jyb4' })({
          name: '1bvc4cc',
          styles: 'display:flex;justify-content:flex-end;'
        })
      var bo,
        Ao = function(e) {
          var t = e.title,
            n = e.error,
            r = e.close,
            i = document.getElementById('modal-root')
          return po.createPortal(
            (0, w.jsx)(go, {
              onClick: r,
              children: (0, w.jsxs)(fo, {
                onClick: function(e) {
                  return e.stopPropagation()
                },
                children: [
                  (0, w.jsxs)(xo, { children: [vo, ' \xa0', t] }),
                  (0, w.jsx)(ho, { children: JSON.stringify(n) }),
                  (0, w.jsx)(yo, {
                    children: (0, w.jsx)(V.Ay, {
                      type: 'primary',
                      onClick: r,
                      children: 'Close'
                    })
                  })
                ]
              })
            }),
            i
          )
        }
      var jo,
        wo = (0, x.A)(tr, { target: 'ek0r0970' })({
          name: '79elbk',
          styles: 'position:relative;'
        }),
        Eo = (0, x.A)(nr, { target: 'ek0r0971' })({
          name: 'gikztc',
          styles: 'color:#2b2b2b;'
        }),
        Oo = (0, x.A)(rr, { target: 'ek0r0972' })({
          name: '1j87prn',
          styles: 'color:#f5a623;'
        }),
        ko = (0, x.A)(V.Ay, { target: 'ek0r0973' })({
          name: '1y6ic72',
          styles: 'margin-left:10px;'
        }),
        Ro = (0, x.A)('div', { target: 'ek0r0974' })(
          'margin-left:0;',
          v.Ay.small(bo || (bo = (0, a.A)(['\n    margin-left: auto\n  ']))),
          ''
        ),
        Co = (0, x.A)('svg', { target: 'ek0r0975' })({
          name: 'lvyu5j',
          styles: 'margin-right:10px;'
        })
      function So(e) {
        var t = e.value,
          n = e.name,
          r = e.refetch,
          a = e.isOwner,
          o = e.readOnly,
          l = void 0 !== o && o,
          d = (0, h.B)().t,
          u = (0, s.useState)(!1),
          m = (0, i.A)(u, 2),
          p = m[0],
          g = m[1],
          f = (0, c.Yz)(),
          x = f.state,
          v = f.actions,
          y = (0, c.Yz)(),
          b = y.state,
          A = y.actions,
          j = x.txHash,
          E = x.pending,
          O = x.confirmed,
          k = b.txHash,
          R = b.pending,
          C = b.confirmed,
          S = v.startPending,
          T = v.setConfirmed,
          I = A.startPending,
          N = A.setConfirmed,
          D = (0, cn.n)(ve.RI, {
            variables: { name: n },
            onCompleted: function(e) {
              Object.values(e)[0].length > 1
                ? (S(Object.values(e)[0][0]), I(Object.values(e)[0][1]))
                : (S(Object.values(e)[0][0]), I('notatx'))
            }
          }),
          M = (0, i.A)(D, 2),
          P = M[0],
          _ = M[1].error
        ;(0, s.useEffect)(
          function() {
            _ && g(!0)
          },
          [_]
        )
        var F = a && !l
        return (0, w.jsxs)(wo, {
          children: [
            p &&
              (0, w.jsx)(Ao, {
                error: _,
                title: d('singleName.resolver.error'),
                close: function() {
                  return g(!1)
                }
              }),
            (0, w.jsxs)(Eo, {
              children: [
                (0, w.jsx)(Co, {
                  width: '16',
                  height: '16',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: (0, w.jsx)('path', {
                    d:
                      'M8.739 5.82c-.039.746-.096 1.512-.134 2.258-.02.25-.02.268-.02.517a.723.723 0 01-.727.708.707.707 0 01-.727-.689c-.058-1.167-.134-2.143-.192-3.311l-.057-.938c-.02-.478.268-.9.727-1.034a.972.972 0 011.13.556c.057.153.095.306.095.478-.019.479-.057.976-.095 1.455m-.88 6.316a.98.98 0 01-.977-.976.98.98 0 01.976-.976c.536 0 .976.44.957.995.02.517-.44.957-.957.957M7.93 0a7.93 7.93 0 100 15.86A7.93 7.93 0 007.93 0',
                    fill: '#F5A623',
                    fillRule: 'evenodd'
                  })
                }),
                d('c.Resolver')
              ]
            }),
            (0, w.jsxs)(Oo, {
              editable: !0,
              'data-testid': 'migrate-value',
              children: [t, (0, w.jsx)(Ir, { iconColour: '#f5a623' })]
            }),
            (0, w.jsx)(Ro, {
              children:
                !(E && R && j && k) || (O && C)
                  ? (0, w.jsx)(ko, {
                      onClick: F ? P : function() {},
                      type: F ? 'primary' : 'disabled',
                      children: d('c.migrate')
                    })
                  : (0, w.jsx)(ye.A, {
                      txHashes: 'notatx' === k ? void 0 : [j, k],
                      txHash: 'notatx' === k ? j : void 0,
                      onConfirmed: function() {
                        T(), N(), r()
                      }
                    })
            })
          ]
        })
      }
      var To = (0, x.A)('div', { target: 'eod8dl70' })({
        name: 'uewl2b',
        styles: 'margin-bottom:20px;'
      })
      function Io() {
        var e = (0, h.B)().t
        return (0, w.jsx)(To, { children: e('singleName.resolver.warning') })
      }
      var No = (0, x.A)('div', { target: 'eod8dl71' })({
          name: 'uewl2b',
          styles: 'margin-bottom:20px;'
        }),
        Do = (0, x.A)('div', { target: 'eod8dl72' })({
          name: 'o5kxxr',
          styles: 'border-top:1px dashed #d3d3d3;padding-top:20px;'
        }),
        Mo = (0, x.A)('div', { target: 'eod8dl73' })(function(e) {
          return e.needsToBeMigrated
            ? '\n    color: #ADBBCD;\n    font-size: 14px;\n    background: hsla(37, 91%, 55%, 0.1);\n    padding: 20px;\n    margin-bottom: 20px;\n  '
            : '\n      background: none;\n      padding: 20px;\n      '
        }, ''),
        Po = (0, x.A)('div', { target: 'eod8dl74' })({
          name: '130403z',
          styles:
            'border-radius:6px;display:flex;flex-direction:column;& > div:last-child{border-top:1px dashed #d3d3d3;padding:0;padding-top:32px;}'
        }),
        _o = (0, x.A)('button', { target: 'eod8dl75' })(
          'border:none;background:none;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;padding:12px 0;align-self:flex-start;cursor:pointer;transition:0.15s filter ease-in-out;filter:opacity(1);&:hover{filter:opacity(0.5);}p{font-family:Overpass;font-size:14px;letter-spacing:0px;font-weight:600;text-transform:uppercase;flex-shrink:0;display:flex;margin:0;',
          v.Ay.small(
            jo ||
              (jo = (0, a.A)([
                '\n      align-items: center;\n      margin-bottom: 0;\n      font-size: 16px;\n    '
              ]))
          ),
          '}'
        )
      var Fo,
        Bo = function(e) {
          var t = e.domain,
            n = e.isOwner,
            r = e.refetch,
            a = e.account,
            l = e.isMigratedToNewRegistry,
            d = e.readOnly,
            c = void 0 !== d && d,
            m = (0, h.B)().t,
            p = s.useState(!1),
            g = (0, i.A)(p, 2),
            f = g[0],
            x = g[1],
            v = (function(e) {
              var t = parseInt(e, 16)
              return !isNaN(t) && 0 !== t
            })(t.resolver),
            y = !1,
            b = !1,
            A = !0,
            j = !1,
            E = (0, o.I)(u.Ob, {
              variables: { name: t.name, resolver: t.resolver },
              skip: !v
            }),
            O = E.data,
            k = E.loading
          O &&
            O.getResolverMigrationInfo &&
            ((y = O.getResolverMigrationInfo.isOldPublicResolver),
            (b = O.getResolverMigrationInfo.isDeprecatedResolver),
            (A = O.getResolverMigrationInfo.areRecordsMigrated),
            (j = O.getResolverMigrationInfo.isPublicResolverReady))
          var R = !k && l && j && (y || b)
          return (0, w.jsxs)(w.Fragment, {
            children: [
              R &&
                (0, w.jsxs)(Mo, {
                  needsToBeMigrated: !0,
                  children: [
                    (0, w.jsx)(So, {
                      value: t.resolver,
                      name: t.name,
                      refetch: r,
                      isOwner: n,
                      readOnly: c
                    }),
                    (0, w.jsx)(Io, {}),
                    (0, w.jsxs)(Do, {
                      children: [
                        (0, w.jsx)(No, {
                          children: m('singleName.resolver.message')
                        }),
                        (0, w.jsx)(ti, {
                          showLabel: !1,
                          keyName: 'Resolver',
                          type: 'address',
                          value: t.resolver,
                          canEdit: n && l && !c,
                          domain: t,
                          editButton: m('c.set'),
                          editButtonType: 'hollow-primary',
                          mutationButton: m('c.save'),
                          backgroundStyle: 'warning',
                          mutation: ve.S5,
                          refetch: r,
                          account: a,
                          needsToBeMigrated: R
                        })
                      ]
                    })
                  ]
                }),
              v &&
                Object.values(t).filter(function(e) {
                  return e
                }).length &&
                (0, w.jsx)(io, {
                  domain: t,
                  refetch: r,
                  account: a,
                  isOwner: n,
                  hasResolver: v,
                  needsToBeMigrated: R,
                  isOldPublicResolver: y,
                  isDeprecatedResolver: b,
                  areRecordsMigrated: A,
                  readOnly: c
                }),
              !R &&
                (0, w.jsxs)(Po, {
                  children: [
                    (0, w.jsxs)(_o, {
                      'data-testid': 'advanced-settings-button',
                      onClick: function() {
                        return x(function(e) {
                          return !e
                        })
                      },
                      children: [
                        (0, w.jsx)('p', {
                          children: m('singleName.tabs.advancedSettings')
                        }),
                        (0, w.jsx)(Pn.A, { rotated: f, start: 'top' })
                      ]
                    }),
                    f &&
                      (0, w.jsx)(Mo, {
                        children: (0, w.jsx)(ti, {
                          keyName: 'Resolver',
                          type: 'address',
                          value: t.resolver,
                          canEdit: n && l && !c,
                          domain: t,
                          editButton: m('c.set'),
                          mutationButton: m('c.save'),
                          mutation: ve.S5,
                          refetch: r,
                          account: a,
                          needsToBeMigrated: R,
                          copyToClipboard: !0
                        })
                      })
                  ]
                }),
              v && (0, w.jsx)(uo, { domain: t, query: u.T4 })
            ]
          })
        }
      var zo = (0, x.A)('div', { target: 'e14kl7v60' })(
          'padding:20px 0px;display:flex;flex-direction:column;justify-content:space-between;',
          v.Ay.medium(
            Fo || (Fo = (0, a.A)(['\n    flex-direction: row-reverse;\n  ']))
          ),
          ';border-top:1px dashed #d3d3d3;'
        ),
        Lo = (0, x.A)(V.Ay, { target: 'e14kl7v61' })({
          name: '2ug417',
          styles: 'max-width:8em;'
        }),
        qo = (0, x.A)('p', { target: 'e14kl7v62' })({
          name: 'xvkx58',
          styles: 'color:#c7d3e3;size:14pt;'
        }),
        Uo = (0, x.A)('pre', { target: 'e14kl7v63' })({
          name: 'hvcq6z',
          styles: 'display:inline;background-color:#eee;padding:3px;'
        })
      var Ho,
        Vo,
        Yo,
        Wo,
        Xo,
        Ko,
        Go,
        $o,
        Jo,
        Zo,
        Qo,
        el,
        tl,
        nl,
        rl,
        il,
        al,
        sl,
        ol,
        ll,
        dl,
        cl,
        ul,
        ml = function(e) {
          var t = e.domain,
            n = e.refetch,
            r = (0, h.B)().t,
            a = (0, c.Yz)(),
            s = a.state,
            o = a.actions,
            l = s.txHash,
            d = s.pending,
            u = s.confirmed,
            m = o.startPending,
            p = o.setConfirmed,
            g = (0, cn.n)(ve.RW, {
              onCompleted: function(e) {
                m(Object.values(e)[0]), n()
              }
            }),
            f = (0, i.A)(g, 1)[0]
          return (0, w.jsxs)(zo, {
            children: [
              d && !u
                ? (0, w.jsx)(ye.A, {
                    txHash: l,
                    onConfirmed: function() {
                      p(), n()
                    }
                  })
                : (0, w.jsx)(Lo, {
                    'data-testid': 'claim-test',
                    onClick: function() {
                      f({ variables: { label: t.label } })
                    },
                    children: r('c.claim')
                  }),
              (0, w.jsx)(qo, {
                children: (0, w.jsxs)(Rn.x, {
                  i18nKey: 'singleName.test.note',
                  children: [
                    'Note: ',
                    (0, w.jsx)(Uo, { children: '.test' }),
                    ' domain allows anyone to claim an unused name for test purposes, which expires after 28 days'
                  ]
                })
              })
            ]
          })
        },
        pl = (0, Cn.default)('section')(
          Ho ||
            (Ho = (0, a.A)([
              '\n  padding: 20px;\n  transition: 0.4s;\n  ',
              '\n'
            ])),
          v.Ay.small(Vo || (Vo = (0, a.A)(['\n    padding: 40px;\n  '])))
        ),
        gl = (0, Cn.default)(m.A)(
          Yo || (Yo = (0, a.A)(['\n  width: 30%;\n  margin: auto;\n']))
        ),
        fl = (0, Cn.default)(V.Ay)(
          Wo ||
            (Wo = (0, a.A)([
              '\n  position: absolute;\n  width: 130px;\n  background-colore: white;\n'
            ]))
        ),
        xl = (0, Cn.default)('div')(
          Xo ||
            (Xo = (0, a.A)([
              '\n  margin-top: 20px;\n  height: 50px;\n  ',
              '\n'
            ])),
          v.Ay.small(
            Ko ||
              (Ko = (0, a.A)([
                '\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    right: 128px;\n    -webkit-transform: translate(0, -65%);\n    -ms-transform: translate(0, -65%);\n    transform: translate(0, -65%);\n  '
              ]))
          )
        ),
        hl = (0, Cn.default)(rr)(
          Go || (Go = (0, a.A)(['\n  color: ', ';\n'])),
          function(e) {
            return e.isExpired ? 'red' : null
          }
        ),
        vl = (0, Cn.default)(gr)(
          $o ||
            ($o = (0, a.A)(['\n  display: flex;\n  align-items: center;\n']))
        ),
        yl = (0, Cn.default)('div')(
          Jo ||
            (Jo = (0, a.A)([
              '\n  background: #f0f6fa;\n  color: #adbbcd;\n  display: flex;\n  padding: 1em 0;\n  margin-left: 0px;\n  ',
              '\n\n  margin-bottom: 45px;\n  padding-left: 24px;\n'
            ])),
          v.Ay.small(Zo || (Zo = (0, a.A)(['\n    margin-left: 180px;\n  '])))
        ),
        bl = (0, Cn.default)(yl)(
          Qo || (Qo = (0, a.A)(['\n  background: #fef7e9;\n']))
        ),
        Al = (0, Cn.default)('div')(
          el ||
            (el = (0, a.A)([
              '\n  margin-top: 20px;\n  background: #fef7e9;\n  display: flex;\n'
            ]))
        ),
        jl = (0, Cn.default)('div')(
          tl || (tl = (0, a.A)(['\n  margin-top: 15px;\n']))
        ),
        wl = ((0, Cn.default)('span')(
          nl ||
            (nl = (0, a.A)([
              '\n  display: inline-block;\n  transform: translate(25%, 20%);\n'
            ]))
        ),
        (0, Cn.default)('a')(
          rl ||
            (rl = (0, a.A)([
              '\n  margin-right: ',
              ';\n  font-size: 14px;\n  letter-spacing: 0.58px;\n  text-align: center;\n  margin-left: auto;\n  min-width: 130px;\n'
            ])),
          function(e) {
            return e.outOfSync, ''
          }
        )),
        El = (0, Cn.default)(Ne.h)(
          il ||
            (il = (0, a.A)([
              '\n  margin-right: 5px;\n  margin-top: 6px;\n  width: 20px;\n  height: 20px;\n'
            ]))
        ),
        Ol = (0, Cn.default)('span')(
          al || (al = (0, a.A)(['\n  color: #f5a623;\n']))
        ),
        kl = (0, Cn.default)('div')(
          sl ||
            (sl = (0, a.A)([
              '\n  background: ',
              ';\n  padding: ',
              ';\n  margin-bottom: ',
              ';\n'
            ])),
          function(e) {
            return e.outOfSync ? '#fef7e9' : ''
          },
          function(e) {
            return e.outOfSync ? '1.5em' : '0'
          },
          function(e) {
            return e.outOfSync ? '1.5em' : '0'
          }
        ),
        Rl = (0, Cn.default)('span')(
          ol || (ol = (0, a.A)(['\n  color: ', ';\n'])),
          function(e) {
            return e.outOfSync ? '#CACACA' : ''
          }
        ),
        Cl = (0, Cn.default)('div')(
          ll ||
            (ll = (0, a.A)([
              "\n  font-family: 'Overpass';\n  background: ",
              ';\n  padding: 10px 20px;\n  margin: 5px 0px;\n'
            ])),
          function(e) {
            return e.isExpired ? '#ff926f' : '#fef7e9'
          }
        ),
        Sl = (0, Cn.default)('span')(
          dl || (dl = (0, a.A)(['\n  color: ', ';\n  margin-left: 0.5em;\n'])),
          function(e) {
            return e.isExpired ? 'white' : '#cacaca'
          }
        ),
        Tl = (0, Cn.default)('span')(
          cl || (cl = (0, a.A)(['\n  font-weight: bold;\n']))
        ),
        Il = (0, Cn.default)('span')(
          ul || (ul = (0, a.A)(['\n  color: ', ';\n  font-weight: bold;\n'])),
          function(e) {
            return e.isExpired ? 'white' : '#f5a623'
          }
        ),
        Nl = function(e) {
          var t = e.date,
            n = e.expiryTime,
            r = (0, h.B)().t,
            i = new Date() > new Date(n)
          return (0, w.jsxs)(Cl, {
            isExpired: i,
            children: [
              (0, w.jsx)(Il, {
                isExpired: i,
                children: r(
                  i ? 'singleName.expiry.expired' : 'singleName.expiry.expiring'
                )
              }),
              (0, w.jsxs)(Sl, {
                isExpired: i,
                children: [
                  r('singleName.expiry.gracePeriodEnds'),
                  ' ',
                  (0, w.jsx)(Tl, { children: (0, F.Yq)(t) })
                ]
              })
            ]
          })
        }
      function Dl(e) {
        var t
        return (
          !(null === (t = e.name) || void 0 === t || !t.match(/\.test$/)) &&
          (0 === parseInt(e.owner) || e.expiryTime < new Date())
        )
      }
      var Ml = function(e) {
        var t,
          n = e.isMigratedToNewRegistry,
          r = e.isDeedOwner,
          i = e.isRegistrant,
          a = e.showExplainer,
          s = e.canSubmit,
          o = e.outOfSync,
          l = e.loading,
          d = e.setLoading,
          c = e.isOwnerOfParent,
          u = e.isOwner,
          m = e.refetch,
          p = e.domain,
          g = e.dnssecmode,
          f = e.account,
          x = e.loadingIsMigrated,
          v = e.refetchIsMigrated,
          y = e.isParentMigratedToNewRegistry,
          A = e.loadingIsParentMigrated,
          j = e.readOnly,
          E = void 0 !== j && j,
          O = (0, h.B)().t,
          k = p.expiryTime < new Date(),
          R = p.available || '0x0' === p.owner ? null : p.owner,
          C = p.available || '0x0' === p.registrant ? null : p.registrant,
          S = '[root]' === p.name ? null : p.parent ? p.parent : '[root]',
          T =
            2 ===
              (null === (t = p.name) || void 0 === t
                ? void 0
                : t.split('.').length) &&
            0 === parseInt(p.owner) &&
            'nzt' !== p.parent &&
            !p.isDNSRegistrar
        return (0, w.jsxs)(pl, {
          'data-testid': 'name-details',
          children: [
            u && (0, w.jsx)(Un, { initialState: a }),
            0 !== parseInt(p.owner, 16) &&
              !x &&
              !n &&
              (0, w.jsx)(er, {
                account: f,
                domain: p,
                dnssecmode: g,
                refetchIsMigrated: v,
                isParentMigratedToNewRegistry: y,
                loadingIsParentMigrated: A,
                readOnly: E
              }),
            S
              ? (0, w.jsxs)(tr, {
                  uneditable: !0,
                  children: [
                    (0, w.jsx)(nr, { children: O('c.parent') }),
                    (0, w.jsx)(rr, {
                      children: (0, w.jsx)(pe.N_, {
                        to: '/name/'.concat(S),
                        'aria-label': O('c.parent'),
                        children: S
                      })
                    })
                  ]
                })
              : '',
            T &&
              (0, w.jsx)(Cl, {
                children: (0, w.jsxs)(tr, {
                  children: [
                    O('c.cannotclaimDns', { name: S }),
                    (0, w.jsxs)(wl, {
                      href: 'https://docs.ens.domains/dns-registrar-guide',
                      target: '_blank',
                      children: [
                        O('c.learnmore'),
                        ' ',
                        (0, w.jsx)('nzterScanLinkContainer', {
                          children: (0, w.jsx)(ar.h, {})
                        })
                      ]
                    })
                  ]
                })
              }),
            (0, w.jsxs)(kl, {
              outOfSync: o,
              children: [
                'nzt' === p.parent && p.isNewRegistrar
                  ? (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(ti, {
                          domain: p,
                          keyName: 'registrant',
                          value: C,
                          canEdit: i && !k && !E,
                          isExpiredRegistrant: i && k,
                          type: 'address',
                          editButton: O('c.transfer'),
                          mutationButton: O('c.transfer'),
                          mutation: ve.j$,
                          refetch: m,
                          confirm: !0,
                          copyToClipboard: !0
                        }),
                        (0, w.jsx)(ti, {
                          domain: p,
                          keyName: 'Controller',
                          value: R,
                          canEdit: !E && (i || (u && n)),
                          deedOwner: p.deedOwner,
                          isDeedOwner: r,
                          type: 'address',
                          editButton: O(i ? 'c.set' : 'c.transfer'),
                          mutationButton: O(i ? 'c.set' : 'c.transfer'),
                          mutation: i ? ve.kF : ve.$M,
                          refetch: m,
                          confirm: !0,
                          copyToClipboard: !0
                        })
                      ]
                    })
                  : 'nzt' !== p.parent || p.isNewRegistrar
                  ? p.isDNSRegistrar
                    ? (0, w.jsxs)(tr, {
                        uneditable: !0,
                        children: [
                          (0, w.jsxs)(nr, {
                            children: [
                              O('c.Controller'),
                              ' ',
                              u ? (0, w.jsx)(ri, {}) : ''
                            ]
                          }),
                          (0, w.jsx)(rr, {
                            children: (0, w.jsxs)(vl, {
                              address: p.owner,
                              ariaLabel: O('c.Controller'),
                              children: [
                                o
                                  ? (0, w.jsx)(ur.M, {
                                      address: p.owner,
                                      imageSize: 24,
                                      color: '#E1E1E1',
                                      bgcolor: '#FFFFFF',
                                      spotcolor: '#CFCFCF'
                                    })
                                  : (0, w.jsx)(ur.M, {
                                      address: p.owner,
                                      imageSize: 24
                                    }),
                                (0, w.jsx)(Rl, {
                                  outOfSync: o,
                                  children: p.owner
                                })
                              ]
                            })
                          }),
                          (0, w.jsx)(xl, {
                            outOfSync: o,
                            children:
                              s && !E
                                ? (0, w.jsx)(si, {
                                    name: p.name,
                                    parentOwner: p.parentOwner,
                                    refetch: m,
                                    actionText: O('c.sync')
                                  })
                                : (0, w.jsx)(He.A, {
                                    text: O(
                                      'singleName.tooltips.detailsItem.ControllerAndDnsAlreadySync'
                                    ),
                                    position: 'left',
                                    border: !0,
                                    warning: !0,
                                    offset: { left: -30, top: 10 },
                                    children: function(e) {
                                      var t = e.tooltipElement,
                                        n = e.showTooltip,
                                        r = e.hideTooltip
                                      return (0, w.jsxs)(fl, {
                                        onMouseOver: function() {
                                          n()
                                        },
                                        onMouseLeave: function() {
                                          r()
                                        },
                                        type: 'disabled',
                                        children: [O('c.sync'), t]
                                      })
                                    }
                                  })
                          })
                        ]
                      })
                    : (0, w.jsx)(ti, {
                        domain: p,
                        keyName: 'Controller',
                        value: p.owner,
                        canEdit: !E && (u || c) && n,
                        deedOwner: p.deedOwner,
                        isDeedOwner: r,
                        outOfSync: o,
                        type: 'address',
                        editButton: O(c ? 'c.set' : 'c.transfer'),
                        mutationButton: O(c ? 'c.set' : 'c.transfer'),
                        mutation: c ? ve.Ov : ve.$M,
                        refetch: m,
                        confirm: !0,
                        copyToClipboard: !0
                      })
                  : (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsxs)(tr, {
                          uneditable: !0,
                          children: [
                            (0, w.jsx)(nr, { children: O('c.registrant') }),
                            (0, w.jsx)(rr, {
                              children: (0, w.jsxs)(vl, {
                                address: p.deedOwner,
                                arialLabel: O('c.registrant'),
                                children: [
                                  (0, w.jsx)(ur.M, {
                                    address: p.deedOwner,
                                    imageSize: 24
                                  }),
                                  p.deedOwner
                                ]
                              })
                            })
                          ]
                        }),
                        (0, w.jsx)(ti, {
                          domain: p,
                          keyName: 'Controller',
                          value: p.owner,
                          canEdit: !E && (i || (u && n)),
                          deedOwner: p.deedOwner,
                          isDeedOwner: r,
                          type: 'address',
                          editButton: O(i ? 'c.set' : 'c.transfer'),
                          mutationButton: O(i ? 'c.set' : 'c.transfer'),
                          mutation: i ? ve.kF : ve.$M,
                          refetch: m,
                          confirm: !0,
                          copyToClipboard: !0
                        })
                      ]
                    }),
                p.isDNSRegistrar
                  ? (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsxs)(tr, {
                          uneditable: !0,
                          children: [
                            (0, w.jsx)(nr, { children: O('dns.dnsowner') }),
                            (0, w.jsx)(rr, {
                              children: g.displayError
                                ? (0, w.jsx)(Ol, { children: g.title })
                                : (0, w.jsxs)(vl, {
                                    address: p.dnsOwner,
                                    ariaLabel: O('dns.dnsowner'),
                                    children: [
                                      (0, w.jsx)(ur.M, {
                                        address: p.dnsOwner,
                                        imageSize: 24
                                      }),
                                      p.dnsOwner
                                    ]
                                  })
                            }),
                            (0, w.jsx)(xl, {
                              outOfSync: o,
                              children: l
                                ? (0, w.jsx)(fl, {
                                    children: (0, w.jsx)(gl, {})
                                  })
                                : (0, w.jsxs)(fl, {
                                    onClick: function() {
                                      d(!0),
                                        m()
                                          .then(function(e) {
                                            d(!1)
                                          })
                                          .catch(function(e) {
                                            console.log('failed to refetch', e)
                                          })
                                    },
                                    children: [O('c.refresh'), ' ']
                                  })
                            })
                          ]
                        }),
                        g.displayError
                          ? (0, w.jsxs)(bl, {
                              children: [
                                (0, w.jsx)(El, {}),
                                p.stateError
                                  ? p.stateError
                                  : O('singleName.dns.messages.error'),
                                (0, w.jsxs)(wl, {
                                  href:
                                    'https://docs.ens.domains/dns-registrar-guide',
                                  target: '_blank',
                                  children: [
                                    O('c.learnmore'),
                                    ' ',
                                    (0, w.jsx)('nzterScanLinkContainer', {
                                      children: (0, w.jsx)(ar.h, {})
                                    })
                                  ]
                                })
                              ]
                            })
                          : o
                          ? (0, w.jsxs)(jl, {
                              children: [
                                (0, w.jsx)(b.HR, {}),
                                (0, w.jsxs)(Al, {
                                  children: [
                                    (0, w.jsx)(El, {}),
                                    (0, w.jsx)(Rn.x, {
                                      i18nKey:
                                        'singleName.dns.messages.outOfSync',
                                      children: g.explainer
                                    }),
                                    (0, w.jsxs)(wl, {
                                      href:
                                        'https://docs.ens.domains/dns-registrar-guide',
                                      target: '_blank',
                                      outOfSync: o,
                                      children: [
                                        O('c.learnmore'),
                                        ' ',
                                        (0, w.jsx)('nzterScanLinkContainer', {
                                          children: (0, w.jsx)(ar.h, {})
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          : (0, w.jsxs)(yl, {
                              children: [
                                (0, w.jsx)(Rn.x, {
                                  i18nKey:
                                    'singleName.dns.messages.readyToRegister',
                                  children: g.explainer
                                }),
                                (0, w.jsxs)(wl, {
                                  href:
                                    'https://docs.ens.domains/dns-registrar-guide',
                                  target: '_blank',
                                  children: [
                                    O('c.learnmore'),
                                    ' ',
                                    (0, w.jsx)('nzterScanLinkContainer', {
                                      children: (0, w.jsx)(ar.h, {})
                                    })
                                  ]
                                })
                              ]
                            })
                      ]
                    })
                  : '',
                p.registrationDate
                  ? (0, w.jsxs)(tr, {
                      uneditable: !0,
                      children: [
                        (0, w.jsx)(nr, { children: O('c.registrationDate') }),
                        (0, w.jsx)(rr, {
                          children: (0, F.Yq)(p.registrationDate)
                        })
                      ]
                    })
                  : '',
                p.available
                  ? ''
                  : p.isNewRegistrar || p.gracePeriodEndDate
                  ? (0, w.jsxs)(w.Fragment, {
                      children: [
                        (0, w.jsx)(ti, {
                          domain: p,
                          keyName: 'Expiration Date',
                          value: p.expiryTime,
                          canEdit: !E && 0 !== parseInt(f, 16),
                          type: 'date',
                          editButton: O('c.renew'),
                          mutationButton: O('c.renew'),
                          mutation: ve.uz,
                          refetch: m,
                          confirm: !0
                        }),
                        p.gracePeriodEndDate
                          ? (0, w.jsx)(Nl, {
                              expiryTime: p.expiryTime,
                              date: p.gracePeriodEndDate
                            })
                          : ''
                      ]
                    })
                  : p.expiryTime
                  ? (0, w.jsxs)(tr, {
                      uneditable: !0,
                      children: [
                        (0, w.jsx)(nr, { children: O("c['Expiration Date']") }),
                        (0, w.jsx)(hl, {
                          isExpired: k,
                          children: (0, F.Yq)(p.expiryTime)
                        })
                      ]
                    })
                  : ''
              ]
            }),
            (0, w.jsx)(b.HR, {}),
            (0, w.jsx)(Bo, {
              domain: p,
              isOwner: u,
              refetch: m,
              account: f,
              isMigratedToNewRegistry: n,
              readOnly: E
            }),
            Dl(p) ? (0, w.jsx)(ml, { domain: p, refetch: m }) : null
          ]
        })
      }
      var Pl = function(e) {
          var t,
            n,
            r = e.domain,
            a = e.isOwner,
            l = e.isOwnerOfParent,
            d = e.refetch,
            c = e.account,
            m = e.registrationOpen,
            p = e.tab,
            g = e.pathname,
            f = e.isNameWrapped,
            x = void 0 !== f && f,
            h = e.isReadOnly,
            v = void 0 === h || h,
            y = (0, s.useState)(void 0),
            b = (0, i.A)(y, 2),
            A = b[0],
            j = b[1],
            E = (0, o.I)(u.X3, { variables: { name: r.name } }),
            O = E.data,
            R = (void 0 === O ? {} : O).isMigrated,
            C = E.loading,
            S = E.refetch,
            T = (0, o.I)(u.X3, { variables: { name: r.parent } }),
            I = T.data,
            N = (void 0 === I ? {} : I).isMigrated,
            D = T.loading,
            M = 0 !== parseInt(c),
            P = !C && R,
            _ = N,
            F = r.deedOwner === c,
            B = !r.available && r.registrant === c
          ;[5, 6].includes(r.state) && !R
            ? ((t = kn[7]),
              (n = M && r.isDNSRegistrar && 'SUBMIT_PROOF' === t.state))
            : ((t = kn[r.state]),
              (n =
                M &&
                r.isDNSRegistrar &&
                'SUBMIT_PROOF' === t.state &&
                r.owner.toLowerCase() !== r.dnsOwner.toLowerCase()))
          var z = !parseInt(r.resolver),
            L = t && t.outOfSync,
            q = g.replace(/\/$/, '')
          return !q.match('/register$|/details$|/subdomains$')
            ? (0, w.jsx)(k.rd, { to: ''.concat(q, '/').concat(p) })
            : (0, w.jsxs)(w.Fragment, {
                children: [
                  (0, w.jsx)(k.qh, {
                    path: '/name/:name/details',
                    render: function() {
                      return (0, w.jsx)(Ml, {
                        loadingIsMigrated: C,
                        isMigratedToNewRegistry: P,
                        isDeedOwner: F,
                        isRegistrant: B,
                        showExplainer: z,
                        canSubmit: n,
                        outOfSync: L,
                        loading: A,
                        setLoading: j,
                        isOwnerOfParent: l,
                        isParentMigratedToNewRegistry: _,
                        loadingIsParentMigrated: D,
                        isOwner: a,
                        refetch: d,
                        domain: r,
                        dnssecmode: t,
                        account: c,
                        refetchIsMigrated: S,
                        readOnly: x
                      })
                    }
                  }),
                  (0, w.jsx)(k.qh, {
                    exact: !0,
                    path: '/name/:name/subdomains',
                    render: function() {
                      return (0, w.jsx)(On, {
                        domain: r,
                        isOwner: a,
                        'data-testid': 'subdomains',
                        isMigratedToNewRegistry: P,
                        loadingIsMigrated: C,
                        isParentMigratedToNewRegistry: _,
                        loadingIsParentMigrated: D,
                        readOnly: x
                      })
                    }
                  }),
                  (0, w.jsx)(k.qh, {
                    exact: !0,
                    path: '/name/:name/register',
                    render: function() {
                      return (0, w.jsx)(on, {
                        registrationOpen: m,
                        domain: r,
                        refetch: d,
                        refetchIsMigrated: S,
                        isNameWrapped: x,
                        isReadOnly: v
                      })
                    }
                  })
                ]
              })
        },
        _l = {
          initialState: 'ENABLE_DNSSEC',
          states: {
            ENABLE_DNSSEC: { on: { NEXT: 'ADD_TEXT' } },
            ADD_TEXT: { on: { NEXT: 'SUBMIT_PROOF' } },
            SUBMIT_PROOF: { on: { NEXT: 'SUBMIT_SENT' } },
            SUBMIT_SENT: { on: { NEXT: 'SUBMIT_CONFIRMED' } },
            SUBMIT_CONFIRMED: { on: { NEXT: 'SUBMIT_CONFIRMED' } }
          }
        },
        Fl = N(_l),
        Bl = Fl.registerReducer
      Fl.hasReachedState
      var zl = (0, x.A)('div', { target: 'e17aiox40' })(
          'color:',
          function(e) {
            return 100 === e.progress ? '#42E068' : '#dfdfdf'
          },
          ';font-size:34px;font-weight:300;position:relative;width:60px;height:60px;span{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}'
        ),
        Ll = (0, x.A)('svg', { target: 'e17aiox41' })(
          'stroke:#ccc;circle{stroke-dasharray:',
          180,
          ';stroke-dashoffset:0;}circle.progress{stroke-dasharray:',
          180,
          ';stroke-dashoffset:',
          function(e) {
            return 1.8 * (e.progress - 100)
          },
          ';}'
        ),
        ql = (0, x.A)('div', { target: 'e17aiox42' })({
          name: '1c5k5tl',
          styles:
            'margin-left:8px;div{font-weight:100;font-size:20px;color:#2b2b2b;letter-spacing:0;}p{font-size:12px;color:#adbbcd;letter-spacing:0;}'
        }),
        Ul = (0, x.A)('div', { target: 'e17aiox43' })({
          name: 'k008qs',
          styles: 'display:flex;'
        }),
        Hl = function(e) {
          var t = e.number,
            n = e.text,
            r = e.title,
            i = e.progress,
            a = void 0 === i ? 100 : i
          return (0, w.jsxs)(Ul, {
            children: [
              (0, w.jsxs)(zl, {
                progress: a,
                children: [
                  (0, w.jsxs)(Ll, {
                    height: '60',
                    width: '60',
                    progress: a,
                    children: [
                      (0, w.jsx)('circle', {
                        cx: '30',
                        cy: '30',
                        r: '28',
                        stroke: '#dfdfdf',
                        strokeWidth: '2',
                        fill: 'none',
                        transform: 'rotate(-90, 30, 30)'
                      }),
                      (0, w.jsx)('circle', {
                        cx: '30',
                        cy: '30',
                        r: '28',
                        strokeWidth: '2',
                        stroke: '#42E068',
                        fill: 'none',
                        className: 'progress',
                        transform: 'rotate(-90, 30, 30)'
                      })
                    ]
                  }),
                  (0, w.jsx)('span', { children: t })
                ]
              }),
              (0, w.jsxs)(ql, {
                children: [
                  (0, w.jsx)('div', { children: r }),
                  (0, w.jsx)('p', { children: n })
                ]
              })
            ]
          })
        },
        Vl = (0, x.A)('section', { target: 'e1nbaug0' })(
          'display:grid;grid-template-columns:1fr;grid-row-gap:30px;border-bottom:',
          function(e) {
            return e.border ? '1' : '0'
          },
          'px solid #dfdfdf;'
        ),
        Yl = function(e) {
          var t = e.step,
            n = e.number,
            r = e.title,
            i = e.text,
            a = e.border
          return (0, w.jsx)(w.Fragment, {
            children: (0, w.jsx)(Vl, {
              border: a,
              children: (0, w.jsx)(Hl, {
                number: n,
                progress:
                  'SUBMIT_CONFIRMED' === t ? 100 : 'SUBMIT_SENT' === t ? 50 : 0,
                title: r,
                text: i
              })
            })
          })
        }
      var Wl = (0, x.A)('div', { target: 'el8mv480' })({
          name: 'q2ms4q',
          styles: 'width:60px;'
        }),
        Xl = (0, x.A)(m.A, { target: 'el8mv481' })({
          name: 'm2kbm0',
          styles: 'width:30%;margin:auto;'
        }),
        Kl = (0, x.A)('span', { target: 'el8mv482' })({
          name: '1bv9mw7',
          styles: 'display:inline-block;transform:translate(25%,20%);'
        }),
        Gl = (0, x.A)('div', { target: 'el8mv483' })({
          name: '2p5bw9',
          styles:
            'display:flex;justify-content:flex-end;align-items:center;padding-top:20px;'
        }),
        $l = (0, x.A)('a', { target: 'el8mv484' })({
          name: '10d8d2u',
          styles:
            'margin-right:1em;font-size:14px;letter-spacing:0.58px;text-align:center;margin-left:auto;'
        }),
        Jl = (0, x.A)(Ie, { target: 'el8mv485' })({
          name: '1sylyko',
          styles: 'margin-right:5px;'
        }),
        Zl = function() {
          return (0, w.jsx)('svg', {
            width: '16',
            height: '16',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, w.jsx)('path', {
              d:
                'M8.739 5.82c-.039.746-.096 1.512-.134 2.258-.02.25-.02.268-.02.517a.723.723 0 0 1-.727.708.707.707 0 0 1-.727-.689c-.058-1.167-.134-2.143-.192-3.311l-.057-.938c-.02-.478.268-.9.727-1.034a.972.972 0 0 1 1.13.556c.057.153.095.306.095.478-.019.479-.057.976-.095 1.455m-.88 6.316a.98.98 0 0 1-.977-.976.98.98 0 0 1 .976-.976c.536 0 .976.44.957.995.02.517-.44.957-.957.957M7.93 0a7.93 7.93 0 1 0 0 15.86A7.93 7.93 0 0 0 7.93 0',
              fill: '#F5A623',
              fillRule: 'evenodd'
            })
          })
        },
        Ql = (0, x.A)('span', { target: 'el8mv486' })({
          name: 'rwq7by',
          styles: 'margin-left:0.2em;font-size:14px;color:#f5a623;'
        })
      function ed(e) {
        var t = e.step,
          n = e.name,
          r = e.parentOwner,
          i = e.incrementStep,
          a = e.txHash,
          s = e.setTxHash,
          o = e.refetch,
          l = e.loading,
          d = e.setLoading,
          c = e.readOnly,
          u = (0, h.B)().t,
          m = function(e) {
            return l
              ? (0, w.jsx)(V.Ay, {
                  children: (0, w.jsx)(Wl, { children: (0, w.jsx)(Xl, {}) })
                })
              : (0, w.jsx)(V.Ay, {
                  onClick: function() {
                    d(!0),
                      o().then(function(t) {
                        d(!1), t.data.singleName.state > e && i()
                      })
                  },
                  children: u('c.refresh')
                })
          }
        return {
          ENABLE_DNSSEC: (0, w.jsx)(m, { number: 2 }),
          ADD_TEXT: (0, w.jsx)(m, { number: 4 }),
          SUBMIT_PROOF: (0, w.jsx)(fe.s, {
            mutation: ve.gl,
            onCompleted: function(e) {
              s(Object.values(e)[0]), i()
            },
            children: function(e) {
              return (0, w.jsx)(V.Ay, {
                onClick: function() {
                  e({ variables: { name: n, parentOwner: r } })
                },
                type: c ? 'disabled' : 'primary',
                children: u('c.register')
              })
            }
          }),
          SUBMIT_SENT: (0, w.jsx)(ye.A, {
            txHash: a,
            onConfirmed: function() {
              i()
            }
          }),
          SUBMIT_CONFIRMED: (0, w.jsxs)(V.Ay, {
            onClick: function() {
              return o()
            },
            children: [(0, w.jsx)(Jl, {}), u('dns.viewinmanager')]
          })
        }[t]
      }
      var td = function(e) {
          var t = e.name,
            n = e.parentOwner,
            r = e.step,
            a = e.incrementStep,
            o = e.refetch,
            l = e.error,
            d = e.readOnly,
            c = (0, h.B)().t,
            u = (0, s.useState)(void 0),
            m = (0, i.A)(u, 2),
            p = m[0],
            g = m[1],
            f = (0, s.useState)(void 0),
            x = (0, i.A)(f, 2),
            v = x[0],
            y = x[1]
          return (0, w.jsxs)(Gl, {
            children: [
              l
                ? (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsx)(Zl, {}),
                      (0, w.jsx)(Ql, { children: l })
                    ]
                  })
                : null,
              (0, w.jsxs)($l, {
                href: 'https://docs.ens.domains/dns-registrar-guide',
                target: '_blank',
                children: [
                  c('c.learnmore'),
                  (0, w.jsx)(Kl, { children: (0, w.jsx)(ar.h, {}) })
                ]
              }),
              (0, w.jsx)(ed, {
                step: r,
                name: t,
                parentOwner: n,
                incrementStep: a,
                txHash: p,
                setTxHash: g,
                refetch: o,
                loading: v,
                setLoading: y,
                readOnly: d
              })
            ]
          })
        },
        nd = n(11486)
      var rd,
        id,
        ad,
        sd,
        od,
        ld = (0, x.A)(nd.A, { target: 'eoumirh0' })({
          name: '1z0j3iw',
          styles: 'display:flex;overflow:hidden;svg{flex-grow:1;}'
        }),
        dd = (0, x.A)('div', { target: 'eoumirh1' })({
          name: '19lgokg',
          styles: 'padding:20px 40px;'
        }),
        cd = (0, x.A)('span', { target: 'eoumirh2' })(
          'color:',
          function(e) {
            return e.color
          },
          ';'
        ),
        ud = (0, x.A)('span', { target: 'eoumirh3' })({
          name: '1noogy1',
          styles: 'color:#d8d8d8;'
        }),
        md = (0, x.A)('div', { target: 'eoumirh4' })({
          name: '11buw17',
          styles:
            'background:#f0f6fa;display:flex;padding:1em 0;*{padding-left 24px;}'
        }),
        pd = (0, x.A)('ul', { target: 'eoumirh5' })({
          name: 'qd70tj',
          styles:
            'background:#f0f6fa;list-style:none;overflow:hidden;display:flex;padding:1em;li{border-right:1px solid #adbbcd;text-align:center;flex:auto;}li a{color:white;text-decoration:none;padding:10px 0 10px 65px;background:brown;background:hsla(34,85%,35%,1);position:relative;display:block;float:left;}li:last-child{border-right:none;}'
        }),
        gd = (0, x.A)('span', { target: 'eoumirh6' })({
          name: 's3qwly',
          styles: 'margin-right:0.5em;'
        }),
        fd = function(e) {
          var t,
            n = e.number,
            r = e.currentNumber,
            i = e.text,
            a = n < r ? '\u2713' : n
          return (
            (t = n === r ? '#2B2B2B' : n < r ? '#42E068' : '#D8D8D8'),
            (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(gd, {
                  children: (0, w.jsx)('svg', {
                    width: '12px',
                    height: '12px',
                    viewBox: '0 0 12 12',
                    version: '1.1',
                    children: (0, w.jsx)('g', {
                      stroke: 'none',
                      strokeWidth: '1',
                      fill: 'none',
                      fillRule: 'evenodd',
                      children: (0, w.jsx)('g', {
                        transform: 'translate(-694.000000, -314.000000)',
                        children: (0, w.jsx)('g', {
                          transform: 'translate(404.000000, 183.000000)',
                          children: (0, w.jsx)('g', {
                            transform: 'translate(37.000000, 119.000000)',
                            children: (0, w.jsx)('g', {
                              transform: 'translate(253.000000, 9.000000)',
                              children: (0, w.jsxs)('g', {
                                transform: 'translate(0.000000, 2.000000)',
                                children: [
                                  (0, w.jsx)('circle', {
                                    fill: t,
                                    cx: '6',
                                    cy: '7',
                                    r: '6'
                                  }),
                                  (0, w.jsx)('text', {
                                    fontFamily: 'Helvetica',
                                    fontSize: '10',
                                    fontWeight: 'normal',
                                    letterSpacing: '0.3125',
                                    fill: '#F0F6FA',
                                    children: (0, w.jsx)('tspan', {
                                      x: '2.8',
                                      y: '10',
                                      children: a
                                    })
                                  })
                                ]
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                }),
                (0, w.jsx)(cd, { color: t, children: i })
              ]
            })
          )
        },
        xd = function(e) {
          var t = e.account,
            n = e.domain,
            r = e.refetch,
            a = e.readOnly,
            o = e.registrarAddress,
            l = (0, h.B)().t,
            d = kn[n.state],
            c = (0, s.useReducer)(Bl, d.state || _l.initialState),
            u = (0, i.A)(c, 2),
            m = u[0],
            p = u[1],
            g = (function(e, t, n, r) {
              var i = {
                ENABLE_DNSSEC: {
                  title: r('dns.steps.enable.title'),
                  text: r('dns.steps.enable.title'),
                  number: 1
                },
                ADD_TEXT: {
                  title: (0, w.jsxs)(w.Fragment, {
                    children: [
                      r('dns.steps.addtext.title'),
                      (0, w.jsxs)(ud, { children: ['a=', t] })
                    ]
                  }),
                  text: r('dns.steps.addtext.text'),
                  number: 2
                },
                SUBMIT_PROOF: [
                  {
                    title: r('dns.steps.proof.title1'),
                    text: r('dns.steps.proof.text1'),
                    number: 3,
                    owner: !0
                  },
                  {
                    title: r('dns.steps.proof.title2'),
                    text: r('dns.steps.proof.text2'),
                    number: 3
                  }
                ],
                SUBMIT_SENT: [
                  {
                    title: r('dns.steps.proof.title1'),
                    text: r('dns.steps.proof.text1'),
                    number: 3,
                    owner: !0
                  },
                  {
                    title: r('dns.steps.proof.title2'),
                    text: r('dns.steps.proof.text2'),
                    number: 3
                  }
                ],
                SUBMIT_CONFIRMED: [
                  {
                    title: r('dns.steps.manage.title'),
                    text: r('dns.steps.manage.text1'),
                    number: 4,
                    owner: !0
                  },
                  {
                    title: r('dns.steps.manage.title'),
                    text: r('dns.steps.manage.text2'),
                    number: 4
                  }
                ]
              }[e]
              return (
                i.length >= 0 &&
                  (i = t && n.toLowerCase() === t.toLowerCase() ? i[0] : i[1]),
                i
              )
            })(m, t, n.dnsOwner, l),
            f = d.displayError && (n.stateError || d.title),
            x =
              n.dnsOwner &&
              [2, 3, 4].includes(g.number) &&
              0 !== parseInt(n.dnsOwner)
          return (0, w.jsxs)(dd, {
            children: [
              (0, w.jsxs)(pd, {
                children: [
                  (0, w.jsxs)('li', {
                    children: [
                      (0, w.jsx)(fd, {
                        number: 1,
                        currentNumber: g.number,
                        text: l('dns.breadcrumbs.0')
                      }),
                      ' '
                    ]
                  }),
                  (0, w.jsx)('li', {
                    children: (0, w.jsx)(fd, {
                      number: 2,
                      currentNumber: g.number,
                      text: l('dns.breadcrumbs.1')
                    })
                  }),
                  (0, w.jsx)('li', {
                    children: (0, w.jsx)(fd, {
                      number: 3,
                      currentNumber: g.number,
                      text: l('dns.breadcrumbs.2')
                    })
                  }),
                  (0, w.jsx)('li', {
                    children: (0, w.jsx)(fd, {
                      number: 4,
                      currentNumber: g.number,
                      text: l('dns.breadcrumbs.3')
                    })
                  })
                ]
              }),
              (0, w.jsx)(Yl, {
                step: m,
                border: !x,
                number: g.number,
                title: g.title,
                text: g.text
              }),
              x
                ? (0, w.jsxs)(md, {
                    children: [
                      (0, w.jsxs)('span', {
                        children: [
                          l('dns.dnsowner'),
                          ' ',
                          g.owner ? (0, w.jsx)(ri, {}) : null
                        ]
                      }),
                      (0, w.jsxs)(ld, {
                        address: n.dnsOwner,
                        children: [
                          (0, w.jsx)(ur.M, {
                            address: n.dnsOwner,
                            imageSize: 24
                          }),
                          n.dnsOwner
                        ]
                      })
                    ]
                  })
                : null,
              (0, w.jsx)(td, {
                name: n.name,
                parentOwner: o,
                incrementStep: function() {
                  return p('NEXT')
                },
                step: m,
                error: f,
                state: n.state,
                label: n.label,
                refetch: r,
                readOnly: a
              })
            ]
          })
        },
        hd = function(e) {
          return (0, w.jsx)(xd, (0, R.A)({}, e))
        },
        vd = (0, x.A)('div', { target: 'e2p7w0b0' })(
          'padding:20px;text-align:center;',
          v.Ay.medium(rd || (rd = (0, a.A)(['\n    padding: 40px 40px;\n  ']))),
          ''
        ),
        yd = (0, x.A)('div', { target: 'e2p7w0b1' })(
          'background:#f0f6fa;padding:20px;display:flex;justify-content:space-between;flex-direction:column;align-items:center;',
          v.Ay.medium(
            id ||
              (id = (0, a.A)([
                '\n    flex-direction: row;\n    align-items: flex-start;\n  '
              ]))
          ),
          ' p{text-align:left;max-width:500px;font-weight:300;line-height:26px;font-size:18px;margin-top:0;}',
          v.Ay.small(ad || (ad = (0, a.A)(['\n    padding: 40px 40px;\n  ']))),
          ''
        )
      function bd(e) {
        e.name
        return (0, w.jsx)(vd, {
          children: (0, w.jsx)(yd, {
            children: '1 ~ 2 characters are not allowed to register.'
          })
        })
      }
      var Ad = (0, x.A)(pe.N_, { target: 'e1hk9v110' })(
          'font-size:14px;background:',
          function(e) {
            return e.active ? '#2C46A6' : 'transparent'
          },
          ';color:',
          function(e) {
            return e.active ? 'white' : '#D2D2D2'
          },
          ';transform:scale(',
          function(e) {
            return e.active ? '1.08' : '1'
          },
          ');transition:background 0.1s ease-out,transform 0.3s ease-out;padding:10px 20px;',
          v.Ay.small(sd || (sd = (0, a.A)(['\n    padding: 10px 30px;\n  ']))),
          ' &:hover,&:visited{color:',
          function(e) {
            return e.active ? 'white' : '#D2D2D2'
          },
          ';}&:first-child{border-radius:4px 0 0 4px;}&:last-child{border-radius:0 4px 4px 0;}'
        ),
        jd = (0, x.A)('div', { target: 'e1hk9v111' })(
          'display:inline-flex;justify-content:flex-start;border:2px solid #dfdfdf;border-radius:4px;margin-left:20px;margin-top:20px;',
          v.Ay.small(
            od ||
              (od = (0, a.A)([
                '\n    margin-right: 0;\n    margin: 0;\n    margin-left: 20px;\n  '
              ]))
          ),
          ''
        )
      function wd(e, t, n) {
        var r = e.name
        return 'nzt' !== e.parent
          ? t !== '/name/'.concat(r, '/register') &&
              t !== '/name/'.concat(r, '/subdomains')
          : ('details' === n || t === '/name/'.concat(r, '/details')) &&
              t !== '/name/'.concat(r, '/register') &&
              t !== '/name/'.concat(r, '/subdomains')
      }
      var Ed = function(e) {
          var t = e.domain,
            n = e.pathname,
            r = e.parent,
            i = e.tab,
            a = (0, h.B)().t,
            s = t.name,
            o = t.state
          return (
            ('Auction' !== o || 'Reveal' !== o) &&
            (0, w.jsxs)(jd, {
              children: [
                'nzt' === r &&
                  (0, w.jsx)(Ad, {
                    active:
                      ('register' === i ||
                        n === '/name/'.concat(s, '/register')) &&
                      n !== '/name/'.concat(s, '/details') &&
                      n !== '/name/'.concat(s, '/subdomains'),
                    to: '/name/'.concat(s, '/register'),
                    children: a('singleName.tabs.register')
                  }),
                (0, w.jsx)(Ad, {
                  active: wd(t, n, i),
                  to: '/name/'.concat(s, '/details'),
                  children: a('singleName.tabs.details')
                }),
                (0, w.jsx)(Ad, {
                  active: n === '/name/'.concat(s, '/subdomains'),
                  to: '/name/'.concat(s, '/subdomains'),
                  children: a('singleName.tabs.subdomains')
                })
              ]
            })
          )
        },
        Od = n(54056),
        kd = n(55363)
      var Rd =
        n.p + 'static/media/Mushroom.961bba3f26bd149406f2acb284a1d5a7.svg'
      var Cd = n.p + 'static/media/Layers.716b2ac51431667018fa47421b703f92.svg',
        Sd = n(74761)
      var Td,
        Id,
        Nd = (0, x.A)(or.PY.img, { target: 'e4cuek70' })({
          name: '1v2nmw8',
          styles:
            'width:48px;height:48px;border-radius:50%;margin:auto;display:block;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));'
        }),
        Dd = (0, x.A)('a', { target: 'e4cuek71' })({
          name: '13o7eu2',
          styles: 'display:block;'
        }),
        Md = (0, x.A)(or.PY.img, { target: 'e4cuek72' })({
          name: '1b6g8j5',
          styles: 'margin:auto;display:block;width:22px;color:#b3b3b3;'
        }),
        Pd = (0, x.A)('div', { target: 'e4cuek73' })({
          name: '1cllmoy',
          styles:
            'color:#0e0e0e;letter-spacing:-0.01em;font-weight:bold;font-size:18px;'
        }),
        _d = (0, x.A)('div', { target: 'e4cuek74' })({
          name: '1yegtrr',
          styles:
            'color:#787878;letter-spacing:-0.01em;font-weight:500;font-size:15px;'
        }),
        Fd = (0, x.A)('div', { target: 'e4cuek75' })({
          name: '4jkyol',
          styles:
            'display:flex;flex-direction:column;align-items:flex-start;justify-content:space-around;'
        }),
        Bd = (0, x.A)('span', { target: 'e4cuek76' })({
          name: '1wlfpw0',
          styles: 'color:#628bf3;'
        }),
        zd = function(e) {
          var t = e.isWrapped,
            n = void 0 !== t && t,
            r = n ? Cd : Rd,
            i = n ? 'banner-namewrapper-edit' : 'banner-namewrapper-upgrade'
          return (0, w.jsxs)(Dd, {
            target: '_blank',
            rel: 'noreferrer',
            href: '',
            'data-testid': i,
            children: [
              (0, w.jsx)(Nd, { src: r, alt: 'Name wrapper logo' }),
              (0, w.jsxs)(Fd, {
                children: [
                  (0, w.jsx)(Pd, {
                    children: n
                      ? (0, w.jsxs)(w.Fragment, {
                          children: [
                            (0, w.jsx)('span', { children: 'Visit the ' }),
                            (0, w.jsx)(Bd, { children: 'new Manager' }),
                            (0, w.jsx)('span', {
                              children: ' to edit your upgraded name'
                            })
                          ]
                        })
                      : (0, w.jsx)('span', {
                          children: 'Wrap your name to upgrade functionality'
                        })
                  }),
                  (0, w.jsx)(_d, {
                    children: n
                      ? (0, w.jsx)('span', {
                          children:
                            'Since this is a wrapped name, you must use the new version of the Manager to modify records.'
                        })
                      : (0, w.jsxs)(w.Fragment, {
                          children: [
                            (0, w.jsx)('span', {
                              children: 'Migrate your name to the new '
                            }),
                            (0, w.jsx)(Bd, {
                              children: (0, w.jsx)('u', {
                                children: 'smart contract'
                              })
                            }),
                            (0, w.jsxs)('span', {
                              children: [
                                ' ',
                                'for additional permissions & features. This will require gas.'
                              ]
                            })
                          ]
                        })
                  })
                ]
              }),
              (0, w.jsx)(Md, { src: Sd.A, alt: 'Arrow right icon' })
            ]
          })
        },
        Ld = n(4354)
      var qd = (0, x.A)('div', { target: 'e3upn1v0' })({
          name: '1uu6enn',
          styles: 'color:#ccd4da;margin-right:20px;'
        }),
        Ud = (0, x.A)('div', { target: 'e3upn1v1' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;'
        }),
        Hd = (0, x.A)(O, { target: 'e3upn1v2' })('')
      function Vd(e) {
        var t,
          n = null === (t = e.name) || void 0 === t ? void 0 : t.split('.')
        return (
          2 === (null === n || void 0 === n ? void 0 : n.length) &&
          'nzt' !== (null === n || void 0 === n ? void 0 : n[1]) &&
          (e.isDNSRegistrar && e.owner === y.nP)
        )
      }
      var Yd = (0, l.J1)(
          Td ||
            (Td = (0, a.A)([
              '\n  query nameRegisterDataWrapper @client {\n    accounts\n    networkId\n    isReadOnly\n  }\n'
            ]))
        ),
        Wd = (0, l.J1)(
          Id ||
            (Id = (0, a.A)([
              '\n  query nameQuery @client {\n    accounts\n    isReadOnly\n  }\n'
            ]))
        )
      var Xd,
        Kd = function(e) {
          var t,
            n,
            r,
            a,
            l,
            c = e.details,
            u = e.name,
            m = e.pathname,
            p = e.type,
            x = e.refetch,
            j = (0, h.B)().t,
            E = (0, v.mG)('small'),
            O = (0, o.I)(Wd).data,
            k = O.accounts,
            R = O.isReadOnly,
            C = null === k || void 0 === k ? void 0 : k[0],
            S = (function(e, t) {
              var n
              return (
                e.owner !== y.nP &&
                !e.available &&
                (null === (n = e.owner) || void 0 === n
                  ? void 0
                  : n.toLowerCase()) ===
                  (null === t || void 0 === t ? void 0 : t.toLowerCase())
              )
            })(c, C),
            T = (0, d.$X)(c, C),
            I = c.deedOwner === C,
            N = !c.available && c.registrant === C,
            D = ((r = c.available), 'nzt' === c.parent && r),
            M = D ? 'register' : 'details',
            P = c.parentOwner
          I || N ? (a = 'Registrant') : S && (a = 'Controller'),
            (l = Vd(c) ? 'Open' : S ? 'Yours' : c.state)
          var _ = (function() {
              var e = (0, s.useState)(0),
                t = (0, i.A)(e, 2),
                n = t[0],
                r = t[1],
                a = (0, o.I)(Yd).data,
                l = a.accounts,
                d = a.networkId,
                c = a.isReadOnly,
                u = null === l || void 0 === l ? void 0 : l[0]
              return (
                (0, s.useEffect)(
                  function() {
                    r(function(e) {
                      return e + 1
                    })
                  },
                  [u, d, c]
                ),
                n
              )
            })(),
            F = (function(e, t) {
              var n = {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_GRAPH_NODE_URI:
                    'https://graph.nexis.network/subgraphs/name/graphprotocol/ens/',
                  REACT_APP_CUSTOM_NETWORK_ENS_ADDRESS:
                    '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87',
                  REACT_APP_ENS_ADDRESS:
                    '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87',
                  REACT_APP_CUSTOM_NETWORK_NAME: 'nexis',
                  REACT_APP_CUSTOM_NETWORK_CHAIN_ID: '2370',
                  REACT_APP_STAGE: 'production'
                }.REACT_APP_NAME_WRAPPER_ADDRESS,
                r = e.owner === n,
                a = (0, s.useState)(!1),
                o = (0, i.A)(a, 2),
                l = o[0],
                d = o[1],
                c = null === e || void 0 === e ? void 0 : e.name,
                u = (0, s.useCallback)(
                  (0, f.A)(
                    (0, g.A)().mark(function e() {
                      var n, r, i, a
                      return (0, g.A)().wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), (0, hn.getProvider)()
                            case 2:
                              return (
                                (n = e.sent),
                                (r = {
                                  NODE_ENV: 'production',
                                  PUBLIC_URL: '',
                                  WDS_SOCKET_HOST: void 0,
                                  WDS_SOCKET_PATH: void 0,
                                  WDS_SOCKET_PORT: void 0,
                                  FAST_REFRESH: !0,
                                  REACT_APP_GRAPH_NODE_URI:
                                    'https://graph.nexis.network/subgraphs/name/graphprotocol/ens/',
                                  REACT_APP_CUSTOM_NETWORK_ENS_ADDRESS:
                                    '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87',
                                  REACT_APP_ENS_ADDRESS:
                                    '0xA6aaC368a4f22FAbF1076946edC8fBfBD5C63c87',
                                  REACT_APP_CUSTOM_NETWORK_NAME: 'nexis',
                                  REACT_APP_CUSTOM_NETWORK_CHAIN_ID: '2370',
                                  REACT_APP_STAGE: 'production'
                                }.REACT_APP_NAME_WRAPPER_ADDRESS),
                                (i = new hn.nzters.Contract(r, Ld.HV, n)),
                                (e.next = 7),
                                i.ownerOf((0, hn.getNamehash)(c))
                              )
                            case 7:
                              ;(a = e.sent), d(a === t)
                            case 9:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  ),
                  [d, c]
                ),
                m = n && c
              return (
                (0, s.useEffect)(
                  function() {
                    m && u()
                  },
                  [m]
                ),
                { isNameWrapped: r, isNameWrappedOwner: l }
              )
            })(c, C),
            B = F.isNameWrapped,
            z = F.isNameWrappedOwner,
            L = ['local', 'dev'].includes('production'),
            q = (S || z) && L
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(kd.AS, {
                children: q ? (0, w.jsx)(zd, { isWrapped: B }) : ''
              }),
              (0, w.jsxs)(
                Od.A,
                {
                  state: l,
                  children: [
                    (0, w.jsxs)(A.A, {
                      percentDone: 0,
                      children: [
                        (0, w.jsxs)(b.h, {
                          children: [
                            null !== c && void 0 !== c && c.decrypted
                              ? u
                              : '[unknown' +
                                (null === (t = c.name) || void 0 === t
                                  ? void 0
                                  : t.split('.')[0].slice(1, 11)) +
                                '].' +
                                c.parent,
                            (0, w.jsx)(Ir, {
                              value:
                                null !== c && void 0 !== c && c.decrypted
                                  ? u
                                  : '[unknown' +
                                    (null === (n = c.name) || void 0 === n
                                      ? void 0
                                      : n.split('.')[0].slice(1, 11)) +
                                    '].' +
                                    c.parent
                            })
                          ]
                        }),
                        (0, w.jsxs)(Ud, {
                          children: [
                            !!a &&
                              (0, w.jsx)(qd, {
                                'data-testid': 'owner-type',
                                children: j(
                                  'Registrant' === a
                                    ? 'c.registrant'
                                    : 'c.Controller'
                                )
                              }),
                            (0, w.jsx)(Hd, { domain: c }),
                            E &&
                              (0, w.jsx)(Ed, {
                                pathname: m,
                                tab: M,
                                domain: c,
                                parent: c.parent
                              })
                          ]
                        })
                      ]
                    }),
                    !E &&
                      (0, w.jsx)(Ed, {
                        pathname: m,
                        tab: M,
                        domain: c,
                        parent: c.parent
                      }),
                    Vd(c)
                      ? (0, w.jsx)(hd, {
                          domain: c,
                          registrarAddress: P,
                          pathname: m,
                          refetch: x,
                          account: C,
                          readOnly: B || C === y.nP
                        })
                      : 'short' === p && c.owner === y.nP
                      ? (0, w.jsx)(bd, { name: u })
                      : (0, w.jsx)(Pl, {
                          tab: M,
                          domain: c,
                          pathname: m,
                          name: u,
                          isOwner: S,
                          isOwnerOfParent: T,
                          refetch: x,
                          account: C,
                          registrationOpen: D,
                          isNameWrapped: B,
                          isReadOnly: R
                        })
                  ]
                },
                _
              )
            ]
          })
        },
        Gd = (0, l.J1)(
          Xd ||
            (Xd = (0, a.A)([
              '\n  query singleNameQuery @client {\n    isENSReady\n    networkId\n  }\n'
            ]))
        )
      var $d = function(e) {
        var t = e.match.params.name,
          n = e.location.pathname,
          r = (0, k.W6)()
        ;(0, c.QV)(0)
        var a,
          l = (0, s.useState)(void 0),
          g = (0, i.A)(l, 2),
          f = g[0],
          x = g[1],
          h = (0, s.useState)(void 0),
          v = (0, i.A)(h, 2),
          y = v[0],
          b = v[1],
          A = (0, s.useState)(''),
          j = (0, i.A)(A, 2),
          E = j[0],
          O = j[1],
          R = (0, o.I)(Gd).data.isENSReady,
          C = (0, o.I)(u.ij, {
            variables: { name: E },
            fetchPolicy: 'no-cache',
            context: { queryDeduplication: !1 }
          }),
          S = C.data,
          T = C.loading,
          I = C.error,
          N = C.refetch
        if (
          ((0, s.useEffect)(
            function() {
              var e
              if (R)
                try {
                  ;(e = (0, d.yS)(t)) !== t && r.replace('/name/'.concat(e)),
                    O(e),
                    (document.title = t)
                } catch (n) {
                  document.title = 'Error finding name'
                } finally {
                  ;(0, d.uZ)(e || t).then(function(e) {
                    'supported' === e || 'tld' === e || 'search' === e
                      ? (x(!0), b(e))
                      : (b('invalid' === e ? 'domainMalformed' : e), x(!1))
                  })
                }
            },
            [t, R]
          ),
          f)
        ) {
          if (T) return (0, w.jsx)(m.A, { large: !0, center: !0 })
          if (I)
            return (0, w.jsx)('div', {
              children: (console.log(I), JSON.stringify(I))
            })
          if (null !== S && void 0 !== S && S.singleName)
            return (0, w.jsx)(Kd, {
              details: S.singleName,
              name: E,
              pathname: n,
              type: y,
              refetch: N
            })
        }
        return !1 === f
          ? ((a =
              'invalid' === y
                ? 'domainMalformed'
                : 'short' === y
                ? 'tooShort'
                : y),
            (0, w.jsx)(p.A, { errors: [a], searchTerm: E || t }))
          : (0, w.jsx)(m.A, { large: !0, center: !0 })
      }
    },
    98285: function() {},
    38664: function() {},
    21638: function() {},
    92668: function() {},
    90680: function() {},
    42363: function() {},
    50310: function() {},
    71281: function() {}
  }
])
//# sourceMappingURL=SingleName.326f50ce-d5973.chunk.js.map
