package br.mrenann.dev.portfolio.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import br.mrenann.dev.portfolio.utils.getPlatformName
import cafe.adriel.lyricist.strings
import cafe.adriel.voyager.core.screen.Screen

object HomeScreen : Screen {
    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.background(
                Color.White
            ).fillMaxSize()
        ) {
            Text(strings.simple)
            Text(getPlatformName())
        }
    }
}