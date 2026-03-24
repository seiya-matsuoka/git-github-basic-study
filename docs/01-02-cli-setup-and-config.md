# 01-02 CLI 環境準備と初期設定

## 1. この項目で学ぶこと

この項目では、CLI で Git を使うための最小限の確認事項と初期設定を整理する。

この項目で押さえることは次のとおり。

- Git のインストール確認
- `git --version`
- `git config --global` の基本
- ユーザー名とメール設定
- 初期ブランチ名の設定例
- 設定確認のやり方

---

## 2. 事前に理解しておきたいこと

この項目は、0 から環境構築する場合の内容も含めて記載する。

---

## 3. 主要コマンド

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your@example.com"
git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global --list
git config --global user.name
git config --global user.email
```

### コマンドの役割

- `git --version`  
  Git のインストール確認

- `git config --global user.name`  
  グローバルのユーザー名設定

- `git config --global user.email`  
  グローバルのメールアドレス設定

- `git config --global init.defaultBranch main`  
  `git init` 時の初期ブランチ名を `main` にする設定例

- `git config --global core.editor "code --wait"`  
  エディタ設定の例

- `git config --global --list`  
  設定一覧の確認

---

## 4. 手を動かす演習

### 演習 1: Git の導入確認

0 から環境構築する場合は、まず次で確認する。

```bash
git --version
```

### 演習 2: ユーザー名とメールの設定

```bash
git config --global user.name "Your Name"
git config --global user.email "your@example.com"
```

### 演習 3: 初期ブランチ名の設定例

```bash
git config --global init.defaultBranch main
```

### 演習 4: エディタ設定例

VS Code を使う場合の例。

```bash
git config --global core.editor "code --wait"
```

### 演習 5: 設定確認

```bash
git config --global --list
git config --global user.name
git config --global user.email
```

---

## 5. 実行後に確認すること

この項目の完了時点で、次のことが分かっていればよい。

- Git が CLI で使えることをどう確認するか
- Git のユーザー名とメールアドレスをどこで設定するか
- `--global` が全体設定であること
- 必要な設定をどう確認するか

---

## 6. よくあるミス・混乱ポイント

### `--global` とローカル設定を混同する

今はまずグローバル設定を押さえればよい。

---

## 7. まとめ

この項目では、CLI で Git を使うための最小限の設定と確認方法を整理した。

---

## 8. 次の項目とのつながり

次の `01-03 git init と git status` では、実際にディレクトリを Git リポジトリとして初期化し、状態確認の最重要コマンドである `git status` を使い始める。
