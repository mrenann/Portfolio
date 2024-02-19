(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['lyricist-lyricist-compose'] = factory(typeof this['lyricist-lyricist-compose'] === 'undefined' ? {} : this['lyricist-lyricist-compose']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=lyricist-lyricist-compose.js.map
