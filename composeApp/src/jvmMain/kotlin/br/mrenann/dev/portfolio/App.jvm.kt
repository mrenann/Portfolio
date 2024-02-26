package br.mrenann.dev.portfolio

import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import java.awt.Desktop
import java.net.URI

internal actual fun openUrl(url: String?) {
    val uri = url?.let { URI.create(it) } ?: return
    Desktop.getDesktop().browse(uri)
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal actual fun isHorizontal(): Boolean  {
    val windowClass = calculateWindowSizeClass()

    return windowClass.widthSizeClass != WindowWidthSizeClass.Compact
}