# cc-reservation-front

### 推奨環境

Node.js のバージョンは v16.5.0 を利用しています

### ローカル環境構築手順（Docker 版）

1. リポジトリをクローンします
2. ターミナルを開き、プロジェクト直下で以下のコマンドを叩く

- .env.localw をコピー作成（バックエンド側のURLを適切に設定してください）

```
cp .env.local.sample .env.local
```

- 開発モードを実行

```
npm run dev
```

3. `http://localhost:3000/` にアクセスすると OK です！
