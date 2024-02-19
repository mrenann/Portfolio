(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './voyager-voyager-tab-navigator.js', './material3-windowsizeclass-multiplatform-lib.js', './Napier-napier.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui-text.js', './kotlinx-serialization-kotlinx-serialization-core.js', './compose-icons-feather.js', './compose-multiplatform-core-ui-geometry.js', './voyager-voyager-core.js', './compose-imageLoader-image-loader.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./voyager-voyager-tab-navigator.js'), require('./material3-windowsizeclass-multiplatform-lib.js'), require('./Napier-napier.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui-text.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./compose-icons-feather.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./voyager-voyager-core.js'), require('./compose-imageLoader-image-loader.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['voyager-voyager-tab-navigator'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'voyager-voyager-tab-navigator' was not found. Please, check whether 'voyager-voyager-tab-navigator' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['material3-windowsizeclass-multiplatform-lib'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'material3-windowsizeclass-multiplatform-lib' was not found. Please, check whether 'material3-windowsizeclass-multiplatform-lib' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['Napier-napier'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'Napier-napier' was not found. Please, check whether 'Napier-napier' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-icons-feather'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-icons-feather' was not found. Please, check whether 'compose-icons-feather' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['voyager-voyager-core'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'voyager-voyager-core' was not found. Please, check whether 'voyager-voyager-core' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['compose-imageLoader-image-loader'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'compose-imageLoader-image-loader' was not found. Please, check whether 'compose-imageLoader-image-loader' is loaded prior to 'Portfolio:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'Portfolio:composeApp'.");
    }
    root['Portfolio:composeApp'] = factory(typeof this['Portfolio:composeApp'] === 'undefined' ? {} : this['Portfolio:composeApp'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['voyager-voyager-tab-navigator'], this['material3-windowsizeclass-multiplatform-lib'], this['Napier-napier'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui-text'], this['kotlinx-serialization-kotlinx-serialization-core'], this['compose-icons-feather'], this['compose-multiplatform-core-ui-geometry'], this['voyager-voyager-core'], this['compose-imageLoader-image-loader'], this['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_voyager_voyager_tab_navigator, kotlin_material3_windowsizeclass_multiplatform_lib, kotlin_io_github_aakira_napier, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_br_com_devsrsouza_compose_icons_feather, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_voyager_voyager_core, kotlin_io_github_qdsfdhvh_image_loader, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var listOf = kotlin_kotlin.$_$.ia;
  var TabDisposable$composable = kotlin_voyager_voyager_tab_navigator.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var calculateWindowSizeClass$composable = kotlin_material3_windowsizeclass_multiplatform_lib.$_$.a;
  var Companion_getInstance = kotlin_material3_windowsizeclass_multiplatform_lib.$_$.b;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var VOID = kotlin_kotlin.$_$.g;
  var log = kotlin_io_github_aakira_napier.$_$.c;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var TabNavigator$composable = kotlin_voyager_voyager_tab_navigator.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.cf;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var Long = kotlin_kotlin.$_$.dk;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n4;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.r;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var NavigationRail$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var NavigationBar$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var get_LocalTabNavigator = kotlin_voyager_voyager_tab_navigator.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var NavigationBarItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var NavigationRailItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.u7;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.r7;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.pe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var equals = kotlin_kotlin.$_$.ud;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var CurrentTab$composable = kotlin_voyager_voyager_tab_navigator.$_$.a;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var Scaffold$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.fl;
  var Icon$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.af;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  var classMeta = kotlin_kotlin.$_$.qd;
  var THROW_IAE = kotlin_kotlin.$_$.mk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var FeatherIcons_getInstance = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.i;
  var get_Mail = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.e;
  var get_Phone = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.f;
  var get_Linkedin = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.d;
  var get_Github = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.c;
  var Enum = kotlin_kotlin.$_$.xj;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Color_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.og;
  var THROW_ISE = kotlin_kotlin.$_$.nk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.zd;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.o;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.n;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var Shapes = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var Icon$composable_0 = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Color_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var hashCode = kotlin_kotlin.$_$.ee;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.m5;
  var wrapContentHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var CardDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var Card$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var wrapContentSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var drawBehind = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var get_key = kotlin_voyager_voyager_core.$_$.e;
  var Screen = kotlin_voyager_voyager_core.$_$.f;
  var get_PhoneCall = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.g;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.x4;
  var TabOptions = kotlin_voyager_voyager_tab_navigator.$_$.e;
  var Fixed = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var LazyVerticalGrid$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var Tab = kotlin_voyager_voyager_tab_navigator.$_$.f;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var get_lastIndex = kotlin_kotlin.$_$.aa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ol;
  var get_BookOpen = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.a;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var LazyColumn$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var get_User = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.h;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var rememberImagePainter$composable = kotlin_io_github_qdsfdhvh_image_loader.$_$.a;
  var Image$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var padding_2 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_Code = kotlin_br_com_devsrsouza_compose_icons_feather.$_$.b;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s5;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.al;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var Napier_getInstance = kotlin_io_github_aakira_napier.$_$.a;
  var DebugAntilog = kotlin_io_github_aakira_napier.$_$.b;
  var CanvasBasedWindow$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.i6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ProjectCard, 'ProjectCard', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(SocialOption, 'SocialOption', classMeta, Enum);
  setMetadataFor(Locales, 'Locales', objectMeta);
  setMetadataFor(Tabs, 'Tabs', classMeta);
  setMetadataFor(Strings, 'Strings', classMeta);
  setMetadataFor(CircleParameters, 'CircleParameters', classMeta);
  setMetadataFor(CircleParametersDefaults, 'CircleParametersDefaults', objectMeta);
  setMetadataFor(LineParameters, 'LineParameters', classMeta);
  setMetadataFor(LineParametersDefaults, 'LineParametersDefaults', objectMeta);
  setMetadataFor(ProccessStage, 'ProccessStage', classMeta);
  setMetadataFor(ProccessStageStatus, 'ProccessStageStatus', classMeta, Enum);
  setMetadataFor(StrokeParameters, 'StrokeParameters', classMeta);
  setMetadataFor(TimelineNodePosition, 'TimelineNodePosition', classMeta, Enum);
  setMetadataFor(HomeScreen, 'HomeScreen', objectMeta, VOID, [Screen]);
  setMetadataFor(ContactTab, 'ContactTab', objectMeta, VOID, [Tab]);
  setMetadataFor(EducationTab, 'EducationTab', objectMeta, VOID, [Tab]);
  setMetadataFor(HomeTab, 'HomeTab', objectMeta, VOID, [Tab]);
  setMetadataFor(ProjectsTab, 'ProjectsTab', objectMeta, VOID, [Tab]);
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function App(systemAppearance) {
    illegalDecoyCallException('App');
  }
  function AppContent(showNavigationRail) {
    illegalDecoyCallException('AppContent');
  }
  function BottomNavigationBar(tabs) {
    illegalDecoyCallException('BottomNavigationBar');
  }
  function NavigationRailItems(tabs) {
    illegalDecoyCallException('NavigationRailItems');
  }
  function TabNavigationItem(_this__u8e3s4, tab) {
    illegalDecoyCallException('TabNavigationItem');
  }
  function TabNavigationItem_0(tab) {
    illegalDecoyCallException('TabNavigationItem');
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(361927129, $dirty, -1, 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:58)');
      }
      TabDisposable$composable(it, listOf([HomeTab_getInstance(), ProjectsTab_getInstance(), EducationTab_getInstance(), ContactTab_getInstance()]), $composer_0, 48 | 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-499981334, $changed, -1, 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous> (App.kt:53)');
      }
      var windowClass = calculateWindowSizeClass$composable($composer_0, 0);
      var showNavigationRail = !(windowClass.get_widthSizeClass_2320u1_k$() === Companion_getInstance().get_Compact_17mu13_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(-129058122);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(windowClass);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn(windowClass);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      log(VOID, VOID, VOID, tmpCache);
      $composer_0.startReplaceableGroup_ip860b_k$(-129058069);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmpCache_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      log(VOID, VOID, 'your tag', tmpCache_0);
      var tmp_3 = HomeTab_getInstance();
      var tmp_4 = ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, -344669477, true, ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn_1(showNavigationRail));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      TabNavigator$composable(tmp_3, false, tmp_4, null, tmp0, $composer_0, 24966, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn($windowClass) {
    return function () {
      return $windowClass.toString();
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn_0() {
    return 'top-asasasas';
  }
  function ComposableSingletons$AppKt$lambda_2$lambda$lambda_v74hpn_1($showNavigationRail) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-344669477, $changed, -1, 'br.mrenann.dev.portfolio.ComposableSingletons$AppKt.lambda-2.<anonymous>.<anonymous> (App.kt:62)');
        }
        AppContent$composable($showNavigationRail, $composer_0, 0);
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
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(361927129, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-499981334, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$composable(systemAppearance, $composer, $changed, $default) {
    var systemAppearance_0 = {_v: systemAppearance};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(33574708);
    var $dirty = $changed;
    if (!(($dirty & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          $composer_0.startReplaceableGroup_ip860b_k$(-129058285);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'br.mrenann.dev.portfolio.App$composable.<anonymous>' call
            var value = App$composable$lambda;
            this_0.updateRememberedValue_l1wh71_k$(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          systemAppearance_0._v = tmpCache;
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(33574708, $dirty, -1, 'br.mrenann.dev.portfolio.App$composable (App.kt:52)');
      }
      AppTheme$composable(ComposableSingletons$AppKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(App$composable$lambda_0(systemAppearance_0, $changed, $default));
    }
  }
  function AppContent$composable(showNavigationRail, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(75871996);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(showNavigationRail) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(75871996, $dirty, -1, 'br.mrenann.dev.portfolio.AppContent$composable (App.kt:68)');
      }
      var tabs = listOf([HomeTab_getInstance(), ProjectsTab_getInstance(), EducationTab_getInstance(), ContactTab_getInstance()]);
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1399270620, true, AppContent$composable$lambda(showNavigationRail, tabs));
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
      var tmp_5;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Surface$composable(tmp, null, tmp_0, tmp_1, tmp_2, tmp_3, null, tmp0, $composer_0, 12582918, 126);
      if (showNavigationRail) {
        var tmp_7 = background(Companion_getInstance_1(), MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_inverseOnSurface_u9t8k2_k$());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$7 = _Dp___init__impl__ms3zkb(-1);
        var tmp_8 = offset(tmp_7, tmp$ret$7);
        var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_11, -1670692684, true, AppContent$composable$lambda_0(tabs));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_12 = value_0;
        } else {
          tmp_12 = it_0;
        }
        var tmp_13 = tmp_12;
        var tmp0_0 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        NavigationRail$composable(tmp_8, tmp_9, tmp_10, null, null, tmp0_0, $composer_0, 196608, 30);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppContent$composable$lambda_1(showNavigationRail, $changed));
    }
  }
  function BottomNavigationBar$composable(tabs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1553748845);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tabs) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1553748845, $dirty, -1, 'br.mrenann.dev.portfolio.BottomNavigationBar$composable (App.kt:101)');
      }
      var tmp = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(20);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(20);
      var tmp_1 = clip(tmp, RoundedCornerShape(tmp_0, tmp$ret$1));
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.BottomNavigationBar$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 418354826, true, BottomNavigationBar$composable$lambda(tabs));
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
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.BottomNavigationBar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      NavigationBar$composable(tmp_1, tmp_2, tmp_3, tmp_4, null, tmp0, $composer_0, 196608, 30);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(BottomNavigationBar$composable$lambda_0(tabs, $changed));
    }
  }
  function NavigationRailItems$composable(tabs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1833774957);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tabs) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1833774957, $dirty, -1, 'br.mrenann.dev.portfolio.NavigationRailItems$composable (App.kt:112)');
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tabs.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'br.mrenann.dev.portfolio.NavigationRailItems$composable.<anonymous>' call
        TabNavigationItem$composable_0(element, $composer_0, 0);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavigationRailItems$composable$lambda(tabs, $changed));
    }
  }
  function TabNavigationItem$composable(_this__u8e3s4, tab, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1737968991);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tab) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1737968991, $dirty, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable (App.kt:119)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalTabNavigator();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tabNavigator = tmp0;
      var tmp = tabNavigator.get_current_jwi6j4_k$().get_key_18j28a_k$() === tab.get_key_18j28a_k$();
      var tmp_0 = TabNavigationItem$composable$lambda(tabNavigator, tab);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1519098065, true, TabNavigationItem$composable$lambda_0(tab));
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
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_5, -1341435854, true, TabNavigationItem$composable$lambda_1(tab));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_8(dispatchReceiver_0);
        $composer_3.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var tmp_8 = tmp0_1;
      NavigationBarItem$composable(_this__u8e3s4, tmp, tmp_0, tmp_4, null, false, tmp_8, false, null, null, $composer_0, 1575936 | 14 & $dirty, 472);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(TabNavigationItem$composable$lambda_2(_this__u8e3s4, tab, $changed));
    }
  }
  function TabNavigationItem$composable_0(tab, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1229575434);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(tab) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1229575434, $dirty, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable (App.kt:131)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalTabNavigator();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tabNavigator = tmp0;
      var tmp = tabNavigator.get_current_jwi6j4_k$().get_key_18j28a_k$() === tab.get_key_18j28a_k$();
      var tmp_0 = TabNavigationItem$composable$lambda_3(tabNavigator, tab);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 645479956, true, TabNavigationItem$composable$lambda_4(tab));
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
      var tmp_2;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = tmp0_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_5, -1247880681, true, TabNavigationItem$composable$lambda_5(tab));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver_0);
        $composer_3.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var tmp_8 = tmp0_1;
      NavigationRailItem$composable(tmp, tmp_0, tmp_4, null, false, tmp_8, false, null, null, $composer_0, 196992, 472);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(TabNavigationItem$composable$lambda_6(tab, $changed));
    }
  }
  function App$composable$lambda(it) {
    return Unit_getInstance();
  }
  function App$composable$lambda_0($systemAppearance, $$changed, $$default) {
    return function ($composer, $force) {
      App$composable($systemAppearance._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppContent$composable$lambda$lambda($showNavigationRail, $tabs) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1019323425, $changed, -1, 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous> (App.kt:73)');
        }
        if (!$showNavigationRail) {
          BottomNavigationBar$composable($tabs, $composer_0, 6);
        }
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppContent$composable$lambda$lambda_0($showNavigationRail) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(it) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1493664277, $dirty, -1, 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous> (App.kt:76)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp_1 = padding(fillMaxSize(Companion_getInstance_1()), it);
        var tmp_2;
        if ($showNavigationRail) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_2 = _Dp___init__impl__ms3zkb(80);
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_2 = _Dp___init__impl__ms3zkb(0);
        }
        var modifier = padding_0(tmp_1, tmp_2);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 0 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_getInstance_1();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_3 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_4;
        if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
          tmp_4 = Unit_getInstance();
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        CurrentTab$composable($composer_5, 0);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_ern0ak_k$();
        $composer_3.endNode_3m0yfn_k$();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppContent$composable$lambda($showNavigationRail, $tabs) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1399270620, $changed, -1, 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous> (App.kt:71)');
        }
        var tmp_0 = fillMaxSize(Companion_getInstance_1());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1019323425, true, AppContent$composable$lambda$lambda($showNavigationRail, $tabs));
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
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_4 = tmp0;
        var tmp_5 = Companion_getInstance_4().get_Center_ws8q26_k$();
        var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_8, -1493664277, true, AppContent$composable$lambda$lambda_0($showNavigationRail));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Scaffold$composable(tmp_0, null, tmp_4, null, null, tmp_5, tmp_6, tmp_7, null, tmp0_0, $composer_0, 805306758, 474);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
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
  function AppContent$composable$lambda_0($tabs) {
    return function ($this$NavigationRail, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1670692684, $changed, -1, 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous> (App.kt:90)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var modifier = fillMaxHeight(Companion_getInstance_1());
        var tmp_0 = Arrangement_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(12);
        var modifier_0 = modifier;
        var verticalArrangement = tmp_0.spacedBy_ree0zx_k$(tmp$ret$0, Companion_getInstance_2().get_CenterVertically_dmkbbz_k$());
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_0 = Companion_getInstance_1();
        if (!((4 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((4 & 4) === 0))
          horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 54 >> 3 | 112 & 54 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_1 = modifier_0;
        var $changed_0 = 112 & 54 << 3;
        var modifier_2 = modifier_1;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_getInstance_1();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var skippableUpdate = materializerOf(modifier_2);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_2;
        if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
          tmp_2 = Unit_getInstance();
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'br.mrenann.dev.portfolio.AppContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        NavigationRailItems$composable($tabs, $composer_5, 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_ern0ak_k$();
        $composer_3.endNode_3m0yfn_k$();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppContent$composable$lambda_1($showNavigationRail, $$changed) {
    return function ($composer, $force) {
      AppContent$composable($showNavigationRail, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BottomNavigationBar$composable$lambda($tabs) {
    return function ($this$NavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$NavigationBar) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(418354826, $dirty, -1, 'br.mrenann.dev.portfolio.BottomNavigationBar$composable.<anonymous> (App.kt:105)');
        }
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $tabs.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'br.mrenann.dev.portfolio.BottomNavigationBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          TabNavigationItem$composable($this$NavigationBar, element, $composer_0, 14 & $dirty);
        }
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function BottomNavigationBar$composable$lambda_0($tabs, $$changed) {
    return function ($composer, $force) {
      BottomNavigationBar$composable($tabs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationRailItems$composable$lambda($tabs, $$changed) {
    return function ($composer, $force) {
      NavigationRailItems$composable($tabs, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TabNavigationItem$composable$lambda($tabNavigator, $tab) {
    return function () {
      $tabNavigator.set_current_nfhp4z_k$($tab);
      return Unit_getInstance();
    };
  }
  function TabNavigationItem$composable$lambda_0($tab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1519098065, $changed, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous> (App.kt:125)');
        }
        var tmp_0 = ensureNotNull($tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_icon_wont8i_k$());
        var tmp_1 = $tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_title_iz32un_k$();
        Icon$composable(tmp_0, tmp_1, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 12);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function TabNavigationItem$composable$lambda_1($tab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1341435854, $changed, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous> (App.kt:126)');
        }
        var tmp_0 = $tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_title_iz32un_k$();
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function TabNavigationItem$composable$lambda_2($this_TabNavigationItem$composable, $tab, $$changed) {
    return function ($composer, $force) {
      TabNavigationItem$composable($this_TabNavigationItem$composable, $tab, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function TabNavigationItem$composable$lambda_3($tabNavigator, $tab) {
    return function () {
      $tabNavigator.set_current_nfhp4z_k$($tab);
      return Unit_getInstance();
    };
  }
  function TabNavigationItem$composable$lambda_4($tab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(645479956, $changed, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous> (App.kt:137)');
        }
        var tmp_0 = ensureNotNull($tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_icon_wont8i_k$());
        var tmp_1 = $tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_title_iz32un_k$();
        Icon$composable(tmp_0, tmp_1, null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 12);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function TabNavigationItem$composable$lambda_5($tab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1247880681, $changed, -1, 'br.mrenann.dev.portfolio.TabNavigationItem$composable.<anonymous> (App.kt:138)');
        }
        var tmp_0 = $tab.$get_options$$composable_m5e2i1_k$($composer_0, 0).get_title_iz32un_k$();
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_0, null, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_0, 0, 0, 131070);
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
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function TabNavigationItem$composable$lambda_6($tab, $$changed) {
    return function ($composer, $force) {
      TabNavigationItem$composable_0($tab, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_jsonString() {
    return jsonString;
  }
  var jsonString;
  function get_$stableprop() {
    return 0;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_10() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    this.$stable_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('br.mrenann.dev.portfolio.domain.model.ProjectCard', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('nome', true);
    tmp0_serialDesc.addElement_5pzumi_k$('descricao', true);
    tmp0_serialDesc.addElement_5pzumi_k$('imagem', true);
    tmp0_serialDesc.addElement_5pzumi_k$('acesso', true);
    tmp0_serialDesc.addElement_5pzumi_k$('categoria', true);
    tmp0_serialDesc.addElement_5pzumi_k$('url', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp12_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp12_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.endStructure_1xqz0n_k$(tmp0_desc);
    return ProjectCard_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer).serialize_yzfowf_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.nome_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.nome_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.descricao_1 === '')) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.descricao_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.imagem_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.imagem_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 4) ? true : !(value.acesso_1 === '')) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, StringSerializer_getInstance(), value.acesso_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 5) ? true : !(value.categoria_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.categoria_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 6) ? true : !(value.url_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 6, value.url_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_yzfowf_k$(encoder, value instanceof ProjectCard ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ProjectCard_init_$Init$(seen1, id, nome, descricao, imagem, acesso, categoria, url, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    }
    $this.id_1 = id;
    if (0 === (seen1 & 2))
      $this.nome_1 = '';
    else
      $this.nome_1 = nome;
    if (0 === (seen1 & 4))
      $this.descricao_1 = '';
    else
      $this.descricao_1 = descricao;
    if (0 === (seen1 & 8))
      $this.imagem_1 = '';
    else
      $this.imagem_1 = imagem;
    if (0 === (seen1 & 16))
      $this.acesso_1 = '';
    else
      $this.acesso_1 = acesso;
    if (0 === (seen1 & 32))
      $this.categoria_1 = '';
    else
      $this.categoria_1 = categoria;
    if (0 === (seen1 & 64))
      $this.url_1 = '';
    else
      $this.url_1 = url;
    $this.$stable_1 = 0;
    return $this;
  }
  function ProjectCard_init_$Create$(seen1, id, nome, descricao, imagem, acesso, categoria, url, serializationConstructorMarker) {
    return ProjectCard_init_$Init$(seen1, id, nome, descricao, imagem, acesso, categoria, url, serializationConstructorMarker, objectCreate(protoOf(ProjectCard)));
  }
  function get_$stableprop_0() {
    return 0;
  }
  function ProjectCard(id, nome, descricao, imagem, acesso, categoria, url) {
    Companion_getInstance_10();
    nome = nome === VOID ? '' : nome;
    descricao = descricao === VOID ? '' : descricao;
    imagem = imagem === VOID ? '' : imagem;
    acesso = acesso === VOID ? '' : acesso;
    categoria = categoria === VOID ? '' : categoria;
    url = url === VOID ? '' : url;
    this.id_1 = id;
    this.nome_1 = nome;
    this.descricao_1 = descricao;
    this.imagem_1 = imagem;
    this.acesso_1 = acesso;
    this.categoria_1 = categoria;
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(ProjectCard).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ProjectCard).get_nome_wor90i_k$ = function () {
    return this.nome_1;
  };
  protoOf(ProjectCard).get_descricao_xbi5r4_k$ = function () {
    return this.descricao_1;
  };
  protoOf(ProjectCard).get_imagem_et448r_k$ = function () {
    return this.imagem_1;
  };
  protoOf(ProjectCard).get_acesso_avc0c5_k$ = function () {
    return this.acesso_1;
  };
  protoOf(ProjectCard).get_categoria_yes9ze_k$ = function () {
    return this.categoria_1;
  };
  protoOf(ProjectCard).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(ProjectCard).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(ProjectCard).component2_7eebsb_k$ = function () {
    return this.nome_1;
  };
  protoOf(ProjectCard).component3_7eebsa_k$ = function () {
    return this.descricao_1;
  };
  protoOf(ProjectCard).component4_7eebs9_k$ = function () {
    return this.imagem_1;
  };
  protoOf(ProjectCard).component5_7eebs8_k$ = function () {
    return this.acesso_1;
  };
  protoOf(ProjectCard).component6_7eebs7_k$ = function () {
    return this.categoria_1;
  };
  protoOf(ProjectCard).component7_7eebs6_k$ = function () {
    return this.url_1;
  };
  protoOf(ProjectCard).copy_tm1id7_k$ = function (id, nome, descricao, imagem, acesso, categoria, url) {
    return new ProjectCard(id, nome, descricao, imagem, acesso, categoria, url);
  };
  protoOf(ProjectCard).copy$default_qm2dui_k$ = function (id, nome, descricao, imagem, acesso, categoria, url, $super) {
    id = id === VOID ? this.id_1 : id;
    nome = nome === VOID ? this.nome_1 : nome;
    descricao = descricao === VOID ? this.descricao_1 : descricao;
    imagem = imagem === VOID ? this.imagem_1 : imagem;
    acesso = acesso === VOID ? this.acesso_1 : acesso;
    categoria = categoria === VOID ? this.categoria_1 : categoria;
    url = url === VOID ? this.url_1 : url;
    return $super === VOID ? this.copy_tm1id7_k$(id, nome, descricao, imagem, acesso, categoria, url) : $super.copy_tm1id7_k$.call(this, id, nome, descricao, imagem, acesso, categoria, url);
  };
  protoOf(ProjectCard).toString = function () {
    return 'ProjectCard(id=' + this.id_1 + ', nome=' + this.nome_1 + ', descricao=' + this.descricao_1 + ', imagem=' + this.imagem_1 + ', acesso=' + this.acesso_1 + ', categoria=' + this.categoria_1 + ', url=' + this.url_1 + ')';
  };
  protoOf(ProjectCard).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.nome_1) | 0;
    result = imul(result, 31) + (this.descricao_1 == null ? 0 : getStringHashCode(this.descricao_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.imagem_1) | 0;
    result = imul(result, 31) + (this.acesso_1 == null ? 0 : getStringHashCode(this.acesso_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.categoria_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.url_1) | 0;
    return result;
  };
  protoOf(ProjectCard).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProjectCard))
      return false;
    var tmp0_other_with_cast = other instanceof ProjectCard ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.nome_1 === tmp0_other_with_cast.nome_1))
      return false;
    if (!(this.descricao_1 == tmp0_other_with_cast.descricao_1))
      return false;
    if (!(this.imagem_1 === tmp0_other_with_cast.imagem_1))
      return false;
    if (!(this.acesso_1 == tmp0_other_with_cast.acesso_1))
      return false;
    if (!(this.categoria_1 === tmp0_other_with_cast.categoria_1))
      return false;
    if (!(this.url_1 === tmp0_other_with_cast.url_1))
      return false;
    return true;
  };
  var SocialOption_EMAIL_instance;
  var SocialOption_TELEPHONE_instance;
  var SocialOption_LINKEDIN_instance;
  var SocialOption_GITHUB_instance;
  function values() {
    return [SocialOption_EMAIL_getInstance(), SocialOption_TELEPHONE_getInstance(), SocialOption_LINKEDIN_getInstance(), SocialOption_GITHUB_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'EMAIL':
        return SocialOption_EMAIL_getInstance();
      case 'TELEPHONE':
        return SocialOption_TELEPHONE_getInstance();
      case 'LINKEDIN':
        return SocialOption_LINKEDIN_getInstance();
      case 'GITHUB':
        return SocialOption_GITHUB_getInstance();
      default:
        SocialOption_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SocialOption_entriesInitialized;
  function SocialOption_initEntries() {
    if (SocialOption_entriesInitialized)
      return Unit_getInstance();
    SocialOption_entriesInitialized = true;
    SocialOption_EMAIL_instance = new SocialOption('EMAIL', 0, 'Email', 'marcos.renann.br@gmail.com', 'mailto:marcos.renann.br@gmail.com', get_Mail(FeatherIcons_getInstance()));
    SocialOption_TELEPHONE_instance = new SocialOption('TELEPHONE', 1, 'Telephone', '+55 (88) 997241630', 'https://wa.me/5588997241630', get_Phone(FeatherIcons_getInstance()));
    SocialOption_LINKEDIN_instance = new SocialOption('LINKEDIN', 2, 'LinkedIn', 'Linkedin.com/in/marcos-renann', 'https://Linkedin.com/in/marcos-renann', get_Linkedin(FeatherIcons_getInstance()));
    SocialOption_GITHUB_instance = new SocialOption('GITHUB', 3, 'GitHub', 'https://github.com/mrenann', 'https://github.com/mrenann', get_Github(FeatherIcons_getInstance()));
  }
  var $ENTRIES;
  function SocialOption(name, ordinal, title, subtitle, onClick, icon) {
    Enum.call(this, name, ordinal);
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.onClick_1 = onClick;
    this.icon_1 = icon;
  }
  protoOf(SocialOption).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(SocialOption).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(SocialOption).get_onClick_l3c0lc_k$ = function () {
    return this.onClick_1;
  };
  protoOf(SocialOption).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  function SocialOption_EMAIL_getInstance() {
    SocialOption_initEntries();
    return SocialOption_EMAIL_instance;
  }
  function SocialOption_TELEPHONE_getInstance() {
    SocialOption_initEntries();
    return SocialOption_TELEPHONE_instance;
  }
  function SocialOption_LINKEDIN_getInstance() {
    SocialOption_initEntries();
    return SocialOption_LINKEDIN_instance;
  }
  function SocialOption_GITHUB_getInstance() {
    SocialOption_initEntries();
    return SocialOption_GITHUB_instance;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Locales() {
    Locales_instance = this;
    this.EN_1 = 'en';
    this.PT_1 = 'pt';
    this.$stable_1 = 0;
  }
  protoOf(Locales).get_EN_kntosu_k$ = function () {
    return this.EN_1;
  };
  protoOf(Locales).get_PT_kntoj7_k$ = function () {
    return this.PT_1;
  };
  var Locales_instance;
  function Locales_getInstance() {
    if (Locales_instance == null)
      new Locales();
    return Locales_instance;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function Tabs(profile, projects, skills, experience) {
    this.profile_1 = profile;
    this.projects_1 = projects;
    this.skills_1 = skills;
    this.experience_1 = experience;
    this.$stable_1 = 0;
  }
  protoOf(Tabs).get_profile_3uo4e8_k$ = function () {
    return this.profile_1;
  };
  protoOf(Tabs).get_projects_mpkrwj_k$ = function () {
    return this.projects_1;
  };
  protoOf(Tabs).get_skills_jilyrv_k$ = function () {
    return this.skills_1;
  };
  protoOf(Tabs).get_experience_ll72ml_k$ = function () {
    return this.experience_1;
  };
  protoOf(Tabs).component1_7eebsc_k$ = function () {
    return this.profile_1;
  };
  protoOf(Tabs).component2_7eebsb_k$ = function () {
    return this.projects_1;
  };
  protoOf(Tabs).component3_7eebsa_k$ = function () {
    return this.skills_1;
  };
  protoOf(Tabs).component4_7eebs9_k$ = function () {
    return this.experience_1;
  };
  protoOf(Tabs).copy_hmmiyd_k$ = function (profile, projects, skills, experience) {
    return new Tabs(profile, projects, skills, experience);
  };
  protoOf(Tabs).copy$default_ye9iz1_k$ = function (profile, projects, skills, experience, $super) {
    profile = profile === VOID ? this.profile_1 : profile;
    projects = projects === VOID ? this.projects_1 : projects;
    skills = skills === VOID ? this.skills_1 : skills;
    experience = experience === VOID ? this.experience_1 : experience;
    return $super === VOID ? this.copy_hmmiyd_k$(profile, projects, skills, experience) : $super.copy_hmmiyd_k$.call(this, profile, projects, skills, experience);
  };
  protoOf(Tabs).toString = function () {
    return 'Tabs(profile=' + this.profile_1 + ', projects=' + this.projects_1 + ', skills=' + this.skills_1 + ', experience=' + this.experience_1 + ')';
  };
  protoOf(Tabs).hashCode = function () {
    var result = getStringHashCode(this.profile_1);
    result = imul(result, 31) + getStringHashCode(this.projects_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.skills_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.experience_1) | 0;
    return result;
  };
  protoOf(Tabs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Tabs))
      return false;
    var tmp0_other_with_cast = other instanceof Tabs ? other : THROW_CCE();
    if (!(this.profile_1 === tmp0_other_with_cast.profile_1))
      return false;
    if (!(this.projects_1 === tmp0_other_with_cast.projects_1))
      return false;
    if (!(this.skills_1 === tmp0_other_with_cast.skills_1))
      return false;
    if (!(this.experience_1 === tmp0_other_with_cast.experience_1))
      return false;
    return true;
  };
  function get_$stableprop_3() {
    return 0;
  }
  function Strings(tabs) {
    this.tabs_1 = tabs;
    this.$stable_1 = 0;
  }
  protoOf(Strings).get_tabs_wousav_k$ = function () {
    return this.tabs_1;
  };
  protoOf(Strings).component1_7eebsc_k$ = function () {
    return this.tabs_1;
  };
  protoOf(Strings).copy_8dn4w9_k$ = function (tabs) {
    return new Strings(tabs);
  };
  protoOf(Strings).copy$default_u9ti6m_k$ = function (tabs, $super) {
    tabs = tabs === VOID ? this.tabs_1 : tabs;
    return $super === VOID ? this.copy_8dn4w9_k$(tabs) : $super.copy_8dn4w9_k$.call(this, tabs);
  };
  protoOf(Strings).toString = function () {
    return 'Strings(tabs=' + this.tabs_1 + ')';
  };
  protoOf(Strings).hashCode = function () {
    return this.tabs_1.hashCode();
  };
  protoOf(Strings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Strings))
      return false;
    var tmp0_other_with_cast = other instanceof Strings ? other : THROW_CCE();
    if (!this.tabs_1.equals(tmp0_other_with_cast.tabs_1))
      return false;
    return true;
  };
  function get_StringsEn() {
    _init_properties_StringsEn_kt__q3r5nd();
    return StringsEn;
  }
  var StringsEn;
  var properties_initialized_StringsEn_kt_lnxly3;
  function _init_properties_StringsEn_kt__q3r5nd() {
    if (!properties_initialized_StringsEn_kt_lnxly3) {
      properties_initialized_StringsEn_kt_lnxly3 = true;
      StringsEn = new Strings(new Tabs('Profile', 'Projects', 'Skills', 'Experience'));
    }
  }
  function get_StringsPt() {
    _init_properties_StringsPt_kt__vejrjo();
    return StringsPt;
  }
  var StringsPt;
  var properties_initialized_StringsPt_kt_lhs1hy;
  function _init_properties_StringsPt_kt__vejrjo() {
    if (!properties_initialized_StringsPt_kt_lhs1hy) {
      properties_initialized_StringsPt_kt_lhs1hy = true;
      StringsPt = new Strings(new Tabs('Perfil', 'Projetos', 'Habilidades', 'Experi\xEAncia'));
    }
  }
  function get_md_theme_light_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primary;
  }
  var md_theme_light_primary;
  function get_md_theme_light_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimary;
  }
  var md_theme_light_onPrimary;
  function get_md_theme_light_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primaryContainer;
  }
  var md_theme_light_primaryContainer;
  function get_md_theme_light_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimaryContainer;
  }
  var md_theme_light_onPrimaryContainer;
  function get_md_theme_light_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondary;
  }
  var md_theme_light_secondary;
  function get_md_theme_light_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondary;
  }
  var md_theme_light_onSecondary;
  function get_md_theme_light_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondaryContainer;
  }
  var md_theme_light_secondaryContainer;
  function get_md_theme_light_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondaryContainer;
  }
  var md_theme_light_onSecondaryContainer;
  function get_md_theme_light_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiary;
  }
  var md_theme_light_tertiary;
  function get_md_theme_light_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiary;
  }
  var md_theme_light_onTertiary;
  function get_md_theme_light_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiaryContainer;
  }
  var md_theme_light_tertiaryContainer;
  function get_md_theme_light_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiaryContainer;
  }
  var md_theme_light_onTertiaryContainer;
  function get_md_theme_light_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_error;
  }
  var md_theme_light_error;
  function get_md_theme_light_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_errorContainer;
  }
  var md_theme_light_errorContainer;
  function get_md_theme_light_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onError;
  }
  var md_theme_light_onError;
  function get_md_theme_light_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onErrorContainer;
  }
  var md_theme_light_onErrorContainer;
  function get_md_theme_light_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_background;
  }
  var md_theme_light_background;
  function get_md_theme_light_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onBackground;
  }
  var md_theme_light_onBackground;
  function get_md_theme_light_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surface;
  }
  var md_theme_light_surface;
  function get_md_theme_light_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurface;
  }
  var md_theme_light_onSurface;
  function get_md_theme_light_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceVariant;
  }
  var md_theme_light_surfaceVariant;
  function get_md_theme_light_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurfaceVariant;
  }
  var md_theme_light_onSurfaceVariant;
  function get_md_theme_light_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outline;
  }
  var md_theme_light_outline;
  function get_md_theme_light_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseOnSurface;
  }
  var md_theme_light_inverseOnSurface;
  function get_md_theme_light_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseSurface;
  }
  var md_theme_light_inverseSurface;
  function get_md_theme_light_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inversePrimary;
  }
  var md_theme_light_inversePrimary;
  function get_md_theme_light_shadow() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_shadow;
  }
  var md_theme_light_shadow;
  function get_md_theme_light_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceTint;
  }
  var md_theme_light_surfaceTint;
  function get_md_theme_light_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outlineVariant;
  }
  var md_theme_light_outlineVariant;
  function get_md_theme_light_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_scrim;
  }
  var md_theme_light_scrim;
  function get_md_theme_dark_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primary;
  }
  var md_theme_dark_primary;
  function get_md_theme_dark_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimary;
  }
  var md_theme_dark_onPrimary;
  function get_md_theme_dark_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primaryContainer;
  }
  var md_theme_dark_primaryContainer;
  function get_md_theme_dark_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimaryContainer;
  }
  var md_theme_dark_onPrimaryContainer;
  function get_md_theme_dark_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondary;
  }
  var md_theme_dark_secondary;
  function get_md_theme_dark_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondary;
  }
  var md_theme_dark_onSecondary;
  function get_md_theme_dark_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondaryContainer;
  }
  var md_theme_dark_secondaryContainer;
  function get_md_theme_dark_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondaryContainer;
  }
  var md_theme_dark_onSecondaryContainer;
  function get_md_theme_dark_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiary;
  }
  var md_theme_dark_tertiary;
  function get_md_theme_dark_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiary;
  }
  var md_theme_dark_onTertiary;
  function get_md_theme_dark_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiaryContainer;
  }
  var md_theme_dark_tertiaryContainer;
  function get_md_theme_dark_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiaryContainer;
  }
  var md_theme_dark_onTertiaryContainer;
  function get_md_theme_dark_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_error;
  }
  var md_theme_dark_error;
  function get_md_theme_dark_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_errorContainer;
  }
  var md_theme_dark_errorContainer;
  function get_md_theme_dark_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onError;
  }
  var md_theme_dark_onError;
  function get_md_theme_dark_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onErrorContainer;
  }
  var md_theme_dark_onErrorContainer;
  function get_md_theme_dark_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_background;
  }
  var md_theme_dark_background;
  function get_md_theme_dark_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onBackground;
  }
  var md_theme_dark_onBackground;
  function get_md_theme_dark_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surface;
  }
  var md_theme_dark_surface;
  function get_md_theme_dark_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurface;
  }
  var md_theme_dark_onSurface;
  function get_md_theme_dark_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceVariant;
  }
  var md_theme_dark_surfaceVariant;
  function get_md_theme_dark_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurfaceVariant;
  }
  var md_theme_dark_onSurfaceVariant;
  function get_md_theme_dark_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outline;
  }
  var md_theme_dark_outline;
  function get_md_theme_dark_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseOnSurface;
  }
  var md_theme_dark_inverseOnSurface;
  function get_md_theme_dark_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseSurface;
  }
  var md_theme_dark_inverseSurface;
  function get_md_theme_dark_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inversePrimary;
  }
  var md_theme_dark_inversePrimary;
  function get_md_theme_dark_shadow() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_shadow;
  }
  var md_theme_dark_shadow;
  function get_md_theme_dark_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceTint;
  }
  var md_theme_dark_surfaceTint;
  function get_md_theme_dark_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outlineVariant;
  }
  var md_theme_dark_outlineVariant;
  function get_md_theme_dark_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_scrim;
  }
  var md_theme_dark_scrim;
  function get_dark_background() {
    _init_properties_Color_kt__6h0l1r();
    return dark_background;
  }
  var dark_background;
  function get_dark_surface() {
    _init_properties_Color_kt__6h0l1r();
    return dark_surface;
  }
  var dark_surface;
  function get_dark_surface_tint() {
    _init_properties_Color_kt__6h0l1r();
    return dark_surface_tint;
  }
  var dark_surface_tint;
  function get_dark_on_tint() {
    _init_properties_Color_kt__6h0l1r();
    return dark_on_tint;
  }
  var dark_on_tint;
  function get_dark_secondary_container() {
    _init_properties_Color_kt__6h0l1r();
    return dark_secondary_container;
  }
  var dark_secondary_container;
  function get_dark_on_secondary_container() {
    _init_properties_Color_kt__6h0l1r();
    return dark_on_secondary_container;
  }
  var dark_on_secondary_container;
  function get_dark_surface_variant() {
    _init_properties_Color_kt__6h0l1r();
    return dark_surface_variant;
  }
  var dark_surface_variant;
  function get_seed() {
    _init_properties_Color_kt__6h0l1r();
    return seed;
  }
  var seed;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      md_theme_light_primary = Color(new Long(-16750470, 0));
      md_theme_light_onPrimary = Color(new Long(-1, 0));
      md_theme_light_primaryContainer = Color(new Long(-5509633, 0));
      md_theme_light_onPrimaryContainer = Color(new Long(-16769242, 0));
      md_theme_light_secondary = Color(new Long(-16750226, 0));
      md_theme_light_onSecondary = Color(new Long(-1, 0));
      md_theme_light_secondaryContainer = Color(new Long(-9439490, 0));
      md_theme_light_onSecondaryContainer = Color(new Long(-16768990, 0));
      md_theme_light_tertiary = Color(new Long(-7320320, 0));
      md_theme_light_onTertiary = Color(new Long(-1, 0));
      md_theme_light_tertiaryContainer = Color(new Long(-9022, 0));
      md_theme_light_onTertiaryContainer = Color(new Long(-13757184, 0));
      md_theme_light_error = Color(new Long(-4580838, 0));
      md_theme_light_errorContainer = Color(new Long(-9514, 0));
      md_theme_light_onError = Color(new Long(-1, 0));
      md_theme_light_onErrorContainer = Color(new Long(-12517374, 0));
      md_theme_light_background = Color(new Long(-1025, 0));
      md_theme_light_onBackground = Color(new Long(-14542080, 0));
      md_theme_light_surface = Color(new Long(-1025, 0));
      md_theme_light_onSurface = Color(new Long(-14542080, 0));
      md_theme_light_surfaceVariant = Color(new Long(-2366233, 0));
      md_theme_light_onSurfaceVariant = Color(new Long(-12629941, 0));
      md_theme_light_outline = Color(new Long(-9406085, 0));
      md_theme_light_inverseOnSurface = Color(new Long(-3904, 0));
      md_theme_light_inverseSurface = Color(new Long(-12963840, 0));
      md_theme_light_inversePrimary = Color(new Long(-11151628, 0));
      md_theme_light_shadow = Color(new Long(-16777216, 0));
      md_theme_light_surfaceTint = Color(new Long(-16750470, 0));
      md_theme_light_outlineVariant = Color(new Long(-4208437, 0));
      md_theme_light_scrim = Color(new Long(-16777216, 0));
      md_theme_dark_primary = Color(new Long(-11151628, 0));
      md_theme_dark_onPrimary = Color(new Long(-16763328, 0));
      md_theme_dark_primaryContainer = Color(new Long(-16757156, 0));
      md_theme_dark_onPrimaryContainer = Color(new Long(-5509633, 0));
      md_theme_dark_secondary = Color(new Long(-11740702, 0));
      md_theme_dark_onSecondary = Color(new Long(-16763078, 0));
      md_theme_dark_secondaryContainer = Color(new Long(-16756909, 0));
      md_theme_dark_onSecondaryContainer = Color(new Long(-9439490, 0));
      md_theme_dark_tertiary = Color(new Long(-18564, 0));
      md_theme_dark_onTertiary = Color(new Long(-11720960, 0));
      md_theme_dark_tertiaryContainer = Color(new Long(-9619200, 0));
      md_theme_dark_onTertiaryContainer = Color(new Long(-9022, 0));
      md_theme_dark_error = Color(new Long(-19285, 0));
      md_theme_dark_errorContainer = Color(new Long(-7143414, 0));
      md_theme_dark_onError = Color(new Long(-9895931, 0));
      md_theme_dark_onErrorContainer = Color(new Long(-9514, 0));
      md_theme_dark_background = Color(new Long(-14542080, 0));
      md_theme_dark_onBackground = Color(new Long(-7580, 0));
      md_theme_dark_surface = Color(new Long(-14542080, 0));
      md_theme_dark_onSurface = Color(new Long(-7580, 0));
      md_theme_dark_surfaceVariant = Color(new Long(-12629941, 0));
      md_theme_dark_onSurfaceVariant = Color(new Long(-4208437, 0));
      md_theme_dark_outline = Color(new Long(-7761259, 0));
      md_theme_dark_inverseOnSurface = Color(new Long(-14542080, 0));
      md_theme_dark_inverseSurface = Color(new Long(-7580, 0));
      md_theme_dark_inversePrimary = Color(new Long(-16750470, 0));
      md_theme_dark_shadow = Color(new Long(-16777216, 0));
      md_theme_dark_surfaceTint = Color(new Long(-11151628, 0));
      md_theme_dark_outlineVariant = Color(new Long(-12629941, 0));
      md_theme_dark_scrim = Color(new Long(-16777216, 0));
      dark_background = Color_0(37, 35, 49);
      dark_surface = Color_0(30, 28, 38);
      dark_surface_tint = Color_0(30, 28, 38);
      dark_on_tint = Color_0(105, 108, 135);
      dark_secondary_container = Color_0(105, 108, 135);
      dark_on_secondary_container = Color_0(255, 255, 255);
      dark_surface_variant = Color_0(52, 49, 68);
      seed = Color_1(2897465);
    }
  }
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_AppShapes() {
    _init_properties_Theme_kt__w31tqv();
    return AppShapes;
  }
  var AppShapes;
  function get_AppTypography() {
    _init_properties_Theme_kt__w31tqv();
    return AppTypography;
  }
  var AppTypography;
  function get_LocalThemeIsDark() {
    _init_properties_Theme_kt__w31tqv();
    return LocalThemeIsDark;
  }
  var LocalThemeIsDark;
  function AppTheme(content) {
    _init_properties_Theme_kt__w31tqv();
    illegalDecoyCallException('AppTheme');
  }
  function AppTheme$composable(content, $composer, $changed) {
    _init_properties_Theme_kt__w31tqv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1885192762);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1885192762, $dirty, -1, 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable (Theme.kt:109)');
      }
      var systemIsDark = isSystemInDarkTheme$composable($composer_0, 0);
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
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>' call
        var value = mutableStateOf(systemIsDark);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var isDarkState = tmp0;
      var tmp_1 = [get_LocalThemeIsDark().provides_3agxel_k$(isDarkState)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -976068504, true, AppTheme$composable$lambda(isDarkState, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppTheme$composable$lambda_0(content, $changed));
    }
  }
  function AppTheme$composable$_anonymous_$_anonymous_$lambda$0_6mj9uk($isDark$delegate) {
    _init_properties_Theme_kt__w31tqv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isDark', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $isDark$delegate.get_value_j01efc_k$();
  }
  function LocalThemeIsDark$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return mutableStateOf(true);
  }
  function AppTheme$composable$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-706126276, $changed, -1, 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>.<anonymous> (Theme.kt:122)');
        }
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
        Surface$composable(null, null, tmp_0, tmp_1, tmp_2, tmp_3, null, $content, $composer_0, 0, 127);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppTheme$composable$lambda($isDarkState, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-976068504, $changed, -1, 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous> (Theme.kt:115)');
        }
        var isDark$delegate = $isDarkState;
        SystemAppearance$composable(!AppTheme$composable$_anonymous_$_anonymous_$lambda$0_6mj9uk(isDark$delegate), $composer_0, 0);
        var tmp0_colorScheme = AppTheme$composable$_anonymous_$_anonymous_$lambda$0_6mj9uk(isDark$delegate) ? get_DarkColorScheme() : get_LightColorScheme();
        var tmp1_typography = get_AppTypography();
        var tmp2_shapes = get_AppShapes();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -706126276, true, AppTheme$composable$lambda$lambda($content));
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
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.resource.theme.AppTheme$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        MaterialTheme$composable(tmp0_colorScheme, tmp2_shapes, tmp1_typography, tmp0, $composer_0, 3504, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppTheme$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppTheme$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp0_primary = get_md_theme_light_primary();
      var tmp1_onPrimary = get_md_theme_light_onPrimary();
      var tmp2_primaryContainer = get_md_theme_light_primaryContainer();
      var tmp3_onPrimaryContainer = get_md_theme_light_onPrimaryContainer();
      var tmp4_secondary = get_md_theme_light_secondary();
      var tmp5_onSecondary = get_md_theme_light_onSecondary();
      var tmp6_secondaryContainer = get_md_theme_light_secondaryContainer();
      var tmp7_onSecondaryContainer = get_md_theme_light_onSecondaryContainer();
      var tmp8_tertiary = get_md_theme_light_tertiary();
      var tmp9_onTertiary = get_md_theme_light_onTertiary();
      var tmp10_tertiaryContainer = get_md_theme_light_tertiaryContainer();
      var tmp11_onTertiaryContainer = get_md_theme_light_onTertiaryContainer();
      var tmp12_error = get_md_theme_light_error();
      var tmp13_errorContainer = get_md_theme_light_errorContainer();
      var tmp14_onError = get_md_theme_light_onError();
      var tmp15_onErrorContainer = get_md_theme_light_onErrorContainer();
      var tmp16_background = get_md_theme_light_background();
      var tmp17_onBackground = get_md_theme_light_onBackground();
      var tmp18_surface = get_md_theme_light_surface();
      var tmp19_onSurface = get_md_theme_light_onSurface();
      var tmp20_surfaceVariant = get_md_theme_light_surfaceVariant();
      var tmp21_onSurfaceVariant = get_md_theme_light_onSurfaceVariant();
      var tmp22_outline = get_md_theme_light_outline();
      var tmp23_inverseOnSurface = get_md_theme_light_inverseOnSurface();
      var tmp24_inverseSurface = get_md_theme_light_inverseSurface();
      var tmp25_inversePrimary = get_md_theme_light_inversePrimary();
      var tmp26_surfaceTint = get_md_theme_light_surfaceTint();
      var tmp27_outlineVariant = get_md_theme_light_outlineVariant();
      var tmp28_scrim = get_md_theme_light_scrim();
      LightColorScheme = lightColorScheme(tmp0_primary, tmp1_onPrimary, tmp2_primaryContainer, tmp3_onPrimaryContainer, tmp25_inversePrimary, tmp4_secondary, tmp5_onSecondary, tmp6_secondaryContainer, tmp7_onSecondaryContainer, tmp8_tertiary, tmp9_onTertiary, tmp10_tertiaryContainer, tmp11_onTertiaryContainer, tmp16_background, tmp17_onBackground, tmp18_surface, tmp19_onSurface, tmp20_surfaceVariant, tmp21_onSurfaceVariant, tmp26_surfaceTint, tmp24_inverseSurface, tmp23_inverseOnSurface, tmp12_error, tmp14_onError, tmp13_errorContainer, tmp15_onErrorContainer, tmp22_outline, tmp27_outlineVariant, tmp28_scrim);
      var tmp0_primary_0 = get_md_theme_dark_primary();
      var tmp1_onPrimary_0 = get_md_theme_dark_onPrimary();
      var tmp2_primaryContainer_0 = get_md_theme_dark_primaryContainer();
      var tmp3_onPrimaryContainer_0 = get_md_theme_dark_onPrimaryContainer();
      var tmp4_secondary_0 = get_md_theme_dark_secondary();
      var tmp5_onSecondary_0 = get_md_theme_dark_onSecondary();
      var tmp6_secondaryContainer_0 = get_dark_secondary_container();
      var tmp7_onSecondaryContainer_0 = get_dark_on_secondary_container();
      var tmp8_tertiary_0 = get_md_theme_dark_tertiary();
      var tmp9_onTertiary_0 = get_md_theme_dark_onTertiary();
      var tmp10_tertiaryContainer_0 = get_md_theme_dark_tertiaryContainer();
      var tmp11_onTertiaryContainer_0 = get_md_theme_dark_onTertiaryContainer();
      var tmp12_error_0 = get_md_theme_dark_error();
      var tmp13_errorContainer_0 = get_md_theme_dark_errorContainer();
      var tmp14_onError_0 = get_md_theme_dark_onError();
      var tmp15_onErrorContainer_0 = get_md_theme_dark_onErrorContainer();
      var tmp16_background_0 = get_dark_background();
      var tmp17_onBackground_0 = get_dark_on_tint();
      var tmp18_surface_0 = get_dark_surface();
      var tmp19_onSurface_0 = get_dark_on_secondary_container();
      var tmp20_surfaceVariant_0 = get_dark_surface_variant();
      var tmp21_onSurfaceVariant_0 = get_md_theme_dark_onSurfaceVariant();
      var tmp22_outline_0 = get_md_theme_dark_outline();
      var tmp23_inverseOnSurface_0 = get_md_theme_dark_inverseOnSurface();
      var tmp24_inverseSurface_0 = get_dark_on_tint();
      var tmp25_inversePrimary_0 = get_md_theme_dark_inversePrimary();
      var tmp26_surfaceTint_0 = get_dark_surface_tint();
      var tmp27_outlineVariant_0 = get_md_theme_dark_outlineVariant();
      var tmp28_scrim_0 = get_md_theme_dark_scrim();
      DarkColorScheme = darkColorScheme(tmp0_primary_0, tmp1_onPrimary_0, tmp2_primaryContainer_0, tmp3_onPrimaryContainer_0, tmp25_inversePrimary_0, tmp4_secondary_0, tmp5_onSecondary_0, tmp6_secondaryContainer_0, tmp7_onSecondaryContainer_0, tmp8_tertiary_0, tmp9_onTertiary_0, tmp10_tertiaryContainer_0, tmp11_onTertiaryContainer_0, tmp16_background_0, tmp17_onBackground_0, tmp18_surface_0, tmp19_onSurface_0, tmp20_surfaceVariant_0, tmp21_onSurfaceVariant_0, tmp26_surfaceTint_0, tmp24_inverseSurface_0, tmp23_inverseOnSurface_0, tmp12_error_0, tmp14_onError_0, tmp13_errorContainer_0, tmp15_onErrorContainer_0, tmp22_outline_0, tmp27_outlineVariant_0, tmp28_scrim_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      var tmp = RoundedCornerShape_0(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_0 = RoundedCornerShape_0(tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp_1 = RoundedCornerShape_0(tmp$ret$2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(16);
      var tmp_2 = RoundedCornerShape_0(tmp$ret$3);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(32);
      AppShapes = new Shapes(tmp, tmp_0, tmp_1, tmp_2, RoundedCornerShape_0(tmp$ret$4));
      var tmp0_fontFamily = Companion_getInstance_5().get_Default_goqax4_k$();
      var tmp1_fontWeight = Companion_getInstance_6().get_Medium_1fiba6_k$();
      var tmp2_fontSize = get_sp(16);
      AppTypography = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily));
      LocalThemeIsDark = compositionLocalOf(VOID, LocalThemeIsDark$lambda);
    }
  }
  function SocialButton(socialOption) {
    illegalDecoyCallException('SocialButton');
  }
  function SocialButton$composable(socialOption, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1539333424);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(socialOption) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1539333424, $dirty, -1, 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable (SocialButton.kt:28)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
      var tmp_0 = padding_1(tmp, tmp$ret$0);
      $composer_0.startReplaceableGroup_ip860b_k$(510559628);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(socialOption);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable.<anonymous>' call
        var value = SocialButton$composable$lambda(socialOption);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var modifier = clickable(tmp_0, VOID, VOID, VOID, tmpCache);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 0 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp_3 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_4;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_4 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Row$composable' call
      var tmp_5 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$7 = _Dp___init__impl__ms3zkb(10);
      var modifier_2 = padding_1(tmp_5, tmp$ret$7);
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_ip860b_k$(-636825856);
      sourceInformation($composer_6, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_2 = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((6 & 4) === 0))
        verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_6, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_3 = modifier_2;
      var $changed_2 = 112 & 6 << 3;
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      $composer_7.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_1();
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_0 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate_0 = materializerOf(modifier_4);
      var $changed_3 = 6 | 7168 & $changed_2 << 9;
      var $composer_8 = $composer_7;
      var tmp_6 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      var tmp_7;
      if ($this$with_0.get_inserting_25mlsw_k$() ? true : !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        tmp_7 = Unit_getInstance();
      }
      skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_3 >> 3);
      $composer_8.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable.<anonymous>.<anonymous>' call
      RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp_8 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(10);
      var modifier_5 = background(padding_0(tmp_8, VOID, VOID, tmp$ret$10), Companion_getInstance_7().get_Black_t4k9fh_k$(), get_CircleShape());
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_11 = $composer_10;
      $composer_11.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_11, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy_1 = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_6 = modifier_5;
      var $changed_4 = 112 & 0 << 3;
      var modifier_7 = modifier_6;
      var $composer_12 = $composer_11;
      $composer_12.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_12, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_7 = Companion_getInstance_1();
      var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_12, 0);
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_1 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate_1 = materializerOf(modifier_7);
      var $changed_5 = 6 | 7168 & $changed_4 << 9;
      var $composer_13 = $composer_12;
      var tmp_9 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(factory_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
      var tmp_10;
      if ($this$with_1.get_inserting_25mlsw_k$() ? true : !equals($this$with_1.rememberedValue_4dg93v_k$(), compositeKeyHash_1)) {
        $this$with_1.updateRememberedValue_l1wh71_k$(compositeKeyHash_1);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).apply_pk82p8_k$(compositeKeyHash_1, block_1);
        tmp_10 = Unit_getInstance();
      }
      skippableUpdate_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & $changed_5 >> 3);
      $composer_13.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable.<anonymous>.<anonymous>.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      var tmp_11 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(10);
      var tmp0_modifier = padding_1(tmp_11, tmp$ret$13);
      var tmp1_imageVector = socialOption.get_icon_wont8i_k$();
      var tmp2_contentDescription = socialOption.get_title_iz32un_k$() + ' icon';
      var tmp3_tint = Companion_getInstance_7().get_White_xpp3qf_k$();
      Icon$composable_0(tmp1_imageVector, tmp2_contentDescription, tmp0_modifier, tmp3_tint, $composer_15, 3456, 0);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.endReplaceableGroup_ern0ak_k$();
      $composer_13.endNode_3m0yfn_k$();
      $composer_12.endReplaceableGroup_ern0ak_k$();
      $composer_11.endReplaceableGroup_ern0ak_k$();
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier_8 = null;
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_16 = $composer_10;
      $composer_16.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_16, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier_8 = Companion_getInstance_1();
      if (!((7 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((7 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy$composable(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_9 = modifier_8;
      var $changed_6 = 112 & 0 << 3;
      var modifier_10 = modifier_9;
      var $composer_17 = $composer_16;
      $composer_17.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_17, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_1();
      var compositeKeyHash_2 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_17, 0);
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_2 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate_2 = materializerOf(modifier_10);
      var $changed_7 = 6 | 7168 & $changed_6 << 9;
      var $composer_18 = $composer_17;
      var tmp_12 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_12, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(factory_2);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_2 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
      var tmp_13;
      if ($this$with_2.get_inserting_25mlsw_k$() ? true : !equals($this$with_2.rememberedValue_4dg93v_k$(), compositeKeyHash_2)) {
        $this$with_2.updateRememberedValue_l1wh71_k$(compositeKeyHash_2);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).apply_pk82p8_k$(compositeKeyHash_2, block_2);
        tmp_13 = Unit_getInstance();
      }
      skippableUpdate_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_18)), $composer_18, 112 & $changed_7 >> 3);
      $composer_18.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_19 = $composer_18;
      sourceInformationMarkerStart($composer_19, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton$composable.<anonymous>.<anonymous>.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      var tmp_14 = socialOption.get_title_iz32un_k$();
      var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = Companion_getInstance_8().get_Center_fp5t1o_k$();
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_20 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_14, null, tmp_15, tmp_16, null, null, null, tmp_17, null, tmp_18, tmp_19, tmp_20, false, 0, 0, null, null, $composer_20, 0, 0, 130558);
      var tmp_21 = socialOption.get_subtitle_55eoyp_k$();
      var tmp_22 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = Companion_getInstance_8().get_Center_fp5t1o_k$();
      var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_27 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp_21, null, tmp_22, tmp_23, null, null, null, tmp_24, null, tmp_25, tmp_26, tmp_27, false, 0, 0, null, null, $composer_20, 0, 0, 130558);
      sourceInformationMarkerEnd($composer_19);
      $composer_18.endReplaceableGroup_ern0ak_k$();
      $composer_18.endNode_3m0yfn_k$();
      $composer_17.endReplaceableGroup_ern0ak_k$();
      $composer_16.endReplaceableGroup_ern0ak_k$();
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endReplaceableGroup_ern0ak_k$();
      $composer_8.endNode_3m0yfn_k$();
      $composer_7.endReplaceableGroup_ern0ak_k$();
      $composer_6.endReplaceableGroup_ern0ak_k$();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SocialButton$composable$lambda_0(socialOption, $changed));
    }
  }
  function SocialButton$composable$lambda($socialOption) {
    return function () {
      openUrl($socialOption.get_onClick_l3c0lc_k$());
      return Unit_getInstance();
    };
  }
  function SocialButton$composable$lambda_0($socialOption, $$changed) {
    return function ($composer, $force) {
      SocialButton$composable($socialOption, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_$stableprop_4() {
    return 0;
  }
  function CircleParameters(radius, backgroundColor, stroke, icon) {
    stroke = stroke === VOID ? null : stroke;
    icon = icon === VOID ? null : icon;
    this.radius_1 = radius;
    this.backgroundColor_1 = backgroundColor;
    this.stroke_1 = stroke;
    this.icon_1 = icon;
    this.$stable_1 = 0;
  }
  protoOf(CircleParameters).get_radius_lj3jlk_k$ = function () {
    return this.radius_1;
  };
  protoOf(CircleParameters).get_backgroundColor_41xwlp_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(CircleParameters).get_stroke_jnpx6p_k$ = function () {
    return this.stroke_1;
  };
  protoOf(CircleParameters).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(CircleParameters).component1_k79ve9_k$ = function () {
    return this.radius_1;
  };
  protoOf(CircleParameters).component2_ekm1j8_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(CircleParameters).component3_7eebsa_k$ = function () {
    return this.stroke_1;
  };
  protoOf(CircleParameters).component4_7eebs9_k$ = function () {
    return this.icon_1;
  };
  protoOf(CircleParameters).copy_vvsylv_k$ = function (radius, backgroundColor, stroke, icon) {
    return new CircleParameters(radius, backgroundColor, stroke, icon);
  };
  protoOf(CircleParameters).copy$default_qu58rx_k$ = function (radius, backgroundColor, stroke, icon, $super) {
    radius = radius === VOID ? this.radius_1 : radius;
    backgroundColor = backgroundColor === VOID ? this.backgroundColor_1 : backgroundColor;
    stroke = stroke === VOID ? this.stroke_1 : stroke;
    icon = icon === VOID ? this.icon_1 : icon;
    return $super === VOID ? this.copy_vvsylv_k$(radius, backgroundColor, stroke, icon) : $super.copy_vvsylv_k$.call(this, new Dp(radius), new Color_2(backgroundColor), stroke, icon);
  };
  protoOf(CircleParameters).toString = function () {
    return 'CircleParameters(radius=' + new Dp(this.radius_1) + ', backgroundColor=' + new Color_2(this.backgroundColor_1) + ', stroke=' + this.stroke_1 + ', icon=' + this.icon_1 + ')';
  };
  protoOf(CircleParameters).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.radius_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.backgroundColor_1) | 0;
    result = imul(result, 31) + (this.stroke_1 == null ? 0 : this.stroke_1.hashCode()) | 0;
    result = imul(result, 31) + (this.icon_1 == null ? 0 : this.icon_1.hashCode()) | 0;
    return result;
  };
  protoOf(CircleParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CircleParameters))
      return false;
    var tmp0_other_with_cast = other instanceof CircleParameters ? other : THROW_CCE();
    if (!equals(this.radius_1, tmp0_other_with_cast.radius_1))
      return false;
    if (!equals(this.backgroundColor_1, tmp0_other_with_cast.backgroundColor_1))
      return false;
    if (!equals(this.stroke_1, tmp0_other_with_cast.stroke_1))
      return false;
    if (!equals(this.icon_1, tmp0_other_with_cast.icon_1))
      return false;
    return true;
  };
  function _get_defaultCircleRadius__c4t66m($this) {
    return $this.defaultCircleRadius_1;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function CircleParametersDefaults() {
    CircleParametersDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.defaultCircleRadius_1 = _Dp___init__impl__ms3zkb(12);
    this.$stable_1 = 0;
  }
  protoOf(CircleParametersDefaults).circleParameters_q4kvle_k$ = function (radius, backgroundColor, stroke, icon) {
    return new CircleParameters(radius, backgroundColor, stroke, icon);
  };
  protoOf(CircleParametersDefaults).circleParameters$default_evv5xc_k$ = function (radius, backgroundColor, stroke, icon, $super) {
    radius = radius === VOID ? this.defaultCircleRadius_1 : radius;
    backgroundColor = backgroundColor === VOID ? Companion_getInstance_7().get_Cyan_3r2wtp_k$() : backgroundColor;
    stroke = stroke === VOID ? null : stroke;
    icon = icon === VOID ? null : icon;
    return $super === VOID ? this.circleParameters_q4kvle_k$(radius, backgroundColor, stroke, icon) : $super.circleParameters_q4kvle_k$.call(this, new Dp(radius), new Color_2(backgroundColor), stroke, icon);
  };
  var CircleParametersDefaults_instance;
  function CircleParametersDefaults_getInstance() {
    if (CircleParametersDefaults_instance == null)
      new CircleParametersDefaults();
    return CircleParametersDefaults_instance;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function LineParameters(strokeWidth, brush) {
    this.strokeWidth_1 = strokeWidth;
    this.brush_1 = brush;
    this.$stable_1 = 0;
  }
  protoOf(LineParameters).get_strokeWidth_j9wvvm_k$ = function () {
    return this.strokeWidth_1;
  };
  protoOf(LineParameters).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(LineParameters).component1_k79ve9_k$ = function () {
    return this.strokeWidth_1;
  };
  protoOf(LineParameters).component2_7eebsb_k$ = function () {
    return this.brush_1;
  };
  protoOf(LineParameters).copy_cj936g_k$ = function (strokeWidth, brush) {
    return new LineParameters(strokeWidth, brush);
  };
  protoOf(LineParameters).copy$default_401qkm_k$ = function (strokeWidth, brush, $super) {
    strokeWidth = strokeWidth === VOID ? this.strokeWidth_1 : strokeWidth;
    brush = brush === VOID ? this.brush_1 : brush;
    return $super === VOID ? this.copy_cj936g_k$(strokeWidth, brush) : $super.copy_cj936g_k$.call(this, new Dp(strokeWidth), brush);
  };
  protoOf(LineParameters).toString = function () {
    return 'LineParameters(strokeWidth=' + new Dp(this.strokeWidth_1) + ', brush=' + this.brush_1 + ')';
  };
  protoOf(LineParameters).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.strokeWidth_1);
    result = imul(result, 31) + hashCode(this.brush_1) | 0;
    return result;
  };
  protoOf(LineParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineParameters))
      return false;
    var tmp0_other_with_cast = other instanceof LineParameters ? other : THROW_CCE();
    if (!equals(this.strokeWidth_1, tmp0_other_with_cast.strokeWidth_1))
      return false;
    if (!equals(this.brush_1, tmp0_other_with_cast.brush_1))
      return false;
    return true;
  };
  function _get_defaultLinearGradient__xbd3et($this) {
    return $this.defaultLinearGradient_1;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function LineParametersDefaults() {
    LineParametersDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.defaultLinearGradient_1 = _Dp___init__impl__ms3zkb(3);
    this.$stable_1 = 0;
  }
  protoOf(LineParametersDefaults).linearGradient_dee5ok_k$ = function (strokeWidth, startColor, endColor, startY, endY) {
    var brush = Companion_getInstance_9().verticalGradient$default_wik409_k$(listOf([new Color_2(startColor), new Color_2(endColor)]), startY, endY);
    return new LineParameters(strokeWidth, brush);
  };
  protoOf(LineParametersDefaults).linearGradient$default_90bq63_k$ = function (strokeWidth, startColor, endColor, startY, endY, $super) {
    strokeWidth = strokeWidth === VOID ? this.defaultLinearGradient_1 : strokeWidth;
    startY = startY === VOID ? 0.0 : startY;
    endY = endY === VOID ? FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() : endY;
    return $super === VOID ? this.linearGradient_dee5ok_k$(strokeWidth, startColor, endColor, startY, endY) : $super.linearGradient_dee5ok_k$.call(this, new Dp(strokeWidth), new Color_2(startColor), new Color_2(endColor), startY, endY);
  };
  var LineParametersDefaults_instance;
  function LineParametersDefaults_getInstance() {
    if (LineParametersDefaults_instance == null)
      new LineParametersDefaults();
    return LineParametersDefaults_instance;
  }
  function MessageBubble(proccessStage, modifier) {
    illegalDecoyCallException('MessageBubble');
  }
  function getBackgroundColor(proccessStage) {
    illegalDecoyCallException('getBackgroundColor');
  }
  function getTextColor(proccessStage) {
    illegalDecoyCallException('getTextColor');
  }
  function getFontWeight(proccessStage) {
    illegalDecoyCallException('getFontWeight');
  }
  function getTextStyle(proccessStage) {
    illegalDecoyCallException('getTextStyle');
  }
  function MessageBubble$composable(proccessStage, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1555011720);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(proccessStage) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1555011720, $dirty, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable (MessageBubble.kt:25)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_1 = fillMaxWidth(wrapContentHeight(modifier_0._v));
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $changed_0 = 112 & 0 << 3;
      var modifier_3 = modifier_2;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_3);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_0 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = fillMaxWidth(Companion_getInstance_1());
      var tmp_2 = CardDefaults_getInstance();
      var tmp_3 = getBackgroundColor$composable(proccessStage, $composer_5, 14 & $dirty);
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = tmp_2.cardColors$composable_5rpuf0_k$(tmp_3, tmp_4, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_5, 24576, 14);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable.<anonymous>.<anonymous>' call
      var tmp_7 = $composer_5;
      var dispatchReceiver = composableLambda(tmp_7, 1680075666, true, MessageBubble$composable$lambda(proccessStage));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_6.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_6.updateRememberedValue_l1wh71_k$(value);
        tmp_8 = value;
      } else {
        tmp_8 = it;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_6.endReplaceableGroup_ern0ak_k$();
      Card$composable(tmp_1, null, tmp_6, null, null, tmp0, $composer_5, 196614, 26);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MessageBubble$composable$lambda_0(proccessStage, modifier_0, $changed, $default));
    }
  }
  function getBackgroundColor$composable(proccessStage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1423624283);
    if (isTraceInProgress()) {
      traceEventStart(-1423624283, $changed, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.getBackgroundColor$composable (MessageBubble.kt:88)');
    }
    var tmp;
    switch (proccessStage.get_status_jnf6d7_k$().get_ordinal_ip24qg_k$()) {
      case 2:
        $composer_0.startReplaceableGroup_ip860b_k$(192266762);
        var tmp1_group = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_surface_ya87t7_k$(), 0.3);
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp1_group;
        break;
      case 1:
        $composer_0.startReplaceableGroup_ip860b_k$(192266851);
        var tmp2_group = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_tertiary_1tbb2a_k$(), 0.3);
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp2_group;
        break;
      default:
        $composer_0.startReplaceableGroup_ip860b_k$(192266908);
        var tmp3_group = MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_surfaceVariant_jeodjc_k$();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp3_group;
        break;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function getTextColor$composable(proccessStage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(559885732);
    if (isTraceInProgress()) {
      traceEventStart(559885732, $changed, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.getTextColor$composable (MessageBubble.kt:96)');
    }
    var tmp;
    if (proccessStage.get_status_jnf6d7_k$().equals(ProccessStageStatus_UPCOMING_getInstance())) {
      $composer_0.startReplaceableGroup_ip860b_k$(1642862034);
      var tmp1_group = Color__copy$default_impl_ectz3s(MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_onSurfaceVariant_3w3xj_k$(), 0.63);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(1642862118);
      var tmp2_group = MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_onSurfaceVariant_3w3xj_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function getFontWeight$composable(proccessStage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1887411161);
    if (isTraceInProgress()) {
      traceEventStart(-1887411161, $changed, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.getFontWeight$composable (MessageBubble.kt:104)');
    }
    var tmp;
    if (proccessStage.get_status_jnf6d7_k$().equals(ProccessStageStatus_CURRENT_getInstance())) {
      tmp = Companion_getInstance_6().get_W500_wobbt3_k$();
    } else {
      tmp = Companion_getInstance_6().get_W400_wobb2e_k$();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function getTextStyle$composable(proccessStage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(429195881);
    if (isTraceInProgress()) {
      traceEventStart(429195881, $changed, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.getTextStyle$composable (MessageBubble.kt:112)');
    }
    var tmp;
    if (proccessStage.get_status_jnf6d7_k$().equals(ProccessStageStatus_CURRENT_getInstance())) {
      $composer_0.startReplaceableGroup_ip860b_k$(-1572405019);
      var tmp1_group = MaterialTheme_getInstance().$get_typography$$composable_99iyci_k$($composer_0, 6).get_bodyLarge_sxra4w_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(-1572404963);
      var tmp2_group = MaterialTheme_getInstance().$get_typography$$composable_99iyci_k$($composer_0, 6).get_bodyMedium_psz2kg_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function MessageBubble$composable$lambda($proccessStage) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1680075666, $changed, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable.<anonymous>.<anonymous> (MessageBubble.kt:36)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp_0 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(12);
        var modifier = padding_1(tmp_0, tmp$ret$0);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 6 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_getInstance_1();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_2;
        if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
          tmp_2 = Unit_getInstance();
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        $composer_5.startReplaceableGroup_ip860b_k$(-1530285177);
        if ($proccessStage.get_isCourse_rz014e_k$()) {
          var tmp_3 = fillMaxWidth(Companion_getInstance_1());
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$3 = _Dp___init__impl__ms3zkb(7);
          var tmp0_modifier = padding_0(tmp_3, VOID, tmp$ret$3);
          var tmp1_textAlign = Companion_getInstance_8().get_Start_ovf7qx_k$();
          var tmp2_fontWeight = Companion_getInstance_6().get_W600_wobcjs_k$();
          var tmp3_fontSize = get_sp(12);
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_7 = _TextOverflow___init__impl__obguoe(0);
          Text$composable('Curso', tmp0_modifier, tmp_4, tmp3_fontSize, null, tmp2_fontWeight, null, tmp_5, null, tmp1_textAlign, tmp_6, tmp_7, false, 0, 0, null, null, $composer_5, 199734, 0, 130516);
        }
        $composer_5.endReplaceableGroup_ern0ak_k$();
        var tmp_8 = wrapContentHeight(fillMaxWidth(Companion_getInstance_1()));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(2);
        var tmp4_modifier = padding_0(tmp_8, VOID, VOID, VOID, tmp$ret$4);
        var tmp5_text = $proccessStage.get_title_iz32un_k$();
        var tmp6_style = getTextStyle$composable($proccessStage, $composer_5, 0);
        var tmp7_fontWeight = Companion_getInstance_6().get_W600_wobcjs_k$();
        var tmp8_color = getTextColor$composable($proccessStage, $composer_5, 0);
        var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_12 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp5_text, tmp4_modifier, tmp8_color, tmp_9, null, tmp7_fontWeight, null, tmp_10, null, null, tmp_11, tmp_12, false, 0, 0, null, tmp6_style, $composer_5, 196656, 0, 65496);
        var tmp9_safe_receiver = $proccessStage.get_subtitle_55eoyp_k$();
        $composer_5.startReplaceableGroup_ip860b_k$(-1530284372);
        var tmp_13;
        if (tmp9_safe_receiver == null) {
          tmp_13 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_14 = wrapContentHeight(fillMaxWidth(Companion_getInstance_1()));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$5 = _Dp___init__impl__ms3zkb(2);
          var tmp0_modifier_0 = padding_0(tmp_14, VOID, tmp$ret$5);
          var tmp1_style = getTextStyle$composable($proccessStage, $composer_5, 0);
          var tmp2_fontWeight_0 = Companion_getInstance_6().get_W400_wobb2e_k$();
          var tmp3_color = getTextColor$composable($proccessStage, $composer_5, 0);
          var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_18 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp9_safe_receiver, tmp0_modifier_0, tmp3_color, tmp_15, null, tmp2_fontWeight_0, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, tmp1_style, $composer_5, 196656, 0, 65496);
          tmp_13 = Unit_getInstance();
        }
        $composer_5.endReplaceableGroup_ern0ak_k$();
        var tmp10_safe_receiver = $proccessStage.get_intervalDate_lfdqqs_k$();
        $composer_5.startReplaceableGroup_ip860b_k$(756879891);
        var tmp_19;
        if (tmp10_safe_receiver == null) {
          tmp_19 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_20 = fillMaxWidth(Companion_getInstance_1());
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$7 = _Dp___init__impl__ms3zkb(7);
          var tmp0_modifier_1 = padding_0(tmp_20, VOID, tmp$ret$7);
          var tmp1_textAlign_0 = Companion_getInstance_8().get_End_ck95sw_k$();
          var tmp2_fontWeight_1 = Companion_getInstance_6().get_W600_wobcjs_k$();
          var tmp3_fontSize_0 = get_sp(12);
          var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_24 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp10_safe_receiver, tmp0_modifier_1, tmp_21, tmp3_fontSize_0, null, tmp2_fontWeight_1, null, tmp_22, null, tmp1_textAlign_0, tmp_23, tmp_24, false, 0, 0, null, null, $composer_5, 199728, 0, 130516);
          tmp_19 = Unit_getInstance();
        }
        $composer_5.endReplaceableGroup_ern0ak_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_ern0ak_k$();
        $composer_3.endNode_3m0yfn_k$();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_25;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_25 = Unit_getInstance();
        }
        tmp = tmp_25;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MessageBubble$composable$lambda_0($proccessStage, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MessageBubble$composable($proccessStage, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_8() {
    return 0;
  }
  function ProccessStage(title, subtitle, status, intervalDate, isCourse) {
    subtitle = subtitle === VOID ? null : subtitle;
    intervalDate = intervalDate === VOID ? null : intervalDate;
    isCourse = isCourse === VOID ? false : isCourse;
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.status_1 = status;
    this.intervalDate_1 = intervalDate;
    this.isCourse_1 = isCourse;
    this.$stable_1 = 0;
  }
  protoOf(ProccessStage).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(ProccessStage).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(ProccessStage).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(ProccessStage).get_intervalDate_lfdqqs_k$ = function () {
    return this.intervalDate_1;
  };
  protoOf(ProccessStage).get_isCourse_rz014e_k$ = function () {
    return this.isCourse_1;
  };
  protoOf(ProccessStage).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(ProccessStage).component2_7eebsb_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(ProccessStage).component3_7eebsa_k$ = function () {
    return this.status_1;
  };
  protoOf(ProccessStage).component4_7eebs9_k$ = function () {
    return this.intervalDate_1;
  };
  protoOf(ProccessStage).component5_7eebs8_k$ = function () {
    return this.isCourse_1;
  };
  protoOf(ProccessStage).copy_qinovw_k$ = function (title, subtitle, status, intervalDate, isCourse) {
    return new ProccessStage(title, subtitle, status, intervalDate, isCourse);
  };
  protoOf(ProccessStage).copy$default_xzdn3l_k$ = function (title, subtitle, status, intervalDate, isCourse, $super) {
    title = title === VOID ? this.title_1 : title;
    subtitle = subtitle === VOID ? this.subtitle_1 : subtitle;
    status = status === VOID ? this.status_1 : status;
    intervalDate = intervalDate === VOID ? this.intervalDate_1 : intervalDate;
    isCourse = isCourse === VOID ? this.isCourse_1 : isCourse;
    return $super === VOID ? this.copy_qinovw_k$(title, subtitle, status, intervalDate, isCourse) : $super.copy_qinovw_k$.call(this, title, subtitle, status, intervalDate, isCourse);
  };
  protoOf(ProccessStage).toString = function () {
    return 'ProccessStage(title=' + this.title_1 + ', subtitle=' + this.subtitle_1 + ', status=' + this.status_1 + ', intervalDate=' + this.intervalDate_1 + ', isCourse=' + this.isCourse_1 + ')';
  };
  protoOf(ProccessStage).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + (this.subtitle_1 == null ? 0 : getStringHashCode(this.subtitle_1)) | 0;
    result = imul(result, 31) + this.status_1.hashCode() | 0;
    result = imul(result, 31) + (this.intervalDate_1 == null ? 0 : getStringHashCode(this.intervalDate_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isCourse_1) | 0;
    return result;
  };
  protoOf(ProccessStage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProccessStage))
      return false;
    var tmp0_other_with_cast = other instanceof ProccessStage ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.subtitle_1 == tmp0_other_with_cast.subtitle_1))
      return false;
    if (!this.status_1.equals(tmp0_other_with_cast.status_1))
      return false;
    if (!(this.intervalDate_1 == tmp0_other_with_cast.intervalDate_1))
      return false;
    if (!(this.isCourse_1 === tmp0_other_with_cast.isCourse_1))
      return false;
    return true;
  };
  var ProccessStageStatus_FINISHED_instance;
  var ProccessStageStatus_CURRENT_instance;
  var ProccessStageStatus_UPCOMING_instance;
  function values_0() {
    return [ProccessStageStatus_FINISHED_getInstance(), ProccessStageStatus_CURRENT_getInstance(), ProccessStageStatus_UPCOMING_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'FINISHED':
        return ProccessStageStatus_FINISHED_getInstance();
      case 'CURRENT':
        return ProccessStageStatus_CURRENT_getInstance();
      case 'UPCOMING':
        return ProccessStageStatus_UPCOMING_getInstance();
      default:
        ProccessStageStatus_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ProccessStageStatus_entriesInitialized;
  function ProccessStageStatus_initEntries() {
    if (ProccessStageStatus_entriesInitialized)
      return Unit_getInstance();
    ProccessStageStatus_entriesInitialized = true;
    ProccessStageStatus_FINISHED_instance = new ProccessStageStatus('FINISHED', 0);
    ProccessStageStatus_CURRENT_instance = new ProccessStageStatus('CURRENT', 1);
    ProccessStageStatus_UPCOMING_instance = new ProccessStageStatus('UPCOMING', 2);
  }
  var $ENTRIES_0;
  function ProccessStageStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ProccessStageStatus_FINISHED_getInstance() {
    ProccessStageStatus_initEntries();
    return ProccessStageStatus_FINISHED_instance;
  }
  function ProccessStageStatus_CURRENT_getInstance() {
    ProccessStageStatus_initEntries();
    return ProccessStageStatus_CURRENT_instance;
  }
  function ProccessStageStatus_UPCOMING_getInstance() {
    ProccessStageStatus_initEntries();
    return ProccessStageStatus_UPCOMING_instance;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function StrokeParameters(color, width) {
    this.color_1 = color;
    this.width_1 = width;
    this.$stable_1 = 0;
  }
  protoOf(StrokeParameters).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(StrokeParameters).get_width_7o61hi_k$ = function () {
    return this.width_1;
  };
  protoOf(StrokeParameters).component1_9lkot7_k$ = function () {
    return this.color_1;
  };
  protoOf(StrokeParameters).component2_fwtwi6_k$ = function () {
    return this.width_1;
  };
  protoOf(StrokeParameters).copy_dl4a1h_k$ = function (color, width) {
    return new StrokeParameters(color, width);
  };
  protoOf(StrokeParameters).copy$default_7g5ya7_k$ = function (color, width, $super) {
    color = color === VOID ? this.color_1 : color;
    width = width === VOID ? this.width_1 : width;
    return $super === VOID ? this.copy_dl4a1h_k$(color, width) : $super.copy_dl4a1h_k$.call(this, new Color_2(color), new Dp(width));
  };
  protoOf(StrokeParameters).toString = function () {
    return 'StrokeParameters(color=' + new Color_2(this.color_1) + ', width=' + new Dp(this.width_1) + ')';
  };
  protoOf(StrokeParameters).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.width_1) | 0;
    return result;
  };
  protoOf(StrokeParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StrokeParameters))
      return false;
    var tmp0_other_with_cast = other instanceof StrokeParameters ? other : THROW_CCE();
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    return true;
  };
  function TimelineNode(circleParameters, lineParameters, contentStartOffset, spacer, content) {
    illegalDecoyCallException('TimelineNode');
  }
  function TimelineNode$composable(circleParameters, lineParameters, contentStartOffset, spacer, content, $composer, $changed, $default) {
    var lineParameters_0 = {_v: lineParameters};
    var contentStartOffset_0 = {_v: new Dp(contentStartOffset)};
    var spacer_0 = {_v: new Dp(spacer)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1621650888);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(circleParameters) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(lineParameters_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(contentStartOffset_0._v.value_1)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(spacer_0._v.value_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        lineParameters_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
        contentStartOffset_0._v = new Dp(tmp$ret$0);
      }
      if (!(($default & 8) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(32);
        spacer_0._v = new Dp(tmp$ret$1);
      }
      if (isTraceInProgress()) {
        traceEventStart(1621650888, $dirty, -1, 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable (TimeLineNode.kt:32)');
      }
      var tmp0_safe_receiver = circleParameters.get_icon_wont8i_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-1958739212);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable.<anonymous>' call
        tmp = rememberVectorPainter$composable(tmp0_safe_receiver, $composer_0, 0);
      }
      var tmp1_group = tmp;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var iconPainter = tmp1_group;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_0 = wrapContentSize(Companion_getInstance_1());
      $composer_0.startReplaceableGroup_ip860b_k$(-371567377);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(circleParameters) | $composer_0.changed_ga7h3f_k$(lineParameters_0._v)) | $composer_0.changed_ga7h3f_k$(iconPainter));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable.<anonymous>' call
        var value = TimelineNode$composable$lambda(circleParameters, lineParameters_0, iconPainter);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var modifier = drawBehind(tmp_0, tmpCache);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 0 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp_3 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_4;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_4 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable.<anonymous>' call
      var $this$Box = BoxScopeInstance_getInstance();
      var $changed_2 = 6 | 112 & 0 >> 6;
      var $composer_5 = $composer_4;
      var tmp_5 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_1 = circleParameters.get_radius_lj3jlk_k$();
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) * 2);
      var tmp_6 = defaultMinSize(tmp_5, VOID, tmp$ret$10);
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_2 = circleParameters.get_radius_lj3jlk_k$();
      var this_3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) * 2);
      var other = contentStartOffset_0._v.value_1;
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_3) + _Dp___get_value__impl__geb1vb(other));
      content($this$Box, padding_0(tmp_6, tmp$ret$12, VOID, VOID, spacer_0._v.value_1), $composer_5, 14 & $changed_2 | 896 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(TimelineNode$composable$lambda_0(circleParameters, lineParameters_0, contentStartOffset_0, spacer_0, content, $changed, $default));
    }
  }
  function TimelineNode$composable$lambda($circleParameters, $lineParameters, $iconPainter) {
    return function ($this$drawBehind) {
      var circleRadiusInPx = $this$drawBehind.toPx_mycba2_k$($circleParameters.get_radius_lj3jlk_k$());
      var tmp0_safe_receiver = $lineParameters._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$drawBehind.drawLine$default_gyf64g_k$(tmp0_safe_receiver.get_brush_ipcjyp_k$(), Offset(circleRadiusInPx, circleRadiusInPx * 2), Offset(circleRadiusInPx, _Size___get_height__impl__a04p02($this$drawBehind.get_size_cxx1ym_k$())), $this$drawBehind.toPx_mycba2_k$(tmp0_safe_receiver.get_strokeWidth_j9wvvm_k$()));
      }
      $this$drawBehind.drawCircle$default_wqrb84_k$($circleParameters.get_backgroundColor_41xwlp_k$(), circleRadiusInPx, Offset(circleRadiusInPx, circleRadiusInPx));
      var tmp1_safe_receiver = $circleParameters.get_stroke_jnpx6p_k$();
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var strokeWidthInPx = $this$drawBehind.toPx_mycba2_k$(tmp1_safe_receiver.get_width_7o61hi_k$());
        $this$drawBehind.drawCircle$default_wqrb84_k$(tmp1_safe_receiver.get_color_lnp1vl_k$(), circleRadiusInPx - strokeWidthInPx / 2, Offset(circleRadiusInPx, circleRadiusInPx), VOID, new Stroke(strokeWidthInPx));
      }
      var tmp2_safe_receiver = $iconPainter;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = $this$drawBehind.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$with.get_transform_px941v_k$().translate_7gghdu_k$(circleRadiusInPx - _Size___get_width__impl__58y75t(tmp2_safe_receiver.get_intrinsicSize_culx5t_k$()) / 2.0, circleRadiusInPx - _Size___get_height__impl__a04p02(tmp2_safe_receiver.get_intrinsicSize_culx5t_k$()) / 2.0);
        // Inline function 'br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        $this$drawBehind.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        tmp2_safe_receiver.draw$default_7w00am_k$($this$drawBehind, tmp2_safe_receiver.get_intrinsicSize_culx5t_k$());
        $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
        $this$with.set_size_6a0e6q_k$(previousSize);
      }
      return Unit_getInstance();
    };
  }
  function TimelineNode$composable$lambda_0($circleParameters, $lineParameters, $contentStartOffset, $spacer, $content, $$changed, $$default) {
    return function ($composer, $force) {
      TimelineNode$composable($circleParameters, $lineParameters._v, $contentStartOffset._v.value_1, $spacer._v.value_1, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var TimelineNodePosition_FIRST_instance;
  var TimelineNodePosition_MIDDLE_instance;
  var TimelineNodePosition_LAST_instance;
  function values_1() {
    return [TimelineNodePosition_FIRST_getInstance(), TimelineNodePosition_MIDDLE_getInstance(), TimelineNodePosition_LAST_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'FIRST':
        return TimelineNodePosition_FIRST_getInstance();
      case 'MIDDLE':
        return TimelineNodePosition_MIDDLE_getInstance();
      case 'LAST':
        return TimelineNodePosition_LAST_getInstance();
      default:
        TimelineNodePosition_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var TimelineNodePosition_entriesInitialized;
  function TimelineNodePosition_initEntries() {
    if (TimelineNodePosition_entriesInitialized)
      return Unit_getInstance();
    TimelineNodePosition_entriesInitialized = true;
    TimelineNodePosition_FIRST_instance = new TimelineNodePosition('FIRST', 0);
    TimelineNodePosition_MIDDLE_instance = new TimelineNodePosition('MIDDLE', 1);
    TimelineNodePosition_LAST_instance = new TimelineNodePosition('LAST', 2);
  }
  var $ENTRIES_1;
  function TimelineNodePosition(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TimelineNodePosition_FIRST_getInstance() {
    TimelineNodePosition_initEntries();
    return TimelineNodePosition_FIRST_instance;
  }
  function TimelineNodePosition_MIDDLE_getInstance() {
    TimelineNodePosition_initEntries();
    return TimelineNodePosition_MIDDLE_instance;
  }
  function TimelineNodePosition_LAST_getInstance() {
    TimelineNodePosition_initEntries();
    return TimelineNodePosition_LAST_instance;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function HomeScreen$Content$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.Content$composable_xd8m9d_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeScreen() {
    HomeScreen_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(HomeScreen).Content_9ghzef_k$ = function () {
    illegalDecoyCallException('Content');
  };
  protoOf(HomeScreen).Content$composable_xd8m9d_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-662658945);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-662658945, $changed, -1, 'br.mrenann.dev.portfolio.ui.screens.HomeScreen.Content$composable (HomeScreen.kt:13)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier = fillMaxSize(background(Companion_getInstance_1(), Companion_getInstance_7().get_White_xpp3qf_k$()));
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 0 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_0 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.screens.HomeScreen.Content$composable.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(HomeScreen$Content$composable$lambda(this, $changed));
    }
  };
  var HomeScreen_instance;
  function HomeScreen_getInstance() {
    if (HomeScreen_instance == null)
      new HomeScreen();
    return HomeScreen_instance;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function ContactTab$Content$composable$lambda$lambda(it) {
    return null;
  }
  function ContactTab$Content$composable$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items.get_c1px32_k$(index));
    };
  }
  function ContactTab$Content$composable$lambda$lambda_1($span, $items) {
    return function ($this$null, it) {
      return $span($this$null, $items.get_c1px32_k$(it));
    };
  }
  function ContactTab$Content$composable$lambda$lambda_2($contentType, $items) {
    return function (index) {
      return $contentType($items.get_c1px32_k$(index));
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ContactTab$Content$composable$lambda$lambda_3($items) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C461@19441L22:LazyGridDsl.kt#7791vq');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_kpusro_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(699646206, $dirty, -1, 'androidx.compose.foundation.lazy.grid.items$composable.<anonymous> (LazyGridDsl.kt:460)');
        }
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ContactTab.Content$composable.<anonymous>.<anonymous>.<anonymous>' call
        var data = $items.get_c1px32_k$(it);
        var $changed_0 = 14 & $dirty;
        var $composer_1 = $composer_0;
        SocialButton$composable(data, $composer_1, 14 & $changed_0 >> 3);
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
  function ContactTab$Content$composable$lambda($buttons) {
    return function ($this$LazyVerticalGrid) {
      // Inline function 'androidx.compose.foundation.lazy.grid.items$composable' call
      var items = $buttons;
      var contentType = ContactTab$Content$composable$lambda$lambda;
      var tmp = items.get_size_woubt6_k$();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ContactTab$Content$composable$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2;
      if (!(null == null)) {
        tmp_2 = ContactTab$Content$composable$lambda$lambda_1(null, items);
      } else {
        tmp_2 = null;
      }
      var tmp_3 = tmp_2;
      var tmp_4 = ContactTab$Content$composable$lambda$lambda_2(contentType, items);
      $this$LazyVerticalGrid.items$composable_vogww_k$(tmp, tmp_1, tmp_3, tmp_4, ComposableLambda$invoke$ref_14(composableLambdaInstance(699646206, true, ContactTab$Content$composable$lambda$lambda_3(items))));
      return Unit_getInstance();
    };
  }
  function ContactTab$Content$composable$lambda_0($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.Content$composable_xd8m9d_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactTab() {
    ContactTab_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(ContactTab).get_options_jecmyz_k$ = function () {
    illegalDecoyCallException('<get-options>');
  };
  protoOf(ContactTab).Content_9ghzef_k$ = function () {
    illegalDecoyCallException('Content');
  };
  protoOf(ContactTab).$get_options$$composable_m5e2i1_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(148361308);
    if (isTraceInProgress()) {
      traceEventStart(148361308, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.ContactTab.$get-options$$composable (ContactTab.kt:40)');
    }
    var icon = rememberVectorPainter$composable(get_PhoneCall(FeatherIcons_getInstance()), $composer_0, 0);
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
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ContactTab.$get-options$$composable.<anonymous>' call
      var value = new TabOptions(_UShort___init__impl__jigrne(2), 'Contact Me', icon);
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
  protoOf(ContactTab).Content$composable_xd8m9d_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(348628110);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(348628110, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.ContactTab.Content$composable (ContactTab.kt:54)');
      }
      var buttons = listOf([SocialOption_EMAIL_getInstance(), SocialOption_TELEPHONE_getInstance(), SocialOption_LINKEDIN_getInstance(), SocialOption_GITHUB_getInstance()]);
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier = fillMaxSize(Companion_getInstance_1());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 6 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_0 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ContactTab.Content$composable.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var windowClass = calculateWindowSizeClass$composable($composer_5, 0);
      var showNavigationRail = !(windowClass.get_widthSizeClass_2320u1_k$() === Companion_getInstance().get_Compact_17mu13_k$());
      var tmp_1 = Companion_getInstance_1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(20);
      var tmp0_modifier = padding_1(tmp_1, tmp$ret$2);
      var tmp1_textAlign = Companion_getInstance_8().get_Justify_uf64z9_k$();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Estou Dispon\xEDvel para Discutir Oportunidades de Colabora\xE7\xE3o, Projetos Empolgantes ou Simplesmente para Trocar Ideias. Aguardo o seu Contato!', tmp0_modifier, tmp_2, tmp_3, null, null, null, tmp_4, null, tmp1_textAlign, tmp_5, tmp_6, false, 0, 0, null, null, $composer_5, 54, 0, 130556);
      var tmp_7 = new Fixed(showNavigationRail ? 2 : 1);
      LazyVerticalGrid$composable(tmp_7, null, null, null, false, null, null, null, false, ContactTab$Content$composable$lambda(buttons), $composer_5, 0, 510);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ContactTab$Content$composable$lambda_0(this, $changed));
    }
  };
  var ContactTab_instance;
  function ContactTab_getInstance() {
    if (ContactTab_instance == null)
      new ContactTab();
    return ContactTab_instance;
  }
  function getLineBrush($this, circleRadius, index, items) {
    illegalDecoyCallException('getLineBrush');
  }
  function getIconColor($this, stage) {
    illegalDecoyCallException('getIconColor');
  }
  function getIconStrokeColor($this, stage) {
    var tmp;
    if (stage.get_status_jnf6d7_k$().equals(ProccessStageStatus_UPCOMING_getInstance())) {
      var tmp_0 = Companion_getInstance_7().get_Gray_ci51t9_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      tmp = new StrokeParameters(tmp_0, tmp$ret$0);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function getLineBrush$composable($this, circleRadius, index, items, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1299293619);
    if (isTraceInProgress()) {
      traceEventStart(1299293619, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.getLineBrush$composable (EducationTab.kt:55)');
    }
    var tmp;
    if (!(index === get_lastIndex(items))) {
      var currentStage = items[index];
      var nextStage = items[index + 1 | 0];
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.getLineBrush$composable.<anonymous>' call
      var circleRadiusInPx = tmp0.toPx_mycba2_k$(circleRadius);
      var tmp_0 = LineParametersDefaults_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(3);
      var tmp0_safe_receiver = getIconStrokeColor($this, currentStage);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_color_lnp1vl_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-1956367078);
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new Color_2(tmp_3)) == null) {
        tmp_2 = getIconColor$composable($this, currentStage, $composer_0, 112 & $changed >> 6);
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp1_group = tmp_2;
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp2_safe_receiver = getIconStrokeColor($this, nextStage);
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_color_lnp1vl_k$();
      var tmp_4;
      var tmp_5 = tmp3_elvis_lhs;
      if ((tmp_5 == null ? null : new Color_2(tmp_5)) == null) {
        tmp_4 = getIconColor$composable($this, items[index + 1 | 0], $composer_0, 112 & $changed >> 6);
      } else {
        tmp_4 = tmp3_elvis_lhs;
      }
      var tmp2_group = tmp_4;
      tmp = tmp_0.linearGradient$default_90bq63_k$(tmp_1, tmp1_group, tmp2_group, circleRadiusInPx * 2);
    } else {
      tmp = null;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function getIconColor$composable($this, stage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1335901292);
    if (isTraceInProgress()) {
      traceEventStart(-1335901292, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.getIconColor$composable (EducationTab.kt:73)');
    }
    var tmp0_subject = stage.get_status_jnf6d7_k$();
    var tmp;
    if (tmp0_subject.equals(ProccessStageStatus_FINISHED_getInstance())) {
      tmp = MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_surfaceVariant_jeodjc_k$();
    } else if (tmp0_subject.equals(ProccessStageStatus_CURRENT_getInstance())) {
      tmp = Companion_getInstance_7().get_Yellow_pj9jlw_k$();
    } else if (tmp0_subject.equals(ProccessStageStatus_UPCOMING_getInstance())) {
      tmp = Companion_getInstance_7().get_Red_6k64b3_k$();
    } else {
      noWhenBranchMatchedException();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function EducationTab$Content$composable$lambda$lambda($key, $items) {
    return function (index) {
      return $key(index, $items[index]);
    };
  }
  function EducationTab$Content$composable$lambda$lambda_0($items) {
    return function (index) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed$composable.<anonymous>' call
      $items[index];
      return null;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function EducationTab$Content$composable$lambda$lambda$lambda($proccessStage) {
    return function ($this$TimelineNode, modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 32 : 16);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 721) === 144) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(225493931, $dirty, -1, 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (EducationTab.kt:155)');
        }
        MessageBubble$composable($proccessStage, modifier, $composer_0, 112 & $dirty, 0);
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
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function EducationTab$Content$composable$lambda$lambda_1($items, $stages) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C250@11594L26:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_kpusro_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1600639390, $dirty, -1, 'androidx.compose.foundation.lazy.itemsIndexed$composable.<anonymous> (LazyDsl.kt:249)');
        }
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable.<anonymous>.<anonymous>.<anonymous>' call
        var proccessStage = $items[it];
        var $changed_0 = 14 & $dirty | 112 & $dirty;
        var $composer_1 = $composer_0;
        var tmp_2 = CircleParametersDefaults_getInstance().circleParameters$default_evv5xc_k$(VOID, getIconColor$composable(EducationTab_getInstance(), proccessStage, $composer_1, 48 | 14 & $changed_0 >> 6), getIconStrokeColor(EducationTab_getInstance(), proccessStage), get_BookOpen(FeatherIcons_getInstance()));
        var tmp_3 = EducationTab_getInstance();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(12);
        var tmp_4 = getLineBrush$composable(tmp_3, tmp$ret$0, it, $stages, $composer_1, 3078 | 112 & $changed_0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_5 = _Dp___init__impl__ms3zkb(16);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_6 = _Dp___init__impl__ms3zkb(24);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_1;
        var dispatchReceiver = composableLambda(tmp_7, 225493931, true, EducationTab$Content$composable$lambda$lambda$lambda(proccessStage));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_16(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value);
          tmp_8 = value;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        TimelineNode$composable(tmp_2, tmp_4, tmp_5, tmp_6, tmp0, $composer_1, 28032, 0);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp_1 = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function EducationTab$Content$composable$lambda($stages) {
    return function ($this$LazyColumn) {
      // Inline function 'androidx.compose.foundation.lazy.itemsIndexed$composable' call
      var items = $stages;
      var tmp = items.length;
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = EducationTab$Content$composable$lambda$lambda(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = EducationTab$Content$composable$lambda$lambda_0(items);
      $this$LazyColumn.items$composable_u7fyku_k$(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_15(composableLambdaInstance(1600639390, true, EducationTab$Content$composable$lambda$lambda_1(items, $stages))));
      return Unit_getInstance();
    };
  }
  function EducationTab$Content$composable$lambda_0($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.Content$composable_xd8m9d_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EducationTab() {
    EducationTab_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(EducationTab).get_options_jecmyz_k$ = function () {
    illegalDecoyCallException('<get-options>');
  };
  protoOf(EducationTab).Content_9ghzef_k$ = function () {
    illegalDecoyCallException('Content');
  };
  protoOf(EducationTab).$get_options$$composable_m5e2i1_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(758515556);
    if (isTraceInProgress()) {
      traceEventStart(758515556, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.$get-options$$composable (EducationTab.kt:38)');
    }
    var icon = rememberVectorPainter$composable(get_BookOpen(FeatherIcons_getInstance()), $composer_0, 0);
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
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.$get-options$$composable.<anonymous>' call
      var value = new TabOptions(_UShort___init__impl__jigrne(2), 'Education', icon);
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
  protoOf(EducationTab).Content$composable_xd8m9d_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(555014790);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(555014790, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable (EducationTab.kt:90)');
      }
      // Inline function 'kotlin.arrayOf' call
      var tmp0_status = ProccessStageStatus_FINISHED_getInstance();
      var tmp = new ProccessStage('Gradua\xE7\xE3o em Ci\xEAncia da Computa\xE7\xE3o', 'Universidade Federal do Cariri (UFCA) ', tmp0_status, '2019 - 2023');
      var tmp1_status = ProccessStageStatus_FINISHED_getInstance();
      var tmp_0 = new ProccessStage('Ensino M\xE9dio T\xE9cnico em Inform\xE1tica', 'EEEP Professor Moreira de Sousa', tmp1_status, '2016 - 2018');
      var tmp2_status = ProccessStageStatus_FINISHED_getInstance();
      var tmp_1 = new ProccessStage('Santander CODERS MOBILE', 'Digital House Brasil', tmp2_status, '2021', true);
      var tmp3_status = ProccessStageStatus_FINISHED_getInstance();
      var tmp_2 = new ProccessStage('Everis Kotlin Developer', 'DIO', tmp3_status, '2021', true);
      var tmp4_status = ProccessStageStatus_FINISHED_getInstance();
      var tmp_3 = new ProccessStage('Desenvolvimento Front-End', 'Digital House Brasil', tmp4_status, '2021', true);
      var tmp5_status = ProccessStageStatus_FINISHED_getInstance();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var stages = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, new ProccessStage('Desenvolvimento de Aplicativos Android Studio & Kotlin', 'Cel.Lep Idiomas', tmp5_status, '2020', true)];
      var tmp_4 = fillMaxWidth(wrapContentHeight(Companion_getInstance_1()));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(12);
      var tmp_5 = PaddingValues(tmp$ret$3);
      $composer_0.startReplaceableGroup_ip860b_k$(909842676);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(stages);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.EducationTab.Content$composable.<anonymous>' call
        var value = EducationTab$Content$composable$lambda(stages);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmpCache = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LazyColumn$composable(tmp_4, null, tmp_5, false, null, null, null, false, tmpCache, $composer_0, 390, 250);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(EducationTab$Content$composable$lambda_0(this, $changed));
    }
  };
  var EducationTab_instance;
  function EducationTab_getInstance() {
    if (EducationTab_instance == null)
      new EducationTab();
    return EducationTab_instance;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function HomeTab$Content$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.Content$composable_xd8m9d_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeTab() {
    HomeTab_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(HomeTab).get_options_jecmyz_k$ = function () {
    illegalDecoyCallException('<get-options>');
  };
  protoOf(HomeTab).Content_9ghzef_k$ = function () {
    illegalDecoyCallException('Content');
  };
  protoOf(HomeTab).$get_options$$composable_m5e2i1_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(508668215);
    if (isTraceInProgress()) {
      traceEventStart(508668215, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.HomeTab.$get-options$$composable (HomeTab.kt:32)');
    }
    var icon = rememberVectorPainter$composable(get_User(FeatherIcons_getInstance()), $composer_0, 0);
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
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.HomeTab.$get-options$$composable.<anonymous>' call
      var value = new TabOptions(_UShort___init__impl__jigrne(0), 'About me', icon);
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
  protoOf(HomeTab).Content$composable_xd8m9d_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2115833965);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2115833965, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.HomeTab.Content$composable (HomeTab.kt:45)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp = fillMaxSize(Companion_getInstance_1());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      var modifier = padding_1(tmp, tmp$ret$0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 6 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_getInstance_1();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(factory);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_1;
      if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
        tmp_1 = Unit_getInstance();
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.HomeTab.Content$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier_2 = ColumnScopeInstance_getInstance().align_92hj17_k$(Companion_getInstance_1(), Companion_getInstance_2().get_CenterHorizontally_97ab0v_k$());
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_ip860b_k$(860130704);
      sourceInformation($composer_6, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_2 = Companion_getInstance_1();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_2().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_3 = modifier_2;
      var $changed_2 = 112 & 0 << 3;
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      $composer_7.startReplaceableGroup_ip860b_k$(1725976829);
      sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_1();
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_0 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
      var skippableUpdate_0 = materializerOf(modifier_4);
      var $changed_3 = 6 | 7168 & $changed_2 << 9;
      var $composer_8 = $composer_7;
      var tmp_2 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(factory_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      var tmp_3;
      if ($this$with_0.get_inserting_25mlsw_k$() ? true : !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
        $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
        tmp_3 = Unit_getInstance();
      }
      skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_3 >> 3);
      $composer_8.startReplaceableGroup_ip860b_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.HomeTab.Content$composable.<anonymous>.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      var tmp0_modifier = clip(Companion_getInstance_1(), get_CircleShape());
      var tmp1_alignment = Companion_getInstance_2().get_Center_3arb0i_k$();
      var tmp_4 = _FilterQuality___init__impl__nv51aq(0);
      var tmp2_painter = rememberImagePainter$composable('https://avatars.githubusercontent.com/u/50411238?v=4', null, tmp_4, null, null, $composer_10, 6, 30);
      Image$composable(tmp2_painter, 'image', tmp0_modifier, tmp1_alignment, null, 0.0, null, $composer_10, 3120, 112);
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = get_sp(20);
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text$composable("I'm Marcos Renann", null, tmp_5, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, null, $composer_10, 3078, 0, 131062);
      var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_11 = get_sp(20);
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Android Developer', null, tmp_10, tmp_11, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_10, 3078, 0, 131062);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.endReplaceableGroup_ern0ak_k$();
      $composer_8.endNode_3m0yfn_k$();
      $composer_7.endReplaceableGroup_ern0ak_k$();
      $composer_6.endReplaceableGroup_ern0ak_k$();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_ern0ak_k$();
      $composer_3.endNode_3m0yfn_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(HomeTab$Content$composable$lambda(this, $changed));
    }
  };
  var HomeTab_instance;
  function HomeTab_getInstance() {
    if (HomeTab_instance == null)
      new HomeTab();
    return HomeTab_instance;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function ProjectsTab$Content$composable$lambda($this$Json) {
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    return Unit_getInstance();
  }
  function ProjectsTab$Content$composable$lambda$lambda(it) {
    return null;
  }
  function ProjectsTab$Content$composable$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items[index]);
    };
  }
  function ProjectsTab$Content$composable$lambda$lambda_1($span, $items) {
    return function ($this$null, it) {
      return $span($this$null, $items[it]);
    };
  }
  function ProjectsTab$Content$composable$lambda$lambda_2($contentType, $items) {
    return function (index) {
      return $contentType($items[index]);
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_gk4tfu_k$(p0, p1, p2, p3);
    };
  }
  function ProjectsTab$Content$composable$lambda$lambda$lambda($data) {
    return function () {
      openUrl($data.get_url_18iuii_k$());
      return Unit_getInstance();
    };
  }
  function ProjectsTab$Content$composable$lambda$lambda$lambda_0($data) {
    return function ($this$Card, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(681643014, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ProjectsTab.kt:80)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var modifier = null;
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_getInstance_1();
        if (!((7 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((7 & 4) === 0))
          verticalAlignment = Companion_getInstance_2().get_Top_18jj1w_k$();
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 0 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_getInstance_1();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jjgeyp_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_ahrd54_k$(factory);
        } else {
          $composer_3.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.get_inserting_25mlsw_k$() ? true : !equals($this$with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          $this$with.updateRememberedValue_l1wh71_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).apply_pk82p8_k$(compositeKeyHash, block);
          tmp_1 = Unit_getInstance();
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $this$Row = RowScopeInstance_getInstance();
        var $composer_5 = $composer_4;
        var tmp_2 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
        var tmp_3 = fillMaxWidth(fillMaxHeight(padding_1(tmp_2, tmp$ret$2)), 0.25);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(5);
        var tmp0_modifier = $this$Row.align_7cl60d_k$(clip(tmp_3, RoundedCornerShape_0(tmp$ret$3)), Companion_getInstance_2().get_CenterVertically_dmkbbz_k$());
        var tmp1_alignment = Companion_getInstance_2().get_Center_3arb0i_k$();
        var tmp_4 = $data.get_imagem_et448r_k$();
        var tmp_5 = _FilterQuality___init__impl__nv51aq(0);
        var tmp2_painter = rememberImagePainter$composable(tmp_4, null, tmp_5, null, null, $composer_5, 0, 30);
        Image$composable(tmp2_painter, 'image', tmp0_modifier, tmp1_alignment, null, 0.0, null, $composer_5, 3120, 112);
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp_6 = Companion_getInstance_1();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$4 = _Dp___init__impl__ms3zkb(7);
        var modifier_2 = padding_1(tmp_6, tmp$ret$4);
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_6 = $composer_5;
        $composer_6.startReplaceableGroup_ip860b_k$(860130704);
        sourceInformation($composer_6, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_2 = Companion_getInstance_1();
        if (!((6 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((6 & 4) === 0))
          horizontalAlignment = Companion_getInstance_2().get_Start_ih4i6x_k$();
        var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_6, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_3 = modifier_2;
        var $changed_2 = 112 & 6 << 3;
        var modifier_4 = modifier_3;
        var $composer_7 = $composer_6;
        $composer_7.startReplaceableGroup_ip860b_k$(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance_1();
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_0 = Companion_getInstance_3().get_Constructor_f7ieep_k$();
        var skippableUpdate_0 = materializerOf(modifier_4);
        var $changed_3 = 6 | 7168 & $changed_2 << 9;
        var $composer_8 = $composer_7;
        var tmp_7 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(factory_0);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_3().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_3().get_SetResolvedCompositionLocals_rc2u9t_k$());
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_3().get_SetCompositeKeyHash_n8lgg1_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        var tmp_8;
        if ($this$with_0.get_inserting_25mlsw_k$() ? true : !equals($this$with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          $this$with_0.updateRememberedValue_l1wh71_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).apply_pk82p8_k$(compositeKeyHash_0, block_0);
          tmp_8 = Unit_getInstance();
        }
        skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_3 >> 3);
        $composer_8.startReplaceableGroup_ip860b_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ColumnScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        var tmp0_safe_receiver = $data.get_nome_wor90i_k$();
        $composer_10.startReplaceableGroup_ip860b_k$(-44274884);
        var tmp_9;
        if (tmp0_safe_receiver == null) {
          tmp_9 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = get_sp(16);
          var tmp_12 = Companion_getInstance_6().get_ExtraBold_xklwd0_k$();
          var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_15 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp0_safe_receiver, null, tmp_10, tmp_11, null, tmp_12, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_10, 199680, 0, 131030);
          tmp_9 = Unit_getInstance();
        }
        $composer_10.endReplaceableGroup_ern0ak_k$();
        var tmp_16 = $data.get_categoria_yes9ze_k$();
        var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_21 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_16, null, tmp_17, tmp_18, null, null, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_10, 0, 0, 131070);
        var tmp1_safe_receiver = $data.get_acesso_avc0c5_k$();
        $composer_10.startReplaceableGroup_ip860b_k$(-44274515);
        var tmp_22;
        if (tmp1_safe_receiver == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_23 = tmp1_safe_receiver + ' Downloads';
          var tmp_24 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_28 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp_23, null, tmp_24, tmp_25, null, null, null, tmp_26, null, null, tmp_27, tmp_28, false, 0, 0, null, null, $composer_10, 0, 0, 131070);
          tmp_22 = Unit_getInstance();
        }
        $composer_10.endReplaceableGroup_ern0ak_k$();
        var tmp2_safe_receiver = $data.get_descricao_xbi5r4_k$();
        $composer_10.startReplaceableGroup_ip860b_k$(-2069578531);
        var tmp_29;
        if (tmp2_safe_receiver == null) {
          tmp_29 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_30 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_32 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_33 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_34 = _TextOverflow___init__impl__obguoe(0);
          Text$composable(tmp2_safe_receiver, null, tmp_30, tmp_31, null, null, null, tmp_32, null, null, tmp_33, tmp_34, false, 0, 0, null, null, $composer_10, 0, 0, 131070);
          tmp_29 = Unit_getInstance();
        }
        $composer_10.endReplaceableGroup_ern0ak_k$();
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endReplaceableGroup_ern0ak_k$();
        $composer_8.endNode_3m0yfn_k$();
        $composer_7.endReplaceableGroup_ern0ak_k$();
        $composer_6.endReplaceableGroup_ern0ak_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_ern0ak_k$();
        $composer_3.endNode_3m0yfn_k$();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_35;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_35 = Unit_getInstance();
        }
        tmp = tmp_35;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectsTab$Content$composable$lambda$lambda_3($items) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C527@22869L22:LazyGridDsl.kt#7791vq');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$items) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.changed_kpusro_k$(it) ? 32 : 16);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(407562193, $dirty, -1, 'androidx.compose.foundation.lazy.grid.items$composable.<anonymous> (LazyGridDsl.kt:526)');
        }
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>' call
        var data = $items[it];
        var $composer_1 = $composer_0;
        var tmp0_$receiver = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp1_vertical = _Dp___init__impl__ms3zkb(5);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp2_horizontal = _Dp___init__impl__ms3zkb(15);
        var tmp_2 = padding_2(tmp0_$receiver, tmp2_horizontal, tmp1_vertical);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(10);
        var tmp_3 = clip(tmp_2, RoundedCornerShape_0(tmp$ret$2));
        $composer_1.startReplaceableGroup_ip860b_k$(1377488853);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(data);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ProjectsTab$Content$composable$lambda$lambda$lambda(data);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmpCache = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var tmp_6 = clickable(tmp_3, VOID, VOID, VOID, tmpCache);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_1;
        var dispatchReceiver = composableLambda(tmp_7, 681643014, true, ProjectsTab$Content$composable$lambda$lambda$lambda_0(data));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_1;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_1;
        }
        var tmp_9 = tmp_8;
        var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Card$composable(tmp_6, null, null, null, null, tmp0, $composer_1, 196608, 30);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp_1 = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ProjectsTab$Content$composable$lambda_0($projects) {
    return function ($this$LazyVerticalGrid) {
      // Inline function 'androidx.compose.foundation.lazy.grid.items$composable' call
      var items = $projects;
      var contentType = ProjectsTab$Content$composable$lambda$lambda;
      var tmp = items.length;
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = ProjectsTab$Content$composable$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2;
      if (!(null == null)) {
        tmp_2 = ProjectsTab$Content$composable$lambda$lambda_1(null, items);
      } else {
        tmp_2 = null;
      }
      var tmp_3 = tmp_2;
      var tmp_4 = ProjectsTab$Content$composable$lambda$lambda_2(contentType, items);
      $this$LazyVerticalGrid.items$composable_vogww_k$(tmp, tmp_1, tmp_3, tmp_4, ComposableLambda$invoke$ref_17(composableLambdaInstance(407562193, true, ProjectsTab$Content$composable$lambda$lambda_3(items))));
      return Unit_getInstance();
    };
  }
  function ProjectsTab$Content$composable$lambda_1($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.Content$composable_xd8m9d_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProjectsTab() {
    ProjectsTab_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(ProjectsTab).get_options_jecmyz_k$ = function () {
    illegalDecoyCallException('<get-options>');
  };
  protoOf(ProjectsTab).Content_9ghzef_k$ = function () {
    illegalDecoyCallException('Content');
  };
  protoOf(ProjectsTab).$get_options$$composable_m5e2i1_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(373631954);
    if (isTraceInProgress()) {
      traceEventStart(373631954, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.$get-options$$composable (ProjectsTab.kt:52)');
    }
    var icon = rememberVectorPainter$composable(get_Code(FeatherIcons_getInstance()), $composer_0, 0);
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
    if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.$get-options$$composable.<anonymous>' call
      var value = new TabOptions(_UShort___init__impl__jigrne(1), 'Projects', icon);
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
  protoOf(ProjectsTab).Content$composable_xd8m9d_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-500668200);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-500668200, $changed, -1, 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable (ProjectsTab.kt:66)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(1377488276);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>' call
        var value = ProjectsTab$Content$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var json = Json(VOID, tmpCache);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var string = get_jsonString();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = json.get_serializersModule_piitvg_k$();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ProjectCard), arrayOf([]), false))]), false));
      var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var projects = json.decodeFromString_jwu9sq_k$(tmp$ret$5, string);
      var windowClass = calculateWindowSizeClass$composable($composer_0, 0);
      var showNavigationRail = !(windowClass.get_widthSizeClass_2320u1_k$() === Companion_getInstance().get_Compact_17mu13_k$());
      var tmp_1 = new Fixed(showNavigationRail ? 2 : 1);
      $composer_0.startReplaceableGroup_ip860b_k$(1377488624);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(projects);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_3.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'br.mrenann.dev.portfolio.ui.tabs.ProjectsTab.Content$composable.<anonymous>' call
        var value_0 = ProjectsTab$Content$composable$lambda_0(projects);
        this_3.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmpCache_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LazyVerticalGrid$composable(tmp_1, null, null, null, false, null, null, null, false, tmpCache_0, $composer_0, 0, 510);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(ProjectsTab$Content$composable$lambda_1(this, $changed));
    }
  };
  var ProjectsTab_instance;
  function ProjectsTab_getInstance() {
    if (ProjectsTab_instance == null)
      new ProjectsTab();
    return ProjectsTab_instance;
  }
  function openUrl(url) {
    if (url == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'br.mrenann.dev.portfolio.openUrl.<anonymous>' call
      window.open(url);
    }
  }
  function SystemAppearance(isDark) {
    illegalDecoyCallException('SystemAppearance');
  }
  function SystemAppearance$composable(isDark, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-907147860);
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-907147860, $changed, -1, 'br.mrenann.dev.portfolio.resource.theme.SystemAppearance$composable (Theme.js.kt:5)');
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(SystemAppearance$composable$lambda(isDark, $changed));
    }
  }
  function SystemAppearance$composable$lambda($isDark, $$changed) {
    return function ($composer, $force) {
      SystemAppearance$composable($isDark, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1587894689, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:11)');
      }
      Napier_getInstance().base_s0fpe2_k$(new DebugAntilog());
      App$composable(null, $composer_0, 0, 1);
      var userAgent = navigator.userAgent;
      console.log(userAgent);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-1587894689, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    CanvasBasedWindow$composable('Portfolio', VOID, VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf(HomeScreen).get_key_18j28a_k$ = get_key;
  protoOf(ContactTab).get_key_18j28a_k$ = get_key;
  protoOf(EducationTab).get_key_18j28a_k$ = get_key;
  protoOf(HomeTab).get_key_18j28a_k$ = get_key;
  protoOf(ProjectsTab).get_key_18j28a_k$ = get_key;
  //endregion
  //region block: init
  jsonString = '[\n    {\n        "id": "1",\n        "nome": "Made in Brasil",\n        "descricao": "info@abhiandroid.com",\n        "imagem": "https://play-lh.googleusercontent.com/8pTlXKLNY7rKO_uda4e1TC-uJP51cSZAESg6kswENE-5m146-PS5paBdv5C-d28SIRez=w240-h480-rw",\n        "categoria": "Entretenimento",\n        "acesso": "+10",\n        "url": "https://play.google.com/store/apps/details?id=com.dh.madeinbrasil"\n    },\n    {\n        "id": "2",\n        "nome": "Orcim",\n        "descricao": "info@abhiandroid.com",\n        "imagem": "https://play-lh.googleusercontent.com/7rIRaWIFA7b1kLYHdmZmSbit-fpWuV2YhmjG0aIPKs_rgE4KrzFHyYfvCvPxfxHrlw=w240-h480",\n        "categoria": "Educa\xE7\xE3o",\n        "acesso": "+10",\n        "url": "https://play.google.com/store/apps/details?id=com.projetomob"\n    }\n]';
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Portfolio-composeApp.js.map
