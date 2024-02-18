package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.ui.components.Timeline.CircleParametersDefaults
import br.mrenann.dev.portfolio.ui.components.Timeline.LineParameters
import br.mrenann.dev.portfolio.ui.components.Timeline.LineParametersDefaults
import br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStage
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStageStatus
import br.mrenann.dev.portfolio.ui.components.Timeline.StrokeParameters
import br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode
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

            return remember {
                TabOptions(
                    index = 2u,
                    title = "Education",
                    icon = icon
                )
            }
        }

    @Composable
    private fun getLineBrush(
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

    private fun getIconColor(stage: ProccessStage): Color {
        return when (stage.status) {
            ProccessStageStatus.FINISHED -> Color.DarkGray
            ProccessStageStatus.CURRENT -> Color.Yellow
            ProccessStageStatus.UPCOMING -> Color.Red
        }
    }

    private fun getIconStrokeColor(stage: ProccessStage): StrokeParameters? {
        return if (stage.status == ProccessStageStatus.UPCOMING) {
            StrokeParameters(color = Color.Gray, width = 2.dp)
        } else {
            null
        }
    }

    @Composable
    override fun Content() {
        val stages = arrayOf(
            ProccessStage(
                title = "Graduação em Ciência da Computação",
                subtitle = "Universidade Federal do Cariri (UFCA) ",
                status = ProccessStageStatus.FINISHED,
            ),
            ProccessStage(
                title = "TESTANDO 2",
                status = ProccessStageStatus.FINISHED,
            ),
            ProccessStage(
                title = "TESTANDO 3",
                status = ProccessStageStatus.FINISHED,
            )
        )
        LazyColumn(
            modifier = Modifier
                .wrapContentHeight()
                .fillMaxWidth(),
            contentPadding = PaddingValues(12.dp)
        ) {
            itemsIndexed(stages) { index, proccessStage ->
                TimelineNode(
                    circleParameters = CircleParametersDefaults.circleParameters(
                        backgroundColor = getIconColor(proccessStage),
                        stroke = getIconStrokeColor(proccessStage),
                        icon = FeatherIcons.BookOpen
                    ),
                    lineParameters = getLineBrush(
                        circleRadius = 12.dp,
                        index = index,
                        items = stages
                    ),
                    contentStartOffset = 16.dp,
                    spacer = 24.dp
                ) { modifier ->
                    MessageBubble(proccessStage,modifier)
                }
            }

        }

    }
}