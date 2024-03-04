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
        about = "Passionate Android developer with a strong interest in technology. With experience in the field, I have been focusing on improving my technical skills and collaborating on various projects.\n" +
                "I have professional experience in Git, Kotlin, React Native, Swift, Java, Firebase, Scrum, Jira, Jetpack Compose, KMP, Compose Multiplatform. I utilize these technologies to develop efficient and high-quality solutions in software projects. My skills include version control, Android app development, agile project management, creating modern user interfaces, and sharing code across platforms.\n" +
                "My professional journey is characterized by commitment, analytical thinking, and teamwork skills. I seek to understand problems, find innovative solutions, and collaborate to achieve collective success.",
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
        ), socialButtons = SocialButtonColumn(
            title = { type ->
                val value = when (type) {
                    "CV" -> "Resume in Portuguese"
                    "CVENGLISH" -> "CV"
                    "EMAIL" -> "Email"
                    "TELEPHONE" -> "Phone"
                    "LINKEDIN" -> "LinkedIn"
                    "GITHUB" -> "Github"
                    else -> ""
                }
                value
            },
            subtitle = { type ->
                val value = when (type) {
                    "CV" -> "Resume in Portuguese"
                    "CVENGLISH" -> "CV in English"
                    "EMAIL" -> "marcos.renann.br@gmail.com"
                    "TELEPHONE" -> "+55 (88) 997241630"
                    "LINKEDIN" -> "Linkedin.com/in/marcos-renann"
                    "GITHUB" -> "https://github.com/mrenann"
                    else -> ""
                }
                value
            }
        ),
    ),

    contactTab = ContactTabString(
        tabTitle = "Contact me",
        title = "I'm available to discuss collaboration opportunities, exciting projects, or simply to exchange ideas. Looking forward to hearing from you!"
    ),

    projectsTab = ProjectsTabString(tabTitle = "Projects")
)