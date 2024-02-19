(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'lyricist-lyricist-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'lyricist-lyricist-core'.");
    }
    root['lyricist-lyricist-core'] = factory(typeof this['lyricist-lyricist-core'] === 'undefined' ? {} : this['lyricist-lyricist-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var Annotation = kotlin_kotlin.$_$.pj;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  //endregion
  //region block: pre-declaration
  setMetadataFor(LyricistStrings, 'LyricistStrings', classMeta, VOID, [Annotation]);
  //endregion
  function LyricistStrings(languageTag, default_0) {
    default_0 = default_0 === VOID ? false : default_0;
    this.languageTag_1 = languageTag;
    this.default_1 = default_0;
  }
  protoOf(LyricistStrings).get_languageTag_5jvgw7_k$ = function () {
    return this.languageTag_1;
  };
  protoOf(LyricistStrings).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(LyricistStrings).equals = function (other) {
    if (!(other instanceof LyricistStrings))
      return false;
    var tmp0_other_with_cast = other instanceof LyricistStrings ? other : THROW_CCE();
    if (!(this.languageTag_1 === tmp0_other_with_cast.languageTag_1))
      return false;
    if (!(this.default_1 === tmp0_other_with_cast.default_1))
      return false;
    return true;
  };
  protoOf(LyricistStrings).hashCode = function () {
    var result = imul(getStringHashCode('languageTag'), 127) ^ getStringHashCode(this.languageTag_1);
    result = result + (imul(getStringHashCode('default'), 127) ^ getBooleanHashCode(this.default_1)) | 0;
    return result;
  };
  protoOf(LyricistStrings).toString = function () {
    return '@cafe.adriel.lyricist.LyricistStrings(languageTag=' + this.languageTag_1 + ', default=' + this.default_1 + ')';
  };
  return _;
}));

//# sourceMappingURL=lyricist-lyricist-core.js.map
