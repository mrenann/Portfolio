package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Book
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.domain.model.SocialOption
import br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.Code
import compose.icons.feathericons.Phone
import compose.icons.feathericons.PhoneCall

object ContactTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(FeatherIcons.PhoneCall)

            return remember {
                TabOptions(
                    index = 2u,
                    title = "Contact Me",
                    icon = icon
                )
            }
        }

    @OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
    @Composable
    override fun Content() {

        val buttons = listOf(
            SocialOption.EMAIL,
            SocialOption.TELEPHONE,
            SocialOption.LINKEDIN,
            SocialOption.GITHUB
        )
        Column(modifier = Modifier.fillMaxSize()) {

            val windowClass = calculateWindowSizeClass()
            val showNavigationRail = windowClass.widthSizeClass != WindowWidthSizeClass.Compact

            Text(modifier = Modifier.padding(20.dp), textAlign = TextAlign.Justify, text = "Estou Disponível para Discutir Oportunidades de Colaboração, Projetos Empolgantes ou Simplesmente para Trocar Ideias. Aguardo o seu Contato!")

            LazyVerticalGrid(columns = GridCells.Fixed(count = if(showNavigationRail) 2 else 1)) {
                items(buttons) { data ->
                    SocialButton(data)
                }
            }

        }

    }
}