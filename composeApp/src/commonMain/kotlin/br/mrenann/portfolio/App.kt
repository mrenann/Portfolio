package br.mrenann.portfolio

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import br.mrenann.portfolio.core.ui.theme.AppTheme
import br.mrenann.portfolio.home.presentation.HomeTab
import br.mrenann.portfolio.initalScreen.presentation.HomeContent
import cafe.adriel.voyager.navigator.tab.TabDisposable
import cafe.adriel.voyager.navigator.tab.TabNavigator
import org.jetbrains.compose.ui.tooling.preview.Preview

@Composable
@Preview
fun App() {
    AppTheme {


        TabNavigator(
            HomeTab(), tabDisposable = {
                TabDisposable(
                    navigator = it, tabs = listOf(HomeTab())
                )
            }

        ) {
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