package br.mrenann.dev.portfolio.resource.strings

data class Tabs(
    val profile: String,
    val projects: String,
    val skills: String,
    val experience: String,
)

data class Strings(
    val educationTab: EducationTabString,
    val homeTab: HomeTabString,
    val contactTab: ContactTabString,
    val projectsTab: ProjectsTabString,
)

data class HomeTabString(
    val tabTitle: String,
    val about: String
)

data class ProjectsTabString(
    val tabTitle: String,
)

data class EducationTabString(
    val tabTitle: String,
)

data class ContactTabString(
    val tabTitle: String,
    val title: String
)