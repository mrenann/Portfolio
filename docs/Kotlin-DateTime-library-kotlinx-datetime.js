(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime'], this['@js-joda/core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var toString = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.cf;
  var objectCreate = kotlin_kotlin.$_$.af;
  var captureStack = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ak;
  var classMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.df;
  var VOID = kotlin_kotlin.$_$.g;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var THROW_CCE = kotlin_kotlin.$_$.lk;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var objectMeta = kotlin_kotlin.$_$.bf;
  var THROW_IAE = kotlin_kotlin.$_$.mk;
  var enumEntries = kotlin_kotlin.$_$.fd;
  var Unit_getInstance = kotlin_kotlin.$_$.c6;
  var Enum = kotlin_kotlin.$_$.xj;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var numberToInt = kotlin_kotlin.$_$.ye;
  var Comparable = kotlin_kotlin.$_$.tj;
  var numberToLong = kotlin_kotlin.$_$.ze;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, VOID, DateTimeFormatException_init_$Create$);
  setMetadataFor(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DayOfWeek_0, 'DayOfWeek', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(LocalDate_0, 'LocalDate', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LocalTime_0, 'LocalTime', classMeta, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  setMetadataFor(Month_0, 'Month', classMeta, Enum);
  //endregion
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().get_c1px32_k$(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function get_number(_this__u8e3s4) {
    return _this__u8e3s4.get_ordinal_ip24qg_k$() + 1 | 0;
  }
  function Month(number) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= number ? number <= 12 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_0().get_c1px32_k$(number - 1 | 0);
  }
  function get_NANOS_PER_MILLI() {
    return NANOS_PER_MILLI;
  }
  var NANOS_PER_MILLI;
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalDateIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalDateIso8601Serializer).serialize_4wlsk8_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4wlsk8_k$(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(LocalTimeIso8601Serializer).deserialize_sy6x50_k$ = function (decoder) {
    return Companion_getInstance_0().parse_pc1q8p_k$(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_401kjc_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_401kjc_k$(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MONDAY':
        return DayOfWeek_MONDAY_getInstance();
      case 'TUESDAY':
        return DayOfWeek_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return DayOfWeek_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return DayOfWeek_THURSDAY_getInstance();
      case 'FRIDAY':
        return DayOfWeek_FRIDAY_getInstance();
      case 'SATURDAY':
        return DayOfWeek_SATURDAY_getInstance();
      case 'SUNDAY':
        return DayOfWeek_SUNDAY_getInstance();
      default:
        DayOfWeek_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_getInstance();
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function Companion() {
    Companion_instance = this;
    this.MIN_1 = new LocalDate_0(LocalDate.MIN);
    this.MAX_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
      var this_0 = LocalDate.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDate_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion).fromEpochDays_msuzxa_k$ = function (epochDays) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochDays.<anonymous>' call
      var tmp$ret$1 = LocalDate.ofEpochDay(epochDays);
      tmp = new LocalDate_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return LocalDateIso8601Serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDate.<init>.<anonymous>' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_init_$Init$_0(year, month, dayOfMonth, $this) {
    LocalDate_init_$Init$(year, get_number(month), dayOfMonth, $this);
    return $this;
  }
  function LocalDate_init_$Create$_0(year, month, dayOfMonth) {
    return LocalDate_init_$Init$_0(year, month, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance();
    this.value_1 = value;
  }
  protoOf(LocalDate_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalDate_0).get_year_woy26e_k$ = function () {
    return this.value_1.year();
  };
  protoOf(LocalDate_0).get_monthNumber_nb47ls_k$ = function () {
    return this.value_1.monthValue();
  };
  protoOf(LocalDate_0).get_month_ivc8d3_k$ = function () {
    return toMonth(this.value_1.month());
  };
  protoOf(LocalDate_0).get_dayOfMonth_vblo3a_k$ = function () {
    return this.value_1.dayOfMonth();
  };
  protoOf(LocalDate_0).get_dayOfWeek_3kfgci_k$ = function () {
    return toDayOfWeek(this.value_1.dayOfWeek());
  };
  protoOf(LocalDate_0).get_dayOfYear_3ke6gp_k$ = function () {
    return this.value_1.dayOfYear();
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.value_1 === other.value_1 ? true : this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalDate_0).compareTo_phv9sr_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalDate_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_phv9sr_k$(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).toEpochDays_tp9eth_k$ = function () {
    return numberToInt(this.value_1.toEpochDay());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalTime.<init>.<anonymous>' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.MIN_1 = new LocalTime_0(LocalTime.MIN);
    this.MAX_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_0).parse_pc1q8p_k$ = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
      var this_0 = LocalTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_0).fromSecondOfDay_ahegcx_k$ = function (secondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromSecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofSecondOfDay(secondOfDay, 0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_0).fromMillisecondOfDay_pjhtva_k$ = function (millisecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromMillisecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofNanoOfDay(millisecondOfDay * 1000000.0);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_0).fromNanosecondOfDay_iksazp_k$ = function (nanosecondOfDay) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromNanosecondOfDay.<anonymous>' call
      var this_0 = LocalTime.ofNanoOfDay(nanosecondOfDay.toDouble_ygsx0s_k$());
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw IllegalArgumentException_init_$Create$_0(e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_0).get_MIN_18jp6f_k$ = function () {
    return this.MIN_1;
  };
  protoOf(Companion_0).get_MAX_18jpd1_k$ = function () {
    return this.MAX_1;
  };
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return LocalTimeIso8601Serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalTime_0(value) {
    Companion_getInstance_0();
    this.value_1 = value;
  }
  protoOf(LocalTime_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalTime_0).get_hour_wonfal_k$ = function () {
    return this.value_1.hour();
  };
  protoOf(LocalTime_0).get_minute_gnc10d_k$ = function () {
    return this.value_1.minute();
  };
  protoOf(LocalTime_0).get_second_jf7fjx_k$ = function () {
    return this.value_1.second();
  };
  protoOf(LocalTime_0).get_nanosecond_fws9td_k$ = function () {
    return numberToInt(this.value_1.nano());
  };
  protoOf(LocalTime_0).toSecondOfDay_a2clsa_k$ = function () {
    return this.value_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).toMillisecondOfDay_936hwh_k$ = function () {
    return numberToInt(this.value_1.toNanoOfDay() / get_NANOS_PER_MILLI());
  };
  protoOf(LocalTime_0).toNanosecondOfDay_dywvsy_k$ = function () {
    return numberToLong(this.value_1.toNanoOfDay());
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.value_1 === other.value_1 ? true : this.value_1.equals(other.value_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.value_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.value_1.toString();
  };
  protoOf(LocalTime_0).compareTo_ax7xad_k$ = function (other) {
    return this.value_1.compareTo(other.value_1);
  };
  protoOf(LocalTime_0).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_ax7xad_k$(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  var $ENTRIES_0;
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(_this__u8e3s4.value());
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: init
  NANOS_PER_MILLI = 1000000;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalTime_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
