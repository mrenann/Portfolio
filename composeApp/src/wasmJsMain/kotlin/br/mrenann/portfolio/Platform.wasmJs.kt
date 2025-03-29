package br.mrenann.portfolio

import kotlinx.browser.window

class WasmPlatform : Platform {
    override val name: String = "Web with Kotlin/Wasm"
}

actual fun getPlatform(): Platform = WasmPlatform()

internal actual fun openUrl(url: String?) {
    url?.let { window.open(it) }
}