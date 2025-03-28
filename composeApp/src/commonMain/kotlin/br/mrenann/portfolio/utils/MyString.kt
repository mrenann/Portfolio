package br.mrenann.portfolio.utils

class MyString(val value: String) {
    fun append(suffix: String): MyString {
        return MyString(value + suffix)
    }
}

fun MyString.append(vararg suffixes: String): MyString {
    return MyString(suffixes.fold(MyString(this.value)) { acc, suffix ->
        MyString(acc.value + suffix)
    }.value)
}
