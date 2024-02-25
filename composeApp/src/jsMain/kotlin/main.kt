import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import br.mrenann.dev.portfolio.App
import org.jetbrains.skiko.wasm.onWasmReady

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    onWasmReady {
        CanvasBasedWindow("Portfolio") {
            App()
            val userAgent = js("navigator.userAgent")
            console.log(userAgent)
        }
    }
}