package br.mrenann.dev.portfolio

import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import platform.Foundation.NSURL
import platform.UIKit.UIApplication

internal actual fun openUrl(url: String?) {
    val nsUrl = url?.let { NSURL.URLWithString(it) } ?: return
    UIApplication.sharedApplication.openURL(nsUrl)
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal actual fun isHorizontal(): Boolean  {
    val windowClass = calculateWindowSizeClass()

    return windowClass.widthSizeClass != WindowWidthSizeClass.Compact
}