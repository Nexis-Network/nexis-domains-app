/*! For license information please see 516.0c45a4c4-d5973.chunk.js.LICENSE.txt */
;(self.webpackChunkens_app = self.webpackChunkens_app || []).push([
  [516],
  {
    49603: function(t, e, r) {
      var n = r(59966).Buffer
      t.exports = {
        check: function(t) {
          if (t.length < 8) return !1
          if (t.length > 72) return !1
          if (48 !== t[0]) return !1
          if (t[1] !== t.length - 2) return !1
          if (2 !== t[2]) return !1
          var e = t[3]
          if (0 === e) return !1
          if (5 + e >= t.length) return !1
          if (2 !== t[4 + e]) return !1
          var r = t[5 + e]
          return (
            0 !== r &&
            (6 + e + r === t.length &&
              (!(128 & t[4]) &&
                (!(e > 1 && 0 === t[4] && !(128 & t[5])) &&
                  (!(128 & t[e + 6]) &&
                    !(r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))))))
          )
        },
        decode: function(t) {
          if (t.length < 8) throw new Error('DER sequence length is too short')
          if (t.length > 72) throw new Error('DER sequence length is too long')
          if (48 !== t[0]) throw new Error('Expected DER sequence')
          if (t[1] !== t.length - 2)
            throw new Error('DER sequence length is invalid')
          if (2 !== t[2]) throw new Error('Expected DER integer')
          var e = t[3]
          if (0 === e) throw new Error('R length is zero')
          if (5 + e >= t.length) throw new Error('R length is too long')
          if (2 !== t[4 + e]) throw new Error('Expected DER integer (2)')
          var r = t[5 + e]
          if (0 === r) throw new Error('S length is zero')
          if (6 + e + r !== t.length) throw new Error('S length is invalid')
          if (128 & t[4]) throw new Error('R value is negative')
          if (e > 1 && 0 === t[4] && !(128 & t[5]))
            throw new Error('R value excessively padded')
          if (128 & t[e + 6]) throw new Error('S value is negative')
          if (r > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
            throw new Error('S value excessively padded')
          return { r: t.slice(4, 4 + e), s: t.slice(6 + e) }
        },
        encode: function(t, e) {
          var r = t.length,
            i = e.length
          if (0 === r) throw new Error('R length is zero')
          if (0 === i) throw new Error('S length is zero')
          if (r > 33) throw new Error('R length is too long')
          if (i > 33) throw new Error('S length is too long')
          if (128 & t[0]) throw new Error('R value is negative')
          if (128 & e[0]) throw new Error('S value is negative')
          if (r > 1 && 0 === t[0] && !(128 & t[1]))
            throw new Error('R value excessively padded')
          if (i > 1 && 0 === e[0] && !(128 & e[1]))
            throw new Error('S value excessively padded')
          var o = n.allocUnsafe(6 + r + i)
          return (
            (o[0] = 48),
            (o[1] = o.length - 2),
            (o[2] = 2),
            (o[3] = t.length),
            t.copy(o, 4),
            (o[4 + r] = 2),
            (o[5 + r] = e.length),
            e.copy(o, 6 + r),
            o
          )
        }
      }
    },
    34279: function(t, e, r) {
      var n = r(59966).Buffer
      function i(t) {
        n.isBuffer(t) || (t = n.from(t))
        for (var e = (t.length / 4) | 0, r = new Array(e), i = 0; i < e; i++)
          r[i] = t.readUInt32BE(4 * i)
        return r
      }
      function o(t) {
        for (; 0 < t.length; t++) t[0] = 0
      }
      function s(t, e, r, n, i) {
        for (
          var o,
            s,
            a,
            u,
            h = r[0],
            f = r[1],
            c = r[2],
            l = r[3],
            p = t[0] ^ e[0],
            d = t[1] ^ e[1],
            g = t[2] ^ e[2],
            y = t[3] ^ e[3],
            m = 4,
            b = 1;
          b < i;
          b++
        )
          (o =
            h[p >>> 24] ^
            f[(d >>> 16) & 255] ^
            c[(g >>> 8) & 255] ^
            l[255 & y] ^
            e[m++]),
            (s =
              h[d >>> 24] ^
              f[(g >>> 16) & 255] ^
              c[(y >>> 8) & 255] ^
              l[255 & p] ^
              e[m++]),
            (a =
              h[g >>> 24] ^
              f[(y >>> 16) & 255] ^
              c[(p >>> 8) & 255] ^
              l[255 & d] ^
              e[m++]),
            (u =
              h[y >>> 24] ^
              f[(p >>> 16) & 255] ^
              c[(d >>> 8) & 255] ^
              l[255 & g] ^
              e[m++]),
            (p = o),
            (d = s),
            (g = a),
            (y = u)
        return (
          (o =
            ((n[p >>> 24] << 24) |
              (n[(d >>> 16) & 255] << 16) |
              (n[(g >>> 8) & 255] << 8) |
              n[255 & y]) ^
            e[m++]),
          (s =
            ((n[d >>> 24] << 24) |
              (n[(g >>> 16) & 255] << 16) |
              (n[(y >>> 8) & 255] << 8) |
              n[255 & p]) ^
            e[m++]),
          (a =
            ((n[g >>> 24] << 24) |
              (n[(y >>> 16) & 255] << 16) |
              (n[(p >>> 8) & 255] << 8) |
              n[255 & d]) ^
            e[m++]),
          (u =
            ((n[y >>> 24] << 24) |
              (n[(p >>> 16) & 255] << 16) |
              (n[(d >>> 8) & 255] << 8) |
              n[255 & g]) ^
            e[m++]),
          [(o >>>= 0), (s >>>= 0), (a >>>= 0), (u >>>= 0)]
        )
      }
      var a = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        u = (function() {
          for (var t = new Array(256), e = 0; e < 256; e++)
            t[e] = e < 128 ? e << 1 : (e << 1) ^ 283
          for (
            var r = [],
              n = [],
              i = [[], [], [], []],
              o = [[], [], [], []],
              s = 0,
              a = 0,
              u = 0;
            u < 256;
            ++u
          ) {
            var h = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4)
            ;(h = (h >>> 8) ^ (255 & h) ^ 99), (r[s] = h), (n[h] = s)
            var f = t[s],
              c = t[f],
              l = t[c],
              p = (257 * t[h]) ^ (16843008 * h)
            ;(i[0][s] = (p << 24) | (p >>> 8)),
              (i[1][s] = (p << 16) | (p >>> 16)),
              (i[2][s] = (p << 8) | (p >>> 24)),
              (i[3][s] = p),
              (p = (16843009 * l) ^ (65537 * c) ^ (257 * f) ^ (16843008 * s)),
              (o[0][h] = (p << 24) | (p >>> 8)),
              (o[1][h] = (p << 16) | (p >>> 16)),
              (o[2][h] = (p << 8) | (p >>> 24)),
              (o[3][h] = p),
              0 === s ? (s = a = 1) : ((s = f ^ t[t[t[l ^ f]]]), (a ^= t[t[a]]))
          }
          return { SBOX: r, INV_SBOX: n, SUB_MIX: i, INV_SUB_MIX: o }
        })()
      function h(t) {
        ;(this._key = i(t)), this._reset()
      }
      ;(h.blockSize = 16),
        (h.keySize = 32),
        (h.prototype.blockSize = h.blockSize),
        (h.prototype.keySize = h.keySize),
        (h.prototype._reset = function() {
          for (
            var t = this._key,
              e = t.length,
              r = e + 6,
              n = 4 * (r + 1),
              i = [],
              o = 0;
            o < e;
            o++
          )
            i[o] = t[o]
          for (o = e; o < n; o++) {
            var s = i[o - 1]
            o % e === 0
              ? ((s = (s << 8) | (s >>> 24)),
                (s =
                  (u.SBOX[s >>> 24] << 24) |
                  (u.SBOX[(s >>> 16) & 255] << 16) |
                  (u.SBOX[(s >>> 8) & 255] << 8) |
                  u.SBOX[255 & s]),
                (s ^= a[(o / e) | 0] << 24))
              : e > 6 &&
                o % e === 4 &&
                (s =
                  (u.SBOX[s >>> 24] << 24) |
                  (u.SBOX[(s >>> 16) & 255] << 16) |
                  (u.SBOX[(s >>> 8) & 255] << 8) |
                  u.SBOX[255 & s]),
              (i[o] = i[o - e] ^ s)
          }
          for (var h = [], f = 0; f < n; f++) {
            var c = n - f,
              l = i[c - (f % 4 ? 0 : 4)]
            h[f] =
              f < 4 || c <= 4
                ? l
                : u.INV_SUB_MIX[0][u.SBOX[l >>> 24]] ^
                  u.INV_SUB_MIX[1][u.SBOX[(l >>> 16) & 255]] ^
                  u.INV_SUB_MIX[2][u.SBOX[(l >>> 8) & 255]] ^
                  u.INV_SUB_MIX[3][u.SBOX[255 & l]]
          }
          ;(this._nRounds = r),
            (this._keySchedule = i),
            (this._invKeySchedule = h)
        }),
        (h.prototype.encryptBlockRaw = function(t) {
          return s(
            (t = i(t)),
            this._keySchedule,
            u.SUB_MIX,
            u.SBOX,
            this._nRounds
          )
        }),
        (h.prototype.encryptBlock = function(t) {
          var e = this.encryptBlockRaw(t),
            r = n.allocUnsafe(16)
          return (
            r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
          )
        }),
        (h.prototype.decryptBlock = function(t) {
          var e = (t = i(t))[1]
          ;(t[1] = t[3]), (t[3] = e)
          var r = s(
              t,
              this._invKeySchedule,
              u.INV_SUB_MIX,
              u.INV_SBOX,
              this._nRounds
            ),
            o = n.allocUnsafe(16)
          return (
            o.writeUInt32BE(r[0], 0),
            o.writeUInt32BE(r[3], 4),
            o.writeUInt32BE(r[2], 8),
            o.writeUInt32BE(r[1], 12),
            o
          )
        }),
        (h.prototype.scrub = function() {
          o(this._keySchedule), o(this._invKeySchedule), o(this._key)
        }),
        (t.exports.AES = h)
    },
    45787: function(t, e, r) {
      var n = r(34279),
        i = r(59966).Buffer,
        o = r(6239),
        s = r(56329),
        a = r(48525),
        u = r(58586),
        h = r(93277)
      function f(t, e, r, s) {
        o.call(this)
        var u = i.alloc(4, 0)
        this._cipher = new n.AES(e)
        var f = this._cipher.encryptBlock(u)
        ;(this._ghash = new a(f)),
          (r = (function(t, e, r) {
            if (12 === e.length)
              return (
                (t._finID = i.concat([e, i.from([0, 0, 0, 1])])),
                i.concat([e, i.from([0, 0, 0, 2])])
              )
            var n = new a(r),
              o = e.length,
              s = o % 16
            n.update(e),
              s && ((s = 16 - s), n.update(i.alloc(s, 0))),
              n.update(i.alloc(8, 0))
            var u = 8 * o,
              f = i.alloc(8)
            f.writeUIntBE(u, 0, 8), n.update(f), (t._finID = n.state)
            var c = i.from(t._finID)
            return h(c), c
          })(this, r, f)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = s),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = t),
          (this._authTag = null),
          (this._called = !1)
      }
      s(f, o),
        (f.prototype._update = function(t) {
          if (!this._called && this._alen) {
            var e = 16 - (this._alen % 16)
            e < 16 && ((e = i.alloc(e, 0)), this._ghash.update(e))
          }
          this._called = !0
          var r = this._mode.encrypt(this, t)
          return (
            this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            (this._len += t.length),
            r
          )
        }),
        (f.prototype._final = function() {
          if (this._decrypt && !this._authTag)
            throw new Error('Unsupported state or unable to authenticate data')
          var t = u(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          )
          if (
            this._decrypt &&
            (function(t, e) {
              var r = 0
              t.length !== e.length && r++
              for (var n = Math.min(t.length, e.length), i = 0; i < n; ++i)
                r += t[i] ^ e[i]
              return r
            })(t, this._authTag)
          )
            throw new Error('Unsupported state or unable to authenticate data')
          ;(this._authTag = t), this._cipher.scrub()
        }),
        (f.prototype.getAuthTag = function() {
          if (this._decrypt || !i.isBuffer(this._authTag))
            throw new Error('Attempting to get auth tag in unsupported state')
          return this._authTag
        }),
        (f.prototype.setAuthTag = function(t) {
          if (!this._decrypt)
            throw new Error('Attempting to set auth tag in unsupported state')
          this._authTag = t
        }),
        (f.prototype.setAAD = function(t) {
          if (this._called)
            throw new Error('Attempting to set AAD in unsupported state')
          this._ghash.update(t), (this._alen += t.length)
        }),
        (t.exports = f)
    },
    32428: function(t, e, r) {
      var n = r(29454),
        i = r(12809),
        o = r(15578)
      ;(e.createCipher = e.Cipher = n.createCipher),
        (e.createCipheriv = e.Cipheriv = n.createCipheriv),
        (e.createDecipher = e.Decipher = i.createDecipher),
        (e.createDecipheriv = e.Decipheriv = i.createDecipheriv),
        (e.listCiphers = e.getCiphers = function() {
          return Object.keys(o)
        })
    },
    12809: function(t, e, r) {
      var n = r(45787),
        i = r(59966).Buffer,
        o = r(1735),
        s = r(2301),
        a = r(6239),
        u = r(34279),
        h = r(98451)
      function f(t, e, r) {
        a.call(this),
          (this._cache = new c()),
          (this._last = void 0),
          (this._cipher = new u.AES(e)),
          (this._prev = i.from(r)),
          (this._mode = t),
          (this._autopadding = !0)
      }
      function c() {
        this.cache = i.allocUnsafe(0)
      }
      function l(t, e, r) {
        var a = o[t.toLowerCase()]
        if (!a) throw new TypeError('invalid suite type')
        if (
          ('string' === typeof r && (r = i.from(r)),
          'GCM' !== a.mode && r.length !== a.iv)
        )
          throw new TypeError('invalid iv length ' + r.length)
        if (('string' === typeof e && (e = i.from(e)), e.length !== a.key / 8))
          throw new TypeError('invalid key length ' + e.length)
        return 'stream' === a.type
          ? new s(a.module, e, r, !0)
          : 'auth' === a.type
          ? new n(a.module, e, r, !0)
          : new f(a.module, e, r)
      }
      r(56329)(f, a),
        (f.prototype._update = function(t) {
          var e, r
          this._cache.add(t)
          for (var n = []; (e = this._cache.get(this._autopadding)); )
            (r = this._mode.decrypt(this, e)), n.push(r)
          return i.concat(n)
        }),
        (f.prototype._final = function() {
          var t = this._cache.flush()
          if (this._autopadding)
            return (function(t) {
              var e = t[15]
              if (e < 1 || e > 16) throw new Error('unable to decrypt data')
              var r = -1
              for (; ++r < e; )
                if (t[r + (16 - e)] !== e)
                  throw new Error('unable to decrypt data')
              if (16 === e) return
              return t.slice(0, 16 - e)
            })(this._mode.decrypt(this, t))
          if (t) throw new Error('data not multiple of block length')
        }),
        (f.prototype.setAutoPadding = function(t) {
          return (this._autopadding = !!t), this
        }),
        (c.prototype.add = function(t) {
          this.cache = i.concat([this.cache, t])
        }),
        (c.prototype.get = function(t) {
          var e
          if (t) {
            if (this.cache.length > 16)
              return (
                (e = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                e
              )
          } else if (this.cache.length >= 16)
            return (
              (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              e
            )
          return null
        }),
        (c.prototype.flush = function() {
          if (this.cache.length) return this.cache
        }),
        (e.createDecipher = function(t, e) {
          var r = o[t.toLowerCase()]
          if (!r) throw new TypeError('invalid suite type')
          var n = h(e, !1, r.key, r.iv)
          return l(t, n.key, n.iv)
        }),
        (e.createDecipheriv = l)
    },
    29454: function(t, e, r) {
      var n = r(1735),
        i = r(45787),
        o = r(59966).Buffer,
        s = r(2301),
        a = r(6239),
        u = r(34279),
        h = r(98451)
      function f(t, e, r) {
        a.call(this),
          (this._cache = new l()),
          (this._cipher = new u.AES(e)),
          (this._prev = o.from(r)),
          (this._mode = t),
          (this._autopadding = !0)
      }
      r(56329)(f, a),
        (f.prototype._update = function(t) {
          var e, r
          this._cache.add(t)
          for (var n = []; (e = this._cache.get()); )
            (r = this._mode.encrypt(this, e)), n.push(r)
          return o.concat(n)
        })
      var c = o.alloc(16, 16)
      function l() {
        this.cache = o.allocUnsafe(0)
      }
      function p(t, e, r) {
        var a = n[t.toLowerCase()]
        if (!a) throw new TypeError('invalid suite type')
        if (('string' === typeof e && (e = o.from(e)), e.length !== a.key / 8))
          throw new TypeError('invalid key length ' + e.length)
        if (
          ('string' === typeof r && (r = o.from(r)),
          'GCM' !== a.mode && r.length !== a.iv)
        )
          throw new TypeError('invalid iv length ' + r.length)
        return 'stream' === a.type
          ? new s(a.module, e, r)
          : 'auth' === a.type
          ? new i(a.module, e, r)
          : new f(a.module, e, r)
      }
      ;(f.prototype._final = function() {
        var t = this._cache.flush()
        if (this._autopadding)
          return (t = this._mode.encrypt(this, t)), this._cipher.scrub(), t
        if (!t.equals(c))
          throw (this._cipher.scrub(),
          new Error('data not multiple of block length'))
      }),
        (f.prototype.setAutoPadding = function(t) {
          return (this._autopadding = !!t), this
        }),
        (l.prototype.add = function(t) {
          this.cache = o.concat([this.cache, t])
        }),
        (l.prototype.get = function() {
          if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16)
            return (this.cache = this.cache.slice(16)), t
          }
          return null
        }),
        (l.prototype.flush = function() {
          for (
            var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1;
            ++r < t;

          )
            e.writeUInt8(t, r)
          return o.concat([this.cache, e])
        }),
        (e.createCipheriv = p),
        (e.createCipher = function(t, e) {
          var r = n[t.toLowerCase()]
          if (!r) throw new TypeError('invalid suite type')
          var i = h(e, !1, r.key, r.iv)
          return p(t, i.key, i.iv)
        })
    },
    48525: function(t, e, r) {
      var n = r(59966).Buffer,
        i = n.alloc(16, 0)
      function o(t) {
        var e = n.allocUnsafe(16)
        return (
          e.writeUInt32BE(t[0] >>> 0, 0),
          e.writeUInt32BE(t[1] >>> 0, 4),
          e.writeUInt32BE(t[2] >>> 0, 8),
          e.writeUInt32BE(t[3] >>> 0, 12),
          e
        )
      }
      function s(t) {
        ;(this.h = t),
          (this.state = n.alloc(16, 0)),
          (this.cache = n.allocUnsafe(0))
      }
      ;(s.prototype.ghash = function(t) {
        for (var e = -1; ++e < t.length; ) this.state[e] ^= t[e]
        this._multiply()
      }),
        (s.prototype._multiply = function() {
          for (
            var t,
              e,
              r,
              n = [
                (t = this.h).readUInt32BE(0),
                t.readUInt32BE(4),
                t.readUInt32BE(8),
                t.readUInt32BE(12)
              ],
              i = [0, 0, 0, 0],
              s = -1;
            ++s < 128;

          ) {
            for (
              0 !== (this.state[~~(s / 8)] & (1 << (7 - (s % 8)))) &&
                ((i[0] ^= n[0]),
                (i[1] ^= n[1]),
                (i[2] ^= n[2]),
                (i[3] ^= n[3])),
                r = 0 !== (1 & n[3]),
                e = 3;
              e > 0;
              e--
            )
              n[e] = (n[e] >>> 1) | ((1 & n[e - 1]) << 31)
            ;(n[0] = n[0] >>> 1), r && (n[0] = n[0] ^ (225 << 24))
          }
          this.state = o(i)
        }),
        (s.prototype.update = function(t) {
          var e
          for (
            this.cache = n.concat([this.cache, t]);
            this.cache.length >= 16;

          )
            (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(e)
        }),
        (s.prototype.final = function(t, e) {
          return (
            this.cache.length && this.ghash(n.concat([this.cache, i], 16)),
            this.ghash(o([0, t, 0, e])),
            this.state
          )
        }),
        (t.exports = s)
    },
    93277: function(t) {
      t.exports = function(t) {
        for (var e, r = t.length; r--; ) {
          if (255 !== (e = t.readUInt8(r))) {
            e++, t.writeUInt8(e, r)
            break
          }
          t.writeUInt8(0, r)
        }
      }
    },
    64645: function(t, e, r) {
      var n = r(58586)
      ;(e.encrypt = function(t, e) {
        var r = n(e, t._prev)
        return (t._prev = t._cipher.encryptBlock(r)), t._prev
      }),
        (e.decrypt = function(t, e) {
          var r = t._prev
          t._prev = e
          var i = t._cipher.decryptBlock(e)
          return n(i, r)
        })
    },
    36210: function(t, e, r) {
      var n = r(59966).Buffer,
        i = r(58586)
      function o(t, e, r) {
        var o = e.length,
          s = i(e, t._cache)
        return (
          (t._cache = t._cache.slice(o)),
          (t._prev = n.concat([t._prev, r ? e : s])),
          s
        )
      }
      e.encrypt = function(t, e, r) {
        for (var i, s = n.allocUnsafe(0); e.length; ) {
          if (
            (0 === t._cache.length &&
              ((t._cache = t._cipher.encryptBlock(t._prev)),
              (t._prev = n.allocUnsafe(0))),
            !(t._cache.length <= e.length))
          ) {
            s = n.concat([s, o(t, e, r)])
            break
          }
          ;(i = t._cache.length),
            (s = n.concat([s, o(t, e.slice(0, i), r)])),
            (e = e.slice(i))
        }
        return s
      }
    },
    57071: function(t, e, r) {
      var n = r(59966).Buffer
      function i(t, e, r) {
        for (var n, i, s = -1, a = 0; ++s < 8; )
          (n = e & (1 << (7 - s)) ? 128 : 0),
            (a +=
              (128 & (i = t._cipher.encryptBlock(t._prev)[0] ^ n)) >> s % 8),
            (t._prev = o(t._prev, r ? n : i))
        return a
      }
      function o(t, e) {
        var r = t.length,
          i = -1,
          o = n.allocUnsafe(t.length)
        for (t = n.concat([t, n.from([e])]); ++i < r; )
          o[i] = (t[i] << 1) | (t[i + 1] >> 7)
        return o
      }
      e.encrypt = function(t, e, r) {
        for (var o = e.length, s = n.allocUnsafe(o), a = -1; ++a < o; )
          s[a] = i(t, e[a], r)
        return s
      }
    },
    28528: function(t, e, r) {
      var n = r(59966).Buffer
      function i(t, e, r) {
        var i = t._cipher.encryptBlock(t._prev)[0] ^ e
        return (t._prev = n.concat([t._prev.slice(1), n.from([r ? e : i])])), i
      }
      e.encrypt = function(t, e, r) {
        for (var o = e.length, s = n.allocUnsafe(o), a = -1; ++a < o; )
          s[a] = i(t, e[a], r)
        return s
      }
    },
    75536: function(t, e, r) {
      var n = r(58586),
        i = r(59966).Buffer,
        o = r(93277)
      function s(t) {
        var e = t._cipher.encryptBlockRaw(t._prev)
        return o(t._prev), e
      }
      e.encrypt = function(t, e) {
        var r = Math.ceil(e.length / 16),
          o = t._cache.length
        t._cache = i.concat([t._cache, i.allocUnsafe(16 * r)])
        for (var a = 0; a < r; a++) {
          var u = s(t),
            h = o + 16 * a
          t._cache.writeUInt32BE(u[0], h + 0),
            t._cache.writeUInt32BE(u[1], h + 4),
            t._cache.writeUInt32BE(u[2], h + 8),
            t._cache.writeUInt32BE(u[3], h + 12)
        }
        var f = t._cache.slice(0, e.length)
        return (t._cache = t._cache.slice(e.length)), n(e, f)
      }
    },
    47257: function(t, e) {
      ;(e.encrypt = function(t, e) {
        return t._cipher.encryptBlock(e)
      }),
        (e.decrypt = function(t, e) {
          return t._cipher.decryptBlock(e)
        })
    },
    1735: function(t, e, r) {
      var n = {
          ECB: r(47257),
          CBC: r(64645),
          CFB: r(36210),
          CFB8: r(28528),
          CFB1: r(57071),
          OFB: r(3542),
          CTR: r(75536),
          GCM: r(75536)
        },
        i = r(15578)
      for (var o in i) i[o].module = n[i[o].mode]
      t.exports = i
    },
    3542: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(58586)
      function o(t) {
        return (t._prev = t._cipher.encryptBlock(t._prev)), t._prev
      }
      e.encrypt = function(t, e) {
        for (; t._cache.length < e.length; )
          t._cache = n.concat([t._cache, o(t)])
        var r = t._cache.slice(0, e.length)
        return (t._cache = t._cache.slice(e.length)), i(e, r)
      }
    },
    2301: function(t, e, r) {
      var n = r(34279),
        i = r(59966).Buffer,
        o = r(6239)
      function s(t, e, r, s) {
        o.call(this),
          (this._cipher = new n.AES(e)),
          (this._prev = i.from(r)),
          (this._cache = i.allocUnsafe(0)),
          (this._secCache = i.allocUnsafe(0)),
          (this._decrypt = s),
          (this._mode = t)
      }
      r(56329)(s, o),
        (s.prototype._update = function(t) {
          return this._mode.encrypt(this, t, this._decrypt)
        }),
        (s.prototype._final = function() {
          this._cipher.scrub()
        }),
        (t.exports = s)
    },
    4014: function(t, e, r) {
      var n = r(86951),
        i = r(32428),
        o = r(1735),
        s = r(35491),
        a = r(98451)
      function u(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createCipheriv(t, e, r)
        if (s[t]) return new n({ key: e, iv: r, mode: t })
        throw new TypeError('invalid suite type')
      }
      function h(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return i.createDecipheriv(t, e, r)
        if (s[t]) return new n({ key: e, iv: r, mode: t, decrypt: !0 })
        throw new TypeError('invalid suite type')
      }
      ;(e.createCipher = e.Cipher = function(t, e) {
        var r, n
        if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv)
        else {
          if (!s[t]) throw new TypeError('invalid suite type')
          ;(r = 8 * s[t].key), (n = s[t].iv)
        }
        var i = a(e, !1, r, n)
        return u(t, i.key, i.iv)
      }),
        (e.createCipheriv = e.Cipheriv = u),
        (e.createDecipher = e.Decipher = function(t, e) {
          var r, n
          if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (n = o[t].iv)
          else {
            if (!s[t]) throw new TypeError('invalid suite type')
            ;(r = 8 * s[t].key), (n = s[t].iv)
          }
          var i = a(e, !1, r, n)
          return h(t, i.key, i.iv)
        }),
        (e.createDecipheriv = e.Decipheriv = h),
        (e.listCiphers = e.getCiphers = function() {
          return Object.keys(s).concat(i.getCiphers())
        })
    },
    86951: function(t, e, r) {
      var n = r(6239),
        i = r(13325),
        o = r(56329),
        s = r(59966).Buffer,
        a = {
          'des-ede3-cbc': i.CBC.instantiate(i.EDE),
          'des-ede3': i.EDE,
          'des-ede-cbc': i.CBC.instantiate(i.EDE),
          'des-ede': i.EDE,
          'des-cbc': i.CBC.instantiate(i.DES),
          'des-ecb': i.DES
        }
      function u(t) {
        n.call(this)
        var e,
          r = t.mode.toLowerCase(),
          i = a[r]
        e = t.decrypt ? 'decrypt' : 'encrypt'
        var o = t.key
        s.isBuffer(o) || (o = s.from(o)),
          ('des-ede' !== r && 'des-ede-cbc' !== r) ||
            (o = s.concat([o, o.slice(0, 8)]))
        var u = t.iv
        s.isBuffer(u) || (u = s.from(u)),
          (this._des = i.create({ key: o, iv: u, type: e }))
      }
      ;(a.des = a['des-cbc']),
        (a.des3 = a['des-ede3-cbc']),
        (t.exports = u),
        o(u, n),
        (u.prototype._update = function(t) {
          return s.from(this._des.update(t))
        }),
        (u.prototype._final = function() {
          return s.from(this._des.final())
        })
    },
    35491: function(t, e) {
      ;(e['des-ecb'] = { key: 8, iv: 0 }),
        (e['des-cbc'] = e.des = { key: 8, iv: 8 }),
        (e['des-ede3-cbc'] = e.des3 = { key: 24, iv: 8 }),
        (e['des-ede3'] = { key: 24, iv: 0 }),
        (e['des-ede-cbc'] = { key: 16, iv: 8 }),
        (e['des-ede'] = { key: 16, iv: 0 })
    },
    55721: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(17992),
        o = r(15838)
      function s(t) {
        var e,
          r = t.modulus.byteLength()
        do {
          e = new i(o(r))
        } while (
          e.cmp(t.modulus) >= 0 ||
          !e.umod(t.prime1) ||
          !e.umod(t.prime2)
        )
        return e
      }
      function a(t, e) {
        var r = (function(t) {
            var e = s(t)
            return {
              blinder: e
                .toRed(i.mont(t.modulus))
                .redPow(new i(t.publicExponent))
                .fromRed(),
              unblinder: e.invm(t.modulus)
            }
          })(e),
          o = e.modulus.byteLength(),
          a = new i(t).mul(r.blinder).umod(e.modulus),
          u = a.toRed(i.mont(e.prime1)),
          h = a.toRed(i.mont(e.prime2)),
          f = e.coefficient,
          c = e.prime1,
          l = e.prime2,
          p = u.redPow(e.exponent1).fromRed(),
          d = h.redPow(e.exponent2).fromRed(),
          g = p
            .isub(d)
            .imul(f)
            .umod(c)
            .imul(l)
        return d
          .iadd(g)
          .imul(r.unblinder)
          .umod(e.modulus)
          .toArrayLike(n, 'be', o)
      }
      ;(a.getr = s), (t.exports = a)
    },
    17992: function(t, e, r) {
      !(function(t, e) {
        'use strict'
        function n(t, e) {
          if (!t) throw new Error(e || 'Assertion failed')
        }
        function i(t, e) {
          t.super_ = e
          var r = function() {}
          ;(r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t)
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t
          ;(this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' !== e && 'be' !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'))
        }
        var s
        'object' === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26)
        try {
          s =
            'undefined' !== typeof window &&
            'undefined' !== typeof window.Buffer
              ? window.Buffer
              : r(98285).Buffer
        } catch (I) {}
        function a(t, e) {
          var r = t.charCodeAt(e)
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, 'Invalid character in ' + t)
        }
        function u(t, e, r) {
          var n = a(t, r)
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n
        }
        function h(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var h = t.charCodeAt(u) - 48
            ;(o *= i),
              (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              n(h >= 0 && s < i, 'Invalid character'),
              (o += s)
          }
          return o
        }
        function f(t, e) {
          ;(t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red)
        }
        if (
          ((o.isBN = function(t) {
            return (
              t instanceof o ||
              (null !== t &&
                'object' === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            )
          }),
          (o.max = function(t, e) {
            return t.cmp(e) > 0 ? t : e
          }),
          (o.min = function(t, e) {
            return t.cmp(e) < 0 ? t : e
          }),
          (o.prototype._init = function(t, e, r) {
            if ('number' === typeof t) return this._initNumber(t, e, r)
            if ('object' === typeof t) return this._initArray(t, e, r)
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
            var i = 0
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)))
          }),
          (o.prototype._initNumber = function(t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r)
          }),
          (o.prototype._initArray = function(t, e, r) {
            if ((n('number' === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this
            ;(this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length))
            for (var i = 0; i < this.length; i++) this.words[i] = 0
            var o,
              s,
              a = 0
            if ('be' === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            else if ('le' === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            return this._strip()
          }),
          (o.prototype._parseHex = function(t, e, r) {
            ;(this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length))
            for (var n = 0; n < this.length; n++) this.words[n] = 0
            var i,
              o = 0,
              s = 0
            if ('be' === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            this._strip()
          }),
          (o.prototype._parseBase = function(t, e, r) {
            ;(this.words = [0]), (this.length = 1)
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++
            n--, (i = (i / e) | 0)
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                f = r;
              f < a;
              f += n
            )
              (u = h(t, f, f + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            if (0 !== s) {
              var c = 1
              for (u = h(t, f, t.length, e), f = 0; f < s; f++) c *= e
              this.imuln(c),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            }
            this._strip()
          }),
          (o.prototype.copy = function(t) {
            t.words = new Array(this.length)
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
            ;(t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red)
          }),
          (o.prototype._move = function(t) {
            f(t, this)
          }),
          (o.prototype.clone = function() {
            var t = new o(null)
            return this.copy(t), t
          }),
          (o.prototype._expand = function(t) {
            for (; this.length < t; ) this.words[this.length++] = 0
            return this
          }),
          (o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--
            return this._normSign()
          }),
          (o.prototype._normSign = function() {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            )
          }),
          'undefined' !== typeof Symbol && 'function' === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = c
          } catch (I) {
            o.prototype.inspect = c
          }
        else o.prototype.inspect = c
        function c() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
        }
        var l = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
          ],
          p = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          d = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ]
        ;(o.prototype.toString = function(t, e) {
          var r
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = ''
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16)
              ;(o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? l[6 - u.length] + u + r
                    : u + r)
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = p[t],
              f = d[t]
            r = ''
            var c = this.clone()
            for (c.negative = 0; !c.isZero(); ) {
              var g = c.modrn(f).toString(t)
              r = (c = c.idivn(f)).isZero() ? g + r : l[h - g.length] + g + r
            }
            for (this.isZero() && (r = '0' + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          n(!1, 'Base should be between 2 and 36')
        }),
          (o.prototype.toNumber = function() {
            var t = this.words[0]
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            )
          }),
          (o.prototype.toJSON = function() {
            return this.toString(16, 2)
          }),
          s &&
            (o.prototype.toBuffer = function(t, e) {
              return this.toArrayLike(s, t, e)
            }),
          (o.prototype.toArray = function(t, e) {
            return this.toArrayLike(Array, t, e)
          })
        function g(t, e, r) {
          r.negative = e.negative ^ t.negative
          var n = (t.length + e.length) | 0
          ;(r.length = n), (n = (n - 1) | 0)
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0
          r.words[0] = a
          for (var h = 1; h < n; h++) {
            for (
              var f = u >>> 26,
                c = 67108863 & u,
                l = Math.min(h, e.length - 1),
                p = Math.max(0, h - t.length + 1);
              p <= l;
              p++
            ) {
              var d = (h - p) | 0
              ;(f +=
                ((s = (i = 0 | t.words[d]) * (o = 0 | e.words[p]) + c) /
                  67108864) |
                0),
                (c = 67108863 & s)
            }
            ;(r.words[h] = 0 | c), (u = 0 | f)
          }
          return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r._strip()
        }
        ;(o.prototype.toArrayLike = function(t, e, r) {
          this._strip()
          var i = this.byteLength(),
            o = r || Math.max(1, i)
          n(i <= o, 'byte array longer than desired length'),
            n(o > 0, 'Requested array length <= 0')
          var s = (function(t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
          })(t, o)
          return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s
        }),
          (o.prototype._toArrayLikeLE = function(t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n
              ;(t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0
          }),
          (o.prototype._toArrayLikeBE = function(t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n
              ;(t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0
          }),
          Math.clz32
            ? (o.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
              })
            : (o.prototype._countBits = function(t) {
                var e = t,
                  r = 0
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                )
              }),
          (o.prototype._zeroBits = function(t) {
            if (0 === t) return 26
            var e = t,
              r = 0
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            )
          }),
          (o.prototype.bitLength = function() {
            var t = this.words[this.length - 1],
              e = this._countBits(t)
            return 26 * (this.length - 1) + e
          }),
          (o.prototype.zeroBits = function() {
            if (this.isZero()) return 0
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e])
              if (((t += r), 26 !== r)) break
            }
            return t
          }),
          (o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
          }),
          (o.prototype.toTwos = function(t) {
            return 0 !== this.negative
              ? this.abs()
                  .inotn(t)
                  .iaddn(1)
              : this.clone()
          }),
          (o.prototype.fromTwos = function(t) {
            return this.testn(t - 1)
              ? this.notn(t)
                  .iaddn(1)
                  .ineg()
              : this.clone()
          }),
          (o.prototype.isNeg = function() {
            return 0 !== this.negative
          }),
          (o.prototype.neg = function() {
            return this.clone().ineg()
          }),
          (o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
          }),
          (o.prototype.iuor = function(t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e]
            return this._strip()
          }),
          (o.prototype.ior = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t)
          }),
          (o.prototype.or = function(t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this)
          }),
          (o.prototype.uor = function(t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this)
          }),
          (o.prototype.iuand = function(t) {
            var e
            e = this.length > t.length ? t : this
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.iand = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t)
          }),
          (o.prototype.and = function(t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this)
          }),
          (o.prototype.uand = function(t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this)
          }),
          (o.prototype.iuxor = function(t) {
            var e, r
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this))
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n]
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.ixor = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t)
          }),
          (o.prototype.xor = function(t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this)
          }),
          (o.prototype.uxor = function(t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this)
          }),
          (o.prototype.inotn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = 0 | Math.ceil(t / 26),
              r = t % 26
            this._expand(e), r > 0 && e--
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i]
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            )
          }),
          (o.prototype.notn = function(t) {
            return this.clone().inotn(t)
          }),
          (o.prototype.setn = function(t, e) {
            n('number' === typeof t && t >= 0)
            var r = (t / 26) | 0,
              i = t % 26
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            )
          }),
          (o.prototype.iadd = function(t) {
            var e, r, n
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              )
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              )
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this))
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o]
            return this
          }),
          (o.prototype.add = function(t) {
            var e
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this)
          }),
          (o.prototype.isub = function(t) {
            if (0 !== t.negative) {
              t.negative = 0
              var e = this.iadd(t)
              return (t.negative = 1), e._normSign()
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              )
            var r,
              n,
              i = this.cmp(t)
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              )
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s]
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            )
          }),
          (o.prototype.sub = function(t) {
            return this.clone().isub(t)
          })
        var y = function(t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            h = 0,
            f = 0 | s[0],
            c = 8191 & f,
            l = f >>> 13,
            p = 0 | s[1],
            d = 8191 & p,
            g = p >>> 13,
            y = 0 | s[2],
            m = 8191 & y,
            b = y >>> 13,
            v = 0 | s[3],
            w = 8191 & v,
            k = v >>> 13,
            _ = 0 | s[4],
            S = 8191 & _,
            E = _ >>> 13,
            M = 0 | s[5],
            A = 8191 & M,
            B = M >>> 13,
            I = 0 | s[6],
            C = 8191 & I,
            T = I >>> 13,
            L = 0 | s[7],
            U = 8191 & L,
            x = L >>> 13,
            R = 0 | s[8],
            N = 8191 & R,
            D = R >>> 13,
            P = 0 | s[9],
            O = 8191 & P,
            j = P >>> 13,
            K = 0 | a[0],
            F = 8191 & K,
            V = K >>> 13,
            q = 0 | a[1],
            Y = 8191 & q,
            z = q >>> 13,
            H = 0 | a[2],
            G = 8191 & H,
            W = H >>> 13,
            Z = 0 | a[3],
            X = 8191 & Z,
            J = Z >>> 13,
            $ = 0 | a[4],
            Q = 8191 & $,
            tt = $ >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ht = at >>> 13,
            ft = 0 | a[8],
            ct = 8191 & ft,
            lt = ft >>> 13,
            pt = 0 | a[9],
            dt = 8191 & pt,
            gt = pt >>> 13
          ;(r.negative = t.negative ^ e.negative), (r.length = 19)
          var yt =
            (((h + (n = Math.imul(c, F))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, V)) + Math.imul(l, F)) | 0)) <<
                13)) |
            0
          ;(h = ((((o = Math.imul(l, V)) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
            (yt &= 67108863),
            (n = Math.imul(d, F)),
            (i = ((i = Math.imul(d, V)) + Math.imul(g, F)) | 0),
            (o = Math.imul(g, V))
          var mt =
            (((h + (n = (n + Math.imul(c, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, z)) | 0) + Math.imul(l, Y)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, z)) | 0) + (i >>> 13)) | 0) +
              (mt >>> 26)) |
            0),
            (mt &= 67108863),
            (n = Math.imul(m, F)),
            (i = ((i = Math.imul(m, V)) + Math.imul(b, F)) | 0),
            (o = Math.imul(b, V)),
            (n = (n + Math.imul(d, Y)) | 0),
            (i = ((i = (i + Math.imul(d, z)) | 0) + Math.imul(g, Y)) | 0),
            (o = (o + Math.imul(g, z)) | 0)
          var bt =
            (((h + (n = (n + Math.imul(c, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, W)) | 0) + Math.imul(l, G)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, W)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(w, F)),
            (i = ((i = Math.imul(w, V)) + Math.imul(k, F)) | 0),
            (o = Math.imul(k, V)),
            (n = (n + Math.imul(m, Y)) | 0),
            (i = ((i = (i + Math.imul(m, z)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, z)) | 0),
            (n = (n + Math.imul(d, G)) | 0),
            (i = ((i = (i + Math.imul(d, W)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, W)) | 0)
          var vt =
            (((h + (n = (n + Math.imul(c, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, J)) | 0) + Math.imul(l, X)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(S, F)),
            (i = ((i = Math.imul(S, V)) + Math.imul(E, F)) | 0),
            (o = Math.imul(E, V)),
            (n = (n + Math.imul(w, Y)) | 0),
            (i = ((i = (i + Math.imul(w, z)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, z)) | 0),
            (n = (n + Math.imul(m, G)) | 0),
            (i = ((i = (i + Math.imul(m, W)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, W)) | 0),
            (n = (n + Math.imul(d, X)) | 0),
            (i = ((i = (i + Math.imul(d, J)) | 0) + Math.imul(g, X)) | 0),
            (o = (o + Math.imul(g, J)) | 0)
          var wt =
            (((h + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(A, F)),
            (i = ((i = Math.imul(A, V)) + Math.imul(B, F)) | 0),
            (o = Math.imul(B, V)),
            (n = (n + Math.imul(S, Y)) | 0),
            (i = ((i = (i + Math.imul(S, z)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, z)) | 0),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(k, G)) | 0),
            (o = (o + Math.imul(k, W)) | 0),
            (n = (n + Math.imul(m, X)) | 0),
            (i = ((i = (i + Math.imul(m, J)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, J)) | 0),
            (n = (n + Math.imul(d, Q)) | 0),
            (i = ((i = (i + Math.imul(d, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0)
          var kt =
            (((h + (n = (n + Math.imul(c, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, nt)) | 0) + Math.imul(l, rt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, nt)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(C, F)),
            (i = ((i = Math.imul(C, V)) + Math.imul(T, F)) | 0),
            (o = Math.imul(T, V)),
            (n = (n + Math.imul(A, Y)) | 0),
            (i = ((i = (i + Math.imul(A, z)) | 0) + Math.imul(B, Y)) | 0),
            (o = (o + Math.imul(B, z)) | 0),
            (n = (n + Math.imul(S, G)) | 0),
            (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(k, X)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (n = (n + Math.imul(d, rt)) | 0),
            (i = ((i = (i + Math.imul(d, nt)) | 0) + Math.imul(g, rt)) | 0),
            (o = (o + Math.imul(g, nt)) | 0)
          var _t =
            (((h + (n = (n + Math.imul(c, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, st)) | 0) + Math.imul(l, ot)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, st)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(U, F)),
            (i = ((i = Math.imul(U, V)) + Math.imul(x, F)) | 0),
            (o = Math.imul(x, V)),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, z)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, z)) | 0),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(B, G)) | 0),
            (o = (o + Math.imul(B, W)) | 0),
            (n = (n + Math.imul(S, X)) | 0),
            (i = ((i = (i + Math.imul(S, J)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(k, Q)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(m, rt)) | 0),
            (i = ((i = (i + Math.imul(m, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0),
            (n = (n + Math.imul(d, ot)) | 0),
            (i = ((i = (i + Math.imul(d, st)) | 0) + Math.imul(g, ot)) | 0),
            (o = (o + Math.imul(g, st)) | 0)
          var St =
            (((h + (n = (n + Math.imul(c, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ht)) | 0) + Math.imul(l, ut)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, ht)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(N, F)),
            (i = ((i = Math.imul(N, V)) + Math.imul(D, F)) | 0),
            (o = Math.imul(D, V)),
            (n = (n + Math.imul(U, Y)) | 0),
            (i = ((i = (i + Math.imul(U, z)) | 0) + Math.imul(x, Y)) | 0),
            (o = (o + Math.imul(x, z)) | 0),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(T, G)) | 0),
            (o = (o + Math.imul(T, W)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(B, X)) | 0),
            (o = (o + Math.imul(B, J)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(k, rt)) | 0),
            (o = (o + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(m, ot)) | 0),
            (i = ((i = (i + Math.imul(m, st)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, st)) | 0),
            (n = (n + Math.imul(d, ut)) | 0),
            (i = ((i = (i + Math.imul(d, ht)) | 0) + Math.imul(g, ut)) | 0),
            (o = (o + Math.imul(g, ht)) | 0)
          var Et =
            (((h + (n = (n + Math.imul(c, ct)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, lt)) | 0) + Math.imul(l, ct)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, lt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(O, F)),
            (i = ((i = Math.imul(O, V)) + Math.imul(j, F)) | 0),
            (o = Math.imul(j, V)),
            (n = (n + Math.imul(N, Y)) | 0),
            (i = ((i = (i + Math.imul(N, z)) | 0) + Math.imul(D, Y)) | 0),
            (o = (o + Math.imul(D, z)) | 0),
            (n = (n + Math.imul(U, G)) | 0),
            (i = ((i = (i + Math.imul(U, W)) | 0) + Math.imul(x, G)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, J)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(B, Q)) | 0),
            (o = (o + Math.imul(B, tt)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (i = ((i = (i + Math.imul(S, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, st)) | 0),
            (n = (n + Math.imul(m, ut)) | 0),
            (i = ((i = (i + Math.imul(m, ht)) | 0) + Math.imul(b, ut)) | 0),
            (o = (o + Math.imul(b, ht)) | 0),
            (n = (n + Math.imul(d, ct)) | 0),
            (i = ((i = (i + Math.imul(d, lt)) | 0) + Math.imul(g, ct)) | 0),
            (o = (o + Math.imul(g, lt)) | 0)
          var Mt =
            (((h + (n = (n + Math.imul(c, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, gt)) | 0) + Math.imul(l, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, gt)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(O, Y)),
            (i = ((i = Math.imul(O, z)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, z)),
            (n = (n + Math.imul(N, G)) | 0),
            (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(D, G)) | 0),
            (o = (o + Math.imul(D, W)) | 0),
            (n = (n + Math.imul(U, X)) | 0),
            (i = ((i = (i + Math.imul(U, J)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(B, rt)) | 0),
            (o = (o + Math.imul(B, nt)) | 0),
            (n = (n + Math.imul(S, ot)) | 0),
            (i = ((i = (i + Math.imul(S, st)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, st)) | 0),
            (n = (n + Math.imul(w, ut)) | 0),
            (i = ((i = (i + Math.imul(w, ht)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, ht)) | 0),
            (n = (n + Math.imul(m, ct)) | 0),
            (i = ((i = (i + Math.imul(m, lt)) | 0) + Math.imul(b, ct)) | 0),
            (o = (o + Math.imul(b, lt)) | 0)
          var At =
            (((h + (n = (n + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(d, gt)) | 0) + Math.imul(g, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(g, gt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(O, G)),
            (i = ((i = Math.imul(O, W)) + Math.imul(j, G)) | 0),
            (o = Math.imul(j, W)),
            (n = (n + Math.imul(N, X)) | 0),
            (i = ((i = (i + Math.imul(N, J)) | 0) + Math.imul(D, X)) | 0),
            (o = (o + Math.imul(D, J)) | 0),
            (n = (n + Math.imul(U, Q)) | 0),
            (i = ((i = (i + Math.imul(U, tt)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(T, rt)) | 0),
            (o = (o + Math.imul(T, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(B, ot)) | 0),
            (o = (o + Math.imul(B, st)) | 0),
            (n = (n + Math.imul(S, ut)) | 0),
            (i = ((i = (i + Math.imul(S, ht)) | 0) + Math.imul(E, ut)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (n = (n + Math.imul(w, ct)) | 0),
            (i = ((i = (i + Math.imul(w, lt)) | 0) + Math.imul(k, ct)) | 0),
            (o = (o + Math.imul(k, lt)) | 0)
          var Bt =
            (((h + (n = (n + Math.imul(m, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, gt)) | 0) + Math.imul(b, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(b, gt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(O, X)),
            (i = ((i = Math.imul(O, J)) + Math.imul(j, X)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(D, Q)) | 0),
            (o = (o + Math.imul(D, tt)) | 0),
            (n = (n + Math.imul(U, rt)) | 0),
            (i = ((i = (i + Math.imul(U, nt)) | 0) + Math.imul(x, rt)) | 0),
            (o = (o + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(T, ot)) | 0),
            (o = (o + Math.imul(T, st)) | 0),
            (n = (n + Math.imul(A, ut)) | 0),
            (i = ((i = (i + Math.imul(A, ht)) | 0) + Math.imul(B, ut)) | 0),
            (o = (o + Math.imul(B, ht)) | 0),
            (n = (n + Math.imul(S, ct)) | 0),
            (i = ((i = (i + Math.imul(S, lt)) | 0) + Math.imul(E, ct)) | 0),
            (o = (o + Math.imul(E, lt)) | 0)
          var It =
            (((h + (n = (n + Math.imul(w, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, gt)) | 0) + Math.imul(k, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(k, gt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(O, Q)),
            (i = ((i = Math.imul(O, tt)) + Math.imul(j, Q)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(N, rt)) | 0),
            (i = ((i = (i + Math.imul(N, nt)) | 0) + Math.imul(D, rt)) | 0),
            (o = (o + Math.imul(D, nt)) | 0),
            (n = (n + Math.imul(U, ot)) | 0),
            (i = ((i = (i + Math.imul(U, st)) | 0) + Math.imul(x, ot)) | 0),
            (o = (o + Math.imul(x, st)) | 0),
            (n = (n + Math.imul(C, ut)) | 0),
            (i = ((i = (i + Math.imul(C, ht)) | 0) + Math.imul(T, ut)) | 0),
            (o = (o + Math.imul(T, ht)) | 0),
            (n = (n + Math.imul(A, ct)) | 0),
            (i = ((i = (i + Math.imul(A, lt)) | 0) + Math.imul(B, ct)) | 0),
            (o = (o + Math.imul(B, lt)) | 0)
          var Ct =
            (((h + (n = (n + Math.imul(S, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, gt)) | 0) + Math.imul(E, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(E, gt)) | 0) + (i >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863),
            (n = Math.imul(O, rt)),
            (i = ((i = Math.imul(O, nt)) + Math.imul(j, rt)) | 0),
            (o = Math.imul(j, nt)),
            (n = (n + Math.imul(N, ot)) | 0),
            (i = ((i = (i + Math.imul(N, st)) | 0) + Math.imul(D, ot)) | 0),
            (o = (o + Math.imul(D, st)) | 0),
            (n = (n + Math.imul(U, ut)) | 0),
            (i = ((i = (i + Math.imul(U, ht)) | 0) + Math.imul(x, ut)) | 0),
            (o = (o + Math.imul(x, ht)) | 0),
            (n = (n + Math.imul(C, ct)) | 0),
            (i = ((i = (i + Math.imul(C, lt)) | 0) + Math.imul(T, ct)) | 0),
            (o = (o + Math.imul(T, lt)) | 0)
          var Tt =
            (((h + (n = (n + Math.imul(A, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, gt)) | 0) + Math.imul(B, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(B, gt)) | 0) + (i >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (n = Math.imul(O, ot)),
            (i = ((i = Math.imul(O, st)) + Math.imul(j, ot)) | 0),
            (o = Math.imul(j, st)),
            (n = (n + Math.imul(N, ut)) | 0),
            (i = ((i = (i + Math.imul(N, ht)) | 0) + Math.imul(D, ut)) | 0),
            (o = (o + Math.imul(D, ht)) | 0),
            (n = (n + Math.imul(U, ct)) | 0),
            (i = ((i = (i + Math.imul(U, lt)) | 0) + Math.imul(x, ct)) | 0),
            (o = (o + Math.imul(x, lt)) | 0)
          var Lt =
            (((h + (n = (n + Math.imul(C, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, gt)) | 0) + Math.imul(T, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(T, gt)) | 0) + (i >>> 13)) | 0) +
              (Lt >>> 26)) |
            0),
            (Lt &= 67108863),
            (n = Math.imul(O, ut)),
            (i = ((i = Math.imul(O, ht)) + Math.imul(j, ut)) | 0),
            (o = Math.imul(j, ht)),
            (n = (n + Math.imul(N, ct)) | 0),
            (i = ((i = (i + Math.imul(N, lt)) | 0) + Math.imul(D, ct)) | 0),
            (o = (o + Math.imul(D, lt)) | 0)
          var Ut =
            (((h + (n = (n + Math.imul(U, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(U, gt)) | 0) + Math.imul(x, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(x, gt)) | 0) + (i >>> 13)) | 0) +
              (Ut >>> 26)) |
            0),
            (Ut &= 67108863),
            (n = Math.imul(O, ct)),
            (i = ((i = Math.imul(O, lt)) + Math.imul(j, ct)) | 0),
            (o = Math.imul(j, lt))
          var xt =
            (((h + (n = (n + Math.imul(N, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, gt)) | 0) + Math.imul(D, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(D, gt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863)
          var Rt =
            (((h + (n = Math.imul(O, dt))) | 0) +
              ((8191 & (i = ((i = Math.imul(O, gt)) + Math.imul(j, dt)) | 0)) <<
                13)) |
            0
          return (
            (h =
              ((((o = Math.imul(j, gt)) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (u[0] = yt),
            (u[1] = mt),
            (u[2] = bt),
            (u[3] = vt),
            (u[4] = wt),
            (u[5] = kt),
            (u[6] = _t),
            (u[7] = St),
            (u[8] = Et),
            (u[9] = Mt),
            (u[10] = At),
            (u[11] = Bt),
            (u[12] = It),
            (u[13] = Ct),
            (u[14] = Tt),
            (u[15] = Lt),
            (u[16] = Ut),
            (u[17] = xt),
            (u[18] = Rt),
            0 !== h && ((u[19] = h), r.length++),
            r
          )
        }
        function m(t, e, r) {
          ;(r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length)
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i
            i = 0
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= u;
              h++
            ) {
              var f = o - h,
                c = (0 | t.words[f]) * (0 | e.words[h]),
                l = 67108863 & c
              ;(a = 67108863 & (l = (l + a) | 0)),
                (i +=
                  (s =
                    ((s = (s + ((c / 67108864) | 0)) | 0) + (l >>> 26)) | 0) >>>
                  26),
                (s &= 67108863)
            }
            ;(r.words[o] = a), (n = s), (s = i)
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip()
        }
        function b(t, e, r) {
          return m(t, e, r)
        }
        function v(t, e) {
          ;(this.x = t), (this.y = e)
        }
        Math.imul || (y = g),
          (o.prototype.mulTo = function(t, e) {
            var r = this.length + t.length
            return 10 === this.length && 10 === t.length
              ? y(this, t, e)
              : r < 63
              ? g(this, t, e)
              : r < 1024
              ? m(this, t, e)
              : b(this, t, e)
          }),
          (v.prototype.makeRBT = function(t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t)
            return e
          }),
          (v.prototype.revBin = function(t, e, r) {
            if (0 === t || t === r - 1) return t
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1)
            return n
          }),
          (v.prototype.permute = function(t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
          }),
          (v.prototype.transform = function(t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i)
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  h = Math.sin((2 * Math.PI) / a),
                  f = 0;
                f < i;
                f += a
              )
                for (var c = u, l = h, p = 0; p < s; p++) {
                  var d = r[f + p],
                    g = n[f + p],
                    y = r[f + p + s],
                    m = n[f + p + s],
                    b = c * y - l * m
                  ;(m = c * m + l * y),
                    (y = b),
                    (r[f + p] = d + y),
                    (n[f + p] = g + m),
                    (r[f + p + s] = d - y),
                    (n[f + p + s] = g - m),
                    p !== a &&
                      ((b = u * c - h * l), (l = u * l + h * c), (c = b))
                }
          }),
          (v.prototype.guessLen13b = function(t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0
            for (r = (r / 2) | 0; r; r >>>= 1) i++
            return 1 << (i + 1 + n)
          }),
          (v.prototype.conjugate = function(t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n]
                ;(t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i)
              }
          }),
          (v.prototype.normalize13b = function(t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r
              ;(t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0)
            }
            return t
          }),
          (v.prototype.convert13b = function(t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13)
            for (s = 2 * e; s < i; ++s) r[s] = 0
            n(0 === o), n(0 === (-8192 & o))
          }),
          (v.prototype.stub = function(t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
            return e
          }),
          (v.prototype.mulp = function(t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              h = new Array(n),
              f = new Array(n),
              c = new Array(n),
              l = r.words
            ;(l.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, h, n),
              this.transform(s, o, a, u, n, i),
              this.transform(h, o, f, c, n, i)
            for (var p = 0; p < n; p++) {
              var d = a[p] * f[p] - u[p] * c[p]
              ;(u[p] = a[p] * c[p] + u[p] * f[p]), (a[p] = d)
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, l, o, n, i),
              this.conjugate(l, o, n),
              this.normalize13b(l, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            )
          }),
          (o.prototype.mul = function(t) {
            var e = new o(null)
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            )
          }),
          (o.prototype.mulf = function(t) {
            var e = new o(null)
            return (e.words = new Array(this.length + t.length)), b(this, t, e)
          }),
          (o.prototype.imul = function(t) {
            return this.clone().mulTo(t, this)
          }),
          (o.prototype.imuln = function(t) {
            var e = t < 0
            e && (t = -t), n('number' === typeof t), n(t < 67108864)
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r)
              ;(r >>= 26),
                (r += (o / 67108864) | 0),
                (r += s >>> 26),
                (this.words[i] = 67108863 & s)
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            )
          }),
          (o.prototype.muln = function(t) {
            return this.clone().imuln(t)
          }),
          (o.prototype.sqr = function() {
            return this.mul(this)
          }),
          (o.prototype.isqr = function() {
            return this.imul(this.clone())
          }),
          (o.prototype.pow = function(t) {
            var e = (function(t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26
                e[r] = (t.words[n] >>> i) & 1
              }
              return e
            })(t)
            if (0 === e.length) return new o(1)
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i))
            return r
          }),
          (o.prototype.iushln = function(t) {
            n('number' === typeof t && t >= 0)
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r)
            if (0 !== r) {
              var s = 0
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r
                ;(this.words[e] = u | s), (s = a >>> (26 - r))
              }
              s && ((this.words[e] = s), this.length++)
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e]
              for (e = 0; e < i; e++) this.words[e] = 0
              this.length += i
            }
            return this._strip()
          }),
          (o.prototype.ishln = function(t) {
            return n(0 === this.negative), this.iushln(t)
          }),
          (o.prototype.iushrn = function(t, e, r) {
            var i
            n('number' === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0)
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var h = 0; h < s; h++) u.words[h] = this.words[h]
              u.length = s
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, h = 0; h < this.length; h++)
                this.words[h] = this.words[h + s]
            else (this.words[0] = 0), (this.length = 1)
            var f = 0
            for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
              var c = 0 | this.words[h]
              ;(this.words[h] = (f << (26 - o)) | (c >>> o)), (f = c & a)
            }
            return (
              u && 0 !== f && (u.words[u.length++] = f),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            )
          }),
          (o.prototype.ishrn = function(t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r)
          }),
          (o.prototype.shln = function(t) {
            return this.clone().ishln(t)
          }),
          (o.prototype.ushln = function(t) {
            return this.clone().iushln(t)
          }),
          (o.prototype.shrn = function(t) {
            return this.clone().ishrn(t)
          }),
          (o.prototype.ushrn = function(t) {
            return this.clone().iushrn(t)
          }),
          (o.prototype.testn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            return !(this.length <= r) && !!(this.words[r] & i)
          }),
          (o.prototype.imaskn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26
            if (
              (n(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= r)
            )
              return this
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e)
              this.words[this.length - 1] &= i
            }
            return this._strip()
          }),
          (o.prototype.maskn = function(t) {
            return this.clone().imaskn(t)
          }),
          (o.prototype.iaddn = function(t) {
            return (
              n('number' === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            )
          }),
          (o.prototype._iaddn = function(t) {
            this.words[0] += t
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++
            return (this.length = Math.max(this.length, e + 1)), this
          }),
          (o.prototype.isubn = function(t) {
            if ((n('number' === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t)
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              )
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1)
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1)
            return this._strip()
          }),
          (o.prototype.addn = function(t) {
            return this.clone().iaddn(t)
          }),
          (o.prototype.subn = function(t) {
            return this.clone().isubn(t)
          }),
          (o.prototype.iabs = function() {
            return (this.negative = 0), this
          }),
          (o.prototype.abs = function() {
            return this.clone().iabs()
          }),
          (o.prototype._ishlnsubmul = function(t, e, r) {
            var i,
              o,
              s = t.length + r
            this._expand(s)
            var a = 0
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a
              var u = (0 | t.words[i]) * e
              ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o)
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o)
            if (0 === a) return this._strip()
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o)
            return (this.negative = 1), this._strip()
          }),
          (o.prototype._wordDiv = function(t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1]
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
            var a,
              u = n.length - i.length
            if ('mod' !== e) {
              ;((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length))
              for (var h = 0; h < a.length; h++) a.words[h] = 0
            }
            var f = n.clone()._ishlnsubmul(i, 1, u)
            0 === f.negative && ((n = f), a && (a.words[u] = 1))
            for (var c = u - 1; c >= 0; c--) {
              var l =
                67108864 * (0 | n.words[i.length + c]) +
                (0 | n.words[i.length + c - 1])
              for (
                l = Math.min((l / s) | 0, 67108863), n._ishlnsubmul(i, l, c);
                0 !== n.negative;

              )
                l--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, c),
                  n.isZero() || (n.negative ^= 1)
              a && (a.words[c] = l)
            }
            return (
              a && a._strip(),
              n._strip(),
              'div' !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            )
          }),
          (o.prototype.divmod = function(t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  'mod' !== e && (i = a.div.neg()),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  'mod' !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? 'div' === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : 'mod' === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0]))
                    }
                : this._wordDiv(t, e)
            )
            var i, s, a
          }),
          (o.prototype.div = function(t) {
            return this.divmod(t, 'div', !1).div
          }),
          (o.prototype.mod = function(t) {
            return this.divmod(t, 'mod', !1).mod
          }),
          (o.prototype.umod = function(t) {
            return this.divmod(t, 'mod', !0).mod
          }),
          (o.prototype.divRound = function(t) {
            var e = this.divmod(t)
            if (e.mod.isZero()) return e.div
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n)
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1)
          }),
          (o.prototype.modrn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t
            return e ? -i : i
          }),
          (o.prototype.modn = function(t) {
            return this.modrn(t)
          }),
          (o.prototype.idivn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r
              ;(this.words[i] = (o / t) | 0), (r = o % t)
            }
            return this._strip(), e ? this.ineg() : this
          }),
          (o.prototype.divn = function(t) {
            return this.clone().idivn(t)
          }),
          (o.prototype.egcd = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h
            for (var f = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var l = 0, p = 1;
                0 === (e.words[0] & p) && l < 26;
                ++l, p <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(c)),
                    i.iushrn(1),
                    s.iushrn(1)
              for (
                var d = 0, g = 1;
                0 === (r.words[0] & g) && d < 26;
                ++d, g <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(c)),
                    a.iushrn(1),
                    u.iushrn(1)
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s))
            }
            return { a: a, b: u, gcd: r.iushln(h) }
          }),
          (o.prototype._invmp = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var h = 0, f = 1;
                0 === (e.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
              for (
                var c = 0, l = 1;
                0 === (r.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (r.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
          }),
          (o.prototype.gcd = function(t) {
            if (this.isZero()) return t.abs()
            if (t.isZero()) return this.abs()
            var e = this.clone(),
              r = t.clone()
            ;(e.negative = 0), (r.negative = 0)
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1)
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1)
              for (; r.isEven(); ) r.iushrn(1)
              var i = e.cmp(r)
              if (i < 0) {
                var o = e
                ;(e = r), (r = o)
              } else if (0 === i || 0 === r.cmpn(1)) break
              e.isub(r)
            }
            return r.iushln(n)
          }),
          (o.prototype.invm = function(t) {
            return this.egcd(t).a.umod(t)
          }),
          (o.prototype.isEven = function() {
            return 0 === (1 & this.words[0])
          }),
          (o.prototype.isOdd = function() {
            return 1 === (1 & this.words[0])
          }),
          (o.prototype.andln = function(t) {
            return this.words[0] & t
          }),
          (o.prototype.bincn = function(t) {
            n('number' === typeof t)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s]
              ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this
          }),
          (o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
          }),
          (o.prototype.cmpn = function(t) {
            var e,
              r = t < 0
            if (0 !== this.negative && !r) return -1
            if (0 === this.negative && r) return 1
            if ((this._strip(), this.length > 1)) e = 1
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big')
              var i = 0 | this.words[0]
              e = i === t ? 0 : i < t ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.cmp = function(t) {
            if (0 !== this.negative && 0 === t.negative) return -1
            if (0 === this.negative && 0 !== t.negative) return 1
            var e = this.ucmp(t)
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.ucmp = function(t) {
            if (this.length > t.length) return 1
            if (this.length < t.length) return -1
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r]
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1)
                break
              }
            }
            return e
          }),
          (o.prototype.gtn = function(t) {
            return 1 === this.cmpn(t)
          }),
          (o.prototype.gt = function(t) {
            return 1 === this.cmp(t)
          }),
          (o.prototype.gten = function(t) {
            return this.cmpn(t) >= 0
          }),
          (o.prototype.gte = function(t) {
            return this.cmp(t) >= 0
          }),
          (o.prototype.ltn = function(t) {
            return -1 === this.cmpn(t)
          }),
          (o.prototype.lt = function(t) {
            return -1 === this.cmp(t)
          }),
          (o.prototype.lten = function(t) {
            return this.cmpn(t) <= 0
          }),
          (o.prototype.lte = function(t) {
            return this.cmp(t) <= 0
          }),
          (o.prototype.eqn = function(t) {
            return 0 === this.cmpn(t)
          }),
          (o.prototype.eq = function(t) {
            return 0 === this.cmp(t)
          }),
          (o.red = function(t) {
            return new A(t)
          }),
          (o.prototype.toRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            )
          }),
          (o.prototype.fromRed = function() {
            return (
              n(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            )
          }),
          (o.prototype._forceRed = function(t) {
            return (this.red = t), this
          }),
          (o.prototype.forceRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              this._forceRed(t)
            )
          }),
          (o.prototype.redAdd = function(t) {
            return (
              n(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            )
          }),
          (o.prototype.redIAdd = function(t) {
            return (
              n(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            )
          }),
          (o.prototype.redSub = function(t) {
            return (
              n(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            )
          }),
          (o.prototype.redISub = function(t) {
            return (
              n(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            )
          }),
          (o.prototype.redShl = function(t) {
            return (
              n(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            )
          }),
          (o.prototype.redMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            )
          }),
          (o.prototype.redIMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            )
          }),
          (o.prototype.redSqr = function() {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            )
          }),
          (o.prototype.redISqr = function() {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            )
          }),
          (o.prototype.redSqrt = function() {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            )
          }),
          (o.prototype.redInvm = function() {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            )
          }),
          (o.prototype.redNeg = function() {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            )
          }),
          (o.prototype.redPow = function(t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            )
          })
        var w = { k256: null, p224: null, p192: null, p25519: null }
        function k(t, e) {
          ;(this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp())
        }
        function _() {
          k.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          )
        }
        function S() {
          k.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          )
        }
        function E() {
          k.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          )
        }
        function M() {
          k.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          )
        }
        function A(t) {
          if ('string' === typeof t) {
            var e = o._prime(t)
            ;(this.m = e.p), (this.prime = e)
          } else
            n(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null)
        }
        function B(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv
              .mul(this.r)
              .isubn(1)
              .div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv))
        }
        ;(k.prototype._tmp = function() {
          var t = new o(null)
          return (t.words = new Array(Math.ceil(this.n / 13))), t
        }),
          (k.prototype.ireduce = function(t) {
            var e,
              r = t
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
            } while (e > this.n)
            var n = e < this.n ? -1 : r.ucmp(this.p)
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            )
          }),
          (k.prototype.split = function(t, e) {
            t.iushrn(this.n, 0, e)
          }),
          (k.prototype.imulK = function(t) {
            return t.imul(this.k)
          }),
          i(_, k),
          (_.prototype.split = function(t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i]
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1)
            var o = t.words[9]
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i]
              ;(t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s)
            }
            ;(o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
          }),
          (_.prototype.imulK = function(t) {
            ;(t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2)
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r]
              ;(e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0))
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            )
          }),
          i(S, k),
          i(E, k),
          i(M, k),
          (M.prototype.imulK = function(t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n
              ;(n >>>= 26), (t.words[r] = i), (e = n)
            }
            return 0 !== e && (t.words[t.length++] = e), t
          }),
          (o._prime = function(t) {
            if (w[t]) return w[t]
            var e
            if ('k256' === t) e = new _()
            else if ('p224' === t) e = new S()
            else if ('p192' === t) e = new E()
            else {
              if ('p25519' !== t) throw new Error('Unknown prime ' + t)
              e = new M()
            }
            return (w[t] = e), e
          }),
          (A.prototype._verify1 = function(t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers')
          }),
          (A.prototype._verify2 = function(t, e) {
            n(0 === (t.negative | e.negative), 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers')
          }),
          (A.prototype.imod = function(t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (f(t, t.umod(this.m)._forceRed(this)), t)
          }),
          (A.prototype.neg = function(t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
          }),
          (A.prototype.add = function(t, e) {
            this._verify2(t, e)
            var r = t.add(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
          }),
          (A.prototype.iadd = function(t, e) {
            this._verify2(t, e)
            var r = t.iadd(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
          }),
          (A.prototype.sub = function(t, e) {
            this._verify2(t, e)
            var r = t.sub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
          }),
          (A.prototype.isub = function(t, e) {
            this._verify2(t, e)
            var r = t.isub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r
          }),
          (A.prototype.shl = function(t, e) {
            return this._verify1(t), this.imod(t.ushln(e))
          }),
          (A.prototype.imul = function(t, e) {
            return this._verify2(t, e), this.imod(t.imul(e))
          }),
          (A.prototype.mul = function(t, e) {
            return this._verify2(t, e), this.imod(t.mul(e))
          }),
          (A.prototype.isqr = function(t) {
            return this.imul(t, t.clone())
          }),
          (A.prototype.sqr = function(t) {
            return this.mul(t, t)
          }),
          (A.prototype.sqrt = function(t) {
            if (t.isZero()) return t.clone()
            var e = this.m.andln(3)
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2)
              return this.pow(t, r)
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1)
            n(!i.isZero())
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              f = this.m.bitLength()
            for (
              f = new o(2 * f * f).toRed(this);
              0 !== this.pow(f, h).cmp(u);

            )
              f.redIAdd(u)
            for (
              var c = this.pow(f, i),
                l = this.pow(t, i.addn(1).iushrn(1)),
                p = this.pow(t, i),
                d = s;
              0 !== p.cmp(a);

            ) {
              for (var g = p, y = 0; 0 !== g.cmp(a); y++) g = g.redSqr()
              n(y < d)
              var m = this.pow(c, new o(1).iushln(d - y - 1))
              ;(l = l.redMul(m)), (c = m.redSqr()), (p = p.redMul(c)), (d = y)
            }
            return l
          }),
          (A.prototype.invm = function(t) {
            var e = t._invmp(this.m)
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e)
          }),
          (A.prototype.pow = function(t, e) {
            if (e.isZero()) return new o(1).toRed(this)
            if (0 === e.cmpn(1)) return t.clone()
            var r = new Array(16)
            ;(r[0] = new o(1).toRed(this)), (r[1] = t)
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var h = e.words[n], f = u - 1; f >= 0; f--) {
                var c = (h >> f) & 1
                i !== r[0] && (i = this.sqr(i)),
                  0 !== c || 0 !== s
                    ? ((s <<= 1),
                      (s |= c),
                      (4 === ++a || (0 === n && 0 === f)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0)
              }
              u = 26
            }
            return i
          }),
          (A.prototype.convertTo = function(t) {
            var e = t.umod(this.m)
            return e === t ? e.clone() : e
          }),
          (A.prototype.convertFrom = function(t) {
            var e = t.clone()
            return (e.red = null), e
          }),
          (o.mont = function(t) {
            return new B(t)
          }),
          i(B, A),
          (B.prototype.convertTo = function(t) {
            return this.imod(t.ushln(this.shift))
          }),
          (B.prototype.convertFrom = function(t) {
            var e = this.imod(t.mul(this.rinv))
            return (e.red = null), e
          }),
          (B.prototype.imul = function(t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            )
          }),
          (B.prototype.mul = function(t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            )
          }),
          (B.prototype.invm = function(t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
          })
      })((t = r.nmd(t)), this)
    },
    99096: function(t, e, r) {
      'use strict'
      t.exports = r(656)
    },
    17207: function(t, e, r) {
      'use strict'
      var n = r(59966).Buffer,
        i = r(36059),
        o = r(13486),
        s = r(56329),
        a = r(12478),
        u = r(48818),
        h = r(656)
      function f(t) {
        o.Writable.call(this)
        var e = h[t]
        if (!e) throw new Error('Unknown message digest')
        ;(this._hashType = e.hash),
          (this._hash = i(e.hash)),
          (this._tag = e.id),
          (this._signType = e.sign)
      }
      function c(t) {
        o.Writable.call(this)
        var e = h[t]
        if (!e) throw new Error('Unknown message digest')
        ;(this._hash = i(e.hash)), (this._tag = e.id), (this._signType = e.sign)
      }
      function l(t) {
        return new f(t)
      }
      function p(t) {
        return new c(t)
      }
      Object.keys(h).forEach(function(t) {
        ;(h[t].id = n.from(h[t].id, 'hex')), (h[t.toLowerCase()] = h[t])
      }),
        s(f, o.Writable),
        (f.prototype._write = function(t, e, r) {
          this._hash.update(t), r()
        }),
        (f.prototype.update = function(t, e) {
          return (
            this._hash.update('string' === typeof t ? n.from(t, e) : t), this
          )
        }),
        (f.prototype.sign = function(t, e) {
          this.end()
          var r = this._hash.digest(),
            n = a(r, t, this._hashType, this._signType, this._tag)
          return e ? n.toString(e) : n
        }),
        s(c, o.Writable),
        (c.prototype._write = function(t, e, r) {
          this._hash.update(t), r()
        }),
        (c.prototype.update = function(t, e) {
          return (
            this._hash.update('string' === typeof t ? n.from(t, e) : t), this
          )
        }),
        (c.prototype.verify = function(t, e, r) {
          var i = 'string' === typeof e ? n.from(e, r) : e
          this.end()
          var o = this._hash.digest()
          return u(i, o, t, this._signType, this._tag)
        }),
        (t.exports = { Sign: l, Verify: p, createSign: l, createVerify: p })
    },
    12478: function(t, e, r) {
      'use strict'
      var n = r(59966).Buffer,
        i = r(82080),
        o = r(55721),
        s = r(38086).ec,
        a = r(81949),
        u = r(74496),
        h = r(48906)
      function f(t, e, r, o) {
        if ((t = n.from(t.toArray())).length < e.byteLength()) {
          var s = n.alloc(e.byteLength() - t.length)
          t = n.concat([s, t])
        }
        var a = r.length,
          u = (function(t, e) {
            ;(t = c(t, e)), (t = t.mod(e))
            var r = n.from(t.toArray())
            if (r.length < e.byteLength()) {
              var i = n.alloc(e.byteLength() - r.length)
              r = n.concat([i, r])
            }
            return r
          })(r, e),
          h = n.alloc(a)
        h.fill(1)
        var f = n.alloc(a)
        return (
          (f = i(o, f)
            .update(h)
            .update(n.from([0]))
            .update(t)
            .update(u)
            .digest()),
          (h = i(o, f)
            .update(h)
            .digest()),
          {
            k: (f = i(o, f)
              .update(h)
              .update(n.from([1]))
              .update(t)
              .update(u)
              .digest()),
            v: (h = i(o, f)
              .update(h)
              .digest())
          }
        )
      }
      function c(t, e) {
        var r = new a(t),
          n = (t.length << 3) - e.bitLength()
        return n > 0 && r.ishrn(n), r
      }
      function l(t, e, r) {
        var o, s
        do {
          for (o = n.alloc(0); 8 * o.length < t.bitLength(); )
            (e.v = i(r, e.k)
              .update(e.v)
              .digest()),
              (o = n.concat([o, e.v]))
          ;(s = c(o, t)),
            (e.k = i(r, e.k)
              .update(e.v)
              .update(n.from([0]))
              .digest()),
            (e.v = i(r, e.k)
              .update(e.v)
              .digest())
        } while (-1 !== s.cmp(t))
        return s
      }
      function p(t, e, r, n) {
        return t
          .toRed(a.mont(r))
          .redPow(e)
          .fromRed()
          .mod(n)
      }
      ;(t.exports = function(t, e, r, i, d) {
        var g = u(e)
        if (g.curve) {
          if ('ecdsa' !== i && 'ecdsa/rsa' !== i)
            throw new Error('wrong private key type')
          return (function(t, e) {
            var r = h[e.curve.join('.')]
            if (!r) throw new Error('unknown curve ' + e.curve.join('.'))
            var i = new s(r).keyFromPrivate(e.privateKey),
              o = i.sign(t)
            return n.from(o.toDER())
          })(t, g)
        }
        if ('dsa' === g.type) {
          if ('dsa' !== i) throw new Error('wrong private key type')
          return (function(t, e, r) {
            var i,
              o = e.params.priv_key,
              s = e.params.p,
              u = e.params.q,
              h = e.params.g,
              d = new a(0),
              g = c(t, u).mod(u),
              y = !1,
              m = f(o, u, t, r)
            for (; !1 === y; )
              (d = p(h, (i = l(u, m, r)), s, u)),
                0 ===
                  (y = i
                    .invm(u)
                    .imul(g.add(o.mul(d)))
                    .mod(u)).cmpn(0) && ((y = !1), (d = new a(0)))
            return (function(t, e) {
              ;(t = t.toArray()),
                (e = e.toArray()),
                128 & t[0] && (t = [0].concat(t))
              128 & e[0] && (e = [0].concat(e))
              var r = t.length + e.length + 4,
                i = [48, r, 2, t.length]
              return (i = i.concat(t, [2, e.length], e)), n.from(i)
            })(d, y)
          })(t, g, r)
        }
        if ('rsa' !== i && 'ecdsa/rsa' !== i)
          throw new Error('wrong private key type')
        if (void 0 !== e.padding && 1 !== e.padding)
          throw new Error('illegal or unsupported padding mode')
        t = n.concat([d, t])
        for (
          var y = g.modulus.byteLength(), m = [0, 1];
          t.length + m.length + 1 < y;

        )
          m.push(255)
        m.push(0)
        for (var b = -1; ++b < t.length; ) m.push(t[b])
        return o(m, g)
      }),
        (t.exports.getKey = f),
        (t.exports.makeKey = l)
    },
    48818: function(t, e, r) {
      'use strict'
      var n = r(59966).Buffer,
        i = r(81949),
        o = r(38086).ec,
        s = r(74496),
        a = r(48906)
      function u(t, e) {
        if (t.cmpn(0) <= 0) throw new Error('invalid sig')
        if (t.cmp(e) >= 0) throw new Error('invalid sig')
      }
      t.exports = function(t, e, r, h, f) {
        var c = s(r)
        if ('ec' === c.type) {
          if ('ecdsa' !== h && 'ecdsa/rsa' !== h)
            throw new Error('wrong public key type')
          return (function(t, e, r) {
            var n = a[r.data.algorithm.curve.join('.')]
            if (!n)
              throw new Error(
                'unknown curve ' + r.data.algorithm.curve.join('.')
              )
            var i = new o(n),
              s = r.data.subjectPrivateKey.data
            return i.verify(e, t, s)
          })(t, e, c)
        }
        if ('dsa' === c.type) {
          if ('dsa' !== h) throw new Error('wrong public key type')
          return (function(t, e, r) {
            var n = r.data.p,
              o = r.data.q,
              a = r.data.g,
              h = r.data.pub_key,
              f = s.signature.decode(t, 'der'),
              c = f.s,
              l = f.r
            u(c, o), u(l, o)
            var p = i.mont(n),
              d = c.invm(o),
              g = a
                .toRed(p)
                .redPow(new i(e).mul(d).mod(o))
                .fromRed()
                .mul(
                  h
                    .toRed(p)
                    .redPow(l.mul(d).mod(o))
                    .fromRed()
                )
                .mod(n)
                .mod(o)
            return 0 === g.cmp(l)
          })(t, e, c)
        }
        if ('rsa' !== h && 'ecdsa/rsa' !== h)
          throw new Error('wrong public key type')
        e = n.concat([f, e])
        for (
          var l = c.modulus.byteLength(), p = [1], d = 0;
          e.length + p.length + 2 < l;

        )
          p.push(255), (d += 1)
        p.push(0)
        for (var g = -1; ++g < e.length; ) p.push(e[g])
        p = n.from(p)
        var y = i.mont(c.modulus)
        ;(t = (t = new i(t).toRed(y)).redPow(new i(c.publicExponent))),
          (t = n.from(t.fromRed().toArray()))
        var m = d < 8 ? 1 : 0
        for (
          l = Math.min(t.length, p.length),
            t.length !== p.length && (m = 1),
            g = -1;
          ++g < l;

        )
          m |= t[g] ^ p[g]
        return 0 === m
      }
    },
    81949: function(t, e, r) {
      !(function(t, e) {
        'use strict'
        function n(t, e) {
          if (!t) throw new Error(e || 'Assertion failed')
        }
        function i(t, e) {
          t.super_ = e
          var r = function() {}
          ;(r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t)
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t
          ;(this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (('le' !== e && 'be' !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || 'be'))
        }
        var s
        'object' === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26)
        try {
          s =
            'undefined' !== typeof window &&
            'undefined' !== typeof window.Buffer
              ? window.Buffer
              : r(38664).Buffer
        } catch (I) {}
        function a(t, e) {
          var r = t.charCodeAt(e)
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, 'Invalid character in ' + t)
        }
        function u(t, e, r) {
          var n = a(t, r)
          return r - 1 >= e && (n |= a(t, r - 1) << 4), n
        }
        function h(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var h = t.charCodeAt(u) - 48
            ;(o *= i),
              (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              n(h >= 0 && s < i, 'Invalid character'),
              (o += s)
          }
          return o
        }
        function f(t, e) {
          ;(t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red)
        }
        if (
          ((o.isBN = function(t) {
            return (
              t instanceof o ||
              (null !== t &&
                'object' === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            )
          }),
          (o.max = function(t, e) {
            return t.cmp(e) > 0 ? t : e
          }),
          (o.min = function(t, e) {
            return t.cmp(e) < 0 ? t : e
          }),
          (o.prototype._init = function(t, e, r) {
            if ('number' === typeof t) return this._initNumber(t, e, r)
            if ('object' === typeof t) return this._initArray(t, e, r)
            'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36)
            var i = 0
            '-' === (t = t.toString().replace(/\s+/g, ''))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    'le' === r && this._initArray(this.toArray(), e, r)))
          }),
          (o.prototype._initNumber = function(t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              'le' === r && this._initArray(this.toArray(), e, r)
          }),
          (o.prototype._initArray = function(t, e, r) {
            if ((n('number' === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this
            ;(this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length))
            for (var i = 0; i < this.length; i++) this.words[i] = 0
            var o,
              s,
              a = 0
            if ('be' === r)
              for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            else if ('le' === r)
              for (i = 0, o = 0; i < t.length; i += 3)
                (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                  (this.words[o] |= (s << a) & 67108863),
                  (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), o++)
            return this._strip()
          }),
          (o.prototype._parseHex = function(t, e, r) {
            ;(this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length))
            for (var n = 0; n < this.length; n++) this.words[n] = 0
            var i,
              o = 0,
              s = 0
            if ('be' === r)
              for (n = t.length - 1; n >= e; n -= 2)
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            else
              for (
                n = (t.length - e) % 2 === 0 ? e + 1 : e;
                n < t.length;
                n += 2
              )
                (i = u(t, e, n) << o),
                  (this.words[s] |= 67108863 & i),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                    : (o += 8)
            this._strip()
          }),
          (o.prototype._parseBase = function(t, e, r) {
            ;(this.words = [0]), (this.length = 1)
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++
            n--, (i = (i / e) | 0)
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                f = r;
              f < a;
              f += n
            )
              (u = h(t, f, f + n, e)),
                this.imuln(i),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            if (0 !== s) {
              var c = 1
              for (u = h(t, f, t.length, e), f = 0; f < s; f++) c *= e
              this.imuln(c),
                this.words[0] + u < 67108864
                  ? (this.words[0] += u)
                  : this._iaddn(u)
            }
            this._strip()
          }),
          (o.prototype.copy = function(t) {
            t.words = new Array(this.length)
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e]
            ;(t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red)
          }),
          (o.prototype._move = function(t) {
            f(t, this)
          }),
          (o.prototype.clone = function() {
            var t = new o(null)
            return this.copy(t), t
          }),
          (o.prototype._expand = function(t) {
            for (; this.length < t; ) this.words[this.length++] = 0
            return this
          }),
          (o.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--
            return this._normSign()
          }),
          (o.prototype._normSign = function() {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            )
          }),
          'undefined' !== typeof Symbol && 'function' === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for('nodejs.util.inspect.custom')] = c
          } catch (I) {
            o.prototype.inspect = c
          }
        else o.prototype.inspect = c
        function c() {
          return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
        }
        var l = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
          ],
          p = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          d = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
          ]
        ;(o.prototype.toString = function(t, e) {
          var r
          if (((e = 0 | e || 1), 16 === (t = t || 10) || 'hex' === t)) {
            r = ''
            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (16777215 & ((a << i) | o)).toString(16)
              ;(o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? l[6 - u.length] + u + r
                    : u + r)
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = p[t],
              f = d[t]
            r = ''
            var c = this.clone()
            for (c.negative = 0; !c.isZero(); ) {
              var g = c.modrn(f).toString(t)
              r = (c = c.idivn(f)).isZero() ? g + r : l[h - g.length] + g + r
            }
            for (this.isZero() && (r = '0' + r); r.length % e !== 0; )
              r = '0' + r
            return 0 !== this.negative && (r = '-' + r), r
          }
          n(!1, 'Base should be between 2 and 36')
        }),
          (o.prototype.toNumber = function() {
            var t = this.words[0]
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, 'Number can only safely store up to 53 bits'),
              0 !== this.negative ? -t : t
            )
          }),
          (o.prototype.toJSON = function() {
            return this.toString(16, 2)
          }),
          s &&
            (o.prototype.toBuffer = function(t, e) {
              return this.toArrayLike(s, t, e)
            }),
          (o.prototype.toArray = function(t, e) {
            return this.toArrayLike(Array, t, e)
          })
        function g(t, e, r) {
          r.negative = e.negative ^ t.negative
          var n = (t.length + e.length) | 0
          ;(r.length = n), (n = (n - 1) | 0)
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0
          r.words[0] = a
          for (var h = 1; h < n; h++) {
            for (
              var f = u >>> 26,
                c = 67108863 & u,
                l = Math.min(h, e.length - 1),
                p = Math.max(0, h - t.length + 1);
              p <= l;
              p++
            ) {
              var d = (h - p) | 0
              ;(f +=
                ((s = (i = 0 | t.words[d]) * (o = 0 | e.words[p]) + c) /
                  67108864) |
                0),
                (c = 67108863 & s)
            }
            ;(r.words[h] = 0 | c), (u = 0 | f)
          }
          return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r._strip()
        }
        ;(o.prototype.toArrayLike = function(t, e, r) {
          this._strip()
          var i = this.byteLength(),
            o = r || Math.max(1, i)
          n(i <= o, 'byte array longer than desired length'),
            n(o > 0, 'Requested array length <= 0')
          var s = (function(t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
          })(t, o)
          return this['_toArrayLike' + ('le' === e ? 'LE' : 'BE')](s, i), s
        }),
          (o.prototype._toArrayLikeLE = function(t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n
              ;(t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0
          }),
          (o.prototype._toArrayLikeBE = function(t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n
              ;(t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2))
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0
          }),
          Math.clz32
            ? (o.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
              })
            : (o.prototype._countBits = function(t) {
                var e = t,
                  r = 0
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                )
              }),
          (o.prototype._zeroBits = function(t) {
            if (0 === t) return 26
            var e = t,
              r = 0
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            )
          }),
          (o.prototype.bitLength = function() {
            var t = this.words[this.length - 1],
              e = this._countBits(t)
            return 26 * (this.length - 1) + e
          }),
          (o.prototype.zeroBits = function() {
            if (this.isZero()) return 0
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e])
              if (((t += r), 26 !== r)) break
            }
            return t
          }),
          (o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
          }),
          (o.prototype.toTwos = function(t) {
            return 0 !== this.negative
              ? this.abs()
                  .inotn(t)
                  .iaddn(1)
              : this.clone()
          }),
          (o.prototype.fromTwos = function(t) {
            return this.testn(t - 1)
              ? this.notn(t)
                  .iaddn(1)
                  .ineg()
              : this.clone()
          }),
          (o.prototype.isNeg = function() {
            return 0 !== this.negative
          }),
          (o.prototype.neg = function() {
            return this.clone().ineg()
          }),
          (o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
          }),
          (o.prototype.iuor = function(t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e]
            return this._strip()
          }),
          (o.prototype.ior = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuor(t)
          }),
          (o.prototype.or = function(t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this)
          }),
          (o.prototype.uor = function(t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this)
          }),
          (o.prototype.iuand = function(t) {
            var e
            e = this.length > t.length ? t : this
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.iand = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuand(t)
          }),
          (o.prototype.and = function(t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this)
          }),
          (o.prototype.uand = function(t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this)
          }),
          (o.prototype.iuxor = function(t) {
            var e, r
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this))
            for (var n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n]
            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n]
            return (this.length = e.length), this._strip()
          }),
          (o.prototype.ixor = function(t) {
            return n(0 === (this.negative | t.negative)), this.iuxor(t)
          }),
          (o.prototype.xor = function(t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this)
          }),
          (o.prototype.uxor = function(t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this)
          }),
          (o.prototype.inotn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = 0 | Math.ceil(t / 26),
              r = t % 26
            this._expand(e), r > 0 && e--
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i]
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            )
          }),
          (o.prototype.notn = function(t) {
            return this.clone().inotn(t)
          }),
          (o.prototype.setn = function(t, e) {
            n('number' === typeof t && t >= 0)
            var r = (t / 26) | 0,
              i = t % 26
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << i)
                : this.words[r] & ~(1 << i)),
              this._strip()
            )
          }),
          (o.prototype.iadd = function(t) {
            var e, r, n
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              )
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              )
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this))
            for (var i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26)
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o]
            return this
          }),
          (o.prototype.add = function(t) {
            var e
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this)
          }),
          (o.prototype.isub = function(t) {
            if (0 !== t.negative) {
              t.negative = 0
              var e = this.iadd(t)
              return (t.negative = 1), e._normSign()
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              )
            var r,
              n,
              i = this.cmp(t)
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              )
            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this))
            for (var o = 0, s = 0; s < n.length; s++)
              (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            for (; 0 !== o && s < r.length; s++)
              (o = (e = (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & e)
            if (0 === o && s < r.length && r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s]
            return (
              (this.length = Math.max(this.length, s)),
              r !== this && (this.negative = 1),
              this._strip()
            )
          }),
          (o.prototype.sub = function(t) {
            return this.clone().isub(t)
          })
        var y = function(t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            h = 0,
            f = 0 | s[0],
            c = 8191 & f,
            l = f >>> 13,
            p = 0 | s[1],
            d = 8191 & p,
            g = p >>> 13,
            y = 0 | s[2],
            m = 8191 & y,
            b = y >>> 13,
            v = 0 | s[3],
            w = 8191 & v,
            k = v >>> 13,
            _ = 0 | s[4],
            S = 8191 & _,
            E = _ >>> 13,
            M = 0 | s[5],
            A = 8191 & M,
            B = M >>> 13,
            I = 0 | s[6],
            C = 8191 & I,
            T = I >>> 13,
            L = 0 | s[7],
            U = 8191 & L,
            x = L >>> 13,
            R = 0 | s[8],
            N = 8191 & R,
            D = R >>> 13,
            P = 0 | s[9],
            O = 8191 & P,
            j = P >>> 13,
            K = 0 | a[0],
            F = 8191 & K,
            V = K >>> 13,
            q = 0 | a[1],
            Y = 8191 & q,
            z = q >>> 13,
            H = 0 | a[2],
            G = 8191 & H,
            W = H >>> 13,
            Z = 0 | a[3],
            X = 8191 & Z,
            J = Z >>> 13,
            $ = 0 | a[4],
            Q = 8191 & $,
            tt = $ >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            nt = et >>> 13,
            it = 0 | a[6],
            ot = 8191 & it,
            st = it >>> 13,
            at = 0 | a[7],
            ut = 8191 & at,
            ht = at >>> 13,
            ft = 0 | a[8],
            ct = 8191 & ft,
            lt = ft >>> 13,
            pt = 0 | a[9],
            dt = 8191 & pt,
            gt = pt >>> 13
          ;(r.negative = t.negative ^ e.negative), (r.length = 19)
          var yt =
            (((h + (n = Math.imul(c, F))) | 0) +
              ((8191 & (i = ((i = Math.imul(c, V)) + Math.imul(l, F)) | 0)) <<
                13)) |
            0
          ;(h = ((((o = Math.imul(l, V)) + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
            (yt &= 67108863),
            (n = Math.imul(d, F)),
            (i = ((i = Math.imul(d, V)) + Math.imul(g, F)) | 0),
            (o = Math.imul(g, V))
          var mt =
            (((h + (n = (n + Math.imul(c, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, z)) | 0) + Math.imul(l, Y)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, z)) | 0) + (i >>> 13)) | 0) +
              (mt >>> 26)) |
            0),
            (mt &= 67108863),
            (n = Math.imul(m, F)),
            (i = ((i = Math.imul(m, V)) + Math.imul(b, F)) | 0),
            (o = Math.imul(b, V)),
            (n = (n + Math.imul(d, Y)) | 0),
            (i = ((i = (i + Math.imul(d, z)) | 0) + Math.imul(g, Y)) | 0),
            (o = (o + Math.imul(g, z)) | 0)
          var bt =
            (((h + (n = (n + Math.imul(c, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, W)) | 0) + Math.imul(l, G)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, W)) | 0) + (i >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (n = Math.imul(w, F)),
            (i = ((i = Math.imul(w, V)) + Math.imul(k, F)) | 0),
            (o = Math.imul(k, V)),
            (n = (n + Math.imul(m, Y)) | 0),
            (i = ((i = (i + Math.imul(m, z)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, z)) | 0),
            (n = (n + Math.imul(d, G)) | 0),
            (i = ((i = (i + Math.imul(d, W)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, W)) | 0)
          var vt =
            (((h + (n = (n + Math.imul(c, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, J)) | 0) + Math.imul(l, X)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, J)) | 0) + (i >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (n = Math.imul(S, F)),
            (i = ((i = Math.imul(S, V)) + Math.imul(E, F)) | 0),
            (o = Math.imul(E, V)),
            (n = (n + Math.imul(w, Y)) | 0),
            (i = ((i = (i + Math.imul(w, z)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, z)) | 0),
            (n = (n + Math.imul(m, G)) | 0),
            (i = ((i = (i + Math.imul(m, W)) | 0) + Math.imul(b, G)) | 0),
            (o = (o + Math.imul(b, W)) | 0),
            (n = (n + Math.imul(d, X)) | 0),
            (i = ((i = (i + Math.imul(d, J)) | 0) + Math.imul(g, X)) | 0),
            (o = (o + Math.imul(g, J)) | 0)
          var wt =
            (((h + (n = (n + Math.imul(c, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, tt)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, tt)) | 0) + (i >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (n = Math.imul(A, F)),
            (i = ((i = Math.imul(A, V)) + Math.imul(B, F)) | 0),
            (o = Math.imul(B, V)),
            (n = (n + Math.imul(S, Y)) | 0),
            (i = ((i = (i + Math.imul(S, z)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, z)) | 0),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, W)) | 0) + Math.imul(k, G)) | 0),
            (o = (o + Math.imul(k, W)) | 0),
            (n = (n + Math.imul(m, X)) | 0),
            (i = ((i = (i + Math.imul(m, J)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, J)) | 0),
            (n = (n + Math.imul(d, Q)) | 0),
            (i = ((i = (i + Math.imul(d, tt)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, tt)) | 0)
          var kt =
            (((h + (n = (n + Math.imul(c, rt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, nt)) | 0) + Math.imul(l, rt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, nt)) | 0) + (i >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (n = Math.imul(C, F)),
            (i = ((i = Math.imul(C, V)) + Math.imul(T, F)) | 0),
            (o = Math.imul(T, V)),
            (n = (n + Math.imul(A, Y)) | 0),
            (i = ((i = (i + Math.imul(A, z)) | 0) + Math.imul(B, Y)) | 0),
            (o = (o + Math.imul(B, z)) | 0),
            (n = (n + Math.imul(S, G)) | 0),
            (i = ((i = (i + Math.imul(S, W)) | 0) + Math.imul(E, G)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (n = (n + Math.imul(w, X)) | 0),
            (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(k, X)) | 0),
            (o = (o + Math.imul(k, J)) | 0),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (n = (n + Math.imul(d, rt)) | 0),
            (i = ((i = (i + Math.imul(d, nt)) | 0) + Math.imul(g, rt)) | 0),
            (o = (o + Math.imul(g, nt)) | 0)
          var _t =
            (((h + (n = (n + Math.imul(c, ot)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, st)) | 0) + Math.imul(l, ot)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, st)) | 0) + (i >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (n = Math.imul(U, F)),
            (i = ((i = Math.imul(U, V)) + Math.imul(x, F)) | 0),
            (o = Math.imul(x, V)),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, z)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, z)) | 0),
            (n = (n + Math.imul(A, G)) | 0),
            (i = ((i = (i + Math.imul(A, W)) | 0) + Math.imul(B, G)) | 0),
            (o = (o + Math.imul(B, W)) | 0),
            (n = (n + Math.imul(S, X)) | 0),
            (i = ((i = (i + Math.imul(S, J)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(k, Q)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (n = (n + Math.imul(m, rt)) | 0),
            (i = ((i = (i + Math.imul(m, nt)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, nt)) | 0),
            (n = (n + Math.imul(d, ot)) | 0),
            (i = ((i = (i + Math.imul(d, st)) | 0) + Math.imul(g, ot)) | 0),
            (o = (o + Math.imul(g, st)) | 0)
          var St =
            (((h + (n = (n + Math.imul(c, ut)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ht)) | 0) + Math.imul(l, ut)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, ht)) | 0) + (i >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (n = Math.imul(N, F)),
            (i = ((i = Math.imul(N, V)) + Math.imul(D, F)) | 0),
            (o = Math.imul(D, V)),
            (n = (n + Math.imul(U, Y)) | 0),
            (i = ((i = (i + Math.imul(U, z)) | 0) + Math.imul(x, Y)) | 0),
            (o = (o + Math.imul(x, z)) | 0),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, W)) | 0) + Math.imul(T, G)) | 0),
            (o = (o + Math.imul(T, W)) | 0),
            (n = (n + Math.imul(A, X)) | 0),
            (i = ((i = (i + Math.imul(A, J)) | 0) + Math.imul(B, X)) | 0),
            (o = (o + Math.imul(B, J)) | 0),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (n = (n + Math.imul(w, rt)) | 0),
            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(k, rt)) | 0),
            (o = (o + Math.imul(k, nt)) | 0),
            (n = (n + Math.imul(m, ot)) | 0),
            (i = ((i = (i + Math.imul(m, st)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, st)) | 0),
            (n = (n + Math.imul(d, ut)) | 0),
            (i = ((i = (i + Math.imul(d, ht)) | 0) + Math.imul(g, ut)) | 0),
            (o = (o + Math.imul(g, ht)) | 0)
          var Et =
            (((h + (n = (n + Math.imul(c, ct)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, lt)) | 0) + Math.imul(l, ct)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, lt)) | 0) + (i >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (n = Math.imul(O, F)),
            (i = ((i = Math.imul(O, V)) + Math.imul(j, F)) | 0),
            (o = Math.imul(j, V)),
            (n = (n + Math.imul(N, Y)) | 0),
            (i = ((i = (i + Math.imul(N, z)) | 0) + Math.imul(D, Y)) | 0),
            (o = (o + Math.imul(D, z)) | 0),
            (n = (n + Math.imul(U, G)) | 0),
            (i = ((i = (i + Math.imul(U, W)) | 0) + Math.imul(x, G)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, J)) | 0),
            (n = (n + Math.imul(A, Q)) | 0),
            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(B, Q)) | 0),
            (o = (o + Math.imul(B, tt)) | 0),
            (n = (n + Math.imul(S, rt)) | 0),
            (i = ((i = (i + Math.imul(S, nt)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, nt)) | 0),
            (n = (n + Math.imul(w, ot)) | 0),
            (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, st)) | 0),
            (n = (n + Math.imul(m, ut)) | 0),
            (i = ((i = (i + Math.imul(m, ht)) | 0) + Math.imul(b, ut)) | 0),
            (o = (o + Math.imul(b, ht)) | 0),
            (n = (n + Math.imul(d, ct)) | 0),
            (i = ((i = (i + Math.imul(d, lt)) | 0) + Math.imul(g, ct)) | 0),
            (o = (o + Math.imul(g, lt)) | 0)
          var Mt =
            (((h + (n = (n + Math.imul(c, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, gt)) | 0) + Math.imul(l, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(l, gt)) | 0) + (i >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (n = Math.imul(O, Y)),
            (i = ((i = Math.imul(O, z)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, z)),
            (n = (n + Math.imul(N, G)) | 0),
            (i = ((i = (i + Math.imul(N, W)) | 0) + Math.imul(D, G)) | 0),
            (o = (o + Math.imul(D, W)) | 0),
            (n = (n + Math.imul(U, X)) | 0),
            (i = ((i = (i + Math.imul(U, J)) | 0) + Math.imul(x, X)) | 0),
            (o = (o + Math.imul(x, J)) | 0),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, Q)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(A, rt)) | 0),
            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(B, rt)) | 0),
            (o = (o + Math.imul(B, nt)) | 0),
            (n = (n + Math.imul(S, ot)) | 0),
            (i = ((i = (i + Math.imul(S, st)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, st)) | 0),
            (n = (n + Math.imul(w, ut)) | 0),
            (i = ((i = (i + Math.imul(w, ht)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, ht)) | 0),
            (n = (n + Math.imul(m, ct)) | 0),
            (i = ((i = (i + Math.imul(m, lt)) | 0) + Math.imul(b, ct)) | 0),
            (o = (o + Math.imul(b, lt)) | 0)
          var At =
            (((h + (n = (n + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(d, gt)) | 0) + Math.imul(g, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(g, gt)) | 0) + (i >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (n = Math.imul(O, G)),
            (i = ((i = Math.imul(O, W)) + Math.imul(j, G)) | 0),
            (o = Math.imul(j, W)),
            (n = (n + Math.imul(N, X)) | 0),
            (i = ((i = (i + Math.imul(N, J)) | 0) + Math.imul(D, X)) | 0),
            (o = (o + Math.imul(D, J)) | 0),
            (n = (n + Math.imul(U, Q)) | 0),
            (i = ((i = (i + Math.imul(U, tt)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (n = (n + Math.imul(C, rt)) | 0),
            (i = ((i = (i + Math.imul(C, nt)) | 0) + Math.imul(T, rt)) | 0),
            (o = (o + Math.imul(T, nt)) | 0),
            (n = (n + Math.imul(A, ot)) | 0),
            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(B, ot)) | 0),
            (o = (o + Math.imul(B, st)) | 0),
            (n = (n + Math.imul(S, ut)) | 0),
            (i = ((i = (i + Math.imul(S, ht)) | 0) + Math.imul(E, ut)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (n = (n + Math.imul(w, ct)) | 0),
            (i = ((i = (i + Math.imul(w, lt)) | 0) + Math.imul(k, ct)) | 0),
            (o = (o + Math.imul(k, lt)) | 0)
          var Bt =
            (((h + (n = (n + Math.imul(m, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, gt)) | 0) + Math.imul(b, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(b, gt)) | 0) + (i >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (n = Math.imul(O, X)),
            (i = ((i = Math.imul(O, J)) + Math.imul(j, X)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(D, Q)) | 0),
            (o = (o + Math.imul(D, tt)) | 0),
            (n = (n + Math.imul(U, rt)) | 0),
            (i = ((i = (i + Math.imul(U, nt)) | 0) + Math.imul(x, rt)) | 0),
            (o = (o + Math.imul(x, nt)) | 0),
            (n = (n + Math.imul(C, ot)) | 0),
            (i = ((i = (i + Math.imul(C, st)) | 0) + Math.imul(T, ot)) | 0),
            (o = (o + Math.imul(T, st)) | 0),
            (n = (n + Math.imul(A, ut)) | 0),
            (i = ((i = (i + Math.imul(A, ht)) | 0) + Math.imul(B, ut)) | 0),
            (o = (o + Math.imul(B, ht)) | 0),
            (n = (n + Math.imul(S, ct)) | 0),
            (i = ((i = (i + Math.imul(S, lt)) | 0) + Math.imul(E, ct)) | 0),
            (o = (o + Math.imul(E, lt)) | 0)
          var It =
            (((h + (n = (n + Math.imul(w, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, gt)) | 0) + Math.imul(k, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(k, gt)) | 0) + (i >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (n = Math.imul(O, Q)),
            (i = ((i = Math.imul(O, tt)) + Math.imul(j, Q)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(N, rt)) | 0),
            (i = ((i = (i + Math.imul(N, nt)) | 0) + Math.imul(D, rt)) | 0),
            (o = (o + Math.imul(D, nt)) | 0),
            (n = (n + Math.imul(U, ot)) | 0),
            (i = ((i = (i + Math.imul(U, st)) | 0) + Math.imul(x, ot)) | 0),
            (o = (o + Math.imul(x, st)) | 0),
            (n = (n + Math.imul(C, ut)) | 0),
            (i = ((i = (i + Math.imul(C, ht)) | 0) + Math.imul(T, ut)) | 0),
            (o = (o + Math.imul(T, ht)) | 0),
            (n = (n + Math.imul(A, ct)) | 0),
            (i = ((i = (i + Math.imul(A, lt)) | 0) + Math.imul(B, ct)) | 0),
            (o = (o + Math.imul(B, lt)) | 0)
          var Ct =
            (((h + (n = (n + Math.imul(S, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, gt)) | 0) + Math.imul(E, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(E, gt)) | 0) + (i >>> 13)) | 0) +
              (Ct >>> 26)) |
            0),
            (Ct &= 67108863),
            (n = Math.imul(O, rt)),
            (i = ((i = Math.imul(O, nt)) + Math.imul(j, rt)) | 0),
            (o = Math.imul(j, nt)),
            (n = (n + Math.imul(N, ot)) | 0),
            (i = ((i = (i + Math.imul(N, st)) | 0) + Math.imul(D, ot)) | 0),
            (o = (o + Math.imul(D, st)) | 0),
            (n = (n + Math.imul(U, ut)) | 0),
            (i = ((i = (i + Math.imul(U, ht)) | 0) + Math.imul(x, ut)) | 0),
            (o = (o + Math.imul(x, ht)) | 0),
            (n = (n + Math.imul(C, ct)) | 0),
            (i = ((i = (i + Math.imul(C, lt)) | 0) + Math.imul(T, ct)) | 0),
            (o = (o + Math.imul(T, lt)) | 0)
          var Tt =
            (((h + (n = (n + Math.imul(A, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(A, gt)) | 0) + Math.imul(B, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(B, gt)) | 0) + (i >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (n = Math.imul(O, ot)),
            (i = ((i = Math.imul(O, st)) + Math.imul(j, ot)) | 0),
            (o = Math.imul(j, st)),
            (n = (n + Math.imul(N, ut)) | 0),
            (i = ((i = (i + Math.imul(N, ht)) | 0) + Math.imul(D, ut)) | 0),
            (o = (o + Math.imul(D, ht)) | 0),
            (n = (n + Math.imul(U, ct)) | 0),
            (i = ((i = (i + Math.imul(U, lt)) | 0) + Math.imul(x, ct)) | 0),
            (o = (o + Math.imul(x, lt)) | 0)
          var Lt =
            (((h + (n = (n + Math.imul(C, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, gt)) | 0) + Math.imul(T, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(T, gt)) | 0) + (i >>> 13)) | 0) +
              (Lt >>> 26)) |
            0),
            (Lt &= 67108863),
            (n = Math.imul(O, ut)),
            (i = ((i = Math.imul(O, ht)) + Math.imul(j, ut)) | 0),
            (o = Math.imul(j, ht)),
            (n = (n + Math.imul(N, ct)) | 0),
            (i = ((i = (i + Math.imul(N, lt)) | 0) + Math.imul(D, ct)) | 0),
            (o = (o + Math.imul(D, lt)) | 0)
          var Ut =
            (((h + (n = (n + Math.imul(U, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(U, gt)) | 0) + Math.imul(x, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(x, gt)) | 0) + (i >>> 13)) | 0) +
              (Ut >>> 26)) |
            0),
            (Ut &= 67108863),
            (n = Math.imul(O, ct)),
            (i = ((i = Math.imul(O, lt)) + Math.imul(j, ct)) | 0),
            (o = Math.imul(j, lt))
          var xt =
            (((h + (n = (n + Math.imul(N, dt)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, gt)) | 0) + Math.imul(D, dt)) | 0)) <<
                13)) |
            0
          ;(h =
            ((((o = (o + Math.imul(D, gt)) | 0) + (i >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863)
          var Rt =
            (((h + (n = Math.imul(O, dt))) | 0) +
              ((8191 & (i = ((i = Math.imul(O, gt)) + Math.imul(j, dt)) | 0)) <<
                13)) |
            0
          return (
            (h =
              ((((o = Math.imul(j, gt)) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
            (Rt &= 67108863),
            (u[0] = yt),
            (u[1] = mt),
            (u[2] = bt),
            (u[3] = vt),
            (u[4] = wt),
            (u[5] = kt),
            (u[6] = _t),
            (u[7] = St),
            (u[8] = Et),
            (u[9] = Mt),
            (u[10] = At),
            (u[11] = Bt),
            (u[12] = It),
            (u[13] = Ct),
            (u[14] = Tt),
            (u[15] = Lt),
            (u[16] = Ut),
            (u[17] = xt),
            (u[18] = Rt),
            0 !== h && ((u[19] = h), r.length++),
            r
          )
        }
        function m(t, e, r) {
          ;(r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length)
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i
            i = 0
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= u;
              h++
            ) {
              var f = o - h,
                c = (0 | t.words[f]) * (0 | e.words[h]),
                l = 67108863 & c
              ;(a = 67108863 & (l = (l + a) | 0)),
                (i +=
                  (s =
                    ((s = (s + ((c / 67108864) | 0)) | 0) + (l >>> 26)) | 0) >>>
                  26),
                (s &= 67108863)
            }
            ;(r.words[o] = a), (n = s), (s = i)
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip()
        }
        function b(t, e, r) {
          return m(t, e, r)
        }
        function v(t, e) {
          ;(this.x = t), (this.y = e)
        }
        Math.imul || (y = g),
          (o.prototype.mulTo = function(t, e) {
            var r = this.length + t.length
            return 10 === this.length && 10 === t.length
              ? y(this, t, e)
              : r < 63
              ? g(this, t, e)
              : r < 1024
              ? m(this, t, e)
              : b(this, t, e)
          }),
          (v.prototype.makeRBT = function(t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t)
            return e
          }),
          (v.prototype.revBin = function(t, e, r) {
            if (0 === t || t === r - 1) return t
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1)
            return n
          }),
          (v.prototype.permute = function(t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]])
          }),
          (v.prototype.transform = function(t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i)
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  h = Math.sin((2 * Math.PI) / a),
                  f = 0;
                f < i;
                f += a
              )
                for (var c = u, l = h, p = 0; p < s; p++) {
                  var d = r[f + p],
                    g = n[f + p],
                    y = r[f + p + s],
                    m = n[f + p + s],
                    b = c * y - l * m
                  ;(m = c * m + l * y),
                    (y = b),
                    (r[f + p] = d + y),
                    (n[f + p] = g + m),
                    (r[f + p + s] = d - y),
                    (n[f + p + s] = g - m),
                    p !== a &&
                      ((b = u * c - h * l), (l = u * l + h * c), (c = b))
                }
          }),
          (v.prototype.guessLen13b = function(t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0
            for (r = (r / 2) | 0; r; r >>>= 1) i++
            return 1 << (i + 1 + n)
          }),
          (v.prototype.conjugate = function(t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n]
                ;(t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i)
              }
          }),
          (v.prototype.normalize13b = function(t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r
              ;(t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0)
            }
            return t
          }),
          (v.prototype.convert13b = function(t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13)
            for (s = 2 * e; s < i; ++s) r[s] = 0
            n(0 === o), n(0 === (-8192 & o))
          }),
          (v.prototype.stub = function(t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0
            return e
          }),
          (v.prototype.mulp = function(t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              h = new Array(n),
              f = new Array(n),
              c = new Array(n),
              l = r.words
            ;(l.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, h, n),
              this.transform(s, o, a, u, n, i),
              this.transform(h, o, f, c, n, i)
            for (var p = 0; p < n; p++) {
              var d = a[p] * f[p] - u[p] * c[p]
              ;(u[p] = a[p] * c[p] + u[p] * f[p]), (a[p] = d)
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, l, o, n, i),
              this.conjugate(l, o, n),
              this.normalize13b(l, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            )
          }),
          (o.prototype.mul = function(t) {
            var e = new o(null)
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            )
          }),
          (o.prototype.mulf = function(t) {
            var e = new o(null)
            return (e.words = new Array(this.length + t.length)), b(this, t, e)
          }),
          (o.prototype.imul = function(t) {
            return this.clone().mulTo(t, this)
          }),
          (o.prototype.imuln = function(t) {
            var e = t < 0
            e && (t = -t), n('number' === typeof t), n(t < 67108864)
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r)
              ;(r >>= 26),
                (r += (o / 67108864) | 0),
                (r += s >>> 26),
                (this.words[i] = 67108863 & s)
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            )
          }),
          (o.prototype.muln = function(t) {
            return this.clone().imuln(t)
          }),
          (o.prototype.sqr = function() {
            return this.mul(this)
          }),
          (o.prototype.isqr = function() {
            return this.imul(this.clone())
          }),
          (o.prototype.pow = function(t) {
            var e = (function(t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26
                e[r] = (t.words[n] >>> i) & 1
              }
              return e
            })(t)
            if (0 === e.length) return new o(1)
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i))
            return r
          }),
          (o.prototype.iushln = function(t) {
            n('number' === typeof t && t >= 0)
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r)
            if (0 !== r) {
              var s = 0
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r
                ;(this.words[e] = u | s), (s = a >>> (26 - r))
              }
              s && ((this.words[e] = s), this.length++)
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e]
              for (e = 0; e < i; e++) this.words[e] = 0
              this.length += i
            }
            return this._strip()
          }),
          (o.prototype.ishln = function(t) {
            return n(0 === this.negative), this.iushln(t)
          }),
          (o.prototype.iushrn = function(t, e, r) {
            var i
            n('number' === typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0)
            var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o),
              u = r
            if (((i -= s), (i = Math.max(0, i)), u)) {
              for (var h = 0; h < s; h++) u.words[h] = this.words[h]
              u.length = s
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, h = 0; h < this.length; h++)
                this.words[h] = this.words[h + s]
            else (this.words[0] = 0), (this.length = 1)
            var f = 0
            for (h = this.length - 1; h >= 0 && (0 !== f || h >= i); h--) {
              var c = 0 | this.words[h]
              ;(this.words[h] = (f << (26 - o)) | (c >>> o)), (f = c & a)
            }
            return (
              u && 0 !== f && (u.words[u.length++] = f),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            )
          }),
          (o.prototype.ishrn = function(t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r)
          }),
          (o.prototype.shln = function(t) {
            return this.clone().ishln(t)
          }),
          (o.prototype.ushln = function(t) {
            return this.clone().iushln(t)
          }),
          (o.prototype.shrn = function(t) {
            return this.clone().ishrn(t)
          }),
          (o.prototype.ushrn = function(t) {
            return this.clone().iushrn(t)
          }),
          (o.prototype.testn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            return !(this.length <= r) && !!(this.words[r] & i)
          }),
          (o.prototype.imaskn = function(t) {
            n('number' === typeof t && t >= 0)
            var e = t % 26,
              r = (t - e) / 26
            if (
              (n(
                0 === this.negative,
                'imaskn works only with positive numbers'
              ),
              this.length <= r)
            )
              return this
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var i = 67108863 ^ ((67108863 >>> e) << e)
              this.words[this.length - 1] &= i
            }
            return this._strip()
          }),
          (o.prototype.maskn = function(t) {
            return this.clone().imaskn(t)
          }),
          (o.prototype.iaddn = function(t) {
            return (
              n('number' === typeof t),
              n(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            )
          }),
          (o.prototype._iaddn = function(t) {
            this.words[0] += t
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++
            return (this.length = Math.max(this.length, e + 1)), this
          }),
          (o.prototype.isubn = function(t) {
            if ((n('number' === typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t)
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              )
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1)
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1)
            return this._strip()
          }),
          (o.prototype.addn = function(t) {
            return this.clone().iaddn(t)
          }),
          (o.prototype.subn = function(t) {
            return this.clone().isubn(t)
          }),
          (o.prototype.iabs = function() {
            return (this.negative = 0), this
          }),
          (o.prototype.abs = function() {
            return this.clone().iabs()
          }),
          (o.prototype._ishlnsubmul = function(t, e, r) {
            var i,
              o,
              s = t.length + r
            this._expand(s)
            var a = 0
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a
              var u = (0 | t.words[i]) * e
              ;(a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o)
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o)
            if (0 === a) return this._strip()
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o)
            return (this.negative = 1), this._strip()
          }),
          (o.prototype._wordDiv = function(t, e) {
            var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1]
            0 !== (r = 26 - this._countBits(s)) &&
              ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]))
            var a,
              u = n.length - i.length
            if ('mod' !== e) {
              ;((a = new o(null)).length = u + 1),
                (a.words = new Array(a.length))
              for (var h = 0; h < a.length; h++) a.words[h] = 0
            }
            var f = n.clone()._ishlnsubmul(i, 1, u)
            0 === f.negative && ((n = f), a && (a.words[u] = 1))
            for (var c = u - 1; c >= 0; c--) {
              var l =
                67108864 * (0 | n.words[i.length + c]) +
                (0 | n.words[i.length + c - 1])
              for (
                l = Math.min((l / s) | 0, 67108863), n._ishlnsubmul(i, l, c);
                0 !== n.negative;

              )
                l--,
                  (n.negative = 0),
                  n._ishlnsubmul(i, 1, c),
                  n.isZero() || (n.negative ^= 1)
              a && (a.words[c] = l)
            }
            return (
              a && a._strip(),
              n._strip(),
              'div' !== e && 0 !== r && n.iushrn(r),
              { div: a || null, mod: n }
            )
          }),
          (o.prototype.divmod = function(t, e, r) {
            return (
              n(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((a = this.neg().divmod(t, e)),
                  'mod' !== e && (i = a.div.neg()),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                  { div: i, mod: s })
                : 0 === this.negative && 0 !== t.negative
                ? ((a = this.divmod(t.neg(), e)),
                  'mod' !== e && (i = a.div.neg()),
                  { div: i, mod: a.mod })
                : 0 !== (this.negative & t.negative)
                ? ((a = this.neg().divmod(t.neg(), e)),
                  'div' !== e &&
                    ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                  { div: a.div, mod: s })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? 'div' === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : 'mod' === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0]))
                    }
                : this._wordDiv(t, e)
            )
            var i, s, a
          }),
          (o.prototype.div = function(t) {
            return this.divmod(t, 'div', !1).div
          }),
          (o.prototype.mod = function(t) {
            return this.divmod(t, 'mod', !1).mod
          }),
          (o.prototype.umod = function(t) {
            return this.divmod(t, 'mod', !0).mod
          }),
          (o.prototype.divRound = function(t) {
            var e = this.divmod(t)
            if (e.mod.isZero()) return e.div
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n)
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1)
          }),
          (o.prototype.modrn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t
            return e ? -i : i
          }),
          (o.prototype.modn = function(t) {
            return this.modrn(t)
          }),
          (o.prototype.idivn = function(t) {
            var e = t < 0
            e && (t = -t), n(t <= 67108863)
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r
              ;(this.words[i] = (o / t) | 0), (r = o % t)
            }
            return this._strip(), e ? this.ineg() : this
          }),
          (o.prototype.divn = function(t) {
            return this.clone().idivn(t)
          }),
          (o.prototype.egcd = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h
            for (var f = r.clone(), c = e.clone(); !e.isZero(); ) {
              for (
                var l = 0, p = 1;
                0 === (e.words[0] & p) && l < 26;
                ++l, p <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(c)),
                    i.iushrn(1),
                    s.iushrn(1)
              for (
                var d = 0, g = 1;
                0 === (r.words[0] & g) && d < 26;
                ++d, g <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(f), u.isub(c)),
                    a.iushrn(1),
                    u.iushrn(1)
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s))
            }
            return { a: a, b: u, gcd: r.iushln(h) }
          }),
          (o.prototype._invmp = function(t) {
            n(0 === t.negative), n(!t.isZero())
            var e = this,
              r = t.clone()
            e = 0 !== e.negative ? e.umod(t) : e.clone()
            for (
              var i, s = new o(1), a = new o(0), u = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var h = 0, f = 1;
                0 === (e.words[0] & f) && h < 26;
                ++h, f <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; ) s.isOdd() && s.iadd(u), s.iushrn(1)
              for (
                var c = 0, l = 1;
                0 === (r.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (r.iushrn(c); c-- > 0; ) a.isOdd() && a.iadd(u), a.iushrn(1)
              e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s))
            }
            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
          }),
          (o.prototype.gcd = function(t) {
            if (this.isZero()) return t.abs()
            if (t.isZero()) return this.abs()
            var e = this.clone(),
              r = t.clone()
            ;(e.negative = 0), (r.negative = 0)
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1)
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1)
              for (; r.isEven(); ) r.iushrn(1)
              var i = e.cmp(r)
              if (i < 0) {
                var o = e
                ;(e = r), (r = o)
              } else if (0 === i || 0 === r.cmpn(1)) break
              e.isub(r)
            }
            return r.iushln(n)
          }),
          (o.prototype.invm = function(t) {
            return this.egcd(t).a.umod(t)
          }),
          (o.prototype.isEven = function() {
            return 0 === (1 & this.words[0])
          }),
          (o.prototype.isOdd = function() {
            return 1 === (1 & this.words[0])
          }),
          (o.prototype.andln = function(t) {
            return this.words[0] & t
          }),
          (o.prototype.bincn = function(t) {
            n('number' === typeof t)
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s]
              ;(o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a)
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this
          }),
          (o.prototype.isZero = function() {
            return 1 === this.length && 0 === this.words[0]
          }),
          (o.prototype.cmpn = function(t) {
            var e,
              r = t < 0
            if (0 !== this.negative && !r) return -1
            if (0 === this.negative && r) return 1
            if ((this._strip(), this.length > 1)) e = 1
            else {
              r && (t = -t), n(t <= 67108863, 'Number is too big')
              var i = 0 | this.words[0]
              e = i === t ? 0 : i < t ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.cmp = function(t) {
            if (0 !== this.negative && 0 === t.negative) return -1
            if (0 === this.negative && 0 !== t.negative) return 1
            var e = this.ucmp(t)
            return 0 !== this.negative ? 0 | -e : e
          }),
          (o.prototype.ucmp = function(t) {
            if (this.length > t.length) return 1
            if (this.length < t.length) return -1
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r]
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1)
                break
              }
            }
            return e
          }),
          (o.prototype.gtn = function(t) {
            return 1 === this.cmpn(t)
          }),
          (o.prototype.gt = function(t) {
            return 1 === this.cmp(t)
          }),
          (o.prototype.gten = function(t) {
            return this.cmpn(t) >= 0
          }),
          (o.prototype.gte = function(t) {
            return this.cmp(t) >= 0
          }),
          (o.prototype.ltn = function(t) {
            return -1 === this.cmpn(t)
          }),
          (o.prototype.lt = function(t) {
            return -1 === this.cmp(t)
          }),
          (o.prototype.lten = function(t) {
            return this.cmpn(t) <= 0
          }),
          (o.prototype.lte = function(t) {
            return this.cmp(t) <= 0
          }),
          (o.prototype.eqn = function(t) {
            return 0 === this.cmpn(t)
          }),
          (o.prototype.eq = function(t) {
            return 0 === this.cmp(t)
          }),
          (o.red = function(t) {
            return new A(t)
          }),
          (o.prototype.toRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              n(0 === this.negative, 'red works only with positives'),
              t.convertTo(this)._forceRed(t)
            )
          }),
          (o.prototype.fromRed = function() {
            return (
              n(
                this.red,
                'fromRed works only with numbers in reduction context'
              ),
              this.red.convertFrom(this)
            )
          }),
          (o.prototype._forceRed = function(t) {
            return (this.red = t), this
          }),
          (o.prototype.forceRed = function(t) {
            return (
              n(!this.red, 'Already a number in reduction context'),
              this._forceRed(t)
            )
          }),
          (o.prototype.redAdd = function(t) {
            return (
              n(this.red, 'redAdd works only with red numbers'),
              this.red.add(this, t)
            )
          }),
          (o.prototype.redIAdd = function(t) {
            return (
              n(this.red, 'redIAdd works only with red numbers'),
              this.red.iadd(this, t)
            )
          }),
          (o.prototype.redSub = function(t) {
            return (
              n(this.red, 'redSub works only with red numbers'),
              this.red.sub(this, t)
            )
          }),
          (o.prototype.redISub = function(t) {
            return (
              n(this.red, 'redISub works only with red numbers'),
              this.red.isub(this, t)
            )
          }),
          (o.prototype.redShl = function(t) {
            return (
              n(this.red, 'redShl works only with red numbers'),
              this.red.shl(this, t)
            )
          }),
          (o.prototype.redMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            )
          }),
          (o.prototype.redIMul = function(t) {
            return (
              n(this.red, 'redMul works only with red numbers'),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            )
          }),
          (o.prototype.redSqr = function() {
            return (
              n(this.red, 'redSqr works only with red numbers'),
              this.red._verify1(this),
              this.red.sqr(this)
            )
          }),
          (o.prototype.redISqr = function() {
            return (
              n(this.red, 'redISqr works only with red numbers'),
              this.red._verify1(this),
              this.red.isqr(this)
            )
          }),
          (o.prototype.redSqrt = function() {
            return (
              n(this.red, 'redSqrt works only with red numbers'),
              this.red._verify1(this),
              this.red.sqrt(this)
            )
          }),
          (o.prototype.redInvm = function() {
            return (
              n(this.red, 'redInvm works only with red numbers'),
              this.red._verify1(this),
              this.red.invm(this)
            )
          }),
          (o.prototype.redNeg = function() {
            return (
              n(this.red, 'redNeg works only with red numbers'),
              this.red._verify1(this),
              this.red.neg(this)
            )
          }),
          (o.prototype.redPow = function(t) {
            return (
              n(this.red && !t.red, 'redPow(normalNum)'),
              this.red._verify1(this),
              this.red.pow(this, t)
            )
          })
        var w = { k256: null, p224: null, p192: null, p25519: null }
        function k(t, e) {
          ;(this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp())
        }
        function _() {
          k.call(
            this,
            'k256',
            'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f'
          )
        }
        function S() {
          k.call(
            this,
            'p224',
            'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001'
          )
        }
        function E() {
          k.call(
            this,
            'p192',
            'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff'
          )
        }
        function M() {
          k.call(
            this,
            '25519',
            '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed'
          )
        }
        function A(t) {
          if ('string' === typeof t) {
            var e = o._prime(t)
            ;(this.m = e.p), (this.prime = e)
          } else
            n(t.gtn(1), 'modulus must be greater than 1'),
              (this.m = t),
              (this.prime = null)
        }
        function B(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv
              .mul(this.r)
              .isubn(1)
              .div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv))
        }
        ;(k.prototype._tmp = function() {
          var t = new o(null)
          return (t.words = new Array(Math.ceil(this.n / 13))), t
        }),
          (k.prototype.ireduce = function(t) {
            var e,
              r = t
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
            } while (e > this.n)
            var n = e < this.n ? -1 : r.ucmp(this.p)
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            )
          }),
          (k.prototype.split = function(t, e) {
            t.iushrn(this.n, 0, e)
          }),
          (k.prototype.imulK = function(t) {
            return t.imul(this.k)
          }),
          i(_, k),
          (_.prototype.split = function(t, e) {
            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)
              e.words[i] = t.words[i]
            if (((e.length = n), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1)
            var o = t.words[9]
            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
              var s = 0 | t.words[i]
              ;(t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s)
            }
            ;(o >>>= 22),
              (t.words[i - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
          }),
          (_.prototype.imulK = function(t) {
            ;(t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2)
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r]
              ;(e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0))
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            )
          }),
          i(S, k),
          i(E, k),
          i(M, k),
          (M.prototype.imulK = function(t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n
              ;(n >>>= 26), (t.words[r] = i), (e = n)
            }
            return 0 !== e && (t.words[t.length++] = e), t
          }),
          (o._prime = function(t) {
            if (w[t]) return w[t]
            var e
            if ('k256' === t) e = new _()
            else if ('p224' === t) e = new S()
            else if ('p192' === t) e = new E()
            else {
              if ('p25519' !== t) throw new Error('Unknown prime ' + t)
              e = new M()
            }
            return (w[t] = e), e
          }),
          (A.prototype._verify1 = function(t) {
            n(0 === t.negative, 'red works only with positives'),
              n(t.red, 'red works only with red numbers')
          }),
          (A.prototype._verify2 = function(t, e) {
            n(0 === (t.negative | e.negative), 'red works only with positives'),
              n(t.red && t.red === e.red, 'red works only with red numbers')
          }),
          (A.prototype.imod = function(t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (f(t, t.umod(this.m)._forceRed(this)), t)
          }),
          (A.prototype.neg = function(t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
          }),
          (A.prototype.add = function(t, e) {
            this._verify2(t, e)
            var r = t.add(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
          }),
          (A.prototype.iadd = function(t, e) {
            this._verify2(t, e)
            var r = t.iadd(e)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
          }),
          (A.prototype.sub = function(t, e) {
            this._verify2(t, e)
            var r = t.sub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
          }),
          (A.prototype.isub = function(t, e) {
            this._verify2(t, e)
            var r = t.isub(e)
            return r.cmpn(0) < 0 && r.iadd(this.m), r
          }),
          (A.prototype.shl = function(t, e) {
            return this._verify1(t), this.imod(t.ushln(e))
          }),
          (A.prototype.imul = function(t, e) {
            return this._verify2(t, e), this.imod(t.imul(e))
          }),
          (A.prototype.mul = function(t, e) {
            return this._verify2(t, e), this.imod(t.mul(e))
          }),
          (A.prototype.isqr = function(t) {
            return this.imul(t, t.clone())
          }),
          (A.prototype.sqr = function(t) {
            return this.mul(t, t)
          }),
          (A.prototype.sqrt = function(t) {
            if (t.isZero()) return t.clone()
            var e = this.m.andln(3)
            if ((n(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2)
              return this.pow(t, r)
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1)
            n(!i.isZero())
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              f = this.m.bitLength()
            for (
              f = new o(2 * f * f).toRed(this);
              0 !== this.pow(f, h).cmp(u);

            )
              f.redIAdd(u)
            for (
              var c = this.pow(f, i),
                l = this.pow(t, i.addn(1).iushrn(1)),
                p = this.pow(t, i),
                d = s;
              0 !== p.cmp(a);

            ) {
              for (var g = p, y = 0; 0 !== g.cmp(a); y++) g = g.redSqr()
              n(y < d)
              var m = this.pow(c, new o(1).iushln(d - y - 1))
              ;(l = l.redMul(m)), (c = m.redSqr()), (p = p.redMul(c)), (d = y)
            }
            return l
          }),
          (A.prototype.invm = function(t) {
            var e = t._invmp(this.m)
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e)
          }),
          (A.prototype.pow = function(t, e) {
            if (e.isZero()) return new o(1).toRed(this)
            if (0 === e.cmpn(1)) return t.clone()
            var r = new Array(16)
            ;(r[0] = new o(1).toRed(this)), (r[1] = t)
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t)
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var h = e.words[n], f = u - 1; f >= 0; f--) {
                var c = (h >> f) & 1
                i !== r[0] && (i = this.sqr(i)),
                  0 !== c || 0 !== s
                    ? ((s <<= 1),
                      (s |= c),
                      (4 === ++a || (0 === n && 0 === f)) &&
                        ((i = this.mul(i, r[s])), (a = 0), (s = 0)))
                    : (a = 0)
              }
              u = 26
            }
            return i
          }),
          (A.prototype.convertTo = function(t) {
            var e = t.umod(this.m)
            return e === t ? e.clone() : e
          }),
          (A.prototype.convertFrom = function(t) {
            var e = t.clone()
            return (e.red = null), e
          }),
          (o.mont = function(t) {
            return new B(t)
          }),
          i(B, A),
          (B.prototype.convertTo = function(t) {
            return this.imod(t.ushln(this.shift))
          }),
          (B.prototype.convertFrom = function(t) {
            var e = this.imod(t.mul(this.rinv))
            return (e.red = null), e
          }),
          (B.prototype.imul = function(t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
              o._forceRed(this)
            )
          }),
          (B.prototype.mul = function(t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this)
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
              s._forceRed(this)
            )
          }),
          (B.prototype.invm = function(t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
          })
      })((t = r.nmd(t)), this)
    },
    9101: function(t) {
      var e = {}.toString
      t.exports =
        Array.isArray ||
        function(t) {
          return '[object Array]' == e.call(t)
        }
    },
    26211: function(t, e, r) {
      'use strict'
      var n = r(66600),
        i =
          Object.keys ||
          function(t) {
            var e = []
            for (var r in t) e.push(r)
            return e
          }
      t.exports = c
      var o = Object.create(r(23525))
      o.inherits = r(56329)
      var s = r(61137),
        a = r(49873)
      o.inherits(c, s)
      for (var u = i(a.prototype), h = 0; h < u.length; h++) {
        var f = u[h]
        c.prototype[f] || (c.prototype[f] = a.prototype[f])
      }
      function c(t) {
        if (!(this instanceof c)) return new c(t)
        s.call(this, t),
          a.call(this, t),
          t && !1 === t.readable && (this.readable = !1),
          t && !1 === t.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', l)
      }
      function l() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(p, this)
      }
      function p(t) {
        t.end()
      }
      Object.defineProperty(c.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function() {
          return this._writableState.highWaterMark
        }
      }),
        Object.defineProperty(c.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              (this._readableState.destroyed && this._writableState.destroyed)
            )
          },
          set: function(t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t))
          }
        }),
        (c.prototype._destroy = function(t, e) {
          this.push(null), this.end(), n.nextTick(e, t)
        })
    },
    9135: function(t, e, r) {
      'use strict'
      t.exports = o
      var n = r(10981),
        i = Object.create(r(23525))
      function o(t) {
        if (!(this instanceof o)) return new o(t)
        n.call(this, t)
      }
      ;(i.inherits = r(56329)),
        i.inherits(o, n),
        (o.prototype._transform = function(t, e, r) {
          r(null, t)
        })
    },
    61137: function(t, e, r) {
      'use strict'
      var n = r(62285),
        i = r(66600)
      t.exports = v
      var o,
        s = r(9101)
      v.ReadableState = b
      r(27284).EventEmitter
      var a = function(t, e) {
          return t.listeners(e).length
        },
        u = r(4526),
        h = r(39).Buffer,
        f =
          ('undefined' !== typeof r.g
            ? r.g
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof self
            ? self
            : {}
          ).Uint8Array || function() {}
      var c = Object.create(r(23525))
      c.inherits = r(56329)
      var l = r(92668),
        p = void 0
      p = l && l.debuglog ? l.debuglog('stream') : function() {}
      var d,
        g = r(52249),
        y = r(76269)
      c.inherits(v, u)
      var m = ['error', 'close', 'destroy', 'pause', 'resume']
      function b(t, e) {
        t = t || {}
        var n = e instanceof (o = o || r(26211))
        ;(this.objectMode = !!t.objectMode),
          n && (this.objectMode = this.objectMode || !!t.readableObjectMode)
        var i = t.highWaterMark,
          s = t.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = i || 0 === i ? i : n && (s || 0 === s) ? s : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new g()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (d || (d = r(92942).I),
            (this.decoder = new d(t.encoding)),
            (this.encoding = t.encoding))
      }
      function v(t) {
        if (((o = o || r(26211)), !(this instanceof v))) return new v(t)
        ;(this._readableState = new b(t, this)),
          (this.readable = !0),
          t &&
            ('function' === typeof t.read && (this._read = t.read),
            'function' === typeof t.destroy && (this._destroy = t.destroy)),
          u.call(this)
      }
      function w(t, e, r, n, i) {
        var o,
          s = t._readableState
        null === e
          ? ((s.reading = !1),
            (function(t, e) {
              if (e.ended) return
              if (e.decoder) {
                var r = e.decoder.end()
                r &&
                  r.length &&
                  (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length))
              }
              ;(e.ended = !0), E(t)
            })(t, s))
          : (i ||
              (o = (function(t, e) {
                var r
                ;(n = e),
                  h.isBuffer(n) ||
                    n instanceof f ||
                    'string' === typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (r = new TypeError('Invalid non-string/buffer chunk'))
                var n
                return r
              })(s, e)),
            o
              ? t.emit('error', o)
              : s.objectMode || (e && e.length > 0)
              ? ('string' === typeof e ||
                  s.objectMode ||
                  Object.getPrototypeOf(e) === h.prototype ||
                  (e = (function(t) {
                    return h.from(t)
                  })(e)),
                n
                  ? s.endEmitted
                    ? t.emit(
                        'error',
                        new Error('stream.unshift() after end event')
                      )
                    : k(t, s, e, !0)
                  : s.ended
                  ? t.emit('error', new Error('stream.push() after EOF'))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((e = s.decoder.write(e)),
                        s.objectMode || 0 !== e.length
                          ? k(t, s, e, !1)
                          : A(t, s))
                      : k(t, s, e, !1)))
              : n || (s.reading = !1))
        return (function(t) {
          return (
            !t.ended &&
            (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
          )
        })(s)
      }
      function k(t, e, r, n) {
        e.flowing && 0 === e.length && !e.sync
          ? (t.emit('data', r), t.read(0))
          : ((e.length += e.objectMode ? 1 : r.length),
            n ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && E(t)),
          A(t, e)
      }
      Object.defineProperty(v.prototype, 'destroyed', {
        get: function() {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(t) {
          this._readableState && (this._readableState.destroyed = t)
        }
      }),
        (v.prototype.destroy = y.destroy),
        (v.prototype._undestroy = y.undestroy),
        (v.prototype._destroy = function(t, e) {
          this.push(null), e(t)
        }),
        (v.prototype.push = function(t, e) {
          var r,
            n = this._readableState
          return (
            n.objectMode
              ? (r = !0)
              : 'string' === typeof t &&
                ((e = e || n.defaultEncoding) !== n.encoding &&
                  ((t = h.from(t, e)), (e = '')),
                (r = !0)),
            w(this, t, e, !1, r)
          )
        }),
        (v.prototype.unshift = function(t) {
          return w(this, t, null, !0, !1)
        }),
        (v.prototype.isPaused = function() {
          return !1 === this._readableState.flowing
        }),
        (v.prototype.setEncoding = function(t) {
          return (
            d || (d = r(92942).I),
            (this._readableState.decoder = new d(t)),
            (this._readableState.encoding = t),
            this
          )
        })
      var _ = 8388608
      function S(t, e) {
        return t <= 0 || (0 === e.length && e.ended)
          ? 0
          : e.objectMode
          ? 1
          : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark &&
              (e.highWaterMark = (function(t) {
                return (
                  t >= _
                    ? (t = _)
                    : (t--,
                      (t |= t >>> 1),
                      (t |= t >>> 2),
                      (t |= t >>> 4),
                      (t |= t >>> 8),
                      (t |= t >>> 16),
                      t++),
                  t
                )
              })(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0))
      }
      function E(t) {
        var e = t._readableState
        ;(e.needReadable = !1),
          e.emittedReadable ||
            (p('emitReadable', e.flowing),
            (e.emittedReadable = !0),
            e.sync ? i.nextTick(M, t) : M(t))
      }
      function M(t) {
        p('emit readable'), t.emit('readable'), T(t)
      }
      function A(t, e) {
        e.readingMore || ((e.readingMore = !0), i.nextTick(B, t, e))
      }
      function B(t, e) {
        for (
          var r = e.length;
          !e.reading &&
          !e.flowing &&
          !e.ended &&
          e.length < e.highWaterMark &&
          (p('maybeReadMore read 0'), t.read(0), r !== e.length);

        )
          r = e.length
        e.readingMore = !1
      }
      function I(t) {
        p('readable nexttick read 0'), t.read(0)
      }
      function C(t, e) {
        e.reading || (p('resume read 0'), t.read(0)),
          (e.resumeScheduled = !1),
          (e.awaitDrain = 0),
          t.emit('resume'),
          T(t),
          e.flowing && !e.reading && t.read(0)
      }
      function T(t) {
        var e = t._readableState
        for (p('flow', e.flowing); e.flowing && null !== t.read(); );
      }
      function L(t, e) {
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder
                  ? e.buffer.join('')
                  : 1 === e.buffer.length
                  ? e.buffer.head.data
                  : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = (function(t, e, r) {
                  var n
                  t < e.head.data.length
                    ? ((n = e.head.data.slice(0, t)),
                      (e.head.data = e.head.data.slice(t)))
                    : (n =
                        t === e.head.data.length
                          ? e.shift()
                          : r
                          ? (function(t, e) {
                              var r = e.head,
                                n = 1,
                                i = r.data
                              t -= i.length
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  s = t > o.length ? o.length : t
                                if (
                                  (s === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, t)),
                                  0 === (t -= s))
                                ) {
                                  s === o.length
                                    ? (++n,
                                      r.next
                                        ? (e.head = r.next)
                                        : (e.head = e.tail = null))
                                    : ((e.head = r), (r.data = o.slice(s)))
                                  break
                                }
                                ++n
                              }
                              return (e.length -= n), i
                            })(t, e)
                          : (function(t, e) {
                              var r = h.allocUnsafe(t),
                                n = e.head,
                                i = 1
                              n.data.copy(r), (t -= n.data.length)
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  s = t > o.length ? o.length : t
                                if (
                                  (o.copy(r, r.length - t, 0, s),
                                  0 === (t -= s))
                                ) {
                                  s === o.length
                                    ? (++i,
                                      n.next
                                        ? (e.head = n.next)
                                        : (e.head = e.tail = null))
                                    : ((e.head = n), (n.data = o.slice(s)))
                                  break
                                }
                                ++i
                              }
                              return (e.length -= i), r
                            })(t, e))
                  return n
                })(t, e.buffer, e.decoder)),
            r)
        var r
      }
      function U(t) {
        var e = t._readableState
        if (e.length > 0)
          throw new Error('"endReadable()" called on non-empty stream')
        e.endEmitted || ((e.ended = !0), i.nextTick(x, e, t))
      }
      function x(t, e) {
        t.endEmitted ||
          0 !== t.length ||
          ((t.endEmitted = !0), (e.readable = !1), e.emit('end'))
      }
      function R(t, e) {
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r
        return -1
      }
      ;(v.prototype.read = function(t) {
        p('read', t), (t = parseInt(t, 10))
        var e = this._readableState,
          r = t
        if (
          (0 !== t && (e.emittedReadable = !1),
          0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended))
        )
          return (
            p('read: emitReadable', e.length, e.ended),
            0 === e.length && e.ended ? U(this) : E(this),
            null
          )
        if (0 === (t = S(t, e)) && e.ended)
          return 0 === e.length && U(this), null
        var n,
          i = e.needReadable
        return (
          p('need readable', i),
          (0 === e.length || e.length - t < e.highWaterMark) &&
            p('length less than watermark', (i = !0)),
          e.ended || e.reading
            ? p('reading or ended', (i = !1))
            : i &&
              (p('do read'),
              (e.reading = !0),
              (e.sync = !0),
              0 === e.length && (e.needReadable = !0),
              this._read(e.highWaterMark),
              (e.sync = !1),
              e.reading || (t = S(r, e))),
          null === (n = t > 0 ? L(t, e) : null)
            ? ((e.needReadable = !0), (t = 0))
            : (e.length -= t),
          0 === e.length &&
            (e.ended || (e.needReadable = !0), r !== t && e.ended && U(this)),
          null !== n && this.emit('data', n),
          n
        )
      }),
        (v.prototype._read = function(t) {
          this.emit('error', new Error('_read() is not implemented'))
        }),
        (v.prototype.pipe = function(t, e) {
          var r = this,
            o = this._readableState
          switch (o.pipesCount) {
            case 0:
              o.pipes = t
              break
            case 1:
              o.pipes = [o.pipes, t]
              break
            default:
              o.pipes.push(t)
          }
          ;(o.pipesCount += 1), p('pipe count=%d opts=%j', o.pipesCount, e)
          var u =
            (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? f : v
          function h(e, n) {
            p('onunpipe'),
              e === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                p('cleanup'),
                t.removeListener('close', m),
                t.removeListener('finish', b),
                t.removeListener('drain', c),
                t.removeListener('error', y),
                t.removeListener('unpipe', h),
                r.removeListener('end', f),
                r.removeListener('end', v),
                r.removeListener('data', g),
                (l = !0),
                !o.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  c())
          }
          function f() {
            p('onend'), t.end()
          }
          o.endEmitted ? i.nextTick(u) : r.once('end', u), t.on('unpipe', h)
          var c = (function(t) {
            return function() {
              var e = t._readableState
              p('pipeOnDrain', e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain && a(t, 'data') && ((e.flowing = !0), T(t))
            }
          })(r)
          t.on('drain', c)
          var l = !1
          var d = !1
          function g(e) {
            p('ondata'),
              (d = !1),
              !1 !== t.write(e) ||
                d ||
                (((1 === o.pipesCount && o.pipes === t) ||
                  (o.pipesCount > 1 && -1 !== R(o.pipes, t))) &&
                  !l &&
                  (p('false write response, pause', o.awaitDrain),
                  o.awaitDrain++,
                  (d = !0)),
                r.pause())
          }
          function y(e) {
            p('onerror', e),
              v(),
              t.removeListener('error', y),
              0 === a(t, 'error') && t.emit('error', e)
          }
          function m() {
            t.removeListener('finish', b), v()
          }
          function b() {
            p('onfinish'), t.removeListener('close', m), v()
          }
          function v() {
            p('unpipe'), r.unpipe(t)
          }
          return (
            r.on('data', g),
            (function(t, e, r) {
              if ('function' === typeof t.prependListener)
                return t.prependListener(e, r)
              t._events && t._events[e]
                ? s(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r)
            })(t, 'error', y),
            t.once('close', m),
            t.once('finish', b),
            t.emit('pipe', r),
            o.flowing || (p('pipe resume'), r.resume()),
            t
          )
        }),
        (v.prototype.unpipe = function(t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 }
          if (0 === e.pipesCount) return this
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes),
                (e.pipes = null),
                (e.pipesCount = 0),
                (e.flowing = !1),
                t && t.emit('unpipe', this, r)),
              this
            )
          if (!t) {
            var n = e.pipes,
              i = e.pipesCount
            ;(e.pipes = null), (e.pipesCount = 0), (e.flowing = !1)
            for (var o = 0; o < i; o++)
              n[o].emit('unpipe', this, { hasUnpiped: !1 })
            return this
          }
          var s = R(e.pipes, t)
          return (
            -1 === s ||
              (e.pipes.splice(s, 1),
              (e.pipesCount -= 1),
              1 === e.pipesCount && (e.pipes = e.pipes[0]),
              t.emit('unpipe', this, r)),
            this
          )
        }),
        (v.prototype.on = function(t, e) {
          var r = u.prototype.on.call(this, t, e)
          if ('data' === t) !1 !== this._readableState.flowing && this.resume()
          else if ('readable' === t) {
            var n = this._readableState
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && E(this) : i.nextTick(I, this))
          }
          return r
        }),
        (v.prototype.addListener = v.prototype.on),
        (v.prototype.resume = function() {
          var t = this._readableState
          return (
            t.flowing ||
              (p('resume'),
              (t.flowing = !0),
              (function(t, e) {
                e.resumeScheduled ||
                  ((e.resumeScheduled = !0), i.nextTick(C, t, e))
              })(this, t)),
            this
          )
        }),
        (v.prototype.pause = function() {
          return (
            p('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (p('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            this
          )
        }),
        (v.prototype.wrap = function(t) {
          var e = this,
            r = this._readableState,
            n = !1
          for (var i in (t.on('end', function() {
            if ((p('wrapped end'), r.decoder && !r.ended)) {
              var t = r.decoder.end()
              t && t.length && e.push(t)
            }
            e.push(null)
          }),
          t.on('data', function(i) {
            ;(p('wrapped data'),
            r.decoder && (i = r.decoder.write(i)),
            !r.objectMode || (null !== i && void 0 !== i)) &&
              ((r.objectMode || (i && i.length)) &&
                (e.push(i) || ((n = !0), t.pause())))
          }),
          t))
            void 0 === this[i] &&
              'function' === typeof t[i] &&
              (this[i] = (function(e) {
                return function() {
                  return t[e].apply(t, arguments)
                }
              })(i))
          for (var o = 0; o < m.length; o++)
            t.on(m[o], this.emit.bind(this, m[o]))
          return (
            (this._read = function(e) {
              p('wrapped _read', e), n && ((n = !1), t.resume())
            }),
            this
          )
        }),
        Object.defineProperty(v.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark
          }
        }),
        (v._fromList = L)
    },
    10981: function(t, e, r) {
      'use strict'
      t.exports = s
      var n = r(26211),
        i = Object.create(r(23525))
      function o(t, e) {
        var r = this._transformState
        r.transforming = !1
        var n = r.writecb
        if (!n)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          )
        ;(r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          n(t)
        var i = this._readableState
        ;(i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark)
      }
      function s(t) {
        if (!(this instanceof s)) return new s(t)
        n.call(this, t),
          (this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ('function' === typeof t.transform &&
              (this._transform = t.transform),
            'function' === typeof t.flush && (this._flush = t.flush)),
          this.on('prefinish', a)
      }
      function a() {
        var t = this
        'function' === typeof this._flush
          ? this._flush(function(e, r) {
              u(t, e, r)
            })
          : u(this, null, null)
      }
      function u(t, e, r) {
        if (e) return t.emit('error', e)
        if ((null != r && t.push(r), t._writableState.length))
          throw new Error('Calling transform done when ws.length != 0')
        if (t._transformState.transforming)
          throw new Error('Calling transform done when still transforming')
        return t.push(null)
      }
      ;(i.inherits = r(56329)),
        i.inherits(s, n),
        (s.prototype.push = function(t, e) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, t, e)
          )
        }),
        (s.prototype._transform = function(t, e, r) {
          throw new Error('_transform() is not implemented')
        }),
        (s.prototype._write = function(t, e, r) {
          var n = this._transformState
          if (
            ((n.writecb = r),
            (n.writechunk = t),
            (n.writeencoding = e),
            !n.transforming)
          ) {
            var i = this._readableState
            ;(n.needTransform ||
              i.needReadable ||
              i.length < i.highWaterMark) &&
              this._read(i.highWaterMark)
          }
        }),
        (s.prototype._read = function(t) {
          var e = this._transformState
          null !== e.writechunk && e.writecb && !e.transforming
            ? ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform))
            : (e.needTransform = !0)
        }),
        (s.prototype._destroy = function(t, e) {
          var r = this
          n.prototype._destroy.call(this, t, function(t) {
            e(t), r.emit('close')
          })
        })
    },
    49873: function(t, e, r) {
      'use strict'
      var n = r(62285),
        i = r(66600)
      function o(t) {
        var e = this
        ;(this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(t, e, r) {
              var n = t.entry
              t.entry = null
              for (; n; ) {
                var i = n.callback
                e.pendingcb--, i(r), (n = n.next)
              }
              e.corkedRequestsFree.next = t
            })(e, t)
          })
      }
      t.exports = m
      var s,
        a =
          !n.browser && ['v0.10', 'v0.9.'].indexOf(n.version.slice(0, 5)) > -1
            ? setImmediate
            : i.nextTick
      m.WritableState = y
      var u = Object.create(r(23525))
      u.inherits = r(56329)
      var h = { deprecate: r(82390) },
        f = r(4526),
        c = r(39).Buffer,
        l =
          ('undefined' !== typeof r.g
            ? r.g
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof self
            ? self
            : {}
          ).Uint8Array || function() {}
      var p,
        d = r(76269)
      function g() {}
      function y(t, e) {
        ;(s = s || r(26211)), (t = t || {})
        var n = e instanceof s
        ;(this.objectMode = !!t.objectMode),
          n && (this.objectMode = this.objectMode || !!t.writableObjectMode)
        var u = t.highWaterMark,
          h = t.writableHighWaterMark,
          f = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = u || 0 === u ? u : n && (h || 0 === h) ? h : f),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1)
        var c = !1 === t.decodeStrings
        ;(this.decodeStrings = !c),
          (this.defaultEncoding = t.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(t) {
            !(function(t, e) {
              var r = t._writableState,
                n = r.sync,
                o = r.writecb
              if (
                ((function(t) {
                  ;(t.writing = !1),
                    (t.writecb = null),
                    (t.length -= t.writelen),
                    (t.writelen = 0)
                })(r),
                e)
              )
                !(function(t, e, r, n, o) {
                  --e.pendingcb,
                    r
                      ? (i.nextTick(o, n),
                        i.nextTick(S, t, e),
                        (t._writableState.errorEmitted = !0),
                        t.emit('error', n))
                      : (o(n),
                        (t._writableState.errorEmitted = !0),
                        t.emit('error', n),
                        S(t, e))
                })(t, r, n, e, o)
              else {
                var s = k(r)
                s ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  w(t, r),
                  n ? a(v, t, r, s, o) : v(t, r, s, o)
              }
            })(e, t)
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this))
      }
      function m(t) {
        if (((s = s || r(26211)), !p.call(m, this) && !(this instanceof s)))
          return new m(t)
        ;(this._writableState = new y(t, this)),
          (this.writable = !0),
          t &&
            ('function' === typeof t.write && (this._write = t.write),
            'function' === typeof t.writev && (this._writev = t.writev),
            'function' === typeof t.destroy && (this._destroy = t.destroy),
            'function' === typeof t.final && (this._final = t.final)),
          f.call(this)
      }
      function b(t, e, r, n, i, o, s) {
        ;(e.writelen = n),
          (e.writecb = s),
          (e.writing = !0),
          (e.sync = !0),
          r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
          (e.sync = !1)
      }
      function v(t, e, r, n) {
        r ||
          (function(t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit('drain'))
          })(t, e),
          e.pendingcb--,
          n(),
          S(t, e)
      }
      function w(t, e) {
        e.bufferProcessing = !0
        var r = e.bufferedRequest
        if (t._writev && r && r.next) {
          var n = e.bufferedRequestCount,
            i = new Array(n),
            s = e.corkedRequestsFree
          s.entry = r
          for (var a = 0, u = !0; r; )
            (i[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1)
          ;(i.allBuffers = u),
            b(t, e, !0, e.length, i, '', s.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            s.next
              ? ((e.corkedRequestsFree = s.next), (s.next = null))
              : (e.corkedRequestsFree = new o(e)),
            (e.bufferedRequestCount = 0)
        } else {
          for (; r; ) {
            var h = r.chunk,
              f = r.encoding,
              c = r.callback
            if (
              (b(t, e, !1, e.objectMode ? 1 : h.length, h, f, c),
              (r = r.next),
              e.bufferedRequestCount--,
              e.writing)
            )
              break
          }
          null === r && (e.lastBufferedRequest = null)
        }
        ;(e.bufferedRequest = r), (e.bufferProcessing = !1)
      }
      function k(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        )
      }
      function _(t, e) {
        t._final(function(r) {
          e.pendingcb--,
            r && t.emit('error', r),
            (e.prefinished = !0),
            t.emit('prefinish'),
            S(t, e)
        })
      }
      function S(t, e) {
        var r = k(e)
        return (
          r &&
            (!(function(t, e) {
              e.prefinished ||
                e.finalCalled ||
                ('function' === typeof t._final
                  ? (e.pendingcb++, (e.finalCalled = !0), i.nextTick(_, t, e))
                  : ((e.prefinished = !0), t.emit('prefinish')))
            })(t, e),
            0 === e.pendingcb && ((e.finished = !0), t.emit('finish'))),
          r
        )
      }
      u.inherits(m, f),
        (y.prototype.getBuffer = function() {
          for (var t = this.bufferedRequest, e = []; t; )
            e.push(t), (t = t.next)
          return e
        }),
        (function() {
          try {
            Object.defineProperty(y.prototype, 'buffer', {
              get: h.deprecate(
                function() {
                  return this.getBuffer()
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003'
              )
            })
          } catch (t) {}
        })(),
        'function' === typeof Symbol &&
        Symbol.hasInstance &&
        'function' === typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(m, Symbol.hasInstance, {
              value: function(t) {
                return (
                  !!p.call(this, t) ||
                  (this === m && (t && t._writableState instanceof y))
                )
              }
            }))
          : (p = function(t) {
              return t instanceof this
            }),
        (m.prototype.pipe = function() {
          this.emit('error', new Error('Cannot pipe, not readable'))
        }),
        (m.prototype.write = function(t, e, r) {
          var n,
            o = this._writableState,
            s = !1,
            a = !o.objectMode && ((n = t), c.isBuffer(n) || n instanceof l)
          return (
            a &&
              !c.isBuffer(t) &&
              (t = (function(t) {
                return c.from(t)
              })(t)),
            'function' === typeof e && ((r = e), (e = null)),
            a ? (e = 'buffer') : e || (e = o.defaultEncoding),
            'function' !== typeof r && (r = g),
            o.ended
              ? (function(t, e) {
                  var r = new Error('write after end')
                  t.emit('error', r), i.nextTick(e, r)
                })(this, r)
              : (a ||
                  (function(t, e, r, n) {
                    var o = !0,
                      s = !1
                    return (
                      null === r
                        ? (s = new TypeError(
                            'May not write null values to stream'
                          ))
                        : 'string' === typeof r ||
                          void 0 === r ||
                          e.objectMode ||
                          (s = new TypeError(
                            'Invalid non-string/buffer chunk'
                          )),
                      s && (t.emit('error', s), i.nextTick(n, s), (o = !1)),
                      o
                    )
                  })(this, o, t, r)) &&
                (o.pendingcb++,
                (s = (function(t, e, r, n, i, o) {
                  if (!r) {
                    var s = (function(t, e, r) {
                      t.objectMode ||
                        !1 === t.decodeStrings ||
                        'string' !== typeof e ||
                        (e = c.from(e, r))
                      return e
                    })(e, n, i)
                    n !== s && ((r = !0), (i = 'buffer'), (n = s))
                  }
                  var a = e.objectMode ? 1 : n.length
                  e.length += a
                  var u = e.length < e.highWaterMark
                  u || (e.needDrain = !0)
                  if (e.writing || e.corked) {
                    var h = e.lastBufferedRequest
                    ;(e.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null
                    }),
                      h
                        ? (h.next = e.lastBufferedRequest)
                        : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1)
                  } else b(t, e, !1, a, n, i, o)
                  return u
                })(this, o, a, t, e, r))),
            s
          )
        }),
        (m.prototype.cork = function() {
          this._writableState.corked++
        }),
        (m.prototype.uncork = function() {
          var t = this._writableState
          t.corked &&
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              w(this, t))
        }),
        (m.prototype.setDefaultEncoding = function(t) {
          if (
            ('string' === typeof t && (t = t.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw'
              ].indexOf((t + '').toLowerCase()) > -1
            ))
          )
            throw new TypeError('Unknown encoding: ' + t)
          return (this._writableState.defaultEncoding = t), this
        }),
        Object.defineProperty(m.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark
          }
        }),
        (m.prototype._write = function(t, e, r) {
          r(new Error('_write() is not implemented'))
        }),
        (m.prototype._writev = null),
        (m.prototype.end = function(t, e, r) {
          var n = this._writableState
          'function' === typeof t
            ? ((r = t), (t = null), (e = null))
            : 'function' === typeof e && ((r = e), (e = null)),
            null !== t && void 0 !== t && this.write(t, e),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function(t, e, r) {
                ;(e.ending = !0),
                  S(t, e),
                  r && (e.finished ? i.nextTick(r) : t.once('finish', r))
                ;(e.ended = !0), (t.writable = !1)
              })(this, n, r)
        }),
        Object.defineProperty(m.prototype, 'destroyed', {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            )
          },
          set: function(t) {
            this._writableState && (this._writableState.destroyed = t)
          }
        }),
        (m.prototype.destroy = d.destroy),
        (m.prototype._undestroy = d.undestroy),
        (m.prototype._destroy = function(t, e) {
          this.end(), e(t)
        })
    },
    52249: function(t, e, r) {
      'use strict'
      var n = r(39).Buffer,
        i = r(21638)
      ;(t.exports = (function() {
        function t() {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        return (
          (t.prototype.push = function(t) {
            var e = { data: t, next: null }
            this.length > 0 ? (this.tail.next = e) : (this.head = e),
              (this.tail = e),
              ++this.length
          }),
          (t.prototype.unshift = function(t) {
            var e = { data: t, next: this.head }
            0 === this.length && (this.tail = e), (this.head = e), ++this.length
          }),
          (t.prototype.shift = function() {
            if (0 !== this.length) {
              var t = this.head.data
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                t
              )
            }
          }),
          (t.prototype.clear = function() {
            ;(this.head = this.tail = null), (this.length = 0)
          }),
          (t.prototype.join = function(t) {
            if (0 === this.length) return ''
            for (var e = this.head, r = '' + e.data; (e = e.next); )
              r += t + e.data
            return r
          }),
          (t.prototype.concat = function(t) {
            if (0 === this.length) return n.alloc(0)
            for (
              var e, r, i, o = n.allocUnsafe(t >>> 0), s = this.head, a = 0;
              s;

            )
              (e = s.data),
                (r = o),
                (i = a),
                e.copy(r, i),
                (a += s.data.length),
                (s = s.next)
            return o
          }),
          t
        )
      })()),
        i &&
          i.inspect &&
          i.inspect.custom &&
          (t.exports.prototype[i.inspect.custom] = function() {
            var t = i.inspect({ length: this.length })
            return this.constructor.name + ' ' + t
          })
    },
    76269: function(t, e, r) {
      'use strict'
      var n = r(66600)
      function i(t, e) {
        t.emit('error', e)
      }
      t.exports = {
        destroy: function(t, e) {
          var r = this,
            o = this._readableState && this._readableState.destroyed,
            s = this._writableState && this._writableState.destroyed
          return o || s
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(i, this, t))
                    : n.nextTick(i, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function(t) {
                !e && t
                  ? r._writableState
                    ? r._writableState.errorEmitted ||
                      ((r._writableState.errorEmitted = !0),
                      n.nextTick(i, r, t))
                    : n.nextTick(i, r, t)
                  : e && e(t)
              }),
              this)
        },
        undestroy: function() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1))
        }
      }
    },
    4526: function(t, e, r) {
      t.exports = r(27284).EventEmitter
    },
    39: function(t, e, r) {
      var n = r(26382),
        i = n.Buffer
      function o(t, e) {
        for (var r in t) e[r] = t[r]
      }
      function s(t, e, r) {
        return i(t, e, r)
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        o(i, s),
        (s.from = function(t, e, r) {
          if ('number' === typeof t)
            throw new TypeError('Argument must not be a number')
          return i(t, e, r)
        }),
        (s.alloc = function(t, e, r) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          var n = i(t)
          return (
            void 0 !== e
              ? 'string' === typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          )
        }),
        (s.allocUnsafe = function(t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          return i(t)
        }),
        (s.allocUnsafeSlow = function(t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          return n.SlowBuffer(t)
        })
    },
    13486: function(t, e, r) {
      ;((e = t.exports = r(61137)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(49873)),
        (e.Duplex = r(26211)),
        (e.Transform = r(10981)),
        (e.PassThrough = r(9135))
    },
    92942: function(t, e, r) {
      'use strict'
      var n = r(62888).Buffer,
        i =
          n.isEncoding ||
          function(t) {
            switch ((t = '' + t) && t.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0
              default:
                return !1
            }
          }
      function o(t) {
        var e
        switch (
          ((this.encoding = (function(t) {
            var e = (function(t) {
              if (!t) return 'utf8'
              for (var e; ; )
                switch (t) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return t
                  default:
                    if (e) return
                    ;(t = ('' + t).toLowerCase()), (e = !0)
                }
            })(t)
            if ('string' !== typeof e && (n.isEncoding === i || !i(t)))
              throw new Error('Unknown encoding: ' + t)
            return e || t
          })(t)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = u), (this.end = h), (e = 4)
            break
          case 'utf8':
            ;(this.fillLast = a), (e = 4)
            break
          case 'base64':
            ;(this.text = f), (this.end = c), (e = 3)
            break
          default:
            return (this.write = l), void (this.end = p)
        }
        ;(this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(e))
      }
      function s(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2
      }
      function a(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function(t, e, r) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), '\ufffd'
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), '\ufffd'
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), '\ufffd'
            }
          })(this, t)
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length))
      }
      function u(t, e) {
        if ((t.length - e) % 2 === 0) {
          var r = t.toString('utf16le', e)
          if (r) {
            var n = r.charCodeAt(r.length - 1)
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              )
          }
          return r
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString('utf16le', e, t.length - 1)
        )
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : ''
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed
          return e + this.lastChar.toString('utf16le', 0, r)
        }
        return e
      }
      function f(t, e) {
        var r = (t.length - e) % 3
        return 0 === r
          ? t.toString('base64', e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString('base64', e, t.length - r))
      }
      function c(t) {
        var e = t && t.length ? this.write(t) : ''
        return this.lastNeed
          ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : e
      }
      function l(t) {
        return t.toString(this.encoding)
      }
      function p(t) {
        return t && t.length ? this.write(t) : ''
      }
      ;(e.I = o),
        (o.prototype.write = function(t) {
          if (0 === t.length) return ''
          var e, r
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return ''
            ;(r = this.lastNeed), (this.lastNeed = 0)
          } else r = 0
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || ''
        }),
        (o.prototype.end = function(t) {
          var e = t && t.length ? this.write(t) : ''
          return this.lastNeed ? e + '\ufffd' : e
        }),
        (o.prototype.text = function(t, e) {
          var r = (function(t, e, r) {
            var n = e.length - 1
            if (n < r) return 0
            var i = s(e[n])
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i
            if (--n < r || -2 === i) return 0
            if (((i = s(e[n])), i >= 0)) return i > 0 && (t.lastNeed = i - 2), i
            if (--n < r || -2 === i) return 0
            if (((i = s(e[n])), i >= 0))
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i
            return 0
          })(this, t, e)
          if (!this.lastNeed) return t.toString('utf8', e)
          this.lastTotal = r
          var n = t.length - (r - this.lastNeed)
          return t.copy(this.lastChar, 0, n), t.toString('utf8', e, n)
        }),
        (o.prototype.fillLast = function(t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length)
        })
    },
    62888: function(t, e, r) {
      var n = r(26382),
        i = n.Buffer
      function o(t, e) {
        for (var r in t) e[r] = t[r]
      }
      function s(t, e, r) {
        return i(t, e, r)
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        o(i, s),
        (s.from = function(t, e, r) {
          if ('number' === typeof t)
            throw new TypeError('Argument must not be a number')
          return i(t, e, r)
        }),
        (s.alloc = function(t, e, r) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          var n = i(t)
          return (
            void 0 !== e
              ? 'string' === typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          )
        }),
        (s.allocUnsafe = function(t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          return i(t)
        }),
        (s.allocUnsafeSlow = function(t) {
          if ('number' !== typeof t)
            throw new TypeError('Argument must be a number')
          return n.SlowBuffer(t)
        })
    },
    58586: function(t, e, r) {
      var n = r(26382).Buffer
      t.exports = function(t, e) {
        for (
          var r = Math.min(t.length, e.length), i = new n(r), o = 0;
          o < r;
          ++o
        )
          i[o] = t[o] ^ e[o]
        return i
      }
    },
    44615: function(t, e, r) {
      'use strict'
      var n = r(34445),
        i = r(6900),
        o =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = u),
        (e.SlowBuffer = function(t) {
          ;+t != t && (t = 0)
          return u.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var s = 2147483647
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, u.prototype), e
      }
      function u(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return c(t)
        }
        return h(t, e, r)
      }
      function h(t, e, r) {
        if ('string' === typeof t)
          return (function(t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!u.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | g(t, e),
              n = a(r),
              i = n.write(t, e)
            i !== r && (n = n.slice(0, i))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function(t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return p(e.buffer, e.byteOffset, e.byteLength)
            }
            return l(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
          return p(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return u.from(n, e, r)
        var i = (function(t) {
          if (u.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = a(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length)
            return 'number' !== typeof t.length || V(t.length) ? a(0) : l(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return l(t.data)
        })(t)
        if (i) return i
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function f(t) {
        if ('number' !== typeof t)
          throw new TypeError('"size" argument must be of type number')
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
      }
      function c(t) {
        return f(t), a(t < 0 ? 0 : 0 | d(t))
      }
      function l(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n]
        return r
      }
      function p(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        )
      }
      function d(t) {
        if (t >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes'
          )
        return 0 | t
      }
      function g(t, e) {
        if (u.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return O(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return j(t).length
            default:
              if (i) return n ? -1 : O(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function y(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return T(this, e, r)
            case 'utf8':
            case 'utf-8':
              return A(this, e, r)
            case 'ascii':
              return I(this, e, r)
            case 'latin1':
            case 'binary':
              return C(this, e, r)
            case 'base64':
              return M(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return L(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function v(t, e, r, n, i) {
        var o,
          s = 1,
          a = t.length,
          u = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
        }
        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var f = -1
          for (o = r; o < a; o++)
            if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * s
            } else -1 !== f && (o -= o - f), (f = -1)
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            for (var c = !0, l = 0; l < u; l++)
              if (h(t, o + l) !== h(e, l)) {
                c = !1
                break
              }
            if (c) return o
          }
        return -1
      }
      function w(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = e.length
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16)
          if (V(a)) return s
          t[r + s] = a
        }
        return s
      }
      function k(t, e, r, n) {
        return K(O(e, t.length - r), t, r, n)
      }
      function _(t, e, r, n) {
        return K(
          (function(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function S(t, e, r, n) {
        return K(j(e), t, r, n)
      }
      function E(t, e, r, n) {
        return K(
          (function(t, e) {
            for (
              var r, n, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (n = (r = t.charCodeAt(s)) >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function M(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r))
      }
      function A(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var o,
            s,
            a,
            u,
            h = t[i],
            f = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1
          if (i + c <= r)
            switch (c) {
              case 1:
                h < 128 && (f = h)
                break
              case 2:
                128 === (192 & (o = t[i + 1])) &&
                  (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                  (f = u)
                break
              case 3:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    (u = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u)
                break
              case 4:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u =
                      ((15 & h) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (f = u)
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (i += c)
        }
        return (function(t) {
          var e = t.length
          if (e <= B) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += B)))
          return r
        })(n)
      }
      ;(e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function() {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function() {
                  return 42
                }
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(u.prototype, 'parent', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.buffer
          }
        }),
        Object.defineProperty(u.prototype, 'offset', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.byteOffset
          }
        }),
        (u.poolSize = 8192),
        (u.from = function(t, e, r) {
          return h(t, e, r)
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function(t, e, r) {
          return (function(t, e, r) {
            return (
              f(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            )
          })(t, e, r)
        }),
        (u.allocUnsafe = function(t) {
          return c(t)
        }),
        (u.allocUnsafeSlow = function(t) {
          return c(t)
        }),
        (u.isBuffer = function(t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype
        }),
        (u.compare = function(t, e) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (u.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function(t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return u.alloc(0)
          var r
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = u.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var o = t[r]
            if (F(o, Uint8Array))
              i + o.length > n.length
                ? u.from(o).copy(n, i)
                : Uint8Array.prototype.set.call(n, o, i)
            else {
              if (!u.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              o.copy(n, i)
            }
            i += o.length
          }
          return n
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function() {
          var t = this.length
          if (t % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (u.prototype.swap32 = function() {
          var t = this.length
          if (t % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (u.prototype.swap64 = function() {
          var t = this.length
          if (t % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4)
          return this
        }),
        (u.prototype.toString = function() {
          var t = this.length
          return 0 === t
            ? ''
            : 0 === arguments.length
            ? A(this, 0, t)
            : y.apply(this, arguments)
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function(t) {
          if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === u.compare(this, t)
        }),
        (u.prototype.inspect = function() {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function(t, e, r, n, i) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0),
              a = Math.min(o, s),
              h = this.slice(n, i),
              f = t.slice(e, r),
              c = 0;
            c < a;
            ++c
          )
            if (h[c] !== f[c]) {
              ;(o = h[c]), (s = f[c])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function(t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (u.prototype.indexOf = function(t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (u.prototype.lastIndexOf = function(t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (u.prototype.write = function(t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e)
            (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return w(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return k(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return _(this, t, e, r)
              case 'base64':
                return S(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return E(this, t, e, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        })
      var B = 4096
      function I(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function C(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function T(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = e; o < r; ++o) i += q[t[o]]
        return i
      }
      function L(t, e, r) {
        for (var n = t.slice(e, r), i = '', o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function U(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function x(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function R(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        )
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        )
      }
      ;(u.prototype.slice = function(t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, u.prototype), n
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n
        }),
        (u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i
          return n
        }),
        (u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
          return (t >>>= 0), e || U(t, 1, this.length), this[t]
        }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8)
          )
        }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1]
          )
        }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          )
        }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (u.prototype.readIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (u.prototype.readIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }),
        (u.prototype.readInt8 = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (u.prototype.readInt16LE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt16BE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          )
        }),
        (u.prototype.readFloatLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4)
          )
        }),
        (u.prototype.readFloatBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4)
          )
        }),
        (u.prototype.readDoubleLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8)
          )
        }),
        (u.prototype.readDoubleBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8)
          )
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255
          return e + r
        }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255
          return e + r
        }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 255, 0),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeIntLE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[e] = 255 & t; ++o < r && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeIntBE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeInt16LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeInt16BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeInt32LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (u.prototype.writeInt32BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeFloatLE = function(t, e, r) {
          return N(this, t, e, !0, r)
        }),
        (u.prototype.writeFloatBE = function(t, e, r) {
          return N(this, t, e, !1, r)
        }),
        (u.prototype.writeDoubleLE = function(t, e, r) {
          return D(this, t, e, !0, r)
        }),
        (u.prototype.writeDoubleBE = function(t, e, r) {
          return D(this, t, e, !1, r)
        }),
        (u.prototype.copy = function(t, e, r, n) {
          if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (u.prototype.fill = function(t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !u.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i = t.charCodeAt(0)
              ;(('utf8' === n && i < 128) || 'latin1' === n) && (t = i)
            }
          } else
            'number' === typeof t
              ? (t &= 255)
              : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var o
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t
          else {
            var s = u.isBuffer(t) ? t : u.from(t, n),
              a = s.length
            if (0 === a)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              )
            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
          }
          return this
        })
      var P = /[^+/0-9A-Za-z-_]/g
      function O(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            )
          }
        }
        return o
      }
      function j(t) {
        return n.toByteArray(
          (function(t) {
            if ((t = (t = t.split('=')[0]).trim().replace(P, '')).length < 2)
              return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function K(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i]
        return i
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var q = (function() {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    51017: function(t, e, r) {
      'use strict'
      var n = r(63180),
        i = r(44615).Buffer,
        o = {
          checkCIDComponents: function(t) {
            if (null == t) return 'null values are not valid CIDs'
            if (0 !== t.version && 1 !== t.version)
              return 'Invalid version, must be a number equal to 1 or 0'
            if ('string' !== typeof t.codec) return 'codec must be string'
            if (0 === t.version) {
              if ('dag-pb' !== t.codec)
                return "codec must be 'dag-pb' for CIDv0"
              if ('base58btc' !== t.multibaseName)
                return "multibaseName must be 'base58btc' for CIDv0"
            }
            if (!i.isBuffer(t.multihash)) return 'multihash must be a Buffer'
            try {
              n.validate(t.multihash)
            } catch (r) {
              var e = r.message
              return e || (e = 'Multihash validation failed'), e
            }
          }
        }
      t.exports = o
    },
    33348: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = r(44615).Buffer,
        s = r(63180),
        a = r(37841),
        u = r(91468),
        h = r(63543),
        f = r(51017),
        c = r(6551),
        l = (function() {
          return i(
            function t(e, r, i, h) {
              if ((n(this, t), p.isCID(e))) {
                var f = e
                return (
                  (this.version = f.version),
                  (this.codec = f.codec),
                  (this.multihash = o.from(f.multihash)),
                  void (this.multibaseName =
                    f.multibaseName ||
                    (0 === f.version ? 'base58btc' : 'base32'))
                )
              }
              if ('string' === typeof e) {
                var c = a.isEncoded(e)
                if (c) {
                  var l = a.decode(e)
                  ;(this.version = parseInt(l.slice(0, 1).toString('hex'), 16)),
                    (this.codec = u.getCodec(l.slice(1))),
                    (this.multihash = u.rmPrefix(l.slice(1))),
                    (this.multibaseName = c)
                } else
                  (this.version = 0),
                    (this.codec = 'dag-pb'),
                    (this.multihash = s.fromB58String(e)),
                    (this.multibaseName = 'base58btc')
                return (
                  t.validateCID(this),
                  void Object.defineProperty(this, 'string', { value: e })
                )
              }
              if (o.isBuffer(e)) {
                var d = e.slice(0, 1),
                  g = parseInt(d.toString('hex'), 16)
                if (1 === g) {
                  var y = e
                  ;(this.version = g),
                    (this.codec = u.getCodec(y.slice(1))),
                    (this.multihash = u.rmPrefix(y.slice(1))),
                    (this.multibaseName = 'base32')
                } else
                  (this.version = 0),
                    (this.codec = 'dag-pb'),
                    (this.multihash = e),
                    (this.multibaseName = 'base58btc')
                t.validateCID(this)
              } else
                (this.version = e),
                  (this.codec = r),
                  (this.multihash = i),
                  (this.multibaseName =
                    h || (0 === e ? 'base58btc' : 'base32')),
                  t.validateCID(this)
            },
            [
              {
                key: 'buffer',
                get: function() {
                  var t = this._buffer
                  if (!t) {
                    if (0 === this.version) t = this.multihash
                    else {
                      if (1 !== this.version)
                        throw new Error('unsupported version')
                      t = o.concat([
                        o.from('01', 'hex'),
                        u.getCodeVarint(this.codec),
                        this.multihash
                      ])
                    }
                    Object.defineProperty(this, '_buffer', { value: t })
                  }
                  return t
                }
              },
              {
                key: 'prefix',
                get: function() {
                  return o.concat([
                    o.from('0'.concat(this.version), 'hex'),
                    u.getCodeVarint(this.codec),
                    s.prefix(this.multihash)
                  ])
                }
              },
              {
                key: 'toV0',
                value: function() {
                  if ('dag-pb' !== this.codec)
                    throw new Error('Cannot convert a non dag-pb CID to CIDv0')
                  var t = s.decode(this.multihash),
                    e = t.name,
                    r = t.length
                  if ('sha2-256' !== e)
                    throw new Error(
                      'Cannot convert non sha2-256 multihash CID to CIDv0'
                    )
                  if (32 !== r)
                    throw new Error(
                      'Cannot convert non 32 byte multihash CID to CIDv0'
                    )
                  return new p(0, this.codec, this.multihash)
                }
              },
              {
                key: 'toV1',
                value: function() {
                  return new p(1, this.codec, this.multihash)
                }
              },
              {
                key: 'toBaseEncodedString',
                value: function() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.multibaseName
                  if (this.string && t === this.multibaseName)
                    return this.string
                  var e = null
                  if (0 === this.version) {
                    if ('base58btc' !== t)
                      throw new Error(
                        'not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()'
                      )
                    e = s.toB58String(this.multihash)
                  } else {
                    if (1 !== this.version)
                      throw new Error('unsupported version')
                    e = a.encode(t, this.buffer).toString()
                  }
                  return (
                    t === this.multibaseName &&
                      Object.defineProperty(this, 'string', { value: e }),
                    e
                  )
                }
              },
              {
                key: Symbol.for('nodejs.util.inspect.custom'),
                value: function() {
                  return 'CID(' + this.toString() + ')'
                }
              },
              {
                key: 'toString',
                value: function(t) {
                  return this.toBaseEncodedString(t)
                }
              },
              {
                key: 'toJSON',
                value: function() {
                  return {
                    codec: this.codec,
                    version: this.version,
                    hash: this.multihash
                  }
                }
              },
              {
                key: 'equals',
                value: function(t) {
                  return (
                    this.codec === t.codec &&
                    this.version === t.version &&
                    this.multihash.equals(t.multihash)
                  )
                }
              }
            ],
            [
              {
                key: 'validateCID',
                value: function(t) {
                  var e = f.checkCIDComponents(t)
                  if (e) throw new Error(e)
                }
              }
            ]
          )
        })(),
        p = c(l, { className: 'CID', symbolName: '@ipld/js-cid/CID' })
      ;(p.codecs = h), (t.exports = p)
    },
    6551: function(t, e, r) {
      'use strict'
      var n = r(59646).default,
        i = r(43693).default,
        o = r(17383).default,
        s = r(34579).default,
        a = r(18336).default,
        u = r(29511).default
      ;(t.exports = function(t, e) {
        var r = e.className,
          n = e.symbolName,
          h = Symbol.for(n),
          f = i(
            {},
            r,
            (function(t) {
              function e() {
                var t
                o(this, e)
                for (
                  var r = arguments.length, n = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  n[i] = arguments[i]
                return (
                  (t = a(this, e, [].concat(n))),
                  Object.defineProperty(t, h, { value: !0 }),
                  t
                )
              }
              return (
                u(e, t),
                s(e, [
                  {
                    key: Symbol.toStringTag,
                    get: function() {
                      return r
                    }
                  }
                ])
              )
            })(t)
          )[r]
        return (
          (f['is'.concat(r)] = function(t) {
            return !(!t || !t[h])
          }),
          f
        )
      }),
        (t.exports.proto = function(t, e) {
          var r = e.className,
            o = e.symbolName,
            s = e.withoutNew,
            a = Symbol.for(o),
            u = i({}, r, function() {
              for (
                var e = arguments.length, r = new Array(e), i = 0;
                i < e;
                i++
              )
                r[i] = arguments[i]
              if (s && !(this instanceof u)) return n(u, r)
              var o = t.call.apply(t, [this].concat(r)) || this
              return o && !o[a] && Object.defineProperty(o, a, { value: !0 }), o
            })[r]
          return (
            (u.prototype = Object.create(t.prototype)),
            (u.prototype.constructor = u),
            Object.defineProperty(u.prototype, Symbol.toStringTag, {
              get: function() {
                return r
              }
            }),
            (u['is'.concat(r)] = function(t) {
              return !(!t || !t[a])
            }),
            u
          )
        })
    },
    23525: function(t, e, r) {
      function n(t) {
        return Object.prototype.toString.call(t)
      }
      ;(e.isArray = function(t) {
        return Array.isArray ? Array.isArray(t) : '[object Array]' === n(t)
      }),
        (e.isBoolean = function(t) {
          return 'boolean' === typeof t
        }),
        (e.isNull = function(t) {
          return null === t
        }),
        (e.isNullOrUndefined = function(t) {
          return null == t
        }),
        (e.isNumber = function(t) {
          return 'number' === typeof t
        }),
        (e.isString = function(t) {
          return 'string' === typeof t
        }),
        (e.isSymbol = function(t) {
          return 'symbol' === typeof t
        }),
        (e.isUndefined = function(t) {
          return void 0 === t
        }),
        (e.isRegExp = function(t) {
          return '[object RegExp]' === n(t)
        }),
        (e.isObject = function(t) {
          return 'object' === typeof t && null !== t
        }),
        (e.isDate = function(t) {
          return '[object Date]' === n(t)
        }),
        (e.isError = function(t) {
          return '[object Error]' === n(t) || t instanceof Error
        }),
        (e.isFunction = function(t) {
          return 'function' === typeof t
        }),
        (e.isPrimitive = function(t) {
          return (
            null === t ||
            'boolean' === typeof t ||
            'number' === typeof t ||
            'string' === typeof t ||
            'symbol' === typeof t ||
            'undefined' === typeof t
          )
        }),
        (e.isBuffer = r(26382).Buffer.isBuffer)
    },
    18231: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(38086),
        o = r(6373)
      t.exports = function(t) {
        return new a(t)
      }
      var s = {
        secp256k1: { name: 'secp256k1', byteLength: 32 },
        secp224r1: { name: 'p224', byteLength: 28 },
        prime256v1: { name: 'p256', byteLength: 32 },
        prime192v1: { name: 'p192', byteLength: 24 },
        ed25519: { name: 'ed25519', byteLength: 32 },
        secp384r1: { name: 'p384', byteLength: 48 },
        secp521r1: { name: 'p521', byteLength: 66 }
      }
      function a(t) {
        ;(this.curveType = s[t]),
          this.curveType || (this.curveType = { name: t }),
          (this.curve = new i.ec(this.curveType.name)),
          (this.keys = void 0)
      }
      function u(t, e, r) {
        Array.isArray(t) || (t = t.toArray())
        var i = new n(t)
        if (r && i.length < r) {
          var o = new n(r - i.length)
          o.fill(0), (i = n.concat([o, i]))
        }
        return e ? i.toString(e) : i
      }
      ;(s.p224 = s.secp224r1),
        (s.p256 = s.secp256r1 = s.prime256v1),
        (s.p192 = s.secp192r1 = s.prime192v1),
        (s.p384 = s.secp384r1),
        (s.p521 = s.secp521r1),
        (a.prototype.generateKeys = function(t, e) {
          return (this.keys = this.curve.genKeyPair()), this.getPublicKey(t, e)
        }),
        (a.prototype.computeSecret = function(t, e, r) {
          return (
            (e = e || 'utf8'),
            n.isBuffer(t) || (t = new n(t, e)),
            u(
              this.curve
                .keyFromPublic(t)
                .getPublic()
                .mul(this.keys.getPrivate())
                .getX(),
              r,
              this.curveType.byteLength
            )
          )
        }),
        (a.prototype.getPublicKey = function(t, e) {
          var r = this.keys.getPublic('compressed' === e, !0)
          return (
            'hybrid' === e && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
            u(r, t)
          )
        }),
        (a.prototype.getPrivateKey = function(t) {
          return u(this.keys.getPrivate(), t)
        }),
        (a.prototype.setPublicKey = function(t, e) {
          return (
            (e = e || 'utf8'),
            n.isBuffer(t) || (t = new n(t, e)),
            this.keys._importPublic(t),
            this
          )
        }),
        (a.prototype.setPrivateKey = function(t, e) {
          ;(e = e || 'utf8'), n.isBuffer(t) || (t = new n(t, e))
          var r = new o(t)
          return (
            (r = r.toString(16)),
            (this.keys = this.curve.genKeyPair()),
            this.keys._importPrivate(r),
            this
          )
        })
    },
    3839: function(t, e, r) {
      var n = r(41237)
      t.exports = function(t) {
        return new n().update(t).digest()
      }
    },
    82080: function(t, e, r) {
      'use strict'
      var n = r(56329),
        i = r(29181),
        o = r(6239),
        s = r(59966).Buffer,
        a = r(3839),
        u = r(92108),
        h = r(20307),
        f = s.alloc(128)
      function c(t, e) {
        o.call(this, 'digest'), 'string' === typeof e && (e = s.from(e))
        var r = 'sha512' === t || 'sha384' === t ? 128 : 64
        ;((this._alg = t), (this._key = e), e.length > r)
          ? (e = ('rmd160' === t ? new u() : h(t)).update(e).digest())
          : e.length < r && (e = s.concat([e, f], r))
        for (
          var n = (this._ipad = s.allocUnsafe(r)),
            i = (this._opad = s.allocUnsafe(r)),
            a = 0;
          a < r;
          a++
        )
          (n[a] = 54 ^ e[a]), (i[a] = 92 ^ e[a])
        ;(this._hash = 'rmd160' === t ? new u() : h(t)), this._hash.update(n)
      }
      n(c, o),
        (c.prototype._update = function(t) {
          this._hash.update(t)
        }),
        (c.prototype._final = function() {
          var t = this._hash.digest()
          return ('rmd160' === this._alg ? new u() : h(this._alg))
            .update(this._opad)
            .update(t)
            .digest()
        }),
        (t.exports = function(t, e) {
          return 'rmd160' === (t = t.toLowerCase()) || 'ripemd160' === t
            ? new c('rmd160', e)
            : 'md5' === t
            ? new i(a, e)
            : new c(t, e)
        })
    },
    29181: function(t, e, r) {
      'use strict'
      var n = r(56329),
        i = r(59966).Buffer,
        o = r(6239),
        s = i.alloc(128),
        a = 64
      function u(t, e) {
        o.call(this, 'digest'),
          'string' === typeof e && (e = i.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > a ? (e = t(e)) : e.length < a && (e = i.concat([e, s], a))
        for (
          var r = (this._ipad = i.allocUnsafe(a)),
            n = (this._opad = i.allocUnsafe(a)),
            u = 0;
          u < a;
          u++
        )
          (r[u] = 54 ^ e[u]), (n[u] = 92 ^ e[u])
        this._hash = [r]
      }
      n(u, o),
        (u.prototype._update = function(t) {
          this._hash.push(t)
        }),
        (u.prototype._final = function() {
          var t = this._alg(i.concat(this._hash))
          return this._alg(i.concat([this._opad, t]))
        }),
        (t.exports = u)
    },
    67985: function(t, e, r) {
      'use strict'
      ;(e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r(15838)),
        (e.createHash = e.Hash = r(36059)),
        (e.createHmac = e.Hmac = r(82080))
      var n = r(99096),
        i = Object.keys(n),
        o = [
          'sha1',
          'sha224',
          'sha256',
          'sha384',
          'sha512',
          'md5',
          'rmd160'
        ].concat(i)
      e.getHashes = function() {
        return o
      }
      var s = r(11973)
      ;(e.pbkdf2 = s.pbkdf2), (e.pbkdf2Sync = s.pbkdf2Sync)
      var a = r(4014)
      ;(e.Cipher = a.Cipher),
        (e.createCipher = a.createCipher),
        (e.Cipheriv = a.Cipheriv),
        (e.createCipheriv = a.createCipheriv),
        (e.Decipher = a.Decipher),
        (e.createDecipher = a.createDecipher),
        (e.Decipheriv = a.Decipheriv),
        (e.createDecipheriv = a.createDecipheriv),
        (e.getCiphers = a.getCiphers),
        (e.listCiphers = a.listCiphers)
      var u = r(74729)
      ;(e.DiffieHellmanGroup = u.DiffieHellmanGroup),
        (e.createDiffieHellmanGroup = u.createDiffieHellmanGroup),
        (e.getDiffieHellman = u.getDiffieHellman),
        (e.createDiffieHellman = u.createDiffieHellman),
        (e.DiffieHellman = u.DiffieHellman)
      var h = r(17207)
      ;(e.createSign = h.createSign),
        (e.Sign = h.Sign),
        (e.createVerify = h.createVerify),
        (e.Verify = h.Verify),
        (e.createECDH = r(18231))
      var f = r(91477)
      ;(e.publicEncrypt = f.publicEncrypt),
        (e.privateEncrypt = f.privateEncrypt),
        (e.publicDecrypt = f.publicDecrypt),
        (e.privateDecrypt = f.privateDecrypt)
      var c = r(72450)
      ;(e.randomFill = c.randomFill),
        (e.randomFillSync = c.randomFillSync),
        (e.createCredentials = function() {
          throw new Error(
            [
              'sorry, createCredentials is not implemented yet',
              'we accept pull requests',
              'https://github.com/crypto-browserify/crypto-browserify'
            ].join('\n')
          )
        }),
        (e.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6
        })
    },
    33415: function(t) {
      var e = 1e3,
        r = 60 * e,
        n = 60 * r,
        i = 24 * n,
        o = 7 * i,
        s = 365.25 * i
      function a(t, e, r, n) {
        var i = e >= 1.5 * r
        return Math.round(t / r) + ' ' + n + (i ? 's' : '')
      }
      t.exports = function(t, u) {
        u = u || {}
        var h = typeof t
        if ('string' === h && t.length > 0)
          return (function(t) {
            if ((t = String(t)).length > 100) return
            var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              t
            )
            if (!a) return
            var u = parseFloat(a[1])
            switch ((a[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return u * s
              case 'weeks':
              case 'week':
              case 'w':
                return u * o
              case 'days':
              case 'day':
              case 'd':
                return u * i
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return u * n
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return u * r
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return u * e
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return u
              default:
                return
            }
          })(t)
        if ('number' === h && isFinite(t))
          return u.long
            ? (function(t) {
                var o = Math.abs(t)
                if (o >= i) return a(t, o, i, 'day')
                if (o >= n) return a(t, o, n, 'hour')
                if (o >= r) return a(t, o, r, 'minute')
                if (o >= e) return a(t, o, e, 'second')
                return t + ' ms'
              })(t)
            : (function(t) {
                var o = Math.abs(t)
                if (o >= i) return Math.round(t / i) + 'd'
                if (o >= n) return Math.round(t / n) + 'h'
                if (o >= r) return Math.round(t / r) + 'm'
                if (o >= e) return Math.round(t / e) + 's'
                return t + 'ms'
              })(t)
        throw new Error(
          'val is not a non-empty string or a valid number. val=' +
            JSON.stringify(t)
        )
      }
    },
    76522: function(t, e, r) {
      var n = r(62285)
      ;(e.formatArgs = function(e) {
        if (
          ((e[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            e[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            t.exports.humanize(this.diff)),
          !this.useColors)
        )
          return
        var r = 'color: ' + this.color
        e.splice(1, 0, r, 'color: inherit')
        var n = 0,
          i = 0
        e[0].replace(/%[a-zA-Z%]/g, function(t) {
          '%%' !== t && (n++, '%c' === t && (i = n))
        }),
          e.splice(i, 0, r)
      }),
        (e.save = function(t) {
          try {
            t ? e.storage.setItem('debug', t) : e.storage.removeItem('debug')
          } catch (r) {}
        }),
        (e.load = function() {
          var t
          try {
            t = e.storage.getItem('debug')
          } catch (r) {}
          !t &&
            'undefined' !== typeof n &&
            'env' in n &&
            (t = {
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
            }.DEBUG)
          return t
        }),
        (e.useColors = function() {
          if (
            'undefined' !== typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0
          if (
            'undefined' !== typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1
          return (
            ('undefined' !== typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' !== typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          )
        }),
        (e.storage = (function() {
          try {
            return localStorage
          } catch (t) {}
        })()),
        (e.destroy = (function() {
          var t = !1
          return function() {
            t ||
              ((t = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
              ))
          }
        })()),
        (e.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33'
        ]),
        (e.log = console.debug || console.log || function() {}),
        (t.exports = r(35237)(e)),
        (t.exports.formatters.j = function(t) {
          try {
            return JSON.stringify(t)
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message
          }
        })
    },
    35237: function(t, e, r) {
      var n = r(41132).default
      t.exports = function(t) {
        function e(t) {
          var r,
            n,
            o,
            s = null
          function a() {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
              n[i] = arguments[i]
            if (a.enabled) {
              var o = a,
                s = Number(new Date()),
                u = s - (r || s)
              ;(o.diff = u),
                (o.prev = r),
                (o.curr = s),
                (r = s),
                (n[0] = e.coerce(n[0])),
                'string' !== typeof n[0] && n.unshift('%O')
              var h = 0
              ;(n[0] = n[0].replace(/%([a-zA-Z%])/g, function(t, r) {
                if ('%%' === t) return '%'
                h++
                var i = e.formatters[r]
                if ('function' === typeof i) {
                  var s = n[h]
                  ;(t = i.call(o, s)), n.splice(h, 1), h--
                }
                return t
              })),
                e.formatArgs.call(o, n),
                (o.log || e.log).apply(o, n)
            }
          }
          return (
            (a.namespace = t),
            (a.useColors = e.useColors()),
            (a.color = e.selectColor(t)),
            (a.extend = i),
            (a.destroy = e.destroy),
            Object.defineProperty(a, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: function() {
                return null !== s
                  ? s
                  : (n !== e.namespaces &&
                      ((n = e.namespaces), (o = e.enabled(t))),
                    o)
              },
              set: function(t) {
                s = t
              }
            }),
            'function' === typeof e.init && e.init(a),
            a
          )
        }
        function i(t, r) {
          var n = e(this.namespace + ('undefined' === typeof r ? ':' : r) + t)
          return (n.log = this.log), n
        }
        function o(t) {
          return t
            .toString()
            .substring(2, t.toString().length - 2)
            .replace(/\.\*\?$/, '*')
        }
        return (
          (e.debug = e),
          (e.default = e),
          (e.coerce = function(t) {
            if (t instanceof Error) return t.stack || t.message
            return t
          }),
          (e.disable = function() {
            var t = []
              .concat(
                n(e.names.map(o)),
                n(
                  e.skips.map(o).map(function(t) {
                    return '-' + t
                  })
                )
              )
              .join(',')
            return e.enable(''), t
          }),
          (e.enable = function(t) {
            var r
            e.save(t), (e.namespaces = t), (e.names = []), (e.skips = [])
            var n = ('string' === typeof t ? t : '').split(/[\s,]+/),
              i = n.length
            for (r = 0; r < i; r++)
              n[r] &&
                ('-' === (t = n[r].replace(/\*/g, '.*?'))[0]
                  ? e.skips.push(new RegExp('^' + t.slice(1) + '$'))
                  : e.names.push(new RegExp('^' + t + '$')))
          }),
          (e.enabled = function(t) {
            if ('*' === t[t.length - 1]) return !0
            var r, n
            for (r = 0, n = e.skips.length; r < n; r++)
              if (e.skips[r].test(t)) return !1
            for (r = 0, n = e.names.length; r < n; r++)
              if (e.names[r].test(t)) return !0
            return !1
          }),
          (e.humanize = r(33415)),
          (e.destroy = function() {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
            )
          }),
          Object.keys(t).forEach(function(r) {
            e[r] = t[r]
          }),
          (e.names = []),
          (e.skips = []),
          (e.formatters = {}),
          (e.selectColor = function(t) {
            for (var r = 0, n = 0; n < t.length; n++)
              (r = (r << 5) - r + t.charCodeAt(n)), (r |= 0)
            return e.colors[Math.abs(r) % e.colors.length]
          }),
          e.enable(e.load()),
          e
        )
      }
    },
    13325: function(t, e, r) {
      'use strict'
      ;(e.utils = r(28119)),
        (e.Cipher = r(71611)),
        (e.DES = r(1142)),
        (e.CBC = r(74256)),
        (e.EDE = r(87418))
    },
    74256: function(t, e, r) {
      'use strict'
      var n = r(75482),
        i = r(56329),
        o = {}
      function s(t) {
        n.equal(t.length, 8, 'Invalid IV length'), (this.iv = new Array(8))
        for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e]
      }
      ;(e.instantiate = function(t) {
        function e(e) {
          t.call(this, e), this._cbcInit()
        }
        i(e, t)
        for (var r = Object.keys(o), n = 0; n < r.length; n++) {
          var s = r[n]
          e.prototype[s] = o[s]
        }
        return (
          (e.create = function(t) {
            return new e(t)
          }),
          e
        )
      }),
        (o._cbcInit = function() {
          var t = new s(this.options.iv)
          this._cbcState = t
        }),
        (o._update = function(t, e, r, n) {
          var i = this._cbcState,
            o = this.constructor.super_.prototype,
            s = i.iv
          if ('encrypt' === this.type) {
            for (var a = 0; a < this.blockSize; a++) s[a] ^= t[e + a]
            o._update.call(this, s, 0, r, n)
            for (a = 0; a < this.blockSize; a++) s[a] = r[n + a]
          } else {
            o._update.call(this, t, e, r, n)
            for (a = 0; a < this.blockSize; a++) r[n + a] ^= s[a]
            for (a = 0; a < this.blockSize; a++) s[a] = t[e + a]
          }
        })
    },
    71611: function(t, e, r) {
      'use strict'
      var n = r(75482)
      function i(t) {
        ;(this.options = t),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0),
          (this.padding = !1 !== t.padding)
      }
      ;(t.exports = i),
        (i.prototype._init = function() {}),
        (i.prototype.update = function(t) {
          return 0 === t.length
            ? []
            : 'decrypt' === this.type
            ? this._updateDecrypt(t)
            : this._updateEncrypt(t)
        }),
        (i.prototype._buffer = function(t, e) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, t.length - e),
              n = 0;
            n < r;
            n++
          )
            this.buffer[this.bufferOff + n] = t[e + n]
          return (this.bufferOff += r), r
        }),
        (i.prototype._flushBuffer = function(t, e) {
          return (
            this._update(this.buffer, 0, t, e),
            (this.bufferOff = 0),
            this.blockSize
          )
        }),
        (i.prototype._updateEncrypt = function(t) {
          var e = 0,
            r = 0,
            n = ((this.bufferOff + t.length) / this.blockSize) | 0,
            i = new Array(n * this.blockSize)
          0 !== this.bufferOff &&
            ((e += this._buffer(t, e)),
            this.bufferOff === this.buffer.length &&
              (r += this._flushBuffer(i, r)))
          for (
            var o = t.length - ((t.length - e) % this.blockSize);
            e < o;
            e += this.blockSize
          )
            this._update(t, e, i, r), (r += this.blockSize)
          for (; e < t.length; e++, this.bufferOff++)
            this.buffer[this.bufferOff] = t[e]
          return i
        }),
        (i.prototype._updateDecrypt = function(t) {
          for (
            var e = 0,
              r = 0,
              n = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1,
              i = new Array(n * this.blockSize);
            n > 0;
            n--
          )
            (e += this._buffer(t, e)), (r += this._flushBuffer(i, r))
          return (e += this._buffer(t, e)), i
        }),
        (i.prototype.final = function(t) {
          var e, r
          return (
            t && (e = this.update(t)),
            (r =
              'encrypt' === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            e ? e.concat(r) : r
          )
        }),
        (i.prototype._pad = function(t, e) {
          if (0 === e) return !1
          for (; e < t.length; ) t[e++] = 0
          return !0
        }),
        (i.prototype._finalEncrypt = function() {
          if (!this._pad(this.buffer, this.bufferOff)) return []
          var t = new Array(this.blockSize)
          return this._update(this.buffer, 0, t, 0), t
        }),
        (i.prototype._unpad = function(t) {
          return t
        }),
        (i.prototype._finalDecrypt = function() {
          n.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt')
          var t = new Array(this.blockSize)
          return this._flushBuffer(t, 0), this._unpad(t)
        })
    },
    1142: function(t, e, r) {
      'use strict'
      var n = r(75482),
        i = r(56329),
        o = r(28119),
        s = r(71611)
      function a() {
        ;(this.tmp = new Array(2)), (this.keys = null)
      }
      function u(t) {
        s.call(this, t)
        var e = new a()
        ;(this._desState = e), this.deriveKeys(e, t.key)
      }
      i(u, s),
        (t.exports = u),
        (u.create = function(t) {
          return new u(t)
        })
      var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]
      ;(u.prototype.deriveKeys = function(t, e) {
        ;(t.keys = new Array(32)),
          n.equal(e.length, this.blockSize, 'Invalid key length')
        var r = o.readUInt32BE(e, 0),
          i = o.readUInt32BE(e, 4)
        o.pc1(r, i, t.tmp, 0), (r = t.tmp[0]), (i = t.tmp[1])
        for (var s = 0; s < t.keys.length; s += 2) {
          var a = h[s >>> 1]
          ;(r = o.r28shl(r, a)), (i = o.r28shl(i, a)), o.pc2(r, i, t.keys, s)
        }
      }),
        (u.prototype._update = function(t, e, r, n) {
          var i = this._desState,
            s = o.readUInt32BE(t, e),
            a = o.readUInt32BE(t, e + 4)
          o.ip(s, a, i.tmp, 0),
            (s = i.tmp[0]),
            (a = i.tmp[1]),
            'encrypt' === this.type
              ? this._encrypt(i, s, a, i.tmp, 0)
              : this._decrypt(i, s, a, i.tmp, 0),
            (s = i.tmp[0]),
            (a = i.tmp[1]),
            o.writeUInt32BE(r, s, n),
            o.writeUInt32BE(r, a, n + 4)
        }),
        (u.prototype._pad = function(t, e) {
          if (!1 === this.padding) return !1
          for (var r = t.length - e, n = e; n < t.length; n++) t[n] = r
          return !0
        }),
        (u.prototype._unpad = function(t) {
          if (!1 === this.padding) return t
          for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++)
            n.equal(t[r], e)
          return t.slice(0, t.length - e)
        }),
        (u.prototype._encrypt = function(t, e, r, n, i) {
          for (var s = e, a = r, u = 0; u < t.keys.length; u += 2) {
            var h = t.keys[u],
              f = t.keys[u + 1]
            o.expand(a, t.tmp, 0), (h ^= t.tmp[0]), (f ^= t.tmp[1])
            var c = o.substitute(h, f),
              l = a
            ;(a = (s ^ o.permute(c)) >>> 0), (s = l)
          }
          o.rip(a, s, n, i)
        }),
        (u.prototype._decrypt = function(t, e, r, n, i) {
          for (var s = r, a = e, u = t.keys.length - 2; u >= 0; u -= 2) {
            var h = t.keys[u],
              f = t.keys[u + 1]
            o.expand(s, t.tmp, 0), (h ^= t.tmp[0]), (f ^= t.tmp[1])
            var c = o.substitute(h, f),
              l = s
            ;(s = (a ^ o.permute(c)) >>> 0), (a = l)
          }
          o.rip(s, a, n, i)
        })
    },
    87418: function(t, e, r) {
      'use strict'
      var n = r(75482),
        i = r(56329),
        o = r(71611),
        s = r(1142)
      function a(t, e) {
        n.equal(e.length, 24, 'Invalid key length')
        var r = e.slice(0, 8),
          i = e.slice(8, 16),
          o = e.slice(16, 24)
        this.ciphers =
          'encrypt' === t
            ? [
                s.create({ type: 'encrypt', key: r }),
                s.create({ type: 'decrypt', key: i }),
                s.create({ type: 'encrypt', key: o })
              ]
            : [
                s.create({ type: 'decrypt', key: o }),
                s.create({ type: 'encrypt', key: i }),
                s.create({ type: 'decrypt', key: r })
              ]
      }
      function u(t) {
        o.call(this, t)
        var e = new a(this.type, this.options.key)
        this._edeState = e
      }
      i(u, o),
        (t.exports = u),
        (u.create = function(t) {
          return new u(t)
        }),
        (u.prototype._update = function(t, e, r, n) {
          var i = this._edeState
          i.ciphers[0]._update(t, e, r, n),
            i.ciphers[1]._update(r, n, r, n),
            i.ciphers[2]._update(r, n, r, n)
        }),
        (u.prototype._pad = s.prototype._pad),
        (u.prototype._unpad = s.prototype._unpad)
    },
    28119: function(t, e) {
      'use strict'
      ;(e.readUInt32BE = function(t, e) {
        return (
          ((t[0 + e] << 24) | (t[1 + e] << 16) | (t[2 + e] << 8) | t[3 + e]) >>>
          0
        )
      }),
        (e.writeUInt32BE = function(t, e, r) {
          ;(t[0 + r] = e >>> 24),
            (t[1 + r] = (e >>> 16) & 255),
            (t[2 + r] = (e >>> 8) & 255),
            (t[3 + r] = 255 & e)
        }),
        (e.ip = function(t, e, r, n) {
          for (var i = 0, o = 0, s = 6; s >= 0; s -= 2) {
            for (var a = 0; a <= 24; a += 8)
              (i <<= 1), (i |= (e >>> (a + s)) & 1)
            for (a = 0; a <= 24; a += 8) (i <<= 1), (i |= (t >>> (a + s)) & 1)
          }
          for (s = 6; s >= 0; s -= 2) {
            for (a = 1; a <= 25; a += 8) (o <<= 1), (o |= (e >>> (a + s)) & 1)
            for (a = 1; a <= 25; a += 8) (o <<= 1), (o |= (t >>> (a + s)) & 1)
          }
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.rip = function(t, e, r, n) {
          for (var i = 0, o = 0, s = 0; s < 4; s++)
            for (var a = 24; a >= 0; a -= 8)
              (i <<= 1),
                (i |= (e >>> (a + s)) & 1),
                (i <<= 1),
                (i |= (t >>> (a + s)) & 1)
          for (s = 4; s < 8; s++)
            for (a = 24; a >= 0; a -= 8)
              (o <<= 1),
                (o |= (e >>> (a + s)) & 1),
                (o <<= 1),
                (o |= (t >>> (a + s)) & 1)
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.pc1 = function(t, e, r, n) {
          for (var i = 0, o = 0, s = 7; s >= 5; s--) {
            for (var a = 0; a <= 24; a += 8)
              (i <<= 1), (i |= (e >> (a + s)) & 1)
            for (a = 0; a <= 24; a += 8) (i <<= 1), (i |= (t >> (a + s)) & 1)
          }
          for (a = 0; a <= 24; a += 8) (i <<= 1), (i |= (e >> (a + s)) & 1)
          for (s = 1; s <= 3; s++) {
            for (a = 0; a <= 24; a += 8) (o <<= 1), (o |= (e >> (a + s)) & 1)
            for (a = 0; a <= 24; a += 8) (o <<= 1), (o |= (t >> (a + s)) & 1)
          }
          for (a = 0; a <= 24; a += 8) (o <<= 1), (o |= (t >> (a + s)) & 1)
          ;(r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0)
        }),
        (e.r28shl = function(t, e) {
          return ((t << e) & 268435455) | (t >>> (28 - e))
        })
      var r = [
        14,
        11,
        17,
        4,
        27,
        23,
        25,
        0,
        13,
        22,
        7,
        18,
        5,
        9,
        16,
        24,
        2,
        20,
        12,
        21,
        1,
        8,
        15,
        26,
        15,
        4,
        25,
        19,
        9,
        1,
        26,
        16,
        5,
        11,
        23,
        8,
        12,
        7,
        17,
        0,
        22,
        3,
        10,
        14,
        6,
        20,
        27,
        24
      ]
      ;(e.pc2 = function(t, e, n, i) {
        for (var o = 0, s = 0, a = r.length >>> 1, u = 0; u < a; u++)
          (o <<= 1), (o |= (t >>> r[u]) & 1)
        for (u = a; u < r.length; u++) (s <<= 1), (s |= (e >>> r[u]) & 1)
        ;(n[i + 0] = o >>> 0), (n[i + 1] = s >>> 0)
      }),
        (e.expand = function(t, e, r) {
          var n = 0,
            i = 0
          n = ((1 & t) << 5) | (t >>> 27)
          for (var o = 23; o >= 15; o -= 4) (n <<= 6), (n |= (t >>> o) & 63)
          for (o = 11; o >= 3; o -= 4) (i |= (t >>> o) & 63), (i <<= 6)
          ;(i |= ((31 & t) << 1) | (t >>> 31)),
            (e[r + 0] = n >>> 0),
            (e[r + 1] = i >>> 0)
        })
      var n = [
        14,
        0,
        4,
        15,
        13,
        7,
        1,
        4,
        2,
        14,
        15,
        2,
        11,
        13,
        8,
        1,
        3,
        10,
        10,
        6,
        6,
        12,
        12,
        11,
        5,
        9,
        9,
        5,
        0,
        3,
        7,
        8,
        4,
        15,
        1,
        12,
        14,
        8,
        8,
        2,
        13,
        4,
        6,
        9,
        2,
        1,
        11,
        7,
        15,
        5,
        12,
        11,
        9,
        3,
        7,
        14,
        3,
        10,
        10,
        0,
        5,
        6,
        0,
        13,
        15,
        3,
        1,
        13,
        8,
        4,
        14,
        7,
        6,
        15,
        11,
        2,
        3,
        8,
        4,
        14,
        9,
        12,
        7,
        0,
        2,
        1,
        13,
        10,
        12,
        6,
        0,
        9,
        5,
        11,
        10,
        5,
        0,
        13,
        14,
        8,
        7,
        10,
        11,
        1,
        10,
        3,
        4,
        15,
        13,
        4,
        1,
        2,
        5,
        11,
        8,
        6,
        12,
        7,
        6,
        12,
        9,
        0,
        3,
        5,
        2,
        14,
        15,
        9,
        10,
        13,
        0,
        7,
        9,
        0,
        14,
        9,
        6,
        3,
        3,
        4,
        15,
        6,
        5,
        10,
        1,
        2,
        13,
        8,
        12,
        5,
        7,
        14,
        11,
        12,
        4,
        11,
        2,
        15,
        8,
        1,
        13,
        1,
        6,
        10,
        4,
        13,
        9,
        0,
        8,
        6,
        15,
        9,
        3,
        8,
        0,
        7,
        11,
        4,
        1,
        15,
        2,
        14,
        12,
        3,
        5,
        11,
        10,
        5,
        14,
        2,
        7,
        12,
        7,
        13,
        13,
        8,
        14,
        11,
        3,
        5,
        0,
        6,
        6,
        15,
        9,
        0,
        10,
        3,
        1,
        4,
        2,
        7,
        8,
        2,
        5,
        12,
        11,
        1,
        12,
        10,
        4,
        14,
        15,
        9,
        10,
        3,
        6,
        15,
        9,
        0,
        0,
        6,
        12,
        10,
        11,
        1,
        7,
        13,
        13,
        8,
        15,
        9,
        1,
        4,
        3,
        5,
        14,
        11,
        5,
        12,
        2,
        7,
        8,
        2,
        4,
        14,
        2,
        14,
        12,
        11,
        4,
        2,
        1,
        12,
        7,
        4,
        10,
        7,
        11,
        13,
        6,
        1,
        8,
        5,
        5,
        0,
        3,
        15,
        15,
        10,
        13,
        3,
        0,
        9,
        14,
        8,
        9,
        6,
        4,
        11,
        2,
        8,
        1,
        12,
        11,
        7,
        10,
        1,
        13,
        14,
        7,
        2,
        8,
        13,
        15,
        6,
        9,
        15,
        12,
        0,
        5,
        9,
        6,
        10,
        3,
        4,
        0,
        5,
        14,
        3,
        12,
        10,
        1,
        15,
        10,
        4,
        15,
        2,
        9,
        7,
        2,
        12,
        6,
        9,
        8,
        5,
        0,
        6,
        13,
        1,
        3,
        13,
        4,
        14,
        14,
        0,
        7,
        11,
        5,
        3,
        11,
        8,
        9,
        4,
        14,
        3,
        15,
        2,
        5,
        12,
        2,
        9,
        8,
        5,
        12,
        15,
        3,
        10,
        7,
        11,
        0,
        14,
        4,
        1,
        10,
        7,
        1,
        6,
        13,
        0,
        11,
        8,
        6,
        13,
        4,
        13,
        11,
        0,
        2,
        11,
        14,
        7,
        15,
        4,
        0,
        9,
        8,
        1,
        13,
        10,
        3,
        14,
        12,
        3,
        9,
        5,
        7,
        12,
        5,
        2,
        10,
        15,
        6,
        8,
        1,
        6,
        1,
        6,
        4,
        11,
        11,
        13,
        13,
        8,
        12,
        1,
        3,
        4,
        7,
        10,
        14,
        7,
        10,
        9,
        15,
        5,
        6,
        0,
        8,
        15,
        0,
        14,
        5,
        2,
        9,
        3,
        2,
        12,
        13,
        1,
        2,
        15,
        8,
        13,
        4,
        8,
        6,
        10,
        15,
        3,
        11,
        7,
        1,
        4,
        10,
        12,
        9,
        5,
        3,
        6,
        14,
        11,
        5,
        0,
        0,
        14,
        12,
        9,
        7,
        2,
        7,
        2,
        11,
        1,
        4,
        14,
        1,
        7,
        9,
        4,
        12,
        10,
        14,
        8,
        2,
        13,
        0,
        15,
        6,
        12,
        10,
        9,
        13,
        0,
        15,
        3,
        3,
        5,
        5,
        6,
        8,
        11
      ]
      e.substitute = function(t, e) {
        for (var r = 0, i = 0; i < 4; i++) {
          ;(r <<= 4), (r |= n[64 * i + ((t >>> (18 - 6 * i)) & 63)])
        }
        for (i = 0; i < 4; i++) {
          ;(r <<= 4), (r |= n[256 + 64 * i + ((e >>> (18 - 6 * i)) & 63)])
        }
        return r >>> 0
      }
      var i = [
        16,
        25,
        12,
        11,
        3,
        20,
        4,
        15,
        31,
        17,
        9,
        6,
        27,
        14,
        1,
        22,
        30,
        24,
        8,
        18,
        0,
        5,
        29,
        23,
        13,
        19,
        2,
        26,
        10,
        21,
        28,
        7
      ]
      ;(e.permute = function(t) {
        for (var e = 0, r = 0; r < i.length; r++)
          (e <<= 1), (e |= (t >>> i[r]) & 1)
        return e >>> 0
      }),
        (e.padSplit = function(t, e, r) {
          for (var n = t.toString(2); n.length < e; ) n = '0' + n
          for (var i = [], o = 0; o < e; o += r) i.push(n.slice(o, o + r))
          return i.join(' ')
        })
    },
    74729: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(30247),
        o = r(5028),
        s = r(39505)
      var a = { binary: !0, hex: !0, base64: !0 }
      ;(e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function(
        t
      ) {
        var e = new n(o[t].prime, 'hex'),
          r = new n(o[t].gen, 'hex')
        return new s(e, r)
      }),
        (e.createDiffieHellman = e.DiffieHellman = function t(e, r, o, u) {
          return n.isBuffer(r) || void 0 === a[r]
            ? t(e, 'binary', r, o)
            : ((r = r || 'binary'),
              (u = u || 'binary'),
              (o = o || new n([2])),
              n.isBuffer(o) || (o = new n(o, u)),
              'number' === typeof e
                ? new s(i(e, o), o, !0)
                : (n.isBuffer(e) || (e = new n(e, r)), new s(e, o, !0)))
        })
    },
    39505: function(t, e, r) {
      var n = r(26382).Buffer,
        i = r(6373),
        o = new (r(51235))(),
        s = new i(24),
        a = new i(11),
        u = new i(10),
        h = new i(3),
        f = new i(7),
        c = r(30247),
        l = r(15838)
      function p(t, e) {
        return (
          (e = e || 'utf8'),
          n.isBuffer(t) || (t = new n(t, e)),
          (this._pub = new i(t)),
          this
        )
      }
      function d(t, e) {
        return (
          (e = e || 'utf8'),
          n.isBuffer(t) || (t = new n(t, e)),
          (this._priv = new i(t)),
          this
        )
      }
      t.exports = y
      var g = {}
      function y(t, e, r) {
        this.setGenerator(e),
          (this.__prime = new i(t)),
          (this._prime = i.mont(this.__prime)),
          (this._primeLen = t.length),
          (this._pub = void 0),
          (this._priv = void 0),
          (this._primeCode = void 0),
          r
            ? ((this.setPublicKey = p), (this.setPrivateKey = d))
            : (this._primeCode = 8)
      }
      function m(t, e) {
        var r = new n(t.toArray())
        return e ? r.toString(e) : r
      }
      Object.defineProperty(y.prototype, 'verifyError', {
        enumerable: !0,
        get: function() {
          return (
            'number' !== typeof this._primeCode &&
              (this._primeCode = (function(t, e) {
                var r = e.toString('hex'),
                  n = [r, t.toString(16)].join('_')
                if (n in g) return g[n]
                var i,
                  l = 0
                if (
                  t.isEven() ||
                  !c.simpleSieve ||
                  !c.fermatTest(t) ||
                  !o.test(t)
                )
                  return (
                    (l += 1),
                    (l += '02' === r || '05' === r ? 8 : 4),
                    (g[n] = l),
                    l
                  )
                switch ((o.test(t.shrn(1)) || (l += 2), r)) {
                  case '02':
                    t.mod(s).cmp(a) && (l += 8)
                    break
                  case '05':
                    ;(i = t.mod(u)).cmp(h) && i.cmp(f) && (l += 8)
                    break
                  default:
                    l += 4
                }
                return (g[n] = l), l
              })(this.__prime, this.__gen)),
            this._primeCode
          )
        }
      }),
        (y.prototype.generateKeys = function() {
          return (
            this._priv || (this._priv = new i(l(this._primeLen))),
            (this._pub = this._gen
              .toRed(this._prime)
              .redPow(this._priv)
              .fromRed()),
            this.getPublicKey()
          )
        }),
        (y.prototype.computeSecret = function(t) {
          var e = (t = (t = new i(t)).toRed(this._prime))
              .redPow(this._priv)
              .fromRed(),
            r = new n(e.toArray()),
            o = this.getPrime()
          if (r.length < o.length) {
            var s = new n(o.length - r.length)
            s.fill(0), (r = n.concat([s, r]))
          }
          return r
        }),
        (y.prototype.getPublicKey = function(t) {
          return m(this._pub, t)
        }),
        (y.prototype.getPrivateKey = function(t) {
          return m(this._priv, t)
        }),
        (y.prototype.getPrime = function(t) {
          return m(this.__prime, t)
        }),
        (y.prototype.getGenerator = function(t) {
          return m(this._gen, t)
        }),
        (y.prototype.setGenerator = function(t, e) {
          return (
            (e = e || 'utf8'),
            n.isBuffer(t) || (t = new n(t, e)),
            (this.__gen = t),
            (this._gen = new i(t)),
            this
          )
        })
    },
    30247: function(t, e, r) {
      var n = r(15838)
      ;(t.exports = b), (b.simpleSieve = y), (b.fermatTest = m)
      var i = r(6373),
        o = new i(24),
        s = new (r(51235))(),
        a = new i(1),
        u = new i(2),
        h = new i(5),
        f = (new i(16), new i(8), new i(10)),
        c = new i(3),
        l = (new i(7), new i(11)),
        p = new i(4),
        d = (new i(12), null)
      function g() {
        if (null !== d) return d
        var t = []
        t[0] = 2
        for (var e = 1, r = 3; r < 1048576; r += 2) {
          for (
            var n = Math.ceil(Math.sqrt(r)), i = 0;
            i < e && t[i] <= n && r % t[i] !== 0;
            i++
          );
          ;(e !== i && t[i] <= n) || (t[e++] = r)
        }
        return (d = t), t
      }
      function y(t) {
        for (var e = g(), r = 0; r < e.length; r++)
          if (0 === t.modn(e[r])) return 0 === t.cmpn(e[r])
        return !0
      }
      function m(t) {
        var e = i.mont(t)
        return (
          0 ===
          u
            .toRed(e)
            .redPow(t.subn(1))
            .fromRed()
            .cmpn(1)
        )
      }
      function b(t, e) {
        if (t < 16) return new i(2 === e || 5 === e ? [140, 123] : [140, 39])
        var r, d
        for (e = new i(e); ; ) {
          for (r = new i(n(Math.ceil(t / 8))); r.bitLength() > t; ) r.ishrn(1)
          if ((r.isEven() && r.iadd(a), r.testn(1) || r.iadd(u), e.cmp(u))) {
            if (!e.cmp(h)) for (; r.mod(f).cmp(c); ) r.iadd(p)
          } else for (; r.mod(o).cmp(l); ) r.iadd(p)
          if (
            y((d = r.shrn(1))) &&
            y(r) &&
            m(d) &&
            m(r) &&
            s.test(d) &&
            s.test(r)
          )
            return r
        }
      }
    },
    98451: function(t, e, r) {
      var n = r(59966).Buffer,
        i = r(41237)
      t.exports = function(t, e, r, o) {
        if (
          (n.isBuffer(t) || (t = n.from(t, 'binary')),
          e && (n.isBuffer(e) || (e = n.from(e, 'binary')), 8 !== e.length))
        )
          throw new RangeError('salt should be Buffer with 8 byte length')
        for (
          var s = r / 8, a = n.alloc(s), u = n.alloc(o || 0), h = n.alloc(0);
          s > 0 || o > 0;

        ) {
          var f = new i()
          f.update(h), f.update(t), e && f.update(e), (h = f.digest())
          var c = 0
          if (s > 0) {
            var l = a.length - s
            ;(c = Math.min(s, h.length)), h.copy(a, l, 0, c), (s -= c)
          }
          if (c < h.length && o > 0) {
            var p = u.length - o,
              d = Math.min(o, h.length - c)
            h.copy(u, p, c, c + d), (o -= d)
          }
        }
        return h.fill(0), { key: a, iv: u }
      }
    },
    51235: function(t, e, r) {
      var n = r(6373),
        i = r(88462)
      function o(t) {
        this.rand = t || new i.Rand()
      }
      ;(t.exports = o),
        (o.create = function(t) {
          return new o(t)
        }),
        (o.prototype._randbelow = function(t) {
          var e = t.bitLength(),
            r = Math.ceil(e / 8)
          do {
            var i = new n(this.rand.generate(r))
          } while (i.cmp(t) >= 0)
          return i
        }),
        (o.prototype._randrange = function(t, e) {
          var r = e.sub(t)
          return t.add(this._randbelow(r))
        }),
        (o.prototype.test = function(t, e, r) {
          var i = t.bitLength(),
            o = n.mont(t),
            s = new n(1).toRed(o)
          e || (e = Math.max(1, (i / 48) | 0))
          for (var a = t.subn(1), u = 0; !a.testn(u); u++);
          for (var h = t.shrn(u), f = a.toRed(o); e > 0; e--) {
            var c = this._randrange(new n(2), a)
            r && r(c)
            var l = c.toRed(o).redPow(h)
            if (0 !== l.cmp(s) && 0 !== l.cmp(f)) {
              for (var p = 1; p < u; p++) {
                if (0 === (l = l.redSqr()).cmp(s)) return !1
                if (0 === l.cmp(f)) break
              }
              if (p === u) return !1
            }
          }
          return !0
        }),
        (o.prototype.getDivisor = function(t, e) {
          var r = t.bitLength(),
            i = n.mont(t),
            o = new n(1).toRed(i)
          e || (e = Math.max(1, (r / 48) | 0))
          for (var s = t.subn(1), a = 0; !s.testn(a); a++);
          for (var u = t.shrn(a), h = s.toRed(i); e > 0; e--) {
            var f = this._randrange(new n(2), s),
              c = t.gcd(f)
            if (0 !== c.cmpn(1)) return c
            var l = f.toRed(i).redPow(u)
            if (0 !== l.cmp(o) && 0 !== l.cmp(h)) {
              for (var p = 1; p < a; p++) {
                if (0 === (l = l.redSqr()).cmp(o))
                  return l
                    .fromRed()
                    .subn(1)
                    .gcd(t)
                if (0 === l.cmp(h)) break
              }
              if (p === a)
                return (l = l.redSqr())
                  .fromRed()
                  .subn(1)
                  .gcd(t)
            }
          }
          return !1
        })
    },
    81250: function(t, e, r) {
      'use strict'
      var n = r(34445),
        i = r(6900),
        o =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = u),
        (e.SlowBuffer = function(t) {
          ;+t != t && (t = 0)
          return u.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var s = 2147483647
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, u.prototype), e
      }
      function u(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return c(t)
        }
        return h(t, e, r)
      }
      function h(t, e, r) {
        if ('string' === typeof t)
          return (function(t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!u.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | g(t, e),
              n = a(r),
              i = n.write(t, e)
            i !== r && (n = n.slice(0, i))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function(t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return p(e.buffer, e.byteOffset, e.byteLength)
            }
            return l(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
          return p(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return u.from(n, e, r)
        var i = (function(t) {
          if (u.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = a(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length)
            return 'number' !== typeof t.length || V(t.length) ? a(0) : l(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return l(t.data)
        })(t)
        if (i) return i
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function f(t) {
        if ('number' !== typeof t)
          throw new TypeError('"size" argument must be of type number')
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
      }
      function c(t) {
        return f(t), a(t < 0 ? 0 : 0 | d(t))
      }
      function l(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n]
        return r
      }
      function p(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        )
      }
      function d(t) {
        if (t >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes'
          )
        return 0 | t
      }
      function g(t, e) {
        if (u.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return O(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return j(t).length
            default:
              if (i) return n ? -1 : O(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function y(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return T(this, e, r)
            case 'utf8':
            case 'utf-8':
              return A(this, e, r)
            case 'ascii':
              return I(this, e, r)
            case 'latin1':
            case 'binary':
              return C(this, e, r)
            case 'base64':
              return M(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return L(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function v(t, e, r, n, i) {
        var o,
          s = 1,
          a = t.length,
          u = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
        }
        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var f = -1
          for (o = r; o < a; o++)
            if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * s
            } else -1 !== f && (o -= o - f), (f = -1)
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            for (var c = !0, l = 0; l < u; l++)
              if (h(t, o + l) !== h(e, l)) {
                c = !1
                break
              }
            if (c) return o
          }
        return -1
      }
      function w(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = e.length
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16)
          if (V(a)) return s
          t[r + s] = a
        }
        return s
      }
      function k(t, e, r, n) {
        return K(O(e, t.length - r), t, r, n)
      }
      function _(t, e, r, n) {
        return K(
          (function(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function S(t, e, r, n) {
        return K(j(e), t, r, n)
      }
      function E(t, e, r, n) {
        return K(
          (function(t, e) {
            for (
              var r, n, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (n = (r = t.charCodeAt(s)) >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function M(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r))
      }
      function A(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var o,
            s,
            a,
            u,
            h = t[i],
            f = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1
          if (i + c <= r)
            switch (c) {
              case 1:
                h < 128 && (f = h)
                break
              case 2:
                128 === (192 & (o = t[i + 1])) &&
                  (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                  (f = u)
                break
              case 3:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    (u = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u)
                break
              case 4:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u =
                      ((15 & h) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (f = u)
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (i += c)
        }
        return (function(t) {
          var e = t.length
          if (e <= B) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += B)))
          return r
        })(n)
      }
      ;(e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function() {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function() {
                  return 42
                }
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(u.prototype, 'parent', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.buffer
          }
        }),
        Object.defineProperty(u.prototype, 'offset', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.byteOffset
          }
        }),
        (u.poolSize = 8192),
        (u.from = function(t, e, r) {
          return h(t, e, r)
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function(t, e, r) {
          return (function(t, e, r) {
            return (
              f(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            )
          })(t, e, r)
        }),
        (u.allocUnsafe = function(t) {
          return c(t)
        }),
        (u.allocUnsafeSlow = function(t) {
          return c(t)
        }),
        (u.isBuffer = function(t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype
        }),
        (u.compare = function(t, e) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (u.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function(t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return u.alloc(0)
          var r
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = u.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var o = t[r]
            if (F(o, Uint8Array))
              i + o.length > n.length
                ? u.from(o).copy(n, i)
                : Uint8Array.prototype.set.call(n, o, i)
            else {
              if (!u.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              o.copy(n, i)
            }
            i += o.length
          }
          return n
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function() {
          var t = this.length
          if (t % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (u.prototype.swap32 = function() {
          var t = this.length
          if (t % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (u.prototype.swap64 = function() {
          var t = this.length
          if (t % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4)
          return this
        }),
        (u.prototype.toString = function() {
          var t = this.length
          return 0 === t
            ? ''
            : 0 === arguments.length
            ? A(this, 0, t)
            : y.apply(this, arguments)
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function(t) {
          if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === u.compare(this, t)
        }),
        (u.prototype.inspect = function() {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function(t, e, r, n, i) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0),
              a = Math.min(o, s),
              h = this.slice(n, i),
              f = t.slice(e, r),
              c = 0;
            c < a;
            ++c
          )
            if (h[c] !== f[c]) {
              ;(o = h[c]), (s = f[c])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function(t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (u.prototype.indexOf = function(t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (u.prototype.lastIndexOf = function(t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (u.prototype.write = function(t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e)
            (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return w(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return k(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return _(this, t, e, r)
              case 'base64':
                return S(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return E(this, t, e, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        })
      var B = 4096
      function I(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function C(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function T(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = e; o < r; ++o) i += q[t[o]]
        return i
      }
      function L(t, e, r) {
        for (var n = t.slice(e, r), i = '', o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function U(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function x(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function R(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        )
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        )
      }
      ;(u.prototype.slice = function(t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, u.prototype), n
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n
        }),
        (u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i
          return n
        }),
        (u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
          return (t >>>= 0), e || U(t, 1, this.length), this[t]
        }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8)
          )
        }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1]
          )
        }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          )
        }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (u.prototype.readIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (u.prototype.readIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }),
        (u.prototype.readInt8 = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (u.prototype.readInt16LE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt16BE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          )
        }),
        (u.prototype.readFloatLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4)
          )
        }),
        (u.prototype.readFloatBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4)
          )
        }),
        (u.prototype.readDoubleLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8)
          )
        }),
        (u.prototype.readDoubleBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8)
          )
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255
          return e + r
        }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255
          return e + r
        }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 255, 0),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeIntLE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[e] = 255 & t; ++o < r && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeIntBE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeInt16LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeInt16BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeInt32LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (u.prototype.writeInt32BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeFloatLE = function(t, e, r) {
          return N(this, t, e, !0, r)
        }),
        (u.prototype.writeFloatBE = function(t, e, r) {
          return N(this, t, e, !1, r)
        }),
        (u.prototype.writeDoubleLE = function(t, e, r) {
          return D(this, t, e, !0, r)
        }),
        (u.prototype.writeDoubleBE = function(t, e, r) {
          return D(this, t, e, !1, r)
        }),
        (u.prototype.copy = function(t, e, r, n) {
          if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (u.prototype.fill = function(t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !u.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i = t.charCodeAt(0)
              ;(('utf8' === n && i < 128) || 'latin1' === n) && (t = i)
            }
          } else
            'number' === typeof t
              ? (t &= 255)
              : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var o
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t
          else {
            var s = u.isBuffer(t) ? t : u.from(t, n),
              a = s.length
            if (0 === a)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              )
            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
          }
          return this
        })
      var P = /[^+/0-9A-Za-z-_]/g
      function O(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            )
          }
        }
        return o
      }
      function j(t) {
        return n.toByteArray(
          (function(t) {
            if ((t = (t = t.split('=')[0]).trim().replace(P, '')).length < 2)
              return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function K(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i]
        return i
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var q = (function() {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    73540: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = (function() {
          return i(
            function t(e, r, i, o) {
              n(this, t),
                (this.name = e),
                (this.code = r),
                (this.alphabet = o),
                i && o && (this.engine = i(o))
            },
            [
              {
                key: 'encode',
                value: function(t) {
                  return this.engine.encode(t)
                }
              },
              {
                key: 'decode',
                value: function(t) {
                  return this.engine.decode(t)
                }
              },
              {
                key: 'isImplemented',
                value: function() {
                  return this.engine
                }
              }
            ]
          )
        })()
      t.exports = o
    },
    63675: function(t, e, r) {
      'use strict'
      var n = r(50883).default,
        i = r(81250).Buffer
      t.exports = function(t) {
        return {
          encode: function(t) {
            return 'string' === typeof t
              ? i.from(t).toString('hex')
              : t.toString('hex')
          },
          decode: function(e) {
            var r,
              o = n(e)
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var s = r.value
                if (t.indexOf(s) < 0)
                  throw new Error('invalid base16 character')
              }
            } catch (a) {
              o.e(a)
            } finally {
              o.f()
            }
            return i.from(e, 'hex')
          }
        }
      }
    },
    69821: function(t, e, r) {
      'use strict'
      var n = r(50883).default
      function i(t, e) {
        var r = t.byteLength,
          n = new Uint8Array(t),
          i = e.indexOf('=') === e.length - 1
        i && (e = e.substring(0, e.length - 1))
        for (var o = 0, s = 0, a = '', u = 0; u < r; u++)
          for (s = (s << 8) | n[u], o += 8; o >= 5; )
            (a += e[(s >>> (o - 5)) & 31]), (o -= 5)
        if ((o > 0 && (a += e[(s << (5 - o)) & 31]), i))
          for (; a.length % 8 !== 0; ) a += '='
        return a
      }
      t.exports = function(t) {
        return {
          encode: function(e) {
            return i('string' === typeof e ? Uint8Array.from(e) : e, t)
          },
          decode: function(e) {
            var r,
              i = n(e)
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var o = r.value
                if (t.indexOf(o) < 0)
                  throw new Error('invalid base32 character')
              }
            } catch (s) {
              i.e(s)
            } finally {
              i.f()
            }
            return (function(t, e) {
              for (
                var r = (t = t.replace(new RegExp('=', 'g'), '')).length,
                  n = 0,
                  i = 0,
                  o = 0,
                  s = new Uint8Array(((5 * r) / 8) | 0),
                  a = 0;
                a < r;
                a++
              )
                (i = (i << 5) | e.indexOf(t[a])),
                  (n += 5) >= 8 && ((s[o++] = (i >>> (n - 8)) & 255), (n -= 8))
              return s.buffer
            })(e, t)
          }
        }
      }
    },
    93446: function(t, e, r) {
      'use strict'
      var n = r(50883).default,
        i = r(81250).Buffer
      t.exports = function(t) {
        var e = t.indexOf('=') > -1,
          r = t.indexOf('-') > -1 && t.indexOf('_') > -1
        return {
          encode: function(t) {
            var n = ''
            ;(n =
              'string' === typeof t
                ? i.from(t).toString('base64')
                : t.toString('base64')),
              r && (n = n.replace(/\+/g, '-').replace(/\//g, '_'))
            var o = n.indexOf('=')
            return o > 0 && !e && (n = n.substring(0, o)), n
          },
          decode: function(e) {
            var r,
              o = n(e)
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var s = r.value
                if (t.indexOf(s) < 0)
                  throw new Error('invalid base64 character')
              }
            } catch (a) {
              o.e(a)
            } finally {
              o.f()
            }
            return i.from(e, 'base64')
          }
        }
      }
    },
    61240: function(t, e, r) {
      'use strict'
      var n = r(73540),
        i = r(66281),
        o = r(63675),
        s = r(69821),
        a = r(93446),
        u = [
          ['base1', '1', '', '1'],
          ['base2', '0', i, '01'],
          ['base8', '7', i, '01234567'],
          ['base10', '9', i, '0123456789'],
          ['base16', 'f', o, '0123456789abcdef'],
          ['base32', 'b', s, 'abcdefghijklmnopqrstuvwxyz234567'],
          ['base32pad', 'c', s, 'abcdefghijklmnopqrstuvwxyz234567='],
          ['base32hex', 'v', s, '0123456789abcdefghijklmnopqrstuv'],
          ['base32hexpad', 't', s, '0123456789abcdefghijklmnopqrstuv='],
          ['base32z', 'h', s, 'ybndrfg8ejkmcpqxot1uwisza345h769'],
          [
            'base58flickr',
            'Z',
            i,
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
          ],
          [
            'base58btc',
            'z',
            i,
            '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
          ],
          [
            'base64',
            'm',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          ],
          [
            'base64pad',
            'M',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          ],
          [
            'base64url',
            'u',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
          ],
          [
            'base64urlpad',
            'U',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='
          ]
        ],
        h = u.reduce(function(t, e) {
          return (t[e[0]] = new n(e[0], e[1], e[2], e[3])), t
        }, {}),
        f = u.reduce(function(t, e) {
          return (t[e[1]] = h[e[0]]), t
        }, {})
      t.exports = { names: h, codes: f }
    },
    37841: function(t, e, r) {
      'use strict'
      var n = r(81250).Buffer,
        i = r(61240)
      ;((e = t.exports = s).encode = function(t, e) {
        var r = a(t)
        return s(r.name, n.from(r.encode(e)))
      }),
        (e.decode = function(t) {
          n.isBuffer(t) && (t = t.toString())
          var e = t.substring(0, 1)
          'string' === typeof (t = t.substring(1, t.length)) && (t = n.from(t))
          var r = a(e)
          return n.from(r.decode(t.toString()))
        }),
        (e.isEncoded = function(t) {
          n.isBuffer(t) && (t = t.toString())
          if ('[object String]' !== Object.prototype.toString.call(t)) return !1
          var e = t.substring(0, 1)
          try {
            return a(e).name
          } catch (r) {
            return !1
          }
        }),
        (e.names = Object.freeze(Object.keys(i.names))),
        (e.codes = Object.freeze(Object.keys(i.codes)))
      var o = new Error('Unsupported encoding')
      function s(t, e) {
        if (!e) throw new Error('requires an encoded buffer')
        var r = a(t),
          i = n.from(r.code)
        return (
          (function(t, e) {
            var r = a(t)
            r.decode(e.toString())
          })(r.name, e),
          n.concat([i, e])
        )
      }
      function a(t) {
        var e
        if (i.names[t]) e = i.names[t]
        else {
          if (!i.codes[t]) throw o
          e = i.codes[t]
        }
        if (!e.isImplemented())
          throw new Error('Base ' + t + ' is not implemented yet')
        return e
      }
    },
    88191: function(t, e, r) {
      'use strict'
      var n = r(34445),
        i = r(6900),
        o =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = u),
        (e.SlowBuffer = function(t) {
          ;+t != t && (t = 0)
          return u.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var s = 2147483647
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, u.prototype), e
      }
      function u(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return c(t)
        }
        return h(t, e, r)
      }
      function h(t, e, r) {
        if ('string' === typeof t)
          return (function(t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!u.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | g(t, e),
              n = a(r),
              i = n.write(t, e)
            i !== r && (n = n.slice(0, i))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function(t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return p(e.buffer, e.byteOffset, e.byteLength)
            }
            return l(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
          return p(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return u.from(n, e, r)
        var i = (function(t) {
          if (u.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = a(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length)
            return 'number' !== typeof t.length || V(t.length) ? a(0) : l(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return l(t.data)
        })(t)
        if (i) return i
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function f(t) {
        if ('number' !== typeof t)
          throw new TypeError('"size" argument must be of type number')
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
      }
      function c(t) {
        return f(t), a(t < 0 ? 0 : 0 | d(t))
      }
      function l(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n]
        return r
      }
      function p(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        )
      }
      function d(t) {
        if (t >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes'
          )
        return 0 | t
      }
      function g(t, e) {
        if (u.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return O(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return j(t).length
            default:
              if (i) return n ? -1 : O(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function y(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return T(this, e, r)
            case 'utf8':
            case 'utf-8':
              return A(this, e, r)
            case 'ascii':
              return I(this, e, r)
            case 'latin1':
            case 'binary':
              return C(this, e, r)
            case 'base64':
              return M(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return L(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function v(t, e, r, n, i) {
        var o,
          s = 1,
          a = t.length,
          u = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
        }
        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var f = -1
          for (o = r; o < a; o++)
            if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * s
            } else -1 !== f && (o -= o - f), (f = -1)
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            for (var c = !0, l = 0; l < u; l++)
              if (h(t, o + l) !== h(e, l)) {
                c = !1
                break
              }
            if (c) return o
          }
        return -1
      }
      function w(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = e.length
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16)
          if (V(a)) return s
          t[r + s] = a
        }
        return s
      }
      function k(t, e, r, n) {
        return K(O(e, t.length - r), t, r, n)
      }
      function _(t, e, r, n) {
        return K(
          (function(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function S(t, e, r, n) {
        return K(j(e), t, r, n)
      }
      function E(t, e, r, n) {
        return K(
          (function(t, e) {
            for (
              var r, n, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (n = (r = t.charCodeAt(s)) >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function M(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r))
      }
      function A(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var o,
            s,
            a,
            u,
            h = t[i],
            f = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1
          if (i + c <= r)
            switch (c) {
              case 1:
                h < 128 && (f = h)
                break
              case 2:
                128 === (192 & (o = t[i + 1])) &&
                  (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                  (f = u)
                break
              case 3:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    (u = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u)
                break
              case 4:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u =
                      ((15 & h) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (f = u)
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (i += c)
        }
        return (function(t) {
          var e = t.length
          if (e <= B) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += B)))
          return r
        })(n)
      }
      ;(e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function() {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function() {
                  return 42
                }
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(u.prototype, 'parent', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.buffer
          }
        }),
        Object.defineProperty(u.prototype, 'offset', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.byteOffset
          }
        }),
        (u.poolSize = 8192),
        (u.from = function(t, e, r) {
          return h(t, e, r)
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function(t, e, r) {
          return (function(t, e, r) {
            return (
              f(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            )
          })(t, e, r)
        }),
        (u.allocUnsafe = function(t) {
          return c(t)
        }),
        (u.allocUnsafeSlow = function(t) {
          return c(t)
        }),
        (u.isBuffer = function(t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype
        }),
        (u.compare = function(t, e) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (u.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function(t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return u.alloc(0)
          var r
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = u.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var o = t[r]
            if (F(o, Uint8Array))
              i + o.length > n.length
                ? u.from(o).copy(n, i)
                : Uint8Array.prototype.set.call(n, o, i)
            else {
              if (!u.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              o.copy(n, i)
            }
            i += o.length
          }
          return n
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function() {
          var t = this.length
          if (t % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (u.prototype.swap32 = function() {
          var t = this.length
          if (t % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (u.prototype.swap64 = function() {
          var t = this.length
          if (t % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4)
          return this
        }),
        (u.prototype.toString = function() {
          var t = this.length
          return 0 === t
            ? ''
            : 0 === arguments.length
            ? A(this, 0, t)
            : y.apply(this, arguments)
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function(t) {
          if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === u.compare(this, t)
        }),
        (u.prototype.inspect = function() {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function(t, e, r, n, i) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0),
              a = Math.min(o, s),
              h = this.slice(n, i),
              f = t.slice(e, r),
              c = 0;
            c < a;
            ++c
          )
            if (h[c] !== f[c]) {
              ;(o = h[c]), (s = f[c])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function(t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (u.prototype.indexOf = function(t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (u.prototype.lastIndexOf = function(t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (u.prototype.write = function(t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e)
            (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return w(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return k(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return _(this, t, e, r)
              case 'base64':
                return S(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return E(this, t, e, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        })
      var B = 4096
      function I(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function C(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function T(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = e; o < r; ++o) i += q[t[o]]
        return i
      }
      function L(t, e, r) {
        for (var n = t.slice(e, r), i = '', o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function U(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function x(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function R(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        )
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        )
      }
      ;(u.prototype.slice = function(t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, u.prototype), n
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n
        }),
        (u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i
          return n
        }),
        (u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
          return (t >>>= 0), e || U(t, 1, this.length), this[t]
        }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8)
          )
        }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1]
          )
        }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          )
        }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (u.prototype.readIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (u.prototype.readIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }),
        (u.prototype.readInt8 = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (u.prototype.readInt16LE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt16BE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          )
        }),
        (u.prototype.readFloatLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4)
          )
        }),
        (u.prototype.readFloatBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4)
          )
        }),
        (u.prototype.readDoubleLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8)
          )
        }),
        (u.prototype.readDoubleBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8)
          )
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255
          return e + r
        }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255
          return e + r
        }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 255, 0),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeIntLE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[e] = 255 & t; ++o < r && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeIntBE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeInt16LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeInt16BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeInt32LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (u.prototype.writeInt32BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeFloatLE = function(t, e, r) {
          return N(this, t, e, !0, r)
        }),
        (u.prototype.writeFloatBE = function(t, e, r) {
          return N(this, t, e, !1, r)
        }),
        (u.prototype.writeDoubleLE = function(t, e, r) {
          return D(this, t, e, !0, r)
        }),
        (u.prototype.writeDoubleBE = function(t, e, r) {
          return D(this, t, e, !1, r)
        }),
        (u.prototype.copy = function(t, e, r, n) {
          if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (u.prototype.fill = function(t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !u.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i = t.charCodeAt(0)
              ;(('utf8' === n && i < 128) || 'latin1' === n) && (t = i)
            }
          } else
            'number' === typeof t
              ? (t &= 255)
              : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var o
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t
          else {
            var s = u.isBuffer(t) ? t : u.from(t, n),
              a = s.length
            if (0 === a)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              )
            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
          }
          return this
        })
      var P = /[^+/0-9A-Za-z-_]/g
      function O(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            )
          }
        }
        return o
      }
      function j(t) {
        return n.toByteArray(
          (function(t) {
            if ((t = (t = t.split('=')[0]).trim().replace(P, '')).length < 2)
              return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function K(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i]
        return i
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var q = (function() {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    65297: function(t, e, r) {
      'use strict'
      for (
        var n = r(85715).default,
          i = r(63543),
          o = {},
          s = 0,
          a = Object.entries(i);
        s < a.length;
        s++
      ) {
        var u = n(a[s], 2),
          h = u[0],
          f = u[1]
        o[h.toUpperCase().replace(/-/g, '_')] = f
      }
      t.exports = Object.freeze(o)
    },
    91468: function(t, e, r) {
      'use strict'
      var n = r(88191).Buffer,
        i = r(21870),
        o = r(31364),
        s = r(47625),
        a = r(78254)
      ;((e = t.exports).addPrefix = function(t, e) {
        var r
        if (n.isBuffer(t)) r = a.varintBufferEncode(t)
        else {
          if (!s[t]) throw new Error('multicodec not recognized')
          r = s[t]
        }
        return n.concat([r, e])
      }),
        (e.rmPrefix = function(t) {
          return i.decode(t), t.slice(i.decode.bytes)
        }),
        (e.getCodec = function(t) {
          var e = i.decode(t),
            r = o.get(e)
          if (void 0 === r) throw new Error('Code '.concat(e, ' not found'))
          return r
        }),
        (e.getName = function(t) {
          return o.get(t)
        }),
        (e.getNumber = function(t) {
          var e = s[t]
          if (void 0 === e) throw new Error('Codec `' + t + '` not found')
          return a.varintBufferDecode(e)[0]
        }),
        (e.getCode = function(t) {
          return i.decode(t)
        }),
        (e.getCodeVarint = function(t) {
          var e = s[t]
          if (void 0 === e) throw new Error('Codec `' + t + '` not found')
          return e
        }),
        (e.getVarint = function(t) {
          return i.encode(t)
        })
      var u = r(65297)
      Object.assign(e, u), (e.print = r(90435))
    },
    31364: function(t, e, r) {
      'use strict'
      var n = r(63543),
        i = new Map()
      for (var o in n) {
        var s = n[o]
        i.set(s, o)
      }
      t.exports = Object.freeze(i)
    },
    90435: function(t, e, r) {
      'use strict'
      for (
        var n = r(85715).default,
          i = r(63543),
          o = {},
          s = 0,
          a = Object.entries(i);
        s < a.length;
        s++
      ) {
        var u = n(a[s], 2),
          h = u[0],
          f = u[1]
        void 0 === o[f] && (o[f] = h)
      }
      t.exports = Object.freeze(o)
    },
    78254: function(t, e, r) {
      'use strict'
      var n = r(21870),
        i = r(88191).Buffer
      function o(t) {
        return parseInt(t.toString('hex'), 16)
      }
      function s(t) {
        var e = t.toString(16)
        return e.length % 2 === 1 && (e = '0' + e), i.from(e, 'hex')
      }
      t.exports = {
        numberToBuffer: s,
        bufferToNumber: o,
        varintBufferEncode: function(t) {
          return i.from(n.encode(o(t)))
        },
        varintBufferDecode: function(t) {
          return s(n.decode(t))
        },
        varintEncode: function(t) {
          return i.from(n.encode(t))
        }
      }
    },
    47625: function(t, e, r) {
      'use strict'
      var n = r(63543),
        i = r(78254).varintEncode,
        o = {}
      for (var s in n) {
        var a = n[s]
        o[s] = i(a)
      }
      t.exports = Object.freeze(o)
    },
    67295: function(t, e, r) {
      'use strict'
      var n = r(34445),
        i = r(6900),
        o =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = u),
        (e.SlowBuffer = function(t) {
          ;+t != t && (t = 0)
          return u.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var s = 2147483647
      function a(t) {
        if (t > s)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, u.prototype), e
      }
      function u(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return c(t)
        }
        return h(t, e, r)
      }
      function h(t, e, r) {
        if ('string' === typeof t)
          return (function(t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!u.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | g(t, e),
              n = a(r),
              i = n.write(t, e)
            i !== r && (n = n.slice(0, i))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function(t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return p(e.buffer, e.byteOffset, e.byteLength)
            }
            return l(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer)))
          return p(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return p(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return u.from(n, e, r)
        var i = (function(t) {
          if (u.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = a(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length)
            return 'number' !== typeof t.length || V(t.length) ? a(0) : l(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return l(t.data)
        })(t)
        if (i) return i
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function f(t) {
        if ('number' !== typeof t)
          throw new TypeError('"size" argument must be of type number')
        if (t < 0)
          throw new RangeError(
            'The value "' + t + '" is invalid for option "size"'
          )
      }
      function c(t) {
        return f(t), a(t < 0 ? 0 : 0 | d(t))
      }
      function l(t) {
        for (
          var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0;
          n < e;
          n += 1
        )
          r[n] = 255 & t[n]
        return r
      }
      function p(t, e, r) {
        if (e < 0 || t.byteLength < e)
          throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, u.prototype),
          n
        )
      }
      function d(t) {
        if (t >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes'
          )
        return 0 | t
      }
      function g(t, e) {
        if (u.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return O(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return j(t).length
            default:
              if (i) return n ? -1 : O(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function y(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return T(this, e, r)
            case 'utf8':
            case 'utf-8':
              return A(this, e, r)
            case 'ascii':
              return I(this, e, r)
            case 'latin1':
            case 'binary':
              return C(this, e, r)
            case 'base64':
              return M(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return L(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' === typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : v(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function v(t, e, r, n, i) {
        var o,
          s = 1,
          a = t.length,
          u = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
        }
        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var f = -1
          for (o = r; o < a; o++)
            if (h(t, o) === h(e, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * s
            } else -1 !== f && (o -= o - f), (f = -1)
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            for (var c = !0, l = 0; l < u; l++)
              if (h(t, o + l) !== h(e, l)) {
                c = !1
                break
              }
            if (c) return o
          }
        return -1
      }
      function w(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = e.length
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16)
          if (V(a)) return s
          t[r + s] = a
        }
        return s
      }
      function k(t, e, r, n) {
        return K(O(e, t.length - r), t, r, n)
      }
      function _(t, e, r, n) {
        return K(
          (function(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function S(t, e, r, n) {
        return K(j(e), t, r, n)
      }
      function E(t, e, r, n) {
        return K(
          (function(t, e) {
            for (
              var r, n, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (n = (r = t.charCodeAt(s)) >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function M(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r))
      }
      function A(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var o,
            s,
            a,
            u,
            h = t[i],
            f = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1
          if (i + c <= r)
            switch (c) {
              case 1:
                h < 128 && (f = h)
                break
              case 2:
                128 === (192 & (o = t[i + 1])) &&
                  (u = ((31 & h) << 6) | (63 & o)) > 127 &&
                  (f = u)
                break
              case 3:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    (u = ((15 & h) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u)
                break
              case 4:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & o) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    (u =
                      ((15 & h) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (f = u)
            }
          null === f
            ? ((f = 65533), (c = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (i += c)
        }
        return (function(t) {
          var e = t.length
          if (e <= B) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += B)))
          return r
        })(n)
      }
      ;(e.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function() {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function() {
                  return 42
                }
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(u.prototype, 'parent', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.buffer
          }
        }),
        Object.defineProperty(u.prototype, 'offset', {
          enumerable: !0,
          get: function() {
            if (u.isBuffer(this)) return this.byteOffset
          }
        }),
        (u.poolSize = 8192),
        (u.from = function(t, e, r) {
          return h(t, e, r)
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function(t, e, r) {
          return (function(t, e, r) {
            return (
              f(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            )
          })(t, e, r)
        }),
        (u.allocUnsafe = function(t) {
          return c(t)
        }),
        (u.allocUnsafeSlow = function(t) {
          return c(t)
        }),
        (u.isBuffer = function(t) {
          return null != t && !0 === t._isBuffer && t !== u.prototype
        }),
        (u.compare = function(t, e) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (u.isEncoding = function(t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function(t, e) {
          if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return u.alloc(0)
          var r
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = u.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var o = t[r]
            if (F(o, Uint8Array))
              i + o.length > n.length
                ? u.from(o).copy(n, i)
                : Uint8Array.prototype.set.call(n, o, i)
            else {
              if (!u.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                )
              o.copy(n, i)
            }
            i += o.length
          }
          return n
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function() {
          var t = this.length
          if (t % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (u.prototype.swap32 = function() {
          var t = this.length
          if (t % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (u.prototype.swap64 = function() {
          var t = this.length
          if (t % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4)
          return this
        }),
        (u.prototype.toString = function() {
          var t = this.length
          return 0 === t
            ? ''
            : 0 === arguments.length
            ? A(this, 0, t)
            : y.apply(this, arguments)
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function(t) {
          if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === u.compare(this, t)
        }),
        (u.prototype.inspect = function() {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function(t, e, r, n, i) {
          if (
            (F(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0),
              a = Math.min(o, s),
              h = this.slice(n, i),
              f = t.slice(e, r),
              c = 0;
            c < a;
            ++c
          )
            if (h[c] !== f[c]) {
              ;(o = h[c]), (s = f[c])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function(t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (u.prototype.indexOf = function(t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (u.prototype.lastIndexOf = function(t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (u.prototype.write = function(t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e)
            (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return w(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return k(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return _(this, t, e, r)
              case 'base64':
                return S(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return E(this, t, e, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          }
        })
      var B = 4096
      function I(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function C(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function T(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = e; o < r; ++o) i += q[t[o]]
        return i
      }
      function L(t, e, r) {
        for (var n = t.slice(e, r), i = '', o = 0; o < n.length - 1; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function U(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function x(t, e, r, n, i, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function R(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 4),
          i.write(t, e, r, n, 23, 4),
          r + 4
        )
      }
      function D(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || R(t, 0, r, 8),
          i.write(t, e, r, n, 52, 8),
          r + 8
        )
      }
      ;(u.prototype.slice = function(t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, u.prototype), n
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n
        }),
        (u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i
          return n
        }),
        (u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
          return (t >>>= 0), e || U(t, 1, this.length), this[t]
        }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8)
          )
        }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1]
          )
        }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          )
        }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (u.prototype.readIntLE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (u.prototype.readIntBE = function(t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || U(t, e, this.length)
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }),
        (u.prototype.readInt8 = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (u.prototype.readInt16LE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt16BE = function(t, e) {
          ;(t >>>= 0), e || U(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt32LE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function(t, e) {
          return (
            (t >>>= 0),
            e || U(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          )
        }),
        (u.prototype.readFloatLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4)
          )
        }),
        (u.prototype.readFloatBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4)
          )
        }),
        (u.prototype.readDoubleLE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8)
          )
        }),
        (u.prototype.readDoubleBE = function(t, e) {
          return (
            (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8)
          )
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255
          return e + r
        }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE = function(
          t,
          e,
          r,
          n
        ) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) ||
            x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255
          return e + r
        }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 255, 0),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(
          t,
          e,
          r
        ) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeIntLE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[e] = 255 & t; ++o < r && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeIntBE = function(t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            x(this, t, e, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
              (this[e + o] = (((t / s) | 0) - a) & 255)
          return e + r
        }),
        (u.prototype.writeInt8 = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (u.prototype.writeInt16LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (u.prototype.writeInt16BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (u.prototype.writeInt32LE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (u.prototype.writeInt32BE = function(t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || x(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (u.prototype.writeFloatLE = function(t, e, r) {
          return N(this, t, e, !0, r)
        }),
        (u.prototype.writeFloatBE = function(t, e, r) {
          return N(this, t, e, !1, r)
        }),
        (u.prototype.writeDoubleLE = function(t, e, r) {
          return D(this, t, e, !0, r)
        }),
        (u.prototype.writeDoubleBE = function(t, e, r) {
          return D(this, t, e, !1, r)
        }),
        (u.prototype.copy = function(t, e, r, n) {
          if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (u.prototype.fill = function(t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !u.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i = t.charCodeAt(0)
              ;(('utf8' === n && i < 128) || 'latin1' === n) && (t = i)
            }
          } else
            'number' === typeof t
              ? (t &= 255)
              : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var o
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t
          else {
            var s = u.isBuffer(t) ? t : u.from(t, n),
              a = s.length
            if (0 === a)
              throw new TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              )
            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
          }
          return this
        })
      var P = /[^+/0-9A-Za-z-_]/g
      function O(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            )
          }
        }
        return o
      }
      function j(t) {
        return n.toByteArray(
          (function(t) {
            if ((t = (t = t.split('=')[0]).trim().replace(P, '')).length < 2)
              return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function K(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i]
        return i
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var q = (function() {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    24713: function(t, e, r) {
      'use strict'
      var n = r(17383).default,
        i = r(34579).default,
        o = (function() {
          return i(
            function t(e, r, i, o) {
              n(this, t),
                (this.name = e),
                (this.code = r),
                (this.alphabet = o),
                i && o && (this.engine = i(o))
            },
            [
              {
                key: 'encode',
                value: function(t) {
                  return this.engine.encode(t)
                }
              },
              {
                key: 'decode',
                value: function(t) {
                  return this.engine.decode(t)
                }
              },
              {
                key: 'isImplemented',
                value: function() {
                  return this.engine
                }
              }
            ]
          )
        })()
      t.exports = o
    },
    58386: function(t, e, r) {
      'use strict'
      var n = r(50883).default,
        i = r(67295).Buffer
      t.exports = function(t) {
        return {
          encode: function(t) {
            return 'string' === typeof t
              ? i.from(t).toString('hex')
              : t.toString('hex')
          },
          decode: function(e) {
            var r,
              o = n(e)
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var s = r.value
                if (t.indexOf(s) < 0)
                  throw new Error('invalid base16 character')
              }
            } catch (a) {
              o.e(a)
            } finally {
              o.f()
            }
            return i.from(e, 'hex')
          }
        }
      }
    },
    36380: function(t, e, r) {
      'use strict'
      var n = r(50883).default
      function i(t, e) {
        var r = t.byteLength,
          n = new Uint8Array(t),
          i = e.indexOf('=') === e.length - 1
        i && (e = e.substring(0, e.length - 1))
        for (var o = 0, s = 0, a = '', u = 0; u < r; u++)
          for (s = (s << 8) | n[u], o += 8; o >= 5; )
            (a += e[(s >>> (o - 5)) & 31]), (o -= 5)
        if ((o > 0 && (a += e[(s << (5 - o)) & 31]), i))
          for (; a.length % 8 !== 0; ) a += '='
        return a
      }
      t.exports = function(t) {
        return {
          encode: function(e) {
            return i('string' === typeof e ? Uint8Array.from(e) : e, t)
          },
          decode: function(e) {
            var r,
              i = n(e)
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var o = r.value
                if (t.indexOf(o) < 0)
                  throw new Error('invalid base32 character')
              }
            } catch (s) {
              i.e(s)
            } finally {
              i.f()
            }
            return (function(t, e) {
              for (
                var r = (t = t.replace(new RegExp('=', 'g'), '')).length,
                  n = 0,
                  i = 0,
                  o = 0,
                  s = new Uint8Array(((5 * r) / 8) | 0),
                  a = 0;
                a < r;
                a++
              )
                (i = (i << 5) | e.indexOf(t[a])),
                  (n += 5) >= 8 && ((s[o++] = (i >>> (n - 8)) & 255), (n -= 8))
              return s.buffer
            })(e, t)
          }
        }
      }
    },
    68267: function(t, e, r) {
      'use strict'
      var n = r(50883).default,
        i = r(67295).Buffer
      t.exports = function(t) {
        var e = t.indexOf('=') > -1,
          r = t.indexOf('-') > -1 && t.indexOf('_') > -1
        return {
          encode: function(t) {
            var n = ''
            ;(n =
              'string' === typeof t
                ? i.from(t).toString('base64')
                : t.toString('base64')),
              r && (n = n.replace(/\+/g, '-').replace(/\//g, '_'))
            var o = n.indexOf('=')
            return o > 0 && !e && (n = n.substring(0, o)), n
          },
          decode: function(e) {
            var r,
              o = n(e)
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var s = r.value
                if (t.indexOf(s) < 0)
                  throw new Error('invalid base64 character')
              }
            } catch (a) {
              o.e(a)
            } finally {
              o.f()
            }
            return i.from(e, 'base64')
          }
        }
      }
    },
    48251: function(t, e, r) {
      'use strict'
      var n = r(24713),
        i = r(66281),
        o = r(58386),
        s = r(36380),
        a = r(68267),
        u = [
          ['base1', '1', '', '1'],
          ['base2', '0', i, '01'],
          ['base8', '7', i, '01234567'],
          ['base10', '9', i, '0123456789'],
          ['base16', 'f', o, '0123456789abcdef'],
          ['base32', 'b', s, 'abcdefghijklmnopqrstuvwxyz234567'],
          ['base32pad', 'c', s, 'abcdefghijklmnopqrstuvwxyz234567='],
          ['base32hex', 'v', s, '0123456789abcdefghijklmnopqrstuv'],
          ['base32hexpad', 't', s, '0123456789abcdefghijklmnopqrstuv='],
          ['base32z', 'h', s, 'ybndrfg8ejkmcpqxot1uwisza345h769'],
          [
            'base58flickr',
            'Z',
            i,
            '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
          ],
          [
            'base58btc',
            'z',
            i,
            '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
          ],
          [
            'base64',
            'm',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          ],
          [
            'base64pad',
            'M',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
          ],
          [
            'base64url',
            'u',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
          ],
          [
            'base64urlpad',
            'U',
            a,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_='
          ]
        ],
        h = u.reduce(function(t, e) {
          return (t[e[0]] = new n(e[0], e[1], e[2], e[3])), t
        }, {}),
        f = u.reduce(function(t, e) {
          return (t[e[1]] = h[e[0]]), t
        }, {})
      t.exports = { names: h, codes: f }
    },
    27978: function(t, e, r) {
      'use strict'
      var n = r(67295).Buffer,
        i = r(48251)
      function o(t, e) {
        if (!e) throw new Error('requires an encoded buffer')
        var r = s(t),
          i = n.from(r.code)
        return (
          (function(t, e) {
            var r = s(t)
            r.decode(e.toString())
          })(r.name, e),
          n.concat([i, e])
        )
      }
      function s(t) {
        var e
        if (i.names[t]) e = i.names[t]
        else {
          if (!i.codes[t]) throw new Error('Unsupported encoding')
          e = i.codes[t]
        }
        if (!e.isImplemented())
          throw new Error('Base ' + t + ' is not implemented yet')
        return e
      }
      ;((e = t.exports = o).encode = function(t, e) {
        var r = s(t)
        return o(r.name, n.from(r.encode(e)))
      }),
        (e.decode = function(t) {
          n.isBuffer(t) && (t = t.toString())
          var e = t.substring(0, 1)
          'string' === typeof (t = t.substring(1, t.length)) && (t = n.from(t))
          var r = s(e)
          return n.from(r.decode(t.toString()))
        }),
        (e.isEncoded = function(t) {
          n.isBuffer(t) && (t = t.toString())
          if ('[object String]' !== Object.prototype.toString.call(t)) return !1
          var e = t.substring(0, 1)
          try {
            return s(e).name
          } catch (r) {
            return !1
          }
        }),
        (e.names = Object.freeze(Object.keys(i.names))),
        (e.codes = Object.freeze(Object.keys(i.codes)))
    },
    33137: function(t, e) {
      'use strict'
      ;(e.names = Object.freeze({
        identity: 0,
        sha1: 17,
        'sha2-256': 18,
        'sha2-512': 19,
        'dbl-sha2-256': 86,
        'sha3-224': 23,
        'sha3-256': 22,
        'sha3-384': 21,
        'sha3-512': 20,
        'shake-128': 24,
        'shake-256': 25,
        'keccak-224': 26,
        'keccak-256': 27,
        'keccak-384': 28,
        'keccak-512': 29,
        'murmur3-128': 34,
        'murmur3-32': 35,
        md4: 212,
        md5: 213,
        'blake2b-8': 45569,
        'blake2b-16': 45570,
        'blake2b-24': 45571,
        'blake2b-32': 45572,
        'blake2b-40': 45573,
        'blake2b-48': 45574,
        'blake2b-56': 45575,
        'blake2b-64': 45576,
        'blake2b-72': 45577,
        'blake2b-80': 45578,
        'blake2b-88': 45579,
        'blake2b-96': 45580,
        'blake2b-104': 45581,
        'blake2b-112': 45582,
        'blake2b-120': 45583,
        'blake2b-128': 45584,
        'blake2b-136': 45585,
        'blake2b-144': 45586,
        'blake2b-152': 45587,
        'blake2b-160': 45588,
        'blake2b-168': 45589,
        'blake2b-176': 45590,
        'blake2b-184': 45591,
        'blake2b-192': 45592,
        'blake2b-200': 45593,
        'blake2b-208': 45594,
        'blake2b-216': 45595,
        'blake2b-224': 45596,
        'blake2b-232': 45597,
        'blake2b-240': 45598,
        'blake2b-248': 45599,
        'blake2b-256': 45600,
        'blake2b-264': 45601,
        'blake2b-272': 45602,
        'blake2b-280': 45603,
        'blake2b-288': 45604,
        'blake2b-296': 45605,
        'blake2b-304': 45606,
        'blake2b-312': 45607,
        'blake2b-320': 45608,
        'blake2b-328': 45609,
        'blake2b-336': 45610,
        'blake2b-344': 45611,
        'blake2b-352': 45612,
        'blake2b-360': 45613,
        'blake2b-368': 45614,
        'blake2b-376': 45615,
        'blake2b-384': 45616,
        'blake2b-392': 45617,
        'blake2b-400': 45618,
        'blake2b-408': 45619,
        'blake2b-416': 45620,
        'blake2b-424': 45621,
        'blake2b-432': 45622,
        'blake2b-440': 45623,
        'blake2b-448': 45624,
        'blake2b-456': 45625,
        'blake2b-464': 45626,
        'blake2b-472': 45627,
        'blake2b-480': 45628,
        'blake2b-488': 45629,
        'blake2b-496': 45630,
        'blake2b-504': 45631,
        'blake2b-512': 45632,
        'blake2s-8': 45633,
        'blake2s-16': 45634,
        'blake2s-24': 45635,
        'blake2s-32': 45636,
        'blake2s-40': 45637,
        'blake2s-48': 45638,
        'blake2s-56': 45639,
        'blake2s-64': 45640,
        'blake2s-72': 45641,
        'blake2s-80': 45642,
        'blake2s-88': 45643,
        'blake2s-96': 45644,
        'blake2s-104': 45645,
        'blake2s-112': 45646,
        'blake2s-120': 45647,
        'blake2s-128': 45648,
        'blake2s-136': 45649,
        'blake2s-144': 45650,
        'blake2s-152': 45651,
        'blake2s-160': 45652,
        'blake2s-168': 45653,
        'blake2s-176': 45654,
        'blake2s-184': 45655,
        'blake2s-192': 45656,
        'blake2s-200': 45657,
        'blake2s-208': 45658,
        'blake2s-216': 45659,
        'blake2s-224': 45660,
        'blake2s-232': 45661,
        'blake2s-240': 45662,
        'blake2s-248': 45663,
        'blake2s-256': 45664,
        'Skein256-8': 45825,
        'Skein256-16': 45826,
        'Skein256-24': 45827,
        'Skein256-32': 45828,
        'Skein256-40': 45829,
        'Skein256-48': 45830,
        'Skein256-56': 45831,
        'Skein256-64': 45832,
        'Skein256-72': 45833,
        'Skein256-80': 45834,
        'Skein256-88': 45835,
        'Skein256-96': 45836,
        'Skein256-104': 45837,
        'Skein256-112': 45838,
        'Skein256-120': 45839,
        'Skein256-128': 45840,
        'Skein256-136': 45841,
        'Skein256-144': 45842,
        'Skein256-152': 45843,
        'Skein256-160': 45844,
        'Skein256-168': 45845,
        'Skein256-176': 45846,
        'Skein256-184': 45847,
        'Skein256-192': 45848,
        'Skein256-200': 45849,
        'Skein256-208': 45850,
        'Skein256-216': 45851,
        'Skein256-224': 45852,
        'Skein256-232': 45853,
        'Skein256-240': 45854,
        'Skein256-248': 45855,
        'Skein256-256': 45856,
        'Skein512-8': 45857,
        'Skein512-16': 45858,
        'Skein512-24': 45859,
        'Skein512-32': 45860,
        'Skein512-40': 45861,
        'Skein512-48': 45862,
        'Skein512-56': 45863,
        'Skein512-64': 45864,
        'Skein512-72': 45865,
        'Skein512-80': 45866,
        'Skein512-88': 45867,
        'Skein512-96': 45868,
        'Skein512-104': 45869,
        'Skein512-112': 45870,
        'Skein512-120': 45871,
        'Skein512-128': 45872,
        'Skein512-136': 45873,
        'Skein512-144': 45874,
        'Skein512-152': 45875,
        'Skein512-160': 45876,
        'Skein512-168': 45877,
        'Skein512-176': 45878,
        'Skein512-184': 45879,
        'Skein512-192': 45880,
        'Skein512-200': 45881,
        'Skein512-208': 45882,
        'Skein512-216': 45883,
        'Skein512-224': 45884,
        'Skein512-232': 45885,
        'Skein512-240': 45886,
        'Skein512-248': 45887,
        'Skein512-256': 45888,
        'Skein512-264': 45889,
        'Skein512-272': 45890,
        'Skein512-280': 45891,
        'Skein512-288': 45892,
        'Skein512-296': 45893,
        'Skein512-304': 45894,
        'Skein512-312': 45895,
        'Skein512-320': 45896,
        'Skein512-328': 45897,
        'Skein512-336': 45898,
        'Skein512-344': 45899,
        'Skein512-352': 45900,
        'Skein512-360': 45901,
        'Skein512-368': 45902,
        'Skein512-376': 45903,
        'Skein512-384': 45904,
        'Skein512-392': 45905,
        'Skein512-400': 45906,
        'Skein512-408': 45907,
        'Skein512-416': 45908,
        'Skein512-424': 45909,
        'Skein512-432': 45910,
        'Skein512-440': 45911,
        'Skein512-448': 45912,
        'Skein512-456': 45913,
        'Skein512-464': 45914,
        'Skein512-472': 45915,
        'Skein512-480': 45916,
        'Skein512-488': 45917,
        'Skein512-496': 45918,
        'Skein512-504': 45919,
        'Skein512-512': 45920,
        'Skein1024-8': 45921,
        'Skein1024-16': 45922,
        'Skein1024-24': 45923,
        'Skein1024-32': 45924,
        'Skein1024-40': 45925,
        'Skein1024-48': 45926,
        'Skein1024-56': 45927,
        'Skein1024-64': 45928,
        'Skein1024-72': 45929,
        'Skein1024-80': 45930,
        'Skein1024-88': 45931,
        'Skein1024-96': 45932,
        'Skein1024-104': 45933,
        'Skein1024-112': 45934,
        'Skein1024-120': 45935,
        'Skein1024-128': 45936,
        'Skein1024-136': 45937,
        'Skein1024-144': 45938,
        'Skein1024-152': 45939,
        'Skein1024-160': 45940,
        'Skein1024-168': 45941,
        'Skein1024-176': 45942,
        'Skein1024-184': 45943,
        'Skein1024-192': 45944,
        'Skein1024-200': 45945,
        'Skein1024-208': 45946,
        'Skein1024-216': 45947,
        'Skein1024-224': 45948,
        'Skein1024-232': 45949,
        'Skein1024-240': 45950,
        'Skein1024-248': 45951,
        'Skein1024-256': 45952,
        'Skein1024-264': 45953,
        'Skein1024-272': 45954,
        'Skein1024-280': 45955,
        'Skein1024-288': 45956,
        'Skein1024-296': 45957,
        'Skein1024-304': 45958,
        'Skein1024-312': 45959,
        'Skein1024-320': 45960,
        'Skein1024-328': 45961,
        'Skein1024-336': 45962,
        'Skein1024-344': 45963,
        'Skein1024-352': 45964,
        'Skein1024-360': 45965,
        'Skein1024-368': 45966,
        'Skein1024-376': 45967,
        'Skein1024-384': 45968,
        'Skein1024-392': 45969,
        'Skein1024-400': 45970,
        'Skein1024-408': 45971,
        'Skein1024-416': 45972,
        'Skein1024-424': 45973,
        'Skein1024-432': 45974,
        'Skein1024-440': 45975,
        'Skein1024-448': 45976,
        'Skein1024-456': 45977,
        'Skein1024-464': 45978,
        'Skein1024-472': 45979,
        'Skein1024-480': 45980,
        'Skein1024-488': 45981,
        'Skein1024-496': 45982,
        'Skein1024-504': 45983,
        'Skein1024-512': 45984,
        'Skein1024-520': 45985,
        'Skein1024-528': 45986,
        'Skein1024-536': 45987,
        'Skein1024-544': 45988,
        'Skein1024-552': 45989,
        'Skein1024-560': 45990,
        'Skein1024-568': 45991,
        'Skein1024-576': 45992,
        'Skein1024-584': 45993,
        'Skein1024-592': 45994,
        'Skein1024-600': 45995,
        'Skein1024-608': 45996,
        'Skein1024-616': 45997,
        'Skein1024-624': 45998,
        'Skein1024-632': 45999,
        'Skein1024-640': 46e3,
        'Skein1024-648': 46001,
        'Skein1024-656': 46002,
        'Skein1024-664': 46003,
        'Skein1024-672': 46004,
        'Skein1024-680': 46005,
        'Skein1024-688': 46006,
        'Skein1024-696': 46007,
        'Skein1024-704': 46008,
        'Skein1024-712': 46009,
        'Skein1024-720': 46010,
        'Skein1024-728': 46011,
        'Skein1024-736': 46012,
        'Skein1024-744': 46013,
        'Skein1024-752': 46014,
        'Skein1024-760': 46015,
        'Skein1024-768': 46016,
        'Skein1024-776': 46017,
        'Skein1024-784': 46018,
        'Skein1024-792': 46019,
        'Skein1024-800': 46020,
        'Skein1024-808': 46021,
        'Skein1024-816': 46022,
        'Skein1024-824': 46023,
        'Skein1024-832': 46024,
        'Skein1024-840': 46025,
        'Skein1024-848': 46026,
        'Skein1024-856': 46027,
        'Skein1024-864': 46028,
        'Skein1024-872': 46029,
        'Skein1024-880': 46030,
        'Skein1024-888': 46031,
        'Skein1024-896': 46032,
        'Skein1024-904': 46033,
        'Skein1024-912': 46034,
        'Skein1024-920': 46035,
        'Skein1024-928': 46036,
        'Skein1024-936': 46037,
        'Skein1024-944': 46038,
        'Skein1024-952': 46039,
        'Skein1024-960': 46040,
        'Skein1024-968': 46041,
        'Skein1024-976': 46042,
        'Skein1024-984': 46043,
        'Skein1024-992': 46044,
        'Skein1024-1000': 46045,
        'Skein1024-1008': 46046,
        'Skein1024-1016': 46047,
        'Skein1024-1024': 46048
      })),
        (e.codes = Object.freeze({
          0: 'identity',
          17: 'sha1',
          18: 'sha2-256',
          19: 'sha2-512',
          86: 'dbl-sha2-256',
          23: 'sha3-224',
          22: 'sha3-256',
          21: 'sha3-384',
          20: 'sha3-512',
          24: 'shake-128',
          25: 'shake-256',
          26: 'keccak-224',
          27: 'keccak-256',
          28: 'keccak-384',
          29: 'keccak-512',
          34: 'murmur3-128',
          35: 'murmur3-32',
          212: 'md4',
          213: 'md5',
          45569: 'blake2b-8',
          45570: 'blake2b-16',
          45571: 'blake2b-24',
          45572: 'blake2b-32',
          45573: 'blake2b-40',
          45574: 'blake2b-48',
          45575: 'blake2b-56',
          45576: 'blake2b-64',
          45577: 'blake2b-72',
          45578: 'blake2b-80',
          45579: 'blake2b-88',
          45580: 'blake2b-96',
          45581: 'blake2b-104',
          45582: 'blake2b-112',
          45583: 'blake2b-120',
          45584: 'blake2b-128',
          45585: 'blake2b-136',
          45586: 'blake2b-144',
          45587: 'blake2b-152',
          45588: 'blake2b-160',
          45589: 'blake2b-168',
          45590: 'blake2b-176',
          45591: 'blake2b-184',
          45592: 'blake2b-192',
          45593: 'blake2b-200',
          45594: 'blake2b-208',
          45595: 'blake2b-216',
          45596: 'blake2b-224',
          45597: 'blake2b-232',
          45598: 'blake2b-240',
          45599: 'blake2b-248',
          45600: 'blake2b-256',
          45601: 'blake2b-264',
          45602: 'blake2b-272',
          45603: 'blake2b-280',
          45604: 'blake2b-288',
          45605: 'blake2b-296',
          45606: 'blake2b-304',
          45607: 'blake2b-312',
          45608: 'blake2b-320',
          45609: 'blake2b-328',
          45610: 'blake2b-336',
          45611: 'blake2b-344',
          45612: 'blake2b-352',
          45613: 'blake2b-360',
          45614: 'blake2b-368',
          45615: 'blake2b-376',
          45616: 'blake2b-384',
          45617: 'blake2b-392',
          45618: 'blake2b-400',
          45619: 'blake2b-408',
          45620: 'blake2b-416',
          45621: 'blake2b-424',
          45622: 'blake2b-432',
          45623: 'blake2b-440',
          45624: 'blake2b-448',
          45625: 'blake2b-456',
          45626: 'blake2b-464',
          45627: 'blake2b-472',
          45628: 'blake2b-480',
          45629: 'blake2b-488',
          45630: 'blake2b-496',
          45631: 'blake2b-504',
          45632: 'blake2b-512',
          45633: 'blake2s-8',
          45634: 'blake2s-16',
          45635: 'blake2s-24',
          45636: 'blake2s-32',
          45637: 'blake2s-40',
          45638: 'blake2s-48',
          45639: 'blake2s-56',
          45640: 'blake2s-64',
          45641: 'blake2s-72',
          45642: 'blake2s-80',
          45643: 'blake2s-88',
          45644: 'blake2s-96',
          45645: 'blake2s-104',
          45646: 'blake2s-112',
          45647: 'blake2s-120',
          45648: 'blake2s-128',
          45649: 'blake2s-136',
          45650: 'blake2s-144',
          45651: 'blake2s-152',
          45652: 'blake2s-160',
          45653: 'blake2s-168',
          45654: 'blake2s-176',
          45655: 'blake2s-184',
          45656: 'blake2s-192',
          45657: 'blake2s-200',
          45658: 'blake2s-208',
          45659: 'blake2s-216',
          45660: 'blake2s-224',
          45661: 'blake2s-232',
          45662: 'blake2s-240',
          45663: 'blake2s-248',
          45664: 'blake2s-256',
          45825: 'Skein256-8',
          45826: 'Skein256-16',
          45827: 'Skein256-24',
          45828: 'Skein256-32',
          45829: 'Skein256-40',
          45830: 'Skein256-48',
          45831: 'Skein256-56',
          45832: 'Skein256-64',
          45833: 'Skein256-72',
          45834: 'Skein256-80',
          45835: 'Skein256-88',
          45836: 'Skein256-96',
          45837: 'Skein256-104',
          45838: 'Skein256-112',
          45839: 'Skein256-120',
          45840: 'Skein256-128',
          45841: 'Skein256-136',
          45842: 'Skein256-144',
          45843: 'Skein256-152',
          45844: 'Skein256-160',
          45845: 'Skein256-168',
          45846: 'Skein256-176',
          45847: 'Skein256-184',
          45848: 'Skein256-192',
          45849: 'Skein256-200',
          45850: 'Skein256-208',
          45851: 'Skein256-216',
          45852: 'Skein256-224',
          45853: 'Skein256-232',
          45854: 'Skein256-240',
          45855: 'Skein256-248',
          45856: 'Skein256-256',
          45857: 'Skein512-8',
          45858: 'Skein512-16',
          45859: 'Skein512-24',
          45860: 'Skein512-32',
          45861: 'Skein512-40',
          45862: 'Skein512-48',
          45863: 'Skein512-56',
          45864: 'Skein512-64',
          45865: 'Skein512-72',
          45866: 'Skein512-80',
          45867: 'Skein512-88',
          45868: 'Skein512-96',
          45869: 'Skein512-104',
          45870: 'Skein512-112',
          45871: 'Skein512-120',
          45872: 'Skein512-128',
          45873: 'Skein512-136',
          45874: 'Skein512-144',
          45875: 'Skein512-152',
          45876: 'Skein512-160',
          45877: 'Skein512-168',
          45878: 'Skein512-176',
          45879: 'Skein512-184',
          45880: 'Skein512-192',
          45881: 'Skein512-200',
          45882: 'Skein512-208',
          45883: 'Skein512-216',
          45884: 'Skein512-224',
          45885: 'Skein512-232',
          45886: 'Skein512-240',
          45887: 'Skein512-248',
          45888: 'Skein512-256',
          45889: 'Skein512-264',
          45890: 'Skein512-272',
          45891: 'Skein512-280',
          45892: 'Skein512-288',
          45893: 'Skein512-296',
          45894: 'Skein512-304',
          45895: 'Skein512-312',
          45896: 'Skein512-320',
          45897: 'Skein512-328',
          45898: 'Skein512-336',
          45899: 'Skein512-344',
          45900: 'Skein512-352',
          45901: 'Skein512-360',
          45902: 'Skein512-368',
          45903: 'Skein512-376',
          45904: 'Skein512-384',
          45905: 'Skein512-392',
          45906: 'Skein512-400',
          45907: 'Skein512-408',
          45908: 'Skein512-416',
          45909: 'Skein512-424',
          45910: 'Skein512-432',
          45911: 'Skein512-440',
          45912: 'Skein512-448',
          45913: 'Skein512-456',
          45914: 'Skein512-464',
          45915: 'Skein512-472',
          45916: 'Skein512-480',
          45917: 'Skein512-488',
          45918: 'Skein512-496',
          45919: 'Skein512-504',
          45920: 'Skein512-512',
          45921: 'Skein1024-8',
          45922: 'Skein1024-16',
          45923: 'Skein1024-24',
          45924: 'Skein1024-32',
          45925: 'Skein1024-40',
          45926: 'Skein1024-48',
          45927: 'Skein1024-56',
          45928: 'Skein1024-64',
          45929: 'Skein1024-72',
          45930: 'Skein1024-80',
          45931: 'Skein1024-88',
          45932: 'Skein1024-96',
          45933: 'Skein1024-104',
          45934: 'Skein1024-112',
          45935: 'Skein1024-120',
          45936: 'Skein1024-128',
          45937: 'Skein1024-136',
          45938: 'Skein1024-144',
          45939: 'Skein1024-152',
          45940: 'Skein1024-160',
          45941: 'Skein1024-168',
          45942: 'Skein1024-176',
          45943: 'Skein1024-184',
          45944: 'Skein1024-192',
          45945: 'Skein1024-200',
          45946: 'Skein1024-208',
          45947: 'Skein1024-216',
          45948: 'Skein1024-224',
          45949: 'Skein1024-232',
          45950: 'Skein1024-240',
          45951: 'Skein1024-248',
          45952: 'Skein1024-256',
          45953: 'Skein1024-264',
          45954: 'Skein1024-272',
          45955: 'Skein1024-280',
          45956: 'Skein1024-288',
          45957: 'Skein1024-296',
          45958: 'Skein1024-304',
          45959: 'Skein1024-312',
          45960: 'Skein1024-320',
          45961: 'Skein1024-328',
          45962: 'Skein1024-336',
          45963: 'Skein1024-344',
          45964: 'Skein1024-352',
          45965: 'Skein1024-360',
          45966: 'Skein1024-368',
          45967: 'Skein1024-376',
          45968: 'Skein1024-384',
          45969: 'Skein1024-392',
          45970: 'Skein1024-400',
          45971: 'Skein1024-408',
          45972: 'Skein1024-416',
          45973: 'Skein1024-424',
          45974: 'Skein1024-432',
          45975: 'Skein1024-440',
          45976: 'Skein1024-448',
          45977: 'Skein1024-456',
          45978: 'Skein1024-464',
          45979: 'Skein1024-472',
          45980: 'Skein1024-480',
          45981: 'Skein1024-488',
          45982: 'Skein1024-496',
          45983: 'Skein1024-504',
          45984: 'Skein1024-512',
          45985: 'Skein1024-520',
          45986: 'Skein1024-528',
          45987: 'Skein1024-536',
          45988: 'Skein1024-544',
          45989: 'Skein1024-552',
          45990: 'Skein1024-560',
          45991: 'Skein1024-568',
          45992: 'Skein1024-576',
          45993: 'Skein1024-584',
          45994: 'Skein1024-592',
          45995: 'Skein1024-600',
          45996: 'Skein1024-608',
          45997: 'Skein1024-616',
          45998: 'Skein1024-624',
          45999: 'Skein1024-632',
          46e3: 'Skein1024-640',
          46001: 'Skein1024-648',
          46002: 'Skein1024-656',
          46003: 'Skein1024-664',
          46004: 'Skein1024-672',
          46005: 'Skein1024-680',
          46006: 'Skein1024-688',
          46007: 'Skein1024-696',
          46008: 'Skein1024-704',
          46009: 'Skein1024-712',
          46010: 'Skein1024-720',
          46011: 'Skein1024-728',
          46012: 'Skein1024-736',
          46013: 'Skein1024-744',
          46014: 'Skein1024-752',
          46015: 'Skein1024-760',
          46016: 'Skein1024-768',
          46017: 'Skein1024-776',
          46018: 'Skein1024-784',
          46019: 'Skein1024-792',
          46020: 'Skein1024-800',
          46021: 'Skein1024-808',
          46022: 'Skein1024-816',
          46023: 'Skein1024-824',
          46024: 'Skein1024-832',
          46025: 'Skein1024-840',
          46026: 'Skein1024-848',
          46027: 'Skein1024-856',
          46028: 'Skein1024-864',
          46029: 'Skein1024-872',
          46030: 'Skein1024-880',
          46031: 'Skein1024-888',
          46032: 'Skein1024-896',
          46033: 'Skein1024-904',
          46034: 'Skein1024-912',
          46035: 'Skein1024-920',
          46036: 'Skein1024-928',
          46037: 'Skein1024-936',
          46038: 'Skein1024-944',
          46039: 'Skein1024-952',
          46040: 'Skein1024-960',
          46041: 'Skein1024-968',
          46042: 'Skein1024-976',
          46043: 'Skein1024-984',
          46044: 'Skein1024-992',
          46045: 'Skein1024-1000',
          46046: 'Skein1024-1008',
          46047: 'Skein1024-1016',
          46048: 'Skein1024-1024'
        })),
        (e.defaultLengths = Object.freeze({
          17: 20,
          18: 32,
          19: 64,
          86: 32,
          23: 28,
          22: 32,
          21: 48,
          20: 64,
          24: 32,
          25: 64,
          26: 28,
          27: 32,
          28: 48,
          29: 64,
          34: 32,
          45569: 1,
          45570: 2,
          45571: 3,
          45572: 4,
          45573: 5,
          45574: 6,
          45575: 7,
          45576: 8,
          45577: 9,
          45578: 10,
          45579: 11,
          45580: 12,
          45581: 13,
          45582: 14,
          45583: 15,
          45584: 16,
          45585: 17,
          45586: 18,
          45587: 19,
          45588: 20,
          45589: 21,
          45590: 22,
          45591: 23,
          45592: 24,
          45593: 25,
          45594: 26,
          45595: 27,
          45596: 28,
          45597: 29,
          45598: 30,
          45599: 31,
          45600: 32,
          45601: 33,
          45602: 34,
          45603: 35,
          45604: 36,
          45605: 37,
          45606: 38,
          45607: 39,
          45608: 40,
          45609: 41,
          45610: 42,
          45611: 43,
          45612: 44,
          45613: 45,
          45614: 46,
          45615: 47,
          45616: 48,
          45617: 49,
          45618: 50,
          45619: 51,
          45620: 52,
          45621: 53,
          45622: 54,
          45623: 55,
          45624: 56,
          45625: 57,
          45626: 58,
          45627: 59,
          45628: 60,
          45629: 61,
          45630: 62,
          45631: 63,
          45632: 64,
          45633: 1,
          45634: 2,
          45635: 3,
          45636: 4,
          45637: 5,
          45638: 6,
          45639: 7,
          45640: 8,
          45641: 9,
          45642: 10,
          45643: 11,
          45644: 12,
          45645: 13,
          45646: 14,
          45647: 15,
          45648: 16,
          45649: 17,
          45650: 18,
          45651: 19,
          45652: 20,
          45653: 21,
          45654: 22,
          45655: 23,
          45656: 24,
          45657: 25,
          45658: 26,
          45659: 27,
          45660: 28,
          45661: 29,
          45662: 30,
          45663: 31,
          45664: 32,
          45825: 1,
          45826: 2,
          45827: 3,
          45828: 4,
          45829: 5,
          45830: 6,
          45831: 7,
          45832: 8,
          45833: 9,
          45834: 10,
          45835: 11,
          45836: 12,
          45837: 13,
          45838: 14,
          45839: 15,
          45840: 16,
          45841: 17,
          45842: 18,
          45843: 19,
          45844: 20,
          45845: 21,
          45846: 22,
          45847: 23,
          45848: 24,
          45849: 25,
          45850: 26,
          45851: 27,
          45852: 28,
          45853: 29,
          45854: 30,
          45855: 31,
          45856: 32,
          45857: 1,
          45858: 2,
          45859: 3,
          45860: 4,
          45861: 5,
          45862: 6,
          45863: 7,
          45864: 8,
          45865: 9,
          45866: 10,
          45867: 11,
          45868: 12,
          45869: 13,
          45870: 14,
          45871: 15,
          45872: 16,
          45873: 17,
          45874: 18,
          45875: 19,
          45876: 20,
          45877: 21,
          45878: 22,
          45879: 23,
          45880: 24,
          45881: 25,
          45882: 26,
          45883: 27,
          45884: 28,
          45885: 29,
          45886: 30,
          45887: 31,
          45888: 32,
          45889: 33,
          45890: 34,
          45891: 35,
          45892: 36,
          45893: 37,
          45894: 38,
          45895: 39,
          45896: 40,
          45897: 41,
          45898: 42,
          45899: 43,
          45900: 44,
          45901: 45,
          45902: 46,
          45903: 47,
          45904: 48,
          45905: 49,
          45906: 50,
          45907: 51,
          45908: 52,
          45909: 53,
          45910: 54,
          45911: 55,
          45912: 56,
          45913: 57,
          45914: 58,
          45915: 59,
          45916: 60,
          45917: 61,
          45918: 62,
          45919: 63,
          45920: 64,
          45921: 1,
          45922: 2,
          45923: 3,
          45924: 4,
          45925: 5,
          45926: 6,
          45927: 7,
          45928: 8,
          45929: 9,
          45930: 10,
          45931: 11,
          45932: 12,
          45933: 13,
          45934: 14,
          45935: 15,
          45936: 16,
          45937: 17,
          45938: 18,
          45939: 19,
          45940: 20,
          45941: 21,
          45942: 22,
          45943: 23,
          45944: 24,
          45945: 25,
          45946: 26,
          45947: 27,
          45948: 28,
          45949: 29,
          45950: 30,
          45951: 31,
          45952: 32,
          45953: 33,
          45954: 34,
          45955: 35,
          45956: 36,
          45957: 37,
          45958: 38,
          45959: 39,
          45960: 40,
          45961: 41,
          45962: 42,
          45963: 43,
          45964: 44,
          45965: 45,
          45966: 46,
          45967: 47,
          45968: 48,
          45969: 49,
          45970: 50,
          45971: 51,
          45972: 52,
          45973: 53,
          45974: 54,
          45975: 55,
          45976: 56,
          45977: 57,
          45978: 58,
          45979: 59,
          45980: 60,
          45981: 61,
          45982: 62,
          45983: 63,
          45984: 64,
          45985: 65,
          45986: 66,
          45987: 67,
          45988: 68,
          45989: 69,
          45990: 70,
          45991: 71,
          45992: 72,
          45993: 73,
          45994: 74,
          45995: 75,
          45996: 76,
          45997: 77,
          45998: 78,
          45999: 79,
          46e3: 80,
          46001: 81,
          46002: 82,
          46003: 83,
          46004: 84,
          46005: 85,
          46006: 86,
          46007: 87,
          46008: 88,
          46009: 89,
          46010: 90,
          46011: 91,
          46012: 92,
          46013: 93,
          46014: 94,
          46015: 95,
          46016: 96,
          46017: 97,
          46018: 98,
          46019: 99,
          46020: 100,
          46021: 101,
          46022: 102,
          46023: 103,
          46024: 104,
          46025: 105,
          46026: 106,
          46027: 107,
          46028: 108,
          46029: 109,
          46030: 110,
          46031: 111,
          46032: 112,
          46033: 113,
          46034: 114,
          46035: 115,
          46036: 116,
          46037: 117,
          46038: 118,
          46039: 119,
          46040: 120,
          46041: 121,
          46042: 122,
          46043: 123,
          46044: 124,
          46045: 125,
          46046: 126,
          46047: 127,
          46048: 128
        }))
    },
    63180: function(t, e, r) {
      'use strict'
      var n = r(67295).Buffer,
        i = r(27978),
        o = r(21870),
        s = r(33137)
      function a(t) {
        e.decode(t)
      }
      ;(e.names = s.names),
        (e.codes = s.codes),
        (e.defaultLengths = s.defaultLengths),
        (e.toHexString = function(t) {
          if (!n.isBuffer(t)) throw new Error('must be passed a buffer')
          return t.toString('hex')
        }),
        (e.fromHexString = function(t) {
          return n.from(t, 'hex')
        }),
        (e.toB58String = function(t) {
          if (!n.isBuffer(t)) throw new Error('must be passed a buffer')
          return i
            .encode('base58btc', t)
            .toString()
            .slice(1)
        }),
        (e.fromB58String = function(t) {
          var e = t
          return n.isBuffer(t) && (e = t.toString()), i.decode('z' + e)
        }),
        (e.decode = function(t) {
          if (!n.isBuffer(t)) throw new Error('multihash must be a Buffer')
          if (t.length < 2)
            throw new Error('multihash too short. must be > 2 bytes.')
          var r = o.decode(t)
          if (!e.isValidCode(r))
            throw new Error(
              'multihash unknown function code: 0x'.concat(r.toString(16))
            )
          t = t.slice(o.decode.bytes)
          var i = o.decode(t)
          if (i < 0) throw new Error('multihash invalid length: '.concat(i))
          if ((t = t.slice(o.decode.bytes)).length !== i)
            throw new Error(
              'multihash length inconsistent: 0x'.concat(t.toString('hex'))
            )
          return { code: r, name: s.codes[r], length: i, digest: t }
        }),
        (e.encode = function(t, r, i) {
          if (!t || void 0 === r)
            throw new Error(
              'multihash encode requires at least two args: digest, code'
            )
          var s = e.coerceCode(r)
          if (!n.isBuffer(t)) throw new Error('digest should be a Buffer')
          if ((null == i && (i = t.length), i && t.length !== i))
            throw new Error(
              'digest length should be equal to specified length.'
            )
          return n.concat([n.from(o.encode(s)), n.from(o.encode(i)), t])
        }),
        (e.coerceCode = function(t) {
          var r = t
          if ('string' === typeof t) {
            if (void 0 === s.names[t])
              throw new Error('Unrecognized hash function named: '.concat(t))
            r = s.names[t]
          }
          if ('number' !== typeof r)
            throw new Error(
              'Hash function code should be a number. Got: '.concat(r)
            )
          if (void 0 === s.codes[r] && !e.isAppCode(r))
            throw new Error('Unrecognized function code: '.concat(r))
          return r
        }),
        (e.isAppCode = function(t) {
          return t > 0 && t < 16
        }),
        (e.isValidCode = function(t) {
          return !!e.isAppCode(t) || !!s.codes[t]
        }),
        (e.validate = a),
        (e.prefix = function(t) {
          return a(t), t.slice(0, 2)
        })
    },
    91762: function(t, e, r) {
      'use strict'
      var n = r(43466)
      e.certificate = r(92004)
      var i = n.define('RSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('modulus').int(),
          this.key('publicExponent').int(),
          this.key('privateExponent').int(),
          this.key('prime1').int(),
          this.key('prime2').int(),
          this.key('exponent1').int(),
          this.key('exponent2').int(),
          this.key('coefficient').int()
        )
      })
      e.RSAPrivateKey = i
      var o = n.define('RSAPublicKey', function() {
        this.seq().obj(
          this.key('modulus').int(),
          this.key('publicExponent').int()
        )
      })
      e.RSAPublicKey = o
      var s = n.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('none')
              .null_()
              .optional(),
            this.key('curve')
              .objid()
              .optional(),
            this.key('params')
              .seq()
              .obj(
                this.key('p').int(),
                this.key('q').int(),
                this.key('g').int()
              )
              .optional()
          )
        }),
        a = n.define('SubjectPublicKeyInfo', function() {
          this.seq().obj(
            this.key('algorithm').use(s),
            this.key('subjectPublicKey').bitstr()
          )
        })
      e.PublicKey = a
      var u = n.define('PrivateKeyInfo', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('algorithm').use(s),
          this.key('subjectPrivateKey').octstr()
        )
      })
      e.PrivateKey = u
      var h = n.define('EncryptedPrivateKeyInfo', function() {
        this.seq().obj(
          this.key('algorithm')
            .seq()
            .obj(
              this.key('id').objid(),
              this.key('decrypt')
                .seq()
                .obj(
                  this.key('kde')
                    .seq()
                    .obj(
                      this.key('id').objid(),
                      this.key('kdeparams')
                        .seq()
                        .obj(this.key('salt').octstr(), this.key('iters').int())
                    ),
                  this.key('cipher')
                    .seq()
                    .obj(this.key('algo').objid(), this.key('iv').octstr())
                )
            ),
          this.key('subjectPrivateKey').octstr()
        )
      })
      e.EncryptedPrivateKey = h
      var f = n.define('DSAPrivateKey', function() {
        this.seq().obj(
          this.key('version').int(),
          this.key('p').int(),
          this.key('q').int(),
          this.key('g').int(),
          this.key('pub_key').int(),
          this.key('priv_key').int()
        )
      })
      ;(e.DSAPrivateKey = f),
        (e.DSAparam = n.define('DSAparam', function() {
          this.int()
        }))
      var c = n.define('ECParameters', function() {
          this.choice({ namedCurve: this.objid() })
        }),
        l = n.define('ECPrivateKey', function() {
          this.seq().obj(
            this.key('version').int(),
            this.key('privateKey').octstr(),
            this.key('parameters')
              .optional()
              .explicit(0)
              .use(c),
            this.key('publicKey')
              .optional()
              .explicit(1)
              .bitstr()
          )
        })
      ;(e.ECPrivateKey = l),
        (e.signature = n.define('signature', function() {
          this.seq().obj(this.key('r').int(), this.key('s').int())
        }))
    },
    92004: function(t, e, r) {
      'use strict'
      var n = r(43466),
        i = n.define('Time', function() {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() })
        }),
        o = n.define('AttributeTypeValue', function() {
          this.seq().obj(this.key('type').objid(), this.key('value').any())
        }),
        s = n.define('AlgorithmIdentifier', function() {
          this.seq().obj(
            this.key('algorithm').objid(),
            this.key('parameters').optional(),
            this.key('curve')
              .objid()
              .optional()
          )
        }),
        a = n.define('SubjectPublicKeyInfo', function() {
          this.seq().obj(
            this.key('algorithm').use(s),
            this.key('subjectPublicKey').bitstr()
          )
        }),
        u = n.define('RelativeDistinguishedName', function() {
          this.setof(o)
        }),
        h = n.define('RDNSequence', function() {
          this.seqof(u)
        }),
        f = n.define('Name', function() {
          this.choice({ rdnSequence: this.use(h) })
        }),
        c = n.define('Validity', function() {
          this.seq().obj(
            this.key('notBefore').use(i),
            this.key('notAfter').use(i)
          )
        }),
        l = n.define('Extension', function() {
          this.seq().obj(
            this.key('extnID').objid(),
            this.key('critical')
              .bool()
              .def(!1),
            this.key('extnValue').octstr()
          )
        }),
        p = n.define('TBSCertificate', function() {
          this.seq().obj(
            this.key('version')
              .explicit(0)
              .int()
              .optional(),
            this.key('serialNumber').int(),
            this.key('signature').use(s),
            this.key('issuer').use(f),
            this.key('validity').use(c),
            this.key('subject').use(f),
            this.key('subjectPublicKeyInfo').use(a),
            this.key('issuerUniqueID')
              .implicit(1)
              .bitstr()
              .optional(),
            this.key('subjectUniqueID')
              .implicit(2)
              .bitstr()
              .optional(),
            this.key('extensions')
              .explicit(3)
              .seqof(l)
              .optional()
          )
        }),
        d = n.define('X509Certificate', function() {
          this.seq().obj(
            this.key('tbsCertificate').use(p),
            this.key('signatureAlgorithm').use(s),
            this.key('signatureValue').bitstr()
          )
        })
      t.exports = d
    },
    7056: function(t, e, r) {
      'use strict'
      var n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        s = r(98451),
        a = r(32428),
        u = r(59966).Buffer
      t.exports = function(t, e) {
        var r,
          h = t.toString(),
          f = h.match(n)
        if (f) {
          var c = 'aes' + f[1],
            l = u.from(f[2], 'hex'),
            p = u.from(f[3].replace(/[\r\n]/g, ''), 'base64'),
            d = s(e, l.slice(0, 8), parseInt(f[1], 10)).key,
            g = [],
            y = a.createDecipheriv(c, d, l)
          g.push(y.update(p)), g.push(y.final()), (r = u.concat(g))
        } else {
          var m = h.match(o)
          r = u.from(m[2].replace(/[\r\n]/g, ''), 'base64')
        }
        return { tag: h.match(i)[1], data: r }
      }
    },
    74496: function(t, e, r) {
      'use strict'
      var n = r(91762),
        i = r(21139),
        o = r(7056),
        s = r(32428),
        a = r(11973),
        u = r(59966).Buffer
      function h(t) {
        var e
        'object' !== typeof t ||
          u.isBuffer(t) ||
          ((e = t.passphrase), (t = t.key)),
          'string' === typeof t && (t = u.from(t))
        var r,
          h,
          f = o(t, e),
          c = f.tag,
          l = f.data
        switch (c) {
          case 'CERTIFICATE':
            h = n.certificate.decode(l, 'der').tbsCertificate
              .subjectPublicKeyInfo
          case 'PUBLIC KEY':
            switch (
              (h || (h = n.PublicKey.decode(l, 'der')),
              (r = h.algorithm.algorithm.join('.')))
            ) {
              case '1.2.840.113549.1.1.1':
                return n.RSAPublicKey.decode(h.subjectPublicKey.data, 'der')
              case '1.2.840.10045.2.1':
                return (
                  (h.subjectPrivateKey = h.subjectPublicKey),
                  { type: 'ec', data: h }
                )
              case '1.2.840.10040.4.1':
                return (
                  (h.algorithm.params.pub_key = n.DSAparam.decode(
                    h.subjectPublicKey.data,
                    'der'
                  )),
                  { type: 'dsa', data: h.algorithm.params }
                )
              default:
                throw new Error('unknown key id ' + r)
            }
          case 'ENCRYPTED PRIVATE KEY':
            l = (function(t, e) {
              var r = t.algorithm.decrypt.kde.kdeparams.salt,
                n = parseInt(
                  t.algorithm.decrypt.kde.kdeparams.iters.toString(),
                  10
                ),
                o = i[t.algorithm.decrypt.cipher.algo.join('.')],
                h = t.algorithm.decrypt.cipher.iv,
                f = t.subjectPrivateKey,
                c = parseInt(o.split('-')[1], 10) / 8,
                l = a.pbkdf2Sync(e, r, n, c, 'sha1'),
                p = s.createDecipheriv(o, l, h),
                d = []
              return d.push(p.update(f)), d.push(p.final()), u.concat(d)
            })((l = n.EncryptedPrivateKey.decode(l, 'der')), e)
          case 'PRIVATE KEY':
            switch (
              (r = (h = n.PrivateKey.decode(l, 'der')).algorithm.algorithm.join(
                '.'
              ))
            ) {
              case '1.2.840.113549.1.1.1':
                return n.RSAPrivateKey.decode(h.subjectPrivateKey, 'der')
              case '1.2.840.10045.2.1':
                return {
                  curve: h.algorithm.curve,
                  privateKey: n.ECPrivateKey.decode(h.subjectPrivateKey, 'der')
                    .privateKey
                }
              case '1.2.840.10040.4.1':
                return (
                  (h.algorithm.params.priv_key = n.DSAparam.decode(
                    h.subjectPrivateKey,
                    'der'
                  )),
                  { type: 'dsa', params: h.algorithm.params }
                )
              default:
                throw new Error('unknown key id ' + r)
            }
          case 'RSA PUBLIC KEY':
            return n.RSAPublicKey.decode(l, 'der')
          case 'RSA PRIVATE KEY':
            return n.RSAPrivateKey.decode(l, 'der')
          case 'DSA PRIVATE KEY':
            return { type: 'dsa', params: n.DSAPrivateKey.decode(l, 'der') }
          case 'EC PRIVATE KEY':
            return {
              curve: (l = n.ECPrivateKey.decode(l, 'der')).parameters.value,
              privateKey: l.privateKey
            }
          default:
            throw new Error('unknown key type ' + c)
        }
      }
      ;(h.signature = n.signature), (t.exports = h)
    },
    43466: function(t, e, r) {
      var n = e
      ;(n.bignum = r(6373)),
        (n.define = r(58673).define),
        (n.base = r(99699)),
        (n.constants = r(81543)),
        (n.decoders = r(92671)),
        (n.encoders = r(20235))
    },
    58673: function(t, e, r) {
      var n = r(43466),
        i = r(56329)
      function o(t, e) {
        ;(this.name = t),
          (this.body = e),
          (this.decoders = {}),
          (this.encoders = {})
      }
      ;(e.define = function(t, e) {
        return new o(t, e)
      }),
        (o.prototype._createNamed = function(t) {
          var e
          try {
            e = Object(
              (function() {
                var t = new Error("Cannot find module 'vm'")
                throw ((t.code = 'MODULE_NOT_FOUND'), t)
              })()
            )(
              '(function ' +
                this.name +
                '(entity) {\n  this._initNamed(entity);\n})'
            )
          } catch (r) {
            e = function(t) {
              this._initNamed(t)
            }
          }
          return (
            i(e, t),
            (e.prototype._initNamed = function(e) {
              t.call(this, e)
            }),
            new e(this)
          )
        }),
        (o.prototype._getDecoder = function(t) {
          return (
            (t = t || 'der'),
            this.decoders.hasOwnProperty(t) ||
              (this.decoders[t] = this._createNamed(n.decoders[t])),
            this.decoders[t]
          )
        }),
        (o.prototype.decode = function(t, e, r) {
          return this._getDecoder(e).decode(t, r)
        }),
        (o.prototype._getEncoder = function(t) {
          return (
            (t = t || 'der'),
            this.encoders.hasOwnProperty(t) ||
              (this.encoders[t] = this._createNamed(n.encoders[t])),
            this.encoders[t]
          )
        }),
        (o.prototype.encode = function(t, e, r) {
          return this._getEncoder(e).encode(t, r)
        })
    },
    86125: function(t, e, r) {
      var n = r(56329),
        i = r(99699).Reporter,
        o = r(26382).Buffer
      function s(t, e) {
        i.call(this, e),
          o.isBuffer(t)
            ? ((this.base = t), (this.offset = 0), (this.length = t.length))
            : this.error('Input not Buffer')
      }
      function a(t, e) {
        if (Array.isArray(t))
          (this.length = 0),
            (this.value = t.map(function(t) {
              return (
                t instanceof a || (t = new a(t, e)),
                (this.length += t.length),
                t
              )
            }, this))
        else if ('number' === typeof t) {
          if (!(0 <= t && t <= 255))
            return e.error('non-byte EncoderBuffer value')
          ;(this.value = t), (this.length = 1)
        } else if ('string' === typeof t)
          (this.value = t), (this.length = o.byteLength(t))
        else {
          if (!o.isBuffer(t)) return e.error('Unsupported type: ' + typeof t)
          ;(this.value = t), (this.length = t.length)
        }
      }
      n(s, i),
        (e.t = s),
        (s.prototype.save = function() {
          return { offset: this.offset, reporter: i.prototype.save.call(this) }
        }),
        (s.prototype.restore = function(t) {
          var e = new s(this.base)
          return (
            (e.offset = t.offset),
            (e.length = this.offset),
            (this.offset = t.offset),
            i.prototype.restore.call(this, t.reporter),
            e
          )
        }),
        (s.prototype.isEmpty = function() {
          return this.offset === this.length
        }),
        (s.prototype.readUInt8 = function(t) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(t || 'DecoderBuffer overrun')
        }),
        (s.prototype.skip = function(t, e) {
          if (!(this.offset + t <= this.length))
            return this.error(e || 'DecoderBuffer overrun')
          var r = new s(this.base)
          return (
            (r._reporterState = this._reporterState),
            (r.offset = this.offset),
            (r.length = this.offset + t),
            (this.offset += t),
            r
          )
        }),
        (s.prototype.raw = function(t) {
          return this.base.slice(t ? t.offset : this.offset, this.length)
        }),
        (e.d = a),
        (a.prototype.join = function(t, e) {
          return (
            t || (t = new o(this.length)),
            e || (e = 0),
            0 === this.length ||
              (Array.isArray(this.value)
                ? this.value.forEach(function(r) {
                    r.join(t, e), (e += r.length)
                  })
                : ('number' === typeof this.value
                    ? (t[e] = this.value)
                    : 'string' === typeof this.value
                    ? t.write(this.value, e)
                    : o.isBuffer(this.value) && this.value.copy(t, e),
                  (e += this.length))),
            t
          )
        })
    },
    99699: function(t, e, r) {
      var n = e
      ;(n.Reporter = r(32286).a),
        (n.DecoderBuffer = r(86125).t),
        (n.EncoderBuffer = r(86125).d),
        (n.Node = r(2995))
    },
    2995: function(t, e, r) {
      var n = r(99699).Reporter,
        i = r(99699).EncoderBuffer,
        o = r(99699).DecoderBuffer,
        s = r(75482),
        a = [
          'seq',
          'seqof',
          'set',
          'setof',
          'objid',
          'bool',
          'gentime',
          'utctime',
          'null_',
          'enum',
          'int',
          'objDesc',
          'bitstr',
          'bmpstr',
          'charstr',
          'genstr',
          'graphstr',
          'ia5str',
          'iso646str',
          'numstr',
          'octstr',
          'printstr',
          't61str',
          'unistr',
          'utf8str',
          'videostr'
        ],
        u = [
          'key',
          'obj',
          'use',
          'optional',
          'explicit',
          'implicit',
          'def',
          'choice',
          'any',
          'contains'
        ].concat(a)
      function h(t, e) {
        var r = {}
        ;(this._baseState = r),
          (r.enc = t),
          (r.parent = e || null),
          (r.children = null),
          (r.tag = null),
          (r.args = null),
          (r.reverseArgs = null),
          (r.choice = null),
          (r.optional = !1),
          (r.any = !1),
          (r.obj = !1),
          (r.use = null),
          (r.useDecoder = null),
          (r.key = null),
          (r.default = null),
          (r.explicit = null),
          (r.implicit = null),
          (r.contains = null),
          r.parent || ((r.children = []), this._wrap())
      }
      t.exports = h
      var f = [
        'enc',
        'parent',
        'children',
        'tag',
        'args',
        'reverseArgs',
        'choice',
        'optional',
        'any',
        'obj',
        'use',
        'alteredUse',
        'key',
        'default',
        'explicit',
        'implicit',
        'contains'
      ]
      ;(h.prototype.clone = function() {
        var t = this._baseState,
          e = {}
        f.forEach(function(r) {
          e[r] = t[r]
        })
        var r = new this.constructor(e.parent)
        return (r._baseState = e), r
      }),
        (h.prototype._wrap = function() {
          var t = this._baseState
          u.forEach(function(e) {
            this[e] = function() {
              var r = new this.constructor(this)
              return t.children.push(r), r[e].apply(r, arguments)
            }
          }, this)
        }),
        (h.prototype._init = function(t) {
          var e = this._baseState
          s(null === e.parent),
            t.call(this),
            (e.children = e.children.filter(function(t) {
              return t._baseState.parent === this
            }, this)),
            s.equal(e.children.length, 1, 'Root node can have only one child')
        }),
        (h.prototype._useArgs = function(t) {
          var e = this._baseState,
            r = t.filter(function(t) {
              return t instanceof this.constructor
            }, this)
          ;(t = t.filter(function(t) {
            return !(t instanceof this.constructor)
          }, this)),
            0 !== r.length &&
              (s(null === e.children),
              (e.children = r),
              r.forEach(function(t) {
                t._baseState.parent = this
              }, this)),
            0 !== t.length &&
              (s(null === e.args),
              (e.args = t),
              (e.reverseArgs = t.map(function(t) {
                if ('object' !== typeof t || t.constructor !== Object) return t
                var e = {}
                return (
                  Object.keys(t).forEach(function(r) {
                    r == (0 | r) && (r |= 0)
                    var n = t[r]
                    e[n] = r
                  }),
                  e
                )
              })))
        }),
        [
          '_peekTag',
          '_decodeTag',
          '_use',
          '_decodeStr',
          '_decodeObjid',
          '_decodeTime',
          '_decodeNull',
          '_decodeInt',
          '_decodeBool',
          '_decodeList',
          '_encodeComposite',
          '_encodeStr',
          '_encodeObjid',
          '_encodeTime',
          '_encodeNull',
          '_encodeInt',
          '_encodeBool'
        ].forEach(function(t) {
          h.prototype[t] = function() {
            var e = this._baseState
            throw new Error(t + ' not implemented for encoding: ' + e.enc)
          }
        }),
        a.forEach(function(t) {
          h.prototype[t] = function() {
            var e = this._baseState,
              r = Array.prototype.slice.call(arguments)
            return s(null === e.tag), (e.tag = t), this._useArgs(r), this
          }
        }),
        (h.prototype.use = function(t) {
          s(t)
          var e = this._baseState
          return s(null === e.use), (e.use = t), this
        }),
        (h.prototype.optional = function() {
          return (this._baseState.optional = !0), this
        }),
        (h.prototype.def = function(t) {
          var e = this._baseState
          return s(null === e.default), (e.default = t), (e.optional = !0), this
        }),
        (h.prototype.explicit = function(t) {
          var e = this._baseState
          return (
            s(null === e.explicit && null === e.implicit),
            (e.explicit = t),
            this
          )
        }),
        (h.prototype.implicit = function(t) {
          var e = this._baseState
          return (
            s(null === e.explicit && null === e.implicit),
            (e.implicit = t),
            this
          )
        }),
        (h.prototype.obj = function() {
          var t = this._baseState,
            e = Array.prototype.slice.call(arguments)
          return (t.obj = !0), 0 !== e.length && this._useArgs(e), this
        }),
        (h.prototype.key = function(t) {
          var e = this._baseState
          return s(null === e.key), (e.key = t), this
        }),
        (h.prototype.any = function() {
          return (this._baseState.any = !0), this
        }),
        (h.prototype.choice = function(t) {
          var e = this._baseState
          return (
            s(null === e.choice),
            (e.choice = t),
            this._useArgs(
              Object.keys(t).map(function(e) {
                return t[e]
              })
            ),
            this
          )
        }),
        (h.prototype.contains = function(t) {
          var e = this._baseState
          return s(null === e.use), (e.contains = t), this
        }),
        (h.prototype._decode = function(t, e) {
          var r = this._baseState
          if (null === r.parent)
            return t.wrapResult(r.children[0]._decode(t, e))
          var n,
            i = r.default,
            s = !0,
            a = null
          if ((null !== r.key && (a = t.enterKey(r.key)), r.optional)) {
            var u = null
            if (
              (null !== r.explicit
                ? (u = r.explicit)
                : null !== r.implicit
                ? (u = r.implicit)
                : null !== r.tag && (u = r.tag),
              null !== u || r.any)
            ) {
              if (((s = this._peekTag(t, u, r.any)), t.isError(s))) return s
            } else {
              var h = t.save()
              try {
                null === r.choice
                  ? this._decodeGeneric(r.tag, t, e)
                  : this._decodeChoice(t, e),
                  (s = !0)
              } catch (d) {
                s = !1
              }
              t.restore(h)
            }
          }
          if ((r.obj && s && (n = t.enterObject()), s)) {
            if (null !== r.explicit) {
              var f = this._decodeTag(t, r.explicit)
              if (t.isError(f)) return f
              t = f
            }
            var c = t.offset
            if (null === r.use && null === r.choice) {
              if (r.any) h = t.save()
              var l = this._decodeTag(
                t,
                null !== r.implicit ? r.implicit : r.tag,
                r.any
              )
              if (t.isError(l)) return l
              r.any ? (i = t.raw(h)) : (t = l)
            }
            if (
              (e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), c, t.length, 'tagged'),
              e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), t.offset, t.length, 'content'),
              r.any ||
                (i =
                  null === r.choice
                    ? this._decodeGeneric(r.tag, t, e)
                    : this._decodeChoice(t, e)),
              t.isError(i))
            )
              return i
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function(r) {
                  r._decode(t, e)
                }),
              r.contains && ('octstr' === r.tag || 'bitstr' === r.tag))
            ) {
              var p = new o(i)
              i = this._getUse(r.contains, t._reporterState.obj)._decode(p, e)
            }
          }
          return (
            r.obj && s && (i = t.leaveObject(n)),
            null === r.key || (null === i && !0 !== s)
              ? null !== a && t.exitKey(a)
              : t.leaveKey(a, r.key, i),
            i
          )
        }),
        (h.prototype._decodeGeneric = function(t, e, r) {
          var n = this._baseState
          return 'seq' === t || 'set' === t
            ? null
            : 'seqof' === t || 'setof' === t
            ? this._decodeList(e, t, n.args[0], r)
            : /str$/.test(t)
            ? this._decodeStr(e, t, r)
            : 'objid' === t && n.args
            ? this._decodeObjid(e, n.args[0], n.args[1], r)
            : 'objid' === t
            ? this._decodeObjid(e, null, null, r)
            : 'gentime' === t || 'utctime' === t
            ? this._decodeTime(e, t, r)
            : 'null_' === t
            ? this._decodeNull(e, r)
            : 'bool' === t
            ? this._decodeBool(e, r)
            : 'objDesc' === t
            ? this._decodeStr(e, t, r)
            : 'int' === t || 'enum' === t
            ? this._decodeInt(e, n.args && n.args[0], r)
            : null !== n.use
            ? this._getUse(n.use, e._reporterState.obj)._decode(e, r)
            : e.error('unknown tag: ' + t)
        }),
        (h.prototype._getUse = function(t, e) {
          var r = this._baseState
          return (
            (r.useDecoder = this._use(t, e)),
            s(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()),
              (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          )
        }),
        (h.prototype._decodeChoice = function(t, e) {
          var r = this._baseState,
            n = null,
            i = !1
          return (
            Object.keys(r.choice).some(function(o) {
              var s = t.save(),
                a = r.choice[o]
              try {
                var u = a._decode(t, e)
                if (t.isError(u)) return !1
                ;(n = { type: o, value: u }), (i = !0)
              } catch (h) {
                return t.restore(s), !1
              }
              return !0
            }, this),
            i ? n : t.error('Choice not matched')
          )
        }),
        (h.prototype._createEncoderBuffer = function(t) {
          return new i(t, this.reporter)
        }),
        (h.prototype._encode = function(t, e, r) {
          var n = this._baseState
          if (null === n.default || n.default !== t) {
            var i = this._encodeValue(t, e, r)
            if (void 0 !== i && !this._skipDefault(i, e, r)) return i
          }
        }),
        (h.prototype._encodeValue = function(t, e, r) {
          var i = this._baseState
          if (null === i.parent) return i.children[0]._encode(t, e || new n())
          var o = null
          if (((this.reporter = e), i.optional && void 0 === t)) {
            if (null === i.default) return
            t = i.default
          }
          var s = null,
            a = !1
          if (i.any) o = this._createEncoderBuffer(t)
          else if (i.choice) o = this._encodeChoice(t, e)
          else if (i.contains)
            (s = this._getUse(i.contains, r)._encode(t, e)), (a = !0)
          else if (i.children)
            (s = i.children
              .map(function(r) {
                if ('null_' === r._baseState.tag) return r._encode(null, e, t)
                if (null === r._baseState.key)
                  return e.error('Child should have a key')
                var n = e.enterKey(r._baseState.key)
                if ('object' !== typeof t)
                  return e.error('Child expected, but input is not object')
                var i = r._encode(t[r._baseState.key], e, t)
                return e.leaveKey(n), i
              }, this)
              .filter(function(t) {
                return t
              })),
              (s = this._createEncoderBuffer(s))
          else if ('seqof' === i.tag || 'setof' === i.tag) {
            if (!i.args || 1 !== i.args.length)
              return e.error('Too many args for : ' + i.tag)
            if (!Array.isArray(t))
              return e.error('seqof/setof, but data is not Array')
            var u = this.clone()
            ;(u._baseState.implicit = null),
              (s = this._createEncoderBuffer(
                t.map(function(r) {
                  var n = this._baseState
                  return this._getUse(n.args[0], t)._encode(r, e)
                }, u)
              ))
          } else
            null !== i.use
              ? (o = this._getUse(i.use, r)._encode(t, e))
              : ((s = this._encodePrimitive(i.tag, t)), (a = !0))
          if (!i.any && null === i.choice) {
            var h = null !== i.implicit ? i.implicit : i.tag,
              f = null === i.implicit ? 'universal' : 'context'
            null === h
              ? null === i.use &&
                e.error('Tag could be omitted only for .use()')
              : null === i.use && (o = this._encodeComposite(h, a, f, s))
          }
          return (
            null !== i.explicit &&
              (o = this._encodeComposite(i.explicit, !1, 'context', o)),
            o
          )
        }),
        (h.prototype._encodeChoice = function(t, e) {
          var r = this._baseState,
            n = r.choice[t.type]
          return (
            n ||
              s(
                !1,
                t.type +
                  ' not found in ' +
                  JSON.stringify(Object.keys(r.choice))
              ),
            n._encode(t.value, e)
          )
        }),
        (h.prototype._encodePrimitive = function(t, e) {
          var r = this._baseState
          if (/str$/.test(t)) return this._encodeStr(e, t)
          if ('objid' === t && r.args)
            return this._encodeObjid(e, r.reverseArgs[0], r.args[1])
          if ('objid' === t) return this._encodeObjid(e, null, null)
          if ('gentime' === t || 'utctime' === t) return this._encodeTime(e, t)
          if ('null_' === t) return this._encodeNull()
          if ('int' === t || 'enum' === t)
            return this._encodeInt(e, r.args && r.reverseArgs[0])
          if ('bool' === t) return this._encodeBool(e)
          if ('objDesc' === t) return this._encodeStr(e, t)
          throw new Error('Unsupported tag: ' + t)
        }),
        (h.prototype._isNumstr = function(t) {
          return /^[0-9 ]*$/.test(t)
        }),
        (h.prototype._isPrintstr = function(t) {
          return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)
        })
    },
    32286: function(t, e, r) {
      var n = r(56329)
      function i(t) {
        this._reporterState = {
          obj: null,
          path: [],
          options: t || {},
          errors: []
        }
      }
      function o(t, e) {
        ;(this.path = t), this.rethrow(e)
      }
      ;(e.a = i),
        (i.prototype.isError = function(t) {
          return t instanceof o
        }),
        (i.prototype.save = function() {
          var t = this._reporterState
          return { obj: t.obj, pathLen: t.path.length }
        }),
        (i.prototype.restore = function(t) {
          var e = this._reporterState
          ;(e.obj = t.obj), (e.path = e.path.slice(0, t.pathLen))
        }),
        (i.prototype.enterKey = function(t) {
          return this._reporterState.path.push(t)
        }),
        (i.prototype.exitKey = function(t) {
          var e = this._reporterState
          e.path = e.path.slice(0, t - 1)
        }),
        (i.prototype.leaveKey = function(t, e, r) {
          var n = this._reporterState
          this.exitKey(t), null !== n.obj && (n.obj[e] = r)
        }),
        (i.prototype.path = function() {
          return this._reporterState.path.join('/')
        }),
        (i.prototype.enterObject = function() {
          var t = this._reporterState,
            e = t.obj
          return (t.obj = {}), e
        }),
        (i.prototype.leaveObject = function(t) {
          var e = this._reporterState,
            r = e.obj
          return (e.obj = t), r
        }),
        (i.prototype.error = function(t) {
          var e,
            r = this._reporterState,
            n = t instanceof o
          if (
            ((e = n
              ? t
              : new o(
                  r.path
                    .map(function(t) {
                      return '[' + JSON.stringify(t) + ']'
                    })
                    .join(''),
                  t.message || t,
                  t.stack
                )),
            !r.options.partial)
          )
            throw e
          return n || r.errors.push(e), e
        }),
        (i.prototype.wrapResult = function(t) {
          var e = this._reporterState
          return e.options.partial
            ? { result: this.isError(t) ? null : t, errors: e.errors }
            : t
        }),
        n(o, Error),
        (o.prototype.rethrow = function(t) {
          if (
            ((this.message = t + ' at: ' + (this.path || '(shallow)')),
            Error.captureStackTrace && Error.captureStackTrace(this, o),
            !this.stack)
          )
            try {
              throw new Error(this.message)
            } catch (e) {
              this.stack = e.stack
            }
          return this
        })
    },
    13732: function(t, e, r) {
      var n = r(81543)
      ;(e.tagClass = {
        0: 'universal',
        1: 'application',
        2: 'context',
        3: 'private'
      }),
        (e.tagClassByName = n._reverse(e.tagClass)),
        (e.tag = {
          0: 'end',
          1: 'bool',
          2: 'int',
          3: 'bitstr',
          4: 'octstr',
          5: 'null_',
          6: 'objid',
          7: 'objDesc',
          8: 'external',
          9: 'real',
          10: 'enum',
          11: 'embed',
          12: 'utf8str',
          13: 'relativeOid',
          16: 'seq',
          17: 'set',
          18: 'numstr',
          19: 'printstr',
          20: 't61str',
          21: 'videostr',
          22: 'ia5str',
          23: 'utctime',
          24: 'gentime',
          25: 'graphstr',
          26: 'iso646str',
          27: 'genstr',
          28: 'unistr',
          29: 'charstr',
          30: 'bmpstr'
        }),
        (e.tagByName = n._reverse(e.tag))
    },
    81543: function(t, e, r) {
      var n = e
      ;(n._reverse = function(t) {
        var e = {}
        return (
          Object.keys(t).forEach(function(r) {
            ;(0 | r) == r && (r |= 0)
            var n = t[r]
            e[n] = r
          }),
          e
        )
      }),
        (n.der = r(13732))
    },
    99788: function(t, e, r) {
      var n = r(56329),
        i = r(43466),
        o = i.base,
        s = i.bignum,
        a = i.constants.der
      function u(t) {
        ;(this.enc = 'der'),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new h()),
          this.tree._init(t.body)
      }
      function h(t) {
        o.Node.call(this, 'der', t)
      }
      function f(t, e) {
        var r = t.readUInt8(e)
        if (t.isError(r)) return r
        var n = a.tagClass[r >> 6],
          i = 0 === (32 & r)
        if (31 === (31 & r)) {
          var o = r
          for (r = 0; 128 === (128 & o); ) {
            if (((o = t.readUInt8(e)), t.isError(o))) return o
            ;(r <<= 7), (r |= 127 & o)
          }
        } else r &= 31
        return { cls: n, primitive: i, tag: r, tagStr: a.tag[r] }
      }
      function c(t, e, r) {
        var n = t.readUInt8(r)
        if (t.isError(n)) return n
        if (!e && 128 === n) return null
        if (0 === (128 & n)) return n
        var i = 127 & n
        if (i > 4) return t.error('length octect is too long')
        n = 0
        for (var o = 0; o < i; o++) {
          n <<= 8
          var s = t.readUInt8(r)
          if (t.isError(s)) return s
          n |= s
        }
        return n
      }
      ;(t.exports = u),
        (u.prototype.decode = function(t, e) {
          return (
            t instanceof o.DecoderBuffer || (t = new o.DecoderBuffer(t, e)),
            this.tree._decode(t, e)
          )
        }),
        n(h, o.Node),
        (h.prototype._peekTag = function(t, e, r) {
          if (t.isEmpty()) return !1
          var n = t.save(),
            i = f(t, 'Failed to peek tag: "' + e + '"')
          return t.isError(i)
            ? i
            : (t.restore(n),
              i.tag === e || i.tagStr === e || i.tagStr + 'of' === e || r)
        }),
        (h.prototype._decodeTag = function(t, e, r) {
          var n = f(t, 'Failed to decode tag of "' + e + '"')
          if (t.isError(n)) return n
          var i = c(t, n.primitive, 'Failed to get length of "' + e + '"')
          if (t.isError(i)) return i
          if (!r && n.tag !== e && n.tagStr !== e && n.tagStr + 'of' !== e)
            return t.error('Failed to match tag: "' + e + '"')
          if (n.primitive || null !== i)
            return t.skip(i, 'Failed to match body of: "' + e + '"')
          var o = t.save(),
            s = this._skipUntilEnd(
              t,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            )
          return t.isError(s)
            ? s
            : ((i = t.offset - o.offset),
              t.restore(o),
              t.skip(i, 'Failed to match body of: "' + e + '"'))
        }),
        (h.prototype._skipUntilEnd = function(t, e) {
          for (;;) {
            var r = f(t, e)
            if (t.isError(r)) return r
            var n,
              i = c(t, r.primitive, e)
            if (t.isError(i)) return i
            if (
              ((n =
                r.primitive || null !== i
                  ? t.skip(i)
                  : this._skipUntilEnd(t, e)),
              t.isError(n))
            )
              return n
            if ('end' === r.tagStr) break
          }
        }),
        (h.prototype._decodeList = function(t, e, r, n) {
          for (var i = []; !t.isEmpty(); ) {
            var o = this._peekTag(t, 'end')
            if (t.isError(o)) return o
            var s = r.decode(t, 'der', n)
            if (t.isError(s) && o) break
            i.push(s)
          }
          return i
        }),
        (h.prototype._decodeStr = function(t, e) {
          if ('bitstr' === e) {
            var r = t.readUInt8()
            return t.isError(r) ? r : { unused: r, data: t.raw() }
          }
          if ('bmpstr' === e) {
            var n = t.raw()
            if (n.length % 2 === 1)
              return t.error('Decoding of string type: bmpstr length mismatch')
            for (var i = '', o = 0; o < n.length / 2; o++)
              i += String.fromCharCode(n.readUInt16BE(2 * o))
            return i
          }
          if ('numstr' === e) {
            var s = t.raw().toString('ascii')
            return this._isNumstr(s)
              ? s
              : t.error(
                  'Decoding of string type: numstr unsupported characters'
                )
          }
          if ('octstr' === e) return t.raw()
          if ('objDesc' === e) return t.raw()
          if ('printstr' === e) {
            var a = t.raw().toString('ascii')
            return this._isPrintstr(a)
              ? a
              : t.error(
                  'Decoding of string type: printstr unsupported characters'
                )
          }
          return /str$/.test(e)
            ? t.raw().toString()
            : t.error('Decoding of string type: ' + e + ' unsupported')
        }),
        (h.prototype._decodeObjid = function(t, e, r) {
          for (var n, i = [], o = 0; !t.isEmpty(); ) {
            var s = t.readUInt8()
            ;(o <<= 7), (o |= 127 & s), 0 === (128 & s) && (i.push(o), (o = 0))
          }
          128 & s && i.push(o)
          var a = (i[0] / 40) | 0,
            u = i[0] % 40
          if (((n = r ? i : [a, u].concat(i.slice(1))), e)) {
            var h = e[n.join(' ')]
            void 0 === h && (h = e[n.join('.')]), void 0 !== h && (n = h)
          }
          return n
        }),
        (h.prototype._decodeTime = function(t, e) {
          var r = t.raw().toString()
          if ('gentime' === e)
            var n = 0 | r.slice(0, 4),
              i = 0 | r.slice(4, 6),
              o = 0 | r.slice(6, 8),
              s = 0 | r.slice(8, 10),
              a = 0 | r.slice(10, 12),
              u = 0 | r.slice(12, 14)
          else {
            if ('utctime' !== e)
              return t.error('Decoding ' + e + ' time is not supported yet')
            ;(n = 0 | r.slice(0, 2)),
              (i = 0 | r.slice(2, 4)),
              (o = 0 | r.slice(4, 6)),
              (s = 0 | r.slice(6, 8)),
              (a = 0 | r.slice(8, 10)),
              (u = 0 | r.slice(10, 12))
            n = n < 70 ? 2e3 + n : 1900 + n
          }
          return Date.UTC(n, i - 1, o, s, a, u, 0)
        }),
        (h.prototype._decodeNull = function(t) {
          return null
        }),
        (h.prototype._decodeBool = function(t) {
          var e = t.readUInt8()
          return t.isError(e) ? e : 0 !== e
        }),
        (h.prototype._decodeInt = function(t, e) {
          var r = t.raw(),
            n = new s(r)
          return e && (n = e[n.toString(10)] || n), n
        }),
        (h.prototype._use = function(t, e) {
          return (
            'function' === typeof t && (t = t(e)), t._getDecoder('der').tree
          )
        })
    },
    92671: function(t, e, r) {
      var n = e
      ;(n.der = r(99788)), (n.pem = r(19661))
    },
    19661: function(t, e, r) {
      var n = r(56329),
        i = r(26382).Buffer,
        o = r(99788)
      function s(t) {
        o.call(this, t), (this.enc = 'pem')
      }
      n(s, o),
        (t.exports = s),
        (s.prototype.decode = function(t, e) {
          for (
            var r = t.toString().split(/[\r\n]+/g),
              n = e.label.toUpperCase(),
              s = /^-----(BEGIN|END) ([^-]+)-----$/,
              a = -1,
              u = -1,
              h = 0;
            h < r.length;
            h++
          ) {
            var f = r[h].match(s)
            if (null !== f && f[2] === n) {
              if (-1 !== a) {
                if ('END' !== f[1]) break
                u = h
                break
              }
              if ('BEGIN' !== f[1]) break
              a = h
            }
          }
          if (-1 === a || -1 === u)
            throw new Error('PEM section not found for: ' + n)
          var c = r.slice(a + 1, u).join('')
          c.replace(/[^a-z0-9\+\/=]+/gi, '')
          var l = new i(c, 'base64')
          return o.prototype.decode.call(this, l, e)
        })
    },
    7952: function(t, e, r) {
      var n = r(56329),
        i = r(26382).Buffer,
        o = r(43466),
        s = o.base,
        a = o.constants.der
      function u(t) {
        ;(this.enc = 'der'),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new h()),
          this.tree._init(t.body)
      }
      function h(t) {
        s.Node.call(this, 'der', t)
      }
      function f(t) {
        return t < 10 ? '0' + t : t
      }
      ;(t.exports = u),
        (u.prototype.encode = function(t, e) {
          return this.tree._encode(t, e).join()
        }),
        n(h, s.Node),
        (h.prototype._encodeComposite = function(t, e, r, n) {
          var o,
            s = (function(t, e, r, n) {
              var i
              'seqof' === t ? (t = 'seq') : 'setof' === t && (t = 'set')
              if (a.tagByName.hasOwnProperty(t)) i = a.tagByName[t]
              else {
                if ('number' !== typeof t || (0 | t) !== t)
                  return n.error('Unknown tag: ' + t)
                i = t
              }
              if (i >= 31)
                return n.error('Multi-octet tag encoding unsupported')
              e || (i |= 32)
              return (i |= a.tagClassByName[r || 'universal'] << 6), i
            })(t, e, r, this.reporter)
          if (n.length < 128)
            return (
              ((o = new i(2))[0] = s),
              (o[1] = n.length),
              this._createEncoderBuffer([o, n])
            )
          for (var u = 1, h = n.length; h >= 256; h >>= 8) u++
          ;((o = new i(2 + u))[0] = s), (o[1] = 128 | u)
          h = 1 + u
          for (var f = n.length; f > 0; h--, f >>= 8) o[h] = 255 & f
          return this._createEncoderBuffer([o, n])
        }),
        (h.prototype._encodeStr = function(t, e) {
          if ('bitstr' === e)
            return this._createEncoderBuffer([0 | t.unused, t.data])
          if ('bmpstr' === e) {
            for (var r = new i(2 * t.length), n = 0; n < t.length; n++)
              r.writeUInt16BE(t.charCodeAt(n), 2 * n)
            return this._createEncoderBuffer(r)
          }
          return 'numstr' === e
            ? this._isNumstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  'Encoding of string type: numstr supports only digits and space'
                )
            : 'printstr' === e
            ? this._isPrintstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  'Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark'
                )
            : /str$/.test(e) || 'objDesc' === e
            ? this._createEncoderBuffer(t)
            : this.reporter.error(
                'Encoding of string type: ' + e + ' unsupported'
              )
        }),
        (h.prototype._encodeObjid = function(t, e, r) {
          if ('string' === typeof t) {
            if (!e)
              return this.reporter.error(
                'string objid given, but no values map found'
              )
            if (!e.hasOwnProperty(t))
              return this.reporter.error('objid not found in values map')
            t = e[t].split(/[\s\.]+/g)
            for (var n = 0; n < t.length; n++) t[n] |= 0
          } else if (Array.isArray(t)) {
            t = t.slice()
            for (n = 0; n < t.length; n++) t[n] |= 0
          }
          if (!Array.isArray(t))
            return this.reporter.error(
              'objid() should be either array or string, got: ' +
                JSON.stringify(t)
            )
          if (!r) {
            if (t[1] >= 40)
              return this.reporter.error('Second objid identifier OOB')
            t.splice(0, 2, 40 * t[0] + t[1])
          }
          var o = 0
          for (n = 0; n < t.length; n++) {
            var s = t[n]
            for (o++; s >= 128; s >>= 7) o++
          }
          var a = new i(o),
            u = a.length - 1
          for (n = t.length - 1; n >= 0; n--) {
            s = t[n]
            for (a[u--] = 127 & s; (s >>= 7) > 0; ) a[u--] = 128 | (127 & s)
          }
          return this._createEncoderBuffer(a)
        }),
        (h.prototype._encodeTime = function(t, e) {
          var r,
            n = new Date(t)
          return (
            'gentime' === e
              ? (r = [
                  f(n.getFullYear()),
                  f(n.getUTCMonth() + 1),
                  f(n.getUTCDate()),
                  f(n.getUTCHours()),
                  f(n.getUTCMinutes()),
                  f(n.getUTCSeconds()),
                  'Z'
                ].join(''))
              : 'utctime' === e
              ? (r = [
                  f(n.getFullYear() % 100),
                  f(n.getUTCMonth() + 1),
                  f(n.getUTCDate()),
                  f(n.getUTCHours()),
                  f(n.getUTCMinutes()),
                  f(n.getUTCSeconds()),
                  'Z'
                ].join(''))
              : this.reporter.error(
                  'Encoding ' + e + ' time is not supported yet'
                ),
            this._encodeStr(r, 'octstr')
          )
        }),
        (h.prototype._encodeNull = function() {
          return this._createEncoderBuffer('')
        }),
        (h.prototype._encodeInt = function(t, e) {
          if ('string' === typeof t) {
            if (!e)
              return this.reporter.error(
                'String int or enum given, but no values map'
              )
            if (!e.hasOwnProperty(t))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(t)
              )
            t = e[t]
          }
          if ('number' !== typeof t && !i.isBuffer(t)) {
            var r = t.toArray()
            !t.sign && 128 & r[0] && r.unshift(0), (t = new i(r))
          }
          if (i.isBuffer(t)) {
            var n = t.length
            0 === t.length && n++
            var o = new i(n)
            return (
              t.copy(o),
              0 === t.length && (o[0] = 0),
              this._createEncoderBuffer(o)
            )
          }
          if (t < 128) return this._createEncoderBuffer(t)
          if (t < 256) return this._createEncoderBuffer([0, t])
          n = 1
          for (var s = t; s >= 256; s >>= 8) n++
          for (s = (o = new Array(n)).length - 1; s >= 0; s--)
            (o[s] = 255 & t), (t >>= 8)
          return 128 & o[0] && o.unshift(0), this._createEncoderBuffer(new i(o))
        }),
        (h.prototype._encodeBool = function(t) {
          return this._createEncoderBuffer(t ? 255 : 0)
        }),
        (h.prototype._use = function(t, e) {
          return (
            'function' === typeof t && (t = t(e)), t._getEncoder('der').tree
          )
        }),
        (h.prototype._skipDefault = function(t, e, r) {
          var n,
            i = this._baseState
          if (null === i.default) return !1
          var o = t.join()
          if (
            (void 0 === i.defaultBuffer &&
              (i.defaultBuffer = this._encodeValue(i.default, e, r).join()),
            o.length !== i.defaultBuffer.length)
          )
            return !1
          for (n = 0; n < o.length; n++)
            if (o[n] !== i.defaultBuffer[n]) return !1
          return !0
        })
    },
    20235: function(t, e, r) {
      var n = e
      ;(n.der = r(7952)), (n.pem = r(3105))
    },
    3105: function(t, e, r) {
      var n = r(56329),
        i = r(7952)
      function o(t) {
        i.call(this, t), (this.enc = 'pem')
      }
      n(o, i),
        (t.exports = o),
        (o.prototype.encode = function(t, e) {
          for (
            var r = i.prototype.encode.call(this, t).toString('base64'),
              n = ['-----BEGIN ' + e.label + '-----'],
              o = 0;
            o < r.length;
            o += 64
          )
            n.push(r.slice(o, o + 64))
          return n.push('-----END ' + e.label + '-----'), n.join('\n')
        })
    },
    11973: function(t, e, r) {
      ;(e.pbkdf2 = r(2861)), (e.pbkdf2Sync = r(34935))
    },
    2861: function(t, e, r) {
      var n,
        i,
        o = r(59966).Buffer,
        s = r(87087),
        a = r(33408),
        u = r(34935),
        h = r(52115),
        f = r.g.crypto && r.g.crypto.subtle,
        c = {
          sha: 'SHA-1',
          'sha-1': 'SHA-1',
          sha1: 'SHA-1',
          sha256: 'SHA-256',
          'sha-256': 'SHA-256',
          sha384: 'SHA-384',
          'sha-384': 'SHA-384',
          'sha-512': 'SHA-512',
          sha512: 'SHA-512'
        },
        l = []
      function p() {
        return (
          i ||
          (i =
            r.g.process && r.g.process.nextTick
              ? r.g.process.nextTick
              : r.g.queueMicrotask
              ? r.g.queueMicrotask
              : r.g.setImmediate
              ? r.g.setImmediate
              : r.g.setTimeout)
        )
      }
      function d(t, e, r, n, i) {
        return f
          .importKey('raw', t, { name: 'PBKDF2' }, !1, ['deriveBits'])
          .then(function(t) {
            return f.deriveBits(
              { name: 'PBKDF2', salt: e, iterations: r, hash: { name: i } },
              t,
              n << 3
            )
          })
          .then(function(t) {
            return o.from(t)
          })
      }
      t.exports = function(t, e, i, g, y, m) {
        'function' === typeof y && ((m = y), (y = void 0))
        var b = c[(y = y || 'sha1').toLowerCase()]
        if (b && 'function' === typeof r.g.Promise) {
          if (
            (s(i, g),
            (t = h(t, a, 'Password')),
            (e = h(e, a, 'Salt')),
            'function' !== typeof m)
          )
            throw new Error('No callback provided to pbkdf2')
          !(function(t, e) {
            t.then(
              function(t) {
                p()(function() {
                  e(null, t)
                })
              },
              function(t) {
                p()(function() {
                  e(t)
                })
              }
            )
          })(
            (function(t) {
              if (r.g.process && !r.g.process.browser)
                return Promise.resolve(!1)
              if (!f || !f.importKey || !f.deriveBits)
                return Promise.resolve(!1)
              if (void 0 !== l[t]) return l[t]
              var e = d((n = n || o.alloc(8)), n, 10, 128, t)
                .then(function() {
                  return !0
                })
                .catch(function() {
                  return !1
                })
              return (l[t] = e), e
            })(b).then(function(r) {
              return r ? d(t, e, i, g, b) : u(t, e, i, g, y)
            }),
            m
          )
        } else
          p()(function() {
            var r
            try {
              r = u(t, e, i, g, y)
            } catch (n) {
              return m(n)
            }
            m(null, r)
          })
      }
    },
    33408: function(t, e, r) {
      var n,
        i = r(62285)
      if (r.g.process && r.g.process.browser) n = 'utf-8'
      else if (r.g.process && r.g.process.version) {
        n =
          parseInt(i.version.split('.')[0].slice(1), 10) >= 6
            ? 'utf-8'
            : 'binary'
      } else n = 'utf-8'
      t.exports = n
    },
    87087: function(t) {
      var e = Math.pow(2, 30) - 1
      t.exports = function(t, r) {
        if ('number' !== typeof t)
          throw new TypeError('Iterations not a number')
        if (t < 0) throw new TypeError('Bad iterations')
        if ('number' !== typeof r)
          throw new TypeError('Key length not a number')
        if (r < 0 || r > e || r !== r) throw new TypeError('Bad key length')
      }
    },
    34935: function(t, e, r) {
      var n = r(3839),
        i = r(92108),
        o = r(20307),
        s = r(59966).Buffer,
        a = r(87087),
        u = r(33408),
        h = r(52115),
        f = s.alloc(128),
        c = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20
        }
      function l(t, e, r) {
        var a = (function(t) {
            function e(e) {
              return o(t)
                .update(e)
                .digest()
            }
            function r(t) {
              return new i().update(t).digest()
            }
            return 'rmd160' === t || 'ripemd160' === t ? r : 'md5' === t ? n : e
          })(t),
          u = 'sha512' === t || 'sha384' === t ? 128 : 64
        e.length > u ? (e = a(e)) : e.length < u && (e = s.concat([e, f], u))
        for (
          var h = s.allocUnsafe(u + c[t]), l = s.allocUnsafe(u + c[t]), p = 0;
          p < u;
          p++
        )
          (h[p] = 54 ^ e[p]), (l[p] = 92 ^ e[p])
        var d = s.allocUnsafe(u + r + 4)
        h.copy(d, 0, 0, u),
          (this.ipad1 = d),
          (this.ipad2 = h),
          (this.opad = l),
          (this.alg = t),
          (this.blocksize = u),
          (this.hash = a),
          (this.size = c[t])
      }
      ;(l.prototype.run = function(t, e) {
        return (
          t.copy(e, this.blocksize),
          this.hash(e).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        )
      }),
        (t.exports = function(t, e, r, n, i) {
          a(r, n)
          var o = new l(
              (i = i || 'sha1'),
              (t = h(t, u, 'Password')),
              (e = h(e, u, 'Salt')).length
            ),
            f = s.allocUnsafe(n),
            p = s.allocUnsafe(e.length + 4)
          e.copy(p, 0, 0, e.length)
          for (var d = 0, g = c[i], y = Math.ceil(n / g), m = 1; m <= y; m++) {
            p.writeUInt32BE(m, e.length)
            for (var b = o.run(p, o.ipad1), v = b, w = 1; w < r; w++) {
              v = o.run(v, o.ipad2)
              for (var k = 0; k < g; k++) b[k] ^= v[k]
            }
            b.copy(f, d), (d += g)
          }
          return f
        })
    },
    52115: function(t, e, r) {
      var n = r(59966).Buffer
      t.exports = function(t, e, r) {
        if (n.isBuffer(t)) return t
        if ('string' === typeof t) return n.from(t, e)
        if (ArrayBuffer.isView(t)) return n.from(t.buffer)
        throw new TypeError(
          r + ' must be a string, a Buffer, a typed array or a DataView'
        )
      }
    },
    66600: function(t, e, r) {
      'use strict'
      var n = r(62285)
      'undefined' === typeof n ||
      !n.version ||
      0 === n.version.indexOf('v0.') ||
      (0 === n.version.indexOf('v1.') && 0 !== n.version.indexOf('v1.8.'))
        ? (t.exports = {
            nextTick: function(t, e, r, i) {
              if ('function' !== typeof t)
                throw new TypeError('"callback" argument must be a function')
              var o,
                s,
                a = arguments.length
              switch (a) {
                case 0:
                case 1:
                  return n.nextTick(t)
                case 2:
                  return n.nextTick(function() {
                    t.call(null, e)
                  })
                case 3:
                  return n.nextTick(function() {
                    t.call(null, e, r)
                  })
                case 4:
                  return n.nextTick(function() {
                    t.call(null, e, r, i)
                  })
                default:
                  for (o = new Array(a - 1), s = 0; s < o.length; )
                    o[s++] = arguments[s]
                  return n.nextTick(function() {
                    t.apply(null, o)
                  })
              }
            }
          })
        : (t.exports = n)
    },
    91477: function(t, e, r) {
      ;(e.publicEncrypt = r(12339)),
        (e.privateDecrypt = r(56069)),
        (e.privateEncrypt = function(t, r) {
          return e.publicEncrypt(t, r, !0)
        }),
        (e.publicDecrypt = function(t, r) {
          return e.privateDecrypt(t, r, !0)
        })
    },
    96427: function(t, e, r) {
      var n = r(36059),
        i = r(59966).Buffer
      function o(t) {
        var e = i.allocUnsafe(4)
        return e.writeUInt32BE(t, 0), e
      }
      t.exports = function(t, e) {
        for (var r, s = i.alloc(0), a = 0; s.length < e; )
          (r = o(a++)),
            (s = i.concat([
              s,
              n('sha1')
                .update(t)
                .update(r)
                .digest()
            ]))
        return s.slice(0, e)
      }
    },
    56069: function(t, e, r) {
      var n = r(74496),
        i = r(96427),
        o = r(42076),
        s = r(6373),
        a = r(55721),
        u = r(36059),
        h = r(85176),
        f = r(59966).Buffer
      t.exports = function(t, e, r) {
        var c
        c = t.padding ? t.padding : r ? 1 : 4
        var l,
          p = n(t),
          d = p.modulus.byteLength()
        if (e.length > d || new s(e).cmp(p.modulus) >= 0)
          throw new Error('decryption error')
        l = r ? h(new s(e), p) : a(e, p)
        var g = f.alloc(d - l.length)
        if (((l = f.concat([g, l], d)), 4 === c))
          return (function(t, e) {
            var r = t.modulus.byteLength(),
              n = u('sha1')
                .update(f.alloc(0))
                .digest(),
              s = n.length
            if (0 !== e[0]) throw new Error('decryption error')
            var a = e.slice(1, s + 1),
              h = e.slice(s + 1),
              c = o(a, i(h, s)),
              l = o(h, i(c, r - s - 1))
            if (
              (function(t, e) {
                ;(t = f.from(t)), (e = f.from(e))
                var r = 0,
                  n = t.length
                t.length !== e.length &&
                  (r++, (n = Math.min(t.length, e.length)))
                var i = -1
                for (; ++i < n; ) r += t[i] ^ e[i]
                return r
              })(n, l.slice(0, s))
            )
              throw new Error('decryption error')
            var p = s
            for (; 0 === l[p]; ) p++
            if (1 !== l[p++]) throw new Error('decryption error')
            return l.slice(p)
          })(p, l)
        if (1 === c)
          return (function(t, e, r) {
            var n = e.slice(0, 2),
              i = 2,
              o = 0
            for (; 0 !== e[i++]; )
              if (i >= e.length) {
                o++
                break
              }
            var s = e.slice(2, i - 1)
            ;(('0002' !== n.toString('hex') && !r) ||
              ('0001' !== n.toString('hex') && r)) &&
              o++
            s.length < 8 && o++
            if (o) throw new Error('decryption error')
            return e.slice(i)
          })(0, l, r)
        if (3 === c) return l
        throw new Error('unknown padding')
      }
    },
    12339: function(t, e, r) {
      var n = r(74496),
        i = r(15838),
        o = r(36059),
        s = r(96427),
        a = r(42076),
        u = r(6373),
        h = r(85176),
        f = r(55721),
        c = r(59966).Buffer
      t.exports = function(t, e, r) {
        var l
        l = t.padding ? t.padding : r ? 1 : 4
        var p,
          d = n(t)
        if (4 === l)
          p = (function(t, e) {
            var r = t.modulus.byteLength(),
              n = e.length,
              h = o('sha1')
                .update(c.alloc(0))
                .digest(),
              f = h.length,
              l = 2 * f
            if (n > r - l - 2) throw new Error('message too long')
            var p = c.alloc(r - n - l - 2),
              d = r - f - 1,
              g = i(f),
              y = a(c.concat([h, p, c.alloc(1, 1), e], d), s(g, d)),
              m = a(g, s(y, f))
            return new u(c.concat([c.alloc(1), m, y], r))
          })(d, e)
        else if (1 === l)
          p = (function(t, e, r) {
            var n,
              o = e.length,
              s = t.modulus.byteLength()
            if (o > s - 11) throw new Error('message too long')
            n = r
              ? c.alloc(s - o - 3, 255)
              : (function(t) {
                  var e,
                    r = c.allocUnsafe(t),
                    n = 0,
                    o = i(2 * t),
                    s = 0
                  for (; n < t; )
                    s === o.length && ((o = i(2 * t)), (s = 0)),
                      (e = o[s++]) && (r[n++] = e)
                  return r
                })(s - o - 3)
            return new u(
              c.concat([c.from([0, r ? 1 : 2]), n, c.alloc(1), e], s)
            )
          })(d, e, r)
        else {
          if (3 !== l) throw new Error('unknown padding')
          if ((p = new u(e)).cmp(d.modulus) >= 0)
            throw new Error('data too long for modulus')
        }
        return r ? f(p, d) : h(p, d)
      }
    },
    85176: function(t, e, r) {
      var n = r(6373),
        i = r(59966).Buffer
      t.exports = function(t, e) {
        return i.from(
          t
            .toRed(n.mont(e.modulus))
            .redPow(new n(e.publicExponent))
            .fromRed()
            .toArray()
        )
      }
    },
    42076: function(t) {
      t.exports = function(t, e) {
        for (var r = t.length, n = -1; ++n < r; ) t[n] ^= e[n]
        return t
      }
    },
    72450: function(t, e, r) {
      'use strict'
      var n = r(62285)
      function i() {
        throw new Error(
          'secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11'
        )
      }
      var o = r(59966),
        s = r(15838),
        a = o.Buffer,
        u = o.kMaxLength,
        h = r.g.crypto || r.g.msCrypto,
        f = Math.pow(2, 32) - 1
      function c(t, e) {
        if ('number' !== typeof t || t !== t)
          throw new TypeError('offset must be a number')
        if (t > f || t < 0) throw new TypeError('offset must be a uint32')
        if (t > u || t > e) throw new RangeError('offset out of range')
      }
      function l(t, e, r) {
        if ('number' !== typeof t || t !== t)
          throw new TypeError('size must be a number')
        if (t > f || t < 0) throw new TypeError('size must be a uint32')
        if (t + e > r || t > u) throw new RangeError('buffer too small')
      }
      function p(t, e, r, i) {
        if (n.browser) {
          var o = t.buffer,
            a = new Uint8Array(o, e, r)
          return (
            h.getRandomValues(a),
            i
              ? void n.nextTick(function() {
                  i(null, t)
                })
              : t
          )
        }
        if (!i) return s(r).copy(t, e), t
        s(r, function(r, n) {
          if (r) return i(r)
          n.copy(t, e), i(null, t)
        })
      }
      ;(h && h.getRandomValues) || !n.browser
        ? ((e.randomFill = function(t, e, n, i) {
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              )
            if ('function' === typeof e) (i = e), (e = 0), (n = t.length)
            else if ('function' === typeof n) (i = n), (n = t.length - e)
            else if ('function' !== typeof i)
              throw new TypeError('"cb" argument must be a function')
            return c(e, t.length), l(n, e, t.length), p(t, e, n, i)
          }),
          (e.randomFillSync = function(t, e, n) {
            'undefined' === typeof e && (e = 0)
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              )
            c(e, t.length), void 0 === n && (n = t.length - e)
            return l(n, e, t.length), p(t, e, n)
          }))
        : ((e.randomFill = i), (e.randomFillSync = i))
    },
    80892: function(t, e, r) {
      'use strict'
      var n = r(26382).Buffer,
        i = Object.prototype.toString
      ;(e.isArray = function(t, e) {
        if (!Array.isArray(t)) throw TypeError(e)
      }),
        (e.isBoolean = function(t, e) {
          if ('[object Boolean]' !== i.call(t)) throw TypeError(e)
        }),
        (e.isBuffer = function(t, e) {
          if (!n.isBuffer(t)) throw TypeError(e)
        }),
        (e.isFunction = function(t, e) {
          if ('[object Function]' !== i.call(t)) throw TypeError(e)
        }),
        (e.isNumber = function(t, e) {
          if ('[object Number]' !== i.call(t)) throw TypeError(e)
        }),
        (e.isObject = function(t, e) {
          if ('[object Object]' !== i.call(t)) throw TypeError(e)
        }),
        (e.isBufferLength = function(t, e, r) {
          if (t.length !== e) throw RangeError(r)
        }),
        (e.isBufferLength2 = function(t, e, r, n) {
          if (t.length !== e && t.length !== r) throw RangeError(n)
        }),
        (e.isLengthGTZero = function(t, e) {
          if (0 === t.length) throw RangeError(e)
        }),
        (e.isNumberInInterval = function(t, e, r, n) {
          if (t <= e || t >= r) throw RangeError(n)
        })
    },
    92139: function(t, e, r) {
      'use strict'
      var n = r(59966).Buffer,
        i = r(49603),
        o = n.from([
          48,
          129,
          211,
          2,
          1,
          1,
          4,
          32,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          160,
          129,
          133,
          48,
          129,
          130,
          2,
          1,
          1,
          48,
          44,
          6,
          7,
          42,
          134,
          72,
          206,
          61,
          1,
          1,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          255,
          255,
          252,
          47,
          48,
          6,
          4,
          1,
          0,
          4,
          1,
          7,
          4,
          33,
          2,
          121,
          190,
          102,
          126,
          249,
          220,
          187,
          172,
          85,
          160,
          98,
          149,
          206,
          135,
          11,
          7,
          2,
          155,
          252,
          219,
          45,
          206,
          40,
          217,
          89,
          242,
          129,
          91,
          22,
          248,
          23,
          152,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          186,
          174,
          220,
          230,
          175,
          72,
          160,
          59,
          191,
          210,
          94,
          140,
          208,
          54,
          65,
          65,
          2,
          1,
          1,
          161,
          36,
          3,
          34,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]),
        s = n.from([
          48,
          130,
          1,
          19,
          2,
          1,
          1,
          4,
          32,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          160,
          129,
          165,
          48,
          129,
          162,
          2,
          1,
          1,
          48,
          44,
          6,
          7,
          42,
          134,
          72,
          206,
          61,
          1,
          1,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          255,
          255,
          252,
          47,
          48,
          6,
          4,
          1,
          0,
          4,
          1,
          7,
          4,
          65,
          4,
          121,
          190,
          102,
          126,
          249,
          220,
          187,
          172,
          85,
          160,
          98,
          149,
          206,
          135,
          11,
          7,
          2,
          155,
          252,
          219,
          45,
          206,
          40,
          217,
          89,
          242,
          129,
          91,
          22,
          248,
          23,
          152,
          72,
          58,
          218,
          119,
          38,
          163,
          196,
          101,
          93,
          164,
          251,
          252,
          14,
          17,
          8,
          168,
          253,
          23,
          180,
          72,
          166,
          133,
          84,
          25,
          156,
          71,
          208,
          143,
          251,
          16,
          212,
          184,
          2,
          33,
          0,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          255,
          254,
          186,
          174,
          220,
          230,
          175,
          72,
          160,
          59,
          191,
          210,
          94,
          140,
          208,
          54,
          65,
          65,
          2,
          1,
          1,
          161,
          68,
          3,
          66,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ])
      ;(e.privateKeyExport = function(t, e, r) {
        var i = n.from(r ? o : s)
        return t.copy(i, r ? 8 : 9), e.copy(i, r ? 181 : 214), i
      }),
        (e.privateKeyImport = function(t) {
          var e = t.length,
            r = 0
          if (
            !(e < r + 1 || 48 !== t[r]) &&
            !(e < (r += 1) + 1) &&
            128 & t[r]
          ) {
            var n = 127 & t[r]
            if (((r += 1), !(n < 1 || n > 2) && !(e < r + n))) {
              var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0)
              if (
                !(e < (r += n) + i) &&
                !(
                  e < r + 3 ||
                  2 !== t[r] ||
                  1 !== t[r + 1] ||
                  1 !== t[r + 2]
                ) &&
                !(
                  e < (r += 3) + 2 ||
                  4 !== t[r] ||
                  t[r + 1] > 32 ||
                  e < r + 2 + t[r + 1]
                )
              )
                return t.slice(r + 2, r + 2 + t[r + 1])
            }
          }
        }),
        (e.signatureExport = function(t) {
          for (
            var e = n.concat([n.from([0]), t.r]), r = 33, o = 0;
            r > 1 && 0 === e[o] && !(128 & e[o + 1]);
            --r, ++o
          );
          for (
            var s = n.concat([n.from([0]), t.s]), a = 33, u = 0;
            a > 1 && 0 === s[u] && !(128 & s[u + 1]);
            --a, ++u
          );
          return i.encode(e.slice(o), s.slice(u))
        }),
        (e.signatureImport = function(t) {
          var e = n.alloc(32, 0),
            r = n.alloc(32, 0)
          try {
            var o = i.decode(t)
            if (
              (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)),
              o.r.length > 32)
            )
              throw new Error('R length is too long')
            if (
              (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)),
              o.s.length > 32)
            )
              throw new Error('S length is too long')
          } catch (s) {
            return
          }
          return (
            o.r.copy(e, 32 - o.r.length),
            o.s.copy(r, 32 - o.s.length),
            { r: e, s: r }
          )
        }),
        (e.signatureImportLax = function(t) {
          var e = n.alloc(32, 0),
            r = n.alloc(32, 0),
            i = t.length,
            o = 0
          if (48 === t[o++]) {
            var s = t[o++]
            if (!(128 & s && (o += s - 128) > i) && 2 === t[o++]) {
              var a = t[o++]
              if (128 & a) {
                if (o + (s = a - 128) > i) return
                for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                for (a = 0; s > 0; o += 1, s -= 1) a = (a << 8) + t[o]
              }
              if (!(a > i - o)) {
                var u = o
                if (((o += a), 2 === t[o++])) {
                  var h = t[o++]
                  if (128 & h) {
                    if (o + (s = h - 128) > i) return
                    for (; s > 0 && 0 === t[o]; o += 1, s -= 1);
                    for (h = 0; s > 0; o += 1, s -= 1) h = (h << 8) + t[o]
                  }
                  if (!(h > i - o)) {
                    var f = o
                    for (o += h; a > 0 && 0 === t[u]; a -= 1, u += 1);
                    if (!(a > 32)) {
                      var c = t.slice(u, u + a)
                      for (
                        c.copy(e, 32 - c.length);
                        h > 0 && 0 === t[f];
                        h -= 1, f += 1
                      );
                      if (!(h > 32)) {
                        var l = t.slice(f, f + h)
                        return l.copy(r, 32 - l.length), { r: e, s: r }
                      }
                    }
                  }
                }
              }
            }
          }
        })
    },
    5484: function(t, e, r) {
      'use strict'
      var n = r(80892),
        i = r(92139),
        o = r(19411)
      function s(t, e) {
        return void 0 === t ? e : (n.isBoolean(t, o.COMPRESSED_TYPE_INVALID), t)
      }
      t.exports = function(t) {
        return {
          privateKeyVerify: function(e) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === e.length && t.privateKeyVerify(e)
            )
          },
          privateKeyExport: function(e, r) {
            n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = s(r, !0))
            var a = t.privateKeyExport(e, r)
            return i.privateKeyExport(e, a, r)
          },
          privateKeyImport: function(e) {
            if (
              (n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (e = i.privateKeyImport(e)) &&
                32 === e.length &&
                t.privateKeyVerify(e))
            )
              return e
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL)
          },
          privateKeyNegate: function(e) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.privateKeyNegate(e)
            )
          },
          privateKeyModInverse: function(e) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.privateKeyModInverse(e)
            )
          },
          privateKeyTweakAdd: function(e, r) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              t.privateKeyTweakAdd(e, r)
            )
          },
          privateKeyTweakMul: function(e, r) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              t.privateKeyTweakMul(e, r)
            )
          },
          publicKeyCreate: function(e, r) {
            return (
              n.isBuffer(e, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(e, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = s(r, !0)),
              t.publicKeyCreate(e, r)
            )
          },
          publicKeyConvert: function(e, r) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (r = s(r, !0)),
              t.publicKeyConvert(e, r)
            )
          },
          publicKeyVerify: function(e) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID), t.publicKeyVerify(e)
            )
          },
          publicKeyTweakAdd: function(e, r, i) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = s(i, !0)),
              t.publicKeyTweakAdd(e, r, i)
            )
          },
          publicKeyTweakMul: function(e, r, i) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = s(i, !0)),
              t.publicKeyTweakMul(e, r, i)
            )
          },
          publicKeyCombine: function(e, r) {
            n.isArray(e, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              n.isLengthGTZero(e, o.EC_PUBLIC_KEYS_LENGTH_INVALID)
            for (var i = 0; i < e.length; ++i)
              n.isBuffer(e[i], o.EC_PUBLIC_KEY_TYPE_INVALID),
                n.isBufferLength2(e[i], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID)
            return (r = s(r, !0)), t.publicKeyCombine(e, r)
          },
          signatureNormalize: function(e) {
            return (
              n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              t.signatureNormalize(e)
            )
          },
          signatureExport: function(e) {
            n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(e, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID)
            var r = t.signatureExport(e)
            return i.signatureExport(r)
          },
          signatureImport: function(e) {
            n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID)
            var r = i.signatureImport(e)
            if (r) return t.signatureImport(r)
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
          },
          signatureImportLax: function(e) {
            n.isBuffer(e, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(e, o.ECDSA_SIGNATURE_LENGTH_INVALID)
            var r = i.signatureImportLax(e)
            if (r) return t.signatureImport(r)
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL)
          },
          sign: function(e, r, i) {
            n.isBuffer(e, o.MSG32_TYPE_INVALID),
              n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID)
            var s = null,
              a = null
            return (
              void 0 !== i &&
                (n.isObject(i, o.OPTIONS_TYPE_INVALID),
                void 0 !== i.data &&
                  (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID),
                  n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (s = i.data)),
                void 0 !== i.noncefn &&
                  (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (a = i.noncefn))),
              t.sign(e, r, a, s)
            )
          },
          verify: function(e, r, i) {
            return (
              n.isBuffer(e, o.MSG32_TYPE_INVALID),
              n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              t.verify(e, r, i)
            )
          },
          recover: function(e, r, i, a) {
            return (
              n.isBuffer(e, o.MSG32_TYPE_INVALID),
              n.isBufferLength(e, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID),
              n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (a = s(a, !0)),
              t.recover(e, r, i, a)
            )
          },
          ecdh: function(e, r) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              t.ecdh(e, r)
            )
          },
          ecdhUnsafe: function(e, r, i) {
            return (
              n.isBuffer(e, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(e, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (i = s(i, !0)),
              t.ecdhUnsafe(e, r, i)
            )
          }
        }
      }
    },
    15578: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
      )
    },
    656: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
      )
    },
    48906: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
      )
    },
    5028: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
      )
    },
    63543: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"blake3":30,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,"x11":4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}'
      )
    },
    21139: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
      )
    },
    19411: function(t) {
      'use strict'
      t.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}'
      )
    }
  }
])
//# sourceMappingURL=516.0c45a4c4-d5973.chunk.js.map
