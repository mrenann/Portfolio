package br.mrenann.portfolio.experience.presentation

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.mrenann.portfolio.components.timeline.CoursesColumn
import br.mrenann.portfolio.components.timeline.ProccessStage
import br.mrenann.portfolio.components.timeline.ProccessStageStatus
import br.mrenann.portfolio.getSize
import br.mrenann.portfolio.openUrl
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabOptions
import compose.icons.FeatherIcons
import compose.icons.feathericons.Code
import compose.icons.feathericons.Github
import compose.icons.feathericons.Play

class ExperienceTab() : Tab {
    override val options: TabOptions
        @Composable
        get() {
            val title = "Experience"
            val icon = rememberVectorPainter(FeatherIcons.Code)

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
        val courses =
            arrayOf(
                ProccessStage(
                    title = "Android Developer",
                    subtitle = "Setebit",
                    description = "React Native",
                    intervalDate = "2023",
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Android Developer",
                    subtitle = "Stone CO",
                    description = "Android | Kotlin | KMP | Jetpack Compose",
                    intervalDate = "2021-2023",
                    status = ProccessStageStatus.FINISHED,
                ),
                ProccessStage(
                    title = "Mobile Developer",
                    subtitle = "Calang.Io",
                    description = "Android | Kotlin | Leadership",
                    intervalDate = "2021-2022",
                    status = ProccessStageStatus.FINISHED,
                ),
            )
        val isNotCompact = getSize().widthSizeClass != WindowWidthSizeClass.Compact
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(vertical = 6.dp)
                .then(if (isNotCompact) Modifier.padding(24.dp) else Modifier)

        ) {
            item {
                Text(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    text = "Experience",
                    fontWeight = FontWeight.Bold,
                    fontSize = 22.sp
                )

                CoursesColumn(courses)

                Text(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    text = "Projects",
                    fontWeight = FontWeight.Bold,
                    fontSize = 22.sp
                )

                Column(
                    Modifier.padding(horizontal = 12.dp).padding(top = 12.dp),
                    verticalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    Column(
                        Modifier
                            .fillMaxWidth()
                            .background(
                                MaterialTheme.colorScheme.surfaceContainer,
                                RoundedCornerShape(8.dp)
                            )
                            .clickable {
                                openUrl("https://github.com/mrenann/ecommerce")
                            }
                            .padding(12.dp)
                    ) {
                        Row {
                            Icon(
                                modifier = Modifier.padding(10.dp),
                                imageVector = FeatherIcons.Github,
                                contentDescription = null
                            )
                            Column {
                                Text(
                                    "Ecommerce App",
                                    fontSize = 14.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                Text(
                                    "Android | Kotlin | Firebase | ROOM | MVVM | Jetpack Compose | Multi modular",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.SemiBold

                                )
                                Text(
                                    "Designed and developed a complete ecommerce experience",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                                Text(
                                    "Product Browsing, favorites, cart management, purchases, coupons",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                                Text("Firebase integration", fontSize = 12.sp, lineHeight = 12.sp)
                                Text(
                                    "Project multi modulat for better maintainability",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                            }
                        }


                    }

                    Column(
                        Modifier
                            .fillMaxWidth()
                            .background(
                                MaterialTheme.colorScheme.surfaceContainer,
                                RoundedCornerShape(8.dp)
                            )
                            .clickable {
                                openUrl("https://github.com/mrenann/globoplay-mobile")
                            }
                            .padding(12.dp)
                    ) {
                        Row {
                            Icon(
                                modifier = Modifier.padding(10.dp),
                                imageVector = FeatherIcons.Github,
                                contentDescription = null
                            )
                            Column {
                                Text(
                                    "GloboPlay Clone App",
                                    fontSize = 14.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                Text(
                                    "Android | Kotlin | ROOM | MVVM | Jetpack Compose",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.SemiBold

                                )
                                Text(
                                    "Integration with TMDB API",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                                Text(
                                    "Unit Tests and Github Actions for CI/CD",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                            }
                        }


                    }

                    Column(
                        Modifier
                            .fillMaxWidth()
                            .background(
                                MaterialTheme.colorScheme.surfaceContainer,
                                RoundedCornerShape(8.dp)
                            )
                            .clickable {
                                openUrl("https://github.com/mrenann/globoplay-mobile")
                            }
                            .padding(12.dp)
                    ) {
                        Row {
                            Icon(
                                modifier = Modifier.padding(10.dp),
                                imageVector = FeatherIcons.Github,
                                contentDescription = null
                            )
                            Column {
                                Text(
                                    "Portfolio",
                                    fontSize = 14.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.Bold
                                )
                                Text(
                                    "Kotlin | MVVM | Jetpack Compose | KMP",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp,
                                    fontWeight = FontWeight.SemiBold

                                )
                                Text(
                                    "Multiplatform project for iOS, Android, Desktop and Web",
                                    fontSize = 12.sp,
                                    lineHeight = 12.sp
                                )
                            }
                        }


                    }

                    Row(
                        horizontalArrangement = Arrangement.spacedBy(6.dp),
                    ) {
                        Column(
                            Modifier
                                .weight(.5F)
                                .background(
                                    MaterialTheme.colorScheme.surfaceContainer,
                                    RoundedCornerShape(8.dp)
                                )
                                .clickable {
                                    openUrl("https://play.google.com/store/apps/details?id=com.dh.madeinbrasil")
                                }
                                .padding(12.dp)
                        ) {
                            Row {
                                Icon(
                                    modifier = Modifier.padding(10.dp),
                                    imageVector = FeatherIcons.Play,
                                    contentDescription = null
                                )
                                Column {
                                    Text(
                                        "Made In Brasil",
                                        fontSize = 14.sp,
                                        lineHeight = 12.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                    Text("Entertainment", fontSize = 12.sp, lineHeight = 12.sp)
                                    Text("+10 Downloads", fontSize = 12.sp, lineHeight = 12.sp)
                                }
                            }


                        }
                        Column(
                            Modifier
                                .weight(.5F)
                                .background(
                                    MaterialTheme.colorScheme.surfaceContainer,
                                    RoundedCornerShape(8.dp)
                                )
                                .clickable {
                                    openUrl("https://play.google.com/store/apps/details?id=com.projetomob")

                                }
                                .padding(12.dp)
                        ) {
                            Row {
                                Icon(
                                    modifier = Modifier.padding(10.dp),
                                    imageVector = FeatherIcons.Play,
                                    contentDescription = null
                                )
                                Column {
                                    Text(
                                        "Orcim",
                                        fontSize = 14.sp,
                                        lineHeight = 12.sp,
                                        fontWeight = FontWeight.Bold
                                    )
                                    Text("Education", fontSize = 12.sp, lineHeight = 12.sp)
                                    Text("+10 Downloads", fontSize = 12.sp, lineHeight = 12.sp)
                                }
                            }
                        }
                    }
                }
            }

        }

    }

}