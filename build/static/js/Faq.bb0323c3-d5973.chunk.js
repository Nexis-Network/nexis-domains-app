;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [385],
  {
    75969: function(e, t, a) {
      'use strict'
      a.d(t, {
        H2: function() {
          return h
        },
        HR: function() {
          return d
        },
        h: function() {
          return c
        }
      })
      var n,
        r,
        s = a(57528),
        o = a(70030),
        i = a(2038)
      var h = (0, o.A)('h2', { target: 'e5hqhaa0' })(
          'font-size:18px;font-weight:200;color:#adbbcd;',
          i.Ay.medium(n || (n = (0, s.A)(['\n    font-size: 22px;\n  ']))),
          ''
        ),
        c = (0, o.A)('h2', { target: 'e5hqhaa1' })(
          'font-size:18px;font-weight:100;padding:0;margin:0;',
          i.Ay.medium(r || (r = (0, s.A)(['\n    font-size: 28px;\n  ']))),
          ''
        ),
        d = (0, o.A)('hr', { target: 'e5hqhaa2' })({
          name: 's0gyhi',
          styles:
            'border:0;border-top:1px dashed #d3d3d3;background-color:#fff;margin-bottom:30px;margin-top:0;'
        })
    },
    39153: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, {
          default: function() {
            return v
          }
        })
      var n,
        r,
        s = a(57528),
        o = a(70030),
        i = a(65043),
        h = a(74725),
        c = a(2038),
        d = a(75969),
        l = a(94958),
        u = a(70579),
        m = (0, o.A)(l.A, { target: 'eqj0wue0' })(
          'transform:scale(',
          function(e) {
            return e.scale ? e.scale : 1
          },
          ');path{width:50px;}'
        ),
        p = function(e) {
          var t = e.active,
            a = e.color,
            n = (e.scale, e.className)
          return (0, u.jsx)(m, {
            className: n,
            width: '23',
            height: '15',
            active: t,
            color: a,
            children: (0, u.jsx)('path', {
              d:
                'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z',
              fillRule: 'evenodd'
            })
          })
        },
        y = a(90948),
        g = a.n(y)
      a.p, a(55363)
      var f = (0, o.A)(d.H2, { target: 'e1rbwmjb0' })(
          'margin-top:50px;margin-left:20px;',
          c.Ay.medium(n || (n = (0, s.A)(['\n    margin-left: 0;\n  ']))),
          ''
        ),
        w = (0, o.A)('h3', { target: 'e1rbwmjb1' })({
          name: 'pngyth',
          styles: 'font-size:15px;margin-right:0.5em;display:inline;'
        }),
        x = (0, o.A)('p', { target: 'e1rbwmjb2' })(''),
        b = (0, o.A)('a', { target: 'e1rbwmjb3' })(''),
        A = (c.Ay.medium(r || (r = (0, s.A)(['\n    width: 600px;\n  ']))),
        function(e) {
          var t,
            a = e.question,
            n = e.children
          return (
            a && (t = g()(a, { lower: !0 })),
            (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(w, { id: t, children: a }),
                (0, u.jsx)(b, {
                  href: '#'.concat(t),
                  children: (0, u.jsx)(p, {})
                }),
                (0, u.jsx)(x, { children: n })
              ]
            })
          )
        })
      var j = (0, o.A)('div', { target: 'e1rbwmjb6' })({
          name: '1nl5wh',
          styles: 'margin:1em;padding:20px 40px;background-color:white;'
        }),
        v = function() {
          return (
            (0, h.B)().t,
            (0, i.useEffect)(function() {
              document.title = 'ENS Faq'
            }, []),
            (0, u.jsx)(u.Fragment, {
              children: (0, u.jsxs)(j, {
                children: [
                  (0, u.jsx)(d.h, { children: 'FAQ' }),
                  (0, u.jsx)(f, { children: 'Before You register' }),
                  (0, u.jsx)(A, {
                    question: 'Is ENS only for storing an Nexis address?',
                    children:
                      'No, you can store the addresses of over 100 blockchains, a content hash of a decentralized website, profile information such as an avatar and Twitter handle, and more.'
                  }),
                  (0, u.jsx)(A, {
                    question:
                      'What is the maximum length of a name I can register?',
                    children: 'There is no limit on the name length.'
                  }),
                  (0, u.jsx)(A, {
                    question: 'Can you have names with emojis?',
                    children: 'Yes.'
                  }),
                  (0, u.jsxs)(A, {
                    question: 'How much does it cost to register a .nzt name?',
                    children: [
                      'Currently, registration costs are set at the following prices:',
                      (0, u.jsxs)('ul', {
                        children: [
                          (0, u.jsx)('li', {
                            children:
                              '5+ character .nzt names: $5 in NZT per year.'
                          }),
                          (0, u.jsx)('li', {
                            children:
                              '4 character .nzt names: $160 in NZT per year.'
                          }),
                          (0, u.jsx)('li', {
                            children:
                              '3 character .nzt names $640 in NZT per year.'
                          })
                        ]
                      }),
                      "3 and 4 character names have 'premium' pricing to reflect the small number of these names available.",
                      (0, u.jsx)('br', {}),
                      'Also, if the name was previously owned by someone but recently released, it has a temporary decreasing premium to prevent squatters snatching up names.'
                    ]
                  }),
                  (0, u.jsxs)(A, {
                    question:
                      'How much gas does it cost to register and extend registration?',
                    children: [
                      'It depends on the gas price. You can check the historical registration and extending transaction costs',
                      (0, u.jsxs)('a', {
                        href:
                          'https://explore.duneanalytics.com/public/dashboards/48pBVvSxRNVjSE8Ing1uOrCtjD4r3WmV0v5KpS05',
                        children: [' ', 'here', ' ']
                      }),
                      '. "Transaction cost (USD)" query will tell you how much it costs to register (commit + registerWithConfig) and extend registration.',
                      (0, u.jsx)('br', {}),
                      'Please bear in mind that "registerWithConfig" combines 3 transactions (register, set resolver and set nzt address) hence the gas cost is relatively expensive.'
                    ]
                  }),
                  (0, u.jsx)(f, { children: 'When you register' }),
                  (0, u.jsx)(A, {
                    question:
                      'At step 1, the transaction was slow so I speeded up',
                    children:
                      'Our app cannot currently detect that you sped up the transaction. Please refresh the page and start from step 1 again.'
                  }),
                  (0, u.jsxs)(A, {
                    question: 'I am stuck at step 2',
                    children: [
                      'At times, the counter waits for up to a minute at the end of step 2 to make sure that the Nexis blockchain has progressed. If this continues for more than 5 min after moving to step 2, please contact us on Discord.',
                      (0, u.jsx)('br', {}),
                      'Note that if you leave it at step 2 for more than 7 days, it gets reset and you have to start from step 1 again.'
                    ]
                  }),
                  (0, u.jsxs)(A, {
                    question: 'My transaction at step 3 failed',
                    children: [
                      "This happens occasionally when the USD price changes and you haven't registered with enough NZT. Please try again from step 3.",
                      (0, u.jsx)('br', {}),
                      "Please also be noted that the registration step will expire if you don't complete within 24 hrs and you have to start from step 1 again."
                    ]
                  }),
                  (0, u.jsxs)(A, {
                    question:
                      'I cannot see the names I registered on OpenSea nor on my wallet',
                    children: [
                      'This occasionally happens when OpenSea is under a heavy load. You may also not find your name under the NFT section of your wallet, as many wallets fetch metadata from OpenSea.',
                      (0, u.jsx)('br', {}),
                      'As long as you can see your registered name under "My Account" on our site or your NZT address under the name section, your name is registered successfully.'
                    ]
                  }),
                  (0, u.jsx)(A, {
                    question:
                      'Is it safe to refresh the page, close the browser, or switch to different browser/machine?',
                    children:
                      'It is safe to refresh the page or close the browser once step 1 transaction is complete. However you cannot switch to different devices or machines because it needs a locally stored \u201csecret\u201d which will be used at step 3. Please also do not delete browser history during the registration.'
                  }),
                  (0, u.jsx)(f, { children: 'After you register' }),
                  (0, u.jsxs)(A, {
                    question:
                      'What is the difference between the Registrant and Controller?',
                    children: [
                      'If your Nexis address is set as the Controller you can change the resolver and add/edit records. Some dapps (eg: Fleek, OpenSea) set themselves as the Controller so they can update records on your behalf.',
                      (0, u.jsx)('br', {}),
                      'The Registrant only exists on ".nzt" names and it allows you to change the Controller. If you transfer the Registrant to an address you don\'t own, you lose the ownership of the name.'
                    ]
                  }),
                  (0, u.jsx)(A, {
                    question: 'What is a Resolver?',
                    children:
                      'A Resolver is a smart contract that holds records. Names are set by default to the Public Resolver managed by the ENS team and has all the standard ENS record types. You can set your Resolver to a custom resolver contract if you,d like.'
                  }),
                  (0, u.jsxs)(A, {
                    question: 'What is a Primary ENS Name record?',
                    children: [
                      'A Primary ENS Name record (formerly Reverse Record) makes your Nexis address point to an ENS name. This allows dapps to find and display your ENS name when you connect to them with your Nexis account. This can only be set by you so it is not set automatically upon registration.',
                      (0, u.jsx)('br', {}),
                      'To set the Primary ENS Name record, please click "My account", and select "Primary ENS Name".'
                    ]
                  }),
                  (0, u.jsx)(A, {
                    question: 'How do I unregister my name?',
                    children:
                      'If you click the "trash bin" icon on the address record, it will unset your address so that people can no longer look up your address with the name. You can also unset ownership of subdomains in this way, but you cannot do so on ".nzt" addresses. Because ".nzt" names are ERC721-compliant NFTs, you cannot transfer them to an empty address (0x00000...). You can transfer it to a burn address (eg: 0x00001), but that does not erase the fact that you used to own the name. Also, the name will not become available for registration again until the registration period and grace period runs out.'
                  }),
                  (0, u.jsxs)(A, {
                    question: 'How do I transfer my name?',
                    children: [
                      'For a ".nzt" name, transfer both the Registrant and the Controller to the new Nexis account. Since ".nzt" names are ERC721 compliant NFTs, you can change the Registrant by simply transferring the NFT from any NFT compliant wallet/marketplace as well.',
                      (0, u.jsx)('br', {}),
                      'Note that transferring the ownership (aka the Registrant) of the name does not change the controller nor records, so the recipient may need to update them once received. If the recipient is not experienced or you prefer your address not to be associated to the transferring names, it may be a good idea for you to set the NZT Address record to their Nexis address, set the controller, then transfer the name.',
                      (0, u.jsx)('br', {}),
                      'For subdomains, there are no registrants unless the subdomain is customised to be ERC721 compliant. Simply set the controller to the new address (after setting the record to the new address).'
                    ]
                  }),
                  (0, u.jsx)(A, {
                    question:
                      'Why are some of my subdomains shown as a jumble of characters?',
                    children:
                      "ENS names are stored as a hash on-chain so we have to decode the name using a list of possible names, and it shows in the hashed format if we don't have it on our list. You can still access and manage the name if you search for the name directly in the search bar."
                  }),
                  (0, u.jsxs)(A, {
                    question: 'How do I find the labelhash/namehash of a name?',
                    children: [
                      'Please refer to our',
                      ' ',
                      (0, u.jsx)('a', {
                        href:
                          'https://docs.ens.domains/contract-api-reference/name-processing#how-do-i-find-the-labelhash-namehash-of-a-name',
                        children: 'developer documentation page.'
                      })
                    ]
                  }),
                  (0, u.jsx)(f, {
                    children: 'When you extend your registration'
                  }),
                  (0, u.jsx)(A, {
                    question: 'How do I receive an extension reminder?',
                    children:
                      'Click the "Remind me" button on the name\'s page or your address page so that you can set a calendar reminder or email reminder. Note that you have to set calendar reminders per name, whereas you only need to set email reminders per the address of the owner. Also note that you can register a name for multiple years, removing the need to extend each year.'
                  }),
                  (0, u.jsx)(A, {
                    question:
                      'What happens if I forget to extend the registration of a name?',
                    children:
                      "After your name expires, there is a 90 day grace period in which the owner can't edit the records but can still re-register the name. After the grace period, the name is released for registration by anyone with a temporary premium which decreases over a 28 days period. The released name continues to resolve your NZT address until the new owner overwrites it."
                  }),
                  (0, u.jsx)(A, {
                    question:
                      'I lost access to the Nexis account that owns a name I registered. Can I still extend its registration period?',
                    children:
                      'Any Nexis account can pay to extend the registration of any ENS name, though doing so from an account that\'s not the owner will not change ownership of the name. Just go to the name\'s page and click "Extend".'
                  })
                ]
              })
            })
          )
        }
    },
    90948: function(e) {
      var t
      ;(t = function() {
        var e = JSON.parse(
            '{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e62":"S","\u1e63":"s","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'
          ),
          t = JSON.parse(
            '{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}'
          )
        function a(a, n) {
          if ('string' !== typeof a)
            throw new Error('slugify: string argument expected')
          var r =
              t[
                (n = 'string' === typeof n ? { replacement: n } : n || {})
                  .locale
              ] || {},
            s = void 0 === n.replacement ? '-' : n.replacement,
            o = void 0 === n.trim || n.trim,
            i = a
              .normalize()
              .split('')
              .reduce(function(t, a) {
                var o = r[a]
                return (
                  void 0 === o && (o = e[a]),
                  void 0 === o && (o = a),
                  o === s && (o = ' '),
                  t + o.replace(n.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
                )
              }, '')
          return (
            n.strict && (i = i.replace(/[^A-Za-z0-9\s]/g, '')),
            o && (i = i.trim()),
            (i = i.replace(/\s+/g, s)),
            n.lower && (i = i.toLowerCase()),
            i
          )
        }
        return (
          (a.extend = function(t) {
            Object.assign(e, t)
          }),
          a
        )
      }),
        (e.exports = t()),
        (e.exports.default = t())
    }
  }
])
//# sourceMappingURL=Faq.bb0323c3-d5973.chunk.js.map
