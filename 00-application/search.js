const searchForm = document.querySelector(".js-searchForm"),
    searchWord = searchForm.querySelector("input");


function handleSubmit(event) {
    event.preventDefault();
    const text = searchWord.value;
    text = "";
    window.open(`https://www.google.com/search?rlz=1C5CHFA_enKR886KR886&sxsrf=ALeKk012mw-C8vigwZon_vmxoQJ8hFXtqg%3A1604643591093&ei=B-ukX7ejBcHWhwPB5ZyIBw&q=${text}&oq=${text}&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAELEDMgIIADIFCAAQsQMyAggAMgIIADICCAAyAggAMggIABCxAxCDATICCAA6BAgAEEc6BAgjECc6BwgjEOoCECc6BAgAEANQt9IDWKbcA2C93QNoAnACeAGAAYEBiAGfBJIBAzEuNJgBAKABAaoBB2d3cy13aXqwAQrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwj3wvOZo-3sAhVB62EKHcEyB3EQ4dUDCA0&uact=5`);
}

function init() {
    searchForm.addEventListener("submit", handleSubmit)
}

init()
