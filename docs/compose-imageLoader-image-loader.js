(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-geometry.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-runtime.js', './okio-parent-okio.js', './ktor-ktor-utils.js', './skiko-kjs.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './uri-kmp-uri.js', './compose-multiplatform-core-ui-unit.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./okio-parent-okio.js'), require('./ktor-ktor-utils.js'), require('./skiko-kjs.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./uri-kmp-uri.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['okio-parent-okio'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'okio-parent-okio' was not found. Please, check whether 'okio-parent-okio' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['uri-kmp-uri'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'uri-kmp-uri' was not found. Please, check whether 'uri-kmp-uri' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    if (typeof this['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'compose-imageLoader-image-loader'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'compose-imageLoader-image-loader'.");
    }
    root['compose-imageLoader-image-loader'] = factory(typeof this['compose-imageLoader-image-loader'] === 'undefined' ? {} : this['compose-imageLoader-image-loader'], this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-geometry'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-runtime'], this['okio-parent-okio'], this['ktor-ktor-utils'], this['skiko-kjs'], this['ktor-ktor-http'], this['ktor-ktor-client-core'], this['uri-kmp-uri'], this['compose-multiplatform-core-ui-unit'], this['ktor-ktor-io']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_squareup_okio_okio, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_skiko_skiko, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_com_eygraber_uri, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var VOID = kotlin_kotlin.$_$.g;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var protoOf = kotlin_kotlin.$_$.cf;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var THROW_IAE = kotlin_kotlin.$_$.mk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var Enum = kotlin_kotlin.$_$.xj;
  var classMeta = kotlin_kotlin.$_$.qd;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var CoroutineImpl = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var isInterface = kotlin_kotlin.$_$.pe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ic;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.hc;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var catch_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var flowOn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var SuspendFunction1 = kotlin_kotlin.$_$.ad;
  var SuspendFunction2 = kotlin_kotlin.$_$.bd;
  var Annotation = kotlin_kotlin.$_$.pj;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var KProperty0 = kotlin_kotlin.$_$.og;
  var THROW_ISE = kotlin_kotlin.$_$.nk;
  var getLocalDelegateReference = kotlin_kotlin.$_$.zd;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ol;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var FilterQuality = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var withFrameMillis = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Closeable = kotlin_com_squareup_okio_okio.$_$.d;
  var Long = kotlin_kotlin.$_$.dk;
  var toLong = kotlin_kotlin.$_$.ff;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var numberToLong = kotlin_kotlin.$_$.ze;
  var coerceIn = kotlin_kotlin.$_$.eg;
  var Exception = kotlin_kotlin.$_$.zj;
  var equals = kotlin_kotlin.$_$.ud;
  var buffer = kotlin_com_squareup_okio_okio.$_$.k;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var EOFException = kotlin_com_squareup_okio_okio.$_$.e;
  var addSuppressed = kotlin_kotlin.$_$.zk;
  var ensureNotNull = kotlin_kotlin.$_$.fl;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.l;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i3;
  var indexOf = kotlin_kotlin.$_$.qh;
  var startsWith = kotlin_kotlin.$_$.oi;
  var charArrayOf = kotlin_kotlin.$_$.ld;
  var split = kotlin_kotlin.$_$.mi;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o3;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var booleanArray = kotlin_kotlin.$_$.jd;
  var longArray = kotlin_kotlin.$_$.ve;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var StringBuilder = kotlin_kotlin.$_$.dh;
  var toLong_0 = kotlin_kotlin.$_$.cj;
  var NumberFormatException = kotlin_kotlin.$_$.hk;
  var IOException = kotlin_com_squareup_okio_okio.$_$.h;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.l1;
  var ForwardingFileSystem = kotlin_com_squareup_okio_okio.$_$.g;
  var blackholeSink = kotlin_com_squareup_okio_okio.$_$.j;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var copyToArray = kotlin_kotlin.$_$.r8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var Companion_getInstance_2 = kotlin_com_squareup_okio_okio.$_$.b;
  var plus = kotlin_kotlin.$_$.na;
  var emptySet = kotlin_kotlin.$_$.w8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var toSet = kotlin_kotlin.$_$.zb;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var firstOrNull = kotlin_kotlin.$_$.d9;
  var plus_0 = kotlin_kotlin.$_$.pa;
  var to = kotlin_kotlin.$_$.bm;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.y2;
  var hashCode = kotlin_kotlin.$_$.ee;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var objectCreate = kotlin_kotlin.$_$.af;
  var removePrefix = kotlin_kotlin.$_$.fi;
  var removeSuffix = kotlin_kotlin.$_$.gi;
  var last = kotlin_kotlin.$_$.ea;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.c;
  var decodeBase64Bytes = kotlin_io_ktor_ktor_utils.$_$.y;
  var Bitmap = kotlin_org_jetbrains_skiko_skiko.$_$.z8;
  var Url = kotlin_io_ktor_ktor_http.$_$.w;
  var contentType = kotlin_io_ktor_ktor_http.$_$.d1;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var url = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.e;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var isSuccess = kotlin_io_ktor_ktor_http.$_$.f1;
  var lazy = kotlin_kotlin.$_$.nl;
  var RuntimeException = kotlin_kotlin.$_$.kk;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.x2;
  var captureStack = kotlin_kotlin.$_$.kd;
  var KProperty1 = kotlin_kotlin.$_$.pg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Url_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance_3 = kotlin_com_eygraber_uri.$_$.a;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.x5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q3;
  var createFailure = kotlin_kotlin.$_$.el;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.r3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.u3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.s3;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.t3;
  var emptyMap = kotlin_kotlin.$_$.v8;
  var toMutableMap = kotlin_kotlin.$_$.yb;
  var getBooleanHashCode = kotlin_kotlin.$_$.yd;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var getObjectHashCode = kotlin_kotlin.$_$.be;
  var numberToInt = kotlin_kotlin.$_$.ye;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t3;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var FileNotFoundException = kotlin_com_squareup_okio_okio.$_$.f;
  var Sink = kotlin_com_squareup_okio_okio.$_$.i;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.f;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var cancel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var plus_1 = kotlin_kotlin.$_$.pl;
  var MutableMap = kotlin_kotlin.$_$.d7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Js_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var asComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var BitmapPainter_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var coerceAtMost = kotlin_kotlin.$_$.ag;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var Semaphore = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var compareTo = kotlin_kotlin.$_$.rd;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var sum = kotlin_kotlin.$_$.ib;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var KMutableProperty1 = kotlin_kotlin.$_$.ng;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BitmapConfig, 'BitmapConfig', classMeta, Enum);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ImageLoader, 'ImageLoader', interfaceMeta);
  setMetadataFor(RealImageLoader$async$slambda, 'RealImageLoader$async$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RealImageLoader$async$slambda_1, 'RealImageLoader$async$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(RealImageLoader, 'RealImageLoader', classMeta, VOID, [ImageLoader]);
  setMetadataFor(ImageLoaderConfig, 'ImageLoaderConfig', classMeta);
  setMetadataFor(ImageLoaderConfigBuilder, 'ImageLoaderConfigBuilder', classMeta);
  setMetadataFor(Poko, 'Poko', classMeta, VOID, [Annotation]);
  setMetadataFor(EmptyPainter, 'EmptyPainter', objectMeta, Painter);
  setMetadataFor(rememberImageSuccessPainter$composable$slambda, 'rememberImageSuccessPainter$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(CachePolicy, 'CachePolicy', classMeta, Enum);
  setMetadataFor(Snapshot, 'Snapshot', interfaceMeta, VOID, [Closeable]);
  setMetadataFor(Editor, 'Editor', interfaceMeta);
  setMetadataFor(DiskCache, 'DiskCache', interfaceMeta);
  setMetadataFor(DiskCacheBuilder, 'DiskCacheBuilder', classMeta);
  setMetadataFor(Snapshot_0, 'Snapshot', classMeta, VOID, [Closeable]);
  setMetadataFor(Editor_0, 'Editor', classMeta);
  setMetadataFor(Entry, 'Entry', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DiskLruCache$fileSystem$1, VOID, classMeta, ForwardingFileSystem);
  setMetadataFor(DiskLruCache$launchCleanup$slambda, 'DiskLruCache$launchCleanup$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(DiskLruCache, 'DiskLruCache', classMeta, VOID, [Closeable]);
  setMetadataFor(ForwardingSink, 'ForwardingSink', classMeta, VOID, [Sink]);
  setMetadataFor(FaultHidingSink, 'FaultHidingSink', classMeta, ForwardingSink);
  setMetadataFor(RealSnapshot, 'RealSnapshot', classMeta, VOID, [Snapshot]);
  setMetadataFor(RealEditor, 'RealEditor', classMeta, VOID, [Editor]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RealDiskCache, 'RealDiskCache', classMeta, VOID, [DiskCache]);
  setMetadataFor(MemoryCache, 'MemoryCache', interfaceMeta);
  setMetadataFor(MemoryCacheBuilder, 'MemoryCacheBuilder', classMeta);
  setMetadataFor(RealMemoryCache, 'RealMemoryCache', classMeta, VOID, [MemoryCache]);
  setMetadataFor(StrongMemoryCache, 'StrongMemoryCache', interfaceMeta);
  setMetadataFor(InternalValue, 'InternalValue', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(RealStrongMemoryCache$cache$1, VOID, classMeta, LruCache);
  setMetadataFor(RealStrongMemoryCache, 'RealStrongMemoryCache', classMeta, VOID, [StrongMemoryCache]);
  setMetadataFor(EmptyStrongMemoryCache, 'EmptyStrongMemoryCache', classMeta, VOID, [StrongMemoryCache]);
  setMetadataFor(WeakMemoryCache, 'WeakMemoryCache', interfaceMeta);
  setMetadataFor(InternalValue_0, 'InternalValue', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RealWeakMemoryCache, 'RealWeakMemoryCache', classMeta, VOID, [WeakMemoryCache]);
  setMetadataFor(EmptyWeakMemoryCache, 'EmptyWeakMemoryCache', classMeta, VOID, [WeakMemoryCache], EmptyWeakMemoryCache);
  setMetadataFor(ComponentRegistry, 'ComponentRegistry', classMeta);
  setMetadataFor(ComponentRegistryBuilder, 'ComponentRegistryBuilder', classMeta);
  setMetadataFor(Factory, 'Factory', interfaceMeta);
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DecodeResult, 'DecodeResult', interfaceMeta);
  setMetadataFor(OfBitmap, 'OfBitmap', classMeta, VOID, [DecodeResult]);
  setMetadataFor(OfImage, 'OfImage', classMeta, VOID, [DecodeResult]);
  setMetadataFor(OfPainter, 'OfPainter', classMeta, VOID, [DecodeResult]);
  setMetadataFor(Factory_2, 'Factory', interfaceMeta);
  setMetadataFor(Factory_0, 'Factory', classMeta, VOID, [Factory_2], Factory_0);
  setMetadataFor(Fetcher, 'Fetcher', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Base64Fetcher, 'Base64Fetcher', classMeta, VOID, [Fetcher], VOID, VOID, VOID, [0]);
  setMetadataFor(Factory_1, 'Factory', classMeta, VOID, [Factory_2], Factory_1);
  setMetadataFor(BitmapFetcher, 'BitmapFetcher', classMeta, VOID, [Fetcher], VOID, VOID, VOID, [0]);
  setMetadataFor(FetchResult, 'FetchResult', interfaceMeta);
  setMetadataFor(OfSource, 'OfSource', classMeta, VOID, [FetchResult]);
  setMetadataFor(OfBitmap_0, 'OfBitmap', classMeta, VOID, [FetchResult]);
  setMetadataFor(OfImage_0, 'OfImage', classMeta, VOID, [FetchResult]);
  setMetadataFor(OfPainter_0, 'OfPainter', classMeta, VOID, [FetchResult]);
  setMetadataFor(Factory_3, 'Factory', classMeta, VOID, [Factory_2]);
  setMetadataFor($fetchCOROUTINE$0, '$fetchCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(KtorUrlFetcher, 'KtorUrlFetcher', classMeta, VOID, [Fetcher], VOID, VOID, VOID, [0]);
  setMetadataFor(KtorUrlRequestException, 'KtorUrlRequestException', classMeta, RuntimeException);
  setMetadataFor(Type, 'Type', classMeta, Enum);
  setMetadataFor(Keyer, 'Keyer', interfaceMeta);
  setMetadataFor(KtorUrlKeyer, 'KtorUrlKeyer', classMeta, VOID, [Keyer], KtorUrlKeyer);
  setMetadataFor(Mapper, 'Mapper', interfaceMeta);
  setMetadataFor(KtorUrlMapper, 'KtorUrlMapper', classMeta, VOID, [Mapper], KtorUrlMapper);
  setMetadataFor(StringUriMapper, 'StringUriMapper', classMeta, VOID, [Mapper], StringUriMapper);
  setMetadataFor($proceedCOROUTINE$1, '$proceedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($decodeCOROUTINE$2, '$decodeCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Interceptor, 'Interceptor', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DecodeInterceptor, 'DecodeInterceptor', classMeta, VOID, [Interceptor], DecodeInterceptor, VOID, VOID, [1, 2, 3]);
  setMetadataFor($interceptCOROUTINE$3, '$interceptCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(DiskCacheInterceptor, 'DiskCacheInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, VOID, [1]);
  setMetadataFor($interceptCOROUTINE$4, '$interceptCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor($fetchCOROUTINE$5, '$fetchCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(FetchInterceptor, 'FetchInterceptor', classMeta, VOID, [Interceptor], FetchInterceptor, VOID, VOID, [1, 3]);
  setMetadataFor(Chain, 'Chain', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Interceptor], VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptorChainHelper, 'InterceptorChainHelper', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptorChainImpl, 'InterceptorChainImpl', classMeta, VOID, [Chain], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Interceptor], VOID, VOID, VOID, [1]);
  setMetadataFor(InterceptorsBuilder, 'InterceptorsBuilder', classMeta);
  setMetadataFor(Interceptors, 'Interceptors', classMeta);
  setMetadataFor(MemoryCacheWrapper, 'MemoryCacheWrapper', classMeta);
  setMetadataFor(MappedInterceptor, 'MappedInterceptor', classMeta, VOID, [Interceptor], MappedInterceptor, VOID, VOID, [1]);
  setMetadataFor($interceptCOROUTINE$6, '$interceptCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(MemoryCacheInterceptor, 'MemoryCacheInterceptor', classMeta, VOID, [Interceptor], VOID, VOID, VOID, [1]);
  setMetadataFor(DataSource, 'DataSource', classMeta, Enum);
  setMetadataFor(ImageAction, 'ImageAction', interfaceMeta);
  setMetadataFor(Loading, 'Loading', interfaceMeta, VOID, [ImageAction]);
  setMetadataFor(Success, 'Success', interfaceMeta, VOID, [ImageAction]);
  setMetadataFor(Failure, 'Failure', interfaceMeta, VOID, [ImageAction]);
  setMetadataFor(ImageEvent, 'ImageEvent', interfaceMeta, VOID, [Loading]);
  setMetadataFor(Start, 'Start', objectMeta, VOID, [ImageEvent]);
  setMetadataFor(StartWithMemory, 'StartWithMemory', objectMeta, VOID, [ImageEvent]);
  setMetadataFor(StartWithDisk, 'StartWithDisk', objectMeta, VOID, [ImageEvent]);
  setMetadataFor(StartWithFetch, 'StartWithFetch', objectMeta, VOID, [ImageEvent]);
  setMetadataFor(ImageResult, 'ImageResult', interfaceMeta, VOID, [ImageAction]);
  setMetadataFor(OfBitmap_1, 'OfBitmap', classMeta, VOID, [ImageResult, Success]);
  setMetadataFor(OfImage_1, 'OfImage', classMeta, VOID, [ImageResult, Success]);
  setMetadataFor(OfPainter_1, 'OfPainter', classMeta, VOID, [ImageResult, Success]);
  setMetadataFor(OfError, 'OfError', classMeta, VOID, [ImageResult, Failure]);
  setMetadataFor(OfSource_0, 'OfSource', classMeta, VOID, [ImageResult, Failure]);
  setMetadataFor(ImageRequestBuilder, 'ImageRequestBuilder', classMeta);
  setMetadataFor(ImageRequest_1, 'ImageRequest', classMeta);
  setMetadataFor(NullRequestData, 'NullRequestData', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Options, 'Options', classMeta);
  setMetadataFor(OptionsBuilder, 'OptionsBuilder', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta, Enum);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(SizeResolver, 'SizeResolver', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(RealSizeResolver, 'RealSizeResolver', classMeta, VOID, [SizeResolver], VOID, VOID, VOID, [0]);
  setMetadataFor(AnimationPainter, 'AnimationPainter', interfaceMeta);
  setMetadataFor(DrawCache, 'DrawCache', classMeta, VOID, VOID, DrawCache);
  setMetadataFor(Logger, 'Logger', interfaceMeta);
  setMetadataFor(Logger$Companion$None$1, VOID, classMeta, VOID, [Logger]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(LogPriority, 'LogPriority', classMeta, Enum);
  setMetadataFor(LruHashMap, 'LruHashMap', classMeta, VOID, VOID, LruHashMap);
  setMetadataFor($sourceCOROUTINE$7, '$sourceCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  setMetadataFor(ImageLoaderProvidableCompositionLocal, 'ImageLoaderProvidableCompositionLocal', classMeta);
  setMetadataFor(Factory_4, 'Factory', classMeta, VOID, [Factory], Factory_4);
  setMetadataFor(GifDecoder, 'GifDecoder', classMeta, VOID, [Decoder], VOID, VOID, VOID, [0]);
  setMetadataFor(Factory_5, 'Factory', classMeta, VOID, [Factory], Factory_5);
  setMetadataFor($decodeCOROUTINE$8, '$decodeCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(SkiaImageDecoder, 'SkiaImageDecoder', classMeta, VOID, [Decoder], VOID, VOID, VOID, [0]);
  setMetadataFor(Factory_6, 'Factory', classMeta, VOID, [Factory]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(SvgDecoder, 'SvgDecoder', classMeta, VOID, [Decoder], VOID, VOID, VOID, [0]);
  setMetadataFor(GifPainter, 'GifPainter', classMeta, Painter, [Painter, AnimationPainter, RememberObserver]);
  setMetadataFor(SVGPainter, 'SVGPainter', classMeta, Painter);
  //endregion
  function toPainter(_this__u8e3s4, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance().get_DefaultFilterQuality_7zsczy_k$() : filterQuality;
    return BitmapPainter(asImageBitmap(_this__u8e3s4), VOID, VOID, filterQuality);
  }
  var BitmapConfig_ALPHA_8_instance;
  var BitmapConfig_ARGB_8888_instance;
  var BitmapConfig_RGBA_F16_instance;
  var BitmapConfig_HARDWARE_instance;
  function Companion() {
    Companion_instance = this;
    this.Default_1 = BitmapConfig_ARGB_8888_getInstance();
  }
  protoOf(Companion).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    BitmapConfig_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [BitmapConfig_ALPHA_8_getInstance(), BitmapConfig_ARGB_8888_getInstance(), BitmapConfig_RGBA_F16_getInstance(), BitmapConfig_HARDWARE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ALPHA_8':
        return BitmapConfig_ALPHA_8_getInstance();
      case 'ARGB_8888':
        return BitmapConfig_ARGB_8888_getInstance();
      case 'RGBA_F16':
        return BitmapConfig_RGBA_F16_getInstance();
      case 'HARDWARE':
        return BitmapConfig_HARDWARE_getInstance();
      default:
        BitmapConfig_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BitmapConfig_entriesInitialized;
  function BitmapConfig_initEntries() {
    if (BitmapConfig_entriesInitialized)
      return Unit_getInstance();
    BitmapConfig_entriesInitialized = true;
    BitmapConfig_ALPHA_8_instance = new BitmapConfig('ALPHA_8', 0);
    BitmapConfig_ARGB_8888_instance = new BitmapConfig('ARGB_8888', 1);
    BitmapConfig_RGBA_F16_instance = new BitmapConfig('RGBA_F16', 2);
    BitmapConfig_HARDWARE_instance = new BitmapConfig('HARDWARE', 3);
    Companion_getInstance_12();
  }
  var $ENTRIES;
  function BitmapConfig(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BitmapConfig_ALPHA_8_getInstance() {
    BitmapConfig_initEntries();
    return BitmapConfig_ALPHA_8_instance;
  }
  function BitmapConfig_ARGB_8888_getInstance() {
    BitmapConfig_initEntries();
    return BitmapConfig_ARGB_8888_instance;
  }
  function BitmapConfig_RGBA_F16_getInstance() {
    BitmapConfig_initEntries();
    return BitmapConfig_RGBA_F16_instance;
  }
  function BitmapConfig_HARDWARE_getInstance() {
    BitmapConfig_initEntries();
    return BitmapConfig_HARDWARE_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ImageLoader() {
  }
  function ImageLoader_0(requestCoroutineContext, block) {
    requestCoroutineContext = requestCoroutineContext === VOID ? get_ioDispatcher() : requestCoroutineContext;
    return new RealImageLoader(requestCoroutineContext, ImageLoaderConfig_0(block));
  }
  function RealImageLoader$async$slambda$lambda($initialSize) {
    return function ($this$Options) {
      var tmp;
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = $initialSize;
      if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_0().get_Unspecified_3ttj0y_k$()))) {
        $this$Options.set_size_6a0e6q_k$($initialSize);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_requestCoroutineContext__yqejyt($this) {
    return $this.requestCoroutineContext_1;
  }
  function RealImageLoader$async$slambda($request, this$0, resultContinuation) {
    this.$request_1 = $request;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$async$slambda).invoke_c0i4r1_k$ = function ($this$flow, $completion) {
    var tmp = this.create_42uxqx_k$($this$flow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$async$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c0i4r1_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$async$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            if (!this.$request_1.get_skipEvent_s9r70u_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$this$flow_1.emit_t92u1f_k$(Start_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.$request_1.get_sizeResolver_v7l9bk_k$().size_doafsa_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.unboxed0__1 = suspendResult.packedValue_1;
            suspendResult = new Size(this.unboxed0__1);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.initialSize1__1 = suspendResult.packedValue_1;
            var tmp_0 = this;
            var tmp_1 = this.this$0__1.config_1.get_defaultOptions_p6uk0q_k$();
            tmp_0.options2__1 = Options_0(tmp_1, RealImageLoader$async$slambda$lambda(this.initialSize1__1));
            this.chain3__1 = InterceptorChainImpl_init_$Create$(this.$request_1, this.options2__1, this.this$0__1.config_1, this.$this$flow_1);
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.chain3__1.proceed_46izof_k$(this.$request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.ARGUMENT4__1 = suspendResult;
            this.set_state_rjd8d0_k$(6);
            suspendResult = this.$this$flow_1.emit_t92u1f_k$(this.ARGUMENT4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$async$slambda).create_42uxqx_k$ = function ($this$flow, completion) {
    var i = new RealImageLoader$async$slambda(this.$request_1, this.this$0__1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  protoOf(RealImageLoader$async$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_42uxqx_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$async$slambda_0($request, this$0, resultContinuation) {
    var i = new RealImageLoader$async$slambda($request, this$0, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.invoke_c0i4r1_k$($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader$async$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$async$slambda_1).invoke_gtoule_k$ = function ($this$catch, it, $completion) {
    var tmp = this.create_89247q_k$($this$catch, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$async$slambda_1).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_gtoule_k$(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$async$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.it_1;
            if (!(tmp_0 instanceof CancellationException)) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$this$catch_1.emit_t92u1f_k$(new OfError(this.it_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$async$slambda_1).create_89247q_k$ = function ($this$catch, it, completion) {
    var i = new RealImageLoader$async$slambda_1(completion);
    i.$this$catch_1 = $this$catch;
    i.it_1 = it;
    return i;
  };
  function RealImageLoader$async$slambda_2(resultContinuation) {
    var i = new RealImageLoader$async$slambda_1(resultContinuation);
    var l = function ($this$catch, it, $completion) {
      return i.invoke_gtoule_k$($this$catch, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RealImageLoader(requestCoroutineContext, config) {
    this.requestCoroutineContext_1 = requestCoroutineContext;
    this.config_1 = config;
  }
  protoOf(RealImageLoader).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(RealImageLoader).async_pa7sqr_k$ = function (request) {
    var tmp = flow(RealImageLoader$async$slambda_0(request, this, null));
    return flowOn(catch_0(tmp, RealImageLoader$async$slambda_2(null)), this.requestCoroutineContext_1);
  };
  function get_$stableprop() {
    return 0;
  }
  function ImageLoaderConfig(logger, defaultOptions, componentRegistry, interceptors) {
    this.logger_1 = logger;
    this.defaultOptions_1 = defaultOptions;
    this.componentRegistry_1 = componentRegistry;
    this.interceptors_1 = interceptors;
    this.$stable_1 = 0;
  }
  protoOf(ImageLoaderConfig).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(ImageLoaderConfig).get_defaultOptions_p6uk0q_k$ = function () {
    return this.defaultOptions_1;
  };
  protoOf(ImageLoaderConfig).get_componentRegistry_9xd8z5_k$ = function () {
    return this.componentRegistry_1;
  };
  protoOf(ImageLoaderConfig).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  function _get_interceptorsBuilder__9pbvdo($this) {
    return $this.interceptorsBuilder_1;
  }
  function _get_componentsBuilder__p5hj64($this) {
    return $this.componentsBuilder_1;
  }
  function _get_optionsBuilder__rfyc8i($this) {
    return $this.optionsBuilder_1;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function ImageLoaderConfigBuilder$takeFrom$lambda($config, $clearOptionsExtraData) {
    return function ($this$options) {
      $this$options.takeFrom_7aauhl_k$($config.defaultOptions_1, $clearOptionsExtraData);
      return Unit_getInstance();
    };
  }
  function ImageLoaderConfigBuilder$takeFrom$lambda_0($config, $clearComponents) {
    return function ($this$components) {
      $this$components.takeFrom_ag5gtl_k$($config.componentRegistry_1, $clearComponents);
      return Unit_getInstance();
    };
  }
  function ImageLoaderConfigBuilder$takeFrom$lambda_1($config, $clearInterceptors, $clearMemoryCaches) {
    return function ($this$interceptor) {
      $this$interceptor.takeFrom_lclq2h_k$($config.interceptors_1, $clearInterceptors, $clearMemoryCaches);
      return Unit_getInstance();
    };
  }
  function ImageLoaderConfigBuilder() {
    this.logger_1 = Companion_getInstance_19().get_None_wo6tgh_k$();
    this.interceptorsBuilder_1 = new InterceptorsBuilder();
    this.componentsBuilder_1 = new ComponentRegistryBuilder();
    this.optionsBuilder_1 = new OptionsBuilder();
    this.$stable_1 = 8;
  }
  protoOf(ImageLoaderConfigBuilder).set_logger_66o0ol_k$ = function (_set____db54di) {
    this.logger_1 = _set____db54di;
  };
  protoOf(ImageLoaderConfigBuilder).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(ImageLoaderConfigBuilder).takeFrom_pzidqu_k$ = function (imageLoader, clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches) {
    this.takeFrom_57hnas_k$(imageLoader.get_config_c0698r_k$(), clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches);
  };
  protoOf(ImageLoaderConfigBuilder).takeFrom_57hnas_k$ = function (config, clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches) {
    this.logger_1 = config.logger_1;
    this.options_l3gknx_k$(ImageLoaderConfigBuilder$takeFrom$lambda(config, clearOptionsExtraData));
    this.components_ceekwt_k$(ImageLoaderConfigBuilder$takeFrom$lambda_0(config, clearComponents));
    this.interceptor_6rr2f9_k$(ImageLoaderConfigBuilder$takeFrom$lambda_1(config, clearInterceptors, clearMemoryCaches));
  };
  protoOf(ImageLoaderConfigBuilder).takeFrom$default_42scc2_k$ = function (config, clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches, $super) {
    clearOptionsExtraData = clearOptionsExtraData === VOID ? false : clearOptionsExtraData;
    clearComponents = clearComponents === VOID ? false : clearComponents;
    clearInterceptors = clearInterceptors === VOID ? false : clearInterceptors;
    clearMemoryCaches = clearMemoryCaches === VOID ? false : clearMemoryCaches;
    var tmp;
    if ($super === VOID) {
      this.takeFrom_57hnas_k$(config, clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.takeFrom_57hnas_k$.call(this, config, clearOptionsExtraData, clearComponents, clearInterceptors, clearMemoryCaches);
    }
    return tmp;
  };
  protoOf(ImageLoaderConfigBuilder).interceptor_6rr2f9_k$ = function (builder) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.interceptorsBuilder_1);
  };
  protoOf(ImageLoaderConfigBuilder).components_ceekwt_k$ = function (builder) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.componentsBuilder_1);
  };
  protoOf(ImageLoaderConfigBuilder).options_l3gknx_k$ = function (builder) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.optionsBuilder_1);
  };
  protoOf(ImageLoaderConfigBuilder).build_1k0s4u_k$ = function () {
    var tmp0_logger = this.logger_1;
    var tmp1_defaultOptions = this.optionsBuilder_1.build_1k0s4u_k$();
    var tmp2_interceptors = this.interceptorsBuilder_1.build_1k0s4u_k$();
    var tmp3_componentRegistry = this.componentsBuilder_1.build_1k0s4u_k$();
    return new ImageLoaderConfig(tmp0_logger, tmp1_defaultOptions, tmp3_componentRegistry, tmp2_interceptors);
  };
  function ImageLoaderConfig_0(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ImageLoaderConfigBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function Poko() {
  }
  protoOf(Poko).equals = function (other) {
    if (!(other instanceof Poko))
      return false;
    other instanceof Poko || THROW_CCE();
    return true;
  };
  protoOf(Poko).hashCode = function () {
    return 0;
  };
  protoOf(Poko).toString = function () {
    return '@com.seiko.imageloader.Poko()';
  };
  function rememberImagePainter$composable(url, imageLoader, filterQuality, placeholderPainter, errorPainter, $composer, $changed, $default) {
    var imageLoader_0 = imageLoader;
    var filterQuality_0 = filterQuality;
    var placeholderPainter_0 = placeholderPainter;
    var errorPainter_0 = errorPainter;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1251810085);
    sourceInformation($composer_0, 'C(rememberImagePainter$composable)P(4,2,1:c#ui.graphics.FilterQuality,3)');
    if (!(($default & 2) === 0)) {
      // Inline function 'com.seiko.imageloader.ImageLoaderProvidableCompositionLocal.$get-current$$composable' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalImageLoader().get_delegate_i94tki_k$();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_2);
      imageLoader_0 = tmp0;
    }
    if (!(($default & 4) === 0))
      filterQuality_0 = Companion_getInstance().get_DefaultFilterQuality_7zsczy_k$();
    if (!(($default & 8) === 0))
      placeholderPainter_0 = null;
    if (!(($default & 16) === 0))
      errorPainter_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(1251810085, $changed, -1, 'com.seiko.imageloader.rememberImagePainter$composable (Remember.ext.kt:37)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_3.changed_ga7h3f_k$(url);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_3.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      // Inline function 'com.seiko.imageloader.rememberImagePainter$composable.<anonymous>' call
      // Inline function 'com.seiko.imageloader.model.ImageRequest' call
      var value = ImageRequest_2(rememberImagePainter$composable$lambda_0(url));
      $composer_3.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_3.endReplaceableGroup_ern0ak_k$();
    var request = tmp0_0;
    var tmp0_1 = rememberImagePainter$composable_0(request, imageLoader_0, filterQuality_0, placeholderPainter_0, errorPainter_0, $composer_0, 112 & $changed | 896 & $changed | 7168 & $changed | 57344 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_1;
  }
  function rememberImagePainter$composable_0(request, imageLoader, filterQuality, placeholderPainter, errorPainter, $composer, $changed, $default) {
    var imageLoader_0 = imageLoader;
    var filterQuality_0 = filterQuality;
    var placeholderPainter_0 = placeholderPainter;
    var errorPainter_0 = errorPainter;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(37605453);
    sourceInformation($composer_0, 'C(rememberImagePainter$composable)P(4,2,1:c#ui.graphics.FilterQuality,3)');
    if (!(($default & 2) === 0)) {
      // Inline function 'com.seiko.imageloader.ImageLoaderProvidableCompositionLocal.$get-current$$composable' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalImageLoader().get_delegate_i94tki_k$();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_2);
      imageLoader_0 = tmp0;
    }
    if (!(($default & 4) === 0))
      filterQuality_0 = Companion_getInstance().get_DefaultFilterQuality_7zsczy_k$();
    if (!(($default & 8) === 0))
      placeholderPainter_0 = null;
    if (!(($default & 16) === 0))
      errorPainter_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(37605453, $changed, -1, 'com.seiko.imageloader.rememberImagePainter$composable (Remember.ext.kt:73)');
    }
    var action$delegate = rememberImageAction$composable(request, imageLoader_0, $composer_0, 14 & $changed | 112 & $changed, 0);
    var tmp0_0 = rememberImageActionPainter$composable(rememberImagePainter$composable$lambda(action$delegate), filterQuality_0, placeholderPainter_0, errorPainter_0, $composer_0, 112 & $changed >> 3 | 896 & $changed >> 3 | 7168 & $changed >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function rememberImagePainter$composable$lambda($action$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('action', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $action$delegate.get_value_j01efc_k$();
  }
  function rememberImagePainter$composable$lambda_0($data) {
    return function ($this$ImageRequest) {
      $this$ImageRequest.data_w8755n_k$($data);
      return Unit_getInstance();
    };
  }
  function rememberImageActionPainter$composable(action, filterQuality, placeholderPainter, errorPainter, $composer, $changed, $default) {
    var filterQuality_0 = filterQuality;
    var placeholderPainter_0 = placeholderPainter;
    var errorPainter_0 = errorPainter;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1955391806);
    sourceInformation($composer_0, 'C(rememberImageActionPainter$composable)P(!1,2:c#ui.graphics.FilterQuality,3)');
    if (!(($default & 2) === 0))
      filterQuality_0 = Companion_getInstance().get_DefaultFilterQuality_7zsczy_k$();
    if (!(($default & 4) === 0))
      placeholderPainter_0 = null;
    if (!(($default & 8) === 0))
      errorPainter_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1955391806, $changed, -1, 'com.seiko.imageloader.rememberImageActionPainter$composable (Remember.kt:35)');
    }
    var tmp;
    if (isInterface(action, Success)) {
      $composer_0.startReplaceableGroup_ip860b_k$(-828582767);
      var tmp3_group = rememberImageSuccessPainter$composable(action, filterQuality_0, $composer_0, 112 & $changed, 0);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp3_group;
    } else {
      if (isInterface(action, Loading)) {
        $composer_0.startReplaceableGroup_ip860b_k$(-828582682);
        var tmp1_safe_receiver = placeholderPainter_0;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver($composer_0, 14 & $changed >> 6);
        var tmp4_group = tmp2_elvis_lhs == null ? EmptyPainter_getInstance() : tmp2_elvis_lhs;
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp4_group;
      } else {
        if (isInterface(action, Failure)) {
          $composer_0.startReplaceableGroup_ip860b_k$(-828582603);
          var tmp3_safe_receiver = errorPainter_0;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver($composer_0, 14 & $changed >> 9);
          var tmp5_group = tmp4_elvis_lhs == null ? EmptyPainter_getInstance() : tmp4_elvis_lhs;
          $composer_0.endReplaceableGroup_ern0ak_k$();
          tmp = tmp5_group;
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(-828584171);
          $composer_0.endReplaceableGroup_ern0ak_k$();
          noWhenBranchMatchedException();
        }
      }
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function rememberImageAction$composable(request, imageLoader, $composer, $changed, $default) {
    var imageLoader_0 = {_v: imageLoader};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-370922173);
    sourceInformation($composer_0, 'C(rememberImageAction$composable)P(1)');
    if (!(($default & 2) === 0)) {
      // Inline function 'com.seiko.imageloader.ImageLoaderProvidableCompositionLocal.$get-current$$composable' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalImageLoader().get_delegate_i94tki_k$();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_2);
      imageLoader_0._v = tmp0;
    }
    if (isTraceInProgress()) {
      traceEventStart(-370922173, $changed, -1, 'com.seiko.imageloader.rememberImageAction$composable (Remember.kt:23)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key2 = imageLoader_0._v;
    var $composer_3 = $composer_0;
    $composer_3.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_3, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_3.changed_ga7h3f_k$(request) | $composer_3.changed_ga7h3f_k$(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_3.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      // Inline function 'com.seiko.imageloader.rememberImageAction$composable.<anonymous>' call
      var value = imageLoader_0._v.async_pa7sqr_k$(request);
      $composer_3.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_3.endReplaceableGroup_ern0ak_k$();
    var tmp_1 = tmp0_0;
    var tmp_2 = Start_getInstance();
    var tmp0_1 = collectAsState$composable(tmp_1, tmp_2, null, $composer_0, 48, 2);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_1;
  }
  function rememberImageSuccessPainter$composable(action, filterQuality, $composer, $changed, $default) {
    var filterQuality_0 = {_v: new FilterQuality(filterQuality)};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-871920474);
    sourceInformation($composer_0, 'C(rememberImageSuccessPainter$composable)P(!,1:c#ui.graphics.FilterQuality)');
    if (!(($default & 2) === 0)) {
      filterQuality_0._v = new FilterQuality(Companion_getInstance().get_DefaultFilterQuality_7zsczy_k$());
    }
    if (isTraceInProgress()) {
      traceEventStart(-871920474, $changed, -1, 'com.seiko.imageloader.rememberImageSuccessPainter$composable (Remember.kt:59)');
    }
    // Inline function 'kotlin.also' call
    var tmp;
    if (action instanceof OfPainter_1) {
      $composer_0.startReplaceableGroup_ip860b_k$(1853127339);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(action);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.seiko.imageloader.rememberImageSuccessPainter$composable.<anonymous>' call
        var value = action.get_painter_bzl4ri_k$();
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp0;
    } else {
      if (action instanceof OfBitmap_1) {
        $composer_0.startReplaceableGroup_ip860b_k$(1853127430);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key2 = filterQuality_0._v;
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-1124426577);
        sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_2.changed_ga7h3f_k$(action) | $composer_2.changed_ga7h3f_k$(key2));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 ? true : it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.seiko.imageloader.rememberImageSuccessPainter$composable.<anonymous>' call
          var value_0 = toPainter(action.get_bitmap_bfxu7s_k$(), filterQuality_0._v.value_1);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        tmp = tmp0_0;
      } else {
        if (action instanceof OfImage_1) {
          $composer_0.startReplaceableGroup_ip860b_k$(1853127559);
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_3 = $composer_0;
          $composer_3.startReplaceableGroup_ip860b_k$(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_3.changed_ga7h3f_k$(action);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_3.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (invalid_1 ? true : it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            // Inline function 'com.seiko.imageloader.rememberImageSuccessPainter$composable.<anonymous>' call
            var value_1 = toPainter_0(action.get_image_it3i2a_k$());
            $composer_3.updateRememberedValue_l1wh71_k$(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp0_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_3.endReplaceableGroup_ern0ak_k$();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          tmp = tmp0_1;
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(1853125124);
          $composer_0.endReplaceableGroup_ern0ak_k$();
          noWhenBranchMatchedException();
        }
      }
    }
    var this_0 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.rememberImageSuccessPainter$composable.<anonymous>' call
    var tmp_6;
    if (isInterface(this_0, AnimationPainter)) {
      tmp_6 = this_0.isPlay_jio0w2_k$();
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      $composer_0.startReplaceableGroup_ip860b_k$(338710109);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_0.changed_ga7h3f_k$(this_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_2 ? true : it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.seiko.imageloader.rememberImageSuccessPainter$composable.<anonymous>.<anonymous>' call
        var value_2 = rememberImageSuccessPainter$composable$slambda_0(this_0, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmpCache = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(this_0, tmpCache, $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return this_0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function EmptyPainter() {
    EmptyPainter_instance = this;
    Painter.call(this);
    this.$stable_1 = 0;
  }
  protoOf(EmptyPainter).get_intrinsicSize_culx5t_k$ = function () {
    return Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
  };
  protoOf(EmptyPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    return Unit_getInstance();
  };
  var EmptyPainter_instance;
  function EmptyPainter_getInstance() {
    if (EmptyPainter_instance == null)
      new EmptyPainter();
    return EmptyPainter_instance;
  }
  function rememberImageSuccessPainter$composable$slambda$lambda($painter) {
    return function (frameTimeMillis) {
      $painter.update_c5t023_k$(frameTimeMillis);
      return Unit_getInstance();
    };
  }
  function rememberImageSuccessPainter$composable$slambda($painter, resultContinuation) {
    this.$painter_1 = $painter;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberImageSuccessPainter$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberImageSuccessPainter$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberImageSuccessPainter$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.$painter_1.nextPlay_njzcg7_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = withFrameMillis(rememberImageSuccessPainter$composable$slambda$lambda(this.$painter_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
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
  protoOf(rememberImageSuccessPainter$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberImageSuccessPainter$composable$slambda(this.$painter_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberImageSuccessPainter$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberImageSuccessPainter$composable$slambda_0($painter, resultContinuation) {
    var i = new rememberImageSuccessPainter$composable$slambda($painter, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var CachePolicy_ENABLED_instance;
  var CachePolicy_READ_ONLY_instance;
  var CachePolicy_WRITE_ONLY_instance;
  var CachePolicy_DISABLED_instance;
  function values_0() {
    return [CachePolicy_ENABLED_getInstance(), CachePolicy_READ_ONLY_getInstance(), CachePolicy_WRITE_ONLY_getInstance(), CachePolicy_DISABLED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'ENABLED':
        return CachePolicy_ENABLED_getInstance();
      case 'READ_ONLY':
        return CachePolicy_READ_ONLY_getInstance();
      case 'WRITE_ONLY':
        return CachePolicy_WRITE_ONLY_getInstance();
      case 'DISABLED':
        return CachePolicy_DISABLED_getInstance();
      default:
        CachePolicy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var CachePolicy_entriesInitialized;
  function CachePolicy_initEntries() {
    if (CachePolicy_entriesInitialized)
      return Unit_getInstance();
    CachePolicy_entriesInitialized = true;
    CachePolicy_ENABLED_instance = new CachePolicy('ENABLED', 0, true, true);
    CachePolicy_READ_ONLY_instance = new CachePolicy('READ_ONLY', 1, true, false);
    CachePolicy_WRITE_ONLY_instance = new CachePolicy('WRITE_ONLY', 2, false, true);
    CachePolicy_DISABLED_instance = new CachePolicy('DISABLED', 3, false, false);
  }
  var $ENTRIES_0;
  function CachePolicy(name, ordinal, readEnabled, writeEnabled) {
    Enum.call(this, name, ordinal);
    this.readEnabled_1 = readEnabled;
    this.writeEnabled_1 = writeEnabled;
  }
  protoOf(CachePolicy).get_readEnabled_oyc6n2_k$ = function () {
    return this.readEnabled_1;
  };
  protoOf(CachePolicy).get_writeEnabled_mrjiqz_k$ = function () {
    return this.writeEnabled_1;
  };
  function CachePolicy_ENABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_ENABLED_instance;
  }
  function CachePolicy_READ_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_READ_ONLY_instance;
  }
  function CachePolicy_WRITE_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_WRITE_ONLY_instance;
  }
  function CachePolicy_DISABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_DISABLED_instance;
  }
  function Snapshot() {
  }
  function Editor() {
  }
  function DiskCache() {
  }
  function _get_fileSystem__siywv4($this) {
    return $this.fileSystem_1;
  }
  function _set_directory__nte77c($this, _set____db54di) {
    $this.directory_1 = _set____db54di;
  }
  function _get_directory__hwved8($this) {
    return $this.directory_1;
  }
  function _set_maxSizePercent__ni8lpl($this, _set____db54di) {
    $this.maxSizePercent_1 = _set____db54di;
  }
  function _get_maxSizePercent__20uubv($this) {
    return $this.maxSizePercent_1;
  }
  function _set_minimumMaxSizeBytes__i6frm7($this, _set____db54di) {
    $this.minimumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_minimumMaxSizeBytes__4vpipv($this) {
    return $this.minimumMaxSizeBytes_1;
  }
  function _set_maximumMaxSizeBytes__bf7tt($this, _set____db54di) {
    $this.maximumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_maximumMaxSizeBytes__czb12j($this) {
    return $this.maximumMaxSizeBytes_1;
  }
  function _set_maxSizeBytes__bar9an($this, _set____db54di) {
    $this.maxSizeBytes_1 = _set____db54di;
  }
  function _get_maxSizeBytes__48zh9h($this) {
    return $this.maxSizeBytes_1;
  }
  function _set_cleanupDispatcher__3laldm($this, _set____db54di) {
    $this.cleanupDispatcher_1 = _set____db54di;
  }
  function _get_cleanupDispatcher__i4iawq($this) {
    return $this.cleanupDispatcher_1;
  }
  function get_$stableprop_2() {
    return 8;
  }
  function DiskCacheBuilder(fileSystem) {
    this.fileSystem_1 = fileSystem;
    this.directory_1 = null;
    this.maxSizePercent_1 = 0.02;
    var tmp = this;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    tmp.minimumMaxSizeBytes_1 = (new Long(10, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
    var tmp_0 = this;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    tmp_0.maximumMaxSizeBytes_1 = (new Long(250, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
    this.maxSizeBytes_1 = new Long(0, 0);
    this.cleanupDispatcher_1 = get_ioDispatcher();
    this.$stable_1 = 8;
  }
  protoOf(DiskCacheBuilder).directory_y38ouk_k$ = function (directory) {
    this.directory_1 = directory;
  };
  protoOf(DiskCacheBuilder).maxSizePercent_2shmeu_k$ = function (percent) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= percent ? percent <= 1.0 : false)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maxSizePercent.<anonymous>' call
      var message = 'size must be in the range [0.0, 1.0].';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizeBytes_1 = new Long(0, 0);
    this.maxSizePercent_1 = percent;
  };
  protoOf(DiskCacheBuilder).minimumMaxSizeBytes_46fgqe_k$ = function (size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.minimumMaxSizeBytes.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.minimumMaxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).maximumMaxSizeBytes_4pm5oo_k$ = function (size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maximumMaxSizeBytes.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maximumMaxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).maxSizeBytes_pgpji0_k$ = function (size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.maxSizeBytes.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizePercent_1 = 0.0;
    this.maxSizeBytes_1 = size;
  };
  protoOf(DiskCacheBuilder).cleanupDispatcher_a6k9lw_k$ = function (dispatcher) {
    this.cleanupDispatcher_1 = dispatcher;
  };
  protoOf(DiskCacheBuilder).build_1k0s4u_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = this.directory_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'com.seiko.imageloader.cache.disk.DiskCacheBuilder.build.<anonymous>' call
        var message = 'directory == null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var directory = tmp$ret$1;
    var tmp;
    if (this.maxSizePercent_1 > 0.0) {
      var tmp_0;
      try {
        var size = this.maxSizePercent_1 * directorySize(directory).toDouble_ygsx0s_k$();
        tmp_0 = coerceIn(numberToLong(size), this.minimumMaxSizeBytes_1, this.maximumMaxSizeBytes_1);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var _ = $p;
          tmp_1 = this.minimumMaxSizeBytes_1;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = this.maxSizeBytes_1;
    }
    var maxSize = tmp;
    return new RealDiskCache(maxSize, directory, this.fileSystem_1, this.cleanupDispatcher_1);
  };
  function DiskCache_0(fileSystem, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new DiskCacheBuilder(fileSystem);
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_closed__kdb0et_0($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_0($this) {
    return $this.closed_1;
  }
  function complete($this, success) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $this.$this_1.syncObject_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.closed_1) {
      // Inline function 'com.seiko.imageloader.cache.disk.Editor.complete.<anonymous>.<anonymous>' call
      var message = 'editor is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (equals($this.entry_1.currentEditor_1, $this)) {
      completeEdit($this.$this_1, $this, success);
    }
    $this.closed_1 = true;
  }
  function _get_CLEAN__ylnxa0($this) {
    return $this.CLEAN_1;
  }
  function _get_DIRTY__y60zhd($this) {
    return $this.DIRTY_1;
  }
  function _get_REMOVE__3aymm1($this) {
    return $this.REMOVE_1;
  }
  function _get_READ__cuv33p($this) {
    return $this.READ_1;
  }
  function _get_LEGAL_KEY_PATTERN__v5vnwn($this) {
    return $this.LEGAL_KEY_PATTERN_1;
  }
  function sink$createDirectories(receiver, p0) {
    receiver.createDirectories$default_swo9f0_k$(p0);
  }
  function _get_directory__hwved8_0($this) {
    return $this.directory_1;
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _get_appVersion__jdhr04($this) {
    return $this.appVersion_1;
  }
  function _get_valueCount__8mgy0d($this) {
    return $this.valueCount_1;
  }
  function _get_journalFile__fg8j32($this) {
    return $this.journalFile_1;
  }
  function _get_journalFileTmp__l9i2tj($this) {
    return $this.journalFileTmp_1;
  }
  function _get_journalFileBackup__yrc0l8($this) {
    return $this.journalFileBackup_1;
  }
  function _get_lruEntries__vxc62y($this) {
    return $this.lruEntries_1;
  }
  function _get_cleanupScope__q7zg05($this) {
    return $this.cleanupScope_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_operationsSinceRewrite__rjj4mf($this, _set____db54di) {
    $this.operationsSinceRewrite_1 = _set____db54di;
  }
  function _get_operationsSinceRewrite__5afo6r($this) {
    return $this.operationsSinceRewrite_1;
  }
  function _set_journalWriter__c6q7lx($this, _set____db54di) {
    $this.journalWriter_1 = _set____db54di;
  }
  function _get_journalWriter__rehq49($this) {
    return $this.journalWriter_1;
  }
  function _set_hasJournalErrors__x1nmxb($this, _set____db54di) {
    $this.hasJournalErrors_1 = _set____db54di;
  }
  function _get_hasJournalErrors__8wc5z1($this) {
    return $this.hasJournalErrors_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_closed__kdb0et_1($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_1($this) {
    return $this.closed_1;
  }
  function _set_mostRecentTrimFailed__hbjli2($this, _set____db54di) {
    $this.mostRecentTrimFailed_1 = _set____db54di;
  }
  function _get_mostRecentTrimFailed__3dgxhq($this) {
    return $this.mostRecentTrimFailed_1;
  }
  function _set_mostRecentRebuildFailed__8rrm8l($this, _set____db54di) {
    $this.mostRecentRebuildFailed_1 = _set____db54di;
  }
  function _get_mostRecentRebuildFailed__t8x0i1($this) {
    return $this.mostRecentRebuildFailed_1;
  }
  function _get_syncObject__eretwv($this) {
    return $this.syncObject_1;
  }
  function _get_fileSystem__siywv4_0($this) {
    return $this.fileSystem_1;
  }
  function readJournal($this) {
    // Inline function 'okio.FileSystem.read' call
    var this_0 = $this.fileSystem_1;
    var file = $this.journalFile_1;
    // Inline function 'okio.use' call
    var this_1 = buffer(this_0.source_11bfje_k$(file));
    var result = null;
    var thrown = null;
    try {
      // Inline function 'okio.FileSystem.read.<anonymous>' call
      var magic = this_1.readUtf8LineStrict_40ilic_k$();
      var version = this_1.readUtf8LineStrict_40ilic_k$();
      var appVersionString = this_1.readUtf8LineStrict_40ilic_k$();
      var valueCountString = this_1.readUtf8LineStrict_40ilic_k$();
      var blank = this_1.readUtf8LineStrict_40ilic_k$();
      var tmp;
      if (((!('libcore.io.DiskLruCache' === magic) ? true : !('1' === version)) ? true : !($this.appVersion_1.toString() === appVersionString)) ? true : !($this.valueCount_1.toString() === valueCountString)) {
        tmp = true;
      } else {
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp = charSequenceLength(blank) > 0;
      }
      if (tmp) {
        throw IOException_init_$Create$('unexpected journal header: ' + ('[' + magic + ', ' + version + ', ' + appVersionString + ', ' + valueCountString + ', ' + blank + ']'));
      }
      var lineCount = 0;
      $l$loop: while (true) {
        try {
          readJournalLine($this, this_1.readUtf8LineStrict_40ilic_k$());
          lineCount = lineCount + 1 | 0;
        } catch ($p) {
          if ($p instanceof EOFException) {
            var _ = $p;
            break $l$loop;
          } else {
            throw $p;
          }
        }
      }
      $this.operationsSinceRewrite_1 = lineCount - $this.lruEntries_1.get_entries_p20ztl_k$().get_size_woubt6_k$() | 0;
      var tmp_0;
      if (!this_1.exhausted_p1jt55_k$()) {
        writeJournal($this);
        tmp_0 = Unit_getInstance();
      } else {
        $this.journalWriter_1 = newJournalWriter($this);
        tmp_0 = Unit_getInstance();
      }
      result = Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        if (this_1 == null)
          null;
        else {
          this_1.close_yn9xrc_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null) {
            thrown = t_0;
          } else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    ensureNotNull(result);
  }
  function newJournalWriter($this) {
    var fileSink = $this.fileSystem_1.appendingSink$default_yfdib4_k$($this.journalFile_1);
    var faultHidingSink = new FaultHidingSink(fileSink, DiskLruCache$newJournalWriter$lambda($this));
    return buffer_0(faultHidingSink);
  }
  function readJournalLine($this, line) {
    var firstSpace = indexOf(line, _Char___init__impl__6a9atx(32));
    if (firstSpace === -1)
      throw IOException_init_$Create$('unexpected journal line: ' + line);
    var keyBegin = firstSpace + 1 | 0;
    var secondSpace = indexOf(line, _Char___init__impl__6a9atx(32), keyBegin);
    var key;
    if (secondSpace === -1) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      key = line.substring(keyBegin);
      if (firstSpace === 6 ? startsWith(line, 'REMOVE') : false) {
        $this.lruEntries_1.remove_1r2rzn_k$(key);
        return Unit_getInstance();
      }
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      key = line.substring(keyBegin, secondSpace);
    }
    var entry = getOrPut($this.lruEntries_1, key, DiskLruCache$readJournalLine$lambda($this, key));
    if ((!(secondSpace === -1) ? firstSpace === 5 : false) ? startsWith(line, 'CLEAN') : false) {
      // Inline function 'kotlin.text.substring' call
      var startIndex = secondSpace + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = line.substring(startIndex);
      var parts = split(tmp$ret$5, charArrayOf([_Char___init__impl__6a9atx(32)]));
      entry.readable_1 = true;
      entry.currentEditor_1 = null;
      entry.setLengths_wljuh_k$(parts);
    } else if ((secondSpace === -1 ? firstSpace === 5 : false) ? startsWith(line, 'DIRTY') : false) {
      entry.currentEditor_1 = new Editor_0($this, entry);
    } else if (!((secondSpace === -1 ? firstSpace === 4 : false) ? startsWith(line, 'READ') : false))
      throw IOException_init_$Create$('unexpected journal line: ' + line);
  }
  function processJournal($this) {
    var size = new Long(0, 0);
    var iterator = $this.lruEntries_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var entry = iterator.next_20eer_k$();
      if (entry.get_value_j01efc_k$().currentEditor_1 == null) {
        var inductionVariable = 0;
        var last = $this.valueCount_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            size = size.plus_r93sks_k$(entry.get_value_j01efc_k$().lengths_1[i]);
          }
           while (inductionVariable < last);
      } else {
        entry.get_value_j01efc_k$().currentEditor_1 = null;
        var inductionVariable_0 = 0;
        var last_0 = $this.valueCount_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $this.fileSystem_1.delete$default_1zkyi8_k$(entry.get_value_j01efc_k$().cleanFiles_1.get_c1px32_k$(i_0));
            $this.fileSystem_1.delete$default_1zkyi8_k$(entry.get_value_j01efc_k$().dirtyFiles_1.get_c1px32_k$(i_0));
          }
           while (inductionVariable_0 < last_0);
        $this.lruEntries_1.remove_1r2rzn_k$(entry.get_key_18j28a_k$());
      }
    }
    $this.size_1 = size;
  }
  function writeJournal($this) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $this.syncObject_1;
    var tmp0_safe_receiver = $this.journalWriter_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_yn9xrc_k$();
    }
    // Inline function 'okio.FileSystem.write' call
    var this_0 = $this.fileSystem_1;
    var file = $this.journalFileTmp_1;
    // Inline function 'okio.use' call
    var this_1 = buffer_0(this_0.sink_3ey1xj_k$(file, false));
    var result = null;
    var thrown = null;
    try {
      // Inline function 'okio.FileSystem.write.<anonymous>' call
      var tmp = this_1.writeUtf8_9rv3au_k$('libcore.io.DiskLruCache');
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(10);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_2);
      tmp.writeByte_3m2t4h_k$(tmp$ret$0);
      var tmp_0 = this_1.writeUtf8_9rv3au_k$('1');
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(10);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_3);
      tmp_0.writeByte_3m2t4h_k$(tmp$ret$1);
      var tmp_1 = this_1.writeDecimalLong_3t8cww_k$(toLong($this.appVersion_1));
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(10);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_4);
      tmp_1.writeByte_3m2t4h_k$(tmp$ret$2);
      var tmp_2 = this_1.writeDecimalLong_3t8cww_k$(toLong($this.valueCount_1));
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_5);
      tmp_2.writeByte_3m2t4h_k$(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_6);
      this_1.writeByte_3m2t4h_k$(tmp$ret$4);
      var tmp0_iterator = $this.lruEntries_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var entry = tmp0_iterator.next_20eer_k$();
        if (!(entry.get_value_j01efc_k$().currentEditor_1 == null)) {
          this_1.writeUtf8_9rv3au_k$('DIRTY');
          // Inline function 'kotlin.code' call
          var this_7 = _Char___init__impl__6a9atx(32);
          var tmp$ret$5 = Char__toInt_impl_vasixd(this_7);
          this_1.writeByte_3m2t4h_k$(tmp$ret$5);
          this_1.writeUtf8_9rv3au_k$(entry.get_key_18j28a_k$());
          // Inline function 'kotlin.code' call
          var this_8 = _Char___init__impl__6a9atx(10);
          var tmp$ret$6 = Char__toInt_impl_vasixd(this_8);
          this_1.writeByte_3m2t4h_k$(tmp$ret$6);
        } else {
          this_1.writeUtf8_9rv3au_k$('CLEAN');
          // Inline function 'kotlin.code' call
          var this_9 = _Char___init__impl__6a9atx(32);
          var tmp$ret$7 = Char__toInt_impl_vasixd(this_9);
          this_1.writeByte_3m2t4h_k$(tmp$ret$7);
          this_1.writeUtf8_9rv3au_k$(entry.get_key_18j28a_k$());
          entry.get_value_j01efc_k$().writeLengths_oj0xc6_k$(this_1);
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(10);
          var tmp$ret$8 = Char__toInt_impl_vasixd(this_10);
          this_1.writeByte_3m2t4h_k$(tmp$ret$8);
        }
      }
      result = Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        if (this_1 == null)
          null;
        else {
          this_1.close_yn9xrc_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null) {
            thrown = t_0;
          } else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    ensureNotNull(result);
    if ($this.fileSystem_1.exists_gjgzpn_k$($this.journalFile_1)) {
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFile_1, $this.journalFileBackup_1);
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFileTmp_1, $this.journalFile_1);
      $this.fileSystem_1.delete$default_1zkyi8_k$($this.journalFileBackup_1);
    } else {
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFileTmp_1, $this.journalFile_1);
    }
    $this.journalWriter_1 = newJournalWriter($this);
    $this.operationsSinceRewrite_1 = 0;
    $this.hasJournalErrors_1 = false;
    $this.mostRecentRebuildFailed_1 = false;
    return Unit_getInstance();
  }
  function completeEdit($this, editor, success) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $this.syncObject_1;
    var entry = editor.entry_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(entry.currentEditor_1, editor)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (success ? !entry.zombie_1 : false) {
      var inductionVariable = 0;
      var last = $this.valueCount_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (editor.written_1[i] ? !$this.fileSystem_1.exists_gjgzpn_k$(entry.dirtyFiles_1.get_c1px32_k$(i)) : false) {
            editor.abort_lahfmo_k$();
            return Unit_getInstance();
          }
        }
         while (inductionVariable < last);
      var inductionVariable_0 = 0;
      var last_0 = $this.valueCount_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var dirty = entry.dirtyFiles_1.get_c1px32_k$(i_0);
          var clean = entry.cleanFiles_1.get_c1px32_k$(i_0);
          if ($this.fileSystem_1.exists_gjgzpn_k$(dirty)) {
            $this.fileSystem_1.atomicMove_mzx74k_k$(dirty, clean);
          } else {
            createFile($this.fileSystem_1, entry.cleanFiles_1.get_c1px32_k$(i_0));
          }
          var oldLength = entry.lengths_1[i_0];
          var tmp2_elvis_lhs = $this.fileSystem_1.metadata_r9b8qq_k$(clean).get_size_woubt6_k$();
          var newLength = tmp2_elvis_lhs == null ? new Long(0, 0) : tmp2_elvis_lhs;
          entry.lengths_1[i_0] = newLength;
          $this.size_1 = $this.size_1.minus_mfbszm_k$(oldLength).plus_r93sks_k$(newLength);
        }
         while (inductionVariable_0 < last_0);
    } else {
      var inductionVariable_1 = 0;
      var last_1 = $this.valueCount_1;
      if (inductionVariable_1 < last_1)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          $this.fileSystem_1.delete$default_1zkyi8_k$(entry.dirtyFiles_1.get_c1px32_k$(i_1));
        }
         while (inductionVariable_1 < last_1);
    }
    entry.currentEditor_1 = null;
    if (entry.zombie_1) {
      removeEntry($this, entry);
      return Unit_getInstance();
    }
    $this.operationsSinceRewrite_1 = $this.operationsSinceRewrite_1 + 1 | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull($this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.completeEdit.<anonymous>.<anonymous>' call
    if (success ? true : entry.readable_1) {
      entry.readable_1 = true;
      this_0.writeUtf8_9rv3au_k$('CLEAN');
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(32);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      this_0.writeByte_3m2t4h_k$(tmp$ret$1);
      this_0.writeUtf8_9rv3au_k$(entry.key_1);
      entry.writeLengths_oj0xc6_k$(this_0);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(10);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
      this_0.writeByte_3m2t4h_k$(tmp$ret$2);
    } else {
      $this.lruEntries_1.remove_1r2rzn_k$(entry.key_1);
      this_0.writeUtf8_9rv3au_k$('REMOVE');
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(32);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
      this_0.writeByte_3m2t4h_k$(tmp$ret$3);
      this_0.writeUtf8_9rv3au_k$(entry.key_1);
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
      this_0.writeByte_3m2t4h_k$(tmp$ret$4);
    }
    this_0.flush_shahbo_k$();
    var tmp;
    if ($this.size_1.compareTo_9jj042_k$($this.maxSize_1) > 0 ? true : journalRewriteRequired($this)) {
      launchCleanup($this);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function journalRewriteRequired($this) {
    return $this.operationsSinceRewrite_1 >= 2000;
  }
  function removeEntry($this, entry) {
    if (entry.lockingSnapshotCount_1 > 0) {
      var tmp0_safe_receiver = $this.journalWriter_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.removeEntry.<anonymous>' call
        tmp0_safe_receiver.writeUtf8_9rv3au_k$('DIRTY');
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(32);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        tmp0_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$0);
        tmp0_safe_receiver.writeUtf8_9rv3au_k$(entry.key_1);
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(10);
        var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
        tmp0_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$1);
        tmp0_safe_receiver.flush_shahbo_k$();
      }
    }
    if (entry.lockingSnapshotCount_1 > 0 ? true : !(entry.currentEditor_1 == null)) {
      entry.zombie_1 = true;
      return true;
    }
    var inductionVariable = 0;
    var last = $this.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.fileSystem_1.delete$default_1zkyi8_k$(entry.cleanFiles_1.get_c1px32_k$(i));
        $this.size_1 = $this.size_1.minus_mfbszm_k$(entry.lengths_1[i]);
        entry.lengths_1[i] = new Long(0, 0);
      }
       while (inductionVariable < last);
    $this.operationsSinceRewrite_1 = $this.operationsSinceRewrite_1 + 1 | 0;
    var tmp5_safe_receiver = $this.journalWriter_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.removeEntry.<anonymous>' call
      tmp5_safe_receiver.writeUtf8_9rv3au_k$('REMOVE');
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(32);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_2);
      tmp5_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$3);
      tmp5_safe_receiver.writeUtf8_9rv3au_k$(entry.key_1);
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_3);
      tmp5_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$4);
    }
    $this.lruEntries_1.remove_1r2rzn_k$(entry.key_1);
    if (journalRewriteRequired($this)) {
      launchCleanup($this);
    }
    return true;
  }
  function checkNotClosed($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.closed_1) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.checkNotClosed.<anonymous>' call
      var message = 'cache is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function trimToSize($this) {
    while ($this.size_1.compareTo_9jj042_k$($this.maxSize_1) > 0) {
      if (!removeOldestEntry($this))
        return Unit_getInstance();
    }
    $this.mostRecentTrimFailed_1 = false;
  }
  function removeOldestEntry($this) {
    var tmp0_iterator = $this.lruEntries_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var toEvict = tmp0_iterator.next_20eer_k$();
      if (!toEvict.get_value_j01efc_k$().zombie_1) {
        removeEntry($this, toEvict.get_value_j01efc_k$());
        return true;
      }
    }
    return false;
  }
  function delete_0($this) {
    $this.close_yn9xrc_k$();
    deleteContents($this.fileSystem_1, $this.directory_1);
  }
  function launchCleanup($this) {
    launch($this.cleanupScope_1, VOID, VOID, DiskLruCache$launchCleanup$slambda_0($this, null));
  }
  function validateKey($this, key) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_14().LEGAL_KEY_PATTERN_1.matches_evli6i_k$(key)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.validateKey.<anonymous>' call
      var message = 'keys must match regex [a-z0-9_-]{1,120}: "' + key + '"';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function Snapshot_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = false;
  }
  protoOf(Snapshot_0).get_entry_iqxd1l_k$ = function () {
    return this.entry_1;
  };
  protoOf(Snapshot_0).file_w9da5g_k$ = function (index) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.closed_1) {
      // Inline function 'com.seiko.imageloader.cache.disk.Snapshot.file.<anonymous>' call
      var message = 'snapshot is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.entry_1.cleanFiles_1.get_c1px32_k$(index);
  };
  protoOf(Snapshot_0).close_yn9xrc_k$ = function () {
    if (!this.closed_1) {
      this.closed_1 = true;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      this.$this_1.syncObject_1;
      var tmp0_this = this.entry_1;
      tmp0_this.lockingSnapshotCount_1 = tmp0_this.lockingSnapshotCount_1 - 1 | 0;
      var tmp;
      if (this.entry_1.lockingSnapshotCount_1 === 0 ? this.entry_1.zombie_1 : false) {
        removeEntry(this.$this_1, this.entry_1);
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(Snapshot_0).closeAndEdit_yimkix_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.$this_1.syncObject_1;
    this.close_yn9xrc_k$();
    return this.$this_1.edit_cuotlc_k$(this.entry_1.key_1);
  };
  function Editor_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = false;
    this.written_1 = booleanArray(this.$this_1.valueCount_1);
  }
  protoOf(Editor_0).get_entry_iqxd1l_k$ = function () {
    return this.entry_1;
  };
  protoOf(Editor_0).get_written_rry7fy_k$ = function () {
    return this.written_1;
  };
  protoOf(Editor_0).file_w9da5g_k$ = function (index) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.$this_1.syncObject_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.closed_1) {
      // Inline function 'com.seiko.imageloader.cache.disk.Editor.file.<anonymous>.<anonymous>' call
      var message = 'editor is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.written_1[index] = true;
    // Inline function 'kotlin.also' call
    var this_0 = this.entry_1.dirtyFiles_1.get_c1px32_k$(index);
    var tmp2_also_this = this.$this_1.fileSystem_1;
    // Inline function 'kotlin.contracts.contract' call
    createFile(tmp2_also_this, this_0);
    return this_0;
  };
  protoOf(Editor_0).detach_fa8mkd_k$ = function () {
    if (equals(this.entry_1.currentEditor_1, this)) {
      this.entry_1.zombie_1 = true;
    }
  };
  protoOf(Editor_0).commit_vpt10n_k$ = function () {
    return complete(this, true);
  };
  protoOf(Editor_0).commitAndGet_ki4bmy_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.$this_1.syncObject_1;
    this.commit_vpt10n_k$();
    return this.$this_1.get_6bo4tg_k$(this.entry_1.key_1);
  };
  protoOf(Editor_0).abort_lahfmo_k$ = function () {
    return complete(this, false);
  };
  function Entry($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.lengths_1 = longArray(this.$this_1.valueCount_1);
    this.cleanFiles_1 = ArrayList_init_$Create$(this.$this_1.valueCount_1);
    this.dirtyFiles_1 = ArrayList_init_$Create$(this.$this_1.valueCount_1);
    this.readable_1 = false;
    this.zombie_1 = false;
    this.currentEditor_1 = null;
    this.lockingSnapshotCount_1 = 0;
    var fileBuilder = (new StringBuilder(this.key_1)).append_am5a4z_k$(_Char___init__impl__6a9atx(46));
    var truncateTo = fileBuilder.get_length_g42xv3_k$();
    var inductionVariable = 0;
    var last = this.$this_1.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        fileBuilder.append_uppzia_k$(i);
        // Inline function 'kotlin.collections.plusAssign' call
        var this_0 = this.cleanFiles_1;
        var element = this.$this_1.directory_1.div_thrqyx_k$(fileBuilder.toString());
        this_0.add_utx5q5_k$(element);
        fileBuilder.append_22ad7x_k$('.tmp');
        // Inline function 'kotlin.collections.plusAssign' call
        var this_1 = this.dirtyFiles_1;
        var element_0 = this.$this_1.directory_1.div_thrqyx_k$(fileBuilder.toString());
        this_1.add_utx5q5_k$(element_0);
        fileBuilder.setLength_oy0ork_k$(truncateTo);
      }
       while (inductionVariable < last);
  }
  protoOf(Entry).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry).get_lengths_2aqs10_k$ = function () {
    return this.lengths_1;
  };
  protoOf(Entry).get_cleanFiles_yknzyh_k$ = function () {
    return this.cleanFiles_1;
  };
  protoOf(Entry).get_dirtyFiles_boy8e_k$ = function () {
    return this.dirtyFiles_1;
  };
  protoOf(Entry).set_readable_ld3txk_k$ = function (_set____db54di) {
    this.readable_1 = _set____db54di;
  };
  protoOf(Entry).get_readable_ovw33t_k$ = function () {
    return this.readable_1;
  };
  protoOf(Entry).set_zombie_ai8j2q_k$ = function (_set____db54di) {
    this.zombie_1 = _set____db54di;
  };
  protoOf(Entry).get_zombie_mw6ucv_k$ = function () {
    return this.zombie_1;
  };
  protoOf(Entry).set_currentEditor_ha9tlf_k$ = function (_set____db54di) {
    this.currentEditor_1 = _set____db54di;
  };
  protoOf(Entry).get_currentEditor_t0a8t9_k$ = function () {
    return this.currentEditor_1;
  };
  protoOf(Entry).set_lockingSnapshotCount_2pfe6v_k$ = function (_set____db54di) {
    this.lockingSnapshotCount_1 = _set____db54di;
  };
  protoOf(Entry).get_lockingSnapshotCount_rgcd3x_k$ = function () {
    return this.lockingSnapshotCount_1;
  };
  protoOf(Entry).setLengths_wljuh_k$ = function (strings) {
    if (!(strings.get_size_woubt6_k$() === this.$this_1.valueCount_1)) {
      throw IOException_init_$Create$('unexpected journal line: ' + strings);
    }
    try {
      var inductionVariable = 0;
      var last = strings.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.lengths_1[i] = toLong_0(strings.get_c1px32_k$(i));
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof NumberFormatException) {
        var _ = $p;
        throw IOException_init_$Create$('unexpected journal line: ' + strings);
      } else {
        throw $p;
      }
    }
  };
  protoOf(Entry).writeLengths_oj0xc6_k$ = function (writer) {
    var indexedObject = this.lengths_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var length = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      writer.writeByte_3m2t4h_k$(tmp$ret$0).writeDecimalLong_3t8cww_k$(length);
    }
  };
  protoOf(Entry).snapshot_4plubo_k$ = function () {
    if (!this.readable_1)
      return null;
    if (!(this.currentEditor_1 == null) ? true : this.zombie_1)
      return null;
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var this_0 = this.cleanFiles_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.cache.disk.Entry.snapshot.<anonymous>' call
        var file = this_0.get_c1px32_k$(i);
        if (!this.$this_1.fileSystem_1.exists_gjgzpn_k$(file)) {
          try {
            removeEntry(this.$this_1, this);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _ = $p;
            } else {
              throw $p;
            }
          }
          return null;
        }
      }
       while (inductionVariable <= last);
    this.lockingSnapshotCount_1 = this.lockingSnapshotCount_1 + 1 | 0;
    return new Snapshot_0(this.$this_1, this);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.JOURNAL_FILE_1 = 'journal';
    this.JOURNAL_FILE_TMP_1 = 'journal.tmp';
    this.JOURNAL_FILE_BACKUP_1 = 'journal.bkp';
    this.MAGIC_1 = 'libcore.io.DiskLruCache';
    this.VERSION_1 = '1';
    this.CLEAN_1 = 'CLEAN';
    this.DIRTY_1 = 'DIRTY';
    this.REMOVE_1 = 'REMOVE';
    this.READ_1 = 'READ';
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '[a-z\\d_-]{1,120}';
    tmp.LEGAL_KEY_PATTERN_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_1).get_JOURNAL_FILE_vtvrvx_k$ = function () {
    return this.JOURNAL_FILE_1;
  };
  protoOf(Companion_1).get_JOURNAL_FILE_TMP_qfab39_k$ = function () {
    return this.JOURNAL_FILE_TMP_1;
  };
  protoOf(Companion_1).get_JOURNAL_FILE_BACKUP_sdq17w_k$ = function () {
    return this.JOURNAL_FILE_BACKUP_1;
  };
  protoOf(Companion_1).get_MAGIC_icwm04_k$ = function () {
    return this.MAGIC_1;
  };
  protoOf(Companion_1).get_VERSION_iyczin_k$ = function () {
    return this.VERSION_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DiskLruCache$fileSystem$1($fileSystem) {
    ForwardingFileSystem.call(this, $fileSystem);
  }
  protoOf(DiskLruCache$fileSystem$1).sink_3ey1xj_k$ = function (file, mustCreate) {
    var tmp0_safe_receiver = file.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      sink$createDirectories(this, tmp0_safe_receiver);
    }
    return protoOf(ForwardingFileSystem).sink_3ey1xj_k$.call(this, file, mustCreate);
  };
  function DiskLruCache$newJournalWriter$lambda(this$0) {
    return function (it) {
      this$0.hasJournalErrors_1 = true;
      return Unit_getInstance();
    };
  }
  function DiskLruCache$readJournalLine$lambda(this$0, $key) {
    return function () {
      return new Entry(this$0, $key);
    };
  }
  function DiskLruCache$launchCleanup$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DiskLruCache$launchCleanup$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1.syncObject_1;
          if (!this.this$0__1.initialized_1 ? true : this.this$0__1.closed_1)
            return Unit_getInstance();
          try {
            trimToSize(this.this$0__1);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _ = $p;
              this.this$0__1.mostRecentTrimFailed_1 = true;
            } else {
              throw $p;
            }
          }
          try {
            if (journalRewriteRequired(this.this$0__1)) {
              writeJournal(this.this$0__1);
            }
          } catch ($p) {
            if ($p instanceof IOException) {
              var __0 = $p;
              this.this$0__1.mostRecentRebuildFailed_1 = true;
              this.this$0__1.journalWriter_1 = buffer_0(blackholeSink());
            } else {
              throw $p;
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
  protoOf(DiskLruCache$launchCleanup$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DiskLruCache$launchCleanup$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DiskLruCache$launchCleanup$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DiskLruCache$launchCleanup$slambda_0(this$0, resultContinuation) {
    var i = new DiskLruCache$launchCleanup$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DiskLruCache(fileSystem, directory, cleanupDispatcher, maxSize, appVersion, valueCount) {
    Companion_getInstance_14();
    this.directory_1 = directory;
    this.maxSize_1 = maxSize;
    this.appVersion_1 = appVersion;
    this.valueCount_1 = valueCount;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.maxSize_1.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.valueCount_1 > 0)) {
      // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.<anonymous>' call
      var message_0 = 'valueCount <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.journalFile_1 = this.directory_1.div_thrqyx_k$('journal');
    this.journalFileTmp_1 = this.directory_1.div_thrqyx_k$('journal.tmp');
    this.journalFileBackup_1 = this.directory_1.div_thrqyx_k$('journal.bkp');
    this.lruEntries_1 = new LruHashMap(0, 0.75);
    this.cleanupScope_1 = CoroutineScope_0(SupervisorJob().plus_s13ygv_k$(cleanupDispatcher.limitedParallelism_b7nunq_k$(1)));
    this.size_1 = new Long(0, 0);
    this.operationsSinceRewrite_1 = 0;
    this.journalWriter_1 = null;
    this.hasJournalErrors_1 = false;
    this.initialized_1 = false;
    this.closed_1 = false;
    this.mostRecentTrimFailed_1 = false;
    this.mostRecentRebuildFailed_1 = false;
    this.syncObject_1 = new Object();
    var tmp = this;
    tmp.fileSystem_1 = new DiskLruCache$fileSystem$1(fileSystem);
  }
  protoOf(DiskLruCache).initialize_o9rygw_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    if (this.initialized_1)
      return Unit_getInstance();
    this.fileSystem_1.delete$default_1zkyi8_k$(this.journalFileTmp_1);
    if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFileBackup_1)) {
      if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFile_1)) {
        this.fileSystem_1.delete$default_1zkyi8_k$(this.journalFileBackup_1);
      } else {
        this.fileSystem_1.atomicMove_mzx74k_k$(this.journalFileBackup_1, this.journalFile_1);
      }
    }
    if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFile_1)) {
      try {
        readJournal(this);
        processJournal(this);
        this.initialized_1 = true;
        return Unit_getInstance();
      } catch ($p) {
        if ($p instanceof IOException) {
          var _ = $p;
        } else {
          throw $p;
        }
      }
      try {
        delete_0(this);
      }finally {
        this.closed_1 = false;
      }
    }
    writeJournal(this);
    this.initialized_1 = true;
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).get_6bo4tg_k$ = function (key) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var tmp0_safe_receiver = this.lruEntries_1.get_h31hzz_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.snapshot_4plubo_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var snapshot = tmp;
    this.operationsSinceRewrite_1 = this.operationsSinceRewrite_1 + 1 | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.get.<anonymous>.<anonymous>' call
    this_0.writeUtf8_9rv3au_k$('READ');
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(32);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
    this_0.writeByte_3m2t4h_k$(tmp$ret$0);
    this_0.writeUtf8_9rv3au_k$(key);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
    this_0.writeByte_3m2t4h_k$(tmp$ret$1);
    if (journalRewriteRequired(this)) {
      launchCleanup(this);
    }
    return snapshot;
  };
  protoOf(DiskLruCache).edit_cuotlc_k$ = function (key) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var entry = this.lruEntries_1.get_h31hzz_k$(key);
    var tmp0_safe_receiver = entry;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.currentEditor_1) == null)) {
      return null;
    }
    if (!(entry == null) ? !(entry.lockingSnapshotCount_1 === 0) : false) {
      return null;
    }
    if (this.mostRecentTrimFailed_1 ? true : this.mostRecentRebuildFailed_1) {
      launchCleanup(this);
      return null;
    }
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.cache.disk.DiskLruCache.edit.<anonymous>.<anonymous>' call
    this_0.writeUtf8_9rv3au_k$('DIRTY');
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(32);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
    this_0.writeByte_3m2t4h_k$(tmp$ret$0);
    this_0.writeUtf8_9rv3au_k$(key);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
    this_0.writeByte_3m2t4h_k$(tmp$ret$1);
    this_0.flush_shahbo_k$();
    if (this.hasJournalErrors_1) {
      return null;
    }
    if (entry == null) {
      entry = new Entry(this, key);
      this.lruEntries_1.put_fa630k_k$(key, entry);
    }
    var editor = new Editor_0(this, entry);
    entry.currentEditor_1 = editor;
    return editor;
  };
  protoOf(DiskLruCache).size_23och_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    this.initialize_o9rygw_k$();
    return this.size_1;
  };
  protoOf(DiskLruCache).remove_z05dva_k$ = function (key) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var tmp0_elvis_lhs = this.lruEntries_1.get_h31hzz_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    var removed = removeEntry(this, entry);
    if (removed ? this.size_1.compareTo_9jj042_k$(this.maxSize_1) <= 0 : false)
      this.mostRecentTrimFailed_1 = false;
    return removed;
  };
  protoOf(DiskLruCache).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    if (!this.initialized_1 ? true : this.closed_1) {
      this.closed_1 = true;
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.lruEntries_1.get_entries_p20ztl_k$();
    var indexedObject = copyToArray(this_0);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = entry.get_value_j01efc_k$().currentEditor_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.detach_fa8mkd_k$();
      }
    }
    trimToSize(this);
    cancel(this.cleanupScope_1);
    ensureNotNull(this.journalWriter_1).close_yn9xrc_k$();
    this.journalWriter_1 = null;
    this.closed_1 = true;
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).flush_shahbo_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    if (!this.initialized_1)
      return Unit_getInstance();
    checkNotClosed(this);
    trimToSize(this);
    ensureNotNull(this.journalWriter_1).flush_shahbo_k$();
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).evictAll_sdrs94_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    this.initialize_o9rygw_k$();
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.lruEntries_1.get_entries_p20ztl_k$();
    var indexedObject = copyToArray(this_0);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      removeEntry(this, entry.get_value_j01efc_k$());
    }
    this.mostRecentTrimFailed_1 = false;
    return Unit_getInstance();
  };
  function _get_onException__a5todb($this) {
    return $this.onException_1;
  }
  function _set_hasErrors__t94ssg($this, _set____db54di) {
    $this.hasErrors_1 = _set____db54di;
  }
  function _get_hasErrors__ch4ss4($this) {
    return $this.hasErrors_1;
  }
  function FaultHidingSink(delegate, onException) {
    ForwardingSink.call(this, delegate);
    this.onException_1 = onException;
    this.hasErrors_1 = false;
  }
  protoOf(FaultHidingSink).write_f49az7_k$ = function (source, byteCount) {
    if (this.hasErrors_1) {
      source.skip_bgd4sf_k$(byteCount);
      return Unit_getInstance();
    }
    try {
      protoOf(ForwardingSink).write_f49az7_k$.call(this, source, byteCount);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).flush_shahbo_k$ = function () {
    try {
      protoOf(ForwardingSink).flush_shahbo_k$.call(this);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).close_yn9xrc_k$ = function () {
    try {
      protoOf(ForwardingSink).close_yn9xrc_k$.call(this);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  function _get_snapshot__shtuvb($this) {
    return $this.snapshot_1;
  }
  function _get_editor__6kl8ou($this) {
    return $this.editor_1;
  }
  function _get_ENTRY_METADATA__qj5p1r($this) {
    return $this.ENTRY_METADATA_1;
  }
  function _get_ENTRY_DATA__65kstw($this) {
    return $this.ENTRY_DATA_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function hash(_this__u8e3s4, $this) {
    return Companion_getInstance_2().encodeUtf8_5n709n_k$(_this__u8e3s4).sha256_exzwt5_k$().hex_27mj_k$();
  }
  function RealSnapshot(snapshot) {
    this.snapshot_1 = snapshot;
  }
  protoOf(RealSnapshot).get_metadata_vs95vc_k$ = function () {
    return this.snapshot_1.file_w9da5g_k$(0);
  };
  protoOf(RealSnapshot).get_data_wokkxf_k$ = function () {
    return this.snapshot_1.file_w9da5g_k$(1);
  };
  protoOf(RealSnapshot).close_yn9xrc_k$ = function () {
    return this.snapshot_1.close_yn9xrc_k$();
  };
  protoOf(RealSnapshot).closeAndOpenEditor_du1eh6_k$ = function () {
    var tmp0_safe_receiver = this.snapshot_1.closeAndEdit_yimkix_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealEditor(tmp0_safe_receiver);
    }
    return tmp;
  };
  function RealEditor(editor) {
    this.editor_1 = editor;
  }
  protoOf(RealEditor).get_metadata_vs95vc_k$ = function () {
    return this.editor_1.file_w9da5g_k$(0);
  };
  protoOf(RealEditor).get_data_wokkxf_k$ = function () {
    return this.editor_1.file_w9da5g_k$(1);
  };
  protoOf(RealEditor).commit_vpt10n_k$ = function () {
    return this.editor_1.commit_vpt10n_k$();
  };
  protoOf(RealEditor).commitAndOpenSnapshot_teh9jm_k$ = function () {
    var tmp0_safe_receiver = this.editor_1.commitAndGet_ki4bmy_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealSnapshot(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealEditor).abort_lahfmo_k$ = function () {
    return this.editor_1.abort_lahfmo_k$();
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.ENTRY_METADATA_1 = 0;
    this.ENTRY_DATA_1 = 1;
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RealDiskCache(maxSize, directory, fileSystem, cleanupDispatcher) {
    Companion_getInstance_15();
    this.maxSize_1 = maxSize;
    this.directory_1 = directory;
    this.fileSystem_1 = fileSystem;
    this.cache_1 = new DiskLruCache(this.fileSystem_1, this.directory_1, cleanupDispatcher, this.maxSize_1, 1, 2);
  }
  protoOf(RealDiskCache).get_maxSize_f83j4s_k$ = function () {
    return this.maxSize_1;
  };
  protoOf(RealDiskCache).get_directory_7ekq4c_k$ = function () {
    return this.directory_1;
  };
  protoOf(RealDiskCache).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(RealDiskCache).get_size_woubt6_k$ = function () {
    return this.cache_1.size_23och_k$();
  };
  protoOf(RealDiskCache).openSnapshot_67z3ik_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_6bo4tg_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealSnapshot(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealDiskCache).openEditor_5w5t8d_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.edit_cuotlc_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealEditor(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealDiskCache).remove_z05dva_k$ = function (key) {
    return this.cache_1.remove_z05dva_k$(hash(key, this));
  };
  protoOf(RealDiskCache).clear_j9egeb_k$ = function () {
    this.cache_1.evictAll_sdrs94_k$();
  };
  function MemoryCache() {
  }
  function _get_valueHashProvider__unhjhb($this) {
    return $this.valueHashProvider_1;
  }
  function _get_valueSizeProvider__iw8olq($this) {
    return $this.valueSizeProvider_1;
  }
  function _set_maxSizeBytes__bar9an_0($this, _set____db54di) {
    $this.maxSizeBytes_1 = _set____db54di;
  }
  function _get_maxSizeBytes__48zh9h_0($this) {
    return $this.maxSizeBytes_1;
  }
  function _set_strongReferencesEnabled__5s1k3n($this, _set____db54di) {
    $this.strongReferencesEnabled_1 = _set____db54di;
  }
  function _get_strongReferencesEnabled__ep3u5t($this) {
    return $this.strongReferencesEnabled_1;
  }
  function _set_weakReferencesEnabled__435hng($this, _set____db54di) {
    $this.weakReferencesEnabled_1 = _set____db54di;
  }
  function _get_weakReferencesEnabled__a8ru34($this) {
    return $this.weakReferencesEnabled_1;
  }
  function get_$stableprop_3() {
    return 8;
  }
  function MemoryCacheBuilder(valueHashProvider, valueSizeProvider) {
    this.valueHashProvider_1 = valueHashProvider;
    this.valueSizeProvider_1 = valueSizeProvider;
    this.maxSizeBytes_1 = 0;
    this.strongReferencesEnabled_1 = true;
    this.weakReferencesEnabled_1 = true;
    this.$stable_1 = 8;
  }
  protoOf(MemoryCacheBuilder).maxSizeBytes_qbz4ki_k$ = function (size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'com.seiko.imageloader.cache.memory.MemoryCacheBuilder.maxSizeBytes.<anonymous>' call
      var message = 'size must be >= 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizeBytes_1 = size;
  };
  protoOf(MemoryCacheBuilder).strongReferencesEnabled_yck7n_k$ = function (enable) {
    this.strongReferencesEnabled_1 = enable;
  };
  protoOf(MemoryCacheBuilder).weakReferencesEnabled_89od8s_k$ = function (enable) {
    this.weakReferencesEnabled_1 = enable;
  };
  protoOf(MemoryCacheBuilder).build_1k0s4u_k$ = function () {
    var tmp;
    if (this.weakReferencesEnabled_1) {
      tmp = new RealWeakMemoryCache(this.valueHashProvider_1);
    } else {
      tmp = new EmptyWeakMemoryCache();
    }
    var weakMemoryCache = tmp;
    var tmp_0;
    if (this.strongReferencesEnabled_1 ? this.maxSizeBytes_1 > 0 : false) {
      tmp_0 = new RealStrongMemoryCache(this.maxSizeBytes_1, weakMemoryCache, this.valueSizeProvider_1);
    } else {
      tmp_0 = new EmptyStrongMemoryCache(weakMemoryCache, this.valueSizeProvider_1);
    }
    var strongMemoryCache = tmp_0;
    return new RealMemoryCache(strongMemoryCache, weakMemoryCache);
  };
  function MemoryCache_0(valueHashProvider, valueSizeProvider, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new MemoryCacheBuilder(valueHashProvider, valueSizeProvider);
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function _get_strongMemoryCache__2pnl21($this) {
    return $this.strongMemoryCache_1;
  }
  function _get_weakMemoryCache__eo3r9k($this) {
    return $this.weakMemoryCache_1;
  }
  function RealMemoryCache(strongMemoryCache, weakMemoryCache) {
    this.strongMemoryCache_1 = strongMemoryCache;
    this.weakMemoryCache_1 = weakMemoryCache;
  }
  protoOf(RealMemoryCache).get_size_woubt6_k$ = function () {
    return this.strongMemoryCache_1.get_size_woubt6_k$();
  };
  protoOf(RealMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return this.strongMemoryCache_1.get_maxSize_f83j4s_k$();
  };
  protoOf(RealMemoryCache).get_keys_wop4xp_k$ = function () {
    return plus(this.strongMemoryCache_1.get_keys_wop4xp_k$(), this.weakMemoryCache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealMemoryCache).get_h31hzz_k$ = function (key) {
    var tmp0_elvis_lhs = this.strongMemoryCache_1.get_wei43m_k$(key);
    return tmp0_elvis_lhs == null ? this.weakMemoryCache_1.get_wei43m_k$(key) : tmp0_elvis_lhs;
  };
  protoOf(RealMemoryCache).get_wei43m_k$ = function (key) {
    return this.get_h31hzz_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealMemoryCache).set_1tg0p3_k$ = function (key, value) {
    this.strongMemoryCache_1.set_b9w55f_k$(key, value);
  };
  protoOf(RealMemoryCache).set_b9w55f_k$ = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.set_1tg0p3_k$(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(RealMemoryCache).remove_1r2rzn_k$ = function (key) {
    var removedStrong = this.strongMemoryCache_1.remove_gppy8k_k$(key);
    var removedWeak = this.weakMemoryCache_1.remove_gppy8k_k$(key);
    return removedStrong ? true : removedWeak;
  };
  protoOf(RealMemoryCache).remove_gppy8k_k$ = function (key) {
    return this.remove_1r2rzn_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealMemoryCache).clear_j9egeb_k$ = function () {
    this.strongMemoryCache_1.evictAll_sdrs94_k$();
    this.weakMemoryCache_1.evictAll_sdrs94_k$();
  };
  function StrongMemoryCache() {
  }
  function _get_weakMemoryCache__eo3r9k_0($this) {
    return $this.weakMemoryCache_1;
  }
  function _get_valueSizeProvider__iw8olq_0($this) {
    return $this.valueSizeProvider_1;
  }
  function _get_cache__j44d4h_0($this) {
    return $this.cache_1;
  }
  function InternalValue(value, size) {
    this.value_1 = value;
    this.size_1 = size;
  }
  protoOf(InternalValue).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(InternalValue).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function RealStrongMemoryCache$cache$1($maxSize, this$0) {
    this.this$0__1 = this$0;
    LruCache.call(this, $maxSize);
  }
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_ao5wq5_k$ = function (key, value) {
    return value.size_1;
  };
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_pwp2ab_k$ = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.sizeOf_ao5wq5_k$(tmp, value instanceof InternalValue ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_gdt01f_k$ = function (evicted, key, oldValue, newValue) {
    return this.this$0__1.weakMemoryCache_1.set_ioq33f_k$(key, oldValue.value_1, oldValue.size_1);
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_qj0tu1_k$ = function (evicted, key, oldValue, newValue) {
    var tmp = !(key == null) ? key : THROW_CCE();
    var tmp_0 = oldValue instanceof InternalValue ? oldValue : THROW_CCE();
    return this.entryRemoved_gdt01f_k$(evicted, tmp, tmp_0, (newValue == null ? true : newValue instanceof InternalValue) ? newValue : THROW_CCE());
  };
  function RealStrongMemoryCache(maxSize, weakMemoryCache, valueSizeProvider) {
    this.weakMemoryCache_1 = weakMemoryCache;
    this.valueSizeProvider_1 = valueSizeProvider;
    var tmp = this;
    tmp.cache_1 = new RealStrongMemoryCache$cache$1(maxSize, this);
  }
  protoOf(RealStrongMemoryCache).get_size_woubt6_k$ = function () {
    return this.cache_1.size_23och_k$();
  };
  protoOf(RealStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return this.cache_1.maxSize_dyjl39_k$();
  };
  protoOf(RealStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return this.cache_1.snapshot_4plubo_k$().get_keys_wop4xp_k$();
  };
  protoOf(RealStrongMemoryCache).get_h31hzz_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_h31hzz_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value_1;
  };
  protoOf(RealStrongMemoryCache).get_wei43m_k$ = function (key) {
    return this.get_h31hzz_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache).set_1tg0p3_k$ = function (key, value) {
    var size = this.valueSizeProvider_1(value);
    if (size <= this.get_maxSize_f83j4s_k$()) {
      this.cache_1.put_fa630k_k$(key, new InternalValue(value, size));
    } else {
      this.cache_1.remove_1r2rzn_k$(key);
      this.weakMemoryCache_1.set_ioq33f_k$(key, value, size);
    }
  };
  protoOf(RealStrongMemoryCache).set_b9w55f_k$ = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.set_1tg0p3_k$(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache).remove_1r2rzn_k$ = function (key) {
    return !(this.cache_1.remove_1r2rzn_k$(key) == null);
  };
  protoOf(RealStrongMemoryCache).remove_gppy8k_k$ = function (key) {
    return this.remove_1r2rzn_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache).evictAll_sdrs94_k$ = function () {
    this.cache_1.evictAll_sdrs94_k$();
  };
  function _get_weakMemoryCache__eo3r9k_1($this) {
    return $this.weakMemoryCache_1;
  }
  function _get_valueSizeProvider__iw8olq_1($this) {
    return $this.valueSizeProvider_1;
  }
  function EmptyStrongMemoryCache(weakMemoryCache, valueSizeProvider) {
    this.weakMemoryCache_1 = weakMemoryCache;
    this.valueSizeProvider_1 = valueSizeProvider;
  }
  protoOf(EmptyStrongMemoryCache).get_size_woubt6_k$ = function () {
    return 0;
  };
  protoOf(EmptyStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return 0;
  };
  protoOf(EmptyStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyStrongMemoryCache).get_h31hzz_k$ = function (key) {
    return null;
  };
  protoOf(EmptyStrongMemoryCache).get_wei43m_k$ = function (key) {
    return this.get_h31hzz_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(EmptyStrongMemoryCache).set_1tg0p3_k$ = function (key, value) {
    this.weakMemoryCache_1.set_ioq33f_k$(key, value, this.valueSizeProvider_1(value));
  };
  protoOf(EmptyStrongMemoryCache).set_b9w55f_k$ = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.set_1tg0p3_k$(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(EmptyStrongMemoryCache).remove_1r2rzn_k$ = function (key) {
    return false;
  };
  protoOf(EmptyStrongMemoryCache).remove_gppy8k_k$ = function (key) {
    return this.remove_1r2rzn_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(EmptyStrongMemoryCache).evictAll_sdrs94_k$ = function () {
    return Unit_getInstance();
  };
  function WeakMemoryCache() {
  }
  function _get_CLEAN_UP_INTERVAL__upkbmm($this) {
    return $this.CLEAN_UP_INTERVAL_1;
  }
  function _get_valueHashProvider__unhjhb_0($this) {
    return $this.valueHashProvider_1;
  }
  function _set_operationsSinceCleanUp__arn42n($this, _set____db54di) {
    $this.operationsSinceCleanUp_1 = _set____db54di;
  }
  function _get_operationsSinceCleanUp__bhgcd1($this) {
    return $this.operationsSinceCleanUp_1;
  }
  function _get_syncObject__eretwv_0($this) {
    return $this.syncObject_1;
  }
  function cleanUpIfNecessary($this) {
    var tmp1 = $this.operationsSinceCleanUp_1;
    $this.operationsSinceCleanUp_1 = tmp1 + 1 | 0;
    if (tmp1 >= 10) {
      $this.cleanUp_l0p3bg_k$();
    }
  }
  function InternalValue_0(identityHashCode, value, size) {
    this.identityHashCode_1 = identityHashCode;
    this.value_1 = value;
    this.size_1 = size;
  }
  protoOf(InternalValue_0).get_identityHashCode_4lvuwu_k$ = function () {
    return this.identityHashCode_1;
  };
  protoOf(InternalValue_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(InternalValue_0).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.CLEAN_UP_INTERVAL_1 = 10;
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function RealWeakMemoryCache(valueHashProvider) {
    Companion_getInstance_16();
    this.valueHashProvider_1 = valueHashProvider;
    this.cache_1 = LinkedHashMap_init_$Create$();
    this.operationsSinceCleanUp_1 = 0;
    this.syncObject_1 = new Object();
  }
  protoOf(RealWeakMemoryCache).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(RealWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.<get-keys>.<anonymous>' call
    return toSet(this.cache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealWeakMemoryCache).get_h31hzz_k$ = function (key) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    var tmp0_elvis_lhs = this.cache_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var values = tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'com.seiko.imageloader.util.firstNotNullOfOrNullIndices' call
      var inductionVariable = 0;
      var last = values.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.get.<anonymous>.<anonymous>' call
          var tmp1_safe_receiver = values.get_c1px32_k$(i).value_1.get_26vq_k$();
          if (tmp1_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            tmp$ret$1 = tmp1_safe_receiver;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var value = tmp$ret$1;
    cleanUpIfNecessary(this);
    return value;
  };
  protoOf(RealWeakMemoryCache).get_wei43m_k$ = function (key) {
    return this.get_h31hzz_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealWeakMemoryCache).set_xc7vwx_k$ = function (key, value, size) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cache_1;
    var value_0 = this_0.get_wei43m_k$(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.set.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.arrayListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var cacheValues = tmp;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.set.<anonymous>.<anonymous>' call
      var identityHashCode = this.valueHashProvider_1(value);
      var newCacheValue = new InternalValue_0(identityHashCode, new WeakReference(value), size);
      var inductionVariable = 0;
      var last = cacheValues.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var cacheValue = cacheValues.get_c1px32_k$(index);
          if (size >= cacheValue.size_1) {
            if (cacheValue.identityHashCode_1 === identityHashCode ? cacheValue.value_1.get_26vq_k$() === value : false) {
              cacheValues.set_82063s_k$(index, newCacheValue);
            } else {
              cacheValues.add_dl6gt3_k$(index, newCacheValue);
            }
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.collections.plusAssign' call
      cacheValues.add_utx5q5_k$(newCacheValue);
    }
    cleanUpIfNecessary(this);
    return Unit_getInstance();
  };
  protoOf(RealWeakMemoryCache).set_ioq33f_k$ = function (key, value, size) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.set_xc7vwx_k$(tmp, !(value == null) ? value : THROW_CCE(), size);
  };
  protoOf(RealWeakMemoryCache).remove_1r2rzn_k$ = function (key) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    return !(this.cache_1.remove_gppy8k_k$(key) == null);
  };
  protoOf(RealWeakMemoryCache).remove_gppy8k_k$ = function (key) {
    return this.remove_1r2rzn_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(RealWeakMemoryCache).evictAll_sdrs94_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    this.operationsSinceCleanUp_1 = 0;
    this.cache_1.clear_j9egeb_k$();
    return Unit_getInstance();
  };
  protoOf(RealWeakMemoryCache).cleanUp_l0p3bg_k$ = function () {
    this.operationsSinceCleanUp_1 = 0;
    var iterator = this.cache_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var list = iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.count' call
      if (list.get_size_woubt6_k$() <= 1) {
        var tmp0_safe_receiver = firstOrNull(list);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_26vq_k$()) == null) {
          iterator.remove_ldkf9o_k$();
        }
      } else {
        // Inline function 'com.seiko.imageloader.util.removeIfIndices' call
        var numDeleted = 0;
        var inductionVariable = 0;
        var last = list.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var rawIndex = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var index = rawIndex - numDeleted | 0;
            // Inline function 'com.seiko.imageloader.cache.memory.RealWeakMemoryCache.cleanUp.<anonymous>' call
            if (list.get_c1px32_k$(index).value_1.get_26vq_k$() == null) {
              list.removeAt_6niowx_k$(index);
              numDeleted = numDeleted + 1 | 0;
            }
          }
           while (inductionVariable <= last);
        if (list.isEmpty_y1axqb_k$()) {
          iterator.remove_ldkf9o_k$();
        }
      }
    }
  };
  function EmptyWeakMemoryCache() {
  }
  protoOf(EmptyWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyWeakMemoryCache).get_wei43m_k$ = function (key) {
    return null;
  };
  protoOf(EmptyWeakMemoryCache).set_ioq33f_k$ = function (key, value, size) {
    return Unit_getInstance();
  };
  protoOf(EmptyWeakMemoryCache).remove_gppy8k_k$ = function (key) {
    return false;
  };
  protoOf(EmptyWeakMemoryCache).evictAll_sdrs94_k$ = function () {
    return Unit_getInstance();
  };
  function get_$stableprop_4() {
    return 0;
  }
  function ComponentRegistry(mappers, keyers, fetcherFactories, decoderFactories) {
    this.mappers_1 = mappers;
    this.keyers_1 = keyers;
    this.fetcherFactories_1 = fetcherFactories;
    this.decoderFactories_1 = decoderFactories;
    this.$stable_1 = 0;
  }
  protoOf(ComponentRegistry).get_mappers_f47lux_k$ = function () {
    return this.mappers_1;
  };
  protoOf(ComponentRegistry).get_keyers_fn8asw_k$ = function () {
    return this.keyers_1;
  };
  protoOf(ComponentRegistry).get_fetcherFactories_4dfruy_k$ = function () {
    return this.fetcherFactories_1;
  };
  protoOf(ComponentRegistry).get_decoderFactories_plk5cd_k$ = function () {
    return this.decoderFactories_1;
  };
  protoOf(ComponentRegistry).merge_w5qkmd_k$ = function (component) {
    return new ComponentRegistry(plus_0(this.mappers_1, component.mappers_1), plus_0(this.keyers_1, component.keyers_1), plus_0(this.fetcherFactories_1, component.fetcherFactories_1), plus_0(this.decoderFactories_1, component.decoderFactories_1));
  };
  protoOf(ComponentRegistry).map_8rwlof_k$ = function (data, options) {
    var mappedData = data;
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var this_0 = this.mappers_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.component.ComponentRegistry.map.<anonymous>' call
        var tmp0_safe_receiver = this_0.get_c1px32_k$(i).map_8rwlof_k$(mappedData, options);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          mappedData = tmp0_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return mappedData;
  };
  protoOf(ComponentRegistry).key_w147v4_k$ = function (data, options, type) {
    // Inline function 'com.seiko.imageloader.util.forEachIndices' call
    var this_0 = this.keyers_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.seiko.imageloader.component.ComponentRegistry.key.<anonymous>' call
        var tmp0_safe_receiver = this_0.get_c1px32_k$(i).key_w147v4_k$(data, options, type);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return tmp0_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return null;
  };
  protoOf(ComponentRegistry).fetch_j08txz_k$ = function (data, options, startIndex) {
    var inductionVariable = startIndex;
    var last = this.fetcherFactories_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.fetcherFactories_1.get_c1px32_k$(index);
        var tmp1_safe_receiver = factory.create_dmsnq7_k$(data, options);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return to(tmp1_safe_receiver, index);
        }
      }
       while (inductionVariable < last);
    throw RuntimeException_init_$Create$('Unable to create a fetcher that supports: ' + toString(data));
  };
  protoOf(ComponentRegistry).fetch$default_c8nxez_k$ = function (data, options, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.fetch_j08txz_k$(data, options, startIndex) : $super.fetch_j08txz_k$.call(this, data, options, startIndex);
  };
  protoOf(ComponentRegistry).decode_stth5e_k$ = function (source, options, startIndex) {
    var inductionVariable = startIndex;
    var last = this.decoderFactories_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.decoderFactories_1.get_c1px32_k$(index);
        var tmp1_safe_receiver = factory.create_5rdwro_k$(source, options);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return to(tmp1_safe_receiver, index);
        }
      }
       while (inductionVariable < last);
    throw RuntimeException_init_$Create$('Unable to create a decoder that supports: ' + source);
  };
  protoOf(ComponentRegistry).decode$default_pvwc4i_k$ = function (source, options, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.decode_stth5e_k$(source, options, startIndex) : $super.decode_stth5e_k$.call(this, source, options, startIndex);
  };
  protoOf(ComponentRegistry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComponentRegistry))
      return false;
    var tmp0_other_with_cast = other instanceof ComponentRegistry ? other : THROW_CCE();
    if (!equals(this.mappers_1, tmp0_other_with_cast.mappers_1))
      return false;
    if (!equals(this.keyers_1, tmp0_other_with_cast.keyers_1))
      return false;
    if (!equals(this.fetcherFactories_1, tmp0_other_with_cast.fetcherFactories_1))
      return false;
    if (!equals(this.decoderFactories_1, tmp0_other_with_cast.decoderFactories_1))
      return false;
    return true;
  };
  protoOf(ComponentRegistry).hashCode = function () {
    var result = hashCode(this.mappers_1);
    result = imul(result, 31) + hashCode(this.keyers_1) | 0;
    result = imul(result, 31) + hashCode(this.fetcherFactories_1) | 0;
    result = imul(result, 31) + hashCode(this.decoderFactories_1) | 0;
    return result;
  };
  protoOf(ComponentRegistry).toString = function () {
    return 'ComponentRegistry(mappers=' + this.mappers_1 + ', keyers=' + this.keyers_1 + ', fetcherFactories=' + this.fetcherFactories_1 + ', decoderFactories=' + this.decoderFactories_1 + ')';
  };
  function _get_mappers__wnn2td($this) {
    return $this.mappers_1;
  }
  function _get_keyers__obfpdw($this) {
    return $this.keyers_1;
  }
  function _get_fetcherFactories__36gp2i($this) {
    return $this.fetcherFactories_1;
  }
  function _get_decoderFactories__lw7taf($this) {
    return $this.decoderFactories_1;
  }
  function ComponentRegistryBuilder_init_$Init$(componentRegistry, $this) {
    ComponentRegistryBuilder.call($this, toMutableList(componentRegistry.get_mappers_f47lux_k$()), toMutableList(componentRegistry.get_keyers_fn8asw_k$()), toMutableList(componentRegistry.get_fetcherFactories_4dfruy_k$()), toMutableList(componentRegistry.get_decoderFactories_plk5cd_k$()));
    return $this;
  }
  function ComponentRegistryBuilder_init_$Create$(componentRegistry) {
    return ComponentRegistryBuilder_init_$Init$(componentRegistry, objectCreate(protoOf(ComponentRegistryBuilder)));
  }
  function get_$stableprop_5() {
    return 0;
  }
  function ComponentRegistryBuilder(mappers, keyers, fetcherFactories, decoderFactories) {
    var tmp;
    if (mappers === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = mappers;
    }
    mappers = tmp;
    var tmp_0;
    if (keyers === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0 = ArrayList_init_$Create$_0();
    } else {
      tmp_0 = keyers;
    }
    keyers = tmp_0;
    var tmp_1;
    if (fetcherFactories === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_1 = ArrayList_init_$Create$_0();
    } else {
      tmp_1 = fetcherFactories;
    }
    fetcherFactories = tmp_1;
    var tmp_2;
    if (decoderFactories === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_2 = ArrayList_init_$Create$_0();
    } else {
      tmp_2 = decoderFactories;
    }
    decoderFactories = tmp_2;
    this.mappers_1 = mappers;
    this.keyers_1 = keyers;
    this.fetcherFactories_1 = fetcherFactories;
    this.decoderFactories_1 = decoderFactories;
    this.$stable_1 = 0;
  }
  protoOf(ComponentRegistryBuilder).takeFrom_ag5gtl_k$ = function (componentRegistry, clearComponents) {
    if (clearComponents) {
      this.mappers_1.clear_j9egeb_k$();
      this.keyers_1.clear_j9egeb_k$();
      this.fetcherFactories_1.clear_j9egeb_k$();
      this.decoderFactories_1.clear_j9egeb_k$();
    }
    this.mappers_1.addAll_4lagoh_k$(componentRegistry.get_mappers_f47lux_k$());
    this.keyers_1.addAll_4lagoh_k$(componentRegistry.get_keyers_fn8asw_k$());
    this.fetcherFactories_1.addAll_4lagoh_k$(componentRegistry.get_fetcherFactories_4dfruy_k$());
    this.decoderFactories_1.addAll_4lagoh_k$(componentRegistry.get_decoderFactories_plk5cd_k$());
  };
  protoOf(ComponentRegistryBuilder).takeFrom$default_voolls_k$ = function (componentRegistry, clearComponents, $super) {
    clearComponents = clearComponents === VOID ? false : clearComponents;
    var tmp;
    if ($super === VOID) {
      this.takeFrom_ag5gtl_k$(componentRegistry, clearComponents);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.takeFrom_ag5gtl_k$.call(this, componentRegistry, clearComponents);
    }
    return tmp;
  };
  protoOf(ComponentRegistryBuilder).add_boakm2_k$ = function (mapper) {
    this.mappers_1.add_utx5q5_k$(mapper);
  };
  protoOf(ComponentRegistryBuilder).add_dbbzct_k$ = function (keyer) {
    this.keyers_1.add_utx5q5_k$(keyer);
  };
  protoOf(ComponentRegistryBuilder).add_s31o97_k$ = function (fetcherFactory) {
    this.fetcherFactories_1.add_utx5q5_k$(fetcherFactory);
  };
  protoOf(ComponentRegistryBuilder).add_nxqec1_k$ = function (decoderFactory) {
    this.decoderFactories_1.add_utx5q5_k$(decoderFactory);
  };
  protoOf(ComponentRegistryBuilder).build_1k0s4u_k$ = function () {
    return new ComponentRegistry(this.mappers_1, this.keyers_1, this.fetcherFactories_1, this.decoderFactories_1);
  };
  function setupKtorComponents(_this__u8e3s4, httpClient) {
    httpClient = httpClient === VOID ? get_httpEngineFactory() : httpClient;
    _this__u8e3s4.add_boakm2_k$(new KtorUrlMapper());
    _this__u8e3s4.add_dbbzct_k$(new KtorUrlKeyer());
    _this__u8e3s4.add_s31o97_k$(new Factory_3(httpClient));
  }
  function setupBase64Components(_this__u8e3s4) {
    _this__u8e3s4.add_s31o97_k$(new Factory_0());
  }
  function setupCommonComponents(_this__u8e3s4) {
    _this__u8e3s4.add_boakm2_k$(new StringUriMapper());
    _this__u8e3s4.add_s31o97_k$(new Factory_1());
  }
  function Factory() {
  }
  function Decoder() {
  }
  function get_$stableprop_6() {
    return 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function OfBitmap(bitmap) {
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(OfBitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(OfBitmap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfBitmap))
      return false;
    var tmp0_other_with_cast = other instanceof OfBitmap ? other : THROW_CCE();
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  protoOf(OfBitmap).hashCode = function () {
    return this.bitmap_1.hashCode();
  };
  protoOf(OfBitmap).toString = function () {
    return 'OfBitmap(bitmap=' + this.bitmap_1 + ')';
  };
  function OfImage(image) {
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(OfImage).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(OfImage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfImage))
      return false;
    var tmp0_other_with_cast = other instanceof OfImage ? other : THROW_CCE();
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  protoOf(OfImage).hashCode = function () {
    return this.image_1.hashCode();
  };
  protoOf(OfImage).toString = function () {
    return 'OfImage(image=' + this.image_1 + ')';
  };
  function OfPainter(painter) {
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(OfPainter).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(OfPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfPainter))
      return false;
    var tmp0_other_with_cast = other instanceof OfPainter ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  protoOf(OfPainter).hashCode = function () {
    return hashCode(this.painter_1);
  };
  protoOf(OfPainter).toString = function () {
    return 'OfPainter(painter=' + this.painter_1 + ')';
  };
  function DecodeResult() {
  }
  function isApplicable($this, data) {
    return startsWith(data, 'data:');
  }
  function get_$stableprop_9() {
    return 0;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function Factory_0() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_0).create_dmsnq7_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    if (!isApplicable(this, data))
      return null;
    return new Base64Fetcher(data);
  };
  function get_$stableprop_10() {
    return 0;
  }
  function Base64Fetcher$fetch$lambda($contentType) {
    return function ($this$extraData) {
      mimeType($this$extraData, $contentType);
      return Unit_getInstance();
    };
  }
  function Base64Fetcher(data) {
    this.data_1 = data;
    this.$stable_1 = 0;
  }
  protoOf(Base64Fetcher).fetch_3v096j_k$ = function ($completion) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.component.fetcher.Base64Fetcher.fetch.<anonymous>' call
    var it = split(this.data_1, charArrayOf([_Char___init__impl__6a9atx(44)]));
    var tmp0_safe_receiver = firstOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, 'data:');
    var contentType = tmp1_safe_receiver == null ? null : removeSuffix(tmp1_safe_receiver, ';base64');
    var content = last(it);
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.component.fetcher.Base64Fetcher.fetch.<anonymous>.<anonymous>' call
    this_0.write_ldf0ov_k$(decodeBase64Bytes(content));
    var tmp = this_0;
    return new OfSource(tmp, extraData(Base64Fetcher$fetch$lambda(contentType)));
  };
  protoOf(Base64Fetcher).fetch_9ge20s_k$ = function ($completion) {
    return this.fetch_3v096j_k$($completion);
  };
  function get_$stableprop_11() {
    return 0;
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  function Factory_1() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_1).create_dmsnq7_k$ = function (data, options) {
    if (!(data instanceof Bitmap))
      return null;
    return new BitmapFetcher(data);
  };
  function get_$stableprop_12() {
    return 0;
  }
  function BitmapFetcher(data) {
    this.data_1 = data;
    this.$stable_1 = 0;
  }
  protoOf(BitmapFetcher).fetch_3v096j_k$ = function ($completion) {
    return new OfBitmap_0(this.data_1);
  };
  protoOf(BitmapFetcher).fetch_9ge20s_k$ = function ($completion) {
    return this.fetch_3v096j_k$($completion);
  };
  function Factory_2() {
  }
  function Fetcher() {
  }
  function get_$stableprop_13() {
    return 0;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function OfSource(source, extra) {
    extra = extra === VOID ? get_EmptyExtraData() : extra;
    this.source_1 = source;
    this.extra_1 = extra;
    this.$stable_1 = 0;
  }
  protoOf(OfSource).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(OfSource).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(OfSource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfSource))
      return false;
    var tmp0_other_with_cast = other instanceof OfSource ? other : THROW_CCE();
    if (!equals(this.source_1, tmp0_other_with_cast.source_1))
      return false;
    if (!equals(this.extra_1, tmp0_other_with_cast.extra_1))
      return false;
    return true;
  };
  protoOf(OfSource).hashCode = function () {
    var result = hashCode(this.source_1);
    result = imul(result, 31) + hashCode(this.extra_1) | 0;
    return result;
  };
  protoOf(OfSource).toString = function () {
    return 'OfSource(source=' + this.source_1 + ', extra=' + this.extra_1 + ')';
  };
  function OfBitmap_0(bitmap) {
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(OfBitmap_0).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(OfBitmap_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfBitmap_0))
      return false;
    var tmp0_other_with_cast = other instanceof OfBitmap_0 ? other : THROW_CCE();
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  protoOf(OfBitmap_0).hashCode = function () {
    return this.bitmap_1.hashCode();
  };
  protoOf(OfBitmap_0).toString = function () {
    return 'OfBitmap(bitmap=' + this.bitmap_1 + ')';
  };
  function OfImage_0(image) {
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(OfImage_0).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(OfImage_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfImage_0))
      return false;
    var tmp0_other_with_cast = other instanceof OfImage_0 ? other : THROW_CCE();
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  protoOf(OfImage_0).hashCode = function () {
    return this.image_1.hashCode();
  };
  protoOf(OfImage_0).toString = function () {
    return 'OfImage(image=' + this.image_1 + ')';
  };
  function OfPainter_0(painter) {
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(OfPainter_0).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(OfPainter_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfPainter_0))
      return false;
    var tmp0_other_with_cast = other instanceof OfPainter_0 ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  protoOf(OfPainter_0).hashCode = function () {
    return hashCode(this.painter_1);
  };
  protoOf(OfPainter_0).toString = function () {
    return 'OfPainter(painter=' + this.painter_1 + ')';
  };
  function FetchResult() {
  }
  function _get_httpClient__2ty1zc($this) {
    return $this.httpClient_1;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function _get_httpUrl__wyk5re($this) {
    return $this.httpUrl_1;
  }
  function _get_httpClient__2ty1zc_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.httpClient$delegate_1;
    httpClient$factory();
    return this_0.get_value_j01efc_k$();
  }
  function Factory_3(httpClient) {
    this.httpClient_1 = httpClient;
    this.$stable_1 = 0;
  }
  protoOf(Factory_3).create_dmsnq7_k$ = function (data, options) {
    if (data instanceof Url)
      return new KtorUrlFetcher(data, this.httpClient_1);
    return null;
  };
  function get_$stableprop_18() {
    return 8;
  }
  function KtorUrlFetcher$fetch$lambda($response) {
    return function ($this$extraData) {
      var tmp0_safe_receiver = contentType($response);
      mimeType($this$extraData, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
      return Unit_getInstance();
    };
  }
  function $fetchCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = _get_httpClient__2ty1zc_0(this._this__u8e3s4__1);
            var tmp_1 = this;
            tmp_1.this1__1 = this.this0__1;
            var tmp_2 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this._this__u8e3s4__1.httpUrl_1);
            tmp_2.builder2__1 = this_0;
            this.set_state_rjd8d0_k$(1);
            suspendResult = (new HttpStatement(this.builder2__1, this.this1__1)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response3__1 = suspendResult;
            if (isSuccess(this.response3__1.get_status_jnf6d7_k$())) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = bodyAsChannel(this.response3__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            throw new KtorUrlRequestException('code:' + this.response3__1.get_status_jnf6d7_k$().get_value_j01efc_k$() + ', ' + this.response3__1.get_status_jnf6d7_k$().get_description_emjre5_k$());
          case 3:
            this.ARGUMENT4__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            suspendResult = source_0(this.ARGUMENT4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            return new OfSource(ARGUMENT, extraData(KtorUrlFetcher$fetch$lambda(this.response3__1)));
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
  function KtorUrlFetcher(httpUrl, httpClient) {
    this.httpUrl_1 = httpUrl;
    this.httpClient$delegate_1 = lazy(httpClient);
    this.$stable_1 = 8;
  }
  protoOf(KtorUrlFetcher).fetch_3v096j_k$ = function ($completion) {
    var tmp = new $fetchCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KtorUrlFetcher).fetch_9ge20s_k$ = function ($completion) {
    return this.fetch_3v096j_k$($completion);
  };
  function KtorUrlRequestException(msg) {
    RuntimeException_init_$Init$(msg, this);
    captureStack(this, KtorUrlRequestException);
  }
  function httpClient$factory() {
    return getPropertyCallableRef('httpClient', 1, KProperty1, function (receiver) {
      return _get_httpClient__2ty1zc_0(receiver);
    }, null);
  }
  var Type_Memory_instance;
  var Type_Disk_instance;
  function values_1() {
    return [Type_Memory_getInstance(), Type_Disk_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Memory':
        return Type_Memory_getInstance();
      case 'Disk':
        return Type_Disk_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_Memory_instance = new Type('Memory', 0);
    Type_Disk_instance = new Type('Disk', 1);
  }
  var $ENTRIES_1;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Type_Memory_getInstance() {
    Type_initEntries();
    return Type_Memory_instance;
  }
  function Type_Disk_getInstance() {
    Type_initEntries();
    return Type_Disk_instance;
  }
  function Keyer() {
  }
  function memorySuffix($this, options) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.component.keyer.KtorUrlKeyer.memorySuffix.<anonymous>' call
    if (options.get_allowInexactSize_oi0b8b_k$()) {
      this_0.append_22ad7x_k$('-allowInexactSize');
    }
    if (!options.get_premultipliedAlpha_wtnhn3_k$()) {
      this_0.append_22ad7x_k$('-premultipliedAlpha');
    }
    if (!options.get_bitmapConfig_8srt5y_k$().equals(Companion_getInstance_12().get_Default_goqax4_k$())) {
      this_0.append_22ad7x_k$('-imageConfig=' + options.get_bitmapConfig_8srt5y_k$());
    }
    if (!options.get_scale_iyf28x_k$().equals(Scale_FILL_getInstance())) {
      this_0.append_22ad7x_k$('-scale=fit');
    }
    if (!options.get_playAnimate_9telp8_k$()) {
      this_0.append_22ad7x_k$('-noPlay');
    }
    if (!(options.get_maxImageSize_xiohxb_k$() === get_DEFAULT_MAX_IMAGE_SIZE())) {
      this_0.append_22ad7x_k$('-maxSize' + options.get_maxImageSize_xiohxb_k$());
    }
    return this_0.toString();
  }
  function get_$stableprop_19() {
    return 0;
  }
  function KtorUrlKeyer() {
    this.$stable_1 = 0;
  }
  protoOf(KtorUrlKeyer).key_w147v4_k$ = function (data, options, type) {
    if (!(data instanceof Url))
      return null;
    var tmp;
    switch (type.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = memorySuffix(this, options);
        break;
      case 1:
        tmp = '';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var playAnimeSuffix = tmp;
    return toString(data) + playAnimeSuffix;
  };
  function isApplicable_0($this, data) {
    return startsWith(data, 'http:') ? true : startsWith(data, 'https:');
  }
  function get_$stableprop_20() {
    return 0;
  }
  function KtorUrlMapper() {
    this.$stable_1 = 0;
  }
  protoOf(KtorUrlMapper).map_8rwlof_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    if (!isApplicable_0(this, data))
      return null;
    return Url_0(data);
  };
  function Mapper() {
  }
  function get_$stableprop_21() {
    return 0;
  }
  function StringUriMapper() {
    this.$stable_1 = 0;
  }
  protoOf(StringUriMapper).map_8rwlof_k$ = function (data, options) {
    if (!(typeof data === 'string'))
      return null;
    if (startsWith(data, 'data:'))
      return null;
    if (startsWith(data, 'http:'))
      return null;
    if (startsWith(data, 'https:'))
      return null;
    return Companion_getInstance_3().parseOrNull_7h2hqb_k$(data);
  };
  function proceed($this, chain, request, $completion) {
    var tmp = new $proceedCOROUTINE$1($this, chain, request, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function decode($this, components, source, options, $completion) {
    var tmp = new $decodeCOROUTINE$2($this, components, source, options, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_22() {
    return 0;
  }
  function DecodeInterceptor$proceed$lambda$lambda($options) {
    return function ($this$options) {
      $this$options.set_retryIfDiskDecodeError_396xmo_k$(false);
      var tmp0 = $options.get_diskCachePolicy_b6aqha_k$().get_ordinal_ip24qg_k$();
      $this$options.set_diskCachePolicy_ks02ro_k$((tmp0 === 0 ? true : tmp0 === 1) ? CachePolicy_WRITE_ONLY_getInstance() : $options.get_diskCachePolicy_b6aqha_k$());
      return Unit_getInstance();
    };
  }
  function DecodeInterceptor$proceed$lambda($request, $options) {
    return function ($this$ImageRequest) {
      $this$ImageRequest.takeFrom$default_ciyigu_k$($request);
      $this$ImageRequest.options_l3gknx_k$(DecodeInterceptor$proceed$lambda$lambda($options));
      return Unit_getInstance();
    };
  }
  function $proceedCOROUTINE$1(_this__u8e3s4, chain, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
    this.request_1 = request;
  }
  protoOf($proceedCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.options0__1 = this.chain_1.get_options_jecmyz_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.chain_1.proceed_46izof_k$(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.result1__1 = suspendResult;
            var tmp_0 = this.result1__1;
            if (tmp_0 instanceof OfSource_0) {
              var tmp_1 = this;
              tmp_1.this3__1 = this._this__u8e3s4__1;
              this.set_exceptionState_fex74n_k$(3);
              var tmp_2 = this;
              tmp_2.this5__1 = Companion_getInstance_4();
              var tmp_3 = this;
              tmp_3.$this$runCatching6__1 = this.this3__1;
              this.set_state_rjd8d0_k$(2);
              suspendResult = decode(this.$this$runCatching6__1, this.chain_1.get_components_rknech_k$(), this.result1__1, this.options0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT2__1 = this.result1__1;
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

          case 2:
            this.value7__1 = suspendResult;
            this.TRY_RESULT4__1 = _Result___init__impl__xyqfz8(this.value7__1);
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof Error) {
              this.e8__1 = this.get_exception_x0n6w6_k$();
              var tmp_5 = this;
              Companion_getInstance_4();
              var exception = this.e8__1;
              tmp_5.TRY_RESULT4__1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(9);
            this.this9__1 = this.TRY_RESULT4__1;
            this.exception10__1 = Result__exceptionOrNull_impl_p6xea9(this.this9__1);
            if (this.exception10__1 == null) {
              var tmp_6 = this;
              var tmp_7 = _Result___get_value__impl__bjfvqg(this.this9__1);
              var it = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
              tmp_6.WHEN_RESULT11__1 = toImageResult(it);
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              var tmp_8 = this;
              tmp_8.it12__1 = this.exception10__1;
              if (this.options0__1.get_retryIfDiskDecodeError_p5wx8h_k$() ? this.result1__1.get_dataSource_vce0e_k$().equals(DataSource_Disk_getInstance()) : false) {
                var tmp_9 = this;
                var request = this.request_1;
                tmp_9.noDiskCacheRequest14__1 = ImageRequest_2(DecodeInterceptor$proceed$lambda(request, this.options0__1));
                this.set_state_rjd8d0_k$(5);
                suspendResult = proceed(this._this__u8e3s4__1, this.chain_1, this.noDiskCacheRequest14__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_10 = this;
                throw this.it12__1;
              }
            }

          case 5:
            this.WHEN_RESULT13__1 = suspendResult;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.WHEN_RESULT11__1 = this.WHEN_RESULT13__1;
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.WHEN_RESULT2__1 = this.WHEN_RESULT11__1;
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            return this.WHEN_RESULT2__1;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$2(_this__u8e3s4, components, source, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.components_1 = components;
    this.source_1 = source;
    this.options_1 = options;
  }
  protoOf($decodeCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.searchIndex0__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.tmp0_container2__1 = this.components_1.decode_stth5e_k$(this.source_1, this.options_1, this.searchIndex0__1);
            this.decoder3__1 = this.tmp0_container2__1.component1_7eebsc_k$();
            this.index4__1 = this.tmp0_container2__1.component2_7eebsb_k$();
            this.searchIndex0__1 = this.index4__1 + 1 | 0;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.decoder3__1.decode_3mjp2j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            if (!(result == null)) {
              this.decodeResult1__1 = result;
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            return this.decodeResult1__1;
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
  function DecodeInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(DecodeInterceptor).intercept_gc3vzw_k$ = function (chain, $completion) {
    return proceed(this, chain, chain.get_request_jdwg4m_k$(), $completion);
  };
  function toImageResult(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof OfBitmap) {
      tmp = new OfBitmap_1(_this__u8e3s4.get_bitmap_bfxu7s_k$());
    } else {
      if (_this__u8e3s4 instanceof OfImage) {
        tmp = new OfImage_1(_this__u8e3s4.get_image_it3i2a_k$());
      } else {
        if (_this__u8e3s4 instanceof OfPainter) {
          tmp = new OfPainter_1(_this__u8e3s4.get_painter_bzl4ri_k$());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function _get_diskCache__chwufg($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.diskCache$delegate_1;
    diskCache$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_fileSystem__siywv4_1($this) {
    return _get_diskCache__chwufg($this).get_fileSystem_9p6nv8_k$();
  }
  function readFromDiskCache($this, options, cacheKey) {
    var tmp;
    if (options.get_diskCachePolicy_b6aqha_k$().get_readEnabled_oyc6n2_k$()) {
      tmp = _get_diskCache__chwufg($this).openSnapshot_67z3ik_k$(cacheKey);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function writeToDiskCache($this, options, cacheKey, snapshot, source) {
    if (!options.get_diskCachePolicy_b6aqha_k$().get_writeEnabled_mrjiqz_k$()) {
      if (snapshot == null)
        null;
      else {
        closeQuietly(snapshot);
      }
      return null;
    }
    var tmp2_elvis_lhs = snapshot == null ? null : snapshot.closeAndOpenEditor_du1eh6_k$();
    var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? _get_diskCache__chwufg($this).openEditor_5w5t8d_k$(cacheKey) : tmp2_elvis_lhs;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var editor = tmp;
    try {
      // Inline function 'okio.FileSystem.write' call
      var this_0 = _get_fileSystem__siywv4_1($this);
      var file = editor.get_data_wokkxf_k$();
      // Inline function 'okio.use' call
      var this_1 = buffer_0(this_0.sink_3ey1xj_k$(file, false));
      var result = null;
      var thrown = null;
      try {
        // Inline function 'okio.FileSystem.write.<anonymous>' call
        // Inline function 'com.seiko.imageloader.intercept.DiskCacheInterceptor.writeToDiskCache.<anonymous>' call
        result = this_1.writeAll_goqmgy_k$(source);
      } catch ($p) {
        if ($p instanceof Error) {
          var t = $p;
          thrown = t;
        } else {
          throw $p;
        }
      }
      finally {
        try {
          if (this_1 == null)
            null;
          else {
            this_1.close_yn9xrc_k$();
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var t_0 = $p;
            if (thrown == null) {
              thrown = t_0;
            } else {
              addSuppressed(thrown, t_0);
            }
          } else {
            throw $p;
          }
        }
      }
      if (!(thrown == null))
        throw thrown;
      ensureNotNull(result);
      return editor.commitAndOpenSnapshot_teh9jm_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        abortQuietly(editor);
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeQuietly(source);
    }
  }
  function source(_this__u8e3s4, $this) {
    return buffer(_get_fileSystem__siywv4_1($this).source_11bfje_k$(_this__u8e3s4.get_data_wokkxf_k$()));
  }
  function get_$stableprop_23() {
    return 8;
  }
  function DiskCacheInterceptor$intercept$lambda() {
    return 'read disk cache error:';
  }
  function DiskCacheInterceptor$intercept$lambda_0() {
    return 'read disk cache';
  }
  function DiskCacheInterceptor$intercept$lambda_1() {
    return 'write disk cache error:';
  }
  function DiskCacheInterceptor$intercept$lambda_2() {
    return 'write disk cache';
  }
  function $interceptCOROUTINE$3(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            this.logger2__1 = this.chain_1.get_logger_g9gejd_k$();
            this.tmp0_elvis_lhs3__1 = this.chain_1.get_components_rknech_k$().key_w147v4_k$(this.request0__1.get_data_wokkxf_k$(), this.options1__1, Type_Disk_getInstance());
            if (this.tmp0_elvis_lhs3__1 == null) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.chain_1.proceed_46izof_k$(this.request0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT4__1 = this.tmp0_elvis_lhs3__1;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            return suspendResult;
          case 2:
            this.cacheKey5__1 = this.WHEN_RESULT4__1;
            var tmp_1 = this;
            var this_0 = this._this__u8e3s4__1;
            var tmp_2;
            try {
              Companion_getInstance_4();
              var value = readFromDiskCache(this_0, this.options1__1, this.cacheKey5__1);
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                Companion_getInstance_4();
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            var this_1 = tmp_2;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp_4 = this.request0__1.get_data_wokkxf_k$();
              w(this.logger2__1, 'DiskCacheInterceptor', tmp_4, tmp0_safe_receiver, DiskCacheInterceptor$intercept$lambda);
            }

            var tmp_5;
            if (_Result___get_isFailure__impl__jpiriv(this_1)) {
              tmp_5 = null;
            } else {
              var tmp_6 = _Result___get_value__impl__bjfvqg(this_1);
              tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            }

            tmp_1.snapshot6__1 = tmp_5;
            if (!(this.snapshot6__1 == null)) {
              var tmp_7 = this.request0__1.get_data_wokkxf_k$();
              d(this.logger2__1, 'DiskCacheInterceptor', tmp_7, DiskCacheInterceptor$intercept$lambda_0);
              return new OfSource_0(source(this.snapshot6__1, this._this__u8e3s4__1), DataSource_Disk_getInstance());
            }

            if (!this.request0__1.get_skipEvent_s9r70u_k$()) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.chain_1.emit_swlrtc_k$(StartWithDisk_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.chain_1.proceed_46izof_k$(this.request0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var result = suspendResult;
            if (result instanceof OfSource_0) {
              var tmp_8 = this;
              var this_2 = this._this__u8e3s4__1;
              var tmp_9;
              try {
                Companion_getInstance_4();
                var value_0 = writeToDiskCache(this_2, this.options1__1, this.cacheKey5__1, this.snapshot6__1, result.get_source_jl0x7o_k$());
                tmp_9 = _Result___init__impl__xyqfz8(value_0);
              } catch ($p) {
                var tmp_10;
                if ($p instanceof Error) {
                  var e_0 = $p;
                  Companion_getInstance_4();
                  tmp_10 = _Result___init__impl__xyqfz8(createFailure(e_0));
                } else {
                  throw $p;
                }
                tmp_9 = tmp_10;
              }
              var this_3 = tmp_9;
              var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                var tmp_11 = this.request0__1.get_data_wokkxf_k$();
                w(this.logger2__1, 'DiskCacheInterceptor', tmp_11, tmp0_safe_receiver_0, DiskCacheInterceptor$intercept$lambda_1);
              }
              var tmp_12;
              if (_Result___get_isFailure__impl__jpiriv(this_3)) {
                tmp_12 = null;
              } else {
                var tmp_13 = _Result___get_value__impl__bjfvqg(this_3);
                tmp_12 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
              }
              tmp_8.snapshot6__1 = tmp_12;
              if (!(this.snapshot6__1 == null)) {
                var tmp_14 = this.request0__1.get_data_wokkxf_k$();
                d(this.logger2__1, 'DiskCacheInterceptor', tmp_14, DiskCacheInterceptor$intercept$lambda_2);
                return new OfSource_0(source(this.snapshot6__1, this._this__u8e3s4__1), result.get_dataSource_vce0e_k$(), result.get_extra_ir3qw7_k$());
              }
            }

            return result;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function DiskCacheInterceptor(diskCache) {
    this.diskCache$delegate_1 = lazy(diskCache);
    this.$stable_1 = 8;
  }
  protoOf(DiskCacheInterceptor).intercept_gc3vzw_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$3(this, chain, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function abortQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.abort_lahfmo_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
        var _ = $p;
      } else {
        throw $p;
      }
    }
  }
  function diskCache$factory() {
    return getPropertyCallableRef('diskCache', 1, KProperty1, function (receiver) {
      return _get_diskCache__chwufg(receiver);
    }, null);
  }
  function fetch($this, components, request, options, $completion) {
    var tmp = new $fetchCOROUTINE$5($this, components, request, options, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_$stableprop_24() {
    return 0;
  }
  function $interceptCOROUTINE$4(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            if (!this.request0__1.get_skipEvent_s9r70u_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.chain_1.emit_swlrtc_k$(StartWithFetch_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = fetch(this._this__u8e3s4__1, this.chain_1.get_components_rknech_k$(), this.request0__1, this.options1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            return toImageResult_0(ARGUMENT);
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
  function $fetchCOROUTINE$5(_this__u8e3s4, components, request, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.components_1 = components;
    this.request_1 = request;
    this.options_1 = options;
  }
  protoOf($fetchCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.searchIndex0__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.tmp0_container2__1 = this.components_1.fetch_j08txz_k$(this.request_1.get_data_wokkxf_k$(), this.options_1, this.searchIndex0__1);
            this.fetcher3__1 = this.tmp0_container2__1.component1_7eebsc_k$();
            this.index4__1 = this.tmp0_container2__1.component2_7eebsb_k$();
            this.searchIndex0__1 = this.index4__1 + 1 | 0;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.fetcher3__1.fetch_9ge20s_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            if (!(result == null)) {
              this.fetchResult1__1 = result;
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            return this.fetchResult1__1;
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
  function FetchInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(FetchInterceptor).intercept_gc3vzw_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$4(this, chain, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function toImageResult_0(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof OfSource) {
      tmp = new OfSource_0(_this__u8e3s4.get_source_jl0x7o_k$(), DataSource_Engine_getInstance(), _this__u8e3s4.get_extra_ir3qw7_k$());
    } else {
      if (_this__u8e3s4 instanceof OfBitmap_0) {
        tmp = new OfBitmap_1(_this__u8e3s4.get_bitmap_bfxu7s_k$());
      } else {
        if (_this__u8e3s4 instanceof OfImage_0) {
          tmp = new OfImage_1(_this__u8e3s4.get_image_it3i2a_k$());
        } else {
          if (_this__u8e3s4 instanceof OfPainter_0) {
            tmp = new OfPainter_1(_this__u8e3s4.get_painter_bzl4ri_k$());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    return tmp;
  }
  function Chain() {
  }
  function Interceptor() {
  }
  function Interceptor_0(block) {
    return new _no_name_provided__qut3iv(block);
  }
  function _no_name_provided__qut3iv($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv).intercept_gc3vzw_k$ = function (chain, $completion) {
    return this.$block_1(chain, $completion);
  };
  function _get_initialOptions__djor69($this) {
    return $this.initialOptions_1;
  }
  function _get_config__hi7kzb($this) {
    return $this.config_1;
  }
  function _get_flowCollector__oi7q2a($this) {
    return $this.flowCollector_1;
  }
  function InterceptorChainHelper$interceptors$delegate$lambda($initialImageRequest, this$0) {
    return function () {
      var tmp0_safe_receiver = $initialImageRequest.get_interceptors_e78bex_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : plus_0(tmp0_safe_receiver, this$0.config_1.get_interceptors_e78bex_k$().get_list_wopuqv_k$());
      return tmp1_elvis_lhs == null ? this$0.config_1.get_interceptors_e78bex_k$().get_list_wopuqv_k$() : tmp1_elvis_lhs;
    };
  }
  function InterceptorChainHelper$components$delegate$lambda($initialImageRequest, this$0) {
    return function () {
      var tmp0_safe_receiver = $initialImageRequest.get_components_rknech_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.merge_w5qkmd_k$(this$0.config_1.get_componentRegistry_9xd8z5_k$());
      return tmp1_elvis_lhs == null ? this$0.config_1.get_componentRegistry_9xd8z5_k$() : tmp1_elvis_lhs;
    };
  }
  function InterceptorChainHelper$getOptions$lambda($request) {
    return function ($this$Options) {
      takeFrom($this$Options, $request);
      return Unit_getInstance();
    };
  }
  function InterceptorChainHelper(initialImageRequest, initialOptions, config, flowCollector) {
    this.initialOptions_1 = initialOptions;
    this.config_1 = config;
    this.flowCollector_1 = flowCollector;
    var tmp = this;
    tmp.interceptors$delegate_1 = lazy(InterceptorChainHelper$interceptors$delegate$lambda(initialImageRequest, this));
    var tmp_0 = this;
    tmp_0.components$delegate_1 = lazy(InterceptorChainHelper$components$delegate$lambda(initialImageRequest, this));
  }
  protoOf(InterceptorChainHelper).get_logger_g9gejd_k$ = function () {
    return this.config_1.get_logger_g9gejd_k$();
  };
  protoOf(InterceptorChainHelper).get_interceptors_e78bex_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.interceptors$delegate_1;
    interceptors$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(InterceptorChainHelper).get_components_rknech_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.components$delegate_1;
    components$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(InterceptorChainHelper).getOptions_408obz_k$ = function (request) {
    return Options_0(this.initialOptions_1, InterceptorChainHelper$getOptions$lambda(request));
  };
  protoOf(InterceptorChainHelper).emit_swlrtc_k$ = function (action, $completion) {
    return this.flowCollector_1.emit_t92u1f_k$(action, $completion);
  };
  function interceptors$factory() {
    return getPropertyCallableRef('interceptors', 1, KProperty1, function (receiver) {
      return receiver.get_interceptors_e78bex_k$();
    }, null);
  }
  function components$factory() {
    return getPropertyCallableRef('components', 1, KProperty1, function (receiver) {
      return receiver.get_components_rknech_k$();
    }, null);
  }
  function _get_helper__jwppsz($this) {
    return $this.helper_1;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function InterceptorChainImpl_init_$Init$(initialRequest, initialOptions, config, flowCollector, $this) {
    InterceptorChainImpl.call($this, new InterceptorChainHelper(initialRequest, initialOptions, config, flowCollector), initialRequest, 0);
    return $this;
  }
  function InterceptorChainImpl_init_$Create$(initialRequest, initialOptions, config, flowCollector) {
    return InterceptorChainImpl_init_$Init$(initialRequest, initialOptions, config, flowCollector, objectCreate(protoOf(InterceptorChainImpl)));
  }
  function copy($this, index, request) {
    return new InterceptorChainImpl($this.helper_1, request, index);
  }
  function InterceptorChainImpl(helper, request, index) {
    this.helper_1 = helper;
    this.request_1 = request;
    this.index_1 = index;
  }
  protoOf(InterceptorChainImpl).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(InterceptorChainImpl).proceed_46izof_k$ = function (request, $completion) {
    var interceptor = this.helper_1.get_interceptors_e78bex_k$().get_c1px32_k$(this.index_1);
    var chain = copy(this, this.index_1 + 1 | 0, request);
    return interceptor.intercept_gc3vzw_k$(chain, $completion);
  };
  protoOf(InterceptorChainImpl).get_logger_g9gejd_k$ = function () {
    return this.helper_1.get_logger_g9gejd_k$();
  };
  protoOf(InterceptorChainImpl).get_options_jecmyz_k$ = function () {
    return this.helper_1.getOptions_408obz_k$(this.request_1);
  };
  protoOf(InterceptorChainImpl).get_components_rknech_k$ = function () {
    return this.helper_1.get_components_rknech_k$();
  };
  protoOf(InterceptorChainImpl).emit_swlrtc_k$ = function (action, $completion) {
    return this.helper_1.emit_swlrtc_k$(action, $completion);
  };
  function _get_interceptorList__aqdfym($this) {
    return $this.interceptorList_1;
  }
  function _get_memoryCaches__ydqdx5($this) {
    return $this.memoryCaches_1;
  }
  function _set_diskCache__gsxlz4($this, _set____db54di) {
    $this.diskCache_1 = _set____db54di;
  }
  function _get_diskCache__chwufg_0($this) {
    return $this.diskCache_1;
  }
  function get_$stableprop_25() {
    return 8;
  }
  function _no_name_provided__qut3iv_0($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_0).intercept_gc3vzw_k$ = function (chain, $completion) {
    return this.$block_1(chain, $completion);
  };
  function InterceptorsBuilder$memoryCacheConfig$lambda(it) {
    // Inline function 'com.seiko.imageloader.identityHashCode' call
    return it.hashCode();
  }
  function InterceptorsBuilder$memoryCacheConfig$lambda_0(it) {
    return get_size(it);
  }
  function InterceptorsBuilder$memoryCacheConfig$lambda_1($valueHashProvider, $valueSizeProvider, $block) {
    return function () {
      return MemoryCache_0($valueHashProvider, $valueSizeProvider, $block);
    };
  }
  function InterceptorsBuilder$memoryCache$lambda(it) {
    var tmp0_safe_receiver = it instanceof OfBitmap_1 ? it : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_bitmap_bfxu7s_k$();
  }
  function InterceptorsBuilder$memoryCache$lambda_0(it) {
    return new OfBitmap_1(it);
  }
  function InterceptorsBuilder$diskCacheConfig$lambda($fileSystem, $block) {
    return function () {
      return DiskCache_0($fileSystem, $block);
    };
  }
  function InterceptorsBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interceptorList_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.memoryCaches_1 = ArrayList_init_$Create$_0();
    this.diskCache_1 = null;
    this.useDefaultInterceptors_1 = true;
    this.$stable_1 = 8;
  }
  protoOf(InterceptorsBuilder).set_useDefaultInterceptors_m0bgvk_k$ = function (_set____db54di) {
    this.useDefaultInterceptors_1 = _set____db54di;
  };
  protoOf(InterceptorsBuilder).get_useDefaultInterceptors_a4nw0h_k$ = function () {
    return this.useDefaultInterceptors_1;
  };
  protoOf(InterceptorsBuilder).takeFrom_lclq2h_k$ = function (interceptors, clearInterceptors, clearMemoryCaches) {
    this.useDefaultInterceptors_1 = interceptors.useDefaultInterceptors_1;
    if (clearInterceptors) {
      this.interceptorList_1.clear_j9egeb_k$();
    }
    if (clearMemoryCaches) {
      this.memoryCaches_1.clear_j9egeb_k$();
    }
    this.interceptorList_1.addAll_4lagoh_k$(interceptors.interceptorList_1);
    this.memoryCaches_1.addAll_4lagoh_k$(interceptors.memoryCaches_1);
    this.diskCache_1 = interceptors.diskCache_1;
  };
  protoOf(InterceptorsBuilder).takeFrom$default_tghbuu_k$ = function (interceptors, clearInterceptors, clearMemoryCaches, $super) {
    clearInterceptors = clearInterceptors === VOID ? false : clearInterceptors;
    clearMemoryCaches = clearMemoryCaches === VOID ? false : clearMemoryCaches;
    var tmp;
    if ($super === VOID) {
      this.takeFrom_lclq2h_k$(interceptors, clearInterceptors, clearMemoryCaches);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.takeFrom_lclq2h_k$.call(this, interceptors, clearInterceptors, clearMemoryCaches);
    }
    return tmp;
  };
  protoOf(InterceptorsBuilder).addInterceptor_e24v22_k$ = function (block) {
    // Inline function 'com.seiko.imageloader.intercept.Interceptor' call
    var tmp$ret$0 = new _no_name_provided__qut3iv_0(block);
    this.interceptorList_1.add_utx5q5_k$(tmp$ret$0);
  };
  protoOf(InterceptorsBuilder).addInterceptor_s4lbev_k$ = function (interceptor) {
    this.interceptorList_1.add_utx5q5_k$(interceptor);
  };
  protoOf(InterceptorsBuilder).addInterceptors_4gzhvk_k$ = function (interceptors) {
    this.interceptorList_1.addAll_4lagoh_k$(interceptors);
  };
  protoOf(InterceptorsBuilder).memoryCacheConfig_gpjoy0_k$ = function (valueHashProvider, valueSizeProvider, block) {
    this.memoryCache$default_pvbp39_k$(VOID, VOID, InterceptorsBuilder$memoryCacheConfig$lambda_1(valueHashProvider, valueSizeProvider, block));
  };
  protoOf(InterceptorsBuilder).memoryCacheConfig$default_e0ovl3_k$ = function (valueHashProvider, valueSizeProvider, block, $super) {
    var tmp;
    if (valueHashProvider === VOID) {
      tmp = InterceptorsBuilder$memoryCacheConfig$lambda;
    } else {
      tmp = valueHashProvider;
    }
    valueHashProvider = tmp;
    var tmp_0;
    if (valueSizeProvider === VOID) {
      tmp_0 = InterceptorsBuilder$memoryCacheConfig$lambda_0;
    } else {
      tmp_0 = valueSizeProvider;
    }
    valueSizeProvider = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.memoryCacheConfig_gpjoy0_k$(valueHashProvider, valueSizeProvider, block);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.memoryCacheConfig_gpjoy0_k$.call(this, valueHashProvider, valueSizeProvider, block);
    }
    return tmp_1;
  };
  protoOf(InterceptorsBuilder).memoryCache_3c4asm_k$ = function (mapToMemoryValue, mapToImageResult, block) {
    this.memoryCaches_1.add_utx5q5_k$(new MemoryCacheWrapper(block, mapToMemoryValue, mapToImageResult));
  };
  protoOf(InterceptorsBuilder).memoryCache$default_pvbp39_k$ = function (mapToMemoryValue, mapToImageResult, block, $super) {
    var tmp;
    if (mapToMemoryValue === VOID) {
      tmp = InterceptorsBuilder$memoryCache$lambda;
    } else {
      tmp = mapToMemoryValue;
    }
    mapToMemoryValue = tmp;
    var tmp_0;
    if (mapToImageResult === VOID) {
      tmp_0 = InterceptorsBuilder$memoryCache$lambda_0;
    } else {
      tmp_0 = mapToImageResult;
    }
    mapToImageResult = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      this.memoryCache_3c4asm_k$(mapToMemoryValue, mapToImageResult, block);
      tmp_1 = Unit_getInstance();
    } else {
      tmp_1 = $super.memoryCache_3c4asm_k$.call(this, mapToMemoryValue, mapToImageResult, block);
    }
    return tmp_1;
  };
  protoOf(InterceptorsBuilder).anyMemoryCache_4hoxfn_k$ = function (mapToMemoryValue, mapToImageResult, block) {
    this.memoryCaches_1.add_utx5q5_k$(new MemoryCacheWrapper(block, mapToMemoryValue, mapToImageResult));
  };
  protoOf(InterceptorsBuilder).diskCacheConfig_wtekdd_k$ = function (fileSystem, block) {
    if (!(fileSystem == null)) {
      var tmp = this;
      tmp.diskCache_1 = InterceptorsBuilder$diskCacheConfig$lambda(fileSystem, block);
    }
  };
  protoOf(InterceptorsBuilder).diskCacheConfig$default_hkmktl_k$ = function (fileSystem, block, $super) {
    fileSystem = fileSystem === VOID ? get_defaultFileSystem() : fileSystem;
    var tmp;
    if ($super === VOID) {
      this.diskCacheConfig_wtekdd_k$(fileSystem, block);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.diskCacheConfig_wtekdd_k$.call(this, fileSystem, block);
    }
    return tmp;
  };
  protoOf(InterceptorsBuilder).diskCache_s5ixak_k$ = function (block) {
    this.diskCache_1 = block;
  };
  protoOf(InterceptorsBuilder).build_1k0s4u_k$ = function () {
    return new Interceptors(this.useDefaultInterceptors_1, this.interceptorList_1, this.memoryCaches_1, this.diskCache_1);
  };
  function get_$stableprop_26() {
    return 0;
  }
  function Interceptors$list$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.useDefaultInterceptors_1) {
        // Inline function 'kotlin.collections.buildList' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.buildListInternal' call
        // Inline function 'kotlin.apply' call
        var this_0 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.seiko.imageloader.intercept.Interceptors.list$delegate.<anonymous>.<anonymous>' call
        this_0.add_utx5q5_k$(new MappedInterceptor());
        // Inline function 'com.seiko.imageloader.util.forEachIndices' call
        var this_1 = this$0.memoryCaches_1;
        var inductionVariable = 0;
        var last = this_1.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'com.seiko.imageloader.intercept.Interceptors.list$delegate.<anonymous>.<anonymous>.<anonymous>' call
            var wrapper = this_1.get_c1px32_k$(i);
            this_0.add_utx5q5_k$(wrapper.toInterceptor_h9qdnu_k$());
          }
           while (inductionVariable <= last);
        this_0.add_utx5q5_k$(new DecodeInterceptor());
        var tmp0_safe_receiver = this$0.diskCache_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.seiko.imageloader.intercept.Interceptors.list$delegate.<anonymous>.<anonymous>.<anonymous>' call
          this_0.add_utx5q5_k$(new DiskCacheInterceptor(tmp0_safe_receiver));
        }
        this_0.add_utx5q5_k$(new FetchInterceptor());
        var tmp$ret$4 = this_0.build_1k0s4u_k$();
        tmp = plus_0(this$0.interceptorList_1, tmp$ret$4);
      } else {
        tmp = this$0.interceptorList_1;
      }
      return tmp;
    };
  }
  function Interceptors(useDefaultInterceptors, interceptorList, memoryCaches, diskCache) {
    this.useDefaultInterceptors_1 = useDefaultInterceptors;
    this.interceptorList_1 = interceptorList;
    this.memoryCaches_1 = memoryCaches;
    this.diskCache_1 = diskCache;
    var tmp = this;
    tmp.list$delegate_1 = lazy(Interceptors$list$delegate$lambda(this));
    this.$stable_1 = 0;
  }
  protoOf(Interceptors).get_useDefaultInterceptors_a4nw0h_k$ = function () {
    return this.useDefaultInterceptors_1;
  };
  protoOf(Interceptors).get_interceptorList_26mg6y_k$ = function () {
    return this.interceptorList_1;
  };
  protoOf(Interceptors).get_memoryCaches_82z2zf_k$ = function () {
    return this.memoryCaches_1;
  };
  protoOf(Interceptors).get_diskCache_9m5hks_k$ = function () {
    return this.diskCache_1;
  };
  protoOf(Interceptors).get_list_wopuqv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.list$delegate_1;
    list$factory();
    return this_0.get_value_j01efc_k$();
  };
  function MemoryCacheWrapper(memoryCache, mapToMemoryValue, mapToImageResult) {
    this.memoryCache_1 = memoryCache;
    this.mapToMemoryValue_1 = mapToMemoryValue;
    this.mapToImageResult_1 = mapToImageResult;
  }
  protoOf(MemoryCacheWrapper).get_memoryCache_y3xch4_k$ = function () {
    return this.memoryCache_1;
  };
  protoOf(MemoryCacheWrapper).get_mapToMemoryValue_v0iim6_k$ = function () {
    return this.mapToMemoryValue_1;
  };
  protoOf(MemoryCacheWrapper).get_mapToImageResult_j22ixi_k$ = function () {
    return this.mapToImageResult_1;
  };
  protoOf(MemoryCacheWrapper).toInterceptor_h9qdnu_k$ = function () {
    return new MemoryCacheInterceptor(this.memoryCache_1, this.mapToMemoryValue_1, this.mapToImageResult_1);
  };
  function list$factory() {
    return getPropertyCallableRef('list', 1, KProperty1, function (receiver) {
      return receiver.get_list_wopuqv_k$();
    }, null);
  }
  function get_$stableprop_27() {
    return 0;
  }
  function MappedInterceptor$intercept$lambda($mappedData) {
    return function () {
      return 'map -> ' + toString($mappedData);
    };
  }
  function MappedInterceptor$intercept$lambda_0($request, $mappedData) {
    return function ($this$ImageRequest) {
      $this$ImageRequest.takeFrom$default_ciyigu_k$($request);
      $this$ImageRequest.data_w8755n_k$($mappedData);
      return Unit_getInstance();
    };
  }
  function MappedInterceptor() {
    this.$stable_1 = 0;
  }
  protoOf(MappedInterceptor).intercept_gc3vzw_k$ = function (chain, $completion) {
    var request = chain.get_request_jdwg4m_k$();
    var options = chain.get_options_jecmyz_k$();
    var logger = chain.get_logger_g9gejd_k$();
    var mappedData = chain.get_components_rknech_k$().map_8rwlof_k$(request.get_data_wokkxf_k$(), options);
    if (!(mappedData === request.get_data_wokkxf_k$())) {
      var tmp = request.get_data_wokkxf_k$();
      d(logger, 'MappedInterceptor', tmp, MappedInterceptor$intercept$lambda(mappedData));
    }
    // Inline function 'com.seiko.imageloader.model.ImageRequest' call
    var newRequest = ImageRequest_2(MappedInterceptor$intercept$lambda_0(request, mappedData));
    return chain.proceed_46izof_k$(newRequest, $completion);
  };
  function _get_mapToMemoryValue__sddi1a($this) {
    return $this.mapToMemoryValue_1;
  }
  function _get_mapToImageResult__cv61o6($this) {
    return $this.mapToImageResult_1;
  }
  function _get_bitmapMemoryCache__touq0v($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.bitmapMemoryCache$delegate_1;
    bitmapMemoryCache$factory();
    return this_0.get_value_j01efc_k$();
  }
  function readCachedValue($this, options, cacheKey) {
    var tmp;
    if (options.get_memoryCachePolicy_xij562_k$().get_readEnabled_oyc6n2_k$()) {
      var tmp0_safe_receiver = _get_bitmapMemoryCache__touq0v($this).get_wei43m_k$(cacheKey);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_0 = $this.mapToImageResult_1(tmp0_safe_receiver);
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function writeValueToMemory($this, options, cacheKey, imageResult) {
    var tmp;
    if (options.get_memoryCachePolicy_xij562_k$().get_writeEnabled_mrjiqz_k$()) {
      var tmp0_safe_receiver = $this.mapToMemoryValue_1(imageResult);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.seiko.imageloader.intercept.MemoryCacheInterceptor.writeValueToMemory.<anonymous>' call
        _get_bitmapMemoryCache__touq0v($this).set_b9w55f_k$(cacheKey, tmp0_safe_receiver);
        tmp_0 = true;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function get_$stableprop_28() {
    return 8;
  }
  function MemoryCacheInterceptor$intercept$lambda() {
    return 'read memory cache error:';
  }
  function MemoryCacheInterceptor$intercept$lambda_0() {
    return 'read memory cache.';
  }
  function MemoryCacheInterceptor$intercept$lambda_1() {
    return 'write memory cache error:';
  }
  function MemoryCacheInterceptor$intercept$lambda_2() {
    return 'write memory cache.';
  }
  function $interceptCOROUTINE$6(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.options1__1 = this.chain_1.get_options_jecmyz_k$();
            this.logger2__1 = this.chain_1.get_logger_g9gejd_k$();
            this.tmp0_elvis_lhs3__1 = this.chain_1.get_components_rknech_k$().key_w147v4_k$(this.request0__1.get_data_wokkxf_k$(), this.options1__1, Type_Memory_getInstance());
            if (this.tmp0_elvis_lhs3__1 == null) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.chain_1.proceed_46izof_k$(this.request0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT4__1 = this.tmp0_elvis_lhs3__1;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            return suspendResult;
          case 2:
            this.cacheKey5__1 = this.WHEN_RESULT4__1;
            var tmp_1 = this;
            var this_0 = this._this__u8e3s4__1;
            var tmp_2;
            try {
              Companion_getInstance_4();
              var value = readCachedValue(this_0, this.options1__1, this.cacheKey5__1);
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                Companion_getInstance_4();
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            var this_1 = tmp_2;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp_4 = this.request0__1.get_data_wokkxf_k$();
              w(this.logger2__1, 'MemoryCacheInterceptor', tmp_4, tmp0_safe_receiver, MemoryCacheInterceptor$intercept$lambda);
            }

            var tmp_5;
            if (_Result___get_isFailure__impl__jpiriv(this_1)) {
              tmp_5 = null;
            } else {
              var tmp_6 = _Result___get_value__impl__bjfvqg(this_1);
              tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            }

            tmp_1.cachedImageResult6__1 = tmp_5;
            if (!this.request0__1.get_skipEvent_s9r70u_k$()) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.chain_1.emit_swlrtc_k$(StartWithMemory_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!(this.cachedImageResult6__1 == null)) {
              var tmp_7 = this.request0__1.get_data_wokkxf_k$();
              d(this.logger2__1, 'MemoryCacheInterceptor', tmp_7, MemoryCacheInterceptor$intercept$lambda_0);
              return this.cachedImageResult6__1;
            }

            this.set_state_rjd8d0_k$(5);
            suspendResult = this.chain_1.proceed_46izof_k$(this.request0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var result = suspendResult;
            var this_2 = this._this__u8e3s4__1;
            var tmp_8;
            try {
              Companion_getInstance_4();
              var value_0 = writeValueToMemory(this_2, this.options1__1, this.cacheKey5__1, result);
              tmp_8 = _Result___init__impl__xyqfz8(value_0);
            } catch ($p) {
              var tmp_9;
              if ($p instanceof Error) {
                var e_0 = $p;
                Companion_getInstance_4();
                tmp_9 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p;
              }
              tmp_8 = tmp_9;
            }

            var this_3 = tmp_8;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              var tmp_10 = this.request0__1.get_data_wokkxf_k$();
              w(this.logger2__1, 'MemoryCacheInterceptor', tmp_10, tmp0_safe_receiver_0, MemoryCacheInterceptor$intercept$lambda_1);
            }

            if (_Result___get_isSuccess__impl__sndoy8(this_3)) {
              var tmp_11 = _Result___get_value__impl__bjfvqg(this_3);
              if ((tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE()) {
                var tmp_12 = this.request0__1.get_data_wokkxf_k$();
                d(this.logger2__1, 'MemoryCacheInterceptor', tmp_12, MemoryCacheInterceptor$intercept$lambda_2);
              }
            }

            return result;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function MemoryCacheInterceptor(memoryCache, mapToMemoryValue, mapToImageResult) {
    this.mapToMemoryValue_1 = mapToMemoryValue;
    this.mapToImageResult_1 = mapToImageResult;
    this.bitmapMemoryCache$delegate_1 = lazy(memoryCache);
    this.$stable_1 = 8;
  }
  protoOf(MemoryCacheInterceptor).intercept_gc3vzw_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$6(this, chain, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function bitmapMemoryCache$factory() {
    return getPropertyCallableRef('bitmapMemoryCache', 1, KProperty1, function (receiver) {
      return _get_bitmapMemoryCache__touq0v(receiver);
    }, null);
  }
  var DataSource_Disk_instance;
  var DataSource_Engine_instance;
  function values_2() {
    return [DataSource_Disk_getInstance(), DataSource_Engine_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Disk':
        return DataSource_Disk_getInstance();
      case 'Engine':
        return DataSource_Engine_getInstance();
      default:
        DataSource_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var DataSource_entriesInitialized;
  function DataSource_initEntries() {
    if (DataSource_entriesInitialized)
      return Unit_getInstance();
    DataSource_entriesInitialized = true;
    DataSource_Disk_instance = new DataSource('Disk', 0);
    DataSource_Engine_instance = new DataSource('Engine', 1);
  }
  var $ENTRIES_2;
  function DataSource(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DataSource_Disk_getInstance() {
    DataSource_initEntries();
    return DataSource_Disk_instance;
  }
  function DataSource_Engine_getInstance() {
    DataSource_initEntries();
    return DataSource_Engine_instance;
  }
  function get_EmptyExtraData() {
    return emptyMap();
  }
  function extraData(block) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function mimeType(_this__u8e3s4, type) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(type == null ? true : charSequenceLength(type) === 0)) {
      // Inline function 'kotlin.collections.set' call
      var key = 'KEY_MIME_TYPE';
      _this__u8e3s4.put_4fpzoq_k$(key, type);
    }
  }
  function get_mimeType(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_wei43m_k$('KEY_MIME_TYPE');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function get_KEY_MIME_TYPE() {
    return KEY_MIME_TYPE;
  }
  var KEY_MIME_TYPE;
  function Loading() {
  }
  function Success() {
  }
  function Failure() {
  }
  function ImageAction() {
  }
  function get_$stableprop_29() {
    return 0;
  }
  function get_$stableprop_30() {
    return 0;
  }
  function get_$stableprop_31() {
    return 0;
  }
  function get_$stableprop_32() {
    return 0;
  }
  function Start() {
    Start_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(Start).toString = function () {
    return 'Start';
  };
  protoOf(Start).hashCode = function () {
    return -1343514312;
  };
  protoOf(Start).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Start))
      return false;
    other instanceof Start || THROW_CCE();
    return true;
  };
  var Start_instance;
  function Start_getInstance() {
    if (Start_instance == null)
      new Start();
    return Start_instance;
  }
  function StartWithMemory() {
    StartWithMemory_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(StartWithMemory).toString = function () {
    return 'StartWithMemory';
  };
  protoOf(StartWithMemory).hashCode = function () {
    return 885423295;
  };
  protoOf(StartWithMemory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StartWithMemory))
      return false;
    other instanceof StartWithMemory || THROW_CCE();
    return true;
  };
  var StartWithMemory_instance;
  function StartWithMemory_getInstance() {
    if (StartWithMemory_instance == null)
      new StartWithMemory();
    return StartWithMemory_instance;
  }
  function StartWithDisk() {
    StartWithDisk_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(StartWithDisk).toString = function () {
    return 'StartWithDisk';
  };
  protoOf(StartWithDisk).hashCode = function () {
    return -1241799461;
  };
  protoOf(StartWithDisk).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StartWithDisk))
      return false;
    other instanceof StartWithDisk || THROW_CCE();
    return true;
  };
  var StartWithDisk_instance;
  function StartWithDisk_getInstance() {
    if (StartWithDisk_instance == null)
      new StartWithDisk();
    return StartWithDisk_instance;
  }
  function StartWithFetch() {
    StartWithFetch_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(StartWithFetch).toString = function () {
    return 'StartWithFetch';
  };
  protoOf(StartWithFetch).hashCode = function () {
    return 160651068;
  };
  protoOf(StartWithFetch).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StartWithFetch))
      return false;
    other instanceof StartWithFetch || THROW_CCE();
    return true;
  };
  var StartWithFetch_instance;
  function StartWithFetch_getInstance() {
    if (StartWithFetch_instance == null)
      new StartWithFetch();
    return StartWithFetch_instance;
  }
  function ImageEvent() {
  }
  function get_$stableprop_33() {
    return 0;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function get_$stableprop_36() {
    return 0;
  }
  function get_$stableprop_37() {
    return 0;
  }
  function OfBitmap_1(bitmap) {
    this.bitmap_1 = bitmap;
    this.$stable_1 = 0;
  }
  protoOf(OfBitmap_1).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(OfBitmap_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfBitmap_1))
      return false;
    var tmp0_other_with_cast = other instanceof OfBitmap_1 ? other : THROW_CCE();
    if (!this.bitmap_1.equals(tmp0_other_with_cast.bitmap_1))
      return false;
    return true;
  };
  protoOf(OfBitmap_1).hashCode = function () {
    return this.bitmap_1.hashCode();
  };
  protoOf(OfBitmap_1).toString = function () {
    return 'OfBitmap(bitmap=' + this.bitmap_1 + ')';
  };
  function OfImage_1(image) {
    this.image_1 = image;
    this.$stable_1 = 0;
  }
  protoOf(OfImage_1).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(OfImage_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfImage_1))
      return false;
    var tmp0_other_with_cast = other instanceof OfImage_1 ? other : THROW_CCE();
    if (!this.image_1.equals(tmp0_other_with_cast.image_1))
      return false;
    return true;
  };
  protoOf(OfImage_1).hashCode = function () {
    return this.image_1.hashCode();
  };
  protoOf(OfImage_1).toString = function () {
    return 'OfImage(image=' + this.image_1 + ')';
  };
  function OfPainter_1(painter) {
    this.painter_1 = painter;
    this.$stable_1 = 0;
  }
  protoOf(OfPainter_1).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  protoOf(OfPainter_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfPainter_1))
      return false;
    var tmp0_other_with_cast = other instanceof OfPainter_1 ? other : THROW_CCE();
    if (!equals(this.painter_1, tmp0_other_with_cast.painter_1))
      return false;
    return true;
  };
  protoOf(OfPainter_1).hashCode = function () {
    return hashCode(this.painter_1);
  };
  protoOf(OfPainter_1).toString = function () {
    return 'OfPainter(painter=' + this.painter_1 + ')';
  };
  function OfError(error) {
    this.error_1 = error;
    this.$stable_1 = 0;
  }
  protoOf(OfError).get_error_iqzvfj_k$ = function () {
    return this.error_1;
  };
  protoOf(OfError).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfError))
      return false;
    var tmp0_other_with_cast = other instanceof OfError ? other : THROW_CCE();
    if (!equals(this.error_1, tmp0_other_with_cast.error_1))
      return false;
    return true;
  };
  protoOf(OfError).hashCode = function () {
    return hashCode(this.error_1);
  };
  protoOf(OfError).toString = function () {
    return 'OfError(error=' + this.error_1 + ')';
  };
  function OfSource_0(source, dataSource, extra) {
    extra = extra === VOID ? get_EmptyExtraData() : extra;
    this.source_1 = source;
    this.dataSource_1 = dataSource;
    this.extra_1 = extra;
    this.$stable_1 = 0;
  }
  protoOf(OfSource_0).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(OfSource_0).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(OfSource_0).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(OfSource_0).get_error_iqzvfj_k$ = function () {
    return IllegalStateException_init_$Create$('failure to decode image source');
  };
  protoOf(OfSource_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OfSource_0))
      return false;
    var tmp0_other_with_cast = other instanceof OfSource_0 ? other : THROW_CCE();
    if (!equals(this.source_1, tmp0_other_with_cast.source_1))
      return false;
    if (!this.dataSource_1.equals(tmp0_other_with_cast.dataSource_1))
      return false;
    if (!equals(this.extra_1, tmp0_other_with_cast.extra_1))
      return false;
    return true;
  };
  protoOf(OfSource_0).hashCode = function () {
    var result = hashCode(this.source_1);
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.extra_1) | 0;
    return result;
  };
  protoOf(OfSource_0).toString = function () {
    return 'OfSource(source=' + this.source_1 + ', dataSource=' + this.dataSource_1 + ', extra=' + this.extra_1 + ')';
  };
  function ImageResult() {
  }
  function ImageRequest(request, block) {
    return ImageRequest_2(ImageRequest$lambda(request, block));
  }
  function ImageRequest_0(data) {
    return ImageRequest_2(ImageRequest$lambda_0(data));
  }
  function _set_data__9licbx($this, _set____db54di) {
    $this.data_1 = _set____db54di;
  }
  function _get_data__d5abxd_1($this) {
    return $this.data_1;
  }
  function _set_sizeResolver__phyk28($this, _set____db54di) {
    $this.sizeResolver_1 = _set____db54di;
  }
  function _get_sizeResolver__tzercs($this) {
    return $this.sizeResolver_1;
  }
  function _get_optionsBuilders__1ms5p7($this) {
    return $this.optionsBuilders_1;
  }
  function _set_extraData__w1qfcb($this, _set____db54di) {
    $this.extraData_1 = _set____db54di;
  }
  function _get_extraData__9oj689($this) {
    return $this.extraData_1;
  }
  function _set_componentBuilder__lqhbnr($this, _set____db54di) {
    $this.componentBuilder_1 = _set____db54di;
  }
  function _get_componentBuilder__7cmxf1($this) {
    return $this.componentBuilder_1;
  }
  function _set_interceptors__wod97b($this, _set____db54di) {
    $this.interceptors_1 = _set____db54di;
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function get_$stableprop_38() {
    return 8;
  }
  function ImageRequestBuilder$scale$lambda($scale) {
    return function ($this$add) {
      $this$add.set_scale_4cypbj_k$($scale);
      return Unit_getInstance();
    };
  }
  function ImageRequestBuilder() {
    this.data_1 = null;
    this.sizeResolver_1 = Companion_getInstance_18().get_Unspecified_el0w4u_k$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.optionsBuilders_1 = ArrayList_init_$Create$_0();
    this.extraData_1 = null;
    this.componentBuilder_1 = null;
    this.interceptors_1 = null;
    this.skipEvent_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(ImageRequestBuilder).set_skipEvent_g6bmeh_k$ = function (_set____db54di) {
    this.skipEvent_1 = _set____db54di;
  };
  protoOf(ImageRequestBuilder).get_skipEvent_s9r70u_k$ = function () {
    return this.skipEvent_1;
  };
  protoOf(ImageRequestBuilder).takeFrom_lheim5_k$ = function (request, clearOptions) {
    this.data_1 = request.data_1;
    if (clearOptions) {
      this.optionsBuilders_1.clear_j9egeb_k$();
    }
    this.optionsBuilders_1.addAll_4lagoh_k$(request.optionsBuilders_1);
    this.extraData_1 = request.extra_1;
    var tmp = this;
    var tmp0_safe_receiver = request.components_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.takeFrom.<anonymous>' call
      tmp_0 = ComponentRegistryBuilder_init_$Create$(tmp0_safe_receiver);
    }
    tmp.componentBuilder_1 = tmp_0;
    var tmp_1 = this;
    var tmp1_safe_receiver = request.interceptors_1;
    tmp_1.interceptors_1 = tmp1_safe_receiver == null ? null : toMutableList(tmp1_safe_receiver);
    this.skipEvent_1 = request.skipEvent_1;
  };
  protoOf(ImageRequestBuilder).takeFrom$default_ciyigu_k$ = function (request, clearOptions, $super) {
    clearOptions = clearOptions === VOID ? false : clearOptions;
    var tmp;
    if ($super === VOID) {
      this.takeFrom_lheim5_k$(request, clearOptions);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.takeFrom_lheim5_k$.call(this, request, clearOptions);
    }
    return tmp;
  };
  protoOf(ImageRequestBuilder).data_w8755n_k$ = function (data) {
    this.data_1 = data;
  };
  protoOf(ImageRequestBuilder).size_o57lub_k$ = function (sizeResolver) {
    this.sizeResolver_1 = sizeResolver;
  };
  protoOf(ImageRequestBuilder).scale_j2owoi_k$ = function (scale) {
    this.optionsBuilders_1.add_utx5q5_k$(ImageRequestBuilder$scale$lambda(scale));
  };
  protoOf(ImageRequestBuilder).options_l3gknx_k$ = function (block) {
    this.optionsBuilders_1.add_utx5q5_k$(block);
  };
  protoOf(ImageRequestBuilder).components_ceekwt_k$ = function (builder) {
    // Inline function 'kotlin.run' call
    var tmp0_elvis_lhs = this.componentBuilder_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ComponentRegistryBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.components.<anonymous>' call
      this.componentBuilder_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp);
  };
  protoOf(ImageRequestBuilder).addInterceptor_s4lbev_k$ = function (interceptor) {
    var tmp0_elvis_lhs = this.interceptors_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.addInterceptor.<anonymous>' call
      this.interceptors_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.add_utx5q5_k$(interceptor);
  };
  protoOf(ImageRequestBuilder).extra_jt8lm8_k$ = function (builder) {
    var tmp = this;
    var tmp0_safe_receiver = this.extraData_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.seiko.imageloader.model.ImageRequestBuilder.extra.<anonymous>' call
      if (!tmp0_safe_receiver.isEmpty_y1axqb_k$()) {
        tmp_1 = tmp0_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toMutableMap(tmp1_safe_receiver);
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      builder(tmp2_safe_receiver);
      tmp_2 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_2;
    tmp.extraData_1 = tmp3_elvis_lhs == null ? extraData(builder) : tmp3_elvis_lhs;
  };
  protoOf(ImageRequestBuilder).build_1k0s4u_k$ = function () {
    var tmp0_elvis_lhs = this.data_1;
    var tmp3_data = tmp0_elvis_lhs == null ? NullRequestData_getInstance() : tmp0_elvis_lhs;
    var tmp4_sizeResolver = this.sizeResolver_1;
    var tmp5_optionsBuilders = this.optionsBuilders_1;
    var tmp1_elvis_lhs = this.extraData_1;
    var tmp6_extra = tmp1_elvis_lhs == null ? get_EmptyExtraData() : tmp1_elvis_lhs;
    var tmp7_skipEvent = this.skipEvent_1;
    var tmp2_safe_receiver = this.componentBuilder_1;
    var tmp8_components = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.build_1k0s4u_k$();
    var tmp9_interceptors = this.interceptors_1;
    return new ImageRequest_1(tmp3_data, tmp6_extra, tmp4_sizeResolver, tmp7_skipEvent, tmp5_optionsBuilders, tmp8_components, tmp9_interceptors);
  };
  function get_$stableprop_39() {
    return 0;
  }
  function ImageRequest_1(data, extra, sizeResolver, skipEvent, optionsBuilders, components, interceptors) {
    this.data_1 = data;
    this.extra_1 = extra;
    this.sizeResolver_1 = sizeResolver;
    this.skipEvent_1 = skipEvent;
    this.optionsBuilders_1 = optionsBuilders;
    this.components_1 = components;
    this.interceptors_1 = interceptors;
    this.$stable_1 = 0;
  }
  protoOf(ImageRequest_1).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(ImageRequest_1).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(ImageRequest_1).get_sizeResolver_v7l9bk_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(ImageRequest_1).get_skipEvent_s9r70u_k$ = function () {
    return this.skipEvent_1;
  };
  protoOf(ImageRequest_1).get_optionsBuilders_r3f2ml_k$ = function () {
    return this.optionsBuilders_1;
  };
  protoOf(ImageRequest_1).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(ImageRequest_1).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  protoOf(ImageRequest_1).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (other instanceof ImageRequest_1) {
      tmp_5 = equals(this.data_1, other.data_1);
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = equals(this.extra_1, other.extra_1);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = equals(this.sizeResolver_1, other.sizeResolver_1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = this.skipEvent_1 === other.skipEvent_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(this.optionsBuilders_1, other.optionsBuilders_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.components_1, other.components_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.interceptors_1, other.interceptors_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ImageRequest_1).hashCode = function () {
    var result = hashCode(this.data_1);
    result = imul(31, result) + hashCode(this.extra_1) | 0;
    result = imul(31, result) + hashCode(this.sizeResolver_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.skipEvent_1) | 0;
    result = imul(31, result) + hashCode(this.optionsBuilders_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.components_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.interceptors_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    return result;
  };
  protoOf(ImageRequest_1).toString = function () {
    return 'ImageRequest(' + ('data=' + toString(this.data_1) + ',') + ('extra=' + this.extra_1 + ',') + ('sizeResolver=' + this.sizeResolver_1 + ',') + ('skipEvent=' + this.skipEvent_1 + ',') + ('optionsBuilders=' + this.optionsBuilders_1 + ',') + ('components=' + this.components_1 + ',') + ('interceptors=' + this.interceptors_1 + ')');
  };
  function ImageRequest_2(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ImageRequestBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function ImageRequest$lambda($request, $block) {
    return function ($this$ImageRequest) {
      $this$ImageRequest.takeFrom$default_ciyigu_k$($request);
      $block($this$ImageRequest);
      return Unit_getInstance();
    };
  }
  function ImageRequest$lambda_0($data) {
    return function ($this$ImageRequest) {
      $this$ImageRequest.data_w8755n_k$($data);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_40() {
    return 0;
  }
  function NullRequestData() {
    NullRequestData_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(NullRequestData).toString = function () {
    return 'imageloader.request.NullRequestData';
  };
  var NullRequestData_instance;
  function NullRequestData_getInstance() {
    if (NullRequestData_instance == null)
      new NullRequestData();
    return NullRequestData_instance;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.REPEAT_INFINITE_1 = -1;
  }
  protoOf(Companion_4).get_REPEAT_INFINITE_2e67gv_k$ = function () {
    return this.REPEAT_INFINITE_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_41() {
    return 8;
  }
  function Options(allowInexactSize, premultipliedAlpha, retryIfDiskDecodeError, bitmapConfig, size, scale, memoryCachePolicy, diskCachePolicy, playAnimate, repeatCount, maxImageSize, extra) {
    Companion_getInstance_17();
    this.allowInexactSize_1 = allowInexactSize;
    this.premultipliedAlpha_1 = premultipliedAlpha;
    this.retryIfDiskDecodeError_1 = retryIfDiskDecodeError;
    this.bitmapConfig_1 = bitmapConfig;
    this.size_1 = size;
    this.scale_1 = scale;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.playAnimate_1 = playAnimate;
    this.repeatCount_1 = repeatCount;
    this.maxImageSize_1 = maxImageSize;
    this.extra_1 = extra;
    this.$stable_1 = 8;
  }
  protoOf(Options).get_allowInexactSize_oi0b8b_k$ = function () {
    return this.allowInexactSize_1;
  };
  protoOf(Options).get_premultipliedAlpha_wtnhn3_k$ = function () {
    return this.premultipliedAlpha_1;
  };
  protoOf(Options).get_retryIfDiskDecodeError_p5wx8h_k$ = function () {
    return this.retryIfDiskDecodeError_1;
  };
  protoOf(Options).get_bitmapConfig_8srt5y_k$ = function () {
    return this.bitmapConfig_1;
  };
  protoOf(Options).get_size_cxx1ym_k$ = function () {
    return this.size_1;
  };
  protoOf(Options).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Options).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Options).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Options).get_playAnimate_9telp8_k$ = function () {
    return this.playAnimate_1;
  };
  protoOf(Options).get_repeatCount_v59ovp_k$ = function () {
    return this.repeatCount_1;
  };
  protoOf(Options).get_maxImageSize_xiohxb_k$ = function () {
    return this.maxImageSize_1;
  };
  protoOf(Options).get_extra_ir3qw7_k$ = function () {
    return this.extra_1;
  };
  protoOf(Options).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options))
      return false;
    var tmp0_other_with_cast = other instanceof Options ? other : THROW_CCE();
    if (!(this.allowInexactSize_1 === tmp0_other_with_cast.allowInexactSize_1))
      return false;
    if (!(this.premultipliedAlpha_1 === tmp0_other_with_cast.premultipliedAlpha_1))
      return false;
    if (!(this.retryIfDiskDecodeError_1 === tmp0_other_with_cast.retryIfDiskDecodeError_1))
      return false;
    if (!this.bitmapConfig_1.equals(tmp0_other_with_cast.bitmapConfig_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!this.scale_1.equals(tmp0_other_with_cast.scale_1))
      return false;
    if (!this.memoryCachePolicy_1.equals(tmp0_other_with_cast.memoryCachePolicy_1))
      return false;
    if (!this.diskCachePolicy_1.equals(tmp0_other_with_cast.diskCachePolicy_1))
      return false;
    if (!(this.playAnimate_1 === tmp0_other_with_cast.playAnimate_1))
      return false;
    if (!(this.repeatCount_1 === tmp0_other_with_cast.repeatCount_1))
      return false;
    if (!(this.maxImageSize_1 === tmp0_other_with_cast.maxImageSize_1))
      return false;
    if (!equals(this.extra_1, tmp0_other_with_cast.extra_1))
      return false;
    return true;
  };
  protoOf(Options).hashCode = function () {
    var result = getBooleanHashCode(this.allowInexactSize_1);
    result = imul(result, 31) + getBooleanHashCode(this.premultipliedAlpha_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.retryIfDiskDecodeError_1) | 0;
    result = imul(result, 31) + this.bitmapConfig_1.hashCode() | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    result = imul(result, 31) + this.memoryCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.diskCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.playAnimate_1) | 0;
    result = imul(result, 31) + this.repeatCount_1 | 0;
    result = imul(result, 31) + this.maxImageSize_1 | 0;
    result = imul(result, 31) + hashCode(this.extra_1) | 0;
    return result;
  };
  protoOf(Options).toString = function () {
    return 'Options(allowInexactSize=' + this.allowInexactSize_1 + ', premultipliedAlpha=' + this.premultipliedAlpha_1 + ', retryIfDiskDecodeError=' + this.retryIfDiskDecodeError_1 + ', bitmapConfig=' + this.bitmapConfig_1 + ', size=' + new Size(this.size_1) + ', scale=' + this.scale_1 + ', memoryCachePolicy=' + this.memoryCachePolicy_1 + ', diskCachePolicy=' + this.diskCachePolicy_1 + ', playAnimate=' + this.playAnimate_1 + ', repeatCount=' + this.repeatCount_1 + ', maxImageSize=' + this.maxImageSize_1 + ', extra=' + this.extra_1 + ')';
  };
  function _set__repeatCount__uabi4e($this, _set____db54di) {
    $this._repeatCount_1 = _set____db54di;
  }
  function _get__repeatCount__eqkrka($this) {
    return $this._repeatCount_1;
  }
  function _set_extraData__w1qfcb_0($this, _set____db54di) {
    $this.extraData_1 = _set____db54di;
  }
  function _get_extraData__9oj689_0($this) {
    return $this.extraData_1;
  }
  function get_$stableprop_42() {
    return 8;
  }
  function OptionsBuilder$takeFrom$lambda($clearOptionsExtraData, $options) {
    return function ($this$extra) {
      var tmp;
      if ($clearOptionsExtraData) {
        $this$extra.clear_j9egeb_k$();
        tmp = Unit_getInstance();
      }
      $this$extra.putAll_wgg6cj_k$($options.extra_1);
      return Unit_getInstance();
    };
  }
  function OptionsBuilder() {
    this.allowInexactSize_1 = false;
    this.premultipliedAlpha_1 = true;
    this.retryIfDiskDecodeError_1 = true;
    this.bitmapConfig_1 = Companion_getInstance_12().get_Default_goqax4_k$();
    this.size_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.scale_1 = Scale_FILL_getInstance();
    this.memoryCachePolicy_1 = CachePolicy_ENABLED_getInstance();
    this.diskCachePolicy_1 = CachePolicy_ENABLED_getInstance();
    this.playAnimate_1 = true;
    this._repeatCount_1 = -1;
    this.maxImageSize_1 = get_DEFAULT_MAX_IMAGE_SIZE();
    this.extraData_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(OptionsBuilder).set_allowInexactSize_orj2p2_k$ = function (_set____db54di) {
    this.allowInexactSize_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_allowInexactSize_oi0b8b_k$ = function () {
    return this.allowInexactSize_1;
  };
  protoOf(OptionsBuilder).set_premultipliedAlpha_jkdlv4_k$ = function (_set____db54di) {
    this.premultipliedAlpha_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_premultipliedAlpha_wtnhn3_k$ = function () {
    return this.premultipliedAlpha_1;
  };
  protoOf(OptionsBuilder).set_retryIfDiskDecodeError_396xmo_k$ = function (_set____db54di) {
    this.retryIfDiskDecodeError_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_retryIfDiskDecodeError_p5wx8h_k$ = function () {
    return this.retryIfDiskDecodeError_1;
  };
  protoOf(OptionsBuilder).set_bitmapConfig_e2cvm_k$ = function (_set____db54di) {
    this.bitmapConfig_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_bitmapConfig_8srt5y_k$ = function () {
    return this.bitmapConfig_1;
  };
  protoOf(OptionsBuilder).set_size_6a0e6q_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_size_cxx1ym_k$ = function () {
    return this.size_1;
  };
  protoOf(OptionsBuilder).set_scale_4cypbj_k$ = function (_set____db54di) {
    this.scale_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(OptionsBuilder).set_memoryCachePolicy_mp73fk_k$ = function (_set____db54di) {
    this.memoryCachePolicy_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(OptionsBuilder).set_diskCachePolicy_ks02ro_k$ = function (_set____db54di) {
    this.diskCachePolicy_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(OptionsBuilder).set_playAnimate_9nbkyj_k$ = function (_set____db54di) {
    this.playAnimate_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_playAnimate_9telp8_k$ = function () {
    return this.playAnimate_1;
  };
  protoOf(OptionsBuilder).set_maxImageSize_tauh9_k$ = function (_set____db54di) {
    this.maxImageSize_1 = _set____db54di;
  };
  protoOf(OptionsBuilder).get_maxImageSize_xiohxb_k$ = function () {
    return this.maxImageSize_1;
  };
  protoOf(OptionsBuilder).set_repeatCount_s40shb_k$ = function (value) {
    var tmp = this;
    // Inline function 'kotlin.comparisons.maxOf' call
    tmp._repeatCount_1 = Math.max(value, -1);
  };
  protoOf(OptionsBuilder).get_repeatCount_v59ovp_k$ = function () {
    return this._repeatCount_1;
  };
  protoOf(OptionsBuilder).takeFrom_7aauhl_k$ = function (options, clearOptionsExtraData) {
    this.allowInexactSize_1 = options.allowInexactSize_1;
    this.premultipliedAlpha_1 = options.premultipliedAlpha_1;
    this.retryIfDiskDecodeError_1 = options.retryIfDiskDecodeError_1;
    this.bitmapConfig_1 = options.bitmapConfig_1;
    this.size_1 = options.size_1;
    this.scale_1 = options.scale_1;
    this.memoryCachePolicy_1 = options.memoryCachePolicy_1;
    this.diskCachePolicy_1 = options.diskCachePolicy_1;
    this.playAnimate_1 = options.playAnimate_1;
    this._repeatCount_1 = options.repeatCount_1;
    this.maxImageSize_1 = options.maxImageSize_1;
    this.extra_jt8lm8_k$(OptionsBuilder$takeFrom$lambda(clearOptionsExtraData, options));
  };
  protoOf(OptionsBuilder).takeFrom$default_t5g0q6_k$ = function (options, clearOptionsExtraData, $super) {
    clearOptionsExtraData = clearOptionsExtraData === VOID ? false : clearOptionsExtraData;
    var tmp;
    if ($super === VOID) {
      this.takeFrom_7aauhl_k$(options, clearOptionsExtraData);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.takeFrom_7aauhl_k$.call(this, options, clearOptionsExtraData);
    }
    return tmp;
  };
  protoOf(OptionsBuilder).extra_jt8lm8_k$ = function (builder) {
    var tmp = this;
    var tmp0_safe_receiver = this.extraData_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeUnless' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.seiko.imageloader.option.OptionsBuilder.extra.<anonymous>' call
      if (!tmp0_safe_receiver.isEmpty_y1axqb_k$()) {
        tmp_1 = tmp0_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toMutableMap(tmp1_safe_receiver);
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      builder(tmp2_safe_receiver);
      tmp_2 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_2;
    tmp.extraData_1 = tmp3_elvis_lhs == null ? extraData(builder) : tmp3_elvis_lhs;
  };
  protoOf(OptionsBuilder).build_1k0s4u_k$ = function () {
    var tmp = this.allowInexactSize_1;
    var tmp_0 = this.premultipliedAlpha_1;
    var tmp_1 = this.retryIfDiskDecodeError_1;
    var tmp_2 = this.bitmapConfig_1;
    var tmp_3 = this.size_1;
    var tmp_4 = this.scale_1;
    var tmp_5 = this.memoryCachePolicy_1;
    var tmp_6 = this.diskCachePolicy_1;
    var tmp_7 = this.playAnimate_1;
    var tmp_8 = this.get_repeatCount_v59ovp_k$();
    var tmp_9 = this.maxImageSize_1;
    var tmp0_elvis_lhs = this.extraData_1;
    return new Options(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0_elvis_lhs == null ? get_EmptyExtraData() : tmp0_elvis_lhs);
  };
  function Options_0(options, block) {
    var tmp;
    if (block === VOID) {
      tmp = Options$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new OptionsBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.option.Options.<anonymous>' call
    this_0.takeFrom$default_t5g0q6_k$(options);
    block(this_0);
    return this_0.build_1k0s4u_k$();
  }
  function takeFrom(_this__u8e3s4, request) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = request.get_optionsBuilders_r3f2ml_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.seiko.imageloader.option.takeFrom.<anonymous>' call
      element(_this__u8e3s4);
    }
  }
  function Options$lambda($this$null) {
    return Unit_getInstance();
  }
  var Scale_FILL_instance;
  var Scale_FIT_instance;
  function values_3() {
    return [Scale_FILL_getInstance(), Scale_FIT_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'FILL':
        return Scale_FILL_getInstance();
      case 'FIT':
        return Scale_FIT_getInstance();
      default:
        Scale_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Scale_entriesInitialized;
  function Scale_initEntries() {
    if (Scale_entriesInitialized)
      return Unit_getInstance();
    Scale_entriesInitialized = true;
    Scale_FILL_instance = new Scale('FILL', 0);
    Scale_FIT_instance = new Scale('FIT', 1);
  }
  var $ENTRIES_3;
  function Scale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Scale_FILL_getInstance() {
    Scale_initEntries();
    return Scale_FILL_instance;
  }
  function Scale_FIT_getInstance() {
    Scale_initEntries();
    return Scale_FIT_instance;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Unspecified_1 = new RealSizeResolver(Companion_getInstance_0().get_Unspecified_3ttj0y_k$());
  }
  protoOf(Companion_5).get_Unspecified_el0w4u_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function SizeResolver() {
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function RealSizeResolver(size) {
    this.size_1 = size;
  }
  protoOf(RealSizeResolver).size_doafsa_k$ = function ($completion) {
    return new Size(this.size_1);
  };
  protoOf(RealSizeResolver).equals = function (other) {
    var tmp;
    if (other instanceof RealSizeResolver) {
      tmp = equals(this.size_1, other.size_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RealSizeResolver).hashCode = function () {
    var result = getObjectHashCode(this);
    result = imul(31, result) + Size__hashCode_impl_2h1qpd(this.size_1) | 0;
    return result;
  };
  function AnimationPainter() {
  }
  function calculateDstSize(srcWidth, srcHeight, maxImageSize) {
    if (maxImageSize <= 0) {
      return to(srcWidth, srcHeight);
    }
    var dstWidth = srcWidth;
    var dstHeight = srcHeight;
    // Inline function 'kotlin.math.max' call
    var a = dstWidth;
    var b = dstHeight;
    if (Math.max(a, b) > maxImageSize) {
      if (dstWidth >= dstHeight) {
        dstHeight = numberToInt(maxImageSize / srcWidth * dstHeight);
        dstWidth = maxImageSize;
      } else {
        dstWidth = numberToInt(maxImageSize / srcHeight * dstWidth);
        dstHeight = maxImageSize;
      }
    }
    return to(dstWidth, dstHeight);
  }
  function forEachIndices(_this__u8e3s4, action) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        action(_this__u8e3s4.get_c1px32_k$(i));
      }
       while (inductionVariable <= last);
  }
  function firstNotNullOfOrNullIndices(_this__u8e3s4, transform) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = transform(_this__u8e3s4.get_c1px32_k$(i));
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return tmp1_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return null;
  }
  function removeIfIndices(_this__u8e3s4, predicate) {
    var numDeleted = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var rawIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = rawIndex - numDeleted | 0;
        if (predicate(_this__u8e3s4.get_c1px32_k$(index))) {
          _this__u8e3s4.removeAt_6niowx_k$(index);
          numDeleted = numDeleted + 1 | 0;
        }
      }
       while (inductionVariable <= last);
  }
  function get_DEFAULT_MAX_PARALLELISM() {
    return DEFAULT_MAX_PARALLELISM;
  }
  var DEFAULT_MAX_PARALLELISM;
  function get_DEFAULT_MAX_IMAGE_SIZE() {
    return DEFAULT_MAX_IMAGE_SIZE;
  }
  var DEFAULT_MAX_IMAGE_SIZE;
  function _set_cachedCanvas__k6eyd9($this, _set____db54di) {
    $this.cachedCanvas_1 = _set____db54di;
  }
  function _get_cachedCanvas__zayd1r($this) {
    return $this.cachedCanvas_1;
  }
  function _set_scopeDensity__i5999($this, _set____db54di) {
    $this.scopeDensity_1 = _set____db54di;
  }
  function _get_scopeDensity__f1lhav($this) {
    return $this.scopeDensity_1;
  }
  function _set_layoutDirection__jzuy7k($this, _set____db54di) {
    $this.layoutDirection_1 = _set____db54di;
  }
  function _get_layoutDirection__u3l5q4($this) {
    return $this.layoutDirection_1;
  }
  function _set_size__9twho6_0($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m_1($this) {
    return $this.size_1;
  }
  function _get_cacheScope__m83lt3($this) {
    return $this.cacheScope_1;
  }
  function clear(_this__u8e3s4, $this) {
    _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_Black_t4k9fh_k$(), VOID, VOID, VOID, VOID, VOID, Companion_getInstance_6().get_Clear_ts5s9y_k$());
  }
  function DrawCache() {
    this.mCachedImage_1 = null;
    this.cachedCanvas_1 = null;
    this.scopeDensity_1 = null;
    this.layoutDirection_1 = LayoutDirection_Ltr_getInstance();
    this.size_1 = Companion_getInstance_7().get_Zero_9we0a6_k$();
    this.cacheScope_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).set_mCachedImage_hwla8o_k$ = function (_set____db54di) {
    this.mCachedImage_1 = _set____db54di;
  };
  protoOf(DrawCache).get_mCachedImage_2okowb_k$ = function () {
    return this.mCachedImage_1;
  };
  protoOf(DrawCache).drawCachedImage_7nlljd_k$ = function (size, density, layoutDirection, block) {
    this.scopeDensity_1 = density;
    this.layoutDirection_1 = layoutDirection;
    var targetImage = this.mCachedImage_1;
    var targetCanvas = this.cachedCanvas_1;
    if (((targetImage == null ? true : targetCanvas == null) ? true : _IntSize___get_width__impl__d9yl4o(size) > targetImage.get_width_j0q4yl_k$()) ? true : _IntSize___get_height__impl__prv63b(size) > targetImage.get_height_e7t92o_k$()) {
      targetImage = ImageBitmap(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
      targetCanvas = Canvas(targetImage);
      this.mCachedImage_1 = targetImage;
      this.cachedCanvas_1 = targetCanvas;
    }
    this.size_1 = size;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var this_0 = this.cacheScope_1;
    var canvas = targetCanvas;
    var size_0 = toSize(size);
    var tmp0_container = this_0.get_drawParams_ncgfpp_k$();
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_67q0p1_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_1.set_density_qzk27e_k$(density);
    this_1.set_layoutDirection_vthtz8_k$(layoutDirection);
    this_1.set_canvas_1yi0mf_k$(canvas);
    this_1.set_size_6a0e6q_k$(size_0);
    canvas.save_fbe7h_k$();
    // Inline function 'com.seiko.imageloader.util.DrawCache.drawCachedImage.<anonymous>' call
    clear(this_0, this);
    block(this_0);
    canvas.restore_a1ykhu_k$();
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    this_2.set_density_qzk27e_k$(prevDensity);
    this_2.set_layoutDirection_vthtz8_k$(prevLayoutDirection);
    this_2.set_canvas_1yi0mf_k$(prevCanvas);
    this_2.set_size_6a0e6q_k$(prevSize);
    targetImage.prepareToDraw_sb34p6_k$();
  };
  protoOf(DrawCache).drawInto_jyxzr7_k$ = function (target, alpha, colorFilter) {
    var targetImage = this.mCachedImage_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(targetImage == null)) {
      // Inline function 'com.seiko.imageloader.util.DrawCache.drawInto.<anonymous>' call
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.drawImage$default_qql6c2_k$(targetImage, VOID, this.size_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  protoOf(DrawCache).drawInto$default_dhjif7_k$ = function (target, alpha, colorFilter, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    var tmp;
    if ($super === VOID) {
      this.drawInto_jyxzr7_k$(target, alpha, colorFilter);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawInto_jyxzr7_k$.call(this, target, alpha, colorFilter);
    }
    return tmp;
  };
  function closeQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.close_yn9xrc_k$();
    } catch ($p) {
      if ($p instanceof RuntimeException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var _ = $p;
        } else {
          throw $p;
        }
      }
    }
  }
  function createFile(_this__u8e3s4, file) {
    if (!_this__u8e3s4.exists_gjgzpn_k$(file)) {
      closeQuietly(_this__u8e3s4.sink$default_shv2w8_k$(file));
    }
  }
  function deleteContents(_this__u8e3s4, directory) {
    var exception = null;
    var tmp;
    try {
      tmp = _this__u8e3s4.list_tub7t9_k$(directory);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof FileNotFoundException) {
        var _ = $p;
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    var files = tmp;
    var tmp0_iterator = files.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var file = tmp0_iterator.next_20eer_k$();
      try {
        if (_this__u8e3s4.metadata_r9b8qq_k$(file).get_isDirectory_hgpbzu_k$()) {
          deleteContents(_this__u8e3s4, file);
        }
        _this__u8e3s4.delete$default_1zkyi8_k$(file);
      } catch ($p) {
        if ($p instanceof IOException) {
          var e = $p;
          if (exception == null) {
            exception = e;
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(exception == null)) {
      throw exception;
    }
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function get_$stableprop_43() {
    return 8;
  }
  function ForwardingSink(delegate) {
    this.delegate_1 = delegate;
    this.$stable_1 = 8;
  }
  protoOf(ForwardingSink).write_f49az7_k$ = function (source, byteCount) {
    return this.delegate_1.write_f49az7_k$(source, byteCount);
  };
  protoOf(ForwardingSink).flush_shahbo_k$ = function () {
    return this.delegate_1.flush_shahbo_k$();
  };
  protoOf(ForwardingSink).timeout_lq9okf_k$ = function () {
    return this.delegate_1.timeout_lq9okf_k$();
  };
  protoOf(ForwardingSink).close_yn9xrc_k$ = function () {
    return this.delegate_1.close_yn9xrc_k$();
  };
  function Logger$Companion$None$1() {
  }
  protoOf(Logger$Companion$None$1).isLoggable_vwr8mz_k$ = function (priority) {
    return false;
  };
  protoOf(Logger$Companion$None$1).log_8xlfr_k$ = function (priority, tag, data, throwable, message) {
    return Unit_getInstance();
  };
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.None_1 = new Logger$Companion$None$1();
  }
  protoOf(Companion_6).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Logger() {
  }
  var LogPriority_VERBOSE_instance;
  var LogPriority_DEBUG_instance;
  var LogPriority_INFO_instance;
  var LogPriority_WARN_instance;
  var LogPriority_ERROR_instance;
  var LogPriority_ASSERT_instance;
  function values_4() {
    return [LogPriority_VERBOSE_getInstance(), LogPriority_DEBUG_getInstance(), LogPriority_INFO_getInstance(), LogPriority_WARN_getInstance(), LogPriority_ERROR_getInstance(), LogPriority_ASSERT_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'VERBOSE':
        return LogPriority_VERBOSE_getInstance();
      case 'DEBUG':
        return LogPriority_DEBUG_getInstance();
      case 'INFO':
        return LogPriority_INFO_getInstance();
      case 'WARN':
        return LogPriority_WARN_getInstance();
      case 'ERROR':
        return LogPriority_ERROR_getInstance();
      case 'ASSERT':
        return LogPriority_ASSERT_getInstance();
      default:
        LogPriority_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var LogPriority_entriesInitialized;
  function LogPriority_initEntries() {
    if (LogPriority_entriesInitialized)
      return Unit_getInstance();
    LogPriority_entriesInitialized = true;
    LogPriority_VERBOSE_instance = new LogPriority('VERBOSE', 0);
    LogPriority_DEBUG_instance = new LogPriority('DEBUG', 1);
    LogPriority_INFO_instance = new LogPriority('INFO', 2);
    LogPriority_WARN_instance = new LogPriority('WARN', 3);
    LogPriority_ERROR_instance = new LogPriority('ERROR', 4);
    LogPriority_ASSERT_instance = new LogPriority('ASSERT', 5);
  }
  var $ENTRIES_4;
  function LogPriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function d(_this__u8e3s4, tag, data, message) {
    var priority = LogPriority_DEBUG_getInstance();
    var tmp;
    if (_this__u8e3s4.isLoggable_vwr8mz_k$(priority)) {
      _this__u8e3s4.log_8xlfr_k$(priority, tag, data, null, message());
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function w(_this__u8e3s4, tag, data, throwable, message) {
    var priority = LogPriority_WARN_getInstance();
    var tmp;
    if (_this__u8e3s4.isLoggable_vwr8mz_k$(priority)) {
      _this__u8e3s4.log_8xlfr_k$(priority, tag, data, throwable, message());
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function log(_this__u8e3s4, priority, tag, data, throwable, message) {
    data = data === VOID ? null : data;
    throwable = throwable === VOID ? null : throwable;
    if (_this__u8e3s4.isLoggable_vwr8mz_k$(priority)) {
      _this__u8e3s4.log_8xlfr_k$(priority, tag, data, throwable, message());
    }
  }
  function LogPriority_VERBOSE_getInstance() {
    LogPriority_initEntries();
    return LogPriority_VERBOSE_instance;
  }
  function LogPriority_DEBUG_getInstance() {
    LogPriority_initEntries();
    return LogPriority_DEBUG_instance;
  }
  function LogPriority_INFO_getInstance() {
    LogPriority_initEntries();
    return LogPriority_INFO_instance;
  }
  function LogPriority_WARN_getInstance() {
    LogPriority_initEntries();
    return LogPriority_WARN_instance;
  }
  function LogPriority_ERROR_getInstance() {
    LogPriority_initEntries();
    return LogPriority_ERROR_instance;
  }
  function LogPriority_ASSERT_getInstance() {
    LogPriority_initEntries();
    return LogPriority_ASSERT_instance;
  }
  function getOrPut(_this__u8e3s4, key, defaultValue) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_h31hzz_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = defaultValue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.util.getOrPut.<anonymous>' call
      _this__u8e3s4.put_fa630k_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_httpEngineFactory() {
    return _get_httpEngineFactory_$lambda_2tmd6i;
  }
  function _get_httpEngineFactory_$lambda_2tmd6i() {
    return new HttpClient(get_httpEngine());
  }
  function get_LEFT_ANGLE_BRACKET() {
    _init_properties_SourceType_kt__ssiu23();
    return LEFT_ANGLE_BRACKET;
  }
  var LEFT_ANGLE_BRACKET;
  function get_SVG_TAG() {
    _init_properties_SourceType_kt__ssiu23();
    return SVG_TAG;
  }
  var SVG_TAG;
  function get_GIF_HEADER_87A() {
    _init_properties_SourceType_kt__ssiu23();
    return GIF_HEADER_87A;
  }
  var GIF_HEADER_87A;
  function get_GIF_HEADER_89A() {
    _init_properties_SourceType_kt__ssiu23();
    return GIF_HEADER_89A;
  }
  var GIF_HEADER_89A;
  function get_WEBP_HEADER_RIFF() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_RIFF;
  }
  var WEBP_HEADER_RIFF;
  function get_WEBP_HEADER_WEBP() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_WEBP;
  }
  var WEBP_HEADER_WEBP;
  function get_WEBP_HEADER_VPX8() {
    _init_properties_SourceType_kt__ssiu23();
    return WEBP_HEADER_VPX8;
  }
  var WEBP_HEADER_VPX8;
  function get_HEIF_HEADER_FTYP() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_FTYP;
  }
  var HEIF_HEADER_FTYP;
  function get_HEIF_HEADER_MSF1() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_MSF1;
  }
  var HEIF_HEADER_MSF1;
  function get_HEIF_HEADER_HEVC() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_HEVC;
  }
  var HEIF_HEADER_HEVC;
  function get_HEIF_HEADER_HEVX() {
    _init_properties_SourceType_kt__ssiu23();
    return HEIF_HEADER_HEVX;
  }
  var HEIF_HEADER_HEVX;
  function isSvg(source) {
    _init_properties_SourceType_kt__ssiu23();
    return source.rangeEquals_pk4yqx_k$(new Long(0, 0), get_LEFT_ANGLE_BRACKET()) ? !indexOf_0(source, get_SVG_TAG(), new Long(0, 0), new Long(1024, 0)).equals(new Long(-1, -1)) : false;
  }
  function isGif(source) {
    _init_properties_SourceType_kt__ssiu23();
    return source.rangeEquals_pk4yqx_k$(new Long(0, 0), get_GIF_HEADER_89A()) ? true : source.rangeEquals_pk4yqx_k$(new Long(0, 0), get_GIF_HEADER_87A());
  }
  function indexOf_0(_this__u8e3s4, bytes, fromIndex, toIndex) {
    _init_properties_SourceType_kt__ssiu23();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(bytes.get_size_woubt6_k$() > 0)) {
      // Inline function 'com.seiko.imageloader.util.indexOf.<anonymous>' call
      var message = 'bytes is empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var firstByte = bytes.get_c1px32_k$(0);
    // Inline function 'kotlin.Long.minus' call
    var other = bytes.get_size_woubt6_k$();
    var lastIndex = toIndex.minus_mfbszm_k$(toLong(other));
    var currentIndex = fromIndex;
    while (currentIndex.compareTo_9jj042_k$(lastIndex) < 0) {
      currentIndex = _this__u8e3s4.indexOf_nnf9xt_k$(firstByte, currentIndex, lastIndex);
      if (currentIndex.equals(new Long(-1, -1)) ? true : _this__u8e3s4.rangeEquals_pk4yqx_k$(currentIndex, bytes)) {
        return currentIndex;
      }
      currentIndex = currentIndex.inc_28ke_k$();
    }
    return new Long(-1, -1);
  }
  var properties_initialized_SourceType_kt_ykvai1;
  function _init_properties_SourceType_kt__ssiu23() {
    if (!properties_initialized_SourceType_kt_ykvai1) {
      properties_initialized_SourceType_kt_ykvai1 = true;
      LEFT_ANGLE_BRACKET = Companion_getInstance_2().encodeUtf8_5n709n_k$('<');
      SVG_TAG = Companion_getInstance_2().encodeUtf8_5n709n_k$('<svg');
      GIF_HEADER_87A = Companion_getInstance_2().encodeUtf8_5n709n_k$('GIF87a');
      GIF_HEADER_89A = Companion_getInstance_2().encodeUtf8_5n709n_k$('GIF89a');
      WEBP_HEADER_RIFF = Companion_getInstance_2().encodeUtf8_5n709n_k$('RIFF');
      WEBP_HEADER_WEBP = Companion_getInstance_2().encodeUtf8_5n709n_k$('WEBP');
      WEBP_HEADER_VPX8 = Companion_getInstance_2().encodeUtf8_5n709n_k$('VP8X');
      HEIF_HEADER_FTYP = Companion_getInstance_2().encodeUtf8_5n709n_k$('ftyp');
      HEIF_HEADER_MSF1 = Companion_getInstance_2().encodeUtf8_5n709n_k$('msf1');
      HEIF_HEADER_HEVC = Companion_getInstance_2().encodeUtf8_5n709n_k$('hevc');
      HEIF_HEADER_HEVX = Companion_getInstance_2().encodeUtf8_5n709n_k$('hevx');
    }
  }
  function get_LocalImageLoader() {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return LocalImageLoader;
  }
  var LocalImageLoader;
  function createDefault(_this__u8e3s4) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return ImageLoader_0(VOID, createDefault$lambda);
  }
  function defaultImageResultMemoryCache(_this__u8e3s4, includeBitmap, saveSize, valueHashProvider, valueSizeProvider, mapToMemoryValue, mapToImageResult) {
    includeBitmap = includeBitmap === VOID ? false : includeBitmap;
    saveSize = saveSize === VOID ? 100 : saveSize;
    var tmp;
    if (valueHashProvider === VOID) {
      tmp = defaultImageResultMemoryCache$lambda;
    } else {
      tmp = valueHashProvider;
    }
    valueHashProvider = tmp;
    var tmp_0;
    if (valueSizeProvider === VOID) {
      tmp_0 = defaultImageResultMemoryCache$lambda_0;
    } else {
      tmp_0 = valueSizeProvider;
    }
    valueSizeProvider = tmp_0;
    var tmp_1;
    if (mapToMemoryValue === VOID) {
      tmp_1 = defaultImageResultMemoryCache$lambda_1(includeBitmap);
    } else {
      tmp_1 = mapToMemoryValue;
    }
    mapToMemoryValue = tmp_1;
    var tmp_2;
    if (mapToImageResult === VOID) {
      tmp_2 = defaultImageResultMemoryCache$lambda_2;
    } else {
      tmp_2 = mapToImageResult;
    }
    mapToImageResult = tmp_2;
    _init_properties_LocalImageLoader_kt__yxe8hp();
    _this__u8e3s4.anyMemoryCache_4hoxfn_k$(mapToMemoryValue, mapToImageResult, defaultImageResultMemoryCache$lambda_3(valueHashProvider, valueSizeProvider, saveSize));
  }
  function createDefault$lambda($this$ImageLoader) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    $this$ImageLoader.components_ceekwt_k$(createDefault$lambda$lambda);
    $this$ImageLoader.interceptor_6rr2f9_k$(createDefault$lambda$lambda_0);
    return Unit_getInstance();
  }
  function createDefault$lambda$lambda($this$components) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    setupDefaultComponents($this$components);
    return Unit_getInstance();
  }
  function createDefault$lambda$lambda_0($this$interceptor) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    defaultImageResultMemoryCache($this$interceptor);
    $this$interceptor.memoryCacheConfig$default_e0ovl3_k$(VOID, VOID, createDefault$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function createDefault$lambda$lambda$lambda($this$memoryCacheConfig) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    $this$memoryCacheConfig.maxSizeBytes_qbz4ki_k$(33554432);
    return Unit_getInstance();
  }
  function defaultImageResultMemoryCache$lambda(it) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return hashCode(it);
  }
  function defaultImageResultMemoryCache$lambda_0(it) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return 1;
  }
  function defaultImageResultMemoryCache$lambda_1($includeBitmap) {
    return function (it) {
      var tmp;
      var tmp_0;
      if (it instanceof OfImage_1) {
        tmp_0 = true;
      } else {
        tmp_0 = it instanceof OfPainter_1;
      }
      if (tmp_0) {
        tmp = it;
      } else {
        if (it instanceof OfBitmap_1) {
          tmp = $includeBitmap ? it : null;
        } else {
          var tmp_1;
          if (it instanceof OfSource_0) {
            tmp_1 = true;
          } else {
            tmp_1 = it instanceof OfError;
          }
          if (tmp_1) {
            tmp = null;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      return tmp;
    };
  }
  function defaultImageResultMemoryCache$lambda_2(it) {
    _init_properties_LocalImageLoader_kt__yxe8hp();
    return it;
  }
  function defaultImageResultMemoryCache$lambda$lambda($saveSize) {
    return function ($this$MemoryCache) {
      $this$MemoryCache.maxSizeBytes_qbz4ki_k$($saveSize);
      return Unit_getInstance();
    };
  }
  function defaultImageResultMemoryCache$lambda_3($valueHashProvider, $valueSizeProvider, $saveSize) {
    return function () {
      return MemoryCache_0($valueHashProvider, $valueSizeProvider, defaultImageResultMemoryCache$lambda$lambda($saveSize));
    };
  }
  var properties_initialized_LocalImageLoader_kt_pv083p;
  function _init_properties_LocalImageLoader_kt__yxe8hp() {
    if (!properties_initialized_LocalImageLoader_kt_pv083p) {
      properties_initialized_LocalImageLoader_kt_pv083p = true;
      LocalImageLoader = createImageLoaderProvidableCompositionLocal();
    }
  }
  function get_identityHashCode(_this__u8e3s4) {
    return _this__u8e3s4.hashCode();
  }
  function LruHashMap_init_$Init$(original, $this) {
    LruHashMap.call($this, 16, 0.75);
    var tmp0_iterator = original.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.get_value_j01efc_k$();
      $this.put_fa630k_k$(key, value);
    }
    return $this;
  }
  function LruHashMap_init_$Create$(original) {
    return LruHashMap_init_$Init$(original, objectCreate(protoOf(LruHashMap)));
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function LruHashMap(initialCapacity, loadFactor) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    this.map_1 = LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor);
  }
  protoOf(LruHashMap).get_isEmpty_zauvru_k$ = function () {
    return this.map_1.isEmpty_y1axqb_k$();
  };
  protoOf(LruHashMap).get_entries_p20ztl_k$ = function () {
    return this.map_1.get_entries_p20ztl_k$();
  };
  protoOf(LruHashMap).get_h31hzz_k$ = function (key) {
    var item = this.map_1.remove_gppy8k_k$(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.map_1.put_4fpzoq_k$(key, item);
    }
    return item;
  };
  protoOf(LruHashMap).put_fa630k_k$ = function (key, value) {
    var item = this.map_1.remove_gppy8k_k$(key);
    // Inline function 'kotlin.collections.set' call
    this.map_1.put_4fpzoq_k$(key, value);
    return item;
  };
  protoOf(LruHashMap).remove_1r2rzn_k$ = function (key) {
    return this.map_1.remove_gppy8k_k$(key);
  };
  function source_0(_this__u8e3s4, $completion) {
    var tmp = new $sourceCOROUTINE$7(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $sourceCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($sourceCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = new Buffer();
            var tmp_1 = this;
            tmp_1.$this$apply1__1 = this.this0__1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = toByteArray(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$this$apply1__1.write_ldf0ov_k$(ARGUMENT);
            cancel_0(this._this__u8e3s4__1);
            return this.this0__1;
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
  function setupDefaultComponents(_this__u8e3s4) {
    setupDefaultComponents_0(_this__u8e3s4, Density(2.0));
  }
  function setupDefaultComponents_0(_this__u8e3s4, density, httpClient, maxParallelism) {
    density = density === VOID ? Density(2.0) : density;
    httpClient = httpClient === VOID ? get_httpEngineFactory() : httpClient;
    maxParallelism = maxParallelism === VOID ? get_DEFAULT_MAX_PARALLELISM() : maxParallelism;
    setupKtorComponents(_this__u8e3s4, httpClient);
    setupBase64Components(_this__u8e3s4);
    setupCommonComponents(_this__u8e3s4);
    setupSkiaComponents(_this__u8e3s4, density, maxParallelism);
  }
  function directorySize(directory) {
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    return (new Long(128, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
  }
  function _set__maxSize__pnvxrj($this, _set____db54di) {
    $this._maxSize_1 = _set____db54di;
  }
  function _get__maxSize__wkbsqt($this) {
    return $this._maxSize_1;
  }
  function _set__size__bau3qd($this, _set____db54di) {
    $this._size_1 = _set____db54di;
  }
  function _get__size__kqacr3($this) {
    return $this._size_1;
  }
  function _set__putCount__jtvoje($this, _set____db54di) {
    $this._putCount_1 = _set____db54di;
  }
  function _get__putCount__9gyrv6($this) {
    return $this._putCount_1;
  }
  function _set__createCount__y52ujn($this, _set____db54di) {
    $this._createCount_1 = _set____db54di;
  }
  function _get__createCount__lcagvd($this) {
    return $this._createCount_1;
  }
  function _set__evictionCount__m5cs1y($this, _set____db54di) {
    $this._evictionCount_1 = _set____db54di;
  }
  function _get__evictionCount__ncntvq($this) {
    return $this._evictionCount_1;
  }
  function _set__hitCount__fhqwzu($this, _set____db54di) {
    $this._hitCount_1 = _set____db54di;
  }
  function _get__hitCount__q8iokq($this) {
    return $this._hitCount_1;
  }
  function _set__missCount__hocw65($this, _set____db54di) {
    $this._missCount_1 = _set____db54di;
  }
  function _get__missCount__wqlhbd($this) {
    return $this._missCount_1;
  }
  function _get_map__e6co1h_0($this) {
    return $this.map_1;
  }
  function _get_syncObject__eretwv_1($this) {
    return $this.syncObject_1;
  }
  function safeSizeOf($this, key, value) {
    var result = $this.sizeOf_pwp2ab_k$(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'com.seiko.imageloader.util.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function get_$stableprop_44() {
    return 8;
  }
  function LruCache(maxSize) {
    this._maxSize_1 = 0;
    this._size_1 = 0;
    this._putCount_1 = 0;
    this._createCount_1 = 0;
    this._evictionCount_1 = 0;
    this._hitCount_1 = 0;
    this._missCount_1 = 0;
    this.syncObject_1 = new Object();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'com.seiko.imageloader.util.LruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this._maxSize_1 = maxSize;
    this.map_1 = LinkedHashMap_init_$Create$_0(0, 0.75);
    this.$stable_1 = 8;
  }
  protoOf(LruCache).size_23och_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.size.<anonymous>' call
    return this._size_1;
  };
  protoOf(LruCache).maxSize_dyjl39_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.maxSize.<anonymous>' call
    return this._maxSize_1;
  };
  protoOf(LruCache).resize_ioxo44_k$ = function (maxSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'com.seiko.imageloader.util.LruCache.resize.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    this._maxSize_1 = maxSize;
    this.trimToSize_u8t9m2_k$(maxSize);
  };
  protoOf(LruCache).get_h31hzz_k$ = function (key) {
    var mapValue = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.get.<anonymous>' call
    mapValue = this.map_1.get_wei43m_k$(key);
    if (!(mapValue == null)) {
      this._hitCount_1 = this._hitCount_1 + 1 | 0;
      return mapValue;
    }
    this._missCount_1 = this._missCount_1 + 1 | 0;
    var tmp0_elvis_lhs = this.create_s893uj_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var createdValue = tmp;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.get.<anonymous>' call
    this._createCount_1 = this._createCount_1 + 1 | 0;
    mapValue = this.map_1.put_4fpzoq_k$(key, createdValue);
    var tmp_0;
    if (!(mapValue == null)) {
      tmp_0 = this.map_1.put_4fpzoq_k$(key, ensureNotNull(mapValue));
    } else {
      this._size_1 = this._size_1 + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    var tmp_1;
    if (!(mapValue == null)) {
      this.entryRemoved_qj0tu1_k$(false, key, createdValue, mapValue);
      tmp_1 = mapValue;
    } else {
      this.trimToSize_u8t9m2_k$(this._maxSize_1);
      tmp_1 = createdValue;
    }
    return tmp_1;
  };
  protoOf(LruCache).put_fa630k_k$ = function (key, value) {
    var previous = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.put.<anonymous>' call
    this._putCount_1 = this._putCount_1 + 1 | 0;
    this._size_1 = this._size_1 + safeSizeOf(this, key, value) | 0;
    previous = this.map_1.put_4fpzoq_k$(key, value);
    var tmp3_safe_receiver = previous;
    var tmp;
    if (tmp3_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this._size_1 = this._size_1 - safeSizeOf(this, key, tmp3_safe_receiver) | 0;
      tmp = Unit_getInstance();
    }
    var tmp0_safe_receiver = previous;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.entryRemoved_qj0tu1_k$(false, key, tmp0_safe_receiver, value);
    }
    this.trimToSize_u8t9m2_k$(this._maxSize_1);
    return previous;
  };
  protoOf(LruCache).trimToSize_u8t9m2_k$ = function (maxSize) {
    while (true) {
      var key = null;
      var value = null;
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      this.syncObject_1;
      // Inline function 'com.seiko.imageloader.util.LruCache.trimToSize.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(this._size_1 < 0 ? true : this.map_1.isEmpty_y1axqb_k$() ? !(this._size_1 === 0) : false)) {
        // Inline function 'com.seiko.imageloader.util.LruCache.trimToSize.<anonymous>.<anonymous>' call
        var message = plus_1(getKClassFromExpression(this).get_simpleName_r6f8py_k$(), '.sizeOf() is reporting inconsistent results!');
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (this._size_1 <= maxSize ? true : this.map_1.isEmpty_y1axqb_k$()) {
        return Unit_getInstance();
      }
      var tmp0_container = this.map_1.get_entries_p20ztl_k$().iterator_jk1svi_k$().next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key1 = tmp0_container.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value1 = tmp0_container.get_value_j01efc_k$();
      key = key1;
      value = value1;
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.map_1;
      var key_0 = key;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).remove_gppy8k_k$(key_0);
      this._size_1 = this._size_1 - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
      this._evictionCount_1 = this._evictionCount_1 + 1 | 0;
      this.entryRemoved_qj0tu1_k$(true, ensureNotNull(key), ensureNotNull(value), null);
    }
  };
  protoOf(LruCache).remove_1r2rzn_k$ = function (key) {
    var previous = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    // Inline function 'com.seiko.imageloader.util.LruCache.remove.<anonymous>' call
    previous = this.map_1.remove_gppy8k_k$(key);
    var tmp0_safe_receiver = previous;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this._size_1 = this._size_1 - safeSizeOf(this, key, tmp0_safe_receiver) | 0;
      tmp = Unit_getInstance();
    }
    var tmp0_safe_receiver_0 = previous;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.entryRemoved_qj0tu1_k$(false, key, tmp0_safe_receiver_0, null);
    }
    return previous;
  };
  protoOf(LruCache).entryRemoved_qj0tu1_k$ = function (evicted, key, oldValue, newValue) {
    return Unit_getInstance();
  };
  protoOf(LruCache).create_s893uj_k$ = function (key) {
    return null;
  };
  protoOf(LruCache).sizeOf_pwp2ab_k$ = function (key, value) {
    return 1;
  };
  protoOf(LruCache).evictAll_sdrs94_k$ = function () {
    this.trimToSize_u8t9m2_k$(-1);
  };
  protoOf(LruCache).snapshot_4plubo_k$ = function () {
    var copy = LinkedHashMap_init_$Create$();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.syncObject_1;
    var tmp0_iterator = this.map_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.seiko.imageloader.util.LruCache.snapshot.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.set' call
      copy.put_4fpzoq_k$(key, value);
    }
    return copy;
  };
  function get_ioDispatcher() {
    return Dispatchers_getInstance().get_Default_goqax4_k$();
  }
  function get_defaultFileSystem() {
    return null;
  }
  function get_httpEngine() {
    return Js_getInstance().create$default_3xwi5e_k$();
  }
  function _set_weakRef__mfwweu($this, _set____db54di) {
    $this.weakRef_1 = _set____db54di;
  }
  function _get_weakRef__myyv7a($this) {
    return $this.weakRef_1;
  }
  function _set_strongRefFallback__mnfw1l($this, _set____db54di) {
    $this.strongRefFallback_1 = _set____db54di;
  }
  function _get_strongRefFallback__qnv9n7($this) {
    return $this.strongRefFallback_1;
  }
  function get_$stableprop_45() {
    return 8;
  }
  function WeakReference(referred) {
    try {
      this.weakRef_1 = new WeakRef(aWrapped);
      this.strongRefFallback_1 = null;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        this.strongRefFallback_1 = referred;
        this.weakRef_1 = null;
      } else {
        throw $p;
      }
    }
    this.$stable_1 = 8;
  }
  protoOf(WeakReference).get_26vq_k$ = function () {
    var tmp;
    if (this.weakRef_1 == null) {
      tmp = this.strongRefFallback_1;
    } else {
      var tmp_0 = this.weakRef_1.deref();
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  };
  protoOf(WeakReference).clear_j9egeb_k$ = function () {
    var tmp;
    if (this.weakRef_1 == null) {
      this.strongRefFallback_1 = null;
      tmp = Unit_getInstance();
    } else {
      this.weakRef_1 = null;
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  function createImageLoaderProvidableCompositionLocal() {
    return new ImageLoaderProvidableCompositionLocal(staticCompositionLocalOf(createImageLoaderProvidableCompositionLocal$lambda));
  }
  function createImageLoaderProvidableCompositionLocal$lambda() {
    return createDefault(Companion_getInstance_13());
  }
  function get_$stableprop_46() {
    return 0;
  }
  function ImageLoaderProvidableCompositionLocal(delegate) {
    this.delegate_1 = delegate;
    this.$stable_1 = 0;
  }
  protoOf(ImageLoaderProvidableCompositionLocal).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(ImageLoaderProvidableCompositionLocal).get_current_jwi6j4_k$ = function () {
    illegalDecoyCallException('<get-current>');
  };
  protoOf(ImageLoaderProvidableCompositionLocal).provides_5l700r_k$ = function (value) {
    return this.delegate_1.provides_3agxel_k$(value);
  };
  protoOf(ImageLoaderProvidableCompositionLocal).$get_current$$composable_nxoy3y_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = this.delegate_1;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0;
  };
  function asImageBitmap(_this__u8e3s4) {
    return asComposeImageBitmap(_this__u8e3s4);
  }
  function get_size(_this__u8e3s4) {
    return imul(_this__u8e3s4.get_height_e7t92o_k$(), _this__u8e3s4.get_rowBytes_viqv7q_k$());
  }
  function toPainter_0(_this__u8e3s4) {
    return new BitmapPainter_0(toComposeImageBitmap(_this__u8e3s4));
  }
  function setupSkiaComponents(_this__u8e3s4, density, maxParallelism) {
    density = density === VOID ? Density(2.0) : density;
    maxParallelism = maxParallelism === VOID ? get_DEFAULT_MAX_PARALLELISM() : maxParallelism;
    _this__u8e3s4.add_nxqec1_k$(new Factory_6(density));
    _this__u8e3s4.add_nxqec1_k$(new Factory_4());
    _this__u8e3s4.add_nxqec1_k$(new Factory_5(maxParallelism));
  }
  function get_$stableprop_47() {
    return 0;
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _get_options__xuq71v($this) {
    return $this.options_1;
  }
  function Factory_4() {
    this.$stable_1 = 0;
  }
  protoOf(Factory_4).create_5rdwro_k$ = function (source, options) {
    if (!options.get_playAnimate_9telp8_k$())
      return null;
    if (!isGif(source.get_source_jl0x7o_k$()))
      return null;
    return new GifDecoder(source.get_source_jl0x7o_k$(), options);
  };
  function get_$stableprop_48() {
    return 0;
  }
  function GifDecoder(source, options) {
    this.source_1 = source;
    this.options_1 = options;
    this.$stable_1 = 0;
  }
  protoOf(GifDecoder).decode_5q4u9q_k$ = function ($completion) {
    // Inline function 'okio.use' call
    var this_0 = this.source_1;
    var result = null;
    var thrown = null;
    try {
      // Inline function 'com.seiko.imageloader.component.decoder.GifDecoder.decode.<anonymous>' call
      result = Companion_getInstance_8().makeFromData_68bs4e_k$(Companion_getInstance_9().makeFromBytes$default_1ffal6_k$(this_0.readByteArray_52wnjv_k$()));
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        if (this_0 == null)
          null;
        else {
          this_0.close_yn9xrc_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null) {
            thrown = t_0;
          } else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    var codec = ensureNotNull(result);
    return new OfPainter(new GifPainter(codec, this.options_1.get_repeatCount_v59ovp_k$()));
  };
  protoOf(GifDecoder).decode_3mjp2j_k$ = function ($completion) {
    return this.decode_5q4u9q_k$($completion);
  };
  function _get_parallelismLock__nkkzgq($this) {
    return $this.parallelismLock_1;
  }
  function get_$stableprop_49() {
    return 8;
  }
  function _get_source__4cuw5s_0($this) {
    return $this.source_1;
  }
  function _get_options__xuq71v_0($this) {
    return $this.options_1;
  }
  function _get_parallelismLock__nkkzgq_0($this) {
    return $this.parallelismLock_1;
  }
  function toBitmap(_this__u8e3s4, $this) {
    var bitmap = Bitmap_init_$Create$();
    var srcWidth = _this__u8e3s4.get_width_j0q4yl_k$();
    var srcHeight = _this__u8e3s4.get_height_e7t92o_k$();
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = $this.options_1.get_size_cxx1ym_k$();
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_0().get_Unspecified_3ttj0y_k$()))) {
      tmp_0 = !Size__isEmpty_impl_o9ye97($this.options_1.get_size_cxx1ym_k$());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.comparisons.minOf' call
      var a = _Size___get_width__impl__58y75t($this.options_1.get_size_cxx1ym_k$());
      var b = _Size___get_height__impl__a04p02($this.options_1.get_size_cxx1ym_k$());
      var tmp$ret$1 = Math.min(a, b);
      tmp = coerceAtMost(numberToInt(tmp$ret$1), $this.options_1.get_maxImageSize_xiohxb_k$());
    } else {
      tmp = $this.options_1.get_maxImageSize_xiohxb_k$();
    }
    var maxImageSize = tmp;
    var tmp0_container = calculateDstSize(srcWidth, srcHeight, maxImageSize);
    var dstWidth = tmp0_container.component1_7eebsc_k$();
    var dstHeight = tmp0_container.component2_7eebsb_k$();
    bitmap.allocN32Pixels$default_jdhd5q_k$(dstWidth, dstHeight);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_1 = Canvas_init_$Create$(bitmap);
    var tmp_1;
    try {
      // Inline function 'com.seiko.imageloader.component.decoder.SkiaImageDecoder.toBitmap.<anonymous>' call
      tmp_1 = this_1.drawImageRect_8bb4mv_k$(_this__u8e3s4, Companion_getInstance_10().makeWH_nov667_k$(srcWidth, srcHeight), Companion_getInstance_10().makeWH_nov667_k$(dstWidth, dstHeight));
    }finally {
      this_1.close_yn9xrc_k$();
    }
    bitmap.setImmutable_j5sn28_k$();
    return bitmap;
  }
  function Factory_5(maxParallelism) {
    maxParallelism = maxParallelism === VOID ? get_DEFAULT_MAX_PARALLELISM() : maxParallelism;
    this.parallelismLock_1 = Semaphore(maxParallelism);
    this.$stable_1 = 8;
  }
  protoOf(Factory_5).create_5rdwro_k$ = function (source, options) {
    return new SkiaImageDecoder(source.get_source_jl0x7o_k$(), options, this.parallelismLock_1);
  };
  function get_$stableprop_50() {
    return 0;
  }
  function $decodeCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($decodeCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this._this__u8e3s4__1.parallelismLock_1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this1__1.acquire_kfvtdt_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var this_0 = this._this__u8e3s4__1.source_1;
            var result = null;
            var thrown = null;
            l$ret$1: do {
              try {
                try {
                  result = Companion_getInstance_11().makeFromEncoded_99p5hy_k$(this_0.readByteArray_52wnjv_k$());
                  break l$ret$1;
                } catch ($p) {
                  if ($p instanceof Error) {
                    var t = $p;
                    thrown = t;
                    break l$ret$1;
                  } else {
                    throw $p;
                  }
                }
              } catch ($p) {
                var t_0 = $p;
                try {
                  if (this_0 == null)
                    null;
                  else {
                    this_0.close_yn9xrc_k$();
                  }
                } catch ($p) {
                  if ($p instanceof Error) {
                    var t_1 = $p;
                    if (thrown == null) {
                      thrown = t_1;
                    } else {
                      addSuppressed(thrown, t_1);
                    }
                  } else {
                    throw $p;
                  }
                }
                throw t_0;
              }
            }
             while (false);
            try {
              if (this_0 == null)
                null;
              else {
                this_0.close_yn9xrc_k$();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_2 = $p;
                if (thrown == null) {
                  thrown = t_2;
                } else {
                  addSuppressed(thrown, t_2);
                }
              } else {
                throw $p;
              }
            }

            if (!(thrown == null))
              throw thrown;
            var image = ensureNotNull(result);
            var tmp$ret$2 = new OfBitmap(toBitmap(image, this._this__u8e3s4__1));
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(9);
            var t_3 = this.get_exception_x0n6w6_k$();
            this.this1__1.release_wu5yyf_k$();
            throw t_3;
          case 6:
            var tmp_1 = tmp$ret$2;
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.release_wu5yyf_k$();
            this.tmp$ret$60__1 = tmp_1;
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.release_wu5yyf_k$();
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            return this.tmp$ret$60__1;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SkiaImageDecoder(source, options, parallelismLock) {
    this.source_1 = source;
    this.options_1 = options;
    this.parallelismLock_1 = parallelismLock;
    this.$stable_1 = 0;
  }
  protoOf(SkiaImageDecoder).decode_5n12cg_k$ = function ($completion) {
    var tmp = new $decodeCOROUTINE$8(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SkiaImageDecoder).decode_3mjp2j_k$ = function ($completion) {
    return this.decode_5n12cg_k$($completion);
  };
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function isApplicable_1($this, source) {
    var tmp;
    // Inline function 'com.seiko.imageloader.model.mimeType' call
    var tmp_0 = source.get_extra_ir3qw7_k$().get_wei43m_k$(get_KEY_MIME_TYPE());
    if (((!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null) === 'image/svg+xml') {
      tmp = true;
    } else {
      tmp = isSvg(source.get_source_jl0x7o_k$());
    }
    return tmp;
  }
  function get_$stableprop_51() {
    return 0;
  }
  function _get_MIME_TYPE_SVG__3qmfdl($this) {
    return $this.MIME_TYPE_SVG_1;
  }
  function _get_source__4cuw5s_1($this) {
    return $this.source_1;
  }
  function _get_density__l5pazb_0($this) {
    return $this.density_1;
  }
  function _get_options__xuq71v_1($this) {
    return $this.options_1;
  }
  function Factory_6(density) {
    this.density_1 = density;
    this.$stable_1 = 0;
  }
  protoOf(Factory_6).create_5rdwro_k$ = function (source, options) {
    if (!isApplicable_1(this, source))
      return null;
    return new SvgDecoder(source.get_source_jl0x7o_k$(), this.density_1, options);
  };
  function Companion_7() {
    Companion_instance_7 = this;
    this.MIME_TYPE_SVG_1 = 'image/svg+xml';
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_52() {
    return 0;
  }
  function SvgDecoder(source, density, options) {
    Companion_getInstance_20();
    this.source_1 = source;
    this.density_1 = density;
    this.options_1 = options;
    this.$stable_1 = 0;
  }
  protoOf(SvgDecoder).decode_5q4u9q_k$ = function ($completion) {
    // Inline function 'okio.use' call
    var this_0 = this.source_1;
    var result = null;
    var thrown = null;
    try {
      // Inline function 'com.seiko.imageloader.component.decoder.SvgDecoder.decode.<anonymous>' call
      result = Companion_getInstance_9().makeFromBytes$default_1ffal6_k$(this_0.readByteArray_52wnjv_k$());
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
      } else {
        throw $p;
      }
    }
    finally {
      try {
        if (this_0 == null)
          null;
        else {
          this_0.close_yn9xrc_k$();
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var t_0 = $p;
          if (thrown == null) {
            thrown = t_0;
          } else {
            addSuppressed(thrown, t_0);
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(thrown == null))
      throw thrown;
    var data = ensureNotNull(result);
    return new OfPainter(new SVGPainter(SVGDOM_init_$Create$(data), this.density_1, this.options_1.get_size_cxx1ym_k$()));
  };
  protoOf(SvgDecoder).decode_3mjp2j_k$ = function ($completion) {
    return this.decode_5q4u9q_k$($completion);
  };
  function _get_codec__iweo3p($this) {
    return $this.codec_1;
  }
  function _get_repeatCount__jbl9ur($this) {
    return $this.repeatCount_1;
  }
  function _get_durations__19epta($this) {
    return $this.durations_1;
  }
  function _get_totalDuration__4l3g2v($this) {
    return $this.totalDuration_1;
  }
  function _set_startTimeMillis__xrx840($this, _set____db54di) {
    $this.startTimeMillis_1 = _set____db54di;
  }
  function _get_startTimeMillis__no70lg($this) {
    return $this.startTimeMillis_1;
  }
  function _set_frame__elgad4($this, _set____db54di) {
    var this_0 = $this.frame$delegate_1;
    frame$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_frame__hfo64c($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.frame$delegate_1;
    frame$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _set_loopIteration__u8i3p0($this, _set____db54di) {
    $this.loopIteration_1 = _set____db54di;
  }
  function _get_loopIteration__pkufrs($this) {
    return $this.loopIteration_1;
  }
  function _set_bitmapCache__ghrnla($this, _set____db54di) {
    $this.bitmapCache_1 = _set____db54di;
  }
  function _get_bitmapCache__dsmiqm($this) {
    return $this.bitmapCache_1;
  }
  function _set_intSizeCache__crtk91($this, _set____db54di) {
    $this.intSizeCache_1 = _set____db54di;
  }
  function _get_intSizeCache__sbkat5($this) {
    return $this.intSizeCache_1;
  }
  function recycleIntSize($this, size) {
    var intSize = $this.intSizeCache_1;
    var tmp;
    var tmp_0;
    var tmp_1 = intSize;
    if ((tmp_1 == null ? null : new IntSize(tmp_1)) == null) {
      tmp_0 = true;
    } else {
      tmp_0 = !(compareTo(_Size___get_width__impl__58y75t(size), _IntSize___get_width__impl__d9yl4o(intSize)) === 0);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(compareTo(_Size___get_height__impl__a04p02(size), _IntSize___get_height__impl__prv63b(intSize)) === 0);
    }
    if (tmp) {
      // Inline function 'kotlin.also' call
      var this_0 = new IntSize(IntSize_0(numberToInt(_Size___get_width__impl__58y75t(size)), numberToInt(_Size___get_height__impl__a04p02(size))));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.seiko.imageloader.util.GifPainter.recycleIntSize.<anonymous>' call
      $this.intSizeCache_1 = this_0.packedValue_1;
      intSize = this_0.packedValue_1;
    }
    return intSize;
  }
  function frameOf($this, time) {
    var t = 0;
    var inductionVariable = 0;
    var last = $this.durations_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var frame = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        t = t + $this.durations_1.get_c1px32_k$(frame) | 0;
        if (toLong(t).compareTo_9jj042_k$(time) >= 0)
          return frame;
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.error' call
    var message = 'Unexpected';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function clear_0($this) {
    $this.startTimeMillis_1 = new Long(-1, -1);
    _set_frame__elgad4($this, 0);
    $this.loopIteration_1 = -1;
    var tmp0_safe_receiver = $this.bitmapCache_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_yn9xrc_k$();
    }
    $this.bitmapCache_1 = null;
    $this.intSizeCache_1 = null;
  }
  function GifPainter(codec, repeatCount) {
    repeatCount = repeatCount === VOID ? Companion_getInstance_17().get_REPEAT_INFINITE_2e67gv_k$() : repeatCount;
    Painter.call(this);
    this.codec_1 = codec;
    this.repeatCount_1 = repeatCount;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.codec_1.get_framesInfo_od2nlv_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.seiko.imageloader.util.GifPainter.durations.<anonymous>' call
      var tmp$ret$0 = item.get_duration_6a6kpp_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.durations_1 = destination;
    this.totalDuration_1 = sum(this.durations_1);
    this.startTimeMillis_1 = new Long(-1, -1);
    this.frame$delegate_1 = mutableStateOf(0);
    this.loopIteration_1 = -1;
    this.bitmapCache_1 = null;
    this.intSizeCache_1 = null;
  }
  protoOf(GifPainter).get_intrinsicSize_culx5t_k$ = function () {
    return Size_0(this.codec_1.get_width_j0q4yl_k$(), this.codec_1.get_height_e7t92o_k$());
  };
  protoOf(GifPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.bitmapCache_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.codec_1.readPixels_75wq7r_k$(tmp0_safe_receiver, _get_frame__hfo64c(this), _get_frame__hfo64c(this) - 1 | 0);
      _this__u8e3s4.drawImage$default_qql6c2_k$(asComposeImageBitmap(tmp0_safe_receiver), VOID, VOID, VOID, recycleIntSize(this, _this__u8e3s4.get_size_cxx1ym_k$()));
    }
  };
  protoOf(GifPainter).isPlay_jio0w2_k$ = function () {
    return this.totalDuration_1 > 0 ? this.repeatCount_1 === Companion_getInstance_17().get_REPEAT_INFINITE_2e67gv_k$() ? true : this.repeatCount_1 > 0 : false;
  };
  protoOf(GifPainter).nextPlay_njzcg7_k$ = function () {
    return this.totalDuration_1 > 0 ? this.repeatCount_1 === Companion_getInstance_17().get_REPEAT_INFINITE_2e67gv_k$() ? true : this.loopIteration_1 < this.repeatCount_1 : false;
  };
  protoOf(GifPainter).update_c5t023_k$ = function (frameTimeMillis) {
    if (this.startTimeMillis_1.equals(new Long(-1, -1))) {
      this.startTimeMillis_1 = frameTimeMillis;
    }
    var playTimeMillis = frameTimeMillis.minus_mfbszm_k$(this.startTimeMillis_1);
    // Inline function 'kotlin.Long.rem' call
    var other = this.totalDuration_1;
    var tmp$ret$0 = playTimeMillis.rem_bsnl9o_k$(toLong(other));
    _set_frame__elgad4(this, frameOf(this, tmp$ret$0));
    var tmp = this;
    // Inline function 'kotlin.Long.div' call
    var other_0 = this.totalDuration_1;
    tmp.loopIteration_1 = playTimeMillis.div_jun7gj_k$(toLong(other_0)).toInt_1tsl84_k$();
  };
  protoOf(GifPainter).onRemembered_68t2e3_k$ = function () {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Bitmap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.seiko.imageloader.util.GifPainter.onRemembered.<anonymous>' call
    this_0.allocPixels_elr7wo_k$(this.codec_1.get_imageInfo_60i77k_k$());
    tmp.bitmapCache_1 = this_0;
  };
  protoOf(GifPainter).onAbandoned_1gx7a3_k$ = function () {
    clear_0(this);
  };
  protoOf(GifPainter).onForgotten_pbqifp_k$ = function () {
    clear_0(this);
  };
  function frame$factory() {
    return getPropertyCallableRef('frame', 1, KMutableProperty1, function (receiver) {
      return _get_frame__hfo64c(receiver);
    }, function (receiver, value) {
      return _set_frame__elgad4(receiver, value);
    });
  }
  function frame$factory_0() {
    return getPropertyCallableRef('frame', 1, KMutableProperty1, function (receiver) {
      return _get_frame__hfo64c(receiver);
    }, function (receiver, value) {
      return _set_frame__elgad4(receiver, value);
    });
  }
  function _get_dom__e677gv($this) {
    return $this.dom_1;
  }
  function _get_density__l5pazb_1($this) {
    return $this.density_1;
  }
  function _get_requestSize__mb3vz3($this) {
    return $this.requestSize_1;
  }
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function _get_defaultSizePx__5mf98n($this) {
    return $this.defaultSizePx_1;
  }
  function _set_previousDrawSize__4vz6xn($this, _set____db54di) {
    $this.previousDrawSize_1 = _set____db54di;
  }
  function _get_previousDrawSize__xz3g0f($this) {
    return $this.previousDrawSize_1;
  }
  function _set_alpha__c56vtz($this, _set____db54di) {
    $this.alpha_2 = _set____db54di;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_2;
  }
  function _set_colorFilter__ke9voq($this, _set____db54di) {
    $this.colorFilter_2 = _set____db54di;
  }
  function _get_colorFilter__kcfzyi($this) {
    return $this.colorFilter_2;
  }
  function _get_drawCache__uyo1al($this) {
    return $this.drawCache_1;
  }
  function drawSvg(_this__u8e3s4, $this, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var tmp0_safe_receiver = $this.root_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.set_width_iqtqrd_k$(new SVGLength(_Size___get_width__impl__58y75t(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.root_1;
    if (tmp1_safe_receiver != null) {
      tmp1_safe_receiver.set_height_nllxvw_k$(new SVGLength(_Size___get_height__impl__a04p02(size), SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.root_1;
    if (tmp2_safe_receiver != null) {
      tmp2_safe_receiver.set_preserveAspectRatio_1wbzsx_k$(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.dom_1.render_ag2cxd_k$(get_nativeCanvas(canvas));
  }
  function SVGPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg($this$drawCachedImage, this$0, $this$drawCachedImage.get_size_cxx1ym_k$());
      return Unit_getInstance();
    };
  }
  function SVGPainter(dom, density, requestSize) {
    requestSize = requestSize === VOID ? Companion_getInstance_0().get_Unspecified_3ttj0y_k$() : requestSize;
    Painter.call(this);
    this.dom_1 = dom;
    this.density_1 = density;
    this.requestSize_1 = requestSize;
    this.root_1 = this.dom_1.get_root_wott0r_k$();
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'com.seiko.imageloader.util.SVGPainter.defaultSizePx.<anonymous>' call
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.requestSize_1;
      if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_0().get_Unspecified_3ttj0y_k$()))) {
        tmp$ret$1 = this.requestSize_1;
        break $l$block;
      }
      var tmp0_safe_receiver = this.root_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.withUnit_7yfqte_k$(SVGLengthUnit_PX_getInstance());
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
      var tmp4_safe_receiver = this.root_1;
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_height_e7t92o_k$();
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.withUnit_7yfqte_k$(SVGLengthUnit_PX_getInstance());
      var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_value_j01efc_k$();
      var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
      var tmp_0;
      if (width === 0.0 ? height === 0.0 : false) {
        tmp_0 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
      } else {
        tmp_0 = Size_0(width, height);
      }
      tmp$ret$1 = tmp_0;
    }
    tmp.defaultSizePx_1 = tmp$ret$1;
    var tmp_1;
    var tmp0_safe_receiver_0 = this.root_1;
    if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_viewBox_8rz1fh_k$()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_1 = this.defaultSizePx_1;
      tmp_1 = !_Size___get_packedValue__impl__7rlt1o(this_1).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_0().get_Unspecified_3ttj0y_k$()));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp1_safe_receiver_0 = this.root_1;
      if (tmp1_safe_receiver_0 != null) {
        tmp1_safe_receiver_0.set_viewBox_4zmy83_k$(Companion_getInstance_10().makeXYWH_irfy4g_k$(0.0, 0.0, _Size___get_width__impl__58y75t(this.defaultSizePx_1), _Size___get_height__impl__a04p02(this.defaultSizePx_1)));
      }
    }
    this.previousDrawSize_1 = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    this.alpha_2 = 1.0;
    this.colorFilter_2 = null;
    this.drawCache_1 = new DrawCache();
  }
  protoOf(SVGPainter).get_intrinsicSize_culx5t_k$ = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.defaultSizePx_1;
    if (!_Size___get_packedValue__impl__7rlt1o(this_0).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_0().get_Unspecified_3ttj0y_k$()))) {
      tmp = Size__times_impl_fnp4nc(this.defaultSizePx_1, this.density_1.get_density_qy0267_k$());
    } else {
      tmp = Companion_getInstance_0().get_Unspecified_3ttj0y_k$();
    }
    return tmp;
  };
  protoOf(SVGPainter).applyAlpha_eeyl20_k$ = function (alpha) {
    this.alpha_2 = alpha;
    return true;
  };
  protoOf(SVGPainter).applyColorFilter_uuk0e3_k$ = function (colorFilter) {
    this.colorFilter_2 = colorFilter;
    return true;
  };
  protoOf(SVGPainter).onDraw_yom3na_k$ = function (_this__u8e3s4) {
    if (!equals(this.previousDrawSize_1, _this__u8e3s4.get_size_cxx1ym_k$())) {
      // Inline function 'kotlin.math.ceil' call
      var x = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_cxx1ym_k$());
      var tmp$ret$0 = Math.ceil(x);
      var tmp = numberToInt(tmp$ret$0);
      // Inline function 'kotlin.math.ceil' call
      var x_0 = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_cxx1ym_k$());
      var tmp$ret$1 = Math.ceil(x_0);
      var tmp_0 = IntSize_0(tmp, numberToInt(tmp$ret$1));
      var tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      this.drawCache_1.drawCachedImage_7nlljd_k$(tmp_0, _this__u8e3s4, tmp_1, SVGPainter$onDraw$lambda(this));
    }
    this.drawCache_1.drawInto_jyxzr7_k$(_this__u8e3s4, this.alpha_2, this.colorFilter_2);
  };
  //region block: init
  KEY_MIME_TYPE = 'KEY_MIME_TYPE';
  DEFAULT_MAX_PARALLELISM = 4;
  DEFAULT_MAX_IMAGE_SIZE = 4096;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = rememberImagePainter$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-imageLoader-image-loader.js.map
