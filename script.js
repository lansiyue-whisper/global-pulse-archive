const albums = [
  {
    title: "Nyege Nyege / Hakuna Kulala Scene Dossier",
    artist: "Nyege Nyege Tapes + Hakuna Kulala",
    region: "Kampala / Jinja, Uganda",
    year: "2015-now",
    genres: ["afro techno", "singeli", "gqom", "experimental club"],
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1508973379184-7517410fb0bc?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
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
    cover: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
    summary: "Psytrance 周边的慢速、空间化电子路线，常与自然录音、民族乐器纹理和冥想式编曲相连。",
    culture:
      "网站可把 psychill 与 psybient 分开：前者更接近 chillout 舞台和旅行文化，后者偏环境、科幻和深听。两者都需要避免把文化声音变成无出处采样。",
    source: "label / festival research leads",
    sourceUrl: "https://ultimae.bandcamp.com/"
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
  }
];

let activeFilter = "all";
let showFieldNotes = true;

const albumGrid = document.querySelector("#albumGrid");
const regionList = document.querySelector("#regionList");
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

const getStored = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

const setStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));

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

function renderAlbums() {
  const visibleAlbums = albums.filter(albumMatches);

  albumGrid.innerHTML = visibleAlbums.length
    ? visibleAlbums
        .map(
          (album, index) => `
            <article class="album-card">
              <div class="album-cover" style="background-image: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.32)), url('${album.cover}')"></div>
              <div class="album-body">
                <div class="tag-row">
                  ${album.genres.map((genre) => `<span class="tag ${genre.includes("afro") ? "coral" : "teal"}">${genre}</span>`).join("")}
                </div>
                <h3>${album.title}</h3>
                <p>${album.artist} · ${album.region}</p>
                <div class="album-meta">
                  <span>${album.year}</span>
                  <span>${album.source}</span>
                </div>
              </div>
              <button type="button" data-album-index="${index}">打开档案</button>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">没有匹配结果，可以换一个地区、风格或音乐人关键词。</div>`;
}

function renderRegions() {
  const grouped = albums.reduce((acc, album) => {
    acc[album.region] ||= new Set();
    album.genres.forEach((genre) => acc[album.region].add(genre));
    return acc;
  }, {});

  regionList.innerHTML = Object.entries(grouped)
    .map(
      ([region, genres]) => `
        <button class="region-card" type="button" data-region="${region}">
          <strong>${region}</strong>
          <span>${Array.from(genres).join(" · ")}</span>
        </button>
      `
    )
    .join("");

  statAlbums.textContent = albums.length;
  statRegions.textContent = Object.keys(grouped).length;
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
        <a class="resource-card" href="${resource.url}" target="_blank" rel="noreferrer">
          <span>${resource.platform}</span>
          <strong>${resource.title}</strong>
          <em>${resource.category}</em>
          <p>${resource.note}</p>
        </a>
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

function openAlbum(indexFromVisible) {
  const album = albums.filter(albumMatches)[Number(indexFromVisible)];
  if (!album) return;

  dialogContent.innerHTML = `
    <div class="dialog-hero" style="background-image: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.64)), url('${album.cover}')">
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
      <p>来源线索：${album.source}</p>
      <p><a class="source-link" href="${album.sourceUrl}" target="_blank" rel="noreferrer">打开原始来源</a></p>
    </div>
  `;
  albumDialog.showModal();
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
  searchInput.value = button.dataset.region;
  renderAlbums();
  document.querySelector("#albums").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", renderAlbums);

resetFilters.addEventListener("click", () => {
  activeFilter = "all";
  searchInput.value = "";
  filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  renderAlbums();
});

closeDialog.addEventListener("click", () => albumDialog.close());

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
  activeFilter = mode.filter;
  searchInput.value = "";
  filterButtons.forEach((filterButton) => filterButton.classList.toggle("active", filterButton.dataset.filter === mode.filter));
  renderAlbums();
  buildAnalysis(mode.prompt);
  document.querySelector("#albums").scrollIntoView({ behavior: "smooth", block: "start" });
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
  openAlbum(albumIndex);
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

renderPulseApp();
buildAnalysis();
renderResources();
renderRegions();
renderAlbums();
renderSources();
renderDemos();
renderEvents();
