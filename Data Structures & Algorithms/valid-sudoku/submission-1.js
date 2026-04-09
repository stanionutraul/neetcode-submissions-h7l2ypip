class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const num = board[i][j];

                if (num !== '.') {
                    const rowKey = `${num} in row ${i}`;
                    const colKey = `${num} in col ${j}`;
                    const blockKey = `${num} in block ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

                    if (seen.has(rowKey) || seen.has(colKey) || seen.has(blockKey)) {
                        return false;
                    }

                    seen.add(rowKey);
                    seen.add(colKey);
                    seen.add(blockKey);
                }
            }
        }

        return true;
    }
}