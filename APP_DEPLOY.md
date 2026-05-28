# Global Pulse 上 App 路线

## 现在已经完成

- PWA 配置：`manifest.json`
- App 图标：`app-icon.svg`、`icon-192.png`、`icon-512.png`
- 离线缓存：`sw.js`
- Vercel 部署配置：`vercel.json`
- Netlify / Cloudflare Pages 缓存头：`_headers`

## 最快上线方式：PWA

1. 把整个文件夹上传到 GitHub。
2. 进入 Vercel、Netlify 或 Cloudflare Pages，导入这个仓库。
3. 构建命令留空，发布目录填根目录：`.`。
4. 绑定域名。
5. 用 HTTPS 地址打开网站，手机浏览器选择“添加到主屏幕”。

## 本地预览

```bash
cd "/Users/siyuelan/Documents/世界音乐网站"
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000/
```

## 真正打包 iOS / Android

这一步需要安装 `npm`、Xcode / Android Studio，以及 Capacitor。当前电脑环境里有 Node，但没有 `npm`，所以现在不能直接生成原生工程。

安装好 npm 后，可以继续做：

```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init "Global Pulse" "com.globalpulse.app" --web-dir .
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios
```

正式上架前还需要：隐私政策、用户协议、版权/音乐来源说明、App Store 截图和开发者账号。
