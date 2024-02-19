(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'voyager-voyager-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'voyager-voyager-core'.");
    }
    root['voyager-voyager-core'] = factory(typeof this['voyager-voyager-core'] === 'undefined' ? {} : this['voyager-voyager-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var Annotation = kotlin_kotlin.$_$.pj;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DisposableEffectScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.pe;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var removeFirst = kotlin_kotlin.$_$.ua;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var removeFirstOrNull = kotlin_kotlin.$_$.ta;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var toList = kotlin_kotlin.$_$.tb;
  var objectCreate = kotlin_kotlin.$_$.af;
  var lastOrNull = kotlin_kotlin.$_$.ca;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var toMutableStateList = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var addAll = kotlin_kotlin.$_$.i7;
  var get_lastIndex = kotlin_kotlin.$_$.z9;
  var removeLast = kotlin_kotlin.$_$.wa;
  var KMutableProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var KProperty1 = kotlin_kotlin.$_$.pg;
  var THROW_IAE = kotlin_kotlin.$_$.mk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Enum = kotlin_kotlin.$_$.xj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var MutableMap = kotlin_kotlin.$_$.d7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var MutableSet = kotlin_kotlin.$_$.e7;
  var emptyList = kotlin_kotlin.$_$.u8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(InternalVoyagerApi, 'InternalVoyagerApi', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalVoyagerApi, 'ExperimentalVoyagerApi', classMeta, VOID, [Annotation]);
  setMetadataFor(DisposableEffectIgnoringConfigurationImpl, 'DisposableEffectIgnoringConfigurationImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(NavigatorScreenLifecycleProvider, 'NavigatorScreenLifecycleProvider', interfaceMeta);
  setMetadataFor(ScreenLifecycleProvider, 'ScreenLifecycleProvider', interfaceMeta);
  function ProvideBeforeScreenContent(provideSaveableState, content) {
    illegalDecoyCallException('ProvideBeforeScreenContent');
  }
  function ProvideBeforeScreenContent$composable(provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1882549595);
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1882549595, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleContentProvider.ProvideBeforeScreenContent$composable (ScreenLifecycleOwner.kt:18)');
      }
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ScreenLifecycleContentProvider$ProvideBeforeScreenContent$composable$lambda(this, provideSaveableState, content, $changed));
    }
  }
  setMetadataFor(ScreenLifecycleContentProvider, 'ScreenLifecycleContentProvider', interfaceMeta);
  function onDispose(screen) {
  }
  setMetadataFor(ScreenDisposable, 'ScreenDisposable', interfaceMeta);
  setMetadataFor(ScreenLifecycleOwner, 'ScreenLifecycleOwner', interfaceMeta, VOID, [ScreenLifecycleContentProvider, ScreenDisposable]);
  setMetadataFor(DefaultScreenLifecycleOwner, 'DefaultScreenLifecycleOwner', objectMeta, VOID, [ScreenLifecycleOwner]);
  setMetadataFor(ScreenLifecycleStore, 'ScreenLifecycleStore', objectMeta);
  setMetadataFor(Stack, 'Stack', interfaceMeta);
  setMetadataFor(SnapshotStateStack, 'SnapshotStateStack', classMeta, VOID, [Stack]);
  setMetadataFor(StackEvent, 'StackEvent', classMeta, Enum);
  setMetadataFor(ThreadSafeMap, 'ThreadSafeMap', classMeta, VOID, [MutableMap], ThreadSafeMap_init_$Create$);
  setMetadataFor(ThreadSafeSet, 'ThreadSafeSet', classMeta, VOID, [MutableSet], ThreadSafeSet_init_$Create$);
  setMetadataFor(ConfigurationChecker, 'ConfigurationChecker', classMeta, VOID, VOID, ConfigurationChecker);
  setMetadataFor(DefaultNavigatorScreenLifecycleProvider, 'DefaultNavigatorScreenLifecycleProvider', classMeta, VOID, [NavigatorScreenLifecycleProvider], DefaultNavigatorScreenLifecycleProvider);
  function get_key() {
    return commonKeyGeneration(this);
  }
  setMetadataFor(Screen, 'Screen', interfaceMeta);
  //endregion
  function InternalVoyagerApi() {
  }
  protoOf(InternalVoyagerApi).equals = function (other) {
    if (!(other instanceof InternalVoyagerApi))
      return false;
    other instanceof InternalVoyagerApi || THROW_CCE();
    return true;
  };
  protoOf(InternalVoyagerApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalVoyagerApi).toString = function () {
    return '@cafe.adriel.voyager.core.annotation.InternalVoyagerApi()';
  };
  function ExperimentalVoyagerApi() {
  }
  protoOf(ExperimentalVoyagerApi).equals = function (other) {
    if (!(other instanceof ExperimentalVoyagerApi))
      return false;
    other instanceof ExperimentalVoyagerApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalVoyagerApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalVoyagerApi).toString = function () {
    return '@cafe.adriel.voyager.core.annotation.ExperimentalVoyagerApi()';
  };
  function get_InternalDisposableEffectScope() {
    _init_properties_DisposableEffect_kt__naxsgf();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectIgnoringConfiguration$composable(key1, effect, $composer, $changed) {
    _init_properties_DisposableEffect_kt__naxsgf();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-724497028);
    if (isTraceInProgress()) {
      traceEventStart(-724497028, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfiguration$composable (DisposableEffect.kt:14)');
    }
    var configurationChecker = getConfigurationChecker$composable($composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(configurationChecker) | $composer_1.changed_ga7h3f_k$(key1));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfiguration$composable.<anonymous>' call
      var value = new DisposableEffectIgnoringConfigurationImpl(configurationChecker, effect);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
  }
  function _get_configurationChecker__j8e4dw($this) {
    return $this.configurationChecker_1;
  }
  function _get_effect__7gra1m($this) {
    return $this.effect_1;
  }
  function _set_onDispose__eibnf($this, _set____db54di) {
    $this.onDispose_1 = _set____db54di;
  }
  function _get_onDispose__swc4r5($this) {
    return $this.onDispose_1;
  }
  function DisposableEffectIgnoringConfigurationImpl(configurationChecker, effect) {
    this.configurationChecker_1 = configurationChecker;
    this.effect_1 = effect;
    this.onDispose_1 = null;
  }
  protoOf(DisposableEffectIgnoringConfigurationImpl).onRemembered_68t2e3_k$ = function () {
    this.onDispose_1 = this.effect_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectIgnoringConfigurationImpl).onForgotten_pbqifp_k$ = function () {
    var tmp0_safe_receiver = this.onDispose_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'cafe.adriel.voyager.core.lifecycle.DisposableEffectIgnoringConfigurationImpl.onForgotten.<anonymous>' call
      if (!this.configurationChecker_1.isChangingConfigurations_8pvl5g_k$()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.dispose_3nnxhr_k$();
    }
    this.onDispose_1 = null;
  };
  protoOf(DisposableEffectIgnoringConfigurationImpl).onAbandoned_1gx7a3_k$ = function () {
  };
  var properties_initialized_DisposableEffect_kt_4atvkd;
  function _init_properties_DisposableEffect_kt__naxsgf() {
    if (!properties_initialized_DisposableEffect_kt_4atvkd) {
      properties_initialized_DisposableEffect_kt_4atvkd = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function get_LocalNavigatorScreenLifecycleProvider() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return LocalNavigatorScreenLifecycleProvider;
  }
  var LocalNavigatorScreenLifecycleProvider;
  function NavigatorScreenLifecycleProvider() {
  }
  function LocalNavigatorScreenLifecycleProvider$lambda() {
    _init_properties_NavigatorScreenLifecycle_kt__3cieg7();
    return new DefaultNavigatorScreenLifecycleProvider();
  }
  var properties_initialized_NavigatorScreenLifecycle_kt_uc7c89;
  function _init_properties_NavigatorScreenLifecycle_kt__3cieg7() {
    if (!properties_initialized_NavigatorScreenLifecycle_kt_uc7c89) {
      properties_initialized_NavigatorScreenLifecycle_kt_uc7c89 = true;
      LocalNavigatorScreenLifecycleProvider = staticCompositionLocalOf(LocalNavigatorScreenLifecycleProvider$lambda);
    }
  }
  function rememberScreenLifecycleOwner$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1573571947);
    if (isTraceInProgress()) {
      traceEventStart(-1573571947, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable (ScreenLifecycle.kt:23)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key1 = screen.get_key_18j28a_k$();
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.rememberScreenLifecycleOwner$composable.<anonymous>' call
      var tmp_0;
      if (isInterface(screen, ScreenLifecycleProvider)) {
        tmp_0 = screen.getLifecycleOwner_tgznhd_k$();
      } else {
        tmp_0 = DefaultScreenLifecycleOwner_getInstance();
      }
      var value = tmp_0;
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function getNavigatorScreenLifecycleProvider$composable(screen, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-545509411);
    if (isTraceInProgress()) {
      traceEventStart(-545509411, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleProvider$composable (ScreenLifecycle.kt:32)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalNavigatorScreenLifecycleProvider();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var navigatorScreenLifecycleProvider = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key1 = screen.get_key_18j28a_k$();
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.changed_ga7h3f_k$(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.getNavigatorScreenLifecycleProvider$composable.<anonymous>' call
      var value = navigatorScreenLifecycleProvider.provide_xgqn4i_k$(screen);
      $composer_2.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_2.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function ScreenLifecycleProvider() {
  }
  function ScreenLifecycleContentProvider$ProvideBeforeScreenContent$composable$lambda($tmp0_rcvr, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.ProvideBeforeScreenContent$composable_4w6pid_k$($provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ScreenLifecycleContentProvider() {
  }
  function ScreenLifecycleOwner() {
  }
  function ScreenDisposable() {
  }
  function get_$stableprop() {
    return 0;
  }
  function DefaultScreenLifecycleOwner() {
    DefaultScreenLifecycleOwner_instance = this;
    this.$stable_1 = 0;
  }
  var DefaultScreenLifecycleOwner_instance;
  function DefaultScreenLifecycleOwner_getInstance() {
    if (DefaultScreenLifecycleOwner_instance == null)
      new DefaultScreenLifecycleOwner();
    return DefaultScreenLifecycleOwner_instance;
  }
  function _get_owners__kco8vf($this) {
    return $this.owners_1;
  }
  function _get_newOwners__t8hifj($this) {
    return $this.newOwners_1;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function ScreenLifecycleStore() {
    ScreenLifecycleStore_instance = this;
    this.owners_1 = ThreadSafeMap_init_$Create$();
    this.newOwners_1 = ThreadSafeMap_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(ScreenLifecycleStore).get_pox5fi_k$ = function (screen, screenDisposeListenerType, factory) {
    // Inline function 'kotlin.collections.getOrPut' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.newOwners_1;
    var key = screen.get_key_18j28a_k$();
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.get.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = ThreadSafeMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.get.<anonymous>.<anonymous>' call
      this_1.put_4fpzoq_k$(screenDisposeListenerType, factory(screen.get_key_18j28a_k$()));
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
      // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.get.<anonymous>' call
      var answer_0 = factory(screen.get_key_18j28a_k$());
      this_2.put_4fpzoq_k$(screenDisposeListenerType, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    return tmp_0;
  };
  protoOf(ScreenLifecycleStore).remove_as1q9_k$ = function (screen) {
    var tmp0_safe_receiver = this.owners_1.remove_gppy8k_k$(screen.get_key_18j28a_k$());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.onDispose_mv4j99_k$(screen);
    }
    var tmp1_safe_receiver = this.newOwners_1.remove_gppy8k_k$(screen.get_key_18j28a_k$());
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'cafe.adriel.voyager.core.lifecycle.ScreenLifecycleStore.remove.<anonymous>' call
        element.get_value_j01efc_k$().onDispose_mv4j99_k$(screen);
      }
    }
  };
  var ScreenLifecycleStore_instance;
  function ScreenLifecycleStore_getInstance() {
    if (ScreenLifecycleStore_instance == null)
      new ScreenLifecycleStore();
    return ScreenLifecycleStore_instance;
  }
  function MultipleProvideBeforeScreenContent$composable(screenLifecycleContentProviders, provideSaveableState, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1501901490);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenLifecycleContentProviders) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1501901490, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.MultipleProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:12)');
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!screenLifecycleContentProviders.isEmpty_y1axqb_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(1797447139);
        var copy = toMutableList(screenLifecycleContentProviders);
        var tmp = removeFirst(copy);
        RecursiveProvideBeforeScreenContent$composable(tmp, provideSaveableState, content, MultipleProvideBeforeScreenContent$composable$lambda(copy), $composer_0, 112 & $dirty | 896 & $dirty);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        $composer_0.startReplaceableGroup_ip860b_k$(1797447481);
        content($composer_0, 14 & $dirty >> 6);
        $composer_0.endReplaceableGroup_ern0ak_k$();
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MultipleProvideBeforeScreenContent$composable$lambda_0(screenLifecycleContentProviders, provideSaveableState, content, $changed));
    }
  }
  function RecursiveProvideBeforeScreenContent$composable(screenLifecycleContentProvider, provideSaveableState, content, nextOrNull, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(31642780);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenLifecycleContentProvider) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(provideSaveableState) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(nextOrNull) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(31642780, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable (multipleScreenLifecycleOwnerUtil.kt:32)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [screenLifecycleContentProvider, provideSaveableState, content, nextOrNull];
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.changed_ga7h3f_k$(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = invalid;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid_0 ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var value = nextOrNull();
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var next = tmp0;
      if (!(next == null)) {
        $composer_0.startReplaceableGroup_ip860b_k$(1622838414);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -201295924, true, RecursiveProvideBeforeScreenContent$composable$lambda(next, provideSaveableState, content, nextOrNull));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_1 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        var recursiveContent = tmp0_0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_4, 1050024488, true, RecursiveProvideBeforeScreenContent$composable$lambda_0(provideSaveableState, recursiveContent));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_2 ? true : it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        var tmp_7 = tmp0_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_8, -666683194, true, RecursiveProvideBeforeScreenContent$composable$lambda_1(recursiveContent));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_3 ? true : it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_2 = ComposableLambda$invoke$ref_1(dispatchReceiver_1);
          $composer_4.updateRememberedValue_l1wh71_k$(value_2);
          tmp_9 = value_2;
        } else {
          tmp_9 = it_2;
        }
        var tmp_10 = tmp_9;
        var tmp0_2 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_4.endReplaceableGroup_ern0ak_k$();
        screenLifecycleContentProvider.ProvideBeforeScreenContent$composable_4w6pid_k$(tmp_7, tmp0_2, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        $composer_0.startReplaceableGroup_ip860b_k$(1622838989);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_2 = composableLambda(tmp_11, 260867377, true, RecursiveProvideBeforeScreenContent$composable$lambda_2(provideSaveableState));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_4 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_4 ? true : it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_2(dispatchReceiver_2);
          $composer_5.updateRememberedValue_l1wh71_k$(value_3);
          tmp_12 = value_3;
        } else {
          tmp_12 = it_3;
        }
        var tmp_13 = tmp_12;
        var tmp0_3 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_5.endReplaceableGroup_ern0ak_k$();
        var tmp_14 = tmp0_3;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>' call
        var tmp_15 = $composer_0;
        var dispatchReceiver_3 = composableLambda(tmp_15, -393432241, true, RecursiveProvideBeforeScreenContent$composable$lambda_3(content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_6 = $composer_0;
        $composer_6.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_5 = $composer_6.changed_ga7h3f_k$(dispatchReceiver_3);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_6.rememberedValue_4dg93v_k$();
        var tmp_16;
        if (invalid_5 ? true : it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous>.<anonymous>' call
          var value_4 = ComposableLambda$invoke$ref_3(dispatchReceiver_3);
          $composer_6.updateRememberedValue_l1wh71_k$(value_4);
          tmp_16 = value_4;
        } else {
          tmp_16 = it_4;
        }
        var tmp_17 = tmp_16;
        var tmp0_4 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        $composer_6.endReplaceableGroup_ern0ak_k$();
        screenLifecycleContentProvider.ProvideBeforeScreenContent$composable_4w6pid_k$(tmp_14, tmp0_4, $composer_0, 54 | 896 & $dirty << 6);
        $composer_0.endReplaceableGroup_ern0ak_k$();
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(RecursiveProvideBeforeScreenContent$composable$lambda_4(screenLifecycleContentProvider, provideSaveableState, content, nextOrNull, $changed));
    }
  }
  function MultipleProvideBeforeScreenContent$composable$lambda($copy) {
    return function () {
      return removeFirstOrNull($copy);
    };
  }
  function MultipleProvideBeforeScreenContent$composable$lambda_0($screenLifecycleContentProviders, $provideSaveableState, $content, $$changed) {
    return function ($composer, $force) {
      MultipleProvideBeforeScreenContent$composable($screenLifecycleContentProviders, $provideSaveableState, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda($next, $provideSaveableState, $content, $nextOrNull) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-201295924, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:36)');
        }
        RecursiveProvideBeforeScreenContent$composable($next, $provideSaveableState, $content, $nextOrNull, $composer_0, 0);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_0($provideSaveableState, $recursiveContent) {
    return function (suffixKey, $anonymous$parameter$1$, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffixKey) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 651) === 130) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1050024488, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:45)');
        }
        $provideSaveableState(suffixKey, $recursiveContent, $composer_0, 48 | 14 & $dirty);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_1($recursiveContent) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-666683194, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:48)');
        }
        $recursiveContent($composer_0, 6);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_2($provideSaveableState) {
    return function (suffixKey, content, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(suffixKey) ? 4 : 2);
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
          traceEventStart(260867377, $dirty, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:53)');
        }
        $provideSaveableState(suffixKey, content, $composer_0, 14 & $dirty | 112 & $dirty);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function RecursiveProvideBeforeScreenContent$composable$lambda_3($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-393432241, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.RecursiveProvideBeforeScreenContent$composable.<anonymous> (multipleScreenLifecycleOwnerUtil.kt:56)');
        }
        $content($composer_0, 0);
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
  function RecursiveProvideBeforeScreenContent$composable$lambda_4($screenLifecycleContentProvider, $provideSaveableState, $content, $nextOrNull, $$changed) {
    return function ($composer, $force) {
      RecursiveProvideBeforeScreenContent$composable($screenLifecycleContentProvider, $provideSaveableState, $content, $nextOrNull, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function commonKeyGeneration(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_multiplatformName(getKClassFromExpression(_this__u8e3s4));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Default ScreenKey not found, please provide your own key';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SnapshotStateStack_init_$Init$(items, minSize, $this) {
    minSize = minSize === VOID ? 0 : minSize;
    SnapshotStateStack.call($this, toList(items), minSize);
    return $this;
  }
  function SnapshotStateStack_init_$Create$(items, minSize) {
    return SnapshotStateStack_init_$Init$(items, minSize, objectCreate(protoOf(SnapshotStateStack)));
  }
  function _set_lastEvent__pgcjtr($this, _set____db54di) {
    var this_0 = $this.lastEvent$delegate_1;
    lastEvent$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function get_$stableprop_1() {
    return 0;
  }
  function SnapshotStateStack$items$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.toList_edfyo7_k$();
    };
  }
  function SnapshotStateStack$lastItemOrNull$delegate$lambda(this$0) {
    return function () {
      return lastOrNull(this$0.stateStack_1);
    };
  }
  function SnapshotStateStack$size$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.get_size_woubt6_k$();
    };
  }
  function SnapshotStateStack$isEmpty$delegate$lambda(this$0) {
    return function () {
      return this$0.stateStack_1.isEmpty_y1axqb_k$();
    };
  }
  function SnapshotStateStack$canPop$delegate$lambda(this$0, $minSize) {
    return function () {
      return this$0.stateStack_1.get_size_woubt6_k$() > $minSize;
    };
  }
  function SnapshotStateStack$popAll$lambda(it) {
    return false;
  }
  function SnapshotStateStack$popUntil$lambda(this$0, $predicate, $success) {
    return function () {
      var tmp0_safe_receiver = this$0.get_lastItemOrNull_32n3yc_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp = $predicate(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = tmp;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.popUntil.<anonymous>.<anonymous>' call
        $success._v = tmp1_safe_receiver;
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_safe_receiver = tmp_0;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : !tmp2_safe_receiver;
      return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    };
  }
  function SnapshotStateStack(items, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minSize >= 0)) {
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      var message = 'Min size ' + minSize + ' is less than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(items.get_size_woubt6_k$() >= minSize)) {
      // Inline function 'cafe.adriel.voyager.core.stack.SnapshotStateStack.<anonymous>' call
      var message_0 = 'Stack size ' + items.get_size_woubt6_k$() + ' is less than the min size ' + minSize;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.stateStack_1 = toMutableStateList(items);
    this.lastEvent$delegate_1 = mutableStateOf(StackEvent_Idle_getInstance(), neverEqualPolicy());
    var tmp = this;
    tmp.items$delegate_1 = derivedStateOf(SnapshotStateStack$items$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.lastItemOrNull$delegate_1 = derivedStateOf(SnapshotStateStack$lastItemOrNull$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.size$delegate_1 = derivedStateOf(SnapshotStateStack$size$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.isEmpty$delegate_1 = derivedStateOf(SnapshotStateStack$isEmpty$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.canPop$delegate_1 = derivedStateOf(SnapshotStateStack$canPop$delegate$lambda(this, minSize));
    this.$stable_1 = 0;
  }
  protoOf(SnapshotStateStack).get_stateStack_o4ci68_k$ = function () {
    return this.stateStack_1;
  };
  protoOf(SnapshotStateStack).get_lastEvent_tm6i9x_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lastEvent$delegate_1;
    lastEvent$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).get_items_it823b_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.items$delegate_1;
    items$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).get_lastItemOrNull_32n3yc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lastItemOrNull$delegate_1;
    lastItemOrNull$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).get_size_woubt6_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.size$delegate_1;
    size$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.isEmpty$delegate_1;
    isEmpty$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).get_canPop_bsgoru_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.canPop$delegate_1;
    canPop$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(SnapshotStateStack).push_zcykck_k$ = function (item) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.stateStack_1.add_utx5q5_k$(item);
    _set_lastEvent__pgcjtr(this, StackEvent_Push_getInstance());
  };
  protoOf(SnapshotStateStack).push_9hkglv_k$ = function (items) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.stateStack_1;
    addAll(this_0, items);
    _set_lastEvent__pgcjtr(this, StackEvent_Push_getInstance());
  };
  protoOf(SnapshotStateStack).replace_pkss0m_k$ = function (item) {
    if (this.stateStack_1.isEmpty_y1axqb_k$()) {
      this.push_zcykck_k$(item);
    } else {
      this.stateStack_1.set_9t5s9l_k$(get_lastIndex(this.stateStack_1), item);
    }
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).replaceAll_ivnlbl_k$ = function (item) {
    this.stateStack_1.clear_j9egeb_k$();
    // Inline function 'kotlin.collections.plusAssign' call
    this.stateStack_1.add_utx5q5_k$(item);
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).replaceAll_qv2ydc_k$ = function (items) {
    this.stateStack_1.clear_j9egeb_k$();
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.stateStack_1;
    addAll(this_0, items);
    _set_lastEvent__pgcjtr(this, StackEvent_Replace_getInstance());
  };
  protoOf(SnapshotStateStack).pop_2dsh_k$ = function () {
    var tmp;
    if (this.get_canPop_bsgoru_k$()) {
      removeLast(this.stateStack_1);
      _set_lastEvent__pgcjtr(this, StackEvent_Pop_getInstance());
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapshotStateStack).popAll_u9won4_k$ = function () {
    this.popUntil_uyz3y_k$(SnapshotStateStack$popAll$lambda);
  };
  protoOf(SnapshotStateStack).popUntil_uyz3y_k$ = function (predicate) {
    var success = {_v: false};
    var shouldPop = SnapshotStateStack$popUntil$lambda(this, predicate, success);
    while (this.get_canPop_bsgoru_k$() ? shouldPop() : false) {
      removeLast(this.stateStack_1);
    }
    _set_lastEvent__pgcjtr(this, StackEvent_Pop_getInstance());
    return success._v;
  };
  protoOf(SnapshotStateStack).plusAssign_xe8c45_k$ = function (item) {
    this.push_zcykck_k$(item);
  };
  protoOf(SnapshotStateStack).plusAssign_9eor8c_k$ = function (items) {
    this.push_9hkglv_k$(items);
  };
  protoOf(SnapshotStateStack).clearEvent_bmlf2b_k$ = function () {
    _set_lastEvent__pgcjtr(this, StackEvent_Idle_getInstance());
  };
  function toMutableStateStack(_this__u8e3s4, minSize) {
    minSize = minSize === VOID ? 0 : minSize;
    return new SnapshotStateStack(_this__u8e3s4, minSize);
  }
  function lastEvent$factory() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lastEvent_tm6i9x_k$();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function lastEvent$factory_0() {
    return getPropertyCallableRef('lastEvent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lastEvent_tm6i9x_k$();
    }, function (receiver, value) {
      return _set_lastEvent__pgcjtr(receiver, value);
    });
  }
  function items$factory() {
    return getPropertyCallableRef('items', 1, KProperty1, function (receiver) {
      return receiver.get_items_it823b_k$();
    }, null);
  }
  function lastItemOrNull$factory() {
    return getPropertyCallableRef('lastItemOrNull', 1, KProperty1, function (receiver) {
      return receiver.get_lastItemOrNull_32n3yc_k$();
    }, null);
  }
  function size$factory() {
    return getPropertyCallableRef('size', 1, KProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, null);
  }
  function isEmpty$factory() {
    return getPropertyCallableRef('isEmpty', 1, KProperty1, function (receiver) {
      return receiver.get_isEmpty_zauvru_k$();
    }, null);
  }
  function canPop$factory() {
    return getPropertyCallableRef('canPop', 1, KProperty1, function (receiver) {
      return receiver.get_canPop_bsgoru_k$();
    }, null);
  }
  function Stack() {
  }
  var StackEvent_Push_instance;
  var StackEvent_Replace_instance;
  var StackEvent_Pop_instance;
  var StackEvent_Idle_instance;
  function values() {
    return [StackEvent_Push_getInstance(), StackEvent_Replace_getInstance(), StackEvent_Pop_getInstance(), StackEvent_Idle_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Push':
        return StackEvent_Push_getInstance();
      case 'Replace':
        return StackEvent_Replace_getInstance();
      case 'Pop':
        return StackEvent_Pop_getInstance();
      case 'Idle':
        return StackEvent_Idle_getInstance();
      default:
        StackEvent_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var StackEvent_entriesInitialized;
  function StackEvent_initEntries() {
    if (StackEvent_entriesInitialized)
      return Unit_getInstance();
    StackEvent_entriesInitialized = true;
    StackEvent_Push_instance = new StackEvent('Push', 0);
    StackEvent_Replace_instance = new StackEvent('Replace', 1);
    StackEvent_Pop_instance = new StackEvent('Pop', 2);
    StackEvent_Idle_instance = new StackEvent('Idle', 3);
  }
  var $ENTRIES;
  function StackEvent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StackEvent_Push_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Push_instance;
  }
  function StackEvent_Replace_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Replace_instance;
  }
  function StackEvent_Pop_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Pop_instance;
  }
  function StackEvent_Idle_getInstance() {
    StackEvent_initEntries();
    return StackEvent_Idle_instance;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function ThreadSafeMap_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap_init_$Create$();
    ThreadSafeMap.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeMap_init_$Create$() {
    return ThreadSafeMap_init_$Init$(objectCreate(protoOf(ThreadSafeMap)));
  }
  function _get_syncObject__eretwv($this) {
    return $this.syncObject_1;
  }
  function get_$stableprop_2() {
    return 8;
  }
  function ThreadSafeMap(delegate) {
    this.delegate_1 = delegate;
    this.syncObject_1 = new Object();
    this.$stable_1 = 8;
  }
  protoOf(ThreadSafeMap).get_size_woubt6_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.<get-size>.<anonymous>' call
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(ThreadSafeMap).containsKey_aw81wo_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.containsKey.<anonymous>' call
    return this.delegate_1.containsKey_aw81wo_k$(key);
  };
  protoOf(ThreadSafeMap).containsValue_yf2ykl_k$ = function (value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.containsValue.<anonymous>' call
    return this.delegate_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(ThreadSafeMap).get_wei43m_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.get.<anonymous>' call
    return this.delegate_1.get_wei43m_k$(key);
  };
  protoOf(ThreadSafeMap).isEmpty_y1axqb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.isEmpty.<anonymous>' call
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(ThreadSafeMap).get_entries_p20ztl_k$ = function () {
    return this.delegate_1.get_entries_p20ztl_k$();
  };
  protoOf(ThreadSafeMap).get_keys_wop4xp_k$ = function () {
    return this.delegate_1.get_keys_wop4xp_k$();
  };
  protoOf(ThreadSafeMap).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  protoOf(ThreadSafeMap).clear_j9egeb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    this.delegate_1.clear_j9egeb_k$();
  };
  protoOf(ThreadSafeMap).put_4fpzoq_k$ = function (key, value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.put.<anonymous>' call
    return this.delegate_1.put_4fpzoq_k$(key, value);
  };
  protoOf(ThreadSafeMap).putAll_wgg6cj_k$ = function (from) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    this.delegate_1.putAll_wgg6cj_k$(from);
  };
  protoOf(ThreadSafeMap).remove_gppy8k_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeMap.remove.<anonymous>' call
    return this.delegate_1.remove_gppy8k_k$(key);
  };
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function ThreadSafeSet_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var tmp$ret$0 = LinkedHashSet_init_$Create$();
    ThreadSafeSet.call($this, tmp$ret$0);
    return $this;
  }
  function ThreadSafeSet_init_$Create$() {
    return ThreadSafeSet_init_$Init$(objectCreate(protoOf(ThreadSafeSet)));
  }
  function _get_syncObject__eretwv_0($this) {
    return $this.syncObject_1;
  }
  function get_$stableprop_3() {
    return 8;
  }
  function ThreadSafeSet(delegate) {
    this.delegate_1 = delegate;
    this.syncObject_1 = new Object();
    this.$stable_1 = 8;
  }
  protoOf(ThreadSafeSet).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(ThreadSafeSet).contains_ccp5tc_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.contains.<anonymous>' call
    return this.delegate_1.contains_aljjnj_k$(element);
  };
  protoOf(ThreadSafeSet).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_ccp5tc_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).containsAll_70schq_k$ = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.containsAll.<anonymous>' call
    return this.delegate_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(ThreadSafeSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_70schq_k$(elements);
  };
  protoOf(ThreadSafeSet).isEmpty_y1axqb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.isEmpty.<anonymous>' call
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(ThreadSafeSet).iterator_jk1svi_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.iterator.<anonymous>' call
    return this.delegate_1.iterator_jk1svi_k$();
  };
  protoOf(ThreadSafeSet).add_wl2rvy_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.add.<anonymous>' call
    return this.delegate_1.add_utx5q5_k$(element);
  };
  protoOf(ThreadSafeSet).add_utx5q5_k$ = function (element) {
    return this.add_wl2rvy_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).addAll_v4m9z4_k$ = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.addAll.<anonymous>' call
    return this.delegate_1.addAll_4lagoh_k$(elements);
  };
  protoOf(ThreadSafeSet).addAll_4lagoh_k$ = function (elements) {
    return this.addAll_v4m9z4_k$(elements);
  };
  protoOf(ThreadSafeSet).clear_j9egeb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    this.delegate_1.clear_j9egeb_k$();
    return Unit_getInstance();
  };
  protoOf(ThreadSafeSet).remove_an8aut_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.remove.<anonymous>' call
    return this.delegate_1.remove_cedx0m_k$(element);
  };
  protoOf(ThreadSafeSet).remove_cedx0m_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.remove_an8aut_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ThreadSafeSet).removeAll_7hnfer_k$ = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.removeAll.<anonymous>' call
    return this.delegate_1.removeAll_y0z8pe_k$(elements);
  };
  protoOf(ThreadSafeSet).removeAll_y0z8pe_k$ = function (elements) {
    return this.removeAll_7hnfer_k$(elements);
  };
  protoOf(ThreadSafeSet).retainAll_h3uasc_k$ = function (elements) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.syncObject_1;
    // Inline function 'cafe.adriel.voyager.core.concurrent.ThreadSafeSet.retainAll.<anonymous>' call
    return this.delegate_1.retainAll_9fhiib_k$(elements);
  };
  protoOf(ThreadSafeSet).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_h3uasc_k$(elements);
  };
  function get_configurationChecker() {
    _init_properties_ConfigurationChecker_kt__y5hypr();
    return configurationChecker;
  }
  var configurationChecker;
  function get_$stableprop_4() {
    return 0;
  }
  function ConfigurationChecker() {
    this.$stable_1 = 0;
  }
  protoOf(ConfigurationChecker).isChangingConfigurations_8pvl5g_k$ = function () {
    return false;
  };
  function getConfigurationChecker$composable($composer, $changed) {
    _init_properties_ConfigurationChecker_kt__y5hypr();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1614282158);
    if (isTraceInProgress()) {
      traceEventStart(1614282158, $changed, -1, 'cafe.adriel.voyager.core.lifecycle.getConfigurationChecker$composable (ConfigurationChecker.kt:9)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (false ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'cafe.adriel.voyager.core.lifecycle.getConfigurationChecker$composable.<anonymous>' call
      var value = get_configurationChecker();
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  var properties_initialized_ConfigurationChecker_kt_7ida0v;
  function _init_properties_ConfigurationChecker_kt__y5hypr() {
    if (!properties_initialized_ConfigurationChecker_kt_7ida0v) {
      properties_initialized_ConfigurationChecker_kt_7ida0v = true;
      configurationChecker = new ConfigurationChecker();
    }
  }
  function get_$stableprop_5() {
    return 0;
  }
  function DefaultNavigatorScreenLifecycleProvider() {
    this.$stable_1 = 0;
  }
  protoOf(DefaultNavigatorScreenLifecycleProvider).provide_xgqn4i_k$ = function (screen) {
    return emptyList();
  };
  function get_multiplatformName(_this__u8e3s4) {
    return _this__u8e3s4.get_simpleName_r6f8py_k$();
  }
  function Screen() {
  }
  //region block: post-declaration
  protoOf(DefaultScreenLifecycleOwner).ProvideBeforeScreenContent_yp4695_k$ = ProvideBeforeScreenContent;
  protoOf(DefaultScreenLifecycleOwner).ProvideBeforeScreenContent$composable_4w6pid_k$ = ProvideBeforeScreenContent$composable;
  protoOf(DefaultScreenLifecycleOwner).onDispose_mv4j99_k$ = onDispose;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DisposableEffectIgnoringConfiguration$composable;
  _.$_$.b = MultipleProvideBeforeScreenContent$composable;
  _.$_$.c = getNavigatorScreenLifecycleProvider$composable;
  _.$_$.d = rememberScreenLifecycleOwner$composable;
  _.$_$.e = get_key;
  _.$_$.f = Screen;
  _.$_$.g = Stack;
  _.$_$.h = toMutableStateStack;
  _.$_$.i = StackEvent_Pop_getInstance;
  _.$_$.j = StackEvent_Replace_getInstance;
  _.$_$.k = ThreadSafeMap_init_$Create$;
  _.$_$.l = ThreadSafeSet_init_$Create$;
  _.$_$.m = ScreenLifecycleStore_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-core.js.map
