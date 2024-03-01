package br.mrenann.dev.portfolio.resource.strings

import cafe.adriel.lyricist.LyricistStrings

@LyricistStrings(languageTag = Locales.EN, default = false)
internal val EnStrings = Strings(
    educationTab = EducationTabString(tabTitle = "Education"),
    moreTab = MoreTabString(tabTitle = "More"),
    homeTab = HomeTabString(
        tabTitle = "About me",
        aboutTitle = "I'm Marcos Renann",
        aboutSubtitle = "Android Developer",
        about = "\n" +
                "Passionate Android developer with a strong enthusiasm for technology. With extensive experience in the field, I have been focusing on enhancing my technical skills and contributing to various projects. I have professional experience in Git, Kotlin, React Native, Swift, Java, Firebase, Scrum, Jira, Jetpack Compose, KMP, Cross-platform Compose, as well as HTML, CSS, PHP, JavaScript, NODE, MySQL, MongoDB, PostgreSQL. I utilize these technologies to develop efficient and high-quality software solutions. My skills include version control, Android app development, agile project management, creation of modern user interfaces, and cross-platform code sharing. My professional journey is characterized by commitment, analytical thinking, and teamwork skills. I seek to understand problems, find innovative solutions, and collaborate to achieve collective success.",
        experience = ExperienceColumn(
            stoneTitle = "Mobile Applications Developer",
            stoneSubtitle = "Stone CO",
            calangTitle = "Project Director",
            calangSubtitle = "Calang.io Junior Software Development Company",
            matcompTitle = "Director of Technological Development ",
            matcompSubtitle = "MatComp Solutions",
            stoneTime = "2021 - 2023",
            calangTime = "2021 - 2022",
            matcompTime = "2020 - 2021"
        )
    ),

    contactTab = ContactTabString(
        tabTitle = "Contact me",
        title = "I'm available to discuss collaboration opportunities, exciting projects, or simply to exchange ideas. Looking forward to hearing from you!"
    ),

    projectsTab = ProjectsTabString(tabTitle = "Projects")
)