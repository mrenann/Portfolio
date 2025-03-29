package br.mrenann.portfolio

import android.app.Activity
import android.app.Application
import android.content.Intent
import android.net.Uri
import androidx.compose.material3.windowsizeclass.ExperimentalMaterial3WindowSizeClassApi
import androidx.compose.material3.windowsizeclass.WindowSizeClass
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext

class AndroidApp : Application() {
    companion object {
        lateinit var INSTANCE: AndroidApp
    }

    override fun onCreate() {
        super.onCreate()
        INSTANCE = this
    }
}


internal actual fun openUrl(url: String?) {
    val uri = url?.let { Uri.parse(it) } ?: return
    val intent = Intent().apply {
        action = Intent.ACTION_VIEW
        data = uri
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    AndroidApp.INSTANCE.startActivity(intent)
}

@OptIn(ExperimentalMaterial3WindowSizeClassApi::class)
@Composable
actual fun getSize(): WindowSizeClass {
    val context = LocalContext.current
    val activity = context as? Activity ?: throw IllegalStateException("Context is not an Activity")
    return calculateWindowSizeClass(activity)
}
