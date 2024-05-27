'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [44],
  {
    15397: function(n, e, r) {
      r.r(e),
        r.d(e, {
          default: function() {
            return q
          }
        })
      var t,
        i,
        o,
        c,
        u = r(23029),
        a = r(92901),
        s = r(39874),
        l = r(85501),
        d = r(57528),
        f = r(65043),
        v = r(22612),
        h = r(93171),
        p = r(57985),
        g = (0, p.J1)(
          t ||
            (t = (0, d.A)([
              '\n  query getweb3 @client {\n    accounts\n    isReadOnly\n  }\n'
            ]))
        ),
        m = r(70579),
        j = (0, p.J1)(
          i ||
            (i = (0, d.A)([
              '\n  query getPendingTransations {\n    pendingTransactions @client {\n      id\n      createdAt\n    }\n  }\n'
            ]))
        ),
        x = (0, p.J1)(
          o ||
            (o = (0, d.A)([
              '\n  query getTransactionHistory {\n    transactionHistory @client {\n      id\n      createdAt\n    }\n  }\n'
            ]))
        ),
        b = (0, p.J1)(
          c ||
            (c = (0, d.A)([
              '\n  mutation registerTestDomain($name: String!) {\n    registerTestDomain(name: $name) @client {\n      id\n    }\n  }\n'
            ]))
        ),
        y = function(n) {
          var e
          n.setTx
          return (0, m.jsx)(v.s, {
            mutation: b,
            children: function(n) {
              return (0, m.jsx)('div', {
                children: (0, m.jsxs)('form', {
                  onSubmit: function(r) {
                    r.preventDefault(),
                      n({ variables: { name: e.value } }).then(function(n) {
                        console.log(n)
                      }),
                      (e.value = '')
                  },
                  children: [
                    (0, m.jsx)('input', {
                      ref: function(n) {
                        e = n
                      }
                    }),
                    (0, m.jsx)('button', {
                      type: 'submit',
                      children: 'Register subdomain'
                    })
                  ]
                })
              })
            }
          })
        },
        T = (function(n) {
          function e() {
            var n
            ;(0, u.A)(this, e)
            for (var r = arguments.length, t = new Array(r), i = 0; i < r; i++)
              t[i] = arguments[i]
            return (
              ((n = (0, s.A)(this, e, [].concat(t))).state = { started: !1 }), n
            )
          }
          return (
            (0, l.A)(e, n),
            (0, a.A)(e, [
              {
                key: 'render',
                value: function() {
                  return (0, m.jsxs)(f.Fragment, {
                    children: [
                      (0, m.jsx)(h.X, {
                        query: g,
                        pollInterval: 500,
                        children: function(n) {
                          var e = n.loading,
                            r = (n.error, n.data)
                          if (e)
                            return (0, m.jsx)('div', {
                              children: 'Loading web3'
                            })
                          var t = r.web3,
                            i = r.people
                          return (
                            console.log(r),
                            (0, m.jsxs)(f.Fragment, {
                              children: [
                                (0, m.jsx)('div', {
                                  children:
                                    t.accounts.length > 0
                                      ? 'Your NZT address is '.concat(
                                          t.accounts[0]
                                        )
                                      : 'Unlock metamask!'
                                }),
                                (0, m.jsx)('div', { children: console.log(i) }),
                                (0, m.jsx)(y, {})
                              ]
                            })
                          )
                        }
                      }),
                      (0, m.jsx)(h.X, {
                        query: j,
                        children: function(n) {
                          var e = n.data,
                            r = n.loading,
                            t = e.pendingTransactions
                          return r
                            ? (0, m.jsx)('div', {
                                children: 'Loading pending txs'
                              })
                            : (console.log(e),
                              (0, m.jsxs)('div', {
                                children: [
                                  (0, m.jsx)('h2', {
                                    children: 'Pending Transactions'
                                  }),
                                  t.map(function(n) {
                                    return (0,
                                    m.jsx)('li', { tx: n.id, children: (0, m.jsx)('a', { href: 'http://ropsten.etherscan.io/tx/'.concat(n.id), children: n.id }) })
                                  })
                                ]
                              }))
                        }
                      }),
                      (0, m.jsx)(h.X, {
                        query: x,
                        children: function(n) {
                          var e = n.data,
                            r = n.loading,
                            t = e.transactionHistory
                          return r
                            ? (0, m.jsx)('div', {
                                children: 'Loading pending txs'
                              })
                            : (console.log(e),
                              (0, m.jsxs)('div', {
                                children: [
                                  (0, m.jsx)('h2', {
                                    children: 'Transaction History'
                                  }),
                                  t.map(function(n) {
                                    return (0,
                                    m.jsx)('li', { children: (0, m.jsx)('a', { href: 'http://ropsten.etherscan.io/tx/'.concat(n.id), children: n.id }) }, n.id)
                                  })
                                ]
                              }))
                        }
                      })
                    ]
                  })
                }
              }
            ])
          )
        })(f.Component),
        q = T
    },
    22612: function(n, e, r) {
      r.d(e, {
        s: function() {
          return o
        }
      })
      var t = r(65173),
        i = r(31881)
      function o(n) {
        var e = (0, i.n)(n.mutation, n),
          r = e[0],
          t = e[1]
        return n.children ? n.children(r, t) : null
      }
      o.propTypes = {
        mutation: t.object.isRequired,
        variables: t.object,
        optimisticResponse: t.oneOfType([t.object, t.func]),
        refetchQueries: t.oneOfType([
          t.arrayOf(t.oneOfType([t.string, t.object])),
          t.func
        ]),
        awaitRefetchQueries: t.bool,
        update: t.func,
        children: t.func.isRequired,
        onCompleted: t.func,
        onError: t.func,
        fetchPolicy: t.string
      }
    },
    93171: function(n, e, r) {
      r.d(e, {
        X: function() {
          return c
        }
      })
      var t = r(76725),
        i = r(65173),
        o = r(88250)
      function c(n) {
        var e = n.children,
          r = n.query,
          i = (0, t.Tt)(n, ['children', 'query']),
          c = (0, o.I)(r, i)
        return c ? e(c) : null
      }
      c.propTypes = {
        client: i.object,
        children: i.func.isRequired,
        fetchPolicy: i.string,
        notifyOnNetworkStatusChange: i.bool,
        onCompleted: i.func,
        onError: i.func,
        pollInterval: i.number,
        query: i.object.isRequired,
        variables: i.object,
        ssr: i.bool,
        partialRefetch: i.bool,
        returnPartialData: i.bool
      }
    },
    31881: function(n, e, r) {
      r.d(e, {
        n: function() {
          return l
        }
      })
      var t = r(76725),
        i = r(40048),
        o = r(72277),
        c = r(4902),
        u = r(36),
        a = r(87832),
        s = r(35190)
      function l(n, e) {
        var r = (0, s.m)(null === e || void 0 === e ? void 0 : e.client)
        ;(0, u.D$)(n, u.KG.Mutation)
        var l = i.useState({ called: !1, loading: !1, client: r }),
          d = l[0],
          f = l[1],
          v = i.useRef({
            result: d,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: n,
            options: e
          })
        Object.assign(v.current, { client: r, options: e, mutation: n })
        var h = i.useCallback(function(n) {
            void 0 === n && (n = {})
            var e = v.current,
              r = e.options,
              i = e.mutation,
              u = (0, t.Cl)((0, t.Cl)({}, r), { mutation: i }),
              s = n.client || v.current.client
            v.current.result.loading ||
              u.ignoreResults ||
              !v.current.isMounted ||
              f(
                (v.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: s
                })
              )
            var l = ++v.current.mutationId,
              d = (0, o.l)(u, n)
            return s
              .mutate(d)
              .then(function(e) {
                var r,
                  t,
                  i = e.data,
                  o = e.errors,
                  u =
                    o && o.length > 0 ? new a.K4({ graphQLErrors: o }) : void 0,
                  h =
                    n.onError ||
                    (null === (r = v.current.options) || void 0 === r
                      ? void 0
                      : r.onError)
                if (
                  (u && h && h(u, d),
                  l === v.current.mutationId && !d.ignoreResults)
                ) {
                  var p = {
                    called: !0,
                    loading: !1,
                    data: i,
                    error: u,
                    client: s
                  }
                  v.current.isMounted &&
                    !(0, c.L)(v.current.result, p) &&
                    f((v.current.result = p))
                }
                var g =
                  n.onCompleted ||
                  (null === (t = v.current.options) || void 0 === t
                    ? void 0
                    : t.onCompleted)
                return u || null === g || void 0 === g || g(e.data, d), e
              })
              .catch(function(e) {
                var r
                if (l === v.current.mutationId && v.current.isMounted) {
                  var t = {
                    loading: !1,
                    error: e,
                    data: void 0,
                    called: !0,
                    client: s
                  }
                  ;(0, c.L)(v.current.result, t) || f((v.current.result = t))
                }
                var i =
                  n.onError ||
                  (null === (r = v.current.options) || void 0 === r
                    ? void 0
                    : r.onError)
                if (i) return i(e, d), { data: void 0, errors: e }
                throw e
              })
          }, []),
          p = i.useCallback(function() {
            if (v.current.isMounted) {
              var n = { called: !1, loading: !1, client: r }
              Object.assign(v.current, { mutationId: 0, result: n }), f(n)
            }
          }, [])
        return (
          i.useEffect(function() {
            return (
              (v.current.isMounted = !0),
              function() {
                v.current.isMounted = !1
              }
            )
          }, []),
          [h, (0, t.Cl)({ reset: p }, d)]
        )
      }
    }
  }
])
//# sourceMappingURL=TestRegistrar.431493c6-d5973.chunk.js.map
