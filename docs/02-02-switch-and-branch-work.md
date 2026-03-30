# 02-02 `git switch` とブランチ作業

## 1. この項目で学ぶこと

この項目では、`git switch` を使ってブランチを切り替えながら作業し、main で直接作業しない基本的な考え方を学ぶ。

この項目で押さえることは次のとおり。

- `git switch`
- ブランチを切って作業する意味
- main で直接作業しない考え方
- feature branch の基本

---

## 2. 事前に理解しておきたいこと

ブランチを切る目的は、作業を安全に分けることにある。  
main は基準の流れとして保ち、変更は feature branch で進めると整理しやすい。

今回は、main と feature branch で別々の変更を加え、切り替えたときに見える内容が変わることを確認する。

---

## 3. 主要コマンド

```bash
git switch <branch-name>
git switch -c <branch-name>
git status
git add <file>
git commit -m "message"
git log --oneline --graph --decorate --all
```

### コマンドの役割

- `git switch <branch-name>`  
  既存ブランチへ切り替える

- `git switch -c <branch-name>`  
  新しいブランチを作成して、そのまま切り替える

- `git status`  
  現在のブランチを確認する

- `git add` / `git commit`  
  ブランチごとに変更を履歴へ残す

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/02-02-switch-and-branch-work.md`
- `practice/01-foundation/01-03-index.html`
- `practice/01-foundation/01-03-styles.css`
- `practice/01-foundation/01-03-app.js`
- `practice/02-branch-merge/02-02-feature-note.md`

---

## 5. 手を動かす演習

### 演習 1: feature branch に切り替える

```bash
git switch feature/branch-basics
git status
git branch
```

### 演習 2: feature branch 側の変更を作る

- `01-03-index.html`
- `01-03-app.js`
- `02-02-feature-note.md`

を更新する。

### 演習 3: 変更をコミットする

```bash
git add practice/01-foundation/01-03-index.html
git add practice/01-foundation/01-03-app.js
git add practice/02-branch-merge/02-02-feature-note.md
git add docs/02-02-switch-and-branch-work.md
git commit -m "feat: add feature branch practice changes"
```

### 演習 4: main に戻る

```bash
git switch main
git status
```

### 演習 5: main 側では feature の変更が見えないことを確認する

- `01-03-index.html`
- `01-03-app.js`
- `02-02-feature-note.md`

の内容や存在を確認する。

### 演習 6: main 側で別の変更を作る

- `01-03-styles.css` を更新する

### 演習 7: main 側の変更をコミットする

```bash
git add practice/01-foundation/01-03-styles.css
git commit -m "style: update main branch styles for branch practice"
```

### 演習 8: ブランチの分岐を確認する

```bash
git log --oneline --graph --decorate --all
```

### 演習 9: feature branch に戻って内容を確認する

```bash
git switch feature/branch-basics
git status
git log --oneline --graph --decorate --all
```

main 側で行った CSS の変更が、feature branch ではまだ反映されていないことを確認する。

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- `git switch` で branch を切り替えられる
- branch ごとに別々の履歴を持てる
- main と feature branch では見えるファイル内容が変わることがある
- main で直接作業しない理由が分かる
- `git log --oneline --graph --decorate --all` で分岐が確認できる

---

## 7. 観察ポイント

- branch を切り替えると working tree の内容が変わる
- feature branch で作った commit は main に戻ると見えなくなる
- main で作った commit は feature branch に戻るとまだ入っていない
- `log --graph` で分岐が見える

---

## 8. よくあるミス

- どの branch にいるか確認せず編集を始める
- 切り替え前に `git status` を見ない
- branch ごとのファイル状態の違いを見ないまま進める

---

## 9. まとめ

この項目では、`git switch` を使って branch を切り替えながら作業し、branch ごとに変更が分かれることを確認した。  
main は基準、feature branch は作業用という基本感覚をここで押さえる。

---

## 10. 次の項目とのつながり

次の `02-03 git merge の基本` では、今回 main と feature branch に分かれた履歴を統合する流れを学ぶ。
