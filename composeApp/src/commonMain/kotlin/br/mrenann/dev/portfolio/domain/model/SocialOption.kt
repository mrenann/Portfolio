package br.mrenann.dev.portfolio.domain.model

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.ui.graphics.vector.ImageVector
import compose.icons.FeatherIcons
import compose.icons.feathericons.Github
import compose.icons.feathericons.Linkedin
import compose.icons.feathericons.Mail
import compose.icons.feathericons.Phone

enum class SocialOption(val title: String, val subtitle: String, val onClick: String,val icon: ImageVector) {
    EMAIL(title = "Email", subtitle = "marcos.renann.br@gmail.com", onClick = "mailto:marcos.renann.br@gmail.com", icon = FeatherIcons.Mail),
    TELEPHONE(title = "Telephone", subtitle = "+55 (88) 997241630", onClick = "https://wa.me/5588997241630", icon = FeatherIcons.Phone),
    LINKEDIN(title = "LinkedIn", subtitle = "Linkedin.com/in/marcos-renann", onClick = "https://Linkedin.com/in/marcos-renann", icon = FeatherIcons.Linkedin),
    GITHUB(title = "GitHub", subtitle = "https://github.com/mrenann", "https://github.com/mrenann", icon = FeatherIcons.Github),
}