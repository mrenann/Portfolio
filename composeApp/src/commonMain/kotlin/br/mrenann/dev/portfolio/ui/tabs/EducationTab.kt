package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.dev.portfolio.isHorizontal
import br.mrenann.dev.portfolio.ui.components.Timeline.CircleParametersDefaults
import br.mrenann.dev.portfolio.ui.components.Timeline.LineParameters
import br.mrenann.dev.portfolio.ui.components.Timeline.LineParametersDefaults
import br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStage
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStageStatus
import br.mrenann.dev.portfolio.ui.components.Timeline.StrokeParameters
import br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode
import cafe.adriel.lyricist.strings
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.BookOpen
import compose.icons.feathericons.Check

object EducationTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(FeatherIcons.BookOpen)
            val title = strings.educationTab.tabTitle
            return remember {
                TabOptions(
                    index = 2u,
                    title = title,
                    icon = icon
                )
            }
        }

    @Composable
    fun getLineBrush(
        circleRadius: Dp,
        index: Int,
        items: Array<ProccessStage>
    ): LineParameters? {
        return if (index != items.lastIndex) {
            val currentStage: ProccessStage = items[index]
            val nextStage: ProccessStage = items[index + 1]
            val circleRadiusInPx = with(LocalDensity.current) { circleRadius.toPx() }
            LineParametersDefaults.linearGradient(
                strokeWidth = 3.dp,
                startColor = (getIconStrokeColor(currentStage)?.color
                    ?: getIconColor(currentStage)),
                endColor = (getIconStrokeColor(nextStage)?.color ?: getIconColor(items[index + 1])),
                startY = circleRadiusInPx * 2
            )
        } else {
            null
        }
    }

    @Composable
    fun getIconColor(stage: ProccessStage): Color {
        return when (stage.status) {
            ProccessStageStatus.FINISHED -> MaterialTheme.colorScheme.surfaceVariant
            ProccessStageStatus.CURRENT -> Color.Yellow
            ProccessStageStatus.UPCOMING -> Color.Red
        }
    }

    fun getIconStrokeColor(stage: ProccessStage): StrokeParameters? {
        return if (stage.status == ProccessStageStatus.UPCOMING) {
            StrokeParameters(color = Color.Gray, width = 2.dp)
        } else {
            null
        }
    }

    @Composable
    private fun SectionTitle(text: String) {
        Text(
            text = text,
            fontSize = 25.sp,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(vertical = 12.dp, horizontal = 20.dp)
        )
    }

    @Composable
    private fun StageContent(stages: Array<ProccessStage>) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .wrapContentHeight()
        ) {
            stages.forEachIndexed { index, stage ->
                TimelineNode(
                    lineParameters = getLineBrush(
                        circleRadius = 12.dp,
                        index = index,
                        items = stages
                    ),
                    contentStartOffset = 16.dp,
                    spacer = 24.dp
                ) { modifier ->
                    MessageBubble(stage, modifier)
                }
            }
        }
    }

    @Composable
    private fun CourseContent(courses: Array<ProccessStage>) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .wrapContentHeight()
        ) {
            courses.forEachIndexed { index, course ->
                TimelineNode(
                    lineParameters = getLineBrush(
                        circleRadius = 12.dp,
                        index = index,
                        items = courses
                    ),
                    contentStartOffset = 16.dp,
                    spacer = 24.dp
                ) { modifier ->
                    MessageBubble(course, modifier)
                }
            }
        }
    }

    @Composable
    override fun Content() {
        val stages = arrayOf(
            ProccessStage(
                title = "Graduação em Ciência da Computação",
                subtitle = "Universidade Federal do Cariri (UFCA) ",
                intervalDate = "2019 - 2023",
                status = ProccessStageStatus.FINISHED,
            ),
            ProccessStage(
                title = "Ensino Médio Técnico em Informática",
                subtitle = "EEEP Professor Moreira de Sousa",
                intervalDate = "2016 - 2018",
                status = ProccessStageStatus.FINISHED,
            ),

            )

        val courses = arrayOf(
            ProccessStage(
                title = "Santander CODERS MOBILE",
                subtitle = "Digital House Brasil",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
                isCourse = true,
            ),
            ProccessStage(
                title = "Everis Kotlin Developer",
                subtitle = "DIO",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
                isCourse = true,
            ),
            ProccessStage(
                title = "Desenvolvimento Front-End",
                subtitle = "Digital House Brasil",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
                isCourse = true,
            ),
            ProccessStage(
                title = "Desenvolvimento de Aplicativos Android Studio & Kotlin",
                subtitle = "Cel.Lep Idiomas",
                intervalDate = "2020",
                status = ProccessStageStatus.FINISHED,
                isCourse = true,
            ),
        )

        LazyVerticalGrid(
            modifier = Modifier.fillMaxSize(),
            columns = GridCells.Fixed(count = if (isHorizontal()) 2 else 1),
            contentPadding = PaddingValues(vertical = 8.dp, horizontal = 16.dp)
        ) {
            item {
                Column {
                    SectionTitle(text = "Formação Acadêmica")
                    StageContent(stages = stages)
                }
            }
            item {
                Column {
                    SectionTitle(text = "Cursos")
                    CourseContent(courses = courses)
                }
            }
        }
    }
}