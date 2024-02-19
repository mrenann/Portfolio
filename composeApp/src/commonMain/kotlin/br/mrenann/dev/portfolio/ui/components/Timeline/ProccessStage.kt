package br.mrenann.dev.portfolio.ui.components.Timeline

import kotlinx.datetime.LocalDate

data class ProccessStage(
    val title: String,
    val subtitle: String? = null,
    val status: ProccessStageStatus,
    val intervalDate: String? = null
)

enum class ProccessStageStatus {
    FINISHED,
    CURRENT,
    UPCOMING
}