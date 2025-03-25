function Search() {
    return (
        <from name="searchForm" onSubmit={(e) => {
            e.preventDefault();
            const inputValue = e.target.inputText.inputValue;
            searchResult(inputValue);
        }}>
            <input type='text' name="inputText"></input>
            <button type='submit' name="btn">검색</button>
        </from>
    )
}
