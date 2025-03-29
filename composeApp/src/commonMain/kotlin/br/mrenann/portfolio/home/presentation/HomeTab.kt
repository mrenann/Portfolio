package br.mrenann.portfolio.home.presentation

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.portfolio.getSize
import br.mrenann.portfolio.openUrl
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.AlignJustify
import compose.icons.feathericons.Github
import compose.icons.feathericons.Gitlab
import compose.icons.feathericons.Linkedin
import compose.icons.feathericons.Mail
import compose.icons.feathericons.Phone
import compose.icons.feathericons.User
import org.jetbrains.compose.resources.painterResource
import portfolio.composeapp.generated.resources.Res
import portfolio.composeapp.generated.resources.myphoto

class HomeTab() : Tab {
    override val options: TabOptions
        @Composable
        get() {
            val title = "About Me"
            val icon = rememberVectorPainter(FeatherIcons.User)

            return remember {
                TabOptions(
                    index = 0u,
                    title = title,
                    icon = icon
                )
            }
        }

    @Suppress("MemberExtensionConflict")
    @Composable
    override fun Content() {
        val isNotCompact = getSize().widthSizeClass != WindowWidthSizeClass.Compact
        val isMedium = getSize().widthSizeClass != WindowWidthSizeClass.Compact
        val isExpanded = getSize().widthSizeClass != WindowWidthSizeClass.Expanded
        LazyColumn(
            modifier = Modifier.fillMaxSize()
        ) {
            item {

                if (isNotCompact) {
                    Row(
                        modifier = Modifier.padding(
                            horizontal = if (isExpanded) 108.dp else if (isMedium) 32.dp else 16.dp,
                            vertical = if (isExpanded) 24.dp else if (isMedium) 16.dp else 8.dp,
                        ),
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Header()
                        Column {
                            AboutMe()
                            Contacts()
                        }
                    }
                } else {
                    Column {
                        Header()
                        AboutMe()
                        Contacts()
                    }


                }

            }


        }
    }

    @Composable
    private fun Contacts() {
        Column(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 4.dp)
                .background(
                    MaterialTheme.colorScheme.surfaceContainer, RoundedCornerShape(16.dp)
                )
                .padding(12.dp),
            verticalArrangement = Arrangement.spacedBy(2.dp)
        ) {
            Text(
                text = "Contact",
                fontWeight = FontWeight.Bold,
                fontSize = 22.sp,
                modifier = Modifier.padding(bottom = 8.dp)
            )
            Row(
                horizontalArrangement = Arrangement.spacedBy(1.dp)
            ) {
                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable {},
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.AlignJustify,
                        contentDescription = null
                    )
                    Text("Currículo")
                }

                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable {},
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.AlignJustify,
                        contentDescription = null
                    )
                    Text("CV")
                }

            }

            Row(
                horizontalArrangement = Arrangement.spacedBy(1.dp)
            ) {
                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable {},
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.AlignJustify,
                        contentDescription = null
                    )
                    Text("Resume")
                }

                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable {
                            openUrl("https://www.linkedin.com/in/marcos-renann/")
                        },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.Linkedin,
                        contentDescription = null
                    )
                    Text("LinkedIn")
                }

            }

            Row(
                horizontalArrangement = Arrangement.spacedBy(1.dp)
            ) {
                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable {
                            openUrl("mailto:marcos.renann.br@gmail.com")
                        },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.Mail,
                        contentDescription = null
                    )
                    Text("Email")
                }

                Row(
                    modifier = Modifier.weight(1F).clip(RoundedCornerShape(8.dp))
                        .clickable { openUrl("https://wa.me/5588997241630") },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.Phone,
                        contentDescription = null
                    )
                    Text("Phone")
                }

            }

            Row(
                horizontalArrangement = Arrangement.spacedBy(1.dp)
            ) {
                Row(
                    modifier = Modifier.weight(.5F).clip(RoundedCornerShape(8.dp))
                        .clickable {
                            openUrl("https://github.com/mrenann")
                        },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.Github,
                        contentDescription = null
                    )
                    Text("GitHub")
                }

                Row(
                    modifier = Modifier.weight(.5F).clip(RoundedCornerShape(8.dp))
                        .clickable {
                            openUrl("https://gitlab.com/mrenann")

                        },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Icon(
                        modifier = Modifier.background(
                            MaterialTheme.colorScheme.background,
                            RoundedCornerShape(8.dp)
                        ).padding(10.dp),
                        imageVector = FeatherIcons.Gitlab,
                        contentDescription = null
                    )
                    Text("GitLab")
                }


            }

        }
    }

    @Composable
    private fun AboutMe() {
        Column(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 4.dp)
                .background(
                    MaterialTheme.colorScheme.surfaceContainer, RoundedCornerShape(16.dp)
                )
                .padding(12.dp)
        ) {
            Text(text = "About Me", fontWeight = FontWeight.Bold, fontSize = 22.sp)
            Text(
                text = buildAnnotatedString {
                    append("Android Developer specialized in ")
                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                        append("Kotlin")
                    }
                    append(", focused on building high-performance, scalable native apps using ")
                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                        append("Jetpack, Coroutines, ")
                    }
                    append("and best development practices. I prioritize ")
                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                        append("user experience, performance optimization, ")
                    }
                    append("and clean, maintainable code.\n")

                    append("I follow an ")
                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                        append("agile development cycle, ")
                    }
                    append("actively participating in all project phases—from conception to post-launch monitoring—ensuring ")
                    withStyle(SpanStyle(fontWeight = FontWeight.Bold)) {
                        append("continuous improvements ")
                    }
                    append("and adaptability to market demands.")
                },
                textAlign = TextAlign.Justify
            )

        }
    }


    @Composable
    private fun Header() {
        val isNotCompact = getSize().widthSizeClass != WindowWidthSizeClass.Compact
        Column(
            modifier = Modifier
                .then(if (isNotCompact.not()) Modifier.fillMaxWidth() else Modifier)
                .padding(horizontal = 12.dp, vertical = 4.dp)
                .background(
                    MaterialTheme.colorScheme.surfaceContainer,
                    RoundedCornerShape(16.dp)
                )
        ) {
            if (isNotCompact) {
                Column(
                    modifier = Modifier.padding(12.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    HeaderContent()

                }
            } else {
                Row(
                    modifier = Modifier.padding(12.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    HeaderContent()
                }
            }

        }
    }

    @Composable
    private fun HeaderContent() {
        Image(
            modifier = Modifier.size(96.dp).clip(RoundedCornerShape(12.dp)),
            contentScale = ContentScale.Crop,
            painter = painterResource(Res.drawable.myphoto),
            contentDescription = null
        )

        Column {
            Text(
                text = "Marcos Renann",
                fontWeight = FontWeight.Bold,
                fontSize = 22.sp
            )
            Text("Android Developer")
            Text(
                text = "Kotlin | Java | React Native",
                fontSize = 12.sp,
                modifier = Modifier
                    .padding(top = 4.dp)
                    .background(
                        MaterialTheme.colorScheme.background,
                        RoundedCornerShape(6.dp)
                    )
                    .padding(vertical = 1.dp, horizontal = 4.dp)
            )
        }
    }
}
