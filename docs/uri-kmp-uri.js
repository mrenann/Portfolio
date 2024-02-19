(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'uri-kmp-uri'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'uri-kmp-uri'.");
    }
    root['uri-kmp-uri'] = factory(typeof this['uri-kmp-uri'] === 'undefined' ? {} : this['uri-kmp-uri'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.cf;
  var interfaceMeta = kotlin_kotlin.$_$.ge;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i3;
  var charArrayOf = kotlin_kotlin.$_$.ld;
  var concatToString = kotlin_kotlin.$_$.fh;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var AbstractList = kotlin_kotlin.$_$.e6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.r2;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var RandomAccess = kotlin_kotlin.$_$.f7;
  var classMeta = kotlin_kotlin.$_$.qd;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.vl;
  var fillArrayVal = kotlin_kotlin.$_$.wd;
  var arrayCopy = kotlin_kotlin.$_$.j7;
  var VOID = kotlin_kotlin.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.fl;
  var charSequenceLength = kotlin_kotlin.$_$.od;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d3;
  var equals = kotlin_kotlin.$_$.ud;
  var Companion_getInstance = kotlin_kotlin.$_$.x5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q3;
  var createFailure = kotlin_kotlin.$_$.el;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.u3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.s3;
  var emptySet = kotlin_kotlin.$_$.w8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var indexOf = kotlin_kotlin.$_$.qh;
  var emptyList = kotlin_kotlin.$_$.u8;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Exception = kotlin_kotlin.$_$.zj;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var regionMatches = kotlin_kotlin.$_$.ei;
  var compareTo = kotlin_kotlin.$_$.rd;
  var isInterface = kotlin_kotlin.$_$.pe;
  var Comparable = kotlin_kotlin.$_$.tj;
  var Char = kotlin_kotlin.$_$.rj;
  var lazy = kotlin_kotlin.$_$.nl;
  var decodeToString = kotlin_kotlin.$_$.kh;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var toString_0 = kotlin_kotlin.$_$.p3;
  var charSequenceGet = kotlin_kotlin.$_$.nd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o3;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.n3;
  var setOf = kotlin_kotlin.$_$.ab;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var encodeToByteArray = kotlin_kotlin.$_$.lh;
  var decodeToString_0 = kotlin_kotlin.$_$.jh;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var toByte = kotlin_kotlin.$_$.ef;
  var KProperty1 = kotlin_kotlin.$_$.pg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ce;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.kd;
  var defineProp = kotlin_kotlin.$_$.sd;
  var startsWith = kotlin_kotlin.$_$.oi;
  var last = kotlin_kotlin.$_$.ea;
  var lastIndexOf = kotlin_kotlin.$_$.ai;
  var toInt = kotlin_kotlin.$_$.aj;
  var NumberFormatException = kotlin_kotlin.$_$.hk;
  var getStringHashCode = kotlin_kotlin.$_$.de;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Builder, 'Builder', interfaceMeta);
  setMetadataFor(NotCachedHolder, 'NotCachedHolder', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PathSegments, 'PathSegments', classMeta, AbstractList, [AbstractList, RandomAccess]);
  setMetadataFor(PathSegmentsBuilder, 'PathSegmentsBuilder', classMeta, VOID, VOID, PathSegmentsBuilder);
  setMetadataFor(Builder_0, 'Builder', classMeta, VOID, [Builder], Builder_0);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  function get_isOpaque() {
    return !this.get_isHierarchical_yyaz18_k$();
  }
  function get_isAbsolute() {
    return !this.get_isRelative_skgyhr_k$();
  }
  function getQueryParameterNames() {
    if (this.get_isOpaque_xnqi0k_k$()) {
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptySet();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    var names = LinkedHashSet_init_$Create$();
    var start = 0;
    do {
      var next = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = next === -1 ? query.length : next;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      // Inline function 'kotlin.text.substring' call
      var startIndex = start;
      var endIndex = separator;
      // Inline function 'kotlin.js.asDynamic' call
      var name = query.substring(startIndex, endIndex);
      names.add_utx5q5_k$(UriCodec_getInstance().decode$default_2mvj1l_k$(name));
      start = end + 1 | 0;
    }
     while (start < query.length);
    return names;
  }
  function getQueryParameters(key) {
    if (this.get_isOpaque_xnqi0k_k$()) {
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    var tmp_0;
    try {
      tmp_0 = UriCodec_getInstance().encode_8t0lno_k$(key);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        throw AssertionError_init_$Create$(e);
      } else {
        throw $p;
      }
    }
    var encodedKey = tmp_0;
    var values = ArrayList_init_$Create$();
    var start = 0;
    $l$loop: do {
      var nextAmpersand = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = !(nextAmpersand === -1) ? nextAmpersand : query.length;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      if ((separator - start | 0) === encodedKey.length ? regionMatches(query, start, encodedKey, 0, encodedKey.length) : false) {
        if (separator === end) {
          values.add_utx5q5_k$('');
        } else {
          var tmp_2 = UriCodec_getInstance();
          // Inline function 'kotlin.text.substring' call
          var startIndex = separator + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$1 = query.substring(startIndex, end);
          values.add_utx5q5_k$(tmp_2.decode$default_2mvj1l_k$(tmp$ret$1));
        }
      }
      var tmp_3;
      if (!(nextAmpersand === -1)) {
        tmp_3 = nextAmpersand + 1 | 0;
      } else {
        break $l$loop;
      }
      start = tmp_3;
    }
     while (true);
    return values;
  }
  function getQueryParameter(key) {
    var tmp0_elvis_lhs = this.get_encodedQuery_28s95p_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    if (this.get_isOpaque_xnqi0k_k$()) {
      throw UnsupportedOperationException_init_$Create$("This isn't a hierarchical URI.");
    }
    var encodedKey = UriCodec_getInstance().encode_z49t0d_k$(key, null);
    var length = query.length;
    var start = 0;
    $l$loop: do {
      var nextAmpersand = indexOf(query, _Char___init__impl__6a9atx(38), start);
      var end = !(nextAmpersand === -1) ? nextAmpersand : length;
      var separator = indexOf(query, _Char___init__impl__6a9atx(61), start);
      if (separator > end ? true : separator === -1) {
        separator = end;
      }
      if ((separator - start | 0) === encodedKey.length ? regionMatches(query, start, encodedKey, 0, encodedKey.length) : false) {
        var tmp_0;
        if (separator === end) {
          tmp_0 = '';
        } else {
          // Inline function 'kotlin.text.substring' call
          var startIndex = separator + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var encodedValue = query.substring(startIndex, end);
          tmp_0 = UriCodec_getInstance().decode_hm9h1w_k$(encodedValue, true, false);
        }
        return tmp_0;
      }
      var tmp_1;
      if (!(nextAmpersand === -1)) {
        tmp_1 = nextAmpersand + 1 | 0;
      } else {
        break $l$loop;
      }
      start = tmp_1;
    }
     while (true);
    return null;
  }
  function getBooleanQueryParameter(key, defaultValue) {
    var tmp0_elvis_lhs = this.getQueryParameter_kwymw3_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var flag = tmp;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    flag = flag.toLowerCase();
    return !('false' === flag) ? !('0' === flag) : false;
  }
  function normalizeScheme() {
    var tmp0_elvis_lhs = this.get_scheme_je6tv2_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var scheme = tmp;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var lowerScheme = scheme.toLowerCase();
    return scheme === lowerScheme ? this : this.buildUpon_n637i0_k$().scheme_qd0ske_k$(lowerScheme).build_1k0s4u_k$();
  }
  function compareTo_0(other) {
    return compareTo(toString(this), toString(other));
  }
  function compareTo_1(other) {
    return this.compareTo_6v2wo5_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  }
  setMetadataFor(Uri, 'Uri', interfaceMeta, VOID, [Comparable]);
  setMetadataFor(ByteBuffer, 'ByteBuffer', classMeta);
  setMetadataFor(UriCodec, 'UriCodec', objectMeta);
  setMetadataFor(UriSyntaxException, 'UriSyntaxException', classMeta, Exception);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(AbstractPart, 'AbstractPart', classMeta);
  setMetadataFor(Part, 'Part', classMeta, AbstractPart);
  setMetadataFor(EmptyPart, 'EmptyPart', classMeta, Part);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(PathPart, 'PathPart', classMeta, AbstractPart);
  setMetadataFor(AbstractHierarchicalUri, 'AbstractHierarchicalUri', classMeta, VOID, [Uri]);
  setMetadataFor(HierarchicalUri, 'HierarchicalUri', classMeta, AbstractHierarchicalUri);
  setMetadataFor(OpaqueUri, 'OpaqueUri', classMeta, VOID, [Uri]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(StringUri, 'StringUri', classMeta, AbstractHierarchicalUri);
  //endregion
  function Builder() {
  }
  function NotCachedHolder() {
    NotCachedHolder_instance = this;
    var tmp = this;
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(78), _Char___init__impl__6a9atx(79), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(32), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(72), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(68)]);
    tmp.NotCached_1 = concatToString(tmp$ret$0);
  }
  protoOf(NotCachedHolder).get_NotCached_fzv8j8_k$ = function () {
    return this.NotCached_1;
  };
  var NotCachedHolder_instance;
  function NotCachedHolder_getInstance() {
    if (NotCachedHolder_instance == null)
      new NotCachedHolder();
    return NotCachedHolder_instance;
  }
  function _get_segments__2ewn9x($this) {
    return $this.segments_1;
  }
  function Companion() {
    Companion_instance = this;
    this.EMPTY_1 = new PathSegments(null, 0);
  }
  protoOf(Companion).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PathSegments(segments, size) {
    Companion_getInstance_0();
    AbstractList.call(this);
    this.segments_1 = segments;
    this.size_1 = size;
  }
  protoOf(PathSegments).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(PathSegments).get_c1px32_k$ = function (index) {
    if (index >= this.size_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' should be less than ' + this.size_1);
    }
    // Inline function 'kotlin.requireNotNull' call
    var value = this.segments_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    return this.segments_1[index];
  };
  function _set_segments__adzo6v($this, _set____db54di) {
    $this.segments_1 = _set____db54di;
  }
  function _get_segments__2ewn9x_0($this) {
    var tmp = $this.segments_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('segments');
    }
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function PathSegmentsBuilder() {
    this.size_1 = 0;
  }
  protoOf(PathSegmentsBuilder).add_udnk2x_k$ = function (segment) {
    if (!(this.segments_1 == null)) {
      if ((this.size_1 + 1 | 0) === _get_segments__2ewn9x_0(this).length) {
        var tmp = 0;
        var tmp_0 = imul(_get_segments__2ewn9x_0(this).length, 2);
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_1 = fillArrayVal(Array(tmp_0), null);
        while (tmp < tmp_0) {
          tmp_1[tmp] = '';
          tmp = tmp + 1 | 0;
        }
        var expanded = tmp_1;
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = _get_segments__2ewn9x_0(this);
        var endIndex = this_0.length;
        arrayCopy(this_0, expanded, 0, 0, endIndex);
        this.segments_1 = expanded;
      }
    } else {
      var tmp_2 = this;
      var tmp_3 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_4 = fillArrayVal(Array(4), null);
      while (tmp_3 < 4) {
        tmp_4[tmp_3] = '';
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp_2.segments_1 = tmp_4;
    }
    var tmp_5 = _get_segments__2ewn9x_0(this);
    var tmp1 = this.size_1;
    this.size_1 = tmp1 + 1 | 0;
    tmp_5[tmp1] = segment;
  };
  protoOf(PathSegmentsBuilder).build_1k0s4u_k$ = function () {
    return !(this.segments_1 == null) ? new PathSegments(_get_segments__2ewn9x_0(this), this.size_1) : Companion_getInstance_0().EMPTY_1;
  };
  function _set_scheme__2zskby($this, _set____db54di) {
    $this.scheme_1 = _set____db54di;
  }
  function _get_scheme__1j1zp6($this) {
    return $this.scheme_1;
  }
  function _set_opaquePart__7nxlk3($this, _set____db54di) {
    $this.opaquePart_1 = _set____db54di;
  }
  function _get_opaquePart__7eazl5($this) {
    return $this.opaquePart_1;
  }
  function _set_authority__4pu42m($this, _set____db54di) {
    $this.authority_1 = _set____db54di;
  }
  function _get_authority__ol0cby($this) {
    return $this.authority_1;
  }
  function _set_path__9s3vma($this, _set____db54di) {
    $this.path_1 = _set____db54di;
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_query__juo6m5($this, _set____db54di) {
    $this.query_1 = _set____db54di;
  }
  function _get_query__c6g9vb($this) {
    return $this.query_1;
  }
  function _set_fragment__rezdrt($this, _set____db54di) {
    $this.fragment_1 = _set____db54di;
  }
  function _get_fragment__ut8cqj($this) {
    return $this.fragment_1;
  }
  function hasSchemeOrAuthority($this) {
    return !($this.scheme_1 == null) ? true : !($this.authority_1 == null) ? !($this.authority_1 === Companion_getInstance_3().get_NULL_wo69cg_k$()) : false;
  }
  function _get_NOT_HIERARCHICAL__9ghr6e($this) {
    return $this.NOT_HIERARCHICAL_1;
  }
  function Builder_0() {
    this.scheme_1 = null;
    this.opaquePart_1 = null;
    this.authority_1 = null;
    this.path_1 = null;
    this.query_1 = null;
    this.fragment_1 = null;
  }
  protoOf(Builder_0).isSchemeSet_gykghf_k$ = function () {
    return !(this.scheme_1 == null);
  };
  protoOf(Builder_0).isAuthoritySet_2mmoo9_k$ = function () {
    return !(this.authority_1 == null);
  };
  protoOf(Builder_0).scheme_qd0ske_k$ = function (scheme) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.scheme.<anonymous>' call
    this.scheme_1 = scheme;
    return this;
  };
  protoOf(Builder_0).opaquePart_q5z6so_k$ = function (opaquePart) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.opaquePart.<anonymous>' call
    this.opaquePart_1 = opaquePart;
    return this;
  };
  protoOf(Builder_0).opaquePart_nkpkgj_k$ = function (opaquePart) {
    return this.opaquePart_q5z6so_k$(Companion_getInstance_3().fromDecoded_62wt5x_k$(opaquePart));
  };
  protoOf(Builder_0).encodedOpaquePart_7ilxwb_k$ = function (opaquePart) {
    return this.opaquePart_q5z6so_k$(Companion_getInstance_3().fromEncoded_ff1vul_k$(opaquePart));
  };
  protoOf(Builder_0).authority_6vg77r_k$ = function (authority) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.authority.<anonymous>' call
    this.opaquePart_1 = null;
    this.authority_1 = authority;
    return this;
  };
  protoOf(Builder_0).authority_wkx7es_k$ = function (authority) {
    return this.authority_6vg77r_k$(Companion_getInstance_3().fromDecoded_62wt5x_k$(authority));
  };
  protoOf(Builder_0).encodedAuthority_yvblqm_k$ = function (authority) {
    return this.authority_6vg77r_k$(Companion_getInstance_3().fromEncoded_ff1vul_k$(authority));
  };
  protoOf(Builder_0).path_ee9pgy_k$ = function (path) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.path.<anonymous>' call
    this.opaquePart_1 = null;
    this.path_1 = path;
    return this;
  };
  protoOf(Builder_0).path_u2rvvi_k$ = function (path) {
    return this.path_ee9pgy_k$(Companion_getInstance_4().fromDecoded_62wt5x_k$(path));
  };
  protoOf(Builder_0).encodedPath_3b1g7g_k$ = function (path) {
    return this.path_ee9pgy_k$(Companion_getInstance_4().fromEncoded_ff1vul_k$(path));
  };
  protoOf(Builder_0).appendPath_gzxad7_k$ = function (newSegment) {
    return this.path_ee9pgy_k$(Companion_getInstance_4().appendDecodedSegment_nfeb0m_k$(this.path_1, newSegment));
  };
  protoOf(Builder_0).appendEncodedPath_53k1dt_k$ = function (newSegment) {
    return this.path_ee9pgy_k$(Companion_getInstance_4().appendEncodedSegment_x651pe_k$(this.path_1, newSegment));
  };
  protoOf(Builder_0).query_lekub0_k$ = function (query) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.query.<anonymous>' call
    this.opaquePart_1 = null;
    this.query_1 = query;
    return this;
  };
  protoOf(Builder_0).query_2xamdb_k$ = function (query) {
    return this.query_lekub0_k$(Companion_getInstance_3().fromDecoded_62wt5x_k$(query));
  };
  protoOf(Builder_0).encodedQuery_jkajmb_k$ = function (query) {
    return this.query_lekub0_k$(Companion_getInstance_3().fromEncoded_ff1vul_k$(query));
  };
  protoOf(Builder_0).fragment_bvxkhg_k$ = function (fragment) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.fragment.<anonymous>' call
    this.fragment_1 = fragment;
    return this;
  };
  protoOf(Builder_0).fragment_8u1irb_k$ = function (fragment) {
    return this.fragment_bvxkhg_k$(Companion_getInstance_3().fromDecoded_62wt5x_k$(fragment));
  };
  protoOf(Builder_0).encodedFragment_ftntop_k$ = function (fragment) {
    return this.fragment_bvxkhg_k$(Companion_getInstance_3().fromEncoded_ff1vul_k$(fragment));
  };
  protoOf(Builder_0).appendQueryParameter_1u6y20_k$ = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.Builder.appendQueryParameter.<anonymous>' call
    this.opaquePart_1 = null;
    var encodedKey = UriCodec_getInstance().encode_z49t0d_k$(key, null);
    var encodedValue = UriCodec_getInstance().encodeOrNull_ekk302_k$(value, null);
    var encodedParameter = encodedKey + '=' + encodedValue;
    if (this.query_1 == null) {
      this.query_1 = Companion_getInstance_3().fromEncoded_ff1vul_k$(encodedParameter);
      return this;
    }
    var oldQuery = ensureNotNull(this.query_1).get_encoded_pbfil7_k$();
    var tmp = this;
    var tmp_0;
    var tmp_1;
    if (oldQuery == null) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_1 = charSequenceLength(oldQuery) === 0;
    }
    if (tmp_1) {
      tmp_0 = Companion_getInstance_3().fromEncoded_ff1vul_k$(encodedParameter);
    } else {
      tmp_0 = Companion_getInstance_3().fromEncoded_ff1vul_k$('' + oldQuery + '&' + encodedParameter);
    }
    tmp.query_1 = tmp_0;
    return this;
  };
  protoOf(Builder_0).clearQuery_cbz69x_k$ = function () {
    return this.query_lekub0_k$((null == null ? true : null instanceof Part) ? null : THROW_CCE());
  };
  protoOf(Builder_0).build_1k0s4u_k$ = function () {
    var opaquePart = this.opaquePart_1;
    var tmp;
    if (opaquePart == null) {
      var path = this.path_1;
      if (path == null ? true : equals(path, Companion_getInstance_4().get_NULL_wo69cg_k$())) {
        path = Companion_getInstance_4().get_EMPTY_i8q41w_k$();
      } else {
        if (hasSchemeOrAuthority(this)) {
          path = Companion_getInstance_4().makeAbsolute_8t946d_k$(path);
        }
      }
      tmp = new HierarchicalUri(this.scheme_1, this.authority_1, path, this.query_1, this.fragment_1);
    } else {
      if (this.scheme_1 == null) {
        throw UnsupportedOperationException_init_$Create$('An opaque URI must have a scheme.');
      }
      tmp = new OpaqueUri(this.scheme_1, opaquePart, this.fragment_1);
    }
    return tmp;
  };
  protoOf(Builder_0).toString = function () {
    return toString(this.build_1k0s4u_k$());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.NOT_HIERARCHICAL_1 = "This isn't a hierarchical URI.";
    this.EMPTY_1 = new HierarchicalUri(null, Companion_getInstance_3().get_NULL_wo69cg_k$(), Companion_getInstance_4().get_EMPTY_i8q41w_k$(), Companion_getInstance_3().get_NULL_wo69cg_k$(), Companion_getInstance_3().get_NULL_wo69cg_k$());
  }
  protoOf(Companion_0).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_0).parse_pc1q8p_k$ = function (uriString) {
    return new StringUri(uriString);
  };
  protoOf(Companion_0).parseOrNull_7h2hqb_k$ = function (uriString) {
    // Inline function 'kotlin.Result.getOrNull' call
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      // Inline function 'com.eygraber.uri.Companion.parseOrNull.<anonymous>' call
      var value = new StringUri(uriString);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var this_0 = tmp;
    var tmp_1;
    if (_Result___get_isFailure__impl__jpiriv(this_0)) {
      tmp_1 = null;
    } else {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    }
    return tmp_1;
  };
  protoOf(Companion_0).fromParts_622bl_k$ = function (scheme, ssp, fragment) {
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (scheme == null) {
        // Inline function 'com.eygraber.uri.Companion.fromParts.<anonymous>' call
        var message = 'scheme';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (ssp == null) {
        // Inline function 'com.eygraber.uri.Companion.fromParts.<anonymous>' call
        var message_0 = 'ssp';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        break $l$block_0;
      }
    }
    return new OpaqueUri(scheme, Companion_getInstance_3().fromDecoded_62wt5x_k$(ssp), Companion_getInstance_3().fromDecoded_62wt5x_k$(fragment));
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Uri() {
  }
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function _get_buffer__tgqkad($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.buffer$delegate_1;
    buffer$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _set_writePosition__sxej31($this, _set____db54di) {
    $this.writePosition_1 = _set____db54di;
  }
  function UriCodec$ByteBuffer$buffer$delegate$lambda(this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = this$0.size_1;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        tmp_1[tmp] = 0;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function isAllowed($this, c, allow) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var progression = $this.lowercaseAsciiAlphaRange_1;
    var containsLower = progression.get_first_enpj7t_k$();
    if (c <= progression.get_last_rplkv5_k$() ? containsLower <= c : false) {
      tmp_2 = true;
    } else {
      var progression_0 = $this.uppercaseAsciiAlphaRange_1;
      var containsLower_0 = progression_0.get_first_enpj7t_k$();
      tmp_2 = c <= progression_0.get_last_rplkv5_k$() ? containsLower_0 <= c : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var progression_1 = $this.digitAsciiRange_1;
      var containsLower_1 = progression_1.get_first_enpj7t_k$();
      tmp_1 = c <= progression_1.get_last_rplkv5_k$() ? containsLower_1 <= c : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.defaultAllowedSet_1.contains_aljjnj_k$(new Char(c));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(allow == null) ? !(indexOf(allow, c) === -1) : false;
    }
    return tmp;
  }
  function ByteBuffer(size) {
    this.size_1 = size;
    var tmp = this;
    tmp.buffer$delegate_1 = lazy(UriCodec$ByteBuffer$buffer$delegate$lambda(this));
    this.writePosition_1 = 0;
  }
  protoOf(ByteBuffer).get_writePosition_jdt81t_k$ = function () {
    return this.writePosition_1;
  };
  protoOf(ByteBuffer).writeByte_9ih3z3_k$ = function (byte) {
    var tmp = _get_buffer__tgqkad(this);
    var tmp1 = this.writePosition_1;
    this.writePosition_1 = tmp1 + 1 | 0;
    tmp[tmp1] = byte;
  };
  protoOf(ByteBuffer).decodeToStringAndReset_4xj976_k$ = function () {
    var tmp;
    try {
      tmp = decodeToString(_get_buffer__tgqkad(this), 0, this.writePosition_1, false);
    }finally {
      this.writePosition_1 = 0;
    }
    return tmp;
  };
  function flushDecodingByteAccumulator(_this__u8e3s4, $this, builder, throwOnFailure) {
    if (_this__u8e3s4.writePosition_1 === 0)
      return Unit_getInstance();
    try {
      builder.append_22ad7x_k$(_this__u8e3s4.decodeToStringAndReset_4xj976_k$());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        if (throwOnFailure) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
        }
      } else {
        throw $p;
      }
    }
  }
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new UriSyntaxException(uri, 'Unexpected character' + nameString + ': ' + toString_0(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new UriSyntaxException(uri, 'Unexpected end of string ' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function hexCharToValue($this, c) {
    var tmp;
    var progression = $this.digitAsciiRange_1;
    var containsLower = progression.get_first_enpj7t_k$();
    if (c <= progression.get_last_rplkv5_k$() ? containsLower <= c : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(c);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else {
      var progression_0 = $this.lowercaseHexRange_1;
      var containsLower_0 = progression_0.get_first_enpj7t_k$();
      if (c <= progression_0.get_last_rplkv5_k$() ? containsLower_0 <= c : false) {
        // Inline function 'kotlin.code' call
        var tmp_1 = 10 + Char__toInt_impl_vasixd(c) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(97);
        tmp = tmp_1 - Char__toInt_impl_vasixd(this_1) | 0;
      } else {
        var progression_1 = $this.uppercaseHexRange_1;
        var containsLower_1 = progression_1.get_first_enpj7t_k$();
        if (c <= progression_1.get_last_rplkv5_k$() ? containsLower_1 <= c : false) {
          // Inline function 'kotlin.code' call
          var tmp_2 = 10 + Char__toInt_impl_vasixd(c) | 0;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(65);
          tmp = tmp_2 - Char__toInt_impl_vasixd(this_2) | 0;
        } else {
          tmp = -1;
        }
      }
    }
    return tmp;
  }
  function _get_lowercaseAsciiAlphaRange__v15zak($this) {
    return $this.lowercaseAsciiAlphaRange_1;
  }
  function _get_lowercaseHexRange__anytqa($this) {
    return $this.lowercaseHexRange_1;
  }
  function _get_uppercaseAsciiAlphaRange__2tsikt($this) {
    return $this.uppercaseAsciiAlphaRange_1;
  }
  function _get_uppercaseHexRange__6k3i0z($this) {
    return $this.uppercaseHexRange_1;
  }
  function _get_digitAsciiRange__w0fgl4($this) {
    return $this.digitAsciiRange_1;
  }
  function _get_defaultAllowedSet__eftjp2($this) {
    return $this.defaultAllowedSet_1;
  }
  function _get_hexDigits__71exdc($this) {
    return $this.hexDigits_1;
  }
  function _get_INVALID_INPUT_CHARACTER__nvstol($this) {
    return $this.INVALID_INPUT_CHARACTER_1;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.lowercaseAsciiAlphaRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122));
    this.lowercaseHexRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102));
    this.uppercaseAsciiAlphaRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90));
    this.uppercaseHexRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70));
    this.digitAsciiRange_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57));
    this.defaultAllowedSet_1 = setOf([new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42))]);
    var tmp = this;
    // Inline function 'kotlin.charArrayOf' call
    tmp.hexDigits_1 = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(66), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(68), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(70)]);
    this.INVALID_INPUT_CHARACTER_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).encodeOrNull_xndmfb_k$ = function (s) {
    return s == null ? null : this.encode_z49t0d_k$(s, null);
  };
  protoOf(UriCodec).encodeOrNull_ekk302_k$ = function (s, allow) {
    return s == null ? null : this.encode_z49t0d_k$(s, allow);
  };
  protoOf(UriCodec).encode_8t0lno_k$ = function (s) {
    return this.encode_z49t0d_k$(s, null);
  };
  protoOf(UriCodec).encode_z49t0d_k$ = function (s, allow) {
    var encoded = null;
    var oldLength = s.length;
    var current = 0;
    while (current < oldLength) {
      var nextToEncode = current;
      while (nextToEncode < oldLength ? isAllowed(this, charSequenceGet(s, nextToEncode), allow) : false) {
        nextToEncode = nextToEncode + 1 | 0;
      }
      if (nextToEncode === oldLength) {
        var tmp;
        if (current === 0) {
          tmp = s;
        } else {
          ensureNotNull(encoded).append_xdc1zw_k$(s, current, oldLength);
          tmp = encoded.toString();
        }
        return tmp;
      }
      if (encoded == null) {
        encoded = StringBuilder_init_$Create$();
      }
      if (nextToEncode > current) {
        encoded.append_xdc1zw_k$(s, current, nextToEncode);
      }
      current = nextToEncode;
      var nextAllowed = current + 1 | 0;
      while (nextAllowed < oldLength ? !isAllowed(this, charSequenceGet(s, nextAllowed), allow) : false) {
        nextAllowed = nextAllowed + 1 | 0;
      }
      // Inline function 'kotlin.text.substring' call
      var startIndex = current;
      var endIndex = nextAllowed;
      // Inline function 'kotlin.js.asDynamic' call
      var toEncode = s.substring(startIndex, endIndex);
      try {
        var bytes = encodeToByteArray(toEncode);
        var bytesLength = bytes.length;
        var inductionVariable = 0;
        if (inductionVariable < bytesLength)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            encoded.append_am5a4z_k$(_Char___init__impl__6a9atx(37));
            encoded.append_am5a4z_k$(this.hexDigits_1[(bytes[i] & 240) >> 4]);
            encoded.append_am5a4z_k$(this.hexDigits_1[bytes[i] & 15]);
          }
           while (inductionVariable < bytesLength);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw AssertionError_init_$Create$(e);
        } else {
          throw $p;
        }
      }
      current = nextAllowed;
    }
    decodeToString_0(new Int8Array(0));
    var tmp3_safe_receiver = encoded;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    return tmp4_elvis_lhs == null ? s : tmp4_elvis_lhs;
  };
  protoOf(UriCodec).decodeOrNull_a4bqp_k$ = function (s, convertPlus, throwOnFailure) {
    return s == null ? null : this.decode_hm9h1w_k$(s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).decodeOrNull$default_v0uiko_k$ = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.decodeOrNull_a4bqp_k$(s, convertPlus, throwOnFailure) : $super.decodeOrNull_a4bqp_k$.call(this, s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).decode_hm9h1w_k$ = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    // Inline function 'kotlin.apply' call
    var this_0 = new ByteBuffer(s.length);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.UriCodec.decode.<anonymous>' call
    var i = 0;
    while (i < s.length) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var c = charSequenceGet(s, tmp0);
      if (c === _Char___init__impl__6a9atx(43)) {
        $l$block: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          UriCodec_getInstance();
          if (this_0.writePosition_1 === 0) {
            break $l$block;
          }
          try {
            builder.append_22ad7x_k$(this_0.decodeToStringAndReset_4xj976_k$());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.append_am5a4z_k$(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (c === _Char___init__impl__6a9atx(37)) {
        var hexValue = 0;
        var inductionVariable = 0;
        if (inductionVariable <= 1)
          $l$loop: do {
            var j = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp;
            try {
              tmp = getNextCharacter(UriCodec_getInstance(), s, i, s.length, null);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof UriSyntaxException) {
                var e_0 = $p;
                var tmp_1;
                if (throwOnFailure) {
                  throw IllegalArgumentException_init_$Create$_0(e_0);
                } else {
                  $l$block_0: {
                    // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                    UriCodec_getInstance();
                    if (this_0.writePosition_1 === 0) {
                      break $l$block_0;
                    }
                    try {
                      builder.append_22ad7x_k$(this_0.decodeToStringAndReset_4xj976_k$());
                    } catch ($p) {
                      if ($p instanceof Exception) {
                        var e_1 = $p;
                        if (throwOnFailure) {
                          throw IllegalArgumentException_init_$Create$_0(e_1);
                        } else {
                          builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
                        }
                      } else {
                        throw $p;
                      }
                    }
                  }
                  builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
                  return builder.toString();
                }
              } else {
                throw $p;
              }
            }
            var nextC = tmp;
            i = i + 1 | 0;
            var newDigit = hexCharToValue(UriCodec_getInstance(), nextC);
            if (newDigit < 0) {
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException(UriCodec_getInstance(), s, null, nextC, i - 1 | 0));
              } else {
                $l$block_1: {
                  // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                  UriCodec_getInstance();
                  if (this_0.writePosition_1 === 0) {
                    break $l$block_1;
                  }
                  try {
                    builder.append_22ad7x_k$(this_0.decodeToStringAndReset_4xj976_k$());
                  } catch ($p) {
                    if ($p instanceof Exception) {
                      var e_2 = $p;
                      if (throwOnFailure) {
                        throw IllegalArgumentException_init_$Create$_0(e_2);
                      } else {
                        builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
                      }
                    } else {
                      throw $p;
                    }
                  }
                }
                builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
                break $l$loop;
              }
            }
            hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          }
           while (inductionVariable <= 1);
        this_0.writeByte_9ih3z3_k$(hexValue);
      } else {
        $l$block_2: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          UriCodec_getInstance();
          if (this_0.writePosition_1 === 0) {
            break $l$block_2;
          }
          try {
            builder.append_22ad7x_k$(this_0.decodeToStringAndReset_4xj976_k$());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e_3 = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e_3);
              } else {
                builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.append_am5a4z_k$(c);
      }
    }
    $l$block_3: {
      // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
      UriCodec_getInstance();
      if (this_0.writePosition_1 === 0) {
        break $l$block_3;
      }
      try {
        builder.append_22ad7x_k$(this_0.decodeToStringAndReset_4xj976_k$());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e_4 = $p;
          if (throwOnFailure) {
            throw IllegalArgumentException_init_$Create$_0(e_4);
          } else {
            builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
          }
        } else {
          throw $p;
        }
      }
    }
    return builder.toString();
  };
  protoOf(UriCodec).decode$default_2mvj1l_k$ = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.decode_hm9h1w_k$(s, convertPlus, throwOnFailure) : $super.decode_hm9h1w_k$.call(this, s, convertPlus, throwOnFailure);
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function buffer$factory() {
    return getPropertyCallableRef('buffer', 1, KProperty1, function (receiver) {
      return _get_buffer__tgqkad(receiver);
    }, null);
  }
  function _get_internalReason__jlhbg6($this) {
    return $this.internalReason_1;
  }
  function UriSyntaxException(input, internalReason, index) {
    index = index === VOID ? -1 : index;
    Exception_init_$Init$(internalReason, this);
    captureStack(this, UriSyntaxException);
    this.input_1 = input;
    this.internalReason_1 = internalReason;
    this.index_1 = index;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.index_1 >= -1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UriSyntaxException).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(UriSyntaxException).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(UriSyntaxException).get_reason_iy4m6l_k$ = function () {
    return this.get_message_h23axq_k$();
  };
  protoOf(UriSyntaxException).get_message_h23axq_k$ = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.UriSyntaxException.<get-message>.<anonymous>' call
    this_0.append_22ad7x_k$(this.internalReason_1);
    if (this.index_1 > -1) {
      this_0.append_22ad7x_k$(' at index ');
      this_0.append_t8pm91_k$(this.index_1);
    }
    this_0.append_22ad7x_k$(': ');
    this_0.append_22ad7x_k$(this.input_1);
    return this_0.toString();
  };
  function get_NOT_FOUND() {
    return NOT_FOUND;
  }
  var NOT_FOUND;
  function _get_internalDecoded__fpdua0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.internalDecoded$delegate_1;
    internalDecoded$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_internalEncoded__35l2u8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.internalEncoded$delegate_1;
    internalEncoded$factory();
    return this_0.get_value_j01efc_k$();
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.REPRESENTATION_ENCODED_1 = 1;
    this.REPRESENTATION_DECODED_1 = 2;
  }
  protoOf(Companion_1).get_REPRESENTATION_ENCODED_gn97r9_k$ = function () {
    return this.REPRESENTATION_ENCODED_1;
  };
  protoOf(Companion_1).get_REPRESENTATION_DECODED_2ajo0j_k$ = function () {
    return this.REPRESENTATION_DECODED_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function AbstractPart$internalDecoded$delegate$lambda(this$0, $decoded, $encoded) {
    return function () {
      var tmp;
      if (this$0.wasEncodedCached_1 ? true : $decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$()) {
        tmp = UriCodec_getInstance().decodeOrNull$default_v0uiko_k$($encoded);
      } else {
        tmp = $decoded;
      }
      return tmp;
    };
  }
  function AbstractPart$internalEncoded$delegate$lambda($encoded, this$0, $decoded) {
    return function () {
      return $encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$() ? this$0.encode_dof6gh_k$($decoded) : $encoded;
    };
  }
  function AbstractPart(encoded, decoded) {
    Companion_getInstance_2();
    this.wasEncodedCached_1 = !(encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
    this.wasDecodedCached_1 = !(decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
    var tmp = this;
    tmp.internalDecoded$delegate_1 = lazy(AbstractPart$internalDecoded$delegate$lambda(this, decoded, encoded));
    var tmp_0 = this;
    tmp_0.internalEncoded$delegate_1 = lazy(AbstractPart$internalEncoded$delegate$lambda(encoded, this, decoded));
    if (encoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$())
      if (decoded === NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$())
        throw IllegalArgumentException_init_$Create$('Neither encoded nor decoded');
  }
  protoOf(AbstractPart).get_wasEncodedCached_bu4btc_k$ = function () {
    return this.wasEncodedCached_1;
  };
  protoOf(AbstractPart).get_wasDecodedCached_q73wdk_k$ = function () {
    return this.wasDecodedCached_1;
  };
  protoOf(AbstractPart).get_decoded_qrvnm5_k$ = function () {
    return _get_internalDecoded__fpdua0(this);
  };
  protoOf(AbstractPart).get_encoded_pbfil7_k$ = function () {
    return _get_internalEncoded__35l2u8(this);
  };
  function internalDecoded$factory() {
    return getPropertyCallableRef('internalDecoded', 1, KProperty1, function (receiver) {
      return _get_internalDecoded__fpdua0(receiver);
    }, null);
  }
  function internalEncoded$factory() {
    return getPropertyCallableRef('internalEncoded', 1, KProperty1, function (receiver) {
      return _get_internalEncoded__35l2u8(receiver);
    }, null);
  }
  function EmptyPart(value) {
    Part.call(this, value, value);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value == null ? true : charSequenceLength(value) === 0)) {
      // Inline function 'com.eygraber.uri.parts.EmptyPart.<anonymous>' call
      var message = 'Expected empty value, got: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.isEmpty_1 = true;
  }
  protoOf(EmptyPart).get_isEmpty_zauvru_k$ = function () {
    return this.isEmpty_1;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.NULL_1 = new EmptyPart(null);
    this.EMPTY_1 = new EmptyPart('');
  }
  protoOf(Companion_2).get_NULL_wo69cg_k$ = function () {
    return this.NULL_1;
  };
  protoOf(Companion_2).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_2).nonNull_w7taw_k$ = function (part) {
    return part == null ? this.NULL_1 : part;
  };
  protoOf(Companion_2).fromEncoded_ff1vul_k$ = function (encoded) {
    return this.from_3x5ihw_k$(encoded, NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
  };
  protoOf(Companion_2).fromDecoded_62wt5x_k$ = function (decoded) {
    return this.from_3x5ihw_k$(NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$(), decoded);
  };
  protoOf(Companion_2).from_3x5ihw_k$ = function (encoded, decoded) {
    var tmp;
    if (encoded == null) {
      tmp = this.NULL_1;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(encoded) === 0) {
        tmp = this.EMPTY_1;
      } else {
        if (decoded == null) {
          tmp = this.NULL_1;
        } else {
          // Inline function 'kotlin.text.isEmpty' call
          if (charSequenceLength(decoded) === 0) {
            tmp = this.EMPTY_1;
          } else {
            tmp = new Part(encoded, decoded);
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Part(encoded, decoded) {
    Companion_getInstance_3();
    AbstractPart.call(this, encoded, decoded);
  }
  protoOf(Part).get_isEmpty_zauvru_k$ = function () {
    return false;
  };
  protoOf(Part).encode_dof6gh_k$ = function (decoded) {
    return UriCodec_getInstance().encodeOrNull_xndmfb_k$(decoded);
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.NULL_1 = new PathPart(null, null);
    this.EMPTY_1 = new PathPart('', '');
  }
  protoOf(Companion_3).get_NULL_wo69cg_k$ = function () {
    return this.NULL_1;
  };
  protoOf(Companion_3).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion_3).appendEncodedSegment_x651pe_k$ = function (oldPart, newSegment) {
    if (oldPart == null) {
      return this.fromEncoded_ff1vul_k$('/' + newSegment);
    }
    var oldPath = oldPart.get_encoded_pbfil7_k$();
    if (oldPath == null) {
      oldPath = '';
    }
    var oldPathLength = oldPath.length;
    var newPath = oldPathLength === 0 ? '/' + newSegment : charSequenceGet(oldPath, oldPathLength - 1 | 0) === _Char___init__impl__6a9atx(47) ? oldPath + newSegment : '' + oldPath + '/' + newSegment;
    return this.fromEncoded_ff1vul_k$(newPath);
  };
  protoOf(Companion_3).appendDecodedSegment_nfeb0m_k$ = function (oldPart, decoded) {
    var encoded = UriCodec_getInstance().encode_8t0lno_k$(decoded);
    return this.appendEncodedSegment_x651pe_k$(oldPart, encoded);
  };
  protoOf(Companion_3).fromEncoded_ff1vul_k$ = function (encoded) {
    return this.from_3x5ihw_k$(encoded, NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$());
  };
  protoOf(Companion_3).fromDecoded_62wt5x_k$ = function (decoded) {
    return this.from_3x5ihw_k$(NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$(), decoded);
  };
  protoOf(Companion_3).from_3x5ihw_k$ = function (encoded, decoded) {
    if (encoded == null) {
      return this.NULL_1;
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(encoded) === 0) {
      tmp = this.EMPTY_1;
    } else {
      tmp = new PathPart(encoded, decoded);
    }
    return tmp;
  };
  protoOf(Companion_3).makeAbsolute_8t946d_k$ = function (oldPart) {
    var oldPath = oldPart.get_wasEncodedCached_bu4btc_k$() ? oldPart.get_encoded_pbfil7_k$() : oldPart.get_decoded_qrvnm5_k$();
    var tmp;
    var tmp_0;
    if (oldPath == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(oldPath) === 0;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = startsWith(oldPath, '/');
    }
    if (tmp) {
      return oldPart;
    }
    var newEncoded = oldPart.get_wasEncodedCached_bu4btc_k$() ? '/' + oldPart.get_encoded_pbfil7_k$() : NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$();
    var newDecoded = oldPart.get_wasDecodedCached_q73wdk_k$() ? '/' + oldPart.get_decoded_qrvnm5_k$() : NotCachedHolder_getInstance().get_NotCached_fzv8j8_k$();
    return new PathPart(newEncoded, newDecoded);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PathPart$pathSegments$delegate$lambda($encoded) {
    return function () {
      var tmp0_elvis_lhs = $encoded;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance_0().get_EMPTY_i8q41w_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var path = tmp;
      var segmentBuilder = new PathSegmentsBuilder();
      var previous = 0;
      var current;
      $l$loop: while (true) {
        // Inline function 'kotlin.also' call
        var this_0 = indexOf(path, _Char___init__impl__6a9atx(47), previous);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.eygraber.uri.parts.PathPart.pathSegments$delegate.<anonymous>.<anonymous>' call
        current = this_0;
        if (!(this_0 > -1)) {
          break $l$loop;
        }
        if (previous < current) {
          var tmp_0 = UriCodec_getInstance();
          // Inline function 'kotlin.text.substring' call
          var startIndex = previous;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$2 = path.substring(startIndex, current);
          segmentBuilder.add_udnk2x_k$(tmp_0.decode$default_2mvj1l_k$(tmp$ret$2));
        }
        previous = current + 1 | 0;
      }
      var tmp_1;
      if (previous < path.length) {
        var tmp_2 = UriCodec_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = previous;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$4 = path.substring(startIndex_0);
        segmentBuilder.add_udnk2x_k$(tmp_2.decode$default_2mvj1l_k$(tmp$ret$4));
        tmp_1 = Unit_getInstance();
      }
      return segmentBuilder.build_1k0s4u_k$();
    };
  }
  function PathPart(encoded, decoded) {
    Companion_getInstance_4();
    AbstractPart.call(this, encoded, decoded);
    var tmp = this;
    tmp.pathSegments$delegate_1 = lazy(PathPart$pathSegments$delegate$lambda(encoded));
  }
  protoOf(PathPart).encode_dof6gh_k$ = function (decoded) {
    return UriCodec_getInstance().encodeOrNull_ekk302_k$(decoded, '/');
  };
  protoOf(PathPart).get_pathSegments_2e2s6m_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.pathSegments$delegate_1;
    pathSegments$factory();
    return this_0.get_value_j01efc_k$();
  };
  function pathSegments$factory() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function _get__userInfo__u1z7bt($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this._userInfo$delegate_1;
    _userInfo$factory();
    return this_0.get_value_j01efc_k$();
  }
  function findPortSeparator($this, authority) {
    var inductionVariable = authority.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(authority, i);
        var character = Char__toInt_impl_vasixd(this_0);
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(58);
        if (Char__toInt_impl_vasixd(this_1) === character)
          return i;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(48);
        if (character < Char__toInt_impl_vasixd(this_2)) {
          tmp = true;
        } else {
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(57);
          tmp = character > Char__toInt_impl_vasixd(this_3);
        }
        if (tmp)
          return get_NOT_FOUND();
      }
       while (0 <= inductionVariable);
    return get_NOT_FOUND();
  }
  function AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this$0) {
    return function () {
      var segments = this$0.get_pathSegments_2e2s6m_k$();
      return segments.isEmpty_y1axqb_k$() ? null : last(segments);
    };
  }
  function AbstractHierarchicalUri$_userInfo$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance_3().fromEncoded_ff1vul_k$(null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var end = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var tmp_0 = Companion_getInstance_3();
      var tmp_1;
      if (end === get_NOT_FOUND()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = authority.substring(0, end);
      }
      return tmp_0.fromEncoded_ff1vul_k$(tmp_1);
    };
  }
  function AbstractHierarchicalUri$userInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).get_encoded_pbfil7_k$();
    };
  }
  function AbstractHierarchicalUri$host$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var userInfoSeparator = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === get_NOT_FOUND()) {
        // Inline function 'kotlin.text.substring' call
        var startIndex = userInfoSeparator + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = authority.substring(startIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = userInfoSeparator + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = authority.substring(startIndex_0, portSeparator);
      }
      var encodedHost = tmp_0;
      return UriCodec_getInstance().decode$default_2mvj1l_k$(encodedHost);
    };
  }
  function AbstractHierarchicalUri$port$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.get_encodedAuthority_lr69gi_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return -1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === get_NOT_FOUND()) {
        return -1;
      }
      var tmp_1 = UriCodec_getInstance();
      // Inline function 'kotlin.text.substring' call
      var startIndex = portSeparator + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = authority.substring(startIndex);
      var portString = tmp_1.decode$default_2mvj1l_k$(tmp$ret$1);
      var tmp_2;
      try {
        tmp_2 = toInt(portString);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof NumberFormatException) {
          var e = $p;
          tmp_3 = -1;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      return tmp_2;
    };
  }
  function AbstractHierarchicalUri() {
    var tmp = this;
    tmp.lastPathSegment$delegate_1 = lazy(AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0._userInfo$delegate_1 = lazy(AbstractHierarchicalUri$_userInfo$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.userInfo$delegate_1 = lazy(AbstractHierarchicalUri$userInfo$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.encodedUserInfo$delegate_1 = lazy(AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.host$delegate_1 = lazy(AbstractHierarchicalUri$host$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.port$delegate_1 = lazy(AbstractHierarchicalUri$port$delegate$lambda(this));
  }
  protoOf(AbstractHierarchicalUri).get_lastPathSegment_846wf_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lastPathSegment$delegate_1;
    lastPathSegment$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractHierarchicalUri).get_userInfo_ytbsgy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.userInfo$delegate_1;
    userInfo$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractHierarchicalUri).get_encodedUserInfo_39hxzy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedUserInfo$delegate_1;
    encodedUserInfo$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractHierarchicalUri).get_host_wonf8x_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.host$delegate_1;
    host$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractHierarchicalUri).get_port_wosj4a_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.port$delegate_1;
    port$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractHierarchicalUri).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_6v2wo5_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function lastPathSegment$factory() {
    return getPropertyCallableRef('lastPathSegment', 1, KProperty1, function (receiver) {
      return receiver.get_lastPathSegment_846wf_k$();
    }, null);
  }
  function _userInfo$factory() {
    return getPropertyCallableRef('_userInfo', 1, KProperty1, function (receiver) {
      return _get__userInfo__u1z7bt(receiver);
    }, null);
  }
  function userInfo$factory() {
    return getPropertyCallableRef('userInfo', 1, KProperty1, function (receiver) {
      return receiver.get_userInfo_ytbsgy_k$();
    }, null);
  }
  function encodedUserInfo$factory() {
    return getPropertyCallableRef('encodedUserInfo', 1, KProperty1, function (receiver) {
      return receiver.get_encodedUserInfo_39hxzy_k$();
    }, null);
  }
  function host$factory() {
    return getPropertyCallableRef('host', 1, KProperty1, function (receiver) {
      return receiver.get_host_wonf8x_k$();
    }, null);
  }
  function port$factory() {
    return getPropertyCallableRef('port', 1, KProperty1, function (receiver) {
      return receiver.get_port_wosj4a_k$();
    }, null);
  }
  function _get_authorityPart__2eumyj($this) {
    return $this.authorityPart_1;
  }
  function _get_pathPart__i0uz2r($this) {
    return $this.pathPart_1;
  }
  function _get_queryPart__onb3u2($this) {
    return $this.queryPart_1;
  }
  function _get_fragmentPart__iqsq0o($this) {
    return $this.fragmentPart_1;
  }
  function _get_ssp__e6gvb5($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ssp$delegate_1;
    ssp$factory();
    return this_0.get_value_j01efc_k$();
  }
  function makeSchemeSpecificPart($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.eygraber.uri.uris.HierarchicalUri.makeSchemeSpecificPart.<anonymous>' call
    appendSspTo(this_0, $this);
    return this_0.toString();
  }
  function appendSspTo(_this__u8e3s4, $this) {
    var encodedAuthority = $this.authorityPart_1.get_encoded_pbfil7_k$();
    if (!(encodedAuthority == null)) {
      _this__u8e3s4.append_22ad7x_k$('//').append_22ad7x_k$(encodedAuthority);
    }
    var encodedPath = $this.pathPart_1.get_encoded_pbfil7_k$();
    if (!(encodedPath == null)) {
      _this__u8e3s4.append_22ad7x_k$(encodedPath);
    }
    if (!$this.queryPart_1.get_isEmpty_zauvru_k$()) {
      _this__u8e3s4.append_am5a4z_k$(_Char___init__impl__6a9atx(63)).append_22ad7x_k$($this.queryPart_1.get_encoded_pbfil7_k$());
    }
  }
  function _get_uriString__5epoks($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.uriString$delegate_1;
    uriString$factory();
    return this_0.get_value_j01efc_k$();
  }
  function HierarchicalUri$ssp$delegate$lambda(this$0) {
    return function () {
      return Companion_getInstance_3().fromEncoded_ff1vul_k$(makeSchemeSpecificPart(this$0));
    };
  }
  function HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$authority$delegate$lambda(this$0) {
    return function () {
      return this$0.authorityPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return this$0.authorityPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$path$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$query$delegate$lambda(this$0) {
    return function () {
      return this$0.queryPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return this$0.queryPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function HierarchicalUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_encoded_pbfil7_k$();
    };
  }
  function HierarchicalUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return this$0.pathPart_1.get_pathSegments_2e2s6m_k$();
    };
  }
  function HierarchicalUri$uriString$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.eygraber.uri.uris.HierarchicalUri.uriString$delegate.<anonymous>.<anonymous>' call
      if (!(this$0.scheme_1 == null)) {
        this_0.append_22ad7x_k$(this$0.scheme_1).append_am5a4z_k$(_Char___init__impl__6a9atx(58));
      }
      appendSspTo(this_0, this$0);
      if (!this$0.fragmentPart_1.get_isEmpty_zauvru_k$()) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35)).append_22ad7x_k$(this$0.get_encodedFragment_jm6jcb_k$());
      }
      return this_0.toString();
    };
  }
  function HierarchicalUri(scheme, _authorityPart, _pathPart, _queryPart, _fragmentPart) {
    AbstractHierarchicalUri.call(this);
    this.scheme_1 = scheme;
    this.authorityPart_1 = Companion_getInstance_3().nonNull_w7taw_k$(_authorityPart);
    var tmp = this;
    tmp.pathPart_1 = _pathPart == null ? Companion_getInstance_4().get_NULL_wo69cg_k$() : _pathPart;
    this.queryPart_1 = Companion_getInstance_3().nonNull_w7taw_k$(_queryPart);
    this.fragmentPart_1 = Companion_getInstance_3().nonNull_w7taw_k$(_fragmentPart);
    this.isHierarchical_1 = true;
    this.isRelative_1 = this.scheme_1 == null;
    var tmp_0 = this;
    tmp_0.ssp$delegate_1 = lazy(HierarchicalUri$ssp$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.encodedSchemeSpecificPart$delegate_1 = lazy(HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.schemeSpecificPart$delegate_1 = lazy(HierarchicalUri$schemeSpecificPart$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.authority$delegate_1 = lazy(HierarchicalUri$authority$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.encodedAuthority$delegate_1 = lazy(HierarchicalUri$encodedAuthority$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.encodedPath$delegate_1 = lazy(HierarchicalUri$encodedPath$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.path$delegate_1 = lazy(HierarchicalUri$path$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.query$delegate_1 = lazy(HierarchicalUri$query$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.encodedQuery$delegate_1 = lazy(HierarchicalUri$encodedQuery$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.fragment$delegate_1 = lazy(HierarchicalUri$fragment$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.encodedFragment$delegate_1 = lazy(HierarchicalUri$encodedFragment$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.pathSegments$delegate_1 = lazy(HierarchicalUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.uriString$delegate_1 = lazy(HierarchicalUri$uriString$delegate$lambda(this));
  }
  protoOf(HierarchicalUri).get_scheme_je6tv2_k$ = function () {
    return this.scheme_1;
  };
  protoOf(HierarchicalUri).get_isHierarchical_yyaz18_k$ = function () {
    return this.isHierarchical_1;
  };
  protoOf(HierarchicalUri).get_isRelative_skgyhr_k$ = function () {
    return this.isRelative_1;
  };
  protoOf(HierarchicalUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedSchemeSpecificPart$delegate_1;
    encodedSchemeSpecificPart$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_schemeSpecificPart_vjrot_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.schemeSpecificPart$delegate_1;
    schemeSpecificPart$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_authority_wx29i2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.authority$delegate_1;
    authority$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_encodedAuthority_lr69gi_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedAuthority$delegate_1;
    encodedAuthority$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_encodedPath_p9zwnq_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedPath$delegate_1;
    encodedPath$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_path_wos8ry_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.path$delegate_1;
    path$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_query_ixn1y7_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.query$delegate_1;
    query$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_encodedQuery_28s95p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedQuery$delegate_1;
    encodedQuery$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_fragment_bxnb4p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fragment$delegate_1;
    fragment$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_encodedFragment_jm6jcb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedFragment$delegate_1;
    encodedFragment$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).get_pathSegments_2e2s6m_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.pathSegments$delegate_1;
    pathSegments$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(HierarchicalUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HierarchicalUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(HierarchicalUri).toString = function () {
    return _get_uriString__5epoks(this);
  };
  protoOf(HierarchicalUri).buildUpon_n637i0_k$ = function () {
    return (new Builder_0()).scheme_qd0ske_k$(this.scheme_1).authority_6vg77r_k$(this.authorityPart_1).path_ee9pgy_k$(this.pathPart_1).query_lekub0_k$(this.queryPart_1).fragment_bvxkhg_k$(this.fragmentPart_1);
  };
  protoOf(HierarchicalUri).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_6v2wo5_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function ssp$factory() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5(receiver);
    }, null);
  }
  function encodedSchemeSpecificPart$factory() {
    return getPropertyCallableRef('encodedSchemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_encodedSchemeSpecificPart_us2mxb_k$();
    }, null);
  }
  function schemeSpecificPart$factory() {
    return getPropertyCallableRef('schemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_schemeSpecificPart_vjrot_k$();
    }, null);
  }
  function authority$factory() {
    return getPropertyCallableRef('authority', 1, KProperty1, function (receiver) {
      return receiver.get_authority_wx29i2_k$();
    }, null);
  }
  function encodedAuthority$factory() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.get_encodedAuthority_lr69gi_k$();
    }, null);
  }
  function encodedPath$factory() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.get_encodedPath_p9zwnq_k$();
    }, null);
  }
  function path$factory() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.get_path_wos8ry_k$();
    }, null);
  }
  function query$factory() {
    return getPropertyCallableRef('query', 1, KProperty1, function (receiver) {
      return receiver.get_query_ixn1y7_k$();
    }, null);
  }
  function encodedQuery$factory() {
    return getPropertyCallableRef('encodedQuery', 1, KProperty1, function (receiver) {
      return receiver.get_encodedQuery_28s95p_k$();
    }, null);
  }
  function fragment$factory() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  function pathSegments$factory_0() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function uriString$factory() {
    return getPropertyCallableRef('uriString', 1, KProperty1, function (receiver) {
      return _get_uriString__5epoks(receiver);
    }, null);
  }
  function _get_ssp__e6gvb5_0($this) {
    return $this.ssp_1;
  }
  function _get_fragmentPart__iqsq0o_0($this) {
    return $this.fragmentPart_1;
  }
  function _get_cachedString__4i410o($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.cachedString$delegate_1;
    cachedString$factory();
    return this_0.get_value_j01efc_k$();
  }
  function OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.ssp_1.get_encoded_pbfil7_k$();
    };
  }
  function OpaqueUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.ssp_1.get_decoded_qrvnm5_k$();
    };
  }
  function OpaqueUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_decoded_qrvnm5_k$();
    };
  }
  function OpaqueUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.fragmentPart_1.get_encoded_pbfil7_k$();
    };
  }
  function OpaqueUri$cachedString$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.eygraber.uri.uris.OpaqueUri.cachedString$delegate.<anonymous>.<anonymous>' call
      this_0.append_22ad7x_k$(this$0.scheme_1).append_am5a4z_k$(_Char___init__impl__6a9atx(58));
      this_0.append_22ad7x_k$(this$0.get_encodedSchemeSpecificPart_us2mxb_k$());
      if (!this$0.fragmentPart_1.get_isEmpty_zauvru_k$()) {
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35)).append_22ad7x_k$(this$0.get_encodedFragment_jm6jcb_k$());
      }
      return this_0.toString();
    };
  }
  function OpaqueUri(scheme, ssp, _fragmentPart) {
    this.scheme_1 = scheme;
    this.ssp_1 = ssp;
    var tmp = this;
    tmp.fragmentPart_1 = _fragmentPart == null ? Companion_getInstance_3().get_NULL_wo69cg_k$() : _fragmentPart;
    this.isHierarchical_1 = false;
    this.isRelative_1 = this.scheme_1 == null;
    var tmp_0 = this;
    tmp_0.encodedSchemeSpecificPart$delegate_1 = lazy(OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.schemeSpecificPart$delegate_1 = lazy(OpaqueUri$schemeSpecificPart$delegate$lambda(this));
    this.authority_1 = null;
    this.encodedAuthority_1 = null;
    this.path_1 = null;
    this.encodedPath_1 = null;
    this.query_1 = null;
    this.encodedQuery_1 = null;
    var tmp_2 = this;
    tmp_2.fragment$delegate_1 = lazy(OpaqueUri$fragment$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.encodedFragment$delegate_1 = lazy(OpaqueUri$encodedFragment$delegate$lambda(this));
    this.pathSegments_1 = emptyList();
    this.lastPathSegment_1 = null;
    this.userInfo_1 = null;
    this.encodedUserInfo_1 = null;
    this.host_1 = null;
    this.port_1 = -1;
    var tmp_4 = this;
    tmp_4.cachedString$delegate_1 = lazy(OpaqueUri$cachedString$delegate$lambda(this));
  }
  protoOf(OpaqueUri).get_scheme_je6tv2_k$ = function () {
    return this.scheme_1;
  };
  protoOf(OpaqueUri).get_isHierarchical_yyaz18_k$ = function () {
    return this.isHierarchical_1;
  };
  protoOf(OpaqueUri).get_isRelative_skgyhr_k$ = function () {
    return this.isRelative_1;
  };
  protoOf(OpaqueUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedSchemeSpecificPart$delegate_1;
    encodedSchemeSpecificPart$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(OpaqueUri).get_schemeSpecificPart_vjrot_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.schemeSpecificPart$delegate_1;
    schemeSpecificPart$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(OpaqueUri).get_authority_wx29i2_k$ = function () {
    return this.authority_1;
  };
  protoOf(OpaqueUri).get_encodedAuthority_lr69gi_k$ = function () {
    return this.encodedAuthority_1;
  };
  protoOf(OpaqueUri).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(OpaqueUri).get_encodedPath_p9zwnq_k$ = function () {
    return this.encodedPath_1;
  };
  protoOf(OpaqueUri).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(OpaqueUri).get_encodedQuery_28s95p_k$ = function () {
    return this.encodedQuery_1;
  };
  protoOf(OpaqueUri).get_fragment_bxnb4p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fragment$delegate_1;
    fragment$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(OpaqueUri).get_encodedFragment_jm6jcb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedFragment$delegate_1;
    encodedFragment$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(OpaqueUri).get_pathSegments_2e2s6m_k$ = function () {
    return this.pathSegments_1;
  };
  protoOf(OpaqueUri).get_lastPathSegment_846wf_k$ = function () {
    return this.lastPathSegment_1;
  };
  protoOf(OpaqueUri).get_userInfo_ytbsgy_k$ = function () {
    return this.userInfo_1;
  };
  protoOf(OpaqueUri).get_encodedUserInfo_39hxzy_k$ = function () {
    return this.encodedUserInfo_1;
  };
  protoOf(OpaqueUri).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(OpaqueUri).get_port_wosj4a_k$ = function () {
    return this.port_1;
  };
  protoOf(OpaqueUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OpaqueUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(OpaqueUri).toString = function () {
    return _get_cachedString__4i410o(this);
  };
  protoOf(OpaqueUri).buildUpon_n637i0_k$ = function () {
    return (new Builder_0()).scheme_qd0ske_k$(this.scheme_1).opaquePart_q5z6so_k$(this.ssp_1).fragment_bvxkhg_k$(this.fragmentPart_1);
  };
  protoOf(OpaqueUri).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_6v2wo5_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function encodedSchemeSpecificPart$factory_0() {
    return getPropertyCallableRef('encodedSchemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_encodedSchemeSpecificPart_us2mxb_k$();
    }, null);
  }
  function schemeSpecificPart$factory_0() {
    return getPropertyCallableRef('schemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.get_schemeSpecificPart_vjrot_k$();
    }, null);
  }
  function fragment$factory_0() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory_0() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  function cachedString$factory() {
    return getPropertyCallableRef('cachedString', 1, KProperty1, function (receiver) {
      return _get_cachedString__4i410o(receiver);
    }, null);
  }
  function _get_uriString__5epoks_0($this) {
    return $this.uriString_1;
  }
  function _get_cachedSsi__l34qja($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.cachedSsi$delegate_1;
    cachedSsi$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_cachedFsi__l3d1d5($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.cachedFsi$delegate_1;
    cachedFsi$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_ssp__e6gvb5_1($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ssp$delegate_1;
    ssp$factory_0();
    return this_0.get_value_j01efc_k$();
  }
  function _get_authorityPart__2eumyj_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.authorityPart$delegate_1;
    authorityPart$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_pathPart__i0uz2r_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.pathPart$delegate_1;
    pathPart$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_queryPart__onb3u2_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.queryPart$delegate_1;
    queryPart$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_fragmentPart__iqsq0o_1($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.fragmentPart$delegate_1;
    fragmentPart$factory();
    return this_0.get_value_j01efc_k$();
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).parseAuthority_ng20ku_k$ = function (uriString, ssi) {
    var length = uriString.length;
    var tmp;
    if ((length > (ssi + 2 | 0) ? charSequenceGet(uriString, ssi + 1 | 0) === _Char___init__impl__6a9atx(47) : false) ? charSequenceGet(uriString, ssi + 2 | 0) === _Char___init__impl__6a9atx(47) : false) {
      var end = ssi + 3 | 0;
      $l$loop_0: while (end < length) {
        var c = charSequenceGet(uriString, end);
        if (c === _Char___init__impl__6a9atx(47) ? true : c === _Char___init__impl__6a9atx(92))
          break $l$loop_0;
        if (c === _Char___init__impl__6a9atx(63) ? true : c === _Char___init__impl__6a9atx(35))
          break $l$loop_0;
        end = end + 1 | 0;
      }
      // Inline function 'kotlin.text.substring' call
      var startIndex = ssi + 3 | 0;
      var endIndex = end;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = uriString.substring(startIndex, endIndex);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Companion_4).parsePath_9kgyju_k$ = function (uriString, ssi) {
    var length = uriString.length;
    var pathStart;
    if ((length > (ssi + 2 | 0) ? charSequenceGet(uriString, ssi + 1 | 0) === _Char___init__impl__6a9atx(47) : false) ? charSequenceGet(uriString, ssi + 2 | 0) === _Char___init__impl__6a9atx(47) : false) {
      pathStart = ssi + 3 | 0;
      $l$loop: while (pathStart < length) {
        var c = charSequenceGet(uriString, pathStart);
        if (c === _Char___init__impl__6a9atx(63) ? true : c === _Char___init__impl__6a9atx(35))
          return '';
        if (c === _Char___init__impl__6a9atx(47) ? true : c === _Char___init__impl__6a9atx(92))
          break $l$loop;
        pathStart = pathStart + 1 | 0;
      }
    } else {
      pathStart = ssi + 1 | 0;
    }
    var pathEnd = pathStart;
    $l$loop_0: while (pathEnd < length) {
      var c_0 = charSequenceGet(uriString, pathEnd);
      if (c_0 === _Char___init__impl__6a9atx(63) ? true : c_0 === _Char___init__impl__6a9atx(35))
        break $l$loop_0;
      pathEnd = pathEnd + 1 | 0;
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex = pathStart;
    var endIndex = pathEnd;
    // Inline function 'kotlin.js.asDynamic' call
    return uriString.substring(startIndex, endIndex);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function StringUri$cachedSsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(58));
    };
  }
  function StringUri$cachedFsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(35), _get_cachedSsi__l34qja(this$0));
    };
  }
  function StringUri$isHierarchical$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === get_NOT_FOUND()) {
        tmp = true;
      } else {
        tmp = this$0.uriString_1.length === (ssi + 1 | 0) ? false : charSequenceGet(this$0.uriString_1, ssi + 1 | 0) === _Char___init__impl__6a9atx(47);
      }
      return tmp;
    };
  }
  function StringUri$isRelative$delegate$lambda(this$0) {
    return function () {
      return _get_cachedSsi__l34qja(this$0) === get_NOT_FOUND();
    };
  }
  function StringUri$scheme$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === get_NOT_FOUND()) {
        tmp = null;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = this$0.uriString_1.substring(0, ssi);
      }
      return tmp;
    };
  }
  function StringUri$ssp$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_3();
      var tmp_0;
      if (fsi === get_NOT_FOUND()) {
        // Inline function 'kotlin.text.substring' call
        var this_0 = this$0.uriString_1;
        var startIndex = ssi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = this_0.substring(startIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        var this_1 = this$0.uriString_1;
        var startIndex_0 = ssi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = this_1.substring(startIndex_0, fsi);
      }
      return tmp.fromEncoded_ff1vul_k$(tmp_0);
    };
  }
  function StringUri$authorityPart$delegate$lambda(this$0) {
    return function () {
      var encodedAuthority = Companion_getInstance_5().parseAuthority_ng20ku_k$(this$0.uriString_1, _get_cachedSsi__l34qja(this$0));
      return Companion_getInstance_3().fromEncoded_ff1vul_k$(encodedAuthority);
    };
  }
  function StringUri$authority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$pathPart$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi > -1) {
        var schemeOnly = (ssi + 1 | 0) === this$0.uriString_1.length;
        tmp = schemeOnly ? null : !(charSequenceGet(this$0.uriString_1, ssi + 1 | 0) === _Char___init__impl__6a9atx(47)) ? null : Companion_getInstance_5().parsePath_9kgyju_k$(this$0.uriString_1, ssi);
      } else {
        tmp = Companion_getInstance_5().parsePath_9kgyju_k$(this$0.uriString_1, ssi);
      }
      var encoded = tmp;
      return Companion_getInstance_4().fromEncoded_ff1vul_k$(encoded);
    };
  }
  function StringUri$path$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r_0(this$0).get_pathSegments_2e2s6m_k$();
    };
  }
  function StringUri$queryPart$delegate$lambda(this$0) {
    return function () {
      var qsi = indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(63), _get_cachedSsi__l34qja(this$0));
      var tmp;
      if (qsi === get_NOT_FOUND()) {
        tmp = null;
      } else {
        var fsi = _get_cachedFsi__l3d1d5(this$0);
        var tmp_0;
        if (fsi === get_NOT_FOUND()) {
          // Inline function 'kotlin.text.substring' call
          var this_0 = this$0.uriString_1;
          var startIndex = qsi + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = this_0.substring(startIndex);
        } else if (fsi < qsi) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.text.substring' call
          var this_1 = this$0.uriString_1;
          var startIndex_0 = qsi + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = this_1.substring(startIndex_0, fsi);
        }
        tmp = tmp_0;
      }
      var encoded = tmp;
      return Companion_getInstance_3().fromEncoded_ff1vul_k$(encoded);
    };
  }
  function StringUri$query$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2_0(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2_0(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri$fragmentPart$delegate$lambda(this$0) {
    return function () {
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_3();
      var tmp_0;
      if (fsi === get_NOT_FOUND()) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.text.substring' call
        var this_0 = this$0.uriString_1;
        var startIndex = fsi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = this_0.substring(startIndex);
      }
      return tmp.fromEncoded_ff1vul_k$(tmp_0);
    };
  }
  function StringUri$fragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o_1(this$0).get_decoded_qrvnm5_k$();
    };
  }
  function StringUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o_1(this$0).get_encoded_pbfil7_k$();
    };
  }
  function StringUri(uriString) {
    Companion_getInstance_5();
    AbstractHierarchicalUri.call(this);
    this.uriString_1 = uriString;
    var tmp = this;
    tmp.cachedSsi$delegate_1 = lazy(StringUri$cachedSsi$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.cachedFsi$delegate_1 = lazy(StringUri$cachedFsi$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.isHierarchical$delegate_1 = lazy(StringUri$isHierarchical$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.isRelative$delegate_1 = lazy(StringUri$isRelative$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.scheme$delegate_1 = lazy(StringUri$scheme$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.ssp$delegate_1 = lazy(StringUri$ssp$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.authorityPart$delegate_1 = lazy(StringUri$authorityPart$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.authority$delegate_1 = lazy(StringUri$authority$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.encodedAuthority$delegate_1 = lazy(StringUri$encodedAuthority$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.pathPart$delegate_1 = lazy(StringUri$pathPart$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.path$delegate_1 = lazy(StringUri$path$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.encodedPath$delegate_1 = lazy(StringUri$encodedPath$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.pathSegments$delegate_1 = lazy(StringUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.queryPart$delegate_1 = lazy(StringUri$queryPart$delegate$lambda(this));
    var tmp_13 = this;
    tmp_13.query$delegate_1 = lazy(StringUri$query$delegate$lambda(this));
    var tmp_14 = this;
    tmp_14.encodedQuery$delegate_1 = lazy(StringUri$encodedQuery$delegate$lambda(this));
    var tmp_15 = this;
    tmp_15.fragmentPart$delegate_1 = lazy(StringUri$fragmentPart$delegate$lambda(this));
    var tmp_16 = this;
    tmp_16.fragment$delegate_1 = lazy(StringUri$fragment$delegate$lambda(this));
    var tmp_17 = this;
    tmp_17.encodedFragment$delegate_1 = lazy(StringUri$encodedFragment$delegate$lambda(this));
  }
  protoOf(StringUri).get_isHierarchical_yyaz18_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.isHierarchical$delegate_1;
    isHierarchical$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_isRelative_skgyhr_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.isRelative$delegate_1;
    isRelative$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_scheme_je6tv2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.scheme$delegate_1;
    scheme$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_encodedSchemeSpecificPart_us2mxb_k$ = function () {
    return _get_ssp__e6gvb5_1(this).get_encoded_pbfil7_k$();
  };
  protoOf(StringUri).get_schemeSpecificPart_vjrot_k$ = function () {
    return _get_ssp__e6gvb5_1(this).get_decoded_qrvnm5_k$();
  };
  protoOf(StringUri).get_authority_wx29i2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.authority$delegate_1;
    authority$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_encodedAuthority_lr69gi_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedAuthority$delegate_1;
    encodedAuthority$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_path_wos8ry_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.path$delegate_1;
    path$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_encodedPath_p9zwnq_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedPath$delegate_1;
    encodedPath$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_pathSegments_2e2s6m_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.pathSegments$delegate_1;
    pathSegments$factory_1();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_query_ixn1y7_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.query$delegate_1;
    query$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_encodedQuery_28s95p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedQuery$delegate_1;
    encodedQuery$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_fragment_bxnb4p_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fragment$delegate_1;
    fragment$factory_1();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).get_encodedFragment_jm6jcb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.encodedFragment$delegate_1;
    encodedFragment$factory_1();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(StringUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(StringUri).toString = function () {
    return this.uriString_1;
  };
  protoOf(StringUri).buildUpon_n637i0_k$ = function () {
    var tmp;
    if (this.get_isHierarchical_yyaz18_k$()) {
      tmp = (new Builder_0()).scheme_qd0ske_k$(this.get_scheme_je6tv2_k$()).authority_6vg77r_k$(_get_authorityPart__2eumyj_0(this)).path_ee9pgy_k$(_get_pathPart__i0uz2r_0(this)).query_lekub0_k$(_get_queryPart__onb3u2_0(this)).fragment_bvxkhg_k$(_get_fragmentPart__iqsq0o_1(this));
    } else {
      tmp = (new Builder_0()).scheme_qd0ske_k$(this.get_scheme_je6tv2_k$()).opaquePart_q5z6so_k$(_get_ssp__e6gvb5_1(this)).fragment_bvxkhg_k$(_get_fragmentPart__iqsq0o_1(this));
    }
    return tmp;
  };
  protoOf(StringUri).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_6v2wo5_k$((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function cachedSsi$factory() {
    return getPropertyCallableRef('cachedSsi', 1, KProperty1, function (receiver) {
      return _get_cachedSsi__l34qja(receiver);
    }, null);
  }
  function cachedFsi$factory() {
    return getPropertyCallableRef('cachedFsi', 1, KProperty1, function (receiver) {
      return _get_cachedFsi__l3d1d5(receiver);
    }, null);
  }
  function isHierarchical$factory() {
    return getPropertyCallableRef('isHierarchical', 1, KProperty1, function (receiver) {
      return receiver.get_isHierarchical_yyaz18_k$();
    }, null);
  }
  function isRelative$factory() {
    return getPropertyCallableRef('isRelative', 1, KProperty1, function (receiver) {
      return receiver.get_isRelative_skgyhr_k$();
    }, null);
  }
  function scheme$factory() {
    return getPropertyCallableRef('scheme', 1, KProperty1, function (receiver) {
      return receiver.get_scheme_je6tv2_k$();
    }, null);
  }
  function ssp$factory_0() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5_1(receiver);
    }, null);
  }
  function authorityPart$factory() {
    return getPropertyCallableRef('authorityPart', 1, KProperty1, function (receiver) {
      return _get_authorityPart__2eumyj_0(receiver);
    }, null);
  }
  function authority$factory_0() {
    return getPropertyCallableRef('authority', 1, KProperty1, function (receiver) {
      return receiver.get_authority_wx29i2_k$();
    }, null);
  }
  function encodedAuthority$factory_0() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.get_encodedAuthority_lr69gi_k$();
    }, null);
  }
  function pathPart$factory() {
    return getPropertyCallableRef('pathPart', 1, KProperty1, function (receiver) {
      return _get_pathPart__i0uz2r_0(receiver);
    }, null);
  }
  function path$factory_0() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.get_path_wos8ry_k$();
    }, null);
  }
  function encodedPath$factory_0() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.get_encodedPath_p9zwnq_k$();
    }, null);
  }
  function pathSegments$factory_1() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.get_pathSegments_2e2s6m_k$();
    }, null);
  }
  function queryPart$factory() {
    return getPropertyCallableRef('queryPart', 1, KProperty1, function (receiver) {
      return _get_queryPart__onb3u2_0(receiver);
    }, null);
  }
  function query$factory_0() {
    return getPropertyCallableRef('query', 1, KProperty1, function (receiver) {
      return receiver.get_query_ixn1y7_k$();
    }, null);
  }
  function encodedQuery$factory_0() {
    return getPropertyCallableRef('encodedQuery', 1, KProperty1, function (receiver) {
      return receiver.get_encodedQuery_28s95p_k$();
    }, null);
  }
  function fragmentPart$factory() {
    return getPropertyCallableRef('fragmentPart', 1, KProperty1, function (receiver) {
      return _get_fragmentPart__iqsq0o_1(receiver);
    }, null);
  }
  function fragment$factory_1() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.get_fragment_bxnb4p_k$();
    }, null);
  }
  function encodedFragment$factory_1() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.get_encodedFragment_jm6jcb_k$();
    }, null);
  }
  //region block: post-declaration
  defineProp(protoOf(UriSyntaxException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  protoOf(AbstractHierarchicalUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(AbstractHierarchicalUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(AbstractHierarchicalUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(AbstractHierarchicalUri).getQueryParameters_43opsy_k$ = getQueryParameters;
  protoOf(AbstractHierarchicalUri).getQueryParameter_kwymw3_k$ = getQueryParameter;
  protoOf(AbstractHierarchicalUri).getBooleanQueryParameter_2j1vi_k$ = getBooleanQueryParameter;
  protoOf(AbstractHierarchicalUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(AbstractHierarchicalUri).compareTo_6v2wo5_k$ = compareTo_0;
  protoOf(OpaqueUri).get_isOpaque_xnqi0k_k$ = get_isOpaque;
  protoOf(OpaqueUri).get_isAbsolute_4pnyd2_k$ = get_isAbsolute;
  protoOf(OpaqueUri).getQueryParameterNames_ip5h67_k$ = getQueryParameterNames;
  protoOf(OpaqueUri).getQueryParameters_43opsy_k$ = getQueryParameters;
  protoOf(OpaqueUri).getQueryParameter_kwymw3_k$ = getQueryParameter;
  protoOf(OpaqueUri).getBooleanQueryParameter_2j1vi_k$ = getBooleanQueryParameter;
  protoOf(OpaqueUri).normalizeScheme_jartaq_k$ = normalizeScheme;
  protoOf(OpaqueUri).compareTo_6v2wo5_k$ = compareTo_0;
  //endregion
  //region block: init
  NOT_FOUND = -1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=uri-kmp-uri.js.map
