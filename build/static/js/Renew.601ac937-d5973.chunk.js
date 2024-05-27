'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [858],
  {
    61766: function(n, e, t) {
      t.d(e, {
        F: function() {
          return u
        }
      })
      var r,
        o = t(57528),
        a = t(88250),
        s = (0, t(57985).J1)(
          r ||
            (r = (0, o.A)([
              '\n  query getAccounts @client {\n    accounts\n  }\n'
            ]))
        )
      function u() {
        var n = (0, a.I)(s).data.accounts
        return n ? n[0] : '0x0000000000000000000000000000000000000000'
      }
    },
    50442: function(n, e, t) {
      t.r(e),
        t.d(e, {
          default: function() {
            return c
          }
        })
      t(65043)
      var r = t(66947),
        o = t(61766),
        a = t(13598),
        s = t(77113),
        u = t(70579)
      function c(n) {
        var e = (0, o.F)()
        return e !== s.wI
          ? (0, u.jsx)(r.rd, { to: '/address/'.concat(e, '?origin=renew') })
          : (0, u.jsxs)(a.A, {
              children: [
                'You are here because of a transaction you completed. The reason we sent the transaction is to remind you that your ENS names will be expiring soon. Please login to your wallet to be redirected to your list of names',
                ' '
              ]
            })
      }
    }
  }
])
//# sourceMappingURL=Renew.601ac937-d5973.chunk.js.map
