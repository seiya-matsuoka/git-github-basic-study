# 04-01 `stash`

## 1. この項目で学ぶこと

この項目では、`stash` を使って作業途中の変更を一時退避し、あとから復元する流れを学ぶ。

この項目で押さえることは次のとおり。

- stash とは何か
- どんな時に使うか
- `stash list`
- `stash apply`
- `stash pop`

---

## 2. 事前に理解しておきたいこと

`stash` は、今の変更をまだ commit したくないが、いったん別作業へ移りたいときに便利である。

今回確認するのは次の違い。

- `git stash apply`  
  stash の内容を復元するが、stash 自体は残る

- `git stash pop`  
  stash の内容を復元し、stash 自体を取り除く

---

## 3. 主要コマンド

```bash
git stash push -m "message"
git stash list
git stash apply stash@{0}
git stash pop stash@{0}
git status
git diff
```

### コマンドの役割

- `git stash push -m "message"`  
  現在の変更を stash に退避する

- `git stash list`  
  stash の一覧を見る

- `git stash apply stash@{0}`  
  指定した stash を復元する

- `git stash pop stash@{0}`  
  指定した stash を復元し、一覧から消す

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/04-01-stash.md`
- `practice/04-supporting-ops/04-01-stash-demo.js`

---

## 5. 手を動かす演習

### 演習 1: 作業途中の変更を作る

- JS ファイルを編集する
- まだ commit はしない

### 演習 2: stash する

- `git stash push -m "..."` を実行する
- `git stash list` を確認する

### 演習 3: 別ブランチへ移動する

- `main` に切り替える
- clean になっていることを確認する

### 演習 4: 元のブランチへ戻って apply を試す

- stash の内容を復元する
- stash が残っていることを確認する

### 演習 5: いったん戻して pop を試す

- restore で作業ツリーを戻す
- `git stash pop` で再度復元する
- stash 一覧から消えることを確認する

---

## 6. 実行後に確認すること

- stash は作業途中の変更を一時退避する
- apply は stash を残す
- pop は stash を消す
- ブランチを切り替える前に一時退避できる

---

## 7. 観察ポイント

- stash 直後は working tree が clean になる
- apply 後は変更が戻るが、stash list に残る
- pop 後は変更が戻り、stash list から消える

---

## 8. よくあるミス

- apply と pop の違いを見ない
- stash したあと list を確認しない
- 復元後の状態を status / diff で確認しない

---

## 9. まとめ

この項目では、作業途中の変更を stash し、あとから apply / pop で復元する流れを確認した。  
stash は「今は commit したくないが、いったん退避したい」ときに役立つ。

---

## 10. 次の項目とのつながり

次の `04-02 tag` では、履歴上の特定コミットへ目印を付ける方法を学ぶ。
