(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Napier-napier'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Napier-napier'.");
    }
    root['Napier-napier'] = factory(typeof this['Napier-napier'] === 'undefined' ? {} : this['Napier-napier'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.cf;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var THROW_IAE = kotlin_kotlin.$_$.mk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var Enum = kotlin_kotlin.$_$.xj;
  var VOID = kotlin_kotlin.$_$.g;
  var Collection = kotlin_kotlin.$_$.m6;
  var isInterface = kotlin_kotlin.$_$.pe;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var emptyList = kotlin_kotlin.$_$.u8;
  var objectCreate = kotlin_kotlin.$_$.af;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var AbstractList = kotlin_kotlin.$_$.e6;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Antilog, 'Antilog', classMeta);
  setMetadataFor(LogLevel, 'LogLevel', classMeta, Enum);
  setMetadataFor(Napier, 'Napier', objectMeta);
  setMetadataFor(AtomicMutableList, 'AtomicMutableList', classMeta, AbstractList, VOID, AtomicMutableList_init_$Create$);
  setMetadataFor(DebugAntilog, 'DebugAntilog', classMeta, Antilog, VOID, DebugAntilog);
  setMetadataFor(AtomicRef, 'AtomicRef', classMeta);
  //endregion
  function Antilog() {
  }
  protoOf(Antilog).isEnable_3u442w_k$ = function (priority, tag) {
    return true;
  };
  protoOf(Antilog).log_km8io2_k$ = function (priority, tag, throwable, message) {
    if (this.isEnable_3u442w_k$(priority, tag)) {
      this.performLog_gjtjh9_k$(priority, tag, throwable, message);
    }
  };
  protoOf(Antilog).rawLog_cd2rbe_k$ = function (priority, tag, throwable, message) {
    this.performLog_gjtjh9_k$(priority, tag, throwable, message);
  };
  var LogLevel_VERBOSE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARNING_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_ASSERT_instance;
  function values() {
    return [LogLevel_VERBOSE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARNING_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_ASSERT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'VERBOSE':
        return LogLevel_VERBOSE_getInstance();
      case 'DEBUG':
        return LogLevel_DEBUG_getInstance();
      case 'INFO':
        return LogLevel_INFO_getInstance();
      case 'WARNING':
        return LogLevel_WARNING_getInstance();
      case 'ERROR':
        return LogLevel_ERROR_getInstance();
      case 'ASSERT':
        return LogLevel_ASSERT_getInstance();
      default:
        LogLevel_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_VERBOSE_instance = new LogLevel('VERBOSE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARNING_instance = new LogLevel('WARNING', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_ASSERT_instance = new LogLevel('ASSERT', 5);
  }
  var $ENTRIES;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_VERBOSE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_VERBOSE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARNING_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARNING_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_ASSERT_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ASSERT_instance;
  }
  function log(priority, throwable, tag, message) {
    priority = priority === VOID ? LogLevel_DEBUG_getInstance() : priority;
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    Napier_getInstance().log_lmdivf_k$(priority, tag, throwable, message());
  }
  function _get_baseArray__rbpufd($this) {
    return $this.baseArray_1;
  }
  function Napier() {
    Napier_instance = this;
    this.baseArray_1 = AtomicMutableList_init_$Create$();
  }
  protoOf(Napier).base_s0fpe2_k$ = function (antilog) {
    this.baseArray_1.add$default_2w81pm_k$(antilog);
  };
  protoOf(Napier).isEnable_3u442w_k$ = function (priority, tag) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.baseArray_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'io.github.aakira.napier.Napier.isEnable.<anonymous>' call
        if (element.isEnable_3u442w_k$(priority, tag)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(Napier).rawLog_cd2rbe_k$ = function (priority, tag, throwable, message) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.baseArray_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.github.aakira.napier.Napier.rawLog.<anonymous>' call
      element.rawLog_cd2rbe_k$(priority, tag, throwable, message);
    }
  };
  protoOf(Napier).v_2776ud_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_VERBOSE_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).v$default_9ddbot_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.v_2776ud_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.v_2776ud_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).v_q0zci3_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_VERBOSE_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).v$default_i2q2w7_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.v_q0zci3_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.v_q0zci3_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).i_dkbdgy_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_INFO_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).i$default_htnpp6_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.i_dkbdgy_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.i_dkbdgy_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).i_johqim_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_INFO_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).i$default_3m0r7e_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.i_johqim_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.i_johqim_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).d_kb8l1l_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_DEBUG_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).d$default_a5agxr_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.d_kb8l1l_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.d_kb8l1l_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).d_s60id5_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_DEBUG_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).d$default_iccotn_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.d_s60id5_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.d_s60id5_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).w_n6j6xw_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_WARNING_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).w$default_p42du4_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.w_n6j6xw_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.w_n6j6xw_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).w_a4gdqk_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_WARNING_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).w$default_89dk3s_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.w_a4gdqk_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.w_a4gdqk_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).e_o3f1y_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_ERROR_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).e$default_pvzj32_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.e_o3f1y_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e_o3f1y_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).e_c9hjlm_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_ERROR_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).e$default_s5p7m2_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.e_c9hjlm_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.e_c9hjlm_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).wtf_xp8qb6_k$ = function (message, throwable, tag) {
    this.log_lmdivf_k$(LogLevel_ASSERT_getInstance(), tag, throwable, message);
  };
  protoOf(Napier).wtf$default_i7x6hm_k$ = function (message, throwable, tag, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.wtf_xp8qb6_k$(message, throwable, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.wtf_xp8qb6_k$.call(this, message, throwable, tag);
    }
    return tmp;
  };
  protoOf(Napier).wtf_mk2b7i_k$ = function (throwable, tag, message) {
    this.log_lmdivf_k$(LogLevel_ASSERT_getInstance(), tag, throwable, message());
  };
  protoOf(Napier).wtf$default_btgt4q_k$ = function (throwable, tag, message, $super) {
    throwable = throwable === VOID ? null : throwable;
    tag = tag === VOID ? null : tag;
    var tmp;
    if ($super === VOID) {
      this.wtf_mk2b7i_k$(throwable, tag, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.wtf_mk2b7i_k$.call(this, throwable, tag, message);
    }
    return tmp;
  };
  protoOf(Napier).log_lmdivf_k$ = function (priority, tag, throwable, message) {
    if (this.isEnable_3u442w_k$(priority, tag)) {
      this.rawLog_cd2rbe_k$(priority, tag, throwable, message);
    }
  };
  protoOf(Napier).log$default_sxo7rh_k$ = function (priority, tag, throwable, message, $super) {
    tag = tag === VOID ? null : tag;
    throwable = throwable === VOID ? null : throwable;
    var tmp;
    if ($super === VOID) {
      this.log_lmdivf_k$(priority, tag, throwable, message);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.log_lmdivf_k$.call(this, priority, tag, throwable, message);
    }
    return tmp;
  };
  protoOf(Napier).takeLogarithm_jknarb_k$ = function (antilog) {
    this.baseArray_1.remove_an8aut_k$(antilog);
  };
  protoOf(Napier).takeLogarithm_t53pki_k$ = function () {
    this.baseArray_1.clear_j9egeb_k$();
  };
  var Napier_instance;
  function Napier_getInstance() {
    if (Napier_instance == null)
      new Napier();
    return Napier_instance;
  }
  function AtomicMutableList_init_$Init$($this) {
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    AtomicMutableList.call($this, tmp$ret$0);
    return $this;
  }
  function AtomicMutableList_init_$Create$() {
    return AtomicMutableList_init_$Init$(objectCreate(protoOf(AtomicMutableList)));
  }
  function _get_atomicReference__iqk7kf($this) {
    return $this.atomicReference_1;
  }
  function modify($this, capacityDiff, block) {
    var newValue = ArrayList_init_$Create$($this.get_size_woubt6_k$() + capacityDiff | 0);
    newValue.addAll_4lagoh_k$($this);
    var result = block(newValue);
    $this.atomicReference_1.set_value_v1vabv_k$(newValue);
    return result;
  }
  function AtomicMutableList$add$lambda($index, $element) {
    return function ($this$modify) {
      $this$modify.add_dl6gt3_k$($index, $element);
      return Unit_getInstance();
    };
  }
  function AtomicMutableList$remove$lambda($t) {
    return function ($this$modify) {
      return $this$modify.remove_cedx0m_k$($t);
    };
  }
  function AtomicMutableList$clear$lambda($this$modify) {
    $this$modify.clear_j9egeb_k$();
    return Unit_getInstance();
  }
  function AtomicMutableList$removeAt$lambda($index) {
    return function ($this$modify) {
      return $this$modify.removeAt_6niowx_k$($index);
    };
  }
  function AtomicMutableList$set$lambda($index, $element) {
    return function ($this$modify) {
      return $this$modify.set_82063s_k$($index, $element);
    };
  }
  function AtomicMutableList(value) {
    AbstractList.call(this);
    this.atomicReference_1 = new AtomicRef(value);
  }
  protoOf(AtomicMutableList).add_8odrsm_k$ = function (element, index) {
    return modify(this, 1, AtomicMutableList$add$lambda(index, element));
  };
  protoOf(AtomicMutableList).add$default_2w81pm_k$ = function (element, index, $super) {
    var tmp;
    if (index === VOID) {
      // Inline function 'kotlin.collections.count' call
      tmp = this.get_size_woubt6_k$();
    } else {
      tmp = index;
    }
    index = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.add_8odrsm_k$(element, index);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.add_8odrsm_k$.call(this, element, index);
    }
    return tmp_0;
  };
  protoOf(AtomicMutableList).remove_an8aut_k$ = function (t) {
    return modify(this, -1, AtomicMutableList$remove$lambda(t));
  };
  protoOf(AtomicMutableList).clear_j9egeb_k$ = function () {
    var tmp = -this.get_size_woubt6_k$() | 0;
    return modify(this, tmp, AtomicMutableList$clear$lambda);
  };
  protoOf(AtomicMutableList).removeAt_6niowx_k$ = function (index) {
    return modify(this, -1, AtomicMutableList$removeAt$lambda(index));
  };
  protoOf(AtomicMutableList).set_9t5s9l_k$ = function (index, element) {
    return modify(this, 0, AtomicMutableList$set$lambda(index, element));
  };
  protoOf(AtomicMutableList).dropAll_vui90y_k$ = function () {
    var result = this.atomicReference_1.get_value_j01efc_k$();
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    this.atomicReference_1.set_value_v1vabv_k$(tmp$ret$0);
    return result;
  };
  protoOf(AtomicMutableList).get_size_woubt6_k$ = function () {
    return this.atomicReference_1.get_value_j01efc_k$().get_size_woubt6_k$();
  };
  protoOf(AtomicMutableList).isEmpty_y1axqb_k$ = function () {
    return this.atomicReference_1.get_value_j01efc_k$().isEmpty_y1axqb_k$();
  };
  protoOf(AtomicMutableList).contains_ccp5tc_k$ = function (element) {
    return this.atomicReference_1.get_value_j01efc_k$().contains_aljjnj_k$(element);
  };
  protoOf(AtomicMutableList).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_ccp5tc_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(AtomicMutableList).get_c1px32_k$ = function (index) {
    return this.atomicReference_1.get_value_j01efc_k$().get_c1px32_k$(index);
  };
  protoOf(AtomicMutableList).indexOf_u97212_k$ = function (element) {
    return this.atomicReference_1.get_value_j01efc_k$().indexOf_si1fv9_k$(element);
  };
  protoOf(AtomicMutableList).indexOf_si1fv9_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.indexOf_u97212_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(AtomicMutableList).lastIndexOf_wtunlo_k$ = function (element) {
    return this.atomicReference_1.get_value_j01efc_k$().lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(AtomicMutableList).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.lastIndexOf_wtunlo_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(AtomicMutableList).iterator_jk1svi_k$ = function () {
    return this.atomicReference_1.get_value_j01efc_k$().iterator_jk1svi_k$();
  };
  function _get_defaultTag__wlwefm($this) {
    return $this.defaultTag_1;
  }
  function DebugAntilog(defaultTag) {
    defaultTag = defaultTag === VOID ? 'app' : defaultTag;
    Antilog.call(this);
    this.defaultTag_1 = defaultTag;
  }
  protoOf(DebugAntilog).performLog_gjtjh9_k$ = function (priority, tag, throwable, message) {
    var logTag = tag == null ? this.defaultTag_1 : tag;
    var tmp;
    if (!(message == null)) {
      var tmp_0;
      if (!(throwable == null)) {
        tmp_0 = '' + message + '\n' + throwable.message;
      } else {
        tmp_0 = message;
      }
      tmp = tmp_0;
    } else {
      var tmp2_elvis_lhs = throwable == null ? null : throwable.message;
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      tmp = tmp_1;
    }
    var fullMessage = tmp;
    switch (priority.get_ordinal_ip24qg_k$()) {
      case 0:
        console.log('VERBOSE ' + logTag + ' : ' + fullMessage);
        break;
      case 1:
        console.log('DEBUG ' + logTag + ' : ' + fullMessage);
        break;
      case 2:
        console.info('INFO ' + logTag + ' : ' + fullMessage);
        break;
      case 3:
        console.warn('WARNING ' + logTag + ' : ' + fullMessage);
        break;
      case 4:
        console.error('ERROR ' + logTag + ' : ' + fullMessage);
        break;
      case 5:
        console.error('ASSERT ' + logTag + ' : ' + fullMessage);
        break;
    }
  };
  function AtomicRef(value) {
    this.value_1 = value;
  }
  protoOf(AtomicRef).set_value_v1vabv_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(AtomicRef).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Napier_getInstance;
  _.$_$.b = DebugAntilog;
  _.$_$.c = log;
  //endregion
  return _;
}));

//# sourceMappingURL=Napier-napier.js.map
