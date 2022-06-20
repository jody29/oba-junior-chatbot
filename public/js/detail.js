const backBtn = document.querySelector('.back-btn-container')

backBtn.addEventListener("click", ()=> {
    console.log("terug")
    window.history.back(-1);
})
