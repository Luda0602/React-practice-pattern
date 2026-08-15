import { useState } from "react";
import styles from "./SingleRowTrack.module.css";

const initialCells = [
  { id: 1, obstacle: false, opened: false },
  { id: 2, obstacle: false, opened: false },
  { id: 3, obstacle: true, opened: false },
  { id: 4, obstacle: false, opened: false },
  { id: 5, obstacle: false, opened: false },
  { id: 6, obstacle: false, opened: false },
  { id: 7, obstacle: true, opened: false },
];

function SingleRowTrack() {
  const [cells, setCells] = useState(initialCells);

  function openSafeNeighbours(newCells, index) {
    // якщо вийшли за межі масиву
    if (index < 0 || index >= newCells.length) {
      return;
    }

    // якщо вже відкрита
    if (newCells[index].opened) {
      return;
    }

    // якщо перешкода
    if (newCells[index].obstacle) {
      return;
    }

    newCells[index].opened = true;

    openSafeNeighbours(newCells, index - 1);
    openSafeNeighbours(newCells, index + 1);
  }

  function openCell(index) {
    const newCells = cells.map((cell) => ({ ...cell }));

    const selectedCell = newCells[index];

    if (selectedCell.obstacle) {
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

    if (cell.obstacle) {
      return styles.red;
    }

    return styles.green;
  }

  return (
    <div className={styles.container}>
      <h2>Однорядкова доріжка</h2>

      <table>
        <tbody>
          <tr>
            {cells.map((cell, index) => (
              <td
                key={cell.id}
                className={`${styles.cell} ${getCellClass(cell)}`}
                data-obstacle={cell.obstacle}
                onClick={() => openCell(index)}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleRowTrack;
