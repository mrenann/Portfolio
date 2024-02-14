package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Book
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import br.mrenann.dev.portfolio.domain.model.SocialOption
import br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions

object ContactTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(Icons.Default.Book)

            return remember {
                TabOptions(
                    index = 2u,
                    title = "Contact Me",
                    icon = icon
                )
            }
        }

    @Composable
    override fun Content() {
        Column(modifier = Modifier.fillMaxSize()) {
            Column(modifier = Modifier.align(Alignment.CenterHorizontally)) {
                SocialButton(SocialOption.EMAIL)
                SocialButton(SocialOption.TELEPHONE)
                SocialButton(SocialOption.LINKEDIN)
                SocialButton(SocialOption.GITHUB)
            }

        }

    }
}