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
    val moreTab: MoreTabString,
)

data class MoreTabString(
    val tabTitle: String,
)

data class HomeTabString(
    val tabTitle: String,
    val about: String,
    val aboutTitle: String,
    val aboutSubtitle: String,
    val experience: ExperienceColumn,
    val socialButtons: SocialButtonColumn,
)

data class ProjectsTabString(
    val tabTitle: String,
)

data class ExperienceColumn(
    val stoneTitle: String,
    val stoneSubtitle: String,
    val stoneTime: String,
    val setebitTitle: String,
    val setebitSubtitle: String,
    val setebitTime: String,
    val calangTitle: String,
    val calangSubtitle: String,
    val calangTime: String,
    val matcompTitle: String,
    val matcompSubtitle: String,
    val matcompTime: String,
)

data class SocialButtonColumn(
    val title: (type: String) -> String,
    val subtitle: (type: String) -> String,
)

data class EducationTabString(
    val tabTitle: String,
)

data class ContactTabString(
    val tabTitle: String,
    val title: String
)