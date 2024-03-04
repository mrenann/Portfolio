package br.mrenann.dev.portfolio.ui.components.SocialButton

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.domain.model.SocialOption
import br.mrenann.dev.portfolio.openUrl
import cafe.adriel.lyricist.strings


@OptIn(ExperimentalFoundationApi::class)
@Composable
internal fun SocialButton(
    socialOption: SocialOption
) {
    Column(modifier = Modifier.padding(10.dp).clickable {
        openUrl(url = socialOption.onClick)
    }) {
        Row(modifier = Modifier.padding(10.dp)) {
            Column(
                modifier = Modifier.padding(end = 10.dp).background(color = Color.Black, shape = CircleShape)
            ) {
                Icon(modifier = Modifier.padding(10.dp), imageVector = socialOption.icon, contentDescription = "${strings.homeTab.socialButtons.title(socialOption.name)} icon", tint = Color.White)
            }
            Column {
                Text(text = strings.homeTab.socialButtons.title(socialOption.name), textAlign = TextAlign.Center)
                Text(text = strings.homeTab.socialButtons.subtitle(socialOption.name), textAlign = TextAlign.Center)
            }

        }


    }

}