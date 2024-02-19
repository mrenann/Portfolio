(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['sqldelight-runtime'] = factory(typeof this['sqldelight-runtime'] === 'undefined' ? {} : this['sqldelight-runtime']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-runtime.js.map
