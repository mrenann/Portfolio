package br.mrenann.dev.portfolio.domain.model

import androidx.compose.ui.graphics.vector.ImageVector
import cafe.adriel.lyricist.rememberStrings
import cafe.adriel.lyricist.strings
import compose.icons.FeatherIcons
import compose.icons.feathericons.FileText
import compose.icons.feathericons.Github
import compose.icons.feathericons.Linkedin
import compose.icons.feathericons.Mail
import compose.icons.feathericons.Phone

enum class SocialOption(
    val onClick: String,
    val icon: ImageVector
) {
    CV(
        onClick = "https://drive.google.com/file/d/1X6FLSHdBPEZuFtoEc6YKuHVCsZOaBLZL/view?usp=drive_link",
        icon = FeatherIcons.FileText
    ),
    CVENGLISH(
        onClick = "https://drive.google.com/file/d/1BukOnfXD3WQBCkJ7Kt0jSX5G-c9HXeie/view?usp=drive_link",
        icon = FeatherIcons.FileText
    ),
    EMAIL(
        onClick = "mailto:marcos.renann.br@gmail.com",
        icon = FeatherIcons.Mail
    ),
    TELEPHONE(
        onClick = "https://wa.me/5588997241630",
        icon = FeatherIcons.Phone
    ),
    LINKEDIN(
        onClick = "https://Linkedin.com/in/marcos-renann",
        icon = FeatherIcons.Linkedin
    ),
    GITHUB(
        onClick = "https://github.com/mrenann",
        icon = FeatherIcons.Github
    )
}