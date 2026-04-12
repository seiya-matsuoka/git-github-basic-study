# 06-02 detached HEAD とよくあるトラブル

## 1. この項目で学ぶこと

この項目では、detached HEAD の意味と、実務で起こりがちなトラブルを小さく再現しながら、状態の読み方を学ぶ。

この項目で押さえることは次のとおり。

- detached HEAD とは何か
- よくあるトラブル一覧
- 状態を読む順番
- `status` / `log` / `reflog` の使い分け

## 2. 事前に理解しておきたいこと

トラブル時に大事なのは、慌ててコマンドを打つことではなく、まず状態を読むことである。

まず見る順番は次でよい。

1. `git status`
2. `git branch`
3. `git log --oneline --graph --decorate --all`
4. 必要なら `git reflog`

今回は次の 3 パターンを確認する。

- detached HEAD にいる状態
- main に直接コミットしてしまった状態
- push し忘れてローカルだけが先に進んでいる状態

## 3. 主要コマンド

```bash
git switch --detach <commit>
git switch -c <branch-name>
git status
git branch
git branch -vv
git log --oneline --graph --decorate --all
git reflog --oneline
git reset --hard origin/main
git push -u origin <branch-name>
git push
```

### コマンドの役割

- `git switch --detach <commit>`  
  特定コミットを直接見る detached HEAD 状態へ入る

- `git switch -c <branch-name>`  
  現在位置から新しいブランチを切って救出する

- `git branch -vv`  
  tracking 関係と ahead / behind を確認する

- `git reflog --oneline`  
  HEAD の移動履歴を確認する

- `git reset --hard origin/main`  
  local main を remote の先端に戻す

## 4. 演習で使用するファイル / ディレクトリ

- `docs/06-02-detached-head-and-troubleshooting.md`
- `practice/06-advanced/06-02-trouble-note.md`

## 5. 手を動かす演習

### 演習 1: detached HEAD を体験する

- `main` の現在コミットで detached HEAD に入る
- ファイルを編集して commit する
- その commit がブランチ上ではないことを確認する
- 新しいブランチを切って救出する

### 演習 2: main に直接コミットしてしまう

- `main` で誤ってコミットする
- その commit を feature branch へ逃がす
- local main を `origin/main` に戻す

### 演習 3: push し忘れを確認する

- tracking 付きブランチを作る
- 1 回 push する
- もう 1 コミット作って push せずに止める
- `status` / `branch -vv` で ahead の見え方を確認する

## 6. 実行後に確認すること

- detached HEAD は「ブランチではなくコミットを直接見ている状態」
- detached HEAD で作った commit は branch を切って救出できる
- main に直接コミットした場合、push 前なら逃がして戻せる
- push し忘れは `status` と `branch -vv` で確認できる
- 困ったらまず `status` と `log`、必要なら `reflog` を見る

## 7. 観察ポイント

- detached HEAD 中は `git status` にその状態が出る
- branch を切ると detached で作った commit を保持できる
- main で誤コミットした直後は `origin/main` より ahead になる
- push し忘れブランチは `branch -vv` で ahead と出る

## 8. よくあるミス

- detached HEAD のまま作業を続けて見失う
- main で直接コミットしたのに、そのまま push する
- ahead 表示を見ずに「push したつもり」になる
- 困ったときに `reflog` を見ない

## 9. まとめ

この項目では、実務で混乱しやすい detached HEAD、誤った main へのコミット、push し忘れの見え方を確認した。  
大事なのは、状態を読む順番を持つことである。

## 10. 次の項目とのつながり

次の `06-03 総合演習シナリオ` では、ここまで学んだ内容を一連の流れとして通しで使う。
