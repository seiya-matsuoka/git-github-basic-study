# 05-04 GitHub Flow と Pull Request

## 1. この項目で学ぶこと

この項目では、GitHub Flow の基本と、Pull Request を使った変更提案から merge 後の後片付けまでの流れを学ぶ。

この項目で押さえることは次のとおり。

- GitHub Flow の流れ
- feature branch 運用
- Pull Request の役割
- PR タイトルと説明文の考え方
- merge 後の片付け

---

## 2. 事前に理解しておきたいこと

GitHub Flow は、シンプルなブランチ運用の基本としてよく使われる。

基本の流れは次のとおり。

1. `main` から feature branch を切る
2. 作業する
3. push する
4. Pull Request を作る
5. 必要なら追加コミットする
6. merge する
7. ブランチを削除する

今回は、この流れを最小構成で一通り体験する。

---

## 3. 主要コマンド

```bash
git switch -c <feature-branch>
git push -u origin <feature-branch>
git status
git branch -vv
git pull origin main
git branch -d <feature-branch>
git fetch --prune origin
```

### コマンドの役割

- `git switch -c <feature-branch>`  
  新しい feature branch を作成して切り替える

- `git push -u origin <feature-branch>`  
  ブランチを GitHub に送り、tracking も設定する

- `git pull origin main`  
  merge 後に local main を最新へ更新する

- `git branch -d <feature-branch>`  
  merge 済みローカルブランチを削除する

- `git fetch --prune origin`  
  GitHub 側で削除されたリモートブランチ情報をローカルにも反映する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/05-04-github-flow-and-pull-request.md`
- `practice/05-remote-github/05-04-pr-note.md`

---

## 5. 手を動かす演習

### 演習 1: feature branch を作る

- `main` から `feature/05-04-pr-demo` を作る

### 演習 2: 作業して push する

- Markdown ファイルを編集して commit
- `git push -u origin feature/05-04-pr-demo`

### 演習 3: Pull Request を作る

- GitHub 上で PR を作成する
- タイトルと本文を書く

### 演習 4: 追加コミットを積む

- ローカルでさらに修正する
- commit / push する
- PR に変更が自動反映されることを確認する

### 演習 5: merge 後に片付ける

- GitHub 上で PR を merge
- GitHub 上でブランチを削除
- ローカルで main を pull
- ローカルブランチを削除する

---

## 6. 実行後に確認すること

- feature branch を切って作業する流れが分かる
- PR は変更提案の場である
- push すると PR に変更が追加反映される
- merge 後は main を更新し、ブランチを片付ける

---

## 7. 観察ポイント

- PR 作成前後で GitHub 上の見え方が変わる
- 追加コミット後、同じ PR に更新が乗る
- merge 後、local main は pull するまで古い
- ブランチ削除後は prune で整理できる

---

## 8. よくあるミス

- main で直接作業する
- PR 作成後に local main を見て「反映されていない」と混乱する
- merge 後にローカルの main を更新しない
- 使い終わったブランチを放置する

---

## 9. まとめ

この項目では、GitHub Flow の最小の流れとして、feature branch 作成から PR・merge・後片付けまでを確認した。  
今後の個人開発でも、PR を挟む流れに慣れておくと実務に近い感覚で整理しやすい。

---

## 10. 次の項目とのつながり

次の大項目では、rebase や detached HEAD、トラブル対応など、さらに実務で詰まりやすい論点へ進む。
