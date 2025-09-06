async function abcd() {
    let blob = await fetch (`https://randomuser.me/api/`)
    let ans = await blob.json();

    console.log(ans.results[0].name);
}

abcd(); 