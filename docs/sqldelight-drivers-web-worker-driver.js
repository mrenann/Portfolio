(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['sqldelight-drivers-web-worker-driver'] = factory(typeof this['sqldelight-drivers-web-worker-driver'] === 'undefined' ? {} : this['sqldelight-drivers-web-worker-driver']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=sqldelight-drivers-web-worker-driver.js.map
