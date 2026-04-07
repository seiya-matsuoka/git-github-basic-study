# 03-01 `git restore` と unstage

## 1. この項目で学ぶこと

この項目では、`git restore` を使って作業ツリーの変更を戻す方法と、staging area に載せた変更を外す考え方を学ぶ。

この項目で押さえることは次のとおり。

- `git restore`
- 作業ツリーの変更を戻す
- ステージを外す考え方
- working tree と staging area の差

---

## 2. 事前に理解しておきたいこと

変更は大きく次の 2 箇所で見る。

- working tree  
  まだ add していない、編集中の状態

- staging area  
  `git add` で commit 候補として載せた状態

今回は、同じファイルを使って次の 2 つを区別して確認する。

- working tree の変更を戻す
- staged の変更を外す

---

## 3. 主要コマンド

```bash
git status
git diff
git diff --staged
git restore <file>
git restore --staged <file>
```

### コマンドの役割

- `git restore <file>`  
  working tree の変更を戻す

- `git restore --staged <file>`  
  staged の変更を外す

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/03-01-restore-and-unstage.md`
- `practice/03-undo-recovery/03-01-restore-demo.html`
- `practice/03-undo-recovery/03-01-restore-demo.js`

---

## 5. 手を動かす演習

### 演習 1: 編集した状態を作る

- HTML と JS を編集する
- まだ add はしない

### 演習 2: working tree の変更を戻す

- `git status`
- `git diff`
- `git restore <file>`

で、HTML の変更だけを戻す

### 演習 3: staged を外す

- JS を add する
- `git diff --staged` を確認する
- `git restore --staged <file>` で staged を外す

### 演習 4: 最後に working tree も戻す

- `git restore <file>` を使って JS の変更も戻す
- `git status` が clean に戻ることを確認する

---

## 6. 実行後に確認すること

- `git restore <file>` は working tree を戻す
- `git restore --staged <file>` は staged を外す
- staged を外しても working tree の変更は残る
- `status` と `diff` を見れば今どこまで戻ったか分かる

---

## 7. 観察ポイント

- HTML だけ restore すると JS の変更は残る
- staged を外した直後、変更は working tree 側に残る
- 最後に restore すれば clean に戻る

---

## 8. よくあるミス

- `restore` と `restore --staged` の違いを混同する
- staged を外しただけで変更自体も消えたと思う

---

## 9. まとめ

この項目では、working tree の変更を戻す操作と、staged を外す操作を分けて確認した。  
今後は、変更を「どこから戻したいのか」を意識してコマンドを使い分ける。

---

## 10. 次の項目とのつながり

次の `03-02 commit --amend と reset` では、commit 後の修正や、履歴の位置を戻す操作を学ぶ。
