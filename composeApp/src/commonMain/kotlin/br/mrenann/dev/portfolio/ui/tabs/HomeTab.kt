package br.mrenann.dev.portfolio.ui.tabs

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Help
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
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

            return remember {
                TabOptions(
                    index = 0u,
                    title = "About me",
                    icon = icon
                )
            }
        }

    @Composable
    override fun Content() {
        Column(modifier = Modifier.fillMaxSize().padding(20.dp)) {
            Column(modifier = Modifier.align(Alignment.CenterHorizontally)) {
                Image(
                    modifier = Modifier.clip(CircleShape),
                    alignment = Alignment.Center,
                    painter = rememberImagePainter("https://avatars.githubusercontent.com/u/50411238?v=4"),
                    contentDescription = "image",
                )
                Text(text = "I'm Marcos Renann", fontSize = 20.sp)
                Text(text = "Android Developer", fontSize = 20.sp)
            }
        }


    }
}