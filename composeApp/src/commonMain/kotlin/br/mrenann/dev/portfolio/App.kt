package br.mrenann.dev.portfolio

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.resource.theme.AppTheme
import br.mrenann.dev.portfolio.ui.tabs.ContactTab
import br.mrenann.dev.portfolio.ui.tabs.EducationTab
import br.mrenann.dev.portfolio.ui.tabs.ProjectsTab
import br.mrenann.dev.portfolio.ui.tabs.HomeTab
import cafe.adriel.voyager.navigator.tab.CurrentTab
import cafe.adriel.voyager.navigator.tab.LocalTabNavigator
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabDisposable
import cafe.adriel.voyager.navigator.tab.TabNavigator
import io.github.aakira.napier.log

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal fun App(
    systemAppearance: (isLight: Boolean) -> Unit = {}
) = AppTheme {
    val windowClass = calculateWindowSizeClass()
    val showNavigationRail = windowClass.widthSizeClass != WindowWidthSizeClass.Compact
    log { windowClass.toString() }
    log(tag = "your tag") { "top-asasasas" }
    TabNavigator(HomeTab, tabDisposable = {
        TabDisposable(
            navigator = it, tabs = listOf(HomeTab, ProjectsTab, EducationTab, ContactTab)
        )
    }) {
        AppContent(showNavigationRail)
    }
}


@Composable
private fun AppContent(showNavigationRail: Boolean) {
    val tabs = listOf(HomeTab, ProjectsTab, EducationTab, ContactTab)
    Surface(modifier = Modifier.fillMaxSize()) {
        Scaffold(
            modifier = Modifier.fillMaxSize(),
            bottomBar = { if (!showNavigationRail) BottomNavigationBar(tabs) }
        ) {
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
        NavigationRail(
            modifier = Modifier.background(MaterialTheme.colorScheme.inverseOnSurface)
                .offset(x = (-1).dp)
        ) {
            Column(
                modifier = Modifier.fillMaxHeight(),
                verticalArrangement = Arrangement.spacedBy(12.dp, Alignment.CenterVertically)
            ) {
                NavigationRailItems(tabs)
            }
        }
    }
}

@Composable
private fun BottomNavigationBar(tabs: List<Tab>) {
    NavigationBar {
        tabs.forEach { tab ->
            TabNavigationItem(tab)
        }
    }
}

@Composable
private fun NavigationRailItems(tabs: List<Tab>) {
    tabs.forEach { tab ->
        TabNavigationItem(tab)
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