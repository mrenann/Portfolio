package br.mrenann.dev.portfolio

import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import kotlinx.browser.window

internal actual fun openUrl(url: String?) {
    url?.let { window.open(it) }
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal actual fun isHorizontal(): Boolean  {
    val windowClass = calculateWindowSizeClass()
    val userAgent = js("navigator.userAgent").toString()

    return ((windowClass.widthSizeClass != WindowWidthSizeClass.Compact) && (userAgent.lowercase().contains("mobile")).not())
}