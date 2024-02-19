package br.mrenann.dev.portfolio.ui.components.Timeline

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
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
import androidx.compose.ui.text.font.FontWeight.Companion.W400
import androidx.compose.ui.text.font.FontWeight.Companion.W500
import androidx.compose.ui.text.font.FontWeight.Companion.W600
import androidx.compose.ui.text.style.TextAlign
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
            colors = CardDefaults.cardColors(containerColor = getBackgroundColor(proccessStage))
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth().padding(12.dp)
            ) {

                Text(
                    modifier = Modifier
                        .fillMaxWidth()
                        .wrapContentHeight()
                        .padding(bottom = 2.dp),
                    text = proccessStage.title,
                    style = getTextStyle(proccessStage),
                    fontWeight = W600,
                    color = getTextColor(proccessStage)
                )
                proccessStage.subtitle?.let { subtitle ->
                    Text(
                        modifier = Modifier
                            .fillMaxWidth()
                            .wrapContentHeight()
                            .padding(top = 2.dp),
                        text = subtitle,
                        style = getTextStyle(proccessStage),
                        fontWeight = W400,
                        color = getTextColor(proccessStage)
                    )
                }
                proccessStage.intervalDate?.let {dates ->
                    Text(
                        modifier = Modifier.fillMaxWidth().padding(top = 7.dp),
                        text = dates,
                        textAlign = TextAlign.End,
                        fontWeight = W600,
                        fontSize = 12.sp
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