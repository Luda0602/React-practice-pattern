import { useState } from "react";
import styles from "./Minesweeper.module.css";

const initialCells = [
  { id: 1, mine: false, opened: false },
  { id: 2, mine: true, opened: false },
  { id: 3, mine: false, opened: false },
  { id: 4, mine: false, opened: false },
  { id: 5, mine: true, opened: false },
];

function Minesweeper() {
  const [cells, setCells] = useState(initialCells);

  function openSafeNeighbours(newCells, index) {
    if (index < 0 || index >= newCells.length) {
      return;
    }

    if (newCells[index].opened) {
      return;
    }

    if (newCells[index].mine) {
      return;
    }

    newCells[index].opened = true;

    openSafeNeighbours(newCells, index - 1);
    openSafeNeighbours(newCells, index + 1);
  }

  function openCell(index) {
    const newCells = cells.map((cell) => ({ ...cell }));

    const selectedCell = newCells[index];

    if (selectedCell.mine) {
      selectedCell.opened = true;
    } else {
      openSafeNeighbours(newCells, index);
    }

    setCells(newCells);
  }

  function getCellClass(cell) {
    if (!cell.opened) {
      return styles.closed;
    }

    if (cell.mine) {
      return styles.mine;
    }

    return styles.safe;
  }

  return (
    <div className={styles.container}>
      <h2>Однорядковий сапер</h2>

      <table>
        <tbody>
          <tr>
            {cells.map((cell, index) => (
              <td
                key={cell.id}
                className={`${styles.cell} ${getCellClass(cell)}`}
                data-mine={cell.mine}
                onClick={() => openCell(index)}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Minesweeper;
