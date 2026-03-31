# 02-04 コンフリクト解消

## 1. この項目で学ぶこと

この項目では、コンフリクトが起こる理由と、手動で解消する基本手順を学ぶ。

この項目で押さえることは次のとおり。

- conflict が起こる理由
- conflict marker の読み方
- 手動解消の流れ
- 解消後の add / commit

---

## 2. 事前に理解しておきたいこと

コンフリクトは、同じファイルの同じ箇所を別ブランチで別々に変更したときに起こりやすい。  
Git が自動でどちらを採用すべきか判断できないため、作業者が内容を決めて解消する必要がある。

今回は、意図的に同じ行を `main` と `feature/conflict-demo` の両方で変更し、コンフリクトを発生させる。

---

## 3. 主要コマンド

```bash
git switch <branch-name>
git merge <branch-name>
git status
git add <file>
git commit -m "message"
git log --oneline --graph --decorate --all
```

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/02-04-conflict-resolution.md`
- `practice/01-foundation/01-03-index.html`
- `practice/02-branch-merge/02-04-conflict-note.md`

---

## 5. 手を動かす演習

### 演習 1: コンフリクト用ブランチを作る

- `main` から `feature/conflict-demo` を作る
- `feature/conflict-demo` に切り替える

### 演習 2: feature 側で同じ行を変更する

- `practice/01-foundation/01-03-index.html` の同じ 1 行を変更する
- メモファイルも追加してコミットする

### 演習 3: main 側でも同じ行を別内容に変更する

- `main` に戻る
- 同じファイルの同じ行を、別の内容に変更する
- コミットする

### 演習 4: merge してコンフリクトを発生させる

- `main` に `feature/conflict-demo` を merge する
- conflict 状態を確認する
- conflict marker を確認する

### 演習 5: 手動で解消する

- ファイルを開き、最終的に残したい内容に修正する
- conflict marker を消す
- `git add` する
- `git commit` する

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- conflict は同じ箇所を別々に変更したときに起こる
- conflict marker の意味が分かる
- 解消後は `git add` が必要
- 解消後に commit してマージを完了させる

---

## 7. 観察ポイント

- merge 直後は conflict 状態になる
- `git status` に unmerged paths が出る
- ファイルに conflict marker が入る
- 解消後に add するとマージ完了へ進める

---

## 8. よくあるミス

- conflict marker を残したまま add / commit する
- どちらの変更を残すか考えずに消してしまう
- 解消後に `git add` を忘れる

---

## 9. まとめ

この項目では、コンフリクトを意図的に発生させ、手動で解消する基本を確認した。  
コンフリクトが起きても、状態を読み、内容を決めて、add / commit すれば解消できる。

---

## 10. 次の項目とのつながり

次の大項目では、変更の取り消し・修正・復旧に進む。  
今回の conflict 解消経験は、状態を落ち着いて読む練習としても重要である。
