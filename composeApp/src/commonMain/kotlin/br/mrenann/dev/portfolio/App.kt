package br.mrenann.dev.portfolio

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationRail
import androidx.compose.material3.NavigationRailItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.theme.AppTheme
import br.mrenann.dev.portfolio.ui.tabs.ContactTab
import br.mrenann.dev.portfolio.ui.tabs.EducationTab
import br.mrenann.dev.portfolio.ui.tabs.ProjectsTab
import br.mrenann.dev.portfolio.ui.tabs.HomeTab
import cafe.adriel.voyager.navigator.tab.CurrentTab
import cafe.adriel.voyager.navigator.tab.LocalTabNavigator
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabDisposable
import cafe.adriel.voyager.navigator.tab.TabNavigator

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal fun App(
    systemAppearance: (isLight: Boolean) -> Unit = {}
) = AppTheme {
    val windowClass = calculateWindowSizeClass()
    val showNavigationRail = windowClass.widthSizeClass != WindowWidthSizeClass.Compact
    TabNavigator(HomeTab, tabDisposable = {
        TabDisposable(
            navigator = it, tabs = listOf(HomeTab, ProjectsTab, EducationTab, ContactTab)
        )
    }) {
        Surface(modifier = Modifier.fillMaxSize()) {
            Scaffold(modifier = Modifier.fillMaxSize(), bottomBar = {
                if (!showNavigationRail) {
                    NavigationBar {
                        TabNavigationItem(HomeTab)
                        TabNavigationItem(ProjectsTab)
                        TabNavigationItem(EducationTab)
                        TabNavigationItem(ContactTab)
                    }
                }
            }) {
                Column(
                    modifier = Modifier.fillMaxSize().padding(it).padding(
                        start = if (showNavigationRail) 80.dp else 0.dp
                    )
                ) {
                    CurrentTab()
                }
            }
        }
        if (showNavigationRail) {
            NavigationRail(header = { TabNavigationItem(HomeTab) }, content = {
                TabNavigationItem(ProjectsTab)
                TabNavigationItem(EducationTab)
                TabNavigationItem(ContactTab)
            })
        }
    }
}

@Composable
fun RowScope.TabNavigationItem(tab: Tab) {
    val tabNavigator = LocalTabNavigator.current

    NavigationBarItem(
        selected = tabNavigator.current.key == tab.key,
        onClick = { tabNavigator.current = tab },
        icon = { Icon(painter = tab.options.icon!!, contentDescription = tab.options.title) },
        label = { Text(tab.options.title) },
    )
}

@Composable
fun TabNavigationItem(tab: Tab) {
    val tabNavigator = LocalTabNavigator.current

    NavigationRailItem(
        selected = tabNavigator.current.key == tab.key,
        onClick = { tabNavigator.current = tab },
        icon = { Icon(painter = tab.options.icon!!, contentDescription = tab.options.title) },
        label = { Text(tab.options.title) },
    )
}


internal expect fun openUrl(url: String?)