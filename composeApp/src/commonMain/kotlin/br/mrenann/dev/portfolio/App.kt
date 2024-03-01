package br.mrenann.dev.portfolio

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.FabPosition
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
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
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.platform.LocalWindowInfo
import androidx.compose.ui.unit.dp
import br.mrenann.dev.portfolio.resource.theme.AppTheme
import br.mrenann.dev.portfolio.ui.tabs.EducationTab
import br.mrenann.dev.portfolio.ui.tabs.ProjectsTab
import br.mrenann.dev.portfolio.ui.tabs.HomeTab
import br.mrenann.dev.portfolio.ui.tabs.MoreTab
import cafe.adriel.voyager.navigator.tab.CurrentTab
import cafe.adriel.voyager.navigator.tab.LocalTabNavigator
import cafe.adriel.voyager.navigator.tab.Tab
import cafe.adriel.voyager.navigator.tab.TabDisposable
import cafe.adriel.voyager.navigator.tab.TabNavigator
import compose.icons.FeatherIcons
import compose.icons.SimpleIcons
import compose.icons.feathericons.MoreHorizontal
import compose.icons.simpleicons.Android
import compose.icons.simpleicons.Java

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal fun App(
    systemAppearance: (isLight: Boolean) -> Unit = {}
) = AppTheme {
    TabNavigator(HomeTab, tabDisposable = {
        TabDisposable(
            navigator = it, tabs = listOf(HomeTab, ProjectsTab, EducationTab)
        )
    }) {
        AppContent(isHorizontal())
    }
}


@Composable
private fun AppContent(showNavigationRail: Boolean) {
    val tabs = listOf(HomeTab, ProjectsTab, EducationTab)
    Surface(modifier = Modifier.fillMaxSize()) {
        Scaffold(
            modifier = Modifier.fillMaxSize(),
            bottomBar = { if (!showNavigationRail) BottomNavigationBar(tabs) },
            floatingActionButtonPosition = FabPosition.Center
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
                .offset(x = (-1).dp),
            header = {
                IconButton(onClick = {openUrl("https://drive.google.com/file/d/1_uQZDbNHYlHY0f8hFVvbdvLP3441X32w/view?usp=drive_link")}) {
                    Icon(
                        painter = rememberVectorPainter(SimpleIcons.Android),
                        contentDescription = ""
                    )
                }
                IconButton(onClick = {openUrl("https://drive.google.com/file/d/1_uQZDbNHYlHY0f8hFVvbdvLP3441X32w/view?usp=drive_link")}) {
                    Icon(
                        painter = rememberVectorPainter(SimpleIcons.Java),
                        contentDescription = ""
                    )
                }
            }
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
    NavigationBar(
        modifier = Modifier.clip(RoundedCornerShape(20.dp, 20.dp)),
    ) {
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

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
internal expect fun isHorizontal(): Boolean