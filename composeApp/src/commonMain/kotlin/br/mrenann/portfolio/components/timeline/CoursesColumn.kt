package br.mrenann.portfolio.components.timeline

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun CoursesColumn(courses: Array<ProccessStage>, modifier: Modifier = Modifier) {
    val backgroundColor = MaterialTheme.colorScheme.surfaceContainer
    Column(
        modifier = modifier.padding(12.dp)
    ) {

        LazyColumn(
            userScrollEnabled = false
        ) {
            itemsIndexed(courses) { index, course ->
                TimelineNode(
                    circleParameters = CircleParametersDefaults.circleParameters(
                        backgroundColor = backgroundColor,
                        stroke = getIconStrokeColor(course)
                    ),
                    lineParameters = getLineBrush(
                        circleRadius = 12.dp,
                        index = index,
                        items = courses
                    ),
                    contentStartOffset = 16.dp,
                    spacer = 10.dp
                ) { modifier ->
                    MessageBubble(course, modifier)
                }
            }
        }
    }
}