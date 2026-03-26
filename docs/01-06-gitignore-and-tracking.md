# 01-06 `.gitignore` と tracked / untracked

## 1. この項目で学ぶこと

この項目では、tracked / untracked の整理と、`.gitignore` による無視設定の基本を学ぶ。

この項目で押さえることは次のとおり。

- tracked / untracked の違い
- `.gitignore` の役割
- ignore と already tracked の違い

---

## 2. 事前に理解しておきたいこと

`.gitignore` は「今後 Git に追跡させたくないファイル」を無視するための設定である。  
ただし、**すでに tracked になっているファイルは `.gitignore` を書いても自動では外れない**。

この違いを今回の演習で確認する。

---

## 3. 主要コマンド

```bash
git status
git status --ignored
git add .gitignore
git add <file>
git commit -m "message"
```

---

## 4. 演習で使用するファイル / ディレクトリ

- `.gitignore`
- `practice/01-foundation/01-06-keep-tracked.log`
- `practice/01-foundation/01-06-debug.log`
- `practice/01-foundation/temp/cache.tmp`

---

## 5. 手を動かす演習

### 演習 1: tracked の `.log` ファイルを 1 つ作ってコミットする

`01-06-keep-tracked.log` を作り、add / commit する。  
これで「すでに追跡されている `.log`」を用意する。

### 演習 2: `.gitignore` を作る

`.gitignore` に次のようなルールを書く。

- `*.log`
- `*.tmp`
- `temp/`

### 演習 3: 無視されるファイルを作る

- `practice/01-foundation/01-06-debug.log`
- `practice/01-foundation/temp/cache.tmp`

を作る。

### 演習 4: `status` で確認する

```bash
git status
git status --ignored
```

通常の `git status` では ignored file は出にくく、`--ignored` を付けると確認しやすい。

### 演習 5: `.gitignore` をコミットする

`.gitignore` を add / commit する。

### 演習 6: すでに tracked の `.log` を変更する

`01-06-keep-tracked.log` を編集して `git status` を確認する。  
`.gitignore` に `*.log` が書いてあっても、tracked 済みなので modified として出ることを確認する。

---

## 6. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- tracked は Git が追跡中のファイル
- untracked はまだ追跡していないファイル
- `.gitignore` は無視したいファイルを指定する
- すでに tracked のファイルは `.gitignore` だけでは外れない

---

## 7. 観察ポイント

- `.gitignore` 作成前後で `status` の見え方が変わる
- `git status --ignored` で ignored file を確認できる
- tracked の `.log` は ignore ルールがあっても追跡され続ける

---

## 8. よくあるミス

- `.gitignore` に書けば既存 tracked ファイルも消えると思う
- ignored file が `git status` に出ないことを異常だと思う

---

## 9. まとめ

この項目では、tracked / untracked と `.gitignore` の基本を確認した。  
特に重要なのは、「ignore は未追跡ファイルへのルールであり、すでに追跡中のファイルにはそのままでは効かない」という点である。

---

## 10. 次の項目とのつながり

次の大項目では、branch と HEAD の理解に進む。
