import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import br.mrenann.dev.portfolio.App
import io.github.aakira.napier.DebugAntilog
import io.github.aakira.napier.Napier
import org.jetbrains.skiko.wasm.onWasmReady

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    onWasmReady {
        CanvasBasedWindow("Portfolio") {
            Napier.base(DebugAntilog())
            App()
            val userAgent = js("navigator.userAgent")
            console.log(userAgent)
        }
    }
}