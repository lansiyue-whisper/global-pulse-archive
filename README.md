# Global Pulse Archive

一个关于世界音乐、民族音乐与全球电子音乐的资料库网站首版。

## 当前包含

- 音乐库搜索与风格筛选：downtempo、psychill、psybient、afro house、afro techno、singeli、gqom、global bass、organic downtempo、folktronica、reissue、民族音乐。
- App 化界面：新增 Pulse 首页、移动端底部导航、PWA manifest、App 图标和离线缓存脚本。
- AI 工具模块：智能搜歌、AI Mix Brief、场景化排歌、曲库推荐和 24h DJ 助手概念入口。
- Pulse 场景卡片：Run、Drive、Grow、Keep、Rinse、Drift 六种模式，可联动筛选档案库。
- 专辑/厂牌/场景档案：记录音乐人、地区、年份、来源线索、文化背景和外部来源链接。
- 档案内试听区：每个档案弹窗都有 LISTEN 区块，先连接可播放来源；拿到 Bandcamp/SoundCloud 的精确 embed 信息后可直接替换成内嵌播放器。
- 外部来源采集：保存 Bandcamp、SoundCloud、厂牌官网、活动官网或自定义链接，先进入待整理队列。
- 音乐人 Demo 提交：本地保存音乐人、作品、地区、试听链接和背景说明。
- 活动信息：整理全球音乐活动、线上电台、本地试听会和行业会议线索。

## 本轮资料来源

- Nyege Nyege Festival: https://festival.nyegenyege.com/
- Nyege Nyege Tapes: https://nyegenyegetapes.bandcamp.com/
- Shika Shika: https://shikashika.org/aboutus/
- Glitterbeat: https://glitterbeat.com/artists/
- Habibi Funk: https://habibifunkrecords.bandcamp.com/
- Awesome Tapes From Africa: https://awesometapes.com/about/
- Sahel Sounds: https://sahelsounds.com/about/

## 数据建议

Bandcamp、SoundCloud 等平台内容建议以“链接采集 + 人工审核 + 授权记录”的方式接入。不要直接复制音频、封面或长文本；应保存公开链接、标签、简短摘要、来源页面和许可状态。后续可以增加后台、账号系统、审核流程、活动抓取 API、地图和多语言档案。

## 内容增长建议

- 每周新增 10 个资源链接：按 SoundCloud、Bandcamp、厂牌官网、开放授权库分组。
- 每个地区至少建立 3 个入口：一个厂牌、一个艺人/专辑、一个活动或电台节目。
- 为每个风格写 1 张“听感卡”：BPM、鼓组特征、地域语境、代表厂牌、适合场景。
- Demo 上传区后续加审核状态：待听、可发布、需授权、拒绝。
- 活动区后续按城市和月份做筛选：Shanghai、Kampala、Durban、London、Berlin、Online。

## 播放器建议

当前版本已经预留档案内播放器组件。Bandcamp 需要每张专辑的 `album ID` 才能生成稳定 iframe；SoundCloud 需要具体 track、playlist 或 artist URL。普通官网或厂牌首页不一定允许被嵌入，因此先作为可播放来源按钮处理。

## App 化说明

`manifest.json`、`app-icon.svg` 和 `sw.js` 已经加入。直接用 `file://` 打开时可以浏览页面，但不能安装为 PWA；需要通过本地服务器或正式域名访问，浏览器才会启用 Service Worker 和“添加到主屏幕”。
