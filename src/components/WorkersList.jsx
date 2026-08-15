function WorkersList() {
  const workers = [
    {
      id: "111",
      name: "Іванов",
      salary: 10000,
    },
    {
      id: "111",
      name: "Петров",
      salary: 20000,
    },
    {
      id: "111",
      name: "Сидоров",
      salary: 50000,
    },
  ];
  return (
    <div>
      <ul>
        {workers.map((worker, index) => (
          <li key={index}>
            {worker.name} :{worker.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkersList;
