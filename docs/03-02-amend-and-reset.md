# 03-02 `commit --amend` と `reset`

## 1. この項目で学ぶこと

この項目では、直前コミットを修正する `commit --amend` と、履歴の位置を戻す `git reset` を学ぶ。

この項目で押さえることは次のとおり。

- `commit --amend`
- コミットの修正
- `git reset`
- soft / mixed / hard の違い

---

## 2. 事前に理解しておきたいこと

`commit --amend` も `reset` も、ローカル履歴を書き換える操作である。  
そのため今回は、安全のため専用ブランチ `sandbox/reset-demo` で行う。

`git reset` は、同じ「戻す」でも戻し方が違う。

- `--soft`  
  commit だけ戻し、変更は staged に残す

- `--mixed`  
  commit と staged を戻し、変更は working tree に残す

- `--hard`  
  commit と staged と working tree を戻す

---

## 3. 主要コマンド

```bash
git switch -c sandbox/reset-demo
git commit --amend -m "message"
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
git status
git log --oneline --graph --decorate --all
git diff
git diff --staged
```

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/03-02-amend-and-reset.md`
- `practice/03-undo-recovery/03-02-amend-note.md`
- `practice/03-undo-recovery/03-02-reset-demo.txt`

---

## 5. 手を動かす演習

### 演習 1: sandbox ブランチを作る

- `main` から `sandbox/reset-demo` を作る
- このブランチで以降の reset 系演習を行う

### 演習 2: amend を試す

- 2 つのファイルを更新する
- 1 つだけ add して仮の commit を作る
- 残りを add して `commit --amend` で直前コミットを修正する

### 演習 3: soft reset を試す

- 1 コミット作る
- `git reset --soft HEAD~1`
- 変更が staged に残ることを確認する

### 演習 4: mixed reset を試す

- 1 コミット作る
- `git reset --mixed HEAD~1`
- 変更が working tree に残ることを確認する

### 演習 5: hard reset を試す

- 1 コミット作る
- `git reset --hard HEAD~1`
- 変更も commit も消えることを確認する

---

## 6. 実行後に確認すること

- `commit --amend` は直前コミットを修正する
- `reset --soft` は staged に残る
- `reset --mixed` は working tree に残る
- `reset --hard` は working tree まで戻る
- `status` と `log` を見れば、どこまで戻ったか分かる

---

## 7. 観察ポイント

- amend 後は直前コミットの内容とメッセージが置き換わる
- soft reset 後は `Changes to be committed` になる
- mixed reset 後は `Changes not staged for commit` になる
- hard reset 後は clean になる

---

## 8. よくあるミス

- `reset --hard` を気軽に使う
- soft / mixed / hard の違いを見ない
- amend を push 後コミットにも同じ感覚で使おうとする

---

## 9. まとめ

この項目では、直前コミットの修正と、履歴の戻し方の違いを確認した。  
大事なのは、commit を戻したいのか、staged も戻したいのか、working tree まで戻したいのかを区別すること。

---

## 10. 次の項目とのつながり

次の `03-03 revert と reflog` では、履歴を残して打ち消す方法と、参照移動の履歴を使った復旧を学ぶ。
