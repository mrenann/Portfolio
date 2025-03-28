package br.mrenann.portfolio.education.presentation

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.BookOpen

class EducationTab() : Tab {
    override val options: TabOptions
        @Composable
        get() {
            val title = "Education"
            val icon = rememberVectorPainter(FeatherIcons.BookOpen)

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
        Text("Education")
    }

}