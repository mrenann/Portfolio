package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.dev.portfolio.domain.model.ProjectCard
import br.mrenann.dev.portfolio.isHorizontal
import br.mrenann.dev.portfolio.openUrl
import cafe.adriel.lyricist.strings
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import com.seiko.imageloader.rememberImagePainter
import compose.icons.FeatherIcons
import compose.icons.feathericons.Code
import jsonString
import kotlinx.serialization.json.Json

object ProjectsTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(FeatherIcons.Code)
            val title = strings.projectsTab.tabTitle
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
        val json = Json { ignoreUnknownKeys = true }
        val projects = json.decodeFromString<Array<ProjectCard>>(jsonString)

        Text(
            text = "Projetos",
            fontSize = 25.sp,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(vertical = 12.dp, horizontal = 20.dp)
        )
        LazyVerticalGrid(columns = GridCells.Fixed(count = if (isHorizontal()) 2 else 1)) {
            items(projects) { data ->
                Card(
                    modifier = Modifier.fillMaxWidth().padding(vertical = 5.dp, horizontal = 15.dp)
                        .clip(RoundedCornerShape(10.dp)).clickable { openUrl(data.url) }
                ) {
                    Row {
                        Image(
                            modifier = Modifier.padding(all = 8.dp)
                                .fillMaxHeight(0.25F).fillMaxWidth(0.25F).weight(1f, fill = false).clip(RoundedCornerShape(5.dp))
                                .align(Alignment.CenterVertically),
                            alignment = Alignment.Center,
                            painter = rememberImagePainter(data.imagem),
                            contentDescription = "image",
                        )
                        Column(modifier = Modifier.padding(7.dp)) {
                            data.nome.let {
                                Text(
                                    text = it,
                                    fontSize = 16.sp,
                                    fontWeight = FontWeight.ExtraBold
                                )
                            }
                            Text(data.categoria)
                            data.acesso?.let { Text(text = "$it Downloads") }
                            data.descricao?.let { Text(it) }
                        }
                    }

                }
            }
        }

    }
}