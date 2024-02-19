(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-transitions'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'voyager-voyager-transitions'.");
    }
    root['voyager-voyager-transitions'] = factory(typeof this['voyager-voyager-transitions'] === 'undefined' ? {} : this['voyager-voyager-transitions'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var to = kotlin_kotlin.$_$.bm;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_EnterScales() {
    _init_properties_ScaleTransition_kt__7iad83();
    return EnterScales;
  }
  var EnterScales;
  function get_ExitScales() {
    _init_properties_ScaleTransition_kt__7iad83();
    return ExitScales;
  }
  var ExitScales;
  var properties_initialized_ScaleTransition_kt_kmkt8v;
  function _init_properties_ScaleTransition_kt__7iad83() {
    if (!properties_initialized_ScaleTransition_kt_kmkt8v) {
      properties_initialized_ScaleTransition_kt_kmkt8v = true;
      EnterScales = to(1.1, 0.95);
      ExitScales = to(get_EnterScales().get_second_jf7fjx_k$(), get_EnterScales().get_first_irdx8n_k$());
    }
  }
  return _;
}));

//# sourceMappingURL=voyager-voyager-transitions.js.map
