# 03-03 `revert` と `reflog`

## 1. この項目で学ぶこと

この項目では、`git revert` による「履歴を残した取り消し」と、`git reflog` による「誤操作からの復旧」を学ぶ。

この項目で押さえることは次のとおり。

- `git revert`
- `git reflog`
- reset と revert の違い
- 履歴を残す取り消し
- 誤操作からの復旧

---

## 2. 事前に理解しておきたいこと

`reset` と `revert` はどちらも「戻す」系の操作だが、意味が違う。

- `revert`  
  すでにあるコミットを打ち消す **新しいコミット** を作る  
  履歴は残る

- `reset`  
  ブランチの位置を戻す  
  履歴を書き換える方向の操作になる

今回はまず `revert` を試し、そのあと `reset --hard` で戻しすぎた状態をあえて作り、`reflog` で復旧する。

---

## 3. 主要コマンド

```bash
git revert HEAD --no-edit
git reflog
git reflog --oneline
git reset --hard HEAD~1
git reset --hard HEAD@{1}
git log --oneline --graph --decorate --all
git status
```

### コマンドの役割

- `git revert HEAD --no-edit`  
  直前コミットを打ち消す新しいコミットを作る

- `git reflog`  
  HEAD の移動履歴を確認する

- `git reset --hard HEAD~1`  
  1 つ前のコミットまで完全に戻す

- `git reset --hard HEAD@{1}`  
  直前の HEAD 位置へ戻す  
  今回の手順では、reflog からの復旧に使う

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/03-03-revert-and-reflog.md`
- `practice/03-undo-recovery/03-03-revert-reflog-demo.txt`

---

## 5. 手を動かす演習

### 演習 1: revert を試す

- 専用ブランチを作る
- 演習用ファイルを編集して 1 コミット作る
- `git revert HEAD --no-edit` を実行する
- 打ち消し用の新しいコミットができることを確認する

### 演習 2: reflog を確認する

- `git reflog --oneline` を確認する
- commit / switch / reset などの移動履歴が残ることを確認する

### 演習 3: 戻しすぎた状態から復旧する

- 演習用ファイルを再度編集して 1 コミット作る
- `git reset --hard HEAD~1` でコミットを消す
- `git reflog` で消える前の位置を確認する
- `git reset --hard HEAD@{1}` で戻す

---

## 6. 実行後に確認すること

- `revert` は履歴を残したまま取り消す
- `reset` は履歴の位置を戻す
- `reflog` は HEAD の移動履歴を見るために使える
- reset で戻しすぎても reflog から復旧できることがある

---

## 7. 観察ポイント

- revert 後は「打ち消し用の新しいコミット」が増える
- reset 後は log からコミットが消えたように見える
- reflog には reset 前の位置が残っている
- reflog を使えば、誤って戻した位置へ再び移動できる

---

## 8. よくあるミス

- revert と reset を同じものとして覚える
- reset 後に「コミットが完全に消えた」と思い込む
- reflog を見ずに諦める
- `reset --hard` を main で気軽に使う

---

## 9. まとめ

この項目では、履歴を残す取り消しの `revert` と、誤操作からの復旧に使える `reflog` を確認した。  
「履歴を残したいなら revert」「位置を戻したが復旧したいときは reflog」をまず押さえる。

---

## 10. 次の項目とのつながり

次の大項目では、stash / tag / cherry-pick など、補助的によく使う操作に進む。  
今回の `revert` / `reflog` は、Git の復旧系操作の基礎として重要である。
