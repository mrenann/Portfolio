package br.mrenann.dev.portfolio.domain.model

import kotlinx.serialization.Serializable

@Serializable
data class ProjectCard(
    val id: String?,
    val nome: String? = "",
    val descricao: String? = "",
    val imagem: String = "",
    val acesso: String? = "",
    val categoria: String = ""
)