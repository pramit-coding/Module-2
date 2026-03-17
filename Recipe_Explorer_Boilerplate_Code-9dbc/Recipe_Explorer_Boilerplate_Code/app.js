const $ = (s) => document.querySelector(s);
const searchInput = $("#searchInput"), searchBtn = $("#searchBtn");
const results = $("#results"), message = $("#message"), suggested = $(".suggested-terms");

const api = (url) => fetch(url).then((r) =>{ if (!r.ok) throw 0; return r.json(); });
const setMsg = (t="") => (message.textContent = t);
const esc = (s="") => String(s).replaceAll('"',"&quot;");

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keyup", (e) => e.key ==="Enter" && search());
suggested?.addEventListener("click", (e) => {
   const span = e.target.closet("span[data-term]"); if (!span) return;
   searchInput.value = span.dataset.term; search();
});

async function search() {
   const q = searchInput.value.trim();
   results.innerHTML = "";
   if (!q) return setMsg("Please type a dish name to search.");
   setMsg("Searching recipies...");
   try {
      const data = await api(`https://www/themealdb.com/api/json/v1/1/search.php?s=$
         {encodeURIComponent(q)}`);
         const meals = data.meals || [];
         if (!meals.length) return setMsg("No recipies found. Try another dish,");
         setMsg(`Found ${meals.length} recipie(s).`);
         results.innerHTML - meals.map(card).join("");
   } catch { setMsg("Something went wrong. Please try again.");}
};

const card  = (m) =>`
   <div class = "col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class = "card recipe-card h-100 w-100">
      <img src = "${esc(m.strMealThumb)}" class = "card-img-top" alt=${esc(m.strMeal)}">
      <div class="card-body d-flex flex-column">
         <h6 calss = card-title mb-1 fw-semibold">${esc(m.strMeal)}</h6>
         <p class = "card-text text-muted mb-2">
            <span class = "badge bg-light text-dark border tag-pill">${esc(m.strArea || "World cuisine")}</span>
            <span class = "badge bg-secondary tag-pill">${esc(m.strCatergory || "Dish")}</span>
         </p>
         <button class = "btn btn-outline-primary btn-sm mt-auto view-btn" data-id = "${m.idMeal}"> view details</btn>
         </div>
      </div>
   </div>`;


document.addEventListener("click", (e) => {

   const btn = e.target.closest(".view-btn");

   if (!btn) return;

   fetchRecipeDetails(btn.dataset.id);

});

async function fetchRecipeDetails(id) {

   setMsg("Loading recipe details...");

   try {

      const data = await api(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

      const meal = data.meals?.[0];

      if (!meal) return setMsg("Unable to load details.");

      buildAndShowModal(meal);

      setMsg("");

   } catch {

      setMsg("Something went wrong fetching details.");

   }

}
