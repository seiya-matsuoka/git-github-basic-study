# 02-03 `git merge` の基本

## 1. この項目で学ぶこと

この項目では、`git merge` の基本と、fast-forward merge と merge commit の違いを学ぶ。

この項目で押さえることは次のとおり。

- merge の意味
- fast-forward merge
- merge commit
- 統合時に見るべきこと

---

## 2. 事前に理解しておきたいこと

merge は、分かれた履歴を統合するための操作である。

今回は次の 2 パターンを体験する。

- fast-forward merge  
  対象ブランチ側だけが先に進んでいて、元のブランチがそのまま前進できる場合

- merge commit が作られる merge  
  両方のブランチでそれぞれ履歴が進んでおり、統合用の新しいコミットが必要な場合

---

## 3. 主要コマンド

```bash
git switch <branch-name>
git merge <branch-name>
git log --oneline --graph --decorate --all
```

### コマンドの役割

- `git switch <branch-name>`  
  マージ先のブランチへ移動する

- `git merge <branch-name>`  
  指定したブランチの変更を現在のブランチへ取り込む

- `git log --oneline --graph --decorate --all`  
  マージ前後の履歴の形を確認する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/02-03-merge-basics.md`
- `practice/02-branch-merge/02-03-ff-note.md`
- 既存の `main`
- 既存の `feature/branch-basics`

---

## 5. 手を動かす演習

### 演習 1: fast-forward merge を体験する

- `main` から新しく `feature/ff-demo` を作る
- `feature/ff-demo` 側だけで 1 コミット進める
- `main` に戻って `feature/ff-demo` を merge する
- fast-forward になることを確認する

### 演習 2: merge commit を体験する

- すでに分岐している `main` と `feature/branch-basics` を使う
- `main` に `feature/branch-basics` を merge する
- merge commit が作られることを確認する

### 演習 3: 履歴の形を確認する

- `git log --oneline --graph --decorate --all` を使う
- fast-forward のあとと、merge commit のあとで履歴の見え方を比較する

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- merge は履歴を統合する操作である
- fast-forward merge はブランチの先端が前に進むだけの形になる
- merge commit は統合用の新しいコミットが作られる
- `log --graph` で統合の形が確認できる

---

## 7. 観察ポイント

- fast-forward merge では新しい merge commit が作られない
- 分岐後の merge では merge commit が作られる
- `git log --oneline --graph --decorate --all` の見え方が変わる

---

## 8. よくあるミス

- どのブランチにいるか確認せず merge する
- fast-forward と merge commit の違いを見ない
- merge 後に履歴を確認しない

---

## 9. まとめ

この項目では、`git merge` の基本として fast-forward merge と merge commit の違いを確認した。  
今後は merge 後に必ず履歴の形を確認する。

---

## 10. 次の項目とのつながり

次の `02-04 コンフリクト解消` では、マージ時に自動統合できないケースを意図的に作り、手動で解消する。
