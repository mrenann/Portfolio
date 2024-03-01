package br.mrenann.dev.portfolio.resource.strings

import cafe.adriel.lyricist.LyricistStrings

@LyricistStrings(languageTag = Locales.PT, default = true)
internal val PtStrings = Strings(
    educationTab = EducationTabString(tabTitle = "Educação"),
    moreTab = MoreTabString(tabTitle = "Mais"),
    homeTab = HomeTabString(
        tabTitle = "Sobre mim",
        aboutTitle = "Eu sou Marcos Renann",
        aboutSubtitle = "Desenvolvedor Android",
        about = "Desenvolvedor Android apaixonado por tecnologia. Com experiência na área, tenho focado em aprimorar minhas habilidades técnicas e colaborar em projetos diversos.\n" +
                "Tenho experiência profissional em Git, Kotlin, React Native, Swift, Java, Firebase, Scrum, Jira, Jetpack Compose, KMP, Compose Multiplataforma, assim como HTML, CSS, PHP, JavaScript, PHP, NODE, MYSQL, MongoDB, PostgreSQL. Utilizo essas tecnologias para desenvolver soluções eficientes e de alta qualidade em projetos de software. Minhas habilidades incluem controle de versão, desenvolvimento de aplicativos Android, gerenciamento de projetos ágeis, criação de interfaces de usuário modernas e compartilhamento de código entre plataformas.\n" +
                "Minha trajetória profissional é caracterizada pelo comprometimento, pensamento analítico e habilidade de trabalho em equipe. Busco compreender os problemas, encontrar soluções inovadoras e colaborar para alcançar o sucesso coletivo.\n",
        experience = ExperienceColumn(
            stoneTitle = "Desenvolvedor de Aplicativos Móveis",
            stoneSubtitle = "Stone CO",
            calangTitle = "Diretor de Projetos",
            calangSubtitle = "Calang.io Empresa Júnior de Desenvolvimento de Software",
            matcompTitle = "Diretor de Desenvolvimento Tecnológico",
            matcompSubtitle = "MatComp Soluções",
            stoneTime = "2021 - 2023",
            calangTime = "2021 - 2022",
            matcompTime = "2020 - 2021"
        )
    ),
    contactTab = ContactTabString(
        tabTitle = "Contato",
        title = "Estou Disponível para Discutir Oportunidades de Colaboração, Projetos Empolgantes ou Simplesmente para Trocar Ideias. Aguardo o seu Contato!"
    ),
    projectsTab = ProjectsTabString(tabTitle = "Projetos")
)