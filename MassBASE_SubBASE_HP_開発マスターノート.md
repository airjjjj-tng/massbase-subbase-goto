# MassBASE・SubBASE HP 開発・運用マスターノート

## 1. プロジェクト概要
* **サイト名:** MassBASE & SubBASE
* **URL:** https://base-goto.com/
* **目的:** 旧Wixサイトからの脱却、完全独自構成（HTML/CSS/JS）へのリプレイス、およびNetlifyとGitHubを用いた完全自動デプロイ（CI/CD）環境の構築。

## 2. デザイン・仕様
* **コンセプト:** インダストリアル、マスキュリン、無骨で力強いデザイン。
* **デザインルール:**
  * 角丸（border-radius）は一切使用しない（0px）。
  * ドロップシャドウなどの柔らかい装飾は廃止。
  * フォントは太字（bold/800/900など）を多用し、力強さを強調（Montserrat, Noto Sans JP）。
  * アクセントカラーにはダーク系・ハイコントラストを採用し、無骨さを演出。
* **フォーム仕様:**
  * Netlify Formsを利用（<form data-netlify="true">）。
  * 送信後は専用のサンクスページ（	hank-you.html）へ遷移。「3営業日以内にご連絡いたします」という丁寧な日本語メッセージを表示。

## 3. インフラ・技術スタック
* **ホスティング:** Netlify (Site ID: 44b14072-fd74-4133-bb6b-7abb8862bd1b / massbase-subbase-goto-228.netlify.app)
* **バージョン管理:** GitHub (irjjjj-tng/massbase-subbase-goto / ブランチ: main)
* **ドメイン管理:** Wix (DNS設定)
  * Aレコード (@): 75.2.60.5 (Netlify)
  * CNAMEレコード (www): massbase-subbase-goto-228.netlify.app
* **自動化 (CI/CD):** GitHubリポジトリ（main ブランチ）にファイルが追加・更新されると、Netlifyがそれを自動検知して本番サーバーへ即時デプロイする完全自動化システム。

## 4. SEO・アクセス解析
* **Google Analytics (GA4):** 測定ID G-VSZWEX00SH （トップページ、サンクスページ共に導入済み）
* **Google Search Console:** ドメインプロパティ（ase-goto.com）として登録完了。サイトマップ（sitemap.xml）送信済み。
* **実装済みのSEO対策:**
  * **OGPタグ:** SNSシェア時のカード表示対応。
  * **構造化データ (JSON-LD):** LocalBusiness（LodgingBusiness）として施設情報をマークアップし、AI検索やGoogleに最適化。
  * **カノニカルタグ:** 検索評価の分散を防ぐため https://base-goto.com/ を正規URLとして指定。
  * **Lazy Load:** ファーストビュー以外の画像に loading="lazy" を付与し、ページ読み込み速度を向上。

## 5. サイトの更新・保守手順（今後のワークフロー）
テキストの修正や画像の差し替えを行いたい場合は、以下の手順で作業します。

**【手順】**
1. ローカルフォルダ（G:\マイドライブ\■MassBASE・SubBASE\HP\20260915 独自サーバー）のファイルを編集する。
2. 編集が終わったら、以下のいずれかの方法でGitHubへアップロードする。
   * **方法A（ブラウザ）:** GitHubの massbase-subbase-goto リポジトリ画面を開き、編集したファイルをドラッグ＆ドロップで上書き保存する。
   * **方法B（AIに任せる）:** Antigravity（AIエージェント）に「変更したファイルをGitHubにPushして」と指示する。（※既にPCに GitHub CLI (gh) がインストール・認証済みのため、AIが完全自動でPush可能です）。
3. GitHubへのアップロード完了後、数秒〜数十秒でNetlifyが自動で本番サイト（base-goto.com）を更新します。FTPソフト等の手動アップロードは不要です。

## 6. AIエージェント（Antigravity）用 特記事項
* 本環境には GitHub CLI (gh) がインストールされ、irjjjj-tng アカウントで認証済みです。
* gh auth setup-git が完了しているため、今後のGitHub関連の操作（Commit, Push, Pull等）はパスワード入力を求められることなく実行可能です。
* **行動原則:** サイト改修時は必ずこのマスターノートとデザインルールを参照し、既存の無骨なトーン＆マナーを崩さないように実装してください。

---
*最終更新日: 2026/09/15*
