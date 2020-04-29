const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: false
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() + columns, 10)

        if (!board[rowSel][columnSel].mines){
            board[rowSel][columSel].mines = true
            minesPlanted++
        }
    }
}

const creatMinedBoard = (rows, columns, minesAmount) => {
    const board = crateBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export {createMinedBoard}