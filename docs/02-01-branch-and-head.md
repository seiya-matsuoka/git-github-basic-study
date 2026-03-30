# 02-01 branch と HEAD の理解

## 1. この項目で学ぶこと

この項目では、branch と HEAD の基本を整理し、現在地を確認するための見方を学ぶ。

この項目で押さえることは次のとおり。

- branch とは何か
- HEAD とは何か
- 現在地の見方
- `git branch`
- ブランチ一覧の見方

---

## 2. 事前に理解しておきたいこと

Git の branch は、フォルダを丸ごとコピーして分岐するようなものではない。  
まずは **「履歴の流れを分けるための作業線」** くらいの理解でよい。

また、HEAD は **今自分がどこを見ているか** を表す。  
今後 branch を切り替えるときは、常に「今の HEAD はどこか」を意識する。

---

## 3. 主要コマンド

```bash
git branch
git branch <branch-name>
git log --oneline --graph --decorate --all
git status
```

### コマンドの役割

- `git branch`  
  ブランチ一覧を確認する

- `git branch <branch-name>`  
  新しいブランチを作る

- `git log --oneline --graph --decorate --all`  
  ブランチの分岐や現在位置を見やすく確認する

- `git status`  
  現在のブランチ名や状態を確認する

---

## 4. 演習で使用するファイル / ディレクトリ

- `docs/02-01-branch-and-head.md`
- `docs/02-02-switch-and-branch-work.md`
- 既存の Git 履歴一式

---

## 5. 手を動かす演習

### 演習 1: 現在のブランチを確認する

```bash
git status
git branch
```

### 演習 2: 履歴と現在地を確認する

```bash
git log --oneline --graph --decorate --all
```

### 演習 3: 新しいブランチを作る

```bash
git branch feature/branch-basics
git branch
```

### 演習 4: 作成直後の位置関係を確認する

```bash
git log --oneline --graph --decorate --all
```

この時点では、`main` と `feature/branch-basics` は同じコミットを指していることを確認する。

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- branch は作業の流れを分けるために使う
- HEAD は今見ている場所を表す
- `git branch` で現在のブランチを確認できる
- ブランチを作っただけでは HEAD は移動しない
- `git log --oneline --graph --decorate --all` で位置関係を見やすく確認できる

---

## 7. 観察ポイント

- `git branch` の `*` が現在のブランチを示す
- `git status` でも現在のブランチ名が分かる
- branch 作成直後は、元の branch と新しい branch が同じコミットを指す

---

## 8. よくあるミス

- branch を作っただけで切り替わったと思う
- HEAD と branch を別々に考えられない

---

## 9. まとめ

この項目では、branch と HEAD の基本を確認した。  
今後は branch を切り替える前後で、必ず現在地を確認する。

---

## 10. 次の項目とのつながり

次の `02-02 git switch とブランチ作業` では、実際に branch を切り替えながら main と feature branch で別々の変更を作る。
