package br.mrenann.portfolio.initalScreen.presentation

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.NavigationBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import cafe.adriel.voyager.navigator.tab.LocalTabNavigator
import cafe.adriel.voyager.navigator.tab.Tab

@Composable
fun BottomNavigationBar(tabs: List<Tab>) {
    val tabNavigator = LocalTabNavigator.current

    NavigationBar(
        modifier = Modifier.clip(RoundedCornerShape(topStart = 8.dp, topEnd = 8.dp)),
    ) {
        tabs.forEach { tab ->
            TabNavigationItem(
                tab = tab,
                selected = tabNavigator.current.key == tab.key,
                onClick = {
                    tabNavigator.current = tab
                }
            )
        }
    }
}