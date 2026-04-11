# 05-03 tracking branch と同期の理解

## 1. この項目で学ぶこと

この項目では、tracking branch の意味と、ローカルブランチとリモートブランチの同期状態の見方を学ぶ。

この項目で押さえることは次のとおり。

- tracking branch とは何か
- `origin/main` の見方
- `-u` の意味
- ローカルとリモートの同期

---

## 2. 事前に理解しておきたいこと

tracking branch は、ローカルブランチが「どのリモートブランチを追跡しているか」という関係である。

たとえば `main` が `origin/main` を追跡していると、現在のローカル `main` が GitHub 上のどのブランチと対応しているかを Git が理解しやすくなる。

`git push -u origin <branch-name>` の `-u` は、その追跡関係を設定するために使う。

---

## 3. 主要コマンド

```bash
git push -u origin <branch-name>
git branch -vv
git status
git log --oneline --graph --decorate --all
```

### コマンドの役割

- `git push -u origin <branch-name>`  
  初回 push と同時に tracking 関係を設定する

- `git branch -vv`  
  各ローカルブランチがどのリモートブランチを追跡しているか、ahead / behind の状態も含めて確認する

- `git status`  
  現在ブランチが upstream に対して進んでいるか、追いついているかを確認する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/05-03-tracking-branches-and-sync.md`
- `practice/05-remote-github/05-03-tracking-note.md`

---

## 5. 手を動かす演習

### 演習 1: tracking 設定つきで push する

- `feature/tracking-demo` を作る
- ファイルを編集して commit する
- `git push -u origin feature/tracking-demo` を実行する

### 演習 2: 追跡関係を確認する

- `git branch -vv`
- `git status`

で、どのブランチを追跡しているか確認する

### 演習 3: ローカルだけを 1 コミット先に進める

- もう 1 回コミットする
- まだ push しない
- `git status` と `git branch -vv` で ahead の見え方を確認する

### 演習 4: push して同期させる

- push 後に up to date へ戻ることを確認する

---

## 6. 実行後に確認すること

- tracking branch はローカルとリモートの対応関係である
- `-u` は upstream を設定する
- `git branch -vv` で追跡関係が見える
- ローカルだけが先に進んだとき、ahead の状態が確認できる

---

## 7. 観察ポイント

- 初回 `push -u` のあと、`feature/tracking-demo` が `origin/feature/tracking-demo` を追跡する
- 追加コミット後、push 前は ahead と表示される
- push 後は同期状態に戻る

---

## 8. よくあるミス

- `-u` の意味を見ない
- `origin/main` をローカルの main と同じものと思う
- `git branch -vv` を確認しない

---

## 9. まとめ

この項目では、tracking branch の基本と、ローカルとリモートの同期状態の見方を確認した。  
今後は新しいブランチを初回 push するときに、tracking の設定も意識する。

---

## 10. 次の項目とのつながり

次の `05-04 GitHub Flow と Pull Request` では、feature branch を push し、GitHub 上で PR を作って merge する流れを学ぶ。
