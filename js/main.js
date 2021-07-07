let contentBankTitle = document.querySelector(".content__bank__title");
contentBankTitle.addEventListener('click', () => {
    let contentBankContent = document.querySelector(".content__bank__content");

    if (contentBankContent.classList.contains('hide--bank__content')) {
        contentBankTitle.querySelector("i").style.transform = 'translateY(-50%)  rotate(0deg)';

        contentBankContent.style.display = "block";
        setTimeout(() => {
            contentBankContent.classList.toggle('hide--bank__content')
        }, 100)
    }
    else {
        contentBankTitle.querySelector("i").style.transform = 'translateY(-50%)  rotate(180deg)';

        setTimeout(() => {
            contentBankContent.style.display = 'none';
        }, 500)

        contentBankContent.classList.toggle('hide--bank__content')
    }
    // contentBankContent.classList.toggle('hide--bank__content')
})