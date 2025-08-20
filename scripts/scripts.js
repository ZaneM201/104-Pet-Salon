$(document).ready(function() {
    /* header */
    let salon = {
        address: "123 Pet Street",
        email: "thepawspa@email.com",
        phone: "(123) 456-7890",
    };

    $("#address").html(salon.address);
    $("#email").html(salon.email);
    $("#phone").html(salon.phone);

    /* dark mode */
    const $html = $("#modeToggle");
    const $modeButton = $("#changeModeButton");
    const $modeIcon = $("#modeIcon");

    /* check for saved theme */
    const currentTheme = localStorage.getItem("theme") || "light";
    $html.attr("data-bs-theme", currentTheme);
    updateModeIcon(currentTheme);

    /* mode toggle */
    $modeButton.on("click", function() {
        const currentMode = $html.attr("data-bs-theme");
        const newMode = currentMode === "light" ? "dark" : "light";
                
        $html.attr("data-bs-theme", newMode);
        localStorage.setItem("theme", newMode);
        updateModeIcon(newMode);
    });

    /* icon update */
    function updateModeIcon(mode) {
        if (mode === "dark") {
            $modeIcon.attr("class", "fas fa-moon");
        } else {
            $modeIcon.attr("class", "fas fa-sun");
        }
    }

    /* transition */ 
    $(window).on('load', function() {
    $('body').addClass('transitions-enabled');
    });
});