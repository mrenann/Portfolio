(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './voyager-voyager-core.js', './compose-multiplatform-core-runtime.js', './voyager-voyager-navigator.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./voyager-voyager-core.js'), require('./compose-multiplatform-core-runtime.js'), require('./voyager-voyager-navigator.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-tab-navigator'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'voyager-voyager-tab-navigator'.");
    }
    if (typeof this['voyager-voyager-core'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-tab-navigator'. Its dependency 'voyager-voyager-core' was not found. Please, check whether 'voyager-voyager-core' is loaded prior to 'voyager-voyager-tab-navigator'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-tab-navigator'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'voyager-voyager-tab-navigator'.");
    }
    if (typeof this['voyager-voyager-navigator'] === 'undefined') {
      throw new Error("Error loading module 'voyager-voyager-tab-navigator'. Its dependency 'voyager-voyager-navigator' was not found. Please, check whether 'voyager-voyager-navigator' is loaded prior to 'voyager-voyager-tab-navigator'.");
    }
    root['voyager-voyager-tab-navigator'] = factory(typeof this['voyager-voyager-tab-navigator'] === 'undefined' ? {} : this['voyager-voyager-tab-navigator'], this['kotlin-kotlin-stdlib'], this['voyager-voyager-core'], this['compose-multiplatform-core-runtime'], this['voyager-voyager-navigator']);
  }
}(this, function (_, kotlin_kotlin, kotlin_voyager_voyager_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_voyager_voyager_navigator) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.cf;
  var Screen = kotlin_voyager_voyager_core.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var UShort = kotlin_kotlin.$_$.wk;
  var UShort__hashCode_impl_ywngrv = kotlin_kotlin.$_$.z4;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var hashCode = kotlin_kotlin.$_$.ee;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var equals = kotlin_kotlin.$_$.ud;
  var classMeta = kotlin_kotlin.$_$.qd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.pe;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var DisposableEffectIgnoringConfiguration$composable = kotlin_voyager_voyager_core.$_$.a;
  var compositionUniqueId$composable = kotlin_voyager_voyager_navigator.$_$.c;
  var NavigatorDisposeBehavior = kotlin_voyager_voyager_navigator.$_$.b;
  var Navigator$composable = kotlin_voyager_voyager_navigator.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Tab, 'Tab', interfaceMeta, VOID, [Screen]);
  setMetadataFor(TabOptions, 'TabOptions', classMeta);
  setMetadataFor(TabNavigator, 'TabNavigator', classMeta);
  setMetadataFor(ComposableSingletons$TabNavigatorKt, 'ComposableSingletons$TabNavigatorKt', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  //endregion
  function Tab() {
  }
  function get_$stableprop() {
    return 0;
  }
  function TabOptions(index, title, icon) {
    icon = icon === VOID ? null : icon;
    this.index_1 = index;
    this.title_1 = title;
    this.icon_1 = icon;
    this.$stable_1 = 0;
  }
  protoOf(TabOptions).get_index_ew1d5w_k$ = function () {
    return this.index_1;
  };
  protoOf(TabOptions).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(TabOptions).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(TabOptions).component1_dyit8n_k$ = function () {
    return this.index_1;
  };
  protoOf(TabOptions).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(TabOptions).component3_7eebsa_k$ = function () {
    return this.icon_1;
  };
  protoOf(TabOptions).copy_b36ska_k$ = function (index, title, icon) {
    return new TabOptions(index, title, icon);
  };
  protoOf(TabOptions).copy$default_3a9v5i_k$ = function (index, title, icon, $super) {
    index = index === VOID ? this.index_1 : index;
    title = title === VOID ? this.title_1 : title;
    icon = icon === VOID ? this.icon_1 : icon;
    return $super === VOID ? this.copy_b36ska_k$(index, title, icon) : $super.copy_b36ska_k$.call(this, new UShort(index), title, icon);
  };
  protoOf(TabOptions).toString = function () {
    return 'TabOptions(index=' + new UShort(this.index_1) + ', title=' + this.title_1 + ', icon=' + this.icon_1 + ')';
  };
  protoOf(TabOptions).hashCode = function () {
    var result = UShort__hashCode_impl_ywngrv(this.index_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + (this.icon_1 == null ? 0 : hashCode(this.icon_1)) | 0;
    return result;
  };
  protoOf(TabOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TabOptions))
      return false;
    var tmp0_other_with_cast = other instanceof TabOptions ? other : THROW_CCE();
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!equals(this.icon_1, tmp0_other_with_cast.icon_1))
      return false;
    return true;
  };
  function CurrentTab$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1049543651);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1049543651, $changed, -1, 'cafe.adriel.voyager.navigator.tab.CurrentTab$composable (Tab.kt:7)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalTabNavigator();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tabNavigator = tmp0;
      var currentTab = tabNavigator.get_current_jwi6j4_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.tab.CurrentTab$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1550089155, true, CurrentTab$composable$lambda(currentTab));
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
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'cafe.adriel.voyager.navigator.tab.CurrentTab$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      tabNavigator.saveableState$composable_p7ylda_k$('currentTab', null, tmp0_0, $composer_0, 390, 2);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(CurrentTab$composable$lambda_0($changed));
    }
  }
  function CurrentTab$composable$lambda($currentTab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1550089155, $changed, -1, 'cafe.adriel.voyager.navigator.tab.CurrentTab$composable.<anonymous> (Tab.kt:12)');
        }
        $currentTab.Content$composable_xd8m9d_k$($composer_0, 0);
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
  function CurrentTab$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      CurrentTab$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_LocalTabNavigator() {
    _init_properties_TabNavigator_kt__s6dpe();
    return LocalTabNavigator;
  }
  var LocalTabNavigator;
  function get_$stableprop_0() {
    return 0;
  }
  function TabNavigator$saveableState$composable$lambda($tmp0_rcvr, $key, $tab, $content, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.saveableState$composable_p7ylda_k$($key, $tab._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TabNavigator(navigator) {
    this.navigator_1 = navigator;
    this.$stable_1 = 0;
  }
  protoOf(TabNavigator).get_navigator_kyqf1q_k$ = function () {
    return this.navigator_1;
  };
  protoOf(TabNavigator).set_current_nfhp4z_k$ = function (tab) {
    return this.navigator_1.replaceAll_lh9igm_k$(tab);
  };
  protoOf(TabNavigator).get_current_jwi6j4_k$ = function () {
    var tmp = this.navigator_1.get_lastItem_f337v6_k$();
    return isInterface(tmp, Tab) ? tmp : THROW_CCE();
  };
  protoOf(TabNavigator).saveableState_hhaotz_k$ = function (key, tab, content) {
    illegalDecoyCallException('saveableState');
  };
  protoOf(TabNavigator).saveableState$composable_p7ylda_k$ = function (key, tab, content, $composer, $changed, $default) {
    var tab_0 = {_v: tab};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(618781519);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(key) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.changed_ga7h3f_k$(tab_0._v) : false) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          tab_0._v = this.get_current_jwi6j4_k$();
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(618781519, $dirty, -1, 'cafe.adriel.voyager.navigator.tab.TabNavigator.saveableState$composable (TabNavigator.kt:70)');
      }
      this.navigator_1.saveableState$composable_rfpwca_k$(key, tab_0._v, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty, 0);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(TabNavigator$saveableState$composable$lambda(this, key, tab_0, content, $changed, $default));
    }
  };
  function TabDisposable$composable(navigator, tabs, $composer, $changed) {
    _init_properties_TabNavigator_kt__s6dpe();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1031984962);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(navigator) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tabs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1031984962, $dirty, -1, 'cafe.adriel.voyager.navigator.tab.TabDisposable$composable (TabNavigator.kt:47)');
      }
      DisposableEffectIgnoringConfiguration$composable(Unit_getInstance(), TabDisposable$composable$lambda(tabs, navigator), $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(TabDisposable$composable$lambda_0(navigator, tabs, $changed));
    }
  }
  function TabNavigator$composable(tab, disposeNestedNavigators, tabDisposable, key, content, $composer, $changed, $default) {
    _init_properties_TabNavigator_kt__s6dpe();
    var disposeNestedNavigators_0 = {_v: disposeNestedNavigators};
    var tabDisposable_0 = {_v: tabDisposable};
    var key_0 = {_v: key};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(57962826);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tab) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disposeNestedNavigators_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(tabDisposable_0._v) ? 256 : 128);
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
          disposeNestedNavigators_0._v = false;
        }
        if (!(($default & 4) === 0)) {
          tabDisposable_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          key_0._v = compositionUniqueId$composable($composer_0, 0);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$TabNavigatorKt_getInstance().lambda_1_r8sbbp_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(57962826, $dirty, -1, 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable (TabNavigator.kt:24)');
      }
      var tmp = new NavigatorDisposeBehavior(disposeNestedNavigators_0._v, false);
      var tmp_0 = key_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 986382172, true, TabNavigator$composable$lambda(tabDisposable_0, content_0));
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
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Navigator$composable(tab, tmp, null, tmp_0, tmp0, $composer_0, 24960 | 14 & $dirty | 7168 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(TabNavigator$composable$lambda_0(tab, disposeNestedNavigators_0, tabDisposable_0, key_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$TabNavigatorKt$lambda_1$lambda_k3xi22(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1188356642, $changed, -1, 'cafe.adriel.voyager.navigator.tab.ComposableSingletons$TabNavigatorKt.lambda-1.<anonymous> (TabNavigator.kt:23)');
      }
      CurrentTab$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$TabNavigatorKt() {
    ComposableSingletons$TabNavigatorKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1188356642, false, ComposableSingletons$TabNavigatorKt$lambda_1$lambda_k3xi22));
  }
  protoOf(ComposableSingletons$TabNavigatorKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$TabNavigatorKt_instance;
  function ComposableSingletons$TabNavigatorKt_getInstance() {
    if (ComposableSingletons$TabNavigatorKt_instance == null)
      new ComposableSingletons$TabNavigatorKt();
    return ComposableSingletons$TabNavigatorKt_instance;
  }
  function LocalTabNavigator$lambda() {
    _init_properties_TabNavigator_kt__s6dpe();
    var message = 'TabNavigator not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function _no_name_provided__qut3iv($tabs, $navigator) {
    this.$tabs_1 = $tabs;
    this.$navigator_1 = $navigator;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'cafe.adriel.voyager.navigator.tab.TabDisposable$composable.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.$tabs_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'cafe.adriel.voyager.navigator.tab.TabDisposable$composable.<anonymous>.<anonymous>.<anonymous>' call
      this.$navigator_1.navigator_1.dispose_ur2opo_k$(element);
    }
  };
  function TabDisposable$composable$lambda($tabs, $navigator) {
    return function ($this$DisposableEffectIgnoringConfiguration) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($tabs, $navigator);
    };
  }
  function TabDisposable$composable$lambda_0($navigator, $tabs, $$changed) {
    return function ($composer, $force) {
      TabDisposable$composable($navigator, $tabs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TabNavigator$composable$lambda$lambda($content, $tabNavigator) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-324189156, $changed, -1, 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>.<anonymous> (TabNavigator.kt:41)');
        }
        $content._v($tabNavigator, $composer_0, 0);
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
  function TabNavigator$composable$lambda($tabDisposable, $content) {
    return function (navigator, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(navigator) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(986382172, $dirty, -1, 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous> (TabNavigator.kt:34)');
        }
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(navigator);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = new TabNavigator(navigator);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tabNavigator = tmp0;
        var tmp0_safe_receiver = $tabDisposable._v;
        $composer_0.startReplaceableGroup_ip860b_k$(-1789461559);
        tmp0_safe_receiver == null || tmp0_safe_receiver(tabNavigator, $composer_0, 0);
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_3 = [get_LocalTabNavigator().provides_3agxel_k$(tabNavigator)];
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -324189156, true, TabNavigator$composable$lambda$lambda($content, tabNavigator));
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
        var tmp_5;
        if (invalid_0 ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'cafe.adriel.voyager.navigator.tab.TabNavigator$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        CompositionLocalProvider$composable(tmp_3, tmp0_0, $composer_0, 48);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp_0 = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function TabNavigator$composable$lambda_0($tab, $disposeNestedNavigators, $tabDisposable, $key, $content, $$changed, $$default) {
    return function ($composer, $force) {
      TabNavigator$composable($tab, $disposeNestedNavigators._v, $tabDisposable._v, $key._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_TabNavigator_kt_xyj44;
  function _init_properties_TabNavigator_kt__s6dpe() {
    if (!properties_initialized_TabNavigator_kt_xyj44) {
      properties_initialized_TabNavigator_kt_xyj44 = true;
      LocalTabNavigator = staticCompositionLocalOf(LocalTabNavigator$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CurrentTab$composable;
  _.$_$.b = get_LocalTabNavigator;
  _.$_$.c = TabDisposable$composable;
  _.$_$.d = TabNavigator$composable;
  _.$_$.e = TabOptions;
  _.$_$.f = Tab;
  //endregion
  return _;
}));

//# sourceMappingURL=voyager-voyager-tab-navigator.js.map
