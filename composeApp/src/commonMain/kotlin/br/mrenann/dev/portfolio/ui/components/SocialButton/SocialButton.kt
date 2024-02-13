package br.mrenann.dev.portfolio.ui.components.SocialButton

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp


@Composable
internal fun SocialButton(

) {
    Column(modifier = Modifier.padding(10.dp)) {
        Column(modifier = Modifier.background(color = Color.Black, shape = CircleShape).padding(10.dp)) {
            Icon(imageVector = Icons.Default.Email, contentDescription = "Email icon")
        }
        Text("ABC")
    }

}