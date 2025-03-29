package br.mrenann.portfolio.components.timeline

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.drawscope.withTransform
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp


@Composable
fun TimelineNode(
    circleParameters: CircleParameters? = null,
    lineParameters: LineParameters? = null,
    contentStartOffset: Dp = 16.dp,
    spacer: Dp = 32.dp,
    content: @Composable BoxScope.(modifier: Modifier) -> Unit
) {
    val iconPainter = circleParameters?.icon?.let { icon -> rememberVectorPainter(image = icon) }
    val backgroundColor = MaterialTheme.colorScheme.surfaceContainer
    Box(
        modifier = Modifier
            .wrapContentSize()
            .drawBehind {
                circleParameters?.let {
                    val circleRadiusInPx = circleParameters.radius.toPx()

                    lineParameters?.let {
                        drawLine(
                            brush = it.brush,
                            start = Offset(x = circleRadiusInPx, y = (circleRadiusInPx) * 2),
                            end = Offset(x = circleRadiusInPx, y = this.size.height),
                            strokeWidth = it.strokeWidth.toPx()
                        )
                    }

                    drawCircle(
                        backgroundColor,
                        circleRadiusInPx,
                        center = Offset(x = circleRadiusInPx, y = circleRadiusInPx)
                    )


                    circleParameters.stroke?.let { stroke ->
                        val strokeWidthInPx = stroke.width.toPx()
                        drawCircle(
                            color = backgroundColor,
                            radius = circleRadiusInPx - strokeWidthInPx / 2,
                            center = Offset(x = circleRadiusInPx, y = circleRadiusInPx),
                            style = Stroke(width = strokeWidthInPx)
                        )

                    }

                    iconPainter?.let { painter ->
                        this.withTransform(
                            transformBlock = {
                                translate(
                                    left = circleRadiusInPx - painter.intrinsicSize.width / 2f,
                                    top = circleRadiusInPx - painter.intrinsicSize.height / 2f
                                )
                            },
                            drawBlock = {
                                this.drawIntoCanvas {
                                    with(painter) {
                                        draw(intrinsicSize)
                                    }
                                }
                            })
                    }
                }


            }
    ) {
        content(
            Modifier
                .defaultMinSize(minHeight = circleParameters?.radius?.times(2) ?: 1.dp)
                .padding(
                    start = (circleParameters?.radius?.times(2) ?: 1.dp) + contentStartOffset,
                    bottom = spacer
                )
        )
    }
}