function SearchResults() {
  const results = [
    {
      id: 1,
      site: "React",
      link: "https://react.dev/learn",
      title: "Документація React",
      description: "Офіційна документація React з прикладами та поясненнями.",
    },
    {
      id: 2,
      site: "JavaScript",
      link: "https://uk.javascript.info/",
      title: "Підручник з JavaScript",
      description:
        "Підручник з JavaScript, починаючи з основ, що включає багато тонкощів",
    },
    {
      id: 3,
      site: "LeetCode",
      link: "https://leetcode.com/",
      title: "Новий спосіб навчання",
      description:
        "LeetCode – це платформа для покращення навичок та підготовки до технічних співбесід.",
    },
  ];

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <p>{result.site}</p>

          <a href={result.link}>{result.link}</a>

          <h4 style={{ color: "blue" }}>{result.title}</h4>

          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
