const sortable = document.querySelector('[data-sortable]');
const head = document.querySelector('[data-header]');
const containerRows = document.querySelector('[data-rows-container]')



head.addEventListener('click', (e) => {
  const columnTitle = e.target.closest('[data-sort-type]');

  if (!columnTitle) return;

  const rows = [...containerRows.children]
  const {sortType, column} = columnTitle.dataset;

  const getVal = (row) => {
    return row.children[column].textContent;
  }

  const sortFunction = {
    number: (a, b) => getVal(a) - getVal(b),
    string: (a, b) => getVal(a).localeCompare(getVal(b))
  }
  
  const defaultSort = () => 0;
  const sortFn = sortFunction[sortType] || defaultSort;
   
  rows.sort(sortFn);

  for (const row of rows) {
    containerRows.appendChild(row);
  }

})

