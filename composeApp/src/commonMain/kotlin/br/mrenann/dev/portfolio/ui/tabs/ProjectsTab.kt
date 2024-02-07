package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.domain.model.ProjectCard
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import jsonString
import kotlinx.serialization.json.Json

object ProjectsTab : Tab {

    override val options: TabOptions
        @Composable
        get() {
            val icon = rememberVectorPainter(Icons.Default.Home)

            return remember {
                TabOptions(
                    index = 1u,
                    title = "Projects",
                    icon = icon
                )
            }
        }

    @Composable
    override fun Content() {
        val json = Json { ignoreUnknownKeys = true }
        val projects = json.decodeFromString<Array<ProjectCard>>(jsonString)
        LazyVerticalGrid(columns = GridCells.Adaptive(300.dp)) {
            items(projects) { data ->
                Card(modifier = Modifier.fillMaxWidth().padding(vertical = 5.dp, horizontal = 15.dp)){
                    Column(modifier = Modifier.padding(7.dp)) {
                        data.id?.let { Text(it) }
                        data.nome?.let { Text(it) }
                        data.descricao?.let { Text(it) }
                        data.acesso?.let { Text(it) }
                    }
                }
            }
        }

    }
}