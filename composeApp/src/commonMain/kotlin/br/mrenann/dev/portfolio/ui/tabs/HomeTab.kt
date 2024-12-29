package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.itemsIndexed
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
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
    private fun HeaderSection(modifier: Modifier = Modifier) {
        val courses = strings.homeTab.experience.let {experience ->
            arrayOf(
                ProccessStage(
                    title = experience.setebitTitle,
                    subtitle = experience.setebitSubtitle,
                    intervalDate = experience.setebitTime,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = experience.stoneTitle,
                    subtitle = experience.stoneSubtitle,
                    intervalDate = experience.stoneTime,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = experience.calangTitle,
                    subtitle = experience.calangSubtitle,
                    intervalDate = experience.calangTime,
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = experience.matcompTitle,
                    subtitle = experience.matcompSubtitle,
                    intervalDate = experience.matcompTime,
                    status = ProccessStageStatus.FINISHED,
                ),
            )
        }

        if (isHorizontal()) {
            Row(modifier) {
                HeaderColumn(modifier = Modifier.weight(0.5F))
                CoursesColumn(courses = courses, modifier = Modifier.weight(0.5F))
            }
        } else {
            Column(modifier) {
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
            if(isHorizontal()) {Column(modifier = Modifier.padding(bottom = 12.dp).fillMaxWidth()) {
                Header(modifier = Modifier.align(Alignment.CenterHorizontally))
            }

            }else {
                Row(modifier = Modifier.padding(bottom = 12.dp).fillMaxWidth()) { Header(modifier = Modifier.align(Alignment.CenterVertically)) }
            }

            Text(text = strings.homeTab.about,  textAlign = TextAlign.Justify)
        }
    }

    @Composable
    private fun Header(modifier: Modifier) {
            Image(
                modifier = modifier.clip(CircleShape).size(if (isHorizontal()) 250.dp else 80.dp),
                alignment = Alignment.Center,
                painter = rememberImagePainter("https://avatars.githubusercontent.com/u/50411238?v=4"),
                contentScale = ContentScale.FillBounds,
                contentDescription = "image",
            )
            Column(
                modifier = modifier.padding(horizontal = 12.dp).fillMaxWidth()
            ) {
                Text(
                    modifier = Modifier.align(Alignment.CenterHorizontally).fillMaxWidth(),
                    text = strings.homeTab.aboutTitle,
                    fontSize = if (isHorizontal()) 36.sp else 20.sp,
                    fontWeight = FontWeight.Medium,
                    textAlign = if (isHorizontal()) TextAlign.Center else TextAlign.Justify,
                )
                Text(
                    modifier = Modifier.align(Alignment.CenterHorizontally).fillMaxWidth(),
                    text = strings.homeTab.aboutSubtitle,
                    fontSize = if (isHorizontal()) 42.sp else 28.sp,
                    fontWeight = FontWeight.Black,
                    textAlign = if (isHorizontal()) TextAlign.Center else TextAlign.Justify,
                )
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

            LazyColumn(
                userScrollEnabled = false
            ) {
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
    private fun ContactCard(buttons: List<SocialOption>, textModifier: Modifier = Modifier, gridModifier: Modifier = Modifier) {

        Text(
            modifier = if (isHorizontal()) textModifier else Modifier,
            textAlign = TextAlign.Justify,
            text = strings.contactTab.title
        )
        LazyVerticalGrid(
            columns = GridCells.Fixed(count = if (isHorizontal()) 2 else 1),
            modifier = if(isHorizontal()) gridModifier else Modifier
        ) {
            items(buttons) { data ->
                SocialButton(data)
            }
        }
    }

    @Composable
    private fun ContactSection(buttons: List<SocialOption>, modifier: Modifier = Modifier) {
       if (isHorizontal()) {
           Row(
               modifier = modifier.fillMaxWidth(),
               verticalAlignment = Alignment.Top
           ) {
               ContactCard(buttons, textModifier = Modifier.weight(0.5F), gridModifier = Modifier.weight(0.5F))
           }
       } else {
           Column (
               modifier = modifier.fillMaxWidth(),
               verticalArrangement = Arrangement.Center
           ) {
               ContactCard(buttons, textModifier = Modifier.weight(0.4F), gridModifier = Modifier.weight(0.6F))
           }
       }
    }

    @Composable
    override fun Content() {

        val buttons = listOf(
            SocialOption.CV,
            SocialOption.CVENGLISH,
            SocialOption.EMAIL,
            SocialOption.TELEPHONE,
            SocialOption.LINKEDIN,
            SocialOption.GITHUB
        )

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 8.dp)
                .verticalScroll(rememberScrollState())

        ) {
            Column(
                modifier = Modifier.fillMaxWidth()
            ) {
                HeaderSection(modifier = Modifier.fillMaxSize().heightIn(100.dp,2000.dp))
                Spacer(modifier = Modifier.height(16.dp))
                ContactSection(buttons, modifier = Modifier.heightIn(100.dp,2000.dp).padding(horizontal = 10.dp))
            }
        }
    }
}