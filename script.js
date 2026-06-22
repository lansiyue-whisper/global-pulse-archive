const albums = [
  {
    title: "Nyege Nyege / Hakuna Kulala Scene Dossier",
    artist: "Nyege Nyege Tapes + Hakuna Kulala",
    region: "Kampala / Jinja, Uganda",
    year: "2015-now",
    genres: ["afro techno", "singeli", "gqom", "experimental club"],
    cover: "https://f4.bcbits.com/img/a1640063585_10.jpg",
    summary: "东非电子与泛非 underground club 的重要入口，连接 singeli、gqom、amapiano、kuduro、传统音乐与实验电子。",
    culture:
      "Nyege Nyege 从 Kampala 的地下聚会和艺术网络发展成音乐节、厂牌和孵化平台。整理这类条目时，应该记录艺人所在城市、语言、舞蹈场景、现场系统和发行网络，而不是只贴一个‘非洲电子’标签。",
    source: "Nyege Nyege official / Beatportal profile",
    sourceUrl: "https://festival.nyegenyege.com/"
  },
  {
    title: "Mr Mixondo",
    artist: "DJ Travella",
    region: "Dar es Salaam, Tanzania",
    year: "2022",
    genres: ["singeli", "experimental club"],
    cover: "https://f4.bcbits.com/img/a1640063585_10.jpg",
    summary: "高速 singeli 结构与数字鼓机的疾速碰撞，是东非电子舞曲进入全球实验俱乐部语境的代表线索。",
    culture:
      "Singeli 来自坦桑尼亚城市街区和婚礼/街头派对生态，速度极快但并不只是‘快’：MC、社区扩音、舞蹈和本地制作软件同样构成它的文化语法。",
    source: "Nyege Nyege Tapes catalogue",
    sourceUrl: "https://nyegenyegetapes.bandcamp.com/"
  },
  {
    title: "Kaloli",
    artist: "Nihiloxica",
    region: "Uganda / United Kingdom",
    year: "2020",
    genres: ["afro techno", "experimental club", "percussion"],
    cover: "https://f4.bcbits.com/img/a2639495140_10.jpg",
    summary: "Bugandan 鼓乐、低频 techno 与现场打击乐能量结合，适合作为传统节奏与俱乐部系统融合的档案条目。",
    culture:
      "这类音乐的关键不是把传统鼓声放进电子节拍，而是让现场乐手、节奏体系和俱乐部声压共同决定作品结构。档案页应记录合作关系与演出语境。",
    source: "Nyege Nyege / Crammed Discs references",
    sourceUrl: "https://nyegenyegetapes.bandcamp.com/"
  },
  {
    title: "Meeting With The King",
    artist: "DJ Lag",
    region: "Durban, South Africa",
    year: "2022",
    genres: ["gqom", "afro techno", "club"],
    cover: "https://f4.bcbits.com/img/a2639495140_10.jpg",
    summary: "Gqom 的暗色低频、切分鼓组与南非舞池能量，是 afro techno 分类旁边必须独立标出的场景。",
    culture:
      "Gqom 与 Durban 的出租车、手机传播、街区舞蹈和 DIY 发布方式紧密相关。网站可把它放在南部非洲 club 节点，而非泛化成 house 或 techno。",
    source: "artist / label pages",
    sourceUrl: "https://djlag.com/"
  },
  {
    title: "Subconsciously",
    artist: "Black Coffee",
    region: "South Africa",
    year: "2021",
    genres: ["afro house", "deep house"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "南非 afro house 进入全球主流舞台的代表性入口，适合连接 vocal house、deep house 与非洲鼓组叙事。",
    culture:
      "Afro house 不只是打击乐纹理，也包含南非 house 长期积累的电台、俱乐部、制作人和歌手生态。档案页可按城市、厂牌、DJ 网络继续拆分。",
    source: "artist / release pages",
    sourceUrl: "https://www.blackcoffeeofficial.com/"
  },
  {
    title: "Global Control / Invisible Invasion",
    artist: "AMMAR 808",
    region: "Tunisia / India",
    year: "2020",
    genres: ["global bass", "ethnic", "experimental club"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "北非制作人与南印度 Carnatic 声音相遇，电子低频、街头戏剧感和传统声乐形成强烈混合体。",
    culture:
      "Glitterbeat 将这类作品放在‘当代全球声音’的语境里：不是民俗标本，而是传统、地点录音与未来主义节奏共同发声。",
    source: "Glitterbeat artists catalogue",
    sourceUrl: "https://glitterbeat.com/artists/"
  },
  {
    title: "Campo del Cielo",
    artist: "Coro Qom Chelaalapi & Lagartijeando",
    region: "Argentina / Qom community",
    year: "2024",
    genres: ["organic downtempo", "folktronica", "ethnic"],
    cover: "https://f4.bcbits.com/img/a2438671191_10.jpg",
    summary: "Qom 合唱传统与 Lagartijeando 的 organic electronic 制作连接，是社群合作型专辑档案的好样本。",
    culture:
      "这类作品需要特别记录合作方式、社群署名、语言和收益关系。它更接近共同创作档案，而不是制作人单方面采样。",
    source: "Shika Shika release page",
    sourceUrl: "https://shikashika.org/product/coro-qom-chelaalapi-lagartijeando-campo-del-cielo-12-180-grms-orange-vinyl/"
  },
  {
    title: "A Guide to the Birdsong / Shika Shika catalogue",
    artist: "Shika Shika artists",
    region: "Latin America / global",
    year: "2015-now",
    genres: ["organic downtempo", "folktronica", "field recording"],
    cover: "https://f4.bcbits.com/img/a4282425468_10.jpg",
    summary: "Shika Shika 以全球民间根源、有机声音、电子音乐和生态行动为核心，适合建立‘音乐 + 环境’专题。",
    culture:
      "它的资料结构可以把音乐、鸟类/生态议题、非营利项目、艺术家国家与收益分配放在同一页面，形成更完整的文化说明。",
    source: "Shika Shika about page",
    sourceUrl: "https://shikashika.org/aboutus/"
  },
  {
    title: "Wonderwheel Global Dancefloor Dossier",
    artist: "Wonderwheel Recordings",
    region: "Brooklyn / global",
    year: "2000s-now",
    genres: ["global bass", "organic house", "downtempo"],
    cover: "https://f4.bcbits.com/img/a4068706317_10.jpg",
    summary: "Nickodemus 相关的厂牌网络，聚合 tropical、Latin、dub、house 和全球舞池声音。",
    culture:
      "Wonderwheel 适合做‘城市舞池中的全球声音’分类：一边记录 DJ/club 传播，一边记录拉丁、美洲、非洲与加勒比节奏如何进入当代制作。",
    source: "Wonderwheel official about",
    sourceUrl: "https://wonderwheelrecordings.com/about/"
  },
  {
    title: "Habibi Funk Catalogue",
    artist: "Habibi Funk Records",
    region: "Arab world / Berlin",
    year: "2015-now",
    genres: ["arab funk", "reissue", "ethnic"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "阿拉伯世界 funk、jazz、soul 与电影配乐再版的重要入口，可作为历史资料与当代舞池之间的桥。",
    culture:
      "再版条目要记录原始年代、地区、母带/授权来源、封面与 liner notes。它提醒网站不要只追新音乐，也要整理被忽略的历史声音。",
    source: "Habibi Funk official / Bandcamp references",
    sourceUrl: "https://habibifunkrecords.bandcamp.com/"
  },
  {
    title: "Awesome Tapes From Africa Archive",
    artist: "Awesome Tapes From Africa",
    region: "Africa / diaspora archives",
    year: "2006-now",
    genres: ["cassette archive", "reissue", "ethnic"],
    cover: "https://f4.bcbits.com/img/a0933768371_10.jpg",
    summary: "从 cassette blog 发展成再版厂牌，适合建立磁带文化、街头发行与授权再版专题。",
    culture:
      "这类档案应把‘发现’和‘再流通’分开：原始磁带、市场渠道、艺术家授权、再版说明和当代 DJ 使用场景都很重要。",
    source: "Awesome Tapes official about",
    sourceUrl: "https://awesometapes.com/about/"
  },
  {
    title: "Sahel Sounds Field Archive",
    artist: "Sahel Sounds artists",
    region: "West African Sahel",
    year: "2009-now",
    genres: ["sahel guitar", "field recording", "ethnic"],
    cover: "https://f4.bcbits.com/img/a0933768371_10.jpg",
    summary: "西非 Sahel 地区的现场录音、电影、厂牌与艺术组织线索，适合连接沙漠吉他、手机音乐与田野记录。",
    culture:
      "Sahel Sounds 的价值在于把声音、影像、写作和艺术家关系放在一起。网站后续可以为每个地区建立‘录音方式 / 语言 / 乐器 / 发行渠道’字段。",
    source: "Sahel Sounds official about",
    sourceUrl: "https://sahelsounds.com/about/"
  },
  {
    title: "Bosphorus Slow Tide",
    artist: "Leyla Ark",
    region: "Turkey",
    year: "2021",
    genres: ["downtempo", "psychill"],
    cover: "https://f4.bcbits.com/img/a4282425468_10.jpg",
    summary: "中东弦乐旋法、慢速断拍与宽阔空间效果，适合归入夜间 downtempo 与 psychill 交叉。",
    culture:
      "跨文化电子作品可以同时记录 makam、民间旋律、现代合成器与移民社群经验，让风格分类服务于理解而非框住音乐。",
    source: "label page / interview",
    sourceUrl: "https://bandcamp.com/tag/downtempo"
  },
  {
    title: "Andean Electronic Listening Path",
    artist: "Nicola Cruz / Dengue Dengue Dengue references",
    region: "Ecuador / Peru",
    year: "2010s-now",
    genres: ["organic downtempo", "global bass", "folktronica"],
    cover: "https://f4.bcbits.com/img/a2438671191_10.jpg",
    summary: "安第斯旋律、cumbia、低频和慢速电子的交叉入口，适合做拉美 organic electronic 专题。",
    culture:
      "此类条目可以拆出 charango、quena、cumbia、ritual ambient、club edit 等子标签，并记录制作人与本地传统之间的真实关系。",
    source: "artist / label research leads",
    sourceUrl: "https://zzkrecords.com/"
  },
  {
    title: "Psychill / Psybient Listening Path",
    artist: "Ultimae / Iboga adjacent references",
    region: "Europe / festival circuits",
    year: "1990s-now",
    genres: ["psychill", "psybient", "downtempo"],
    cover: "https://f4.bcbits.com/img/a4068706317_10.jpg",
    summary: "Psytrance 周边的慢速、空间化电子路线，常与自然录音、民族乐器纹理和冥想式编曲相连。",
    culture:
      "网站可把 psychill 与 psybient 分开：前者更接近 chillout 舞台和旅行文化，后者偏环境、科幻和深听。两者都需要避免把文化声音变成无出处采样。",
    source: "label / festival research leads",
    sourceUrl: "https://ultimae.bandcamp.com/"
  },
  {
    title: "Amapiano / South African Log Drum Path",
    artist: "Kabza De Small / DJ Maphorisa / scene references",
    region: "South Africa",
    year: "2010s-now",
    genres: ["amapiano", "afro house", "deep house"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "Amapiano 以 log drum、柔软键盘和长段 groove 构成南非流行与舞池的重要当代路径。",
    culture:
      "它和 townships、舞蹈挑战、taxi/街区传播、vocal collaboration 关系很强。整理时适合把 dance、producer tag、歌手和城市网络放在同一档案里。",
    source: "Bandcamp / SoundCloud tags and South African scene leads",
    sourceUrl: "https://bandcamp.com/tag/amapiano"
  },
  {
    title: "Kuduro / Lisbon-Angola Club Dossier",
    artist: "Príncipe / Angolan and Lisbon scene references",
    region: "Luanda / Lisbon",
    year: "1990s-now",
    genres: ["kuduro", "global bass", "experimental club"],
    cover: "https://f4.bcbits.com/img/a1640063585_10.jpg",
    summary: "Kuduro 从安哥拉街区舞蹈与电子鼓机能量发展出高冲击 club 语法，也影响了 Lisbon bass 场景。",
    culture:
      "它的身体性很重要：舞步、MC、派对系统和移民社区共同构成声音。网站可以把它放在葡语非洲与欧洲地下 club 的交叉节点。",
    source: "Príncipe catalogue / Kuduro listening leads",
    sourceUrl: "https://principediscos.bandcamp.com/"
  },
  {
    title: "Digital Cumbia / ZZK Path",
    artist: "ZZK Records / Chancha Via Circuito references",
    region: "Argentina / Latin America",
    year: "2000s-now",
    genres: ["cumbia digital", "global bass", "organic downtempo"],
    cover: "https://f4.bcbits.com/img/a2438671191_10.jpg",
    summary: "Digital cumbia 把拉美 cumbia、低频、dub、电子制作和安第斯/亚马逊线索连接成新的舞池语言。",
    culture:
      "这类内容适合按地区节奏、传统乐器、舞池速度和社群合作方式继续拆分，避免把拉美声音做成单一热带标签。",
    source: "ZZK Records catalogue",
    sourceUrl: "https://zzkrecords.bandcamp.com/"
  },
  {
    title: "Gnawa Electronic / Morocco Deep Trance Path",
    artist: "Hassan Wargui / Moroccan fusion references",
    region: "Morocco / Maghreb",
    year: "2010s-now",
    genres: ["gnawa electronic", "ethnic", "downtempo"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "Gnawa 的 guembri、qraqeb、呼应式声乐和 trance 结构，与 dub、downtempo、house 相遇后很适合深听和夜场过渡。",
    culture:
      "整理此类作品要尊重 Gnawa 的疗愈/仪式背景，记录乐手、乐器和合作关系，而不是只把 qraqeb 当成异域打击乐音色。",
    source: "Bandcamp / SoundCloud Gnawa electronic leads",
    sourceUrl: "https://bandcamp.com/tag/gnawa"
  },
  {
    title: "Dabke Club / Levantine Bass Path",
    artist: "Omar Souleyman / Levant club references",
    region: "Syria / Lebanon / Levant diaspora",
    year: "2000s-now",
    genres: ["dabke", "global bass", "experimental club"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "Dabke 的婚礼键盘、mijwez、快速手鼓和合成器旋律进入电子舞池后，形成强烈的 Levant club 线索。",
    culture:
      "这类档案要保留婚礼、移民社群、语言和区域政治背景，不要只把它当作快节奏 club edit。它也能连接 Arab funk 和当代中东电子。",
    source: "Bandcamp / SoundCloud Dabke leads",
    sourceUrl: "https://bandcamp.com/tag/dabke"
  },
  {
    title: "Anatolian Psych / Modern Edits Path",
    artist: "Altin Gun / Anatolian rock and edit references",
    region: "Turkey / diaspora",
    year: "1960s-now",
    genres: ["anatolian psych", "reissue", "ethnic"],
    cover: "https://f4.bcbits.com/img/a4282425468_10.jpg",
    summary: "Anatolian psych 连接土耳其民间旋律、电吉他、迷幻摇滚和当代 edit / downtempo 场景。",
    culture:
      "它适合建立历史线：民歌旋律、70 年代摇滚、移民社群唱片、再版厂牌和当代 DJ edit 如何互相影响。",
    source: "Bandcamp Anatolian psych tag / reissue leads",
    sourceUrl: "https://bandcamp.com/tag/anatolian-psych"
  },
  {
    title: "Maloya Electronic / Indian Ocean Path",
    artist: "La Reunion and Indian Ocean references",
    region: "Reunion Island / Indian Ocean",
    year: "2010s-now",
    genres: ["maloya electronic", "ethnic", "experimental club"],
    cover: "https://f4.bcbits.com/img/a0205422707_10.jpg",
    summary: "Maloya 的 call-and-response、kayamb、rouler 鼓和岛屿历史，与 bass、dub、house 结合后形成很特别的印度洋电子线索。",
    culture:
      "这个方向需要记录克里奥尔语言、劳动/抵抗历史和岛屿社群，而不是只用‘tribal’描述节奏。适合放进本土文化感更强的专题页。",
    source: "Bandcamp Maloya / Indian Ocean listening leads",
    sourceUrl: "https://bandcamp.com/tag/maloya"
  },
  {
    title: "Ethio-Jazz Reissue / Addis Groove Path",
    artist: "Mulatu Astatke / Ethiopiques adjacent references",
    region: "Ethiopia / diaspora",
    year: "1960s-now",
    genres: ["ethio-jazz", "reissue", "ethnic"],
    cover: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    summary: "Ethio-jazz 的五声音阶、铜管、funk bassline 和爵士编制，是世界音乐再版与 downtempo DJ set 的重要历史入口。",
    culture:
      "它能帮助网站从当代电子往回连接历史唱片、国家电台、电影配乐和 diaspora 演出网络，是很适合做深档案的方向。",
    source: "Bandcamp Ethio-jazz / reissue leads",
    sourceUrl: "https://bandcamp.com/tag/ethio-jazz"
  },
  {
    title: "Highlife / Disco Reissue Path",
    artist: "Analog Africa / Soundway adjacent references",
    region: "Ghana / Nigeria / West Africa",
    year: "1970s-now",
    genres: ["highlife", "afro disco", "reissue"],
    cover: "https://f4.bcbits.com/img/a0933768371_10.jpg",
    summary: "Highlife、Afro disco 和城市乐队录音常被当代 DJ 用作 warm-up、edit 和全球舞池资料。",
    culture:
      "再版资料应记录乐队、原唱片公司、录音城市、授权状态和 liner notes。它能让网站的音乐资源从新歌扩展到历史乐队生态。",
    source: "Analog Africa / Soundway reissue leads",
    sourceUrl: "https://analogafrica.com/"
  },
  {
    title: "Balearic Global Downtempo Path",
    artist: "Music From Memory / leftfield sunset references",
    region: "Mediterranean / global",
    year: "1980s-now",
    genres: ["downtempo", "balearic", "reissue"],
    cover: "https://f4.bcbits.com/img/a4068706317_10.jpg",
    summary: "Balearic 不是单一节拍，而是一种开放的 sunset listening 方式：dub、ambient、folk、new age、soft percussion 都可以共存。",
    culture:
      "这个条目适合连接海岛 club、慢速 DJ、再版文化和当代 chillout。它也能作为 psychill 之外更轻盈的慢速入口。",
    source: "Music From Memory catalogue",
    sourceUrl: "https://music-from-memory.bandcamp.com/"
  }
];

const events = [
  {
    title: "Nyege Nyege Festival 2026",
    place: "Jinja / Kalagala Falls, Uganda",
    date: "2026-11-19 至 2026-11-22",
    type: "festival",
    tags: ["east africa", "singeli", "experimental club"],
    note: "官方页面显示 2026 年第 11 届在 Jinja/Kalagala Falls 一带举行，适合追踪东非电子、传统音乐、singeli、afrobeats 和跨媒介艺术。"
  },
  {
    title: "African Electronic Music Conference",
    place: "Kampala, Uganda",
    date: "2025 线索",
    type: "field",
    tags: ["conference", "african electronic", "collectives"],
    note: "Nyege Nyege 相关会议线索，可用于整理非洲电子音乐 collectives、夜生活组织者和行业网络。"
  },
  {
    title: "WOMAD Festival",
    place: "United Kingdom / global editions",
    date: "年度关注",
    type: "festival",
    tags: ["world music", "live", "heritage"],
    note: "适合补充传统音乐、跨文化现场合作和全球音乐艺人巡演信息。"
  },
  {
    title: "Dekmantel Festival / Selectors",
    place: "Amsterdam / Tisno",
    date: "夏季档期",
    type: "festival",
    tags: ["selectors", "club", "digging"],
    note: "适合观察 digger、厂牌主理人与全球节奏之间的连接，尤其是 reissue、leftfield club 和跨地域 DJ set。"
  },
  {
    title: "Unsound Festival",
    place: "Krakow, Poland",
    date: "年度关注",
    type: "festival",
    tags: ["experimental", "electronic", "sound art"],
    note: "适合追踪实验电子、声音艺术、AV 演出以及非西方 club 音乐进入前沿音乐节语境的路径。"
  },
  {
    title: "Worldwide FM / Online Sessions",
    place: "London / online",
    date: "持续更新",
    type: "field",
    tags: ["radio", "digging", "global"],
    note: "可作为音乐人、厂牌与跨地域节目线索池，适合收集节目单、DJ set 和访谈。"
  },
  {
    title: "Local Listening Circle",
    place: "Shanghai",
    date: "可自建",
    type: "community",
    tags: ["listening", "community", "demo"],
    note: "网站后续可支持本地社群提交小型试听会、放映、分享活动和 demo feedback night。"
  }
];

const featuredStories = [
  {
    title: "FROM SAHARA TO THE DANCEFLOOR",
    zh: "从撒哈拉到舞池",
    visual: "SAHARA / CASSETTE",
    period: "1968 — 2026",
    countries: "Mali · Niger · Ghana · Nigeria",
    artists: ["Tinariwen", "Bombino", "Mdou Moctar"],
    labels: ["Sahel Sounds", "Awesome Tapes", "Analog Africa"],
    albums: ["Field archive", "Cassette reissues", "Desert guitar"],
    image: "https://f4.bcbits.com/img/a0933768371_10.jpg",
    description: "Desert guitar, cassette circulation, highlife memory and DJ digging routes."
  },
  {
    title: "EAST AFRICAN UNDERGROUND ELECTRONICS",
    zh: "东非地下电子",
    visual: "KAMPALA / SYSTEM",
    period: "2015 — 2026",
    countries: "Uganda · Tanzania · Kenya",
    artists: ["DJ Travella", "Nihiloxica", "Slikback"],
    labels: ["Nyege Nyege Tapes", "Hakuna Kulala"],
    albums: ["Mr Mixondo", "Kaloli", "Club experiments"],
    image: "https://f4.bcbits.com/img/a1640063585_10.jpg",
    description: "Singeli, Kampala sound systems, Bugandan percussion and experimental club networks."
  },
  {
    title: "INDIAN OCEAN RHYTHM ROUTES",
    zh: "印度洋节奏路线",
    visual: "INDIAN OCEAN / MALOYA",
    period: "1970 — 2026",
    countries: "Reunion · Madagascar · Comoros",
    artists: ["Lindigo", "Danyel Waro", "Ostinato archives"],
    labels: ["Ostinato", "Bongo Joe", "Local archives"],
    albums: ["Maloya studies", "Island reissues", "Creole rhythm"],
    image: "https://f4.bcbits.com/img/a0205422707_10.jpg",
    description: "Creole memory, percussion, island circulation and Indian Ocean record histories."
  },
  {
    title: "MODERN GNAWA",
    zh: "当代 Gnawa",
    visual: "GNAWA / GUEMBRI",
    period: "1982 — 2026",
    countries: "Morocco · Algeria · France",
    artists: ["Maleem Mahmoud Gania", "Ammar 808", "Acid Arab"],
    labels: ["Hive Mind", "Glitterbeat", "Independent"],
    albums: ["Guembri pulse", "Qraqeb cycles", "Fusion recordings"],
    image: "https://f4.bcbits.com/img/a0206727659_10.jpg",
    description: "Healing trance, guembri bass, metal percussion and modern club translation."
  },
  {
    title: "DIGITAL CUMBIA",
    zh: "数字 Cumbia",
    visual: "CUMBIA / DUB",
    period: "2008 — 2026",
    countries: "Argentina · Peru · Colombia · Ecuador",
    artists: ["Chancha Via Circuito", "Dengue Dengue Dengue", "Nicola Cruz"],
    labels: ["ZZK", "Galletas Calientes", "Shika Shika"],
    albums: ["Andean electronics", "Amazonian cumbia", "Global bass"],
    image: "https://f4.bcbits.com/img/a2438671191_10.jpg",
    description: "Cumbia, dub, low-end systems and indigenous melodic memory in contemporary dance music."
  },
  {
    title: "ANATOLIAN PSYCH",
    zh: "安纳托利亚迷幻",
    visual: "ANATOLIA / PSYCH",
    period: "1968 — 2026",
    countries: "Turkey · Germany · Netherlands",
    artists: ["Selda Bagcan", "Altin Gun", "Baris Manco"],
    labels: ["Bongo Joe", "Glitterbeat", "Reissue labels"],
    albums: ["Anatolian rock", "Psychedelic folk", "Modern edits"],
    image: "https://f4.bcbits.com/img/a4282425468_10.jpg",
    description: "Folk modes, electric guitar, diaspora recordings and psychedelic reissue culture."
  }
];

const listeningJourneys = [
  {
    title: "Andean Roots",
    zh: "安第斯根源",
    route: ["Bonobo", "Nicola Cruz", "Andean Electronics", "Charango", "Quechua / Qom Culture", "Traditional Andean Music"],
    note: "Start from familiar downtempo, then move toward community collaboration and indigenous vocal memory."
  },
  {
    title: "Durban Pressure",
    zh: "德班低频压力",
    route: ["DJ Lag", "Gqom", "Durban", "Taxi Sound Systems", "Township Dance", "DIY Club Networks"],
    note: "Follow the low-end from club tracks into dance, taxis, mobile sharing and neighborhood systems."
  },
  {
    title: "Gnawa Deep Trance",
    zh: "Gnawa 深层出神",
    route: ["Acid Arab", "Modern Gnawa Fusion", "Guembri", "Qraqeb", "Lila Ceremony", "Gnawa Healing Context"],
    note: "Move from electronic entry points toward instruments, call-and-response and healing contexts."
  },
  {
    title: "Cumbia Digital Lineage",
    zh: "数字 Cumbia 谱系",
    route: ["Dengue Dengue Dengue", "ZZK", "Digital Cumbia", "Amazonian Cumbia", "Migration Routes", "Local Dance Bands"],
    note: "Use global bass as a doorway into regional rhythm, migration and local party histories."
  }
];

const instrumentAtlas = [
  {
    name: "Kora",
    zh: "科拉琴",
    region: "West Africa",
    artifact: "21 strings · harp-lute",
    description: "A harp-lute associated with Manding griot traditions; bright strings often appear in contemporary roots fusion."
  },
  {
    name: "Balafon",
    zh: "巴拉风木琴",
    region: "West Africa",
    artifact: "wood keys · gourd resonators",
    description: "Wooden keyed percussion with resonant gourds, useful for tracing melody, rhythm and ceremony together."
  },
  {
    name: "Guembri",
    zh: "冈布里琴",
    region: "Morocco",
    artifact: "3 strings · bass lute",
    description: "A three-string bass lute central to Gnawa trance music, often carrying the deepest pulse in fusion recordings."
  },
  {
    name: "Qraqeb",
    zh: "金属响板",
    region: "Maghreb",
    artifact: "metal castanets · cyclic pulse",
    description: "Metal castanets whose interlocking patterns create the sharp, cyclical texture of Gnawa ensembles."
  },
  {
    name: "Charango",
    zh: "查朗戈",
    region: "Andes",
    artifact: "small lute · high strings",
    description: "A small Andean string instrument that often bridges folk melody and organic electronic production."
  },
  {
    name: "Quena",
    zh: "克纳笛",
    region: "Andes",
    artifact: "end-blown flute · breath tone",
    description: "An end-blown flute with a breathy tone, frequently heard in Andean ritual, folk and downtempo contexts."
  },
  {
    name: "Kayamb",
    zh: "卡扬布",
    region: "Reunion Island",
    artifact: "flat rattle · maloya rhythm",
    description: "A flat rattle used in Maloya, connecting rhythm, labor history and Indian Ocean creole identity."
  },
  {
    name: "Mijwez",
    zh: "米杰维兹双簧管",
    region: "Levant",
    artifact: "double reed · dabke energy",
    description: "A double reed pipe associated with Levantine dance music, weddings and fast dabke energy."
  }
];

const timelineEntries = [
  { year: "1950s", title: "Highlife", region: "Ghana / Nigeria", note: "Urban dance bands, guitar lines and brass arrangements shape West African popular music." },
  { year: "1968", title: "Ethio Jazz", region: "Addis Ababa", note: "Mulatu Astatke connects Ethiopian scales, jazz orchestration and funk rhythm." },
  { year: "1973", title: "Anatolian Psych", region: "Turkey", note: "Folk modes, electric guitar and psychedelic arrangements create a reissue-rich lineage." },
  { year: "1982", title: "Gnawa Fusion", region: "Morocco / diaspora", note: "Guembri, qraqeb and trance structures enter jazz, rock and later electronic collaboration." },
  { year: "2008", title: "Digital Cumbia", region: "Buenos Aires / Andes", note: "Cumbia, dub and laptop production become a global bass pathway." },
  { year: "2015", title: "Nyege Nyege", region: "Uganda / East Africa", note: "A festival and label ecosystem amplifies singeli, percussion, rap and experimental club music." },
  { year: "2020s", title: "Organic Downtempo", region: "Global", note: "Field recordings, indigenous collaboration and slow electronic forms become a new research frontier." }
];

const essentialArtists = [
  {
    name: "Mulatu Astatke",
    region: "Ethiopia",
    albums: "Ethio-jazz recordings",
    labels: "Ethiopiques / reissue networks",
    scenes: "Ethio-jazz · Addis groove",
    instruments: "Vibraphone · brass · piano",
    stories: "Ethio-Jazz Reissue"
  },
  {
    name: "Omar Souleyman",
    region: "Syria / Levant",
    albums: "Dabke wedding recordings",
    labels: "Sublime Frequencies / independent",
    scenes: "Dabke · Levant club",
    instruments: "Mijwez · keyboard",
    stories: "Dabke Club"
  },
  {
    name: "DJ Lag",
    region: "Durban, South Africa",
    albums: "Meeting With The King",
    labels: "Black Major / independent",
    scenes: "Gqom · Durban club",
    instruments: "Low-end drums · vocal chops",
    stories: "Durban Pressure"
  },
  {
    name: "Nicola Cruz",
    region: "Ecuador",
    albums: "Andean electronic path",
    labels: "ZZK / independent",
    scenes: "Organic downtempo · Andean electronics",
    instruments: "Charango · quena · percussion",
    stories: "Andean Roots"
  },
  {
    name: "Ammar 808",
    region: "Tunisia / global",
    albums: "Global Control / Invisible Invasion",
    labels: "Glitterbeat",
    scenes: "Maghreb bass · global electronic",
    instruments: "808 · voice · regional modes",
    stories: "Modern Gnawa"
  },
  {
    name: "Altin Gun",
    region: "Turkey / Netherlands",
    albums: "Anatolian psych references",
    labels: "Bongo Joe / Glitterbeat",
    scenes: "Anatolian psych · modern reissue culture",
    instruments: "Saz · guitar · synth",
    stories: "Anatolian Psych"
  }
];

const labelArchive = [
  {
    name: "Nyege Nyege Tapes",
    location: "Kampala / Jinja",
    founded: "2010s",
    philosophy: "East African underground electronics, traditional experiments and high-intensity club forms.",
    artists: "DJ Travella · Nihiloxica · Slikback",
    releases: "Mr Mixondo · Kaloli · scene compilations",
    significance: "A key bridge between local East African scenes and global experimental club circuits."
  },
  {
    name: "Habibi Funk",
    location: "Berlin / Arab world",
    founded: "2015",
    philosophy: "Licensed reissues of funk, jazz, soul and soundtrack recordings from the Arab world.",
    artists: "Ahmed Malek · Ferkat Al Ard · Rogér Fakhr",
    releases: "Habibi Funk series",
    significance: "Makes liner notes, licensing and historical context central to dancefloor rediscovery."
  },
  {
    name: "Sahel Sounds",
    location: "Portland / West African Sahel",
    founded: "2009",
    philosophy: "Field recordings, artist partnerships, Sahel guitar, film and regional music documentation.",
    artists: "Mdou Moctar · Les Filles de Illighadad",
    releases: "Music from Saharan WhatsApp · field archives",
    significance: "Shows how research, recording practice and artist relationships can shape a label."
  },
  {
    name: "ZZK Records",
    location: "Buenos Aires",
    founded: "2008",
    philosophy: "Latin American electronic music, digital cumbia and contemporary folklore experiments.",
    artists: "Chancha Via Circuito · Nicola Cruz · La Yegros",
    releases: "Digital cumbia and Andean electronic catalogues",
    significance: "A major gateway from global bass toward deeper Latin American rhythm histories."
  },
  {
    name: "Shika Shika",
    location: "Global / Latin America",
    founded: "2015",
    philosophy: "Organic electronic music, folklore, ecology and collaborative cultural projects.",
    artists: "Lagartijeando · El Búho · Qom Choir",
    releases: "A Guide to the Birdsong · Campo del Cielo",
    significance: "Connects music discovery with ecological awareness and community collaboration."
  },
  {
    name: "Music From Memory",
    location: "Amsterdam",
    founded: "2013",
    philosophy: "Archival listening across ambient, balearic, experimental pop and overlooked recordings.",
    artists: "Gigi Masin · Gaussian Curve · reissue artists",
    releases: "Selected reissues and leftfield archival projects",
    significance: "A model for slow listening, context-led reissue culture and non-obvious dancefloor memory."
  },
  {
    name: "Wonderwheel",
    location: "Brooklyn / global",
    founded: "2000s",
    philosophy: "Global dancefloor music connecting Latin, dub, house, tropical and downtempo currents.",
    artists: "Nickodemus · Chancha Via Circuito · label family",
    releases: "Global dancefloor catalogue",
    significance: "Shows how DJ culture can connect city nightlife with transregional rhythm research."
  }
];

const listeningSources = {
  "Nyege Nyege / Hakuna Kulala Scene Dossier": {
    url: "https://nyegenyegetapes.bandcamp.com/",
    type: "link"
  },
  "Mr Mixondo": {
    url: "https://nyegenyegetapes.bandcamp.com/album/mr-mixondo",
    type: "bandcamp",
    embedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=4096476243/size=large/bgcol=181b16/linkcol=00f0c8/tracklist=false/artwork=small/transparent=true/"
  },
  Kaloli: {
    url: "https://nihiloxica.bandcamp.com/album/kaloli",
    type: "bandcamp",
    embedUrl:
      "https://bandcamp.com/EmbeddedPlayer/track=243369412/size=large/bgcol=181b16/linkcol=00f0c8/tracklist=false/artwork=small/transparent=true/"
  },
  "Meeting With The King": {
    url: "https://djlag.bandcamp.com/album/meeting-with-the-king",
    type: "link"
  },
  Subconsciously: {
    url: "https://www.blackcoffeeofficial.com/",
    type: "link"
  },
  "Global Control / Invisible Invasion": {
    url: "https://ammar808.bandcamp.com/",
    type: "link"
  },
  "Campo del Cielo": {
    url: "https://shikashika.bandcamp.com/",
    type: "link"
  },
  "A Guide to the Birdsong / Shika Shika catalogue": {
    url: "https://shikashika.bandcamp.com/",
    type: "link"
  },
  "Wonderwheel Global Dancefloor Dossier": {
    url: "https://wonderwheelrecordings.bandcamp.com/",
    type: "link"
  },
  "Habibi Funk Catalogue": {
    url: "https://habibifunkrecords.bandcamp.com/",
    type: "bandcamp",
    embedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3026658999/size=large/bgcol=181b16/linkcol=00f0c8/artwork=small/transparent=true/"
  },
  "Awesome Tapes From Africa Archive": {
    url: "https://awesometapesfromafrica.bandcamp.com/",
    type: "bandcamp",
    embedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=3397974530/size=large/bgcol=181b16/linkcol=00f0c8/tracklist=false/artwork=small/transparent=true/"
  },
  "Sahel Sounds Field Archive": {
    url: "https://sahelsounds.bandcamp.com/",
    type: "bandcamp",
    embedUrl:
      "https://bandcamp.com/EmbeddedPlayer/album=1276877347/size=large/bgcol=181b16/linkcol=00f0c8/tracklist=false/artwork=small/transparent=true/"
  },
  "Bosphorus Slow Tide": {
    url: "https://soundcloud.com/search?q=middle%20east%20downtempo%20psychill",
    type: "soundcloud"
  },
  "Andean Electronic Listening Path": {
    url: "https://zzkrecords.bandcamp.com/",
    type: "link"
  },
  "Psychill / Psybient Listening Path": {
    url: "https://ultimae.bandcamp.com/",
    type: "link"
  },
  "Amapiano / South African Log Drum Path": {
    url: "https://soundcloud.com/tags/amapiano",
    type: "soundcloud"
  },
  "Kuduro / Lisbon-Angola Club Dossier": {
    url: "https://principediscos.bandcamp.com/",
    type: "link"
  },
  "Digital Cumbia / ZZK Path": {
    url: "https://zzkrecords.bandcamp.com/",
    type: "link"
  },
  "Gnawa Electronic / Morocco Deep Trance Path": {
    url: "https://soundcloud.com/search?q=gnawa%20electronic",
    type: "soundcloud"
  },
  "Dabke Club / Levantine Bass Path": {
    url: "https://soundcloud.com/search?q=dabke%20electronic",
    type: "soundcloud"
  },
  "Anatolian Psych / Modern Edits Path": {
    url: "https://bandcamp.com/tag/anatolian-psych",
    type: "link"
  },
  "Maloya Electronic / Indian Ocean Path": {
    url: "https://bandcamp.com/tag/maloya",
    type: "link"
  },
  "Ethio-Jazz Reissue / Addis Groove Path": {
    url: "https://bandcamp.com/tag/ethio-jazz",
    type: "link"
  },
  "Highlife / Disco Reissue Path": {
    url: "https://analogafrica.com/",
    type: "link"
  },
  "Balearic Global Downtempo Path": {
    url: "https://music-from-memory.bandcamp.com/",
    type: "link"
  }
};

const pulseModes = [
  {
    id: "run",
    title: "RUN",
    subtitle: "heat",
    icon: "⌁",
    color: "red",
    prompt: "高能、热、适合跑步和 club warm-up 的 afro techno / gqom",
    filter: "afro techno"
  },
  {
    id: "drive",
    title: "DRIVE",
    subtitle: "road",
    icon: "▱",
    color: "cyan",
    prompt: "夜路、长途、速度稳定的 downtempo / deep house / afro house",
    filter: "afro house"
  },
  {
    id: "grow",
    title: "GROW",
    subtitle: "soil",
    icon: "◒",
    color: "green",
    prompt: "自然、田野录音、organic downtempo 和 folktronica",
    filter: "organic downtempo"
  },
  {
    id: "keep",
    title: "KEEP",
    subtitle: "loop",
    icon: "⌂",
    color: "yellow",
    prompt: "咖啡馆、展览、长时间循环播放的 reissue / arab funk / cassette archive",
    filter: "reissue"
  },
  {
    id: "rinse",
    title: "RINSE",
    subtitle: "steam",
    icon: "≋",
    color: "blue",
    prompt: "湿润、蒸汽、洗浴后半夜的 psychill / psybient",
    filter: "psychill"
  },
  {
    id: "drift",
    title: "DRIFT",
    subtitle: "float",
    icon: "✦",
    color: "purple",
    prompt: "漂浮、深听、慢速 psychedelic ambient 与跨文化声音",
    filter: "psybient"
  }
];

const aiFeatures = [
  {
    title: "AI 全维度音乐分析",
    text: "对曲目生成风格、能量、情绪、音色、地区线索、BPM 区间和混音建议，让曲库更清晰可搜。"
  },
  {
    title: "跨平台智能搜歌",
    text: "用一句话搜：曲库、本地档案、Bandcamp/SoundCloud 来源池和活动线索一起返回。"
  },
  {
    title: "场景化智能排歌",
    text: "Run、Drive、Grow、Keep、Rinse、Drift 六种场景卡片，可自动生成播放方向，也支持手动微调。"
  },
  {
    title: "24h AI DJ 助手",
    text: "随时询问混音、设备、曲序、情绪过渡、民族采样伦理和现场 set 结构。"
  }
];

const musicResources = [
  {
    title: "SoundCloud: Afro House",
    platform: "SoundCloud",
    category: "afro house",
    url: "https://soundcloud.com/tags/afro%20house",
    note: "适合挖 DJ set、未发行 demo、独立制作人与厂牌上传。"
  },
  {
    title: "SoundCloud: Afro Techno",
    platform: "SoundCloud",
    category: "afro techno",
    url: "https://soundcloud.com/search?q=afro%20techno",
    note: "适合追踪 DJ set、club edit 和非洲节奏进入 techno 系统的混音线索。"
  },
  {
    title: "SoundCloud: Organic House",
    platform: "SoundCloud",
    category: "organic house",
    url: "https://soundcloud.com/tags/organic%20house",
    note: "适合找沙漠、安第斯、中东旋律与慢速 house 的混合方向。"
  },
  {
    title: "SoundCloud: Psychill",
    platform: "SoundCloud",
    category: "psychill",
    url: "https://soundcloud.com/tags/psychill",
    note: "适合寻找 psybient、chillout stage、长混音与旅行场景音乐。"
  },
  {
    title: "SoundCloud: Field Recordings",
    platform: "SoundCloud",
    category: "field recording",
    url: "https://soundcloud.com/tags/field%20recording",
    note: "适合收集自然录音、城市声景和可作为文化背景研究的声音素材。"
  },
  {
    title: "Bandcamp: Downtempo",
    platform: "Bandcamp",
    category: "downtempo",
    url: "https://bandcamp.com/tag/downtempo",
    note: "适合购买和支持独立音乐人，保留专辑语境与说明文字。"
  },
  {
    title: "Bandcamp: Afro House",
    platform: "Bandcamp",
    category: "afro house",
    url: "https://bandcamp.com/tag/afro-house",
    note: "适合查找厂牌发行、独立 EP 和可直接购买支持的舞曲资源。"
  },
  {
    title: "Bandcamp: Afro Techno",
    platform: "Bandcamp",
    category: "afro techno",
    url: "https://bandcamp.com/tag/afro-techno",
    note: "适合连接泛非 club、工业低频、percussion techno 和地下厂牌。"
  },
  {
    title: "Bandcamp: Gqom",
    platform: "Bandcamp",
    category: "gqom",
    url: "https://bandcamp.com/tag/gqom",
    note: "南非 club 声音线索，适合和 afro techno 分开整理。"
  },
  {
    title: "Bandcamp: Singeli",
    platform: "Bandcamp",
    category: "singeli",
    url: "https://bandcamp.com/tag/singeli",
    note: "坦桑尼亚高速电子街区声音入口，适合追踪 Nyege Nyege 相关发行。"
  },
  {
    title: "Bandcamp: Psybient",
    platform: "Bandcamp",
    category: "psybient",
    url: "https://bandcamp.com/tag/psybient",
    note: "适合扩充 psychill、ambient、downtempo 和 psychedelic 之间的资料。"
  },
  {
    title: "Bandcamp: Field Recordings",
    platform: "Bandcamp",
    category: "field recording",
    url: "https://bandcamp.com/tag/field-recordings",
    note: "适合寻找有说明文字、地理线索和录音语境的声音专辑。"
  },
  {
    title: "Nyege Nyege Tapes",
    platform: "Bandcamp",
    category: "east african club",
    url: "https://nyegenyegetapes.bandcamp.com/",
    note: "东非电子、singeli、传统/实验混合与泛非地下舞曲的重要厂牌入口。"
  },
  {
    title: "Hakuna Kulala",
    platform: "Bandcamp",
    category: "experimental club",
    url: "https://hakunakulala.bandcamp.com/",
    note: "更偏 club、rap、noise、bass 和实验电子的东非/泛非厂牌线索。"
  },
  {
    title: "Shika Shika",
    platform: "Bandcamp",
    category: "organic electronic",
    url: "https://shikashika.bandcamp.com/",
    note: "生态、民间根源、拉美电子与公益项目结合，适合做文化专题。"
  },
  {
    title: "Wonderwheel Recordings",
    platform: "Bandcamp",
    category: "global bass",
    url: "https://wonderwheelrecordings.bandcamp.com/",
    note: "Brooklyn 出发的 global dancefloor 厂牌，连接 tropical、dub、Latin 和 house。"
  },
  {
    title: "ZZK Records",
    platform: "Bandcamp",
    category: "latin electronic",
    url: "https://zzkrecords.bandcamp.com/",
    note: "拉美电子、cumbia digital、安第斯与实验 club 的重要入口。"
  },
  {
    title: "Sahel Sounds",
    platform: "Bandcamp",
    category: "sahel guitar",
    url: "https://sahelsounds.bandcamp.com/",
    note: "西非 Sahel 吉他、田野录音、电影和艺术家合作项目资料。"
  },
  {
    title: "Awesome Tapes From Africa",
    platform: "Bandcamp",
    category: "cassette archive",
    url: "https://awesometapesfromafrica.bandcamp.com/",
    note: "非洲磁带文化与授权再版入口，适合补历史档案和 DJ digging 线索。"
  },
  {
    title: "Habibi Funk",
    platform: "Bandcamp",
    category: "arab funk",
    url: "https://habibifunkrecords.bandcamp.com/",
    note: "阿拉伯 funk、jazz、soul 和电影配乐再版，适合补充中东/北非历史声音。"
  },
  {
    title: "Glitterbeat Records",
    platform: "Official",
    category: "contemporary global",
    url: "https://glitterbeat.com/artists/",
    note: "当代全球音乐、跨文化合作和 roots experimental 的艺人目录。"
  },
  {
    title: "Analog Africa",
    platform: "Official",
    category: "reissue",
    url: "https://analogafrica.com/",
    note: "非洲、拉美历史音乐再版厂牌，适合建立按年代和地区的资料索引。"
  },
  {
    title: "Sublime Frequencies",
    platform: "Official",
    category: "field archive",
    url: "https://www.sublimefrequencies.com/",
    note: "田野录音、广播、民间音乐与边缘声音档案，适合做声音民族志入口。"
  },
  {
    title: "Free Music Archive",
    platform: "FMA",
    category: "creative commons",
    url: "https://freemusicarchive.org/genre/International/",
    note: "开放授权音乐索引，使用前仍需逐条确认许可证。"
  },
  {
    title: "Free Music Archive: Electronic",
    platform: "FMA",
    category: "creative commons",
    url: "https://freemusicarchive.org/genre/Electronic/",
    note: "适合找可授权的电子音乐线索，后续可按 license、mood、BPM 做二次整理。"
  },
  {
    title: "Jamendo World",
    platform: "Jamendo",
    category: "creative commons",
    url: "https://www.jamendo.com/start",
    note: "独立音乐平台，可按 mood、genre、license 继续筛选。"
  },
  {
    title: "Ektoplazm",
    platform: "Creative Commons",
    category: "psy / downtempo",
    url: "https://ektoplazm.com/",
    note: "Psytrance、psychill、psybient 和 downtempo 的 Creative Commons 发行档案。"
  },
  {
    title: "Internet Archive Live / Global",
    platform: "Internet Archive",
    category: "archive",
    url: "https://archive.org/details/audio",
    note: "适合公共领域、田野录音、现场录音和历史资料挖掘。"
  },
  {
    title: "Internet Archive: 78 RPM",
    platform: "Internet Archive",
    category: "historical archive",
    url: "https://archive.org/details/georgeblood",
    note: "历史唱片数字化档案，可用于研究旧录音、民间旋律和再版线索。"
  },
  {
    title: "ccMixter",
    platform: "ccMixter",
    category: "remix stems",
    url: "https://ccmixter.org/",
    note: "适合寻找可 remix 的人声、乐器和 Creative Commons 素材。"
  },
  {
    title: "Wikimedia Commons Audio",
    platform: "Wikimedia",
    category: "public media",
    url: "https://commons.wikimedia.org/wiki/Category:Audio_files",
    note: "公共媒体音频入口，适合找公共领域或开放授权的历史声音资料。"
  },
  {
    title: "Pixabay Music",
    platform: "Pixabay",
    category: "royalty-free",
    url: "https://pixabay.com/music/search/world/",
    note: "适合 UI、视频和 demo 的免版税音乐线索。"
  },
  {
    title: "Pixabay: Ethnic Music",
    platform: "Pixabay",
    category: "royalty-free",
    url: "https://pixabay.com/music/search/ethnic/",
    note: "适合为 App demo、预告视频和视觉页面寻找免版税背景音乐。"
  },
  {
    title: "Resident Advisor: Africa",
    platform: "RA",
    category: "events",
    url: "https://ra.co/events",
    note: "活动信息入口，可按城市继续筛选 afro house、club、festival 和 DJ set。"
  },
  {
    title: "Worldwide FM",
    platform: "Radio",
    category: "radio archive",
    url: "https://worldwidefm.net/",
    note: "全球音乐电台节目、DJ set 和访谈入口，适合做每周 digger 清单。"
  },
  {
    title: "SoundCloud: Amapiano",
    platform: "SoundCloud",
    category: "amapiano",
    url: "https://soundcloud.com/tags/amapiano",
    note: "南非 log drum、vocal house 和街区舞池线索，适合找 DJ set 与 demo。"
  },
  {
    title: "SoundCloud: Kuduro",
    platform: "SoundCloud",
    category: "kuduro",
    url: "https://soundcloud.com/tags/kuduro",
    note: "安哥拉和 Lisbon bass 的高能舞曲入口，可继续挖 Príncipe 相关艺人。"
  },
  {
    title: "SoundCloud: Dabke Electronic",
    platform: "SoundCloud",
    category: "dabke",
    url: "https://soundcloud.com/search?q=dabke%20electronic",
    note: "Levant 婚礼键盘、mijwez 与 club edit 的搜索入口。"
  },
  {
    title: "SoundCloud: Gnawa Electronic",
    platform: "SoundCloud",
    category: "gnawa electronic",
    url: "https://soundcloud.com/search?q=gnawa%20electronic",
    note: "摩洛哥 Gnawa 与 dub、downtempo、house 融合的试听线索。"
  },
  {
    title: "Bandcamp: Amapiano",
    platform: "Bandcamp",
    category: "amapiano",
    url: "https://bandcamp.com/tag/amapiano",
    note: "适合查找南非当代 house、vocal collaboration 和 club release。"
  },
  {
    title: "Bandcamp: Kuduro",
    platform: "Bandcamp",
    category: "kuduro",
    url: "https://bandcamp.com/tag/kuduro",
    note: "适合连接安哥拉电子、葡语非洲和 Lisbon underground club。"
  },
  {
    title: "Bandcamp: Cumbia Digital",
    platform: "Bandcamp",
    category: "cumbia digital",
    url: "https://bandcamp.com/tag/cumbia-digital",
    note: "拉美电子、global bass 与 cumbia 低频融合的入口。"
  },
  {
    title: "Bandcamp: Dabke",
    platform: "Bandcamp",
    category: "dabke",
    url: "https://bandcamp.com/tag/dabke",
    note: "叙利亚、黎巴嫩及 diaspora 场景线索，可补中东舞曲分类。"
  },
  {
    title: "Bandcamp: Gnawa",
    platform: "Bandcamp",
    category: "gnawa electronic",
    url: "https://bandcamp.com/tag/gnawa",
    note: "摩洛哥 Gnawa 传统、融合与当代电子作品的继续挖掘入口。"
  },
  {
    title: "Bandcamp: Anatolian Psych",
    platform: "Bandcamp",
    category: "anatolian psych",
    url: "https://bandcamp.com/tag/anatolian-psych",
    note: "土耳其迷幻、民歌旋律、再版和现代 edit 的资料入口。"
  },
  {
    title: "Bandcamp: Maloya",
    platform: "Bandcamp",
    category: "maloya electronic",
    url: "https://bandcamp.com/tag/maloya",
    note: "Reunion Island 和印度洋社群声音，适合补本土文化感更强的条目。"
  },
  {
    title: "Bandcamp: Ethio Jazz",
    platform: "Bandcamp",
    category: "ethio-jazz",
    url: "https://bandcamp.com/tag/ethio-jazz",
    note: "埃塞俄比亚 jazz、funk、再版与当代乐队资料入口。"
  },
  {
    title: "Music From Memory",
    platform: "Bandcamp",
    category: "balearic",
    url: "https://music-from-memory.bandcamp.com/",
    note: "Balearic、ambient、leftfield pop 和再版资料，适合做慢速深听路径。"
  },
  {
    title: "Príncipe",
    platform: "Bandcamp",
    category: "kuduro",
    url: "https://principediscos.bandcamp.com/",
    note: "Lisbon underground club 厂牌，连接 kuduro、batida 和葡语非洲电子。"
  },
  {
    title: "Bongo Joe Records",
    platform: "Bandcamp",
    category: "reissue",
    url: "https://bongojoe.bandcamp.com/",
    note: "再版、全球独立音乐和 hybrid folk 入口，适合补历史与当代之间的桥。"
  },
  {
    title: "Ostinato Records",
    platform: "Bandcamp",
    category: "reissue",
    url: "https://ostinatorecords.bandcamp.com/",
    note: "非洲、加勒比、印度洋和 diaspora 历史声音再版资料。"
  },
  {
    title: "Soundway Records",
    platform: "Bandcamp",
    category: "afro disco",
    url: "https://soundwayrecords.bandcamp.com/",
    note: "Highlife、Afro disco、Latin 和 tropical reissue 的重要资源池。"
  },
  {
    title: "Mais Um",
    platform: "Bandcamp",
    category: "brazilian global",
    url: "https://maisum.bandcamp.com/",
    note: "巴西当代声音、roots、club 和实验音乐的厂牌入口。"
  },
  {
    title: "Galletas Calientes",
    platform: "Bandcamp",
    category: "latin electronic",
    url: "https://galletascalientesrecords.bandcamp.com/",
    note: "Cumbia、tropical bass、Latin electronic 和全球舞池连接点。"
  }
];

const archiveExpansionScenes = [
  ["Highlife & Afro Disco", "Ghana / Nigeria / West Africa", "Ghana", "1950s-1980s", ["highlife", "afro disco", "reissue"], "Soundway", ["Orchestra Baobab", "Ebo Taylor", "Pat Thomas"], ["talking drum", "guitar", "horns"]],
  ["Sahel Guitar Continuum", "Mali / Niger / Sahel", "Mali", "1970s-now", ["sahel guitar", "desert blues", "field recording"], "Sahel Sounds", ["Tinariwen", "Bombino", "Mdou Moctar"], ["ngoni", "electric guitar", "tehardent"]],
  ["Manding Griot Archive", "Senegal / Mali / Gambia", "Mali", "1900s-now", ["griot", "kora", "oral tradition"], "Syllart / field archive", ["Toumani Diabate", "Ballake Sissoko", "Sona Jobarteh"], ["kora", "balafon", "ngoni"]],
  ["Ethiopian Golden Age", "Addis Ababa, Ethiopia", "Ethiopia", "1968-1978", ["ethio-jazz", "funk", "reissue"], "Ethiopiques", ["Mulatu Astatke", "Mahmoud Ahmed", "Hailu Mergia"], ["vibraphone", "krar", "masenqo"]],
  ["Nyege Nyege Ecosystem", "Uganda / Tanzania / Kenya", "Uganda", "2015-now", ["singeli", "experimental club", "afro techno"], "Nyege Nyege Tapes", ["DJ Travella", "Nihiloxica", "Slikback"], ["ngalabi", "drum kit", "software sampler"]],
  ["Durban Gqom Pressure", "Durban, South Africa", "South Africa", "2010s-now", ["gqom", "afro techno", "club"], "Black Major / Gqom Oh!", ["DJ Lag", "Rudeboyz", "Citizen Boy"], ["log drum", "kick drum", "vocal chop"]],
  ["Amapiano Log Drum Era", "South Africa", "South Africa", "2010s-now", ["amapiano", "afro house", "deep house"], "PianoHub / independent", ["Kabza De Small", "DJ Maphorisa", "DBN Gogo"], ["log drum", "keys", "shaker"]],
  ["Gnawa Trance Routes", "Morocco / Maghreb", "Morocco", "1900s-now", ["gnawa electronic", "trance", "fusion"], "Hive Mind / Glitterbeat", ["Maleem Mahmoud Gania", "Ammar 808", "Innov Gnawa"], ["guembri", "qraqeb", "voice"]],
  ["Arab Funk & Maghreb Reissues", "Algeria / Lebanon / Egypt / Morocco", "Algeria", "1960s-1980s", ["arab funk", "jazz", "reissue"], "Habibi Funk", ["Ahmed Malek", "Ferkat Al Ard", "Rogér Fakhr"], ["oud", "organ", "brass"]],
  ["Dabke Wedding Electronics", "Syria / Lebanon / Levant", "Syria", "1980s-now", ["dabke", "global bass", "wedding music"], "Sublime Frequencies / independent", ["Omar Souleyman", "Rizan Said", "Hello Psychaleppo"], ["mijwez", "keyboard", "tabla"]],
  ["Anatolian Psych Lineage", "Turkey / diaspora", "Turkey", "1960s-now", ["anatolian psych", "folk rock", "reissue"], "Bongo Joe / Glitterbeat", ["Selda Bagcan", "Altin Gun", "Baris Manco"], ["saz", "baglama", "electric guitar"]],
  ["Persian Classical & Electronic Memory", "Iran / diaspora", "Iran", "1900s-now", ["persian classical", "ambient", "experimental"], "30M Records / independent", ["Kayhan Kalhor", "Sote", "Mamak Khadem"], ["santur", "tar", "setar"]],
  ["Qawwali & Sufi Voice", "Pakistan / India", "Pakistan", "1940s-now", ["qawwali", "sufi", "vocal tradition"], "Real World / EMI Pakistan", ["Nusrat Fateh Ali Khan", "Sabri Brothers", "Abida Parveen"], ["harmonium", "tabla", "voice"]],
  ["Rajasthan Folk Routes", "Rajasthan, India", "India", "1900s-now", ["rajasthani folk", "field recording", "desert music"], "Amarrass / field archive", ["Lakha Khan", "Kutle Khan", "Rajasthan Josh"], ["sarangi", "khartal", "dholak"]],
  ["Carnatic Future Bass", "South India / diaspora", "India", "1700s-now", ["carnatic", "global bass", "experimental club"], "Glitterbeat / independent", ["Ammar 808", "Ranjani-Gayatri", "Aruna Sairam"], ["mridangam", "veena", "nadaswaram"]],
  ["Silk Road Modal Archive", "Central Asia", "Uzbekistan", "1900s-now", ["maqam", "silk road", "field recording"], "Smithsonian Folkways / Ocora", ["Munadjat Yulchieva", "Turgun Alimatov", "Sevara Nazarkhan"], ["dutar", "rabab", "doira"]],
  ["Mongolian Overtone Routes", "Mongolia / Tuva", "Mongolia", "1900s-now", ["throat singing", "overtone", "folk"], "Jaro / Smithsonian", ["Huun-Huur-Tu", "Yat-Kha", "Anda Union"], ["morin khuur", "igil", "tovshuur"]],
  ["Chinese Southwest Traditions", "Yunnan / Guizhou / Sichuan", "China", "1900s-now", ["minority music", "field recording", "folk"], "field archive", ["Hani singers", "Dong chorus", "Yi musicians"], ["lusheng", "bawu", "hulusi"]],
  ["Chinese Classical Strings", "China / diaspora", "China", "1900s-now", ["chinese classical", "experimental", "string music"], "Naxos / independent", ["Wu Man", "Min Xiao-Fen", "Zhao Cong"], ["pipa", "erhu", "guzheng"]],
  ["Gamelan & Modern Electronics", "Java / Bali / Indonesia", "Indonesia", "1900s-now", ["gamelan", "minimalism", "electronic"], "Nonesuch / field archive", ["Senyawa", "Gamelan Sekar Jaya", "Dewa Alit"], ["gamelan", "kendang", "gong"]],
  ["Sape & Borneo Rainforest Routes", "Sarawak / Borneo", "Malaysia", "1900s-now", ["sape", "indigenous", "ambient"], "field archive", ["Alena Murang", "Mathew Ngau Jau", "Sada Borneo"], ["sape", "gong", "voice"]],
  ["Thai Molam & Luk Thung", "Isan / Thailand", "Thailand", "1960s-now", ["molam", "luk thung", "psych folk"], "ZudRangMa / EM Records", ["Paradise Bangkok Molam International Band", "Dao Bandon", "Onuma Singsiri"], ["khaen", "phin", "drum"]],
  ["Vietnamese Experimental Roots", "Vietnam / diaspora", "Vietnam", "1900s-now", ["dan bau", "experimental", "folk"], "independent", ["Van-Anh Vo", "Hanoi Masters", "The Six Tones"], ["dan bau", "dan tranh", "voice"]],
  ["Philippine Kulintang Routes", "Mindanao / Philippines", "Philippines", "1900s-now", ["kulintang", "gong music", "diaspora"], "Smithsonian Folkways / field archive", ["Danongan Kalanduyan", "Kulintang Arts", "Susie Ibarra"], ["kulintang", "agung", "dabakan"]],
  ["Japanese Ambient & Folk Memory", "Japan", "Japan", "1970s-now", ["japanese ambient", "minyo", "reissue"], "Light In The Attic / WRWTFWW", ["Haruomi Hosono", "Midori Takada", "Kankyō Ongaku artists"], ["shakuhachi", "koto", "synthesizer"]],
  ["Korean Court & Shamanic Routes", "Korea", "South Korea", "1900s-now", ["gugak", "shamanic", "experimental"], "AkdangEban / independent", ["Park Jiha", "Jambinai", "Kim Duk-soo"], ["haegeum", "geomungo", "janggu"]],
  ["Andean Electronics", "Ecuador / Peru / Bolivia", "Ecuador", "2000s-now", ["organic downtempo", "andean", "global bass"], "ZZK / Shika Shika", ["Nicola Cruz", "Dengue Dengue Dengue", "Lagartijeando"], ["charango", "quena", "siku"]],
  ["Amazonian Cumbia & Ritual Sound", "Peru / Colombia / Brazil", "Peru", "1960s-now", ["amazonian cumbia", "ritual music", "field recording"], "Analog Africa / Infopesa", ["Los Mirlos", "Juaneco y su Combo", "Shipibo recordings"], ["siku", "maracas", "voice"]],
  ["Brazilian Afro-Bahia Routes", "Brazil", "Brazil", "1960s-now", ["samba reggae", "afro-brazilian", "tropicalia"], "Mais Um / Far Out", ["Gilberto Gil", "Os Mutantes", "Ilê Aiyê"], ["berimbau", "atabaque", "cuica"]],
  ["Caribbean Dub Migration", "Jamaica / UK / global", "Jamaica", "1960s-now", ["dub", "soundsystem", "migration"], "Pressure Sounds / On-U Sound", ["King Tubby", "Lee Scratch Perry", "Scientist"], ["spring reverb", "bass guitar", "melodica"]],
  ["Haitian Vodou Jazz & Roots", "Haiti / diaspora", "Haiti", "1900s-now", ["vodou jazz", "rara", "roots"], "Ostinato / Smithsonian", ["Lakou Mizik", "RAM", "Chouk Bwa"], ["vaksin", "tanbou", "voice"]],
  ["Cuban Son & Afro-Cuban Jazz", "Cuba", "Cuba", "1900s-now", ["son", "afro-cuban", "jazz"], "World Circuit / EGREM", ["Buena Vista Social Club", "Irakere", "Los Van Van"], ["tres", "congas", "clave"]],
  ["Balkan Brass & Roma Routes", "Balkans", "Serbia", "1900s-now", ["balkan brass", "roma", "wedding music"], "Asphalt Tango / Piranha", ["Fanfare Ciocarlia", "Boban Markovic", "Taraf de Haidouks"], ["trumpet", "accordion", "tapan"]],
  ["Mediterranean Balearic Listening", "Mediterranean / Ibiza", "Spain", "1980s-now", ["balearic", "downtempo", "reissue"], "Music From Memory", ["Gigi Masin", "Gaussian Curve", "Mark Barrott"], ["synthesizer", "guitar", "field recording"]],
  ["Portuguese-Angolan Lisbon Bass", "Lisbon / Angola", "Portugal", "1990s-now", ["kuduro", "batida", "lisbon bass"], "Príncipe", ["DJ Marfox", "Nídia", "DJ Nigga Fox"], ["drum machine", "vocal chop", "synth"]],
  ["Greek Rebetiko Memory", "Greece / Asia Minor", "Greece", "1920s-now", ["rebetiko", "diaspora", "folk"], "Mississippi / Olvido", ["Markos Vamvakaris", "Roza Eskenazi", "Marika Papagika"], ["bouzouki", "baglamas", "voice"]],
  ["North African Rai & Synth", "Algeria / France", "Algeria", "1970s-now", ["rai", "synth", "diaspora"], "Outre National / reissue", ["Cheb Khaled", "Cheikha Rimitti", "Rachid Taha"], ["gasba", "derbouka", "synth"]],
  ["Egyptian Shaabi & Mahraganat", "Cairo, Egypt", "Egypt", "1970s-now", ["shaabi", "mahraganat", "street music"], "100Copies / independent", ["Islam Chipsy", "Oka Wi Ortega", "Ahmed Adaweya"], ["keyboard", "tabla", "autotune"]],
  ["Iranian Bandari & Gulf Routes", "Persian Gulf", "Iran", "1900s-now", ["bandari", "gulf rhythm", "folk"], "field archive", ["Saied Shanbehzadeh", "Hormozgan musicians", "Bandari ensembles"], ["neyanban", "dammam", "voice"]],
  ["Mizrahi & Yemenite Pop", "Israel / Yemenite diaspora", "Israel", "1960s-now", ["mizrahi", "yemenite", "pop"], "Fortuna / Batov", ["Ofra Haza", "A-WA", "Grazia"], ["oud", "drum machine", "voice"]],
  ["Afghan Rubab & Diaspora", "Afghanistan / diaspora", "Afghanistan", "1900s-now", ["rubab", "folk", "diaspora"], "Smithsonian / field archive", ["Homayun Sakhi", "Ustad Mohammad Omar", "Ahmad Zahir"], ["rubab", "tabla", "harmonium"]],
  ["Sri Lankan Baila & Island Pop", "Sri Lanka", "Sri Lanka", "1950s-now", ["baila", "island pop", "reissue"], "Sooriya / reissue", ["Wally Bastiansz", "Clarence Wijewardena", "Mignonne Fernando"], ["guitar", "bongo", "accordion"]],
  ["Laotian & Khmer Psychedelic Routes", "Laos / Cambodia", "Cambodia", "1960s-now", ["khmer rock", "lao folk", "reissue"], "Sublime Frequencies / Dust-to-Digital", ["Ros Sereysothea", "Dengue Fever", "Molam Lao singers"], ["tro", "khaen", "electric guitar"]],
  ["Papua & Pacific Stringbands", "Pacific Islands", "Papua New Guinea", "1900s-now", ["stringband", "pacific", "field recording"], "Wantok / field archive", ["George Telek", "Airileke", "Pacific stringbands"], ["ukulele", "bamboo band", "voice"]],
  ["Arctic & Nordic Roots", "Sápmi / Nordic region", "Norway", "1900s-now", ["joik", "nordic folk", "ambient"], "Nordic Notes / independent", ["Mari Boine", "Wimme", "Värttinä"], ["joik", "kantele", "hardanger fiddle"]],
  ["Ukrainian & Eastern European Polyphony", "Ukraine / Georgia / Balkans", "Ukraine", "1900s-now", ["polyphony", "folk", "field recording"], "Ocora / Smithsonian", ["DakhaBrakha", "Rustavi Choir", "Village singers"], ["bandura", "panduri", "voice"]],
  ["Cape Verde Morna & Funaná", "Cape Verde", "Cape Verde", "1950s-now", ["morna", "funana", "diaspora"], "Lusafrica / Ostinato", ["Cesaria Evora", "Bitori", "Bulimundo"], ["cavaquinho", "accordion", "ferrinho"]],
  ["Somali Disco & Horn of Africa", "Somalia / Djibouti / Ethiopia", "Somalia", "1970s-now", ["somali disco", "funk", "reissue"], "Analog Africa / Ostinato", ["Dur-Dur Band", "Iftin Band", "Aar Maanta"], ["oud", "synth", "horns"]],
  ["Sudanese Jazz & City Pop", "Sudan", "Sudan", "1960s-now", ["sudanese jazz", "city pop", "reissue"], "Habibi Funk / Ostinato", ["Sharhabil Ahmed", "Abdel Gadir Salim", "Noori"], ["tambur", "saxophone", "oud"]],
  ["Kenyan Benga & Luo Guitar", "Kenya", "Kenya", "1960s-now", ["benga", "guitar", "east africa"], "Sterns / field archive", ["D.O. Misiani", "Orchestra Super Mazembe", "Kakai Kilonzo"], ["nyatiti", "electric guitar", "percussion"]]
];

const archiveRecordTypes = [
  ["Canonical Recording", "A core listening entry for understanding how the scene sounds in recorded form."],
  ["Field / Community Context", "A cultural-context record focused on social setting, place, language and performance ecology."],
  ["Label / Circulation Route", "A distribution record tracing labels, cassette movement, radio, migration or reissue pathways."],
  ["Contemporary Bridge", "A modern entry showing how the tradition reappears in club culture, ambient music or electronic production."]
];

const archiveExpansionRecords = archiveExpansionScenes.flatMap((scene, sceneIndex) =>
  archiveRecordTypes.map(([recordType, listeningContext], typeIndex) => {
    const [title, region, country, year, genres, label, artists, instruments] = scene;
    const coverPool = [
      "https://f4.bcbits.com/img/a0933768371_10.jpg",
      "https://f4.bcbits.com/img/a1640063585_10.jpg",
      "https://f4.bcbits.com/img/a0206727659_10.jpg",
      "https://f4.bcbits.com/img/a2438671191_10.jpg",
      "https://f4.bcbits.com/img/a4282425468_10.jpg",
      "https://f4.bcbits.com/img/a4068706317_10.jpg",
      "https://f4.bcbits.com/img/a0205422707_10.jpg"
    ];
    return {
      title: `${title}: ${recordType}`,
      artist: artists[typeIndex % artists.length],
      region,
      country,
      year,
      genres,
      label,
      cover: coverPool[(sceneIndex + typeIndex) % coverPool.length],
      summary: `${recordType} for ${title}, connecting ${country} to ${genres.slice(0, 2).join(" and ")} listening histories.`,
      culture: `${title} should be read through place, migration, recording technology, instruments and community practice. Related artists include ${artists.join(", ")}; key instruments include ${instruments.join(", ")}.`,
      culturalNotes: `${country} / ${region}: ${title} links local performance practice to wider archive, festival, radio or club circulation.`,
      listeningContext,
      relatedArtists: artists,
      relatedInstruments: instruments,
      source: `${label} / archive research record`,
      sourceUrl: `https://bandcamp.com/search?q=${encodeURIComponent(title)}`
    };
  })
);

albums.push(...archiveExpansionRecords);

featuredStories.push(
  ...[
    ["ETHIO JAZZ", "1968 — now", "Ethiopia", ["Mulatu Astatke", "Hailu Mergia", "Mahmoud Ahmed"], ["Ethiopiques", "Awesome Tapes"], ["Ethio-jazz recordings", "Addis groove"], ["vibraphone", "krar"], "Addis Ababa studio orchestras, jazz harmony and Ethiopian modal systems."],
    ["HIGHLIFE & AFRO DISCO", "1950 — 1985", "Ghana · Nigeria · Senegal", ["Ebo Taylor", "Pat Thomas", "Orchestra Baobab"], ["Soundway", "Analog Africa"], ["Highlife bands", "Afro disco reissues"], ["talking drum", "guitar"], "Urban dance bands, guitar modernism and post-independence nightlife."],
    ["CASSETTE CULTURES OF WEST AFRICA", "1970 — now", "Mali · Ghana · Senegal", ["Ata Kak", "Nahawa Doumbia", "market cassette artists"], ["Awesome Tapes", "Sahel Sounds"], ["Cassette archive", "market recordings"], ["voice", "drum machine"], "Cassettes as local media, informal distribution and later reissue practice."],
    ["THE RISE OF AMAPIANO", "2012 — now", "South Africa", ["Kabza De Small", "DJ Maphorisa", "DBN Gogo"], ["PianoHub", "independent"], ["Log drum era", "vocal piano"], ["log drum", "keys"], "Township circulation, dance videos and the log drum as a global rhythmic sign."],
    ["KUDURO AND LISBON BASS", "1990 — now", "Angola · Portugal", ["DJ Marfox", "Nídia", "DJ Nigga Fox"], ["Príncipe", "independent"], ["Batida", "Lisbon bass"], ["drum machine", "vocal chop"], "Angolan dance energy, migration and Lisbon underground club networks."],
    ["DABKE BEYOND WEDDINGS", "1980 — now", "Syria · Lebanon · Palestine", ["Omar Souleyman", "Rizan Said", "Hello Psychaleppo"], ["Sublime Frequencies", "independent"], ["Wedding tapes", "Levant club"], ["mijwez", "keyboard"], "Wedding performance, diaspora circulation and electronic reinterpretation."],
    ["REUNION ISLAND MALOYA", "1950 — now", "Reunion", ["Danyel Waro", "Lindigo", "Christine Salem"], ["Ostinato", "Bongo Joe"], ["Maloya studies", "Creole rhythm"], ["kayamb", "rouler"], "Creole memory, labor history and percussion as resistance archive."],
    ["THE STORY OF KORA", "1200 — now", "Mali · Gambia · Senegal", ["Toumani Diabate", "Ballake Sissoko", "Sona Jobarteh"], ["World Circuit", "field archive"], ["Griot recordings", "kora duets"], ["kora", "balafon"], "A griot instrument connecting genealogy, praise song and modern chamber recordings."],
    ["FIELD RECORDINGS OF THE SAHEL", "1900 — now", "Mali · Niger · Mauritania", ["Sahel Sounds artists", "Mdou Moctar", "Les Filles de Illighadad"], ["Sahel Sounds", "Ocora"], ["Field archive", "Saharan WhatsApp"], ["guitar", "tende"], "Recording as relationship: phones, field sessions, local markets and consent."],
    ["PSYCHEDELIC TURKEY", "1968 — now", "Turkey · diaspora", ["Selda Bagcan", "Altin Gun", "Baris Manco"], ["Bongo Joe", "Glitterbeat"], ["Anatolian psych", "modern edits"], ["saz", "baglama"], "Anatolian folk modes through electric guitars, diaspora labels and reissue culture."],
    ["THE SOUND OF ADDIS ABABA", "1960 — 1978", "Ethiopia", ["Mulatu Astatke", "Mahmoud Ahmed", "Tilahun Gessesse"], ["Ethiopiques", "Kaifa"], ["Golden age", "Ethio soul"], ["krar", "horns"], "Nightclubs, imperial-era orchestras and tape-era Ethiopian modernity."],
    ["CUMBIA VILLERA", "1990 — now", "Argentina", ["Damas Gratis", "Pibes Chorros", "La Nueva Luna"], ["local labels", "ZZK adjacent"], ["Barrio cumbia", "digital cumbia"], ["keyboard", "guira"], "Working-class neighborhoods, keyboards, lyrics and later electronic reinterpretation."],
    ["AMAZONIAN RITUAL MUSIC", "1900 — now", "Peru · Colombia · Brazil", ["Shipibo singers", "Los Mirlos", "Juaneco y su Combo"], ["Infopesa", "field archive"], ["Ritual recordings", "Amazonian cumbia"], ["maracas", "voice"], "Healing songs, forest cosmologies and the ethics of listening beyond exoticism."],
    ["THE GLOBAL JOURNEY OF DUB", "1968 — now", "Jamaica · UK · global", ["King Tubby", "Lee Scratch Perry", "Scientist"], ["Pressure Sounds", "On-U Sound"], ["Dub plates", "soundsystem culture"], ["bass", "spring reverb"], "Studio-as-instrument practice that reshaped remix, club and electronic music."],
    ["MUSIC OF THE SILK ROAD", "1900 — now", "Uzbekistan · Tajikistan · Afghanistan", ["Munadjat Yulchieva", "Turgun Alimatov", "Homayun Sakhi"], ["Ocora", "Smithsonian"], ["Maqam archive", "rubab recordings"], ["dutar", "rabab"], "Modal systems, caravan histories and post-Soviet / diaspora recordings."],
    ["CHINESE SOUTHWEST TRADITIONS", "1900 — now", "Yunnan · Guizhou · Sichuan", ["Dong chorus", "Hani singers", "Yi musicians"], ["field archive", "regional archives"], ["Minority music", "choral traditions"], ["lusheng", "bawu"], "Polyphony, reed pipes and mountain village performance ecologies."],
    ["MONGOLIAN THROAT SINGING", "1900 — now", "Mongolia · Tuva", ["Huun-Huur-Tu", "Yat-Kha", "Anda Union"], ["Jaro", "Smithsonian"], ["Overtone recordings", "folk rock"], ["morin khuur", "igil"], "Overtone technique, horsehead fiddle and steppe sound imagination."],
    ["GAMELAN AND MODERN ELECTRONICS", "1900 — now", "Indonesia", ["Senyawa", "Dewa Alit", "Gamelan Sekar Jaya"], ["Nonesuch", "field archive"], ["Gamelan archive", "experimental collaborations"], ["gamelan", "gong"], "Interlocking metallophones, ritual calendars and contemporary experimental composition."],
    ["BALEARIC LISTENING CULTURE", "1980 — now", "Mediterranean · Ibiza", ["Gigi Masin", "Gaussian Curve", "Mark Barrott"], ["Music From Memory", "International Feel"], ["Sunset listening", "ambient reissues"], ["synthesizer", "guitar"], "DJ selection as atmosphere, memory and open-genre listening practice."],
    ["SOMALI DISCO AND THE HORN", "1970 — now", "Somalia · Djibouti · Ethiopia", ["Dur-Dur Band", "Iftin Band", "Aar Maanta"], ["Analog Africa", "Ostinato"], ["Somali disco", "Horn funk"], ["synth", "oud"], "State bands, cassette survival and diaspora rediscovery."],
    ["BALKAN BRASS WEDDING ROUTES", "1900 — now", "Serbia · Romania · Bulgaria", ["Fanfare Ciocarlia", "Boban Markovic", "Taraf de Haidouks"], ["Asphalt Tango", "Piranha"], ["Roma brass", "wedding music"], ["trumpet", "accordion"], "Virtuosic brass, Roma mobility and festival-stage translation."],
    ["JAPANESE AMBIENT AND ENVIRONMENTAL MUSIC", "1980 — now", "Japan", ["Haruomi Hosono", "Midori Takada", "Hiroshi Yoshimura"], ["Light In The Attic", "WRWTFWW"], ["Kankyō Ongaku", "ambient reissue"], ["shakuhachi", "synthesizer"], "Design, environment, commercial space and late reissue discovery."],
    ["KOREAN GUGAK FUTURES", "1900 — now", "Korea", ["Park Jiha", "Jambinai", "Kim Duk-soo"], ["AkdangEban", "independent"], ["Gugak", "shamanic percussion"], ["haegeum", "janggu"], "Court, folk, shamanic and experimental routes into contemporary sound art."],
    ["CARIBBEAN CARNIVAL AND SOUNDSYSTEM", "1950 — now", "Jamaica · Trinidad · Haiti", ["Mighty Sparrow", "King Tubby", "Chouk Bwa"], ["VP", "Pressure Sounds", "Ostinato"], ["Calypso", "dub", "vodou jazz"], ["steelpan", "bass", "tanbou"], "Migration, carnival, recording studios and sound system technologies."]
  ].map(([title, period, countries, artists, labels, albums, instruments, historicalContext]) => ({
    title,
    visual: title.split(" ").slice(0, 3).join(" / "),
    zh: title
      .replace("THE ", "")
      .replace(" AND ", " 与 ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    period,
    countries,
    artists,
    labels,
    albums,
    instruments,
    image: [
      "https://f4.bcbits.com/img/a0933768371_10.jpg",
      "https://f4.bcbits.com/img/a1640063585_10.jpg",
      "https://f4.bcbits.com/img/a0205422707_10.jpg",
      "https://f4.bcbits.com/img/a0206727659_10.jpg",
      "https://f4.bcbits.com/img/a2438671191_10.jpg",
      "https://f4.bcbits.com/img/a4282425468_10.jpg",
      "https://f4.bcbits.com/img/a4068706317_10.jpg"
    ][title.length % 7],
    description: historicalContext,
    historicalContext
  }))
);

const journeyExpansionSeeds = [
  ["Four Tet", "Indian Folk", "Rajasthan", "Sarangi", "Desert ballad traditions"],
  ["Floating Points", "Ethio Jazz", "Addis Ababa", "Krar", "Ethiopian modal systems"],
  ["Nicolas Jaar", "Arabic Experimental", "Levant", "Mijwez", "Diaspora electronics"],
  ["Bonobo", "Nicola Cruz", "Andes", "Charango", "Quechua culture"],
  ["Acid Arab", "Dabke", "Levant", "Mijwez", "Wedding performance"],
  ["DJ Lag", "Gqom", "Durban", "Log drum", "Township dance culture"],
  ["Chancha Via Circuito", "Digital Cumbia", "Amazon", "Maracas", "Cumbia migration"],
  ["Ammar 808", "Carnatic Traditions", "South India", "Mridangam", "Raga and tala systems"],
  ["Altin Gun", "Anatolian Folk", "Turkey", "Saz", "Alevi / folk song traditions"],
  ["Haruomi Hosono", "Japanese Ambient", "Japan", "Shakuhachi", "Environmental listening"],
  ["King Tubby", "Dub", "Jamaica", "Spring reverb", "Soundsystem culture"],
  ["Senyawa", "Gamelan", "Indonesia", "Gong", "Ritual ensemble practice"],
  ["Park Jiha", "Gugak", "Korea", "Piri", "Court and shamanic music"],
  ["Huun-Huur-Tu", "Throat Singing", "Tuva", "Igil", "Steppe cosmology"],
  ["Mulatu Astatke", "Ethio Jazz", "Addis", "Vibraphone", "Golden-age bands"],
  ["Tinariwen", "Desert Blues", "Mali", "Electric guitar", "Tamasheq poetry"],
  ["Omar Souleyman", "Dabke", "Syria", "Keyboard", "Wedding cassette culture"],
  ["DJ Marfox", "Kuduro", "Lisbon", "Drum machine", "Angolan-Lisbon diaspora"],
  ["Kabza De Small", "Amapiano", "South Africa", "Log drum", "Township groove"],
  ["Toumani Diabate", "Kora", "Mali", "Kora", "Griot genealogy"],
  ["Nusrat Fateh Ali Khan", "Qawwali", "Pakistan", "Harmonium", "Sufi poetry"],
  ["Danyel Waro", "Maloya", "Reunion", "Kayamb", "Creole resistance memory"],
  ["Orchestra Baobab", "Highlife / Son", "Senegal", "Guitar", "Atlantic dance bands"],
  ["Fela Kuti", "Afrobeat", "Nigeria", "Horns", "Political funk"],
  ["Ali Farka Touré", "Songhai Blues", "Mali", "Ngoni", "River Niger guitar"],
  ["Mdou Moctar", "Sahel Guitar", "Niger", "Electric guitar", "Tuareg youth culture"],
  ["Sote", "Persian Experimental", "Iran", "Santur", "Radif and electronics"],
  ["A-WA", "Yemenite Pop", "Israel / Yemen", "Voice", "Diaspora women’s song"],
  ["Islam Chipsy", "Mahraganat", "Cairo", "Keyboard", "Street party systems"],
  ["Los Mirlos", "Amazonian Cumbia", "Peru", "Electric guitar", "Amazon dance bands"],
  ["Buena Vista Social Club", "Cuban Son", "Cuba", "Tres", "Afro-Cuban social dance"],
  ["Fanfare Ciocarlia", "Balkan Brass", "Romania", "Trumpet", "Roma wedding routes"],
  ["Mari Boine", "Joik", "Sápmi", "Voice", "Indigenous Nordic memory"],
  ["DakhaBrakha", "Ukrainian Polyphony", "Ukraine", "Voice", "Village song revival"],
  ["Yat-Kha", "Tuvan Rock", "Tuva", "Tovshuur", "Overtone folk rock"],
  ["Wu Man", "Pipa", "China", "Pipa", "Chinese classical modernism"],
  ["Van-Anh Vo", "Vietnamese Roots", "Vietnam", "Dan bau", "Diaspora chamber folk"],
  ["Alena Murang", "Sape", "Borneo", "Sape", "Indigenous rainforest songs"],
  ["Paradise Bangkok", "Molam", "Isan", "Khaen", "Thai-Lao dance circuits"],
  ["Susie Ibarra", "Kulintang", "Philippines", "Kulintang", "Mindanao gong traditions"],
  ["Liraz", "Persian Pop", "Iran / Israel", "Synth", "Women’s diaspora pop"],
  ["Gigi Masin", "Balearic Ambient", "Mediterranean", "Synthesizer", "Sunset listening"],
  ["Scientist", "Dub Mixing", "Jamaica", "Mixing desk", "Studio as instrument"],
  ["Lakou Mizik", "Haitian Roots", "Haiti", "Tanbou", "Vodou rhythm"],
  ["Bitori", "Funaná", "Cape Verde", "Accordion", "Creole dance circuits"],
  ["Dur-Dur Band", "Somali Disco", "Somalia", "Synth", "Horn of Africa funk"],
  ["Sharhabil Ahmed", "Sudanese Jazz", "Sudan", "Guitar", "Khartoum modernism"],
  ["Sevara Nazarkhan", "Silk Road Pop", "Uzbekistan", "Dutar", "Maqam memory"],
  ["Homayun Sakhi", "Afghan Rubab", "Afghanistan", "Rubab", "Classical Afghan lineage"],
  ["Ros Sereysothea", "Khmer Rock", "Cambodia", "Electric guitar", "Pre-war pop memory"]
];

listeningJourneys.push(
  ...journeyExpansionSeeds.map(([start, scene, region, instrument, root]) => ({
    title: `${start} → ${scene}`,
    zh: `${scene} 路径`,
    route: [start, scene, region, instrument, root, "Local archives / living tradition"],
    note: `A discovery path from a familiar name toward ${region}, ${instrument} and the deeper context of ${root}.`
  }))
);

const artistNames = [
  "Mulatu Astatke","Tinariwen","Bombino","Mdou Moctar","DJ Lag","DJ Travella","Slikback","Omar Souleyman","Acid Arab","Ammar 808","Chancha Via Circuito","Nicola Cruz","Dengue Dengue Dengue","Altin Gun","Selda Bagcan","Danyel Waro","Lindigo","Orchestra Baobab","Fela Kuti","Ali Farka Touré","Nusrat Fateh Ali Khan","Yat-Kha","Huun-Huur-Tu","Toumani Diabate","Ballake Sissoko","Sona Jobarteh","Ebo Taylor","Pat Thomas","Mahmoud Ahmed","Hailu Mergia","Ahmed Malek","Rizan Said","Hello Psychaleppo","Kabza De Small","DJ Maphorisa","DJ Marfox","Nídia","DJ Nigga Fox","King Tubby","Lee Scratch Perry","Scientist","Gigi Masin","Midori Takada","Haruomi Hosono","Park Jiha","Jambinai","Senyawa","Dewa Alit","Alena Murang","Paradise Bangkok Molam International Band","Van-Anh Vo","Susie Ibarra","Wu Man","Min Xiao-Fen","Mari Boine","DakhaBrakha","Fanfare Ciocarlia","Taraf de Haidouks","Cesaria Evora","Bitori","Dur-Dur Band","Sharhabil Ahmed","Lakou Mizik","Chouk Bwa","Buena Vista Social Club","Irakere","Los Mirlos","Juaneco y su Combo","Damas Gratis","La Yegros","Lagartijeando","El Búho","Toumani Diabaté","Mamadou Diabate","Kayhan Kalhor","Sote","Mamak Khadem","Abida Parveen","Sabri Brothers","Lakha Khan","Kutle Khan","Aruna Sairam","Ranjani-Gayatri","Munadjat Yulchieva","Turgun Alimatov","Sevara Nazarkhan","Homayun Sakhi","Ustad Mohammad Omar","Ros Sereysothea","Dengue Fever","Kim Duk-soo","A-WA","Ofra Haza","Liraz","Islam Chipsy","Oka Wi Ortega","Rachid Taha","Cheb Khaled","Cheikha Rimitti","Noori","Les Filles de Illighadad","Iftin Band","Wimme","Värttinä","George Telek","Airileke","Danongan Kalanduyan","Hanoi Masters","The Six Tones","Gamelan Sekar Jaya","D.O. Misiani","Orchestra Super Mazembe","Rogér Fakhr","Ferkat Al Ard"
];

essentialArtists.push(
  ...artistNames
    .filter((name) => !essentialArtists.some((artist) => artist.name === name))
    .map((name, index) => {
      const scene = archiveExpansionScenes[index % archiveExpansionScenes.length];
      return {
        name,
        region: scene[1],
        albums: `${scene[0]} recordings / archive entries`,
        labels: scene[5],
        scenes: scene[4].join(" · "),
        instruments: scene[7].join(" · "),
        stories: `${scene[0]} / ${featuredStories[index % featuredStories.length].title}`
      };
    })
);

const instrumentExpansion = [
  ["Ngoni","West Africa","plucked lute","Desert blues / griot music","Bassekou Kouyate · Ali Farka Touré"],["Siku","Andes","panpipes","Andean ritual / folk","Bolivian ensembles · Peruvian comparsas"],["Erhu","China","bowed spike fiddle","Chinese classical / experimental","Min Xiao-Fen · contemporary ensembles"],["Pipa","China","plucked lute","Chinese classical / avant-garde","Wu Man · Min Xiao-Fen"],["Dutar","Central Asia","two-string lute","Maqam / Silk Road","Turgun Alimatov · Uzbek masters"],["Morin Khuur","Mongolia","horsehead fiddle","throat singing / folk","Huun-Huur-Tu · Anda Union"],["Shakuhachi","Japan","bamboo flute","Zen / ambient","Katsuya Yokoyama · ambient collaborators"],["Koto","Japan","zither","Japanese classical / ambient","Miyagi Michio · modern ensembles"],["Gamelan","Indonesia","gong orchestra","ritual / minimalism / electronic","Dewa Alit · Senyawa"],["Sape","Borneo","boat lute","indigenous song / ambient","Alena Murang · Mathew Ngau Jau"],["Oud","Middle East","fretless lute","maqam / tarab / fusion","Anouar Brahem · Marcel Khalife"],["Saz","Turkey","long-necked lute","Anatolian folk / psych","Selda Bagcan · Altin Gun"],["Santur","Iran / India","hammered dulcimer","Persian classical / ambient","Sote · Shivkumar Sharma"],["Bansuri","India","bamboo flute","Hindustani / devotional","Hariprasad Chaurasia"],["Sarangi","India / Pakistan","bowed lute","Rajasthani folk / classical","Lakha Khan · Sultan Khan"],["Rabab","Afghanistan / Central Asia","plucked lute","Afghan classical / folk","Homayun Sakhi"],["Djembe","West Africa","goblet drum","Mande percussion / dance","Famoudou Konate"],["Talking Drum","West Africa","hourglass drum","Highlife / praise poetry","Yoruba ensembles"],["Mridangam","South India","double-headed drum","Carnatic rhythm","T. H. Vinayakram"],["Veena","South India","plucked lute","Carnatic classical","E. Gayathri"],["Nadaswaram","South India","double reed","temple / wedding music","South Indian temple ensembles"],["Tabla","North India / Pakistan","paired drums","qawwali / classical","Zakir Hussain"],["Harmonium","South Asia","free reed keyboard","qawwali / devotional","Nusrat Fateh Ali Khan"],["Khaen","Laos / Isan","mouth organ","molam / folk","Paradise Bangkok"],["Phin","Thailand / Laos","plucked lute","molam / luk thung","Dao Bandon"],["Kulintang","Philippines","gong row","Mindanao gong music","Danongan Kalanduyan"],["Agung","Philippines / Indonesia","large gong","kulintang ensemble","Mindanao ensembles"],["Dan Bau","Vietnam","monochord","Vietnamese classical / experimental","Van-Anh Vo"],["Dan Tranh","Vietnam","zither","Vietnamese chamber music","The Six Tones"],["Haegeum","Korea","bowed fiddle","gugak / experimental","Park Jiha"],["Geomungo","Korea","zither","court / contemporary","Korean ensembles"],["Janggu","Korea","hourglass drum","samulnori / shamanic","Kim Duk-soo"],["Baglama","Turkey","lute","Anatolian folk","Selda Bagcan"],["Bouzouki","Greece","lute","rebetiko","Markos Vamvakaris"],["Accordion","Cape Verde / Balkans","free reed","funaná / wedding music","Bitori"],["Steelpan","Trinidad","pitched steel drum","calypso / carnival","Trinidad steel orchestras"],["Berimbau","Brazil","musical bow","capoeira / afro-brazilian","Baden Powell · capoeira groups"],["Atabaque","Brazil","hand drum","candomblé / samba-reggae","Afro-Brazilian terreiros"],["Cuica","Brazil","friction drum","samba","Rio samba schools"],["Tres","Cuba","three-course guitar","son / salsa","Compay Segundo"],["Clave","Cuba","rhythm sticks","afro-cuban / son","Cuban ensembles"],["Congas","Caribbean","barrel drums","rumba / latin jazz","Mongo Santamaria"],["Melodica","Jamaica","free reed","dub / reggae","Augustus Pablo"],["Spring Reverb","Jamaica / studio","studio effect","dub","King Tubby"],["Tapan","Balkans","large drum","wedding brass","Balkan brass bands"],["Trumpet","Balkans / global","brass","brass bands / jazz","Fanfare Ciocarlia"],["Bandura","Ukraine","zither-lute","polyphony / folk","Ukrainian ensembles"],["Panduri","Georgia","lute","Caucasus polyphony","Rustavi Choir"],["Hardanger Fiddle","Norway","sympathetic fiddle","Nordic folk","Norwegian fiddlers"],["Kantele","Finland / Karelia","zither","Nordic folk","Värttinä"],["Joik Voice","Sápmi","vocal technique","indigenous song","Mari Boine"],["Tanbou","Haiti","drum","vodou / rara","Lakou Mizik"],["Vaksin","Haiti","bamboo trumpet","rara","Haitian rara bands"],["Ferrinho","Cape Verde","scraped iron","funaná","Cape Verdean groups"],["Neyanban","Persian Gulf","bagpipe","Bandari","Saied Shanbehzadeh"],["Dammam","Persian Gulf","drum","Gulf ritual","Bandari ensembles"]
];

instrumentAtlas.push(
  ...instrumentExpansion.map(([name, region, artifact, genres, artists]) => ({
    name,
    zh: name,
    region,
    artifact,
    description: `${artifact} used across ${genres}. Related artists or ensembles: ${artists}.`,
    history: `${name} is a useful entry point into ${region} performance history.`,
    audioCharacteristics: artifact,
    artists,
    relatedGenres: genres
  }))
);

const labelExpansion = [
  ["Hakuna Kulala","Kampala","2010s","Experimental club, rap, noise and bass from East Africa.","MC Yallah · Slikback · Don Zilla","Club and rap releases","A sharper club-facing extension of the Nyege ecosystem."],
  ["Analog Africa","Frankfurt / global","2006","Deep archival reissues from Africa and Latin America.","Orchestre Abass · Amara Touré","African and Latin compilations","A model for extensive liner notes and archival restoration."],
  ["Soundway","London","2002","Highlife, afrobeat, Caribbean and tropical reissues.","Ebo Taylor · Meridian Brothers","Nigeria Special · Ghana Soundz","Makes dancefloor digging historically legible."],
  ["Awesome Tapes From Africa","USA / Africa","2006","Cassette discoveries and licensed reissues.","Ata Kak · Nahawa Doumbia","Cassette reissue catalog","Shows cassette culture as living media, not nostalgia."],
  ["Glitterbeat","Germany","2012","Contemporary global roots and experimental cross-cultural production.","Ammar 808 · Bixiga 70","Global Control · world releases","Connects tradition with future-facing studio language."],
  ["Bongo Joe","Geneva","2015","Global reissues, experimental pop and contemporary roots.","Altin Gun · Derya Yildirim","Anatolian and global catalog","Treats reissue and new work as one listening culture."],
  ["Ostinato","New York / global","2016","Archive projects from Africa, Caribbean and Indian Ocean.","Cape Verde · Somalia · Haiti artists","Archival compilations","Centres migration, ports and overlooked recording histories."],
  ["Príncipe","Lisbon","2011","Lisbon batida, kuduro and Afro-Portuguese electronic music.","DJ Marfox · Nídia · DJ Nigga Fox","Lisbon club catalog","Documents one of Europe’s most important diasporic club scenes."],
  ["Sublime Frequencies","Seattle / global","2003","Field recordings, radio fragments and non-Western popular music.","Omar Souleyman · Group Doueh","Radio and field recordings","A controversial but influential archive model for raw listening."],
  ["Ocora","France","1958","Ethnomusicological field recordings and traditional music.","Global field artists","Ocora catalogue","A foundational label for recorded ethnomusicology."],
  ["Smithsonian Folkways","Washington DC","1948","Folk, field recordings and educational archives.","Global traditional artists","Folkways archives","A long-term public archive model."],
  ["Real World","UK","1989","World music, studio collaboration and global vocal traditions.","Nusrat Fateh Ali Khan · Sheila Chandra","Real World catalog","Introduced many global artists to international audiences."],
  ["World Circuit","London","1986","Cuban, West African and roots recordings.","Buena Vista Social Club · Ali Farka Touré","World Circuit releases","Important for cross-Atlantic roots collaborations."],
  ["Mais Um","London / Brazil","2010","Contemporary Brazilian music and roots hybrids.","Lucas Santtana · Meta Meta","Brazilian catalog","Shows Brazil beyond tropical clichés."],
  ["Galletas Calientes","Colombia / France","2000s","Cumbia, tropical bass and Latin electronic hybrids.","Dengue Dengue Dengue · tropical bass artists","Digital cumbia releases","Connects underground Latin club scenes."],
  ["ZudRangMa","Bangkok","2000s","Thai molam, luk thung and global digging culture.","Paradise Bangkok · Thai archives","Thai reissues","A key lens for Isan and Thai record culture."],
  ["EM Records","Japan","1998","Asian reissues, experimental music and field-adjacent releases.","Onuma Singsiri · world archives","Asia-focused reissues","Expands the map of reissue culture beyond the Atlantic."],
  ["Light In The Attic","Seattle","2002","Reissues, Japanese ambient, folk and overlooked catalogs.","Haruomi Hosono · Kankyō Ongaku artists","Japanese ambient releases","Made environmental music visible to new listeners."],
  ["WRWTFWW","Switzerland","2013","Ambient, Japanese reissues and cult soundtracks.","Midori Takada · Satoshi Ashikawa","Ambient reissues","Important for slow-listening archival culture."],
  ["Pressure Sounds","UK","1995","Dub, roots reggae and Jamaican studio archives.","King Tubby · Lee Perry","Dub reissues","Documents studio-as-instrument culture."],
  ["On-U Sound","UK","1980","Dub, post-punk and bass experimentation.","Adrian Sherwood · Dub Syndicate","UK dub catalog","Connects Jamaican dub to UK experimental music."],
  ["Asphalt Tango","Berlin","1997","Balkan brass, Roma music and Eastern European roots.","Fanfare Ciocarlia · Taraf de Haidouks","Balkan catalog","Key label for Roma and Balkan stage circulation."],
  ["Piranha","Berlin","1987","Global roots, Balkan and festival-facing releases.","Global artists","World music catalog","Connected festival circuits and record distribution."],
  ["Batov","London / Middle East","2015","Middle Eastern groove, psych and contemporary bands.","Şatellites · A-WA adjacent","Middle Eastern groove releases","A contemporary bridge for Levant and Anatolian grooves."],
  ["Fortuna","Tel Aviv","2010s","Mizrahi, Yemenite and Middle Eastern reissues.","Grazia · regional artists","Mizrahi reissues","Highlights local pop histories outside global canons."],
  ["AkdangEban","Seoul","2000s","Korean traditional and contemporary gugak releases.","Park Jiha · Korean ensembles","Gugak catalog","Important for modern Korean traditional music documentation."],
  ["Nordic Notes","Germany / Nordic","2005","Nordic folk and roots recordings.","Mari Boine · Nordic artists","Nordic catalog","Connects joik and Nordic roots to European audiences."],
  ["Jaro Medien","Germany","1980s","Central Asian, Tuvan and global fusion releases.","Huun-Huur-Tu · Yat-Kha","Tuvan releases","A major route for overtone singing outside Central Asia."],
  ["Nonesuch Explorer","USA","1960s","Explorer series field recordings and gamelan archives.","Gamelan ensembles · global artists","Explorer Series","A canonical archive for Western listeners discovering global traditions."],
  ["Amarrass","India","2009","Indian folk, Rajasthan and desert recordings.","Lakha Khan · Barmer Boys","Rajasthan releases","Artist-focused field and stage documentation."],
  ["30M Records","Iran","2010s","Iranian contemporary, classical and experimental music.","Iranian artists","Persian catalog","A modern path into Iranian listening culture."],
  ["100Copies","Cairo","2006","Egyptian experimental, mahraganat and independent music.","Islam Chipsy · Cairo artists","Egyptian electronic releases","Documents Cairo street and experimental scenes."],
  ["Infopesa","Peru","1971","Peruvian cumbia, chicha and tropical recordings.","Los Mirlos · Juaneco","Chicha catalog","A source label for Amazonian guitar music."],
  ["Far Out","London / Brazil","1994","Brazilian jazz, MPB and reissues.","Azymuth · Marcos Valle","Brazilian catalog","Important for Brazilian jazz-funk circulation."],
  ["Mississippi Records","Portland","2003","Blues, global folk and historical reissues.","Global archival artists","Vinyl reissues","A handmade archive aesthetic influential to diggers."],
  ["Dust-to-Digital","Atlanta","1999","Historical field recordings, box sets and archival design.","Global archive artists","Archive box sets","Shows how design can deepen historical listening."],
  ["Strut","London","1999","Disco, funk, jazz and global reissues.","Sun Ra · Nigerian disco artists","Dancefloor archives","Connects club digging and historical scholarship."],
  ["Luaka Bop","New York","1988","Global pop, spiritual jazz and reissues.","William Onyeabor · Tim Maia","Reissue projects","A major gateway label for overlooked global pop."],
  ["Luaka / World Psychedelic Classics","New York","2000s","Global psych and reissue storytelling.","William Onyeabor · Os Mutantes","Compilation series","Built narrative entry points for new listeners."],
  ["Crammed Discs","Brussels","1980","Global experimental pop and hybrid electronics.","Nihiloxica · Aksak Maboul","Crammed catalog","Long-running bridge between art pop and global scenes."],
  ["Discrepant","London","2011","Field recordings, speculative ethnography and experimental sound.","Kink Gong · Gonçalo F Cardoso","Field / experimental releases","Asks critical questions about archive and representation."],
  ["Kink Gong Archives","Global field recording","2000s","Raw field recordings from minority and rural communities.","Kink Gong","Field archives","A useful but ethically complex listening source."],
  ["Hive Mind","UK","2017","Gnawa, spiritual jazz and archival releases.","Maleem Mahmoud Gania","Gnawa releases","Important for deep trance and Gnawa documentation."],
  ["International Feel","Ibiza / Uruguay","2009","Balearic, ambient and sunset dancefloor music.","Mark Barrott · Len Leise","Balearic releases","A contemporary label for Balearic listening culture."]
];

labelArchive.push(
  ...labelExpansion
    .filter(([name]) => !labelArchive.some((label) => label.name === name))
    .map(([name, location, founded, philosophy, artists, releases, significance]) => ({ name, location, founded, philosophy, artists, releases, significance }))
);

timelineEntries.push(
  ...[
    ["1900s", "Field Recording Begins", "Global", "Early phonograph and cylinder recording created archives of voice, ritual and folk performance."],
    ["1920s", "Radio and Shellac Circulation", "Global ports", "78 rpm records and radio began moving regional music across colonial and urban networks."],
    ["1930s", "Rebetiko and Urban Folk", "Greece / diaspora", "Port cities and displacement shaped rebetiko, blues-like urban song and later reissue culture."],
    ["1940s", "Qawwali Recording Era", "Pakistan / India", "Sufi vocal traditions entered radio, film and commercial record circulation."],
    ["1950s", "Highlife Urban Bands", "West Africa", "Guitar bands, brass sections and dance halls gave postwar West Africa a new urban sound."],
    ["1960s", "Afro-Cuban and Son Globalize", "Cuba / Caribbean", "Afro-Cuban rhythm became central to jazz, salsa and global dance music."],
    ["1968", "Ethio-Jazz Emerges", "Ethiopia", "Mulatu Astatke and Addis studio bands connected Ethiopian modes with jazz and funk."],
    ["1970s", "Anatolian Psych and Afro Disco", "Turkey / Africa", "Electric instruments and local modes produced scenes now central to reissue culture."],
    ["1973", "Dub Studio Language", "Jamaica", "King Tubby and peers turned the studio into a performance instrument."],
    ["1980s", "Cassette Culture Expands", "Africa / Asia / Middle East", "Affordable cassettes changed local distribution, piracy, worship, weddings and street markets."],
    ["1982", "Gnawa Fusion Recordings", "Morocco / diaspora", "Gnawa trance entered jazz, rock and later electronic collaboration."],
    ["1988", "World Music Market", "Europe / global", "Festival and label circuits created new visibility but also new representation problems."],
    ["1990s", "Kuduro and Gqom Precursors", "Angola / South Africa", "Urban club sounds developed through street parties, taxis and local media."],
    ["1995", "Reissue Culture Accelerates", "Global", "Digger labels began reframing forgotten funk, disco, jazz and local pop catalogs."],
    ["2000s", "Digital Cumbia and Global Bass", "Latin America", "Laptops, blogs and clubs connected cumbia to bass music and downtempo."],
    ["2006", "Cassette Blogs to Labels", "Online / Africa", "Blogs like Awesome Tapes showed how web discovery could become licensed reissue practice."],
    ["2008", "ZZK and Latin Electronic", "Buenos Aires", "Digital cumbia became an international doorway into Latin American rhythm histories."],
    ["2011", "Lisbon Batida Documented", "Portugal / Angola", "Príncipe mapped diasporic club music from Lisbon housing estates to global festivals."],
    ["2015", "Nyege Nyege Ecosystem", "Uganda", "A festival-label network amplified East African electronic and experimental scenes."],
    ["2018", "Japanese Ambient Reissue Wave", "Japan / global", "Kankyō Ongaku and related reissues introduced environmental music to new generations."],
    ["2020s", "Organic Downtempo and Ethics", "Global", "Field recordings, indigenous collaboration and slow electronic music raised new questions of credit and context."],
    ["2024", "Community Collaboration Models", "Global", "Projects with choirs, local archives and ecological causes point toward more accountable global music culture."]
  ].map(([year, title, region, note]) => ({ year, title, region, note }))
);

const soundMapRegions = [
  { name: "West Africa", zh: "西非", x: 37, y: 54, keywords: ["West Africa", "Mali", "Niger", "Senegal", "Ghana", "Gambia", "Sahel", "Manding"], featured: "FROM SAHARA TO THE DANCEFLOOR" },
  { name: "East Africa", zh: "东非", x: 58, y: 58, keywords: ["East Africa", "Uganda", "Kenya", "Tanzania", "Ethiopia", "Somalia", "Kampala", "Addis"], featured: "EAST AFRICAN UNDERGROUND ELECTRONICS" },
  { name: "Maghreb", zh: "马格里布", x: 44, y: 35, keywords: ["Morocco", "Algeria", "Tunisia", "Maghreb", "Gnawa", "Sahara"], featured: "MODERN GNAWA" },
  { name: "Middle East", zh: "中东", x: 64, y: 42, keywords: ["Middle East", "Levant", "Syria", "Iran", "Iraq", "Arabic", "Persian", "Dabke"], featured: "DABKE BEYOND WEDDINGS" },
  { name: "Andes", zh: "安第斯", x: 22, y: 66, keywords: ["Andes", "Peru", "Bolivia", "Ecuador", "Quechua", "Andean"], featured: "DIGITAL CUMBIA" },
  { name: "Amazon", zh: "亚马逊", x: 35, y: 72, keywords: ["Amazon", "Peru", "Colombia", "Brazil", "Shipibo", "Amazonian"], featured: "AMAZONIAN RITUAL MUSIC" },
  { name: "South Asia", zh: "南亚", x: 69, y: 52, keywords: ["India", "Pakistan", "Bangladesh", "Rajasthan", "Carnatic", "Qawwali", "South Asia"], featured: "SOUTH ASIAN DEVOTIONAL ROUTES" },
  { name: "Southeast Asia", zh: "东南亚", x: 83, y: 63, keywords: ["Thailand", "Laos", "Vietnam", "Indonesia", "Philippines", "Cambodia", "Southeast Asia", "Gamelan"], featured: "GAMELAN AND MODERN ELECTRONICS" },
  { name: "Southwest China", zh: "中国西南", x: 80, y: 43, keywords: ["China", "Yunnan", "Guizhou", "Sichuan", "Dong", "Hani", "Yi", "Southwest"], featured: "CHINESE SOUTHWEST TRADITIONS" },
  { name: "Mediterranean", zh: "地中海", x: 52, y: 27, keywords: ["Mediterranean", "Turkey", "Greece", "Ibiza", "Anatolian", "Balearic"], featured: "ANATOLIAN PSYCH" }
];

const fieldNotesArchive = [
  { title: "Gnawa Ceremony Notes", location: "Essaouira / Morocco", photos: "guembri · qraqeb · night ceremony", audio: "Gnawa maalem recordings / Hive Mind references", context: "Trance, healing lineages and festival-stage translation.", traditions: ["gnawa", "sufi ritual", "moroccan trance"], instruments: ["guembri", "qraqeb"] },
  { title: "Kampala Sound Systems", location: "Kampala / Uganda", photos: "club flyers · sound systems · festival documentation", audio: "Nyege Nyege / Hakuna Kulala catalogues", context: "Experimental club networks, DIY infrastructure and East African bass futures.", traditions: ["singeli", "acholitronix", "experimental club"], instruments: ["drum machine", "synthesizer"] },
  { title: "Yunnan Village Ritual Music", location: "Yunnan / China", photos: "lusheng circles · village festivals · minority archives", audio: "regional field recordings / Kink Gong-style references", context: "Mountain ritual calendars, reed pipes and polyphonic local memory.", traditions: ["minority music", "ritual music", "polyphony"], instruments: ["lusheng", "bawu", "hulusi"] },
  { title: "Sahel Market Recordings", location: "Mali / Niger / Mauritania", photos: "cassette stalls · phone files · desert guitar sessions", audio: "Sahel Sounds / local cassette archives", context: "Markets, phones and informal circulation as music infrastructure.", traditions: ["sahel guitar", "tishoumaren", "cassette culture"], instruments: ["electric guitar", "tende", "tehardent"] },
  { title: "Amazonian Community Music", location: "Peru / Colombia / Brazil", photos: "community gatherings · forest ceremonies · chicha sleeves", audio: "field recordings / Infopesa references", context: "Healing song, cumbia guitar and the ethics of listening to community archives.", traditions: ["amazonian ritual", "chicha", "shipibo song"], instruments: ["maracas", "voice", "electric guitar"] },
  { title: "Reunion Island Maloya Gatherings", location: "Reunion Island", photos: "kayamb hands · Creole percussion · gathering circles", audio: "Danyel Waro / Lindigo / Bongo Joe references", context: "Creole memory, labor history and percussion as resistance archive.", traditions: ["maloya", "creole rhythm", "work song"], instruments: ["kayamb", "rouler", "pikèr"] }
];

const extendedResourceTypes = [
  { type: "Book", title: "Ocean of Sound", region: "Global listening", note: "A listening-oriented route through ambient, dub, sampling and world sound culture.", connects: ["dub", "ambient", "field recording"] },
  { type: "Book", title: "The Songlines", region: "Australia / travel writing", note: "Useful as a starting point for thinking about land, route and song, with critical distance.", connects: ["indigenous music", "land", "oral tradition"] },
  { type: "Film", title: "I Bring What I Love", region: "Senegal / diaspora", note: "Youssou N'Dour, faith, public culture and global African pop.", connects: ["mbalax", "Senegal", "diaspora"] },
  { type: "Documentary", title: "A Story of Sahel Sounds", region: "Sahel", note: "Field recording, consent, mobile phones and local-global circulation.", connects: ["sahel guitar", "field recording", "Sahel Sounds"] },
  { type: "Radio Show", title: "NTS: Global Roots / Diggers Streams", region: "Global", note: "A practical listening source for reissue, cassette, dub and experimental routes.", connects: ["NTS", "reissue", "radio archive"] },
  { type: "Podcast", title: "Afropop Worldwide", region: "Africa / diaspora", note: "Long-running episodes connecting artists, scenes, migration and history.", connects: ["afrobeat", "highlife", "diaspora"] },
  { type: "Field Recording", title: "Smithsonian Folkways Archive", region: "Global", note: "Educational catalogue for traditional, folk and ethnographic recordings.", connects: ["field recordings", "instrument atlas", "traditional music"] },
  { type: "Academic Reference", title: "Ethnomusicology Review Paths", region: "Global", note: "Use as a research doorway for citation trails and cultural context.", connects: ["ethnomusicology", "field notes", "regional archives"] }
];

let activeFilter = "all";
let showFieldNotes = true;

const albumGrid = document.querySelector("#albumGrid");
const regionList = document.querySelector("#regionList");
const soundMap = document.querySelector("#soundMap");
const weeklyDiscovery = document.querySelector("#weeklyDiscovery");
const todayJourney = document.querySelector("#todayJourney");
const fieldNotesGrid = document.querySelector("#fieldNotesArchive");
const extendedResourcesGrid = document.querySelector("#extendedResources");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
const resetFilters = document.querySelector("#resetFilters");
const statAlbums = document.querySelector("#statAlbums");
const statRegions = document.querySelector("#statRegions");
const statDemos = document.querySelector("#statDemos");
const albumDialog = document.querySelector("#albumDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeDialog = document.querySelector("#closeDialog");
const sourceForm = document.querySelector("#sourceForm");
const sourceQueue = document.querySelector("#sourceQueue");
const demoForm = document.querySelector("#demoForm");
const demoList = document.querySelector("#demoList");
const eventGrid = document.querySelector("#eventGrid");
const togglePast = document.querySelector("#togglePast");
const pulseModesGrid = document.querySelector("#pulseModes");
const aiFeatureGrid = document.querySelector("#aiFeatureGrid");
const aiSearchForm = document.querySelector("#aiSearchForm");
const aiSearchInput = document.querySelector("#aiSearchInput");
const analysisOutput = document.querySelector("#analysisOutput");
const runAnalysis = document.querySelector("#runAnalysis");
const resourceGrid = document.querySelector("#resourceGrid");
const pageViews = document.querySelectorAll("[data-page], [data-pages]");

const getStored = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const setStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const routeAliases = {
  "": "home",
  home: "home",
  library: "home",
  stories: "home",
  journeys: "home",
  atlas: "home",
  instruments: "home",
  pulse: "pulse",
  "ai-tools": "ai",
  ai: "ai",
  resources: "resources",
  albums: "archive",
  archive: "archive",
  submit: "submit",
  events: "events",
  sources: "sources"
};

function showPage(route = "home") {
  const rawRoute = route.replace("#", "");
  const page = routeAliases[rawRoute] || "home";
  const targetSection = rawRoute ? document.getElementById(rawRoute) : null;
  document.body.classList.add("is-routed");
  pageViews.forEach((view) => {
    const pages = [view.dataset.page, ...(view.dataset.pages || "").split(/\s+/)].filter(Boolean);
    const isActive = pages.includes(page);
    view.classList.toggle("is-active", isActive);
    if (isActive) view.classList.add("is-visible");
  });
  document.body.dataset.page = page;
  if (targetSection && page === "home") {
    requestAnimationFrame(() => targetSection.scrollIntoView({ behavior: "smooth", block: "start" }));
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

let sources = getStored("globalPulseSourcesV2", [
  {
    platform: "Nyege Nyege",
    url: "https://festival.nyegenyege.com/",
    tags: "uganda, east africa, singeli, experimental club",
    createdAt: "官方来源"
  },
  {
    platform: "Bandcamp",
    url: "https://nyegenyegetapes.bandcamp.com/",
    tags: "nyege nyege tapes, hakuna kulala, east africa",
    createdAt: "厂牌目录"
  },
  {
    platform: "Shika Shika",
    url: "https://shikashika.org/aboutus/",
    tags: "organic electronic, folklore, ecology",
    createdAt: "厂牌资料"
  },
  {
    platform: "Wonderwheel",
    url: "https://wonderwheelrecordings.com/about/",
    tags: "global bass, organic house, downtempo",
    createdAt: "厂牌资料"
  },
  {
    platform: "Glitterbeat",
    url: "https://glitterbeat.com/artists/",
    tags: "global music, contemporary roots, AMMAR 808",
    createdAt: "艺人目录"
  },
  {
    platform: "Habibi Funk",
    url: "https://habibifunkrecords.bandcamp.com/",
    tags: "arab funk, jazz, reissue",
    createdAt: "再版资料"
  },
  {
    platform: "Sahel Sounds",
    url: "https://sahelsounds.com/about/",
    tags: "sahel guitar, field recording, west africa",
    createdAt: "田野档案"
  },
  {
    platform: "Awesome Tapes",
    url: "https://awesometapes.com/about/",
    tags: "cassette archive, africa, reissue",
    createdAt: "再版资料"
  }
]);

let demos = getStored("globalPulseDemos", []);

function albumMatches(album) {
  const query = searchInput.value.trim().toLowerCase();
  const haystack = [album.title, album.artist, album.region, album.year, album.summary, album.genres.join(" ")]
    .join(" ")
    .toLowerCase();
  const filterMatch = activeFilter === "all" || album.genres.includes(activeFilter);
  return filterMatch && (!query || haystack.includes(query));
}

function getAlbumLabel(album) {
  if (album.label) return album.label;
  if (album.source.includes("Nyege")) return "Nyege Nyege Tapes";
  if (album.source.includes("Shika")) return "Shika Shika";
  if (album.source.includes("Wonderwheel")) return "Wonderwheel";
  if (album.source.includes("Habibi")) return "Habibi Funk";
  if (album.source.includes("Sahel")) return "Sahel Sounds";
  if (album.source.includes("Glitterbeat")) return "Glitterbeat";
  if (album.sourceUrl.includes("zzk")) return "ZZK";
  if (album.sourceUrl.includes("principediscos")) return "Príncipe";
  if (album.sourceUrl.includes("music-from-memory")) return "Music From Memory";
  if (album.sourceUrl.includes("analogafrica")) return "Analog Africa";
  return album.source.split(" / ")[0];
}

function getAlbumScene(album) {
  return album.genres.slice(0, 2).join(" / ");
}

function matchesAnyKeyword(text, keywords) {
  const value = normalizeEntity(text);
  return keywords.some((keyword) => value.includes(normalizeEntity(keyword)));
}

function albumMatchesMapRegion(album, region) {
  return matchesAnyKeyword([album.region, album.country, album.summary, album.culture, album.culturalNotes, album.listeningContext, album.genres.join(" "), getAlbumLabel(album)].join(" "), region.keywords);
}

function storyMatchesMapRegion(story, region) {
  return matchesAnyKeyword([story.title, story.countries, story.historicalContext, story.artists.join(" "), story.labels.join(" "), story.albums.join(" "), (story.instruments || []).join(" ")].join(" "), region.keywords) || normalizeEntity(story.title) === normalizeEntity(region.featured);
}

function getMapRegionProfile(region) {
  const regionAlbums = albums.filter((album) => albumMatchesMapRegion(album, region));
  const regionStories = featuredStories.filter((story) => storyMatchesMapRegion(story, region));
  const artists = uniqueItems(regionAlbums.flatMap((album) => [album.artist, ...(album.relatedArtists || [])]).flatMap(splitEntityList));
  const labels = uniqueItems(regionAlbums.map(getAlbumLabel));
  const instruments = uniqueItems(regionAlbums.flatMap((album) => album.relatedInstruments || []));
  const featuredStory = regionStories.find((story) => normalizeEntity(story.title) === normalizeEntity(region.featured)) || regionStories[0] || featuredStories[0];
  return { ...region, albums: regionAlbums, stories: regionStories, artists, labels, instruments, featuredStory };
}

function dateIndex(length, mode = "day") {
  if (!length) return 0;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const day = Math.floor((now - start) / 86400000);
  const seed = mode === "week" ? Math.floor(day / 7) + now.getFullYear() * 53 : day + now.getFullYear() * 366;
  return seed % length;
}

const visualPalettes = [
  ["#f6f1e5", "#11110f", "#00a996", "#e35d42", "#f2b35d"],
  ["#f3ead8", "#171411", "#315c75", "#b94735", "#d9a441"],
  ["#eee7dc", "#101113", "#7a4f9d", "#1f8f7a", "#e1b75a"],
  ["#f7f0df", "#15110d", "#a84434", "#2f6c62", "#d7c16b"],
  ["#efe8d8", "#101010", "#2b6580", "#c2543f", "#d49b4d"]
];

function simpleHash(value = "") {
  return [...String(value)].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function escapeSvgText(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 42);
}

function artifactImage(title, subtitle = "", type = "ARCHIVE", index = 0) {
  const palette = visualPalettes[(simpleHash(title) + index) % visualPalettes.length];
  const [paper, ink, teal, red, gold] = palette;
  const shortTitle = escapeSvgText(title);
  const shortSubtitle = escapeSvgText(subtitle);
  const shortType = escapeSvgText(type);
  const seed = simpleHash(`${title}${subtitle}${type}`);
  const cx = 170 + (seed % 90);
  const cy = 170 + (seed % 70);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 820">
      <defs>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer><feFuncA type="table" tableValues="0 0.15"/></feComponentTransfer>
          <feBlend mode="multiply" in2="SourceGraphic"/>
        </filter>
        <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M42 0H0v42" fill="none" stroke="${ink}" stroke-opacity=".08" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="640" height="820" fill="${paper}"/>
      <rect width="640" height="820" fill="url(#grid)"/>
      <path d="M-30 ${520 + (seed % 80)} C120 ${420 + (seed % 70)} 210 ${650 - (seed % 90)} 380 ${520 + (seed % 50)} S620 ${430 + (seed % 80)} 700 ${580 - (seed % 40)}" fill="none" stroke="${ink}" stroke-opacity=".32" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="138" fill="none" stroke="${ink}" stroke-opacity=".34" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="92" fill="none" stroke="${teal}" stroke-opacity=".8" stroke-width="16"/>
      <circle cx="${cx}" cy="${cy}" r="24" fill="${ink}" fill-opacity=".72"/>
      <path d="M72 112h190M72 132h120M72 680h420M72 704h280" stroke="${ink}" stroke-opacity=".22" stroke-width="3"/>
      <rect x="420" y="82" width="112" height="112" fill="${red}" fill-opacity=".82"/>
      <circle cx="516" cy="178" r="58" fill="${gold}" fill-opacity=".78"/>
      <text x="70" y="74" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" font-weight="800" fill="${ink}" fill-opacity=".64" letter-spacing="3">${shortType}</text>
      <text x="70" y="590" font-family="Georgia, serif" font-size="56" font-weight="500" fill="${ink}">
        ${shortTitle.split(" ").slice(0, 3).join(" ")}
      </text>
      <text x="70" y="640" font-family="Georgia, serif" font-size="34" font-weight="500" fill="${ink}" fill-opacity=".82">
        ${shortTitle.split(" ").slice(3, 7).join(" ")}
      </text>
      <text x="70" y="748" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" font-weight="800" fill="${ink}" fill-opacity=".64">${shortSubtitle}</text>
      <rect width="640" height="820" filter="url(#grain)" opacity=".7"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function layeredImage(primary, fallback, overlay = "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.38))") {
  return `${overlay}, url('${primary}'), url('${fallback}')`;
}

function artifactSvg(title, subtitle = "", type = "ARCHIVE", index = 0) {
  const palette = visualPalettes[(simpleHash(title) + index) % visualPalettes.length];
  const [paper, ink, teal, red, gold] = palette;
  const shortTitle = escapeSvgText(title);
  const shortSubtitle = escapeSvgText(subtitle);
  const shortType = escapeSvgText(type);
  const seed = simpleHash(`${title}${subtitle}${type}`);
  const cx = 170 + (seed % 90);
  const cy = 170 + (seed % 70);
  return `
    <svg class="artifact-svg" viewBox="0 0 640 820" aria-hidden="true" focusable="false">
      <rect width="640" height="820" fill="${paper}"></rect>
      <g opacity=".22" stroke="${ink}" stroke-width="1">
        ${Array.from({ length: 16 }, (_, line) => `<path d="M${line * 42} 0V820"></path>`).join("")}
        ${Array.from({ length: 20 }, (_, line) => `<path d="M0 ${line * 42}H640"></path>`).join("")}
      </g>
      <path d="M-30 ${520 + (seed % 80)} C120 ${420 + (seed % 70)} 210 ${650 - (seed % 90)} 380 ${520 + (seed % 50)} S620 ${430 + (seed % 80)} 700 ${580 - (seed % 40)}" fill="none" stroke="${ink}" stroke-opacity=".34" stroke-width="3"></path>
      <circle cx="${cx}" cy="${cy}" r="138" fill="none" stroke="${ink}" stroke-opacity=".34" stroke-width="2"></circle>
      <circle cx="${cx}" cy="${cy}" r="92" fill="none" stroke="${teal}" stroke-opacity=".82" stroke-width="18"></circle>
      <circle cx="${cx}" cy="${cy}" r="24" fill="${ink}" fill-opacity=".72"></circle>
      <rect x="420" y="82" width="112" height="112" fill="${red}" fill-opacity=".84"></rect>
      <circle cx="516" cy="178" r="58" fill="${gold}" fill-opacity=".78"></circle>
      <path d="M72 112h190M72 132h120M72 680h420M72 704h280" stroke="${ink}" stroke-opacity=".26" stroke-width="4"></path>
      <text x="70" y="74" font-family="monospace" font-size="18" font-weight="800" fill="${ink}" fill-opacity=".66" letter-spacing="3">${shortType}</text>
      <text x="70" y="590" font-family="Georgia, serif" font-size="56" font-weight="500" fill="${ink}">${shortTitle.split(" ").slice(0, 3).join(" ")}</text>
      <text x="70" y="640" font-family="Georgia, serif" font-size="34" font-weight="500" fill="${ink}" fill-opacity=".84">${shortTitle.split(" ").slice(3, 7).join(" ")}</text>
      <text x="70" y="748" font-family="monospace" font-size="18" font-weight="800" fill="${ink}" fill-opacity=".66">${shortSubtitle}</text>
    </svg>`;
}

const normalizeEntity = (value = "") =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ")
    .trim();

const splitEntityList = (value = "") =>
  Array.isArray(value)
    ? value
    : String(value)
        .split(/·|,|\/|;|\band\b|\+|\|/i)
        .map((item) => item.trim())
        .filter(Boolean);

const uniqueItems = (items) => [...new Set(items.filter(Boolean))];

function entityButton(type, name, className = "entity-chip") {
  if (!name) return "";
  return `<button class="${className}" type="button" data-entity-type="${type}" data-entity-name="${encodeURIComponent(name)}">${name}</button>`;
}

function entityList(type, items, className = "relation-chips") {
  const values = uniqueItems(items).slice(0, 14);
  return values.length ? `<div class="${className}">${values.map((item) => entityButton(type, item)).join("")}</div>` : "";
}

function albumMatchesEntity(album, type, name) {
  const key = normalizeEntity(name);
  const label = getAlbumLabel(album);
  const haystack = [
    album.title,
    album.artist,
    album.region,
    album.country,
    album.year,
    label,
    album.summary,
    album.culture,
    album.culturalNotes,
    album.listeningContext,
    ...(album.genres || []),
    ...(album.relatedArtists || []),
    ...(album.relatedInstruments || [])
  ]
    .map(normalizeEntity)
    .join(" ");

  if (type === "album") return normalizeEntity(album.title) === key;
  if (type === "artist") return splitEntityList(album.artist).some((artist) => normalizeEntity(artist) === key) || (album.relatedArtists || []).some((artist) => normalizeEntity(artist) === key);
  if (type === "label") return normalizeEntity(label) === key || normalizeEntity(album.source).includes(key);
  if (type === "instrument") return (album.relatedInstruments || []).some((instrument) => normalizeEntity(instrument) === key) || haystack.includes(key);
  if (type === "region") return normalizeEntity(album.region).includes(key) || normalizeEntity(album.country).includes(key) || key.includes(normalizeEntity(album.country));
  if (type === "story") {
    const story = featuredStories.find((item) => normalizeEntity(item.title) === key);
    if (!story) return haystack.includes(key);
    return [...story.artists, ...story.labels, ...story.albums, ...(story.instruments || [])].some((item) => haystack.includes(normalizeEntity(item))) || story.countries.split(" · ").some((place) => haystack.includes(normalizeEntity(place)));
  }
  return haystack.includes(key);
}

function getRelatedAlbums(type, name, limit = 12) {
  return albums.filter((album) => albumMatchesEntity(album, type, name)).slice(0, limit);
}

function buildEntityProfile(type, name) {
  const relatedAlbums = getRelatedAlbums(type, name, 18);
  const story = featuredStories.find((item) => normalizeEntity(item.title) === normalizeEntity(name));
  const artist = essentialArtists.find((item) => normalizeEntity(item.name) === normalizeEntity(name));
  const label = labelArchive.find((item) => normalizeEntity(item.name) === normalizeEntity(name));
  const instrument = instrumentAtlas.find((item) => normalizeEntity(item.name) === normalizeEntity(name));
  const regionAlbums = type === "region" ? getRelatedAlbums("region", name, 30) : relatedAlbums;
  const baseAlbums = relatedAlbums.length ? relatedAlbums : regionAlbums;

  const relatedArtists = uniqueItems([
    ...(story?.artists || []),
    ...splitEntityList(label?.artists),
    ...baseAlbums.flatMap((album) => [album.artist, ...(album.relatedArtists || [])])
  ]);
  const relatedLabels = uniqueItems([
    ...(story?.labels || []),
    artist?.labels,
    ...baseAlbums.map(getAlbumLabel)
  ].flatMap(splitEntityList));
  const relatedInstruments = uniqueItems([
    ...(story?.instruments || []),
    instrument?.name,
    artist?.instruments,
    ...baseAlbums.flatMap((album) => album.relatedInstruments || [])
  ].flatMap(splitEntityList));
  const relatedStories = uniqueItems([
    ...(artist?.stories ? splitEntityList(artist.stories) : []),
    ...(story ? [story.title] : []),
    ...featuredStories
      .filter((item) => [...item.artists, ...item.labels, ...item.albums, ...(item.instruments || [])].some((entry) => normalizeEntity(name).includes(normalizeEntity(entry)) || normalizeEntity(entry).includes(normalizeEntity(name))))
      .map((item) => item.title)
  ]);
  const relatedRegions = uniqueItems([
    story?.countries,
    artist?.region,
    instrument?.region,
    label?.location,
    ...baseAlbums.map((album) => album.region)
  ].flatMap(splitEntityList));

  const description =
    story?.historicalContext ||
    label?.philosophy ||
    instrument?.description ||
    artist?.scenes ||
    baseAlbums[0]?.culturalNotes ||
    baseAlbums[0]?.culture ||
    "A relational archive node generated from shared albums, regions, labels, instruments and stories.";

  return { relatedAlbums: baseAlbums, relatedArtists, relatedLabels, relatedInstruments, relatedStories, relatedRegions, description };
}

function relationSection(title, html) {
  return html ? `<section class="relation-section"><h3>${title}</h3>${html}</section>` : "";
}

function showArchiveDialog() {
  if (!albumDialog.open) albumDialog.showModal();
}

function renderAlbums() {
  const visibleAlbums = albums.filter(albumMatches);

  albumGrid.innerHTML = visibleAlbums.length
    ? visibleAlbums
        .map(
          (album, index) => {
            const fallbackSvg = artifactSvg(album.title, `${album.country || album.region} · ${album.year}`, "RECORD", index);
            return `
            <article class="album-card record-card">
              <div class="album-cover">${fallbackSvg}</div>
              <div class="album-body">
                <div class="album-kicker">
                  <span>${album.country || album.region}</span>
                  <span>${album.year}</span>
                </div>
                <div class="album-hover">
                  <p class="record-artist">${album.artist}</p>
                  <h3>${album.title}</h3>
                  <div class="tag-row">
                    ${album.genres.map((genre) => `<span class="tag ${genre.includes("afro") ? "coral" : "teal"}">${genre}</span>`).join("")}
                  </div>
                  <div class="album-meta">
                    <span>${getAlbumScene(album)}</span>
                    <span>${getAlbumLabel(album)}</span>
                  </div>
                </div>
              </div>
              <button type="button" data-album-index="${index}">打开档案</button>
            </article>
          `}
        )
        .join("")
    : `<div class="empty-state">没有匹配结果，可以换一个地区、风格或音乐人关键词。</div>`;
}

function renderRegions() {
  const profiles = soundMapRegions.map(getMapRegionProfile);

  if (soundMap) {
    soundMap.innerHTML = `
      <div class="map-grid" aria-hidden="true"></div>
      ${profiles
        .map(
          (profile, index) => `
            <button
              class="sound-map-node"
              type="button"
              data-region="${profile.name}"
              style="--x:${profile.x}%; --y:${profile.y}%; --node-index:${index}"
              aria-label="${profile.name}, ${profile.albums.length} albums, ${profile.artists.length} artists">
              <span>${profile.zh}</span>
              <strong>${profile.name}</strong>
              <em>${profile.albums.length} albums · ${profile.artists.length} artists · ${profile.labels.length} labels</em>
            </button>
          `
        )
        .join("")}
    `;
  }

  regionList.innerHTML = profiles
    .map(
      (profile, index) => `
        <button class="region-card" type="button" data-region="${profile.name}" style="--atlas-index:${index}">
          <small>${String(index + 1).padStart(2, "0")}</small>
          <strong>${profile.name}</strong>
          <span>${profile.albums.length} Albums · ${profile.artists.length} Artists · ${profile.labels.length} Labels · ${Math.max(profile.stories.length, 1)} Stories</span>
          <em>${profile.featuredStory?.title || profile.featured}</em>
        </button>
      `
    )
    .join("");

  statAlbums.textContent = albums.length;
  statRegions.textContent = profiles.length;
}

function renderFeaturedStories() {
  const target = document.querySelector("#featuredStories");
  if (!target) return;
  target.innerHTML = featuredStories
    .map((story, index) => {
      const countryCount = splitEntityList(story.countries).length;
      const fallbackSvg = artifactSvg(story.title, story.countries, "EXHIBITION", index);
      return `
        <article class="story-card">
          <div class="story-visual">${fallbackSvg}</div>
          <div class="story-poster-content">
            <span class="story-period">${story.period}</span>
            <h3>${story.title}</h3>
            <small class="zh-sub card-sub">${story.zh}</small>
            <div class="story-stats" aria-label="story statistics">
              <span><strong>${story.albums.length}</strong> albums</span>
              <span><strong>${story.artists.length}</strong> artists</span>
              <span><strong>${countryCount}</strong> countries</span>
            </div>
            <dl class="story-meta">
              <div><dt>Countries</dt><dd>${story.countries}</dd></div>
              <div><dt>Artists</dt><dd>${entityList("artist", story.artists.slice(0, 3))}</dd></div>
              <div><dt>Labels</dt><dd>${entityList("label", story.labels.slice(0, 3))}</dd></div>
            </dl>
            <button class="story-arrow" type="button" data-entity-type="story" data-entity-name="${encodeURIComponent(story.title)}" aria-label="Open ${story.title}">↗</button>
          </div>
        </article>
      `
    })
    .join("");
}

function renderListeningJourneys() {
  const target = document.querySelector("#listeningJourneys");
  if (!target) return;
  target.innerHTML = listeningJourneys
    .map(
      (journey, index) => `
        <article class="journey-card">
          <div class="journey-image" data-initial="${journey.title.slice(0, 2).toUpperCase()}">${artifactSvg(journey.title, journey.route.slice(0, 3).join(" / "), "ROUTE", index)}</div>
          <span>${journey.title}</span>
          <small class="zh-sub card-sub">${journey.zh}</small>
          <ol class="journey-preview">
            ${journey.route.slice(0, 3).map((step, stepIndex) => `<li><b>${String(stepIndex + 1).padStart(2, "0")}</b>${step}</li>`).join("")}
          </ol>
          <p>${journey.note}</p>
          <button class="journey-start" type="button" data-journey-index="${index}">Start Journey</button>
        </article>
      `
    )
    .join("");
}

function renderInstrumentAtlas() {
  const target = document.querySelector("#instrumentAtlas");
  if (!target) return;
  target.innerHTML = instrumentAtlas
    .map(
      (instrument, index) => `
        <article class="instrument-card">
          <div class="instrument-image instrument-artifact">
            ${artifactSvg(instrument.name, instrument.region, "INSTRUMENT", index)}
            <strong>${instrument.name.slice(0, 2).toUpperCase()}</strong>
            <small>${instrument.artifact}</small>
          </div>
          <div>
            <span>${instrument.region}</span>
            <h3>${instrument.name}</h3>
            <small class="zh-sub card-sub">${instrument.zh}</small>
            <p>${instrument.description}</p>
            ${entityButton("instrument", instrument.name, "entity-chip story-open")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  const target = document.querySelector("#timelineGrid");
  if (!target) return;
  target.innerHTML = timelineEntries
    .map(
      (entry) => `
        <article class="timeline-card">
          <time>${entry.year}</time>
          <h3>${entry.title}</h3>
          <span>${entry.region}</span>
          <p>${entry.note}</p>
        </article>
      `
    )
    .join("");
}

function renderEssentialArtists() {
  const target = document.querySelector("#artistGrid");
  if (!target) return;
  target.innerHTML = essentialArtists
    .map(
      (artist, index) => `
        <article class="artist-card">
          <div class="artist-image">${artifactSvg(artist.name, artist.region, "PORTRAIT", index)}</div>
          <div class="artist-face">
            <span>${artist.region}</span>
            <h3>${artist.name}</h3>
          </div>
          <div class="artist-reveal">
            <dl>
              <div><dt>Albums</dt><dd>${artist.albums}</dd></div>
              <div><dt>Labels</dt><dd>${entityList("label", splitEntityList(artist.labels))}</dd></div>
              <div><dt>Scenes</dt><dd>${artist.scenes}</dd></div>
              <div><dt>Instruments</dt><dd>${entityList("instrument", splitEntityList(artist.instruments))}</dd></div>
              <div><dt>Stories</dt><dd>${entityList("story", splitEntityList(artist.stories))}</dd></div>
            </dl>
            ${entityButton("artist", artist.name, "entity-chip story-open")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderLabelArchive() {
  const target = document.querySelector("#labelArchive");
  if (!target) return;
  target.innerHTML = labelArchive
    .map(
      (label) => `
        <article class="label-card">
          <span>${label.location} · founded ${label.founded}</span>
          <h3>${label.name}</h3>
          <p>${label.philosophy}</p>
          <dl>
            <div><dt>Artists</dt><dd>${entityList("artist", splitEntityList(label.artists))}</dd></div>
            <div><dt>Key releases</dt><dd>${label.releases}</dd></div>
            <div><dt>Why it matters</dt><dd>${label.significance}</dd></div>
          </dl>
          ${entityButton("label", label.name, "entity-chip story-open")}
        </article>
      `
    )
    .join("");
}

function renderSources() {
  sourceQueue.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <div class="tag-row">
            <span class="tag">${source.platform}</span>
            <span class="tag teal">${source.createdAt}</span>
          </div>
          <h3>${source.tags || "未标注"}</h3>
          <p><a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a></p>
        </article>
      `
    )
    .join("");
}

function renderDemos() {
  statDemos.textContent = demos.length;
  demoList.innerHTML = demos.length
    ? demos
        .map(
          (demo) => `
            <article class="demo-card">
              <div class="tag-row">
                <span class="tag coral">${demo.genre}</span>
                <span class="tag teal">${demo.region}</span>
              </div>
              <h3>${demo.title}</h3>
              <p>${demo.artist}</p>
              <p>${demo.story || "等待补充文化背景。"}</p>
              <p><a href="${demo.link}" target="_blank" rel="noreferrer">试听链接</a></p>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">提交的 Demo 会先进入本地审核池，后续可以接账号系统和后台审核。</div>`;
}

function renderEvents() {
  const visibleEvents = showFieldNotes ? events : events.filter((event) => event.type !== "field");
  eventGrid.innerHTML = visibleEvents
    .map(
      (event) => `
        <article class="event-card" data-type="${event.type}">
          <div class="tag-row">
            ${event.tags.map((tag) => `<span class="tag ${tag === "club" ? "coral" : "teal"}">${tag}</span>`).join("")}
          </div>
          <h3>${event.title}</h3>
          <p>${event.note}</p>
          <div class="event-meta">
            <span>${event.place}</span>
            <span>${event.date}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  resourceGrid.innerHTML = musicResources
        .map(
          (resource) => `
        <a class="resource-card" href="${resource.url}" target="_blank" rel="noreferrer" data-category="${resource.category}">
          <span>${resource.platform}</span>
          <strong>${resource.title}</strong>
          <em>${resource.category}</em>
          <p>${resource.note}</p>
        </a>
      `
    )
    .join("");
}

function renderExtendedResources() {
  if (!extendedResourcesGrid) return;
  extendedResourcesGrid.innerHTML = extendedResourceTypes
    .map(
      (resource) => `
        <article class="extended-resource-card">
          <span>${resource.type}</span>
          <h3>${resource.title}</h3>
          <small>${resource.region}</small>
          <p>${resource.note}</p>
          ${entityList("search", resource.connects, "resource-links")}
        </article>
      `
    )
    .join("");
}

function renderWeeklyDiscovery() {
  if (!weeklyDiscovery) return;
  const weekIndex = dateIndex(albums.length, "week");
  const picks = [
    { label: "Album of the Week", zh: "本周专辑", value: albums[weekIndex], type: "album" },
    { label: "Artist of the Week", zh: "本周音乐人", value: essentialArtists[dateIndex(essentialArtists.length, "week")], type: "artist" },
    { label: "Label of the Week", zh: "本周厂牌", value: labelArchive[dateIndex(labelArchive.length, "week")], type: "label" },
    { label: "Region of the Week", zh: "本周地区", value: soundMapRegions[dateIndex(soundMapRegions.length, "week")], type: "region" },
    { label: "Instrument of the Week", zh: "本周乐器", value: instrumentAtlas[dateIndex(instrumentAtlas.length, "week")], type: "instrument" }
  ];

  weeklyDiscovery.innerHTML = picks
    .map((pick) => {
      const title = pick.value.title || pick.value.name;
      const subtitle = pick.value.artist || pick.value.region || pick.value.location || pick.value.zh || "";
      const meta = pick.value.year || pick.value.founded || pick.value.country || pick.value.type || "archive node";
      const entityType = pick.type === "album" ? "album" : pick.type;
      const visual = artifactSvg(title, subtitle, pick.label, simpleHash(pick.label));
      return `
        <button class="weekly-card" type="button" data-weekly-type="${entityType}" data-weekly-name="${encodeURIComponent(title)}">
          <div class="weekly-image">${visual}</div>
          <span>${pick.label}</span>
          <small class="zh-sub">${pick.zh}</small>
          <strong>${title}</strong>
          <em>${subtitle} · ${meta}</em>
        </button>
      `;
    })
    .join("");
}

function renderTodayJourney() {
  if (!todayJourney) return;
  const index = dateIndex(listeningJourneys.length, "day");
  const journey = listeningJourneys[index];
  todayJourney.innerHTML = `
    <div class="daily-route-mark">
      <span>${new Date().toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}</span>
      <strong>${journey.title}</strong>
      <small class="zh-sub">${journey.zh}</small>
    </div>
    <ol>
      ${journey.route.map((step, stepIndex) => `<li><b>${String(stepIndex + 1).padStart(2, "0")}</b>${step}</li>`).join("")}
    </ol>
    <button class="journey-start" type="button" data-journey-index="${index}">Start Today's Journey</button>
  `;
}

function renderFieldNotesArchive() {
  if (!fieldNotesGrid) return;
  fieldNotesGrid.innerHTML = fieldNotesArchive
    .map(
      (note, index) => `
        <article class="field-note-card">
          <div class="field-note-image">${artifactSvg(note.title, note.location, "FIELD NOTE", index)}</div>
          <span>${note.location}</span>
          <h3>${note.title}</h3>
          <small>${note.photos}</small>
          <p>${note.context}</p>
          <dl>
            <div><dt>Audio References</dt><dd>${note.audio}</dd></div>
            <div><dt>Traditions</dt><dd>${entityList("search", note.traditions)}</dd></div>
            <div><dt>Instruments</dt><dd>${entityList("instrument", note.instruments)}</dd></div>
          </dl>
          <button class="story-open" type="button" data-field-note="${index}">Open Field Note</button>
        </article>
      `
    )
    .join("");
}

function renderPulseApp() {
  pulseModesGrid.innerHTML = pulseModes
    .map(
      (mode) => `
        <button class="pulse-card ${mode.color}" type="button" data-mode="${mode.id}">
          <span class="pulse-card-top">
            <span>${mode.icon}</span>
            <small>${mode.title}</small>
          </span>
          <strong>${mode.title}</strong>
          <em>${mode.subtitle}</em>
        </button>
      `
    )
    .join("");

  aiFeatureGrid.innerHTML = aiFeatures
    .map(
      (feature) => `
        <article class="ai-feature-card">
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </article>
      `
    )
    .join("");
}

function buildAnalysis(query = "") {
  const text = query.trim().toLowerCase();
  const matchedMode =
    pulseModes.find((mode) => text.includes(mode.id) || text.includes(mode.title.toLowerCase())) ||
    pulseModes.find((mode) => text.includes(mode.subtitle)) ||
    pulseModes[1];
  const recommendations = albums
    .filter((album) => album.genres.includes(matchedMode.filter) || album.summary.toLowerCase().includes(matchedMode.filter))
    .slice(0, 3);
  const fallback = recommendations.length ? recommendations : albums.slice(0, 3);

  analysisOutput.innerHTML = `
    <div class="analysis-header">
      <span>AI MIX BRIEF</span>
      <strong>${matchedMode.title} / ${matchedMode.subtitle}</strong>
    </div>
    <div class="meter-grid">
      <span>Energy <b>${matchedMode.id === "run" ? "92" : matchedMode.id === "drift" ? "38" : "66"}</b></span>
      <span>Mood <b>${matchedMode.id === "grow" ? "Organic" : matchedMode.id === "rinse" ? "Steam" : "Pulse"}</b></span>
      <span>Timbre <b>Drum · Field · Bass</b></span>
      <span>Mix Tip <b>8-16 bar blend</b></span>
    </div>
    <p>${query ? `根据“${query}”生成：` : "从当前档案库生成："}${matchedMode.prompt}。</p>
    <div class="mini-recs">
      ${fallback
        .map(
          (album) => `
            <button type="button" data-smart-open="${album.title}">
              <strong>${album.title}</strong>
              <span>${album.artist} · ${album.genres.slice(0, 2).join(" / ")}</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function playerMarkup(album) {
  const player = listeningSources[album.title] || { url: album.sourceUrl, type: "link" };
  const cleanUrl = player.url.replace(/^https?:\/\//, "");

  if (player.embedUrl) {
    return `
      <section class="listen-panel" aria-label="试听播放器">
        <div class="listen-heading">
          <span>LISTEN</span>
          <strong>内嵌播放器</strong>
        </div>
        <iframe
          title="${album.title} player"
          class="listen-frame bandcamp-frame"
          loading="lazy"
          seamless
          src="${player.embedUrl}">
          <a href="${player.url}">Listen on Bandcamp</a>
        </iframe>
      </section>
    `;
  }

  if (player.type === "soundcloud") {
    const soundcloudUrl = encodeURIComponent(player.url);
    return `
      <section class="listen-panel" aria-label="试听播放器">
        <div class="listen-heading">
          <span>LISTEN</span>
          <strong>嵌入式试听</strong>
        </div>
        <iframe
          title="${album.title} player"
          class="listen-frame"
          allow="autoplay"
          loading="lazy"
          src="https://w.soundcloud.com/player/?url=${soundcloudUrl}&color=%2300f0c8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
        </iframe>
      </section>
    `;
  }

  return `
    <section class="listen-panel" aria-label="试听播放器">
      <div class="listen-heading">
        <span>LISTEN</span>
        <strong>外部平台试听</strong>
      </div>
      <a class="play-card" href="${player.url}" target="_blank" rel="noreferrer">
        <span class="play-icon" aria-hidden="true">▶</span>
        <span>
          <strong>打开可播放来源</strong>
          <small>${cleanUrl}</small>
        </span>
      </a>
      <p class="listen-note">拿到每张专辑的 Bandcamp 或 SoundCloud embed ID 后，这里可以替换成原平台内嵌播放器。</p>
    </section>
  `;
}

function renderRelatedAlbums(albumsToRender) {
  return albumsToRender.length
    ? `<div class="related-albums">${albumsToRender
        .map(
          (album) => `
            <button type="button" data-open-album="${encodeURIComponent(album.title)}">
              <span>${album.region} · ${album.year}</span>
              <strong>${album.title}</strong>
              <em>${album.artist}</em>
            </button>
          `
        )
        .join("")}</div>`
    : "";
}

function albumRelationsMarkup(album) {
  const label = getAlbumLabel(album);
  const storyLinks = featuredStories
    .filter((story) => albumMatchesEntity(album, "story", story.title))
    .map((story) => story.title);
  return `
    <section class="relation-panel" aria-label="关系网络">
      <div class="relation-heading">
        <span>RELATIONAL ARCHIVE</span>
        <strong>继续探索</strong>
      </div>
      ${relationSection("Artist", entityList("artist", [album.artist, ...(album.relatedArtists || [])]))}
      ${relationSection("Label", entityList("label", [label]))}
      ${relationSection("Instruments", entityList("instrument", album.relatedInstruments || []))}
      ${relationSection("Stories", entityList("story", storyLinks))}
      ${relationSection("Region", entityList("region", [album.region, album.country]))}
      ${relationSection("Nearby Records", renderRelatedAlbums(getRelatedAlbums("region", album.region, 6).filter((item) => item.title !== album.title)))}
    </section>
  `;
}

function renderAlbumDialog(album) {
  if (!album) return;
  const fallback = artifactImage(album.title, `${album.country || album.region} · ${album.year}`, "RECORD DETAIL", simpleHash(album.title));

  dialogContent.innerHTML = `
    <div class="dialog-hero" style="background-image: ${layeredImage(album.cover, fallback, "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.64))")}">
      <h2>${album.title}</h2>
    </div>
    <div class="dialog-body">
      <div class="tag-row">
        ${album.genres.map((genre) => `<span class="tag ${genre.includes("afro") ? "coral" : "teal"}">${genre}</span>`).join("")}
      </div>
      <p><strong>${album.artist}</strong> · ${album.region} · ${album.year}</p>
      <p>${album.summary}</p>
      <p>${album.culture}</p>
      ${playerMarkup(album)}
      ${albumRelationsMarkup(album)}
      <p>来源线索：${album.source}</p>
      <p><a class="source-link" href="${album.sourceUrl}" target="_blank" rel="noreferrer">打开原始来源</a></p>
    </div>
  `;
  showArchiveDialog();
}

function openAlbum(indexFromVisible) {
  renderAlbumDialog(albums.filter(albumMatches)[Number(indexFromVisible)]);
}

function openAlbumByTitle(title) {
  renderAlbumDialog(albums.find((album) => album.title === title));
}

function storyExhibitionMarkup(story) {
  const relatedAlbums = getRelatedAlbums("story", story.title, 10);
  const timeline = timelineEntries
    .filter((entry) => story.period.includes(entry.year) || storyMatchesMapRegion(story, { keywords: [entry.region], featured: story.title }))
    .slice(0, 5);
  const journey = listeningJourneys.find((item) => item.route.some((step) => story.artists.some((artist) => normalizeEntity(step).includes(normalizeEntity(artist))))) || listeningJourneys[dateIndex(listeningJourneys.length, "day")];
  const regions = soundMapRegions.filter((region) => storyMatchesMapRegion(story, region)).map((region) => region.name);
  const resources = extendedResourceTypes.filter((resource) => resource.connects.some((item) => normalizeEntity(story.historicalContext + " " + story.title + " " + story.countries).includes(normalizeEntity(item)))).slice(0, 3);
  const fallback = artifactImage(story.title, story.countries, "MICRO MUSEUM", simpleHash(story.title));

  return `
    <div class="dialog-hero story-exhibition-hero" style="background-image: ${layeredImage(story.image, fallback, "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.72))")}">
      <span>${story.period}</span>
      <h2>${story.title}</h2>
    </div>
    <div class="dialog-body exhibition-body">
      <div class="relation-heading">
        <span>MICRO MUSEUM</span>
        <strong>${story.zh}</strong>
      </div>
      <section class="exhibition-overview">
        <p>${story.historicalContext}</p>
        <div class="story-stats exhibition-stats">
          <span><strong>${story.albums.length}</strong> albums</span>
          <span><strong>${story.artists.length}</strong> artists</span>
          <span><strong>${splitEntityList(story.countries).length}</strong> countries</span>
        </div>
      </section>
      <section class="exhibition-grid">
        ${relationSection("Timeline", timeline.length ? `<ol class="mini-timeline">${timeline.map((entry) => `<li><time>${entry.year}</time><strong>${entry.title}</strong><p>${entry.note}</p></li>`).join("")}</ol>` : `<p>${story.period}</p>`)}
        ${relationSection("Artists", entityList("artist", story.artists))}
        ${relationSection("Albums", entityList("album", story.albums))}
        ${relationSection("Labels", entityList("label", story.labels))}
        ${relationSection("Instruments", entityList("instrument", story.instruments || []))}
        ${relationSection("Related Regions", entityList("region", regions.length ? regions : splitEntityList(story.countries)))}
        ${relationSection("Listening Journey", `<button class="journey-start" type="button" data-journey-index="${listeningJourneys.indexOf(journey)}">${journey.title}</button><p>${journey.route.join(" → ")}</p>`)}
        ${relationSection("Recommended Reading", resources.length ? resources.map((resource) => `<article class="resource-mini"><span>${resource.type}</span><strong>${resource.title}</strong><p>${resource.note}</p></article>`).join("") : `<p>Use label catalogues, artist interviews and field recording notes as the next research path.</p>`)}
        ${relationSection("Field Notes", fieldNotesArchive.filter((note) => storyMatchesMapRegion(story, { keywords: [note.location, ...note.traditions], featured: story.title })).slice(0, 2).map((note) => `<article class="resource-mini"><span>${note.location}</span><strong>${note.title}</strong><p>${note.context}</p></article>`).join("") || `<p>No formal field note attached yet. This exhibition can be expanded with local documentation.</p>`)}
      </section>
      ${relationSection("Records in This Exhibition", renderRelatedAlbums(relatedAlbums))}
    </div>
  `;
}

function openStoryExhibition(name) {
  const story = featuredStories.find((item) => normalizeEntity(item.title) === normalizeEntity(name));
  if (!story) {
    const profile = buildEntityProfile("story", name);
    dialogContent.innerHTML = `
      <div class="dialog-hero relation-hero">
        <h2>${name}</h2>
      </div>
      <div class="dialog-body">
        <div class="relation-heading">
          <span>STORY NODE</span>
          <strong>Relational archive entry</strong>
        </div>
        <p>${profile.description}</p>
        <section class="relation-panel">
          ${relationSection("Related Records", renderRelatedAlbums(profile.relatedAlbums))}
          ${relationSection("Artists", entityList("artist", profile.relatedArtists))}
          ${relationSection("Labels", entityList("label", profile.relatedLabels))}
          ${relationSection("Instruments", entityList("instrument", profile.relatedInstruments))}
          ${relationSection("Regions", entityList("region", profile.relatedRegions))}
        </section>
      </div>
    `;
    showArchiveDialog();
    return;
  }
  dialogContent.innerHTML = storyExhibitionMarkup(story);
  showArchiveDialog();
}

function openRegionProfile(name) {
  const region = soundMapRegions.find((item) => normalizeEntity(item.name) === normalizeEntity(name));
  if (!region) {
    openEntity("region", encodeURIComponent(name));
    return;
  }
  const profile = getMapRegionProfile(region);
  dialogContent.innerHTML = `
    <div class="dialog-hero relation-hero map-region-hero">
      <span>${profile.zh}</span>
      <h2>${profile.name}</h2>
    </div>
    <div class="dialog-body">
      <div class="relation-heading">
        <span>SOUND MAP TERRITORY</span>
        <strong>${profile.featuredStory?.title || profile.featured}</strong>
      </div>
      <section class="story-stats exhibition-stats">
        <span><strong>${profile.albums.length}</strong> albums</span>
        <span><strong>${profile.artists.length}</strong> artists</span>
        <span><strong>${profile.labels.length}</strong> labels</span>
        <span><strong>${Math.max(profile.stories.length, 1)}</strong> stories</span>
      </section>
      <section class="relation-panel">
        ${relationSection("Featured Story", profile.featuredStory ? entityButton("story", profile.featuredStory.title) : "")}
        ${relationSection("Artists", entityList("artist", profile.artists.slice(0, 18)))}
        ${relationSection("Labels", entityList("label", profile.labels.slice(0, 14)))}
        ${relationSection("Instruments", entityList("instrument", profile.instruments.slice(0, 14)))}
        ${relationSection("Records", renderRelatedAlbums(profile.albums.slice(0, 10)))}
        ${relationSection("Field Notes", fieldNotesArchive.filter((note) => matchesAnyKeyword(note.location + " " + note.traditions.join(" "), profile.keywords)).map((note) => `<article class="resource-mini"><span>${note.location}</span><strong>${note.title}</strong><p>${note.context}</p></article>`).join(""))}
      </section>
    </div>
  `;
  showArchiveDialog();
}

function openFieldNote(index) {
  const note = fieldNotesArchive[Number(index)];
  if (!note) return;
  dialogContent.innerHTML = `
    <div class="dialog-hero relation-hero field-note-hero" style="background-image: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.66)), url('${artifactImage(note.title, note.location, "FIELD NOTE", Number(index))}')">
      <span>${note.location}</span>
      <h2>${note.title}</h2>
    </div>
    <div class="dialog-body">
      <div class="relation-heading">
        <span>FIELD NOTE</span>
        <strong>${note.photos}</strong>
      </div>
      <p>${note.context}</p>
      <section class="relation-panel">
        ${relationSection("Audio References", `<p>${note.audio}</p>`)}
        ${relationSection("Related Traditions", entityList("search", note.traditions))}
        ${relationSection("Related Instruments", entityList("instrument", note.instruments))}
        ${relationSection("Related Records", renderRelatedAlbums(albums.filter((album) => note.traditions.some((tradition) => albumMatchesEntity(album, "search", tradition)) || note.instruments.some((instrument) => albumMatchesEntity(album, "instrument", instrument))).slice(0, 8)))}
      </section>
    </div>
  `;
  showArchiveDialog();
}

function openEntity(type, rawName) {
  const name = decodeURIComponent(rawName || "");
  if (!name) return;
  if (type === "search") {
    searchInput.value = name;
    renderAlbums();
    showPage("archive");
    return;
  }
  if (type === "album") {
    openAlbumByTitle(name);
    return;
  }
  if (type === "story") {
    openStoryExhibition(name);
    return;
  }
  if (type === "region" && soundMapRegions.some((region) => normalizeEntity(region.name) === normalizeEntity(name))) {
    openRegionProfile(name);
    return;
  }

  const profile = buildEntityProfile(type, name);
  const typeLabel = {
    artist: "ARTIST",
    label: "LABEL",
    instrument: "INSTRUMENT",
    story: "STORY",
    region: "REGION"
  }[type] || "ENTITY";

  dialogContent.innerHTML = `
    <div class="dialog-hero relation-hero">
      <h2>${name}</h2>
    </div>
    <div class="dialog-body">
      <div class="relation-heading">
        <span>${typeLabel} NODE</span>
        <strong>Wikipedia × Discogs × NTS style relation map</strong>
      </div>
      <p>${profile.description}</p>
      <section class="relation-panel">
        ${relationSection("Related Records", renderRelatedAlbums(profile.relatedAlbums))}
        ${relationSection("Artists", entityList("artist", profile.relatedArtists))}
        ${relationSection("Labels", entityList("label", profile.relatedLabels))}
        ${relationSection("Instruments", entityList("instrument", profile.relatedInstruments))}
        ${relationSection("Stories", entityList("story", profile.relatedStories))}
        ${relationSection("Regions", entityList("region", profile.relatedRegions))}
      </section>
    </div>
  `;
  showArchiveDialog();
}

function openJourney(index) {
  const journey = listeningJourneys[Number(index)];
  if (!journey) return;
  dialogContent.innerHTML = `
    <div class="dialog-hero relation-hero journey-hero">
      <h2>${journey.title}</h2>
    </div>
    <div class="dialog-body">
      <div class="relation-heading">
        <span>LISTENING JOURNEY</span>
        <strong>${journey.zh}</strong>
      </div>
      <p>${journey.note}</p>
      <ol class="journey-route-full">
        ${journey.route.map((step) => `<li>${entityButton("search", step, "entity-link")}</li>`).join("")}
      </ol>
    </div>
  `;
  showArchiveDialog();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderAlbums();
  });
});

albumGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-album-index]");
  if (button) openAlbum(button.dataset.albumIndex);
});

regionList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-region]");
  if (!button) return;
  openRegionProfile(button.dataset.region);
});

soundMap?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-region]");
  if (!button) return;
  openRegionProfile(button.dataset.region);
});

searchInput.addEventListener("input", renderAlbums);

resetFilters.addEventListener("click", () => {
  activeFilter = "all";
  searchInput.value = "";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderAlbums();
});

closeDialog.addEventListener("click", () => albumDialog.close());

document.addEventListener("click", (event) => {
  const entity = event.target.closest("[data-entity-type][data-entity-name]");
  if (entity) {
    event.preventDefault();
    event.stopPropagation();
    openEntity(entity.dataset.entityType, entity.dataset.entityName);
    return;
  }

  const albumButton = event.target.closest("[data-open-album]");
  if (albumButton) {
    event.preventDefault();
    event.stopPropagation();
    openAlbumByTitle(decodeURIComponent(albumButton.dataset.openAlbum));
    return;
  }

  const journeyButton = event.target.closest("[data-journey-index]");
  if (journeyButton) {
    event.preventDefault();
    event.stopPropagation();
    openJourney(journeyButton.dataset.journeyIndex);
    return;
  }

  const fieldNoteButton = event.target.closest("[data-field-note]");
  if (fieldNoteButton) {
    event.preventDefault();
    event.stopPropagation();
    openFieldNote(fieldNoteButton.dataset.fieldNote);
    return;
  }

  const weeklyButton = event.target.closest("[data-weekly-type][data-weekly-name]");
  if (weeklyButton) {
    event.preventDefault();
    event.stopPropagation();
    openEntity(weeklyButton.dataset.weeklyType, weeklyButton.dataset.weeklyName);
  }
});

sourceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sources = [
    {
      platform: document.querySelector("#sourcePlatform").value,
      url: document.querySelector("#sourceUrl").value,
      tags: document.querySelector("#sourceTags").value,
      createdAt: new Date().toLocaleDateString("zh-CN")
    },
    ...sources
  ];
  setStored("globalPulseSourcesV2", sources);
  sourceForm.reset();
  renderSources();
});

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  demos = [
    {
      artist: document.querySelector("#artistName").value,
      title: document.querySelector("#trackTitle").value,
      genre: document.querySelector("#demoGenre").value,
      region: document.querySelector("#demoRegion").value,
      link: document.querySelector("#demoLink").value,
      story: document.querySelector("#demoStory").value
    },
    ...demos
  ];
  setStored("globalPulseDemos", demos);
  demoForm.reset();
  renderDemos();
});

togglePast.addEventListener("click", () => {
  showFieldNotes = !showFieldNotes;
  togglePast.textContent = showFieldNotes ? "隐藏巡演线索" : "显示巡演线索";
  renderEvents();
});

pulseModesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  const mode = pulseModes.find((item) => item.id === button.dataset.mode);
  if (!mode) return;
  pulseModesGrid.querySelectorAll(".pulse-card").forEach((card) => card.classList.toggle("is-selected", card === button));
  activeFilter = mode.filter;
  searchInput.value = "";
  filterButtons.forEach((filterButton) => filterButton.classList.toggle("active", filterButton.dataset.filter === mode.filter));
  renderAlbums();
  buildAnalysis(mode.prompt);
  location.hash = "archive";
  showPage("archive");
});

aiSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  buildAnalysis(aiSearchInput.value);
});

runAnalysis.addEventListener("click", () => buildAnalysis(aiSearchInput.value || "适合今晚 DJ set 的全球电子音乐"));

analysisOutput.addEventListener("click", (event) => {
  const button = event.target.closest("[data-smart-open]");
  if (!button) return;
  const albumIndex = albums.findIndex((album) => album.title === button.dataset.smartOpen);
  if (albumIndex === -1) return;
  searchInput.value = "";
  activeFilter = "all";
  filterButtons.forEach((filterButton) => filterButton.classList.toggle("active", filterButton.dataset.filter === "all"));
  renderAlbums();
  showPage("archive");
  openAlbum(albumIndex);
});

function setupMotion() {
  const cursor = document.querySelector(".cursor-orb");
  const parallaxTarget = document.querySelector("[data-parallax]");
  const revealBlocks = document.querySelectorAll(".reveal-block");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  revealBlocks.forEach((block) => revealObserver.observe(block));

  if (cursor && window.matchMedia("(pointer: fine)").matches) {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    window.addEventListener("pointermove", (event) => {
      tx = event.clientX;
      ty = event.clientY;
      if (parallaxTarget) {
        const px = (event.clientX / window.innerWidth - 0.5) * 18;
        const py = (event.clientY / window.innerHeight - 0.5) * 18;
        parallaxTarget.style.setProperty("--mx", `${px}px`);
        parallaxTarget.style.setProperty("--my", `${py}px`);
      }
    });

    document.addEventListener("pointerover", (event) => {
      if (event.target.closest("a, button, input, select, textarea, .album-card, .resource-card")) {
        cursor.classList.add("is-active");
      }
    });

    document.addEventListener("pointerout", (event) => {
      if (event.target.closest("a, button, input, select, textarea, .album-card, .resource-card")) {
        cursor.classList.remove("is-active");
      }
    });

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();
  }
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

window.addEventListener("hashchange", () => showPage(location.hash.slice(1)));

renderPulseApp();
buildAnalysis();
renderFeaturedStories();
renderWeeklyDiscovery();
renderTodayJourney();
renderListeningJourneys();
renderInstrumentAtlas();
renderTimeline();
renderEssentialArtists();
renderLabelArchive();
renderResources();
renderExtendedResources();
renderFieldNotesArchive();
setupMotion();
renderRegions();
renderAlbums();
renderSources();
renderDemos();
renderEvents();
showPage(location.hash.slice(1) || "home");
showPage(location.hash.slice(1));
document.body.classList.add("is-ready");
