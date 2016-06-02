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


## 担当

### 川村
- 全体スタイル
- サポート

### 田村
1. head
  - metaタグとか
2. header
  - ロゴとか
3. hero
  - スライド

### 高橋
5. event
  - タブ
6. ranking
  - リスト

### 小幡
4. news
  - サムネリスト
7. feature
  - カードっぽいやつ
8. blog
  - 2段リスト
9. footer
