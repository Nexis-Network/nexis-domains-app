;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [857],
  {
    26681: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function() {
            return nt
          }
        })
      var r = n(65043),
        a = n(45458),
        i = n(80296),
        s = n(89379),
        o = n(57528),
        l = n(38180),
        c = n(88250),
        d = n(66947),
        u = n(74725),
        p = n(47246),
        g = n(86178),
        f = n.n(g),
        x = n(61766),
        m = n(96552),
        h = n(56152),
        v = n(2038),
        y = n(54056),
        b = n(3982),
        A = n(75969),
        j = n(11486),
        w = n(77113),
        k = n(71087),
        S = n(70030),
        P = n(23920),
        C = n(70579)
      var N = (0, S.A)('div', { target: 'e1g3qgee0' })({
          name: '1de598y',
          styles:
            'display:flex;padding:40px;flex-direction:column;justify-content:center;align-items:center;background:white;box-shadow:3px 4px 6px 0 rgba(229,236,241,0.3);border-radius:6px;margin-bottom:40px;h2{color:#adbbcd;font-weight:100;margin-bottom:0;padding:0;margin-top:20px;text-align:center;max-width:500px;}p{color:#2b2b2b;font-size:18px;font-weight:300;margin-top:20px;line-height:1.3em;text-align:center;max-width:400px;}'
        }),
        B = (0, S.A)('div', { target: 'e1g3qgee1' })({
          name: '18dxgig',
          styles:
            'margin-top:20px;padding-bottom:30px;padding-left:40px;padding-right:40px;'
        })
      function D(e) {
        var t = e.favourites,
          n = void 0 === t ? [] : t,
          r = e.address,
          a = (e.activeSort, e.activeFilter),
          i = e.checkedBoxes,
          s = e.setCheckedBoxes,
          o = e.setSelectAll,
          l = e.domains,
          c = e.showBlockies
        return l && 0 !== l.length
          ? (0, C.jsx)(B, {
              children: l.map(function(e) {
                var t = n
                  .map(function(e) {
                    return e.name
                  })
                  .includes(e.domain.name)
                return (0,
                C.jsx)(P.A, { name: e.domain.name, owner: r, domain: e.domain, expiryDate: null === e || void 0 === e ? void 0 : e.expiryDate, labelName: e.domain.labelName, labelhash: e.domain.labelhash, parent: e.domain.parent.name, checkedBoxes: 'registrant' === a ? i : null, setCheckedBoxes: 'registrant' === a ? s : null, setSelectAll: o, showBlockies: c, isFavourite: t, hasInvalidCharacter: e.hasInvalidCharacter }, e.domain.name)
              })
            })
          : (0, C.jsx)(N, {
              children: (0, C.jsx)('h2', {
                children: 'This address does not own any domains'
              })
            })
      }
      var E = n(46061)
      var I = (0, S.A)('ul', { target: 'erbvqbe0' })({
          name: '1qf3335',
          styles:
            'grid-area:sorting;list-style:none;display:flex;margin:0;padding:0;'
        }),
        O = (0, S.A)('li', { target: 'erbvqbe1' })({
          name: '1vf3e2d',
          styles:
            'color:#adbbcd;font-size:18px;padding:0 10px 5px;border-bottom:1px #d2d2d2 solid;&:hover,&.active{cursor:pointer;color:#2c46a6;border-bottom:1px #2c46a6 solid;}'
        })
      function R(e) {
        var t = e.activeSort,
          n = e.setActiveSort,
          r = e.activeFilter,
          a = e.className,
          i = (0, u.B)().t
        return (0, C.jsx)(I, {
          className: a,
          children:
            'registrant' === r &&
            (0, C.jsx)(O, {
              className: 'expiryDate' === t.type ? 'active' : '',
              onClick: function() {
                t.type
                  ? 'asc' === t.direction
                    ? n({ type: 'expiryDate', direction: 'desc' })
                    : 'desc' === t.direction &&
                      n({ type: 'expiryDate', direction: 'asc' })
                  : n({ type: 'expiryDate', direction: 'asc' })
              },
              children: i('address.sort.expiry')
            })
        })
      }
      var F = (0, S.A)('div', { target: 'e11ohvir0' })(
          'font-size:14px;background:',
          function(e) {
            return e.active ? '#5384FE' : 'transparent'
          },
          ';color:',
          function(e) {
            return e.active ? 'white' : '#D2D2D2'
          },
          ';transform:scale(',
          function(e) {
            return e.active ? '1.02' : '1'
          },
          ');transition:background 0.1s ease-out,transform 0.3s ease-out;padding:10px 30px;border-radius:90px;&:hover,&:visited{cursor:pointer;color:',
          function(e) {
            return e.active ? 'white' : '#D2D2D2'
          },
          ';}'
        ),
        q = (0, S.A)('div', { target: 'e11ohvir1' })({
          name: '1voqqod',
          styles:
            'display:inline-flex;justify-content:flex-start;border:1px solid #dfdfdf;border-radius:90px;'
        }),
        z = function(e) {
          return (0, C.jsx)('div', {
            children: (0, C.jsx)(q, { children: e.children })
          })
        }
      function L(e) {
        var t = e.activeFilter,
          n = (e.setActiveFilter, e.setActiveSort),
          r = e.className,
          a = e.url,
          i = (0, u.B)().t,
          s = (0, d.W6)(),
          o = (function(e) {
            var t = e.split('/')
            return 3 === t.length ? e : t.slice(0, -1).join('/')
          })(a)
        return (0, C.jsxs)(z, {
          className: r,
          children: [
            (0, C.jsx)(F, {
              active: 'registrant' === t,
              onClick: function() {
                return s.push(''.concat(o, '/registrant'))
              },
              children: i('address.filter.registrant')
            }),
            (0, C.jsx)(F, {
              active: 'controller' === t,
              onClick: function() {
                s.push(''.concat(o, '/controller')), n('alphabetical')
              },
              children: i('address.filter.controller')
            })
          ]
        })
      }
      var T,
        W = n(60349),
        M = n(13598),
        V = n(38945),
        _ = n(73525),
        J = n(90675),
        K = n(10467),
        U = n(88368),
        Y = n(424),
        H = n(94794),
        Q = n(43783)
      var X = (0, S.A)(Y.N_, { target: 'ejarzu70' })(function(e) {
          return (
            e.currentPage === e.page &&
            '\n      text-decoration: underline;\n    '
          )
        }, ' margin:0 5px;'),
        Z = (0, S.A)('div', { target: 'ejarzu71' })(
          'margin:0 20px 20px;',
          v.Ay.small(T || (T = (0, o.A)(['\n    margin: 0 40px 20px;\n  ']))),
          ''
        ),
        $ = (0, S.A)('span', { target: 'ejarzu72' })({
          name: '146q31f',
          styles: 'float:right;'
        }),
        G = {
          container: function(e) {
            return (0, s.A)(
              (0, s.A)({}, e),
              {},
              { display: 'inline-block', width: '100px' }
            )
          },
          control: function(e) {
            return (0, s.A)(
              (0, s.A)({}, e),
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
            return (0, s.A)(
              (0, s.A)({}, e),
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
            return (0, s.A)({}, e)
          },
          placeholder: function(e) {
            return (0, s.A)({}, e)
          },
          singleValue: function(e, t) {
            t.data
            return (0, s.A)({}, e)
          }
        },
        ee = [
          { value: 25, label: 25 },
          { value: 50, label: 50 },
          { value: 100, label: 100 },
          { value: 200, label: 200 },
          { value: 300, label: 300 }
        ]
      function te(e) {
        var t = e.page,
          n = e.pageLink,
          r = e.currentPage
        return (0, C.jsx)(X, {
          currentPage: r,
          page: t,
          to: ''.concat(n, '?page=').concat(t),
          children: t
        })
      }
      function ne(e) {
        var t = e.currentPage,
          n = e.setResultsPerPage,
          o = e.resultsPerPage,
          l = e.query,
          c = e.variables,
          d = e.pageLink,
          u = (function(e) {
            var t = e.resultsPerPage,
              n = e.query,
              a = e.variables,
              o = (0, r.useState)(!0),
              l = (0, i.A)(o, 2),
              c = l[0],
              d = l[1],
              u = (0, r.useState)(0),
              p = (0, i.A)(u, 2),
              g = p[0],
              f = p[1],
              x = (0, U.Ay)(),
              m = (0, Q.CL)(n),
              h = ['getRegistrations', 'getDomains']
            return (
              (0, r.useEffect)(
                function() {
                  function e() {
                    return (
                      (e = (0, K.A)(
                        (0, J.A)().mark(function e(t) {
                          var r, i, o, l
                          return (0, J.A)().wrap(function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o = function() {
                                      return (
                                        (o = (0, K.A)(
                                          (0, J.A)().mark(function e(o) {
                                            var l, c, d, u, p, g, f, h
                                            return (0, J.A)().wrap(function(e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      x.query({
                                                        query: n,
                                                        variables: (0, s.A)(
                                                          (0, s.A)({}, a),
                                                          {},
                                                          { skip: r, first: t }
                                                        )
                                                      })
                                                    )
                                                  case 2:
                                                    if (
                                                      ((l = e.sent),
                                                      (c = l.data),
                                                      (d = 0),
                                                      'getRegistrations' ===
                                                        m &&
                                                        (d =
                                                          (null ===
                                                            (u = c.account) ||
                                                          void 0 === u ||
                                                          null ===
                                                            (p =
                                                              u.registrations) ||
                                                          void 0 === p
                                                            ? void 0
                                                            : p.length) || 0),
                                                      'getDomains' === m &&
                                                        (d =
                                                          (null ===
                                                            (g = c.account) ||
                                                          void 0 === g ||
                                                          null ===
                                                            (f = g.domains) ||
                                                          void 0 === f
                                                            ? void 0
                                                            : f.length) || 0),
                                                      (r += t),
                                                      (h = o + d),
                                                      d !== t)
                                                    ) {
                                                      e.next = 11
                                                      break
                                                    }
                                                    return e.abrupt(
                                                      'return',
                                                      i(h)
                                                    )
                                                  case 11:
                                                    return e.abrupt('return', h)
                                                  case 12:
                                                  case 'end':
                                                    return e.stop()
                                                }
                                            }, e)
                                          })
                                        )),
                                        o.apply(this, arguments)
                                      )
                                    }),
                                    (i = function(e) {
                                      return o.apply(this, arguments)
                                    }),
                                    (r = 0),
                                    (e.next = 5),
                                    i(0)
                                  )
                                case 5:
                                  return (l = e.sent), e.abrupt('return', l)
                                case 7:
                                case 'end':
                                  return e.stop()
                              }
                          }, e)
                        })
                      )),
                      e.apply(this, arguments)
                    )
                  }
                  h.includes(m)
                    ? (function(t) {
                        return e.apply(this, arguments)
                      })(1e3).then(function(e) {
                        f(e), d(!1)
                      })
                    : (f(0), d(!1))
                },
                [x, n, a]
              ),
              { totalPages: Math.ceil(g / t), loading: c }
            )
          })({
            setResultsPerPage: n,
            resultsPerPage: o,
            variables: c,
            query: l
          }),
          p = u.totalPages
        if (p < 2) return null
        var g = (0, a.A)(Array(p).keys()).map(function(e) {
          return (0, C.jsx)(te, { currentPage: t, page: e + 1, pageLink: d })
        })
        return (0, C.jsxs)(Z, {
          children: [
            g,
            (0, C.jsxs)($, {
              children: [
                'Show',
                ' ',
                (0, C.jsx)(H.Ay, {
                  defaultValue: ee.filter(function(e) {
                    return e.value === o
                  }),
                  styles: G,
                  menuPlacement: 'top',
                  onChange: function(e) {
                    n(e.value)
                  },
                  options: ee
                }),
                ' ',
                'Records'
              ]
            })
          ]
        })
      }
      var re,
        ae = n(9376),
        ie = n.n(ae),
        se = n(31881),
        oe = n(93482),
        le = n(37276),
        ce = n(90208),
        de = n(4950),
        ue = ['title', 'titleId']
      function pe() {
        return (
          (pe = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          pe.apply(this, arguments)
        )
      }
      function ge(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function(e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      function fe(e, t) {
        var n = e.title,
          a = e.titleId,
          i = ge(e, ue)
        return r.createElement(
          'svg',
          pe(
            {
              width: 16,
              height: 16,
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': a
            },
            i
          ),
          n ? r.createElement('title', { id: a }, n) : null,
          re ||
            (re = r.createElement('path', {
              d:
                'M8 16c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8 8 3.5817 8 8-3.5817 8-8 8zm3.0039-10L7.2996 9.2514 4.9961 7.2295 4 8.1038 7.2996 11 12 6.8743 11.0039 6z',
              fill: '#ADBBCD',
              fillRule: 'evenodd'
            }))
        )
      }
      var xe,
        me,
        he = r.forwardRef(fe),
        ve = (n.p, n(45168)),
        ye = n(70346),
        be = n(23139),
        Ae = (0, S.A)('div', { target: 'e855f4x0' })(
          'width:100%;height:',
          function(e) {
            return 4 * (e.size || 1)
          },
          'px;'
        ),
        je = n(57985)
      var we = (0, S.A)('span', { target: 'e1205crw0' })({
          name: '1nhmhwf',
          styles: 'color:#adbbcd;'
        }),
        ke = (0, S.A)('div', { target: 'e1205crw1' })({
          name: '1j87prn',
          styles: 'color:#f5a623;'
        }),
        Se = (0, S.A)('div', { target: 'e1205crw2' })(
          'background:#f0f6fa;border:1px solid #ededed;border-radius:8px;margin:20px 30px 20px;padding:10px 15px;',
          v.Ay.medium(
            xe || (xe = (0, o.A)(['\n    margin: 20px 40px 20px;\n  ']))
          ),
          ''
        ),
        Pe = (0, S.A)('div', { target: 'e1205crw3' })({
          name: 'rmcela',
          styles: 'margin-top:15px;padding:10px;'
        }),
        Ce = (0, S.A)('div', { target: 'e1205crw4' })(
          'font-family:Overpass Mono;font-weight:700;font-size:14px;color:',
          function(e) {
            return e.nameSet ? '#747f8c' : '#adbbcd'
          },
          ';letter-spacing:0;display:flex;align-items:center;justify-content:space-between;&:hover{cursor:',
          function(e) {
            return e.pending ? 'default' : 'pointer'
          },
          ';}'
        ),
        Ne = (0, S.A)(Ce, { target: 'e1205crw5' })({
          name: '1xp4bos',
          styles: '&:hover{cursor:default;}'
        }),
        Be = (0, S.A)('div', { target: 'e1205crw6' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;'
        }),
        De = (0, S.A)(he, { target: 'e1205crw7' })(
          'margin-right: 10px;\n  flex-shrink: 0;\n',
          ';'
        ),
        Ee = (0, S.A)('div', { target: 'e1205crw8' })({
          name: '1dxm78v',
          styles:
            'font-family:Overpass;font-weight:300;font-size:14px;color:#2b2b2b;letter-spacing:0;line-height:25px;margin-bottom:10px;max-width:768px;hyphens:auto;'
        }),
        Ie = (0, S.A)('div', { target: 'e1205crw9' })({
          name: '273lky',
          styles: 'color:#5384fe;'
        }),
        Oe = (0, S.A)('div', { target: 'e1205crw10' })({
          name: '1j20cn4',
          styles:
            'display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;'
        }),
        Re = (0, je.J1)(
          me ||
            (me = (0, o.A)([
              '\n  query singleNameQuery @client {\n    isENSReady\n    networkId\n  }\n'
            ]))
        )
      var Fe = function(e) {
          var t,
            n = e.account,
            a = e.currentAddress,
            s = (0, u.B)().t,
            o = (0, le.Yz)(),
            l = o.state,
            d = o.actions,
            g = (0, r.useState)(''),
            f = (0, i.A)(g, 2),
            x = f[0],
            v = f[1],
            y = (0, r.useState)(!1),
            b = (0, i.A)(y, 2),
            A = b[0],
            j = b[1],
            k = l.editing,
            S = l.txHash,
            P = l.pending,
            N = l.confirmed,
            B = d.startEditing,
            D = d.stopEditing,
            E = d.startPending,
            I = d.setConfirmed,
            O = (0, c.I)(m.q5, {
              variables: { address: a },
              skip: !a,
              fetchPolicy: 'no-cache'
            }),
            R = O.data,
            F = (void 0 === R ? {} : R).getReverseRecord,
            q = O.loading,
            z = O.refetch,
            L = (0, se.n)(oe.Zx, {
              onCompleted: function(e) {
                Object.values(e)[0] && E(Object.values(e)[0])
              }
            }),
            T = (0, i.A)(L, 1)[0]
          ;(0, r.useEffect)(
            function() {
              F && ((0, w.W9)(F) || B())
            },
            [q]
          )
          var W = (0, c.I)(Re).data.networkId,
            M = (0, c.I)(m.yX, {
              variables: { address: a },
              fetchPolicy: 'no-cache',
              context: { queryDeduplication: !1 }
            }),
            V = M.data,
            _ = (void 0 === V ? {} : V).domains,
            J = M.refetch
          ;(0, r.useEffect)(
            function() {
              J()
            },
            [n, a, W]
          )
          var K = n && a && n.toLowerCase() === a.toLowerCase()
          function U(e) {
            e && e.label ? v(e) : v('')
          }
          function Y() {
            var e
            return (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsxs)(Ce, {
                  onClick: function(e) {
                    return k ? D() : P ? e.preventDefault() : B()
                  },
                  pending: P,
                  nameSet: (0, w.W9)(F),
                  children: [
                    (0, w.W9)(F)
                      ? (0, C.jsxs)(Be, {
                          'data-testid': 'editable-reverse-record-set',
                          children: [
                            (0, C.jsx)(De, {}),
                            s('singleName.record.messages.setTo') + F.name
                          ]
                        })
                      : (0, C.jsx)(Ie, {
                          'data-testid': 'editable-reverse-record-not-set',
                          children: s('singleName.record.messages.notSet')
                        }),
                    P && !N && S
                      ? (0, C.jsx)(de.A, {
                          txHash: S,
                          onConfirmed: function() {
                            I(), z()
                          }
                        })
                      : (0, C.jsx)(ve.A, {
                          rotated: k ? 1 : 0,
                          testid: 'open-reverse'
                        })
                  ]
                }),
                k &&
                  (0, C.jsxs)(Pe, {
                    children: [
                      (0, C.jsx)(Ee, {
                        children: (0, C.jsxs)(p.x, {
                          i18nKey: 'singleName.record.messages.explanation',
                          children: [
                            "The Reverse Resolution translates an address into a name. It allows Dapps to show in their interfaces '",
                            { name: ((0, w.W9)(F) && F.name) || 'example.nzt' },
                            "' rather than the long address '",
                            { account: n },
                            "'. If you would like to set up your reverse for a different account, please switch accounts in your dapp browser."
                          ]
                        })
                      }),
                      (null === (e = t) || void 0 === e ? void 0 : e.length) > 0
                        ? (0, C.jsx)(H.Ay, {
                            placeholder: s(
                              'singleName.record.messages.selectPlaceholder'
                            ),
                            isClearable: !0,
                            value: x,
                            onChange: U,
                            options: t
                          })
                        : (0, C.jsx)(ke, {
                            children: s(
                              'singleName.record.messages.noForwardRecordAavilable'
                            )
                          }),
                      (0, C.jsx)(Ee, {
                        children: (0, C.jsx)('p', {
                          children: (0, C.jsx)(p.x, {
                            i18nKey: 'singleName.record.messages.explanation2',
                            children:
                              'You can only select names you set this nztereum Address as.'
                          })
                        })
                      }),
                      (0, C.jsxs)(Oe, {
                        children: [
                          (0, C.jsx)(ce.Ay, {
                            mutation: function() {
                              T({
                                variables: {
                                  name:
                                    null === x || void 0 === x
                                      ? void 0
                                      : x.value
                                }
                              })
                            },
                            stopEditing: D,
                            isValid: !!x
                          }),
                          (0, w.W9)(F) &&
                            (0, C.jsxs)(C.Fragment, {
                              children: [
                                (0, C.jsx)(be.A, {
                                  onClick: function() {
                                    return j(!0)
                                  }
                                }),
                                A &&
                                  (0, C.jsxs)(ye.A, {
                                    closeModal: function() {
                                      return j(!1)
                                    },
                                    children: [
                                      s(
                                        'singleName.record.messages.reverseRecordRemoval'
                                      ),
                                      (0, C.jsx)(Ae, { size: 5 }),
                                      (0, C.jsx)(ce.Ay, {
                                        mutation: function() {
                                          T({ variables: { name: w.wI } }),
                                            j(!1)
                                        },
                                        stopEditing: function(e) {
                                          D(e), j(!1)
                                        },
                                        isValid: !0
                                      })
                                    ]
                                  })
                              ]
                            })
                        ]
                      })
                    ]
                  })
              ]
            })
          }
          return (
            _ &&
              (t = ie()(
                _.map(function(e) {
                  if ((0, h.dM)(null === e || void 0 === e ? void 0 : e.name))
                    return null === e || void 0 === e ? void 0 : e.name
                  var t = (0, h.pE)(
                    null === e || void 0 === e ? void 0 : e.name
                  )
                  return (0, h.dM)(t) ? t : null
                })
                  .filter(function(e) {
                    return !!e
                  })
                  .sort()
              ).map(function(e) {
                return { value: e, label: e }
              })),
            (0, C.jsx)(Se, {
              children: q
                ? (0, C.jsx)(we, { children: 'Loading reverse record...' })
                : (0, C.jsx)(C.Fragment, {
                    children: K
                      ? (0, C.jsx)(Y, {})
                      : (0, C.jsx)(Ne, {
                          children: (0, w.W9)(F)
                            ? (0, C.jsx)(Be, {
                                'data-testid': 'readonly-reverse-record-set',
                                children:
                                  s('singleName.record.messages.setTo') + F.name
                              })
                            : (0, C.jsx)('div', {
                                'data-testid':
                                  'readonly-reverse-record-not-set',
                                children: s('singleName.record.messages.notSet')
                              })
                        })
                  })
            })
          )
        },
        qe = n(11697),
        ze = n(71291)
      var Le,
        Te,
        We,
        Me,
        Ve,
        _e,
        Je,
        Ke,
        Ue,
        Ye = n.p + 'static/media/close.beb5c5f4194c25917e82b7273bf418e6.svg',
        He = n(96893),
        Qe = (n(55363),
        (0, l.default)(b.A)(
          Le ||
            (Le = (0, o.A)([
              '\n  justify-content: flex-start;\n  margin-bottom: 40px;\n'
            ]))
        )),
        Xe = (0, l.default)(A.h)(
          Te ||
            (Te = (0, o.A)([
              '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n'
            ]))
        ),
        Ze = ((0, l.default)(j.A)(
          We ||
            (We = (0, o.A)(['\n  min-width: 165px;\n  margin-left: auto;\n']))
        ),
        (0, l.default)('img')(
          Me ||
            (Me = (0, o.A)([
              '\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n'
            ]))
        )),
        $e = (0, l.default)('div')(
          Ve ||
            (Ve = (0, o.A)([
              "\n  padding-left: 8px;\n  display: grid;\n  align-content: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-template-areas:\n    'filters'\n    'actions'\n    'renew'\n    'sorting'\n    'selectall';\n  grid-gap: 20px 10px;\n  margin: 20px;\n\n  ",
              '\n'
            ])),
          v.Ay.large(
            _e ||
              (_e = (0, o.A)([
                "\n    margin: 20px 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    'filters actions'\n    'renew renew'\n    'sorting selectall'\n    ;\n  "
              ]))
          )
        ),
        Ge = (0, l.default)('div')(
          Je ||
            (Je = (0, o.A)([
              '\n  grid-area: selectall;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 40px;\n\n  ',
              '\n'
            ])),
          v.Ay.large(Ke || (Ke = (0, o.A)(['\n    padding-right: 10px;\n  '])))
        )
      var et = (0, je.J1)(
        Ue ||
          (Ue = (0, o.A)([
            '\n  query resetStateQuery @client {\n    networkId\n    isENSReady\n  }\n'
          ]))
      )
      var tt = function(e) {
          var t,
            n,
            o = e.url,
            l = e.address,
            g = e.showOriginBanner,
            v = e.domainType,
            b = void 0 === v ? 'registrant' : v,
            A = (0, c.I)(et).data,
            j = A.networkId,
            S = A.isENSReady,
            P = (function(e) {
              return e.toLowerCase()
            })(l),
            N = (0, d.zy)().search,
            B = (0, x.F)(),
            I = new URLSearchParams(N).get('page'),
            O = I ? parseInt(I) : 1,
            F = ((0, le.lA)().block, (0, r.useState)(25)),
            q = (0, i.A)(F, 2),
            z = q[0],
            T = q[1],
            J = (0, u.B)().t,
            K = (0, r.useState)(!0),
            U = (0, i.A)(K, 2),
            Y = U[0],
            H = U[1],
            Q = (0, r.useState)(null),
            X = (0, i.A)(Q, 2),
            Z = (X[0], X[1]),
            $ = (0, r.useState)({ type: 'expiryDate', direction: 'asc' }),
            G = (0, i.A)($, 2),
            ee = G[0],
            te = G[1],
            re = (0, r.useState)({}),
            ae = (0, i.A)(re, 2),
            ie = ae[0],
            se = ae[1],
            oe = (0, r.useState)(1),
            ce = (0, i.A)(oe, 2),
            de = ce[0],
            ue = ce[1],
            pe = (0, r.useState)(!1),
            ge = (0, i.A)(pe, 2),
            fe = ge[0],
            xe = ge[1]
          !(function(e, t, n, a, i, o) {
            ;(0, r.useEffect)(
              function() {
                e(1),
                  t({}),
                  n(null),
                  o((0, s.A)((0, s.A)({}, o()), {}, { invalidCharacter: null }))
              },
              [a, i]
            )
          })(ue, se, xe, j, l, He.V$),
            (t = f()()) && (n = t.subtract(90, 'days').unix())
          var me = (function(e) {
              var t = e.resultsPerPage,
                n = e.domainType,
                r = e.address,
                a = e.sort,
                i = e.page,
                s = e.expiryDate
              try {
                var o = (i - 1) * t,
                  l = (0, c.I)(m.ts, {
                    variables: {
                      id: r,
                      first: t,
                      skip: o,
                      orderBy: a.type,
                      orderDirection: a.direction,
                      expiryDate: s
                    },
                    skip: 'registrant' !== n,
                    fetchPolicy: 'no-cache'
                  }),
                  d = (0, c.I)(m.C_, {
                    variables: { id: r, first: t, skip: o },
                    skip: 'controller' !== n,
                    fetchPolicy: 'no-cache'
                  })
                if ('registrant' === n) return l
                if ('controller' === n) return d
                throw new Error('Unrecognised domainType')
              } catch (ye) {
                console.log(ye)
              }
            })({
              resultsPerPage: z,
              domainType: b,
              address: P,
              sort: ee,
              page: O,
              expiryDate: n
            }),
            he = me.loading,
            ve = me.data,
            ye = me.error,
            be = me.refetch,
            Ae = (0, c.I)(m.FP).data.globalError,
            je = (0, c.I)(m.a0).data,
            we = (void 0 === je ? [] : je).favourites
          if (
            ((0, r.useEffect)(
              function() {
                S && (0, w.Bn)().then(Z)
              },
              [S]
            ),
            ye)
          )
            return (
              console.log(ye),
              (0, C.jsxs)(C.Fragment, {
                children: ['Error getting domains. ', JSON.stringify(ye)]
              })
            )
          if (he) return (0, C.jsx)(W.A, { withWrap: !0, large: !0 })
          var ke = []
          'registrant' === b && ve.account
            ? (ke = (0, a.A)(ve.account.registrations))
            : 'controller' === b &&
              ve.account &&
              (ke = (0, a.A)(
                (function(e) {
                  return e.filter(function(e) {
                    return e.parent
                  })
                })(ve.account.domains).map(function(e) {
                  return { domain: e }
                })
              ))
          var Se = (0, w.Tb)(
            (function(e) {
              return e.map(function(e) {
                var t = (0, h.pE)(e.domain.name)
                return (0,
                s.A)((0, s.A)({}, e), {}, { domain: (0, s.A)((0, s.A)({}, e.domain), {}, { name: t, labelName: (0, h.dM)(t[0]) ? t.split('.')[0] : null }) })
              })
            })(ke),
            'labelName',
            !0
          )
          if (Ae.invalidCharacter || !Se)
            return (0, C.jsx)(qe.lB, { message: Ae.invalidCharacter })
          var Pe = Se,
            Ce = Object.entries(ie)
              .filter(function(e) {
                var t = (0, i.A)(e, 2)
                t[0]
                return t[1]
              })
              .map(function(e) {
                return (0, i.A)(e, 1)[0]
              }),
            Ne = Pe.filter(function(e) {
              return e.domain.labelName
            }).map(function(e) {
              return e.domain.name
            }),
            Be = !!Pe.find(function(e) {
              return (0, k.fo)(e.expiryDate)
            })
          return (0, C.jsxs)(C.Fragment, {
            children: [
              g &&
                Y &&
                (0, C.jsxs)(M.A, {
                  children: [
                    (0, C.jsx)(Ze, {
                      onClick: function() {
                        return H(!1)
                      },
                      src: Ye
                    }),
                    J('address.transactionBanner')
                  ]
                }),
              Be &&
                (0, C.jsx)(M.A, {
                  children: (0, C.jsxs)('h3', {
                    children: [
                      (0, C.jsx)('img', { alt: 'exclamation mark', src: ze.A }),
                      '\xa0 ',
                      J('address.namesExpiringSoonBanner.title'),
                      (0, C.jsx)('p', {
                        children: (0, C.jsx)(p.x, {
                          i18nKey: 'address.namesExpiringSoonBanner.text',
                          children:
                            'One or more names are expiring soon, renew them all in one transaction by selecting multiple names and click "Renew"'
                        })
                      })
                    ]
                  })
                }),
              (0, C.jsxs)(y.A, {
                children: [
                  (0, C.jsxs)(Qe, {
                    children: [
                      (0, C.jsx)(_.M, { address: l }),
                      (0, C.jsx)(Xe, { children: l })
                    ]
                  }),
                  (0, C.jsx)(Fe, { account: B, currentAddress: l }),
                  (0, C.jsxs)($e, {
                    children: [
                      (0, C.jsx)(L, {
                        activeFilter: b,
                        setActiveSort: te,
                        url: o
                      }),
                      'registrant' === b &&
                        (0, C.jsx)(E.A, {
                          years: de,
                          setYears: ue,
                          activeFilter: b,
                          selectedNames: Ce,
                          setCheckedBoxes: se,
                          setSelectAll: xe,
                          allNames: Ne,
                          address: l,
                          data: ve,
                          refetch: be,
                          getterString: 'account.registrations'
                        }),
                      (0, C.jsx)(R, {
                        activeSort: ee,
                        setActiveSort: te,
                        activeFilter: b
                      }),
                      'registrant' === b &&
                        (0, C.jsx)(C.Fragment, {
                          children: (0, C.jsx)(Ge, {
                            children: (0, C.jsx)(V.A, {
                              testid: 'checkbox-renewall',
                              type: 'double',
                              checked: fe,
                              onClick: function() {
                                fe
                                  ? se({})
                                  : (function() {
                                      var e = Ne.reduce(function(e, t) {
                                        return (e[t] = !0), e
                                      }, {})
                                      se(e)
                                    })(),
                                  xe(function(e) {
                                    return !e
                                  })
                              }
                            })
                          })
                        })
                    ]
                  }),
                  (0, C.jsx)(D, {
                    setSelectAll: xe,
                    address: l,
                    domains: Pe,
                    favourites: (0, w.Tb)(we, 'labelName'),
                    activeSort: ee,
                    activeFilter: b,
                    checkedBoxes: ie,
                    setCheckedBoxes: se,
                    showBlockies: !1
                  }),
                  (0, C.jsx)(ne, {
                    variables: { id: l, expiryDate: n },
                    currentPage: O,
                    resultsPerPage: z,
                    setResultsPerPage: T,
                    pageLink: '/address/'.concat(l, '/').concat(b),
                    query: 'registrant' === b ? m.ts : m.C_
                  })
                ]
              })
            ]
          })
        },
        nt = function(e) {
          var t,
            n,
            r = e.match,
            a = e.location,
            i = r.params.address.toLowerCase(),
            s =
              null === (t = r.params.domainType) || void 0 === t
                ? void 0
                : t.toLowerCase(),
            o = new URLSearchParams(a.search)
          return (0, C.jsx)(tt, {
            url: ((n = a.pathname), n.endsWith('/') ? n.slice(0, -1) : n),
            address: i,
            domainType: s,
            showOriginBanner: 'renew' === o.get('origin')
          })
        }
    },
    9376: function(e, t, n) {
      var r = n(64416)
      e.exports = function(e) {
        return e && e.length ? r(e) : []
      }
    }
  }
])
//# sourceMappingURL=Address.ae3c0fc1-d5973.chunk.js.map
