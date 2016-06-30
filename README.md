# 環境構築

1. gitもしくはgit用GUIツールを入れる
  - SourceTreeはいいぞ。
- 適当なディレクトリで
  ```sh
  $ git clone https://github.com/ztrehagem/sec-web.git
  ```

- Node.jsをインストール
  ```sh
  # macなら
  $ brew install npm
  # winならぐぐればわかるさ。
  ```

- gulpをインストール
  ```sh
  $ npm install -g gulp
  ```

- プロジェクトルート(sec-webディレクトリ)で
  ```sh
  $ npm install
  $ gulp
  ```


# ディレクトリ構造

- resources
  - assets
    - html
      - template - 再利用可能なパーツ
    - scss
    - js
- public - サーバー側のルート
  - \*.html - gulpが吐き出す
  - template - gulpが吐き出す
  - css - gulpが吐き出す
  - js - gulpが吐き出す
  - lib - ライブラリ
  - img - 画像をぶち込む(手動)
  - json - activityとmemberのjsonをぶち込む(手動)


# 開発時に使うコマンド

- `$ gulp`
  - html,scss,jsをコンパイル/minifyする
- `$ gulp watch` / `$ gulp w` (^C/Ctrl-Cで終了)
  - assetsファイルの変更(保存)を監視して自動的にコンパイル/minifyする
- `$ gulp --production` / `$ gulp -p`
  - このオプションを付けると、デバッグ用データを外してコンパイルする
- `$ gulp server` / `$ gulp s` (^C/Ctrl-Cで終了)
  - ローカルサーバー起動　動作確認など。


# コンテンツの更新

1. `$ gulp server`
- `http://localhost:3000/editor.html` を開く
- 適当に編集する
- DOWNLOADボタンで自動生成されるjsonファイルを普通にダウンロードする
- public/jsonフォルダに上書き
- 必要な画像ファイルも手動でpublic/imgフォルダにぶち込む
  - 適度に圧縮すること。
- `http://localhost:3000/` で動作確認
- 更新したjsonと画像を本番サーバーにアップロード
- gitにpush


# HTML,CSS,JSの変更

1. `$ gulp watch`
- 別窓で `$ gulp server`
- 変更が必要なファイルを書き換える。
- `http://localhost:3000/` でデザイン/動作の確認
- `$ gulp --production` で本番用コンパイル
- `public/editor.html` 以外を本番サーバーにアップロード
  - editor.htmlをアップロードしてしまっても何も支障はないけど。
- gitにpush
