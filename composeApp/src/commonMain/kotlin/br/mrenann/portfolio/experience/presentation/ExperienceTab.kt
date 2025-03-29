package br.mrenann.portfolio.experience.presentation

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.portfolio.components.timeline.CoursesColumn
import br.mrenann.portfolio.components.timeline.ProccessStage
import br.mrenann.portfolio.components.timeline.ProccessStageStatus
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
        val courses =
            arrayOf(
                ProccessStage(
                    title = "Android Developer",
                    subtitle = "Setebit",
                    description = "React Native",
                    intervalDate = "2023",
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Android Developer",
                    subtitle = "Stone CO",
                    description = "Android | Kotlin | KMP | Jetpack Compose",
                    intervalDate = "2021-2023",
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Mobile Developer",
                    subtitle = "Calang.Io",
                    description = "Android | Kotlin | Leadership",
                    intervalDate = "2021-2022",
                    status = ProccessStageStatus.FINISHED,
                ),
            )

        Text(
            modifier = Modifier.padding(horizontal = 12.dp),
            text = "Experience",
            fontWeight = FontWeight.Bold,
            fontSize = 22.sp
        )

        CoursesColumn(courses)

        Text(
            modifier = Modifier.padding(horizontal = 12.dp),
            text = "Projects",
            fontWeight = FontWeight.Bold,
            fontSize = 22.sp
        )

    }

}