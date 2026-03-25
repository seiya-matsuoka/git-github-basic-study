# 01-04 `git add` と `git commit`

## 1. この項目で学ぶこと

この項目では、working tree・staging area・commit の関係を押さえながら、`git add` と `git commit` を使って履歴を作る基本を学ぶ。

この項目で押さえることは次のとおり。

- working tree / staging area / commit の関係
- `git add`
- `git commit`
- コミットメッセージの基本
- `status` で状態を確認しながら進めること

---

## 2. 事前に理解しておきたいこと

Git では、ファイルを編集しただけでは commit にならない。  
大まかには次の流れで進む。

1. working tree でファイルを編集する
2. `git add` で staging area に載せる
3. `git commit` で履歴として記録する

今後は、変更したらすぐ commit するのではなく、まず `git status` で状態を見る習慣をつける。

---

## 3. 主要コマンド

```bash
git status
git add <file>
git add .
git commit -m "message"
```

### コマンドの役割

- `git status`  
  現在の状態を確認する

- `git add <file>`  
  指定したファイルだけをステージする

- `git add .`  
  現在のディレクトリ以下の変更をまとめてステージする

- `git commit -m "message"`  
  ステージ済みの変更を履歴として記録する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/00-01-learning-roadmap.md`
- `docs/00-02-glossary.md`
- `docs/01-01-git-github-overview.md`
- `docs/01-02-cli-setup-and-config.md`
- `docs/01-03-init-and-status.md`
- `docs/01-04-add-and-commit.md`
- `practice/01-foundation/01-03-index.html`
- `practice/01-foundation/01-03-styles.css`
- `practice/01-foundation/01-03-app.js`

---

## 5. 手を動かす演習

### 演習 1: practice ファイルを編集する

`01-03-index.html`、`01-03-styles.css`、`01-03-app.js` を更新する。  
この時点ではまだ add しない。

### 演習 2: 状態を確認する

```bash
git status
```

変更されたファイルや untracked file がどう見えるか確認する。

### 演習 3: 一部だけ add する

```bash
git add practice/01-foundation/01-03-index.html
git add practice/01-foundation/01-03-styles.css
git status
```

staged と unstaged の違いを確認する。

### 演習 4: 残りも add する

```bash
git add practice/01-foundation/01-03-app.js
git add docs/00-01-learning-roadmap.md docs/00-02-glossary.md
git add docs/01-01-git-github-overview.md docs/01-02-cli-setup-and-config.md docs/01-03-init-and-status.md
git add docs/01-04-add-and-commit.md
git status
```

### 演習 5: 初回コミットを作る

```bash
git commit -m "chore: add initial study files"
```

### 演習 6: コミット後の状態確認

```bash
git status
```

working tree がきれいになっていることを確認する。

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- 編集しただけでは commit にはならない
- `git add` は commit の前段階である
- `git commit` はステージ済みの変更を履歴に残す
- `git status` を見れば staged / unstaged の違いが分かる
- commit 後は working tree がきれいになる

---

## 7. 観察ポイント

- `git add` 前は変更が unstaged として見える
- `git add` 後は staged として見える
- `git commit` 後は `nothing to commit, working tree clean` になる

---

## 8. よくあるミス

- 編集しただけで commit されたと思う
- `git add .` で何を積んだか確認しない
- `git status` を見ずに進める
- コミットメッセージが曖昧すぎる

---

## 9. まとめ

この項目では、`git add` と `git commit` により変更を履歴として記録する流れを確認した。  
Git では、working tree → staging area → commit の流れで状態が進む。

---

## 10. 次の項目とのつながり

次の `01-05 git log と git diff` では、今回作った commit を履歴として確認し、変更差分の見方を学ぶ。
