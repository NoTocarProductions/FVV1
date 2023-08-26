
    let navBar = document.getElementById('navBar');
    let stripe = document.getElementById('stripe');
    let isNavBarHidden = false;

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > stripe.getBoundingClientRect().top && !isNavBarHidden) {
            navBar.classList.remove('hidden');
            isNavBarHidden = true;
        } else if (window.scrollY <= stripe.getBoundingClientRect().top && isNavBarHidden) {
            navBar.classList.add('hidden');
            isNavBarHidden = false;
        }
    }

    // Attach the function to scroll event
    window.addEventListener('scroll', handleScroll);
