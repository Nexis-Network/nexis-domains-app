'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [439],
  {
    66476: function(e, t, n) {
      n.r(t),
        n.d(t, {
          default: function() {
            return z
          },
          useResetState: function() {
            return R
          }
        })
      var r,
        a,
        i = n(89379),
        o = n(80296),
        s = n(57528),
        l = n(70030),
        c = n(65043),
        u = n(74725),
        d = n(93171),
        f = n(58670),
        h = n(39024),
        v = n(88250),
        p = n(57985),
        x = n(96552),
        m = n(2038),
        g = n(86178),
        y = n.n(g),
        b = n(75969),
        j = n(70579),
        w = (0, l.A)('svg', { target: 'elaobtv0' })(''),
        A = function() {
          return (0, j.jsx)(w, {
            width: '42',
            height: '41',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, j.jsx)('path', {
              d:
                'M17.857 4.453C14.284.518 8.553.518 4.98 4.453l-.336.37C.452 9.44.452 16.984 4.642 21.598l16.16 17.8c.124.135.27.135.393-.001l16.16-17.799c4.194-4.617 4.193-12.156-.002-16.777l-.336-.37c-3.574-3.936-9.3-3.936-12.876 0l-1.373 1.512a2.372 2.372 0 0 1-3.538 0l-1.373-1.511z',
              stroke: '#E7E7E7',
              strokeWidth: '3',
              fill: 'none',
              fillRule: 'evenodd',
              opacity: '.7'
            })
          })
        },
        C = n(46061),
        k = n(38945),
        I = n(61766),
        D = n(77113),
        S = (n(55363), n(11697))
      var E = (0, l.A)('div', { target: 'eyj8ccp0' })({
          name: '1xknjez',
          styles:
            'grid-area:selectall;display:flex;justify-content:flex-end;padding-right:40px;margin:2em 0;'
        }),
        F = (0, l.A)('div', { target: 'eyj8ccp1' })({
          name: '1de598y',
          styles:
            'display:flex;padding:40px;flex-direction:column;justify-content:center;align-items:center;background:white;box-shadow:3px 4px 6px 0 rgba(229,236,241,0.3);border-radius:6px;margin-bottom:40px;h2{color:#adbbcd;font-weight:100;margin-bottom:0;padding:0;margin-top:20px;text-align:center;max-width:500px;}p{color:#2b2b2b;font-size:18px;font-weight:300;margin-top:20px;line-height:1.3em;text-align:center;max-width:400px;}'
        }),
        N = (0, l.A)(b.H2, { target: 'eyj8ccp2' })(
          'margin-top:50px;margin-left:20px;',
          m.Ay.medium(r || (r = (0, s.A)(['\n    margin-left: 0;\n  ']))),
          ''
        ),
        O = function() {
          var e = (0, u.B)().t
          return (0, j.jsxs)(F, {
            children: [
              (0, j.jsx)(A, {}),
              (0, j.jsx)('h2', {
                children: e('favourites.nofavouritesDomains.title')
              }),
              (0, j.jsx)('p', {
                children: e('favourites.nofavouritesDomains.text')
              })
            ]
          })
        }
      function q(e) {
        var t = y()(parseInt(1e3 * e))
        return (
          y()()
            .subtract(90, 'days')
            .diff(t) > 0
        )
      }
      function B(e, t) {
        return !e || t || 0 === parseInt(e, 16) ? 'Open' : 'Owned'
      }
      var P = (0, p.J1)(
          a ||
            (a = (0, s.A)([
              '\n  query resetStateQuery @client {\n    networkId\n  }\n'
            ]))
        ),
        R = function(e, t, n) {
          var r = (0, v.I)(P).data.networkId
          ;(0, c.useEffect)(
            function() {
              e(1), t({}), n(null)
            },
            [r]
          )
        }
      var T = (0, l.A)('div', { target: 'eyj8ccp3' })({
          name: '6w9fxc',
          styles: 'padding-bottom:60px;'
        }),
        z = function() {
          var e,
            t = (0, u.B)().t
          ;(0, c.useEffect)(function() {
            document.title = 'ENS Favourites'
          }, [])
          var n = (0, c.useState)(1),
            r = (0, o.A)(n, 2),
            a = r[0],
            s = r[1],
            l = (0, c.useState)({}),
            p = (0, o.A)(l, 2),
            m = p[0],
            g = p[1],
            y = (0, c.useState)(!1),
            b = (0, o.A)(y, 2),
            w = b[0],
            F = b[1],
            P = (0, I.F)()
          R(s, g, F)
          var z = (0, v.I)(x.a0).data,
            J = (void 0 === z ? [] : z).favourites
          ;(0, c.useEffect)(function() {
            document.title = 'ENS Favourites'
          }, [])
          var X = (0, v.I)(x.v0).data,
            _ = (void 0 === X ? [] : X).subDomainFavourites,
            H = (0, v.I)(x.FP).data.globalError,
            K = (0, D.Tb)(J, 'name')
          if (H.invalidCharacter || !K)
            return (0, j.jsx)(S.lB, { message: H.invalidCharacter })
          var L =
              K &&
              (null ===
                (e = K.map(function(e) {
                  try {
                    return (0, h.getNamehash)(e.name)
                  } catch (t) {
                    return (
                      console.error('Error getting favourite ids: ', t), null
                    )
                  }
                })) || void 0 === e
                ? void 0
                : e.filter(function(e) {
                    return e
                  })),
            M = (0, v.I)(x.K7, {
              variables: { ids: L },
              fetchPolicy: 'no-cache',
              nextFetchPolicy: 'no-cache',
              context: { queryDeduplication: !1 }
            }),
            Q = M.data,
            W = (void 0 === Q ? [] : Q).registrations,
            Y = M.refetch
          if (!K || (0 === K.length && !W)) return (0, j.jsx)(O, {})
          var Z = []
          if (
            (K.length > 0 &&
              (Z =
                W && W.length > 0
                  ? K.map(function(e) {
                      try {
                        var t = W.filter(function(t) {
                          return t.domain.id === (0, h.getNamehash)(e.name)
                        })[0]
                        return {
                          name: e.name,
                          owner: t && t.registrant.id,
                          available: q(t && t.expiryDate),
                          expiryDate: t && t.expiryDate,
                          hasInvalidCharacter: e.hasInvalidCharacter
                        }
                      } catch (n) {
                        return {
                          name: e.name,
                          hasInvalidCharacter: !0,
                          available: !1,
                          expiryDate: !1
                        }
                      }
                    })
                  : K.map(function(e) {
                      return {
                        name: e.name,
                        hasInvalidCharacter: e.hasInvalidCharacter
                      }
                    })),
            !((Z && Z.length > 0) || (_ && _.length > 0)))
          )
            return (0, j.jsxs)(T, {
              'data-testid': 'favourites-container',
              children: [
                (0, j.jsx)(N, { children: t('favourites.favouriteTitle') }),
                (0, j.jsxs)(O, {
                  children: [
                    (0, j.jsx)(A, {}),
                    (0, j.jsx)('h2', {
                      children: t('favourites.nofavouritesDomains.title')
                    }),
                    (0, j.jsx)('p', {
                      children: t('favourites.nofavouritesDomains.text')
                    })
                  ]
                })
              ]
            })
          var G = Object.entries(m)
              .filter(function(e) {
                var t = (0, o.A)(e, 2)
                t[0]
                return t[1]
              })
              .map(function(e) {
                return (0, o.A)(e, 1)[0]
              }),
            U = Z.map(function(e) {
              return e.name
            }),
            V =
              Z.filter(function(e) {
                return (
                  e.expiryDate &&
                  e.owner !==
                    (null === P || void 0 === P ? void 0 : P.toLowerCase()) &&
                  m[e.name]
                )
              }).length > 0,
            $ =
              Z.filter(function(e) {
                return e.expiryDate
              }).length > 0
          return (0, j.jsxs)(T, {
            'data-testid': 'favourites-container',
            children: [
              (0, j.jsx)(N, { children: t('favourites.favouriteTitle') }),
              $ &&
                (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsx)(C.A, {
                      years: a,
                      setYears: s,
                      selectedNames: G,
                      setCheckedBoxes: g,
                      setSelectAll: F,
                      allNames: U,
                      refetch: Y,
                      data: [],
                      getterString: 'registrations',
                      checkedOtherOwner: V
                    }),
                    (0, j.jsx)(E, {
                      children: (0, j.jsx)(k.A, {
                        testid: 'checkbox-renewall',
                        type: 'double',
                        checked: w,
                        onClick: function() {
                          w
                            ? g({})
                            : (function() {
                                var e = Z.reduce(function(e, t) {
                                  return t.expiryDate && (e[t.name] = !0), e
                                }, {})
                                g(e)
                              })(),
                            F(function(e) {
                              return !e
                            })
                        }
                      })
                    })
                  ]
                }),
              Z &&
                Z.map(function(e) {
                  return (0,
                  j.jsx)(f.A, { domain: (0, i.A)((0, i.A)({}, e), {}, { state: B(e.owner, e.available), owner: e.owner }), isFavourite: !0, checkedBoxes: m, setCheckedBoxes: g, setSelectAll: F, hasInvalidCharacter: e.hasInvalidCharacter }, e.name)
                }),
              _ &&
                _.map(function(e) {
                  return (0, j.jsx)(
                    d.X,
                    {
                      query: x.ZN,
                      variables: { name: e.name },
                      children: function(t) {
                        var n = t.loading,
                          r = t.error,
                          a = t.data
                        return r
                          ? (0, j.jsx)('div', {
                              children: (console.log(r), JSON.stringify(r))
                            })
                          : (0, j.jsx)(f.A, {
                              loading: n,
                              domain: (0, i.A)(
                                (0, i.A)({}, e),
                                {},
                                {
                                  state: B(
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.getOwner,
                                    !1
                                  ),
                                  owner:
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.getOwner
                                }
                              ),
                              isSubDomain: !0,
                              isFavourite: !0
                            })
                      }
                    },
                    e.name
                  )
                })
            ]
          })
        }
    },
    93171: function(e, t, n) {
      n.d(t, {
        X: function() {
          return o
        }
      })
      var r = n(76725),
        a = n(65173),
        i = n(88250)
      function o(e) {
        var t = e.children,
          n = e.query,
          a = (0, r.Tt)(e, ['children', 'query']),
          o = (0, i.I)(n, a)
        return o ? t(o) : null
      }
      o.propTypes = {
        client: a.object,
        children: a.func.isRequired,
        fetchPolicy: a.string,
        notifyOnNetworkStatusChange: a.bool,
        onCompleted: a.func,
        onError: a.func,
        pollInterval: a.number,
        query: a.object.isRequired,
        variables: a.object,
        ssr: a.bool,
        partialRefetch: a.bool,
        returnPartialData: a.bool
      }
    }
  }
])
//# sourceMappingURL=Favourites.d202a82e-d5973.chunk.js.map
