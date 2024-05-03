let data = [
    {engine: "Gecko", browser: "Firefox 1.0", platform: "Win 98+ / OSX.2+", version: "1.7", grade: "A"},
    {engine: "Gecko", browser: "Firefox 1.5", platform: "Win 98+ / OSX.2+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Firefox 2.0", platform: "Win 98+ / OSX.2+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Firefox 3.0", platform: "Win 2k+ / OSX.3+", version: "1.9", grade: "A"},
    {engine: "Gecko", browser: "Camino 1.0", platform: "OSX.2+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Camino 1.5", platform: "OSX.3+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Netscape 7.2", platform: "Win 95+ / Mac OS 8.6-9.2", version: "1.7", grade: "A"},
    {engine: "Gecko", browser: "Netscape Browser 8", platform: "Win 98SE+", version: "1.7", grade: "A"},
    {engine: "Gecko", browser: "Netscape Navigator 9", platform: "Win 98+ / OSX.2+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.0", platform: "Win 95+ / OSX.1+", version: "1", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.1", platform: "Win 95+ / OSX.1+", version: "1.1", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.2", platform: "Win 95+ / OSX.1+", version: "1.2", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.3", platform: "Win 95+ / OSX.1+", version: "1.3", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.4", platform: "Win 95+ / OSX.1+", version: "1.4", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.5", platform: "Win 95+ / OSX.1+", version: "1.5", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.6", platform: "Win 95+ / OSX.1+", version: "1.6", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.7", platform: "Win 98+ / OSX.1+", version: "1.7", grade: "A"},
    {engine: "Gecko", browser: "Mozilla 1.8", platform: "Win 98+ / OSX.1+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Seamonkey 1.1", platform: "Win 98+ / OSX.2+", version: "1.8", grade: "A"},
    {engine: "Gecko", browser: "Epiphany 2.20", platform: "Gnome", version: "1.8", grade: "A"},
    {engine: "KHTML", browser: "Konqureror 3.1", platform: "KDE 3.1", version: "3.1", grade: "C"},
    {engine: "KHTML", browser: "Konqureror 3.3", platform: "KDE 3.3", version: "3.3", grade: "A"},
    {engine: "KHTML", browser: "Konqureror 3.5", platform: "KDE 3.5", version: "3.5", grade: "A"},
    {engine: "Misc", browser: "NetFront 3.1", platform: "Embedded devices", version: "-", grade: "C"},
    {engine: "Misc", browser: "NetFront 3.4", platform: "Embedded devices", version: "-", grade: "A"},
    {engine: "Misc", browser: "Dillo 0.8", platform: "Embedded devices", version: "-", grade: "X"},
    {engine: "Misc", browser: "Links", platform: "Text only", version: "-", grade: "X"},
    {engine: "Misc", browser: "Lynx", platform: "Text only", version: "-", grade: "X"},
    {engine: "Misc", browser: "IE Mobile", platform: "Windows Mobile 6", version: "-", grade: "C"},
    {engine: "Misc", browser: "PSP browser", platform: "PSP", version: "-", grade: "C"},
    {engine: "Other browsers", browser: "All others", platform: "-", version: "-", grade: "U"},
    {engine: "Presto", browser: "Opera 7.0", platform: "Win 95+ / OSX.1+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 7.5", platform: "Win 95+ / OSX.2+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 8.0", platform: "Win 95+ / OSX.2+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 8.5", platform: "Win 95+ / OSX.2+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 9.0", platform: "Win 95+ / OSX.3+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 9.2", platform: "Win 88+ / OSX.3+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera 9.5", platform: "Win 88+ / OSX.3+", version: "-", grade: "A"},
    {engine: "Presto", browser: "Opera for Wii", platform: "Wii", version: "-", grade: "A"},
    {engine: "Presto", browser: "Nokia N800", platform: "N800", version: "-", grade: "A"},
    {engine: "Presto", browser: "Nintendo DS browser", platform: "Nintendo DS", version: "8.5", grade: "C/A1"},
    {engine: "Tasman", browser: "Internet Explorer 4.5", platform: "Mac OS 8-9", version: "-", grade: "X"},
    {engine: "Tasman", browser: "Internet Explorer 5.1", platform: "Mac OS 7.6-9", version: "1", grade: "C"},
    {engine: "Tasman", browser: "Internet Explorer 5.2", platform: "Mac OS 8-X", version: "1", grade: "C"},
    {engine: "Trident", browser: "Internet Explorer 4.0", platform: "Win 95+", version: "4", grade: "X"},
    {engine: "Trident", browser: "Internet Explorer 5.0", platform: "Win 95+", version: "5", grade: "C"},
    {engine: "Trident", browser: "Internet Explorer 5.5", platform: "Win 95+", version: "5.5", grade: "A"},
    {engine: "Trident", browser: "Internet Explorer 6", platform: "Win 98+", version: "6", grade: "A"},
    {engine: "Trident", browser: "Internet Explorer 7", platform: "Win XP SP2+", version: "7", grade: "A"},
    {engine: "Trident", browser: "AOL browser (AOL desktop)", platform: "Win XP", version: "6", grade: "A"},
    {engine: "Webkit", browser: "Safari 1.2", platform: "OSX.3", version: "125.5", grade: "A"},
    {engine: "Webkit", browser: "Safari 1.3", platform: "OSX.3", version: "312.8", grade: "A"},
    {engine: "Webkit", browser: "Safari 2.0", platform: "OSX.4+", version: "419.3", grade: "A"},
    {engine: "Webkit", browser: "Safari 3.0", platform: "OSX.4+", version: "522.1", grade: "A"},
    {engine: "Webkit", browser: "OmniWeb 5.5", platform: "OSX.4+", version: "420", grade: "A"},
    {engine: "Webkit", browser: "iPod Touch / iPhone", platform: "iPod", version: "420.1", grade: "A"},
    {engine: "Webkit", browser: "S60", platform: "S60", version: "413", grade: "A"}
];

let table = document.querySelector(".table tbody");

data.forEach(item => {
    let newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = item.engine;
    newRow.insertCell(1).innerHTML = item.browser;
    newRow.insertCell(2).innerHTML = item.platform;
    newRow.insertCell(3).innerHTML = item.version;
    newRow.insertCell(4).innerHTML = item.grade;
});

let rows = Array.from(table.rows),
    showSelect = document.querySelector(".show"),
    searchInput = document.querySelector(".search"),
    paginationDiv = document.querySelector(".pagination"),
    showText = document.querySelector(".show-text"),
    currentPage = 0,
    headers = Array.from(document.querySelectorAll(".table th i")),
    sortColumn = 0,
    sortAscending = true;

const updateTable = () => {
    let searchText = searchInput.value.toLowerCase();
    let showCount = parseInt(showSelect.value);
    let filteredRows = rows.filter(row => {
        let text = row.textContent.toLowerCase();
        return text.includes(searchText);
    });
    let startRow = currentPage * showCount;
    let endRow = startRow + showCount;
    rows.forEach(row => row.style.display = "none");
    filteredRows.slice(startRow, endRow).forEach(row => row.style.display = "");
    
    let isSearching = searchText !== "";
    showText.textContent = "Showing " + (startRow + 1) + " to " + Math.min(endRow, filteredRows.length) + " of " + filteredRows.length + " entries" + (isSearching ? " (filtered from " + rows.length + " total entries)" : "");
    let noResultRow = table.querySelector(".no-result");
    if (noResultRow) table.removeChild(noResultRow);

    if (filteredRows.length === 0 && isSearching) {
        noResultRow = table.insertRow();
        noResultRow.className = "no-result";
        let cell = noResultRow.insertCell();
        cell.colSpan = 5;
        cell.textContent = "No matching records found";
        showText.textContent = "Showing 0 to 0 of 0 entries (filtered from " + rows.length + " total entries)";
    }
    updatePagination(filteredRows.length, showCount);
}

    
const updatePagination = (totalRows, showCount) => {
    paginationDiv.innerHTML = "";
    let totalPages = Math.ceil(totalRows / showCount);

    let prevBtn = document.createElement("a");
    prevBtn.textContent = "Previous";
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            updateTable();
        }
    });
    paginationDiv.appendChild(prevBtn);
    for (let i = 0; i < totalPages; i++) {
        let btn = document.createElement("a");
        btn.textContent = i + 1;
        btn.className = i === currentPage ? "active" : "";
        paginationDiv.appendChild(btn);
        btn.addEventListener("click", () => {
            currentPage = i;
            updateTable();
        });
    }
    let nextBtn = document.createElement("a");
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateTable();
        }
    });
    paginationDiv.appendChild(nextBtn);
    prevBtn.style.cursor = currentPage === 0 ? "no-drop" : "pointer"; 
    if(currentPage === 0) prevBtn.style.background = "#fff";
    nextBtn.style.cursor = currentPage === totalPages - 1 ? "no-drop" : "pointer";
    if(currentPage === 0) nextBtn.style.background = "#fff";
}

showSelect.addEventListener("change", () => {
    currentPage = 0;
    updateTable();
});

searchInput.addEventListener("input", () => {
    currentPage = 0;
    updateTable();
});

updateTable();

const sortTable = () => {
    rows.sort((rowA, rowB) => {
        return rowA.cells[sortColumn].textContent.trim().localeCompare(rowB.cells[sortColumn].textContent.trim(), {numeric: true, sensitivity: "base"}) * (sortAscending ? 1 : -1);
    });
    rows.forEach(row => table.appendChild(row));
}

headers.forEach((header, index) => {
    header.addEventListener("click", () => {
        let wasAscending = sortAscending;
        if(sortColumn!=index){
            sortColumn = index;
            wasAscending = false;
        }
        sortAscending = !wasAscending;
        headers.forEach((header, i) => {
            header.className = "fa-solid " + (i === sortColumn ? (wasAscending ? "fa-arrow-down-wide-short active" : "fa-arrow-down-short-wide active") : "fa-sort");
        });
        sortTable();
        currentPage = 0;
        updateTable();
    });
});