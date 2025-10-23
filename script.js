document.addEventListener('DOMContentLoaded', () => {
    // 🔽 1. 対象となるHTML要素を取得 🔽
    const selectElement = document.getElementById('versionSelect');
    const toolButton = document.getElementById('toolButton');

    // 🔽 2. ドロップダウン（select）の値が変わったときの処理 🔽
    selectElement.addEventListener('change', (event) => {
        // 選択された<option>のvalue（リンク先URL）を取得
        const newLink = event.target.value;

        // 選択された<option>のテキストを取得
        const newText = event.target.options[event.target.selectedIndex].textContent;
        
        // ------------------------------------
        // a) ボタンのリンク先 (href) を変更
        toolButton.href = newLink;

        // b) ボタンのテキストを変更
        // "使い方を見る/登録する" + 選択されたバージョン名
        toolButton.textContent = `ダウンロード・詳細 (${newText})`;
        // ------------------------------------
    });

    // 🔽 3. ページロード時の初期設定 🔽
    // ページを読み込んだときに、ドロップダウンで選択されている値に合わせて
    // ボタンのテキストを初期設定します。
    // イベントリスナーが登録された後で、手動で'change'イベントを発火させます。
    selectElement.dispatchEvent(new Event('change'));
});

// コード全体を出力しました。
