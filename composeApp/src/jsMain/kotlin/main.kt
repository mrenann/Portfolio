import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.platform.LocalWindowInfo
import androidx.compose.ui.window.CanvasBasedWindow
import br.mrenann.dev.portfolio.App
import org.jetbrains.skiko.wasm.onWasmReady

@OptIn(ExperimentalComposeUiApi::class, ExperimentalMaterial3WindowSizeClassApi::class)
fun main() {
    onWasmReady {
        CanvasBasedWindow("Portfolio") {
            App()
            val userAgent = js("navigator.userAgent")
            console.log(userAgent)
        }
    }
}