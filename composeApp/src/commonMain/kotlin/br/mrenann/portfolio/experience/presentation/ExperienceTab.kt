package br.mrenann.portfolio.experience.presentation

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.Code

class ExperienceTab() : Tab {
    override val options: TabOptions
        @Composable
        get() {
            val title = "Experience"
            val icon = rememberVectorPainter(FeatherIcons.Code)

            return remember {
                TabOptions(
                    index = 1u,
                    title = title,
                    icon = icon
                )
            }
        }

    @Composable
    override fun Content() {
        Text("Profile")
    }

}