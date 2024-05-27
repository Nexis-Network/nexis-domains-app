'use strict'
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [670],
  {
    58670: function(e, a, t) {
      var n,
        r,
        i = t(64467),
        s = t(89379),
        o = t(57528),
        c = t(70030),
        l = (t(65043), t(424)),
        d = t(74725),
        p = t(2038),
        m = t(43226),
        x = t(61766),
        u = t(33982),
        g = t(60349),
        h = t(77113),
        f = t(38945),
        b = t(14607),
        v = t(70579)
      var w = (0, c.A)('div', { target: 'e1736otp0' })({
          name: '1522hk',
          styles: 'margin:5px;'
        }),
        A = (0, c.A)('div', { target: 'e1736otp1' })(
          "&:before{content:'';background:",
          function(e) {
            if (e.hasInvalidCharacter) return 'black'
            switch (e.state) {
              case 'Yours':
                return '#52E5FF'
              case 'Open':
                return '#42E068'
              case 'Auction':
              case 'Reveal':
                return 'linear-gradient(-180deg, #42E068 0%, #52E5FF 100%)'
              case 'Owned':
                return '#CACACA'
              case 'Forbidden':
                return 'black'
              default:
                return 'red'
            }
          },
          ';width:4px;height:100%;position:absolute;left:0;top:0;z-index:10;}position:relative;background-color:white;border-radius:6px;box-shadow:3px 4px 20px 0 rgba(144,171,191,0.42);padding:',
          function(e) {
            return e.hasInvalidCharacter ? '20' : '0'
          },
          'px;padding-left:0px;'
        ),
        k = (0, c.A)(l.N_, { target: 'e1736otp2' })(
          'padding:20px;color:#2b2b2b;overflow:hidden;position:relative;background:',
          function(e) {
            var a = e.percentDone
            return a
              ? '\n  linear-gradient(to right, rgba(128, 255, 128, 0.1) 0%, rgba(82,229,255, 0.1) '
                  .concat(a, '%,#ffffff ')
                  .concat(a, '%)')
              : 'white'
          },
          ';height:65px;display:grid;height:auto;grid-template-columns:1fr;grid-gap:10px;align-items:center;font-size:22px;margin-bottom:4px;transition:0.2s all;border-radius:6px;',
          p.Ay.medium(
            n ||
              (n = (0, o.A)([
                '\n    grid-template-columns: 1fr minmax(150px,350px) 100px 50px 50px;\n    grid-template-rows: 39px;\n  '
              ]))
          ),
          ' color:#2b2b2b;z-index:1;.label-container{display:flex;}&:visited{color:#2b2b2b;}'
        ),
        j = (0, c.A)('div', { target: 'e1736otp3' })({
          name: '70qvj9',
          styles: 'display:flex;align-items:center;'
        }),
        y = (0, c.A)('h2', { target: 'e1736otp4' })(
          'font-size:18px;font-weight:100;',
          p.Ay.medium(r || (r = (0, o.A)(['\n    font-size: 28px;\n  ']))),
          ' color:',
          function(e) {
            return e.state, '#2b2b2b'
          },
          ';'
        ),
        C = (0, c.A)('div', { target: 'e1736otp5' })({
          name: '11a5vjb',
          styles:
            'margin-right:20px;font-size:16px;color:#ccd4da;display:none;align-items:center;'
        }),
        D = (0, c.A)('div', { target: 'e1736otp6' })(''),
        N = function(e) {
          var a,
            t = e.domain,
            n = e.isOwner,
            r = (0, d.B)().t
          switch (t.state) {
            case 'Open':
              a = r('singleName.domain.state.available')
              break
            case 'Auction':
              a = r('singleName.domain.state.auction')
              break
            case 'Owned':
              a = r('singleName.domain.state.owned')
              break
            default:
              a = r('singleName.domain.state.default')
          }
          return (
            n && (a = r('singleName.domain.state.owned')),
            (0, v.jsx)(C, {
              className: 'label-container',
              children: (0, v.jsx)(D, { children: a })
            })
          )
        },
        F = (0, c.A)('img', { target: 'e1736otp7' })({
          name: 'krde0g',
          styles: 'width:16px;height:16px;margin-bottom:4px;margin-right:4px;'
        }),
        z = (0, c.A)('div', { target: 'e1736otp8' })({
          name: '52og9f',
          styles:
            'font-size:16px;display:flex;background-color:white;margin-top:-10px;margin-left:2px;align-items:center;justify-content:flex-start;color:black;font-weight:100;padding:10px 0px 10px 20px;& a:hover{color:#2c46a6;}'
        })
      a.A = function(e) {
        var a = e.domain,
          t = e.isSubDomain,
          n = e.className,
          r = e.isFavourite,
          o = e.loading,
          c = e.checkedBoxes,
          l = void 0 === c ? {} : c,
          d = e.setCheckedBoxes,
          p = e.setSelectAll,
          C = e.hasInvalidCharacter
        if ((console.log('DomainItem: ', Array.from(a.name)), o))
          return (0, v.jsx)(k, {
            state: 'Owned',
            className: n,
            to: '',
            children: (0, v.jsx)(g.A, {})
          })
        var D = (0, x.F)(),
          I = !1
        !a.available &&
          a.owner &&
          0 !== parseInt(a.owner, 16) &&
          (I = D && a.owner && a.owner.toLowerCase() === D.toLowerCase())
        var O = a.expiryDate
        return (
          a.expiryTime && (O = parseInt(a.expiryTime.getTime() / 1e3)),
          (0, v.jsxs)(A, {
            state: I ? 'Yours' : a.state,
            hasInvalidCharacter: C,
            children: [
              C &&
                (0, v.jsxs)(z, {
                  children: [
                    (0, v.jsx)(F, {
                      src: b.A,
                      onClick: function(e) {
                        return e.preventDefault()
                      }
                    }),
                    (0, v.jsxs)('span', {
                      children: [
                        (0, v.jsxs)('span', {
                          onClick: function(e) {
                            return e.preventDefault()
                          },
                          children: ['This name is invalid.', ' ']
                        }),
                        (0, v.jsx)('a', {
                          href:
                            'https://docs.ens.domains/frequently-asked-questions#what-about-foreign-characters-what-about-upper-case-letters-is-any-unicode-character-valid',
                          children: 'Learn more'
                        })
                      ]
                    })
                  ]
                }),
              (0, v.jsxs)(k, {
                to: '/name/'.concat(a.name),
                className: n,
                percentDone: 0,
                'data-testid': 'domain-'.concat(a.name),
                children: [
                  (0, v.jsx)(y, {
                    state: I ? 'Yours' : a.state,
                    children: (0, h.E4)(a.name)
                  }),
                  (0, v.jsx)(u.A, { expiryDate: O, name: a.name }),
                  !C && (0, v.jsx)(N, { domain: a, isOwner: I }),
                  (0, v.jsx)(j, {
                    children: (0, v.jsx)(m.A, {
                      domain: a,
                      isSubDomain: t,
                      isFavourite: r
                    })
                  }),
                  (0, v.jsx)(j, {
                    children:
                      O &&
                      (0, v.jsx)(w, {
                        children: (0, v.jsx)(f.A, {
                          testid: 'checkbox-'.concat(a.name),
                          checked: l[a.name],
                          onClick: function(e) {
                            e.preventDefault(),
                              d &&
                                d(function(e) {
                                  return (0,
                                  s.A)((0, s.A)({}, e), {}, (0, i.A)({}, a.name, !e[a.name]))
                                }),
                              l[a.name] && p(!1)
                          }
                        })
                      })
                  })
                ]
              })
            ]
          })
        )
      }
    }
  }
])
//# sourceMappingURL=670.5ba1d87a-d5973.chunk.js.map
