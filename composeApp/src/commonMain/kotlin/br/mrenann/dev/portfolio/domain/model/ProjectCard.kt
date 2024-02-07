package br.mrenann.dev.portfolio.domain.model

import kotlinx.serialization.Serializable

@Serializable
data class ProjectCard(
    var id: String?,
    var nome: String? = "",
    var descricao: String? = "",
    var imagem: String? = null,
    var acesso: String? = "",
)