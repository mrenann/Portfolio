package br.mrenann.portfolio.components.timeline


data class ProccessStage(
    val title: String,
    val subtitle: String? = null,
    val description: String? = null,
    val isEducation: Boolean = false,
    val status: ProccessStageStatus,
    val intervalDate: String? = null,
    val isCourse: Boolean = false
)

enum class ProccessStageStatus {
    FINISHED,
    CURRENT,
    UPCOMING
}