package br.mrenann.portfolio

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationRail
import androidx.compose.material3.NavigationRailItem
import androidx.compose.material3.NavigationRailItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import br.mrenann.portfolio.core.ui.theme.AppTheme
import br.mrenann.portfolio.core.ui.theme.Primary
import br.mrenann.portfolio.education.presentation.EducationTab
import br.mrenann.portfolio.experience.presentation.ExperienceTab
import br.mrenann.portfolio.home.presentation.HomeTab
import br.mrenann.portfolio.initalScreen.presentation.HomeContent
import cafe.adriel.voyager.navigator.tab.CurrentTab
import cafe.adriel.voyager.navigator.tab.LocalTabNavigator
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabDisposable
import cafe.adriel.voyager.navigator.tab.TabNavigator
import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
@Preview
fun App() {
    val isNotCompact = getSize().widthSizeClass != WindowWidthSizeClass.Compact

    AppTheme {
        TabNavigator(
            HomeTab(), tabDisposable = {
                TabDisposable(
                    navigator = it, tabs = listOf(HomeTab())
                )
            }

        ) {

            if (isNotCompact) {
                Surface(modifier = Modifier.fillMaxSize()) {
                    Scaffold(
                        modifier = Modifier.fillMaxSize(),
                    ) {
                        Column(
                            modifier = Modifier.fillMaxSize().padding(it).padding(
                                start = 80.dp
                            )
                        ) {
                            CurrentTab()
                        }
                    }
                }
                NavigationRail(
                    modifier = Modifier.background(MaterialTheme.colorScheme.surfaceContainer)
                        .offset(x = (-1).dp),
                ) {
                    Column(
                        modifier = Modifier.background(MaterialTheme.colorScheme.surfaceContainer)
                            .fillMaxHeight()
                            .background(MaterialTheme.colorScheme.surfaceContainer),
                        verticalArrangement = Arrangement.spacedBy(
                            12.dp,
                            Alignment.CenterVertically
                        )
                    ) {
                        NavigationRailItems(
                            listOf(
                                HomeTab(),
                                ExperienceTab(),
                                EducationTab()
                            )
                        )

                    }

                }
            } else {
                Scaffold { innerPadding ->
                    Column(
                        modifier = Modifier.padding(top = innerPadding.calculateTopPadding())
                    ) {
                        HomeContent()

                    }

                }
            }

        }
    }
}

@Composable
private fun NavigationRailItems(tabs: List<Tab>) {
    val tabNavigator = LocalTabNavigator.current

    tabs.forEach { tab ->
        TabNavigationItem(tab, tabNavigator.current.key == tab.key)
    }
}

@Composable
fun TabNavigationItem(tab: Tab, selected: Boolean) {
    val tabNavigator = LocalTabNavigator.current

    val selectedColor = Primary
    val unselectedColor = Color.Gray

    NavigationRailItem(
        selected = tabNavigator.current.key == tab.key,
        onClick = { tabNavigator.current = tab },
        icon = {
            Icon(
                painter = tab.options.icon!!,
                contentDescription = tab.options.title,
                tint = if (selected) selectedColor else unselectedColor
            )
        },
        label = {
            Text(
                tab.options.title,
                color = if (selected) selectedColor else Color.Unspecified
            )
        },
        alwaysShowLabel = true,
        colors = NavigationRailItemDefaults.colors(
            selectedIconColor = selectedColor,
            unselectedIconColor = unselectedColor,
            selectedTextColor = selectedColor,
            unselectedTextColor = unselectedColor,
            indicatorColor = Color.Transparent
        )

    )
}

internal expect fun openUrl(url: String?)

@Composable
internal expect fun getSize(): WindowSizeClass