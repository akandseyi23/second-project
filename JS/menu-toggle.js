document.addEventListener("DOMContentLoaded", function () {
    var mainbars = document.querySelectorAll(".mainbar");

    mainbars.forEach(function (mainbar) {
        var toplink = mainbar.querySelector(".toplink");
        var menuIcon = mainbar.querySelector(".ican .bi-list");

        if (!toplink || !menuIcon) {
            return;
        }

        menuIcon.style.cursor = "pointer";

        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            toplink.classList.toggle("mobile-open");
        });

        document.addEventListener("click", function (event) {
            if (!mainbar.contains(event.target)) {
                toplink.classList.remove("mobile-open");
            }
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            document.querySelectorAll(".toplink.mobile-open").forEach(function (el) {
                el.classList.remove("mobile-open");
            });
        }
    });
});
