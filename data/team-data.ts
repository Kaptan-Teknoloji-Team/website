export interface NavLink {
  href: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  category: string;
  overview?: string;
  objectives?: string[];
  technologies: string[];
  status: string;
  images: ProjectImage[];
  links?: ProjectLink[];
}

export interface Achievement {
  id: string;
  competition: string;
  organization: string;
  result: string;
  date: string;
  location: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Discipline {
  id: string;
  name: string;
  description: string;
  technologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "lead" | "developer" | "advisor";
  subsystem: string;
  focus: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  imageUrl: string;
  description: string;
  specs?: string[];
}

export const TEAM = {
  name: "Yahya Kaptan Anadolu Lisesi Kaptan Teknoloji Takımı",
  shortName: "KTT Kaptan Teknoloji",
  acronym: "KTT",
  school: "Yahya Kaptan Anadolu Lisesi",
  location: "İzmit / Kocaeli",
  headline: "Milli İşletim Sistemi ve Açık Kaynak Teknolojilerinde Genç Mühendislik Üretiyoruz.",
  tagline:
    "Yahya Kaptan Anadolu Lisesi bünyesinde; Bilişim Teknolojileri Öğretmenimiz Gamze Yelken danışmanlığında açık kaynak ve Pardus sistemleri geliştiren teknoloji takımıyız.",
  description:
    "Biz Kaptan Teknoloji Takımı (KTT) olarak; Yahya Kaptan Anadolu Lisesi Bilişim Teknolojileri Öğretmenimiz Gamze Yelken danışmanlığında, takım arkadaşlarımız Egemen Ömer Yılmazer, Emre Ekici ve Doruk Ata Kabadayı ile birlikte kurduğumuz lise teknoloji takımıyız. Milli işletim sistemimiz Pardus ve açık kaynak sistemler üzerine çalışıyor, 2026 Şanlıurfa Pardus Hata Ayıklama ve Öneri Yarışması Hata Ayıklama Kategorisi Türkiye 3.'sü olmanın gururunu yaşıyoruz.",
  advisor: "Gamze Yelken",
  members: ["Egemen Ömer Yılmazer", "Emre Ekici", "Doruk Ata Kabadayı"],
  memberCount: "4",
  heroImage: "/images/ktt_hero.jpg",
  logo: "/images/ktt_logo.png",
  stats: [
    { value: "2026", label: "Şanlıurfa Pardus 3.'lüğümüz" },
    { value: "Türkiye 3.'sü 🥉", label: "Hata Ayıklama Derecemiz" },
    { value: "4 Kişi", label: "Öğretmenimiz & 3 Öğrenci" },
    { value: "KTT", label: "Yahya Kaptan Anadolu Lisesi" },
  ],
} as const;

export const DISCIPLINES: Discipline[] = [
  {
    id: "acik-kaynak",
    name: "Açık Kaynak & Linux Sistemleri",
    description:
      "Milli işletim sistemimiz Pardus ve GNU/Linux ekosisteminde çekirdek, paket yönetimi ve kullanıcı alanı bileşenleri üzerine derinlemesine çalışıyoruz.",
    technologies: ["Pardus", "Linux", "Bash", "Debian Paketleme", "Git"],
  },
  {
    id: "hata-ayiklama",
    name: "Hata Ayıklama & Güvenlik Analizi",
    description:
      "C ve sistem kodlarında bellek sızıntıları, sınır aşımı ve güvenlik açıklarını dinamik/statik analiz araçlarıyla tespit edip kaynak kod yamaları (patch) üretiyoruz.",
    technologies: ["C", "GDB", "Valgrind", "Hata Ayıklama", "Güvenlik"],
  },
  {
    id: "web-yazilim",
    name: "Web Geliştirme & Yazılım",
    description:
      "Takımımızın dijital varlığını ve açık kaynak araçlarını modern web mimarisiyle geliştiriyor, GitHub üzerinde toplulukla buluşturuyoruz.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GitHub"],
  },
  {
    id: "raporlama",
    name: "Teknik Dokümantasyon & Analiz",
    description:
      "Yarışma ve Ar-Ge süreçlerimizde bulduğumuz hataların kök nedenlerini belgeleyen, açık kaynak camiasına katkı sağlayan teknik raporlar hazırlıyoruz.",
    technologies: ["Teknik Raporlama", "Dokümantasyon", "Analiz", "İş Birliği"],
  },
];

export const CONTACT_EMAIL = "kaptanteknolojiteam@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Kaptan-Teknoloji-Team/" },
];

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Anasayfa" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/projects", label: "Projeler" },
  { href: "/achievements", label: "Başarılar" },
  { href: "/contact", label: "İletişim" },
];

export const JOIN_LINK: NavLink = {
  href: "https://docs.google.com/forms/d/e/1FAIpQLSfZgQmxw3Qz-ZGjCDxS4XqCyhsLlAf5Gt2_q2wXAs_ILO_nQw/viewform",
  label: "Ekibe Katıl",
};

export const PROJECTS: Project[] = [
  {
    slug: "pardus-hata-ayiklama",
    name: "Pardus Hata Ayıklama & Güvenlik Analizi",
    summary:
      "2026 yılında Şanlıurfa'da düzenlenen Pardus Hata Ayıklama ve Öneri Yarışması'nda Hata Ayıklama kategorisinde Türkiye 3.'sü olduğumuz milli işletim sistemi analiz ve yama projemiz.",
    category: "Milli İşletim Sistemi & Hata Ayıklama",
    overview:
      "TÜBİTAK ULAKBİM bünyesinde geliştirilen milli işletim sistemimiz Pardus ve açık kaynak ekosisteminde; kritik sistem bileşenleri üzerindeki güvenlik açıklarını tespit ettik, hata ayıklama süreçlerini yürüttük ve kaynak kod seviyesinde yama geliştirdik. 2026 yılında Şanlıurfa'da gerçekleştirilen Pardus Hata Ayıklama ve Öneri Yarışması finalinde Hata Ayıklama kategorisinde Türkiye 3.'lüğü elde ettik.",
    objectives: [
      "Pardus işletim sistemi paketlerinde ve servislerinde kritik hataları tespit edip giderdik",
      "C ve Linux sistem bileşenlerinde bellek sızıntıları ve güvenlik açıklarını analiz ettik",
      "GDB ve Valgrind ile kaynak kod seviyesinde hata ayıklayıp yama (patch) ürettik",
      "2026 Şanlıurfa Pardus Hata Ayıklama Yarışması finalinde Türkiye üçüncülüğü kazandık",
    ],
    technologies: ["Pardus", "Linux", "C", "GDB", "Valgrind", "Bash", "Açık Kaynak"],
    status: "Tamamlandı (Türkiye 3.'sü Olduk 🥉)",
    images: [
      {
        src: "/images/pardus_project.png",
        alt: "Pardus Hata Ayıklama ve Öneri Yarışması - KTT 3.'lük Projemiz",
      },
    ],
    links: [
      { label: "GitHub Organizasyonumuz", href: "https://github.com/Kaptan-Teknoloji-Team/" },
      { label: "Başarı Detayları", href: "/achievements" },
    ],
  },
  {
    slug: "ktt-website",
    name: "KTT Resmi Takım Web Portalı",
    summary:
      "Yahya Kaptan Anadolu Lisesi Kaptan Teknoloji Takımı olarak açık kaynak geliştirdiğimiz resmi web platformumuz.",
    category: "Web Teknolojileri & Açık Kaynak",
    overview:
      "Takımımızın açık kaynak vizyonunu, 2026 Şanlıurfa Pardus başarımızı ve açık kaynak projelerimizi paylaştığımız; Next.js mimarisiyle açık kaynak olarak geliştirip GitHub üzerinde topluluğa sunduğumuz resmi web sitemizdir.",
    objectives: [
      "Takımımızın açık kaynak vizyonunu ve Pardus başarımızı şeffaf biçimde paylaşıyoruz",
      "Okul arkadaşlarımız için doğrudan başvuru ve iletişim altyapısı sunuyoruz",
      "Açık kaynak yazılım geliştirme pratiklerimizi web teknolojilerine yansıtıyoruz",
    ],
    technologies: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "GitHub"],
    status: "Aktif / Açık Kaynak",
    images: [
      {
        src: "/images/ktt_hero.jpg",
        alt: "KTT Kaptan Teknoloji Portalı",
      },
    ],
    links: [
      { label: "GitHub Deposu", href: "https://github.com/Kaptan-Teknoloji-Team/website" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "pardus-hata-ayiklama-2026",
    competition: "Pardus Hata Ayıklama ve Öneri Yarışması",
    organization: "Pardus / TÜBİTAK ULAKBİM",
    result: "Türkiye 3.'lüğü 🥉",
    date: "2026",
    location: "Şanlıurfa",
    description:
      "2026 yılında Şanlıurfa'da düzenlenen Pardus Hata Ayıklama ve Öneri Yarışması'nda Yahya Kaptan Anadolu Lisesi Kaptan Teknoloji Takımı (KTT) olarak 'Hata Ayıklama' kategorisinde Türkiye üçüncüsü olduk. Milli işletim sistemimiz Pardus üzerindeki sistem bileşenlerinde kritik hataları tespit ettik ve kaynak kod yamaları geliştirdik. Bu yarışmanın ardından başka bir yarışmaya katılmadık; tüm odağımızı açık kaynak teknolojileri ve sistem geliştirme üzerine yoğunlaştırdık.",
  },
];

export const FEATURED_ACHIEVEMENT_ID = "pardus-hata-ayiklama-2026";

export const INTEREST_AREAS = [
  "Açık kaynak ve Linux",
  "Pardus ve sistem yazılımı",
  "C ile hata ayıklama ve güvenlik",
  "Web geliştirme (Next.js & TypeScript)",
  "Teknik dokümantasyon ve raporlama",
] as const;

export const GRADE_LEVELS = [
  "Lise 9. sınıf",
  "Lise 10. sınıf",
  "Lise 11. sınıf",
  "Lise 12. sınıf",
  "Diğer",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedAchievement(): Achievement | undefined {
  return ACHIEVEMENTS.find((item) => item.id === FEATURED_ACHIEVEMENT_ID);
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pardus-analiz",
    title: "Pardus Hata Ayıklama & Güvenlik Analizi",
    category: "yazilim",
    categoryLabel: "Açık Kaynak & Sistem",
    date: "2026",
    imageUrl: "/images/pardus_project.png",
    description: "Pardus işletim sistemi üzerinde GDB, Valgrind ve statik kod analiziyle geliştirdiğimiz açık kaynak güvenlik yamalarımız.",
    specs: ["Pardus Linux", "C Dili", "GDB", "Valgrind"],
  },
  {
    id: "sanliurfa-final",
    title: "2026 Şanlıurfa Finali ve Türkiye 3.'lüğümüz",
    category: "yarismalar",
    categoryLabel: "Yarışma Sahası",
    date: "2026",
    imageUrl: "/images/ktt_hero.jpg",
    description: "Şanlıurfa'da düzenlenen Pardus Hata Ayıklama ve Öneri Yarışması finalinde elde ettiğimiz Türkiye 3.'lüğü derecemiz.",
    specs: ["Şanlıurfa", "TÜBİTAK ULAKBİM", "Türkiye 3.'lüğü 🥉"],
  },
  {
    id: "ktt-logo",
    title: "KTT Kurumsal Kimliğimiz & Logomuz",
    category: "medya",
    categoryLabel: "Kurumsal Medya",
    date: "2026",
    imageUrl: "/images/ktt_logo.png",
    description: "Yahya Kaptan Anadolu Lisesi KTT Kaptan Teknoloji Takımımızın resmi logo ve amblemi.",
    specs: ["KTT", "Yahya Kaptan AL", "İzmit / Kocaeli"],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "gamze-yelken",
    name: "Gamze Yelken",
    role: "Danışman",
    category: "advisor",
    subsystem: "Bilişim Teknolojileri & Proje Danışmanlığı",
    focus: "Okulumuz Bilişim Teknolojileri Öğretmeni ve takım danışmanımız. Yarışma, proje yönetimi ve teknik hedeflerimizde bize rehberlik ediyor.",
    initials: "GY",
  },
  {
    id: "egemen-omer-yilmazer",
    name: "Egemen Ömer Yılmazer",
    role: "Takım Üyesi / Öğrenci",
    category: "lead",
    subsystem: "Pardus Hata Ayıklama & Sistem",
    focus: "Pardus araştırma süreçlerimizi, işletim sistemi mimarisi analizlerini ve ekip koordinasyonumuzu yürütüyor.",
    initials: "EÖY",
  },
  {
    id: "emre-ekici",
    name: "Emre Ekici",
    role: "Takım Üyesi / Öğrenci",
    category: "developer",
    subsystem: "Hata Ayıklama & Güvenlik Analizi",
    focus: "C ve sistem kodlarında bellek analizleri, GDB/Valgrind ile hata ayıklama ve yama (patch) geliştirme çalışmalarımızı üstleniyor.",
    initials: "EE",
  },
  {
    id: "doruk-ata-kabadayi",
    name: "Doruk Ata Kabadayı",
    role: "Takım Üyesi / Öğrenci",
    category: "developer",
    subsystem: "Açık Kaynak & Linux Sistemleri",
    focus: "GNU/Linux servisleri, Debian paket yönetimi, sistem güvenliği ve teknik analiz süreçlerimizi üstleniyor.",
    initials: "DAK",
  },
];

export const TEAM_INFO = {
  ...TEAM,
  memberCount: "4",
  awardCount: "1",
  projectsCompleted: "2",
  activeSponsors: "0",
};
