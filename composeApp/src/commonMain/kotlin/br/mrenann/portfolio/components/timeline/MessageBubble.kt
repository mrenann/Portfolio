package br.mrenann.portfolio.components.timeline


import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight.Companion.W400
import androidx.compose.ui.text.font.FontWeight.Companion.W500
import androidx.compose.ui.text.font.FontWeight.Companion.W600
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
internal fun MessageBubble(
    proccessStage: ProccessStage,
    modifier: Modifier = Modifier,
) {
    Box(
        modifier = modifier
            .wrapContentHeight()
            .fillMaxWidth()
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth(),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceContainer)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth().padding(horizontal = 8.dp, vertical = 4.dp)
            ) {
                if (proccessStage.isCourse) {
                    Text(
                        modifier = Modifier.fillMaxWidth(),
                        text = "Curso",
                        textAlign = TextAlign.Start,
                        fontWeight = W600,
                        fontSize = 12.sp
                    )
                }
                Row(Modifier.fillMaxWidth()) {
                    Row(Modifier) {
                        Text(
                            modifier = Modifier
                                .wrapContentHeight(),
                            text = proccessStage.title,
                            style = getTextStyle(proccessStage),
                            fontWeight = W600,
                            color = getTextColor(proccessStage)
                        )
                        if (proccessStage.isEducation.not()) {
                            proccessStage.subtitle?.let { subtitle ->
                                Text(
                                    modifier = Modifier
                                        .wrapContentHeight(),
                                    text = " (${subtitle})",
                                    style = getTextStyle(proccessStage),
                                    fontWeight = W400,
                                    color = getTextColor(proccessStage)
                                )
                            }
                        }
                    }
                    proccessStage.intervalDate?.let { dates ->
                        Text(
                            modifier = Modifier.fillMaxWidth(),
                            text = dates,
                            textAlign = TextAlign.End,
                            fontWeight = W600,
                            fontSize = 12.sp
                        )
                    }
                }
                if (proccessStage.isEducation) {
                    proccessStage.subtitle?.let { subtitle ->
                        Text(
                            modifier = Modifier
                                .wrapContentHeight(),
                            text = "$subtitle",
                            style = getTextStyle(proccessStage),
                            fontWeight = W400,
                            color = getTextColor(proccessStage)
                        )
                    }
                }
                proccessStage.description?.let { desc ->
                    Text(
                        text = desc,
                        fontSize = 12.sp,
                        lineHeight = 12.sp
                    )
                }


            }

        }

    }
}

@Composable
private fun getBackgroundColor(proccessStage: ProccessStage) = when (proccessStage.status) {
    ProccessStageStatus.UPCOMING -> MaterialTheme.colorScheme.surface.copy(alpha = 0.3f)
    ProccessStageStatus.CURRENT -> MaterialTheme.colorScheme.tertiary.copy(alpha = 0.3f)
    else -> MaterialTheme.colorScheme.surfaceVariant
}

@Composable
private fun getTextColor(proccessStage: ProccessStage) =
    if (proccessStage.status == ProccessStageStatus.UPCOMING) {
        MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.63f)
    } else {
        MaterialTheme.colorScheme.onSurfaceVariant
    }

@Composable
private fun getFontWeight(proccessStage: ProccessStage) =
    if (proccessStage.status == ProccessStageStatus.CURRENT) {
        W500
    } else {
        W400
    }

@Composable
private fun getTextStyle(proccessStage: ProccessStage) =
    if (proccessStage.status == ProccessStageStatus.CURRENT) {
        MaterialTheme.typography.bodyLarge
    } else {
        MaterialTheme.typography.bodyMedium
    }

@Composable
fun getLineBrush(
    circleRadius: Dp,
    index: Int,
    items: Array<ProccessStage>
): LineParameters? {
    return if (index != items.lastIndex) {
        items[index]
        items[index + 1]
        val circleRadiusInPx = with(LocalDensity.current) { circleRadius.toPx() }
        LineParametersDefaults.linearGradient(
            strokeWidth = 3.dp,
            startColor = MaterialTheme.colorScheme.surfaceContainer,
            endColor = MaterialTheme.colorScheme.surfaceContainer,
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