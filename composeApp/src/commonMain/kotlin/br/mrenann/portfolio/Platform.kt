package br.mrenann.portfolio

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform