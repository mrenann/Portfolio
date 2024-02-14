package br.mrenann.dev.portfolio.ui.components.SocialButton

import androidx.compose.foundation.background
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


@Composable
internal fun SocialButton(
    socialOption: SocialOption
) {
    Column(modifier = Modifier.padding(10.dp)) {
        Column(modifier = Modifier.align(Alignment.CenterHorizontally).padding(10.dp)) {
            Column(
                modifier = Modifier.background(color = Color.Black, shape = CircleShape)
            ) {
                Icon(modifier = Modifier.padding(5.dp), imageVector = Icons.Default.Email, contentDescription = "Email icon", tint = Color.White)
            }
            Text(text = socialOption.title, textAlign = TextAlign.Center)
            Text(text = socialOption.subtitle, textAlign = TextAlign.Center)
        }


    }

}