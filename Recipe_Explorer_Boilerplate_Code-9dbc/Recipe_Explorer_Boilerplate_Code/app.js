/* =========================
   RECIPE EXPLORER (Boilerplate)
   Comments-only version
   ========================= */

/* ---------- 1) Small helper to select elements ----------
   Goal: Make it easy to grab HTML elements using CSS selectors.
   Example: $("#searchInput") -> gets the input box
---------------------------------------------------------- */

// Create a shortcut function that returns document.querySelector(...)



/* ---------- 2) Grab important UI elements ----------
   We will need:
   - Input box (where user types dish name)
   - Search button
   - Results section (where cards show)
   - Message area (status text)
   - Suggested terms container (optional)
------------------------------------------------------ */

// Store references to:
// searchInput, searchBtn, results, message, suggested



/* ---------- 3) API helper function ----------
   Goal: One function that:
   - calls fetch(url)
   - checks if response is OK
   - converts response to JSON
   - throws an error if something fails
------------------------------------------------ */

// Create api(url) helper that returns JSON data



/* ---------- 4) Message helper ----------
   Goal: Show text in the message area easily
------------------------------------------------ */

// Create setMsg(text) helper that sets message.textContent



/* ---------- 5) Safety helper: escape text ----------
   Goal: Prevent breaking HTML when we insert API text into template strings.
   Example: dish name may contain quotes or special characters.
---------------------------------------------------- */

// Create esc(text) helper to make strings safe for HTML



/* ---------- 6) Event listeners ----------
   Goal: Start searching when:
   - user clicks Search button
   - user presses Enter in input
   - user clicks a suggested term (optional)
------------------------------------------------ */

// Add click event on searchBtn -> call search()
// Add keyup event on searchInput:
//   if key is Enter -> call search()
// If suggested terms area exists:
//   - detect click on a span[data-term]
//   - set input value to that term
//   - call search()



/* ---------- 7) Main search function (async) ----------
   Goal:
   - read the search word
   - validate it
   - call the search API endpoint
   - show cards in results
   - handle “no results” and errors safely
------------------------------------------------------ */

async function search() {
  // Get the typed value from input and trim extra spaces
  // Clear old results

  // If input is empty:
  //   show "Please type a dish name..."
  //   stop the function (return)

  // Show "Searching recipes..."

  // Try to call the API:
  //   build URL with encodeURIComponent(query)
  //   await api(url)
  //   get meals list (if null, use empty array)

  // If meals list is empty:
  //   show "No recipes found..."
  //   stop the function (return)

  // If meals exist:
  //   show "Found X recipe(s)."
  //   convert meals into HTML cards using map(card).join("")
  //   put into results.innerHTML

  // Catch errors:
  //   show "Something went wrong..."
}



/* ---------- 8) Card builder function ----------
   Goal:
   - take one meal object
   - return one Bootstrap card HTML string
   - include:
     - image
     - title
     - area badge + category badge
     - view details button with data-id
------------------------------------------------ */

// Create a function card(meal) that returns card HTML string



/* ---------- 9) Event delegation for dynamic buttons ----------
   Goal:
   - “View Details” buttons are created after search
   - so we listen on document and detect clicks
----------------------------------------------------------- */

// document.addEventListener("click", ...)
// Find closest element with .view-btn
// If not found -> return
// Read data-id
// Call fetchRecipeDetails(id)



/* ---------- 10) Fetch recipe details by ID (async) ----------
   Goal:
   - call lookup endpoint with ?i=id
   - get the first meal from data.meals
   - if not found -> show error
   - if found -> open modal using buildAndShowModal(meal)
------------------------------------------------------------ */

async function fetchRecipeDetails(id) {
  // Show "Loading recipe details..."

  // Try:
  //   call lookup endpoint using await api(url)
  //   extract meal = data.meals?.[0]

  // If meal is missing:
  //   show "Unable to load details."
  //   stop the function (return)

  // If meal exists:
  //   call buildAndShowModal(meal)
  //   clear message

  // Catch:
  //   show "Something went wrong fetching details."
}



/* ---------- 11) Modal builder (placeholder) ----------
   Goal:
   - build ingredients list (loop 1 to 20)
   - show image, title, instructions
   - show YouTube link if present
   - then open Bootstrap modal
------------------------------------------------------ */

// function buildAndShowModal(meal) {
//   // Build ingredients list
//   // Insert HTML into modalBody
//   // Open Bootstrap modal
// }
