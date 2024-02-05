package br.mrenann.dev.portfolio.resource.strings

import androidx.compose.runtime.staticCompositionLocalOf

object Locales {
    const val EN = "en"
    const val PT = "pt"
}

val strings = mapOf(
    Locales.EN to EnStrings,
    Locales.PT to PtStrings
)

val LocalStrings = staticCompositionLocalOf { PtStrings }