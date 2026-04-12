# 06-01 `rebase` と squash の基礎

## 1. この項目で学ぶこと

この項目では、`merge` と `rebase` の違い、および squash の基本的な考え方を学ぶ。

この項目で押さえることは次のとおり。

- merge と rebase の違い
- rebase の基本イメージ
- squash の考え方
- どこまで理解すればよいか

## 2. 事前に理解しておきたいこと

まず次の理解でよい。

- `merge`  
  分岐した履歴を統合する

- `rebase`  
  自分のコミット列を、別の先端の上に積み直す

`rebase` を使うと、履歴が直線的に見えやすくなる。  
ただし、既存コミットを書き換えるため、共有済みの履歴に対しては慎重に使う。

また、squash は「複数コミットを 1 つにまとめる」考え方である。  
今回は結果を分かりやすく見るために、`git merge --squash` を使って体験する。

## 3. 主要コマンド

```bash
git switch -c <branch-name>
git rebase <base-branch>
git merge --squash <branch-name>
git log --oneline --graph --decorate --all
git status
```

### コマンドの役割

- `git rebase <base-branch>`  
  現在のブランチのコミットを、指定したブランチ先端の上へ積み直す

- `git merge --squash <branch-name>`  
  指定ブランチの変更を 1 つのコミットにまとめる形で取り込む準備をする

- `git log --oneline --graph --decorate --all`  
  履歴の形を確認する

## 4. 演習で使用するファイル / ディレクトリ

- `docs/06-01-rebase-and-squash.md`
- `practice/06-advanced/06-01-rebase-demo.md`
- `practice/06-advanced/06-01-squash-demo.md`

## 5. 手を動かす演習

### 演習 1: 小さいブランチで rebase する

- `sandbox/rebase-squash-demo` を土台にする
- `feature/rebase-demo` で 2 コミット作る
- 土台ブランチ側でも 1 コミット進める
- `feature/rebase-demo` で `git rebase sandbox/rebase-squash-demo` を実行する
- 履歴が直線化された形を確認する

### 演習 2: squash の結果を見る

- `feature/squash-demo` で 2 コミット作る
- 土台ブランチへ戻って `git merge --squash feature/squash-demo`
- 1 コミットとしてまとめて commit する
- 複数コミットが 1 つにまとまった結果を確認する

## 6. 実行後に確認すること

- rebase はコミットを別の先端の上へ積み直す
- rebase 後、履歴が直線的に見えやすくなる
- squash は複数コミットを 1 つにまとめる考え方である
- `merge --squash` では、まとめた結果を新しい 1 コミットにできる

## 7. 観察ポイント

- rebase 前は履歴が分岐して見える
- rebase 後は feature 側コミットが新しい位置へ並び直す
- squash 前は複数コミットある
- squash 後は取り込み側に 1 コミットとして現れる

## 8. よくあるミス

- merge と rebase を同じものとして覚える
- rebase 後にコミット ID が変わることを見ない
- squash を「ブランチを統合した」と誤解する
- 共有済み履歴へ rebase を気軽に使う

## 9. まとめ

この項目では、rebase による履歴の積み直しと、squash によるコミット集約の考え方を確認した。  
実務では「履歴をどう見せたいか」を意識して使い分ける。

## 10. 次の項目とのつながり

次の `06-02 detached HEAD とよくあるトラブル` では、実務で混乱しやすい状態と、そのときに見るべきコマンドを確認する。
