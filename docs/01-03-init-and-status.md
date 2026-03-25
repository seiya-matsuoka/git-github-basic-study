# 01-03 `git init` と `git status`

## 1. この項目で学ぶこと

この項目では、学習用ディレクトリを Git リポジトリとして初期化し、`git status` で現在の状態を読む基本を学ぶ。

この項目で押さえることは次のとおり。

- `git init` の意味
- `.git` ディレクトリとは何か
- `git status` の見方
- untracked file の意味

---

## 2. 事前に理解しておきたいこと

`git init` は、今いるディレクトリを Git 管理の対象として使い始めるためのコマンドである。  
`git init` を実行しただけでは commit はまだ存在しない。

また、今後 Git 学習で困ったときは、まず `git status` を見る習慣をつける。  
`status` は「今 Git がどう見えているか」を確認する基本コマンドである。

---

## 3. 主要コマンド

```bash
git init
git status
```

### コマンドの役割

- `git init`  
  現在のディレクトリを Git リポジトリとして初期化する

- `git status`  
  現在の状態を確認する

---

## 4. 演習で使用するファイル / ディレクトリ

### docs

- `docs/01-01-git-github-overview.md`
- `docs/01-02-cli-setup-and-config.md`
- `docs/01-03-init-and-status.md`

### practice

- `practice/01-foundation/01-03-index.html`
- `practice/01-foundation/01-03-styles.css`
- `practice/01-foundation/01-03-app.js`

---

## 5. 手を動かす演習

### 演習 1: 現在地を確認する

リポジトリ直下にいることを確認する。

```bash
pwd
```

### 演習 2: Git リポジトリとして初期化する

```bash
git init
```

### 演習 3: `.git` ディレクトリを確認する

```bash
ls -a
```

`.git` が表示されれば、Git 管理が始まっている。

### 演習 4: 現在の状態を確認する

```bash
git status
```

この時点では、docs 配下や practice 配下のファイルが `untracked files` として表示されるはずである。

### 演習 5: `git status` の結果を読む

次の点を確認する。

- まだ commit は存在しない
- add していないため、作成済みファイルは untracked である
- Git は docs と practice のファイルを認識している

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- `git init` は Git 管理の開始である
- `.git` ディレクトリが作られる
- `git status` は現在の状態確認に使う
- untracked は「まだ Git が追跡していないファイル」である
- まだ add / commit をしていないので、履歴は作られていない

---

## 7. 観察ポイント

### `git init` 直後

Git 管理は始まるが、まだ変更履歴はない。

### `.git` ディレクトリ

Git の管理情報が入るディレクトリであり、通常は直接触らない。

### `git status`

今後の学習では、迷ったらまず `git status` を見る。

### untracked files

ファイルは存在するが、まだ Git に追跡対象として登録されていない状態である。

---

## 8. よくあるミス・混乱ポイント

### `git init` したら commit もできた気になる

`git init` は開始だけであり、履歴はまだない。

### `.git` を自分で編集しようとする

通常は触らない。
Git が内部で管理する領域である。

### `git status` を見ずに進める

今後はまず `git status` を確認する癖をつける。

---

## 9. まとめ

この項目では、学習用ディレクトリを Git リポジトリとして初期化し、`git status` で現在の状態を読む基本を確認した。  
この時点では、まだ untracked file があるだけで、add も commit もしていない。

---

## 10. 次の項目とのつながり

次の `01-04 git add と git commit` では、今回 untracked として確認したファイルを実際にステージし、コミットして履歴を作る。
