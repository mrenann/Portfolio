package br.mrenann.portfolio.home.presentation

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
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
import br.mrenann.portfolio.core.ui.theme.Primary
import br.mrenann.portfolio.getSize
import br.mrenann.portfolio.openUrl
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.SimpleIcons
import compose.icons.feathericons.AlignJustify
import compose.icons.feathericons.Github
import compose.icons.feathericons.Gitlab
import compose.icons.feathericons.Linkedin
import compose.icons.feathericons.Mail
import compose.icons.feathericons.MapPin
import compose.icons.feathericons.Phone
import compose.icons.feathericons.User
import compose.icons.simpleicons.Firebase
import compose.icons.simpleicons.Java
import compose.icons.simpleicons.Jetbrains
import compose.icons.simpleicons.Kotlin
import compose.icons.simpleicons.React
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
        val isMedium = getSize().widthSizeClass == WindowWidthSizeClass.Medium
        val isExpanded = getSize().widthSizeClass == WindowWidthSizeClass.Expanded
        LazyColumn(
            modifier = Modifier.fillMaxSize()
        ) {
            item {

                if (isNotCompact) {
                    Row(
                        modifier = Modifier.padding(
                            horizontal = if (isExpanded) 108.dp else if (isMedium) 12.dp else 16.dp,
                            vertical = if (isExpanded) 24.dp else if (isMedium) 16.dp else 8.dp,
                        ).fillMaxHeight(),
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Header()
                        Column {
                            AboutMe()
                            Skills()
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
    private fun Skills() {
        Column(
            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 4.dp)
                .background(
                    MaterialTheme.colorScheme.surfaceContainer, RoundedCornerShape(16.dp)
                )
                .padding(12.dp)
        ) {
            Text(text = "What i Do", fontWeight = FontWeight.Bold, fontSize = 22.sp)
            Text(
                text = "I specialize in mobile development, crafting high-performance applications with React Native and Kotlin (Jetpack Compose).",
                textAlign = TextAlign.Justify
            )
            Text(
                text = "React Native & Kotlin – Building robust mobile applications with modern UI/UX principles.",
                textAlign = TextAlign.Justify
            )
            Text(
                text = "Jetpack Compose – Creating intuitive, scalable, and maintainable Android apps.",
                textAlign = TextAlign.Justify
            )
            Text(
                text = "iOS & Swift (KMP) – Learning and improving knowledge of iOS and Kotlin Multiplatform.",
                textAlign = TextAlign.Justify
            )
            Text(
                text = "Architecture & Best Practices – Designing scalable architectures following MVVM, Clean Architecture, and SOLID principles.",
                textAlign = TextAlign.Justify
            )
            Spacer(Modifier.size(12.dp))
            Text(text = "Skills", fontWeight = FontWeight.Bold, fontSize = 22.sp)
            Spacer(Modifier.size(6.dp))
            Row(
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Icon(
                    tint = Primary,
                    imageVector = SimpleIcons.Kotlin,
                    contentDescription = null,
                    modifier = Modifier.size(32.dp),

                    )
                Icon(
                    tint = Primary,
                    imageVector = SimpleIcons.Java,
                    contentDescription = null,
                    modifier = Modifier.size(32.dp),

                    )
                Icon(
                    tint = Primary,
                    imageVector = SimpleIcons.Jetbrains,
                    contentDescription = null,
                    modifier = Modifier.size(32.dp),

                    )
                Icon(
                    tint = Primary,
                    imageVector = SimpleIcons.Firebase,
                    contentDescription = null,
                    modifier = Modifier.size(32.dp),

                    )
                Icon(
                    tint = Primary,
                    imageVector = SimpleIcons.React,
                    contentDescription = null,
                    modifier = Modifier.size(32.dp),

                    )
            }


        }
    }


    @Composable
    private fun Header() {
        val isNotCompact = getSize().widthSizeClass != WindowWidthSizeClass.Compact
        Column(
            modifier = Modifier
                .then(
                    if (isNotCompact.not()) Modifier.fillMaxWidth() else Modifier
                )
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
                    Column {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(2.dp)
                        ) {
                            Icon(
                                FeatherIcons.MapPin,
                                contentDescription = null,
                                modifier = Modifier.size(12.dp),

                                )
                            Text(
                                text = "Brazil",
                                fontSize = 12.sp,
                            )

                        }
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(2.dp)
                        ) {
                            Icon(
                                FeatherIcons.Phone,
                                contentDescription = null,
                                modifier = Modifier.size(12.dp),

                                )
                            Text(
                                text = "+55 88997241630",
                                fontSize = 12.sp,
                            )

                        }
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(2.dp)
                        ) {
                            Icon(
                                FeatherIcons.Mail,
                                contentDescription = null,
                                modifier = Modifier.size(12.dp),

                                )
                            Text(
                                text = "marcos.renann.br@gmail.com",
                                fontSize = 12.sp,
                            )

                        }
                    }
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
