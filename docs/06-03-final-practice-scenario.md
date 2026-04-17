# 06-03 総合演習シナリオ

## 1. この項目で学ぶこと

この項目では、これまで学んだ Git / GitHub の知識を一連の流れとして使い、実務に近い小さな開発フローを通しで体験する。

この項目で押さえることは次のとおり。

- issue 想定のブランチ作成
- 変更・add・commit
- `commit --amend` による直前コミット修正
- main 側更新の取り込み
- conflict 解消
- push と Pull Request
- PR 作成後の追加コミット
- merge 後の後片付け
- `revert` / `reflog` の軽い再確認

## 2. 総合演習の目的

単発のコマンドを覚えるのではなく、次の一連の流れを自分で説明・再現できるようになることを目的とする。

1. main から feature branch を切る
2. 作業して commit する
3. 必要なら amend する
4. main 側更新を取り込む
5. conflict があれば解消する
6. push して PR を作る
7. 追加コミットを積む
8. PR を merge する
9. main を更新してブランチを片付ける

## 3. 主要コマンド

```bash
git switch main
git pull origin main
git switch -c feature/06-03-final-scenario
git status
git add <file>
git commit -m "message"
git commit --amend -m "message"
git fetch origin
git merge origin/main
git push -u origin feature/06-03-final-scenario
git push
git branch -vv
git log --oneline --graph --decorate --all
git branch -d feature/06-03-final-scenario
git fetch --prune origin
git revert HEAD --no-edit
git reflog --oneline
git reset --hard HEAD@{1}
```

## 4. 演習で使用するファイル / ディレクトリ

- `docs/06-03-final-practice-scenario.md`
- `practice/06-advanced/06-03-final-scenario-note.md`

## 5. シナリオ全体像

今回のシナリオは次のとおり。

- `main` に総合演習用の docs / practice を追加して push
- `feature/06-03-final-scenario` を作成
- feature 側で変更して commit
- 追加し忘れを amend
- GitHub Web で main 側の同じ行を変更して、擬似的に「他の更新」を作る
- feature 側で `origin/main` を merge して conflict を解消
- feature を push して PR を作る
- PR 作成後に追加コミットして push
- GitHub 上で merge
- ローカルで main を更新し、feature branch を削除
- sandbox で revert / reflog を軽く再確認

## 6. 実行後に確認すること

- issue 想定の feature branch を切って作業できる
- amend を使って直前コミットを修正できる
- main 側更新を取り込んで conflict を解消できる
- PR を作成し、追加コミットを同じ PR に反映できる
- merge 後にローカルを片付けられる
- revert と reflog を軽く再確認できる

## 7. 観察ポイント

- `status` で現在地と作業状態が分かる
- `log --graph` で分岐・merge・統合の形が見える
- conflict marker を読んで手動解消できる
- PR 作成後も追加コミットが同じ PR に載る
- merge 後、local main は pull するまで古い
- reflog には HEAD の移動履歴が残る

## 8. よくあるミス

- main で直接作業を始める
- amend 前後で log を見ない
- `fetch` / `merge origin/main` 前に現在ブランチを確認しない
- conflict 解消後に `git add` を忘れる
- PR merge 後に local main を更新しない
- 困ったときに `status` / `log` / `reflog` を見ない

## 9. 自己確認チェックリスト

- feature branch を切る意味を説明できる
- `add` / `commit` / `amend` の違いを説明できる
- conflict の発生理由と解消手順を説明できる
- push / PR / merge の流れを説明できる
- merge 後の後片付け手順を説明できる
- revert と reflog の役割を説明できる

## 10. まとめ

この項目では、Git / GitHub の基本操作を単発ではなく、一連の実務フローとして通した。  
最終的に大切なのは、困ったときにも状態を読みながら順番に対処できることである。
