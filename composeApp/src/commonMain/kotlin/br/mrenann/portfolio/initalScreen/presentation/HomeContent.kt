package br.mrenann.portfolio.initalScreen.presentation

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import br.mrenann.portfolio.education.presentation.EducationTab
import br.mrenann.portfolio.experience.presentation.ExperienceTab
import br.mrenann.portfolio.home.presentation.HomeTab
import cafe.adriel.voyager.navigator.tab.CurrentTab

@Composable
fun HomeContent() {
    val tabs = listOf(HomeTab(), ExperienceTab(), EducationTab())
    Surface(modifier = Modifier.fillMaxSize()) {
        Scaffold(
            modifier = Modifier.fillMaxSize(),
            bottomBar = {
                BottomNavigationBar(tabs)
            },
        ) { innerPadding ->
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(
                        PaddingValues(
                            top = 0.dp,
                            start = innerPadding.calculateStartPadding(
                                layoutDirection = LayoutDirection.Ltr
                            ),
                            bottom = innerPadding.calculateBottomPadding(),
                            end = innerPadding.calculateEndPadding(
                                layoutDirection = LayoutDirection.Ltr
                            ),
                        )
                    )
            ) {

                CurrentTab()
            }
        }
    }

}