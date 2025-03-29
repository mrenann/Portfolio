package br.mrenann.portfolio.education.presentation

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
        val education =
            arrayOf(
                ProccessStage(
                    title = "Bachelor's Degree in Computer Science",
                    description = "Universidade Federal do Cariri (UFCA)",
                    intervalDate = "2019 - 2023",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Technical High School in IT",
                    subtitle = "EEEP Professor Moreira de Sousa",
                    intervalDate = "2016-2018",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
            )

        val certifications =
            arrayOf(
                ProccessStage(
                    title = "Santander CODERS MOBILE",
                    subtitle = "Digital House Brasil",
                    intervalDate = "2021",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Everis Kotlin Developer",
                    subtitle = "DIO",
                    intervalDate = "2021",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Front End Development",
                    subtitle = "Digital House Brasil",
                    intervalDate = "2021",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Application Development",
                    subtitle = "Cel.Lep Idiomas",
                    intervalDate = "2020",
                    isEducation = true,
                    status = ProccessStageStatus.FINISHED,
                ),
            )

        Text(
            modifier = Modifier.padding(horizontal = 12.dp),
            text = "Education",
            fontWeight = FontWeight.Bold,
            fontSize = 22.sp
        )
        CoursesColumn(education)

        Text(
            modifier = Modifier.padding(horizontal = 12.dp),
            text = "Certifications",
            fontWeight = FontWeight.Bold,
            fontSize = 22.sp
        )

        CoursesColumn(certifications)
    }

}