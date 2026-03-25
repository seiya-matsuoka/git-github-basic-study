# 01-05 `git log` と `git diff`

## 1. この項目で学ぶこと

この項目では、commit 履歴を確認する `git log` と、変更差分を確認する `git diff` を学ぶ。

この項目で押さえることは次のとおり。

- 履歴を見る意味
- `git log`
- `--oneline`
- `--graph`
- `--decorate`
- `--all`
- `git diff`
- add 前後の diff の違い

---

## 2. 事前に理解しておきたいこと

`git log` は「何が履歴として残っているか」を確認するコマンドである。  
`git diff` は「今ある変更がどのような差分なのか」を確認するコマンドである。

今後の Git 学習では、次の流れが重要になる。

- 作業前後で `git status`
- 変更内容は `git diff`
- 履歴は `git log`

---

## 3. 主要コマンド

```bash
git log
git log --oneline
git log --oneline --graph --decorate --all
git diff
git diff --staged
git status
```

### コマンドの役割

- `git log`  
  履歴を詳細に見る

- `git log --oneline`  
  履歴を短く見る

- `git log --oneline --graph --decorate --all`  
  ブランチや位置情報も含めて見やすく表示する

- `git diff`  
  add 前の変更差分を見る

- `git diff --staged`  
  add 後、commit 前の差分を見る

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/01-05-log-and-diff.md`
- `practice/01-foundation/01-03-index.html`
- `practice/01-foundation/01-03-styles.css`
- `practice/01-foundation/01-03-app.js`
- `practice/01-foundation/01-05-config.json`

---

## 5. 手を動かす演習

### 演習 1: 既存ファイルを再度編集する

`01-03-index.html`、`01-03-styles.css`、`01-03-app.js` を更新し、`01-05-config.json` を新規作成する。

### 演習 2: add 前の差分を見る

```bash
git status
git diff
```

### 演習 3: 一部だけ add して状態を比較する

```bash
git add practice/01-foundation/01-03-index.html
git add practice/01-foundation/01-05-config.json
git status
git diff
git diff --staged
```

### 演習 4: 残りの変更を add する

```bash
git add practice/01-foundation/01-03-styles.css
git add practice/01-foundation/01-03-app.js
git add docs/01-05-log-and-diff.md
git status
git diff --staged
```

### 演習 5: 2回目のコミットを作る

```bash
git commit -m "feat: update practice files for diff and log exercises"
```

### 演習 6: 履歴を見る

```bash
git log
git log --oneline
git log --oneline --graph --decorate --all
```

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- `git diff` は add 前の差分確認に使える
- `git diff --staged` は add 後の差分確認に使える
- `git log --oneline` は履歴を短く把握しやすい

---

## 7. 観察ポイント

- add 前は `git diff` に差分が出る
- add 後は `git diff --staged` に差分が出る
- commit 後はその差分が履歴になる
- `git log --oneline` でコミットが増えている

---

## 8. よくあるミス

- `git diff` と `git diff --staged` の違いが曖昧
- 変更を見ないまま add / commit する

---

## 9. まとめ

この項目では、履歴確認の `git log` と差分確認の `git diff` を使った。  
今後は「変更を見る」「履歴を見る」を分けて考える。

---

## 10. 次の項目とのつながり

次の `01-06 .gitignore と tracked / untracked` では、Git が追跡するファイルと無視するファイルの考え方を整理する。
