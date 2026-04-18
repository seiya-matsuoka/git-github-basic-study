# Git / GitHub - Basic Study

<p>
  <img alt="Git" src="https://img.shields.io/badge/Git-Study-F05032?logo=git&logoColor=ffffff">
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-Study-181717?logo=github&logoColor=ffffff">
</p>

Git / GitHub を基礎から体系的に学習した記録と成果物をまとめたリポジトリ。  
CLI 中心で Git を操作し、`init` / `status` / `add` / `commit` の基本から、branch / merge / conflict / undo / remote / Pull Request / rebase までを一通り学習した。

このリポジトリは、以下の役割を兼ねている。

- Git / GitHub 学習の記録
- CLI 操作の練習履歴
- 各学習項目のドキュメント保存場所
- `practice/` を使った再現可能な演習置き場

> **学習用リポジトリ**として、基礎から順番に手を動かして学び、**「後から見返して流れを再現できること」** を重視している。

---

## 学習の目的

- Git の基本操作を CLI で扱えるようにする
- Git と GitHub の役割の違いを理解する
- branch / merge / conflict / undo / PR を説明できるようにする
- 実務でよく使う GitHub Flow の基本を体験する
- `status` / `log` / `reflog` を見ながら自力で状態を読めるようにする

---

## 学習範囲

このリポジトリでは、以下の内容を一通り学習対象として扱った。

| 項目  | 内容                                |
| ----- | ----------------------------------- |
| 00-01 | 学習ロードマップ                    |
| 00-02 | 用語集                              |
| 01-01 | Git と GitHub の全体像              |
| 01-02 | CLI 環境準備と初期設定              |
| 01-03 | `git init` と `git status`          |
| 01-04 | `git add` と `git commit`           |
| 01-05 | `git log` と `git diff`             |
| 01-06 | `.gitignore` と tracked / untracked |
| 02-01 | branch と HEAD の理解               |
| 02-02 | `git switch` とブランチ作業         |
| 02-03 | `git merge` の基本                  |
| 02-04 | コンフリクト解消                    |
| 03-01 | `git restore` と unstage            |
| 03-02 | `commit --amend` と `reset`         |
| 03-03 | `revert` と `reflog`                |
| 04-01 | `stash`                             |
| 04-02 | `tag`                               |
| 04-03 | `cherry-pick`                       |
| 05-01 | リモートリポジトリの基本            |
| 05-02 | `push` / `fetch` / `pull`           |
| 05-03 | tracking branch と同期の理解        |
| 05-04 | GitHub Flow と Pull Request         |
| 06-01 | `rebase` と squash の基礎           |
| 06-02 | detached HEAD とよくあるトラブル    |
| 06-03 | 総合演習シナリオ                    |

基礎から順に進めつつ、後半では GitHub を使ったリモート運用、PR フロー、履歴整理、トラブル対応までを扱っている。

---

## 使用環境・ツール

- Git
- GitHub
- Git Bash
- VS Code

---

## リポジトリ構成

主要な構成は以下の通り。

```text
.
├─ docs/
│  ├─ 00-01-learning-roadmap.md
│  ├─ 00-02-glossary.md
│  ├─ 01-01-git-github-overview.md
│  ├─ 01-02-cli-setup-and-config.md
│  ├─ 01-03-init-and-status.md
│  ├─ 01-04-add-and-commit.md
│  ├─ 01-05-log-and-diff.md
│  ├─ 01-06-gitignore-and-tracking.md
│  ├─ 02-01-branch-and-head.md
│  ├─ 02-02-switch-and-branch-work.md
│  ├─ 02-03-merge-basics.md
│  ├─ 02-04-conflict-resolution.md
│  ├─ 03-01-restore-and-unstage.md
│  ├─ 03-02-amend-and-reset.md
│  ├─ 03-03-revert-and-reflog.md
│  ├─ 04-01-stash.md
│  ├─ 04-02-tag.md
│  ├─ 04-03-cherry-pick.md
│  ├─ 05-01-remote-basics.md
│  ├─ 05-02-push-fetch-pull.md
│  ├─ 05-03-tracking-branches-and-sync.md
│  ├─ 05-04-github-flow-and-pull-request.md
│  ├─ 06-01-rebase-and-squash.md
│  ├─ 06-02-detached-head-and-troubleshooting.md
│  └─ 06-03-final-practice-scenario.md
│
├─ practice/
│  ├─ 01-foundation/
│  ├─ 02-branch-merge/
│  ├─ 03-undo-recovery/
│  ├─ 04-supporting-ops/
│  ├─ 05-remote-github/
│  └─ 06-advanced/
│
└─ README.md
```

### 各ディレクトリの役割

- `docs/`
  - 各学習項目ごとの Markdown ドキュメント
  - 概念説明、使用コマンド、演習手順、確認ポイントをまとめている
  - 番号順に読むことで、基礎から順に学習を追える構成

- `practice/`
  - 実際に編集、差分確認、branch 切り替え、merge、conflict、復旧などに使った演習用ファイル置き場
  - 大項目単位でディレクトリを分けている

---

## 学習の進め方・ファイルの見方

基本的には、`docs/` を番号順に読み、対応する `practice/` のファイルを操作しながら進める構成。

### 進め方

1. `docs/` の対象項目を読む
2. 記載されているコマンドを CLI で実行する
3. `practice/` の対象ファイルを編集する
4. `git status` / `git diff` / `git log` で状態を確認する
5. 必要に応じて GitHub 上でも push / PR / merge を試す

### 学習の考え方

- まずは **広く一通り触れる**
- そのうえで、branch / merge / conflict / undo / remote / PR を重点的に定着させる
- 困ったときは、まず次の順で状態を確認する

1. `git status`
2. `git branch`
3. `git log --oneline --graph --decorate --all`
4. 必要なら `git reflog`

---

## このリポジトリで特に重視したこと

- GUI ではなく **CLI 中心** で学ぶこと
- 単発のコマンド暗記ではなく、**状態を読めるようになること**
- docs と practice を対応させて、**後から再現できること**
- Git 単体の操作だけでなく、**GitHub を使った PR フローまで通すこと**
