# 05-01 リモートリポジトリの基本

## 1. この項目で学ぶこと

この項目では、remote repository の基本と、ローカルリポジトリとの関係を学ぶ。

この項目で押さえることは次のとおり。

- remote repository とは何か
- `origin` の意味
- local と remote の違い
- GitHub 上の空リポジトリ

---

## 2. 事前に理解しておきたいこと

これまでの学習は、ほぼローカルの Git 操作だった。  
ここからは GitHub 上のリポジトリを使い、ローカルとリモートの関係を扱う。

まずは次の区別を押さえる。

- local  
  自分の PC 上のリポジトリ

- remote  
  GitHub 上のリポジトリ

`origin` は、通常最初に登録したリモートリポジトリ名として使われる。

---

## 3. 主要コマンド

```bash
git remote add origin <repository-url>
git remote -v
git remote remove origin
git remote set-url origin <repository-url>
git status
```

### コマンドの役割

- `git remote add origin <repository-url>`  
  GitHub リポジトリを `origin` として登録する

- `git remote -v`  
  登録済みリモートを確認する

- `git remote remove origin`  
  誤って登録した origin を削除する

- `git remote set-url origin <repository-url>`  
  既存 origin の URL を変更する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/05-01-remote-basics.md`
- `docs/05-02-push-fetch-pull.md`
- `practice/05-remote-github/05-02-remote-note.md`

---

## 5. 手を動かす演習

### 演習 1: GitHub に空リポジトリを作る

- リポジトリ名は `git-github-basic-study`
- README / .gitignore / License は付けずに空で作る

### 演習 2: origin を登録する

- GitHub 上の URL を確認する
- `git remote add origin <repository-url>` を実行する

### 演習 3: 登録内容を確認する

- `git remote -v` で fetch / push の URL を確認する

---

## 6. 実行後に確認すること

- remote repository は GitHub 上のリポジトリである
- `origin` は登録したリモート名である
- local と remote は別物である
- `git remote -v` で登録内容を確認できる

---

## 7. 観察ポイント

- origin は名前であり、URL そのものではない
- GitHub 上の空リポジトリに対してローカルを紐づける
- まだ push 前なので、GitHub 上には履歴がない

---

## 8. よくあるミス

- README 付きで作って最初から履歴をぶつける
- remote を登録しただけで push 済みと思う
- origin と main を同じものと思う

---

## 9. まとめ

この項目では、GitHub 上の空リポジトリを origin として登録し、ローカルとリモートの関係を作る基本を確認した。

---

## 10. 次の項目とのつながり

次の `05-02 push / fetch / pull` では、登録した origin に対して実際に push し、GitHub 側で作った変更を fetch / pull で取り込む。
