package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.dev.portfolio.domain.model.SocialOption
import br.mrenann.dev.portfolio.isHorizontal
import br.mrenann.dev.portfolio.ui.components.SocialButton.SocialButton
import br.mrenann.dev.portfolio.ui.components.Timeline.CircleParametersDefaults
import br.mrenann.dev.portfolio.ui.components.Timeline.MessageBubble
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStage
import br.mrenann.dev.portfolio.ui.components.Timeline.ProccessStageStatus
import br.mrenann.dev.portfolio.ui.components.Timeline.TimelineNode
import cafe.adriel.lyricist.strings
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import com.seiko.imageloader.rememberImagePainter
import compose.icons.FeatherIcons
import compose.icons.feathericons.User

object HomeTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(FeatherIcons.User)
            val title = strings.homeTab.tabTitle
            return remember {
                TabOptions(
                    index = 0u,
                    title = title,
                    icon = icon
                )
            }
        }


    @Composable
    private fun HeaderSection() {
        val courses = arrayOf(
            ProccessStage(
                title = "Santander CODERS MOBILE",
                subtitle = "Stone CO",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
            ),
            ProccessStage(
                title = "A",
                subtitle = "Calang.io Empresa Júnior de Desenvolvimento de Software",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
            ),
            ProccessStage(
                title = "Desenvolvimento Front-End",
                subtitle = "Empresa Junior MatComp Soluções ",
                intervalDate = "2021",
                status = ProccessStageStatus.FINISHED,
            ),
        )

        if (isHorizontal()) {
            Row {
                HeaderColumn(modifier = Modifier.weight(0.5F))
                CoursesColumn(courses = courses, modifier = Modifier.weight(0.5F))
            }
        } else {
            Column {
                HeaderColumn()
                CoursesColumn(courses)
            }
        }
    }

    @Composable
    private fun HeaderColumn(modifier: Modifier = Modifier) {
        Column(
            modifier = modifier.padding(12.dp)
        ) {
            Image(
                modifier = Modifier.clip(CircleShape).size(60.dp),
                alignment = Alignment.Center,
                painter = rememberImagePainter("https://avatars.githubusercontent.com/u/50411238?v=4"),
                contentDescription = "image",
            )
            Text(text = "I'm Marcos Renann", fontSize = 20.sp)
            Text(text = "Android Developer", fontSize = 20.sp)
            Text(text = strings.homeTab.about, fontSize = 12.sp, textAlign = TextAlign.Justify)
        }
    }

    @Composable
    private fun CoursesColumn(courses: Array<ProccessStage>, modifier: Modifier = Modifier) {
        Column(
            modifier = modifier.padding(12.dp)
        ) {
            Text(
                text = "Experiência",
                fontSize = 25.sp,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(vertical = 12.dp, horizontal = 20.dp)
            )

            LazyColumn {
                itemsIndexed(courses) { index, course ->
                    TimelineNode(
                        circleParameters = CircleParametersDefaults.circleParameters(
                            backgroundColor = EducationTab.getIconColor(course),
                            stroke = EducationTab.getIconStrokeColor(course)
                        ),
                        lineParameters = EducationTab.getLineBrush(
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
    }

    @Composable
    private fun ContactSection(buttons: List<SocialOption>) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                modifier = Modifier.padding(20.dp).weight(0.4F),
                textAlign = TextAlign.Justify,
                text = strings.contactTab.title
            )
            LazyVerticalGrid(
                columns = GridCells.Fixed(count = if (isHorizontal()) 2 else 1),
                modifier = Modifier.weight(0.6F)
            ) {
                items(buttons) { data ->
                    SocialButton(data)
                }
            }
        }
    }

    @Composable
    override fun Content() {
        val buttons = listOf(
            SocialOption.EMAIL,
            SocialOption.TELEPHONE,
            SocialOption.LINKEDIN,
            SocialOption.GITHUB
        )

        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(20.dp)

        ) {
            Column(
                modifier = Modifier.fillMaxWidth()
            ) {
                HeaderSection()
                Spacer(modifier = Modifier.height(16.dp)) // Spacer between sections
                ContactSection(buttons)
            }
        }
    }
}