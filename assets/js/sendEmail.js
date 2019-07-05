function sendMail(contactForm) {
    emailjs.send("gmail", "david_hayden_cv", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page - This line was in the source code in the tutorial. If I take this away, the email function doesn't work... :`(
}
