var _0x14058b = _0x1584;
(function(_0x2d0173, _0x5df1d2) {
    var _0x387834 = _0x1584
      , _0x264a31 = _0x2d0173();
    while (!![]) {
        try {
            var _0x30358c = -parseInt(_0x387834(0x23f)) / 0x1 * (-parseInt(_0x387834(0x23a)) / 0x2) + parseInt(_0x387834(0x1ab)) / 0x3 * (-parseInt(_0x387834(0x1d4)) / 0x4) + parseInt(_0x387834(0x205)) / 0x5 + -parseInt(_0x387834(0x207)) / 0x6 + parseInt(_0x387834(0x1c4)) / 0x7 * (-parseInt(_0x387834(0x1a7)) / 0x8) + -parseInt(_0x387834(0x1dd)) / 0x9 + -parseInt(_0x387834(0x1fb)) / 0xa * (-parseInt(_0x387834(0x227)) / 0xb);
            if (_0x30358c === _0x5df1d2)
                break;
            else
                _0x264a31['push'](_0x264a31['shift']());
        } catch (_0x9ae345) {
            _0x264a31['push'](_0x264a31['shift']());
        }
    }
}(_0x3448, 0x187b0));
const applicationNameMeta = document[_0x14058b(0x1df)]('meta[name=\x22application-name\x22]')
  , authorMeta = document[_0x14058b(0x1df)](_0x14058b(0x22f))
  , isValid = applicationNameMeta && authorMeta && applicationNameMeta[_0x14058b(0x224)] === _0x14058b(0x225) && authorMeta['content'] === _0x14058b(0x1e2);
!isValid && alert(_0x14058b(0x1b7));
Date['now'] || (Date[_0x14058b(0x20a)] = function() {
    return new Date()['getTime']();
}
),
(function() {
    'use strict';
    var _0x220767 = _0x14058b;
    for (var _0x59aa5b = [_0x220767(0x1d6), _0x220767(0x218)], _0x3947ff = 0x0; _0x3947ff < _0x59aa5b[_0x220767(0x20e)] && !window[_0x220767(0x1b8)]; ++_0x3947ff) {
        var _0x582ebf = _0x59aa5b[_0x3947ff];
        window[_0x220767(0x1b8)] = window[_0x582ebf + 'RequestAnimationFrame'],
        window[_0x220767(0x1c1)] = window[_0x582ebf + _0x220767(0x208)] || window[_0x582ebf + _0x220767(0x200)];
    }
    if (/iP(ad|hone|od).*OS 6/['test'](window[_0x220767(0x1c3)]['userAgent']) || !window[_0x220767(0x1b8)] || !window[_0x220767(0x1c1)]) {
        var _0x2b34ea = 0x0;
        window['requestAnimationFrame'] = function(_0x4028ed) {
            var _0x300e2a = _0x220767
              , _0x41199e = Date[_0x300e2a(0x20a)]()
              , _0x2996b1 = Math['max'](_0x2b34ea + 0x10, _0x41199e);
            return setTimeout(function() {
                _0x4028ed(_0x2b34ea = _0x2996b1);
            }, _0x2996b1 - _0x41199e);
        }
        ,
        window[_0x220767(0x1c1)] = clearTimeout;
    }
}());
function _0x1584(_0x224584, _0x28a9c8) {
    var _0x344809 = _0x3448();
    return _0x1584 = function(_0x158491, _0x3ad421) {
        _0x158491 = _0x158491 - 0x1a1;
        var _0x30ce0e = _0x344809[_0x158491];
        return _0x30ce0e;
    }
    ,
    _0x1584(_0x224584, _0x28a9c8);
}
var snowFall = (function() {
    function _0x384b39() {
        var _0x31b4d0 = _0x1584
          , _0x296f5a = {
            'flakeCount': 0x23,
            'flakeColor': _0x31b4d0(0x1ed),
            'flakeIndex': 0xf423f,
            'minSize': 0x1,
            'maxSize': 0x2,
            'minSpeed': 0x1,
            'maxSpeed': 0x5,
            'round': !0x1,
            'shadow': !0x1,
            'collection': !0x1,
            'image': !0x1,
            'collectionHeight': 0x28
        }
          , _0x348b5d = []
          , _0x46ebc6 = {}
          , _0x452623 = 0x0
          , _0xa89e73 = 0x0
          , _0x4bc433 = 0x0
          , _0xfed5c8 = 0x0
          , _0x5528da = function(_0x381b53, _0x3535ff) {
            var _0x243122 = _0x31b4d0;
            for (var _0x2521d3 in _0x3535ff)
                _0x381b53[_0x243122(0x22a)](_0x2521d3) && (_0x381b53[_0x2521d3] = _0x3535ff[_0x2521d3]);
        }
          , _0x347926 = function(_0x37fddc, _0x1cdc9c) {
            var _0x4c63d8 = _0x31b4d0;
            return Math['round'](_0x37fddc + Math[_0x4c63d8(0x23b)]() * (_0x1cdc9c - _0x37fddc));
        }
          , _0x547898 = function(_0x1e5e84, _0x54e71e) {
            var _0x45840d = _0x31b4d0;
            for (var _0x3971ca in _0x54e71e)
                _0x1e5e84[_0x45840d(0x223)][_0x3971ca] = _0x54e71e[_0x3971ca] + (_0x45840d(0x1af) == _0x3971ca || _0x45840d(0x1a2) == _0x3971ca ? 'px' : '');
        }
          , _0x34f6e0 = function(_0x823595, _0x51fd32, _0x5813ed) {
            var _0x3354a0 = _0x31b4d0;
            this['x'] = _0x347926(_0x4bc433, _0xa89e73 - _0x4bc433),
            this['y'] = _0x347926(0x0, _0x452623),
            this[_0x3354a0(0x238)] = _0x51fd32,
            this[_0x3354a0(0x229)] = _0x5813ed,
            this['step'] = 0x0,
            this[_0x3354a0(0x1bc)] = _0x347926(0x1, 0xa) / 0x64,
            _0x296f5a[_0x3354a0(0x21d)] && (this[_0x3354a0(0x1be)] = canvasCollection[_0x347926(0x0, canvasCollection[_0x3354a0(0x20e)] - 0x1)]);
            var _0x2ea1d7 = null;
            _0x296f5a[_0x3354a0(0x213)] ? (_0x2ea1d7 = new Image(),
            _0x2ea1d7[_0x3354a0(0x1f8)] = _0x296f5a['image']) : (_0x2ea1d7 = document[_0x3354a0(0x1c6)](_0x3354a0(0x1e3)),
            _0x547898(_0x2ea1d7, {
                'background': _0x296f5a[_0x3354a0(0x242)]
            })),
            _0x2ea1d7[_0x3354a0(0x1c8)] = 'snowfall-flakes',
            _0x547898(_0x2ea1d7, {
                'width': this[_0x3354a0(0x238)],
                'height': this[_0x3354a0(0x238)],
                'position': _0x3354a0(0x20f),
                'top': this['y'],
                'left': this['x'],
                'fontSize': 0x0,
                'zIndex': _0x296f5a[_0x3354a0(0x236)]
            }),
            _0x296f5a[_0x3354a0(0x1ac)] && _0x547898(_0x2ea1d7, {
                '-moz-border-radius': ~~_0x296f5a['maxSize'] + 'px',
                '-webkit-border-radius': ~~_0x296f5a[_0x3354a0(0x1a5)] + 'px',
                'borderRadius': ~~_0x296f5a[_0x3354a0(0x1a5)] + 'px'
            }),
            _0x296f5a['shadow'] && _0x547898(_0x2ea1d7, {
                '-moz-box-shadow': '1px\x201px\x201px\x20#555',
                '-webkit-box-shadow': _0x3354a0(0x1e9),
                'boxShadow': '1px\x201px\x201px\x20#555'
            }),
            _0x823595[_0x3354a0(0x1eb)] === document[_0x3354a0(0x1c9)][_0x3354a0(0x1eb)] ? document[_0x3354a0(0x1c9)][_0x3354a0(0x22b)](_0x2ea1d7) : _0x823595[_0x3354a0(0x22b)](_0x2ea1d7),
            this[_0x3354a0(0x1d5)] = _0x2ea1d7,
            this[_0x3354a0(0x1da)] = function() {
                var _0x35be8f = _0x3354a0;
                this['y'] += this['speed'],
                this['y'] > _0x452623 - (this['size'] + 0x6) && this['reset'](),
                this['element']['style'][_0x35be8f(0x226)] = this['y'] + 'px',
                this['element'][_0x35be8f(0x223)]['left'] = this['x'] + 'px',
                this[_0x35be8f(0x228)] += this['stepSize'],
                this['x'] += Math[_0x35be8f(0x1f1)](this[_0x35be8f(0x228)]),
                (this['x'] + this['size'] > _0xa89e73 - _0x4bc433 || this['x'] < _0x4bc433) && this[_0x35be8f(0x230)]();
            }
            ,
            this[_0x3354a0(0x230)] = function() {
                var _0x4c2220 = _0x3354a0;
                this['y'] = 0x0,
                this['x'] = _0x347926(_0x4bc433, _0xa89e73 - _0x4bc433),
                this[_0x4c2220(0x1bc)] = _0x347926(0x1, 0xa) / 0x64,
                this[_0x4c2220(0x238)] = _0x347926(0x64 * _0x296f5a[_0x4c2220(0x1d1)], 0x64 * _0x296f5a[_0x4c2220(0x1a5)]) / 0x64,
                this[_0x4c2220(0x1d5)][_0x4c2220(0x223)][_0x4c2220(0x1af)] = this[_0x4c2220(0x238)] + 'px',
                this[_0x4c2220(0x1d5)][_0x4c2220(0x223)]['height'] = this[_0x4c2220(0x238)] + 'px',
                this[_0x4c2220(0x229)] = _0x347926(_0x296f5a[_0x4c2220(0x1a9)], _0x296f5a[_0x4c2220(0x22d)]);
            }
            ;
        }
          , _0x3106e5 = function() {
            var _0x563960 = _0x31b4d0;
            for (var _0x33a740 = 0x0; _0x33a740 < _0x348b5d[_0x563960(0x20e)]; _0x33a740 += 0x1)
                _0x348b5d[_0x33a740][_0x563960(0x1da)]();
            _0xfed5c8 = requestAnimationFrame(function() {
                _0x3106e5();
            });
        };
        return {
            'snow': function(_0x554fc5, _0x1a5899) {
                var _0x5816e8 = _0x31b4d0;
                for (_0x5528da(_0x296f5a, _0x1a5899),
                _0x46ebc6 = _0x554fc5,
                _0x452623 = _0x46ebc6[_0x5816e8(0x1f4)],
                _0xa89e73 = _0x46ebc6[_0x5816e8(0x1f7)],
                _0x46ebc6['snow'] = this,
                'body' === _0x46ebc6[_0x5816e8(0x1eb)]['toLowerCase']() && (_0x4bc433 = 0x19),
                window[_0x5816e8(0x1d9)](_0x5816e8(0x1b2), function() {
                    var _0x50a008 = _0x5816e8;
                    _0x452623 = _0x46ebc6[_0x50a008(0x23e)],
                    _0xa89e73 = _0x46ebc6[_0x50a008(0x1f7)];
                }, !0x0),
                i = 0x0; i < _0x296f5a['flakeCount']; i += 0x1)
                    _0x348b5d[_0x5816e8(0x239)](new _0x34f6e0(_0x46ebc6,_0x347926(0x64 * _0x296f5a['minSize'], 0x64 * _0x296f5a[_0x5816e8(0x1a5)]) / 0x64,_0x347926(_0x296f5a[_0x5816e8(0x1a9)], _0x296f5a['maxSpeed'])));
                _0x3106e5();
            },
            'clear': function() {
                var _0x5ca963 = _0x31b4d0
                  , _0x537d67 = null;
                _0x537d67 = _0x46ebc6[_0x5ca963(0x21a)] ? _0x46ebc6['getElementsByClassName'](_0x5ca963(0x1bf)) : _0x46ebc6[_0x5ca963(0x1bd)](_0x5ca963(0x1db));
                for (var _0x3e4e78 = _0x537d67['length']; _0x3e4e78--; )
                    _0x537d67[_0x3e4e78][_0x5ca963(0x212)] === _0x46ebc6 && _0x46ebc6['removeChild'](_0x537d67[_0x3e4e78]);
                cancelAnimationFrame(_0xfed5c8);
            }
        };
    }
    return {
        'snow': function(_0x321dc2, _0x12dd65) {
            var _0x5134cb = _0x1584;
            if ('string' == typeof _0x12dd65) {
                if (_0x321dc2['length'] > 0x0) {
                    for (var _0x3bcb9a = 0x0; _0x3bcb9a < _0x321dc2[_0x5134cb(0x20e)]; _0x3bcb9a++)
                        _0x321dc2[_0x3bcb9a][_0x5134cb(0x1fe)] && _0x321dc2[_0x3bcb9a][_0x5134cb(0x1fe)][_0x5134cb(0x221)]();
                } else
                    _0x321dc2[_0x5134cb(0x1fe)][_0x5134cb(0x221)]();
            } else {
                if (_0x321dc2['length'] > 0x0) {
                    for (var _0x3bcb9a = 0x0; _0x3bcb9a < _0x321dc2[_0x5134cb(0x20e)]; _0x3bcb9a++)
                        new _0x384b39()[_0x5134cb(0x1fe)](_0x321dc2[_0x3bcb9a], _0x12dd65);
                } else
                    new _0x384b39()['snow'](_0x321dc2, _0x12dd65);
            }
        }
    };
}())
  , SNOW_Picture = biicore[_0x14058b(0x1ce)] + _0x14058b(0x1ea)
  , special_custom = [_0x14058b(0x1a6), _0x14058b(0x1fc)];
function _0x3448() {
    var _0x340983 = ['\x22\x20style=\x22border:\x201px\x20solid\x20#fff;border-radius:\x2050%;width:30px!important;margin-right:5px;\x22\x20/>\x0a\x09\x09\x09\x09<span\x20class=\x22show-desktop\x22\x20style=\x22margin-left:\x205px;\x22>', 'icon', 'offsetHeight', 'isPremium', 'click', 'offsetWidth', 'src', 'Kéo\x20xuống', 'includes', '387460OvXyVu', '64a04f6beb89a210fc07656a', '\x22\x20/></a></div>\x0a\x09<div\x20class=\x22bii-footer\x22\x20style=\x22z-index:9999;background-color:\x20#000;border-top:\x201px\x20solid\x20#df4759;color:\x20#fff;text-align:\x20center;letter-spacing:\x201px;bottom:\x200;width:\x20100%;font-size:\x2015px;\x22>\x0a\x09\x09<div\x20class=\x22container\x22>\x0a\x09\x09\x09<a\x20style=\x22color:\x20#fff;padding:\x2010px\x200\x2013px;display:\x20flex;align-items:\x20center;justify-content:\x20center;\x22\x20href=\x22', 'snow', 'replace', 'CancelRequestAnimationFrame', 'indexOf', 'scroll', 'Tắt\x20thông\x20báo', 'write', '315145rxbxWA', 'canPlayType', '839004noJHWU', 'CancelAnimationFrame', 'some', 'now', '\x0a\x09<style\x20type=\x22text/css\x22>\x0a\x09@-webkit-keyframes\x20biilogo-pulse\x20{\x0a\x09\x20\x20from\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09\x20\x2050%\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20}\x0a\x09\x20\x20to\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09}\x0a\x09\x0a\x09@keyframes\x20biilogo-pulse\x20{\x0a\x09\x20\x20from\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09\x20\x2050%\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20}\x0a\x09\x20\x20to\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09}\x0a\x09.bii-player{position:\x20fixed;bottom:\x2070px;left:\x2050px;width:\x2040px;height:\x2040px;z-index:99999;display:none;}\x0a\x09.bii-player\x20.playerIcon{cursor:pointer;display:\x20block;width:40px;height:40px;-webkit-border-radius:\x2050%;-moz-border-radius:\x2050%;-o-border-radius:\x2050%;-ms-border-radius:\x2050%;border-radius:\x2050%;background-color:\x20#df4758;padding-top:\x207px;padding-left:\x209px;position:absolute;z-index:\x202;}\x0a\x09.bii-player:after{content:\x20\x22\x22;position:\x20absolute;-webkit-border-radius:\x2050%;-moz-border-radius:\x2050%;-o-border-radius:\x2050%;-ms-border-radius:\x2050%;border-radius:\x2050%;z-index:\x20-1;background-color:\x20rgba(242,\x2059,\x2067,\x200.3);width:\x20120%;height:\x20120%;left:\x20-10%;top:\x20-10%;-webkit-animation:\x20biilogo-pulse\x201s\x20infinite;animation:\x20biilogo-pulse\x201s\x20infinite;z-index:\x201;}\x0a\x09.bii-player\x20img{width:\x20100%;z-index:\x2099999;position:\x20absolute;cursor:pointer;}\x0a\x09.bii-player.show-sec\x20.bii-player-secondary{visibility:\x20visible;}\x0a\x09.bii-player.show-sec\x20.bii-player-secondary-content{\x20transform:\x20translate3d(0,\x200,\x200);}\x0a\x09.bii-player-secondary{position:\x20absolute;width:\x20310px;left:\x2025px;height:\x2050px;overflow:\x20hidden;visibility:\x20hidden;}\x0a\x09.bii-player-secondary-content{display:\x20flex;align-items:\x20center;cursor:pointer;user-select:\x20none;position:\x20absolute;width:\x20310px;left:\x20-25px;background:\x20#fff;height:\x2040px;padding:\x208px\x2011px\x208px\x2050px;border:\x201px\x20solid\x20#df4759;border-radius:\x2030px;z-index:\x201;font-size:14px;transform:\x20translate3d(-100%,\x200,\x200);transition:\x20transform\x20175ms\x20ease;font-family:\x20arial;font-weight:\x20200;color:\x20#000;}\x0a\x09@media\x20(max-width:\x20799px)\x20{\x0a\x09\x20\x20.bii-player{bottom:\x2030px;left:\x2020px;}\x0a\x09}\x0a\x09</style>\x0a\x09<div\x20class=\x22bii-player\x22>\x0a\x09\x09<div\x20onclick=\x22playPause();\x22\x20class=\x22bii-player-secondary\x22><div\x20class=\x22bii-player-secondary-content\x22>Click\x20vào\x20đây\x20nếu\x20bạn\x20muốn\x20phát\x20nhạc!</div></div>\x0a\x09\x09<div\x20onclick=\x22playPause();\x22\x20class=\x22playerIcon\x22>\x0a\x09\x09\x09<span\x20id=\x22playerVolumeOff\x22>\x0a\x09\x09\x09\x09<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2225\x22\x20height=\x2227\x22\x20fill=\x22#fff\x22\x20class=\x22bi\x20bi-volume-mute-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x09\x09\x09\x09\x20\x20<path\x20d=\x22M6.717\x203.55A.5.5\x200\x200\x201\x207\x204v8a.5.5\x200\x200\x201-.812.39L3.825\x2010.5H1.5A.5.5\x200\x200\x201\x201\x2010V6a.5.5\x200\x200\x201\x20.5-.5h2.325l2.363-1.89a.5.5\x200\x200\x201\x20.529-.06zm7.137\x202.096a.5.5\x200\x200\x201\x200\x20.708L12.207\x208l1.647\x201.646a.5.5\x200\x200\x201-.708.708L11.5\x208.707l-1.646\x201.647a.5.5\x200\x200\x201-.708-.708L10.793\x208\x209.146\x206.354a.5.5\x200\x201\x201\x20.708-.708L11.5\x207.293l1.646-1.647a.5.5\x200\x200\x201\x20.708\x200z\x22/>\x0a\x09\x09\x09\x09</svg>\x0a\x09\x09\x09</span>\x0a\x09\x09\x09<span\x20style=\x22display:none;\x22\x20id=\x22playerVolumeOn\x22>\x0a\x09\x09\x09\x09<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2225\x22\x20height=\x2227\x22\x20fill=\x22#fff\x22\x20class=\x22bi\x20bi-volume-up-fill\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x09\x09\x09\x09\x20\x20<path\x20d=\x22M11.536\x2014.01A8.473\x208.473\x200\x200\x200\x2014.026\x208a8.473\x208.473\x200\x200\x200-2.49-6.01l-.708.707A7.476\x207.476\x200\x200\x201\x2013.025\x208c0\x202.071-.84\x203.946-2.197\x205.303l.708.707z\x22/>\x0a\x09\x09\x09\x09\x20\x20<path\x20d=\x22M10.121\x2012.596A6.48\x206.48\x200\x200\x200\x2012.025\x208a6.48\x206.48\x200\x200\x200-1.904-4.596l-.707.707A5.483\x205.483\x200\x200\x201\x2011.025\x208a5.483\x205.483\x200\x200\x201-1.61\x203.89l.706.706z\x22/>\x0a\x09\x09\x09\x09\x20\x20<path\x20d=\x22M8.707\x2011.182A4.486\x204.486\x200\x200\x200\x2010.025\x208a4.486\x204.486\x200\x200\x200-1.318-3.182L8\x205.525A3.489\x203.489\x200\x200\x201\x209.025\x208\x203.49\x203.49\x200\x200\x201\x208\x2010.475l.707.707zM6.717\x203.55A.5.5\x200\x200\x201\x207\x204v8a.5.5\x200\x200\x201-.812.39L3.825\x2010.5H1.5A.5.5\x200\x200\x201\x201\x2010V6a.5.5\x200\x200\x201\x20.5-.5h2.325l2.363-1.89a.5.5\x200\x200\x201\x20.529-.06z\x22/>\x0a\x09\x09\x09\x09</svg>\x0a\x09\x09\x09</span>\x0a\x09\x09</div>\x0a\x09</div>\x0a\x09', 'classList', 'from', 'length', 'absolute', 'bii-player', 'templatePremium', 'parentNode', 'image', 'AUDIO', 'number', 'visible', 'getFullYear', 'moz', '</span><span\x20class=\x22show-mobile\x22>', 'getElementsByClassName', 'block', 'playerVolumeOff', 'collection', '\x0a\x09<style\x20type=\x22text/css\x22>\x0a\x09@-webkit-keyframes\x20biilogo-pulse\x20{\x0a\x09\x20\x20from\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09\x20\x2050%\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20}\x0a\x09\x20\x20to\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09}\x0a\x09\x0a\x09@keyframes\x20biilogo-pulse\x20{\x0a\x09\x20\x20from\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09\x20\x2050%\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(0.95,\x200.95,\x200.95);\x0a\x09\x20\x20}\x0a\x09\x20\x20to\x20{\x0a\x09\x20\x20\x20\x20-webkit-transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20\x20\x20transform:\x20scale3d(1,\x201,\x201);\x0a\x09\x20\x20}\x0a\x09}\x0a\x09.bii-logo{position:\x20fixed;bottom:\x2070px;right:\x2050px;width:\x2040px;height:\x2040px;z-index:99998;}\x0a\x09.bii-logo\x20a{display:\x20block;}\x0a\x09.bii-logo:before{content:\x20\x22\x22;position:\x20absolute;-webkit-border-radius:\x2050%;-moz-border-radius:\x2050%;-o-border-radius:\x2050%;-ms-border-radius:\x2050%;border-radius:\x2050%;z-index:\x20-1;background-color:\x20rgba(242,\x2059,\x2067,\x200.3);width:\x20120%;height:\x20120%;left:\x20-10%;top:\x20-10%;-webkit-animation:\x20biilogo-pulse\x201s\x20infinite;animation:\x20biilogo-pulse\x201s\x20infinite;z-index:\x201;}\x0a\x09.bii-logo\x20img{width:\x20100%;z-index:\x2099999;position:\x20absolute;cursor:pointer;border-radius:\x2050%;}\x0a\x09.bii-logo:hover\x20.bii-logo-secondary{visibility:\x20visible;}\x0a\x09.bii-logo:hover\x20.bii-logo-secondary-content{\x20transform:\x20translate3d(0,\x200,\x200);}\x0a\x09.bii-logo.show-sec\x20.bii-logo-secondary{visibility:\x20visible;}\x0a\x09.bii-logo.show-sec\x20.bii-logo-secondary-content{\x20transform:\x20translate3d(0,\x200,\x200);}\x0a\x09\x0a\x09.bii-logo-secondary{position:\x20absolute;width:\x20320px;right:\x2025px;height:\x2040px;overflow:\x20hidden;visibility:\x20hidden;}\x0a\x09.bii-logo-secondary-content{display:\x20flex;align-items:\x20center;position:\x20absolute;width:\x20320px;right:\x20-25px;background:\x20#fff;height:\x2040px;padding:\x208px\x2040px\x208px\x2011px;border:\x201px\x20solid\x20#df4759;border-radius:\x2030px;z-index:\x209999;font-size:14px;transform:\x20translate3d(100%,\x200,\x200);transition:\x20transform\x20175ms\x20ease;font-family:\x20arial;font-weight:\x20200;color:\x20#000;\x20justify-content:\x20center!important}\x0a\x09.bii-footer\x20.show-desktop{display:\x20inline-block;}\x0a\x09.bii-footer\x20.show-mobile{display:\x20none;}\x0a\x09@media\x20(max-width:\x20799px)\x20{\x0a\x09\x20\x20.bii-logo{bottom:\x2030px;right:\x2020px;}\x0a\x09\x20\x20.bii-footer\x20.show-desktop{display:\x20none;}\x0a\x09\x20\x20.bii-footer\x20.show-mobile{display:\x20inline-block;}\x0a\x09}\x0a\x09</style>\x0a\x09<div\x20class=\x22bii-logo\x22><div\x20class=\x22bii-logo-secondary\x22><div\x20class=\x22bii-logo-secondary-content\x22>', 'keyCode', 'bii-logo', 'clear', 'value', 'style', 'content', 'iWedding', 'top', '143gvWjCi', 'step', 'speed', 'hasOwnProperty', 'appendChild', 'visibility', 'maxSpeed', 'isAutoPlay', 'meta[name=\x22author\x22]', 'reset', 'keydown', 'setAttribute', '.mouse-scroll-on-mobile', 'none', 'alert', 'flakeIndex', '\x0a\x09<style\x20type=text/css>\x0a\x09.mouse-scroll-on-mobile{display:none;}\x0a\x09@media\x20screen\x20and\x20(max-width:\x20576px){\x0a\x09\x09.mouse-scroll-on-mobile{width:95px;height:30px;margin:0\x200\x200\x20-30px;position:fixed;right:calc(50%\x20-\x2052px);bottom:80px;-webkit-animation:arrow\x20.5s\x201s\x20infinite\x20ease-in-out\x20alternate;z-index:999;display:block!important;visibility:hidden}\x0a\x09\x09.mouse-scroll-on-mobile:hover{-webkit-animation-play-state:paused}\x0a\x09\x09.mouse-scroll-on-mobile\x20.mouse-scroll-on-mobile-text{text-align:center;bottom:120px;position:absolute;left:1px;background:#fff;padding:5px\x2010px;border-radius:3px;font-size:15px;color:\x20#000;}\x0a\x09\x09.mouse-scroll-on-mobile\x20.mouse-scroll-on-mobile-left{position:absolute;height:5px;width:30px;background:#de4659;-webkit-transform:rotate(240deg);bottom:80px;left:42px;-webkit-border-radius:4px;-webkit-transform-origin:5px\x2050%;-webkit-animation:leftArrow\x20.5s\x201s\x20infinite\x20ease-out\x20alternate}\x0a\x09\x09.mouse-scroll-on-mobile\x20.mouse-scroll-on-mobile-right{position:absolute;height:5px;width:30px;background:#de4659;-webkit-transform:rotate(-60deg);bottom:80px;left:46px;-webkit-border-radius:4px;-webkit-transform-origin:5px\x2050%;-webkit-animation:rightArrow\x20.5s\x201s\x20infinite\x20ease-out\x20alternate}}\x0a\x09\x09@-webkit-keyframes\x20arrow{0%{bottom:0}100%{bottom:40px}}\x0a\x09\x09@-webkit-keyframes\x20leftArrow{100%{-webkit-transform:rotate(225deg)}}\x0a\x09\x09@-webkit-keyframes\x20rightArrow{100%{-webkit-transform:rotate(-45deg)}}\x0a\x09</style>\x0a\x09<div\x20class=\x22mouse-scroll-on-mobile\x22>\x0a\x09\x09<div\x20class=\x22mouse-scroll-on-mobile-text\x22>', 'size', 'push', '43954FKIgeK', 'random', '<a\x20href=\x22$1\x22\x20target=\x22_blank\x22>$1</a>', 'innerHeight', 'clientHeight', '3rLDcpe', 'footer_title_mobile', 'template_id', 'flakeColor', 'wishSuggestions', 'height', 'show-sec', 'effect', 'maxSize', '646f6e3d778825e6f306667f', '8XZYCLZ', 'scroll_down_text', 'minSpeed', 'innerText', '15yIJWcw', 'round', '.wishes-autocomplete-content', 'title', 'width', 'display', '.bii-player', 'resize', 'volume', 'cancel_button_text', 'setting', 'logo', 'Website\x20này\x20đang\x20sử\x20dụng\x20bản\x20quyền\x20của\x20Biihappy.com\x20mà\x20không\x20được\x20cho\x20phép!', 'requestAnimationFrame', '</div>\x0a\x09\x09<div\x20class=\x22mouse-scroll-on-mobile-left\x22></div>\x0a\x09\x09<div\x20class=\x22mouse-scroll-on-mobile-right\x22></div>\x0a\x09</div>\x0a\x0a\x09', 'contextmenu', '\x22\x20target=\x22_blank\x22>\x0a\x09\x09\x09\x09<img\x20width=\x2230\x22\x20src=\x22', 'stepSize', 'querySelectorAll', 'target', 'snowfall-flakes', 'paused', 'cancelAnimationFrame', '.show-autocomplete', 'navigator', '642355qOrjiW', 'add', 'createElement', 'play', 'className', 'body', 'timeout', 'bgMusic', 'forEach', 'preventDefault', 'webroot', 'searchWishSuggestions', 'toUpperCase', 'minSize', '.bii-player-secondary,\x20.playerIcon', 'textContent', '99676SKhKfT', 'element', 'webkit', 'keys', 'remove', 'addEventListener', 'update', '.snowfall-flakes', '</div></div><a\x20href=\x22', '1585728BFrIRK', 'contains', 'querySelector', 'getElementById', 'playerVolumeOn', 'Biihappy.com', 'div', 'innerWidth', 'removeEventListener', 'getElementsByTagName', 'status', '.btn-see-more-gallery', '1px\x201px\x201px\x20#555', '/common/imgs/heart.png', 'tagName', 'undefined', '#ffffff', 'url_landing_page', 'type', 'dragstart', 'cos'];
    _0x3448 = function() {
        return _0x340983;
    }
    ;
    return _0x3448();
}
window['onload'] = _0x511c89 => {
    var _0xded0eb = _0x14058b;
    if (biicore[_0xded0eb(0x1a4)]['type'] == _0xded0eb(0x234))
        return ![];
    setTimeout(function() {
        var _0x21d4b9 = _0xded0eb;
        if (biicore['effect'][_0x21d4b9(0x1ef)] == 'heart') {
            let _0x5ef613 = 0x1e;
            typeof biicore[_0x21d4b9(0x241)] !== _0x21d4b9(0x1ec) && special_custom['includes'](biicore['template_id']) && (_0x5ef613 = 0x5,
            window[_0x21d4b9(0x1e4)] <= 0x28a && (_0x5ef613 = 0x3)),
            snowFall[_0x21d4b9(0x1fe)](document['getElementsByTagName'](_0x21d4b9(0x1c9))[0x0], {
                'image': SNOW_Picture,
                'minSize': 0xf,
                'maxSize': 0x20,
                'flakeCount': _0x5ef613,
                'maxSpeed': 0x3,
                'minSpeed': 0x1
            });
        } else {
            if (biicore[_0x21d4b9(0x1a4)]['type'] == 'snow') {
                let _0x55623c = 0xfa;
                typeof biicore['template_id'] !== _0x21d4b9(0x1ec) && special_custom[_0x21d4b9(0x1fa)](biicore[_0x21d4b9(0x241)]) && (_0x55623c = 0x32,
                window[_0x21d4b9(0x1e4)] <= 0x4b0 && (_0x55623c = 0x1e),
                window[_0x21d4b9(0x1e4)] <= 0x28a && (_0x55623c = 0x19)),
                snowFall['snow'](document[_0x21d4b9(0x1e6)](_0x21d4b9(0x1c9))[0x0], {
                    'round': !![],
                    'shadow': !![],
                    'flakeCount': _0x55623c,
                    'minSize': 0x1,
                    'maxSize': 0x8
                });
            } else {
                if (biicore['effect'][_0x21d4b9(0x1ef)] == 'custom') {
                    let _0x4f1c7f = biicore[_0x21d4b9(0x1a4)][_0x21d4b9(0x1b5)]
                      , _0x125613 = parseInt(_0x4f1c7f['speed']) - 0x3;
                    if (_0x125613 <= 0x0)
                        _0x125613 = 0x1;
                    snowFall['snow'](document[_0x21d4b9(0x1e6)](_0x21d4b9(0x1c9))[0x0], {
                        'image': _0x4f1c7f[_0x21d4b9(0x1f3)],
                        'minSize': _0x4f1c7f[_0x21d4b9(0x1d1)],
                        'maxSize': _0x4f1c7f['maxSize'],
                        'flakeCount': _0x4f1c7f[_0x21d4b9(0x215)],
                        'maxSpeed': _0x4f1c7f['speed'],
                        'minSpeed': _0x125613
                    });
                }
            }
        }
    }, 0x12c);
    document[_0xded0eb(0x1e6)]('body')[0x0][_0xded0eb(0x23e)] > window[_0xded0eb(0x23d)] && setTimeout( () => {
        var _0x300c6c = _0xded0eb;
        document[_0x300c6c(0x1df)](_0x300c6c(0x233))[_0x300c6c(0x223)][_0x300c6c(0x22c)] = _0x300c6c(0x216);
    }
    , 0x320);
    showContentWishSuggestions[_0xded0eb(0x1cc)](function(_0x39fd37) {
        var _0x130207 = _0xded0eb;
        _0x39fd37['addEventListener'](_0x130207(0x1f6), function(_0x1b8d20) {
            var _0x423ead = _0x130207;
            _0x1b8d20[_0x423ead(0x1cd)]();
            // let _0x5db4c0 = this[_0x423ead(0x1d3)] || this['innerText'];
            // document[_0x423ead(0x1e0)]('content')['value'] = _0x5db4c0;
        });
    }),
    document[_0xded0eb(0x1d9)](_0xded0eb(0x1ba), function(_0xe48396) {
        var _0x360e19 = _0xded0eb;
        _0xe48396[_0x360e19(0x1cd)]();
    }),
    document[_0xded0eb(0x1d9)](_0xded0eb(0x231), function(_0x44fa81) {
        var _0x3b578f = _0xded0eb;
        _0x44fa81[_0x3b578f(0x21f)] === 0x7b && _0x44fa81[_0x3b578f(0x1cd)]();
    });
    function _0x427fba() {
        var _0x5b4061 = _0xded0eb;
        document['querySelectorAll']('img')[_0x5b4061(0x1cc)](_0x317d76 => {
            var _0x14dfd5 = _0x5b4061;
            _0x317d76[_0x14dfd5(0x1d9)](_0x14dfd5(0x1f0), function(_0x3eb78b) {
                var _0x242b86 = _0x14dfd5;
                _0x3eb78b[_0x242b86(0x1cd)]();
            });
        }
        );
    }
    _0x427fba(),
    document[_0xded0eb(0x1bd)](_0xded0eb(0x1e8))[_0xded0eb(0x1cc)](function(_0x24815d) {
        var _0xc24b73 = _0xded0eb;
        _0x24815d[_0xc24b73(0x1d9)](_0xc24b73(0x1f6), function() {
            setTimeout(_0x427fba, 0xc8);
        });
    }),
    document[_0xded0eb(0x1c9)][_0xded0eb(0x223)]['webkitTouchCallout'] = 'none';
}
,
window[_0x14058b(0x1d9)](_0x14058b(0x202), _0x17e69c => {
    var _0x3f7150 = _0x14058b;
    window['scrollY'] > 0x32 && (document[_0x3f7150(0x1df)](_0x3f7150(0x233))[_0x3f7150(0x223)][_0x3f7150(0x22c)] = 'hidden');
}
);
var scrollDownText = typeof biicore[_0x14058b(0x1a8)] != _0x14058b(0x1ec) && biicore[_0x14058b(0x1a8)] !== '' ? biicore['scroll_down_text'] : _0x14058b(0x1f9);
document['write'](_0x14058b(0x237) + scrollDownText + _0x14058b(0x1b9));
biicore[_0x14058b(0x235)] && Object[_0x14058b(0x1d7)](biicore[_0x14058b(0x235)])[_0x14058b(0x20e)] > 0x0 && biicore[_0x14058b(0x235)][_0x14058b(0x1e7)] == 0x1 && (biicore[_0x14058b(0x235)]['content'] = biicore[_0x14058b(0x235)][_0x14058b(0x224)][_0x14058b(0x1ff)](/(https?:\/\/([-\w\.]+[-\w])+(:\d+)?(\/([\w\/_.#-]*(\?\S+)?[^\.\s])?)?)/g, _0x14058b(0x23c)),
setTimeout(function() {
    var _0x549ba3 = _0x14058b;
    Swal['fire']({
        'title': biicore[_0x549ba3(0x235)][_0x549ba3(0x1ae)],
        'html': biicore['alert'][_0x549ba3(0x224)],
        'showCloseButton': ![],
        'showConfirmButton': ![],
        'showCancelButton': !![],
        'focusCancel': !![],
        'cancelButtonText': typeof biicore[_0x549ba3(0x235)][_0x549ba3(0x1b4)] != 'undefined' && biicore['alert'][_0x549ba3(0x1b4)] != '' ? biicore[_0x549ba3(0x235)][_0x549ba3(0x1b4)] : _0x549ba3(0x203)
    });
}, biicore[_0x14058b(0x235)][_0x14058b(0x1ca)]));
if (biicore['bgMusic']) {
    var audioPlayer = document[_0x14058b(0x1c6)](_0x14058b(0x214));
    audioPlayer[_0x14058b(0x223)][_0x14058b(0x1b0)] = _0x14058b(0x234),
    setTimeout(function() {
        var _0x384210 = _0x14058b;
        audioPlayer[_0x384210(0x206)]('audio/mpeg') && (audioPlayer[_0x384210(0x232)](_0x384210(0x1f8), biicore[_0x384210(0x1cb)]),
        document[_0x384210(0x21a)]('bii-player')[0x0]['style']['display'] = _0x384210(0x21b)),
        audioPlayer[_0x384210(0x1b3)] = 0.3,
        audioPlayer[_0x384210(0x232)]('controls', 'controls'),
        audioPlayer['loop'] = !![],
        biicore[_0x384210(0x22e)] && audioPlayer[_0x384210(0x232)]('autoplay', 'autoplay'),
        document['body'][_0x384210(0x22b)](audioPlayer);
    }, 0x3e8);
    var myInterval = setInterval(function() {
        var _0x419e5b = _0x14058b;
        document[_0x419e5b(0x1df)](_0x419e5b(0x1b1)) && (setTimeout(function() {
            var _0x2de71d = _0x419e5b;
            document[_0x2de71d(0x21a)](_0x2de71d(0x210))[0x0]['classList'][_0x2de71d(0x1c5)]('show-sec');
        }, 0x7d0),
        setTimeout(function() {
            var _0x1e6f46 = _0x419e5b;
            document[_0x1e6f46(0x21a)](_0x1e6f46(0x210))[0x0]['classList']['remove'](_0x1e6f46(0x1a3));
        }, 0x1b58),
        clearInterval(myInterval));
    }, 0xc8);
    function playPause() {
        var _0x345326 = _0x14058b;
        document['getElementsByClassName']('bii-player')[0x0]['classList'][_0x345326(0x1d8)]('show-sec'),
        audioPlayer[_0x345326(0x1c0)] ? (audioPlayer[_0x345326(0x1c7)](),
        document[_0x345326(0x1e0)](_0x345326(0x21c))[_0x345326(0x223)][_0x345326(0x1b0)] = 'none',
        document[_0x345326(0x1e0)](_0x345326(0x1e1))[_0x345326(0x223)][_0x345326(0x1b0)] = _0x345326(0x21b)) : (audioPlayer['pause'](),
        document[_0x345326(0x1e0)](_0x345326(0x21c))[_0x345326(0x223)][_0x345326(0x1b0)] = _0x345326(0x21b),
        document['getElementById'](_0x345326(0x1e1))[_0x345326(0x223)][_0x345326(0x1b0)] = _0x345326(0x234));
    }
    if (biicore['isAutoPlay']) {
        function handleClickAutoPlay() {
            var _0x1d32c2 = _0x14058b;
            let _0x26157d = document['querySelectorAll'](_0x1d32c2(0x1d2));
            !Array[_0x1d32c2(0x20d)](_0x26157d)['some'](_0x1074f0 => _0x1074f0['contains'](event[_0x1d32c2(0x1be)])) ? audioPlayer[_0x1d32c2(0x1c0)] && (document[_0x1d32c2(0x1c9)]['removeEventListener'](_0x1d32c2(0x1f6), handleClickAutoPlay, !![]),
            playPause()) : document[_0x1d32c2(0x1c9)][_0x1d32c2(0x1e5)](_0x1d32c2(0x1f6), handleClickAutoPlay, !![]);
        }
        document[_0x14058b(0x1c9)][_0x14058b(0x1d9)](_0x14058b(0x1f6), handleClickAutoPlay, !![]);
    }
    document[_0x14058b(0x204)](_0x14058b(0x20b));
}
if (!biicore[_0x14058b(0x1f5)] && !biicore[_0x14058b(0x211)]) {
    setTimeout(function() {
        var _0x136cc8 = _0x14058b;
        document[_0x136cc8(0x21a)](_0x136cc8(0x220))[0x0][_0x136cc8(0x20c)][_0x136cc8(0x1c5)]('show-sec');
    }, 0x1f40),
    setTimeout(function() {
        var _0x23ffb7 = _0x14058b;
        document[_0x23ffb7(0x21a)](_0x23ffb7(0x220))[0x0][_0x23ffb7(0x20c)][_0x23ffb7(0x1d8)](_0x23ffb7(0x1a3));
    }, 0x2af8),
    setTimeout(function() {
        var _0x1d121d = _0x14058b;
        document[_0x1d121d(0x21a)](_0x1d121d(0x220))[0x0][_0x1d121d(0x20c)][_0x1d121d(0x1c5)](_0x1d121d(0x1a3));
    }, 0x61a8),
    setTimeout(function() {
        var _0x1aed7d = _0x14058b;
        document[_0x1aed7d(0x21a)](_0x1aed7d(0x220))[0x0][_0x1aed7d(0x20c)]['remove'](_0x1aed7d(0x1a3));
    }, 0x6d60);
    var biiLogo = biicore[_0x14058b(0x1b6)]
      , currentYear = new Date()[_0x14058b(0x217)]();
    document['write'](_0x14058b(0x21e) + biicore[_0x14058b(0x240)] + _0x14058b(0x1dc) + biicore[_0x14058b(0x1ee)] + '\x22\x20target=\x22_blank\x22><img\x20src=\x22' + biiLogo + _0x14058b(0x1fd) + biicore[_0x14058b(0x1ee)] + _0x14058b(0x1bb) + biiLogo + _0x14058b(0x1f2) + biicore['footer_title'] + _0x14058b(0x219) + biicore[_0x14058b(0x240)] + '</span>\x0a\x09\x09\x09\x09<span\x20style=\x22line-height:\x2015px;vertical-align:\x20middle;\x22>\x0a\x09\x09\x09\x09\x09<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20fill=\x22currentColor\x22\x20class=\x22bi\x20bi-arrow-right-short\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x09\x09\x09\x09\x09\x20\x20<path\x20fill-rule=\x22evenodd\x22\x20d=\x22M4\x208a.5.5\x200\x200\x201\x20.5-.5h5.793L8.146\x205.354a.5.5\x200\x201\x201\x20.708-.708l3\x203a.5.5\x200\x200\x201\x200\x20.708l-3\x203a.5.5\x200\x200\x201-.708-.708L10.293\x208.5H4.5A.5.5\x200\x200\x201\x204\x208z\x22/>\x0a\x09\x09\x09\x09\x09</svg>\x0a\x09\x09\x09\x09</span>\x0a\x09\x09\x09</a>\x0a\x09\x09</div>\x0a\x09</div>\x0a\x09');
}
var showButtonWishSuggestions = document[_0x14058b(0x1df)](_0x14058b(0x1c2))
  , hideButtonWishSuggestions = document['querySelector']('.hide-autocomplete')
  , showContentWishSuggestions = document[_0x14058b(0x1bd)]('.showContent')
  , toggleDisplayWishesAutocomplete = function(_0x465f0f=![]) {
    var _0x53c97e = _0x14058b;
    let _0x221a00 = document[_0x53c97e(0x1df)](_0x53c97e(0x1ad))
      , _0x5f0175 = showButtonWishSuggestions[_0x53c97e(0x223)][_0x53c97e(0x1b0)] === _0x53c97e(0x234);
    if (_0x465f0f && !_0x5f0175)
        return;
    _0x221a00[_0x53c97e(0x223)]['display'] = _0x5f0175 ? 'none' : '',
    showButtonWishSuggestions[_0x53c97e(0x223)][_0x53c97e(0x1b0)] = _0x5f0175 ? '' : _0x53c97e(0x234),
    hideButtonWishSuggestions[_0x53c97e(0x223)][_0x53c97e(0x1b0)] = _0x5f0175 ? _0x53c97e(0x234) : '';
};
showButtonWishSuggestions && hideButtonWishSuggestions && (showButtonWishSuggestions[_0x14058b(0x1d9)](_0x14058b(0x1f6), function() {
    toggleDisplayWishesAutocomplete(![]);
}),
hideButtonWishSuggestions['addEventListener']('click', function() {
    toggleDisplayWishesAutocomplete(![]);
}),
document[_0x14058b(0x1c9)][_0x14058b(0x1d9)](_0x14058b(0x1f6), function(_0x1bc5e6) {
    var _0x1f531b = _0x14058b;
    (_0x1bc5e6[_0x1f531b(0x1be)] === document['body'] || !showButtonWishSuggestions[_0x1f531b(0x1de)](_0x1bc5e6[_0x1f531b(0x1be)]) && !hideButtonWishSuggestions[_0x1f531b(0x1de)](_0x1bc5e6[_0x1f531b(0x1be)]) && !document[_0x1f531b(0x1e0)](_0x1f531b(0x1cf))['contains'](_0x1bc5e6[_0x1f531b(0x1be)]) && !Array[_0x1f531b(0x20d)](showContentWishSuggestions)[_0x1f531b(0x209)](function(_0x2b9ccc) {
        var _0x2770a7 = _0x1f531b;
        return _0x2b9ccc[_0x2770a7(0x1de)](_0x1bc5e6['target']);
    })) && toggleDisplayWishesAutocomplete(!![]);
}));
function searchWishSuggestionsFunction() {
    var _0x1e0d9d = _0x14058b;
    let _0x49248a, _0x39dda4, _0x55000d, _0x44ad18, _0x4719b7, _0xb4e963, _0x52436f;
    _0x49248a = document['getElementById'](_0x1e0d9d(0x1cf)),
    _0x39dda4 = removeVietnameseTones(_0x49248a[_0x1e0d9d(0x222)][_0x1e0d9d(0x1d0)]()),
    _0x55000d = document[_0x1e0d9d(0x1e0)](_0x1e0d9d(0x1a1)),
    _0x44ad18 = _0x55000d[_0x1e0d9d(0x1e6)]('li');
    for (_0xb4e963 = 0x0; _0xb4e963 < _0x44ad18['length']; _0xb4e963++) {
        _0x4719b7 = _0x44ad18[_0xb4e963][_0x1e0d9d(0x1e6)]('a')[0x0],
        _0x52436f = _0x4719b7[_0x1e0d9d(0x1d3)] || _0x4719b7[_0x1e0d9d(0x1aa)],
        removeVietnameseTones(_0x52436f['toUpperCase']())[_0x1e0d9d(0x201)](_0x39dda4) > -0x1 ? _0x44ad18[_0xb4e963][_0x1e0d9d(0x223)][_0x1e0d9d(0x1b0)] = '' : _0x44ad18[_0xb4e963][_0x1e0d9d(0x223)][_0x1e0d9d(0x1b0)] = _0x1e0d9d(0x234);
    }
}
function removeVietnameseTones(_0x5b805d) {
    var _0x50466e = _0x14058b;
    return _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'A'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'E'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/ì|í|ị|ỉ|ĩ/g, 'I'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'O'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'U'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/ỳ|ý|ỵ|ỷ|ỹ/g, 'Y'),
    _0x5b805d = _0x5b805d['replace'](/đ/g, 'D'),
    _0x5b805d = _0x5b805d['replace'](/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/Ì|Í|Ị|Ỉ|Ĩ/g, 'I'),
    _0x5b805d = _0x5b805d['replace'](/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U'),
    _0x5b805d = _0x5b805d['replace'](/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y'),
    _0x5b805d = _0x5b805d[_0x50466e(0x1ff)](/Đ/g, 'D'),
    _0x5b805d = _0x5b805d['replace'](/[^a-zA-Z0-9 ]/g, ''),
    _0x5b805d;
}
