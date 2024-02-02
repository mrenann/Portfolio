import androidx.compose.ui.window.ComposeUIViewController
import br.mrenann.dev.portfolio.App
import platform.UIKit.UIViewController

fun MainViewController(): UIViewController = ComposeUIViewController { App() }
