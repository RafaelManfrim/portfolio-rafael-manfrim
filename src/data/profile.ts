export type SocialLink = {
  href: string
  label: string
  icon: React.ReactNode
}

export type HistoryEntry = {
  label: string
  description: string
}

export type FormationTag = 'Front-End' | 'Back-End' | 'Mobile' | 'Outros'

export type Formation = {
  title: string
  tag: FormationTag
  school: string
  description: string
  certificate: string
}

export const bio = 'Desde criança sempre se encantou por tecnologia, o que o levou a cursar desenvolvimento de sistemas e se tornar um programador de destaque, após pouco tempo de curso já estava atuando no mercado de trabalho como desenvolvedor front-end e mais tarde buscou conhecimento para se tornar full-stack.'

export const historyEntries: HistoryEntry[] = [
  {
    label: 'Fevereiro de 2020',
    description: 'Iniciou o curso técnico em desenvolvimento de sistemas integrado ao ensino médio',
  },
  {
    label: 'Setembro de 2020',
    description: 'Adquiriu seu primeiro curso de desenvolvimento web',
  },
  {
    label: 'Julho de 2021',
    description: 'Entrou na Nimbus Tecnologia como estagiário',
  },
  {
    label: 'Outubro de 2021',
    description: 'Iniciou sua formação na Rocketseat',
  },
  {
    label: 'Julho de 2022',
    description: 'Teve seu estágio prorrogado por mais 6 meses',
  },
  {
    label: 'Novembro de 2022',
    description: 'Entregou seu TCC e se formou no ensino médio',
  },
  {
    label: 'Janeiro de 2023',
    description: 'Foi efetivado e iniciou seu trabalho na Nimbus Tecnologia como desenvolvedor júnior',
  },
  {
    label: 'Março de 2023',
    description: 'Iniciou sua graduação em Análise e Desenvolvimento de Sistemas no IFSP',
  },
]

export const formations: Formation[] = [
  {
    title: 'ReactJS',
    school: 'Rocketseat',
    tag: 'Front-End',
    description: 'Curso avançado de ReactJS, usando diversas bibliotecas front-end, além de NextJS e realizando deploy.',
    certificate: 'https://drive.google.com/file/d/1VWgVsjzBxv_xK8YwlevpVCME2gjPi5vz/view?usp=sharing',
  },
  {
    title: 'React Native',
    school: 'Rocketseat',
    tag: 'Mobile',
    description: 'Curso de React Native com offline-first, construção de interfaces, deploy e muito mais.',
    certificate: 'https://drive.google.com/file/d/1nEk_cUTTXHF5-4jCILUwWMyOpHs0eSYk/view?usp=sharing',
  },
  {
    title: 'NodeJS',
    school: 'Rocketseat',
    tag: 'Back-End',
    description: 'Curso completo de NodeJS do zero ao deploy, com acesso a banco de dados, criação de APIs Rest, padrões de projeto e Serverless.',
    certificate: 'https://drive.google.com/file/d/1jc8hnvd_M6xUEicouJvy1ynQ1mXzHoih/view?usp=sharing',
  },
  {
    title: 'Elixir',
    school: 'Rocketseat',
    tag: 'Back-End',
    description: 'Aprendendo os fundamentos e criando APIs Rest com Elixir',
    certificate: 'https://drive.google.com/file/d/1LEDwhUQok56QaJ1RDLejRBxzRuLBOZKE/view?usp=sharing',
  },
  {
    title: 'Fundamentos de Expressões Regulares (Regex)',
    school: 'Cod3r | Udemy',
    tag: 'Outros',
    description: 'Introdução a expressões regulares.',
    certificate: 'https://drive.google.com/file/d/14K-HkBMGz2UMLNkFFxBDkNlINXwVHOZ1/view?usp=sharing',
  },
]

export const formationTagColors: Record<FormationTag, string> = {
  'Front-End': 'blue',
  'Back-End': 'green',
  'Mobile': 'orange',
  'Outros': 'purple',
}
