# 05-02 `push` / `fetch` / `pull`

## 1. この項目で学ぶこと

この項目では、`push` / `fetch` / `pull` の基本と、ローカルとリモートの差分の見方を学ぶ。

この項目で押さえることは次のとおり。

- `push`
- `fetch`
- `pull`
- pull をどう理解するか
- ローカルとリモートの差分把握

---

## 2. 事前に理解しておきたいこと

ここではまず次の理解でよい。

- `push`  
  ローカルのコミットをリモートへ送る

- `fetch`  
  リモートの最新情報を取りに行く  
  ただし現在のローカルブランチにはまだ反映しない

- `pull`  
  まずは「fetch してから現在のブランチへ反映する操作」と理解する

今回は、GitHub Web 上でリモートだけの変更を 1 回作り、それをローカルへ取り込む。

---

## 3. 主要コマンド

```bash
git push -u origin main
git fetch origin
git pull origin main
git log --oneline --graph --decorate --all
git status
git remote -v
```

### コマンドの役割

- `git push -u origin main`  
  local の main を origin/main に初回 push し、追跡関係も設定する

- `git fetch origin`  
  origin の最新情報を取得する

- `git pull origin main`  
  origin/main の変更を現在のブランチへ取り込む

- `git log --oneline --graph --decorate --all`  
  local / remote の位置関係を見る

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/05-02-push-fetch-pull.md`
- `practice/05-remote-github/05-02-remote-note.md`

---

## 5. 手を動かす演習

### 演習 1: 初回 push を行う

- `main` でコミットを作る
- `git push -u origin main` を実行する
- GitHub 上で履歴が見えることを確認する

### 演習 2: リモートだけの変更を作る

- GitHub Web でファイルを編集し、main にコミットする

### 演習 3: fetch を実行する

- `git fetch origin` を実行する
- `git log --graph` で `origin/main` が先に進んでいることを確認する

### 演習 4: pull を実行する

- `git pull origin main` を実行する
- local main に変更が取り込まれることを確認する

---

## 6. 実行後に確認すること

- push はローカルの履歴をリモートへ送る
- fetch は最新情報を取得するだけで、作業ブランチはまだ変わらない
- pull はリモート変更を取り込む
- local main と origin/main の位置関係を log で確認できる

---

## 7. 観察ポイント

- push 後は GitHub 上にローカル履歴が見える
- fetch 後は origin/main が進むが local main はまだ追いついていない
- pull 後は local main も追いつく

---

## 8. よくあるミス

- fetch と pull を同じものとして扱う
- push 前に origin を確認しない
- pull 後に log や status を確認しない

---

## 9. まとめ

この項目では、push / fetch / pull の基本を確認した。  
大事なのは、fetch は取得、pull は反映まで含む、という違いである。

---

## 10. 次の項目とのつながり

次の `05-03 tracking branch と同期の理解` では、push -u で設定された追跡関係や、local / remote の同期状態の見方を学ぶ。
