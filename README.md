# Yummy Foods Project

コーディング練習のためのサンプルプロジェクトです。

## 概要

架空のサイト Yummy Foods をみんなで作成します。

psd/ にカンプが入っています。
これを、Blockに分解し、各担当で実装します。

ベースのhtmlは index.html にあります。
sass ファイルは scss/main.scss で、各ファイルをインポートします。
sassのコンパイルは以下のように。

```
$ sass -w scss/main.scss:css/main.css
```

## すすめかた

### レギュレーション
- タグはHTML5でなるべくセマンティックに。
- CSSはBEMで
- githubを活用

### githubの運用

各自、ブランチを作成し、最初にプルリクしてください。
コミットはなるべく小さい単位で（スタイル1つ更新したら、など）
適宜pushしてください。

週次のオフラインMTGでレビューしましょう。
事前に見て、できればコメントいれていきます。

[プルリクの作り方](https://github.com/ediplex/yummy-foods/wiki/%E3%83%97%E3%83%AB%E3%83%AA%E3%82%AF%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9)

## 担当

- 川村
  - 全体スタイル
  - サポート
- 田村
  - 1. head
    - metaタグとか
  - 2. header
    - ロゴとか
  - 3. hero
    - スライド
- 高橋
  - 5. event
    - タブ
  - 6. ranking
    - リスト
- 小幡
  - 4. news
    - サムネリスト
  - 7. feature
    - カードっぽいやつ
  - 8. blog
    - 2段リスト
  - 9. footer


## compass でのコンパイル

ターミナルを立ち上げて入力してください。


- RubyGemsをアップデート
```
sudo gem update --system
```

- Sassをインストール
```
sudo gem install sass
```

- Sassのバージョンをチェック
バージョンが表示されたらインストールOKです
```
sass -v
```

- Compassをインストール＆バージョンチェック
```
sudo gem install compass
```
↓
```
compass -v
```

- プロジェクトのルードディレクトリへ移動
cdコマンドか、Finderで開いているYammy-foodsファイルをまるごとターミナルへ持ってくるかで開きます。
移動したら、

- <b>Compassで監視（コンパイル）</b>
```
compass w
```
もしくは
```
compass watch
```

監視を終了するときは、`control + c`

Macが El Capitanの場合はこちらを参照
http://qiita.com/matsuipome/items/c7dbe1d2df271c7db0ba

