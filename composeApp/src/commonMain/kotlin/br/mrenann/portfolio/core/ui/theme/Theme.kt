package br.mrenann.portfolio.core.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = Primary,
    secondary = PurpleGrey40,
    tertiary = Pink40,
    background = Color(0xFF111317),
    onBackground = Color.White,
    onPrimary = Color.White,
    primaryContainer = Color(0xFF1A1B26),
    onPrimaryContainer = Color.White,
    inversePrimary = Color(0xFF1A1B26),
    onSecondary = Color.White,
    secondaryContainer = Color(0xFF1A1B26),
    onSecondaryContainer = Color.White,
    onTertiary = Color.White,
    tertiaryContainer = Color(0xFF1A1B26),
    onTertiaryContainer = Color.White,
    surface = Color(0xFF1A1B26),
    onSurface = Color.White,
    surfaceVariant = Color(0xFF1A1B26),
    onSurfaceVariant = Color.White,
    surfaceTint = Color(0xFF1A1B26),
    inverseSurface = Color(0xFF1A1B26),
    inverseOnSurface = Color(0xFF1A1B26),
    error = Color(0xFF1A1B26),
    onError = Color(0xFF1A1B26),
    errorContainer = Color(0xFF1A1B26),
    onErrorContainer = Color(0xFF1A1B26),
    outline = Color(0xFF1A1B26),
    outlineVariant = Color(0xFF1A1B26),
    scrim = Color.Black,
    surfaceBright = Color(0xFF1A1B26),
    surfaceContainer = Color(0xFF1A1B26),
    surfaceContainerHigh = Color(0xFF1A1B26),
    surfaceContainerHighest = Color(0xFF1A1B26),
    surfaceContainerLow = Color(0xFF1A1B26),
    surfaceContainerLowest = Color(0xFF1A1B26),
    surfaceDim = Color(0xFF1A1B26),
)

private val LightColorScheme = lightColorScheme(
    primary = Primary,
    secondary = PurpleGrey40,
    tertiary = Pink40,
    background = Color(0xFFECEEF1),
    onBackground = Color.Black,
    onPrimary = Color.Black,
    primaryContainer = Color.White,
    onPrimaryContainer = Color.Black,
    inversePrimary = Color.Yellow,
    onSecondary = Color.Black,
    secondaryContainer = Color.Yellow,
    onSecondaryContainer = Color.Black,
    onTertiary = Color.Black,
    tertiaryContainer = Color.Yellow,
    onTertiaryContainer = Color.Black,
    surface = Color.White,
    onSurface = Color.Black,
    surfaceVariant = Color.Yellow,
    onSurfaceVariant = Color.Black,
    surfaceTint = Color.White,

    inverseSurface = Color.Yellow,
    inverseOnSurface = Color.Yellow,
    error = Color.Yellow,
    onError = Color.Yellow,
    errorContainer = Color.Yellow,
    onErrorContainer = Color.Yellow,
    outline = Color(0xFFF2F2F2),
    outlineVariant = Color(0xFFF2F2F2),
    scrim = Color(0xFFF2F2F2),
    surfaceBright = Color.Blue,
    surfaceContainer = Color.White,
    surfaceContainerHigh = Color.White,
    surfaceContainerHighest = Color.White,
    surfaceContainerLow = Color.White,
    surfaceContainerLowest = Color.White,
    surfaceDim = Color.White,

    )

@Composable
fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colors = if (darkTheme) DarkColorScheme else LightColorScheme
    MaterialTheme(
        colorScheme = colors,
        typography = Typography,
        shapes = Shapes,
        content = content,
    )
}