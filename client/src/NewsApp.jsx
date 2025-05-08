import { useEffect, useState } from "react";
import Card from "./Card";
import FootComp from "./FootComp.jsx";

export default function NewsApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved preference or default to false
    return localStorage.getItem("lightMode") === "true";
  });
  const getData = async (query = search) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news?q=${query}`);
      const data = await res.json();
      setNewsData(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch default news on initial load
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Apply or remove dark class to <body>
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode); // Save to localStorage
  }, [darkMode]);


  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Trigger search manually
  const handleSearchClick = () => {
    getData(search);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Category button click
  const handleCategoryClick = (e) => {
    const category = e.target.value;
    setSearch(category);     // update input too if desired
    getData(category);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>NewsNest</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearchClick}><i class="fa-solid fa-magnifying-glass"></i></button>
          <button onClick={toggleDarkMode}>
            {darkMode ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
          </button>
        </div>
      </nav>

      <div className="categoryBtn">
        {["sports", "politics", "entertainment", "health", "education"].map((cat) => (
          <button key={cat} value={cat} onClick={handleCategoryClick}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div>
        <p className="Headline">
          <span className="typewriter">Delivering Timely and Relevant News Updates.</span>
        </p>
      </div>

      <main>
      {newsData.length > 0 ? <Card data={newsData} /> : <div className="loader" />}

      </main>

      <FootComp />
    </div>
  );
}
