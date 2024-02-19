(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './voyager-voyager-core.js', './compose-multiplatform-core-runtime-saveable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./voyager-voyager-core.js'), require('./compose-multiplatform-core-runtime-saveable.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['voyager-voyager-core'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'voyager-voyager-core' was not found. Please, check whether 'voyager-voyager-core' is loaded prior to 'voyager-voyager-navigator'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-navigator'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'voyager-voyager-navigator'.");
    }
    root['voyager-voyager-navigator'] = factory(typeof this['voyager-voyager-navigator'] === 'undefined' ? {} : this['voyager-voyager-navigator'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['voyager-voyager-core'], this['compose-multiplatform-core-runtime-saveable']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_voyager_voyager_core, kotlin_org_jetbrains_compose_runtime_runtime_saveable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.cf;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var listOf = kotlin_kotlin.$_$.ha;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var startsWith = kotlin_kotlin.$_$.oi;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var toMutableStateStack = kotlin_voyager_voyager_core.$_$.h;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var ThreadSafeSet_init_$Create$ = kotlin_voyager_voyager_core.$_$.l;
  var ThreadSafeMap_init_$Create$ = kotlin_voyager_voyager_core.$_$.k;
  var Screen = kotlin_voyager_voyager_core.$_$.f;
  var isInterface = kotlin_kotlin.$_$.pe;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var ScreenLifecycleStore_getInstance = kotlin_voyager_voyager_core.$_$.m;
  var toSet = kotlin_kotlin.$_$.zb;
  var asSequence = kotlin_kotlin.$_$.n7;
  var filter = kotlin_kotlin.$_$.vg;
  var rememberScreenLifecycleOwner$composable = kotlin_voyager_voyager_core.$_$.d;
  var getNavigatorScreenLifecycleProvider$composable = kotlin_voyager_voyager_core.$_$.c;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var plus = kotlin_kotlin.$_$.pa;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var MultipleProvideBeforeScreenContent$composable = kotlin_voyager_voyager_core.$_$.b;
  var Stack = kotlin_voyager_voyager_core.$_$.g;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var toString_0 = kotlin_kotlin.$_$.dj;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.h;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.pg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var listSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var DisposableEffectIgnoringConfiguration$composable = kotlin_voyager_voyager_core.$_$.a;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var StackEvent_Pop_getInstance = kotlin_voyager_voyager_core.$_$.i;
  var StackEvent_Replace_getInstance = kotlin_voyager_voyager_core.$_$.j;
  var setOf = kotlin_kotlin.$_$.ab;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(NavigatorDisposeBehavior, 'NavigatorDisposeBehavior', classMeta, VOID, VOID, NavigatorDisposeBehavior);
  setMetadataFor(Navigator, 'Navigator', classMeta, VOID, [Stack]);
  setMetadataFor(ComposableSingletons$NavigatorKt, 'ComposableSingletons$NavigatorKt', objectMeta);
  setMetadataFor(NavigatorSaver, 'NavigatorSaver', interfaceMeta);
  setMetadataFor(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0, 'sam$cafe_adriel_voyager_navigator_NavigatorSaver$0', classMeta, VOID, [NavigatorSaver]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(NavigatorDisposable, 'NavigatorDisposable', interfaceMeta);
  setMetadataFor(NavigatorLifecycleStore, 'NavigatorLifecycleStore', objectMeta);
  //endregion
  function get_LocalNavigator() {
    _init_properties_Navigator_kt__ww6let();
    return LocalNavigator;
  }
  var LocalNavigator;
  function get_MaxSupportedRadix() {
    _init_properties_Navigator_kt__ww6let();
    return MaxSupportedRadix;
  }
  var MaxSupportedRadix;
  function get_$stableprop() {
    return 0;
  }
  function NavigatorDisposeBehavior(disposeNestedNavigators, disposeSteps) {
    disposeNestedNavigators = disposeNestedNavigators === VOID ? true : disposeNestedNavigators;
    disposeSteps = disposeSteps === VOID ? true : disposeSteps;
    this.disposeNestedNavigators_1 = disposeNestedNavigators;
    this.disposeSteps_1 = disposeSteps;
    this.$stable_1 = 0;
  }
  protoOf(NavigatorDisposeBehavior).get_disposeNestedNavigators_xxash5_k$ = function () {
    return this.disposeNestedNavigators_1;
  };
  protoOf(NavigatorDisposeBehavior).get_disposeSteps_h47es1_k$ = function () {
    return this.disposeSteps_1;
  };
  protoOf(NavigatorDisposeBehavior).component1_7eebsc_k$ = function () {
    return this.disposeNestedNavigators_1;
  };
  protoOf(NavigatorDisposeBehavior).component2_7eebsb_k$ = function () {
    return this.disposeSteps_1;
  };
  protoOf(NavigatorDisposeBehavior).copy_ccyf2t_k$ = function (disposeNestedNavigators, disposeSteps) {
    return new NavigatorDisposeBehavior(disposeNestedNavigators, disposeSteps);
  };
  protoOf(NavigatorDisposeBehavior).copy$default_7yomnt_k$ = function (disposeNestedNavigators, disposeSteps, $super) {
    disposeNestedNavigators = disposeNestedNavigators === VOID ? this.disposeNestedNavigators_1 : disposeNestedNavigators;
    disposeSteps = disposeSteps === VOID ? this.disposeSteps_1 : disposeSteps;
    return $super === VOID ? this.copy_ccyf2t_k$(disposeNestedNavigators, disposeSteps) : $super.copy_ccyf2t_k$.call(this, disposeNestedNavigators, disposeSteps);
  };
  protoOf(NavigatorDisposeBehavior).toString = function () {
    return 'NavigatorDisposeBehavior(disposeNestedNavigators=' + this.disposeNestedNavigators_1 + ', disposeSteps=' + this.disposeSteps_1 + ')';
  };
  protoOf(NavigatorDisposeBehavior).hashCode = function () {
    var result = getBooleanHashCode(this.disposeNestedNavigators_1);
    result = imul(result, 31) + getBooleanHashCode(this.disposeSteps_1) | 0;
    return result;
  };
  protoOf(NavigatorDisposeBehavior).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavigatorDisposeBehavior))
      return false;
    var tmp0_other_with_cast = other instanceof NavigatorDisposeBehavior ? other : THROW_CCE();
    if (!(this.disposeNestedNavigators_1 === tmp0_other_with_cast.disposeNestedNavigators_1))
      return false;
    if (!(this.disposeSteps_1 === tmp0_other_with_cast.disposeSteps_1))
      return false;
    return true;
  };
  function Navigator$composable(screen, disposeBehavior, onBackPressed, key, content, $composer, $changed, $default) {
    _init_properties_Navigator_kt__ww6let();
    var disposeBehavior_0 = {_v: disposeBehavior};
    var onBackPressed_0 = {_v: onBackPressed};
    var key_0 = {_v: key};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-774785591);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screen) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(disposeBehavior_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onBackPressed_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(key_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          disposeBehavior_0._v = new NavigatorDisposeBehavior();
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          $composer_0.startReplaceableGroup_ip860b_k$(903796581);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
            var value = Navigator$composable$lambda;
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          onBackPressed_0._v = tmpCache;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          key_0._v = compositionUniqueId$composable($composer_0, 0);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$NavigatorKt_getInstance().lambda_1_r8sbbp_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-774785591, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator$composable (Navigator.kt:58)');
      }
      Navigator$composable_0(listOf(screen), disposeBehavior_0._v, onBackPressed_0._v, key_0._v, content_0._v, $composer_0, 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Navigator$composable$lambda_0(screen, disposeBehavior_0, onBackPressed_0, key_0, content_0, $changed, $default));
    }
  }
  function _get_stateHolder__mr3l2k($this) {
    return $this.stateHolder_1;
  }
  function _get_stateKeys__ppd06s($this) {
    return $this.stateKeys_1;
  }
  function popUntilRoot($this, navigator) {
    var $this_0 = $this;
    var navigator_0 = navigator;
    $l$1: do {
      $l$0: do {
        navigator_0.popAll_u9won4_k$();
        if (!(navigator_0.parent_1 == null)) {
          $this_0 = $this_0;
          navigator_0 = navigator_0.parent_1;
          continue $l$0;
        }
        break $l$1;
      }
       while (false);
    }
     while (true);
  }
  function get_$stableprop_0() {
    return 8;
  }
  function saveableState$composable$provideSaveableState(stateKey, this$0, suffixKey, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(645671963);
    if (isTraceInProgress()) {
      traceEventStart(645671963, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.provideSaveableState (Navigator.kt:133)');
    }
    var providedStateKey = stateKey + ':' + suffixKey;
    // Inline function 'kotlin.collections.plusAssign' call
    this$0.stateKeys_1.add_utx5q5_k$(providedStateKey);
    this$0.stateHolder_1.SaveableStateProvider$composable_pz6ujh_k$(providedStateKey, content, $composer_0, 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function Navigator$lastItem$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_lastItemOrNull_32n3yc_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = 'Navigator has no screen';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    };
  }
  function Navigator$dispose$lambda($screen) {
    return function (it) {
      return startsWith(it, $screen.get_key_18j28a_k$());
    };
  }
  function Navigator$saveableState$composable$lambda($stateKey, this$0) {
    return function (suffix, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffix) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1585690675, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:147)');
        }
        saveableState$composable$provideSaveableState($stateKey, this$0, suffix, content, $composer_0, 14 & $dirty | 112 & $dirty);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_1 = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function Navigator$saveableState$composable$lambda_0(this$0, $stateKey, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-720851089, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous> (Navigator.kt:149)');
        }
        this$0.stateHolder_1.SaveableStateProvider$composable_pz6ujh_k$($stateKey, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Navigator$saveableState$composable$lambda_1($tmp0_rcvr, $key, $screen, $content, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.saveableState$composable_rfpwca_k$($key, $screen._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Navigator(screens, key, stateHolder, disposeBehavior, parent) {
    parent = parent === VOID ? null : parent;
    this.key_1 = key;
    this.stateHolder_1 = stateHolder;
    this.disposeBehavior_1 = disposeBehavior;
    this.parent_1 = parent;
    this.$$delegate_0__1 = toMutableStateStack(screens, 1);
    var tmp = this;
    var tmp0_safe_receiver = this.parent_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.level_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver + 1 | 0;
    tmp.level_1 = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var tmp_0 = this;
    tmp_0.lastItem$delegate_1 = derivedStateOf(Navigator$lastItem$delegate$lambda(this));
    this.stateKeys_1 = ThreadSafeSet_init_$Create$();
    this.children_1 = ThreadSafeMap_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(Navigator).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Navigator).get_disposeBehavior_22mwrc_k$ = function () {
    return this.disposeBehavior_1;
  };
  protoOf(Navigator).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Navigator).get_canPop_bsgoru_k$ = function () {
    return this.$$delegate_0__1.get_canPop_bsgoru_k$();
  };
  protoOf(Navigator).get_isEmpty_zauvru_k$ = function () {
    return this.$$delegate_0__1.get_isEmpty_zauvru_k$();
  };
  protoOf(Navigator).get_items_it823b_k$ = function () {
    return this.$$delegate_0__1.get_items_it823b_k$();
  };
  protoOf(Navigator).get_lastEvent_tm6i9x_k$ = function () {
    return this.$$delegate_0__1.get_lastEvent_tm6i9x_k$();
  };
  protoOf(Navigator).get_lastItemOrNull_32n3yc_k$ = function () {
    return this.$$delegate_0__1.get_lastItemOrNull_32n3yc_k$();
  };
  protoOf(Navigator).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(Navigator).clearEvent_bmlf2b_k$ = function () {
    this.$$delegate_0__1.clearEvent_bmlf2b_k$();
  };
  protoOf(Navigator).plusAssign_414rfe_k$ = function (item) {
    this.$$delegate_0__1.plusAssign_xe8c45_k$(item);
  };
  protoOf(Navigator).plusAssign_xe8c45_k$ = function (item) {
    return this.plusAssign_414rfe_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).plusAssign_8dzrzs_k$ = function (items) {
    this.$$delegate_0__1.plusAssign_9eor8c_k$(items);
  };
  protoOf(Navigator).plusAssign_9eor8c_k$ = function (items) {
    return this.plusAssign_8dzrzs_k$(items);
  };
  protoOf(Navigator).pop_2dsh_k$ = function () {
    return this.$$delegate_0__1.pop_2dsh_k$();
  };
  protoOf(Navigator).popAll_u9won4_k$ = function () {
    this.$$delegate_0__1.popAll_u9won4_k$();
  };
  protoOf(Navigator).popUntil_kgn6l6_k$ = function (predicate) {
    return this.$$delegate_0__1.popUntil_uyz3y_k$(predicate);
  };
  protoOf(Navigator).popUntil_uyz3y_k$ = function (predicate) {
    return this.popUntil_kgn6l6_k$(predicate);
  };
  protoOf(Navigator).push_tzofdj_k$ = function (item) {
    this.$$delegate_0__1.push_zcykck_k$(item);
  };
  protoOf(Navigator).push_zcykck_k$ = function (item) {
    return this.push_tzofdj_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).push_eolzg7_k$ = function (items) {
    this.$$delegate_0__1.push_9hkglv_k$(items);
  };
  protoOf(Navigator).push_9hkglv_k$ = function (items) {
    return this.push_eolzg7_k$(items);
  };
  protoOf(Navigator).replace_h7nwnj_k$ = function (item) {
    this.$$delegate_0__1.replace_pkss0m_k$(item);
  };
  protoOf(Navigator).replace_pkss0m_k$ = function (item) {
    return this.replace_h7nwnj_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).replaceAll_lh9igm_k$ = function (item) {
    this.$$delegate_0__1.replaceAll_ivnlbl_k$(item);
  };
  protoOf(Navigator).replaceAll_ivnlbl_k$ = function (item) {
    return this.replaceAll_lh9igm_k$((!(item == null) ? isInterface(item, Screen) : false) ? item : THROW_CCE());
  };
  protoOf(Navigator).replaceAll_1y2vvo_k$ = function (items) {
    this.$$delegate_0__1.replaceAll_qv2ydc_k$(items);
  };
  protoOf(Navigator).replaceAll_qv2ydc_k$ = function (items) {
    return this.replaceAll_1y2vvo_k$(items);
  };
  protoOf(Navigator).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(Navigator).get_lastItem_f337v6_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lastItem$delegate_1;
    lastItem$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Navigator).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Navigator).saveableState_n29sb9_k$ = function (key, screen, content) {
    illegalDecoyCallException('saveableState');
  };
  protoOf(Navigator).popUntilRoot_3dsldr_k$ = function () {
    popUntilRoot(this, this);
  };
  protoOf(Navigator).dispose_ur2opo_k$ = function (screen) {
    ScreenLifecycleStore_getInstance().remove_as1q9_k$(screen);
    // Inline function 'kotlin.sequences.forEach' call
    var tmp = asSequence(toSet(this.stateKeys_1));
    var tmp0_iterator = filter(tmp, Navigator$dispose$lambda(screen)).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.dispose.<anonymous>' call
      this.stateHolder_1.removeState_5wfli9_k$(element);
      // Inline function 'kotlin.collections.minusAssign' call
      this.stateKeys_1.remove_cedx0m_k$(element);
    }
  };
  protoOf(Navigator).saveableState$composable_rfpwca_k$ = function (key, screen, content, $composer, $changed, $default) {
    var screen_0 = {_v: screen};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(742290439);
    var $dirty = $changed;
    if (!(($default & 2) === 0)) {
      screen_0._v = this.get_lastItem_f337v6_k$();
      $dirty = $dirty & -113;
    }
    if (isTraceInProgress()) {
      traceEventStart(742290439, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable (Navigator.kt:128)');
    }
    var stateKey = screen_0._v.get_key_18j28a_k$() + ':' + key;
    // Inline function 'kotlin.collections.plusAssign' call
    this.stateKeys_1.add_utx5q5_k$(stateKey);
    var lifecycleOwner = rememberScreenLifecycleOwner$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    var navigatorScreenLifecycleOwners = getNavigatorScreenLifecycleProvider$composable(screen_0._v, $composer_0, 14 & $dirty >> 3);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(lifecycleOwner) | $composer_1.changed_ga7h3f_k$(navigatorScreenLifecycleOwners));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
      var value = plus(listOf(lifecycleOwner), navigatorScreenLifecycleOwners);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var composed = tmp0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -1585690675, true, Navigator$saveableState$composable$lambda(stateKey, this));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
      $composer_2.updateRememberedValue_l1wh71_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_2.endReplaceableGroup_ern0ak_k$();
    var tmp_4 = tmp0_0;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>' call
    var tmp_5 = $composer_0;
    var dispatchReceiver_0 = composableLambda(tmp_5, -720851089, true, Navigator$saveableState$composable$lambda_0(this, stateKey, content));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_3.rememberedValue_4dg93v_k$();
    var tmp_6;
    if (invalid_1 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.navigator.Navigator.saveableState$composable.<anonymous>.<anonymous>' call
      var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
      $composer_3.updateRememberedValue_l1wh71_k$(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = it_1;
    }
    var tmp_7 = tmp_6;
    var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
    $composer_3.endReplaceableGroup_ern0ak_k$();
    MultipleProvideBeforeScreenContent$composable(composed, tmp_4, tmp0_1, $composer_0, 432);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Navigator$saveableState$composable$lambda_1(this, key, screen_0, content, $changed, $default));
    }
  };
  function compositionUniqueId$composable($composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1925977400);
    if (isTraceInProgress()) {
      traceEventStart(1925977400, $changed, -1, 'cafe.adriel.voyager.navigator.compositionUniqueId$composable (Navigator.kt:189)');
    }
    var tmp0 = toString_0($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), get_MaxSupportedRadix());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavigatorKt$lambda_1$lambda_w32gh9(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-2123251383, $changed, -1, 'cafe.adriel.voyager.navigator.ComposableSingletons$NavigatorKt.lambda-1.<anonymous> (Navigator.kt:57)');
    }
    CurrentScreen$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavigatorKt$lambda_2$lambda_a4f4fo(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1321178729, $changed, -1, 'cafe.adriel.voyager.navigator.ComposableSingletons$NavigatorKt.lambda-2.<anonymous> (Navigator.kt:74)');
    }
    CurrentScreen$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavigatorKt() {
    ComposableSingletons$NavigatorKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-2123251383, false, ComposableSingletons$NavigatorKt$lambda_1$lambda_w32gh9));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1321178729, false, ComposableSingletons$NavigatorKt$lambda_2$lambda_a4f4fo));
  }
  protoOf(ComposableSingletons$NavigatorKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$NavigatorKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$NavigatorKt_instance;
  function ComposableSingletons$NavigatorKt_getInstance() {
    if (ComposableSingletons$NavigatorKt_instance == null)
      new ComposableSingletons$NavigatorKt();
    return ComposableSingletons$NavigatorKt_instance;
  }
  function Navigator$composable_0(screens, disposeBehavior, onBackPressed, key, content, $composer, $changed, $default) {
    _init_properties_Navigator_kt__ww6let();
    var disposeBehavior_0 = {_v: disposeBehavior};
    var onBackPressed_0 = {_v: onBackPressed};
    var key_0 = {_v: key};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-725301904);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screens) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(disposeBehavior_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.changedInstance_s1wkiy_k$(onBackPressed_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(key_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          disposeBehavior_0._v = new NavigatorDisposeBehavior();
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          $composer_0.startReplaceableGroup_ip860b_k$(903797045);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
            var value = Navigator$composable$lambda_1;
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          onBackPressed_0._v = tmpCache;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          key_0._v = compositionUniqueId$composable($composer_0, 0);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$NavigatorKt_getInstance().lambda_2_r8sbbo_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-725301904, $dirty, -1, 'cafe.adriel.voyager.navigator.Navigator$composable (Navigator.kt:75)');
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!screens.isEmpty_y1axqb_k$()) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
        var message = 'Navigator must have at least one screen';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = key_0._v;
      // Inline function 'kotlin.contracts.contract' call
      if (!(charSequenceLength(this_1) > 0)) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
        var message_0 = "Navigator key can't be empty";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp_1 = [get_LocalNavigatorStateHolder().providesDefault_33irs0_k$(rememberSaveableStateHolder$composable($composer_0, 0))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1982643221, true, Navigator$composable$lambda_2(screens, key_0, disposeBehavior_0, onBackPressed_0, content_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Navigator$composable$lambda_3(screens, disposeBehavior_0, onBackPressed_0, key_0, content_0, $changed, $default));
    }
  }
  function CurrentScreen$composable($composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-368870729);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-368870729, $changed, -1, 'cafe.adriel.voyager.navigator.CurrentScreen$composable (Navigator.kt:42)');
      }
      var navigator = $get_currentOrThrow$$composable_rbkviq(get_LocalNavigator(), $composer_0, 6);
      var currentScreen = navigator.get_lastItem_f337v6_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 279379675, true, CurrentScreen$composable$lambda(currentScreen));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      navigator.saveableState$composable_rfpwca_k$('currentScreen', null, tmp0, $composer_0, 4486, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CurrentScreen$composable$lambda_0($changed));
    }
  }
  function $get_currentOrThrow$$composable_rbkviq(_this__u8e3s4, $composer, $changed) {
    _init_properties_Navigator_kt__ww6let();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1230333919);
    if (isTraceInProgress()) {
      traceEventStart(1230333919, $changed, -1, 'cafe.adriel.voyager.navigator.$get-currentOrThrow$$composable (Navigator.kt:39)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'CompositionLocal is null';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function LocalNavigator$lambda() {
    _init_properties_Navigator_kt__ww6let();
    return null;
  }
  function Navigator$composable$lambda(it) {
    _init_properties_Navigator_kt__ww6let();
    return true;
  }
  function Navigator$composable$lambda_0($screen, $disposeBehavior, $onBackPressed, $key, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Navigator$composable($screen, $disposeBehavior._v, $onBackPressed._v, $key._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Navigator$composable$lambda_1(it) {
    _init_properties_Navigator_kt__ww6let();
    return true;
  }
  function Navigator$composable$lambda$lambda($disposeBehavior, $navigator, $onBackPressed, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-184665941, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous> (Navigator.kt:91)');
        }
        $composer_0.startReplaceableGroup_ip860b_k$(1081875402);
        if ($disposeBehavior._v.disposeSteps_1) {
          StepDisposableEffect$composable($navigator, $composer_0, 8);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        NavigatorBackHandler$composable($navigator, $onBackPressed._v, $composer_0, 8);
        $content._v($navigator, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Navigator$composable$lambda_2($screens, $key, $disposeBehavior, $onBackPressed, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1982643221, $changed, -1, 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous> (Navigator.kt:82)');
        }
        var tmp_0 = $key._v;
        var tmp_1 = $disposeBehavior._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var this_0 = get_LocalNavigator();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
        sourceInformationMarkerEnd($composer_1);
        var navigator = rememberNavigator$composable($screens, tmp_0, tmp_1, tmp0, $composer_0, 4096);
        $composer_0.startReplaceableGroup_ip860b_k$(-1587654);
        var tmp0_safe_receiver = navigator.parent_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.disposeBehavior_1;
        if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.disposeNestedNavigators_1) === false)) {
          NavigatorDisposableEffect$composable(navigator, $composer_0, 8);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_2 = [get_LocalNavigator().provides_3agxel_k$(navigator)];
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -184665941, true, Navigator$composable$lambda$lambda($disposeBehavior, navigator, $onBackPressed, $content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.navigator.Navigator$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        CompositionLocalProvider$composable(tmp_2, tmp0_0, $composer_0, 48);
        ChildrenNavigationDisposableEffect$composable(navigator, $composer_0, 8);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Navigator$composable$lambda_3($screens, $disposeBehavior, $onBackPressed, $key, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Navigator$composable_0($screens, $disposeBehavior._v, $onBackPressed._v, $key._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CurrentScreen$composable$lambda($currentScreen) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(279379675, $changed, -1, 'cafe.adriel.voyager.navigator.CurrentScreen$composable.<anonymous> (Navigator.kt:47)');
        }
        $currentScreen.Content$composable_xd8m9d_k$($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function CurrentScreen$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      CurrentScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function lastItem$factory() {
    return getPropertyCallableRef('lastItem', 1, KProperty1, function (receiver) {
      return receiver.get_lastItem_f337v6_k$();
    }, null);
  }
  var properties_initialized_Navigator_kt_hi8lg9;
  function _init_properties_Navigator_kt__ww6let() {
    if (!properties_initialized_Navigator_kt_hi8lg9) {
      properties_initialized_Navigator_kt_hi8lg9 = true;
      LocalNavigator = staticCompositionLocalOf(LocalNavigator$lambda);
      MaxSupportedRadix = 36;
    }
  }
  function get_LocalNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return LocalNavigatorSaver;
  }
  var LocalNavigatorSaver;
  function NavigatorSaver() {
  }
  function defaultNavigatorSaver() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda;
    return new sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(tmp);
  }
  function sam$cafe_adriel_voyager_navigator_NavigatorSaver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$cafe_adriel_voyager_navigator_NavigatorSaver$0).saver_jnhgef_k$ = function (initialScreens, key, stateHolder, disposeBehavior, parent) {
    return this.function_1(initialScreens, key, stateHolder, disposeBehavior, parent);
  };
  function LocalNavigatorSaver$lambda() {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return defaultNavigatorSaver();
  }
  function defaultNavigatorSaver$lambda(_anonymous_parameter_0__qggqh8, key, stateHolder, disposeBehavior, parent) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    var tmp = defaultNavigatorSaver$lambda$lambda;
    return listSaver(tmp, defaultNavigatorSaver$lambda$lambda_0(key, stateHolder, disposeBehavior, parent));
  }
  function defaultNavigatorSaver$lambda$lambda($this$listSaver, navigator) {
    _init_properties_NavigatorSaver_kt__tlqrj2();
    return navigator.get_items_it823b_k$();
  }
  function defaultNavigatorSaver$lambda$lambda_0($key, $stateHolder, $disposeBehavior, $parent) {
    return function (items) {
      return new Navigator(items, $key, $stateHolder, $disposeBehavior, $parent);
    };
  }
  var properties_initialized_NavigatorSaver_kt_fldups;
  function _init_properties_NavigatorSaver_kt__tlqrj2() {
    if (!properties_initialized_NavigatorSaver_kt_fldups) {
      properties_initialized_NavigatorSaver_kt_fldups = true;
      LocalNavigatorSaver = staticCompositionLocalOf(LocalNavigatorSaver$lambda);
    }
  }
  function NavigatorBackHandler$composable(navigator, onBackPressed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1175033175);
    if (isTraceInProgress()) {
      traceEventStart(-1175033175, $changed, -1, 'cafe.adriel.voyager.navigator.internal.NavigatorBackHandler$composable (NavigatorBackHandler.kt:13)');
    }
    if (!(onBackPressed == null)) {
      var tmp;
      if (navigator.get_canPop_bsgoru_k$()) {
        tmp = true;
      } else {
        var tmp0_safe_receiver = navigator.get_parent_hy4reb_k$();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_canPop_bsgoru_k$();
        tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      }
      var tmp_0 = tmp;
      BackHandler$composable(tmp_0, NavigatorBackHandler$composable$lambda(onBackPressed, navigator), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(NavigatorBackHandler$composable$lambda_0(navigator, onBackPressed, $changed));
    }
  }
  function NavigatorBackHandler$composable$lambda($onBackPressed, $navigator) {
    return function () {
      var tmp;
      if ($onBackPressed($navigator.get_lastItem_f337v6_k$())) {
        var tmp_0;
        if (!$navigator.pop_2dsh_k$()) {
          var tmp0_safe_receiver = $navigator.get_parent_hy4reb_k$();
          if (tmp0_safe_receiver == null)
            null;
          else
            tmp0_safe_receiver.pop_2dsh_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function NavigatorBackHandler$composable$lambda_0($navigator, $onBackPressed, $$changed) {
    return function ($composer, $force) {
      NavigatorBackHandler$composable($navigator, $onBackPressed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_disposableEvents() {
    _init_properties_NavigatorDisposable_kt__vh123p();
    return disposableEvents;
  }
  var disposableEvents;
  function NavigatorDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(467747341);
    if (isTraceInProgress()) {
      traceEventStart(467747341, $changed, -1, 'cafe.adriel.voyager.navigator.internal.NavigatorDisposableEffect$composable (NavigatorDisposable.kt:15)');
    }
    DisposableEffectIgnoringConfiguration$composable(navigator, NavigatorDisposableEffect$composable$lambda(navigator), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavigatorDisposableEffect$composable$lambda_0(navigator, $changed));
    }
  }
  function StepDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(657971410);
    if (isTraceInProgress()) {
      traceEventStart(657971410, $changed, -1, 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable (NavigatorDisposable.kt:26)');
    }
    var currentScreens = navigator.get_items_it823b_k$();
    DisposableEffect$composable(currentScreens, StepDisposableEffect$composable$lambda(navigator, currentScreens), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StepDisposableEffect$composable$lambda_0(navigator, $changed));
    }
  }
  function ChildrenNavigationDisposableEffect$composable(navigator, $composer, $changed) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1113565941);
    if (isTraceInProgress()) {
      traceEventStart(-1113565941, $changed, -1, 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable (NavigatorDisposable.kt:45)');
    }
    DisposableEffectIgnoringConfiguration$composable(navigator, ChildrenNavigationDisposableEffect$composable$lambda(navigator), $composer_0, 8);
    DisposableEffectIgnoringConfiguration$composable(navigator, ChildrenNavigationDisposableEffect$composable$lambda_0(navigator), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ChildrenNavigationDisposableEffect$composable$lambda_1(navigator, $changed));
    }
  }
  function disposeNavigator(navigator) {
    _init_properties_NavigatorDisposable_kt__vh123p();
    var tmp0_iterator = navigator.get_items_it823b_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var screen = tmp0_iterator.next_20eer_k$();
      navigator.dispose_ur2opo_k$(screen);
    }
    NavigatorLifecycleStore_getInstance().remove_w18qrg_k$(navigator);
    navigator.clearEvent_bmlf2b_k$();
  }
  function _no_name_provided__qut3iv($navigator) {
    this.$navigator_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.NavigatorDisposableEffect$composable.<anonymous>.<anonymous>' call
    disposeNavigator(this.$navigator_1);
  };
  function NavigatorDisposableEffect$composable$lambda($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($navigator);
    };
  }
  function NavigatorDisposableEffect$composable$lambda_0($navigator, $$changed) {
    return function ($composer, $force) {
      NavigatorDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_0($navigator, $currentScreens) {
    this.$navigator_1 = $navigator;
    this.$currentScreens_1 = $currentScreens;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.$navigator_1.get_items_it823b_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$0 = item.get_key_18j28a_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var newScreenKeys = destination;
    if (get_disposableEvents().contains_aljjnj_k$(this.$navigator_1.get_lastEvent_tm6i9x_k$())) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_1 = this.$currentScreens_1;
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        if (!newScreenKeys.contains_aljjnj_k$(element.get_key_18j28a_k$())) {
          destination_0.add_utx5q5_k$(element);
        }
      }
      var tmp0_iterator_1 = destination_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.navigator.internal.StepDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        this.$navigator_1.dispose_ur2opo_k$(element_0);
      }
      this.$navigator_1.clearEvent_bmlf2b_k$();
    }
  };
  function StepDisposableEffect$composable$lambda($navigator, $currentScreens) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($navigator, $currentScreens);
    };
  }
  function StepDisposableEffect$composable$lambda_0($navigator, $$changed) {
    return function ($composer, $force) {
      StepDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function invoke$_anonymous_$disposeChildren_7jkhk5(navigator) {
    disposeNavigator(navigator);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = navigator.get_children_4cwbp4_k$().get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable$lambda.invoke.<anonymous>$disposeChildren.<anonymous>' call
      invoke$_anonymous_$disposeChildren_7jkhk5(element);
    }
    navigator.get_children_4cwbp4_k$().clear_j9egeb_k$();
  }
  function _no_name_provided__qut3iv_1($navigator) {
    this.$navigator_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3nnxhr_k$ = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>' call
    if (this.$navigator_1.get_parent_hy4reb_k$() == null ? true : this.$navigator_1.get_disposeBehavior_22mwrc_k$().get_disposeNestedNavigators_xxash5_k$()) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.$navigator_1.get_children_4cwbp4_k$().get_values_ksazhn_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
        invoke$_anonymous_$disposeChildren_7jkhk5(element);
      }
    }
  };
  function ChildrenNavigationDisposableEffect$composable$lambda($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($navigator);
    };
  }
  function _no_name_provided__qut3iv_2($navigator) {
    this.$navigator_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3nnxhr_k$ = function () {
    // Inline function 'cafe.adriel.voyager.navigator.internal.ChildrenNavigationDisposableEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$navigator_1.get_parent_hy4reb_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_disposeBehavior_22mwrc_k$();
    if (!((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_disposeNestedNavigators_xxash5_k$()) === false)) {
      var tmp2_safe_receiver = this.$navigator_1.get_parent_hy4reb_k$();
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_children_4cwbp4_k$();
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver.remove_gppy8k_k$(this.$navigator_1.get_key_18j28a_k$());
    }
  };
  function ChildrenNavigationDisposableEffect$composable$lambda_0($navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      var tmp0_safe_receiver = $navigator.get_parent_hy4reb_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_children_4cwbp4_k$();
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.put_4fpzoq_k$($navigator.get_key_18j28a_k$(), $navigator);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($navigator);
    };
  }
  function ChildrenNavigationDisposableEffect$composable$lambda_1($navigator, $$changed) {
    return function ($composer, $force) {
      ChildrenNavigationDisposableEffect$composable($navigator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_NavigatorDisposable_kt_m7icmf;
  function _init_properties_NavigatorDisposable_kt__vh123p() {
    if (!properties_initialized_NavigatorDisposable_kt_m7icmf) {
      properties_initialized_NavigatorDisposable_kt_m7icmf = true;
      disposableEvents = setOf([StackEvent_Pop_getInstance(), StackEvent_Replace_getInstance()]);
    }
  }
  function get_LocalNavigatorStateHolder() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    return LocalNavigatorStateHolder;
  }
  var LocalNavigatorStateHolder;
  function rememberNavigator$composable(screens, key, disposeBehavior, parent, $composer, $changed) {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1890251691);
    if (isTraceInProgress()) {
      traceEventStart(-1890251691, $changed, -1, 'cafe.adriel.voyager.navigator.internal.rememberNavigator$composable (NavigatorSaverInternal.kt:22)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalNavigatorStateHolder();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var stateHolder = tmp0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_1 = get_LocalNavigatorSaver();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.consume_ebzcrh_k$(this_1);
    sourceInformationMarkerEnd($composer_2);
    var navigatorSaver = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var keys = [navigatorSaver, stateHolder, parent, disposeBehavior];
    var $composer_3 = $composer_0;
    $composer_3.startReplaceableGroup_ip860b_k$(-1603429786);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys.length;
    while (inductionVariable < last) {
      var key_0 = keys[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_3.changed_ga7h3f_k$(key_0));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_3.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid_0 ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.navigator.internal.rememberNavigator$composable.<anonymous>' call
      var value = navigatorSaver.saver_jnhgef_k$(screens, key, stateHolder, disposeBehavior, parent);
      $composer_3.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_3.endReplaceableGroup_ern0ak_k$();
    var saver = tmp0_1;
    var tmp0_2 = rememberSaveable$composable([], saver, key, rememberNavigator$composable$lambda(screens, key, stateHolder, disposeBehavior, parent), $composer_0, 8 | 896 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_2;
  }
  function LocalNavigatorStateHolder$lambda() {
    _init_properties_NavigatorSaverInternal_kt__hwzrut();
    var message = 'LocalNavigatorStateHolder not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function rememberNavigator$composable$lambda($screens, $key, $stateHolder, $disposeBehavior, $parent) {
    return function () {
      return new Navigator($screens, $key, $stateHolder, $disposeBehavior, $parent);
    };
  }
  var properties_initialized_NavigatorSaverInternal_kt_5u8j7n;
  function _init_properties_NavigatorSaverInternal_kt__hwzrut() {
    if (!properties_initialized_NavigatorSaverInternal_kt_5u8j7n) {
      properties_initialized_NavigatorSaverInternal_kt_5u8j7n = true;
      LocalNavigatorStateHolder = staticCompositionLocalOf(LocalNavigatorStateHolder$lambda);
    }
  }
  function NavigatorDisposable() {
  }
  function _get_owners__kco8vf($this) {
    return $this.owners_1;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function NavigatorLifecycleStore() {
    NavigatorLifecycleStore_instance = this;
    this.owners_1 = ThreadSafeMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(NavigatorLifecycleStore).get_tt9mnu_k$ = function (navigator, screenDisposeListenerType, factory) {
    // Inline function 'kotlin.collections.getOrPut' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.owners_1;
    var key = navigator.get_key_18j28a_k$();
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'cafe.adriel.voyager.navigator.lifecycle.NavigatorLifecycleStore.get.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = ThreadSafeMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.lifecycle.NavigatorLifecycleStore.get.<anonymous>.<anonymous>' call
      this_1.put_4fpzoq_k$(screenDisposeListenerType, factory(navigator.get_key_18j28a_k$()));
      var answer = this_1;
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_2 = tmp;
    var value_0 = this_2.get_wei43m_k$(screenDisposeListenerType);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'cafe.adriel.voyager.navigator.lifecycle.NavigatorLifecycleStore.get.<anonymous>' call
      var answer_0 = factory(navigator.get_key_18j28a_k$());
      this_2.put_4fpzoq_k$(screenDisposeListenerType, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    return tmp_0;
  };
  protoOf(NavigatorLifecycleStore).remove_w18qrg_k$ = function (navigator) {
    var tmp0_safe_receiver = this.owners_1.remove_gppy8k_k$(navigator.get_key_18j28a_k$());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.navigator.lifecycle.NavigatorLifecycleStore.remove.<anonymous>' call
        element.get_value_j01efc_k$().onDispose_oyzsu8_k$(navigator);
      }
    }
  };
  var NavigatorLifecycleStore_instance;
  function NavigatorLifecycleStore_getInstance() {
    if (NavigatorLifecycleStore_instance == null)
      new NavigatorLifecycleStore();
    return NavigatorLifecycleStore_instance;
  }
  function BackHandler$composable(enabled, onBack, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1772181261);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1772181261, $changed, -1, 'cafe.adriel.voyager.navigator.internal.BackHandler$composable (Actuals.js.kt:5)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BackHandler$composable$lambda(enabled, onBack, $changed));
    }
  }
  function BackHandler$composable$lambda($enabled, $onBack, $$changed) {
    return function ($composer, $force) {
      BackHandler$composable($enabled, $onBack, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Navigator$composable;
  _.$_$.b = NavigatorDisposeBehavior;
  _.$_$.c = compositionUniqueId$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-navigator.js.map
