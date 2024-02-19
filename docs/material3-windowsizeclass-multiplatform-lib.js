(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'material3-windowsizeclass-multiplatform-lib'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'material3-windowsizeclass-multiplatform-lib'.");
    }
    root['material3-windowsizeclass-multiplatform-lib'] = factory(typeof this['material3-windowsizeclass-multiplatform-lib'] === 'undefined' ? {} : this['material3-windowsizeclass-multiplatform-lib'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.cf;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var Annotation = kotlin_kotlin.$_$.pj;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var setOf = kotlin_kotlin.$_$.ab;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var sortedDescending = kotlin_kotlin.$_$.fb;
  var last = kotlin_kotlin.$_$.ea;
  var Comparable = kotlin_kotlin.$_$.tj;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var KMutableProperty0 = kotlin_kotlin.$_$.mg;
  var THROW_ISE = kotlin_kotlin.$_$.nk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.zd;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalMaterial3WindowSizeClassApi, 'ExperimentalMaterial3WindowSizeClassApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(WindowSizeClass, 'WindowSizeClass', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WindowWidthSizeClass, 'WindowWidthSizeClass', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WindowHeightSizeClass, 'WindowHeightSizeClass', classMeta, VOID, [Comparable]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [DisposableEffectResult]);
  //endregion
  function ExperimentalMaterial3WindowSizeClassApi() {
  }
  protoOf(ExperimentalMaterial3WindowSizeClassApi).equals = function (other) {
    if (!(other instanceof ExperimentalMaterial3WindowSizeClassApi))
      return false;
    other instanceof ExperimentalMaterial3WindowSizeClassApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalMaterial3WindowSizeClassApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalMaterial3WindowSizeClassApi).toString = function () {
    return '@androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi()';
  };
  function get_defaultDensity() {
    _init_properties_WindowSizeClass_kt__hs41th();
    return defaultDensity;
  }
  var defaultDensity;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).calculateFromSize_pifii9_k$ = function (size) {
    var windowWidthSizeClass = Companion_getInstance_1().fromWidth_ur6ovc_k$(_DpSize___get_width__impl__o3d5gt(size));
    var windowHeightSizeClass = Companion_getInstance_2().fromHeight_pp4b9q_k$(_DpSize___get_height__impl__5xueo2(size));
    return new WindowSizeClass(windowWidthSizeClass, windowHeightSizeClass);
  };
  protoOf(Companion).calculateFromSize_tt6q8f_k$ = function (size, density, supportedWidthSizeClasses, supportedHeightSizeClasses) {
    var windowWidthSizeClass = Companion_getInstance_1().fromWidth_n958rh_k$(_Size___get_width__impl__58y75t(size), density, supportedWidthSizeClasses);
    var windowHeightSizeClass = Companion_getInstance_2().fromHeight_ls53ik_k$(_Size___get_height__impl__a04p02(size), density, supportedHeightSizeClasses);
    return new WindowSizeClass(windowWidthSizeClass, windowHeightSizeClass);
  };
  protoOf(Companion).calculateFromSize$default_6b9jr4_k$ = function (size, density, supportedWidthSizeClasses, supportedHeightSizeClasses, $super) {
    supportedWidthSizeClasses = supportedWidthSizeClasses === VOID ? Companion_getInstance_1().DefaultSizeClasses_1 : supportedWidthSizeClasses;
    supportedHeightSizeClasses = supportedHeightSizeClasses === VOID ? Companion_getInstance_2().DefaultSizeClasses_1 : supportedHeightSizeClasses;
    return $super === VOID ? this.calculateFromSize_tt6q8f_k$(size, density, supportedWidthSizeClasses, supportedHeightSizeClasses) : $super.calculateFromSize_tt6q8f_k$.call(this, new Size(size), density, supportedWidthSizeClasses, supportedHeightSizeClasses);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function WindowSizeClass(widthSizeClass, heightSizeClass) {
    Companion_getInstance_0();
    this.widthSizeClass_1 = widthSizeClass;
    this.heightSizeClass_1 = heightSizeClass;
    this.$stable_1 = 0;
  }
  protoOf(WindowSizeClass).get_widthSizeClass_2320u1_k$ = function () {
    return this.widthSizeClass_1;
  };
  protoOf(WindowSizeClass).get_heightSizeClass_ppoer_k$ = function () {
    return this.heightSizeClass_1;
  };
  protoOf(WindowSizeClass).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WindowSizeClass))
      THROW_CCE();
    if (!(this.widthSizeClass_1 === other.widthSizeClass_1))
      return false;
    if (!(this.heightSizeClass_1 === other.heightSizeClass_1))
      return false;
    return true;
  };
  protoOf(WindowSizeClass).hashCode = function () {
    var result = WindowWidthSizeClass__hashCode_impl_pfvlw1(this.widthSizeClass_1);
    result = imul(31, result) + WindowHeightSizeClass__hashCode_impl_eivxke(this.heightSizeClass_1) | 0;
    return result;
  };
  protoOf(WindowSizeClass).toString = function () {
    return 'WindowSizeClass(' + new WindowWidthSizeClass(this.widthSizeClass_1) + ', ' + new WindowHeightSizeClass(this.heightSizeClass_1) + ')';
  };
  function breakpoint(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 === $this.Expanded_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(840);
    } else if (_this__u8e3s4 === $this.Medium_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(600);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    }
    return tmp;
  }
  function _WindowWidthSizeClass___init__impl__bavl40(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function WindowWidthSizeClass__compareTo_impl_7m3wk2($this, other) {
    return Dp__compareTo_impl_tlg3dl(breakpoint($this, Companion_getInstance_1()), breakpoint(other, Companion_getInstance_1()));
  }
  function WindowWidthSizeClass__compareTo_impl_7m3wk2_0($this, other) {
    return WindowWidthSizeClass__compareTo_impl_7m3wk2($this.value_1, other instanceof WindowWidthSizeClass ? other.value_1 : THROW_CCE());
  }
  function WindowWidthSizeClass__toString_impl_nu2ja8($this) {
    return 'WindowWidthSizeClass.' + ($this === Companion_getInstance_1().Compact_1 ? 'Compact' : $this === Companion_getInstance_1().Medium_1 ? 'Medium' : $this === Companion_getInstance_1().Expanded_1 ? 'Expanded' : '');
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Compact_1 = _WindowWidthSizeClass___init__impl__bavl40(0);
    this.Medium_1 = _WindowWidthSizeClass___init__impl__bavl40(1);
    this.Expanded_1 = _WindowWidthSizeClass___init__impl__bavl40(2);
    this.DefaultSizeClasses_1 = setOf([new WindowWidthSizeClass(this.Compact_1), new WindowWidthSizeClass(this.Medium_1), new WindowWidthSizeClass(this.Expanded_1)]);
  }
  protoOf(Companion_0).get_Compact_17mu13_k$ = function () {
    return this.Compact_1;
  };
  protoOf(Companion_0).get_Medium_1c3cwb_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_0).get_Expanded_ubndvz_k$ = function () {
    return this.Expanded_1;
  };
  protoOf(Companion_0).get_DefaultSizeClasses_q9w8el_k$ = function () {
    return this.DefaultSizeClasses_1;
  };
  protoOf(Companion_0).get_StandardSizeClasses_ugj2hr_k$ = function () {
    return this.DefaultSizeClasses_1;
  };
  protoOf(Companion_0).fromWidth_ur6ovc_k$ = function (width) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
    var tmp$ret$1 = get_defaultDensity().toPx_mycba2_k$(width);
    return this.fromWidth_n958rh_k$(tmp$ret$1, get_defaultDensity(), this.DefaultSizeClasses_1);
  };
  protoOf(Companion_0).fromWidth_n958rh_k$ = function (width, density, supportedSizeClasses) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0.0)) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      var message = 'Width must not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!supportedSizeClasses.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      var message_0 = 'Must support at least one size class';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sortedSizeClasses = sortedDescending(supportedSizeClasses);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedSizeClasses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().value_1;
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromWidth.<anonymous>.<anonymous>' call
      if (width >= density.toPx_mycba2_k$(breakpoint(element, Companion_getInstance_1()))) {
        return element;
      }
    }
    return last(sortedSizeClasses).value_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WindowWidthSizeClass__hashCode_impl_pfvlw1($this) {
    return $this;
  }
  function WindowWidthSizeClass__equals_impl_cb88x9($this, other) {
    if (!(other instanceof WindowWidthSizeClass))
      return false;
    if (!($this === (other instanceof WindowWidthSizeClass ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function WindowWidthSizeClass(value) {
    Companion_getInstance_1();
    this.value_1 = value;
  }
  protoOf(WindowWidthSizeClass).compareTo_6aeg15_k$ = function (other) {
    return WindowWidthSizeClass__compareTo_impl_7m3wk2(this.value_1, other);
  };
  protoOf(WindowWidthSizeClass).compareTo_hpufkf_k$ = function (other) {
    return WindowWidthSizeClass__compareTo_impl_7m3wk2_0(this, other);
  };
  protoOf(WindowWidthSizeClass).toString = function () {
    return WindowWidthSizeClass__toString_impl_nu2ja8(this.value_1);
  };
  protoOf(WindowWidthSizeClass).hashCode = function () {
    return WindowWidthSizeClass__hashCode_impl_pfvlw1(this.value_1);
  };
  protoOf(WindowWidthSizeClass).equals = function (other) {
    return WindowWidthSizeClass__equals_impl_cb88x9(this.value_1, other);
  };
  function breakpoint_0(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 === $this.Expanded_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(900);
    } else if (_this__u8e3s4 === $this.Medium_1) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(480);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    }
    return tmp;
  }
  function _WindowHeightSizeClass___init__impl__yocqd5(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function WindowHeightSizeClass__compareTo_impl_w07bv1($this, other) {
    return Dp__compareTo_impl_tlg3dl(breakpoint_0($this, Companion_getInstance_2()), breakpoint_0(other, Companion_getInstance_2()));
  }
  function WindowHeightSizeClass__compareTo_impl_w07bv1_0($this, other) {
    return WindowHeightSizeClass__compareTo_impl_w07bv1($this.value_1, other instanceof WindowHeightSizeClass ? other.value_1 : THROW_CCE());
  }
  function WindowHeightSizeClass__toString_impl_789z8h($this) {
    return 'WindowHeightSizeClass.' + ($this === Companion_getInstance_2().Compact_1 ? 'Compact' : $this === Companion_getInstance_2().Medium_1 ? 'Medium' : $this === Companion_getInstance_2().Expanded_1 ? 'Expanded' : '');
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Compact_1 = _WindowHeightSizeClass___init__impl__yocqd5(0);
    this.Medium_1 = _WindowHeightSizeClass___init__impl__yocqd5(1);
    this.Expanded_1 = _WindowHeightSizeClass___init__impl__yocqd5(2);
    this.DefaultSizeClasses_1 = setOf([new WindowHeightSizeClass(this.Compact_1), new WindowHeightSizeClass(this.Medium_1), new WindowHeightSizeClass(this.Expanded_1)]);
  }
  protoOf(Companion_1).get_Compact_t45w2i_k$ = function () {
    return this.Compact_1;
  };
  protoOf(Companion_1).get_Medium_wye4ye_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_1).get_Expanded_8669zm_k$ = function () {
    return this.Expanded_1;
  };
  protoOf(Companion_1).get_DefaultSizeClasses_q9w8el_k$ = function () {
    return this.DefaultSizeClasses_1;
  };
  protoOf(Companion_1).get_StandardSizeClasses_ugj2hr_k$ = function () {
    return this.DefaultSizeClasses_1;
  };
  protoOf(Companion_1).fromHeight_pp4b9q_k$ = function (height) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
    var tmp$ret$1 = get_defaultDensity().toPx_mycba2_k$(height);
    return this.fromHeight_ls53ik_k$(tmp$ret$1, get_defaultDensity(), this.DefaultSizeClasses_1);
  };
  protoOf(Companion_1).fromHeight_ls53ik_k$ = function (height, density, supportedSizeClasses) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(height >= 0.0)) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      var message = 'Width must not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!supportedSizeClasses.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      var message_0 = 'Must support at least one size class';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sortedSizeClasses = sortedDescending(supportedSizeClasses);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = sortedSizeClasses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().value_1;
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.windowsizeclass.Companion.fromHeight.<anonymous>.<anonymous>' call
      if (height >= density.toPx_mycba2_k$(breakpoint_0(element, Companion_getInstance_2()))) {
        return element;
      }
    }
    return last(sortedSizeClasses).value_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WindowHeightSizeClass__hashCode_impl_eivxke($this) {
    return $this;
  }
  function WindowHeightSizeClass__equals_impl_6ni5v2($this, other) {
    if (!(other instanceof WindowHeightSizeClass))
      return false;
    if (!($this === (other instanceof WindowHeightSizeClass ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function WindowHeightSizeClass(value) {
    Companion_getInstance_2();
    this.value_1 = value;
  }
  protoOf(WindowHeightSizeClass).compareTo_nd3q7v_k$ = function (other) {
    return WindowHeightSizeClass__compareTo_impl_w07bv1(this.value_1, other);
  };
  protoOf(WindowHeightSizeClass).compareTo_hpufkf_k$ = function (other) {
    return WindowHeightSizeClass__compareTo_impl_w07bv1_0(this, other);
  };
  protoOf(WindowHeightSizeClass).toString = function () {
    return WindowHeightSizeClass__toString_impl_789z8h(this.value_1);
  };
  protoOf(WindowHeightSizeClass).hashCode = function () {
    return WindowHeightSizeClass__hashCode_impl_eivxke(this.value_1);
  };
  protoOf(WindowHeightSizeClass).equals = function (other) {
    return WindowHeightSizeClass__equals_impl_6ni5v2(this.value_1, other);
  };
  var properties_initialized_WindowSizeClass_kt_m3p4fr;
  function _init_properties_WindowSizeClass_kt__hs41th() {
    if (!properties_initialized_WindowSizeClass_kt_m3p4fr) {
      properties_initialized_WindowSizeClass_kt_m3p4fr = true;
      defaultDensity = Density(1.0, 1.0);
    }
  }
  function calculateWindowSizeClass$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(513519169);
    if (isTraceInProgress()) {
      traceEventStart(513519169, $changed, -1, 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable (WindowSizeClass.js.kt:19)');
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
      // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>' call
      var value = mutableStateOf(Companion_getInstance_0().calculateFromSize_pifii9_k$(getDpSize(window)));
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var windowSizeClass$delegate = tmp0;
    $composer_0.startReplaceableGroup_ip860b_k$(1036391695);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(windowSizeClass$delegate);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>' call
      var value_0 = calculateWindowSizeClass$composable$lambda_1(windowSizeClass$delegate);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    DisposableEffect$composable(Unit_getInstance(), tmpCache, $composer_0, 6);
    var tmp0_0 = calculateWindowSizeClass$composable$lambda(windowSizeClass$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function getDpSize(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4.innerWidth;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = _this__u8e3s4.innerHeight;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return DpSize(tmp, tmp$ret$1);
  }
  function calculateWindowSizeClass$composable$lambda($windowSizeClass$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('windowSizeClass', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $windowSizeClass$delegate.get_value_j01efc_k$();
  }
  function calculateWindowSizeClass$composable$lambda_0($windowSizeClass$delegate, value) {
    getLocalDelegateReference('windowSizeClass', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $windowSizeClass$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function calculateWindowSizeClass$composable$lambda$lambda($windowSizeClass$delegate) {
    return function (it) {
      calculateWindowSizeClass$composable$lambda_0($windowSizeClass$delegate, Companion_getInstance_0().calculateFromSize_pifii9_k$(getDpSize(window)));
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($callback) {
    this.$callback_1 = $callback;
  }
  protoOf(_no_name_provided__qut3iv).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.material3.windowsizeclass.calculateWindowSizeClass$composable.<anonymous>.<anonymous>.<anonymous>' call
    window.removeEventListener('resize', this.$callback_1);
  };
  function calculateWindowSizeClass$composable$lambda_1($windowSizeClass$delegate) {
    return function ($this$DisposableEffect) {
      var callback = calculateWindowSizeClass$composable$lambda$lambda($windowSizeClass$delegate);
      window.addEventListener('resize', callback);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(callback);
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = calculateWindowSizeClass$composable;
  _.$_$.b = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=material3-windowsizeclass-multiplatform-lib.js.map
