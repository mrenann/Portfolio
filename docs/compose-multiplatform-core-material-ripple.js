(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-graphics.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    root['compose-multiplatform-core-material-ripple'] = factory(typeof this['compose-multiplatform-core-material-ripple'] === 'undefined' ? {} : this['compose-multiplatform-core-material-ripple'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-graphics'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var protoOf = kotlin_kotlin.$_$.cf;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var isInterface = kotlin_kotlin.$_$.pe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var VOID = kotlin_kotlin.$_$.g;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var equals = kotlin_kotlin.$_$.ud;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.ee;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var IndicationInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.ca;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var isNaN_0 = kotlin_kotlin.$_$.kl;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.fl;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var getNumberHashCode = kotlin_kotlin.$_$.ae;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Ripple, 'Ripple', classMeta, VOID, [Indication]);
  setMetadataFor(CommonRipple, 'CommonRipple', classMeta, Ripple);
  setMetadataFor(CommonRippleIndicationInstance$addRipple$slambda, 'CommonRippleIndicationInstance$addRipple$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleIndicationInstance, 'RippleIndicationInstance', classMeta, VOID, [IndicationInstance]);
  setMetadataFor(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', classMeta, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(Ripple$rememberUpdatedInstance$composable$slambda, 'Ripple$rememberUpdatedInstance$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer$handleInteraction$slambda_1, 'StateLayer$handleInteraction$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(StateLayer, 'StateLayer', classMeta);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_1, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda$slambda_3, 'RippleAnimation$fadeIn$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda$slambda, 'RippleAnimation$fadeOut$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeIn$slambda, 'RippleAnimation$fadeIn$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RippleAnimation$fadeOut$slambda, 'RippleAnimation$fadeOut$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($animateCOROUTINE$0, '$animateCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($fadeInCOROUTINE$1, '$fadeInCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($fadeOutCOROUTINE$2, '$fadeOutCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(RippleAnimation, 'RippleAnimation', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(RippleTheme, 'RippleTheme', interfaceMeta);
  setMetadataFor(DebugRippleTheme, 'DebugRippleTheme', objectMeta, VOID, [RippleTheme]);
  setMetadataFor(RippleAlpha, 'RippleAlpha', classMeta);
  //endregion
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).rememberUpdatedRippleInstance_qf90ob_k$ = function (interactionSource, bounded, radius, color, rippleAlpha) {
    illegalDecoyCallException('rememberUpdatedRippleInstance');
  };
  protoOf(CommonRipple).rememberUpdatedRippleInstance$composable_3ad1i1_k$ = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1340080932);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance$composable)P(2!1,3:c#ui.unit.Dp)53@1880L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1340080932, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable (CommonRipple.kt:46)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(interactionSource) | $composer_1.changed_ga7h3f_k$(this));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
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
  };
  function _get_bounded__6dedw($this) {
    return $this.bounded_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_rippleAlpha__fyluwt($this) {
    return $this.rippleAlpha_1;
  }
  function _get_ripples__fsflm6($this) {
    return $this.ripples_1;
  }
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.ripples_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.get_value_j01efc_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.rippleAlpha_1.get_value_j01efc_k$().get_pressedAlpha_4p7l23_k$();
      var tmp;
      if (!(alpha === 0.0)) {
        ripple.draw_5ki4v8_k$(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
        tmp = Unit_getInstance();
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.$rippleAnimation_1 = $rippleAnimation;
    this.this$0__1 = this$0;
    this.$interaction_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$rippleAnimation_1.animate_y1clxy_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(5);
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.ripples_1.remove_gppy8k_k$(this.$interaction_1);
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.$rippleAnimation_1, this.this$0__1, this.$interaction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
    this.rippleAlpha_1 = rippleAlpha;
    this.ripples_1 = mutableStateMapOf();
  }
  protoOf(CommonRippleIndicationInstance).drawIndication_8rzu54_k$ = function (_this__u8e3s4) {
    var color = this.color_1.get_value_j01efc_k$().value_1;
    _this__u8e3s4.drawContent_m0wwjp_k$();
    this.drawStateLayer_gc2t71_k$(_this__u8e3s4, this.radius_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).addRipple_x9czbt_k$ = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.ripples_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.get_value_j01efc_k$();
      ripple.finish_mh2air_k$();
    }
    var origin = this.bounded_1 ? interaction.get_pressPosition_rjxyft_k$() : null;
    var rippleAnimation = new RippleAnimation(origin, this.radius_1, this.bounded_1);
    // Inline function 'kotlin.collections.set' call
    this.ripples_1.put_4fpzoq_k$(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).removeRipple_vyc1mc_k$ = function (interaction) {
    var tmp0_safe_receiver = this.ripples_1.get_wei43m_k$(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finish_mh2air_k$();
    }
  };
  protoOf(CommonRippleIndicationInstance).onRemembered_68t2e3_k$ = function () {
  };
  protoOf(CommonRippleIndicationInstance).onForgotten_pbqifp_k$ = function () {
    this.ripples_1.clear_j9egeb_k$();
  };
  protoOf(CommonRippleIndicationInstance).onAbandoned_1gx7a3_k$ = function () {
    this.ripples_1.clear_j9egeb_k$();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function rememberRipple$composable(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = {_v: bounded};
    var radius_0 = {_v: new Dp(radius)};
    var color_0 = color;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance_0().get_Unspecified_9b9rm3_k$());
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_1().get_Unspecified_j397pn_k$();
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key1 = bounded_0._v;
    var key2 = radius_0._v;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(key1) | $composer_1.changed_ga7h3f_k$(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      var value = new CommonRipple(bounded_0._v, radius_0._v.value_1, colorState);
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
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.$instance_1 = $instance;
    this.$this_LaunchedEffect_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).invoke_hcr54n_k$ = function (interaction, $completion) {
    var tmp = this.create_c56zqz_k$(interaction, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_hcr54n_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$instance_1.addRipple_x9czbt_k$(this.interaction_1, this.$this_LaunchedEffect_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$instance_1.removeRipple_vyc1mc_k$(this.interaction_1.get_press_ix1cey_k$());
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$instance_1.removeRipple_vyc1mc_k$(this.interaction_1.get_press_ix1cey_k$());
              } else {
                this.$instance_1.updateStateLayer_txe4vx_k$(this.interaction_1, this.$this_LaunchedEffect_1);
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).create_c56zqz_k$ = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda(this.$instance_1, this.$this_LaunchedEffect_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_c56zqz_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_hcr54n_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_bounded__6dedw_0($this) {
    return $this.bounded_1;
  }
  function _get_radius__h7nyvb_0($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$instance_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = Ripple$rememberUpdatedInstance$composable$slambda$slambda_0(this.$instance_1, this.$this$LaunchedEffect_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda(this.$interactionSource_1, this.$instance_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Ripple$rememberUpdatedInstance$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Ripple$rememberUpdatedInstance$composable$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
  }
  protoOf(Ripple).rememberUpdatedInstance_t0r2w_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.bounded_1 === other.bounded_1))
      return false;
    if (!equals(this.radius_1, other.radius_1))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = getBooleanHashCode(this.bounded_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.radius_1) | 0;
    result = imul(31, result) + hashCode(this.color_1) | 0;
    return result;
  };
  protoOf(Ripple).rememberUpdatedInstance$composable_cej9r0_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1363498422);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)116@5361L7,117@5389L174,124@5617L13,124@5590L41,126@5656L155,134@5821L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1363498422, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance$composable (Ripple.kt:113)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.startReplaceableGroup_ip860b_k$(2051856795);
    sourceInformation($composer_0, '121@5525L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = this.color_1.get_value_j01efc_k$().value_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _Color___get_value__impl__1pls5m(Companion_getInstance_1().get_Unspecified_j397pn_k$()))) {
      tmp = this.color_1.get_value_j01efc_k$().value_1;
    } else {
      tmp = theme.defaultColor$composable_7j5n5_k$($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var color = rememberUpdatedState$composable(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState$composable(theme.rippleAlpha$composable_909i5y_k$($composer_0, 0), $composer_0, 0);
    var instance = this.rememberUpdatedRippleInstance$composable_3ad1i1_k$(interactionSource, this.bounded_1, this.radius_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    LaunchedEffect$composable(instance, interactionSource, Ripple$rememberUpdatedInstance$composable$slambda_0(interactionSource, instance, null), $composer_0, 8 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return instance;
  };
  function _get_stateLayer__f34d6d($this) {
    return $this.stateLayer_1;
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.stateLayer_1 = new StateLayer(bounded, rippleAlpha);
  }
  protoOf(RippleIndicationInstance).updateStateLayer_txe4vx_k$ = function (interaction, scope) {
    this.stateLayer_1.handleInteraction_wsq8wu_k$(interaction, scope);
  };
  protoOf(RippleIndicationInstance).drawStateLayer_gc2t71_k$ = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.stateLayer_1.drawStateLayer_gc2t71_k$(_this__u8e3s4, radius, color);
  };
  function _get_bounded__6dedw_1($this) {
    return $this.bounded_1;
  }
  function _get_rippleAlpha__fyluwt_0($this) {
    return $this.rippleAlpha_1;
  }
  function _get_animatedAlpha__sz6rt6($this) {
    return $this.animatedAlpha_1;
  }
  function _get_interactions__vdfb5i($this) {
    return $this.interactions_1;
  }
  function _set_currentInteraction__v4tp9e($this, _set____db54di) {
    $this.currentInteraction_1 = _set____db54di;
  }
  function _get_currentInteraction__5yf1le($this) {
    return $this.currentInteraction_1;
  }
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetAlpha_1 = $targetAlpha;
    this.$incomingAnimationSpec_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateLayer$handleInteraction$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(this.$targetAlpha_1, this.$incomingAnimationSpec_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.this$0__1, this.$targetAlpha_1, this.$incomingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(StateLayer$handleInteraction$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$outgoingAnimationSpec_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(0.0, this.$outgoingAnimationSpec_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.this$0__1, this.$outgoingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(StateLayer$handleInteraction$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.bounded_1 = bounded;
    this.rippleAlpha_1 = rippleAlpha;
    this.animatedAlpha_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interactions_1 = ArrayList_init_$Create$();
    this.currentInteraction_1 = null;
  }
  protoOf(StateLayer).handleInteraction_wsq8wu_k$ = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.interactions_1.add_utx5q5_k$(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.interactions_1.remove_cedx0m_k$(interaction.get_enter_iqxcq7_k$());
      } else {
        if (interaction instanceof Focus) {
          this.interactions_1.add_utx5q5_k$(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.interactions_1.remove_cedx0m_k$(interaction.get_focus_irhg33_k$());
          } else {
            if (interaction instanceof Start) {
              this.interactions_1.add_utx5q5_k$(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.interactions_1.remove_cedx0m_k$(interaction.get_start_iypx6h_k$());
              } else {
                if (interaction instanceof Cancel_0) {
                  this.interactions_1.remove_cedx0m_k$(interaction.get_start_iypx6h_k$());
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.interactions_1);
    if (!equals(this.currentInteraction_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var tmp;
        if (interaction instanceof Enter) {
          tmp = this.rippleAlpha_1.get_value_j01efc_k$().get_hoveredAlpha_oe6bn8_k$();
        } else {
          if (interaction instanceof Focus) {
            tmp = this.rippleAlpha_1.get_value_j01efc_k$().get_focusedAlpha_9tm3xs_k$();
          } else {
            if (interaction instanceof Start) {
              tmp = this.rippleAlpha_1.get_value_j01efc_k$().get_draggedAlpha_4hlfij_k$();
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.currentInteraction_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.currentInteraction_1 = newInteraction;
    }
  };
  protoOf(StateLayer).drawStateLayer_gc2t71_k$ = function (_this__u8e3s4, radius, color) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.bounded_1, _this__u8e3s4.get_size_cxx1ym_k$());
    } else {
      tmp = _this__u8e3s4.toPx_mycba2_k$(radius);
    }
    var targetRadius = tmp;
    var alpha = this.animatedAlpha_1.get_value_j01efc_k$();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.bounded_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var right = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$());
        var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$());
        var clipOp = Companion_getInstance_2().get_Intersect_gpxc6n_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
        _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, targetRadius);
        $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
        $this$with.set_size_6a0e6q_k$(previousSize);
      } else {
        _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, targetRadius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedRadiusPercent_1.animateTo$default_71hueo_k$(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedCenterPercent_1.animateTo$default_71hueo_k$(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_71hueo_k$(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_origin__gfzohd($this, _set____db54di) {
    $this.origin_1 = _set____db54di;
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _get_radius__h7nyvb_1($this) {
    return $this.radius_1;
  }
  function _get_bounded__6dedw_2($this) {
    return $this.bounded_1;
  }
  function _set_startRadius__av892p($this, _set____db54di) {
    $this.startRadius_1 = _set____db54di;
  }
  function _get_startRadius__tvhmkj($this) {
    return $this.startRadius_1;
  }
  function _set_targetRadius__y9wawk($this, _set____db54di) {
    $this.targetRadius_1 = _set____db54di;
  }
  function _get_targetRadius__l7h0ig($this) {
    return $this.targetRadius_1;
  }
  function _set_targetCenter__t95byp($this, _set____db54di) {
    $this.targetCenter_1 = _set____db54di;
  }
  function _get_targetCenter__q87zgb($this) {
    return $this.targetCenter_1;
  }
  function _get_animatedAlpha__sz6rt6_0($this) {
    return $this.animatedAlpha_1;
  }
  function _get_animatedRadiusPercent__dif63j($this) {
    return $this.animatedRadiusPercent_1;
  }
  function _get_animatedCenterPercent__aw6y3o($this) {
    return $this.animatedCenterPercent_1;
  }
  function _get_finishSignalDeferred__9mucun($this) {
    return $this.finishSignalDeferred_1;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var this_0 = $this.finishedFadingIn$delegate_1;
    finishedFadingIn$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_finishedFadingIn__pzmnej($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.finishedFadingIn$delegate_1;
    finishedFadingIn$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var this_0 = $this.finishRequested$delegate_1;
    finishRequested$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_finishRequested__usb5ii($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.finishRequested$delegate_1;
    finishRequested$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).invoke_r1kw3c_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeIn$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_r1kw3c_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.this$0__1, null));
          launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.this$0__1, null));
          return launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.this$0__1, null));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(RippleAnimation$fadeIn$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_r1kw3c_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).invoke_r1kw3c_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation$fadeOut$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_r1kw3c_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return launch(this.$this$coroutineScope_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.this$0__1, null));
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(RippleAnimation$fadeOut$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_r1kw3c_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = fadeIn(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this._this__u8e3s4__1, true);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.finishSignalDeferred_1.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = fadeOut(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this._this__u8e3s4__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this._this__u8e3s4__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function RippleAnimation(origin, radius, bounded) {
    this.origin_1 = origin;
    this.radius_1 = radius;
    this.bounded_1 = bounded;
    this.startRadius_1 = null;
    this.targetRadius_1 = null;
    this.targetCenter_1 = null;
    this.animatedAlpha_1 = Animatable(0.0);
    this.animatedRadiusPercent_1 = Animatable(0.0);
    this.animatedCenterPercent_1 = Animatable(0.0);
    this.finishSignalDeferred_1 = CompletableDeferred(null);
    this.finishedFadingIn$delegate_1 = mutableStateOf(false);
    this.finishRequested$delegate_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).animate_y1clxy_k$ = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RippleAnimation).finish_mh2air_k$ = function () {
    _set_finishRequested__u52oy2(this, true);
    this.finishSignalDeferred_1.complete_ixf84q_k$(Unit_getInstance());
  };
  protoOf(RippleAnimation).draw_5ki4v8_k$ = function (_this__u8e3s4, color) {
    if (this.startRadius_1 == null) {
      this.startRadius_1 = getRippleStartRadius(_this__u8e3s4.get_size_cxx1ym_k$());
    }
    if (this.targetRadius_1 == null) {
      var tmp = this;
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_0 = this.radius_1;
      if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
        tmp_0 = getRippleEndRadius(_this__u8e3s4, this.bounded_1, _this__u8e3s4.get_size_cxx1ym_k$());
      } else {
        tmp_0 = _this__u8e3s4.toPx_mycba2_k$(this.radius_1);
      }
      tmp.targetRadius_1 = tmp_0;
    }
    var tmp_1 = this.origin_1;
    if ((tmp_1 == null ? null : new Offset(tmp_1)) == null) {
      this.origin_1 = _this__u8e3s4.get_center_dcexec_k$();
    }
    var tmp_2 = this.targetCenter_1;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      this.targetCenter_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$()) / 2.0);
    }
    var tmp_3;
    if (_get_finishRequested__usb5ii(this) ? !_get_finishedFadingIn__pzmnej(this) : false) {
      tmp_3 = 1.0;
    } else {
      tmp_3 = this.animatedAlpha_1.get_value_j01efc_k$();
    }
    var alpha = tmp_3;
    var radius = lerp(ensureNotNull(this.startRadius_1), ensureNotNull(this.targetRadius_1), this.animatedRadiusPercent_1.get_value_j01efc_k$());
    var tmp_4 = this.origin_1;
    var tmp_5 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).packedValue_1);
    var tmp_6 = this.targetCenter_1;
    var tmp_7 = lerp(tmp_5, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$());
    var tmp_8 = this.origin_1;
    var tmp_9 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).packedValue_1);
    var tmp_10 = this.targetCenter_1;
    var centerOffset = Offset_0(tmp_7, lerp(tmp_9, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_10 == null ? null : new Offset(tmp_10)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.bounded_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$());
      var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$());
      var clipOp = Companion_getInstance_2().get_Intersect_gpxc6n_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
      var previousSize = $this$with.get_size_cxx1ym_k$();
      $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
      // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
      _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius, centerOffset);
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    } else {
      _this__u8e3s4.drawCircle$default_wqrb84_k$(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.toPx_mycba2_k$(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function get_FadeInDuration() {
    return FadeInDuration;
  }
  var FadeInDuration;
  function get_RadiusDuration() {
    return RadiusDuration;
  }
  var RadiusDuration;
  function get_FadeOutDuration() {
    return FadeOutDuration;
  }
  var FadeOutDuration;
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'kotlin.math.max' call
    var a = _Size___get_width__impl__58y75t(size);
    var b = _Size___get_height__impl__a04p02(size);
    return Math.max(a, b) * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).defaultRippleColor_nmy1zh_k$ = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance_1().get_White_xpp3qf_k$();
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).defaultRippleAlpha_gyw72t_k$ = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RippleTheme() {
  }
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  protoOf(DebugRippleTheme).defaultColor_ht07c9_k$ = function () {
    illegalDecoyCallException('defaultColor');
  };
  protoOf(DebugRippleTheme).rippleAlpha_cuqqk2_k$ = function () {
    illegalDecoyCallException('rippleAlpha');
  };
  protoOf(DebugRippleTheme).defaultColor$composable_7j5n5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1423573606, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor$composable (RippleTheme.kt:214)');
    }
    var tmp0 = Companion_getInstance_3().defaultRippleColor_nmy1zh_k$(Companion_getInstance_1().get_Black_t4k9fh_k$(), true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  protoOf(DebugRippleTheme).rippleAlpha$composable_909i5y_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2071239027, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha$composable (RippleTheme.kt:217)');
    }
    var tmp0 = Companion_getInstance_3().defaultRippleAlpha_gyw72t_k$(Companion_getInstance_1().get_Black_t4k9fh_k$(), true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.draggedAlpha_1 = draggedAlpha;
    this.focusedAlpha_1 = focusedAlpha;
    this.hoveredAlpha_1 = hoveredAlpha;
    this.pressedAlpha_1 = pressedAlpha;
    this.$stable_1 = 0;
  }
  protoOf(RippleAlpha).get_draggedAlpha_4hlfij_k$ = function () {
    return this.draggedAlpha_1;
  };
  protoOf(RippleAlpha).get_focusedAlpha_9tm3xs_k$ = function () {
    return this.focusedAlpha_1;
  };
  protoOf(RippleAlpha).get_hoveredAlpha_oe6bn8_k$ = function () {
    return this.hoveredAlpha_1;
  };
  protoOf(RippleAlpha).get_pressedAlpha_4p7l23_k$ = function () {
    return this.pressedAlpha_1;
  };
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.draggedAlpha_1 === other.draggedAlpha_1))
      return false;
    if (!(this.focusedAlpha_1 === other.focusedAlpha_1))
      return false;
    if (!(this.hoveredAlpha_1 === other.hoveredAlpha_1))
      return false;
    if (!(this.pressedAlpha_1 === other.pressedAlpha_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.draggedAlpha_1);
    result = imul(31, result) + getNumberHashCode(this.focusedAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hoveredAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pressedAlpha_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.draggedAlpha_1 + ', focusedAlpha=' + this.focusedAlpha_1 + ', ' + ('hoveredAlpha=' + this.hoveredAlpha_1 + ', pressedAlpha=' + this.pressedAlpha_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  //region block: init
  FadeInDuration = 75;
  RadiusDuration = 225;
  FadeOutDuration = 150;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleAlpha;
  _.$_$.c = RippleTheme;
  _.$_$.d = rememberRipple$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material-ripple.js.map
